import Vue from 'vue'
import { EventBus } from './bus.js'
import lodash from 'lodash'
import localforage from 'localforage'
import auth from '@plugins/auth'
import api from '@api'
import VNoty from './noty.js'

Vue.prototype.$bus = EventBus
Vue.prototype._ = lodash
Vue.prototype.$storage = localforage
Vue.prototype.$auth = auth
Vue.prototype.$api = api
Vue.prototype.$noty = VNoty
