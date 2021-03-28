import React, { useRef } from 'react'
import classnames from 'classnames'
import Style from './index.module.css'

export { Line } from './components/line'

let id = 0

function ChartWarp({
  Chart,
  option
}: {
  Chart: any
  option: any
}) {
  const idStr = useRef(`id${(id++)}`)

  return <div id={idStr.current} className={classnames(Style['chart-wrap'])}>
    <Chart id={idStr.current} option={option}></Chart>
  </div>
}

export default React.memo(ChartWarp)