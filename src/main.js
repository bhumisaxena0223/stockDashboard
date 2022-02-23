import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue-apexcharts'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/misc/register-service-worker'
import '@/misc/handle-network-status'
import '@/firebase/init'
import '@/firebase/authentication'
import '@/misc/handle-apple-install-prompt'
import 'pwacompat'
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// eslint-disable-next-line no-console
console.info(`
🍱 This app was bootstrapped with bento-starter 🍱

👉 https://bento-starter.netlify.com/

`)
