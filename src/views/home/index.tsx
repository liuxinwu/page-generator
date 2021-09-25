import { useHistory } from 'react-router'
import loginModule from 'api/login.api'
import BNANER_IMG from 'images/banner.jpg'

export default function Home() {
  const { push } = useHistory()
  // 测试 api 服务
  async function handleTestApi() {
    const res = await loginModule.loginIn({}, { isNeedCache: true })
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
      <img
        width="100%"
        src={BNANER_IMG}
        alt=""
        onClick={() => {
          push('/editor')
        }}
      />
      <button onClick={handleTestApi}>测试 api 服务</button>
    </div>
  )
}
