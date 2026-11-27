<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import SectionDomaine from '@/components/SectionDomaine.vue'
import { TERRITOIRES } from '@/lib/territoires'
import { useIndicateursStore } from '@/stores/indicateurs'

const magasin = useIndicateursStore()
const { tableau, erreur, territoire } = storeToRefs(magasin)

const optionsTerritoire = TERRITOIRES.map((choix) => ({ text: choix.libelle, value: choix.id }))
const libelleTerritoire = computed(() => TERRITOIRES.find((choix) => choix.id === territoire.value)?.libelle ?? '')

const messageStatut = computed(() => {
  if (erreur.value) return ''
  if (!tableau.value) return 'Chargement des indicateurs…'
  return `Indicateurs affichés pour le territoire : ${libelleTerritoire.value}.`
})

function changerTerritoire(identifiant: string | number | undefined) {
  const territoireChoisi = TERRITOIRES.find((choix) => choix.id === identifiant)
  if (territoireChoisi) magasin.choisirTerritoire(territoireChoisi)
}

onMounted(() => magasin.charger())
</script>

<template>
  <h1>RACHEL2</h1>
  <p>Les indicateurs sont calculés à partir des mesures enregistrées (données fictives dans l’aperçu).</p>
  <DsfrSelect
    :model-value="territoire"
    label="Territoire"
    hint="Hexagone, Outre-mer ou une région"
    :options="optionsTerritoire"
    @update:model-value="changerTerritoire"
  />
  <DsfrAlert v-if="erreur" type="error" title="Indicateurs indisponibles" title-tag="h2" :description="erreur" />
  <p role="status" class="fr-mt-2w">{{ messageStatut }}</p>
  <template v-if="tableau && !erreur">
    <SectionDomaine
      v-for="(section, rang) in tableau.sections"
      :key="section.domaine"
      :section="section"
      :identifiant="`domaine-${rang}`"
    />
  </template>
</template>
