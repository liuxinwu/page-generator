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
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }]
  })

  function handleDragStart(e: React.DragEvent) {
    const dt = e.dataTransfer
    dt!.setData('text/html', (e.target as HTMLElement).outerHTML)
  }

  return <>
    <li className={classnames(Style['second-menu-item'])}>
      <h3>块</h3>

      <div draggable="true" onDragStart={handleDragStart}>
        <ChartWarp Chart={Line} option={option}></ChartWarp>
      </div>
    </li>

    <li className={classnames(Style['second-menu-item'])}>
      <h3>标题</h3>
      <div></div>
    </li>
  </>
}