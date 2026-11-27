# Accessibilité RGAA — à chaque story

**Référentiel complet** (DINUM, RGAA 4.1.2, 106 critères et leurs tests) : `rgaa-4.1.2/README.md`
pour l'index, puis le fichier du thème concerné. Dans un projet : `ressources/accessibilite/rgaa-4.1.2/`.

Le RGAA 4 s'appuie sur les WCAG 2.1 niveau AA. Un outil automatique n'en couvre
qu'environ un tiers : **il ne remplace ni un audit humain ni la déclaration
d'accessibilité**. Ne jamais écrire qu'un écran est « conforme RGAA ».

## 1. Contrôle automatique (bloquant)

Projets Vue : utilitaire `src/__tests__/accessibilite.ts` (axe-core, règles
`wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` ; contraste désactivé sous jsdom, assuré
par le DSFR). S'il n'existe pas encore, le créer (contenu dans la fiche de stack).

Pour chaque écran créé ou modifié, un test par état significatif (liste remplie,
liste vide, erreur, formulaire en erreur…) :

```ts
const wrapper = mount(MonEcran, { global: { plugins: [VueDsfr] }, attachTo: document.body })
await flushPromises()
expect(await violationsAccessibilite(wrapper.element.parentElement!)).toEqual([])
wrapper.unmount()
```

## 2. Grille manuelle — seulement les thèmes touchés

| Thème RGAA | À vérifier si la story… | Points de contrôle |
|---|---|---|
| 1 Images | ajoute une image ou une icône | alternative pertinente, ou `alt=""` si décorative |
| 5 Tableaux | affiche un tableau | titre (`caption`), en-têtes de colonnes |
| 6 Liens | ajoute un lien | intitulé compréhensible hors contexte (pas « cliquez ici ») |
| 7 Scripts | change le contenu sans recharger la page | messages de statut annoncés (`role="status"` / `aria-live`), focus géré |
| 8 Éléments obligatoires | crée une page | `lang="fr"`, titre de page pertinent |
| 9 Structuration | crée ou modifie une page | un seul `h1`, hiérarchie de titres sans saut |
| 10 Présentation | modifie la mise en forme | information pas donnée par la couleur seule, focus visible |
| 11 Formulaires | ajoute un champ | étiquette visible liée, erreurs explicites et reliées au champ, champs obligatoires signalés |
| 12 Navigation | ajoute une page ou un menu | atteignable au clavier, ordre de tabulation logique |

Pour chaque point : cocher s'il est vérifié dans le code, sinon le laisser décoché
avec la mention **« À vérifier par un humain »** (ex. rendu au lecteur d'écran).
