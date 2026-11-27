# CI — le filet de sécurité qui remplace la relecture

Sans développeur dans la boucle, **c'est la CI qui autorise une fusion**. Chaque pull request
et chaque push sur `main` lancent : anti-fuite, lint, types, tests (dont accessibilité),
compilation. Versions épinglées (vérifiées le 2026-11-16).

## `.github/workflows/ci.yml` — squelette commun

```yaml
name: ci

on:
  pull_request:
  push:
    branches: [main]

permissions:
  contents: read

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  # les jobs de la stack (section « CI » du fichier de stack)
```

Règles pour les jobs de la stack :
- `npm ci` (jamais `npm install`) ; Node 24 via `actions/setup-node` (v7.1.0, épinglée à son SHA) avec cache npm.
- Dépendances en **version exacte** : un `.npmrc` (`save-exact=true`) dans chaque dossier qui a un `package.json`.
- **Lint sans `--fix`** en CI (un script `lint` qui corrige masquerait l'erreur).
- Aucun service externe ni secret : les tests tournent sans base de données réelle.

## Contrôles communs — copiés tels quels depuis le socle d'ADA

Les workflows communs de `catalogue/socle/.github/workflows/` d'ADA, sans les modifier, avec
`madeleine.json`. Ils appellent en priorité les workflows réutilisables de la Fabnum
([dnum-mi/fabnum-cicd](https://github.com/dnum-mi/fabnum-cicd)), et sinon les actions de
[Constance](https://github.com/Carolinedanslesnuages/constance) et de Madeleine, toutes épinglées à un SHA :

| Fichier | Contrôle requis | Ce qu'il vérifie |
|---|---|---|
| `anti-fuite.yml` | « Anti-fuite (gitleaks) / Scan git history for leaked secrets » | aucun secret dans l'historique (`scan-gitleaks` de fabnum-cicd) ; faux positifs dans `.gitleaks.toml` |
| `commits.yml` | « Commits (Conventional Commits) / Lint commit messages » | chaque commit de la PR suit Conventional Commits (`lint-commits` de fabnum-cicd) |
| `workflows.yml` | « Workflows (zizmor) / Audit workflows with zizmor » | sécurité des workflows : actions épinglées à un SHA, `persist-credentials: false`, pas d'injection (`scan-zizmor`) |
| `configuration.yml` | « Configuration (Trivy) / Scan config files vulnerabilities » | aucune mauvaise configuration haute ou critique (Dockerfile, chart Helm) (`scan-trivy`) |
| `titre-pr.yml` | « Titre de PR (Conventional Commits, semver) » | le titre de la PR, qui devient le commit de `main` |
| `taille-fichiers.yml` | « Taille des fichiers (une responsabilité par fichier) » | au plus 400 lignes non vides par fichier de code, 600 par test ; un fichier déjà plus long est toléré tant qu'il ne grossit pas |
| `dependances.yml` | « Dépendances (paquet réel, version exacte, licence) » | chaque dépendance npm ajoutée ou modifiée : paquet existant, version exacte et publiée depuis 14 jours, licence acceptée, pas dépréciée ([Madeleine](https://github.com/Carolinedanslesnuages/madeleine)) ; exceptions dans `madeleine.json` |

Découper par responsabilité, jamais une fonction par fichier.

Projet avec écran : un job « Accessibilité RGAA (pages construites) » dans `ci.yml`, sur
`ubuntu-24.04`, qui construit le site puis lance [Emmanuelle](https://github.com/Carolinedanslesnuages/emmanuelle)
(épinglée à un SHA) sur ses pages ; reprendre celui du modèle de la stack dans le catalogue d'ADA.

Valider les fichiers avant de commiter (si Docker est disponible) :
`docker run --rm -v "$PWD:/repo" -w /repo rhysd/actionlint:1.7.12`

## Protection de `main` — à dire au PO quand le dépôt est sur GitHub

> Pour que rien n'arrive sur la branche principale sans que les contrôles soient verts :
>
> 1. Dépôt GitHub → **Settings** → **Rules** → **Rulesets** → **New ruleset** → **New branch ruleset**.
> 2. Nom : `main protégée` ; **Enforcement status** : *Active*.
> 3. **Target branches** → *Add target* → *Include default branch*.
> 4. Cochez : **Restrict deletions**, **Block force pushes**, **Require a pull request before
>    merging** (0 approbation requise), **Require status checks to pass** → *Add checks* :
>    ajoutez chaque contrôle de la CI (ils apparaissent après une première exécution).
> 5. **Create**.

Limite : sur un compte personnel **gratuit**, les règles ne s'appliquent pas aux dépôts
**privés** (il faut GitHub Pro, ou une organisation Team). Dans ce cas l'interface PO garde
le bouton « Valider et fusionner » grisé tant que la CI n'est pas verte : protection
applicative seulement, à signaler au PO.
