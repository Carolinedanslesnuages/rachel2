import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useIndicateursStore } from '../indicateurs'
import { TERRITOIRE_PAR_DEFAUT } from '@/lib/territoires'
import { TABLEAU_ESSAI, reponseJson } from '@/__tests__/donnees'

describe('Magasin des indicateurs', () => {
  beforeEach(() => setActivePinia(createPinia()))
  afterEach(() => vi.unstubAllGlobals())

  it('charge le tableau de bord du territoire par défaut', async () => {
    const appel = vi.fn<typeof fetch>(async () => reponseJson(TABLEAU_ESSAI))
    vi.stubGlobal('fetch', appel)
    const magasin = useIndicateursStore()
    await magasin.charger()
    expect(appel).toHaveBeenCalledWith(
      `/api/indicateurs?territoire=${TERRITOIRE_PAR_DEFAUT.id}`,
      expect.anything(),
    )
    expect(magasin.tableau).toEqual(TABLEAU_ESSAI)
    expect(magasin.territoire).toBe(TERRITOIRE_PAR_DEFAUT.id)
  })

  it('explique simplement quand le serveur ne répond pas', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof fetch>(async () => reponseJson({}, 500)))
    const magasin = useIndicateursStore()
    await magasin.charger()
    expect(magasin.erreur).toMatch(/n’ont pas pu être chargés/)
  })

  it('mémorise le territoire choisi et recharge les indicateurs pour ce territoire', async () => {
    const appel = vi.fn<typeof fetch>(async () => reponseJson(TABLEAU_ESSAI))
    vi.stubGlobal('fetch', appel)
    const magasin = useIndicateursStore()
    await magasin.choisirTerritoire({ id: 'bretagne', libelle: 'Bretagne' })
    expect(magasin.territoire).toBe('bretagne')
    expect(appel).toHaveBeenCalledWith('/api/indicateurs?territoire=bretagne', expect.anything())
    expect(appel).toHaveBeenCalledTimes(1)
  })
})
