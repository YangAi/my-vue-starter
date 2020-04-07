import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@preset/locales'

import '@preset/plugins/plugins'

import '@preset/style/index.scss'
import './registerServiceWorker'
import vuetify from '@preset/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
