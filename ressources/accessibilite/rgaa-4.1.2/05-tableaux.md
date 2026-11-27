# Thème 5 — Tableaux

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 5.1

Chaque tableau de données complexe a-t-il un résumé ?

**Tests**

- **5.1.1** Pour chaque tableau de données complexe, un résumé est-il disponible ?

**Notes techniques**

- La spécification HTML propose plusieurs méthodes pour lier un résumé à un tableau (tableau lié à un passage de texte avec l’attribut `aria-describedby`, tableau groupé dans un élément `figure` avec un résumé présent dans un élément `figcaption` ou un élément `p`, résumé présent dans un élément `details` contenu dans l’élément `caption`). Ces méthodes n’ont pas un support suffisant pour être utilisées actuellement.

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.1

## Critère 5.2

Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ?

**Tests**

- **5.2.1** Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ?

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.2

## Critère 5.3

Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible ?

**Tests**

- **5.3.1** Chaque tableau de mise en forme vérifie-t-il ces conditions ?
  - Le contenu linéarisé reste compréhensible ;
  - La balise `<table>` possède un attribut `role="presentation"`.

**WCAG** : 1.3.2 Meaningful Sequence (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.3

## Critère 5.4

Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?

**Tests**

- **5.4.1** Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.4

## Critère 5.5

Pour chaque tableau de données ayant un titre, celui-ci est-il pertinent ?

**Tests**

- **5.5.1** Pour chaque tableau de données ayant un titre, ce titre permet-il d’identifier le contenu du tableau de données de manière claire et concise ?

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.5

## Critère 5.6

Pour chaque tableau de données, chaque en-tête de colonne et chaque en-tête de ligne sont-ils correctement déclarés ?

**Tests**

- **5.6.1** Pour chaque tableau de données, chaque en-tête de colonne s’appliquant à la totalité de la colonne vérifie-t-il une de ces conditions ?
  - L’en-tête de colonnes est structuré au moyen d’une balise `<th>` ;
  - L’en-tête de colonnes est structuré au moyen d’une balise pourvue d’un attribut WAI-ARIA `role="columnheader"`.
- **5.6.2** Pour chaque tableau de données, chaque en-tête de ligne s’appliquant à la totalité de la ligne vérifie-t-il une de ces conditions ?
  - L’en-tête de lignes est structuré au moyen d’une balise `<th>` ;
  - L’en-tête de lignes est structuré au moyen d’une balise pourvue d’un attribut WAI-ARIA `role="rowheader"`.
- **5.6.3** Pour chaque tableau de données, chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne est-il structuré au moyen d’une balise `<th>` ?
- **5.6.4** Pour chaque tableau de données, chaque cellule associée à plusieurs en-têtes est-elle structurée au moyen d’une balise `<td>` ou `<th>` ?

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6

## Critère 5.7

Pour chaque tableau de données, la technique appropriée permettant d’associer chaque cellule avec ses en-têtes est-elle utilisée (hors cas particuliers) ?

**Tests**

- **5.7.1** Pour chaque contenu de balise `<th>` s’appliquant à la totalité de la ligne ou de la colonne, la balise `<th>` respecte-t-elle une de ces conditions (hors cas particuliers) ?
  - La balise `<th>` possède un attribut `id` unique ;
  - La balise `<th>` possède un attribut `scope` ;
  - La balise `<th>` possède un attribut WAI-ARIA `role="rowheader"` ou `role="columnheader"`.
- **5.7.2** Pour chaque contenu de balise `<th>` s’appliquant à la totalité de la ligne ou de la colonne et possédant un attribut `scope`, la balise `<th>` vérifie-t-elle une de ces conditions ?
  - La balise `<th>` possède un attribut `scope` avec la valeur `"row"` pour les en-têtes de ligne ;
  - La balise `<th>` possède un attribut `scope` avec la valeur `"col"` pour les en-têtes de colonne.
- **5.7.3** Pour chaque contenu de balise `<th>` ne s’appliquant pas à la totalité de la ligne ou de la colonne, la balise `<th>` vérifie-t-elle ces conditions ?
  - La balise `<th>` ne possède pas d’attribut `scope` ;
  - La balise `<th>` ne possède pas d’attribut WAI-ARIA `role="rowheader"` ou `role="columnheader"` ;
  - La balise `<th>` possède un attribut `id` unique.
- **5.7.4** Pour chaque contenu de balise `<td>` ou `<th>` associée à un ou plusieurs en-têtes possédant un attribut `id`, la balise vérifie-t-elle ces conditions ?
  - La balise possède un attribut `headers` ;
  - L’attribut `headers` possède la liste des valeurs d’attribut `id` des en-têtes associés.
- **5.7.5** Pour chaque balise pourvue d’un attribut WAI-ARIA `role="rowheader"` ou `role="columnheader"` dont le contenu s’applique à la totalité de la ligne ou de la colonne, la balise vérifie-t-elle une de ces conditions ?
  - La balise possède un attribut WAI-ARIA `role="rowheader"` pour les en-têtes de ligne ;
  - La balise possède un attribut WAI-ARIA `role="columnheader"` pour les en-têtes de colonne.

**Cas particuliers**

- Dans le cas de tableaux de données ayant des en-têtes sur une seule ligne ou une seule colonne, les en-têtes peuvent être structurés à l’aide de balise `<th>` sans attribut `scope`.

**Notes techniques**

- Si l’attribut `headers` est implémenté sur une cellule déjà reliée à un en-tête (de ligne ou de colonne) avec l’attribut `scope` (avec la valeur `col` ou `row`), c’est l’en-tête ou les en-têtes référencés par l’attribut `headers` qui seront restitués aux technologies d’assistance. Les en-têtes reliés avec l’attribut `scope` seront ignorés.

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.7

## Critère 5.8

Chaque tableau de mise en forme ne doit pas utiliser d’éléments propres aux  tableaux de données. Cette règle est-elle respectée ?

**Tests**

- **5.8.1** Chaque tableau de mise en forme (balise `<table>`) vérifie-t-il ces conditions ?
  - Le tableau de mise en forme (balise `<table>`) n’a pas d’attribut `summary` (sinon vide) et ne contient pas de balises `<caption>`, `<th>`, `<thead>`, `<tfoot>` ou de balises ayant un attribut WAI-ARIA `role="rowheader"`, `role="columnheader"` ;
  - Les cellules du tableau de mise en forme (balises `<td>`) ne possèdent pas d’attributs `scope`, `headers` et `axis`.

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.8
