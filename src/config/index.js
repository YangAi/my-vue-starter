import messages from './messages'

export default {
  apiUri: process.env.VUE_APP_API_URL,
  authResource: process.env.VUE_APP_AUTH_RESOURCE,
  source: process.env.VUE_APP_SOURCE,
  language: process.env.VUE_APP_LANGUAGE,
  appName: '本地宝_V1',
  messages: messages[process.env.VUE_APP_LANGUAGE]
}
