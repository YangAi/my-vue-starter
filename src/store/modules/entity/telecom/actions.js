import * as types from '../../mutation-types'

export default {
  async recruitEmployee ({ commit, state, dispatch }) {
    if (await dispatch(
      'company/spendCash',
      state.parameters.unit.employee * state.parameters.cost.employee,
      { root: true }
    )) {
      commit(types.CHANGE_TELECOM_EMPLOYEE, state.parameters.unit.employee)
    }
  },
  async cutDownEmployee ({ commit, state, dispatch }) {
    const employeeCount = state.employee < state.parameters.unit.employee ? state.employee : state.parameters.unit.employee
    if (await dispatch(
      'company/spendCash',
      employeeCount * state.parameters.cost.employee,
      { root: true }
    )) {
      commit(types.CHANGE_TELECOM_EMPLOYEE, -employeeCount)
    }
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
