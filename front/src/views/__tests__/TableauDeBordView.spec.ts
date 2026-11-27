import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import VueDsfr from '@gouvminint/vue-dsfr'
import TableauDeBordView from '../TableauDeBordView.vue'
import { violationsAccessibilite } from '@/__tests__/accessibilite'
import { TABLEAU_ESSAI, reponseJson } from '@/__tests__/donnees'

const monter = async () => {
  const wrapper = mount(TableauDeBordView, { global: { plugins: [VueDsfr] }, attachTo: document.body })
  await flushPromises()
  return wrapper
}

describe('Tableau de bord', () => {
  beforeEach(() => setActivePinia(createPinia()))
  afterEach(() => {
    vi.unstubAllGlobals()
    document.body.innerHTML = ''
  })

  it('affiche les chiffres clés, leur période et leur évolution en toutes lettres', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof fetch>(async () => reponseJson(TABLEAU_ESSAI)))
    const wrapper = await monter()
    expect(wrapper.find('h1').text()).toBe('RACHEL2')
    const cartes = wrapper.findAll('.chiffres li').map((carte) => carte.findAll('p').map((ligne) => ligne.text().replace(/\s/g, ' ')))
    expect(cartes).toEqual([
      ['1 250', 'Demandes reçues — octobre 2026', '+12 % par rapport au mois précédent'],
      ['90', 'Demandes traitées — octobre 2026', 'Pas de comparaison possible'],
    ])
    wrapper.unmount()
  })

  it('graphique DSFR avec ses données, un résumé en texte et le tableau des données en alternative', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof fetch>(async () => reponseJson(TABLEAU_ESSAI)))
    const wrapper = await monter()
    const graphique = wrapper.find('line-chart')
    expect(JSON.parse(graphique.attributes('y')!)).toEqual([[1100, 1250], [null, 90]])
    expect(JSON.parse(graphique.attributes('name')!)).toEqual(['Demandes reçues', 'Demandes traitées'])
    expect(wrapper.find('figcaption').text()).toContain('Demandes reçues : de 1')
    await wrapper.find('button[aria-expanded]').trigger('click')
    const lignes = wrapper.findAll('tbody tr').map((ligne) => ligne.findAll('td').map((cellule) => cellule.text().replace(/\s/g, ' ')))
    expect(lignes).toEqual([
      ['septembre 2026', '1 100', '—'],
      ['octobre 2026', '1 250', '90'],
    ])
    expect(await violationsAccessibilite(document.body)).toEqual([])
    wrapper.unmount()
  })

  it('explique simplement quand le serveur ne répond pas', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof fetch>(async () => reponseJson({}, 500)))
    const wrapper = await monter()
    expect(wrapper.text()).toContain('n’ont pas pu être chargés')
    wrapper.unmount()
  })

  it('aucune violation d’accessibilité automatique', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof fetch>(async () => reponseJson(TABLEAU_ESSAI)))
    const wrapper = await monter()
    expect(await violationsAccessibilite(document.body)).toEqual([])
    wrapper.unmount()
  })
})
