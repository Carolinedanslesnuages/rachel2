# Thème 11 — Formulaires

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 11.1

Chaque champ de formulaire a-t-il une étiquette ?

**Tests**

- **11.1.1** Chaque champ de formulaire vérifie-t-il une de ces conditions ?
  - Le champ de formulaire possède un attribut WAI-ARIA `aria-labelledby` référençant un passage de texte identifié ;
  - Le champ de formulaire possède un attribut WAI-ARIA `aria-label` ;
  - Une balise `<label>` ayant un attribut `for` est associée au champ de formulaire ;
  - Le champ de formulaire possède un attribut `title` ;
  - Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un élément `<label>` visuellement caché ou un attribut WAI-ARIA `aria-label`, `aria-labelledby` ou `title` lui fournit un nom accessible.
- **11.1.2** Chaque champ de formulaire associé à une balise `<label>` ayant un attribut `for`, vérifie-t-il ces conditions ?
  - Le champ de formulaire possède un attribut `id` ;
  - La valeur de l’attribut `for` est égale à la valeur de l’attribut `id` du champ de formulaire associé.
- **11.1.3** Chaque champ de formulaire ayant une étiquette dont le contenu n’est pas visible ou à proximité (masqué, `aria-label`) ou qui n’est pas accolé au champ (`aria-labelledby`), vérifie-t-il une de ses conditions ?
  - Le champ de formulaire possède un attribut `title` dont le contenu permet de comprendre la nature de la saisie attendue ;
  - Le champ de formulaire est accompagné d’un passage de texte accolé au champ qui devient visible à la prise de focus permettant de comprendre la nature de la saisie attendue ;
  - Le champ de formulaire est accompagné d’un passage de texte visible accolé au champ permettant de comprendre la nature de la saisie attendue.

**WCAG** : 1.3.1 Info and Relationships (A) ; 2.4.6 Headings and Labels (AA) ; 3.3.2 Labels or Instructions (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1

## Critère 11.2

Chaque étiquette associée à un champ de formulaire est-elle pertinente (hors cas particuliers) ?

**Tests**

- **11.2.1** Chaque balise `<label>` permet-elle de connaître la fonction exacte du champ de formulaire auquel elle est associée ?
- **11.2.2** Chaque attribut `title` permet-il de connaître la fonction exacte du champ de formulaire auquel il est associé ?
- **11.2.3** Chaque étiquette implémentée via l’attribut WAI-ARIA `aria-label` permet-elle de connaître la fonction exacte du champ de formulaire auquel elle est associée ?
- **11.2.4** Chaque passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` permet-il de connaître la fonction exacte du champ de formulaire auquel il est associé ?
- **11.2.5** Chaque champ de formulaire ayant un intitulé visible vérifie-t-il ces conditions (hors cas particuliers) ?
  - S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` du champ de formulaire contient au moins l’intitulé visible ;
  - S’il est présent, le passage de texte lié au champ de formulaire via un attribut WAI-ARIA `aria-labelledby` contient au moins l’intitulé visible ;
  - S’il est présent, le contenu de l’attribut `title` du champ de formulaire contient au moins l’intitulé visible ;
  - S’il est présent le contenu de la balise `<label>` associé au champ de formulaire contient au moins l’intitulé visible.
- **11.2.6** Chaque bouton adjacent au champ de formulaire qui fournit une étiquette visible permet-il de connaître la fonction exacte du champ de formulaire auquel il est associé ?

**Cas particuliers**

- Il existe une gestion de cas particuliers pour le test 11.2.5 lorsque :
- [object Object]
- Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).
- Ce cas particulier s’applique également au test 11.9.2.

**WCAG** : 2.4.6 Headings and Labels (AA) ; 2.5.3 Label in Name (A) ; 3.3.2 Labels or Instructions (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2

## Critère 11.3

Dans chaque formulaire, chaque étiquette associée à un champ de formulaire ayant la même fonction et répétée plusieurs fois dans une même page ou dans un ensemble de pages est-elle cohérente ?

**Tests**

- **11.3.1** Chaque étiquette associée à un champ de formulaire ayant la même fonction et répétée plusieurs fois dans une même page est-elle cohérente ?
- **11.3.2** Chaque étiquette associée à un champ de formulaire ayant la même fonction et répétée dans un ensemble de pages est-elle cohérente ?

**WCAG** : 3.2.4 Consistent Identification (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.3

## Critère 11.4

Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés (hors cas particuliers) ?

**Tests**

- **11.4.1** Chaque étiquette de champ et son champ associé sont-ils accolés ?
- **11.4.2** Chaque étiquette accolée à un champ (à l’exception des cases à cocher, bouton radio ou balises ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch"`), vérifie-t-elle ces conditions (hors cas particuliers) ?
  - L’étiquette est visuellement accolée immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;
  - L’étiquette est visuellement accolée immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.
- **11.4.3** Chaque étiquette accolée à un champ de type `checkbox` ou `radio` ou à une balise ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch"`, vérifie-t-elle ces conditions (hors cas particuliers) ?
  - L’étiquette est visuellement accolée immédiatement au-dessous ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;
  - L’étiquette est visuellement accolée immédiatement au-dessous ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.

**Cas particuliers**

- Les tests 11.4.2 et 11.4.3 seront considérés comme non applicables :
- [object Object]

**WCAG** : 3.3.2 Labels or Instructions (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.4

## Critère 11.5

Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?

**Tests**

- **11.5.1** Les champs de même nature vérifient-ils l’une de ces conditions, si nécessaire ?
  - Les champs de même nature sont regroupés dans une balise `<fieldset>` ;
  - Les champs de même nature sont regroupés dans une balise possédant un attribut WAI-ARIA `role="group"` ;
  - Les champs de même nature de type radio (`<input type="radio">`) ou balises possédant un attribut WAI-ARIA `role="radio"`) sont regroupés dans une balise possédant un attribut WAI-ARIA `role="radiogroup"` ou `role="group"`.

**WCAG** : 1.3.1 Info and Relationships (A) ; 3.3.2 Labels or Instructions (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5

## Critère 11.6

Dans chaque formulaire, chaque regroupement de champs de même nature a-t-il une légende ?

**Tests**

- **11.6.1** Chaque regroupement de champs de même nature possède-t-il une légende ?

**WCAG** : 1.3.1 Info and Relationships (A) ; 3.3.2 Labels or Instructions (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.6

## Critère 11.7

Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?

**Tests**

- **11.7.1** Chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?

**WCAG** : 1.3.1 Info and Relationships (A) ; 3.3.2 Labels or Instructions (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.7

## Critère 11.8

Dans chaque formulaire, les items de même nature d’une liste de choix sont-ils regroupés de manière pertinente ?

**Tests**

- **11.8.1** Pour chaque balise `<select>`, les items de même nature d’une liste de choix sont-ils regroupés avec une balise `<optgroup>`, si nécessaire ?
- **11.8.2** Dans chaque balise `<select>`, chaque balise `<optgroup>` possède-t-elle un attribut `label` ?
- **11.8.3** Pour chaque balise `<optgroup>` ayant un attribut `label`, le contenu de l’attribut `label` est-il pertinent ?

**Notes techniques**

- Il est possible d’utiliser une balise ayant un attribut WAI-ARIA `role="listbox"` en remplacement d’une balise `<select>`. En revanche, il est impossible de créer des groupes d’options via l’utilisation de WAI-ARIA. De ce fait, une liste nécessitant un regroupement d’options structurée à l’aide d’une balise ayant un attribut WAI-ARIA `role="listbox"` sera considérée comme non conforme au critère 11.8.

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.8

## Critère 11.9

Dans chaque formulaire, l’intitulé de chaque bouton est-il pertinent (hors cas particuliers) ?

**Tests**

- **11.9.1** L’intitulé de chaque bouton vérifie-t-il ces conditions (hors cas particuliers) ?
  - S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;
  - S’il est présent, le passage de texte lié au bouton via un attribut WAI-ARIA `aria-labelledby` est pertinent ;
  - S’il est présent, le contenu de l’attribut `value` d’une balise `<input>` de type `submit`, `reset` ou `button` est pertinent ;
  - S’il est présent, le contenu de la balise `<button>` est pertinent ;
  - S’il est présent, le contenu de l’attribut `alt` d’une balise `<input>` de type `image` est pertinent ;
  - S’il est présent, le contenu de l’attribut `title` est pertinent.
- **11.9.2** Chaque bouton affichant un intitulé visible vérifie-t-il ces conditions (hors cas particuliers) ?
  - S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label `contient au moins l’intitulé visible ;
  - S’il est présent, le passage de texte lié au bouton via un attribut WAI-ARIA `aria-labelledby` contient au moins l’intitulé visible ;
  - S’il est présent, le contenu de l’attribut value d’une balise `<input>` de type `submit`, `reset` ou `button` contient au moins l’intitulé visible ;
  - S’il est présent, le contenu de la balise `<button>` contient au moins l’intitulé visible ;
  - S’il est présent, le contenu de l’attribut `alt` d’une balise `<input>` de type `image` contient au moins l’intitulé visible ;
  - S’il est présent, le contenu de l’attribut `title` contient au moins l’intitulé visible.

**Cas particuliers**

- Pour le test 11.9.2, voir cas particuliers critère 11.2.

**WCAG** : 2.5.3 Label in Name (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9

## Critère 11.10

Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente (hors cas particuliers) ?

**Tests**

- **11.10.1** Les indications du caractère obligatoire de la saisie des champs vérifient-elles une de ces conditions (hors cas particuliers) ?
  - Une indication de champ obligatoire est visible et permet d’identifier nommément le champ concerné préalablement à la validation du formulaire ;
  - Le champ obligatoire dispose de l’attribut `aria-required="true"` ou `required` préalablement à la validation du formulaire.
- **11.10.2** Les champs obligatoires ayant l’attribut `aria-required="true"` ou `required` vérifient-ils une de ces conditions ?
  - Une indication de champ obligatoire est visible et située dans l’étiquette associée au champ préalablement à la validation du formulaire ;
  - Une indication de champ obligatoire est visible et située dans le passage de texte associé au champ préalablement à la validation du formulaire.
- **11.10.3** Les messages d’erreur indiquant l’absence de saisie d’un champ obligatoire vérifient-ils une de ces conditions ?
  - Le message d’erreur indiquant l’absence de saisie d’un champ obligatoire est visible et permet d’identifier nommément le champ concerné ;
  - Le champ obligatoire dispose de l’attribut `aria-invalid="true"`.
- **11.10.4** Les champs obligatoires ayant l’attribut `aria-invalid="true"` vérifient-ils une de ces conditions ?
  - Le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans l’étiquette associée au champ ;
  - Le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans le passage de texte associé au champ.
- **11.10.5** Les instructions et indications du type de données et/ou de format obligatoires vérifient-elles une de ces conditions ?
  - Une instruction ou une indication du type de données et/ou de format obligatoire est visible et permet d’identifier nommément le champ concerné préalablement à la validation du formulaire ;
  - Une instruction ou une indication du type de données et/ou de format obligatoire est visible dans l’étiquette ou le passage de texte associé au champ préalablement à la validation du formulaire.
- **11.10.6** Les messages d’erreurs fournissant une instruction ou une indication du type de données et/ou de format obligatoire des champs vérifient-ils une de ces conditions ?
  - Le message d’erreur fournissant une instruction ou une indication du type de données et/ou de format obligatoires est visible et identifie le champ concerné ;
  - Le champ dispose de l’attribut `aria-invalid="true"`.
- **11.10.7** Les champs ayant l’attribut `aria-invalid="true"` dont la saisie requiert un type de données et/ou de format obligatoires vérifient-ils une de ces conditions ?
  - Une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans la balise `<label>` associée au champ ;
  - Une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans le passage de texte associé au champ.

**Cas particuliers**

- Le test 11.10.1 et le test 11.10.2 seront considérés comme non applicables lorsque le formulaire comporte un seul champ de formulaire ou qu’il indique les champs optionnels de manière :
- [object Object]
- Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, les tests 11.10.1 et 11.10.2 restent applicables.

**Notes techniques**

- Dans un long formulaire dont la majorité des champs sont obligatoires, on pourrait constater que ce sont les quelques champs restés facultatifs qui sont explicitement signalés comme tels. Dans ce cas, il faudrait s’assurer que :
- [object Object]

**WCAG** : 3.3.1 Error Identification (A) ; 3.3.2 Labels or Instructions (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10

## Critère 11.11

Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?

**Tests**

- **11.11.1** Pour chaque erreur de saisie, les types et les formats de données sont-ils suggérés, si nécessaire ?
- **11.11.2** Pour chaque erreur de saisie, des exemples de valeurs attendues sont-ils suggérés, si nécessaire ?

**Notes techniques**

- Certains types de contrôles en HTML5 proposent des messages d’aide à la saisie automatique : par exemple le type `email` affiche un message du type « veuillez saisir une adresse e-mail valide » dans le cas où l’adresse e-mail saisie ne correspond pas au format attendu. Ces messages sont personnalisables via l’API Constraint Validation, ce qui permet de personnaliser les messages d’erreur et de valider le critère. L’attribut `pattern` permet d’effectuer automatiquement des contrôles de format (via des expressions régulières) et affiche un message d’aide personnalisable via l’attribut `title` : ce dispositif valide également le critère.

**WCAG** : 3.3.3 Error Suggestion (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.11

## Critère 11.12

Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l’utilisateur ?

**Tests**

- **11.12.1** Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques, la saisie des données vérifie-t-elle une de ces conditions ?
  - L’utilisateur peut modifier ou annuler les données et les actions effectuées sur ces données après la validation du formulaire ;
  - L’utilisateur peut vérifier et corriger les données avant la validation d’un formulaire en plusieurs étapes ;
  - Un mécanisme de confirmation explicite, via une case à cocher (balise `<input>` de type `checkbox` ou balise ayant un attribut WAI-ARIA `role="checkbox"`) ou une étape supplémentaire, est présent.
- **11.12.2** Chaque formulaire dont la validation modifie ou supprime des données à caractère financier, juridique ou personnel vérifie-t-il une de ces conditions ?
  - Un mécanisme permet de récupérer les données supprimées ou modifiées par l’utilisateur ;
  - Un mécanisme de demande de confirmation explicite de la suppression ou de la modification, via un champ de formulaire ou une étape supplémentaire, est proposé.

**WCAG** : 3.3.4 Error Prevention (Legal, Financial, Data) (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.12

## Critère 11.13

La finalité d’un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l’utilisateur ?

**Tests**

- **11.13.1** Chaque champ de formulaire dont l’objet se rapporte à une information concernant l’utilisateur vérifie-t-il ces conditions ?
  - Le champ de formulaire possède un attribut `autocomplete `;
  - L’attribut `autocomplete` est pourvu d’une valeur présente dans la liste des valeurs possibles pour l’attribut `autocomplete` associés à un champ de formulaire ;
  - La valeur indiquée pour l’attribut `autocomplete` est pertinente au regard du type d’information attendu.

**Notes techniques**

- La liste des valeurs possibles pour l’attribut `autocomplete` repose sur la liste des valeurs présentes dans la spécification WCAG2.1 qui reprend elle-même la liste des valeurs de type “field name” de la spécification HTML5.2. Le critère WCAG demande à ce que l’une de ces valeurs soit présente pour qualifier un champ de saisie concernant l’utilisateur.
- Ce que le critère WCAG laisse implicite, ce sont les différentes règles de construction possibles pour obtenir une valeur (simple ou composée) pour l’attribut `autocomplete`. C’est cependant l’affaire du développeur de fournir à l’attribut `autocomplete` une valeur ou un ensemble de valeurs valides au regard des exigences de l’algorithme fourni par la spécification HTML5.2. Ainsi, un attribut `autocomplete` ne peut contenir qu’une seule valeur de type `“field name”`, comme `"name"` ou `"street-address"`. On peut avoir également un ensemble composé de différentes valeurs comme, par exemple, `autocomplete="shipping name"` ou `autocomplete="section-software shipping street-address"` : `"section-software"` renvoie à une valeur de type <span lang="en">“scope”</span> et `"shipping"` à une valeur de type <span lang="en">“hint set”</span>, mais toujours une seule valeur de type <span lang="en">“field name”</span>.

**WCAG** : 1.3.5 Identify Input Purpose (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.13
