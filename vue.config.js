const alias = require('./alias.config').resolve.alias
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  'configureWebpack': {
    'resolve': {
      'alias': alias
    },
    plugins: [
      new BundleAnalyzerPlugin()
    ]
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
