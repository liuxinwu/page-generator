import React, { useState } from 'react'
import classnames from 'classnames'
import Style from './index.module.css'
import ChartWarp, { Line } from 'components/common/chart'

export default function Base() {
  const [option] = useState({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: '15%'
    },
    series: [{
      data: [820, 932, 901, -934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  })

  function handleDragStart(e: React.DragEvent) {
    const dt = e.dataTransfer
    dt!.setData('text/html', (e.target as HTMLElement).outerHTML)
  }

  return <>
    <li className={classnames(Style['second-menu-item'])}>
      <h3>折线图</h3>

      <div draggable="true" onDragStart={handleDragStart} className={classnames(Style['el-move'])}>
        <ChartWarp Chart={Line} option={option}></ChartWarp>
      </div>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>标题</h3>
      <div></div>
    </li>
  </>
}