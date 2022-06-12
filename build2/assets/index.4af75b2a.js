var e = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  a = (t, o, n) =>
    o in t
      ? e(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[o] = n)
import { r as l, R as r, f as i } from './vendor.41cc9ac2.js'
var c = {
  'dialog-wrap': '_dialog-wrap_cpsp6_1',
  'dialog-wrap-animation': '_dialog-wrap-animation_cpsp6_1',
  'dialog-content': '_dialog-content_cpsp6_26',
  'dialog-header': '_dialog-header_cpsp6_35',
  'dialog-main': '_dialog-main_cpsp6_43',
  'dialog-footer': '_dialog-footer_cpsp6_47',
}
function d({
  visible: e,
  closeDialog: t,
  children: o,
  title: n,
  cancleText: a,
  okText: i,
  type: d = 'info',
  content: p,
}) {
  return (
    l.exports.useEffect(() => {}),
    e
      ? r.createElement(
          'div',
          {
            className: [c['dialog-wrap'], c['dialog-wrap-show']].join(' '),
            onClick: function () {
              t()
            },
          },
          r.createElement(
            'div',
            {
              className: c['dialog-content'],
              onClick: (e) => e.stopPropagation(),
            },
            r.createElement(
              'div',
              { className: c['dialog-header'] },
              d ? r.createElement('strong', null, d, ' ') : null,
              n || '提示信息'
            ),
            r.createElement('div', { className: c['dialog-main'] }, o, ' ', p),
            r.createElement(
              'div',
              { className: c['dialog-footer'] },
              a ? r.createElement('button', null, 'cancleText') : '',
              i ? r.createElement('button', null, 'okText') : ''
            )
          )
        )
      : null
  )
}
function p(e) {
  const l = document.createElement('div')
  function c() {
    i.unmountComponentAtNode(l),
      l.parentElement && l.parentElement.removeChild(l)
  }
  var p
  document.body.appendChild(l),
    (p = e),
    i.render(
      r.createElement(
        d,
        ((e, l) => {
          for (var r in l || (l = {})) o.call(l, r) && a(e, r, l[r])
          if (t) for (var r of t(l)) n.call(l, r) && a(e, r, l[r])
          return e
        })({ visible: !0, closeDialog: c }, p)
      ),
      l
    )
}
function s() {
  p({ okText: '关闭' })
}
function m(e) {
  p(e)
}
var u = l.exports.memo(d, function (e, t) {
  return e.visible === t.visible && e.content === t.content
})
export { u as default, s as info, m as success }
