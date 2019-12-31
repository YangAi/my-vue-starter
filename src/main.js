import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@plugins/plugins'
import '@plugins/nprogress'
import '@plugins/prototypes'

import '@style/index.scss'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
