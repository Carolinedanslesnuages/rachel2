import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'
import '@gouvminint/vue-dsfr/dist/vue-dsfr.css'
// Graphiques officiels du DSFR (web components : <line-chart>, <bar-chart>…).
import '@gouvfr/dsfr-chart'
import '@gouvfr/dsfr-chart/css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDsfr from '@gouvminint/vue-dsfr'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueDsfr)

app.mount('#app')
