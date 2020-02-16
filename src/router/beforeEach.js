import Vue from 'vue'
import NProgress from 'nprogress'
// import { isEmpty } from 'lodash'
import Auth from '@/plugins/auth'
import i18n from '@/locales'

const beforeEach = async (to, from, next) => {
  NProgress.start()

  if (to.matched.some(m => m.meta.auth === false)) return next()

  await Auth.getToken()

  // access control for dashboard
  if (process.env.VUE_APP_SOURCE === 'dashboard') {
    if (to.meta.auth === false) return next()

    await Auth.getToken()

    if (Auth.token && Auth.user) {
      const hasRole = await Auth.hasRole(['super admin', 'yo'])
      if (!hasRole) {
        Vue.$toast.error(i18n.t('messages.router.noPermission'))
        await Auth.logout()
        return next({ name: 'Auth.Login', query: { message: 1 } }) // redirect to login
      }
      return next()
    } else {
      Vue.$toast.error(i18n.t('messages.router.loginFirst'))
    }

    return next({ name: 'Auth.Login', query: { message: 1 } }) // redirect to login
  } else {
    await Auth.getToken()
    if (!to.meta.auth) return next()
    if (Auth.token && Auth.user) {
      return next()
    } else {
      return next({ name: 'Auth.Login', query: { message: 1 } }) // redirect to login
    }
  }
}

export default beforeEach
