import Auth from '@pages/auth/routes'
import Home from '@pages/home/routes'

const routes = [
  {
    path: '/',
    component: () => import('@layouts/DefaultLayout'),
    children: [
      ...Home
    ]
  },
  ...Auth
]

export default routes
