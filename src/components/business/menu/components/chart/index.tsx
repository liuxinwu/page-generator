
import classnames from 'classnames'
import Style from './index.module.css'
import { ChartWarp } from 'components/common/chart'
import { chartOptions } from 'config/chartOptions'
import { Drag } from 'components/common/drag'

export default function Chart() {

  return <>
    <li className={classnames(Style['second-menu-item'])}>
      <h3>折线图</h3>

      <Drag type="ChartWarp" query={{
        type: 'Line',
        option: chartOptions.line
      }}>
        <ChartWarp type='Line' option={chartOptions.line}></ChartWarp>
      </Drag>
    </li>
    <li className={classnames(Style['second-menu-item'])}>
      <h3>饼图</h3>
      
      <Drag type="ChartWarp" query={{
        type: 'Pic',
        option: chartOptions.pic
      }}>
        <ChartWarp type='Pic' option={chartOptions.pic}></ChartWarp>
      </Drag>
    </li>
  </>
}