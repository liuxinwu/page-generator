import Chart from "components/common/chart"
import { chartOptions } from "config/chartOptions"
import Style from "./index.module.scss"

const chartConfig = [
  {
    type: "line",
    text: "折线图",
  },
  {
    type: "pie",
    text: "饼图",
  },
]

export default function ChartNav() {
  return (
    <>
      {chartConfig.map((chart) => (
        <div key={chart.type}>
          <h2 className={Style.piece_of_title}>{chart.text}</h2>
          <div className={Style.chart_wrap}>
            <Chart type={chart.type} option={chartOptions[chart.type]} />
          </div>
        </div>
      ))}
    </>
  )
}
