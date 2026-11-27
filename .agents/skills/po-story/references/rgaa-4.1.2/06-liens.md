# Thème 6 — Liens

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 6.1

Chaque lien est-il explicite (hors cas particuliers) ?

**Tests**

- **6.1.1** Chaque lien texte vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’intitulé de lien seul permet d’en comprendre la fonction et la destination ;
  - L’intitulé de lien additionné au contexte du lien permet d’en comprendre la fonction et la destination.
- **6.1.2** Chaque lien image vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’intitulé de lien seul permet d’en comprendre la fonction et la destination ;
  - L’intitulé de lien additionné au contexte du lien permet d’en comprendre la fonction et la destination.
- **6.1.3** Chaque lien composite vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’intitulé de lien seul permet d’en comprendre la fonction et la destination ;
  - L’intitulé de lien additionné au contexte du lien permet d’en comprendre la fonction et la destination.
- **6.1.4** Chaque lien SVG vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’intitulé de lien seul permet d’en comprendre la fonction et la destination ;
  - L’intitulé de lien additionné au contexte du lien permet d’en comprendre la fonction et la destination.
- **6.1.5** Pour chaque lien ayant un intitulé visible, le nom accessible du lien contient-il au moins l’intitulé visible (hors cas particuliers) ?

**Cas particuliers**

- Il existe une gestion de cas particuliers pour les tests 6.1.1, 6.1.2, 6.1.3 et 6.1.4 lorsque le lien est ambigu pour tout le monde. Dans cette situation, où il n’est pas possible de rendre le lien explicite dans son contexte, le critère est non applicable.
- Il existe une gestion de cas particuliers pour le test 6.1.5 lorsque :
- [object Object]
- Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

**Notes techniques**

- Lorsque l’intitulé visible est complété par une autre expression dans le nom accessible :
- [object Object]
- Par exemple, si l’on considère l’intitulé visible « Commander maintenant » complété dans le nom accessible par l’expression « produit X », on peut avoir les différents cas suivants :
- [object Object]

**WCAG** : 1.1.1 Non-text Content (A) ; 2.4.4 Link Purpose (In Context) (A) ; 2.5.3 Label in Name (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1

## Critère 6.2

Dans chaque page web, chaque lien a-t-il un intitulé ?

**Tests**

- **6.2.1** Dans chaque page web, chaque lien a-t-il un intitulé entre `<a>` et `</a>` ?

**Notes techniques**

- Une ancre n’est pas un lien même si pendant longtemps l’élément `<a>` a servi de support à cette technique. Elle n’est donc pas concernée par le présent critère.

**WCAG** : 1.1.1 Non-text Content (A) ; 2.4.4 Link Purpose (In Context) (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.2
