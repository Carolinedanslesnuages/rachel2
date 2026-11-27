import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // Les graphiques DSFR sont des web components, pas des composants Vue.
      template: { compilerOptions: { isCustomElement: (balise) => balise.endsWith('-chart') || balise === 'data-box' } },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Le DSFR contient des media queries réservées à Internet Explorer (min-width:0\0)
  // que le minificateur refuse : on les ignore.
  css: {
    lightningcss: { errorRecovery: true },
  },
  // Les graphiques DSFR embarquent leur propre moteur (Vue, Chart.js) : environ 300 ko compressés.
  build: { chunkSizeWarningLimit: 1200 },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/__version__': 'http://localhost:3000',
    },
  },
})
