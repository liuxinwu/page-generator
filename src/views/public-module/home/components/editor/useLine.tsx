import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers'

export function useLine() {
  function draw(id: string) {
    echarts.use([LineChart, GridComponent, TooltipComponent, CanvasRenderer])

    const chart = echarts.init(document.querySelector(`#${id}`)! as HTMLElement)
    chart.setOption({
      color: ['#f00'],
      tooltip: {
        formatter: '{b}: {c}'
      },
      xAxis: {
        type: 'category',
        nameLocation: 'middle',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, -934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    })
  }

  return {
    draw
  }
}