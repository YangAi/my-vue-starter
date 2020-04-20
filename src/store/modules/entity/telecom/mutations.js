import * as types from '../../mutation-types'

export default {
  [types.CHANGE_TELECOM_EMPLOYEE] (state, employeeChange, rootState) {
    // Here, I was to get the "employee" value in the "telecom" module.
    // Vuex give two state arguments in the mutation function, "state" and "rootState". 
    // "state" refers to the state inside this module, and "rootState" refers to the entire vuex state.
    
    // These are two correct code.
    state.employee += employeeChange
    rootState['telecom/employee'] += employeeChange
    
    // This is the Vuex auto-complete option.
    // I think Webstorm might have some trouble recongize whether the "state" argument is the module state, or rootState.  
    state['telecom/employee'] += employeeChange
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
