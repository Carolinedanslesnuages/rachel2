---
name: po-story
description: Réalise une user story d'un Product Owner sur un projet d'ADA — vérifie qu'elle est complète et courte, fait valider un plan, puis code sur une branche avec tests obligatoires, audit RGAA, contrôle de périmètre et fiche de relecture. Écrit du code et des commits ; à lancer uniquement sur demande explicite.
when_to_use: user story, réaliser une story, implémenter une fonctionnalité pour le PO, story d'ADA, issue user-story
argument-hint: "<texte de la user story, ou numéro d'issue GitHub>"
disable-model-invocation: true
---

# Réaliser une user story

Tu travailles pour un Product Owner non développeur : langage métier, une question à la fois.
Un problème signalé (quelque chose ne marche pas) n'est pas une story : c'est `po-bug`.

## 0. Quel projet ?
Le dépôt courant s'il contient `PROJET.md` ; sinon les dossiers de `projets/` qui en ont un
(un seul → le prendre en le nommant ; plusieurs → liste numérotée ; aucun → `po-projet-nouveau`).
Lire `PROJET.md`, `AGENTS.md` et la fiche de stack indiquée (skill sœur `po-projet-nouveau`,
`references/stacks/`). Toutes les commandes s'exécutent **dans le dossier du projet**.
Story donnée par numéro d'issue → la lire (`gh issue view <n>`), la garder pour `Closes #<n>`.

## 1. Complète et courte ?
**Complète** : rôle, besoin, bénéfice, critères d'acceptation vérifiables.
**Courte** : un écran ou un parcours, **4 critères au maximum**, au plus une évolution des données.
- Incomplète ou règle métier ambiguë → **trois questions au plus**, numérotées, puis arrêter.
- Trop grosse → proposer un découpage en stories numérotées, laisser choisir, arrêter.
Ne jamais deviner une règle métier.

## 2. Analyse
Fichiers concernés ; évolution des données (point d'attention) ; contradiction avec une story
de `PROJET.md` ; dépendance à une story non fusionnée → proposer d'attendre la fusion
(recommandé) ou de partir de sa branche (relectures liées, à noter dans la fiche).
**Pinia** : un store `src/stores/<domaine>.ts` si la donnée sert à plusieurs écrans ou
composants, survit à un changement de page, ou est filtrée/modifiée à plusieurs endroits ;
sinon un `ref` local. Annoncer le choix dans le plan.

## 3. Plan à valider
En langage métier, sans noms de fichiers :
> **Ce qui va changer pour l'utilisateur :** …
> **Comment je vérifie chaque critère :** un test par critère.
> **Accessibilité :** les points RGAA concernés.
> **Point d'attention :** (données, dépendance…)
>
> Je lance la réalisation ? (oui / non)

Rien n'est écrit avant « oui » (sous Claude Code : présenter le plan et attendre, sans coder).

## 4. Réalisation — rapide
1. `git status` propre, sinon arrêter. Branche `story/<slug-court>` depuis `main`.
2. **Tests d'abord** : un par critère, et un test d'accessibilité automatique par écran créé
   ou modifié (`references/rgaa.md`).
3. Implémenter selon `AGENTS.md`, avec des **noms explicites** (jamais `el`, `x`, `tmp` ; les noms
   imposés par les bibliothèques restent). Pendant le travail, ne lancer **que les tests touchés**.
4. Trois échecs sur le même problème → arrêter, l'expliquer simplement au PO, et proposer
   de demander un développeur (label `story:besoin-dev` si l'issue existe).

## 5. Contrôle final — une seule fois
1. Périmètre : `references/perimetre.md` ; retirer ce qui est hors sujet.
2. En une passe : tests complets, lint (sans correction automatique), types, compilation.
   **Juger sur le code de retour de chaque commande**, jamais sur un extrait filtré.
3. Bloquant : un code non nul ; un critère sans test ; aucun fichier de test dans
   `git diff --name-only main...HEAD` ; une violation d'accessibilité automatique ;
   un secret détecté (skill sœur `po-projet-nouveau`, `references/securite.md`).
4. Grille RGAA manuelle sur les seuls thèmes touchés (`references/rgaa.md`).

## 6. Livraison
- Fiche `revues/<branche>.md` selon `references/fiche-relecture.md` ; story ajoutée à
  « Stories réalisées » de `PROJET.md` (« en vérification »).
- Commits Conventional Commits : `feat: <ce que l'utilisateur peut faire>` (story complète
  dans le corps, `Closes #<n>` si issue), `test:` pour les tests seuls.
- Dépôt distant et `gh` présents : **proposer** de pousser et d'ouvrir la PR (corps = fiche).
  La fusion n'a lieu que CI verte, décidée par le PO. **Ne jamais fusionner soi-même.**

## 7. Message final au PO
Trois ou quatre phrases : ce qui a été fait, comment l'essayer, ce qu'un humain doit encore
vérifier en accessibilité, et la suite (CI puis fusion par le PO).

---

**Story** : $ARGUMENTS

> Si la ligne ci-dessus montre encore un nom de variable, ton agent ne substitue pas les
> arguments : prends la story dans la demande de l'utilisateur.
