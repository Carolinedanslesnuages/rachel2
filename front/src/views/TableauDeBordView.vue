<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import GraphiqueAccessible from '@/components/GraphiqueAccessible.vue'
import { evolution, nombre, periode } from '@/lib/format'
import { useIndicateursStore } from '@/stores/indicateurs'

const magasin = useIndicateursStore()
const { tableau, erreur } = storeToRefs(magasin)
onMounted(() => magasin.charger())
</script>

<template>
  <h1>RACHEL2</h1>
  <p>Les indicateurs sont calculés à partir des mesures enregistrées (données fictives dans l’aperçu).</p>
  <DsfrAlert v-if="erreur" type="error" title="Indicateurs indisponibles" title-tag="h2" :description="erreur" />
  <p v-else-if="!tableau" role="status">Chargement des indicateurs…</p>
  <template v-else>
    <h2 class="fr-h4">Chiffres clés</h2>
    <ul class="fr-grid-row fr-grid-row--gutters chiffres">
      <li v-for="chiffre in tableau.chiffres" :key="chiffre.id" class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-callout fr-mb-0 chiffres__carte">
          <p class="fr-callout__title fr-h2 fr-mb-1v">{{ nombre(chiffre.valeur) }}</p>
          <p class="fr-text--bold fr-mb-1v">{{ chiffre.libelle }} — {{ periode(chiffre.periode) }}</p>
          <p class="fr-text--sm fr-mb-0">{{ evolution(chiffre.evolution) }}</p>
        </div>
      </li>
    </ul>
    <p v-if="tableau.series.length === 0" class="fr-mt-4w">Aucune mesure enregistrée pour l’instant.</p>
    <div class="fr-mt-4w">
      <GraphiqueAccessible v-for="(serie, rang) in tableau.series" :key="serie.titre" :serie="serie" :identifiant="`serie-${rang}`" />
    </div>
  </template>
</template>

<style scoped>
.chiffres {
  list-style: none;
  padding: 0;
}
.chiffres__carte {
  height: 100%;
}
</style>
