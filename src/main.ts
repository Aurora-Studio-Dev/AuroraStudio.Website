import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import Aura from '@primeuix/themes/aura'
import '@/assets/base.css'
import 'primeicons/primeicons.css'
import zhLang from '@/assets/lang/zh'
import enLang from '@/assets/lang/en'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    zh: zhLang,
    en: enLang,
  },
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
