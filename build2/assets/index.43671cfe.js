var r = Object.defineProperty,
  e = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = (e, t, o) =>
    t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o)
import { R as n } from './vendor.41cc9ac2.js'
function c(r) {
  var c = r,
    { status: l = 'menu', src: f } = c,
    s = ((r, a) => {
      var n = {}
      for (var c in r) t.call(r, c) && a.indexOf(c) < 0 && (n[c] = r[c])
      if (null != r && e)
        for (var c of e(r)) a.indexOf(c) < 0 && o.call(r, c) && (n[c] = r[c])
      return n
    })(c, ['status', 'src'])
  const i = 'editor' === l
  return n.createElement(
    'video',
    ((r, n) => {
      for (var c in n || (n = {})) t.call(n, c) && a(r, c, n[c])
      if (e) for (var c of e(n)) o.call(n, c) && a(r, c, n[c])
      return r
    })({ src: f, controls: i }, s)
  )
}
export { c as default }
