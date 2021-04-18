import React from 'react'
import classnames from 'classnames'
import Style from './index.module.css'
import ChartWarp from 'components/common/chart'
import { chartOptions } from 'config/global'

export default function Base() {

  function handleDragStart(e: React.DragEvent) {
    const dt = e.dataTransfer
    dt!.setData('text/html', (e.target as HTMLElement).outerHTML)
  }

  return <>
    <li className={classnames(Style['second-menu-item'])}>
      <h3>折线图</h3>

      <div draggable="true" onDragStart={handleDragStart} className={classnames(Style['el-move'])} data-type="Line">
        <ChartWarp type='Line' option={chartOptions.line}></ChartWarp>
      </div>
    </li>
    <li className={classnames(Style['second-menu-item'])}>
      <h3>饼图</h3>
      
      <div draggable="true" onDragStart={handleDragStart} className={classnames(Style['el-move'])} data-type="Pic">
        <ChartWarp type='Pic' option={chartOptions.pic}></ChartWarp>
      </div>
    </li>
  </>
}