export default {
  apiUri: process.env.VUE_APP_API_URL,
  authResource: process.env.VUE_APP_AUTH_RESOURCE,
  hasPermissions: process.env.VUE_APP_HAS_PERMISSIONS === 'true',
  source: process.env.VUE_APP_SOURCE,
  language: process.env.VUE_APP_LANGUAGE,
  appName: '本地宝',
  appUrl: process.env.VUE_APP_URL,
  imageUploadUrl: process.env.VUE_APP_API_URL + '/tools/upload-file',
  transition: {
    dialog: 'dialog-bottom-transition'
  },
  inputFormat: {
    date: 'YYYY-MM-DD',
    time: 'HH:mm'
  }
}
