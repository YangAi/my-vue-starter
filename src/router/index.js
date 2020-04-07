import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import beforeEach from '@preset/router/beforeEach'
import afterEach from '@preset/router/afterEach'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (!to.meta.doNotGoTop) {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
