import React from 'react'
import { Link } from 'react-router-dom'
import Style from './index.module.css'

export default function Header() {
  return <header>
    <ul className={Style['nav']}>
      <Link to="/">home</Link> 
      <Link to="/news/nba">nba</Link> 
      <Link to="/news/cba">cba</Link> 
    </ul>

    <div className={Style['button-group']}>
      <button>草稿</button>
      <button className={Style.save}>保存</button>
      <button className={Style.download}>下载</button>
    </div>
  </header>
}