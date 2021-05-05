import React, { useCallback, useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers'
import { connect } from 'react-redux'
import { StateType, EquipmentType } from 'store/type'

const mapStateToProps = (state: StateType) => {
  return {
    equipment: state.equipment
  }
}

export const DynamicChart = connect(mapStateToProps)(function({
  type,
  id,
  option,
  equipment,
  ...props
}: {
  type: string
  id: string
  equipment: EquipmentType,
  option: echarts.EChartsCoreOption
}) {
  let chart = useRef<echarts.EChartsType | null>(null)

  const dynamicImportChart = useCallback((): Promise<any> => {
    return new Promise((resolve, reject) => {
      switch(type) {
        case 'Pic':
          import('echarts/charts').then(_ => {
            resolve(_.PieChart)
          })
          break
        case 'Line':
          import('echarts/charts').then(_ => {
            resolve(_.LineChart)
          })
          break
        default:
          console.error('没有找到对应的 echarts 组件')
      }
    })
    
  }, [type])

  useEffect(() => {
    let el
    // 延迟 300 ms 是因为菜单栏有动画时间
    const timeId = setTimeout(async () => {
      if (!chart.current) {
        const chartType = await dynamicImportChart()
        echarts.use([chartType, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer])
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
    const {h} = equipment.size
    chart.current && chart.current.resize({
      width: 'auto',
      height: h / 3
    })
  }, [equipment])
  return (
    <></>
  )
})

