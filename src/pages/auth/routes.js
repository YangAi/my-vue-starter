export default [
  {
    path: '/auth/login',
    component: () => import('./Login.vue'),
    name: 'Auth.Login',
    meta: {
      title: 'Login',
      auth: false
    }
  }
]
