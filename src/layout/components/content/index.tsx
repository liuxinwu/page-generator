import React from 'react'
import Aside from 'layout/components/aside'
import Main from 'layout/components/main'
import Style from './index.module.css'

export default function Content() {
  return <div className={Style['content-wrap']}>
    <Aside />
    <Main />
  </div>
}