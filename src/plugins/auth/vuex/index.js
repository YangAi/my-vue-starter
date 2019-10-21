import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'

const module = {
  auth: {
    state,
    mutations,
    actions
  }
}

Vue.use(Vuex)
export default new Vuex.Store({
  modules: module
})
