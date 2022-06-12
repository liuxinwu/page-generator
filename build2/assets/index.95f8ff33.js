import {
  _ as e,
  i as t,
  r as n,
  j as r,
  R as a,
  g as o,
} from './vendor.41cc9ac2.js'
import {
  _ as s,
  c,
  C as i,
  a as l,
  d as p,
  b as m,
  R as u,
  T as f,
  g as d,
  t as v,
  e as _,
  f as x,
  B as y,
  S as E,
} from './dom.a861e6c5.js'
import { _ as g, g as h, G as b } from './index.ea17f1ce.js'
var N = '_button-group_19zye_20',
  C = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  w = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
  },
  O = new Map(),
  S = -1,
  z = {},
  k = {
    matchHandlers: {},
    dispatch: function (e) {
      return (
        (z = e),
        O.forEach(function (e) {
          return e(z)
        }),
        O.size >= 1
      )
    },
    subscribe: function (e) {
      return O.size || this.register(), (S += 1), O.set(S, e), e(z), S
    },
    unsubscribe: function (e) {
      O.delete(e), O.size || this.unregister()
    },
    unregister: function () {
      var e = this
      Object.keys(w).forEach(function (t) {
        var n = w[t],
          r = e.matchHandlers[n]
        null == r || r.mql.removeListener(null == r ? void 0 : r.listener)
      }),
        O.clear()
    },
    register: function () {
      var n = this
      Object.keys(w).forEach(function (r) {
        var a = w[r],
          o = function (a) {
            var o = a.matches
            n.dispatch(e(e({}, z), t({}, r, o)))
          },
          s = window.matchMedia(a)
        s.addListener(o), (n.matchHandlers[a] = { mql: s, listener: o }), o(s)
      })
    },
  }
var P = n.exports.createContext('default'),
  j = function (e) {
    var t = e.children,
      r = e.size
    return n.exports.createElement(P.Consumer, null, function (e) {
      return n.exports.createElement(P.Provider, { value: r || e }, t)
    })
  },
  q = function (r, a) {
    var o,
      f,
      d = n.exports.useContext(P),
      v = n.exports.useState(1),
      _ = s(v, 2),
      x = _[0],
      y = _[1],
      E = n.exports.useState(!1),
      g = s(E, 2),
      h = g[0],
      b = g[1],
      N = n.exports.useState(!0),
      w = s(N, 2),
      O = w[0],
      S = w[1],
      z = n.exports.useRef(),
      j = n.exports.useRef(),
      q = c(a, z),
      R = n.exports.useContext(i).getPrefixCls,
      L = function () {
        if (j.current && z.current) {
          var e = j.current.offsetWidth,
            t = z.current.offsetWidth
          if (0 !== e && 0 !== t) {
            var n = r.gap,
              a = void 0 === n ? 4 : n
            2 * a < t && y(t - 2 * a < e ? (t - 2 * a) / e : 1)
          }
        }
      }
    n.exports.useEffect(function () {
      b(!0)
    }, []),
      n.exports.useEffect(
        function () {
          S(!0), y(1)
        },
        [r.src]
      ),
      n.exports.useEffect(
        function () {
          L()
        },
        [r.gap]
      )
    var A = r.prefixCls,
      I = r.shape,
      T = r.size,
      D = r.src,
      H = r.srcSet,
      M = r.icon,
      V = r.className,
      W = r.alt,
      B = r.draggable,
      F = r.children,
      G = (function (e, t) {
        var n = {}
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r])
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var a = 0
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]])
        }
        return n
      })(r, [
        'prefixCls',
        'shape',
        'size',
        'src',
        'srcSet',
        'icon',
        'className',
        'alt',
        'draggable',
        'children',
      ]),
      X = 'default' === T ? d : T,
      J = (function () {
        var e = n.exports.useState({}),
          t = s(e, 2),
          r = t[0],
          a = t[1]
        return (
          n.exports.useEffect(function () {
            var e = k.subscribe(function (e) {
              a(e)
            })
            return function () {
              return k.unsubscribe(e)
            }
          }, []),
          r
        )
      })(),
      K = n.exports.useMemo(
        function () {
          if ('object' !== l(X)) return {}
          var e = C.find(function (e) {
              return J[e]
            }),
            t = X[e]
          return t
            ? {
                width: t,
                height: t,
                lineHeight: ''.concat(t, 'px'),
                fontSize: M ? t / 2 : 18,
              }
            : {}
        },
        [J, X]
      )
    p(
      !('string' == typeof M && M.length > 2),
      'Avatar',
      '`icon` is using ReactNode instead of string naming in v4. Please check `'.concat(
        M,
        '` at https://ant.design/components/icon'
      )
    )
    var Q,
      U = R('avatar', A),
      Y = m(
        (t((o = {}), ''.concat(U, '-lg'), 'large' === X),
        t(o, ''.concat(U, '-sm'), 'small' === X),
        o)
      ),
      Z = n.exports.isValidElement(D),
      $ = m(
        U,
        Y,
        (t((f = {}), ''.concat(U, '-').concat(I), !!I),
        t(f, ''.concat(U, '-image'), Z || (D && O)),
        t(f, ''.concat(U, '-icon'), !!M),
        f),
        V
      ),
      ee =
        'number' == typeof X
          ? {
              width: X,
              height: X,
              lineHeight: ''.concat(X, 'px'),
              fontSize: M ? X / 2 : 18,
            }
          : {}
    if ('string' == typeof D && O)
      Q = n.exports.createElement('img', {
        src: D,
        draggable: B,
        srcSet: H,
        onError: function () {
          var e = r.onError
          !1 !== (e ? e() : void 0) && S(!1)
        },
        alt: W,
      })
    else if (Z) Q = D
    else if (M) Q = M
    else if (h || 1 !== x) {
      var te = 'scale('.concat(x, ') translateX(-50%)'),
        ne = { msTransform: te, WebkitTransform: te, transform: te },
        re = 'number' == typeof X ? { lineHeight: ''.concat(X, 'px') } : {}
      Q = n.exports.createElement(
        u,
        { onResize: L },
        n.exports.createElement(
          'span',
          {
            className: ''.concat(U, '-string'),
            ref: function (e) {
              j.current = e
            },
            style: e(e({}, re), ne),
          },
          F
        )
      )
    } else
      Q = n.exports.createElement(
        'span',
        {
          className: ''.concat(U, '-string'),
          style: { opacity: 0 },
          ref: function (e) {
            j.current = e
          },
        },
        F
      )
    return (
      delete G.onError,
      delete G.gap,
      n.exports.createElement(
        'span',
        e({}, G, { style: e(e(e({}, ee), K), G.style), className: $, ref: q }),
        Q
      )
    )
  },
  R = n.exports.forwardRef(q)
;(R.displayName = 'Avatar'),
  (R.defaultProps = { shape: 'circle', size: 'default' })
var L = R,
  A = function (e) {
    return e ? ('function' == typeof e ? e() : e) : null
  },
  I = n.exports.forwardRef(function (t, r) {
    var a,
      o = t.prefixCls,
      s = t.title,
      c = t.content,
      l = (function (e, t) {
        var n = {}
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r])
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var a = 0
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]])
        }
        return n
      })(t, ['prefixCls', 'title', 'content']),
      p = n.exports.useContext(i).getPrefixCls,
      m = p('popover', o),
      u = p()
    return n.exports.createElement(
      f,
      e({}, l, {
        prefixCls: m,
        ref: r,
        overlay:
          ((a = m),
          n.exports.createElement(
            n.exports.Fragment,
            null,
            s &&
              n.exports.createElement(
                'div',
                { className: ''.concat(a, '-title') },
                A(s)
              ),
            n.exports.createElement(
              'div',
              { className: ''.concat(a, '-inner-content') },
              A(c)
            )
          )),
        transitionName: d(u, 'zoom-big', l.transitionName),
      })
    )
  })
;(I.displayName = 'Popover'),
  (I.defaultProps = {
    placement: 'top',
    trigger: 'hover',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    overlayStyle: {},
  })
var T = I,
  D = function (e) {
    var r = n.exports.useContext(i),
      a = r.getPrefixCls,
      o = r.direction,
      s = e.prefixCls,
      c = e.className,
      l = void 0 === c ? '' : c,
      p = e.maxCount,
      u = e.maxStyle,
      f = e.size,
      d = a('avatar-group', s),
      x = m(d, t({}, ''.concat(d, '-rtl'), 'rtl' === o), l),
      y = e.children,
      E = e.maxPopoverPlacement,
      g = void 0 === E ? 'top' : E,
      h = v(y).map(function (e, t) {
        return _(e, { key: 'avatar-key-'.concat(t) })
      }),
      b = h.length
    if (p && p < b) {
      var N = h.slice(0, p),
        C = h.slice(p, b)
      return (
        N.push(
          n.exports.createElement(
            T,
            {
              key: 'avatar-popover-key',
              content: C,
              trigger: 'hover',
              placement: g,
              overlayClassName: ''.concat(d, '-popover'),
            },
            n.exports.createElement(L, { style: u }, '+'.concat(b - p))
          )
        ),
        n.exports.createElement(
          j,
          { size: f },
          n.exports.createElement('div', { className: x, style: e.style }, N)
        )
      )
    }
    return n.exports.createElement(
      j,
      { size: f },
      n.exports.createElement('div', { className: x, style: e.style }, h)
    )
  },
  H = L
H.Group = D
var M = H
const V = new E()
var W = r((e) => ({ useComponents: e.useComponents }))(function ({
  useComponents: e,
}) {
  const t = n.exports.useCallback(() => {
      V.setItem('useComponents', Array.from(e))
    }, [e]),
    r = n.exports.useCallback(() => {
      const e = document.querySelector('#editorWrap'),
        t = document.querySelector('#editorMain')
      ;(e || t) && x(e, t)
    }, [])
  return a.createElement(
    'header',
    null,
    a.createElement(
      M,
      { style: { backgroundColor: '#f56a00' }, size: 'large' },
      'page-generator'
    ),
    a.createElement(
      'div',
      { className: N },
      a.createElement(y, { type: 'primary', danger: !0, onClick: t }, '保存'),
      a.createElement(y, { type: 'primary' }, '下载'),
      a.createElement(
        f,
        { title: '回到中心点' },
        a.createElement(y, {
          type: 'primary',
          shape: 'circle',
          icon: a.createElement('i', {
            className: m('iconfont icon-Aimzhongxindian'),
          }),
          onClick: r,
        })
      )
    )
  )
})
const B = [
  { type: 'text', icon: 'icon-text', text: '文本' },
  { type: 'pic', icon: 'icon-tupian', text: '图片' },
  { type: 'compoennt', icon: 'icon-zujian', text: '组件' },
  { type: 'audio', icon: 'icon-yinle', text: '音频' },
  { type: 'video', icon: 'icon-video', text: '视频' },
  { type: 'chart', icon: 'icon-tubiao', text: '图表' },
]
var F = '_nav_list_1nhma_1',
  G = '_nav_item_1nhma_7',
  X = '_nav_item_icon_1nhma_21',
  J = '_nav_item_text_1nhma_25'
function K({ onCurrentNav: e }) {
  const t = n.exports.useCallback(
    (t, n) => {
      e(t, n)
    },
    [e]
  )
  return (
    n.exports.useEffect(() => {
      function t() {
        e()
      }
      return (
        document.addEventListener('click', t),
        () => {
          document.removeEventListener('click', t)
        }
      )
    }, [e]),
    a.createElement(
      'ul',
      { className: F },
      B.map((e, n) =>
        a.createElement(
          'li',
          { key: e.icon, className: G, onClick: () => t(e, n) },
          a.createElement('i', { className: m('iconfont', X, e.icon) }),
          a.createElement('span', { className: J }, e.text)
        )
      )
    )
  )
}
var Q = {
  select_component: '_select_component_f0s5q_1',
  chart_wrap: '_chart_wrap_f0s5q_20',
  piece_of_title: '_piece_of_title_f0s5q_24',
  pic_list: '_pic_list_f0s5q_30',
  video_list: '_video_list_f0s5q_31',
  pic_item: '_pic_item_f0s5q_35',
  video_item: '_video_item_f0s5q_36',
}
const U = {
  text: a.lazy(() =>
    g(
      () => import('./textNav.a7c74936.js'),
      [
        'assets/textNav.a7c74936.js',
        'assets/vendor.41cc9ac2.js',
        'assets/index.2e823efb.js',
        'assets/dom.a861e6c5.js',
        'assets/index.3766fe6d.js',
        'assets/index.7779c32c.css',
      ]
    )
  ),
  chart: a.lazy(() =>
    g(
      () => import('./chartNav.4a3bd0f2.js'),
      [
        'assets/chartNav.4a3bd0f2.js',
        'assets/vendor.41cc9ac2.js',
        'assets/index.7aa615cc.js',
        'assets/index.7a34c6b7.css',
        'assets/dom.a861e6c5.js',
        'assets/index.ea17f1ce.js',
        'assets/index.90f06b57.css',
        'assets/index.2e823efb.js',
      ]
    )
  ),
  pic: a.lazy(() =>
    g(
      () => import('./picNav.95aa4cbd.js'),
      [
        'assets/picNav.95aa4cbd.js',
        'assets/vendor.41cc9ac2.js',
        'assets/index.a40a854d.js',
        'assets/index.2e823efb.js',
        'assets/dom.a861e6c5.js',
        'assets/index.ea17f1ce.js',
        'assets/index.90f06b57.css',
      ]
    )
  ),
  video: a.lazy(() =>
    g(
      () => import('./videoNav.e3aa9613.js'),
      [
        'assets/videoNav.e3aa9613.js',
        'assets/vendor.41cc9ac2.js',
        'assets/index.43671cfe.js',
        'assets/index.2e823efb.js',
        'assets/dom.a861e6c5.js',
        'assets/index.ea17f1ce.js',
        'assets/index.90f06b57.css',
      ]
    )
  ),
}
function Y({ currentNav: e, animationName: t = '' }) {
  const { nav: n } = e
  if (!n) return null
  const r = U[n.type]
  return a.createElement(
    'div',
    {
      className: m('animate__animated', Q.select_component, t),
      onClick: (e) => e.stopPropagation(),
    },
    a.createElement(r, { status: 'menu' })
  )
}
var Z = '_aside_wrap_12ro4_1'
function $() {
  const [e, t] = n.exports.useState({}),
    [r, o] = n.exports.useState(!1),
    s = n.exports.useCallback((e, n) => {
      o(!e && !n), t({ nav: e, index: n })
    }, [])
  return a.createElement(
    a.Fragment,
    null,
    a.createElement(
      'aside',
      { className: Z, onClick: (e) => e.stopPropagation() },
      a.createElement(K, { onCurrentNav: s })
    ),
    a.createElement(
      n.exports.Suspense,
      { fallback: '加载中...' },
      a.createElement(Y, {
        currentNav: e,
        animationName:
          void 0 !== (null == e ? void 0 : e.nav)
            ? 'animate__fadeInLeftBig'
            : r
            ? 'animate__fadeOutLeftBig'
            : 'select_component_hidden',
      })
    )
  )
}
function ee() {
  var e
  const { path: t } = o(),
    n = null == (e = h(t)) ? void 0 : e.routes
  return a.createElement('main', null, a.createElement(b, { routes: n }))
}
var te = '_content-wrap_1wyqy_1'
function ne() {
  return a.createElement(
    'div',
    { className: te },
    a.createElement($, null),
    a.createElement(ee, null)
  )
}
var re = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: function () {
    return a.createElement(
      'div',
      { className: 'default-layout-wrap' },
      a.createElement(W, null),
      a.createElement(ne, null)
    )
  },
})
export { Q as S, re as i }
