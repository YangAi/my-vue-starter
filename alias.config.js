const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      '@src': resolve('src'),
      '@plugins': resolve('src/plugins'),
      '@router': resolve('src/router'),
      '@pages': resolve('src/pages'),
      '@layouts': resolve('src/layouts'),
      '@components': resolve('src/components'),
      '@assets': resolve('src/assets'),
      '@utils': resolve('src/utils'),
      '@vuex': resolve('src/vuex'),
      '@api': resolve('src/services/api'),
      '@style': resolve('src/assets/style')
    }
  }
}
