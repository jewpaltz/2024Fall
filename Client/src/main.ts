import 'bulma/css/bulma.css'
import '@oruga-ui/theme-oruga/dist/oruga.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'

import { Autocomplete } from '@oruga-ui/oruga-next'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(Autocomplete)

app.mount('#app')
