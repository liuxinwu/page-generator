var e = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = (r, t, o) =>
    t in r
      ? e(r, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (r[t] = o),
  n = (e, n) => {
    for (var c in n || (n = {})) t.call(n, c) && a(e, c, n[c])
    if (r) for (var c of r(n)) o.call(n, c) && a(e, c, n[c])
    return e
  }
import { R as c } from './vendor.41cc9ac2.js'
import { b as s } from './dom.a861e6c5.js'
const m = ({
  componentName: e,
  status: r = 'menu',
  options: t = {},
  children: o,
}) => {
  function a(r) {
    r.dataTransfer.setData(
      'custom/drag',
      JSON.stringify({ componentName: e, options: t })
    )
  }
  return c.createElement(
    c.Fragment,
    null,
    c.Children.map(o, (e) => {
      let o = {}
      const { props: m } = e,
        l = s(m.className, 'cursor_move')
      return (
        'menu' === r && (o = { draggable: !0, className: l, onDragStart: a }),
        c.cloneElement(e, n(n({}, o), t))
      )
    })
  )
}
export { m as Drag }
