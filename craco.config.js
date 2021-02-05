const path = require('path')

module.exports = {
  devServer: {
    before(app) {
      console.log('app', app.get)
      app.get('/loginIn', (req, res) => {
        res.json({
          a: 1
        })
      })
    }
  }
}