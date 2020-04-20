import * as types from '../../mutation-types'

export default {
  [types.CHANGE_TELECOM_EMPLOYEE] (state, employeeChange, rootState) {
    state.employee += employeeChange
  },
  [types.SET_TELECOM_PRICE] (state, newPrice) {
    state.price = newPrice
  },
  [types.SET_TELECOM_NETWORK_QUALITY] (state, newQuality) {
    state.networkQuality = newQuality
  },
  [types.SET_TELECOM_MAINTENANCE_QUALITY] (state, newQuality) {
    state.maintenanceQuality = newQuality
  },
  [types.CHANGE_TECH_INVESTMENT] (state, investmentChange) {
    state.techInvestment += investmentChange
  }

}
