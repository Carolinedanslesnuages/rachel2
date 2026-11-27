# Thème 12 — Navigation

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 12.1

Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins (hors cas particuliers) ?

**Tests**

- **12.1.1** Chaque ensemble de pages vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - Un menu de navigation et un plan du site sont présents ;
  - Un menu de navigation et un moteur de recherche sont présents ;
  - Un moteur de recherche et un plan du site sont présents.

**Cas particuliers**

- Il existe une gestion de cas particulier lorsque le site web est constitué d’une seule page ou d’un nombre très limité de pages (cf. note). Dans ce cas-là, le critère est non applicable.
- Le critère est également non applicable pour les pages d’un ensemble de pages qui sont le résultat ou une partie d’un processus (un processus de paiement ou de prise de commande, par exemple).
- Note : l’appréciation d’un nombre très limité de pages devrait être réservé à un site dont l’ensemble des pages sont atteignables depuis la page d’accueil.

**WCAG** : 2.4.5 Multiple Ways (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.1

## Critère 12.2

Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place (hors cas particuliers) ?

**Tests**

- **12.2.1** Dans chaque ensemble de pages, chaque page disposant d’un menu et les barres de navigation vérifie-t-elle ces conditions (hors cas particuliers) ?
  - Le menu et les barres de navigation sont toujours à la même place dans la présentation ;
  - Le menu et les barres de navigation se présentent toujours dans le même ordre relatif dans le code source.

**Cas particuliers**

- Il existe une gestion de cas particuliers lorsque :
- [object Object]
- Dans ces situations, le critère est non applicable.

**WCAG** : 3.2.3 Consistent Navigation (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.2

## Critère 12.3

La page « plan du site » est-elle pertinente ?

**Tests**

- **12.3.1** La page « plan du site » est-elle représentative de l’architecture générale du site ?
- **12.3.2** Les liens du plan du site sont-ils fonctionnels ?
- **12.3.3** Les liens du plan du site renvoient-ils bien vers les pages indiquées par l’intitulé ?

**WCAG** : 2.4.5 Multiple Ways (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.3

## Critère 12.4

Dans chaque ensemble de pages, la page « plan du site » est-elle accessible à partir d’une fonctionnalité identique ?

**Tests**

- **12.4.1** Dans chaque ensemble de pages, la page « plan du site » est-elle accessible à partir d’une fonctionnalité identique ?
- **12.4.2** Dans chaque ensemble de pages, la fonctionnalité vers la page « plan du site » est-elle située à la même place dans la présentation ?
- **12.4.3** Dans chaque ensemble de pages, la fonctionnalité vers la page « plan du site » se présente-t-elle toujours dans le même ordre relatif dans le code source ?

**WCAG** : 2.4.5 Multiple Ways (AA) ; 3.2.3 Consistent Navigation (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.4

## Critère 12.5

Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?

**Tests**

- **12.5.1** Dans chaque ensemble de pages, le moteur de recherche est-il accessible à partir d’une fonctionnalité identique ?
- **12.5.2** Dans chaque ensemble de pages, la fonctionnalité vers le moteur de recherche est-elle située à la même place dans la présentation ?
- **12.5.3** Dans chaque ensemble de pages, la fonctionnalité vers le moteur de recherche se présente-t-elle toujours dans le même ordre relatif dans le code source ?

**WCAG** : 3.2.3 Consistent Navigation (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.5

## Critère 12.6

Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ?

**Tests**

- **12.6.1** Dans chaque page web où elles sont présentes, la zone d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche respectent-elles au moins une de ces conditions ?
  - La zone possède un rôle WAI-ARIA de type landmark correspondant à sa nature ;
  - La zone possède un titre dont le contenu permet de comprendre la nature du contenu de la zone ;
  - La zone peut être masquée par le biais d’un bouton précédent directement la zone dans l’ordre du code source ;
  - La zone peut être évitée par le biais d’un lien d’évitement précédent directement la zone dans l’ordre du code source ;
  - La zone peut être atteinte par le biais d’un lien d’accès rapide visible ou, à défaut, visible à la prise de focus.

**WCAG** : 1.3.1 Info and Relationships (A) ; 2.4.1 Bypass Blocks (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.6

## Critère 12.7

Dans chaque page web, un lien d’évitement ou d’accès rapide à la zone de contenu principal est-il présent (hors cas particuliers) ?

**Tests**

- **12.7.1** Dans chaque page web, un lien permet-il d’éviter la zone de contenu principal ou d’y accéder (hors cas particuliers) ?
- **12.7.2** Dans chaque ensemble de pages, le lien d’évitement ou d’accès rapide à la zone de contenu principal vérifie-t-il ces conditions (hors cas particuliers) ?
  - Le lien est situé à la même place dans la présentation ;
  - Le lien se présente toujours dans le même ordre relatif dans le code source ;
  - Le lien est visible ou, à défaut, visible à la prise de focus ;
  - Le lien est fonctionnel.

**Cas particuliers**

- Il existe une gestion de cas particuliers lorsque le site web est constitué d’une seule page.
- Dans ce cas de figure, l’obligation de la présence d’un lien d’accès rapide est liée au contexte de la page : présence ou absence de navigation ou de contenus additionnels, par exemple. Le critère peut être considéré comme non applicable lorsqu’il est avéré qu’un lien d’accès rapide est inutile.

**WCAG** : 2.4.1 Bypass Blocks (A) ; 2.4.3 Focus Order (A) ; 3.2.3 Consistent Navigation (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.7

## Critère 12.8

Dans chaque page web, l’ordre de tabulation est-il cohérent ?

**Tests**

- **12.8.1** Dans chaque page web, l’ordre de tabulation dans le contenu est-il cohérent ?
- **12.8.2** Pour chaque script qui met à jour ou insère un contenu, l’ordre de tabulation reste-t-il cohérent ?

**WCAG** : 2.4.3 Focus Order (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.8

## Critère 12.9

Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?

**Tests**

- **12.9.1** Dans chaque page web, chaque élément recevant le focus vérifie-t-il une de ces conditions ?
  - Il est possible d’atteindre l’élément suivant ou précédent pouvant recevoir le focus avec la touche de tabulation ;
  - L’utilisateur est informé d’un mécanisme fonctionnel permettant d’atteindre au clavier l’élément suivant ou précédent pouvant recevoir le focus.

**WCAG** : 2.1.1 Keyboard (A) ; 2.1.2 No Keyboard Trap (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.9

## Critère 12.10

Dans chaque page web, les raccourcis clavier n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?

**Tests**

- **12.10.1** Dans chaque page web, chaque raccourci clavier n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) vérifie-t-il l’une de ces conditions ?
  - Un mécanisme est disponible pour désactiver le raccourci clavier ;
  - Un mécanisme est disponible pour configurer la touche de raccourci clavier au moyen des touches de modification (Ctrl, Alt, Maj, etc.) ;
  - Dans le cas d’un composant d’interface utilisateur, le raccourci clavier qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.

**WCAG** : 2.1.4 Character Key Shortcuts (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.10

## Critère 12.11

Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un composant d’interface sont-ils si nécessaire atteignables au clavier ?

**Tests**

- **12.11.1** Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un composant d’interface sont-ils si nécessaire atteignables au clavier ?

**Notes techniques**

- Ce critère adresse les situations où un contenu additionnel contient des composants d’interface avec lesquels il doit être possible d’interagir au clavier. Par exemple, une infobulle personnalisée qui propose un lien dans son contenu.

**WCAG** : 2.1.1 Keyboard (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.11
