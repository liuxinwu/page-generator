import { useCallback, useEffect, useRef } from "react"
import * as echarts from "echarts/core"
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
} from "echarts/components"
import { CanvasRenderer } from "echarts/renderers"
import { connect } from "react-redux"
import { StateType, EquipmentType } from "store/type"

const mapStateToProps = (state: StateType) => {
  return {
    equipment: state.equipment,
  }
}

export const DynamicChart = connect(mapStateToProps)(function ({
  type,
  id,
  option,
  equipment,
  ...props
}: {
  type: string
  id: string
  equipment: EquipmentType
  option: echarts.EChartsCoreOption
}) {
  const chart = useRef<echarts.EChartsType | null>(null)

  const dynamicImportChart = useCallback((): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        // import 动态参数的问题
        // https://www.zhihu.com/question/263977423
        import("echarts/charts").then((_) => {
          const first = type.charAt(0).toLocaleUpperCase()
          const key = `${first}${type.slice(1)}Chart`
          resolve(_[key])
        })
      } catch (error) {
        console.error("没有找到对应的 echarts 组件")
      }
    })
  }, [type])

  useEffect(() => {
    let el
    // 延迟 300 ms 是因为菜单栏有动画时间
    const timeId = setTimeout(async () => {
      if (!chart.current) {
        const chartType = await dynamicImportChart()
        echarts.use([
          chartType,
          GridComponent,
          TooltipComponent,
          LegendComponent,
          TitleComponent,
          CanvasRenderer,
        ])
        el = document.querySelector(`#${id}`)! as HTMLElement
        chart.current = echarts.init(el)
      }

      chart.current && chart.current.setOption(option)
    }, 0)

    return () => {
      clearTimeout(timeId)
      el = null
    }
  }, [id, dynamicImportChart, option])

  useEffect(() => {
    const { h } = equipment.size
    chart.current &&
      chart.current.resize({
        width: "auto",
        height: h / 3,
      })
  }, [equipment])
  return <></>
})
