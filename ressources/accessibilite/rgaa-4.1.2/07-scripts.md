# Thème 7 — Scripts

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 7.1

Chaque script est-il, si nécessaire, compatible avec les technologies d’assistance ?

**Tests**

- **7.1.1** Chaque script qui génère ou contrôle un composant d’interface vérifie-t-il, si nécessaire, une de ces conditions ?
  - Le nom, le rôle, la valeur, le paramétrage et les changements d’états sont accessibles aux technologies d’assistance via une API d’accessibilité ;
  - Un composant d’interface accessible permettant d’accéder aux mêmes fonctionnalités est présent dans la page ;
  - Une alternative accessible permet d’accéder aux mêmes fonctionnalités.
- **7.1.2** Chaque script qui génère ou contrôle un composant d’interface respecte-t-il une de ces conditions ?
  - Le composant d’interface est correctement restitué par les technologies d’assistance ;
  - Une alternative accessible permet d’accéder aux mêmes fonctionnalités.
- **7.1.3** Chaque script qui génère ou contrôle un composant d’interface vérifie-t-il ces conditions (hors cas particuliers) ?
  - Le composant possède un nom pertinent ;
  - Le nom accessible du composant contient au moins l’intitulé visible ;
  - Le composant possède un rôle pertinent.

**Cas particuliers**

- Il existe une gestion de cas particuliers pour le test 7.1.3 lorsque :
- [object Object]
- Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

**Notes techniques**

- Le critère 7.1 implémente la notion de « compatible avec les technologies d’assistance » telle que définie par les WCAG, ainsi que le recours à WAI-ARIA pour rendre un composant ou une fonctionnalité accessible. Le bon usage de WAI-ARIA est vérifié via les tests 7.1.1, 7.1.2, 7.1.3.
- Note importante : dans un environnement HTML5, beaucoup de composants peuvent nécessiter JavaScript pour fonctionner ; en conséquence la fourniture d’une alternative à un composant JavaScript qui ne pourrait pas être rendu accessible devra bénéficier d’une méthode spécifique au composant en cause, permettant de le remplacer par une alternative accessible (et de le réactiver). Cela signifie que la désactivation de JavaScript pour l’ensemble de la page ne sera pas acceptée comme une méthode valable, à moins qu’elle ne remette pas en cause l’utilisation des autres composants.

**WCAG** : 2.5.3 Label in Name (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1

## Critère 7.2

Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?

**Tests**

- **7.2.1** Chaque script débutant par la balise `<script>` et ayant une alternative vérifie-t-il une de ces conditions ?
  - L’alternative entre `<noscript>` et `</noscript>` permet d’accéder à des contenus et des fonctionnalités similaires ;
  - La page affichée, lorsque JavaScript est désactivé, permet d’accéder à des contenus et des fonctionnalités similaires ;
  - La page alternative permet d’accéder à des contenus et des fonctionnalités similaires ;
  - Le langage de script côté serveur permet d’accéder à des contenus et des fonctionnalités similaires ;
  - L’alternative présente dans la page permet d’accéder à des contenus et des fonctionnalités similaires.
- **7.2.2** Chaque élément non textuel mis à jour par un script (dans la page, ou dans un cadre) et ayant une alternative vérifie-t-il ces conditions ?
  - L’alternative de l’élément non textuel est mise à jour ;
  - L’alternative mise à jour est pertinente.

**WCAG** : 1.1.1 Non-text Content (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2

## Critère 7.3

Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage (hors cas particuliers) ?

**Tests**

- **7.3.1** Chaque élément possédant un gestionnaire d’événement contrôlé par un script vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’élément est accessible par le clavier et tout dispositif de pointage ;
  - Un élément accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présent dans la page.
- **7.3.2** Un script ne doit pas supprimer le focus d’un élément qui le reçoit. Cette règle est-elle respectée (hors cas particuliers) ?

**Cas particuliers**

- Il existe une gestion de cas particuliers lorsque la fonctionnalité dépend de l’utilisation d’un gestionnaire d’événement sans équivalent universel ; par exemple, une application de dessin à main levée ne pourra pas être rendue contrôlable au clavier. Dans ces situations, le critère est non applicable.

**WCAG** : 1.3.1 Info and Relationships (A) ; 2.1.1 Keyboard (A) ; 2.4.7 Focus Visible (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.3

## Critère 7.4

Pour chaque script qui initie un changement de contexte, l’utilisateur est-il averti ou en a-t-il le contrôle ?

**Tests**

- **7.4.1** Chaque script qui initie un changement de contexte vérifie-t-il une de ces conditions ?
  - L’utilisateur est averti par un texte de l’action du script et du type de changement avant son déclenchement ;
  - Le changement de contexte est initié par un bouton (input de type `submit`, `button` ou `image` ou balise `<button>`) explicite ;
  - Le changement de contexte est initié par un lien explicite.

**WCAG** : 3.2.1 On Focus (A) ; 3.2.2 On Input (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4

## Critère 7.5

Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d’assistance ?

**Tests**

- **7.5.1** Chaque message de statut qui informe de la réussite, du résultat d’une action ou bien de l’état d’une application utilise-t-il l’attribut WAI-ARIA `role="status"` ?
- **7.5.2** Chaque message de statut qui présente une suggestion, ou avertit de l’existence d’une erreur utilise-t-il l’attribut WAI-ARIA `role="alert"` ?
- **7.5.3** Chaque message de statut qui indique la progression d’un processus utilise-t-il l’un des attributs WAI-ARIA `role="log"`, `role="progressbar"` ou `role="status"` ?

**Notes techniques**

- Les rôles WAI-ARIA `log`, `status` et `alert` ont implicitement une valeur d’attribut WAI-ARIA `aria-live` et `aria-atomic`. On pourra donc considérer (conformément à la spécification WAI-ARIA 1.1) que :
- [object Object]
- C’est sous réserve que la nature du message de statut satisfasse bien à la correspondance implicitement établie. Dans le cas d’un message de statut indiquant la progression d’un processus et matérialisé graphiquement par une barre de progression, un rôle WAI-ARIA `progressbar` explicite est nécessaire.

**WCAG** : 4.1.3 Status Messages (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.5
