import { R as e } from './vendor.41cc9ac2.js'
import { S as c } from './index.95f8ff33.js'
import o from './index.43671cfe.js'
import { Drag as m } from './index.2e823efb.js'
import './dom.a861e6c5.js'
import './index.ea17f1ce.js'
const t = [
  'https://dev-cdn-common.codemao.cn/dev/444/16242619123419bb336a9fc435f5e3285290cc785ca921621233759172.mp4',
  'https://dev-cdn-common.codemao.cn/dev/444/16242619123419bb336a9fc435f5e3285290cc785ca921621233759172.mp4',
  'https://dev-cdn-common.codemao.cn/dev/444/16242619123419bb336a9fc435f5e3285290cc785ca921621233759172.mp4',
]
function a() {
  return e.createElement(
    'ul',
    { className: c.video_list },
    t.map((t, a) =>
      e.createElement(
        'li',
        { className: c.video_item, key: a },
        e.createElement(
          m,
          { componentName: 'video', options: { src: t } },
          e.createElement(o, { src: t })
        )
      )
    )
  )
}
export { a as default }
