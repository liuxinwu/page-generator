import { MockMethod } from 'vite-plugin-mock'
console.log('jjjj')
export default [
  // {
  //   url: '/loginIn',
  //   method: 'get',
  //   response: {
  //     code: 0,
  //     data: {
  //       name: 'vben',
  //     },
  //   },
  // },
  // {
  //   url: '/post',
  //   method: 'post',
  //   timeout: 2000,
  //   response: {
  //     code: 0,
  //     data: {
  //       name: 'vben',
  //     },
  //   },
  // },
  // {
  //   url: '/text',
  //   method: 'post',
  //   rawResponse: async (req, res) => {
  //     let reqbody = ''
  //     await new Promise((resolve) => {
  //       req.on('data', (chunk) => {
  //         reqbody += chunk
  //       })
  //       req.on('end', () => resolve(undefined))
  //     })
  //     res.setHeader('Content-Type', 'text/plain')
  //     res.statusCode = 200
  //     res.end(`hello, ${reqbody}`)
  //   },
  // },
] as MockMethod[]
