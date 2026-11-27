# Stack : Vue 3 + Python (FastAPI) + PostgreSQL

**Quand la choisir :** traitement de données, calculs, statistiques, IA,
import/export de fichiers (CSV, Excel, PDF), ou équipe plutôt Python.

## Structure
```
<projet>/
├── front/            Vue 3 + Vite + TypeScript + Vue Router + Pinia + Vitest
├── api/
│   ├── app/
│   │   ├── main.py        application FastAPI, préfixe /api
│   │   ├── routers/       un fichier par domaine
│   │   ├── models.py      modèles SQLAlchemy
│   │   ├── schemas.py     schémas Pydantic (entrées/sorties)
│   │   └── db.py          session de base de données
│   ├── alembic/           migrations
│   ├── tests/             pytest
│   └── pyproject.toml
├── docker-compose.yml     PostgreSQL 16 pour le développement
├── PROJET.md
└── CLAUDE.md
```

## Initialisation
```bash
npm create vue@latest front -- --ts --router --pinia --vitest --eslint --prettier
cd front && npm install && cd ..
mkdir -p api/app/routers api/tests && cd api
python3 -m venv .venv
.venv/bin/pip install fastapi "uvicorn[standard]" sqlalchemy alembic "psycopg[binary]" pydantic-settings pytest httpx ruff
.venv/bin/pip freeze > requirements.txt
.venv/bin/alembic init alembic
cd ..
```
Crée `app/main.py` avec une route `GET /api/sante` qui renvoie `{"statut": "ok"}`,
et `tests/test_sante.py` qui la teste avec `TestClient`.
Configuration via `pydantic-settings` lue dans `api/.env` (jamais commité) ;
crée `api/.env.example`. Crée `docker-compose.yml` (service `db`, `postgres:16`).
Ajoute dans `front/vite.config.ts` un proxy `/api` → `http://localhost:8000`.

## Conventions
- Typage partout (annotations Python), schémas Pydantic pour toute entrée/sortie.
- Logique métier dans des fonctions testables, pas directement dans les routes.
- Style vérifié par `ruff`.
- **Toute modification de `models.py` crée une migration Alembic
  (`alembic revision --autogenerate -m "<nom>"`) et doit être signalée pour relecture.**
- Front : mêmes conventions que la stack Vue 3 + NestJS (`views/`, `services/`, règle Pinia,
  test d'accessibilité axe-core par écran — voir `vue-nest.md`, sections 4 bis et Conventions).
- Tout critère d'acceptation se traduit par au moins un test (pytest / Vitest).

## Commandes
| Action | Commande |
|---|---|
| Base de données | `docker compose up -d` |
| Lancer l'API | `cd api && .venv/bin/uvicorn app.main:app --reload` |
| Lancer le front | `cd front && npm run dev` |
| Tests | `cd api && .venv/bin/pytest && cd ../front && npm run test:unit -- --run` |
| Lint | `cd api && .venv/bin/ruff check .` |

## CI
Jobs à ajouter au squelette de `references/ci.md` (non éprouvés, à valider avec actionlint) :
```yaml
  api:
    name: API
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: api
    steps:
      - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
        with:
          persist-credentials: false
      - uses: actions/setup-python@6d4fd22b20465ccc0f7354476588e8df7c9ca0e0 # v7.1.0
        with:
          python-version: '3.12'
          cache: pip
          cache-dependency-path: api/requirements.txt
      - run: pip install -r requirements.txt
      - run: ruff check .
      - run: pytest

  front:
    name: Front
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: front
    steps:
      - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
        with:
          persist-credentials: false
      - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1 # v7.1.0
        with:
          node-version: 24
          cache: npm
          cache-dependency-path: front/package-lock.json
      - run: npm ci
      - run: npx oxlint .
      - run: npx eslint .
      - run: npm run type-check
      - run: npm run test:unit -- --run
      - run: npm run build-only
```

## Version
Recette FastAPI de la skill `repo-version-json` (`references/routes.md`) : module `app/version.py`, routeur sur `/__version__` et `/api/__version__`, `include_in_schema=False`, repli « dev ». Test pytest du repli. Proxy Vite : ajouter `/__version__`.

## .gitignore
(puis fusionner le `.gitignore` durci de `references/securite.md`)
`node_modules/`, `dist/`, `.venv/`, `__pycache__/`, `.env`, `.pytest_cache/`, `coverage/`, `.DS_Store`

## Option DSFR
Suivre exactement la section « Option DSFR » de `vue-nest.md` dans `front/`.
