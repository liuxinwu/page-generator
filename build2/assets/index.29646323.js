var e = Object.defineProperty,
  t = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  i = (t, r, n) =>
    r in t
      ? e(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[r] = n),
  a = (e, t) => {
    for (var r in t || (t = {})) o.call(t, r) && i(e, r, t[r])
    if (n) for (var r of n(t)) s.call(t, r) && i(e, r, t[r])
    return e
  },
  c = (e, n) => t(e, r(n)),
  u = (e, t, r) => (i(e, 'symbol' != typeof t ? t + '' : t, r), r)
import { h as f, R as d } from './vendor.41cc9ac2.js'
var l = { exports: {} },
  h = function (e, t) {
    return function () {
      for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
        r[n] = arguments[n]
      return e.apply(t, r)
    }
  },
  p = h,
  m = Object.prototype.toString
function g(e) {
  return '[object Array]' === m.call(e)
}
function y(e) {
  return void 0 === e
}
function v(e) {
  return null !== e && 'object' == typeof e
}
function w(e) {
  if ('[object Object]' !== m.call(e)) return !1
  var t = Object.getPrototypeOf(e)
  return null === t || t === Object.prototype
}
function b(e) {
  return '[object Function]' === m.call(e)
}
function E(e, t) {
  if (null != e)
    if (('object' != typeof e && (e = [e]), g(e)))
      for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e)
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
}
var C = {
    isArray: g,
    isArrayBuffer: function (e) {
      return '[object ArrayBuffer]' === m.call(e)
    },
    isBuffer: function (e) {
      return (
        null !== e &&
        !y(e) &&
        null !== e.constructor &&
        !y(e.constructor) &&
        'function' == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      )
    },
    isFormData: function (e) {
      return 'undefined' != typeof FormData && e instanceof FormData
    },
    isArrayBufferView: function (e) {
      return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && e.buffer instanceof ArrayBuffer
    },
    isString: function (e) {
      return 'string' == typeof e
    },
    isNumber: function (e) {
      return 'number' == typeof e
    },
    isObject: v,
    isPlainObject: w,
    isUndefined: y,
    isDate: function (e) {
      return '[object Date]' === m.call(e)
    },
    isFile: function (e) {
      return '[object File]' === m.call(e)
    },
    isBlob: function (e) {
      return '[object Blob]' === m.call(e)
    },
    isFunction: b,
    isStream: function (e) {
      return v(e) && b(e.pipe)
    },
    isURLSearchParams: function (e) {
      return (
        'undefined' != typeof URLSearchParams && e instanceof URLSearchParams
      )
    },
    isStandardBrowserEnv: function () {
      return (
        ('undefined' == typeof navigator ||
          ('ReactNative' !== navigator.product &&
            'NativeScript' !== navigator.product &&
            'NS' !== navigator.product)) &&
        'undefined' != typeof window &&
        'undefined' != typeof document
      )
    },
    forEach: E,
    merge: function e() {
      var t = {}
      function r(r, n) {
        w(t[n]) && w(r)
          ? (t[n] = e(t[n], r))
          : w(r)
          ? (t[n] = e({}, r))
          : g(r)
          ? (t[n] = r.slice())
          : (t[n] = r)
      }
      for (var n = 0, o = arguments.length; n < o; n++) E(arguments[n], r)
      return t
    },
    extend: function (e, t, r) {
      return (
        E(t, function (t, n) {
          e[n] = r && 'function' == typeof t ? p(t, r) : t
        }),
        e
      )
    },
    trim: function (e) {
      return e.replace(/^\s*/, '').replace(/\s*$/, '')
    },
    stripBOM: function (e) {
      return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
    },
  },
  j = C
function x(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
var R = function (e, t, r) {
    if (!t) return e
    var n
    if (r) n = r(t)
    else if (j.isURLSearchParams(t)) n = t.toString()
    else {
      var o = []
      j.forEach(t, function (e, t) {
        null != e &&
          (j.isArray(e) ? (t += '[]') : (e = [e]),
          j.forEach(e, function (e) {
            j.isDate(e)
              ? (e = e.toISOString())
              : j.isObject(e) && (e = JSON.stringify(e)),
              o.push(x(t) + '=' + x(e))
          }))
      }),
        (n = o.join('&'))
    }
    if (n) {
      var s = e.indexOf('#')
      ;-1 !== s && (e = e.slice(0, s)),
        (e += (-1 === e.indexOf('?') ? '?' : '&') + n)
    }
    return e
  },
  O = C
function N() {
  this.handlers = []
}
;(N.prototype.use = function (e, t) {
  return (
    this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1
  )
}),
  (N.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null)
  }),
  (N.prototype.forEach = function (e) {
    O.forEach(this.handlers, function (t) {
      null !== t && e(t)
    })
  })
var S = N,
  P = C,
  T = function (e) {
    return !(!e || !e.__CANCEL__)
  },
  q = C,
  U = function (e, t, r, n, o) {
    return (
      (e.config = t),
      r && (e.code = r),
      (e.request = n),
      (e.response = o),
      (e.isAxiosError = !0),
      (e.toJSON = function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
        }
      }),
      e
    )
  },
  A = function (e, t, r, n, o) {
    var s = new Error(e)
    return U(s, t, r, n, o)
  },
  L = A,
  k = C,
  B = k.isStandardBrowserEnv()
    ? {
        write: function (e, t, r, n, o, s) {
          var i = []
          i.push(e + '=' + encodeURIComponent(t)),
            k.isNumber(r) && i.push('expires=' + new Date(r).toGMTString()),
            k.isString(n) && i.push('path=' + n),
            k.isString(o) && i.push('domain=' + o),
            !0 === s && i.push('secure'),
            (document.cookie = i.join('; '))
        },
        read: function (e) {
          var t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          )
          return t ? decodeURIComponent(t[3]) : null
        },
        remove: function (e) {
          this.write(e, '', Date.now() - 864e5)
        },
      }
    : {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      },
  D = function (e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
  },
  I = function (e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
  },
  $ = C,
  F = [
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ],
  _ = C,
  H = _.isStandardBrowserEnv()
    ? (function () {
        var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          r = document.createElement('a')
        function n(e) {
          var n = e
          return (
            t && (r.setAttribute('href', n), (n = r.href)),
            r.setAttribute('href', n),
            {
              href: r.href,
              protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
              host: r.host,
              search: r.search ? r.search.replace(/^\?/, '') : '',
              hash: r.hash ? r.hash.replace(/^#/, '') : '',
              hostname: r.hostname,
              port: r.port,
              pathname:
                '/' === r.pathname.charAt(0) ? r.pathname : '/' + r.pathname,
            }
          )
        }
        return (
          (e = n(window.location.href)),
          function (t) {
            var r = _.isString(t) ? n(t) : t
            return r.protocol === e.protocol && r.host === e.host
          }
        )
      })()
    : function () {
        return !0
      },
  z = C,
  Q = function (e, t, r) {
    var n = r.config.validateStatus
    r.status && n && !n(r.status)
      ? t(
          L(
            'Request failed with status code ' + r.status,
            r.config,
            null,
            r.request,
            r
          )
        )
      : e(r)
  },
  M = B,
  X = R,
  J = function (e, t) {
    return e && !D(t) ? I(e, t) : t
  },
  V = function (e) {
    var t,
      r,
      n,
      o = {}
    return e
      ? ($.forEach(e.split('\n'), function (e) {
          if (
            ((n = e.indexOf(':')),
            (t = $.trim(e.substr(0, n)).toLowerCase()),
            (r = $.trim(e.substr(n + 1))),
            t)
          ) {
            if (o[t] && F.indexOf(t) >= 0) return
            o[t] =
              'set-cookie' === t
                ? (o[t] ? o[t] : []).concat([r])
                : o[t]
                ? o[t] + ', ' + r
                : r
          }
        }),
        o)
      : o
  },
  G = H,
  K = A,
  W = function (e) {
    return new Promise(function (t, r) {
      var n = e.data,
        o = e.headers
      z.isFormData(n) && delete o['Content-Type']
      var s = new XMLHttpRequest()
      if (e.auth) {
        var i = e.auth.username || '',
          a = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : ''
        o.Authorization = 'Basic ' + btoa(i + ':' + a)
      }
      var c = J(e.baseURL, e.url)
      if (
        (s.open(e.method.toUpperCase(), X(c, e.params, e.paramsSerializer), !0),
        (s.timeout = e.timeout),
        (s.onreadystatechange = function () {
          if (
            s &&
            4 === s.readyState &&
            (0 !== s.status ||
              (s.responseURL && 0 === s.responseURL.indexOf('file:')))
          ) {
            var n =
                'getAllResponseHeaders' in s
                  ? V(s.getAllResponseHeaders())
                  : null,
              o = {
                data:
                  e.responseType && 'text' !== e.responseType
                    ? s.response
                    : s.responseText,
                status: s.status,
                statusText: s.statusText,
                headers: n,
                config: e,
                request: s,
              }
            Q(t, r, o), (s = null)
          }
        }),
        (s.onabort = function () {
          s && (r(K('Request aborted', e, 'ECONNABORTED', s)), (s = null))
        }),
        (s.onerror = function () {
          r(K('Network Error', e, null, s)), (s = null)
        }),
        (s.ontimeout = function () {
          var t = 'timeout of ' + e.timeout + 'ms exceeded'
          e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
            r(K(t, e, 'ECONNABORTED', s)),
            (s = null)
        }),
        z.isStandardBrowserEnv())
      ) {
        var u =
          (e.withCredentials || G(c)) && e.xsrfCookieName
            ? M.read(e.xsrfCookieName)
            : void 0
        u && (o[e.xsrfHeaderName] = u)
      }
      if (
        ('setRequestHeader' in s &&
          z.forEach(o, function (e, t) {
            void 0 === n && 'content-type' === t.toLowerCase()
              ? delete o[t]
              : s.setRequestHeader(t, e)
          }),
        z.isUndefined(e.withCredentials) ||
          (s.withCredentials = !!e.withCredentials),
        e.responseType)
      )
        try {
          s.responseType = e.responseType
        } catch (f) {
          if ('json' !== e.responseType) throw f
        }
      'function' == typeof e.onDownloadProgress &&
        s.addEventListener('progress', e.onDownloadProgress),
        'function' == typeof e.onUploadProgress &&
          s.upload &&
          s.upload.addEventListener('progress', e.onUploadProgress),
        e.cancelToken &&
          e.cancelToken.promise.then(function (e) {
            s && (s.abort(), r(e), (s = null))
          }),
        n || (n = null),
        s.send(n)
    })
  },
  Y = C,
  Z = function (e, t) {
    q.forEach(e, function (r, n) {
      n !== t &&
        n.toUpperCase() === t.toUpperCase() &&
        ((e[t] = r), delete e[n])
    })
  },
  ee = { 'Content-Type': 'application/x-www-form-urlencoded' }
function te(e, t) {
  !Y.isUndefined(e) &&
    Y.isUndefined(e['Content-Type']) &&
    (e['Content-Type'] = t)
}
var re,
  ne = {
    adapter:
      (('undefined' != typeof XMLHttpRequest ||
        ('undefined' != typeof process &&
          '[object process]' === Object.prototype.toString.call(process))) &&
        (re = W),
      re),
    transformRequest: [
      function (e, t) {
        return (
          Z(t, 'Accept'),
          Z(t, 'Content-Type'),
          Y.isFormData(e) ||
          Y.isArrayBuffer(e) ||
          Y.isBuffer(e) ||
          Y.isStream(e) ||
          Y.isFile(e) ||
          Y.isBlob(e)
            ? e
            : Y.isArrayBufferView(e)
            ? e.buffer
            : Y.isURLSearchParams(e)
            ? (te(t, 'application/x-www-form-urlencoded;charset=utf-8'),
              e.toString())
            : Y.isObject(e)
            ? (te(t, 'application/json;charset=utf-8'), JSON.stringify(e))
            : e
        )
      },
    ],
    transformResponse: [
      function (e) {
        if ('string' == typeof e)
          try {
            e = JSON.parse(e)
          } catch (t) {}
        return e
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300
    },
  }
;(ne.headers = { common: { Accept: 'application/json, text/plain, */*' } }),
  Y.forEach(['delete', 'get', 'head'], function (e) {
    ne.headers[e] = {}
  }),
  Y.forEach(['post', 'put', 'patch'], function (e) {
    ne.headers[e] = Y.merge(ee)
  })
var oe = ne,
  se = C,
  ie = function (e, t, r) {
    return (
      P.forEach(r, function (r) {
        e = r(e, t)
      }),
      e
    )
  },
  ae = T,
  ce = oe
function ue(e) {
  e.cancelToken && e.cancelToken.throwIfRequested()
}
var fe = C,
  de = function (e, t) {
    t = t || {}
    var r = {},
      n = ['url', 'method', 'data'],
      o = ['headers', 'auth', 'proxy', 'params'],
      s = [
        'baseURL',
        'transformRequest',
        'transformResponse',
        'paramsSerializer',
        'timeout',
        'timeoutMessage',
        'withCredentials',
        'adapter',
        'responseType',
        'xsrfCookieName',
        'xsrfHeaderName',
        'onUploadProgress',
        'onDownloadProgress',
        'decompress',
        'maxContentLength',
        'maxBodyLength',
        'maxRedirects',
        'transport',
        'httpAgent',
        'httpsAgent',
        'cancelToken',
        'socketPath',
        'responseEncoding',
      ],
      i = ['validateStatus']
    function a(e, t) {
      return fe.isPlainObject(e) && fe.isPlainObject(t)
        ? fe.merge(e, t)
        : fe.isPlainObject(t)
        ? fe.merge({}, t)
        : fe.isArray(t)
        ? t.slice()
        : t
    }
    function c(n) {
      fe.isUndefined(t[n])
        ? fe.isUndefined(e[n]) || (r[n] = a(void 0, e[n]))
        : (r[n] = a(e[n], t[n]))
    }
    fe.forEach(n, function (e) {
      fe.isUndefined(t[e]) || (r[e] = a(void 0, t[e]))
    }),
      fe.forEach(o, c),
      fe.forEach(s, function (n) {
        fe.isUndefined(t[n])
          ? fe.isUndefined(e[n]) || (r[n] = a(void 0, e[n]))
          : (r[n] = a(void 0, t[n]))
      }),
      fe.forEach(i, function (n) {
        n in t ? (r[n] = a(e[n], t[n])) : n in e && (r[n] = a(void 0, e[n]))
      })
    var u = n.concat(o).concat(s).concat(i),
      f = Object.keys(e)
        .concat(Object.keys(t))
        .filter(function (e) {
          return -1 === u.indexOf(e)
        })
    return fe.forEach(f, c), r
  },
  le = C,
  he = R,
  pe = S,
  me = function (e) {
    return (
      ue(e),
      (e.headers = e.headers || {}),
      (e.data = ie(e.data, e.headers, e.transformRequest)),
      (e.headers = se.merge(
        e.headers.common || {},
        e.headers[e.method] || {},
        e.headers
      )),
      se.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (t) {
          delete e.headers[t]
        }
      ),
      (e.adapter || ce.adapter)(e).then(
        function (t) {
          return ue(e), (t.data = ie(t.data, t.headers, e.transformResponse)), t
        },
        function (t) {
          return (
            ae(t) ||
              (ue(e),
              t &&
                t.response &&
                (t.response.data = ie(
                  t.response.data,
                  t.response.headers,
                  e.transformResponse
                ))),
            Promise.reject(t)
          )
        }
      )
    )
  },
  ge = de
function ye(e) {
  ;(this.defaults = e),
    (this.interceptors = { request: new pe(), response: new pe() })
}
;(ye.prototype.request = function (e) {
  'string' == typeof e
    ? ((e = arguments[1] || {}).url = arguments[0])
    : (e = e || {}),
    (e = ge(this.defaults, e)).method
      ? (e.method = e.method.toLowerCase())
      : this.defaults.method
      ? (e.method = this.defaults.method.toLowerCase())
      : (e.method = 'get')
  var t = [me, void 0],
    r = Promise.resolve(e)
  for (
    this.interceptors.request.forEach(function (e) {
      t.unshift(e.fulfilled, e.rejected)
    }),
      this.interceptors.response.forEach(function (e) {
        t.push(e.fulfilled, e.rejected)
      });
    t.length;

  )
    r = r.then(t.shift(), t.shift())
  return r
}),
  (ye.prototype.getUri = function (e) {
    return (
      (e = ge(this.defaults, e)),
      he(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
    )
  }),
  le.forEach(['delete', 'get', 'head', 'options'], function (e) {
    ye.prototype[e] = function (t, r) {
      return this.request(
        ge(r || {}, { method: e, url: t, data: (r || {}).data })
      )
    }
  }),
  le.forEach(['post', 'put', 'patch'], function (e) {
    ye.prototype[e] = function (t, r, n) {
      return this.request(ge(n || {}, { method: e, url: t, data: r }))
    }
  })
var ve = ye
function we(e) {
  this.message = e
}
;(we.prototype.toString = function () {
  return 'Cancel' + (this.message ? ': ' + this.message : '')
}),
  (we.prototype.__CANCEL__ = !0)
var be = we,
  Ee = be
function Ce(e) {
  if ('function' != typeof e)
    throw new TypeError('executor must be a function.')
  var t
  this.promise = new Promise(function (e) {
    t = e
  })
  var r = this
  e(function (e) {
    r.reason || ((r.reason = new Ee(e)), t(r.reason))
  })
}
;(Ce.prototype.throwIfRequested = function () {
  if (this.reason) throw this.reason
}),
  (Ce.source = function () {
    var e
    return {
      token: new Ce(function (t) {
        e = t
      }),
      cancel: e,
    }
  })
var je = Ce,
  xe = C,
  Re = h,
  Oe = ve,
  Ne = de
function Se(e) {
  var t = new Oe(e),
    r = Re(Oe.prototype.request, t)
  return xe.extend(r, Oe.prototype, t), xe.extend(r, t), r
}
var Pe = Se(oe)
;(Pe.Axios = Oe),
  (Pe.create = function (e) {
    return Se(Ne(Pe.defaults, e))
  }),
  (Pe.Cancel = be),
  (Pe.CancelToken = je),
  (Pe.isCancel = T),
  (Pe.all = function (e) {
    return Promise.all(e)
  }),
  (Pe.spread = function (e) {
    return function (t) {
      return e.apply(null, t)
    }
  }),
  (Pe.isAxiosError = function (e) {
    return 'object' == typeof e && !0 === e.isAxiosError
  }),
  (l.exports = Pe),
  (l.exports.default = Pe)
var Te = l.exports
class qe {
  constructor(e) {
    u(this, 'instance'),
      u(this, 'CancelToken', Te.CancelToken),
      u(this, 'theQueue', []),
      (this.instance = this.genInstance(e)),
      this.interceptorsRequest(),
      this.interceptorsResponse()
  }
  async request(e) {
    return await this.instance.request(e)
  }
  genInstance(e) {
    return Te.create(a({ timeout: 1e4 }, e))
  }
  interceptorsRequest() {
    this.instance.interceptors.request.use(
      (e) => (
        this.findInQueue({ info: `${e.url}_${e.method}`, c: () => {} }), e
      ),
      function (e) {
        return console.log(e, 'jjj'), Promise.reject(e)
      }
    )
  }
  interceptorsResponse() {
    this.instance.interceptors.response.use(
      (e) => {
        const t = e.config
        this.removeQueue({ info: `${t.url}_${t.method}` })
        const { code: r = -1, data: n = {}, msg: o = '' } = e.data
        return 0 === r
          ? Promise.resolve(
              c(a({}, e), { code: r, data: n, msg: o, status: e.status })
            )
          : Promise.reject(c(a({}, e), { code: r, msg: o, status: e.status }))
      },
      (e) => {
        const t = (e.response && e.response.config) || {}
        this.removeQueue({ info: `${t.url}_${t.method}` })
        const { status: r = 500, data: n = {} } = e.response || {}
        return Promise.reject({
          code: -1,
          message: n.msg || e.message,
          status: r,
        })
      }
    )
  }
  findInQueue(e) {}
  removeQueue(e) {
    const t = this.theQueue.findIndex((t) => t.info === e.info)
    t < 0 || this.theQueue.splice(t, 1)
  }
}
const Ue = class {
  constructor() {
    if ((u(this, 'cache', Object.create(null)), Ue.instance)) return Ue.instance
    ;(Ue.instance = this), (this.cache = {})
  }
  get(e) {
    return this.listenError(() => {
      const t = this.cache[e]
      if (void 0 === t) throw Error('不存在该缓存')
      return t
    })
  }
  set(e, t) {
    return this.listenError(() => (this.cache[e] = t))
  }
  delete(e) {
    return this.listenError(() => delete this.cache[e])
  }
  clear(e) {
    return this.listenError(() => (this.cache = Object.create(null)))
  }
  listenError(e) {
    return new Promise((t, r) => {
      try {
        t({ code: 0, data: e.call(this), msg: '读取缓存数据成功！' })
      } catch (n) {
        r({ code: -1, data: n, msg: '读取缓存数据出错了！' })
      }
    })
  }
}
let Ae = Ue
u(Ae, 'instance')
const Le = new Ae()
const ke = new (class {
  constructor(e) {
    u(this, 'axios'),
      u(this, 'defaultCustomConfig', {
        isNeedLoading: !0,
        isNeedToken: !1,
        isNeedShowError: !0,
        isNeedCache: !1,
      }),
      u(this, 'requestCount', 0),
      (e.baseURL = this.transformUrl(e.baseURL, !0)),
      (this.axios = new qe(e))
  }
  async transfromRquest(e, t = {}) {
    ;(t = a(a({}, this.defaultCustomConfig), t)),
      this.transformUrl(e.url),
      this.handleLoading(t, !0),
      this.addToken(e, t),
      t.isNeedLoading && this.requestCount++
    try {
      const r = await this.axios.request(e)
      return t.isNeedCache && Le.set(e.url, r.data), r
    } catch (r) {
      const { code: e, config: n } = r
      return 401 === e
        ? this.transfromRquest(n)
        : (this.handleError(t, r), Promise.reject(r))
    } finally {
      t.isNeedLoading && this.requestCount--, this.handleLoading(t, !1)
    }
  }
  handleLoading(e, t) {
    e.isNeedLoading && this.requestCount
  }
  addToken(e, t) {
    t.isNeedToken, (e.headers = {})
  }
  handleError(e, t) {
    '取消请求' !== t.message &&
      e.isNeedShowError &&
      console.error('请求出错了。。。')
  }
  transformUrl(e = '', t = !1) {
    return e
      ? t
        ? /\/$/.test(e)
          ? e
          : `${e}/`
        : /^\//.test(e)
        ? `${e.substr(1)}`
        : e
      : e
  }
  async get(e, t, r) {
    return this.transfromRquest(a({ url: e, method: 'GET' }, t), r)
  }
  async post(e, t, r = this.defaultCustomConfig) {
    return this.transfromRquest(a({ url: e, method: 'POST' }, t), r)
  }
  async put(e, t, r = this.defaultCustomConfig) {
    return this.transfromRquest(a({ url: e, method: 'PUT' }, t), r)
  }
  async delete(e, t, r = this.defaultCustomConfig) {
    return this.transfromRquest(a({ url: e, method: 'DELETE' }, t), r)
  }
})({ baseURL: 'http://loaclhost:3000' })
const Be = new Ae()
var De = (function (e) {
  const t = Object.create(null)
  return (
    Object.keys(e).forEach((r) => {
      const { method: n, url: o } = e[r]
      t[r] = async (e, t) => {
        if ('get' === n)
          try {
            const e = await Be.get(o)
            return Promise.resolve(e)
          } catch (r) {
            return console.error(r, 'error'), ke[n](o, e, t)
          }
        return ke[n](o, e, t)
      }
    }),
    t
  )
})({ loginIn: { method: 'get', url: 'api/loginIn' } })
function Ie() {
  const { push: e } = f()
  return d.createElement(
    'div',
    null,
    d.createElement('img', {
      width: '100%',
      src: 'http://cdn-page.daxjgxx.com/assets/banner.d6c2c572.jpg',
      alt: '',
      onClick: () => {
        e('/editor')
      },
    }),
    d.createElement(
      'button',
      {
        onClick: async function () {
          const e = await De.loginIn({}, { isNeedCache: !0 })
          console.log(e)
        },
      },
      '测试 api 服务'
    )
  )
}
export { Ie as default }
