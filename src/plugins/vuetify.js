import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// Translation provided by Vuetify (javascript)
// import zhHans from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  lang: {
    // locales: { zhHans },
    // current: 'zhHans'
  }
})
