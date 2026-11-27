# Sécurité dès la création — toutes les stacks

Repris de la skill `repo-init` (agent-skills IA-Generative) : un garde anti-secret local qui
**bloque** le commit, doublé d'un contrôle en CI. Si la skill `repo-init` est installée, on peut
l'appeler à la place des étapes 1 à 3 (même résultat).

## 1. `.gitignore` durci (à fusionner avec celui de la stack, jamais remplacer)

```gitignore
# --- Sorties locales sensibles — ne pas committer
private/

# --- Secrets ---
.env
.env.*
!.env.example
*.secret
*.pem
*.key
*.p12
*.pfx
id_rsa*
id_ed25519*
*.kubeconfig
kubeconfig*
*.tfstate
*.tfstate.*
secrets/

# --- OS / éditeurs ---
.DS_Store
.idea/
.vscode/*.local
*.swp
```

## 2. Dossier `private/`

Créer `private/README.md` : « Sorties sensibles (exports, audits, données réelles) : jamais
dans git. » Vérifier : `git check-ignore private/ .env` doit afficher les deux.

Règle pour le PO : **aucune donnée réelle dans un POC**. Des données fictives uniquement.

## 3. Anti-fuite local bloquant — pre-commit + gitleaks

`.pre-commit-config.yaml` :
```yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.30.1
    hooks:
      - id: gitleaks
```
Installer le hook : `pre-commit install` (si `pre-commit` est absent : `pipx install pre-commit`
ou `brew install pre-commit` ; **demander avant d'installer un logiciel sur le poste**).
Pas d'action GitHub `gitleaks-action` : payante pour les organisations, elle échoue sans scanner.

## 3 bis. Faux positif connu (stacks NestJS)

Le `README.md` généré par `nest new` contient un badge d'exemple `token=abc123def456` que
gitleaks prend pour un secret. Remplacer ce README par un vrai (objectif + commandes), et poser
à la racine `.gitleaks.toml` (lu automatiquement par gitleaks), car l'historique le contient :
```toml
[extend]
useDefault = true

[[allowlists]]
description = "Badge d exemple du README généré par NestJS : faux jeton public, pas un secret"
regexes = ['^abc123def456$']
```
Toute autre exception : **interdite sans développeur**. Un vrai secret ne s'ajoute jamais ici.

## 4. Anti-fuite en CI

Le workflow `anti-fuite.yml` de `references/ci.md` (Constance : binaire gitleaks épinglé et vérifié par empreinte).
C'est lui qui fait foi : un poste sans pre-commit ne contourne pas la CI.

## Interdits

- `--no-verify` (contourne le hook) : jamais.
- Un secret détecté : ne pas le « masquer » dans un commit suivant, il reste dans l'historique.
  Arrêter, prévenir, et considérer le secret comme compromis (le révoquer). C'est un cas
  « besoin d'un développeur ».
