import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@preset/locales'
import vuetify from '@preset/plugins/vuetify'

import '@preset/plugins/plugins'

import '@preset/style/index.scss'
import './registerServiceWorker'

// import base component for this project
import '@components/base'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
