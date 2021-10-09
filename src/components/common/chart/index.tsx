import { useRef } from 'react'
import classnames from 'classnames'
import Style from './index.module.css'
import * as echarts from 'echarts/core'
import { DynamicChart } from './components/dynamicChart'

let id = 0

export const ChartWarp = function ({
  type,
  children,
  status = 'menu',
  option,
  ...options
}: {
  type: string
  children?: React.FC
  status?: string
  option: echarts.EChartsCoreOption
}) {
  const idStr = useRef<string>(`id${id++}`)

  return (
      <div id={idStr.current} {...options} className={classnames(Style['chart-wrap'], options.className)} >
        <DynamicChart type={type} id={idStr.current} option={option} />
        {children}
      </div>
  )
}

export default React.memo(ChartWarp)
