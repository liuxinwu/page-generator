var t = Object.defineProperty,
  e = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = (e, n, i) =>
    n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i),
  s = (t, e) => {
    var n = {}
    for (var a in t) r.call(t, a) && e.indexOf(a) < 0 && (n[a] = t[a])
    if (null != t && i)
      for (var a of i(t)) e.indexOf(a) < 0 && o.call(t, a) && (n[a] = t[a])
    return n
  }
import { j as l, r as u, R as h } from './vendor.41cc9ac2.js'
import { b as c } from './dom.a861e6c5.js'
import { _ as p } from './index.ea17f1ce.js'
var f = '_chart-wrap_1wkpt_1',
  d = function (t, e) {
    return (d =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      })(t, e)
  }
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function g(
  t,
  e
) {
  if ('function' != typeof e && null !== e)
    throw new TypeError(
      'Class extends value ' + String(e) + ' is not a constructor or null'
    )
  function n() {
    this.constructor = t
  }
  d(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
}
var y = function () {
  return (y =
    Object.assign ||
    function (t) {
      for (var e, n = 1, i = arguments.length; n < i; n++)
        for (var r in (e = arguments[n]))
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
      return t
    }).apply(this, arguments)
}
function v(t, e, n) {
  if (n || 2 === arguments.length)
    for (var i, r = 0, o = e.length; r < o; r++)
      (!i && r in e) ||
        (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]))
  return t.concat(i || e)
}
var m = function () {
    ;(this.firefox = !1),
      (this.ie = !1),
      (this.edge = !1),
      (this.newEdge = !1),
      (this.weChat = !1)
  },
  _ = new (function () {
    ;(this.browser = new m()),
      (this.node = !1),
      (this.wxa = !1),
      (this.worker = !1),
      (this.canvasSupported = !1),
      (this.svgSupported = !1),
      (this.touchEventsSupported = !1),
      (this.pointerEventsSupported = !1),
      (this.domSupported = !1),
      (this.transformSupported = !1),
      (this.transform3dSupported = !1)
  })()
'object' == typeof wx && 'function' == typeof wx.getSystemInfoSync
  ? ((_.wxa = !0), (_.canvasSupported = !0), (_.touchEventsSupported = !0))
  : 'undefined' == typeof document && 'undefined' != typeof self
  ? ((_.worker = !0), (_.canvasSupported = !0))
  : 'undefined' == typeof navigator
  ? ((_.node = !0), (_.canvasSupported = !0), (_.svgSupported = !0))
  : (function (t, e) {
      var n = e.browser,
        i = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        o = t.match(/Edge?\/([\d.]+)/),
        a = /micromessenger/i.test(t)
      i && ((n.firefox = !0), (n.version = i[1]))
      r && ((n.ie = !0), (n.version = r[1]))
      o &&
        ((n.edge = !0),
        (n.version = o[1]),
        (n.newEdge = +o[1].split('.')[0] > 18))
      a && (n.weChat = !0)
      ;(e.canvasSupported = !!document.createElement('canvas').getContext),
        (e.svgSupported = 'undefined' != typeof SVGRect),
        (e.touchEventsSupported = 'ontouchstart' in window && !n.ie && !n.edge),
        (e.pointerEventsSupported =
          'onpointerdown' in window && (n.edge || (n.ie && +n.version >= 11))),
        (e.domSupported = 'undefined' != typeof document)
      var s = document.documentElement.style
      ;(e.transform3dSupported =
        ((n.ie && 'transition' in s) ||
          n.edge ||
          ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()) ||
          'MozPerspective' in s) &&
        !('OTransition' in s)),
        (e.transformSupported =
          e.transform3dSupported || (n.ie && +n.version >= 9))
    })(navigator.userAgent, _)
var x = _,
  w = {
    '[object Function]': !0,
    '[object RegExp]': !0,
    '[object Date]': !0,
    '[object Error]': !0,
    '[object CanvasGradient]': !0,
    '[object CanvasPattern]': !0,
    '[object Image]': !0,
    '[object Canvas]': !0,
  },
  b = {
    '[object Int8Array]': !0,
    '[object Uint8Array]': !0,
    '[object Uint8ClampedArray]': !0,
    '[object Int16Array]': !0,
    '[object Uint16Array]': !0,
    '[object Int32Array]': !0,
    '[object Uint32Array]': !0,
    '[object Float32Array]': !0,
    '[object Float64Array]': !0,
  },
  S = Object.prototype.toString,
  T = Array.prototype,
  M = T.forEach,
  C = T.filter,
  k = T.slice,
  I = T.map,
  D = function () {}.constructor,
  A = D ? D.prototype : null,
  P = {},
  O = 2311
function L() {
  return O++
}
function R() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
  'undefined' != typeof console && console.error.apply(console, t)
}
function B(t) {
  if (null == t || 'object' != typeof t) return t
  var e = t,
    n = S.call(t)
  if ('[object Array]' === n) {
    if (!yt(t)) {
      e = []
      for (var i = 0, r = t.length; i < r; i++) e[i] = B(t[i])
    }
  } else if (b[n]) {
    if (!yt(t)) {
      var o = t.constructor
      if (o.from) e = o.from(t)
      else {
        e = new o(t.length)
        for (i = 0, r = t.length; i < r; i++) e[i] = B(t[i])
      }
    }
  } else if (!w[n] && !yt(t) && !at(t))
    for (var a in ((e = {}), t)) t.hasOwnProperty(a) && (e[a] = B(t[a]))
  return e
}
function z(t, e, n) {
  if (!it(e) || !it(t)) return n ? B(e) : t
  for (var i in e)
    if (e.hasOwnProperty(i)) {
      var r = t[i],
        o = e[i]
      !it(o) ||
      !it(r) ||
      Q(o) ||
      Q(r) ||
      at(o) ||
      at(r) ||
      rt(o) ||
      rt(r) ||
      yt(o) ||
      yt(r)
        ? (!n && i in t) || (t[i] = B(e[i]))
        : z(r, o, n)
    }
  return t
}
function E(t, e) {
  for (var n = t[0], i = 1, r = t.length; i < r; i++) n = z(n, t[i], e)
  return n
}
function N(t, e) {
  if (Object.assign) Object.assign(t, e)
  else for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
  return t
}
function F(t, e, n) {
  for (var i = Z(e), r = 0; r < i.length; r++) {
    var o = i[r]
    ;(n ? null != e[o] : null == t[o]) && (t[o] = e[o])
  }
  return t
}
var H = function () {
  return P.createCanvas()
}
function V(t, e) {
  if (t) {
    if (t.indexOf) return t.indexOf(e)
    for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n
  }
  return -1
}
function W(t, e, n) {
  if (
    ((t = 'prototype' in t ? t.prototype : t),
    (e = 'prototype' in e ? e.prototype : e),
    Object.getOwnPropertyNames)
  )
    for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
      var o = i[r]
      'constructor' !== o && (n ? null != e[o] : null == t[o]) && (t[o] = e[o])
    }
  else F(t, e, n)
}
function G(t) {
  return !!t && 'string' != typeof t && 'number' == typeof t.length
}
function U(t, e, n) {
  if (t && e)
    if (t.forEach && t.forEach === M) t.forEach(e, n)
    else if (t.length === +t.length)
      for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t)
    else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
}
function X(t, e, n) {
  if (!t) return []
  if (!e) return ct(t)
  if (t.map && t.map === I) return t.map(e, n)
  for (var i = [], r = 0, o = t.length; r < o; r++)
    i.push(e.call(n, t[r], r, t))
  return i
}
function Y(t, e, n, i) {
  if (t && e) {
    for (var r = 0, o = t.length; r < o; r++) n = e.call(i, n, t[r], r, t)
    return n
  }
}
function j(t, e, n) {
  if (!t) return []
  if (!e) return ct(t)
  if (t.filter && t.filter === C) return t.filter(e, n)
  for (var i = [], r = 0, o = t.length; r < o; r++)
    e.call(n, t[r], r, t) && i.push(t[r])
  return i
}
function q(t, e, n) {
  if (t && e)
    for (var i = 0, r = t.length; i < r; i++)
      if (e.call(n, t[i], i, t)) return t[i]
}
function Z(t) {
  if (!t) return []
  if (Object.keys) return Object.keys(t)
  var e = []
  for (var n in t) t.hasOwnProperty(n) && e.push(n)
  return e
}
P.createCanvas = function () {
  return document.createElement('canvas')
}
var K =
  A && J(A.bind)
    ? A.call.bind(A.bind)
    : function (t, e) {
        for (var n = [], i = 2; i < arguments.length; i++)
          n[i - 2] = arguments[i]
        return function () {
          return t.apply(e, n.concat(k.call(arguments)))
        }
      }
function $(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
  return function () {
    return t.apply(this, e.concat(k.call(arguments)))
  }
}
function Q(t) {
  return Array.isArray ? Array.isArray(t) : '[object Array]' === S.call(t)
}
function J(t) {
  return 'function' == typeof t
}
function tt(t) {
  return 'string' == typeof t
}
function et(t) {
  return '[object String]' === S.call(t)
}
function nt(t) {
  return 'number' == typeof t
}
function it(t) {
  var e = typeof t
  return 'function' === e || (!!t && 'object' === e)
}
function rt(t) {
  return !!w[S.call(t)]
}
function ot(t) {
  return !!b[S.call(t)]
}
function at(t) {
  return (
    'object' == typeof t &&
    'number' == typeof t.nodeType &&
    'object' == typeof t.ownerDocument
  )
}
function st(t) {
  return t != t
}
function lt() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
  for (var n = 0, i = t.length; n < i; n++) if (null != t[n]) return t[n]
}
function ut(t, e) {
  return null != t ? t : e
}
function ht(t, e, n) {
  return null != t ? t : null != e ? e : n
}
function ct(t) {
  for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
  return k.apply(t, e)
}
function pt(t) {
  if ('number' == typeof t) return [t, t, t, t]
  var e = t.length
  return 2 === e
    ? [t[0], t[1], t[0], t[1]]
    : 3 === e
    ? [t[0], t[1], t[2], t[1]]
    : t
}
function ft(t, e) {
  if (!t) throw new Error(e)
}
function dt(t) {
  return null == t
    ? null
    : 'function' == typeof t.trim
    ? t.trim()
    : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}
function gt(t) {
  t.__ec_primitive__ = !0
}
function yt(t) {
  return t.__ec_primitive__
}
var vt = (function () {
  function t(e) {
    this.data = {}
    var n = Q(e)
    this.data = {}
    var i = this
    function r(t, e) {
      n ? i.set(t, e) : i.set(e, t)
    }
    e instanceof t ? e.each(r) : e && U(e, r)
  }
  return (
    (t.prototype.get = function (t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null
    }),
    (t.prototype.set = function (t, e) {
      return (this.data[t] = e)
    }),
    (t.prototype.each = function (t, e) {
      for (var n in this.data)
        this.data.hasOwnProperty(n) && t.call(e, this.data[n], n)
    }),
    (t.prototype.keys = function () {
      return Z(this.data)
    }),
    (t.prototype.removeKey = function (t) {
      delete this.data[t]
    }),
    t
  )
})()
function mt(t) {
  return new vt(t)
}
function _t(t, e) {
  for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++)
    n[i] = t[i]
  var r = t.length
  for (i = 0; i < e.length; i++) n[i + r] = e[i]
  return n
}
function xt(t, e) {
  var n
  if (Object.create) n = Object.create(t)
  else {
    var i = function () {}
    ;(i.prototype = t), (n = new i())
  }
  return e && N(n, e), n
}
function wt(t, e) {
  return t.hasOwnProperty(e)
}
function bt() {}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var St =
  function (t, e) {
    return (St =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e
        }) ||
      function (t, e) {
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
      })(t, e)
  }
function Tt(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError(
      'Class extends value ' + String(e) + ' is not a constructor or null'
    )
  function n() {
    this.constructor = t
  }
  St(t, e),
    (t.prototype =
      null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
}
function Mt(t, e) {
  return null == t && (t = 0), null == e && (e = 0), [t, e]
}
function Ct(t, e) {
  return (t[0] = e[0]), (t[1] = e[1]), t
}
function kt(t) {
  return [t[0], t[1]]
}
function It(t, e, n) {
  return (t[0] = e), (t[1] = n), t
}
function Dt(t, e, n) {
  return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t
}
function At(t, e, n, i) {
  return (t[0] = e[0] + n[0] * i), (t[1] = e[1] + n[1] * i), t
}
function Pt(t, e, n) {
  return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t
}
function Ot(t) {
  return Math.sqrt(
    (function (t) {
      return t[0] * t[0] + t[1] * t[1]
    })(t)
  )
}
function Lt(t, e, n) {
  return (t[0] = e[0] * n), (t[1] = e[1] * n), t
}
function Rt(t, e) {
  var n = Ot(e)
  return (
    0 === n ? ((t[0] = 0), (t[1] = 0)) : ((t[0] = e[0] / n), (t[1] = e[1] / n)),
    t
  )
}
function Bt(t, e) {
  return Math.sqrt(
    (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
  )
}
var zt = Bt
var Et = function (t, e) {
  return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
}
function Nt(t, e, n, i) {
  return (t[0] = e[0] + i * (n[0] - e[0])), (t[1] = e[1] + i * (n[1] - e[1])), t
}
function Ft(t, e, n) {
  var i = e[0],
    r = e[1]
  return (
    (t[0] = n[0] * i + n[2] * r + n[4]), (t[1] = n[1] * i + n[3] * r + n[5]), t
  )
}
function Ht(t, e, n) {
  return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t
}
function Vt(t, e, n) {
  return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t
}
var Wt = function (t, e) {
    ;(this.target = t), (this.topTarget = e && e.topTarget)
  },
  Gt = (function () {
    function t(t) {
      ;(this.handler = t),
        t.on('mousedown', this._dragStart, this),
        t.on('mousemove', this._drag, this),
        t.on('mouseup', this._dragEnd, this)
    }
    return (
      (t.prototype._dragStart = function (t) {
        for (var e = t.target; e && !e.draggable; ) e = e.parent
        e &&
          ((this._draggingTarget = e),
          (e.dragging = !0),
          (this._x = t.offsetX),
          (this._y = t.offsetY),
          this.handler.dispatchToElement(new Wt(e, t), 'dragstart', t.event))
      }),
      (t.prototype._drag = function (t) {
        var e = this._draggingTarget
        if (e) {
          var n = t.offsetX,
            i = t.offsetY,
            r = n - this._x,
            o = i - this._y
          ;(this._x = n),
            (this._y = i),
            e.drift(r, o, t),
            this.handler.dispatchToElement(new Wt(e, t), 'drag', t.event)
          var a = this.handler.findHover(n, i, e).target,
            s = this._dropTarget
          ;(this._dropTarget = a),
            e !== a &&
              (s &&
                a !== s &&
                this.handler.dispatchToElement(
                  new Wt(s, t),
                  'dragleave',
                  t.event
                ),
              a &&
                a !== s &&
                this.handler.dispatchToElement(
                  new Wt(a, t),
                  'dragenter',
                  t.event
                ))
        }
      }),
      (t.prototype._dragEnd = function (t) {
        var e = this._draggingTarget
        e && (e.dragging = !1),
          this.handler.dispatchToElement(new Wt(e, t), 'dragend', t.event),
          this._dropTarget &&
            this.handler.dispatchToElement(
              new Wt(this._dropTarget, t),
              'drop',
              t.event
            ),
          (this._draggingTarget = null),
          (this._dropTarget = null)
      }),
      t
    )
  })(),
  Ut = (function () {
    function t(t) {
      t && (this._$eventProcessor = t)
    }
    return (
      (t.prototype.on = function (t, e, n, i) {
        this._$handlers || (this._$handlers = {})
        var r = this._$handlers
        if (
          ('function' == typeof e && ((i = n), (n = e), (e = null)), !n || !t)
        )
          return this
        var o = this._$eventProcessor
        null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)),
          r[t] || (r[t] = [])
        for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this
        var s = {
            h: n,
            query: e,
            ctx: i || this,
            callAtLast: n.zrEventfulCallAtLast,
          },
          l = r[t].length - 1,
          u = r[t][l]
        return u && u.callAtLast ? r[t].splice(l, 0, s) : r[t].push(s), this
      }),
      (t.prototype.isSilent = function (t) {
        var e = this._$handlers
        return !e || !e[t] || !e[t].length
      }),
      (t.prototype.off = function (t, e) {
        var n = this._$handlers
        if (!n) return this
        if (!t) return (this._$handlers = {}), this
        if (e) {
          if (n[t]) {
            for (var i = [], r = 0, o = n[t].length; r < o; r++)
              n[t][r].h !== e && i.push(n[t][r])
            n[t] = i
          }
          n[t] && 0 === n[t].length && delete n[t]
        } else delete n[t]
        return this
      }),
      (t.prototype.trigger = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n]
        if (!this._$handlers) return this
        var i = this._$handlers[t],
          r = this._$eventProcessor
        if (i)
          for (var o = e.length, a = i.length, s = 0; s < a; s++) {
            var l = i[s]
            if (!r || !r.filter || null == l.query || r.filter(t, l.query))
              switch (o) {
                case 0:
                  l.h.call(l.ctx)
                  break
                case 1:
                  l.h.call(l.ctx, e[0])
                  break
                case 2:
                  l.h.call(l.ctx, e[0], e[1])
                  break
                default:
                  l.h.apply(l.ctx, e)
              }
          }
        return r && r.afterTrigger && r.afterTrigger(t), this
      }),
      (t.prototype.triggerWithContext = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n]
        if (!this._$handlers) return this
        var i = this._$handlers[t],
          r = this._$eventProcessor
        if (i)
          for (
            var o = e.length, a = e[o - 1], s = i.length, l = 0;
            l < s;
            l++
          ) {
            var u = i[l]
            if (!r || !r.filter || null == u.query || r.filter(t, u.query))
              switch (o) {
                case 0:
                  u.h.call(a)
                  break
                case 1:
                  u.h.call(a, e[0])
                  break
                case 2:
                  u.h.call(a, e[0], e[1])
                  break
                default:
                  u.h.apply(a, e.slice(1, o - 1))
              }
          }
        return r && r.afterTrigger && r.afterTrigger(t), this
      }),
      t
    )
  })(),
  Xt = Math.log(2)
function Yt(t, e, n, i, r, o) {
  var a = i + '-' + r,
    s = t.length
  if (o.hasOwnProperty(a)) return o[a]
  if (1 === e) {
    var l = Math.round(Math.log(((1 << s) - 1) & ~r) / Xt)
    return t[n][l]
  }
  for (var u = i | (1 << n), h = n + 1; i & (1 << h); ) h++
  for (var c = 0, p = 0, f = 0; p < s; p++) {
    var d = 1 << p
    d & r ||
      ((c += (f % 2 ? -1 : 1) * t[n][p] * Yt(t, e - 1, h, u, r | d, o)), f++)
  }
  return (o[a] = c), c
}
function jt(t, e) {
  var n = [
      [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
      [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
      [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
      [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
      [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
      [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
      [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
      [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]],
    ],
    i = {},
    r = Yt(n, 8, 0, 0, 0, i)
  if (0 !== r) {
    for (var o = [], a = 0; a < 8; a++)
      for (var s = 0; s < 8; s++)
        null == o[s] && (o[s] = 0),
          (o[s] +=
            ((((a + s) % 2 ? -1 : 1) *
              Yt(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i)) /
              r) *
            e[a])
    return function (t, e, n) {
      var i = e * o[6] + n * o[7] + 1
      ;(t[0] = (e * o[0] + n * o[1] + o[2]) / i),
        (t[1] = (e * o[3] + n * o[4] + o[5]) / i)
    }
  }
}
var qt = []
function Zt(t, e, n, i, r) {
  if (e.getBoundingClientRect && x.domSupported && !Kt(e)) {
    var o = e.___zrEVENTSAVED || (e.___zrEVENTSAVED = {}),
      a = (function (t, e, n) {
        for (
          var i = n ? 'invTrans' : 'trans',
            r = e[i],
            o = e.srcCoords,
            a = [],
            s = [],
            l = !0,
            u = 0;
          u < 4;
          u++
        ) {
          var h = t[u].getBoundingClientRect(),
            c = 2 * u,
            p = h.left,
            f = h.top
          a.push(p, f),
            (l = l && o && p === o[c] && f === o[c + 1]),
            s.push(t[u].offsetLeft, t[u].offsetTop)
        }
        return l && r
          ? r
          : ((e.srcCoords = a), (e[i] = n ? jt(s, a) : jt(a, s)))
      })(
        (function (t, e) {
          var n = e.markers
          if (n) return n
          n = e.markers = []
          for (
            var i = ['left', 'right'], r = ['top', 'bottom'], o = 0;
            o < 4;
            o++
          ) {
            var a = document.createElement('div'),
              s = o % 2,
              l = (o >> 1) % 2
            ;(a.style.cssText = [
              'position: absolute',
              'visibility: hidden',
              'padding: 0',
              'margin: 0',
              'border-width: 0',
              'user-select: none',
              'width:0',
              'height:0',
              i[s] + ':0',
              r[l] + ':0',
              i[1 - s] + ':auto',
              r[1 - l] + ':auto',
              '',
            ].join('!important;')),
              t.appendChild(a),
              n.push(a)
          }
          return n
        })(e, o),
        o,
        r
      )
    if (a) return a(t, n, i), !0
  }
  return !1
}
function Kt(t) {
  return 'CANVAS' === t.nodeName.toUpperCase()
}
var $t = 'undefined' != typeof window && !!window.addEventListener,
  Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  Jt = []
function te(t, e, n, i) {
  return (
    (n = n || {}),
    i || !x.canvasSupported
      ? ee(t, e, n)
      : x.browser.firefox && null != e.layerX && e.layerX !== e.offsetX
      ? ((n.zrX = e.layerX), (n.zrY = e.layerY))
      : null != e.offsetX
      ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY))
      : ee(t, e, n),
    n
  )
}
function ee(t, e, n) {
  if (x.domSupported && t.getBoundingClientRect) {
    var i = e.clientX,
      r = e.clientY
    if (Kt(t)) {
      var o = t.getBoundingClientRect()
      return (n.zrX = i - o.left), void (n.zrY = r - o.top)
    }
    if (Zt(Jt, t, i, r)) return (n.zrX = Jt[0]), void (n.zrY = Jt[1])
  }
  n.zrX = n.zrY = 0
}
function ne(t) {
  return t || window.event
}
function ie(t, e, n) {
  if (null != (e = ne(e)).zrX) return e
  var i = e.type
  if (i && i.indexOf('touch') >= 0) {
    var r = 'touchend' !== i ? e.targetTouches[0] : e.changedTouches[0]
    r && te(t, r, e, n)
  } else {
    te(t, e, e, n)
    var o = (function (t) {
      var e = t.wheelDelta
      if (e) return e
      var n = t.deltaX,
        i = t.deltaY
      if (null == n || null == i) return e
      return (
        3 *
        (0 !== i ? Math.abs(i) : Math.abs(n)) *
        (i > 0 ? -1 : i < 0 ? 1 : n > 0 ? -1 : 1)
      )
    })(e)
    e.zrDelta = o ? o / 120 : -(e.detail || 0) / 3
  }
  var a = e.button
  return (
    null == e.which &&
      void 0 !== a &&
      Qt.test(e.type) &&
      (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
    e
  )
}
var re = $t
  ? function (t) {
      t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0)
    }
  : function (t) {
      ;(t.returnValue = !1), (t.cancelBubble = !0)
    }
function oe(t) {
  return 2 === t.which || 3 === t.which
}
var ae = (function () {
  function t() {
    this._track = []
  }
  return (
    (t.prototype.recognize = function (t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t)
    }),
    (t.prototype.clear = function () {
      return (this._track.length = 0), this
    }),
    (t.prototype._doTrack = function (t, e, n) {
      var i = t.touches
      if (i) {
        for (
          var r = { points: [], touches: [], target: e, event: t },
            o = 0,
            a = i.length;
          o < a;
          o++
        ) {
          var s = i[o],
            l = te(n, s, {})
          r.points.push([l.zrX, l.zrY]), r.touches.push(s)
        }
        this._track.push(r)
      }
    }),
    (t.prototype._recognize = function (t) {
      for (var e in le)
        if (le.hasOwnProperty(e)) {
          var n = le[e](this._track, t)
          if (n) return n
        }
    }),
    t
  )
})()
function se(t) {
  var e = t[1][0] - t[0][0],
    n = t[1][1] - t[0][1]
  return Math.sqrt(e * e + n * n)
}
var le = {
  pinch: function (t, e) {
    var n = t.length
    if (n) {
      var i,
        r = (t[n - 1] || {}).points,
        o = (t[n - 2] || {}).points || r
      if (o && o.length > 1 && r && r.length > 1) {
        var a = se(r) / se(o)
        !isFinite(a) && (a = 1), (e.pinchScale = a)
        var s = [((i = r)[0][0] + i[1][0]) / 2, (i[0][1] + i[1][1]) / 2]
        return (
          (e.pinchX = s[0]),
          (e.pinchY = s[1]),
          { type: 'pinch', target: t[0].target, event: e }
        )
      }
    }
  },
}
function ue() {
  re(this.event)
}
var he = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.handler = null), e
    }
    return (
      Tt(e, t),
      (e.prototype.dispose = function () {}),
      (e.prototype.setCursor = function () {}),
      e
    )
  })(Ut),
  ce = function (t, e) {
    ;(this.x = t), (this.y = e)
  },
  pe = [
    'click',
    'dblclick',
    'mousewheel',
    'mouseout',
    'mouseup',
    'mousedown',
    'mousemove',
    'contextmenu',
  ],
  fe = (function (t) {
    function e(e, n, i, r) {
      var o = t.call(this) || this
      return (
        (o._hovered = new ce(0, 0)),
        (o.storage = e),
        (o.painter = n),
        (o.painterRoot = r),
        (i = i || new he()),
        (o.proxy = null),
        o.setHandlerProxy(i),
        (o._draggingMgr = new Gt(o)),
        o
      )
    }
    return (
      Tt(e, t),
      (e.prototype.setHandlerProxy = function (t) {
        this.proxy && this.proxy.dispose(),
          t &&
            (U(
              pe,
              function (e) {
                t.on && t.on(e, this[e], this)
              },
              this
            ),
            (t.handler = this)),
          (this.proxy = t)
      }),
      (e.prototype.mousemove = function (t) {
        var e = t.zrX,
          n = t.zrY,
          i = ge(this, e, n),
          r = this._hovered,
          o = r.target
        o && !o.__zr && (o = (r = this.findHover(r.x, r.y)).target)
        var a = (this._hovered = i ? new ce(e, n) : this.findHover(e, n)),
          s = a.target,
          l = this.proxy
        l.setCursor && l.setCursor(s ? s.cursor : 'default'),
          o && s !== o && this.dispatchToElement(r, 'mouseout', t),
          this.dispatchToElement(a, 'mousemove', t),
          s && s !== o && this.dispatchToElement(a, 'mouseover', t)
      }),
      (e.prototype.mouseout = function (t) {
        var e = t.zrEventControl
        'only_globalout' !== e &&
          this.dispatchToElement(this._hovered, 'mouseout', t),
          'no_globalout' !== e &&
            this.trigger('globalout', { type: 'globalout', event: t })
      }),
      (e.prototype.resize = function () {
        this._hovered = new ce(0, 0)
      }),
      (e.prototype.dispatch = function (t, e) {
        var n = this[t]
        n && n.call(this, e)
      }),
      (e.prototype.dispose = function () {
        this.proxy.dispose(),
          (this.storage = null),
          (this.proxy = null),
          (this.painter = null)
      }),
      (e.prototype.setCursorStyle = function (t) {
        var e = this.proxy
        e.setCursor && e.setCursor(t)
      }),
      (e.prototype.dispatchToElement = function (t, e, n) {
        var i = (t = t || {}).target
        if (!i || !i.silent) {
          for (
            var r = 'on' + e,
              o = (function (t, e, n) {
                return {
                  type: t,
                  event: n,
                  target: e.target,
                  topTarget: e.topTarget,
                  cancelBubble: !1,
                  offsetX: n.zrX,
                  offsetY: n.zrY,
                  gestureEvent: n.gestureEvent,
                  pinchX: n.pinchX,
                  pinchY: n.pinchY,
                  pinchScale: n.pinchScale,
                  wheelDelta: n.zrDelta,
                  zrByTouch: n.zrByTouch,
                  which: n.which,
                  stop: ue,
                }
              })(e, t, n);
            i &&
            (i[r] && (o.cancelBubble = !!i[r].call(i, o)),
            i.trigger(e, o),
            (i = i.__hostTarget ? i.__hostTarget : i.parent),
            !o.cancelBubble);

          );
          o.cancelBubble ||
            (this.trigger(e, o),
            this.painter &&
              this.painter.eachOtherLayer &&
              this.painter.eachOtherLayer(function (t) {
                'function' == typeof t[r] && t[r].call(t, o),
                  t.trigger && t.trigger(e, o)
              }))
        }
      }),
      (e.prototype.findHover = function (t, e, n) {
        for (
          var i = this.storage.getDisplayList(),
            r = new ce(t, e),
            o = i.length - 1;
          o >= 0;
          o--
        ) {
          var a = void 0
          if (
            i[o] !== n &&
            !i[o].ignore &&
            (a = de(i[o], t, e)) &&
            (!r.topTarget && (r.topTarget = i[o]), 'silent' !== a)
          ) {
            r.target = i[o]
            break
          }
        }
        return r
      }),
      (e.prototype.processGesture = function (t, e) {
        this._gestureMgr || (this._gestureMgr = new ae())
        var n = this._gestureMgr
        'start' === e && n.clear()
        var i = n.recognize(
          t,
          this.findHover(t.zrX, t.zrY, null).target,
          this.proxy.dom
        )
        if (('end' === e && n.clear(), i)) {
          var r = i.type
          t.gestureEvent = r
          var o = new ce()
          ;(o.target = i.target), this.dispatchToElement(o, r, i.event)
        }
      }),
      e
    )
  })(Ut)
function de(t, e, n) {
  if (t[t.rectHover ? 'rectContain' : 'contain'](e, n)) {
    for (var i = t, r = void 0, o = !1; i; ) {
      if ((i.ignoreClip && (o = !0), !o)) {
        var a = i.getClipPath()
        if (a && !a.contain(e, n)) return !1
        i.silent && (r = !0)
      }
      var s = i.__hostTarget
      i = s || i.parent
    }
    return !r || 'silent'
  }
  return !1
}
function ge(t, e, n) {
  var i = t.painter
  return e < 0 || e > i.getWidth() || n < 0 || n > i.getHeight()
}
U(
  ['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'],
  function (t) {
    fe.prototype[t] = function (e) {
      var n,
        i,
        r = e.zrX,
        o = e.zrY,
        a = ge(this, r, o)
      if (
        (('mouseup' === t && a) || (i = (n = this.findHover(r, o)).target),
        'mousedown' === t)
      )
        (this._downEl = i), (this._downPoint = [e.zrX, e.zrY]), (this._upEl = i)
      else if ('mouseup' === t) this._upEl = i
      else if ('click' === t) {
        if (
          this._downEl !== this._upEl ||
          !this._downPoint ||
          zt(this._downPoint, [e.zrX, e.zrY]) > 4
        )
          return
        this._downPoint = null
      }
      this.dispatchToElement(n, t, e)
    }
  }
)
var ye = fe
function ve(t, e, n, i) {
  var r = e + 1
  if (r === n) return 1
  if (i(t[r++], t[e]) < 0) {
    for (; r < n && i(t[r], t[r - 1]) < 0; ) r++
    !(function (t, e, n) {
      n--
      for (; e < n; ) {
        var i = t[e]
        ;(t[e++] = t[n]), (t[n--] = i)
      }
    })(t, e, r)
  } else for (; r < n && i(t[r], t[r - 1]) >= 0; ) r++
  return r - e
}
function me(t, e, n, i, r) {
  for (i === e && i++; i < n; i++) {
    for (var o, a = t[i], s = e, l = i; s < l; )
      r(a, t[(o = (s + l) >>> 1)]) < 0 ? (l = o) : (s = o + 1)
    var u = i - s
    switch (u) {
      case 3:
        t[s + 3] = t[s + 2]
      case 2:
        t[s + 2] = t[s + 1]
      case 1:
        t[s + 1] = t[s]
        break
      default:
        for (; u > 0; ) (t[s + u] = t[s + u - 1]), u--
    }
    t[s] = a
  }
}
function _e(t, e, n, i, r, o) {
  var a = 0,
    s = 0,
    l = 1
  if (o(t, e[n + r]) > 0) {
    for (s = i - r; l < s && o(t, e[n + r + l]) > 0; )
      (a = l), (l = 1 + (l << 1)) <= 0 && (l = s)
    l > s && (l = s), (a += r), (l += r)
  } else {
    for (s = r + 1; l < s && o(t, e[n + r - l]) <= 0; )
      (a = l), (l = 1 + (l << 1)) <= 0 && (l = s)
    l > s && (l = s)
    var u = a
    ;(a = r - l), (l = r - u)
  }
  for (a++; a < l; ) {
    var h = a + ((l - a) >>> 1)
    o(t, e[n + h]) > 0 ? (a = h + 1) : (l = h)
  }
  return l
}
function xe(t, e, n, i, r, o) {
  var a = 0,
    s = 0,
    l = 1
  if (o(t, e[n + r]) < 0) {
    for (s = r + 1; l < s && o(t, e[n + r - l]) < 0; )
      (a = l), (l = 1 + (l << 1)) <= 0 && (l = s)
    l > s && (l = s)
    var u = a
    ;(a = r - l), (l = r - u)
  } else {
    for (s = i - r; l < s && o(t, e[n + r + l]) >= 0; )
      (a = l), (l = 1 + (l << 1)) <= 0 && (l = s)
    l > s && (l = s), (a += r), (l += r)
  }
  for (a++; a < l; ) {
    var h = a + ((l - a) >>> 1)
    o(t, e[n + h]) < 0 ? (l = h) : (a = h + 1)
  }
  return l
}
function we(t, e) {
  var n,
    i,
    r = 7,
    o = 0,
    a = []
  function s(s) {
    var l = n[s],
      u = i[s],
      h = n[s + 1],
      c = i[s + 1]
    ;(i[s] = u + c),
      s === o - 3 && ((n[s + 1] = n[s + 2]), (i[s + 1] = i[s + 2])),
      o--
    var p = xe(t[h], t, l, u, 0, e)
    ;(l += p),
      0 !== (u -= p) &&
        0 !== (c = _e(t[l + u - 1], t, h, c, c - 1, e)) &&
        (u <= c
          ? (function (n, i, o, s) {
              var l = 0
              for (l = 0; l < i; l++) a[l] = t[n + l]
              var u = 0,
                h = o,
                c = n
              if (((t[c++] = t[h++]), 0 == --s)) {
                for (l = 0; l < i; l++) t[c + l] = a[u + l]
                return
              }
              if (1 === i) {
                for (l = 0; l < s; l++) t[c + l] = t[h + l]
                return void (t[c + s] = a[u])
              }
              var p,
                f,
                d,
                g = r
              for (;;) {
                ;(p = 0), (f = 0), (d = !1)
                do {
                  if (e(t[h], a[u]) < 0) {
                    if (((t[c++] = t[h++]), f++, (p = 0), 0 == --s)) {
                      d = !0
                      break
                    }
                  } else if (((t[c++] = a[u++]), p++, (f = 0), 1 == --i)) {
                    d = !0
                    break
                  }
                } while ((p | f) < g)
                if (d) break
                do {
                  if (0 !== (p = xe(t[h], a, u, i, 0, e))) {
                    for (l = 0; l < p; l++) t[c + l] = a[u + l]
                    if (((c += p), (u += p), (i -= p) <= 1)) {
                      d = !0
                      break
                    }
                  }
                  if (((t[c++] = t[h++]), 0 == --s)) {
                    d = !0
                    break
                  }
                  if (0 !== (f = _e(a[u], t, h, s, 0, e))) {
                    for (l = 0; l < f; l++) t[c + l] = t[h + l]
                    if (((c += f), (h += f), 0 === (s -= f))) {
                      d = !0
                      break
                    }
                  }
                  if (((t[c++] = a[u++]), 1 == --i)) {
                    d = !0
                    break
                  }
                  g--
                } while (p >= 7 || f >= 7)
                if (d) break
                g < 0 && (g = 0), (g += 2)
              }
              if (((r = g) < 1 && (r = 1), 1 === i)) {
                for (l = 0; l < s; l++) t[c + l] = t[h + l]
                t[c + s] = a[u]
              } else {
                if (0 === i) throw new Error()
                for (l = 0; l < i; l++) t[c + l] = a[u + l]
              }
            })(l, u, h, c)
          : (function (n, i, o, s) {
              var l = 0
              for (l = 0; l < s; l++) a[l] = t[o + l]
              var u = n + i - 1,
                h = s - 1,
                c = o + s - 1,
                p = 0,
                f = 0
              if (((t[c--] = t[u--]), 0 == --i)) {
                for (p = c - (s - 1), l = 0; l < s; l++) t[p + l] = a[l]
                return
              }
              if (1 === s) {
                for (f = (c -= i) + 1, p = (u -= i) + 1, l = i - 1; l >= 0; l--)
                  t[f + l] = t[p + l]
                return void (t[c] = a[h])
              }
              var d = r
              for (;;) {
                var g = 0,
                  y = 0,
                  v = !1
                do {
                  if (e(a[h], t[u]) < 0) {
                    if (((t[c--] = t[u--]), g++, (y = 0), 0 == --i)) {
                      v = !0
                      break
                    }
                  } else if (((t[c--] = a[h--]), y++, (g = 0), 1 == --s)) {
                    v = !0
                    break
                  }
                } while ((g | y) < d)
                if (v) break
                do {
                  if (0 !== (g = i - xe(a[h], t, n, i, i - 1, e))) {
                    for (
                      i -= g, f = (c -= g) + 1, p = (u -= g) + 1, l = g - 1;
                      l >= 0;
                      l--
                    )
                      t[f + l] = t[p + l]
                    if (0 === i) {
                      v = !0
                      break
                    }
                  }
                  if (((t[c--] = a[h--]), 1 == --s)) {
                    v = !0
                    break
                  }
                  if (0 !== (y = s - _e(t[u], a, 0, s, s - 1, e))) {
                    for (
                      s -= y, f = (c -= y) + 1, p = (h -= y) + 1, l = 0;
                      l < y;
                      l++
                    )
                      t[f + l] = a[p + l]
                    if (s <= 1) {
                      v = !0
                      break
                    }
                  }
                  if (((t[c--] = t[u--]), 0 == --i)) {
                    v = !0
                    break
                  }
                  d--
                } while (g >= 7 || y >= 7)
                if (v) break
                d < 0 && (d = 0), (d += 2)
              }
              ;(r = d) < 1 && (r = 1)
              if (1 === s) {
                for (f = (c -= i) + 1, p = (u -= i) + 1, l = i - 1; l >= 0; l--)
                  t[f + l] = t[p + l]
                t[c] = a[h]
              } else {
                if (0 === s) throw new Error()
                for (p = c - (s - 1), l = 0; l < s; l++) t[p + l] = a[l]
              }
            })(l, u, h, c))
  }
  return (
    (n = []),
    (i = []),
    {
      mergeRuns: function () {
        for (; o > 1; ) {
          var t = o - 2
          if (
            (t >= 1 && i[t - 1] <= i[t] + i[t + 1]) ||
            (t >= 2 && i[t - 2] <= i[t] + i[t - 1])
          )
            i[t - 1] < i[t + 1] && t--
          else if (i[t] > i[t + 1]) break
          s(t)
        }
      },
      forceMergeRuns: function () {
        for (; o > 1; ) {
          var t = o - 2
          t > 0 && i[t - 1] < i[t + 1] && t--, s(t)
        }
      },
      pushRun: function (t, e) {
        ;(n[o] = t), (i[o] = e), (o += 1)
      },
    }
  )
}
function be(t, e, n, i) {
  n || (n = 0), i || (i = t.length)
  var r = i - n
  if (!(r < 2)) {
    var o = 0
    if (r < 32) me(t, n, i, n + (o = ve(t, n, i, e)), e)
    else {
      var a = we(t, e),
        s = (function (t) {
          for (var e = 0; t >= 32; ) (e |= 1 & t), (t >>= 1)
          return t + e
        })(r)
      do {
        if ((o = ve(t, n, i, e)) < s) {
          var l = r
          l > s && (l = s), me(t, n, n + l, n + o, e), (o = l)
        }
        a.pushRun(n, o), a.mergeRuns(), (r -= o), (n += o)
      } while (0 !== r)
      a.forceMergeRuns()
    }
  }
}
var Se = !1
function Te() {
  Se ||
    ((Se = !0),
    console.warn(
      'z / z2 / zlevel of displayable is invalid, which may cause unexpected errors'
    ))
}
function Me(t, e) {
  return t.zlevel === e.zlevel
    ? t.z === e.z
      ? t.z2 - e.z2
      : t.z - e.z
    : t.zlevel - e.zlevel
}
var Ce = (function () {
    function t() {
      ;(this._roots = []),
        (this._displayList = []),
        (this._displayListLen = 0),
        (this.displayableSortFunc = Me)
    }
    return (
      (t.prototype.traverse = function (t, e) {
        for (var n = 0; n < this._roots.length; n++)
          this._roots[n].traverse(t, e)
      }),
      (t.prototype.getDisplayList = function (t, e) {
        e = e || !1
        var n = this._displayList
        return (!t && n.length) || this.updateDisplayList(e), n
      }),
      (t.prototype.updateDisplayList = function (t) {
        this._displayListLen = 0
        for (
          var e = this._roots, n = this._displayList, i = 0, r = e.length;
          i < r;
          i++
        )
          this._updateAndAddDisplayable(e[i], null, t)
        ;(n.length = this._displayListLen), x.canvasSupported && be(n, Me)
      }),
      (t.prototype._updateAndAddDisplayable = function (t, e, n) {
        if (!t.ignore || n) {
          t.beforeUpdate(), t.update(), t.afterUpdate()
          var i = t.getClipPath()
          if (t.ignoreClip) e = null
          else if (i) {
            e = e ? e.slice() : []
            for (var r = i, o = t; r; )
              (r.parent = o),
                r.updateTransform(),
                e.push(r),
                (o = r),
                (r = r.getClipPath())
          }
          if (t.childrenRef) {
            for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
              var l = a[s]
              t.__dirty && (l.__dirty |= 1),
                this._updateAndAddDisplayable(l, e, n)
            }
            t.__dirty = 0
          } else {
            var u = t
            e && e.length
              ? (u.__clipPaths = e)
              : u.__clipPaths &&
                u.__clipPaths.length > 0 &&
                (u.__clipPaths = []),
              isNaN(u.z) && (Te(), (u.z = 0)),
              isNaN(u.z2) && (Te(), (u.z2 = 0)),
              isNaN(u.zlevel) && (Te(), (u.zlevel = 0)),
              (this._displayList[this._displayListLen++] = u)
          }
          var h = t.getDecalElement && t.getDecalElement()
          h && this._updateAndAddDisplayable(h, e, n)
          var c = t.getTextGuideLine()
          c && this._updateAndAddDisplayable(c, e, n)
          var p = t.getTextContent()
          p && this._updateAndAddDisplayable(p, e, n)
        }
      }),
      (t.prototype.addRoot = function (t) {
        ;(t.__zr && t.__zr.storage === this) || this._roots.push(t)
      }),
      (t.prototype.delRoot = function (t) {
        if (t instanceof Array)
          for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e])
        else {
          var i = V(this._roots, t)
          i >= 0 && this._roots.splice(i, 1)
        }
      }),
      (t.prototype.delAllRoots = function () {
        ;(this._roots = []),
          (this._displayList = []),
          (this._displayListLen = 0)
      }),
      (t.prototype.getRoots = function () {
        return this._roots
      }),
      (t.prototype.dispose = function () {
        ;(this._displayList = null), (this._roots = null)
      }),
      t
    )
  })(),
  ke =
    ('undefined' != typeof window &&
      ((window.requestAnimationFrame &&
        window.requestAnimationFrame.bind(window)) ||
        (window.msRequestAnimationFrame &&
          window.msRequestAnimationFrame.bind(window)) ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame)) ||
    function (t) {
      return setTimeout(t, 16)
    },
  Ie = {
    linear: function (t) {
      return t
    },
    quadraticIn: function (t) {
      return t * t
    },
    quadraticOut: function (t) {
      return t * (2 - t)
    },
    quadraticInOut: function (t) {
      return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)
    },
    cubicIn: function (t) {
      return t * t * t
    },
    cubicOut: function (t) {
      return --t * t * t + 1
    },
    cubicInOut: function (t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)
    },
    quarticIn: function (t) {
      return t * t * t * t
    },
    quarticOut: function (t) {
      return 1 - --t * t * t * t
    },
    quarticInOut: function (t) {
      return (t *= 2) < 1
        ? 0.5 * t * t * t * t
        : -0.5 * ((t -= 2) * t * t * t - 2)
    },
    quinticIn: function (t) {
      return t * t * t * t * t
    },
    quinticOut: function (t) {
      return --t * t * t * t * t + 1
    },
    quinticInOut: function (t) {
      return (t *= 2) < 1
        ? 0.5 * t * t * t * t * t
        : 0.5 * ((t -= 2) * t * t * t * t + 2)
    },
    sinusoidalIn: function (t) {
      return 1 - Math.cos((t * Math.PI) / 2)
    },
    sinusoidalOut: function (t) {
      return Math.sin((t * Math.PI) / 2)
    },
    sinusoidalInOut: function (t) {
      return 0.5 * (1 - Math.cos(Math.PI * t))
    },
    exponentialIn: function (t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1)
    },
    exponentialOut: function (t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    },
    exponentialInOut: function (t) {
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : (t *= 2) < 1
        ? 0.5 * Math.pow(1024, t - 1)
        : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
    },
    circularIn: function (t) {
      return 1 - Math.sqrt(1 - t * t)
    },
    circularOut: function (t) {
      return Math.sqrt(1 - --t * t)
    },
    circularInOut: function (t) {
      return (t *= 2) < 1
        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    },
    elasticIn: function (t) {
      var e,
        n = 0.1
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : (!n || n < 1
            ? ((n = 1), (e = 0.1))
            : (e = (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
          -n *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t - e) * (2 * Math.PI)) / 0.4))
    },
    elasticOut: function (t) {
      var e,
        n = 0.1
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : (!n || n < 1
            ? ((n = 1), (e = 0.1))
            : (e = (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
          n * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / 0.4) +
            1)
    },
    elasticInOut: function (t) {
      var e,
        n = 0.1,
        i = 0.4
      return 0 === t
        ? 0
        : 1 === t
        ? 1
        : (!n || n < 1
            ? ((n = 1), (e = 0.1))
            : (e = (i * Math.asin(1 / n)) / (2 * Math.PI)),
          (t *= 2) < 1
            ? n *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t - e) * (2 * Math.PI)) / i) *
              -0.5
            : n *
                Math.pow(2, -10 * (t -= 1)) *
                Math.sin(((t - e) * (2 * Math.PI)) / i) *
                0.5 +
              1)
    },
    backIn: function (t) {
      var e = 1.70158
      return t * t * ((e + 1) * t - e)
    },
    backOut: function (t) {
      var e = 1.70158
      return --t * t * ((e + 1) * t + e) + 1
    },
    backInOut: function (t) {
      var e = 2.5949095
      return (t *= 2) < 1
        ? t * t * ((e + 1) * t - e) * 0.5
        : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
    },
    bounceIn: function (t) {
      return 1 - Ie.bounceOut(1 - t)
    },
    bounceOut: function (t) {
      return t < 1 / 2.75
        ? 7.5625 * t * t
        : t < 2 / 2.75
        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
        : t < 2.5 / 2.75
        ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
        : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
    },
    bounceInOut: function (t) {
      return t < 0.5
        ? 0.5 * Ie.bounceIn(2 * t)
        : 0.5 * Ie.bounceOut(2 * t - 1) + 0.5
    },
  },
  De = Ie,
  Ae = (function () {
    function t(t) {
      ;(this._initialized = !1),
        (this._startTime = 0),
        (this._pausedTime = 0),
        (this._paused = !1),
        (this._life = t.life || 1e3),
        (this._delay = t.delay || 0),
        (this.loop = null != t.loop && t.loop),
        (this.gap = t.gap || 0),
        (this.easing = t.easing || 'linear'),
        (this.onframe = t.onframe),
        (this.ondestroy = t.ondestroy),
        (this.onrestart = t.onrestart)
    }
    return (
      (t.prototype.step = function (t, e) {
        if (
          (this._initialized ||
            ((this._startTime = t + this._delay), (this._initialized = !0)),
          !this._paused)
        ) {
          var n = (t - this._startTime - this._pausedTime) / this._life
          n < 0 && (n = 0), (n = Math.min(n, 1))
          var i = this.easing,
            r = 'string' == typeof i ? De[i] : i,
            o = 'function' == typeof r ? r(n) : n
          if ((this.onframe && this.onframe(o), 1 === n)) {
            if (!this.loop) return !0
            this._restart(t), this.onrestart && this.onrestart()
          }
          return !1
        }
        this._pausedTime += e
      }),
      (t.prototype._restart = function (t) {
        var e = (t - this._startTime - this._pausedTime) % this._life
        ;(this._startTime = t - e + this.gap), (this._pausedTime = 0)
      }),
      (t.prototype.pause = function () {
        this._paused = !0
      }),
      (t.prototype.resume = function () {
        this._paused = !1
      }),
      t
    )
  })(),
  Pe = function (t) {
    this.value = t
  },
  Oe = (function () {
    function t() {
      this._len = 0
    }
    return (
      (t.prototype.insert = function (t) {
        var e = new Pe(t)
        return this.insertEntry(e), e
      }),
      (t.prototype.insertEntry = function (t) {
        this.head
          ? ((this.tail.next = t),
            (t.prev = this.tail),
            (t.next = null),
            (this.tail = t))
          : (this.head = this.tail = t),
          this._len++
      }),
      (t.prototype.remove = function (t) {
        var e = t.prev,
          n = t.next
        e ? (e.next = n) : (this.head = n),
          n ? (n.prev = e) : (this.tail = e),
          (t.next = t.prev = null),
          this._len--
      }),
      (t.prototype.len = function () {
        return this._len
      }),
      (t.prototype.clear = function () {
        ;(this.head = this.tail = null), (this._len = 0)
      }),
      t
    )
  })(),
  Le = (function () {
    function t(t) {
      ;(this._list = new Oe()),
        (this._maxSize = 10),
        (this._map = {}),
        (this._maxSize = t)
    }
    return (
      (t.prototype.put = function (t, e) {
        var n = this._list,
          i = this._map,
          r = null
        if (null == i[t]) {
          var o = n.len(),
            a = this._lastRemovedEntry
          if (o >= this._maxSize && o > 0) {
            var s = n.head
            n.remove(s),
              delete i[s.key],
              (r = s.value),
              (this._lastRemovedEntry = s)
          }
          a ? (a.value = e) : (a = new Pe(e)),
            (a.key = t),
            n.insertEntry(a),
            (i[t] = a)
        }
        return r
      }),
      (t.prototype.get = function (t) {
        var e = this._map[t],
          n = this._list
        if (null != e)
          return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value
      }),
      (t.prototype.clear = function () {
        this._list.clear(), (this._map = {})
      }),
      (t.prototype.len = function () {
        return this._list.len()
      }),
      t
    )
  })(),
  Re = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1],
  }
function Be(t) {
  return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
}
function ze(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t
}
function Ee(t) {
  var e = t
  return e.length && '%' === e.charAt(e.length - 1)
    ? Be((parseFloat(e) / 100) * 255)
    : Be(parseInt(e, 10))
}
function Ne(t) {
  var e = t
  return e.length && '%' === e.charAt(e.length - 1)
    ? ze(parseFloat(e) / 100)
    : ze(parseFloat(e))
}
function Fe(t, e, n) {
  return (
    n < 0 ? (n += 1) : n > 1 && (n -= 1),
    6 * n < 1
      ? t + (e - t) * n * 6
      : 2 * n < 1
      ? e
      : 3 * n < 2
      ? t + (e - t) * (2 / 3 - n) * 6
      : t
  )
}
function He(t, e, n) {
  return t + (e - t) * n
}
function Ve(t, e, n, i, r) {
  return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), t
}
function We(t, e) {
  return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t
}
var Ge = new Le(20),
  Ue = null
function Xe(t, e) {
  Ue && We(Ue, e), (Ue = Ge.put(t, Ue || e.slice()))
}
function Ye(t, e) {
  if (t) {
    e = e || []
    var n = Ge.get(t)
    if (n) return We(e, n)
    var i = (t += '').replace(/ /g, '').toLowerCase()
    if (i in Re) return We(e, Re[i]), Xe(t, e), e
    var r,
      o = i.length
    if ('#' === i.charAt(0))
      return 4 === o || 5 === o
        ? (r = parseInt(i.slice(1, 4), 16)) >= 0 && r <= 4095
          ? (Ve(
              e,
              ((3840 & r) >> 4) | ((3840 & r) >> 8),
              (240 & r) | ((240 & r) >> 4),
              (15 & r) | ((15 & r) << 4),
              5 === o ? parseInt(i.slice(4), 16) / 15 : 1
            ),
            Xe(t, e),
            e)
          : void Ve(e, 0, 0, 0, 1)
        : 7 === o || 9 === o
        ? (r = parseInt(i.slice(1, 7), 16)) >= 0 && r <= 16777215
          ? (Ve(
              e,
              (16711680 & r) >> 16,
              (65280 & r) >> 8,
              255 & r,
              9 === o ? parseInt(i.slice(7), 16) / 255 : 1
            ),
            Xe(t, e),
            e)
          : void Ve(e, 0, 0, 0, 1)
        : void 0
    var a = i.indexOf('('),
      s = i.indexOf(')')
    if (-1 !== a && s + 1 === o) {
      var l = i.substr(0, a),
        u = i.substr(a + 1, s - (a + 1)).split(','),
        h = 1
      switch (l) {
        case 'rgba':
          if (4 !== u.length)
            return 3 === u.length
              ? Ve(e, +u[0], +u[1], +u[2], 1)
              : Ve(e, 0, 0, 0, 1)
          h = Ne(u.pop())
        case 'rgb':
          return 3 !== u.length
            ? void Ve(e, 0, 0, 0, 1)
            : (Ve(e, Ee(u[0]), Ee(u[1]), Ee(u[2]), h), Xe(t, e), e)
        case 'hsla':
          return 4 !== u.length
            ? void Ve(e, 0, 0, 0, 1)
            : ((u[3] = Ne(u[3])), je(u, e), Xe(t, e), e)
        case 'hsl':
          return 3 !== u.length
            ? void Ve(e, 0, 0, 0, 1)
            : (je(u, e), Xe(t, e), e)
        default:
          return
      }
    }
    Ve(e, 0, 0, 0, 1)
  }
}
function je(t, e) {
  var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
    i = Ne(t[1]),
    r = Ne(t[2]),
    o = r <= 0.5 ? r * (i + 1) : r + i - r * i,
    a = 2 * r - o
  return (
    Ve(
      (e = e || []),
      Be(255 * Fe(a, o, n + 1 / 3)),
      Be(255 * Fe(a, o, n)),
      Be(255 * Fe(a, o, n - 1 / 3)),
      1
    ),
    4 === t.length && (e[3] = t[3]),
    e
  )
}
function qe(t, e) {
  var n = Ye(t)
  if (n) {
    for (var i = 0; i < 3; i++)
      (n[i] = e < 0 ? (n[i] * (1 - e)) | 0 : ((255 - n[i]) * e + n[i]) | 0),
        n[i] > 255 ? (n[i] = 255) : n[i] < 0 && (n[i] = 0)
    return Qe(n, 4 === n.length ? 'rgba' : 'rgb')
  }
}
function Ze(t, e, n) {
  if (e && e.length && t >= 0 && t <= 1) {
    n = n || []
    var i = t * (e.length - 1),
      r = Math.floor(i),
      o = Math.ceil(i),
      a = e[r],
      s = e[o],
      l = i - r
    return (
      (n[0] = Be(He(a[0], s[0], l))),
      (n[1] = Be(He(a[1], s[1], l))),
      (n[2] = Be(He(a[2], s[2], l))),
      (n[3] = ze(He(a[3], s[3], l))),
      n
    )
  }
}
function Ke(t, e, n, i) {
  var r = Ye(t)
  if (t)
    return (
      (r = (function (t) {
        if (t) {
          var e,
            n,
            i = t[0] / 255,
            r = t[1] / 255,
            o = t[2] / 255,
            a = Math.min(i, r, o),
            s = Math.max(i, r, o),
            l = s - a,
            u = (s + a) / 2
          if (0 === l) (e = 0), (n = 0)
          else {
            n = u < 0.5 ? l / (s + a) : l / (2 - s - a)
            var h = ((s - i) / 6 + l / 2) / l,
              c = ((s - r) / 6 + l / 2) / l,
              p = ((s - o) / 6 + l / 2) / l
            i === s
              ? (e = p - c)
              : r === s
              ? (e = 1 / 3 + h - p)
              : o === s && (e = 2 / 3 + c - h),
              e < 0 && (e += 1),
              e > 1 && (e -= 1)
          }
          var f = [360 * e, n, u]
          return null != t[3] && f.push(t[3]), f
        }
      })(r)),
      null != e &&
        (r[0] = (function (t) {
          return (t = Math.round(t)) < 0 ? 0 : t > 360 ? 360 : t
        })(e)),
      null != n && (r[1] = Ne(n)),
      null != i && (r[2] = Ne(i)),
      Qe(je(r), 'rgba')
    )
}
function $e(t, e) {
  var n = Ye(t)
  if (n && null != e) return (n[3] = ze(e)), Qe(n, 'rgba')
}
function Qe(t, e) {
  if (t && t.length) {
    var n = t[0] + ',' + t[1] + ',' + t[2]
    return (
      ('rgba' !== e && 'hsva' !== e && 'hsla' !== e) || (n += ',' + t[3]),
      e + '(' + n + ')'
    )
  }
}
function Je(t, e) {
  var n = Ye(t)
  return n
    ? ((0.299 * n[0] + 0.587 * n[1] + 0.114 * n[2]) * n[3]) / 255 +
        (1 - n[3]) * e
    : 0
}
var tn = Array.prototype.slice
function en(t, e, n) {
  return (e - t) * n + t
}
function nn(t, e, n, i) {
  for (var r = e.length, o = 0; o < r; o++) t[o] = en(e[o], n[o], i)
}
function rn(t, e, n, i) {
  for (var r = e.length, o = 0; o < r; o++) t[o] = e[o] + n[o] * i
  return t
}
function on(t, e, n, i) {
  for (var r = e.length, o = r && e[0].length, a = 0; a < r; a++) {
    t[a] || (t[a] = [])
    for (var s = 0; s < o; s++) t[a][s] = e[a][s] + n[a][s] * i
  }
  return t
}
function an(t, e, n) {
  var i = t,
    r = e
  if (i.push && r.push) {
    var o = i.length,
      a = r.length
    if (o !== a)
      if (o > a) i.length = a
      else for (var s = o; s < a; s++) i.push(1 === n ? r[s] : tn.call(r[s]))
    var l = i[0] && i[0].length
    for (s = 0; s < i.length; s++)
      if (1 === n) isNaN(i[s]) && (i[s] = r[s])
      else for (var u = 0; u < l; u++) isNaN(i[s][u]) && (i[s][u] = r[s][u])
  }
}
function sn(t, e) {
  var n = t.length
  if (n !== e.length) return !1
  for (var i = 0; i < n; i++) if (t[i] !== e[i]) return !1
  return !0
}
function ln(t, e, n, i, r, o, a) {
  var s = 0.5 * (n - t),
    l = 0.5 * (i - e)
  return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
}
function un(t, e, n, i, r, o, a, s) {
  for (var l = e.length, u = 0; u < l; u++)
    t[u] = ln(e[u], n[u], i[u], r[u], o, a, s)
}
function hn(t) {
  if (G(t)) {
    var e = t.length
    if (G(t[0])) {
      for (var n = [], i = 0; i < e; i++) n.push(tn.call(t[i]))
      return n
    }
    return tn.call(t)
  }
  return t
}
function cn(t) {
  return (
    (t[0] = Math.floor(t[0])),
    (t[1] = Math.floor(t[1])),
    (t[2] = Math.floor(t[2])),
    'rgba(' + t.join(',') + ')'
  )
}
var pn,
  fn,
  dn = [0, 0, 0, 0],
  gn = (function () {
    function t(t) {
      ;(this.keyframes = []),
        (this.maxTime = 0),
        (this.arrDim = 0),
        (this.interpolable = !0),
        (this._needsSort = !1),
        (this._isAllValueEqual = !0),
        (this._lastFrame = 0),
        (this._lastFramePercent = 0),
        (this.propName = t)
    }
    return (
      (t.prototype.isFinished = function () {
        return this._finished
      }),
      (t.prototype.setFinished = function () {
        ;(this._finished = !0),
          this._additiveTrack && this._additiveTrack.setFinished()
      }),
      (t.prototype.needsAnimate = function () {
        return (
          !this._isAllValueEqual &&
          this.keyframes.length >= 2 &&
          this.interpolable &&
          this.maxTime > 0
        )
      }),
      (t.prototype.getAdditiveTrack = function () {
        return this._additiveTrack
      }),
      (t.prototype.addKeyframe = function (t, e) {
        t >= this.maxTime ? (this.maxTime = t) : (this._needsSort = !0)
        var n = this.keyframes,
          i = n.length
        if (this.interpolable)
          if (G(e)) {
            var r = (function (t) {
              return G(t && t[0]) ? 2 : 1
            })(e)
            if (i > 0 && this.arrDim !== r) return void (this.interpolable = !1)
            if (
              (1 === r && 'number' != typeof e[0]) ||
              (2 === r && 'number' != typeof e[0][0])
            )
              return void (this.interpolable = !1)
            if (i > 0) {
              var o = n[i - 1]
              this._isAllValueEqual &&
                ((1 === r && sn(e, o.value)) || (this._isAllValueEqual = !1))
            }
            this.arrDim = r
          } else {
            if (this.arrDim > 0) return void (this.interpolable = !1)
            if ('string' == typeof e) {
              var a = Ye(e)
              a ? ((e = a), (this.isValueColor = !0)) : (this.interpolable = !1)
            } else if ('number' != typeof e || isNaN(e))
              return void (this.interpolable = !1)
            if (this._isAllValueEqual && i > 0) {
              o = n[i - 1]
              ;((this.isValueColor && !sn(o.value, e)) || o.value !== e) &&
                (this._isAllValueEqual = !1)
            }
          }
        var s = { time: t, value: e, percent: 0 }
        return this.keyframes.push(s), s
      }),
      (t.prototype.prepare = function (t) {
        var e = this.keyframes
        this._needsSort &&
          e.sort(function (t, e) {
            return t.time - e.time
          })
        for (var n = this.arrDim, i = e.length, r = e[i - 1], o = 0; o < i; o++)
          (e[o].percent = e[o].time / this.maxTime),
            n > 0 && o !== i - 1 && an(e[o].value, r.value, n)
        if (
          t &&
          this.needsAnimate() &&
          t.needsAnimate() &&
          n === t.arrDim &&
          this.isValueColor === t.isValueColor &&
          !t._finished
        ) {
          this._additiveTrack = t
          var a = e[0].value
          for (o = 0; o < i; o++)
            0 === n
              ? this.isValueColor
                ? (e[o].additiveValue = rn([], e[o].value, a, -1))
                : (e[o].additiveValue = e[o].value - a)
              : 1 === n
              ? (e[o].additiveValue = rn([], e[o].value, a, -1))
              : 2 === n && (e[o].additiveValue = on([], e[o].value, a, -1))
        }
      }),
      (t.prototype.step = function (t, e) {
        if (!this._finished) {
          this._additiveTrack &&
            this._additiveTrack._finished &&
            (this._additiveTrack = null)
          var n,
            i = null != this._additiveTrack,
            r = i ? 'additiveValue' : 'value',
            o = this.keyframes,
            a = this.keyframes.length,
            s = this.propName,
            l = this.arrDim,
            u = this.isValueColor
          if (e < 0) n = 0
          else if (e < this._lastFramePercent) {
            for (
              n = Math.min(this._lastFrame + 1, a - 1);
              n >= 0 && !(o[n].percent <= e);
              n--
            );
            n = Math.min(n, a - 2)
          } else {
            for (n = this._lastFrame; n < a && !(o[n].percent > e); n++);
            n = Math.min(n - 1, a - 2)
          }
          var h = o[n + 1],
            c = o[n]
          if (c && h) {
            ;(this._lastFrame = n), (this._lastFramePercent = e)
            var p = h.percent - c.percent
            if (0 !== p) {
              var f = (e - c.percent) / p,
                d = i ? this._additiveValue : u ? dn : t[s]
              if (
                ((l > 0 || u) && !d && (d = this._additiveValue = []),
                this.useSpline)
              ) {
                var g = o[n][r],
                  y = o[0 === n ? n : n - 1][r],
                  v = o[n > a - 2 ? a - 1 : n + 1][r],
                  m = o[n > a - 3 ? a - 1 : n + 2][r]
                if (l > 0)
                  1 === l
                    ? un(d, y, g, v, m, f, f * f, f * f * f)
                    : (function (t, e, n, i, r, o, a, s) {
                        for (
                          var l = e.length, u = e[0].length, h = 0;
                          h < l;
                          h++
                        ) {
                          t[h] || (t[1] = [])
                          for (var c = 0; c < u; c++)
                            t[h][c] = ln(
                              e[h][c],
                              n[h][c],
                              i[h][c],
                              r[h][c],
                              o,
                              a,
                              s
                            )
                        }
                      })(d, y, g, v, m, f, f * f, f * f * f)
                else if (u)
                  un(d, y, g, v, m, f, f * f, f * f * f), i || (t[s] = cn(d))
                else {
                  var _ = void 0
                  ;(_ = this.interpolable
                    ? ln(y, g, v, m, f, f * f, f * f * f)
                    : v),
                    i ? (this._additiveValue = _) : (t[s] = _)
                }
              } else if (l > 0)
                1 === l
                  ? nn(d, c[r], h[r], f)
                  : (function (t, e, n, i) {
                      for (
                        var r = e.length, o = r && e[0].length, a = 0;
                        a < r;
                        a++
                      ) {
                        t[a] || (t[a] = [])
                        for (var s = 0; s < o; s++)
                          t[a][s] = en(e[a][s], n[a][s], i)
                      }
                    })(d, c[r], h[r], f)
              else if (u) nn(d, c[r], h[r], f), i || (t[s] = cn(d))
              else {
                _ = void 0
                ;(_ = this.interpolable
                  ? en(c[r], h[r], f)
                  : (function (t, e, n) {
                      return n > 0.5 ? e : t
                    })(c[r], h[r], f)),
                  i ? (this._additiveValue = _) : (t[s] = _)
              }
              i && this._addToTarget(t)
            }
          }
        }
      }),
      (t.prototype._addToTarget = function (t) {
        var e = this.arrDim,
          n = this.propName,
          i = this._additiveValue
        0 === e
          ? this.isValueColor
            ? (Ye(t[n], dn), rn(dn, dn, i, 1), (t[n] = cn(dn)))
            : (t[n] = t[n] + i)
          : 1 === e
          ? rn(t[n], t[n], i, 1)
          : 2 === e && on(t[n], t[n], i, 1)
      }),
      t
    )
  })(),
  yn = (function () {
    function t(t, e, n) {
      ;(this._tracks = {}),
        (this._trackKeys = []),
        (this._delay = 0),
        (this._maxTime = 0),
        (this._paused = !1),
        (this._started = 0),
        (this._clip = null),
        (this._target = t),
        (this._loop = e),
        e && n
          ? R("Can' use additive animation on looped animation.")
          : (this._additiveAnimators = n)
    }
    return (
      (t.prototype.getTarget = function () {
        return this._target
      }),
      (t.prototype.changeTarget = function (t) {
        this._target = t
      }),
      (t.prototype.when = function (t, e) {
        return this.whenWithKeys(t, e, Z(e))
      }),
      (t.prototype.whenWithKeys = function (t, e, n) {
        for (var i = this._tracks, r = 0; r < n.length; r++) {
          var o = n[r],
            a = i[o]
          if (!a) {
            a = i[o] = new gn(o)
            var s = void 0,
              l = this._getAdditiveTrack(o)
            if (l) {
              var u = l.keyframes[l.keyframes.length - 1]
              ;(s = u && u.value), l.isValueColor && s && (s = cn(s))
            } else s = this._target[o]
            if (null == s) continue
            0 !== t && a.addKeyframe(0, hn(s)), this._trackKeys.push(o)
          }
          a.addKeyframe(t, hn(e[o]))
        }
        return (this._maxTime = Math.max(this._maxTime, t)), this
      }),
      (t.prototype.pause = function () {
        this._clip.pause(), (this._paused = !0)
      }),
      (t.prototype.resume = function () {
        this._clip.resume(), (this._paused = !1)
      }),
      (t.prototype.isPaused = function () {
        return !!this._paused
      }),
      (t.prototype._doneCallback = function () {
        this._setTracksFinished(), (this._clip = null)
        var t = this._doneCbs
        if (t) for (var e = t.length, n = 0; n < e; n++) t[n].call(this)
      }),
      (t.prototype._abortedCallback = function () {
        this._setTracksFinished()
        var t = this.animation,
          e = this._abortedCbs
        if ((t && t.removeClip(this._clip), (this._clip = null), e))
          for (var n = 0; n < e.length; n++) e[n].call(this)
      }),
      (t.prototype._setTracksFinished = function () {
        for (
          var t = this._tracks, e = this._trackKeys, n = 0;
          n < e.length;
          n++
        )
          t[e[n]].setFinished()
      }),
      (t.prototype._getAdditiveTrack = function (t) {
        var e,
          n = this._additiveAnimators
        if (n)
          for (var i = 0; i < n.length; i++) {
            var r = n[i].getTrack(t)
            r && (e = r)
          }
        return e
      }),
      (t.prototype.start = function (t, e) {
        if (!(this._started > 0)) {
          this._started = 1
          for (var n = this, i = [], r = 0; r < this._trackKeys.length; r++) {
            var o = this._trackKeys[r],
              a = this._tracks[o],
              s = this._getAdditiveTrack(o),
              l = a.keyframes
            if ((a.prepare(s), a.needsAnimate())) i.push(a)
            else if (!a.interpolable) {
              var u = l[l.length - 1]
              u && (n._target[a.propName] = u.value)
            }
          }
          if (i.length || e) {
            var h = new Ae({
              life: this._maxTime,
              loop: this._loop,
              delay: this._delay,
              onframe: function (t) {
                n._started = 2
                var e = n._additiveAnimators
                if (e) {
                  for (var r = !1, o = 0; o < e.length; o++)
                    if (e[o]._clip) {
                      r = !0
                      break
                    }
                  r || (n._additiveAnimators = null)
                }
                for (o = 0; o < i.length; o++) i[o].step(n._target, t)
                var a = n._onframeCbs
                if (a) for (o = 0; o < a.length; o++) a[o](n._target, t)
              },
              ondestroy: function () {
                n._doneCallback()
              },
            })
            ;(this._clip = h),
              this.animation && this.animation.addClip(h),
              t && 'spline' !== t && (h.easing = t)
          } else this._doneCallback()
          return this
        }
      }),
      (t.prototype.stop = function (t) {
        if (this._clip) {
          var e = this._clip
          t && e.onframe(1), this._abortedCallback()
        }
      }),
      (t.prototype.delay = function (t) {
        return (this._delay = t), this
      }),
      (t.prototype.during = function (t) {
        return (
          t &&
            (this._onframeCbs || (this._onframeCbs = []),
            this._onframeCbs.push(t)),
          this
        )
      }),
      (t.prototype.done = function (t) {
        return (
          t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)),
          this
        )
      }),
      (t.prototype.aborted = function (t) {
        return (
          t &&
            (this._abortedCbs || (this._abortedCbs = []),
            this._abortedCbs.push(t)),
          this
        )
      }),
      (t.prototype.getClip = function () {
        return this._clip
      }),
      (t.prototype.getTrack = function (t) {
        return this._tracks[t]
      }),
      (t.prototype.stopTracks = function (t, e) {
        if (!t.length || !this._clip) return !0
        for (
          var n = this._tracks, i = this._trackKeys, r = 0;
          r < t.length;
          r++
        ) {
          var o = n[t[r]]
          o &&
            (e
              ? o.step(this._target, 1)
              : 1 === this._started && o.step(this._target, 0),
            o.setFinished())
        }
        var a = !0
        for (r = 0; r < i.length; r++)
          if (!n[i[r]].isFinished()) {
            a = !1
            break
          }
        return a && this._abortedCallback(), a
      }),
      (t.prototype.saveFinalToTarget = function (t, e) {
        if (t) {
          e = e || this._trackKeys
          for (var n = 0; n < e.length; n++) {
            var i = e[n],
              r = this._tracks[i]
            if (r && !r.isFinished()) {
              var o = r.keyframes,
                a = o[o.length - 1]
              if (a) {
                var s = hn(a.value)
                r.isValueColor && (s = cn(s)), (t[i] = s)
              }
            }
          }
        }
      }),
      (t.prototype.__changeFinalValue = function (t, e) {
        e = e || Z(t)
        for (var n = 0; n < e.length; n++) {
          var i = e[n],
            r = this._tracks[i]
          if (r) {
            var o = r.keyframes
            if (o.length > 1) {
              var a = o.pop()
              r.addKeyframe(a.time, t[i]), r.prepare(r.getAdditiveTrack())
            }
          }
        }
      }),
      t
    )
  })(),
  vn = (function (t) {
    function e(e) {
      var n = t.call(this) || this
      return (
        (n._running = !1),
        (n._time = 0),
        (n._pausedTime = 0),
        (n._pauseStart = 0),
        (n._paused = !1),
        (e = e || {}),
        (n.stage = e.stage || {}),
        (n.onframe = e.onframe || function () {}),
        n
      )
    }
    return (
      Tt(e, t),
      (e.prototype.addClip = function (t) {
        t.animation && this.removeClip(t),
          this._clipsHead
            ? ((this._clipsTail.next = t),
              (t.prev = this._clipsTail),
              (t.next = null),
              (this._clipsTail = t))
            : (this._clipsHead = this._clipsTail = t),
          (t.animation = this)
      }),
      (e.prototype.addAnimator = function (t) {
        t.animation = this
        var e = t.getClip()
        e && this.addClip(e)
      }),
      (e.prototype.removeClip = function (t) {
        if (t.animation) {
          var e = t.prev,
            n = t.next
          e ? (e.next = n) : (this._clipsHead = n),
            n ? (n.prev = e) : (this._clipsTail = e),
            (t.next = t.prev = t.animation = null)
        }
      }),
      (e.prototype.removeAnimator = function (t) {
        var e = t.getClip()
        e && this.removeClip(e), (t.animation = null)
      }),
      (e.prototype.update = function (t) {
        for (
          var e = new Date().getTime() - this._pausedTime,
            n = e - this._time,
            i = this._clipsHead;
          i;

        ) {
          var r = i.next
          i.step(e, n)
            ? (i.ondestroy && i.ondestroy(), this.removeClip(i), (i = r))
            : (i = r)
        }
        ;(this._time = e),
          t ||
            (this.onframe(n),
            this.trigger('frame', n),
            this.stage.update && this.stage.update())
      }),
      (e.prototype._startLoop = function () {
        var t = this
        ;(this._running = !0),
          ke(function e() {
            t._running && (ke(e), !t._paused && t.update())
          })
      }),
      (e.prototype.start = function () {
        this._running ||
          ((this._time = new Date().getTime()),
          (this._pausedTime = 0),
          this._startLoop())
      }),
      (e.prototype.stop = function () {
        this._running = !1
      }),
      (e.prototype.pause = function () {
        this._paused ||
          ((this._pauseStart = new Date().getTime()), (this._paused = !0))
      }),
      (e.prototype.resume = function () {
        this._paused &&
          ((this._pausedTime += new Date().getTime() - this._pauseStart),
          (this._paused = !1))
      }),
      (e.prototype.clear = function () {
        for (var t = this._clipsHead; t; ) {
          var e = t.next
          ;(t.prev = t.next = t.animation = null), (t = e)
        }
        this._clipsHead = this._clipsTail = null
      }),
      (e.prototype.isFinished = function () {
        return null == this._clipsHead
      }),
      (e.prototype.animate = function (t, e) {
        ;(e = e || {}), this.start()
        var n = new yn(t, e.loop)
        return this.addAnimator(n), n
      }),
      e
    )
  })(Ut),
  mn = x.domSupported,
  _n =
    ((fn = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 }),
    {
      mouse: (pn = [
        'click',
        'dblclick',
        'mousewheel',
        'wheel',
        'mouseout',
        'mouseup',
        'mousedown',
        'mousemove',
        'contextmenu',
      ]),
      touch: ['touchstart', 'touchend', 'touchmove'],
      pointer: X(pn, function (t) {
        var e = t.replace('mouse', 'pointer')
        return fn.hasOwnProperty(e) ? e : t
      }),
    }),
  xn = ['mousemove', 'mouseup'],
  wn = ['pointermove', 'pointerup'],
  bn = !1
function Sn(t) {
  var e = t.pointerType
  return 'pen' === e || 'touch' === e
}
function Tn(t) {
  t && (t.zrByTouch = !0)
}
function Mn(t, e) {
  for (
    var n = e, i = !1;
    n &&
    9 !== n.nodeType &&
    !(i = n.domBelongToZr || (n !== e && n === t.painterRoot));

  )
    n = n.parentNode
  return i
}
var Cn = function (t, e) {
    ;(this.stopPropagation = bt),
      (this.stopImmediatePropagation = bt),
      (this.preventDefault = bt),
      (this.type = e.type),
      (this.target = this.currentTarget = t.dom),
      (this.pointerType = e.pointerType),
      (this.clientX = e.clientX),
      (this.clientY = e.clientY)
  },
  kn = {
    mousedown: function (t) {
      ;(t = ie(this.dom, t)),
        (this.__mayPointerCapture = [t.zrX, t.zrY]),
        this.trigger('mousedown', t)
    },
    mousemove: function (t) {
      t = ie(this.dom, t)
      var e = this.__mayPointerCapture
      !e ||
        (t.zrX === e[0] && t.zrY === e[1]) ||
        this.__togglePointerCapture(!0),
        this.trigger('mousemove', t)
    },
    mouseup: function (t) {
      ;(t = ie(this.dom, t)),
        this.__togglePointerCapture(!1),
        this.trigger('mouseup', t)
    },
    mouseout: function (t) {
      Mn(this, (t = ie(this.dom, t)).toElement || t.relatedTarget) ||
        (this.__pointerCapturing && (t.zrEventControl = 'no_globalout'),
        this.trigger('mouseout', t))
    },
    wheel: function (t) {
      ;(bn = !0), (t = ie(this.dom, t)), this.trigger('mousewheel', t)
    },
    mousewheel: function (t) {
      bn || ((t = ie(this.dom, t)), this.trigger('mousewheel', t))
    },
    touchstart: function (t) {
      Tn((t = ie(this.dom, t))),
        (this.__lastTouchMoment = new Date()),
        this.handler.processGesture(t, 'start'),
        kn.mousemove.call(this, t),
        kn.mousedown.call(this, t)
    },
    touchmove: function (t) {
      Tn((t = ie(this.dom, t))),
        this.handler.processGesture(t, 'change'),
        kn.mousemove.call(this, t)
    },
    touchend: function (t) {
      Tn((t = ie(this.dom, t))),
        this.handler.processGesture(t, 'end'),
        kn.mouseup.call(this, t),
        +new Date() - +this.__lastTouchMoment < 300 && kn.click.call(this, t)
    },
    pointerdown: function (t) {
      kn.mousedown.call(this, t)
    },
    pointermove: function (t) {
      Sn(t) || kn.mousemove.call(this, t)
    },
    pointerup: function (t) {
      kn.mouseup.call(this, t)
    },
    pointerout: function (t) {
      Sn(t) || kn.mouseout.call(this, t)
    },
  }
U(['click', 'dblclick', 'contextmenu'], function (t) {
  kn[t] = function (e) {
    ;(e = ie(this.dom, e)), this.trigger(t, e)
  }
})
var In = {
  pointermove: function (t) {
    Sn(t) || In.mousemove.call(this, t)
  },
  pointerup: function (t) {
    In.mouseup.call(this, t)
  },
  mousemove: function (t) {
    this.trigger('mousemove', t)
  },
  mouseup: function (t) {
    var e = this.__pointerCapturing
    this.__togglePointerCapture(!1),
      this.trigger('mouseup', t),
      e && ((t.zrEventControl = 'only_globalout'), this.trigger('mouseout', t))
  },
}
function Dn(t, e) {
  var n = e.domHandlers
  x.pointerEventsSupported
    ? U(_n.pointer, function (i) {
        Pn(e, i, function (e) {
          n[i].call(t, e)
        })
      })
    : (x.touchEventsSupported &&
        U(_n.touch, function (i) {
          Pn(e, i, function (r) {
            n[i].call(t, r),
              (function (t) {
                ;(t.touching = !0),
                  null != t.touchTimer &&
                    (clearTimeout(t.touchTimer), (t.touchTimer = null)),
                  (t.touchTimer = setTimeout(function () {
                    ;(t.touching = !1), (t.touchTimer = null)
                  }, 700))
              })(e)
          })
        }),
      U(_n.mouse, function (i) {
        Pn(e, i, function (r) {
          ;(r = ne(r)), e.touching || n[i].call(t, r)
        })
      }))
}
function An(t, e) {
  function n(n) {
    Pn(
      e,
      n,
      function (i) {
        ;(i = ne(i)),
          Mn(t, i.target) ||
            ((i = (function (t, e) {
              return ie(t.dom, new Cn(t, e), !0)
            })(t, i)),
            e.domHandlers[n].call(t, i))
      },
      { capture: !0 }
    )
  }
  x.pointerEventsSupported ? U(wn, n) : x.touchEventsSupported || U(xn, n)
}
function Pn(t, e, n, i) {
  ;(t.mounted[e] = n),
    (t.listenerOpts[e] = i),
    (function (t, e, n, i) {
      $t ? t.addEventListener(e, n, i) : t.attachEvent('on' + e, n)
    })(t.domTarget, e, n, i)
}
function On(t) {
  var e,
    n,
    i,
    r,
    o = t.mounted
  for (var a in o)
    o.hasOwnProperty(a) &&
      ((e = t.domTarget),
      (n = a),
      (i = o[a]),
      (r = t.listenerOpts[a]),
      $t ? e.removeEventListener(n, i, r) : e.detachEvent('on' + n, i))
  t.mounted = {}
}
var Ln = function (t, e) {
    ;(this.mounted = {}),
      (this.listenerOpts = {}),
      (this.touching = !1),
      (this.domTarget = t),
      (this.domHandlers = e)
  },
  Rn = (function (t) {
    function e(e, n) {
      var i = t.call(this) || this
      return (
        (i.__pointerCapturing = !1),
        (i.dom = e),
        (i.painterRoot = n),
        (i._localHandlerScope = new Ln(e, kn)),
        mn && (i._globalHandlerScope = new Ln(document, In)),
        Dn(i, i._localHandlerScope),
        i
      )
    }
    return (
      Tt(e, t),
      (e.prototype.dispose = function () {
        On(this._localHandlerScope), mn && On(this._globalHandlerScope)
      }),
      (e.prototype.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || 'default')
      }),
      (e.prototype.__togglePointerCapture = function (t) {
        if (
          ((this.__mayPointerCapture = null),
          mn && +this.__pointerCapturing ^ +t)
        ) {
          this.__pointerCapturing = t
          var e = this._globalHandlerScope
          t ? An(this, e) : On(e)
        }
      }),
      e
    )
  })(Ut),
  Bn = 1
'undefined' != typeof window &&
  (Bn = Math.max(
    window.devicePixelRatio ||
      (window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI) ||
      1,
    1
  ))
var zn = Bn
function En() {
  return [1, 0, 0, 1, 0, 0]
}
function Nn(t) {
  return (
    (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t
  )
}
function Fn(t, e) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4]),
    (t[5] = e[5]),
    t
  )
}
function Hn(t, e, n) {
  var i = e[0] * n[0] + e[2] * n[1],
    r = e[1] * n[0] + e[3] * n[1],
    o = e[0] * n[2] + e[2] * n[3],
    a = e[1] * n[2] + e[3] * n[3],
    s = e[0] * n[4] + e[2] * n[5] + e[4],
    l = e[1] * n[4] + e[3] * n[5] + e[5]
  return (
    (t[0] = i), (t[1] = r), (t[2] = o), (t[3] = a), (t[4] = s), (t[5] = l), t
  )
}
function Vn(t, e, n) {
  return (
    (t[0] = e[0]),
    (t[1] = e[1]),
    (t[2] = e[2]),
    (t[3] = e[3]),
    (t[4] = e[4] + n[0]),
    (t[5] = e[5] + n[1]),
    t
  )
}
function Wn(t, e, n) {
  var i = e[0],
    r = e[2],
    o = e[4],
    a = e[1],
    s = e[3],
    l = e[5],
    u = Math.sin(n),
    h = Math.cos(n)
  return (
    (t[0] = i * h + a * u),
    (t[1] = -i * u + a * h),
    (t[2] = r * h + s * u),
    (t[3] = -r * u + h * s),
    (t[4] = h * o + u * l),
    (t[5] = h * l - u * o),
    t
  )
}
function Gn(t, e, n) {
  var i = n[0],
    r = n[1]
  return (
    (t[0] = e[0] * i),
    (t[1] = e[1] * r),
    (t[2] = e[2] * i),
    (t[3] = e[3] * r),
    (t[4] = e[4] * i),
    (t[5] = e[5] * r),
    t
  )
}
function Un(t, e) {
  var n = e[0],
    i = e[2],
    r = e[4],
    o = e[1],
    a = e[3],
    s = e[5],
    l = n * a - o * i
  return l
    ? ((l = 1 / l),
      (t[0] = a * l),
      (t[1] = -o * l),
      (t[2] = -i * l),
      (t[3] = n * l),
      (t[4] = (i * s - a * r) * l),
      (t[5] = (o * r - n * s) * l),
      t)
    : null
}
function Xn(t) {
  var e = [1, 0, 0, 1, 0, 0]
  return Fn(e, t), e
}
var Yn = Nn
function jn(t) {
  return t > 5e-5 || t < -5e-5
}
var qn,
  Zn,
  Kn = [],
  $n = [],
  Qn = [1, 0, 0, 1, 0, 0],
  Jn = Math.abs,
  ti = (function () {
    function t() {}
    var e
    return (
      (t.prototype.getLocalTransform = function (e) {
        return t.getLocalTransform(this, e)
      }),
      (t.prototype.setPosition = function (t) {
        ;(this.x = t[0]), (this.y = t[1])
      }),
      (t.prototype.setScale = function (t) {
        ;(this.scaleX = t[0]), (this.scaleY = t[1])
      }),
      (t.prototype.setSkew = function (t) {
        ;(this.skewX = t[0]), (this.skewY = t[1])
      }),
      (t.prototype.setOrigin = function (t) {
        ;(this.originX = t[0]), (this.originY = t[1])
      }),
      (t.prototype.needLocalTransform = function () {
        return (
          jn(this.rotation) ||
          jn(this.x) ||
          jn(this.y) ||
          jn(this.scaleX - 1) ||
          jn(this.scaleY - 1)
        )
      }),
      (t.prototype.updateTransform = function () {
        var t = this.parent && this.parent.transform,
          e = this.needLocalTransform(),
          n = this.transform
        e || t
          ? ((n = n || [1, 0, 0, 1, 0, 0]),
            e ? this.getLocalTransform(n) : Yn(n),
            t && (e ? Hn(n, t, n) : Fn(n, t)),
            (this.transform = n),
            this._resolveGlobalScaleRatio(n))
          : n && Yn(n)
      }),
      (t.prototype._resolveGlobalScaleRatio = function (t) {
        var e = this.globalScaleRatio
        if (null != e && 1 !== e) {
          this.getGlobalScale(Kn)
          var n = Kn[0] < 0 ? -1 : 1,
            i = Kn[1] < 0 ? -1 : 1,
            r = ((Kn[0] - n) * e + n) / Kn[0] || 0,
            o = ((Kn[1] - i) * e + i) / Kn[1] || 0
          ;(t[0] *= r), (t[1] *= r), (t[2] *= o), (t[3] *= o)
        }
        ;(this.invTransform = this.invTransform || [1, 0, 0, 1, 0, 0]),
          Un(this.invTransform, t)
      }),
      (t.prototype.getComputedTransform = function () {
        for (var t = this, e = []; t; ) e.push(t), (t = t.parent)
        for (; (t = e.pop()); ) t.updateTransform()
        return this.transform
      }),
      (t.prototype.setLocalTransform = function (t) {
        if (t) {
          var e = t[0] * t[0] + t[1] * t[1],
            n = t[2] * t[2] + t[3] * t[3],
            i = Math.atan2(t[1], t[0]),
            r = Math.PI / 2 + i - Math.atan2(t[3], t[2])
          ;(n = Math.sqrt(n) * Math.cos(r)),
            (e = Math.sqrt(e)),
            (this.skewX = r),
            (this.skewY = 0),
            (this.rotation = -i),
            (this.x = +t[4]),
            (this.y = +t[5]),
            (this.scaleX = e),
            (this.scaleY = n),
            (this.originX = 0),
            (this.originY = 0)
        }
      }),
      (t.prototype.decomposeTransform = function () {
        if (this.transform) {
          var t = this.parent,
            e = this.transform
          t && t.transform && (Hn($n, t.invTransform, e), (e = $n))
          var n = this.originX,
            i = this.originY
          ;(n || i) &&
            ((Qn[4] = n),
            (Qn[5] = i),
            Hn($n, e, Qn),
            ($n[4] -= n),
            ($n[5] -= i),
            (e = $n)),
            this.setLocalTransform(e)
        }
      }),
      (t.prototype.getGlobalScale = function (t) {
        var e = this.transform
        return (
          (t = t || []),
          e
            ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
              (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
              e[0] < 0 && (t[0] = -t[0]),
              e[3] < 0 && (t[1] = -t[1]),
              t)
            : ((t[0] = 1), (t[1] = 1), t)
        )
      }),
      (t.prototype.transformCoordToLocal = function (t, e) {
        var n = [t, e],
          i = this.invTransform
        return i && Ft(n, n, i), n
      }),
      (t.prototype.transformCoordToGlobal = function (t, e) {
        var n = [t, e],
          i = this.transform
        return i && Ft(n, n, i), n
      }),
      (t.prototype.getLineScale = function () {
        var t = this.transform
        return t && Jn(t[0] - 1) > 1e-10 && Jn(t[3] - 1) > 1e-10
          ? Math.sqrt(Jn(t[0] * t[3] - t[2] * t[1]))
          : 1
      }),
      (t.prototype.copyTransform = function (t) {
        for (var e = 0; e < ei.length; e++) {
          var n = ei[e]
          this[n] = t[n]
        }
      }),
      (t.getLocalTransform = function (t, e) {
        e = e || []
        var n = t.originX || 0,
          i = t.originY || 0,
          r = t.scaleX,
          o = t.scaleY,
          a = t.rotation || 0,
          s = t.x,
          l = t.y,
          u = t.skewX ? Math.tan(t.skewX) : 0,
          h = t.skewY ? Math.tan(-t.skewY) : 0
        return (
          n || i
            ? ((e[4] = -n * r - u * i * o), (e[5] = -i * o - h * n * r))
            : (e[4] = e[5] = 0),
          (e[0] = r),
          (e[3] = o),
          (e[1] = h * r),
          (e[2] = u * o),
          a && Wn(e, e, a),
          (e[4] += n + s),
          (e[5] += i + l),
          e
        )
      }),
      (t.initDefaultProps =
        (((e = t.prototype).x = 0),
        (e.y = 0),
        (e.scaleX = 1),
        (e.scaleY = 1),
        (e.originX = 0),
        (e.originY = 0),
        (e.skewX = 0),
        (e.skewY = 0),
        (e.rotation = 0),
        void (e.globalScaleRatio = 1))),
      t
    )
  })(),
  ei = [
    'x',
    'y',
    'originX',
    'originY',
    'rotation',
    'scaleX',
    'scaleY',
    'skewX',
    'skewY',
  ],
  ni = ti,
  ii = (function () {
    function t(t, e) {
      ;(this.x = t || 0), (this.y = e || 0)
    }
    return (
      (t.prototype.copy = function (t) {
        return (this.x = t.x), (this.y = t.y), this
      }),
      (t.prototype.clone = function () {
        return new t(this.x, this.y)
      }),
      (t.prototype.set = function (t, e) {
        return (this.x = t), (this.y = e), this
      }),
      (t.prototype.equal = function (t) {
        return t.x === this.x && t.y === this.y
      }),
      (t.prototype.add = function (t) {
        return (this.x += t.x), (this.y += t.y), this
      }),
      (t.prototype.scale = function (t) {
        ;(this.x *= t), (this.y *= t)
      }),
      (t.prototype.scaleAndAdd = function (t, e) {
        ;(this.x += t.x * e), (this.y += t.y * e)
      }),
      (t.prototype.sub = function (t) {
        return (this.x -= t.x), (this.y -= t.y), this
      }),
      (t.prototype.dot = function (t) {
        return this.x * t.x + this.y * t.y
      }),
      (t.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }),
      (t.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y
      }),
      (t.prototype.normalize = function () {
        var t = this.len()
        return (this.x /= t), (this.y /= t), this
      }),
      (t.prototype.distance = function (t) {
        var e = this.x - t.x,
          n = this.y - t.y
        return Math.sqrt(e * e + n * n)
      }),
      (t.prototype.distanceSquare = function (t) {
        var e = this.x - t.x,
          n = this.y - t.y
        return e * e + n * n
      }),
      (t.prototype.negate = function () {
        return (this.x = -this.x), (this.y = -this.y), this
      }),
      (t.prototype.transform = function (t) {
        if (t) {
          var e = this.x,
            n = this.y
          return (
            (this.x = t[0] * e + t[2] * n + t[4]),
            (this.y = t[1] * e + t[3] * n + t[5]),
            this
          )
        }
      }),
      (t.prototype.toArray = function (t) {
        return (t[0] = this.x), (t[1] = this.y), t
      }),
      (t.prototype.fromArray = function (t) {
        ;(this.x = t[0]), (this.y = t[1])
      }),
      (t.set = function (t, e, n) {
        ;(t.x = e), (t.y = n)
      }),
      (t.copy = function (t, e) {
        ;(t.x = e.x), (t.y = e.y)
      }),
      (t.len = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
      }),
      (t.lenSquare = function (t) {
        return t.x * t.x + t.y * t.y
      }),
      (t.dot = function (t, e) {
        return t.x * e.x + t.y * e.y
      }),
      (t.add = function (t, e, n) {
        ;(t.x = e.x + n.x), (t.y = e.y + n.y)
      }),
      (t.sub = function (t, e, n) {
        ;(t.x = e.x - n.x), (t.y = e.y - n.y)
      }),
      (t.scale = function (t, e, n) {
        ;(t.x = e.x * n), (t.y = e.y * n)
      }),
      (t.scaleAndAdd = function (t, e, n, i) {
        ;(t.x = e.x + n.x * i), (t.y = e.y + n.y * i)
      }),
      (t.lerp = function (t, e, n, i) {
        var r = 1 - i
        ;(t.x = r * e.x + i * n.x), (t.y = r * e.y + i * n.y)
      }),
      t
    )
  })(),
  ri = Math.min,
  oi = Math.max,
  ai = new ii(),
  si = new ii(),
  li = new ii(),
  ui = new ii(),
  hi = new ii(),
  ci = new ii(),
  pi = (function () {
    function t(t, e, n, i) {
      n < 0 && ((t += n), (n = -n)),
        i < 0 && ((e += i), (i = -i)),
        (this.x = t),
        (this.y = e),
        (this.width = n),
        (this.height = i)
    }
    return (
      (t.prototype.union = function (t) {
        var e = ri(t.x, this.x),
          n = ri(t.y, this.y)
        isFinite(this.x) && isFinite(this.width)
          ? (this.width = oi(t.x + t.width, this.x + this.width) - e)
          : (this.width = t.width),
          isFinite(this.y) && isFinite(this.height)
            ? (this.height = oi(t.y + t.height, this.y + this.height) - n)
            : (this.height = t.height),
          (this.x = e),
          (this.y = n)
      }),
      (t.prototype.applyTransform = function (e) {
        t.applyTransform(this, this, e)
      }),
      (t.prototype.calculateTransform = function (t) {
        var e = this,
          n = t.width / e.width,
          i = t.height / e.height,
          r = [1, 0, 0, 1, 0, 0]
        return Vn(r, r, [-e.x, -e.y]), Gn(r, r, [n, i]), Vn(r, r, [t.x, t.y]), r
      }),
      (t.prototype.intersect = function (e, n) {
        if (!e) return !1
        e instanceof t || (e = t.create(e))
        var i = this,
          r = i.x,
          o = i.x + i.width,
          a = i.y,
          s = i.y + i.height,
          l = e.x,
          u = e.x + e.width,
          h = e.y,
          c = e.y + e.height,
          p = !(o < l || u < r || s < h || c < a)
        if (n) {
          var f = 1 / 0,
            d = 0,
            g = Math.abs(o - l),
            y = Math.abs(u - r),
            v = Math.abs(s - h),
            m = Math.abs(c - a),
            _ = Math.min(g, y),
            x = Math.min(v, m)
          o < l || u < r
            ? _ > d && ((d = _), g < y ? ii.set(ci, -g, 0) : ii.set(ci, y, 0))
            : _ < f && ((f = _), g < y ? ii.set(hi, g, 0) : ii.set(hi, -y, 0)),
            s < h || c < a
              ? x > d && ((d = x), v < m ? ii.set(ci, 0, -v) : ii.set(ci, 0, m))
              : _ < f && ((f = _), v < m ? ii.set(hi, 0, v) : ii.set(hi, 0, -m))
        }
        return n && ii.copy(n, p ? hi : ci), p
      }),
      (t.prototype.contain = function (t, e) {
        var n = this
        return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
      }),
      (t.prototype.clone = function () {
        return new t(this.x, this.y, this.width, this.height)
      }),
      (t.prototype.copy = function (e) {
        t.copy(this, e)
      }),
      (t.prototype.plain = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height }
      }),
      (t.prototype.isFinite = function () {
        return (
          isFinite(this.x) &&
          isFinite(this.y) &&
          isFinite(this.width) &&
          isFinite(this.height)
        )
      }),
      (t.prototype.isZero = function () {
        return 0 === this.width || 0 === this.height
      }),
      (t.create = function (e) {
        return new t(e.x, e.y, e.width, e.height)
      }),
      (t.copy = function (t, e) {
        ;(t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height)
      }),
      (t.applyTransform = function (e, n, i) {
        if (i) {
          if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
            var r = i[0],
              o = i[3],
              a = i[4],
              s = i[5]
            return (
              (e.x = n.x * r + a),
              (e.y = n.y * o + s),
              (e.width = n.width * r),
              (e.height = n.height * o),
              e.width < 0 && ((e.x += e.width), (e.width = -e.width)),
              void (e.height < 0 && ((e.y += e.height), (e.height = -e.height)))
            )
          }
          ;(ai.x = li.x = n.x),
            (ai.y = ui.y = n.y),
            (si.x = ui.x = n.x + n.width),
            (si.y = li.y = n.y + n.height),
            ai.transform(i),
            ui.transform(i),
            si.transform(i),
            li.transform(i),
            (e.x = ri(ai.x, si.x, li.x, ui.x)),
            (e.y = ri(ai.y, si.y, li.y, ui.y))
          var l = oi(ai.x, si.x, li.x, ui.x),
            u = oi(ai.y, si.y, li.y, ui.y)
          ;(e.width = l - e.x), (e.height = u - e.y)
        } else e !== n && t.copy(e, n)
      }),
      t
    )
  })(),
  fi = {}
var di = {
  measureText: function (t, e) {
    return (
      qn || (qn = H().getContext('2d')),
      Zn !== e && (Zn = qn.font = e || '12px sans-serif'),
      qn.measureText(t)
    )
  },
}
function gi(t, e) {
  var n = fi[(e = e || '12px sans-serif')]
  n || (n = fi[e] = new Le(500))
  var i = n.get(t)
  return null == i && ((i = di.measureText(t, e).width), n.put(t, i)), i
}
function yi(t, e, n, i) {
  var r = gi(t, e),
    o = xi(e),
    a = mi(0, r, n),
    s = _i(0, o, i)
  return new pi(a, s, r, o)
}
function vi(t, e, n, i) {
  var r = ((t || '') + '').split('\n')
  if (1 === r.length) return yi(r[0], e, n, i)
  for (var o = new pi(0, 0, 0, 0), a = 0; a < r.length; a++) {
    var s = yi(r[a], e, n, i)
    0 === a ? o.copy(s) : o.union(s)
  }
  return o
}
function mi(t, e, n) {
  return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t
}
function _i(t, e, n) {
  return 'middle' === n ? (t -= e / 2) : 'bottom' === n && (t -= e), t
}
function xi(t) {
  return gi('国', t)
}
function wi(t, e) {
  return 'string' == typeof t
    ? t.lastIndexOf('%') >= 0
      ? (parseFloat(t) / 100) * e
      : parseFloat(t)
    : t
}
function bi(t, e, n) {
  var i = e.position || 'inside',
    r = null != e.distance ? e.distance : 5,
    o = n.height,
    a = n.width,
    s = o / 2,
    l = n.x,
    u = n.y,
    h = 'left',
    c = 'top'
  if (i instanceof Array)
    (l += wi(i[0], n.width)), (u += wi(i[1], n.height)), (h = null), (c = null)
  else
    switch (i) {
      case 'left':
        ;(l -= r), (u += s), (h = 'right'), (c = 'middle')
        break
      case 'right':
        ;(l += r + a), (u += s), (c = 'middle')
        break
      case 'top':
        ;(l += a / 2), (u -= r), (h = 'center'), (c = 'bottom')
        break
      case 'bottom':
        ;(l += a / 2), (u += o + r), (h = 'center')
        break
      case 'inside':
        ;(l += a / 2), (u += s), (h = 'center'), (c = 'middle')
        break
      case 'insideLeft':
        ;(l += r), (u += s), (c = 'middle')
        break
      case 'insideRight':
        ;(l += a - r), (u += s), (h = 'right'), (c = 'middle')
        break
      case 'insideTop':
        ;(l += a / 2), (u += r), (h = 'center')
        break
      case 'insideBottom':
        ;(l += a / 2), (u += o - r), (h = 'center'), (c = 'bottom')
        break
      case 'insideTopLeft':
        ;(l += r), (u += r)
        break
      case 'insideTopRight':
        ;(l += a - r), (u += r), (h = 'right')
        break
      case 'insideBottomLeft':
        ;(l += r), (u += o - r), (c = 'bottom')
        break
      case 'insideBottomRight':
        ;(l += a - r), (u += o - r), (h = 'right'), (c = 'bottom')
    }
  return (
    ((t = t || {}).x = l), (t.y = u), (t.align = h), (t.verticalAlign = c), t
  )
}
var Si = [
    'x',
    'y',
    'scaleX',
    'scaleY',
    'originX',
    'originY',
    'rotation',
    'ignore',
  ],
  Ti = {
    x: !0,
    y: !0,
    scaleX: !0,
    scaleY: !0,
    originX: !0,
    originY: !0,
    rotation: !0,
    ignore: !1,
  },
  Mi = {},
  Ci = new pi(0, 0, 0, 0),
  ki = (function () {
    function t(t) {
      ;(this.id = L()),
        (this.animators = []),
        (this.currentStates = []),
        (this.states = {}),
        this._init(t)
    }
    return (
      (t.prototype._init = function (t) {
        this.attr(t)
      }),
      (t.prototype.drift = function (t, e, n) {
        switch (this.draggable) {
          case 'horizontal':
            e = 0
            break
          case 'vertical':
            t = 0
        }
        var i = this.transform
        i || (i = this.transform = [1, 0, 0, 1, 0, 0]),
          (i[4] += t),
          (i[5] += e),
          this.decomposeTransform(),
          this.markRedraw()
      }),
      (t.prototype.beforeUpdate = function () {}),
      (t.prototype.afterUpdate = function () {}),
      (t.prototype.update = function () {
        this.updateTransform(), this.__dirty && this.updateInnerText()
      }),
      (t.prototype.updateInnerText = function (t) {
        var e = this._textContent
        if (e && (!e.ignore || t)) {
          this.textConfig || (this.textConfig = {})
          var n = this.textConfig,
            i = n.local,
            r = e.innerTransformable,
            o = void 0,
            a = void 0,
            s = !1
          r.parent = i ? this : null
          var l = !1
          if ((r.copyTransform(e), null != n.position)) {
            var u = Ci
            n.layoutRect
              ? u.copy(n.layoutRect)
              : u.copy(this.getBoundingRect()),
              i || u.applyTransform(this.transform),
              this.calculateTextPosition
                ? this.calculateTextPosition(Mi, n, u)
                : bi(Mi, n, u),
              (r.x = Mi.x),
              (r.y = Mi.y),
              (o = Mi.align),
              (a = Mi.verticalAlign)
            var h = n.origin
            if (h && null != n.rotation) {
              var c = void 0,
                p = void 0
              'center' === h
                ? ((c = 0.5 * u.width), (p = 0.5 * u.height))
                : ((c = wi(h[0], u.width)), (p = wi(h[1], u.height))),
                (l = !0),
                (r.originX = -r.x + c + (i ? 0 : u.x)),
                (r.originY = -r.y + p + (i ? 0 : u.y))
            }
          }
          null != n.rotation && (r.rotation = n.rotation)
          var f = n.offset
          f &&
            ((r.x += f[0]),
            (r.y += f[1]),
            l || ((r.originX = -f[0]), (r.originY = -f[1])))
          var d =
              null == n.inside
                ? 'string' == typeof n.position &&
                  n.position.indexOf('inside') >= 0
                : n.inside,
            g =
              this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}),
            y = void 0,
            v = void 0,
            m = void 0
          d && this.canBeInsideText()
            ? ((y = n.insideFill),
              (v = n.insideStroke),
              (null != y && 'auto' !== y) || (y = this.getInsideTextFill()),
              (null != v && 'auto' !== v) ||
                ((v = this.getInsideTextStroke(y)), (m = !0)))
            : ((y = n.outsideFill),
              (v = n.outsideStroke),
              (null != y && 'auto' !== y) || (y = this.getOutsideFill()),
              (null != v && 'auto' !== v) ||
                ((v = this.getOutsideStroke(y)), (m = !0))),
            ((y = y || '#000') === g.fill &&
              v === g.stroke &&
              m === g.autoStroke &&
              o === g.align &&
              a === g.verticalAlign) ||
              ((s = !0),
              (g.fill = y),
              (g.stroke = v),
              (g.autoStroke = m),
              (g.align = o),
              (g.verticalAlign = a),
              e.setDefaultTextStyle(g)),
            (e.__dirty |= 1),
            s && e.dirtyStyle(!0)
        }
      }),
      (t.prototype.canBeInsideText = function () {
        return !0
      }),
      (t.prototype.getInsideTextFill = function () {
        return '#fff'
      }),
      (t.prototype.getInsideTextStroke = function (t) {
        return '#000'
      }),
      (t.prototype.getOutsideFill = function () {
        return this.__zr && this.__zr.isDarkMode() ? '#ccc' : '#333'
      }),
      (t.prototype.getOutsideStroke = function (t) {
        var e = this.__zr && this.__zr.getBackgroundColor(),
          n = 'string' == typeof e && Ye(e)
        n || (n = [255, 255, 255, 1])
        for (var i = n[3], r = this.__zr.isDarkMode(), o = 0; o < 3; o++)
          n[o] = n[o] * i + (r ? 0 : 255) * (1 - i)
        return (n[3] = 1), Qe(n, 'rgba')
      }),
      (t.prototype.traverse = function (t, e) {}),
      (t.prototype.attrKV = function (t, e) {
        'textConfig' === t
          ? this.setTextConfig(e)
          : 'textContent' === t
          ? this.setTextContent(e)
          : 'clipPath' === t
          ? this.setClipPath(e)
          : 'extra' === t
          ? ((this.extra = this.extra || {}), N(this.extra, e))
          : (this[t] = e)
      }),
      (t.prototype.hide = function () {
        ;(this.ignore = !0), this.markRedraw()
      }),
      (t.prototype.show = function () {
        ;(this.ignore = !1), this.markRedraw()
      }),
      (t.prototype.attr = function (t, e) {
        if ('string' == typeof t) this.attrKV(t, e)
        else if (it(t))
          for (var n = Z(t), i = 0; i < n.length; i++) {
            var r = n[i]
            this.attrKV(r, t[r])
          }
        return this.markRedraw(), this
      }),
      (t.prototype.saveCurrentToNormalState = function (t) {
        this._innerSaveToNormal(t)
        for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
          var i = this.animators[n],
            r = i.__fromStateTransition
          if (!r || '__zr_normal__' === r) {
            var o = i.targetName,
              a = o ? e[o] : e
            i.saveFinalToTarget(a)
          }
        }
      }),
      (t.prototype._innerSaveToNormal = function (t) {
        var e = this._normalState
        e || (e = this._normalState = {}),
          t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
          this._savePrimaryToNormal(t, e, Si)
      }),
      (t.prototype._savePrimaryToNormal = function (t, e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i]
          null == t[r] || r in e || (e[r] = this[r])
        }
      }),
      (t.prototype.hasState = function () {
        return this.currentStates.length > 0
      }),
      (t.prototype.getState = function (t) {
        return this.states[t]
      }),
      (t.prototype.ensureState = function (t) {
        var e = this.states
        return e[t] || (e[t] = {}), e[t]
      }),
      (t.prototype.clearStates = function (t) {
        this.useState('__zr_normal__', !1, t)
      }),
      (t.prototype.useState = function (t, e, n, i) {
        var r = '__zr_normal__' === t
        if (this.hasState() || !r) {
          var o = this.currentStates,
            a = this.stateTransition
          if (!(V(o, t) >= 0) || (!e && 1 !== o.length)) {
            var s
            if (
              (this.stateProxy && !r && (s = this.stateProxy(t)),
              s || (s = this.states && this.states[t]),
              s || r)
            ) {
              r || this.saveCurrentToNormalState(s)
              var l = !!((s && s.hoverLayer) || i)
              l && this._toggleHoverLayerFlag(!0),
                this._applyStateObj(
                  t,
                  s,
                  this._normalState,
                  e,
                  !n && !this.__inHover && a && a.duration > 0,
                  a
                )
              var u = this._textContent,
                h = this._textGuide
              return (
                u && u.useState(t, e, n, l),
                h && h.useState(t, e, n, l),
                r
                  ? ((this.currentStates = []), (this._normalState = {}))
                  : e
                  ? this.currentStates.push(t)
                  : (this.currentStates = [t]),
                this._updateAnimationTargets(),
                this.markRedraw(),
                !l &&
                  this.__inHover &&
                  (this._toggleHoverLayerFlag(!1), (this.__dirty &= -2)),
                s
              )
            }
            R('State ' + t + ' not exists.')
          }
        }
      }),
      (t.prototype.useStates = function (t, e, n) {
        if (t.length) {
          var i = [],
            r = this.currentStates,
            o = t.length,
            a = o === r.length
          if (a)
            for (var s = 0; s < o; s++)
              if (t[s] !== r[s]) {
                a = !1
                break
              }
          if (a) return
          for (s = 0; s < o; s++) {
            var l = t[s],
              u = void 0
            this.stateProxy && (u = this.stateProxy(l, t)),
              u || (u = this.states[l]),
              u && i.push(u)
          }
          var h = i[o - 1],
            c = !!((h && h.hoverLayer) || n)
          c && this._toggleHoverLayerFlag(!0)
          var p = this._mergeStates(i),
            f = this.stateTransition
          this.saveCurrentToNormalState(p),
            this._applyStateObj(
              t.join(','),
              p,
              this._normalState,
              !1,
              !e && !this.__inHover && f && f.duration > 0,
              f
            )
          var d = this._textContent,
            g = this._textGuide
          d && d.useStates(t, e, c),
            g && g.useStates(t, e, c),
            this._updateAnimationTargets(),
            (this.currentStates = t.slice()),
            this.markRedraw(),
            !c &&
              this.__inHover &&
              (this._toggleHoverLayerFlag(!1), (this.__dirty &= -2))
        } else this.clearStates()
      }),
      (t.prototype._updateAnimationTargets = function () {
        for (var t = 0; t < this.animators.length; t++) {
          var e = this.animators[t]
          e.targetName && e.changeTarget(this[e.targetName])
        }
      }),
      (t.prototype.removeState = function (t) {
        var e = V(this.currentStates, t)
        if (e >= 0) {
          var n = this.currentStates.slice()
          n.splice(e, 1), this.useStates(n)
        }
      }),
      (t.prototype.replaceState = function (t, e, n) {
        var i = this.currentStates.slice(),
          r = V(i, t),
          o = V(i, e) >= 0
        r >= 0 ? (o ? i.splice(r, 1) : (i[r] = e)) : n && !o && i.push(e),
          this.useStates(i)
      }),
      (t.prototype.toggleState = function (t, e) {
        e ? this.useState(t, !0) : this.removeState(t)
      }),
      (t.prototype._mergeStates = function (t) {
        for (var e, n = {}, i = 0; i < t.length; i++) {
          var r = t[i]
          N(n, r), r.textConfig && N((e = e || {}), r.textConfig)
        }
        return e && (n.textConfig = e), n
      }),
      (t.prototype._applyStateObj = function (t, e, n, i, r, o) {
        var a = !(e && i)
        e && e.textConfig
          ? ((this.textConfig = N({}, i ? this.textConfig : n.textConfig)),
            N(this.textConfig, e.textConfig))
          : a && n.textConfig && (this.textConfig = n.textConfig)
        for (var s = {}, l = !1, u = 0; u < Si.length; u++) {
          var h = Si[u],
            c = r && Ti[h]
          e && null != e[h]
            ? c
              ? ((l = !0), (s[h] = e[h]))
              : (this[h] = e[h])
            : a &&
              null != n[h] &&
              (c ? ((l = !0), (s[h] = n[h])) : (this[h] = n[h]))
        }
        if (!r)
          for (u = 0; u < this.animators.length; u++) {
            var p = this.animators[u],
              f = p.targetName
            p.__changeFinalValue(f ? (e || n)[f] : e || n)
          }
        l && this._transitionState(t, s, o)
      }),
      (t.prototype._attachComponent = function (t) {
        if (t.__zr && !t.__hostTarget)
          throw new Error('Text element has been added to zrender.')
        if (t === this) throw new Error('Recursive component attachment.')
        var e = this.__zr
        e && t.addSelfToZr(e), (t.__zr = e), (t.__hostTarget = this)
      }),
      (t.prototype._detachComponent = function (t) {
        t.__zr && t.removeSelfFromZr(t.__zr),
          (t.__zr = null),
          (t.__hostTarget = null)
      }),
      (t.prototype.getClipPath = function () {
        return this._clipPath
      }),
      (t.prototype.setClipPath = function (t) {
        this._clipPath && this._clipPath !== t && this.removeClipPath(),
          this._attachComponent(t),
          (this._clipPath = t),
          this.markRedraw()
      }),
      (t.prototype.removeClipPath = function () {
        var t = this._clipPath
        t &&
          (this._detachComponent(t), (this._clipPath = null), this.markRedraw())
      }),
      (t.prototype.getTextContent = function () {
        return this._textContent
      }),
      (t.prototype.setTextContent = function (t) {
        var e = this._textContent
        if (e !== t) {
          if (
            (e && e !== t && this.removeTextContent(),
            t.__zr && !t.__hostTarget)
          )
            throw new Error('Text element has been added to zrender.')
          ;(t.innerTransformable = new ni()),
            this._attachComponent(t),
            (this._textContent = t),
            this.markRedraw()
        }
      }),
      (t.prototype.setTextConfig = function (t) {
        this.textConfig || (this.textConfig = {}),
          N(this.textConfig, t),
          this.markRedraw()
      }),
      (t.prototype.removeTextConfig = function () {
        ;(this.textConfig = null), this.markRedraw()
      }),
      (t.prototype.removeTextContent = function () {
        var t = this._textContent
        t &&
          ((t.innerTransformable = null),
          this._detachComponent(t),
          (this._textContent = null),
          (this._innerTextDefaultStyle = null),
          this.markRedraw())
      }),
      (t.prototype.getTextGuideLine = function () {
        return this._textGuide
      }),
      (t.prototype.setTextGuideLine = function (t) {
        this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
          this._attachComponent(t),
          (this._textGuide = t),
          this.markRedraw()
      }),
      (t.prototype.removeTextGuideLine = function () {
        var t = this._textGuide
        t &&
          (this._detachComponent(t),
          (this._textGuide = null),
          this.markRedraw())
      }),
      (t.prototype.markRedraw = function () {
        this.__dirty |= 1
        var t = this.__zr
        t && (this.__inHover ? t.refreshHover() : t.refresh()),
          this.__hostTarget && this.__hostTarget.markRedraw()
      }),
      (t.prototype.dirty = function () {
        this.markRedraw()
      }),
      (t.prototype._toggleHoverLayerFlag = function (t) {
        this.__inHover = t
        var e = this._textContent,
          n = this._textGuide
        e && (e.__inHover = t), n && (n.__inHover = t)
      }),
      (t.prototype.addSelfToZr = function (t) {
        if (this.__zr !== t) {
          this.__zr = t
          var e = this.animators
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n])
          this._clipPath && this._clipPath.addSelfToZr(t),
            this._textContent && this._textContent.addSelfToZr(t),
            this._textGuide && this._textGuide.addSelfToZr(t)
        }
      }),
      (t.prototype.removeSelfFromZr = function (t) {
        if (this.__zr) {
          this.__zr = null
          var e = this.animators
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n])
          this._clipPath && this._clipPath.removeSelfFromZr(t),
            this._textContent && this._textContent.removeSelfFromZr(t),
            this._textGuide && this._textGuide.removeSelfFromZr(t)
        }
      }),
      (t.prototype.animate = function (t, e) {
        var n = t ? this[t] : this
        if (n) {
          var i = new yn(n, e)
          return this.addAnimator(i, t), i
        }
        R('Property "' + t + '" is not existed in element ' + this.id)
      }),
      (t.prototype.addAnimator = function (t, e) {
        var n = this.__zr,
          i = this
        t
          .during(function () {
            i.updateDuringAnimation(e)
          })
          .done(function () {
            var e = i.animators,
              n = V(e, t)
            n >= 0 && e.splice(n, 1)
          }),
          this.animators.push(t),
          n && n.animation.addAnimator(t),
          n && n.wakeUp()
      }),
      (t.prototype.updateDuringAnimation = function (t) {
        this.markRedraw()
      }),
      (t.prototype.stopAnimation = function (t, e) {
        for (var n = this.animators, i = n.length, r = [], o = 0; o < i; o++) {
          var a = n[o]
          t && t !== a.scope ? r.push(a) : a.stop(e)
        }
        return (this.animators = r), this
      }),
      (t.prototype.animateTo = function (t, e, n) {
        Ii(this, t, e, n)
      }),
      (t.prototype.animateFrom = function (t, e, n) {
        Ii(this, t, e, n, !0)
      }),
      (t.prototype._transitionState = function (t, e, n, i) {
        for (var r = Ii(this, e, n, i), o = 0; o < r.length; o++)
          r[o].__fromStateTransition = t
      }),
      (t.prototype.getBoundingRect = function () {
        return null
      }),
      (t.prototype.getPaintRect = function () {
        return null
      }),
      (t.initDefaultProps = (function () {
        var e = t.prototype
        ;(e.type = 'element'),
          (e.name = ''),
          (e.ignore = !1),
          (e.silent = !1),
          (e.isGroup = !1),
          (e.draggable = !1),
          (e.dragging = !1),
          (e.ignoreClip = !1),
          (e.__inHover = !1),
          (e.__dirty = 1)
        var n = {}
        function i(t, e, i) {
          n[t + e + i] ||
            (console.warn(
              "DEPRECATED: '" +
                t +
                "' has been deprecated. use '" +
                e +
                "', '" +
                i +
                "' instead"
            ),
            (n[t + e + i] = !0))
        }
        function r(t, n, r, o) {
          function a(t, e) {
            Object.defineProperty(e, 0, {
              get: function () {
                return t[r]
              },
              set: function (e) {
                t[r] = e
              },
            }),
              Object.defineProperty(e, 1, {
                get: function () {
                  return t[o]
                },
                set: function (e) {
                  t[o] = e
                },
              })
          }
          Object.defineProperty(e, t, {
            get: function () {
              ;(i(t, r, o), this[n]) || a(this, (this[n] = []))
              return this[n]
            },
            set: function (e) {
              i(t, r, o),
                (this[r] = e[0]),
                (this[o] = e[1]),
                (this[n] = e),
                a(this, e)
            },
          })
        }
        Object.defineProperty &&
          (!x.browser.ie || x.browser.version > 8) &&
          (r('position', '_legacyPos', 'x', 'y'),
          r('scale', '_legacyScale', 'scaleX', 'scaleY'),
          r('origin', '_legacyOrigin', 'originX', 'originY'))
      })()),
      t
    )
  })()
function Ii(t, e, n, i, r) {
  var o = []
  Pi(t, '', t, e, (n = n || {}), i, o, r)
  var a = o.length,
    s = !1,
    l = n.done,
    u = n.aborted,
    h = function () {
      ;(s = !0), --a <= 0 && (s ? l && l() : u && u())
    },
    c = function () {
      --a <= 0 && (s ? l && l() : u && u())
    }
  a || (l && l()),
    o.length > 0 &&
      n.during &&
      o[0].during(function (t, e) {
        n.during(e)
      })
  for (var p = 0; p < o.length; p++) {
    var f = o[p]
    h && f.done(h), c && f.aborted(c), f.start(n.easing, n.force)
  }
  return o
}
function Di(t, e, n) {
  for (var i = 0; i < n; i++) t[i] = e[i]
}
function Ai(t, e, n) {
  if (G(e[n]))
    if ((G(t[n]) || (t[n] = []), ot(e[n]))) {
      var i = e[n].length
      t[n].length !== i && ((t[n] = new e[n].constructor(i)), Di(t[n], e[n], i))
    } else {
      var r = e[n],
        o = t[n],
        a = r.length
      if (G(r[0]))
        for (var s = r[0].length, l = 0; l < a; l++)
          o[l] ? Di(o[l], r[l], s) : (o[l] = Array.prototype.slice.call(r[l]))
      else Di(o, r, a)
      o.length = r.length
    }
  else t[n] = e[n]
}
function Pi(t, e, n, i, r, o, a, s) {
  for (
    var l = [],
      u = [],
      h = Z(i),
      c = r.duration,
      p = r.delay,
      f = r.additive,
      d = r.setToFinal,
      g = !it(o),
      y = 0;
    y < h.length;
    y++
  ) {
    if (null != n[(M = h[y])] && null != i[M] && (g || o[M]))
      if (it(i[M]) && !G(i[M])) {
        if (e) {
          s || ((n[M] = i[M]), t.updateDuringAnimation(e))
          continue
        }
        Pi(t, M, n[M], i[M], r, o && o[M], a, s)
      } else l.push(M), u.push(M)
    else s || ((n[M] = i[M]), t.updateDuringAnimation(e), u.push(M))
  }
  var v = l.length
  if (v > 0 || (r.force && !a.length)) {
    for (var m = t.animators, _ = [], x = 0; x < m.length; x++)
      m[x].targetName === e && _.push(m[x])
    if (!f && _.length)
      for (x = 0; x < _.length; x++) {
        if (_[x].stopTracks(u)) {
          var w = V(m, _[x])
          m.splice(w, 1)
        }
      }
    var b = void 0,
      S = void 0,
      T = void 0
    if (s) {
      ;(S = {}), d && (b = {})
      for (x = 0; x < v; x++) {
        ;(S[(M = l[x])] = n[M]), d ? (b[M] = i[M]) : (n[M] = i[M])
      }
    } else if (d) {
      T = {}
      for (x = 0; x < v; x++) {
        var M
        ;(T[(M = l[x])] = hn(n[M])), Ai(n, i, M)
      }
    }
    var C = new yn(n, !1, f ? _ : null)
    ;(C.targetName = e),
      r.scope && (C.scope = r.scope),
      d && b && C.whenWithKeys(0, b, l),
      T && C.whenWithKeys(0, T, l),
      C.whenWithKeys(null == c ? 500 : c, s ? S : i, l).delay(p || 0),
      t.addAnimator(C, e),
      a.push(C)
  }
}
W(ki, Ut), W(ki, ni)
var Oi = ki,
  Li = (function (t) {
    function e(e) {
      var n = t.call(this) || this
      return (n.isGroup = !0), (n._children = []), n.attr(e), n
    }
    return (
      Tt(e, t),
      (e.prototype.childrenRef = function () {
        return this._children
      }),
      (e.prototype.children = function () {
        return this._children.slice()
      }),
      (e.prototype.childAt = function (t) {
        return this._children[t]
      }),
      (e.prototype.childOfName = function (t) {
        for (var e = this._children, n = 0; n < e.length; n++)
          if (e[n].name === t) return e[n]
      }),
      (e.prototype.childCount = function () {
        return this._children.length
      }),
      (e.prototype.add = function (t) {
        if (
          t &&
          (t !== this &&
            t.parent !== this &&
            (this._children.push(t), this._doAdd(t)),
          t.__hostTarget)
        )
          throw 'This elemenet has been used as an attachment'
        return this
      }),
      (e.prototype.addBefore = function (t, e) {
        if (t && t !== this && t.parent !== this && e && e.parent === this) {
          var n = this._children,
            i = n.indexOf(e)
          i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
        }
        return this
      }),
      (e.prototype.replace = function (t, e) {
        var n = V(this._children, t)
        return n >= 0 && this.replaceAt(e, n), this
      }),
      (e.prototype.replaceAt = function (t, e) {
        var n = this._children,
          i = n[e]
        if (t && t !== this && t.parent !== this && t !== i) {
          ;(n[e] = t), (i.parent = null)
          var r = this.__zr
          r && i.removeSelfFromZr(r), this._doAdd(t)
        }
        return this
      }),
      (e.prototype._doAdd = function (t) {
        t.parent && t.parent.remove(t), (t.parent = this)
        var e = this.__zr
        e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh()
      }),
      (e.prototype.remove = function (t) {
        var e = this.__zr,
          n = this._children,
          i = V(n, t)
        return (
          i < 0 ||
            (n.splice(i, 1),
            (t.parent = null),
            e && t.removeSelfFromZr(e),
            e && e.refresh()),
          this
        )
      }),
      (e.prototype.removeAll = function () {
        for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
          var i = t[n]
          e && i.removeSelfFromZr(e), (i.parent = null)
        }
        return (t.length = 0), this
      }),
      (e.prototype.eachChild = function (t, e) {
        for (var n = this._children, i = 0; i < n.length; i++) {
          var r = n[i]
          t.call(e, r, i)
        }
        return this
      }),
      (e.prototype.traverse = function (t, e) {
        for (var n = 0; n < this._children.length; n++) {
          var i = this._children[n],
            r = t.call(e, i)
          i.isGroup && !r && i.traverse(t, e)
        }
        return this
      }),
      (e.prototype.addSelfToZr = function (e) {
        t.prototype.addSelfToZr.call(this, e)
        for (var n = 0; n < this._children.length; n++) {
          this._children[n].addSelfToZr(e)
        }
      }),
      (e.prototype.removeSelfFromZr = function (e) {
        t.prototype.removeSelfFromZr.call(this, e)
        for (var n = 0; n < this._children.length; n++) {
          this._children[n].removeSelfFromZr(e)
        }
      }),
      (e.prototype.getBoundingRect = function (t) {
        for (
          var e = new pi(0, 0, 0, 0),
            n = t || this._children,
            i = [],
            r = null,
            o = 0;
          o < n.length;
          o++
        ) {
          var a = n[o]
          if (!a.ignore && !a.invisible) {
            var s = a.getBoundingRect(),
              l = a.getLocalTransform(i)
            l
              ? (pi.applyTransform(e, s, l), (r = r || e.clone()).union(e))
              : (r = r || s.clone()).union(s)
          }
        }
        return r || e
      }),
      e
    )
  })(Oi)
Li.prototype.type = 'group'
var Ri = Li,
  Bi = !x.canvasSupported,
  zi = {},
  Ei = {}
/*!
 * ZRender, a high performance 2d drawing library.
 *
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */ var Ni = (function () {
  function t(t, e, n) {
    var i = this
    ;(this._sleepAfterStill = 10),
      (this._stillFrameAccum = 0),
      (this._needsRefresh = !0),
      (this._needsRefreshHover = !0),
      (this._darkMode = !1),
      (n = n || {}),
      (this.dom = e),
      (this.id = t)
    var r = new Ce(),
      o = n.renderer || 'canvas'
    if (Bi) throw new Error('IE8 support has been dropped since 5.0')
    if ((zi[o] || (o = Z(zi)[0]), !zi[o]))
      throw new Error(
        "Renderer '" + o + "' is not imported. Please import it first."
      )
    n.useDirtyRect = null != n.useDirtyRect && n.useDirtyRect
    var a = new zi[o](e, r, n, t)
    ;(this.storage = r), (this.painter = a)
    var s = x.node || x.worker ? null : new Rn(a.getViewportRoot(), a.root)
    ;(this.handler = new ye(r, a, s, a.root)),
      (this.animation = new vn({
        stage: {
          update: function () {
            return i._flush(!0)
          },
        },
      })),
      this.animation.start()
  }
  return (
    (t.prototype.add = function (t) {
      t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
    }),
    (t.prototype.remove = function (t) {
      t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
    }),
    (t.prototype.configLayer = function (t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this.refresh()
    }),
    (t.prototype.setBackgroundColor = function (t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
        this.refresh(),
        (this._backgroundColor = t),
        (this._darkMode = (function (t) {
          if (!t) return !1
          if ('string' == typeof t) return Je(t, 1) < 0.4
          if (t.colorStops) {
            for (var e = t.colorStops, n = 0, i = e.length, r = 0; r < i; r++)
              n += Je(e[r].color, 1)
            return (n /= i) < 0.4
          }
          return !1
        })(t))
    }),
    (t.prototype.getBackgroundColor = function () {
      return this._backgroundColor
    }),
    (t.prototype.setDarkMode = function (t) {
      this._darkMode = t
    }),
    (t.prototype.isDarkMode = function () {
      return this._darkMode
    }),
    (t.prototype.refreshImmediately = function (t) {
      t || this.animation.update(!0),
        (this._needsRefresh = !1),
        this.painter.refresh(),
        (this._needsRefresh = !1)
    }),
    (t.prototype.refresh = function () {
      ;(this._needsRefresh = !0), this.animation.start()
    }),
    (t.prototype.flush = function () {
      this._flush(!1)
    }),
    (t.prototype._flush = function (t) {
      var e,
        n = new Date().getTime()
      this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
        this._needsRefreshHover && ((e = !0), this.refreshHoverImmediately())
      var i = new Date().getTime()
      e
        ? ((this._stillFrameAccum = 0),
          this.trigger('rendered', { elapsedTime: i - n }))
        : this._sleepAfterStill > 0 &&
          (this._stillFrameAccum++,
          this._stillFrameAccum > this._sleepAfterStill &&
            this.animation.stop())
    }),
    (t.prototype.setSleepAfterStill = function (t) {
      this._sleepAfterStill = t
    }),
    (t.prototype.wakeUp = function () {
      this.animation.start(), (this._stillFrameAccum = 0)
    }),
    (t.prototype.addHover = function (t) {}),
    (t.prototype.removeHover = function (t) {}),
    (t.prototype.clearHover = function () {}),
    (t.prototype.refreshHover = function () {
      this._needsRefreshHover = !0
    }),
    (t.prototype.refreshHoverImmediately = function () {
      ;(this._needsRefreshHover = !1),
        this.painter.refreshHover &&
          'canvas' === this.painter.getType() &&
          this.painter.refreshHover()
    }),
    (t.prototype.resize = function (t) {
      ;(t = t || {}),
        this.painter.resize(t.width, t.height),
        this.handler.resize()
    }),
    (t.prototype.clearAnimation = function () {
      this.animation.clear()
    }),
    (t.prototype.getWidth = function () {
      return this.painter.getWidth()
    }),
    (t.prototype.getHeight = function () {
      return this.painter.getHeight()
    }),
    (t.prototype.pathToImage = function (t, e) {
      if (this.painter.pathToImage) return this.painter.pathToImage(t, e)
    }),
    (t.prototype.setCursorStyle = function (t) {
      this.handler.setCursorStyle(t)
    }),
    (t.prototype.findHover = function (t, e) {
      return this.handler.findHover(t, e)
    }),
    (t.prototype.on = function (t, e, n) {
      return this.handler.on(t, e, n), this
    }),
    (t.prototype.off = function (t, e) {
      this.handler.off(t, e)
    }),
    (t.prototype.trigger = function (t, e) {
      this.handler.trigger(t, e)
    }),
    (t.prototype.clear = function () {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof Ri && t[e].removeSelfFromZr(this)
      this.storage.delAllRoots(), this.painter.clear()
    }),
    (t.prototype.dispose = function () {
      var t
      this.animation.stop(),
        this.clear(),
        this.storage.dispose(),
        this.painter.dispose(),
        this.handler.dispose(),
        (this.animation = this.storage = this.painter = this.handler = null),
        (t = this.id),
        delete Ei[t]
    }),
    t
  )
})()
function Fi(t, e) {
  var n = new Ni(L(), t, e)
  return (Ei[n.id] = n), n
}
function Hi(t, e, n, i) {
  var r = e[0],
    o = e[1],
    a = n[0],
    s = n[1],
    l = o - r,
    u = s - a
  if (0 === l) return 0 === u ? a : (a + s) / 2
  if (i)
    if (l > 0) {
      if (t <= r) return a
      if (t >= o) return s
    } else {
      if (t >= r) return a
      if (t <= o) return s
    }
  else {
    if (t === r) return a
    if (t === o) return s
  }
  return ((t - r) / l) * u + a
}
function Vi(t, e) {
  switch (t) {
    case 'center':
    case 'middle':
      t = '50%'
      break
    case 'left':
    case 'top':
      t = '0%'
      break
    case 'right':
    case 'bottom':
      t = '100%'
  }
  return 'string' == typeof t
    ? ((n = t), n.replace(/^\s+|\s+$/g, '')).match(/%$/)
      ? (parseFloat(t) / 100) * e
      : parseFloat(t)
    : null == t
    ? NaN
    : +t
  var n
}
function Wi(t, e, n) {
  return (
    null == e && (e = 10),
    (e = Math.min(Math.max(0, e), 20)),
    (t = (+t).toFixed(e)),
    n ? t : +t
  )
}
function Gi(t) {
  return (
    t.sort(function (t, e) {
      return t - e
    }),
    t
  )
}
function Ui(t) {
  if (((t = +t), isNaN(t))) return 0
  if (t > 1e-14)
    for (var e = 1, n = 0; n < 15; n++, e *= 10)
      if (Math.round(t * e) / e === t) return n
  return (function (t) {
    var e = t.toString().toLowerCase(),
      n = e.indexOf('e'),
      i = n > 0 ? +e.slice(n + 1) : 0,
      r = n > 0 ? n : e.length,
      o = e.indexOf('.'),
      a = o < 0 ? 0 : r - 1 - o
    return Math.max(0, a - i)
  })(t)
}
function Xi(t, e, n) {
  if (!t[e]) return 0
  var i = Y(
    t,
    function (t, e) {
      return t + (isNaN(e) ? 0 : e)
    },
    0
  )
  if (0 === i) return 0
  for (
    var r = Math.pow(10, n),
      o = X(t, function (t) {
        return ((isNaN(t) ? 0 : t) / i) * r * 100
      }),
      a = 100 * r,
      s = X(o, function (t) {
        return Math.floor(t)
      }),
      l = Y(
        s,
        function (t, e) {
          return t + e
        },
        0
      ),
      u = X(o, function (t, e) {
        return t - s[e]
      });
    l < a;

  ) {
    for (
      var h = Number.NEGATIVE_INFINITY, c = null, p = 0, f = u.length;
      p < f;
      ++p
    )
      u[p] > h && ((h = u[p]), (c = p))
    ++s[c], (u[c] = 0), ++l
  }
  return s[e] / r
}
function Yi(t, e) {
  var n = Math.max(Ui(t), Ui(e)),
    i = t + e
  return n > 20 ? i : Wi(i, n)
}
var ji = 9007199254740991
function qi(t) {
  var e = 2 * Math.PI
  return ((t % e) + e) % e
}
function Zi(t) {
  return t > -1e-4 && t < 1e-4
}
var Ki =
  /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/
function $i(t) {
  if (t instanceof Date) return t
  if ('string' == typeof t) {
    var e = Ki.exec(t)
    if (!e) return new Date(NaN)
    if (e[8]) {
      var n = +e[4] || 0
      return (
        'Z' !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)),
        new Date(
          Date.UTC(
            +e[1],
            +(e[2] || 1) - 1,
            +e[3] || 1,
            n,
            +(e[5] || 0),
            +e[6] || 0,
            e[7] ? +e[7].substring(0, 3) : 0
          )
        )
      )
    }
    return new Date(
      +e[1],
      +(e[2] || 1) - 1,
      +e[3] || 1,
      +e[4] || 0,
      +(e[5] || 0),
      +e[6] || 0,
      e[7] ? +e[7].substring(0, 3) : 0
    )
  }
  return null == t ? new Date(NaN) : new Date(Math.round(t))
}
function Qi(t) {
  if (0 === t) return 0
  var e = Math.floor(Math.log(t) / Math.LN10)
  return t / Math.pow(10, e) >= 10 && e++, e
}
function Ji(t, e) {
  var n = Qi(t),
    i = Math.pow(10, n),
    r = t / i
  return (
    (t =
      (e
        ? r < 1.5
          ? 1
          : r < 2.5
          ? 2
          : r < 4
          ? 3
          : r < 7
          ? 5
          : 10
        : r < 1
        ? 1
        : r < 2
        ? 2
        : r < 3
        ? 3
        : r < 5
        ? 5
        : 10) * i),
    n >= -20 ? +t.toFixed(n < 0 ? -n : 0) : t
  )
}
function tr(t, e) {
  var n = (t.length - 1) * e + 1,
    i = Math.floor(n),
    r = +t[i - 1],
    o = n - i
  return o ? r + o * (t[i] - r) : r
}
function er(t) {
  var e = parseFloat(t)
  return e == t && (0 !== e || 'string' != typeof t || t.indexOf('x') <= 0)
    ? e
    : NaN
}
function nr(t) {
  return !isNaN(er(t))
}
function ir() {
  return Math.round(9 * Math.random())
}
function rr(t, e) {
  return 0 === e ? t : rr(e, t % e)
}
function or(t, e) {
  return null == t ? e : null == e ? t : (t * e) / rr(t, e)
}
function ar(t) {
  throw new Error(t)
}
function sr(t) {
  return t instanceof Array ? t : null == t ? [] : [t]
}
function lr(t, e, n) {
  if (t) {
    ;(t[e] = t[e] || {}),
      (t.emphasis = t.emphasis || {}),
      (t.emphasis[e] = t.emphasis[e] || {})
    for (var i = 0, r = n.length; i < r; i++) {
      var o = n[i]
      !t.emphasis[e].hasOwnProperty(o) &&
        t[e].hasOwnProperty(o) &&
        (t.emphasis[e][o] = t[e][o])
    }
  }
}
var ur = [
  'fontStyle',
  'fontWeight',
  'fontSize',
  'fontFamily',
  'rich',
  'tag',
  'color',
  'textBorderColor',
  'textBorderWidth',
  'width',
  'height',
  'lineHeight',
  'align',
  'verticalAlign',
  'baseline',
  'shadowColor',
  'shadowBlur',
  'shadowOffsetX',
  'shadowOffsetY',
  'textShadowColor',
  'textShadowBlur',
  'textShadowOffsetX',
  'textShadowOffsetY',
  'backgroundColor',
  'borderColor',
  'borderWidth',
  'borderRadius',
  'padding',
]
function hr(t) {
  return !it(t) || Q(t) || t instanceof Date ? t : t.value
}
function cr(t) {
  return it(t) && !(t instanceof Array)
}
function pr(t, e, n) {
  var i = 'normalMerge' === n,
    r = 'replaceMerge' === n,
    o = 'replaceAll' === n
  ;(t = t || []), (e = (e || []).slice())
  var a = mt()
  U(e, function (t, n) {
    it(t) || (e[n] = null)
  })
  var s,
    l,
    u = (function (t, e, n) {
      var i = []
      if ('replaceAll' === n) return i
      for (var r = 0; r < t.length; r++) {
        var o = t[r]
        o && null != o.id && e.set(o.id, r),
          i.push({
            existing: 'replaceMerge' === n || vr(o) ? null : o,
            newOption: null,
            keyInfo: null,
            brandNew: null,
          })
      }
      return i
    })(t, a, n)
  return (
    (i || r) &&
      (function (t, e, n, i) {
        U(i, function (r, o) {
          if (r && null != r.id) {
            var a = dr(r.id),
              s = n.get(a)
            if (null != s) {
              var l = t[s]
              ft(!l.newOption, 'Duplicated option on id "' + a + '".'),
                (l.newOption = r),
                (l.existing = e[s]),
                (i[o] = null)
            }
          }
        })
      })(u, t, a, e),
    i &&
      (function (t, e) {
        U(e, function (n, i) {
          if (n && null != n.name)
            for (var r = 0; r < t.length; r++) {
              var o = t[r].existing
              if (
                !t[r].newOption &&
                o &&
                (null == o.id || null == n.id) &&
                !vr(n) &&
                !vr(o) &&
                fr('name', o, n)
              )
                return (t[r].newOption = n), void (e[i] = null)
            }
        })
      })(u, e),
    i || r
      ? (function (t, e, n) {
          U(e, function (e) {
            if (e) {
              for (
                var i, r = 0;
                (i = t[r]) &&
                (i.newOption ||
                  vr(i.existing) ||
                  (i.existing && null != e.id && !fr('id', e, i.existing)));

              )
                r++
              i
                ? ((i.newOption = e), (i.brandNew = n))
                : t.push({
                    newOption: e,
                    brandNew: n,
                    existing: null,
                    keyInfo: null,
                  }),
                r++
            }
          })
        })(u, e, r)
      : o &&
        (function (t, e) {
          U(e, function (e) {
            t.push({
              newOption: e,
              brandNew: !0,
              existing: null,
              keyInfo: null,
            })
          })
        })(u, e),
    (s = u),
    (l = mt()),
    U(s, function (t) {
      var e = t.existing
      e && l.set(e.id, t)
    }),
    U(s, function (t) {
      var e = t.newOption
      ft(
        !e || null == e.id || !l.get(e.id) || l.get(e.id) === t,
        'id duplicates: ' + (e && e.id)
      ),
        e && null != e.id && l.set(e.id, t),
        !t.keyInfo && (t.keyInfo = {})
    }),
    U(s, function (t, e) {
      var n = t.existing,
        i = t.newOption,
        r = t.keyInfo
      if (it(i)) {
        if (
          ((r.name = null != i.name ? dr(i.name) : n ? n.name : 'series\0' + e),
          n)
        )
          r.id = dr(n.id)
        else if (null != i.id) r.id = dr(i.id)
        else {
          var o = 0
          do {
            r.id = '\0' + r.name + '\0' + o++
          } while (l.get(r.id))
        }
        l.set(r.id, t)
      }
    }),
    u
  )
}
function fr(t, e, n) {
  var i = gr(e[t], null),
    r = gr(n[t], null)
  return null != i && null != r && i === r
}
function dr(t) {
  return gr(t, '')
}
function gr(t, e) {
  if (null == t) return e
  var n = typeof t
  return 'string' === n ? t : 'number' === n || et(t) ? t + '' : e
}
function yr(t) {
  var e = t.name
  return !(!e || !e.indexOf('series\0'))
}
function vr(t) {
  return t && null != t.id && 0 === dr(t.id).indexOf('\0_ec_\0')
}
function mr(t, e) {
  return null != e.dataIndexInside
    ? e.dataIndexInside
    : null != e.dataIndex
    ? Q(e.dataIndex)
      ? X(e.dataIndex, function (e) {
          return t.indexOfRawIndex(e)
        })
      : t.indexOfRawIndex(e.dataIndex)
    : null != e.name
    ? Q(e.name)
      ? X(e.name, function (e) {
          return t.indexOfName(e)
        })
      : t.indexOfName(e.name)
    : void 0
}
function _r() {
  var t = '__ec_inner_' + xr++
  return function (e) {
    return e[t] || (e[t] = {})
  }
}
var xr = ir()
function wr(t, e, n) {
  var i = br(e, n),
    r = i.mainTypeSpecified,
    o = i.queryOptionMap,
    a = i.others,
    s = n ? n.defaultMainType : null
  return (
    !r && s && o.set(s, {}),
    o.each(function (e, i) {
      var r = Tr(t, i, e, {
        useDefault: s === i,
        enableAll: !n || null == n.enableAll || n.enableAll,
        enableNone: !n || null == n.enableNone || n.enableNone,
      })
      ;(a[i + 'Models'] = r.models), (a[i + 'Model'] = r.models[0])
    }),
    a
  )
}
function br(t, e) {
  var n
  if (tt(t)) {
    var i = {}
    ;(i[t + 'Index'] = 0), (n = i)
  } else n = t
  var r = mt(),
    o = {},
    a = !1
  return (
    U(n, function (t, n) {
      if ('dataIndex' !== n && 'dataIndexInside' !== n) {
        var i = n.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = i[1],
          l = (i[2] || '').toLowerCase()
        if (
          s &&
          l &&
          !(e && e.includeMainTypes && V(e.includeMainTypes, s) < 0)
        )
          (a = a || !!s), ((r.get(s) || r.set(s, {}))[l] = t)
      } else o[n] = t
    }),
    { mainTypeSpecified: a, queryOptionMap: r, others: o }
  )
}
var Sr = { useDefault: !0, enableAll: !1, enableNone: !1 }
function Tr(t, e, n, i) {
  i = i || Sr
  var r = n.index,
    o = n.id,
    a = n.name,
    s = { models: null, specified: null != r || null != o || null != a }
  if (!s.specified) {
    var l = void 0
    return (s.models = i.useDefault && (l = t.getComponent(e)) ? [l] : []), s
  }
  return 'none' === r || !1 === r
    ? (ft(
        i.enableNone,
        '`"none"` or `false` is not a valid value on index option.'
      ),
      (s.models = []),
      s)
    : ('all' === r &&
        (ft(i.enableAll, '`"all"` is not a valid value on index option.'),
        (r = o = a = null)),
      (s.models = t.queryComponents({ mainType: e, index: r, id: o, name: a })),
      s)
}
function Mr(t, e, n) {
  t.setAttribute ? t.setAttribute(e, n) : (t[e] = n)
}
function Cr(t, e) {
  var n = mt(),
    i = []
  return (
    U(t, function (t) {
      var r = e(t)
      ;(n.get(r) || (i.push(r), n.set(r, []))).push(t)
    }),
    { keys: i, buckets: n }
  )
}
function kr(t, e, n, i, r) {
  var o = null == e || 'auto' === e
  if (null == i) return i
  if ('number' == typeof i)
    return Wi((d = en(n || 0, i, r)), o ? Math.max(Ui(n || 0), Ui(i)) : e)
  if ('string' == typeof i) return r < 1 ? n : i
  for (
    var a = [], s = n, l = i, u = Math.max(s ? s.length : 0, l.length), h = 0;
    h < u;
    ++h
  ) {
    var c = t.getDimensionInfo(h)
    if (c && 'ordinal' === c.type) a[h] = (r < 1 && s ? s : l)[h]
    else {
      var p = s && s[h] ? s[h] : 0,
        f = l[h],
        d = en(p, f, r)
      a[h] = Wi(d, o ? Math.max(Ui(p), Ui(f)) : e)
    }
  }
  return a
}
var Ir = '___EC__COMPONENT__CONTAINER___'
function Dr(t) {
  var e = { main: '', sub: '' }
  if (t) {
    var n = t.split('.')
    ;(e.main = n[0] || ''), (e.sub = n[1] || '')
  }
  return e
}
function Ar(t, e) {
  ;(t.$constructor = t),
    (t.extend = function (t) {
      var e = this
      function n() {
        for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r]
        if (t.$constructor) t.$constructor.apply(this, arguments)
        else {
          if (Pr(e)) {
            var o = xt(n.prototype, new (e.bind.apply(e, v([void 0], i)))())
            return o
          }
          e.apply(this, arguments)
        }
      }
      return (
        (n.___EC__EXTENDED_CLASS___ = !0),
        N(n.prototype, t),
        (n.extend = this.extend),
        (n.superCall = Rr),
        (n.superApply = Br),
        (function (t, e) {
          var n = t.prototype
          function i() {}
          for (var r in ((i.prototype = e.prototype),
          (t.prototype = new i()),
          n))
            n.hasOwnProperty(r) && (t.prototype[r] = n[r])
          ;(t.prototype.constructor = t), (t.superClass = e)
        })(n, this),
        (n.superClass = e),
        n
      )
    })
}
function Pr(t) {
  return (
    'function' == typeof t &&
    /^class\s/.test(Function.prototype.toString.call(t))
  )
}
function Or(t, e) {
  t.extend = e.extend
}
var Lr = Math.round(10 * Math.random())
function Rr(t, e) {
  for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i]
  return this.superClass.prototype[e].apply(t, n)
}
function Br(t, e, n) {
  return this.superClass.prototype[e].apply(t, n)
}
function zr(t) {
  var e = {}
  ;(t.registerClass = function (t) {
    var n,
      i = t.type || t.prototype.type
    if (i) {
      ft(
        /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test((n = i)),
        'componentType "' + n + '" illegal'
      ),
        (t.prototype.type = i)
      var r = Dr(i)
      if (r.sub) {
        if (r.sub !== Ir) {
          ;(function (t) {
            var n = e[t.main]
            ;(n && n[Ir]) || ((n = e[t.main] = {})[Ir] = !0)
            return n
          })(r)[r.sub] = t
        }
      } else e[r.main] = t
    }
    return t
  }),
    (t.getClass = function (t, n, i) {
      var r = e[t]
      if ((r && r[Ir] && (r = n ? r[n] : null), i && !r))
        throw new Error(
          n
            ? 'Component ' + t + '.' + (n || '') + ' is used but not imported.'
            : t + '.type should be specified.'
        )
      return r
    }),
    (t.getClassesByMainType = function (t) {
      var n = Dr(t),
        i = [],
        r = e[n.main]
      return (
        r && r[Ir]
          ? U(r, function (t, e) {
              e !== Ir && i.push(t)
            })
          : i.push(r),
        i
      )
    }),
    (t.hasClass = function (t) {
      var n = Dr(t)
      return !!e[n.main]
    }),
    (t.getAllClassMainTypes = function () {
      var t = []
      return (
        U(e, function (e, n) {
          t.push(n)
        }),
        t
      )
    }),
    (t.hasSubTypes = function (t) {
      var n = Dr(t),
        i = e[n.main]
      return i && i[Ir]
    })
}
function Er(t, e) {
  for (var n = 0; n < t.length; n++) t[n][1] || (t[n][1] = t[n][0])
  return (
    (e = e || !1),
    function (n, i, r) {
      for (var o = {}, a = 0; a < t.length; a++) {
        var s = t[a][1]
        if (!((i && V(i, s) >= 0) || (r && V(r, s) < 0))) {
          var l = n.getShallow(s, e)
          null != l && (o[t[a][0]] = l)
        }
      }
      return o
    }
  )
}
var Nr = Er([
    ['fill', 'color'],
    ['shadowBlur'],
    ['shadowOffsetX'],
    ['shadowOffsetY'],
    ['opacity'],
    ['shadowColor'],
  ]),
  Fr = (function () {
    function t() {}
    return (
      (t.prototype.getAreaStyle = function (t, e) {
        return Nr(this, t, e)
      }),
      t
    )
  })(),
  Hr = new Le(50)
function Vr(t) {
  if ('string' == typeof t) {
    var e = Hr.get(t)
    return e && e.image
  }
  return t
}
function Wr(t, e, n, i, r) {
  if (t) {
    if ('string' == typeof t) {
      if ((e && e.__zrImageSrc === t) || !n) return e
      var o = Hr.get(t),
        a = { hostEl: n, cb: i, cbPayload: r }
      return (
        o
          ? !Ur((e = o.image)) && o.pending.push(a)
          : (((e = new Image()).onload = e.onerror = Gr),
            Hr.put(t, (e.__cachedImgObj = { image: e, pending: [a] })),
            (e.src = e.__zrImageSrc = t)),
        e
      )
    }
    return t
  }
  return e
}
function Gr() {
  var t = this.__cachedImgObj
  this.onload = this.onerror = this.__cachedImgObj = null
  for (var e = 0; e < t.pending.length; e++) {
    var n = t.pending[e],
      i = n.cb
    i && i(this, n.cbPayload), n.hostEl.dirty()
  }
  t.pending.length = 0
}
function Ur(t) {
  return t && t.width && t.height
}
var Xr = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g
function Yr(t, e, n, i, r) {
  if (!e) return ''
  var o = (t + '').split('\n')
  r = jr(e, n, i, r)
  for (var a = 0, s = o.length; a < s; a++) o[a] = qr(o[a], r)
  return o.join('\n')
}
function jr(t, e, n, i) {
  var r = N({}, (i = i || {}))
  ;(r.font = e), (n = ut(n, '...')), (r.maxIterations = ut(i.maxIterations, 2))
  var o = (r.minChar = ut(i.minChar, 0))
  r.cnCharWidth = gi('国', e)
  var a = (r.ascCharWidth = gi('a', e))
  r.placeholder = ut(i.placeholder, '')
  for (var s = (t = Math.max(0, t - 1)), l = 0; l < o && s >= a; l++) s -= a
  var u = gi(n, e)
  return (
    u > s && ((n = ''), (u = 0)),
    (s = t - u),
    (r.ellipsis = n),
    (r.ellipsisWidth = u),
    (r.contentWidth = s),
    (r.containerWidth = t),
    r
  )
}
function qr(t, e) {
  var n = e.containerWidth,
    i = e.font,
    r = e.contentWidth
  if (!n) return ''
  var o = gi(t, i)
  if (o <= n) return t
  for (var a = 0; ; a++) {
    if (o <= r || a >= e.maxIterations) {
      t += e.ellipsis
      break
    }
    var s =
      0 === a
        ? Zr(t, r, e.ascCharWidth, e.cnCharWidth)
        : o > 0
        ? Math.floor((t.length * r) / o)
        : 0
    o = gi((t = t.substr(0, s)), i)
  }
  return '' === t && (t = e.placeholder), t
}
function Zr(t, e, n, i) {
  for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
    var s = t.charCodeAt(o)
    r += 0 <= s && s <= 127 ? n : i
  }
  return o
}
var Kr = function () {},
  $r = function (t) {
    ;(this.tokens = []), t && (this.tokens = t)
  },
  Qr = function () {
    ;(this.width = 0),
      (this.height = 0),
      (this.contentWidth = 0),
      (this.contentHeight = 0),
      (this.outerWidth = 0),
      (this.outerHeight = 0),
      (this.lines = [])
  }
function Jr(t, e, n, i, r) {
  var o,
    a,
    s = '' === e,
    l = (r && n.rich[r]) || {},
    u = t.lines,
    h = l.font || n.font,
    c = !1
  if (i) {
    var p = l.padding,
      f = p ? p[1] + p[3] : 0
    if (null != l.width && 'auto' !== l.width) {
      var d = wi(l.width, i.width) + f
      u.length > 0 &&
        d + i.accumWidth > i.width &&
        ((o = e.split('\n')), (c = !0)),
        (i.accumWidth = d)
    } else {
      var g = no(e, h, i.width, i.breakAll, i.accumWidth)
      ;(i.accumWidth = g.accumWidth + f), (a = g.linesWidths), (o = g.lines)
    }
  } else o = e.split('\n')
  for (var y = 0; y < o.length; y++) {
    var v = o[y],
      m = new Kr()
    if (
      ((m.styleName = r),
      (m.text = v),
      (m.isLineHolder = !v && !s),
      'number' == typeof l.width
        ? (m.width = l.width)
        : (m.width = a ? a[y] : gi(v, h)),
      y || c)
    )
      u.push(new $r([m]))
    else {
      var _ = (u[u.length - 1] || (u[0] = new $r())).tokens,
        x = _.length
      1 === x && _[0].isLineHolder ? (_[0] = m) : (v || !x || s) && _.push(m)
    }
  }
}
var to = Y(
  ',&?/;] '.split(''),
  function (t, e) {
    return (t[e] = !0), t
  },
  {}
)
function eo(t) {
  return (
    !(function (t) {
      var e = t.charCodeAt(0)
      return e >= 33 && e <= 255
    })(t) || !!to[t]
  )
}
function no(t, e, n, i, r) {
  for (
    var o = [], a = [], s = '', l = '', u = 0, h = 0, c = 0;
    c < t.length;
    c++
  ) {
    var p = t.charAt(c)
    if ('\n' !== p) {
      var f = gi(p, e),
        d = !i && !eo(p)
      ;(o.length ? h + f > n : r + h + f > n)
        ? h
          ? (s || l) &&
            (d
              ? (s || ((s = l), (l = ''), (h = u = 0)),
                o.push(s),
                a.push(h - u),
                (l += p),
                (s = ''),
                (h = u += f))
              : (l && ((s += l), (h += u), (l = ''), (u = 0)),
                o.push(s),
                a.push(h),
                (s = p),
                (h = f)))
          : d
          ? (o.push(l), a.push(u), (l = p), (u = f))
          : (o.push(p), a.push(f))
        : ((h += f),
          d
            ? ((l += p), (u += f))
            : (l && ((s += l), (l = ''), (u = 0)), (s += p)))
    } else
      l && ((s += l), (h += u)),
        o.push(s),
        a.push(h),
        (s = ''),
        (l = ''),
        (u = 0),
        (h = 0)
  }
  return (
    o.length || s || ((s = t), (l = ''), (u = 0)),
    l && (s += l),
    s && (o.push(s), a.push(h)),
    1 === o.length && (h += r),
    { accumWidth: h, lines: o, linesWidths: a }
  )
}
var io = '__zr_style_' + Math.round(10 * Math.random()),
  ro = {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: '#000',
    opacity: 1,
    blend: 'source-over',
  },
  oo = {
    style: {
      shadowBlur: !0,
      shadowOffsetX: !0,
      shadowOffsetY: !0,
      shadowColor: !0,
      opacity: !0,
    },
  }
ro[io] = !0
var ao = ['z', 'z2', 'invisible'],
  so = ['invisible'],
  lo = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    var n
    return (
      Tt(e, t),
      (e.prototype._init = function (e) {
        for (var n = Z(e), i = 0; i < n.length; i++) {
          var r = n[i]
          'style' === r
            ? this.useStyle(e[r])
            : t.prototype.attrKV.call(this, r, e[r])
        }
        this.style || this.useStyle({})
      }),
      (e.prototype.beforeBrush = function () {}),
      (e.prototype.afterBrush = function () {}),
      (e.prototype.innerBeforeBrush = function () {}),
      (e.prototype.innerAfterBrush = function () {}),
      (e.prototype.shouldBePainted = function (t, e, n, i) {
        var r = this.transform
        if (
          this.ignore ||
          this.invisible ||
          0 === this.style.opacity ||
          (this.culling &&
            (function (t, e, n) {
              uo.copy(t.getBoundingRect()),
                t.transform && uo.applyTransform(t.transform)
              return (ho.width = e), (ho.height = n), !uo.intersect(ho)
            })(this, t, e)) ||
          (r && !r[0] && !r[3])
        )
          return !1
        if (n && this.__clipPaths)
          for (var o = 0; o < this.__clipPaths.length; ++o)
            if (this.__clipPaths[o].isZeroArea()) return !1
        if (i && this.parent)
          for (var a = this.parent; a; ) {
            if (a.ignore) return !1
            a = a.parent
          }
        return !0
      }),
      (e.prototype.contain = function (t, e) {
        return this.rectContain(t, e)
      }),
      (e.prototype.traverse = function (t, e) {
        t.call(e, this)
      }),
      (e.prototype.rectContain = function (t, e) {
        var n = this.transformCoordToLocal(t, e)
        return this.getBoundingRect().contain(n[0], n[1])
      }),
      (e.prototype.getPaintRect = function () {
        var t = this._paintRect
        if (!this._paintRect || this.__dirty) {
          var e = this.transform,
            n = this.getBoundingRect(),
            i = this.style,
            r = i.shadowBlur || 0,
            o = i.shadowOffsetX || 0,
            a = i.shadowOffsetY || 0
          ;(t = this._paintRect || (this._paintRect = new pi(0, 0, 0, 0))),
            e ? pi.applyTransform(t, n, e) : t.copy(n),
            (r || o || a) &&
              ((t.width += 2 * r + Math.abs(o)),
              (t.height += 2 * r + Math.abs(a)),
              (t.x = Math.min(t.x, t.x + o - r)),
              (t.y = Math.min(t.y, t.y + a - r)))
          var s = this.dirtyRectTolerance
          t.isZero() ||
            ((t.x = Math.floor(t.x - s)),
            (t.y = Math.floor(t.y - s)),
            (t.width = Math.ceil(t.width + 1 + 2 * s)),
            (t.height = Math.ceil(t.height + 1 + 2 * s)))
        }
        return t
      }),
      (e.prototype.setPrevPaintRect = function (t) {
        t
          ? ((this._prevPaintRect = this._prevPaintRect || new pi(0, 0, 0, 0)),
            this._prevPaintRect.copy(t))
          : (this._prevPaintRect = null)
      }),
      (e.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect
      }),
      (e.prototype.animateStyle = function (t) {
        return this.animate('style', t)
      }),
      (e.prototype.updateDuringAnimation = function (t) {
        'style' === t ? this.dirtyStyle() : this.markRedraw()
      }),
      (e.prototype.attrKV = function (e, n) {
        'style' !== e
          ? t.prototype.attrKV.call(this, e, n)
          : this.style
          ? this.setStyle(n)
          : this.useStyle(n)
      }),
      (e.prototype.setStyle = function (t, e) {
        return (
          'string' == typeof t ? (this.style[t] = e) : N(this.style, t),
          this.dirtyStyle(),
          this
        )
      }),
      (e.prototype.dirtyStyle = function (t) {
        t || this.markRedraw(),
          (this.__dirty |= 2),
          this._rect && (this._rect = null)
      }),
      (e.prototype.dirty = function () {
        this.dirtyStyle()
      }),
      (e.prototype.styleChanged = function () {
        return !!(2 & this.__dirty)
      }),
      (e.prototype.styleUpdated = function () {
        this.__dirty &= -3
      }),
      (e.prototype.createStyle = function (t) {
        return xt(ro, t)
      }),
      (e.prototype.useStyle = function (t) {
        t[io] || (t = this.createStyle(t)),
          this.__inHover ? (this.__hoverStyle = t) : (this.style = t),
          this.dirtyStyle()
      }),
      (e.prototype.isStyleObject = function (t) {
        return t[io]
      }),
      (e.prototype._innerSaveToNormal = function (e) {
        t.prototype._innerSaveToNormal.call(this, e)
        var n = this._normalState
        e.style &&
          !n.style &&
          (n.style = this._mergeStyle(this.createStyle(), this.style)),
          this._savePrimaryToNormal(e, n, ao)
      }),
      (e.prototype._applyStateObj = function (e, n, i, r, o, a) {
        t.prototype._applyStateObj.call(this, e, n, i, r, o, a)
        var s,
          l = !(n && r)
        if (
          (n && n.style
            ? o
              ? r
                ? (s = n.style)
                : ((s = this._mergeStyle(this.createStyle(), i.style)),
                  this._mergeStyle(s, n.style))
              : ((s = this._mergeStyle(
                  this.createStyle(),
                  r ? this.style : i.style
                )),
                this._mergeStyle(s, n.style))
            : l && (s = i.style),
          s)
        )
          if (o) {
            var u = this.style
            if (((this.style = this.createStyle(l ? {} : u)), l))
              for (var h = Z(u), c = 0; c < h.length; c++) {
                ;(f = h[c]) in s && ((s[f] = s[f]), (this.style[f] = u[f]))
              }
            var p = Z(s)
            for (c = 0; c < p.length; c++) {
              var f = p[c]
              this.style[f] = this.style[f]
            }
            this._transitionState(
              e,
              { style: s },
              a,
              this.getAnimationStyleProps()
            )
          } else this.useStyle(s)
        var d = this.__inHover ? so : ao
        for (c = 0; c < d.length; c++) {
          f = d[c]
          n && null != n[f]
            ? (this[f] = n[f])
            : l && null != i[f] && (this[f] = i[f])
        }
      }),
      (e.prototype._mergeStates = function (e) {
        for (
          var n, i = t.prototype._mergeStates.call(this, e), r = 0;
          r < e.length;
          r++
        ) {
          var o = e[r]
          o.style && ((n = n || {}), this._mergeStyle(n, o.style))
        }
        return n && (i.style = n), i
      }),
      (e.prototype._mergeStyle = function (t, e) {
        return N(t, e), t
      }),
      (e.prototype.getAnimationStyleProps = function () {
        return oo
      }),
      (e.initDefaultProps =
        (((n = e.prototype).type = 'displayable'),
        (n.invisible = !1),
        (n.z = 0),
        (n.z2 = 0),
        (n.zlevel = 0),
        (n.culling = !1),
        (n.cursor = 'pointer'),
        (n.rectHover = !1),
        (n.incremental = !1),
        (n._rect = null),
        (n.dirtyRectTolerance = 0),
        void (n.__dirty = 3))),
      e
    )
  })(Oi),
  uo = new pi(0, 0, 0, 0),
  ho = new pi(0, 0, 0, 0)
var co = lo,
  po = Math.pow,
  fo = Math.sqrt,
  go = fo(3),
  yo = 1 / 3,
  vo = Mt(),
  mo = Mt(),
  _o = Mt()
function xo(t) {
  return t > -1e-8 && t < 1e-8
}
function wo(t) {
  return t > 1e-8 || t < -1e-8
}
function bo(t, e, n, i, r) {
  var o = 1 - r
  return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
}
function So(t, e, n, i, r) {
  var o = 1 - r
  return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
}
function To(t, e, n, i, r, o) {
  var a = i + 3 * (e - n) - t,
    s = 3 * (n - 2 * e + t),
    l = 3 * (e - t),
    u = t - r,
    h = s * s - 3 * a * l,
    c = s * l - 9 * a * u,
    p = l * l - 3 * s * u,
    f = 0
  if (xo(h) && xo(c)) {
    if (xo(s)) o[0] = 0
    else (T = -l / s) >= 0 && T <= 1 && (o[f++] = T)
  } else {
    var d = c * c - 4 * h * p
    if (xo(d)) {
      var g = c / h,
        y = -g / 2
      ;(T = -s / a + g) >= 0 && T <= 1 && (o[f++] = T),
        y >= 0 && y <= 1 && (o[f++] = y)
    } else if (d > 0) {
      var v = fo(d),
        m = h * s + 1.5 * a * (-c + v),
        _ = h * s + 1.5 * a * (-c - v)
      ;(T =
        (-s -
          ((m = m < 0 ? -po(-m, yo) : po(m, yo)) +
            (_ = _ < 0 ? -po(-_, yo) : po(_, yo)))) /
        (3 * a)) >= 0 &&
        T <= 1 &&
        (o[f++] = T)
    } else {
      var x = (2 * h * s - 3 * a * c) / (2 * fo(h * h * h)),
        w = Math.acos(x) / 3,
        b = fo(h),
        S = Math.cos(w),
        T = (-s - 2 * b * S) / (3 * a),
        M =
          ((y = (-s + b * (S + go * Math.sin(w))) / (3 * a)),
          (-s + b * (S - go * Math.sin(w))) / (3 * a))
      T >= 0 && T <= 1 && (o[f++] = T),
        y >= 0 && y <= 1 && (o[f++] = y),
        M >= 0 && M <= 1 && (o[f++] = M)
    }
  }
  return f
}
function Mo(t, e, n, i, r) {
  var o = 6 * n - 12 * e + 6 * t,
    a = 9 * e + 3 * i - 3 * t - 9 * n,
    s = 3 * e - 3 * t,
    l = 0
  if (xo(a)) {
    if (wo(o)) (h = -s / o) >= 0 && h <= 1 && (r[l++] = h)
  } else {
    var u = o * o - 4 * a * s
    if (xo(u)) r[0] = -o / (2 * a)
    else if (u > 0) {
      var h,
        c = fo(u),
        p = (-o - c) / (2 * a)
      ;(h = (-o + c) / (2 * a)) >= 0 && h <= 1 && (r[l++] = h),
        p >= 0 && p <= 1 && (r[l++] = p)
    }
  }
  return l
}
function Co(t, e, n, i, r, o) {
  var a = (e - t) * r + t,
    s = (n - e) * r + e,
    l = (i - n) * r + n,
    u = (s - a) * r + a,
    h = (l - s) * r + s,
    c = (h - u) * r + u
  ;(o[0] = t),
    (o[1] = a),
    (o[2] = u),
    (o[3] = c),
    (o[4] = c),
    (o[5] = h),
    (o[6] = l),
    (o[7] = i)
}
function ko(t, e, n, i, r, o, a, s, l) {
  for (var u = t, h = e, c = 0, p = 1 / l, f = 1; f <= l; f++) {
    var d = f * p,
      g = bo(t, n, r, a, d),
      y = bo(e, i, o, s, d),
      v = g - u,
      m = y - h
    ;(c += Math.sqrt(v * v + m * m)), (u = g), (h = y)
  }
  return c
}
function Io(t, e, n, i) {
  var r = 1 - i
  return r * (r * t + 2 * i * e) + i * i * n
}
function Do(t, e, n, i) {
  return 2 * ((1 - i) * (e - t) + i * (n - e))
}
function Ao(t, e, n) {
  var i = t + n - 2 * e
  return 0 === i ? 0.5 : (t - e) / i
}
function Po(t, e, n, i, r) {
  var o = (e - t) * i + t,
    a = (n - e) * i + e,
    s = (a - o) * i + o
  ;(r[0] = t), (r[1] = o), (r[2] = s), (r[3] = s), (r[4] = a), (r[5] = n)
}
function Oo(t, e, n, i, r, o, a) {
  for (var s = t, l = e, u = 0, h = 1 / a, c = 1; c <= a; c++) {
    var p = c * h,
      f = Io(t, n, r, p),
      d = Io(e, i, o, p),
      g = f - s,
      y = d - l
    ;(u += Math.sqrt(g * g + y * y)), (s = f), (l = d)
  }
  return u
}
var Lo = Math.min,
  Ro = Math.max,
  Bo = Math.sin,
  zo = Math.cos,
  Eo = 2 * Math.PI,
  No = Mt(),
  Fo = Mt(),
  Ho = Mt()
function Vo(t, e, n) {
  if (0 !== t.length) {
    for (
      var i = t[0], r = i[0], o = i[0], a = i[1], s = i[1], l = 1;
      l < t.length;
      l++
    )
      (i = t[l]),
        (r = Lo(r, i[0])),
        (o = Ro(o, i[0])),
        (a = Lo(a, i[1])),
        (s = Ro(s, i[1]))
    ;(e[0] = r), (e[1] = a), (n[0] = o), (n[1] = s)
  }
}
function Wo(t, e, n, i, r, o) {
  ;(r[0] = Lo(t, n)), (r[1] = Lo(e, i)), (o[0] = Ro(t, n)), (o[1] = Ro(e, i))
}
var Go = [],
  Uo = []
function Xo(t, e, n, i, r, o, a, s, l, u) {
  var h = Mo,
    c = bo,
    p = h(t, n, r, a, Go)
  ;(l[0] = 1 / 0), (l[1] = 1 / 0), (u[0] = -1 / 0), (u[1] = -1 / 0)
  for (var f = 0; f < p; f++) {
    var d = c(t, n, r, a, Go[f])
    ;(l[0] = Lo(d, l[0])), (u[0] = Ro(d, u[0]))
  }
  p = h(e, i, o, s, Uo)
  for (f = 0; f < p; f++) {
    var g = c(e, i, o, s, Uo[f])
    ;(l[1] = Lo(g, l[1])), (u[1] = Ro(g, u[1]))
  }
  ;(l[0] = Lo(t, l[0])),
    (u[0] = Ro(t, u[0])),
    (l[0] = Lo(a, l[0])),
    (u[0] = Ro(a, u[0])),
    (l[1] = Lo(e, l[1])),
    (u[1] = Ro(e, u[1])),
    (l[1] = Lo(s, l[1])),
    (u[1] = Ro(s, u[1]))
}
function Yo(t, e, n, i, r, o, a, s) {
  var l = Ao,
    u = Io,
    h = Ro(Lo(l(t, n, r), 1), 0),
    c = Ro(Lo(l(e, i, o), 1), 0),
    p = u(t, n, r, h),
    f = u(e, i, o, c)
  ;(a[0] = Lo(t, r, p)),
    (a[1] = Lo(e, o, f)),
    (s[0] = Ro(t, r, p)),
    (s[1] = Ro(e, o, f))
}
function jo(t, e, n, i, r, o, a, s, l) {
  var u = Ht,
    h = Vt,
    c = Math.abs(r - o)
  if (c % Eo < 1e-4 && c > 1e-4)
    return (s[0] = t - n), (s[1] = e - i), (l[0] = t + n), void (l[1] = e + i)
  if (
    ((No[0] = zo(r) * n + t),
    (No[1] = Bo(r) * i + e),
    (Fo[0] = zo(o) * n + t),
    (Fo[1] = Bo(o) * i + e),
    u(s, No, Fo),
    h(l, No, Fo),
    (r %= Eo) < 0 && (r += Eo),
    (o %= Eo) < 0 && (o += Eo),
    r > o && !a ? (o += Eo) : r < o && a && (r += Eo),
    a)
  ) {
    var p = o
    ;(o = r), (r = p)
  }
  for (var f = 0; f < o; f += Math.PI / 2)
    f > r &&
      ((Ho[0] = zo(f) * n + t),
      (Ho[1] = Bo(f) * i + e),
      u(s, Ho, s),
      h(l, Ho, l))
}
var qo = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
  Zo = [],
  Ko = [],
  $o = [],
  Qo = [],
  Jo = [],
  ta = [],
  ea = Math.min,
  na = Math.max,
  ia = Math.cos,
  ra = Math.sin,
  oa = Math.sqrt,
  aa = Math.abs,
  sa = Math.PI,
  la = 2 * sa,
  ua = 'undefined' != typeof Float32Array,
  ha = []
function ca(t) {
  return ((Math.round((t / sa) * 1e8) / 1e8) % 2) * sa
}
function pa(t, e) {
  var n = ca(t[0])
  n < 0 && (n += la)
  var i = n - t[0],
    r = t[1]
  ;(r += i),
    !e && r - n >= la
      ? (r = n + la)
      : e && n - r >= la
      ? (r = n - la)
      : !e && n > r
      ? (r = n + (la - ca(n - r)))
      : e && n < r && (r = n - (la - ca(r - n))),
    (t[0] = n),
    (t[1] = r)
}
var fa = (function () {
  function t(t) {
    ;(this.dpr = 1),
      (this._xi = 0),
      (this._yi = 0),
      (this._x0 = 0),
      (this._y0 = 0),
      (this._len = 0),
      t && (this._saveData = !1),
      this._saveData && (this.data = [])
  }
  var e
  return (
    (t.prototype.increaseVersion = function () {
      this._version++
    }),
    (t.prototype.getVersion = function () {
      return this._version
    }),
    (t.prototype.setScale = function (t, e, n) {
      ;(n = n || 0) > 0 &&
        ((this._ux = aa(n / zn / t) || 0), (this._uy = aa(n / zn / e) || 0))
    }),
    (t.prototype.setDPR = function (t) {
      this.dpr = t
    }),
    (t.prototype.setContext = function (t) {
      this._ctx = t
    }),
    (t.prototype.getContext = function () {
      return this._ctx
    }),
    (t.prototype.beginPath = function () {
      return this._ctx && this._ctx.beginPath(), this.reset(), this
    }),
    (t.prototype.reset = function () {
      this._saveData && (this._len = 0),
        this._lineDash && ((this._lineDash = null), (this._dashOffset = 0)),
        this._pathSegLen && ((this._pathSegLen = null), (this._pathLen = 0)),
        this._version++
    }),
    (t.prototype.moveTo = function (t, e) {
      return (
        this._drawPendingPt(),
        this.addData(qo.M, t, e),
        this._ctx && this._ctx.moveTo(t, e),
        (this._x0 = t),
        (this._y0 = e),
        (this._xi = t),
        (this._yi = e),
        this
      )
    }),
    (t.prototype.lineTo = function (t, e) {
      var n = aa(t - this._xi),
        i = aa(e - this._yi),
        r = n > this._ux || i > this._uy
      if (
        (this.addData(qo.L, t, e),
        this._ctx &&
          r &&
          (this._needsDash ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)),
        r)
      )
        (this._xi = t), (this._yi = e), (this._pendingPtDist = 0)
      else {
        var o = n * n + i * i
        o > this._pendingPtDist &&
          ((this._pendingPtX = t),
          (this._pendingPtY = e),
          (this._pendingPtDist = o))
      }
      return this
    }),
    (t.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
      return (
        this._drawPendingPt(),
        this.addData(qo.C, t, e, n, i, r, o),
        this._ctx &&
          (this._needsDash
            ? this._dashedBezierTo(t, e, n, i, r, o)
            : this._ctx.bezierCurveTo(t, e, n, i, r, o)),
        (this._xi = r),
        (this._yi = o),
        this
      )
    }),
    (t.prototype.quadraticCurveTo = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this.addData(qo.Q, t, e, n, i),
        this._ctx &&
          (this._needsDash
            ? this._dashedQuadraticTo(t, e, n, i)
            : this._ctx.quadraticCurveTo(t, e, n, i)),
        (this._xi = n),
        (this._yi = i),
        this
      )
    }),
    (t.prototype.arc = function (t, e, n, i, r, o) {
      this._drawPendingPt(), (ha[0] = i), (ha[1] = r), pa(ha, o), (i = ha[0])
      var a = (r = ha[1]) - i
      return (
        this.addData(qo.A, t, e, n, n, i, a, 0, o ? 0 : 1),
        this._ctx && this._ctx.arc(t, e, n, i, r, o),
        (this._xi = ia(r) * n + t),
        (this._yi = ra(r) * n + e),
        this
      )
    }),
    (t.prototype.arcTo = function (t, e, n, i, r) {
      return (
        this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, r), this
      )
    }),
    (t.prototype.rect = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this._ctx && this._ctx.rect(t, e, n, i),
        this.addData(qo.R, t, e, n, i),
        this
      )
    }),
    (t.prototype.closePath = function () {
      this._drawPendingPt(), this.addData(qo.Z)
      var t = this._ctx,
        e = this._x0,
        n = this._y0
      return (
        t && (this._needsDash && this._dashedLineTo(e, n), t.closePath()),
        (this._xi = e),
        (this._yi = n),
        this
      )
    }),
    (t.prototype.fill = function (t) {
      t && t.fill(), this.toStatic()
    }),
    (t.prototype.stroke = function (t) {
      t && t.stroke(), this.toStatic()
    }),
    (t.prototype.setLineDash = function (t) {
      if (t instanceof Array) {
        ;(this._lineDash = t), (this._dashIdx = 0)
        for (var e = 0, n = 0; n < t.length; n++) e += t[n]
        ;(this._dashSum = e), (this._needsDash = !0)
      } else (this._lineDash = null), (this._needsDash = !1)
      return this
    }),
    (t.prototype.setLineDashOffset = function (t) {
      return (this._dashOffset = t), this
    }),
    (t.prototype.len = function () {
      return this._len
    }),
    (t.prototype.setData = function (t) {
      var e = t.length
      ;(this.data && this.data.length === e) ||
        !ua ||
        (this.data = new Float32Array(e))
      for (var n = 0; n < e; n++) this.data[n] = t[n]
      this._len = e
    }),
    (t.prototype.appendPath = function (t) {
      t instanceof Array || (t = [t])
      for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++)
        n += t[r].len()
      ua &&
        this.data instanceof Float32Array &&
        (this.data = new Float32Array(i + n))
      for (r = 0; r < e; r++)
        for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a]
      this._len = i
    }),
    (t.prototype.addData = function (t, e, n, i, r, o, a, s, l) {
      if (this._saveData) {
        var u = this.data
        this._len + arguments.length > u.length &&
          (this._expandData(), (u = this.data))
        for (var h = 0; h < arguments.length; h++) u[this._len++] = arguments[h]
      }
    }),
    (t.prototype._drawPendingPt = function () {
      this._pendingPtDist > 0 &&
        (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
        (this._pendingPtDist = 0))
    }),
    (t.prototype._expandData = function () {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e]
        this.data = t
      }
    }),
    (t.prototype._dashedLineTo = function (t, e) {
      var n,
        i,
        r = this._dashSum,
        o = this._lineDash,
        a = this._ctx,
        s = this._dashOffset,
        l = this._xi,
        u = this._yi,
        h = t - l,
        c = e - u,
        p = oa(h * h + c * c),
        f = l,
        d = u,
        g = o.length
      for (
        s < 0 && (s = r + s), f -= (s %= r) * (h /= p), d -= s * (c /= p);
        (h > 0 && f <= t) ||
        (h < 0 && f >= t) ||
        (0 === h && ((c > 0 && d <= e) || (c < 0 && d >= e)));

      )
        (f += h * (n = o[(i = this._dashIdx)])),
          (d += c * n),
          (this._dashIdx = (i + 1) % g),
          (h > 0 && f < l) ||
            (h < 0 && f > l) ||
            (c > 0 && d < u) ||
            (c < 0 && d > u) ||
            a[i % 2 ? 'moveTo' : 'lineTo'](
              h >= 0 ? ea(f, t) : na(f, t),
              c >= 0 ? ea(d, e) : na(d, e)
            )
      ;(h = f - t), (c = d - e), (this._dashOffset = -oa(h * h + c * c))
    }),
    (t.prototype._dashedBezierTo = function (t, e, n, i, r, o) {
      var a,
        s,
        l,
        u,
        h,
        c = this._ctx,
        p = this._dashSum,
        f = this._dashOffset,
        d = this._lineDash,
        g = this._xi,
        y = this._yi,
        v = 0,
        m = this._dashIdx,
        _ = d.length,
        x = 0
      for (f < 0 && (f = p + f), f %= p, a = 0; a < 1; a += 0.1)
        (s = bo(g, t, n, r, a + 0.1) - bo(g, t, n, r, a)),
          (l = bo(y, e, i, o, a + 0.1) - bo(y, e, i, o, a)),
          (v += oa(s * s + l * l))
      for (; m < _ && !((x += d[m]) > f); m++);
      for (a = (x - f) / v; a <= 1; )
        (u = bo(g, t, n, r, a)),
          (h = bo(y, e, i, o, a)),
          m % 2 ? c.moveTo(u, h) : c.lineTo(u, h),
          (a += d[m] / v),
          (m = (m + 1) % _)
      m % 2 != 0 && c.lineTo(r, o),
        (s = r - u),
        (l = o - h),
        (this._dashOffset = -oa(s * s + l * l))
    }),
    (t.prototype._dashedQuadraticTo = function (t, e, n, i) {
      var r = n,
        o = i
      ;(n = (n + 2 * t) / 3),
        (i = (i + 2 * e) / 3),
        (t = (this._xi + 2 * t) / 3),
        (e = (this._yi + 2 * e) / 3),
        this._dashedBezierTo(t, e, n, i, r, o)
    }),
    (t.prototype.toStatic = function () {
      if (this._saveData) {
        this._drawPendingPt()
        var t = this.data
        t instanceof Array &&
          ((t.length = this._len),
          ua && this._len > 11 && (this.data = new Float32Array(t)))
      }
    }),
    (t.prototype.getBoundingRect = function () {
      ;($o[0] = $o[1] = Jo[0] = Jo[1] = Number.MAX_VALUE),
        (Qo[0] = Qo[1] = ta[0] = ta[1] = -Number.MAX_VALUE)
      var t,
        e = this.data,
        n = 0,
        i = 0,
        r = 0,
        o = 0
      for (t = 0; t < this._len; ) {
        var a = e[t++],
          s = 1 === t
        switch ((s && ((r = n = e[t]), (o = i = e[t + 1])), a)) {
          case qo.M:
            ;(n = r = e[t++]),
              (i = o = e[t++]),
              (Jo[0] = r),
              (Jo[1] = o),
              (ta[0] = r),
              (ta[1] = o)
            break
          case qo.L:
            Wo(n, i, e[t], e[t + 1], Jo, ta), (n = e[t++]), (i = e[t++])
            break
          case qo.C:
            Xo(n, i, e[t++], e[t++], e[t++], e[t++], e[t], e[t + 1], Jo, ta),
              (n = e[t++]),
              (i = e[t++])
            break
          case qo.Q:
            Yo(n, i, e[t++], e[t++], e[t], e[t + 1], Jo, ta),
              (n = e[t++]),
              (i = e[t++])
            break
          case qo.A:
            var l = e[t++],
              u = e[t++],
              h = e[t++],
              c = e[t++],
              p = e[t++],
              f = e[t++] + p
            t += 1
            var d = !e[t++]
            s && ((r = ia(p) * h + l), (o = ra(p) * c + u)),
              jo(l, u, h, c, p, f, d, Jo, ta),
              (n = ia(f) * h + l),
              (i = ra(f) * c + u)
            break
          case qo.R:
            Wo(
              (r = n = e[t++]),
              (o = i = e[t++]),
              r + e[t++],
              o + e[t++],
              Jo,
              ta
            )
            break
          case qo.Z:
            ;(n = r), (i = o)
        }
        Ht($o, $o, Jo), Vt(Qo, Qo, ta)
      }
      return (
        0 === t && ($o[0] = $o[1] = Qo[0] = Qo[1] = 0),
        new pi($o[0], $o[1], Qo[0] - $o[0], Qo[1] - $o[1])
      )
    }),
    (t.prototype._calculateLength = function () {
      var t = this.data,
        e = this._len,
        n = this._ux,
        i = this._uy,
        r = 0,
        o = 0,
        a = 0,
        s = 0
      this._pathSegLen || (this._pathSegLen = [])
      for (var l = this._pathSegLen, u = 0, h = 0, c = 0; c < e; ) {
        var p = t[c++],
          f = 1 === c
        f && ((a = r = t[c]), (s = o = t[c + 1]))
        var d = -1
        switch (p) {
          case qo.M:
            ;(r = a = t[c++]), (o = s = t[c++])
            break
          case qo.L:
            var g = t[c++],
              y = (_ = t[c++]) - o
            ;(aa((D = g - r)) > n || aa(y) > i || c === e - 1) &&
              ((d = Math.sqrt(D * D + y * y)), (r = g), (o = _))
            break
          case qo.C:
            var v = t[c++],
              m = t[c++],
              _ = ((g = t[c++]), t[c++]),
              x = t[c++],
              w = t[c++]
            ;(d = ko(r, o, v, m, g, _, x, w, 10)), (r = x), (o = w)
            break
          case qo.Q:
            ;(d = Oo(
              r,
              o,
              (v = t[c++]),
              (m = t[c++]),
              (g = t[c++]),
              (_ = t[c++]),
              10
            )),
              (r = g),
              (o = _)
            break
          case qo.A:
            var b = t[c++],
              S = t[c++],
              T = t[c++],
              M = t[c++],
              C = t[c++],
              k = t[c++],
              I = k + C
            ;(c += 1),
              t[c++],
              f && ((a = ia(C) * T + b), (s = ra(C) * M + S)),
              (d = na(T, M) * ea(la, Math.abs(k))),
              (r = ia(I) * T + b),
              (o = ra(I) * M + S)
            break
          case qo.R:
            ;(a = r = t[c++]), (s = o = t[c++]), (d = 2 * t[c++] + 2 * t[c++])
            break
          case qo.Z:
            var D = a - r
            y = s - o
            ;(d = Math.sqrt(D * D + y * y)), (r = a), (o = s)
        }
        d >= 0 && ((l[h++] = d), (u += d))
      }
      return (this._pathLen = u), u
    }),
    (t.prototype.rebuildPath = function (t, e) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p = this.data,
        f = this._ux,
        d = this._uy,
        g = this._len,
        y = e < 1,
        v = 0,
        m = 0,
        _ = 0
      if (
        !y ||
        (this._pathSegLen || this._calculateLength(),
        (l = this._pathSegLen),
        (u = e * this._pathLen))
      )
        t: for (var x = 0; x < g; ) {
          var w = p[x++],
            b = 1 === x
          switch (
            (b && ((n = r = p[x]), (i = o = p[x + 1])),
            w !== qo.L && _ > 0 && (t.lineTo(h, c), (_ = 0)),
            w)
          ) {
            case qo.M:
              ;(n = r = p[x++]), (i = o = p[x++]), t.moveTo(r, o)
              break
            case qo.L:
              ;(a = p[x++]), (s = p[x++])
              var S = aa(a - r),
                T = aa(s - o)
              if (S > f || T > d) {
                if (y) {
                  if (v + (q = l[m++]) > u) {
                    var M = (u - v) / q
                    t.lineTo(r * (1 - M) + a * M, o * (1 - M) + s * M)
                    break t
                  }
                  v += q
                }
                t.lineTo(a, s), (r = a), (o = s), (_ = 0)
              } else {
                var C = S * S + T * T
                C > _ && ((h = a), (c = s), (_ = C))
              }
              break
            case qo.C:
              var k = p[x++],
                I = p[x++],
                D = p[x++],
                A = p[x++],
                P = p[x++],
                O = p[x++]
              if (y) {
                if (v + (q = l[m++]) > u) {
                  Co(r, k, D, P, (M = (u - v) / q), Zo),
                    Co(o, I, A, O, M, Ko),
                    t.bezierCurveTo(Zo[1], Ko[1], Zo[2], Ko[2], Zo[3], Ko[3])
                  break t
                }
                v += q
              }
              t.bezierCurveTo(k, I, D, A, P, O), (r = P), (o = O)
              break
            case qo.Q:
              ;(k = p[x++]), (I = p[x++]), (D = p[x++]), (A = p[x++])
              if (y) {
                if (v + (q = l[m++]) > u) {
                  Po(r, k, D, (M = (u - v) / q), Zo),
                    Po(o, I, A, M, Ko),
                    t.quadraticCurveTo(Zo[1], Ko[1], Zo[2], Ko[2])
                  break t
                }
                v += q
              }
              t.quadraticCurveTo(k, I, D, A), (r = D), (o = A)
              break
            case qo.A:
              var L = p[x++],
                R = p[x++],
                B = p[x++],
                z = p[x++],
                E = p[x++],
                N = p[x++],
                F = p[x++],
                H = !p[x++],
                V = B > z ? B : z,
                W = aa(B - z) > 0.001,
                G = E + N,
                U = !1
              if (y)
                v + (q = l[m++]) > u && ((G = E + (N * (u - v)) / q), (U = !0)),
                  (v += q)
              if (
                (W && t.ellipse
                  ? t.ellipse(L, R, B, z, F, E, G, H)
                  : t.arc(L, R, V, E, G, H),
                U)
              )
                break t
              b && ((n = ia(E) * B + L), (i = ra(E) * z + R)),
                (r = ia(G) * B + L),
                (o = ra(G) * z + R)
              break
            case qo.R:
              ;(n = r = p[x]), (i = o = p[x + 1]), (a = p[x++]), (s = p[x++])
              var X = p[x++],
                Y = p[x++]
              if (y) {
                if (v + (q = l[m++]) > u) {
                  var j = u - v
                  t.moveTo(a, s),
                    t.lineTo(a + ea(j, X), s),
                    (j -= X) > 0 && t.lineTo(a + X, s + ea(j, Y)),
                    (j -= Y) > 0 && t.lineTo(a + na(X - j, 0), s + Y),
                    (j -= X) > 0 && t.lineTo(a, s + na(Y - j, 0))
                  break t
                }
                v += q
              }
              t.rect(a, s, X, Y)
              break
            case qo.Z:
              if (y) {
                var q
                if (v + (q = l[m++]) > u) {
                  M = (u - v) / q
                  t.lineTo(r * (1 - M) + n * M, o * (1 - M) + i * M)
                  break t
                }
                v += q
              }
              t.closePath(), (r = n), (o = i)
          }
        }
    }),
    (t.prototype.clone = function () {
      var e = new t(),
        n = this.data
      return (
        (e.data = n.slice ? n.slice() : Array.prototype.slice.call(n)),
        (e._len = this._len),
        e
      )
    }),
    (t.CMD = qo),
    (t.initDefaultProps =
      (((e = t.prototype)._saveData = !0),
      (e._needsDash = !1),
      (e._dashOffset = 0),
      (e._dashIdx = 0),
      (e._dashSum = 0),
      (e._ux = 0),
      (e._uy = 0),
      (e._pendingPtDist = 0),
      void (e._version = 0))),
    t
  )
})()
function da(t, e, n, i, r, o, a) {
  if (0 === r) return !1
  var s = r,
    l = 0
  if (
    (a > e + s && a > i + s) ||
    (a < e - s && a < i - s) ||
    (o > t + s && o > n + s) ||
    (o < t - s && o < n - s)
  )
    return !1
  if (t === n) return Math.abs(o - t) <= s / 2
  var u = (l = (e - i) / (t - n)) * o - a + (t * i - n * e) / (t - n)
  return (u * u) / (l * l + 1) <= ((s / 2) * s) / 2
}
function ga(t, e, n, i, r, o, a, s, l, u, h) {
  if (0 === l) return !1
  var c = l
  return (
    !(
      (h > e + c && h > i + c && h > o + c && h > s + c) ||
      (h < e - c && h < i - c && h < o - c && h < s - c) ||
      (u > t + c && u > n + c && u > r + c && u > a + c) ||
      (u < t - c && u < n - c && u < r - c && u < a - c)
    ) &&
    (function (t, e, n, i, r, o, a, s, l, u, h) {
      var c,
        p,
        f,
        d,
        g,
        y = 0.005,
        v = 1 / 0
      ;(vo[0] = l), (vo[1] = u)
      for (var m = 0; m < 1; m += 0.05)
        (mo[0] = bo(t, n, r, a, m)),
          (mo[1] = bo(e, i, o, s, m)),
          (d = Et(vo, mo)) < v && ((c = m), (v = d))
      v = 1 / 0
      for (var _ = 0; _ < 32 && !(y < 1e-4); _++)
        (p = c - y),
          (f = c + y),
          (mo[0] = bo(t, n, r, a, p)),
          (mo[1] = bo(e, i, o, s, p)),
          (d = Et(mo, vo)),
          p >= 0 && d < v
            ? ((c = p), (v = d))
            : ((_o[0] = bo(t, n, r, a, f)),
              (_o[1] = bo(e, i, o, s, f)),
              (g = Et(_o, vo)),
              f <= 1 && g < v ? ((c = f), (v = g)) : (y *= 0.5))
      return (
        h && ((h[0] = bo(t, n, r, a, c)), (h[1] = bo(e, i, o, s, c))), fo(v)
      )
    })(t, e, n, i, r, o, a, s, u, h, null) <=
      c / 2
  )
}
function ya(t, e, n, i, r, o, a, s, l) {
  if (0 === a) return !1
  var u = a
  return (
    !(
      (l > e + u && l > i + u && l > o + u) ||
      (l < e - u && l < i - u && l < o - u) ||
      (s > t + u && s > n + u && s > r + u) ||
      (s < t - u && s < n - u && s < r - u)
    ) &&
    (function (t, e, n, i, r, o, a, s, l) {
      var u,
        h = 0.005,
        c = 1 / 0
      ;(vo[0] = a), (vo[1] = s)
      for (var p = 0; p < 1; p += 0.05)
        (mo[0] = Io(t, n, r, p)),
          (mo[1] = Io(e, i, o, p)),
          (y = Et(vo, mo)) < c && ((u = p), (c = y))
      c = 1 / 0
      for (var f = 0; f < 32 && !(h < 1e-4); f++) {
        var d = u - h,
          g = u + h
        ;(mo[0] = Io(t, n, r, d)), (mo[1] = Io(e, i, o, d))
        var y = Et(mo, vo)
        if (d >= 0 && y < c) (u = d), (c = y)
        else {
          ;(_o[0] = Io(t, n, r, g)), (_o[1] = Io(e, i, o, g))
          var v = Et(_o, vo)
          g <= 1 && v < c ? ((u = g), (c = v)) : (h *= 0.5)
        }
      }
      return l && ((l[0] = Io(t, n, r, u)), (l[1] = Io(e, i, o, u))), fo(c)
    })(t, e, n, i, r, o, s, l, null) <=
      u / 2
  )
}
var va = 2 * Math.PI
function ma(t) {
  return (t %= va) < 0 && (t += va), t
}
var _a = 2 * Math.PI
function xa(t, e, n, i, r, o, a, s, l) {
  if (0 === a) return !1
  var u = a
  ;(s -= t), (l -= e)
  var h = Math.sqrt(s * s + l * l)
  if (h - u > n || h + u < n) return !1
  if (Math.abs(i - r) % _a < 1e-4) return !0
  if (o) {
    var c = i
    ;(i = ma(r)), (r = ma(c))
  } else (i = ma(i)), (r = ma(r))
  i > r && (r += _a)
  var p = Math.atan2(l, s)
  return p < 0 && (p += _a), (p >= i && p <= r) || (p + _a >= i && p + _a <= r)
}
function wa(t, e, n, i, r, o) {
  if ((o > e && o > i) || (o < e && o < i)) return 0
  if (i === e) return 0
  var a = (o - e) / (i - e),
    s = i < e ? 1 : -1
  ;(1 !== a && 0 !== a) || (s = i < e ? 0.5 : -0.5)
  var l = a * (n - t) + t
  return l === r ? 1 / 0 : l > r ? s : 0
}
var ba = fa.CMD,
  Sa = 2 * Math.PI
var Ta = [-1, -1, -1],
  Ma = [-1, -1]
function Ca(t, e, n, i, r, o, a, s, l, u) {
  if ((u > e && u > i && u > o && u > s) || (u < e && u < i && u < o && u < s))
    return 0
  var h,
    c = To(e, i, o, s, u, Ta)
  if (0 === c) return 0
  for (var p = 0, f = -1, d = void 0, g = void 0, y = 0; y < c; y++) {
    var v = Ta[y],
      m = 0 === v || 1 === v ? 0.5 : 1
    bo(t, n, r, a, v) < l ||
      (f < 0 &&
        ((f = Mo(e, i, o, s, Ma)),
        Ma[1] < Ma[0] &&
          f > 1 &&
          ((h = void 0), (h = Ma[0]), (Ma[0] = Ma[1]), (Ma[1] = h)),
        (d = bo(e, i, o, s, Ma[0])),
        f > 1 && (g = bo(e, i, o, s, Ma[1]))),
      2 === f
        ? v < Ma[0]
          ? (p += d < e ? m : -m)
          : v < Ma[1]
          ? (p += g < d ? m : -m)
          : (p += s < g ? m : -m)
        : v < Ma[0]
        ? (p += d < e ? m : -m)
        : (p += s < d ? m : -m))
  }
  return p
}
function ka(t, e, n, i, r, o, a, s) {
  if ((s > e && s > i && s > o) || (s < e && s < i && s < o)) return 0
  var l = (function (t, e, n, i, r) {
    var o = t - 2 * e + n,
      a = 2 * (e - t),
      s = t - i,
      l = 0
    if (xo(o)) wo(a) && (h = -s / a) >= 0 && h <= 1 && (r[l++] = h)
    else {
      var u = a * a - 4 * o * s
      if (xo(u)) (h = -a / (2 * o)) >= 0 && h <= 1 && (r[l++] = h)
      else if (u > 0) {
        var h,
          c = fo(u),
          p = (-a - c) / (2 * o)
        ;(h = (-a + c) / (2 * o)) >= 0 && h <= 1 && (r[l++] = h),
          p >= 0 && p <= 1 && (r[l++] = p)
      }
    }
    return l
  })(e, i, o, s, Ta)
  if (0 === l) return 0
  var u = Ao(e, i, o)
  if (u >= 0 && u <= 1) {
    for (var h = 0, c = Io(e, i, o, u), p = 0; p < l; p++) {
      var f = 0 === Ta[p] || 1 === Ta[p] ? 0.5 : 1
      Io(t, n, r, Ta[p]) < a ||
        (Ta[p] < u ? (h += c < e ? f : -f) : (h += o < c ? f : -f))
    }
    return h
  }
  f = 0 === Ta[0] || 1 === Ta[0] ? 0.5 : 1
  return Io(t, n, r, Ta[0]) < a ? 0 : o < e ? f : -f
}
function Ia(t, e, n, i, r, o, a, s) {
  if ((s -= e) > n || s < -n) return 0
  var l = Math.sqrt(n * n - s * s)
  ;(Ta[0] = -l), (Ta[1] = l)
  var u = Math.abs(i - r)
  if (u < 1e-4) return 0
  if (u >= Sa - 1e-4) {
    ;(i = 0), (r = Sa)
    var h = o ? 1 : -1
    return a >= Ta[0] + t && a <= Ta[1] + t ? h : 0
  }
  if (i > r) {
    var c = i
    ;(i = r), (r = c)
  }
  i < 0 && ((i += Sa), (r += Sa))
  for (var p = 0, f = 0; f < 2; f++) {
    var d = Ta[f]
    if (d + t > a) {
      var g = Math.atan2(s, d)
      h = o ? 1 : -1
      g < 0 && (g = Sa + g),
        ((g >= i && g <= r) || (g + Sa >= i && g + Sa <= r)) &&
          (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), (p += h))
    }
  }
  return p
}
function Da(t, e, n, i, r) {
  for (
    var o,
      a,
      s,
      l,
      u = t.data,
      h = t.len(),
      c = 0,
      p = 0,
      f = 0,
      d = 0,
      g = 0,
      y = 0;
    y < h;

  ) {
    var v = u[y++],
      m = 1 === y
    switch (
      (v === ba.M && y > 1 && (n || (c += wa(p, f, d, g, i, r))),
      m && ((d = p = u[y]), (g = f = u[y + 1])),
      v)
    ) {
      case ba.M:
        ;(p = d = u[y++]), (f = g = u[y++])
        break
      case ba.L:
        if (n) {
          if (da(p, f, u[y], u[y + 1], e, i, r)) return !0
        } else c += wa(p, f, u[y], u[y + 1], i, r) || 0
        ;(p = u[y++]), (f = u[y++])
        break
      case ba.C:
        if (n) {
          if (ga(p, f, u[y++], u[y++], u[y++], u[y++], u[y], u[y + 1], e, i, r))
            return !0
        } else
          c +=
            Ca(p, f, u[y++], u[y++], u[y++], u[y++], u[y], u[y + 1], i, r) || 0
        ;(p = u[y++]), (f = u[y++])
        break
      case ba.Q:
        if (n) {
          if (ya(p, f, u[y++], u[y++], u[y], u[y + 1], e, i, r)) return !0
        } else c += ka(p, f, u[y++], u[y++], u[y], u[y + 1], i, r) || 0
        ;(p = u[y++]), (f = u[y++])
        break
      case ba.A:
        var _ = u[y++],
          x = u[y++],
          w = u[y++],
          b = u[y++],
          S = u[y++],
          T = u[y++]
        y += 1
        var M = !!(1 - u[y++])
        ;(o = Math.cos(S) * w + _),
          (a = Math.sin(S) * b + x),
          m ? ((d = o), (g = a)) : (c += wa(p, f, o, a, i, r))
        var C = ((i - _) * b) / w + _
        if (n) {
          if (xa(_, x, b, S, S + T, M, e, C, r)) return !0
        } else c += Ia(_, x, b, S, S + T, M, C, r)
        ;(p = Math.cos(S + T) * w + _), (f = Math.sin(S + T) * b + x)
        break
      case ba.R:
        if (
          ((d = p = u[y++]),
          (g = f = u[y++]),
          (o = d + u[y++]),
          (a = g + u[y++]),
          n)
        ) {
          if (
            da(d, g, o, g, e, i, r) ||
            da(o, g, o, a, e, i, r) ||
            da(o, a, d, a, e, i, r) ||
            da(d, a, d, g, e, i, r)
          )
            return !0
        } else (c += wa(o, g, o, a, i, r)), (c += wa(d, a, d, g, i, r))
        break
      case ba.Z:
        if (n) {
          if (da(p, f, d, g, e, i, r)) return !0
        } else c += wa(p, f, d, g, i, r)
        ;(p = d), (f = g)
    }
  }
  return (
    n ||
      ((s = f), (l = g), Math.abs(s - l) < 1e-4) ||
      (c += wa(p, f, d, g, i, r) || 0),
    0 !== c
  )
}
var Aa = F(
    {
      fill: '#000',
      stroke: null,
      strokePercent: 1,
      fillOpacity: 1,
      strokeOpacity: 1,
      lineDashOffset: 0,
      lineWidth: 1,
      lineCap: 'butt',
      miterLimit: 10,
      strokeNoScale: !1,
      strokeFirst: !1,
    },
    ro
  ),
  Pa = {
    style: F(
      {
        fill: !0,
        stroke: !0,
        strokePercent: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineDashOffset: !0,
        lineWidth: !0,
        miterLimit: !0,
      },
      oo.style
    ),
  },
  Oa = [
    'x',
    'y',
    'rotation',
    'scaleX',
    'scaleY',
    'originX',
    'originY',
    'invisible',
    'culling',
    'z',
    'z2',
    'zlevel',
    'parent',
  ],
  La = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    var n
    return (
      Tt(e, t),
      (e.prototype.update = function () {
        var n = this
        t.prototype.update.call(this)
        var i = this.style
        if (i.decal) {
          var r = (this._decalEl = this._decalEl || new e())
          r.buildPath === e.prototype.buildPath &&
            (r.buildPath = function (t) {
              n.buildPath(t, n.shape)
            }),
            (r.silent = !0)
          var o = r.style
          for (var a in i) o[a] !== i[a] && (o[a] = i[a])
          ;(o.fill = i.fill ? i.decal : null),
            (o.decal = null),
            (o.shadowColor = null),
            i.strokeFirst && (o.stroke = null)
          for (var s = 0; s < Oa.length; ++s) r[Oa[s]] = this[Oa[s]]
          r.__dirty |= 1
        } else this._decalEl && (this._decalEl = null)
      }),
      (e.prototype.getDecalElement = function () {
        return this._decalEl
      }),
      (e.prototype._init = function (e) {
        var n = Z(e)
        this.shape = this.getDefaultShape()
        var i = this.getDefaultStyle()
        i && this.useStyle(i)
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            a = e[o]
          'style' === o
            ? this.style
              ? N(this.style, a)
              : this.useStyle(a)
            : 'shape' === o
            ? N(this.shape, a)
            : t.prototype.attrKV.call(this, o, a)
        }
        this.style || this.useStyle({})
      }),
      (e.prototype.getDefaultStyle = function () {
        return null
      }),
      (e.prototype.getDefaultShape = function () {
        return {}
      }),
      (e.prototype.canBeInsideText = function () {
        return this.hasFill()
      }),
      (e.prototype.getInsideTextFill = function () {
        var t = this.style.fill
        if ('none' !== t) {
          if (tt(t)) {
            var e = Je(t, 0)
            return e > 0.5 ? '#333' : e > 0.2 ? '#eee' : '#ccc'
          }
          if (t) return '#ccc'
        }
        return '#333'
      }),
      (e.prototype.getInsideTextStroke = function (t) {
        var e = this.style.fill
        if (tt(e)) {
          var n = this.__zr
          if (!(!n || !n.isDarkMode()) === Je(t, 0) < 0.4) return e
        }
      }),
      (e.prototype.buildPath = function (t, e, n) {}),
      (e.prototype.pathUpdated = function () {
        this.__dirty &= -5
      }),
      (e.prototype.getUpdatedPathProxy = function (t) {
        return (
          !this.path && this.createPathProxy(),
          this.path.beginPath(),
          this.buildPath(this.path, this.shape, t),
          this.path
        )
      }),
      (e.prototype.createPathProxy = function () {
        this.path = new fa(!1)
      }),
      (e.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke
        return !(null == e || 'none' === e || !(t.lineWidth > 0))
      }),
      (e.prototype.hasFill = function () {
        var t = this.style.fill
        return null != t && 'none' !== t
      }),
      (e.prototype.getBoundingRect = function () {
        var t = this._rect,
          e = this.style,
          n = !t
        if (n) {
          var i = !1
          this.path || ((i = !0), this.createPathProxy())
          var r = this.path
          ;(i || 4 & this.__dirty) &&
            (r.beginPath(),
            this.buildPath(r, this.shape, !1),
            this.pathUpdated()),
            (t = r.getBoundingRect())
        }
        if (
          ((this._rect = t),
          this.hasStroke() && this.path && this.path.len() > 0)
        ) {
          var o = this._rectWithStroke || (this._rectWithStroke = t.clone())
          if (this.__dirty || n) {
            o.copy(t)
            var a = e.strokeNoScale ? this.getLineScale() : 1,
              s = e.lineWidth
            if (!this.hasFill()) {
              var l = this.strokeContainThreshold
              s = Math.max(s, null == l ? 4 : l)
            }
            a > 1e-10 &&
              ((o.width += s / a),
              (o.height += s / a),
              (o.x -= s / a / 2),
              (o.y -= s / a / 2))
          }
          return o
        }
        return t
      }),
      (e.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style
        if (((t = n[0]), (e = n[1]), i.contain(t, e))) {
          var o = this.path
          if (this.hasStroke()) {
            var a = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1
            if (
              s > 1e-10 &&
              (this.hasFill() || (a = Math.max(a, this.strokeContainThreshold)),
              (function (t, e, n, i) {
                return Da(t, e, !0, n, i)
              })(o, a / s, t, e))
            )
              return !0
          }
          if (this.hasFill())
            return (function (t, e, n) {
              return Da(t, 0, !1, e, n)
            })(o, t, e)
        }
        return !1
      }),
      (e.prototype.dirtyShape = function () {
        ;(this.__dirty |= 4),
          this._rect && (this._rect = null),
          this._decalEl && this._decalEl.dirtyShape(),
          this.markRedraw()
      }),
      (e.prototype.dirty = function () {
        this.dirtyStyle(), this.dirtyShape()
      }),
      (e.prototype.animateShape = function (t) {
        return this.animate('shape', t)
      }),
      (e.prototype.updateDuringAnimation = function (t) {
        'style' === t
          ? this.dirtyStyle()
          : 'shape' === t
          ? this.dirtyShape()
          : this.markRedraw()
      }),
      (e.prototype.attrKV = function (e, n) {
        'shape' === e ? this.setShape(n) : t.prototype.attrKV.call(this, e, n)
      }),
      (e.prototype.setShape = function (t, e) {
        var n = this.shape
        return (
          n || (n = this.shape = {}),
          'string' == typeof t ? (n[t] = e) : N(n, t),
          this.dirtyShape(),
          this
        )
      }),
      (e.prototype.shapeChanged = function () {
        return !!(4 & this.__dirty)
      }),
      (e.prototype.createStyle = function (t) {
        return xt(Aa, t)
      }),
      (e.prototype._innerSaveToNormal = function (e) {
        t.prototype._innerSaveToNormal.call(this, e)
        var n = this._normalState
        e.shape && !n.shape && (n.shape = N({}, this.shape))
      }),
      (e.prototype._applyStateObj = function (e, n, i, r, o, a) {
        t.prototype._applyStateObj.call(this, e, n, i, r, o, a)
        var s,
          l = !(n && r)
        if (
          (n && n.shape
            ? o
              ? r
                ? (s = n.shape)
                : ((s = N({}, i.shape)), N(s, n.shape))
              : ((s = N({}, r ? this.shape : i.shape)), N(s, n.shape))
            : l && (s = i.shape),
          s)
        )
          if (o) {
            this.shape = N({}, this.shape)
            for (var u = {}, h = Z(s), c = 0; c < h.length; c++) {
              var p = h[c]
              'object' == typeof s[p] ? (this.shape[p] = s[p]) : (u[p] = s[p])
            }
            this._transitionState(e, { shape: u }, a)
          } else (this.shape = s), this.dirtyShape()
      }),
      (e.prototype._mergeStates = function (e) {
        for (
          var n, i = t.prototype._mergeStates.call(this, e), r = 0;
          r < e.length;
          r++
        ) {
          var o = e[r]
          o.shape && ((n = n || {}), this._mergeStyle(n, o.shape))
        }
        return n && (i.shape = n), i
      }),
      (e.prototype.getAnimationStyleProps = function () {
        return Pa
      }),
      (e.prototype.isZeroArea = function () {
        return !1
      }),
      (e.extend = function (t) {
        var n = (function (e) {
          function n(n) {
            var i = e.call(this, n) || this
            return t.init && t.init.call(i, n), i
          }
          return (
            Tt(n, e),
            (n.prototype.getDefaultStyle = function () {
              return B(t.style)
            }),
            (n.prototype.getDefaultShape = function () {
              return B(t.shape)
            }),
            n
          )
        })(e)
        for (var i in t) 'function' == typeof t[i] && (n.prototype[i] = t[i])
        return n
      }),
      (e.initDefaultProps =
        (((n = e.prototype).type = 'path'),
        (n.strokeContainThreshold = 5),
        (n.segmentIgnoreThreshold = 0),
        (n.subPixelOptimize = !1),
        (n.autoBatch = !1),
        void (n.__dirty = 7))),
      e
    )
  })(co),
  Ra = F(
    {
      strokeFirst: !0,
      font: '12px sans-serif',
      x: 0,
      y: 0,
      textAlign: 'left',
      textBaseline: 'top',
      miterLimit: 2,
    },
    Aa
  ),
  Ba = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      Tt(e, t),
      (e.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke
        return null != e && 'none' !== e && t.lineWidth > 0
      }),
      (e.prototype.hasFill = function () {
        var t = this.style.fill
        return null != t && 'none' !== t
      }),
      (e.prototype.createStyle = function (t) {
        return xt(Ra, t)
      }),
      (e.prototype.setBoundingRect = function (t) {
        this._rect = t
      }),
      (e.prototype.getBoundingRect = function () {
        var t = this.style
        if (!this._rect) {
          var e = t.text
          null != e ? (e += '') : (e = '')
          var n = vi(e, t.font, t.textAlign, t.textBaseline)
          if (((n.x += t.x || 0), (n.y += t.y || 0), this.hasStroke())) {
            var i = t.lineWidth
            ;(n.x -= i / 2), (n.y -= i / 2), (n.width += i), (n.height += i)
          }
          this._rect = n
        }
        return this._rect
      }),
      (e.initDefaultProps = void (e.prototype.dirtyRectTolerance = 10)),
      e
    )
  })(co)
Ba.prototype.type = 'tspan'
var za = Ba,
  Ea = F({ x: 0, y: 0 }, ro),
  Na = {
    style: F(
      {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        sx: !0,
        sy: !0,
        sWidth: !0,
        sHeight: !0,
      },
      oo.style
    ),
  }
var Fa = (function (t) {
  function e() {
    return (null !== t && t.apply(this, arguments)) || this
  }
  return (
    Tt(e, t),
    (e.prototype.createStyle = function (t) {
      return xt(Ea, t)
    }),
    (e.prototype._getSize = function (t) {
      var e = this.style,
        n = e[t]
      if (null != n) return n
      var i,
        r =
          (i = e.image) && 'string' != typeof i && i.width && i.height
            ? e.image
            : this.__image
      if (!r) return 0
      var o = 'width' === t ? 'height' : 'width',
        a = e[o]
      return null == a ? r[t] : (r[t] / r[o]) * a
    }),
    (e.prototype.getWidth = function () {
      return this._getSize('width')
    }),
    (e.prototype.getHeight = function () {
      return this._getSize('height')
    }),
    (e.prototype.getAnimationStyleProps = function () {
      return Na
    }),
    (e.prototype.getBoundingRect = function () {
      var t = this.style
      return (
        this._rect ||
          (this._rect = new pi(
            t.x || 0,
            t.y || 0,
            this.getWidth(),
            this.getHeight()
          )),
        this._rect
      )
    }),
    e
  )
})(co)
Fa.prototype.type = 'image'
var Ha = Fa
var Va = Math.round
function Wa(t, e, n) {
  if (e) {
    var i = e.x1,
      r = e.x2,
      o = e.y1,
      a = e.y2
    ;(t.x1 = i), (t.x2 = r), (t.y1 = o), (t.y2 = a)
    var s = n && n.lineWidth
    return s
      ? (Va(2 * i) === Va(2 * r) && (t.x1 = t.x2 = Ua(i, s, !0)),
        Va(2 * o) === Va(2 * a) && (t.y1 = t.y2 = Ua(o, s, !0)),
        t)
      : t
  }
}
function Ga(t, e, n) {
  if (e) {
    var i = e.x,
      r = e.y,
      o = e.width,
      a = e.height
    ;(t.x = i), (t.y = r), (t.width = o), (t.height = a)
    var s = n && n.lineWidth
    return s
      ? ((t.x = Ua(i, s, !0)),
        (t.y = Ua(r, s, !0)),
        (t.width = Math.max(Ua(i + o, s, !1) - t.x, 0 === o ? 0 : 1)),
        (t.height = Math.max(Ua(r + a, s, !1) - t.y, 0 === a ? 0 : 1)),
        t)
      : t
  }
}
function Ua(t, e, n) {
  if (!e) return t
  var i = Va(2 * t)
  return (i + Va(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
}
var Xa = function () {
    ;(this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0)
  },
  Ya = {},
  ja = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultShape = function () {
        return new Xa()
      }),
      (e.prototype.buildPath = function (t, e) {
        var n, i, r, o
        if (this.subPixelOptimize) {
          var a = Ga(Ya, e, this.style)
          ;(n = a.x),
            (i = a.y),
            (r = a.width),
            (o = a.height),
            (a.r = e.r),
            (e = a)
        } else (n = e.x), (i = e.y), (r = e.width), (o = e.height)
        e.r
          ? (function (t, e) {
              var n,
                i,
                r,
                o,
                a,
                s = e.x,
                l = e.y,
                u = e.width,
                h = e.height,
                c = e.r
              u < 0 && ((s += u), (u = -u)),
                h < 0 && ((l += h), (h = -h)),
                'number' == typeof c
                  ? (n = i = r = o = c)
                  : c instanceof Array
                  ? 1 === c.length
                    ? (n = i = r = o = c[0])
                    : 2 === c.length
                    ? ((n = r = c[0]), (i = o = c[1]))
                    : 3 === c.length
                    ? ((n = c[0]), (i = o = c[1]), (r = c[2]))
                    : ((n = c[0]), (i = c[1]), (r = c[2]), (o = c[3]))
                  : (n = i = r = o = 0),
                n + i > u && ((n *= u / (a = n + i)), (i *= u / a)),
                r + o > u && ((r *= u / (a = r + o)), (o *= u / a)),
                i + r > h && ((i *= h / (a = i + r)), (r *= h / a)),
                n + o > h && ((n *= h / (a = n + o)), (o *= h / a)),
                t.moveTo(s + n, l),
                t.lineTo(s + u - i, l),
                0 !== i && t.arc(s + u - i, l + i, i, -Math.PI / 2, 0),
                t.lineTo(s + u, l + h - r),
                0 !== r && t.arc(s + u - r, l + h - r, r, 0, Math.PI / 2),
                t.lineTo(s + o, l + h),
                0 !== o && t.arc(s + o, l + h - o, o, Math.PI / 2, Math.PI),
                t.lineTo(s, l + n),
                0 !== n && t.arc(s + n, l + n, n, Math.PI, 1.5 * Math.PI)
            })(t, e)
          : t.rect(n, i, r, o)
      }),
      (e.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height
      }),
      e
    )
  })(La)
ja.prototype.type = 'rect'
var qa = ja,
  Za = { fill: '#000' },
  Ka = {
    style: F(
      {
        fill: !0,
        stroke: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineWidth: !0,
        fontSize: !0,
        lineHeight: !0,
        width: !0,
        height: !0,
        textShadowColor: !0,
        textShadowBlur: !0,
        textShadowOffsetX: !0,
        textShadowOffsetY: !0,
        backgroundColor: !0,
        padding: !0,
        borderColor: !0,
        borderWidth: !0,
        borderRadius: !0,
      },
      oo.style
    ),
  },
  $a = (function (t) {
    function e(e) {
      var n = t.call(this) || this
      return (
        (n.type = 'text'),
        (n._children = []),
        (n._defaultStyle = Za),
        n.attr(e),
        n
      )
    }
    return (
      Tt(e, t),
      (e.prototype.childrenRef = function () {
        return this._children
      }),
      (e.prototype.update = function () {
        t.prototype.update.call(this),
          this.styleChanged() && this._updateSubTexts()
        for (var e = 0; e < this._children.length; e++) {
          var n = this._children[e]
          ;(n.zlevel = this.zlevel),
            (n.z = this.z),
            (n.z2 = this.z2),
            (n.culling = this.culling),
            (n.cursor = this.cursor),
            (n.invisible = this.invisible)
        }
      }),
      (e.prototype.updateTransform = function () {
        var e = this.innerTransformable
        e
          ? (e.updateTransform(), e.transform && (this.transform = e.transform))
          : t.prototype.updateTransform.call(this)
      }),
      (e.prototype.getLocalTransform = function (e) {
        var n = this.innerTransformable
        return n
          ? n.getLocalTransform(e)
          : t.prototype.getLocalTransform.call(this, e)
      }),
      (e.prototype.getComputedTransform = function () {
        return (
          this.__hostTarget &&
            (this.__hostTarget.getComputedTransform(),
            this.__hostTarget.updateInnerText(!0)),
          t.prototype.getComputedTransform.call(this)
        )
      }),
      (e.prototype._updateSubTexts = function () {
        var t
        ;(this._childCursor = 0),
          ts((t = this.style)),
          U(t.rich, ts),
          this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
          (this._children.length = this._childCursor),
          this.styleUpdated()
      }),
      (e.prototype.addSelfToZr = function (e) {
        t.prototype.addSelfToZr.call(this, e)
        for (var n = 0; n < this._children.length; n++)
          this._children[n].__zr = e
      }),
      (e.prototype.removeSelfFromZr = function (e) {
        t.prototype.removeSelfFromZr.call(this, e)
        for (var n = 0; n < this._children.length; n++)
          this._children[n].__zr = null
      }),
      (e.prototype.getBoundingRect = function () {
        if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
          for (
            var t = new pi(0, 0, 0, 0),
              e = this._children,
              n = [],
              i = null,
              r = 0;
            r < e.length;
            r++
          ) {
            var o = e[r],
              a = o.getBoundingRect(),
              s = o.getLocalTransform(n)
            s
              ? (t.copy(a), t.applyTransform(s), (i = i || t.clone()).union(t))
              : (i = i || a.clone()).union(a)
          }
          this._rect = i || t
        }
        return this._rect
      }),
      (e.prototype.setDefaultTextStyle = function (t) {
        this._defaultStyle = t || Za
      }),
      (e.prototype.setTextContent = function (t) {
        throw new Error("Can't attach text on another text")
      }),
      (e.prototype._mergeStyle = function (t, e) {
        if (!e) return t
        var n = e.rich,
          i = t.rich || (n && {})
        return (
          N(t, e),
          n && i ? (this._mergeRich(i, n), (t.rich = i)) : i && (t.rich = i),
          t
        )
      }),
      (e.prototype._mergeRich = function (t, e) {
        for (var n = Z(e), i = 0; i < n.length; i++) {
          var r = n[i]
          ;(t[r] = t[r] || {}), N(t[r], e[r])
        }
      }),
      (e.prototype.getAnimationStyleProps = function () {
        return Ka
      }),
      (e.prototype._getOrCreateChild = function (t) {
        var e = this._children[this._childCursor]
        return (
          (e && e instanceof t) || (e = new t()),
          (this._children[this._childCursor++] = e),
          (e.__zr = this.__zr),
          (e.parent = this),
          e
        )
      }),
      (e.prototype._updatePlainTexts = function () {
        var t = this.style,
          e = t.font || '12px sans-serif',
          n = t.padding,
          i = (function (t, e) {
            null != t && (t += '')
            var n,
              i = e.overflow,
              r = e.padding,
              o = e.font,
              a = 'truncate' === i,
              s = xi(o),
              l = ut(e.lineHeight, s),
              u = 'truncate' === e.lineOverflow,
              h = e.width,
              c =
                (n =
                  (null != h && 'break' === i) || 'breakAll' === i
                    ? t
                      ? no(t, e.font, h, 'breakAll' === i, 0).lines
                      : []
                    : t
                    ? t.split('\n')
                    : []).length * l,
              p = ut(e.height, c)
            if (c > p && u) {
              var f = Math.floor(p / l)
              n = n.slice(0, f)
            }
            var d = p,
              g = h
            if (
              (r && ((d += r[0] + r[2]), null != g && (g += r[1] + r[3])),
              t && a && null != g)
            )
              for (
                var y = jr(h, o, e.ellipsis, {
                    minChar: e.truncateMinChar,
                    placeholder: e.placeholder,
                  }),
                  v = 0;
                v < n.length;
                v++
              )
                n[v] = qr(n[v], y)
            if (null == h) {
              var m = 0
              for (v = 0; v < n.length; v++) m = Math.max(gi(n[v], o), m)
              h = m
            }
            return {
              lines: n,
              height: p,
              outerHeight: d,
              lineHeight: l,
              calculatedLineHeight: s,
              contentHeight: c,
              width: h,
            }
          })(rs(t), t),
          r = os(t),
          o = !!t.backgroundColor,
          a = i.outerHeight,
          s = i.lines,
          l = i.lineHeight,
          u = this._defaultStyle,
          h = t.x || 0,
          c = t.y || 0,
          p = t.align || u.align || 'left',
          f = t.verticalAlign || u.verticalAlign || 'top',
          d = h,
          g = _i(c, i.contentHeight, f)
        if (r || n) {
          var y = i.width
          n && (y += n[1] + n[3])
          var v = mi(h, y, p),
            m = _i(c, a, f)
          r && this._renderBackground(t, t, v, m, y, a)
        }
        ;(g += l / 2),
          n &&
            ((d = is(h, p, n)),
            'top' === f ? (g += n[0]) : 'bottom' === f && (g -= n[2]))
        for (
          var _ = 0,
            x = !1,
            w = ns(('fill' in t) ? t.fill : ((x = !0), u.fill)),
            b = es(
              ('stroke' in t)
                ? t.stroke
                : o || (u.autoStroke && !x)
                ? null
                : ((_ = 2), u.stroke)
            ),
            S = t.textShadowBlur > 0,
            T =
              null != t.width &&
              ('truncate' === t.overflow ||
                'break' === t.overflow ||
                'breakAll' === t.overflow),
            M = i.calculatedLineHeight,
            C = 0;
          C < s.length;
          C++
        ) {
          var k = this._getOrCreateChild(za),
            I = k.createStyle()
          k.useStyle(I),
            (I.text = s[C]),
            (I.x = d),
            (I.y = g),
            p && (I.textAlign = p),
            (I.textBaseline = 'middle'),
            (I.opacity = t.opacity),
            (I.strokeFirst = !0),
            S &&
              ((I.shadowBlur = t.textShadowBlur || 0),
              (I.shadowColor = t.textShadowColor || 'transparent'),
              (I.shadowOffsetX = t.textShadowOffsetX || 0),
              (I.shadowOffsetY = t.textShadowOffsetY || 0)),
            b &&
              ((I.stroke = b),
              (I.lineWidth = t.lineWidth || _),
              (I.lineDash = t.lineDash),
              (I.lineDashOffset = t.lineDashOffset || 0)),
            w && (I.fill = w),
            (I.font = e),
            (g += l),
            T &&
              k.setBoundingRect(
                new pi(
                  mi(I.x, t.width, I.textAlign),
                  _i(I.y, M, I.textBaseline),
                  t.width,
                  M
                )
              )
        }
      }),
      (e.prototype._updateRichTexts = function () {
        var t = this.style,
          e = (function (t, e) {
            var n = new Qr()
            if ((null != t && (t += ''), !t)) return n
            for (
              var i,
                r = e.width,
                o = e.height,
                a = e.overflow,
                s =
                  ('break' !== a && 'breakAll' !== a) || null == r
                    ? null
                    : { width: r, accumWidth: 0, breakAll: 'breakAll' === a },
                l = (Xr.lastIndex = 0);
              null != (i = Xr.exec(t));

            ) {
              var u = i.index
              u > l && Jr(n, t.substring(l, u), e, s),
                Jr(n, i[2], e, s, i[1]),
                (l = Xr.lastIndex)
            }
            l < t.length && Jr(n, t.substring(l, t.length), e, s)
            var h = [],
              c = 0,
              p = 0,
              f = e.padding,
              d = 'truncate' === a,
              g = 'truncate' === e.lineOverflow
            function y(t, e, n) {
              ;(t.width = e), (t.lineHeight = n), (c += n), (p = Math.max(p, e))
            }
            t: for (var v = 0; v < n.lines.length; v++) {
              for (
                var m = n.lines[v], _ = 0, x = 0, w = 0;
                w < m.tokens.length;
                w++
              ) {
                var b =
                    ((O = m.tokens[w]).styleName && e.rich[O.styleName]) || {},
                  S = (O.textPadding = b.padding),
                  T = S ? S[1] + S[3] : 0,
                  M = (O.font = b.font || e.font)
                O.contentHeight = xi(M)
                var C = ut(b.height, O.contentHeight)
                if (
                  ((O.innerHeight = C),
                  S && (C += S[0] + S[2]),
                  (O.height = C),
                  (O.lineHeight = ht(b.lineHeight, e.lineHeight, C)),
                  (O.align = (b && b.align) || e.align),
                  (O.verticalAlign = (b && b.verticalAlign) || 'middle'),
                  g && null != o && c + O.lineHeight > o)
                ) {
                  w > 0
                    ? ((m.tokens = m.tokens.slice(0, w)),
                      y(m, x, _),
                      (n.lines = n.lines.slice(0, v + 1)))
                    : (n.lines = n.lines.slice(0, v))
                  break t
                }
                var k = b.width,
                  I = null == k || 'auto' === k
                if ('string' == typeof k && '%' === k.charAt(k.length - 1))
                  (O.percentWidth = k),
                    h.push(O),
                    (O.contentWidth = gi(O.text, M))
                else {
                  if (I) {
                    var D = b.backgroundColor,
                      A = D && D.image
                    A &&
                      Ur((A = Vr(A))) &&
                      (O.width = Math.max(O.width, (A.width * C) / A.height))
                  }
                  var P = d && null != r ? r - x : null
                  null != P && P < O.width
                    ? !I || P < T
                      ? ((O.text = ''), (O.width = O.contentWidth = 0))
                      : ((O.text = Yr(O.text, P - T, M, e.ellipsis, {
                          minChar: e.truncateMinChar,
                        })),
                        (O.width = O.contentWidth = gi(O.text, M)))
                    : (O.contentWidth = gi(O.text, M))
                }
                ;(O.width += T),
                  (x += O.width),
                  b && (_ = Math.max(_, O.lineHeight))
              }
              y(m, x, _)
            }
            for (
              n.outerWidth = n.width = ut(r, p),
                n.outerHeight = n.height = ut(o, c),
                n.contentHeight = c,
                n.contentWidth = p,
                f &&
                  ((n.outerWidth += f[1] + f[3]),
                  (n.outerHeight += f[0] + f[2])),
                v = 0;
              v < h.length;
              v++
            ) {
              var O,
                L = (O = h[v]).percentWidth
              O.width = (parseInt(L, 10) / 100) * n.width
            }
            return n
          })(rs(t), t),
          n = e.width,
          i = e.outerWidth,
          r = e.outerHeight,
          o = t.padding,
          a = t.x || 0,
          s = t.y || 0,
          l = this._defaultStyle,
          u = t.align || l.align,
          h = t.verticalAlign || l.verticalAlign,
          c = mi(a, i, u),
          p = _i(s, r, h),
          f = c,
          d = p
        o && ((f += o[3]), (d += o[0]))
        var g = f + n
        os(t) && this._renderBackground(t, t, c, p, i, r)
        for (var y = !!t.backgroundColor, v = 0; v < e.lines.length; v++) {
          for (
            var m = e.lines[v],
              _ = m.tokens,
              x = _.length,
              w = m.lineHeight,
              b = m.width,
              S = 0,
              T = f,
              M = g,
              C = x - 1,
              k = void 0;
            S < x && (!(k = _[S]).align || 'left' === k.align);

          )
            this._placeToken(k, t, w, d, T, 'left', y),
              (b -= k.width),
              (T += k.width),
              S++
          for (; C >= 0 && 'right' === (k = _[C]).align; )
            this._placeToken(k, t, w, d, M, 'right', y),
              (b -= k.width),
              (M -= k.width),
              C--
          for (T += (n - (T - f) - (g - M) - b) / 2; S <= C; )
            (k = _[S]),
              this._placeToken(k, t, w, d, T + k.width / 2, 'center', y),
              (T += k.width),
              S++
          d += w
        }
      }),
      (e.prototype._placeToken = function (t, e, n, i, r, o, a) {
        var s = e.rich[t.styleName] || {}
        s.text = t.text
        var l = t.verticalAlign,
          u = i + n / 2
        'top' === l
          ? (u = i + t.height / 2)
          : 'bottom' === l && (u = i + n - t.height / 2),
          !t.isLineHolder &&
            os(s) &&
            this._renderBackground(
              s,
              e,
              'right' === o
                ? r - t.width
                : 'center' === o
                ? r - t.width / 2
                : r,
              u - t.height / 2,
              t.width,
              t.height
            )
        var h = !!s.backgroundColor,
          c = t.textPadding
        c && ((r = is(r, o, c)), (u -= t.height / 2 - c[0] - t.innerHeight / 2))
        var p = this._getOrCreateChild(za),
          f = p.createStyle()
        p.useStyle(f)
        var d = this._defaultStyle,
          g = !1,
          y = 0,
          v = ns(
            'fill' in s ? s.fill : 'fill' in e ? e.fill : ((g = !0), d.fill)
          ),
          m = es(
            'stroke' in s
              ? s.stroke
              : 'stroke' in e
              ? e.stroke
              : h || a || (d.autoStroke && !g)
              ? null
              : ((y = 2), d.stroke)
          ),
          _ = s.textShadowBlur > 0 || e.textShadowBlur > 0
        ;(f.text = t.text),
          (f.x = r),
          (f.y = u),
          _ &&
            ((f.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0),
            (f.shadowColor =
              s.textShadowColor || e.textShadowColor || 'transparent'),
            (f.shadowOffsetX = s.textShadowOffsetX || e.textShadowOffsetX || 0),
            (f.shadowOffsetY =
              s.textShadowOffsetY || e.textShadowOffsetY || 0)),
          (f.textAlign = o),
          (f.textBaseline = 'middle'),
          (f.font = t.font || '12px sans-serif'),
          (f.opacity = ht(s.opacity, e.opacity, 1)),
          m &&
            ((f.lineWidth = ht(s.lineWidth, e.lineWidth, y)),
            (f.lineDash = ut(s.lineDash, e.lineDash)),
            (f.lineDashOffset = e.lineDashOffset || 0),
            (f.stroke = m)),
          v && (f.fill = v)
        var x = t.contentWidth,
          w = t.contentHeight
        p.setBoundingRect(
          new pi(mi(f.x, x, f.textAlign), _i(f.y, w, f.textBaseline), x, w)
        )
      }),
      (e.prototype._renderBackground = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u = t.backgroundColor,
          h = t.borderWidth,
          c = t.borderColor,
          p = u && u.image,
          f = u && !p,
          d = t.borderRadius,
          g = this
        if (f || t.lineHeight || (h && c)) {
          ;(a = this._getOrCreateChild(qa)).useStyle(a.createStyle()),
            (a.style.fill = null)
          var y = a.shape
          ;(y.x = n),
            (y.y = i),
            (y.width = r),
            (y.height = o),
            (y.r = d),
            a.dirtyShape()
        }
        if (f)
          ((l = a.style).fill = u || null),
            (l.fillOpacity = ut(t.fillOpacity, 1))
        else if (p) {
          ;(s = this._getOrCreateChild(Ha)).onload = function () {
            g.dirtyStyle()
          }
          var v = s.style
          ;(v.image = u.image),
            (v.x = n),
            (v.y = i),
            (v.width = r),
            (v.height = o)
        }
        h &&
          c &&
          (((l = a.style).lineWidth = h),
          (l.stroke = c),
          (l.strokeOpacity = ut(t.strokeOpacity, 1)),
          (l.lineDash = t.borderDash),
          (l.lineDashOffset = t.borderDashOffset || 0),
          (a.strokeContainThreshold = 0),
          a.hasFill() &&
            a.hasStroke() &&
            ((l.strokeFirst = !0), (l.lineWidth *= 2)))
        var m = (a || s).style
        ;(m.shadowBlur = t.shadowBlur || 0),
          (m.shadowColor = t.shadowColor || 'transparent'),
          (m.shadowOffsetX = t.shadowOffsetX || 0),
          (m.shadowOffsetY = t.shadowOffsetY || 0),
          (m.opacity = ht(t.opacity, e.opacity, 1))
      }),
      (e.makeFont = function (t) {
        var e = ''
        if (t.fontSize || t.fontFamily || t.fontWeight) {
          var n = ''
          ;(n =
            'string' != typeof t.fontSize ||
            (-1 === t.fontSize.indexOf('px') &&
              -1 === t.fontSize.indexOf('rem') &&
              -1 === t.fontSize.indexOf('em'))
              ? isNaN(+t.fontSize)
                ? '12px'
                : t.fontSize + 'px'
              : t.fontSize),
            (e = [
              t.fontStyle,
              t.fontWeight,
              n,
              t.fontFamily || 'sans-serif',
            ].join(' '))
        }
        return (e && dt(e)) || t.textFont || t.font
      }),
      e
    )
  })(co),
  Qa = { left: !0, right: 1, center: 1 },
  Ja = { top: 1, bottom: 1, middle: 1 }
function ts(t) {
  if (t) {
    t.font = $a.makeFont(t)
    var e = t.align
    'middle' === e && (e = 'center'),
      (t.align = null == e || Qa[e] ? e : 'left')
    var n = t.verticalAlign
    'center' === n && (n = 'middle'),
      (t.verticalAlign = null == n || Ja[n] ? n : 'top'),
      t.padding && (t.padding = pt(t.padding))
  }
}
function es(t, e) {
  return null == t || e <= 0 || 'transparent' === t || 'none' === t
    ? null
    : t.image || t.colorStops
    ? '#000'
    : t
}
function ns(t) {
  return null == t || 'none' === t ? null : t.image || t.colorStops ? '#000' : t
}
function is(t, e, n) {
  return 'right' === e
    ? t - n[1]
    : 'center' === e
    ? t + n[3] / 2 - n[1] / 2
    : t + n[3]
}
function rs(t) {
  var e = t.text
  return null != e && (e += ''), e
}
function os(t) {
  return !!(
    t.backgroundColor ||
    t.lineHeight ||
    (t.borderWidth && t.borderColor)
  )
}
var as = $a,
  ss = _r(),
  ls = function (t, e, n, i) {
    if (i) {
      var r = ss(i)
      ;(r.dataIndex = n),
        (r.dataType = e),
        (r.seriesIndex = t),
        'group' === i.type &&
          i.traverse(function (i) {
            var r = ss(i)
            ;(r.seriesIndex = t), (r.dataIndex = n), (r.dataType = e)
          })
    }
  },
  us = 1,
  hs = {},
  cs = _r(),
  ps = 1,
  fs = ['emphasis', 'blur', 'select'],
  ds = ['normal', 'emphasis', 'blur', 'select'],
  gs = 10
function ys(t) {
  return null != t && 'none' !== t
}
var vs = new Le(100)
function ms(t) {
  if ('string' != typeof t) return t
  var e = vs.get(t)
  return e || ((e = qe(t, -0.1)), vs.put(t, e)), e
}
function _s(t, e, n) {
  t.onHoverStateChange && (t.hoverState || 0) !== n && t.onHoverStateChange(e),
    (t.hoverState = n)
}
function xs(t) {
  _s(t, 'emphasis', 2)
}
function ws(t) {
  2 === t.hoverState && _s(t, 'normal', 0)
}
function bs(t) {
  _s(t, 'blur', 1)
}
function Ss(t) {
  1 === t.hoverState && _s(t, 'normal', 0)
}
function Ts(t) {
  t.selected = !0
}
function Ms(t) {
  t.selected = !1
}
function Cs(t, e, n) {
  e(t, n)
}
function ks(t, e, n) {
  Cs(t, e, n),
    t.isGroup &&
      t.traverse(function (t) {
        Cs(t, e, n)
      })
}
function Is(t, e) {
  switch (e) {
    case 'emphasis':
      t.hoverState = 2
      break
    case 'normal':
      t.hoverState = 0
      break
    case 'blur':
      t.hoverState = 1
      break
    case 'select':
      t.selected = !0
  }
}
function Ds(t, e) {
  var n = this.states[t]
  if (this.style) {
    if ('emphasis' === t)
      return (function (t, e, n, i) {
        var r = n && V(n, 'select') >= 0,
          o = !1
        if (t instanceof La) {
          var a = cs(t),
            s = (r && a.selectFill) || a.normalFill,
            l = (r && a.selectStroke) || a.normalStroke
          if (ys(s) || ys(l)) {
            var u = (i = i || {}).style || {}
            'inherit' === u.fill
              ? ((o = !0), (i = N({}, i)), ((u = N({}, u)).fill = s))
              : !ys(u.fill) && ys(s)
              ? ((o = !0), (i = N({}, i)), ((u = N({}, u)).fill = ms(s)))
              : !ys(u.stroke) &&
                ys(l) &&
                (o || ((i = N({}, i)), (u = N({}, u))), (u.stroke = ms(l))),
              (i.style = u)
          }
        }
        if (i && null == i.z2) {
          o || (i = N({}, i))
          var h = t.z2EmphasisLift
          i.z2 = t.z2 + (null != h ? h : 10)
        }
        return i
      })(this, 0, e, n)
    if ('blur' === t)
      return (function (t, e, n) {
        var i = V(t.currentStates, e) >= 0,
          r = t.style.opacity,
          o = i
            ? null
            : (function (t, e, n, i) {
                for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
                  var s = e[a],
                    l = r[s]
                  o[s] = null == l ? i && i[s] : l
                }
                for (a = 0; a < t.animators.length; a++) {
                  var u = t.animators[a]
                  u.__fromStateTransition &&
                    u.__fromStateTransition.indexOf(n) < 0 &&
                    'style' === u.targetName &&
                    u.saveFinalToTarget(o, e)
                }
                return o
              })(t, ['opacity'], e, { opacity: 1 }),
          a = (n = n || {}).style || {}
        return (
          null == a.opacity &&
            ((n = N({}, n)),
            (a = N({ opacity: i ? r : 0.1 * o.opacity }, a)),
            (n.style = a)),
          n
        )
      })(this, t, n)
    if ('select' === t)
      return (function (t, e, n) {
        if (n && null == n.z2) {
          n = N({}, n)
          var i = t.z2SelectLift
          n.z2 = t.z2 + (null != i ? i : 9)
        }
        return n
      })(this, 0, n)
  }
  return n
}
function As(t) {
  t.stateProxy = Ds
  var e = t.getTextContent(),
    n = t.getTextGuideLine()
  e && (e.stateProxy = Ds), n && (n.stateProxy = Ds)
}
function Ps(t, e) {
  !Ns(t, e) && !t.__highByOuter && ks(t, xs)
}
function Os(t, e) {
  !Ns(t, e) && !t.__highByOuter && ks(t, ws)
}
function Ls(t, e) {
  ;(t.__highByOuter |= 1 << (e || 0)), ks(t, xs)
}
function Rs(t, e) {
  !(t.__highByOuter &= ~(1 << (e || 0))) && ks(t, ws)
}
function Bs(t) {
  ks(t, Ss)
}
function zs(t) {
  ks(t, Ts)
}
function Es(t) {
  ks(t, Ms)
}
function Ns(t, e) {
  return t.__highDownSilentOnTouch && e.zrByTouch
}
function Fs(t) {
  t.getModel().eachComponent(function (e, n) {
    ;('series' === e
      ? t.getViewOfSeriesModel(n)
      : t.getViewOfComponentModel(n)
    ).group.traverse(function (t) {
      Ss(t)
    })
  })
}
function Hs(t, e, n, i) {
  var r = i.getModel()
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = t.getItemGraphicEl(e[n])
      i && Bs(i)
    }
  }
  if (((n = n || 'coordinateSystem'), null != t && e && 'none' !== e)) {
    var a = r.getSeriesByIndex(t),
      s = a.coordinateSystem
    s && s.master && (s = s.master)
    var l = []
    r.eachSeries(function (t) {
      var r = a === t,
        u = t.coordinateSystem
      if (
        (u && u.master && (u = u.master),
        !(
          ('series' === n && !r) ||
          ('coordinateSystem' === n && !(u && s ? u === s : r)) ||
          ('series' === e && r)
        ))
      ) {
        if (
          (i.getViewOfSeriesModel(t).group.traverse(function (t) {
            bs(t)
          }),
          G(e))
        )
          o(t.getData(), e)
        else if (it(e))
          for (var h = Z(e), c = 0; c < h.length; c++)
            o(t.getData(h[c]), e[h[c]])
        l.push(t)
      }
    }),
      r.eachComponent(function (t, e) {
        if ('series' !== t) {
          var n = i.getViewOfComponentModel(e)
          n && n.blurSeries && n.blurSeries(l, r)
        }
      })
  }
}
function Vs(t, e, n) {
  if (null != t && null != e) {
    var i = n.getModel().getComponent(t, e)
    if (i) {
      var r = n.getViewOfComponentModel(i)
      r &&
        r.focusBlurEnabled &&
        r.group.traverse(function (t) {
          bs(t)
        })
    }
  }
}
function Ws(t, e, n, i) {
  var r = { focusSelf: !1, dispatchers: null }
  if (null == t || 'series' === t || null == e || null == n) return r
  var o = i.getModel().getComponent(t, e)
  if (!o) return r
  var a = i.getViewOfComponentModel(o)
  if (!a || !a.findHighDownDispatchers) return r
  for (var s, l = a.findHighDownDispatchers(n), u = 0; u < l.length; u++)
    if ('self' === ss(l[u]).focus) {
      s = !0
      break
    }
  return { focusSelf: s, dispatchers: l }
}
function Gs(t) {
  U(t.getAllData(), function (e) {
    var n = e.data,
      i = e.type
    n.eachItemGraphicEl(function (e, n) {
      t.isSelected(n, i) ? zs(e) : Es(e)
    })
  })
}
function Us(t) {
  var e = []
  return (
    t.eachSeries(function (t) {
      U(t.getAllData(), function (n) {
        n.data
        var i = n.type,
          r = t.getSelectedDataIndices()
        if (r.length > 0) {
          var o = { dataIndex: r, seriesIndex: t.seriesIndex }
          null != i && (o.dataType = i), e.push(o)
        }
      })
    }),
    e
  )
}
function Xs(t, e, n) {
  Ks(t, !0), ks(t, As), Ys(t, e, n)
}
function Ys(t, e, n) {
  var i = ss(t)
  null != e ? ((i.focus = e), (i.blurScope = n)) : i.focus && (i.focus = null)
}
var js = ['emphasis', 'blur', 'select'],
  qs = {
    itemStyle: 'getItemStyle',
    lineStyle: 'getLineStyle',
    areaStyle: 'getAreaStyle',
  }
function Zs(t, e, n, i) {
  n = n || 'itemStyle'
  for (var r = 0; r < js.length; r++) {
    var o = js[r],
      a = e.getModel([o, n])
    t.ensureState(o).style = i ? i(a) : a[qs[n]]()
  }
}
function Ks(t, e) {
  var n = !1 === e,
    i = t
  t.highDownSilentOnTouch &&
    (i.__highDownSilentOnTouch = t.highDownSilentOnTouch),
    (n && !i.__highDownDispatcher) ||
      ((i.__highByOuter = i.__highByOuter || 0), (i.__highDownDispatcher = !n))
}
function $s(t) {
  return !(!t || !t.__highDownDispatcher)
}
function Qs(t, e, n) {
  var i = ss(t)
  ;(i.componentMainType = e.mainType),
    (i.componentIndex = e.componentIndex),
    (i.componentHighDownName = n)
}
function Js(t) {
  var e = t.type
  return 'select' === e || 'unselect' === e || 'toggleSelect' === e
}
function tl(t) {
  var e = t.type
  return 'highlight' === e || 'downplay' === e
}
var el = fa.CMD,
  nl = [[], [], []],
  il = Math.sqrt,
  rl = Math.atan2
var ol = Math.sqrt,
  al = Math.sin,
  sl = Math.cos,
  ll = Math.PI
function ul(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1])
}
function hl(t, e) {
  return (t[0] * e[0] + t[1] * e[1]) / (ul(t) * ul(e))
}
function cl(t, e) {
  return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(hl(t, e))
}
function pl(t, e, n, i, r, o, a, s, l, u, h) {
  var c = l * (ll / 180),
    p = (sl(c) * (t - n)) / 2 + (al(c) * (e - i)) / 2,
    f = (-1 * al(c) * (t - n)) / 2 + (sl(c) * (e - i)) / 2,
    d = (p * p) / (a * a) + (f * f) / (s * s)
  d > 1 && ((a *= ol(d)), (s *= ol(d)))
  var g =
      (r === o ? -1 : 1) *
        ol(
          (a * a * (s * s) - a * a * (f * f) - s * s * (p * p)) /
            (a * a * (f * f) + s * s * (p * p))
        ) || 0,
    y = (g * a * f) / s,
    v = (g * -s * p) / a,
    m = (t + n) / 2 + sl(c) * y - al(c) * v,
    _ = (e + i) / 2 + al(c) * y + sl(c) * v,
    x = cl([1, 0], [(p - y) / a, (f - v) / s]),
    w = [(p - y) / a, (f - v) / s],
    b = [(-1 * p - y) / a, (-1 * f - v) / s],
    S = cl(w, b)
  if ((hl(w, b) <= -1 && (S = ll), hl(w, b) >= 1 && (S = 0), S < 0)) {
    var T = Math.round((S / ll) * 1e6) / 1e6
    S = 2 * ll + (T % 2) * ll
  }
  h.addData(u, m, _, a, s, x, S, c, o)
}
var fl = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
  dl = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g
var gl = (function (t) {
  function e() {
    return (null !== t && t.apply(this, arguments)) || this
  }
  return Tt(e, t), (e.prototype.applyTransform = function (t) {}), e
})(La)
function yl(t) {
  return null != t.setData
}
function vl(t, e) {
  var n = (function (t) {
      var e = new fa()
      if (!t) return e
      var n,
        i = 0,
        r = 0,
        o = i,
        a = r,
        s = fa.CMD,
        l = t.match(fl)
      if (!l) return e
      for (var u = 0; u < l.length; u++) {
        for (
          var h = l[u],
            c = h.charAt(0),
            p = void 0,
            f = h.match(dl) || [],
            d = f.length,
            g = 0;
          g < d;
          g++
        )
          f[g] = parseFloat(f[g])
        for (var y = 0; y < d; ) {
          var v = void 0,
            m = void 0,
            _ = void 0,
            x = void 0,
            w = void 0,
            b = void 0,
            S = void 0,
            T = i,
            M = r,
            C = void 0,
            k = void 0
          switch (c) {
            case 'l':
              ;(i += f[y++]), (r += f[y++]), (p = s.L), e.addData(p, i, r)
              break
            case 'L':
              ;(i = f[y++]), (r = f[y++]), (p = s.L), e.addData(p, i, r)
              break
            case 'm':
              ;(i += f[y++]),
                (r += f[y++]),
                (p = s.M),
                e.addData(p, i, r),
                (o = i),
                (a = r),
                (c = 'l')
              break
            case 'M':
              ;(i = f[y++]),
                (r = f[y++]),
                (p = s.M),
                e.addData(p, i, r),
                (o = i),
                (a = r),
                (c = 'L')
              break
            case 'h':
              ;(i += f[y++]), (p = s.L), e.addData(p, i, r)
              break
            case 'H':
              ;(i = f[y++]), (p = s.L), e.addData(p, i, r)
              break
            case 'v':
              ;(r += f[y++]), (p = s.L), e.addData(p, i, r)
              break
            case 'V':
              ;(r = f[y++]), (p = s.L), e.addData(p, i, r)
              break
            case 'C':
              ;(p = s.C),
                e.addData(p, f[y++], f[y++], f[y++], f[y++], f[y++], f[y++]),
                (i = f[y - 2]),
                (r = f[y - 1])
              break
            case 'c':
              ;(p = s.C),
                e.addData(
                  p,
                  f[y++] + i,
                  f[y++] + r,
                  f[y++] + i,
                  f[y++] + r,
                  f[y++] + i,
                  f[y++] + r
                ),
                (i += f[y - 2]),
                (r += f[y - 1])
              break
            case 'S':
              ;(v = i),
                (m = r),
                (C = e.len()),
                (k = e.data),
                n === s.C && ((v += i - k[C - 4]), (m += r - k[C - 3])),
                (p = s.C),
                (T = f[y++]),
                (M = f[y++]),
                (i = f[y++]),
                (r = f[y++]),
                e.addData(p, v, m, T, M, i, r)
              break
            case 's':
              ;(v = i),
                (m = r),
                (C = e.len()),
                (k = e.data),
                n === s.C && ((v += i - k[C - 4]), (m += r - k[C - 3])),
                (p = s.C),
                (T = i + f[y++]),
                (M = r + f[y++]),
                (i += f[y++]),
                (r += f[y++]),
                e.addData(p, v, m, T, M, i, r)
              break
            case 'Q':
              ;(T = f[y++]),
                (M = f[y++]),
                (i = f[y++]),
                (r = f[y++]),
                (p = s.Q),
                e.addData(p, T, M, i, r)
              break
            case 'q':
              ;(T = f[y++] + i),
                (M = f[y++] + r),
                (i += f[y++]),
                (r += f[y++]),
                (p = s.Q),
                e.addData(p, T, M, i, r)
              break
            case 'T':
              ;(v = i),
                (m = r),
                (C = e.len()),
                (k = e.data),
                n === s.Q && ((v += i - k[C - 4]), (m += r - k[C - 3])),
                (i = f[y++]),
                (r = f[y++]),
                (p = s.Q),
                e.addData(p, v, m, i, r)
              break
            case 't':
              ;(v = i),
                (m = r),
                (C = e.len()),
                (k = e.data),
                n === s.Q && ((v += i - k[C - 4]), (m += r - k[C - 3])),
                (i += f[y++]),
                (r += f[y++]),
                (p = s.Q),
                e.addData(p, v, m, i, r)
              break
            case 'A':
              ;(_ = f[y++]),
                (x = f[y++]),
                (w = f[y++]),
                (b = f[y++]),
                (S = f[y++]),
                pl(
                  (T = i),
                  (M = r),
                  (i = f[y++]),
                  (r = f[y++]),
                  b,
                  S,
                  _,
                  x,
                  w,
                  (p = s.A),
                  e
                )
              break
            case 'a':
              ;(_ = f[y++]),
                (x = f[y++]),
                (w = f[y++]),
                (b = f[y++]),
                (S = f[y++]),
                pl(
                  (T = i),
                  (M = r),
                  (i += f[y++]),
                  (r += f[y++]),
                  b,
                  S,
                  _,
                  x,
                  w,
                  (p = s.A),
                  e
                )
          }
        }
        ;('z' !== c && 'Z' !== c) ||
          ((p = s.Z), e.addData(p), (i = o), (r = a)),
          (n = p)
      }
      return e.toStatic(), e
    })(t),
    i = N({}, e)
  return (
    (i.buildPath = function (t) {
      if (yl(t)) {
        t.setData(n.data), (e = t.getContext()) && t.rebuildPath(e, 1)
      } else {
        var e = t
        n.rebuildPath(e, 1)
      }
    }),
    (i.applyTransform = function (t) {
      !(function (t, e) {
        if (e) {
          var n,
            i,
            r,
            o,
            a,
            s,
            l = t.data,
            u = t.len(),
            h = el.M,
            c = el.C,
            p = el.L,
            f = el.R,
            d = el.A,
            g = el.Q
          for (r = 0, o = 0; r < u; ) {
            switch (((n = l[r++]), (o = r), (i = 0), n)) {
              case h:
              case p:
                i = 1
                break
              case c:
                i = 3
                break
              case g:
                i = 2
                break
              case d:
                var y = e[4],
                  v = e[5],
                  m = il(e[0] * e[0] + e[1] * e[1]),
                  _ = il(e[2] * e[2] + e[3] * e[3]),
                  x = rl(-e[1] / _, e[0] / m)
                ;(l[r] *= m),
                  (l[r++] += y),
                  (l[r] *= _),
                  (l[r++] += v),
                  (l[r++] *= m),
                  (l[r++] *= _),
                  (l[r++] += x),
                  (l[r++] += x),
                  (o = r += 2)
                break
              case f:
                ;(s[0] = l[r++]),
                  (s[1] = l[r++]),
                  Ft(s, s, e),
                  (l[o++] = s[0]),
                  (l[o++] = s[1]),
                  (s[0] += l[r++]),
                  (s[1] += l[r++]),
                  Ft(s, s, e),
                  (l[o++] = s[0]),
                  (l[o++] = s[1])
            }
            for (a = 0; a < i; a++) {
              var w = nl[a]
              ;(w[0] = l[r++]),
                (w[1] = l[r++]),
                Ft(w, w, e),
                (l[o++] = w[0]),
                (l[o++] = w[1])
            }
          }
          t.increaseVersion()
        }
      })(n, t),
        this.dirtyShape()
    }),
    i
  )
}
function ml(t, e) {
  return new gl(vl(t, e))
}
var _l = function () {
    ;(this.cx = 0), (this.cy = 0), (this.r = 0)
  },
  xl = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultShape = function () {
        return new _l()
      }),
      (e.prototype.buildPath = function (t, e, n) {
        n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI)
      }),
      e
    )
  })(La)
xl.prototype.type = 'circle'
var wl = xl,
  bl = function () {
    ;(this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0)
  },
  Sl = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultShape = function () {
        return new bl()
      }),
      (e.prototype.buildPath = function (t, e) {
        var n = 0.5522848,
          i = e.cx,
          r = e.cy,
          o = e.rx,
          a = e.ry,
          s = o * n,
          l = a * n
        t.moveTo(i - o, r),
          t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a),
          t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r),
          t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a),
          t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r),
          t.closePath()
      }),
      e
    )
  })(La)
Sl.prototype.type = 'ellipse'
var Tl = Sl,
  Ml = Math.PI,
  Cl = 2 * Ml,
  kl = Math.sin,
  Il = Math.cos,
  Dl = Math.acos,
  Al = Math.atan2,
  Pl = Math.abs,
  Ol = Math.sqrt,
  Ll = Math.max,
  Rl = Math.min,
  Bl = 1e-4
function zl(t, e, n, i, r, o, a) {
  var s = t - n,
    l = e - i,
    u = (a ? o : -o) / Ol(s * s + l * l),
    h = u * l,
    c = -u * s,
    p = t + h,
    f = e + c,
    d = n + h,
    g = i + c,
    y = (p + d) / 2,
    v = (f + g) / 2,
    m = d - p,
    _ = g - f,
    x = m * m + _ * _,
    w = r - o,
    b = p * g - d * f,
    S = (_ < 0 ? -1 : 1) * Ol(Ll(0, w * w * x - b * b)),
    T = (b * _ - m * S) / x,
    M = (-b * m - _ * S) / x,
    C = (b * _ + m * S) / x,
    k = (-b * m + _ * S) / x,
    I = T - y,
    D = M - v,
    A = C - y,
    P = k - v
  return (
    I * I + D * D > A * A + P * P && ((T = C), (M = k)),
    {
      cx: T,
      cy: M,
      x01: -h,
      y01: -c,
      x11: T * (r / w - 1),
      y11: M * (r / w - 1),
    }
  )
}
function El(t, e) {
  var n = Ll(e.r, 0),
    i = Ll(e.r0 || 0, 0),
    r = n > 0
  if (r || i > 0) {
    if ((r || ((n = i), (i = 0)), i > n)) {
      var o = n
      ;(n = i), (i = o)
    }
    var a,
      s = !!e.clockwise,
      l = e.startAngle,
      u = e.endAngle
    if (l === u) a = 0
    else {
      var h = [l, u]
      pa(h, !s), (a = Pl(h[0] - h[1]))
    }
    var c = e.cx,
      p = e.cy,
      f = e.cornerRadius || 0,
      d = e.innerCornerRadius || 0
    if (n > Bl)
      if (a > Cl - Bl)
        t.moveTo(c + n * Il(l), p + n * kl(l)),
          t.arc(c, p, n, l, u, !s),
          i > Bl &&
            (t.moveTo(c + i * Il(u), p + i * kl(u)), t.arc(c, p, i, u, l, s))
      else {
        var g = Pl(n - i) / 2,
          y = Rl(g, f),
          v = Rl(g, d),
          m = v,
          _ = y,
          x = n * Il(l),
          w = n * kl(l),
          b = i * Il(u),
          S = i * kl(u),
          T = void 0,
          M = void 0,
          C = void 0,
          k = void 0
        if (
          (y > Bl || v > Bl) &&
          ((T = n * Il(u)),
          (M = n * kl(u)),
          (C = i * Il(l)),
          (k = i * kl(l)),
          a < Ml)
        ) {
          var I = (function (t, e, n, i, r, o, a, s) {
            var l = n - t,
              u = i - e,
              h = a - r,
              c = s - o,
              p = c * l - h * u
            if (!(p * p < Bl))
              return [t + (p = (h * (e - o) - c * (t - r)) / p) * l, e + p * u]
          })(x, w, C, k, T, M, b, S)
          if (I) {
            var D = x - I[0],
              A = w - I[1],
              P = T - I[0],
              O = M - I[1],
              L =
                1 /
                kl(
                  Dl(
                    (D * P + A * O) / (Ol(D * D + A * A) * Ol(P * P + O * O))
                  ) / 2
                ),
              R = Ol(I[0] * I[0] + I[1] * I[1])
            ;(m = Rl(v, (i - R) / (L - 1))), (_ = Rl(y, (n - R) / (L + 1)))
          }
        }
        if (a > Bl)
          if (_ > Bl) {
            var B = zl(C, k, x, w, n, _, s),
              z = zl(T, M, b, S, n, _, s)
            t.moveTo(c + B.cx + B.x01, p + B.cy + B.y01),
              _ < y
                ? t.arc(
                    c + B.cx,
                    p + B.cy,
                    _,
                    Al(B.y01, B.x01),
                    Al(z.y01, z.x01),
                    !s
                  )
                : (t.arc(
                    c + B.cx,
                    p + B.cy,
                    _,
                    Al(B.y01, B.x01),
                    Al(B.y11, B.x11),
                    !s
                  ),
                  t.arc(
                    c,
                    p,
                    n,
                    Al(B.cy + B.y11, B.cx + B.x11),
                    Al(z.cy + z.y11, z.cx + z.x11),
                    !s
                  ),
                  t.arc(
                    c + z.cx,
                    p + z.cy,
                    _,
                    Al(z.y11, z.x11),
                    Al(z.y01, z.x01),
                    !s
                  ))
          } else t.moveTo(c + x, p + w), t.arc(c, p, n, l, u, !s)
        else t.moveTo(c + x, p + w)
        if (i > Bl && a > Bl)
          if (m > Bl) {
            ;(B = zl(b, S, T, M, i, -m, s)), (z = zl(x, w, C, k, i, -m, s))
            t.lineTo(c + B.cx + B.x01, p + B.cy + B.y01),
              m < v
                ? t.arc(
                    c + B.cx,
                    p + B.cy,
                    m,
                    Al(B.y01, B.x01),
                    Al(z.y01, z.x01),
                    !s
                  )
                : (t.arc(
                    c + B.cx,
                    p + B.cy,
                    m,
                    Al(B.y01, B.x01),
                    Al(B.y11, B.x11),
                    !s
                  ),
                  t.arc(
                    c,
                    p,
                    i,
                    Al(B.cy + B.y11, B.cx + B.x11),
                    Al(z.cy + z.y11, z.cx + z.x11),
                    s
                  ),
                  t.arc(
                    c + z.cx,
                    p + z.cy,
                    m,
                    Al(z.y11, z.x11),
                    Al(z.y01, z.x01),
                    !s
                  ))
          } else t.lineTo(c + b, p + S), t.arc(c, p, i, u, l, s)
        else t.lineTo(c + b, p + S)
      }
    else t.moveTo(c, p)
    t.closePath()
  }
}
var Nl = function () {
    ;(this.cx = 0),
      (this.cy = 0),
      (this.r0 = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0),
      (this.cornerRadius = 0),
      (this.innerCornerRadius = 0)
  },
  Fl = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultShape = function () {
        return new Nl()
      }),
      (e.prototype.buildPath = function (t, e) {
        El(t, e)
      }),
      (e.prototype.isZeroArea = function () {
        return (
          this.shape.startAngle === this.shape.endAngle ||
          this.shape.r === this.shape.r0
        )
      }),
      e
    )
  })(La)
Fl.prototype.type = 'sector'
var Hl = Fl,
  Vl = function () {
    ;(this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0)
  },
  Wl = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultShape = function () {
        return new Vl()
      }),
      (e.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI
        t.moveTo(n + e.r, i),
          t.arc(n, i, e.r, 0, r, !1),
          t.moveTo(n + e.r0, i),
          t.arc(n, i, e.r0, 0, r, !0)
      }),
      e
    )
  })(La)
Wl.prototype.type = 'ring'
var Gl = Wl
function Ul(t, e, n, i, r, o, a) {
  var s = 0.5 * (n - t),
    l = 0.5 * (i - e)
  return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
}
function Xl(t, e, n) {
  var i = e.smooth,
    r = e.points
  if (r && r.length >= 2) {
    if (i && 'spline' !== i) {
      var o = (function (t, e, n, i) {
        var r,
          o,
          a,
          s,
          l = [],
          u = [],
          h = [],
          c = []
        if (i) {
          ;(a = [1 / 0, 1 / 0]), (s = [-1 / 0, -1 / 0])
          for (var p = 0, f = t.length; p < f; p++)
            Ht(a, a, t[p]), Vt(s, s, t[p])
          Ht(a, a, i[0]), Vt(s, s, i[1])
        }
        for (p = 0, f = t.length; p < f; p++) {
          var d = t[p]
          if (n) (r = t[p ? p - 1 : f - 1]), (o = t[(p + 1) % f])
          else {
            if (0 === p || p === f - 1) {
              l.push(kt(t[p]))
              continue
            }
            ;(r = t[p - 1]), (o = t[p + 1])
          }
          Pt(u, o, r), Lt(u, u, e)
          var g = Bt(d, r),
            y = Bt(d, o),
            v = g + y
          0 !== v && ((g /= v), (y /= v)), Lt(h, u, -g), Lt(c, u, y)
          var m = Dt([], d, h),
            _ = Dt([], d, c)
          i && (Vt(m, m, a), Ht(m, m, s), Vt(_, _, a), Ht(_, _, s)),
            l.push(m),
            l.push(_)
        }
        return n && l.push(l.shift()), l
      })(r, i, n, e.smoothConstraint)
      t.moveTo(r[0][0], r[0][1])
      for (var a = r.length, s = 0; s < (n ? a : a - 1); s++) {
        var l = o[2 * s],
          u = o[2 * s + 1],
          h = r[(s + 1) % a]
        t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
      }
    } else {
      'spline' === i &&
        (r = (function (t, e) {
          for (var n = t.length, i = [], r = 0, o = 1; o < n; o++)
            r += Bt(t[o - 1], t[o])
          var a = r / 2
          for (a = a < n ? n : a, o = 0; o < a; o++) {
            var s = (o / (a - 1)) * (e ? n : n - 1),
              l = Math.floor(s),
              u = s - l,
              h = void 0,
              c = t[l % n],
              p = void 0,
              f = void 0
            e
              ? ((h = t[(l - 1 + n) % n]),
                (p = t[(l + 1) % n]),
                (f = t[(l + 2) % n]))
              : ((h = t[0 === l ? l : l - 1]),
                (p = t[l > n - 2 ? n - 1 : l + 1]),
                (f = t[l > n - 3 ? n - 1 : l + 2]))
            var d = u * u,
              g = u * d
            i.push([
              Ul(h[0], c[0], p[0], f[0], u, d, g),
              Ul(h[1], c[1], p[1], f[1], u, d, g),
            ])
          }
          return i
        })(r, n)),
        t.moveTo(r[0][0], r[0][1])
      s = 1
      for (var c = r.length; s < c; s++) t.lineTo(r[s][0], r[s][1])
    }
    n && t.closePath()
  }
}
var Yl = function () {
    ;(this.points = null), (this.smooth = 0), (this.smoothConstraint = null)
  },
  jl = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultShape = function () {
        return new Yl()
      }),
      (e.prototype.buildPath = function (t, e) {
        Xl(t, e, !0)
      }),
      e
    )
  })(La)
jl.prototype.type = 'polygon'
var ql = jl,
  Zl = function () {
    ;(this.points = null),
      (this.percent = 1),
      (this.smooth = 0),
      (this.smoothConstraint = null)
  },
  Kl = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (e.prototype.getDefaultShape = function () {
        return new Zl()
      }),
      (e.prototype.buildPath = function (t, e) {
        Xl(t, e, !1)
      }),
      e
    )
  })(La)
Kl.prototype.type = 'polyline'
var $l = Kl,
  Ql = {},
  Jl = function () {
    ;(this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.percent = 1)
  },
  tu = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (e.prototype.getDefaultShape = function () {
        return new Jl()
      }),
      (e.prototype.buildPath = function (t, e) {
        var n, i, r, o
        if (this.subPixelOptimize) {
          var a = Wa(Ql, e, this.style)
          ;(n = a.x1), (i = a.y1), (r = a.x2), (o = a.y2)
        } else (n = e.x1), (i = e.y1), (r = e.x2), (o = e.y2)
        var s = e.percent
        0 !== s &&
          (t.moveTo(n, i),
          s < 1 && ((r = n * (1 - s) + r * s), (o = i * (1 - s) + o * s)),
          t.lineTo(r, o))
      }),
      (e.prototype.pointAt = function (t) {
        var e = this.shape
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
      }),
      e
    )
  })(La)
tu.prototype.type = 'line'
var eu = tu,
  nu = [],
  iu = function () {
    ;(this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.cpx1 = 0),
      (this.cpy1 = 0),
      (this.percent = 1)
  }
function ru(t, e, n) {
  var i = t.cpx2,
    r = t.cpy2
  return null === i || null === r
    ? [
        (n ? So : bo)(t.x1, t.cpx1, t.cpx2, t.x2, e),
        (n ? So : bo)(t.y1, t.cpy1, t.cpy2, t.y2, e),
      ]
    : [
        (n ? Do : Io)(t.x1, t.cpx1, t.x2, e),
        (n ? Do : Io)(t.y1, t.cpy1, t.y2, e),
      ]
}
var ou = (function (t) {
  function e(e) {
    return t.call(this, e) || this
  }
  return (
    Tt(e, t),
    (e.prototype.getDefaultStyle = function () {
      return { stroke: '#000', fill: null }
    }),
    (e.prototype.getDefaultShape = function () {
      return new iu()
    }),
    (e.prototype.buildPath = function (t, e) {
      var n = e.x1,
        i = e.y1,
        r = e.x2,
        o = e.y2,
        a = e.cpx1,
        s = e.cpy1,
        l = e.cpx2,
        u = e.cpy2,
        h = e.percent
      0 !== h &&
        (t.moveTo(n, i),
        null == l || null == u
          ? (h < 1 &&
              (Po(n, a, r, h, nu),
              (a = nu[1]),
              (r = nu[2]),
              Po(i, s, o, h, nu),
              (s = nu[1]),
              (o = nu[2])),
            t.quadraticCurveTo(a, s, r, o))
          : (h < 1 &&
              (Co(n, a, l, r, h, nu),
              (a = nu[1]),
              (l = nu[2]),
              (r = nu[3]),
              Co(i, s, u, o, h, nu),
              (s = nu[1]),
              (u = nu[2]),
              (o = nu[3])),
            t.bezierCurveTo(a, s, l, u, r, o)))
    }),
    (e.prototype.pointAt = function (t) {
      return ru(this.shape, t, !1)
    }),
    (e.prototype.tangentAt = function (t) {
      var e = ru(this.shape, t, !0)
      return Rt(e, e)
    }),
    e
  )
})(La)
ou.prototype.type = 'bezier-curve'
var au = ou,
  su = function () {
    ;(this.cx = 0),
      (this.cy = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0)
  },
  lu = (function (t) {
    function e(e) {
      return t.call(this, e) || this
    }
    return (
      Tt(e, t),
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (e.prototype.getDefaultShape = function () {
        return new su()
      }),
      (e.prototype.buildPath = function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          o = e.startAngle,
          a = e.endAngle,
          s = e.clockwise,
          l = Math.cos(o),
          u = Math.sin(o)
        t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, o, a, !s)
      }),
      e
    )
  })(La)
lu.prototype.type = 'arc'
var uu = lu,
  hu = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.type = 'compound'), e
    }
    return (
      Tt(e, t),
      (e.prototype._updatePathDirty = function () {
        for (
          var t = this.shape.paths, e = this.shapeChanged(), n = 0;
          n < t.length;
          n++
        )
          e = e || t[n].shapeChanged()
        e && this.dirtyShape()
      }),
      (e.prototype.beforeBrush = function () {
        this._updatePathDirty()
        for (
          var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0;
          n < t.length;
          n++
        )
          t[n].path || t[n].createPathProxy(),
            t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold)
      }),
      (e.prototype.buildPath = function (t, e) {
        for (var n = e.paths || [], i = 0; i < n.length; i++)
          n[i].buildPath(t, n[i].shape, !0)
      }),
      (e.prototype.afterBrush = function () {
        for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
          t[e].pathUpdated()
      }),
      (e.prototype.getBoundingRect = function () {
        return (
          this._updatePathDirty.call(this),
          La.prototype.getBoundingRect.call(this)
        )
      }),
      e
    )
  })(La),
  cu = (function () {
    function t(t) {
      this.colorStops = t || []
    }
    return (
      (t.prototype.addColorStop = function (t, e) {
        this.colorStops.push({ offset: t, color: e })
      }),
      t
    )
  })(),
  pu = (function (t) {
    function e(e, n, i, r, o, a) {
      var s = t.call(this, o) || this
      return (
        (s.x = null == e ? 0 : e),
        (s.y = null == n ? 0 : n),
        (s.x2 = null == i ? 1 : i),
        (s.y2 = null == r ? 0 : r),
        (s.type = 'linear'),
        (s.global = a || !1),
        s
      )
    }
    return Tt(e, t), e
  })(cu),
  fu = (function (t) {
    function e(e, n, i, r, o) {
      var a = t.call(this, r) || this
      return (
        (a.x = null == e ? 0.5 : e),
        (a.y = null == n ? 0.5 : n),
        (a.r = null == i ? 0.5 : i),
        (a.type = 'radial'),
        (a.global = o || !1),
        a
      )
    }
    return Tt(e, t), e
  })(cu),
  du = [0, 0],
  gu = [0, 0],
  yu = new ii(),
  vu = new ii(),
  mu = (function () {
    function t(t, e) {
      ;(this._corners = []), (this._axes = []), (this._origin = [0, 0])
      for (var n = 0; n < 4; n++) this._corners[n] = new ii()
      for (n = 0; n < 2; n++) this._axes[n] = new ii()
      t && this.fromBoundingRect(t, e)
    }
    return (
      (t.prototype.fromBoundingRect = function (t, e) {
        var n = this._corners,
          i = this._axes,
          r = t.x,
          o = t.y,
          a = r + t.width,
          s = o + t.height
        if ((n[0].set(r, o), n[1].set(a, o), n[2].set(a, s), n[3].set(r, s), e))
          for (var l = 0; l < 4; l++) n[l].transform(e)
        ii.sub(i[0], n[1], n[0]),
          ii.sub(i[1], n[3], n[0]),
          i[0].normalize(),
          i[1].normalize()
        for (l = 0; l < 2; l++) this._origin[l] = i[l].dot(n[0])
      }),
      (t.prototype.intersect = function (t, e) {
        var n = !0,
          i = !e
        return (
          yu.set(1 / 0, 1 / 0),
          vu.set(0, 0),
          (!this._intersectCheckOneSide(this, t, yu, vu, i, 1) &&
            ((n = !1), i)) ||
            (!this._intersectCheckOneSide(t, this, yu, vu, i, -1) &&
              ((n = !1), i)) ||
            i ||
            ii.copy(e, n ? yu : vu),
          n
        )
      }),
      (t.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
        for (var a = !0, s = 0; s < 2; s++) {
          var l = this._axes[s]
          if (
            (this._getProjMinMaxOnAxis(s, t._corners, du),
            this._getProjMinMaxOnAxis(s, e._corners, gu),
            du[1] < gu[0] || du[0] > gu[1])
          ) {
            if (((a = !1), r)) return a
            var u = Math.abs(gu[0] - du[1]),
              h = Math.abs(du[0] - gu[1])
            Math.min(u, h) > i.len() &&
              (u < h ? ii.scale(i, l, -u * o) : ii.scale(i, l, h * o))
          } else if (n) {
            ;(u = Math.abs(gu[0] - du[1])), (h = Math.abs(du[0] - gu[1]))
            Math.min(u, h) < n.len() &&
              (u < h ? ii.scale(n, l, u * o) : ii.scale(n, l, -h * o))
          }
        }
        return a
      }),
      (t.prototype._getProjMinMaxOnAxis = function (t, e, n) {
        for (
          var i = this._axes[t],
            r = this._origin,
            o = e[0].dot(i) + r[t],
            a = o,
            s = o,
            l = 1;
          l < e.length;
          l++
        ) {
          var u = e[l].dot(i) + r[t]
          ;(a = Math.min(u, a)), (s = Math.max(u, s))
        }
        ;(n[0] = a), (n[1] = s)
      }),
      t
    )
  })(),
  _u = [],
  xu = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (
        (e.notClear = !0),
        (e.incremental = !0),
        (e._displayables = []),
        (e._temporaryDisplayables = []),
        (e._cursor = 0),
        e
      )
    }
    return (
      Tt(e, t),
      (e.prototype.traverse = function (t, e) {
        t.call(e, this)
      }),
      (e.prototype.useStyle = function () {
        this.style = {}
      }),
      (e.prototype.getCursor = function () {
        return this._cursor
      }),
      (e.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length
      }),
      (e.prototype.clearDisplaybles = function () {
        ;(this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          this.markRedraw(),
          (this.notClear = !1)
      }),
      (e.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = []
      }),
      (e.prototype.addDisplayable = function (t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t),
          this.markRedraw()
      }),
      (e.prototype.addDisplayables = function (t, e) {
        e = e || !1
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
      }),
      (e.prototype.getDisplayables = function () {
        return this._displayables
      }),
      (e.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables
      }),
      (e.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++)
          t && t(this._displayables[e])
        for (e = 0; e < this._temporaryDisplayables.length; e++)
          t && t(this._temporaryDisplayables[e])
      }),
      (e.prototype.update = function () {
        this.updateTransform()
        for (var t = this._cursor; t < this._displayables.length; t++) {
          ;((e = this._displayables[t]).parent = this),
            e.update(),
            (e.parent = null)
        }
        for (t = 0; t < this._temporaryDisplayables.length; t++) {
          var e
          ;((e = this._temporaryDisplayables[t]).parent = this),
            e.update(),
            (e.parent = null)
        }
      }),
      (e.prototype.getBoundingRect = function () {
        if (!this._rect) {
          for (
            var t = new pi(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0;
            e < this._displayables.length;
            e++
          ) {
            var n = this._displayables[e],
              i = n.getBoundingRect().clone()
            n.needLocalTransform() && i.applyTransform(n.getLocalTransform(_u)),
              t.union(i)
          }
          this._rect = t
        }
        return this._rect
      }),
      (e.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e)
        if (this.getBoundingRect().contain(n[0], n[1]))
          for (var i = 0; i < this._displayables.length; i++) {
            if (this._displayables[i].contain(t, e)) return !0
          }
        return !1
      }),
      e
    )
  })(co),
  wu = _r()
function bu(t, e, n, i, r, o, a) {
  var s,
    l = !1
  'function' == typeof r
    ? ((a = o), (o = r), (r = null))
    : it(r) &&
      ((o = r.cb),
      (a = r.during),
      (l = r.isFrom),
      (s = r.removeOpt),
      (r = r.dataIndex))
  var u = 'remove' === t
  u || e.stopAnimation('remove')
  var h = (function (t, e, n, i, r) {
    var o
    if (e && e.ecModel) {
      var a = e.ecModel.getUpdatePayload()
      o = a && a.animation
    }
    var s = 'update' === t
    if (e && e.isAnimationEnabled()) {
      var l = void 0,
        u = void 0,
        h = void 0
      return (
        i
          ? ((l = ut(i.duration, 200)), (u = ut(i.easing, 'cubicOut')), (h = 0))
          : ((l = e.getShallow(
              s ? 'animationDurationUpdate' : 'animationDuration'
            )),
            (u = e.getShallow(s ? 'animationEasingUpdate' : 'animationEasing')),
            (h = e.getShallow(s ? 'animationDelayUpdate' : 'animationDelay'))),
        o &&
          (null != o.duration && (l = o.duration),
          null != o.easing && (u = o.easing),
          null != o.delay && (h = o.delay)),
        'function' == typeof h && (h = h(n, r)),
        'function' == typeof l && (l = l(n)),
        { duration: l || 0, delay: h, easing: u }
      )
    }
    return null
  })(
    t,
    i,
    r,
    u ? s || {} : null,
    i && i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null
  )
  if (h && h.duration > 0) {
    var c = {
      duration: h.duration,
      delay: h.delay || 0,
      easing: h.easing,
      done: o,
      force: !!o || !!a,
      setToFinal: !u,
      scope: t,
      during: a,
    }
    l ? e.animateFrom(n, c) : e.animateTo(n, c)
  } else e.stopAnimation(), !l && e.attr(n), a && a(1), o && o()
}
function Su(t, e, n, i, r, o) {
  bu('update', t, e, n, i, r, o)
}
function Tu(t, e, n, i, r, o) {
  bu('init', t, e, n, i, r, o)
}
function Mu(t) {
  if (!t.__zr) return !0
  for (var e = 0; e < t.animators.length; e++) {
    if ('remove' === t.animators[e].scope) return !0
  }
  return !1
}
function Cu(t, e, n, i, r, o) {
  Mu(t) || bu('remove', t, e, n, i, r, o)
}
function ku(t, e, n, i) {
  t.removeTextContent(),
    t.removeTextGuideLine(),
    Cu(t, { style: { opacity: 0 } }, e, n, i)
}
function Iu(t, e, n) {
  function i() {
    t.parent && t.parent.remove(t)
  }
  t.isGroup
    ? t.traverse(function (t) {
        t.isGroup || ku(t, e, n, i)
      })
    : ku(t, e, n, i)
}
function Du(t) {
  wu(t).oldStyle = t.style
}
var Au = Math.max,
  Pu = Math.min,
  Ou = {}
var Lu = function (t, e) {
  var n = vl(t, e)
  return (function (t) {
    function e(e) {
      var i = t.call(this, e) || this
      return (
        (i.applyTransform = n.applyTransform), (i.buildPath = n.buildPath), i
      )
    }
    return Tt(e, t), e
  })(gl)
}
function Ru(t, e) {
  Ou[t] = e
}
function Bu(t) {
  if (Ou.hasOwnProperty(t)) return Ou[t]
}
function zu(t, e, n, i) {
  var r = ml(t, e)
  return n && ('center' === i && (n = Nu(n, r.getBoundingRect())), Hu(r, n)), r
}
function Eu(t, e, n) {
  var i = new Ha({
    style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
    onload: function (t) {
      if ('center' === n) {
        var r = { width: t.width, height: t.height }
        i.setStyle(Nu(e, r))
      }
    },
  })
  return i
}
function Nu(t, e) {
  var n,
    i = e.width / e.height,
    r = t.height * i
  return (
    (n = r <= t.width ? t.height : (r = t.width) / i),
    {
      x: t.x + t.width / 2 - r / 2,
      y: t.y + t.height / 2 - n / 2,
      width: r,
      height: n,
    }
  )
}
var Fu = function (t, e) {
  for (var n = [], i = t.length, r = 0; r < i; r++) {
    var o = t[r]
    n.push(o.getUpdatedPathProxy(!0))
  }
  var a = new La(e)
  return (
    a.createPathProxy(),
    (a.buildPath = function (t) {
      if (yl(t)) {
        t.appendPath(n)
        var e = t.getContext()
        e && t.rebuildPath(e, 1)
      }
    }),
    a
  )
}
function Hu(t, e) {
  if (t.applyTransform) {
    var n = t.getBoundingRect().calculateTransform(e)
    t.applyTransform(n)
  }
}
var Vu = Ua
function Wu(t, e) {
  for (var n = Nn([]); t && t !== e; )
    Hn(n, t.getLocalTransform(), n), (t = t.parent)
  return n
}
function Gu(t, e, n) {
  return (
    e && !G(e) && (e = ni.getLocalTransform(e)),
    n && (e = Un([], e)),
    Ft([], t, e)
  )
}
function Uu(t, e, n) {
  var i =
      0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs((2 * e[4]) / e[0]),
    r =
      0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs((2 * e[4]) / e[2]),
    o = [
      'left' === t ? -i : 'right' === t ? i : 0,
      'top' === t ? -r : 'bottom' === t ? r : 0,
    ]
  return (
    (o = Gu(o, e, n)),
    Math.abs(o[0]) > Math.abs(o[1])
      ? o[0] > 0
        ? 'right'
        : 'left'
      : o[1] > 0
      ? 'bottom'
      : 'top'
  )
}
function Xu(t) {
  return !t.isGroup
}
function Yu(t, e, n) {
  if (t && e) {
    var i,
      r =
        ((i = {}),
        t.traverse(function (t) {
          Xu(t) && t.anid && (i[t.anid] = t)
        }),
        i)
    e.traverse(function (t) {
      if (Xu(t) && t.anid) {
        var e = r[t.anid]
        if (e) {
          var i = o(t)
          t.attr(o(e)), Su(t, i, n, ss(t).dataIndex)
        }
      }
    })
  }
  function o(t) {
    var e = { x: t.x, y: t.y, rotation: t.rotation }
    return (
      (function (t) {
        return null != t.shape
      })(t) && (e.shape = N({}, t.shape)),
      e
    )
  }
}
function ju(t, e) {
  return X(t, function (t) {
    var n = t[0]
    ;(n = Au(n, e.x)), (n = Pu(n, e.x + e.width))
    var i = t[1]
    return (i = Au(i, e.y)), [n, (i = Pu(i, e.y + e.height))]
  })
}
function qu(t, e, n) {
  var i = N({ rectHover: !0 }, e),
    r = (i.style = { strokeNoScale: !0 })
  if (((n = n || { x: -1, y: -1, width: 2, height: 2 }), t))
    return 0 === t.indexOf('image://')
      ? ((r.image = t.slice(8)), F(r, n), new Ha(i))
      : zu(t.replace('path://', ''), i, n, 'center')
}
function Zu(t, e, n, i, r, o, a, s) {
  var l,
    u = n - t,
    h = i - e,
    c = a - r,
    p = s - o,
    f = Ku(c, p, u, h)
  if ((l = f) <= 1e-6 && l >= -1e-6) return !1
  var d = t - r,
    g = e - o,
    y = Ku(d, g, u, h) / f
  if (y < 0 || y > 1) return !1
  var v = Ku(d, g, c, p) / f
  return !(v < 0 || v > 1)
}
function Ku(t, e, n, i) {
  return t * i - n * e
}
function $u(t) {
  var e = t.itemTooltipOption,
    n = t.componentModel,
    i = t.itemName,
    r = tt(e) ? { formatter: e } : e,
    o = n.mainType,
    a = n.componentIndex,
    s = { componentType: o, name: i, $vars: ['name'] }
  s[o + 'Index'] = a
  var l = t.formatterParamsExtra
  l &&
    U(Z(l), function (t) {
      wt(s, t) || ((s[t] = l[t]), s.$vars.push(t))
    })
  var u = ss(t.el)
  ;(u.componentMainType = o),
    (u.componentIndex = a),
    (u.tooltipConfig = {
      name: i,
      option: F({ content: i, formatterParams: s }, r),
    })
}
Ru('circle', wl),
  Ru('ellipse', Tl),
  Ru('sector', Hl),
  Ru('ring', Gl),
  Ru('polygon', ql),
  Ru('polyline', $l),
  Ru('rect', qa),
  Ru('line', eu),
  Ru('bezierCurve', au),
  Ru('arc', uu)
var Qu = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    updateProps: Su,
    initProps: Tu,
    removeElement: Cu,
    removeElementWithFadeOut: Iu,
    isElementRemoved: Mu,
    extendShape: function (t) {
      return La.extend(t)
    },
    extendPath: function (t, e) {
      return Lu(t, e)
    },
    registerShape: Ru,
    getShapeClass: Bu,
    makePath: zu,
    makeImage: Eu,
    mergePath: Fu,
    resizePath: Hu,
    subPixelOptimizeLine: function (t) {
      return Wa(t.shape, t.shape, t.style), t
    },
    subPixelOptimizeRect: function (t) {
      return Ga(t.shape, t.shape, t.style), t
    },
    subPixelOptimize: Vu,
    getTransform: Wu,
    applyTransform: Gu,
    transformDirection: Uu,
    groupTransition: Yu,
    clipPointsByRect: ju,
    clipRectByRect: function (t, e) {
      var n = Au(t.x, e.x),
        i = Pu(t.x + t.width, e.x + e.width),
        r = Au(t.y, e.y),
        o = Pu(t.y + t.height, e.y + e.height)
      if (i >= n && o >= r) return { x: n, y: r, width: i - n, height: o - r }
    },
    createIcon: qu,
    linePolygonIntersect: function (t, e, n, i, r) {
      for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
        var s = r[o]
        if (Zu(t, e, n, i, s[0], s[1], a[0], a[1])) return !0
        a = s
      }
    },
    lineLineIntersect: Zu,
    setTooltipConfig: $u,
    Group: Ri,
    Image: Ha,
    Text: as,
    Circle: wl,
    Ellipse: Tl,
    Sector: Hl,
    Ring: Gl,
    Polygon: ql,
    Polyline: $l,
    Rect: qa,
    Line: eu,
    BezierCurve: au,
    Arc: uu,
    IncrementalDisplayable: xu,
    CompoundPath: hu,
    LinearGradient: pu,
    RadialGradient: fu,
    BoundingRect: pi,
    OrientedBoundingRect: mu,
    Point: ii,
    Path: La,
  }),
  Ju = {}
function th(t, e) {
  for (var n = 0; n < fs.length; n++) {
    var i = fs[n],
      r = e[i],
      o = t.ensureState(i)
    ;(o.style = o.style || {}), (o.style.text = r)
  }
  var a = t.currentStates.slice()
  t.clearStates(!0), t.setStyle({ text: e.normal }), t.useStates(a, !0)
}
function eh(t, e, n) {
  var i,
    r = t.labelFetcher,
    o = t.labelDataIndex,
    a = t.labelDimIndex,
    s = e.normal
  r &&
    (i = r.getFormattedLabel(
      o,
      'normal',
      null,
      a,
      s && s.get('formatter'),
      null != n ? { interpolatedValue: n } : null
    )),
    null == i && (i = J(t.defaultText) ? t.defaultText(o, t, n) : t.defaultText)
  for (var l = { normal: i }, u = 0; u < fs.length; u++) {
    var h = fs[u],
      c = e[h]
    l[h] = ut(
      r ? r.getFormattedLabel(o, h, null, a, c && c.get('formatter')) : null,
      i
    )
  }
  return l
}
function nh(t, e, n, i) {
  n = n || Ju
  for (var r = t instanceof as, o = !1, a = 0; a < ds.length; a++) {
    if ((p = e[ds[a]]) && p.getShallow('show')) {
      o = !0
      break
    }
  }
  var s = r ? t : t.getTextContent()
  if (o) {
    r ||
      (s || ((s = new as()), t.setTextContent(s)),
      t.stateProxy && (s.stateProxy = t.stateProxy))
    var l = eh(n, e),
      u = e.normal,
      h = !!u.getShallow('show'),
      c = rh(u, i && i.normal, n, !1, !r)
    ;(c.text = l.normal), r || t.setTextConfig(oh(u, n, !1))
    for (a = 0; a < fs.length; a++) {
      var p,
        f = fs[a]
      if ((p = e[f])) {
        var d = s.ensureState(f),
          g = !!ut(p.getShallow('show'), h)
        if (
          (g !== h && (d.ignore = !g),
          (d.style = rh(p, i && i[f], n, !0, !r)),
          (d.style.text = l[f]),
          !r)
        )
          t.ensureState(f).textConfig = oh(p, n, !0)
      }
    }
    ;(s.silent = !!u.getShallow('silent')),
      null != s.style.x && (c.x = s.style.x),
      null != s.style.y && (c.y = s.style.y),
      (s.ignore = !h),
      s.useStyle(c),
      s.dirty(),
      n.enableTextSetter &&
        (ch(s).setLabelText = function (t) {
          var i = eh(n, e, t)
          th(s, i)
        })
  } else s && (s.ignore = !0)
  t.dirty()
}
function ih(t, e) {
  e = e || 'label'
  for (var n = { normal: t.getModel(e) }, i = 0; i < fs.length; i++) {
    var r = fs[i]
    n[r] = t.getModel([r, e])
  }
  return n
}
function rh(t, e, n, i, r) {
  var o = {}
  return (
    (function (t, e, n, i, r) {
      n = n || Ju
      var o,
        a = e.ecModel,
        s = a && a.option.textStyle,
        l = (function (t) {
          var e
          for (; t && t !== t.ecModel; ) {
            var n = (t.option || Ju).rich
            if (n) {
              e = e || {}
              for (var i = Z(n), r = 0; r < i.length; r++) {
                e[i[r]] = 1
              }
            }
            t = t.parentModel
          }
          return e
        })(e)
      if (l)
        for (var u in ((o = {}), l))
          if (l.hasOwnProperty(u)) {
            var h = e.getModel(['rich', u])
            uh((o[u] = {}), h, s, n, i, r, !1, !0)
          }
      o && (t.rich = o)
      var c = e.get('overflow')
      c && (t.overflow = c)
      var p = e.get('minMargin')
      null != p && (t.margin = p)
      uh(t, e, s, n, i, r, !0, !1)
    })(o, t, n, i, r),
    e && N(o, e),
    o
  )
}
function oh(t, e, n) {
  e = e || {}
  var i,
    r = {},
    o = t.getShallow('rotate'),
    a = ut(t.getShallow('distance'), n ? null : 5),
    s = t.getShallow('offset')
  return (
    'outside' === (i = t.getShallow('position') || (n ? null : 'inside')) &&
      (i = e.defaultOutsidePosition || 'top'),
    null != i && (r.position = i),
    null != s && (r.offset = s),
    null != o && ((o *= Math.PI / 180), (r.rotation = o)),
    null != a && (r.distance = a),
    (r.outsideFill =
      'inherit' === t.get('color') ? e.inheritColor || null : 'auto'),
    r
  )
}
var ah = [
    'fontStyle',
    'fontWeight',
    'fontSize',
    'fontFamily',
    'textShadowColor',
    'textShadowBlur',
    'textShadowOffsetX',
    'textShadowOffsetY',
  ],
  sh = ['align', 'lineHeight', 'width', 'height', 'tag', 'verticalAlign'],
  lh = [
    'padding',
    'borderWidth',
    'borderRadius',
    'borderDashOffset',
    'backgroundColor',
    'borderColor',
    'shadowColor',
    'shadowBlur',
    'shadowOffsetX',
    'shadowOffsetY',
  ]
function uh(t, e, n, i, r, o, a, s) {
  n = (!r && n) || Ju
  var l = i && i.inheritColor,
    u = e.getShallow('color'),
    h = e.getShallow('textBorderColor'),
    c = ut(e.getShallow('opacity'), n.opacity)
  ;('inherit' !== u && 'auto' !== u) || (u = l || null),
    ('inherit' !== h && 'auto' !== h) || (h = l || null),
    o || ((u = u || n.color), (h = h || n.textBorderColor)),
    null != u && (t.fill = u),
    null != h && (t.stroke = h)
  var p = ut(e.getShallow('textBorderWidth'), n.textBorderWidth)
  null != p && (t.lineWidth = p)
  var f = ut(e.getShallow('textBorderType'), n.textBorderType)
  null != f && (t.lineDash = f)
  var d = ut(e.getShallow('textBorderDashOffset'), n.textBorderDashOffset)
  null != d && (t.lineDashOffset = d),
    r || null != c || s || (c = i && i.defaultOpacity),
    null != c && (t.opacity = c),
    r || o || (null == t.fill && i.inheritColor && (t.fill = i.inheritColor))
  for (var g = 0; g < ah.length; g++) {
    var y = ah[g]
    null != (m = ut(e.getShallow(y), n[y])) && (t[y] = m)
  }
  for (g = 0; g < sh.length; g++) {
    y = sh[g]
    null != (m = e.getShallow(y)) && (t[y] = m)
  }
  if (null == t.verticalAlign) {
    var v = e.getShallow('baseline')
    null != v && (t.verticalAlign = v)
  }
  if (!a || !i.disableBox) {
    for (g = 0; g < lh.length; g++) {
      var m
      y = lh[g]
      null != (m = e.getShallow(y)) && (t[y] = m)
    }
    var _ = e.getShallow('borderType')
    null != _ && (t.borderDash = _),
      ('auto' !== t.backgroundColor && 'inherit' !== t.backgroundColor) ||
        !l ||
        (t.backgroundColor = l),
      ('auto' !== t.borderColor && 'inherit' !== t.borderColor) ||
        !l ||
        (t.borderColor = l)
  }
}
function hh(t, e) {
  var n = e && e.getModel('textStyle')
  return dt(
    [
      t.fontStyle || (n && n.getShallow('fontStyle')) || '',
      t.fontWeight || (n && n.getShallow('fontWeight')) || '',
      (t.fontSize || (n && n.getShallow('fontSize')) || 12) + 'px',
      t.fontFamily || (n && n.getShallow('fontFamily')) || 'sans-serif',
    ].join(' ')
  )
}
var ch = _r()
function ph(t, e, n, i) {
  if (t) {
    var r = ch(t)
    ;(r.prevValue = r.value), (r.value = n)
    var o = e.normal
    ;(r.valueAnimation = o.get('valueAnimation')),
      r.valueAnimation &&
        ((r.precision = o.get('precision')),
        (r.defaultInterpolatedText = i),
        (r.statesModels = e))
  }
}
function fh(t, e, n, i, r) {
  var o = ch(t)
  if (o.valueAnimation) {
    var a = o.defaultInterpolatedText,
      s = ut(o.interpolatedValue, o.prevValue),
      l = o.value
    ;(null == o.prevValue ? Tu : Su)(t, {}, i, e, null, function (i) {
      var u = kr(n, o.precision, s, l, i)
      o.interpolatedValue = 1 === i ? null : u
      var h = eh(
        { labelDataIndex: e, labelFetcher: r, defaultText: a ? a(u) : u + '' },
        o.statesModels,
        u
      )
      th(t, h)
    })
  }
}
var dh,
  gh,
  yh = ['textStyle', 'color'],
  vh = new as(),
  mh = (function () {
    function t() {}
    return (
      (t.prototype.getTextColor = function (t) {
        var e = this.ecModel
        return this.getShallow('color') || (!t && e ? e.get(yh) : null)
      }),
      (t.prototype.getFont = function () {
        return hh(
          {
            fontStyle: this.getShallow('fontStyle'),
            fontWeight: this.getShallow('fontWeight'),
            fontSize: this.getShallow('fontSize'),
            fontFamily: this.getShallow('fontFamily'),
          },
          this.ecModel
        )
      }),
      (t.prototype.getTextRect = function (t) {
        return (
          vh.useStyle({
            text: t,
            fontStyle: this.getShallow('fontStyle'),
            fontWeight: this.getShallow('fontWeight'),
            fontSize: this.getShallow('fontSize'),
            fontFamily: this.getShallow('fontFamily'),
            verticalAlign:
              this.getShallow('verticalAlign') || this.getShallow('baseline'),
            padding: this.getShallow('padding'),
            lineHeight: this.getShallow('lineHeight'),
            rich: this.getShallow('rich'),
          }),
          vh.update(),
          vh.getBoundingRect()
        )
      }),
      t
    )
  })(),
  _h = [
    ['lineWidth', 'width'],
    ['stroke', 'color'],
    ['opacity'],
    ['shadowBlur'],
    ['shadowOffsetX'],
    ['shadowOffsetY'],
    ['shadowColor'],
    ['lineDash', 'type'],
    ['lineDashOffset', 'dashOffset'],
    ['lineCap', 'cap'],
    ['lineJoin', 'join'],
    ['miterLimit'],
  ],
  xh = Er(_h),
  wh = (function () {
    function t() {}
    return (
      (t.prototype.getLineStyle = function (t) {
        return xh(this, t)
      }),
      t
    )
  })(),
  bh = [
    ['fill', 'color'],
    ['stroke', 'borderColor'],
    ['lineWidth', 'borderWidth'],
    ['opacity'],
    ['shadowBlur'],
    ['shadowOffsetX'],
    ['shadowOffsetY'],
    ['shadowColor'],
    ['lineDash', 'borderType'],
    ['lineDashOffset', 'borderDashOffset'],
    ['lineCap', 'borderCap'],
    ['lineJoin', 'borderJoin'],
    ['miterLimit', 'borderMiterLimit'],
  ],
  Sh = Er(bh),
  Th = (function () {
    function t() {}
    return (
      (t.prototype.getItemStyle = function (t, e) {
        return Sh(this, t, e)
      }),
      t
    )
  })(),
  Mh = (function () {
    function t(t, e, n) {
      ;(this.parentModel = e), (this.ecModel = n), (this.option = t)
    }
    return (
      (t.prototype.init = function (t, e, n) {
        for (var i = [], r = 3; r < arguments.length; r++)
          i[r - 3] = arguments[r]
      }),
      (t.prototype.mergeOption = function (t, e) {
        z(this.option, t, !0)
      }),
      (t.prototype.get = function (t, e) {
        return null == t
          ? this.option
          : this._doGet(this.parsePath(t), !e && this.parentModel)
      }),
      (t.prototype.getShallow = function (t, e) {
        var n = this.option,
          i = null == n ? n : n[t]
        if (null == i && !e) {
          var r = this.parentModel
          r && (i = r.getShallow(t))
        }
        return i
      }),
      (t.prototype.getModel = function (e, n) {
        var i = null != e,
          r = i ? this.parsePath(e) : null
        return new t(
          i ? this._doGet(r) : this.option,
          (n =
            n ||
            (this.parentModel &&
              this.parentModel.getModel(this.resolveParentPath(r)))),
          this.ecModel
        )
      }),
      (t.prototype.isEmpty = function () {
        return null == this.option
      }),
      (t.prototype.restoreData = function () {}),
      (t.prototype.clone = function () {
        return new (0, this.constructor)(B(this.option))
      }),
      (t.prototype.parsePath = function (t) {
        return 'string' == typeof t ? t.split('.') : t
      }),
      (t.prototype.resolveParentPath = function (t) {
        return t
      }),
      (t.prototype.isAnimationEnabled = function () {
        if (!x.node && this.option) {
          if (null != this.option.animation) return !!this.option.animation
          if (this.parentModel) return this.parentModel.isAnimationEnabled()
        }
      }),
      (t.prototype._doGet = function (t, e) {
        var n = this.option
        if (!t) return n
        for (
          var i = 0;
          i < t.length &&
          (!t[i] || null != (n = n && 'object' == typeof n ? n[t[i]] : null));
          i++
        );
        return (
          null == n &&
            e &&
            (n = e._doGet(this.resolveParentPath(t), e.parentModel)),
          n
        )
      }),
      t
    )
  })()
Ar(Mh),
  (dh = Mh),
  (gh = ['__\0is_clz', Lr++].join('_')),
  (dh.prototype[gh] = !0),
  (dh.isInstance = function (t) {
    return !(!t || !t[gh])
  }),
  W(Mh, wh),
  W(Mh, Th),
  W(Mh, Fr),
  W(Mh, mh)
var Ch = Mh,
  kh = Math.round(10 * Math.random())
function Ih(t) {
  return [t || '', kh++].join('_')
}
function Dh(t, e) {
  return z(z({}, t, !0), e, !0)
}
var Ah = {},
  Ph = {},
  Oh =
    x.domSupported &&
    (
      document.documentElement.lang ||
      navigator.language ||
      navigator.browserLanguage
    )
      .toUpperCase()
      .indexOf('ZH') > -1
      ? 'ZH'
      : 'EN'
function Lh(t, e) {
  ;(t = t.toUpperCase()), (Ph[t] = new Ch(e)), (Ah[t] = e)
}
Lh('EN', {
  time: {
    month: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthAbbr: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayOfWeek: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayOfWeekAbbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  legend: { selector: { all: 'All', inverse: 'Inv' } },
  toolbox: {
    brush: {
      title: {
        rect: 'Box Select',
        polygon: 'Lasso Select',
        lineX: 'Horizontally Select',
        lineY: 'Vertically Select',
        keep: 'Keep Selections',
        clear: 'Clear Selections',
      },
    },
    dataView: { title: 'Data View', lang: ['Data View', 'Close', 'Refresh'] },
    dataZoom: { title: { zoom: 'Zoom', back: 'Zoom Reset' } },
    magicType: {
      title: {
        line: 'Switch to Line Chart',
        bar: 'Switch to Bar Chart',
        stack: 'Stack',
        tiled: 'Tile',
      },
    },
    restore: { title: 'Restore' },
    saveAsImage: {
      title: 'Save as Image',
      lang: ['Right Click to Save Image'],
    },
  },
  series: {
    typeNames: {
      pie: 'Pie chart',
      bar: 'Bar chart',
      line: 'Line chart',
      scatter: 'Scatter plot',
      effectScatter: 'Ripple scatter plot',
      radar: 'Radar chart',
      tree: 'Tree',
      treemap: 'Treemap',
      boxplot: 'Boxplot',
      candlestick: 'Candlestick',
      k: 'K line chart',
      heatmap: 'Heat map',
      map: 'Map',
      parallel: 'Parallel coordinate map',
      lines: 'Line graph',
      graph: 'Relationship graph',
      sankey: 'Sankey diagram',
      funnel: 'Funnel chart',
      gauge: 'Gauge',
      pictorialBar: 'Pictorial bar',
      themeRiver: 'Theme River Map',
      sunburst: 'Sunburst',
    },
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: 'This is a chart',
    },
    series: {
      single: {
        prefix: '',
        withName: ' with type {seriesType} named {seriesName}.',
        withoutName: ' with type {seriesType}.',
      },
      multiple: {
        prefix: '. It consists of {seriesCount} series count.',
        withName:
          ' The {seriesId} series is a {seriesType} representing {seriesName}.',
        withoutName: ' The {seriesId} series is a {seriesType}.',
        separator: { middle: '', end: '' },
      },
    },
    data: {
      allData: 'The data is as follows: ',
      partialData: 'The first {displayCnt} items are: ',
      withName: 'the data for {name} is {value}',
      withoutName: '{value}',
      separator: { middle: ', ', end: '. ' },
    },
  },
}),
  Lh('ZH', {
    time: {
      month: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
      monthAbbr: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      dayOfWeek: [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ],
      dayOfWeekAbbr: ['日', '一', '二', '三', '四', '五', '六'],
    },
    legend: { selector: { all: '全选', inverse: '反选' } },
    toolbox: {
      brush: {
        title: {
          rect: '矩形选择',
          polygon: '圈选',
          lineX: '横向选择',
          lineY: '纵向选择',
          keep: '保持选择',
          clear: '清除选择',
        },
      },
      dataView: { title: '数据视图', lang: ['数据视图', '关闭', '刷新'] },
      dataZoom: { title: { zoom: '区域缩放', back: '区域缩放还原' } },
      magicType: {
        title: {
          line: '切换为折线图',
          bar: '切换为柱状图',
          stack: '切换为堆叠',
          tiled: '切换为平铺',
        },
      },
      restore: { title: '还原' },
      saveAsImage: { title: '保存为图片', lang: ['右键另存为图片'] },
    },
    series: {
      typeNames: {
        pie: '饼图',
        bar: '柱状图',
        line: '折线图',
        scatter: '散点图',
        effectScatter: '涟漪散点图',
        radar: '雷达图',
        tree: '树图',
        treemap: '矩形树图',
        boxplot: '箱型图',
        candlestick: 'K线图',
        k: 'K线图',
        heatmap: '热力图',
        map: '地图',
        parallel: '平行坐标图',
        lines: '线图',
        graph: '关系图',
        sankey: '桑基图',
        funnel: '漏斗图',
        gauge: '仪表盘图',
        pictorialBar: '象形柱图',
        themeRiver: '主题河流图',
        sunburst: '旭日图',
      },
    },
    aria: {
      general: {
        withTitle: '这是一个关于“{title}”的图表。',
        withoutTitle: '这是一个图表，',
      },
      series: {
        single: {
          prefix: '',
          withName: '图表类型是{seriesType}，表示{seriesName}。',
          withoutName: '图表类型是{seriesType}。',
        },
        multiple: {
          prefix: '它由{seriesCount}个图表系列组成。',
          withName: '第{seriesId}个系列是一个表示{seriesName}的{seriesType}，',
          withoutName: '第{seriesId}个系列是一个{seriesType}，',
          separator: { middle: '；', end: '。' },
        },
      },
      data: {
        allData: '其数据是——',
        partialData: '其中，前{displayCnt}项是——',
        withName: '{name}的数据是{value}',
        withoutName: '{value}',
        separator: { middle: '，', end: '' },
      },
    },
  })
var Rh = {
    year: '{yyyy}',
    month: '{MMM}',
    day: '{d}',
    hour: '{HH}:{mm}',
    minute: '{HH}:{mm}',
    second: '{HH}:{mm}:{ss}',
    millisecond: '{HH}:{mm}:{ss} {SSS}',
    none: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}',
  },
  Bh = {
    year: '{yyyy}',
    month: '{yyyy}-{MM}',
    day: '{yyyy}-{MM}-{dd}',
    hour: '{yyyy}-{MM}-{dd} ' + Rh.hour,
    minute: '{yyyy}-{MM}-{dd} ' + Rh.minute,
    second: '{yyyy}-{MM}-{dd} ' + Rh.second,
    millisecond: Rh.none,
  },
  zh = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
  Eh = [
    'year',
    'half-year',
    'quarter',
    'month',
    'week',
    'half-week',
    'day',
    'half-day',
    'quarter-day',
    'hour',
    'minute',
    'second',
    'millisecond',
  ]
function Nh(t, e) {
  return '0000'.substr(0, e - (t += '').length) + t
}
function Fh(t) {
  switch (t) {
    case 'half-year':
    case 'quarter':
      return 'month'
    case 'week':
    case 'half-week':
      return 'day'
    case 'half-day':
    case 'quarter-day':
      return 'hour'
    default:
      return t
  }
}
function Hh(t) {
  return t === Fh(t)
}
function Vh(t, e, n, i) {
  var r = $i(t),
    o = r[Uh(n)](),
    a = r[Xh(n)]() + 1,
    s = Math.floor((a - 1) / 4) + 1,
    l = r[Yh(n)](),
    u = r['get' + (n ? 'UTC' : '') + 'Day'](),
    h = r[jh(n)](),
    c = ((h - 1) % 12) + 1,
    p = r[qh(n)](),
    f = r[Zh(n)](),
    d = r[Kh(n)](),
    g = (
      i instanceof Ch
        ? i
        : (function (t) {
            return Ph[t]
          })(i || Oh) || Ph.EN
    ).getModel('time'),
    y = g.get('month'),
    v = g.get('monthAbbr'),
    m = g.get('dayOfWeek'),
    _ = g.get('dayOfWeekAbbr')
  return (e || '')
    .replace(/{yyyy}/g, o + '')
    .replace(/{yy}/g, (o % 100) + '')
    .replace(/{Q}/g, s + '')
    .replace(/{MMMM}/g, y[a - 1])
    .replace(/{MMM}/g, v[a - 1])
    .replace(/{MM}/g, Nh(a, 2))
    .replace(/{M}/g, a + '')
    .replace(/{dd}/g, Nh(l, 2))
    .replace(/{d}/g, l + '')
    .replace(/{eeee}/g, m[u])
    .replace(/{ee}/g, _[u])
    .replace(/{e}/g, u + '')
    .replace(/{HH}/g, Nh(h, 2))
    .replace(/{H}/g, h + '')
    .replace(/{hh}/g, Nh(c + '', 2))
    .replace(/{h}/g, c + '')
    .replace(/{mm}/g, Nh(p, 2))
    .replace(/{m}/g, p + '')
    .replace(/{ss}/g, Nh(f, 2))
    .replace(/{s}/g, f + '')
    .replace(/{SSS}/g, Nh(d, 3))
    .replace(/{S}/g, d + '')
}
function Wh(t, e) {
  var n = $i(t),
    i = n[Xh(e)]() + 1,
    r = n[Yh(e)](),
    o = n[jh(e)](),
    a = n[qh(e)](),
    s = n[Zh(e)](),
    l = 0 === n[Kh(e)](),
    u = l && 0 === s,
    h = u && 0 === a,
    c = h && 0 === o,
    p = c && 1 === r
  return p && 1 === i
    ? 'year'
    : p
    ? 'month'
    : c
    ? 'day'
    : h
    ? 'hour'
    : u
    ? 'minute'
    : l
    ? 'second'
    : 'millisecond'
}
function Gh(t, e, n) {
  var i = 'number' == typeof t ? $i(t) : t
  switch ((e = e || Wh(t, n))) {
    case 'year':
      return i[Uh(n)]()
    case 'half-year':
      return i[Xh(n)]() >= 6 ? 1 : 0
    case 'quarter':
      return Math.floor((i[Xh(n)]() + 1) / 4)
    case 'month':
      return i[Xh(n)]()
    case 'day':
      return i[Yh(n)]()
    case 'half-day':
      return i[jh(n)]() / 24
    case 'hour':
      return i[jh(n)]()
    case 'minute':
      return i[qh(n)]()
    case 'second':
      return i[Zh(n)]()
    case 'millisecond':
      return i[Kh(n)]()
  }
}
function Uh(t) {
  return t ? 'getUTCFullYear' : 'getFullYear'
}
function Xh(t) {
  return t ? 'getUTCMonth' : 'getMonth'
}
function Yh(t) {
  return t ? 'getUTCDate' : 'getDate'
}
function jh(t) {
  return t ? 'getUTCHours' : 'getHours'
}
function qh(t) {
  return t ? 'getUTCMinutes' : 'getMinutes'
}
function Zh(t) {
  return t ? 'getUTCSeconds' : 'getSeconds'
}
function Kh(t) {
  return t ? 'getUTCMilliseconds' : 'getMilliseconds'
}
function $h(t) {
  return t ? 'setUTCFullYear' : 'setFullYear'
}
function Qh(t) {
  return t ? 'setUTCMonth' : 'setMonth'
}
function Jh(t) {
  return t ? 'setUTCDate' : 'setDate'
}
function tc(t) {
  return t ? 'setUTCHours' : 'setHours'
}
function ec(t) {
  return t ? 'setUTCMinutes' : 'setMinutes'
}
function nc(t) {
  return t ? 'setUTCSeconds' : 'setSeconds'
}
function ic(t) {
  return t ? 'setUTCMilliseconds' : 'setMilliseconds'
}
function rc(t) {
  if (!nr(t)) return tt(t) ? t : '-'
  var e = (t + '').split('.')
  return (
    e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') +
    (e.length > 1 ? '.' + e[1] : '')
  )
}
function oc(t, e) {
  return (
    (t = (t || '').toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase()
    })),
    e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)),
    t
  )
}
var ac = pt,
  sc = /([&<>"'])/g,
  lc = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
function uc(t) {
  return null == t
    ? ''
    : (t + '').replace(sc, function (t, e) {
        return lc[e]
      })
}
function hc(t, e, n) {
  function i(t) {
    return t && dt(t) ? t : '-'
  }
  function r(t) {
    return !(null == t || isNaN(t) || !isFinite(t))
  }
  var o = 'time' === e,
    a = t instanceof Date
  if (o || a) {
    var s = o ? $i(t) : t
    if (!isNaN(+s)) return Vh(s, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}', n)
    if (a) return '-'
  }
  if ('ordinal' === e) return et(t) ? i(t) : nt(t) && r(t) ? t + '' : '-'
  var l = er(t)
  return r(l) ? rc(l) : et(t) ? i(t) : '-'
}
var cc = ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  pc = function (t, e) {
    return '{' + t + (null == e ? '' : e) + '}'
  }
function fc(t, e, n) {
  Q(e) || (e = [e])
  var i = e.length
  if (!i) return ''
  for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
    var a = cc[o]
    t = t.replace(pc(a), pc(a, 0))
  }
  for (var s = 0; s < i; s++)
    for (var l = 0; l < r.length; l++) {
      var u = e[s][r[l]]
      t = t.replace(pc(cc[l], s), n ? uc(u) : u)
    }
  return t
}
function dc(t, e) {
  return (
    (e = e || 'transparent'),
    tt(t) ? t : (it(t) && t.colorStops && (t.colorStops[0] || {}).color) || e
  )
}
function gc(t, e) {
  if ('_blank' === e || 'blank' === e) {
    var n = window.open()
    ;(n.opener = null), (n.location.href = t)
  } else window.open(t, e)
}
var yc = U,
  vc = ['left', 'right', 'top', 'bottom', 'width', 'height'],
  mc = [
    ['width', 'left', 'right'],
    ['height', 'top', 'bottom'],
  ]
function _c(t, e, n, i, r) {
  var o = 0,
    a = 0
  null == i && (i = 1 / 0), null == r && (r = 1 / 0)
  var s = 0
  e.eachChild(function (l, u) {
    var h,
      c,
      p = l.getBoundingRect(),
      f = e.childAt(u + 1),
      d = f && f.getBoundingRect()
    if ('horizontal' === t) {
      var g = p.width + (d ? -d.x + p.x : 0)
      ;(h = o + g) > i || l.newline
        ? ((o = 0), (h = g), (a += s + n), (s = p.height))
        : (s = Math.max(s, p.height))
    } else {
      var y = p.height + (d ? -d.y + p.y : 0)
      ;(c = a + y) > r || l.newline
        ? ((o += s + n), (a = 0), (c = y), (s = p.width))
        : (s = Math.max(s, p.width))
    }
    l.newline ||
      ((l.x = o),
      (l.y = a),
      l.markRedraw(),
      'horizontal' === t ? (o = h + n) : (a = c + n))
  })
}
var xc = _c
function wc(t, e, n) {
  var i = e.width,
    r = e.height,
    o = Vi(t.left, i),
    a = Vi(t.top, r),
    s = Vi(t.right, i),
    l = Vi(t.bottom, r)
  return (
    (isNaN(o) || isNaN(parseFloat(t.left))) && (o = 0),
    (isNaN(s) || isNaN(parseFloat(t.right))) && (s = i),
    (isNaN(a) || isNaN(parseFloat(t.top))) && (a = 0),
    (isNaN(l) || isNaN(parseFloat(t.bottom))) && (l = r),
    (n = ac(n || 0)),
    {
      width: Math.max(s - o - n[1] - n[3], 0),
      height: Math.max(l - a - n[0] - n[2], 0),
    }
  )
}
function bc(t, e, n) {
  n = ac(n || 0)
  var i = e.width,
    r = e.height,
    o = Vi(t.left, i),
    a = Vi(t.top, r),
    s = Vi(t.right, i),
    l = Vi(t.bottom, r),
    u = Vi(t.width, i),
    h = Vi(t.height, r),
    c = n[2] + n[0],
    p = n[1] + n[3],
    f = t.aspect
  switch (
    (isNaN(u) && (u = i - s - p - o),
    isNaN(h) && (h = r - l - c - a),
    null != f &&
      (isNaN(u) && isNaN(h) && (f > i / r ? (u = 0.8 * i) : (h = 0.8 * r)),
      isNaN(u) && (u = f * h),
      isNaN(h) && (h = u / f)),
    isNaN(o) && (o = i - s - u - p),
    isNaN(a) && (a = r - l - h - c),
    t.left || t.right)
  ) {
    case 'center':
      o = i / 2 - u / 2 - n[3]
      break
    case 'right':
      o = i - u - p
  }
  switch (t.top || t.bottom) {
    case 'middle':
    case 'center':
      a = r / 2 - h / 2 - n[0]
      break
    case 'bottom':
      a = r - h - c
  }
  ;(o = o || 0),
    (a = a || 0),
    isNaN(u) && (u = i - p - o - (s || 0)),
    isNaN(h) && (h = r - c - a - (l || 0))
  var d = new pi(o + n[3], a + n[0], u, h)
  return (d.margin = n), d
}
function Sc(t, e, n, i, r) {
  var o = !r || !r.hv || r.hv[0],
    a = !r || !r.hv || r.hv[1],
    s = (r && r.boundingMode) || 'all'
  if (o || a) {
    var l
    if ('raw' === s)
      l =
        'group' === t.type
          ? new pi(0, 0, +e.width || 0, +e.height || 0)
          : t.getBoundingRect()
    else if (((l = t.getBoundingRect()), t.needLocalTransform())) {
      var u = t.getLocalTransform()
      ;(l = l.clone()).applyTransform(u)
    }
    var h = bc(F({ width: l.width, height: l.height }, e), n, i),
      c = o ? h.x - l.x : 0,
      p = a ? h.y - l.y : 0
    'raw' === s ? ((t.x = c), (t.y = p)) : ((t.x += c), (t.y += p)),
      t.markRedraw()
  }
}
function Tc(t) {
  var e = t.layoutMode || t.constructor.layoutMode
  return it(e) ? e : e ? { type: e } : null
}
function Mc(t, e, n) {
  var i = n && n.ignoreSize
  !Q(i) && (i = [i, i])
  var r = a(mc[0], 0),
    o = a(mc[1], 1)
  function a(n, r) {
    var o = {},
      a = 0,
      u = {},
      h = 0
    if (
      (yc(n, function (e) {
        u[e] = t[e]
      }),
      yc(n, function (t) {
        s(e, t) && (o[t] = u[t] = e[t]), l(o, t) && a++, l(u, t) && h++
      }),
      i[r])
    )
      return l(e, n[1]) ? (u[n[2]] = null) : l(e, n[2]) && (u[n[1]] = null), u
    if (2 !== h && a) {
      if (a >= 2) return o
      for (var c = 0; c < n.length; c++) {
        var p = n[c]
        if (!s(o, p) && s(t, p)) {
          o[p] = t[p]
          break
        }
      }
      return o
    }
    return u
  }
  function s(t, e) {
    return t.hasOwnProperty(e)
  }
  function l(t, e) {
    return null != t[e] && 'auto' !== t[e]
  }
  function u(t, e, n) {
    yc(t, function (t) {
      e[t] = n[t]
    })
  }
  u(mc[0], t, r), u(mc[1], t, o)
}
function Cc(t) {
  return (function (t, e) {
    return (
      e &&
        t &&
        yc(vc, function (n) {
          e.hasOwnProperty(n) && (t[n] = e[n])
        }),
      t
    )
  })({}, t)
}
$(_c, 'vertical'), $(_c, 'horizontal')
var kc = _r(),
  Ic = (function (t) {
    function e(e, n, i) {
      var r = t.call(this, e, n, i) || this
      return (r.uid = Ih('ec_cpt_model')), r
    }
    var n
    return (
      g(e, t),
      (e.prototype.init = function (t, e, n) {
        this.mergeDefaultAndTheme(t, n)
      }),
      (e.prototype.mergeDefaultAndTheme = function (t, e) {
        var n = Tc(this),
          i = n ? Cc(t) : {}
        z(t, e.getTheme().get(this.mainType)),
          z(t, this.getDefaultOption()),
          n && Mc(t, i, n)
      }),
      (e.prototype.mergeOption = function (t, e) {
        z(this.option, t, !0)
        var n = Tc(this)
        n && Mc(this.option, t, n)
      }),
      (e.prototype.optionUpdated = function (t, e) {}),
      (e.prototype.getDefaultOption = function () {
        var t = this.constructor
        if (
          !(function (t) {
            return !(!t || !t.___EC__EXTENDED_CLASS___)
          })(t)
        )
          return t.defaultOption
        var e = kc(this)
        if (!e.defaultOption) {
          for (var n = [], i = t; i; ) {
            var r = i.prototype.defaultOption
            r && n.push(r), (i = i.superClass)
          }
          for (var o = {}, a = n.length - 1; a >= 0; a--) o = z(o, n[a], !0)
          e.defaultOption = o
        }
        return e.defaultOption
      }),
      (e.prototype.getReferringComponents = function (t, e) {
        var n = t + 'Index',
          i = t + 'Id'
        return Tr(
          this.ecModel,
          t,
          { index: this.get(n, !0), id: this.get(i, !0) },
          e
        )
      }),
      (e.prototype.getBoxLayoutParams = function () {
        var t = this
        return {
          left: t.get('left'),
          top: t.get('top'),
          right: t.get('right'),
          bottom: t.get('bottom'),
          width: t.get('width'),
          height: t.get('height'),
        }
      }),
      (e.protoInitialize =
        (((n = e.prototype).type = 'component'),
        (n.id = ''),
        (n.name = ''),
        (n.mainType = ''),
        (n.subType = ''),
        void (n.componentIndex = 0))),
      e
    )
  })(Ch)
Or(Ic, Ch),
  zr(Ic),
  (function (t) {
    var e = {}
    ;(t.registerSubTypeDefaulter = function (t, n) {
      var i = Dr(t)
      e[i.main] = n
    }),
      (t.determineSubType = function (n, i) {
        var r = i.type
        if (!r) {
          var o = Dr(n).main
          t.hasSubTypes(n) && e[o] && (r = e[o](i))
        }
        return r
      })
  })(Ic),
  (function (t, e) {
    function n(t, e) {
      return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e]
    }
    t.topologicalTravel = function (t, i, r, o) {
      if (t.length) {
        var a = (function (t) {
            var i = {},
              r = []
            return (
              U(t, function (o) {
                var a = n(i, o),
                  s = (function (t, e) {
                    var n = []
                    return (
                      U(t, function (t) {
                        V(e, t) >= 0 && n.push(t)
                      }),
                      n
                    )
                  })((a.originalDeps = e(o)), t)
                ;(a.entryCount = s.length),
                  0 === a.entryCount && r.push(o),
                  U(s, function (t) {
                    V(a.predecessor, t) < 0 && a.predecessor.push(t)
                    var e = n(i, t)
                    V(e.successor, t) < 0 && e.successor.push(o)
                  })
              }),
              { graph: i, noEntryList: r }
            )
          })(i),
          s = a.graph,
          l = a.noEntryList,
          u = {}
        for (
          U(t, function (t) {
            u[t] = !0
          });
          l.length;

        ) {
          var h = l.pop(),
            c = s[h],
            p = !!u[h]
          p && (r.call(o, h, c.originalDeps.slice()), delete u[h]),
            U(c.successor, p ? d : f)
        }
        U(u, function () {
          throw new Error('')
        })
      }
      function f(t) {
        s[t].entryCount--, 0 === s[t].entryCount && l.push(t)
      }
      function d(t) {
        ;(u[t] = !0), f(t)
      }
    }
  })(Ic, function (t) {
    var e = []
    U(Ic.getClassesByMainType(t), function (t) {
      e = e.concat(t.dependencies || t.prototype.dependencies || [])
    }),
      (e = X(e, function (t) {
        return Dr(t).main
      })),
      'dataset' !== t && V(e, 'dataset') <= 0 && e.unshift('dataset')
    return e
  })
var Dc = Ic,
  Ac = ''
'undefined' != typeof navigator && (Ac = navigator.platform || '')
var Pc = 'rgba(0, 0, 0, 0.2)',
  Oc = {
    darkMode: 'auto',
    colorBy: 'series',
    color: [
      '#5470c6',
      '#91cc75',
      '#fac858',
      '#ee6666',
      '#73c0de',
      '#3ba272',
      '#fc8452',
      '#9a60b4',
      '#ea7ccc',
    ],
    gradientColor: ['#f6efa6', '#d88273', '#bf444c'],
    aria: {
      decal: {
        decals: [
          {
            color: Pc,
            dashArrayX: [1, 0],
            dashArrayY: [2, 5],
            symbolSize: 1,
            rotation: Math.PI / 6,
          },
          {
            color: Pc,
            symbol: 'circle',
            dashArrayX: [
              [8, 8],
              [0, 8, 8, 0],
            ],
            dashArrayY: [6, 0],
            symbolSize: 0.8,
          },
          {
            color: Pc,
            dashArrayX: [1, 0],
            dashArrayY: [4, 3],
            rotation: -Math.PI / 4,
          },
          {
            color: Pc,
            dashArrayX: [
              [6, 6],
              [0, 6, 6, 0],
            ],
            dashArrayY: [6, 0],
          },
          {
            color: Pc,
            dashArrayX: [
              [1, 0],
              [1, 6],
            ],
            dashArrayY: [1, 0, 6, 0],
            rotation: Math.PI / 4,
          },
          {
            color: Pc,
            symbol: 'triangle',
            dashArrayX: [
              [9, 9],
              [0, 9, 9, 0],
            ],
            dashArrayY: [7, 2],
            symbolSize: 0.75,
          },
        ],
      },
    },
    textStyle: {
      fontFamily: Ac.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    blendMode: null,
    stateAnimation: { duration: 300, easing: 'cubicOut' },
    animation: 'auto',
    animationDuration: 1e3,
    animationDurationUpdate: 500,
    animationEasing: 'cubicInOut',
    animationEasingUpdate: 'cubicInOut',
    animationThreshold: 2e3,
    progressiveThreshold: 3e3,
    progressive: 400,
    hoverLayerThreshold: 3e3,
    useUTC: !1,
  },
  Lc = mt([
    'tooltip',
    'label',
    'itemName',
    'itemId',
    'itemGroupId',
    'seriesName',
  ]),
  Rc = 'original',
  Bc = 'arrayRows',
  zc = 'typedArray',
  Ec = { Must: 1, Might: 2, Not: 3 },
  Nc = _r()
function Fc(t, e, n) {
  var i = {},
    r = Vc(e)
  if (!r || !t) return i
  var o,
    a,
    s = [],
    l = [],
    u = e.ecModel,
    h = Nc(u).datasetMap,
    c = r.uid + '_' + n.seriesLayoutBy
  U((t = t.slice()), function (e, n) {
    var r = it(e) ? e : (t[n] = { name: e })
    'ordinal' === r.type && null == o && ((o = n), (a = d(r))), (i[r.name] = [])
  })
  var p = h.get(c) || h.set(c, { categoryWayDim: a, valueWayDim: 0 })
  function f(t, e, n) {
    for (var i = 0; i < n; i++) t.push(e + i)
  }
  function d(t) {
    var e = t.dimsDef
    return e ? e.length : 1
  }
  return (
    U(t, function (t, e) {
      var n = t.name,
        r = d(t)
      if (null == o) {
        var a = p.valueWayDim
        f(i[n], a, r), f(l, a, r), (p.valueWayDim += r)
      } else if (o === e) f(i[n], 0, r), f(s, 0, r)
      else {
        a = p.categoryWayDim
        f(i[n], a, r), f(l, a, r), (p.categoryWayDim += r)
      }
    }),
    s.length && (i.itemName = s),
    l.length && (i.seriesName = l),
    i
  )
}
function Hc(t, e, n) {
  var i = {}
  if (!Vc(t)) return i
  var r,
    o = e.sourceFormat,
    a = e.dimensionsDefine
  ;('objectRows' !== o && 'keyedColumns' !== o) ||
    U(a, function (t, e) {
      'name' === (it(t) ? t.name : t) && (r = e)
    })
  var s = (function () {
    for (var t = {}, i = {}, s = [], l = 0, u = Math.min(5, n); l < u; l++) {
      var h = Gc(e.data, o, e.seriesLayoutBy, a, e.startIndex, l)
      s.push(h)
      var c = h === Ec.Not
      if (
        (c && null == t.v && l !== r && (t.v = l),
        (null == t.n || t.n === t.v || (!c && s[t.n] === Ec.Not)) && (t.n = l),
        p(t) && s[t.n] !== Ec.Not)
      )
        return t
      c ||
        (h === Ec.Might && null == i.v && l !== r && (i.v = l),
        (null != i.n && i.n !== i.v) || (i.n = l))
    }
    function p(t) {
      return null != t.v && null != t.n
    }
    return p(t) ? t : p(i) ? i : null
  })()
  if (s) {
    i.value = [s.v]
    var l = null != r ? r : s.n
    ;(i.itemName = [l]), (i.seriesName = [l])
  }
  return i
}
function Vc(t) {
  if (!t.get('data', !0))
    return Tr(
      t.ecModel,
      'dataset',
      { index: t.get('datasetIndex', !0), id: t.get('datasetId', !0) },
      Sr
    ).models[0]
}
function Wc(t, e) {
  return Gc(
    t.data,
    t.sourceFormat,
    t.seriesLayoutBy,
    t.dimensionsDefine,
    t.startIndex,
    e
  )
}
function Gc(t, e, n, i, r, o) {
  var a, s, l
  if (ot(t)) return Ec.Not
  if (i) {
    var u = i[o]
    it(u) ? ((s = u.name), (l = u.type)) : tt(u) && (s = u)
  }
  if (null != l) return 'ordinal' === l ? Ec.Must : Ec.Not
  if ('arrayRows' === e) {
    var h = t
    if ('row' === n) {
      for (var c = h[o], p = 0; p < (c || []).length && p < 5; p++)
        if (null != (a = m(c[r + p]))) return a
    } else
      for (p = 0; p < h.length && p < 5; p++) {
        var f = h[r + p]
        if (f && null != (a = m(f[o]))) return a
      }
  } else if ('objectRows' === e) {
    var d = t
    if (!s) return Ec.Not
    for (p = 0; p < d.length && p < 5; p++) {
      if ((y = d[p]) && null != (a = m(y[s]))) return a
    }
  } else if ('keyedColumns' === e) {
    if (!s) return Ec.Not
    if (!(c = t[s]) || ot(c)) return Ec.Not
    for (p = 0; p < c.length && p < 5; p++) if (null != (a = m(c[p]))) return a
  } else if ('original' === e) {
    var g = t
    for (p = 0; p < g.length && p < 5; p++) {
      var y,
        v = hr((y = g[p]))
      if (!Q(v)) return Ec.Not
      if (null != (a = m(v[o]))) return a
    }
  }
  function m(t) {
    var e = tt(t)
    return null != t && isFinite(t) && '' !== t
      ? e
        ? Ec.Might
        : Ec.Not
      : e && '-' !== t
      ? Ec.Must
      : void 0
  }
  return Ec.Not
}
var Uc = mt()
var Xc,
  Yc,
  jc,
  qc = _r(),
  Zc = _r(),
  Kc = (function () {
    function t() {}
    return (
      (t.prototype.getColorFromPalette = function (t, e, n) {
        var i = sr(this.get('color', !0)),
          r = this.get('colorLayer', !0)
        return Qc(this, qc, i, r, t, e, n)
      }),
      (t.prototype.clearColorPalette = function () {
        var t, e
        ;((e = qc)((t = this)).paletteIdx = 0), (e(t).paletteNameMap = {})
      }),
      t
    )
  })()
function $c(t, e, n, i) {
  var r = sr(t.get(['aria', 'decal', 'decals']))
  return Qc(t, Zc, r, null, e, n, i)
}
function Qc(t, e, n, i, r, o, a) {
  var s = e((o = o || t)),
    l = s.paletteIdx || 0,
    u = (s.paletteNameMap = s.paletteNameMap || {})
  if (u.hasOwnProperty(r)) return u[r]
  var h =
    null != a && i
      ? (function (t, e) {
          for (var n = t.length, i = 0; i < n; i++)
            if (t[i].length > e) return t[i]
          return t[n - 1]
        })(i, a)
      : n
  if ((h = h || n) && h.length) {
    var c = h[l]
    return r && (u[r] = c), (s.paletteIdx = (l + 1) % h.length), c
  }
}
var Jc = (function (t) {
  function e() {
    return (null !== t && t.apply(this, arguments)) || this
  }
  return (
    g(e, t),
    (e.prototype.init = function (t, e, n, i, r, o) {
      ;(i = i || {}),
        (this.option = null),
        (this._theme = new Ch(i)),
        (this._locale = new Ch(r)),
        (this._optionManager = o)
    }),
    (e.prototype.setOption = function (t, e, n) {
      var i = np(e)
      this._optionManager.setOption(t, n, i), this._resetOption(null, i)
    }),
    (e.prototype.resetOption = function (t, e) {
      return this._resetOption(t, np(e))
    }),
    (e.prototype._resetOption = function (t, e) {
      var n = !1,
        i = this._optionManager
      if (!t || 'recreate' === t) {
        var r = i.mountOption('recreate' === t)
        this.option && 'recreate' !== t
          ? (this.restoreData(), this._mergeOption(r, e))
          : jc(this, r),
          (n = !0)
      }
      if (
        (('timeline' !== t && 'media' !== t) || this.restoreData(),
        !t || 'recreate' === t || 'timeline' === t)
      ) {
        var o = i.getTimelineOption(this)
        o && ((n = !0), this._mergeOption(o, e))
      }
      if (!t || 'recreate' === t || 'media' === t) {
        var a = i.getMediaOption(this)
        a.length &&
          U(
            a,
            function (t) {
              ;(n = !0), this._mergeOption(t, e)
            },
            this
          )
      }
      return n
    }),
    (e.prototype.mergeOption = function (t) {
      this._mergeOption(t, null)
    }),
    (e.prototype._mergeOption = function (t, e) {
      var n = this.option,
        i = this._componentsMap,
        r = this._componentsCount,
        o = [],
        a = mt(),
        s = e && e.replaceMergeMainTypeMap
      ;(Nc(this).datasetMap = mt()),
        U(t, function (t, e) {
          null != t &&
            (Dc.hasClass(e)
              ? e && (o.push(e), a.set(e, !0))
              : (n[e] = null == n[e] ? B(t) : z(n[e], t, !0)))
        }),
        s &&
          s.each(function (t, e) {
            Dc.hasClass(e) && !a.get(e) && (o.push(e), a.set(e, !0))
          }),
        Dc.topologicalTravel(
          o,
          Dc.getAllClassMainTypes(),
          function (e) {
            var o = (function (t, e, n) {
                var i = Uc.get(e)
                if (!i) return n
                var r = i(t)
                return r ? n.concat(r) : n
              })(this, e, sr(t[e])),
              a = i.get(e),
              l = a
                ? s && s.get(e)
                  ? 'replaceMerge'
                  : 'normalMerge'
                : 'replaceAll',
              u = pr(a, o, l)
            ;(function (t, e, n) {
              U(t, function (t) {
                var i = t.newOption
                it(i) &&
                  ((t.keyInfo.mainType = e),
                  (t.keyInfo.subType = (function (t, e, n, i) {
                    return e.type
                      ? e.type
                      : n
                      ? n.subType
                      : i.determineSubType(t, e)
                  })(e, i, t.existing, n)))
              })
            })(u, e, Dc),
              (n[e] = null),
              i.set(e, null),
              r.set(e, 0)
            var h = [],
              c = [],
              p = 0
            U(
              u,
              function (t, n) {
                var i = t.existing,
                  r = t.newOption
                if (r) {
                  var o = 'series' === e,
                    a = Dc.getClass(e, t.keyInfo.subType, !o)
                  if (!a) return
                  if (i && i.constructor === a)
                    (i.name = t.keyInfo.name),
                      i.mergeOption(r, this),
                      i.optionUpdated(r, !1)
                  else {
                    var s = N({ componentIndex: n }, t.keyInfo)
                    N((i = new a(r, this, this, s)), s),
                      t.brandNew && (i.__requireNewView = !0),
                      i.init(r, this, this),
                      i.optionUpdated(null, !0)
                  }
                } else i && (i.mergeOption({}, this), i.optionUpdated({}, !1))
                i
                  ? (h.push(i.option), c.push(i), p++)
                  : (h.push(void 0), c.push(void 0))
              },
              this
            ),
              (n[e] = h),
              i.set(e, c),
              r.set(e, p),
              'series' === e && Xc(this)
          },
          this
        ),
        this._seriesIndices || Xc(this)
    }),
    (e.prototype.getOption = function () {
      var t = B(this.option)
      return (
        U(t, function (e, n) {
          if (Dc.hasClass(n)) {
            for (var i = sr(e), r = i.length, o = !1, a = r - 1; a >= 0; a--)
              i[a] && !vr(i[a]) ? (o = !0) : ((i[a] = null), !o && r--)
            ;(i.length = r), (t[n] = i)
          }
        }),
        delete t['\0_ec_inner'],
        t
      )
    }),
    (e.prototype.getTheme = function () {
      return this._theme
    }),
    (e.prototype.getLocaleModel = function () {
      return this._locale
    }),
    (e.prototype.setUpdatePayload = function (t) {
      this._payload = t
    }),
    (e.prototype.getUpdatePayload = function () {
      return this._payload
    }),
    (e.prototype.getComponent = function (t, e) {
      var n = this._componentsMap.get(t)
      if (n) {
        var i = n[e || 0]
        if (i) return i
        if (null == e) for (var r = 0; r < n.length; r++) if (n[r]) return n[r]
      }
    }),
    (e.prototype.queryComponents = function (t) {
      var e = t.mainType
      if (!e) return []
      var n,
        i = t.index,
        r = t.id,
        o = t.name,
        a = this._componentsMap.get(e)
      return a && a.length
        ? (null != i
            ? ((n = []),
              U(sr(i), function (t) {
                a[t] && n.push(a[t])
              }))
            : (n =
                null != r
                  ? tp('id', r, a)
                  : null != o
                  ? tp('name', o, a)
                  : j(a, function (t) {
                      return !!t
                    })),
          ep(n, t))
        : []
    }),
    (e.prototype.findComponents = function (t) {
      var e,
        n,
        i,
        r,
        o,
        a = t.query,
        s = t.mainType,
        l =
          ((n = s + 'Index'),
          (i = s + 'Id'),
          (r = s + 'Name'),
          !(e = a) || (null == e[n] && null == e[i] && null == e[r])
            ? null
            : { mainType: s, index: e[n], id: e[i], name: e[r] }),
        u = l
          ? this.queryComponents(l)
          : j(this._componentsMap.get(s), function (t) {
              return !!t
            })
      return (o = ep(u, t)), t.filter ? j(o, t.filter) : o
    }),
    (e.prototype.eachComponent = function (t, e, n) {
      var i = this._componentsMap
      if (J(t)) {
        var r = e,
          o = t
        i.each(function (t, e) {
          for (var n = 0; t && n < t.length; n++) {
            var i = t[n]
            i && o.call(r, e, i, i.componentIndex)
          }
        })
      } else
        for (
          var a = tt(t) ? i.get(t) : it(t) ? this.findComponents(t) : null,
            s = 0;
          a && s < a.length;
          s++
        ) {
          var l = a[s]
          l && e.call(n, l, l.componentIndex)
        }
    }),
    (e.prototype.getSeriesByName = function (t) {
      var e = gr(t, null)
      return j(this._componentsMap.get('series'), function (t) {
        return !!t && null != e && t.name === e
      })
    }),
    (e.prototype.getSeriesByIndex = function (t) {
      return this._componentsMap.get('series')[t]
    }),
    (e.prototype.getSeriesByType = function (t) {
      return j(this._componentsMap.get('series'), function (e) {
        return !!e && e.subType === t
      })
    }),
    (e.prototype.getSeries = function () {
      return j(this._componentsMap.get('series'), function (t) {
        return !!t
      })
    }),
    (e.prototype.getSeriesCount = function () {
      return this._componentsCount.get('series')
    }),
    (e.prototype.eachSeries = function (t, e) {
      Yc(this),
        U(
          this._seriesIndices,
          function (n) {
            var i = this._componentsMap.get('series')[n]
            t.call(e, i, n)
          },
          this
        )
    }),
    (e.prototype.eachRawSeries = function (t, e) {
      U(this._componentsMap.get('series'), function (n) {
        n && t.call(e, n, n.componentIndex)
      })
    }),
    (e.prototype.eachSeriesByType = function (t, e, n) {
      Yc(this),
        U(
          this._seriesIndices,
          function (i) {
            var r = this._componentsMap.get('series')[i]
            r.subType === t && e.call(n, r, i)
          },
          this
        )
    }),
    (e.prototype.eachRawSeriesByType = function (t, e, n) {
      return U(this.getSeriesByType(t), e, n)
    }),
    (e.prototype.isSeriesFiltered = function (t) {
      return Yc(this), null == this._seriesIndicesMap.get(t.componentIndex)
    }),
    (e.prototype.getCurrentSeriesIndices = function () {
      return (this._seriesIndices || []).slice()
    }),
    (e.prototype.filterSeries = function (t, e) {
      Yc(this)
      var n = []
      U(
        this._seriesIndices,
        function (i) {
          var r = this._componentsMap.get('series')[i]
          t.call(e, r, i) && n.push(i)
        },
        this
      ),
        (this._seriesIndices = n),
        (this._seriesIndicesMap = mt(n))
    }),
    (e.prototype.restoreData = function (t) {
      Xc(this)
      var e = this._componentsMap,
        n = []
      e.each(function (t, e) {
        Dc.hasClass(e) && n.push(e)
      }),
        Dc.topologicalTravel(n, Dc.getAllClassMainTypes(), function (n) {
          U(e.get(n), function (e) {
            !e ||
              ('series' === n &&
                (function (t, e) {
                  if (e) {
                    var n = e.seriesIndex,
                      i = e.seriesId,
                      r = e.seriesName
                    return (
                      (null != n && t.componentIndex !== n) ||
                      (null != i && t.id !== i) ||
                      (null != r && t.name !== r)
                    )
                  }
                })(e, t)) ||
              e.restoreData()
          })
        })
    }),
    (e.internalField =
      ((Xc = function (t) {
        var e = (t._seriesIndices = [])
        U(t._componentsMap.get('series'), function (t) {
          t && e.push(t.componentIndex)
        }),
          (t._seriesIndicesMap = mt(e))
      }),
      (Yc = function (t) {}),
      void (jc = function (t, e) {
        ;(t.option = {}),
          (t.option['\0_ec_inner'] = 1),
          (t._componentsMap = mt({ series: [] })),
          (t._componentsCount = mt())
        var n,
          i,
          r,
          o = e.aria
        it(o) && null == o.enabled && (o.enabled = !0),
          (n = e),
          (i = t._theme.option),
          (r = n.color && !n.colorLayer),
          U(i, function (t, e) {
            ;('colorLayer' === e && r) ||
              Dc.hasClass(e) ||
              ('object' == typeof t
                ? (n[e] = n[e] ? z(n[e], t, !1) : B(t))
                : null == n[e] && (n[e] = t))
          }),
          z(e, Oc, !1),
          t._mergeOption(e, null)
      }))),
    e
  )
})(Ch)
function tp(t, e, n) {
  if (Q(e)) {
    var i = mt()
    return (
      U(e, function (t) {
        null != t && null != gr(t, null) && i.set(t, !0)
      }),
      j(n, function (e) {
        return e && i.get(e[t])
      })
    )
  }
  var r = gr(e, null)
  return j(n, function (e) {
    return e && null != r && e[t] === r
  })
}
function ep(t, e) {
  return e.hasOwnProperty('subType')
    ? j(t, function (t) {
        return t && t.subType === e.subType
      })
    : t
}
function np(t) {
  var e = mt()
  return (
    t &&
      U(sr(t.replaceMerge), function (t) {
        e.set(t, !0)
      }),
    { replaceMergeMainTypeMap: e }
  )
}
W(Jc, Kc)
var ip = Jc,
  rp = [
    'getDom',
    'getZr',
    'getWidth',
    'getHeight',
    'getDevicePixelRatio',
    'dispatchAction',
    'isDisposed',
    'on',
    'off',
    'getDataURL',
    'getConnectedDataURL',
    'getOption',
    'getId',
    'updateLabelLayout',
  ],
  op = function (t) {
    U(
      rp,
      function (e) {
        this[e] = K(t[e], t)
      },
      this
    )
  },
  ap = {},
  sp = (function () {
    function t() {
      this._coordinateSystems = []
    }
    return (
      (t.prototype.create = function (t, e) {
        var n = []
        U(ap, function (i, r) {
          var o = i.create(t, e)
          n = n.concat(o || [])
        }),
          (this._coordinateSystems = n)
      }),
      (t.prototype.update = function (t, e) {
        U(this._coordinateSystems, function (n) {
          n.update && n.update(t, e)
        })
      }),
      (t.prototype.getCoordinateSystems = function () {
        return this._coordinateSystems.slice()
      }),
      (t.register = function (t, e) {
        ap[t] = e
      }),
      (t.get = function (t) {
        return ap[t]
      }),
      t
    )
  })(),
  lp = /^(min|max)?(.+)$/
function up(t, e, n) {
  var i = { width: e, height: n, aspectratio: e / n },
    r = !0
  return (
    U(t, function (t, e) {
      var n = e.match(lp)
      if (n && n[1] && n[2]) {
        var o = n[1],
          a = n[2].toLowerCase()
        ;(function (t, e, n) {
          return 'min' === n ? t >= e : 'max' === n ? t <= e : t === e
        })(i[a], t, o) || (r = !1)
      }
    }),
    r
  )
}
var hp = (function () {
    function t(t) {
      ;(this._timelineOptions = []),
        (this._mediaList = []),
        (this._currentMediaIndices = []),
        (this._api = t)
    }
    return (
      (t.prototype.setOption = function (t, e, n) {
        t &&
          (U(sr(t.series), function (t) {
            t && t.data && ot(t.data) && gt(t.data)
          }),
          U(sr(t.dataset), function (t) {
            t && t.source && ot(t.source) && gt(t.source)
          })),
          (t = B(t))
        var i = this._optionBackup,
          r = (function (t, e, n) {
            var i,
              r,
              o = [],
              a = t.baseOption,
              s = t.timeline,
              l = t.options,
              u = t.media,
              h = !!t.media,
              c = !!(l || s || (a && a.timeline))
            a
              ? (r = a).timeline || (r.timeline = s)
              : ((c || h) && (t.options = t.media = null), (r = t))
            h &&
              Q(u) &&
              U(u, function (t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t))
              })
            function p(t) {
              U(e, function (e) {
                e(t, n)
              })
            }
            return (
              p(r),
              U(l, function (t) {
                return p(t)
              }),
              U(o, function (t) {
                return p(t.option)
              }),
              {
                baseOption: r,
                timelineOptions: l || [],
                mediaDefault: i,
                mediaList: o,
              }
            )
          })(t, e, !i)
        ;(this._newBaseOption = r.baseOption),
          i
            ? (r.timelineOptions.length &&
                (i.timelineOptions = r.timelineOptions),
              r.mediaList.length && (i.mediaList = r.mediaList),
              r.mediaDefault && (i.mediaDefault = r.mediaDefault))
            : (this._optionBackup = r)
      }),
      (t.prototype.mountOption = function (t) {
        var e = this._optionBackup
        return (
          (this._timelineOptions = e.timelineOptions),
          (this._mediaList = e.mediaList),
          (this._mediaDefault = e.mediaDefault),
          (this._currentMediaIndices = []),
          B(t ? e.baseOption : this._newBaseOption)
        )
      }),
      (t.prototype.getTimelineOption = function (t) {
        var e,
          n = this._timelineOptions
        if (n.length) {
          var i = t.getComponent('timeline')
          i && (e = B(n[i.getCurrentIndex()]))
        }
        return e
      }),
      (t.prototype.getMediaOption = function (t) {
        var e,
          n,
          i = this._api.getWidth(),
          r = this._api.getHeight(),
          o = this._mediaList,
          a = this._mediaDefault,
          s = [],
          l = []
        if (!o.length && !a) return l
        for (var u = 0, h = o.length; u < h; u++)
          up(o[u].query, i, r) && s.push(u)
        return (
          !s.length && a && (s = [-1]),
          s.length &&
            ((e = s),
            (n = this._currentMediaIndices),
            e.join(',') !== n.join(',')) &&
            (l = X(s, function (t) {
              return B(-1 === t ? a.option : o[t].option)
            })),
          (this._currentMediaIndices = s),
          l
        )
      }),
      t
    )
  })(),
  cp = U,
  pp = it,
  fp = [
    'areaStyle',
    'lineStyle',
    'nodeStyle',
    'linkStyle',
    'chordStyle',
    'label',
    'labelLine',
  ]
function dp(t) {
  var e = t && t.itemStyle
  if (e)
    for (var n = 0, i = fp.length; n < i; n++) {
      var r = fp[n],
        o = e.normal,
        a = e.emphasis
      o &&
        o[r] &&
        ((t[r] = t[r] || {}),
        t[r].normal ? z(t[r].normal, o[r]) : (t[r].normal = o[r]),
        (o[r] = null)),
        a &&
          a[r] &&
          ((t[r] = t[r] || {}),
          t[r].emphasis ? z(t[r].emphasis, a[r]) : (t[r].emphasis = a[r]),
          (a[r] = null))
    }
}
function gp(t, e, n) {
  if (t && t[e] && (t[e].normal || t[e].emphasis)) {
    var i = t[e].normal,
      r = t[e].emphasis
    i && (n ? ((t[e].normal = t[e].emphasis = null), F(t[e], i)) : (t[e] = i)),
      r &&
        ((t.emphasis = t.emphasis || {}),
        (t.emphasis[e] = r),
        r.focus && (t.emphasis.focus = r.focus),
        r.blurScope && (t.emphasis.blurScope = r.blurScope))
  }
}
function yp(t) {
  gp(t, 'itemStyle'),
    gp(t, 'lineStyle'),
    gp(t, 'areaStyle'),
    gp(t, 'label'),
    gp(t, 'labelLine'),
    gp(t, 'upperLabel'),
    gp(t, 'edgeLabel')
}
function vp(t, e) {
  var n = pp(t) && t[e],
    i = pp(n) && n.textStyle
  if (i)
    for (var r = 0, o = ur.length; r < o; r++) {
      var a = ur[r]
      i.hasOwnProperty(a) && (n[a] = i[a])
    }
}
function mp(t) {
  t && (yp(t), vp(t, 'label'), t.emphasis && vp(t.emphasis, 'label'))
}
function _p(t) {
  return Q(t) ? t : t ? [t] : []
}
function xp(t) {
  return (Q(t) ? t[0] : t) || {}
}
function wp(t, e) {
  cp(_p(t.series), function (t) {
    pp(t) &&
      (function (t) {
        if (pp(t)) {
          dp(t),
            yp(t),
            vp(t, 'label'),
            vp(t, 'upperLabel'),
            vp(t, 'edgeLabel'),
            t.emphasis &&
              (vp(t.emphasis, 'label'),
              vp(t.emphasis, 'upperLabel'),
              vp(t.emphasis, 'edgeLabel'))
          var e = t.markPoint
          e && (dp(e), mp(e))
          var n = t.markLine
          n && (dp(n), mp(n))
          var i = t.markArea
          i && mp(i)
          var r = t.data
          if ('graph' === t.type) {
            r = r || t.nodes
            var o = t.links || t.edges
            if (o && !ot(o)) for (var a = 0; a < o.length; a++) mp(o[a])
            U(t.categories, function (t) {
              yp(t)
            })
          }
          if (r && !ot(r)) for (a = 0; a < r.length; a++) mp(r[a])
          if ((e = t.markPoint) && e.data) {
            var s = e.data
            for (a = 0; a < s.length; a++) mp(s[a])
          }
          if ((n = t.markLine) && n.data) {
            var l = n.data
            for (a = 0; a < l.length; a++)
              Q(l[a]) ? (mp(l[a][0]), mp(l[a][1])) : mp(l[a])
          }
          'gauge' === t.type
            ? (vp(t, 'axisLabel'), vp(t, 'title'), vp(t, 'detail'))
            : 'treemap' === t.type
            ? (gp(t.breadcrumb, 'itemStyle'),
              U(t.levels, function (t) {
                yp(t)
              }))
            : 'tree' === t.type && yp(t.leaves)
        }
      })(t)
  })
  var n = [
    'xAxis',
    'yAxis',
    'radiusAxis',
    'angleAxis',
    'singleAxis',
    'parallelAxis',
    'radar',
  ]
  e && n.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis'),
    cp(n, function (e) {
      cp(_p(t[e]), function (t) {
        t && (vp(t, 'axisLabel'), vp(t.axisPointer, 'label'))
      })
    }),
    cp(_p(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault
      vp(e, 'axisLabel'), vp(e && e.axisPointer, 'label')
    }),
    cp(_p(t.calendar), function (t) {
      gp(t, 'itemStyle'),
        vp(t, 'dayLabel'),
        vp(t, 'monthLabel'),
        vp(t, 'yearLabel')
    }),
    cp(_p(t.radar), function (t) {
      vp(t, 'name'),
        t.name && null == t.axisName && ((t.axisName = t.name), delete t.name),
        null != t.nameGap &&
          null == t.axisNameGap &&
          ((t.axisNameGap = t.nameGap), delete t.nameGap)
    }),
    cp(_p(t.geo), function (t) {
      pp(t) &&
        (mp(t),
        cp(_p(t.regions), function (t) {
          mp(t)
        }))
    }),
    cp(_p(t.timeline), function (t) {
      mp(t), gp(t, 'label'), gp(t, 'itemStyle'), gp(t, 'controlStyle', !0)
      var e = t.data
      Q(e) &&
        U(e, function (t) {
          it(t) && (gp(t, 'label'), gp(t, 'itemStyle'))
        })
    }),
    cp(_p(t.toolbox), function (t) {
      gp(t, 'iconStyle'),
        cp(t.feature, function (t) {
          gp(t, 'iconStyle')
        })
    }),
    vp(xp(t.axisPointer), 'label'),
    vp(xp(t.tooltip).axisPointer, 'label')
}
function bp(t) {
  t &&
    U(Sp, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
    })
}
var Sp = [
    ['x', 'left'],
    ['y', 'top'],
    ['x2', 'right'],
    ['y2', 'bottom'],
  ],
  Tp = [
    'grid',
    'geo',
    'parallel',
    'legend',
    'toolbox',
    'title',
    'visualMap',
    'dataZoom',
    'timeline',
  ],
  Mp = [
    ['borderRadius', 'barBorderRadius'],
    ['borderColor', 'barBorderColor'],
    ['borderWidth', 'barBorderWidth'],
  ]
function Cp(t) {
  var e = t && t.itemStyle
  if (e)
    for (var n = 0; n < Mp.length; n++) {
      var i = Mp[n][1],
        r = Mp[n][0]
      null != e[i] && (e[r] = e[i])
    }
}
function kp(t) {
  t &&
    'edge' === t.alignTo &&
    null != t.margin &&
    null == t.edgeDistance &&
    (t.edgeDistance = t.margin)
}
function Ip(t) {
  t && t.downplay && !t.blur && (t.blur = t.downplay)
}
function Dp(t, e) {
  if (t)
    for (var n = 0; n < t.length; n++) e(t[n]), t[n] && Dp(t[n].children, e)
}
function Ap(t, e) {
  wp(t, e),
    (t.series = sr(t.series)),
    U(t.series, function (t) {
      if (it(t)) {
        var e = t.type
        if ('line' === e) null != t.clipOverflow && (t.clip = t.clipOverflow)
        else if ('pie' === e || 'gauge' === e) {
          if (
            (null != t.clockWise && (t.clockwise = t.clockWise),
            kp(t.label),
            (r = t.data) && !ot(r))
          )
            for (var n = 0; n < r.length; n++) kp(r[n])
          null != t.hoverOffset &&
            ((t.emphasis = t.emphasis || {}),
            (t.emphasis.scaleSize = null) &&
              (t.emphasis.scaleSize = t.hoverOffset))
        } else if ('gauge' === e) {
          var i = (function (t, e) {
            for (
              var n = e.split(','), i = t, r = 0;
              r < n.length && null != (i = i && i[n[r]]);
              r++
            );
            return i
          })(t, 'pointer.color')
          null != i &&
            (function (t, e, n, i) {
              for (var r, o = e.split(','), a = t, s = 0; s < o.length - 1; s++)
                null == a[(r = o[s])] && (a[r] = {}), (a = a[r])
              ;(i || null == a[o[s]]) && (a[o[s]] = n)
            })(t, 'itemStyle.color', i)
        } else if ('bar' === e) {
          var r
          if (
            (Cp(t),
            Cp(t.backgroundStyle),
            Cp(t.emphasis),
            (r = t.data) && !ot(r))
          )
            for (n = 0; n < r.length; n++)
              'object' == typeof r[n] && (Cp(r[n]), Cp(r[n] && r[n].emphasis))
        } else if ('sunburst' === e) {
          var o = t.highlightPolicy
          o &&
            ((t.emphasis = t.emphasis || {}),
            t.emphasis.focus || (t.emphasis.focus = o)),
            Ip(t),
            Dp(t.data, Ip)
        } else
          'graph' === e || 'sankey' === e
            ? (function (t) {
                t &&
                  null != t.focusNodeAdjacency &&
                  ((t.emphasis = t.emphasis || {}),
                  null == t.emphasis.focus && (t.emphasis.focus = 'adjacency'))
              })(t)
            : 'map' === e &&
              (t.mapType && !t.map && (t.map = t.mapType),
              t.mapLocation && F(t, t.mapLocation))
        null != t.hoverAnimation &&
          ((t.emphasis = t.emphasis || {}),
          t.emphasis &&
            null == t.emphasis.scale &&
            (t.emphasis.scale = t.hoverAnimation)),
          bp(t)
      }
    }),
    t.dataRange && (t.visualMap = t.dataRange),
    U(Tp, function (e) {
      var n = t[e]
      n &&
        (Q(n) || (n = [n]),
        U(n, function (t) {
          bp(t)
        }))
    })
}
function Pp(t) {
  U(t, function (e, n) {
    var i = [],
      r = [NaN, NaN],
      o = [e.stackResultDimension, e.stackedOverDimension],
      a = e.data,
      s = e.isStackedByIndex
    a.modify(o, function (o, l, u) {
      var h,
        c,
        p = a.get(e.stackedDimension, u)
      if (isNaN(p)) return r
      s ? (c = a.getRawIndex(u)) : (h = a.get(e.stackedByDimension, u))
      for (var f = NaN, d = n - 1; d >= 0; d--) {
        var g = t[d]
        if ((s || (c = g.data.rawIndexOf(g.stackedByDimension, h)), c >= 0)) {
          var y = g.data.getByRawIndex(g.stackResultDimension, c)
          if ((p >= 0 && y > 0) || (p <= 0 && y < 0)) {
            ;(p = Yi(p, y)), (f = y)
            break
          }
        }
      }
      return (i[0] = p), (i[1] = f), i
    })
  })
}
var Op,
  Lp,
  Rp,
  Bp,
  zp,
  Ep = function (t) {
    ;(this.data = t.data || ('keyedColumns' === t.sourceFormat ? {} : [])),
      (this.sourceFormat = t.sourceFormat || 'unknown'),
      (this.seriesLayoutBy = t.seriesLayoutBy || 'column'),
      (this.startIndex = t.startIndex || 0),
      (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
      (this.metaRawOption = t.metaRawOption)
    var e = (this.dimensionsDefine = t.dimensionsDefine)
    if (e)
      for (var n = 0; n < e.length; n++) {
        var i = e[n]
        null == i.type && Wc(this, n) === Ec.Must && (i.type = 'ordinal')
      }
  }
function Np(t) {
  return t instanceof Ep
}
function Fp(t, e, n) {
  n = n || Vp(t)
  var i = e.seriesLayoutBy,
    r = (function (t, e, n, i, r) {
      var o, a
      if (!t)
        return {
          dimensionsDefine: Wp(r),
          startIndex: a,
          dimensionsDetectedCount: o,
        }
      if ('arrayRows' === e) {
        var s = t
        'auto' === i || null == i
          ? Gp(
              function (t) {
                null != t &&
                  '-' !== t &&
                  (tt(t) ? null == a && (a = 1) : (a = 0))
              },
              n,
              s,
              10
            )
          : (a = nt(i) ? i : i ? 1 : 0),
          r ||
            1 !== a ||
            ((r = []),
            Gp(
              function (t, e) {
                r[e] = null != t ? t + '' : ''
              },
              n,
              s,
              1 / 0
            )),
          (o = r
            ? r.length
            : 'row' === n
            ? s.length
            : s[0]
            ? s[0].length
            : null)
      } else if ('objectRows' === e)
        r ||
          (r = (function (t) {
            var e,
              n = 0
            for (; n < t.length && !(e = t[n++]); );
            if (e) {
              var i = []
              return (
                U(e, function (t, e) {
                  i.push(e)
                }),
                i
              )
            }
          })(t))
      else if ('keyedColumns' === e)
        r ||
          ((r = []),
          U(t, function (t, e) {
            r.push(e)
          }))
      else if ('original' === e) {
        var l = hr(t[0])
        o = (Q(l) && l.length) || 1
      }
      return {
        startIndex: a,
        dimensionsDefine: Wp(r),
        dimensionsDetectedCount: o,
      }
    })(t, n, i, e.sourceHeader, e.dimensions)
  return new Ep({
    data: t,
    sourceFormat: n,
    seriesLayoutBy: i,
    dimensionsDefine: r.dimensionsDefine,
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount,
    metaRawOption: B(e),
  })
}
function Hp(t) {
  return new Ep({ data: t, sourceFormat: ot(t) ? 'typedArray' : 'original' })
}
function Vp(t) {
  var e = 'unknown'
  if (ot(t)) e = 'typedArray'
  else if (Q(t)) {
    0 === t.length && (e = 'arrayRows')
    for (var n = 0, i = t.length; n < i; n++) {
      var r = t[n]
      if (null != r) {
        if (Q(r)) {
          e = 'arrayRows'
          break
        }
        if (it(r)) {
          e = 'objectRows'
          break
        }
      }
    }
  } else if (it(t))
    for (var o in t)
      if (wt(t, o) && G(t[o])) {
        e = 'keyedColumns'
        break
      }
  return e
}
function Wp(t) {
  if (t) {
    var e = mt()
    return X(t, function (t, n) {
      var i = {
        name: (t = it(t) ? t : { name: t }).name,
        displayName: t.displayName,
        type: t.type,
      }
      if (null == i.name) return i
      ;(i.name += ''), null == i.displayName && (i.displayName = i.name)
      var r = e.get(i.name)
      return r ? (i.name += '-' + r.count++) : e.set(i.name, { count: 1 }), i
    })
  }
}
function Gp(t, e, n, i) {
  if ('row' === e)
    for (var r = 0; r < n.length && r < i; r++) t(n[r] ? n[r][0] : null, r)
  else {
    var o = n[0] || []
    for (r = 0; r < o.length && r < i; r++) t(o[r], r)
  }
}
function Up(t) {
  var e = t.sourceFormat
  return 'objectRows' === e || 'keyedColumns' === e
}
var Xp = (function () {
    function t(t, e) {
      var n = Np(t) ? t : Hp(t)
      this._source = n
      var i = (this._data = n.data)
      'typedArray' === n.sourceFormat &&
        ((this._offset = 0), (this._dimSize = e), (this._data = i)),
        zp(this, i, n)
    }
    var e
    return (
      (t.prototype.getSource = function () {
        return this._source
      }),
      (t.prototype.count = function () {
        return 0
      }),
      (t.prototype.getItem = function (t, e) {}),
      (t.prototype.appendData = function (t) {}),
      (t.prototype.clean = function () {}),
      (t.protoInitialize =
        (((e = t.prototype).pure = !1), void (e.persistent = !0))),
      (t.internalField = (function () {
        var t
        zp = function (t, r, o) {
          var a = o.sourceFormat,
            s = o.seriesLayoutBy,
            l = o.startIndex,
            u = o.dimensionsDefine
          if ((N(t, Bp[ef(a, s)]), 'typedArray' === a))
            (t.getItem = e), (t.count = i), (t.fillStorage = n)
          else {
            var h = qp(a, s)
            t.getItem = K(h, null, r, l, u)
            var c = $p(a, s)
            t.count = K(c, null, r, l, u)
          }
        }
        var e = function (t, e) {
            ;(t -= this._offset), (e = e || [])
            for (
              var n = this._data, i = this._dimSize, r = i * t, o = 0;
              o < i;
              o++
            )
              e[o] = n[r + o]
            return e
          },
          n = function (t, e, n, i) {
            for (var r = this._data, o = this._dimSize, a = 0; a < o; a++) {
              for (
                var s = i[a],
                  l = null == s[0] ? 1 / 0 : s[0],
                  u = null == s[1] ? -1 / 0 : s[1],
                  h = e - t,
                  c = n[a],
                  p = 0;
                p < h;
                p++
              ) {
                var f = r[p * o + a]
                ;(c[t + p] = f), f < l && (l = f), f > u && (u = f)
              }
              ;(s[0] = l), (s[1] = u)
            }
          },
          i = function () {
            return this._data ? this._data.length / this._dimSize : 0
          }
        function r(t) {
          for (var e = 0; e < t.length; e++) this._data.push(t[e])
        }
        ;((t = {}).arrayRows_column = { pure: !0, appendData: r }),
          (t.arrayRows_row = {
            pure: !0,
            appendData: function () {
              throw new Error(
                'Do not support appendData when set seriesLayoutBy: "row".'
              )
            },
          }),
          (t.objectRows = { pure: !0, appendData: r }),
          (t.keyedColumns = {
            pure: !0,
            appendData: function (t) {
              var e = this._data
              U(t, function (t, n) {
                for (
                  var i = e[n] || (e[n] = []), r = 0;
                  r < (t || []).length;
                  r++
                )
                  i.push(t[r])
              })
            },
          }),
          (t.original = { appendData: r }),
          (t.typedArray = {
            persistent: !1,
            pure: !0,
            appendData: function (t) {
              this._data = t
            },
            clean: function () {
              ;(this._offset += this.count()), (this._data = null)
            },
          }),
          (Bp = t)
      })()),
      t
    )
  })(),
  Yp = function (t, e, n, i) {
    return t[i]
  },
  jp =
    (((Op = {}).arrayRows_column = function (t, e, n, i) {
      return t[i + e]
    }),
    (Op.arrayRows_row = function (t, e, n, i, r) {
      i += e
      for (var o = r || [], a = t, s = 0; s < a.length; s++) {
        var l = a[s]
        o[s] = l ? l[i] : null
      }
      return o
    }),
    (Op.objectRows = Yp),
    (Op.keyedColumns = function (t, e, n, i, r) {
      for (var o = r || [], a = 0; a < n.length; a++) {
        var s = t[n[a].name]
        o[a] = s ? s[i] : null
      }
      return o
    }),
    (Op.original = Yp),
    Op)
function qp(t, e) {
  return jp[ef(t, e)]
}
var Zp = function (t, e, n) {
    return t.length
  },
  Kp =
    (((Lp = {}).arrayRows_column = function (t, e, n) {
      return Math.max(0, t.length - e)
    }),
    (Lp.arrayRows_row = function (t, e, n) {
      var i = t[0]
      return i ? Math.max(0, i.length - e) : 0
    }),
    (Lp.objectRows = Zp),
    (Lp.keyedColumns = function (t, e, n) {
      var i = t[n[0].name]
      return i ? i.length : 0
    }),
    (Lp.original = Zp),
    Lp)
function $p(t, e) {
  return Kp[ef(t, e)]
}
var Qp = function (t, e, n) {
    return t[e]
  },
  Jp =
    (((Rp = {}).arrayRows = Qp),
    (Rp.objectRows = function (t, e, n) {
      return t[n]
    }),
    (Rp.keyedColumns = Qp),
    (Rp.original = function (t, e, n) {
      var i = hr(t)
      return i instanceof Array ? i[e] : i
    }),
    (Rp.typedArray = Qp),
    Rp)
function tf(t) {
  return Jp[t]
}
function ef(t, e) {
  return 'arrayRows' === t ? t + '_' + e : t
}
function nf(t, e, n) {
  if (t) {
    var i = t.getRawDataItem(e)
    if (null != i) {
      var r = t.getStore(),
        o = r.getSource().sourceFormat
      if (null != n) {
        var a = t.getDimensionIndex(n),
          s = r.getDimensionProperty(a)
        return tf(o)(i, a, s)
      }
      var l = i
      return 'original' === o && (l = hr(i)), l
    }
  }
}
var rf = /\{@(.+?)\}/g,
  of = (function () {
    function t() {}
    return (
      (t.prototype.getDataParams = function (t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          o = n.getName(t),
          a = n.getRawDataItem(t),
          s = n.getItemVisual(t, 'style'),
          l = s && s[n.getItemVisual(t, 'drawType') || 'fill'],
          u = s && s.stroke,
          h = this.mainType,
          c = 'series' === h,
          p = n.userOutput && n.userOutput.get()
        return {
          componentType: h,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: c ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: c ? this.id : null,
          seriesName: c ? this.name : null,
          name: o,
          dataIndex: r,
          data: a,
          dataType: e,
          value: i,
          color: l,
          borderColor: u,
          dimensionNames: p ? p.fullDimensions : null,
          encode: p ? p.encode : null,
          $vars: ['seriesName', 'name', 'value'],
        }
      }),
      (t.prototype.getFormattedLabel = function (t, e, n, i, r, o) {
        e = e || 'normal'
        var a = this.getData(n),
          s = this.getDataParams(t, n)
        ;(o && (s.value = o.interpolatedValue),
        null != i && Q(s.value) && (s.value = s.value[i]),
        r) ||
          (r = a
            .getItemModel(t)
            .get(
              'normal' === e
                ? ['label', 'formatter']
                : [e, 'label', 'formatter']
            ))
        return 'function' == typeof r
          ? ((s.status = e), (s.dimensionIndex = i), r(s))
          : 'string' == typeof r
          ? fc(r, s).replace(rf, function (e, n) {
              var i = n.length,
                r = n
              '[' === r.charAt(0) &&
                ']' === r.charAt(i - 1) &&
                (r = +r.slice(1, i - 1))
              var s = nf(a, t, r)
              if (o && Q(o.interpolatedValue)) {
                var l = a.getDimensionIndex(r)
                l >= 0 && (s = o.interpolatedValue[l])
              }
              return null != s ? s + '' : ''
            })
          : void 0
      }),
      (t.prototype.getRawValue = function (t, e) {
        return nf(this.getData(e), t)
      }),
      (t.prototype.formatTooltip = function (t, e, n) {}),
      t
    )
  })()
function af(t) {
  var e, n
  return (
    it(t) ? t.type && (n = t) : (e = t), { markupText: e, markupFragment: n }
  )
}
function sf(t) {
  return new lf(t)
}
var lf = (function () {
    function t(t) {
      ;(t = t || {}),
        (this._reset = t.reset),
        (this._plan = t.plan),
        (this._count = t.count),
        (this._onDirty = t.onDirty),
        (this._dirty = !0)
    }
    return (
      (t.prototype.perform = function (t) {
        var e,
          n = this._upstream,
          i = t && t.skip
        if (this._dirty && n) {
          var r = this.context
          r.data = r.outputData = n.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this),
          this._plan && !i && (e = this._plan(this.context))
        var o,
          a = h(this._modBy),
          s = this._modDataCount || 0,
          l = h(t && t.modBy),
          u = (t && t.modDataCount) || 0
        function h(t) {
          return !(t >= 1) && (t = 1), t
        }
        ;(a === l && s === u) || (e = 'reset'),
          (this._dirty || 'reset' === e) &&
            ((this._dirty = !1), (o = this._doReset(i))),
          (this._modBy = l),
          (this._modDataCount = u)
        var c = t && t.step
        if (
          ((this._dueEnd = n
            ? n._outputDueEnd
            : this._count
            ? this._count(this.context)
            : 1 / 0),
          this._progress)
        ) {
          var p = this._dueIndex,
            f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd)
          if (!i && (o || p < f)) {
            var d = this._progress
            if (Q(d))
              for (var g = 0; g < d.length; g++)
                this._doProgress(d[g], p, f, l, u)
            else this._doProgress(d, p, f, l, u)
          }
          this._dueIndex = f
          var y = null != this._settedOutputEnd ? this._settedOutputEnd : f
          this._outputDueEnd = y
        } else
          this._dueIndex = this._outputDueEnd =
            null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd
        return this.unfinished()
      }),
      (t.prototype.dirty = function () {
        ;(this._dirty = !0), this._onDirty && this._onDirty(this.context)
      }),
      (t.prototype._doProgress = function (t, e, n, i, r) {
        uf.reset(e, n, i, r),
          (this._callingProgress = t),
          this._callingProgress(
            { start: e, end: n, count: n - e, next: uf.next },
            this.context
          )
      }),
      (t.prototype._doReset = function (t) {
        var e, n
        ;(this._dueIndex = this._outputDueEnd = this._dueEnd = 0),
          (this._settedOutputEnd = null),
          !t &&
            this._reset &&
            ((e = this._reset(this.context)) &&
              e.progress &&
              ((n = e.forceFirstProgress), (e = e.progress)),
            Q(e) && !e.length && (e = null)),
          (this._progress = e),
          (this._modBy = this._modDataCount = null)
        var i = this._downstream
        return i && i.dirty(), n
      }),
      (t.prototype.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd
      }),
      (t.prototype.pipe = function (t) {
        ;(this._downstream !== t || this._dirty) &&
          ((this._downstream = t), (t._upstream = this), t.dirty())
      }),
      (t.prototype.dispose = function () {
        this._disposed ||
          (this._upstream && (this._upstream._downstream = null),
          this._downstream && (this._downstream._upstream = null),
          (this._dirty = !1),
          (this._disposed = !0))
      }),
      (t.prototype.getUpstream = function () {
        return this._upstream
      }),
      (t.prototype.getDownstream = function () {
        return this._downstream
      }),
      (t.prototype.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t
      }),
      t
    )
  })(),
  uf = (function () {
    var t,
      e,
      n,
      i,
      r,
      o = {
        reset: function (l, u, h, c) {
          ;(e = l),
            (t = u),
            (n = h),
            (i = c),
            (r = Math.ceil(i / n)),
            (o.next = n > 1 && i > 0 ? s : a)
        },
      }
    return o
    function a() {
      return e < t ? e++ : null
    }
    function s() {
      var o = (e % r) * n + Math.ceil(e / r),
        a = e >= t ? null : o < i ? o : e
      return e++, a
    }
  })()
function hf(t, e) {
  var n = e && e.type
  return 'ordinal' === n
    ? t
    : ('time' === n &&
        'number' != typeof t &&
        null != t &&
        '-' !== t &&
        (t = +$i(t)),
      null == t || '' === t ? NaN : +t)
}
mt({
  number: function (t) {
    return parseFloat(t)
  },
  time: function (t) {
    return +$i(t)
  },
  trim: function (t) {
    return 'string' == typeof t ? dt(t) : t
  },
})
var cf = (function () {
    function t(t, e) {
      var n = 'desc' === t
      ;(this._resultLT = n ? 1 : -1),
        null == e && (e = n ? 'min' : 'max'),
        (this._incomparable = 'min' === e ? -1 / 0 : 1 / 0)
    }
    return (
      (t.prototype.evaluate = function (t, e) {
        var n = typeof t,
          i = typeof e,
          r = 'number' === n ? t : er(t),
          o = 'number' === i ? e : er(e),
          a = isNaN(r),
          s = isNaN(o)
        if (
          (a && (r = this._incomparable), s && (o = this._incomparable), a && s)
        ) {
          var l = 'string' === n,
            u = 'string' === i
          l && (r = u ? t : 0), u && (o = l ? e : 0)
        }
        return r < o ? this._resultLT : r > o ? -this._resultLT : 0
      }),
      t
    )
  })(),
  pf = (function () {
    function t() {}
    return (
      (t.prototype.getRawData = function () {
        throw new Error('not supported')
      }),
      (t.prototype.getRawDataItem = function (t) {
        throw new Error('not supported')
      }),
      (t.prototype.cloneRawData = function () {}),
      (t.prototype.getDimensionInfo = function (t) {}),
      (t.prototype.cloneAllDimensionInfo = function () {}),
      (t.prototype.count = function () {}),
      (t.prototype.retrieveValue = function (t, e) {}),
      (t.prototype.retrieveValueFromItem = function (t, e) {}),
      (t.prototype.convertValue = function (t, e) {
        return hf(t, e)
      }),
      t
    )
  })()
function ff(t) {
  if (!_f(t.sourceFormat)) {
    ar('')
  }
  return t.data
}
function df(t) {
  var e = t.sourceFormat,
    n = t.data
  if (!_f(e)) {
    ar('')
  }
  if ('arrayRows' === e) {
    for (var i = [], r = 0, o = n.length; r < o; r++) i.push(n[r].slice())
    return i
  }
  if ('objectRows' === e) {
    for (i = [], r = 0, o = n.length; r < o; r++) i.push(N({}, n[r]))
    return i
  }
}
function gf(t, e, n) {
  if (null != n)
    return 'number' == typeof n || (!isNaN(n) && !wt(e, n))
      ? t[n]
      : wt(e, n)
      ? e[n]
      : void 0
}
function yf(t) {
  return B(t)
}
var vf = mt()
function mf(t, e, n, i) {
  e.length || ar(''), it(t) || ar('')
  var r = t.type,
    o = vf.get(r)
  o || ar('')
  var a = X(e, function (t) {
    return (function (t, e) {
      var n = new pf(),
        i = t.data,
        r = (n.sourceFormat = t.sourceFormat),
        o = t.startIndex
      'column' !== t.seriesLayoutBy && ar('')
      var a = [],
        s = {},
        l = t.dimensionsDefine
      if (l)
        U(l, function (t, e) {
          var n = t.name,
            i = { index: e, name: n, displayName: t.displayName }
          a.push(i), null != n && (wt(s, n) && ar(''), (s[n] = i))
        })
      else
        for (var u = 0; u < t.dimensionsDetectedCount; u++) a.push({ index: u })
      var h = qp(r, 'column')
      e.__isBuiltIn &&
        ((n.getRawDataItem = function (t) {
          return h(i, o, a, t)
        }),
        (n.getRawData = K(ff, null, t))),
        (n.cloneRawData = K(df, null, t))
      var c = $p(r, 'column')
      n.count = K(c, null, i, o, a)
      var p = tf(r)
      n.retrieveValue = function (t, e) {
        var n = h(i, o, a, t)
        return f(n, e)
      }
      var f = (n.retrieveValueFromItem = function (t, e) {
        if (null != t) {
          var n = a[e]
          return n ? p(t, e, n.name) : void 0
        }
      })
      return (
        (n.getDimensionInfo = K(gf, null, a, s)),
        (n.cloneAllDimensionInfo = K(yf, null, a)),
        n
      )
    })(t, o)
  })
  return X(
    sr(o.transform({ upstream: a[0], upstreamList: a, config: B(t.config) })),
    function (t, n) {
      var i
      it(t) || ar(''), t.data || ar(''), _f(Vp(t.data)) || ar('')
      var r = e[0]
      if (r && 0 === n && !t.dimensions) {
        var o = r.startIndex
        o && (t.data = r.data.slice(0, o).concat(t.data)),
          (i = {
            seriesLayoutBy: 'column',
            sourceHeader: o,
            dimensions: r.metaRawOption.dimensions,
          })
      } else
        i = {
          seriesLayoutBy: 'column',
          sourceHeader: 0,
          dimensions: t.dimensions,
        }
      return Fp(t.data, i, null)
    }
  )
}
function _f(t) {
  return 'arrayRows' === t || 'objectRows' === t
}
var xf,
  wf = 'undefined' == typeof Uint32Array ? Array : Uint32Array,
  bf = 'undefined' == typeof Uint16Array ? Array : Uint16Array,
  Sf = 'undefined' == typeof Int32Array ? Array : Int32Array,
  Tf = 'undefined' == typeof Float64Array ? Array : Float64Array,
  Mf = { float: Tf, int: Sf, ordinal: Array, number: Array, time: Tf }
function Cf(t) {
  return t > 65535 ? wf : bf
}
function kf(t, e, n, i, r) {
  var o = Mf[n || 'float']
  if (r) {
    var a = t[e],
      s = a && a.length
    if (s !== i) {
      for (var l = new o(i), u = 0; u < s; u++) l[u] = a[u]
      t[e] = l
    }
  } else t[e] = new o(i)
}
var If = (function () {
    function t() {
      ;(this._chunks = []),
        (this._rawExtent = []),
        (this._extent = []),
        (this._count = 0),
        (this._rawCount = 0),
        (this._calcDimNameToIdx = mt())
    }
    return (
      (t.prototype.initData = function (t, e, n) {
        ;(this._provider = t),
          (this._chunks = []),
          (this._indices = null),
          (this.getRawIndex = this._getRawIdxIdentity)
        var i = t.getSource(),
          r = (this.defaultDimValueGetter = xf[i.sourceFormat])
        ;(this._dimValueGetter = n || r),
          (this._rawExtent = []),
          Up(i),
          (this._dimensions = X(e, function (t) {
            return { type: t.type, property: t.property }
          })),
          this._initDataFromProvider(0, t.count())
      }),
      (t.prototype.getProvider = function () {
        return this._provider
      }),
      (t.prototype.getSource = function () {
        return this._provider.getSource()
      }),
      (t.prototype.ensureCalculationDimension = function (t, e) {
        var n = this._calcDimNameToIdx,
          i = this._dimensions,
          r = n.get(t)
        if (null != r) {
          if (i[r].type === e) return r
        } else r = i.length
        return (
          (i[r] = { type: e }),
          n.set(t, r),
          (this._chunks[r] = new Mf[e || 'float'](this._rawCount)),
          (this._rawExtent[r] = [1 / 0, -1 / 0]),
          r
        )
      }),
      (t.prototype.collectOrdinalMeta = function (t, e) {
        var n = this._chunks[t],
          i = this._dimensions[t],
          r = this._rawExtent,
          o = i.ordinalOffset || 0,
          a = n.length
        0 === o && (r[t] = [1 / 0, -1 / 0])
        for (var s = r[t], l = o; l < a; l++) {
          var u = (n[l] = e.parseAndCollect(n[l]))
          ;(s[0] = Math.min(u, s[0])), (s[1] = Math.max(u, s[1]))
        }
        ;(i.ordinalMeta = e), (i.ordinalOffset = a), (i.type = 'ordinal')
      }),
      (t.prototype.getOrdinalMeta = function (t) {
        return this._dimensions[t].ordinalMeta
      }),
      (t.prototype.getDimensionProperty = function (t) {
        var e = this._dimensions[t]
        return e && e.property
      }),
      (t.prototype.appendData = function (t) {
        var e = this._provider,
          n = this.count()
        e.appendData(t)
        var i = e.count()
        return (
          e.persistent || (i += n),
          n < i && this._initDataFromProvider(n, i, !0),
          [n, i]
        )
      }),
      (t.prototype.appendValues = function (t, e) {
        for (
          var n = this._chunks,
            i = this._dimensions,
            r = i.length,
            o = this._rawExtent,
            a = this.count(),
            s = a + Math.max(t.length, e || 0),
            l = 0;
          l < r;
          l++
        ) {
          kf(n, l, (f = i[l]).type, s, !0)
        }
        for (var u = [], h = a; h < s; h++)
          for (var c = h - a, p = 0; p < r; p++) {
            var f = i[p],
              d = xf.arrayRows.call(this, t[c] || u, f.property, c, p)
            n[p][h] = d
            var g = o[p]
            d < g[0] && (g[0] = d), d > g[1] && (g[1] = d)
          }
        return (this._rawCount = this._count = s), { start: a, end: s }
      }),
      (t.prototype._initDataFromProvider = function (t, e, n) {
        for (
          var i = this._provider,
            r = this._chunks,
            o = this._dimensions,
            a = o.length,
            s = this._rawExtent,
            l = X(o, function (t) {
              return t.property
            }),
            u = 0;
          u < a;
          u++
        ) {
          var h = o[u]
          s[u] || (s[u] = [1 / 0, -1 / 0]), kf(r, u, h.type, e, n)
        }
        if (i.fillStorage) i.fillStorage(t, e, r, s)
        else
          for (var c = [], p = t; p < e; p++) {
            c = i.getItem(p, c)
            for (var f = 0; f < a; f++) {
              var d = r[f],
                g = this._dimValueGetter(c, l[f], p, f)
              d[p] = g
              var y = s[f]
              g < y[0] && (y[0] = g), g > y[1] && (y[1] = g)
            }
          }
        !i.persistent && i.clean && i.clean(),
          (this._rawCount = this._count = e),
          (this._extent = [])
      }),
      (t.prototype.count = function () {
        return this._count
      }),
      (t.prototype.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return NaN
        var n = this._chunks[t]
        return n ? n[this.getRawIndex(e)] : NaN
      }),
      (t.prototype.getValues = function (t, e) {
        var n = [],
          i = []
        if (null == e) {
          ;(e = t), (t = [])
          for (var r = 0; r < this._dimensions.length; r++) i.push(r)
        } else i = t
        r = 0
        for (var o = i.length; r < o; r++) n.push(this.get(i[r], e))
        return n
      }),
      (t.prototype.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return NaN
        var n = this._chunks[t]
        return n ? n[e] : NaN
      }),
      (t.prototype.getSum = function (t) {
        var e = 0
        if (this._chunks[t])
          for (var n = 0, i = this.count(); n < i; n++) {
            var r = this.get(t, n)
            isNaN(r) || (e += r)
          }
        return e
      }),
      (t.prototype.getMedian = function (t) {
        var e = []
        this.each([t], function (t) {
          isNaN(t) || e.push(t)
        })
        var n = e.sort(function (t, e) {
            return t - e
          }),
          i = this.count()
        return 0 === i
          ? 0
          : i % 2 == 1
          ? n[(i - 1) / 2]
          : (n[i / 2] + n[i / 2 - 1]) / 2
      }),
      (t.prototype.indexOfRawIndex = function (t) {
        if (t >= this._rawCount || t < 0) return -1
        if (!this._indices) return t
        var e = this._indices,
          n = e[t]
        if (null != n && n < this._count && n === t) return t
        for (var i = 0, r = this._count - 1; i <= r; ) {
          var o = ((i + r) / 2) | 0
          if (e[o] < t) i = o + 1
          else {
            if (!(e[o] > t)) return o
            r = o - 1
          }
        }
        return -1
      }),
      (t.prototype.indicesOfNearest = function (t, e, n) {
        var i = this._chunks[t],
          r = []
        if (!i) return r
        null == n && (n = 1 / 0)
        for (
          var o = 1 / 0, a = -1, s = 0, l = 0, u = this.count();
          l < u;
          l++
        ) {
          var h = e - i[this.getRawIndex(l)],
            c = Math.abs(h)
          c <= n &&
            ((c < o || (c === o && h >= 0 && a < 0)) &&
              ((o = c), (a = h), (s = 0)),
            h === a && (r[s++] = l))
        }
        return (r.length = s), r
      }),
      (t.prototype.getIndices = function () {
        var t,
          e = this._indices
        if (e) {
          var n = e.constructor,
            i = this._count
          if (n === Array) {
            t = new n(i)
            for (var r = 0; r < i; r++) t[r] = e[r]
          } else t = new n(e.buffer, 0, i)
        } else {
          t = new (n = Cf(this._rawCount))(this.count())
          for (r = 0; r < t.length; r++) t[r] = r
        }
        return t
      }),
      (t.prototype.filter = function (t, e) {
        if (!this._count) return this
        for (
          var n = this.clone(),
            i = n.count(),
            r = new (Cf(n._rawCount))(i),
            o = [],
            a = t.length,
            s = 0,
            l = t[0],
            u = n._chunks,
            h = 0;
          h < i;
          h++
        ) {
          var c = void 0,
            p = n.getRawIndex(h)
          if (0 === a) c = e(h)
          else if (1 === a) {
            c = e(u[l][p], h)
          } else {
            for (var f = 0; f < a; f++) o[f] = u[t[f]][p]
            ;(o[f] = h), (c = e.apply(null, o))
          }
          c && (r[s++] = p)
        }
        return (
          s < i && (n._indices = r),
          (n._count = s),
          (n._extent = []),
          n._updateGetRawIdx(),
          n
        )
      }),
      (t.prototype.selectRange = function (t) {
        var e = this.clone(),
          n = e._count
        if (!n) return this
        var i = Z(t),
          r = i.length
        if (!r) return this
        var o = e.count(),
          a = new (Cf(e._rawCount))(o),
          s = 0,
          l = i[0],
          u = t[l][0],
          h = t[l][1],
          c = e._chunks,
          p = !1
        if (!e._indices) {
          var f = 0
          if (1 === r) {
            for (var d = c[i[0]], g = 0; g < n; g++) {
              ;(((_ = d[g]) >= u && _ <= h) || isNaN(_)) && (a[s++] = f), f++
            }
            p = !0
          } else if (2 === r) {
            d = c[i[0]]
            var y = c[i[1]],
              v = t[i[1]][0],
              m = t[i[1]][1]
            for (g = 0; g < n; g++) {
              var _ = d[g],
                x = y[g]
              ;((_ >= u && _ <= h) || isNaN(_)) &&
                ((x >= v && x <= m) || isNaN(x)) &&
                (a[s++] = f),
                f++
            }
            p = !0
          }
        }
        if (!p)
          if (1 === r)
            for (g = 0; g < o; g++) {
              var w = e.getRawIndex(g)
              ;(((_ = c[i[0]][w]) >= u && _ <= h) || isNaN(_)) && (a[s++] = w)
            }
          else
            for (g = 0; g < o; g++) {
              for (var b = !0, S = ((w = e.getRawIndex(g)), 0); S < r; S++) {
                var T = i[S]
                ;((_ = c[T][w]) < t[T][0] || _ > t[T][1]) && (b = !1)
              }
              b && (a[s++] = e.getRawIndex(g))
            }
        return (
          s < o && (e._indices = a),
          (e._count = s),
          (e._extent = []),
          e._updateGetRawIdx(),
          e
        )
      }),
      (t.prototype.map = function (t, e) {
        var n = this.clone(t)
        return this._updateDims(n, t, e), n
      }),
      (t.prototype.modify = function (t, e) {
        this._updateDims(this, t, e)
      }),
      (t.prototype._updateDims = function (t, e, n) {
        for (
          var i = t._chunks,
            r = [],
            o = e.length,
            a = t.count(),
            s = [],
            l = t._rawExtent,
            u = 0;
          u < e.length;
          u++
        )
          l[e[u]] = [1 / 0, -1 / 0]
        for (var h = 0; h < a; h++) {
          for (var c = t.getRawIndex(h), p = 0; p < o; p++) s[p] = i[e[p]][c]
          s[o] = h
          var f = n && n.apply(null, s)
          if (null != f) {
            'object' != typeof f && ((r[0] = f), (f = r))
            for (u = 0; u < f.length; u++) {
              var d = e[u],
                g = f[u],
                y = l[d],
                v = i[d]
              v && (v[c] = g), g < y[0] && (y[0] = g), g > y[1] && (y[1] = g)
            }
          }
        }
      }),
      (t.prototype.lttbDownSample = function (t, e) {
        var n,
          i,
          r,
          o = this.clone([t], !0),
          a = o._chunks[t],
          s = this.count(),
          l = 0,
          u = Math.floor(1 / e),
          h = this.getRawIndex(0),
          c = new (Cf(this._rawCount))(Math.ceil(s / u) + 2)
        c[l++] = h
        for (var p = 1; p < s - 1; p += u) {
          for (
            var f = Math.min(p + u, s - 1),
              d = Math.min(p + 2 * u, s),
              g = (d + f) / 2,
              y = 0,
              v = f;
            v < d;
            v++
          ) {
            var m = a[(S = this.getRawIndex(v))]
            isNaN(m) || (y += m)
          }
          y /= d - f
          var _ = p,
            x = Math.min(p + u, s),
            w = p - 1,
            b = a[h]
          ;(n = -1), (r = _)
          for (v = _; v < x; v++) {
            var S
            m = a[(S = this.getRawIndex(v))]
            isNaN(m) ||
              ((i = Math.abs((w - g) * (m - b) - (w - v) * (y - b))) > n &&
                ((n = i), (r = S)))
          }
          ;(c[l++] = r), (h = r)
        }
        return (
          (c[l++] = this.getRawIndex(s - 1)),
          (o._count = l),
          (o._indices = c),
          (o.getRawIndex = this._getRawIdx),
          o
        )
      }),
      (t.prototype.downSample = function (t, e, n, i) {
        for (
          var r = this.clone([t], !0),
            o = r._chunks,
            a = [],
            s = Math.floor(1 / e),
            l = o[t],
            u = this.count(),
            h = (r._rawExtent[t] = [1 / 0, -1 / 0]),
            c = new (Cf(this._rawCount))(Math.ceil(u / s)),
            p = 0,
            f = 0;
          f < u;
          f += s
        ) {
          s > u - f && ((s = u - f), (a.length = s))
          for (var d = 0; d < s; d++) {
            var g = this.getRawIndex(f + d)
            a[d] = l[g]
          }
          var y = n(a),
            v = this.getRawIndex(Math.min(f + i(a, y) || 0, u - 1))
          ;(l[v] = y),
            y < h[0] && (h[0] = y),
            y > h[1] && (h[1] = y),
            (c[p++] = v)
        }
        return (r._count = p), (r._indices = c), r._updateGetRawIdx(), r
      }),
      (t.prototype.each = function (t, e) {
        if (this._count)
          for (
            var n = t.length, i = this._chunks, r = 0, o = this.count();
            r < o;
            r++
          ) {
            var a = this.getRawIndex(r)
            switch (n) {
              case 0:
                e(r)
                break
              case 1:
                e(i[t[0]][a], r)
                break
              case 2:
                e(i[t[0]][a], i[t[1]][a], r)
                break
              default:
                for (var s = 0, l = []; s < n; s++) l[s] = i[t[s]][a]
                ;(l[s] = r), e.apply(null, l)
            }
          }
      }),
      (t.prototype.getDataExtent = function (t) {
        var e = this._chunks[t],
          n = [1 / 0, -1 / 0]
        if (!e) return n
        var i,
          r = this.count()
        if (!this._indices) return this._rawExtent[t].slice()
        if ((i = this._extent[t])) return i.slice()
        for (var o = (i = n)[0], a = i[1], s = 0; s < r; s++) {
          var l = e[this.getRawIndex(s)]
          l < o && (o = l), l > a && (a = l)
        }
        return (i = [o, a]), (this._extent[t] = i), i
      }),
      (t.prototype.getRawDataItem = function (t) {
        var e = this.getRawIndex(t)
        if (this._provider.persistent) return this._provider.getItem(e)
        for (var n = [], i = this._chunks, r = 0; r < i.length; r++)
          n.push(i[r][e])
        return n
      }),
      (t.prototype.clone = function (e, n) {
        var i,
          r,
          o = new t(),
          a = this._chunks,
          s =
            e &&
            Y(
              e,
              function (t, e) {
                return (t[e] = !0), t
              },
              {}
            )
        if (s)
          for (var l = 0; l < a.length; l++)
            o._chunks[l] = s[l]
              ? ((i = a[l]),
                (r = void 0),
                (r = i.constructor) === Array ? i.slice() : new r(i))
              : a[l]
        else o._chunks = a
        return (
          this._copyCommonProps(o),
          n || (o._indices = this._cloneIndices()),
          o._updateGetRawIdx(),
          o
        )
      }),
      (t.prototype._copyCommonProps = function (t) {
        ;(t._count = this._count),
          (t._rawCount = this._rawCount),
          (t._provider = this._provider),
          (t._dimensions = this._dimensions),
          (t._extent = B(this._extent)),
          (t._rawExtent = B(this._rawExtent))
      }),
      (t.prototype._cloneIndices = function () {
        if (this._indices) {
          var t = this._indices.constructor,
            e = void 0
          if (t === Array) {
            var n = this._indices.length
            e = new t(n)
            for (var i = 0; i < n; i++) e[i] = this._indices[i]
          } else e = new t(this._indices)
          return e
        }
        return null
      }),
      (t.prototype._getRawIdxIdentity = function (t) {
        return t
      }),
      (t.prototype._getRawIdx = function (t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
      }),
      (t.prototype._updateGetRawIdx = function () {
        this.getRawIndex = this._indices
          ? this._getRawIdx
          : this._getRawIdxIdentity
      }),
      (t.internalField = (function () {
        function t(t, e, n, i) {
          return hf(t[i], this._dimensions[i])
        }
        xf = {
          arrayRows: t,
          objectRows: function (t, e, n, i) {
            return hf(t[e], this._dimensions[i])
          },
          keyedColumns: t,
          original: function (t, e, n, i) {
            var r = t && (null == t.value ? t : t.value)
            return hf(r instanceof Array ? r[i] : r, this._dimensions[i])
          },
          typedArray: function (t, e, n, i) {
            return t[i]
          },
        }
      })()),
      t
    )
  })(),
  Df = (function () {
    function t(t) {
      ;(this._sourceList = []),
        (this._storeList = []),
        (this._upstreamSignList = []),
        (this._versionSignBase = 0),
        (this._dirty = !0),
        (this._sourceHost = t)
    }
    return (
      (t.prototype.dirty = function () {
        this._setLocalSource([], []), (this._storeList = []), (this._dirty = !0)
      }),
      (t.prototype._setLocalSource = function (t, e) {
        ;(this._sourceList = t),
          (this._upstreamSignList = e),
          this._versionSignBase++,
          this._versionSignBase > 9e10 && (this._versionSignBase = 0)
      }),
      (t.prototype._getVersionSign = function () {
        return this._sourceHost.uid + '_' + this._versionSignBase
      }),
      (t.prototype.prepareSource = function () {
        this._isDirty() && (this._createSource(), (this._dirty = !1))
      }),
      (t.prototype._createSource = function () {
        this._setLocalSource([], [])
        var t,
          e,
          n = this._sourceHost,
          i = this._getUpstreamSourceManagers(),
          r = !!i.length
        if (Af(n)) {
          var o = n,
            a = void 0,
            s = void 0,
            l = void 0
          if (r) {
            var u = i[0]
            u.prepareSource(),
              (a = (l = u.getSource()).data),
              (s = l.sourceFormat),
              (e = [u._getVersionSign()])
          } else
            (s = ot((a = o.get('data', !0))) ? 'typedArray' : 'original'),
              (e = [])
          var h = this._getSourceMetaRawOption() || {},
            c = (l && l.metaRawOption) || {},
            p = ut(h.seriesLayoutBy, c.seriesLayoutBy) || null,
            f = ut(h.sourceHeader, c.sourceHeader) || null,
            d = ut(h.dimensions, c.dimensions)
          t =
            p !== c.seriesLayoutBy || !!f != !!c.sourceHeader || d
              ? [
                  Fp(
                    a,
                    { seriesLayoutBy: p, sourceHeader: f, dimensions: d },
                    s
                  ),
                ]
              : []
        } else {
          var g = n
          if (r) {
            var y = this._applyTransform(i)
            ;(t = y.sourceList), (e = y.upstreamSignList)
          } else {
            ;(t = [
              Fp(g.get('source', !0), this._getSourceMetaRawOption(), null),
            ]),
              (e = [])
          }
        }
        this._setLocalSource(t, e)
      }),
      (t.prototype._applyTransform = function (t) {
        var e,
          n = this._sourceHost,
          i = n.get('transform', !0),
          r = n.get('fromTransformResult', !0)
        if (null != r) {
          1 !== t.length && Pf('')
        }
        var o,
          a = [],
          s = []
        return (
          U(t, function (t) {
            t.prepareSource()
            var e = t.getSource(r || 0)
            null == r || e || Pf(''), a.push(e), s.push(t._getVersionSign())
          }),
          i
            ? (e = (function (t, e, n) {
                var i = sr(t),
                  r = i.length
                r || ar('')
                for (var o = 0, a = r; o < a; o++)
                  (e = mf(i[o], e)),
                    o !== a - 1 && (e.length = Math.max(e.length, 1))
                return e
              })(i, a, n.componentIndex))
            : null != r &&
              (e = [
                ((o = a[0]),
                new Ep({
                  data: o.data,
                  sourceFormat: o.sourceFormat,
                  seriesLayoutBy: o.seriesLayoutBy,
                  dimensionsDefine: B(o.dimensionsDefine),
                  startIndex: o.startIndex,
                  dimensionsDetectedCount: o.dimensionsDetectedCount,
                })),
              ]),
          { sourceList: e, upstreamSignList: s }
        )
      }),
      (t.prototype._isDirty = function () {
        if (this._dirty) return !0
        for (
          var t = this._getUpstreamSourceManagers(), e = 0;
          e < t.length;
          e++
        ) {
          var n = t[e]
          if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign())
            return !0
        }
      }),
      (t.prototype.getSource = function (t) {
        t = t || 0
        var e = this._sourceList[t]
        if (!e) {
          var n = this._getUpstreamSourceManagers()
          return n[0] && n[0].getSource(t)
        }
        return e
      }),
      (t.prototype.getSharedDataStore = function (t) {
        var e = t.makeStoreSchema()
        return this._innerGetDataStore(e.dimensions, t.source, e.hash)
      }),
      (t.prototype._innerGetDataStore = function (t, e, n) {
        var i = this._storeList,
          r = i[0]
        r || (r = i[0] = {})
        var o = r[n]
        if (!o) {
          var a = this._getUpstreamSourceManagers()[0]
          Af(this._sourceHost) && a
            ? (o = a._innerGetDataStore(t, e, n))
            : (o = new If()).initData(new Xp(e, t.length), t),
            (r[n] = o)
        }
        return o
      }),
      (t.prototype._getUpstreamSourceManagers = function () {
        var t = this._sourceHost
        if (Af(t)) {
          var e = Vc(t)
          return e ? [e.getSourceManager()] : []
        }
        return X(
          (function (t) {
            return t.get('transform', !0) || t.get('fromTransformResult', !0)
              ? Tr(
                  t.ecModel,
                  'dataset',
                  {
                    index: t.get('fromDatasetIndex', !0),
                    id: t.get('fromDatasetId', !0),
                  },
                  Sr
                ).models
              : []
          })(t),
          function (t) {
            return t.getSourceManager()
          }
        )
      }),
      (t.prototype._getSourceMetaRawOption = function () {
        var t,
          e,
          n,
          i = this._sourceHost
        if (Af(i))
          (t = i.get('seriesLayoutBy', !0)),
            (e = i.get('sourceHeader', !0)),
            (n = i.get('dimensions', !0))
        else if (!this._getUpstreamSourceManagers().length) {
          var r = i
          ;(t = r.get('seriesLayoutBy', !0)),
            (e = r.get('sourceHeader', !0)),
            (n = r.get('dimensions', !0))
        }
        return { seriesLayoutBy: t, sourceHeader: e, dimensions: n }
      }),
      t
    )
  })()
function Af(t) {
  return 'series' === t.mainType
}
function Pf(t) {
  throw new Error(t)
}
function Of(t, e) {
  var n = t.color || '#6e7079',
    i = t.fontSize || 12,
    r = t.fontWeight || '400',
    o = t.color || '#464646',
    a = t.fontSize || 14,
    s = t.fontWeight || '900'
  return 'html' === e
    ? {
        nameStyle:
          'font-size:' +
          uc(i + '') +
          'px;color:' +
          uc(n) +
          ';font-weight:' +
          uc(r + ''),
        valueStyle:
          'font-size:' +
          uc(a + '') +
          'px;color:' +
          uc(o) +
          ';font-weight:' +
          uc(s + ''),
      }
    : {
        nameStyle: { fontSize: i, fill: n, fontWeight: r },
        valueStyle: { fontSize: a, fill: o, fontWeight: s },
      }
}
var Lf = [0, 10, 20, 30],
  Rf = ['', '\n', '\n\n', '\n\n\n']
function Bf(t, e) {
  return (e.type = t), e
}
function zf(t) {
  return wt(Ef, t.type) && Ef[t.type]
}
var Ef = {
  section: {
    planLayout: function (t) {
      var e = t.blocks.length,
        n = e > 1 || (e > 0 && !t.noHeader),
        i = 0
      U(t.blocks, function (t) {
        zf(t).planLayout(t)
        var e = t.__gapLevelBetweenSubBlocks
        e >= i &&
          (i = e + (!n || (e && ('section' !== t.type || t.noHeader)) ? 0 : 1))
      }),
        (t.__gapLevelBetweenSubBlocks = i)
    },
    build: function (t, e, n, i) {
      var r = e.noHeader,
        o = Ff(e),
        a = (function (t, e, n, i) {
          var r = [],
            o = e.blocks || []
          ft(!o || Q(o)), (o = o || [])
          var a = t.orderMode
          if (e.sortBlocks && a) {
            o = o.slice()
            var s = { valueAsc: 'asc', valueDesc: 'desc' }
            if (wt(s, a)) {
              var l = new cf(s[a], null)
              o.sort(function (t, e) {
                return l.evaluate(t.sortParam, e.sortParam)
              })
            } else 'seriesDesc' === a && o.reverse()
          }
          var u = Ff(e)
          if (
            (U(o, function (e, n) {
              var o = zf(e).build(t, e, n > 0 ? u.html : 0, i)
              null != o && r.push(o)
            }),
            !r.length)
          )
            return
          return 'richText' === t.renderMode
            ? r.join(u.richText)
            : Hf(r.join(''), n)
        })(t, e, r ? n : o.html, i)
      if (r) return a
      var s = hc(e.header, 'ordinal', t.useUTC),
        l = Of(i, t.renderMode).nameStyle
      return 'richText' === t.renderMode
        ? Vf(t, s, l) + o.richText + a
        : Hf('<div style="' + l + ';line-height:1;">' + uc(s) + '</div>' + a, n)
    },
  },
  nameValue: {
    planLayout: function (t) {
      t.__gapLevelBetweenSubBlocks = 0
    },
    build: function (t, e, n, i) {
      var r = t.renderMode,
        o = e.noName,
        a = e.noValue,
        s = !e.markerType,
        l = e.name,
        u = e.value,
        h = t.useUTC
      if (!o || !a) {
        var c = s
            ? ''
            : t.markupStyleCreator.makeTooltipMarker(
                e.markerType,
                e.markerColor || '#333',
                r
              ),
          p = o ? '' : hc(l, 'ordinal', h),
          f = e.valueType,
          d = a
            ? []
            : Q(u)
            ? X(u, function (t, e) {
                return hc(t, Q(f) ? f[e] : f, h)
              })
            : [hc(u, Q(f) ? f[0] : f, h)],
          g = !s || !o,
          y = !s && o,
          v = Of(i, r),
          m = v.nameStyle,
          _ = v.valueStyle
        return 'richText' === r
          ? (s ? '' : c) +
              (o ? '' : Vf(t, p, m)) +
              (a
                ? ''
                : (function (t, e, n, i, r) {
                    var o = [r],
                      a = i ? 10 : 20
                    return (
                      n && o.push({ padding: [0, 0, 0, a], align: 'right' }),
                      t.markupStyleCreator.wrapRichTextStyle(e.join('  '), o)
                    )
                  })(t, d, g, y, _))
          : Hf(
              (s ? '' : c) +
                (o
                  ? ''
                  : (function (t, e, n) {
                      return (
                        '<span style="' +
                        n +
                        ';' +
                        (e ? 'margin-left:2px' : '') +
                        '">' +
                        uc(t) +
                        '</span>'
                      )
                    })(p, !s, m)) +
                (a
                  ? ''
                  : (function (t, e, n, i) {
                      var r = n ? '10px' : '20px'
                      return (
                        '<span style="' +
                        (e ? 'float:right;margin-left:' + r : '') +
                        ';' +
                        i +
                        '">' +
                        X(t, function (t) {
                          return uc(t)
                        }).join('&nbsp;&nbsp;') +
                        '</span>'
                      )
                    })(d, g, y, _)),
              n
            )
      }
    },
  },
}
function Nf(t, e, n, i, r, o) {
  if (t) {
    var a = zf(t)
    a.planLayout(t)
    var s = { useUTC: r, renderMode: n, orderMode: i, markupStyleCreator: e }
    return a.build(s, t, 0, o)
  }
}
function Ff(t) {
  var e = t.__gapLevelBetweenSubBlocks
  return { html: Lf[e], richText: Rf[e] }
}
function Hf(t, e) {
  return (
    '<div style="' +
    ('margin: ' + e + 'px 0 0') +
    ';line-height:1;">' +
    t +
    '<div style="clear:both"></div></div>'
  )
}
function Vf(t, e, n) {
  return t.markupStyleCreator.wrapRichTextStyle(e, n)
}
function Wf(t, e) {
  return dc(t.getData().getItemVisual(e, 'style')[t.visualDrawType])
}
function Gf(t, e) {
  var n = t.get('padding')
  return null != n ? n : 'richText' === e ? [8, 10] : 10
}
var Uf = (function () {
  function t() {
    ;(this.richTextStyles = {}), (this._nextStyleNameId = ir())
  }
  return (
    (t.prototype._generateStyleName = function () {
      return '__EC_aUTo_' + this._nextStyleNameId++
    }),
    (t.prototype.makeTooltipMarker = function (t, e, n) {
      var i = 'richText' === n ? this._generateStyleName() : null,
        r = (function (t, e) {
          var n = tt(t) ? { color: t, extraCssText: e } : t || {},
            i = n.color,
            r = n.type
          e = n.extraCssText
          var o = n.renderMode || 'html'
          return i
            ? 'html' === o
              ? 'subItem' === r
                ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
                  uc(i) +
                  ';' +
                  (e || '') +
                  '"></span>'
                : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
                  uc(i) +
                  ';' +
                  (e || '') +
                  '"></span>'
              : {
                  renderMode: o,
                  content: '{' + (n.markerId || 'markerX') + '|}  ',
                  style:
                    'subItem' === r
                      ? {
                          width: 4,
                          height: 4,
                          borderRadius: 2,
                          backgroundColor: i,
                        }
                      : {
                          width: 10,
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: i,
                        },
                }
            : ''
        })({ color: e, type: t, renderMode: n, markerId: i })
      return tt(r) ? r : ((this.richTextStyles[i] = r.style), r.content)
    }),
    (t.prototype.wrapRichTextStyle = function (t, e) {
      var n = {}
      Q(e)
        ? U(e, function (t) {
            return N(n, t)
          })
        : N(n, e)
      var i = this._generateStyleName()
      return (this.richTextStyles[i] = n), '{' + i + '|' + t + '}'
    }),
    t
  )
})()
function Xf(t) {
  var e,
    n,
    i,
    r,
    o = t.series,
    a = t.dataIndex,
    s = t.multipleSeries,
    l = o.getData(),
    u = l.mapDimensionsAll('defaultedTooltip'),
    h = u.length,
    c = o.getRawValue(a),
    p = Q(c),
    f = Wf(o, a)
  if (h > 1 || (p && !h)) {
    var d = (function (t, e, n, i, r) {
      var o = e.getData(),
        a = Y(
          t,
          function (t, e, n) {
            var i = o.getDimensionInfo(n)
            return t || (i && !1 !== i.tooltip && null != i.displayName)
          },
          !1
        ),
        s = [],
        l = [],
        u = []
      function h(t, e) {
        var n = o.getDimensionInfo(e)
        n &&
          !1 !== n.otherDims.tooltip &&
          (a
            ? u.push(
                Bf('nameValue', {
                  markerType: 'subItem',
                  markerColor: r,
                  name: n.displayName,
                  value: t,
                  valueType: n.type,
                })
              )
            : (s.push(t), l.push(n.type)))
      }
      return (
        i.length
          ? U(i, function (t) {
              h(nf(o, n, t), t)
            })
          : U(t, h),
        { inlineValues: s, inlineValueTypes: l, blocks: u }
      )
    })(c, o, a, u, f)
    ;(e = d.inlineValues),
      (n = d.inlineValueTypes),
      (i = d.blocks),
      (r = d.inlineValues[0])
  } else if (h) {
    var g = l.getDimensionInfo(u[0])
    ;(r = e = nf(l, a, u[0])), (n = g.type)
  } else r = e = p ? c[0] : c
  var y = yr(o),
    v = (y && o.name) || '',
    m = l.getName(a),
    _ = s ? v : m
  return Bf('section', {
    header: v,
    noHeader: s || !y,
    sortParam: r,
    blocks: [
      Bf('nameValue', {
        markerType: 'item',
        markerColor: f,
        name: _,
        noName: !dt(_),
        value: e,
        valueType: n,
      }),
    ].concat(i || []),
  })
}
var Yf = _r()
function jf(t, e) {
  return t.getName(e) || t.getId(e)
}
var qf = (function (t) {
  function e() {
    var e = (null !== t && t.apply(this, arguments)) || this
    return (e._selectedDataIndicesMap = {}), e
  }
  var n
  return (
    g(e, t),
    (e.prototype.init = function (t, e, n) {
      ;(this.seriesIndex = this.componentIndex),
        (this.dataTask = sf({ count: Kf, reset: $f })),
        (this.dataTask.context = { model: this }),
        this.mergeDefaultAndTheme(t, n),
        (Yf(this).sourceManager = new Df(this)).prepareSource()
      var i = this.getInitialData(t, n)
      Jf(i, this),
        (this.dataTask.context.data = i),
        (Yf(this).dataBeforeProcessed = i),
        Zf(this),
        this._initSelectedMapFromData(i)
    }),
    (e.prototype.mergeDefaultAndTheme = function (t, e) {
      var n = Tc(this),
        i = n ? Cc(t) : {},
        r = this.subType
      Dc.hasClass(r) && (r += 'Series'),
        z(t, e.getTheme().get(this.subType)),
        z(t, this.getDefaultOption()),
        lr(t, 'label', ['show']),
        this.fillDataTextStyle(t.data),
        n && Mc(t, i, n)
    }),
    (e.prototype.mergeOption = function (t, e) {
      ;(t = z(this.option, t, !0)), this.fillDataTextStyle(t.data)
      var n = Tc(this)
      n && Mc(this.option, t, n)
      var i = Yf(this).sourceManager
      i.dirty(), i.prepareSource()
      var r = this.getInitialData(t, e)
      Jf(r, this),
        this.dataTask.dirty(),
        (this.dataTask.context.data = r),
        (Yf(this).dataBeforeProcessed = r),
        Zf(this),
        this._initSelectedMapFromData(r)
    }),
    (e.prototype.fillDataTextStyle = function (t) {
      if (t && !ot(t))
        for (var e = ['show'], n = 0; n < t.length; n++)
          t[n] && t[n].label && lr(t[n], 'label', e)
    }),
    (e.prototype.getInitialData = function (t, e) {}),
    (e.prototype.appendData = function (t) {
      this.getRawData().appendData(t.data)
    }),
    (e.prototype.getData = function (t) {
      var e = ed(this)
      if (e) {
        var n = e.context.data
        return null == t ? n : n.getLinkedData(t)
      }
      return Yf(this).data
    }),
    (e.prototype.getAllData = function () {
      var t = this.getData()
      return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{ data: t }]
    }),
    (e.prototype.setData = function (t) {
      var e = ed(this)
      if (e) {
        var n = e.context
        ;(n.outputData = t), e !== this.dataTask && (n.data = t)
      }
      Yf(this).data = t
    }),
    (e.prototype.getEncode = function () {
      var t = this.get('encode', !0)
      if (t) return mt(t)
    }),
    (e.prototype.getSourceManager = function () {
      return Yf(this).sourceManager
    }),
    (e.prototype.getSource = function () {
      return this.getSourceManager().getSource()
    }),
    (e.prototype.getRawData = function () {
      return Yf(this).dataBeforeProcessed
    }),
    (e.prototype.getColorBy = function () {
      return this.get('colorBy') || 'series'
    }),
    (e.prototype.isColorBySeries = function () {
      return 'series' === this.getColorBy()
    }),
    (e.prototype.getBaseAxis = function () {
      var t = this.coordinateSystem
      return t && t.getBaseAxis && t.getBaseAxis()
    }),
    (e.prototype.formatTooltip = function (t, e, n) {
      return Xf({ series: this, dataIndex: t, multipleSeries: e })
    }),
    (e.prototype.isAnimationEnabled = function () {
      if (x.node) return !1
      var t = this.getShallow('animation')
      return (
        t &&
          this.getData().count() > this.getShallow('animationThreshold') &&
          (t = !1),
        !!t
      )
    }),
    (e.prototype.restoreData = function () {
      this.dataTask.dirty()
    }),
    (e.prototype.getColorFromPalette = function (t, e, n) {
      var i = this.ecModel,
        r = Kc.prototype.getColorFromPalette.call(this, t, e, n)
      return r || (r = i.getColorFromPalette(t, e, n)), r
    }),
    (e.prototype.coordDimToDataDim = function (t) {
      return this.getRawData().mapDimensionsAll(t)
    }),
    (e.prototype.getProgressive = function () {
      return this.get('progressive')
    }),
    (e.prototype.getProgressiveThreshold = function () {
      return this.get('progressiveThreshold')
    }),
    (e.prototype.select = function (t, e) {
      this._innerSelect(this.getData(e), t)
    }),
    (e.prototype.unselect = function (t, e) {
      var n = this.option.selectedMap
      if (n)
        for (var i = this.getData(e), r = 0; r < t.length; r++) {
          var o = jf(i, t[r])
          ;(n[o] = !1), (this._selectedDataIndicesMap[o] = -1)
        }
    }),
    (e.prototype.toggleSelect = function (t, e) {
      for (var n = [], i = 0; i < t.length; i++)
        (n[0] = t[i]),
          this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e)
    }),
    (e.prototype.getSelectedDataIndices = function () {
      for (
        var t = this._selectedDataIndicesMap, e = Z(t), n = [], i = 0;
        i < e.length;
        i++
      ) {
        var r = t[e[i]]
        r >= 0 && n.push(r)
      }
      return n
    }),
    (e.prototype.isSelected = function (t, e) {
      var n = this.option.selectedMap
      return (n && n[jf(this.getData(e), t)]) || !1
    }),
    (e.prototype.isUniversalTransitionEnabled = function () {
      if (this.__universalTransitionEnabled) return !0
      var t = this.option.universalTransition
      return !!t && (!0 === t || (t && t.enabled))
    }),
    (e.prototype._innerSelect = function (t, e) {
      var n,
        i,
        r = this.option.selectedMode,
        o = e.length
      if (r && o)
        if ('multiple' === r)
          for (
            var a = this.option.selectedMap || (this.option.selectedMap = {}),
              s = 0;
            s < o;
            s++
          ) {
            var l = e[s]
            ;(a[(h = jf(t, l))] = !0),
              (this._selectedDataIndicesMap[h] = t.getRawIndex(l))
          }
        else if ('single' === r || !0 === r) {
          var u = e[o - 1],
            h = jf(t, u)
          ;(this.option.selectedMap = (((n = {})[h] = !0), n)),
            (this._selectedDataIndicesMap =
              (((i = {})[h] = t.getRawIndex(u)), i))
        }
    }),
    (e.prototype._initSelectedMapFromData = function (t) {
      if (!this.option.selectedMap) {
        var e = []
        t.hasItemOption &&
          t.each(function (n) {
            var i = t.getRawDataItem(n)
            i && i.selected && e.push(n)
          }),
          e.length > 0 && this._innerSelect(t, e)
      }
    }),
    (e.registerClass = function (t) {
      return Dc.registerClass(t)
    }),
    (e.protoInitialize =
      (((n = e.prototype).type = 'series.__base__'),
      (n.seriesIndex = 0),
      (n.ignoreStyleOnData = !1),
      (n.hasSymbolVisual = !1),
      (n.defaultSymbol = 'circle'),
      (n.visualStyleAccessPath = 'itemStyle'),
      void (n.visualDrawType = 'fill'))),
    e
  )
})(Dc)
function Zf(t) {
  var e = t.name
  yr(t) ||
    (t.name =
      (function (t) {
        var e = t.getRawData(),
          n = e.mapDimensionsAll('seriesName'),
          i = []
        return (
          U(n, function (t) {
            var n = e.getDimensionInfo(t)
            n.displayName && i.push(n.displayName)
          }),
          i.join(' ')
        )
      })(t) || e)
}
function Kf(t) {
  return t.model.getRawData().count()
}
function $f(t) {
  var e = t.model
  return e.setData(e.getRawData().cloneShallow()), Qf
}
function Qf(t, e) {
  e.outputData &&
    t.end > e.outputData.count() &&
    e.model.getRawData().cloneShallow(e.outputData)
}
function Jf(t, e) {
  U(_t(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function (n) {
    t.wrapMethod(n, $(td, e))
  })
}
function td(t, e) {
  var n = ed(t)
  return n && n.setOutputEnd((e || this).count()), e
}
function ed(t) {
  var e = (t.ecModel || {}).scheduler,
    n = e && e.getPipeline(t.uid)
  if (n) {
    var i = n.currentTask
    if (i) {
      var r = i.agentStubMap
      r && (i = r.get(t.uid))
    }
    return i
  }
}
W(qf, of), W(qf, Kc), Or(qf, Dc)
var nd = qf,
  id = (function () {
    function t() {
      ;(this.group = new Ri()), (this.uid = Ih('viewComponent'))
    }
    return (
      (t.prototype.init = function (t, e) {}),
      (t.prototype.render = function (t, e, n, i) {}),
      (t.prototype.dispose = function (t, e) {}),
      (t.prototype.updateView = function (t, e, n, i) {}),
      (t.prototype.updateLayout = function (t, e, n, i) {}),
      (t.prototype.updateVisual = function (t, e, n, i) {}),
      (t.prototype.blurSeries = function (t, e) {}),
      t
    )
  })()
Ar(id), zr(id)
var rd = id
function od() {
  var t = _r()
  return function (e) {
    var n = t(e),
      i = e.pipelineContext,
      r = !!n.large,
      o = !!n.progressiveRender,
      a = (n.large = !(!i || !i.large)),
      s = (n.progressiveRender = !(!i || !i.progressiveRender))
    return !(r === a && o === s) && 'reset'
  }
}
var ad = _r(),
  sd = od(),
  ld = (function () {
    function t() {
      ;(this.group = new Ri()),
        (this.uid = Ih('viewChart')),
        (this.renderTask = sf({ plan: cd, reset: pd })),
        (this.renderTask.context = { view: this })
    }
    return (
      (t.prototype.init = function (t, e) {}),
      (t.prototype.render = function (t, e, n, i) {}),
      (t.prototype.highlight = function (t, e, n, i) {
        hd(t.getData(), i, 'emphasis')
      }),
      (t.prototype.downplay = function (t, e, n, i) {
        hd(t.getData(), i, 'normal')
      }),
      (t.prototype.remove = function (t, e) {
        this.group.removeAll()
      }),
      (t.prototype.dispose = function (t, e) {}),
      (t.prototype.updateView = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (t.prototype.updateLayout = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (t.prototype.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
      }),
      (t.markUpdateMethod = function (t, e) {
        ad(t).updateMethod = e
      }),
      (t.protoInitialize = void (t.prototype.type = 'chart')),
      t
    )
  })()
function ud(t, e, n) {
  t && ('emphasis' === e ? Ls : Rs)(t, n)
}
function hd(t, e, n) {
  var i = mr(t, e),
    r =
      e && null != e.highlightKey
        ? (function (t) {
            var e = hs[t]
            return null == e && us <= 32 && (e = hs[t] = us++), e
          })(e.highlightKey)
        : null
  null != i
    ? U(sr(i), function (e) {
        ud(t.getItemGraphicEl(e), n, r)
      })
    : t.eachItemGraphicEl(function (t) {
        ud(t, n, r)
      })
}
function cd(t) {
  return sd(t.model)
}
function pd(t) {
  var e = t.model,
    n = t.ecModel,
    i = t.api,
    r = t.payload,
    o = e.pipelineContext.progressiveRender,
    a = t.view,
    s = r && ad(r).updateMethod,
    l = o ? 'incrementalPrepareRender' : s && a[s] ? s : 'render'
  return 'render' !== l && a[l](e, n, i, r), fd[l]
}
Ar(ld), zr(ld)
var fd = {
    incrementalPrepareRender: {
      progress: function (t, e) {
        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
      },
    },
    render: {
      forceFirstProgress: !0,
      progress: function (t, e) {
        e.view.render(e.model, e.ecModel, e.api, e.payload)
      },
    },
  },
  dd = ld,
  gd = '\0__throttleRate'
function yd(t, e, n) {
  var i,
    r,
    o,
    a,
    s,
    l = 0,
    u = 0,
    h = null
  function c() {
    ;(u = new Date().getTime()), (h = null), t.apply(o, a || [])
  }
  e = e || 0
  var p = function () {
    for (var t = [], p = 0; p < arguments.length; p++) t[p] = arguments[p]
    ;(i = new Date().getTime()), (o = this), (a = t)
    var f = s || e,
      d = s || n
    ;(s = null),
      (r = i - (d ? l : u) - f),
      clearTimeout(h),
      d ? (h = setTimeout(c, f)) : r >= 0 ? c() : (h = setTimeout(c, -r)),
      (l = i)
  }
  return (
    (p.clear = function () {
      h && (clearTimeout(h), (h = null))
    }),
    (p.debounceNextCall = function (t) {
      s = t
    }),
    p
  )
}
function vd(t, e, n, i) {
  var r = t[e]
  if (r) {
    var o = r['\0__throttleOriginMethod'] || r,
      a = r['\0__throttleType']
    if (r[gd] !== n || a !== i) {
      if (null == n || !i) return (t[e] = o)
      ;((r = t[e] = yd(o, n, 'debounce' === i))['\0__throttleOriginMethod'] =
        o),
        (r['\0__throttleType'] = i),
        (r[gd] = n)
    }
    return r
  }
}
var md = _r(),
  _d = { itemStyle: Er(bh, !0), lineStyle: Er(_h, !0) },
  xd = { lineStyle: 'stroke', itemStyle: 'fill' }
function wd(t, e) {
  var n = t.visualStyleMapper || _d[e]
  return n || (console.warn("Unkown style type '" + e + "'."), _d.itemStyle)
}
function bd(t, e) {
  var n = t.visualDrawType || xd[e]
  return n || (console.warn("Unkown style type '" + e + "'."), 'fill')
}
var Sd = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (t, e) {
      var n = t.getData(),
        i = t.visualStyleAccessPath || 'itemStyle',
        r = t.getModel(i),
        o = wd(t, i)(r),
        a = r.getShallow('decal')
      a && (n.setVisual('decal', a), (a.dirty = !0))
      var s = bd(t, i),
        l = o[s],
        u = J(l) ? l : null,
        h = 'auto' === o.fill || 'auto' === o.stroke
      if (!o[s] || u || h) {
        var c = t.getColorFromPalette(t.name, null, e.getSeriesCount())
        o[s] || ((o[s] = c), n.setVisual('colorFromPalette', !0)),
          (o.fill =
            'auto' === o.fill || 'function' == typeof o.fill ? c : o.fill),
          (o.stroke =
            'auto' === o.stroke || 'function' == typeof o.stroke ? c : o.stroke)
      }
      if (
        (n.setVisual('style', o),
        n.setVisual('drawType', s),
        !e.isSeriesFiltered(t) && u)
      )
        return (
          n.setVisual('colorFromPalette', !1),
          {
            dataEach: function (e, n) {
              var i = t.getDataParams(n),
                r = N({}, o)
              ;(r[s] = u(i)), e.setItemVisual(n, 'style', r)
            },
          }
        )
    },
  },
  Td = new Ch(),
  Md = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (t, e) {
      if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t)) {
        var n = t.getData(),
          i = t.visualStyleAccessPath || 'itemStyle',
          r = wd(t, i),
          o = n.getVisual('drawType')
        return {
          dataEach: n.hasItemOption
            ? function (t, e) {
                var n = t.getRawDataItem(e)
                if (n && n[i]) {
                  Td.option = n[i]
                  var a = r(Td)
                  N(t.ensureUniqueItemVisual(e, 'style'), a),
                    Td.option.decal &&
                      (t.setItemVisual(e, 'decal', Td.option.decal),
                      (Td.option.decal.dirty = !0)),
                    o in a && t.setItemVisual(e, 'colorFromPalette', !1)
                }
              }
            : null,
        }
      }
    },
  },
  Cd = {
    performRawSeries: !0,
    overallReset: function (t) {
      var e = mt()
      t.eachSeries(function (t) {
        var n = t.getColorBy()
        if (!t.isColorBySeries()) {
          var i = t.type + '-' + n,
            r = e.get(i)
          r || ((r = {}), e.set(i, r)), (md(t).scope = r)
        }
      }),
        t.eachSeries(function (e) {
          if (!e.isColorBySeries() && !t.isSeriesFiltered(e)) {
            var n = e.getRawData(),
              i = {},
              r = e.getData(),
              o = md(e).scope,
              a = e.visualStyleAccessPath || 'itemStyle',
              s = bd(e, a)
            r.each(function (t) {
              var e = r.getRawIndex(t)
              i[e] = t
            }),
              n.each(function (t) {
                var a = i[t]
                if (r.getItemVisual(a, 'colorFromPalette')) {
                  var l = r.ensureUniqueItemVisual(a, 'style'),
                    u = n.getName(t) || t + '',
                    h = n.count()
                  l[s] = e.getColorFromPalette(u, o, h)
                }
              })
          }
        })
    },
  },
  kd = Math.PI
var Id = (function () {
  function t(t, e, n, i) {
    ;(this._stageTaskMap = mt()),
      (this.ecInstance = t),
      (this.api = e),
      (n = this._dataProcessorHandlers = n.slice()),
      (i = this._visualHandlers = i.slice()),
      (this._allHandlers = n.concat(i))
  }
  return (
    (t.prototype.restoreData = function (t, e) {
      t.restoreData(e),
        this._stageTaskMap.each(function (t) {
          var e = t.overallTask
          e && e.dirty()
        })
    }),
    (t.prototype.getPerformArgs = function (t, e) {
      if (t.__pipeline) {
        var n = this._pipelineMap.get(t.__pipeline.id),
          i = n.context,
          r =
            !e &&
            n.progressiveEnabled &&
            (!i || i.progressiveRender) &&
            t.__idxInPipeline > n.blockIndex
              ? n.step
              : null,
          o = i && i.modDataCount
        return {
          step: r,
          modBy: null != o ? Math.ceil(o / r) : null,
          modDataCount: o,
        }
      }
    }),
    (t.prototype.getPipeline = function (t) {
      return this._pipelineMap.get(t)
    }),
    (t.prototype.updateStreamModes = function (t, e) {
      var n = this._pipelineMap.get(t.uid),
        i = t.getData().count(),
        r =
          n.progressiveEnabled &&
          e.incrementalPrepareRender &&
          i >= n.threshold,
        o = t.get('large') && i >= t.get('largeThreshold'),
        a = 'mod' === t.get('progressiveChunkMode') ? i : null
      t.pipelineContext = n.context = {
        progressiveRender: r,
        modDataCount: a,
        large: o,
      }
    }),
    (t.prototype.restorePipelines = function (t) {
      var e = this,
        n = (e._pipelineMap = mt())
      t.eachSeries(function (t) {
        var i = t.getProgressive(),
          r = t.uid
        n.set(r, {
          id: r,
          head: null,
          tail: null,
          threshold: t.getProgressiveThreshold(),
          progressiveEnabled:
            i && !(t.preventIncremental && t.preventIncremental()),
          blockIndex: -1,
          step: Math.round(i || 700),
          count: 0,
        }),
          e._pipe(t, t.dataTask)
      })
    }),
    (t.prototype.prepareStageTasks = function () {
      var t = this._stageTaskMap,
        e = this.api.getModel(),
        n = this.api
      U(
        this._allHandlers,
        function (i) {
          var r = t.get(i.uid) || t.set(i.uid, {})
          ft(!(i.reset && i.overallReset), ''),
            i.reset && this._createSeriesStageTask(i, r, e, n),
            i.overallReset && this._createOverallStageTask(i, r, e, n)
        },
        this
      )
    }),
    (t.prototype.prepareView = function (t, e, n, i) {
      var r = t.renderTask,
        o = r.context
      ;(o.model = e),
        (o.ecModel = n),
        (o.api = i),
        (r.__block = !t.incrementalPrepareRender),
        this._pipe(e, r)
    }),
    (t.prototype.performDataProcessorTasks = function (t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, { block: !0 })
    }),
    (t.prototype.performVisualTasks = function (t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n)
    }),
    (t.prototype._performStageTasks = function (t, e, n, i) {
      i = i || {}
      var r = !1,
        o = this
      function a(t, e) {
        return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
      }
      U(t, function (t, s) {
        if (!i.visualType || i.visualType === t.visualType) {
          var l = o._stageTaskMap.get(t.uid),
            u = l.seriesTaskMap,
            h = l.overallTask
          if (h) {
            var c,
              p = h.agentStubMap
            p.each(function (t) {
              a(i, t) && (t.dirty(), (c = !0))
            }),
              c && h.dirty(),
              o.updatePayload(h, n)
            var f = o.getPerformArgs(h, i.block)
            p.each(function (t) {
              t.perform(f)
            }),
              h.perform(f) && (r = !0)
          } else
            u &&
              u.each(function (s, l) {
                a(i, s) && s.dirty()
                var u = o.getPerformArgs(s, i.block)
                ;(u.skip =
                  !t.performRawSeries && e.isSeriesFiltered(s.context.model)),
                  o.updatePayload(s, n),
                  s.perform(u) && (r = !0)
              })
        }
      }),
        (this.unfinished = r || this.unfinished)
    }),
    (t.prototype.performSeriesTasks = function (t) {
      var e
      t.eachSeries(function (t) {
        e = t.dataTask.perform() || e
      }),
        (this.unfinished = e || this.unfinished)
    }),
    (t.prototype.plan = function () {
      this._pipelineMap.each(function (t) {
        var e = t.tail
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline
            break
          }
          e = e.getUpstream()
        } while (e)
      })
    }),
    (t.prototype.updatePayload = function (t, e) {
      'remain' !== e && (t.context.payload = e)
    }),
    (t.prototype._createSeriesStageTask = function (t, e, n, i) {
      var r = this,
        o = e.seriesTaskMap,
        a = (e.seriesTaskMap = mt()),
        s = t.seriesType,
        l = t.getTargetSeries
      function u(e) {
        var s = e.uid,
          l = a.set(
            s,
            (o && o.get(s)) || sf({ plan: Ld, reset: Rd, count: Ed })
          )
        ;(l.context = {
          model: e,
          ecModel: n,
          api: i,
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: r,
        }),
          r._pipe(e, l)
      }
      t.createOnAllSeries
        ? n.eachRawSeries(u)
        : s
        ? n.eachRawSeriesByType(s, u)
        : l && l(n, i).each(u)
    }),
    (t.prototype._createOverallStageTask = function (t, e, n, i) {
      var r = this,
        o = (e.overallTask = e.overallTask || sf({ reset: Dd }))
      o.context = {
        ecModel: n,
        api: i,
        overallReset: t.overallReset,
        scheduler: r,
      }
      var a = o.agentStubMap,
        s = (o.agentStubMap = mt()),
        l = t.seriesType,
        u = t.getTargetSeries,
        h = !0,
        c = !1
      function p(t) {
        var e = t.uid,
          n = s.set(
            e,
            (a && a.get(e)) || ((c = !0), sf({ reset: Ad, onDirty: Od }))
          )
        ;(n.context = { model: t, overallProgress: h }),
          (n.agent = o),
          (n.__block = h),
          r._pipe(t, n)
      }
      ft(!t.createOnAllSeries, ''),
        l
          ? n.eachRawSeriesByType(l, p)
          : u
          ? u(n, i).each(p)
          : ((h = !1), U(n.getSeries(), p)),
        c && o.dirty()
    }),
    (t.prototype._pipe = function (t, e) {
      var n = t.uid,
        i = this._pipelineMap.get(n)
      !i.head && (i.head = e),
        i.tail && i.tail.pipe(e),
        (i.tail = e),
        (e.__idxInPipeline = i.count++),
        (e.__pipeline = i)
    }),
    (t.wrapStageHandler = function (t, e) {
      return (
        J(t) && (t = { overallReset: t, seriesType: Nd(t) }),
        (t.uid = Ih('stageHandler')),
        e && (t.visualType = e),
        t
      )
    }),
    t
  )
})()
function Dd(t) {
  t.overallReset(t.ecModel, t.api, t.payload)
}
function Ad(t) {
  return t.overallProgress && Pd
}
function Pd() {
  this.agent.dirty(), this.getDownstream().dirty()
}
function Od() {
  this.agent && this.agent.dirty()
}
function Ld(t) {
  return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null
}
function Rd(t) {
  t.useClearVisual && t.data.clearAllVisual()
  var e = (t.resetDefines = sr(t.reset(t.model, t.ecModel, t.api, t.payload)))
  return e.length > 1
    ? X(e, function (t, e) {
        return zd(e)
      })
    : Bd
}
var Bd = zd(0)
function zd(t) {
  return function (e, n) {
    var i = n.data,
      r = n.resetDefines[t]
    if (r && r.dataEach) for (var o = e.start; o < e.end; o++) r.dataEach(i, o)
    else r && r.progress && r.progress(e, i)
  }
}
function Ed(t) {
  return t.data.count()
}
function Nd(t) {
  Fd = null
  try {
    t(Hd, Vd)
  } catch (e) {}
  return Fd
}
var Fd,
  Hd = {},
  Vd = {}
function Wd(t, e) {
  for (var n in e.prototype) t[n] = bt
}
Wd(Hd, ip),
  Wd(Vd, op),
  (Hd.eachSeriesByType = Hd.eachRawSeriesByType =
    function (t) {
      Fd = t
    }),
  (Hd.eachComponent = function (t) {
    'series' === t.mainType && t.subType && (Fd = t.subType)
  })
var Gd = Id,
  Ud = [
    '#37A2DA',
    '#32C5E9',
    '#67E0E3',
    '#9FE6B8',
    '#FFDB5C',
    '#ff9f7f',
    '#fb7293',
    '#E062AE',
    '#E690D1',
    '#e7bcf3',
    '#9d96f5',
    '#8378EA',
    '#96BFFF',
  ],
  Xd = {
    color: Ud,
    colorLayer: [
      ['#37A2DA', '#ffd85c', '#fd7b5f'],
      ['#37A2DA', '#67E0E3', '#FFDB5C', '#ff9f7f', '#E062AE', '#9d96f5'],
      [
        '#37A2DA',
        '#32C5E9',
        '#9FE6B8',
        '#FFDB5C',
        '#ff9f7f',
        '#fb7293',
        '#e7bcf3',
        '#8378EA',
        '#96BFFF',
      ],
      Ud,
    ],
  },
  Yd = [
    '#4992ff',
    '#7cffb2',
    '#fddd60',
    '#ff6e76',
    '#58d9f9',
    '#05c091',
    '#ff8a45',
    '#8d48e3',
    '#dd79ff',
  ],
  jd = {
    darkMode: !0,
    color: Yd,
    backgroundColor: '#100C2A',
    axisPointer: {
      lineStyle: { color: '#817f91' },
      crossStyle: { color: '#817f91' },
      label: { color: '#fff' },
    },
    legend: { textStyle: { color: '#B9B8CE' } },
    textStyle: { color: '#B9B8CE' },
    title: {
      textStyle: { color: '#EEF1FA' },
      subtextStyle: { color: '#B9B8CE' },
    },
    toolbox: { iconStyle: { borderColor: '#B9B8CE' } },
    dataZoom: {
      borderColor: '#71708A',
      textStyle: { color: '#B9B8CE' },
      brushStyle: { color: 'rgba(135,163,206,0.3)' },
      handleStyle: { color: '#353450', borderColor: '#C5CBE3' },
      moveHandleStyle: { color: '#B0B6C3', opacity: 0.3 },
      fillerColor: 'rgba(135,163,206,0.2)',
      emphasis: {
        handleStyle: { borderColor: '#91B7F2', color: '#4D587D' },
        moveHandleStyle: { color: '#636D9A', opacity: 0.7 },
      },
      dataBackground: {
        lineStyle: { color: '#71708A', width: 1 },
        areaStyle: { color: '#71708A' },
      },
      selectedDataBackground: {
        lineStyle: { color: '#87A3CE' },
        areaStyle: { color: '#87A3CE' },
      },
    },
    visualMap: { textStyle: { color: '#B9B8CE' } },
    timeline: {
      lineStyle: { color: '#B9B8CE' },
      label: { color: '#B9B8CE' },
      controlStyle: { color: '#B9B8CE', borderColor: '#B9B8CE' },
    },
    calendar: {
      itemStyle: { color: '#100C2A' },
      dayLabel: { color: '#B9B8CE' },
      monthLabel: { color: '#B9B8CE' },
      yearLabel: { color: '#B9B8CE' },
    },
    timeAxis: {
      axisLine: { lineStyle: { color: '#B9B8CE' } },
      splitLine: { lineStyle: { color: '#484753' } },
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'],
        },
      },
      minorSplitLine: { lineStyle: { color: '#20203B' } },
    },
    logAxis: {
      axisLine: { lineStyle: { color: '#B9B8CE' } },
      splitLine: { lineStyle: { color: '#484753' } },
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'],
        },
      },
      minorSplitLine: { lineStyle: { color: '#20203B' } },
    },
    valueAxis: {
      axisLine: { lineStyle: { color: '#B9B8CE' } },
      splitLine: { lineStyle: { color: '#484753' } },
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'],
        },
      },
      minorSplitLine: { lineStyle: { color: '#20203B' } },
    },
    categoryAxis: {
      axisLine: { lineStyle: { color: '#B9B8CE' } },
      splitLine: { lineStyle: { color: '#484753' } },
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'],
        },
      },
      minorSplitLine: { lineStyle: { color: '#20203B' } },
    },
    line: { symbol: 'circle' },
    graph: { color: Yd },
    gauge: {
      title: { color: '#B9B8CE' },
      axisLine: { lineStyle: { color: [[1, 'rgba(207,212,219,0.2)']] } },
      axisLabel: { color: '#B9B8CE' },
      detail: { color: '#EEF1FA' },
    },
    candlestick: {
      itemStyle: {
        color: '#f64e56',
        color0: '#54ea92',
        borderColor: '#f64e56',
        borderColor0: '#54ea92',
      },
    },
  }
jd.categoryAxis.splitLine.show = !1
var qd = jd,
  Zd = (function () {
    function t() {}
    return (
      (t.prototype.normalizeQuery = function (t) {
        var e = {},
          n = {},
          i = {}
        if (tt(t)) {
          var r = Dr(t)
          ;(e.mainType = r.main || null), (e.subType = r.sub || null)
        } else {
          var o = ['Index', 'Name', 'Id'],
            a = { name: 1, dataIndex: 1, dataType: 1 }
          U(t, function (t, r) {
            for (var s = !1, l = 0; l < o.length; l++) {
              var u = o[l],
                h = r.lastIndexOf(u)
              if (h > 0 && h === r.length - u.length) {
                var c = r.slice(0, h)
                'data' !== c &&
                  ((e.mainType = c), (e[u.toLowerCase()] = t), (s = !0))
              }
            }
            a.hasOwnProperty(r) && ((n[r] = t), (s = !0)), s || (i[r] = t)
          })
        }
        return { cptQuery: e, dataQuery: n, otherQuery: i }
      }),
      (t.prototype.filter = function (t, e) {
        var n = this.eventInfo
        if (!n) return !0
        var i = n.targetEl,
          r = n.packedEvent,
          o = n.model,
          a = n.view
        if (!o || !a) return !0
        var s = e.cptQuery,
          l = e.dataQuery
        return (
          u(s, o, 'mainType') &&
          u(s, o, 'subType') &&
          u(s, o, 'index', 'componentIndex') &&
          u(s, o, 'name') &&
          u(s, o, 'id') &&
          u(l, r, 'name') &&
          u(l, r, 'dataIndex') &&
          u(l, r, 'dataType') &&
          (!a.filterForExposedEvent ||
            a.filterForExposedEvent(t, e.otherQuery, i, r))
        )
        function u(t, e, n, i) {
          return null == t[n] || e[i || n] === t[n]
        }
      }),
      (t.prototype.afterTrigger = function () {
        this.eventInfo = null
      }),
      t
    )
  })(),
  Kd = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (t, e) {
      var n = t.getData()
      if (
        (t.legendIcon && n.setVisual('legendIcon', t.legendIcon),
        t.hasSymbolVisual)
      ) {
        var i = t.get('symbol'),
          r = t.get('symbolSize'),
          o = t.get('symbolKeepAspect'),
          a = t.get('symbolRotate'),
          s = t.get('symbolOffset'),
          l = J(i),
          u = J(r),
          h = J(a),
          c = J(s),
          p = l || u || h || c,
          f = !l && i ? i : t.defaultSymbol,
          d = u ? null : r,
          g = h ? null : a,
          y = c ? null : s
        if (
          (n.setVisual({
            legendIcon: t.legendIcon || f,
            symbol: f,
            symbolSize: d,
            symbolKeepAspect: o,
            symbolRotate: g,
            symbolOffset: y,
          }),
          !e.isSeriesFiltered(t))
        )
          return {
            dataEach: p
              ? function (e, n) {
                  var o = t.getRawValue(n),
                    p = t.getDataParams(n)
                  l && e.setItemVisual(n, 'symbol', i(o, p)),
                    u && e.setItemVisual(n, 'symbolSize', r(o, p)),
                    h && e.setItemVisual(n, 'symbolRotate', a(o, p)),
                    c && e.setItemVisual(n, 'symbolOffset', s(o, p))
                }
              : null,
          }
      }
    },
  }
function $d(t, e) {
  function n(e, n) {
    var i = []
    return (
      e.eachComponent(
        { mainType: 'series', subType: t, query: n },
        function (t) {
          i.push(t.seriesIndex)
        }
      ),
      i
    )
  }
  U(
    [
      [t + 'ToggleSelect', 'toggleSelect'],
      [t + 'Select', 'select'],
      [t + 'UnSelect', 'unselect'],
    ],
    function (t) {
      e(t[0], function (e, i, r) {
        ;(e = N({}, e)),
          r.dispatchAction(N(e, { type: t[1], seriesIndex: n(i, e) }))
      })
    }
  )
}
function Qd(t, e, n, i, r) {
  var o = t + e
  n.isSilent(o) ||
    i.eachComponent({ mainType: 'series', subType: 'pie' }, function (t) {
      for (var e = t.seriesIndex, i = r.selected, a = 0; a < i.length; a++)
        if (i[a].seriesIndex === e) {
          var s = t.getData(),
            l = mr(s, r.fromActionPayload)
          n.trigger(o, {
            type: o,
            seriesId: t.id,
            name: Q(l) ? s.getName(l[0]) : s.getName(l),
            selected: N({}, t.option.selectedMap),
          })
        }
    })
}
function Jd(t, e, n) {
  for (var i; t && (!e(t) || ((i = t), !n)); ) t = t.__hostTarget || t.parent
  return i
}
var tg = Math.round(9 * Math.random()),
  eg = 'function' == typeof Object.defineProperty,
  ng = (function () {
    function t() {
      this._id = '__ec_inner_' + tg++
    }
    return (
      (t.prototype.get = function (t) {
        return this._guard(t)[this._id]
      }),
      (t.prototype.set = function (t, e) {
        var n = this._guard(t)
        return (
          eg
            ? Object.defineProperty(n, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0,
              })
            : (n[this._id] = e),
          this
        )
      }),
      (t.prototype.delete = function (t) {
        return !!this.has(t) && (delete this._guard(t)[this._id], !0)
      }),
      (t.prototype.has = function (t) {
        return !!this._guard(t)[this._id]
      }),
      (t.prototype._guard = function (t) {
        if (t !== Object(t))
          throw TypeError('Value of WeakMap is not a non-null object.')
        return t
      }),
      t
    )
  })(),
  ig = La.extend({
    type: 'triangle',
    shape: { cx: 0, cy: 0, width: 0, height: 0 },
    buildPath: function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = e.width / 2,
        o = e.height / 2
      t.moveTo(n, i - o),
        t.lineTo(n + r, i + o),
        t.lineTo(n - r, i + o),
        t.closePath()
    },
  }),
  rg = La.extend({
    type: 'diamond',
    shape: { cx: 0, cy: 0, width: 0, height: 0 },
    buildPath: function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = e.width / 2,
        o = e.height / 2
      t.moveTo(n, i - o),
        t.lineTo(n + r, i),
        t.lineTo(n, i + o),
        t.lineTo(n - r, i),
        t.closePath()
    },
  }),
  og = La.extend({
    type: 'pin',
    shape: { x: 0, y: 0, width: 0, height: 0 },
    buildPath: function (t, e) {
      var n = e.x,
        i = e.y,
        r = (e.width / 5) * 3,
        o = Math.max(r, e.height),
        a = r / 2,
        s = (a * a) / (o - a),
        l = i - o + a + s,
        u = Math.asin(s / a),
        h = Math.cos(u) * a,
        c = Math.sin(u),
        p = Math.cos(u),
        f = 0.6 * a,
        d = 0.7 * a
      t.moveTo(n - h, l + s),
        t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u),
        t.bezierCurveTo(n + h - c * f, l + s + p * f, n, i - d, n, i),
        t.bezierCurveTo(n, i - d, n - h + c * f, l + s + p * f, n - h, l + s),
        t.closePath()
    },
  }),
  ag = La.extend({
    type: 'arrow',
    shape: { x: 0, y: 0, width: 0, height: 0 },
    buildPath: function (t, e) {
      var n = e.height,
        i = e.width,
        r = e.x,
        o = e.y,
        a = (i / 3) * 2
      t.moveTo(r, o),
        t.lineTo(r + a, o + n),
        t.lineTo(r, o + (n / 4) * 3),
        t.lineTo(r - a, o + n),
        t.lineTo(r, o),
        t.closePath()
    },
  }),
  sg = {
    line: function (t, e, n, i, r) {
      ;(r.x1 = t), (r.y1 = e + i / 2), (r.x2 = t + n), (r.y2 = e + i / 2)
    },
    rect: function (t, e, n, i, r) {
      ;(r.x = t), (r.y = e), (r.width = n), (r.height = i)
    },
    roundRect: function (t, e, n, i, r) {
      ;(r.x = t),
        (r.y = e),
        (r.width = n),
        (r.height = i),
        (r.r = Math.min(n, i) / 4)
    },
    square: function (t, e, n, i, r) {
      var o = Math.min(n, i)
      ;(r.x = t), (r.y = e), (r.width = o), (r.height = o)
    },
    circle: function (t, e, n, i, r) {
      ;(r.cx = t + n / 2), (r.cy = e + i / 2), (r.r = Math.min(n, i) / 2)
    },
    diamond: function (t, e, n, i, r) {
      ;(r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i)
    },
    pin: function (t, e, n, i, r) {
      ;(r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i)
    },
    arrow: function (t, e, n, i, r) {
      ;(r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i)
    },
    triangle: function (t, e, n, i, r) {
      ;(r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i)
    },
  },
  lg = {}
U(
  {
    line: eu,
    rect: qa,
    roundRect: qa,
    square: qa,
    circle: wl,
    diamond: rg,
    pin: og,
    arrow: ag,
    triangle: ig,
  },
  function (t, e) {
    lg[e] = new t()
  }
)
var ug = La.extend({
  type: 'symbol',
  shape: { symbolType: '', x: 0, y: 0, width: 0, height: 0 },
  calculateTextPosition: function (t, e, n) {
    var i = bi(t, e, n),
      r = this.shape
    return (
      r &&
        'pin' === r.symbolType &&
        'inside' === e.position &&
        (i.y = n.y + 0.4 * n.height),
      i
    )
  },
  buildPath: function (t, e, n) {
    var i = e.symbolType
    if ('none' !== i) {
      var r = lg[i]
      r || (r = lg[(i = 'rect')]),
        sg[i](e.x, e.y, e.width, e.height, r.shape),
        r.buildPath(t, r.shape, n)
    }
  },
})
function hg(t, e) {
  if ('image' !== this.type) {
    var n = this.style
    this.__isEmptyBrush
      ? ((n.stroke = t), (n.fill = e || '#fff'), (n.lineWidth = 2))
      : 'line' === this.shape.symbolType
      ? (n.stroke = t)
      : (n.fill = t),
      this.markRedraw()
  }
}
function cg(t, e, n, i, r, o, a) {
  var s,
    l = 0 === t.indexOf('empty')
  return (
    l && (t = t.substr(5, 1).toLowerCase() + t.substr(6)),
    ((s =
      0 === t.indexOf('image://')
        ? Eu(t.slice(8), new pi(e, n, i, r), a ? 'center' : 'cover')
        : 0 === t.indexOf('path://')
        ? zu(t.slice(7), {}, new pi(e, n, i, r), a ? 'center' : 'cover')
        : new ug({
            shape: { symbolType: t, x: e, y: n, width: i, height: r },
          })).__isEmptyBrush = l),
    (s.setColor = hg),
    o && s.setColor(o),
    s
  )
}
function pg(t) {
  return Q(t) || (t = [+t, +t]), [t[0] || 0, t[1] || 0]
}
function fg(t, e) {
  if (null != t)
    return (
      Q(t) || (t = [t, t]), [Vi(t[0], e[0]) || 0, Vi(ut(t[1], t[0]), e[1]) || 0]
    )
}
function dg(t, e, n) {
  for (
    var i =
        'radial' === e.type
          ? (function (t, e, n) {
              var i = n.width,
                r = n.height,
                o = Math.min(i, r),
                a = null == e.x ? 0.5 : e.x,
                s = null == e.y ? 0.5 : e.y,
                l = null == e.r ? 0.5 : e.r
              return (
                e.global || ((a = a * i + n.x), (s = s * r + n.y), (l *= o)),
                t.createRadialGradient(a, s, 0, a, s, l)
              )
            })(t, e, n)
          : (function (t, e, n) {
              var i = null == e.x ? 0 : e.x,
                r = null == e.x2 ? 1 : e.x2,
                o = null == e.y ? 0 : e.y,
                a = null == e.y2 ? 0 : e.y2
              return (
                e.global ||
                  ((i = i * n.width + n.x),
                  (r = r * n.width + n.x),
                  (o = o * n.height + n.y),
                  (a = a * n.height + n.y)),
                (i = isNaN(i) ? 0 : i),
                (r = isNaN(r) ? 1 : r),
                (o = isNaN(o) ? 0 : o),
                (a = isNaN(a) ? 0 : a),
                t.createLinearGradient(i, o, r, a)
              )
            })(t, e, n),
      r = e.colorStops,
      o = 0;
    o < r.length;
    o++
  )
    i.addColorStop(r[o].offset, r[o].color)
  return i
}
function gg(t, e) {
  return t && 'solid' !== t && e > 0
    ? ((e = e || 1),
      'dashed' === t
        ? [4 * e, 2 * e]
        : 'dotted' === t
        ? [e]
        : nt(t)
        ? [t]
        : Q(t)
        ? t
        : null)
    : null
}
var yg = new fa(!0)
function vg(t) {
  var e = t.stroke
  return !(null == e || 'none' === e || !(t.lineWidth > 0))
}
function mg(t) {
  return 'string' == typeof t && 'none' !== t
}
function _g(t) {
  var e = t.fill
  return null != e && 'none' !== e
}
function xg(t, e) {
  if (null != e.fillOpacity && 1 !== e.fillOpacity) {
    var n = t.globalAlpha
    ;(t.globalAlpha = e.fillOpacity * e.opacity), t.fill(), (t.globalAlpha = n)
  } else t.fill()
}
function wg(t, e) {
  if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
    var n = t.globalAlpha
    ;(t.globalAlpha = e.strokeOpacity * e.opacity),
      t.stroke(),
      (t.globalAlpha = n)
  } else t.stroke()
}
function bg(t, e, n) {
  var i = Wr(e.image, e.__image, n)
  if (Ur(i)) {
    var r = t.createPattern(i, e.repeat || 'repeat')
    if ('function' == typeof DOMMatrix && r.setTransform) {
      var o = new DOMMatrix()
      o.rotateSelf(0, 0, ((e.rotation || 0) / Math.PI) * 180),
        o.scaleSelf(e.scaleX || 1, e.scaleY || 1),
        o.translateSelf(e.x || 0, e.y || 0),
        r.setTransform(o)
    }
    return r
  }
}
var Sg = ['shadowBlur', 'shadowOffsetX', 'shadowOffsetY'],
  Tg = [
    ['lineCap', 'butt'],
    ['lineJoin', 'miter'],
    ['miterLimit', 10],
  ]
function Mg(t, e, n, i, r) {
  var o = !1
  if (!i && e === (n = n || {})) return !1
  if (i || e.opacity !== n.opacity) {
    o || (Ig(t, r), (o = !0))
    var a = Math.max(Math.min(e.opacity, 1), 0)
    t.globalAlpha = isNaN(a) ? ro.opacity : a
  }
  ;(i || e.blend !== n.blend) &&
    (o || (Ig(t, r), (o = !0)),
    (t.globalCompositeOperation = e.blend || ro.blend))
  for (var s = 0; s < Sg.length; s++) {
    var l = Sg[s]
    ;(i || e[l] !== n[l]) &&
      (o || (Ig(t, r), (o = !0)), (t[l] = t.dpr * (e[l] || 0)))
  }
  return (
    (i || e.shadowColor !== n.shadowColor) &&
      (o || (Ig(t, r), (o = !0)),
      (t.shadowColor = e.shadowColor || ro.shadowColor)),
    o
  )
}
function Cg(t, e, n, i, r) {
  var o = Dg(e, r.inHover),
    a = i ? null : (n && Dg(n, r.inHover)) || {}
  if (o === a) return !1
  var s = Mg(t, o, a, i, r)
  if (
    ((i || o.fill !== a.fill) &&
      (s || (Ig(t, r), (s = !0)), mg(o.fill) && (t.fillStyle = o.fill)),
    (i || o.stroke !== a.stroke) &&
      (s || (Ig(t, r), (s = !0)), mg(o.stroke) && (t.strokeStyle = o.stroke)),
    (i || o.opacity !== a.opacity) &&
      (s || (Ig(t, r), (s = !0)),
      (t.globalAlpha = null == o.opacity ? 1 : o.opacity)),
    e.hasStroke())
  ) {
    var l =
      o.lineWidth /
      (o.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
    t.lineWidth !== l && (s || (Ig(t, r), (s = !0)), (t.lineWidth = l))
  }
  for (var u = 0; u < Tg.length; u++) {
    var h = Tg[u],
      c = h[0]
    ;(i || o[c] !== a[c]) && (s || (Ig(t, r), (s = !0)), (t[c] = o[c] || h[1]))
  }
  return s
}
function kg(t, e) {
  var n = e.transform,
    i = t.dpr || 1
  n
    ? t.setTransform(i * n[0], i * n[1], i * n[2], i * n[3], i * n[4], i * n[5])
    : t.setTransform(i, 0, 0, i, 0, 0)
}
function Ig(t, e) {
  e.batchFill && t.fill(),
    e.batchStroke && t.stroke(),
    (e.batchFill = ''),
    (e.batchStroke = '')
}
function Dg(t, e) {
  return (e && t.__hoverStyle) || t.style
}
function Ag(t, e) {
  Pg(t, e, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0)
}
function Pg(t, e, n, i) {
  var r = e.transform
  if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1))
    return (e.__dirty &= -2), void (e.__isRendered = !1)
  var o = e.__clipPaths,
    a = n.prevElClipPaths,
    s = !1,
    l = !1
  if (
    ((a &&
      !(function (t, e) {
        if (t === e || (!t && !e)) return !1
        if (!t || !e || t.length !== e.length) return !0
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0
        return !1
      })(o, a)) ||
      (a &&
        a.length &&
        (Ig(t, n),
        t.restore(),
        (l = s = !0),
        (n.prevElClipPaths = null),
        (n.allClipped = !1),
        (n.prevEl = null)),
      o &&
        o.length &&
        (Ig(t, n),
        t.save(),
        (function (t, e, n) {
          for (var i = !1, r = 0; r < t.length; r++) {
            var o = t[r]
            ;(i = i || o.isZeroArea()),
              kg(e, o),
              e.beginPath(),
              o.buildPath(e, o.shape),
              e.clip()
          }
          n.allClipped = i
        })(o, t, n),
        (s = !0)),
      (n.prevElClipPaths = o)),
    n.allClipped)
  )
    e.__isRendered = !1
  else {
    e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush()
    var u = n.prevEl
    u || (l = s = !0)
    var h,
      c,
      p =
        e instanceof La &&
        e.autoBatch &&
        (function (t) {
          var e = _g(t),
            n = vg(t)
          return !(
            t.lineDash ||
            !(+e ^ +n) ||
            (e && 'string' != typeof t.fill) ||
            (n && 'string' != typeof t.stroke) ||
            t.strokePercent < 1 ||
            t.strokeOpacity < 1 ||
            t.fillOpacity < 1
          )
        })(e.style)
    s ||
    ((h = r),
    (c = u.transform),
    h && c
      ? h[0] !== c[0] ||
        h[1] !== c[1] ||
        h[2] !== c[2] ||
        h[3] !== c[3] ||
        h[4] !== c[4] ||
        h[5] !== c[5]
      : h || c)
      ? (Ig(t, n), kg(t, e))
      : p || Ig(t, n)
    var f = Dg(e, n.inHover)
    e instanceof La
      ? (1 !== n.lastDrawType && ((l = !0), (n.lastDrawType = 1)),
        Cg(t, e, u, l, n),
        (p && (n.batchFill || n.batchStroke)) || t.beginPath(),
        (function (t, e, n, i) {
          var r = vg(n),
            o = _g(n),
            a = n.strokePercent,
            s = a < 1,
            l = !e.path
          ;(e.silent && !s) || !l || e.createPathProxy()
          var u = e.path || yg
          if (!i) {
            var h = n.fill,
              c = n.stroke,
              p = o && !!h.colorStops,
              f = r && !!c.colorStops,
              d = o && !!h.image,
              g = r && !!c.image,
              y = void 0,
              v = void 0,
              m = void 0,
              _ = void 0,
              x = void 0
            ;(p || f) && (x = e.getBoundingRect()),
              p &&
                ((y = e.__dirty ? dg(t, h, x) : e.__canvasFillGradient),
                (e.__canvasFillGradient = y)),
              f &&
                ((v = e.__dirty ? dg(t, c, x) : e.__canvasStrokeGradient),
                (e.__canvasStrokeGradient = v)),
              d &&
                ((m =
                  e.__dirty || !e.__canvasFillPattern
                    ? bg(t, h, e)
                    : e.__canvasFillPattern),
                (e.__canvasFillPattern = m)),
              g &&
                ((_ =
                  e.__dirty || !e.__canvasStrokePattern
                    ? bg(t, c, e)
                    : e.__canvasStrokePattern),
                (e.__canvasStrokePattern = m)),
              p ? (t.fillStyle = y) : d && (m ? (t.fillStyle = m) : (o = !1)),
              f
                ? (t.strokeStyle = v)
                : g && (_ ? (t.strokeStyle = _) : (r = !1))
          }
          var w = n.lineDash && n.lineWidth > 0 && gg(n.lineDash, n.lineWidth),
            b = n.lineDashOffset,
            S = !!t.setLineDash,
            T = e.getGlobalScale()
          if ((u.setScale(T[0], T[1], e.segmentIgnoreThreshold), w)) {
            var M = n.strokeNoScale && e.getLineScale ? e.getLineScale() : 1
            M &&
              1 !== M &&
              ((w = X(w, function (t) {
                return t / M
              })),
              (b /= M))
          }
          var C = !0
          ;(l || 4 & e.__dirty || (w && !S && r)) &&
            (u.setDPR(t.dpr),
            s ? u.setContext(null) : (u.setContext(t), (C = !1)),
            u.reset(),
            w && !S && (u.setLineDash(w), u.setLineDashOffset(b)),
            e.buildPath(u, e.shape, i),
            u.toStatic(),
            e.pathUpdated()),
            C && u.rebuildPath(t, s ? a : 1),
            w && S && (t.setLineDash(w), (t.lineDashOffset = b)),
            i ||
              (n.strokeFirst
                ? (r && wg(t, n), o && xg(t, n))
                : (o && xg(t, n), r && wg(t, n))),
            w && S && t.setLineDash([])
        })(t, e, f, p),
        p && ((n.batchFill = f.fill || ''), (n.batchStroke = f.stroke || '')))
      : e instanceof za
      ? (3 !== n.lastDrawType && ((l = !0), (n.lastDrawType = 3)),
        Cg(t, e, u, l, n),
        (function (t, e, n) {
          var i = n.text
          if ((null != i && (i += ''), i)) {
            ;(t.font = n.font || '12px sans-serif'),
              (t.textAlign = n.textAlign),
              (t.textBaseline = n.textBaseline)
            var r = void 0
            if (t.setLineDash) {
              var o =
                  n.lineDash && n.lineWidth > 0 && gg(n.lineDash, n.lineWidth),
                a = n.lineDashOffset
              if (o) {
                var s = n.strokeNoScale && e.getLineScale ? e.getLineScale() : 1
                s &&
                  1 !== s &&
                  ((o = X(o, function (t) {
                    return t / s
                  })),
                  (a /= s)),
                  t.setLineDash(o),
                  (t.lineDashOffset = a),
                  (r = !0)
              }
            }
            n.strokeFirst
              ? (vg(n) && t.strokeText(i, n.x, n.y),
                _g(n) && t.fillText(i, n.x, n.y))
              : (_g(n) && t.fillText(i, n.x, n.y),
                vg(n) && t.strokeText(i, n.x, n.y)),
              r && t.setLineDash([])
          }
        })(t, e, f))
      : e instanceof Ha
      ? (2 !== n.lastDrawType && ((l = !0), (n.lastDrawType = 2)),
        (function (t, e, n, i, r) {
          Mg(t, Dg(e, r.inHover), n && Dg(n, r.inHover), i, r)
        })(t, e, u, l, n),
        (function (t, e, n) {
          var i = (e.__image = Wr(n.image, e.__image, e, e.onload))
          if (i && Ur(i)) {
            var r = n.x || 0,
              o = n.y || 0,
              a = e.getWidth(),
              s = e.getHeight(),
              l = i.width / i.height
            if (
              (null == a && null != s
                ? (a = s * l)
                : null == s && null != a
                ? (s = a / l)
                : null == a && null == s && ((a = i.width), (s = i.height)),
              n.sWidth && n.sHeight)
            ) {
              var u = n.sx || 0,
                h = n.sy || 0
              t.drawImage(i, u, h, n.sWidth, n.sHeight, r, o, a, s)
            } else if (n.sx && n.sy) {
              var c = a - (u = n.sx),
                p = s - (h = n.sy)
              t.drawImage(i, u, h, c, p, r, o, a, s)
            } else t.drawImage(i, r, o, a, s)
          }
        })(t, e, f))
      : e instanceof xu &&
        (4 !== n.lastDrawType && ((l = !0), (n.lastDrawType = 4)),
        (function (t, e, n) {
          var i = e.getDisplayables(),
            r = e.getTemporalDisplayables()
          t.save()
          var o,
            a,
            s = {
              prevElClipPaths: null,
              prevEl: null,
              allClipped: !1,
              viewWidth: n.viewWidth,
              viewHeight: n.viewHeight,
              inHover: n.inHover,
            }
          for (o = e.getCursor(), a = i.length; o < a; o++) {
            ;(h = i[o]).beforeBrush && h.beforeBrush(),
              h.innerBeforeBrush(),
              Pg(t, h, s, o === a - 1),
              h.innerAfterBrush(),
              h.afterBrush && h.afterBrush(),
              (s.prevEl = h)
          }
          for (var l = 0, u = r.length; l < u; l++) {
            var h
            ;(h = r[l]).beforeBrush && h.beforeBrush(),
              h.innerBeforeBrush(),
              Pg(t, h, s, l === u - 1),
              h.innerAfterBrush(),
              h.afterBrush && h.afterBrush(),
              (s.prevEl = h)
          }
          e.clearTemporalDisplayables(), (e.notClear = !0), t.restore()
        })(t, e, n)),
      p && i && Ig(t, n),
      e.innerAfterBrush(),
      e.afterBrush && e.afterBrush(),
      (n.prevEl = e),
      (e.__dirty = 0),
      (e.__isRendered = !0)
  }
}
var Og,
  Lg = new ng(),
  Rg = new Le(100),
  Bg = [
    'symbol',
    'symbolSize',
    'symbolKeepAspect',
    'color',
    'backgroundColor',
    'dashArrayX',
    'dashArrayY',
    'maxTileWidth',
    'maxTileHeight',
  ]
function zg(t, e) {
  if ('none' === t) return null
  var n = e.getDevicePixelRatio(),
    i = e.getZr(),
    r = 'svg' === i.painter.type
  t.dirty && Lg.delete(t)
  var o = Lg.get(t)
  if (o) return o
  var a = F(t, {
    symbol: 'rect',
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512,
  })
  'none' === a.backgroundColor && (a.backgroundColor = null)
  var s = { repeat: 'repeat' }
  return (
    (function (t) {
      for (var e, o = [n], s = !0, l = 0; l < Bg.length; ++l) {
        var u = a[Bg[l]],
          h = typeof u
        if (
          null != u &&
          !Q(u) &&
          'string' !== h &&
          'number' !== h &&
          'boolean' !== h
        ) {
          s = !1
          break
        }
        o.push(u)
      }
      if (s) {
        e = o.join(',') + (r ? '-svg' : '')
        var c = Rg.get(e)
        c && (r ? (t.svgElement = c) : (t.image = c))
      }
      var p,
        f = Ng(a.dashArrayX),
        d = (function (t) {
          if (!t || ('object' == typeof t && 0 === t.length)) return [0, 0]
          if ('number' == typeof t) {
            var e = Math.ceil(t)
            return [e, e]
          }
          var n = X(t, function (t) {
            return Math.ceil(t)
          })
          return t.length % 2 ? n.concat(n) : n
        })(a.dashArrayY),
        g = Eg(a.symbol),
        y =
          ((w = f),
          X(w, function (t) {
            return Fg(t)
          })),
        v = Fg(d),
        m = !r && H(),
        _ = r && i.painter.createSVGElement('g'),
        x = (function () {
          for (var t = 1, e = 0, n = y.length; e < n; ++e) t = or(t, y[e])
          var i = 1
          for (e = 0, n = g.length; e < n; ++e) i = or(i, g[e].length)
          t *= i
          var r = v * y.length * g.length
          return {
            width: Math.max(1, Math.min(t, a.maxTileWidth)),
            height: Math.max(1, Math.min(r, a.maxTileHeight)),
          }
        })()
      var w
      m &&
        ((m.width = x.width * n),
        (m.height = x.height * n),
        (p = m.getContext('2d')))
      ;(function () {
        p &&
          (p.clearRect(0, 0, m.width, m.height),
          a.backgroundColor &&
            ((p.fillStyle = a.backgroundColor),
            p.fillRect(0, 0, m.width, m.height)))
        for (var t = 0, e = 0; e < d.length; ++e) t += d[e]
        if (t <= 0) return
        var o = -v,
          s = 0,
          l = 0,
          u = 0
        for (; o < x.height; ) {
          if (s % 2 == 0) {
            for (
              var h = (l / 2) % g.length, c = 0, y = 0, w = 0;
              c < 2 * x.width;

            ) {
              var b = 0
              for (e = 0; e < f[u].length; ++e) b += f[u][e]
              if (b <= 0) break
              if (y % 2 == 0) {
                var S = 0.5 * (1 - a.symbolSize),
                  T = c + f[u][y] * S,
                  M = o + d[s] * S,
                  C = f[u][y] * a.symbolSize,
                  k = d[s] * a.symbolSize,
                  I = (w / 2) % g[h].length
                D(T, M, C, k, g[h][I])
              }
              ;(c += f[u][y]), ++w, ++y === f[u].length && (y = 0)
            }
            ++u === f.length && (u = 0)
          }
          ;(o += d[s]), ++l, ++s === d.length && (s = 0)
        }
        function D(t, e, o, s, l) {
          var u = r ? 1 : n,
            h = cg(l, t * u, e * u, o * u, s * u, a.color, a.symbolKeepAspect)
          r ? _.appendChild(i.painter.paintOne(h)) : Ag(p, h)
        }
      })(),
        s && Rg.put(e, m || _)
      ;(t.image = m),
        (t.svgElement = _),
        (t.svgWidth = x.width),
        (t.svgHeight = x.height)
    })(s),
    (s.rotation = a.rotation),
    (s.scaleX = s.scaleY = r ? 1 : 1 / n),
    Lg.set(t, s),
    (t.dirty = !1),
    s
  )
}
function Eg(t) {
  if (!t || 0 === t.length) return [['rect']]
  if ('string' == typeof t) return [[t]]
  for (var e = !0, n = 0; n < t.length; ++n)
    if ('string' != typeof t[n]) {
      e = !1
      break
    }
  if (e) return Eg([t])
  var i = []
  for (n = 0; n < t.length; ++n)
    'string' == typeof t[n] ? i.push([t[n]]) : i.push(t[n])
  return i
}
function Ng(t) {
  if (!t || 0 === t.length) return [[0, 0]]
  if ('number' == typeof t) return [[(r = Math.ceil(t)), r]]
  for (var e = !0, n = 0; n < t.length; ++n)
    if ('number' != typeof t[n]) {
      e = !1
      break
    }
  if (e) return Ng([t])
  var i = []
  for (n = 0; n < t.length; ++n)
    if ('number' == typeof t[n]) {
      var r = Math.ceil(t[n])
      i.push([r, r])
    } else {
      ;(r = X(t[n], function (t) {
        return Math.ceil(t)
      })).length %
        2 ==
      1
        ? i.push(r.concat(r))
        : i.push(r)
    }
  return i
}
function Fg(t) {
  for (var e = 0, n = 0; n < t.length; ++n) e += t[n]
  return t.length % 2 == 1 ? 2 * e : e
}
function Hg(t) {
  tt(t) && (t = new DOMParser().parseFromString(t, 'text/xml'))
  var e = t
  for (
    9 === e.nodeType && (e = e.firstChild);
    'svg' !== e.nodeName.toLowerCase() || 1 !== e.nodeType;

  )
    e = e.nextSibling
  return e
}
var Vg = {
    fill: 'fill',
    stroke: 'stroke',
    'stroke-width': 'lineWidth',
    opacity: 'opacity',
    'fill-opacity': 'fillOpacity',
    'stroke-opacity': 'strokeOpacity',
    'stroke-dasharray': 'lineDash',
    'stroke-dashoffset': 'lineDashOffset',
    'stroke-linecap': 'lineCap',
    'stroke-linejoin': 'lineJoin',
    'stroke-miterlimit': 'miterLimit',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-style': 'fontStyle',
    'font-weight': 'fontWeight',
    'text-anchor': 'textAlign',
    visibility: 'visibility',
    display: 'display',
  },
  Wg = Z(Vg),
  Gg = { 'alignment-baseline': 'textBaseline', 'stop-color': 'stopColor' },
  Ug = Z(Gg),
  Xg = (function () {
    function t() {
      ;(this._defs = {}), (this._root = null)
    }
    return (
      (t.prototype.parse = function (t, e) {
        e = e || {}
        var n = Hg(t)
        if (!n) throw new Error('Illegal svg')
        this._defsUsePending = []
        var i = new Ri()
        this._root = i
        var r = [],
          o = n.getAttribute('viewBox') || '',
          a = parseFloat(n.getAttribute('width') || e.width),
          s = parseFloat(n.getAttribute('height') || e.height)
        isNaN(a) && (a = null), isNaN(s) && (s = null), $g(n, i, null, !0, !1)
        for (var l, u, h = n.firstChild; h; )
          this._parseNode(h, i, r, null, !1, !1), (h = h.nextSibling)
        if (
          ((function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n]
              i[0].style[i[1]] = t[i[2]]
            }
          })(this._defs, this._defsUsePending),
          (this._defsUsePending = []),
          o)
        ) {
          var c = ey(o)
          c.length >= 4 &&
            (l = {
              x: parseFloat(c[0] || 0),
              y: parseFloat(c[1] || 0),
              width: parseFloat(c[2]),
              height: parseFloat(c[3]),
            })
        }
        if (
          l &&
          null != a &&
          null != s &&
          ((u = ay(l, { x: 0, y: 0, width: a, height: s })), !e.ignoreViewBox)
        ) {
          var p = i
          ;(i = new Ri()).add(p),
            (p.scaleX = p.scaleY = u.scale),
            (p.x = u.x),
            (p.y = u.y)
        }
        return (
          e.ignoreRootClip ||
            null == a ||
            null == s ||
            i.setClipPath(
              new qa({ shape: { x: 0, y: 0, width: a, height: s } })
            ),
          {
            root: i,
            width: a,
            height: s,
            viewBoxRect: l,
            viewBoxTransform: u,
            named: r,
          }
        )
      }),
      (t.prototype._parseNode = function (t, e, n, i, r, o) {
        var a,
          s = t.nodeName.toLowerCase(),
          l = i
        if (
          ('defs' === s && (r = !0),
          'text' === s && (o = !0),
          'defs' === s || 'switch' === s)
        )
          a = e
        else {
          if (!r) {
            var u = Og[s]
            if (u && wt(Og, s)) {
              a = u.call(this, t, e)
              var h = t.getAttribute('name')
              if (h) {
                var c = { name: h, namedFrom: null, svgNodeTagLower: s, el: a }
                n.push(c), 'g' === s && (l = c)
              } else
                i &&
                  n.push({
                    name: i.name,
                    namedFrom: i,
                    svgNodeTagLower: s,
                    el: a,
                  })
              e.add(a)
            }
          }
          var p = Yg[s]
          if (p && wt(Yg, s)) {
            var f = p.call(this, t),
              d = t.getAttribute('id')
            d && (this._defs[d] = f)
          }
        }
        if (a && a.isGroup)
          for (var g = t.firstChild; g; )
            1 === g.nodeType
              ? this._parseNode(g, a, n, l, r, o)
              : 3 === g.nodeType && o && this._parseText(g, a),
              (g = g.nextSibling)
      }),
      (t.prototype._parseText = function (t, e) {
        var n = new za({
          style: { text: t.textContent },
          silent: !0,
          x: this._textX || 0,
          y: this._textY || 0,
        })
        Zg(e, n),
          $g(t, n, this._defsUsePending, !1, !1),
          (function (t, e) {
            var n = e.__selfStyle
            if (n) {
              var i = n.textBaseline,
                r = i
              i && 'auto' !== i
                ? 'baseline' === i
                  ? (r = 'alphabetic')
                  : 'before-edge' === i || 'text-before-edge' === i
                  ? (r = 'top')
                  : 'after-edge' === i || 'text-after-edge' === i
                  ? (r = 'bottom')
                  : ('central' !== i && 'mathematical' !== i) || (r = 'middle')
                : (r = 'alphabetic'),
                (t.style.textBaseline = r)
            }
            var o = e.__inheritedStyle
            if (o) {
              var a = o.textAlign,
                s = a
              a && ('middle' === a && (s = 'center'), (t.style.textAlign = s))
            }
          })(n, e)
        var i = n.style,
          r = i.fontSize
        r &&
          r < 9 &&
          ((i.fontSize = 9), (n.scaleX *= r / 9), (n.scaleY *= r / 9))
        var o =
          (i.fontSize || i.fontFamily) &&
          [
            i.fontStyle,
            i.fontWeight,
            (i.fontSize || 12) + 'px',
            i.fontFamily || 'sans-serif',
          ].join(' ')
        i.font = o
        var a = n.getBoundingRect()
        return (this._textX += a.width), e.add(n), n
      }),
      (t.internalField = void (Og = {
        g: function (t, e) {
          var n = new Ri()
          return Zg(e, n), $g(t, n, this._defsUsePending, !1, !1), n
        },
        rect: function (t, e) {
          var n = new qa()
          return (
            Zg(e, n),
            $g(t, n, this._defsUsePending, !1, !1),
            n.setShape({
              x: parseFloat(t.getAttribute('x') || '0'),
              y: parseFloat(t.getAttribute('y') || '0'),
              width: parseFloat(t.getAttribute('width') || '0'),
              height: parseFloat(t.getAttribute('height') || '0'),
            }),
            (n.silent = !0),
            n
          )
        },
        circle: function (t, e) {
          var n = new wl()
          return (
            Zg(e, n),
            $g(t, n, this._defsUsePending, !1, !1),
            n.setShape({
              cx: parseFloat(t.getAttribute('cx') || '0'),
              cy: parseFloat(t.getAttribute('cy') || '0'),
              r: parseFloat(t.getAttribute('r') || '0'),
            }),
            (n.silent = !0),
            n
          )
        },
        line: function (t, e) {
          var n = new eu()
          return (
            Zg(e, n),
            $g(t, n, this._defsUsePending, !1, !1),
            n.setShape({
              x1: parseFloat(t.getAttribute('x1') || '0'),
              y1: parseFloat(t.getAttribute('y1') || '0'),
              x2: parseFloat(t.getAttribute('x2') || '0'),
              y2: parseFloat(t.getAttribute('y2') || '0'),
            }),
            (n.silent = !0),
            n
          )
        },
        ellipse: function (t, e) {
          var n = new Tl()
          return (
            Zg(e, n),
            $g(t, n, this._defsUsePending, !1, !1),
            n.setShape({
              cx: parseFloat(t.getAttribute('cx') || '0'),
              cy: parseFloat(t.getAttribute('cy') || '0'),
              rx: parseFloat(t.getAttribute('rx') || '0'),
              ry: parseFloat(t.getAttribute('ry') || '0'),
            }),
            (n.silent = !0),
            n
          )
        },
        polygon: function (t, e) {
          var n,
            i = t.getAttribute('points')
          i && (n = Kg(i))
          var r = new ql({ shape: { points: n || [] }, silent: !0 })
          return Zg(e, r), $g(t, r, this._defsUsePending, !1, !1), r
        },
        polyline: function (t, e) {
          var n,
            i = t.getAttribute('points')
          i && (n = Kg(i))
          var r = new $l({ shape: { points: n || [] }, silent: !0 })
          return Zg(e, r), $g(t, r, this._defsUsePending, !1, !1), r
        },
        image: function (t, e) {
          var n = new Ha()
          return (
            Zg(e, n),
            $g(t, n, this._defsUsePending, !1, !1),
            n.setStyle({
              image: t.getAttribute('xlink:href'),
              x: +t.getAttribute('x'),
              y: +t.getAttribute('y'),
              width: +t.getAttribute('width'),
              height: +t.getAttribute('height'),
            }),
            (n.silent = !0),
            n
          )
        },
        text: function (t, e) {
          var n = t.getAttribute('x') || '0',
            i = t.getAttribute('y') || '0',
            r = t.getAttribute('dx') || '0',
            o = t.getAttribute('dy') || '0'
          ;(this._textX = parseFloat(n) + parseFloat(r)),
            (this._textY = parseFloat(i) + parseFloat(o))
          var a = new Ri()
          return Zg(e, a), $g(t, a, this._defsUsePending, !1, !0), a
        },
        tspan: function (t, e) {
          var n = t.getAttribute('x'),
            i = t.getAttribute('y')
          null != n && (this._textX = parseFloat(n)),
            null != i && (this._textY = parseFloat(i))
          var r = t.getAttribute('dx') || '0',
            o = t.getAttribute('dy') || '0',
            a = new Ri()
          return (
            Zg(e, a),
            $g(t, a, this._defsUsePending, !1, !0),
            (this._textX += parseFloat(r)),
            (this._textY += parseFloat(o)),
            a
          )
        },
        path: function (t, e) {
          var n = ml(t.getAttribute('d') || '')
          return (
            Zg(e, n), $g(t, n, this._defsUsePending, !1, !1), (n.silent = !0), n
          )
        },
      })),
      t
    )
  })(),
  Yg = {
    lineargradient: function (t) {
      var e = parseInt(t.getAttribute('x1') || '0', 10),
        n = parseInt(t.getAttribute('y1') || '0', 10),
        i = parseInt(t.getAttribute('x2') || '10', 10),
        r = parseInt(t.getAttribute('y2') || '0', 10),
        o = new pu(e, n, i, r)
      return jg(t, o), qg(t, o), o
    },
    radialgradient: function (t) {
      var e = parseInt(t.getAttribute('cx') || '0', 10),
        n = parseInt(t.getAttribute('cy') || '0', 10),
        i = parseInt(t.getAttribute('r') || '0', 10),
        r = new fu(e, n, i)
      return jg(t, r), qg(t, r), r
    },
  }
function jg(t, e) {
  'userSpaceOnUse' === t.getAttribute('gradientUnits') && (e.global = !0)
}
function qg(t, e) {
  for (var n = t.firstChild; n; ) {
    if (1 === n.nodeType && 'stop' === n.nodeName.toLocaleLowerCase()) {
      var i = n.getAttribute('offset'),
        r = void 0
      r =
        i && i.indexOf('%') > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0
      var o = {}
      oy(n, o, o)
      var a = o.stopColor || n.getAttribute('stop-color') || '#000000'
      e.colorStops.push({ offset: r, color: a })
    }
    n = n.nextSibling
  }
}
function Zg(t, e) {
  t &&
    t.__inheritedStyle &&
    (e.__inheritedStyle || (e.__inheritedStyle = {}),
    F(e.__inheritedStyle, t.__inheritedStyle))
}
function Kg(t) {
  for (var e = ey(t), n = [], i = 0; i < e.length; i += 2) {
    var r = parseFloat(e[i]),
      o = parseFloat(e[i + 1])
    n.push([r, o])
  }
  return n
}
function $g(t, e, n, i, r) {
  var o = e,
    a = (o.__inheritedStyle = o.__inheritedStyle || {}),
    s = {}
  1 === t.nodeType &&
    ((function (t, e) {
      var n = t.getAttribute('transform')
      if (n) {
        n = n.replace(/,/g, ' ')
        var i = [],
          r = null
        n.replace(ny, function (t, e, n) {
          return i.push(e, n), ''
        })
        for (var o = i.length - 1; o > 0; o -= 2) {
          var a = i[o],
            s = i[o - 1],
            l = ey(a)
          switch (((r = r || [1, 0, 0, 1, 0, 0]), s)) {
            case 'translate':
              Vn(r, r, [parseFloat(l[0]), parseFloat(l[1] || '0')])
              break
            case 'scale':
              Gn(r, r, [parseFloat(l[0]), parseFloat(l[1] || l[0])])
              break
            case 'rotate':
              Wn(r, r, -parseFloat(l[0]) * iy)
              break
            case 'skewX':
              Hn(r, [1, 0, Math.tan(parseFloat(l[0]) * iy), 1, 0, 0], r)
              break
            case 'skewY':
              Hn(r, [1, Math.tan(parseFloat(l[0]) * iy), 0, 1, 0, 0], r)
              break
            case 'matrix':
              ;(r[0] = parseFloat(l[0])),
                (r[1] = parseFloat(l[1])),
                (r[2] = parseFloat(l[2])),
                (r[3] = parseFloat(l[3])),
                (r[4] = parseFloat(l[4])),
                (r[5] = parseFloat(l[5]))
          }
        }
        e.setLocalTransform(r)
      }
    })(t, e),
    oy(t, a, s),
    i ||
      (function (t, e, n) {
        for (var i = 0; i < Wg.length; i++) {
          var r = Wg[i]
          null != (o = t.getAttribute(r)) && (e[Vg[r]] = o)
        }
        for (i = 0; i < Ug.length; i++) {
          var o
          r = Ug[i]
          null != (o = t.getAttribute(r)) && (n[Gg[r]] = o)
        }
      })(t, a, s)),
    (o.style = o.style || {}),
    null != a.fill && (o.style.fill = Jg(o, 'fill', a.fill, n)),
    null != a.stroke && (o.style.stroke = Jg(o, 'stroke', a.stroke, n)),
    U(
      [
        'lineWidth',
        'opacity',
        'fillOpacity',
        'strokeOpacity',
        'miterLimit',
        'fontSize',
      ],
      function (t) {
        null != a[t] && (o.style[t] = parseFloat(a[t]))
      }
    ),
    U(
      [
        'lineDashOffset',
        'lineCap',
        'lineJoin',
        'fontWeight',
        'fontFamily',
        'fontStyle',
        'textAlign',
      ],
      function (t) {
        null != a[t] && (o.style[t] = a[t])
      }
    ),
    r && (o.__selfStyle = s),
    a.lineDash &&
      (o.style.lineDash = X(ey(a.lineDash), function (t) {
        return parseFloat(t)
      })),
    ('hidden' !== a.visibility && 'collapse' !== a.visibility) ||
      (o.invisible = !0),
    'none' === a.display && (o.ignore = !0)
}
var Qg = /^url\(\s*#(.*?)\)/
function Jg(t, e, n, i) {
  var r = n && n.match(Qg)
  if (!r) return 'none' === n && (n = null), n
  var o = dt(r[1])
  i.push([t, e, o])
}
var ty = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g
function ey(t) {
  return t.match(ty) || []
}
var ny = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.eE,]*)\)/g,
  iy = Math.PI / 180
var ry = /([^\s:;]+)\s*:\s*([^:;]+)/g
function oy(t, e, n) {
  var i,
    r = t.getAttribute('style')
  if (r)
    for (ry.lastIndex = 0; null != (i = ry.exec(r)); ) {
      var o = i[1],
        a = wt(Vg, o) ? Vg[o] : null
      a && (e[a] = i[2])
      var s = wt(Gg, o) ? Gg[o] : null
      s && (n[s] = i[2])
    }
}
function ay(t, e) {
  var n = e.width / t.width,
    i = e.height / t.height,
    r = Math.min(n, i)
  return {
    scale: r,
    x: -(t.x + t.width / 2) * r + (e.x + e.width / 2),
    y: -(t.y + t.height / 2) * r + (e.y + e.height / 2),
  }
}
function sy(t, e) {
  return Math.abs(t - e) < 1e-8
}
function ly(t, e, n) {
  var i = 0,
    r = t[0]
  if (!r) return !1
  for (var o = 1; o < t.length; o++) {
    var a = t[o]
    ;(i += wa(r[0], r[1], a[0], a[1], e, n)), (r = a)
  }
  var s = t[0]
  return (
    (sy(r[0], s[0]) && sy(r[1], s[1])) ||
      (i += wa(r[0], r[1], s[0], s[1], e, n)),
    0 !== i
  )
}
var uy = [],
  hy = (function () {
    function t(t) {
      this.name = t
    }
    return (t.prototype.getCenter = function () {}), t
  })(),
  cy = (function (t) {
    function e(e, n, i) {
      var r = t.call(this, e) || this
      if (((r.type = 'geoJSON'), (r.geometries = n), i)) i = [i[0], i[1]]
      else {
        var o = r.getBoundingRect()
        i = [o.x + o.width / 2, o.y + o.height / 2]
      }
      return (r._center = i), r
    }
    return (
      g(e, t),
      (e.prototype.getBoundingRect = function () {
        var t = this._rect
        if (t) return t
        for (
          var e = Number.MAX_VALUE,
            n = [e, e],
            i = [-e, -e],
            r = [],
            o = [],
            a = this.geometries,
            s = 0;
          s < a.length;
          s++
        ) {
          if ('polygon' === a[s].type)
            Vo(a[s].exterior, r, o), Ht(n, n, r), Vt(i, i, o)
        }
        return (
          0 === s && (n[0] = n[1] = i[0] = i[1] = 0),
          (this._rect = new pi(n[0], n[1], i[0] - n[0], i[1] - n[1]))
        )
      }),
      (e.prototype.contain = function (t) {
        var e = this.getBoundingRect(),
          n = this.geometries
        if (!e.contain(t[0], t[1])) return !1
        t: for (var i = 0, r = n.length; i < r; i++)
          if ('polygon' === n[i].type) {
            var o = n[i].exterior,
              a = n[i].interiors
            if (ly(o, t[0], t[1])) {
              for (var s = 0; s < (a ? a.length : 0); s++)
                if (ly(a[s], t[0], t[1])) continue t
              return !0
            }
          }
        return !1
      }),
      (e.prototype.transformTo = function (t, e, n, i) {
        var r = this.getBoundingRect(),
          o = r.width / r.height
        n ? i || (i = n / o) : (n = o * i)
        for (
          var a = new pi(t, e, n, i),
            s = r.calculateTransform(a),
            l = this.geometries,
            u = 0;
          u < l.length;
          u++
        )
          if ('polygon' === l[u].type) {
            for (
              var h = l[u].exterior, c = l[u].interiors, p = 0;
              p < h.length;
              p++
            )
              Ft(h[p], h[p], s)
            for (var f = 0; f < (c ? c.length : 0); f++)
              for (p = 0; p < c[f].length; p++) Ft(c[f][p], c[f][p], s)
          }
        ;(r = this._rect).copy(a),
          (this._center = [r.x + r.width / 2, r.y + r.height / 2])
      }),
      (e.prototype.cloneShallow = function (t) {
        null == t && (t = this.name)
        var n = new e(t, this.geometries, this._center)
        return (n._rect = this._rect), (n.transformTo = null), n
      }),
      (e.prototype.getCenter = function () {
        return this._center
      }),
      (e.prototype.setCenter = function (t) {
        this._center = t
      }),
      e
    )
  })(hy),
  py = (function (t) {
    function e(e, n) {
      var i = t.call(this, e) || this
      return (i.type = 'geoSVG'), (i._elOnlyForCalculate = n), i
    }
    return (
      g(e, t),
      (e.prototype.getCenter = function () {
        var t = this._center
        return t || (t = this._center = this._calculateCenter()), t
      }),
      (e.prototype._calculateCenter = function () {
        for (
          var t = this._elOnlyForCalculate,
            e = t.getBoundingRect(),
            n = [e.x + e.width / 2, e.y + e.height / 2],
            i = Nn(uy),
            r = t;
          r && !r.isGeoSVGGraphicRoot;

        )
          Hn(i, r.getLocalTransform(), i), (r = r.parent)
        return Un(i, i), Ft(n, n, i), n
      }),
      e
    )
  })(hy),
  fy = mt([
    'rect',
    'circle',
    'line',
    'ellipse',
    'polygon',
    'polyline',
    'path',
    'text',
    'tspan',
    'g',
  ]),
  dy = (function () {
    function t(t, e) {
      ;(this.type = 'geoSVG'),
        (this._usedGraphicMap = mt()),
        (this._freedGraphics = []),
        (this._mapName = t),
        (this._parsedXML = Hg(e))
    }
    return (
      (t.prototype.load = function () {
        var t = this._firstGraphic
        if (!t) {
          ;(t = this._firstGraphic = this._buildGraphic(this._parsedXML)),
            this._freedGraphics.push(t),
            (this._boundingRect = this._firstGraphic.boundingRect.clone())
          var e = (function (t) {
              var e = [],
                n = mt()
              return (
                U(t, function (t) {
                  if (null == t.namedFrom) {
                    var i = new py(t.name, t.el)
                    e.push(i), n.set(t.name, i)
                  }
                }),
                { regions: e, regionsMap: n }
              )
            })(t.named),
            n = e.regions,
            i = e.regionsMap
          ;(this._regions = n), (this._regionsMap = i)
        }
        return {
          boundingRect: this._boundingRect,
          regions: this._regions,
          regionsMap: this._regionsMap,
        }
      }),
      (t.prototype._buildGraphic = function (t) {
        var e, n, i, r
        try {
          ft(
            null !=
              (n = (e =
                (t &&
                  ((i = t),
                  (r = { ignoreViewBox: !0, ignoreRootClip: !0 }),
                  new Xg().parse(i, r))) ||
                {}).root)
          )
        } catch (v) {
          throw new Error('Invalid svg format\n' + v.message)
        }
        var o = new Ri()
        o.add(n), (o.isGeoSVGGraphicRoot = !0)
        var a = e.width,
          s = e.height,
          l = e.viewBoxRect,
          u = this._boundingRect
        if (!u) {
          var h = void 0,
            c = void 0,
            p = void 0,
            f = void 0
          if (
            (null != a ? ((h = 0), (p = a)) : l && ((h = l.x), (p = l.width)),
            null != s ? ((c = 0), (f = s)) : l && ((c = l.y), (f = l.height)),
            null == h || null == c)
          ) {
            var d = n.getBoundingRect()
            null == h && ((h = d.x), (p = d.width)),
              null == c && ((c = d.y), (f = d.height))
          }
          u = this._boundingRect = new pi(h, c, p, f)
        }
        if (l) {
          var g = ay(l, u)
          ;(n.scaleX = n.scaleY = g.scale), (n.x = g.x), (n.y = g.y)
        }
        o.setClipPath(new qa({ shape: u.plain() }))
        var y = []
        return (
          U(e.named, function (t) {
            var e
            null != fy.get(t.svgNodeTagLower) &&
              (y.push(t),
              ((e = t.el).silent = !1),
              e.isGroup &&
                e.traverse(function (t) {
                  t.silent = !1
                }))
          }),
          { root: o, boundingRect: u, named: y }
        )
      }),
      (t.prototype.useGraphic = function (t) {
        var e = this._usedGraphicMap,
          n = e.get(t)
        return (
          n ||
          ((n =
            this._freedGraphics.pop() || this._buildGraphic(this._parsedXML)),
          e.set(t, n),
          n)
        )
      }),
      (t.prototype.freeGraphic = function (t) {
        var e = this._usedGraphicMap,
          n = e.get(t)
        n && (e.removeKey(t), this._freedGraphics.push(n))
      }),
      t
    )
  })()
function gy(t, e, n) {
  for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
    var s = t.charCodeAt(a) - 64,
      l = t.charCodeAt(a + 1) - 64
    ;(s = (s >> 1) ^ -(1 & s)),
      (l = (l >> 1) ^ -(1 & l)),
      (r = s += r),
      (o = l += o),
      i.push([s / n, l / n])
  }
  return i
}
function yy(t, e) {
  return X(
    j(
      (t = (function (t) {
        if (!t.UTF8Encoding) return t
        var e = t,
          n = e.UTF8Scale
        null == n && (n = 1024)
        for (var i = e.features, r = 0; r < i.length; r++) {
          var o = i[r].geometry
          if ('Polygon' === o.type)
            for (var a = o.coordinates, s = 0; s < a.length; s++)
              a[s] = gy(a[s], o.encodeOffsets[s], n)
          else if ('MultiPolygon' === o.type)
            for (a = o.coordinates, s = 0; s < a.length; s++)
              for (var l = a[s], u = 0; u < l.length; u++)
                l[u] = gy(l[u], o.encodeOffsets[s][u], n)
        }
        return (e.UTF8Encoding = !1), e
      })(t)).features,
      function (t) {
        return t.geometry && t.properties && t.geometry.coordinates.length > 0
      }
    ),
    function (t) {
      var n = t.properties,
        i = t.geometry,
        r = []
      if ('Polygon' === i.type) {
        var o = i.coordinates
        r.push({ type: 'polygon', exterior: o[0], interiors: o.slice(1) })
      }
      'MultiPolygon' === i.type &&
        U((o = i.coordinates), function (t) {
          t[0] &&
            r.push({ type: 'polygon', exterior: t[0], interiors: t.slice(1) })
        })
      var a = new cy(n[e || 'name'], r, n.cp)
      return (a.properties = n), a
    }
  )
}
for (
  var vy = [126, 25],
    my = [
      [
        [0, 3.5],
        [7, 11.2],
        [15, 11.9],
        [30, 7],
        [42, 0.7],
        [52, 0.7],
        [56, 7.7],
        [59, 0.7],
        [64, 0.7],
        [64, 0],
        [5, 0],
        [0, 3.5],
      ],
      [
        [13, 16.1],
        [19, 14.7],
        [16, 21.7],
        [11, 23.1],
        [13, 16.1],
      ],
      [
        [12, 32.2],
        [14, 38.5],
        [15, 38.5],
        [13, 32.2],
        [12, 32.2],
      ],
      [
        [16, 47.6],
        [12, 53.2],
        [13, 53.2],
        [18, 47.6],
        [16, 47.6],
      ],
      [
        [6, 64.4],
        [8, 70],
        [9, 70],
        [8, 64.4],
        [6, 64.4],
      ],
      [
        [23, 82.6],
        [29, 79.8],
        [30, 79.8],
        [25, 82.6],
        [23, 82.6],
      ],
      [
        [37, 70.7],
        [43, 62.3],
        [44, 62.3],
        [39, 70.7],
        [37, 70.7],
      ],
      [
        [48, 51.1],
        [51, 45.5],
        [53, 45.5],
        [50, 51.1],
        [48, 51.1],
      ],
      [
        [51, 35],
        [51, 28.7],
        [53, 28.7],
        [53, 35],
        [51, 35],
      ],
      [
        [52, 22.4],
        [55, 17.5],
        [56, 17.5],
        [53, 22.4],
        [52, 22.4],
      ],
      [
        [58, 12.6],
        [62, 7],
        [63, 7],
        [60, 12.6],
        [58, 12.6],
      ],
      [
        [0, 3.5],
        [0, 93.1],
        [64, 93.1],
        [64, 0],
        [63, 0],
        [63, 92.4],
        [1, 92.4],
        [1, 3.5],
        [0, 3.5],
      ],
    ],
    _y = 0;
  _y < my.length;
  _y++
)
  for (var xy = 0; xy < my[_y].length; xy++)
    (my[_y][xy][0] /= 10.5),
      (my[_y][xy][1] /= -14),
      (my[_y][xy][0] += vy[0]),
      (my[_y][xy][1] += vy[1])
var wy = {
  南海诸岛: [32, 80],
  广东: [0, -10],
  香港: [10, 5],
  澳门: [-10, 10],
  天津: [5, 5],
}
var by = {
  Russia: [100, 60],
  'United States': [-99, 38],
  'United States of America': [-99, 38],
}
var Sy = [
  [
    [123.45165252685547, 25.73527164402261],
    [123.49731445312499, 25.73527164402261],
    [123.49731445312499, 25.750734064600884],
    [123.45165252685547, 25.750734064600884],
    [123.45165252685547, 25.73527164402261],
  ],
]
var Ty = (function () {
  function t(t, e, n) {
    var i
    ;(this.type = 'geoJSON'),
      (this._parsedMap = mt()),
      (this._mapName = t),
      (this._specialAreas = n),
      (this._geoJSON = tt((i = e))
        ? 'undefined' != typeof JSON && JSON.parse
          ? JSON.parse(i)
          : new Function('return (' + i + ');')()
        : i)
  }
  return (
    (t.prototype.load = function (t, e) {
      e = e || 'name'
      var n = this._parsedMap.get(e)
      if (!n) {
        var i = this._parseToRegions(e)
        n = this._parsedMap.set(e, { regions: i, boundingRect: My(i) })
      }
      var r = mt(),
        o = []
      return (
        U(n.regions, function (e) {
          var n = e.name
          t && t.hasOwnProperty(n) && (e = e.cloneShallow((n = t[n]))),
            o.push(e),
            r.set(n, e)
        }),
        {
          regions: o,
          boundingRect: n.boundingRect || new pi(0, 0, 0, 0),
          regionsMap: r,
        }
      )
    }),
    (t.prototype._parseToRegions = function (t) {
      var e,
        n = this._mapName,
        i = this._geoJSON
      try {
        e = i ? yy(i, t) : []
      } catch (r) {
        throw new Error('Invalid geoJson format\n' + r.message)
      }
      return (
        (function (t, e) {
          if ('china' === t) {
            for (var n = 0; n < e.length; n++)
              if ('南海诸岛' === e[n].name) return
            e.push(
              new cy(
                '南海诸岛',
                X(my, function (t) {
                  return { type: 'polygon', exterior: t }
                }),
                vy
              )
            )
          }
        })(n, e),
        U(
          e,
          function (t) {
            var e = t.name
            !(function (t, e) {
              if ('china' === t) {
                var n = wy[e.name]
                if (n) {
                  var i = e.getCenter()
                  ;(i[0] += n[0] / 10.5), (i[1] += -n[1] / 14), e.setCenter(i)
                }
              }
            })(n, t),
              (function (t, e) {
                if ('world' === t) {
                  var n = by[e.name]
                  if (n) {
                    var i = [n[0], n[1]]
                    e.setCenter(i)
                  }
                }
              })(n, t),
              (function (t, e) {
                'china' === t &&
                  '台湾' === e.name &&
                  e.geometries.push({ type: 'polygon', exterior: Sy[0] })
              })(n, t)
            var i = this._specialAreas && this._specialAreas[e]
            i && t.transformTo(i.left, i.top, i.width, i.height)
          },
          this
        ),
        e
      )
    }),
    (t.prototype.getMapForUser = function () {
      return {
        geoJson: this._geoJSON,
        geoJSON: this._geoJSON,
        specialAreas: this._specialAreas,
      }
    }),
    t
  )
})()
function My(t) {
  for (var e, n = 0; n < t.length; n++) {
    var i = t[n].getBoundingRect()
    ;(e = e || i.clone()).union(i)
  }
  return e
}
var Cy = mt(),
  ky = {
    registerMap: function (t, e, n) {
      if (e.svg) {
        var i = new dy(t, e.svg)
        Cy.set(t, i)
      } else {
        var r = e.geoJson || e.geoJSON
        r && !e.features ? (n = e.specialAreas) : (r = e)
        i = new Ty(t, r, n)
        Cy.set(t, i)
      }
    },
    getGeoResource: function (t) {
      return Cy.get(t)
    },
    getMapForUser: function (t) {
      var e = Cy.get(t)
      return e && 'geoJSON' === e.type && e.getMapForUser()
    },
    load: function (t, e, n) {
      var i = Cy.get(t)
      if (i) return i.load(e, n)
    },
  },
  Iy = new Ut(),
  Dy = 'undefined' != typeof window,
  Ay = {
    PROCESSOR: { FILTER: 1e3, SERIES_FILTER: 800, STATISTIC: 5e3 },
    VISUAL: {
      LAYOUT: 1e3,
      PROGRESSIVE_LAYOUT: 1100,
      GLOBAL: 2e3,
      CHART: 3e3,
      POST_CHART_LAYOUT: 4600,
      COMPONENT: 4e3,
      BRUSH: 5e3,
      CHART_ITEM: 4500,
      ARIA: 6e3,
      DECAL: 7e3,
    },
  },
  Py = /^[a-zA-Z0-9_]+$/
function Oy(t) {
  return function () {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
    if (!this.isDisposed()) return Ry(this, t, e)
    this.id
  }
}
function Ly(t) {
  return function () {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
    return Ry(this, t, e)
  }
}
function Ry(t, e, n) {
  return (n[0] = n[0] && n[0].toLowerCase()), Ut.prototype[e].apply(t, n)
}
var By,
  zy,
  Ey,
  Ny,
  Fy,
  Hy,
  Vy,
  Wy,
  Gy,
  Uy,
  Xy,
  Yy,
  jy,
  qy,
  Zy,
  Ky,
  $y,
  Qy,
  Jy,
  tv = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return g(e, t), e
  })(Ut),
  ev = tv.prototype
;(ev.on = Ly('on')), (ev.off = Ly('off'))
var nv = (function (t) {
    function e(e, n, i) {
      var r = t.call(this, new Zd()) || this
      ;(r._chartsViews = []),
        (r._chartsMap = {}),
        (r._componentsViews = []),
        (r._componentsMap = {}),
        (r._pendingActions = []),
        (i = i || {}),
        'string' == typeof n && (n = hv[n]),
        (r._dom = e)
      var o = (r._zr = Fi(e, {
        renderer: i.renderer || 'canvas',
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        useDirtyRect: null != i.useDirtyRect && i.useDirtyRect,
      }))
      ;(r._throttledZrFlush = yd(K(o.flush, o), 17)),
        (n = B(n)) && Ap(n, !0),
        (r._theme = n),
        (r._locale = (function (t) {
          if (tt(t)) {
            var e = Ah[t.toUpperCase()] || {}
            return 'ZH' === t || 'EN' === t ? B(e) : z(B(e), B(Ah.EN), !1)
          }
          return z(B(t), B(Ah.EN), !1)
        })(i.locale || Oh)),
        (r._coordSysMgr = new sp())
      var a = (r._api = Ky(r))
      function s(t, e) {
        return t.__prio - e.__prio
      }
      return (
        be(uv, s),
        be(sv, s),
        (r._scheduler = new Gd(r, a, sv, uv)),
        (r._messageCenter = new tv()),
        r._initEvents(),
        (r.resize = K(r.resize, r)),
        o.animation.on('frame', r._onframe, r),
        Uy(o, r),
        Xy(o, r),
        gt(r),
        r
      )
    }
    return (
      g(e, t),
      (e.prototype._onframe = function () {
        if (!this._disposed) {
          Jy(this)
          var t = this._scheduler
          if (this.__pendingUpdate) {
            var e = this.__pendingUpdate.silent
            ;(this.__flagInMainProcess = !0),
              By(this),
              Ny.update.call(this, null, this.__pendingUpdate.updateParams),
              this._zr.flush(),
              (this.__flagInMainProcess = !1),
              (this.__pendingUpdate = null),
              Wy.call(this, e),
              Gy.call(this, e)
          } else if (t.unfinished) {
            var n = 1,
              i = this._model,
              r = this._api
            t.unfinished = !1
            do {
              var o = +new Date()
              t.performSeriesTasks(i),
                t.performDataProcessorTasks(i),
                Hy(this, i),
                t.performVisualTasks(i),
                Zy(this, this._model, r, 'remain', {}),
                (n -= +new Date() - o)
            } while (n > 0 && t.unfinished)
            t.unfinished || this._zr.flush()
          }
        }
      }),
      (e.prototype.getDom = function () {
        return this._dom
      }),
      (e.prototype.getId = function () {
        return this.id
      }),
      (e.prototype.getZr = function () {
        return this._zr
      }),
      (e.prototype.setOption = function (t, e, n) {
        if (this._disposed) this.id
        else {
          var i, r, o
          if (
            (it(e) &&
              ((n = e.lazyUpdate),
              (i = e.silent),
              (r = e.replaceMerge),
              (o = e.transition),
              (e = e.notMerge)),
            (this.__flagInMainProcess = !0),
            !this._model || e)
          ) {
            var a = new hp(this._api),
              s = this._theme,
              l = (this._model = new ip())
            ;(l.scheduler = this._scheduler),
              l.init(null, null, null, s, this._locale, a)
          }
          this._model.setOption(t, { replaceMerge: r }, lv)
          var u = { seriesTransition: o, optionChanged: !0 }
          n
            ? ((this.__pendingUpdate = { silent: i, updateParams: u }),
              (this.__flagInMainProcess = !1),
              this.getZr().wakeUp())
            : (By(this),
              Ny.update.call(this, null, u),
              this._zr.flush(),
              (this.__pendingUpdate = null),
              (this.__flagInMainProcess = !1),
              Wy.call(this, i),
              Gy.call(this, i))
        }
      }),
      (e.prototype.setTheme = function () {
        console.error('ECharts#setTheme() is DEPRECATED in ECharts 3.0')
      }),
      (e.prototype.getModel = function () {
        return this._model
      }),
      (e.prototype.getOption = function () {
        return this._model && this._model.getOption()
      }),
      (e.prototype.getWidth = function () {
        return this._zr.getWidth()
      }),
      (e.prototype.getHeight = function () {
        return this._zr.getHeight()
      }),
      (e.prototype.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || (Dy && window.devicePixelRatio) || 1
      }),
      (e.prototype.getRenderedCanvas = function (t) {
        if (x.canvasSupported)
          return (
            (t = t || {}),
            this._zr.painter.getRenderedCanvas({
              backgroundColor:
                t.backgroundColor || this._model.get('backgroundColor'),
              pixelRatio: t.pixelRatio || this.getDevicePixelRatio(),
            })
          )
      }),
      (e.prototype.getSvgDataURL = function () {
        if (x.svgSupported) {
          var t = this._zr
          return (
            U(t.storage.getDisplayList(), function (t) {
              t.stopAnimation(null, !0)
            }),
            t.painter.toDataURL()
          )
        }
      }),
      (e.prototype.getDataURL = function (t) {
        if (!this._disposed) {
          var e = (t = t || {}).excludeComponents,
            n = this._model,
            i = [],
            r = this
          U(e, function (t) {
            n.eachComponent({ mainType: t }, function (t) {
              var e = r._componentsMap[t.__viewId]
              e.group.ignore || (i.push(e), (e.group.ignore = !0))
            })
          })
          var o =
            'svg' === this._zr.painter.getType()
              ? this.getSvgDataURL()
              : this.getRenderedCanvas(t).toDataURL(
                  'image/' + ((t && t.type) || 'png')
                )
          return (
            U(i, function (t) {
              t.group.ignore = !1
            }),
            o
          )
        }
        this.id
      }),
      (e.prototype.getConnectedDataURL = function (t) {
        if (this._disposed) this.id
        else if (x.canvasSupported) {
          var e = 'svg' === t.type,
            n = this.group,
            i = Math.min,
            r = Math.max,
            o = 1 / 0
          if (fv[n]) {
            var a = o,
              s = o,
              l = -1 / 0,
              u = -1 / 0,
              h = [],
              c = (t && t.pixelRatio) || this.getDevicePixelRatio()
            U(pv, function (o, c) {
              if (o.group === n) {
                var p = e
                    ? o.getZr().painter.getSvgDom().innerHTML
                    : o.getRenderedCanvas(B(t)),
                  f = o.getDom().getBoundingClientRect()
                ;(a = i(f.left, a)),
                  (s = i(f.top, s)),
                  (l = r(f.right, l)),
                  (u = r(f.bottom, u)),
                  h.push({ dom: p, left: f.left, top: f.top })
              }
            })
            var p = (l *= c) - (a *= c),
              f = (u *= c) - (s *= c),
              d = H(),
              g = Fi(d, { renderer: e ? 'svg' : 'canvas' })
            if ((g.resize({ width: p, height: f }), e)) {
              var y = ''
              return (
                U(h, function (t) {
                  var e = t.left - a,
                    n = t.top - s
                  y +=
                    '<g transform="translate(' +
                    e +
                    ',' +
                    n +
                    ')">' +
                    t.dom +
                    '</g>'
                }),
                (g.painter.getSvgRoot().innerHTML = y),
                t.connectedBackgroundColor &&
                  g.painter.setBackgroundColor(t.connectedBackgroundColor),
                g.refreshImmediately(),
                g.painter.toDataURL()
              )
            }
            return (
              t.connectedBackgroundColor &&
                g.add(
                  new qa({
                    shape: { x: 0, y: 0, width: p, height: f },
                    style: { fill: t.connectedBackgroundColor },
                  })
                ),
              U(h, function (t) {
                var e = new Ha({
                  style: { x: t.left * c - a, y: t.top * c - s, image: t.dom },
                })
                g.add(e)
              }),
              g.refreshImmediately(),
              d.toDataURL('image/' + ((t && t.type) || 'png'))
            )
          }
          return this.getDataURL(t)
        }
      }),
      (e.prototype.convertToPixel = function (t, e) {
        return Fy(this, 'convertToPixel', t, e)
      }),
      (e.prototype.convertFromPixel = function (t, e) {
        return Fy(this, 'convertFromPixel', t, e)
      }),
      (e.prototype.containPixel = function (t, e) {
        var n
        if (!this._disposed)
          return (
            U(
              wr(this._model, t),
              function (t, i) {
                i.indexOf('Models') >= 0 &&
                  U(
                    t,
                    function (t) {
                      var r = t.coordinateSystem
                      if (r && r.containPoint) n = n || !!r.containPoint(e)
                      else if ('seriesModels' === i) {
                        var o = this._chartsMap[t.__viewId]
                        o && o.containPoint && (n = n || o.containPoint(e, t))
                      }
                    },
                    this
                  )
              },
              this
            ),
            !!n
          )
        this.id
      }),
      (e.prototype.getVisual = function (t, e) {
        var n = wr(this._model, t, { defaultMainType: 'series' }),
          i = n.seriesModel.getData(),
          r = n.hasOwnProperty('dataIndexInside')
            ? n.dataIndexInside
            : n.hasOwnProperty('dataIndex')
            ? i.indexOfRawIndex(n.dataIndex)
            : null
        return null != r
          ? (function (t, e, n) {
              switch (n) {
                case 'color':
                  return t.getItemVisual(e, 'style')[t.getVisual('drawType')]
                case 'opacity':
                  return t.getItemVisual(e, 'style').opacity
                case 'symbol':
                case 'symbolSize':
                case 'liftZ':
                  return t.getItemVisual(e, n)
              }
            })(i, r, e)
          : (function (t, e) {
              switch (e) {
                case 'color':
                  return t.getVisual('style')[t.getVisual('drawType')]
                case 'opacity':
                  return t.getVisual('style').opacity
                case 'symbol':
                case 'symbolSize':
                case 'liftZ':
                  return t.getVisual(e)
              }
            })(i, e)
      }),
      (e.prototype.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
      }),
      (e.prototype.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
      }),
      (e.prototype._initEvents = function () {
        var t,
          e,
          n,
          i = this
        U(rv, function (t) {
          var e = function (e) {
            var n,
              r = i.getModel(),
              o = e.target
            if (
              ('globalout' === t
                ? (n = {})
                : o &&
                  Jd(
                    o,
                    function (t) {
                      var e = ss(t)
                      if (e && null != e.dataIndex) {
                        var i = e.dataModel || r.getSeriesByIndex(e.seriesIndex)
                        return (
                          (n =
                            (i && i.getDataParams(e.dataIndex, e.dataType)) ||
                            {}),
                          !0
                        )
                      }
                      if (e.eventData) return (n = N({}, e.eventData)), !0
                    },
                    !0
                  ),
              n)
            ) {
              var a = n.componentType,
                s = n.componentIndex
              ;('markLine' !== a && 'markPoint' !== a && 'markArea' !== a) ||
                ((a = 'series'), (s = n.seriesIndex))
              var l = a && null != s && r.getComponent(a, s),
                u =
                  l &&
                  i['series' === l.mainType ? '_chartsMap' : '_componentsMap'][
                    l.__viewId
                  ]
              ;(n.event = e),
                (n.type = t),
                (i._$eventProcessor.eventInfo = {
                  targetEl: o,
                  packedEvent: n,
                  model: l,
                  view: u,
                }),
                i.trigger(t, n)
            }
          }
          ;(e.zrEventfulCallAtLast = !0), i._zr.on(t, e, i)
        }),
          U(av, function (t, e) {
            i._messageCenter.on(
              e,
              function (t) {
                this.trigger(e, t)
              },
              i
            )
          }),
          U(['selectchanged'], function (t) {
            i._messageCenter.on(
              t,
              function (e) {
                this.trigger(t, e)
              },
              i
            )
          }),
          (t = this._messageCenter),
          (e = this),
          (n = this._api),
          t.on('selectchanged', function (t) {
            var i = n.getModel()
            t.isFromClick
              ? (Qd('map', 'selectchanged', e, i, t),
                Qd('pie', 'selectchanged', e, i, t))
              : 'select' === t.fromAction
              ? (Qd('map', 'selected', e, i, t), Qd('pie', 'selected', e, i, t))
              : 'unselect' === t.fromAction &&
                (Qd('map', 'unselected', e, i, t),
                Qd('pie', 'unselected', e, i, t))
          })
      }),
      (e.prototype.isDisposed = function () {
        return this._disposed
      }),
      (e.prototype.clear = function () {
        this._disposed ? this.id : this.setOption({ series: [] }, !0)
      }),
      (e.prototype.dispose = function () {
        if (this._disposed) this.id
        else {
          ;(this._disposed = !0), Mr(this.getDom(), gv, '')
          var t = this,
            e = t._api,
            n = t._model
          U(t._componentsViews, function (t) {
            t.dispose(n, e)
          }),
            U(t._chartsViews, function (t) {
              t.dispose(n, e)
            }),
            t._zr.dispose(),
            (t._dom =
              t._model =
              t._chartsMap =
              t._componentsMap =
              t._chartsViews =
              t._componentsViews =
              t._scheduler =
              t._api =
              t._zr =
              t._throttledZrFlush =
              t._theme =
              t._coordSysMgr =
              t._messageCenter =
                null),
            delete pv[t.id]
        }
      }),
      (e.prototype.resize = function (t) {
        if (this._disposed) this.id
        else {
          this._zr.resize(t)
          var e = this._model
          if ((this._loadingFX && this._loadingFX.resize(), e)) {
            var n = e.resetOption('media'),
              i = t && t.silent
            this.__pendingUpdate &&
              (null == i && (i = this.__pendingUpdate.silent),
              (n = !0),
              (this.__pendingUpdate = null)),
              (this.__flagInMainProcess = !0),
              n && By(this),
              Ny.update.call(this, {
                type: 'resize',
                animation: N({ duration: 0 }, t && t.animation),
              }),
              (this.__flagInMainProcess = !1),
              Wy.call(this, i),
              Gy.call(this, i)
          }
        }
      }),
      (e.prototype.showLoading = function (t, e) {
        if (this._disposed) this.id
        else if (
          (it(t) && ((e = t), (t = '')),
          (t = t || 'default'),
          this.hideLoading(),
          cv[t])
        ) {
          var n = cv[t](this._api, e),
            i = this._zr
          ;(this._loadingFX = n), i.add(n)
        }
      }),
      (e.prototype.hideLoading = function () {
        this._disposed
          ? this.id
          : (this._loadingFX && this._zr.remove(this._loadingFX),
            (this._loadingFX = null))
      }),
      (e.prototype.makeActionFromEvent = function (t) {
        var e = N({}, t)
        return (e.type = av[t.type]), e
      }),
      (e.prototype.dispatchAction = function (t, e) {
        if (this._disposed) this.id
        else if ((it(e) || (e = { silent: !!e }), ov[t.type] && this._model))
          if (this.__flagInMainProcess) this._pendingActions.push(t)
          else {
            var n = e.silent
            Vy.call(this, t, n)
            var i = e.flush
            i
              ? this._zr.flush()
              : !1 !== i && x.browser.weChat && this._throttledZrFlush(),
              Wy.call(this, n),
              Gy.call(this, n)
          }
      }),
      (e.prototype.updateLabelLayout = function () {
        Iy.trigger('series:layoutlabels', this._model, this._api, {
          updatedSeries: [],
        })
      }),
      (e.prototype.appendData = function (t) {
        if (this._disposed) this.id
        else {
          var e = t.seriesIndex
          this.getModel().getSeriesByIndex(e).appendData(t),
            (this._scheduler.unfinished = !0),
            this.getZr().wakeUp()
        }
      }),
      (e.internalField = (function () {
        function t(t) {
          for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
            var r = n[i]
            'emphasis' !== r && 'blur' !== r && 'select' !== r && e.push(r)
          }
          t.selected && t.states.select && e.push('select'),
            2 === t.hoverState && t.states.emphasis
              ? e.push('emphasis')
              : 1 === t.hoverState && t.states.blur && e.push('blur'),
            t.useStates(e)
        }
        function e(t, e) {
          t.preventAutoZ ||
            n(e.group, t.get('z') || 0, t.get('zlevel') || 0, -1 / 0)
        }
        function n(t, e, i, r) {
          var o = t.getTextContent(),
            a = t.getTextGuideLine()
          if (t.isGroup)
            for (var s = t.childrenRef(), l = 0; l < s.length; l++)
              r = Math.max(n(s[l], e, i, r), r)
          else (t.z = e), (t.zlevel = i), (r = Math.max(t.z2, r))
          if (
            (o && ((o.z = e), (o.zlevel = i), isFinite(r) && (o.z2 = r + 2)), a)
          ) {
            var u = t.textGuideLineConfig
            ;(a.z = e),
              (a.zlevel = i),
              isFinite(r) && (a.z2 = r + (u && u.showAbove ? 1 : -1))
          }
          return r
        }
        function i(t, e) {
          e.group.traverse(function (t) {
            if (!Mu(t)) {
              var e = t.getTextContent(),
                n = t.getTextGuideLine()
              t.stateTransition && (t.stateTransition = null),
                e && e.stateTransition && (e.stateTransition = null),
                n && n.stateTransition && (n.stateTransition = null),
                t.hasState()
                  ? ((t.prevStates = t.currentStates), t.clearStates())
                  : t.prevStates && (t.prevStates = null)
            }
          })
        }
        function r(e, n) {
          var i = e.getModel('stateAnimation'),
            r = e.isAnimationEnabled(),
            o = i.get('duration'),
            a =
              o > 0
                ? {
                    duration: o,
                    delay: i.get('delay'),
                    easing: i.get('easing'),
                  }
                : null
          n.group.traverse(function (e) {
            if (e.states && e.states.emphasis) {
              if (Mu(e)) return
              if (
                (e instanceof La &&
                  (function (t) {
                    var e = cs(t)
                    ;(e.normalFill = t.style.fill),
                      (e.normalStroke = t.style.stroke)
                    var n = t.states.select || {}
                    ;(e.selectFill = (n.style && n.style.fill) || null),
                      (e.selectStroke = (n.style && n.style.stroke) || null)
                  })(e),
                e.__dirty)
              ) {
                var n = e.prevStates
                n && e.useStates(n)
              }
              if (r) {
                e.stateTransition = a
                var i = e.getTextContent(),
                  o = e.getTextGuideLine()
                i && (i.stateTransition = a), o && (o.stateTransition = a)
              }
              e.__dirty && t(e)
            }
          })
        }
        ;(By = function (t) {
          var e = t._scheduler
          e.restorePipelines(t._model),
            e.prepareStageTasks(),
            zy(t, !0),
            zy(t, !1),
            e.plan()
        }),
          (zy = function (t, e) {
            for (
              var n = t._model,
                i = t._scheduler,
                r = e ? t._componentsViews : t._chartsViews,
                o = e ? t._componentsMap : t._chartsMap,
                a = t._zr,
                s = t._api,
                l = 0;
              l < r.length;
              l++
            )
              r[l].__alive = !1
            function u(t) {
              var l = t.__requireNewView
              t.__requireNewView = !1
              var u = '_ec_' + t.id + '_' + t.type,
                h = !l && o[u]
              if (!h) {
                var c = Dr(t.type)
                ;(h = new (
                  e ? rd.getClass(c.main, c.sub) : dd.getClass(c.sub)
                )()).init(n, s),
                  (o[u] = h),
                  r.push(h),
                  a.add(h.group)
              }
              ;(t.__viewId = h.__id = u),
                (h.__alive = !0),
                (h.__model = t),
                (h.group.__ecComponentInfo = {
                  mainType: t.mainType,
                  index: t.componentIndex,
                }),
                !e && i.prepareView(h, t, n, s)
            }
            e
              ? n.eachComponent(function (t, e) {
                  'series' !== t && u(e)
                })
              : n.eachSeries(u)
            for (l = 0; l < r.length; ) {
              var h = r[l]
              h.__alive
                ? l++
                : (!e && h.renderTask.dispose(),
                  a.remove(h.group),
                  h.dispose(n, s),
                  r.splice(l, 1),
                  o[h.__id] === h && delete o[h.__id],
                  (h.__id = h.group.__ecComponentInfo = null))
            }
          }),
          (Ey = function (t, e, n, i, r) {
            var o = t._model
            if ((o.setUpdatePayload(n), i)) {
              var a = {}
              ;(a[i + 'Id'] = n[i + 'Id']),
                (a[i + 'Index'] = n[i + 'Index']),
                (a[i + 'Name'] = n[i + 'Name'])
              var s = { mainType: i, query: a }
              r && (s.subType = r)
              var l,
                u = n.excludeSeriesId
              null != u &&
                ((l = mt()),
                U(sr(u), function (t) {
                  var e = gr(t, null)
                  null != e && l.set(e, !0)
                })),
                tl(n) && Fs(t._api),
                o &&
                  o.eachComponent(
                    s,
                    function (e) {
                      if (!(l && null !== l.get(e.id)))
                        if (tl(n))
                          if (e instanceof nd)
                            'highlight' !== n.type ||
                              n.notBlur ||
                              (function (t, e, n) {
                                var i = t.seriesIndex,
                                  r = t.getData(e.dataType),
                                  o = mr(r, e)
                                o = (Q(o) ? o[0] : o) || 0
                                var a = r.getItemGraphicEl(o)
                                if (!a)
                                  for (var s = r.count(), l = 0; !a && l < s; )
                                    a = r.getItemGraphicEl(l++)
                                if (a) {
                                  var u = ss(a)
                                  Hs(i, u.focus, u.blurScope, n)
                                } else {
                                  var h = t.get(['emphasis', 'focus']),
                                    c = t.get(['emphasis', 'blurScope'])
                                  null != h && Hs(i, h, c, n)
                                }
                              })(e, n, t._api)
                          else {
                            var i = Ws(
                                e.mainType,
                                e.componentIndex,
                                n.name,
                                t._api
                              ),
                              r = i.focusSelf,
                              o = i.dispatchers
                            'highlight' === n.type &&
                              r &&
                              !n.notBlur &&
                              Vs(e.mainType, e.componentIndex, t._api),
                              o &&
                                U(o, function (t) {
                                  'highlight' === n.type ? Ls(t) : Rs(t)
                                })
                          }
                        else
                          Js(n) &&
                            e instanceof nd &&
                            (!(function (t, e, n) {
                              if (Js(e)) {
                                var i = e.dataType,
                                  r = mr(t.getData(i), e)
                                Q(r) || (r = [r]),
                                  t[
                                    'toggleSelect' === e.type
                                      ? 'toggleSelect'
                                      : 'select' === e.type
                                      ? 'select'
                                      : 'unselect'
                                  ](r, i)
                              }
                            })(e, n, t._api),
                            Gs(e),
                            Qy(t))
                    },
                    t
                  ),
                o &&
                  o.eachComponent(
                    s,
                    function (e) {
                      ;(l && null !== l.get(e.id)) ||
                        h(
                          t['series' === i ? '_chartsMap' : '_componentsMap'][
                            e.__viewId
                          ]
                        )
                    },
                    t
                  )
            } else U([].concat(t._componentsViews).concat(t._chartsViews), h)
            function h(i) {
              i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
            }
          }),
          (Ny = {
            prepareAndUpdate: function (t) {
              By(this),
                Ny.update.call(this, t, { optionChanged: null != t.newOption })
            },
            update: function (t, e) {
              var n = this._model,
                i = this._api,
                r = this._zr,
                o = this._coordSysMgr,
                a = this._scheduler
              if (n) {
                n.setUpdatePayload(t),
                  a.restoreData(n, t),
                  a.performSeriesTasks(n),
                  o.create(n, i),
                  a.performDataProcessorTasks(n, t),
                  Hy(this, n),
                  o.update(n, i),
                  Yy(n),
                  a.performVisualTasks(n, t),
                  jy(this, n, i, t, e)
                var s = n.get('backgroundColor') || 'transparent',
                  l = n.get('darkMode')
                if (x.canvasSupported)
                  r.setBackgroundColor(s),
                    null != l && 'auto' !== l && r.setDarkMode(l)
                else {
                  var u = Ye(s)
                  ;(s = Qe(u, 'rgb')), 0 === u[3] && (s = 'transparent')
                }
                Iy.trigger('afterupdate', n, i)
              }
            },
            updateTransform: function (t) {
              var e = this,
                n = this._model,
                i = this._api
              if (n) {
                n.setUpdatePayload(t)
                var r = []
                n.eachComponent(function (o, a) {
                  if ('series' !== o) {
                    var s = e.getViewOfComponentModel(a)
                    if (s && s.__alive)
                      if (s.updateTransform) {
                        var l = s.updateTransform(a, n, i, t)
                        l && l.update && r.push(s)
                      } else r.push(s)
                  }
                })
                var o = mt()
                n.eachSeries(function (r) {
                  var a = e._chartsMap[r.__viewId]
                  if (a.updateTransform) {
                    var s = a.updateTransform(r, n, i, t)
                    s && s.update && o.set(r.uid, 1)
                  } else o.set(r.uid, 1)
                }),
                  Yy(n),
                  this._scheduler.performVisualTasks(n, t, {
                    setDirty: !0,
                    dirtyMap: o,
                  }),
                  Zy(this, n, i, t, {}, o),
                  Iy.trigger('afterupdate', n, i)
              }
            },
            updateView: function (t) {
              var e = this._model
              e &&
                (e.setUpdatePayload(t),
                dd.markUpdateMethod(t, 'updateView'),
                Yy(e),
                this._scheduler.performVisualTasks(e, t, { setDirty: !0 }),
                jy(this, e, this._api, t, {}),
                Iy.trigger('afterupdate', e, this._api))
            },
            updateVisual: function (t) {
              var e = this,
                n = this._model
              n &&
                (n.setUpdatePayload(t),
                n.eachSeries(function (t) {
                  t.getData().clearAllVisual()
                }),
                dd.markUpdateMethod(t, 'updateVisual'),
                Yy(n),
                this._scheduler.performVisualTasks(n, t, {
                  visualType: 'visual',
                  setDirty: !0,
                }),
                n.eachComponent(function (i, r) {
                  if ('series' !== i) {
                    var o = e.getViewOfComponentModel(r)
                    o && o.__alive && o.updateVisual(r, n, e._api, t)
                  }
                }),
                n.eachSeries(function (i) {
                  e._chartsMap[i.__viewId].updateVisual(i, n, e._api, t)
                }),
                Iy.trigger('afterupdate', n, this._api))
            },
            updateLayout: function (t) {
              Ny.update.call(this, t)
            },
          }),
          (Fy = function (t, e, n, i) {
            if (t._disposed) t.id
            else
              for (
                var r,
                  o = t._model,
                  a = t._coordSysMgr.getCoordinateSystems(),
                  s = wr(o, n),
                  l = 0;
                l < a.length;
                l++
              ) {
                var u = a[l]
                if (u[e] && null != (r = u[e](o, s, i))) return r
              }
          }),
          (Hy = function (t, e) {
            var n = t._chartsMap,
              i = t._scheduler
            e.eachSeries(function (t) {
              i.updateStreamModes(t, n[t.__viewId])
            })
          }),
          (Vy = function (t, e) {
            var n = this,
              i = this.getModel(),
              r = t.type,
              o = t.escapeConnect,
              a = ov[r],
              s = a.actionInfo,
              l = (s.update || 'update').split(':'),
              u = l.pop(),
              h = null != l[0] && Dr(l[0])
            this.__flagInMainProcess = !0
            var c = [t],
              p = !1
            t.batch &&
              ((p = !0),
              (c = X(t.batch, function (e) {
                return ((e = F(N({}, e), t)).batch = null), e
              })))
            var f,
              d = [],
              g = Js(t),
              y = tl(t)
            if (
              (U(c, function (e) {
                if (
                  (((f = (f = a.action(e, n._model, n._api)) || N({}, e)).type =
                    s.event || f.type),
                  d.push(f),
                  y)
                ) {
                  var i = br(t),
                    r = i.queryOptionMap,
                    o = i.mainTypeSpecified ? r.keys()[0] : 'series'
                  Ey(n, u, e, o), Qy(n)
                } else g ? (Ey(n, u, e, 'series'), Qy(n)) : h && Ey(n, u, e, h.main, h.sub)
              }),
              'none' === u ||
                y ||
                g ||
                h ||
                (this.__pendingUpdate
                  ? (By(this),
                    Ny.update.call(this, t),
                    (this.__pendingUpdate = null))
                  : Ny[u].call(this, t)),
              (f = p
                ? { type: s.event || r, escapeConnect: o, batch: d }
                : d[0]),
              (this.__flagInMainProcess = !1),
              !e)
            ) {
              var v = this._messageCenter
              if ((v.trigger(f.type, f), g)) {
                var m = {
                  type: 'selectchanged',
                  escapeConnect: o,
                  selected: Us(i),
                  isFromClick: t.isFromClick || !1,
                  fromAction: t.type,
                  fromActionPayload: t,
                }
                v.trigger(m.type, m)
              }
            }
          }),
          (Wy = function (t) {
            for (var e = this._pendingActions; e.length; ) {
              var n = e.shift()
              Vy.call(this, n, t)
            }
          }),
          (Gy = function (t) {
            !t && this.trigger('updated')
          }),
          (Uy = function (t, e) {
            t.on('rendered', function (n) {
              e.trigger('rendered', n),
                !t.animation.isFinished() ||
                  e.__pendingUpdate ||
                  e._scheduler.unfinished ||
                  e._pendingActions.length ||
                  e.trigger('finished')
            })
          }),
          (Xy = function (t, e) {
            t.on('mouseover', function (t) {
              var n = Jd(t.target, $s)
              n &&
                (!(function (t, e, n) {
                  var i = ss(t),
                    r = Ws(
                      i.componentMainType,
                      i.componentIndex,
                      i.componentHighDownName,
                      n
                    ),
                    o = r.dispatchers,
                    a = r.focusSelf
                  o
                    ? (a && Vs(i.componentMainType, i.componentIndex, n),
                      U(o, function (t) {
                        return Ps(t, e)
                      }))
                    : (Hs(i.seriesIndex, i.focus, i.blurScope, n),
                      'self' === i.focus &&
                        Vs(i.componentMainType, i.componentIndex, n),
                      Ps(t, e))
                })(n, t, e._api),
                Qy(e))
            })
              .on('mouseout', function (t) {
                var n = Jd(t.target, $s)
                n &&
                  (!(function (t, e, n) {
                    Fs(n)
                    var i = ss(t),
                      r = Ws(
                        i.componentMainType,
                        i.componentIndex,
                        i.componentHighDownName,
                        n
                      ).dispatchers
                    r
                      ? U(r, function (t) {
                          return Os(t, e)
                        })
                      : Os(t, e)
                  })(n, t, e._api),
                  Qy(e))
              })
              .on('click', function (t) {
                var n = Jd(
                  t.target,
                  function (t) {
                    return null != ss(t).dataIndex
                  },
                  !0
                )
                if (n) {
                  var i = n.selected ? 'unselect' : 'select',
                    r = ss(n)
                  e._api.dispatchAction({
                    type: i,
                    dataType: r.dataType,
                    dataIndexInside: r.dataIndex,
                    seriesIndex: r.seriesIndex,
                    isFromClick: !0,
                  })
                }
              })
          }),
          (Yy = function (t) {
            t.clearColorPalette(),
              t.eachSeries(function (t) {
                t.clearColorPalette()
              })
          }),
          (jy = function (t, e, n, i, r) {
            qy(t, e, n, i, r),
              U(t._chartsViews, function (t) {
                t.__alive = !1
              }),
              Zy(t, e, n, i, r),
              U(t._chartsViews, function (t) {
                t.__alive || t.remove(e, n)
              })
          }),
          (qy = function (t, n, o, a, s, l) {
            U(l || t._componentsViews, function (t) {
              var s = t.__model
              i(s, t), t.render(s, n, o, a), e(s, t), r(s, t)
            })
          }),
          (Zy = function (t, n, o, a, s, l) {
            var u = t._scheduler
            ;(s = N(s || {}, { updatedSeries: n.getSeries() })),
              Iy.trigger('series:beforeupdate', n, o, s)
            var h = !1
            n.eachSeries(function (e) {
              var n = t._chartsMap[e.__viewId]
              n.__alive = !0
              var r = n.renderTask
              u.updatePayload(r, a),
                i(e, n),
                l && l.get(e.uid) && r.dirty(),
                r.perform(u.getPerformArgs(r)) && (h = !0),
                (n.group.silent = !!e.get('silent')),
                (function (t, e) {
                  var n = t.get('blendMode') || null
                  e.group.traverse(function (t) {
                    t.isGroup || (t.style.blend = n),
                      t.eachPendingDisplayable &&
                        t.eachPendingDisplayable(function (t) {
                          t.style.blend = n
                        })
                  })
                })(e, n),
                Gs(e)
            }),
              (u.unfinished = h || u.unfinished),
              Iy.trigger('series:layoutlabels', n, o, s),
              Iy.trigger('series:transition', n, o, s),
              n.eachSeries(function (n) {
                var i = t._chartsMap[n.__viewId]
                e(n, i), r(n, i)
              }),
              (function (t, e) {
                var n = t._zr.storage,
                  i = 0
                n.traverse(function (t) {
                  t.isGroup || i++
                }),
                  i > e.get('hoverLayerThreshold') &&
                    !x.node &&
                    !x.worker &&
                    e.eachSeries(function (e) {
                      if (!e.preventUsingHoverLayer) {
                        var n = t._chartsMap[e.__viewId]
                        n.__alive &&
                          n.group.traverse(function (t) {
                            t.states.emphasis &&
                              (t.states.emphasis.hoverLayer = !0)
                          })
                      }
                    })
              })(t, n),
              Iy.trigger('series:afterupdate', n, o, s)
          }),
          (Qy = function (t) {
            ;(t.__needsUpdateStatus = !0), t.getZr().wakeUp()
          }),
          (Jy = function (e) {
            e.__needsUpdateStatus &&
              (e.getZr().storage.traverse(function (e) {
                Mu(e) || t(e)
              }),
              (e.__needsUpdateStatus = !1))
          }),
          (Ky = function (t) {
            return new ((function (e) {
              function n() {
                return (null !== e && e.apply(this, arguments)) || this
              }
              return (
                g(n, e),
                (n.prototype.getCoordinateSystems = function () {
                  return t._coordSysMgr.getCoordinateSystems()
                }),
                (n.prototype.getComponentByElement = function (e) {
                  for (; e; ) {
                    var n = e.__ecComponentInfo
                    if (null != n)
                      return t._model.getComponent(n.mainType, n.index)
                    e = e.parent
                  }
                }),
                (n.prototype.enterEmphasis = function (e, n) {
                  Ls(e, n), Qy(t)
                }),
                (n.prototype.leaveEmphasis = function (e, n) {
                  Rs(e, n), Qy(t)
                }),
                (n.prototype.enterBlur = function (e) {
                  !(function (t) {
                    ks(t, bs)
                  })(e),
                    Qy(t)
                }),
                (n.prototype.leaveBlur = function (e) {
                  Bs(e), Qy(t)
                }),
                (n.prototype.enterSelect = function (e) {
                  zs(e), Qy(t)
                }),
                (n.prototype.leaveSelect = function (e) {
                  Es(e), Qy(t)
                }),
                (n.prototype.getModel = function () {
                  return t.getModel()
                }),
                (n.prototype.getViewOfComponentModel = function (e) {
                  return t.getViewOfComponentModel(e)
                }),
                (n.prototype.getViewOfSeriesModel = function (e) {
                  return t.getViewOfSeriesModel(e)
                }),
                n
              )
            })(op))(t)
          }),
          ($y = function (t) {
            function e(t, e) {
              for (var n = 0; n < t.length; n++) {
                t[n].__connectUpdateStatus = e
              }
            }
            U(av, function (n, i) {
              t._messageCenter.on(i, function (n) {
                if (fv[t.group] && 0 !== t.__connectUpdateStatus) {
                  if (n && n.escapeConnect) return
                  var i = t.makeActionFromEvent(n),
                    r = []
                  U(pv, function (e) {
                    e !== t && e.group === t.group && r.push(e)
                  }),
                    e(r, 0),
                    U(r, function (t) {
                      1 !== t.__connectUpdateStatus && t.dispatchAction(i)
                    }),
                    e(r, 2)
                }
              })
            })
          })
      })()),
      e
    )
  })(Ut),
  iv = nv.prototype
;(iv.on = Oy('on')),
  (iv.off = Oy('off')),
  (iv.one = function (t, e, n) {
    var i = this
    this.on.call(
      this,
      t,
      function n() {
        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]
        e && e.apply && e.apply(this, r), i.off(t, n)
      },
      n
    )
  })
var rv = [
  'click',
  'dblclick',
  'mouseover',
  'mouseout',
  'mousemove',
  'mousedown',
  'mouseup',
  'globalout',
  'contextmenu',
]
var ov = {},
  av = {},
  sv = [],
  lv = [],
  uv = [],
  hv = {},
  cv = {},
  pv = {},
  fv = {},
  dv = +new Date() - 0,
  gv = '_echarts_instance_'
function yv(t, e, n) {
  var i = (function (t) {
    return pv[
      (function (t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
      })(t, gv)
    ]
  })(t)
  if (i) return i
  var r = new nv(t, e, n)
  return (
    (r.id = 'ec_' + dv++),
    (pv[r.id] = r),
    Mr(t, gv, r.id),
    $y(r),
    Iy.trigger('afterinit', r),
    r
  )
}
function vv(t, e) {
  hv[t] = e
}
function mv(t) {
  V(lv, t) < 0 && lv.push(t)
}
function _v(t, e) {
  Tv(sv, t, e, 2e3)
}
function xv(t, e) {
  Iy.on(t, e)
}
function wv(t, e, n) {
  'function' == typeof e && ((n = e), (e = ''))
  var i = it(t) ? t.type : [t, (t = { event: e })][0]
  ;(t.event = (t.event || i).toLowerCase()),
    (e = t.event),
    av[e] ||
      (ft(Py.test(i) && Py.test(e)),
      ov[i] || (ov[i] = { action: n, actionInfo: t }),
      (av[e] = i))
}
function bv(t, e) {
  Tv(uv, t, e, 3e3, 'visual')
}
var Sv = []
function Tv(t, e, n, i, r) {
  if (((J(e) || it(e)) && ((n = e), (e = i)), !(V(Sv, n) >= 0))) {
    Sv.push(n)
    var o = Gd.wrapStageHandler(n, r)
    ;(o.__prio = e), (o.__raw = n), t.push(o)
  }
}
function Mv(t, e) {
  cv[t] = e
}
var Cv = function (t) {
  var e = (t = B(t)).type
  e || ar('')
  var n = e.split(':')
  2 !== n.length && ar('')
  var i = !1
  'echarts' === n[0] && ((e = n[1]), (i = !0)),
    (t.__isBuiltIn = i),
    vf.set(e, t)
}
bv(2e3, Sd),
  bv(4500, Md),
  bv(4500, Cd),
  bv(2e3, Kd),
  bv(4500, {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (t, e) {
      if (t.hasSymbolVisual && !e.isSeriesFiltered(t))
        return {
          dataEach: t.getData().hasItemOption
            ? function (t, e) {
                var n = t.getItemModel(e),
                  i = n.getShallow('symbol', !0),
                  r = n.getShallow('symbolSize', !0),
                  o = n.getShallow('symbolRotate', !0),
                  a = n.getShallow('symbolOffset', !0),
                  s = n.getShallow('symbolKeepAspect', !0)
                null != i && t.setItemVisual(e, 'symbol', i),
                  null != r && t.setItemVisual(e, 'symbolSize', r),
                  null != o && t.setItemVisual(e, 'symbolRotate', o),
                  null != a && t.setItemVisual(e, 'symbolOffset', a),
                  null != s && t.setItemVisual(e, 'symbolKeepAspect', s)
              }
            : null,
        }
    },
  }),
  bv(7e3, function (t, e) {
    t.eachRawSeries(function (n) {
      if (!t.isSeriesFiltered(n)) {
        var i = n.getData()
        i.hasItemVisual() &&
          i.each(function (t) {
            var n = i.getItemVisual(t, 'decal')
            n && (i.ensureUniqueItemVisual(t, 'style').decal = zg(n, e))
          })
        var r = i.getVisual('decal')
        if (r) i.getVisual('style').decal = zg(r, e)
      }
    })
  }),
  mv(Ap),
  _v(900, function (t) {
    var e = mt()
    t.eachSeries(function (t) {
      var n = t.get('stack')
      if (n) {
        var i = e.get(n) || e.set(n, []),
          r = t.getData(),
          o = {
            stackResultDimension: r.getCalculationInfo('stackResultDimension'),
            stackedOverDimension: r.getCalculationInfo('stackedOverDimension'),
            stackedDimension: r.getCalculationInfo('stackedDimension'),
            stackedByDimension: r.getCalculationInfo('stackedByDimension'),
            isStackedByIndex: r.getCalculationInfo('isStackedByIndex'),
            data: r,
            seriesModel: t,
          }
        if (
          !o.stackedDimension ||
          (!o.isStackedByIndex && !o.stackedByDimension)
        )
          return
        i.length &&
          r.setCalculationInfo('stackedOnSeries', i[i.length - 1].seriesModel),
          i.push(o)
      }
    }),
      e.each(Pp)
  }),
  Mv('default', function (t, e) {
    F((e = e || {}), {
      text: 'loading',
      textColor: '#000',
      fontSize: 12,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'sans-serif',
      maskColor: 'rgba(255, 255, 255, 0.8)',
      showSpinner: !0,
      color: '#5470c6',
      spinnerRadius: 10,
      lineWidth: 5,
      zlevel: 0,
    })
    var n = new Ri(),
      i = new qa({ style: { fill: e.maskColor }, zlevel: e.zlevel, z: 1e4 })
    n.add(i)
    var r,
      o = new as({
        style: {
          text: e.text,
          fill: e.textColor,
          fontSize: e.fontSize,
          fontWeight: e.fontWeight,
          fontStyle: e.fontStyle,
          fontFamily: e.fontFamily,
        },
        zlevel: e.zlevel,
        z: 10001,
      }),
      a = new qa({
        style: { fill: 'none' },
        textContent: o,
        textConfig: { position: 'right', distance: 10 },
        zlevel: e.zlevel,
        z: 10001,
      })
    return (
      n.add(a),
      e.showSpinner &&
        ((r = new uu({
          shape: {
            startAngle: -kd / 2,
            endAngle: -kd / 2 + 0.1,
            r: e.spinnerRadius,
          },
          style: { stroke: e.color, lineCap: 'round', lineWidth: e.lineWidth },
          zlevel: e.zlevel,
          z: 10001,
        }))
          .animateShape(!0)
          .when(1e3, { endAngle: (3 * kd) / 2 })
          .start('circularInOut'),
        r
          .animateShape(!0)
          .when(1e3, { startAngle: (3 * kd) / 2 })
          .delay(300)
          .start('circularInOut'),
        n.add(r)),
      (n.resize = function () {
        var n = o.getBoundingRect().width,
          s = e.showSpinner ? e.spinnerRadius : 0,
          l =
            (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 -
            (e.showSpinner && n ? 0 : 5 + n / 2) +
            (e.showSpinner ? 0 : n / 2) +
            (n ? 0 : s),
          u = t.getHeight() / 2
        e.showSpinner && r.setShape({ cx: l, cy: u }),
          a.setShape({ x: l - s, y: u - s, width: 2 * s, height: 2 * s }),
          i.setShape({ x: 0, y: 0, width: t.getWidth(), height: t.getHeight() })
      }),
      n.resize(),
      n
    )
  }),
  wv({ type: 'highlight', event: 'highlight', update: 'highlight' }, bt),
  wv({ type: 'downplay', event: 'downplay', update: 'downplay' }, bt),
  wv({ type: 'select', event: 'select', update: 'select' }, bt),
  wv({ type: 'unselect', event: 'unselect', update: 'unselect' }, bt),
  wv(
    { type: 'toggleSelect', event: 'toggleSelect', update: 'toggleSelect' },
    bt
  ),
  vv('light', Xd),
  vv('dark', qd)
var kv = _r(),
  Iv = { float: 'f', int: 'i', ordinal: 'o', number: 'n', time: 't' },
  Dv = (function () {
    function t(t) {
      ;(this.dimensions = t.dimensions),
        (this._dimOmitted = t.dimensionOmitted),
        (this.source = t.source),
        (this._fullDimCount = t.fullDimensionCount),
        this._updateDimOmitted(t.dimensionOmitted)
    }
    return (
      (t.prototype.isDimensionOmitted = function () {
        return this._dimOmitted
      }),
      (t.prototype._updateDimOmitted = function (t) {
        ;(this._dimOmitted = t),
          t && (this._dimNameMap || (this._dimNameMap = Ov(this.source)))
      }),
      (t.prototype.getSourceDimensionIndex = function (t) {
        return ut(this._dimNameMap.get(t), -1)
      }),
      (t.prototype.getSourceDimension = function (t) {
        var e = this.source.dimensionsDefine
        if (e) return e[t]
      }),
      (t.prototype.makeStoreSchema = function () {
        for (
          var t = this._fullDimCount,
            e = Up(this.source),
            n = !Lv(t),
            i = '',
            r = [],
            o = 0,
            a = 0;
          o < t;
          o++
        ) {
          var s = void 0,
            l = void 0,
            u = void 0,
            h = this.dimensions[a]
          if (h && h.storeDimIndex === o)
            (s = e ? h.name : null), (l = h.type), (u = h.ordinalMeta), a++
          else {
            var c = this.getSourceDimension(o)
            c && ((s = e ? c.name : null), (l = c.type))
          }
          r.push({ property: s, type: l, ordinalMeta: u }),
            !e ||
              null == s ||
              (h && h.isCalculationCoord) ||
              (i += n ? s.replace(/\`/g, '`1').replace(/\$/g, '`2') : s),
            (i += '$'),
            (i += Iv[l] || 'f'),
            u && (i += u.uid),
            (i += '$')
        }
        var p = this.source
        return {
          dimensions: r,
          hash: [p.seriesLayoutBy, p.startIndex, i].join('$$'),
        }
      }),
      (t.prototype.makeOutputDimensionNames = function () {
        for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
          var i = void 0,
            r = this.dimensions[n]
          if (r && r.storeDimIndex === e)
            r.isCalculationCoord || (i = r.name), n++
          else {
            var o = this.getSourceDimension(e)
            o && (i = o.name)
          }
          t.push(i)
        }
        return t
      }),
      (t.prototype.appendCalculationDimension = function (t) {
        this.dimensions.push(t),
          (t.isCalculationCoord = !0),
          this._fullDimCount++,
          this._updateDimOmitted(!0)
      }),
      t
    )
  })()
function Av(t) {
  return t instanceof Dv
}
function Pv(t) {
  for (var e = mt(), n = 0; n < (t || []).length; n++) {
    var i = t[n],
      r = it(i) ? i.name : i
    null != r && null == e.get(r) && e.set(r, n)
  }
  return e
}
function Ov(t) {
  var e = kv(t)
  return e.dimNameMap || (e.dimNameMap = Pv(t.dimensionsDefine))
}
function Lv(t) {
  return t > 30
}
function Rv(t, e, n) {
  var i,
    r,
    o,
    a = (n = n || {}).byIndex,
    s = n.stackedCoordDimension
  !(function (t) {
    return !Av(t.schema)
  })(e)
    ? ((r = e.schema), (i = r.dimensions), (o = e.store))
    : (i = e)
  var l,
    u,
    h,
    c,
    p = !(!t || !t.get('stack'))
  if (
    (U(i, function (t, e) {
      tt(t) && (i[e] = t = { name: t }),
        p &&
          !t.isExtraCoord &&
          (a || l || !t.ordinalMeta || (l = t),
          u ||
            'ordinal' === t.type ||
            'time' === t.type ||
            (s && s !== t.coordDim) ||
            (u = t))
    }),
    !u || a || l || (a = !0),
    u)
  ) {
    ;(h = '__\0ecstackresult_' + t.id),
      (c = '__\0ecstackedover_' + t.id),
      l && (l.createInvertedIndices = !0)
    var f = u.coordDim,
      d = u.type,
      g = 0
    U(i, function (t) {
      t.coordDim === f && g++
    })
    var y = {
        name: h,
        coordDim: f,
        coordDimIndex: g,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: i.length,
      },
      v = {
        name: c,
        coordDim: c,
        coordDimIndex: g + 1,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: i.length + 1,
      }
    r
      ? (o &&
          ((y.storeDimIndex = o.ensureCalculationDimension(c, d)),
          (v.storeDimIndex = o.ensureCalculationDimension(h, d))),
        r.appendCalculationDimension(y),
        r.appendCalculationDimension(v))
      : (i.push(y), i.push(v))
  }
  return {
    stackedDimension: u && u.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: a,
    stackedOverDimension: c,
    stackResultDimension: h,
  }
}
function Bv(t, e) {
  return !!e && e === t.getCalculationInfo('stackedDimension')
}
var zv = (function () {
  function t(t) {
    ;(this._setting = t || {}), (this._extent = [1 / 0, -1 / 0])
  }
  return (
    (t.prototype.getSetting = function (t) {
      return this._setting[t]
    }),
    (t.prototype.unionExtent = function (t) {
      var e = this._extent
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }),
    (t.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e))
    }),
    (t.prototype.getExtent = function () {
      return this._extent.slice()
    }),
    (t.prototype.setExtent = function (t, e) {
      var n = this._extent
      isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
    }),
    (t.prototype.isInExtentRange = function (t) {
      return this._extent[0] <= t && this._extent[1] >= t
    }),
    (t.prototype.isBlank = function () {
      return this._isBlank
    }),
    (t.prototype.setBlank = function (t) {
      this._isBlank = t
    }),
    t
  )
})()
zr(zv)
var Ev = zv,
  Nv = 0
function Fv(t) {
  return it(t) && null != t.value ? t.value : t + ''
}
var Hv = (function () {
    function t(t) {
      ;(this.categories = t.categories || []),
        (this._needCollect = t.needCollect),
        (this._deduplication = t.deduplication),
        (this.uid = ++Nv)
    }
    return (
      (t.createByAxisModel = function (e) {
        var n = e.option,
          i = n.data,
          r = i && X(i, Fv)
        return new t({
          categories: r,
          needCollect: !r,
          deduplication: !1 !== n.dedplication,
        })
      }),
      (t.prototype.getOrdinal = function (t) {
        return this._getOrCreateMap().get(t)
      }),
      (t.prototype.parseAndCollect = function (t) {
        var e,
          n = this._needCollect
        if ('string' != typeof t && !n) return t
        if (n && !this._deduplication)
          return (e = this.categories.length), (this.categories[e] = t), e
        var i = this._getOrCreateMap()
        return (
          null == (e = i.get(t)) &&
            (n
              ? ((e = this.categories.length),
                (this.categories[e] = t),
                i.set(t, e))
              : (e = NaN)),
          e
        )
      }),
      (t.prototype._getOrCreateMap = function () {
        return this._map || (this._map = mt(this.categories))
      }),
      t
    )
  })(),
  Vv = Wi
function Wv(t, e, n, i) {
  var r = {},
    o = t[1] - t[0],
    a = (r.interval = Ji(o / e, !0))
  null != n && a < n && (a = r.interval = n),
    null != i && a > i && (a = r.interval = i)
  var s = (r.intervalPrecision = Gv(a))
  return (
    (function (t, e) {
      !isFinite(t[0]) && (t[0] = e[0]),
        !isFinite(t[1]) && (t[1] = e[1]),
        Uv(t, 0, e),
        Uv(t, 1, e),
        t[0] > t[1] && (t[0] = t[1])
    })(
      (r.niceTickExtent = [
        Vv(Math.ceil(t[0] / a) * a, s),
        Vv(Math.floor(t[1] / a) * a, s),
      ]),
      t
    ),
    r
  )
}
function Gv(t) {
  return Ui(t) + 2
}
function Uv(t, e, n) {
  t[e] = Math.max(Math.min(t[e], n[1]), n[0])
}
function Xv(t, e) {
  return t >= e[0] && t <= e[1]
}
function Yv(t, e) {
  return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0])
}
function jv(t, e) {
  return t * (e[1] - e[0]) + e[0]
}
var qv = (function (t) {
  function e(e) {
    var n = t.call(this, e) || this
    n.type = 'ordinal'
    var i = n.getSetting('ordinalMeta')
    return (
      i || (i = new Hv({})),
      Q(i) &&
        (i = new Hv({
          categories: X(i, function (t) {
            return it(t) ? t.value : t
          }),
        })),
      (n._ordinalMeta = i),
      (n._extent = n.getSetting('extent') || [0, i.categories.length - 1]),
      n
    )
  }
  return (
    g(e, t),
    (e.prototype.parse = function (t) {
      return 'string' == typeof t
        ? this._ordinalMeta.getOrdinal(t)
        : Math.round(t)
    }),
    (e.prototype.contain = function (t) {
      return (
        Xv((t = this.parse(t)), this._extent) &&
        null != this._ordinalMeta.categories[t]
      )
    }),
    (e.prototype.normalize = function (t) {
      return Yv((t = this._getTickNumber(this.parse(t))), this._extent)
    }),
    (e.prototype.scale = function (t) {
      return (t = Math.round(jv(t, this._extent))), this.getRawOrdinalNumber(t)
    }),
    (e.prototype.getTicks = function () {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1]; )
        t.push({ value: n }), n++
      return t
    }),
    (e.prototype.getMinorTicks = function (t) {}),
    (e.prototype.setSortInfo = function (t) {
      if (null != t) {
        for (
          var e = t.ordinalNumbers,
            n = (this._ordinalNumbersByTick = []),
            i = (this._ticksByOrdinalNumber = []),
            r = 0,
            o = this._ordinalMeta.categories.length,
            a = Math.min(o, e.length);
          r < a;
          ++r
        ) {
          var s = e[r]
          ;(n[r] = s), (i[s] = r)
        }
        for (var l = 0; r < o; ++r) {
          for (; null != i[l]; ) l++
          n.push(l), (i[l] = r)
        }
      } else this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null
    }),
    (e.prototype._getTickNumber = function (t) {
      var e = this._ticksByOrdinalNumber
      return e && t >= 0 && t < e.length ? e[t] : t
    }),
    (e.prototype.getRawOrdinalNumber = function (t) {
      var e = this._ordinalNumbersByTick
      return e && t >= 0 && t < e.length ? e[t] : t
    }),
    (e.prototype.getLabel = function (t) {
      if (!this.isBlank()) {
        var e = this.getRawOrdinalNumber(t.value),
          n = this._ordinalMeta.categories[e]
        return null == n ? '' : n + ''
      }
    }),
    (e.prototype.count = function () {
      return this._extent[1] - this._extent[0] + 1
    }),
    (e.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e))
    }),
    (e.prototype.isInExtentRange = function (t) {
      return (
        (t = this._getTickNumber(t)),
        this._extent[0] <= t && this._extent[1] >= t
      )
    }),
    (e.prototype.getOrdinalMeta = function () {
      return this._ordinalMeta
    }),
    (e.prototype.niceTicks = function () {}),
    (e.prototype.niceExtent = function () {}),
    (e.type = 'ordinal'),
    e
  )
})(Ev)
Ev.registerClass(qv)
var Zv = qv,
  Kv = Wi,
  $v = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (
        (e.type = 'interval'), (e._interval = 0), (e._intervalPrecision = 2), e
      )
    }
    return (
      g(e, t),
      (e.prototype.parse = function (t) {
        return t
      }),
      (e.prototype.contain = function (t) {
        return Xv(t, this._extent)
      }),
      (e.prototype.normalize = function (t) {
        return Yv(t, this._extent)
      }),
      (e.prototype.scale = function (t) {
        return jv(t, this._extent)
      }),
      (e.prototype.setExtent = function (t, e) {
        var n = this._extent
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
      }),
      (e.prototype.unionExtent = function (t) {
        var e = this._extent
        t[0] < e[0] && (e[0] = t[0]),
          t[1] > e[1] && (e[1] = t[1]),
          this.setExtent(e[0], e[1])
      }),
      (e.prototype.getInterval = function () {
        return this._interval
      }),
      (e.prototype.setInterval = function (t) {
        ;(this._interval = t),
          (this._niceExtent = this._extent.slice()),
          (this._intervalPrecision = Gv(t))
      }),
      (e.prototype.getTicks = function (t) {
        var e = this._interval,
          n = this._extent,
          i = this._niceExtent,
          r = this._intervalPrecision,
          o = []
        if (!e) return o
        n[0] < i[0] &&
          (t ? o.push({ value: Kv(i[0] - e, r) }) : o.push({ value: n[0] }))
        for (
          var a = i[0];
          a <= i[1] &&
          (o.push({ value: a }), (a = Kv(a + e, r)) !== o[o.length - 1].value);

        )
          if (o.length > 1e4) return []
        var s = o.length ? o[o.length - 1].value : i[1]
        return (
          n[1] > s &&
            (t ? o.push({ value: Kv(s + e, r) }) : o.push({ value: n[1] })),
          o
        )
      }),
      (e.prototype.getMinorTicks = function (t) {
        for (
          var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1;
          r < e.length;
          r++
        ) {
          for (
            var o = e[r],
              a = e[r - 1],
              s = 0,
              l = [],
              u = (o.value - a.value) / t;
            s < t - 1;

          ) {
            var h = Kv(a.value + (s + 1) * u)
            h > i[0] && h < i[1] && l.push(h), s++
          }
          n.push(l)
        }
        return n
      }),
      (e.prototype.getLabel = function (t, e) {
        if (null == t) return ''
        var n = e && e.precision
        return (
          null == n
            ? (n = Ui(t.value) || 0)
            : 'auto' === n && (n = this._intervalPrecision),
          rc(Kv(t.value, n, !0))
        )
      }),
      (e.prototype.niceTicks = function (t, e, n) {
        t = t || 5
        var i = this._extent,
          r = i[1] - i[0]
        if (isFinite(r)) {
          r < 0 && ((r = -r), i.reverse())
          var o = Wv(i, t, e, n)
          ;(this._intervalPrecision = o.intervalPrecision),
            (this._interval = o.interval),
            (this._niceExtent = o.niceTickExtent)
        }
      }),
      (e.prototype.niceExtent = function (t) {
        var e = this._extent
        if (e[0] === e[1])
          if (0 !== e[0]) {
            var n = e[0]
            t.fixMax || (e[1] += n / 2), (e[0] -= n / 2)
          } else e[1] = 1
        var i = e[1] - e[0]
        isFinite(i) || ((e[0] = 0), (e[1] = 1)),
          this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval)
        var r = this._interval
        t.fixMin || (e[0] = Kv(Math.floor(e[0] / r) * r)),
          t.fixMax || (e[1] = Kv(Math.ceil(e[1] / r) * r))
      }),
      (e.type = 'interval'),
      e
    )
  })(Ev)
Ev.registerClass($v)
var Qv = $v,
  Jv = 'undefined' != typeof Float32Array ? Float32Array : Array
function tm(t) {
  return t.get('stack') || '__ec_stack_' + t.seriesIndex
}
function em(t) {
  return t.dim + t.index
}
function nm(t) {
  var e = [],
    n = t.axis,
    i = 'axis0'
  if ('category' === n.type) {
    for (var r = n.getBandWidth(), o = 0; o < t.count; o++)
      e.push(F({ bandWidth: r, axisKey: i, stackId: '__ec_stack_' + o }, t))
    var a = om(e),
      s = []
    for (o = 0; o < t.count; o++) {
      var l = a.axis0['__ec_stack_' + o]
      ;(l.offsetCenter = l.offset + l.width / 2), s.push(l)
    }
    return s
  }
}
function im(t, e) {
  var n = []
  return (
    e.eachSeriesByType(t, function (t) {
      um(t) && !hm(t) && n.push(t)
    }),
    n
  )
}
function rm(t) {
  var e = (function (t) {
      var e = {}
      U(t, function (t) {
        var n = t.coordinateSystem.getBaseAxis()
        if ('time' === n.type || 'value' === n.type)
          for (
            var i = t.getData(),
              r = n.dim + '_' + n.index,
              o = i.getDimensionIndex(i.mapDimension(n.dim)),
              a = i.getStore(),
              s = 0,
              l = a.count();
            s < l;
            ++s
          ) {
            var u = a.get(o, s)
            e[r] ? e[r].push(u) : (e[r] = [u])
          }
      })
      var n = {}
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          var r = e[i]
          if (r) {
            r.sort(function (t, e) {
              return t - e
            })
            for (var o = null, a = 1; a < r.length; ++a) {
              var s = r[a] - r[a - 1]
              s > 0 && (o = null === o ? s : Math.min(o, s))
            }
            n[i] = o
          }
        }
      return n
    })(t),
    n = []
  return (
    U(t, function (t) {
      var i,
        r = t.coordinateSystem.getBaseAxis(),
        o = r.getExtent()
      if ('category' === r.type) i = r.getBandWidth()
      else if ('value' === r.type || 'time' === r.type) {
        var a = r.dim + '_' + r.index,
          s = e[a],
          l = Math.abs(o[1] - o[0]),
          u = r.scale.getExtent(),
          h = Math.abs(u[1] - u[0])
        i = s ? (l / h) * s : l
      } else {
        var c = t.getData()
        i = Math.abs(o[1] - o[0]) / c.count()
      }
      var p = Vi(t.get('barWidth'), i),
        f = Vi(t.get('barMaxWidth'), i),
        d = Vi(t.get('barMinWidth') || 1, i),
        g = t.get('barGap'),
        y = t.get('barCategoryGap')
      n.push({
        bandWidth: i,
        barWidth: p,
        barMaxWidth: f,
        barMinWidth: d,
        barGap: g,
        barCategoryGap: y,
        axisKey: em(r),
        stackId: tm(t),
      })
    }),
    om(n)
  )
}
function om(t) {
  var e = {}
  U(t, function (t, n) {
    var i = t.axisKey,
      r = t.bandWidth,
      o = e[i] || {
        bandWidth: r,
        remainedWidth: r,
        autoWidthCount: 0,
        categoryGap: null,
        gap: '20%',
        stacks: {},
      },
      a = o.stacks
    e[i] = o
    var s = t.stackId
    a[s] || o.autoWidthCount++, (a[s] = a[s] || { width: 0, maxWidth: 0 })
    var l = t.barWidth
    l &&
      !a[s].width &&
      ((a[s].width = l),
      (l = Math.min(o.remainedWidth, l)),
      (o.remainedWidth -= l))
    var u = t.barMaxWidth
    u && (a[s].maxWidth = u)
    var h = t.barMinWidth
    h && (a[s].minWidth = h)
    var c = t.barGap
    null != c && (o.gap = c)
    var p = t.barCategoryGap
    null != p && (o.categoryGap = p)
  })
  var n = {}
  return (
    U(e, function (t, e) {
      n[e] = {}
      var i = t.stacks,
        r = t.bandWidth,
        o = t.categoryGap
      if (null == o) {
        var a = Z(i).length
        o = Math.max(35 - 4 * a, 15) + '%'
      }
      var s = Vi(o, r),
        l = Vi(t.gap, 1),
        u = t.remainedWidth,
        h = t.autoWidthCount,
        c = (u - s) / (h + (h - 1) * l)
      ;(c = Math.max(c, 0)),
        U(i, function (t) {
          var e = t.maxWidth,
            n = t.minWidth
          if (t.width) {
            i = t.width
            e && (i = Math.min(i, e)),
              n && (i = Math.max(i, n)),
              (t.width = i),
              (u -= i + l * i),
              h--
          } else {
            var i = c
            e && e < i && (i = Math.min(e, u)),
              n && n > i && (i = n),
              i !== c && ((t.width = i), (u -= i + l * i), h--)
          }
        }),
        (c = (u - s) / (h + (h - 1) * l)),
        (c = Math.max(c, 0))
      var p,
        f = 0
      U(i, function (t, e) {
        t.width || (t.width = c), (p = t), (f += t.width * (1 + l))
      }),
        p && (f -= p.width * l)
      var d = -f / 2
      U(i, function (t, i) {
        ;(n[e][i] = n[e][i] || { bandWidth: r, offset: d, width: t.width }),
          (d += t.width * (1 + l))
      })
    }),
    n
  )
}
function am(t, e, n) {
  if (t && e) {
    var i = t[em(e)]
    return null != i && null != n ? i[tm(n)] : i
  }
}
function sm(t, e) {
  var n = im(t, e),
    i = rm(n),
    r = {}
  U(n, function (t) {
    var e = t.getData(),
      n = t.coordinateSystem,
      o = n.getBaseAxis(),
      a = tm(t),
      s = i[em(o)][a],
      l = s.offset,
      u = s.width,
      h = n.getOtherAxis(o),
      c = t.get('barMinHeight') || 0
    ;(r[a] = r[a] || []),
      e.setLayout({ bandWidth: s.bandWidth, offset: l, size: u })
    for (
      var p = e.mapDimension(h.dim),
        f = e.mapDimension(o.dim),
        d = Bv(e, p),
        g = h.isHorizontal(),
        y = cm(o, h),
        v = e.getStore(),
        m = e.getDimensionIndex(p),
        _ = e.getDimensionIndex(f),
        x = 0,
        w = v.count();
      x < w;
      x++
    ) {
      var b = v.get(m, x),
        S = v.get(_, x),
        T = b >= 0 ? 'p' : 'n',
        M = y
      d && (r[a][S] || (r[a][S] = { p: y, n: y }), (M = r[a][S][T]))
      var C,
        k = void 0,
        I = void 0,
        D = void 0,
        A = void 0
      if (g)
        (k = M),
          (I = (C = n.dataToPoint([b, S]))[1] + l),
          (D = C[0] - y),
          (A = u),
          Math.abs(D) < c && (D = (D < 0 ? -1 : 1) * c),
          isNaN(D) || (d && (r[a][S][T] += D))
      else
        (k = (C = n.dataToPoint([S, b]))[0] + l),
          (I = M),
          (D = u),
          (A = C[1] - y),
          Math.abs(A) < c && (A = (A <= 0 ? -1 : 1) * c),
          isNaN(A) || (d && (r[a][S][T] += A))
      e.setItemLayout(x, { x: k, y: I, width: D, height: A })
    }
  })
}
var lm = {
  seriesType: 'bar',
  plan: od(),
  reset: function (t) {
    if (um(t) && hm(t)) {
      var e = t.getData(),
        n = t.coordinateSystem,
        i = n.master.getRect(),
        r = n.getBaseAxis(),
        o = n.getOtherAxis(r),
        a = e.getDimensionIndex(e.mapDimension(o.dim)),
        s = e.getDimensionIndex(e.mapDimension(r.dim)),
        l = o.isHorizontal(),
        u = l ? 0 : 1,
        h = am(rm([t]), r, t).width
      return (
        h > 0.5 || (h = 0.5),
        {
          progress: function (t, e) {
            for (
              var c,
                p = t.count,
                f = new Jv(2 * p),
                d = new Jv(2 * p),
                g = new Jv(p),
                y = [],
                v = [],
                m = 0,
                _ = 0,
                x = e.getStore();
              null != (c = t.next());

            )
              (v[u] = x.get(a, c)),
                (v[1 - u] = x.get(s, c)),
                (y = n.dataToPoint(v, null)),
                (d[m] = l ? i.x + i.width : y[0]),
                (f[m++] = y[0]),
                (d[m] = l ? y[1] : i.y + i.height),
                (f[m++] = y[1]),
                (g[_++] = c)
            e.setLayout({
              largePoints: f,
              largeDataIndices: g,
              largeBackgroundPoints: d,
              barWidth: h,
              valueAxisStart: cm(r, o),
              backgroundStart: l ? i.x : i.y,
              valueAxisHorizontal: l,
            })
          },
        }
      )
    }
  },
}
function um(t) {
  return t.coordinateSystem && 'cartesian2d' === t.coordinateSystem.type
}
function hm(t) {
  return t.pipelineContext && t.pipelineContext.large
}
function cm(t, e, n) {
  return e.toGlobalCoord(e.dataToCoord('log' === e.type ? 1 : 0))
}
var pm = (function (t) {
    function e(e) {
      var n = t.call(this, e) || this
      return (n.type = 'time'), n
    }
    return (
      g(e, t),
      (e.prototype.getLabel = function (t) {
        var e = this.getSetting('useUTC')
        return Vh(
          t.value,
          Bh[
            (function (t) {
              switch (t) {
                case 'year':
                case 'month':
                  return 'day'
                case 'millisecond':
                  return 'millisecond'
                default:
                  return 'second'
              }
            })(Fh(this._minLevelUnit))
          ] || Bh.second,
          e,
          this.getSetting('locale')
        )
      }),
      (e.prototype.getFormattedLabel = function (t, e, n) {
        var i = this.getSetting('useUTC')
        return (function (t, e, n, i, r) {
          var o = null
          if ('string' == typeof n) o = n
          else if ('function' == typeof n) o = n(t.value, e, { level: t.level })
          else {
            var a = N({}, Rh)
            if (t.level > 0)
              for (var s = 0; s < zh.length; ++s)
                a[zh[s]] = '{primary|' + a[zh[s]] + '}'
            var l = n ? (!1 === n.inherit ? n : F(n, a)) : a,
              u = Wh(t.value, r)
            if (l[u]) o = l[u]
            else if (l.inherit) {
              for (s = Eh.indexOf(u) - 1; s >= 0; --s)
                if (l[u]) {
                  o = l[u]
                  break
                }
              o = o || a.none
            }
            if (Q(o)) {
              var h =
                null == t.level
                  ? 0
                  : t.level >= 0
                  ? t.level
                  : o.length + t.level
              o = o[(h = Math.min(h, o.length - 1))]
            }
          }
          return Vh(new Date(t.value), o, r, i)
        })(t, e, n, this.getSetting('locale'), i)
      }),
      (e.prototype.getTicks = function (t) {
        var e = this._interval,
          n = this._extent,
          i = []
        if (!e) return i
        i.push({ value: n[0], level: 0 })
        var r = this.getSetting('useUTC'),
          o = (function (t, e, n, i) {
            var r = 1e4,
              o = Eh,
              a = 0
            function s(t, e, n, r, o, a, s) {
              for (var l = new Date(e), u = e, h = l[r](); u < n && u <= i[1]; )
                s.push({ value: u }), (h += t), l[o](h), (u = l.getTime())
              s.push({ value: u, notAdd: !0 })
            }
            function l(t, r, o) {
              var a = [],
                l = !r.length
              if (
                !(function (t, e, n, i) {
                  var r = $i(e),
                    o = $i(n),
                    a = function (t) {
                      return Gh(r, t, i) === Gh(o, t, i)
                    },
                    s = function () {
                      return a('year')
                    },
                    l = function () {
                      return s() && a('month')
                    },
                    u = function () {
                      return l() && a('day')
                    },
                    h = function () {
                      return u() && a('hour')
                    },
                    c = function () {
                      return h() && a('minute')
                    },
                    p = function () {
                      return c() && a('second')
                    },
                    f = function () {
                      return p() && a('millisecond')
                    }
                  switch (t) {
                    case 'year':
                      return s()
                    case 'month':
                      return l()
                    case 'day':
                      return u()
                    case 'hour':
                      return h()
                    case 'minute':
                      return c()
                    case 'second':
                      return p()
                    case 'millisecond':
                      return f()
                  }
                })(Fh(t), i[0], i[1], n)
              ) {
                l &&
                  (r = [{ value: _m(new Date(i[0]), t, n) }, { value: i[1] }])
                for (var u = 0; u < r.length - 1; u++) {
                  var h = r[u].value,
                    c = r[u + 1].value
                  if (h !== c) {
                    var p = void 0,
                      f = void 0,
                      d = void 0,
                      g = !1
                    switch (t) {
                      case 'year':
                        ;(p = Math.max(1, Math.round(e / 864e5 / 365))),
                          (f = Uh(n)),
                          (d = $h(n))
                        break
                      case 'half-year':
                      case 'quarter':
                      case 'month':
                        ;(p = gm(e)), (f = Xh(n)), (d = Qh(n))
                        break
                      case 'week':
                      case 'half-week':
                      case 'day':
                        ;(p = dm(e)), (f = Yh(n)), (d = Jh(n)), (g = !0)
                        break
                      case 'half-day':
                      case 'quarter-day':
                      case 'hour':
                        ;(p = ym(e)), (f = jh(n)), (d = tc(n))
                        break
                      case 'minute':
                        ;(p = vm(e, !0)), (f = qh(n)), (d = ec(n))
                        break
                      case 'second':
                        ;(p = vm(e, !1)), (f = Zh(n)), (d = nc(n))
                        break
                      case 'millisecond':
                        ;(p = mm(e)), (f = Kh(n)), (d = ic(n))
                    }
                    s(p, h, c, f, d, g, a),
                      'year' === t &&
                        o.length > 1 &&
                        0 === u &&
                        o.unshift({ value: o[0].value - p })
                  }
                }
                for (u = 0; u < a.length; u++) o.push(a[u])
                return a
              }
            }
            for (
              var u = [], h = [], c = 0, p = 0, f = 0;
              f < o.length && a++ < r;
              ++f
            ) {
              var d = Fh(o[f])
              if (Hh(o[f]))
                if (
                  (l(o[f], u[u.length - 1] || [], h),
                  d !== (o[f + 1] ? Fh(o[f + 1]) : null))
                ) {
                  if (h.length) {
                    ;(p = c),
                      h.sort(function (t, e) {
                        return t.value - e.value
                      })
                    for (var g = [], y = 0; y < h.length; ++y) {
                      var v = h[y].value
                      ;(0 !== y && h[y - 1].value === v) ||
                        (g.push(h[y]), v >= i[0] && v <= i[1] && c++)
                    }
                    var m = (i[1] - i[0]) / e
                    if (c > 1.5 * m && p > m / 1.5) break
                    if ((u.push(g), c > m || t === o[f])) break
                  }
                  h = []
                }
            }
            var _ = j(
                X(u, function (t) {
                  return j(t, function (t) {
                    return t.value >= i[0] && t.value <= i[1] && !t.notAdd
                  })
                }),
                function (t) {
                  return t.length > 0
                }
              ),
              x = [],
              w = _.length - 1
            for (f = 0; f < _.length; ++f)
              for (var b = _[f], S = 0; S < b.length; ++S)
                x.push({ value: b[S].value, level: w - f })
            x.sort(function (t, e) {
              return t.value - e.value
            })
            var T = []
            for (f = 0; f < x.length; ++f)
              (0 !== f && x[f].value === x[f - 1].value) || T.push(x[f])
            return T
          })(this._minLevelUnit, this._approxInterval, r, n)
        return (i = i.concat(o)).push({ value: n[1], level: 0 }), i
      }),
      (e.prototype.niceExtent = function (t) {
        var e = this._extent
        if (
          (e[0] === e[1] && ((e[0] -= 864e5), (e[1] += 864e5)),
          e[1] === -1 / 0 && e[0] === 1 / 0)
        ) {
          var n = new Date()
          ;(e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate())),
            (e[0] = e[1] - 864e5)
        }
        this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval)
      }),
      (e.prototype.niceTicks = function (t, e, n) {
        t = t || 10
        var i = this._extent,
          r = i[1] - i[0]
        ;(this._approxInterval = r / t),
          null != e && this._approxInterval < e && (this._approxInterval = e),
          null != n && this._approxInterval > n && (this._approxInterval = n)
        var o = fm.length,
          a = Math.min(
            (function (t, e, n, i) {
              for (; n < i; ) {
                var r = (n + i) >>> 1
                t[r][1] < e ? (n = r + 1) : (i = r)
              }
              return n
            })(fm, this._approxInterval, 0, o),
            o - 1
          )
        ;(this._interval = fm[a][1]),
          (this._minLevelUnit = fm[Math.max(a - 1, 0)][0])
      }),
      (e.prototype.parse = function (t) {
        return 'number' == typeof t ? t : +$i(t)
      }),
      (e.prototype.contain = function (t) {
        return Xv(this.parse(t), this._extent)
      }),
      (e.prototype.normalize = function (t) {
        return Yv(this.parse(t), this._extent)
      }),
      (e.prototype.scale = function (t) {
        return jv(t, this._extent)
      }),
      (e.type = 'time'),
      e
    )
  })(Qv),
  fm = [
    ['second', 1e3],
    ['minute', 6e4],
    ['hour', 36e5],
    ['quarter-day', 216e5],
    ['half-day', 432e5],
    ['day', 10368e4],
    ['half-week', 3024e5],
    ['week', 6048e5],
    ['month', 26784e5],
    ['quarter', 8208e6],
    ['half-year', 15768e6],
    ['year', 31536e6],
  ]
function dm(t, e) {
  return (t /= 864e5) > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1
}
function gm(t) {
  return (t /= 2592e6) > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1
}
function ym(t) {
  return (t /= 36e5) > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1
}
function vm(t, e) {
  return (t /= e ? 6e4 : 1e3) > 30
    ? 30
    : t > 20
    ? 20
    : t > 15
    ? 15
    : t > 10
    ? 10
    : t > 5
    ? 5
    : t > 2
    ? 2
    : 1
}
function mm(t) {
  return Ji(t, !0)
}
function _m(t, e, n) {
  var i = new Date(t)
  switch (Fh(e)) {
    case 'year':
    case 'month':
      i[Qh(n)](0)
    case 'day':
      i[Jh(n)](1)
    case 'hour':
      i[tc(n)](0)
    case 'minute':
      i[ec(n)](0)
    case 'second':
      i[nc(n)](0), i[ic(n)](0)
  }
  return i.getTime()
}
Ev.registerClass(pm)
var xm = pm,
  wm = Ev.prototype,
  bm = Qv.prototype,
  Sm = Wi,
  Tm = Math.floor,
  Mm = Math.ceil,
  Cm = Math.pow,
  km = Math.log,
  Im = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (
        (e.type = 'log'),
        (e.base = 10),
        (e._originalScale = new Qv()),
        (e._interval = 0),
        e
      )
    }
    return (
      g(e, t),
      (e.prototype.getTicks = function (t) {
        var e = this._originalScale,
          n = this._extent,
          i = e.getExtent()
        return X(
          bm.getTicks.call(this, t),
          function (t) {
            var e = t.value,
              r = Wi(Cm(this.base, e))
            return (
              (r = e === n[0] && this._fixMin ? Am(r, i[0]) : r),
              { value: (r = e === n[1] && this._fixMax ? Am(r, i[1]) : r) }
            )
          },
          this
        )
      }),
      (e.prototype.setExtent = function (t, e) {
        var n = this.base
        ;(t = km(t) / km(n)), (e = km(e) / km(n)), bm.setExtent.call(this, t, e)
      }),
      (e.prototype.getExtent = function () {
        var t = this.base,
          e = wm.getExtent.call(this)
        ;(e[0] = Cm(t, e[0])), (e[1] = Cm(t, e[1]))
        var n = this._originalScale.getExtent()
        return (
          this._fixMin && (e[0] = Am(e[0], n[0])),
          this._fixMax && (e[1] = Am(e[1], n[1])),
          e
        )
      }),
      (e.prototype.unionExtent = function (t) {
        this._originalScale.unionExtent(t)
        var e = this.base
        ;(t[0] = km(t[0]) / km(e)),
          (t[1] = km(t[1]) / km(e)),
          wm.unionExtent.call(this, t)
      }),
      (e.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      }),
      (e.prototype.niceTicks = function (t) {
        t = t || 10
        var e = this._extent,
          n = e[1] - e[0]
        if (!(n === 1 / 0 || n <= 0)) {
          var i,
            r = ((i = n), Math.pow(10, Qi(i)))
          for (
            (t / n) * r <= 0.5 && (r *= 10);
            !isNaN(r) && Math.abs(r) < 1 && Math.abs(r) > 0;

          )
            r *= 10
          var o = [Wi(Mm(e[0] / r) * r), Wi(Tm(e[1] / r) * r)]
          ;(this._interval = r), (this._niceExtent = o)
        }
      }),
      (e.prototype.niceExtent = function (t) {
        bm.niceExtent.call(this, t),
          (this._fixMin = t.fixMin),
          (this._fixMax = t.fixMax)
      }),
      (e.prototype.parse = function (t) {
        return t
      }),
      (e.prototype.contain = function (t) {
        return Xv((t = km(t) / km(this.base)), this._extent)
      }),
      (e.prototype.normalize = function (t) {
        return Yv((t = km(t) / km(this.base)), this._extent)
      }),
      (e.prototype.scale = function (t) {
        return (t = jv(t, this._extent)), Cm(this.base, t)
      }),
      (e.type = 'log'),
      e
    )
  })(Ev),
  Dm = Im.prototype
function Am(t, e) {
  return Sm(t, Ui(e))
}
;(Dm.getMinorTicks = bm.getMinorTicks),
  (Dm.getLabel = bm.getLabel),
  Ev.registerClass(Im)
var Pm = Im,
  Om = (function () {
    function t(t, e, n) {
      this._prepareParams(t, e, n)
    }
    return (
      (t.prototype._prepareParams = function (t, e, n) {
        n[1] < n[0] && (n = [NaN, NaN]),
          (this._dataMin = n[0]),
          (this._dataMax = n[1])
        var i = (this._isOrdinal = 'ordinal' === t.type)
        this._needCrossZero = e.getNeedCrossZero && e.getNeedCrossZero()
        var r = (this._modelMinRaw = e.get('min', !0))
        J(r)
          ? (this._modelMinNum = Bm(t, r({ min: n[0], max: n[1] })))
          : 'dataMin' !== r && (this._modelMinNum = Bm(t, r))
        var o = (this._modelMaxRaw = e.get('max', !0))
        if (
          (J(o)
            ? (this._modelMaxNum = Bm(t, o({ min: n[0], max: n[1] })))
            : 'dataMax' !== o && (this._modelMaxNum = Bm(t, o)),
          i)
        )
          this._axisDataLen = e.getCategories().length
        else {
          var a = e.get('boundaryGap'),
            s = Q(a) ? a : [a || 0, a || 0]
          'boolean' == typeof s[0] || 'boolean' == typeof s[1]
            ? (this._boundaryGapInner = [0, 0])
            : (this._boundaryGapInner = [wi(s[0], 1), wi(s[1], 1)])
        }
      }),
      (t.prototype.calculate = function () {
        var t = this._isOrdinal,
          e = this._dataMin,
          n = this._dataMax,
          i = this._axisDataLen,
          r = this._boundaryGapInner,
          o = t ? null : n - e || Math.abs(e),
          a = 'dataMin' === this._modelMinRaw ? e : this._modelMinNum,
          s = 'dataMax' === this._modelMaxRaw ? n : this._modelMaxNum,
          l = null != a,
          u = null != s
        null == a && (a = t ? (i ? 0 : NaN) : e - r[0] * o),
          null == s && (s = t ? (i ? i - 1 : NaN) : n + r[1] * o),
          (null == a || !isFinite(a)) && (a = NaN),
          (null == s || !isFinite(s)) && (s = NaN),
          a > s && ((a = NaN), (s = NaN))
        var h = st(a) || st(s) || (t && !i)
        this._needCrossZero &&
          (a > 0 && s > 0 && !l && (a = 0), a < 0 && s < 0 && !u && (s = 0))
        var c = this._determinedMin,
          p = this._determinedMax
        return (
          null != c && ((a = c), (l = !0)),
          null != p && ((s = p), (u = !0)),
          { min: a, max: s, minFixed: l, maxFixed: u, isBlank: h }
        )
      }),
      (t.prototype.modifyDataMinMax = function (t, e) {
        this[Rm[t]] = e
      }),
      (t.prototype.setDeterminedMinMax = function (t, e) {
        this[Lm[t]] = e
      }),
      (t.prototype.freeze = function () {
        this.frozen = !0
      }),
      t
    )
  })(),
  Lm = { min: '_determinedMin', max: '_determinedMax' },
  Rm = { min: '_dataMin', max: '_dataMax' }
function Bm(t, e) {
  return null == e ? null : st(e) ? NaN : t.parse(e)
}
function zm(t, e) {
  var n = t.type,
    i = (function (t, e, n) {
      var i = t.rawExtentInfo
      return i || ((i = new Om(t, e, n)), (t.rawExtentInfo = i), i)
    })(t, e, t.getExtent()).calculate()
  t.setBlank(i.isBlank)
  var r = i.min,
    o = i.max,
    a = e.ecModel
  if (a && 'time' === n) {
    var s = im('bar', a),
      l = !1
    if (
      (U(s, function (t) {
        l = l || t.getBaseAxis() === e.axis
      }),
      l)
    ) {
      var u = rm(s),
        h = (function (t, e, n, i) {
          var r = n.axis.getExtent(),
            o = r[1] - r[0],
            a = am(i, n.axis)
          if (void 0 === a) return { min: t, max: e }
          var s = 1 / 0
          U(a, function (t) {
            s = Math.min(t.offset, s)
          })
          var l = -1 / 0
          U(a, function (t) {
            l = Math.max(t.offset + t.width, l)
          }),
            (s = Math.abs(s)),
            (l = Math.abs(l))
          var u = s + l,
            h = e - t,
            c = h / (1 - (s + l) / o) - h
          return { min: (t -= c * (s / u)), max: (e += c * (l / u)) }
        })(r, o, e, u)
      ;(r = h.min), (o = h.max)
    }
  }
  return { extent: [r, o], fixMin: i.minFixed, fixMax: i.maxFixed }
}
function Em(t, e) {
  var n = zm(t, e),
    i = n.extent,
    r = e.get('splitNumber')
  t instanceof Pm && (t.base = e.get('logBase'))
  var o = t.type
  t.setExtent(i[0], i[1]),
    t.niceExtent({
      splitNumber: r,
      fixMin: n.fixMin,
      fixMax: n.fixMax,
      minInterval:
        'interval' === o || 'time' === o ? e.get('minInterval') : null,
      maxInterval:
        'interval' === o || 'time' === o ? e.get('maxInterval') : null,
    })
  var a = e.get('interval')
  null != a && t.setInterval && t.setInterval(a)
}
function Nm(t, e) {
  if ((e = e || t.get('type')))
    switch (e) {
      case 'category':
        return new Zv({
          ordinalMeta: t.getOrdinalMeta
            ? t.getOrdinalMeta()
            : t.getCategories(),
          extent: [1 / 0, -1 / 0],
        })
      case 'time':
        return new xm({
          locale: t.ecModel.getLocaleModel(),
          useUTC: t.ecModel.get('useUTC'),
        })
      default:
        return new (Ev.getClass(e) || Qv)()
    }
}
function Fm(t) {
  var e,
    n,
    i = t.getLabelModel().get('formatter'),
    r = 'category' === t.type ? t.scale.getExtent()[0] : null
  return 'time' === t.scale.type
    ? ((n = i),
      function (e, i) {
        return t.scale.getFormattedLabel(e, i, n)
      })
    : 'string' == typeof i
    ? (function (e) {
        return function (n) {
          var i = t.scale.getLabel(n)
          return e.replace('{value}', null != i ? i : '')
        }
      })(i)
    : 'function' == typeof i
    ? ((e = i),
      function (n, i) {
        return (
          null != r && (i = n.value - r),
          e(Hm(t, n), i, null != n.level ? { level: n.level } : null)
        )
      })
    : function (e) {
        return t.scale.getLabel(e)
      }
}
function Hm(t, e) {
  return 'category' === t.type ? t.scale.getLabel(e) : e.value
}
function Vm(t) {
  var e = t.get('interval')
  return null == e ? 'auto' : e
}
function Wm(t) {
  return 'category' === t.type && 0 === Vm(t.getLabelModel())
}
function Gm(t, e) {
  var n = {}
  return (
    U(t.mapDimensionsAll(e), function (e) {
      n[
        (function (t, e) {
          return Bv(t, e) ? t.getCalculationInfo('stackResultDimension') : e
        })(t, e)
      ] = !0
    }),
    Z(n)
  )
}
var Um = (function () {
    function t() {}
    return (
      (t.prototype.getNeedCrossZero = function () {
        return !this.option.scale
      }),
      (t.prototype.getCoordSysModel = function () {}),
      t
    )
  })(),
  Xm = [],
  Ym = {
    registerPreprocessor: mv,
    registerProcessor: _v,
    registerPostInit: function (t) {
      xv('afterinit', t)
    },
    registerPostUpdate: function (t) {
      xv('afterupdate', t)
    },
    registerUpdateLifecycle: xv,
    registerAction: wv,
    registerCoordinateSystem: function (t, e) {
      sp.register(t, e)
    },
    registerLayout: function (t, e) {
      Tv(uv, t, e, 1e3, 'layout')
    },
    registerVisual: bv,
    registerTransform: Cv,
    registerLoading: Mv,
    registerMap: function (t, e, n) {
      ky.registerMap(t, e, n)
    },
    PRIORITY: Ay,
    ComponentModel: Dc,
    ComponentView: rd,
    SeriesModel: nd,
    ChartView: dd,
    registerComponentModel: function (t) {
      Dc.registerClass(t)
    },
    registerComponentView: function (t) {
      rd.registerClass(t)
    },
    registerSeriesModel: function (t) {
      nd.registerClass(t)
    },
    registerChartView: function (t) {
      dd.registerClass(t)
    },
    registerSubTypeDefaulter: function (t, e) {
      Dc.registerSubTypeDefaulter(t, e)
    },
    registerPainter: function (t, e) {
      var n
      ;(n = e), (zi[t] = n)
    },
  }
function jm(t) {
  Q(t)
    ? U(t, function (t) {
        jm(t)
      })
    : V(Xm, t) >= 0 || (Xm.push(t), J(t) && (t = { install: t }), t.install(Ym))
}
var qm = _r()
function Zm(t) {
  return 'category' === t.type
    ? (function (t) {
        var e = t.getLabelModel(),
          n = $m(t, e)
        return !e.get('show') || t.scale.isBlank()
          ? { labels: [], labelCategoryInterval: n.labelCategoryInterval }
          : n
      })(t)
    : (function (t) {
        var e = t.scale.getTicks(),
          n = Fm(t)
        return {
          labels: X(e, function (e, i) {
            return {
              formattedLabel: n(e, i),
              rawLabel: t.scale.getLabel(e),
              tickValue: e.value,
            }
          }),
        }
      })(t)
}
function Km(t, e) {
  return 'category' === t.type
    ? (function (t, e) {
        var n,
          i,
          r = Qm(t, 'ticks'),
          o = Vm(e),
          a = Jm(r, o)
        if (a) return a
        ;(e.get('show') && !t.scale.isBlank()) || (n = [])
        if (J(o)) n = n_(t, o, !0)
        else if ('auto' === o) {
          var s = $m(t, t.getLabelModel())
          ;(i = s.labelCategoryInterval),
            (n = X(s.labels, function (t) {
              return t.tickValue
            }))
        } else n = e_(t, (i = o), !0)
        return t_(r, o, { ticks: n, tickCategoryInterval: i })
      })(t, e)
    : {
        ticks: X(t.scale.getTicks(), function (t) {
          return t.value
        }),
      }
}
function $m(t, e) {
  var n,
    i,
    r = Qm(t, 'labels'),
    o = Vm(e),
    a = Jm(r, o)
  return (
    a ||
    (J(o)
      ? (n = n_(t, o))
      : ((i =
          'auto' === o
            ? (function (t) {
                var e = qm(t).autoInterval
                return null != e
                  ? e
                  : (qm(t).autoInterval = t.calculateCategoryInterval())
              })(t)
            : o),
        (n = e_(t, i))),
    t_(r, o, { labels: n, labelCategoryInterval: i }))
  )
}
function Qm(t, e) {
  return qm(t)[e] || (qm(t)[e] = [])
}
function Jm(t, e) {
  for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
}
function t_(t, e, n) {
  return t.push({ key: e, value: n }), n
}
function e_(t, e, n) {
  var i = Fm(t),
    r = t.scale,
    o = r.getExtent(),
    a = t.getLabelModel(),
    s = [],
    l = Math.max((e || 0) + 1, 1),
    u = o[0],
    h = r.count()
  0 !== u && l > 1 && h / l > 2 && (u = Math.round(Math.ceil(u / l) * l))
  var c = Wm(t),
    p = a.get('showMinLabel') || c,
    f = a.get('showMaxLabel') || c
  p && u !== o[0] && g(o[0])
  for (var d = u; d <= o[1]; d += l) g(d)
  function g(t) {
    var e = { value: t }
    s.push(
      n ? t : { formattedLabel: i(e), rawLabel: r.getLabel(e), tickValue: t }
    )
  }
  return f && d - l !== o[1] && g(o[1]), s
}
function n_(t, e, n) {
  var i = t.scale,
    r = Fm(t),
    o = []
  return (
    U(i.getTicks(), function (t) {
      var a = i.getLabel(t),
        s = t.value
      e(t.value, a) &&
        o.push(n ? s : { formattedLabel: r(t), rawLabel: a, tickValue: s })
    }),
    o
  )
}
var i_ = [0, 1]
function r_(t, e) {
  var n = (t[1] - t[0]) / e / 2
  ;(t[0] += n), (t[1] -= n)
}
var o_ = (function () {
    function t(t, e, n) {
      ;(this.onBand = !1),
        (this.inverse = !1),
        (this.dim = t),
        (this.scale = e),
        (this._extent = n || [0, 0])
    }
    return (
      (t.prototype.contain = function (t) {
        var e = this._extent,
          n = Math.min(e[0], e[1]),
          i = Math.max(e[0], e[1])
        return t >= n && t <= i
      }),
      (t.prototype.containData = function (t) {
        return this.scale.contain(t)
      }),
      (t.prototype.getExtent = function () {
        return this._extent.slice()
      }),
      (t.prototype.getPixelPrecision = function (t) {
        return (function (t, e) {
          var n = Math.log,
            i = Math.LN10,
            r = Math.floor(n(t[1] - t[0]) / i),
            o = Math.round(n(Math.abs(e[1] - e[0])) / i),
            a = Math.min(Math.max(-r + o, 0), 20)
          return isFinite(a) ? a : 20
        })(t || this.scale.getExtent(), this._extent)
      }),
      (t.prototype.setExtent = function (t, e) {
        var n = this._extent
        ;(n[0] = t), (n[1] = e)
      }),
      (t.prototype.dataToCoord = function (t, e) {
        var n = this._extent,
          i = this.scale
        return (
          (t = i.normalize(t)),
          this.onBand && 'ordinal' === i.type && r_((n = n.slice()), i.count()),
          Hi(t, i_, n, e)
        )
      }),
      (t.prototype.coordToData = function (t, e) {
        var n = this._extent,
          i = this.scale
        this.onBand && 'ordinal' === i.type && r_((n = n.slice()), i.count())
        var r = Hi(t, n, i_, e)
        return this.scale.scale(r)
      }),
      (t.prototype.pointToData = function (t, e) {}),
      (t.prototype.getTicksCoords = function (t) {
        var e = (t = t || {}).tickModel || this.getTickModel(),
          n = X(
            Km(this, e).ticks,
            function (t) {
              return {
                coord: this.dataToCoord(
                  'ordinal' === this.scale.type
                    ? this.scale.getRawOrdinalNumber(t)
                    : t
                ),
                tickValue: t,
              }
            },
            this
          )
        return (
          (function (t, e, n, i) {
            var r = e.length
            if (!t.onBand || n || !r) return
            var o,
              a,
              s = t.getExtent()
            if (1 === r) (e[0].coord = s[0]), (o = e[1] = { coord: s[0] })
            else {
              var l = e[r - 1].tickValue - e[0].tickValue,
                u = (e[r - 1].coord - e[0].coord) / l
              U(e, function (t) {
                t.coord -= u / 2
              }),
                (a = 1 + t.scale.getExtent()[1] - e[r - 1].tickValue),
                (o = { coord: e[r - 1].coord + u * a }),
                e.push(o)
            }
            var h = s[0] > s[1]
            c(e[0].coord, s[0]) && (i ? (e[0].coord = s[0]) : e.shift())
            i && c(s[0], e[0].coord) && e.unshift({ coord: s[0] })
            c(s[1], o.coord) && (i ? (o.coord = s[1]) : e.pop())
            i && c(o.coord, s[1]) && e.push({ coord: s[1] })
            function c(t, e) {
              return (t = Wi(t)), (e = Wi(e)), h ? t > e : t < e
            }
          })(this, n, e.get('alignWithLabel'), t.clamp),
          n
        )
      }),
      (t.prototype.getMinorTicksCoords = function () {
        if ('ordinal' === this.scale.type) return []
        var t = this.model.getModel('minorTick').get('splitNumber')
        return (
          (t > 0 && t < 100) || (t = 5),
          X(
            this.scale.getMinorTicks(t),
            function (t) {
              return X(
                t,
                function (t) {
                  return { coord: this.dataToCoord(t), tickValue: t }
                },
                this
              )
            },
            this
          )
        )
      }),
      (t.prototype.getViewLabels = function () {
        return Zm(this).labels
      }),
      (t.prototype.getLabelModel = function () {
        return this.model.getModel('axisLabel')
      }),
      (t.prototype.getTickModel = function () {
        return this.model.getModel('axisTick')
      }),
      (t.prototype.getBandWidth = function () {
        var t = this._extent,
          e = this.scale.getExtent(),
          n = e[1] - e[0] + (this.onBand ? 1 : 0)
        0 === n && (n = 1)
        var i = Math.abs(t[1] - t[0])
        return Math.abs(i) / n
      }),
      (t.prototype.calculateCategoryInterval = function () {
        return (function (t) {
          var e = (function (t) {
              var e = t.getLabelModel()
              return {
                axisRotate: t.getRotate
                  ? t.getRotate()
                  : t.isHorizontal && !t.isHorizontal()
                  ? 90
                  : 0,
                labelRotate: e.get('rotate') || 0,
                font: e.getFont(),
              }
            })(t),
            n = Fm(t),
            i = ((e.axisRotate - e.labelRotate) / 180) * Math.PI,
            r = t.scale,
            o = r.getExtent(),
            a = r.count()
          if (o[1] - o[0] < 1) return 0
          var s = 1
          a > 40 && (s = Math.max(1, Math.floor(a / 40)))
          for (
            var l = o[0],
              u = t.dataToCoord(l + 1) - t.dataToCoord(l),
              h = Math.abs(u * Math.cos(i)),
              c = Math.abs(u * Math.sin(i)),
              p = 0,
              f = 0;
            l <= o[1];
            l += s
          ) {
            var d,
              g,
              y = vi(n({ value: l }), e.font, 'center', 'top')
            ;(d = 1.3 * y.width),
              (g = 1.3 * y.height),
              (p = Math.max(p, d, 7)),
              (f = Math.max(f, g, 7))
          }
          var v = p / h,
            m = f / c
          isNaN(v) && (v = 1 / 0), isNaN(m) && (m = 1 / 0)
          var _ = Math.max(0, Math.floor(Math.min(v, m))),
            x = qm(t.model),
            w = t.getExtent(),
            b = x.lastAutoInterval,
            S = x.lastTickCount
          return (
            null != b &&
            null != S &&
            Math.abs(b - _) <= 1 &&
            Math.abs(S - a) <= 1 &&
            b > _ &&
            x.axisExtent0 === w[0] &&
            x.axisExtent1 === w[1]
              ? (_ = b)
              : ((x.lastTickCount = a),
                (x.lastAutoInterval = _),
                (x.axisExtent0 = w[0]),
                (x.axisExtent1 = w[1])),
            _
          )
        })(this)
      }),
      t
    )
  })(),
  a_ = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      g(e, t),
      (e.type = 'grid'),
      (e.dependencies = ['xAxis', 'yAxis']),
      (e.layoutMode = 'box'),
      (e.defaultOption = {
        show: !1,
        zlevel: 0,
        z: 0,
        left: '10%',
        top: 60,
        right: '10%',
        bottom: 70,
        containLabel: !1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderColor: '#ccc',
      }),
      e
    )
  })(Dc),
  s_ = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      g(e, t),
      (e.prototype.getCoordSysModel = function () {
        return this.getReferringComponents('grid', Sr).models[0]
      }),
      (e.type = 'cartesian2dAxis'),
      e
    )
  })(Dc)
W(s_, Um)
var l_ = {
    show: !0,
    zlevel: 0,
    z: 0,
    inverse: !1,
    name: '',
    nameLocation: 'end',
    nameRotate: null,
    nameTruncate: { maxWidth: null, ellipsis: '...', placeholder: '.' },
    nameTextStyle: {},
    nameGap: 15,
    silent: !1,
    triggerEvent: !1,
    tooltip: { show: !1 },
    axisPointer: {},
    axisLine: {
      show: !0,
      onZero: !0,
      onZeroAxisIndex: null,
      lineStyle: { color: '#6E7079', width: 1, type: 'solid' },
      symbol: ['none', 'none'],
      symbolSize: [10, 15],
    },
    axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
    axisLabel: {
      show: !0,
      inside: !1,
      rotate: 0,
      showMinLabel: null,
      showMaxLabel: null,
      margin: 8,
      fontSize: 12,
    },
    splitLine: {
      show: !0,
      lineStyle: { color: ['#E0E6F1'], width: 1, type: 'solid' },
    },
    splitArea: {
      show: !1,
      areaStyle: { color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'] },
    },
  },
  u_ = z(
    {
      boundaryGap: !0,
      deduplication: null,
      splitLine: { show: !1 },
      axisTick: { alignWithLabel: !1, interval: 'auto' },
      axisLabel: { interval: 'auto' },
    },
    l_
  ),
  h_ = z(
    {
      boundaryGap: [0, 0],
      axisLine: { show: 'auto' },
      axisTick: { show: 'auto' },
      splitNumber: 5,
      minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
      minorSplitLine: { show: !1, lineStyle: { color: '#F4F7FD', width: 1 } },
    },
    l_
  ),
  c_ = {
    category: u_,
    value: h_,
    time: z(
      {
        scale: !0,
        splitNumber: 6,
        axisLabel: {
          showMinLabel: !1,
          showMaxLabel: !1,
          rich: { primary: { fontWeight: 'bold' } },
        },
        splitLine: { show: !1 },
      },
      h_
    ),
    log: F({ scale: !0, logBase: 10 }, h_),
  },
  p_ = { value: 1, category: 1, time: 1, log: 1 }
function f_(t, e, n, i) {
  U(p_, function (r, o) {
    var a = z(z({}, c_[o], !0), i, !0),
      s = (function (t) {
        function n() {
          var n = (null !== t && t.apply(this, arguments)) || this
          return (n.type = e + 'Axis.' + o), n
        }
        return (
          g(n, t),
          (n.prototype.mergeDefaultAndTheme = function (t, e) {
            var n = Tc(this),
              i = n ? Cc(t) : {}
            z(t, e.getTheme().get(o + 'Axis')),
              z(t, this.getDefaultOption()),
              (t.type = d_(t)),
              n && Mc(t, i, n)
          }),
          (n.prototype.optionUpdated = function () {
            'category' === this.option.type &&
              (this.__ordinalMeta = Hv.createByAxisModel(this))
          }),
          (n.prototype.getCategories = function (t) {
            var e = this.option
            if ('category' === e.type)
              return t ? e.data : this.__ordinalMeta.categories
          }),
          (n.prototype.getOrdinalMeta = function () {
            return this.__ordinalMeta
          }),
          (n.type = e + 'Axis.' + o),
          (n.defaultOption = a),
          n
        )
      })(n)
    t.registerComponentModel(s)
  }),
    t.registerSubTypeDefaulter(e + 'Axis', d_)
}
function d_(t) {
  return t.type || (t.data ? 'category' : 'value')
}
var g_ = (function () {
    function t(t) {
      ;(this.type = 'cartesian'),
        (this._dimList = []),
        (this._axes = {}),
        (this.name = t || '')
    }
    return (
      (t.prototype.getAxis = function (t) {
        return this._axes[t]
      }),
      (t.prototype.getAxes = function () {
        return X(
          this._dimList,
          function (t) {
            return this._axes[t]
          },
          this
        )
      }),
      (t.prototype.getAxesByScale = function (t) {
        return (
          (t = t.toLowerCase()),
          j(this.getAxes(), function (e) {
            return e.scale.type === t
          })
        )
      }),
      (t.prototype.addAxis = function (t) {
        var e = t.dim
        ;(this._axes[e] = t), this._dimList.push(e)
      }),
      t
    )
  })(),
  y_ = ['x', 'y']
function v_(t) {
  return 'interval' === t.type || 'time' === t.type
}
var m_ = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.type = 'cartesian2d'), (e.dimensions = y_), e
    }
    return (
      g(e, t),
      (e.prototype.calcAffineTransform = function () {
        this._transform = this._invTransform = null
        var t = this.getAxis('x').scale,
          e = this.getAxis('y').scale
        if (v_(t) && v_(e)) {
          var n = t.getExtent(),
            i = e.getExtent(),
            r = this.dataToPoint([n[0], i[0]]),
            o = this.dataToPoint([n[1], i[1]]),
            a = n[1] - n[0],
            s = i[1] - i[0]
          if (a && s) {
            var l = (o[0] - r[0]) / a,
              u = (o[1] - r[1]) / s,
              h = r[0] - n[0] * l,
              c = r[1] - i[0] * u,
              p = (this._transform = [l, 0, 0, u, h, c])
            this._invTransform = Un([], p)
          }
        }
      }),
      (e.prototype.getBaseAxis = function () {
        return (
          this.getAxesByScale('ordinal')[0] ||
          this.getAxesByScale('time')[0] ||
          this.getAxis('x')
        )
      }),
      (e.prototype.containPoint = function (t) {
        var e = this.getAxis('x'),
          n = this.getAxis('y')
        return (
          e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
        )
      }),
      (e.prototype.containData = function (t) {
        return (
          this.getAxis('x').containData(t[0]) &&
          this.getAxis('y').containData(t[1])
        )
      }),
      (e.prototype.dataToPoint = function (t, e, n) {
        n = n || []
        var i = t[0],
          r = t[1]
        if (
          this._transform &&
          null != i &&
          isFinite(i) &&
          null != r &&
          isFinite(r)
        )
          return Ft(n, t, this._transform)
        var o = this.getAxis('x'),
          a = this.getAxis('y')
        return (
          (n[0] = o.toGlobalCoord(o.dataToCoord(i, e))),
          (n[1] = a.toGlobalCoord(a.dataToCoord(r, e))),
          n
        )
      }),
      (e.prototype.clampData = function (t, e) {
        var n = this.getAxis('x').scale,
          i = this.getAxis('y').scale,
          r = n.getExtent(),
          o = i.getExtent(),
          a = n.parse(t[0]),
          s = i.parse(t[1])
        return (
          ((e = e || [])[0] = Math.min(
            Math.max(Math.min(r[0], r[1]), a),
            Math.max(r[0], r[1])
          )),
          (e[1] = Math.min(
            Math.max(Math.min(o[0], o[1]), s),
            Math.max(o[0], o[1])
          )),
          e
        )
      }),
      (e.prototype.pointToData = function (t, e) {
        var n = []
        if (this._invTransform) return Ft(n, t, this._invTransform)
        var i = this.getAxis('x'),
          r = this.getAxis('y')
        return (
          (n[0] = i.coordToData(i.toLocalCoord(t[0]), e)),
          (n[1] = r.coordToData(r.toLocalCoord(t[1]), e)),
          n
        )
      }),
      (e.prototype.getOtherAxis = function (t) {
        return this.getAxis('x' === t.dim ? 'y' : 'x')
      }),
      (e.prototype.getArea = function () {
        var t = this.getAxis('x').getGlobalExtent(),
          e = this.getAxis('y').getGlobalExtent(),
          n = Math.min(t[0], t[1]),
          i = Math.min(e[0], e[1]),
          r = Math.max(t[0], t[1]) - n,
          o = Math.max(e[0], e[1]) - i
        return new pi(n, i, r, o)
      }),
      e
    )
  })(g_),
  __ = (function (t) {
    function e(e, n, i, r, o) {
      var a = t.call(this, e, n, i) || this
      return (
        (a.index = 0), (a.type = r || 'value'), (a.position = o || 'bottom'), a
      )
    }
    return (
      g(e, t),
      (e.prototype.isHorizontal = function () {
        var t = this.position
        return 'top' === t || 'bottom' === t
      }),
      (e.prototype.getGlobalExtent = function (t) {
        var e = this.getExtent()
        return (
          (e[0] = this.toGlobalCoord(e[0])),
          (e[1] = this.toGlobalCoord(e[1])),
          t && e[0] > e[1] && e.reverse(),
          e
        )
      }),
      (e.prototype.pointToData = function (t, e) {
        return this.coordToData(
          this.toLocalCoord(t['x' === this.dim ? 0 : 1]),
          e
        )
      }),
      (e.prototype.setCategorySortInfo = function (t) {
        if ('category' !== this.type) return !1
        ;(this.model.option.categorySortInfo = t), this.scale.setSortInfo(t)
      }),
      e
    )
  })(o_)
function x_(t, e, n) {
  n = n || {}
  var i = t.coordinateSystem,
    r = e.axis,
    o = {},
    a = r.getAxesOnZeroOf()[0],
    s = r.position,
    l = a ? 'onZero' : s,
    u = r.dim,
    h = i.getRect(),
    c = [h.x, h.x + h.width, h.y, h.y + h.height],
    p = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
    f = e.get('offset') || 0,
    d = 'x' === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f]
  if (a) {
    var g = a.toGlobalCoord(a.dataToCoord(0))
    d[p.onZero] = Math.max(Math.min(g, d[1]), d[0])
  }
  ;(o.position = ['y' === u ? d[p[l]] : c[0], 'x' === u ? d[p[l]] : c[3]]),
    (o.rotation = (Math.PI / 2) * ('x' === u ? 0 : 1))
  ;(o.labelDirection =
    o.tickDirection =
    o.nameDirection =
      { top: -1, bottom: 1, left: -1, right: 1 }[s]),
    (o.labelOffset = a ? d[p[s]] - d[p.onZero] : 0),
    e.get(['axisTick', 'inside']) && (o.tickDirection = -o.tickDirection),
    lt(n.labelInside, e.get(['axisLabel', 'inside'])) &&
      (o.labelDirection = -o.labelDirection)
  var y = e.get(['axisLabel', 'rotate'])
  return (o.labelRotate = 'top' === l ? -y : y), (o.z2 = 1), o
}
function w_(t) {
  return 'cartesian2d' === t.get('coordinateSystem')
}
function b_(t) {
  var e = { xAxisModel: null, yAxisModel: null }
  return (
    U(e, function (n, i) {
      var r = i.replace(/Model$/, ''),
        o = t.getReferringComponents(r, Sr).models[0]
      e[i] = o
    }),
    e
  )
}
function S_(t, e) {
  return t.getCoordSysModel() === e
}
function T_(t, e, n, i) {
  n.getAxesOnZeroOf = function () {
    return r ? [r] : []
  }
  var r,
    o = t[e],
    a = n.model,
    s = a.get(['axisLine', 'onZero']),
    l = a.get(['axisLine', 'onZeroAxisIndex'])
  if (s) {
    if (null != l) M_(o[l]) && (r = o[l])
    else
      for (var u in o)
        if (o.hasOwnProperty(u) && M_(o[u]) && !i[h(o[u])]) {
          r = o[u]
          break
        }
    r && (i[h(r)] = !0)
  }
  function h(t) {
    return t.dim + '_' + t.index
  }
}
function M_(t) {
  return (
    t &&
    'category' !== t.type &&
    'time' !== t.type &&
    (function (t) {
      var e = t.scale.getExtent(),
        n = e[0],
        i = e[1]
      return !((n > 0 && i > 0) || (n < 0 && i < 0))
    })(t)
  )
}
var C_ = (function () {
    function t(t, e, n) {
      ;(this.type = 'grid'),
        (this._coordsMap = {}),
        (this._coordsList = []),
        (this._axesMap = {}),
        (this._axesList = []),
        (this.axisPointerEnabled = !0),
        (this.dimensions = y_),
        this._initCartesian(t, e, n),
        (this.model = t)
    }
    return (
      (t.prototype.getRect = function () {
        return this._rect
      }),
      (t.prototype.update = function (t, e) {
        var n = this._axesMap
        this._updateScale(t, this.model),
          U(n.x, function (t) {
            Em(t.scale, t.model)
          }),
          U(n.y, function (t) {
            Em(t.scale, t.model)
          })
        var i = {}
        U(n.x, function (t) {
          T_(n, 'y', t, i)
        }),
          U(n.y, function (t) {
            T_(n, 'x', t, i)
          }),
          this.resize(this.model, e)
      }),
      (t.prototype.resize = function (t, e, n) {
        var i = t.getBoxLayoutParams(),
          r = !n && t.get('containLabel'),
          o = bc(i, { width: e.getWidth(), height: e.getHeight() })
        this._rect = o
        var a = this._axesList
        function s() {
          U(a, function (t) {
            var e = t.isHorizontal(),
              n = e ? [0, o.width] : [0, o.height],
              i = t.inverse ? 1 : 0
            t.setExtent(n[i], n[1 - i]),
              (function (t, e) {
                var n = t.getExtent(),
                  i = n[0] + n[1]
                ;(t.toGlobalCoord =
                  'x' === t.dim
                    ? function (t) {
                        return t + e
                      }
                    : function (t) {
                        return i - t + e
                      }),
                  (t.toLocalCoord =
                    'x' === t.dim
                      ? function (t) {
                          return t - e
                        }
                      : function (t) {
                          return i - t + e
                        })
              })(t, e ? o.x : o.y)
          })
        }
        s(),
          r &&
            (U(a, function (t) {
              if (!t.model.get(['axisLabel', 'inside'])) {
                var e = (function (t) {
                  var e = t.model,
                    n = t.scale
                  if (e.get(['axisLabel', 'show']) && !n.isBlank()) {
                    var i,
                      r,
                      o = n.getExtent()
                    r = n instanceof Zv ? n.count() : (i = n.getTicks()).length
                    var a,
                      s,
                      l,
                      u,
                      h,
                      c,
                      p,
                      f = t.getLabelModel(),
                      d = Fm(t),
                      g = 1
                    r > 40 && (g = Math.ceil(r / 40))
                    for (var y = 0; y < r; y += g) {
                      var v = d(i ? i[y] : { value: o[0] + y }, y),
                        m =
                          ((s = f.getTextRect(v)),
                          (l = void 0),
                          (u = void 0),
                          (h = void 0),
                          (c = void 0),
                          (p = void 0),
                          (l = ((f.get('rotate') || 0) * Math.PI) / 180),
                          (u = s.width),
                          (h = s.height),
                          (c =
                            u * Math.abs(Math.cos(l)) +
                            Math.abs(h * Math.sin(l))),
                          (p =
                            u * Math.abs(Math.sin(l)) +
                            Math.abs(h * Math.cos(l))),
                          new pi(s.x, s.y, c, p))
                      a ? a.union(m) : (a = m)
                    }
                    return a
                  }
                })(t)
                if (e) {
                  var n = t.isHorizontal() ? 'height' : 'width',
                    i = t.model.get(['axisLabel', 'margin'])
                  ;(o[n] -= e[n] + i),
                    'top' === t.position
                      ? (o.y += e.height + i)
                      : 'left' === t.position && (o.x += e.width + i)
                }
              }
            }),
            s()),
          U(this._coordsList, function (t) {
            t.calcAffineTransform()
          })
      }),
      (t.prototype.getAxis = function (t, e) {
        var n = this._axesMap[t]
        if (null != n) return n[e || 0]
      }),
      (t.prototype.getAxes = function () {
        return this._axesList.slice()
      }),
      (t.prototype.getCartesian = function (t, e) {
        if (null != t && null != e) {
          var n = 'x' + t + 'y' + e
          return this._coordsMap[n]
        }
        it(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex))
        for (var i = 0, r = this._coordsList; i < r.length; i++)
          if (r[i].getAxis('x').index === t || r[i].getAxis('y').index === e)
            return r[i]
      }),
      (t.prototype.getCartesians = function () {
        return this._coordsList.slice()
      }),
      (t.prototype.convertToPixel = function (t, e, n) {
        var i = this._findConvertTarget(e)
        return i.cartesian
          ? i.cartesian.dataToPoint(n)
          : i.axis
          ? i.axis.toGlobalCoord(i.axis.dataToCoord(n))
          : null
      }),
      (t.prototype.convertFromPixel = function (t, e, n) {
        var i = this._findConvertTarget(e)
        return i.cartesian
          ? i.cartesian.pointToData(n)
          : i.axis
          ? i.axis.coordToData(i.axis.toLocalCoord(n))
          : null
      }),
      (t.prototype._findConvertTarget = function (t) {
        var e,
          n,
          i = t.seriesModel,
          r =
            t.xAxisModel ||
            (i && i.getReferringComponents('xAxis', Sr).models[0]),
          o =
            t.yAxisModel ||
            (i && i.getReferringComponents('yAxis', Sr).models[0]),
          a = t.gridModel,
          s = this._coordsList
        if (i) V(s, (e = i.coordinateSystem)) < 0 && (e = null)
        else if (r && o)
          e = this.getCartesian(r.componentIndex, o.componentIndex)
        else if (r) n = this.getAxis('x', r.componentIndex)
        else if (o) n = this.getAxis('y', o.componentIndex)
        else if (a) {
          a.coordinateSystem === this && (e = this._coordsList[0])
        }
        return { cartesian: e, axis: n }
      }),
      (t.prototype.containPoint = function (t) {
        var e = this._coordsList[0]
        if (e) return e.containPoint(t)
      }),
      (t.prototype._initCartesian = function (t, e, n) {
        var i = this,
          r = this,
          o = { left: !1, right: !1, top: !1, bottom: !1 },
          a = { x: {}, y: {} },
          s = { x: 0, y: 0 }
        if (
          (e.eachComponent('xAxis', l('x'), this),
          e.eachComponent('yAxis', l('y'), this),
          !s.x || !s.y)
        )
          return (this._axesMap = {}), void (this._axesList = [])
        function l(e) {
          return function (n, i) {
            if (S_(n, t)) {
              var l = n.get('position')
              'x' === e
                ? 'top' !== l &&
                  'bottom' !== l &&
                  (l = o.bottom ? 'top' : 'bottom')
                : 'left' !== l &&
                  'right' !== l &&
                  (l = o.left ? 'right' : 'left'),
                (o[l] = !0)
              var u = new __(e, Nm(n), [0, 0], n.get('type'), l),
                h = 'category' === u.type
              ;(u.onBand = h && n.get('boundaryGap')),
                (u.inverse = n.get('inverse')),
                (n.axis = u),
                (u.model = n),
                (u.grid = r),
                (u.index = i),
                r._axesList.push(u),
                (a[e][i] = u),
                s[e]++
            }
          }
        }
        ;(this._axesMap = a),
          U(a.x, function (e, n) {
            U(a.y, function (r, o) {
              var a = 'x' + n + 'y' + o,
                s = new m_(a)
              ;(s.master = i),
                (s.model = t),
                (i._coordsMap[a] = s),
                i._coordsList.push(s),
                s.addAxis(e),
                s.addAxis(r)
            })
          })
      }),
      (t.prototype._updateScale = function (t, e) {
        function n(t, e) {
          U(Gm(t, e.dim), function (n) {
            e.scale.unionExtentFromData(t, n)
          })
        }
        U(this._axesList, function (t) {
          if ((t.scale.setExtent(1 / 0, -1 / 0), 'category' === t.type)) {
            var e = t.model.get('categorySortInfo')
            t.scale.setSortInfo(e)
          }
        }),
          t.eachSeries(function (t) {
            if (w_(t)) {
              var i = b_(t),
                r = i.xAxisModel,
                o = i.yAxisModel
              if (!S_(r, e) || !S_(o, e)) return
              var a = this.getCartesian(r.componentIndex, o.componentIndex),
                s = t.getData(),
                l = a.getAxis('x'),
                u = a.getAxis('y')
              'list' === s.type && (n(s, l), n(s, u))
            }
          }, this)
      }),
      (t.prototype.getTooltipAxes = function (t) {
        var e = [],
          n = []
        return (
          U(this.getCartesians(), function (i) {
            var r = null != t && 'auto' !== t ? i.getAxis(t) : i.getBaseAxis(),
              o = i.getOtherAxis(r)
            V(e, r) < 0 && e.push(r), V(n, o) < 0 && n.push(o)
          }),
          { baseAxes: e, otherAxes: n }
        )
      }),
      (t.create = function (e, n) {
        var i = []
        return (
          e.eachComponent('grid', function (r, o) {
            var a = new t(r, e, n)
            ;(a.name = 'grid_' + o),
              a.resize(r, n, !0),
              (r.coordinateSystem = a),
              i.push(a)
          }),
          e.eachSeries(function (t) {
            if (w_(t)) {
              var e = b_(t),
                n = e.xAxisModel,
                i = e.yAxisModel,
                r = n.getCoordSysModel().coordinateSystem
              t.coordinateSystem = r.getCartesian(
                n.componentIndex,
                i.componentIndex
              )
            }
          }),
          i
        )
      }),
      (t.dimensions = y_),
      t
    )
  })(),
  k_ = Math.PI,
  I_ = (function () {
    function t(t, e) {
      ;(this.group = new Ri()),
        (this.opt = e),
        (this.axisModel = t),
        F(e, {
          labelOffset: 0,
          nameDirection: 1,
          tickDirection: 1,
          labelDirection: 1,
          silent: !0,
          handleAutoShown: function () {
            return !0
          },
        })
      var n = new Ri({
        x: e.position[0],
        y: e.position[1],
        rotation: e.rotation,
      })
      n.updateTransform(), (this._transformGroup = n)
    }
    return (
      (t.prototype.hasBuilder = function (t) {
        return !!D_[t]
      }),
      (t.prototype.add = function (t) {
        D_[t](this.opt, this.axisModel, this.group, this._transformGroup)
      }),
      (t.prototype.getGroup = function () {
        return this.group
      }),
      (t.innerTextLayout = function (t, e, n) {
        var i,
          r,
          o = qi(e - t)
        return (
          Zi(o)
            ? ((r = n > 0 ? 'top' : 'bottom'), (i = 'center'))
            : Zi(o - k_)
            ? ((r = n > 0 ? 'bottom' : 'top'), (i = 'center'))
            : ((r = 'middle'),
              (i =
                o > 0 && o < k_
                  ? n > 0
                    ? 'right'
                    : 'left'
                  : n > 0
                  ? 'left'
                  : 'right')),
          { rotation: o, textAlign: i, textVerticalAlign: r }
        )
      }),
      (t.makeAxisEventDataBase = function (t) {
        var e = { componentType: t.mainType, componentIndex: t.componentIndex }
        return (e[t.mainType + 'Index'] = t.componentIndex), e
      }),
      (t.isLabelSilent = function (t) {
        var e = t.get('tooltip')
        return t.get('silent') || !(t.get('triggerEvent') || (e && e.show))
      }),
      t
    )
  })(),
  D_ = {
    axisLine: function (t, e, n, i) {
      var r = e.get(['axisLine', 'show'])
      if (
        ('auto' === r &&
          t.handleAutoShown &&
          (r = t.handleAutoShown('axisLine')),
        r)
      ) {
        var o = e.axis.getExtent(),
          a = i.transform,
          s = [o[0], 0],
          l = [o[1], 0]
        a && (Ft(s, s, a), Ft(l, l, a))
        var u = N(
            { lineCap: 'round' },
            e.getModel(['axisLine', 'lineStyle']).getLineStyle()
          ),
          h = new eu({
            subPixelOptimize: !0,
            shape: { x1: s[0], y1: s[1], x2: l[0], y2: l[1] },
            style: u,
            strokeContainThreshold: t.strokeContainThreshold || 5,
            silent: !0,
            z2: 1,
          })
        ;(h.anid = 'line'), n.add(h)
        var c = e.get(['axisLine', 'symbol'])
        if (null != c) {
          var p = e.get(['axisLine', 'symbolSize'])
          'string' == typeof c && (c = [c, c]),
            ('string' != typeof p && 'number' != typeof p) || (p = [p, p])
          var f = fg(e.get(['axisLine', 'symbolOffset']) || 0, p),
            d = p[0],
            g = p[1]
          U(
            [
              { rotate: t.rotation + Math.PI / 2, offset: f[0], r: 0 },
              {
                rotate: t.rotation - Math.PI / 2,
                offset: f[1],
                r: Math.sqrt(
                  (s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1])
                ),
              },
            ],
            function (e, i) {
              if ('none' !== c[i] && null != c[i]) {
                var r = cg(c[i], -d / 2, -g / 2, d, g, u.stroke, !0),
                  o = e.r + e.offset
                r.attr({
                  rotation: e.rotate,
                  x: s[0] + o * Math.cos(t.rotation),
                  y: s[1] - o * Math.sin(t.rotation),
                  silent: !0,
                  z2: 11,
                }),
                  n.add(r)
              }
            }
          )
        }
      }
    },
    axisTickLabel: function (t, e, n, i) {
      var r = (function (t, e, n, i) {
          var r = n.axis,
            o = n.getModel('axisTick'),
            a = o.get('show')
          'auto' === a &&
            i.handleAutoShown &&
            (a = i.handleAutoShown('axisTick'))
          if (!a || r.scale.isBlank()) return
          for (
            var s = o.getModel('lineStyle'),
              l = i.tickDirection * o.get('length'),
              u = L_(
                r.getTicksCoords(),
                e.transform,
                l,
                F(s.getLineStyle(), {
                  stroke: n.get(['axisLine', 'lineStyle', 'color']),
                }),
                'ticks'
              ),
              h = 0;
            h < u.length;
            h++
          )
            t.add(u[h])
          return u
        })(n, i, e, t),
        o = (function (t, e, n, i) {
          var r = n.axis
          if (
            !lt(i.axisLabelShow, n.get(['axisLabel', 'show'])) ||
            r.scale.isBlank()
          )
            return
          var o = n.getModel('axisLabel'),
            a = o.get('margin'),
            s = r.getViewLabels(),
            l = ((lt(i.labelRotate, o.get('rotate')) || 0) * k_) / 180,
            u = I_.innerTextLayout(i.rotation, l, i.labelDirection),
            h = n.getCategories && n.getCategories(!0),
            c = [],
            p = I_.isLabelSilent(n),
            f = n.get('triggerEvent')
          return (
            U(s, function (s, l) {
              var d =
                  'ordinal' === r.scale.type
                    ? r.scale.getRawOrdinalNumber(s.tickValue)
                    : s.tickValue,
                g = s.formattedLabel,
                y = s.rawLabel,
                v = o
              if (h && h[d]) {
                var m = h[d]
                it(m) && m.textStyle && (v = new Ch(m.textStyle, o, n.ecModel))
              }
              var _ =
                  v.getTextColor() || n.get(['axisLine', 'lineStyle', 'color']),
                x = r.dataToCoord(d),
                w = new as({
                  x: x,
                  y: i.labelOffset + i.labelDirection * a,
                  rotation: u.rotation,
                  silent: p,
                  z2: 10,
                  style: rh(v, {
                    text: g,
                    align: v.getShallow('align', !0) || u.textAlign,
                    verticalAlign:
                      v.getShallow('verticalAlign', !0) ||
                      v.getShallow('baseline', !0) ||
                      u.textVerticalAlign,
                    fill:
                      'function' == typeof _
                        ? _(
                            'category' === r.type
                              ? y
                              : 'value' === r.type
                              ? d + ''
                              : d,
                            l
                          )
                        : _,
                  }),
                })
              if (((w.anid = 'label_' + d), f)) {
                var b = I_.makeAxisEventDataBase(n)
                ;(b.targetType = 'axisLabel'),
                  (b.value = y),
                  (ss(w).eventData = b)
              }
              e.add(w),
                w.updateTransform(),
                c.push(w),
                t.add(w),
                w.decomposeTransform()
            }),
            c
          )
        })(n, i, e, t)
      !(function (t, e, n) {
        if (Wm(t.axis)) return
        var i = t.get(['axisLabel', 'showMinLabel']),
          r = t.get(['axisLabel', 'showMaxLabel'])
        n = n || []
        var o = (e = e || [])[0],
          a = e[1],
          s = e[e.length - 1],
          l = e[e.length - 2],
          u = n[0],
          h = n[1],
          c = n[n.length - 1],
          p = n[n.length - 2]
        !1 === i
          ? (A_(o), A_(u))
          : P_(o, a) && (i ? (A_(a), A_(h)) : (A_(o), A_(u)))
        !1 === r
          ? (A_(s), A_(c))
          : P_(l, s) && (r ? (A_(l), A_(p)) : (A_(s), A_(c)))
      })(e, o, r),
        (function (t, e, n, i) {
          var r = n.axis,
            o = n.getModel('minorTick')
          if (!o.get('show') || r.scale.isBlank()) return
          var a = r.getMinorTicksCoords()
          if (!a.length) return
          for (
            var s = o.getModel('lineStyle'),
              l = i * o.get('length'),
              u = F(
                s.getLineStyle(),
                F(n.getModel('axisTick').getLineStyle(), {
                  stroke: n.get(['axisLine', 'lineStyle', 'color']),
                })
              ),
              h = 0;
            h < a.length;
            h++
          )
            for (
              var c = L_(a[h], e.transform, l, u, 'minorticks_' + h), p = 0;
              p < c.length;
              p++
            )
              t.add(c[p])
        })(n, i, e, t.tickDirection)
    },
    axisName: function (t, e, n, i) {
      var r = lt(t.axisName, e.get('name'))
      if (r) {
        var o,
          a,
          s = e.get('nameLocation'),
          l = t.nameDirection,
          u = e.getModel('nameTextStyle'),
          h = e.get('nameGap') || 0,
          c = e.axis.getExtent(),
          p = c[0] > c[1] ? -1 : 1,
          f = [
            'start' === s
              ? c[0] - p * h
              : 'end' === s
              ? c[1] + p * h
              : (c[0] + c[1]) / 2,
            O_(s) ? t.labelOffset + l * h : 0,
          ],
          d = e.get('nameRotate')
        null != d && (d = (d * k_) / 180),
          O_(s)
            ? (o = I_.innerTextLayout(
                t.rotation,
                null != d ? d : t.rotation,
                l
              ))
            : ((o = (function (t, e, n, i) {
                var r,
                  o,
                  a = qi(n - t),
                  s = i[0] > i[1],
                  l = ('start' === e && !s) || ('start' !== e && s)
                Zi(a - k_ / 2)
                  ? ((o = l ? 'bottom' : 'top'), (r = 'center'))
                  : Zi(a - 1.5 * k_)
                  ? ((o = l ? 'top' : 'bottom'), (r = 'center'))
                  : ((o = 'middle'),
                    (r =
                      a < 1.5 * k_ && a > k_ / 2
                        ? l
                          ? 'left'
                          : 'right'
                        : l
                        ? 'right'
                        : 'left'))
                return { rotation: a, textAlign: r, textVerticalAlign: o }
              })(t.rotation, s, d || 0, c)),
              null != (a = t.axisNameAvailableWidth) &&
                ((a = Math.abs(a / Math.sin(o.rotation))),
                !isFinite(a) && (a = null)))
        var g = u.getFont(),
          y = e.get('nameTruncate', !0) || {},
          v = y.ellipsis,
          m = lt(t.nameTruncateMaxWidth, y.maxWidth, a),
          _ = new as({
            x: f[0],
            y: f[1],
            rotation: o.rotation,
            silent: I_.isLabelSilent(e),
            style: rh(u, {
              text: r,
              font: g,
              overflow: 'truncate',
              width: m,
              ellipsis: v,
              fill:
                u.getTextColor() || e.get(['axisLine', 'lineStyle', 'color']),
              align: u.get('align') || o.textAlign,
              verticalAlign: u.get('verticalAlign') || o.textVerticalAlign,
            }),
            z2: 1,
          })
        if (
          ($u({ el: _, componentModel: e, itemName: r }),
          (_.__fullText = r),
          (_.anid = 'name'),
          e.get('triggerEvent'))
        ) {
          var x = I_.makeAxisEventDataBase(e)
          ;(x.targetType = 'axisName'), (x.name = r), (ss(_).eventData = x)
        }
        i.add(_), _.updateTransform(), n.add(_), _.decomposeTransform()
      }
    },
  }
function A_(t) {
  t && (t.ignore = !0)
}
function P_(t, e) {
  var n = t && t.getBoundingRect().clone(),
    i = e && e.getBoundingRect().clone()
  if (n && i) {
    var r = Nn([])
    return (
      Wn(r, r, -t.rotation),
      n.applyTransform(Hn([], r, t.getLocalTransform())),
      i.applyTransform(Hn([], r, e.getLocalTransform())),
      n.intersect(i)
    )
  }
}
function O_(t) {
  return 'middle' === t || 'center' === t
}
function L_(t, e, n, i, r) {
  for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
    var u = t[l].coord
    ;(a[0] = u),
      (a[1] = 0),
      (s[0] = u),
      (s[1] = n),
      e && (Ft(a, a, e), Ft(s, s, e))
    var h = new eu({
      subPixelOptimize: !0,
      shape: { x1: a[0], y1: a[1], x2: s[0], y2: s[1] },
      style: i,
      z2: 2,
      autoBatch: !0,
      silent: !0,
    })
    ;(h.anid = r + '_' + t[l].tickValue), o.push(h)
  }
  return o
}
var R_ = I_
function B_(t, e) {
  var n = {
    axesInfo: {},
    seriesInvolved: !1,
    coordSysAxesInfo: {},
    coordSysMap: {},
  }
  return (
    (function (t, e, n) {
      var i = e.getComponent('tooltip'),
        r = e.getComponent('axisPointer'),
        o = r.get('link', !0) || [],
        a = []
      U(n.getCoordinateSystems(), function (n) {
        if (n.axisPointerEnabled) {
          var s = H_(n.model),
            l = (t.coordSysAxesInfo[s] = {})
          t.coordSysMap[s] = n
          var u = n.model.getModel('tooltip', i)
          if (
            (U(n.getAxes(), $(f, !1, null)),
            n.getTooltipAxes && i && u.get('show'))
          ) {
            var h = 'axis' === u.get('trigger'),
              c = 'cross' === u.get(['axisPointer', 'type']),
              p = n.getTooltipAxes(u.get(['axisPointer', 'axis']))
            ;(h || c) && U(p.baseAxes, $(f, !c || 'cross', h)),
              c && U(p.otherAxes, $(f, 'cross', !1))
          }
        }
        function f(i, s, h) {
          var c = h.model.getModel('axisPointer', r),
            p = c.get('show')
          if (p && ('auto' !== p || i || F_(c))) {
            null == s && (s = c.get('triggerTooltip'))
            var f = (c = i
                ? (function (t, e, n, i, r, o) {
                    var a = e.getModel('axisPointer'),
                      s = {}
                    U(
                      [
                        'type',
                        'snap',
                        'lineStyle',
                        'shadowStyle',
                        'label',
                        'animation',
                        'animationDurationUpdate',
                        'animationEasingUpdate',
                        'z',
                      ],
                      function (t) {
                        s[t] = B(a.get(t))
                      }
                    ),
                      (s.snap = 'category' !== t.type && !!o),
                      'cross' === a.get('type') && (s.type = 'line')
                    var l = s.label || (s.label = {})
                    if ((null == l.show && (l.show = !1), 'cross' === r)) {
                      var u = a.get(['label', 'show'])
                      if (((l.show = null == u || u), !o)) {
                        var h = (s.lineStyle = a.get('crossStyle'))
                        h && F(l, h.textStyle)
                      }
                    }
                    return t.model.getModel('axisPointer', new Ch(s, n, i))
                  })(h, u, r, e, i, s)
                : c).get('snap'),
              d = H_(h.model),
              g = s || f || 'category' === h.type,
              y = (t.axesInfo[d] = {
                key: d,
                axis: h,
                coordSys: n,
                axisPointerModel: c,
                triggerTooltip: s,
                involveSeries: g,
                snap: f,
                useHandle: F_(c),
                seriesModels: [],
                linkGroup: null,
              })
            ;(l[d] = y), (t.seriesInvolved = t.seriesInvolved || g)
            var v = (function (t, e) {
              for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
                var o = t[r] || {}
                if (
                  z_(o[i + 'AxisId'], n.id) ||
                  z_(o[i + 'AxisIndex'], n.componentIndex) ||
                  z_(o[i + 'AxisName'], n.name)
                )
                  return r
              }
            })(o, h)
            if (null != v) {
              var m = a[v] || (a[v] = { axesInfo: {} })
              ;(m.axesInfo[d] = y), (m.mapper = o[v].mapper), (y.linkGroup = m)
            }
          }
        }
      })
    })(n, t, e),
    n.seriesInvolved &&
      (function (t, e) {
        e.eachSeries(function (e) {
          var n = e.coordinateSystem,
            i = e.get(['tooltip', 'trigger'], !0),
            r = e.get(['tooltip', 'show'], !0)
          n &&
            'none' !== i &&
            !1 !== i &&
            'item' !== i &&
            !1 !== r &&
            !1 !== e.get(['axisPointer', 'show'], !0) &&
            U(t.coordSysAxesInfo[H_(n.model)], function (t) {
              var i = t.axis
              n.getAxis(i.dim) === i &&
                (t.seriesModels.push(e),
                null == t.seriesDataCount && (t.seriesDataCount = 0),
                (t.seriesDataCount += e.getData().count()))
            })
        })
      })(n, t),
    n
  )
}
function z_(t, e) {
  return 'all' === t || (Q(t) && V(t, e) >= 0) || t === e
}
function E_(t) {
  var e = N_(t)
  if (e) {
    var n = e.axisPointerModel,
      i = e.axis.scale,
      r = n.option,
      o = n.get('status'),
      a = n.get('value')
    null != a && (a = i.parse(a))
    var s = F_(n)
    null == o && (r.status = s ? 'show' : 'hide')
    var l = i.getExtent().slice()
    l[0] > l[1] && l.reverse(),
      (null == a || a > l[1]) && (a = l[1]),
      a < l[0] && (a = l[0]),
      (r.value = a),
      s && (r.status = e.axis.scale.isBlank() ? 'hide' : 'show')
  }
}
function N_(t) {
  var e = (t.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo
  return e && e.axesInfo[H_(t)]
}
function F_(t) {
  return !!t.get(['handle', 'show'])
}
function H_(t) {
  return t.type + '||' + t.id
}
var V_ = {},
  W_ = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (n.type = e.type), n
    }
    return (
      g(e, t),
      (e.prototype.render = function (e, n, i, r) {
        this.axisPointerClass && E_(e),
          t.prototype.render.apply(this, arguments),
          this._doUpdateAxisPointerClass(e, i, !0)
      }),
      (e.prototype.updateAxisPointer = function (t, e, n, i) {
        this._doUpdateAxisPointerClass(t, n, !1)
      }),
      (e.prototype.remove = function (t, e) {
        var n = this._axisPointer
        n && n.remove(e)
      }),
      (e.prototype.dispose = function (e, n) {
        this._disposeAxisPointer(n), t.prototype.dispose.apply(this, arguments)
      }),
      (e.prototype._doUpdateAxisPointerClass = function (t, n, i) {
        var r = e.getAxisPointerClass(this.axisPointerClass)
        if (r) {
          var o = (function (t) {
            var e = N_(t)
            return e && e.axisPointerModel
          })(t)
          o
            ? (this._axisPointer || (this._axisPointer = new r())).render(
                t,
                o,
                n,
                i
              )
            : this._disposeAxisPointer(n)
        }
      }),
      (e.prototype._disposeAxisPointer = function (t) {
        this._axisPointer && this._axisPointer.dispose(t),
          (this._axisPointer = null)
      }),
      (e.registerAxisPointerClass = function (t, e) {
        V_[t] = e
      }),
      (e.getAxisPointerClass = function (t) {
        return t && V_[t]
      }),
      (e.type = 'axis'),
      e
    )
  })(rd),
  G_ = _r()
var U_ = ['axisLine', 'axisTickLabel', 'axisName'],
  X_ = ['splitArea', 'splitLine', 'minorSplitLine'],
  Y_ = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (n.type = e.type), (n.axisPointerClass = 'CartesianAxisPointer'), n
    }
    return (
      g(e, t),
      (e.prototype.render = function (e, n, i, r) {
        this.group.removeAll()
        var o = this._axisGroup
        if (
          ((this._axisGroup = new Ri()),
          this.group.add(this._axisGroup),
          e.get('show'))
        ) {
          var a = e.getCoordSysModel(),
            s = x_(a, e),
            l = new R_(
              e,
              N(
                {
                  handleAutoShown: function (t) {
                    for (
                      var n = a.coordinateSystem.getCartesians(), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var r = n[i].getOtherAxis(e.axis).type
                      if ('value' === r || 'log' === r) return !0
                    }
                    return !1
                  },
                },
                s
              )
            )
          U(U_, l.add, l),
            this._axisGroup.add(l.getGroup()),
            U(
              X_,
              function (t) {
                e.get([t, 'show']) && j_[t](this, this._axisGroup, e, a)
              },
              this
            ),
            (r && 'changeAxisOrder' === r.type && r.isInitSort) ||
              Yu(o, this._axisGroup, e),
            t.prototype.render.call(this, e, n, i, r)
        }
      }),
      (e.prototype.remove = function () {
        G_(this).splitAreaColors = null
      }),
      (e.type = 'cartesianAxis'),
      e
    )
  })(W_),
  j_ = {
    splitLine: function (t, e, n, i) {
      var r = n.axis
      if (!r.scale.isBlank()) {
        var o = n.getModel('splitLine'),
          a = o.getModel('lineStyle'),
          s = a.get('color')
        s = Q(s) ? s : [s]
        for (
          var l = i.coordinateSystem.getRect(),
            u = r.isHorizontal(),
            h = 0,
            c = r.getTicksCoords({ tickModel: o }),
            p = [],
            f = [],
            d = a.getLineStyle(),
            g = 0;
          g < c.length;
          g++
        ) {
          var y = r.toGlobalCoord(c[g].coord)
          u
            ? ((p[0] = y), (p[1] = l.y), (f[0] = y), (f[1] = l.y + l.height))
            : ((p[0] = l.x), (p[1] = y), (f[0] = l.x + l.width), (f[1] = y))
          var v = h++ % s.length,
            m = c[g].tickValue
          e.add(
            new eu({
              anid: null != m ? 'line_' + c[g].tickValue : null,
              subPixelOptimize: !0,
              autoBatch: !0,
              shape: { x1: p[0], y1: p[1], x2: f[0], y2: f[1] },
              style: F({ stroke: s[v] }, d),
              silent: !0,
            })
          )
        }
      }
    },
    minorSplitLine: function (t, e, n, i) {
      var r = n.axis,
        o = n.getModel('minorSplitLine').getModel('lineStyle'),
        a = i.coordinateSystem.getRect(),
        s = r.isHorizontal(),
        l = r.getMinorTicksCoords()
      if (l.length)
        for (var u = [], h = [], c = o.getLineStyle(), p = 0; p < l.length; p++)
          for (var f = 0; f < l[p].length; f++) {
            var d = r.toGlobalCoord(l[p][f].coord)
            s
              ? ((u[0] = d), (u[1] = a.y), (h[0] = d), (h[1] = a.y + a.height))
              : ((u[0] = a.x), (u[1] = d), (h[0] = a.x + a.width), (h[1] = d)),
              e.add(
                new eu({
                  anid: 'minor_line_' + l[p][f].tickValue,
                  subPixelOptimize: !0,
                  autoBatch: !0,
                  shape: { x1: u[0], y1: u[1], x2: h[0], y2: h[1] },
                  style: c,
                  silent: !0,
                })
              )
          }
    },
    splitArea: function (t, e, n, i) {
      !(function (t, e, n, i) {
        var r = n.axis
        if (!r.scale.isBlank()) {
          var o = n.getModel('splitArea'),
            a = o.getModel('areaStyle'),
            s = a.get('color'),
            l = i.coordinateSystem.getRect(),
            u = r.getTicksCoords({ tickModel: o, clamp: !0 })
          if (u.length) {
            var h = s.length,
              c = G_(t).splitAreaColors,
              p = mt(),
              f = 0
            if (c)
              for (var d = 0; d < u.length; d++) {
                var g = c.get(u[d].tickValue)
                if (null != g) {
                  f = (g + (h - 1) * d) % h
                  break
                }
              }
            var y = r.toGlobalCoord(u[0].coord),
              v = a.getAreaStyle()
            for (s = Q(s) ? s : [s], d = 1; d < u.length; d++) {
              var m = r.toGlobalCoord(u[d].coord),
                _ = void 0,
                x = void 0,
                w = void 0,
                b = void 0
              r.isHorizontal()
                ? ((_ = y), (x = l.y), (w = m - _), (b = l.height), (y = _ + w))
                : ((_ = l.x), (x = y), (w = l.width), (y = x + (b = m - x)))
              var S = u[d - 1].tickValue
              null != S && p.set(S, f),
                e.add(
                  new qa({
                    anid: null != S ? 'area_' + S : null,
                    shape: { x: _, y: x, width: w, height: b },
                    style: F({ fill: s[f] }, v),
                    autoBatch: !0,
                    silent: !0,
                  })
                ),
                (f = (f + 1) % h)
            }
            G_(t).splitAreaColors = p
          }
        }
      })(t, e, n, i)
    },
  },
  q_ = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (n.type = e.type), n
    }
    return g(e, t), (e.type = 'xAxis'), e
  })(Y_),
  Z_ = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.type = q_.type), e
    }
    return g(e, t), (e.type = 'yAxis'), e
  })(Y_),
  K_ = (function (t) {
    function e() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.type = 'grid'), e
    }
    return (
      g(e, t),
      (e.prototype.render = function (t, e) {
        this.group.removeAll(),
          t.get('show') &&
            this.group.add(
              new qa({
                shape: t.coordinateSystem.getRect(),
                style: F({ fill: t.get('backgroundColor') }, t.getItemStyle()),
                silent: !0,
                z2: -1,
              })
            )
      }),
      (e.type = 'grid'),
      e
    )
  })(rd),
  $_ = { offset: 0 }
function Q_(t) {
  t.registerComponentView(K_),
    t.registerComponentModel(a_),
    t.registerCoordinateSystem('cartesian2d', C_),
    f_(t, 'x', s_, $_),
    f_(t, 'y', s_, $_),
    t.registerComponentView(q_),
    t.registerComponentView(Z_),
    t.registerPreprocessor(function (t) {
      t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    })
}
var J_ = _r(),
  tx = B,
  ex = K
function nx(t, e, n, i) {
  ix(J_(n).lastProp, i) ||
    ((J_(n).lastProp = i), e ? Su(n, i, t) : (n.stopAnimation(), n.attr(i)))
}
function ix(t, e) {
  if (it(t) && it(e)) {
    var n = !0
    return (
      U(e, function (e, i) {
        n = n && ix(t[i], e)
      }),
      !!n
    )
  }
  return t === e
}
function rx(t, e) {
  t[e.get(['label', 'show']) ? 'show' : 'hide']()
}
function ox(t) {
  return { x: t.x || 0, y: t.y || 0, rotation: t.rotation || 0 }
}
function ax(t, e, n) {
  var i = e.get('z'),
    r = e.get('zlevel')
  t &&
    t.traverse(function (t) {
      'group' !== t.type &&
        (null != i && (t.z = i), null != r && (t.zlevel = r), (t.silent = n))
    })
}
function sx(t, e, n, i, r) {
  var o = lx(n.get('value'), e.axis, e.ecModel, n.get('seriesDataIndices'), {
      precision: n.get(['label', 'precision']),
      formatter: n.get(['label', 'formatter']),
    }),
    a = n.getModel('label'),
    s = ac(a.get('padding') || 0),
    l = a.getFont(),
    u = vi(o, l),
    h = r.position,
    c = u.width + s[1] + s[3],
    p = u.height + s[0] + s[2],
    f = r.align
  'right' === f && (h[0] -= c), 'center' === f && (h[0] -= c / 2)
  var d = r.verticalAlign
  'bottom' === d && (h[1] -= p),
    'middle' === d && (h[1] -= p / 2),
    (function (t, e, n, i) {
      var r = i.getWidth(),
        o = i.getHeight()
      ;(t[0] = Math.min(t[0] + e, r) - e),
        (t[1] = Math.min(t[1] + n, o) - n),
        (t[0] = Math.max(t[0], 0)),
        (t[1] = Math.max(t[1], 0))
    })(h, c, p, i)
  var g = a.get('backgroundColor')
  ;(g && 'auto' !== g) || (g = e.get(['axisLine', 'lineStyle', 'color'])),
    (t.label = {
      x: h[0],
      y: h[1],
      style: rh(a, {
        text: o,
        font: l,
        fill: a.getTextColor(),
        padding: s,
        backgroundColor: g,
      }),
      z2: 10,
    })
}
function lx(t, e, n, i, r) {
  t = e.scale.parse(t)
  var o = e.scale.getLabel({ value: t }, { precision: r.precision }),
    a = r.formatter
  if (a) {
    var s = {
      value: Hm(e, { value: t }),
      axisDimension: e.dim,
      axisIndex: e.index,
      seriesData: [],
    }
    U(i, function (t) {
      var e = n.getSeriesByIndex(t.seriesIndex),
        i = t.dataIndexInside,
        r = e && e.getDataParams(i)
      r && s.seriesData.push(r)
    }),
      tt(a) ? (o = a.replace('{value}', o)) : J(a) && (o = a(s))
  }
  return o
}
function ux(t, e, n) {
  var i = [1, 0, 0, 1, 0, 0]
  return (
    Wn(i, i, n.rotation),
    Vn(i, i, n.position),
    Gu(
      [
        t.dataToCoord(e),
        (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0),
      ],
      i
    )
  )
}
var hx = (function (t) {
  function e() {
    return (null !== t && t.apply(this, arguments)) || this
  }
  return (
    g(e, t),
    (e.prototype.makeElOption = function (t, e, n, i, r) {
      var o = n.axis,
        a = o.grid,
        s = i.get('type'),
        l = cx(a, o).getOtherAxis(o).getGlobalExtent(),
        u = o.toGlobalCoord(o.dataToCoord(e, !0))
      if (s && 'none' !== s) {
        var h = (function (t) {
            var e,
              n = t.get('type'),
              i = t.getModel(n + 'Style')
            return (
              'line' === n
                ? ((e = i.getLineStyle()).fill = null)
                : 'shadow' === n && ((e = i.getAreaStyle()).stroke = null),
              e
            )
          })(i),
          c = px[s](o, u, l)
        ;(c.style = h), (t.graphicKey = c.type), (t.pointer = c)
      }
      !(function (t, e, n, i, r, o) {
        var a = R_.innerTextLayout(n.rotation, 0, n.labelDirection)
        ;(n.labelMargin = r.get(['label', 'margin'])),
          sx(e, i, r, o, {
            position: ux(i.axis, t, n),
            align: a.textAlign,
            verticalAlign: a.textVerticalAlign,
          })
      })(e, t, x_(a.model, n), n, i, r)
    }),
    (e.prototype.getHandleTransform = function (t, e, n) {
      var i = x_(e.axis.grid.model, e, { labelInside: !1 })
      i.labelMargin = n.get(['handle', 'margin'])
      var r = ux(e.axis, t, i)
      return {
        x: r[0],
        y: r[1],
        rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0),
      }
    }),
    (e.prototype.updateHandleTransform = function (t, e, n, i) {
      var r = n.axis,
        o = r.grid,
        a = r.getGlobalExtent(!0),
        s = cx(o, r).getOtherAxis(r).getGlobalExtent(),
        l = 'x' === r.dim ? 0 : 1,
        u = [t.x, t.y]
      ;(u[l] += e[l]),
        (u[l] = Math.min(a[1], u[l])),
        (u[l] = Math.max(a[0], u[l]))
      var h = (s[1] + s[0]) / 2,
        c = [h, h]
      c[l] = u[l]
      return {
        x: u[0],
        y: u[1],
        rotation: t.rotation,
        cursorPoint: c,
        tooltipOption: [{ verticalAlign: 'middle' }, { align: 'center' }][l],
      }
    }),
    e
  )
})(
  (function () {
    function t() {
      ;(this._dragging = !1), (this.animationThreshold = 15)
    }
    return (
      (t.prototype.render = function (t, e, n, i) {
        var r = e.get('value'),
          o = e.get('status')
        if (
          ((this._axisModel = t),
          (this._axisPointerModel = e),
          (this._api = n),
          i || this._lastValue !== r || this._lastStatus !== o)
        ) {
          ;(this._lastValue = r), (this._lastStatus = o)
          var a = this._group,
            s = this._handle
          if (!o || 'hide' === o) return a && a.hide(), void (s && s.hide())
          a && a.show(), s && s.show()
          var l = {}
          this.makeElOption(l, r, t, e, n)
          var u = l.graphicKey
          u !== this._lastGraphicKey && this.clear(n),
            (this._lastGraphicKey = u)
          var h = (this._moveAnimation = this.determineAnimation(t, e))
          if (a) {
            var c = $(nx, e, h)
            this.updatePointerEl(a, l, c), this.updateLabelEl(a, l, c, e)
          } else
            (a = this._group = new Ri()),
              this.createPointerEl(a, l, t, e),
              this.createLabelEl(a, l, t, e),
              n.getZr().add(a)
          ax(a, e, !0), this._renderHandle(r)
        }
      }),
      (t.prototype.remove = function (t) {
        this.clear(t)
      }),
      (t.prototype.dispose = function (t) {
        this.clear(t)
      }),
      (t.prototype.determineAnimation = function (t, e) {
        var n = e.get('animation'),
          i = t.axis,
          r = 'category' === i.type,
          o = e.get('snap')
        if (!o && !r) return !1
        if ('auto' === n || null == n) {
          var a = this.animationThreshold
          if (r && i.getBandWidth() > a) return !0
          if (o) {
            var s = N_(t).seriesDataCount,
              l = i.getExtent()
            return Math.abs(l[0] - l[1]) / s > a
          }
          return !1
        }
        return !0 === n
      }),
      (t.prototype.makeElOption = function (t, e, n, i, r) {}),
      (t.prototype.createPointerEl = function (t, e, n, i) {
        var r = e.pointer
        if (r) {
          var o = (J_(t).pointerEl = new Qu[r.type](tx(e.pointer)))
          t.add(o)
        }
      }),
      (t.prototype.createLabelEl = function (t, e, n, i) {
        if (e.label) {
          var r = (J_(t).labelEl = new as(tx(e.label)))
          t.add(r), rx(r, i)
        }
      }),
      (t.prototype.updatePointerEl = function (t, e, n) {
        var i = J_(t).pointerEl
        i &&
          e.pointer &&
          (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }))
      }),
      (t.prototype.updateLabelEl = function (t, e, n, i) {
        var r = J_(t).labelEl
        r &&
          (r.setStyle(e.label.style),
          n(r, { x: e.label.x, y: e.label.y }),
          rx(r, i))
      }),
      (t.prototype._renderHandle = function (t) {
        if (!this._dragging && this.updateHandleTransform) {
          var e,
            n = this._axisPointerModel,
            i = this._api.getZr(),
            r = this._handle,
            o = n.getModel('handle'),
            a = n.get('status')
          if (!o.get('show') || !a || 'hide' === a)
            return r && i.remove(r), void (this._handle = null)
          this._handle ||
            ((e = !0),
            (r = this._handle =
              qu(o.get('icon'), {
                cursor: 'move',
                draggable: !0,
                onmousemove: function (t) {
                  re(t.event)
                },
                onmousedown: ex(this._onHandleDragMove, this, 0, 0),
                drift: ex(this._onHandleDragMove, this),
                ondragend: ex(this._onHandleDragEnd, this),
              })),
            i.add(r)),
            ax(r, n, !1),
            r.setStyle(
              o.getItemStyle(null, [
                'color',
                'borderColor',
                'borderWidth',
                'opacity',
                'shadowColor',
                'shadowBlur',
                'shadowOffsetX',
                'shadowOffsetY',
              ])
            )
          var s = o.get('size')
          Q(s) || (s = [s, s]),
            (r.scaleX = s[0] / 2),
            (r.scaleY = s[1] / 2),
            vd(
              this,
              '_doDispatchAxisPointer',
              o.get('throttle') || 0,
              'fixRate'
            ),
            this._moveHandleToValue(t, e)
        }
      }),
      (t.prototype._moveHandleToValue = function (t, e) {
        nx(
          this._axisPointerModel,
          !e && this._moveAnimation,
          this._handle,
          ox(
            this.getHandleTransform(t, this._axisModel, this._axisPointerModel)
          )
        )
      }),
      (t.prototype._onHandleDragMove = function (t, e) {
        var n = this._handle
        if (n) {
          this._dragging = !0
          var i = this.updateHandleTransform(
            ox(n),
            [t, e],
            this._axisModel,
            this._axisPointerModel
          )
          ;(this._payloadInfo = i),
            n.stopAnimation(),
            n.attr(ox(i)),
            (J_(n).lastProp = null),
            this._doDispatchAxisPointer()
        }
      }),
      (t.prototype._doDispatchAxisPointer = function () {
        if (this._handle) {
          var t = this._payloadInfo,
            e = this._axisModel
          this._api.dispatchAction({
            type: 'updateAxisPointer',
            x: t.cursorPoint[0],
            y: t.cursorPoint[1],
            tooltipOption: t.tooltipOption,
            axesInfo: [{ axisDim: e.axis.dim, axisIndex: e.componentIndex }],
          })
        }
      }),
      (t.prototype._onHandleDragEnd = function () {
        if (((this._dragging = !1), this._handle)) {
          var t = this._axisPointerModel.get('value')
          this._moveHandleToValue(t),
            this._api.dispatchAction({ type: 'hideTip' })
        }
      }),
      (t.prototype.clear = function (t) {
        ;(this._lastValue = null), (this._lastStatus = null)
        var e = t.getZr(),
          n = this._group,
          i = this._handle
        e &&
          n &&
          ((this._lastGraphicKey = null),
          n && e.remove(n),
          i && e.remove(i),
          (this._group = null),
          (this._handle = null),
          (this._payloadInfo = null))
      }),
      (t.prototype.doClear = function () {}),
      (t.prototype.buildLabel = function (t, e, n) {
        return {
          x: t[(n = n || 0)],
          y: t[1 - n],
          width: e[n],
          height: e[1 - n],
        }
      }),
      t
    )
  })()
)
function cx(t, e) {
  var n = {}
  return (n[e.dim + 'AxisIndex'] = e.index), t.getCartesian(n)
}
var px = {
  line: function (t, e, n) {
    var i, r, o
    return {
      type: 'Line',
      subPixelOptimize: !0,
      shape:
        ((i = [e, n[0]]),
        (r = [e, n[1]]),
        (o = fx(t)),
        { x1: i[(o = o || 0)], y1: i[1 - o], x2: r[o], y2: r[1 - o] }),
    }
  },
  shadow: function (t, e, n) {
    var i,
      r,
      o,
      a = Math.max(1, t.getBandWidth()),
      s = n[1] - n[0]
    return {
      type: 'Rect',
      shape:
        ((i = [e - a / 2, n[0]]),
        (r = [a, s]),
        (o = fx(t)),
        { x: i[(o = o || 0)], y: i[1 - o], width: r[o], height: r[1 - o] }),
    }
  },
}
function fx(t) {
  return 'x' === t.dim ? 0 : 1
}
var dx = hx,
  gx = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (n.type = e.type), n
    }
    return (
      g(e, t),
      (e.type = 'axisPointer'),
      (e.defaultOption = {
        show: 'auto',
        zlevel: 0,
        z: 50,
        type: 'line',
        snap: !1,
        triggerTooltip: !0,
        value: null,
        status: null,
        link: [],
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: { color: '#B9BEC9', width: 1, type: 'dashed' },
        shadowStyle: { color: 'rgba(210,219,238,0.2)' },
        label: {
          show: !0,
          formatter: null,
          precision: 'auto',
          margin: 3,
          color: '#fff',
          padding: [5, 7, 5, 7],
          backgroundColor: 'auto',
          borderColor: null,
          borderWidth: 0,
          borderRadius: 3,
        },
        handle: {
          show: !1,
          icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
          size: 45,
          margin: 50,
          color: '#333',
          shadowBlur: 3,
          shadowColor: '#aaa',
          shadowOffsetX: 0,
          shadowOffsetY: 2,
          throttle: 40,
        },
      }),
      e
    )
  })(Dc),
  yx = _r(),
  vx = U
function mx(t, e, n) {
  if (!x.node) {
    var i = e.getZr()
    yx(i).records || (yx(i).records = {}),
      (function (t, e) {
        if (yx(t).initialized) return
        function n(n, i) {
          t.on(n, function (n) {
            var r = (function (t) {
              var e = { showTip: [], hideTip: [] },
                n = function (i) {
                  var r = e[i.type]
                  r ? r.push(i) : ((i.dispatchAction = n), t.dispatchAction(i))
                }
              return { dispatchAction: n, pendings: e }
            })(e)
            vx(yx(t).records, function (t) {
              t && i(t, n, r.dispatchAction)
            }),
              (function (t, e) {
                var n,
                  i = t.showTip.length,
                  r = t.hideTip.length
                i ? (n = t.showTip[i - 1]) : r && (n = t.hideTip[r - 1])
                n && ((n.dispatchAction = null), e.dispatchAction(n))
              })(r.pendings, e)
          })
        }
        ;(yx(t).initialized = !0),
          n('click', $(xx, 'click')),
          n('mousemove', $(xx, 'mousemove')),
          n('globalout', _x)
      })(i, e),
      ((yx(i).records[t] || (yx(i).records[t] = {})).handler = n)
  }
}
function _x(t, e, n) {
  t.handler('leave', null, n)
}
function xx(t, e, n, i) {
  e.handler(t, n, i)
}
function bx(t, e) {
  if (!x.node) {
    var n = e.getZr()
    ;(yx(n).records || {})[t] && (yx(n).records[t] = null)
  }
}
var Sx = (function (t) {
  function e() {
    var n = (null !== t && t.apply(this, arguments)) || this
    return (n.type = e.type), n
  }
  return (
    g(e, t),
    (e.prototype.render = function (t, e, n) {
      var i = e.getComponent('tooltip'),
        r = t.get('triggerOn') || (i && i.get('triggerOn')) || 'mousemove|click'
      mx('axisPointer', n, function (t, e, n) {
        'none' !== r &&
          ('leave' === t || r.indexOf(t) >= 0) &&
          n({
            type: 'updateAxisPointer',
            currTrigger: t,
            x: e && e.offsetX,
            y: e && e.offsetY,
          })
      })
    }),
    (e.prototype.remove = function (t, e) {
      bx('axisPointer', e)
    }),
    (e.prototype.dispose = function (t, e) {
      bx('axisPointer', e)
    }),
    (e.type = 'axisPointer'),
    e
  )
})(rd)
function Tx(t, e) {
  var n,
    i = [],
    r = t.seriesIndex
  if (null == r || !(n = e.getSeriesByIndex(r))) return { point: [] }
  var o = n.getData(),
    a = mr(o, t)
  if (null == a || a < 0 || Q(a)) return { point: [] }
  var s = o.getItemGraphicEl(a),
    l = n.coordinateSystem
  if (n.getTooltipPosition) i = n.getTooltipPosition(a) || []
  else if (l && l.dataToPoint)
    if (t.isStacked) {
      var u = l.getBaseAxis(),
        h = l.getOtherAxis(u).dim,
        c = u.dim,
        p = 'x' === h || 'radius' === h ? 1 : 0,
        f = o.mapDimension(c),
        d = []
      ;(d[p] = o.get(f, a)),
        (d[1 - p] = o.get(o.getCalculationInfo('stackResultDimension'), a)),
        (i = l.dataToPoint(d) || [])
    } else
      i =
        l.dataToPoint(
          o.getValues(
            X(l.dimensions, function (t) {
              return o.mapDimension(t)
            }),
            a
          )
        ) || []
  else if (s) {
    var g = s.getBoundingRect().clone()
    g.applyTransform(s.transform), (i = [g.x + g.width / 2, g.y + g.height / 2])
  }
  return { point: i, el: s }
}
var Mx = _r()
function Cx(t, e, n) {
  var i = t.currTrigger,
    r = [t.x, t.y],
    o = t,
    a = t.dispatchAction || K(n.dispatchAction, n),
    s = e.getComponent('axisPointer').coordSysAxesInfo
  if (s) {
    Px(r) &&
      (r = Tx({ seriesIndex: o.seriesIndex, dataIndex: o.dataIndex }, e).point)
    var l = Px(r),
      u = o.axesInfo,
      h = s.axesInfo,
      c = 'leave' === i || Px(r),
      p = {},
      f = {},
      d = { list: [], map: {} },
      g = { showPointer: $(Ix, f), showTooltip: $(Dx, d) }
    U(s.coordSysMap, function (t, e) {
      var n = l || t.containPoint(r)
      U(s.coordSysAxesInfo[e], function (t, e) {
        var i = t.axis,
          o = (function (t, e) {
            for (var n = 0; n < (t || []).length; n++) {
              var i = t[n]
              if (
                e.axis.dim === i.axisDim &&
                e.axis.model.componentIndex === i.axisIndex
              )
                return i
            }
          })(u, t)
        if (!c && n && (!u || o)) {
          var a = o && o.value
          null != a || l || (a = i.pointToData(r)),
            null != a && kx(t, a, g, !1, p)
        }
      })
    })
    var y = {}
    return (
      U(h, function (t, e) {
        var n = t.linkGroup
        n &&
          !f[e] &&
          U(n.axesInfo, function (e, i) {
            var r = f[i]
            if (e !== t && r) {
              var o = r.value
              n.mapper && (o = t.axis.scale.parse(n.mapper(o, Ax(e), Ax(t)))),
                (y[t.key] = o)
            }
          })
      }),
      U(y, function (t, e) {
        kx(h[e], t, g, !0, p)
      }),
      (function (t, e, n) {
        var i = (n.axesInfo = [])
        U(e, function (e, n) {
          var r = e.axisPointerModel.option,
            o = t[n]
          o
            ? (!e.useHandle && (r.status = 'show'),
              (r.value = o.value),
              (r.seriesDataIndices = (o.payloadBatch || []).slice()))
            : !e.useHandle && (r.status = 'hide'),
            'show' === r.status &&
              i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value,
              })
        })
      })(f, h, p),
      (function (t, e, n, i) {
        if (Px(e) || !t.list.length) return void i({ type: 'hideTip' })
        var r =
          ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {}
        i({
          type: 'showTip',
          escapeConnect: !0,
          x: e[0],
          y: e[1],
          tooltipOption: n.tooltipOption,
          position: n.position,
          dataIndexInside: r.dataIndexInside,
          dataIndex: r.dataIndex,
          seriesIndex: r.seriesIndex,
          dataByCoordSys: t.list,
        })
      })(d, r, t, a),
      (function (t, e, n) {
        var i = n.getZr(),
          r = 'axisPointerLastHighlights',
          o = Mx(i)[r] || {},
          a = (Mx(i)[r] = {})
        U(t, function (t, e) {
          var n = t.axisPointerModel.option
          'show' === n.status &&
            U(n.seriesDataIndices, function (t) {
              var e = t.seriesIndex + ' | ' + t.dataIndex
              a[e] = t
            })
        })
        var s = [],
          l = []
        U(o, function (t, e) {
          !a[e] && l.push(t)
        }),
          U(a, function (t, e) {
            !o[e] && s.push(t)
          }),
          l.length &&
            n.dispatchAction({
              type: 'downplay',
              escapeConnect: !0,
              notBlur: !0,
              batch: l,
            }),
          s.length &&
            n.dispatchAction({
              type: 'highlight',
              escapeConnect: !0,
              notBlur: !0,
              batch: s,
            })
      })(h, 0, n),
      p
    )
  }
}
function kx(t, e, n, i, r) {
  var o = t.axis
  if (!o.scale.isBlank() && o.containData(e))
    if (t.involveSeries) {
      var a = (function (t, e) {
          var n = e.axis,
            i = n.dim,
            r = t,
            o = [],
            a = Number.MAX_VALUE,
            s = -1
          return (
            U(e.seriesModels, function (e, l) {
              var u,
                h,
                c = e.getData().mapDimensionsAll(i)
              if (e.getAxisTooltipData) {
                var p = e.getAxisTooltipData(c, t, n)
                ;(h = p.dataIndices), (u = p.nestestValue)
              } else {
                if (
                  !(h = e
                    .getData()
                    .indicesOfNearest(
                      c[0],
                      t,
                      'category' === n.type ? 0.5 : null
                    )).length
                )
                  return
                u = e.getData().get(c[0], h[0])
              }
              if (null != u && isFinite(u)) {
                var f = t - u,
                  d = Math.abs(f)
                d <= a &&
                  ((d < a || (f >= 0 && s < 0)) &&
                    ((a = d), (s = f), (r = u), (o.length = 0)),
                  U(h, function (t) {
                    o.push({
                      seriesIndex: e.seriesIndex,
                      dataIndexInside: t,
                      dataIndex: e.getData().getRawIndex(t),
                    })
                  }))
              }
            }),
            { payloadBatch: o, snapToValue: r }
          )
        })(e, t),
        s = a.payloadBatch,
        l = a.snapToValue
      s[0] && null == r.seriesIndex && N(r, s[0]),
        !i && t.snap && o.containData(l) && null != l && (e = l),
        n.showPointer(t, e, s),
        n.showTooltip(t, a, l)
    } else n.showPointer(t, e)
}
function Ix(t, e, n, i) {
  t[e.key] = { value: n, payloadBatch: i }
}
function Dx(t, e, n, i) {
  var r = n.payloadBatch,
    o = e.axis,
    a = o.model,
    s = e.axisPointerModel
  if (e.triggerTooltip && r.length) {
    var l = e.coordSys.model,
      u = H_(l),
      h = t.map[u]
    h ||
      ((h = t.map[u] =
        {
          coordSysId: l.id,
          coordSysIndex: l.componentIndex,
          coordSysType: l.type,
          coordSysMainType: l.mainType,
          dataByAxis: [],
        }),
      t.list.push(h)),
      h.dataByAxis.push({
        axisDim: o.dim,
        axisIndex: a.componentIndex,
        axisType: a.type,
        axisId: a.id,
        value: i,
        valueLabelOpt: {
          precision: s.get(['label', 'precision']),
          formatter: s.get(['label', 'formatter']),
        },
        seriesDataIndices: r.slice(),
      })
  }
}
function Ax(t) {
  var e = t.axis.model,
    n = {},
    i = (n.axisDim = t.axis.dim)
  return (
    (n.axisIndex = n[i + 'AxisIndex'] = e.componentIndex),
    (n.axisName = n[i + 'AxisName'] = e.name),
    (n.axisId = n[i + 'AxisId'] = e.id),
    n
  )
}
function Px(t) {
  return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
}
function Ox(t) {
  W_.registerAxisPointerClass('CartesianAxisPointer', dx),
    t.registerComponentModel(gx),
    t.registerComponentView(Sx),
    t.registerPreprocessor(function (t) {
      if (t) {
        ;(!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {})
        var e = t.axisPointer.link
        e && !Q(e) && (t.axisPointer.link = [e])
      }
    }),
    t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
      t.getComponent('axisPointer').coordSysAxesInfo = B_(t, e)
    }),
    t.registerAction(
      {
        type: 'updateAxisPointer',
        event: 'updateAxisPointer',
        update: ':updateAxisPointer',
      },
      Cx
    )
}
function Lx(t) {
  jm(Q_), jm(Ox)
}
var Rx = (function (t) {
  function e() {
    var n = (null !== t && t.apply(this, arguments)) || this
    return (n.type = e.type), n
  }
  return (
    g(e, t),
    (e.type = 'tooltip'),
    (e.dependencies = ['axisPointer']),
    (e.defaultOption = {
      zlevel: 0,
      z: 60,
      show: !0,
      showContent: !0,
      trigger: 'item',
      triggerOn: 'mousemove|click',
      alwaysShowContent: !1,
      displayMode: 'single',
      renderMode: 'auto',
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: '#fff',
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      borderRadius: 4,
      borderWidth: 1,
      padding: null,
      extraCssText: '',
      axisPointer: {
        type: 'line',
        axis: 'auto',
        animation: 'auto',
        animationDurationUpdate: 200,
        animationEasingUpdate: 'exponentialOut',
        crossStyle: { color: '#999', width: 1, type: 'dashed', textStyle: {} },
      },
      textStyle: { color: '#666', fontSize: 14 },
    }),
    e
  )
})(Dc)
function Bx(t) {
  var e = t.get('confine')
  return null != e ? !!e : 'richText' === t.get('renderMode')
}
function zx(t) {
  if (x.domSupported)
    for (
      var e = document.documentElement.style, n = 0, i = t.length;
      n < i;
      n++
    )
      if (t[n] in e) return t[n]
}
var Ex = zx([
  'transform',
  'webkitTransform',
  'OTransform',
  'MozTransform',
  'msTransform',
])
function Nx(t, e) {
  if (!t) return e
  e = oc(e, !0)
  var n = t.indexOf(e)
  return (t = -1 === n ? e : '-' + t.slice(0, n) + '-' + e).toLowerCase()
}
var Fx = Nx(
    zx([
      'webkitTransition',
      'transition',
      'OTransition',
      'MozTransition',
      'msTransition',
    ]),
    'transition'
  ),
  Hx = Nx(Ex, 'transform'),
  Vx =
    'position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;' +
    (x.transform3dSupported ? 'will-change:transform;' : '')
function Wx(t, e, n) {
  var i = t.toFixed(0) + 'px',
    r = e.toFixed(0) + 'px'
  if (!x.transformSupported)
    return n
      ? 'top:' + r + ';left:' + i + ';'
      : [
          ['top', r],
          ['left', i],
        ]
  var o = x.transform3dSupported,
    a =
      'translate' + (o ? '3d' : '') + '(' + i + ',' + r + (o ? ',0' : '') + ')'
  return n
    ? 'top:0;left:0;' + Hx + ':' + a + ';'
    : [
        ['top', 0],
        ['left', 0],
        [Ex, a],
      ]
}
function Gx(t, e, n) {
  var i = [],
    r = t.get('transitionDuration'),
    o = t.get('backgroundColor'),
    a = t.get('shadowBlur'),
    s = t.get('shadowColor'),
    l = t.get('shadowOffsetX'),
    u = t.get('shadowOffsetY'),
    h = t.getModel('textStyle'),
    c = Gf(t, 'html'),
    p = l + 'px ' + u + 'px ' + a + 'px ' + s
  return (
    i.push('box-shadow:' + p),
    e &&
      r &&
      i.push(
        (function (t, e) {
          var n = 'cubic-bezier(0.23,1,0.32,1)',
            i = ' ' + t / 2 + 's ' + n,
            r = 'opacity' + i + ',visibility' + i
          return (
            e ||
              ((i = ' ' + t + 's ' + n),
              (r += x.transformSupported
                ? ',' + Hx + i
                : ',left' + i + ',top' + i)),
            Fx + ':' + r
          )
        })(r, n)
      ),
    o &&
      (x.canvasSupported
        ? i.push('background-color:' + o)
        : (i.push(
            'background-color:#' +
              (function (t) {
                var e = Ye(t)
                if (e)
                  return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2])
                    .toString(16)
                    .slice(1)
              })(o)
          ),
          i.push('filter:alpha(opacity=70)'))),
    U(['width', 'color', 'radius'], function (e) {
      var n = 'border-' + e,
        r = oc(n),
        o = t.get(r)
      null != o && i.push(n + ':' + o + ('color' === e ? '' : 'px'))
    }),
    i.push(
      (function (t) {
        var e = [],
          n = t.get('fontSize'),
          i = t.getTextColor()
        i && e.push('color:' + i),
          e.push('font:' + t.getFont()),
          n && e.push('line-height:' + Math.round((3 * n) / 2) + 'px')
        var r = t.get('textShadowColor'),
          o = t.get('textShadowBlur') || 0,
          a = t.get('textShadowOffsetX') || 0,
          s = t.get('textShadowOffsetY') || 0
        return (
          r &&
            o &&
            e.push('text-shadow:' + a + 'px ' + s + 'px ' + o + 'px ' + r),
          U(['decoration', 'align'], function (n) {
            var i = t.get(n)
            i && e.push('text-' + n + ':' + i)
          }),
          e.join(';')
        )
      })(h)
    ),
    null != c && i.push('padding:' + ac(c).join('px ') + 'px'),
    i.join(';') + ';'
  )
}
function Ux(t, e, n, i, r) {
  var o = e && e.painter
  if (n) {
    var a = o && o.getViewportRoot()
    a &&
      (function (t, e, n, i, r) {
        Zt(qt, e, i, r, !0) && Zt(t, n, qt[0], qt[1])
      })(t, a, document.body, i, r)
  } else {
    ;(t[0] = i), (t[1] = r)
    var s = o && o.getViewportRootOffset()
    s && ((t[0] += s.offsetLeft), (t[1] += s.offsetTop))
  }
  ;(t[2] = t[0] / e.getWidth()), (t[3] = t[1] / e.getHeight())
}
var Xx = (function () {
  function t(t, e, n) {
    if (
      ((this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._enterable = !0),
      (this._firstShow = !0),
      (this._longHide = !0),
      x.wxa)
    )
      return null
    var i = document.createElement('div')
    ;(i.domBelongToZr = !0), (this.el = i)
    var r = (this._zr = e.getZr()),
      o = (this._appendToBody = n && n.appendToBody)
    Ux(this._styleCoord, r, o, e.getWidth() / 2, e.getHeight() / 2),
      o ? document.body.appendChild(i) : t.appendChild(i),
      (this._container = t)
    var a = this
    ;(i.onmouseenter = function () {
      a._enterable && (clearTimeout(a._hideTimeout), (a._show = !0)),
        (a._inContent = !0)
    }),
      (i.onmousemove = function (t) {
        if (((t = t || window.event), !a._enterable)) {
          var e = r.handler
          ie(r.painter.getViewportRoot(), t, !0), e.dispatch('mousemove', t)
        }
      }),
      (i.onmouseleave = function () {
        ;(a._inContent = !1),
          a._enterable && a._show && a.hideLater(a._hideDelay)
      })
  }
  return (
    (t.prototype.update = function (t) {
      var e,
        n,
        i,
        r = this._container,
        o =
          ((n = 'position'),
          (i =
            (e = r).currentStyle ||
            (document.defaultView && document.defaultView.getComputedStyle(e)))
            ? n
              ? i[n]
              : i
            : null),
        a = r.style
      'absolute' !== a.position &&
        'absolute' !== o &&
        (a.position = 'relative'),
        t.get('alwaysShowContent') && this._moveIfResized(),
        (this.el.className = t.get('className') || '')
    }),
    (t.prototype.show = function (t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout)
      var n = this.el,
        i = n.style,
        r = this._styleCoord
      n.innerHTML
        ? (i.cssText =
            Vx +
            Gx(t, !this._firstShow, this._longHide) +
            Wx(r[0], r[1], !0) +
            'border-color:' +
            dc(e) +
            ';' +
            (t.get('extraCssText') || '') +
            ';pointer-events:' +
            (this._enterable ? 'auto' : 'none'))
        : (i.display = 'none'),
        (this._show = !0),
        (this._firstShow = !1),
        (this._longHide = !1)
    }),
    (t.prototype.setContent = function (t, e, n, i, r) {
      var o = this.el
      if (null != t) {
        var a = ''
        if (
          (tt(r) &&
            'item' === n.get('trigger') &&
            !Bx(n) &&
            (a = (function (t, e, n) {
              if (!tt(n) || 'inside' === n) return ''
              var i = t.get('backgroundColor'),
                r = t.get('borderWidth')
              e = dc(e)
              var o,
                a,
                s =
                  'left' === (o = n)
                    ? 'right'
                    : 'right' === o
                    ? 'left'
                    : 'top' === o
                    ? 'bottom'
                    : 'top',
                l = Math.max(1.5 * Math.round(r), 6),
                u = '',
                h = Hx + ':'
              V(['left', 'right'], s) > -1
                ? ((u += 'top:50%'),
                  (h +=
                    'translateY(-50%) rotate(' +
                    (a = 'left' === s ? -225 : -45) +
                    'deg)'))
                : ((u += 'left:50%'),
                  (h +=
                    'translateX(-50%) rotate(' +
                    (a = 'top' === s ? 225 : 45) +
                    'deg)'))
              var c = (a * Math.PI) / 180,
                p = l + r,
                f = p * Math.abs(Math.cos(c)) + p * Math.abs(Math.sin(c)),
                d = e + ' solid ' + r + 'px;'
              return (
                '<div style="' +
                [
                  'position:absolute;width:' + l + 'px;height:' + l + 'px;',
                  (u +=
                    ';' +
                    s +
                    ':-' +
                    Math.round(
                      100 *
                        ((f - Math.SQRT2 * r) / 2 +
                          Math.SQRT2 * r -
                          (f - p) / 2)
                    ) /
                      100 +
                    'px') +
                    ';' +
                    h +
                    ';',
                  'border-bottom:' + d,
                  'border-right:' + d,
                  'background-color:' + i + ';',
                ].join('') +
                '"></div>'
              )
            })(n, i, r)),
          tt(t))
        )
          o.innerHTML = t + a
        else if (t) {
          ;(o.innerHTML = ''), Q(t) || (t = [t])
          for (var s = 0; s < t.length; s++)
            at(t[s]) && t[s].parentNode !== o && o.appendChild(t[s])
          if (a && o.childNodes.length) {
            var l = document.createElement('div')
            ;(l.innerHTML = a), o.appendChild(l)
          }
        }
      } else o.innerHTML = ''
    }),
    (t.prototype.setEnterable = function (t) {
      this._enterable = t
    }),
    (t.prototype.getSize = function () {
      var t = this.el
      return [t.offsetWidth, t.offsetHeight]
    }),
    (t.prototype.moveTo = function (t, e) {
      var n = this._styleCoord
      if (
        (Ux(n, this._zr, this._appendToBody, t, e),
        null != n[0] && null != n[1])
      ) {
        var i = this.el.style
        U(Wx(n[0], n[1]), function (t) {
          i[t[0]] = t[1]
        })
      }
    }),
    (t.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3]
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
    }),
    (t.prototype.hide = function () {
      var t = this,
        e = this.el.style
      ;(e.visibility = 'hidden'),
        (e.opacity = '0'),
        x.transform3dSupported && (e.willChange = ''),
        (this._show = !1),
        (this._longHideTimeout = setTimeout(function () {
          return (t._longHide = !0)
        }, 500))
    }),
    (t.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(K(this.hide, this), t)))
          : this.hide())
    }),
    (t.prototype.isShow = function () {
      return this._show
    }),
    (t.prototype.dispose = function () {
      this.el.parentNode.removeChild(this.el)
    }),
    t
  )
})()
function Yx(t) {
  return Math.max(0, t)
}
function jx(t) {
  var e = Yx(t.shadowBlur || 0),
    n = Yx(t.shadowOffsetX || 0),
    i = Yx(t.shadowOffsetY || 0)
  return {
    left: Yx(e - n),
    right: Yx(e + n),
    top: Yx(e - i),
    bottom: Yx(e + i),
  }
}
function qx(t, e, n, i) {
  ;(t[0] = n),
    (t[1] = i),
    (t[2] = t[0] / e.getWidth()),
    (t[3] = t[1] / e.getHeight())
}
var Zx = (function () {
    function t(t) {
      ;(this._show = !1),
        (this._styleCoord = [0, 0, 0, 0]),
        (this._enterable = !0),
        (this._zr = t.getZr()),
        qx(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2)
    }
    return (
      (t.prototype.update = function (t) {
        t.get('alwaysShowContent') && this._moveIfResized()
      }),
      (t.prototype.show = function () {
        this._hideTimeout && clearTimeout(this._hideTimeout),
          this.el.show(),
          (this._show = !0)
      }),
      (t.prototype.setContent = function (t, e, n, i, r) {
        it(t) && ar(''), this.el && this._zr.remove(this.el)
        var o = n.getModel('textStyle')
        ;(this.el = new as({
          style: {
            rich: e.richTextStyles,
            text: t,
            lineHeight: 22,
            backgroundColor: n.get('backgroundColor'),
            borderRadius: n.get('borderRadius'),
            borderWidth: 1,
            borderColor: i,
            shadowColor: n.get('shadowColor'),
            shadowBlur: n.get('shadowBlur'),
            shadowOffsetX: n.get('shadowOffsetX'),
            shadowOffsetY: n.get('shadowOffsetY'),
            textShadowColor: o.get('textShadowColor'),
            textShadowBlur: o.get('textShadowBlur') || 0,
            textShadowOffsetX: o.get('textShadowOffsetX') || 0,
            textShadowOffsetY: o.get('textShadowOffsetY') || 0,
            fill: n.get(['textStyle', 'color']),
            padding: Gf(n, 'richText'),
            verticalAlign: 'top',
            align: 'left',
          },
          z: n.get('z'),
        })),
          this._zr.add(this.el)
        var a = this
        this.el.on('mouseover', function () {
          a._enterable && (clearTimeout(a._hideTimeout), (a._show = !0)),
            (a._inContent = !0)
        }),
          this.el.on('mouseout', function () {
            a._enterable && a._show && a.hideLater(a._hideDelay),
              (a._inContent = !1)
          })
      }),
      (t.prototype.setEnterable = function (t) {
        this._enterable = t
      }),
      (t.prototype.getSize = function () {
        var t = this.el,
          e = this.el.getBoundingRect(),
          n = jx(t.style)
        return [e.width + n.left + n.right, e.height + n.top + n.bottom]
      }),
      (t.prototype.moveTo = function (t, e) {
        var n = this.el
        if (n) {
          var i = this._styleCoord
          qx(i, this._zr, t, e), (t = i[0]), (e = i[1])
          var r = n.style,
            o = Yx(r.borderWidth || 0),
            a = jx(r)
          ;(n.x = t + o + a.left), (n.y = e + o + a.top), n.markRedraw()
        }
      }),
      (t.prototype._moveIfResized = function () {
        var t = this._styleCoord[2],
          e = this._styleCoord[3]
        this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
      }),
      (t.prototype.hide = function () {
        this.el && this.el.hide(), (this._show = !1)
      }),
      (t.prototype.hideLater = function (t) {
        !this._show ||
          (this._inContent && this._enterable) ||
          (t
            ? ((this._hideDelay = t),
              (this._show = !1),
              (this._hideTimeout = setTimeout(K(this.hide, this), t)))
            : this.hide())
      }),
      (t.prototype.isShow = function () {
        return this._show
      }),
      (t.prototype.dispose = function () {
        this._zr.remove(this.el)
      }),
      t
    )
  })(),
  Kx = K,
  $x = U,
  Qx = Vi,
  Jx = new qa({ shape: { x: -1, y: -1, width: 2, height: 2 } })
function tw(t, e, n) {
  var i,
    r = e.ecModel
  n ? ((i = new Ch(n, r, r)), (i = new Ch(e.option, i, r))) : (i = e)
  for (var o = t.length - 1; o >= 0; o--) {
    var a = t[o]
    a &&
      (a instanceof Ch && (a = a.get('tooltip', !0)),
      tt(a) && (a = { formatter: a }),
      a && (i = new Ch(a, i, r)))
  }
  return i
}
function ew(t, e) {
  return t.dispatchAction || K(e.dispatchAction, e)
}
function nw(t) {
  return 'center' === t || 'middle' === t
}
var iw = (function (t) {
  function e() {
    var n = (null !== t && t.apply(this, arguments)) || this
    return (n.type = e.type), n
  }
  return (
    g(e, t),
    (e.prototype.init = function (t, e) {
      if (!x.node) {
        var n,
          i = t.getComponent('tooltip'),
          r = i.get('renderMode')
        ;(this._renderMode =
          'auto' === (n = r)
            ? x.domSupported
              ? 'html'
              : 'richText'
            : n || 'html'),
          (this._tooltipContent =
            'richText' === this._renderMode
              ? new Zx(e)
              : new Xx(e.getDom(), e, {
                  appendToBody: i.get('appendToBody', !0),
                }))
      }
    }),
    (e.prototype.render = function (t, e, n) {
      if (!x.node) {
        this.group.removeAll(),
          (this._tooltipModel = t),
          (this._ecModel = e),
          (this._api = n),
          (this._alwaysShowContent = t.get('alwaysShowContent'))
        var i = this._tooltipContent
        i.update(t),
          i.setEnterable(t.get('enterable')),
          this._initGlobalListener(),
          this._keepShow()
      }
    }),
    (e.prototype._initGlobalListener = function () {
      var t = this._tooltipModel.get('triggerOn')
      mx(
        'itemTooltip',
        this._api,
        Kx(function (e, n, i) {
          'none' !== t &&
            (t.indexOf(e) >= 0
              ? this._tryShow(n, i)
              : 'leave' === e && this._hide(i))
        }, this)
      )
    }),
    (e.prototype._keepShow = function () {
      var t = this._tooltipModel,
        e = this._ecModel,
        n = this._api
      if (
        null != this._lastX &&
        null != this._lastY &&
        'none' !== t.get('triggerOn')
      ) {
        var i = this
        clearTimeout(this._refreshUpdateTimeout),
          (this._refreshUpdateTimeout = setTimeout(function () {
            !n.isDisposed() &&
              i.manuallyShowTip(t, e, n, {
                x: i._lastX,
                y: i._lastY,
                dataByCoordSys: i._lastDataByCoordSys,
              })
          }))
      }
    }),
    (e.prototype.manuallyShowTip = function (t, e, n, i) {
      if (i.from !== this.uid && !x.node) {
        var r = ew(i, n)
        this._ticket = ''
        var o = i.dataByCoordSys,
          a = (function (t, e, n) {
            var i = br(t).queryOptionMap,
              r = i.keys()[0]
            if (!r || 'series' === r) return
            var o,
              a = Tr(e, r, i.get(r), {
                useDefault: !1,
                enableAll: !1,
                enableNone: !1,
              }).models[0]
            if (!a) return
            if (
              (n.getViewOfComponentModel(a).group.traverse(function (e) {
                var n = ss(e).tooltipConfig
                if (n && n.name === t.name) return (o = e), !0
              }),
              o)
            )
              return {
                componentMainType: r,
                componentIndex: a.componentIndex,
                el: o,
              }
          })(i, e, n)
        if (a) {
          var s = a.el.getBoundingRect().clone()
          s.applyTransform(a.el.transform),
            this._tryShow(
              {
                offsetX: s.x + s.width / 2,
                offsetY: s.y + s.height / 2,
                target: a.el,
                position: i.position,
                positionDefault: 'bottom',
              },
              r
            )
        } else if (i.tooltip && null != i.x && null != i.y) {
          var l = Jx
          ;(l.x = i.x),
            (l.y = i.y),
            l.update(),
            (ss(l).tooltipConfig = { name: null, option: i.tooltip }),
            this._tryShow({ offsetX: i.x, offsetY: i.y, target: l }, r)
        } else if (o)
          this._tryShow(
            {
              offsetX: i.x,
              offsetY: i.y,
              position: i.position,
              dataByCoordSys: o,
              tooltipOption: i.tooltipOption,
            },
            r
          )
        else if (null != i.seriesIndex) {
          if (this._manuallyAxisShowTip(t, e, n, i)) return
          var u = Tx(i, e),
            h = u.point[0],
            c = u.point[1]
          null != h &&
            null != c &&
            this._tryShow(
              {
                offsetX: h,
                offsetY: c,
                target: u.el,
                position: i.position,
                positionDefault: 'bottom',
              },
              r
            )
        } else
          null != i.x &&
            null != i.y &&
            (n.dispatchAction({ type: 'updateAxisPointer', x: i.x, y: i.y }),
            this._tryShow(
              {
                offsetX: i.x,
                offsetY: i.y,
                position: i.position,
                target: n.getZr().findHover(i.x, i.y).target,
              },
              r
            ))
      }
    }),
    (e.prototype.manuallyHideTip = function (t, e, n, i) {
      var r = this._tooltipContent
      !this._alwaysShowContent &&
        this._tooltipModel &&
        r.hideLater(this._tooltipModel.get('hideDelay')),
        (this._lastX = this._lastY = this._lastDataByCoordSys = null),
        i.from !== this.uid && this._hide(ew(i, n))
    }),
    (e.prototype._manuallyAxisShowTip = function (t, e, n, i) {
      var r = i.seriesIndex,
        o = i.dataIndex,
        a = e.getComponent('axisPointer').coordSysAxesInfo
      if (null != r && null != o && null != a) {
        var s = e.getSeriesByIndex(r)
        if (s)
          if (
            'axis' ===
            tw(
              [
                s.getData().getItemModel(o),
                s,
                (s.coordinateSystem || {}).model,
              ],
              this._tooltipModel
            ).get('trigger')
          )
            return (
              n.dispatchAction({
                type: 'updateAxisPointer',
                seriesIndex: r,
                dataIndex: o,
                position: i.position,
              }),
              !0
            )
      }
    }),
    (e.prototype._tryShow = function (t, e) {
      var n = t.target
      if (this._tooltipModel) {
        ;(this._lastX = t.offsetX), (this._lastY = t.offsetY)
        var i = t.dataByCoordSys
        if (i && i.length) this._showAxisTooltip(i, t)
        else if (n) {
          var r, o
          ;(this._lastDataByCoordSys = null),
            Jd(
              n,
              function (t) {
                return null != ss(t).dataIndex
                  ? ((r = t), !0)
                  : null != ss(t).tooltipConfig
                  ? ((o = t), !0)
                  : void 0
              },
              !0
            ),
            r
              ? this._showSeriesItemTooltip(t, r, e)
              : o
              ? this._showComponentItemTooltip(t, o, e)
              : this._hide(e)
        } else (this._lastDataByCoordSys = null), this._hide(e)
      }
    }),
    (e.prototype._showOrMove = function (t, e) {
      var n = t.get('showDelay')
      ;(e = K(e, this)),
        clearTimeout(this._showTimout),
        n > 0 ? (this._showTimout = setTimeout(e, n)) : e()
    }),
    (e.prototype._showAxisTooltip = function (t, e) {
      var n = this._ecModel,
        i = this._tooltipModel,
        r = [e.offsetX, e.offsetY],
        o = tw([e.tooltipOption], i),
        a = this._renderMode,
        s = [],
        l = Bf('section', { blocks: [], noHeader: !0 }),
        u = [],
        h = new Uf()
      $x(t, function (t) {
        $x(t.dataByAxis, function (t) {
          var e = n.getComponent(t.axisDim + 'Axis', t.axisIndex),
            i = t.value
          if (e && null != i) {
            var r = lx(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt),
              o = Bf('section', {
                header: r,
                noHeader: !dt(r),
                sortBlocks: !0,
                blocks: [],
              })
            l.blocks.push(o),
              U(t.seriesDataIndices, function (l) {
                var c = n.getSeriesByIndex(l.seriesIndex),
                  p = l.dataIndexInside,
                  f = c.getDataParams(p)
                if (!(f.dataIndex < 0)) {
                  ;(f.axisDim = t.axisDim),
                    (f.axisIndex = t.axisIndex),
                    (f.axisType = t.axisType),
                    (f.axisId = t.axisId),
                    (f.axisValue = Hm(e.axis, { value: i })),
                    (f.axisValueLabel = r),
                    (f.marker = h.makeTooltipMarker('item', dc(f.color), a))
                  var d = af(c.formatTooltip(p, !0, null))
                  d.markupFragment && o.blocks.push(d.markupFragment),
                    d.markupText && u.push(d.markupText),
                    s.push(f)
                }
              })
          }
        })
      }),
        l.blocks.reverse(),
        u.reverse()
      var c = e.position,
        p = o.get('order'),
        f = Nf(l, h, a, p, n.get('useUTC'), o.get('textStyle'))
      f && u.unshift(f)
      var d = 'richText' === a ? '\n\n' : '<br/>',
        g = u.join(d)
      this._showOrMove(o, function () {
        this._updateContentNotChangedOnAxis(t, s)
          ? this._updatePosition(o, c, r[0], r[1], this._tooltipContent, s)
          : this._showTooltipContent(
              o,
              g,
              s,
              Math.random() + '',
              r[0],
              r[1],
              c,
              null,
              h
            )
      })
    }),
    (e.prototype._showSeriesItemTooltip = function (t, e, n) {
      var i = this._ecModel,
        r = ss(e),
        o = r.seriesIndex,
        a = i.getSeriesByIndex(o),
        s = r.dataModel || a,
        l = r.dataIndex,
        u = r.dataType,
        h = s.getData(u),
        c = this._renderMode,
        p = t.positionDefault,
        f = tw(
          [h.getItemModel(l), s, a && (a.coordinateSystem || {}).model],
          this._tooltipModel,
          p ? { position: p } : null
        ),
        d = f.get('trigger')
      if (null == d || 'item' === d) {
        var g = s.getDataParams(l, u),
          y = new Uf()
        g.marker = y.makeTooltipMarker('item', dc(g.color), c)
        var v = af(s.formatTooltip(l, !1, u)),
          m = f.get('order'),
          _ = v.markupFragment
            ? Nf(v.markupFragment, y, c, m, i.get('useUTC'), f.get('textStyle'))
            : v.markupText,
          x = 'item_' + s.name + '_' + l
        this._showOrMove(f, function () {
          this._showTooltipContent(
            f,
            _,
            g,
            x,
            t.offsetX,
            t.offsetY,
            t.position,
            t.target,
            y
          )
        }),
          n({
            type: 'showTip',
            dataIndexInside: l,
            dataIndex: h.getRawIndex(l),
            seriesIndex: o,
            from: this.uid,
          })
      }
    }),
    (e.prototype._showComponentItemTooltip = function (t, e, n) {
      var i = ss(e),
        r = i.tooltipConfig.option || {}
      if (tt(r)) {
        r = { content: r, formatter: r }
      }
      var o = [r],
        a = this._ecModel.getComponent(i.componentMainType, i.componentIndex)
      a && o.push(a), o.push({ formatter: r.content })
      var s = t.positionDefault,
        l = tw(o, this._tooltipModel, s ? { position: s } : null),
        u = l.get('content'),
        h = Math.random() + '',
        c = new Uf()
      this._showOrMove(l, function () {
        var n = B(l.get('formatterParams') || {})
        this._showTooltipContent(
          l,
          u,
          n,
          h,
          t.offsetX,
          t.offsetY,
          t.position,
          e,
          c
        )
      }),
        n({ type: 'showTip', from: this.uid })
    }),
    (e.prototype._showTooltipContent = function (t, e, n, i, r, o, a, s, l) {
      if (((this._ticket = ''), t.get('showContent') && t.get('show'))) {
        var u = this._tooltipContent,
          h = t.get('formatter')
        a = a || t.get('position')
        var c = e,
          p = this._getNearestPoint(
            [r, o],
            n,
            t.get('trigger'),
            t.get('borderColor')
          ).color
        if (h)
          if (tt(h)) {
            var f = t.ecModel.get('useUTC'),
              d = Q(n) ? n[0] : n
            ;(c = h),
              d &&
                d.axisType &&
                d.axisType.indexOf('time') >= 0 &&
                (c = Vh(d.axisValue, c, f)),
              (c = fc(c, n, !0))
          } else if (J(h)) {
            var g = Kx(function (e, i) {
              e === this._ticket &&
                (u.setContent(i, l, t, p, a),
                this._updatePosition(t, a, r, o, u, n, s))
            }, this)
            ;(this._ticket = i), (c = h(n, i, g))
          } else c = h
        u.setContent(c, l, t, p, a),
          u.show(t, p),
          this._updatePosition(t, a, r, o, u, n, s)
      }
    }),
    (e.prototype._getNearestPoint = function (t, e, n, i) {
      return 'axis' === n || Q(e)
        ? { color: i || ('html' === this._renderMode ? '#fff' : 'none') }
        : Q(e)
        ? void 0
        : { color: i || e.color || e.borderColor }
    }),
    (e.prototype._updatePosition = function (t, e, n, i, r, o, a) {
      var s = this._api.getWidth(),
        l = this._api.getHeight()
      e = e || t.get('position')
      var u = r.getSize(),
        h = t.get('align'),
        c = t.get('verticalAlign'),
        p = a && a.getBoundingRect().clone()
      if (
        (a && p.applyTransform(a.transform),
        J(e) &&
          (e = e([n, i], o, r.el, p, {
            viewSize: [s, l],
            contentSize: u.slice(),
          })),
        Q(e))
      )
        (n = Qx(e[0], s)), (i = Qx(e[1], l))
      else if (it(e)) {
        var f = e
        ;(f.width = u[0]), (f.height = u[1])
        var d = bc(f, { width: s, height: l })
        ;(n = d.x), (i = d.y), (h = null), (c = null)
      } else if (tt(e) && a) {
        var g = (function (t, e, n, i) {
          var r = n[0],
            o = n[1],
            a = Math.ceil(Math.SQRT2 * i) + 8,
            s = 0,
            l = 0,
            u = e.width,
            h = e.height
          switch (t) {
            case 'inside':
              ;(s = e.x + u / 2 - r / 2), (l = e.y + h / 2 - o / 2)
              break
            case 'top':
              ;(s = e.x + u / 2 - r / 2), (l = e.y - o - a)
              break
            case 'bottom':
              ;(s = e.x + u / 2 - r / 2), (l = e.y + h + a)
              break
            case 'left':
              ;(s = e.x - r - a), (l = e.y + h / 2 - o / 2)
              break
            case 'right':
              ;(s = e.x + u + a), (l = e.y + h / 2 - o / 2)
          }
          return [s, l]
        })(e, p, u, t.get('borderWidth'))
        ;(n = g[0]), (i = g[1])
      } else {
        g = (function (t, e, n, i, r, o, a) {
          var s = n.getSize(),
            l = s[0],
            u = s[1]
          null != o && (t + l + o + 2 > i ? (t -= l + o) : (t += o))
          null != a && (e + u + a > r ? (e -= u + a) : (e += a))
          return [t, e]
        })(n, i, r, s, l, h ? null : 20, c ? null : 20)
        ;(n = g[0]), (i = g[1])
      }
      if (
        (h && (n -= nw(h) ? u[0] / 2 : 'right' === h ? u[0] : 0),
        c && (i -= nw(c) ? u[1] / 2 : 'bottom' === c ? u[1] : 0),
        Bx(t))
      ) {
        g = (function (t, e, n, i, r) {
          var o = n.getSize(),
            a = o[0],
            s = o[1]
          return (
            (t = Math.min(t + a, i) - a),
            (e = Math.min(e + s, r) - s),
            (t = Math.max(t, 0)),
            (e = Math.max(e, 0)),
            [t, e]
          )
        })(n, i, r, s, l)
        ;(n = g[0]), (i = g[1])
      }
      r.moveTo(n, i)
    }),
    (e.prototype._updateContentNotChangedOnAxis = function (t, e) {
      var n = this._lastDataByCoordSys,
        i = this._cbParamsList,
        r = !!n && n.length === t.length
      return (
        r &&
          $x(n, function (n, o) {
            var a = n.dataByAxis || [],
              s = (t[o] || {}).dataByAxis || []
            ;(r = r && a.length === s.length) &&
              $x(a, function (t, n) {
                var o = s[n] || {},
                  a = t.seriesDataIndices || [],
                  l = o.seriesDataIndices || []
                ;(r =
                  r &&
                  t.value === o.value &&
                  t.axisType === o.axisType &&
                  t.axisId === o.axisId &&
                  a.length === l.length) &&
                  $x(a, function (t, e) {
                    var n = l[e]
                    r =
                      r &&
                      t.seriesIndex === n.seriesIndex &&
                      t.dataIndex === n.dataIndex
                  }),
                  i &&
                    U(t.seriesDataIndices, function (t) {
                      var n = t.seriesIndex,
                        o = e[n],
                        a = i[n]
                      o && a && a.data !== o.data && (r = !1)
                    })
              })
          }),
        (this._lastDataByCoordSys = t),
        (this._cbParamsList = e),
        !!r
      )
    }),
    (e.prototype._hide = function (t) {
      ;(this._lastDataByCoordSys = null), t({ type: 'hideTip', from: this.uid })
    }),
    (e.prototype.dispose = function (t, e) {
      x.node || (this._tooltipContent.dispose(), bx('itemTooltip', e))
    }),
    (e.type = 'tooltip'),
    e
  )
})(rd)
function rw(t) {
  jm(Ox),
    t.registerComponentModel(Rx),
    t.registerComponentView(iw),
    t.registerAction(
      { type: 'showTip', event: 'showTip', update: 'tooltip:manuallyShowTip' },
      function () {}
    ),
    t.registerAction(
      { type: 'hideTip', event: 'hideTip', update: 'tooltip:manuallyHideTip' },
      function () {}
    )
}
var ow = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (
        (n.type = e.type), (n.layoutMode = { type: 'box', ignoreSize: !0 }), n
      )
    }
    return (
      g(e, t),
      (e.type = 'title'),
      (e.defaultOption = {
        zlevel: 0,
        z: 6,
        show: !0,
        text: '',
        target: 'blank',
        subtext: '',
        subtarget: 'blank',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        textStyle: { fontSize: 18, fontWeight: 'bold', color: '#464646' },
        subtextStyle: { fontSize: 12, color: '#6E7079' },
      }),
      e
    )
  })(Dc),
  aw = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (n.type = e.type), n
    }
    return (
      g(e, t),
      (e.prototype.render = function (t, e, n) {
        if ((this.group.removeAll(), t.get('show'))) {
          var i = this.group,
            r = t.getModel('textStyle'),
            o = t.getModel('subtextStyle'),
            a = t.get('textAlign'),
            s = ut(t.get('textBaseline'), t.get('textVerticalAlign')),
            l = new as({
              style: rh(
                r,
                { text: t.get('text'), fill: r.getTextColor() },
                { disableBox: !0 }
              ),
              z2: 10,
            }),
            u = l.getBoundingRect(),
            h = t.get('subtext'),
            c = new as({
              style: rh(
                o,
                {
                  text: h,
                  fill: o.getTextColor(),
                  y: u.height + t.get('itemGap'),
                  verticalAlign: 'top',
                },
                { disableBox: !0 }
              ),
              z2: 10,
            }),
            p = t.get('link'),
            f = t.get('sublink'),
            d = t.get('triggerEvent', !0)
          ;(l.silent = !p && !d),
            (c.silent = !f && !d),
            p &&
              l.on('click', function () {
                gc(p, '_' + t.get('target'))
              }),
            f &&
              c.on('click', function () {
                gc(f, '_' + t.get('subtarget'))
              }),
            (ss(l).eventData = ss(c).eventData =
              d
                ? { componentType: 'title', componentIndex: t.componentIndex }
                : null),
            i.add(l),
            h && i.add(c)
          var g = i.getBoundingRect(),
            y = t.getBoxLayoutParams()
          ;(y.width = g.width), (y.height = g.height)
          var v = bc(
            y,
            { width: n.getWidth(), height: n.getHeight() },
            t.get('padding')
          )
          a ||
            ('middle' === (a = t.get('left') || t.get('right')) &&
              (a = 'center'),
            'right' === a
              ? (v.x += v.width)
              : 'center' === a && (v.x += v.width / 2)),
            s ||
              ('center' === (s = t.get('top') || t.get('bottom')) &&
                (s = 'middle'),
              'bottom' === s
                ? (v.y += v.height)
                : 'middle' === s && (v.y += v.height / 2),
              (s = s || 'top')),
            (i.x = v.x),
            (i.y = v.y),
            i.markRedraw()
          var m = { align: a, verticalAlign: s }
          l.setStyle(m), c.setStyle(m), (g = i.getBoundingRect())
          var _ = v.margin,
            x = t.getItemStyle(['color', 'opacity'])
          x.fill = t.get('backgroundColor')
          var w = new qa({
            shape: {
              x: g.x - _[3],
              y: g.y - _[0],
              width: g.width + _[1] + _[3],
              height: g.height + _[0] + _[2],
              r: t.get('borderRadius'),
            },
            style: x,
            subPixelOptimize: !0,
            silent: !0,
          })
          i.add(w)
        }
      }),
      (e.type = 'title'),
      e
    )
  })(rd)
function sw(t) {
  t.registerComponentModel(ow), t.registerComponentView(aw)
}
var lw = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (
        (n.type = e.type), (n.layoutMode = { type: 'box', ignoreSize: !0 }), n
      )
    }
    return (
      g(e, t),
      (e.prototype.init = function (t, e, n) {
        this.mergeDefaultAndTheme(t, n),
          (t.selected = t.selected || {}),
          this._updateSelector(t)
      }),
      (e.prototype.mergeOption = function (e, n) {
        t.prototype.mergeOption.call(this, e, n), this._updateSelector(e)
      }),
      (e.prototype._updateSelector = function (t) {
        var e = t.selector,
          n = this.ecModel
        !0 === e && (e = t.selector = ['all', 'inverse']),
          Q(e) &&
            U(e, function (t, i) {
              tt(t) && (t = { type: t }),
                (e[i] = z(
                  t,
                  (function (t, e) {
                    return 'all' === e
                      ? {
                          type: 'all',
                          title: t
                            .getLocaleModel()
                            .get(['legend', 'selector', 'all']),
                        }
                      : 'inverse' === e
                      ? {
                          type: 'inverse',
                          title: t
                            .getLocaleModel()
                            .get(['legend', 'selector', 'inverse']),
                        }
                      : void 0
                  })(n, t.type)
                ))
            })
      }),
      (e.prototype.optionUpdated = function () {
        this._updateData(this.ecModel)
        var t = this._data
        if (t[0] && 'single' === this.get('selectedMode')) {
          for (var e = !1, n = 0; n < t.length; n++) {
            var i = t[n].get('name')
            if (this.isSelected(i)) {
              this.select(i), (e = !0)
              break
            }
          }
          !e && this.select(t[0].get('name'))
        }
      }),
      (e.prototype._updateData = function (t) {
        var e = [],
          n = []
        t.eachRawSeries(function (i) {
          var r,
            o = i.name
          if ((n.push(o), i.legendVisualProvider)) {
            var a = i.legendVisualProvider.getAllNames()
            t.isSeriesFiltered(i) || (n = n.concat(a)),
              a.length ? (e = e.concat(a)) : (r = !0)
          } else r = !0
          r && yr(i) && e.push(i.name)
        }),
          (this._availableNames = n)
        var i = X(
          this.get('data') || e,
          function (t) {
            return (
              ('string' != typeof t && 'number' != typeof t) ||
                (t = { name: t }),
              new Ch(t, this, this.ecModel)
            )
          },
          this
        )
        this._data = i
      }),
      (e.prototype.getData = function () {
        return this._data
      }),
      (e.prototype.select = function (t) {
        var e = this.option.selected
        'single' === this.get('selectedMode') &&
          U(this._data, function (t) {
            e[t.get('name')] = !1
          })
        e[t] = !0
      }),
      (e.prototype.unSelect = function (t) {
        'single' !== this.get('selectedMode') && (this.option.selected[t] = !1)
      }),
      (e.prototype.toggleSelected = function (t) {
        var e = this.option.selected
        e.hasOwnProperty(t) || (e[t] = !0),
          this[e[t] ? 'unSelect' : 'select'](t)
      }),
      (e.prototype.allSelect = function () {
        var t = this._data,
          e = this.option.selected
        U(t, function (t) {
          e[t.get('name', !0)] = !0
        })
      }),
      (e.prototype.inverseSelect = function () {
        var t = this._data,
          e = this.option.selected
        U(t, function (t) {
          var n = t.get('name', !0)
          e.hasOwnProperty(n) || (e[n] = !0), (e[n] = !e[n])
        })
      }),
      (e.prototype.isSelected = function (t) {
        var e = this.option.selected
        return (
          !(e.hasOwnProperty(t) && !e[t]) && V(this._availableNames, t) >= 0
        )
      }),
      (e.prototype.getOrient = function () {
        return 'vertical' === this.get('orient')
          ? { index: 1, name: 'vertical' }
          : { index: 0, name: 'horizontal' }
      }),
      (e.type = 'legend.plain'),
      (e.dependencies = ['series']),
      (e.defaultOption = {
        zlevel: 0,
        z: 4,
        show: !0,
        orient: 'horizontal',
        left: 'center',
        top: 0,
        align: 'auto',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        symbolRotate: 'inherit',
        inactiveColor: '#ccc',
        inactiveBorderColor: '#ccc',
        inactiveBorderWidth: 'auto',
        itemStyle: {
          color: 'inherit',
          opacity: 'inherit',
          decal: 'inherit',
          shadowBlur: 0,
          shadowColor: null,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderColor: 'inherit',
          borderWidth: 'auto',
          borderCap: 'inherit',
          borderJoin: 'inherit',
          borderDashOffset: 'inherit',
          borderMiterLimit: 'inherit',
        },
        lineStyle: {
          width: 'auto',
          color: 'inherit',
          inactiveColor: '#ccc',
          inactiveWidth: 2,
          opacity: 'inherit',
          type: 'inherit',
          cap: 'inherit',
          join: 'inherit',
          dashOffset: 'inherit',
          miterLimit: 'inherit',
          shadowBlur: 0,
          shadowColor: null,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        },
        textStyle: { color: '#333' },
        selectedMode: !0,
        selector: !1,
        selectorLabel: {
          show: !0,
          borderRadius: 10,
          padding: [3, 5, 3, 5],
          fontSize: 12,
          fontFamily: ' sans-serif',
          color: '#666',
          borderWidth: 1,
          borderColor: '#666',
        },
        emphasis: {
          selectorLabel: { show: !0, color: '#eee', backgroundColor: '#666' },
        },
        selectorPosition: 'auto',
        selectorItemGap: 7,
        selectorButtonGap: 10,
        tooltip: { show: !1 },
      }),
      e
    )
  })(Dc),
  uw = $,
  hw = U,
  cw = Ri
function pw(t, e, n, i) {
  gw(t, e, n, i),
    n.dispatchAction({ type: 'legendToggleSelect', name: null != t ? t : e }),
    dw(t, e, n, i)
}
function fw(t) {
  for (
    var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length;
    i < r && !(e = n[i].states.emphasis);

  )
    i++
  return e && e.hoverLayer
}
function dw(t, e, n, i) {
  fw(n) ||
    n.dispatchAction({
      type: 'highlight',
      seriesName: t,
      name: e,
      excludeSeriesId: i,
    })
}
function gw(t, e, n, i) {
  fw(n) ||
    n.dispatchAction({
      type: 'downplay',
      seriesName: t,
      name: e,
      excludeSeriesId: i,
    })
}
var yw = (function (t) {
  function e() {
    var n = (null !== t && t.apply(this, arguments)) || this
    return (n.type = e.type), (n.newlineDisabled = !1), n
  }
  return (
    g(e, t),
    (e.prototype.init = function () {
      this.group.add((this._contentGroup = new cw())),
        this.group.add((this._selectorGroup = new cw())),
        (this._isFirstRender = !0)
    }),
    (e.prototype.getContentGroup = function () {
      return this._contentGroup
    }),
    (e.prototype.getSelectorGroup = function () {
      return this._selectorGroup
    }),
    (e.prototype.render = function (t, e, n) {
      var i = this._isFirstRender
      if (((this._isFirstRender = !1), this.resetInner(), t.get('show', !0))) {
        var r = t.get('align'),
          o = t.get('orient')
        ;(r && 'auto' !== r) ||
          (r = 'right' === t.get('left') && 'vertical' === o ? 'right' : 'left')
        var a = t.get('selector', !0),
          s = t.get('selectorPosition', !0)
        !a || (s && 'auto' !== s) || (s = 'horizontal' === o ? 'end' : 'start'),
          this.renderInner(r, t, e, n, a, o, s)
        var l = t.getBoxLayoutParams(),
          u = { width: n.getWidth(), height: n.getHeight() },
          h = t.get('padding'),
          c = bc(l, u, h),
          p = this.layoutInner(t, r, c, i, a, s),
          f = bc(F({ width: p.width, height: p.height }, l), u, h)
        ;(this.group.x = f.x - p.x),
          (this.group.y = f.y - p.y),
          this.group.markRedraw(),
          this.group.add(
            (this._backgroundEl = (function (t, e) {
              var n = ac(e.get('padding')),
                i = e.getItemStyle(['color', 'opacity'])
              return (
                (i.fill = e.get('backgroundColor')),
                new qa({
                  shape: {
                    x: t.x - n[3],
                    y: t.y - n[0],
                    width: t.width + n[1] + n[3],
                    height: t.height + n[0] + n[2],
                    r: e.get('borderRadius'),
                  },
                  style: i,
                  silent: !0,
                  z2: -1,
                })
              )
            })(p, t))
          )
      }
    }),
    (e.prototype.resetInner = function () {
      this.getContentGroup().removeAll(),
        this._backgroundEl && this.group.remove(this._backgroundEl),
        this.getSelectorGroup().removeAll()
    }),
    (e.prototype.renderInner = function (t, e, n, i, r, o, a) {
      var s = this.getContentGroup(),
        l = mt(),
        u = e.get('selectedMode'),
        h = []
      n.eachRawSeries(function (t) {
        !t.get('legendHoverLink') && h.push(t.id)
      }),
        hw(
          e.getData(),
          function (r, o) {
            var a = r.get('name')
            if (!this.newlineDisabled && ('' === a || '\n' === a)) {
              var c = new cw()
              return (c.newline = !0), void s.add(c)
            }
            var p = n.getSeriesByName(a)[0]
            if (!l.get(a))
              if (p) {
                var f = p.getData(),
                  d = f.getVisual('legendLineStyle') || {},
                  g = f.getVisual('legendIcon'),
                  y = f.getVisual('style')
                this._createItem(p, a, o, r, e, t, d, y, g, u)
                  .on('click', uw(pw, a, null, i, h))
                  .on('mouseover', uw(dw, p.name, null, i, h))
                  .on('mouseout', uw(gw, p.name, null, i, h)),
                  l.set(a, !0)
              } else
                n.eachRawSeries(function (n) {
                  if (!l.get(a) && n.legendVisualProvider) {
                    var s = n.legendVisualProvider
                    if (!s.containName(a)) return
                    var c = s.indexOfName(a),
                      p = s.getItemVisual(c, 'style'),
                      f = s.getItemVisual(c, 'legendIcon'),
                      d = Ye(p.fill)
                    d && 0 === d[3] && ((d[3] = 0.2), (p.fill = Qe(d, 'rgba'))),
                      this._createItem(n, a, o, r, e, t, {}, p, f, u)
                        .on('click', uw(pw, null, a, i, h))
                        .on('mouseover', uw(dw, null, a, i, h))
                        .on('mouseout', uw(gw, null, a, i, h)),
                      l.set(a, !0)
                  }
                }, this)
          },
          this
        ),
        r && this._createSelector(r, e, i, o, a)
    }),
    (e.prototype._createSelector = function (t, e, n, i, r) {
      var o = this.getSelectorGroup()
      hw(t, function (t) {
        var i = t.type,
          r = new as({
            style: { x: 0, y: 0, align: 'center', verticalAlign: 'middle' },
            onclick: function () {
              n.dispatchAction({
                type: 'all' === i ? 'legendAllSelect' : 'legendInverseSelect',
              })
            },
          })
        o.add(r),
          nh(
            r,
            {
              normal: e.getModel('selectorLabel'),
              emphasis: e.getModel(['emphasis', 'selectorLabel']),
            },
            { defaultText: t.title }
          ),
          Xs(r)
      })
    }),
    (e.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u) {
      var h = t.visualDrawType,
        c = r.get('itemWidth'),
        p = r.get('itemHeight'),
        f = r.isSelected(e),
        d = i.get('symbolRotate'),
        g = i.get('icon'),
        y = (function (t, e, n, i, r, o, a) {
          for (
            var s = e.getModel('itemStyle'),
              l = bh.concat([['decal']]),
              u = {},
              h = 0;
            h < l.length;
            ++h
          ) {
            var c = l[h][l[h].length - 1],
              p = l[h][0]
            if ('inherit' === (y = s.getShallow(c)))
              switch (p) {
                case 'fill':
                  u.fill = r[o]
                  break
                case 'stroke':
                  u.stroke =
                    r[0 === t.lastIndexOf('empty', 0) ? 'fill' : 'stroke']
                  break
                case 'opacity':
                  u.opacity = ('fill' === o ? r : i).opacity
                  break
                default:
                  u[p] = r[p]
              }
            else
              'auto' === y && 'lineWidth' === p
                ? (u.lineWidth = r.lineWidth > 0 ? 2 : 0)
                : (u[p] = y)
          }
          var f = e.getModel('lineStyle'),
            d = _h.concat([['inactiveColor'], ['inactiveWidth']]),
            g = {}
          for (h = 0; h < d.length; ++h) {
            var y
            ;(c = d[h][1]), (p = d[h][0])
            'inherit' === (y = f.getShallow(c))
              ? (g[p] = i[p])
              : 'auto' === y && 'lineWidth' === p
              ? (g.lineWidth = i.lineWidth > 0 ? 2 : 0)
              : (g[p] = y)
          }
          if (
            ('auto' === u.fill && (u.fill = r.fill),
            'auto' === u.stroke && (u.stroke = r.fill),
            'auto' === g.stroke && (g.stroke = r.fill),
            !a)
          ) {
            var v = e.get('inactiveBorderWidth'),
              m = u[t.indexOf('empty') > -1 ? 'fill' : 'stroke']
            ;(u.lineWidth =
              'auto' === v ? (r.lineWidth > 0 && m ? 2 : 0) : u.lineWidth),
              (u.fill = e.get('inactiveColor')),
              (u.stroke = e.get('inactiveBorderColor')),
              (g.stroke = n.get('inactiveColor')),
              (g.lineWidth = n.get('inactiveWidth'))
          }
          return { itemStyle: u, lineStyle: g }
        })((l = g || l || 'roundRect'), i, r.getModel('lineStyle'), a, s, h, f),
        v = new cw(),
        m = i.getModel('textStyle')
      if ('function' != typeof t.getLegendIcon || (g && 'inherit' !== g)) {
        var _ =
          'inherit' === g && t.getData().getVisual('symbol')
            ? 'inherit' === d
              ? t.getData().getVisual('symbolRotate')
              : d
            : 0
        v.add(
          (function (t) {
            var e = t.icon || 'roundRect',
              n = cg(e, 0, 0, t.itemWidth, t.itemHeight, t.itemStyle.fill)
            n.setStyle(t.itemStyle),
              (n.rotation = ((t.iconRotate || 0) * Math.PI) / 180),
              n.setOrigin([t.itemWidth / 2, t.itemHeight / 2]),
              e.indexOf('empty') > -1 &&
                ((n.style.stroke = n.style.fill),
                (n.style.fill = '#fff'),
                (n.style.lineWidth = 2))
            return n
          })({
            itemWidth: c,
            itemHeight: p,
            icon: l,
            iconRotate: _,
            itemStyle: y.itemStyle,
            lineStyle: y.lineStyle,
          })
        )
      } else
        v.add(
          t.getLegendIcon({
            itemWidth: c,
            itemHeight: p,
            icon: l,
            iconRotate: d,
            itemStyle: y.itemStyle,
            lineStyle: y.lineStyle,
          })
        )
      var x = 'left' === o ? c + 5 : -5,
        w = o,
        b = r.get('formatter'),
        S = e
      'string' == typeof b && b
        ? (S = b.replace('{name}', null != e ? e : ''))
        : 'function' == typeof b && (S = b(e))
      var T = i.get('inactiveColor')
      v.add(
        new as({
          style: rh(m, {
            text: S,
            x: x,
            y: p / 2,
            fill: f ? m.getTextColor() : T,
            align: w,
            verticalAlign: 'middle',
          }),
        })
      )
      var M = new qa({ shape: v.getBoundingRect(), invisible: !0 }),
        C = i.getModel('tooltip')
      return (
        C.get('show') &&
          $u({
            el: M,
            componentModel: r,
            itemName: e,
            itemTooltipOption: C.option,
          }),
        v.add(M),
        v.eachChild(function (t) {
          t.silent = !0
        }),
        (M.silent = !u),
        this.getContentGroup().add(v),
        Xs(v),
        (v.__legendDataIndex = n),
        v
      )
    }),
    (e.prototype.layoutInner = function (t, e, n, i, r, o) {
      var a = this.getContentGroup(),
        s = this.getSelectorGroup()
      xc(t.get('orient'), a, t.get('itemGap'), n.width, n.height)
      var l = a.getBoundingRect(),
        u = [-l.x, -l.y]
      if ((s.markRedraw(), a.markRedraw(), r)) {
        xc('horizontal', s, t.get('selectorItemGap', !0))
        var h = s.getBoundingRect(),
          c = [-h.x, -h.y],
          p = t.get('selectorButtonGap', !0),
          f = t.getOrient().index,
          d = 0 === f ? 'width' : 'height',
          g = 0 === f ? 'height' : 'width',
          y = 0 === f ? 'y' : 'x'
        'end' === o ? (c[f] += l[d] + p) : (u[f] += h[d] + p),
          (c[1 - f] += l[g] / 2 - h[g] / 2),
          (s.x = c[0]),
          (s.y = c[1]),
          (a.x = u[0]),
          (a.y = u[1])
        var v = { x: 0, y: 0 }
        return (
          (v[d] = l[d] + p + h[d]),
          (v[g] = Math.max(l[g], h[g])),
          (v[y] = Math.min(0, h[y] + c[1 - f])),
          v
        )
      }
      return (a.x = u[0]), (a.y = u[1]), this.group.getBoundingRect()
    }),
    (e.prototype.remove = function () {
      this.getContentGroup().removeAll(), (this._isFirstRender = !0)
    }),
    (e.type = 'legend.plain'),
    e
  )
})(rd)
function vw(t) {
  var e = t.findComponents({ mainType: 'legend' })
  e &&
    e.length &&
    t.filterSeries(function (t) {
      for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1
      return !0
    })
}
function mw(t, e, n) {
  var i,
    r = {},
    o = 'toggleSelected' === t
  return (
    n.eachComponent('legend', function (n) {
      o && null != i
        ? n[i ? 'select' : 'unSelect'](e.name)
        : 'allSelect' === t || 'inverseSelect' === t
        ? n[t]()
        : (n[t](e.name), (i = n.isSelected(e.name))),
        U(n.getData(), function (t) {
          var e = t.get('name')
          if ('\n' !== e && '' !== e) {
            var i = n.isSelected(e)
            r.hasOwnProperty(e) ? (r[e] = r[e] && i) : (r[e] = i)
          }
        })
    }),
    'allSelect' === t || 'inverseSelect' === t
      ? { selected: r }
      : { name: e.name, selected: r }
  )
}
function _w(t) {
  t.registerComponentModel(lw),
    t.registerComponentView(yw),
    t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, vw),
    t.registerSubTypeDefaulter('legend', function () {
      return 'plain'
    }),
    (function (t) {
      t.registerAction(
        'legendToggleSelect',
        'legendselectchanged',
        $(mw, 'toggleSelected')
      ),
        t.registerAction(
          'legendAllSelect',
          'legendselectall',
          $(mw, 'allSelect')
        ),
        t.registerAction(
          'legendInverseSelect',
          'legendinverseselect',
          $(mw, 'inverseSelect')
        ),
        t.registerAction('legendSelect', 'legendselected', $(mw, 'select')),
        t.registerAction(
          'legendUnSelect',
          'legendunselected',
          $(mw, 'unSelect')
        )
    })(t)
}
function xw(t, e, n) {
  var i = [1, 1]
  ;(i[t.getOrient().index] = 0), Mc(e, n, { type: 'box', ignoreSize: !!i })
}
var ww = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (n.type = e.type), n
    }
    return (
      g(e, t),
      (e.prototype.setScrollDataIndex = function (t) {
        this.option.scrollDataIndex = t
      }),
      (e.prototype.init = function (e, n, i) {
        var r = Cc(e)
        t.prototype.init.call(this, e, n, i), xw(this, e, r)
      }),
      (e.prototype.mergeOption = function (e, n) {
        t.prototype.mergeOption.call(this, e, n), xw(this, this.option, e)
      }),
      (e.type = 'legend.scroll'),
      (e.defaultOption = Dh(lw.defaultOption, {
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: null,
        pageButtonPosition: 'end',
        pageFormatter: '{current}/{total}',
        pageIcons: {
          horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],
          vertical: ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z'],
        },
        pageIconColor: '#2f4554',
        pageIconInactiveColor: '#aaa',
        pageIconSize: 15,
        pageTextStyle: { color: '#333' },
        animationDurationUpdate: 800,
      })),
      e
    )
  })(lw),
  bw = Ri,
  Sw = ['width', 'height'],
  Tw = ['x', 'y'],
  Mw = (function (t) {
    function e() {
      var n = (null !== t && t.apply(this, arguments)) || this
      return (
        (n.type = e.type), (n.newlineDisabled = !0), (n._currentIndex = 0), n
      )
    }
    return (
      g(e, t),
      (e.prototype.init = function () {
        t.prototype.init.call(this),
          this.group.add((this._containerGroup = new bw())),
          this._containerGroup.add(this.getContentGroup()),
          this.group.add((this._controllerGroup = new bw()))
      }),
      (e.prototype.resetInner = function () {
        t.prototype.resetInner.call(this),
          this._controllerGroup.removeAll(),
          this._containerGroup.removeClipPath(),
          (this._containerGroup.__rectSize = null)
      }),
      (e.prototype.renderInner = function (e, n, i, r, o, a, s) {
        var l = this
        t.prototype.renderInner.call(this, e, n, i, r, o, a, s)
        var u = this._controllerGroup,
          h = n.get('pageIconSize', !0),
          c = Q(h) ? h : [h, h]
        f('pagePrev', 0)
        var p = n.getModel('pageTextStyle')
        function f(t, e) {
          var i = t + 'DataIndex',
            o = qu(
              n.get('pageIcons', !0)[n.getOrient().name][e],
              { onclick: K(l._pageGo, l, i, n, r) },
              { x: -c[0] / 2, y: -c[1] / 2, width: c[0], height: c[1] }
            )
          ;(o.name = t), u.add(o)
        }
        u.add(
          new as({
            name: 'pageText',
            style: {
              text: 'xx/xx',
              fill: p.getTextColor(),
              font: p.getFont(),
              verticalAlign: 'middle',
              align: 'center',
            },
            silent: !0,
          })
        ),
          f('pageNext', 1)
      }),
      (e.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a = this.getSelectorGroup(),
          s = t.getOrient().index,
          l = Sw[s],
          u = Tw[s],
          h = Sw[1 - s],
          c = Tw[1 - s]
        r && xc('horizontal', a, t.get('selectorItemGap', !0))
        var p = t.get('selectorButtonGap', !0),
          f = a.getBoundingRect(),
          d = [-f.x, -f.y],
          g = B(n)
        r && (g[l] = n[l] - f[l] - p)
        var y = this._layoutContentAndController(t, i, g, s, l, h, c, u)
        if (r) {
          if ('end' === o) d[s] += y[l] + p
          else {
            var v = f[l] + p
            ;(d[s] -= v), (y[u] -= v)
          }
          ;(y[l] += f[l] + p),
            (d[1 - s] += y[c] + y[h] / 2 - f[h] / 2),
            (y[h] = Math.max(y[h], f[h])),
            (y[c] = Math.min(y[c], f[c] + d[1 - s])),
            (a.x = d[0]),
            (a.y = d[1]),
            a.markRedraw()
        }
        return y
      }),
      (e.prototype._layoutContentAndController = function (
        t,
        e,
        n,
        i,
        r,
        o,
        a,
        s
      ) {
        var l = this.getContentGroup(),
          u = this._containerGroup,
          h = this._controllerGroup
        xc(
          t.get('orient'),
          l,
          t.get('itemGap'),
          i ? n.width : null,
          i ? null : n.height
        ),
          xc('horizontal', h, t.get('pageButtonItemGap', !0))
        var c = l.getBoundingRect(),
          p = h.getBoundingRect(),
          f = (this._showController = c[r] > n[r]),
          d = [-c.x, -c.y]
        e || (d[i] = l[s])
        var g = [0, 0],
          y = [-p.x, -p.y],
          v = ut(t.get('pageButtonGap', !0), t.get('itemGap', !0))
        f &&
          ('end' === t.get('pageButtonPosition', !0)
            ? (y[i] += n[r] - p[r])
            : (g[i] += p[r] + v))
        ;(y[1 - i] += c[o] / 2 - p[o] / 2),
          l.setPosition(d),
          u.setPosition(g),
          h.setPosition(y)
        var m = { x: 0, y: 0 }
        if (
          ((m[r] = f ? n[r] : c[r]),
          (m[o] = Math.max(c[o], p[o])),
          (m[a] = Math.min(0, p[a] + y[1 - i])),
          (u.__rectSize = n[r]),
          f)
        ) {
          var _ = { x: 0, y: 0 }
          ;(_[r] = Math.max(n[r] - p[r] - v, 0)),
            (_[o] = m[o]),
            u.setClipPath(new qa({ shape: _ })),
            (u.__rectSize = _[r])
        } else
          h.eachChild(function (t) {
            t.attr({ invisible: !0, silent: !0 })
          })
        var x = this._getPageInfo(t)
        return (
          null != x.pageIndex &&
            Su(
              l,
              { x: x.contentPosition[0], y: x.contentPosition[1] },
              f ? t : null
            ),
          this._updatePageInfoView(t, x),
          m
        )
      }),
      (e.prototype._pageGo = function (t, e, n) {
        var i = this._getPageInfo(e)[t]
        null != i &&
          n.dispatchAction({
            type: 'legendScroll',
            scrollDataIndex: i,
            legendId: e.id,
          })
      }),
      (e.prototype._updatePageInfoView = function (t, e) {
        var n = this._controllerGroup
        U(['pagePrev', 'pageNext'], function (i) {
          var r = null != e[i + 'DataIndex'],
            o = n.childOfName(i)
          o &&
            (o.setStyle(
              'fill',
              r
                ? t.get('pageIconColor', !0)
                : t.get('pageIconInactiveColor', !0)
            ),
            (o.cursor = r ? 'pointer' : 'default'))
        })
        var i = n.childOfName('pageText'),
          r = t.get('pageFormatter'),
          o = e.pageIndex,
          a = null != o ? o + 1 : 0,
          s = e.pageCount
        i &&
          r &&
          i.setStyle(
            'text',
            tt(r)
              ? r
                  .replace('{current}', null == a ? '' : a + '')
                  .replace('{total}', null == s ? '' : s + '')
              : r({ current: a, total: s })
          )
      }),
      (e.prototype._getPageInfo = function (t) {
        var e = t.get('scrollDataIndex', !0),
          n = this.getContentGroup(),
          i = this._containerGroup.__rectSize,
          r = t.getOrient().index,
          o = Sw[r],
          a = Tw[r],
          s = this._findTargetItemIndex(e),
          l = n.children(),
          u = l[s],
          h = l.length,
          c = h ? 1 : 0,
          p = {
            contentPosition: [n.x, n.y],
            pageCount: c,
            pageIndex: c - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null,
          }
        if (!u) return p
        var f = m(u)
        p.contentPosition[r] = -f.s
        for (var d = s + 1, g = f, y = f, v = null; d <= h; ++d)
          ((!(v = m(l[d])) && y.e > g.s + i) || (v && !_(v, g.s))) &&
            (g = y.i > g.i ? y : v) &&
            (null == p.pageNextDataIndex && (p.pageNextDataIndex = g.i),
            ++p.pageCount),
            (y = v)
        for (d = s - 1, g = f, y = f, v = null; d >= -1; --d)
          ((v = m(l[d])) && _(y, v.s)) ||
            !(g.i < y.i) ||
            ((y = g),
            null == p.pagePrevDataIndex && (p.pagePrevDataIndex = g.i),
            ++p.pageCount,
            ++p.pageIndex),
            (g = v)
        return p
        function m(t) {
          if (t) {
            var e = t.getBoundingRect(),
              n = e[a] + t[a]
            return { s: n, e: n + e[o], i: t.__legendDataIndex }
          }
        }
        function _(t, e) {
          return t.e >= e && t.s <= e + i
        }
      }),
      (e.prototype._findTargetItemIndex = function (t) {
        return this._showController
          ? (this.getContentGroup().eachChild(function (i, r) {
              var o = i.__legendDataIndex
              null == n && null != o && (n = r), o === t && (e = r)
            }),
            null != e ? e : n)
          : 0
        var e, n
      }),
      (e.type = 'legend.scroll'),
      e
    )
  })(yw)
function Cw(t) {
  jm(_w),
    t.registerComponentModel(ww),
    t.registerComponentView(Mw),
    (function (t) {
      t.registerAction('legendScroll', 'legendscroll', function (t, e) {
        var n = t.scrollDataIndex
        null != n &&
          e.eachComponent(
            { mainType: 'legend', subType: 'scroll', query: t },
            function (t) {
              t.setScrollDataIndex(n)
            }
          )
      })
    })(t)
}
function kw(t) {
  jm(_w), jm(Cw)
}
function Iw() {
  return !1
}
function Dw(t, e, n) {
  var i = H(),
    r = e.getWidth(),
    o = e.getHeight(),
    a = i.style
  return (
    a &&
      ((a.position = 'absolute'),
      (a.left = '0'),
      (a.top = '0'),
      (a.width = r + 'px'),
      (a.height = o + 'px'),
      i.setAttribute('data-zr-dom-id', t)),
    (i.width = r * n),
    (i.height = o * n),
    i
  )
}
var Aw = (function (t) {
  function e(e, n, i) {
    var r,
      o = t.call(this) || this
    ;(o.motionBlur = !1),
      (o.lastFrameAlpha = 0.7),
      (o.dpr = 1),
      (o.virtual = !1),
      (o.config = {}),
      (o.incremental = !1),
      (o.zlevel = 0),
      (o.maxRepaintRectCount = 5),
      (o.__dirty = !0),
      (o.__firstTimePaint = !0),
      (o.__used = !1),
      (o.__drawIndex = 0),
      (o.__startIndex = 0),
      (o.__endIndex = 0),
      (o.__prevStartIndex = null),
      (o.__prevEndIndex = null),
      (i = i || zn),
      'string' == typeof e ? (r = Dw(e, n, i)) : it(e) && (e = (r = e).id),
      (o.id = e),
      (o.dom = r)
    var a = r.style
    return (
      a &&
        ((r.onselectstart = Iw),
        (a.webkitUserSelect = 'none'),
        (a.userSelect = 'none'),
        (a.webkitTapHighlightColor = 'rgba(0,0,0,0)'),
        (a['-webkit-touch-callout'] = 'none'),
        (a.padding = '0'),
        (a.margin = '0'),
        (a.borderWidth = '0')),
      (o.domBack = null),
      (o.ctxBack = null),
      (o.painter = n),
      (o.config = null),
      (o.dpr = i),
      o
    )
  }
  return (
    Tt(e, t),
    (e.prototype.getElementCount = function () {
      return this.__endIndex - this.__startIndex
    }),
    (e.prototype.afterBrush = function () {
      ;(this.__prevStartIndex = this.__startIndex),
        (this.__prevEndIndex = this.__endIndex)
    }),
    (e.prototype.initContext = function () {
      ;(this.ctx = this.dom.getContext('2d')), (this.ctx.dpr = this.dpr)
    }),
    (e.prototype.setUnpainted = function () {
      this.__firstTimePaint = !0
    }),
    (e.prototype.createBackBuffer = function () {
      var t = this.dpr
      ;(this.domBack = Dw('back-' + this.id, this.painter, t)),
        (this.ctxBack = this.domBack.getContext('2d')),
        1 !== t && this.ctxBack.scale(t, t)
    }),
    (e.prototype.createRepaintRects = function (t, e, n, i) {
      if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null
      var r,
        o = [],
        a = this.maxRepaintRectCount,
        s = !1,
        l = new pi(0, 0, 0, 0)
      function u(t) {
        if (t.isFinite() && !t.isZero())
          if (0 === o.length) {
            ;(e = new pi(0, 0, 0, 0)).copy(t), o.push(e)
          } else {
            for (var e, n = !1, i = 1 / 0, r = 0, u = 0; u < o.length; ++u) {
              var h = o[u]
              if (h.intersect(t)) {
                var c = new pi(0, 0, 0, 0)
                c.copy(h), c.union(t), (o[u] = c), (n = !0)
                break
              }
              if (s) {
                l.copy(t), l.union(h)
                var p = t.width * t.height,
                  f = h.width * h.height,
                  d = l.width * l.height - p - f
                d < i && ((i = d), (r = u))
              }
            }
            if ((s && (o[r].union(t), (n = !0)), !n))
              (e = new pi(0, 0, 0, 0)).copy(t), o.push(e)
            s || (s = o.length >= a)
          }
      }
      for (var h = this.__startIndex; h < this.__endIndex; ++h) {
        if ((f = t[h])) {
          var c = f.shouldBePainted(n, i, !0, !0)
          ;(d =
            f.__isRendered && (1 & f.__dirty || !c)
              ? f.getPrevPaintRect()
              : null) && u(d)
          var p =
            c && (1 & f.__dirty || !f.__isRendered) ? f.getPaintRect() : null
          p && u(p)
        }
      }
      for (h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
        var f, d
        c = (f = e[h]).shouldBePainted(n, i, !0, !0)
        if (f && (!c || !f.__zr) && f.__isRendered)
          (d = f.getPrevPaintRect()) && u(d)
      }
      do {
        r = !1
        for (h = 0; h < o.length; )
          if (o[h].isZero()) o.splice(h, 1)
          else {
            for (var g = h + 1; g < o.length; )
              o[h].intersect(o[g])
                ? ((r = !0), o[h].union(o[g]), o.splice(g, 1))
                : g++
            h++
          }
      } while (r)
      return (this._paintRects = o), o
    }),
    (e.prototype.debugGetPaintRects = function () {
      return (this._paintRects || []).slice()
    }),
    (e.prototype.resize = function (t, e) {
      var n = this.dpr,
        i = this.dom,
        r = i.style,
        o = this.domBack
      r && ((r.width = t + 'px'), (r.height = e + 'px')),
        (i.width = t * n),
        (i.height = e * n),
        o &&
          ((o.width = t * n),
          (o.height = e * n),
          1 !== n && this.ctxBack.scale(n, n))
    }),
    (e.prototype.clear = function (t, e, n) {
      var i = this.dom,
        r = this.ctx,
        o = i.width,
        a = i.height
      e = e || this.clearColor
      var s = this.motionBlur && !t,
        l = this.lastFrameAlpha,
        u = this.dpr,
        h = this
      s &&
        (this.domBack || this.createBackBuffer(),
        (this.ctxBack.globalCompositeOperation = 'copy'),
        this.ctxBack.drawImage(i, 0, 0, o / u, a / u))
      var c = this.domBack
      function p(t, n, i, o) {
        if ((r.clearRect(t, n, i, o), e && 'transparent' !== e)) {
          var a = void 0
          null != e.colorStops
            ? ((a =
                e.__canvasGradient ||
                dg(r, e, { x: 0, y: 0, width: i, height: o })),
              (e.__canvasGradient = a))
            : (function (t) {
                return null != t.image
              })(e) &&
              (a = bg(r, e, {
                dirty: function () {
                  h.setUnpainted(), h.__painter.refresh()
                },
              })),
            r.save(),
            (r.fillStyle = a || e),
            r.fillRect(t, n, i, o),
            r.restore()
        }
        s &&
          (r.save(),
          (r.globalAlpha = l),
          r.drawImage(c, t, n, i, o),
          r.restore())
      }
      !n || s
        ? p(0, 0, o, a)
        : n.length &&
          U(n, function (t) {
            p(t.x * u, t.y * u, t.width * u, t.height * u)
          })
    }),
    e
  )
})(Ut)
function Pw(t) {
  return parseInt(t, 10)
}
var Ow = (function () {
  function t(t, e, n, i) {
    ;(this.type = 'canvas'),
      (this._zlevelList = []),
      (this._prevDisplayList = []),
      (this._layers = {}),
      (this._layerConfig = {}),
      (this._needsManuallyCompositing = !1),
      (this.type = 'canvas')
    var r = !t.nodeName || 'CANVAS' === t.nodeName.toUpperCase()
    ;(this._opts = n = N({}, n || {})),
      (this.dpr = n.devicePixelRatio || zn),
      (this._singleCanvas = r),
      (this.root = t)
    var o = t.style
    o &&
      ((o.webkitTapHighlightColor = 'transparent'),
      (o.webkitUserSelect = 'none'),
      (o.userSelect = 'none'),
      (o['-webkit-touch-callout'] = 'none'),
      (t.innerHTML = '')),
      (this.storage = e)
    var a = this._zlevelList
    this._prevDisplayList = []
    var s = this._layers
    if (r) {
      var l = t,
        u = l.width,
        h = l.height
      null != n.width && (u = n.width),
        null != n.height && (h = n.height),
        (this.dpr = n.devicePixelRatio || 1),
        (l.width = u * this.dpr),
        (l.height = h * this.dpr),
        (this._width = u),
        (this._height = h)
      var c = new Aw(l, this, this.dpr)
      ;(c.__builtin__ = !0),
        c.initContext(),
        (s[314159] = c),
        (c.zlevel = 314159),
        a.push(314159),
        (this._domRoot = t)
    } else {
      ;(this._width = this._getSize(0)), (this._height = this._getSize(1))
      var p = (this._domRoot = (function (t, e) {
        var n = document.createElement('div')
        return (
          (n.style.cssText =
            [
              'position:relative',
              'width:' + t + 'px',
              'height:' + e + 'px',
              'padding:0',
              'margin:0',
              'border-width:0',
            ].join(';') + ';'),
          n
        )
      })(this._width, this._height))
      t.appendChild(p)
    }
  }
  return (
    (t.prototype.getType = function () {
      return 'canvas'
    }),
    (t.prototype.isSingleCanvas = function () {
      return this._singleCanvas
    }),
    (t.prototype.getViewportRoot = function () {
      return this._domRoot
    }),
    (t.prototype.getViewportRootOffset = function () {
      var t = this.getViewportRoot()
      if (t)
        return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 }
    }),
    (t.prototype.refresh = function (t) {
      var e = this.storage.getDisplayList(!0),
        n = this._prevDisplayList,
        i = this._zlevelList
      ;(this._redrawId = Math.random()),
        this._paintList(e, n, t, this._redrawId)
      for (var r = 0; r < i.length; r++) {
        var o = i[r],
          a = this._layers[o]
        if (!a.__builtin__ && a.refresh) {
          var s = 0 === r ? this._backgroundColor : null
          a.refresh(s)
        }
      }
      return (
        this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
      )
    }),
    (t.prototype.refreshHover = function () {
      this._paintHoverList(this.storage.getDisplayList(!1))
    }),
    (t.prototype._paintHoverList = function (t) {
      var e = t.length,
        n = this._hoverlayer
      if ((n && n.clear(), e)) {
        for (
          var i,
            r = {
              inHover: !0,
              viewWidth: this._width,
              viewHeight: this._height,
            },
            o = 0;
          o < e;
          o++
        ) {
          var a = t[o]
          a.__inHover &&
            (n || (n = this._hoverlayer = this.getLayer(1e5)),
            i || (i = n.ctx).save(),
            Pg(i, a, r, o === e - 1))
        }
        i && i.restore()
      }
    }),
    (t.prototype.getHoverLayer = function () {
      return this.getLayer(1e5)
    }),
    (t.prototype.paintOne = function (t, e) {
      Ag(t, e)
    }),
    (t.prototype._paintList = function (t, e, n, i) {
      if (this._redrawId === i) {
        ;(n = n || !1), this._updateLayerStatus(t)
        var r = this._doPaintList(t, e, n),
          o = r.finished,
          a = r.needsRefreshHover
        if (
          (this._needsManuallyCompositing && this._compositeManually(),
          a && this._paintHoverList(t),
          o)
        )
          this.eachLayer(function (t) {
            t.afterBrush && t.afterBrush()
          })
        else {
          var s = this
          ke(function () {
            s._paintList(t, e, n, i)
          })
        }
      }
    }),
    (t.prototype._compositeManually = function () {
      var t = this.getLayer(314159).ctx,
        e = this._domRoot.width,
        n = this._domRoot.height
      t.clearRect(0, 0, e, n),
        this.eachBuiltinLayer(function (i) {
          i.virtual && t.drawImage(i.dom, 0, 0, e, n)
        })
    }),
    (t.prototype._doPaintList = function (t, e, n) {
      for (
        var i = this, r = [], o = this._opts.useDirtyRect, a = 0;
        a < this._zlevelList.length;
        a++
      ) {
        var s = this._zlevelList[a],
          l = this._layers[s]
        l.__builtin__ && l !== this._hoverlayer && (l.__dirty || n) && r.push(l)
      }
      for (
        var u = !0,
          h = !1,
          c = function (a) {
            var s,
              l = r[a],
              c = l.ctx,
              f = o && l.createRepaintRects(t, e, p._width, p._height),
              d = n ? l.__startIndex : l.__drawIndex,
              g = !n && l.incremental && Date.now,
              y = g && Date.now(),
              v = l.zlevel === p._zlevelList[0] ? p._backgroundColor : null
            if (l.__startIndex === l.__endIndex) l.clear(!1, v, f)
            else if (d === l.__startIndex) {
              var m = t[d]
              ;(m.incremental && m.notClear && !n) || l.clear(!1, v, f)
            }
            ;-1 === d &&
              (console.error('For some unknown reason. drawIndex is -1'),
              (d = l.__startIndex))
            var _ = function (e) {
              var n = {
                inHover: !1,
                allClipped: !1,
                prevEl: null,
                viewWidth: i._width,
                viewHeight: i._height,
              }
              for (s = d; s < l.__endIndex; s++) {
                var r = t[s]
                if (
                  (r.__inHover && (h = !0),
                  i._doPaintEl(r, l, o, e, n, s === l.__endIndex - 1),
                  g)
                )
                  if (Date.now() - y > 15) break
              }
              n.prevElClipPaths && c.restore()
            }
            if (f)
              if (0 === f.length) s = l.__endIndex
              else
                for (var x = p.dpr, w = 0; w < f.length; ++w) {
                  var b = f[w]
                  c.save(),
                    c.beginPath(),
                    c.rect(b.x * x, b.y * x, b.width * x, b.height * x),
                    c.clip(),
                    _(b),
                    c.restore()
                }
            else c.save(), _(), c.restore()
            ;(l.__drawIndex = s), l.__drawIndex < l.__endIndex && (u = !1)
          },
          p = this,
          f = 0;
        f < r.length;
        f++
      )
        c(f)
      return (
        x.wxa &&
          U(this._layers, function (t) {
            t && t.ctx && t.ctx.draw && t.ctx.draw()
          }),
        { finished: u, needsRefreshHover: h }
      )
    }),
    (t.prototype._doPaintEl = function (t, e, n, i, r, o) {
      var a = e.ctx
      if (n) {
        var s = t.getPaintRect()
        ;(!i || (s && s.intersect(i))) &&
          (Pg(a, t, r, o), t.setPrevPaintRect(s))
      } else Pg(a, t, r, o)
    }),
    (t.prototype.getLayer = function (t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = 314159)
      var n = this._layers[t]
      return (
        n ||
          (((n = new Aw('zr_' + t, this, this.dpr)).zlevel = t),
          (n.__builtin__ = !0),
          this._layerConfig[t]
            ? z(n, this._layerConfig[t], !0)
            : this._layerConfig[t - 0.01] &&
              z(n, this._layerConfig[t - 0.01], !0),
          e && (n.virtual = e),
          this.insertLayer(t, n),
          n.initContext()),
        n
      )
    }),
    (t.prototype.insertLayer = function (t, e) {
      var n = this._layers,
        i = this._zlevelList,
        r = i.length,
        o = this._domRoot,
        a = null,
        s = -1
      if (n[t]) R('ZLevel ' + t + ' has been used already')
      else if (
        (function (t) {
          return (
            !!t &&
            (!!t.__builtin__ ||
              ('function' == typeof t.resize && 'function' == typeof t.refresh))
          )
        })(e)
      ) {
        if (r > 0 && t > i[0]) {
          for (s = 0; s < r - 1 && !(i[s] < t && i[s + 1] > t); s++);
          a = n[i[s]]
        }
        if ((i.splice(s + 1, 0, t), (n[t] = e), !e.virtual))
          if (a) {
            var l = a.dom
            l.nextSibling
              ? o.insertBefore(e.dom, l.nextSibling)
              : o.appendChild(e.dom)
          } else
            o.firstChild
              ? o.insertBefore(e.dom, o.firstChild)
              : o.appendChild(e.dom)
        e.__painter = this
      } else R('Layer of zlevel ' + t + ' is not valid')
    }),
    (t.prototype.eachLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i]
        t.call(e, this._layers[r], r)
      }
    }),
    (t.prototype.eachBuiltinLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i],
          o = this._layers[r]
        o.__builtin__ && t.call(e, o, r)
      }
    }),
    (t.prototype.eachOtherLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i],
          o = this._layers[r]
        o.__builtin__ || t.call(e, o, r)
      }
    }),
    (t.prototype.getLayers = function () {
      return this._layers
    }),
    (t.prototype._updateLayerStatus = function (t) {
      function e(t) {
        o && (o.__endIndex !== t && (o.__dirty = !0), (o.__endIndex = t))
      }
      if (
        (this.eachBuiltinLayer(function (t, e) {
          t.__dirty = t.__used = !1
        }),
        this._singleCanvas)
      )
        for (var n = 1; n < t.length; n++) {
          if ((s = t[n]).zlevel !== t[n - 1].zlevel || s.incremental) {
            this._needsManuallyCompositing = !0
            break
          }
        }
      var i,
        r,
        o = null,
        a = 0
      for (r = 0; r < t.length; r++) {
        var s,
          l = (s = t[r]).zlevel,
          u = void 0
        i !== l && ((i = l), (a = 0)),
          s.incremental
            ? (((u = this.getLayer(
                l + 0.001,
                this._needsManuallyCompositing
              )).incremental = !0),
              (a = 1))
            : (u = this.getLayer(
                l + (a > 0 ? 0.01 : 0),
                this._needsManuallyCompositing
              )),
          u.__builtin__ ||
            R('ZLevel ' + l + ' has been used by unkown layer ' + u.id),
          u !== o &&
            ((u.__used = !0),
            u.__startIndex !== r && (u.__dirty = !0),
            (u.__startIndex = r),
            u.incremental ? (u.__drawIndex = -1) : (u.__drawIndex = r),
            e(r),
            (o = u)),
          1 & s.__dirty &&
            !s.__inHover &&
            ((u.__dirty = !0),
            u.incremental && u.__drawIndex < 0 && (u.__drawIndex = r))
      }
      e(r),
        this.eachBuiltinLayer(function (t, e) {
          !t.__used &&
            t.getElementCount() > 0 &&
            ((t.__dirty = !0),
            (t.__startIndex = t.__endIndex = t.__drawIndex = 0)),
            t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
        })
    }),
    (t.prototype.clear = function () {
      return this.eachBuiltinLayer(this._clearLayer), this
    }),
    (t.prototype._clearLayer = function (t) {
      t.clear()
    }),
    (t.prototype.setBackgroundColor = function (t) {
      ;(this._backgroundColor = t),
        U(this._layers, function (t) {
          t.setUnpainted()
        })
    }),
    (t.prototype.configLayer = function (t, e) {
      if (e) {
        var n = this._layerConfig
        n[t] ? z(n[t], e, !0) : (n[t] = e)
        for (var i = 0; i < this._zlevelList.length; i++) {
          var r = this._zlevelList[i]
          if (r === t || r === t + 0.01) z(this._layers[r], n[t], !0)
        }
      }
    }),
    (t.prototype.delLayer = function (t) {
      var e = this._layers,
        n = this._zlevelList,
        i = e[t]
      i &&
        (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(V(n, t), 1))
    }),
    (t.prototype.resize = function (t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot
        n.style.display = 'none'
        var i = this._opts
        if (
          (null != t && (i.width = t),
          null != e && (i.height = e),
          (t = this._getSize(0)),
          (e = this._getSize(1)),
          (n.style.display = ''),
          this._width !== t || e !== this._height)
        ) {
          for (var r in ((n.style.width = t + 'px'),
          (n.style.height = e + 'px'),
          this._layers))
            this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e)
          this.refresh(!0)
        }
        ;(this._width = t), (this._height = e)
      } else {
        if (null == t || null == e) return
        ;(this._width = t),
          (this._height = e),
          this.getLayer(314159).resize(t, e)
      }
      return this
    }),
    (t.prototype.clearLayer = function (t) {
      var e = this._layers[t]
      e && e.clear()
    }),
    (t.prototype.dispose = function () {
      ;(this.root.innerHTML = ''),
        (this.root = this.storage = this._domRoot = this._layers = null)
    }),
    (t.prototype.getRenderedCanvas = function (t) {
      if (((t = t || {}), this._singleCanvas && !this._compositeManually))
        return this._layers[314159].dom
      var e = new Aw('image', this, t.pixelRatio || this.dpr)
      e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor)
      var n = e.ctx
      if (t.pixelRatio <= this.dpr) {
        this.refresh()
        var i = e.dom.width,
          r = e.dom.height
        this.eachLayer(function (t) {
          t.__builtin__
            ? n.drawImage(t.dom, 0, 0, i, r)
            : t.renderToCanvas && (n.save(), t.renderToCanvas(n), n.restore())
        })
      } else
        for (
          var o = {
              inHover: !1,
              viewWidth: this._width,
              viewHeight: this._height,
            },
            a = this.storage.getDisplayList(!0),
            s = 0,
            l = a.length;
          s < l;
          s++
        ) {
          var u = a[s]
          Pg(n, u, o, s === l - 1)
        }
      return e.dom
    }),
    (t.prototype.getWidth = function () {
      return this._width
    }),
    (t.prototype.getHeight = function () {
      return this._height
    }),
    (t.prototype._getSize = function (t) {
      var e = this._opts,
        n = ['width', 'height'][t],
        i = ['clientWidth', 'clientHeight'][t],
        r = ['paddingLeft', 'paddingTop'][t],
        o = ['paddingRight', 'paddingBottom'][t]
      if (null != e[n] && 'auto' !== e[n]) return parseFloat(e[n])
      var a = this.root,
        s = document.defaultView.getComputedStyle(a)
      return (
        ((a[i] || Pw(s[n]) || Pw(a.style[n])) -
          (Pw(s[r]) || 0) -
          (Pw(s[o]) || 0)) |
        0
      )
    }),
    (t.prototype.pathToImage = function (t, e) {
      e = e || this.dpr
      var n = document.createElement('canvas'),
        i = n.getContext('2d'),
        r = t.getBoundingRect(),
        o = t.style,
        a = o.shadowBlur * e,
        s = o.shadowOffsetX * e,
        l = o.shadowOffsetY * e,
        u = t.hasStroke() ? o.lineWidth : 0,
        h = Math.max(u / 2, -s + a),
        c = Math.max(u / 2, s + a),
        p = Math.max(u / 2, -l + a),
        f = Math.max(u / 2, l + a),
        d = r.width + h + c,
        g = r.height + p + f
      ;(n.width = d * e),
        (n.height = g * e),
        i.scale(e, e),
        i.clearRect(0, 0, d, g),
        (i.dpr = e)
      var y = {
        x: t.x,
        y: t.y,
        scaleX: t.scaleX,
        scaleY: t.scaleY,
        rotation: t.rotation,
        originX: t.originX,
        originY: t.originY,
      }
      ;(t.x = h - r.x),
        (t.y = p - r.y),
        (t.rotation = 0),
        (t.scaleX = 1),
        (t.scaleY = 1),
        t.updateTransform(),
        t &&
          Pg(
            i,
            t,
            { inHover: !1, viewWidth: this._width, viewHeight: this._height },
            !0
          )
      var v = new Ha({ style: { x: 0, y: 0, image: n } })
      return N(t, y), v
    }),
    t
  )
})()
function Lw(t) {
  t.registerPainter('canvas', Ow)
}
const Rw = l((t) => ({ equipment: t.equipment }))(function (t) {
  var e = t,
    { type: n, id: i, option: r, equipment: o } = e
  s(e, ['type', 'id', 'option', 'equipment'])
  const a = u.exports.useRef(null),
    l = u.exports.useCallback(
      () =>
        new Promise((t, e) => {
          try {
            p(
              () => import('./charts.397f3362.js'),
              [
                'assets/charts.397f3362.js',
                'assets/vendor.41cc9ac2.js',
                'assets/dom.a861e6c5.js',
                'assets/index.ea17f1ce.js',
                'assets/index.90f06b57.css',
              ]
            ).then((e) => {
              const i = `${n.charAt(0).toLocaleUpperCase()}${n.slice(1)}Chart`
              t(e[i])
            })
          } catch (i) {
            console.error('没有找到对应的 echarts 组件')
          }
        }),
      [n]
    )
  return (
    u.exports.useEffect(() => {
      let t
      const e = setTimeout(async () => {
        if (!a.current) {
          jm([await l(), Lx, rw, kw, sw, Lw]),
            (t = document.querySelector(`#${i}`)),
            (a.current = yv(t))
        }
        a.current && a.current.setOption(r)
      }, 0)
      return () => {
        clearTimeout(e), (t = null)
      }
    }, [i, l, r]),
    u.exports.useEffect(() => {
      const { h: t } = o.size
      a.current && a.current.resize({ width: 'auto', height: t / 3 })
    }, [o]),
    h.createElement(h.Fragment, null)
  )
})
let Bw = 0
const zw = function (t) {
  var l = t,
    { type: p, children: d, status: g = 'menu', option: y } = l,
    v = s(l, ['type', 'children', 'status', 'option'])
  const m = u.exports.useRef('id' + Bw++)
  return h.createElement(
    'div',
    ((_ = ((t, e) => {
      for (var n in e || (e = {})) r.call(e, n) && a(t, n, e[n])
      if (i) for (var n of i(e)) o.call(e, n) && a(t, n, e[n])
      return t
    })({ id: m.current }, v)),
    (x = { className: c(f, v.className) }),
    e(_, n(x))),
    h.createElement(Rw, { type: p, id: m.current, option: y }),
    d
  )
  var _, x
}
var Ew = h.memo(zw),
  Nw = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: 'Module',
    ChartWarp: zw,
    default: Ew,
  })
export {
  Dc as $,
  Wc as A,
  Ec as B,
  Ew as C,
  Xp as D,
  Dv as E,
  Sr as F,
  J as G,
  $ as H,
  Fc as I,
  Rv as J,
  hr as K,
  sp as L,
  Ch as M,
  ii as N,
  ds as O,
  fa as P,
  ut as Q,
  $l as R,
  zc as S,
  fs as T,
  zt as U,
  Lc as V,
  Nt as W,
  z as X,
  W as Y,
  Um as Z,
  g as _,
  N as a,
  Qe as a$,
  c_ as a0,
  R_ as a1,
  wl as a2,
  Gl as a3,
  ql as a4,
  Fu as a5,
  rd as a6,
  o_ as a7,
  Vi as a8,
  zm as a9,
  co as aA,
  As as aB,
  zg as aC,
  nh as aD,
  ih as aE,
  ss as aF,
  $u as aG,
  Xs as aH,
  Qs as aI,
  Jd as aJ,
  vd as aK,
  j as aL,
  Nm as aM,
  Wn as aN,
  Vn as aO,
  Gu as aP,
  Er as aQ,
  Gi as aR,
  qa as aS,
  Uu as aT,
  Wu as aU,
  ju as aV,
  Yu as aW,
  f_ as aX,
  wt as aY,
  ft as aZ,
  Ze as a_,
  Em as aa,
  Bm as ab,
  Wi as ac,
  Qv as ad,
  pi as ae,
  Ft as af,
  Fn as ag,
  En as ah,
  Un as ai,
  ni as aj,
  Ct as ak,
  ky as al,
  E as am,
  lt as an,
  bc as ao,
  lr as ap,
  Y as aq,
  wv as ar,
  oe as as,
  re as at,
  Ut as au,
  _r as av,
  Ri as aw,
  Ih as ax,
  Su as ay,
  hu as az,
  tt as b,
  gc as b$,
  Hi as b0,
  Ke as b1,
  $e as b2,
  Ye as b3,
  bt as b4,
  nf as b5,
  cg as b6,
  Ls as b7,
  Rs as b8,
  Du as b9,
  bi as bA,
  Iu as bB,
  ph as bC,
  yd as bD,
  lm as bE,
  sm as bF,
  wi as bG,
  y as bH,
  ht as bI,
  Hc as bJ,
  Xi as bK,
  $d as bL,
  xu as bM,
  jm as bN,
  Q_ as bO,
  q as bP,
  Qu as bQ,
  Wf as bR,
  Bf as bS,
  gs as bT,
  Vo as bU,
  ps as bV,
  V as bW,
  $c as bX,
  Sc as bY,
  wc as bZ,
  Gn as b_,
  Tu as ba,
  fg as bb,
  Ha as bc,
  Cu as bd,
  pg as be,
  eu as bf,
  au as bg,
  Rt as bh,
  La as bi,
  Pt as bj,
  nd as bk,
  Bv as bl,
  To as bm,
  bo as bn,
  Hl as bo,
  dc as bp,
  Zs as bq,
  mr as br,
  dd as bs,
  Is as bt,
  as as bu,
  kr as bv,
  ch as bw,
  pu as bx,
  od as by,
  Dh as bz,
  mt as c,
  $s as c0,
  Ks as c1,
  Ys as c2,
  pt as c3,
  ji as c4,
  kt as c5,
  Ot as c6,
  It as c7,
  At as c8,
  Mt as c9,
  Bu as cA,
  Nw as cB,
  Po as ca,
  Io as cb,
  Et as cc,
  Xf as cd,
  rh as ce,
  fh as cf,
  er as cg,
  st as ch,
  Cr as ci,
  tr as cj,
  Bc as ck,
  ar as cl,
  Vu as cm,
  Xn as cn,
  Do as co,
  da as cp,
  ya as cq,
  _t as cr,
  H as cs,
  nr as ct,
  qe as cu,
  hn as cv,
  oh as cw,
  nm as cx,
  hh as cy,
  zu as cz,
  Np as d,
  U as e,
  G as f,
  If as g,
  cr as h,
  Av as i,
  gr as j,
  Q as k,
  K as l,
  X as m,
  Z as n,
  ct as o,
  B as p,
  it as q,
  Rc as r,
  ls as s,
  Hp as t,
  Lv as u,
  Ov as v,
  Pv as w,
  Sf as x,
  sr as y,
  F as z,
}
