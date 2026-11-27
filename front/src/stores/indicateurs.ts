import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { TERRITOIRE_PAR_DEFAUT, type Territoire } from '@/lib/territoires'
import { lireTableauDeBord, type TableauDeBord } from '@/services/indicateurs'

/**
 * Le tableau de bord et son filtre de territoire, partagés par les écrans.
 * Le territoire choisi survit aux changements de page : chaque écran lit le même filtre.
 */
export const useIndicateursStore = defineStore('indicateurs', () => {
  const tableau = ref<TableauDeBord | null>(null)
  const erreur = ref<string | null>(null)
  const territoireChoisi = ref<Territoire>(TERRITOIRE_PAR_DEFAUT)

  const territoire = computed(() => territoireChoisi.value.id)

  async function charger(): Promise<void> {
    try {
      tableau.value = await lireTableauDeBord(territoireChoisi.value.id)
      erreur.value = null
    } catch {
      erreur.value = 'Les indicateurs n’ont pas pu être chargés. Réessayez dans quelques instants.'
    }
  }

  /** Mémorise le territoire choisi puis recharge les indicateurs du tableau de bord. */
  async function choisirTerritoire(nouveauTerritoire: Territoire): Promise<void> {
    if (nouveauTerritoire.id === territoireChoisi.value.id) return
    territoireChoisi.value = nouveauTerritoire
    await charger()
  }

  return { tableau, erreur, territoireChoisi, territoire, charger, choisirTerritoire }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useIndicateursStore, import.meta.hot))
