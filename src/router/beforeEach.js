import Vue from 'vue'
import NProgress from 'nprogress'
// import { isEmpty } from 'lodash'
import Auth from '@/plugins/auth'

const beforeEach = async (to, from, next) => {
  NProgress.start()

  // access control for dashboard
  if (process.env.VUE_APP_SOURCE === 'dashboard') {
    if (to.meta.auth === false) return next()

    await Auth.getToken()

    if (Auth.token && Auth.user) {
      console.log(Auth.user)
      const hasRole = await Auth.hasRole(['super admin', 'yo'])
      console.log('has roles', hasRole)
      if (!hasRole) {
        Vue.$toast.error('The account has no permission.')
        await Auth.logout()
        return next({ name: 'Auth.Login' }) // redirect to login
      }
      return next()
    } else {
      Vue.$toast.error('Please login first.')
    }

    return next({ name: 'Auth.Login' }) // redirect to login
  }

  return next()
}

export default beforeEach
