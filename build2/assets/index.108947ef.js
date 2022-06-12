import { R as e, g as a } from './vendor.41cc9ac2.js'
import { g as t, G as r } from './index.ea17f1ce.js'
var n = '_header_wrap_1ntcj_1'
function c() {
  return e.createElement('div', { className: n }, 'Header')
}
function l() {
  var n
  const { path: c } = a(),
    l = null == (n = t(c)) ? void 0 : n.routes
  return e.createElement(
    'div',
    { className: 'container_wrap' },
    e.createElement(r, { routes: l })
  )
}
function s() {
  return e.createElement(
    'div',
    { className: 'default_layout_wrap' },
    e.createElement(c, null),
    e.createElement(l, null)
  )
}
export { s as default }
