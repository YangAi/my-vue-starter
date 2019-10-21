import NProgress from 'nprogress'
import { isEmpty } from 'lodash'
import Auth from '@/plugins/auth'

const beforeEach = async (to, from, next) => {
  NProgress.start()

  if (!to.meta.auth) return next()

  await Auth.getToken()

  if (Auth.token && Auth.user) {
    // const hasScope = await Auth.hasScope('is_admin')
    // if (!hasScope) {
    //   Toast.error('账号没有权限。')
    //   Auth.logout()
    // return next({ name: 'auth.login' }) // redirect to login
    // }
    next()
  }

  // Toast.error('Please logi fist')
  return next({ name: 'auth.login' }) // redirect to login
}

export default beforeEach
