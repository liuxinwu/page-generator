import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export default function Base() {
  return <>
    {
      /* - 块
      - 标题
      - 段落
      - 栅格
      - 按钮
      - 图片 */
    }
    <li className={classnames(Style['second-menu-item'])}>
      <h3>块</h3>
      <div className={classnames(Style['hl-block'])}></div>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>标题</h3>
      <div></div>
    </li>
  </>
}