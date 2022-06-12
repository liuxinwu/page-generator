var t = Object.defineProperty,
  e = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = (e, n, r) =>
    n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r)
import { r as s, q as u, R as c } from './vendor.41cc9ac2.js'
import { I as l } from './index.7cda04fe.js'
import './index.ea17f1ce.js'
import './dom.a861e6c5.js'
var h,
  f,
  p,
  d = {},
  y =
    ((h = function (t, e) {
      return (h =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e
          }) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        })(t, e)
    }),
    function (t, e) {
      function n() {
        this.constructor = t
      }
      h(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()))
    })
;((p = f || (f = {})).InvalidFile = 'InvalidFile'),
  (p.InvalidToken = 'InvalidToken'),
  (p.InvalidMetadata = 'InvalidMetadata'),
  (p.InvalidChunkSize = 'InvalidChunkSize'),
  (p.InvalidCustomVars = 'InvalidCustomVars'),
  (p.NotAvailableUploadHost = 'NotAvailableUploadHost'),
  (p.ReadCacheFailed = 'ReadCacheFailed'),
  (p.InvalidCacheData = 'InvalidCacheData'),
  (p.WriteCacheFailed = 'WriteCacheFailed'),
  (p.RemoveCacheFailed = 'RemoveCacheFailed'),
  (p.GetCanvasContextFailed = 'GetCanvasContextFailed'),
  (p.UnsupportedFileType = 'UnsupportedFileType'),
  (p.FileReaderReadFailed = 'FileReaderReadFailed'),
  (p.NotAvailableXMLHttpRequest = 'NotAvailableXMLHttpRequest'),
  (p.InvalidProgressEventTarget = 'InvalidProgressEventTarget'),
  (p.RequestError = 'RequestError')
var g = function (t, e) {
    ;(this.name = t), (this.message = e), (this.stack = new Error().stack)
  },
  v = (function (t) {
    function e(e, n, r, o) {
      var i = t.call(this, f.RequestError, r) || this
      return (
        (i.code = e), (i.reqId = n), (i.isRequestError = !0), (i.data = o), i
      )
    }
    return y(e, t), e
  })(g),
  m = (function (t) {
    function e(e, n) {
      return void 0 === n && (n = ''), t.call(this, 0, n, e) || this
    }
    return y(e, t), e
  })(v),
  b = (function () {
    function t(t, e) {
      ;(this.runTask = t),
        (this.limit = e),
        (this.queue = []),
        (this.processing = [])
    }
    return (
      (t.prototype.enqueue = function (t) {
        var e = this
        return new Promise(function (n, r) {
          e.queue.push({ task: t, resolve: n, reject: r }), e.check()
        })
      }),
      (t.prototype.run = function (t) {
        var e = this
        ;(this.queue = this.queue.filter(function (e) {
          return e !== t
        })),
          this.processing.push(t),
          this.runTask(t.task).then(
            function () {
              ;(e.processing = e.processing.filter(function (e) {
                return e !== t
              })),
                t.resolve(),
                e.check()
            },
            function (e) {
              return t.reject(e)
            }
          )
      }),
      (t.prototype.check = function () {
        var t = this,
          e = this.processing.length,
          n = this.limit - e
        this.queue.slice(0, n).forEach(function (e) {
          t.run(e)
        })
      }),
      t
    )
  })(),
  w = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e
          }) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        })(e, n)
    }
    return function (e, n) {
      function r() {
        this.constructor = e
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r()))
    }
  })(),
  k = function () {
    return (k =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        return t
      }).apply(this, arguments)
  },
  x = (function (t) {
    function e(e, n, r) {
      var o = t.call(this) || this
      return (
        (o.isStopped = !1),
        (o.destination =
          e && 'object' == typeof e
            ? e
            : k(
                k(k({}, e && { next: e }), n && { error: n }),
                r && { complete: r }
              )),
        o
      )
    }
    return (
      w(e, t),
      (e.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0), t.prototype.unsubscribe.call(this))
      }),
      (e.prototype.next = function (t) {
        !this.isStopped && this.destination.next && this.destination.next(t)
      }),
      (e.prototype.error = function (t) {
        !this.isStopped &&
          this.destination.error &&
          ((this.isStopped = !0), this.destination.error(t))
      }),
      (e.prototype.complete = function (t) {
        !this.isStopped &&
          this.destination.complete &&
          ((this.isStopped = !0), this.destination.complete(t))
      }),
      e
    )
  })(
    (function () {
      function t() {
        this.closed = !1
      }
      return (
        (t.prototype.unsubscribe = function () {
          this.closed ||
            ((this.closed = !0), this._unsubscribe && this._unsubscribe())
        }),
        (t.prototype.add = function (t) {
          this._unsubscribe = t
        }),
        t
      )
    })()
  ),
  C = (function () {
    function t(t) {
      this._subscribe = t
    }
    return (
      (t.prototype.subscribe = function (t, e, n) {
        var r = new x(t, e, n)
        return r.add(this._subscribe(r)), r
      }),
      t
    )
  })()
function S(t) {
  var e,
    n,
    r,
    o,
    i,
    a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    s = 0,
    u = 0,
    c = '',
    l = []
  if (!t) return t
  t = (function (t) {
    if (null == t) return ''
    var e,
      n,
      r,
      o = t + '',
      i = ''
    ;(e = n = 0), (r = o.length)
    for (var a = 0; a < r; a++) {
      var s = o.charCodeAt(a),
        u = null
      if (s < 128) n++
      else if (s > 127 && s < 2048)
        u = String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
      else if (((63488 & s) ^ 55296) > 0)
        u = String.fromCharCode(
          (s >> 12) | 224,
          ((s >> 6) & 63) | 128,
          (63 & s) | 128
        )
      else {
        if (((64512 & s) ^ 55296) > 0)
          throw new RangeError('Unmatched trail surrogate at ' + a)
        var c = o.charCodeAt(++a)
        if (((64512 & c) ^ 56320) > 0)
          throw new RangeError('Unmatched lead surrogate at ' + (a - 1))
        ;(s = ((1023 & s) << 10) + (1023 & c) + 65536),
          (u = String.fromCharCode(
            (s >> 18) | 240,
            ((s >> 12) & 63) | 128,
            ((s >> 6) & 63) | 128,
            (63 & s) | 128
          ))
      }
      null !== u && (n > e && (i += o.slice(e, n)), (i += u), (e = n = a + 1))
    }
    return n > e && (i += o.slice(e, r)), i
  })(t + '')
  do {
    ;(e =
      ((i =
        (t.charCodeAt(s++) << 16) |
        (t.charCodeAt(s++) << 8) |
        t.charCodeAt(s++)) >>
        18) &
      63),
      (n = (i >> 12) & 63),
      (r = (i >> 6) & 63),
      (o = 63 & i),
      (l[u++] = a.charAt(e) + a.charAt(n) + a.charAt(r) + a.charAt(o))
  } while (s < t.length)
  switch (((c = l.join('')), t.length % 3)) {
    case 1:
      c = c.slice(0, -2) + '=='
      break
    case 2:
      c = c.slice(0, -1) + '='
  }
  return c
}
function I(t) {
  var e,
    n,
    r,
    o,
    i,
    a,
    s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    u = 0,
    c = 0,
    l = []
  if (!t) return t
  t += ''
  do {
    ;(e =
      ((a =
        (s.indexOf(t.charAt(u++)) << 18) |
        (s.indexOf(t.charAt(u++)) << 12) |
        ((o = s.indexOf(t.charAt(u++))) << 6) |
        (i = s.indexOf(t.charAt(u++)))) >>
        16) &
      255),
      (n = (a >> 8) & 255),
      (r = 255 & a),
      (l[c++] =
        64 === o
          ? String.fromCharCode(e)
          : 64 === i
          ? String.fromCharCode(e, n)
          : String.fromCharCode(e, n, r))
  } while (u < t.length)
  return (function (t) {
    var e = [],
      n = 0,
      r = 0,
      o = 0
    for (t += ''; n < t.length; ) {
      ;(o = 0),
        (r = 255 & t.charCodeAt(n)) <= 191
          ? ((r &= 127), (o = 1))
          : r <= 223
          ? ((r &= 31), (o = 2))
          : r <= 239
          ? ((r &= 15), (o = 3))
          : ((r &= 7), (o = 4))
      for (var i = 1; i < o; ++i) r = (r << 6) | (63 & t.charCodeAt(i + n))
      4 === o
        ? ((r -= 65536),
          e.push(String.fromCharCode(55296 | ((r >> 10) & 1023))),
          e.push(String.fromCharCode(56320 | (1023 & r))))
        : e.push(String.fromCharCode(r)),
        (n += o)
    }
    return e.join('')
  })(l.join(''))
}
function O(t) {
  return (t = S(t)).replace(/\//g, '_').replace(/\+/g, '-')
}
var _,
  P = { exports: {} },
  A = (P.exports = (function (t) {
    var e = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ]
    function n(t, e) {
      var n = t[0],
        r = t[1],
        o = t[2],
        i = t[3]
      ;(r =
        ((((r +=
          ((((o =
            ((((o +=
              ((((i =
                ((((i +=
                  ((((n =
                    ((((n += (((r & o) | (~r & i)) + e[0] - 680876936) | 0) <<
                      7) |
                      (n >>> 25)) +
                      r) |
                    0) &
                    r) |
                    (~n & o)) +
                    e[1] -
                    389564586) |
                  0) <<
                  12) |
                  (i >>> 20)) +
                  n) |
                0) &
                n) |
                (~i & r)) +
                e[2] +
                606105819) |
              0) <<
              17) |
              (o >>> 15)) +
              i) |
            0) &
            i) |
            (~o & n)) +
            e[3] -
            1044525330) |
          0) <<
          22) |
          (r >>> 10)) +
          o) |
        0),
        (r =
          ((((r +=
            ((((o =
              ((((o +=
                ((((i =
                  ((((i +=
                    ((((n =
                      ((((n += (((r & o) | (~r & i)) + e[4] - 176418897) | 0) <<
                        7) |
                        (n >>> 25)) +
                        r) |
                      0) &
                      r) |
                      (~n & o)) +
                      e[5] +
                      1200080426) |
                    0) <<
                    12) |
                    (i >>> 20)) +
                    n) |
                  0) &
                  n) |
                  (~i & r)) +
                  e[6] -
                  1473231341) |
                0) <<
                17) |
                (o >>> 15)) +
                i) |
              0) &
              i) |
              (~o & n)) +
              e[7] -
              45705983) |
            0) <<
            22) |
            (r >>> 10)) +
            o) |
          0),
        (r =
          ((((r +=
            ((((o =
              ((((o +=
                ((((i =
                  ((((i +=
                    ((((n =
                      ((((n +=
                        (((r & o) | (~r & i)) + e[8] + 1770035416) | 0) <<
                        7) |
                        (n >>> 25)) +
                        r) |
                      0) &
                      r) |
                      (~n & o)) +
                      e[9] -
                      1958414417) |
                    0) <<
                    12) |
                    (i >>> 20)) +
                    n) |
                  0) &
                  n) |
                  (~i & r)) +
                  e[10] -
                  42063) |
                0) <<
                17) |
                (o >>> 15)) +
                i) |
              0) &
              i) |
              (~o & n)) +
              e[11] -
              1990404162) |
            0) <<
            22) |
            (r >>> 10)) +
            o) |
          0),
        (r =
          ((((r +=
            ((((o =
              ((((o +=
                ((((i =
                  ((((i +=
                    ((((n =
                      ((((n +=
                        (((r & o) | (~r & i)) + e[12] + 1804603682) | 0) <<
                        7) |
                        (n >>> 25)) +
                        r) |
                      0) &
                      r) |
                      (~n & o)) +
                      e[13] -
                      40341101) |
                    0) <<
                    12) |
                    (i >>> 20)) +
                    n) |
                  0) &
                  n) |
                  (~i & r)) +
                  e[14] -
                  1502002290) |
                0) <<
                17) |
                (o >>> 15)) +
                i) |
              0) &
              i) |
              (~o & n)) +
              e[15] +
              1236535329) |
            0) <<
            22) |
            (r >>> 10)) +
            o) |
          0),
        (r =
          ((((r +=
            ((((o =
              ((((o +=
                ((((i =
                  ((((i +=
                    ((((n =
                      ((((n += (((r & i) | (o & ~i)) + e[1] - 165796510) | 0) <<
                        5) |
                        (n >>> 27)) +
                        r) |
                      0) &
                      o) |
                      (r & ~o)) +
                      e[6] -
                      1069501632) |
                    0) <<
                    9) |
                    (i >>> 23)) +
                    n) |
                  0) &
                  r) |
                  (n & ~r)) +
                  e[11] +
                  643717713) |
                0) <<
                14) |
                (o >>> 18)) +
                i) |
              0) &
              n) |
              (i & ~n)) +
              e[0] -
              373897302) |
            0) <<
            20) |
            (r >>> 12)) +
            o) |
          0),
        (r =
          ((((r +=
            ((((o =
              ((((o +=
                ((((i =
                  ((((i +=
                    ((((n =
                      ((((n += (((r & i) | (o & ~i)) + e[5] - 701558691) | 0) <<
                        5) |
                        (n >>> 27)) +
                        r) |
                      0) &
                      o) |
                      (r & ~o)) +
                      e[10] +
                      38016083) |
                    0) <<
                    9) |
                    (i >>> 23)) +
                    n) |
                  0) &
                  r) |
                  (n & ~r)) +
                  e[15] -
                  660478335) |
                0) <<
                14) |
                (o >>> 18)) +
                i) |
              0) &
              n) |
              (i & ~n)) +
              e[4] -
              405537848) |
            0) <<
            20) |
            (r >>> 12)) +
            o) |
          0),
        (r =
          ((((r +=
            ((((o =
              ((((o +=
                ((((i =
                  ((((i +=
                    ((((n =
                      ((((n += (((r & i) | (o & ~i)) + e[9] + 568446438) | 0) <<
                        5) |
                        (n >>> 27)) +
                        r) |
                      0) &
                      o) |
                      (r & ~o)) +
                      e[14] -
                      1019803690) |
                    0) <<
                    9) |
                    (i >>> 23)) +
                    n) |
                  0) &
                  r) |
                  (n & ~r)) +
                  e[3] -
                  187363961) |
                0) <<
                14) |
                (o >>> 18)) +
                i) |
              0) &
              n) |
              (i & ~n)) +
              e[8] +
              1163531501) |
            0) <<
            20) |
            (r >>> 12)) +
            o) |
          0),
        (r =
          ((((r +=
            ((((o =
              ((((o +=
                ((((i =
                  ((((i +=
                    ((((n =
                      ((((n +=
                        (((r & i) | (o & ~i)) + e[13] - 1444681467) | 0) <<
                        5) |
                        (n >>> 27)) +
                        r) |
                      0) &
                      o) |
                      (r & ~o)) +
                      e[2] -
                      51403784) |
                    0) <<
                    9) |
                    (i >>> 23)) +
                    n) |
                  0) &
                  r) |
                  (n & ~r)) +
                  e[7] +
                  1735328473) |
                0) <<
                14) |
                (o >>> 18)) +
                i) |
              0) &
              n) |
              (i & ~n)) +
              e[12] -
              1926607734) |
            0) <<
            20) |
            (r >>> 12)) +
            o) |
          0),
        (r =
          ((((r +=
            (((o =
              ((((o +=
                (((i =
                  ((((i +=
                    (((n =
                      ((((n += ((r ^ o ^ i) + e[5] - 378558) | 0) << 4) |
                        (n >>> 28)) +
                        r) |
                      0) ^
                      r ^
                      o) +
                      e[8] -
                      2022574463) |
                    0) <<
                    11) |
                    (i >>> 21)) +
                    n) |
                  0) ^
                  n ^
                  r) +
                  e[11] +
                  1839030562) |
                0) <<
                16) |
                (o >>> 16)) +
                i) |
              0) ^
              i ^
              n) +
              e[14] -
              35309556) |
            0) <<
            23) |
            (r >>> 9)) +
            o) |
          0),
        (r =
          ((((r +=
            (((o =
              ((((o +=
                (((i =
                  ((((i +=
                    (((n =
                      ((((n += ((r ^ o ^ i) + e[1] - 1530992060) | 0) << 4) |
                        (n >>> 28)) +
                        r) |
                      0) ^
                      r ^
                      o) +
                      e[4] +
                      1272893353) |
                    0) <<
                    11) |
                    (i >>> 21)) +
                    n) |
                  0) ^
                  n ^
                  r) +
                  e[7] -
                  155497632) |
                0) <<
                16) |
                (o >>> 16)) +
                i) |
              0) ^
              i ^
              n) +
              e[10] -
              1094730640) |
            0) <<
            23) |
            (r >>> 9)) +
            o) |
          0),
        (r =
          ((((r +=
            (((o =
              ((((o +=
                (((i =
                  ((((i +=
                    (((n =
                      ((((n += ((r ^ o ^ i) + e[13] + 681279174) | 0) << 4) |
                        (n >>> 28)) +
                        r) |
                      0) ^
                      r ^
                      o) +
                      e[0] -
                      358537222) |
                    0) <<
                    11) |
                    (i >>> 21)) +
                    n) |
                  0) ^
                  n ^
                  r) +
                  e[3] -
                  722521979) |
                0) <<
                16) |
                (o >>> 16)) +
                i) |
              0) ^
              i ^
              n) +
              e[6] +
              76029189) |
            0) <<
            23) |
            (r >>> 9)) +
            o) |
          0),
        (r =
          ((((r +=
            (((o =
              ((((o +=
                (((i =
                  ((((i +=
                    (((n =
                      ((((n += ((r ^ o ^ i) + e[9] - 640364487) | 0) << 4) |
                        (n >>> 28)) +
                        r) |
                      0) ^
                      r ^
                      o) +
                      e[12] -
                      421815835) |
                    0) <<
                    11) |
                    (i >>> 21)) +
                    n) |
                  0) ^
                  n ^
                  r) +
                  e[15] +
                  530742520) |
                0) <<
                16) |
                (o >>> 16)) +
                i) |
              0) ^
              i ^
              n) +
              e[2] -
              995338651) |
            0) <<
            23) |
            (r >>> 9)) +
            o) |
          0),
        (r =
          ((((r +=
            (((i =
              ((((i +=
                ((r ^
                  ((n =
                    ((((n += ((o ^ (r | ~i)) + e[0] - 198630844) | 0) << 6) |
                      (n >>> 26)) +
                      r) |
                    0) |
                    ~o)) +
                  e[7] +
                  1126891415) |
                0) <<
                10) |
                (i >>> 22)) +
                n) |
              0) ^
              ((o =
                ((((o += ((n ^ (i | ~r)) + e[14] - 1416354905) | 0) << 15) |
                  (o >>> 17)) +
                  i) |
                0) |
                ~n)) +
              e[5] -
              57434055) |
            0) <<
            21) |
            (r >>> 11)) +
            o) |
          0),
        (r =
          ((((r +=
            (((i =
              ((((i +=
                ((r ^
                  ((n =
                    ((((n += ((o ^ (r | ~i)) + e[12] + 1700485571) | 0) << 6) |
                      (n >>> 26)) +
                      r) |
                    0) |
                    ~o)) +
                  e[3] -
                  1894986606) |
                0) <<
                10) |
                (i >>> 22)) +
                n) |
              0) ^
              ((o =
                ((((o += ((n ^ (i | ~r)) + e[10] - 1051523) | 0) << 15) |
                  (o >>> 17)) +
                  i) |
                0) |
                ~n)) +
              e[1] -
              2054922799) |
            0) <<
            21) |
            (r >>> 11)) +
            o) |
          0),
        (r =
          ((((r +=
            (((i =
              ((((i +=
                ((r ^
                  ((n =
                    ((((n += ((o ^ (r | ~i)) + e[8] + 1873313359) | 0) << 6) |
                      (n >>> 26)) +
                      r) |
                    0) |
                    ~o)) +
                  e[15] -
                  30611744) |
                0) <<
                10) |
                (i >>> 22)) +
                n) |
              0) ^
              ((o =
                ((((o += ((n ^ (i | ~r)) + e[6] - 1560198380) | 0) << 15) |
                  (o >>> 17)) +
                  i) |
                0) |
                ~n)) +
              e[13] +
              1309151649) |
            0) <<
            21) |
            (r >>> 11)) +
            o) |
          0),
        (r =
          ((((r +=
            (((i =
              ((((i +=
                ((r ^
                  ((n =
                    ((((n += ((o ^ (r | ~i)) + e[4] - 145523070) | 0) << 6) |
                      (n >>> 26)) +
                      r) |
                    0) |
                    ~o)) +
                  e[11] -
                  1120210379) |
                0) <<
                10) |
                (i >>> 22)) +
                n) |
              0) ^
              ((o =
                ((((o += ((n ^ (i | ~r)) + e[2] + 718787259) | 0) << 15) |
                  (o >>> 17)) +
                  i) |
                0) |
                ~n)) +
              e[9] -
              343485551) |
            0) <<
            21) |
            (r >>> 11)) +
            o) |
          0),
        (t[0] = (n + t[0]) | 0),
        (t[1] = (r + t[1]) | 0),
        (t[2] = (o + t[2]) | 0),
        (t[3] = (i + t[3]) | 0)
    }
    function r(t) {
      var e,
        n = []
      for (e = 0; e < 64; e += 4)
        n[e >> 2] =
          t.charCodeAt(e) +
          (t.charCodeAt(e + 1) << 8) +
          (t.charCodeAt(e + 2) << 16) +
          (t.charCodeAt(e + 3) << 24)
      return n
    }
    function o(t) {
      var e,
        n = []
      for (e = 0; e < 64; e += 4)
        n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24)
      return n
    }
    function i(t) {
      var e,
        o,
        i,
        a,
        s,
        u,
        c = t.length,
        l = [1732584193, -271733879, -1732584194, 271733878]
      for (e = 64; e <= c; e += 64) n(l, r(t.substring(e - 64, e)))
      for (
        o = (t = t.substring(e - 64)).length,
          i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          e = 0;
        e < o;
        e += 1
      )
        i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3)
      if (((i[e >> 2] |= 128 << (e % 4 << 3)), e > 55))
        for (n(l, i), e = 0; e < 16; e += 1) i[e] = 0
      return (
        (a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/)),
        (s = parseInt(a[2], 16)),
        (u = parseInt(a[1], 16) || 0),
        (i[14] = s),
        (i[15] = u),
        n(l, i),
        l
      )
    }
    function a(t) {
      var e,
        r,
        i,
        a,
        s,
        u,
        c = t.length,
        l = [1732584193, -271733879, -1732584194, 271733878]
      for (e = 64; e <= c; e += 64) n(l, o(t.subarray(e - 64, e)))
      for (
        r = (t = e - 64 < c ? t.subarray(e - 64) : new Uint8Array(0)).length,
          i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          e = 0;
        e < r;
        e += 1
      )
        i[e >> 2] |= t[e] << (e % 4 << 3)
      if (((i[e >> 2] |= 128 << (e % 4 << 3)), e > 55))
        for (n(l, i), e = 0; e < 16; e += 1) i[e] = 0
      return (
        (a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/)),
        (s = parseInt(a[2], 16)),
        (u = parseInt(a[1], 16) || 0),
        (i[14] = s),
        (i[15] = u),
        n(l, i),
        l
      )
    }
    function s(t) {
      var n,
        r = ''
      for (n = 0; n < 4; n += 1)
        r += e[(t >> (8 * n + 4)) & 15] + e[(t >> (8 * n)) & 15]
      return r
    }
    function u(t) {
      var e
      for (e = 0; e < t.length; e += 1) t[e] = s(t[e])
      return t.join('')
    }
    function c(t) {
      return (
        /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t
      )
    }
    function l(t, e) {
      var n,
        r = t.length,
        o = new ArrayBuffer(r),
        i = new Uint8Array(o)
      for (n = 0; n < r; n += 1) i[n] = t.charCodeAt(n)
      return e ? i : o
    }
    function h(t) {
      return String.fromCharCode.apply(null, new Uint8Array(t))
    }
    function f(t, e, n) {
      var r = new Uint8Array(t.byteLength + e.byteLength)
      return (
        r.set(new Uint8Array(t)),
        r.set(new Uint8Array(e), t.byteLength),
        n ? r : r.buffer
      )
    }
    function p(t) {
      var e,
        n = [],
        r = t.length
      for (e = 0; e < r - 1; e += 2) n.push(parseInt(t.substr(e, 2), 16))
      return String.fromCharCode.apply(String, n)
    }
    function d() {
      this.reset()
    }
    return (
      u(i('hello')),
      'undefined' == typeof ArrayBuffer ||
        ArrayBuffer.prototype.slice ||
        (function () {
          function e(t, e) {
            return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e)
          }
          ArrayBuffer.prototype.slice = function (n, r) {
            var o,
              i,
              a,
              s,
              u = this.byteLength,
              c = e(n, u),
              l = u
            return (
              r !== t && (l = e(r, u)),
              c > l
                ? new ArrayBuffer(0)
                : ((o = l - c),
                  (i = new ArrayBuffer(o)),
                  (a = new Uint8Array(i)),
                  (s = new Uint8Array(this, c, o)),
                  a.set(s),
                  i)
            )
          }
        })(),
      (d.prototype.append = function (t) {
        return this.appendBinary(c(t)), this
      }),
      (d.prototype.appendBinary = function (t) {
        ;(this._buff += t), (this._length += t.length)
        var e,
          o = this._buff.length
        for (e = 64; e <= o; e += 64)
          n(this._hash, r(this._buff.substring(e - 64, e)))
        return (this._buff = this._buff.substring(e - 64)), this
      }),
      (d.prototype.end = function (t) {
        var e,
          n,
          r = this._buff,
          o = r.length,
          i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (e = 0; e < o; e += 1) i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3)
        return (
          this._finish(i, o),
          (n = u(this._hash)),
          t && (n = p(n)),
          this.reset(),
          n
        )
      }),
      (d.prototype.reset = function () {
        return (
          (this._buff = ''),
          (this._length = 0),
          (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
          this
        )
      }),
      (d.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice(),
        }
      }),
      (d.prototype.setState = function (t) {
        return (
          (this._buff = t.buff),
          (this._length = t.length),
          (this._hash = t.hash),
          this
        )
      }),
      (d.prototype.destroy = function () {
        delete this._hash, delete this._buff, delete this._length
      }),
      (d.prototype._finish = function (t, e) {
        var r,
          o,
          i,
          a = e
        if (((t[a >> 2] |= 128 << (a % 4 << 3)), a > 55))
          for (n(this._hash, t), a = 0; a < 16; a += 1) t[a] = 0
        ;(r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/)),
          (o = parseInt(r[2], 16)),
          (i = parseInt(r[1], 16) || 0),
          (t[14] = o),
          (t[15] = i),
          n(this._hash, t)
      }),
      (d.hash = function (t, e) {
        return d.hashBinary(c(t), e)
      }),
      (d.hashBinary = function (t, e) {
        var n = u(i(t))
        return e ? p(n) : n
      }),
      (d.ArrayBuffer = function () {
        this.reset()
      }),
      (d.ArrayBuffer.prototype.append = function (t) {
        var e,
          r = f(this._buff.buffer, t, !0),
          i = r.length
        for (this._length += t.byteLength, e = 64; e <= i; e += 64)
          n(this._hash, o(r.subarray(e - 64, e)))
        return (
          (this._buff =
            e - 64 < i
              ? new Uint8Array(r.buffer.slice(e - 64))
              : new Uint8Array(0)),
          this
        )
      }),
      (d.ArrayBuffer.prototype.end = function (t) {
        var e,
          n,
          r = this._buff,
          o = r.length,
          i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (e = 0; e < o; e += 1) i[e >> 2] |= r[e] << (e % 4 << 3)
        return (
          this._finish(i, o),
          (n = u(this._hash)),
          t && (n = p(n)),
          this.reset(),
          n
        )
      }),
      (d.ArrayBuffer.prototype.reset = function () {
        return (
          (this._buff = new Uint8Array(0)),
          (this._length = 0),
          (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
          this
        )
      }),
      (d.ArrayBuffer.prototype.getState = function () {
        var t = d.prototype.getState.call(this)
        return (t.buff = h(t.buff)), t
      }),
      (d.ArrayBuffer.prototype.setState = function (t) {
        return (t.buff = l(t.buff, !0)), d.prototype.setState.call(this, t)
      }),
      (d.ArrayBuffer.prototype.destroy = d.prototype.destroy),
      (d.ArrayBuffer.prototype._finish = d.prototype._finish),
      (d.ArrayBuffer.hash = function (t, e) {
        var n = u(a(new Uint8Array(t)))
        return e ? p(n) : n
      }),
      d
    )
  })()),
  U = function () {
    return (U =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        return t
      }).apply(this, arguments)
  },
  E = function (t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(t) {
        try {
          u(r.next(t))
        } catch (e) {
          i(e)
        }
      }
      function s(t) {
        try {
          u(r.throw(t))
        } catch (e) {
          i(e)
        }
      }
      function u(t) {
        var e
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e)
                })).then(a, s)
      }
      u((r = r.apply(t, e || [])).next())
    })
  },
  z = function (t, e) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (i = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this
        }),
      i
    )
    function s(i) {
      return function (s) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i
                  break
                case 4:
                  return a.label++, { value: i[1], done: !1 }
                case 5:
                  a.label++, (r = i[1]), (i = [0])
                  continue
                case 7:
                  ;(i = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1]
                    break
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    ;(a.label = o[1]), (o = i)
                    break
                  }
                  if (o && a.label < o[2]) {
                    ;(a.label = o[2]), a.ops.push(i)
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              i = e.call(t, a)
            } catch (s) {
              ;(i = [6, s]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & i[0]) throw i[1]
          return { value: i[0] ? i[1] : void 0, done: !0 }
        })([i, s])
      }
    }
  },
  j = Math.pow(1024, 2)
function R(t, e) {
  try {
    localStorage.removeItem(t)
  } catch (n) {
    e.warn(new g(f.RemoveCacheFailed, 'removeLocalFileInfo failed. key: ' + t))
  }
}
function F(t) {
  return { Authorization: 'UpToken ' + t }
}
function q(t) {
  var e = F(t)
  return U({ 'content-type': 'application/octet-stream' }, e)
}
function T(t) {
  var e = F(t)
  return U({ 'content-type': 'application/json' }, e)
}
function L() {
  if (window.XMLHttpRequest) return new XMLHttpRequest()
  if (window.ActiveXObject) return new window.ActiveXObject('Microsoft.XMLHTTP')
  throw new g(
    f.NotAvailableXMLHttpRequest,
    'the current environment does not support.'
  )
}
function H(t) {
  return E(this, void 0, void 0, function () {
    var e, n
    return z(this, function (r) {
      switch (r.label) {
        case 0:
          return [4, N(t)]
        case 1:
          return (
            (e = r.sent()), (n = new A.ArrayBuffer()).append(e), [2, n.end()]
          )
      }
    })
  })
}
function N(t) {
  return new Promise(function (e, n) {
    var r = new FileReader()
    ;(r.onload = function (t) {
      if (t.target) {
        var r = t.target.result
        e(r)
      } else
        n(
          new g(
            f.InvalidProgressEventTarget,
            'progress event target is undefined'
          )
        )
    }),
      (r.onerror = function () {
        n(new g(f.FileReaderReadFailed, 'fileReader read failed'))
      }),
      r.readAsArrayBuffer(t)
  })
}
function M(t, e) {
  return new Promise(function (n, r) {
    var o = L()
    if ((o.open(e.method, t), e.onCreate && e.onCreate(o), e.headers)) {
      var i = e.headers
      Object.keys(i).forEach(function (t) {
        o.setRequestHeader(t, i[t])
      })
    }
    o.upload.addEventListener('progress', function (t) {
      t.lengthComputable &&
        e.onProgress &&
        e.onProgress({ loaded: t.loaded, total: t.total })
    }),
      (o.onreadystatechange = function () {
        var t = o.responseText
        if (4 === o.readyState) {
          var e = o.getResponseHeader('x-reqId') || ''
          if (0 !== o.status)
            if (200 === o.status)
              try {
                n({ data: JSON.parse(t), reqId: e })
              } catch (s) {
                r(s)
              }
            else {
              var i = 'xhr request failed, code: ' + o.status
              t && (i += ' response: ' + t)
              var a = void 0
              try {
                a = JSON.parse(t)
              } catch (u) {}
              r(new v(o.status, e, i, a))
            }
          else r(new m('network error.', e))
        }
      }),
      o.send(e.body)
  })
}
function D(t) {
  if (t && t.match) {
    var e = t.match(/(^https?)/)
    if (!e) return ''
    var n = e[1]
    return (e = t.match(/^https?:\/\/([^:^/]*):(\d*)/))
      ? e[2]
      : 'http' === n
      ? '80'
      : '443'
  }
  return ''
}
function B(t) {
  if (t && t.match) {
    var e = t.match(/^https?:\/\/([^:^/]*)/)
    return e ? e[1] : ''
  }
  return ''
}
function V(t) {
  if (!t) throw new g(f.InvalidToken, 'invalid token.')
  var e = t.split(':')
  if (1 === e.length) throw new g(f.InvalidToken, 'invalid token segments.')
  var n = e.length > 3 ? e[1] : e[0]
  if (!n) throw new g(f.InvalidToken, 'missing assess key field.')
  var r = null
  try {
    r = JSON.parse(I(e[e.length - 1].replace(/_/g, '/').replace(/-/g, '+')))
  } catch (i) {
    throw new g(f.InvalidToken, 'token parse failed.')
  }
  if (null == r) throw new g(f.InvalidToken, 'putPolicy is null.')
  if (null == r.scope) throw new g(f.InvalidToken, 'scope field is null.')
  var o = r.scope.split(':')[0]
  if (!o) throw new g(f.InvalidToken, 'resolve bucketName failed.')
  return { assessKey: n, bucketName: o, scope: r.scope }
}
var G,
  X = 'z1',
  J = 'z2',
  K = 'na0',
  W = 'as0',
  Z = 'cn-east-2',
  $ =
    (((_ = {})['z0'] = {
      srcUphost: ['up.qiniup.com'],
      cdnUphost: ['upload.qiniup.com'],
    }),
    (_[X] = {
      srcUphost: ['up-z1.qiniup.com'],
      cdnUphost: ['upload-z1.qiniup.com'],
    }),
    (_[J] = {
      srcUphost: ['up-z2.qiniup.com'],
      cdnUphost: ['upload-z2.qiniup.com'],
    }),
    (_[K] = {
      srcUphost: ['up-na0.qiniup.com'],
      cdnUphost: ['upload-na0.qiniup.com'],
    }),
    (_[W] = {
      srcUphost: ['up-as0.qiniup.com'],
      cdnUphost: ['upload-as0.qiniup.com'],
    }),
    (_[Z] = {
      srcUphost: ['up-cn-east-2.qiniup.com'],
      cdnUphost: ['upload-cn-east-2.qiniup.com'],
    }),
    _),
  Q = function (t) {
    switch (typeof t) {
      case 'string':
        return t
      case 'boolean':
        return t ? 'true' : 'false'
      case 'number':
        return isFinite(t) ? t : ''
      default:
        return ''
    }
  }
G = function (t, e, n, r) {
  return (
    (e = e || '&'),
    (n = n || '='),
    null === t && (t = void 0),
    'object' == typeof t
      ? Object.keys(t)
          .map(function (r) {
            var o = encodeURIComponent(Q(r)) + n
            return Array.isArray(t[r])
              ? t[r]
                  .map(function (t) {
                    return o + encodeURIComponent(Q(t))
                  })
                  .join(e)
              : o + encodeURIComponent(Q(t[r]))
          })
          .filter(Boolean)
          .join(e)
      : r
      ? encodeURIComponent(Q(r)) + n + encodeURIComponent(Q(t))
      : ''
  )
}
var Y = function () {
    return (Y =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        return t
      }).apply(this, arguments)
  },
  tt = function (t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(t) {
        try {
          u(r.next(t))
        } catch (e) {
          i(e)
        }
      }
      function s(t) {
        try {
          u(r.throw(t))
        } catch (e) {
          i(e)
        }
      }
      function u(t) {
        var e
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e)
                })).then(a, s)
      }
      u((r = r.apply(t, e || [])).next())
    })
  },
  et = function (t, e) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (i = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this
        }),
      i
    )
    function s(i) {
      return function (s) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i
                  break
                case 4:
                  return a.label++, { value: i[1], done: !1 }
                case 5:
                  a.label++, (r = i[1]), (i = [0])
                  continue
                case 7:
                  ;(i = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1]
                    break
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    ;(a.label = o[1]), (o = i)
                    break
                  }
                  if (o && a.label < o[2]) {
                    ;(a.label = o[2]), a.ops.push(i)
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              i = e.call(t, a)
            } catch (s) {
              ;(i = [6, s]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & i[0]) throw i[1]
          return { value: i[0] ? i[1] : void 0, done: !0 }
        })([i, s])
      }
    }
  }
function nt(t, e, n) {
  return tt(this, void 0, void 0, function () {
    var r
    return et(this, function (o) {
      return (
        (r = G({ ak: t, bucket: e })),
        [2, M(n + '://api.qiniu.com/v2/query?' + r, { method: 'GET' })]
      )
    })
  })
}
function rt(t, e, n) {
  var r = n.url,
    o = n.id
  return (
    r +
    '/buckets/' +
    t +
    '/objects/' +
    (null != e ? O(e) : '~') +
    '/uploads/' +
    o
  )
}
function ot(t, e, n, r, o) {
  return M(
    rt(V(t).bucketName, e, r) + '/' + n,
    Y(Y({}, o), { method: 'PUT', headers: q(t) })
  )
}
var it = function () {
    return (it =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        return t
      }).apply(this, arguments)
  },
  at = function (t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(t) {
        try {
          u(r.next(t))
        } catch (e) {
          i(e)
        }
      }
      function s(t) {
        try {
          u(r.throw(t))
        } catch (e) {
          i(e)
        }
      }
      function u(t) {
        var e
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e)
                })).then(a, s)
      }
      u((r = r.apply(t, e || [])).next())
    })
  },
  st = function (t, e) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (i = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this
        }),
      i
    )
    function s(i) {
      return function (s) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i
                  break
                case 4:
                  return a.label++, { value: i[1], done: !1 }
                case 5:
                  a.label++, (r = i[1]), (i = [0])
                  continue
                case 7:
                  ;(i = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1]
                    break
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    ;(a.label = o[1]), (o = i)
                    break
                  }
                  if (o && a.label < o[2]) {
                    ;(a.label = o[2]), a.ops.push(i)
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              i = e.call(t, a)
            } catch (s) {
              ;(i = [6, s]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & i[0]) throw i[1]
          return { value: i[0] ? i[1] : void 0, done: !0 }
        })([i, s])
      }
    }
  },
  ut = function (t, e) {
    var n = 'function' == typeof Symbol && t[Symbol.iterator]
    if (!n) return t
    var r,
      o,
      i = n.call(t),
      a = []
    try {
      for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
        a.push(r.value)
    } catch (s) {
      o = { error: s }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return a
  },
  ct = [0, 502, 503, 504, 599],
  lt = (function () {
    for (var t = [], e = 0; e < arguments.length; e++)
      t = t.concat(ut(arguments[e]))
    return t
  })(ct, [612]),
  ht = Math.pow(1024, 3),
  ft = (function () {
    function t(t, e, n, r) {
      ;(this.hostPool = n),
        (this.logger = r),
        (this.aborted = !1),
        (this.retryCount = 0),
        (this.xhrList = []),
        (this.config = t.config),
        r.info('config inited.', this.config),
        (this.putExtra = it({ fname: '' }, t.putExtra)),
        r.info('putExtra inited.', this.putExtra),
        (this.key = t.key),
        (this.file = t.file),
        (this.token = t.token),
        (this.onData = e.onData),
        (this.onError = e.onError),
        (this.onComplete = e.onComplete)
      try {
        var o = V(this.token)
        ;(this.bucketName = o.bucketName), (this.assessKey = o.assessKey)
      } catch (i) {
        r.error('get putPolicy from token failed.', i), this.onError(i)
      }
    }
    return (
      (t.prototype.checkAndUpdateUploadHost = function () {
        return at(this, void 0, void 0, function () {
          var t
          return st(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  this.logger.info('get available upload host.'),
                  [
                    4,
                    this.hostPool.getUp(
                      this.assessKey,
                      this.bucketName,
                      this.config.upprotocol
                    ),
                  ]
                )
              case 1:
                if (null == (t = e.sent()))
                  throw new g(
                    f.NotAvailableUploadHost,
                    'no available upload host.'
                  )
                return (
                  null != this.uploadHost && this.uploadHost.host !== t.host
                    ? this.logger.warn(
                        'host switches from ' +
                          this.uploadHost.host +
                          ' to ' +
                          t.host +
                          '.'
                      )
                    : this.logger.info('use host ' + t.host + '.'),
                  (this.uploadHost = t),
                  [2]
                )
            }
          })
        })
      }),
      (t.prototype.checkAndUnfreezeHost = function () {
        this.logger.info('check unfreeze host.'),
          null != this.uploadHost &&
            this.uploadHost.isFrozen() &&
            (this.logger.warn(this.uploadHost.host + ' will be unfrozen.'),
            this.uploadHost.unfreeze())
      }),
      (t.prototype.checkAndFreezeHost = function (t) {
        this.logger.info('check freeze host.'),
          t instanceof v &&
            null != this.uploadHost &&
            ct.includes(t.code) &&
            (this.logger.warn(
              this.uploadHost.host + ' will be temporarily frozen.'
            ),
            this.uploadHost.freeze())
      }),
      (t.prototype.handleError = function (t) {
        this.logger.error(t.message), this.onError(t)
      }),
      (t.prototype.putFile = function () {
        return at(this, void 0, void 0, function () {
          var t, e, n, r, o
          return st(this, function (i) {
            switch (i.label) {
              case 0:
                if (
                  ((this.aborted = !1),
                  this.putExtra.fname ||
                    (this.logger.info('use file.name as fname.'),
                    (this.putExtra.fname = this.file.name)),
                  this.file.size > 1e4 * ht)
                )
                  return (
                    this.handleError(
                      new g(
                        f.InvalidFile,
                        'file size exceed maximum value 10000G'
                      )
                    ),
                    [2]
                  )
                if (
                  this.putExtra.customVars &&
                  ((a = this.putExtra.customVars),
                  !Object.keys(a).every(function (t) {
                    return 0 === t.indexOf('x:')
                  }))
                )
                  return (
                    this.handleError(
                      new g(
                        f.InvalidCustomVars,
                        'customVars key should start width x:'
                      )
                    ),
                    [2]
                  )
                if (
                  this.putExtra.metadata &&
                  !(function (t) {
                    return Object.keys(t).every(function (t) {
                      return 0 === t.indexOf('x-qn-meta-')
                    })
                  })(this.putExtra.metadata)
                )
                  return (
                    this.handleError(
                      new g(
                        f.InvalidMetadata,
                        'metadata key should start with x-qn-meta-'
                      )
                    ),
                    [2]
                  )
                i.label = 1
              case 1:
                return (
                  i.trys.push([1, 4, , 5]),
                  (this.uploadAt = new Date().getTime()),
                  [4, this.checkAndUpdateUploadHost()]
                )
              case 2:
                return i.sent(), [4, this.run()]
              case 3:
                return (
                  (t = i.sent()),
                  this.onComplete(t.data),
                  this.checkAndUnfreezeHost(),
                  this.sendLog(t.reqId, 200),
                  [2]
                )
              case 4:
                return (
                  (e = i.sent()),
                  this.logger.error(e),
                  this.clear(),
                  e instanceof v &&
                  ((n = this.aborted ? '' : e.reqId),
                  (r = this.aborted ? -2 : e.code),
                  this.sendLog(n, r),
                  this.checkAndFreezeHost(e),
                  (o = ++this.retryCount <= this.config.retryCount),
                  !this.aborted && lt.includes(e.code) && o)
                    ? (this.logger.warn(
                        'error auto retry: ' +
                          this.retryCount +
                          '/' +
                          this.config.retryCount +
                          '.'
                      ),
                      this.putFile(),
                      [2])
                    : (this.onError(e), [3, 5])
                )
              case 5:
                return [2]
            }
            var a
          })
        })
      }),
      (t.prototype.clear = function () {
        this.logger.info('start cleaning all xhr.'),
          this.xhrList.forEach(function (t) {
            ;(t.onreadystatechange = null), t.abort()
          }),
          this.logger.info('cleanup completed.'),
          (this.xhrList = [])
      }),
      (t.prototype.stop = function () {
        this.logger.info('stop.'), this.clear(), (this.aborted = !0)
      }),
      (t.prototype.addXhr = function (t) {
        this.xhrList.push(t)
      }),
      (t.prototype.sendLog = function (t, e) {
        var n, r
        this.logger.report({
          code: e,
          reqId: t,
          remoteIp: '',
          upType: 'jssdk-h5',
          size: this.file.size,
          time: Math.floor(this.uploadAt / 1e3),
          port: D(
            null === (n = this.uploadHost) || void 0 === n ? void 0 : n.getUrl()
          ),
          host: B(
            null === (r = this.uploadHost) || void 0 === r ? void 0 : r.getUrl()
          ),
          bytesSent: this.progress ? this.progress.total.loaded : 0,
          duration: Math.floor((new Date().getTime() - this.uploadAt) / 1e3),
        })
      }),
      (t.prototype.getProgressInfoItem = function (t, e, n) {
        return it(
          { size: e, loaded: t, percent: (t / e) * 100 },
          null == n ? {} : { fromCache: n }
        )
      }),
      t
    )
  })(),
  pt = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e
          }) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        })(e, n)
    }
    return function (e, n) {
      function r() {
        this.constructor = e
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r()))
    }
  })(),
  dt = function () {
    return (dt =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        return t
      }).apply(this, arguments)
  },
  yt = function (t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(t) {
        try {
          u(r.next(t))
        } catch (e) {
          i(e)
        }
      }
      function s(t) {
        try {
          u(r.throw(t))
        } catch (e) {
          i(e)
        }
      }
      function u(t) {
        var e
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e)
                })).then(a, s)
      }
      u((r = r.apply(t, e || [])).next())
    })
  },
  gt = function (t, e) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (i = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this
        }),
      i
    )
    function s(i) {
      return function (s) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i
                  break
                case 4:
                  return a.label++, { value: i[1], done: !1 }
                case 5:
                  a.label++, (r = i[1]), (i = [0])
                  continue
                case 7:
                  ;(i = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1]
                    break
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    ;(a.label = o[1]), (o = i)
                    break
                  }
                  if (o && a.label < o[2]) {
                    ;(a.label = o[2]), a.ops.push(i)
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              i = e.call(t, a)
            } catch (s) {
              ;(i = [6, s]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & i[0]) throw i[1]
          return { value: i[0] ? i[1] : void 0, done: !0 }
        })([i, s])
      }
    }
  }
var vt = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      pt(e, t),
      (e.prototype.run = function () {
        return yt(this, void 0, void 0, function () {
          var t,
            e,
            n,
            r,
            o,
            i = this
          return gt(this, function (a) {
            switch (a.label) {
              case 0:
                if (
                  (this.logger.info('start run Resume.'),
                  !this.config.chunkSize ||
                    ((s = this.config.chunkSize),
                    !/^[1-9]\d*$/.test(String(s))))
                )
                  throw new g(
                    f.InvalidChunkSize,
                    'chunkSize must be a positive integer'
                  )
                if (this.config.chunkSize > 1024)
                  throw new g(
                    f.InvalidChunkSize,
                    'chunkSize maximum value is 1024'
                  )
                return [4, this.initBeforeUploadChunks()]
              case 1:
                a.sent(),
                  (t = new b(function (t) {
                    return i.uploadChunk(t)
                  }, this.config.concurrentRequestLimit)),
                  (e = null),
                  (n = this.getLocalKey()),
                  (r = this.chunks.map(function (e, n) {
                    return t.enqueue({ chunk: e, index: n })
                  })),
                  (a.label = 2)
              case 2:
                return a.trys.push([2, 5, , 6]), [4, Promise.all(r)]
              case 3:
                return a.sent(), [4, this.mkFileReq()]
              case 4:
                return (e = a.sent()), [3, 6]
              case 5:
                throw (
                  ((o = a.sent()) instanceof v &&
                    (612 === o.code || 400 === o.code) &&
                    R(n, this.logger),
                  o)
                )
              case 6:
                return R(n, this.logger), [2, e]
            }
            var s
          })
        })
      }),
      (e.prototype.uploadChunk = function (t) {
        return yt(this, void 0, void 0, function () {
          var e,
            n,
            r,
            o,
            i,
            a,
            s,
            u,
            c,
            l = this
          return gt(this, function (h) {
            switch (h.label) {
              case 0:
                return (
                  (e = t.index),
                  (n = t.chunk),
                  (r = this.cachedUploadedList[e]),
                  this.logger.info('upload part ' + e + ', cache:', r),
                  (o = this.config.checkByMD5),
                  (i = function () {
                    ;(l.usedCacheList[e] = !0),
                      l.updateChunkProgress(n.size, e),
                      (l.uploadedList[e] = r),
                      l.updateLocalCache()
                  }),
                  r && !o ? (i(), [2]) : [4, H(n)]
                )
              case 1:
                return (
                  (a = h.sent()),
                  this.logger.info('computed part md5.', a),
                  r && a === r.md5
                    ? (i(), [2])
                    : ((this.usedCacheList[e] = !1),
                      (u = {
                        body: n,
                        onProgress: (s = function (t) {
                          l.updateChunkProgress(t.loaded, e)
                        }),
                        onCreate: function (t) {
                          return l.addXhr(t)
                        },
                      }),
                      this.logger.info('part ' + e + ' start uploading.'),
                      [
                        4,
                        ot(
                          this.token,
                          this.key,
                          t.index + 1,
                          this.getUploadInfo(),
                          u
                        ),
                      ])
                )
              case 2:
                return (
                  (c = h.sent()),
                  this.logger.info('part ' + e + ' upload completed.'),
                  s({ loaded: n.size, total: n.size }),
                  (this.uploadedList[e] = {
                    etag: c.data.etag,
                    md5: c.data.md5,
                    size: n.size,
                  }),
                  this.updateLocalCache(),
                  [2]
                )
            }
          })
        })
      }),
      (e.prototype.mkFileReq = function () {
        return yt(this, void 0, void 0, function () {
          var t,
            e,
            n = this
          return gt(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (t = dt(
                    dt(
                      dt(
                        {
                          parts: this.uploadedList.map(function (t, e) {
                            return { etag: t.etag, partNumber: e + 1 }
                          }),
                          fname: this.putExtra.fname,
                        },
                        this.putExtra.mimeType && {
                          mimeType: this.putExtra.mimeType,
                        }
                      ),
                      this.putExtra.customVars && {
                        customVars: this.putExtra.customVars,
                      }
                    ),
                    this.putExtra.metadata && {
                      metadata: this.putExtra.metadata,
                    }
                  )),
                  this.logger.info('parts upload completed, make file.', t),
                  [
                    4,
                    ((o = this.token),
                    (i = this.key),
                    (a = this.getUploadInfo()),
                    (s = {
                      onCreate: function (t) {
                        return n.addXhr(t)
                      },
                      body: JSON.stringify(t),
                    }),
                    M(
                      rt(V(o).bucketName, i, a),
                      Y(Y({}, s), { method: 'POST', headers: T(o) })
                    )),
                  ]
                )
              case 1:
                return (
                  (e = r.sent()),
                  this.logger.info('finish Resume Progress.'),
                  this.updateMkFileProgress(1),
                  [2, e]
                )
            }
            var o, i, a, s
          })
        })
      }),
      (e.prototype.initBeforeUploadChunks = function () {
        return yt(this, void 0, void 0, function () {
          var t, e, n
          return gt(this, function (r) {
            switch (r.label) {
              case 0:
                return (
                  (this.uploadedList = []),
                  (this.usedCacheList = []),
                  (t = (function (t, e) {
                    var n = null
                    try {
                      n = localStorage.getItem(t)
                    } catch (r) {
                      e.warn(
                        new g(
                          f.ReadCacheFailed,
                          'getLocalFileInfo failed. key: ' + t
                        )
                      )
                    }
                    if (null == n) return null
                    var o = null
                    try {
                      o = JSON.parse(n)
                    } catch (i) {
                      R(t, e),
                        e.warn(
                          new g(
                            f.InvalidCacheData,
                            'getLocalFileInfo failed to parse. key: ' + t
                          )
                        )
                    }
                    return o
                  })(this.getLocalKey(), this.logger))
                    ? [3, 2]
                    : (this.logger.info('init upload parts from api.'),
                      [
                        4,
                        ((o = this.token),
                        (i = this.bucketName),
                        (a = this.key),
                        (s = this.uploadHost.getUrl()),
                        M(
                          s +
                            '/buckets/' +
                            i +
                            '/objects/' +
                            (null != a ? O(a) : '~') +
                            '/uploads',
                          { method: 'POST', headers: F(o) }
                        )),
                      ])
                )
              case 1:
                return (
                  (e = r.sent()),
                  this.logger.info(
                    'initd upload parts of id: ' + e.data.uploadId + '.'
                  ),
                  (this.uploadId = e.data.uploadId),
                  (this.cachedUploadedList = []),
                  [3, 3]
                )
              case 2:
                ;(n = [
                  'resume upload parts from local cache,',
                  'total ' + t.data.length + ' part,',
                  'id is ' + t.id + '.',
                ]),
                  this.logger.info(n.join(' ')),
                  (this.cachedUploadedList = t.data),
                  (this.uploadId = t.id),
                  (r.label = 3)
              case 3:
                return (
                  (this.chunks = (function (t, e) {
                    var n = e * j
                    if (n > t.size) n = t.size
                    else for (; t.size > 1e4 * n; ) n *= 2
                    for (
                      var r = [], o = Math.ceil(t.size / n), i = 0;
                      i < o;
                      i++
                    ) {
                      var a = t.slice(n * i, i === o - 1 ? t.size : n * (i + 1))
                      r.push(a)
                    }
                    return r
                  })(this.file, this.config.chunkSize)),
                  (this.loaded = {
                    mkFileProgress: 0,
                    chunks: this.chunks.map(function (t) {
                      return 0
                    }),
                  }),
                  this.notifyResumeProgress(),
                  [2]
                )
            }
            var o, i, a, s
          })
        })
      }),
      (e.prototype.getUploadInfo = function () {
        return { id: this.uploadId, url: this.uploadHost.getUrl() }
      }),
      (e.prototype.getLocalKey = function () {
        return (
          (t = this.file.name),
          (e = this.key),
          (n = this.file.size),
          'qiniu_js_sdk_upload_file_name_' +
            t +
            (null == e ? '_' : '_key_' + e + '_') +
            'size_' +
            n
        )
        var t, e, n
      }),
      (e.prototype.updateLocalCache = function () {
        !(function (t, e, n) {
          try {
            localStorage.setItem(t, JSON.stringify(e))
          } catch (r) {
            n.warn(new g(f.WriteCacheFailed, 'setLocalFileInfo failed: ' + t))
          }
        })(
          this.getLocalKey(),
          { id: this.uploadId, data: this.uploadedList },
          this.logger
        )
      }),
      (e.prototype.updateChunkProgress = function (t, e) {
        ;(this.loaded.chunks[e] = t), this.notifyResumeProgress()
      }),
      (e.prototype.updateMkFileProgress = function (t) {
        ;(this.loaded.mkFileProgress = t), this.notifyResumeProgress()
      }),
      (e.prototype.notifyResumeProgress = function () {
        var t,
          e = this
        ;(this.progress = {
          total: this.getProgressInfoItem(
            ((t = this.loaded.chunks),
            t.reduce(function (t, e) {
              return t + e
            }, 0) + this.loaded.mkFileProgress),
            this.file.size + 1
          ),
          chunks: this.chunks.map(function (t, n) {
            var r = e.usedCacheList[n]
            return e.getProgressInfoItem(e.loaded.chunks[n], t.size, r)
          }),
          uploadInfo: { id: this.uploadId, url: this.uploadHost.getUrl() },
        }),
          this.onData(this.progress)
      }),
      e
    )
  })(ft),
  mt = (function () {
    var t = function (e, n) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e
          }) ||
        function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        })(e, n)
    }
    return function (e, n) {
      function r() {
        this.constructor = e
      }
      t(e, n),
        (e.prototype =
          null === n
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r()))
    }
  })(),
  bt = function (t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(t) {
        try {
          u(r.next(t))
        } catch (e) {
          i(e)
        }
      }
      function s(t) {
        try {
          u(r.throw(t))
        } catch (e) {
          i(e)
        }
      }
      function u(t) {
        var e
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e)
                })).then(a, s)
      }
      u((r = r.apply(t, e || [])).next())
    })
  },
  wt = function (t, e) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (i = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this
        }),
      i
    )
    function s(i) {
      return function (s) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i
                  break
                case 4:
                  return a.label++, { value: i[1], done: !1 }
                case 5:
                  a.label++, (r = i[1]), (i = [0])
                  continue
                case 7:
                  ;(i = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1]
                    break
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    ;(a.label = o[1]), (o = i)
                    break
                  }
                  if (o && a.label < o[2]) {
                    ;(a.label = o[2]), a.ops.push(i)
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              i = e.call(t, a)
            } catch (s) {
              ;(i = [6, s]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & i[0]) throw i[1]
          return { value: i[0] ? i[1] : void 0, done: !0 }
        })([i, s])
      }
    }
  },
  kt = (function (t) {
    function e() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      mt(e, t),
      (e.prototype.run = function () {
        return bt(this, void 0, void 0, function () {
          var t,
            e,
            n,
            r = this
          return wt(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  this.logger.info('start run Direct.'),
                  (t = new FormData()).append('file', this.file),
                  t.append('token', this.token),
                  null != this.key && t.append('key', this.key),
                  t.append('fname', this.putExtra.fname),
                  this.putExtra.customVars &&
                    (this.logger.info('init customVars.'),
                    (e = this.putExtra.customVars),
                    Object.keys(e).forEach(function (n) {
                      return t.append(n, e[n].toString())
                    }),
                    this.logger.info('customVars inited.')),
                  this.logger.info('formData inited.'),
                  [
                    4,
                    ((i = this.uploadHost.getUrl()),
                    (a = t),
                    (s = {
                      onProgress: function (t) {
                        r.updateDirectProgress(t.loaded, t.total)
                      },
                      onCreate: function (t) {
                        return r.addXhr(t)
                      },
                    }),
                    M(i, Y({ method: 'POST', body: a }, s))),
                  ]
                )
              case 1:
                return (
                  (n = o.sent()),
                  this.logger.info('Direct progress finish.'),
                  this.finishDirectProgress(),
                  [2, n]
                )
            }
            var i, a, s
          })
        })
      }),
      (e.prototype.updateDirectProgress = function (t, e) {
        ;(this.progress = { total: this.getProgressInfoItem(t, e + 1) }),
          this.onData(this.progress)
      }),
      (e.prototype.finishDirectProgress = function () {
        if (!this.progress)
          return (
            this.logger.warn('progress is null.'),
            (this.progress = {
              total: this.getProgressInfoItem(this.file.size, this.file.size),
            }),
            void this.onData(this.progress)
          )
        var t = this.progress.total
        ;(this.progress = {
          total: this.getProgressInfoItem(t.loaded + 1, t.size),
        }),
          this.onData(this.progress)
      }),
      e
    )
  })(ft)
function xt(t, e, n) {
  void 0 === n && (n = 3)
  var r = L()
  r.open('POST', 'https://uplog.qbox.me/log/3'),
    r.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    r.setRequestHeader('Authorization', F(t).Authorization),
    (r.onreadystatechange = function () {
      4 === r.readyState && 200 !== r.status && n > 0 && xt(t, e, n - 1)
    })
  var o = [
    e.code || '',
    e.reqId || '',
    e.host || '',
    e.remoteIp || '',
    e.port || '',
    e.duration || '',
    e.time || '',
    e.bytesSent || '',
    e.upType || '',
    e.size || '',
  ].join(',')
  r.send(o)
}
var Ct = function (t, e) {
    var n = 'function' == typeof Symbol && t[Symbol.iterator]
    if (!n) return t
    var r,
      o,
      i = n.call(t),
      a = []
    try {
      for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
        a.push(r.value)
    } catch (s) {
      o = { error: s }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return a
  },
  St = function () {
    for (var t = [], e = 0; e < arguments.length; e++)
      t = t.concat(Ct(arguments[e]))
    return t
  },
  It = (function () {
    function t(e, n, r, o) {
      void 0 === n && (n = !0),
        void 0 === r && (r = 'OFF'),
        void 0 === o && (o = 'UPLOAD'),
        (this.token = e),
        (this.disableReport = n),
        (this.level = r),
        (this.prefix = o),
        (this.id = ++t.id)
    }
    return (
      (t.prototype.getPrintPrefix = function (t) {
        return 'Qiniu-JS-SDK [' + t + '][' + this.prefix + '#' + this.id + ']:'
      }),
      (t.prototype.report = function (t, e) {
        if (!this.disableReport)
          try {
            xt(this.token, t, e)
          } catch (n) {
            this.warn(n)
          }
      }),
      (t.prototype.info = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        var n = ['INFO']
        n.includes(this.level) &&
          console.log.apply(console, St([this.getPrintPrefix('INFO')], t))
      }),
      (t.prototype.warn = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        var n = ['INFO', 'WARN']
        n.includes(this.level) &&
          console.warn.apply(console, St([this.getPrintPrefix('WARN')], t))
      }),
      (t.prototype.error = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        var n = ['INFO', 'WARN', 'ERROR']
        n.includes(this.level) &&
          console.error.apply(console, St([this.getPrintPrefix('ERROR')], t))
      }),
      (t.id = 0),
      t
    )
  })(),
  Ot = function (t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(t) {
        try {
          u(r.next(t))
        } catch (e) {
          i(e)
        }
      }
      function s(t) {
        try {
          u(r.throw(t))
        } catch (e) {
          i(e)
        }
      }
      function u(t) {
        var e
        t.done
          ? o(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e)
                })).then(a, s)
      }
      u((r = r.apply(t, e || [])).next())
    })
  },
  _t = function (t, e) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1]
          return o[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (i = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this
        }),
      i
    )
    function s(i) {
      return function (s) {
        return (function (i) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; a; )
            try {
              if (
                ((n = 1),
                r &&
                  (o =
                    2 & i[0]
                      ? r.return
                      : i[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                  !(o = o.call(r, i[1])).done)
              )
                return o
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i
                  break
                case 4:
                  return a.label++, { value: i[1], done: !1 }
                case 5:
                  a.label++, (r = i[1]), (i = [0])
                  continue
                case 7:
                  ;(i = a.ops.pop()), a.trys.pop()
                  continue
                default:
                  if (
                    !((o = a.trys),
                    (o = o.length > 0 && o[o.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    a = 0
                    continue
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1]
                    break
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    ;(a.label = o[1]), (o = i)
                    break
                  }
                  if (o && a.label < o[2]) {
                    ;(a.label = o[2]), a.ops.push(i)
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop()
                  continue
              }
              i = e.call(t, a)
            } catch (s) {
              ;(i = [6, s]), (r = 0)
            } finally {
              n = o = 0
            }
          if (5 & i[0]) throw i[1]
          return { value: i[0] ? i[1] : void 0, done: !0 }
        })([i, s])
      }
    }
  },
  Pt = function (t, e) {
    var n = 'function' == typeof Symbol && t[Symbol.iterator]
    if (!n) return t
    var r,
      o,
      i = n.call(t),
      a = []
    try {
      for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
        a.push(r.value)
    } catch (s) {
      o = { error: s }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return a
  },
  At = new Map(),
  Ut = (function () {
    function t(t, e) {
      ;(this.host = t), (this.protocol = e)
    }
    return (
      (t.prototype.isFrozen = function () {
        var t = new Date().getTime(),
          e = At.get(this.host)
        return null != e && e >= t
      }),
      (t.prototype.freeze = function (t) {
        void 0 === t && (t = 20)
        var e = new Date().getTime() + 1e3 * t
        At.set(this.host, e)
      }),
      (t.prototype.unfreeze = function () {
        At.delete(this.host)
      }),
      (t.prototype.getUrl = function () {
        return this.protocol + '://' + this.host
      }),
      (t.prototype.getUnfreezeTime = function () {
        return At.get(this.host)
      }),
      t
    )
  })(),
  Et = (function () {
    function t(t) {
      void 0 === t && (t = []),
        (this.initHosts = t),
        (this.cachedHostsMap = new Map())
    }
    return (
      (t.prototype.register = function (t, e, n, r) {
        this.cachedHostsMap.set(
          t + '@' + e,
          n.map(function (t) {
            return new Ut(t, r)
          })
        )
      }),
      (t.prototype.refresh = function (t, e, n) {
        var r, o, i, a
        return Ot(this, void 0, void 0, function () {
          var s, u
          return _t(this, function (c) {
            switch (c.label) {
              case 0:
                return (this.cachedHostsMap.get(t + '@' + e) || []).length > 0
                  ? [2]
                  : this.initHosts.length > 0
                  ? (this.register(t, e, this.initHosts, n), [2])
                  : [4, nt(t, e, n)]
              case 1:
                return (
                  null != (null == (s = c.sent()) ? void 0 : s.data) &&
                    ((u = (function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t = t.concat(Pt(arguments[e]))
                      return t
                    })(
                      (null ===
                        (o =
                          null === (r = s.data.up) || void 0 === r
                            ? void 0
                            : r.acc) || void 0 === o
                        ? void 0
                        : o.main) || [],
                      (null ===
                        (a =
                          null === (i = s.data.up) || void 0 === i
                            ? void 0
                            : i.acc) || void 0 === a
                        ? void 0
                        : a.backup) || []
                    )),
                    this.register(t, e, u, n)),
                  [2]
                )
            }
          })
        })
      }),
      (t.prototype.getUp = function (t, e, n) {
        return Ot(this, void 0, void 0, function () {
          var r, o
          return _t(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, this.refresh(t, e, n)]
              case 1:
                return (
                  i.sent(),
                  0 === (r = this.cachedHostsMap.get(t + '@' + e) || []).length
                    ? [2, null]
                    : (o = r.filter(function (t) {
                        return !t.isFrozen()
                      })).length > 0
                    ? [2, o[0]]
                    : [
                        2,
                        r.slice().sort(function (t, e) {
                          return (
                            (t.getUnfreezeTime() || 0) -
                            (e.getUnfreezeTime() || 0)
                          )
                        })[0],
                      ]
                )
            }
          })
        })
      }),
      t
    )
  })()
function zt(t, e, n, r, o) {
  var i = new It(
      n,
      null == o ? void 0 : o.disableStatisticsReport,
      null == o ? void 0 : o.debugLogLevel,
      t.name
    ),
    a = { file: t, key: e, token: n, putExtra: r, config: qt(o, i) },
    s = new Et(a.config.uphost)
  return new C(function (t) {
    var e = (function (t, e, n, r) {
      return t.config && t.config.forceDirect
        ? (r.info('ues forceDirect mode.'), new kt(t, e, n, r))
        : t.file.size > 4 * j
        ? (r.info('file size over 4M, use Resume.'), new vt(t, e, n, r))
        : (r.info('file size less or equal than 4M, use Direct.'),
          new kt(t, e, n, r))
    })(
      a,
      {
        onData: function (e) {
          return t.next(e)
        },
        onError: function (e) {
          return t.error(e)
        },
        onComplete: function (e) {
          return t.complete(e)
        },
      },
      s,
      i
    )
    return e.putFile(), e.stop.bind(e)
  })
}
var jt = function () {
    return (jt =
      Object.assign ||
      function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++)
          for (var o in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        return t
      }).apply(this, arguments)
  },
  Rt = function (t, e) {
    var n = 'function' == typeof Symbol && t[Symbol.iterator]
    if (!n) return t
    var r,
      o,
      i = n.call(t),
      a = []
    try {
      for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
        a.push(r.value)
    } catch (s) {
      o = { error: s }
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i)
      } finally {
        if (o) throw o.error
      }
    }
    return a
  },
  Ft = function () {
    for (var t = [], e = 0; e < arguments.length; e++)
      t = t.concat(Rt(arguments[e]))
    return t
  }
function qt(t, e) {
  var n = jt({}, t),
    r = n.upprotocol,
    o = n.uphost,
    i = (function (t, e) {
      var n = {}
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r])
      if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)
          e.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
            (n[r[o]] = t[r[o]])
      }
      return n
    })(n, ['upprotocol', 'uphost']),
    a = jt(
      {
        uphost: [],
        retryCount: 3,
        checkByMD5: !1,
        forceDirect: !1,
        useCdnDomain: !0,
        concurrentRequestLimit: 3,
        chunkSize: 4,
        upprotocol: 'https',
        debugLogLevel: 'OFF',
        disableStatisticsReport: !1,
      },
      i
    )
  r && (a.upprotocol = r.replace(/:$/, ''))
  var s = []
  if (
    (e &&
      null != (null == t ? void 0 : t.uphost) &&
      null != (null == t ? void 0 : t.region) &&
      e.warn('do not use both the uphost and region config.'),
    o)
  )
    Array.isArray(o) ? s.push.apply(s, Ft(o)) : s.push(o)
  else if (null == a ? void 0 : a.region) {
    var u = $[null == a ? void 0 : a.region]
    a.useCdnDomain
      ? s.push.apply(s, Ft(u.cdnUphost))
      : s.push.apply(s, Ft(u.srcUphost))
  }
  return jt(jt({}, a), { uphost: s.filter(Boolean) })
}
var Tt = {
  PNG: 'image/png',
  JPEG: 'image/jpeg',
  WEBP: 'image/webp',
  BMP: 'image/bmp',
}
Object.keys(Tt).map(function (t) {
  return Tt[t]
})
const { TextArea: Lt } = l
function Ht({ defaultValue: t, dom: h }) {
  const [f, p] = s.exports.useState(t),
    y = u()
  function g(t, s) {
    const u = t.target.value
    var c
    p(
      ((c = ((t, e) => {
        for (var n in e || (e = {})) o.call(e, n) && a(t, n, e[n])
        if (r) for (var n of r(e)) i.call(e, n) && a(t, n, e[n])
        return t
      })({}, f)),
      e(c, n({ [s]: u })))
    )
    const l = h.querySelector(`[name=${f.name}]`)
    l && (l.innerHTML = u),
      y({ type: 'EDIT_USE_COMPONENTS', value: { name: f.name, text: u } })
  }
  return c.createElement(
    'ul',
    { className: d.list },
    c.createElement(
      'li',
      { className: d.item },
      c.createElement('span', null, '内容：'),
      c.createElement(Lt, {
        defaultValue: f.text,
        rows: 4,
        onChange: (t) => g(t, 'text'),
      })
    ),
    c.createElement(
      'li',
      { className: d.item },
      c.createElement('span', null, '背景图：'),
      c.createElement(l, {
        type: 'url',
        onChange: (t) => g(t, 'url'),
        placeholder: '在线地址',
      }),
      c.createElement('input', {
        type: 'file',
        onChange: function (t) {
          const e = t.target.files[0]
          console.log(e, zt)
          const n = {
            next(t) {
              console.log(t, 'next')
            },
            error(t) {
              console.log(t, 'error')
            },
            complete(t) {
              console.log(t, 'complete')
            },
          }
          zt(
            e,
            e.name,
            'jFBcwwkYqxVrVSmNCUIr5z7Doh9w6jbaA5Sruqxb:n7tv7S7dPNOSJg3dTQKZUQN1X48=:eyJzY29wZSI6InBhZ2UtZ2VuZXJhdGUiLCJkZWFkbGluZSI6MTYyNTMwOTM4M30='
          ).subscribe(n)
        },
      })
    ),
    c.createElement('li', { className: d.item })
  )
}
export { Ht as default }
