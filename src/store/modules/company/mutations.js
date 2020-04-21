import { EARN_CASH, SPEND_CASH } from '../mutation-types'

export default {
  [EARN_CASH] (state, cash) {
    state.cash += cash
  },
  [SPEND_CASH] (state, cash) {
    state.cash -= cash
  }
}
