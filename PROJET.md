# RACHEL2

**Objectif :** Observatoire national en temps réel Économie, Énergie & Écosystèmes (France Hexagone + Outre-mer).
**Type :** tableau de bord (indicateurs calculés côté serveur, graphiques DSFR accessibles)
**Stack :** Vue 3 + NestJS + PostgreSQL, DSFR (modèle ADA `tableau-de-bord`)
**Indicateurs :** `api/src/indicateurs/indicateurs.ts`
**DSFR :** oui
**Créé le :** 2026-11-27 par Carolinedanslesnuages

## Lancer le projet
| Action | Commande |
|---|---|
| Base de données | `docker compose up -d` |
| Lancer l'API | `cd api && npm run start:dev` |
| Lancer le front | `cd front && npm run dev` |

## Stories réalisées
- #2 — Structure de l'observatoire et choix du territoire : quatre domaines et filtre de territoire (Hexagone, Outre-mer, 18 régions) partagé via le store.
