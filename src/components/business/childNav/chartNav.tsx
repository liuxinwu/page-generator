import Chart from 'components/common/chart'
import { Drag } from 'components/common/drag'
import { chartOptions } from 'config/chartOptions'
import Style from './index.module.scss'

const chartConfig = [
  {
    type: 'line',
    text: '折线图',
  },
  {
    type: 'pie',
    text: '饼图',
  },
]

export default function ChartNav() {
  return (
    <>
      {chartConfig.map((chart) => (
        <div key={chart.type}>
          <h2 className={Style.piece_of_title}>{chart.text}</h2>
          <div className={Style.chart_wrap}>
          <Drag
            componentName="chart"
            options={{
              type: chart.type,
              option: chartOptions[chart.type],
            }}
          >
            <Chart type={chart.type} option={chartOptions[chart.type]} />
            </Drag>
          </div>
        </div>
      ))}
    </>
  )
}
