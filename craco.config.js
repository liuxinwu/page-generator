const {mockJs} = require('./src/mock')

module.exports = {
  devServer: {
    before(app) {
      mockJs(app)
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/api': '' },
      },
    }
  }
}