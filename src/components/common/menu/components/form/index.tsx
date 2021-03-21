import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export default function Base() {
  return <>
    <li className={classnames(Style['second-menu-item'])}>
      <h3>输入框</h3>
      <input type="text"/>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>下拉选择</h3>
      <div></div>
    </li>
  </>
}