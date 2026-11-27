# Stack : Vue 3 + Node.js (Express)

**Quand la choisir :** petite application, API simple, peu de règles métier,
besoin d'aller vite sans l'outillage complet de NestJS.

## Structure
```
<projet>/
├── front/          Vue 3 + Vite + TypeScript + Vue Router + Pinia + Vitest
├── api/            Express + TypeScript (exécuté avec tsx) + Vitest + Supertest
│   ├── src/app.ts       création de l'application (exportée, pour les tests)
│   ├── src/server.ts    démarrage sur le port 3000
│   ├── src/routes/      une route par domaine
│   └── data/            base SQLite (fichier ignoré par git)
├── PROJET.md
└── CLAUDE.md
```

## Initialisation
```bash
npm create vue@latest front -- --ts --router --pinia --vitest --eslint --prettier
cd front && npm install && cd ..
mkdir -p api/src/routes api/data && cd api
npm init -y
npm install express better-sqlite3 zod
npm install -D typescript tsx vitest supertest @types/express @types/supertest @types/better-sqlite3 @types/node
npx tsc --init --strict --module nodenext --target es2022 --outDir dist
cd ..
```
Dans `api/package.json`, ajoute les scripts :
`"dev": "tsx watch src/server.ts"`, `"test": "vitest run"`, `"build": "tsc"`.
Crée une route `GET /api/sante` qui renvoie `{ "statut": "ok" }` et son test.
Ajoute dans `front/vite.config.ts` un proxy `/api` → `http://localhost:3000`.

## Conventions
- Validation de toutes les entrées avec `zod`.
- `app.ts` n'appelle jamais `listen` : c'est `server.ts` qui le fait (testabilité).
- Base SQLite via `better-sqlite3` ; les créations/modifications de tables sont
  dans `api/src/db/migrations/` sous forme de fichiers SQL numérotés,
  **à signaler pour relecture.**
- Front : mêmes conventions que la stack Vue 3 + NestJS (`views/`, `services/`, règle Pinia,
  test d'accessibilité axe-core par écran — voir `vue-nest.md`, sections 4 bis et Conventions).
- Tout critère d'acceptation se traduit par au moins un test.

## Commandes
| Action | Commande |
|---|---|
| Lancer l'API | `cd api && npm run dev` |
| Lancer le front | `cd front && npm run dev` |
| Tests | `cd api && npm test && cd ../front && npm run test:unit -- --run` |

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
      - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1 # v7.1.0
        with:
          node-version: 24
          cache: npm
          cache-dependency-path: api/package-lock.json
      - run: npm ci
      - run: npm test

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
Dans `api/src/app.ts`, avant les routes protégées : `GET /__version__` et `GET /api/__version__` lisent `process.env.VERSION_JSON ?? '/app/version.json'` et renvoient son contenu, sinon `{"source":"","version":"dev","commit":"","build":"","code_date":"","changes":[],"history":[]}`. Test Supertest du repli « dev ». Proxy Vite : ajouter `/__version__`.

## .gitignore
(puis fusionner le `.gitignore` durci de `references/securite.md`)
`node_modules/`, `dist/`, `.env`, `api/data/*.db`, `coverage/`, `.DS_Store`

## Option DSFR
Suivre exactement la section « Option DSFR » de `vue-nest.md` dans `front/`
(installation via `vue-dsfr` uniquement, imports CSS, option `errorRecovery` de Vite).
