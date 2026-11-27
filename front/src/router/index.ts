import { createRouter, createWebHistory } from 'vue-router'
import TableauDeBordView from '../views/TableauDeBordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'tableau-de-bord', component: TableauDeBordView }],
})

// Titre de page qui dit où l'on est (RGAA 8.6).
router.afterEach(() => {
  document.title = 'Tableau de bord — RACHEL2'
})

export default router
