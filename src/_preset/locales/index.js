import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en'
import zh from './zh'

Vue.use(VueI18n)

const messages = {
  en,
  zh
}

export default new VueI18n({
  locale: process.env.VUE_APP_LANGUAGE,
  messages
})
