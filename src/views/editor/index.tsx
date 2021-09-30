import Editor from './components/editor'
import Style from './index.module.css'
import QueryConfig from './components/query-config/'

export default function Home() {

  return (
    <div className={Style['home-wrap']}>

      <Editor />

      <QueryConfig />
    </div>
  )
}
