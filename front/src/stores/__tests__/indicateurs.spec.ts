import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useIndicateursStore } from '../indicateurs'
import { TABLEAU_ESSAI, reponseJson } from '@/__tests__/donnees'

describe('Magasin des indicateurs', () => {
  beforeEach(() => setActivePinia(createPinia()))
  afterEach(() => vi.unstubAllGlobals())

  it('charge le tableau de bord calculé par l’API', async () => {
    const appel = vi.fn<typeof fetch>(async () => reponseJson(TABLEAU_ESSAI))
    vi.stubGlobal('fetch', appel)
    const magasin = useIndicateursStore()
    await magasin.charger()
    expect(appel).toHaveBeenCalledWith('/api/indicateurs', expect.anything())
    expect(magasin.tableau).toEqual(TABLEAU_ESSAI)
  })

  it('explique simplement quand le serveur ne répond pas', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof fetch>(async () => reponseJson({}, 500)))
    const magasin = useIndicateursStore()
    await magasin.charger()
    expect(magasin.erreur).toMatch(/n’ont pas pu être chargés/)
  })
})
