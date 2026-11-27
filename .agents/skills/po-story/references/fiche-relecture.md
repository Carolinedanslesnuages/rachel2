# Modèle de fiche de relecture

Fichier `revues/<nom-de-la-branche>.md`, commité sur la branche de la story.

```markdown
# Relecture : <titre court de la story>

**Branche :** story/…
**Story :** <texte complet, avec les précisions obtenues du PO>

## Critères d'acceptation
- [x] <critère> — prouvé par <fichier de test> « <nom du test> »

## Accessibilité (RGAA)
Contrôle automatique (axe-core) : <aucune violation | liste>, états testés : <…>.
Vérifications manuelles (thèmes touchés uniquement) :
- [x] <point vérifié> (thème N)
- [ ] **À vérifier par un humain** : <point>

## Périmètre
<n> fichiers modifiés ; retiré car hors sujet : <… | rien> ; dépendances ajoutées : <… | aucune>.
À traiter séparément : <problèmes repérés en passant | aucun>.

## État partagé
<store Pinia créé ou modifié, et pourquoi | aucun : état local à l'écran>

## À vérifier en priorité par le développeur
- <migrations, sécurité, choix discutables, ajouts hors story>

## Résultat du contrôle final
- Tests : <n> réussis (<n> d'accessibilité) — code de retour 0
- Lint : code de retour 0
- Compilation : code de retour 0
- Anti-fuite (gitleaks) : aucun secret
```
