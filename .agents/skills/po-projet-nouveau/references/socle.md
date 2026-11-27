# Socle documentaire et GitHub — toutes les stacks

Dans ADA, les fichiers communs (modèles d'issues, workflows communs, `CLAUDE.md`, référentiel
RGAA…) vivent une seule fois dans `catalogue/socle/`, copié avant le modèle.

## 1. `AGENTS.md` (source) et `CLAUDE.md` (import)

Les consignes du projet vivent dans `AGENTS.md`, lu par Codex, OpenCode, Cursor, Copilot,
Gemini CLI… `CLAUDE.md` ne contient qu'une ligne : `@AGENTS.md`. Ainsi le projet marche avec
n'importe quel agent de code.

`AGENTS.md` contient : l'objectif du projet (une phrase), les sections « Conventions » et
« Commandes » du fichier de stack, la règle des messages de commit (`release-please.md`), la
règle Pinia si le projet est une application Vue à plusieurs écrans (pas pour un composant à
intégrer, une documentation VitePress ni un site d'information Nuxt : aucune donnée n'y est
partagée entre écrans), la section **« Accessibilité (RGAA) — les bases, toujours »**
(reprendre celle du modèle `catalogue/vue-nest-dsfr/` d'ADA), et : « Aucune donnée réelle, aucun
secret dans le dépôt ».

## 1 bis. Référentiel d'accessibilité

Copier le référentiel RGAA complet de la skill sœur `po-story` (`references/rgaa-4.1.2/`) dans
`ressources/accessibilite/rgaa-4.1.2/` du projet, et citer cet emplacement dans la section
« Accessibilité » d'`AGENTS.md`. Jamais dans `docs/` : c'est un aide-mémoire
pour l'agent, pas la documentation du projet, et les générateurs de site (Docpress, VitePress…)
publiant tout `docs/`, il apparaîtrait comme de la documentation.

## 2. ADR-0001 — le choix de la stack

`docs/adr/README.md` (index) et `docs/adr/0001-choix-de-la-stack.md`, au format des ADR
IA-Generative (skill `adr-new` si elle est installée) :

```markdown
# ADR-0001 — Choix de la stack : <libellé>

- **Statut** : Accepted
- **Date** : <date du jour>
- **Décideurs** : <PO>, via ADA
- **Sujet** : stack technique du projet <nom>

## Contexte
<objectif du projet, donné par le PO>. Le projet démarre comme POC réalisé par un PO avec
un assistant de code ; seules les stacks de l'atelier sont autorisées.

## Options considérées
### Option A — <stack retenue>
- <« Quand la choisir » du fichier de stack>
### Option B — <stack voisine du menu>
- **Pourquoi pas** : <en une ligne, d'après « Quand la choisir »>

## Décision
**Option retenue : A** — choix du PO, conforme aux consignes de l'équipe technique.

## Conséquences
- **Positives** : conventions, tests et CI de l'atelier disponibles d'emblée.
- **Négatives** : <ce que la stack ne couvre pas, ex. « pas de base de données »>.
- **À surveiller** : un besoin hors du périmètre de la stack = nouvelle ADR.
```
Index : `| [0001](0001-choix-de-la-stack.md) | Choix de la stack | Accepted | <date> |`

## 3. Modèles d'issues GitHub (`.github/ISSUE_TEMPLATE/`)

Les mêmes champs que le formulaire de l'interface PO, pour qu'une story créée directement sur
GitHub soit structurée pareil. Copier tels quels :
- `user-story.yml`, `bug.yml`, `config.yml` → voir `references/modeles-github/`.

Et `.github/pull_request_template.md` (même dossier) : reprend la fiche de relecture.

## 4. Route de version `GET /__version__`

Contrat de la skill `repo-version-json` (ADR-0004 MirAI, format Dockerflow) : servir
`/app/version.json` tel quel ; s'il manque (poste, tests, aperçu) renvoyer
`{"source":"","version":"dev","commit":"","build":"","code_date":"","changes":[],"history":[]}`,
**jamais une erreur**. Sans authentification, à la racine **et** sous le préfixe d'API.
Un test vérifie le repli « dev ». Mise en œuvre par stack : section « Version » du fichier
de stack. La production du `version.json` dans l'image Docker relève de `repo-version-json
--setup`, au passage en production (développeur).
