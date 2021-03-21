import React from 'react'
import './index.module.css'
import Menu from 'components/common/menu'

export default function Aside() {
  const menu = [
    {
      iconClass: 'icon-biaoge',
      title: '基本布局'
    },
    {
      iconClass: 'icon-biaodan',
      title: '表单元素'
    },
    {
      iconClass: 'icon-shishiyinshipinyun',
      title: '音视频'
    },
    {
      iconClass: 'icon-buju',
      title: '图表'
    }
  ]

  return <aside id="aside" onClick={e => e.stopPropagation()}>
    <Menu source={menu} />

    
  </aside>
}