# Thème 9 — Structuration de l’information

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 9.1

Dans chaque page web, l’information est-elle structurée par l’utilisation appropriée de titres ?

**Tests**

- **9.1.1** Dans chaque page web, la hiérarchie entre les titres (balise `<hx>` ou balise possédant un attribut WAI-ARIA `role="heading"` associé à un attribut WAI-ARIA `aria-level`) est-elle pertinente ?
- **9.1.2** Dans chaque page web, le contenu de chaque titre (balise `<hx>` ou balise possédant un attribut WAI-ARIA `role="heading"` associé à un attribut WAI-ARIA `aria-level`) est-il pertinent ?
- **9.1.3** Dans chaque page web, chaque passage de texte constituant un titre est-il structuré à l’aide d’une balise `<hx>` ou d’une balise possédant un attribut WAI-ARIA `role="heading"` associé à un attribut WAI-ARIA `aria-level` ?

**Notes techniques**

- WAI-ARIA permet de définir des titres via le rôle `heading` et l’attribut `aria-level` (indication du niveau de titre). Bien qu’il soit préférable d’utiliser l’élément de titre natif en HTML `<hx>`, l’utilisation du rôle WAI-ARIA `heading` est compatible avec l’accessibilité.

**WCAG** : 1.3.1 Info and Relationships (A) ; 2.4.1 Bypass Blocks (A) ; 2.4.6 Headings and Labels (AA) ; 4.1.2 Name, Role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.1

## Critère 9.2

Dans chaque page web, la structure du document est-elle cohérente (hors cas particuliers) ?

**Tests**

- **9.2.1** Dans chaque page web, la structure du document vérifie-t-elle ces conditions (hors cas particuliers) ?
  - La zone d’en-tête de la page est structurée via une balise `<header>` ;
  - Les zones de navigation principales et secondaires sont structurées via une balise `<nav>` ;
  - La balise `<nav>` est réservée à la structuration des zones de navigation principales et secondaires ;
  - La zone de contenu principal est structurée via une balise `<main>` ;
  - La structure du document utilise une balise `<main>` visible unique ;
  - La zone de pied de page est structurée via une balise `<footer>`.

**Cas particuliers**

- Lorsque le doctype déclaré dans la page n’est pas le doctype HTML5, ce critère est non applicable.

**Notes techniques**

- La balise `<main>` peut être utilisée plusieurs fois dans le même document HTML. Néanmoins, il ne peut y avoir en permanence qu’une seule balise visible et lisible par les technologies d’assistances, les autres devant disposer d’un attribut `hidden` ou d’un style permettant de les masquer aux technologies d’assistances. À noter cependant que l’utilisation d’un style seul restera insuffisante pour assurer l’unicité d’une balise `<main>` visible en cas de désactivation des feuilles de styles.

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.2

## Critère 9.3

Dans chaque page web, chaque liste est-elle correctement structurée ?

**Tests**

- **9.3.1** Dans chaque page web, les informations regroupées visuellement sous forme de liste non ordonnée vérifient-elles une de ces conditions ?
  - La liste utilise les balises HTML `<ul>` et `<li>` ;
  - La liste utilise les attributs WAI-ARIA `role="list"` et `role="listitem"`.
- **9.3.2** Dans chaque page web, les informations regroupées visuellement sous forme de liste ordonnée vérifient-elles une de ces conditions ?
  - La liste utilise les balises HTML `<ol>` et `<li>` ;
  - La liste utilise les attributs WAI-ARIA `role="list"` et `role="listitem"`.
- **9.3.3** Dans chaque page web, les informations regroupées sous forme de liste de description utilisent-elles les balises `<dl>` et `<dt>/<dd>` ?

**Notes techniques**

- Les attributs WAI-ARIA `role="list"` et `role="listitem"` peuvent nécessiter l’utilisation des attributs WAI-ARIA `aria-setsize` et `aria-posinset` dans le cas où l’ensemble de la liste n’est pas disponible via le DOM généré au moment de la consultation.
- Les attributs WAI-ARIA `role="tree"`, `role="tablist"`, `role="menu"`, `role="combobox"` et `role="listbox"` ne sont pas équivalents à une liste HTML `<ul>` ou `<ol>`.

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.3

## Critère 9.4

Dans chaque page web, chaque citation est-elle correctement indiquée ?

**Tests**

- **9.4.1** Dans chaque page web, chaque citation courte utilise-t-elle une balise `<q>` ?
- **9.4.2** Dans chaque page web, chaque bloc de citation utilise-t-il une balise `<blockquote>` ?

**WCAG** : 1.3.1 Info and Relationships (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4
