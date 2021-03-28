import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  GridComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers'

export function Line({
  id,
  option
}: {
  id: number
  option: echarts.EChartsCoreOption
}) {
  let chart = useRef<echarts.EChartsType | null>(null)

  useEffect(() => {
    let el
    const timeId = setTimeout(() => {
      echarts.use([LineChart, GridComponent, CanvasRenderer])
      el = document.querySelector(`#${id}`)! as HTMLElement
      chart.current = echarts.init(el)
    }, 300)

    return () => {
      clearTimeout(timeId)
      el = null
    }
  }, [id])

  useEffect(() => {
    const timeId = setTimeout(() => {
      chart.current && chart.current.setOption(option)
    }, 300)

    return () => {
      clearTimeout(timeId)
    }
  }, [option])
  
  return (
    <></>
  )
}
