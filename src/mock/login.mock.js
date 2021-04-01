const { mock, Random } = require('mockjs')

exports.login = [
  {
    method: 'get',
    url: '/loginIn',
    cb: (req, res) => {
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
    }
  }
]