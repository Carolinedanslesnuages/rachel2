---
name: po-projet-nouveau
description: Crée un nouveau projet (POC) pour un Product Owner — demande le nom, l'objectif, la stack parmi celles autorisées, puis génère un squelette testé avec CI, anti-fuite gitleaks, release-please, ADR du choix de stack et modèles d'issues GitHub. Crée des fichiers et un dépôt git ; à lancer uniquement sur demande explicite.
when_to_use: nouveau projet PO, créer un POC, démarrer un produit, choisir une stack, initialiser un projet pour un product owner
argument-hint: "[nom du projet]"
disable-model-invocation: true
---

# Créer un nouveau projet pour un PO

Tu accompagnes un Product Owner : il connaît la stack attendue, mais n'est pas développeur.
Une question à la fois, en langage simple.

## 1. Nom
Le nom est dans les arguments ; sinon demande : « Quel est le nom de votre projet ? ».
Slug : minuscules, sans accents, tirets (« Réservation de salles » → `reservation-de-salles`).
Dossier cible : `projets/<slug>/` dans l'atelier, sinon `./<slug>/`. S'il existe : autre nom.

## 2. Objectif
« En une ou deux phrases, à quoi va servir ce projet, et pour qui ? » Garde la réponse telle quelle.

## 3. Stack
Présente le menu de `references/stacks/README.md` ; réponse par numéro ; lis le fichier de
stack correspondant **en entier**. Autre technologie demandée → seules ces stacks sont
prévues, voir l'équipe technique ; ne rien générer.

## 4. DSFR (stacks avec Vue)
« Le projet doit-il respecter le Design Système de l'État (DSFR) ? (oui / non) »

## 5. Récapitulatif
Nom, dossier, objectif, stack (+ DSFR), puis « Je crée le projet ? (oui / non) ».
Rien n'est créé sans « oui ».

## 6. Génération — dans cet ordre
1. Squelette : section « Initialisation » du fichier de stack (commande interactive ou en
   échec → construire à la main d'après « Structure »).
2. Sécurité : `references/securite.md` (`.gitignore` durci fusionné, `private/`, pre-commit gitleaks).
3. CI : `references/ci.md` + section « CI » du fichier de stack → `.github/workflows/ci.yml`.
4. Versions : `references/release-please.md`.
5. Socle : `references/socle.md` — `AGENTS.md` + `CLAUDE.md`, ADR-0001, modèles d'issues et
   de PR (`references/modeles-github/`), route `/__version__` (section « Version » de la stack).
6. `PROJET.md` : nom, objectif, stack (+ fichier de référence), DSFR, date, commandes de
   lancement, section « Stories réalisées » vide.
7. `git init -b main`, `pre-commit install` si disponible, puis un seul commit
   `chore: initialisation du projet <nom>`.

## 7. Vérification — sur les codes de retour, jamais sur un extrait de sortie
- Les commandes Lint, Tests et Compilation de la stack : toutes à 0.
- `git check-ignore private/ .env` : les deux ignorés ; `git status` : rien en attente.
- Si Docker est là : actionlint sur `.github/workflows/` (commande dans `references/ci.md`)
  et `docker run --rm -v "$PWD:/repo" zricethezav/gitleaks:v8.30.1 git /repo` : 0.

Un échec → le squelette reste, mais dis au PO qu'un développeur doit regarder (message en une
ligne). Arrête-toi.

## 8. Message final au PO
En langage simple, sans liste de fichiers :
- le projet est prêt, et où ; prochaine étape : `/po-story` (ou l'interface PO) ;
- un exemple de story bien écrite (rôle, besoin, bénéfice, 4 critères au maximum) ;
- s'il a un dépôt GitHub : les messages « À dire au PO » de `references/release-please.md`
  puis de `references/ci.md` (protection de `main`), **tels quels**. Sinon : prévenir qu'il
  faudra faire ces deux réglages le jour où le projet sera publié sur GitHub.

---

**Nom du projet** : $ARGUMENTS

> Si la ligne ci-dessus montre encore un nom de variable, ton agent ne substitue pas les
> arguments : prends-les dans la demande de l'utilisateur.
