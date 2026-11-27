import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import { lireTableauDeBord, type TableauDeBord } from '@/services/indicateurs'

/** Le tableau de bord, partagé par les écrans (et les futurs filtres). */
export const useIndicateursStore = defineStore('indicateurs', () => {
  const tableau = ref<TableauDeBord | null>(null)
  const erreur = ref<string | null>(null)

  async function charger(): Promise<void> {
    try {
      tableau.value = await lireTableauDeBord()
      erreur.value = null
    } catch {
      erreur.value = 'Les indicateurs n’ont pas pu être chargés. Réessayez dans quelques instants.'
    }
  }

  return { tableau, erreur, charger }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useIndicateursStore, import.meta.hot))
