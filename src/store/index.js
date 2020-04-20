import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@preset/plugins/auth/vuex'
import city from './modules/city'
import company from './modules/company'
import telecom from './modules/entity/telecom'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    city,
    company,
    telecom
  },
  strict: debug,
  plugins: []
})
