var r = Object.defineProperty,
  e = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  o = (e, t, a) =>
    t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a)
import { R as l } from './vendor.41cc9ac2.js'
function n(r) {
  var n = r,
    { src: c } = n,
    f = ((r, o) => {
      var l = {}
      for (var n in r) t.call(r, n) && o.indexOf(n) < 0 && (l[n] = r[n])
      if (null != r && e)
        for (var n of e(r)) o.indexOf(n) < 0 && a.call(r, n) && (l[n] = r[n])
      return l
    })(n, ['src'])
  return l.createElement(
    'img',
    ((r, l) => {
      for (var n in l || (l = {})) t.call(l, n) && o(r, n, l[n])
      if (e) for (var n of e(l)) a.call(l, n) && o(r, n, l[n])
      return r
    })({ src: c, alt: '' }, f)
  )
}
export { n as default }
