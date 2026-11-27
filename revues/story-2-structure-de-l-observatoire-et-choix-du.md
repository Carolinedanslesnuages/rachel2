# Story #2 — Structure de l'observatoire et choix du territoire

## Critères d'acceptation et tests
| Critère | Test qui le prouve |
|---|---|
| Quatre sections, une par domaine | `TableauDeBordView.spec.ts` (« quatre sections ») ; `indicateurs.spec.ts` (quatre domaines, une section chacun) |
| Filtre de territoire (Hexagone, Outre-mer, 18 régions) | `TableauDeBordView.spec.ts` (options du filtre, rechargement au changement) ; `indicateurs.spec.ts` et `indicateurs.e2e-spec.ts` (seules les mesures du territoire demandé ; repli sur l'Hexagone si inconnu) |
| Filtre partagé via le store Pinia | `stores/__tests__/indicateurs.spec.ts` (territoire mémorisé, rechargement) |
| Un seul titre principal, accessibilité automatique | `TableauDeBordView.spec.ts` (un seul h1, `violationsAccessibilite` vide, y compris en « donnée non disponible ») |

Décision du PO : un indicateur sans mesure pour le territoire s'affiche « Donnée non disponible pour ce territoire ».

## Base de données — à relire
- `Mesure` reçoit une colonne `territoire` ; l'unicité devient (indicateur, territoire, période). Migration `20261127000000_ajout_territoires`.
- La migration **vide la table `Mesure`** (données fictives de l'aperçu, régénérées par `donnees-fictives.sql`).

## Accessibilité
- Filtre : composant DSFR `DsfrSelect`, étiquette visible « Territoire » liée.
- Un seul h1 ; sections en h2, graphiques en h3 ; message de statut (`role="status"`) toujours présent, annonce le territoire affiché.
- « Donnée non disponible » écrit en toutes lettres.
- À vérifier par un humain : lecteur d'écran (annonce du changement de territoire), navigation clavier du filtre, affichage à 320 px et zoomé.

## Périmètre
- Seuls deux indicateurs existent (domaine Économie) ; les trois autres domaines affichent « Aucun indicateur n'est encore suivi » en attendant les stories prévues.
- Le filtre est dans le store, mais seul l'écran du tableau de bord existe pour l'instant.
- Le sélecteur DSFR ajoute une option « Sélectionner une option » en tête de liste (comportement de la bibliothèque).

## Contrôles
API : lint, tests, e2e, build OK. Front : oxlint, eslint, type-check, tests (12), build OK.
