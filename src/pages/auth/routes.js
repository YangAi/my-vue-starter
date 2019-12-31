export default [
  {
    path: '/auth/login',
    component: () => import('./LoginFront.vue'),
    name: 'Auth.Login',
    meta: {
      auth: false,
      title: 'Login'
    }
  }
]
