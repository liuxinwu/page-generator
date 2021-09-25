const qiniu = require("qiniu")
const accessKey = "jFBcwwkYqxVrVSmNCUIr5z7Doh9w6jbaA5Sruqxb"
const secretKey = "7jIJkAshGcdCYb5u_fPVr8mILNlcuXNdo2ZZ-67A"
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const scope = "page-generate"

exports.qiniuServe = function (app) {
  app.get("/qiniu-token", (req, res) => {
    var options = {
      scope,
    }
    var putPolicy = new qiniu.rs.PutPolicy(options)
    var uploadToken = putPolicy.uploadToken(mac)

    res.json(uploadToken)
  })
}
