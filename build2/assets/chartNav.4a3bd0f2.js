import { R as e } from './vendor.41cc9ac2.js'
import { C as t } from './index.7aa615cc.js'
import { Drag as a } from './index.2e823efb.js'
import { S as i } from './index.95f8ff33.js'
import './dom.a861e6c5.js'
import './index.ea17f1ce.js'
const r = {
    line: {
      tooltip: { trigger: 'item' },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: { type: 'value' },
      grid: { left: '15%' },
      series: [
        {
          data: [820, 932, 901, -934, 1290, 1330, 1320],
          type: 'line',
          smooth: !0,
        },
      ],
    },
    pie: {
      title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center',
      },
      tooltip: { trigger: 'item' },
      legend: { orient: 'vertical', left: 'left' },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          roseType: 'angle',
          right: -100,
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' },
            { value: 300, name: '视频广告' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    },
  },
  o = [
    { type: 'line', text: '折线图' },
    { type: 'pie', text: '饼图' },
  ]
function n() {
  return e.createElement(
    e.Fragment,
    null,
    o.map((o) =>
      e.createElement(
        'div',
        { key: o.type },
        e.createElement('h2', { className: i.piece_of_title }, o.text),
        e.createElement(
          'div',
          { className: i.chart_wrap },
          e.createElement(
            a,
            {
              componentName: 'chart',
              options: { type: o.type, option: r[o.type] },
            },
            e.createElement(t, { type: o.type, option: r[o.type] })
          )
        )
      )
    )
  )
}
export { n as default }
