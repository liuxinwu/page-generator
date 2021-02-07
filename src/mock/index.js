const { login } = require('./login.mock')
const mockConfig = [...login]

module.exports.mockJs = function(app) {
  mockConfig.forEach((mock) => {
    app[mock.method](mock.url, mock.cb)
  })
}
