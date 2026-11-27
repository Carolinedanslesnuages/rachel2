# Contrôle de périmètre — avant de livrer

Sans relecteur humain, rien n'empêche un « refactor au passage », une dépendance non
demandée ou une abstraction inutile. Ce contrôle les attrape avant la livraison.

## Si la skill `repo-perimetre` est installée (agent-skills IA-Generative)

L'appliquer avec comme intention : « Cette branche doit permettre <besoin de la story>, et rien
d'autre. » Elle est en lecture seule : c'est toi qui retires ensuite ce qu'elle signale.

## Sinon — contrôle intégré

1. `git diff --stat main...HEAD` puis `git diff main...HEAD` fichier par fichier.
2. Classer chaque fichier, puis chaque bloc modifié :
   - **sert la story** : implémente un critère d'acceptation ;
   - **nécessaire** : test, migration, route, store, fiche de relecture, `PROJET.md` ;
   - **hors périmètre** : reformatage d'un fichier non concerné, renommage, « amélioration »
     d'un code existant, dépendance ajoutée sans qu'un critère l'exige, abstraction pour un
     seul usage, correction d'un autre problème.
3. **Retirer tout ce qui est hors périmètre** (`git restore -s main -- <fichier>` pour un
   fichier entier, sinon éditer). Un autre problème repéré → le noter dans la fiche comme
   « à traiter dans une story ou un bug séparé », sans le corriger ici.
4. Relancer le contrôle final si quelque chose a été retiré.

Noter dans la fiche de relecture, section « Périmètre » : nombre de fichiers modifiés, ce qui
a été retiré, et toute dépendance ajoutée avec sa justification.
