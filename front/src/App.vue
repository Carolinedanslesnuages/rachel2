<script setup lang="ts">
import { RouterView } from 'vue-router'

const logoText = ['République', 'Française']
// Liens d'évitement (RGAA 12.7) : premiers éléments atteints au clavier.
const liensEvitement = [
  { id: 'contenu', text: 'Contenu' },
  { id: 'pied-de-page', text: 'Pied de page' },
]
</script>

<template>
  <DsfrSkipLinks :links="liensEvitement" />
  <DsfrHeader
    service-title="RACHEL2"
    service-description=""
    :logo-text="logoText"
    home-to="/"
  />
  <main id="contenu" class="fr-container fr-my-6w" tabindex="-1">
    <RouterView />
  </main>
  <DsfrFooter id="pied-de-page" :logo-text="logoText" />
</template>
