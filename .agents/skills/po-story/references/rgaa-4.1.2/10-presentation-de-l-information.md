# Thème 10 — Présentation de l’information

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 10.1

Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l’information ?

**Tests**

- **10.1.1** Dans chaque page web, les balises servant à la présentation de l’information ne doivent pas être présentes dans le code source généré des pages. Cette règle est-elle respectée ?
- **10.1.2** Dans chaque page web, les attributs servant à la présentation de l’information ne doivent pas être présents dans le code source généré des pages. Cette règle est-elle respectée ?
- **10.1.3** Dans chaque page web, l’utilisation des espaces vérifie-t-elle ces conditions ?
  - Les espaces ne sont pas utilisées pour séparer les lettres d’un mot ;
  - Les espaces ne sont pas utilisées pour simuler des tableaux ;
  - Les espaces ne sont pas utilisées pour simuler des colonnes de texte.

**WCAG** : 1.3.1 Info and Relationships (A) ; 1.3.2 Meaningful Sequence (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.1

## Critère 10.2

Dans chaque page web, le contenu visible porteur d’information reste-t-il présent lorsque les feuilles de styles sont désactivées ?

**Tests**

- **10.2.1** Dans chaque page web, l’information reste-t-elle présente lorsque les feuilles de styles sont désactivées ?

**WCAG** : 1.1.1 Non-text Content (A) ; 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.2

## Critère 10.3

Dans chaque page web, l’information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?

**Tests**

- **10.3.1** Dans chaque page web, l’information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?

**WCAG** : 1.3.2 Meaningful Sequence (A) ; 2.4.3 Focus Order (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.3

## Critère 10.4

Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu’à 200 %, au moins (hors cas particuliers) ?

**Tests**

- **10.4.1** Dans chaque page web, l’augmentation de la taille des caractères jusqu’à 200 %, au moins, ne doit pas provoquer de perte d’information. Cette règle est-elle respectée selon une de ces conditions (hors cas particuliers) ?
  - Lors de l’utilisation de la fonction d’agrandissement du texte du navigateur ;
  - Lors de l’utilisation des fonctions de zoom graphique du navigateur ;
  - Lors de l’utilisation d’un composant d’interface propre au site permettant d’agrandir le texte ou de zoomer.
- **10.4.2** Dans chaque page web, l’augmentation de la taille des caractères jusqu’à 200 %, au moins, doit être possible pour l’ensemble du texte dans la page. Cette règle est-elle respectée selon une de ces conditions (hors cas particuliers) ?
  - Lors de l’utilisation de la fonction d’agrandissement du texte du navigateur ;
  - Lors de l’utilisation des fonctions de zoom graphique du navigateur ;
  - Lors de l’utilisation d’un composant d’interface propre au site permettant d’agrandir le texte ou de zoomer.

**Cas particuliers**

- Font exception à ce critère, les contenus pour lesquels l’utilisateur n’a pas de possibilité de personnalisation :
- [object Object]

**WCAG** : 1.4.4 Resize Text (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.4

## Critère 10.5

Dans chaque page web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ?

**Tests**

- **10.5.1** Dans chaque page web, chaque déclaration CSS de couleurs de police (`color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de fond (`background`, `background-color`), au moins, héritée d’un parent ?
- **10.5.2** Dans chaque page web, chaque déclaration de couleur de fond (`background`, `background-color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de police (`color`) au moins, héritée d’un parent ?
- **10.5.3** Dans chaque page web, chaque utilisation d’une image pour créer une couleur de fond d’un élément susceptible de contenir du texte, via CSS (`background`, `background-image`), est-elle accompagnée d’une déclaration de couleur de fond (`background`, `background-color`), au moins, héritée d’un parent ?

**WCAG** : 1.4.3 Contrast (Minimum) (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.5

## Critère 10.6

Dans chaque page web, chaque lien dont la nature n’est pas évidente est-il visible par rapport au texte environnant ?

**Tests**

- **10.6.1** Dans chaque page web, chaque lien texte signalé uniquement par la couleur, et dont la nature n’est pas évidente, vérifie-t-il ces conditions ?
  - La couleur du lien a un rapport de contraste supérieur ou égal à 3:1 par rapport au texte environnant ;
  - Le lien dispose d’une indication visuelle au survol autre qu’un changement de couleur ;
  - Le lien dispose d’une indication visuelle au focus autre qu’un changement de couleur.

**WCAG** : 1.4.1 Use of Color (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.6

## Critère 10.7

Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?

**Tests**

- **10.7.1** Pour chaque élément recevant le focus, la prise de focus vérifie-t-elle une de ces conditions ?
  - Le style du focus natif du navigateur n’est pas supprimé ou dégradé ;
  - Un style du focus défini par l’auteur est visible.

**WCAG** : 1.4.1 Use of Color (A) ; 2.4.7 Focus Visible (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.7

## Critère 10.8

Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d’assistance ?

**Tests**

- **10.8.1** Dans chaque page web, chaque contenu caché vérifie-t-il une de ces conditions ?
  - Le contenu caché a vocation à être ignoré par les technologies d’assistance ;
  - Le contenu caché n’a pas vocation à être ignoré par les technologies d’assistance et est rendu restituable par les technologies d’assistance suite à une action de l’utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ou suite à un repositionnement du focus dessus.

**Notes techniques**

- WAI-ARIA propose un attribut `aria-hidden` (`true` ou `false`) qui permet d’inhiber la restitution d’un contenu en direction des technologies d’assistance, sans action sur sa visibilité en direction des agents utilisateurs : un contenu avec `aria-hidden="true"` ne sera donc plus vocalisable, mais restera visible.
- Sauf si le contenu contrôlé par `aria-hidden` n’a pas vocation à être restitué par les technologies d’assistance, la valeur de l’attribut `aria-hidden` doit être cohérente avec l’état affiché ou masqué du contenu à l’écran.
- La spécification HTML5 propose un attribut `hidden` qui permet de rendre indisponible (quand l’attribut `hidden` est présent) un contenu dans le DOM généré (de manière similaire au `type="hidden"` sur un contrôle de formulaire).
- Il est possible d’avoir des situations où un contenu contrôlé par `hidden` ou `aria-hidden` se trouve momentanément dans un état incohérent avec le statut affiché ou masqué du contenu, par exemple si l’on désire rendre disponible un élément, mais que son affichage à l’écran reste dépendant d’une action ultérieure. Dans ce cas, c’est l’état final du contenu qui doit être considéré.

**WCAG** : 1.3.2 Meaningful Sequence (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.8

## Critère 10.9

Dans chaque page web, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?

**Tests**

- **10.9.1** Dans chaque page web, pour chaque texte ou ensemble de textes, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?
- **10.9.2** Dans chaque page web, pour chaque image ou ensemble d’images, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?
- **10.9.3** Dans chaque page web, pour chaque média temporel, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?
- **10.9.4** Dans chaque page web, pour chaque média non temporel, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?

**WCAG** : 1.3.3 Sensory Characteristics (A) ; 1.4.1 Use of Color (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.9

## Critère 10.10

Dans chaque page web, l’information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?

**Tests**

- **10.10.1** Dans chaque page web, pour chaque texte ou ensemble de textes, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle implémentée de façon pertinente ?
- **10.10.2** Dans chaque page web, pour chaque image ou ensemble d’images, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle implémentée de façon pertinente ?
- **10.10.3** Dans chaque page web, pour chaque média temporel, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle implémentée de façon pertinente ?
- **10.10.4** Dans chaque page web, pour chaque média non temporel, l’information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle implémentée de façon pertinente ?

**WCAG** : 1.3.3 Sensory Characteristics (A) ; 1.4.1 Use of Color (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.10

## Critère 10.11

Pour chaque page web, les contenus peuvent-ils être présentés sans perte d’information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px (hors cas particuliers) ?

**Tests**

- **10.11.1** Pour chaque page web, lorsque le contenu dont le sens de lecture est horizontal est affiché dans une fenêtre réduite à une largeur de 320 px, l’ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement horizontal (hors cas particuliers) ?
- **10.11.2** Pour chaque page web, lorsque le contenu dont le sens de lecture est vertical est affiché dans une fenêtre réduite à une hauteur de 256 px, l’ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement vertical (hors cas particuliers) ?

**Cas particuliers**

- L'objectif de ce critère est de garantir un défilement dans une unique direction pour une lecture facilitée selon le sens de l'écriture.
- Font exception à ce critère, les contenus dont l'agencement requiert deux dimensions pour être compris ou utilisés comme :
- [object Object]
- Note : la majorité des navigateurs sur les systèmes d'exploitation sur mobile (Android, iOS) ne gère pas correctement la redistribution en cas de zoom. Dans ce contexte, le critère sera considéré comme non applicable sur ces environnements.

**Notes techniques**

- Lorsqu'il est ici question de pixel, il s'agit du pixel CSS tel que défini par le W3C https://www.w3.org/TR/css3-values/

**WCAG** : 1.4.10 Reflow (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.11

## Critère 10.12

Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?

**Tests**

- **10.12.1** Dans chaque page web, le texte reste-t-il lisible lorsque l’affichage est modifié selon ces conditions (hors cas particuliers) ?
  - L’espacement entre les lignes (`line-height`) est augmenté jusqu’à 1,5 fois la taille de la police ;
  - L’espacement suivant les paragraphes (balise `<p>`) est augmenté jusqu’à 2 fois la taille de la police ;
  - L’espacement des lettres (`letter-spacing`) est augmenté jusqu’à 0,12 fois la taille de la police ;
  - L’espacement des mots (`word-spacing`) est augmenté jusqu’à 0,16 fois la taille de la police.

**Cas particuliers**

- Font exception à ce critère, les contenus pour lesquels l’utilisateur n’a pas de possibilité de personnalisation :
- [object Object]

**WCAG** : 1.4.12 Text Spacing (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.12

## Critère 10.13

Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un composant d’interface sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?

**Tests**

- **10.13.1** Chaque contenu additionnel devenant visible à la prise de focus ou au survol d’un composant d’interface peut-il être masqué par une action de l’utilisateur sans déplacer le focus ou le pointeur de la souris (hors cas particuliers) ?
- **10.13.2** Chaque contenu additionnel qui apparait au survol d’un composant d’interface peut-il être survolé par le pointeur de la souris sans disparaître (hors cas particuliers) ?
- **10.13.3** Chaque contenu additionnel qui apparaît à la prise de focus ou au survol d’un composant d’interface vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - Le contenu additionnel reste visible jusqu’à ce que l’utilisateur retire le pointeur souris ou le focus du contenu additionnel et du composant d’interface ayant déclenché son apparition ;
  - Le contenu additionnel reste visible jusqu’à ce que l’utilisateur déclenche une action masquant ce contenu sans déplacer le focus ou le pointeur de la souris du composant d’interface ayant déclenché son apparition ;
  - Le contenu additionnel reste visible jusqu’à ce qu’il ne soit plus valide.

**Cas particuliers**

- Lorsque le contenu additionnel est contrôlé par l’agent utilisateur (par exemple, attribut `title` ou validation native de formulaire) ou correspond à une fenêtre modale conforme au motif de conception WAI-ARIA `dialog`, le critère 10.13 est non applicable.
- Lorsque le contenu additionnel ne masque ou ne remplace aucun contenu porteur d’information, le test 10.13.1 est non applicable.

**WCAG** : 1.4.13 Content on Hover or Focus (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.13

## Critère 10.14

Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?

**Tests**

- **10.14.1** Dans chaque page web, les contenus additionnels apparaissant au survol d’un composant d’interface via les styles CSS respectent-ils si nécessaire une de ces conditions ?
  - Les contenus additionnels apparaissent également à l’activation du composant via le clavier et tout dispositif de pointage ;
  - Les contenus additionnels apparaissent également à la prise de focus du composant ;
  - Les contenus additionnels apparaissent également par le biais de l’activation ou de la prise de focus d’un autre composant.
- **10.14.2** Dans chaque page web, les contenus additionnels apparaissant au focus d’un composant d’interface via les styles CSS respectent-ils si nécessaire une de ces conditions ?
  - Les contenus additionnels apparaissent également à l’activation du composant via le clavier et tout dispositif de pointage ;
  - Les contenus additionnels apparaissent également au survol du composant ;
  - Les contenus additionnels apparaissent également par le biais de l’activation ou du survol d’un autre composant.

**WCAG** : 2.1.1 Keyboard (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.14
