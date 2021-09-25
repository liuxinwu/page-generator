import { useRef } from "react"
import classnames from "classnames"
import Style from "./index.module.css"
import * as echarts from "echarts/core"
import { DynamicChart } from "./components/dynamicChart"
import { Drag } from "components/common/drag"

let id = 0

export const ChartWarp = function ({
  type,
  children,
  status = "menu",
  option,
}: {
  type: string
  children?: React.FC
  status?: string
  option: echarts.EChartsCoreOption
}) {
  const idStr = useRef<string>(`id${id++}`)

  return (
    <Drag
      componentName="chart"
      status={status}
      options={{
        type,
        option,
      }}
    >
      <div id={idStr.current} className={classnames(Style["chart-wrap"])}>
        <DynamicChart type={type} id={idStr.current} option={option} />
        {children}
      </div>
    </Drag>
  )
}

export default React.memo(ChartWarp)
