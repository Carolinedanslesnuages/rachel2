/** Indicateurs calculés par l'API (api/src/indicateurs/indicateurs.ts). */
export interface Chiffre {
  id: string
  libelle: string
  unite: string
  domaine: string
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

export interface Section {
  domaine: string
  description: string
  chiffres: Chiffre[]
  series: Serie[]
}

export interface TableauDeBord {
  sections: Section[]
}

export async function lireTableauDeBord(territoire: string): Promise<TableauDeBord> {
  const reponse = await fetch(`/api/indicateurs?territoire=${encodeURIComponent(territoire)}`, {
    headers: { Accept: 'application/json' },
  })
  if (!reponse.ok) throw new Error(`Le serveur ne répond pas correctement (${reponse.status})`)
  return (await reponse.json()) as TableauDeBord
}
