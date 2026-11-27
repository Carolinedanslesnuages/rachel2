# Thème 8 — Éléments obligatoires

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 8.1

Chaque page web est-elle définie par un type de document ?

**Tests**

- **8.1.1** Pour chaque page web, le type de document (balise `doctype`) est-il présent ?
- **8.1.2** Pour chaque page web, le type de document (balise `doctype`) est-il valide ?
- **8.1.3** Pour chaque page web possédant une déclaration de type de document, celle-ci est-elle située avant la balise `<html>` dans le code source ?

**WCAG** : 4.1.1 Parsing (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.1

## Critère 8.2

Pour chaque page web, le code source généré est-il valide selon le type de document spécifié ?

**Tests**

- **8.2.1** Pour chaque déclaration de type de document, le code source généré de la page vérifie-t-il ces conditions ?
  - Les balises, attributs et valeurs d’attributs respectent les règles d’écriture ;
  - L’imbrication des balises est conforme ;
  - L’ouverture et la fermeture des balises sont conformes ;
  - Les valeurs d’attribut id sont uniques dans la page ;
  - Les attributs ne sont pas doublés sur un même élément.

**WCAG** : 4.1.1 Parsing (A) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.2

## Critère 8.3

Dans chaque page web, la langue par défaut est-elle présente ?

**Tests**

- **8.3.1** Pour chaque page web, l’indication de langue par défaut vérifie-t-elle une de ces conditions ?
  - L’indication de la langue de la page (attribut `lang` et/ou `xml:lang`) est donnée pour l’élément `html` ;
  - L’indication de la langue de la page (attribut `lang` et/ou `xml:lang`) est donnée sur chaque élément de texte ou sur l’un des éléments parents.

**WCAG** : 3.1.1 Language of Page (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.3

## Critère 8.4

Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?

**Tests**

- **8.4.1** Pour chaque page web ayant une langue par défaut, le code de langue vérifie-t-il ces conditions ?
  - Le code de langue est valide ;
  - Le code de langue est pertinent.

**WCAG** : 3.1.1 Language of Page (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.4

## Critère 8.5

Chaque page web a-t-elle un titre de page ?

**Tests**

- **8.5.1** Chaque page web a-t-elle un titre de page (balise `<title>`) ?

**WCAG** : 2.4.2 Page Titled (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.5

## Critère 8.6

Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?

**Tests**

- **8.6.1** Pour chaque page web ayant un titre de page (balise `<title>`), le contenu de cette balise est-il pertinent ?

**WCAG** : 2.4.2 Page Titled (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.6

## Critère 8.7

Dans chaque page web, chaque changement de langue est-il indiqué dans le code source (hors cas particuliers) ?

**Tests**

- **8.7.1** Dans chaque page web, chaque texte écrit dans une langue différente de la langue par défaut vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - L’indication de langue est donnée sur l’élément contenant le texte (attribut `lang` et/ou `xml:lang`) ;
  - L’indication de langue est donnée sur un des éléments parents (attribut `lang` et/ou `xml:lang`)

**Cas particuliers**

- Il y a une gestion de cas particuliers sur le changement de langue pour les cas suivants :
- [object Object]
- Note 1 : le dictionnaire officiel est celui recommandé par l’académie en charge de la langue en question. Pour la France, par exemple, le lien vers le dictionnaire officiel se trouve sur le site de l’Académie française à l’adresse suivante : http://www.academie-francaise.fr/le-dictionnaire/la-9e-edition. Pour toute demande auprès du service du dictionnaire de l’Académie française, utiliser le formulaire de contact du service du dictionnaire.
- Note 2 : pour les noms communs de langue étrangère, absents dans le dictionnaire officiel de la langue par défaut de la page web, et qui sont passés dans le langage commun (exemple : newsletter) : le critère est applicable, uniquement lorsque l’absence d’indication de langue peut provoquer une incompréhension pour la restitution.

**WCAG** : 3.1.2 Language of Parts (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.7

## Critère 8.8

Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?

**Tests**

- **8.8.1** Pour chaque page web, le code de langue de chaque changement de langue vérifie-t-il ces conditions ?
  - Le code de langue est valide ;
  - Le code de langue est pertinent.

**WCAG** : 3.1.2 Language of Parts (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.8

## Critère 8.9

Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?

**Tests**

- **8.9.1** Dans chaque page web les balises (à l’exception de `<div>`, `<span>` et `<table>`) ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.9

## Critère 8.10

Dans chaque page web, les changements du sens de lecture sont-ils signalés ?

**Tests**

- **8.10.1** Dans chaque page web, chaque texte dont le sens de lecture est différent du sens de lecture par défaut est contenu dans une balise possédant un attribut `dir` ?
- **8.10.2** Dans chaque page web, chaque changement du sens de lecture (attribut `dir`) vérifie-t-il ces conditions ?
  - La valeur de l’attribut `dir` est conforme (`rtl` ou `ltr`) ;
  - La valeur de l’attribut `dir` est pertinente.

**WCAG** : 1.3.2 Meaningful Sequence (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.10
