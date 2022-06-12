var e = Object.defineProperty,
  t = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  i = (t, l, a) =>
    l in t
      ? e(t, l, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (t[l] = a)
import { r as n, q as o, R as c } from './vendor.41cc9ac2.js'
import { b as m, ag as u } from './dom.a861e6c5.js'
var v,
  b,
  _ = '_text_1ovsv_1',
  d = '_default_text_1ovsv_13',
  p = '_small_title_1ovsv_17',
  x = '_sub_title_1ovsv_21',
  T = '_title_1ovsv_25',
  f = '_big_title_1ovsv_29',
  E = '_select_1ovsv_33',
  N = '_size_1ovsv_37',
  O = '_color_1ovsv_42'
;((b = v || (v = {}))[(b.text = 1)] = 'text'),
  (b[(b.smallTitle = 2)] = 'smallTitle'),
  (b[(b.subTitle = 3)] = 'subTitle'),
  (b[(b.title = 4)] = 'title'),
  (b[(b.bigTitle = 5)] = 'bigTitle'),
  (b[(b.diversifiedTitle = 6)] = 'diversifiedTitle')
const y = c.createElement(
    'div',
    { key: 'diversifiedText' },
    c.createElement('span', { className: E }, '选中'),
    '文本可以修改',
    c.createElement('span', { className: N }, '大小'),
    '/',
    c.createElement('span', { className: O }, '颜色')
  ),
  g = {
    text: {
      label: 'p',
      menuText: '点击添加文本',
      editorText: '双击修改当前文本',
      className: d,
    },
    smallTitle: {
      label: 'h4',
      menuText: '小标题',
      editorText: '双击修改小标题',
      className: p,
    },
    subTitle: {
      label: 'h3',
      menuText: '标题',
      editorText: '双击修改标题',
      className: x,
    },
    title: {
      label: 'h2',
      menuText: '副标题',
      editorText: '双击修改副标题',
      className: T,
    },
    bigTitle: {
      label: 'h1',
      menuText: '大标题',
      editorText: '双击大标题',
      className: f,
    },
    diversifiedTitle: { label: 'div', menuText: y, editorText: y },
  }
function j(e) {
  var c = e,
    { name: b, label: d, status: p = 'menu', type: x = 1, children: T } = c,
    f = ((e, t) => {
      var l = {}
      for (var i in e) r.call(e, i) && t.indexOf(i) < 0 && (l[i] = e[i])
      if (null != e && a)
        for (var i of a(e)) t.indexOf(i) < 0 && s.call(e, i) && (l[i] = e[i])
      return l
    })(c, ['name', 'label', 'status', 'type', 'children'])
  const [E, N] = n.exports.useState(!1),
    O = 'editor' === p,
    y = o(),
    j = n.exports.useCallback(() => {
      if (d) return d
      return g[v[x]].label
    }, [d, x]),
    k = n.exports.useCallback(() => {
      if (O && T) return [T]
      return [g[v[x]][`${p}Text`], T]
    }, [T, x, p, O]),
    w = n.exports.useCallback(() => {
      const e = g[v[x]].className || ''
      return ('menu' === p && m(_, e, f.className)) || m(e, 'text_anign_center')
    }, [x, p, f]),
    h = n.exports.useCallback(
      u((e) => {
        N(!0)
      }, 300),
      []
    )
  return (
    n.exports.useEffect(() => {
      function e() {
        N(!1)
      }
      return (
        window.addEventListener('click', e),
        () => {
          window.removeEventListener('click', e)
        }
      )
    }, []),
    n.exports.createElement(
      j(),
      ((C = ((e, t) => {
        for (var l in t || (t = {})) r.call(t, l) && i(e, l, t[l])
        if (a) for (var l of a(t)) s.call(t, l) && i(e, l, t[l])
        return e
      })(
        {
          name: b,
          onInput: O
            ? (e) => {
                y({
                  type: 'EDIT_USE_COMPONENTS',
                  value: { name: b, text: e.target.innerText },
                })
              }
            : () => {},
          onClick: h,
        },
        f
      )),
      (P = {
        className: w(),
        contentEditable: O && E,
        suppressContentEditableWarning: !0,
      }),
      t(C, l(P))),
      k()
    )
  )
  var C, P
}
export { j as default, g as textConfig }
