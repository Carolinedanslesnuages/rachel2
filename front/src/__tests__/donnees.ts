import type { TableauDeBord } from '@/services/indicateurs'

/** Tableau de bord d'essai (données fictives) : quatre sections, une par domaine. */
export const TABLEAU_ESSAI: TableauDeBord = {
  sections: [
    {
      domaine: 'Économie',
      description: 'Activité économique, emploi et commandes du territoire.',
      chiffres: [
        { id: 'demandes-recues', libelle: 'Demandes reçues', unite: 'demandes', domaine: 'Économie', valeur: 1250, evolution: 12, periode: '2026-10' },
        { id: 'demandes-traitees', libelle: 'Demandes traitées', unite: 'demandes', domaine: 'Économie', valeur: 90, evolution: null, periode: '2026-10' },
      ],
      series: [
        {
          titre: 'Évolution mensuelle',
          unite: 'demandes',
          periodes: ['2026-09', '2026-10'],
          courbes: [
            { nom: 'Demandes reçues', valeurs: [1100, 1250] },
            { nom: 'Demandes traitées', valeurs: [null, 90] },
          ],
        },
      ],
    },
    {
      domaine: 'Énergie',
      description: 'Production et consommation d’énergie du territoire.',
      chiffres: [],
      series: [],
    },
    {
      domaine: 'Écosystèmes',
      description: 'État des milieux naturels et de la biodiversité.',
      chiffres: [],
      series: [],
    },
    {
      domaine: 'Climat et environnement',
      description: 'Émissions, qualité de l’air et températures du territoire.',
      chiffres: [],
      series: [],
    },
  ],
}

export const reponseJson = (corps: unknown, status = 200) =>
  new Response(JSON.stringify(corps), { status, headers: { 'Content-Type': 'application/json' } })
