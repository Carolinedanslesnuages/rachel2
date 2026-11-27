/** Indicateurs calculés par l'API (api/src/indicateurs/indicateurs.ts). */
export interface Chiffre {
  id: string
  libelle: string
  unite: string
  valeur: number | null
  evolution: number | null
  periode: string | null
}

export interface Serie {
  titre: string
  unite: string
  periodes: string[]
  courbes: { nom: string; valeurs: (number | null)[] }[]
}

export interface TableauDeBord {
  chiffres: Chiffre[]
  series: Serie[]
}

export async function lireTableauDeBord(): Promise<TableauDeBord> {
  const reponse = await fetch('/api/indicateurs', { headers: { Accept: 'application/json' } })
  if (!reponse.ok) throw new Error(`Le serveur ne répond pas correctement (${reponse.status})`)
  return (await reponse.json()) as TableauDeBord
}
