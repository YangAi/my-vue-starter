import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import beforeEach from '@/router/beforeEach'
import afterEach from '@/router/afterEach'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
