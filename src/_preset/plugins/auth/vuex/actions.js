import { isEmpty } from 'lodash'

export const setPermissions = ({ commit }, permissions) => {
  commit('Auth//SET_PERMISSIONS', permissions)

  Promise.resolve(permissions)
}

export const setUser = ({ commit }, user) => {
  // Commit the mutations
  commit('Auth//SET_USER', user)

  Promise.resolve(user) // keep promise chain
}

export const setToken = ({ commit }, payload) => {
  // prevent if payload is a object
  const token = (isEmpty(payload)) ? null : payload.token || payload

  // Commit the mutations
  commit('Auth//SET_TOKEN', token)

  return Promise.resolve(token) // keep promise chain
}
