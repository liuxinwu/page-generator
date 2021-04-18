import React, { useCallback, useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import {
  GridComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers'

export function DynamicChart({
  type,
  id,
  option
}: {
  type: string
  id: string
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
        echarts.use([chartType, GridComponent, CanvasRenderer])
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
  
  return (
    <></>
  )
}
