import Vue from 'vue'
import Auth from '@preset/plugins/auth'
import i18n from '@preset/locales'

async function authCheck (next) {
  await Auth.getToken()
  if (Auth.token && Auth.user) {
    Vue.$toast.info(i18n.t('messages.auth.alreadyLoggedIn'))
    return next({ name: 'Me.Index' }) // redirect to login
  } else {
    next()
  }
}

export default [
  {
    path: '/auth',
    component: () => import('./layouts/AuthLayout'),
    beforeEnter: async (to, from, next) => {
      await authCheck(next)
    },
    children: [
      {
        path: 'login',
        name: 'Auth.Login',
        component: () => import('./LoginDashboard.vue'),
        meta: {
          auth: false,
          title: 'Login'
        }
      }
    ]
  }
]
