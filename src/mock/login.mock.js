const { mock, Random } = require('mockjs')

exports.login = [
  {
    method: 'get',
    url: '/loginIn',
    cb: (req, res) => {
      console.log('接收到请求...')
      setTimeout(() => {
        res.json(mock({
          code: 0,
          'data|1-10': [
            {
              'id|+1': 1,
              title: Random.cparagraph()
            }
          ],
          msg: 'success'
        }))
      }, 1000)
    }
  }
]