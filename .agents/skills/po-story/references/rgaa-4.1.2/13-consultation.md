# Thème 13 — Consultation

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 13.1

Pour chaque page web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?

**Tests**

- **13.1.1** Pour chaque page web, chaque procédé de rafraîchissement (balise `<object>`, balise `<embed>`, balise `<svg>`, balise `<canvas>`, balise `<meta>`) vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’utilisateur peut arrêter ou relancer le rafraîchissement ;
  - L’utilisateur peut augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;
  - L’utilisateur est averti de l’imminence du rafraîchissement et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant le prochain rafraîchissement ;
  - La limite de temps entre deux rafraîchissements est de vingt heures, au moins.
- **13.1.2** Pour chaque page web, chaque procédé de redirection effectué via une balise `<meta>` est-il immédiat (hors cas particuliers) ?
- **13.1.3** Pour chaque page web, chaque procédé de redirection effectué via un script vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’utilisateur peut arrêter ou relancer la redirection ;
  - L’utilisateur peut augmenter la limite de temps avant la redirection de dix fois, au moins ;
  - L’utilisateur est averti de l’imminence de la redirection et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant la prochaine redirection ;
  - La limite de temps avant la redirection est de vingt heures, au moins.
- **13.1.4** Pour chaque page web, chaque procédé limitant le temps d’une session vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’utilisateur peut supprimer la limite de temps ;
  - L’utilisateur peut augmenter la limite de temps ;
  - La limite de temps avant la fin de la session est de vingt heures au moins.

**Cas particuliers**

- Il existe une gestion de cas particuliers lorsque la limite de temps est essentielle, notamment lorsqu’elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu.
- Dans ces situations, le critère est non applicable. Par exemple, le rafraîchissement d’un flux RSS dans une page n’est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d’une page à partir d’une URL obsolète est essentielle ; le critère est non applicable.

**WCAG** : 2.2.1 Timing Adjustable (A) ; 2.2.2 Pause, Stop, Hide (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.1

## Critère 13.2

Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?

**Tests**

- **13.2.1** Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?

**WCAG** : 3.2.1 On focus (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.2

## Critère 13.3

Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible (hors cas particuliers) ?

**Tests**

- **13.3.1** Dans chaque page web, chaque fonctionnalité de téléchargement d’un document bureautique vérifie-t-elle une de ces conditions ?
  - Le document en téléchargement est compatible avec l'accessibilité ;
  - Il en existe une version alternative en téléchargement compatible avec l'accessibilité ;
  - Il en existe une version alternative au format HTML compatible avec l'accessibilité.

**Cas particuliers**

- Il existe une gestion de cas particuliers :
- [object Object]
- Dans cette situation, le critère est non applicable.

**WCAG** : 1.1.1 Non-text Content (A) ; 1.3.1 Info and Relationships (A) ; 1.3.2 Meaningful Sequence (A) ; 2.4.1 Bypass Blocks (A) ; 2.4.3 Focus Order (A) ; 3.1.1 Language of Page (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.3

## Critère 13.4

Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?

**Tests**

- **13.4.1** Chaque document bureautique ayant une version accessible vérifie-t-il une de ces conditions ?
  - La version compatible avec l’accessibilité offre la même information ;
  - La version alternative au format HTML est pertinente et offre la même information.

**WCAG** : 1.1.1 Non-text Content (A) ; 1.3.1 Info and Relationships (A) ; 1.3.2 Meaningful Sequence (A) ; 2.4.1 Bypass Blocks (A) ; 2.4.3 Focus Order (A) ; 3.1.1 Language of Page (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.4

## Critère 13.5

Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative ?

**Tests**

- **13.5.1** Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions ?
  - Un attribut title est disponible ;
  - Une définition est donnée par le contexte adjacent.

**WCAG** : 1.1.1 Non-text Content (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.5

## Critère 13.6

Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ?

**Tests**

- **13.6.1** Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions ?
  - Le contenu de l’attribut `title` est pertinent ;
  - La définition donnée par le contexte adjacent est pertinente.

**WCAG** : 1.1.1 Non-text Content (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.6

## Critère 13.7

Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?

**Tests**

- **13.7.1** Dans chaque page web, chaque image ou élément multimédia (balise `<video>`, balise `<img>`, balise `<svg>`, balise `<canvas>`, balise `<embed>` ou balise `<object>`) qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-il une de ces conditions ?
  - La fréquence de l’effet est inférieure à 3 par seconde ;
  - La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.
- **13.7.2** Dans chaque page web, chaque script qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-il une de ces conditions ?
  - La fréquence de l’effet est inférieure à 3 par seconde ;
  - La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.
- **13.7.3** Dans chaque page web, chaque mise en forme CSS qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-il une de ces conditions ?
  - La fréquence de l’effet est inférieure à 3 par seconde ;
  - La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.

**WCAG** : 2.3.1 Three Flashes or Below Threshold (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.7

## Critère 13.8

Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l’utilisateur ?

**Tests**

- **13.8.1** Dans chaque page web, chaque contenu en mouvement déclenché automatiquement, vérifie-t-il une de ces conditions ?
  - La durée du mouvement est inférieure ou égale à 5 secondes ;
  - L’utilisateur peut arrêter et relancer le mouvement ;
  - L’utilisateur peut afficher et masquer le contenu en mouvement ;
  - L’utilisateur peut afficher la totalité de l’information sans le mouvement.
- **13.8.2** Dans chaque page web, chaque contenu clignotant déclenché automatiquement, vérifie-t-il une de ces conditions ?
  - La durée du clignotement est inférieure ou égale à 5 secondes ;
  - L’utilisateur peut arrêter et relancer le clignotement ;
  - L’utilisateur peut afficher et masquer le contenu clignotant ;
  - L’utilisateur peut afficher la totalité de l’information sans le clignotement.

**WCAG** : 2.2.1 Timing Adjustable (A) ; 2.2.2 Pause, Stop, Hide (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.8

## Critère 13.9

Dans chaque page web, le contenu proposé est-il consultable quelle que soit l’orientation de l’écran (portrait ou paysage) (hors cas particuliers) ?

**Tests**

- **13.9.1** Dans chaque page web, chaque contenu vérifie-t-il ces conditions (hors cas particuliers) ?
  - La consultation est possible quel que soit le mode d’orientation de l’écran ;
  - Le contenu proposé reste le même quel que soit le mode d’orientation de l’écran utilisé même si sa présentation et le moyen d’y accéder peut différer.

**Cas particuliers**

- Il existe des interfaces pour lesquelles l’orientation du périphérique est essentielle à leur utilisation.
- Dans ces situations, le critère est non applicable. Il peut s’agir d’interfaces de jeu, de piano, de dépôt de chèques bancaires, etc.
- Si l’interface est le seul moyen d’accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence.

**WCAG** : 1.3.4 Orientation (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.9

## Critère 13.10

Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d’un geste complexe peuvent-elles être également disponibles au moyen d’un geste simple (hors cas particuliers) ?

**Tests**

- **13.10.1** Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un contact multipoint est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers).
- **13.10.2** Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un geste basé sur le suivi d’une trajectoire sur l’écran est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers).

**Cas particuliers**

- Il existe une gestion de cas particuliers dans deux types de situation :
- [object Object]

**WCAG** : 2.5.1 Pointer Gestures (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.10

## Critère 13.11

Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran peuvent-elles faire l’objet d’une annulation (hors cas particuliers) ?

**Tests**

- **13.11.1** Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran vérifient-elles l’une de ces conditions (hors cas particuliers) ?
  - L’action est déclenchée au moment où le dispositif de pointage est relâché ou relevé ;
  - L’action est déclenchée au moment où le dispositif de pointage est pressé ou posé puis annulée lorsque le dispositif de pointage est relâché ou relevé ;
  - Un mécanisme est disponible pour abandonner (avant achèvement de l’action) ou annuler (après achèvement) l’exécution de l’action.

**Cas particuliers**

- Il existe une gestion de cas particulier lorsque la fonctionnalité nécessite que le comportement attendu soit réalisé lors d’un événement descendant, par exemple, un émulateur de clavier dont les touches doivent s’activer à la pression comme sur un clavier physique. Dans ces situations, le critère est non applicable.

**Notes techniques**

- Deux exemples de mécanisme mis en place pour annuler ou abandonner une action déclenchée au moyen d’un dispositif de pointage sur un point unique de l’écran :
- [object Object]

**WCAG** : 2.5.2 Pointer Cancellation (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.11

## Critère 13.12

Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l’appareil ou vers l’appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?

**Tests**

- **13.12.1** Dans chaque page web, les fonctionnalités disponibles en bougeant l’appareil peuvent-elles être accomplies avec des composants d’interface utilisateur (hors cas particuliers) ?
- **13.12.2** Dans chaque page web, les fonctionnalités disponibles en faisant un geste en direction de l’appareil peuvent-elles être accomplies avec des composants d’interface utilisateur (hors cas particuliers) ?
- **13.12.3** L’utilisateur a-t-il la possibilité de désactiver la détection du mouvement pour éviter un déclenchement accidentel de la fonctionnalité (hors cas particuliers) ?

**Cas particuliers**

- Il existe une gestion de cas particulier lorsque :
- [object Object]

**WCAG** : 2.5.4 Motion Actuation (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.12
