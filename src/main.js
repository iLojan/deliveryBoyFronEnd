import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import './assets/css/main.css'
import './assets/css/bootstrap-5.0.0-alpha-2.min.css'
import './assets/css/animate.css'
import './assets/css/style.css'
import 'tw-elements';
createApp(App)
.use(store)
.use(router)
.mount('#app')
