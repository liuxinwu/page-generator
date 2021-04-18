import * as echarts from 'echarts/core'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers'
import { chartOptions } from 'config/global'

export function useDynamicChart() {
  async function draw(id: string, type: string) {
    const {chartType, option} = await dynamicImportChart(type)
    echarts.use([chartType, GridComponent, TooltipComponent, CanvasRenderer, LegendComponent])

    const chart = echarts.init(document.querySelector(`#${id}`)! as HTMLElement)
    chart.setOption(option)
  }

  const dynamicImportChart = (type: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      switch(type) {
        case 'Pic':
          import('echarts/charts').then(_ => {
            resolve({
              chartType: _.PieChart,
              option: chartOptions.pic
            })
          })
          break
        case 'Line':
          import('echarts/charts').then(_ => {
            resolve({
              chartType: _.LineChart,
              option: chartOptions.line
            })
          })
          break
        default:
          console.error('没有找到对应的 echarts 组件')
      }
    })
    
  }

  return {
    draw
  }
}