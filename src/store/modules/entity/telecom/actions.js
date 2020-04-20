import * as types from '../../mutation-types'

export default {
  recruitEmployee ({ commit, state }) {
    commit(types.CHANGE_TELECOM_EMPLOYEE, state.parameters.employeeUnit)
  },
  cutDownEmployee ({ commit, state }) {
    commit(types.CHANGE_TELECOM_EMPLOYEE, -state.parameters.employeeUnit)
  },
  setPrice ({ commit }, price) {
    commit(types.SET_TELECOM_PRICE, price)
  },
  setNetworkQuality ({ commit }, rate) {
    commit(types.SET_TELECOM_NETWORK_QUALITY, rate)
  },
  setMaintenanceQuality ({ commit }, rate) {
    commit(types.SET_TELECOM_MAINTENANCE_QUALITY, rate)
  },
  setInfrastructureRate ({ commit }, rate) {
    commit(types.SET_TELECOM_INFRASTRUCTURE, rate)
  },
  makeTechInvestment ({ commit, state }) {
    commit(types.CHANGE_TECH_INVESTMENT, state.parameters.investUnit)
  },
  nextDay () {}
}
