# Stack : Python (Django)

**Quand la choisir :** back-office, saisie et administration de données,
formulaires, besoin d'une interface d'administration rapidement.
Pas de front séparé : les pages sont rendues par Django.

## Structure
```
<projet>/
├── config/           réglages du projet Django
├── <app>/            une application Django par domaine métier
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│   ├── admin.py
│   ├── templates/<app>/
│   └── tests/
├── manage.py
├── requirements.txt
├── PROJET.md
└── CLAUDE.md
```

## Initialisation
```bash
python3 -m venv .venv
.venv/bin/pip install django pytest pytest-django ruff
.venv/bin/pip freeze > requirements.txt
.venv/bin/django-admin startproject config .
```
Crée `pytest.ini` avec `DJANGO_SETTINGS_MODULE = config.settings`.
Passe la langue en `fr-fr` et le fuseau en `Europe/Paris`.
Base SQLite en développement (réglage par défaut) ; la base cible (PostgreSQL)
sera configurée par un développeur avant la mise en production.
Crée une première application avec `.venv/bin/python manage.py startapp <app>`
seulement quand la première story le demande.

## Conventions
- Une application Django par domaine métier.
- Formulaires via `django.forms` (validation côté serveur systématique).
- Chaque modèle est déclaré dans `admin.py` pour être consultable.
- **Toute modification d'un `models.py` crée une migration
  (`python manage.py makemigrations`) et doit être signalée pour relecture.**
- Tout critère d'acceptation se traduit par au moins un test pytest.

## Commandes
| Action | Commande |
|---|---|
| Appliquer les migrations | `.venv/bin/python manage.py migrate` |
| Lancer | `.venv/bin/python manage.py runserver` |
| Tests | `.venv/bin/pytest` |
| Lint | `.venv/bin/ruff check .` |

## CI
Jobs à ajouter au squelette de `references/ci.md` (non éprouvés, à valider avec actionlint) :
```yaml
  django:
    name: Django
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: .
    steps:
      - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
        with:
          persist-credentials: false
      - uses: actions/setup-python@6d4fd22b20465ccc0f7354476588e8df7c9ca0e0 # v7.1.0
        with:
          python-version: '3.12'
          cache: pip
          cache-dependency-path: ./requirements.txt
      - run: pip install -r requirements.txt
      - run: ruff check .
      - run: pytest
      - run: python manage.py check --deploy --fail-level ERROR
```

## Version
Vue `version` dans `config/urls.py` sur `__version__` : `JsonResponse` du fichier `VERSION_JSON` (défaut `/app/version.json`), sinon `{"source":"","version":"dev","commit":"","build":"","code_date":"","changes":[],"history":[]}`. Test pytest du repli.

## .gitignore
(puis fusionner le `.gitignore` durci de `references/securite.md`)
`.venv/`, `__pycache__/`, `db.sqlite3`, `.env`, `.pytest_cache/`, `staticfiles/`, `.DS_Store`

## Option DSFR
Sans objet (pas de Vue). Si le DSFR est requis, choisir une autre stack ou
voir avec l'équipe de développement (paquet `django-dsfr`).
