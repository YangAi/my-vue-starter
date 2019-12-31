export default [
  {
    path: '/auth/login',
    component: () => import('./Login.vue'),
    name: 'Auth.Login',
    meta: {
      auth: false,
      title: 'Login'
    }
  }
]
