# Thème 4 — Multimédia

> Référentiel général d’amélioration de l’accessibilité (RGAA) 4.1.2, publié par la DINUM.
> Source officielle : https://accessibilite.numerique.gouv.fr — contenus sous licence ouverte 2.0. Généré par `scripts/rgaa-generer.mjs`
> à partir de `criteres.json` : ne pas modifier à la main. Les termes du référentiel sont définis
> dans le glossaire officiel (https://accessibilite.numerique.gouv.fr/methode/glossaire/).

## Critère 4.1

Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription (hors cas particuliers) ?

**Tests**

- **4.1.1** Chaque média temporel pré-enregistré seulement audio, vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?
  - Il existe une transcription textuelle accessible via un lien ou bouton adjacent ;
  - Il existe une transcription textuelle adjacente clairement identifiable.
- **4.1.2** Chaque média temporel pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?
  - Il existe une version alternative « audio seulement » accessible via un lien ou bouton adjacent ;
  - Il existe une version alternative « audio seulement » adjacente clairement identifiable ;
  - Il existe une transcription textuelle accessible via un lien ou bouton adjacent ;
  - Il existe une transcription textuelle adjacente clairement identifiable ;
  - Il existe une audiodescription synchronisée ;
  - Il existe une version alternative avec une audiodescription synchronisée accessible via un lien ou bouton adjacent.
- **4.1.3** Chaque média temporel synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?
  - Il existe une transcription textuelle accessible via un lien ou bouton adjacent ;
  - Il existe une transcription textuelle adjacente clairement identifiable ;
  - Il existe une audiodescription synchronisée ;
  - Il existe une version alternative avec une audiodescription synchronisée accessible via un lien ou bouton adjacent.

**Cas particuliers**

- Il existe une gestion de cas particulier lorsque :
- [object Object]
- Dans ces situations, le critère est non applicable.
- Ce cas particulier s’applique également aux critères 4.2, 4.3, 4.5.

**WCAG** : 1.2.1 Audio-only and Video-only (Prerecorded) (A) ; 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.1

## Critère 4.2

Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ?

**Tests**

- **4.2.1** Pour chaque média temporel pré-enregistré seulement audio, ayant une transcription textuelle, celle-ci est-elle pertinente (hors cas particuliers) ?
- **4.2.2** Chaque média temporel pré-enregistré seulement vidéo vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - La transcription textuelle est pertinente ;
  - L’audiodescription synchronisée est pertinente ;
  - L’audiodescription synchronisée de la version alternative est pertinente ;
  - La version alternative audio seulement est pertinente.
- **4.2.3** Chaque média temporel synchronisé pré-enregistré vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - La transcription textuelle est pertinente ;
  - L’audiodescription synchronisée est pertinente ;
  - L’audiodescription synchronisée de la version alternative est pertinente.

**Cas particuliers**

- Voir cas particuliers critère 4.1.

**WCAG** : 1.2.1 Audio-only and Video-only (Prerecorded) (A) ; 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.2

## Critère 4.3

Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers) ?

**Tests**

- **4.3.1** Chaque média temporel synchronisé pré-enregistré vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?
  - Le média temporel synchronisé possède des sous-titres synchronisés ;
  - Il existe une version alternative possédant des sous-titres synchronisés accessible via un lien ou bouton adjacent.
- **4.3.2** Pour chaque média temporel synchronisé pré-enregistré possédant des sous-titres synchronisés diffusés via une balise `<track>`, la balise `<track>` possède-t-elle un attribut `kind="captions"` ?

**Cas particuliers**

- Voir cas particuliers critère 4.1.

**WCAG** : 1.2.2 Captions (Prerecorded) (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.3

## Critère 4.4

Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?

**Tests**

- **4.4.1** Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?

**WCAG** : 1.2.2 Captions (Prerecorded) (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.4

## Critère 4.5

Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée (hors cas particuliers) ?

**Tests**

- **4.5.1** Chaque média temporel pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?
  - Il existe une audiodescription synchronisée ;
  - Il existe une version alternative avec une audiodescription synchronisée.
- **4.5.2** Chaque média temporel synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?
  - Il existe une audiodescription synchronisée ;
  - Il existe une version alternative avec une audiodescription synchronisée.

**Cas particuliers**

- Voir cas particuliers critère 4.1.

**WCAG** : 1.2.5 Audio Description (Prerecorded) (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.5

## Critère 4.6

Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?

**Tests**

- **4.6.1** Pour chaque média temporel pré-enregistré seulement vidéo ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?
- **4.6.2** Pour chaque média temporel synchronisé ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?

**WCAG** : 1.2.5 Audio Description (Prerecorded) (AA)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.6

## Critère 4.7

Chaque média temporel est-il clairement identifiable (hors cas particuliers) ?

**Tests**

- **4.7.1** Pour chaque média temporel seulement son, seulement vidéo ou synchronisé, le contenu textuel adjacent permet-il d’identifier clairement le média temporel (hors cas particuliers) ?

**Cas particuliers**

- Il existe une gestion de cas particulier lorsque le média temporel est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information). Dans cette situation, le critère est non applicable.

**WCAG** : 1.1.1 Non-text Content (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.7

## Critère 4.8

Chaque média non temporel a-t-il, si nécessaire, une alternative (hors cas particuliers) ?

**Tests**

- **4.8.1** Chaque média non temporel vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?
  - Un lien ou un bouton adjacent, clairement identifiable, permet d’accéder à une page contenant une alternative ;
  - Un lien ou un bouton adjacent, clairement identifiable, permet d’accéder à une alternative dans la page.
- **4.8.2** Chaque média non temporel associé à une alternative vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - La page référencée par le lien ou bouton adjacent est accessible ;
  - L’alternative dans la page, référencée par le lien ou bouton adjacent, est accessible.

**Cas particuliers**

- Il existe une gestion de cas particulier lorsque :
- [object Object]
- Dans ces situations, le critère est non applicable.

**WCAG** : 1.1.1 Non-text Content (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.8

## Critère 4.9

Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?

**Tests**

- **4.9.1** Pour chaque média non temporel ayant une alternative, cette alternative permet-elle d’accéder au même contenu et à des fonctionnalités similaires ?

**WCAG** : 1.1.1 Non-text Content (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.9

## Critère 4.10

Chaque son déclenché automatiquement est-il contrôlable par l’utilisateur ?

**Tests**

- **4.10.1** Chaque séquence sonore déclenchée automatiquement via une balise `<object>`, `<video>`, `<audio>`, `<embed>`, `<bgsound>` ou un code JavaScript vérifie-t-elle une de ces conditions ?
  - La séquence sonore a une durée inférieure ou égale à 3 secondes ;
  - La séquence sonore peut être stoppée sur action de l’utilisateur ;
  - Le volume de la séquence sonore peut être contrôlé par l’utilisateur indépendamment du contrôle de volume du système.

**WCAG** : 1.4.2 Audio Control (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.10

## Critère 4.11

La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?

**Tests**

- **4.11.1** Chaque média temporel a-t-il, si nécessaire, les fonctionnalités de contrôle de sa consultation ?
- **4.11.2** Pour chaque média temporel, chaque fonctionnalité vérifie-t-elle une de ces conditions ?
  - La fonctionnalité est accessible par le clavier et tout dispositif de pointage ;
  - Une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
- **4.11.3** Pour chaque média temporel, chaque fonctionnalité vérifie-t-elle une de ces conditions ?
  - La fonctionnalité est activable par le clavier et tout dispositif de pointage ;
  - Une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.

**WCAG** : 2.1.1 Keyboard (A) ; 2.1.2 No Keyboard Trap (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.11

## Critère 4.12

La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?

**Tests**

- **4.12.1** Pour chaque média non temporel, chaque fonctionnalité vérifie-t-elle une de ces conditions ?
  - La fonctionnalité est accessible par le clavier et tout dispositif de pointage ;
  - Une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
- **4.12.2** Pour chaque média non temporel, chaque fonctionnalité vérifie-t-elle une de ces conditions ?
  - La fonctionnalité est activable par le clavier et tout dispositif de pointage ;
  - Une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.

**WCAG** : 2.1.1 Keyboard (A) ; 2.1.2 No Keyboard Trap (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.12

## Critère 4.13

Chaque média temporel et non temporel est-il compatible avec les technologies d’assistance (hors cas particuliers) ?

**Tests**

- **4.13.1** Chaque média temporel et non temporel vérifie-t-il une de ces conditions (hors cas particuliers) ?
  - Le nom, le rôle, la valeur, le paramétrage et les changements d’états des composants d’interfaces sont accessibles aux technologies d’assistance via une API d’accessibilité ;
  - Une alternative compatible avec une API d’accessibilité permet d’accéder aux mêmes fonctionnalités.
- **4.13.2** Chaque média temporel et non temporel qui possède une alternative compatible avec les technologies d’assistance, vérifie-t-il une de ces conditions ?
  - L’alternative est adjacente au média temporel ou non temporel ;
  - L’alternative est accessible via un lien ou bouton adjacent ;
  - Un mécanisme permet de remplacer le média temporel ou non temporel par son alternative.

**Cas particuliers**

- Il existe une gestion de cas particulier lorsque le média temporel ou non temporel est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information).
- Dans ces situations, le critère est non applicable.

**WCAG** : 4.1.2 Name, role, Value (A)
**Fiche officielle** : https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.13
