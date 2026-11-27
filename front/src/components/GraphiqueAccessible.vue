<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Serie } from '@/services/indicateurs'
import { nombre, periode } from '@/lib/format'

/**
 * Graphique DSFR (<line-chart>, dessiné dans un canvas) et son alternative accessible : un
 * résumé en texte et le tableau des données (RGAA 1.6 : alternative à une image complexe).
 */
const props = defineProps<{ serie: Serie; identifiant: string }>()

const tableauOuvert = ref(-1)
const abscisses = computed(() => JSON.stringify(props.serie.courbes.map(() => props.serie.periodes.map(periode))))
const ordonnees = computed(() => JSON.stringify(props.serie.courbes.map((courbe) => courbe.valeurs)))
const noms = computed(() => JSON.stringify(props.serie.courbes.map((courbe) => courbe.nom)))
const resume = computed(() =>
  props.serie.courbes
    .map((courbe) => {
      const connues = courbe.valeurs.filter((valeur): valeur is number => valeur !== null)
      if (!connues.length) return `${courbe.nom} : aucune mesure`
      return `${courbe.nom} : de ${nombre(connues[0]!)} à ${nombre(connues[connues.length - 1]!)} ${props.serie.unite}, au plus haut ${nombre(Math.max(...connues))}`
    })
    .join(' ; '),
)
const entetes = computed(() => ['Période', ...props.serie.courbes.map((courbe) => `${courbe.nom} (${props.serie.unite})`)])
const lignes = computed(() =>
  props.serie.periodes.map((mois, rang) => [periode(mois), ...props.serie.courbes.map((courbe) => nombre(courbe.valeurs[rang] ?? null))]),
)
</script>

<template>
  <figure class="fr-mb-4w" :aria-labelledby="`${identifiant}-titre`">
    <h2 :id="`${identifiant}-titre`" class="fr-h4">{{ serie.titre }}</h2>
    <div class="graphique" aria-hidden="true">
      <line-chart :x="abscisses" :y="ordonnees" :name="noms" :unit-tooltip="serie.unite" />
    </div>
    <figcaption class="fr-text--sm fr-mt-1w">{{ resume }}.</figcaption>
    <DsfrAccordionsGroup v-model="tableauOuvert" class="fr-mt-2w">
      <DsfrAccordion :id="`${identifiant}-donnees`" title="Voir les données en tableau">
        <DsfrTable :title="`${serie.titre} : données`" :headers="entetes" :rows="lignes" />
      </DsfrAccordion>
    </DsfrAccordionsGroup>
  </figure>
</template>

<style scoped>
/* Les graphiques DSFR sont des web components « en ligne » : sans cela, ils restent minuscules. */
.graphique line-chart {
  display: block;
  width: 100%;
}
</style>
