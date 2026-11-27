<script setup lang="ts">
import GraphiqueAccessible from '@/components/GraphiqueAccessible.vue'
import { evolution, nombre, periode } from '@/lib/format'
import type { Section } from '@/services/indicateurs'

/** Une section du tableau de bord : un domaine, ses chiffres clés et ses graphiques. */
defineProps<{ section: Section; identifiant: string }>()
</script>

<template>
  <section class="fr-mb-6w" :aria-labelledby="`${identifiant}-titre`">
    <h2 :id="`${identifiant}-titre`" class="fr-h3">{{ section.domaine }}</h2>
    <p>{{ section.description }}</p>
    <p v-if="section.chiffres.length === 0">Aucun indicateur n’est encore suivi dans ce domaine.</p>
    <ul v-else class="fr-grid-row fr-grid-row--gutters chiffres">
      <li v-for="chiffre in section.chiffres" :key="chiffre.id" class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-callout fr-mb-0 chiffres__carte">
          <template v-if="chiffre.valeur === null">
            <p class="fr-text--bold fr-mb-1v">{{ chiffre.libelle }}</p>
            <p class="fr-mb-0">Donnée non disponible pour ce territoire</p>
          </template>
          <template v-else>
            <p class="fr-callout__title fr-h2 fr-mb-1v">{{ nombre(chiffre.valeur) }}</p>
            <p class="fr-text--bold fr-mb-1v">{{ chiffre.libelle }} — {{ periode(chiffre.periode) }}</p>
            <p class="fr-text--sm fr-mb-0">{{ evolution(chiffre.evolution) }}</p>
          </template>
        </div>
      </li>
    </ul>
    <div class="fr-mt-4w">
      <GraphiqueAccessible
        v-for="(serie, rang) in section.series"
        :key="serie.titre"
        :serie="serie"
        :identifiant="`${identifiant}-serie-${rang}`"
        titre-tag="h3"
      />
    </div>
  </section>
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
