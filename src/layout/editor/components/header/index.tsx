import { useCallback } from 'react'
import Style from './index.module.css'
import { connect } from 'react-redux'
import { StateType } from 'store/type'
import Storage from 'utils/store'
import { Avatar, Button } from 'antd'

const STORAGE = new Storage()

const mapState = ((state: StateType) => ({
  useComponents: state.useComponents
}))

export default connect(mapState)(function Header({
  useComponents
}: any) {

  const handleSave = useCallback(() => {
    STORAGE.setItem('useComponents', Array.from(useComponents))
  }, [useComponents])

  return <header>
    <Avatar style={{ backgroundColor: '#f56a00' }} size="large">page-generator</Avatar>

    <div className={Style['button-group']}>
      <Button type="primary" danger onClick={handleSave}>保存</Button>
      <Button type="primary" >下载</Button>
    </div>

  </header>
})