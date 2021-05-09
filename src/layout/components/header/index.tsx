import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import Style from './index.module.css'
import { connect } from 'react-redux'
import { StateType } from 'store/type'

const mapState = ((state: StateType) => ({
  useComponents: state.useComponents
}))

export default connect(mapState)(function Header({
  useComponents
}: any) {
  const handleSave = useCallback(() => {
    console.log(useComponents, 'props')
    localStorage.setItem('useComponents', JSON.stringify(Array.from(useComponents)))
  }, [useComponents])

  return <header>
    <ul className={Style['nav']}>
      <Link to="/">home</Link> 
      <Link to="/news/nba">nba</Link> 
      <Link to="/news/cba">cba</Link> 
    </ul>

    <div className={Style['button-group']}>
      <button className={Style.save} onClick={handleSave}>保存</button>
      <button className={Style.download}>下载</button>
    </div>
  </header>
})