import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
      preset: Lara,
  }
});

app.use(PrimeVue, {
  theme: {
      preset: Lara,
      options: {
          cssLayer: {
              name: 'primevue',
              order: 'tailwind-base, primevue, tailwind-utilities'
          }
      }
  }
});

app.mount('#app')