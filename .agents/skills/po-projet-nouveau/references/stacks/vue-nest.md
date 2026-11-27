# Stack : Vue 3 + NestJS + PostgreSQL

**Quand la choisir :** application métier structurée, nombreuses règles,
plusieurs écrans, durée de vie longue, plusieurs développeurs.

Versions validées le 2026-11-16 : create-vue 3.24, Vite 8, NestJS CLI (projet ESM
avec Vitest et oxlint), **Prisma 7** (ne pas prendre `latest`, qui pointe vers une 8.0 RC),
vue-dsfr 8.21 (embarque le DSFR 1.14).

## Structure
```
<projet>/
├── front/            Vue 3 + Vite + TypeScript + Vue Router + Pinia + Vitest
├── api/              NestJS (ESM) + TypeScript + Prisma 7 + Vitest
│   ├── prisma/schema.prisma
│   ├── prisma.config.ts
│   └── src/prisma/   PrismaService + PrismaModule (global)
├── docker-compose.yml   PostgreSQL 16 pour le développement
├── .gitignore
├── PROJET.md
└── CLAUDE.md
```

## Initialisation

### 1. Générer front et API
```bash
npm create vue@latest front -- --ts --router --pinia --vitest --eslint --prettier
cd front && npm install && cd ..
npx @nestjs/cli@latest new api --package-manager npm --skip-git --strict
```

### 2. Prisma 7 (dans `api/`)
```bash
npm install @prisma/client@7 @prisma/adapter-pg@7 dotenv
npm install -D prisma@7
npx prisma init --datasource-provider postgresql --no-skills
```
Puis :
- si le fichier créé s'appelle `prisma7.config.ts`, le renommer en `prisma.config.ts` ;
- dans `prisma/schema.prisma`, mettre `output = "../src/generated/prisma"`
  (sinon la compilation Nest échoue : le client doit être sous `src/`) ;
- dans `api/.gitignore`, ignorer `/src/generated/prisma` ;
- ajouter le script `"postinstall": "prisma generate"` (`npm pkg set scripts.postinstall="prisma generate"`) ;
- créer `src/prisma/prisma.service.ts` :
  ```ts
  import { Injectable, OnModuleDestroy } from '@nestjs/common';
  import { PrismaPg } from '@prisma/adapter-pg';
  import { PrismaClient } from '../generated/prisma/client.js';

  @Injectable()
  export class PrismaService extends PrismaClient implements OnModuleDestroy {
    constructor() {
      super({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });
    }
    async onModuleDestroy(): Promise<void> {
      await this.$disconnect();
    }
  }
  ```
- créer `src/prisma/prisma.module.ts` (`@Global()`, fournit et exporte `PrismaService`)
  et l'ajouter aux `imports` de `AppModule` ;
- `npx prisma generate`.

### 3. Base de données et configuration
- `docker-compose.yml` : service `db`, image `postgres:16`, port 5432,
  utilisateur / mot de passe / base = slug du projet, volume nommé.
- `api/.env` : `DATABASE_URL="postgresql://<slug>:<slug>@localhost:5432/<slug>?schema=public"`
  (jamais commité). Créer `api/.env.example` avec des valeurs factices.
- `api/src/main.ts` : ajouter `import 'dotenv/config';` en première ligne et
  `app.setGlobalPrefix('api');` après la création de l'application.
- `front/vite.config.ts` : `server.proxy` `/api` → `http://localhost:3000`.

### 4. Nettoyer le front
Supprimer la démo de create-vue (`HelloWorld`, `TheWelcome`, `WelcomeItem`,
`icons/`, `AboutView`, `assets/`) et son test. Garder une page d'accueil
`HomeView.vue` avec un `h1` au nom du projet, et un test `views/__tests__/HomeView.spec.ts`
qui vérifie ce titre. Le routeur n'a qu'une route `/` nommée `accueil`.

Dans `front/index.html` : `<html lang="fr">` et `<title>` = nom du projet.

### 4 bis. Accessibilité automatique (RGAA)
`cd front && npm install -D axe-core`, puis créer `src/__tests__/accessibilite.ts` :
```ts
import axe from 'axe-core'

/** axe-core, WCAG 2.1 A/AA (base du RGAA 4). Couvre environ un tiers des critères. */
export async function violationsAccessibilite(element: Element): Promise<string[]> {
  const resultat = await axe.run(element, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
    rules: { 'color-contrast': { enabled: false } }, // non mesurable sous jsdom
  })
  return resultat.violations.map((v) => `${v.id} — ${v.help} (${v.nodes.length}) : ${v.helpUrl}`)
}
```
Ne pas utiliser `vitest-axe` (non maintenu). Ajouter au test de `HomeView` un test
« aucune violation » (montage avec `attachTo: document.body`).

### 5. Vérifier
Tests, lint et compilation des deux côtés (voir « Commandes »).
Si Docker est disponible : `docker compose up -d`, puis vérifier que l'API
se connecte (`SELECT 1` via Prisma).

## Conventions
- **Accessibilité à l'écriture** : `npm i -D eslint-plugin-vuejs-accessibility globals`, puis dans
  `eslint.config.ts` `...pluginVueA11y.configs['flat/recommended']` et la règle
  `'vuejs-accessibility/label-has-for': ['error', { required: { some: ['nesting', 'id'] } }]`
  (le DSFR relie par for/id). Les bases RGAA vont dans la section « Accessibilité » d'`AGENTS.md`.
- **Noms explicites** : règle ESLint `id-length` (3 caractères minimum, propriétés exclues,
  exceptions `vi`, `id`, `ok`, `fs`, `db`, `ui`, `to`, `_`). Front : dans `eslint.config.ts`.
  API : `npm i -D eslint@9 typescript-eslint`, un `eslint.config.mjs` limité à cette règle, et
  `"lint": "oxlint --type-aware src/ test/ && eslint ."` (oxlint ne sait pas la contrôler).
- API : NestJS en modules ESM (imports avec suffixe `.js`). Un module par domaine métier.
- Validation des entrées sur des DTO (`class-validator`) ou un schéma Zod
  (`StandardSchemaValidationPipe`). Jamais de `any`.
- Accès aux données uniquement via `PrismaService`.
- Front : un dossier `src/views/` par écran, la logique d'appel API dans `src/services/`.
  Composition API (`<script setup lang="ts">`).
- **Pinia** (`src/stores/<domaine>.ts`, syntaxe « setup store ») dès qu'une donnée sert à
  plusieurs écrans ou composants, doit survivre à un changement de page, ou est filtrée /
  modifiée à plusieurs endroits. Le store appelle les services ; les écrans lisent le store.
  État propre à un seul écran → `ref` local, pas de store. Supprimer le store d'exemple
  `counter.ts` de create-vue.
- Tout critère d'acceptation se traduit par au moins un test (Vitest des deux côtés),
  et chaque écran a un test d'accessibilité automatique.
- Tests front qui simulent un service : typer le mock (`vi.fn<() => Promise<T>>()`),
  sinon oxlint échoue.
- **Toute modification de `schema.prisma` crée une migration
  (`npx prisma migrate dev --name <nom>`) et doit être signalée pour relecture.**
  Lancer ensuite `npx prisma generate` : Prisma 7 ne le fait plus automatiquement.
- Données fictives : `api/prisma/seed.ts` exécuté par `tsx` (`npm i -D tsx`, puis
  `seed: "tsx prisma/seed.ts"` dans `migrations` de `prisma.config.ts`) ; lancer avec `npx prisma db seed`.
- Tests front qui simulent un service : dans `beforeEach`, mettre des accolades
  (`beforeEach(() => { mock.mockReset() })`). Sans accolades, Vitest exécute
  la valeur renvoyée comme nettoyage et le test échoue de façon trompeuse.

## Commandes
| Action | Commande |
|---|---|
| Base de données | `docker compose up -d` |
| Lancer l'API | `cd api && npm run start:dev` |
| Lancer le front | `cd front && npm run dev` |
| Tests | `cd api && npm test && cd ../front && npm run test:unit -- --run` |
| Lint | `cd api && npm run lint && cd ../front && npm run lint` |
| Compilation | `cd api && npm run build && cd ../front && npm run type-check` |

## CI
Jobs à ajouter au squelette de `references/ci.md` :
```yaml
  api:
    name: API (lint, tests, compilation)
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
      - run: npm run lint
      - run: npm test
      - run: npm run test:e2e
      - run: npm run build

  front:
    name: Front (lint, types, tests dont accessibilité, compilation)
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
`npm ci` déclenche `prisma generate` (postinstall) : pas besoin de base de données. Le lint
front est appelé sans `--fix` (le script `lint` de create-vue corrige en silence).

## Version
`api/src/version/version.controller.ts` :
```ts
import { Controller, Get, Header } from '@nestjs/common';
import { readFileSync } from 'node:fs';

/** Contrat repo-version-json (format Dockerflow) : le fichier de l'image, sinon « dev ». */
export const VERSION_DEV = {
  source: '', version: 'dev', commit: '', build: '', code_date: '', changes: [], history: [],
};

@Controller()
export class VersionController {
  @Get(['__version__', 'api/__version__'])
  @Header('Cache-Control', 'no-store')
  version(): unknown {
    try {
      return JSON.parse(readFileSync(process.env.VERSION_JSON ?? '/app/version.json', 'utf8'));
    } catch {
      return { ...VERSION_DEV };
    }
  }
}
```
Déclarer le contrôleur dans `AppModule`. Configurer le préfixe dans une fonction partagée
par `main.ts` et les tests e2e (`src/configurer-app.ts`) :
`app.setGlobalPrefix('api', { exclude: ['__version__', 'api/__version__'] })`.
Test e2e : `GET /__version__` et `GET /api/__version__` → 200 et `version: 'dev'`.
Front : ajouter `'/__version__': 'http://localhost:3000'` au proxy Vite.

## .gitignore
À la racine (puis fusionner le `.gitignore` durci de `references/securite.md`) : `node_modules/`, `dist/`, `.env`, `coverage/`, `.DS_Store`, `*.tsbuildinfo`

## Option DSFR
**Ne pas installer `@gouvfr/dsfr` directement** : depuis la 1.15, son installation
échoue (il exige `npm create @gouvfr/dsfr`). `vue-dsfr` embarque la bonne version.
```bash
cd front && npm install @gouvminint/vue-dsfr @iconify/vue
```
Dans `src/main.ts` :
```ts
import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'
import '@gouvminint/vue-dsfr/dist/vue-dsfr.css'   // pas '/styles' : non typé, vue-tsc échoue
import VueDsfr from '@gouvminint/vue-dsfr'
// …
app.use(VueDsfr)
```
Dans `vite.config.ts`, ajouter (le DSFR contient des media queries pour
Internet Explorer que le minificateur de Vite 8 refuse) :
```ts
css: { lightningcss: { errorRecovery: true } },
```
Des avertissements « Invalid media query » restent affichés à la compilation : c'est normal.

Dans `App.vue` : `DsfrHeader` (avec `service-title` = nom du projet et
`:logo-text="['République', 'Française']"`), `<main class="fr-container">` contenant
`RouterView`, puis `DsfrFooter`. Utiliser ensuite les composants `Dsfr*`
(DsfrButton, DsfrInput, DsfrTable…) plutôt que du HTML maison.
