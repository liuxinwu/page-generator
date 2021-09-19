const http = require('http')

// 测试代理
http.createServer((req, res) => {
  console.log(req.url)
  res.end(JSON.stringify({
    code: 0,
    data: 'success node serve',
    msg: 'success'
  }))
}).listen(5000, () => {
  console.log('listen on 5000')
})