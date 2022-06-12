var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  c = (t, r, a) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[r] = a),
  m = (e, t) => {
    for (var r in t || (t = {})) l.call(t, r) && c(e, r, t[r])
    if (a) for (var r of a(t)) n.call(t, r) && c(e, r, t[r])
    return e
  }
import { r as o, R as s } from './vendor.41cc9ac2.js'
var i = '_form-wrap_195f4_1',
  f = '_form-item_195f4_5',
  p = '_form-item-label_195f4_12',
  u = '_form-item-value_195f4_19',
  v = '_form-item-input_195f4_30',
  _ = '_form-item-submit_195f4_40'
const b = (e) => {
  var c = e,
    { children: b } = c,
    d = ((e, t) => {
      var r = {}
      for (var c in e) l.call(e, c) && t.indexOf(c) < 0 && (r[c] = e[c])
      if (null != e && a)
        for (var c of a(e)) t.indexOf(c) < 0 && n.call(e, c) && (r[c] = e[c])
      return r
    })(c, ['children'])
  const [E, N] = o.exports.useState({ username: 'Tome', phone: '' })
  function O(e, a) {
    const { value: l } = e.target
    var n
    N(((n = m({}, E)), t(n, r({ [a]: l }))))
  }
  return s.createElement(
    s.Fragment,
    null,
    s.createElement(
      'form',
      m(
        {
          className: i,
          onSubmit: function (e) {
            e.preventDefault()
          },
        },
        d
      ),
      s.createElement(
        'div',
        { className: f },
        s.createElement('label', { className: p }, '姓名：'),
        s.createElement(
          'div',
          { className: u },
          s.createElement('input', {
            className: v,
            type: 'text',
            placeholder: '请输入姓名',
            value: E.username,
            onInput: (e) => O(e, 'username'),
          })
        )
      ),
      s.createElement(
        'div',
        { className: f },
        s.createElement('label', { className: p }, '电话号码：'),
        s.createElement(
          'div',
          { className: u },
          s.createElement('input', {
            className: v,
            type: 'text',
            placeholder: '请输入电话号码',
            value: E.phone,
            onInput: (e) => O(e, 'phone'),
          })
        )
      ),
      s.createElement(
        'div',
        { className: f },
        s.createElement('button', { className: _ }, '登录')
      )
    ),
    b
  )
}
export { b as Form }
