# Stack : Vue 3 seul (maquette / prototype)

**Quand la choisir :** maquette cliquable pour valider un parcours avec des
utilisateurs, avant de développer le vrai projet. Pas de serveur, pas de base :
les données sont fictives et stockées dans des fichiers JSON.

## Structure
```
<projet>/
├── src/
│   ├── views/         un écran par fichier
│   ├── components/
│   ├── stores/        Pinia
│   └── donnees/       données fictives en JSON
├── PROJET.md
└── CLAUDE.md
```

## Initialisation
```bash
npm create vue@latest . -- --ts --router --pinia --vitest --eslint --prettier --force
npm install
mkdir -p src/donnees
```

## Conventions
- Toutes les données viennent de `src/donnees/*.json` via un store Pinia (obligatoire ici),
  pour pouvoir les remplacer plus tard par une vraie API.
- Composition API, `<script setup lang="ts">`.
- Priorité au parcours et à la lisibilité, pas à l'optimisation.
- Un bandeau visible « Maquette — données fictives » sur toutes les pages.
- Test d'accessibilité axe-core par écran (voir `vue-nest.md`, section 4 bis).
- Tout critère d'acceptation se traduit par au moins un test Vitest.

## Commandes
| Action | Commande |
|---|---|
| Lancer | `npm run dev` |
| Tests | `npm run test:unit -- --run` |

## CI
Jobs à ajouter au squelette de `references/ci.md` (non éprouvés, à valider avec actionlint) :
```yaml
  front:
    name: Front
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: .
    steps:
      - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
        with:
          persist-credentials: false
      - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1 # v7.1.0
        with:
          node-version: 24
          cache: npm
          cache-dependency-path: ./package-lock.json
      - run: npm ci
      - run: npx oxlint .
      - run: npx eslint .
      - run: npm run type-check
      - run: npm run test:unit -- --run
      - run: npm run build-only
```

## Version
Pas de serveur : générer `public/__version__` (JSON du repli « dev ») à la création ; il sera remplacé par le `version.json` de l'image au passage en production (`repo-version-json`).

## .gitignore
(puis fusionner le `.gitignore` durci de `references/securite.md`)
`node_modules/`, `dist/`, `coverage/`, `.DS_Store`

## Option DSFR
Suivre exactement la section « Option DSFR » de `vue-nest.md`, à la racine du projet.
