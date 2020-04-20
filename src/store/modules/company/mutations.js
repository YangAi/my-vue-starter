import { EARN_CASH, SPEND_CASH } from '../mutation-types'

export default {
  [EARN_CASH] (state, payload) {
    state.cash += payload.cash
  },
  [SPEND_CASH] (state, payload) {
    state.cash += payload.cash
  }
}
