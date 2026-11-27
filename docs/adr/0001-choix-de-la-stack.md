# ADR-0001 — Choix de la stack : Vue 3 + NestJS + PostgreSQL

- **Statut** : Accepted
- **Date** : 2026-11-27
- **Décideurs** : Carolinedanslesnuages, via l'atelier PO
- **Sujet** : stack technique du projet RACHEL2

## Contexte
Observatoire national en temps réel Économie, Énergie & Écosystèmes (France Hexagone + Outre-mer). Le projet démarre comme POC réalisé par un PO avec un assistant de code ; seules
les stacks de l'atelier sont autorisées. L'interface respecte le DSFR.

## Options considérées
### Option A — Vue 3 + NestJS + PostgreSQL
- Application métier structurée, nombreuses règles, durée de vie longue.
### Option B — Vue 3 + Node.js (Express)
- Plus léger, adapté à une API simple.
- **Pourquoi pas** : moins de structure quand les règles métier se multiplient.

## Décision
**Option retenue : A** — choix du PO, conforme aux consignes de l'équipe technique.

## Conséquences
- **Positives** : conventions, tests, accessibilité et CI de l'atelier disponibles d'emblée.
- **Négatives** : nécessite PostgreSQL (Docker en développement).
- **À surveiller** : un besoin hors du périmètre de la stack = nouvelle ADR.

## Suivi
- [x] Implémentation : création du projet depuis l'atelier PO
