const alias = require('./alias.config').resolve.alias

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
