# Stack : Nuxt (Vue 3 rendu côté serveur)

**Quand la choisir :** site public qui doit être bien référencé par les moteurs
de recherche, pages de contenu, éventuellement quelques routes serveur simples.

## Structure
```
<projet>/
├── app/
│   ├── pages/         une page = un fichier = une URL
│   ├── components/
│   └── composables/
├── server/api/        routes serveur simples (si besoin)
├── tests/             Vitest + @nuxt/test-utils
├── nuxt.config.ts
├── PROJET.md
└── CLAUDE.md
```

## Initialisation
```bash
npx nuxi@latest init . --packageManager npm --gitInit false --force
npm install -D vitest @nuxt/test-utils @vue/test-utils happy-dom
```
Si `nuxi init` pose des questions, construis la structure à la main :
`package.json` avec `nuxt`, `vue`, `vue-router`, scripts `dev`, `build`, `generate`.
Crée `vitest.config.ts` avec `defineVitestConfig` (environnement `nuxt`)
et ajoute le script `"test": "vitest run"`.
Crée une page d'accueil `app/pages/index.vue` et un test qui la monte.

## Conventions
- Composition API, `<script setup lang="ts">`.
- Titre et description de chaque page via `useSeoMeta`.
- Accessibilité : un seul `h1` par page, textes alternatifs sur les images.
- Pas de base de données dans cette stack : si une story en nécessite une,
  le signaler, c'est une décision d'architecture.
- Tout critère d'acceptation se traduit par au moins un test.

## Commandes
| Action | Commande |
|---|---|
| Lancer | `npm run dev` |
| Tests | `npm test` |
| Générer le site statique | `npm run generate` |

## CI
Jobs à ajouter au squelette de `references/ci.md` (non éprouvés, à valider avec actionlint) :
```yaml
  nuxt:
    name: Nuxt
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
      - run: npm test
      - run: npm run build
```

## Version
`server/routes/__version__.get.ts` : `defineEventHandler`, lecture du fichier `VERSION_JSON` (défaut `/app/version.json`), repli « dev » (contrat dans `references/socle.md`). Test du repli.

## .gitignore
(puis fusionner le `.gitignore` durci de `references/securite.md`)
`node_modules/`, `.nuxt/`, `.output/`, `dist/`, `.env`, `.DS_Store`

## Option DSFR
Ne pas installer `@gouvfr/dsfr` directement (voir la fiche vue-nest.md, section « Option DSFR »).
```bash
npm install @gouvminint/vue-dsfr @iconify/vue
```
Enregistre `VueDsfr` dans un plugin `app/plugins/dsfr.ts` et ajoute dans `nuxt.config.ts`
`css: ['@gouvfr/dsfr/dist/dsfr.min.css', '@gouvfr/dsfr/dist/utility/icons/icons.min.css', '@gouvminint/vue-dsfr/dist/vue-dsfr.css']`.
Utilise les composants `Dsfr*`.
