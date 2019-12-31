import Vue from 'vue'
import { EventBus } from './bus.js'
import lodash from 'lodash'
import localforage from 'localforage'
import auth from '@plugins/auth'
import api from '@api'
import config from '@/config'
import utils from '@/utils/client'

Vue.prototype.$bus = EventBus
Vue.prototype._ = lodash
Vue.prototype.$storage = localforage
Vue.prototype.$auth = auth
Vue.prototype.$api = api
// Vue.prototype.$toast = VNoty
Vue.prototype.$config = config
Vue.prototype.$utils = utils
