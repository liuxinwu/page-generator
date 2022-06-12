import {
  c as e,
  e as t,
  V as n,
  m as i,
  a,
  i as o,
  b as r,
  d as s,
  f as l,
  D as u,
  g as d,
  S as c,
  h,
  j as p,
  k as g,
  l as f,
  n as y,
  M as m,
  s as v,
  o as x,
  p as _,
  q as S,
  r as b,
  t as w,
  u as I,
  v as M,
  w as D,
  x as A,
  y as L,
  z as C,
  A as T,
  B as N,
  E as P,
  F as E,
  G as R,
  H as O,
  I as V,
  J as z,
  K as k,
  L as G,
  P as B,
  N as W,
  O as F,
  Q as Y,
  R as X,
  T as H,
  U,
  W as Z,
  _ as j,
  X as q,
  Y as J,
  Z as K,
  $ as Q,
  a0 as $,
  a1 as ee,
  a2 as te,
  a3 as ne,
  a4 as ie,
  a5 as ae,
  a6 as oe,
  a7 as re,
  a8 as se,
  a9 as le,
  aa as ue,
  ab as de,
  ac as ce,
  ad as he,
  ae as pe,
  af as ge,
  ag as fe,
  ah as ye,
  ai as me,
  aj as ve,
  ak as xe,
  al as _e,
  am as Se,
  an as be,
  ao as we,
  ap as Ie,
  aq as Me,
  ar as De,
  as as Ae,
  at as Le,
  au as Ce,
  av as Te,
  aw as Ne,
  ax as Pe,
  ay as Ee,
  az as Re,
  aA as Oe,
  aB as Ve,
  aC as ze,
  aD as ke,
  aE as Ge,
  aF as Be,
  aG as We,
  aH as Fe,
  aI as Ye,
  aJ as Xe,
  aK as He,
  aL as Ue,
  aM as Ze,
  aN as je,
  aO as qe,
  aP as Je,
  aQ as Ke,
  aR as Qe,
  aS as $e,
  aT as et,
  aU as tt,
  aV as nt,
  aW as it,
  aX as at,
  aY as ot,
  aZ as rt,
  a_ as st,
  a$ as lt,
  b0 as ut,
  b1 as dt,
  b2 as ct,
  b3 as ht,
  b4 as pt,
  b5 as gt,
  b6 as ft,
  b7 as yt,
  b8 as mt,
  b9 as vt,
  ba as xt,
  bb as _t,
  bc as St,
  bd as bt,
  be as wt,
  bf as It,
  bg as Mt,
  bh as Dt,
  bi as At,
  bj as Lt,
  bk as Ct,
  bl as Tt,
  bm as Nt,
  bn as Pt,
  bo as Et,
  bp as Rt,
  bq as Ot,
  br as Vt,
  bs as zt,
  bt as kt,
  bu as Gt,
  bv as Bt,
  bw as Wt,
  bx as Ft,
  by as Yt,
  bz as Xt,
  bA as Ht,
  bB as Ut,
  bC as Zt,
  bD as jt,
  bE as qt,
  bF as Jt,
  bG as Kt,
  bH as Qt,
  bI as $t,
  bJ as en,
  bK as tn,
  bL as nn,
  bM as an,
  bN as on,
  bO as rn,
  bP as sn,
  bQ as ln,
  bR as un,
  bS as dn,
  bT as cn,
  bU as hn,
  bV as pn,
  bW as gn,
  bX as fn,
  bY as yn,
  bZ as mn,
  b_ as vn,
  b$ as xn,
  c0 as _n,
  c1 as Sn,
  c2 as bn,
  c3 as wn,
  c4 as In,
  c5 as Mn,
  c6 as Dn,
  c7 as An,
  c8 as Ln,
  c9 as Cn,
  ca as Tn,
  cb as Nn,
  cc as Pn,
  cd as En,
  ce as Rn,
  cf as On,
  cg as Vn,
  ch as zn,
  ci as kn,
  cj as Gn,
  ck as Bn,
  cl as Wn,
  cm as Fn,
  cn as Yn,
  co as Xn,
  cp as Hn,
  cq as Un,
  cr as Zn,
  cs as jn,
  ct as qn,
  cu as Jn,
  cv as Kn,
  cw as Qn,
  cx as $n,
  cy as ei,
  cz as ti,
  cA as ni,
} from './index.7aa615cc.js'
import './vendor.41cc9ac2.js'
import './dom.a861e6c5.js'
import './index.ea17f1ce.js'
function ii(e) {
  return null == e ? 0 : e.length || 1
}
function ai(e) {
  return e
}
var oi = (function () {
    function e(e, t, n, i, a, o) {
      ;(this._old = e),
        (this._new = t),
        (this._oldKeyGetter = n || ai),
        (this._newKeyGetter = i || ai),
        (this.context = a),
        (this._diffModeMultiple = 'multiple' === o)
    }
    return (
      (e.prototype.add = function (e) {
        return (this._add = e), this
      }),
      (e.prototype.update = function (e) {
        return (this._update = e), this
      }),
      (e.prototype.updateManyToOne = function (e) {
        return (this._updateManyToOne = e), this
      }),
      (e.prototype.updateOneToMany = function (e) {
        return (this._updateOneToMany = e), this
      }),
      (e.prototype.updateManyToMany = function (e) {
        return (this._updateManyToMany = e), this
      }),
      (e.prototype.remove = function (e) {
        return (this._remove = e), this
      }),
      (e.prototype.execute = function () {
        this[this._diffModeMultiple ? '_executeMultiple' : '_executeOneToOne']()
      }),
      (e.prototype._executeOneToOne = function () {
        var e = this._old,
          t = this._new,
          n = {},
          i = new Array(e.length),
          a = new Array(t.length)
        this._initIndexMap(e, null, i, '_oldKeyGetter'),
          this._initIndexMap(t, n, a, '_newKeyGetter')
        for (var o = 0; o < e.length; o++) {
          var r = i[o],
            s = n[r],
            l = ii(s)
          if (l > 1) {
            var u = s.shift()
            1 === s.length && (n[r] = s[0]), this._update && this._update(u, o)
          } else
            1 === l
              ? ((n[r] = null), this._update && this._update(s, o))
              : this._remove && this._remove(o)
        }
        this._performRestAdd(a, n)
      }),
      (e.prototype._executeMultiple = function () {
        var e = this._old,
          t = this._new,
          n = {},
          i = {},
          a = [],
          o = []
        this._initIndexMap(e, n, a, '_oldKeyGetter'),
          this._initIndexMap(t, i, o, '_newKeyGetter')
        for (var r = 0; r < a.length; r++) {
          var s = a[r],
            l = n[s],
            u = i[s],
            d = ii(l),
            c = ii(u)
          if (d > 1 && 1 === c)
            this._updateManyToOne && this._updateManyToOne(u, l), (i[s] = null)
          else if (1 === d && c > 1)
            this._updateOneToMany && this._updateOneToMany(u, l), (i[s] = null)
          else if (1 === d && 1 === c)
            this._update && this._update(u, l), (i[s] = null)
          else if (d > 1 && c > 1)
            this._updateManyToMany && this._updateManyToMany(u, l),
              (i[s] = null)
          else if (d > 1)
            for (var h = 0; h < d; h++) this._remove && this._remove(l[h])
          else this._remove && this._remove(l)
        }
        this._performRestAdd(o, i)
      }),
      (e.prototype._performRestAdd = function (e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n],
            a = t[i],
            o = ii(a)
          if (o > 1) for (var r = 0; r < o; r++) this._add && this._add(a[r])
          else 1 === o && this._add && this._add(a)
          t[i] = null
        }
      }),
      (e.prototype._initIndexMap = function (e, t, n, i) {
        for (var a = this._diffModeMultiple, o = 0; o < e.length; o++) {
          var r = '_ec_' + this[i](e[o], o)
          if ((a || (n[o] = r), t)) {
            var s = t[r],
              l = ii(s)
            0 === l
              ? ((t[r] = o), a && n.push(r))
              : 1 === l
              ? (t[r] = [s, o])
              : s.push(o)
          }
        }
      }),
      e
    )
  })(),
  ri = (function () {
    function e(e, t) {
      ;(this._encode = e), (this._schema = t)
    }
    return (
      (e.prototype.get = function () {
        return {
          fullDimensions: this._getFullDimensionNames(),
          encode: this._encode,
        }
      }),
      (e.prototype._getFullDimensionNames = function () {
        return (
          this._cachedDimNames ||
            (this._cachedDimNames = this._schema
              ? this._schema.makeOutputDimensionNames()
              : []),
          this._cachedDimNames
        )
      }),
      e
    )
  })()
function si(e, t) {
  return e.hasOwnProperty(t) || (e[t] = []), e[t]
}
function li(e) {
  return 'category' === e ? 'ordinal' : 'time' === e ? 'time' : 'float'
}
var ui,
  di,
  ci,
  hi,
  pi,
  gi,
  fi,
  yi = function (e) {
    ;(this.otherDims = {}), null != e && a(this, e)
  },
  mi = S,
  vi = i,
  xi = 'undefined' == typeof Int32Array ? Array : Int32Array,
  _i = [
    'hasItemOption',
    '_nameList',
    '_idList',
    '_invertedIndicesMap',
    '_dimSummary',
    'userOutput',
    '_rawData',
    '_dimValueGetter',
    '_nameDimIdx',
    '_idDimIdx',
    '_nameRepeatCount',
  ],
  Si = ['_approximateExtent'],
  bi = (function () {
    function S(n, i) {
      var a
      ;(this.type = 'list'),
        (this._dimOmitted = !1),
        (this._nameList = []),
        (this._idList = []),
        (this._visual = {}),
        (this._layout = {}),
        (this._itemVisuals = []),
        (this._itemLayouts = []),
        (this._graphicEls = []),
        (this._approximateExtent = {}),
        (this._calculationInfo = {}),
        (this.hasItemOption = !1),
        (this.TRANSFERABLE_METHODS = [
          'cloneShallow',
          'downSample',
          'lttbDownSample',
          'map',
        ]),
        (this.CHANGABLE_METHODS = ['filterSelf', 'selectRange']),
        (this.DOWNSAMPLE_METHODS = ['downSample', 'lttbDownSample'])
      var s = !1
      o(n)
        ? ((a = n.dimensions),
          (this._dimOmitted = n.isDimensionOmitted()),
          (this._schema = n))
        : ((s = !0), (a = n)),
        (a = a || ['x', 'y'])
      for (
        var l = {}, u = [], d = {}, c = !1, h = {}, p = 0;
        p < a.length;
        p++
      ) {
        var g = a[p],
          f = r(g) ? new yi({ name: g }) : g instanceof yi ? g : new yi(g),
          y = f.name
        ;(f.type = f.type || 'float'),
          f.coordDim || ((f.coordDim = y), (f.coordDimIndex = 0))
        var m = (f.otherDims = f.otherDims || {})
        u.push(y),
          (l[y] = f),
          null != h[y] && (c = !0),
          f.createInvertedIndices && (d[y] = []),
          0 === m.itemName && (this._nameDimIdx = p),
          0 === m.itemId && (this._idDimIdx = p),
          s && (f.storeDimIndex = p)
      }
      if (
        ((this.dimensions = u),
        (this._dimInfos = l),
        this._initGetDimensionInfo(c),
        (this.hostModel = i),
        (this._invertedIndicesMap = d),
        this._dimOmitted)
      ) {
        var v = (this._dimIdxToName = e())
        t(u, function (e) {
          v.set(l[e].storeDimIndex, e)
        })
      }
    }
    return (
      (S.prototype.getDimension = function (e) {
        var t = this._recognizeDimIndex(e)
        if (null == t) return e
        if (((t = e), !this._dimOmitted)) return this.dimensions[t]
        var n = this._dimIdxToName.get(t)
        if (null != n) return n
        var i = this._schema.getSourceDimension(t)
        return i ? i.name : void 0
      }),
      (S.prototype.getDimensionIndex = function (e) {
        var t = this._recognizeDimIndex(e)
        if (null != t) return t
        if (null == e) return -1
        var n = this._getDimInfo(e)
        return n
          ? n.storeDimIndex
          : this._dimOmitted
          ? this._schema.getSourceDimensionIndex(e)
          : -1
      }),
      (S.prototype._recognizeDimIndex = function (e) {
        if (
          'number' == typeof e ||
          (null != e &&
            !isNaN(e) &&
            !this._getDimInfo(e) &&
            (!this._dimOmitted || this._schema.getSourceDimensionIndex(e) < 0))
        )
          return +e
      }),
      (S.prototype._getStoreDimIndex = function (e) {
        return this.getDimensionIndex(e)
      }),
      (S.prototype.getDimensionInfo = function (e) {
        return this._getDimInfo(this.getDimension(e))
      }),
      (S.prototype._initGetDimensionInfo = function (e) {
        var t = this._dimInfos
        this._getDimInfo = e
          ? function (e) {
              return t.hasOwnProperty(e) ? t[e] : void 0
            }
          : function (e) {
              return t[e]
            }
      }),
      (S.prototype.getDimensionsOnCoord = function () {
        return this._dimSummary.dataDimsOnCoord.slice()
      }),
      (S.prototype.mapDimension = function (e, t) {
        var n = this._dimSummary
        if (null == t) return n.encodeFirstDimNotExtra[e]
        var i = n.encode[e]
        return i ? i[t] : null
      }),
      (S.prototype.mapDimensionsAll = function (e) {
        return (this._dimSummary.encode[e] || []).slice()
      }),
      (S.prototype.getStore = function () {
        return this._store
      }),
      (S.prototype.initData = function (a, o, r) {
        var c,
          h = this
        if ((a instanceof d && (c = a), !c)) {
          var p = this.dimensions,
            g = s(a) || l(a) ? new u(a, p.length) : a
          c = new d()
          var f = vi(p, function (e) {
            return { type: h._dimInfos[e].type, property: e }
          })
          c.initData(g, f, r)
        }
        ;(this._store = c),
          (this._nameList = (o || []).slice()),
          (this._idList = []),
          (this._nameRepeatCount = {}),
          this._doInit(0, c.count()),
          (this._dimSummary = (function (a, o) {
            var r = {},
              s = (r.encode = {}),
              l = e(),
              u = [],
              d = [],
              c = {}
            t(a.dimensions, function (e) {
              var t,
                i = a.getDimensionInfo(e),
                o = i.coordDim
              if (o) {
                var r = i.coordDimIndex
                ;(si(s, o)[r] = e),
                  i.isExtraCoord ||
                    (l.set(o, 1),
                    'ordinal' !== (t = i.type) && 'time' !== t && (u[0] = e),
                    (si(c, o)[r] = a.getDimensionIndex(i.name))),
                  i.defaultTooltip && d.push(e)
              }
              n.each(function (e, t) {
                var n = si(s, t),
                  a = i.otherDims[t]
                null != a && !1 !== a && (n[a] = i.name)
              })
            })
            var h = [],
              p = {}
            l.each(function (e, t) {
              var n = s[t]
              ;(p[t] = n[0]), (h = h.concat(n))
            }),
              (r.dataDimsOnCoord = h),
              (r.dataDimIndicesOnCoord = i(h, function (e) {
                return a.getDimensionInfo(e).storeDimIndex
              })),
              (r.encodeFirstDimNotExtra = p)
            var g = s.label
            g && g.length && (u = g.slice())
            var f = s.tooltip
            return (
              f && f.length ? (d = f.slice()) : d.length || (d = u.slice()),
              (s.defaultedLabel = u),
              (s.defaultedTooltip = d),
              (r.userOutput = new ri(c, o)),
              r
            )
          })(this, this._schema)),
          (this.userOutput = this._dimSummary.userOutput)
      }),
      (S.prototype.appendData = function (e) {
        var t = this._store.appendData(e)
        this._doInit(t[0], t[1])
      }),
      (S.prototype.appendValues = function (e, t) {
        var n = this._store.appendValues(e, t.length),
          i = n.start,
          a = n.end,
          o = this._shouldMakeIdFromName()
        if ((this._updateOrdinalMeta(), t))
          for (var r = i; r < a; r++) {
            var s = r - i
            ;(this._nameList[r] = t[s]), o && fi(this, r)
          }
      }),
      (S.prototype._updateOrdinalMeta = function () {
        for (
          var e = this._store, t = this.dimensions, n = 0;
          n < t.length;
          n++
        ) {
          var i = this._dimInfos[t[n]]
          i.ordinalMeta && e.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta)
        }
      }),
      (S.prototype._shouldMakeIdFromName = function () {
        var e = this._store.getProvider()
        return (
          null == this._idDimIdx &&
          e.getSource().sourceFormat !== c &&
          !e.fillStorage
        )
      }),
      (S.prototype._doInit = function (e, t) {
        if (!(e >= t)) {
          var n = this._store.getProvider()
          this._updateOrdinalMeta()
          var i = this._nameList,
            a = this._idList
          if (n.getSource().sourceFormat === b && !n.pure)
            for (var o = [], r = e; r < t; r++) {
              var s = n.getItem(r, o)
              if (
                (!this.hasItemOption && h(s) && (this.hasItemOption = !0), s)
              ) {
                var l = s.name
                null == i[r] && null != l && (i[r] = p(l, null))
                var u = s.id
                null == a[r] && null != u && (a[r] = p(u, null))
              }
            }
          if (this._shouldMakeIdFromName()) for (r = e; r < t; r++) fi(this, r)
          ui(this)
        }
      }),
      (S.prototype.getApproximateExtent = function (e) {
        return (
          this._approximateExtent[e] ||
          this._store.getDataExtent(this._getStoreDimIndex(e))
        )
      }),
      (S.prototype.setApproximateExtent = function (e, t) {
        ;(t = this.getDimension(t)), (this._approximateExtent[t] = e.slice())
      }),
      (S.prototype.getCalculationInfo = function (e) {
        return this._calculationInfo[e]
      }),
      (S.prototype.setCalculationInfo = function (e, t) {
        mi(e) ? a(this._calculationInfo, e) : (this._calculationInfo[e] = t)
      }),
      (S.prototype.getName = function (e) {
        var t = this.getRawIndex(e),
          n = this._nameList[t]
        return (
          null == n &&
            null != this._nameDimIdx &&
            (n = ci(this, this._nameDimIdx, t)),
          null == n && (n = ''),
          n
        )
      }),
      (S.prototype._getCategory = function (e, t) {
        var n = this._store.get(e, t),
          i = this._store.getOrdinalMeta(e)
        return i ? i.categories[n] : n
      }),
      (S.prototype.getId = function (e) {
        return di(this, this.getRawIndex(e))
      }),
      (S.prototype.count = function () {
        return this._store.count()
      }),
      (S.prototype.get = function (e, t) {
        var n = this._store,
          i = this._dimInfos[e]
        if (i) return n.get(i.storeDimIndex, t)
      }),
      (S.prototype.getByRawIndex = function (e, t) {
        var n = this._store,
          i = this._dimInfos[e]
        if (i) return n.getByRawIndex(i.storeDimIndex, t)
      }),
      (S.prototype.getIndices = function () {
        return this._store.getIndices()
      }),
      (S.prototype.getDataExtent = function (e) {
        return this._store.getDataExtent(this._getStoreDimIndex(e))
      }),
      (S.prototype.getSum = function (e) {
        return this._store.getSum(this._getStoreDimIndex(e))
      }),
      (S.prototype.getMedian = function (e) {
        return this._store.getMedian(this._getStoreDimIndex(e))
      }),
      (S.prototype.getValues = function (e, t) {
        var n = this,
          i = this._store
        return g(e)
          ? i.getValues(
              vi(e, function (e) {
                return n._getStoreDimIndex(e)
              }),
              t
            )
          : i.getValues(e)
      }),
      (S.prototype.hasValue = function (e) {
        for (
          var t = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = t.length;
          n < i;
          n++
        )
          if (isNaN(this._store.get(t[n], e))) return !1
        return !0
      }),
      (S.prototype.indexOfName = function (e) {
        for (var t = 0, n = this._store.count(); t < n; t++)
          if (this.getName(t) === e) return t
        return -1
      }),
      (S.prototype.getRawIndex = function (e) {
        return this._store.getRawIndex(e)
      }),
      (S.prototype.indexOfRawIndex = function (e) {
        return this._store.indexOfRawIndex(e)
      }),
      (S.prototype.rawIndexOf = function (e, t) {
        var n = (e && this._invertedIndicesMap[e])[t]
        return null == n || isNaN(n) ? -1 : n
      }),
      (S.prototype.indicesOfNearest = function (e, t, n) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(e), t, n)
      }),
      (S.prototype.each = function (e, t, n) {
        'function' == typeof e && ((n = t), (t = e), (e = []))
        var i = n || this,
          a = vi(hi(e), this._getStoreDimIndex, this)
        this._store.each(a, i ? f(t, i) : t)
      }),
      (S.prototype.filterSelf = function (e, t, n) {
        'function' == typeof e && ((n = t), (t = e), (e = []))
        var i = n || this,
          a = vi(hi(e), this._getStoreDimIndex, this)
        return (this._store = this._store.filter(a, i ? f(t, i) : t)), this
      }),
      (S.prototype.selectRange = function (e) {
        var n = this,
          i = {},
          a = y(e)
        return (
          t(a, function (t) {
            var a = n._getStoreDimIndex(t)
            i[a] = e[t]
          }),
          (this._store = this._store.selectRange(i)),
          this
        )
      }),
      (S.prototype.mapArray = function (e, t, n) {
        'function' == typeof e && ((n = t), (t = e), (e = [])), (n = n || this)
        var i = []
        return (
          this.each(
            e,
            function () {
              i.push(t && t.apply(this, arguments))
            },
            n
          ),
          i
        )
      }),
      (S.prototype.map = function (e, t, n, i) {
        var a = n || i || this,
          o = vi(hi(e), this._getStoreDimIndex, this),
          r = gi(this)
        return (r._store = this._store.map(o, a ? f(t, a) : t)), r
      }),
      (S.prototype.modify = function (e, t, n, i) {
        var a = n || i || this,
          o = vi(hi(e), this._getStoreDimIndex, this)
        this._store.modify(o, a ? f(t, a) : t)
      }),
      (S.prototype.downSample = function (e, t, n, i) {
        var a = gi(this)
        return (
          (a._store = this._store.downSample(
            this._getStoreDimIndex(e),
            t,
            n,
            i
          )),
          a
        )
      }),
      (S.prototype.lttbDownSample = function (e, t) {
        var n = gi(this)
        return (
          (n._store = this._store.lttbDownSample(this._getStoreDimIndex(e), t)),
          n
        )
      }),
      (S.prototype.getRawDataItem = function (e) {
        return this._store.getRawDataItem(e)
      }),
      (S.prototype.getItemModel = function (e) {
        var t = this.hostModel,
          n = this.getRawDataItem(e)
        return new m(n, t, t && t.ecModel)
      }),
      (S.prototype.diff = function (e) {
        var t = this
        return new oi(
          e ? e.getStore().getIndices() : [],
          this.getStore().getIndices(),
          function (t) {
            return di(e, t)
          },
          function (e) {
            return di(t, e)
          }
        )
      }),
      (S.prototype.getVisual = function (e) {
        var t = this._visual
        return t && t[e]
      }),
      (S.prototype.setVisual = function (e, t) {
        ;(this._visual = this._visual || {}),
          mi(e) ? a(this._visual, e) : (this._visual[e] = t)
      }),
      (S.prototype.getItemVisual = function (e, t) {
        var n = this._itemVisuals[e],
          i = n && n[t]
        return null == i ? this.getVisual(t) : i
      }),
      (S.prototype.hasItemVisual = function () {
        return this._itemVisuals.length > 0
      }),
      (S.prototype.ensureUniqueItemVisual = function (e, t) {
        var n = this._itemVisuals,
          i = n[e]
        i || (i = n[e] = {})
        var o = i[t]
        return (
          null == o &&
            ((o = this.getVisual(t)),
            g(o) ? (o = o.slice()) : mi(o) && (o = a({}, o)),
            (i[t] = o)),
          o
        )
      }),
      (S.prototype.setItemVisual = function (e, t, n) {
        var i = this._itemVisuals[e] || {}
        ;(this._itemVisuals[e] = i), mi(t) ? a(i, t) : (i[t] = n)
      }),
      (S.prototype.clearAllVisual = function () {
        ;(this._visual = {}), (this._itemVisuals = [])
      }),
      (S.prototype.setLayout = function (e, t) {
        if (mi(e))
          for (var n in e) e.hasOwnProperty(n) && this.setLayout(n, e[n])
        else this._layout[e] = t
      }),
      (S.prototype.getLayout = function (e) {
        return this._layout[e]
      }),
      (S.prototype.getItemLayout = function (e) {
        return this._itemLayouts[e]
      }),
      (S.prototype.setItemLayout = function (e, t, n) {
        this._itemLayouts[e] = n ? a(this._itemLayouts[e] || {}, t) : t
      }),
      (S.prototype.clearItemLayouts = function () {
        this._itemLayouts.length = 0
      }),
      (S.prototype.setItemGraphicEl = function (e, t) {
        var n = this.hostModel && this.hostModel.seriesIndex
        v(n, this.dataType, e, t), (this._graphicEls[e] = t)
      }),
      (S.prototype.getItemGraphicEl = function (e) {
        return this._graphicEls[e]
      }),
      (S.prototype.eachItemGraphicEl = function (e, n) {
        t(this._graphicEls, function (t, i) {
          t && e && e.call(n, t, i)
        })
      }),
      (S.prototype.cloneShallow = function (e) {
        return (
          e ||
            (e = new S(
              this._schema
                ? this._schema
                : vi(this.dimensions, this._getDimInfo, this),
              this.hostModel
            )),
          pi(e, this),
          (e._store = this._store),
          e
        )
      }),
      (S.prototype.wrapMethod = function (e, t) {
        var n = this[e]
        'function' == typeof n &&
          ((this.__wrappedMethods = this.__wrappedMethods || []),
          this.__wrappedMethods.push(e),
          (this[e] = function () {
            var e = n.apply(this, arguments)
            return t.apply(this, [e].concat(x(arguments)))
          }))
      }),
      (S.internalField =
        ((ui = function (e) {
          var n = e._invertedIndicesMap
          t(n, function (t, i) {
            var a = e._dimInfos[i],
              o = a.ordinalMeta,
              r = e._store
            if (o) {
              t = n[i] = new xi(o.categories.length)
              for (var s = 0; s < t.length; s++) t[s] = -1
              for (s = 0; s < r.count(); s++) t[r.get(a.storeDimIndex, s)] = s
            }
          })
        }),
        (ci = function (e, t, n) {
          return p(e._getCategory(t, n), null)
        }),
        (di = function (e, t) {
          var n = e._idList[t]
          return (
            null == n && null != e._idDimIdx && (n = ci(e, e._idDimIdx, t)),
            null == n && (n = 'e\0\0' + t),
            n
          )
        }),
        (hi = function (e) {
          return g(e) || (e = null != e ? [e] : []), e
        }),
        (gi = function (e) {
          var t = new S(
            e._schema ? e._schema : vi(e.dimensions, e._getDimInfo, e),
            e.hostModel
          )
          return pi(t, e), t
        }),
        (pi = function (e, n) {
          t(_i.concat(n.__wrappedMethods || []), function (t) {
            n.hasOwnProperty(t) && (e[t] = n[t])
          }),
            (e.__wrappedMethods = n.__wrappedMethods),
            t(Si, function (t) {
              e[t] = _(n[t])
            }),
            (e._calculationInfo = a({}, n._calculationInfo))
        }),
        void (fi = function (e, t) {
          var n = e._nameList,
            i = e._idList,
            a = e._nameDimIdx,
            o = e._idDimIdx,
            r = n[t],
            s = i[t]
          if (
            (null == r && null != a && (n[t] = r = ci(e, a, t)),
            null == s && null != o && (i[t] = s = ci(e, o, t)),
            null == s && null != r)
          ) {
            var l = e._nameRepeatCount,
              u = (l[r] = (l[r] || 0) + 1)
            ;(s = r), u > 1 && (s += '__ec__' + u), (i[t] = s)
          }
        }))),
      S
    )
  })()
function wi(i, o) {
  s(i) || (i = w(i))
  var l = (o = o || {}).coordDimensions || [],
    u = o.dimensionsDefine || i.dimensionsDefine || [],
    d = e(),
    c = [],
    h = (function (e, n, i, a) {
      var o = Math.max(
        e.dimensionsDetectedCount || 1,
        n.length,
        i.length,
        a || 0
      )
      return (
        t(n, function (e) {
          var t
          S(e) && (t = e.dimsDef) && (o = Math.max(o, t.length))
        }),
        o
      )
    })(i, l, u, o.dimensionsCount),
    p = o.canOmitUnusedDimensions && I(h),
    g = u === i.dimensionsDefine,
    f = g ? M(i) : D(u),
    y = o.encodeDefine
  !y && o.encodeDefaulter && (y = o.encodeDefaulter(i, h))
  for (var m = e(y), v = new A(h), x = 0; x < v.length; x++) v[x] = -1
  function _(e) {
    var t = v[e]
    if (t < 0) {
      var n = u[e],
        i = S(n) ? n : { name: n },
        a = new yi(),
        o = i.name
      null != o && null != f.get(o) && (a.name = a.displayName = o),
        null != i.type && (a.type = i.type),
        null != i.displayName && (a.displayName = i.displayName)
      var r = c.length
      return (v[e] = r), (a.storeDimIndex = e), c.push(a), a
    }
    return c[t]
  }
  if (!p) for (x = 0; x < h; x++) _(x)
  m.each(function (e, n) {
    var i = L(e).slice()
    if (1 === i.length && !r(i[0]) && i[0] < 0) m.set(n, !1)
    else {
      var a = m.set(n, [])
      t(i, function (e, t) {
        var i = r(e) ? f.get(e) : e
        null != i && i < h && ((a[t] = i), E(_(i), n, t))
      })
    }
  })
  var b = 0
  function E(e, t, i) {
    null != n.get(t)
      ? (e.otherDims[t] = i)
      : ((e.coordDim = t), (e.coordDimIndex = i), d.set(t, !0))
  }
  t(l, function (e) {
    var n, i, o, s
    if (r(e)) (n = e), (s = {})
    else {
      n = (s = e).name
      var l = s.ordinalMeta
      ;(s.ordinalMeta = null),
        ((s = a({}, s)).ordinalMeta = l),
        (i = s.dimsDef),
        (o = s.otherDims),
        (s.name = s.coordDim = s.coordDimIndex = s.dimsDef = s.otherDims = null)
    }
    var u = m.get(n)
    if (!1 !== u) {
      if (!(u = L(u)).length)
        for (var d = 0; d < ((i && i.length) || 1); d++) {
          for (; b < h && null != _(b).coordDim; ) b++
          b < h && u.push(b++)
        }
      t(u, function (e, t) {
        var a = _(e)
        if (
          (g && null != s.type && (a.type = s.type),
          E(C(a, s), n, t),
          null == a.name && i)
        ) {
          var r = i[t]
          !S(r) && (r = { name: r }),
            (a.name = a.displayName = r.name),
            (a.defaultTooltip = r.defaultTooltip)
        }
        o && C(a.otherDims, o)
      })
    }
  })
  var R = o.generateCoord,
    O = o.generateCoordCount,
    V = null != O
  O = R ? O || 1 : 0
  var z = R || 'value'
  function k(e) {
    null == e.name && (e.name = e.coordDim)
  }
  if (p)
    t(c, function (e) {
      k(e)
    }),
      c.sort(function (e, t) {
        return e.storeDimIndex - t.storeDimIndex
      })
  else
    for (var G = 0; G < h; G++) {
      var B = _(G)
      null == B.coordDim &&
        ((B.coordDim = Ii(z, d, V)),
        (B.coordDimIndex = 0),
        (!R || O <= 0) && (B.isExtraCoord = !0),
        O--),
        k(B),
        null != B.type ||
          (T(i, G) !== N.Must &&
            (!B.isExtraCoord ||
              (null == B.otherDims.itemName &&
                null == B.otherDims.seriesName))) ||
          (B.type = 'ordinal')
    }
  return (
    (function (t) {
      for (var n = e(), i = 0; i < t.length; i++) {
        var a = t[i],
          o = a.name,
          r = n.get(o) || 0
        r > 0 && (a.name = o + (r - 1)), r++, n.set(o, r)
      }
    })(c),
    new P({
      source: i,
      dimensions: c,
      fullDimensionCount: h,
      dimensionOmitted: p,
    })
  )
}
function Ii(e, t, n) {
  var i = t.data
  if (n || i.hasOwnProperty(e)) {
    for (var a = 0; i.hasOwnProperty(e + a); ) a++
    e += a
  }
  return t.set(e, !0), e
}
var Mi = function (t) {
  ;(this.coordSysDims = []),
    (this.axisMap = e()),
    (this.categoryAxisMap = e()),
    (this.coordSysName = t)
}
var Di = {
  cartesian2d: function (e, t, n, i) {
    var a = e.getReferringComponents('xAxis', E).models[0],
      o = e.getReferringComponents('yAxis', E).models[0]
    ;(t.coordSysDims = ['x', 'y']),
      n.set('x', a),
      n.set('y', o),
      Ai(a) && (i.set('x', a), (t.firstCategoryDimIndex = 0)),
      Ai(o) &&
        (i.set('y', o),
        null == t.firstCategoryDimIndex && (t.firstCategoryDimIndex = 1))
  },
  singleAxis: function (e, t, n, i) {
    var a = e.getReferringComponents('singleAxis', E).models[0]
    ;(t.coordSysDims = ['single']),
      n.set('single', a),
      Ai(a) && (i.set('single', a), (t.firstCategoryDimIndex = 0))
  },
  polar: function (e, t, n, i) {
    var a = e.getReferringComponents('polar', E).models[0],
      o = a.findAxisModel('radiusAxis'),
      r = a.findAxisModel('angleAxis')
    ;(t.coordSysDims = ['radius', 'angle']),
      n.set('radius', o),
      n.set('angle', r),
      Ai(o) && (i.set('radius', o), (t.firstCategoryDimIndex = 0)),
      Ai(r) &&
        (i.set('angle', r),
        null == t.firstCategoryDimIndex && (t.firstCategoryDimIndex = 1))
  },
  geo: function (e, t, n, i) {
    t.coordSysDims = ['lng', 'lat']
  },
  parallel: function (e, n, i, a) {
    var o = e.ecModel,
      r = o.getComponent('parallel', e.get('parallelIndex')),
      s = (n.coordSysDims = r.dimensions.slice())
    t(r.parallelAxisIndex, function (e, t) {
      var r = o.getComponent('parallelAxis', e),
        l = s[t]
      i.set(l, r),
        Ai(r) &&
          (a.set(l, r),
          null == n.firstCategoryDimIndex && (n.firstCategoryDimIndex = t))
    })
  },
}
function Ai(e) {
  return 'category' === e.get('type')
}
function Li(e, n, a) {
  a = a || {}
  var o,
    r = n.getSourceManager(),
    s = !1
  e ? ((s = !0), (o = w(e))) : (s = (o = r.getSource()).sourceFormat === b)
  var l = (function (e) {
      var t = e.get('coordinateSystem'),
        n = new Mi(t),
        i = Di[t]
      if (i) return i(e, n, n.axisMap, n.categoryAxisMap), n
    })(n),
    u = (function (e, t) {
      var n,
        a = e.get('coordinateSystem'),
        o = G.get(a)
      return (
        t &&
          t.coordSysDims &&
          (n = i(t.coordSysDims, function (e) {
            var n = { name: e },
              i = t.axisMap.get(e)
            if (i) {
              var a = i.get('type')
              n.type = li(a)
            }
            return n
          })),
        n ||
          (n = (o &&
            (o.getDimensionsInfo
              ? o.getDimensionsInfo()
              : o.dimensions.slice())) || ['x', 'y']),
        n
      )
    })(n, l),
    d = a.useEncodeDefaulter,
    c = R(d) ? d : d ? O(V, u, n) : null,
    h = wi(o, {
      coordDimensions: u,
      generateCoord: a.generateCoord,
      encodeDefine: n.getEncode(),
      encodeDefaulter: c,
      canOmitUnusedDimensions: !s,
    }),
    p = (function (e, n, i) {
      var a, o
      return (
        i &&
          t(e, function (e, t) {
            var r = e.coordDim,
              s = i.categoryAxisMap.get(r)
            s &&
              (null == a && (a = t),
              (e.ordinalMeta = s.getOrdinalMeta()),
              n && (e.createInvertedIndices = !0)),
              null != e.otherDims.itemName && (o = !0)
          }),
        o || null == a || (e[a].otherDims.itemName = 0),
        a
      )
    })(h.dimensions, a.createInvertedIndices, l),
    f = s ? null : r.getSharedDataStore(h),
    y = z(n, { schema: h, store: f }),
    m = new bi(h, n)
  m.setCalculationInfo(y)
  var v =
    null != p &&
    (function (e) {
      if (e.sourceFormat === b) {
        var t = (function (e) {
          var t = 0
          for (; t < e.length && null == e[t]; ) t++
          return e[t]
        })(e.data || [])
        return null != t && !g(k(t))
      }
    })(o)
      ? function (e, t, n, i) {
          return i === p ? n : this.defaultDimValueGetter(e, t, n, i)
        }
      : null
  return (m.hasItemOption = !1), m.initData(s ? o : f, null, v), m
}
function Ci(e, t, n, i, a, o, r, s) {
  var l = a - e,
    u = o - t,
    d = n - e,
    c = i - t,
    h = Math.sqrt(d * d + c * c),
    p = (l * (d /= h) + u * (c /= h)) / h
  s && (p = Math.min(Math.max(p, 0), 1)), (p *= h)
  var g = (r[0] = e + p * d),
    f = (r[1] = t + p * c)
  return Math.sqrt((g - a) * (g - a) + (f - o) * (f - o))
}
B.CMD
var Ti = new W(),
  Ni = new W(),
  Pi = new W(),
  Ei = new W(),
  Ri = new W(),
  Oi = [],
  Vi = new W()
function zi(e, t) {
  if (t <= 180 && t > 0) {
    ;(t = (t / 180) * Math.PI),
      Ti.fromArray(e[0]),
      Ni.fromArray(e[1]),
      Pi.fromArray(e[2]),
      W.sub(Ei, Ti, Ni),
      W.sub(Ri, Pi, Ni)
    var n = Ei.len(),
      i = Ri.len()
    if (!(n < 0.001 || i < 0.001)) {
      Ei.scale(1 / n), Ri.scale(1 / i)
      var a = Ei.dot(Ri)
      if (Math.cos(t) < a) {
        var o = Ci(Ni.x, Ni.y, Pi.x, Pi.y, Ti.x, Ti.y, Oi, !1)
        Vi.fromArray(Oi), Vi.scaleAndAdd(Ri, o / Math.tan(Math.PI - t))
        var r =
          Pi.x !== Ni.x
            ? (Vi.x - Ni.x) / (Pi.x - Ni.x)
            : (Vi.y - Ni.y) / (Pi.y - Ni.y)
        if (isNaN(r)) return
        r < 0 ? W.copy(Vi, Ni) : r > 1 && W.copy(Vi, Pi), Vi.toArray(e[1])
      }
    }
  }
}
function ki(e, t, n) {
  if (n <= 180 && n > 0) {
    ;(n = (n / 180) * Math.PI),
      Ti.fromArray(e[0]),
      Ni.fromArray(e[1]),
      Pi.fromArray(e[2]),
      W.sub(Ei, Ni, Ti),
      W.sub(Ri, Pi, Ni)
    var i = Ei.len(),
      a = Ri.len()
    if (!(i < 0.001 || a < 0.001))
      if ((Ei.scale(1 / i), Ri.scale(1 / a), Ei.dot(t) < Math.cos(n))) {
        var o = Ci(Ni.x, Ni.y, Pi.x, Pi.y, Ti.x, Ti.y, Oi, !1)
        Vi.fromArray(Oi)
        var r = Math.PI / 2,
          s = r + Math.acos(Ri.dot(t)) - n
        if (s >= r) W.copy(Vi, Pi)
        else {
          Vi.scaleAndAdd(Ri, o / Math.tan(Math.PI / 2 - s))
          var l =
            Pi.x !== Ni.x
              ? (Vi.x - Ni.x) / (Pi.x - Ni.x)
              : (Vi.y - Ni.y) / (Pi.y - Ni.y)
          if (isNaN(l)) return
          l < 0 ? W.copy(Vi, Ni) : l > 1 && W.copy(Vi, Pi)
        }
        Vi.toArray(e[1])
      }
  }
}
function Gi(e, t, n, i) {
  var a = 'normal' === n,
    o = a ? e : e.ensureState(n)
  o.ignore = t
  var r = i.get('smooth')
  r && !0 === r && (r = 0.3),
    (o.shape = o.shape || {}),
    r > 0 && (o.shape.smooth = r)
  var s = i.getModel('lineStyle').getLineStyle()
  a ? e.useStyle(s) : (o.style = s)
}
function Bi(e, t) {
  var n = t.smooth,
    i = t.points
  if (i)
    if ((e.moveTo(i[0][0], i[0][1]), n > 0 && i.length >= 3)) {
      var a = U(i[0], i[1]),
        o = U(i[1], i[2])
      if (!a || !o)
        return e.lineTo(i[1][0], i[1][1]), void e.lineTo(i[2][0], i[2][1])
      var r = Math.min(a, o) * n,
        s = Z([], i[1], i[0], r / a),
        l = Z([], i[1], i[2], r / o),
        u = Z([], s, l, 0.5)
      e.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]),
        e.bezierCurveTo(l[0], l[1], l[0], l[1], i[2][0], i[2][1])
    } else for (var d = 1; d < i.length; d++) e.lineTo(i[d][0], i[d][1])
}
function Wi(e, t, n) {
  var i = e.getTextGuideLine(),
    a = e.getTextContent()
  if (a) {
    for (
      var o = t.normal, r = o.get('show'), s = a.ignore, l = 0;
      l < F.length;
      l++
    ) {
      var u = F[l],
        d = t[u],
        c = 'normal' === u
      if (d) {
        var h = d.get('show')
        if ((c ? s : Y(a.states[u] && a.states[u].ignore, s)) || !Y(h, r)) {
          var p = c ? i : i && i.states.normal
          p && (p.ignore = !0)
          continue
        }
        i ||
          ((i = new X()),
          e.setTextGuideLine(i),
          c || (!s && r) || Gi(i, !0, 'normal', t.normal),
          e.stateProxy && (i.stateProxy = e.stateProxy)),
          Gi(i, !1, u, d)
      }
    }
    if (i) {
      C(i.style, n), (i.style.fill = null)
      var g = o.get('showAbove')
      ;((e.textGuideLineConfig = e.textGuideLineConfig || {}).showAbove =
        g || !1),
        (i.buildPath = Bi)
    }
  } else i && e.removeTextGuideLine()
}
function Fi(e, t) {
  t = t || 'labelLine'
  for (var n = { normal: e.getModel(t) }, i = 0; i < H.length; i++) {
    var a = H[i]
    n[a] = e.getModel([a, t])
  }
  return n
}
function Yi(e, t, n, i) {
  return (function (e, t, n, i, a, o) {
    var r = e.length
    if (!(r < 2)) {
      e.sort(function (e, n) {
        return e.rect[t] - n.rect[t]
      })
      for (var s, l = 0, u = !1, d = 0, c = 0; c < r; c++) {
        var h = e[c],
          p = h.rect
        ;(s = p[t] - l) < 0 && ((p[t] -= s), (h.label[t] -= s), (u = !0)),
          (d += Math.max(-s, 0)),
          (l = p[t] + p[n])
      }
      d > 0 && o && _(-d / r, 0, r)
      var g,
        f,
        y = e[0],
        m = e[r - 1]
      return (
        v(),
        g < 0 && S(-g, 0.8),
        f < 0 && S(f, 0.8),
        v(),
        x(g, f, 1),
        x(f, g, -1),
        v(),
        g < 0 && b(-g),
        f < 0 && b(f),
        u
      )
    }
    function v() {
      ;(g = y.rect[t] - i), (f = a - m.rect[t] - m.rect[n])
    }
    function x(e, t, n) {
      if (e < 0) {
        var i = Math.min(t, -e)
        if (i > 0) {
          _(i * n, 0, r)
          var a = i + e
          a < 0 && S(-a * n, 1)
        } else S(-e * n, 1)
      }
    }
    function _(n, i, a) {
      0 !== n && (u = !0)
      for (var o = i; o < a; o++) {
        var r = e[o]
        ;(r.rect[t] += n), (r.label[t] += n)
      }
    }
    function S(i, a) {
      for (var o = [], s = 0, l = 1; l < r; l++) {
        var u = e[l - 1].rect,
          d = Math.max(e[l].rect[t] - u[t] - u[n], 0)
        o.push(d), (s += d)
      }
      if (s) {
        var c = Math.min(Math.abs(i) / s, a)
        if (i > 0) for (l = 0; l < r - 1; l++) _(o[l] * c, 0, l + 1)
        else for (l = r - 1; l > 0; l--) _(-o[l - 1] * c, l, r)
      }
    }
    function b(e) {
      var t = e < 0 ? -1 : 1
      e = Math.abs(e)
      for (var n = Math.ceil(e / (r - 1)), i = 0; i < r - 1; i++)
        if ((t > 0 ? _(n, 0, i + 1) : _(-n, r - i - 1, r), (e -= n) <= 0))
          return
    }
  })(e, 'y', 'height', t, n, i)
}
var Xi = $.value
function Hi(e, t) {
  return C({ show: t }, e)
}
var Ui = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.optionUpdated = function () {
        var e = this.get('boundaryGap'),
          t = this.get('splitNumber'),
          n = this.get('scale'),
          a = this.get('axisLine'),
          o = this.get('axisTick'),
          r = this.get('axisLabel'),
          s = this.get('axisName'),
          l = this.get(['axisName', 'show']),
          u = this.get(['axisName', 'formatter']),
          d = this.get('axisNameGap'),
          c = this.get('triggerEvent'),
          h = i(
            this.get('indicator') || [],
            function (i) {
              null != i.max && i.max > 0 && !i.min
                ? (i.min = 0)
                : null != i.min && i.min < 0 && !i.max && (i.max = 0)
              var h = s
              null != i.color && (h = C({ color: i.color }, s))
              var p = q(
                _(i),
                {
                  boundaryGap: e,
                  splitNumber: t,
                  scale: n,
                  axisLine: a,
                  axisTick: o,
                  axisLabel: r,
                  name: i.text,
                  nameLocation: 'end',
                  nameGap: d,
                  nameTextStyle: h,
                  triggerEvent: c,
                },
                !1
              )
              if ((l || (p.name = ''), 'string' == typeof u)) {
                var g = p.name
                p.name = u.replace('{value}', null != g ? g : '')
              } else 'function' == typeof u && (p.name = u(p.name, p))
              var f = new m(p, null, this.ecModel)
              return (
                J(f, K.prototype),
                (f.mainType = 'radar'),
                (f.componentIndex = this.componentIndex),
                f
              )
            },
            this
          )
        this._indicatorModels = h
      }),
      (t.prototype.getIndicatorModels = function () {
        return this._indicatorModels
      }),
      (t.type = 'radar'),
      (t.defaultOption = {
        zlevel: 0,
        z: 0,
        center: ['50%', '50%'],
        radius: '75%',
        startAngle: 90,
        axisName: { show: !0 },
        boundaryGap: [0, 0],
        splitNumber: 5,
        axisNameGap: 15,
        scale: !1,
        shape: 'polygon',
        axisLine: q({ lineStyle: { color: '#bbb' } }, Xi.axisLine),
        axisLabel: Hi(Xi.axisLabel, !1),
        axisTick: Hi(Xi.axisTick, !1),
        splitLine: Hi(Xi.splitLine, !0),
        splitArea: Hi(Xi.splitArea, !0),
        indicator: [],
      }),
      t
    )
  })(Q),
  Zi = ['axisLine', 'axisTickLabel', 'axisName'],
  ji = (function (e) {
    function n() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.type = n.type), t
    }
    return (
      j(n, e),
      (n.prototype.render = function (e, t, n) {
        this.group.removeAll(),
          this._buildAxes(e),
          this._buildSplitLineAndArea(e)
      }),
      (n.prototype._buildAxes = function (e) {
        var n = e.coordinateSystem,
          a = n.getIndicatorAxes(),
          o = i(a, function (e) {
            return new ee(e.model, {
              position: [n.cx, n.cy],
              rotation: e.angle,
              labelDirection: -1,
              tickDirection: -1,
              nameDirection: 1,
            })
          })
        t(
          o,
          function (e) {
            t(Zi, e.add, e), this.group.add(e.getGroup())
          },
          this
        )
      }),
      (n.prototype._buildSplitLineAndArea = function (e) {
        var n = e.coordinateSystem,
          a = n.getIndicatorAxes()
        if (a.length) {
          var o = e.get('shape'),
            r = e.getModel('splitLine'),
            s = e.getModel('splitArea'),
            l = r.getModel('lineStyle'),
            u = s.getModel('areaStyle'),
            d = r.get('show'),
            c = s.get('show'),
            h = l.get('color'),
            p = u.get('color'),
            f = g(h) ? h : [h],
            y = g(p) ? p : [p],
            m = [],
            v = []
          if ('circle' === o)
            for (
              var x = a[0].getTicksCoords(), _ = n.cx, S = n.cy, b = 0;
              b < x.length;
              b++
            ) {
              if (d)
                m[N(m, f, b)].push(
                  new te({ shape: { cx: _, cy: S, r: x[b].coord } })
                )
              if (c && b < x.length - 1)
                v[N(v, y, b)].push(
                  new ne({
                    shape: { cx: _, cy: S, r0: x[b].coord, r: x[b + 1].coord },
                  })
                )
            }
          else {
            var w,
              I = i(a, function (e, t) {
                var a = e.getTicksCoords()
                return (
                  (w = null == w ? a.length - 1 : Math.min(a.length - 1, w)),
                  i(a, function (e) {
                    return n.coordToPoint(e.coord, t)
                  })
                )
              }),
              M = []
            for (b = 0; b <= w; b++) {
              for (var D = [], A = 0; A < a.length; A++) D.push(I[A][b])
              if ((D[0] && D.push(D[0].slice()), d))
                m[N(m, f, b)].push(new X({ shape: { points: D } }))
              if (c && M)
                v[N(v, y, b - 1)].push(
                  new ie({ shape: { points: D.concat(M) } })
                )
              M = D.slice().reverse()
            }
          }
          var L = l.getLineStyle(),
            T = u.getAreaStyle()
          t(
            v,
            function (e, t) {
              this.group.add(
                ae(e, {
                  style: C({ stroke: 'none', fill: y[t % y.length] }, T),
                  silent: !0,
                })
              )
            },
            this
          ),
            t(
              m,
              function (e, t) {
                this.group.add(
                  ae(e, {
                    style: C({ fill: 'none', stroke: f[t % f.length] }, L),
                    silent: !0,
                  })
                )
              },
              this
            )
        }
        function N(e, t, n) {
          var i = n % t.length
          return (e[i] = e[i] || []), i
        }
      }),
      (n.type = 'radar'),
      n
    )
  })(oe),
  qi = (function (e) {
    function t(t, n, i) {
      var a = e.call(this, t, n, i) || this
      return (a.type = 'value'), (a.angle = 0), (a.name = ''), a
    }
    return j(t, e), t
  })(re),
  Ji = (function () {
    function e(e, t, n) {
      ;(this.dimensions = []),
        (this._model = e),
        (this._indicatorAxes = i(
          e.getIndicatorModels(),
          function (e, t) {
            var n = 'indicator_' + t,
              i = new qi(n, new he())
            return (
              (i.name = e.get('name')),
              (i.model = e),
              (e.axis = i),
              this.dimensions.push(n),
              i
            )
          },
          this
        )),
        this.resize(e, n)
    }
    return (
      (e.prototype.getIndicatorAxes = function () {
        return this._indicatorAxes
      }),
      (e.prototype.dataToPoint = function (e, t) {
        var n = this._indicatorAxes[t]
        return this.coordToPoint(n.dataToCoord(e), t)
      }),
      (e.prototype.coordToPoint = function (e, t) {
        var n = this._indicatorAxes[t].angle
        return [this.cx + e * Math.cos(n), this.cy - e * Math.sin(n)]
      }),
      (e.prototype.pointToData = function (e) {
        var t = e[0] - this.cx,
          n = e[1] - this.cy,
          i = Math.sqrt(t * t + n * n)
        ;(t /= i), (n /= i)
        for (
          var a, o = Math.atan2(-n, t), r = 1 / 0, s = -1, l = 0;
          l < this._indicatorAxes.length;
          l++
        ) {
          var u = this._indicatorAxes[l],
            d = Math.abs(o - u.angle)
          d < r && ((a = u), (s = l), (r = d))
        }
        return [s, +(a && a.coordToData(i))]
      }),
      (e.prototype.resize = function (e, n) {
        var i = e.get('center'),
          a = n.getWidth(),
          o = n.getHeight(),
          r = Math.min(a, o) / 2
        ;(this.cx = se(i[0], a)),
          (this.cy = se(i[1], o)),
          (this.startAngle = (e.get('startAngle') * Math.PI) / 180)
        var s = e.get('radius')
        ;('string' != typeof s && 'number' != typeof s) || (s = [0, s]),
          (this.r0 = se(s[0], r)),
          (this.r = se(s[1], r)),
          t(
            this._indicatorAxes,
            function (e, t) {
              e.setExtent(this.r0, this.r)
              var n =
                this.startAngle + (t * Math.PI * 2) / this._indicatorAxes.length
              ;(n = Math.atan2(Math.sin(n), Math.cos(n))), (e.angle = n)
            },
            this
          )
      }),
      (e.prototype.update = function (e, n) {
        var i = this._indicatorAxes,
          a = this._model
        t(i, function (e) {
          e.scale.setExtent(1 / 0, -1 / 0)
        }),
          e.eachSeriesByType(
            'radar',
            function (n, o) {
              if (
                'radar' === n.get('coordinateSystem') &&
                e.getComponent('radar', n.get('radarIndex')) === a
              ) {
                var r = n.getData()
                t(i, function (e) {
                  e.scale.unionExtentFromData(r, r.mapDimension(e.dim))
                })
              }
            },
            this
          )
        var o = a.get('splitNumber')
        function r(e) {
          var t = Math.pow(10, Math.floor(Math.log(e) / Math.LN10)),
            n = e / t
          return 2 === n ? (n = 5) : (n *= 2), n * t
        }
        t(i, function (e, t) {
          var n = le(e.scale, e.model).extent
          ue(e.scale, e.model)
          var i = e.model,
            a = e.scale,
            s = de(a, i.get('min', !0)),
            l = de(a, i.get('max', !0)),
            u = a.getInterval()
          if (null != s && null != l)
            a.setExtent(+s, +l), a.setInterval((l - s) / o)
          else if (null != s) {
            var d = void 0
            do {
              ;(d = s + u * o), a.setExtent(+s, d), a.setInterval(u), (u = r(u))
            } while (d < n[1] && isFinite(d) && isFinite(n[1]))
          } else if (null != l) {
            var c = void 0
            do {
              ;(c = l - u * o), a.setExtent(c, +l), a.setInterval(u), (u = r(u))
            } while (c > n[0] && isFinite(c) && isFinite(n[0]))
          } else {
            a.getTicks().length - 1 > o && (u = r(u))
            ;(d = Math.ceil(n[1] / u) * u), (c = ce(d - u * o))
            a.setExtent(c, d), a.setInterval(u)
          }
        })
      }),
      (e.prototype.convertToPixel = function (e, t, n) {
        return console.warn('Not implemented.'), null
      }),
      (e.prototype.convertFromPixel = function (e, t, n) {
        return console.warn('Not implemented.'), null
      }),
      (e.prototype.containPoint = function (e) {
        return console.warn('Not implemented.'), !1
      }),
      (e.create = function (t, n) {
        var i = []
        return (
          t.eachComponent('radar', function (a) {
            var o = new e(a, t, n)
            i.push(o), (a.coordinateSystem = o)
          }),
          t.eachSeriesByType('radar', function (e) {
            'radar' === e.get('coordinateSystem') &&
              (e.coordinateSystem = i[e.get('radarIndex') || 0])
          }),
          i
        )
      }),
      (e.dimensions = []),
      e
    )
  })()
function Ki(e) {
  e.registerCoordinateSystem('radar', Ji),
    e.registerComponentModel(Ui),
    e.registerComponentView(ji),
    e.registerVisual({
      seriesType: 'radar',
      reset: function (e) {
        var t = e.getData()
        t.each(function (e) {
          t.setItemVisual(e, 'legendIcon', 'roundRect')
        }),
          t.setVisual('legendIcon', 'roundRect')
      },
    })
}
var Qi = ge
function $i(e) {
  var t = e.seriesModel
  return t ? t.coordinateSystem : null
}
var ea = (function (e) {
    function t(t) {
      var n = e.call(this) || this
      return (
        (n.type = 'view'),
        (n.dimensions = ['x', 'y']),
        (n._roamTransformable = new ve()),
        (n._rawTransformable = new ve()),
        (n.name = t),
        n
      )
    }
    return (
      j(t, e),
      (t.prototype.setBoundingRect = function (e, t, n, i) {
        return (this._rect = new pe(e, t, n, i)), this._rect
      }),
      (t.prototype.getBoundingRect = function () {
        return this._rect
      }),
      (t.prototype.setViewRect = function (e, t, n, i) {
        this._transformTo(e, t, n, i), (this._viewRect = new pe(e, t, n, i))
      }),
      (t.prototype._transformTo = function (e, t, n, i) {
        var a = this.getBoundingRect(),
          o = this._rawTransformable
        o.transform = a.calculateTransform(new pe(e, t, n, i))
        var r = o.parent
        ;(o.parent = null),
          o.decomposeTransform(),
          (o.parent = r),
          this._updateTransform()
      }),
      (t.prototype.setCenter = function (e) {
        e && ((this._center = e), this._updateCenterAndZoom())
      }),
      (t.prototype.setZoom = function (e) {
        e = e || 1
        var t = this.zoomLimit
        t &&
          (null != t.max && (e = Math.min(t.max, e)),
          null != t.min && (e = Math.max(t.min, e))),
          (this._zoom = e),
          this._updateCenterAndZoom()
      }),
      (t.prototype.getDefaultCenter = function () {
        var e = this.getBoundingRect()
        return [e.x + e.width / 2, e.y + e.height / 2]
      }),
      (t.prototype.getCenter = function () {
        return this._center || this.getDefaultCenter()
      }),
      (t.prototype.getZoom = function () {
        return this._zoom || 1
      }),
      (t.prototype.getRoamTransform = function () {
        return this._roamTransformable.getLocalTransform()
      }),
      (t.prototype._updateCenterAndZoom = function () {
        var e = this._rawTransformable.getLocalTransform(),
          t = this._roamTransformable,
          n = this.getDefaultCenter(),
          i = this.getCenter(),
          a = this.getZoom()
        ;(i = ge([], i, e)),
          (n = ge([], n, e)),
          (t.originX = i[0]),
          (t.originY = i[1]),
          (t.x = n[0] - i[0]),
          (t.y = n[1] - i[1]),
          (t.scaleX = t.scaleY = a),
          this._updateTransform()
      }),
      (t.prototype._updateTransform = function () {
        var e = this._roamTransformable,
          t = this._rawTransformable
        ;(t.parent = e),
          e.updateTransform(),
          t.updateTransform(),
          fe(this.transform || (this.transform = []), t.transform || ye()),
          (this._rawTransform = t.getLocalTransform()),
          (this.invTransform = this.invTransform || []),
          me(this.invTransform, this.transform),
          this.decomposeTransform()
      }),
      (t.prototype.getTransformInfo = function () {
        var e = this._rawTransformable,
          t = this._roamTransformable,
          n = new ve()
        return (
          (n.transform = t.transform),
          n.decomposeTransform(),
          {
            roam: { x: n.x, y: n.y, scaleX: n.scaleX, scaleY: n.scaleY },
            raw: { x: e.x, y: e.y, scaleX: e.scaleX, scaleY: e.scaleY },
          }
        )
      }),
      (t.prototype.getViewRect = function () {
        return this._viewRect
      }),
      (t.prototype.getViewRectAfterRoam = function () {
        var e = this.getBoundingRect().clone()
        return e.applyTransform(this.transform), e
      }),
      (t.prototype.dataToPoint = function (e, t, n) {
        var i = t ? this._rawTransform : this.transform
        return (n = n || []), i ? Qi(n, e, i) : xe(n, e)
      }),
      (t.prototype.pointToData = function (e) {
        var t = this.invTransform
        return t ? Qi([], e, t) : [e[0], e[1]]
      }),
      (t.prototype.convertToPixel = function (e, t, n) {
        var i = $i(t)
        return i === this ? i.dataToPoint(n) : null
      }),
      (t.prototype.convertFromPixel = function (e, t, n) {
        var i = $i(t)
        return i === this ? i.pointToData(n) : null
      }),
      (t.prototype.containPoint = function (e) {
        return this.getViewRectAfterRoam().contain(e[0], e[1])
      }),
      (t.dimensions = ['x', 'y']),
      t
    )
  })(ve),
  ta = {
    geoJSON: { aspectScale: 0.75, invertLongitute: !0 },
    geoSVG: { aspectScale: 1, invertLongitute: !1 },
  },
  na = ['lng', 'lat'],
  ia = (function (t) {
    function n(n, i, a) {
      var o = t.call(this, n) || this
      ;(o.dimensions = na),
        (o.type = 'geo'),
        (o._nameCoordMap = e()),
        (o.map = i)
      var r = _e.load(i, a.nameMap, a.nameProperty),
        s = _e.getGeoResource(i)
      o.resourceType = s ? s.type : null
      var l = ta[s.type]
      ;(o._regionsMap = r.regionsMap),
        (o._invertLongitute = l.invertLongitute),
        (o.regions = r.regions),
        (o.aspectScale = Y(a.aspectScale, l.aspectScale))
      var u = r.boundingRect
      return o.setBoundingRect(u.x, u.y, u.width, u.height), o
    }
    return (
      j(n, t),
      (n.prototype._transformTo = function (e, t, n, i) {
        var a = this.getBoundingRect(),
          o = this._invertLongitute
        ;(a = a.clone()), o && (a.y = -a.y - a.height)
        var r = this._rawTransformable
        r.transform = a.calculateTransform(new pe(e, t, n, i))
        var s = r.parent
        ;(r.parent = null),
          r.decomposeTransform(),
          (r.parent = s),
          o && (r.scaleY = -r.scaleY),
          this._updateTransform()
      }),
      (n.prototype.getRegion = function (e) {
        return this._regionsMap.get(e)
      }),
      (n.prototype.getRegionByCoord = function (e) {
        for (var t = this.regions, n = 0; n < t.length; n++) {
          var i = t[n]
          if ('geoJSON' === i.type && i.contain(e)) return t[n]
        }
      }),
      (n.prototype.addGeoCoord = function (e, t) {
        this._nameCoordMap.set(e, t)
      }),
      (n.prototype.getGeoCoord = function (e) {
        var t = this._regionsMap.get(e)
        return this._nameCoordMap.get(e) || (t && t.getCenter())
      }),
      (n.prototype.dataToPoint = function (e, t, n) {
        if (('string' == typeof e && (e = this.getGeoCoord(e)), e))
          return ea.prototype.dataToPoint.call(this, e, t, n)
      }),
      (n.prototype.convertToPixel = function (e, t, n) {
        var i = aa(t)
        return i === this ? i.dataToPoint(n) : null
      }),
      (n.prototype.convertFromPixel = function (e, t, n) {
        var i = aa(t)
        return i === this ? i.pointToData(n) : null
      }),
      n
    )
  })(ea)
function aa(e) {
  var t = e.geoModel,
    n = e.seriesModel
  return t
    ? t.coordinateSystem
    : n
    ? n.coordinateSystem ||
      (n.getReferringComponents('geo', E).models[0] || {}).coordinateSystem
    : null
}
J(ia, ea)
var oa = ia
function ra(e, t) {
  var n = e.get('boundingCoords')
  if (null != n) {
    var i = n[0],
      a = n[1]
    isNaN(i[0]) ||
      isNaN(i[1]) ||
      isNaN(a[0]) ||
      isNaN(a[1]) ||
      this.setBoundingRect(i[0], i[1], a[0] - i[0], a[1] - i[1])
  }
  var o,
    r,
    s,
    l = this.getBoundingRect(),
    u = e.get('layoutCenter'),
    d = e.get('layoutSize'),
    c = t.getWidth(),
    h = t.getHeight(),
    p = (l.width / l.height) * this.aspectScale,
    g = !1
  if (
    (u &&
      d &&
      ((o = [se(u[0], c), se(u[1], h)]),
      (r = se(d, Math.min(c, h))),
      isNaN(o[0]) || isNaN(o[1]) || isNaN(r) || (g = !0)),
    g)
  )
    (s = {}),
      p > 1
        ? ((s.width = r), (s.height = r / p))
        : ((s.height = r), (s.width = r * p)),
      (s.y = o[1] - s.height / 2),
      (s.x = o[0] - s.width / 2)
  else {
    var f = e.getBoxLayoutParams()
    ;(f.aspect = p), (s = we(f, { width: c, height: h }))
  }
  this.setViewRect(s.x, s.y, s.width, s.height),
    this.setCenter(e.get('center')),
    this.setZoom(e.get('zoom'))
}
var sa = new ((function () {
    function n() {
      this.dimensions = na
    }
    return (
      (n.prototype.create = function (e, n) {
        var a = []
        e.eachComponent('geo', function (e, t) {
          var i = e.get('map'),
            o = new oa(i + t, i, {
              nameMap: e.get('nameMap'),
              nameProperty: e.get('nameProperty'),
              aspectScale: e.get('aspectScale'),
            })
          ;(o.zoomLimit = e.get('scaleLimit')),
            a.push(o),
            (e.coordinateSystem = o),
            (o.model = e),
            (o.resize = ra),
            o.resize(e, n)
        }),
          e.eachSeries(function (e) {
            if ('geo' === e.get('coordinateSystem')) {
              var t = e.get('geoIndex') || 0
              e.coordinateSystem = a[t]
            }
          })
        var o = {}
        return (
          e.eachSeriesByType('map', function (e) {
            if (!e.getHostGeoModel()) {
              var t = e.getMapType()
              ;(o[t] = o[t] || []), o[t].push(e)
            }
          }),
          t(o, function (e, o) {
            var r = i(e, function (e) {
                return e.get('nameMap')
              }),
              s = new oa(o, o, {
                nameMap: Se(r),
                nameProperty: e[0].get('nameProperty'),
                aspectScale: e[0].get('aspectScale'),
              })
            ;(s.zoomLimit = be.apply(
              null,
              i(e, function (e) {
                return e.get('scaleLimit')
              })
            )),
              a.push(s),
              (s.resize = ra),
              s.resize(e[0], n),
              t(e, function (e) {
                ;(e.coordinateSystem = s),
                  (function (e, n) {
                    t(n.get('geoCoord'), function (t, n) {
                      e.addGeoCoord(n, t)
                    })
                  })(s, e)
              })
          }),
          a
        )
      }),
      (n.prototype.getFilledRegions = function (n, i, a, o) {
        for (var r = (n || []).slice(), s = e(), l = 0; l < r.length; l++)
          s.set(r[l].name, r[l])
        var u = _e.load(i, a, o)
        return (
          t(u.regions, function (e) {
            var t = e.name
            !s.get(t) && r.push({ name: t })
          }),
          r
        )
      }),
      n
    )
  })())(),
  la = (function (t) {
    function n() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.type = n.type), e
    }
    return (
      j(n, t),
      (n.prototype.init = function (e, t, n) {
        var i = _e.getGeoResource(e.map)
        if (i && 'geoJSON' === i.type) {
          var a = (e.itemStyle = e.itemStyle || {})
          'color' in a || (a.color = '#eee')
        }
        this.mergeDefaultAndTheme(e, n), Ie(e, 'label', ['show'])
      }),
      (n.prototype.optionUpdated = function () {
        var t = this,
          n = this.option
        n.regions = sa.getFilledRegions(
          n.regions,
          n.map,
          n.nameMap,
          n.nameProperty
        )
        var i = {}
        ;(this._optionModelMap = Me(
          n.regions || [],
          function (e, n) {
            var a = n.name
            return (
              a &&
                (e.set(a, new m(n, t, t.ecModel)), n.selected && (i[a] = !0)),
              e
            )
          },
          e()
        )),
          n.selectedMap || (n.selectedMap = i)
      }),
      (n.prototype.getRegionModel = function (e) {
        return this._optionModelMap.get(e) || new m(null, this, this.ecModel)
      }),
      (n.prototype.getFormattedLabel = function (e, t) {
        var n = this.getRegionModel(e),
          i =
            'normal' === t
              ? n.get(['label', 'formatter'])
              : n.get(['emphasis', 'label', 'formatter']),
          a = { name: e }
        return 'function' == typeof i
          ? ((a.status = t), i(a))
          : 'string' == typeof i
          ? i.replace('{a}', null != e ? e : '')
          : void 0
      }),
      (n.prototype.setZoom = function (e) {
        this.option.zoom = e
      }),
      (n.prototype.setCenter = function (e) {
        this.option.center = e
      }),
      (n.prototype.select = function (e) {
        var t = this.option,
          n = t.selectedMode
        n &&
          ('multiple' !== n && (t.selectedMap = null),
          ((t.selectedMap || (t.selectedMap = {}))[e] = !0))
      }),
      (n.prototype.unSelect = function (e) {
        var t = this.option.selectedMap
        t && (t[e] = !1)
      }),
      (n.prototype.toggleSelected = function (e) {
        this[this.isSelected(e) ? 'unSelect' : 'select'](e)
      }),
      (n.prototype.isSelected = function (e) {
        var t = this.option.selectedMap
        return !(!t || !t[e])
      }),
      (n.type = 'geo'),
      (n.layoutMode = 'box'),
      (n.defaultOption = {
        zlevel: 0,
        z: 0,
        show: !0,
        left: 'center',
        top: 'center',
        aspectScale: null,
        silent: !1,
        map: '',
        boundingCoords: null,
        center: null,
        zoom: 1,
        scaleLimit: null,
        label: { show: !1, color: '#000' },
        itemStyle: { borderWidth: 0.5, borderColor: '#444' },
        emphasis: {
          label: { show: !0, color: 'rgb(100,0,0)' },
          itemStyle: { color: 'rgba(255,215,0,0.8)' },
        },
        select: {
          label: { show: !0, color: 'rgb(100,0,0)' },
          itemStyle: { color: 'rgba(255,215,0,0.8)' },
        },
        regions: [],
      }),
      n
    )
  })(Q)
function ua(e, t, n) {
  var i = e.getZoom(),
    a = e.getCenter(),
    o = t.zoom,
    r = e.dataToPoint(a)
  if (
    (null != t.dx &&
      null != t.dy &&
      ((r[0] -= t.dx), (r[1] -= t.dy), e.setCenter(e.pointToData(r))),
    null != o)
  ) {
    if (n) {
      var s = n.min || 0,
        l = n.max || 1 / 0
      o = Math.max(Math.min(i * o, l), s) / i
    }
    ;(e.scaleX *= o), (e.scaleY *= o)
    var u = (t.originX - e.x) * (o - 1),
      d = (t.originY - e.y) * (o - 1)
    ;(e.x -= u),
      (e.y -= d),
      e.updateTransform(),
      e.setCenter(e.pointToData(r)),
      e.setZoom(o * i)
  }
  return { center: e.getCenter(), zoom: e.getZoom() }
}
var da = '\0_ec_interaction_mutex'
function ca(e, t) {
  return !!ha(e)[t]
}
function ha(e) {
  return e[da] || (e[da] = {})
}
function pa(e, t, n, i, a) {
  e.pointerChecker &&
    e.pointerChecker(i, a.originX, a.originY) &&
    (Le(i.event), ga(e, t, n, i, a))
}
function ga(e, t, n, i, a) {
  ;(a.isAvailableBehavior = f(fa, null, n, i)), e.trigger(t, a)
}
function fa(e, t, n) {
  var i = n[e]
  return !e || (i && (!r(i) || t.event[i + 'Key']))
}
De(
  { type: 'takeGlobalCursor', event: 'globalCursorTaken', update: 'update' },
  function () {}
)
var ya = (function (e) {
  function t(t) {
    var n = e.call(this) || this
    n._zr = t
    var i = f(n._mousedownHandler, n),
      a = f(n._mousemoveHandler, n),
      o = f(n._mouseupHandler, n),
      r = f(n._mousewheelHandler, n),
      s = f(n._pinchHandler, n)
    return (
      (n.enable = function (e, n) {
        this.disable(),
          (this._opt = C(_(n) || {}, {
            zoomOnMouseWheel: !0,
            moveOnMouseMove: !0,
            moveOnMouseWheel: !1,
            preventDefaultMouseMove: !0,
          })),
          null == e && (e = !0),
          (!0 !== e && 'move' !== e && 'pan' !== e) ||
            (t.on('mousedown', i), t.on('mousemove', a), t.on('mouseup', o)),
          (!0 !== e && 'scale' !== e && 'zoom' !== e) ||
            (t.on('mousewheel', r), t.on('pinch', s))
      }),
      (n.disable = function () {
        t.off('mousedown', i),
          t.off('mousemove', a),
          t.off('mouseup', o),
          t.off('mousewheel', r),
          t.off('pinch', s)
      }),
      n
    )
  }
  return (
    j(t, e),
    (t.prototype.isDragging = function () {
      return this._dragging
    }),
    (t.prototype.isPinching = function () {
      return this._pinching
    }),
    (t.prototype.setPointerChecker = function (e) {
      this.pointerChecker = e
    }),
    (t.prototype.dispose = function () {
      this.disable()
    }),
    (t.prototype._mousedownHandler = function (e) {
      if (!(Ae(e) || (e.target && e.target.draggable))) {
        var t = e.offsetX,
          n = e.offsetY
        this.pointerChecker &&
          this.pointerChecker(e, t, n) &&
          ((this._x = t), (this._y = n), (this._dragging = !0))
      }
    }),
    (t.prototype._mousemoveHandler = function (e) {
      if (
        this._dragging &&
        fa('moveOnMouseMove', e, this._opt) &&
        'pinch' !== e.gestureEvent &&
        !ca(this._zr, 'globalPan')
      ) {
        var t = e.offsetX,
          n = e.offsetY,
          i = this._x,
          a = this._y,
          o = t - i,
          r = n - a
        ;(this._x = t),
          (this._y = n),
          this._opt.preventDefaultMouseMove && Le(e.event),
          ga(this, 'pan', 'moveOnMouseMove', e, {
            dx: o,
            dy: r,
            oldX: i,
            oldY: a,
            newX: t,
            newY: n,
            isAvailableBehavior: null,
          })
      }
    }),
    (t.prototype._mouseupHandler = function (e) {
      Ae(e) || (this._dragging = !1)
    }),
    (t.prototype._mousewheelHandler = function (e) {
      var t = fa('zoomOnMouseWheel', e, this._opt),
        n = fa('moveOnMouseWheel', e, this._opt),
        i = e.wheelDelta,
        a = Math.abs(i),
        o = e.offsetX,
        r = e.offsetY
      if (0 !== i && (t || n)) {
        if (t) {
          var s = a > 3 ? 1.4 : a > 1 ? 1.2 : 1.1
          pa(this, 'zoom', 'zoomOnMouseWheel', e, {
            scale: i > 0 ? s : 1 / s,
            originX: o,
            originY: r,
            isAvailableBehavior: null,
          })
        }
        if (n) {
          var l = Math.abs(i)
          pa(this, 'scrollMove', 'moveOnMouseWheel', e, {
            scrollDelta: (i > 0 ? 1 : -1) * (l > 3 ? 0.4 : l > 1 ? 0.15 : 0.05),
            originX: o,
            originY: r,
            isAvailableBehavior: null,
          })
        }
      }
    }),
    (t.prototype._pinchHandler = function (e) {
      ca(this._zr, 'globalPan') ||
        pa(this, 'zoom', null, e, {
          scale: e.pinchScale > 1 ? 1.1 : 1 / 1.1,
          originX: e.pinchX,
          originY: e.pinchY,
          isAvailableBehavior: null,
        })
    }),
    t
  )
})(Ce)
function ma(e, t, n) {
  var i = e.target
  ;(i.x += t), (i.y += n), i.dirty()
}
function va(e, t, n, i) {
  var a = e.target,
    o = e.zoomLimit,
    r = (e.zoom = e.zoom || 1)
  if (((r *= t), o)) {
    var s = o.min || 0,
      l = o.max || 1 / 0
    r = Math.max(Math.min(l, r), s)
  }
  var u = r / e.zoom
  ;(e.zoom = r),
    (a.x -= (n - a.x) * (u - 1)),
    (a.y -= (i - a.y) * (u - 1)),
    (a.scaleX *= u),
    (a.scaleY *= u),
    a.dirty()
}
var xa = { axisPointer: 1, tooltip: 1, brush: 1 }
function _a(e, t, n) {
  var i = t.getComponentByElement(e.topTarget),
    a = i && i.coordinateSystem
  return i && i !== n && !xa.hasOwnProperty(i.mainType) && a && a.model !== n
}
var Sa = ['rect', 'circle', 'line', 'ellipse', 'polygon', 'polyline', 'path'],
  ba = e(Sa),
  wa = e(Sa.concat(['g'])),
  Ia = e(Sa.concat(['g'])),
  Ma = Te()
function Da(e) {
  var t = e.getItemStyle(),
    n = e.get('areaColor')
  return null != n && (t.fill = n), t
}
function Aa(e, t, n, i) {
  var a = i.getModel('itemStyle'),
    o = i.getModel(['emphasis', 'itemStyle']),
    r = i.getModel(['blur', 'itemStyle']),
    s = i.getModel(['select', 'itemStyle']),
    l = Da(a),
    u = Da(o),
    d = Da(s),
    c = Da(r),
    h = e.data
  if (h) {
    var p = h.getItemVisual(n, 'style'),
      g = h.getItemVisual(n, 'decal')
    e.isVisualEncodedByVisualMap && p.fill && (l.fill = p.fill),
      g && (l.decal = ze(g, e.api))
  }
  t.setStyle(l),
    (t.style.strokeNoScale = !0),
    (t.ensureState('emphasis').style = u),
    (t.ensureState('select').style = d),
    (t.ensureState('blur').style = c),
    Ve(t)
}
function La(e, t, n, i, a, o, r) {
  var s = e.data,
    l = e.isGeo,
    u = s && isNaN(s.get(s.mapDimension('value'), o)),
    d = s && s.getItemLayout(o)
  if (l || u || (d && d.showLabel)) {
    var c = l ? n : o,
      h = void 0
    ;(!s || o >= 0) && (h = a)
    var p = r ? { normal: { align: 'center', verticalAlign: 'middle' } } : null
    ke(t, Ge(i), { labelFetcher: h, labelDataIndex: c, defaultText: n }, p)
    var g = t.getTextContent()
    if (g && ((Ma(g).ignore = g.ignore), t.textConfig && r)) {
      var f = t.getBoundingRect().clone()
      ;(t.textConfig.layoutRect = f),
        (t.textConfig.position = [
          ((r[0] - f.x) / f.width) * 100 + '%',
          ((r[1] - f.y) / f.height) * 100 + '%',
        ])
    }
    t.disableLabelAnimation = !0
  } else
    t.removeTextContent(),
      t.removeTextConfig(),
      (t.disableLabelAnimation = null)
}
function Ca(e, t, n, i, a, o) {
  e.data
    ? e.data.setItemGraphicEl(o, t)
    : (Be(t).eventData = {
        componentType: 'geo',
        componentIndex: a.componentIndex,
        geoIndex: a.componentIndex,
        name: n,
        region: (i && i.option) || {},
      })
}
function Ta(e, t, n, i, a) {
  e.data ||
    We({
      el: t,
      componentModel: a,
      itemName: n,
      itemTooltipOption: i.get('tooltip'),
    })
}
function Na(e, t, n, i, a) {
  t.highDownSilentOnTouch = !!a.get('selectedMode')
  var o = i.getModel('emphasis'),
    r = o.get('focus')
  return Fe(t, r, o.get('blurScope')), e.isGeo && Ye(t, a, n), r
}
var Pa = (function () {
    function n(e) {
      var t = new Ne()
      ;(this.uid = Pe('ec_map_draw')),
        (this._controller = new ya(e.getZr())),
        (this._controllerHost = { target: t }),
        (this.group = t),
        t.add((this._regionsGroup = new Ne())),
        t.add((this._svgGroup = new Ne()))
    }
    return (
      (n.prototype.draw = function (e, t, n, i, a) {
        var o = 'geo' === e.mainType,
          r = e.getData && e.getData()
        o &&
          t.eachComponent({ mainType: 'series', subType: 'map' }, function (t) {
            r || t.getHostGeoModel() !== e || (r = t.getData())
          })
        var s = e.coordinateSystem,
          l = this._regionsGroup,
          u = this.group,
          d = s.getTransformInfo(),
          c = d.raw,
          h = d.roam
        !l.childAt(0) || a
          ? ((u.x = h.x),
            (u.y = h.y),
            (u.scaleX = h.scaleX),
            (u.scaleY = h.scaleY),
            u.dirty())
          : Ee(u, h, e)
        var p =
            r &&
            r.getVisual('visualMeta') &&
            r.getVisual('visualMeta').length > 0,
          g = {
            api: n,
            geo: s,
            mapOrGeoModel: e,
            data: r,
            isVisualEncodedByVisualMap: p,
            isGeo: o,
            transformInfoRaw: c,
          }
        'geoJSON' === s.resourceType
          ? this._buildGeoJSON(g)
          : 'geoSVG' === s.resourceType && this._buildSVG(g),
          this._updateController(e, t, n),
          this._updateMapSelectHandler(e, l, n, i)
      }),
      (n.prototype._buildGeoJSON = function (n) {
        var i = (this._regionsGroupByName = e()),
          a = e(),
          o = this._regionsGroup,
          r = n.transformInfoRaw,
          s = n.mapOrGeoModel,
          l = n.data,
          u = function (e) {
            return [e[0] * r.scaleX + r.x, e[1] * r.scaleY + r.y]
          }
        o.removeAll(),
          t(n.geo.regions, function (e) {
            var r = e.name,
              d = i.get(r),
              c = a.get(r) || {},
              h = c.dataIdx,
              p = c.regionModel
            d ||
              ((d = i.set(r, new Ne())),
              o.add(d),
              (h = l ? l.indexOfName(r) : null),
              (p = n.isGeo
                ? s.getRegionModel(r)
                : l
                ? l.getItemModel(h)
                : null),
              a.set(r, { dataIdx: h, regionModel: p }))
            var g = new Re({ segmentIgnoreThreshold: 1, shape: { paths: [] } })
            d.add(g),
              t(e.geometries, function (e) {
                if ('polygon' === e.type) {
                  for (var t = [], n = 0; n < e.exterior.length; ++n)
                    t.push(u(e.exterior[n]))
                  g.shape.paths.push(
                    new ie({ segmentIgnoreThreshold: 1, shape: { points: t } })
                  )
                  for (n = 0; n < (e.interiors ? e.interiors.length : 0); ++n) {
                    for (
                      var i = e.interiors[n], a = [], o = 0;
                      o < i.length;
                      ++o
                    )
                      a.push(u(i[o]))
                    g.shape.paths.push(
                      new ie({
                        segmentIgnoreThreshold: 1,
                        shape: { points: a },
                      })
                    )
                  }
                }
              }),
              Aa(n, g, h, p),
              g instanceof Oe && (g.culling = !0)
            var f = u(e.getCenter())
            La(n, g, r, p, s, h, f)
          }),
          i.each(function (e, t) {
            var i = a.get(t),
              o = i.dataIdx,
              r = i.regionModel
            Ca(n, e, t, r, s, o), Ta(n, e, t, r, s), Na(n, e, t, r, s)
          }, this)
      }),
      (n.prototype._buildSVG = function (n) {
        var i = n.geo.map,
          a = n.transformInfoRaw
        ;(this._svgGroup.x = a.x),
          (this._svgGroup.y = a.y),
          (this._svgGroup.scaleX = a.scaleX),
          (this._svgGroup.scaleY = a.scaleY),
          this._svgResourceChanged(i) && (this._freeSVG(), this._useSVG(i))
        var o = (this._svgDispatcherMap = e()),
          r = !1
        t(
          this._svgGraphicRecord.named,
          function (e) {
            var t = e.name,
              i = n.mapOrGeoModel,
              a = n.data,
              s = e.svgNodeTagLower,
              l = e.el,
              u = a ? a.indexOfName(t) : null,
              d = i.getRegionModel(t)
            ;(null != ba.get(s) && l instanceof Oe && Aa(n, l, u, d),
            l instanceof Oe && (l.culling = !0),
            (l.z2EmphasisLift = 0),
            e.namedFrom) ||
              (null != Ia.get(s) && La(n, l, t, d, i, u, null),
              Ca(n, l, t, d, i, u),
              Ta(n, l, t, d, i),
              null != wa.get(s) &&
                ('self' === Na(n, l, t, d, i) && (r = !0),
                (o.get(t) || o.set(t, [])).push(l)))
          },
          this
        ),
          this._enableBlurEntireSVG(r, n)
      }),
      (n.prototype._enableBlurEntireSVG = function (e, t) {
        if (e && t.isGeo) {
          var n = t.mapOrGeoModel
            .getModel(['blur', 'itemStyle'])
            .getItemStyle().opacity
          this._svgGraphicRecord.root.traverse(function (e) {
            if (!e.isGroup) {
              Ve(e)
              var t = e.ensureState('blur').style || {}
              null == t.opacity && null != n && (t.opacity = n),
                e.ensureState('emphasis')
            }
          })
        }
      }),
      (n.prototype.remove = function () {
        this._regionsGroup.removeAll(),
          (this._regionsGroupByName = null),
          this._svgGroup.removeAll(),
          this._freeSVG(),
          this._controller.dispose(),
          (this._controllerHost = null)
      }),
      (n.prototype.findHighDownDispatchers = function (e, t) {
        if (null == e) return []
        var n = t.coordinateSystem
        if ('geoJSON' === n.resourceType) {
          var i = this._regionsGroupByName
          if (i) {
            var a = i.get(e)
            return a ? [a] : []
          }
        } else if ('geoSVG' === n.resourceType)
          return (this._svgDispatcherMap && this._svgDispatcherMap.get(e)) || []
      }),
      (n.prototype._svgResourceChanged = function (e) {
        return this._svgMapName !== e
      }),
      (n.prototype._useSVG = function (e) {
        var t = _e.getGeoResource(e)
        if (t && 'geoSVG' === t.type) {
          var n = t.useGraphic(this.uid)
          this._svgGroup.add(n.root),
            (this._svgGraphicRecord = n),
            (this._svgMapName = e)
        }
      }),
      (n.prototype._freeSVG = function () {
        var e = this._svgMapName
        if (null != e) {
          var t = _e.getGeoResource(e)
          t && 'geoSVG' === t.type && t.freeGraphic(this.uid),
            (this._svgGraphicRecord = null),
            (this._svgDispatcherMap = null),
            this._svgGroup.removeAll(),
            (this._svgMapName = null)
        }
      }),
      (n.prototype._updateController = function (e, t, n) {
        var i = e.coordinateSystem,
          o = this._controller,
          r = this._controllerHost
        ;(r.zoomLimit = e.get('scaleLimit')),
          (r.zoom = i.getZoom()),
          o.enable(e.get('roam') || !1)
        var s = e.mainType
        function l() {
          var t = { type: 'geoRoam', componentType: s }
          return (t[s + 'Id'] = e.id), t
        }
        o.off('pan').on(
          'pan',
          function (e) {
            ;(this._mouseDownFlag = !1),
              ma(r, e.dx, e.dy),
              n.dispatchAction(a(l(), { dx: e.dx, dy: e.dy }))
          },
          this
        ),
          o.off('zoom').on(
            'zoom',
            function (e) {
              ;(this._mouseDownFlag = !1),
                va(r, e.scale, e.originX, e.originY),
                n.dispatchAction(
                  a(l(), {
                    zoom: e.scale,
                    originX: e.originX,
                    originY: e.originY,
                  })
                )
            },
            this
          ),
          o.setPointerChecker(function (t, a, o) {
            return i.containPoint([a, o]) && !_a(t, n, e)
          })
      }),
      (n.prototype.resetForLabelLayout = function () {
        this.group.traverse(function (e) {
          var t = e.getTextContent()
          t && (t.ignore = Ma(t).ignore)
        })
      }),
      (n.prototype._updateMapSelectHandler = function (e, t, n, i) {
        var a = this
        t.off('mousedown'),
          t.off('click'),
          e.get('selectedMode') &&
            (t.on('mousedown', function () {
              a._mouseDownFlag = !0
            }),
            t.on('click', function (e) {
              a._mouseDownFlag && (a._mouseDownFlag = !1)
            }))
      }),
      n
    )
  })(),
  Ea = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n.focusBlurEnabled = !0), n
    }
    return (
      j(t, e),
      (t.prototype.init = function (e, t) {
        this._api = t
      }),
      (t.prototype.render = function (e, t, n, i) {
        if (((this._model = e), !e.get('show')))
          return (
            this._mapDraw && this._mapDraw.remove(), void (this._mapDraw = null)
          )
        this._mapDraw || (this._mapDraw = new Pa(n))
        var a = this._mapDraw
        a.draw(e, t, n, this, i),
          a.group.on('click', this._handleRegionClick, this),
          (a.group.silent = e.get('silent')),
          this.group.add(a.group),
          this.updateSelectStatus(e, t, n)
      }),
      (t.prototype._handleRegionClick = function (e) {
        var t
        Xe(
          e.target,
          function (e) {
            return null != (t = Be(e).eventData)
          },
          !0
        ),
          t &&
            this._api.dispatchAction({
              type: 'geoToggleSelect',
              geoId: this._model.id,
              name: t.name,
            })
      }),
      (t.prototype.updateSelectStatus = function (e, t, n) {
        var i = this
        this._mapDraw.group.traverse(function (e) {
          var t = Be(e).eventData
          if (t)
            return (
              i._model.isSelected(t.name) ? n.enterSelect(e) : n.leaveSelect(e),
              !0
            )
        })
      }),
      (t.prototype.findHighDownDispatchers = function (e) {
        return (
          this._mapDraw && this._mapDraw.findHighDownDispatchers(e, this._model)
        )
      }),
      (t.prototype.dispose = function () {
        this._mapDraw && this._mapDraw.remove()
      }),
      (t.type = 'geo'),
      t
    )
  })(oe)
function Ra(e) {
  function n(n, i) {
    ;(i.update = 'geo:updateSelectStatus'),
      e.registerAction(i, function (e, i) {
        var a = {},
          o = []
        return (
          i.eachComponent({ mainType: 'geo', query: e }, function (i) {
            i[n](e.name)
            var r = i.coordinateSystem
            t(r.regions, function (e) {
              a[e.name] = i.isSelected(e.name) || !1
            })
            var s = []
            t(a, function (e, t) {
              a[t] && s.push(t)
            }),
              o.push({ geoIndex: i.componentIndex, name: s })
          }),
          { selected: a, allSelected: o, name: e.name }
        )
      })
  }
  e.registerCoordinateSystem('geo', sa),
    e.registerComponentModel(la),
    e.registerComponentView(Ea),
    n('toggleSelected', { type: 'geoToggleSelect', event: 'geoselectchanged' }),
    n('select', { type: 'geoSelect', event: 'geoselected' }),
    n('unSelect', { type: 'geoUnSelect', event: 'geounselected' }),
    e.registerAction(
      { type: 'geoRoam', event: 'geoRoam', update: 'updateTransform' },
      function (e, n) {
        var i = e.componentType || 'series'
        n.eachComponent({ mainType: i, query: e }, function (n) {
          var a = n.coordinateSystem
          if ('geo' === a.type) {
            var o = ua(a, e, n.get('scaleLimit'))
            n.setCenter && n.setCenter(o.center),
              n.setZoom && n.setZoom(o.zoom),
              'series' === i &&
                t(n.seriesGroup, function (e) {
                  e.setCenter(o.center), e.setZoom(o.zoom)
                })
          }
        })
      }
    )
}
function Oa(e) {
  !(function (e) {
    if (e.parallel) return
    var n = !1
    t(e.series, function (e) {
      e && 'parallel' === e.type && (n = !0)
    }),
      n && (e.parallel = [{}])
  })(e),
    (function (e) {
      var n = L(e.parallelAxis)
      t(n, function (t) {
        if (S(t)) {
          var n = t.parallelIndex || 0,
            i = L(e.parallel)[n]
          i && i.parallelAxisDefault && q(t, i.parallelAxisDefault, !1)
        }
      })
    })(e)
}
var Va = (function (e) {
    function n() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.type = n.type), t
    }
    return (
      j(n, e),
      (n.prototype.render = function (e, n, i) {
        ;(this._model = e),
          (this._api = i),
          this._handlers ||
            ((this._handlers = {}),
            t(
              za,
              function (e, t) {
                i.getZr().on(t, (this._handlers[t] = f(e, this)))
              },
              this
            )),
          He(
            this,
            '_throttledDispatchExpand',
            e.get('axisExpandRate'),
            'fixRate'
          )
      }),
      (n.prototype.dispose = function (e, n) {
        t(this._handlers, function (e, t) {
          n.getZr().off(t, e)
        }),
          (this._handlers = null)
      }),
      (n.prototype._throttledDispatchExpand = function (e) {
        this._dispatchExpand(e)
      }),
      (n.prototype._dispatchExpand = function (e) {
        e && this._api.dispatchAction(a({ type: 'parallelAxisExpand' }, e))
      }),
      (n.type = 'parallel'),
      n
    )
  })(oe),
  za = {
    mousedown: function (e) {
      ka(this, 'click') && (this._mouseDownPoint = [e.offsetX, e.offsetY])
    },
    mouseup: function (e) {
      var t = this._mouseDownPoint
      if (ka(this, 'click') && t) {
        var n = [e.offsetX, e.offsetY]
        if (Math.pow(t[0] - n[0], 2) + Math.pow(t[1] - n[1], 2) > 5) return
        var i = this._model.coordinateSystem.getSlidedAxisExpandWindow([
          e.offsetX,
          e.offsetY,
        ])
        'none' !== i.behavior &&
          this._dispatchExpand({ axisExpandWindow: i.axisExpandWindow })
      }
      this._mouseDownPoint = null
    },
    mousemove: function (e) {
      if (!this._mouseDownPoint && ka(this, 'mousemove')) {
        var t = this._model,
          n = t.coordinateSystem.getSlidedAxisExpandWindow([
            e.offsetX,
            e.offsetY,
          ]),
          i = n.behavior
        'jump' === i &&
          this._throttledDispatchExpand.debounceNextCall(
            t.get('axisExpandDebounce')
          ),
          this._throttledDispatchExpand(
            'none' === i
              ? null
              : {
                  axisExpandWindow: n.axisExpandWindow,
                  animation: 'jump' === i ? null : { duration: 0 },
                }
          )
      }
    },
  }
function ka(e, t) {
  var n = e._model
  return n.get('axisExpandable') && n.get('axisExpandTriggerOn') === t
}
var Ga = Va,
  Ba = (function (e) {
    function n() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.type = n.type), t
    }
    return (
      j(n, e),
      (n.prototype.init = function () {
        e.prototype.init.apply(this, arguments), this.mergeOption({})
      }),
      (n.prototype.mergeOption = function (e) {
        var t = this.option
        e && q(t, e, !0), this._initDimensions()
      }),
      (n.prototype.contains = function (e, t) {
        var n = e.get('parallelIndex')
        return null != n && t.getComponent('parallel', n) === this
      }),
      (n.prototype.setAxisExpand = function (e) {
        t(
          [
            'axisExpandable',
            'axisExpandCenter',
            'axisExpandCount',
            'axisExpandWidth',
            'axisExpandWindow',
          ],
          function (t) {
            e.hasOwnProperty(t) && (this.option[t] = e[t])
          },
          this
        )
      }),
      (n.prototype._initDimensions = function () {
        var e = (this.dimensions = []),
          n = (this.parallelAxisIndex = []),
          i = Ue(
            this.ecModel.queryComponents({ mainType: 'parallelAxis' }),
            function (e) {
              return (e.get('parallelIndex') || 0) === this.componentIndex
            },
            this
          )
        t(i, function (t) {
          e.push('dim' + t.get('dim')), n.push(t.componentIndex)
        })
      }),
      (n.type = 'parallel'),
      (n.dependencies = ['parallelAxis']),
      (n.layoutMode = 'box'),
      (n.defaultOption = {
        zlevel: 0,
        z: 0,
        left: 80,
        top: 60,
        right: 80,
        bottom: 60,
        layout: 'horizontal',
        axisExpandable: !1,
        axisExpandCenter: null,
        axisExpandCount: 0,
        axisExpandWidth: 50,
        axisExpandRate: 17,
        axisExpandDebounce: 50,
        axisExpandSlideTriggerArea: [-0.15, 0.05, 0.4],
        axisExpandTriggerOn: 'click',
        parallelAxisDefault: null,
      }),
      n
    )
  })(Q),
  Wa = (function (e) {
    function t(t, n, i, a, o) {
      var r = e.call(this, t, n, i) || this
      return (r.type = a || 'value'), (r.axisIndex = o), r
    }
    return (
      j(t, e),
      (t.prototype.isHorizontal = function () {
        return 'horizontal' !== this.coordinateSystem.getModel().get('layout')
      }),
      t
    )
  })(re)
function Fa(e, t) {
  var n = e[t] - e[1 - t]
  return { span: Math.abs(n), sign: n > 0 ? -1 : n < 0 ? 1 : t ? -1 : 1 }
}
function Ya(e, t) {
  return Math.min(
    null != t[1] ? t[1] : 1 / 0,
    Math.max(null != t[0] ? t[0] : -1 / 0, e)
  )
}
var Xa = t,
  Ha = Math.min,
  Ua = Math.max,
  Za = Math.floor,
  ja = Math.ceil,
  qa = ce,
  Ja = Math.PI
function Ka(e, t) {
  return Ha(Ua(e, t[0]), t[1])
}
function Qa(e, t) {
  var n = t.layoutLength / (t.axisCount - 1)
  return { position: n * e, axisNameAvailableWidth: n, axisLabelShow: !0 }
}
function $a(e, t) {
  var n,
    i,
    a = t.layoutLength,
    o = t.axisExpandWidth,
    r = t.axisCount,
    s = t.axisCollapseWidth,
    l = t.winInnerIndices,
    u = s,
    d = !1
  return (
    e < l[0]
      ? ((n = e * s), (i = s))
      : e <= l[1]
      ? ((n = t.axisExpandWindow0Pos + e * o - t.axisExpandWindow[0]),
        (u = o),
        (d = !0))
      : ((n = a - (r - 1 - e) * s), (i = s)),
    {
      position: n,
      axisNameAvailableWidth: u,
      axisLabelShow: d,
      nameTruncateMaxWidth: i,
    }
  )
}
var eo = (function () {
  function n(t, n, i) {
    ;(this.type = 'parallel'),
      (this._axesMap = e()),
      (this._axesLayout = {}),
      (this.dimensions = t.dimensions),
      (this._model = t),
      this._init(t, n, i)
  }
  return (
    (n.prototype._init = function (e, t, n) {
      var i = e.dimensions,
        a = e.parallelAxisIndex
      Xa(
        i,
        function (e, n) {
          var i = a[n],
            o = t.getComponent('parallelAxis', i),
            r = this._axesMap.set(
              e,
              new Wa(e, Ze(o), [0, 0], o.get('type'), i)
            ),
            s = 'category' === r.type
          ;(r.onBand = s && o.get('boundaryGap')),
            (r.inverse = o.get('inverse')),
            (o.axis = r),
            (r.model = o),
            (r.coordinateSystem = o.coordinateSystem = this)
        },
        this
      )
    }),
    (n.prototype.update = function (e, t) {
      this._updateAxesFromSeries(this._model, e)
    }),
    (n.prototype.containPoint = function (e) {
      var t = this._makeLayoutInfo(),
        n = t.axisBase,
        i = t.layoutBase,
        a = t.pixelDimIndex,
        o = e[1 - a],
        r = e[a]
      return (
        o >= n && o <= n + t.axisLength && r >= i && r <= i + t.layoutLength
      )
    }),
    (n.prototype.getModel = function () {
      return this._model
    }),
    (n.prototype._updateAxesFromSeries = function (e, t) {
      t.eachSeries(function (n) {
        if (e.contains(n, t)) {
          var i = n.getData()
          Xa(
            this.dimensions,
            function (e) {
              var t = this._axesMap.get(e)
              t.scale.unionExtentFromData(i, i.mapDimension(e)),
                ue(t.scale, t.model)
            },
            this
          )
        }
      }, this)
    }),
    (n.prototype.resize = function (e, t) {
      ;(this._rect = we(e.getBoxLayoutParams(), {
        width: t.getWidth(),
        height: t.getHeight(),
      })),
        this._layoutAxes()
    }),
    (n.prototype.getRect = function () {
      return this._rect
    }),
    (n.prototype._makeLayoutInfo = function () {
      var e,
        t = this._model,
        n = this._rect,
        i = ['x', 'y'],
        a = ['width', 'height'],
        o = t.get('layout'),
        r = 'horizontal' === o ? 0 : 1,
        s = n[a[r]],
        l = [0, s],
        u = this.dimensions.length,
        d = Ka(t.get('axisExpandWidth'), l),
        c = Ka(t.get('axisExpandCount') || 0, [0, u]),
        h =
          t.get('axisExpandable') && u > 3 && u > c && c > 1 && d > 0 && s > 0,
        p = t.get('axisExpandWindow')
      p
        ? ((e = Ka(p[1] - p[0], l)), (p[1] = p[0] + e))
        : ((e = Ka(d * (c - 1), l)),
          ((p = [d * (t.get('axisExpandCenter') || Za(u / 2)) - e / 2])[1] =
            p[0] + e))
      var g = (s - e) / (u - c)
      g < 3 && (g = 0)
      var f = [Za(qa(p[0] / d, 1)) + 1, ja(qa(p[1] / d, 1)) - 1],
        y = (g / d) * p[0]
      return {
        layout: o,
        pixelDimIndex: r,
        layoutBase: n[i[r]],
        layoutLength: s,
        axisBase: n[i[1 - r]],
        axisLength: n[a[1 - r]],
        axisExpandable: h,
        axisExpandWidth: d,
        axisCollapseWidth: g,
        axisExpandWindow: p,
        axisCount: u,
        winInnerIndices: f,
        axisExpandWindow0Pos: y,
      }
    }),
    (n.prototype._layoutAxes = function () {
      var e = this._rect,
        t = this._axesMap,
        n = this.dimensions,
        i = this._makeLayoutInfo(),
        a = i.layout
      t.each(function (e) {
        var t = [0, i.axisLength],
          n = e.inverse ? 1 : 0
        e.setExtent(t[n], t[1 - n])
      }),
        Xa(
          n,
          function (t, n) {
            var o = (i.axisExpandable ? $a : Qa)(n, i),
              r = {
                horizontal: { x: o.position, y: i.axisLength },
                vertical: { x: 0, y: o.position },
              },
              s = { horizontal: Ja / 2, vertical: 0 },
              l = [r[a].x + e.x, r[a].y + e.y],
              u = s[a],
              d = ye()
            je(d, d, u),
              qe(d, d, l),
              (this._axesLayout[t] = {
                position: l,
                rotation: u,
                transform: d,
                axisNameAvailableWidth: o.axisNameAvailableWidth,
                axisLabelShow: o.axisLabelShow,
                nameTruncateMaxWidth: o.nameTruncateMaxWidth,
                tickDirection: 1,
                labelDirection: 1,
              })
          },
          this
        )
    }),
    (n.prototype.getAxis = function (e) {
      return this._axesMap.get(e)
    }),
    (n.prototype.dataToPoint = function (e, t) {
      return this.axisCoordToPoint(this._axesMap.get(t).dataToCoord(e), t)
    }),
    (n.prototype.eachActiveState = function (e, n, i, a) {
      null == i && (i = 0), null == a && (a = e.count())
      var o = this._axesMap,
        r = this.dimensions,
        s = [],
        l = []
      t(r, function (t) {
        s.push(e.mapDimension(t)), l.push(o.get(t).model)
      })
      for (var u = this.hasAxisBrushed(), d = i; d < a; d++) {
        var c = void 0
        if (u) {
          c = 'active'
          for (var h = e.getValues(s, d), p = 0, g = r.length; p < g; p++) {
            if ('inactive' === l[p].getActiveState(h[p])) {
              c = 'inactive'
              break
            }
          }
        } else c = 'normal'
        n(c, d)
      }
    }),
    (n.prototype.hasAxisBrushed = function () {
      for (
        var e = this.dimensions, t = this._axesMap, n = !1, i = 0, a = e.length;
        i < a;
        i++
      )
        'normal' !== t.get(e[i]).model.getActiveState() && (n = !0)
      return n
    }),
    (n.prototype.axisCoordToPoint = function (e, t) {
      var n = this._axesLayout[t]
      return Je([e, 0], n.transform)
    }),
    (n.prototype.getAxisLayout = function (e) {
      return _(this._axesLayout[e])
    }),
    (n.prototype.getSlidedAxisExpandWindow = function (e) {
      var t = this._makeLayoutInfo(),
        n = t.pixelDimIndex,
        i = t.axisExpandWindow.slice(),
        a = i[1] - i[0],
        o = [0, t.axisExpandWidth * (t.axisCount - 1)]
      if (!this.containPoint(e))
        return { behavior: 'none', axisExpandWindow: i }
      var r,
        s = e[n] - t.layoutBase - t.axisExpandWindow0Pos,
        l = 'slide',
        u = t.axisCollapseWidth,
        d = this._model.get('axisExpandSlideTriggerArea'),
        c = null != d[0]
      if (u)
        c && u && s < a * d[0]
          ? ((l = 'jump'), (r = s - a * d[2]))
          : c && u && s > a * (1 - d[0])
          ? ((l = 'jump'), (r = s - a * (1 - d[2])))
          : (r = s - a * d[1]) >= 0 && (r = s - a * (1 - d[1])) <= 0 && (r = 0),
          (r *= t.axisExpandWidth / u)
            ? (function (e, t, n, i, a, o) {
                e = e || 0
                var r = n[1] - n[0]
                if (
                  (null != a && (a = Ya(a, [0, r])),
                  null != o && (o = Math.max(o, null != a ? a : 0)),
                  'all' === i)
                ) {
                  var s = Math.abs(t[1] - t[0])
                  ;(s = Ya(s, [0, r])), (a = o = Ya(s, [a, o])), (i = 0)
                }
                ;(t[0] = Ya(t[0], n)), (t[1] = Ya(t[1], n))
                var l = Fa(t, i)
                t[i] += e
                var u,
                  d = a || 0,
                  c = n.slice()
                l.sign < 0 ? (c[0] += d) : (c[1] -= d),
                  (t[i] = Ya(t[i], c)),
                  (u = Fa(t, i)),
                  null != a &&
                    (u.sign !== l.sign || u.span < a) &&
                    (t[1 - i] = t[i] + l.sign * a),
                  (u = Fa(t, i)),
                  null != o && u.span > o && (t[1 - i] = t[i] + u.sign * o)
              })(r, i, o, 'all')
            : (l = 'none')
      else {
        var h = i[1] - i[0]
        ;((i = [Ua(0, (o[1] * s) / h - h / 2)])[1] = Ha(o[1], i[0] + h)),
          (i[0] = i[1] - h)
      }
      return { axisExpandWindow: i, behavior: l }
    }),
    n
  )
})()
var to = {
    create: function (e, t) {
      var n = []
      return (
        e.eachComponent('parallel', function (i, a) {
          var o = new eo(i, e, t)
          ;(o.name = 'parallel_' + a),
            o.resize(i, t),
            (i.coordinateSystem = o),
            (o.model = i),
            n.push(o)
        }),
        e.eachSeries(function (e) {
          if ('parallel' === e.get('coordinateSystem')) {
            var t = e.getReferringComponents('parallel', E).models[0]
            e.coordinateSystem = t.coordinateSystem
          }
        }),
        n
      )
    },
  },
  no = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n.activeIntervals = []), n
    }
    return (
      j(t, e),
      (t.prototype.getAreaSelectStyle = function () {
        return Ke([
          ['fill', 'color'],
          ['lineWidth', 'borderWidth'],
          ['stroke', 'borderColor'],
          ['width', 'width'],
          ['opacity', 'opacity'],
        ])(this.getModel('areaSelectStyle'))
      }),
      (t.prototype.setActiveIntervals = function (e) {
        var t = (this.activeIntervals = _(e))
        if (t) for (var n = t.length - 1; n >= 0; n--) Qe(t[n])
      }),
      (t.prototype.getActiveState = function (e) {
        var t = this.activeIntervals
        if (!t.length) return 'normal'
        if (null == e || isNaN(+e)) return 'inactive'
        if (1 === t.length) {
          var n = t[0]
          if (n[0] <= e && e <= n[1]) return 'active'
        } else
          for (var i = 0, a = t.length; i < a; i++)
            if (t[i][0] <= e && e <= t[i][1]) return 'active'
        return 'inactive'
      }),
      t
    )
  })(Q)
J(no, K)
var io = no,
  ao = Math.min,
  oo = Math.max,
  ro = Math.pow,
  so = { w: [0, 0], e: [0, 1], n: [1, 0], s: [1, 1] },
  lo = {
    w: 'ew',
    e: 'ew',
    n: 'ns',
    s: 'ns',
    ne: 'nesw',
    sw: 'nesw',
    nw: 'nwse',
    se: 'nwse',
  },
  uo = {
    brushStyle: {
      lineWidth: 2,
      stroke: 'rgba(210,219,238,0.3)',
      fill: '#D2DBEE',
    },
    transformable: !0,
    brushMode: 'single',
    removeOnClick: !1,
  },
  co = 0,
  ho = (function (e) {
    function n(n) {
      var i = e.call(this) || this
      return (
        (i._track = []),
        (i._covers = []),
        (i._handlers = {}),
        (i._zr = n),
        (i.group = new Ne()),
        (i._uid = 'brushController_' + co++),
        t(
          Go,
          function (e, t) {
            this._handlers[t] = f(e, this)
          },
          i
        ),
        i
      )
    }
    return (
      j(n, e),
      (n.prototype.enableBrush = function (e) {
        return (
          this._brushType && this._doDisableBrush(),
          e.brushType && this._doEnableBrush(e),
          this
        )
      }),
      (n.prototype._doEnableBrush = function (e) {
        var n = this._zr
        this._enableGlobalPan ||
          (function (e, t, n) {
            ha(e)[t] = n
          })(n, 'globalPan', this._uid),
          t(this._handlers, function (e, t) {
            n.on(t, e)
          }),
          (this._brushType = e.brushType),
          (this._brushOption = q(_(uo), e, !0))
      }),
      (n.prototype._doDisableBrush = function () {
        var e = this._zr
        !(function (e, t, n) {
          var i = ha(e)
          i[t] === n && (i[t] = null)
        })(e, 'globalPan', this._uid),
          t(this._handlers, function (t, n) {
            e.off(n, t)
          }),
          (this._brushType = this._brushOption = null)
      }),
      (n.prototype.setPanels = function (e) {
        if (e && e.length) {
          var n = (this._panels = {})
          t(e, function (e) {
            n[e.panelId] = _(e)
          })
        } else this._panels = null
        return this
      }),
      (n.prototype.mount = function (e) {
        ;(e = e || {}), (this._enableGlobalPan = e.enableGlobalPan)
        var t = this.group
        return (
          this._zr.add(t),
          t.attr({
            x: e.x || 0,
            y: e.y || 0,
            rotation: e.rotation || 0,
            scaleX: e.scaleX || 1,
            scaleY: e.scaleY || 1,
          }),
          (this._transform = t.getLocalTransform()),
          this
        )
      }),
      (n.prototype.updateCovers = function (e) {
        e = i(e, function (e) {
          return q(_(uo), e, !0)
        })
        var t = this._covers,
          n = (this._covers = []),
          a = this,
          o = this._creatingCover
        return (
          new oi(
            t,
            e,
            function (e, t) {
              return r(e.__brushOption, t)
            },
            r
          )
            .add(s)
            .update(s)
            .remove(function (e) {
              t[e] !== o && a.group.remove(t[e])
            })
            .execute(),
          this
        )
        function r(e, t) {
          return (
            (null != e.id ? e.id : '\0-brush-index-' + t) + '-' + e.brushType
          )
        }
        function s(i, r) {
          var s = e[i]
          if (null != r && t[r] === o) n[i] = t[r]
          else {
            var l = (n[i] =
              null != r ? ((t[r].__brushOption = s), t[r]) : go(a, po(a, s)))
            mo(a, l)
          }
        }
      }),
      (n.prototype.unmount = function () {
        return this.enableBrush(!1), So(this), this._zr.remove(this.group), this
      }),
      (n.prototype.dispose = function () {
        this.unmount(), this.off()
      }),
      n
    )
  })(Ce)
function po(e, t) {
  var n = Wo[t.brushType].createCover(e, t)
  return (n.__brushOption = t), yo(n, t), e.group.add(n), n
}
function go(e, t) {
  var n = vo(t)
  return n.endCreating && (n.endCreating(e, t), yo(t, t.__brushOption)), t
}
function fo(e, t) {
  var n = t.__brushOption
  vo(t).updateCoverShape(e, t, n.range, n)
}
function yo(e, t) {
  var n = t.z
  null == n && (n = 1e4),
    e.traverse(function (e) {
      ;(e.z = n), (e.z2 = n)
    })
}
function mo(e, t) {
  vo(t).updateCommon(e, t), fo(e, t)
}
function vo(e) {
  return Wo[e.__brushOption.brushType]
}
function xo(e, n, i) {
  var a,
    o = e._panels
  if (!o) return true
  var r = e._transform
  return (
    t(o, function (e) {
      e.isTargetByCursor(n, i, r) && (a = e)
    }),
    a
  )
}
function _o(e, t) {
  var n = e._panels
  if (!n) return true
  var i = t.__brushOption.panelId
  return null == i || n[i]
}
function So(e) {
  var n = e._covers,
    i = n.length
  return (
    t(
      n,
      function (t) {
        e.group.remove(t)
      },
      e
    ),
    (n.length = 0),
    !!i
  )
}
function bo(e, t) {
  var n = i(e._covers, function (e) {
    var t = e.__brushOption,
      n = _(t.range)
    return { brushType: t.brushType, panelId: t.panelId, range: n }
  })
  e.trigger('brush', {
    areas: n,
    isEnd: !!t.isEnd,
    removeOnClick: !!t.removeOnClick,
  })
}
function wo(e) {
  var t = e.length - 1
  return t < 0 && (t = 0), [e[0], e[t]]
}
function Io(e, n, i, a) {
  var o = new Ne()
  return (
    o.add(
      new $e({
        name: 'main',
        style: Lo(i),
        silent: !0,
        draggable: !0,
        cursor: 'move',
        drift: O(No, e, n, o, ['n', 's', 'w', 'e']),
        ondragend: O(bo, n, { isEnd: !0 }),
      })
    ),
    t(a, function (t) {
      o.add(
        new $e({
          name: t.join(''),
          style: { opacity: 0 },
          draggable: !0,
          silent: !0,
          invisible: !0,
          drift: O(No, e, n, o, t),
          ondragend: O(bo, n, { isEnd: !0 }),
        })
      )
    }),
    o
  )
}
function Mo(e, t, n, i) {
  var a = i.brushStyle.lineWidth || 0,
    o = oo(a, 6),
    r = n[0][0],
    s = n[1][0],
    l = r - a / 2,
    u = s - a / 2,
    d = n[0][1],
    c = n[1][1],
    h = d - o + a / 2,
    p = c - o + a / 2,
    g = d - r,
    f = c - s,
    y = g + a,
    m = f + a
  Ao(e, t, 'main', r, s, g, f),
    i.transformable &&
      (Ao(e, t, 'w', l, u, o, m),
      Ao(e, t, 'e', h, u, o, m),
      Ao(e, t, 'n', l, u, y, o),
      Ao(e, t, 's', l, p, y, o),
      Ao(e, t, 'nw', l, u, o, o),
      Ao(e, t, 'ne', h, u, o, o),
      Ao(e, t, 'sw', l, p, o, o),
      Ao(e, t, 'se', h, p, o, o))
}
function Do(e, n) {
  var i = n.__brushOption,
    a = i.transformable,
    o = n.childAt(0)
  o.useStyle(Lo(i)),
    o.attr({ silent: !a, cursor: a ? 'move' : 'default' }),
    t(
      [
        ['w'],
        ['e'],
        ['n'],
        ['s'],
        ['s', 'e'],
        ['s', 'w'],
        ['n', 'e'],
        ['n', 'w'],
      ],
      function (t) {
        var i = n.childOfName(t.join('')),
          o =
            1 === t.length
              ? To(e, t[0])
              : (function (e, t) {
                  var n = [To(e, t[0]), To(e, t[1])]
                  return (
                    ('e' === n[0] || 'w' === n[0]) && n.reverse(), n.join('')
                  )
                })(e, t)
        i &&
          i.attr({
            silent: !a,
            invisible: !a,
            cursor: a ? lo[o] + '-resize' : null,
          })
      }
    )
}
function Ao(e, t, n, i, a, o, r) {
  var s,
    l,
    u,
    d,
    c,
    h = t.childOfName(n)
  h &&
    h.setShape(
      ((s = Ro(e, t, [
        [i, a],
        [i + o, a + r],
      ])),
      (l = ao(s[0][0], s[1][0])),
      (u = ao(s[0][1], s[1][1])),
      (d = oo(s[0][0], s[1][0])),
      (c = oo(s[0][1], s[1][1])),
      { x: l, y: u, width: d - l, height: c - u })
    )
}
function Lo(e) {
  return C({ strokeNoScale: !0 }, e.brushStyle)
}
function Co(e, t, n, i) {
  var a = [ao(e, n), ao(t, i)],
    o = [oo(e, n), oo(t, i)]
  return [
    [a[0], o[0]],
    [a[1], o[1]],
  ]
}
function To(e, t) {
  return { left: 'w', right: 'e', top: 'n', bottom: 's' }[
    et(
      { w: 'left', e: 'right', n: 'top', s: 'bottom' }[t],
      (function (e) {
        return tt(e.group)
      })(e)
    )
  ]
}
function No(e, n, i, a, o, r) {
  var s = i.__brushOption,
    l = e.toRectRange(s.range),
    u = Eo(n, o, r)
  t(a, function (e) {
    var t = so[e]
    l[t[0]][t[1]] += u[t[0]]
  }),
    (s.range = e.fromRectRange(Co(l[0][0], l[1][0], l[0][1], l[1][1]))),
    mo(n, i),
    bo(n, { isEnd: !1 })
}
function Po(e, n, i, a) {
  var o = n.__brushOption.range,
    r = Eo(e, i, a)
  t(o, function (e) {
    ;(e[0] += r[0]), (e[1] += r[1])
  }),
    mo(e, n),
    bo(e, { isEnd: !1 })
}
function Eo(e, t, n) {
  var i = e.group,
    a = i.transformCoordToLocal(t, n),
    o = i.transformCoordToLocal(0, 0)
  return [a[0] - o[0], a[1] - o[1]]
}
function Ro(e, t, n) {
  var i = _o(e, t)
  return i && true !== i ? i.clipPath(n, e._transform) : _(n)
}
function Oo(e) {
  var t = e.event
  t.preventDefault && t.preventDefault()
}
function Vo(e, t, n) {
  return e.childOfName('main').contain(t, n)
}
function zo(e, t, n, i) {
  var a,
    o = e._creatingCover,
    r = e._creatingPanel,
    s = e._brushOption
  if (
    (e._track.push(n.slice()),
    (function (e) {
      var t = e._track
      if (!t.length) return !1
      var n = t[t.length - 1],
        i = t[0],
        a = n[0] - i[0],
        o = n[1] - i[1]
      return ro(a * a + o * o, 0.5) > 6
    })(e) || o)
  ) {
    if (r && !o) {
      'single' === s.brushMode && So(e)
      var l = _(s)
      ;(l.brushType = ko(l.brushType, r)),
        (l.panelId = true === r ? null : r.panelId),
        (o = e._creatingCover = po(e, l)),
        e._covers.push(o)
    }
    if (o) {
      var u = Wo[ko(e._brushType, r)]
      ;(o.__brushOption.range = u.getCreatingRange(Ro(e, o, e._track))),
        i && (go(e, o), u.updateCommon(e, o)),
        fo(e, o),
        (a = { isEnd: i })
    }
  } else
    i &&
      'single' === s.brushMode &&
      s.removeOnClick &&
      xo(e, t, n) &&
      So(e) &&
      (a = { isEnd: i, removeOnClick: !0 })
  return a
}
function ko(e, t) {
  return 'auto' === e ? t.defaultBrushType : e
}
var Go = {
  mousedown: function (e) {
    if (this._dragging) Bo(this, e)
    else if (!e.target || !e.target.draggable) {
      Oo(e)
      var t = this.group.transformCoordToLocal(e.offsetX, e.offsetY)
      ;(this._creatingCover = null),
        (this._creatingPanel = xo(this, e, t)) &&
          ((this._dragging = !0), (this._track = [t.slice()]))
    }
  },
  mousemove: function (e) {
    var t = e.offsetX,
      n = e.offsetY,
      i = this.group.transformCoordToLocal(t, n)
    if (
      ((function (e, t, n) {
        if (
          e._brushType &&
          !(function (e, t, n) {
            var i = e._zr
            return t < 0 || t > i.getWidth() || n < 0 || n > i.getHeight()
          })(e, t.offsetX, t.offsetY)
        ) {
          var i = e._zr,
            a = e._covers,
            o = xo(e, t, n)
          if (!e._dragging)
            for (var r = 0; r < a.length; r++) {
              var s = a[r].__brushOption
              if (
                o &&
                (!0 === o || s.panelId === o.panelId) &&
                Wo[s.brushType].contain(a[r], n[0], n[1])
              )
                return
            }
          o && i.setCursorStyle('crosshair')
        }
      })(this, e, i),
      this._dragging)
    ) {
      Oo(e)
      var a = zo(this, e, i, !1)
      a && bo(this, a)
    }
  },
  mouseup: function (e) {
    Bo(this, e)
  },
}
function Bo(e, t) {
  if (e._dragging) {
    Oo(t)
    var n = t.offsetX,
      i = t.offsetY,
      a = e.group.transformCoordToLocal(n, i),
      o = zo(e, t, a, !0)
    ;(e._dragging = !1),
      (e._track = []),
      (e._creatingCover = null),
      o && bo(e, o)
  }
}
var Wo = {
  lineX: Fo(0),
  lineY: Fo(1),
  rect: {
    createCover: function (e, t) {
      function n(e) {
        return e
      }
      return Io({ toRectRange: n, fromRectRange: n }, e, t, [
        ['w'],
        ['e'],
        ['n'],
        ['s'],
        ['s', 'e'],
        ['s', 'w'],
        ['n', 'e'],
        ['n', 'w'],
      ])
    },
    getCreatingRange: function (e) {
      var t = wo(e)
      return Co(t[1][0], t[1][1], t[0][0], t[0][1])
    },
    updateCoverShape: function (e, t, n, i) {
      Mo(e, t, n, i)
    },
    updateCommon: Do,
    contain: Vo,
  },
  polygon: {
    createCover: function (e, t) {
      var n = new Ne()
      return n.add(new X({ name: 'main', style: Lo(t), silent: !0 })), n
    },
    getCreatingRange: function (e) {
      return e
    },
    endCreating: function (e, t) {
      t.remove(t.childAt(0)),
        t.add(
          new ie({
            name: 'main',
            draggable: !0,
            drift: O(Po, e, t),
            ondragend: O(bo, e, { isEnd: !0 }),
          })
        )
    },
    updateCoverShape: function (e, t, n, i) {
      t.childAt(0).setShape({ points: Ro(e, t, n) })
    },
    updateCommon: Do,
    contain: Vo,
  },
}
function Fo(e) {
  return {
    createCover: function (t, n) {
      return Io(
        {
          toRectRange: function (t) {
            var n = [t, [0, 100]]
            return e && n.reverse(), n
          },
          fromRectRange: function (t) {
            return t[e]
          },
        },
        t,
        n,
        [
          [['w'], ['e']],
          [['n'], ['s']],
        ][e]
      )
    },
    getCreatingRange: function (t) {
      var n = wo(t)
      return [ao(n[0][e], n[1][e]), oo(n[0][e], n[1][e])]
    },
    updateCoverShape: function (t, n, i, a) {
      var o,
        r = _o(t, n)
      if (true !== r && r.getLinearBrushOtherExtent)
        o = r.getLinearBrushOtherExtent(e)
      else {
        var s = t._zr
        o = [0, [s.getWidth(), s.getHeight()][1 - e]]
      }
      var l = [i, o]
      e && l.reverse(), Mo(t, n, l, a)
    },
    updateCommon: Do,
    contain: Vo,
  }
}
var Yo = ho
function Xo(e) {
  return (
    (e = Zo(e)),
    function (t) {
      return nt(t, e)
    }
  )
}
function Ho(e, t) {
  return (
    (e = Zo(e)),
    function (n) {
      var i = null != t ? t : n,
        a = i ? e.width : e.height,
        o = i ? e.x : e.y
      return [o, o + (a || 0)]
    }
  )
}
function Uo(e, t, n) {
  var i = Zo(e)
  return function (e, a) {
    return i.contain(a[0], a[1]) && !_a(e, t, n)
  }
}
function Zo(e) {
  return pe.create(e)
}
var jo = ['axisLine', 'axisTickLabel', 'axisName']
var qo = (function (e) {
    function n() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.type = n.type), t
    }
    return (
      j(n, e),
      (n.prototype.init = function (t, n) {
        e.prototype.init.apply(this, arguments),
          (this._brushController = new Yo(n.getZr())).on(
            'brush',
            f(this._onBrush, this)
          )
      }),
      (n.prototype.render = function (e, n, i, o) {
        if (
          !(function (e, t, n) {
            return (
              n &&
              'axisAreaSelect' === n.type &&
              t.findComponents({ mainType: 'parallelAxis', query: n })[0] === e
            )
          })(e, n, o)
        ) {
          ;(this.axisModel = e), (this.api = i), this.group.removeAll()
          var r = this._axisGroup
          if (
            ((this._axisGroup = new Ne()),
            this.group.add(this._axisGroup),
            e.get('show'))
          ) {
            var s = (function (e, t) {
                return t.getComponent('parallel', e.get('parallelIndex'))
              })(e, n),
              l = s.coordinateSystem,
              u = e.getAreaSelectStyle(),
              d = u.width,
              c = e.axis.dim,
              h = l.getAxisLayout(c),
              p = a({ strokeContainThreshold: d }, h),
              g = new ee(e, p)
            t(jo, g.add, g),
              this._axisGroup.add(g.getGroup()),
              this._refreshBrushController(p, u, e, s, d, i),
              it(r, this._axisGroup, e)
          }
        }
      }),
      (n.prototype._refreshBrushController = function (e, t, n, a, o, r) {
        var s = n.axis.getExtent(),
          l = s[1] - s[0],
          u = Math.min(30, 0.1 * Math.abs(l)),
          d = pe.create({ x: s[0], y: -o / 2, width: l, height: o })
        ;(d.x -= u),
          (d.width += 2 * u),
          this._brushController
            .mount({
              enableGlobalPan: !0,
              rotation: e.rotation,
              x: e.position[0],
              y: e.position[1],
            })
            .setPanels([
              {
                panelId: 'pl',
                clipPath: Xo(d),
                isTargetByCursor: Uo(d, r, a),
                getLinearBrushOtherExtent: Ho(d, 0),
              },
            ])
            .enableBrush({
              brushType: 'lineX',
              brushStyle: t,
              removeOnClick: !0,
            })
            .updateCovers(
              (function (e) {
                var t = e.axis
                return i(e.activeIntervals, function (e) {
                  return {
                    brushType: 'lineX',
                    panelId: 'pl',
                    range: [t.dataToCoord(e[0], !0), t.dataToCoord(e[1], !0)],
                  }
                })
              })(n)
            )
      }),
      (n.prototype._onBrush = function (e) {
        var t = e.areas,
          n = this.axisModel,
          a = n.axis,
          o = i(t, function (e) {
            return [
              a.coordToData(e.range[0], !0),
              a.coordToData(e.range[1], !0),
            ]
          })
        ;(!n.option.realtime === e.isEnd || e.removeOnClick) &&
          this.api.dispatchAction({
            type: 'axisAreaSelect',
            parallelAxisId: n.id,
            intervals: o,
          })
      }),
      (n.prototype.dispose = function () {
        this._brushController.dispose()
      }),
      (n.type = 'parallelAxis'),
      n
    )
  })(oe),
  Jo = { type: 'axisAreaSelect', event: 'axisAreaSelected' }
var Ko = {
  type: 'value',
  areaSelectStyle: {
    width: 20,
    borderWidth: 1,
    borderColor: 'rgba(160,197,232)',
    color: 'rgba(160,197,232)',
    opacity: 0.3,
  },
  realtime: !0,
  z: 10,
}
function Qo(e) {
  e.registerComponentView(Ga),
    e.registerComponentModel(Ba),
    e.registerCoordinateSystem('parallel', to),
    e.registerPreprocessor(Oa),
    e.registerComponentModel(io),
    e.registerComponentView(qo),
    at(e, 'parallel', io, Ko),
    (function (e) {
      e.registerAction(Jo, function (e, t) {
        t.eachComponent({ mainType: 'parallelAxis', query: e }, function (t) {
          t.axis.model.setActiveIntervals(e.intervals)
        })
      }),
        e.registerAction('parallelAxisExpand', function (e, t) {
          t.eachComponent({ mainType: 'parallel', query: e }, function (t) {
            t.setAxisExpand(e)
          })
        })
    })(e)
}
function $o(e, t) {
  t &&
    ((t.font = t.textFont || t.font),
    ot(t, 'textStrokeWidth') && (e.lineWidth = t.textStrokeWidth),
    ot(t, 'textAlign') && (e.align = t.textAlign),
    ot(t, 'textVerticalAlign') && (e.verticalAlign = t.textVerticalAlign),
    ot(t, 'textLineHeight') && (e.lineHeight = t.textLineHeight),
    ot(t, 'textWidth') && (e.width = t.textWidth),
    ot(t, 'textHeight') && (e.height = t.textHeight),
    ot(t, 'textBackgroundColor') && (e.backgroundColor = t.textBackgroundColor),
    ot(t, 'textPadding') && (e.padding = t.textPadding),
    ot(t, 'textBorderColor') && (e.borderColor = t.textBorderColor),
    ot(t, 'textBorderWidth') && (e.borderWidth = t.textBorderWidth),
    ot(t, 'textBorderRadius') && (e.borderRadius = t.textBorderRadius),
    ot(t, 'textBoxShadowColor') && (e.shadowColor = t.textBoxShadowColor),
    ot(t, 'textBoxShadowBlur') && (e.shadowBlur = t.textBoxShadowBlur),
    ot(t, 'textBoxShadowOffsetX') && (e.shadowOffsetX = t.textBoxShadowOffsetX),
    ot(t, 'textBoxShadowOffsetY') && (e.shadowOffsetY = t.textBoxShadowOffsetY))
}
function er(e, n, i) {
  var a = e
  ;(a.textPosition = a.textPosition || i.position || 'inside'),
    null != i.offset && (a.textOffset = i.offset),
    null != i.rotation && (a.textRotation = i.rotation),
    null != i.distance && (a.textDistance = i.distance)
  var o = a.textPosition.indexOf('inside') >= 0,
    r = e.fill || '#000'
  tr(a, n)
  var s = null == a.textFill
  return (
    o
      ? s &&
        ((a.textFill = i.insideFill || '#fff'),
        !a.textStroke && i.insideStroke && (a.textStroke = i.insideStroke),
        !a.textStroke && (a.textStroke = r),
        null == a.textStrokeWidth && (a.textStrokeWidth = 2))
      : (s && (a.textFill = e.fill || i.outsideFill || '#000'),
        !a.textStroke && i.outsideStroke && (a.textStroke = i.outsideStroke)),
    (a.text = n.text),
    (a.rich = n.rich),
    t(n.rich, function (e) {
      tr(e, e)
    }),
    a
  )
}
function tr(e, t) {
  t &&
    (ot(t, 'fill') && (e.textFill = t.fill),
    ot(t, 'stroke') && (e.textStroke = t.fill),
    ot(t, 'lineWidth') && (e.textStrokeWidth = t.lineWidth),
    ot(t, 'font') && (e.font = t.font),
    ot(t, 'fontStyle') && (e.fontStyle = t.fontStyle),
    ot(t, 'fontWeight') && (e.fontWeight = t.fontWeight),
    ot(t, 'fontSize') && (e.fontSize = t.fontSize),
    ot(t, 'fontFamily') && (e.fontFamily = t.fontFamily),
    ot(t, 'align') && (e.textAlign = t.align),
    ot(t, 'verticalAlign') && (e.textVerticalAlign = t.verticalAlign),
    ot(t, 'lineHeight') && (e.textLineHeight = t.lineHeight),
    ot(t, 'width') && (e.textWidth = t.width),
    ot(t, 'height') && (e.textHeight = t.height),
    ot(t, 'backgroundColor') && (e.textBackgroundColor = t.backgroundColor),
    ot(t, 'padding') && (e.textPadding = t.padding),
    ot(t, 'borderColor') && (e.textBorderColor = t.borderColor),
    ot(t, 'borderWidth') && (e.textBorderWidth = t.borderWidth),
    ot(t, 'borderRadius') && (e.textBorderRadius = t.borderRadius),
    ot(t, 'shadowColor') && (e.textBoxShadowColor = t.shadowColor),
    ot(t, 'shadowBlur') && (e.textBoxShadowBlur = t.shadowBlur),
    ot(t, 'shadowOffsetX') && (e.textBoxShadowOffsetX = t.shadowOffsetX),
    ot(t, 'shadowOffsetY') && (e.textBoxShadowOffsetY = t.shadowOffsetY),
    ot(t, 'textShadowColor') && (e.textShadowColor = t.textShadowColor),
    ot(t, 'textShadowBlur') && (e.textShadowBlur = t.textShadowBlur),
    ot(t, 'textShadowOffsetX') && (e.textShadowOffsetX = t.textShadowOffsetX),
    ot(t, 'textShadowOffsetY') && (e.textShadowOffsetY = t.textShadowOffsetY))
}
var nr = t,
  ir = S,
  ar = (function () {
    function e(n) {
      var i = n.mappingMethod,
        a = n.type,
        o = (this.option = _(n))
      ;(this.type = a), (this.mappingMethod = i), (this._normalizeData = gr[i])
      var r = e.visualHandlers[a]
      ;(this.applyVisual = r.applyVisual),
        (this.getColorMapper = r.getColorMapper),
        (this._normalizedToVisual = r._normalizedToVisual[i]),
        'piecewise' === i
          ? (or(o),
            (function (e) {
              var n = e.pieceList
              ;(e.hasSpecialVisual = !1),
                t(n, function (t, n) {
                  ;(t.originIndex = n),
                    null != t.visual && (e.hasSpecialVisual = !0)
                })
            })(o))
          : 'category' === i
          ? o.categories
            ? (function (e) {
                var t = e.categories,
                  n = (e.categoryMap = {}),
                  i = e.visual
                if (
                  (nr(t, function (e, t) {
                    n[e] = t
                  }),
                  !g(i))
                ) {
                  var a = []
                  S(i)
                    ? nr(i, function (e, t) {
                        var i = n[t]
                        a[null != i ? i : -1] = e
                      })
                    : (a[-1] = i),
                    (i = pr(e, a))
                }
                for (var o = t.length - 1; o >= 0; o--)
                  null == i[o] && (delete n[t[o]], t.pop())
              })(o)
            : or(o, !0)
          : (rt('linear' !== i || o.dataExtent), or(o))
    }
    return (
      (e.prototype.mapValueToVisual = function (e) {
        var t = this._normalizeData(e)
        return this._normalizedToVisual(t, e)
      }),
      (e.prototype.getNormalizer = function () {
        return f(this._normalizeData, this)
      }),
      (e.listVisualTypes = function () {
        return y(e.visualHandlers)
      }),
      (e.isValidType = function (t) {
        return e.visualHandlers.hasOwnProperty(t)
      }),
      (e.eachVisual = function (e, n, i) {
        S(e) ? t(e, n, i) : n.call(i, e)
      }),
      (e.mapVisual = function (t, n, i) {
        var a,
          o = g(t) ? [] : S(t) ? {} : ((a = !0), null)
        return (
          e.eachVisual(t, function (e, t) {
            var r = n.call(i, e, t)
            a ? (o = r) : (o[t] = r)
          }),
          o
        )
      }),
      (e.retrieveVisuals = function (t) {
        var n,
          i = {}
        return (
          t &&
            nr(e.visualHandlers, function (e, a) {
              t.hasOwnProperty(a) && ((i[a] = t[a]), (n = !0))
            }),
          n ? i : null
        )
      }),
      (e.prepareVisualTypes = function (e) {
        if (g(e)) e = e.slice()
        else {
          if (!ir(e)) return []
          var t = []
          nr(e, function (e, n) {
            t.push(n)
          }),
            (e = t)
        }
        return (
          e.sort(function (e, t) {
            return 'color' === t && 'color' !== e && 0 === e.indexOf('color')
              ? 1
              : -1
          }),
          e
        )
      }),
      (e.dependsOn = function (e, t) {
        return 'color' === t ? !(!e || 0 !== e.indexOf(t)) : e === t
      }),
      (e.findPieceIndex = function (e, t, n) {
        for (var i, a = 1 / 0, o = 0, r = t.length; o < r; o++) {
          var s = t[o].value
          if (null != s) {
            if (s === e || ('string' == typeof s && s === e + '')) return o
            n && c(s, o)
          }
        }
        for (o = 0, r = t.length; o < r; o++) {
          var l = t[o],
            u = l.interval,
            d = l.close
          if (u) {
            if (u[0] === -1 / 0) {
              if (fr(d[1], e, u[1])) return o
            } else if (u[1] === 1 / 0) {
              if (fr(d[0], u[0], e)) return o
            } else if (fr(d[0], u[0], e) && fr(d[1], e, u[1])) return o
            n && c(u[0], o), n && c(u[1], o)
          }
        }
        if (n) return e === 1 / 0 ? t.length - 1 : e === -1 / 0 ? 0 : i
        function c(t, n) {
          var o = Math.abs(t - e)
          o < a && ((a = o), (i = n))
        }
      }),
      (e.visualHandlers = {
        color: {
          applyVisual: lr('color'),
          getColorMapper: function () {
            var e = this.option
            return f(
              'category' === e.mappingMethod
                ? function (e, t) {
                    return !t && (e = this._normalizeData(e)), ur.call(this, e)
                  }
                : function (t, n, i) {
                    var a = !!i
                    return (
                      !n && (t = this._normalizeData(t)),
                      (i = st(t, e.parsedVisual, i)),
                      a ? i : lt(i, 'rgba')
                    )
                  },
              this
            )
          },
          _normalizedToVisual: {
            linear: function (e) {
              return lt(st(e, this.option.parsedVisual), 'rgba')
            },
            category: ur,
            piecewise: function (e, t) {
              var n = hr.call(this, t)
              return (
                null == n && (n = lt(st(e, this.option.parsedVisual), 'rgba')),
                n
              )
            },
            fixed: dr,
          },
        },
        colorHue: rr(function (e, t) {
          return dt(e, t)
        }),
        colorSaturation: rr(function (e, t) {
          return dt(e, null, t)
        }),
        colorLightness: rr(function (e, t) {
          return dt(e, null, null, t)
        }),
        colorAlpha: rr(function (e, t) {
          return ct(e, t)
        }),
        decal: {
          applyVisual: lr('decal'),
          _normalizedToVisual: {
            linear: null,
            category: ur,
            piecewise: null,
            fixed: null,
          },
        },
        opacity: {
          applyVisual: lr('opacity'),
          _normalizedToVisual: cr([0, 1]),
        },
        liftZ: {
          applyVisual: lr('liftZ'),
          _normalizedToVisual: {
            linear: dr,
            category: dr,
            piecewise: dr,
            fixed: dr,
          },
        },
        symbol: {
          applyVisual: function (e, t, n) {
            n('symbol', this.mapValueToVisual(e))
          },
          _normalizedToVisual: {
            linear: sr,
            category: ur,
            piecewise: function (e, t) {
              var n = hr.call(this, t)
              return null == n && (n = sr.call(this, e)), n
            },
            fixed: dr,
          },
        },
        symbolSize: {
          applyVisual: lr('symbolSize'),
          _normalizedToVisual: cr([0, 1]),
        },
      }),
      e
    )
  })()
function or(e, t) {
  var n = e.visual,
    i = []
  S(n)
    ? nr(n, function (e) {
        i.push(e)
      })
    : null != n && i.push(n)
  t ||
    1 !== i.length ||
    { color: 1, symbol: 1 }.hasOwnProperty(e.type) ||
    (i[1] = i[0]),
    pr(e, i)
}
function rr(e) {
  return {
    applyVisual: function (t, n, i) {
      var a = this.mapValueToVisual(t)
      i('color', e(n('color'), a))
    },
    _normalizedToVisual: cr([0, 1]),
  }
}
function sr(e) {
  var t = this.option.visual
  return t[Math.round(ut(e, [0, 1], [0, t.length - 1], !0))] || {}
}
function lr(e) {
  return function (t, n, i) {
    i(e, this.mapValueToVisual(t))
  }
}
function ur(e) {
  var t = this.option.visual
  return t[this.option.loop && -1 !== e ? e % t.length : e]
}
function dr() {
  return this.option.visual[0]
}
function cr(e) {
  return {
    linear: function (t) {
      return ut(t, e, this.option.visual, !0)
    },
    category: ur,
    piecewise: function (t, n) {
      var i = hr.call(this, n)
      return null == i && (i = ut(t, e, this.option.visual, !0)), i
    },
    fixed: dr,
  }
}
function hr(e) {
  var t = this.option,
    n = t.pieceList
  if (t.hasSpecialVisual) {
    var i = n[ar.findPieceIndex(e, n)]
    if (i && i.visual) return i.visual[this.type]
  }
}
function pr(e, t) {
  return (
    (e.visual = t),
    'color' === e.type &&
      (e.parsedVisual = i(t, function (e) {
        return ht(e)
      })),
    t
  )
}
var gr = {
  linear: function (e) {
    return ut(e, this.option.dataExtent, [0, 1], !0)
  },
  piecewise: function (e) {
    var t = this.option.pieceList,
      n = ar.findPieceIndex(e, t, !0)
    if (null != n) return ut(n, [0, t.length - 1], [0, 1], !0)
  },
  category: function (e) {
    var t = this.option.categories ? this.option.categoryMap[e] : e
    return null == t ? -1 : t
  },
  fixed: pt,
}
function fr(e, t, n) {
  return e ? t <= n : t < n
}
var yr = ar
function mr(e, t) {
  var n = e.mapDimensionsAll('defaultedLabel'),
    i = n.length
  if (1 === i) {
    var a = gt(e, t, n[0])
    return null != a ? a + '' : null
  }
  if (i) {
    for (var o = [], r = 0; r < n.length; r++) o.push(gt(e, t, n[r]))
    return o.join(' ')
  }
}
function vr(e, t) {
  var n = e.mapDimensionsAll('defaultedLabel')
  if (!g(t)) return t + ''
  for (var i = [], a = 0; a < n.length; a++) {
    var o = e.getDimensionIndex(n[a])
    o >= 0 && i.push(t[o])
  }
  return i.join(' ')
}
function xr(e, t) {
  this.parent.drift(e, t)
}
var _r = (function (e) {
  function t(t, n, i, a) {
    var o = e.call(this) || this
    return o.updateData(t, n, i, a), o
  }
  return (
    j(t, e),
    (t.prototype._createSymbol = function (e, t, n, i, a) {
      this.removeAll()
      var o = ft(e, -1, -1, 2, 2, null, a)
      o.attr({ z2: 100, culling: !0, scaleX: i[0] / 2, scaleY: i[1] / 2 }),
        (o.drift = xr),
        (this._symbolType = e),
        this.add(o)
    }),
    (t.prototype.stopSymbolAnimation = function (e) {
      this.childAt(0).stopAnimation(null, e)
    }),
    (t.prototype.getSymbolType = function () {
      return this._symbolType
    }),
    (t.prototype.getSymbolPath = function () {
      return this.childAt(0)
    }),
    (t.prototype.highlight = function () {
      yt(this.childAt(0))
    }),
    (t.prototype.downplay = function () {
      mt(this.childAt(0))
    }),
    (t.prototype.setZ = function (e, t) {
      var n = this.childAt(0)
      ;(n.zlevel = e), (n.z = t)
    }),
    (t.prototype.setDraggable = function (e) {
      var t = this.childAt(0)
      ;(t.draggable = e), (t.cursor = e ? 'move' : t.cursor)
    }),
    (t.prototype.updateData = function (e, n, i, a) {
      this.silent = !1
      var o = e.getItemVisual(n, 'symbol') || 'circle',
        r = e.hostModel,
        s = t.getSymbolSize(e, n),
        l = o !== this._symbolType,
        u = a && a.disableAnimation
      if (l) {
        var d = e.getItemVisual(n, 'symbolKeepAspect')
        this._createSymbol(o, e, n, s, d)
      } else {
        ;(h = this.childAt(0)).silent = !1
        var c = { scaleX: s[0] / 2, scaleY: s[1] / 2 }
        u ? h.attr(c) : Ee(h, c, r, n), vt(h)
      }
      if ((this._updateCommon(e, n, s, i, a), l)) {
        var h = this.childAt(0)
        if (!u) {
          c = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: { opacity: h.style.opacity },
          }
          ;(h.scaleX = h.scaleY = 0), (h.style.opacity = 0), xt(h, c, r, n)
        }
      }
      u && this.childAt(0).stopAnimation('remove'), (this._seriesModel = r)
    }),
    (t.prototype._updateCommon = function (e, t, n, i, o) {
      var r,
        s,
        l,
        u,
        d,
        c,
        h,
        p,
        g = this.childAt(0),
        f = e.hostModel
      if (
        (i &&
          ((r = i.emphasisItemStyle),
          (s = i.blurItemStyle),
          (l = i.selectItemStyle),
          (u = i.focus),
          (d = i.blurScope),
          (c = i.labelStatesModels),
          (h = i.hoverScale),
          (p = i.cursorStyle)),
        !i || e.hasItemOption)
      ) {
        var y = i && i.itemModel ? i.itemModel : e.getItemModel(t),
          m = y.getModel('emphasis')
        ;(r = m.getModel('itemStyle').getItemStyle()),
          (l = y.getModel(['select', 'itemStyle']).getItemStyle()),
          (s = y.getModel(['blur', 'itemStyle']).getItemStyle()),
          (u = m.get('focus')),
          (d = m.get('blurScope')),
          (c = Ge(y)),
          (h = m.getShallow('scale')),
          (p = y.getShallow('cursor'))
      }
      var v = e.getItemVisual(t, 'symbolRotate')
      g.attr('rotation', ((v || 0) * Math.PI) / 180 || 0)
      var x = _t(e.getItemVisual(t, 'symbolOffset'), n)
      x && ((g.x = x[0]), (g.y = x[1])), p && g.attr('cursor', p)
      var _ = e.getItemVisual(t, 'style'),
        S = _.fill
      if (g instanceof St) {
        var b = g.style
        g.useStyle(
          a(
            {
              image: b.image,
              x: b.x,
              y: b.y,
              width: b.width,
              height: b.height,
            },
            _
          )
        )
      } else
        g.__isEmptyBrush ? g.useStyle(a({}, _)) : g.useStyle(_),
          (g.style.decal = null),
          g.setColor(S, o && o.symbolInnerColor),
          (g.style.strokeNoScale = !0)
      var w = e.getItemVisual(t, 'liftZ'),
        I = this._z2
      null != w
        ? null == I && ((this._z2 = g.z2), (g.z2 += w))
        : null != I && ((g.z2 = I), (this._z2 = null))
      var M = o && o.useNameLabel
      ke(g, c, {
        labelFetcher: f,
        labelDataIndex: t,
        defaultText: function (t) {
          return M ? e.getName(t) : mr(e, t)
        },
        inheritColor: S,
        defaultOpacity: _.opacity,
      }),
        (this._sizeX = n[0] / 2),
        (this._sizeY = n[1] / 2)
      var D = g.ensureState('emphasis')
      if (
        ((D.style = r),
        (g.ensureState('select').style = l),
        (g.ensureState('blur').style = s),
        h)
      ) {
        var A = Math.max(1.1, 3 / this._sizeY)
        ;(D.scaleX = this._sizeX * A), (D.scaleY = this._sizeY * A)
      }
      this.setSymbolScale(1), Fe(this, u, d)
    }),
    (t.prototype.setSymbolScale = function (e) {
      this.scaleX = this.scaleY = e
    }),
    (t.prototype.fadeOut = function (e, t) {
      var n = this.childAt(0),
        i = this._seriesModel,
        a = Be(this).dataIndex,
        o = t && t.animation
      if (((this.silent = n.silent = !0), t && t.fadeLabel)) {
        var r = n.getTextContent()
        r &&
          bt(r, { style: { opacity: 0 } }, i, {
            dataIndex: a,
            removeOpt: o,
            cb: function () {
              n.removeTextContent()
            },
          })
      } else n.removeTextContent()
      bt(n, { style: { opacity: 0 }, scaleX: 0, scaleY: 0 }, i, {
        dataIndex: a,
        cb: e,
        removeOpt: o,
      })
    }),
    (t.getSymbolSize = function (e, t) {
      return wt(e.getItemVisual(t, 'symbolSize'))
    }),
    t
  )
})(Ne)
function Sr(e, t, n, i) {
  return (
    t &&
    !isNaN(t[0]) &&
    !isNaN(t[1]) &&
    !(i.isIgnore && i.isIgnore(n)) &&
    !(i.clipShape && !i.clipShape.contain(t[0], t[1])) &&
    'none' !== e.getItemVisual(n, 'symbol')
  )
}
function br(e) {
  return null == e || S(e) || (e = { isIgnore: e }), e || {}
}
function wr(e) {
  var t = e.hostModel,
    n = t.getModel('emphasis')
  return {
    emphasisItemStyle: n.getModel('itemStyle').getItemStyle(),
    blurItemStyle: t.getModel(['blur', 'itemStyle']).getItemStyle(),
    selectItemStyle: t.getModel(['select', 'itemStyle']).getItemStyle(),
    focus: n.get('focus'),
    blurScope: n.get('blurScope'),
    hoverScale: n.get('scale'),
    labelStatesModels: Ge(t),
    cursorStyle: t.get('cursor'),
  }
}
var Ir = (function () {
    function e(e) {
      ;(this.group = new Ne()), (this._SymbolCtor = e || _r)
    }
    return (
      (e.prototype.updateData = function (e, t) {
        t = br(t)
        var n = this.group,
          i = e.hostModel,
          a = this._data,
          o = this._SymbolCtor,
          r = t.disableAnimation,
          s = wr(e),
          l = { disableAnimation: r },
          u =
            t.getSymbolPoint ||
            function (t) {
              return e.getItemLayout(t)
            }
        a || n.removeAll(),
          e
            .diff(a)
            .add(function (i) {
              var a = u(i)
              if (Sr(e, a, i, t)) {
                var r = new o(e, i, s, l)
                r.setPosition(a), e.setItemGraphicEl(i, r), n.add(r)
              }
            })
            .update(function (d, c) {
              var h = a.getItemGraphicEl(c),
                p = u(d)
              if (Sr(e, p, d, t)) {
                var g = e.getItemVisual(d, 'symbol') || 'circle',
                  f = h && h.getSymbolType && h.getSymbolType()
                if (!h || (f && f !== g))
                  n.remove(h), (h = new o(e, d, s, l)).setPosition(p)
                else {
                  h.updateData(e, d, s, l)
                  var y = { x: p[0], y: p[1] }
                  r ? h.attr(y) : Ee(h, y, i)
                }
                n.add(h), e.setItemGraphicEl(d, h)
              } else n.remove(h)
            })
            .remove(function (e) {
              var t = a.getItemGraphicEl(e)
              t &&
                t.fadeOut(function () {
                  n.remove(t)
                })
            })
            .execute(),
          (this._getSymbolPoint = u),
          (this._data = e)
      }),
      (e.prototype.isPersistent = function () {
        return !0
      }),
      (e.prototype.updateLayout = function () {
        var e = this,
          t = this._data
        t &&
          t.eachItemGraphicEl(function (t, n) {
            var i = e._getSymbolPoint(n)
            t.setPosition(i), t.markRedraw()
          })
      }),
      (e.prototype.incrementalPrepareUpdate = function (e) {
        ;(this._seriesScope = wr(e)),
          (this._data = null),
          this.group.removeAll()
      }),
      (e.prototype.incrementalUpdate = function (e, t, n) {
        function i(e) {
          e.isGroup ||
            ((e.incremental = !0), (e.ensureState('emphasis').hoverLayer = !0))
        }
        n = br(n)
        for (var a = e.start; a < e.end; a++) {
          var o = t.getItemLayout(a)
          if (Sr(t, o, a, n)) {
            var r = new this._SymbolCtor(t, a, this._seriesScope)
            r.traverse(i),
              r.setPosition(o),
              this.group.add(r),
              t.setItemGraphicEl(a, r)
          }
        }
      }),
      (e.prototype.remove = function (e) {
        var t = this.group,
          n = this._data
        n && e
          ? n.eachItemGraphicEl(function (e) {
              e.fadeOut(function () {
                t.remove(e)
              })
            })
          : t.removeAll()
      }),
      e
    )
  })(),
  Mr = It.prototype,
  Dr = Mt.prototype,
  Ar = function () {
    ;(this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.percent = 1)
  }
function Lr(e) {
  return isNaN(+e.cpx1) || isNaN(+e.cpy1)
}
!(function (e) {
  function t() {
    return (null !== e && e.apply(this, arguments)) || this
  }
  j(t, e)
})(Ar)
var Cr = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'ec-line'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (t.prototype.getDefaultShape = function () {
        return new Ar()
      }),
      (t.prototype.buildPath = function (e, t) {
        Lr(t) ? Mr.buildPath.call(this, e, t) : Dr.buildPath.call(this, e, t)
      }),
      (t.prototype.pointAt = function (e) {
        return Lr(this.shape)
          ? Mr.pointAt.call(this, e)
          : Dr.pointAt.call(this, e)
      }),
      (t.prototype.tangentAt = function (e) {
        var t = this.shape,
          n = Lr(t) ? [t.x2 - t.x1, t.y2 - t.y1] : Dr.tangentAt.call(this, e)
        return Dt(n, n)
      }),
      t
    )
  })(At),
  Tr = ['fromSymbol', 'toSymbol']
function Nr(e) {
  return '_' + e + 'Type'
}
function Pr(e, t, n) {
  var i = t.getItemVisual(n, e)
  if (i && 'none' !== i) {
    var a = t.getItemVisual(n, e + 'Size'),
      o = t.getItemVisual(n, e + 'Rotate'),
      r = t.getItemVisual(n, e + 'Offset'),
      s = t.getItemVisual(n, e + 'KeepAspect'),
      l = wt(a),
      u = _t(r || 0, l),
      d = ft(i, -l[0] / 2 + u[0], -l[1] / 2 + u[1], l[0], l[1], null, s)
    return (
      (d.__specifiedRotation =
        null == o || isNaN(o) ? void 0 : (+o * Math.PI) / 180 || 0),
      (d.name = e),
      d
    )
  }
}
function Er(e, t) {
  ;(e.x1 = t[0][0]),
    (e.y1 = t[0][1]),
    (e.x2 = t[1][0]),
    (e.y2 = t[1][1]),
    (e.percent = 1)
  var n = t[2]
  n ? ((e.cpx1 = n[0]), (e.cpy1 = n[1])) : ((e.cpx1 = NaN), (e.cpy1 = NaN))
}
var Rr = (function (e) {
  function n(t, n, i) {
    var a = e.call(this) || this
    return a._createLine(t, n, i), a
  }
  return (
    j(n, e),
    (n.prototype._createLine = function (e, n, i) {
      var a = e.hostModel,
        o = (function (e) {
          var t = new Cr({ name: 'line', subPixelOptimize: !0 })
          return Er(t.shape, e), t
        })(e.getItemLayout(n))
      ;(o.shape.percent = 0),
        xt(o, { shape: { percent: 1 } }, a, n),
        this.add(o),
        t(
          Tr,
          function (t) {
            var i = Pr(t, e, n)
            this.add(i), (this[Nr(t)] = e.getItemVisual(n, t))
          },
          this
        ),
        this._updateCommonStl(e, n, i)
    }),
    (n.prototype.updateData = function (e, n, i) {
      var a = e.hostModel,
        o = this.childOfName('line'),
        r = e.getItemLayout(n),
        s = { shape: {} }
      Er(s.shape, r),
        Ee(o, s, a, n),
        t(
          Tr,
          function (t) {
            var i = e.getItemVisual(n, t),
              a = Nr(t)
            if (this[a] !== i) {
              this.remove(this.childOfName(t))
              var o = Pr(t, e, n)
              this.add(o)
            }
            this[a] = i
          },
          this
        ),
        this._updateCommonStl(e, n, i)
    }),
    (n.prototype.getLinePath = function () {
      return this.childAt(0)
    }),
    (n.prototype._updateCommonStl = function (e, n, i) {
      var a = e.hostModel,
        o = this.childOfName('line'),
        r = i && i.emphasisLineStyle,
        s = i && i.blurLineStyle,
        l = i && i.selectLineStyle,
        u = i && i.labelStatesModels
      if (!i || e.hasItemOption) {
        var d = e.getItemModel(n)
        ;(r = d.getModel(['emphasis', 'lineStyle']).getLineStyle()),
          (s = d.getModel(['blur', 'lineStyle']).getLineStyle()),
          (l = d.getModel(['select', 'lineStyle']).getLineStyle()),
          (u = Ge(d))
      }
      var c = e.getItemVisual(n, 'style'),
        h = c.stroke
      o.useStyle(c),
        (o.style.fill = null),
        (o.style.strokeNoScale = !0),
        (o.ensureState('emphasis').style = r),
        (o.ensureState('blur').style = s),
        (o.ensureState('select').style = l),
        t(
          Tr,
          function (e) {
            var t = this.childOfName(e)
            if (t) {
              t.setColor(h), (t.style.opacity = c.opacity)
              for (var n = 0; n < H.length; n++) {
                var i = H[n],
                  a = o.getState(i)
                if (a) {
                  var r = a.style || {},
                    s = t.ensureState(i),
                    l = s.style || (s.style = {})
                  null != r.stroke &&
                    (l[t.__isEmptyBrush ? 'stroke' : 'fill'] = r.stroke),
                    null != r.opacity && (l.opacity = r.opacity)
                }
              }
              t.markRedraw()
            }
          },
          this
        )
      var p = a.getRawValue(n)
      ke(this, u, {
        labelDataIndex: n,
        labelFetcher: {
          getFormattedLabel: function (t, n) {
            return a.getFormattedLabel(t, n, e.dataType)
          },
        },
        inheritColor: h || '#000',
        defaultOpacity: c.opacity,
        defaultText: (null == p ? e.getName(n) : isFinite(p) ? ce(p) : p) + '',
      })
      var f = this.getTextContent()
      if (f) {
        var y = u.normal
        ;(f.__align = f.style.align),
          (f.__verticalAlign = f.style.verticalAlign),
          (f.__position = y.get('position') || 'middle')
        var m = y.get('distance')
        g(m) || (m = [m, m]), (f.__labelDistance = m)
      }
      this.setTextConfig({ position: null, local: !0, inside: !1 }), Fe(this)
    }),
    (n.prototype.highlight = function () {
      yt(this)
    }),
    (n.prototype.downplay = function () {
      mt(this)
    }),
    (n.prototype.updateLayout = function (e, t) {
      this.setLinePoints(e.getItemLayout(t))
    }),
    (n.prototype.setLinePoints = function (e) {
      var t = this.childOfName('line')
      Er(t.shape, e), t.dirty()
    }),
    (n.prototype.beforeUpdate = function () {
      var e = this,
        t = e.childOfName('fromSymbol'),
        n = e.childOfName('toSymbol'),
        i = e.getTextContent()
      if (t || n || (i && !i.ignore)) {
        for (var a = 1, o = this.parent; o; )
          o.scaleX && (a /= o.scaleX), (o = o.parent)
        var r = e.childOfName('line')
        if (this.__dirty || r.__dirty) {
          var s = r.shape.percent,
            l = r.pointAt(0),
            u = r.pointAt(s),
            d = Lt([], u, l)
          if (
            (Dt(d, d),
            t &&
              (t.setPosition(l),
              w(t, 0),
              (t.scaleX = t.scaleY = a * s),
              t.markRedraw()),
            n &&
              (n.setPosition(u),
              w(n, 1),
              (n.scaleX = n.scaleY = a * s),
              n.markRedraw()),
            i && !i.ignore)
          ) {
            ;(i.x = i.y = 0), (i.originX = i.originY = 0)
            var c = void 0,
              h = void 0,
              p = i.__labelDistance,
              g = p[0] * a,
              f = p[1] * a,
              y = s / 2,
              m = r.tangentAt(y),
              v = [m[1], -m[0]],
              x = r.pointAt(y)
            v[1] > 0 && ((v[0] = -v[0]), (v[1] = -v[1]))
            var _ = m[0] < 0 ? -1 : 1
            if ('start' !== i.__position && 'end' !== i.__position) {
              var S = -Math.atan2(m[1], m[0])
              u[0] < l[0] && (S = Math.PI + S), (i.rotation = S)
            }
            var b = void 0
            switch (i.__position) {
              case 'insideStartTop':
              case 'insideMiddleTop':
              case 'insideEndTop':
              case 'middle':
                ;(b = -f), (h = 'bottom')
                break
              case 'insideStartBottom':
              case 'insideMiddleBottom':
              case 'insideEndBottom':
                ;(b = f), (h = 'top')
                break
              default:
                ;(b = 0), (h = 'middle')
            }
            switch (i.__position) {
              case 'end':
                ;(i.x = d[0] * g + u[0]),
                  (i.y = d[1] * f + u[1]),
                  (c = d[0] > 0.8 ? 'left' : d[0] < -0.8 ? 'right' : 'center'),
                  (h = d[1] > 0.8 ? 'top' : d[1] < -0.8 ? 'bottom' : 'middle')
                break
              case 'start':
                ;(i.x = -d[0] * g + l[0]),
                  (i.y = -d[1] * f + l[1]),
                  (c = d[0] > 0.8 ? 'right' : d[0] < -0.8 ? 'left' : 'center'),
                  (h = d[1] > 0.8 ? 'bottom' : d[1] < -0.8 ? 'top' : 'middle')
                break
              case 'insideStartTop':
              case 'insideStart':
              case 'insideStartBottom':
                ;(i.x = g * _ + l[0]),
                  (i.y = l[1] + b),
                  (c = m[0] < 0 ? 'right' : 'left'),
                  (i.originX = -g * _),
                  (i.originY = -b)
                break
              case 'insideMiddleTop':
              case 'insideMiddle':
              case 'insideMiddleBottom':
              case 'middle':
                ;(i.x = x[0]),
                  (i.y = x[1] + b),
                  (c = 'center'),
                  (i.originY = -b)
                break
              case 'insideEndTop':
              case 'insideEnd':
              case 'insideEndBottom':
                ;(i.x = -g * _ + u[0]),
                  (i.y = u[1] + b),
                  (c = m[0] >= 0 ? 'right' : 'left'),
                  (i.originX = g * _),
                  (i.originY = -b)
            }
            ;(i.scaleX = i.scaleY = a),
              i.setStyle({
                verticalAlign: i.__verticalAlign || h,
                align: i.__align || c,
              })
          }
        }
      }
      function w(e, t) {
        var n = e.__specifiedRotation
        if (null == n) {
          var i = r.tangentAt(t)
          e.attr(
            'rotation',
            ((1 === t ? -1 : 1) * Math.PI) / 2 - Math.atan2(i[1], i[0])
          )
        } else e.attr('rotation', n)
      }
    }),
    n
  )
})(Ne)
function Or(e) {
  var t = e.hostModel
  return {
    lineStyle: t.getModel('lineStyle').getLineStyle(),
    emphasisLineStyle: t.getModel(['emphasis', 'lineStyle']).getLineStyle(),
    blurLineStyle: t.getModel(['blur', 'lineStyle']).getLineStyle(),
    selectLineStyle: t.getModel(['select', 'lineStyle']).getLineStyle(),
    labelStatesModels: Ge(t),
  }
}
function Vr(e) {
  return isNaN(e[0]) || isNaN(e[1])
}
function zr(e) {
  return !Vr(e[0]) && !Vr(e[1])
}
var kr = (function () {
  function e(e) {
    ;(this.group = new Ne()), (this._LineCtor = e || Rr)
  }
  return (
    (e.prototype.isPersistent = function () {
      return !0
    }),
    (e.prototype.updateData = function (e) {
      var t = this,
        n = this,
        i = n.group,
        a = n._lineData
      ;(n._lineData = e), a || i.removeAll()
      var o = Or(e)
      e.diff(a)
        .add(function (n) {
          t._doAdd(e, n, o)
        })
        .update(function (n, i) {
          t._doUpdate(a, e, i, n, o)
        })
        .remove(function (e) {
          i.remove(a.getItemGraphicEl(e))
        })
        .execute()
    }),
    (e.prototype.updateLayout = function () {
      var e = this._lineData
      e &&
        e.eachItemGraphicEl(function (t, n) {
          t.updateLayout(e, n)
        }, this)
    }),
    (e.prototype.incrementalPrepareUpdate = function (e) {
      ;(this._seriesScope = Or(e)),
        (this._lineData = null),
        this.group.removeAll()
    }),
    (e.prototype.incrementalUpdate = function (e, t) {
      function n(e) {
        e.isGroup ||
          (function (e) {
            return e.animators && e.animators.length > 0
          })(e) ||
          ((e.incremental = !0), (e.ensureState('emphasis').hoverLayer = !0))
      }
      for (var i = e.start; i < e.end; i++) {
        if (zr(t.getItemLayout(i))) {
          var a = new this._LineCtor(t, i, this._seriesScope)
          a.traverse(n), this.group.add(a), t.setItemGraphicEl(i, a)
        }
      }
    }),
    (e.prototype.remove = function () {
      this.group.removeAll()
    }),
    (e.prototype._doAdd = function (e, t, n) {
      if (zr(e.getItemLayout(t))) {
        var i = new this._LineCtor(e, t, n)
        e.setItemGraphicEl(t, i), this.group.add(i)
      }
    }),
    (e.prototype._doUpdate = function (e, t, n, i, a) {
      var o = e.getItemGraphicEl(n)
      zr(t.getItemLayout(i))
        ? (o ? o.updateData(t, i, a) : (o = new this._LineCtor(t, i, a)),
          t.setItemGraphicEl(i, o),
          this.group.add(o))
        : this.group.remove(o)
    }),
    e
  )
})()
function Gr(e, t) {
  return e.type === t
}
var Br = (function (e) {
  function t() {
    var n = (null !== e && e.apply(this, arguments)) || this
    return (n.type = t.type), (n.hasSymbolVisual = !0), n
  }
  return (
    j(t, e),
    (t.prototype.getInitialData = function (e) {
      return Li(null, this, { useEncodeDefaulter: !0 })
    }),
    (t.prototype.getLegendIcon = function (e) {
      var t = new Ne(),
        n = ft(
          'line',
          0,
          e.itemHeight / 2,
          e.itemWidth,
          0,
          e.lineStyle.stroke,
          !1
        )
      t.add(n), n.setStyle(e.lineStyle)
      var i = this.getData().getVisual('symbol'),
        a = this.getData().getVisual('symbolRotate'),
        o = 'none' === i ? 'circle' : i,
        r = 0.8 * e.itemHeight,
        s = ft(
          o,
          (e.itemWidth - r) / 2,
          (e.itemHeight - r) / 2,
          r,
          r,
          e.itemStyle.fill
        )
      t.add(s), s.setStyle(e.itemStyle)
      var l = 'inherit' === e.iconRotate ? a : e.iconRotate || 0
      return (
        (s.rotation = (l * Math.PI) / 180),
        s.setOrigin([e.itemWidth / 2, e.itemHeight / 2]),
        o.indexOf('empty') > -1 &&
          ((s.style.stroke = s.style.fill),
          (s.style.fill = '#fff'),
          (s.style.lineWidth = 2)),
        t
      )
    }),
    (t.type = 'series.line'),
    (t.dependencies = ['grid', 'polar']),
    (t.defaultOption = {
      zlevel: 0,
      z: 3,
      coordinateSystem: 'cartesian2d',
      legendHoverLink: !0,
      clip: !0,
      label: { position: 'top' },
      endLabel: { show: !1, valueAnimation: !0, distance: 8 },
      lineStyle: { width: 2, type: 'solid' },
      emphasis: { scale: !0, lineStyle: { width: 'bolder' } },
      step: !1,
      smooth: !1,
      smoothMonotone: null,
      symbol: 'emptyCircle',
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: !0,
      showAllSymbol: 'auto',
      connectNulls: !1,
      sampling: 'none',
      animationEasing: 'linear',
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: { divideShape: 'clone' },
    }),
    t
  )
})(Ct)
function Wr(e, t, n) {
  var a = e.getBaseAxis(),
    o = e.getOtherAxis(a),
    r = (function (e, t) {
      var n = 0,
        i = e.scale.getExtent()
      'start' === t
        ? (n = i[0])
        : 'end' === t
        ? (n = i[1])
        : i[0] > 0
        ? (n = i[0])
        : i[1] < 0 && (n = i[1])
      return n
    })(o, n),
    s = a.dim,
    l = o.dim,
    u = t.mapDimension(l),
    d = t.mapDimension(s),
    c = 'x' === l || 'radius' === l ? 1 : 0,
    h = i(e.dimensions, function (e) {
      return t.mapDimension(e)
    }),
    p = !1,
    g = t.getCalculationInfo('stackResultDimension')
  return (
    Tt(t, h[0]) && ((p = !0), (h[0] = g)),
    Tt(t, h[1]) && ((p = !0), (h[1] = g)),
    {
      dataDimsForPoint: h,
      valueStart: r,
      valueAxisDim: l,
      baseAxisDim: s,
      stacked: !!p,
      valueDim: u,
      baseDim: d,
      baseDataOffset: c,
      stackedOverDimension: t.getCalculationInfo('stackedOverDimension'),
    }
  )
}
function Fr(e, t, n, i) {
  var a = NaN
  e.stacked && (a = n.get(n.getCalculationInfo('stackedOverDimension'), i)),
    isNaN(a) && (a = e.valueStart)
  var o = e.baseDataOffset,
    r = []
  return (r[o] = n.get(e.baseDim, i)), (r[1 - o] = a), t.dataToPoint(r)
}
var Yr = 'undefined' != typeof Float32Array,
  Xr = Yr ? Float32Array : Array
function Hr(e) {
  return g(e) ? (Yr ? new Float32Array(e) : e) : new Xr(e)
}
var Ur = Math.min,
  Zr = Math.max
function jr(e, t) {
  return isNaN(e) || isNaN(t)
}
function qr(e, t, n, i, a, o, r, s, l) {
  for (var u, d, c, h, p, g, f = n, y = 0; y < i; y++) {
    var m = t[2 * f],
      v = t[2 * f + 1]
    if (f >= a || f < 0) break
    if (jr(m, v)) {
      if (l) {
        f += o
        continue
      }
      break
    }
    if (f === n) e[o > 0 ? 'moveTo' : 'lineTo'](m, v), (c = m), (h = v)
    else {
      var x = m - u,
        _ = v - d
      if (x * x + _ * _ < 0.5) {
        f += o
        continue
      }
      if (r > 0) {
        var S = f + o,
          b = t[2 * S],
          w = t[2 * S + 1],
          I = y + 1
        if (l)
          for (; jr(b, w) && I < i; )
            I++, (b = t[2 * (S += o)]), (w = t[2 * S + 1])
        var M = 0.5,
          D = 0,
          A = 0,
          L = void 0,
          C = void 0
        if (I >= i || jr(b, w)) (p = m), (g = v)
        else {
          ;(D = b - u), (A = w - d)
          var T = m - u,
            N = b - m,
            P = v - d,
            E = w - v,
            R = void 0,
            O = void 0
          'x' === s
            ? ((R = Math.abs(T)),
              (O = Math.abs(N)),
              (p = m - R * r),
              (g = v),
              (L = m + R * r),
              (C = v))
            : 'y' === s
            ? ((R = Math.abs(P)),
              (O = Math.abs(E)),
              (p = m),
              (g = v - R * r),
              (L = m),
              (C = v + R * r))
            : ((R = Math.sqrt(T * T + P * P)),
              (p =
                m -
                D * r * (1 - (M = (O = Math.sqrt(N * N + E * E)) / (O + R)))),
              (g = v - A * r * (1 - M)),
              (C = v + A * r * M),
              (L = Ur((L = m + D * r * M), Zr(b, m))),
              (C = Ur(C, Zr(w, v))),
              (L = Zr(L, Ur(b, m))),
              (g = v - ((A = (C = Zr(C, Ur(w, v))) - v) * R) / O),
              (p = Ur((p = m - ((D = L - m) * R) / O), Zr(u, m))),
              (g = Ur(g, Zr(d, v))),
              (L = m + ((D = m - (p = Zr(p, Ur(u, m)))) * O) / R),
              (C = v + ((A = v - (g = Zr(g, Ur(d, v)))) * O) / R))
        }
        e.bezierCurveTo(c, h, p, g, m, v), (c = L), (h = C)
      } else e.lineTo(m, v)
    }
    ;(u = m), (d = v), (f += o)
  }
  return y
}
var Jr = function () {
    ;(this.smooth = 0), (this.smoothConstraint = !0)
  },
  Kr = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'ec-polyline'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (t.prototype.getDefaultShape = function () {
        return new Jr()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.points,
          i = 0,
          a = n.length / 2
        if (t.connectNulls) {
          for (; a > 0 && jr(n[2 * a - 2], n[2 * a - 1]); a--);
          for (; i < a && jr(n[2 * i], n[2 * i + 1]); i++);
        }
        for (; i < a; )
          i +=
            qr(e, n, i, a, a, 1, t.smooth, t.smoothMonotone, t.connectNulls) + 1
      }),
      (t.prototype.getPointOn = function (e, t) {
        this.path ||
          (this.createPathProxy(), this.buildPath(this.path, this.shape))
        for (
          var n, i, a = this.path.data, o = B.CMD, r = 'x' === t, s = [], l = 0;
          l < a.length;

        ) {
          var u = void 0,
            d = void 0,
            c = void 0,
            h = void 0,
            p = void 0,
            g = void 0,
            f = void 0
          switch (a[l++]) {
            case o.M:
              ;(n = a[l++]), (i = a[l++])
              break
            case o.L:
              if (
                ((u = a[l++]),
                (d = a[l++]),
                (f = r ? (e - n) / (u - n) : (e - i) / (d - i)) <= 1 && f >= 0)
              ) {
                var y = r ? (d - i) * f + i : (u - n) * f + n
                return r ? [e, y] : [y, e]
              }
              ;(n = u), (i = d)
              break
            case o.C:
              ;(u = a[l++]),
                (d = a[l++]),
                (c = a[l++]),
                (h = a[l++]),
                (p = a[l++]),
                (g = a[l++])
              var m = r ? Nt(n, u, c, p, e, s) : Nt(i, d, h, g, e, s)
              if (m > 0)
                for (var v = 0; v < m; v++) {
                  var x = s[v]
                  if (x <= 1 && x >= 0) {
                    y = r ? Pt(i, d, h, g, x) : Pt(n, u, c, p, x)
                    return r ? [e, y] : [y, e]
                  }
                }
              ;(n = p), (i = g)
          }
        }
      }),
      t
    )
  })(At),
  Qr = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this
    }
    return j(t, e), t
  })(Jr),
  $r = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'ec-polygon'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new Qr()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.points,
          i = t.stackedOnPoints,
          a = 0,
          o = n.length / 2,
          r = t.smoothMonotone
        if (t.connectNulls) {
          for (; o > 0 && jr(n[2 * o - 2], n[2 * o - 1]); o--);
          for (; a < o && jr(n[2 * a], n[2 * a + 1]); a++);
        }
        for (; a < o; ) {
          var s = qr(e, n, a, o, o, 1, t.smooth, r, t.connectNulls)
          qr(e, i, a + s - 1, s, o, -1, t.stackedOnSmooth, r, t.connectNulls),
            (a += s + 1),
            e.closePath()
        }
      }),
      t
    )
  })(At)
function es(e, t, n, i, a) {
  var o = e.getArea(),
    r = o.x,
    s = o.y,
    l = o.width,
    u = o.height,
    d = n.get(['lineStyle', 'width']) || 2
  ;(r -= d / 2),
    (s -= d / 2),
    (l += d),
    (u += d),
    (r = Math.floor(r)),
    (l = Math.round(l))
  var c = new $e({ shape: { x: r, y: s, width: l, height: u } })
  if (t) {
    var h = e.getBaseAxis(),
      p = h.isHorizontal(),
      g = h.inverse
    p
      ? (g && (c.shape.x += l), (c.shape.width = 0))
      : (g || (c.shape.y += u), (c.shape.height = 0)),
      xt(
        c,
        { shape: { width: l, height: u, x: r, y: s } },
        n,
        null,
        i,
        'function' == typeof a
          ? function (e) {
              a(e, c)
            }
          : null
      )
  }
  return c
}
function ts(e, t, n) {
  var i = e.getArea(),
    a = ce(i.r0, 1),
    o = ce(i.r, 1),
    r = new Et({
      shape: {
        cx: ce(e.cx, 1),
        cy: ce(e.cy, 1),
        r0: a,
        r: o,
        startAngle: i.startAngle,
        endAngle: i.endAngle,
        clockwise: i.clockwise,
      },
    })
  t &&
    ('angle' === e.getBaseAxis().dim
      ? (r.shape.endAngle = i.startAngle)
      : (r.shape.r = a),
    xt(r, { shape: { endAngle: i.endAngle, r: o } }, n))
  return r
}
function ns(e, t, n, i, a) {
  return e
    ? 'polar' === e.type
      ? ts(e, t, n)
      : 'cartesian2d' === e.type
      ? es(e, t, n, i, a)
      : null
    : null
}
function is(e, t) {
  if (e.length === t.length) {
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return
    return !0
  }
}
function as(e) {
  for (
    var t = 1 / 0, n = 1 / 0, i = -1 / 0, a = -1 / 0, o = 0;
    o < e.length;

  ) {
    var r = e[o++],
      s = e[o++]
    isNaN(r) || ((t = Math.min(r, t)), (i = Math.max(r, i))),
      isNaN(s) || ((n = Math.min(s, n)), (a = Math.max(s, a)))
  }
  return [
    [t, n],
    [i, a],
  ]
}
function os(e, t) {
  var n = as(e),
    i = n[0],
    a = n[1],
    o = as(t),
    r = o[0],
    s = o[1]
  return Math.max(
    Math.abs(i[0] - r[0]),
    Math.abs(i[1] - r[1]),
    Math.abs(a[0] - s[0]),
    Math.abs(a[1] - s[1])
  )
}
function rs(e) {
  return 'number' == typeof e ? e : e ? 0.5 : 0
}
function ss(e, t, n) {
  for (
    var i = t.getBaseAxis(),
      a = 'x' === i.dim || 'radius' === i.dim ? 0 : 1,
      o = [],
      r = 0,
      s = [],
      l = [],
      u = [];
    r < e.length - 2;
    r += 2
  )
    switch (
      ((u[0] = e[r + 2]),
      (u[1] = e[r + 3]),
      (l[0] = e[r]),
      (l[1] = e[r + 1]),
      o.push(l[0], l[1]),
      n)
    ) {
      case 'end':
        ;(s[a] = u[a]), (s[1 - a] = l[1 - a]), o.push(s[0], s[1])
        break
      case 'middle':
        var d = (l[a] + u[a]) / 2,
          c = []
        ;(s[a] = c[a] = d),
          (s[1 - a] = l[1 - a]),
          (c[1 - a] = u[1 - a]),
          o.push(s[0], s[1]),
          o.push(c[0], c[1])
        break
      default:
        ;(s[a] = l[a]), (s[1 - a] = u[1 - a]), o.push(s[0], s[1])
    }
  return o.push(e[r++], e[r++]), o
}
function ls(e, n, i) {
  var a = e.get('showAllSymbol'),
    o = 'auto' === a
  if (!a || o) {
    var r = i.getAxesByScale('ordinal')[0]
    if (
      r &&
      (!o ||
        !(function (e, t) {
          var n = e.getExtent(),
            i = Math.abs(n[1] - n[0]) / e.scale.count()
          isNaN(i) && (i = 0)
          for (
            var a = t.count(), o = Math.max(1, Math.round(a / 5)), r = 0;
            r < a;
            r += o
          )
            if (1.5 * _r.getSymbolSize(t, r)[e.isHorizontal() ? 1 : 0] > i)
              return !1
          return !0
        })(r, n))
    ) {
      var s = n.mapDimension(r.dim),
        l = {}
      return (
        t(r.getViewLabels(), function (e) {
          var t = r.scale.getRawOrdinalNumber(e.tickValue)
          l[t] = 1
        }),
        function (e) {
          return !l.hasOwnProperty(n.get(s, e))
        }
      )
    }
  }
}
function us(e, t) {
  return [e[2 * t], e[2 * t + 1]]
}
function ds(e) {
  if (e.get(['endLabel', 'show'])) return !0
  for (var t = 0; t < H.length; t++)
    if (e.get([H[t], 'endLabel', 'show'])) return !0
  return !1
}
function cs(e, t, n, i) {
  if (Gr(t, 'cartesian2d')) {
    var a = i.getModel('endLabel'),
      o = a.get('valueAnimation'),
      r = i.getData(),
      s = { lastFrameIndex: 0 },
      l = ds(i)
        ? function (n, i) {
            e._endLabelOnDuring(n, i, r, s, o, a, t)
          }
        : null,
      u = t.getBaseAxis().isHorizontal(),
      d = es(
        t,
        n,
        i,
        function () {
          var t = e._endLabel
          t &&
            n &&
            null != s.originalX &&
            t.attr({ x: s.originalX, y: s.originalY })
        },
        l
      )
    if (!i.get('clip', !0)) {
      var c = d.shape,
        h = Math.max(c.width, c.height)
      u ? ((c.y -= h), (c.height += 2 * h)) : ((c.x -= h), (c.width += 2 * h))
    }
    return l && l(1, d), d
  }
  return ts(t, n, i)
}
var hs = (function (e) {
  function n() {
    return (null !== e && e.apply(this, arguments)) || this
  }
  return (
    j(n, e),
    (n.prototype.init = function () {
      var e = new Ne(),
        t = new Ir()
      this.group.add(t.group), (this._symbolDraw = t), (this._lineGroup = e)
    }),
    (n.prototype.render = function (e, n, a) {
      var o = this,
        r = e.coordinateSystem,
        s = this.group,
        l = e.getData(),
        u = e.getModel('lineStyle'),
        d = e.getModel('areaStyle'),
        c = l.getLayout('points') || [],
        h = 'polar' === r.type,
        p = this._coordSys,
        g = this._symbolDraw,
        f = this._polyline,
        y = this._polygon,
        m = this._lineGroup,
        v = e.get('animation'),
        x = !d.isEmpty(),
        _ = d.get('origin'),
        S = Wr(r, l, _),
        b =
          x &&
          (function (e, t, n) {
            if (!n.valueDim) return []
            for (var i = t.count(), a = Hr(2 * i), o = 0; o < i; o++) {
              var r = Fr(n, e, t, o)
              ;(a[2 * o] = r[0]), (a[2 * o + 1] = r[1])
            }
            return a
          })(r, l, S),
        w = e.get('showSymbol'),
        I = w && !h && ls(e, l, r),
        M = this._data
      M &&
        M.eachItemGraphicEl(function (e, t) {
          e.__temp && (s.remove(e), M.setItemGraphicEl(t, null))
        }),
        w || g.remove(),
        s.add(m)
      var D,
        A = !h && e.get('step')
      r &&
        r.getArea &&
        e.get('clip', !0) &&
        (null != (D = r.getArea()).width
          ? ((D.x -= 0.1), (D.y -= 0.1), (D.width += 0.2), (D.height += 0.2))
          : D.r0 && ((D.r0 -= 0.5), (D.r += 0.5))),
        (this._clipShapeForSymbol = D)
      var L =
        (function (e, n) {
          var a = e.getVisual('visualMeta')
          if (a && a.length && e.count() && 'cartesian2d' === n.type) {
            for (var o, r, s = a.length - 1; s >= 0; s--) {
              var l = e.getDimensionInfo(a[s].dimension)
              if ('x' === (o = l && l.coordDim) || 'y' === o) {
                r = a[s]
                break
              }
            }
            if (r) {
              var u = n.getAxis(o),
                d = u.scale.getExtent(),
                c = i(r.stops, function (e) {
                  var t = u.toGlobalCoord(u.dataToCoord(e.value))
                  return (
                    isNaN(t) ||
                      isFinite(t) ||
                      (t = u.toGlobalCoord(u.dataToCoord(d[+(t < 0)]))),
                    { offset: 0, coord: t, color: e.color }
                  )
                }),
                h = c.length,
                p = r.outerColors.slice()
              h && c[0].coord > c[h - 1].coord && (c.reverse(), p.reverse())
              var g = c[0].coord - 10,
                f = c[h - 1].coord + 10,
                y = f - g
              if (y < 0.001) return 'transparent'
              t(c, function (e) {
                e.offset = (e.coord - g) / y
              }),
                c.push({
                  offset: h ? c[h - 1].offset : 0.5,
                  color: p[1] || 'transparent',
                }),
                c.unshift({
                  offset: h ? c[0].offset : 0.5,
                  color: p[0] || 'transparent',
                })
              var m = new Ft(0, 0, 0, 0, c, !0)
              return (m[o] = g), (m[o + '2'] = f), m
            }
          }
        })(l, r) || l.getVisual('style')[l.getVisual('drawType')]
      f && p.type === r.type && A === this._step
        ? (x && !y
            ? (y = this._newPolygon(c, b))
            : y && !x && (m.remove(y), (y = this._polygon = null)),
          h || this._initOrUpdateEndLabel(e, r, Rt(L)),
          m.setClipPath(cs(this, r, !1, e)),
          w &&
            g.updateData(l, {
              isIgnore: I,
              clipShape: D,
              disableAnimation: !0,
              getSymbolPoint: function (e) {
                return [c[2 * e], c[2 * e + 1]]
              },
            }),
          (is(this._stackedOnPoints, b) && is(this._points, c)) ||
            (v
              ? this._doUpdateAnimation(l, b, r, a, A, _)
              : (A && ((c = ss(c, r, A)), b && (b = ss(b, r, A))),
                f.setShape({ points: c }),
                y && y.setShape({ points: c, stackedOnPoints: b }))))
        : (w &&
            g.updateData(l, {
              isIgnore: I,
              clipShape: D,
              disableAnimation: !0,
              getSymbolPoint: function (e) {
                return [c[2 * e], c[2 * e + 1]]
              },
            }),
          v && this._initSymbolLabelAnimation(l, r, D),
          A && ((c = ss(c, r, A)), b && (b = ss(b, r, A))),
          (f = this._newPolyline(c)),
          x && (y = this._newPolygon(c, b)),
          h || this._initOrUpdateEndLabel(e, r, Rt(L)),
          m.setClipPath(cs(this, r, !0, e)))
      var T = e.get(['emphasis', 'focus']),
        N = e.get(['emphasis', 'blurScope'])
      ;(f.useStyle(
        C(u.getLineStyle(), { fill: 'none', stroke: L, lineJoin: 'bevel' })
      ),
      Ot(f, e, 'lineStyle'),
      f.style.lineWidth > 0 &&
        'bolder' === e.get(['emphasis', 'lineStyle', 'width'])) &&
        (f.getState('emphasis').style.lineWidth = +f.style.lineWidth + 1)
      ;(Be(f).seriesIndex = e.seriesIndex), Fe(f, T, N)
      var P = rs(e.get('smooth')),
        E = e.get('smoothMonotone'),
        R = e.get('connectNulls')
      if ((f.setShape({ smooth: P, smoothMonotone: E, connectNulls: R }), y)) {
        var O = l.getCalculationInfo('stackedOnSeries'),
          V = 0
        y.useStyle(
          C(d.getAreaStyle(), {
            fill: L,
            opacity: 0.7,
            lineJoin: 'bevel',
            decal: l.getVisual('style').decal,
          })
        ),
          O && (V = rs(O.get('smooth'))),
          y.setShape({
            smooth: P,
            stackedOnSmooth: V,
            smoothMonotone: E,
            connectNulls: R,
          }),
          Ot(y, e, 'areaStyle'),
          (Be(y).seriesIndex = e.seriesIndex),
          Fe(y, T, N)
      }
      var z = function (e) {
        o._changePolyState(e)
      }
      l.eachItemGraphicEl(function (e) {
        e && (e.onHoverStateChange = z)
      }),
        (this._polyline.onHoverStateChange = z),
        (this._data = l),
        (this._coordSys = r),
        (this._stackedOnPoints = b),
        (this._points = c),
        (this._step = A),
        (this._valueOrigin = _)
    }),
    (n.prototype.dispose = function () {}),
    (n.prototype.highlight = function (e, t, n, i) {
      var a = e.getData(),
        o = Vt(a, i)
      if (
        (this._changePolyState('emphasis'),
        !(o instanceof Array) && null != o && o >= 0)
      ) {
        var r = a.getLayout('points'),
          s = a.getItemGraphicEl(o)
        if (!s) {
          var l = r[2 * o],
            u = r[2 * o + 1]
          if (isNaN(l) || isNaN(u)) return
          if (
            this._clipShapeForSymbol &&
            !this._clipShapeForSymbol.contain(l, u)
          )
            return
          var d = e.get('zlevel'),
            c = e.get('z')
          ;((s = new _r(a, o)).x = l), (s.y = u), s.setZ(d, c)
          var h = s.getSymbolPath().getTextContent()
          h && ((h.zlevel = d), (h.z = c), (h.z2 = this._polyline.z2 + 1)),
            (s.__temp = !0),
            a.setItemGraphicEl(o, s),
            s.stopSymbolAnimation(!0),
            this.group.add(s)
        }
        s.highlight()
      } else zt.prototype.highlight.call(this, e, t, n, i)
    }),
    (n.prototype.downplay = function (e, t, n, i) {
      var a = e.getData(),
        o = Vt(a, i)
      if ((this._changePolyState('normal'), null != o && o >= 0)) {
        var r = a.getItemGraphicEl(o)
        r &&
          (r.__temp
            ? (a.setItemGraphicEl(o, null), this.group.remove(r))
            : r.downplay())
      } else zt.prototype.downplay.call(this, e, t, n, i)
    }),
    (n.prototype._changePolyState = function (e) {
      var t = this._polygon
      kt(this._polyline, e), t && kt(t, e)
    }),
    (n.prototype._newPolyline = function (e) {
      var t = this._polyline
      return (
        t && this._lineGroup.remove(t),
        (t = new Kr({
          shape: { points: e },
          segmentIgnoreThreshold: 2,
          z2: 10,
        })),
        this._lineGroup.add(t),
        (this._polyline = t),
        t
      )
    }),
    (n.prototype._newPolygon = function (e, t) {
      var n = this._polygon
      return (
        n && this._lineGroup.remove(n),
        (n = new $r({
          shape: { points: e, stackedOnPoints: t },
          segmentIgnoreThreshold: 2,
        })),
        this._lineGroup.add(n),
        (this._polygon = n),
        n
      )
    }),
    (n.prototype._initSymbolLabelAnimation = function (e, t, n) {
      var i,
        a,
        o = t.getBaseAxis(),
        r = o.inverse
      'cartesian2d' === t.type
        ? ((i = o.isHorizontal()), (a = !1))
        : 'polar' === t.type && ((i = 'angle' === o.dim), (a = !0))
      var s = e.hostModel,
        l = s.get('animationDuration')
      'function' == typeof l && (l = l(null))
      var u = s.get('animationDelay') || 0,
        d = 'function' == typeof u ? u(null) : u
      e.eachItemGraphicEl(function (e, o) {
        var s = e
        if (s) {
          var c = [e.x, e.y],
            h = void 0,
            p = void 0,
            g = void 0
          if (n)
            if (a) {
              var f = n,
                y = t.pointToCoord(c)
              i
                ? ((h = f.startAngle),
                  (p = f.endAngle),
                  (g = (-y[1] / 180) * Math.PI))
                : ((h = f.r0), (p = f.r), (g = y[0]))
            } else {
              var m = n
              i
                ? ((h = m.x), (p = m.x + m.width), (g = e.x))
                : ((h = m.y + m.height), (p = m.y), (g = e.y))
            }
          var v = p === h ? 0 : (g - h) / (p - h)
          r && (v = 1 - v)
          var x = 'function' == typeof u ? u(o) : l * v + d,
            _ = s.getSymbolPath(),
            S = _.getTextContent()
          s.attr({ scaleX: 0, scaleY: 0 }),
            s.animateTo(
              { scaleX: 1, scaleY: 1 },
              { duration: 200, setToFinal: !0, delay: x }
            ),
            S &&
              S.animateFrom(
                { style: { opacity: 0 } },
                { duration: 300, delay: x }
              ),
            (_.disableLabelAnimation = !0)
        }
      })
    }),
    (n.prototype._initOrUpdateEndLabel = function (e, t, n) {
      var i = e.getModel('endLabel')
      if (ds(e)) {
        var a = e.getData(),
          o = this._polyline,
          r = this._endLabel
        r ||
          (((r = this._endLabel = new Gt({ z2: 200 })).ignoreClip = !0),
          o.setTextContent(this._endLabel),
          (o.disableLabelAnimation = !0))
        var s = (function (e) {
          for (
            var t, n, i = e.length / 2;
            i > 0 &&
            ((t = e[2 * i - 2]), (n = e[2 * i - 1]), isNaN(t) || isNaN(n));
            i--
          );
          return i - 1
        })(a.getLayout('points'))
        s >= 0 &&
          (ke(
            o,
            Ge(e, 'endLabel'),
            {
              inheritColor: n,
              labelFetcher: e,
              labelDataIndex: s,
              defaultText: function (e, t, n) {
                return null != n ? vr(a, n) : mr(a, e)
              },
              enableTextSetter: !0,
            },
            (function (e, t) {
              var n = t.getBaseAxis(),
                i = n.isHorizontal(),
                a = n.inverse,
                o = i ? (a ? 'right' : 'left') : 'center',
                r = i ? 'middle' : a ? 'top' : 'bottom'
              return {
                normal: {
                  align: e.get('align') || o,
                  verticalAlign: e.get('verticalAlign') || r,
                },
              }
            })(i, t)
          ),
          (o.textConfig.position = null))
      } else
        this._endLabel &&
          (this._polyline.removeTextContent(), (this._endLabel = null))
    }),
    (n.prototype._endLabelOnDuring = function (e, t, n, i, a, o, r) {
      var s = this._endLabel,
        l = this._polyline
      if (s) {
        e < 1 &&
          null == i.originalX &&
          ((i.originalX = s.x), (i.originalY = s.y))
        var u = n.getLayout('points'),
          d = n.hostModel,
          c = d.get('connectNulls'),
          h = o.get('precision'),
          p = o.get('distance') || 0,
          g = r.getBaseAxis(),
          f = g.isHorizontal(),
          y = g.inverse,
          m = t.shape,
          v = y ? (f ? m.x : m.y + m.height) : f ? m.x + m.width : m.y,
          x = (f ? p : 0) * (y ? -1 : 1),
          _ = (f ? 0 : -p) * (y ? -1 : 1),
          S = f ? 'x' : 'y',
          b = (function (e, t, n) {
            for (
              var i,
                a,
                o = e.length / 2,
                r = 'x' === n ? 0 : 1,
                s = 0,
                l = -1,
                u = 0;
              u < o;
              u++
            )
              if (((a = e[2 * u + r]), !isNaN(a) && !isNaN(e[2 * u + 1 - r])))
                if (0 !== u) {
                  if ((i <= t && a >= t) || (i >= t && a <= t)) {
                    l = u
                    break
                  }
                  ;(s = u), (i = a)
                } else i = a
            return { range: [s, l], t: (t - i) / (a - i) }
          })(u, v, S),
          w = b.range,
          I = w[1] - w[0],
          M = void 0
        if (I >= 1) {
          if (I > 1 && !c) {
            var D = us(u, w[0])
            s.attr({ x: D[0] + x, y: D[1] + _ }), a && (M = d.getRawValue(w[0]))
          } else {
            ;(D = l.getPointOn(v, S)) && s.attr({ x: D[0] + x, y: D[1] + _ })
            var A = d.getRawValue(w[0]),
              L = d.getRawValue(w[1])
            a && (M = Bt(n, h, A, L, b.t))
          }
          i.lastFrameIndex = w[0]
        } else {
          var C = 1 === e || i.lastFrameIndex > 0 ? w[0] : 0
          D = us(u, C)
          a && (M = d.getRawValue(C)), s.attr({ x: D[0] + x, y: D[1] + _ })
        }
        a && Wt(s).setLabelText(M)
      }
    }),
    (n.prototype._doUpdateAnimation = function (e, t, n, i, a, o) {
      var r = this._polyline,
        s = this._polygon,
        l = e.hostModel,
        u = (function (e, t, n, i, a, o, r, s) {
          for (
            var l = (function (e, t) {
                var n = []
                return (
                  t
                    .diff(e)
                    .add(function (e) {
                      n.push({ cmd: '+', idx: e })
                    })
                    .update(function (e, t) {
                      n.push({ cmd: '=', idx: t, idx1: e })
                    })
                    .remove(function (e) {
                      n.push({ cmd: '-', idx: e })
                    })
                    .execute(),
                  n
                )
              })(e, t),
              u = [],
              d = [],
              c = [],
              h = [],
              p = [],
              g = [],
              f = [],
              y = Wr(a, t, r),
              m = e.getLayout('points') || [],
              v = t.getLayout('points') || [],
              x = 0;
            x < l.length;
            x++
          ) {
            var _ = l[x],
              S = !0,
              b = void 0,
              w = void 0
            switch (_.cmd) {
              case '=':
                ;(b = 2 * _.idx), (w = 2 * _.idx1)
                var I = m[b],
                  M = m[b + 1],
                  D = v[w],
                  A = v[w + 1]
                ;(isNaN(I) || isNaN(M)) && ((I = D), (M = A)),
                  u.push(I, M),
                  d.push(D, A),
                  c.push(n[b], n[b + 1]),
                  h.push(i[w], i[w + 1]),
                  f.push(t.getRawIndex(_.idx1))
                break
              case '+':
                var L = _.idx,
                  C = y.dataDimsForPoint,
                  T = a.dataToPoint([t.get(C[0], L), t.get(C[1], L)])
                ;(w = 2 * L), u.push(T[0], T[1]), d.push(v[w], v[w + 1])
                var N = Fr(y, a, t, L)
                c.push(N[0], N[1]),
                  h.push(i[w], i[w + 1]),
                  f.push(t.getRawIndex(L))
                break
              case '-':
                S = !1
            }
            S && (p.push(_), g.push(g.length))
          }
          g.sort(function (e, t) {
            return f[e] - f[t]
          })
          var P = u.length,
            E = Hr(P),
            R = Hr(P),
            O = Hr(P),
            V = Hr(P),
            z = []
          for (x = 0; x < g.length; x++) {
            var k = g[x],
              G = 2 * x,
              B = 2 * k
            ;(E[G] = u[B]),
              (E[G + 1] = u[B + 1]),
              (R[G] = d[B]),
              (R[G + 1] = d[B + 1]),
              (O[G] = c[B]),
              (O[G + 1] = c[B + 1]),
              (V[G] = h[B]),
              (V[G + 1] = h[B + 1]),
              (z[x] = p[k])
          }
          return {
            current: E,
            next: R,
            stackedOnCurrent: O,
            stackedOnNext: V,
            status: z,
          }
        })(
          this._data,
          e,
          this._stackedOnPoints,
          t,
          this._coordSys,
          0,
          this._valueOrigin
        ),
        d = u.current,
        c = u.stackedOnCurrent,
        h = u.next,
        p = u.stackedOnNext
      if (
        (a &&
          ((d = ss(u.current, n, a)),
          (c = ss(u.stackedOnCurrent, n, a)),
          (h = ss(u.next, n, a)),
          (p = ss(u.stackedOnNext, n, a))),
        os(d, h) > 3e3 || (s && os(c, p) > 3e3))
      )
        return (
          r.setShape({ points: h }),
          void (s && s.setShape({ points: h, stackedOnPoints: p }))
        )
      ;(r.shape.__points = u.current), (r.shape.points = d)
      var g = { shape: { points: h } }
      u.current !== d && (g.shape.__points = u.next),
        r.stopAnimation(),
        Ee(r, g, l),
        s &&
          (s.setShape({ points: d, stackedOnPoints: c }),
          s.stopAnimation(),
          Ee(s, { shape: { stackedOnPoints: p } }, l),
          r.shape.points !== s.shape.points &&
            (s.shape.points = r.shape.points))
      for (var f = [], y = u.status, m = 0; m < y.length; m++) {
        if ('=' === y[m].cmd) {
          var v = e.getItemGraphicEl(y[m].idx1)
          v && f.push({ el: v, ptIdx: m })
        }
      }
      r.animators &&
        r.animators.length &&
        r.animators[0].during(function () {
          s && s.dirtyShape()
          for (var e = r.shape.__points, t = 0; t < f.length; t++) {
            var n = f[t].el,
              i = 2 * f[t].ptIdx
            ;(n.x = e[i]), (n.y = e[i + 1]), n.markRedraw()
          }
        })
    }),
    (n.prototype.remove = function (e) {
      var t = this.group,
        n = this._data
      this._lineGroup.removeAll(),
        this._symbolDraw.remove(!0),
        n &&
          n.eachItemGraphicEl(function (e, i) {
            e.__temp && (t.remove(e), n.setItemGraphicEl(i, null))
          }),
        (this._polyline =
          this._polygon =
          this._coordSys =
          this._points =
          this._stackedOnPoints =
          this._endLabel =
          this._data =
            null)
    }),
    (n.type = 'line'),
    n
  )
})(zt)
function ps(e, t) {
  return {
    seriesType: e,
    plan: Yt(),
    reset: function (e) {
      var n = e.getData(),
        a = e.coordinateSystem,
        o = e.pipelineContext,
        r = t || o.large
      if (a) {
        var s = i(a.dimensions, function (e) {
            return n.mapDimension(e)
          }).slice(0, 2),
          l = s.length,
          u = n.getCalculationInfo('stackResultDimension')
        Tt(n, s[0]) && (s[0] = u), Tt(n, s[1]) && (s[1] = u)
        var d = n.getStore(),
          c = n.getDimensionIndex(s[0]),
          h = n.getDimensionIndex(s[1])
        return (
          l && {
            progress: function (e, t) {
              for (
                var n = e.end - e.start,
                  i = r && Hr(n * l),
                  o = [],
                  s = [],
                  u = e.start,
                  p = 0;
                u < e.end;
                u++
              ) {
                var g = void 0
                if (1 === l) {
                  var f = d.get(c, u)
                  g = a.dataToPoint(f, null, s)
                } else
                  (o[0] = d.get(c, u)),
                    (o[1] = d.get(h, u)),
                    (g = a.dataToPoint(o, null, s))
                r
                  ? ((i[p++] = g[0]), (i[p++] = g[1]))
                  : t.setItemLayout(u, g.slice())
              }
              r && t.setLayout('points', i)
            },
          }
        )
      }
    },
  }
}
var gs = {
    average: function (e) {
      for (var t = 0, n = 0, i = 0; i < e.length; i++)
        isNaN(e[i]) || ((t += e[i]), n++)
      return 0 === n ? NaN : t / n
    },
    sum: function (e) {
      for (var t = 0, n = 0; n < e.length; n++) t += e[n] || 0
      return t
    },
    max: function (e) {
      for (var t = -1 / 0, n = 0; n < e.length; n++) e[n] > t && (t = e[n])
      return isFinite(t) ? t : NaN
    },
    min: function (e) {
      for (var t = 1 / 0, n = 0; n < e.length; n++) e[n] < t && (t = e[n])
      return isFinite(t) ? t : NaN
    },
    nearest: function (e) {
      return e[0]
    },
  },
  fs = function (e) {
    return Math.round(e.length / 2)
  }
function ys(e) {
  return {
    seriesType: e,
    reset: function (e, t, n) {
      var i = e.getData(),
        a = e.get('sampling'),
        o = e.coordinateSystem,
        r = i.count()
      if (r > 10 && 'cartesian2d' === o.type && a) {
        var s = o.getBaseAxis(),
          l = o.getOtherAxis(s),
          u = s.getExtent(),
          d = n.getDevicePixelRatio(),
          c = Math.abs(u[1] - u[0]) * (d || 1),
          h = Math.round(r / c)
        if (h > 1) {
          'lttb' === a &&
            e.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / h))
          var p = void 0
          'string' == typeof a
            ? (p = gs[a])
            : 'function' == typeof a && (p = a),
            p && e.setData(i.downSample(i.mapDimension(l.dim), 1 / h, p, fs))
        }
      }
    },
  }
}
function ms(e) {
  e.registerChartView(hs),
    e.registerSeriesModel(Br),
    e.registerLayout(ps('line', !0)),
    e.registerVisual({
      seriesType: 'line',
      reset: function (e) {
        var t = e.getData(),
          n = e.getModel('lineStyle').getLineStyle()
        n && !n.stroke && (n.stroke = t.getVisual('style').fill),
          t.setVisual('legendLineStyle', n)
      },
    }),
    e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, ys('line'))
}
var vs = (function (e) {
  function t() {
    var n = (null !== e && e.apply(this, arguments)) || this
    return (n.type = t.type), n
  }
  return (
    j(t, e),
    (t.prototype.getInitialData = function (e, t) {
      return Li(null, this, { useEncodeDefaulter: !0 })
    }),
    (t.prototype.getMarkerPosition = function (e) {
      var t = this.coordinateSystem
      if (t && t.clampData) {
        var n = t.dataToPoint(t.clampData(e)),
          i = this.getData(),
          a = i.getLayout('offset'),
          o = i.getLayout('size')
        return (n[t.getBaseAxis().isHorizontal() ? 0 : 1] += a + o / 2), n
      }
      return [NaN, NaN]
    }),
    (t.type = 'series.__base_bar__'),
    (t.defaultOption = {
      zlevel: 0,
      z: 2,
      coordinateSystem: 'cartesian2d',
      legendHoverLink: !0,
      barMinHeight: 0,
      barMinAngle: 0,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: 'mod',
    }),
    t
  )
})(Ct)
Ct.registerClass(vs)
var xs = vs,
  _s = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function () {
        return Li(null, this, {
          useEncodeDefaulter: !0,
          createInvertedIndices: !!this.get('realtimeSort', !0) || null,
        })
      }),
      (t.prototype.getProgressive = function () {
        return !!this.get('large') && this.get('progressive')
      }),
      (t.prototype.getProgressiveThreshold = function () {
        var e = this.get('progressiveThreshold'),
          t = this.get('largeThreshold')
        return t > e && (e = t), e
      }),
      (t.prototype.brushSelector = function (e, t, n) {
        return n.rect(t.getItemLayout(e))
      }),
      (t.type = 'series.bar'),
      (t.dependencies = ['grid', 'polar']),
      (t.defaultOption = Xt(xs.defaultOption, {
        clip: !0,
        roundCap: !1,
        showBackground: !1,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
          borderColor: null,
          borderWidth: 0,
          borderType: 'solid',
          borderRadius: 0,
          shadowBlur: 0,
          shadowColor: null,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
        select: { itemStyle: { borderColor: '#212121' } },
        realtimeSort: !1,
      })),
      t
    )
  })(xs),
  Ss = function () {
    ;(this.cx = 0),
      (this.cy = 0),
      (this.r0 = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0)
  },
  bs = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'sausage'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new Ss()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.cx,
          i = t.cy,
          a = Math.max(t.r0 || 0, 0),
          o = Math.max(t.r, 0),
          r = 0.5 * (o - a),
          s = a + r,
          l = t.startAngle,
          u = t.endAngle,
          d = t.clockwise,
          c = Math.cos(l),
          h = Math.sin(l),
          p = Math.cos(u),
          g = Math.sin(u)
        ;(d ? u - l < 2 * Math.PI : l - u < 2 * Math.PI) &&
          (e.moveTo(c * a + n, h * a + i),
          e.arc(c * s + n, h * s + i, r, -Math.PI + l, l, !d)),
          e.arc(n, i, o, l, u, !d),
          e.moveTo(p * o + n, g * o + i),
          e.arc(p * s + n, g * s + i, r, u - 2 * Math.PI, u - Math.PI, !d),
          0 !== a && (e.arc(n, i, a, u, l, d), e.moveTo(c * a + n, g * a + i)),
          e.closePath()
      }),
      t
    )
  })(At)
function ws(e, t, n) {
  return t * Math.sin(e) * (n ? -1 : 1)
}
function Is(e, t, n) {
  return t * Math.cos(e) * (n ? 1 : -1)
}
var Ms = [0, 0],
  Ds = Math.max,
  As = Math.min
var Ls = (function (e) {
    function t() {
      var n = e.call(this) || this
      return (n.type = t.type), (n._isFirstFrame = !0), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n, i) {
        ;(this._model = e),
          this._removeOnRenderedListener(n),
          this._updateDrawMode(e)
        var a = e.get('coordinateSystem')
        ;('cartesian2d' !== a && 'polar' !== a) ||
          (this._isLargeDraw
            ? this._renderLarge(e, t, n)
            : this._renderNormal(e, t, n, i))
      }),
      (t.prototype.incrementalPrepareRender = function (e) {
        this._clear(), this._updateDrawMode(e), this._updateLargeClip(e)
      }),
      (t.prototype.incrementalRender = function (e, t) {
        this._incrementalRenderLarge(e, t)
      }),
      (t.prototype._updateDrawMode = function (e) {
        var t = e.pipelineContext.large
        ;(null != this._isLargeDraw && t === this._isLargeDraw) ||
          ((this._isLargeDraw = t), this._clear())
      }),
      (t.prototype._renderNormal = function (e, t, n, i) {
        var a,
          o = this.group,
          r = e.getData(),
          s = this._data,
          l = e.coordinateSystem,
          u = l.getBaseAxis()
        'cartesian2d' === l.type
          ? (a = u.isHorizontal())
          : 'polar' === l.type && (a = 'angle' === u.dim)
        var d = e.isAnimationEnabled() ? e : null,
          c = (function (e, t) {
            var n = e.get('realtimeSort', !0),
              i = t.getBaseAxis()
            if (n && 'category' === i.type && 'cartesian2d' === t.type)
              return { baseAxis: i, otherAxis: t.getOtherAxis(i) }
          })(e, l)
        c && this._enableRealtimeSort(c, r, n)
        var h = e.get('clip', !0) || c,
          p = (function (e, t) {
            var n = e.getArea && e.getArea()
            if (Gr(e, 'cartesian2d')) {
              var i = e.getBaseAxis()
              if ('category' !== i.type || !i.onBand) {
                var a = t.getLayout('bandWidth')
                i.isHorizontal()
                  ? ((n.x -= a), (n.width += 2 * a))
                  : ((n.y -= a), (n.height += 2 * a))
              }
            }
            return n
          })(l, r)
        o.removeClipPath()
        var g = e.get('roundCap', !0),
          f = e.get('showBackground', !0),
          y = e.getModel('backgroundStyle'),
          m = y.get('borderRadius') || 0,
          v = [],
          x = this._backgroundEls,
          _ = i && i.isInitSort,
          S = i && 'changeAxisOrder' === i.type
        function b(e) {
          var t = Vs[l.type](r, e),
            n = (function (e, t, n) {
              return new ('polar' === e.type ? Et : $e)({
                shape: Ys(t, n, e),
                silent: !0,
                z2: 0,
              })
            })(l, a, t)
          return (
            n.useStyle(y.getItemStyle()),
            'cartesian2d' === l.type && n.setShape('r', m),
            (v[e] = n),
            n
          )
        }
        r.diff(s)
          .add(function (t) {
            var n = r.getItemModel(t),
              i = Vs[l.type](r, t, n)
            if ((f && b(t), r.hasValue(t) && Os[l.type](i))) {
              var s = !1
              h && (s = Cs[l.type](p, i))
              var y = Ts[l.type](e, r, t, i, a, d, u.model, !1, g)
              ks(y, r, t, n, i, e, a, 'polar' === l.type),
                _
                  ? y.attr({ shape: i })
                  : c
                  ? Ns(c, d, y, i, t, a, !1, !1)
                  : xt(y, { shape: i }, e, t),
                r.setItemGraphicEl(t, y),
                o.add(y),
                (y.ignore = s)
            }
          })
          .update(function (t, n) {
            var i = r.getItemModel(t),
              w = Vs[l.type](r, t, i)
            if (f) {
              var I = void 0
              0 === x.length
                ? (I = b(n))
                : ((I = x[n]).useStyle(y.getItemStyle()),
                  'cartesian2d' === l.type && I.setShape('r', m),
                  (v[t] = I))
              var M = Vs[l.type](r, t),
                D = Ys(a, M, l)
              Ee(I, { shape: D }, d, t)
            }
            var A = s.getItemGraphicEl(n)
            if (r.hasValue(t) && Os[l.type](w)) {
              var L = !1
              h && (L = Cs[l.type](p, w)) && o.remove(A),
                A ? vt(A) : (A = Ts[l.type](e, r, t, w, a, d, u.model, !!A, g)),
                S || ks(A, r, t, i, w, e, a, 'polar' === l.type),
                _
                  ? A.attr({ shape: w })
                  : c
                  ? Ns(c, d, A, w, t, a, !0, S)
                  : Ee(A, { shape: w }, e, t, null),
                r.setItemGraphicEl(t, A),
                (A.ignore = L),
                o.add(A)
            } else o.remove(A)
          })
          .remove(function (t) {
            var n = s.getItemGraphicEl(t)
            n && Ut(n, e, t)
          })
          .execute()
        var w = this._backgroundGroup || (this._backgroundGroup = new Ne())
        w.removeAll()
        for (var I = 0; I < v.length; ++I) w.add(v[I])
        o.add(w), (this._backgroundEls = v), (this._data = r)
      }),
      (t.prototype._renderLarge = function (e, t, n) {
        this._clear(), Ws(e, this.group), this._updateLargeClip(e)
      }),
      (t.prototype._incrementalRenderLarge = function (e, t) {
        this._removeBackground(), Ws(t, this.group, !0)
      }),
      (t.prototype._updateLargeClip = function (e) {
        var t = e.get('clip', !0) ? ns(e.coordinateSystem, !1, e) : null
        t ? this.group.setClipPath(t) : this.group.removeClipPath()
      }),
      (t.prototype._enableRealtimeSort = function (e, t, n) {
        var i = this
        if (t.count()) {
          var a = e.baseAxis
          if (this._isFirstFrame)
            this._dispatchInitSort(t, e, n), (this._isFirstFrame = !1)
          else {
            var o = function (e) {
              var n = t.getItemGraphicEl(e)
              if (n) {
                var i = n.shape
                return (
                  (a.isHorizontal() ? Math.abs(i.height) : Math.abs(i.width)) ||
                  0
                )
              }
              return 0
            }
            ;(this._onRendered = function () {
              i._updateSortWithinSameData(t, o, a, n)
            }),
              n.getZr().on('rendered', this._onRendered)
          }
        }
      }),
      (t.prototype._dataSort = function (e, t, n) {
        var a = []
        return (
          e.each(e.mapDimension(t.dim), function (e, t) {
            var i = n(t)
            ;(i = null == i ? NaN : i),
              a.push({ dataIndex: t, mappedValue: i, ordinalNumber: e })
          }),
          a.sort(function (e, t) {
            return t.mappedValue - e.mappedValue
          }),
          {
            ordinalNumbers: i(a, function (e) {
              return e.ordinalNumber
            }),
          }
        )
      }),
      (t.prototype._isOrderChangedWithinSameData = function (e, t, n) {
        for (
          var i = n.scale,
            a = e.mapDimension(n.dim),
            o = Number.MAX_VALUE,
            r = 0,
            s = i.getOrdinalMeta().categories.length;
          r < s;
          ++r
        ) {
          var l = e.rawIndexOf(a, i.getRawOrdinalNumber(r)),
            u = l < 0 ? Number.MIN_VALUE : t(e.indexOfRawIndex(l))
          if (u > o) return !0
          o = u
        }
        return !1
      }),
      (t.prototype._isOrderDifferentInView = function (e, t) {
        for (
          var n = t.scale,
            i = n.getExtent(),
            a = Math.max(0, i[0]),
            o = Math.min(i[1], n.getOrdinalMeta().categories.length - 1);
          a <= o;
          ++a
        )
          if (e.ordinalNumbers[a] !== n.getRawOrdinalNumber(a)) return !0
      }),
      (t.prototype._updateSortWithinSameData = function (e, t, n, i) {
        if (this._isOrderChangedWithinSameData(e, t, n)) {
          var a = this._dataSort(e, n, t)
          this._isOrderDifferentInView(a, n) &&
            (this._removeOnRenderedListener(i),
            i.dispatchAction({
              type: 'changeAxisOrder',
              componentType: n.dim + 'Axis',
              axisId: n.index,
              sortInfo: a,
            }))
        }
      }),
      (t.prototype._dispatchInitSort = function (e, t, n) {
        var i = t.baseAxis,
          a = this._dataSort(e, i, function (n) {
            return e.get(e.mapDimension(t.otherAxis.dim), n)
          })
        n.dispatchAction({
          type: 'changeAxisOrder',
          componentType: i.dim + 'Axis',
          isInitSort: !0,
          axisId: i.index,
          sortInfo: a,
        })
      }),
      (t.prototype.remove = function (e, t) {
        this._clear(this._model), this._removeOnRenderedListener(t)
      }),
      (t.prototype.dispose = function (e, t) {
        this._removeOnRenderedListener(t)
      }),
      (t.prototype._removeOnRenderedListener = function (e) {
        this._onRendered &&
          (e.getZr().off('rendered', this._onRendered),
          (this._onRendered = null))
      }),
      (t.prototype._clear = function (e) {
        var t = this.group,
          n = this._data
        e && e.isAnimationEnabled() && n && !this._isLargeDraw
          ? (this._removeBackground(),
            (this._backgroundEls = []),
            n.eachItemGraphicEl(function (t) {
              Ut(t, e, Be(t).dataIndex)
            }))
          : t.removeAll(),
          (this._data = null),
          (this._isFirstFrame = !0)
      }),
      (t.prototype._removeBackground = function () {
        this.group.remove(this._backgroundGroup), (this._backgroundGroup = null)
      }),
      (t.type = 'bar'),
      t
    )
  })(zt),
  Cs = {
    cartesian2d: function (e, t) {
      var n = t.width < 0 ? -1 : 1,
        i = t.height < 0 ? -1 : 1
      n < 0 && ((t.x += t.width), (t.width = -t.width)),
        i < 0 && ((t.y += t.height), (t.height = -t.height))
      var a = e.x + e.width,
        o = e.y + e.height,
        r = Ds(t.x, e.x),
        s = As(t.x + t.width, a),
        l = Ds(t.y, e.y),
        u = As(t.y + t.height, o),
        d = s < r,
        c = u < l
      return (
        (t.x = d && r > a ? s : r),
        (t.y = c && l > o ? u : l),
        (t.width = d ? 0 : s - r),
        (t.height = c ? 0 : u - l),
        n < 0 && ((t.x += t.width), (t.width = -t.width)),
        i < 0 && ((t.y += t.height), (t.height = -t.height)),
        d || c
      )
    },
    polar: function (e, t) {
      var n = t.r0 <= t.r ? 1 : -1
      if (n < 0) {
        var i = t.r
        ;(t.r = t.r0), (t.r0 = i)
      }
      var a = As(t.r, e.r),
        o = Ds(t.r0, e.r0)
      ;(t.r = a), (t.r0 = o)
      var r = a - o < 0
      if (n < 0) {
        i = t.r
        ;(t.r = t.r0), (t.r0 = i)
      }
      return r
    },
  },
  Ts = {
    cartesian2d: function (e, t, n, i, o, r, s, l, u) {
      var d = new $e({ shape: a({}, i), z2: 1 })
      ;((d.__dataIndex = n), (d.name = 'item'), r) &&
        (d.shape[o ? 'height' : 'width'] = 0)
      return d
    },
    polar: function (e, t, n, i, a, o, r, s, l) {
      var u = i.startAngle < i.endAngle,
        d = !a && l ? bs : Et,
        c = new d({ shape: C({ clockwise: u }, i), z2: 1 })
      c.name = 'item'
      var h,
        p,
        g = zs(a)
      if (
        ((c.calculateTextPosition =
          ((h = g),
          (p = ({ isRoundCap: d === bs } || {}).isRoundCap),
          function (e, t, n) {
            var i = t.position
            if (!i || i instanceof Array) return Ht(e, t, n)
            var a = h(i),
              o = null != t.distance ? t.distance : 5,
              r = this.shape,
              s = r.cx,
              l = r.cy,
              u = r.r,
              d = r.r0,
              c = (u + d) / 2,
              g = r.startAngle,
              f = r.endAngle,
              y = (g + f) / 2,
              m = p ? Math.abs(u - d) / 2 : 0,
              v = Math.cos,
              x = Math.sin,
              _ = s + u * v(g),
              S = l + u * x(g),
              b = 'left',
              w = 'top'
            switch (a) {
              case 'startArc':
                ;(_ = s + (d - o) * v(y)),
                  (S = l + (d - o) * x(y)),
                  (b = 'center'),
                  (w = 'top')
                break
              case 'insideStartArc':
                ;(_ = s + (d + o) * v(y)),
                  (S = l + (d + o) * x(y)),
                  (b = 'center'),
                  (w = 'bottom')
                break
              case 'startAngle':
                ;(_ = s + c * v(g) + ws(g, o + m, !1)),
                  (S = l + c * x(g) + Is(g, o + m, !1)),
                  (b = 'right'),
                  (w = 'middle')
                break
              case 'insideStartAngle':
                ;(_ = s + c * v(g) + ws(g, -o + m, !1)),
                  (S = l + c * x(g) + Is(g, -o + m, !1)),
                  (b = 'left'),
                  (w = 'middle')
                break
              case 'middle':
                ;(_ = s + c * v(y)),
                  (S = l + c * x(y)),
                  (b = 'center'),
                  (w = 'middle')
                break
              case 'endArc':
                ;(_ = s + (u + o) * v(y)),
                  (S = l + (u + o) * x(y)),
                  (b = 'center'),
                  (w = 'bottom')
                break
              case 'insideEndArc':
                ;(_ = s + (u - o) * v(y)),
                  (S = l + (u - o) * x(y)),
                  (b = 'center'),
                  (w = 'top')
                break
              case 'endAngle':
                ;(_ = s + c * v(f) + ws(f, o + m, !0)),
                  (S = l + c * x(f) + Is(f, o + m, !0)),
                  (b = 'left'),
                  (w = 'middle')
                break
              case 'insideEndAngle':
                ;(_ = s + c * v(f) + ws(f, -o + m, !0)),
                  (S = l + c * x(f) + Is(f, -o + m, !0)),
                  (b = 'right'),
                  (w = 'middle')
                break
              default:
                return Ht(e, t, n)
            }
            return (
              ((e = e || {}).x = _),
              (e.y = S),
              (e.align = b),
              (e.verticalAlign = w),
              e
            )
          })),
        o)
      ) {
        var f = a ? 'r' : 'endAngle',
          y = {}
        ;(c.shape[f] = a ? 0 : i.startAngle),
          (y[f] = i[f]),
          (s ? Ee : xt)(c, { shape: y }, o)
      }
      return c
    },
  }
function Ns(e, t, n, i, a, o, r, s) {
  var l, u
  o
    ? ((u = { x: i.x, width: i.width }), (l = { y: i.y, height: i.height }))
    : ((u = { y: i.y, height: i.height }), (l = { x: i.x, width: i.width })),
    s || (r ? Ee : xt)(n, { shape: l }, t, a, null)
  var d = t ? e.baseAxis.model : null
  ;(r ? Ee : xt)(n, { shape: u }, d, a)
}
function Ps(e, t) {
  for (var n = 0; n < t.length; n++) if (!isFinite(e[t[n]])) return !0
  return !1
}
var Es = ['x', 'y', 'width', 'height'],
  Rs = ['cx', 'cy', 'r', 'startAngle', 'endAngle'],
  Os = {
    cartesian2d: function (e) {
      return !Ps(e, Es)
    },
    polar: function (e) {
      return !Ps(e, Rs)
    },
  },
  Vs = {
    cartesian2d: function (e, t, n) {
      var i = e.getItemLayout(t),
        a = n
          ? (function (e, t) {
              var n = e.get(['itemStyle', 'borderColor'])
              if (!n || 'none' === n) return 0
              var i = e.get(['itemStyle', 'borderWidth']) || 0,
                a = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width),
                o = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height)
              return Math.min(i, a, o)
            })(n, i)
          : 0,
        o = i.width > 0 ? 1 : -1,
        r = i.height > 0 ? 1 : -1
      return {
        x: i.x + (o * a) / 2,
        y: i.y + (r * a) / 2,
        width: i.width - o * a,
        height: i.height - r * a,
      }
    },
    polar: function (e, t, n) {
      var i = e.getItemLayout(t)
      return {
        cx: i.cx,
        cy: i.cy,
        r0: i.r0,
        r: i.r,
        startAngle: i.startAngle,
        endAngle: i.endAngle,
      }
    },
  }
function zs(e) {
  return (
    (t = e ? 'Arc' : 'Angle'),
    function (e) {
      switch (e) {
        case 'start':
        case 'insideStart':
        case 'end':
        case 'insideEnd':
          return e + t
        default:
          return e
      }
    }
  )
  var t
}
function ks(e, n, i, a, o, r, s, l) {
  var u = n.getItemVisual(i, 'style')
  l || e.setShape('r', a.get(['itemStyle', 'borderRadius']) || 0), e.useStyle(u)
  var d = a.getShallow('cursor')
  d && e.attr('cursor', d)
  var c = l
      ? s
        ? o.r >= o.r0
          ? 'endArc'
          : 'startArc'
        : o.endAngle >= o.startAngle
        ? 'endAngle'
        : 'startAngle'
      : s
      ? o.height >= 0
        ? 'bottom'
        : 'top'
      : o.width >= 0
      ? 'right'
      : 'left',
    h = Ge(a)
  ke(e, h, {
    labelFetcher: r,
    labelDataIndex: i,
    defaultText: mr(r.getData(), i),
    inheritColor: u.fill,
    defaultOpacity: u.opacity,
    defaultOutsidePosition: c,
  })
  var p = e.getTextContent()
  if (l && p) {
    var f = a.get(['label', 'position'])
    ;(e.textConfig.inside = 'middle' === f || null),
      (function (e, t, n, i) {
        if ('number' != typeof i)
          if (g(t)) e.setTextConfig({ rotation: 0 })
          else {
            var a,
              o = e.shape,
              r = o.clockwise ? o.startAngle : o.endAngle,
              s = o.clockwise ? o.endAngle : o.startAngle,
              l = (r + s) / 2,
              u = n(t)
            switch (u) {
              case 'startArc':
              case 'insideStartArc':
              case 'middle':
              case 'insideEndArc':
              case 'endArc':
                a = l
                break
              case 'startAngle':
              case 'insideStartAngle':
                a = r
                break
              case 'endAngle':
              case 'insideEndAngle':
                a = s
                break
              default:
                return void e.setTextConfig({ rotation: 0 })
            }
            var d = 1.5 * Math.PI - a
            'middle' === u &&
              d > Math.PI / 2 &&
              d < 1.5 * Math.PI &&
              (d -= Math.PI),
              e.setTextConfig({ rotation: d })
          }
        else e.setTextConfig({ rotation: i })
      })(e, 'outside' === f ? c : f, zs(s), a.get(['label', 'rotate']))
  }
  Zt(p, h, r.getRawValue(i), function (e) {
    return vr(n, e)
  })
  var y = a.getModel(['emphasis'])
  Fe(e, y.get('focus'), y.get('blurScope')),
    Ot(e, a),
    (function (e) {
      return (
        null != e.startAngle &&
        null != e.endAngle &&
        e.startAngle === e.endAngle
      )
    })(o) &&
      ((e.style.fill = 'none'),
      (e.style.stroke = 'none'),
      t(e.states, function (e) {
        e.style && (e.style.fill = e.style.stroke = 'none')
      }))
}
var Gs = function () {},
  Bs = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'largeBar'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new Gs()
      }),
      (t.prototype.buildPath = function (e, t) {
        for (
          var n = t.points, i = this.__startPoint, a = this.__baseDimIdx, o = 0;
          o < n.length;
          o += 2
        )
          (i[a] = n[o + a]), e.moveTo(i[0], i[1]), e.lineTo(n[o], n[o + 1])
      }),
      t
    )
  })(At)
function Ws(e, t, n) {
  var i = e.getData(),
    o = [],
    r = i.getLayout('valueAxisHorizontal') ? 1 : 0
  o[1 - r] = i.getLayout('valueAxisStart')
  var s = i.getLayout('largeDataIndices'),
    l = i.getLayout('barWidth'),
    u = e.getModel('backgroundStyle')
  if (e.get('showBackground', !0)) {
    var d = i.getLayout('largeBackgroundPoints'),
      c = []
    c[1 - r] = i.getLayout('backgroundStart')
    var h = new Bs({
      shape: { points: d },
      incremental: !!n,
      silent: !0,
      z2: 0,
    })
    ;(h.__startPoint = c),
      (h.__baseDimIdx = r),
      (h.__largeDataIndices = s),
      (h.__barWidth = l),
      (function (e, t, n) {
        var i = t.get('borderColor') || t.get('color'),
          a = t.getItemStyle()
        e.useStyle(a),
          (e.style.fill = null),
          (e.style.stroke = i),
          (e.style.lineWidth = n.getLayout('barWidth'))
      })(h, u, i),
      t.add(h)
  }
  var p = new Bs({
    shape: { points: i.getLayout('largePoints') },
    incremental: !!n,
  })
  ;(p.__startPoint = o),
    (p.__baseDimIdx = r),
    (p.__largeDataIndices = s),
    (p.__barWidth = l),
    t.add(p),
    (function (e, t, n) {
      var i = n.getVisual('style')
      e.useStyle(a({}, i)),
        (e.style.fill = null),
        (e.style.stroke = i.fill),
        (e.style.lineWidth = n.getLayout('barWidth'))
    })(p, 0, i),
    (Be(p).seriesIndex = e.seriesIndex),
    e.get('silent') || (p.on('mousedown', Fs), p.on('mousemove', Fs))
}
var Fs = jt(
  function (e) {
    var t = (function (e, t, n) {
      var i = e.__baseDimIdx,
        a = 1 - i,
        o = e.shape.points,
        r = e.__largeDataIndices,
        s = Math.abs(e.__barWidth / 2),
        l = e.__startPoint[a]
      ;(Ms[0] = t), (Ms[1] = n)
      for (
        var u = Ms[i],
          d = Ms[1 - i],
          c = u - s,
          h = u + s,
          p = 0,
          g = o.length / 2;
        p < g;
        p++
      ) {
        var f = 2 * p,
          y = o[f + i],
          m = o[f + a]
        if (y >= c && y <= h && (l <= m ? d >= l && d <= m : d >= m && d <= l))
          return r[p]
      }
      return -1
    })(this, e.offsetX, e.offsetY)
    Be(this).dataIndex = t >= 0 ? t : null
  },
  30,
  !1
)
function Ys(e, t, n) {
  if (Gr(n, 'cartesian2d')) {
    var i = t,
      a = n.getArea()
    return {
      x: e ? i.x : a.x,
      y: e ? a.y : i.y,
      width: e ? i.width : a.width,
      height: e ? a.height : i.height,
    }
  }
  var o = t
  return {
    cx: (a = n.getArea()).cx,
    cy: a.cy,
    r0: e ? a.r0 : o.r0,
    r: e ? a.r : o.r,
    startAngle: e ? o.startAngle : 0,
    endAngle: e ? o.endAngle : 2 * Math.PI,
  }
}
var Xs = Ls
function Hs(e) {
  e.registerChartView(Xs),
    e.registerSeriesModel(_s),
    e.registerLayout(e.PRIORITY.VISUAL.LAYOUT, O(Jt, 'bar')),
    e.registerLayout(e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, qt),
    e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, ys('bar')),
    e.registerAction(
      { type: 'changeAxisOrder', event: 'changeAxisOrder', update: 'update' },
      function (e, t) {
        var n = e.componentType || 'series'
        t.eachComponent({ mainType: n, query: e }, function (t) {
          e.sortInfo && t.axis.setCategorySortInfo(e.sortInfo)
        })
      }
    )
}
var Us = 2 * Math.PI,
  Zs = Math.PI / 180
function js(e, t) {
  return we(e.getBoxLayoutParams(), {
    width: t.getWidth(),
    height: t.getHeight(),
  })
}
function qs(e, t) {
  var n = js(e, t),
    i = e.get('center'),
    a = e.get('radius')
  g(a) || (a = [0, a]), g(i) || (i = [i, i])
  var o = se(n.width, t.getWidth()),
    r = se(n.height, t.getHeight()),
    s = Math.min(o, r)
  return {
    cx: se(i[0], o) + n.x,
    cy: se(i[1], r) + n.y,
    r0: se(a[0], s / 2),
    r: se(a[1], s / 2),
  }
}
function Js(e, t, n) {
  t.eachSeriesByType(e, function (e) {
    var t = e.getData(),
      i = t.mapDimension('value'),
      a = js(e, n),
      o = qs(e, n),
      r = o.cx,
      s = o.cy,
      l = o.r,
      u = o.r0,
      d = -e.get('startAngle') * Zs,
      c = e.get('minAngle') * Zs,
      h = 0
    t.each(i, function (e) {
      !isNaN(e) && h++
    })
    var p = t.getSum(i),
      g = (Math.PI / (p || h)) * 2,
      f = e.get('clockwise'),
      y = e.get('roseType'),
      m = e.get('stillShowZeroSum'),
      v = t.getDataExtent(i)
    v[0] = 0
    var x = Us,
      _ = 0,
      S = d,
      b = f ? 1 : -1
    if (
      (t.setLayout({ viewRect: a, r: l }),
      t.each(i, function (e, n) {
        var i
        if (isNaN(e))
          t.setItemLayout(n, {
            angle: NaN,
            startAngle: NaN,
            endAngle: NaN,
            clockwise: f,
            cx: r,
            cy: s,
            r0: u,
            r: y ? NaN : l,
          })
        else {
          ;(i = 'area' !== y ? (0 === p && m ? g : e * g) : Us / h) < c
            ? ((i = c), (x -= c))
            : (_ += e)
          var a = S + b * i
          t.setItemLayout(n, {
            angle: i,
            startAngle: S,
            endAngle: a,
            clockwise: f,
            cx: r,
            cy: s,
            r0: u,
            r: y ? ut(e, v, [u, l]) : l,
          }),
            (S = a)
        }
      }),
      x < Us && h)
    )
      if (x <= 0.001) {
        var w = Us / h
        t.each(i, function (e, n) {
          if (!isNaN(e)) {
            var i = t.getItemLayout(n)
            ;(i.angle = w),
              (i.startAngle = d + b * n * w),
              (i.endAngle = d + b * (n + 1) * w)
          }
        })
      } else
        (g = x / _),
          (S = d),
          t.each(i, function (e, n) {
            if (!isNaN(e)) {
              var i = t.getItemLayout(n),
                a = i.angle === c ? c : e * g
              ;(i.startAngle = S), (i.endAngle = S + b * a), (S += b * a)
            }
          })
  })
}
function Ks(e) {
  return {
    seriesType: e,
    reset: function (e, t) {
      var n = t.findComponents({ mainType: 'legend' })
      if (n && n.length) {
        var i = e.getData()
        i.filterSelf(function (e) {
          for (var t = i.getName(e), a = 0; a < n.length; a++)
            if (!n[a].isSelected(t)) return !1
          return !0
        })
      }
    },
  }
}
var Qs = Math.PI / 180
function $s(e, t, n, i, a, o, r, s, l, u) {
  if (!(e.length < 2)) {
    for (var d = e.length, c = 0; c < d; c++)
      if ('outer' === e[c].position && 'labelLine' === e[c].labelAlignTo) {
        var h = e[c].label.x - u
        ;(e[c].linePoints[1][0] += h), (e[c].label.x = u)
      }
    Yi(e, l, l + r) &&
      (function (e) {
        for (
          var o = { list: [], maxY: 0 }, r = { list: [], maxY: 0 }, s = 0;
          s < e.length;
          s++
        )
          if ('none' === e[s].labelAlignTo) {
            var l = e[s],
              u = l.label.y > n ? r : o,
              d = Math.abs(l.label.y - n)
            if (d > u.maxY) {
              var c = l.label.x - t - l.len2 * a,
                h = i + l.len,
                g =
                  Math.abs(c) < h
                    ? Math.sqrt((d * d) / (1 - (c * c) / h / h))
                    : h
              ;(u.rB = g), (u.maxY = d)
            }
            u.list.push(l)
          }
        p(o), p(r)
      })(e)
  }
  function p(e) {
    for (var o = e.rB, r = o * o, s = 0; s < e.list.length; s++) {
      var l = e.list[s],
        u = Math.abs(l.label.y - n),
        d = i + l.len,
        c = d * d,
        h = Math.sqrt((1 - Math.abs((u * u) / r)) * c)
      l.label.x = t + (h + l.len2) * a
    }
  }
}
function el(e) {
  return 'center' === e.position
}
function tl(e) {
  var n,
    i,
    a = e.getData(),
    o = [],
    r = !1,
    s = (e.get('minShowLabelAngle') || 0) * Qs,
    l = a.getLayout('viewRect'),
    u = a.getLayout('r'),
    d = l.width,
    c = l.x,
    h = l.y,
    p = l.height
  function g(e) {
    e.ignore = !0
  }
  a.each(function (e) {
    var l = a.getItemGraphicEl(e),
      h = l.shape,
      p = l.getTextContent(),
      f = l.getTextGuideLine(),
      y = a.getItemModel(e),
      m = y.getModel('label'),
      v = m.get('position') || y.get(['emphasis', 'label', 'position']),
      x = m.get('distanceToLabelLine'),
      _ = m.get('alignTo'),
      S = se(m.get('edgeDistance'), d),
      b = m.get('bleedMargin'),
      w = y.getModel('labelLine'),
      I = w.get('length')
    I = se(I, d)
    var M = w.get('length2')
    if (((M = se(M, d)), Math.abs(h.endAngle - h.startAngle) < s))
      return t(p.states, g), void (p.ignore = !0)
    if (
      (function (e) {
        if (!e.ignore) return !0
        for (var t in e.states) if (!1 === e.states[t].ignore) return !0
        return !1
      })(p)
    ) {
      var D,
        A,
        L,
        C,
        T = (h.startAngle + h.endAngle) / 2,
        N = Math.cos(T),
        P = Math.sin(T)
      ;(n = h.cx), (i = h.cy)
      var E,
        R = 'inside' === v || 'inner' === v
      if ('center' === v) (D = h.cx), (A = h.cy), (C = 'center')
      else {
        var O = (R ? ((h.r + h.r0) / 2) * N : h.r * N) + n,
          V = (R ? ((h.r + h.r0) / 2) * P : h.r * P) + i
        if (((D = O + 3 * N), (A = V + 3 * P), !R)) {
          var z = O + N * (I + u - h.r),
            k = V + P * (I + u - h.r),
            G = z + (N < 0 ? -1 : 1) * M
          ;(D =
            'edge' === _ ? (N < 0 ? c + S : c + d - S) : G + (N < 0 ? -x : x)),
            (A = k),
            (L = [
              [O, V],
              [z, k],
              [G, k],
            ])
        }
        C = R
          ? 'center'
          : 'edge' === _
          ? N > 0
            ? 'right'
            : 'left'
          : N > 0
          ? 'left'
          : 'right'
      }
      var B = m.get('rotate')
      if ('number' == typeof B) E = B * (Math.PI / 180)
      else if ('center' === v) E = 0
      else {
        var F = N < 0 ? -T + Math.PI : -T
        'radial' === B || !0 === B
          ? (E = F)
          : 'tangential' === B && 'outside' !== v && 'outer' !== v
          ? (E = F + Math.PI / 2) > Math.PI / 2 && (E -= Math.PI)
          : (E = 0)
      }
      if (
        ((r = !!E),
        (p.x = D),
        (p.y = A),
        (p.rotation = E),
        p.setStyle({ verticalAlign: 'middle' }),
        R)
      ) {
        p.setStyle({ align: C })
        var Y = p.states.select
        Y && ((Y.x += p.x), (Y.y += p.y))
      } else {
        var X = p.getBoundingRect().clone()
        X.applyTransform(p.getComputedTransform())
        var H = (p.style.margin || 0) + 2.1
        ;(X.y -= H / 2),
          (X.height += H),
          o.push({
            label: p,
            labelLine: f,
            position: v,
            len: I,
            len2: M,
            minTurnAngle: w.get('minTurnAngle'),
            maxSurfaceAngle: w.get('maxSurfaceAngle'),
            surfaceNormal: new W(N, P),
            linePoints: L,
            textAlign: C,
            labelDistance: x,
            labelAlignTo: _,
            edgeDistance: S,
            bleedMargin: b,
            rect: X,
          })
      }
      l.setTextConfig({ inside: R })
    }
  }),
    !r &&
      e.get('avoidLabelOverlap') &&
      (function (e, t, n, i, a, o, r, s) {
        for (
          var l = [],
            u = [],
            d = Number.MAX_VALUE,
            c = -Number.MAX_VALUE,
            h = 0;
          h < e.length;
          h++
        ) {
          var p = e[h].label
          el(e[h]) ||
            (p.x < t
              ? ((d = Math.min(d, p.x)), l.push(e[h]))
              : ((c = Math.max(c, p.x)), u.push(e[h])))
        }
        for (
          $s(u, t, n, i, 1, 0, o, 0, s, c),
            $s(l, t, n, i, -1, 0, o, 0, s, d),
            h = 0;
          h < e.length;
          h++
        ) {
          var g = e[h]
          if (((p = g.label), !el(g))) {
            var f = g.linePoints
            if (f) {
              var y = 'edge' === g.labelAlignTo,
                m = g.rect.width,
                v = void 0
              ;(v = y
                ? p.x < t
                  ? f[2][0] - g.labelDistance - r - g.edgeDistance
                  : r + a - g.edgeDistance - f[2][0] - g.labelDistance
                : p.x < t
                ? p.x - r - g.bleedMargin
                : r + a - p.x - g.bleedMargin) < g.rect.width &&
                ((g.label.style.width = v),
                'edge' === g.labelAlignTo && (m = v))
              var x = f[1][0] - f[2][0]
              y
                ? p.x < t
                  ? (f[2][0] = r + g.edgeDistance + m + g.labelDistance)
                  : (f[2][0] = r + a - g.edgeDistance - m - g.labelDistance)
                : (p.x < t
                    ? (f[2][0] = p.x + g.labelDistance)
                    : (f[2][0] = p.x - g.labelDistance),
                  (f[1][0] = f[2][0] + x)),
                (f[1][1] = f[2][1] = p.y)
            }
          }
        }
      })(o, n, i, u, d, p, c, h)
  for (var f = 0; f < o.length; f++) {
    var y = o[f],
      m = y.label,
      v = y.labelLine,
      x = isNaN(m.x) || isNaN(m.y)
    if (m) {
      m.setStyle({ align: y.textAlign }), x && (t(m.states, g), (m.ignore = !0))
      var _ = m.states.select
      _ && ((_.x += m.x), (_.y += m.y))
    }
    if (v) {
      var S = y.linePoints
      x || !S
        ? (t(v.states, g), (v.ignore = !0))
        : (zi(S, y.minTurnAngle),
          ki(S, y.surfaceNormal, y.maxSurfaceAngle),
          v.setShape({ points: S }),
          (m.__hostTarget.textGuideLineConfig = {
            anchor: new W(S[0][0], S[0][1]),
          }))
    }
  }
}
function nl(e, t, n) {
  var i = e.get('borderRadius')
  return null == i
    ? n
      ? { innerCornerRadius: 0, cornerRadius: 0 }
      : null
    : (g(i) || (i = [i, i]),
      { innerCornerRadius: Kt(i[0], t.r0), cornerRadius: Kt(i[1], t.r) })
}
var il = (function (e) {
    function t(t, n, i) {
      var a = e.call(this) || this
      a.z2 = 2
      var o = new Gt()
      return a.setTextContent(o), a.updateData(t, n, i, !0), a
    }
    return (
      j(t, e),
      (t.prototype.updateData = function (e, t, n, i) {
        var o = this,
          r = e.hostModel,
          s = e.getItemModel(t),
          l = s.getModel('emphasis'),
          u = e.getItemLayout(t),
          d = a(nl(s.getModel('itemStyle'), u, !0), u)
        if (isNaN(d.startAngle)) o.setShape(d)
        else {
          if (i)
            o.setShape(d),
              'scale' === r.getShallow('animationType')
                ? ((o.shape.r = u.r0), xt(o, { shape: { r: u.r } }, r, t))
                : null != n
                ? (o.setShape({ startAngle: n, endAngle: n }),
                  xt(
                    o,
                    {
                      shape: { startAngle: u.startAngle, endAngle: u.endAngle },
                    },
                    r,
                    t
                  ))
                : ((o.shape.endAngle = u.startAngle),
                  Ee(o, { shape: { endAngle: u.endAngle } }, r, t))
          else vt(o), Ee(o, { shape: d }, r, t)
          o.useStyle(e.getItemVisual(t, 'style')), Ot(o, s)
          var c = (u.startAngle + u.endAngle) / 2,
            h = r.get('selectedOffset'),
            p = Math.cos(c) * h,
            g = Math.sin(c) * h,
            f = s.getShallow('cursor')
          f && o.attr('cursor', f),
            this._updateLabel(r, e, t),
            (o.ensureState('emphasis').shape = Qt(
              { r: u.r + ((l.get('scale') && l.get('scaleSize')) || 0) },
              nl(l.getModel('itemStyle'), u)
            )),
            a(o.ensureState('select'), {
              x: p,
              y: g,
              shape: nl(s.getModel(['select', 'itemStyle']), u),
            }),
            a(o.ensureState('blur'), {
              shape: nl(s.getModel(['blur', 'itemStyle']), u),
            })
          var y = o.getTextGuideLine(),
            m = o.getTextContent()
          y && a(y.ensureState('select'), { x: p, y: g }),
            a(m.ensureState('select'), { x: p, y: g }),
            Fe(this, l.get('focus'), l.get('blurScope'))
        }
      }),
      (t.prototype._updateLabel = function (e, t, n) {
        var i = this,
          a = t.getItemModel(n),
          o = a.getModel('labelLine'),
          r = t.getItemVisual(n, 'style'),
          s = r && r.fill,
          l = r && r.opacity
        ke(i, Ge(a), {
          labelFetcher: t.hostModel,
          labelDataIndex: n,
          inheritColor: s,
          defaultOpacity: l,
          defaultText: e.getFormattedLabel(n, 'normal') || t.getName(n),
        })
        var u = i.getTextContent()
        i.setTextConfig({ position: null, rotation: null }), u.attr({ z2: 10 })
        var d = e.get(['label', 'position'])
        if ('outside' !== d && 'outer' !== d) i.removeTextGuideLine()
        else {
          var c = this.getTextGuideLine()
          c || ((c = new X()), this.setTextGuideLine(c)),
            Wi(this, Fi(a), {
              stroke: s,
              opacity: $t(o.get(['lineStyle', 'opacity']), l, 1),
            })
        }
      }),
      t
    )
  })(Et),
  al = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.ignoreLabelLineUpdate = !0), t
    }
    return (
      j(t, e),
      (t.prototype.init = function () {
        var e = new Ne()
        this._sectorGroup = e
      }),
      (t.prototype.render = function (e, t, n, i) {
        var a,
          o = e.getData(),
          r = this._data,
          s = this.group
        if (!r && o.count() > 0) {
          for (
            var l = o.getItemLayout(0), u = 1;
            isNaN(l && l.startAngle) && u < o.count();
            ++u
          )
            l = o.getItemLayout(u)
          l && (a = l.startAngle)
        }
        if (
          (this._emptyCircleSector && s.remove(this._emptyCircleSector),
          0 === o.count() && e.get('showEmptyCircle'))
        ) {
          var d = new Et({ shape: qs(e, n) })
          d.useStyle(e.getModel('emptyCircleStyle').getItemStyle()),
            (this._emptyCircleSector = d),
            s.add(d)
        }
        o
          .diff(r)
          .add(function (e) {
            var t = new il(o, e, a)
            o.setItemGraphicEl(e, t), s.add(t)
          })
          .update(function (e, t) {
            var n = r.getItemGraphicEl(t)
            n.updateData(o, e, a),
              n.off('click'),
              s.add(n),
              o.setItemGraphicEl(e, n)
          })
          .remove(function (t) {
            var n = r.getItemGraphicEl(t)
            Ut(n, e, t)
          })
          .execute(),
          tl(e),
          'expansion' !== e.get('animationTypeUpdate') && (this._data = o)
      }),
      (t.prototype.dispose = function () {}),
      (t.prototype.containPoint = function (e, t) {
        var n = t.getData().getItemLayout(0)
        if (n) {
          var i = e[0] - n.cx,
            a = e[1] - n.cy,
            o = Math.sqrt(i * i + a * a)
          return o <= n.r && o >= n.r0
        }
      }),
      (t.type = 'pie'),
      t
    )
  })(zt)
function ol(e, t, n) {
  t = (g(t) && { coordDimensions: t }) || a({ encodeDefine: e.getEncode() }, t)
  var i = e.getSource(),
    o = wi(i, t).dimensions,
    r = new bi(o, e)
  return r.initData(i, n), r
}
var rl = (function () {
    function e(e, t) {
      ;(this._getDataWithEncodedVisual = e), (this._getRawData = t)
    }
    return (
      (e.prototype.getAllNames = function () {
        var e = this._getRawData()
        return e.mapArray(e.getName)
      }),
      (e.prototype.containName = function (e) {
        return this._getRawData().indexOfName(e) >= 0
      }),
      (e.prototype.indexOfName = function (e) {
        return this._getDataWithEncodedVisual().indexOfName(e)
      }),
      (e.prototype.getItemVisual = function (e, t) {
        return this._getDataWithEncodedVisual().getItemVisual(e, t)
      }),
      e
    )
  })(),
  sl = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this
    }
    return (
      j(t, e),
      (t.prototype.init = function (t) {
        e.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new rl(
            f(this.getData, this),
            f(this.getRawData, this)
          )),
          this._defaultLabelLine(t)
      }),
      (t.prototype.mergeOption = function () {
        e.prototype.mergeOption.apply(this, arguments)
      }),
      (t.prototype.getInitialData = function () {
        return ol(this, {
          coordDimensions: ['value'],
          encodeDefaulter: O(en, this),
        })
      }),
      (t.prototype.getDataParams = function (t) {
        var n = this.getData(),
          i = e.prototype.getDataParams.call(this, t),
          a = []
        return (
          n.each(n.mapDimension('value'), function (e) {
            a.push(e)
          }),
          (i.percent = tn(a, t, n.hostModel.get('percentPrecision'))),
          i.$vars.push('percent'),
          i
        )
      }),
      (t.prototype._defaultLabelLine = function (e) {
        Ie(e, 'labelLine', ['show'])
        var t = e.labelLine,
          n = e.emphasis.labelLine
        ;(t.show = t.show && e.label.show),
          (n.show = n.show && e.emphasis.label.show)
      }),
      (t.type = 'series.pie'),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        legendHoverLink: !0,
        colorBy: 'data',
        center: ['50%', '50%'],
        radius: [0, '75%'],
        clockwise: !0,
        startAngle: 90,
        minAngle: 0,
        minShowLabelAngle: 0,
        selectedOffset: 10,
        percentPrecision: 2,
        stillShowZeroSum: !0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: null,
        height: null,
        label: {
          rotate: 0,
          show: !0,
          overflow: 'truncate',
          position: 'outer',
          alignTo: 'none',
          edgeDistance: '25%',
          bleedMargin: 10,
          distanceToLabelLine: 5,
        },
        labelLine: {
          show: !0,
          length: 15,
          length2: 15,
          smooth: !1,
          minTurnAngle: 90,
          maxSurfaceAngle: 90,
          lineStyle: { width: 1, type: 'solid' },
        },
        itemStyle: { borderWidth: 1, borderJoin: 'round' },
        showEmptyCircle: !0,
        emptyCircleStyle: { color: 'lightgray', opacity: 1 },
        labelLayout: { hideOverlap: !0 },
        emphasis: { scale: !0, scaleSize: 5 },
        avoidLabelOverlap: !0,
        animationType: 'expansion',
        animationDuration: 1e3,
        animationTypeUpdate: 'transition',
        animationEasingUpdate: 'cubicInOut',
        animationDurationUpdate: 500,
        animationEasing: 'cubicInOut',
      }),
      t
    )
  })(Ct)
function ll(e) {
  e.registerChartView(al),
    e.registerSeriesModel(sl),
    nn('pie', e.registerAction),
    e.registerLayout(O(Js, 'pie')),
    e.registerProcessor(Ks('pie')),
    e.registerProcessor({
      seriesType: 'pie',
      reset: function (e, t) {
        var n = e.getData()
        n.filterSelf(function (e) {
          var t = n.mapDimension('value'),
            i = n.get(t, e)
          return !('number' == typeof i && !isNaN(i) && i < 0)
        })
      },
    })
}
var ul = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n.hasSymbolVisual = !0), n
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function (e, t) {
        return Li(null, this, { useEncodeDefaulter: !0 })
      }),
      (t.prototype.getProgressive = function () {
        var e = this.option.progressive
        return null == e
          ? this.option.large
            ? 5e3
            : this.get('progressive')
          : e
      }),
      (t.prototype.getProgressiveThreshold = function () {
        var e = this.option.progressiveThreshold
        return null == e
          ? this.option.large
            ? 1e4
            : this.get('progressiveThreshold')
          : e
      }),
      (t.prototype.brushSelector = function (e, t, n) {
        return n.point(t.getItemLayout(e))
      }),
      (t.type = 'series.scatter'),
      (t.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
      (t.defaultOption = {
        coordinateSystem: 'cartesian2d',
        zlevel: 0,
        z: 2,
        legendHoverLink: !0,
        symbolSize: 10,
        large: !1,
        largeThreshold: 2e3,
        itemStyle: { opacity: 0.8 },
        emphasis: { scale: !0 },
        clip: !0,
        select: { itemStyle: { borderColor: '#212121' } },
        universalTransition: { divideShape: 'clone' },
      }),
      t
    )
  })(Ct),
  dl = function () {},
  cl = (function (e) {
    function t(t) {
      return e.call(this, t) || this
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new dl()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.points,
          i = t.size,
          a = this.symbolProxy,
          o = a.shape,
          r = e.getContext ? e.getContext() : e
        if (r && i[0] < 4) this._ctx = r
        else {
          this._ctx = null
          for (var s = 0; s < n.length; ) {
            var l = n[s++],
              u = n[s++]
            isNaN(l) ||
              isNaN(u) ||
              (this.softClipShape && !this.softClipShape.contain(l, u)) ||
              ((o.x = l - i[0] / 2),
              (o.y = u - i[1] / 2),
              (o.width = i[0]),
              (o.height = i[1]),
              a.buildPath(e, o, !0))
          }
        }
      }),
      (t.prototype.afterBrush = function () {
        var e = this.shape,
          t = e.points,
          n = e.size,
          i = this._ctx
        if (i)
          for (var a = 0; a < t.length; ) {
            var o = t[a++],
              r = t[a++]
            isNaN(o) ||
              isNaN(r) ||
              (this.softClipShape && !this.softClipShape.contain(o, r)) ||
              i.fillRect(o - n[0] / 2, r - n[1] / 2, n[0], n[1])
          }
      }),
      (t.prototype.findDataIndex = function (e, t) {
        for (
          var n = this.shape,
            i = n.points,
            a = n.size,
            o = Math.max(a[0], 4),
            r = Math.max(a[1], 4),
            s = i.length / 2 - 1;
          s >= 0;
          s--
        ) {
          var l = 2 * s,
            u = i[l] - o / 2,
            d = i[l + 1] - r / 2
          if (e >= u && t >= d && e <= u + o && t <= d + r) return s
        }
        return -1
      }),
      t
    )
  })(At),
  hl = (function () {
    function e() {
      this.group = new Ne()
    }
    return (
      (e.prototype.isPersistent = function () {
        return !this._incremental
      }),
      (e.prototype.updateData = function (e, t) {
        this.group.removeAll()
        var n = new cl({ rectHover: !0, cursor: 'default' })
        n.setShape({ points: e.getLayout('points') }),
          this._setCommon(n, e, !1, t),
          this.group.add(n),
          (this._incremental = null)
      }),
      (e.prototype.updateLayout = function (e) {
        if (!this._incremental) {
          var t = e.getLayout('points')
          this.group.eachChild(function (e) {
            if (null != e.startIndex) {
              var n = 2 * (e.endIndex - e.startIndex),
                i = 4 * e.startIndex * 2
              t = new Float32Array(t.buffer, i, n)
            }
            e.setShape('points', t)
          })
        }
      }),
      (e.prototype.incrementalPrepareUpdate = function (e) {
        this.group.removeAll(),
          this._clearIncremental(),
          e.count() > 2e6
            ? (this._incremental ||
                (this._incremental = new an({ silent: !0 })),
              this.group.add(this._incremental))
            : (this._incremental = null)
      }),
      (e.prototype.incrementalUpdate = function (e, t, n) {
        var i
        this._incremental
          ? ((i = new cl()), this._incremental.addDisplayable(i, !0))
          : (((i = new cl({
              rectHover: !0,
              cursor: 'default',
              startIndex: e.start,
              endIndex: e.end,
            })).incremental = !0),
            this.group.add(i)),
          i.setShape({ points: t.getLayout('points') }),
          this._setCommon(i, t, !!this._incremental, n)
      }),
      (e.prototype._setCommon = function (e, t, n, i) {
        var a = t.hostModel
        i = i || {}
        var o = t.getVisual('symbolSize')
        e.setShape('size', o instanceof Array ? o : [o, o]),
          (e.softClipShape = i.clipShape || null),
          (e.symbolProxy = ft(t.getVisual('symbol'), 0, 0, 0, 0)),
          (e.setColor = e.symbolProxy.setColor)
        var r = e.shape.size[0] < 4
        e.useStyle(
          a
            .getModel('itemStyle')
            .getItemStyle(
              r ? ['color', 'shadowBlur', 'shadowColor'] : ['color']
            )
        )
        var s = t.getVisual('style'),
          l = s && s.fill
        if ((l && e.setColor(l), !n)) {
          var u = Be(e)
          ;(u.seriesIndex = a.seriesIndex),
            e.on('mousemove', function (t) {
              u.dataIndex = null
              var n = e.findDataIndex(t.offsetX, t.offsetY)
              n >= 0 && (u.dataIndex = n + (e.startIndex || 0))
            })
        }
      }),
      (e.prototype.remove = function () {
        this._clearIncremental(),
          (this._incremental = null),
          this.group.removeAll()
      }),
      (e.prototype._clearIncremental = function () {
        var e = this._incremental
        e && e.clearDisplaybles()
      }),
      e
    )
  })(),
  pl = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        var i = e.getData()
        this._updateSymbolDraw(i, e).updateData(i, {
          clipShape: this._getClipShape(e),
        }),
          (this._finished = !0)
      }),
      (t.prototype.incrementalPrepareRender = function (e, t, n) {
        var i = e.getData()
        this._updateSymbolDraw(i, e).incrementalPrepareUpdate(i),
          (this._finished = !1)
      }),
      (t.prototype.incrementalRender = function (e, t, n) {
        this._symbolDraw.incrementalUpdate(e, t.getData(), {
          clipShape: this._getClipShape(t),
        }),
          (this._finished = e.end === t.getData().count())
      }),
      (t.prototype.updateTransform = function (e, t, n) {
        var i = e.getData()
        if (
          (this.group.dirty(),
          !this._finished ||
            i.count() > 1e4 ||
            !this._symbolDraw.isPersistent())
        )
          return { update: !0 }
        var a = ps('').reset(e, t, n)
        a.progress &&
          a.progress({ start: 0, end: i.count(), count: i.count() }, i),
          this._symbolDraw.updateLayout(i)
      }),
      (t.prototype._getClipShape = function (e) {
        var t = e.coordinateSystem,
          n = t && t.getArea && t.getArea()
        return e.get('clip', !0) ? n : null
      }),
      (t.prototype._updateSymbolDraw = function (e, t) {
        var n = this._symbolDraw,
          i = t.pipelineContext.large
        return (
          (n && i === this._isLargeDraw) ||
            (n && n.remove(),
            (n = this._symbolDraw = i ? new hl() : new Ir()),
            (this._isLargeDraw = i),
            this.group.removeAll()),
          this.group.add(n.group),
          n
        )
      }),
      (t.prototype.remove = function (e, t) {
        this._symbolDraw && this._symbolDraw.remove(!0),
          (this._symbolDraw = null)
      }),
      (t.prototype.dispose = function () {}),
      (t.type = 'scatter'),
      t
    )
  })(zt)
function gl(e) {
  on(rn),
    e.registerSeriesModel(ul),
    e.registerChartView(pl),
    e.registerLayout(ps('scatter'))
}
function fl(e) {
  e.eachSeriesByType('radar', function (e) {
    var n = e.getData(),
      i = [],
      a = e.coordinateSystem
    if (a) {
      var o = a.getIndicatorAxes()
      t(o, function (e, t) {
        n.each(n.mapDimension(o[t].dim), function (e, n) {
          i[n] = i[n] || []
          var o = a.dataToPoint(e, t)
          i[n][t] = yl(o) ? o : ml(a)
        })
      }),
        n.each(function (e) {
          var t =
            sn(i[e], function (e) {
              return yl(e)
            }) || ml(a)
          i[e].push(t.slice()), n.setItemLayout(e, i[e])
        })
    }
  })
}
function yl(e) {
  return !isNaN(e[0]) && !isNaN(e[1])
}
function ml(e) {
  return [e.cx, e.cy]
}
function vl(e) {
  var n = e.polar
  if (n) {
    g(n) || (n = [n])
    var i = []
    t(n, function (t, n) {
      t.indicator
        ? (t.type && !t.shape && (t.shape = t.type),
          (e.radar = e.radar || []),
          g(e.radar) || (e.radar = [e.radar]),
          e.radar.push(t))
        : i.push(t)
    }),
      (e.polar = i)
  }
  t(e.series, function (e) {
    e && 'radar' === e.type && e.polarIndex && (e.radarIndex = e.polarIndex)
  })
}
var xl = (function (e) {
    function n() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.type = n.type), t
    }
    return (
      j(n, e),
      (n.prototype.render = function (e, n, o) {
        var r = e.coordinateSystem,
          s = this.group,
          l = e.getData(),
          u = this._data
        function d(e, t) {
          var n = e.getItemVisual(t, 'symbol') || 'circle'
          if ('none' !== n) {
            var i = wt(e.getItemVisual(t, 'symbolSize')),
              a = ft(n, -1, -1, 2, 2),
              o = e.getItemVisual(t, 'symbolRotate') || 0
            return (
              a.attr({
                style: { strokeNoScale: !0 },
                z2: 100,
                scaleX: i[0] / 2,
                scaleY: i[1] / 2,
                rotation: (o * Math.PI) / 180 || 0,
              }),
              a
            )
          }
        }
        function c(t, n, i, a, o, r) {
          i.removeAll()
          for (var s = 0; s < n.length - 1; s++) {
            var l = d(a, o)
            l &&
              ((l.__dimIdx = s),
              t[s]
                ? (l.setPosition(t[s]),
                  ln[r ? 'initProps' : 'updateProps'](
                    l,
                    { x: n[s][0], y: n[s][1] },
                    e,
                    o
                  ))
                : l.setPosition(n[s]),
              i.add(l))
          }
        }
        function h(e) {
          return i(e, function (e) {
            return [r.cx, r.cy]
          })
        }
        l
          .diff(u)
          .add(function (t) {
            var n = l.getItemLayout(t)
            if (n) {
              var i = new ie(),
                a = new X(),
                o = { shape: { points: n } }
              ;(i.shape.points = h(n)),
                (a.shape.points = h(n)),
                xt(i, o, e, t),
                xt(a, o, e, t)
              var r = new Ne(),
                s = new Ne()
              r.add(a),
                r.add(i),
                r.add(s),
                c(a.shape.points, n, s, l, t, !0),
                l.setItemGraphicEl(t, r)
            }
          })
          .update(function (t, n) {
            var i = u.getItemGraphicEl(n),
              a = i.childAt(0),
              o = i.childAt(1),
              r = i.childAt(2),
              s = { shape: { points: l.getItemLayout(t) } }
            s.shape.points &&
              (c(a.shape.points, s.shape.points, r, l, t, !1),
              vt(o),
              vt(a),
              Ee(a, s, e),
              Ee(o, s, e),
              l.setItemGraphicEl(t, i))
          })
          .remove(function (e) {
            s.remove(u.getItemGraphicEl(e))
          })
          .execute(),
          l.eachItemGraphicEl(function (e, n) {
            var i = l.getItemModel(n),
              o = e.childAt(0),
              r = e.childAt(1),
              u = e.childAt(2),
              d = l.getItemVisual(n, 'style'),
              c = d.fill
            s.add(e),
              o.useStyle(
                C(i.getModel('lineStyle').getLineStyle(), {
                  fill: 'none',
                  stroke: c,
                })
              ),
              Ot(o, i, 'lineStyle'),
              Ot(r, i, 'areaStyle')
            var h = i.getModel('areaStyle'),
              p = h.isEmpty() && h.parentModel.isEmpty()
            ;(r.ignore = p),
              t(['emphasis', 'select', 'blur'], function (e) {
                var t = i.getModel([e, 'areaStyle']),
                  n = t.isEmpty() && t.parentModel.isEmpty()
                r.ensureState(e).ignore = n && p
              }),
              r.useStyle(
                C(h.getAreaStyle(), { fill: c, opacity: 0.7, decal: d.decal })
              )
            var g = i.getModel('emphasis'),
              f = g.getModel('itemStyle').getItemStyle()
            u.eachChild(function (e) {
              if (e instanceof St) {
                var t = e.style
                e.useStyle(
                  a(
                    {
                      image: t.image,
                      x: t.x,
                      y: t.y,
                      width: t.width,
                      height: t.height,
                    },
                    d
                  )
                )
              } else e.useStyle(d), e.setColor(c), (e.style.strokeNoScale = !0)
              e.ensureState('emphasis').style = _(f)
              var o = l.getStore().get(l.getDimensionIndex(e.__dimIdx), n)
              ;(null == o || isNaN(o)) && (o = ''),
                ke(e, Ge(i), {
                  labelFetcher: l.hostModel,
                  labelDataIndex: n,
                  labelDimIndex: e.__dimIdx,
                  defaultText: o,
                  inheritColor: c,
                  defaultOpacity: d.opacity,
                })
            }),
              Fe(e, g.get('focus'), g.get('blurScope'))
          }),
          (this._data = l)
      }),
      (n.prototype.remove = function () {
        this.group.removeAll(), (this._data = null)
      }),
      (n.type = 'radar'),
      n
    )
  })(zt),
  _l = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n.hasSymbolVisual = !0), n
    }
    return (
      j(t, e),
      (t.prototype.init = function (t) {
        e.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new rl(
            f(this.getData, this),
            f(this.getRawData, this)
          ))
      }),
      (t.prototype.getInitialData = function (e, t) {
        return ol(this, {
          generateCoord: 'indicator_',
          generateCoordCount: 1 / 0,
        })
      }),
      (t.prototype.formatTooltip = function (e, t, n) {
        var a = this.getData(),
          o = this.coordinateSystem.getIndicatorAxes(),
          r = this.getData().getName(e),
          s = '' === r ? this.name : r,
          l = un(this, e)
        return dn('section', {
          header: s,
          sortBlocks: !0,
          blocks: i(o, function (t) {
            var n = a.get(a.mapDimension(t.dim), e)
            return dn('nameValue', {
              markerType: 'subItem',
              markerColor: l,
              name: t.name,
              value: n,
              sortParam: n,
            })
          }),
        })
      }),
      (t.prototype.getTooltipPosition = function (e) {
        if (null != e)
          for (
            var t = this.getData(),
              n = this.coordinateSystem,
              a = t.getValues(
                i(n.dimensions, function (e) {
                  return t.mapDimension(e)
                }),
                e
              ),
              o = 0,
              r = a.length;
            o < r;
            o++
          )
            if (!isNaN(a[o])) {
              var s = n.getIndicatorAxes()
              return n.coordToPoint(s[o].dataToCoord(a[o]), o)
            }
      }),
      (t.type = 'series.radar'),
      (t.dependencies = ['radar']),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        colorBy: 'data',
        coordinateSystem: 'radar',
        legendHoverLink: !0,
        radarIndex: 0,
        lineStyle: { width: 2, type: 'solid', join: 'round' },
        label: { position: 'top' },
        symbolSize: 8,
      }),
      t
    )
  })(Ct)
function Sl(e) {
  on(Ki),
    e.registerChartView(xl),
    e.registerSeriesModel(_l),
    e.registerLayout(fl),
    e.registerProcessor(Ks('radar')),
    e.registerPreprocessor(vl)
}
var bl = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n, i) {
        if (!i || 'mapToggleSelect' !== i.type || i.from !== this.uid) {
          var a = this.group
          if ((a.removeAll(), !e.getHostGeoModel())) {
            if (
              (this._mapDraw &&
                i &&
                'geoRoam' === i.type &&
                this._mapDraw.resetForLabelLayout(),
              i &&
                'geoRoam' === i.type &&
                'series' === i.componentType &&
                i.seriesId === e.id)
            )
              (o = this._mapDraw) && a.add(o.group)
            else if (e.needsDrawMap) {
              var o = this._mapDraw || new Pa(n)
              a.add(o.group), o.draw(e, t, n, this, i), (this._mapDraw = o)
            } else
              this._mapDraw && this._mapDraw.remove(), (this._mapDraw = null)
            e.get('showLegendSymbol') &&
              t.getComponent('legend') &&
              this._renderSymbols(e, t, n)
          }
        }
      }),
      (t.prototype.remove = function () {
        this._mapDraw && this._mapDraw.remove(),
          (this._mapDraw = null),
          this.group.removeAll()
      }),
      (t.prototype.dispose = function () {
        this._mapDraw && this._mapDraw.remove(), (this._mapDraw = null)
      }),
      (t.prototype._renderSymbols = function (e, t, n) {
        var i = e.originalData,
          a = this.group
        i.each(i.mapDimension('value'), function (t, n) {
          if (!isNaN(t)) {
            var o = i.getItemLayout(n)
            if (o && o.point) {
              var r = o.point,
                s = o.offset,
                l = new te({
                  style: { fill: e.getData().getVisual('style').fill },
                  shape: { cx: r[0] + 9 * s, cy: r[1], r: 3 },
                  silent: !0,
                  z2: 8 + (s ? 0 : cn + 1),
                })
              if (!s) {
                var u = e.mainSeries.getData(),
                  d = i.getName(n),
                  c = u.indexOfName(d),
                  h = i.getItemModel(n),
                  p = h.getModel('label'),
                  g = u.getItemGraphicEl(c)
                ke(l, Ge(h), {
                  labelFetcher: {
                    getFormattedLabel: function (t, n) {
                      return e.getFormattedLabel(c, n)
                    },
                  },
                }),
                  (l.disableLabelAnimation = !0),
                  p.get('position') || l.setTextConfig({ position: 'bottom' }),
                  (g.onHoverStateChange = function (e) {
                    kt(l, e)
                  })
              }
              a.add(l)
            }
          }
        })
      }),
      (t.type = 'map'),
      t
    )
  })(zt),
  wl = (function (n) {
    function i() {
      var e = (null !== n && n.apply(this, arguments)) || this
      return (
        (e.type = i.type),
        (e.needsDrawMap = !1),
        (e.seriesGroup = []),
        (e.getTooltipPosition = function (e) {
          if (null != e) {
            var t = this.getData().getName(e),
              n = this.coordinateSystem,
              i = n.getRegion(t)
            return i && n.dataToPoint(i.getCenter())
          }
        }),
        e
      )
    }
    return (
      j(i, n),
      (i.prototype.getInitialData = function (n) {
        for (
          var i = ol(this, {
              coordDimensions: ['value'],
              encodeDefaulter: O(en, this),
            }),
            a = e(),
            o = [],
            r = 0,
            s = i.count();
          r < s;
          r++
        ) {
          var l = i.getName(r)
          a.set(l, !0)
        }
        var u = _e.load(
          this.getMapType(),
          this.option.nameMap,
          this.option.nameProperty
        )
        return (
          t(u.regions, function (e) {
            var t = e.name
            a.get(t) || o.push(t)
          }),
          i.appendValues([], o),
          i
        )
      }),
      (i.prototype.getHostGeoModel = function () {
        var e = this.option.geoIndex
        return null != e ? this.ecModel.getComponent('geo', e) : null
      }),
      (i.prototype.getMapType = function () {
        return (this.getHostGeoModel() || this).option.map
      }),
      (i.prototype.getRawValue = function (e) {
        var t = this.getData()
        return t.get(t.mapDimension('value'), e)
      }),
      (i.prototype.getRegionModel = function (e) {
        var t = this.getData()
        return t.getItemModel(t.indexOfName(e))
      }),
      (i.prototype.formatTooltip = function (e, t, n) {
        for (
          var i = this.getData(),
            a = this.getRawValue(e),
            o = i.getName(e),
            r = this.seriesGroup,
            s = [],
            l = 0;
          l < r.length;
          l++
        ) {
          var u = r[l].originalData.indexOfName(o),
            d = i.mapDimension('value')
          isNaN(r[l].originalData.get(d, u)) || s.push(r[l].name)
        }
        return dn('section', {
          header: s.join(', '),
          noHeader: !s.length,
          blocks: [dn('nameValue', { name: o, value: a })],
        })
      }),
      (i.prototype.setZoom = function (e) {
        this.option.zoom = e
      }),
      (i.prototype.setCenter = function (e) {
        this.option.center = e
      }),
      (i.prototype.getLegendIcon = function (e) {
        var t = e.icon || 'roundRect',
          n = ft(t, 0, 0, e.itemWidth, e.itemHeight, e.itemStyle.fill)
        return (
          n.setStyle(e.itemStyle),
          (n.style.stroke = 'none'),
          t.indexOf('empty') > -1 &&
            ((n.style.stroke = n.style.fill),
            (n.style.fill = '#fff'),
            (n.style.lineWidth = 2)),
          n
        )
      }),
      (i.type = 'series.map'),
      (i.dependencies = ['geo']),
      (i.layoutMode = 'box'),
      (i.defaultOption = {
        zlevel: 0,
        z: 2,
        coordinateSystem: 'geo',
        map: '',
        left: 'center',
        top: 'center',
        aspectScale: null,
        showLegendSymbol: !0,
        boundingCoords: null,
        center: null,
        zoom: 1,
        scaleLimit: null,
        selectedMode: !0,
        label: { show: !1, color: '#000' },
        itemStyle: { borderWidth: 0.5, borderColor: '#444', areaColor: '#eee' },
        emphasis: {
          label: { show: !0, color: 'rgb(100,0,0)' },
          itemStyle: { areaColor: 'rgba(255,215,0,0.8)' },
        },
        select: {
          label: { show: !0, color: 'rgb(100,0,0)' },
          itemStyle: { color: 'rgba(255,215,0,0.8)' },
        },
        nameProperty: 'name',
      }),
      i
    )
  })(Ct)
function Il(e) {
  var n = {}
  e.eachSeriesByType('map', function (e) {
    var t = e.getHostGeoModel(),
      i = t ? 'o' + t.id : 'i' + e.getMapType()
    ;(n[i] = n[i] || []).push(e)
  }),
    t(n, function (e, n) {
      for (
        var a,
          o,
          r,
          s =
            ((a = i(e, function (e) {
              return e.getData()
            })),
            (o = e[0].get('mapValueCalculation')),
            (r = {}),
            t(a, function (e) {
              e.each(e.mapDimension('value'), function (t, n) {
                var i = 'ec-' + e.getName(n)
                ;(r[i] = r[i] || []), isNaN(t) || r[i].push(t)
              })
            }),
            a[0].map(a[0].mapDimension('value'), function (e, t) {
              for (
                var n = 'ec-' + a[0].getName(t),
                  i = 0,
                  s = 1 / 0,
                  l = -1 / 0,
                  u = r[n].length,
                  d = 0;
                d < u;
                d++
              )
                (s = Math.min(s, r[n][d])),
                  (l = Math.max(l, r[n][d])),
                  (i += r[n][d])
              return 0 === u
                ? NaN
                : 'min' === o
                ? s
                : 'max' === o
                ? l
                : 'average' === o
                ? i / u
                : i
            })),
          l = 0;
        l < e.length;
        l++
      )
        e[l].originalData = e[l].getData()
      for (l = 0; l < e.length; l++)
        (e[l].seriesGroup = e),
          (e[l].needsDrawMap = 0 === l && !e[l].getHostGeoModel()),
          e[l].setData(s.cloneShallow()),
          (e[l].mainSeries = e[0])
    })
}
function Ml(e) {
  var n = {}
  e.eachSeriesByType('map', function (i) {
    var a = i.getMapType()
    if (!i.getHostGeoModel() && !n[a]) {
      var o = {}
      t(i.seriesGroup, function (t) {
        var n = t.coordinateSystem,
          i = t.originalData
        t.get('showLegendSymbol') &&
          e.getComponent('legend') &&
          i.each(i.mapDimension('value'), function (e, t) {
            var a = i.getName(t),
              r = n.getRegion(a)
            if (r && !isNaN(e)) {
              var s = o[a] || 0,
                l = n.dataToPoint(r.getCenter())
              ;(o[a] = s + 1), i.setItemLayout(t, { point: l, offset: s })
            }
          })
      })
      var r = i.getData()
      r.each(function (e) {
        var t = r.getName(e),
          n = r.getItemLayout(e) || {}
        ;(n.showLabel = !o[t]), r.setItemLayout(e, n)
      }),
        (n[a] = !0)
    }
  })
}
function Dl(e) {
  on(Ra),
    e.registerChartView(bl),
    e.registerSeriesModel(wl),
    e.registerLayout(Ml),
    e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, Il),
    nn('map', e.registerAction)
}
function Al(e, t) {
  var n = e.isExpand ? e.children : [],
    i = e.parentNode.children,
    a = e.hierNode.i ? i[e.hierNode.i - 1] : null
  if (n.length) {
    !(function (e) {
      var t = e.children,
        n = t.length,
        i = 0,
        a = 0
      for (; --n >= 0; ) {
        var o = t[n]
        ;(o.hierNode.prelim += i),
          (o.hierNode.modifier += i),
          (a += o.hierNode.change),
          (i += o.hierNode.shift + a)
      }
    })(e)
    var o = (n[0].hierNode.prelim + n[n.length - 1].hierNode.prelim) / 2
    a
      ? ((e.hierNode.prelim = a.hierNode.prelim + t(e, a)),
        (e.hierNode.modifier = e.hierNode.prelim - o))
      : (e.hierNode.prelim = o)
  } else a && (e.hierNode.prelim = a.hierNode.prelim + t(e, a))
  e.parentNode.hierNode.defaultAncestor = (function (e, t, n, i) {
    if (t) {
      for (
        var a = e,
          o = e,
          r = o.parentNode.children[0],
          s = t,
          l = a.hierNode.modifier,
          u = o.hierNode.modifier,
          d = r.hierNode.modifier,
          c = s.hierNode.modifier;
        (s = Nl(s)), (o = Pl(o)), s && o;

      ) {
        ;(a = Nl(a)), (r = Pl(r)), (a.hierNode.ancestor = e)
        var h = s.hierNode.prelim + c - o.hierNode.prelim - u + i(s, o)
        h > 0 && (Rl(El(s, e, n), e, h), (u += h), (l += h)),
          (c += s.hierNode.modifier),
          (u += o.hierNode.modifier),
          (l += a.hierNode.modifier),
          (d += r.hierNode.modifier)
      }
      s && !Nl(a) && ((a.hierNode.thread = s), (a.hierNode.modifier += c - l)),
        o &&
          !Pl(r) &&
          ((r.hierNode.thread = o), (r.hierNode.modifier += u - d), (n = e))
    }
    return n
  })(e, a, e.parentNode.hierNode.defaultAncestor || i[0], t)
}
function Ll(e) {
  var t = e.hierNode.prelim + e.parentNode.hierNode.modifier
  e.setLayout({ x: t }, !0),
    (e.hierNode.modifier += e.parentNode.hierNode.modifier)
}
function Cl(e) {
  return arguments.length ? e : Ol
}
function Tl(e, t) {
  return (e -= Math.PI / 2), { x: t * Math.cos(e), y: t * Math.sin(e) }
}
function Nl(e) {
  var t = e.children
  return t.length && e.isExpand ? t[t.length - 1] : e.hierNode.thread
}
function Pl(e) {
  var t = e.children
  return t.length && e.isExpand ? t[0] : e.hierNode.thread
}
function El(e, t, n) {
  return e.hierNode.ancestor.parentNode === t.parentNode
    ? e.hierNode.ancestor
    : n
}
function Rl(e, t, n) {
  var i = n / (t.hierNode.i - e.hierNode.i)
  ;(t.hierNode.change -= i),
    (t.hierNode.shift += n),
    (t.hierNode.modifier += n),
    (t.hierNode.prelim += n),
    (e.hierNode.change += i)
}
function Ol(e, t) {
  return e.parentNode === t.parentNode ? 1 : 2
}
var Vl = function () {
    ;(this.parentPoint = []), (this.childPoints = [])
  },
  zl = (function (e) {
    function t(t) {
      return e.call(this, t) || this
    }
    return (
      j(t, e),
      (t.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (t.prototype.getDefaultShape = function () {
        return new Vl()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.childPoints,
          i = n.length,
          a = t.parentPoint,
          o = n[0],
          r = n[i - 1]
        if (1 === i) return e.moveTo(a[0], a[1]), void e.lineTo(o[0], o[1])
        var s = t.orient,
          l = 'TB' === s || 'BT' === s ? 0 : 1,
          u = 1 - l,
          d = se(t.forkPosition, 1),
          c = []
        ;(c[l] = a[l]),
          (c[u] = a[u] + (r[u] - a[u]) * d),
          e.moveTo(a[0], a[1]),
          e.lineTo(c[0], c[1]),
          e.moveTo(o[0], o[1]),
          (c[l] = o[l]),
          e.lineTo(c[0], c[1]),
          (c[l] = r[l]),
          e.lineTo(c[0], c[1]),
          e.lineTo(r[0], r[1])
        for (var h = 1; h < i - 1; h++) {
          var p = n[h]
          e.moveTo(p[0], p[1]), (c[l] = p[l]), e.lineTo(c[0], c[1])
        }
      }),
      t
    )
  })(At)
function kl(e, t) {
  var n = e.getItemLayout(t)
  return n && !isNaN(n.x) && !isNaN(n.y)
}
function Gl(e, t, n, i, a) {
  var o = !n,
    r = e.tree.getNodeByDataIndex(t),
    s = r.getModel(),
    l = r.getVisual('style').fill,
    u = !1 === r.isExpand && 0 !== r.children.length ? l : '#fff',
    d = e.tree.root,
    c = r.parentNode === d ? r : r.parentNode || r,
    h = e.getItemGraphicEl(c.dataIndex),
    p = c.getLayout(),
    g = h
      ? {
          x: h.__oldX,
          y: h.__oldY,
          rawX: h.__radialOldRawX,
          rawY: h.__radialOldRawY,
        }
      : p,
    f = r.getLayout()
  o
    ? (((n = new _r(e, t, null, { symbolInnerColor: u, useNameLabel: !0 })).x =
        g.x),
      (n.y = g.y))
    : n.updateData(e, t, null, { symbolInnerColor: u, useNameLabel: !0 }),
    (n.__radialOldRawX = n.__radialRawX),
    (n.__radialOldRawY = n.__radialRawY),
    (n.__radialRawX = f.rawX),
    (n.__radialRawY = f.rawY),
    i.add(n),
    e.setItemGraphicEl(t, n),
    (n.__oldX = n.x),
    (n.__oldY = n.y),
    Ee(n, { x: f.x, y: f.y }, a)
  var y = n.getSymbolPath()
  if ('radial' === a.get('layout')) {
    var m = d.children[0],
      v = m.getLayout(),
      x = m.children.length,
      _ = void 0,
      S = void 0
    if (f.x === v.x && !0 === r.isExpand) {
      var b = {
        x: (m.children[0].getLayout().x + m.children[x - 1].getLayout().x) / 2,
        y: (m.children[0].getLayout().y + m.children[x - 1].getLayout().y) / 2,
      }
      ;(_ = Math.atan2(b.y - v.y, b.x - v.x)) < 0 && (_ = 2 * Math.PI + _),
        (S = b.x < v.x) && (_ -= Math.PI)
    } else
      (_ = Math.atan2(f.y - v.y, f.x - v.x)) < 0 && (_ = 2 * Math.PI + _),
        0 === r.children.length ||
        (0 !== r.children.length && !1 === r.isExpand)
          ? (S = f.x < v.x) && (_ -= Math.PI)
          : (S = f.x > v.x) || (_ -= Math.PI)
    var w = S ? 'left' : 'right',
      I = s.getModel('label'),
      M = I.get('rotate'),
      D = M * (Math.PI / 180),
      A = y.getTextContent()
    A &&
      (y.setTextConfig({
        position: I.get('position') || w,
        rotation: null == M ? -_ : D,
        origin: 'center',
      }),
      A.setStyle('verticalAlign', 'middle'))
  }
  var L = s.get(['emphasis', 'focus']),
    T =
      'ancestor' === L
        ? r.getAncestorsIndices()
        : 'descendant' === L
        ? r.getDescendantIndices()
        : null
  T && (Be(n).focus = T),
    (function (e, t, n, i, a, o, r, s) {
      var l = t.getModel(),
        u = e.get('edgeShape'),
        d = e.get('layout'),
        c = e.getOrient(),
        h = e.get(['lineStyle', 'curveness']),
        p = e.get('edgeForkPosition'),
        g = l.getModel('lineStyle').getLineStyle(),
        f = i.__edge
      if ('curve' === u)
        t.parentNode &&
          t.parentNode !== n &&
          (f || (f = i.__edge = new Mt({ shape: Yl(d, c, h, a, a) })),
          Ee(f, { shape: Yl(d, c, h, o, r) }, e))
      else if (
        'polyline' === u &&
        'orthogonal' === d &&
        t !== n &&
        t.children &&
        0 !== t.children.length &&
        !0 === t.isExpand
      ) {
        for (var y = t.children, m = [], v = 0; v < y.length; v++) {
          var x = y[v].getLayout()
          m.push([x.x, x.y])
        }
        f ||
          (f = i.__edge =
            new zl({
              shape: {
                parentPoint: [r.x, r.y],
                childPoints: [[r.x, r.y]],
                orient: c,
                forkPosition: p,
              },
            })),
          Ee(f, { shape: { parentPoint: [r.x, r.y], childPoints: m } }, e)
      }
      f &&
        (f.useStyle(C({ strokeNoScale: !0, fill: null }, g)),
        Ot(f, l, 'lineStyle'),
        Ve(f),
        s.add(f))
    })(a, r, d, n, g, p, f, i),
    n.__edge &&
      (n.onHoverStateChange = function (t) {
        if ('blur' !== t) {
          var i = r.parentNode && e.getItemGraphicEl(r.parentNode.dataIndex)
          ;(i && i.hoverState === pn) || kt(n.__edge, t)
        }
      })
}
function Bl(e, t, n, i, a) {
  var o = Wl(t.tree.root, e),
    r = o.source,
    s = o.sourceLayout,
    l = t.getItemGraphicEl(e.dataIndex)
  if (l) {
    var u = t.getItemGraphicEl(r.dataIndex).__edge,
      d =
        l.__edge || (!1 === r.isExpand || 1 === r.children.length ? u : void 0),
      c = i.get('edgeShape'),
      h = i.get('layout'),
      p = i.get('orient'),
      g = i.get(['lineStyle', 'curveness'])
    d &&
      ('curve' === c
        ? bt(d, { shape: Yl(h, p, g, s, s), style: { opacity: 0 } }, i, {
            cb: function () {
              n.remove(d)
            },
            removeOpt: a,
          })
        : 'polyline' === c &&
          'orthogonal' === i.get('layout') &&
          bt(
            d,
            {
              shape: { parentPoint: [s.x, s.y], childPoints: [[s.x, s.y]] },
              style: { opacity: 0 },
            },
            i,
            {
              cb: function () {
                n.remove(d)
              },
              removeOpt: a,
            }
          ))
  }
}
function Wl(e, t) {
  for (
    var n, i = t.parentNode === e ? t : t.parentNode || t;
    null == (n = i.getLayout());

  )
    i = i.parentNode === e ? i : i.parentNode || i
  return { source: i, sourceLayout: n }
}
function Fl(e, t, n, i, a) {
  var o = e.tree.getNodeByDataIndex(t),
    r = Wl(e.tree.root, o).sourceLayout,
    s = {
      duration: a.get('animationDurationUpdate'),
      easing: a.get('animationEasingUpdate'),
    }
  bt(n, { x: r.x + 1, y: r.y + 1 }, a, {
    cb: function () {
      i.remove(n), e.setItemGraphicEl(t, null)
    },
    removeOpt: s,
  }),
    n.fadeOut(null, { fadeLabel: !0, animation: s }),
    o.children.forEach(function (t) {
      Bl(t, e, i, a, s)
    }),
    Bl(o, e, i, a, s)
}
function Yl(e, t, n, i, a) {
  var o, r, s, l, u, d, c, h
  if ('radial' === e) {
    ;(u = i.rawX), (c = i.rawY), (d = a.rawX), (h = a.rawY)
    var p = Tl(u, c),
      g = Tl(u, c + (h - c) * n),
      f = Tl(d, h + (c - h) * n),
      y = Tl(d, h)
    return {
      x1: p.x || 0,
      y1: p.y || 0,
      x2: y.x || 0,
      y2: y.y || 0,
      cpx1: g.x || 0,
      cpy1: g.y || 0,
      cpx2: f.x || 0,
      cpy2: f.y || 0,
    }
  }
  return (
    (u = i.x),
    (c = i.y),
    (d = a.x),
    (h = a.y),
    ('LR' !== t && 'RL' !== t) ||
      ((o = u + (d - u) * n), (r = c), (s = d + (u - d) * n), (l = h)),
    ('TB' !== t && 'BT' !== t) ||
      ((o = u), (r = c + (h - c) * n), (s = d), (l = h + (c - h) * n)),
    { x1: u, y1: c, x2: d, y2: h, cpx1: o, cpy1: r, cpx2: s, cpy2: l }
  )
}
var Xl = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n._mainGroup = new Ne()), n
    }
    return (
      j(t, e),
      (t.prototype.init = function (e, t) {
        ;(this._controller = new ya(t.getZr())),
          (this._controllerHost = { target: this.group }),
          this.group.add(this._mainGroup)
      }),
      (t.prototype.render = function (e, t, n) {
        var i = e.getData(),
          a = e.layoutInfo,
          o = this._mainGroup
        'radial' === e.get('layout')
          ? ((o.x = a.x + a.width / 2), (o.y = a.y + a.height / 2))
          : ((o.x = a.x), (o.y = a.y)),
          this._updateViewCoordSys(e),
          this._updateController(e, t, n)
        var r = this._data
        i
          .diff(r)
          .add(function (t) {
            kl(i, t) && Gl(i, t, null, o, e)
          })
          .update(function (t, n) {
            var a = r.getItemGraphicEl(n)
            kl(i, t) ? Gl(i, t, a, o, e) : a && Fl(r, n, a, o, e)
          })
          .remove(function (t) {
            var n = r.getItemGraphicEl(t)
            n && Fl(r, t, n, o, e)
          })
          .execute(),
          (this._nodeScaleRatio = e.get('nodeScaleRatio')),
          this._updateNodeAndLinkScale(e),
          !0 === e.get('expandAndCollapse') &&
            i.eachItemGraphicEl(function (t, i) {
              t.off('click').on('click', function () {
                n.dispatchAction({
                  type: 'treeExpandAndCollapse',
                  seriesId: e.id,
                  dataIndex: i,
                })
              })
            }),
          (this._data = i)
      }),
      (t.prototype._updateViewCoordSys = function (e) {
        var t = e.getData(),
          n = []
        t.each(function (e) {
          var i = t.getItemLayout(e)
          !i || isNaN(i.x) || isNaN(i.y) || n.push([+i.x, +i.y])
        })
        var i = [],
          a = []
        hn(n, i, a)
        var o = this._min,
          r = this._max
        a[0] - i[0] == 0 &&
          ((i[0] = o ? o[0] : i[0] - 1), (a[0] = r ? r[0] : a[0] + 1)),
          a[1] - i[1] == 0 &&
            ((i[1] = o ? o[1] : i[1] - 1), (a[1] = r ? r[1] : a[1] + 1))
        var s = (e.coordinateSystem = new ea())
        ;(s.zoomLimit = e.get('scaleLimit')),
          s.setBoundingRect(i[0], i[1], a[0] - i[0], a[1] - i[1]),
          s.setCenter(e.get('center')),
          s.setZoom(e.get('zoom')),
          this.group.attr({
            x: s.x,
            y: s.y,
            scaleX: s.scaleX,
            scaleY: s.scaleY,
          }),
          (this._min = i),
          (this._max = a)
      }),
      (t.prototype._updateController = function (e, t, n) {
        var i = this,
          a = this._controller,
          o = this._controllerHost,
          r = this.group
        a.setPointerChecker(function (t, i, a) {
          var o = r.getBoundingRect()
          return o.applyTransform(r.transform), o.contain(i, a) && !_a(t, n, e)
        }),
          a.enable(e.get('roam')),
          (o.zoomLimit = e.get('scaleLimit')),
          (o.zoom = e.coordinateSystem.getZoom()),
          a
            .off('pan')
            .off('zoom')
            .on('pan', function (t) {
              ma(o, t.dx, t.dy),
                n.dispatchAction({
                  seriesId: e.id,
                  type: 'treeRoam',
                  dx: t.dx,
                  dy: t.dy,
                })
            })
            .on('zoom', function (t) {
              va(o, t.scale, t.originX, t.originY),
                n.dispatchAction({
                  seriesId: e.id,
                  type: 'treeRoam',
                  zoom: t.scale,
                  originX: t.originX,
                  originY: t.originY,
                }),
                i._updateNodeAndLinkScale(e),
                n.updateLabelLayout()
            })
      }),
      (t.prototype._updateNodeAndLinkScale = function (e) {
        var t = e.getData(),
          n = this._getNodeGlobalScale(e)
        t.eachItemGraphicEl(function (e, t) {
          e.setSymbolScale(n)
        })
      }),
      (t.prototype._getNodeGlobalScale = function (e) {
        var t = e.coordinateSystem
        if ('view' !== t.type) return 1
        var n = this._nodeScaleRatio,
          i = t.scaleX || 1
        return ((t.getZoom() - 1) * n + 1) / i
      }),
      (t.prototype.dispose = function () {
        this._controller && this._controller.dispose(),
          (this._controllerHost = null)
      }),
      (t.prototype.remove = function () {
        this._mainGroup.removeAll(), (this._data = null)
      }),
      (t.type = 'tree'),
      t
    )
  })(zt),
  Hl = Te()
function Ul(e) {
  var n = e.mainData,
    i = e.datas
  i || ((i = { main: n }), (e.datasAttr = { main: 'data' })),
    (e.datas = e.mainData = null),
    Ql(n, i, e),
    t(i, function (i) {
      t(n.TRANSFERABLE_METHODS, function (t) {
        i.wrapMethod(t, O(Zl, e))
      })
    }),
    n.wrapMethod('cloneShallow', O(ql, e)),
    t(n.CHANGABLE_METHODS, function (t) {
      n.wrapMethod(t, O(jl, e))
    }),
    rt(i[n.dataType] === n)
}
function Zl(e, t) {
  if (Hl((i = this)).mainData === i) {
    var n = a({}, Hl(this).datas)
    ;(n[this.dataType] = t), Ql(t, n, e)
  } else $l(t, this.dataType, Hl(this).mainData, e)
  var i
  return t
}
function jl(e, t) {
  return e.struct && e.struct.update(), t
}
function ql(e, n) {
  return (
    t(Hl(n).datas, function (t, i) {
      t !== n && $l(t.cloneShallow(), i, n, e)
    }),
    n
  )
}
function Jl(e) {
  var t = Hl(this).mainData
  return null == e || null == t ? t : Hl(t).datas[e]
}
function Kl() {
  var e = Hl(this).mainData
  return null == e
    ? [{ data: e }]
    : i(y(Hl(e).datas), function (t) {
        return { type: t, data: Hl(e).datas[t] }
      })
}
function Ql(e, n, i) {
  ;(Hl(e).datas = {}),
    t(n, function (t, n) {
      $l(t, n, e, i)
    })
}
function $l(e, t, n, i) {
  ;(Hl(n).datas[t] = e),
    (Hl(e).mainData = n),
    (e.dataType = t),
    i.struct && ((e[i.structAttr] = i.struct), (i.struct[i.datasAttr[t]] = e)),
    (e.getLinkedData = Jl),
    (e.getLinkedDataAll = Kl)
}
var eu = (function () {
  function e(e, t) {
    ;(this.depth = 0),
      (this.height = 0),
      (this.dataIndex = -1),
      (this.children = []),
      (this.viewChildren = []),
      (this.isExpand = !1),
      (this.name = e || ''),
      (this.hostTree = t)
  }
  return (
    (e.prototype.isRemoved = function () {
      return this.dataIndex < 0
    }),
    (e.prototype.eachNode = function (e, t, n) {
      'function' == typeof e && ((n = t), (t = e), (e = null)),
        r((e = e || {})) && (e = { order: e })
      var i,
        a = e.order || 'preorder',
        o = this[e.attr || 'children']
      'preorder' === a && (i = t.call(n, this))
      for (var s = 0; !i && s < o.length; s++) o[s].eachNode(e, t, n)
      'postorder' === a && t.call(n, this)
    }),
    (e.prototype.updateDepthAndHeight = function (e) {
      var t = 0
      this.depth = e
      for (var n = 0; n < this.children.length; n++) {
        var i = this.children[n]
        i.updateDepthAndHeight(e + 1), i.height > t && (t = i.height)
      }
      this.height = t + 1
    }),
    (e.prototype.getNodeById = function (e) {
      if (this.getId() === e) return this
      for (var t = 0, n = this.children, i = n.length; t < i; t++) {
        var a = n[t].getNodeById(e)
        if (a) return a
      }
    }),
    (e.prototype.contains = function (e) {
      if (e === this) return !0
      for (var t = 0, n = this.children, i = n.length; t < i; t++) {
        var a = n[t].contains(e)
        if (a) return a
      }
    }),
    (e.prototype.getAncestors = function (e) {
      for (var t = [], n = e ? this : this.parentNode; n; )
        t.push(n), (n = n.parentNode)
      return t.reverse(), t
    }),
    (e.prototype.getAncestorsIndices = function () {
      for (var e = [], t = this; t; ) e.push(t.dataIndex), (t = t.parentNode)
      return e.reverse(), e
    }),
    (e.prototype.getDescendantIndices = function () {
      var e = []
      return (
        this.eachNode(function (t) {
          e.push(t.dataIndex)
        }),
        e
      )
    }),
    (e.prototype.getValue = function (e) {
      var t = this.hostTree.data
      return t.getStore().get(t.getDimensionIndex(e || 'value'), this.dataIndex)
    }),
    (e.prototype.setLayout = function (e, t) {
      this.dataIndex >= 0 &&
        this.hostTree.data.setItemLayout(this.dataIndex, e, t)
    }),
    (e.prototype.getLayout = function () {
      return this.hostTree.data.getItemLayout(this.dataIndex)
    }),
    (e.prototype.getModel = function (e) {
      if (!(this.dataIndex < 0))
        return this.hostTree.data.getItemModel(this.dataIndex).getModel(e)
    }),
    (e.prototype.getLevelModel = function () {
      return (this.hostTree.levelModels || [])[this.depth]
    }),
    (e.prototype.setVisual = function (e, t) {
      this.dataIndex >= 0 &&
        this.hostTree.data.setItemVisual(this.dataIndex, e, t)
    }),
    (e.prototype.getVisual = function (e) {
      return this.hostTree.data.getItemVisual(this.dataIndex, e)
    }),
    (e.prototype.getRawIndex = function () {
      return this.hostTree.data.getRawIndex(this.dataIndex)
    }),
    (e.prototype.getId = function () {
      return this.hostTree.data.getId(this.dataIndex)
    }),
    (e.prototype.getChildIndex = function () {
      if (this.parentNode) {
        for (var e = this.parentNode.children, t = 0; t < e.length; ++t)
          if (e[t] === this) return t
        return -1
      }
      return -1
    }),
    (e.prototype.isAncestorOf = function (e) {
      for (var t = e.parentNode; t; ) {
        if (t === this) return !0
        t = t.parentNode
      }
      return !1
    }),
    (e.prototype.isDescendantOf = function (e) {
      return e !== this && e.isAncestorOf(this)
    }),
    e
  )
})()
var tu = (function () {
  function e(e) {
    ;(this.type = 'tree'), (this._nodes = []), (this.hostModel = e)
  }
  return (
    (e.prototype.eachNode = function (e, t, n) {
      this.root.eachNode(e, t, n)
    }),
    (e.prototype.getNodeByDataIndex = function (e) {
      var t = this.data.getRawIndex(e)
      return this._nodes[t]
    }),
    (e.prototype.getNodeById = function (e) {
      return this.root.getNodeById(e)
    }),
    (e.prototype.update = function () {
      for (var e = this.data, t = this._nodes, n = 0, i = t.length; n < i; n++)
        t[n].dataIndex = -1
      for (n = 0, i = e.count(); n < i; n++) t[e.getRawIndex(n)].dataIndex = n
    }),
    (e.prototype.clearLayouts = function () {
      this.data.clearItemLayouts()
    }),
    (e.createTree = function (t, n, i) {
      var a = new e(n),
        o = [],
        r = 1
      !(function e(t, n) {
        var i = t.value
        ;(r = Math.max(r, g(i) ? i.length : 1)), o.push(t)
        var s = new eu(p(t.name, ''), a)
        n
          ? (function (e, t) {
              var n = t.children
              if (e.parentNode === t) return
              n.push(e), (e.parentNode = t)
            })(s, n)
          : (a.root = s),
          a._nodes.push(s)
        var l = t.children
        if (l) for (var u = 0; u < l.length; u++) e(l[u], s)
      })(t),
        a.root.updateDepthAndHeight(0)
      var s = wi(o, {
          coordDimensions: ['value'],
          dimensionsCount: r,
        }).dimensions,
        l = new bi(s, n)
      return (
        l.initData(o),
        i && i(l),
        Ul({ mainData: l, struct: a, structAttr: 'tree' }),
        a.update(),
        a
      )
    }),
    e
  )
})()
function nu(e, t, n) {
  if (e && gn(t, e.type) >= 0) {
    var i = n.getData().tree.root,
      a = e.targetNode
    if (('string' == typeof a && (a = i.getNodeById(a)), a && i.contains(a)))
      return { node: a }
    var o = e.targetNodeId
    if (null != o && (a = i.getNodeById(o))) return { node: a }
  }
}
function iu(e) {
  for (var t = []; e; ) (e = e.parentNode) && t.push(e)
  return t.reverse()
}
function au(e, t) {
  var n = iu(e)
  return gn(n, t) >= 0
}
function ou(e, t) {
  for (var n = []; e; ) {
    var i = e.dataIndex
    n.push({ name: e.name, dataIndex: i, value: t.getRawValue(i) }),
      (e = e.parentNode)
  }
  return n.reverse(), n
}
var ru = (function (e) {
  function t() {
    var t = (null !== e && e.apply(this, arguments)) || this
    return (t.hasSymbolVisual = !0), (t.ignoreStyleOnData = !0), t
  }
  return (
    j(t, e),
    (t.prototype.getInitialData = function (e) {
      var t = { name: e.name, children: e.data },
        n = e.leaves || {},
        i = new m(n, this, this.ecModel),
        a = tu.createTree(t, this, function (e) {
          e.wrapMethod('getItemModel', function (e, t) {
            var n = a.getNodeByDataIndex(t)
            return (
              (n && n.children.length && n.isExpand) || (e.parentModel = i), e
            )
          })
        })
      var o = 0
      a.eachNode('preorder', function (e) {
        e.depth > o && (o = e.depth)
      })
      var r =
        e.expandAndCollapse && e.initialTreeDepth >= 0 ? e.initialTreeDepth : o
      return (
        a.root.eachNode('preorder', function (e) {
          var t = e.hostTree.data.getRawDataItem(e.dataIndex)
          e.isExpand = t && null != t.collapsed ? !t.collapsed : e.depth <= r
        }),
        a.data
      )
    }),
    (t.prototype.getOrient = function () {
      var e = this.get('orient')
      return 'horizontal' === e ? (e = 'LR') : 'vertical' === e && (e = 'TB'), e
    }),
    (t.prototype.setZoom = function (e) {
      this.option.zoom = e
    }),
    (t.prototype.setCenter = function (e) {
      this.option.center = e
    }),
    (t.prototype.formatTooltip = function (e, t, n) {
      for (
        var i = this.getData().tree,
          a = i.root.children[0],
          o = i.getNodeByDataIndex(e),
          r = o.getValue(),
          s = o.name;
        o && o !== a;

      )
        (s = o.parentNode.name + '.' + s), (o = o.parentNode)
      return dn('nameValue', {
        name: s,
        value: r,
        noValue: isNaN(r) || null == r,
      })
    }),
    (t.prototype.getDataParams = function (t) {
      var n = e.prototype.getDataParams.apply(this, arguments),
        i = this.getData().tree.getNodeByDataIndex(t)
      return (n.treeAncestors = ou(i, this)), n
    }),
    (t.type = 'series.tree'),
    (t.layoutMode = 'box'),
    (t.defaultOption = {
      zlevel: 0,
      z: 2,
      coordinateSystem: 'view',
      left: '12%',
      top: '12%',
      right: '12%',
      bottom: '12%',
      layout: 'orthogonal',
      edgeShape: 'curve',
      edgeForkPosition: '50%',
      roam: !1,
      nodeScaleRatio: 0.4,
      center: null,
      zoom: 1,
      orient: 'LR',
      symbol: 'emptyCircle',
      symbolSize: 7,
      expandAndCollapse: !0,
      initialTreeDepth: 2,
      lineStyle: { color: '#ccc', width: 1.5, curveness: 0.5 },
      itemStyle: { color: 'lightsteelblue', borderWidth: 1.5 },
      label: { show: !0 },
      animationEasing: 'linear',
      animationDuration: 700,
      animationDurationUpdate: 500,
    }),
    t
  )
})(Ct)
function su(e, t) {
  for (var n, i = [e]; (n = i.pop()); )
    if ((t(n), n.isExpand)) {
      var a = n.children
      if (a.length) for (var o = a.length - 1; o >= 0; o--) i.push(a[o])
    }
}
function lu(e, t) {
  e.eachSeriesByType('tree', function (e) {
    !(function (e, t) {
      var n = (function (e, t) {
        return we(e.getBoxLayoutParams(), {
          width: t.getWidth(),
          height: t.getHeight(),
        })
      })(e, t)
      e.layoutInfo = n
      var i = e.get('layout'),
        a = 0,
        o = 0,
        r = null
      'radial' === i
        ? ((a = 2 * Math.PI),
          (o = Math.min(n.height, n.width) / 2),
          (r = Cl(function (e, t) {
            return (e.parentNode === t.parentNode ? 1 : 2) / e.depth
          })))
        : ((a = n.width), (o = n.height), (r = Cl()))
      var s = e.getData().tree.root,
        l = s.children[0]
      if (l) {
        !(function (e) {
          var t = e
          t.hierNode = {
            defaultAncestor: null,
            ancestor: t,
            prelim: 0,
            modifier: 0,
            change: 0,
            shift: 0,
            i: 0,
            thread: null,
          }
          for (var n, i, a = [t]; (n = a.pop()); )
            if (((i = n.children), n.isExpand && i.length))
              for (var o = i.length - 1; o >= 0; o--) {
                var r = i[o]
                ;(r.hierNode = {
                  defaultAncestor: null,
                  ancestor: r,
                  prelim: 0,
                  modifier: 0,
                  change: 0,
                  shift: 0,
                  i: o,
                  thread: null,
                }),
                  a.push(r)
              }
        })(s),
          (function (e, t, n) {
            for (var i, a = [e], o = []; (i = a.pop()); )
              if ((o.push(i), i.isExpand)) {
                var r = i.children
                if (r.length) for (var s = 0; s < r.length; s++) a.push(r[s])
              }
            for (; (i = o.pop()); ) t(i, n)
          })(l, Al, r),
          (s.hierNode.modifier = -l.hierNode.prelim),
          su(l, Ll)
        var u = l,
          d = l,
          c = l
        su(l, function (e) {
          var t = e.getLayout().x
          t < u.getLayout().x && (u = e),
            t > d.getLayout().x && (d = e),
            e.depth > c.depth && (c = e)
        })
        var h = u === d ? 1 : r(u, d) / 2,
          p = h - u.getLayout().x,
          g = 0,
          f = 0,
          y = 0,
          m = 0
        if ('radial' === i)
          (g = a / (d.getLayout().x + h + p)),
            (f = o / (c.depth - 1 || 1)),
            su(l, function (e) {
              ;(y = (e.getLayout().x + p) * g), (m = (e.depth - 1) * f)
              var t = Tl(y, m)
              e.setLayout({ x: t.x, y: t.y, rawX: y, rawY: m }, !0)
            })
        else {
          var v = e.getOrient()
          'RL' === v || 'LR' === v
            ? ((f = o / (d.getLayout().x + h + p)),
              (g = a / (c.depth - 1 || 1)),
              su(l, function (e) {
                ;(m = (e.getLayout().x + p) * f),
                  (y = 'LR' === v ? (e.depth - 1) * g : a - (e.depth - 1) * g),
                  e.setLayout({ x: y, y: m }, !0)
              }))
            : ('TB' !== v && 'BT' !== v) ||
              ((g = a / (d.getLayout().x + h + p)),
              (f = o / (c.depth - 1 || 1)),
              su(l, function (e) {
                ;(y = (e.getLayout().x + p) * g),
                  (m = 'TB' === v ? (e.depth - 1) * f : o - (e.depth - 1) * f),
                  e.setLayout({ x: y, y: m }, !0)
              }))
        }
      }
    })(e, t)
  })
}
function uu(e) {
  e.eachSeriesByType('tree', function (e) {
    var t = e.getData()
    t.tree.eachNode(function (e) {
      var n = e.getModel().getModel('itemStyle').getItemStyle(),
        i = t.ensureUniqueItemVisual(e.dataIndex, 'style')
      a(i, n)
    })
  })
}
function du(e) {
  e.registerChartView(Xl),
    e.registerSeriesModel(ru),
    e.registerLayout(lu),
    e.registerVisual(uu),
    (function (e) {
      e.registerAction(
        {
          type: 'treeExpandAndCollapse',
          event: 'treeExpandAndCollapse',
          update: 'update',
        },
        function (e, t) {
          t.eachComponent(
            { mainType: 'series', subType: 'tree', query: e },
            function (t) {
              var n = e.dataIndex,
                i = t.getData().tree.getNodeByDataIndex(n)
              i.isExpand = !i.isExpand
            }
          )
        }
      ),
        e.registerAction(
          { type: 'treeRoam', event: 'treeRoam', update: 'none' },
          function (e, t) {
            t.eachComponent(
              { mainType: 'series', subType: 'tree', query: e },
              function (t) {
                var n = ua(t.coordinateSystem, e)
                t.setCenter && t.setCenter(n.center),
                  t.setZoom && t.setZoom(n.zoom)
              }
            )
          }
        )
    })(e)
}
var cu = function () {},
  hu = ['treemapZoomToNode', 'treemapRender', 'treemapMove']
function pu(e) {
  var t = e.getData().tree,
    n = {}
  t.eachNode(function (t) {
    for (var i = t; i && i.depth > 1; ) i = i.parentNode
    var a = fn(e.ecModel, i.name || i.dataIndex + '', n)
    t.setVisual('decal', a)
  })
}
function gu(e) {
  var n = 0
  t(e.children, function (e) {
    gu(e)
    var t = e.value
    g(t) && (t = t[0]), (n += t)
  })
  var i = e.value
  g(i) && (i = i[0]),
    (null == i || isNaN(i)) && (i = n),
    i < 0 && (i = 0),
    g(e.value) ? (e.value[0] = i) : (e.value = i)
}
var fu = (function (n) {
  function o() {
    var e = (null !== n && n.apply(this, arguments)) || this
    return (e.type = o.type), (e.preventUsingHoverLayer = !0), e
  }
  return (
    j(o, n),
    (o.prototype.getInitialData = function (e, n) {
      var a = { name: e.name, children: e.data }
      gu(a)
      var o = e.levels || [],
        r = (this.designatedVisualItemStyle = {}),
        s = new m({ itemStyle: r }, this, n)
      o = e.levels = (function (e, n) {
        var i,
          a,
          o = L(n.get('color')),
          r = L(n.get(['aria', 'decal', 'decals']))
        if (!o) return
        t((e = e || []), function (e) {
          var t = new m(e),
            n = t.get('color'),
            o = t.get('decal')
          ;(t.get(['itemStyle', 'color']) || (n && 'none' !== n)) && (i = !0),
            (t.get(['itemStyle', 'decal']) || (o && 'none' !== o)) && (a = !0)
        })
        var s = e[0] || (e[0] = {})
        i || (s.color = o.slice())
        !a && r && (s.decal = r.slice())
        return e
      })(o, n)
      var l = i(
          o || [],
          function (e) {
            return new m(e, s, n)
          },
          this
        ),
        u = tu.createTree(a, this, function (e) {
          e.wrapMethod('getItemModel', function (e, t) {
            var n = u.getNodeByDataIndex(t),
              i = n ? l[n.depth] : null
            return (e.parentModel = i || s), e
          })
        })
      return u.data
    }),
    (o.prototype.optionUpdated = function () {
      this.resetViewRoot()
    }),
    (o.prototype.formatTooltip = function (e, t, n) {
      var i = this.getData(),
        a = this.getRawValue(e),
        o = i.getName(e)
      return dn('nameValue', { name: o, value: a })
    }),
    (o.prototype.getDataParams = function (e) {
      var t = n.prototype.getDataParams.apply(this, arguments),
        i = this.getData().tree.getNodeByDataIndex(e)
      return (
        (t.treeAncestors = ou(i, this)), (t.treePathInfo = t.treeAncestors), t
      )
    }),
    (o.prototype.setLayoutInfo = function (e) {
      ;(this.layoutInfo = this.layoutInfo || {}), a(this.layoutInfo, e)
    }),
    (o.prototype.mapIdToIndex = function (t) {
      var n = this._idIndexMap
      n || ((n = this._idIndexMap = e()), (this._idIndexMapCount = 0))
      var i = n.get(t)
      return null == i && n.set(t, (i = this._idIndexMapCount++)), i
    }),
    (o.prototype.getViewRoot = function () {
      return this._viewRoot
    }),
    (o.prototype.resetViewRoot = function (e) {
      e ? (this._viewRoot = e) : (e = this._viewRoot)
      var t = this.getRawData().tree.root
      ;(e && (e === t || t.contains(e))) || (this._viewRoot = t)
    }),
    (o.prototype.enableAriaDecal = function () {
      pu(this)
    }),
    (o.type = 'series.treemap'),
    (o.layoutMode = 'box'),
    (o.defaultOption = {
      progressive: 0,
      left: 'center',
      top: 'middle',
      width: '80%',
      height: '80%',
      sort: !0,
      clipWindow: 'origin',
      squareRatio: 0.5 * (1 + Math.sqrt(5)),
      leafDepth: null,
      drillDownIcon: '▶',
      zoomToNodeRatio: 0.1024,
      roam: !0,
      nodeClick: 'zoomToNode',
      animation: !0,
      animationDurationUpdate: 900,
      animationEasing: 'quinticInOut',
      breadcrumb: {
        show: !0,
        height: 22,
        left: 'center',
        top: 'bottom',
        emptyItemWidth: 25,
        itemStyle: { color: 'rgba(0,0,0,0.7)', textStyle: { color: '#fff' } },
      },
      label: {
        show: !0,
        distance: 0,
        padding: 5,
        position: 'inside',
        color: '#fff',
        overflow: 'truncate',
      },
      upperLabel: {
        show: !1,
        position: [0, '50%'],
        height: 20,
        overflow: 'truncate',
        verticalAlign: 'middle',
      },
      itemStyle: {
        color: null,
        colorAlpha: null,
        colorSaturation: null,
        borderWidth: 0,
        gapWidth: 0,
        borderColor: '#fff',
        borderColorSaturation: null,
      },
      emphasis: {
        upperLabel: {
          show: !0,
          position: [0, '50%'],
          ellipsis: !0,
          verticalAlign: 'middle',
        },
      },
      visualDimension: 0,
      visualMin: null,
      visualMax: null,
      color: [],
      colorAlpha: null,
      colorSaturation: null,
      colorMappingBy: 'index',
      visibleMin: 10,
      childrenVisibleMin: null,
      levels: [],
    }),
    o
  )
})(Ct)
function yu(e, t, n, i, a, o) {
  var r = [
    [a ? e : e - 5, t],
    [e + n, t],
    [e + n, t + i],
    [a ? e : e - 5, t + i],
  ]
  return (
    !o && r.splice(2, 0, [e + n + 5, t + i / 2]),
    !a && r.push([e, t + i / 2]),
    r
  )
}
function mu(e, t, n) {
  Be(e).eventData = {
    componentType: 'series',
    componentSubType: 'treemap',
    componentIndex: t.componentIndex,
    seriesIndex: t.componentIndex,
    seriesName: t.name,
    seriesType: 'treemap',
    selfType: 'breadcrumb',
    nodeData: { dataIndex: n && n.dataIndex, name: n && n.name },
    treePathInfo: n && ou(n, t),
  }
}
var vu = (function () {
    function e(e) {
      ;(this.group = new Ne()), e.add(this.group)
    }
    return (
      (e.prototype.render = function (e, t, n, i) {
        var a = e.getModel('breadcrumb'),
          o = this.group
        if ((o.removeAll(), a.get('show') && n)) {
          var r = a.getModel('itemStyle'),
            s = r.getModel('textStyle'),
            l = {
              pos: {
                left: a.get('left'),
                right: a.get('right'),
                top: a.get('top'),
                bottom: a.get('bottom'),
              },
              box: { width: t.getWidth(), height: t.getHeight() },
              emptyItemWidth: a.get('emptyItemWidth'),
              totalWidth: 0,
              renderList: [],
            }
          this._prepare(n, l, s),
            this._renderContent(e, l, r, s, i),
            yn(o, l.pos, l.box)
        }
      }),
      (e.prototype._prepare = function (e, t, n) {
        for (var i = e; i; i = i.parentNode) {
          var a = p(i.getModel().get('name'), ''),
            o = n.getTextRect(a),
            r = Math.max(o.width + 16, t.emptyItemWidth)
          ;(t.totalWidth += r + 8),
            t.renderList.push({ node: i, text: a, width: r })
        }
      }),
      (e.prototype._renderContent = function (e, t, n, i, a) {
        for (
          var o = 0,
            r = t.emptyItemWidth,
            s = e.get(['breadcrumb', 'height']),
            l = mn(t.pos, t.box),
            u = t.totalWidth,
            d = t.renderList,
            c = d.length - 1;
          c >= 0;
          c--
        ) {
          var h = d[c],
            p = h.node,
            g = h.width,
            f = h.text
          u > l.width && ((u -= g - r), (g = r), (f = null))
          var y = new ie({
            shape: { points: yu(o, 0, g, s, c === d.length - 1, 0 === c) },
            style: C(n.getItemStyle(), { lineJoin: 'bevel' }),
            textContent: new Gt({
              style: { text: f, fill: i.getTextColor(), font: i.getFont() },
            }),
            textConfig: { position: 'inside' },
            z2: 1e4 * cn,
            onclick: O(a, p),
          })
          ;(y.disableLabelAnimation = !0),
            this.group.add(y),
            mu(y, e, p),
            (o += g + 8)
        }
      }),
      (e.prototype.remove = function () {
        this.group.removeAll()
      }),
      e
    )
  })(),
  xu = (function () {
    function e() {
      ;(this._storage = []), (this._elExistsMap = {})
    }
    return (
      (e.prototype.add = function (e, t, n, i, a) {
        return (
          !this._elExistsMap[e.id] &&
          ((this._elExistsMap[e.id] = !0),
          this._storage.push({
            el: e,
            target: t,
            duration: n,
            delay: i,
            easing: a,
          }),
          !0)
        )
      }),
      (e.prototype.finished = function (e) {
        return (this._finishedCallback = e), this
      }),
      (e.prototype.start = function () {
        for (
          var e = this,
            t = this._storage.length,
            n = function () {
              --t <= 0 &&
                ((e._storage.length = 0),
                (e._elExistsMap = {}),
                e._finishedCallback && e._finishedCallback())
            },
            i = 0,
            a = this._storage.length;
          i < a;
          i++
        ) {
          var o = this._storage[i]
          o.el.animateTo(o.target, {
            duration: o.duration,
            delay: o.delay,
            easing: o.easing,
            setToFinal: !0,
            done: n,
            aborted: n,
          })
        }
        return this
      }),
      e
    )
  })()
var _u = Ne,
  Su = $e,
  bu = 10 * cn,
  wu = 2 * cn,
  Iu = 3 * cn,
  Mu = Ke([
    ['fill', 'color'],
    ['stroke', 'strokeColor'],
    ['lineWidth', 'strokeWidth'],
    ['shadowBlur'],
    ['shadowOffsetX'],
    ['shadowOffsetY'],
    ['shadowColor'],
  ]),
  Du = function (e) {
    var t = Mu(e)
    return (t.stroke = t.fill = t.lineWidth = null), t
  },
  Au = Te()
var Lu = (function (e) {
    function n() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (
        (t.type = n.type),
        (t._state = 'ready'),
        (t._storage = { nodeGroup: [], background: [], content: [] }),
        t
      )
    }
    return (
      j(n, e),
      (n.prototype.render = function (e, t, n, i) {
        var a = t.findComponents({
          mainType: 'series',
          subType: 'treemap',
          query: i,
        })
        if (!(gn(a, e) < 0)) {
          ;(this.seriesModel = e), (this.api = n), (this.ecModel = t)
          var o = nu(i, ['treemapZoomToNode', 'treemapRootToNode'], e),
            r = i && i.type,
            s = e.layoutInfo,
            l = !this._oldTree,
            u = this._storage,
            d =
              'treemapRootToNode' === r && o && u
                ? {
                    rootNodeGroup: u.nodeGroup[o.node.getRawIndex()],
                    direction: i.direction,
                  }
                : null,
            c = this._giveContainerGroup(s),
            h = e.get('animation'),
            p = this._doRender(c, e, d)
          !h ||
          l ||
          (r && 'treemapZoomToNode' !== r && 'treemapRootToNode' !== r)
            ? p.renderFinally()
            : this._doAnimation(c, p, e, d),
            this._resetController(n),
            this._renderBreadcrumb(e, n, o)
        }
      }),
      (n.prototype._giveContainerGroup = function (e) {
        var t = this._containerGroup
        return (
          t ||
            ((t = this._containerGroup = new _u()),
            this._initEvents(t),
            this.group.add(t)),
          (t.x = e.x),
          (t.y = e.y),
          t
        )
      }),
      (n.prototype._doRender = function (e, n, i) {
        var o = n.getData().tree,
          r = this._oldTree,
          s = { nodeGroup: [], background: [], content: [] },
          l = { nodeGroup: [], background: [], content: [] },
          u = this._storage,
          d = []
        function c(e, t, o, r) {
          return (function (e, t, n, i, o, r, s, l, u, d) {
            if (!s) return
            var c = s.getLayout(),
              h = e.getData(),
              g = s.getModel()
            if ((h.setItemGraphicEl(s.dataIndex, null), !c || !c.isInView))
              return
            var f = c.width,
              y = c.height,
              m = c.borderWidth,
              v = c.invisible,
              x = s.getRawIndex(),
              _ = l && l.getRawIndex(),
              S = s.viewChildren,
              b = c.upperHeight,
              w = S && S.length,
              I = g.getModel('itemStyle'),
              M = g.getModel(['emphasis', 'itemStyle']),
              D = g.getModel(['blur', 'itemStyle']),
              A = g.getModel(['select', 'itemStyle']),
              L = I.get('borderRadius') || 0,
              C = B('nodeGroup', _u)
            if (!C) return
            if (
              (u.add(C),
              (C.x = c.x || 0),
              (C.y = c.y || 0),
              C.markRedraw(),
              (Au(C).nodeWidth = f),
              (Au(C).nodeHeight = y),
              c.isAboveViewRoot)
            )
              return C
            var T = B('background', Su, d, wu)
            T && O(C, T, w && c.upperLabelHeight)
            var N = g.get(['emphasis', 'focus']),
              P = g.get(['emphasis', 'blurScope']),
              E =
                'ancestor' === N
                  ? s.getAncestorsIndices()
                  : 'descendant' === N
                  ? s.getDescendantIndices()
                  : N
            if (w)
              _n(C) && Sn(C, !1),
                T &&
                  (Sn(T, !0), h.setItemGraphicEl(s.dataIndex, T), bn(T, E, P))
            else {
              var R = B('content', Su, d, Iu)
              R && V(C, R),
                (T.disableMorphing = !0),
                T && _n(T) && Sn(T, !1),
                Sn(C, !0),
                h.setItemGraphicEl(s.dataIndex, C),
                bn(C, E, P)
            }
            return C
            function O(t, n, i) {
              var a = Be(n)
              if (
                ((a.dataIndex = s.dataIndex),
                (a.seriesIndex = e.seriesIndex),
                n.setShape({ x: 0, y: 0, width: f, height: y, r: L }),
                v)
              )
                z(n)
              else {
                n.invisible = !1
                var o = s.getVisual('style'),
                  r = o.stroke,
                  l = Du(I)
                l.fill = r
                var u = Mu(M)
                u.fill = M.get('borderColor')
                var d = Mu(D)
                d.fill = D.get('borderColor')
                var c = Mu(A)
                if (((c.fill = A.get('borderColor')), i)) {
                  var h = f - 2 * m
                  k(n, r, o.opacity, { x: m, y: 0, width: h, height: b })
                } else n.removeTextContent()
                n.setStyle(l),
                  (n.ensureState('emphasis').style = u),
                  (n.ensureState('blur').style = d),
                  (n.ensureState('select').style = c),
                  Ve(n)
              }
              t.add(n)
            }
            function V(t, n) {
              var i = Be(n)
              ;(i.dataIndex = s.dataIndex), (i.seriesIndex = e.seriesIndex)
              var a = Math.max(f - 2 * m, 0),
                o = Math.max(y - 2 * m, 0)
              if (
                ((n.culling = !0),
                n.setShape({ x: m, y: m, width: a, height: o, r: L }),
                v)
              )
                z(n)
              else {
                n.invisible = !1
                var r = s.getVisual('style'),
                  l = r.fill,
                  u = Du(I)
                ;(u.fill = l), (u.decal = r.decal)
                var d = Mu(M),
                  c = Mu(D),
                  h = Mu(A)
                k(n, l, r.opacity, null),
                  n.setStyle(u),
                  (n.ensureState('emphasis').style = d),
                  (n.ensureState('blur').style = c),
                  (n.ensureState('select').style = h),
                  Ve(n)
              }
              t.add(n)
            }
            function z(e) {
              !e.invisible && r.push(e)
            }
            function k(t, n, i, a) {
              var o = g.getModel(a ? 'upperLabel' : 'label'),
                r = p(g.get('name'), null),
                l = o.getShallow('show')
              ke(t, Ge(g, a ? 'upperLabel' : 'label'), {
                defaultText: l ? r : null,
                inheritColor: n,
                defaultOpacity: i,
                labelFetcher: e,
                labelDataIndex: s.dataIndex,
              })
              var u = t.getTextContent()
              if (u) {
                var d = u.style,
                  h = wn(d.padding || 0)
                a &&
                  (t.setTextConfig({ layoutRect: a }),
                  (u.disableLabelLayout = !0)),
                  (u.beforeUpdate = function () {
                    var e = Math.max(
                        (a ? a.width : t.shape.width) - h[1] - h[3],
                        0
                      ),
                      n = Math.max(
                        (a ? a.height : t.shape.height) - h[0] - h[2],
                        0
                      )
                    ;(d.width === e && d.height === n) ||
                      u.setStyle({ width: e, height: n })
                  }),
                  (d.truncateMinChar = 2),
                  (d.lineOverflow = 'truncate'),
                  G(d, a, c)
                var f = u.getState('emphasis')
                G(f ? f.style : null, a, c)
              }
            }
            function G(t, n, i) {
              var a = t ? t.text : null
              if (!n && i.isLeafRoot && null != a) {
                var o = e.get('drillDownIcon', !0)
                t.text = o ? o + ' ' + a : a
              }
            }
            function B(e, i, a, r) {
              var s = null != _ && n[e][_],
                l = o[e]
              return (
                s
                  ? ((n[e][_] = null), W(l, s))
                  : v ||
                    ((s = new i()) instanceof Oe &&
                      (s.z2 = (function (e, t) {
                        return e * bu + t
                      })(a, r)),
                    F(l, s)),
                (t[e][x] = s)
              )
            }
            function W(e, t) {
              var n = (e[x] = {})
              t instanceof _u
                ? ((n.oldX = t.x), (n.oldY = t.y))
                : (n.oldShape = a({}, t.shape))
            }
            function F(e, t) {
              var n = (e[x] = {}),
                a = s.parentNode,
                r = t instanceof Ne
              if (a && (!i || 'drillDown' === i.direction)) {
                var l = 0,
                  u = 0,
                  d = o.background[a.getRawIndex()]
                !i &&
                  d &&
                  d.oldShape &&
                  ((l = d.oldShape.width), (u = d.oldShape.height)),
                  r
                    ? ((n.oldX = 0), (n.oldY = u))
                    : (n.oldShape = { x: l, y: u, width: 0, height: 0 })
              }
              n.fadein = !r
            }
          })(n, l, u, i, s, d, e, t, o, r)
        }
        !(function e(n, i, a, o, r) {
          o
            ? ((i = n),
              t(n, function (e, t) {
                !e.isRemoved() && l(t, t)
              }))
            : new oi(i, n, s, s).add(l).update(l).remove(O(l, null)).execute()
          function s(e) {
            return e.getId()
          }
          function l(t, s) {
            var l = null != t ? n[t] : null,
              u = null != s ? i[s] : null,
              d = c(l, u, a, r)
            d &&
              e(
                (l && l.viewChildren) || [],
                (u && u.viewChildren) || [],
                d,
                o,
                r + 1
              )
          }
        })(
          o.root ? [o.root] : [],
          r && r.root ? [r.root] : [],
          e,
          o === r || !r,
          0
        )
        var h,
          g,
          f =
            ((g = { nodeGroup: [], background: [], content: [] }),
            (h = u) &&
              t(h, function (e, n) {
                var i = g[n]
                t(e, function (e) {
                  e && (i.push(e), (Au(e).willDelete = !0))
                })
              }),
            g)
        return (
          (this._oldTree = o),
          (this._storage = l),
          {
            lastsForAnimation: s,
            willDeleteEls: f,
            renderFinally: function () {
              t(f, function (e) {
                t(e, function (e) {
                  e.parent && e.parent.remove(e)
                })
              }),
                t(d, function (e) {
                  ;(e.invisible = !0), e.dirty()
                })
            },
          }
        )
      }),
      (n.prototype._doAnimation = function (e, n, i, o) {
        var r = i.get('animationDurationUpdate'),
          s = i.get('animationEasing'),
          l = (R(r) ? 0 : r) || 0,
          u = (R(s) ? null : s) || 'cubicOut',
          d = new xu()
        t(n.willDeleteEls, function (e, n) {
          t(e, function (e, t) {
            if (!e.invisible) {
              var i,
                a = e.parent,
                r = Au(a)
              if (o && 'drillDown' === o.direction)
                i =
                  a === o.rootNodeGroup
                    ? {
                        shape: {
                          x: 0,
                          y: 0,
                          width: r.nodeWidth,
                          height: r.nodeHeight,
                        },
                        style: { opacity: 0 },
                      }
                    : { style: { opacity: 0 } }
              else {
                var s = 0,
                  c = 0
                r.willDelete || ((s = r.nodeWidth / 2), (c = r.nodeHeight / 2)),
                  (i =
                    'nodeGroup' === n
                      ? { x: s, y: c, style: { opacity: 0 } }
                      : {
                          shape: { x: s, y: c, width: 0, height: 0 },
                          style: { opacity: 0 },
                        })
              }
              i && d.add(e, i, l, 0, u)
            }
          })
        }),
          t(
            this._storage,
            function (e, i) {
              t(e, function (e, t) {
                var o = n.lastsForAnimation[i][t],
                  r = {}
                o &&
                  (e instanceof Ne
                    ? null != o.oldX &&
                      ((r.x = e.x), (r.y = e.y), (e.x = o.oldX), (e.y = o.oldY))
                    : (o.oldShape &&
                        ((r.shape = a({}, e.shape)), e.setShape(o.oldShape)),
                      o.fadein
                        ? (e.setStyle('opacity', 0), (r.style = { opacity: 1 }))
                        : 1 !== e.style.opacity && (r.style = { opacity: 1 })),
                  d.add(e, r, l, 0, u))
              })
            },
            this
          ),
          (this._state = 'animating'),
          d
            .finished(
              f(function () {
                ;(this._state = 'ready'), n.renderFinally()
              }, this)
            )
            .start()
      }),
      (n.prototype._resetController = function (e) {
        var t = this._controller
        t ||
          ((t = this._controller = new ya(e.getZr())).enable(
            this.seriesModel.get('roam')
          ),
          t.on('pan', f(this._onPan, this)),
          t.on('zoom', f(this._onZoom, this)))
        var n = new pe(0, 0, e.getWidth(), e.getHeight())
        t.setPointerChecker(function (e, t, i) {
          return n.contain(t, i)
        })
      }),
      (n.prototype._clearController = function () {
        var e = this._controller
        e && (e.dispose(), (e = null))
      }),
      (n.prototype._onPan = function (e) {
        if (
          'animating' !== this._state &&
          (Math.abs(e.dx) > 3 || Math.abs(e.dy) > 3)
        ) {
          var t = this.seriesModel.getData().tree.root
          if (!t) return
          var n = t.getLayout()
          if (!n) return
          this.api.dispatchAction({
            type: 'treemapMove',
            from: this.uid,
            seriesId: this.seriesModel.id,
            rootRect: {
              x: n.x + e.dx,
              y: n.y + e.dy,
              width: n.width,
              height: n.height,
            },
          })
        }
      }),
      (n.prototype._onZoom = function (e) {
        var t = e.originX,
          n = e.originY
        if ('animating' !== this._state) {
          var i = this.seriesModel.getData().tree.root
          if (!i) return
          var a = i.getLayout()
          if (!a) return
          var o = new pe(a.x, a.y, a.width, a.height),
            r = this.seriesModel.layoutInfo
          ;(t -= r.x), (n -= r.y)
          var s = ye()
          qe(s, s, [-t, -n]),
            vn(s, s, [e.scale, e.scale]),
            qe(s, s, [t, n]),
            o.applyTransform(s),
            this.api.dispatchAction({
              type: 'treemapRender',
              from: this.uid,
              seriesId: this.seriesModel.id,
              rootRect: { x: o.x, y: o.y, width: o.width, height: o.height },
            })
        }
      }),
      (n.prototype._initEvents = function (e) {
        var t = this
        e.on(
          'click',
          function (e) {
            if ('ready' === t._state) {
              var n = t.seriesModel.get('nodeClick', !0)
              if (n) {
                var i = t.findTarget(e.offsetX, e.offsetY)
                if (i) {
                  var a = i.node
                  if (a.getLayout().isLeafRoot) t._rootToNode(i)
                  else if ('zoomToNode' === n) t._zoomToNode(i)
                  else if ('link' === n) {
                    var o = a.hostTree.data.getItemModel(a.dataIndex),
                      r = o.get('link', !0),
                      s = o.get('target', !0) || 'blank'
                    r && xn(r, s)
                  }
                }
              }
            }
          },
          this
        )
      }),
      (n.prototype._renderBreadcrumb = function (e, t, n) {
        var i = this
        n ||
          (n =
            null != e.get('leafDepth', !0)
              ? { node: e.getViewRoot() }
              : this.findTarget(t.getWidth() / 2, t.getHeight() / 2)) ||
          (n = { node: e.getData().tree.root }),
          (this._breadcrumb || (this._breadcrumb = new vu(this.group))).render(
            e,
            t,
            n.node,
            function (t) {
              'animating' !== i._state &&
                (au(e.getViewRoot(), t)
                  ? i._rootToNode({ node: t })
                  : i._zoomToNode({ node: t }))
            }
          )
      }),
      (n.prototype.remove = function () {
        this._clearController(),
          this._containerGroup && this._containerGroup.removeAll(),
          (this._storage = { nodeGroup: [], background: [], content: [] }),
          (this._state = 'ready'),
          this._breadcrumb && this._breadcrumb.remove()
      }),
      (n.prototype.dispose = function () {
        this._clearController()
      }),
      (n.prototype._zoomToNode = function (e) {
        this.api.dispatchAction({
          type: 'treemapZoomToNode',
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: e.node,
        })
      }),
      (n.prototype._rootToNode = function (e) {
        this.api.dispatchAction({
          type: 'treemapRootToNode',
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: e.node,
        })
      }),
      (n.prototype.findTarget = function (e, t) {
        var n
        return (
          this.seriesModel.getViewRoot().eachNode(
            { attr: 'viewChildren', order: 'preorder' },
            function (i) {
              var a = this._storage.background[i.getRawIndex()]
              if (a) {
                var o = a.transformCoordToLocal(e, t),
                  r = a.shape
                if (
                  !(
                    r.x <= o[0] &&
                    o[0] <= r.x + r.width &&
                    r.y <= o[1] &&
                    o[1] <= r.y + r.height
                  )
                )
                  return !1
                n = { node: i, offsetX: o[0], offsetY: o[1] }
              }
            },
            this
          ),
          n
        )
      }),
      (n.type = 'treemap'),
      n
    )
  })(zt),
  Cu = Te(),
  Tu = {
    seriesType: 'treemap',
    reset: function (e) {
      var t = e.getData().tree.root
      t.isRemoved() || Nu(t, {}, e.getViewRoot().getAncestors(), e)
    },
  }
function Nu(e, n, i, o) {
  var r = e.getModel(),
    s = e.getLayout(),
    l = e.hostTree.data
  if (s && !s.invisible && s.isInView) {
    var u,
      d = r.getModel('itemStyle'),
      c = (function (e, n, i) {
        var o = a({}, n),
          r = i.designatedVisualItemStyle
        return (
          t(['color', 'colorAlpha', 'colorSaturation'], function (t) {
            r[t] = n[t]
            var i = e.get(t)
            ;(r[t] = null), null != i && (o[t] = i)
          }),
          o
        )
      })(d, n, o),
      h = l.ensureUniqueItemVisual(e.dataIndex, 'style'),
      p = d.get('borderColor'),
      g = d.get('borderColorSaturation')
    null != g &&
      (p = (function (e, t) {
        return null != t ? dt(t, null, null, e) : null
      })(g, (u = Pu(c)))),
      (h.stroke = p)
    var f = e.viewChildren
    if (f && f.length) {
      var y = (function (e, t, n, i, a, o) {
        if (!o || !o.length) return
        var r =
          Ru(t, 'color') ||
          (null != a.color &&
            'none' !== a.color &&
            (Ru(t, 'colorAlpha') || Ru(t, 'colorSaturation')))
        if (!r) return
        var s = t.get('visualMin'),
          l = t.get('visualMax'),
          u = n.dataExtent.slice()
        null != s && s < u[0] && (u[0] = s), null != l && l > u[1] && (u[1] = l)
        var d = t.get('colorMappingBy'),
          c = { type: r.name, dataExtent: u, visual: r.range }
        'color' !== c.type || ('index' !== d && 'id' !== d)
          ? (c.mappingMethod = 'linear')
          : ((c.mappingMethod = 'category'), (c.loop = !0))
        var h = new yr(c)
        return (Cu(h).drColorMappingBy = d), h
      })(0, r, s, 0, c, f)
      t(f, function (e, t) {
        if (e.depth >= i.length || e === i[e.depth]) {
          var n = (function (e, t, n, i, o, r) {
            var s = a({}, t)
            if (o) {
              var l = o.type,
                u = 'color' === l && Cu(o).drColorMappingBy,
                d =
                  'index' === u
                    ? i
                    : 'id' === u
                    ? r.mapIdToIndex(n.getId())
                    : n.getValue(e.get('visualDimension'))
              s[l] = o.mapValueToVisual(d)
            }
            return s
          })(r, c, e, t, y, o)
          Nu(e, n, i, o)
        }
      })
    } else (u = Pu(c)), (h.fill = u)
  }
}
function Pu(e) {
  var t = Eu(e, 'color')
  if (t) {
    var n = Eu(e, 'colorAlpha'),
      i = Eu(e, 'colorSaturation')
    return i && (t = dt(t, null, null, i)), n && (t = ct(t, n)), t
  }
}
function Eu(e, t) {
  var n = e[t]
  if (null != n && 'none' !== n) return n
}
function Ru(e, t) {
  var n = e.get(t)
  return g(n) && n.length ? { name: t, range: n } : null
}
var Ou = Math.max,
  Vu = Math.min,
  zu = be,
  ku = t,
  Gu = ['itemStyle', 'borderWidth'],
  Bu = ['itemStyle', 'gapWidth'],
  Wu = ['upperLabel', 'show'],
  Fu = ['upperLabel', 'height'],
  Yu = {
    seriesType: 'treemap',
    reset: function (e, t, n, i) {
      var o = n.getWidth(),
        r = n.getHeight(),
        s = e.option,
        l = we(e.getBoxLayoutParams(), {
          width: n.getWidth(),
          height: n.getHeight(),
        }),
        u = s.size || [],
        d = se(zu(l.width, u[0]), o),
        c = se(zu(l.height, u[1]), r),
        h = i && i.type,
        p = nu(i, ['treemapZoomToNode', 'treemapRootToNode'], e),
        g = 'treemapRender' === h || 'treemapMove' === h ? i.rootRect : null,
        f = e.getViewRoot(),
        y = iu(f)
      if ('treemapMove' !== h) {
        var m =
            'treemapZoomToNode' === h
              ? (function (e, t, n, i, a) {
                  var o,
                    r = (t || {}).node,
                    s = [i, a]
                  if (!r || r === n) return s
                  var l = i * a,
                    u = l * e.option.zoomToNodeRatio
                  for (; (o = r.parentNode); ) {
                    for (
                      var d = 0, c = o.children, h = 0, p = c.length;
                      h < p;
                      h++
                    )
                      d += c[h].getValue()
                    var g = r.getValue()
                    if (0 === g) return s
                    u *= d / g
                    var f = o.getModel(),
                      y = f.get(Gu)
                    ;(u +=
                      4 * y * y +
                      (3 * y + Math.max(y, ju(f))) * Math.pow(u, 0.5)) > In &&
                      (u = In),
                      (r = o)
                  }
                  u < l && (u = l)
                  var m = Math.pow(u / l, 0.5)
                  return [i * m, a * m]
                })(e, p, f, d, c)
              : g
              ? [g.width, g.height]
              : [d, c],
          v = s.sort
        v && 'asc' !== v && 'desc' !== v && (v = 'desc')
        var x = { squareRatio: s.squareRatio, sort: v, leafDepth: s.leafDepth }
        f.hostTree.clearLayouts()
        var _ = { x: 0, y: 0, width: m[0], height: m[1], area: m[0] * m[1] }
        f.setLayout(_),
          Xu(f, x, !1, 0),
          (_ = f.getLayout()),
          ku(y, function (e, t) {
            var n = (y[t + 1] || f).getValue()
            e.setLayout(
              a({ dataExtent: [n, n], borderWidth: 0, upperHeight: 0 }, _)
            )
          })
      }
      var S = e.getData().tree.root
      S.setLayout(
        (function (e, t, n) {
          if (t) return { x: t.x, y: t.y }
          var i = { x: 0, y: 0 }
          if (!n) return i
          var a = n.node,
            o = a.getLayout()
          if (!o) return i
          var r = [o.width / 2, o.height / 2],
            s = a
          for (; s; ) {
            var l = s.getLayout()
            ;(r[0] += l.x), (r[1] += l.y), (s = s.parentNode)
          }
          return { x: e.width / 2 - r[0], y: e.height / 2 - r[1] }
        })(l, g, p),
        !0
      ),
        e.setLayoutInfo(l),
        Zu(S, new pe(-l.x, -l.y, o, r), y, f, 0)
    },
  }
function Xu(e, t, n, i) {
  var a, o
  if (!e.isRemoved()) {
    var r = e.getLayout()
    ;(a = r.width), (o = r.height)
    var s = e.getModel(),
      l = s.get(Gu),
      u = s.get(Bu) / 2,
      d = ju(s),
      c = Math.max(l, d),
      h = l - u,
      p = c - u
    e.setLayout({ borderWidth: l, upperHeight: c, upperLabelHeight: d }, !0)
    var g = (a = Ou(a - 2 * h, 0)) * (o = Ou(o - h - p, 0)),
      f = (function (e, t, n, i, a, o) {
        var r = e.children || [],
          s = i.sort
        'asc' !== s && 'desc' !== s && (s = null)
        var l = null != i.leafDepth && i.leafDepth <= o
        if (a && !l) return (e.viewChildren = [])
        !(function (e, t) {
          t &&
            e.sort(function (e, n) {
              var i =
                'asc' === t
                  ? e.getValue() - n.getValue()
                  : n.getValue() - e.getValue()
              return 0 === i
                ? 'asc' === t
                  ? e.dataIndex - n.dataIndex
                  : n.dataIndex - e.dataIndex
                : i
            })
        })(
          (r = Ue(r, function (e) {
            return !e.isRemoved()
          })),
          s
        )
        var u = (function (e, t, n) {
          for (var i = 0, a = 0, o = t.length; a < o; a++) i += t[a].getValue()
          var r,
            s = e.get('visualDimension')
          t && t.length
            ? 'value' === s && n
              ? ((r = [t[t.length - 1].getValue(), t[0].getValue()]),
                'asc' === n && r.reverse())
              : ((r = [1 / 0, -1 / 0]),
                ku(t, function (e) {
                  var t = e.getValue(s)
                  t < r[0] && (r[0] = t), t > r[1] && (r[1] = t)
                }))
            : (r = [NaN, NaN])
          return { sum: i, dataExtent: r }
        })(t, r, s)
        if (0 === u.sum) return (e.viewChildren = [])
        if (
          ((u.sum = (function (e, t, n, i, a) {
            if (!i) return n
            for (
              var o = e.get('visibleMin'), r = a.length, s = r, l = r - 1;
              l >= 0;
              l--
            ) {
              var u = a['asc' === i ? r - l - 1 : l].getValue()
              ;(u / n) * t < o && ((s = l), (n -= u))
            }
            return 'asc' === i ? a.splice(0, r - s) : a.splice(s, r - s), n
          })(t, n, u.sum, s, r)),
          0 === u.sum)
        )
          return (e.viewChildren = [])
        for (var d = 0, c = r.length; d < c; d++) {
          var h = (r[d].getValue() / u.sum) * n
          r[d].setLayout({ area: h })
        }
        l && (r.length && e.setLayout({ isLeafRoot: !0 }, !0), (r.length = 0))
        return (
          (e.viewChildren = r), e.setLayout({ dataExtent: u.dataExtent }, !0), r
        )
      })(e, s, g, t, n, i)
    if (f.length) {
      var y = { x: h, y: p, width: a, height: o },
        m = Vu(a, o),
        v = 1 / 0,
        x = []
      x.area = 0
      for (var _ = 0, S = f.length; _ < S; ) {
        var b = f[_]
        x.push(b), (x.area += b.getLayout().area)
        var w = Hu(x, m, t.squareRatio)
        w <= v
          ? (_++, (v = w))
          : ((x.area -= x.pop().getLayout().area),
            Uu(x, m, y, u, !1),
            (m = Vu(y.width, y.height)),
            (x.length = x.area = 0),
            (v = 1 / 0))
      }
      if ((x.length && Uu(x, m, y, u, !0), !n)) {
        var I = s.get('childrenVisibleMin')
        null != I && g < I && (n = !0)
      }
      for (_ = 0, S = f.length; _ < S; _++) Xu(f[_], t, n, i + 1)
    }
  }
}
function Hu(e, t, n) {
  for (var i = 0, a = 1 / 0, o = 0, r = void 0, s = e.length; o < s; o++)
    (r = e[o].getLayout().area) && (r < a && (a = r), r > i && (i = r))
  var l = e.area * e.area,
    u = t * t * n
  return l ? Ou((u * i) / l, l / (u * a)) : 1 / 0
}
function Uu(e, t, n, i, a) {
  var o = t === n.width ? 0 : 1,
    r = 1 - o,
    s = ['x', 'y'],
    l = ['width', 'height'],
    u = n[s[o]],
    d = t ? e.area / t : 0
  ;(a || d > n[l[r]]) && (d = n[l[r]])
  for (var c = 0, h = e.length; c < h; c++) {
    var p = e[c],
      g = {},
      f = d ? p.getLayout().area / d : 0,
      y = (g[l[r]] = Ou(d - 2 * i, 0)),
      m = n[s[o]] + n[l[o]] - u,
      v = c === h - 1 || m < f ? m : f,
      x = (g[l[o]] = Ou(v - 2 * i, 0))
    ;(g[s[r]] = n[s[r]] + Vu(i, y / 2)),
      (g[s[o]] = u + Vu(i, x / 2)),
      (u += v),
      p.setLayout(g, !0)
  }
  ;(n[s[r]] += d), (n[l[r]] -= d)
}
function Zu(e, t, n, i, a) {
  var o = e.getLayout(),
    r = n[a],
    s = r && r === e
  if (!((r && !s) || (a === n.length && e !== i))) {
    e.setLayout(
      { isInView: !0, invisible: !s && !t.intersect(o), isAboveViewRoot: s },
      !0
    )
    var l = new pe(t.x - o.x, t.y - o.y, t.width, t.height)
    ku(e.viewChildren || [], function (e) {
      Zu(e, l, n, i, a + 1)
    })
  }
}
function ju(e) {
  return e.get(Wu) ? e.get(Fu) : 0
}
function qu(e) {
  e.registerSeriesModel(fu),
    e.registerChartView(Lu),
    e.registerVisual(Tu),
    e.registerLayout(Yu),
    (function (e) {
      for (var t = 0; t < hu.length; t++)
        e.registerAction({ type: hu[t], update: 'updateView' }, cu)
      e.registerAction(
        { type: 'treemapRootToNode', update: 'updateView' },
        function (e, t) {
          t.eachComponent(
            { mainType: 'series', subType: 'treemap', query: e },
            function (t, n) {
              var i = nu(e, ['treemapZoomToNode', 'treemapRootToNode'], t)
              if (i) {
                var a = t.getViewRoot()
                a && (e.direction = au(a, i.node) ? 'rollUp' : 'drillDown'),
                  t.resetViewRoot(i.node)
              }
            }
          )
        }
      )
    })(e)
}
function Ju(e) {
  var t = e.findComponents({ mainType: 'legend' })
  t &&
    t.length &&
    e.eachSeriesByType('graph', function (e) {
      var n = e.getCategoriesData(),
        i = e.getGraph().data,
        a = n.mapArray(n.getName)
      i.filterSelf(function (e) {
        var n = i.getItemModel(e).getShallow('category')
        if (null != n) {
          'number' == typeof n && (n = a[n])
          for (var o = 0; o < t.length; o++) if (!t[o].isSelected(n)) return !1
        }
        return !0
      })
    })
}
function Ku(e) {
  var t = {}
  e.eachSeriesByType('graph', function (e) {
    var n = e.getCategoriesData(),
      i = e.getData(),
      o = {}
    n.each(function (i) {
      var a = n.getName(i)
      o['ec-' + a] = i
      var r = n.getItemModel(i),
        s = r.getModel('itemStyle').getItemStyle()
      s.fill || (s.fill = e.getColorFromPalette(a, t)),
        n.setItemVisual(i, 'style', s)
      for (
        var l = ['symbol', 'symbolSize', 'symbolKeepAspect'], u = 0;
        u < l.length;
        u++
      ) {
        var d = r.getShallow(l[u], !0)
        null != d && n.setItemVisual(i, l[u], d)
      }
    }),
      n.count() &&
        i.each(function (e) {
          var t = i.getItemModel(e).getShallow('category')
          if (null != t) {
            'string' == typeof t && (t = o['ec-' + t])
            var r = n.getItemVisual(t, 'style'),
              s = i.ensureUniqueItemVisual(e, 'style')
            a(s, r)
            for (
              var l = ['symbol', 'symbolSize', 'symbolKeepAspect'], u = 0;
              u < l.length;
              u++
            )
              i.setItemVisual(e, l[u], n.getItemVisual(t, l[u]))
          }
        })
  })
}
function Qu(e) {
  return e instanceof Array || (e = [e, e]), e
}
function $u(e) {
  e.eachSeriesByType('graph', function (e) {
    var t = e.getGraph(),
      n = e.getEdgeData(),
      i = Qu(e.get('edgeSymbol')),
      o = Qu(e.get('edgeSymbolSize'))
    n.setVisual('fromSymbol', i && i[0]),
      n.setVisual('toSymbol', i && i[1]),
      n.setVisual('fromSymbolSize', o && o[0]),
      n.setVisual('toSymbolSize', o && o[1]),
      n.setVisual('style', e.getModel('lineStyle').getLineStyle()),
      n.each(function (e) {
        var i = n.getItemModel(e),
          o = t.getEdgeByIndex(e),
          r = Qu(i.getShallow('symbol', !0)),
          s = Qu(i.getShallow('symbolSize', !0)),
          l = i.getModel('lineStyle').getLineStyle(),
          u = n.ensureUniqueItemVisual(e, 'style')
        switch ((a(u, l), u.stroke)) {
          case 'source':
            var d = o.node1.getVisual('style')
            u.stroke = d && d.fill
            break
          case 'target':
            d = o.node2.getVisual('style')
            u.stroke = d && d.fill
        }
        r[0] && o.setVisual('fromSymbol', r[0]),
          r[1] && o.setVisual('toSymbol', r[1]),
          s[0] && o.setVisual('fromSymbolSize', s[0]),
          s[1] && o.setVisual('toSymbolSize', s[1])
      })
  })
}
var ed = function (e) {
    return e.get('autoCurveness') || null
  },
  td = function (e, t) {
    var n = ed(e),
      i = 20,
      a = []
    if ('number' == typeof n) i = n
    else if (g(n)) return void (e.__curvenessList = n)
    t > i && (i = t)
    var o = i % 2 ? i + 2 : i + 3
    a = []
    for (var r = 0; r < o; r++)
      a.push(((r % 2 ? r + 1 : r) / 10) * (r % 2 ? -1 : 1))
    e.__curvenessList = a
  },
  nd = function (e, t, n) {
    var i = [e.id, e.dataIndex].join('.'),
      a = [t.id, t.dataIndex].join('.')
    return [n.uid, i, a].join('--\x3e')
  },
  id = function (e) {
    var t = e.split('--\x3e')
    return [t[0], t[2], t[1]].join('--\x3e')
  },
  ad = function (e, t) {
    var n = t.__edgeMap
    return n[e] ? n[e].length : 0
  }
function od(e, t, n, i) {
  var a = ed(t),
    o = g(a)
  if (!a) return null
  var r = (function (e, t) {
    var n = nd(e.node1, e.node2, t)
    return t.__edgeMap[n]
  })(e, t)
  if (!r) return null
  for (var s = -1, l = 0; l < r.length; l++)
    if (r[l] === n) {
      s = l
      break
    }
  var u = (function (e, t) {
    return ad(nd(e.node1, e.node2, t), t) + ad(nd(e.node2, e.node1, t), t)
  })(e, t)
  td(t, u), (e.lineStyle = e.lineStyle || {})
  var d = nd(e.node1, e.node2, t),
    c = t.__curvenessList,
    h = o || u % 2 ? 0 : 1
  if (r.isForward) return c[h + s]
  var p = id(d),
    f = ad(p, t),
    y = c[s + f + h]
  return i
    ? o
      ? a && 0 === a[0]
        ? (f + h) % 2
          ? y
          : -y
        : ((f % 2 ? 0 : 1) + h) % 2
        ? y
        : -y
      : (f + h) % 2
      ? y
      : -y
    : c[s + f + h]
}
function rd(e) {
  var t = e.coordinateSystem
  if (!t || 'view' === t.type) {
    var n = e.getGraph()
    n.eachNode(function (e) {
      var t = e.getModel()
      e.setLayout([+t.get('x'), +t.get('y')])
    }),
      sd(n, e)
  }
}
function sd(e, t) {
  e.eachEdge(function (e, n) {
    var i = $t(
        e.getModel().get(['lineStyle', 'curveness']),
        -od(e, t, n, !0),
        0
      ),
      a = Mn(e.node1.getLayout()),
      o = Mn(e.node2.getLayout()),
      r = [a, o]
    ;+i &&
      r.push([
        (a[0] + o[0]) / 2 - (a[1] - o[1]) * i,
        (a[1] + o[1]) / 2 - (o[0] - a[0]) * i,
      ]),
      e.setLayout(r)
  })
}
function ld(e, n) {
  e.eachSeriesByType('graph', function (e) {
    var n = e.get('layout'),
      i = e.coordinateSystem
    if (i && 'view' !== i.type) {
      var a = e.getData(),
        o = []
      t(i.dimensions, function (e) {
        o = o.concat(a.mapDimensionsAll(e))
      })
      for (var r = 0; r < a.count(); r++) {
        for (var s = [], l = !1, u = 0; u < o.length; u++) {
          var d = a.get(o[u], r)
          isNaN(d) || (l = !0), s.push(d)
        }
        l
          ? a.setItemLayout(r, i.dataToPoint(s))
          : a.setItemLayout(r, [NaN, NaN])
      }
      sd(a.graph, e)
    } else (n && 'none' !== n) || rd(e)
  })
}
function ud(e) {
  var t = e.coordinateSystem
  if ('view' !== t.type) return 1
  var n = e.option.nodeScaleRatio,
    i = t.scaleX
  return ((t.getZoom() - 1) * n + 1) / i
}
function dd(e) {
  var t = e.getVisual('symbolSize')
  return t instanceof Array && (t = (t[0] + t[1]) / 2), +t
}
var cd = Math.PI,
  hd = []
function pd(e, t) {
  var n = e.coordinateSystem
  if (!n || 'view' === n.type) {
    var i = n.getBoundingRect(),
      a = e.getData(),
      o = a.graph,
      r = i.width / 2 + i.x,
      s = i.height / 2 + i.y,
      l = Math.min(i.width, i.height) / 2,
      u = a.count()
    a.setLayout({ cx: r, cy: s }),
      u &&
        (gd[t](e, o, a, l, r, s, u),
        o.eachEdge(function (t, n) {
          var i,
            a = $t(
              t.getModel().get(['lineStyle', 'curveness']),
              od(t, e, n),
              0
            ),
            o = Mn(t.node1.getLayout()),
            l = Mn(t.node2.getLayout()),
            u = (o[0] + l[0]) / 2,
            d = (o[1] + l[1]) / 2
          ;+a && (i = [r * (a *= 3) + u * (1 - a), s * a + d * (1 - a)]),
            t.setLayout([o, l, i])
        }))
  }
}
var gd = {
  value: function (e, t, n, i, a, o, r) {
    var s = 0,
      l = n.getSum('value'),
      u = (2 * Math.PI) / (l || r)
    t.eachNode(function (e) {
      var t = e.getValue('value'),
        n = (u * (l ? t : 1)) / 2
      ;(s += n),
        e.setLayout([i * Math.cos(s) + a, i * Math.sin(s) + o]),
        (s += n)
    })
  },
  symbolSize: function (e, t, n, i, a, o, r) {
    var s = 0
    hd.length = r
    var l = ud(e)
    t.eachNode(function (e) {
      var t = dd(e)
      isNaN(t) && (t = 2), t < 0 && (t = 0), (t *= l)
      var n = Math.asin(t / 2 / i)
      isNaN(n) && (n = cd / 2), (hd[e.dataIndex] = n), (s += 2 * n)
    })
    var u = (2 * cd - s) / r / 2,
      d = 0
    t.eachNode(function (e) {
      var t = u + hd[e.dataIndex]
      ;(d += t),
        e.setLayout([i * Math.cos(d) + a, i * Math.sin(d) + o]),
        (d += t)
    })
  },
}
function fd(e) {
  e.eachSeriesByType('graph', function (e) {
    'circular' === e.get('layout') && pd(e, 'symbolSize')
  })
}
var yd = Ln
function md(e) {
  e.eachSeriesByType('graph', function (e) {
    var t = e.coordinateSystem
    if (!t || 'view' === t.type)
      if ('force' === e.get('layout')) {
        var n = e.preservedPoints || {},
          i = e.getGraph(),
          a = i.data,
          o = i.edgeData,
          r = e.getModel('force'),
          s = r.get('initLayout')
        e.preservedPoints
          ? a.each(function (e) {
              var t = a.getId(e)
              a.setItemLayout(e, n[t] || [NaN, NaN])
            })
          : s && 'none' !== s
          ? 'circular' === s && pd(e, 'value')
          : rd(e)
        var l = a.getDataExtent('value'),
          u = o.getDataExtent('value'),
          d = r.get('repulsion'),
          c = r.get('edgeLength'),
          h = g(d) ? d : [d, d],
          p = g(c) ? c : [c, c]
        p = [p[1], p[0]]
        var f = a.mapArray('value', function (e, t) {
            var n = a.getItemLayout(t),
              i = ut(e, l, h)
            return (
              isNaN(i) && (i = (h[0] + h[1]) / 2),
              {
                w: i,
                rep: i,
                fixed: a.getItemModel(t).get('fixed'),
                p: !n || isNaN(n[0]) || isNaN(n[1]) ? null : n,
              }
            )
          }),
          y = o.mapArray('value', function (t, n) {
            var a = i.getEdgeByIndex(n),
              o = ut(t, u, p)
            isNaN(o) && (o = (p[0] + p[1]) / 2)
            var r = a.getModel(),
              s = $t(
                a.getModel().get(['lineStyle', 'curveness']),
                -od(a, e, n, !0),
                0
              )
            return {
              n1: f[a.node1.dataIndex],
              n2: f[a.node2.dataIndex],
              d: o,
              curveness: s,
              ignoreForceLayout: r.get('ignoreForceLayout'),
            }
          }),
          m = t.getBoundingRect(),
          v = (function (e, t, n) {
            for (
              var i = e,
                a = t,
                o = n.rect,
                r = o.width,
                s = o.height,
                l = [o.x + r / 2, o.y + s / 2],
                u = null == n.gravity ? 0.1 : n.gravity,
                d = 0;
              d < i.length;
              d++
            ) {
              var c = i[d]
              c.p ||
                (c.p = Cn(
                  r * (Math.random() - 0.5) + l[0],
                  s * (Math.random() - 0.5) + l[1]
                )),
                (c.pp = Mn(c.p)),
                (c.edges = null)
            }
            var h,
              p,
              g = null == n.friction ? 0.6 : n.friction,
              f = g
            return {
              warmUp: function () {
                f = 0.8 * g
              },
              setFixed: function (e) {
                i[e].fixed = !0
              },
              setUnfixed: function (e) {
                i[e].fixed = !1
              },
              beforeStep: function (e) {
                h = e
              },
              afterStep: function (e) {
                p = e
              },
              step: function (e) {
                h && h(i, a)
                for (var t = [], n = i.length, o = 0; o < a.length; o++) {
                  var r = a[o]
                  if (!r.ignoreForceLayout) {
                    var s = r.n1,
                      d = r.n2
                    Lt(t, d.p, s.p)
                    var c = Dn(t) - r.d,
                      g = d.w / (s.w + d.w)
                    isNaN(g) && (g = 0),
                      Dt(t, t),
                      !s.fixed && yd(s.p, s.p, t, g * c * f),
                      !d.fixed && yd(d.p, d.p, t, -(1 - g) * c * f)
                  }
                }
                for (o = 0; o < n; o++)
                  (x = i[o]).fixed || (Lt(t, l, x.p), yd(x.p, x.p, t, u * f))
                for (o = 0; o < n; o++) {
                  s = i[o]
                  for (var y = o + 1; y < n; y++) {
                    ;(d = i[y]),
                      Lt(t, d.p, s.p),
                      0 === (c = Dn(t)) &&
                        (An(t, Math.random() - 0.5, Math.random() - 0.5),
                        (c = 1))
                    var m = (s.rep + d.rep) / c / c
                    !s.fixed && yd(s.pp, s.pp, t, m),
                      !d.fixed && yd(d.pp, d.pp, t, -m)
                  }
                }
                var v = []
                for (o = 0; o < n; o++) {
                  var x
                  ;(x = i[o]).fixed ||
                    (Lt(v, x.p, x.pp), yd(x.p, x.p, v, f), xe(x.pp, x.p))
                }
                var _ = (f *= 0.992) < 0.01
                p && p(i, a, _), e && e(_)
              },
            }
          })(f, y, {
            rect: m,
            gravity: r.get('gravity'),
            friction: r.get('friction'),
          })
        v.beforeStep(function (e, t) {
          for (var n = 0, a = e.length; n < a; n++)
            e[n].fixed && xe(e[n].p, i.getNodeByIndex(n).getLayout())
        }),
          v.afterStep(function (e, t, o) {
            for (var r = 0, s = e.length; r < s; r++)
              e[r].fixed || i.getNodeByIndex(r).setLayout(e[r].p),
                (n[a.getId(r)] = e[r].p)
            for (r = 0, s = t.length; r < s; r++) {
              var l = t[r],
                u = i.getEdgeByIndex(r),
                d = l.n1.p,
                c = l.n2.p,
                h = u.getLayout()
              ;((h = h ? h.slice() : [])[0] = h[0] || []),
                (h[1] = h[1] || []),
                xe(h[0], d),
                xe(h[1], c),
                +l.curveness &&
                  (h[2] = [
                    (d[0] + c[0]) / 2 - (d[1] - c[1]) * l.curveness,
                    (d[1] + c[1]) / 2 - (c[0] - d[0]) * l.curveness,
                  ]),
                u.setLayout(h)
            }
          }),
          (e.forceLayout = v),
          (e.preservedPoints = n),
          v.step()
      } else e.forceLayout = null
  })
}
function vd(e, t) {
  var n = []
  return (
    e.eachSeriesByType('graph', function (e) {
      var i = e.get('coordinateSystem')
      if (!i || 'view' === i) {
        var o = e.getData(),
          r = o.mapArray(function (e) {
            var t = o.getItemModel(e)
            return [+t.get('x'), +t.get('y')]
          }),
          s = [],
          l = []
        hn(r, s, l),
          l[0] - s[0] == 0 && ((l[0] += 1), (s[0] -= 1)),
          l[1] - s[1] == 0 && ((l[1] += 1), (s[1] -= 1))
        var u = (l[0] - s[0]) / (l[1] - s[1]),
          d = (function (e, t, n) {
            var i = a(e.getBoxLayoutParams(), { aspect: n })
            return we(i, { width: t.getWidth(), height: t.getHeight() })
          })(e, t, u)
        isNaN(u) && ((s = [d.x, d.y]), (l = [d.x + d.width, d.y + d.height]))
        var c = l[0] - s[0],
          h = l[1] - s[1],
          p = d.width,
          g = d.height,
          f = (e.coordinateSystem = new ea())
        ;(f.zoomLimit = e.get('scaleLimit')),
          f.setBoundingRect(s[0], s[1], c, h),
          f.setViewRect(d.x, d.y, p, g),
          f.setCenter(e.get('center')),
          f.setZoom(e.get('zoom')),
          n.push(f)
      }
    }),
    n
  )
}
var xd = [],
  _d = [],
  Sd = [],
  bd = Nn,
  wd = Pn,
  Id = Math.abs
function Md(e, t, n) {
  for (
    var i, a = e[0], o = e[1], r = e[2], s = 1 / 0, l = n * n, u = 0.1, d = 0.1;
    d <= 0.9;
    d += 0.1
  ) {
    ;(xd[0] = bd(a[0], o[0], r[0], d)),
      (xd[1] = bd(a[1], o[1], r[1], d)),
      (p = Id(wd(xd, t) - l)) < s && ((s = p), (i = d))
  }
  for (var c = 0; c < 32; c++) {
    var h = i + u
    ;(_d[0] = bd(a[0], o[0], r[0], i)),
      (_d[1] = bd(a[1], o[1], r[1], i)),
      (Sd[0] = bd(a[0], o[0], r[0], h)),
      (Sd[1] = bd(a[1], o[1], r[1], h))
    var p = wd(_d, t) - l
    if (Id(p) < 0.01) break
    var g = wd(Sd, t) - l
    ;(u /= 2),
      p < 0 ? (g >= 0 ? (i += u) : (i -= u)) : g >= 0 ? (i -= u) : (i += u)
  }
  return i
}
function Dd(e, t) {
  var n = [],
    i = Tn,
    a = [[], [], []],
    o = [[], []],
    r = []
  ;(t /= 2),
    e.eachEdge(function (e, s) {
      var l = e.getLayout(),
        u = e.getVisual('fromSymbol'),
        d = e.getVisual('toSymbol')
      l.__original ||
        ((l.__original = [Mn(l[0]), Mn(l[1])]),
        l[2] && l.__original.push(Mn(l[2])))
      var c = l.__original
      if (null != l[2]) {
        if (
          (xe(a[0], c[0]), xe(a[1], c[2]), xe(a[2], c[1]), u && 'none' !== u)
        ) {
          var h = dd(e.node1),
            p = Md(a, c[0], h * t)
          i(a[0][0], a[1][0], a[2][0], p, n),
            (a[0][0] = n[3]),
            (a[1][0] = n[4]),
            i(a[0][1], a[1][1], a[2][1], p, n),
            (a[0][1] = n[3]),
            (a[1][1] = n[4])
        }
        if (d && 'none' !== d) {
          ;(h = dd(e.node2)), (p = Md(a, c[1], h * t))
          i(a[0][0], a[1][0], a[2][0], p, n),
            (a[1][0] = n[1]),
            (a[2][0] = n[2]),
            i(a[0][1], a[1][1], a[2][1], p, n),
            (a[1][1] = n[1]),
            (a[2][1] = n[2])
        }
        xe(l[0], a[0]), xe(l[1], a[2]), xe(l[2], a[1])
      } else {
        if (
          (xe(o[0], c[0]),
          xe(o[1], c[1]),
          Lt(r, o[1], o[0]),
          Dt(r, r),
          u && 'none' !== u)
        ) {
          h = dd(e.node1)
          Ln(o[0], o[0], r, h * t)
        }
        if (d && 'none' !== d) {
          h = dd(e.node2)
          Ln(o[1], o[1], r, -h * t)
        }
        xe(l[0], o[0]), xe(l[1], o[1])
      }
    })
}
function Ad(e) {
  return 'view' === e.type
}
var Ld = (function (e) {
  function t() {
    var n = (null !== e && e.apply(this, arguments)) || this
    return (n.type = t.type), n
  }
  return (
    j(t, e),
    (t.prototype.init = function (e, t) {
      var n = new Ir(),
        i = new kr(),
        a = this.group
      ;(this._controller = new ya(t.getZr())),
        (this._controllerHost = { target: a }),
        a.add(n.group),
        a.add(i.group),
        (this._symbolDraw = n),
        (this._lineDraw = i),
        (this._firstRender = !0)
    }),
    (t.prototype.render = function (e, t, n) {
      var i = this,
        o = e.coordinateSystem
      this._model = e
      var r = this._symbolDraw,
        s = this._lineDraw,
        l = this.group
      if (Ad(o)) {
        var u = { x: o.x, y: o.y, scaleX: o.scaleX, scaleY: o.scaleY }
        this._firstRender ? l.attr(u) : Ee(l, u, e)
      }
      Dd(e.getGraph(), ud(e))
      var d = e.getData()
      r.updateData(d)
      var c = e.getEdgeData()
      s.updateData(c),
        this._updateNodeAndLinkScale(),
        this._updateController(e, t, n),
        clearTimeout(this._layoutTimeout)
      var h = e.forceLayout,
        p = e.get(['force', 'layoutAnimation'])
      h && this._startForceLayoutIteration(h, p),
        d.graph.eachNode(function (e) {
          var t = e.dataIndex,
            n = e.getGraphicEl(),
            a = e.getModel()
          n.off('drag').off('dragend')
          var o = a.get('draggable')
          o &&
            n
              .on('drag', function () {
                h &&
                  (h.warmUp(),
                  !i._layouting && i._startForceLayoutIteration(h, p),
                  h.setFixed(t),
                  d.setItemLayout(t, [n.x, n.y]))
              })
              .on('dragend', function () {
                h && h.setUnfixed(t)
              }),
            n.setDraggable(o && !!h),
            'adjacency' === a.get(['emphasis', 'focus']) &&
              (Be(n).focus = e.getAdjacentDataIndices())
        }),
        d.graph.eachEdge(function (e) {
          var t = e.getGraphicEl()
          'adjacency' === e.getModel().get(['emphasis', 'focus']) &&
            (Be(t).focus = {
              edge: [e.dataIndex],
              node: [e.node1.dataIndex, e.node2.dataIndex],
            })
        })
      var g =
          'circular' === e.get('layout') && e.get(['circular', 'rotateLabel']),
        f = d.getLayout('cx'),
        y = d.getLayout('cy')
      d.eachItemGraphicEl(function (e, t) {
        var n = d.getItemModel(t).get(['label', 'rotate']) || 0,
          i = e.getSymbolPath()
        if (g) {
          var o = d.getItemLayout(t),
            r = Math.atan2(o[1] - y, o[0] - f)
          r < 0 && (r = 2 * Math.PI + r)
          var s = o[0] < f
          s && (r -= Math.PI)
          var l = s ? 'left' : 'right'
          i.setTextConfig({ rotation: -r, position: l, origin: 'center' })
          var u = i.ensureState('emphasis')
          a(u.textConfig || (u.textConfig = {}), { position: l })
        } else i.setTextConfig({ rotation: (n *= Math.PI / 180) })
      }),
        (this._firstRender = !1)
    }),
    (t.prototype.dispose = function () {
      this._controller && this._controller.dispose(),
        (this._controllerHost = null)
    }),
    (t.prototype._startForceLayoutIteration = function (e, t) {
      var n = this
      !(function i() {
        e.step(function (e) {
          n.updateLayout(n._model),
            (n._layouting = !e) &&
              (t ? (n._layoutTimeout = setTimeout(i, 16)) : i())
        })
      })()
    }),
    (t.prototype._updateController = function (e, t, n) {
      var i = this,
        a = this._controller,
        o = this._controllerHost,
        r = this.group
      a.setPointerChecker(function (t, i, a) {
        var o = r.getBoundingRect()
        return o.applyTransform(r.transform), o.contain(i, a) && !_a(t, n, e)
      }),
        Ad(e.coordinateSystem)
          ? (a.enable(e.get('roam')),
            (o.zoomLimit = e.get('scaleLimit')),
            (o.zoom = e.coordinateSystem.getZoom()),
            a
              .off('pan')
              .off('zoom')
              .on('pan', function (t) {
                ma(o, t.dx, t.dy),
                  n.dispatchAction({
                    seriesId: e.id,
                    type: 'graphRoam',
                    dx: t.dx,
                    dy: t.dy,
                  })
              })
              .on('zoom', function (t) {
                va(o, t.scale, t.originX, t.originY),
                  n.dispatchAction({
                    seriesId: e.id,
                    type: 'graphRoam',
                    zoom: t.scale,
                    originX: t.originX,
                    originY: t.originY,
                  }),
                  i._updateNodeAndLinkScale(),
                  Dd(e.getGraph(), ud(e)),
                  i._lineDraw.updateLayout(),
                  n.updateLabelLayout()
              }))
          : a.disable()
    }),
    (t.prototype._updateNodeAndLinkScale = function () {
      var e = this._model,
        t = e.getData(),
        n = ud(e)
      t.eachItemGraphicEl(function (e, t) {
        e.setSymbolScale(n)
      })
    }),
    (t.prototype.updateLayout = function (e) {
      Dd(e.getGraph(), ud(e)),
        this._symbolDraw.updateLayout(),
        this._lineDraw.updateLayout()
    }),
    (t.prototype.remove = function (e, t) {
      this._symbolDraw && this._symbolDraw.remove(),
        this._lineDraw && this._lineDraw.remove()
    }),
    (t.type = 'graph'),
    t
  )
})(zt)
function Cd(e) {
  return '_EC_' + e
}
var Td = (function () {
    function e(e) {
      ;(this.type = 'graph'),
        (this.nodes = []),
        (this.edges = []),
        (this._nodesMap = {}),
        (this._edgesMap = {}),
        (this._directed = e || !1)
    }
    return (
      (e.prototype.isDirected = function () {
        return this._directed
      }),
      (e.prototype.addNode = function (e, t) {
        e = null == e ? '' + t : '' + e
        var n = this._nodesMap
        if (!n[Cd(e)]) {
          var i = new Nd(e, t)
          return (i.hostGraph = this), this.nodes.push(i), (n[Cd(e)] = i), i
        }
      }),
      (e.prototype.getNodeByIndex = function (e) {
        var t = this.data.getRawIndex(e)
        return this.nodes[t]
      }),
      (e.prototype.getNodeById = function (e) {
        return this._nodesMap[Cd(e)]
      }),
      (e.prototype.addEdge = function (e, t, n) {
        var i = this._nodesMap,
          a = this._edgesMap
        if (
          ('number' == typeof e && (e = this.nodes[e]),
          'number' == typeof t && (t = this.nodes[t]),
          e instanceof Nd || (e = i[Cd(e)]),
          t instanceof Nd || (t = i[Cd(t)]),
          e && t)
        ) {
          var o = e.id + '-' + t.id,
            r = new Pd(e, t, n)
          return (
            (r.hostGraph = this),
            this._directed && (e.outEdges.push(r), t.inEdges.push(r)),
            e.edges.push(r),
            e !== t && t.edges.push(r),
            this.edges.push(r),
            (a[o] = r),
            r
          )
        }
      }),
      (e.prototype.getEdgeByIndex = function (e) {
        var t = this.edgeData.getRawIndex(e)
        return this.edges[t]
      }),
      (e.prototype.getEdge = function (e, t) {
        e instanceof Nd && (e = e.id), t instanceof Nd && (t = t.id)
        var n = this._edgesMap
        return this._directed
          ? n[e + '-' + t]
          : n[e + '-' + t] || n[t + '-' + e]
      }),
      (e.prototype.eachNode = function (e, t) {
        for (var n = this.nodes, i = n.length, a = 0; a < i; a++)
          n[a].dataIndex >= 0 && e.call(t, n[a], a)
      }),
      (e.prototype.eachEdge = function (e, t) {
        for (var n = this.edges, i = n.length, a = 0; a < i; a++)
          n[a].dataIndex >= 0 &&
            n[a].node1.dataIndex >= 0 &&
            n[a].node2.dataIndex >= 0 &&
            e.call(t, n[a], a)
      }),
      (e.prototype.breadthFirstTraverse = function (e, t, n, i) {
        if ((t instanceof Nd || (t = this._nodesMap[Cd(t)]), t)) {
          for (
            var a = 'out' === n ? 'outEdges' : 'in' === n ? 'inEdges' : 'edges',
              o = 0;
            o < this.nodes.length;
            o++
          )
            this.nodes[o].__visited = !1
          if (!e.call(i, t, null))
            for (var r = [t]; r.length; ) {
              var s = r.shift(),
                l = s[a]
              for (o = 0; o < l.length; o++) {
                var u = l[o],
                  d = u.node1 === s ? u.node2 : u.node1
                if (!d.__visited) {
                  if (e.call(i, d, s)) return
                  r.push(d), (d.__visited = !0)
                }
              }
            }
        }
      }),
      (e.prototype.update = function () {
        for (
          var e = this.data,
            t = this.edgeData,
            n = this.nodes,
            i = this.edges,
            a = 0,
            o = n.length;
          a < o;
          a++
        )
          n[a].dataIndex = -1
        for (a = 0, o = e.count(); a < o; a++) n[e.getRawIndex(a)].dataIndex = a
        t.filterSelf(function (e) {
          var n = i[t.getRawIndex(e)]
          return n.node1.dataIndex >= 0 && n.node2.dataIndex >= 0
        })
        for (a = 0, o = i.length; a < o; a++) i[a].dataIndex = -1
        for (a = 0, o = t.count(); a < o; a++) i[t.getRawIndex(a)].dataIndex = a
      }),
      (e.prototype.clone = function () {
        for (
          var t = new e(this._directed), n = this.nodes, i = this.edges, a = 0;
          a < n.length;
          a++
        )
          t.addNode(n[a].id, n[a].dataIndex)
        for (a = 0; a < i.length; a++) {
          var o = i[a]
          t.addEdge(o.node1.id, o.node2.id, o.dataIndex)
        }
        return t
      }),
      e
    )
  })(),
  Nd = (function () {
    function e(e, t) {
      ;(this.inEdges = []),
        (this.outEdges = []),
        (this.edges = []),
        (this.dataIndex = -1),
        (this.id = null == e ? '' : e),
        (this.dataIndex = null == t ? -1 : t)
    }
    return (
      (e.prototype.degree = function () {
        return this.edges.length
      }),
      (e.prototype.inDegree = function () {
        return this.inEdges.length
      }),
      (e.prototype.outDegree = function () {
        return this.outEdges.length
      }),
      (e.prototype.getModel = function (e) {
        if (!(this.dataIndex < 0))
          return this.hostGraph.data.getItemModel(this.dataIndex).getModel(e)
      }),
      (e.prototype.getAdjacentDataIndices = function () {
        for (
          var e = { edge: [], node: [] }, t = 0;
          t < this.edges.length;
          t++
        ) {
          var n = this.edges[t]
          n.dataIndex < 0 ||
            (e.edge.push(n.dataIndex),
            e.node.push(n.node1.dataIndex, n.node2.dataIndex))
        }
        return e
      }),
      e
    )
  })(),
  Pd = (function () {
    function e(e, t, n) {
      ;(this.dataIndex = -1),
        (this.node1 = e),
        (this.node2 = t),
        (this.dataIndex = null == n ? -1 : n)
    }
    return (
      (e.prototype.getModel = function (e) {
        if (!(this.dataIndex < 0))
          return this.hostGraph.edgeData
            .getItemModel(this.dataIndex)
            .getModel(e)
      }),
      (e.prototype.getAdjacentDataIndices = function () {
        return {
          edge: [this.dataIndex],
          node: [this.node1.dataIndex, this.node2.dataIndex],
        }
      }),
      e
    )
  })()
function Ed(e, t) {
  return {
    getValue: function (n) {
      var i = this[e][t]
      return i.getStore().get(i.getDimensionIndex(n || 'value'), this.dataIndex)
    },
    setVisual: function (n, i) {
      this.dataIndex >= 0 && this[e][t].setItemVisual(this.dataIndex, n, i)
    },
    getVisual: function (n) {
      return this[e][t].getItemVisual(this.dataIndex, n)
    },
    setLayout: function (n, i) {
      this.dataIndex >= 0 && this[e][t].setItemLayout(this.dataIndex, n, i)
    },
    getLayout: function () {
      return this[e][t].getItemLayout(this.dataIndex)
    },
    getGraphicEl: function () {
      return this[e][t].getItemGraphicEl(this.dataIndex)
    },
    getRawIndex: function () {
      return this[e][t].getRawIndex(this.dataIndex)
    },
  }
}
J(Nd, Ed('hostGraph', 'data')), J(Pd, Ed('hostGraph', 'edgeData'))
var Rd = Td
function Od(e, t, n, i, a) {
  for (var o = new Rd(i), r = 0; r < e.length; r++)
    o.addNode(be(e[r].id, e[r].name, r), r)
  var s = [],
    l = [],
    u = 0
  for (r = 0; r < t.length; r++) {
    var d = t[r],
      c = d.source,
      h = d.target
    o.addEdge(c, h, u) &&
      (l.push(d), s.push(be(p(d.id, null), c + ' > ' + h)), u++)
  }
  var g,
    f = n.get('coordinateSystem')
  if ('cartesian2d' === f || 'polar' === f) g = Li(e, n)
  else {
    var y = G.get(f),
      m = (y && y.dimensions) || []
    gn(m, 'value') < 0 && m.concat(['value'])
    var v = wi(e, {
      coordDimensions: m,
      encodeDefine: n.getEncode(),
    }).dimensions
    ;(g = new bi(v, n)).initData(e)
  }
  var x = new bi(['value'], n)
  return (
    x.initData(l, s),
    a && a(g, x),
    Ul({
      mainData: g,
      struct: o,
      structAttr: 'graph',
      datas: { node: g, edge: x },
      datasAttr: { node: 'data', edge: 'edgeData' },
    }),
    o.update(),
    o
  )
}
var Vd = (function (e) {
    function n() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.type = n.type), (t.hasSymbolVisual = !0), t
    }
    return (
      j(n, e),
      (n.prototype.init = function (t) {
        e.prototype.init.apply(this, arguments)
        var n = this
        function i() {
          return n._categoriesData
        }
        ;(this.legendVisualProvider = new rl(i, i)),
          this.fillDataTextStyle(t.edges || t.links),
          this._updateCategoriesData()
      }),
      (n.prototype.mergeOption = function (t) {
        e.prototype.mergeOption.apply(this, arguments),
          this.fillDataTextStyle(t.edges || t.links),
          this._updateCategoriesData()
      }),
      (n.prototype.mergeDefaultAndTheme = function (t) {
        e.prototype.mergeDefaultAndTheme.apply(this, arguments),
          Ie(t, 'edgeLabel', ['show'])
      }),
      (n.prototype.getInitialData = function (e, n) {
        var i,
          a = e.edges || e.links || [],
          o = e.data || e.nodes || [],
          r = this
        if (o && a) {
          ed((i = this)) &&
            ((i.__curvenessList = []), (i.__edgeMap = {}), td(i))
          var s = Od(o, a, this, !0, function (e, t) {
            e.wrapMethod('getItemModel', function (e) {
              var t = r._categoriesModels[e.getShallow('category')]
              return (
                t && ((t.parentModel = e.parentModel), (e.parentModel = t)), e
              )
            })
            var n = m.prototype.getModel
            function i(e, t) {
              var i = n.call(this, e, t)
              return (i.resolveParentPath = a), i
            }
            function a(e) {
              if (e && ('label' === e[0] || 'label' === e[1])) {
                var t = e.slice()
                return (
                  'label' === e[0]
                    ? (t[0] = 'edgeLabel')
                    : 'label' === e[1] && (t[1] = 'edgeLabel'),
                  t
                )
              }
              return e
            }
            t.wrapMethod('getItemModel', function (e) {
              return (e.resolveParentPath = a), (e.getModel = i), e
            })
          })
          return (
            t(
              s.edges,
              function (e) {
                !(function (e, t, n, i) {
                  if (ed(n)) {
                    var a = nd(e, t, n),
                      o = n.__edgeMap,
                      r = o[id(a)]
                    o[a] && !r
                      ? (o[a].isForward = !0)
                      : r &&
                        o[a] &&
                        ((r.isForward = !0), (o[a].isForward = !1)),
                      (o[a] = o[a] || []),
                      o[a].push(i)
                  }
                })(e.node1, e.node2, this, e.dataIndex)
              },
              this
            ),
            s.data
          )
        }
      }),
      (n.prototype.getGraph = function () {
        return this.getData().graph
      }),
      (n.prototype.getEdgeData = function () {
        return this.getGraph().edgeData
      }),
      (n.prototype.getCategoriesData = function () {
        return this._categoriesData
      }),
      (n.prototype.formatTooltip = function (e, t, n) {
        if ('edge' === n) {
          var i = this.getData(),
            a = this.getDataParams(e, n),
            o = i.graph.getEdgeByIndex(e),
            r = i.getName(o.node1.dataIndex),
            s = i.getName(o.node2.dataIndex),
            l = []
          return (
            null != r && l.push(r),
            null != s && l.push(s),
            dn('nameValue', {
              name: l.join(' > '),
              value: a.value,
              noValue: null == a.value,
            })
          )
        }
        return En({ series: this, dataIndex: e, multipleSeries: t })
      }),
      (n.prototype._updateCategoriesData = function () {
        var e = i(this.option.categories || [], function (e) {
            return null != e.value ? e : a({ value: 0 }, e)
          }),
          t = new bi(['value'], this)
        t.initData(e),
          (this._categoriesData = t),
          (this._categoriesModels = t.mapArray(function (e) {
            return t.getItemModel(e)
          }))
      }),
      (n.prototype.setZoom = function (e) {
        this.option.zoom = e
      }),
      (n.prototype.setCenter = function (e) {
        this.option.center = e
      }),
      (n.prototype.isAnimationEnabled = function () {
        return (
          e.prototype.isAnimationEnabled.call(this) &&
          !(
            'force' === this.get('layout') &&
            this.get(['force', 'layoutAnimation'])
          )
        )
      }),
      (n.type = 'series.graph'),
      (n.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
      (n.defaultOption = {
        zlevel: 0,
        z: 2,
        coordinateSystem: 'view',
        legendHoverLink: !0,
        layout: null,
        circular: { rotateLabel: !1 },
        force: {
          initLayout: null,
          repulsion: [0, 50],
          gravity: 0.1,
          friction: 0.6,
          edgeLength: 30,
          layoutAnimation: !0,
        },
        left: 'center',
        top: 'center',
        symbol: 'circle',
        symbolSize: 10,
        edgeSymbol: ['none', 'none'],
        edgeSymbolSize: 10,
        edgeLabel: { position: 'middle', distance: 5 },
        draggable: !1,
        roam: !1,
        center: null,
        zoom: 1,
        nodeScaleRatio: 0.6,
        label: { show: !1, formatter: '{b}' },
        itemStyle: {},
        lineStyle: { color: '#aaa', width: 1, opacity: 0.5 },
        emphasis: { scale: !0, label: { show: !0 } },
        select: { itemStyle: { borderColor: '#212121' } },
      }),
      n
    )
  })(Ct),
  zd = { type: 'graphRoam', event: 'graphRoam', update: 'none' }
function kd(e) {
  e.registerChartView(Ld),
    e.registerSeriesModel(Vd),
    e.registerProcessor(Ju),
    e.registerVisual(Ku),
    e.registerVisual($u),
    e.registerLayout(ld),
    e.registerLayout(e.PRIORITY.VISUAL.POST_CHART_LAYOUT, fd),
    e.registerLayout(md),
    e.registerCoordinateSystem('graphView', {
      dimensions: ea.dimensions,
      create: vd,
    }),
    e.registerAction(
      {
        type: 'focusNodeAdjacency',
        event: 'focusNodeAdjacency',
        update: 'series:focusNodeAdjacency',
      },
      function () {}
    ),
    e.registerAction(
      {
        type: 'unfocusNodeAdjacency',
        event: 'unfocusNodeAdjacency',
        update: 'series:unfocusNodeAdjacency',
      },
      function () {}
    ),
    e.registerAction(zd, function (e, t) {
      t.eachComponent({ mainType: 'series', query: e }, function (t) {
        var n = ua(t.coordinateSystem, e)
        t.setCenter && t.setCenter(n.center), t.setZoom && t.setZoom(n.zoom)
      })
    })
}
var Gd = function () {
    ;(this.angle = 0),
      (this.width = 10),
      (this.r = 10),
      (this.x = 0),
      (this.y = 0)
  },
  Bd = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'pointer'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new Gd()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = Math.cos,
          i = Math.sin,
          a = t.r,
          o = t.width,
          r = t.angle,
          s = t.x - n(r) * o * (o >= a / 3 ? 1 : 2),
          l = t.y - i(r) * o * (o >= a / 3 ? 1 : 2)
        ;(r = t.angle - Math.PI / 2),
          e.moveTo(s, l),
          e.lineTo(t.x + n(r) * o, t.y + i(r) * o),
          e.lineTo(t.x + n(t.angle) * a, t.y + i(t.angle) * a),
          e.lineTo(t.x - n(r) * o, t.y - i(r) * o),
          e.lineTo(s, l)
      }),
      t
    )
  })(At)
function Wd(e, t) {
  var n = null == e ? '' : e + ''
  return (
    t &&
      ('string' == typeof t
        ? (n = t.replace('{value}', n))
        : 'function' == typeof t && (n = t(e))),
    n
  )
}
var Fd = 2 * Math.PI,
  Yd = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        this.group.removeAll()
        var i = e.get(['axisLine', 'lineStyle', 'color']),
          a = (function (e, t) {
            var n = e.get('center'),
              i = t.getWidth(),
              a = t.getHeight(),
              o = Math.min(i, a)
            return {
              cx: se(n[0], t.getWidth()),
              cy: se(n[1], t.getHeight()),
              r: se(e.get('radius'), o / 2),
            }
          })(e, n)
        this._renderMain(e, t, n, i, a), (this._data = e.getData())
      }),
      (t.prototype.dispose = function () {}),
      (t.prototype._renderMain = function (e, t, n, i, a) {
        for (
          var o = this.group,
            r = e.get('clockwise'),
            s = (-e.get('startAngle') / 180) * Math.PI,
            l = (-e.get('endAngle') / 180) * Math.PI,
            u = e.getModel('axisLine'),
            d = u.get('roundCap') ? bs : Et,
            c = u.get('show'),
            h = u.getModel('lineStyle'),
            p = h.get('width'),
            g = (l - s) % Fd || l === s ? (l - s) % Fd : Fd,
            f = s,
            y = 0;
          c && y < i.length;
          y++
        ) {
          var m = new d({
            shape: {
              startAngle: f,
              endAngle: (l = s + g * Math.min(Math.max(i[y][0], 0), 1)),
              cx: a.cx,
              cy: a.cy,
              clockwise: r,
              r0: a.r - p,
              r: a.r,
            },
            silent: !0,
          })
          m.setStyle({ fill: i[y][1] }),
            m.setStyle(h.getLineStyle(['color', 'width'])),
            o.add(m),
            (f = l)
        }
        var v = function (e) {
          if (e <= 0) return i[0][1]
          var t
          for (t = 0; t < i.length; t++)
            if (i[t][0] >= e && (0 === t ? 0 : i[t - 1][0]) < e) return i[t][1]
          return i[t - 1][1]
        }
        if (!r) {
          var x = s
          ;(s = l), (l = x)
        }
        this._renderTicks(e, t, n, v, a, s, l, r, p),
          this._renderTitleAndDetail(e, t, n, v, a),
          this._renderAnchor(e, a),
          this._renderPointer(e, t, n, v, a, s, l, r, p)
      }),
      (t.prototype._renderTicks = function (e, t, n, i, a, o, r, s, l) {
        for (
          var u,
            d,
            c = this.group,
            h = a.cx,
            p = a.cy,
            g = a.r,
            f = +e.get('min'),
            y = +e.get('max'),
            m = e.getModel('splitLine'),
            v = e.getModel('axisTick'),
            x = e.getModel('axisLabel'),
            _ = e.get('splitNumber'),
            S = v.get('splitNumber'),
            b = se(m.get('length'), g),
            w = se(v.get('length'), g),
            I = o,
            M = (r - o) / _,
            D = M / S,
            A = m.getModel('lineStyle').getLineStyle(),
            L = v.getModel('lineStyle').getLineStyle(),
            C = m.get('distance'),
            T = 0;
          T <= _;
          T++
        ) {
          if (((u = Math.cos(I)), (d = Math.sin(I)), m.get('show'))) {
            var N = new It({
              shape: {
                x1: u * (g - (P = C ? C + l : l)) + h,
                y1: d * (g - P) + p,
                x2: u * (g - b - P) + h,
                y2: d * (g - b - P) + p,
              },
              style: A,
              silent: !0,
            })
            'auto' === A.stroke && N.setStyle({ stroke: i(T / _) }), c.add(N)
          }
          if (x.get('show')) {
            var P = x.get('distance') + C,
              E = Wd(ce((T / _) * (y - f) + f), x.get('formatter')),
              R = i(T / _)
            c.add(
              new Gt({
                style: Rn(
                  x,
                  {
                    text: E,
                    x: u * (g - b - P) + h,
                    y: d * (g - b - P) + p,
                    verticalAlign:
                      d < -0.8 ? 'top' : d > 0.8 ? 'bottom' : 'middle',
                    align: u < -0.4 ? 'left' : u > 0.4 ? 'right' : 'center',
                  },
                  { inheritColor: R }
                ),
                silent: !0,
              })
            )
          }
          if (v.get('show') && T !== _) {
            P = (P = v.get('distance')) ? P + l : l
            for (var O = 0; O <= S; O++) {
              ;(u = Math.cos(I)), (d = Math.sin(I))
              var V = new It({
                shape: {
                  x1: u * (g - P) + h,
                  y1: d * (g - P) + p,
                  x2: u * (g - w - P) + h,
                  y2: d * (g - w - P) + p,
                },
                silent: !0,
                style: L,
              })
              'auto' === L.stroke && V.setStyle({ stroke: i((T + O / S) / _) }),
                c.add(V),
                (I += D)
            }
            I -= D
          } else I += M
        }
      }),
      (t.prototype._renderPointer = function (e, t, n, i, o, r, s, l, u) {
        var d = this.group,
          c = this._data,
          h = this._progressEls,
          p = [],
          g = e.get(['pointer', 'show']),
          f = e.getModel('progress'),
          y = f.get('show'),
          m = e.getData(),
          x = m.mapDimension('value'),
          _ = +e.get('min'),
          S = +e.get('max'),
          b = [_, S],
          w = [r, s]
        function I(t, n) {
          var i,
            a = m.getItemModel(t).getModel('pointer'),
            r = se(a.get('width'), o.r),
            s = se(a.get('length'), o.r),
            l = e.get(['pointer', 'icon']),
            u = a.get('offsetCenter'),
            d = se(u[0], o.r),
            c = se(u[1], o.r),
            h = a.get('keepAspect')
          return (
            ((i = l
              ? ft(l, d - r / 2, c - s, r, s, null, h)
              : new Bd({
                  shape: { angle: -Math.PI / 2, width: r, r: s, x: d, y: c },
                })).rotation = -(n + Math.PI / 2)),
            (i.x = o.cx),
            (i.y = o.cy),
            i
          )
        }
        function M(e, t) {
          var n = f.get('roundCap') ? bs : Et,
            i = f.get('overlap'),
            a = i ? f.get('width') : u / m.count(),
            s = i ? o.r - a : o.r - (e + 1) * a,
            d = i ? o.r : o.r - e * a,
            c = new n({
              shape: {
                startAngle: r,
                endAngle: t,
                cx: o.cx,
                cy: o.cy,
                clockwise: l,
                r0: s,
                r: d,
              },
            })
          return i && (c.z2 = S - (m.get(x, e) % S)), c
        }
        ;(y || g) &&
          (m
            .diff(c)
            .add(function (t) {
              if (g) {
                var n = I(t, r)
                xt(
                  n,
                  { rotation: -(ut(m.get(x, t), b, w, !0) + Math.PI / 2) },
                  e
                ),
                  d.add(n),
                  m.setItemGraphicEl(t, n)
              }
              if (y) {
                var i = M(t, r),
                  a = f.get('clip')
                xt(i, { shape: { endAngle: ut(m.get(x, t), b, w, a) } }, e),
                  d.add(i),
                  v(e.seriesIndex, m.dataType, t, i),
                  (p[t] = i)
              }
            })
            .update(function (t, n) {
              if (g) {
                var i = c.getItemGraphicEl(n),
                  a = i ? i.rotation : r,
                  o = I(t, a)
                ;(o.rotation = a),
                  Ee(
                    o,
                    { rotation: -(ut(m.get(x, t), b, w, !0) + Math.PI / 2) },
                    e
                  ),
                  d.add(o),
                  m.setItemGraphicEl(t, o)
              }
              if (y) {
                var s = h[n],
                  l = M(t, s ? s.shape.endAngle : r),
                  u = f.get('clip')
                Ee(l, { shape: { endAngle: ut(m.get(x, t), b, w, u) } }, e),
                  d.add(l),
                  v(e.seriesIndex, m.dataType, t, l),
                  (p[t] = l)
              }
            })
            .execute(),
          m.each(function (e) {
            var t = m.getItemModel(e),
              n = t.getModel('emphasis')
            if (g) {
              var o = m.getItemGraphicEl(e),
                r = m.getItemVisual(e, 'style'),
                s = r.fill
              if (o instanceof St) {
                var l = o.style
                o.useStyle(
                  a(
                    {
                      image: l.image,
                      x: l.x,
                      y: l.y,
                      width: l.width,
                      height: l.height,
                    },
                    r
                  )
                )
              } else o.useStyle(r), 'pointer' !== o.type && o.setColor(s)
              o.setStyle(t.getModel(['pointer', 'itemStyle']).getItemStyle()),
                'auto' === o.style.fill &&
                  o.setStyle('fill', i(ut(m.get(x, e), b, [0, 1], !0))),
                (o.z2EmphasisLift = 0),
                Ot(o, t),
                Fe(o, n.get('focus'), n.get('blurScope'))
            }
            if (y) {
              var u = p[e]
              u.useStyle(m.getItemVisual(e, 'style')),
                u.setStyle(
                  t.getModel(['progress', 'itemStyle']).getItemStyle()
                ),
                (u.z2EmphasisLift = 0),
                Ot(u, t),
                Fe(u, n.get('focus'), n.get('blurScope'))
            }
          }),
          (this._progressEls = p))
      }),
      (t.prototype._renderAnchor = function (e, t) {
        var n = e.getModel('anchor')
        if (n.get('show')) {
          var i = n.get('size'),
            a = n.get('icon'),
            o = n.get('offsetCenter'),
            r = n.get('keepAspect'),
            s = ft(
              a,
              t.cx - i / 2 + se(o[0], t.r),
              t.cy - i / 2 + se(o[1], t.r),
              i,
              i,
              null,
              r
            )
          ;(s.z2 = n.get('showAbove') ? 1 : 0),
            s.setStyle(n.getModel('itemStyle').getItemStyle()),
            this.group.add(s)
        }
      }),
      (t.prototype._renderTitleAndDetail = function (e, t, n, i, a) {
        var o = this,
          r = e.getData(),
          s = r.mapDimension('value'),
          l = +e.get('min'),
          u = +e.get('max'),
          d = new Ne(),
          c = [],
          h = [],
          p = e.isAnimationEnabled(),
          g = e.get(['pointer', 'showAbove'])
        r
          .diff(this._data)
          .add(function (e) {
            ;(c[e] = new Gt({ silent: !0 })), (h[e] = new Gt({ silent: !0 }))
          })
          .update(function (e, t) {
            ;(c[e] = o._titleEls[t]), (h[e] = o._detailEls[t])
          })
          .execute(),
          r.each(function (t) {
            var n = r.getItemModel(t),
              o = r.get(s, t),
              f = new Ne(),
              y = i(ut(o, [l, u], [0, 1], !0)),
              m = n.getModel('title')
            if (m.get('show')) {
              var v = m.get('offsetCenter'),
                x = a.cx + se(v[0], a.r),
                _ = a.cy + se(v[1], a.r)
              ;(L = c[t]).attr({
                z2: g ? 0 : 2,
                style: Rn(
                  m,
                  {
                    x: x,
                    y: _,
                    text: r.getName(t),
                    align: 'center',
                    verticalAlign: 'middle',
                  },
                  { inheritColor: y }
                ),
              }),
                f.add(L)
            }
            var S = n.getModel('detail')
            if (S.get('show')) {
              var b = S.get('offsetCenter'),
                w = a.cx + se(b[0], a.r),
                I = a.cy + se(b[1], a.r),
                M = se(S.get('width'), a.r),
                D = se(S.get('height'), a.r),
                A = e.get(['progress', 'show'])
                  ? r.getItemVisual(t, 'style').fill
                  : y,
                L = h[t],
                C = S.get('formatter')
              L.attr({
                z2: g ? 0 : 2,
                style: Rn(
                  S,
                  {
                    x: w,
                    y: I,
                    text: Wd(o, C),
                    width: isNaN(M) ? null : M,
                    height: isNaN(D) ? null : D,
                    align: 'center',
                    verticalAlign: 'middle',
                  },
                  { inheritColor: A }
                ),
              }),
                Zt(L, { normal: S }, o, function (e) {
                  return Wd(e, C)
                }),
                p &&
                  On(L, t, r, e, {
                    getFormattedLabel: function (e, t, n, i, a, r) {
                      return Wd(r ? r.interpolatedValue : o, C)
                    },
                  }),
                f.add(L)
            }
            d.add(f)
          }),
          this.group.add(d),
          (this._titleEls = c),
          (this._detailEls = h)
      }),
      (t.type = 'gauge'),
      t
    )
  })(zt),
  Xd = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n.visualStyleAccessPath = 'itemStyle'), n
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function (e, t) {
        return ol(this, ['value'])
      }),
      (t.type = 'series.gauge'),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        colorBy: 'data',
        center: ['50%', '50%'],
        legendHoverLink: !0,
        radius: '75%',
        startAngle: 225,
        endAngle: -45,
        clockwise: !0,
        min: 0,
        max: 100,
        splitNumber: 10,
        axisLine: {
          show: !0,
          roundCap: !1,
          lineStyle: { color: [[1, '#E6EBF8']], width: 10 },
        },
        progress: { show: !1, overlap: !0, width: 10, roundCap: !1, clip: !0 },
        splitLine: {
          show: !0,
          length: 10,
          distance: 10,
          lineStyle: { color: '#63677A', width: 3, type: 'solid' },
        },
        axisTick: {
          show: !0,
          splitNumber: 5,
          length: 6,
          distance: 10,
          lineStyle: { color: '#63677A', width: 1, type: 'solid' },
        },
        axisLabel: { show: !0, distance: 15, color: '#464646', fontSize: 12 },
        pointer: {
          icon: null,
          offsetCenter: [0, 0],
          show: !0,
          showAbove: !0,
          length: '60%',
          width: 6,
          keepAspect: !1,
        },
        anchor: {
          show: !1,
          showAbove: !1,
          size: 6,
          icon: 'circle',
          offsetCenter: [0, 0],
          keepAspect: !1,
          itemStyle: { color: '#fff', borderWidth: 0, borderColor: '#5470c6' },
        },
        title: {
          show: !0,
          offsetCenter: [0, '20%'],
          color: '#464646',
          fontSize: 16,
          valueAnimation: !1,
        },
        detail: {
          show: !0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          borderColor: '#ccc',
          width: 100,
          height: null,
          padding: [5, 10],
          offsetCenter: [0, '40%'],
          color: '#464646',
          fontSize: 30,
          fontWeight: 'bold',
          lineHeight: 30,
          valueAnimation: !1,
        },
      }),
      t
    )
  })(Ct)
function Hd(e) {
  e.registerChartView(Yd), e.registerSeriesModel(Xd)
}
var Ud = ['itemStyle', 'opacity'],
  Zd = (function (e) {
    function t(t, n) {
      var i = e.call(this) || this,
        a = i,
        o = new X(),
        r = new Gt()
      return (
        a.setTextContent(r), i.setTextGuideLine(o), i.updateData(t, n, !0), i
      )
    }
    return (
      j(t, e),
      (t.prototype.updateData = function (e, t, n) {
        var i = this,
          a = e.hostModel,
          o = e.getItemModel(t),
          r = e.getItemLayout(t),
          s = o.getModel('emphasis'),
          l = o.get(Ud)
        ;(l = null == l ? 1 : l),
          n || vt(i),
          i.useStyle(e.getItemVisual(t, 'style')),
          (i.style.lineJoin = 'round'),
          n
            ? (i.setShape({ points: r.points }),
              (i.style.opacity = 0),
              xt(i, { style: { opacity: l } }, a, t))
            : Ee(
                i,
                { style: { opacity: l }, shape: { points: r.points } },
                a,
                t
              ),
          Ot(i, o),
          this._updateLabel(e, t),
          Fe(this, s.get('focus'), s.get('blurScope'))
      }),
      (t.prototype._updateLabel = function (e, t) {
        var n = this,
          i = this.getTextGuideLine(),
          a = n.getTextContent(),
          o = e.hostModel,
          r = e.getItemModel(t),
          s = e.getItemLayout(t).label,
          l = e.getItemVisual(t, 'style'),
          u = l.fill
        ke(
          a,
          Ge(r),
          {
            labelFetcher: e.hostModel,
            labelDataIndex: t,
            defaultOpacity: l.opacity,
            defaultText: e.getName(t),
          },
          { normal: { align: s.textAlign, verticalAlign: s.verticalAlign } }
        ),
          n.setTextConfig({
            local: !0,
            inside: !!s.inside,
            insideStroke: u,
            outsideFill: u,
          })
        var d = s.linePoints
        i.setShape({ points: d }),
          (n.textGuideLineConfig = {
            anchor: d ? new W(d[0][0], d[0][1]) : null,
          }),
          Ee(a, { style: { x: s.x, y: s.y } }, o, t),
          a.attr({ rotation: s.rotation, originX: s.x, originY: s.y, z2: 10 }),
          Wi(n, Fi(r), { stroke: u })
      }),
      t
    )
  })(ie),
  jd = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n.ignoreLabelLineUpdate = !0), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        var i = e.getData(),
          a = this._data,
          o = this.group
        i
          .diff(a)
          .add(function (e) {
            var t = new Zd(i, e)
            i.setItemGraphicEl(e, t), o.add(t)
          })
          .update(function (e, t) {
            var n = a.getItemGraphicEl(t)
            n.updateData(i, e), o.add(n), i.setItemGraphicEl(e, n)
          })
          .remove(function (t) {
            var n = a.getItemGraphicEl(t)
            Ut(n, e, t)
          })
          .execute(),
          (this._data = i)
      }),
      (t.prototype.remove = function () {
        this.group.removeAll(), (this._data = null)
      }),
      (t.prototype.dispose = function () {}),
      (t.type = 'funnel'),
      t
    )
  })(zt),
  qd = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.init = function (t) {
        e.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new rl(
            f(this.getData, this),
            f(this.getRawData, this)
          )),
          this._defaultLabelLine(t)
      }),
      (t.prototype.getInitialData = function (e, t) {
        return ol(this, {
          coordDimensions: ['value'],
          encodeDefaulter: O(en, this),
        })
      }),
      (t.prototype._defaultLabelLine = function (e) {
        Ie(e, 'labelLine', ['show'])
        var t = e.labelLine,
          n = e.emphasis.labelLine
        ;(t.show = t.show && e.label.show),
          (n.show = n.show && e.emphasis.label.show)
      }),
      (t.prototype.getDataParams = function (t) {
        var n = this.getData(),
          i = e.prototype.getDataParams.call(this, t),
          a = n.mapDimension('value'),
          o = n.getSum(a)
        return (
          (i.percent = o ? +((n.get(a, t) / o) * 100).toFixed(2) : 0),
          i.$vars.push('percent'),
          i
        )
      }),
      (t.type = 'series.funnel'),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        legendHoverLink: !0,
        colorBy: 'data',
        left: 80,
        top: 60,
        right: 80,
        bottom: 60,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        orient: 'vertical',
        gap: 0,
        funnelAlign: 'center',
        label: { show: !0, position: 'outer' },
        labelLine: { show: !0, length: 20, lineStyle: { width: 1 } },
        itemStyle: { borderColor: '#fff', borderWidth: 1 },
        emphasis: { label: { show: !0 } },
        select: { itemStyle: { borderColor: '#212121' } },
      }),
      t
    )
  })(Ct)
function Jd(e, t) {
  e.eachSeriesByType('funnel', function (e) {
    var n = e.getData(),
      i = n.mapDimension('value'),
      a = e.get('sort'),
      o = (function (e, t) {
        return we(e.getBoxLayoutParams(), {
          width: t.getWidth(),
          height: t.getHeight(),
        })
      })(e, t),
      r = e.get('orient'),
      s = o.width,
      l = o.height,
      u = (function (e, t) {
        for (
          var n = e.mapDimension('value'),
            i = e.mapArray(n, function (e) {
              return e
            }),
            a = [],
            o = 'ascending' === t,
            r = 0,
            s = e.count();
          r < s;
          r++
        )
          a[r] = r
        return (
          'function' == typeof t
            ? a.sort(t)
            : 'none' !== t &&
              a.sort(function (e, t) {
                return o ? i[e] - i[t] : i[t] - i[e]
              }),
          a
        )
      })(n, a),
      d = o.x,
      c = o.y,
      h =
        'horizontal' === r
          ? [se(e.get('minSize'), l), se(e.get('maxSize'), l)]
          : [se(e.get('minSize'), s), se(e.get('maxSize'), s)],
      p = n.getDataExtent(i),
      g = e.get('min'),
      f = e.get('max')
    null == g && (g = Math.min(p[0], 0)), null == f && (f = p[1])
    var y = e.get('funnelAlign'),
      m = e.get('gap'),
      v = (('horizontal' === r ? s : l) - m * (n.count() - 1)) / n.count(),
      x = function (e, t) {
        if ('horizontal' === r) {
          var a = n.get(i, e) || 0,
            o = ut(a, [g, f], h, !0),
            u = void 0
          switch (y) {
            case 'top':
              u = c
              break
            case 'center':
              u = c + (l - o) / 2
              break
            case 'bottom':
              u = c + (l - o)
          }
          return [
            [t, u],
            [t, u + o],
          ]
        }
        var p,
          m = n.get(i, e) || 0,
          v = ut(m, [g, f], h, !0)
        switch (y) {
          case 'left':
            p = d
            break
          case 'center':
            p = d + (s - v) / 2
            break
          case 'right':
            p = d + s - v
        }
        return [
          [p, t],
          [p + v, t],
        ]
      }
    'ascending' === a &&
      ((v = -v),
      (m = -m),
      'horizontal' === r ? (d += s) : (c += l),
      (u = u.reverse()))
    for (var _ = 0; _ < u.length; _++) {
      var S = u[_],
        b = u[_ + 1],
        w = n.getItemModel(S)
      if ('horizontal' === r) {
        var I = w.get(['itemStyle', 'width'])
        null == I ? (I = v) : ((I = se(I, s)), 'ascending' === a && (I = -I))
        var M = x(S, d),
          D = x(b, d + I)
        ;(d += I + m),
          n.setItemLayout(S, { points: M.concat(D.slice().reverse()) })
      } else {
        var A = w.get(['itemStyle', 'height'])
        null == A ? (A = v) : ((A = se(A, l)), 'ascending' === a && (A = -A))
        ;(M = x(S, c)), (D = x(b, c + A))
        ;(c += A + m),
          n.setItemLayout(S, { points: M.concat(D.slice().reverse()) })
      }
    }
    !(function (e) {
      var t = e.hostModel.get('orient')
      e.each(function (n) {
        var i,
          a,
          o,
          r,
          s = e.getItemModel(n),
          l = s.getModel('label').get('position'),
          u = s.getModel('labelLine'),
          d = e.getItemLayout(n),
          c = d.points,
          h =
            'inner' === l ||
            'inside' === l ||
            'center' === l ||
            'insideLeft' === l ||
            'insideRight' === l
        if (h)
          'insideLeft' === l
            ? ((a = (c[0][0] + c[3][0]) / 2 + 5),
              (o = (c[0][1] + c[3][1]) / 2),
              (i = 'left'))
            : 'insideRight' === l
            ? ((a = (c[1][0] + c[2][0]) / 2 - 5),
              (o = (c[1][1] + c[2][1]) / 2),
              (i = 'right'))
            : ((a = (c[0][0] + c[1][0] + c[2][0] + c[3][0]) / 4),
              (o = (c[0][1] + c[1][1] + c[2][1] + c[3][1]) / 4),
              (i = 'center')),
            (r = [
              [a, o],
              [a, o],
            ])
        else {
          var p = void 0,
            g = void 0,
            f = void 0,
            y = void 0,
            m = u.get('length')
          'left' === l
            ? ((p = (c[3][0] + c[0][0]) / 2),
              (g = (c[3][1] + c[0][1]) / 2),
              (a = (f = p - m) - 5),
              (i = 'right'))
            : 'right' === l
            ? ((p = (c[1][0] + c[2][0]) / 2),
              (g = (c[1][1] + c[2][1]) / 2),
              (a = (f = p + m) + 5),
              (i = 'left'))
            : 'top' === l
            ? ((p = (c[3][0] + c[0][0]) / 2),
              (o = (y = (g = (c[3][1] + c[0][1]) / 2) - m) - 5),
              (i = 'center'))
            : 'bottom' === l
            ? ((p = (c[1][0] + c[2][0]) / 2),
              (o = (y = (g = (c[1][1] + c[2][1]) / 2) + m) + 5),
              (i = 'center'))
            : 'rightTop' === l
            ? ((p = 'horizontal' === t ? c[3][0] : c[1][0]),
              (g = 'horizontal' === t ? c[3][1] : c[1][1]),
              'horizontal' === t
                ? ((o = (y = g - m) - 5), (i = 'center'))
                : ((a = (f = p + m) + 5), (i = 'top')))
            : 'rightBottom' === l
            ? ((p = c[2][0]),
              (g = c[2][1]),
              'horizontal' === t
                ? ((o = (y = g + m) + 5), (i = 'center'))
                : ((a = (f = p + m) + 5), (i = 'bottom')))
            : 'leftTop' === l
            ? ((p = c[0][0]),
              (g = 'horizontal' === t ? c[0][1] : c[1][1]),
              'horizontal' === t
                ? ((o = (y = g - m) - 5), (i = 'center'))
                : ((a = (f = p - m) - 5), (i = 'right')))
            : 'leftBottom' === l
            ? ((p = 'horizontal' === t ? c[1][0] : c[3][0]),
              (g = 'horizontal' === t ? c[1][1] : c[2][1]),
              'horizontal' === t
                ? ((o = (y = g + m) + 5), (i = 'center'))
                : ((a = (f = p - m) - 5), (i = 'right')))
            : ((p = (c[1][0] + c[2][0]) / 2),
              (g = (c[1][1] + c[2][1]) / 2),
              'horizontal' === t
                ? ((o = (y = g + m) + 5), (i = 'center'))
                : ((a = (f = p + m) + 5), (i = 'left'))),
            'horizontal' === t ? (a = f = p) : (o = y = g),
            (r = [
              [p, g],
              [f, y],
            ])
        }
        d.label = {
          linePoints: r,
          x: a,
          y: o,
          verticalAlign: 'middle',
          textAlign: i,
          inside: h,
        }
      })
    })(n)
  })
}
function Kd(e) {
  e.registerChartView(jd),
    e.registerSeriesModel(qd),
    e.registerLayout(Jd),
    e.registerProcessor(Ks('funnel'))
}
function Qd(e, t, n, i) {
  for (var a, o = [], r = 0; r < n.length; r++) {
    var s = n[r],
      l = e.get(e.mapDimension(s), t)
    ;(a = l),
      ('category' === i.getAxis(s).type ? null == a : null == a || isNaN(a)) ||
        o.push(i.dataToPoint(l, s))
  }
  return o
}
function $d(e, t, n, i, a) {
  var o = Qd(e, n, i, a),
    r = new X({ shape: { points: o }, z2: 10 })
  return t.add(r), e.setItemGraphicEl(n, r), r
}
function ec(e) {
  var t = e.get('smooth', !0)
  return !0 === t && (t = 0.3), (t = Vn(t)), zn(t) && (t = 0), { smooth: t }
}
function tc(e, t, n, i) {
  e.useStyle(t.getItemVisual(n, 'style')),
    (e.style.fill = null),
    e.setShape('smooth', i.smooth)
  var a = t.getItemModel(n),
    o = a.getModel('emphasis')
  Ot(e, a, 'lineStyle'), Fe(e, o.get('focus'), o.get('blurScope'))
}
var nc = (function (e) {
  function t() {
    var n = (null !== e && e.apply(this, arguments)) || this
    return (
      (n.type = t.type), (n._dataGroup = new Ne()), (n._initialized = !1), n
    )
  }
  return (
    j(t, e),
    (t.prototype.init = function () {
      this.group.add(this._dataGroup)
    }),
    (t.prototype.render = function (e, t, n, i) {
      var a = this._dataGroup,
        o = e.getData(),
        r = this._data,
        s = e.coordinateSystem,
        l = s.dimensions,
        u = ec(e)
      if (
        (o
          .diff(r)
          .add(function (e) {
            tc($d(o, a, e, l, s), o, e, u)
          })
          .update(function (t, n) {
            var i = r.getItemGraphicEl(n),
              a = Qd(o, t, l, s)
            o.setItemGraphicEl(t, i),
              Ee(i, { shape: { points: a } }, e, t),
              vt(i),
              tc(i, o, t, u)
          })
          .remove(function (e) {
            var t = r.getItemGraphicEl(e)
            a.remove(t)
          })
          .execute(),
        !this._initialized)
      ) {
        this._initialized = !0
        var d = (function (e, t, n) {
          var i = e.model,
            a = e.getRect(),
            o = new $e({
              shape: { x: a.x, y: a.y, width: a.width, height: a.height },
            }),
            r = 'horizontal' === i.get('layout') ? 'width' : 'height'
          return (
            o.setShape(r, 0),
            xt(o, { shape: { width: a.width, height: a.height } }, t, n),
            o
          )
        })(s, e, function () {
          setTimeout(function () {
            a.removeClipPath()
          })
        })
        a.setClipPath(d)
      }
      this._data = o
    }),
    (t.prototype.incrementalPrepareRender = function (e, t, n) {
      ;(this._initialized = !0),
        (this._data = null),
        this._dataGroup.removeAll()
    }),
    (t.prototype.incrementalRender = function (e, t, n) {
      for (
        var i = t.getData(),
          a = t.coordinateSystem,
          o = a.dimensions,
          r = ec(t),
          s = e.start;
        s < e.end;
        s++
      ) {
        var l = $d(i, this._dataGroup, s, o, a)
        ;(l.incremental = !0), tc(l, i, s, r)
      }
    }),
    (t.prototype.remove = function () {
      this._dataGroup && this._dataGroup.removeAll(), (this._data = null)
    }),
    (t.type = 'parallel'),
    t
  )
})(zt)
function ic(e) {
  var n = e.ecModel.getComponent('parallel', e.get('parallelIndex'))
  if (n) {
    var i = {}
    return (
      t(n.dimensions, function (e) {
        var t = +e.replace('dim', '')
        i[e] = t
      }),
      i
    )
  }
}
var ac = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (
        (n.type = t.type),
        (n.visualStyleAccessPath = 'lineStyle'),
        (n.visualDrawType = 'stroke'),
        n
      )
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function (e, t) {
        return Li(null, this, { useEncodeDefaulter: f(ic, null, this) })
      }),
      (t.prototype.getRawIndicesByActiveState = function (e) {
        var t = this.coordinateSystem,
          n = this.getData(),
          i = []
        return (
          t.eachActiveState(n, function (t, a) {
            e === t && i.push(n.getRawIndex(a))
          }),
          i
        )
      }),
      (t.type = 'series.parallel'),
      (t.dependencies = ['parallel']),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        coordinateSystem: 'parallel',
        parallelIndex: 0,
        label: { show: !1 },
        inactiveOpacity: 0.05,
        activeOpacity: 1,
        lineStyle: { width: 1, opacity: 0.45, type: 'solid' },
        emphasis: { label: { show: !1 } },
        progressive: 500,
        smooth: !1,
        animationEasing: 'linear',
      }),
      t
    )
  })(Ct),
  oc = ['lineStyle', 'opacity'],
  rc = {
    seriesType: 'parallel',
    reset: function (e, t) {
      var n = e.coordinateSystem,
        i = {
          normal: e.get(['lineStyle', 'opacity']),
          active: e.get('activeOpacity'),
          inactive: e.get('inactiveOpacity'),
        }
      return {
        progress: function (e, t) {
          n.eachActiveState(
            t,
            function (e, n) {
              var a = i[e]
              if ('normal' === e && t.hasItemOption) {
                var o = t.getItemModel(n).get(oc, !0)
                null != o && (a = o)
              }
              t.ensureUniqueItemVisual(n, 'style').opacity = a
            },
            e.start,
            e.end
          )
        },
      }
    },
  }
function sc(e) {
  on(Qo),
    e.registerChartView(nc),
    e.registerSeriesModel(ac),
    e.registerVisual(e.PRIORITY.VISUAL.BRUSH, rc)
}
var lc = function () {
    ;(this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.cpx1 = 0),
      (this.cpy1 = 0),
      (this.cpx2 = 0),
      (this.cpy2 = 0),
      (this.extent = 0)
  },
  uc = (function (e) {
    function t(t) {
      return e.call(this, t) || this
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new lc()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.extent
        e.moveTo(t.x1, t.y1),
          e.bezierCurveTo(t.cpx1, t.cpy1, t.cpx2, t.cpy2, t.x2, t.y2),
          'vertical' === t.orient
            ? (e.lineTo(t.x2 + n, t.y2),
              e.bezierCurveTo(
                t.cpx2 + n,
                t.cpy2,
                t.cpx1 + n,
                t.cpy1,
                t.x1 + n,
                t.y1
              ))
            : (e.lineTo(t.x2, t.y2 + n),
              e.bezierCurveTo(
                t.cpx2,
                t.cpy2 + n,
                t.cpx1,
                t.cpy1 + n,
                t.x1,
                t.y1 + n
              )),
          e.closePath()
      }),
      (t.prototype.highlight = function () {
        yt(this)
      }),
      (t.prototype.downplay = function () {
        mt(this)
      }),
      t
    )
  })(At)
var dc = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n._focusAdjacencyDisabled = !1), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        var i = this,
          a = e.getGraph(),
          o = this.group,
          r = e.layoutInfo,
          s = r.width,
          l = r.height,
          u = e.getData(),
          d = e.getData('edge'),
          c = e.get('orient')
        ;(this._model = e),
          o.removeAll(),
          (o.x = r.x),
          (o.y = r.y),
          a.eachEdge(function (t) {
            var n = new uc(),
              i = Be(n)
            ;(i.dataIndex = t.dataIndex),
              (i.seriesIndex = e.seriesIndex),
              (i.dataType = 'edge')
            var a,
              r,
              u,
              h,
              p,
              g,
              f,
              y,
              m = t.getModel(),
              v = m.getModel('lineStyle'),
              x = v.get('curveness'),
              _ = t.node1.getLayout(),
              S = t.node1.getModel(),
              b = S.get('localX'),
              w = S.get('localY'),
              I = t.node2.getLayout(),
              M = t.node2.getModel(),
              D = M.get('localX'),
              A = M.get('localY'),
              L = t.getLayout()
            switch (
              ((n.shape.extent = Math.max(1, L.dy)),
              (n.shape.orient = c),
              'vertical' === c
                ? ((a = (null != b ? b * s : _.x) + L.sy),
                  (r = (null != w ? w * l : _.y) + _.dy),
                  (u = (null != D ? D * s : I.x) + L.ty),
                  (p = a),
                  (g = r * (1 - x) + (h = null != A ? A * l : I.y) * x),
                  (f = u),
                  (y = r * x + h * (1 - x)))
                : ((a = (null != b ? b * s : _.x) + _.dx),
                  (r = (null != w ? w * l : _.y) + L.sy),
                  (p = a * (1 - x) + (u = null != D ? D * s : I.x) * x),
                  (g = r),
                  (f = a * x + u * (1 - x)),
                  (y = h = (null != A ? A * l : I.y) + L.ty)),
              n.setShape({
                x1: a,
                y1: r,
                x2: u,
                y2: h,
                cpx1: p,
                cpy1: g,
                cpx2: f,
                cpy2: y,
              }),
              n.useStyle(v.getItemStyle()),
              n.style.fill)
            ) {
              case 'source':
                ;(n.style.fill = t.node1.getVisual('color')),
                  (n.style.decal = t.node1.getVisual('style').decal)
                break
              case 'target':
                ;(n.style.fill = t.node2.getVisual('color')),
                  (n.style.decal = t.node2.getVisual('style').decal)
                break
              case 'gradient':
                var C = t.node1.getVisual('color'),
                  T = t.node2.getVisual('color')
                'string' == typeof C &&
                  'string' == typeof T &&
                  (n.style.fill = new Ft(
                    0,
                    0,
                    +('horizontal' === c),
                    +('vertical' === c),
                    [
                      { color: C, offset: 0 },
                      { color: T, offset: 1 },
                    ]
                  ))
            }
            var N = m.getModel('emphasis')
            Ot(n, m, 'lineStyle', function (e) {
              return e.getItemStyle()
            }),
              o.add(n),
              d.setItemGraphicEl(t.dataIndex, n)
            var P = N.get('focus')
            Fe(
              n,
              'adjacency' === P ? t.getAdjacentDataIndices() : P,
              N.get('blurScope')
            ),
              (Be(n).dataType = 'edge')
          }),
          a.eachNode(function (t) {
            var n = t.getLayout(),
              i = t.getModel(),
              a = i.get('localX'),
              r = i.get('localY'),
              d = i.getModel('emphasis'),
              c = new $e({
                shape: {
                  x: null != a ? a * s : n.x,
                  y: null != r ? r * l : n.y,
                  width: n.dx,
                  height: n.dy,
                },
                style: i.getModel('itemStyle').getItemStyle(),
                z2: 10,
              })
            ke(c, Ge(i), {
              labelFetcher: e,
              labelDataIndex: t.dataIndex,
              defaultText: t.id,
            }),
              (c.disableLabelAnimation = !0),
              c.setStyle('fill', t.getVisual('color')),
              c.setStyle('decal', t.getVisual('style').decal),
              Ot(c, i),
              o.add(c),
              u.setItemGraphicEl(t.dataIndex, c),
              (Be(c).dataType = 'node')
            var h = d.get('focus')
            Fe(
              c,
              'adjacency' === h ? t.getAdjacentDataIndices() : h,
              d.get('blurScope')
            )
          }),
          u.eachItemGraphicEl(function (t, a) {
            u.getItemModel(a).get('draggable') &&
              ((t.drift = function (t, o) {
                ;(i._focusAdjacencyDisabled = !0),
                  (this.shape.x += t),
                  (this.shape.y += o),
                  this.dirty(),
                  n.dispatchAction({
                    type: 'dragNode',
                    seriesId: e.id,
                    dataIndex: u.getRawIndex(a),
                    localX: this.shape.x / s,
                    localY: this.shape.y / l,
                  })
              }),
              (t.ondragend = function () {
                i._focusAdjacencyDisabled = !1
              }),
              (t.draggable = !0),
              (t.cursor = 'move'))
          }),
          !this._data &&
            e.isAnimationEnabled() &&
            o.setClipPath(
              (function (e, t, n) {
                var i = new $e({
                  shape: {
                    x: e.x - 10,
                    y: e.y - 10,
                    width: 0,
                    height: e.height + 20,
                  },
                })
                return xt(i, { shape: { width: e.width + 20 } }, t, n), i
              })(o.getBoundingRect(), e, function () {
                o.removeClipPath()
              })
            ),
          (this._data = e.getData())
      }),
      (t.prototype.dispose = function () {}),
      (t.type = 'sankey'),
      t
    )
  })(zt),
  cc = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function (e, t) {
        var n = e.edges || e.links,
          i = e.data || e.nodes,
          a = e.levels
        this.levelModels = []
        for (var o = this.levelModels, r = 0; r < a.length; r++)
          null != a[r].depth &&
            a[r].depth >= 0 &&
            (o[a[r].depth] = new m(a[r], this, t))
        if (i && n)
          return Od(i, n, this, !0, function (e, t) {
            e.wrapMethod('getItemModel', function (e, t) {
              var n = e.parentModel,
                i = n.getData().getItemLayout(t)
              if (i) {
                var a = i.depth,
                  o = n.levelModels[a]
                o && (e.parentModel = o)
              }
              return e
            }),
              t.wrapMethod('getItemModel', function (e, t) {
                var n = e.parentModel,
                  i = n.getGraph().getEdgeByIndex(t).node1.getLayout()
                if (i) {
                  var a = i.depth,
                    o = n.levelModels[a]
                  o && (e.parentModel = o)
                }
                return e
              })
          }).data
      }),
      (t.prototype.setNodePosition = function (e, t) {
        var n = (this.option.data || this.option.nodes)[e]
        ;(n.localX = t[0]), (n.localY = t[1])
      }),
      (t.prototype.getGraph = function () {
        return this.getData().graph
      }),
      (t.prototype.getEdgeData = function () {
        return this.getGraph().edgeData
      }),
      (t.prototype.formatTooltip = function (e, t, n) {
        function i(e) {
          return isNaN(e) || null == e
        }
        if ('edge' === n) {
          var a = this.getDataParams(e, n),
            o = a.data,
            r = a.value,
            s = o.source + ' -- ' + o.target
          return dn('nameValue', { name: s, value: r, noValue: i(r) })
        }
        var l = this.getGraph().getNodeByIndex(e).getLayout().value,
          u = this.getDataParams(e, n).data.name
        return dn('nameValue', {
          name: null != u ? u + '' : null,
          value: l,
          noValue: i(l),
        })
      }),
      (t.prototype.optionUpdated = function () {}),
      (t.prototype.getDataParams = function (t, n) {
        var i = e.prototype.getDataParams.call(this, t, n)
        if (null == i.value && 'node' === n) {
          var a = this.getGraph().getNodeByIndex(t).getLayout().value
          i.value = a
        }
        return i
      }),
      (t.type = 'series.sankey'),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        coordinateSystem: 'view',
        left: '5%',
        top: '5%',
        right: '20%',
        bottom: '5%',
        orient: 'horizontal',
        nodeWidth: 20,
        nodeGap: 8,
        draggable: !0,
        layoutIterations: 32,
        label: { show: !0, position: 'right', fontSize: 12 },
        levels: [],
        nodeAlign: 'justify',
        lineStyle: { color: '#314656', opacity: 0.2, curveness: 0.5 },
        emphasis: { label: { show: !0 }, lineStyle: { opacity: 0.5 } },
        select: { itemStyle: { borderColor: '#212121' } },
        animationEasing: 'linear',
        animationDuration: 1e3,
      }),
      t
    )
  })(Ct)
function hc(e, n) {
  e.eachSeriesByType('sankey', function (e) {
    var i = e.get('nodeWidth'),
      a = e.get('nodeGap'),
      o = (function (e, t) {
        return we(e.getBoxLayoutParams(), {
          width: t.getWidth(),
          height: t.getHeight(),
        })
      })(e, n)
    e.layoutInfo = o
    var r = o.width,
      s = o.height,
      l = e.getGraph(),
      u = l.nodes,
      d = l.edges
    !(function (e) {
      t(e, function (e) {
        var t = bc(e.outEdges, Sc),
          n = bc(e.inEdges, Sc),
          i = e.getValue() || 0,
          a = Math.max(t, n, i)
        e.setLayout({ value: a }, !0)
      })
    })(u),
      (function (e, n, i, a, o, r, s, l, u) {
        ;(function (e, n, i, a, o, r, s) {
          for (
            var l = [], u = [], d = [], c = [], h = 0, p = 0;
            p < n.length;
            p++
          )
            l[p] = 1
          for (p = 0; p < e.length; p++)
            (u[p] = e[p].inEdges.length), 0 === u[p] && d.push(e[p])
          var g = -1
          for (; d.length; ) {
            for (var f = 0; f < d.length; f++) {
              var y = d[f],
                m = y.hostGraph.data.getRawDataItem(y.dataIndex),
                v = null != m.depth && m.depth >= 0
              v && m.depth > g && (g = m.depth),
                y.setLayout({ depth: v ? m.depth : h }, !0),
                'vertical' === r
                  ? y.setLayout({ dy: i }, !0)
                  : y.setLayout({ dx: i }, !0)
              for (var x = 0; x < y.outEdges.length; x++) {
                var _ = y.outEdges[x]
                l[n.indexOf(_)] = 0
                var S = _.node2
                0 == --u[e.indexOf(S)] && c.indexOf(S) < 0 && c.push(S)
              }
            }
            ++h, (d = c), (c = [])
          }
          for (p = 0; p < l.length; p++)
            if (1 === l[p])
              throw new Error('Sankey is a DAG, the original data has cycle!')
          var b = g > h - 1 ? g : h - 1
          s &&
            'left' !== s &&
            (function (e, n, i, a) {
              if ('right' === n) {
                for (var o = [], r = e, s = 0; r.length; ) {
                  for (var l = 0; l < r.length; l++) {
                    var u = r[l]
                    u.setLayout({ skNodeHeight: s }, !0)
                    for (var d = 0; d < u.inEdges.length; d++) {
                      var c = u.inEdges[d]
                      o.indexOf(c.node1) < 0 && o.push(c.node1)
                    }
                  }
                  ;(r = o), (o = []), ++s
                }
                t(e, function (e) {
                  pc(e) ||
                    e.setLayout(
                      { depth: Math.max(0, a - e.getLayout().skNodeHeight) },
                      !0
                    )
                })
              } else
                'justify' === n &&
                  (function (e, n) {
                    t(e, function (e) {
                      pc(e) ||
                        e.outEdges.length ||
                        e.setLayout({ depth: n }, !0)
                    })
                  })(e, a)
            })(e, s, 0, b)
          !(function (e, n, i) {
            t(e, function (e) {
              var t = e.getLayout().depth * n
              'vertical' === i
                ? e.setLayout({ y: t }, !0)
                : e.setLayout({ x: t }, !0)
            })
          })(e, 'vertical' === r ? (o - i) / b : (a - i) / b, r)
        })(e, n, i, o, r, l, u),
          (function (e, n, i, a, o, r, s) {
            var l = (function (e, n) {
              var i = [],
                a = 'vertical' === n ? 'y' : 'x',
                o = kn(e, function (e) {
                  return e.getLayout()[a]
                })
              return (
                o.keys.sort(function (e, t) {
                  return e - t
                }),
                t(o.keys, function (e) {
                  i.push(o.buckets.get(e))
                }),
                i
              )
            })(e, s)
            ;(function (e, n, i, a, o, r) {
              var s = 1 / 0
              t(e, function (e) {
                var n = e.length,
                  l = 0
                t(e, function (e) {
                  l += e.getLayout().value
                })
                var u =
                  'vertical' === r
                    ? (a - (n - 1) * o) / l
                    : (i - (n - 1) * o) / l
                u < s && (s = u)
              }),
                t(e, function (e) {
                  t(e, function (e, t) {
                    var n = e.getLayout().value * s
                    'vertical' === r
                      ? (e.setLayout({ x: t }, !0), e.setLayout({ dx: n }, !0))
                      : (e.setLayout({ y: t }, !0), e.setLayout({ dy: n }, !0))
                  })
                }),
                t(n, function (e) {
                  var t = +e.getValue() * s
                  e.setLayout({ dy: t }, !0)
                })
            })(l, n, i, a, o, s),
              gc(l, o, i, a, s)
            for (var u = 1; r > 0; r--)
              fc(l, (u *= 0.99), s),
                gc(l, o, i, a, s),
                wc(l, u, s),
                gc(l, o, i, a, s)
          })(e, n, r, o, a, s, l),
          (function (e, n) {
            var i = 'vertical' === n ? 'x' : 'y'
            t(e, function (e) {
              e.outEdges.sort(function (e, t) {
                return e.node2.getLayout()[i] - t.node2.getLayout()[i]
              }),
                e.inEdges.sort(function (e, t) {
                  return e.node1.getLayout()[i] - t.node1.getLayout()[i]
                })
            }),
              t(e, function (e) {
                var n = 0,
                  i = 0
                t(e.outEdges, function (e) {
                  e.setLayout({ sy: n }, !0), (n += e.getLayout().dy)
                }),
                  t(e.inEdges, function (e) {
                    e.setLayout({ ty: i }, !0), (i += e.getLayout().dy)
                  })
              })
          })(e, l)
      })(
        u,
        d,
        i,
        a,
        r,
        s,
        0 !==
          Ue(u, function (e) {
            return 0 === e.getLayout().value
          }).length
          ? 0
          : e.get('layoutIterations'),
        e.get('orient'),
        e.get('nodeAlign')
      )
  })
}
function pc(e) {
  var t = e.hostGraph.data.getRawDataItem(e.dataIndex)
  return null != t.depth && t.depth >= 0
}
function gc(e, n, i, a, o) {
  var r = 'vertical' === o ? 'x' : 'y'
  t(e, function (e) {
    var t, s, l
    e.sort(function (e, t) {
      return e.getLayout()[r] - t.getLayout()[r]
    })
    for (
      var u = 0, d = e.length, c = 'vertical' === o ? 'dx' : 'dy', h = 0;
      h < d;
      h++
    )
      (l = u - (s = e[h]).getLayout()[r]) > 0 &&
        ((t = s.getLayout()[r] + l),
        'vertical' === o
          ? s.setLayout({ x: t }, !0)
          : s.setLayout({ y: t }, !0)),
        (u = s.getLayout()[r] + s.getLayout()[c] + n)
    if ((l = u - n - ('vertical' === o ? a : i)) > 0) {
      ;(t = s.getLayout()[r] - l),
        'vertical' === o
          ? s.setLayout({ x: t }, !0)
          : s.setLayout({ y: t }, !0),
        (u = t)
      for (h = d - 2; h >= 0; --h)
        (l = (s = e[h]).getLayout()[r] + s.getLayout()[c] + n - u) > 0 &&
          ((t = s.getLayout()[r] - l),
          'vertical' === o
            ? s.setLayout({ x: t }, !0)
            : s.setLayout({ y: t }, !0)),
          (u = s.getLayout()[r])
    }
  })
}
function fc(e, n, i) {
  t(e.slice().reverse(), function (e) {
    t(e, function (e) {
      if (e.outEdges.length) {
        var t = bc(e.outEdges, yc, i) / bc(e.outEdges, Sc)
        if (isNaN(t)) {
          var a = e.outEdges.length
          t = a ? bc(e.outEdges, mc, i) / a : 0
        }
        if ('vertical' === i) {
          var o = e.getLayout().x + (t - _c(e, i)) * n
          e.setLayout({ x: o }, !0)
        } else {
          var r = e.getLayout().y + (t - _c(e, i)) * n
          e.setLayout({ y: r }, !0)
        }
      }
    })
  })
}
function yc(e, t) {
  return _c(e.node2, t) * e.getValue()
}
function mc(e, t) {
  return _c(e.node2, t)
}
function vc(e, t) {
  return _c(e.node1, t) * e.getValue()
}
function xc(e, t) {
  return _c(e.node1, t)
}
function _c(e, t) {
  return 'vertical' === t
    ? e.getLayout().x + e.getLayout().dx / 2
    : e.getLayout().y + e.getLayout().dy / 2
}
function Sc(e) {
  return e.getValue()
}
function bc(e, t, n) {
  for (var i = 0, a = e.length, o = -1; ++o < a; ) {
    var r = +t(e[o], n)
    isNaN(r) || (i += r)
  }
  return i
}
function wc(e, n, i) {
  t(e, function (e) {
    t(e, function (e) {
      if (e.inEdges.length) {
        var t = bc(e.inEdges, vc, i) / bc(e.inEdges, Sc)
        if (isNaN(t)) {
          var a = e.inEdges.length
          t = a ? bc(e.inEdges, xc, i) / a : 0
        }
        if ('vertical' === i) {
          var o = e.getLayout().x + (t - _c(e, i)) * n
          e.setLayout({ x: o }, !0)
        } else {
          var r = e.getLayout().y + (t - _c(e, i)) * n
          e.setLayout({ y: r }, !0)
        }
      }
    })
  })
}
function Ic(e) {
  e.eachSeriesByType('sankey', function (e) {
    var n = e.getGraph().nodes
    if (n.length) {
      var i = 1 / 0,
        a = -1 / 0
      t(n, function (e) {
        var t = e.getLayout().value
        t < i && (i = t), t > a && (a = t)
      }),
        t(n, function (t) {
          var n = new yr({
              type: 'color',
              mappingMethod: 'linear',
              dataExtent: [i, a],
              visual: e.get('color'),
            }).mapValueToVisual(t.getLayout().value),
            o = t.getModel().get(['itemStyle', 'color'])
          null != o
            ? (t.setVisual('color', o), t.setVisual('style', { fill: o }))
            : (t.setVisual('color', n), t.setVisual('style', { fill: n }))
        })
    }
  })
}
function Mc(e) {
  e.registerChartView(dc),
    e.registerSeriesModel(cc),
    e.registerLayout(hc),
    e.registerVisual(Ic),
    e.registerAction(
      { type: 'dragNode', event: 'dragnode', update: 'update' },
      function (e, t) {
        t.eachComponent(
          { mainType: 'series', subType: 'sankey', query: e },
          function (t) {
            t.setNodePosition(e.dataIndex, [e.localX, e.localY])
          }
        )
      }
    )
}
var Dc = (function () {
    function e() {}
    return (
      (e.prototype.getInitialData = function (e, n) {
        var i,
          o,
          r = n.getComponent('xAxis', this.get('xAxisIndex')),
          s = n.getComponent('yAxis', this.get('yAxisIndex')),
          l = r.get('type'),
          u = s.get('type')
        'category' === l
          ? ((e.layout = 'horizontal'), (i = r.getOrdinalMeta()), (o = !0))
          : 'category' === u
          ? ((e.layout = 'vertical'), (i = s.getOrdinalMeta()), (o = !0))
          : (e.layout = e.layout || 'horizontal')
        var d = ['x', 'y'],
          c = 'horizontal' === e.layout ? 0 : 1,
          h = (this._baseAxisDim = d[c]),
          p = d[1 - c],
          f = [r, s],
          y = f[c].get('type'),
          m = f[1 - c].get('type'),
          v = e.data
        if (v && o) {
          var x = []
          t(v, function (e, t) {
            var n
            g(e)
              ? ((n = e.slice()), e.unshift(t))
              : g(e.value)
              ? (((n = a({}, e)).value = n.value.slice()), e.value.unshift(t))
              : (n = e),
              x.push(n)
          }),
            (e.data = x)
        }
        var _ = this.defaultValueDimensions,
          S = [
            {
              name: h,
              type: li(y),
              ordinalMeta: i,
              otherDims: { tooltip: !1, itemName: 0 },
              dimsDef: ['base'],
            },
            { name: p, type: li(m), dimsDef: _.slice() },
          ]
        return ol(this, {
          coordDimensions: S,
          dimensionsCount: _.length + 1,
          encodeDefaulter: O(V, S, this),
        })
      }),
      (e.prototype.getBaseAxis = function () {
        var e = this._baseAxisDim
        return this.ecModel.getComponent(e + 'Axis', this.get(e + 'AxisIndex'))
          .axis
      }),
      e
    )
  })(),
  Ac = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (
        (n.type = t.type),
        (n.defaultValueDimensions = [
          { name: 'min', defaultTooltip: !0 },
          { name: 'Q1', defaultTooltip: !0 },
          { name: 'median', defaultTooltip: !0 },
          { name: 'Q3', defaultTooltip: !0 },
          { name: 'max', defaultTooltip: !0 },
        ]),
        (n.visualDrawType = 'stroke'),
        n
      )
    }
    return (
      j(t, e),
      (t.type = 'series.boxplot'),
      (t.dependencies = ['xAxis', 'yAxis', 'grid']),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: !0,
        layout: null,
        boxWidth: [7, 50],
        itemStyle: { color: '#fff', borderWidth: 1 },
        emphasis: {
          scale: !0,
          itemStyle: {
            borderWidth: 2,
            shadowBlur: 5,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowColor: 'rgba(0,0,0,0.2)',
          },
        },
        animationDuration: 800,
      }),
      t
    )
  })(Ct)
J(Ac, Dc, !0)
var Lc = Ac,
  Cc = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        var i = e.getData(),
          a = this.group,
          o = this._data
        this._data || a.removeAll()
        var r = 'horizontal' === e.get('layout') ? 1 : 0
        i
          .diff(o)
          .add(function (e) {
            if (i.hasValue(e)) {
              var t = Pc(i.getItemLayout(e), i, e, r, !0)
              i.setItemGraphicEl(e, t), a.add(t)
            }
          })
          .update(function (e, t) {
            var n = o.getItemGraphicEl(t)
            if (i.hasValue(e)) {
              var s = i.getItemLayout(e)
              n ? (vt(n), Ec(s, n, i, e)) : (n = Pc(s, i, e, r)),
                a.add(n),
                i.setItemGraphicEl(e, n)
            } else a.remove(n)
          })
          .remove(function (e) {
            var t = o.getItemGraphicEl(e)
            t && a.remove(t)
          })
          .execute(),
          (this._data = i)
      }),
      (t.prototype.remove = function (e) {
        var t = this.group,
          n = this._data
        ;(this._data = null),
          n &&
            n.eachItemGraphicEl(function (e) {
              e && t.remove(e)
            })
      }),
      (t.type = 'boxplot'),
      t
    )
  })(zt),
  Tc = function () {},
  Nc = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'boxplotBoxPath'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new Tc()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.points,
          i = 0
        for (e.moveTo(n[i][0], n[i][1]), i++; i < 4; i++)
          e.lineTo(n[i][0], n[i][1])
        for (e.closePath(); i < n.length; i++)
          e.moveTo(n[i][0], n[i][1]), i++, e.lineTo(n[i][0], n[i][1])
      }),
      t
    )
  })(At)
function Pc(e, t, n, i, a) {
  var o = e.ends,
    r = new Nc({ shape: { points: a ? Rc(o, i, e) : o } })
  return Ec(e, r, t, n, a), r
}
function Ec(e, t, n, i, a) {
  var o = n.hostModel
  ;(0, ln[a ? 'initProps' : 'updateProps'])(
    t,
    { shape: { points: e.ends } },
    o,
    i
  ),
    t.useStyle(n.getItemVisual(i, 'style')),
    (t.style.strokeNoScale = !0),
    (t.z2 = 100)
  var r = n.getItemModel(i)
  Ot(t, r),
    Fe(t, r.get(['emphasis', 'focus']), r.get(['emphasis', 'blurScope']))
}
function Rc(e, t, n) {
  return i(e, function (e) {
    return ((e = e.slice())[t] = n.initBaseline), e
  })
}
var Oc = Cc
function Vc(e, t) {}
var zc = t
function kc(e) {
  var t = (function (e) {
    var t = [],
      n = []
    return (
      e.eachSeriesByType('boxplot', function (e) {
        var i = e.getBaseAxis(),
          a = gn(n, i)
        a < 0 &&
          ((a = n.length), (n[a] = i), (t[a] = { axis: i, seriesModels: [] })),
          t[a].seriesModels.push(e)
      }),
      t
    )
  })(e)
  zc(t, function (e) {
    var t = e.seriesModels
    t.length &&
      (!(function (e) {
        var t,
          n,
          i = e.axis,
          a = e.seriesModels,
          o = a.length,
          r = (e.boxWidthList = []),
          s = (e.boxOffsetList = []),
          l = []
        if ('category' === i.type) n = i.getBandWidth()
        else {
          var u = 0
          zc(a, function (e) {
            u = Math.max(u, e.getData().count())
          }),
            (t = i.getExtent()),
            Math.abs(t[1] - t[0])
        }
        zc(a, function (e) {
          var t = e.get('boxWidth')
          g(t) || (t = [t, t]), l.push([se(t[0], n) || 0, se(t[1], n) || 0])
        })
        var d = 0.8 * n - 2,
          c = (d / o) * 0.3,
          h = (d - c * (o - 1)) / o,
          p = h / 2 - d / 2
        zc(a, function (e, t) {
          s.push(p),
            (p += c + h),
            r.push(Math.min(Math.max(h, l[t][0]), l[t][1]))
        })
      })(e),
      zc(t, function (t, n) {
        !(function (e, t, n) {
          var i = e.coordinateSystem,
            a = e.getData(),
            o = n / 2,
            r = 'horizontal' === e.get('layout') ? 0 : 1,
            s = 1 - r,
            l = ['x', 'y'],
            u = a.mapDimension(l[r]),
            d = a.mapDimensionsAll(l[s])
          if (null == u || d.length < 5) return
          for (var c = 0; c < a.count(); c++) {
            var h = a.get(u, c),
              p = x(h, d[2], c),
              g = x(h, d[0], c),
              f = x(h, d[1], c),
              y = x(h, d[3], c),
              m = x(h, d[4], c),
              v = []
            _(v, f, !1),
              _(v, y, !0),
              v.push(g, f, m, y),
              S(v, g),
              S(v, m),
              S(v, p),
              a.setItemLayout(c, { initBaseline: p[s], ends: v })
          }
          function x(e, n, o) {
            var l,
              u = a.get(n, o),
              d = []
            return (
              (d[r] = e),
              (d[s] = u),
              isNaN(e) || isNaN(u)
                ? (l = [NaN, NaN])
                : ((l = i.dataToPoint(d))[r] += t),
              l
            )
          }
          function _(e, t, n) {
            var i = t.slice(),
              a = t.slice()
            ;(i[r] += o), (a[r] -= o), n ? e.push(i, a) : e.push(a, i)
          }
          function S(e, t) {
            var n = t.slice(),
              i = t.slice()
            ;(n[r] -= o), (i[r] += o), e.push(n, i)
          }
        })(t, e.boxOffsetList[n], e.boxWidthList[n])
      }))
  })
}
var Gc = {
  type: 'echarts:boxplot',
  transform: function (e) {
    var t = e.upstream
    if (t.sourceFormat !== Bn) {
      Wn('')
    }
    var n = (function (e, t) {
      for (
        var n = [],
          i = [],
          a = (t = t || {}).boundIQR,
          o = 'none' === a || 0 === a,
          s = 0;
        s < e.length;
        s++
      ) {
        var l = Qe(e[s].slice()),
          u = Gn(l, 0.25),
          d = Gn(l, 0.5),
          c = Gn(l, 0.75),
          h = l[0],
          p = l[l.length - 1],
          g = (null == a ? 1.5 : a) * (c - u),
          f = o ? h : Math.max(h, u - g),
          y = o ? p : Math.min(p, c + g),
          m = t.itemNameFormatter,
          v = R(m)
            ? m({ value: s })
            : r(m)
            ? m.replace('{value}', s + '')
            : s + ''
        n.push([v, f, u, d, c, y])
        for (var x = 0; x < l.length; x++) {
          var _ = l[x]
          if (_ < f || _ > y) {
            var S = [v, _]
            i.push(S)
          }
        }
      }
      return { boxData: n, outliers: i }
    })(t.getRawData(), e.config)
    return [
      {
        dimensions: ['ItemName', 'Low', 'Q1', 'Q2', 'Q3', 'High'],
        data: n.boxData,
      },
      { data: n.outliers },
    ]
  },
}
function Bc(e) {
  e.registerSeriesModel(Lc),
    e.registerChartView(Oc),
    e.registerVisual(Vc),
    e.registerLayout(kc),
    e.registerTransform(Gc)
}
var Wc = ['color', 'borderColor'],
  Fc = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        this.group.removeClipPath(),
          this._updateDrawMode(e),
          this._isLargeDraw ? this._renderLarge(e) : this._renderNormal(e)
      }),
      (t.prototype.incrementalPrepareRender = function (e, t, n) {
        this._clear(), this._updateDrawMode(e)
      }),
      (t.prototype.incrementalRender = function (e, t, n, i) {
        this._isLargeDraw
          ? this._incrementalRenderLarge(e, t)
          : this._incrementalRenderNormal(e, t)
      }),
      (t.prototype._updateDrawMode = function (e) {
        var t = e.pipelineContext.large
        ;(null != this._isLargeDraw && t === this._isLargeDraw) ||
          ((this._isLargeDraw = t), this._clear())
      }),
      (t.prototype._renderNormal = function (e) {
        var t = e.getData(),
          n = this._data,
          i = this.group,
          a = t.getLayout('isSimpleBox'),
          o = e.get('clip', !0),
          r = e.coordinateSystem,
          s = r.getArea && r.getArea()
        this._data || i.removeAll(),
          t
            .diff(n)
            .add(function (n) {
              if (t.hasValue(n)) {
                var r = t.getItemLayout(n)
                if (o && Uc(s, r)) return
                var l = Hc(r, n, !0)
                xt(l, { shape: { points: r.ends } }, e, n),
                  Zc(l, t, n, a),
                  i.add(l),
                  t.setItemGraphicEl(n, l)
              }
            })
            .update(function (r, l) {
              var u = n.getItemGraphicEl(l)
              if (t.hasValue(r)) {
                var d = t.getItemLayout(r)
                o && Uc(s, d)
                  ? i.remove(u)
                  : (u
                      ? (Ee(u, { shape: { points: d.ends } }, e, r), vt(u))
                      : (u = Hc(d)),
                    Zc(u, t, r, a),
                    i.add(u),
                    t.setItemGraphicEl(r, u))
              } else i.remove(u)
            })
            .remove(function (e) {
              var t = n.getItemGraphicEl(e)
              t && i.remove(t)
            })
            .execute(),
          (this._data = t)
      }),
      (t.prototype._renderLarge = function (e) {
        this._clear(), Kc(e, this.group)
        var t = e.get('clip', !0) ? ns(e.coordinateSystem, !1, e) : null
        t ? this.group.setClipPath(t) : this.group.removeClipPath()
      }),
      (t.prototype._incrementalRenderNormal = function (e, t) {
        for (
          var n, i = t.getData(), a = i.getLayout('isSimpleBox');
          null != (n = e.next());

        ) {
          var o = Hc(i.getItemLayout(n))
          Zc(o, i, n, a), (o.incremental = !0), this.group.add(o)
        }
      }),
      (t.prototype._incrementalRenderLarge = function (e, t) {
        Kc(t, this.group, !0)
      }),
      (t.prototype.remove = function (e) {
        this._clear()
      }),
      (t.prototype._clear = function () {
        this.group.removeAll(), (this._data = null)
      }),
      (t.type = 'candlestick'),
      t
    )
  })(zt),
  Yc = function () {},
  Xc = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'normalCandlestickBox'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new Yc()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.points
        this.__simpleBox
          ? (e.moveTo(n[4][0], n[4][1]), e.lineTo(n[6][0], n[6][1]))
          : (e.moveTo(n[0][0], n[0][1]),
            e.lineTo(n[1][0], n[1][1]),
            e.lineTo(n[2][0], n[2][1]),
            e.lineTo(n[3][0], n[3][1]),
            e.closePath(),
            e.moveTo(n[4][0], n[4][1]),
            e.lineTo(n[5][0], n[5][1]),
            e.moveTo(n[6][0], n[6][1]),
            e.lineTo(n[7][0], n[7][1]))
      }),
      t
    )
  })(At)
function Hc(e, t, n) {
  var i = e.ends
  return new Xc({ shape: { points: n ? jc(i, e) : i }, z2: 100 })
}
function Uc(e, t) {
  for (var n = !0, i = 0; i < t.ends.length; i++)
    if (e.contain(t.ends[i][0], t.ends[i][1])) {
      n = !1
      break
    }
  return n
}
function Zc(e, t, n, i) {
  var a = t.getItemModel(n)
  e.useStyle(t.getItemVisual(n, 'style')),
    (e.style.strokeNoScale = !0),
    (e.__simpleBox = i),
    Ot(e, a)
}
function jc(e, t) {
  return i(e, function (e) {
    return ((e = e.slice())[1] = t.initBaseline), e
  })
}
var qc = function () {},
  Jc = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (n.type = 'largeCandlestickBox'), n
    }
    return (
      j(t, e),
      (t.prototype.getDefaultShape = function () {
        return new qc()
      }),
      (t.prototype.buildPath = function (e, t) {
        for (var n = t.points, i = 0; i < n.length; )
          if (this.__sign === n[i++]) {
            var a = n[i++]
            e.moveTo(a, n[i++]), e.lineTo(a, n[i++])
          } else i += 3
      }),
      t
    )
  })(At)
function Kc(e, t, n) {
  var i = e.getData().getLayout('largePoints'),
    a = new Jc({ shape: { points: i }, __sign: 1 })
  t.add(a)
  var o = new Jc({ shape: { points: i }, __sign: -1 })
  t.add(o),
    Qc(1, a, e),
    Qc(-1, o, e),
    n && ((a.incremental = !0), (o.incremental = !0))
}
function Qc(e, t, n, i) {
  var a =
      n.get(['itemStyle', e > 0 ? 'borderColor' : 'borderColor0']) ||
      n.get(['itemStyle', e > 0 ? 'color' : 'color0']),
    o = n.getModel('itemStyle').getItemStyle(Wc)
  t.useStyle(o), (t.style.fill = null), (t.style.stroke = a)
}
var $c = Fc,
  eh = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (
        (n.type = t.type),
        (n.defaultValueDimensions = [
          { name: 'open', defaultTooltip: !0 },
          { name: 'close', defaultTooltip: !0 },
          { name: 'lowest', defaultTooltip: !0 },
          { name: 'highest', defaultTooltip: !0 },
        ]),
        n
      )
    }
    return (
      j(t, e),
      (t.prototype.getShadowDim = function () {
        return 'open'
      }),
      (t.prototype.brushSelector = function (e, t, n) {
        var i = t.getItemLayout(e)
        return i && n.rect(i.brushRect)
      }),
      (t.type = 'series.candlestick'),
      (t.dependencies = ['xAxis', 'yAxis', 'grid']),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: !0,
        layout: null,
        clip: !0,
        itemStyle: {
          color: '#eb5454',
          color0: '#47b262',
          borderColor: '#eb5454',
          borderColor0: '#47b262',
          borderWidth: 1,
        },
        emphasis: { scale: !0, itemStyle: { borderWidth: 2 } },
        barMaxWidth: null,
        barMinWidth: null,
        barWidth: null,
        large: !0,
        largeThreshold: 600,
        progressive: 3e3,
        progressiveThreshold: 1e4,
        progressiveChunkMode: 'mod',
        animationEasing: 'linear',
        animationDuration: 300,
      }),
      t
    )
  })(Ct)
J(eh, Dc, !0)
var th = eh
function nh(e) {
  e &&
    g(e.series) &&
    t(e.series, function (e) {
      S(e) && 'k' === e.type && (e.type = 'candlestick')
    })
}
var ih = ['itemStyle', 'borderColor'],
  ah = ['itemStyle', 'borderColor0'],
  oh = ['itemStyle', 'color'],
  rh = ['itemStyle', 'color0'],
  sh = {
    seriesType: 'candlestick',
    plan: Yt(),
    performRawSeries: !0,
    reset: function (e, t) {
      function n(e, t) {
        return t.get(e > 0 ? oh : rh)
      }
      function i(e, t) {
        return t.get(e > 0 ? ih : ah)
      }
      if (!t.isSeriesFiltered(e))
        return (
          !e.pipelineContext.large && {
            progress: function (e, t) {
              for (var o; null != (o = e.next()); ) {
                var r = t.getItemModel(o),
                  s = t.getItemLayout(o).sign,
                  l = r.getItemStyle()
                ;(l.fill = n(s, r)), (l.stroke = i(s, r) || l.fill)
                var u = t.ensureUniqueItemVisual(o, 'style')
                a(u, l)
              }
            },
          }
        )
    },
  },
  lh = 'undefined' != typeof Float32Array ? Float32Array : Array
function uh(e, t, n, i, a) {
  return n > i ? -1 : n < i ? 1 : t > 0 ? (e.get(a, t - 1) <= i ? 1 : -1) : 1
}
var dh = {
  seriesType: 'candlestick',
  plan: Yt(),
  reset: function (e) {
    var t = e.coordinateSystem,
      n = e.getData(),
      a = (function (e, t) {
        var n,
          i = e.getBaseAxis(),
          a =
            'category' === i.type
              ? i.getBandWidth()
              : ((n = i.getExtent()), Math.abs(n[1] - n[0]) / t.count()),
          o = se(Y(e.get('barMaxWidth'), a), a),
          r = se(Y(e.get('barMinWidth'), 1), a),
          s = e.get('barWidth')
        return null != s ? se(s, a) : Math.max(Math.min(a / 2, o), r)
      })(e, n),
      o = ['x', 'y'],
      r = n.getDimensionIndex(n.mapDimension(o[0])),
      s = i(n.mapDimensionsAll(o[1]), n.getDimensionIndex, n),
      l = s[0],
      u = s[1],
      d = s[2],
      c = s[3]
    if (
      (n.setLayout({ candleWidth: a, isSimpleBox: a <= 1.3 }),
      !(r < 0 || s.length < 4))
    )
      return {
        progress: e.pipelineContext.large
          ? function (e, n) {
              var i,
                a,
                o = new lh(4 * e.count),
                s = 0,
                h = [],
                p = [],
                g = n.getStore()
              for (; null != (a = e.next()); ) {
                var f = g.get(r, a),
                  y = g.get(l, a),
                  m = g.get(u, a),
                  v = g.get(d, a),
                  x = g.get(c, a)
                isNaN(f) || isNaN(v) || isNaN(x)
                  ? ((o[s++] = NaN), (s += 3))
                  : ((o[s++] = uh(g, a, y, m, u)),
                    (h[0] = f),
                    (h[1] = v),
                    (i = t.dataToPoint(h, null, p)),
                    (o[s++] = i ? i[0] : NaN),
                    (o[s++] = i ? i[1] : NaN),
                    (h[1] = x),
                    (i = t.dataToPoint(h, null, p)),
                    (o[s++] = i ? i[1] : NaN))
              }
              n.setLayout('largePoints', o)
            }
          : function (e, n) {
              var i,
                o = n.getStore()
              for (; null != (i = e.next()); ) {
                var s = o.get(r, i),
                  h = o.get(l, i),
                  p = o.get(u, i),
                  g = o.get(d, i),
                  f = o.get(c, i),
                  y = Math.min(h, p),
                  m = Math.max(h, p),
                  v = w(y, s),
                  x = w(m, s),
                  _ = w(g, s),
                  S = w(f, s),
                  b = []
                I(b, x, 0),
                  I(b, v, 1),
                  b.push(D(S), D(x), D(_), D(v)),
                  n.setItemLayout(i, {
                    sign: uh(o, i, h, p, u),
                    initBaseline: h > p ? x[1] : v[1],
                    ends: b,
                    brushRect: M(g, f, s),
                  })
              }
              function w(e, n) {
                var i = []
                return (
                  (i[0] = n),
                  (i[1] = e),
                  isNaN(n) || isNaN(e) ? [NaN, NaN] : t.dataToPoint(i)
                )
              }
              function I(e, t, n) {
                var i = t.slice(),
                  o = t.slice()
                ;(i[0] = Fn(i[0] + a / 2, 1, !1)),
                  (o[0] = Fn(o[0] - a / 2, 1, !0)),
                  n ? e.push(i, o) : e.push(o, i)
              }
              function M(e, t, n) {
                var i = w(e, n),
                  o = w(t, n)
                return (
                  (i[0] -= a / 2),
                  (o[0] -= a / 2),
                  { x: i[0], y: i[1], width: a, height: o[1] - i[1] }
                )
              }
              function D(e) {
                return (e[0] = Fn(e[0], 1)), e
              }
            },
      }
  },
}
function ch(e) {
  e.registerChartView($c),
    e.registerSeriesModel(th),
    e.registerPreprocessor(nh),
    e.registerVisual(sh),
    e.registerLayout(dh)
}
function hh(e, t) {
  var n = t.rippleEffectColor || t.color
  e.eachChild(function (e) {
    e.attr({
      z: t.z,
      zlevel: t.zlevel,
      style: {
        stroke: 'stroke' === t.brushType ? n : null,
        fill: 'fill' === t.brushType ? n : null,
      },
    })
  })
}
var ph = (function (e) {
    function t(t, n) {
      var i = e.call(this) || this,
        a = new _r(t, n),
        o = new Ne()
      return i.add(a), i.add(o), i.updateData(t, n), i
    }
    return (
      j(t, e),
      (t.prototype.stopEffectAnimation = function () {
        this.childAt(1).removeAll()
      }),
      (t.prototype.startEffectAnimation = function (e) {
        for (
          var t = e.symbolType,
            n = e.color,
            i = e.rippleNumber,
            a = this.childAt(1),
            o = 0;
          o < i;
          o++
        ) {
          var r = ft(t, -1, -1, 2, 2, n)
          r.attr({
            style: { strokeNoScale: !0 },
            z2: 99,
            silent: !0,
            scaleX: 0.5,
            scaleY: 0.5,
          })
          var s = (-o / i) * e.period + e.effectOffset
          r
            .animate('', !0)
            .when(e.period, {
              scaleX: e.rippleScale / 2,
              scaleY: e.rippleScale / 2,
            })
            .delay(s)
            .start(),
            r.animateStyle(!0).when(e.period, { opacity: 0 }).delay(s).start(),
            a.add(r)
        }
        hh(a, e)
      }),
      (t.prototype.updateEffectAnimation = function (e) {
        for (
          var t = this._effectCfg,
            n = this.childAt(1),
            i = ['symbolType', 'period', 'rippleScale', 'rippleNumber'],
            a = 0;
          a < i.length;
          a++
        ) {
          var o = i[a]
          if (t[o] !== e[o])
            return this.stopEffectAnimation(), void this.startEffectAnimation(e)
        }
        hh(n, e)
      }),
      (t.prototype.highlight = function () {
        yt(this)
      }),
      (t.prototype.downplay = function () {
        mt(this)
      }),
      (t.prototype.getSymbolType = function () {
        var e = this.childAt(0)
        return e && e.getSymbolType()
      }),
      (t.prototype.updateData = function (e, t) {
        var n = this,
          i = e.hostModel
        this.childAt(0).updateData(e, t)
        var a = this.childAt(1),
          o = e.getItemModel(t),
          r = e.getItemVisual(t, 'symbol'),
          s = wt(e.getItemVisual(t, 'symbolSize')),
          l = e.getItemVisual(t, 'style'),
          u = l && l.fill
        a.setScale(s),
          a.traverse(function (e) {
            e.setStyle('fill', u)
          })
        var d = _t(e.getItemVisual(t, 'symbolOffset'), s)
        d && ((a.x = d[0]), (a.y = d[1]))
        var c = e.getItemVisual(t, 'symbolRotate')
        a.rotation = ((c || 0) * Math.PI) / 180 || 0
        var h = {}
        ;(h.showEffectOn = i.get('showEffectOn')),
          (h.rippleScale = o.get(['rippleEffect', 'scale'])),
          (h.brushType = o.get(['rippleEffect', 'brushType'])),
          (h.period = 1e3 * o.get(['rippleEffect', 'period'])),
          (h.effectOffset = t / e.count()),
          (h.z = i.getShallow('z') || 0),
          (h.zlevel = i.getShallow('zlevel') || 0),
          (h.symbolType = r),
          (h.color = u),
          (h.rippleEffectColor = o.get(['rippleEffect', 'color'])),
          (h.rippleNumber = o.get(['rippleEffect', 'number'])),
          this.off('mouseover').off('mouseout').off('emphasis').off('normal'),
          'render' === h.showEffectOn
            ? (this._effectCfg
                ? this.updateEffectAnimation(h)
                : this.startEffectAnimation(h),
              (this._effectCfg = h))
            : ((this._effectCfg = null),
              this.stopEffectAnimation(),
              (this.onHoverStateChange = function (e) {
                'emphasis' === e
                  ? 'render' !== h.showEffectOn && n.startEffectAnimation(h)
                  : 'normal' === e &&
                    'render' !== h.showEffectOn &&
                    n.stopEffectAnimation()
              })),
          (this._effectCfg = h),
          Fe(this)
      }),
      (t.prototype.fadeOut = function (e) {
        this.off('mouseover').off('mouseout'), e && e()
      }),
      t
    )
  })(Ne),
  gh = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.init = function () {
        this._symbolDraw = new Ir(ph)
      }),
      (t.prototype.render = function (e, t, n) {
        var i = e.getData(),
          a = this._symbolDraw
        a.updateData(i, { clipShape: this._getClipShape(e) }),
          this.group.add(a.group)
      }),
      (t.prototype._getClipShape = function (e) {
        var t = e.coordinateSystem,
          n = t && t.getArea && t.getArea()
        return e.get('clip', !0) ? n : null
      }),
      (t.prototype.updateTransform = function (e, t, n) {
        var i = e.getData()
        this.group.dirty()
        var a = ps('').reset(e, t, n)
        a.progress &&
          a.progress({ start: 0, end: i.count(), count: i.count() }, i),
          this._symbolDraw.updateLayout()
      }),
      (t.prototype._updateGroupTransform = function (e) {
        var t = e.coordinateSystem
        t &&
          t.getRoamTransform &&
          ((this.group.transform = Yn(t.getRoamTransform())),
          this.group.decomposeTransform())
      }),
      (t.prototype.remove = function (e, t) {
        this._symbolDraw && this._symbolDraw.remove(!0)
      }),
      (t.type = 'effectScatter'),
      t
    )
  })(zt),
  fh = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n.hasSymbolVisual = !0), n
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function (e, t) {
        return Li(null, this, { useEncodeDefaulter: !0 })
      }),
      (t.prototype.brushSelector = function (e, t, n) {
        return n.point(t.getItemLayout(e))
      }),
      (t.type = 'series.effectScatter'),
      (t.dependencies = ['grid', 'polar']),
      (t.defaultOption = {
        coordinateSystem: 'cartesian2d',
        zlevel: 0,
        z: 2,
        legendHoverLink: !0,
        effectType: 'ripple',
        progressive: 0,
        showEffectOn: 'render',
        clip: !0,
        rippleEffect: { period: 4, scale: 2.5, brushType: 'fill', number: 3 },
        universalTransition: { divideShape: 'clone' },
        symbolSize: 10,
      }),
      t
    )
  })(Ct)
function yh(e) {
  e.registerChartView(gh),
    e.registerSeriesModel(fh),
    e.registerLayout(ps('effectScatter'))
}
var mh = (function (e) {
    function t(t, n, i) {
      var a = e.call(this) || this
      return a.add(a.createLine(t, n, i)), a._updateEffectSymbol(t, n), a
    }
    return (
      j(t, e),
      (t.prototype.createLine = function (e, t, n) {
        return new Rr(e, t, n)
      }),
      (t.prototype._updateEffectSymbol = function (e, t) {
        var n = e.getItemModel(t).getModel('effect'),
          i = n.get('symbolSize'),
          a = n.get('symbol')
        g(i) || (i = [i, i])
        var o = e.getItemVisual(t, 'style'),
          r = n.get('color') || (o && o.stroke),
          s = this.childAt(1)
        this._symbolType !== a &&
          (this.remove(s),
          ((s = ft(a, -0.5, -0.5, 1, 1, r)).z2 = 100),
          (s.culling = !0),
          this.add(s)),
          s &&
            (s.setStyle('shadowColor', r),
            s.setStyle(n.getItemStyle(['color'])),
            (s.scaleX = i[0]),
            (s.scaleY = i[1]),
            s.setColor(r),
            (this._symbolType = a),
            (this._symbolScale = i),
            this._updateEffectAnimation(e, n, t))
      }),
      (t.prototype._updateEffectAnimation = function (e, t, n) {
        var i = this.childAt(1)
        if (i) {
          var a = this,
            o = e.getItemLayout(n),
            r = 1e3 * t.get('period'),
            s = t.get('loop'),
            l = t.get('constantSpeed'),
            u = be(t.get('delay'), function (t) {
              return ((t / e.count()) * r) / 3
            })
          if (
            ((i.ignore = !0),
            this._updateAnimationPoints(i, o),
            l > 0 && (r = (this._getLineLength(i) / l) * 1e3),
            (r !== this._period || s !== this._loop) &&
              (i.stopAnimation(), r > 0))
          ) {
            var d = void 0
            ;(d = 'function' == typeof u ? u(n) : u),
              i.__t > 0 && (d = -r * i.__t),
              (i.__t = 0)
            var c = i
              .animate('', s)
              .when(r, { __t: 1 })
              .delay(d)
              .during(function () {
                a._updateSymbolPosition(i)
              })
            s ||
              c.done(function () {
                a.remove(i)
              }),
              c.start()
          }
          ;(this._period = r), (this._loop = s)
        }
      }),
      (t.prototype._getLineLength = function (e) {
        return U(e.__p1, e.__cp1) + U(e.__cp1, e.__p2)
      }),
      (t.prototype._updateAnimationPoints = function (e, t) {
        ;(e.__p1 = t[0]),
          (e.__p2 = t[1]),
          (e.__cp1 = t[2] || [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2])
      }),
      (t.prototype.updateData = function (e, t, n) {
        this.childAt(0).updateData(e, t, n), this._updateEffectSymbol(e, t)
      }),
      (t.prototype._updateSymbolPosition = function (e) {
        var t = e.__p1,
          n = e.__p2,
          i = e.__cp1,
          a = e.__t,
          o = [e.x, e.y],
          r = o.slice(),
          s = Nn,
          l = Xn
        ;(o[0] = s(t[0], i[0], n[0], a)), (o[1] = s(t[1], i[1], n[1], a))
        var u = l(t[0], i[0], n[0], a),
          d = l(t[1], i[1], n[1], a)
        ;(e.rotation = -Math.atan2(d, u) - Math.PI / 2),
          ('line' !== this._symbolType &&
            'rect' !== this._symbolType &&
            'roundRect' !== this._symbolType) ||
            (void 0 !== e.__lastT && e.__lastT < e.__t
              ? ((e.scaleY = 1.05 * U(r, o)),
                1 === a &&
                  ((o[0] = r[0] + (o[0] - r[0]) / 2),
                  (o[1] = r[1] + (o[1] - r[1]) / 2)))
              : 1 === e.__lastT
              ? (e.scaleY = 2 * U(t, o))
              : (e.scaleY = this._symbolScale[1])),
          (e.__lastT = e.__t),
          (e.ignore = !1),
          (e.x = o[0]),
          (e.y = o[1])
      }),
      (t.prototype.updateLayout = function (e, t) {
        this.childAt(0).updateLayout(e, t)
        var n = e.getItemModel(t).getModel('effect')
        this._updateEffectAnimation(e, n, t)
      }),
      t
    )
  })(Ne),
  vh = (function (e) {
    function t(t, n, i) {
      var a = e.call(this) || this
      return a._createPolyline(t, n, i), a
    }
    return (
      j(t, e),
      (t.prototype._createPolyline = function (e, t, n) {
        var i = e.getItemLayout(t),
          a = new X({ shape: { points: i } })
        this.add(a), this._updateCommonStl(e, t, n)
      }),
      (t.prototype.updateData = function (e, t, n) {
        var i = e.hostModel,
          a = this.childAt(0),
          o = { shape: { points: e.getItemLayout(t) } }
        Ee(a, o, i, t), this._updateCommonStl(e, t, n)
      }),
      (t.prototype._updateCommonStl = function (e, t, n) {
        var i = this.childAt(0),
          a = e.getItemModel(t),
          o = n && n.emphasisLineStyle
        ;(n && !e.hasItemOption) ||
          (o = a.getModel(['emphasis', 'lineStyle']).getLineStyle()),
          i.useStyle(e.getItemVisual(t, 'style')),
          (i.style.fill = null),
          (i.style.strokeNoScale = !0),
          (i.ensureState('emphasis').style = o),
          Fe(this)
      }),
      (t.prototype.updateLayout = function (e, t) {
        this.childAt(0).setShape('points', e.getItemLayout(t))
      }),
      t
    )
  })(Ne),
  xh = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t._lastFrame = 0), (t._lastFramePercent = 0), t
    }
    return (
      j(t, e),
      (t.prototype.createLine = function (e, t, n) {
        return new vh(e, t, n)
      }),
      (t.prototype._updateAnimationPoints = function (e, t) {
        this._points = t
        for (var n = [0], i = 0, a = 1; a < t.length; a++) {
          var o = t[a - 1],
            r = t[a]
          ;(i += U(o, r)), n.push(i)
        }
        if (0 !== i) {
          for (a = 0; a < n.length; a++) n[a] /= i
          ;(this._offsets = n), (this._length = i)
        } else this._length = 0
      }),
      (t.prototype._getLineLength = function () {
        return this._length
      }),
      (t.prototype._updateSymbolPosition = function (e) {
        var t = e.__t,
          n = this._points,
          i = this._offsets,
          a = n.length
        if (i) {
          var o,
            r = this._lastFrame
          if (t < this._lastFramePercent) {
            for (o = Math.min(r + 1, a - 1); o >= 0 && !(i[o] <= t); o--);
            o = Math.min(o, a - 2)
          } else {
            for (o = r; o < a && !(i[o] > t); o++);
            o = Math.min(o - 1, a - 2)
          }
          var s = (t - i[o]) / (i[o + 1] - i[o]),
            l = n[o],
            u = n[o + 1]
          ;(e.x = l[0] * (1 - s) + s * u[0]), (e.y = l[1] * (1 - s) + s * u[1])
          var d = u[0] - l[0],
            c = u[1] - l[1]
          ;(e.rotation = -Math.atan2(c, d) - Math.PI / 2),
            (this._lastFrame = o),
            (this._lastFramePercent = t),
            (e.ignore = !1)
        }
      }),
      t
    )
  })(mh),
  _h = function () {
    ;(this.polyline = !1), (this.curveness = 0), (this.segs = [])
  },
  Sh = (function (e) {
    function t(t) {
      return e.call(this, t) || this
    }
    return (
      j(t, e),
      (t.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null }
      }),
      (t.prototype.getDefaultShape = function () {
        return new _h()
      }),
      (t.prototype.buildPath = function (e, t) {
        var n = t.segs,
          i = t.curveness
        if (t.polyline)
          for (var a = 0; a < n.length; ) {
            var o = n[a++]
            if (o > 0) {
              e.moveTo(n[a++], n[a++])
              for (var r = 1; r < o; r++) e.lineTo(n[a++], n[a++])
            }
          }
        else
          for (a = 0; a < n.length; ) {
            var s = n[a++],
              l = n[a++],
              u = n[a++],
              d = n[a++]
            if ((e.moveTo(s, l), i > 0)) {
              var c = (s + u) / 2 - (l - d) * i,
                h = (l + d) / 2 - (u - s) * i
              e.quadraticCurveTo(c, h, u, d)
            } else e.lineTo(u, d)
          }
      }),
      (t.prototype.findDataIndex = function (e, t) {
        var n = this.shape,
          i = n.segs,
          a = n.curveness,
          o = this.style.lineWidth
        if (n.polyline)
          for (var r = 0, s = 0; s < i.length; ) {
            var l = i[s++]
            if (l > 0)
              for (var u = i[s++], d = i[s++], c = 1; c < l; c++) {
                var h = i[s++],
                  p = i[s++]
                if (Hn(u, d, h, p, o, e, t)) return r
              }
            r++
          }
        else
          for (r = 0, s = 0; s < i.length; ) {
            ;(u = i[s++]), (d = i[s++]), (h = i[s++]), (p = i[s++])
            if (a > 0) {
              if (
                Un(
                  u,
                  d,
                  (u + h) / 2 - (d - p) * a,
                  (d + p) / 2 - (h - u) * a,
                  h,
                  p,
                  o,
                  e,
                  t
                )
              )
                return r
            } else if (Hn(u, d, h, p, o, e, t)) return r
            r++
          }
        return -1
      }),
      t
    )
  })(At),
  bh = (function () {
    function e() {
      this.group = new Ne()
    }
    return (
      (e.prototype.isPersistent = function () {
        return !this._incremental
      }),
      (e.prototype.updateData = function (e) {
        this.group.removeAll()
        var t = new Sh({ rectHover: !0, cursor: 'default' })
        t.setShape({ segs: e.getLayout('linesPoints') }),
          this._setCommon(t, e),
          this.group.add(t),
          (this._incremental = null)
      }),
      (e.prototype.incrementalPrepareUpdate = function (e) {
        this.group.removeAll(),
          this._clearIncremental(),
          e.count() > 5e5
            ? (this._incremental ||
                (this._incremental = new an({ silent: !0 })),
              this.group.add(this._incremental))
            : (this._incremental = null)
      }),
      (e.prototype.incrementalUpdate = function (e, t) {
        var n = new Sh()
        n.setShape({ segs: t.getLayout('linesPoints') }),
          this._setCommon(n, t, !!this._incremental),
          this._incremental
            ? this._incremental.addDisplayable(n, !0)
            : ((n.rectHover = !0),
              (n.cursor = 'default'),
              (n.__startIndex = e.start),
              this.group.add(n))
      }),
      (e.prototype.remove = function () {
        this._clearIncremental(),
          (this._incremental = null),
          this.group.removeAll()
      }),
      (e.prototype._setCommon = function (e, t, n) {
        var i = t.hostModel
        e.setShape({
          polyline: i.get('polyline'),
          curveness: i.get(['lineStyle', 'curveness']),
        }),
          e.useStyle(i.getModel('lineStyle').getLineStyle()),
          (e.style.strokeNoScale = !0)
        var a = t.getVisual('style')
        if (
          (a && a.stroke && e.setStyle('stroke', a.stroke),
          e.setStyle('fill', null),
          !n)
        ) {
          var o = Be(e)
          ;(o.seriesIndex = i.seriesIndex),
            e.on('mousemove', function (t) {
              o.dataIndex = null
              var n = e.findDataIndex(t.offsetX, t.offsetY)
              n > 0 && (o.dataIndex = n + e.__startIndex)
            })
        }
      }),
      (e.prototype._clearIncremental = function () {
        var e = this._incremental
        e && e.clearDisplaybles()
      }),
      e
    )
  })(),
  wh = {
    seriesType: 'lines',
    plan: Yt(),
    reset: function (e) {
      var t = e.coordinateSystem,
        n = e.get('polyline'),
        i = e.pipelineContext.large
      return {
        progress: function (a, o) {
          var r = []
          if (i) {
            var s = void 0,
              l = a.end - a.start
            if (n) {
              for (var u = 0, d = a.start; d < a.end; d++)
                u += e.getLineCoordsCount(d)
              s = new Float32Array(l + 2 * u)
            } else s = new Float32Array(4 * l)
            var c = 0,
              h = []
            for (d = a.start; d < a.end; d++) {
              var p = e.getLineCoords(d, r)
              n && (s[c++] = p)
              for (var g = 0; g < p; g++)
                (h = t.dataToPoint(r[g], !1, h)),
                  (s[c++] = h[0]),
                  (s[c++] = h[1])
            }
            o.setLayout('linesPoints', s)
          } else
            for (d = a.start; d < a.end; d++) {
              var f = o.getItemModel(d),
                y = ((p = e.getLineCoords(d, r)), [])
              if (n) for (var m = 0; m < p; m++) y.push(t.dataToPoint(r[m]))
              else {
                ;(y[0] = t.dataToPoint(r[0])), (y[1] = t.dataToPoint(r[1]))
                var v = f.get(['lineStyle', 'curveness'])
                ;+v &&
                  (y[2] = [
                    (y[0][0] + y[1][0]) / 2 - (y[0][1] - y[1][1]) * v,
                    (y[0][1] + y[1][1]) / 2 - (y[1][0] - y[0][0]) * v,
                  ])
              }
              o.setItemLayout(d, y)
            }
        },
      }
    },
  },
  Ih = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        var i = e.getData(),
          a = this._updateLineDraw(i, e),
          o = e.get('zlevel'),
          r = e.get(['effect', 'trailLength']),
          s = n.getZr(),
          l = 'svg' === s.painter.getType()
        l || s.painter.getLayer(o).clear(!0),
          null == this._lastZlevel ||
            l ||
            s.configLayer(this._lastZlevel, { motionBlur: !1 }),
          this._showEffect(e) &&
            r &&
            (l ||
              s.configLayer(o, {
                motionBlur: !0,
                lastFrameAlpha: Math.max(Math.min(r / 10 + 0.9, 1), 0),
              })),
          a.updateData(i)
        var u = e.get('clip', !0) && ns(e.coordinateSystem, !1, e)
        u ? this.group.setClipPath(u) : this.group.removeClipPath(),
          (this._lastZlevel = o),
          (this._finished = !0)
      }),
      (t.prototype.incrementalPrepareRender = function (e, t, n) {
        var i = e.getData()
        this._updateLineDraw(i, e).incrementalPrepareUpdate(i),
          this._clearLayer(n),
          (this._finished = !1)
      }),
      (t.prototype.incrementalRender = function (e, t, n) {
        this._lineDraw.incrementalUpdate(e, t.getData()),
          (this._finished = e.end === t.getData().count())
      }),
      (t.prototype.updateTransform = function (e, t, n) {
        var i = e.getData(),
          a = e.pipelineContext
        if (!this._finished || a.large || a.progressiveRender)
          return { update: !0 }
        var o = wh.reset(e, t, n)
        o.progress &&
          o.progress({ start: 0, end: i.count(), count: i.count() }, i),
          this._lineDraw.updateLayout(),
          this._clearLayer(n)
      }),
      (t.prototype._updateLineDraw = function (e, t) {
        var n = this._lineDraw,
          i = this._showEffect(t),
          a = !!t.get('polyline'),
          o = t.pipelineContext.large
        return (
          (n &&
            i === this._hasEffet &&
            a === this._isPolyline &&
            o === this._isLargeDraw) ||
            (n && n.remove(),
            (n = this._lineDraw =
              o ? new bh() : new kr(a ? (i ? xh : vh) : i ? mh : Rr)),
            (this._hasEffet = i),
            (this._isPolyline = a),
            (this._isLargeDraw = o)),
          this.group.add(n.group),
          n
        )
      }),
      (t.prototype._showEffect = function (e) {
        return !!e.get(['effect', 'show'])
      }),
      (t.prototype._clearLayer = function (e) {
        var t = e.getZr()
        'svg' === t.painter.getType() ||
          null == this._lastZlevel ||
          t.painter.getLayer(this._lastZlevel).clear(!0)
      }),
      (t.prototype.remove = function (e, t) {
        this._lineDraw && this._lineDraw.remove(),
          (this._lineDraw = null),
          this._clearLayer(t)
      }),
      (t.prototype.dispose = function (e, t) {
        this.remove(e, t)
      }),
      (t.type = 'lines'),
      t
    )
  })(zt),
  Mh = 'undefined' == typeof Uint32Array ? Array : Uint32Array,
  Dh = 'undefined' == typeof Float64Array ? Array : Float64Array
function Ah(e) {
  var t = e.data
  t &&
    t[0] &&
    t[0][0] &&
    t[0][0].coord &&
    (e.data = i(t, function (e) {
      var t = { coords: [e[0].coord, e[1].coord] }
      return (
        e[0].name && (t.fromName = e[0].name),
        e[1].name && (t.toName = e[1].name),
        Se([t, e[0], e[1]])
      )
    }))
}
var Lh = (function (e) {
  function t() {
    var n = (null !== e && e.apply(this, arguments)) || this
    return (
      (n.type = t.type),
      (n.visualStyleAccessPath = 'lineStyle'),
      (n.visualDrawType = 'stroke'),
      n
    )
  }
  return (
    j(t, e),
    (t.prototype.init = function (t) {
      ;(t.data = t.data || []), Ah(t)
      var n = this._processFlatCoordsArray(t.data)
      ;(this._flatCoords = n.flatCoords),
        (this._flatCoordsOffset = n.flatCoordsOffset),
        n.flatCoords && (t.data = new Float32Array(n.count)),
        e.prototype.init.apply(this, arguments)
    }),
    (t.prototype.mergeOption = function (t) {
      if ((Ah(t), t.data)) {
        var n = this._processFlatCoordsArray(t.data)
        ;(this._flatCoords = n.flatCoords),
          (this._flatCoordsOffset = n.flatCoordsOffset),
          n.flatCoords && (t.data = new Float32Array(n.count))
      }
      e.prototype.mergeOption.apply(this, arguments)
    }),
    (t.prototype.appendData = function (e) {
      var t = this._processFlatCoordsArray(e.data)
      t.flatCoords &&
        (this._flatCoords
          ? ((this._flatCoords = Zn(this._flatCoords, t.flatCoords)),
            (this._flatCoordsOffset = Zn(
              this._flatCoordsOffset,
              t.flatCoordsOffset
            )))
          : ((this._flatCoords = t.flatCoords),
            (this._flatCoordsOffset = t.flatCoordsOffset)),
        (e.data = new Float32Array(t.count))),
        this.getRawData().appendData(e.data)
    }),
    (t.prototype._getCoordsFromItemModel = function (e) {
      var t = this.getData().getItemModel(e)
      return t.option instanceof Array ? t.option : t.getShallow('coords')
    }),
    (t.prototype.getLineCoordsCount = function (e) {
      return this._flatCoordsOffset
        ? this._flatCoordsOffset[2 * e + 1]
        : this._getCoordsFromItemModel(e).length
    }),
    (t.prototype.getLineCoords = function (e, t) {
      if (this._flatCoordsOffset) {
        for (
          var n = this._flatCoordsOffset[2 * e],
            i = this._flatCoordsOffset[2 * e + 1],
            a = 0;
          a < i;
          a++
        )
          (t[a] = t[a] || []),
            (t[a][0] = this._flatCoords[n + 2 * a]),
            (t[a][1] = this._flatCoords[n + 2 * a + 1])
        return i
      }
      var o = this._getCoordsFromItemModel(e)
      for (a = 0; a < o.length; a++)
        (t[a] = t[a] || []), (t[a][0] = o[a][0]), (t[a][1] = o[a][1])
      return o.length
    }),
    (t.prototype._processFlatCoordsArray = function (e) {
      var t = 0
      if (
        (this._flatCoords && (t = this._flatCoords.length),
        'number' == typeof e[0])
      ) {
        for (
          var n = e.length,
            i = new Mh(n),
            a = new Dh(n),
            o = 0,
            r = 0,
            s = 0,
            l = 0;
          l < n;

        ) {
          s++
          var u = e[l++]
          ;(i[r++] = o + t), (i[r++] = u)
          for (var d = 0; d < u; d++) {
            var c = e[l++],
              h = e[l++]
            ;(a[o++] = c), (a[o++] = h)
          }
        }
        return {
          flatCoordsOffset: new Uint32Array(i.buffer, 0, r),
          flatCoords: a,
          count: s,
        }
      }
      return { flatCoordsOffset: null, flatCoords: null, count: e.length }
    }),
    (t.prototype.getInitialData = function (e, t) {
      var n = new bi(['value'], this)
      return (
        (n.hasItemOption = !1),
        n.initData(e.data, [], function (e, t, i, a) {
          if (e instanceof Array) return NaN
          n.hasItemOption = !0
          var o = e.value
          return null != o ? (o instanceof Array ? o[a] : o) : void 0
        }),
        n
      )
    }),
    (t.prototype.formatTooltip = function (e, t, n) {
      var i = this.getData().getItemModel(e),
        a = i.get('name')
      if (a) return a
      var o = i.get('fromName'),
        r = i.get('toName'),
        s = []
      return (
        null != o && s.push(o),
        null != r && s.push(r),
        dn('nameValue', { name: s.join(' > ') })
      )
    }),
    (t.prototype.preventIncremental = function () {
      return !!this.get(['effect', 'show'])
    }),
    (t.prototype.getProgressive = function () {
      var e = this.option.progressive
      return null == e ? (this.option.large ? 1e4 : this.get('progressive')) : e
    }),
    (t.prototype.getProgressiveThreshold = function () {
      var e = this.option.progressiveThreshold
      return null == e
        ? this.option.large
          ? 2e4
          : this.get('progressiveThreshold')
        : e
    }),
    (t.type = 'series.lines'),
    (t.dependencies = ['grid', 'polar', 'geo', 'calendar']),
    (t.defaultOption = {
      coordinateSystem: 'geo',
      zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      xAxisIndex: 0,
      yAxisIndex: 0,
      symbol: ['none', 'none'],
      symbolSize: [10, 10],
      geoIndex: 0,
      effect: {
        show: !1,
        period: 4,
        constantSpeed: 0,
        symbol: 'circle',
        symbolSize: 3,
        loop: !0,
        trailLength: 0.2,
      },
      large: !1,
      largeThreshold: 2e3,
      polyline: !1,
      clip: !0,
      label: { show: !1, position: 'end' },
      lineStyle: { opacity: 0.5 },
    }),
    t
  )
})(Ct)
function Ch(e) {
  return e instanceof Array || (e = [e, e]), e
}
var Th = {
  seriesType: 'lines',
  reset: function (e) {
    var t = Ch(e.get('symbol')),
      n = Ch(e.get('symbolSize')),
      i = e.getData()
    return (
      i.setVisual('fromSymbol', t && t[0]),
      i.setVisual('toSymbol', t && t[1]),
      i.setVisual('fromSymbolSize', n && n[0]),
      i.setVisual('toSymbolSize', n && n[1]),
      {
        dataEach: i.hasItemOption
          ? function (e, t) {
              var n = e.getItemModel(t),
                i = Ch(n.getShallow('symbol', !0)),
                a = Ch(n.getShallow('symbolSize', !0))
              i[0] && e.setItemVisual(t, 'fromSymbol', i[0]),
                i[1] && e.setItemVisual(t, 'toSymbol', i[1]),
                a[0] && e.setItemVisual(t, 'fromSymbolSize', a[0]),
                a[1] && e.setItemVisual(t, 'toSymbolSize', a[1])
            }
          : null,
      }
    )
  },
}
function Nh(e) {
  e.registerChartView(Ih),
    e.registerSeriesModel(Lh),
    e.registerLayout(wh),
    e.registerVisual(Th)
}
var Ph = (function () {
  function e() {
    ;(this.blurSize = 30),
      (this.pointSize = 20),
      (this.maxOpacity = 1),
      (this.minOpacity = 0),
      (this._gradientPixels = { inRange: null, outOfRange: null })
    var e = jn()
    this.canvas = e
  }
  return (
    (e.prototype.update = function (e, t, n, i, a, o) {
      var r = this._getBrush(),
        s = this._getGradient(a, 'inRange'),
        l = this._getGradient(a, 'outOfRange'),
        u = this.pointSize + this.blurSize,
        d = this.canvas,
        c = d.getContext('2d'),
        h = e.length
      ;(d.width = t), (d.height = n)
      for (var p = 0; p < h; ++p) {
        var g = e[p],
          f = g[0],
          y = g[1],
          m = i(g[2])
        ;(c.globalAlpha = m), c.drawImage(r, f - u, y - u)
      }
      if (!d.width || !d.height) return d
      for (
        var v = c.getImageData(0, 0, d.width, d.height),
          x = v.data,
          _ = 0,
          S = x.length,
          b = this.minOpacity,
          w = this.maxOpacity - b;
        _ < S;

      ) {
        m = x[_ + 3] / 256
        var I = 4 * Math.floor(255 * m)
        if (m > 0) {
          var M = o(m) ? s : l
          m > 0 && (m = m * w + b),
            (x[_++] = M[I]),
            (x[_++] = M[I + 1]),
            (x[_++] = M[I + 2]),
            (x[_++] = M[I + 3] * m * 256)
        } else _ += 4
      }
      return c.putImageData(v, 0, 0), d
    }),
    (e.prototype._getBrush = function () {
      var e = this._brushCanvas || (this._brushCanvas = jn()),
        t = this.pointSize + this.blurSize,
        n = 2 * t
      ;(e.width = n), (e.height = n)
      var i = e.getContext('2d')
      return (
        i.clearRect(0, 0, n, n),
        (i.shadowOffsetX = n),
        (i.shadowBlur = this.blurSize),
        (i.shadowColor = '#000'),
        i.beginPath(),
        i.arc(-t, t, this.pointSize, 0, 2 * Math.PI, !0),
        i.closePath(),
        i.fill(),
        e
      )
    }),
    (e.prototype._getGradient = function (e, t) {
      for (
        var n = this._gradientPixels,
          i = n[t] || (n[t] = new Uint8ClampedArray(1024)),
          a = [0, 0, 0, 0],
          o = 0,
          r = 0;
        r < 256;
        r++
      )
        e[t](r / 255, !0, a),
          (i[o++] = a[0]),
          (i[o++] = a[1]),
          (i[o++] = a[2]),
          (i[o++] = a[3])
      return i
    }),
    e
  )
})()
function Eh(e) {
  var t = e.dimensions
  return 'lng' === t[0] && 'lat' === t[1]
}
var Rh = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        var i
        t.eachComponent('visualMap', function (t) {
          t.eachTargetSeries(function (n) {
            n === e && (i = t)
          })
        }),
          this.group.removeAll(),
          (this._incrementalDisplayable = null)
        var a = e.coordinateSystem
        'cartesian2d' === a.type || 'calendar' === a.type
          ? this._renderOnCartesianAndCalendar(e, n, 0, e.getData().count())
          : Eh(a) && this._renderOnGeo(a, e, i, n)
      }),
      (t.prototype.incrementalPrepareRender = function (e, t, n) {
        this.group.removeAll()
      }),
      (t.prototype.incrementalRender = function (e, t, n, i) {
        var a = t.coordinateSystem
        a &&
          (Eh(a)
            ? this.render(t, n, i)
            : this._renderOnCartesianAndCalendar(t, i, e.start, e.end, !0))
      }),
      (t.prototype._renderOnCartesianAndCalendar = function (e, t, n, i, a) {
        var o,
          r,
          s,
          l,
          u = e.coordinateSystem
        if (Gr(u, 'cartesian2d')) {
          var d = u.getAxis('x'),
            c = u.getAxis('y')
          ;(o = d.getBandWidth()),
            (r = c.getBandWidth()),
            (s = d.scale.getExtent()),
            (l = c.scale.getExtent())
        }
        for (
          var h = this.group,
            p = e.getData(),
            g = e.getModel(['emphasis', 'itemStyle']).getItemStyle(),
            f = e.getModel(['blur', 'itemStyle']).getItemStyle(),
            y = e.getModel(['select', 'itemStyle']).getItemStyle(),
            m = Ge(e),
            v = e.get(['emphasis', 'focus']),
            x = e.get(['emphasis', 'blurScope']),
            _ = Gr(u, 'cartesian2d')
              ? [
                  p.mapDimension('x'),
                  p.mapDimension('y'),
                  p.mapDimension('value'),
                ]
              : [p.mapDimension('time'), p.mapDimension('value')],
            S = n;
          S < i;
          S++
        ) {
          var b = void 0,
            w = p.getItemVisual(S, 'style')
          if (Gr(u, 'cartesian2d')) {
            var I = p.get(_[0], S),
              M = p.get(_[1], S)
            if (
              isNaN(p.get(_[2], S)) ||
              I < s[0] ||
              I > s[1] ||
              M < l[0] ||
              M > l[1]
            )
              continue
            var D = u.dataToPoint([I, M])
            b = new $e({
              shape: {
                x: Math.floor(Math.round(D[0]) - o / 2),
                y: Math.floor(Math.round(D[1]) - r / 2),
                width: Math.ceil(o),
                height: Math.ceil(r),
              },
              style: w,
            })
          } else {
            if (isNaN(p.get(_[1], S))) continue
            b = new $e({
              z2: 1,
              shape: u.dataToRect([p.get(_[0], S)]).contentShape,
              style: w,
            })
          }
          var A = p.getItemModel(S)
          if (p.hasItemOption) {
            var L = A.getModel('emphasis')
            ;(g = L.getModel('itemStyle').getItemStyle()),
              (f = A.getModel(['blur', 'itemStyle']).getItemStyle()),
              (y = A.getModel(['select', 'itemStyle']).getItemStyle()),
              (v = L.get('focus')),
              (x = L.get('blurScope')),
              (m = Ge(A))
          }
          var C = e.getRawValue(S),
            T = '-'
          C && null != C[2] && (T = C[2] + ''),
            ke(b, m, {
              labelFetcher: e,
              labelDataIndex: S,
              defaultOpacity: w.opacity,
              defaultText: T,
            }),
            (b.ensureState('emphasis').style = g),
            (b.ensureState('blur').style = f),
            (b.ensureState('select').style = y),
            Fe(b, v, x),
            (b.incremental = a),
            a && (b.states.emphasis.hoverLayer = !0),
            h.add(b),
            p.setItemGraphicEl(S, b)
        }
      }),
      (t.prototype._renderOnGeo = function (e, t, n, a) {
        var o = n.targetVisuals.inRange,
          r = n.targetVisuals.outOfRange,
          s = t.getData(),
          l = this._hmLayer || this._hmLayer || new Ph()
        ;(l.blurSize = t.get('blurSize')),
          (l.pointSize = t.get('pointSize')),
          (l.minOpacity = t.get('minOpacity')),
          (l.maxOpacity = t.get('maxOpacity'))
        var u = e.getViewRect().clone(),
          d = e.getRoamTransform()
        u.applyTransform(d)
        var c = Math.max(u.x, 0),
          h = Math.max(u.y, 0),
          p = Math.min(u.width + u.x, a.getWidth()),
          g = Math.min(u.height + u.y, a.getHeight()),
          f = p - c,
          y = g - h,
          m = [
            s.mapDimension('lng'),
            s.mapDimension('lat'),
            s.mapDimension('value'),
          ],
          v = s.mapArray(m, function (t, n, i) {
            var a = e.dataToPoint([t, n])
            return (a[0] -= c), (a[1] -= h), a.push(i), a
          }),
          x = n.getExtent(),
          _ =
            'visualMap.continuous' === n.type
              ? (function (e, t) {
                  var n = e[1] - e[0]
                  return (
                    (t = [(t[0] - e[0]) / n, (t[1] - e[0]) / n]),
                    function (e) {
                      return e >= t[0] && e <= t[1]
                    }
                  )
                })(x, n.option.range)
              : (function (e, t, n) {
                  var a = e[1] - e[0],
                    o = (t = i(t, function (t) {
                      return {
                        interval: [
                          (t.interval[0] - e[0]) / a,
                          (t.interval[1] - e[0]) / a,
                        ],
                      }
                    })).length,
                    r = 0
                  return function (e) {
                    var i
                    for (i = r; i < o; i++)
                      if ((a = t[i].interval)[0] <= e && e <= a[1]) {
                        r = i
                        break
                      }
                    if (i === o)
                      for (i = r - 1; i >= 0; i--) {
                        var a
                        if ((a = t[i].interval)[0] <= e && e <= a[1]) {
                          r = i
                          break
                        }
                      }
                    return i >= 0 && i < o && n[i]
                  }
                })(x, n.getPieceList(), n.option.selected)
        l.update(
          v,
          f,
          y,
          o.color.getNormalizer(),
          {
            inRange: o.color.getColorMapper(),
            outOfRange: r.color.getColorMapper(),
          },
          _
        )
        var S = new St({
          style: { width: f, height: y, x: c, y: h, image: l.canvas },
          silent: !0,
        })
        this.group.add(S)
      }),
      (t.type = 'heatmap'),
      t
    )
  })(zt),
  Oh = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function (e, t) {
        return Li(null, this, { generateCoord: 'value' })
      }),
      (t.prototype.preventIncremental = function () {
        var e = G.get(this.get('coordinateSystem'))
        if (e && e.dimensions)
          return 'lng' === e.dimensions[0] && 'lat' === e.dimensions[1]
      }),
      (t.type = 'series.heatmap'),
      (t.dependencies = ['grid', 'geo', 'calendar']),
      (t.defaultOption = {
        coordinateSystem: 'cartesian2d',
        zlevel: 0,
        z: 2,
        geoIndex: 0,
        blurSize: 30,
        pointSize: 20,
        maxOpacity: 1,
        minOpacity: 0,
        select: { itemStyle: { borderColor: '#212121' } },
      }),
      t
    )
  })(Ct)
function Vh(e) {
  e.registerChartView(Rh), e.registerSeriesModel(Oh)
}
var zh = ['itemStyle', 'borderWidth'],
  kh = [
    { xy: 'x', wh: 'width', index: 0, posDesc: ['left', 'right'] },
    { xy: 'y', wh: 'height', index: 1, posDesc: ['top', 'bottom'] },
  ],
  Gh = new te()
function Bh(e, t, n, i) {
  var o = e.getItemLayout(t),
    r = n.get('symbolRepeat'),
    s = n.get('symbolClip'),
    l = n.get('symbolPosition') || 'start',
    u = ((n.get('symbolRotate') || 0) * Math.PI) / 180 || 0,
    d = n.get('symbolPatternSize') || 2,
    c = n.isAnimationEnabled(),
    h = {
      dataIndex: t,
      layout: o,
      itemModel: n,
      symbolType: e.getItemVisual(t, 'symbol') || 'circle',
      style: e.getItemVisual(t, 'style'),
      symbolClip: s,
      symbolRepeat: r,
      symbolRepeatDirection: n.get('symbolRepeatDirection'),
      symbolPatternSize: d,
      rotation: u,
      animationModel: c ? n : null,
      hoverScale: c && n.get(['emphasis', 'scale']),
      z2: n.getShallow('z', !0) || 0,
    }
  !(function (e, t, n, i, a) {
    var o,
      r = i.valueDim,
      s = e.get('symbolBoundingData'),
      l = i.coordSys.getOtherAxis(i.coordSys.getBaseAxis()),
      u = l.toGlobalCoord(l.dataToCoord(0)),
      d = 1 - +(n[r.wh] <= 0)
    if (g(s)) {
      var c = [Wh(l, s[0]) - u, Wh(l, s[1]) - u]
      c[1] < c[0] && c.reverse(), (o = c[d])
    } else
      o =
        null != s
          ? Wh(l, s) - u
          : t
          ? i.coordSysExtent[r.index][d] - u
          : n[r.wh]
    ;(a.boundingLength = o), t && (a.repeatCutLength = n[r.wh])
    a.pxSign = o > 0 ? 1 : o < 0 ? -1 : 0
  })(n, r, o, i, h),
    (function (e, t, n, i, a, o, r, s, l, u) {
      var d,
        c = l.valueDim,
        h = l.categoryDim,
        p = Math.abs(n[h.wh]),
        f = e.getItemVisual(t, 'symbolSize')
      d = g(f) ? f.slice() : null == f ? ['100%', '100%'] : [f, f]
      ;(d[h.index] = se(d[h.index], p)),
        (d[c.index] = se(d[c.index], i ? p : Math.abs(o))),
        (u.symbolSize = d),
        ((u.symbolScale = [d[0] / s, d[1] / s])[c.index] *=
          (l.isHorizontal ? -1 : 1) * r)
    })(e, t, o, r, 0, h.boundingLength, h.pxSign, d, i, h),
    (function (e, t, n, i, a) {
      var o = e.get(zh) || 0
      o &&
        (Gh.attr({ scaleX: t[0], scaleY: t[1], rotation: n }),
        Gh.updateTransform(),
        (o /= Gh.getLineScale()),
        (o *= t[i.valueDim.index]))
      a.valueLineWidth = o
    })(n, h.symbolScale, u, i, h)
  var p = h.symbolSize,
    f = _t(n.get('symbolOffset'), p)
  return (
    (function (e, t, n, i, o, r, s, l, u, d, c, h) {
      var p = c.categoryDim,
        g = c.valueDim,
        f = h.pxSign,
        y = Math.max(t[g.index] + l, 0),
        m = y
      if (i) {
        var v = Math.abs(u),
          x = be(e.get('symbolMargin'), '15%') + '',
          _ = !1
        x.lastIndexOf('!') === x.length - 1 &&
          ((_ = !0), (x = x.slice(0, x.length - 1)))
        var S = se(x, t[g.index]),
          b = Math.max(y + 2 * S, 0),
          w = _ ? 0 : 2 * S,
          I = qn(i),
          M = I ? i : np((v + w) / b)
        ;(b = y + 2 * (S = (v - M * y) / 2 / (_ ? M : Math.max(M - 1, 1)))),
          (w = _ ? 0 : 2 * S),
          I || 'fixed' === i || (M = d ? np((Math.abs(d) + w) / b) : 0),
          (m = M * b - w),
          (h.repeatTimes = M),
          (h.symbolMargin = S)
      }
      var D = f * (m / 2),
        A = (h.pathPosition = [])
      ;(A[p.index] = n[p.wh] / 2),
        (A[g.index] = 'start' === s ? D : 'end' === s ? u - D : u / 2),
        r && ((A[0] += r[0]), (A[1] += r[1]))
      var L = (h.bundlePosition = [])
      ;(L[p.index] = n[p.xy]), (L[g.index] = n[g.xy])
      var C = (h.barRectShape = a({}, n))
      ;(C[g.wh] = f * Math.max(Math.abs(n[g.wh]), Math.abs(A[g.index] + D))),
        (C[p.wh] = n[p.wh])
      var T = (h.clipShape = {})
      ;(T[p.xy] = -n[p.xy]),
        (T[p.wh] = c.ecSize[p.wh]),
        (T[g.xy] = 0),
        (T[g.wh] = n[g.wh])
    })(
      n,
      p,
      o,
      r,
      0,
      f,
      l,
      h.valueLineWidth,
      h.boundingLength,
      h.repeatCutLength,
      i,
      h
    ),
    h
  )
}
function Wh(e, t) {
  return e.toGlobalCoord(e.dataToCoord(e.scale.parse(t)))
}
function Fh(e) {
  var t = e.symbolPatternSize,
    n = ft(e.symbolType, -t / 2, -t / 2, t, t)
  return (
    n.attr({ culling: !0 }),
    'image' !== n.type && n.setStyle({ strokeNoScale: !0 }),
    n
  )
}
function Yh(e, t, n, i) {
  var a = e.__pictorialBundle,
    o = n.symbolSize,
    r = n.valueLineWidth,
    s = n.pathPosition,
    l = t.valueDim,
    u = n.repeatTimes || 0,
    d = 0,
    c = o[t.valueDim.index] + r + 2 * n.symbolMargin
  for (
    $h(e, function (e) {
      ;(e.__pictorialAnimationIndex = d),
        (e.__pictorialRepeatTimes = u),
        d < u
          ? ep(e, null, g(d), n, i)
          : ep(e, null, { scaleX: 0, scaleY: 0 }, n, i, function () {
              a.remove(e)
            }),
        d++
    });
    d < u;
    d++
  ) {
    var h = Fh(n)
    ;(h.__pictorialAnimationIndex = d), (h.__pictorialRepeatTimes = u), a.add(h)
    var p = g(d)
    ep(
      h,
      { x: p.x, y: p.y, scaleX: 0, scaleY: 0 },
      { scaleX: p.scaleX, scaleY: p.scaleY, rotation: p.rotation },
      n,
      i
    )
  }
  function g(e) {
    var t = s.slice(),
      i = n.pxSign,
      a = e
    return (
      ('start' === n.symbolRepeatDirection ? i > 0 : i < 0) && (a = u - 1 - e),
      (t[l.index] = c * (a - u / 2 + 0.5) + s[l.index]),
      {
        x: t[0],
        y: t[1],
        scaleX: n.symbolScale[0],
        scaleY: n.symbolScale[1],
        rotation: n.rotation,
      }
    )
  }
}
function Xh(e, t, n, i) {
  var a = e.__pictorialBundle,
    o = e.__pictorialMainPath
  o
    ? ep(
        o,
        null,
        {
          x: n.pathPosition[0],
          y: n.pathPosition[1],
          scaleX: n.symbolScale[0],
          scaleY: n.symbolScale[1],
          rotation: n.rotation,
        },
        n,
        i
      )
    : ((o = e.__pictorialMainPath = Fh(n)),
      a.add(o),
      ep(
        o,
        {
          x: n.pathPosition[0],
          y: n.pathPosition[1],
          scaleX: 0,
          scaleY: 0,
          rotation: n.rotation,
        },
        { scaleX: n.symbolScale[0], scaleY: n.symbolScale[1] },
        n,
        i
      ))
}
function Hh(e, t, n) {
  var i = a({}, t.barRectShape),
    o = e.__pictorialBarRect
  o
    ? ep(o, null, { shape: i }, t, n)
    : (((o = e.__pictorialBarRect =
        new $e({
          z2: 2,
          shape: i,
          silent: !0,
          style: { stroke: 'transparent', fill: 'transparent', lineWidth: 0 },
        })).disableMorphing = !0),
      e.add(o))
}
function Uh(e, t, n, i) {
  if (n.symbolClip) {
    var o = e.__pictorialClipPath,
      r = a({}, n.clipShape),
      s = t.valueDim,
      l = n.animationModel,
      u = n.dataIndex
    if (o) Ee(o, { shape: r }, l, u)
    else {
      ;(r[s.wh] = 0),
        (o = new $e({ shape: r })),
        e.__pictorialBundle.setClipPath(o),
        (e.__pictorialClipPath = o)
      var d = {}
      ;(d[s.wh] = n.clipShape[s.wh]),
        ln[i ? 'updateProps' : 'initProps'](o, { shape: d }, l, u)
    }
  }
}
function Zh(e, t) {
  var n = e.getItemModel(t)
  return (n.getAnimationDelayParams = jh), (n.isAnimationEnabled = qh), n
}
function jh(e) {
  return { index: e.__pictorialAnimationIndex, count: e.__pictorialRepeatTimes }
}
function qh() {
  return this.parentModel.isAnimationEnabled() && !!this.getShallow('animation')
}
function Jh(e, t, n, i) {
  var a = new Ne(),
    o = new Ne()
  return (
    a.add(o),
    (a.__pictorialBundle = o),
    (o.x = n.bundlePosition[0]),
    (o.y = n.bundlePosition[1]),
    n.symbolRepeat ? Yh(a, t, n) : Xh(a, 0, n),
    Hh(a, n, i),
    Uh(a, t, n, i),
    (a.__pictorialShapeStr = Qh(e, n)),
    (a.__pictorialSymbolMeta = n),
    a
  )
}
function Kh(e, n, i, a) {
  var o = a.__pictorialBarRect
  o && o.removeTextContent()
  var r = []
  $h(a, function (e) {
    r.push(e)
  }),
    a.__pictorialMainPath && r.push(a.__pictorialMainPath),
    a.__pictorialClipPath && (i = null),
    t(r, function (e) {
      bt(e, { scaleX: 0, scaleY: 0 }, i, n, function () {
        a.parent && a.parent.remove(a)
      })
    }),
    e.setItemGraphicEl(n, null)
}
function Qh(e, t) {
  return [
    e.getItemVisual(t.dataIndex, 'symbol') || 'none',
    !!t.symbolRepeat,
    !!t.symbolClip,
  ].join(':')
}
function $h(e, n, i) {
  t(e.__pictorialBundle.children(), function (t) {
    t !== e.__pictorialBarRect && n.call(i, t)
  })
}
function ep(e, t, n, i, a, o) {
  t && e.attr(t),
    i.symbolClip && !a
      ? n && e.attr(n)
      : n &&
        ln[a ? 'updateProps' : 'initProps'](
          e,
          n,
          i.animationModel,
          i.dataIndex,
          o
        )
}
function tp(e, t, n) {
  var i = n.dataIndex,
    o = n.itemModel,
    r = o.getModel('emphasis'),
    s = r.getModel('itemStyle').getItemStyle(),
    l = o.getModel(['blur', 'itemStyle']).getItemStyle(),
    u = o.getModel(['select', 'itemStyle']).getItemStyle(),
    d = o.getShallow('cursor'),
    c = r.get('focus'),
    h = r.get('blurScope'),
    p = r.get('scale')
  $h(e, function (e) {
    if (e instanceof St) {
      var t = e.style
      e.useStyle(
        a(
          { image: t.image, x: t.x, y: t.y, width: t.width, height: t.height },
          n.style
        )
      )
    } else e.useStyle(n.style)
    var i = e.ensureState('emphasis')
    ;(i.style = s),
      p && ((i.scaleX = 1.1 * e.scaleX), (i.scaleY = 1.1 * e.scaleY)),
      (e.ensureState('blur').style = l),
      (e.ensureState('select').style = u),
      d && (e.cursor = d),
      (e.z2 = n.z2)
  })
  var g = t.valueDim.posDesc[+(n.boundingLength > 0)],
    f = e.__pictorialBarRect
  ke(f, Ge(o), {
    labelFetcher: t.seriesModel,
    labelDataIndex: i,
    defaultText: mr(t.seriesModel.getData(), i),
    inheritColor: n.style.fill,
    defaultOpacity: n.style.opacity,
    defaultOutsidePosition: g,
  }),
    Fe(e, c, h)
}
function np(e) {
  var t = Math.round(e)
  return Math.abs(e - t) < 1e-4 ? t : Math.ceil(e)
}
var ip = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        var i = this.group,
          a = e.getData(),
          o = this._data,
          r = e.coordinateSystem,
          s = r.getBaseAxis().isHorizontal(),
          l = r.master.getRect(),
          u = {
            ecSize: { width: n.getWidth(), height: n.getHeight() },
            seriesModel: e,
            coordSys: r,
            coordSysExtent: [
              [l.x, l.x + l.width],
              [l.y, l.y + l.height],
            ],
            isHorizontal: s,
            valueDim: kh[+s],
            categoryDim: kh[1 - +s],
          }
        return (
          a
            .diff(o)
            .add(function (e) {
              if (a.hasValue(e)) {
                var t = Zh(a, e),
                  n = Bh(a, e, t, u),
                  o = Jh(a, u, n)
                a.setItemGraphicEl(e, o), i.add(o), tp(o, u, n)
              }
            })
            .update(function (e, t) {
              var n = o.getItemGraphicEl(t)
              if (a.hasValue(e)) {
                var r = Zh(a, e),
                  s = Bh(a, e, r, u),
                  l = Qh(a, s)
                n &&
                  l !== n.__pictorialShapeStr &&
                  (i.remove(n), a.setItemGraphicEl(e, null), (n = null)),
                  n
                    ? (function (e, t, n) {
                        var i = n.animationModel,
                          a = n.dataIndex,
                          o = e.__pictorialBundle
                        Ee(
                          o,
                          { x: n.bundlePosition[0], y: n.bundlePosition[1] },
                          i,
                          a
                        ),
                          n.symbolRepeat ? Yh(e, t, n, !0) : Xh(e, t, n, !0)
                        Hh(e, n, !0), Uh(e, t, n, !0)
                      })(n, u, s)
                    : (n = Jh(a, u, s, !0)),
                  a.setItemGraphicEl(e, n),
                  (n.__pictorialSymbolMeta = s),
                  i.add(n),
                  tp(n, u, s)
              } else i.remove(n)
            })
            .remove(function (e) {
              var t = o.getItemGraphicEl(e)
              t && Kh(o, e, t.__pictorialSymbolMeta.animationModel, t)
            })
            .execute(),
          (this._data = a),
          this.group
        )
      }),
      (t.prototype.remove = function (e, t) {
        var n = this.group,
          i = this._data
        e.get('animation')
          ? i &&
            i.eachItemGraphicEl(function (t) {
              Kh(i, Be(t).dataIndex, e, t)
            })
          : n.removeAll()
      }),
      (t.type = 'pictorialBar'),
      t
    )
  })(zt),
  ap = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (
        (n.type = t.type),
        (n.hasSymbolVisual = !0),
        (n.defaultSymbol = 'roundRect'),
        n
      )
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function (t) {
        return (
          (t.stack = null), e.prototype.getInitialData.apply(this, arguments)
        )
      }),
      (t.type = 'series.pictorialBar'),
      (t.dependencies = ['grid']),
      (t.defaultOption = Xt(xs.defaultOption, {
        symbol: 'circle',
        symbolSize: null,
        symbolRotate: null,
        symbolPosition: null,
        symbolOffset: null,
        symbolMargin: null,
        symbolRepeat: !1,
        symbolRepeatDirection: 'end',
        symbolClip: !1,
        symbolBoundingData: null,
        symbolPatternSize: 400,
        barGap: '-100%',
        progressive: 0,
        emphasis: { scale: !1 },
        select: { itemStyle: { borderColor: '#212121' } },
      })),
      t
    )
  })(xs)
function op(e) {
  e.registerChartView(ip),
    e.registerSeriesModel(ap),
    e.registerLayout(O(Jt, 'pictorialBar'))
}
var rp = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n._layers = []), n
    }
    return (
      j(t, e),
      (t.prototype.render = function (e, t, n) {
        var i = e.getData(),
          a = this,
          o = this.group,
          r = e.getLayerSeries(),
          s = i.getLayout('layoutInfo'),
          l = s.rect,
          u = s.boundaryGap
        function d(e) {
          return e.name
        }
        ;(o.x = 0), (o.y = l.y + u[0])
        var c = new oi(this._layersSeries || [], r, d, d),
          h = []
        function p(t, n, s) {
          var l = a._layers
          if ('remove' !== t) {
            for (
              var u, d, c = [], p = [], g = r[n].indices, f = 0;
              f < g.length;
              f++
            ) {
              var y = i.getItemLayout(g[f]),
                m = y.x,
                v = y.y0,
                x = y.y
              c.push(m, v),
                p.push(m, v + x),
                (u = i.getItemVisual(g[f], 'style'))
            }
            var _ = i.getItemLayout(g[0]),
              S = e.getModel('label').get('margin'),
              b = e.getModel('emphasis')
            if ('add' === t) {
              var w = (h[n] = new Ne())
              ;(d = new $r({
                shape: {
                  points: c,
                  stackedOnPoints: p,
                  smooth: 0.4,
                  stackedOnSmooth: 0.4,
                  smoothConstraint: !1,
                },
                z2: 0,
              })),
                w.add(d),
                o.add(w),
                e.isAnimationEnabled() &&
                  d.setClipPath(
                    (function (e, t, n) {
                      var i = new $e({
                        shape: {
                          x: e.x - 10,
                          y: e.y - 10,
                          width: 0,
                          height: e.height + 20,
                        },
                      })
                      return (
                        xt(
                          i,
                          {
                            shape: {
                              x: e.x - 50,
                              width: e.width + 100,
                              height: e.height + 20,
                            },
                          },
                          t,
                          n
                        ),
                        i
                      )
                    })(d.getBoundingRect(), e, function () {
                      d.removeClipPath()
                    })
                  )
            } else {
              w = l[s]
              ;(d = w.childAt(0)),
                o.add(w),
                (h[n] = w),
                Ee(d, { shape: { points: c, stackedOnPoints: p } }, e),
                vt(d)
            }
            ke(
              d,
              Ge(e),
              {
                labelDataIndex: g[f - 1],
                defaultText: i.getName(g[f - 1]),
                inheritColor: u.fill,
              },
              { normal: { verticalAlign: 'middle' } }
            ),
              d.setTextConfig({ position: null, local: !0 })
            var I = d.getTextContent()
            I && ((I.x = _.x - S), (I.y = _.y0 + _.y / 2)),
              d.useStyle(u),
              i.setItemGraphicEl(n, d),
              Ot(d, e),
              Fe(d, b.get('focus'), b.get('blurScope'))
          } else o.remove(l[n])
        }
        c
          .add(f(p, this, 'add'))
          .update(f(p, this, 'update'))
          .remove(f(p, this, 'remove'))
          .execute(),
          (this._layersSeries = r),
          (this._layers = h)
      }),
      (t.type = 'themeRiver'),
      t
    )
  })(zt),
  sp = (function (t) {
    function n() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.type = n.type), e
    }
    return (
      j(n, t),
      (n.prototype.init = function (e) {
        t.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new rl(
            f(this.getData, this),
            f(this.getRawData, this)
          ))
      }),
      (n.prototype.fixData = function (e) {
        var t = e.length,
          n = {},
          i = kn(e, function (e) {
            return n.hasOwnProperty(e[0] + '') || (n[e[0] + ''] = -1), e[2]
          }),
          a = []
        i.buckets.each(function (e, t) {
          a.push({ name: t, dataList: e })
        })
        for (var o = a.length, r = 0; r < o; ++r) {
          for (var s = a[r].name, l = 0; l < a[r].dataList.length; ++l) {
            var u = a[r].dataList[l][0] + ''
            n[u] = r
          }
          for (var u in n)
            n.hasOwnProperty(u) &&
              n[u] !== r &&
              ((n[u] = r), (e[t] = [u, 0, s]), t++)
        }
        return e
      }),
      (n.prototype.getInitialData = function (t, n) {
        for (
          var i = this.getReferringComponents('singleAxis', E).models[0].get(
              'type'
            ),
            a = Ue(t.data, function (e) {
              return void 0 !== e[2]
            }),
            o = this.fixData(a || []),
            r = [],
            s = (this.nameMap = e()),
            l = 0,
            u = 0;
          u < o.length;
          ++u
        )
          r.push(o[u][2]), s.get(o[u][2]) || (s.set(o[u][2], l), l++)
        var d = wi(o, {
            coordDimensions: ['single'],
            dimensionsDefine: [
              { name: 'time', type: li(i) },
              { name: 'value', type: 'float' },
              { name: 'name', type: 'ordinal' },
            ],
            encodeDefine: { single: 0, value: 1, itemName: 2 },
          }).dimensions,
          c = new bi(d, this)
        return c.initData(o), c
      }),
      (n.prototype.getLayerSeries = function () {
        for (var e = this.getData(), t = e.count(), n = [], i = 0; i < t; ++i)
          n[i] = i
        var a = e.mapDimension('single'),
          o = kn(n, function (t) {
            return e.get('name', t)
          }),
          r = []
        return (
          o.buckets.each(function (t, n) {
            t.sort(function (t, n) {
              return e.get(a, t) - e.get(a, n)
            }),
              r.push({ name: n, indices: t })
          }),
          r
        )
      }),
      (n.prototype.getAxisTooltipData = function (e, t, n) {
        g(e) || (e = e ? [e] : [])
        for (
          var i,
            a = this.getData(),
            o = this.getLayerSeries(),
            r = [],
            s = o.length,
            l = 0;
          l < s;
          ++l
        ) {
          for (
            var u = Number.MAX_VALUE, d = -1, c = o[l].indices.length, h = 0;
            h < c;
            ++h
          ) {
            var p = a.get(e[0], o[l].indices[h]),
              f = Math.abs(p - t)
            f <= u && ((i = p), (u = f), (d = o[l].indices[h]))
          }
          r.push(d)
        }
        return { dataIndices: r, nestestValue: i }
      }),
      (n.prototype.formatTooltip = function (e, t, n) {
        var i = this.getData(),
          a = i.getName(e),
          o = i.get(i.mapDimension('value'), e)
        return dn('nameValue', { name: a, value: o })
      }),
      (n.type = 'series.themeRiver'),
      (n.dependencies = ['singleAxis']),
      (n.defaultOption = {
        zlevel: 0,
        z: 2,
        colorBy: 'data',
        coordinateSystem: 'singleAxis',
        boundaryGap: ['10%', '10%'],
        singleAxisIndex: 0,
        animationEasing: 'linear',
        label: { margin: 4, show: !0, position: 'left', fontSize: 11 },
        emphasis: { label: { show: !0 } },
      }),
      n
    )
  })(Ct)
function lp(e, t) {
  e.eachSeriesByType('themeRiver', function (e) {
    var t = e.getData(),
      n = e.coordinateSystem,
      i = {},
      a = n.getRect()
    i.rect = a
    var o = e.get('boundaryGap'),
      r = n.getAxis()
    ;((i.boundaryGap = o), 'horizontal' === r.orient)
      ? ((o[0] = se(o[0], a.height)),
        (o[1] = se(o[1], a.height)),
        up(t, e, a.height - o[0] - o[1]))
      : ((o[0] = se(o[0], a.width)),
        (o[1] = se(o[1], a.width)),
        up(t, e, a.width - o[0] - o[1]))
    t.setLayout('layoutInfo', i)
  })
}
function up(e, t, n) {
  if (e.count())
    for (
      var a,
        o = t.coordinateSystem,
        r = t.getLayerSeries(),
        s = e.mapDimension('single'),
        l = e.mapDimension('value'),
        u = i(r, function (t) {
          return i(t.indices, function (t) {
            var n = o.dataToPoint(e.get(s, t))
            return (n[1] = e.get(l, t)), n
          })
        }),
        d = (function (e) {
          for (
            var t = e.length, n = e[0].length, i = [], a = [], o = 0, r = 0;
            r < n;
            ++r
          ) {
            for (var s = 0, l = 0; l < t; ++l) s += e[l][r][1]
            s > o && (o = s), i.push(s)
          }
          for (var u = 0; u < n; ++u) a[u] = (o - i[u]) / 2
          o = 0
          for (var d = 0; d < n; ++d) {
            var c = i[d] + a[d]
            c > o && (o = c)
          }
          return { y0: a, max: o }
        })(u),
        c = d.y0,
        h = n / d.max,
        p = r.length,
        g = r[0].indices.length,
        f = 0;
      f < g;
      ++f
    ) {
      ;(a = c[f] * h),
        e.setItemLayout(r[0].indices[f], {
          layerIndex: 0,
          x: u[0][f][0],
          y0: a,
          y: u[0][f][1] * h,
        })
      for (var y = 1; y < p; ++y)
        (a += u[y - 1][f][1] * h),
          e.setItemLayout(r[y].indices[f], {
            layerIndex: y,
            x: u[y][f][0],
            y0: a,
            y: u[y][f][1] * h,
          })
    }
}
function dp(e) {
  e.registerChartView(rp),
    e.registerSeriesModel(sp),
    e.registerLayout(lp),
    e.registerProcessor(Ks('themeRiver'))
}
var cp = (function (e) {
  function n(t, n, i, a) {
    var o = e.call(this) || this
    ;(o.z2 = 2),
      (o.textConfig = { inside: !0 }),
      (Be(o).seriesIndex = n.seriesIndex)
    var r = new Gt({ z2: 4, silent: t.getModel().get(['label', 'silent']) })
    return o.setTextContent(r), o.updateData(!0, t, n, i, a), o
  }
  return (
    j(n, e),
    (n.prototype.updateData = function (e, n, i, o, r) {
      ;(this.node = n),
        (n.piece = this),
        (i = i || this._seriesModel),
        (o = o || this._ecModel)
      var s = this
      Be(s).dataIndex = n.dataIndex
      var l = n.getModel(),
        u = l.getModel('emphasis'),
        d = n.getLayout(),
        c = a({}, d)
      c.label = null
      var h = n.getVisual('style')
      h.lineJoin = 'bevel'
      var p = n.getVisual('decal')
      p && (h.decal = ze(p, r))
      var g = nl(l.getModel('itemStyle'), c, !0)
      a(c, g),
        t(H, function (e) {
          var t = s.ensureState(e),
            n = l.getModel([e, 'itemStyle'])
          t.style = n.getItemStyle()
          var i = nl(n, c)
          i && (t.shape = i)
        }),
        e
          ? (s.setShape(c),
            (s.shape.r = d.r0),
            Ee(s, { shape: { r: d.r } }, i, n.dataIndex))
          : (Ee(s, { shape: c }, i), vt(s)),
        s.useStyle(h),
        this._updateLabel(i)
      var f = l.getShallow('cursor')
      f && s.attr('cursor', f),
        (this._seriesModel = i || this._seriesModel),
        (this._ecModel = o || this._ecModel)
      var y = u.get('focus'),
        m =
          'ancestor' === y
            ? n.getAncestorsIndices()
            : 'descendant' === y
            ? n.getDescendantIndices()
            : y
      Fe(this, m, u.get('blurScope'))
    }),
    (n.prototype._updateLabel = function (e) {
      var n = this,
        i = this.node.getModel(),
        a = i.getModel('label'),
        o = this.node.getLayout(),
        r = o.endAngle - o.startAngle,
        s = (o.startAngle + o.endAngle) / 2,
        l = Math.cos(s),
        u = Math.sin(s),
        d = this,
        c = d.getTextContent(),
        h = this.node.dataIndex,
        p = (a.get('minAngle') / 180) * Math.PI,
        g = a.get('show') && !(null != p && Math.abs(r) < p)
      function f(e, t) {
        var n = e.get(t)
        return null == n ? a.get(t) : n
      }
      ;(c.ignore = !g),
        t(F, function (t) {
          var a =
              'normal' === t ? i.getModel('label') : i.getModel([t, 'label']),
            r = 'normal' === t,
            p = r ? c : c.ensureState(t),
            g = e.getFormattedLabel(h, t)
          r && (g = g || n.node.name),
            (p.style = Rn(a, {}, null, 'normal' !== t, !0)),
            g && (p.style.text = g)
          var y = a.get('show')
          null == y || r || (p.ignore = !y)
          var m,
            v = f(a, 'position'),
            x = r ? d : d.states[t],
            _ = x.style.fill
          x.textConfig = {
            outsideFill: 'inherit' === a.get('color') ? _ : null,
            inside: 'outside' !== v,
          }
          var S = f(a, 'distance') || 0,
            b = f(a, 'align')
          'outside' === v
            ? ((m = o.r + S), (b = s > Math.PI / 2 ? 'right' : 'left'))
            : b && 'center' !== b
            ? 'left' === b
              ? ((m = o.r0 + S), s > Math.PI / 2 && (b = 'right'))
              : 'right' === b &&
                ((m = o.r - S), s > Math.PI / 2 && (b = 'left'))
            : ((m = (o.r + o.r0) / 2), (b = 'center')),
            (p.style.align = b),
            (p.style.verticalAlign = f(a, 'verticalAlign') || 'middle'),
            (p.x = m * l + o.cx),
            (p.y = m * u + o.cy)
          var w = f(a, 'rotate'),
            I = 0
          'radial' === w
            ? (I = -s) < -Math.PI / 2 && (I += Math.PI)
            : 'tangential' === w
            ? (I = Math.PI / 2 - s) > Math.PI / 2
              ? (I -= Math.PI)
              : I < -Math.PI / 2 && (I += Math.PI)
            : 'number' == typeof w && (I = (w * Math.PI) / 180),
            (p.rotation = I)
        }),
        c.dirtyStyle()
    }),
    n
  )
})(Et)
var hp = (function (e) {
  function t() {
    var n = (null !== e && e.apply(this, arguments)) || this
    return (n.type = t.type), n
  }
  return (
    j(t, e),
    (t.prototype.render = function (e, t, n, i) {
      var a = this
      ;(this.seriesModel = e), (this.api = n), (this.ecModel = t)
      var o = e.getData(),
        r = o.tree.root,
        s = e.getViewRoot(),
        l = this.group,
        u = e.get('renderLabelForZeroData'),
        d = []
      s.eachNode(function (e) {
        d.push(e)
      })
      var c,
        h,
        p = this._oldChildren || []
      !(function (i, a) {
        if (0 === i.length && 0 === a.length) return
        function s(e) {
          return e.getId()
        }
        function d(s, d) {
          !(function (i, a) {
            u || !i || i.getValue() || (i = null)
            if (i !== r && a !== r)
              if (a && a.piece)
                i
                  ? (a.piece.updateData(!1, i, e, t, n),
                    o.setItemGraphicEl(i.dataIndex, a.piece))
                  : (function (e) {
                      if (!e) return
                      e.piece && (l.remove(e.piece), (e.piece = null))
                    })(a)
              else if (i) {
                var s = new cp(i, e, t, n)
                l.add(s), o.setItemGraphicEl(i.dataIndex, s)
              }
          })(null == s ? null : i[s], null == d ? null : a[d])
        }
        new oi(a, i, s, s).add(d).update(d).remove(O(d, null)).execute()
      })(d, p),
        (c = r),
        (h = s).depth > 0
          ? (a.virtualPiece
              ? a.virtualPiece.updateData(!1, c, e, t, n)
              : ((a.virtualPiece = new cp(c, e, t, n)), l.add(a.virtualPiece)),
            h.piece.off('click'),
            a.virtualPiece.on('click', function (e) {
              a._rootToNode(h.parentNode)
            }))
          : a.virtualPiece &&
            (l.remove(a.virtualPiece), (a.virtualPiece = null)),
        this._initEvents(),
        (this._oldChildren = d)
    }),
    (t.prototype._initEvents = function () {
      var e = this
      this.group.off('click'),
        this.group.on('click', function (t) {
          var n = !1
          e.seriesModel.getViewRoot().eachNode(function (i) {
            if (!n && i.piece && i.piece === t.target) {
              var a = i.getModel().get('nodeClick')
              if ('rootToNode' === a) e._rootToNode(i)
              else if ('link' === a) {
                var o = i.getModel(),
                  r = o.get('link')
                if (r) {
                  var s = o.get('target', !0) || '_blank'
                  xn(r, s)
                }
              }
              n = !0
            }
          })
        })
    }),
    (t.prototype._rootToNode = function (e) {
      e !== this.seriesModel.getViewRoot() &&
        this.api.dispatchAction({
          type: 'sunburstRootToNode',
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: e,
        })
    }),
    (t.prototype.containPoint = function (e, t) {
      var n = t.getData().getItemLayout(0)
      if (n) {
        var i = e[0] - n.cx,
          a = e[1] - n.cy,
          o = Math.sqrt(i * i + a * a)
        return o <= n.r && o >= n.r0
      }
    }),
    (t.type = 'sunburst'),
    t
  )
})(zt)
function pp(e) {
  var n = 0
  t(e.children, function (e) {
    pp(e)
    var t = e.value
    g(t) && (t = t[0]), (n += t)
  })
  var i = e.value
  g(i) && (i = i[0]),
    (null == i || isNaN(i)) && (i = n),
    i < 0 && (i = 0),
    g(e.value) ? (e.value[0] = i) : (e.value = i)
}
var gp = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), (n.ignoreStyleOnData = !0), n
    }
    return (
      j(t, e),
      (t.prototype.getInitialData = function (e, t) {
        var n = { name: e.name, children: e.data }
        pp(n)
        var a = i(
            e.levels || [],
            function (e) {
              return new m(e, this, t)
            },
            this
          ),
          o = tu.createTree(n, this, function (e) {
            e.wrapMethod('getItemModel', function (e, t) {
              var n = o.getNodeByDataIndex(t),
                i = a[n.depth]
              return i && (e.parentModel = i), e
            })
          })
        return o.data
      }),
      (t.prototype.optionUpdated = function () {
        this.resetViewRoot()
      }),
      (t.prototype.getDataParams = function (t) {
        var n = e.prototype.getDataParams.apply(this, arguments),
          i = this.getData().tree.getNodeByDataIndex(t)
        return (n.treePathInfo = ou(i, this)), n
      }),
      (t.prototype.getViewRoot = function () {
        return this._viewRoot
      }),
      (t.prototype.resetViewRoot = function (e) {
        e ? (this._viewRoot = e) : (e = this._viewRoot)
        var t = this.getRawData().tree.root
        ;(e && (e === t || t.contains(e))) || (this._viewRoot = t)
      }),
      (t.prototype.enableAriaDecal = function () {
        pu(this)
      }),
      (t.type = 'series.sunburst'),
      (t.defaultOption = {
        zlevel: 0,
        z: 2,
        center: ['50%', '50%'],
        radius: [0, '75%'],
        clockwise: !0,
        startAngle: 90,
        minAngle: 0,
        stillShowZeroSum: !0,
        nodeClick: 'rootToNode',
        renderLabelForZeroData: !1,
        label: {
          rotate: 'radial',
          show: !0,
          opacity: 1,
          align: 'center',
          position: 'inside',
          distance: 5,
          silent: !0,
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: 'white',
          borderType: 'solid',
          shadowBlur: 0,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1,
        },
        emphasis: { focus: 'descendant' },
        blur: { itemStyle: { opacity: 0.2 }, label: { opacity: 0.1 } },
        animationType: 'expansion',
        animationDuration: 1e3,
        animationDurationUpdate: 500,
        data: [],
        sort: 'desc',
      }),
      t
    )
  })(Ct),
  fp = Math.PI / 180
function yp(e, n, i) {
  n.eachSeriesByType(e, function (e) {
    var n = e.get('center'),
      a = e.get('radius')
    g(a) || (a = [0, a]), g(n) || (n = [n, n])
    var o = i.getWidth(),
      r = i.getHeight(),
      s = Math.min(o, r),
      l = se(n[0], o),
      u = se(n[1], r),
      d = se(a[0], s / 2),
      c = se(a[1], s / 2),
      h = -e.get('startAngle') * fp,
      p = e.get('minAngle') * fp,
      f = e.getData().tree.root,
      y = e.getViewRoot(),
      m = y.depth,
      v = e.get('sort')
    null != v && mp(y, v)
    var x = 0
    t(y.children, function (e) {
      !isNaN(e.getValue()) && x++
    })
    var _ = y.getValue(),
      S = (Math.PI / (_ || x)) * 2,
      b = y.depth > 0,
      w = y.height - (b ? -1 : 1),
      I = (c - d) / (w || 1),
      M = e.get('clockwise'),
      D = e.get('stillShowZeroSum'),
      A = M ? 1 : -1,
      L = function (e, n) {
        if (e) {
          var i = n
          if (e !== f) {
            var a = e.getValue(),
              o = 0 === _ && D ? S : a * S
            o < p && (o = p), (i = n + A * o)
            var r = e.depth - m - (b ? -1 : 1),
              c = d + I * r,
              h = d + I * (r + 1),
              g = e.getModel()
            null != g.get('r0') && (c = se(g.get('r0'), s / 2)),
              null != g.get('r') && (h = se(g.get('r'), s / 2)),
              e.setLayout({
                angle: o,
                startAngle: n,
                endAngle: i,
                clockwise: M,
                cx: l,
                cy: u,
                r0: c,
                r: h,
              })
          }
          if (e.children && e.children.length) {
            var y = 0
            t(e.children, function (e) {
              y += L(e, n + y)
            })
          }
          return i - n
        }
      }
    if (b) {
      var C = d,
        T = d + I,
        N = 2 * Math.PI
      f.setLayout({
        angle: N,
        startAngle: h,
        endAngle: h + N,
        clockwise: M,
        cx: l,
        cy: u,
        r0: C,
        r: T,
      })
    }
    L(y, h)
  })
}
function mp(e, n) {
  var a = e.children || []
  ;(e.children = (function (e, t) {
    if ('function' == typeof t) {
      var n = i(e, function (e, t) {
        var n = e.getValue()
        return {
          params: {
            depth: e.depth,
            height: e.height,
            dataIndex: e.dataIndex,
            getValue: function () {
              return n
            },
          },
          index: t,
        }
      })
      return (
        n.sort(function (e, n) {
          return t(e.params, n.params)
        }),
        i(n, function (t) {
          return e[t.index]
        })
      )
    }
    var a = 'asc' === t
    return e.sort(function (e, t) {
      var n = (e.getValue() - t.getValue()) * (a ? 1 : -1)
      return 0 === n ? (e.dataIndex - t.dataIndex) * (a ? -1 : 1) : n
    })
  })(a, n)),
    a.length &&
      t(e.children, function (e) {
        mp(e, n)
      })
}
function vp(e) {
  var t = {}
  e.eachSeriesByType('sunburst', function (e) {
    var n = e.getData(),
      i = n.tree
    i.eachNode(function (o) {
      var r = o.getModel().getModel('itemStyle').getItemStyle()
      r.fill ||
        (r.fill = (function (e, n, i) {
          for (var a = e; a && a.depth > 1; ) a = a.parentNode
          var o = n.getColorFromPalette(a.name || a.dataIndex + '', t)
          return (
            e.depth > 1 &&
              'string' == typeof o &&
              (o = Jn(o, ((e.depth - 1) / (i - 1)) * 0.5)),
            o
          )
        })(o, e, i.root.height))
      var s = n.ensureUniqueItemVisual(o.dataIndex, 'style')
      a(s, r)
    })
  })
}
function xp(e) {
  e.registerChartView(hp),
    e.registerSeriesModel(gp),
    e.registerLayout(O(yp, 'sunburst')),
    e.registerProcessor(O(Ks, 'sunburst')),
    e.registerVisual(vp),
    (function (e) {
      e.registerAction(
        { type: 'sunburstRootToNode', update: 'updateView' },
        function (e, t) {
          t.eachComponent(
            { mainType: 'series', subType: 'sunburst', query: e },
            function (t, n) {
              var i = nu(e, ['sunburstRootToNode'], t)
              if (i) {
                var a = t.getViewRoot()
                a && (e.direction = au(a, i.node) ? 'rollUp' : 'drillDown'),
                  t.resetViewRoot(i.node)
              }
            }
          )
        }
      ),
        e.registerAction(
          { type: 'sunburstHighlight', update: 'none' },
          function (e, t, n) {
            ;(e = a({}, e)),
              t.eachComponent(
                { mainType: 'series', subType: 'sunburst', query: e },
                function (t) {
                  var n = nu(e, ['sunburstHighlight'], t)
                  n && (e.dataIndex = n.node.dataIndex)
                }
              ),
              n.dispatchAction(a(e, { type: 'highlight' }))
          }
        ),
        e.registerAction(
          { type: 'sunburstUnhighlight', update: 'updateView' },
          function (e, t, n) {
            ;(e = a({}, e)), n.dispatchAction(a(e, { type: 'downplay' }))
          }
        )
    })(e)
}
var _p = { color: 'fill', borderColor: 'stroke' },
  Sp = {
    symbol: 1,
    symbolSize: 1,
    symbolKeepAspect: 1,
    legendIcon: 1,
    visualMeta: 1,
    liftZ: 1,
    decal: 1,
  },
  bp = Te(),
  wp = (function (e) {
    function t() {
      var n = (null !== e && e.apply(this, arguments)) || this
      return (n.type = t.type), n
    }
    return (
      j(t, e),
      (t.prototype.optionUpdated = function () {
        ;(this.currentZLevel = this.get('zlevel', !0)),
          (this.currentZ = this.get('z', !0))
      }),
      (t.prototype.getInitialData = function (e, t) {
        return Li(null, this)
      }),
      (t.prototype.getDataParams = function (t, n, i) {
        var a = e.prototype.getDataParams.call(this, t, n)
        return i && (a.info = bp(i).info), a
      }),
      (t.type = 'series.custom'),
      (t.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
      (t.defaultOption = {
        coordinateSystem: 'cartesian2d',
        zlevel: 0,
        z: 2,
        legendHoverLink: !0,
        clip: !1,
      }),
      t
    )
  })(Ct)
function Ip(e, t) {
  return (
    (t = t || [0, 0]),
    i(
      ['x', 'y'],
      function (n, i) {
        var a = this.getAxis(n),
          o = t[i],
          r = e[i] / 2
        return 'category' === a.type
          ? a.getBandWidth()
          : Math.abs(a.dataToCoord(o - r) - a.dataToCoord(o + r))
      },
      this
    )
  )
}
function Mp(e, t) {
  return (
    (t = t || [0, 0]),
    i(
      [0, 1],
      function (n) {
        var i = t[n],
          a = e[n] / 2,
          o = [],
          r = []
        return (
          (o[n] = i - a),
          (r[n] = i + a),
          (o[1 - n] = r[1 - n] = t[1 - n]),
          Math.abs(this.dataToPoint(o)[n] - this.dataToPoint(r)[n])
        )
      },
      this
    )
  )
}
function Dp(e, t) {
  var n = this.getAxis(),
    i = t instanceof Array ? t[0] : t,
    a = (e instanceof Array ? e[0] : e) / 2
  return 'category' === n.type
    ? n.getBandWidth()
    : Math.abs(n.dataToCoord(i - a) - n.dataToCoord(i + a))
}
function Ap(e, t) {
  return (
    (t = t || [0, 0]),
    i(
      ['Radius', 'Angle'],
      function (n, i) {
        var a = this['get' + n + 'Axis'](),
          o = t[i],
          r = e[i] / 2,
          s =
            'category' === a.type
              ? a.getBandWidth()
              : Math.abs(a.dataToCoord(o - r) - a.dataToCoord(o + r))
        return 'Angle' === n && (s = (s * Math.PI) / 180), s
      },
      this
    )
  )
}
var Lp = {
  position: ['x', 'y'],
  scale: ['scaleX', 'scaleY'],
  origin: ['originX', 'originY'],
}
function Cp(e, t, n) {
  var i = e[n],
    a = Lp[n]
  i && ((t[a[0]] = i[0]), (t[a[1]] = i[1]))
}
function Tp(e, t, n) {
  null != e[n] && (t[n] = e[n])
}
function Np(e, t, n) {
  n && (e[t] = n[t])
}
function Pp(e, t, n, i, a) {
  var o = n[e]
  if (o) {
    var r,
      s = t[e],
      l = o.enterFrom
    if (a && l) {
      !r && (r = i[e] = {})
      for (var u = y(l), d = 0; d < u.length; d++) {
        r[(x = u[d])] = l[x]
      }
    }
    if (!a && s)
      if (o.transition) {
        !r && (r = i[e] = {})
        var c = L(o.transition)
        for (d = 0; d < c.length; d++) {
          var h = s[(x = c[d])]
          r[x] = h
        }
      } else if (gn(n.transition, e) >= 0) {
        !r && (r = i[e] = {})
        var p = y(s)
        for (d = 0; d < p.length; d++) {
          h = s[(x = p[d])]
          Rp(o[x], h) && (r[x] = h)
        }
      }
    var g = o.leaveTo
    if (g) {
      var f = Op(t),
        m = f[e] || (f[e] = {}),
        v = y(g)
      for (d = 0; d < v.length; d++) {
        var x
        m[(x = v[d])] = g[x]
      }
    }
  }
}
function Ep(e, t, n) {
  var i = t[e]
  if (i)
    for (var a = (n[e] = {}), o = y(i), r = 0; r < o.length; r++) {
      var s = o[r]
      a[s] = Kn(i[s])
    }
}
function Rp(e, t) {
  return l(e) ? e !== t : null != e && isFinite(e)
}
function Op(e) {
  var t = bp(e)
  return t.leaveToProps || (t.leaveToProps = {})
}
y({
  x: 1,
  y: 1,
  scaleX: 1,
  scaleY: 1,
  originX: 1,
  originY: 1,
  rotation: 1,
}).join(', ')
var Vp = 'normal',
  zp = ['normal', 'emphasis', 'blur', 'select'],
  kp = {
    normal: ['itemStyle'],
    emphasis: ['emphasis', 'itemStyle'],
    blur: ['blur', 'itemStyle'],
    select: ['select', 'itemStyle'],
  },
  Gp = {
    normal: ['label'],
    emphasis: ['emphasis', 'label'],
    blur: ['blur', 'label'],
    select: ['select', 'label'],
  },
  Bp = { normal: {}, emphasis: {}, blur: {}, select: {} },
  Wp = {
    cartesian2d: function (e) {
      var t = e.master.getRect()
      return {
        coordSys: {
          type: 'cartesian2d',
          x: t.x,
          y: t.y,
          width: t.width,
          height: t.height,
        },
        api: {
          coord: function (t) {
            return e.dataToPoint(t)
          },
          size: f(Ip, e),
        },
      }
    },
    geo: function (e) {
      var t = e.getBoundingRect()
      return {
        coordSys: {
          type: 'geo',
          x: t.x,
          y: t.y,
          width: t.width,
          height: t.height,
          zoom: e.getZoom(),
        },
        api: {
          coord: function (t) {
            return e.dataToPoint(t)
          },
          size: f(Mp, e),
        },
      }
    },
    singleAxis: function (e) {
      var t = e.getRect()
      return {
        coordSys: {
          type: 'singleAxis',
          x: t.x,
          y: t.y,
          width: t.width,
          height: t.height,
        },
        api: {
          coord: function (t) {
            return e.dataToPoint(t)
          },
          size: f(Dp, e),
        },
      }
    },
    polar: function (e) {
      var t = e.getRadiusAxis(),
        n = e.getAngleAxis(),
        i = t.getExtent()
      return (
        i[0] > i[1] && i.reverse(),
        {
          coordSys: { type: 'polar', cx: e.cx, cy: e.cy, r: i[1], r0: i[0] },
          api: {
            coord: function (i) {
              var a = t.dataToRadius(i[0]),
                o = n.dataToAngle(i[1]),
                r = e.coordToPoint([a, o])
              return r.push(a, (o * Math.PI) / 180), r
            },
            size: f(Ap, e),
          },
        }
      )
    },
    calendar: function (e) {
      var t = e.getRect(),
        n = e.getRangeInfo()
      return {
        coordSys: {
          type: 'calendar',
          x: t.x,
          y: t.y,
          width: t.width,
          height: t.height,
          cellWidth: e.getCellWidth(),
          cellHeight: e.getCellHeight(),
          rangeInfo: {
            start: n.start,
            end: n.end,
            weeks: n.weeks,
            dayCount: n.allDay,
          },
        },
        api: {
          coord: function (t, n) {
            return e.dataToPoint(t, n)
          },
        },
      }
    },
  }
function Fp(e) {
  return e instanceof At
}
function Yp(e) {
  return e instanceof Oe
}
var Xp = (function (e) {
  function t() {
    var n = (null !== e && e.apply(this, arguments)) || this
    return (n.type = t.type), n
  }
  return (
    j(t, e),
    (t.prototype.render = function (e, t, n, i) {
      var a = this._data,
        o = e.getData(),
        r = this.group,
        s = Qp(e, o, t, n)
      a || r.removeAll(),
        o
          .diff(a)
          .add(function (t) {
            eg(n, null, t, s(t, i), e, r, o)
          })
          .remove(function (t) {
            ug(a.getItemGraphicEl(t), e, r)
          })
          .update(function (t, l) {
            var u = a.getItemGraphicEl(l)
            eg(n, u, t, s(t, i), e, r, o)
          })
          .execute()
      var l = e.get('clip', !0) ? ns(e.coordinateSystem, !1, e) : null
      l ? r.setClipPath(l) : r.removeClipPath(), (this._data = o)
    }),
    (t.prototype.incrementalPrepareRender = function (e, t, n) {
      this.group.removeAll(), (this._data = null)
    }),
    (t.prototype.incrementalRender = function (e, t, n, i, a) {
      var o = t.getData(),
        r = Qp(t, o, n, i)
      function s(e) {
        e.isGroup ||
          ((e.incremental = !0), (e.ensureState('emphasis').hoverLayer = !0))
      }
      for (var l = e.start; l < e.end; l++) {
        var u = eg(null, null, l, r(l, a), t, this.group, o)
        u && u.traverse(s)
      }
    }),
    (t.prototype.filterForExposedEvent = function (e, t, n, i) {
      var a = t.element
      if (null == a || n.name === a) return !0
      for (; (n = n.__hostTarget || n.parent) && n !== this.group; )
        if (n.name === a) return !0
      return !1
    }),
    (t.type = 'custom'),
    t
  )
})(zt)
function Hp(e) {
  var t,
    n = e.type
  if ('path' === n) {
    var i = e.shape,
      a =
        null != i.width && null != i.height
          ? { x: i.x || 0, y: i.y || 0, width: i.width, height: i.height }
          : null,
      o = dg(i)
    ;(t = ti(o, null, a, i.layout || 'center')), (bp(t).customPathData = o)
  } else if ('image' === n)
    (t = new St({})), (bp(t).customImagePath = e.style.image)
  else if ('text' === n) t = new Gt({})
  else if ('group' === n) t = new Ne()
  else {
    if ('compoundPath' === n)
      throw new Error('"compoundPath" is not supported yet.')
    var r = ni(n)
    if (!r) {
      Wn('')
    }
    t = new r()
  }
  return (
    (bp(t).customGraphicType = n),
    (t.name = e.name),
    (t.z2EmphasisLift = 1),
    (t.z2SelectLift = 1),
    t
  )
}
function Up(e, t, n, i, a, o, r, s) {
  var l = a && a.normal.cfg
  l && t.setTextConfig(l)
  var u = i && i.style
  if (u) {
    if ('text' === t.type) {
      var d = u
      ot(d, 'textFill') && (d.fill = d.textFill),
        ot(d, 'textStroke') && (d.stroke = d.textStroke)
    }
    var c = void 0,
      h = Fp(t) ? u.decal : null
    e && h && ((h.dirty = !0), (c = ze(h, e))), (u.__decalPattern = c)
  }
  bp(t).userDuring = i.during
  var p = {},
    g = {}
  Pp('shape', t, i, p, r),
    Ep('shape', i, g),
    (function (e, t, n, i) {
      var a = t.enterFrom
      if (i && a)
        for (var o = y(a), r = 0; r < o.length; r++) n[(h = o[r])] = a[h]
      if (!i)
        if (t.transition) {
          var s = L(t.transition)
          for (r = 0; r < s.length; r++)
            if ('style' !== (h = s[r]) && 'shape' !== h && 'extra' !== h) {
              var l = e[h]
              n[h] = l
            }
        } else Np(n, 'x', e), Np(n, 'y', e)
      var u = t.leaveTo
      if (u) {
        var d = Op(e),
          c = y(u)
        for (r = 0; r < c.length; r++) {
          var h
          d[(h = c[r])] = u[h]
        }
      }
    })(t, i, p, r),
    (function (e, t, n) {
      Cp(t, n, 'position'),
        Cp(t, n, 'scale'),
        Cp(t, n, 'origin'),
        Tp(t, n, 'x'),
        Tp(t, n, 'y'),
        Tp(t, n, 'scaleX'),
        Tp(t, n, 'scaleY'),
        Tp(t, n, 'originX'),
        Tp(t, n, 'originY'),
        Tp(t, n, 'rotation')
    })(0, i, g),
    Pp('extra', t, i, p, r),
    Ep('extra', i, g),
    (function (e, t, n, i, a) {
      if (n) {
        var o,
          r = e.style,
          s = n.enterFrom
        if (a && s) {
          var l = y(s)
          !o && (o = i.style = {})
          for (var u = 0; u < l.length; u++) o[(_ = l[u])] = s[_]
        }
        if (!a && r)
          if (n.transition) {
            var d = L(n.transition)
            for (!o && (o = i.style = {}), u = 0; u < d.length; u++) {
              var c = r[(_ = d[u])]
              o[_] = c
            }
          } else if (
            e.getAnimationStyleProps &&
            gn(t.transition, 'style') >= 0
          ) {
            var h = e.getAnimationStyleProps(),
              p = h ? h.style : null
            if (p) {
              !o && (o = i.style = {})
              var g = y(n)
              for (u = 0; u < g.length; u++)
                p[(_ = g[u])] && ((c = r[_]), (o[_] = c))
            }
          }
        var f = n.leaveTo
        if (f) {
          var m = y(f),
            v = Op(e),
            x = v.style || (v.style = {})
          for (u = 0; u < m.length; u++) {
            var _
            x[(_ = m[u])] = f[_]
          }
        }
      }
    })(t, i, u, p, r),
    (g.style = u),
    (function (e, t) {
      var n = e.isGroup ? null : e,
        i = t.style
      if (n && i) {
        n.useStyle(i)
        var a = i.__decalPattern
        a && (n.style.decal = a)
        for (var o = n.animators, r = 0; r < o.length; r++) {
          var s = o[r]
          'style' === s.targetName && s.changeTarget(n.style)
        }
      }
      t && ((t.style = null), t && e.attr(t), (t.style = i))
    })(t, g),
    (function (e, t, n, i, a) {
      if (i) {
        var o = bp(e).userDuring,
          r = {
            dataIndex: t,
            isFrom: !0,
            during: o ? f(qp, { el: e, userDuring: o }) : null,
          }
        a ? xt(e, i, n, r) : Ee(e, i, n, r)
      }
    })(t, n, o, p, r),
    (function (e, t, n) {
      ot(t, 'silent') && (e.silent = t.silent),
        ot(t, 'ignore') && (e.ignore = t.ignore),
        Yp(e) && ot(t, 'invisible') && (e.invisible = t.invisible)
      Fp(e) && ot(t, 'autoBatch') && (e.autoBatch = t.autoBatch)
      n || (ot(t, 'info') && (bp(e).info = t.info))
    })(t, i, s),
    u ? t.dirty() : t.markRedraw()
}
var Zp = {},
  jp = {
    setTransform: function (e, t) {
      return (Zp.el[e] = t), this
    },
    getTransform: function (e) {
      return Zp.el[e]
    },
    setShape: function (e, t) {
      return (
        ((Zp.el.shape || (Zp.el.shape = {}))[e] = t),
        (Zp.isShapeDirty = !0),
        this
      )
    },
    getShape: function (e) {
      var t = Zp.el.shape
      if (t) return t[e]
    },
    setStyle: function (e, t) {
      var n = Zp.el.style
      return n && ((n[e] = t), (Zp.isStyleDirty = !0)), this
    },
    getStyle: function (e) {
      var t = Zp.el.style
      if (t) return t[e]
    },
    setExtra: function (e, t) {
      return ((Zp.el.extra || (Zp.el.extra = {}))[e] = t), this
    },
    getExtra: function (e) {
      var t = Zp.el.extra
      if (t) return t[e]
    },
  }
function qp() {
  var e = this,
    t = e.el
  if (t) {
    var n = bp(t).userDuring,
      i = e.userDuring
    n === i
      ? ((Zp.el = t),
        (Zp.isShapeDirty = !1),
        (Zp.isStyleDirty = !1),
        i(jp),
        Zp.isShapeDirty && t.dirtyShape && t.dirtyShape(),
        Zp.isStyleDirty && t.dirtyStyle && t.dirtyStyle())
      : (e.el = e.userDuring = null)
  }
}
function Jp(e, t, n, i, a, o, r) {
  var s = t.isGroup ? null : t,
    l = a && a[e].cfg
  if (s) {
    var u = s.ensureState(e)
    if (!1 === i) {
      var d = s.getState(e)
      d && (d.style = null)
    } else u.style = i || null
    l && (u.textConfig = l), Ve(s)
  }
}
function Kp(e, t, n) {
  var i = 'normal' === n,
    a = i ? t : ag(t, n),
    o = a ? a.z2 : null
  null != o && ((i ? e : e.ensureState(n)).z2 = o || 0)
}
function Qp(e, t, n, i) {
  var a = e.get('renderItem'),
    o = e.coordinateSystem,
    s = {}
  o && (s = o.prepareCustoms ? o.prepareCustoms(o) : Wp[o.type](o))
  for (
    var l,
      u,
      d = C(
        {
          getWidth: i.getWidth,
          getHeight: i.getHeight,
          getZr: i.getZr,
          getDevicePixelRatio: i.getDevicePixelRatio,
          value: function (e, n) {
            return (
              null == n && (n = l),
              t.getStore().get(t.getDimensionIndex(e || 0), n)
            )
          },
          style: function (n, i) {
            null == i && (i = l)
            var a = t.getItemVisual(i, 'style'),
              o = a && a.fill,
              s = a && a.opacity,
              u = x(i, 'normal').getItemStyle()
            null != o && (u.fill = o), null != s && (u.opacity = s)
            var d = { inheritColor: r(o) ? o : '#000' },
              c = _(i, 'normal'),
              h = Rn(c, null, d, !1, !0)
            h.text = c.getShallow('show')
              ? Y(e.getFormattedLabel(i, 'normal'), mr(t, i))
              : null
            var p = Qn(c, d, !1)
            return b(n, u), (u = er(u, h, p)), n && S(u, n), (u.legacy = !0), u
          },
          ordinalRawValue: function (e, n) {
            null == n && (n = l), (e = e || 0)
            var i = t.getDimensionInfo(e)
            if (!i) {
              var a = t.getDimensionIndex(e)
              return a >= 0 ? t.getStore().get(a, n) : void 0
            }
            var o = t.get(i.name, n),
              r = i && i.ordinalMeta
            return r ? r.categories[o] : o
          },
          styleEmphasis: function (n, i) {
            null == i && (i = l)
            var a = x(i, 'emphasis').getItemStyle(),
              o = _(i, 'emphasis'),
              r = Rn(o, null, null, !0, !0)
            r.text = o.getShallow('show')
              ? $t(
                  e.getFormattedLabel(i, 'emphasis'),
                  e.getFormattedLabel(i, 'normal'),
                  mr(t, i)
                )
              : null
            var s = Qn(o, null, !0)
            return b(n, a), (a = er(a, r, s)), n && S(a, n), (a.legacy = !0), a
          },
          visual: function (e, n) {
            if ((null == n && (n = l), ot(_p, e))) {
              var i = t.getItemVisual(n, 'style')
              return i ? i[_p[e]] : null
            }
            if (ot(Sp, e)) return t.getItemVisual(n, e)
          },
          barLayout: function (e) {
            if ('cartesian2d' === o.type) {
              var t = o.getBaseAxis()
              return $n(C({ axis: t }, e))
            }
          },
          currentSeriesIndices: function () {
            return n.getCurrentSeriesIndices()
          },
          font: function (e) {
            return ei(e, n)
          },
        },
        s.api || {}
      ),
      c = {
        context: {},
        seriesId: e.id,
        seriesName: e.name,
        seriesIndex: e.seriesIndex,
        coordSys: s.coordSys,
        dataInsideLength: t.count(),
        encode: $p(e.getData()),
      },
      h = {},
      p = {},
      g = {},
      f = {},
      y = 0;
    y < zp.length;
    y++
  ) {
    var m = zp[y]
    ;(g[m] = e.getModel(kp[m])), (f[m] = e.getModel(Gp[m]))
  }
  function v(e) {
    return e === l ? u || (u = t.getItemModel(e)) : t.getItemModel(e)
  }
  function x(e, n) {
    return t.hasItemOption
      ? e === l
        ? h[n] || (h[n] = v(e).getModel(kp[n]))
        : v(e).getModel(kp[n])
      : g[n]
  }
  function _(e, n) {
    return t.hasItemOption
      ? e === l
        ? p[n] || (p[n] = v(e).getModel(Gp[n]))
        : v(e).getModel(Gp[n])
      : f[n]
  }
  return function (e, n) {
    return (
      (l = e),
      (u = null),
      (h = {}),
      (p = {}),
      a &&
        a(
          C(
            {
              dataIndexInside: e,
              dataIndex: t.getRawIndex(e),
              actionType: n ? n.type : null,
            },
            c
          ),
          d
        )
    )
  }
  function S(e, t) {
    for (var n in t) ot(t, n) && (e[n] = t[n])
  }
  function b(e, t) {
    e &&
      (e.textFill && (t.textFill = e.textFill),
      e.textPosition && (t.textPosition = e.textPosition))
  }
}
function $p(e) {
  var n = {}
  return (
    t(e.dimensions, function (t) {
      var i = e.getDimensionInfo(t)
      if (!i.isExtraCoord) {
        var a = i.coordDim
        ;(n[a] = n[a] || [])[i.coordDimIndex] = e.getDimensionIndex(t)
      }
    }),
    n
  )
}
function eg(e, t, n, i, a, o, r) {
  if (i) {
    var s = tg(e, t, n, i, a, o)
    return s && r.setItemGraphicEl(n, s), s && Fe(s, i.focus, i.blurScope), s
  }
  o.remove(t)
}
function tg(e, t, n, i, a, o, r) {
  var s = -1,
    l = t
  t && ng(t, i, a) && ((s = gn(o.childrenRef(), t)), (t = null))
  var u,
    d,
    c = !t,
    h = t
  h
    ? h.clearStates()
    : ((h = Hp(i)),
      l &&
        ((u = l),
        (d = h).copyTransform(u),
        Yp(d) &&
          Yp(u) &&
          (d.setStyle(u.style),
          (d.z = u.z),
          (d.z2 = u.z2),
          (d.zlevel = u.zlevel),
          (d.invisible = u.invisible),
          (d.ignore = u.ignore),
          Fp(d) && Fp(u) && d.setShape(u.shape)))),
    !1 === i.morph
      ? (h.disableMorphing = !0)
      : h.disableMorphing && (h.disableMorphing = !1),
    (Bp.normal.cfg =
      Bp.normal.conOpt =
      Bp.emphasis.cfg =
      Bp.emphasis.conOpt =
      Bp.blur.cfg =
      Bp.blur.conOpt =
      Bp.select.cfg =
      Bp.select.conOpt =
        null),
    (Bp.isLegacy = !1),
    (function (e, t, n, i, a, o) {
      if (e.isGroup) return
      ig(n, null, o), ig(n, 'emphasis', o)
      var r = o.normal.conOpt,
        s = o.emphasis.conOpt,
        l = o.blur.conOpt,
        u = o.select.conOpt
      if (null != r || null != s || null != u || null != l) {
        var d = e.getTextContent()
        if (!1 === r) d && e.removeTextContent()
        else {
          ;(r = o.normal.conOpt = r || { type: 'text' }),
            d ? d.clearStates() : ((d = Hp(r)), e.setTextContent(d)),
            Up(null, d, t, r, null, i, a, !0)
          for (var c = r && r.style, h = 0; h < zp.length; h++) {
            var p = zp[h]
            if (p !== Vp) {
              var g = o[p].conOpt
              Jp(p, d, 0, og(r, g, p), null)
            }
          }
          c ? d.dirty() : d.markRedraw()
        }
      }
    })(h, n, i, a, c, Bp),
    (function (e, t, n, i, a) {
      var o = n.clipPath
      if (!1 === o) e && e.getClipPath() && e.removeClipPath()
      else if (o) {
        var r = e.getClipPath()
        r && ng(r, o, i) && (r = null),
          r || ((r = Hp(o)), e.setClipPath(r)),
          Up(null, r, t, o, null, i, a, !1)
      }
    })(h, n, i, a, c),
    Up(e, h, n, i, Bp, a, c, !1)
  for (var p = 0; p < zp.length; p++) {
    var g = zp[p]
    if (g !== Vp) {
      var f = ag(i, g)
      Jp(g, h, 0, og(i, f, g), Bp)
    }
  }
  return (
    (function (e, t, n) {
      if (!e.isGroup) {
        var i = e,
          a = n.currentZ,
          o = n.currentZLevel
        ;(i.z = a), (i.zlevel = o)
        var r = t.z2
        null != r && (i.z2 = r || 0)
        for (var s = 0; s < zp.length; s++) Kp(i, t, zp[s])
      }
    })(h, i, a),
    'group' === i.type &&
      (function (e, t, n, i, a) {
        var o = i.children,
          r = o ? o.length : 0,
          s = i.$mergeChildren,
          l = 'byName' === s || i.diffChildrenByName,
          u = !1 === s
        if (!r && !l && !u) return
        if (l)
          return (
            (d = {
              api: e,
              oldChildren: t.children() || [],
              newChildren: o || [],
              dataIndex: n,
              seriesModel: a,
              group: t,
            }),
            void new oi(d.oldChildren, d.newChildren, rg, rg, d)
              .add(sg)
              .update(sg)
              .remove(lg)
              .execute()
          )
        var d
        u && t.removeAll()
        for (var c = 0; c < r; c++) o[c] && tg(e, t.childAt(c), n, o[c], a, t)
        for (var h = t.childCount() - 1; h >= c; h--) ug(t.childAt(h), a, t)
      })(e, h, n, i, a),
    s >= 0 ? o.replaceAt(h, s) : o.add(h),
    h
  )
}
function ng(e, t, n) {
  var i,
    a = bp(e),
    o = t.type,
    r = t.shape,
    s = t.style
  return (
    n.isUniversalTransitionEnabled() ||
    (null != o && o !== a.customGraphicType) ||
    ('path' === o &&
      (i = r) &&
      (ot(i, 'pathData') || ot(i, 'd')) &&
      dg(r) !== a.customPathData) ||
    ('image' === o && ot(s, 'image') && s.image !== a.customImagePath)
  )
}
function ig(e, n, i) {
  var a = n ? ag(e, n) : e,
    o = n ? og(e, a, 'emphasis') : e.style,
    r = e.type,
    s = a ? a.textConfig : null,
    l = e.textContent,
    u = l ? (n ? ag(l, n) : l) : null
  if (
    o &&
    (i.isLegacy ||
      (function (e, t, n, i) {
        return (
          e &&
          (e.legacy ||
            (!1 !== e.legacy &&
              !n &&
              !i &&
              'tspan' !== t &&
              ('text' === t || ot(e, 'text'))))
        )
      })(o, r, !!s, !!u))
  ) {
    i.isLegacy = !0
    var d = (function (e, n, i) {
      var a,
        o,
        r,
        s = e
      if ('text' === n) r = s
      else {
        ;(r = {}),
          ot(s, 'text') && (r.text = s.text),
          ot(s, 'rich') && (r.rich = s.rich),
          ot(s, 'textFill') && (r.fill = s.textFill),
          ot(s, 'textStroke') && (r.stroke = s.textStroke),
          ot(s, 'fontFamily') && (r.fontFamily = s.fontFamily),
          ot(s, 'fontSize') && (r.fontSize = s.fontSize),
          ot(s, 'fontStyle') && (r.fontStyle = s.fontStyle),
          ot(s, 'fontWeight') && (r.fontWeight = s.fontWeight),
          (o = { type: 'text', style: r, silent: !0 }),
          (a = {})
        var l = ot(s, 'textPosition')
        i
          ? (a.position = l ? s.textPosition : 'inside')
          : l && (a.position = s.textPosition),
          ot(s, 'textPosition') && (a.position = s.textPosition),
          ot(s, 'textOffset') && (a.offset = s.textOffset),
          ot(s, 'textRotation') && (a.rotation = s.textRotation),
          ot(s, 'textDistance') && (a.distance = s.textDistance)
      }
      return (
        $o(r, e),
        t(r.rich, function (e) {
          $o(e, e)
        }),
        { textConfig: a, textContent: o }
      )
    })(o, r, !n)
    !s && d.textConfig && (s = d.textConfig),
      !u && d.textContent && (u = d.textContent)
  }
  if (!n && u) {
    var c = u
    !c.type && (c.type = 'text')
  }
  var h = n ? i[n] : i.normal
  ;(h.cfg = s), (h.conOpt = u)
}
function ag(e, t) {
  return t ? (e ? e[t] : null) : e
}
function og(e, t, n) {
  var i = t && t.style
  return null == i && 'emphasis' === n && e && (i = e.styleEmphasis), i
}
function rg(e, t) {
  var n = e && e.name
  return null != n ? n : 'e\0\0' + t
}
function sg(e, t) {
  var n = this.context,
    i = null != e ? n.newChildren[e] : null,
    a = null != t ? n.oldChildren[t] : null
  tg(n.api, a, n.dataIndex, i, n.seriesModel, n.group)
}
function lg(e) {
  var t = this.context
  ug(t.oldChildren[e], t.seriesModel, t.group)
}
function ug(e, t, n) {
  if (e) {
    var i = bp(e).leaveToProps
    i
      ? Ee(e, i, t, {
          cb: function () {
            n.remove(e)
          },
        })
      : n.remove(e)
  }
}
function dg(e) {
  return e && (e.pathData || e.d)
}
function cg(e) {
  e.registerChartView(Xp), e.registerSeriesModel(wp)
}
export {
  Hs as BarChart,
  Bc as BoxplotChart,
  ch as CandlestickChart,
  cg as CustomChart,
  yh as EffectScatterChart,
  Kd as FunnelChart,
  Hd as GaugeChart,
  kd as GraphChart,
  Vh as HeatmapChart,
  ms as LineChart,
  Nh as LinesChart,
  Dl as MapChart,
  sc as ParallelChart,
  op as PictorialBarChart,
  ll as PieChart,
  Sl as RadarChart,
  Mc as SankeyChart,
  gl as ScatterChart,
  xp as SunburstChart,
  dp as ThemeRiverChart,
  du as TreeChart,
  qu as TreemapChart,
}
