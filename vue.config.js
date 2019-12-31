const alias = require('./alias.config')

module.exports = {
  'configureWebpack': {
    'resolve': {
      'alias': alias
    }
  },
  'css': {
    'sourceMap': true,
    'loaderOptions': {
      'sass': {},
      'scss': {}
    }
  },
  'transpileDependencies': [
    'vuetify'
  ]
}
