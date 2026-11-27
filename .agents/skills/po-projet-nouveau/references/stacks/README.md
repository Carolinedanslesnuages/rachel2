# Menu des stacks

Présenter exactement ce menu au PO et demander de répondre par le numéro :

| N° | Stack | Pour quel type de projet |
|----|-------|--------------------------|
| 1 | Vue 3 + Node.js (Express) | Petite application ou API simple, peu de règles métier |
| 2 | Vue 3 + NestJS + PostgreSQL | Application métier structurée, nombreuses règles, durée de vie longue |
| 3 | Vue 3 + Python (FastAPI) + PostgreSQL | Traitement de données, calculs, IA, import/export de fichiers |
| 4 | Python (Django) | Back-office, formulaires et administration des données, vite |
| 5 | Nuxt (Vue 3 côté serveur) | Site public qui doit être bien référencé (SEO) |
| 6 | Vue 3 seul | Maquette ou prototype cliquable, sans serveur ni base de données |

Fichier de stack à lire **intégralement** après le choix :
1 → `vue-node.md`, 2 → `vue-nest.md`, 3 → `vue-fastapi.md`, 4 → `django.md`,
5 → `nuxt.md`, 6 → `vue-seul.md`.

État de validation : **la stack 2 a été générée et vérifiée de bout en bout** (2026-11-16).
Les autres fichiers suivent les mêmes règles mais n'ont pas encore été éprouvés : en cas
d'écart entre une commande et la réalité, suivre la section « Structure » et signaler l'écart.

Chaque fichier de stack contient les sections : Quand la choisir, Structure, Initialisation,
Conventions, Commandes, CI, Version, .gitignore, Option DSFR.
