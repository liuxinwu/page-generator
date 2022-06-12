import { R as c } from './vendor.41cc9ac2.js'
import { S as e } from './index.95f8ff33.js'
import t from './index.a40a854d.js'
import { Drag as m } from './index.2e823efb.js'
import './dom.a861e6c5.js'
import './index.ea17f1ce.js'
const a = [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626847159&t=5b9f1a5e2749120cf66aa4121036075f',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626847159&t=5b9f1a5e2749120cf66aa4121036075f',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626847159&t=5b9f1a5e2749120cf66aa4121036075f',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F2c.zol-img.com.cn%2Fproduct%2F124_500x2000%2F748%2FceZOdKgDAFsq2.jpg&refer=http%3A%2F%2F2c.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626847159&t=5b9f1a5e2749120cf66aa4121036075f',
]
function p() {
  return c.createElement(
    'ul',
    { className: e.pic_list },
    a.map((a, p) =>
      c.createElement(
        'li',
        { className: e.pic_item, key: p },
        c.createElement(
          m,
          { componentName: 'pic', options: { src: a } },
          c.createElement(t, { src: a })
        )
      )
    )
  )
}
export { p as default }
