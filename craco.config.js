const {mockJs} = require('./src/mock')
const {qiniuServe} = require('./serve/qiniu')

module.exports = {
  devServer: {
    before(app) {
      mockJs(app)
      qiniuServe(app)
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/api': '' },
      },
    }
  },
  webpack: {
    configure: (webpackConfig, {
      env, paths
    }) => {
      webpackConfig.devtool = 'inline-source-map'
      env === 'production' && (webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: "http://cdn-page.daxjgxx.com/",
      })
      return webpackConfig
    }
  }
}