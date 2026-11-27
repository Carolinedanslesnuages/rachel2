# Thème 3 — Couleurs

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 3.1

Dans chaque page web, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

**Tests**

- **3.1.1** Pour chaque mot ou ensemble de mots dont la mise en couleur est porteuse d’information, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?
- **3.1.2** Pour chaque indication de couleur donnée par un texte, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?
- **3.1.3** Pour chaque image véhiculant une information, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?
- **3.1.4** Pour chaque propriété CSS déterminant une couleur et véhiculant une information, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?
- **3.1.5** Pour chaque média temporel véhiculant une information, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?
- **3.1.6** Pour chaque média non temporel véhiculant une information, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

**WCAG** : 1.3.1 Info and Relationships (A) ; 1.4.1 Use of color (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1

## Critère 3.2

Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?

**Tests**

- **3.2.1** Dans chaque page web, le texte et le texte en image sans effet de graisse d’une taille restituée inférieure à 24px vérifient-ils une de ces conditions (hors cas particuliers) ?
  - Le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;
  - Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 4.5:1, au moins.
- **3.2.2** Dans chaque page web, le texte et le texte en image en gras d’une taille restituée inférieure à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ?
  - Le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;
  - Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 4.5:1, au moins.
- **3.2.3** Dans chaque page web, le texte et le texte en image sans effet de graisse d’une taille restituée supérieure ou égale à 24px vérifient-ils une de ces conditions (hors cas particuliers) ?
  - Le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;
  - Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 3:1, au moins.
- **3.2.4** Dans chaque page web, le texte et le texte en image en gras d’une taille restituée supérieure ou égale à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ?
  - Le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;
  - Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 3:1, au moins.
- **3.2.5** Dans le mécanisme qui permet d’afficher un rapport de contraste conforme, le rapport de contraste entre le texte et la couleur d’arrière-plan est-il suffisamment élevé ?

**Cas particuliers**

- Dans ces situations, les critères sont non applicables pour ces éléments :
- [object Object]

**WCAG** : 1.4.3 Contrast (Minimum) (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2

## Critère 3.3

Dans chaque page web, les couleurs utilisées dans les composants d’interface ou les éléments graphiques porteurs d’informations sont-elles suffisamment contrastées (hors cas particuliers) ?

**Tests**

- **3.3.1** Dans chaque page web, le rapport de contraste entre les couleurs d’un composant d’interface dans ses différents états et la couleur d’arrière-plan contiguë vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - Le rapport de contraste est de 3:1, au moins ;
  - Un mécanisme permet un rapport de contraste de 3:1, au moins.
- **3.3.2** Dans chaque page web, le rapport de contraste des différentes couleurs composant un élément graphique, lorsqu’elles sont nécessaires à sa compréhension, et la couleur d’arrière-plan contiguë, vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - Le rapport de contraste est de 3:1, au moins ;
  - Un mécanisme permet un rapport de contraste de 3:1, au moins.
- **3.3.3** Dans chaque page web, le rapport de contraste des différentes couleurs contiguës entre elles d’un élément graphique, lorsqu’elles sont nécessaires à sa compréhension, vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - Le rapport de contraste est de 3:1, au moins ;
  - Un mécanisme permet un rapport de contraste de 3:1, au moins.
- **3.3.4** Dans le mécanisme qui permet d’afficher un rapport de contraste conforme, les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent, sont-elles suffisamment contrastées ?

**Cas particuliers**

- Les cas suivants sont non applicables pour ce critère :
- [object Object]

**WCAG** : 1.4.11 Non-text Contrast (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.3
