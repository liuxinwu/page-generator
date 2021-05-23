import { useHistory } from 'react-router'

export default function Home() {
  const { push } = useHistory()

  return (
    <div>
      <img src="https://cdnoss.zhizuoh5.com/syspic/img/azz/5ec72c0de927d.jpg?x-oss-process=image/auto-orient,1/quality,q_89/format,jpg" alt="" onClick={() => {
        push('/editor')
      }}/>
    </div>
  )
}