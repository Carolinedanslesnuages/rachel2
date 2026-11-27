import type { TableauDeBord } from '@/services/indicateurs'

/** Tableau de bord d'essai (données fictives). */
export const TABLEAU_ESSAI: TableauDeBord = {
  chiffres: [
    { id: 'demandes-recues', libelle: 'Demandes reçues', unite: 'demandes', valeur: 1250, evolution: 12, periode: '2026-10' },
    { id: 'demandes-traitees', libelle: 'Demandes traitées', unite: 'demandes', valeur: 90, evolution: null, periode: '2026-10' },
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
}

export const reponseJson = (corps: unknown, status = 200) =>
  new Response(JSON.stringify(corps), { status, headers: { 'Content-Type': 'application/json' } })
