import { R as e } from './vendor.41cc9ac2.js'
import { Drag as t } from './index.2e823efb.js'
import m, { textConfig as o } from './index.3766fe6d.js'
import './dom.a861e6c5.js'
function r() {
  return e.createElement(
    e.Fragment,
    null,
    Object.keys(o).map((o, r) =>
      e.createElement(
        t,
        { key: r, componentName: 'text', options: { type: r + 1 } },
        e.createElement(m, { type: r + 1 })
      )
    )
  )
}
export { r as default }
