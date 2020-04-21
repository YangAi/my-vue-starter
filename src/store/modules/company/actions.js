import * as types from '../mutation-types'
import Vue from 'vue'

export default {
  earnCash ({ commit, state }, cash) {
    commit(types.EARN_CASH, cash)
  },
  spendCash ({ commit, state }, cash) {
    if (cash > state.cash) {
      Vue.$toast.error('没有足够的钱。')
      return false
    }
    commit(types.SPEND_CASH, cash)
    return true
  }
}
