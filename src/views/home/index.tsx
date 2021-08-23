import { useHistory } from 'react-router'
import Api from 'api'

export default function Home() {
  const { push } = useHistory()
  
  // 测试 api 服务
  async function handleTestApi() {
    const res = await Api.loginModule.loginIn({}, {isNeedCache: true})
    console.log(res)

    // 验证 请求发送出去之后再 xhr.abort() 服务端还是能收到该请求的
    // 大概 3 ms 以内取消就不会发送给服务端
    // const xhr = new XMLHttpRequest()
    // xhr.open('get', 'api/loginIn', true)
    // xhr.send()
    // const startTime = Date.now()
    // while(Date.now() - startTime < 2) {
      
    // }
    // xhr.abort()
    // Promise.resolve().then(() => xhr.abort())

    // 这样就到不了服务端
    // const xhr = new XMLHttpRequest()
    // xhr.open('get', 'api/loginIn', true)
    // xhr.send()
    // xhr.abort()
  }

  return (
    <div>
      <img src="https://cdnoss.zhizuoh5.com/syspic/img/azz/5ec72c0de927d.jpg?x-oss-process=image/auto-orient,1/quality,q_89/format,jpg" alt="" onClick={() => {
        push('/editor')
      }}/>
      <button onClick={handleTestApi}>测试 api 服务</button>
    </div>
  )
}