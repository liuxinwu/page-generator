import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  GridComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers'

export function useLine() {
  function draw(id: string) {
    echarts.use([LineChart, GridComponent, CanvasRenderer])

    const chart = echarts.init(document.querySelector(`#${id}`)! as HTMLElement)
    chart.setOption({
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
  }

  return {
    draw
  }
}