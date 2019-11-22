import vuex from './vuex'
import api from '@/services/api'
import router from '@/router'
import localforage from 'localforage'
import { isEmpty, trim, replace } from 'lodash'
import utils from '@utils/client'
import { setToken as setAjaxToken } from '@/plugins/http'
import Toast from '@plugins/noty'

export function loginCheck (payload) {
  if ((!payload.phone && !payload.email && !payload.account) || (!payload.password && !payload.code)) {
    return false
  }

  if (payload.email && !utils.isEmail(payload.email)) {
    return false
  }

  if (payload.phone && !utils.isPhone(payload.phone)) {
    return false
  }

  let params = {}

  if (payload.account) {
    if (utils.isEmail(payload.account)) {
      params.email = payload.account
    } else if (utils.isPhone(payload.account)) {
      params.phone = payload.account
    } else {
      return false
    }
  }

  if (payload.password && utils.isPassword(payload.password)) {
    params.password = payload.password
  } else if (payload.code && utils.isCode(payload.code)) {
    params.code = payload.code
  } else {
    return false
  }
  return params
}

export default {
  get token () {
    return isEmpty(vuex.state.auth.token) ? false : vuex.state.auth.token
  },
  get loggedIn () {
    return !!this.token
  },
  get user () {
    return vuex.state.auth.user
  },
  async login (payload) {
    const params = loginCheck(payload)
    if (!params) return false

    let res = await api.auth.store(params)
    console.log(res)
    if (res) {
      this.setToken(res.token)
      // Toast.success('Success!')
      return res
    }
  },
  async logout () {
    let res = await api.auth.destroy()
    if (res) {
      await this.removeToken()
      return res
      // Toast.success('Logout Success!')
      // !TODO might have bug with router refresh
      router.go(-1)
    }
  },
  async setUser (res) {
    if (!res) {
      res = await api.me.index()
    }
    vuex.dispatch('setUser', res)
  },
  async hasScope (scope = 'is_admin') {
    if (isEmpty(this.user)) {
      await this.setUser()
    }
    return this.user[scope]
  },
  async getToken () {
    if (this.token) {
      return this.token
    } else {
      let token = await localforage.getItem('token')
      if (token) {
        await this.setToken(token)
        return token
      } else {
        return false
      }
    }
  },
  async setToken (token = false) {
    if (!token) {
      return this.removeToken()
    }
    if (token.indexOf('Bearer' === 0)) {
      token = trim(replace(token, 'Bearer', ''))
    }
    if (token !== this.token || isEmpty(this.user)) {
      await localforage.setItem('token', token)
      vuex.dispatch('setToken', token)
      setAjaxToken(token)
      await this.setUser()
    }
  },
  async removeToken () {
    const result = await localforage.removeItem('token')
    if (result) {
      // !NOTE  ajax token not delete
      vuex.dispatch('setToken', null)
      vuex.dispatch('setUser', {})
      setAjaxToken(false)
      router.go(-1)
    }
  }
}
