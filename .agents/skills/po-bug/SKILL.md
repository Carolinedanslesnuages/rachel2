---
name: po-bug
description: Traite un problème signalé par un Product Owner sur un projet d'ADA — reformule le constat, force deux ou trois hypothèses de cause, écrit un test qui reproduit le bug avant toute correction, corrige sur une branche et livre une fiche de relecture. Écrit du code et des commits ; à lancer uniquement sur demande explicite.
when_to_use: bug signalé par le PO, ça ne marche pas, erreur à l'écran, régression, issue bug d'ADA
argument-hint: "<description du problème, ou numéro d'issue GitHub>"
disable-model-invocation: true
---

# Traiter un problème signalé par le PO

Méthode de la skill `bug-investigate` (agent-skills IA-Generative) : si elle est installée,
l'appliquer pour les étapes 2 à 4. Parle au PO en langage métier.

## 0. Projet
Comme `po-story` (étape 0). Problème donné par numéro d'issue → le lire
(`gh issue view <n>`), garder `Fixes #<n>` pour le commit.

## 1. Le constat est-il exploitable ?
Il faut : **ce qui se passe**, **ce qui devrait se passer**, **comment le reproduire**
(écran, étapes). Il manque quelque chose → **trois questions au plus**, puis arrêter.
Une demande de nouveauté déguisée (« il faudrait aussi… ») → c'est une story : `po-story`.

## 2. Hypothèses — avant de toucher au code
D'abord les faits : lire le message d'erreur **en entier** (pile d'appels, fichier, ligne) et regarder
ce qui a changé récemment (`git log`, `git diff`, dépendance, configuration). Un bug apparu juste après
une fusion s'explique souvent ainsi. Si le problème traverse plusieurs couches (écran → API → base),
noter ce qui **entre et sort de chaque couche** pour voir où ça casse, avant de conclure.
Écrire **deux ou trois hypothèses de cause** distinctes, chacune avec l'indice qui la
soutient et la vérification qui la départagerait. Plus un **plan B** si aucune ne tient.
Les vérifier dans l'ordre du moins coûteux, sans modifier le code.

## 3. Test rouge
Écrire un test qui **reproduit le problème** et **échoue** pour la bonne raison (lancer
uniquement ce test, constater l'échec, noter le message). Pas de test rouge = pas de
correction : si le bug ne se reproduit pas, le dire au PO et demander plus de détails.

## 4. Correction minimale
Branche `fix/<slug-court>` depuis `main`. Corriger la cause (pas le symptôme), au plus près.
Le test rouge passe au vert, sans en modifier l'assertion.
Trois échecs → arrêter, l'expliquer simplement, proposer un développeur (`story:besoin-dev`).

## 5. Contrôle final
Identique à `po-story` étape 5 (périmètre, tests complets, lint, types, compilation sur les
codes de retour, anti-fuite, accessibilité si un écran a changé).

## 6. Livraison
- Fiche `revues/<branche>.md` (modèle de `po-story`), avec en plus : hypothèses écartées,
  cause retenue, test qui la prouve.
- Rejouer le scénario **tel que le PO l'a décrit** : c'est la preuve que le bug est corrigé,
  pas seulement le test écrit. Pas de « devrait marcher » ni « probablement » : constaté, ou pas dit.
- Commit `fix: <ce qui est corrigé, du point de vue de l'utilisateur>` (`Fixes #<n>`).
- Proposer de pousser et d'ouvrir la PR ; **ne jamais fusionner soi-même**.

## 7. Message au PO
Ce qui était cassé, pourquoi en une phrase, ce qui a changé, comment le vérifier.

---

**Problème signalé** : $ARGUMENTS

> Si la ligne ci-dessus montre encore un nom de variable, ton agent ne substitue pas les
> arguments : prends le problème dans la demande de l'utilisateur.
