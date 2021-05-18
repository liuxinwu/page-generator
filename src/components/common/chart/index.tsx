import React, { useRef } from 'react'
import classnames from 'classnames'
import Style from './index.module.css'
import * as echarts from 'echarts/core'

import { DynamicChart } from './components/dynamicChart'

let id = 0

export const ChartWarp = function({
  type,
  children,
  option,
  ...props
}: {
  type: string
  children?: React.FC
  option: echarts.EChartsCoreOption
}) {
  const idStr = useRef<string>(`id${(id++)}`)

  return <div id={idStr.current} className={classnames(Style['chart-wrap'])} {...props}>
    <DynamicChart type={type} id={idStr.current} option={option}/>
    { children }
  </div>
}


export default React.memo(ChartWarp)