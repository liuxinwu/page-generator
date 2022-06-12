var e = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = (t, n, r) =>
    n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[n] = r),
  a = (e, a) => {
    for (var s in a || (a = {})) n.call(a, s) && o(e, s, a[s])
    if (t) for (var s of t(a)) r.call(a, s) && o(e, s, a[s])
    return e
  }
import {
  r as s,
  R as c,
  S as l,
  a as i,
  b as u,
  u as m,
  B as d,
  c as p,
  d as f,
  e as _,
  f as E,
  P as h,
} from './vendor.41cc9ac2.js'
!(function () {
  const e = document.createElement('link').relList
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e)
    new MutationObserver((e) => {
      for (const n of e)
        if ('childList' === n.type)
          for (const e of n.addedNodes)
            'LINK' === e.tagName && 'modulepreload' === e.rel && t(e)
    }).observe(document, { childList: !0, subtree: !0 })
  }
  function t(e) {
    if (e.ep) return
    e.ep = !0
    const t = (function (e) {
      const t = {}
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
        'use-credentials' === e.crossorigin
          ? (t.credentials = 'include')
          : 'anonymous' === e.crossorigin
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
        t
      )
    })(e)
    fetch(e.href, t)
  }
})()
const y = {},
  g = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if ((e = `http://cdn-page.daxjgxx.com/${e}`) in y) return
            y[e] = !0
            const t = e.endsWith('.css'),
              n = t ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${e}"]${n}`)) return
            const r = document.createElement('link')
            return (
              (r.rel = t ? 'stylesheet' : 'modulepreload'),
              t || ((r.as = 'script'), (r.crossOrigin = '')),
              (r.href = e),
              document.head.appendChild(r),
              t
                ? new Promise((e, t) => {
                    r.addEventListener('load', e),
                      r.addEventListener('error', t)
                  })
                : void 0
            )
          })
        ).then(() => e())
      : e()
  },
  O = [
    { path: '/', exact: !0, redirect: '/home' },
    {
      path: '/home',
      component: s.exports.lazy(() =>
        g(
          () => import('./index.108947ef.js'),
          [
            'assets/index.108947ef.js',
            'assets/index.0d949fb3.css',
            'assets/vendor.41cc9ac2.js',
          ]
        )
      ),
      routes: [
        {
          path: '',
          component: s.exports.lazy(() =>
            g(
              () => import('./index.29646323.js'),
              ['assets/index.29646323.js', 'assets/vendor.41cc9ac2.js']
            )
          ),
        },
      ],
      meta: { title: '首页' },
    },
    {
      path: '/editor',
      component: s.exports.lazy(() =>
        g(
          () =>
            import('./index.95f8ff33.js').then(function (e) {
              return e.i
            }),
          [
            'assets/index.95f8ff33.js',
            'assets/index.6763cfaa.css',
            'assets/vendor.41cc9ac2.js',
            'assets/dom.a861e6c5.js',
          ]
        )
      ),
      routes: [
        {
          path: '',
          component: s.exports.lazy(() =>
            g(
              () =>
                import('./index.7cda04fe.js').then(function (e) {
                  return e.i
                }),
              [
                'assets/index.7cda04fe.js',
                'assets/index.6cd5c95f.css',
                'assets/vendor.41cc9ac2.js',
                'assets/dom.a861e6c5.js',
              ]
            )
          ),
        },
      ],
      meta: { title: '编辑器' },
    },
    {
      path: '*',
      component: s.exports.lazy(() =>
        g(
          () => import('./index.0839930e.js'),
          ['assets/index.0839930e.js', 'assets/vendor.41cc9ac2.js']
        )
      ),
      meta: { title: '404' },
    },
  ]
const b = (function () {
  const e = Object.create(null)
  return (
    (function t(n) {
      n.forEach((n) => {
        const r = n.path,
          o = n.routes
        ;(e[r] = n), o && t(o)
      })
    })(O),
    (t) => {
      const n = e[t]
      if (n) return n
      console.error('没有找到对应的路由模块 !')
    }
  )
})()
function v({ routes: e }) {
  return c.createElement(
    s.exports.Suspense,
    { fallback: c.createElement('div', null, 'loading...') },
    c.createElement(
      l,
      null,
      e &&
        e.map((e, t) =>
          e.redirect
            ? c.createElement(i, a({ key: t, to: e.redirect }, e))
            : c.createElement(u, a({ key: t }, e))
        )
    )
  )
}
function S() {
  const { pathname: e } = m()
  return (
    s.exports.useEffect(() => {
      var t
      const { title: n = '' } = (null == (t = b(e)) ? void 0 : t.meta) || {}
      document.title = n || '页面生成器'
    }, [e]),
    c.createElement(c.Fragment, null)
  )
}
var P = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: 'Module',
  default: S,
})
const x = {
  basename: '',
  keyLength: 6,
  getUserConfirmation: ((T = function (e) {}), void T(!1)),
}
var T
function j(e) {
  const t = Object.assign({}, x, e)
  return c.createElement(
    d,
    a({}, t),
    c.createElement(
      c.Fragment,
      null,
      t.children,
      c.createElement(v, { routes: O }),
      c.createElement(S, null)
    )
  )
}
function I() {
  return c.createElement(j, null)
}
const w = [
    { name: 'Nexus 4', size: { w: 384, h: 640 } },
    { name: 'IPhone6', size: { w: 375, h: 667 } },
    { name: 'IPhone6 Plus', size: { w: 414, h: 736 } },
    { name: 'IPad', size: { w: 768, h: 1024 } },
  ],
  M = w[1],
  L = new Map(),
  N = { name: '', dom: void 0 }
const z = {},
  A = {
    './activeComponent.ts': Object.freeze({
      __proto__: null,
      [Symbol.toStringTag]: 'Module',
      default: function (e = N, t) {
        switch (t.type) {
          case 'REPLACE_ACTIVE_COMPONENTS':
            return t.value
          default:
            return e
        }
      },
    }),
    './equipment.ts': Object.freeze({
      __proto__: null,
      [Symbol.toStringTag]: 'Module',
      default: function (e = M, t) {
        const n = t.value
        switch (t.type) {
          case 'SET_EQUIPMENT_LIST':
            return a(a({}, e), n)
          default:
            return e
        }
      },
    }),
    './useComponents.ts': Object.freeze({
      __proto__: null,
      [Symbol.toStringTag]: 'Module',
      default: function (e = L, t) {
        switch (t.type) {
          case 'INIT_USE_COMPONENTS': {
            const e = t.value
            return new Map(e)
          }
          case 'ADD_USE_COMPONENTS': {
            const n = new Map(Array.from(e)),
              r = t.value
            return n.set(r.name, r), n
          }
          case 'EDIT_USE_COMPONENTS': {
            const n = new Map(Array.from(e)),
              r = t.value,
              o = Object.assign({}, e.get(r.name), r)
            return n.set(o.name, o), n
          }
          default:
            return e
        }
      },
    }),
  },
  C = ['./index.ts']
for (const D in A)
  if (!C.includes(D)) {
    const e = A[D],
      [, t] = D.match(/\/(.*).ts$/) || []
    z[t] = e.default
  }
const k = f(p(z), _())
E.render(
  c.createElement(
    h,
    { store: k },
    c.createElement(c.StrictMode, null, c.createElement(I, null))
  ),
  document.getElementById('root')
)
export { v as G, g as _, w as e, b as g, P as i, k as s }
