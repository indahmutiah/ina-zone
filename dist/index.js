var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS((exports, module) => {
  var ya = Object.create;
  var sr = Object.defineProperty;
  var wa = Object.getOwnPropertyDescriptor;
  var Ea = Object.getOwnPropertyNames;
  var ba = Object.getPrototypeOf;
  var xa = Object.prototype.hasOwnProperty;
  var Ae = (e, t) => () => (e && (t = e(e = 0)), t);
  var Fe = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var ar = (e, t) => {
    for (var r in t)
      sr(e, r, { get: t[r], enumerable: true });
  };
  var li = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let i of Ea(t))
        !xa.call(e, i) && i !== r && sr(e, i, { get: () => t[i], enumerable: !(n = wa(t, i)) || n.enumerable });
    return e;
  };
  var Je = (e, t, r) => (r = e != null ? ya(ba(e)) : {}, li(t || !e || !e.__esModule ? sr(r, "default", { value: e, enumerable: true }) : r, e));
  var Pa = (e) => li(sr({}, "__esModule", { value: true }), e);
  var y;
  var u = Ae(() => {
    y = { nextTick: (e, ...t) => {
      setTimeout(() => {
        e(...t);
      }, 0);
    }, env: {}, version: "", cwd: () => "/", stderr: {}, argv: ["/bin/node"] };
  });
  var b;
  var c = Ae(() => {
    b = globalThis.performance ?? (() => {
      let e = Date.now();
      return { now: () => Date.now() - e };
    })();
  });
  var E;
  var p = Ae(() => {
    E = () => {};
    E.prototype = E;
  });
  var m = Ae(() => {});
  var Ai = Fe((Ke) => {
    d();
    u();
    c();
    p();
    m();
    var di = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), va = di((e) => {
      e.byteLength = l, e.toByteArray = g, e.fromByteArray = S;
      var t = [], r = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (o = 0, s = i.length;o < s; ++o)
        t[o] = i[o], r[i.charCodeAt(o)] = o;
      var o, s;
      r[45] = 62, r[95] = 63;
      function a(R) {
        var A = R.length;
        if (A % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var D = R.indexOf("=");
        D === -1 && (D = A);
        var M = D === A ? 0 : 4 - D % 4;
        return [D, M];
      }
      function l(R) {
        var A = a(R), D = A[0], M = A[1];
        return (D + M) * 3 / 4 - M;
      }
      function f(R, A, D) {
        return (A + D) * 3 / 4 - D;
      }
      function g(R) {
        var A, D = a(R), M = D[0], U = D[1], O = new n(f(R, M, U)), F = 0, L = U > 0 ? M - 4 : M, J;
        for (J = 0;J < L; J += 4)
          A = r[R.charCodeAt(J)] << 18 | r[R.charCodeAt(J + 1)] << 12 | r[R.charCodeAt(J + 2)] << 6 | r[R.charCodeAt(J + 3)], O[F++] = A >> 16 & 255, O[F++] = A >> 8 & 255, O[F++] = A & 255;
        return U === 2 && (A = r[R.charCodeAt(J)] << 2 | r[R.charCodeAt(J + 1)] >> 4, O[F++] = A & 255), U === 1 && (A = r[R.charCodeAt(J)] << 10 | r[R.charCodeAt(J + 1)] << 4 | r[R.charCodeAt(J + 2)] >> 2, O[F++] = A >> 8 & 255, O[F++] = A & 255), O;
      }
      function h(R) {
        return t[R >> 18 & 63] + t[R >> 12 & 63] + t[R >> 6 & 63] + t[R & 63];
      }
      function v(R, A, D) {
        for (var M, U = [], O = A;O < D; O += 3)
          M = (R[O] << 16 & 16711680) + (R[O + 1] << 8 & 65280) + (R[O + 2] & 255), U.push(h(M));
        return U.join("");
      }
      function S(R) {
        for (var A, D = R.length, M = D % 3, U = [], O = 16383, F = 0, L = D - M;F < L; F += O)
          U.push(v(R, F, F + O > L ? L : F + O));
        return M === 1 ? (A = R[D - 1], U.push(t[A >> 2] + t[A << 4 & 63] + "==")) : M === 2 && (A = (R[D - 2] << 8) + R[D - 1], U.push(t[A >> 10] + t[A >> 4 & 63] + t[A << 2 & 63] + "=")), U.join("");
      }
    }), Ta = di((e) => {
      e.read = function(t, r, n, i, o) {
        var s, a, l = o * 8 - i - 1, f = (1 << l) - 1, g = f >> 1, h = -7, v = n ? o - 1 : 0, S = n ? -1 : 1, R = t[r + v];
        for (v += S, s = R & (1 << -h) - 1, R >>= -h, h += l;h > 0; s = s * 256 + t[r + v], v += S, h -= 8)
          ;
        for (a = s & (1 << -h) - 1, s >>= -h, h += i;h > 0; a = a * 256 + t[r + v], v += S, h -= 8)
          ;
        if (s === 0)
          s = 1 - g;
        else {
          if (s === f)
            return a ? NaN : (R ? -1 : 1) * (1 / 0);
          a = a + Math.pow(2, i), s = s - g;
        }
        return (R ? -1 : 1) * a * Math.pow(2, s - i);
      }, e.write = function(t, r, n, i, o, s) {
        var a, l, f, g = s * 8 - o - 1, h = (1 << g) - 1, v = h >> 1, S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, R = i ? 0 : s - 1, A = i ? 1 : -1, D = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
        for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (l = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), a + v >= 1 ? r += S / f : r += S * Math.pow(2, 1 - v), r * f >= 2 && (a++, f /= 2), a + v >= h ? (l = 0, a = h) : a + v >= 1 ? (l = (r * f - 1) * Math.pow(2, o), a = a + v) : (l = r * Math.pow(2, v - 1) * Math.pow(2, o), a = 0));o >= 8; t[n + R] = l & 255, R += A, l /= 256, o -= 8)
          ;
        for (a = a << o | l, g += o;g > 0; t[n + R] = a & 255, R += A, a /= 256, g -= 8)
          ;
        t[n + R - A] |= D * 128;
      };
    }), sn = va(), We = Ta(), ui = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Ke.Buffer = T;
    Ke.SlowBuffer = ka;
    Ke.INSPECT_MAX_BYTES = 50;
    var lr = 2147483647;
    Ke.kMaxLength = lr;
    T.TYPED_ARRAY_SUPPORT = Ca();
    !T.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Ca() {
      try {
        let e = new Uint8Array(1), t = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(T.prototype, "parent", { enumerable: true, get: function() {
      if (T.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(T.prototype, "offset", { enumerable: true, get: function() {
      if (T.isBuffer(this))
        return this.byteOffset;
    } });
    function xe(e) {
      if (e > lr)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
      let t = new Uint8Array(e);
      return Object.setPrototypeOf(t, T.prototype), t;
    }
    function T(e, t, r) {
      if (typeof e == "number") {
        if (typeof t == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return un(e);
      }
      return fi(e, t, r);
    }
    T.poolSize = 8192;
    function fi(e, t, r) {
      if (typeof e == "string")
        return Aa(e, t);
      if (ArrayBuffer.isView(e))
        return Sa(e);
      if (e == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      if (me(e, ArrayBuffer) || e && me(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(e, SharedArrayBuffer) || e && me(e.buffer, SharedArrayBuffer)))
        return hi(e, t, r);
      if (typeof e == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let n = e.valueOf && e.valueOf();
      if (n != null && n !== e)
        return T.from(n, t, r);
      let i = Ia(e);
      if (i)
        return i;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return T.from(e[Symbol.toPrimitive]("string"), t, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
    }
    T.from = function(e, t, r) {
      return fi(e, t, r);
    };
    Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(T, Uint8Array);
    function gi(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Ra(e, t, r) {
      return gi(e), e <= 0 ? xe(e) : t !== undefined ? typeof r == "string" ? xe(e).fill(t, r) : xe(e).fill(t) : xe(e);
    }
    T.alloc = function(e, t, r) {
      return Ra(e, t, r);
    };
    function un(e) {
      return gi(e), xe(e < 0 ? 0 : cn(e) | 0);
    }
    T.allocUnsafe = function(e) {
      return un(e);
    };
    T.allocUnsafeSlow = function(e) {
      return un(e);
    };
    function Aa(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t))
        throw new TypeError("Unknown encoding: " + t);
      let r = yi(e, t) | 0, n = xe(r), i = n.write(e, t);
      return i !== r && (n = n.slice(0, i)), n;
    }
    function an(e) {
      let t = e.length < 0 ? 0 : cn(e.length) | 0, r = xe(t);
      for (let n = 0;n < t; n += 1)
        r[n] = e[n] & 255;
      return r;
    }
    function Sa(e) {
      if (me(e, Uint8Array)) {
        let t = new Uint8Array(e);
        return hi(t.buffer, t.byteOffset, t.byteLength);
      }
      return an(e);
    }
    function hi(e, t, r) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return t === undefined && r === undefined ? n = new Uint8Array(e) : r === undefined ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, T.prototype), n;
    }
    function Ia(e) {
      if (T.isBuffer(e)) {
        let t = cn(e.length) | 0, r = xe(t);
        return r.length === 0 || e.copy(r, 0, 0, t), r;
      }
      if (e.length !== undefined)
        return typeof e.length != "number" || mn(e.length) ? xe(0) : an(e);
      if (e.type === "Buffer" && Array.isArray(e.data))
        return an(e.data);
    }
    function cn(e) {
      if (e >= lr)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + lr.toString(16) + " bytes");
      return e | 0;
    }
    function ka(e) {
      return +e != e && (e = 0), T.alloc(+e);
    }
    T.isBuffer = function(e) {
      return e != null && e._isBuffer === true && e !== T.prototype;
    };
    T.compare = function(e, t) {
      if (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), me(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)), !T.isBuffer(e) || !T.isBuffer(t))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (e === t)
        return 0;
      let r = e.length, n = t.length;
      for (let i = 0, o = Math.min(r, n);i < o; ++i)
        if (e[i] !== t[i]) {
          r = e[i], n = t[i];
          break;
        }
      return r < n ? -1 : n < r ? 1 : 0;
    };
    T.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    T.concat = function(e, t) {
      if (!Array.isArray(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (e.length === 0)
        return T.alloc(0);
      let r;
      if (t === undefined)
        for (t = 0, r = 0;r < e.length; ++r)
          t += e[r].length;
      let n = T.allocUnsafe(t), i = 0;
      for (r = 0;r < e.length; ++r) {
        let o = e[r];
        if (me(o, Uint8Array))
          i + o.length > n.length ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i);
        else if (T.isBuffer(o))
          o.copy(n, i);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        i += o.length;
      }
      return n;
    };
    function yi(e, t) {
      if (T.isBuffer(e))
        return e.length;
      if (ArrayBuffer.isView(e) || me(e, ArrayBuffer))
        return e.byteLength;
      if (typeof e != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
      let r = e.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && r === 0)
        return 0;
      let i = false;
      for (;; )
        switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return ln(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return Ri(e).length;
          default:
            if (i)
              return n ? -1 : ln(e).length;
            t = ("" + t).toLowerCase(), i = true;
        }
    }
    T.byteLength = yi;
    function Oa(e, t, r) {
      let n = false;
      if ((t === undefined || t < 0) && (t = 0), t > this.length || ((r === undefined || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
        return "";
      for (e || (e = "utf8");; )
        switch (e) {
          case "hex":
            return $a(this, t, r);
          case "utf8":
          case "utf-8":
            return Ei(this, t, r);
          case "ascii":
            return Ua(this, t, r);
          case "latin1":
          case "binary":
            return qa(this, t, r);
          case "base64":
            return La(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Va(this, t, r);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = true;
        }
    }
    T.prototype._isBuffer = true;
    function Le(e, t, r) {
      let n = e[t];
      e[t] = e[r], e[r] = n;
    }
    T.prototype.swap16 = function() {
      let e = this.length;
      if (e % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t = 0;t < e; t += 2)
        Le(this, t, t + 1);
      return this;
    };
    T.prototype.swap32 = function() {
      let e = this.length;
      if (e % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t = 0;t < e; t += 4)
        Le(this, t, t + 3), Le(this, t + 1, t + 2);
      return this;
    };
    T.prototype.swap64 = function() {
      let e = this.length;
      if (e % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t = 0;t < e; t += 8)
        Le(this, t, t + 7), Le(this, t + 1, t + 6), Le(this, t + 2, t + 5), Le(this, t + 3, t + 4);
      return this;
    };
    T.prototype.toString = function() {
      let e = this.length;
      return e === 0 ? "" : arguments.length === 0 ? Ei(this, 0, e) : Oa.apply(this, arguments);
    };
    T.prototype.toLocaleString = T.prototype.toString;
    T.prototype.equals = function(e) {
      if (!T.isBuffer(e))
        throw new TypeError("Argument must be a Buffer");
      return this === e ? true : T.compare(this, e) === 0;
    };
    T.prototype.inspect = function() {
      let e = "", t = Ke.INSPECT_MAX_BYTES;
      return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
    };
    ui && (T.prototype[ui] = T.prototype.inspect);
    T.prototype.compare = function(e, t, r, n, i) {
      if (me(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)), !T.isBuffer(e))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
      if (t === undefined && (t = 0), r === undefined && (r = e ? e.length : 0), n === undefined && (n = 0), i === undefined && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length)
        throw new RangeError("out of range index");
      if (n >= i && t >= r)
        return 0;
      if (n >= i)
        return -1;
      if (t >= r)
        return 1;
      if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e)
        return 0;
      let o = i - n, s = r - t, a = Math.min(o, s), l = this.slice(n, i), f = e.slice(t, r);
      for (let g = 0;g < a; ++g)
        if (l[g] !== f[g]) {
          o = l[g], s = f[g];
          break;
        }
      return o < s ? -1 : s < o ? 1 : 0;
    };
    function wi(e, t, r, n, i) {
      if (e.length === 0)
        return -1;
      if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, mn(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (i)
          return -1;
        r = e.length - 1;
      } else if (r < 0)
        if (i)
          r = 0;
        else
          return -1;
      if (typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t))
        return t.length === 0 ? -1 : ci(e, t, r, n, i);
      if (typeof t == "number")
        return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : ci(e, [t], r, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    function ci(e, t, r, n, i) {
      let o = 1, s = e.length, a = t.length;
      if (n !== undefined && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
          return -1;
        o = 2, s /= 2, a /= 2, r /= 2;
      }
      function l(g, h) {
        return o === 1 ? g[h] : g.readUInt16BE(h * o);
      }
      let f;
      if (i) {
        let g = -1;
        for (f = r;f < s; f++)
          if (l(e, f) === l(t, g === -1 ? 0 : f - g)) {
            if (g === -1 && (g = f), f - g + 1 === a)
              return g * o;
          } else
            g !== -1 && (f -= f - g), g = -1;
      } else
        for (r + a > s && (r = s - a), f = r;f >= 0; f--) {
          let g = true;
          for (let h = 0;h < a; h++)
            if (l(e, f + h) !== l(t, h)) {
              g = false;
              break;
            }
          if (g)
            return f;
        }
      return -1;
    }
    T.prototype.includes = function(e, t, r) {
      return this.indexOf(e, t, r) !== -1;
    };
    T.prototype.indexOf = function(e, t, r) {
      return wi(this, e, t, r, true);
    };
    T.prototype.lastIndexOf = function(e, t, r) {
      return wi(this, e, t, r, false);
    };
    function Da(e, t, r, n) {
      r = Number(r) || 0;
      let i = e.length - r;
      n ? (n = Number(n), n > i && (n = i)) : n = i;
      let o = t.length;
      n > o / 2 && (n = o / 2);
      let s;
      for (s = 0;s < n; ++s) {
        let a = parseInt(t.substr(s * 2, 2), 16);
        if (mn(a))
          return s;
        e[r + s] = a;
      }
      return s;
    }
    function Ma(e, t, r, n) {
      return ur(ln(t, e.length - r), e, r, n);
    }
    function Na(e, t, r, n) {
      return ur(Qa(t), e, r, n);
    }
    function _a(e, t, r, n) {
      return ur(Ri(t), e, r, n);
    }
    function Fa(e, t, r, n) {
      return ur(Wa(t, e.length - r), e, r, n);
    }
    T.prototype.write = function(e, t, r, n) {
      if (t === undefined)
        n = "utf8", r = this.length, t = 0;
      else if (r === undefined && typeof t == "string")
        n = t, r = this.length, t = 0;
      else if (isFinite(t))
        t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === undefined && (n = "utf8")) : (n = r, r = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let i = this.length - t;
      if ((r === undefined || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");
      let o = false;
      for (;; )
        switch (n) {
          case "hex":
            return Da(this, e, t, r);
          case "utf8":
          case "utf-8":
            return Ma(this, e, t, r);
          case "ascii":
          case "latin1":
          case "binary":
            return Na(this, e, t, r);
          case "base64":
            return _a(this, e, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Fa(this, e, t, r);
          default:
            if (o)
              throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), o = true;
        }
    };
    T.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function La(e, t, r) {
      return t === 0 && r === e.length ? sn.fromByteArray(e) : sn.fromByteArray(e.slice(t, r));
    }
    function Ei(e, t, r) {
      r = Math.min(e.length, r);
      let n = [], i = t;
      for (;i < r; ) {
        let o = e[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (i + a <= r) {
          let l, f, g, h;
          switch (a) {
            case 1:
              o < 128 && (s = o);
              break;
            case 2:
              l = e[i + 1], (l & 192) === 128 && (h = (o & 31) << 6 | l & 63, h > 127 && (s = h));
              break;
            case 3:
              l = e[i + 1], f = e[i + 2], (l & 192) === 128 && (f & 192) === 128 && (h = (o & 15) << 12 | (l & 63) << 6 | f & 63, h > 2047 && (h < 55296 || h > 57343) && (s = h));
              break;
            case 4:
              l = e[i + 1], f = e[i + 2], g = e[i + 3], (l & 192) === 128 && (f & 192) === 128 && (g & 192) === 128 && (h = (o & 15) << 18 | (l & 63) << 12 | (f & 63) << 6 | g & 63, h > 65535 && h < 1114112 && (s = h));
          }
        }
        s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
      }
      return Ba(n);
    }
    var pi = 4096;
    function Ba(e) {
      let t = e.length;
      if (t <= pi)
        return String.fromCharCode.apply(String, e);
      let r = "", n = 0;
      for (;n < t; )
        r += String.fromCharCode.apply(String, e.slice(n, n += pi));
      return r;
    }
    function Ua(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i] & 127);
      return n;
    }
    function qa(e, t, r) {
      let n = "";
      r = Math.min(e.length, r);
      for (let i = t;i < r; ++i)
        n += String.fromCharCode(e[i]);
      return n;
    }
    function $a(e, t, r) {
      let n = e.length;
      (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
      let i = "";
      for (let o = t;o < r; ++o)
        i += Ha[e[o]];
      return i;
    }
    function Va(e, t, r) {
      let n = e.slice(t, r), i = "";
      for (let o = 0;o < n.length - 1; o += 2)
        i += String.fromCharCode(n[o] + n[o + 1] * 256);
      return i;
    }
    T.prototype.slice = function(e, t) {
      let r = this.length;
      e = ~~e, t = t === undefined ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
      let n = this.subarray(e, t);
      return Object.setPrototypeOf(n, T.prototype), n;
    };
    function H(e, t, r) {
      if (e % 1 !== 0 || e < 0)
        throw new RangeError("offset is not uint");
      if (e + t > r)
        throw new RangeError("Trying to access beyond buffer length");
    }
    T.prototype.readUintLE = T.prototype.readUIntLE = function(e, t, r) {
      e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
      let n = this[e], i = 1, o = 0;
      for (;++o < t && (i *= 256); )
        n += this[e + o] * i;
      return n;
    };
    T.prototype.readUintBE = T.prototype.readUIntBE = function(e, t, r) {
      e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
      let n = this[e + --t], i = 1;
      for (;t > 0 && (i *= 256); )
        n += this[e + --t] * i;
      return n;
    };
    T.prototype.readUint8 = T.prototype.readUInt8 = function(e, t) {
      return e = e >>> 0, t || H(e, 1, this.length), this[e];
    };
    T.prototype.readUint16LE = T.prototype.readUInt16LE = function(e, t) {
      return e = e >>> 0, t || H(e, 2, this.length), this[e] | this[e + 1] << 8;
    };
    T.prototype.readUint16BE = T.prototype.readUInt16BE = function(e, t) {
      return e = e >>> 0, t || H(e, 2, this.length), this[e] << 8 | this[e + 1];
    };
    T.prototype.readUint32LE = T.prototype.readUInt32LE = function(e, t) {
      return e = e >>> 0, t || H(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
    };
    T.prototype.readUint32BE = T.prototype.readUInt32BE = function(e, t) {
      return e = e >>> 0, t || H(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
    };
    T.prototype.readBigUInt64LE = Se(function(e) {
      e = e >>> 0, He(e, "offset");
      let t = this[e], r = this[e + 7];
      (t === undefined || r === undefined) && vt(e, this.length - 8);
      let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
      return BigInt(n) + (BigInt(i) << BigInt(32));
    });
    T.prototype.readBigUInt64BE = Se(function(e) {
      e = e >>> 0, He(e, "offset");
      let t = this[e], r = this[e + 7];
      (t === undefined || r === undefined) && vt(e, this.length - 8);
      let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
      return (BigInt(n) << BigInt(32)) + BigInt(i);
    });
    T.prototype.readIntLE = function(e, t, r) {
      e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
      let n = this[e], i = 1, o = 0;
      for (;++o < t && (i *= 256); )
        n += this[e + o] * i;
      return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
    };
    T.prototype.readIntBE = function(e, t, r) {
      e = e >>> 0, t = t >>> 0, r || H(e, t, this.length);
      let n = t, i = 1, o = this[e + --n];
      for (;n > 0 && (i *= 256); )
        o += this[e + --n] * i;
      return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
    };
    T.prototype.readInt8 = function(e, t) {
      return e = e >>> 0, t || H(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
    };
    T.prototype.readInt16LE = function(e, t) {
      e = e >>> 0, t || H(e, 2, this.length);
      let r = this[e] | this[e + 1] << 8;
      return r & 32768 ? r | 4294901760 : r;
    };
    T.prototype.readInt16BE = function(e, t) {
      e = e >>> 0, t || H(e, 2, this.length);
      let r = this[e + 1] | this[e] << 8;
      return r & 32768 ? r | 4294901760 : r;
    };
    T.prototype.readInt32LE = function(e, t) {
      return e = e >>> 0, t || H(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
    };
    T.prototype.readInt32BE = function(e, t) {
      return e = e >>> 0, t || H(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
    };
    T.prototype.readBigInt64LE = Se(function(e) {
      e = e >>> 0, He(e, "offset");
      let t = this[e], r = this[e + 7];
      (t === undefined || r === undefined) && vt(e, this.length - 8);
      let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
      return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
    });
    T.prototype.readBigInt64BE = Se(function(e) {
      e = e >>> 0, He(e, "offset");
      let t = this[e], r = this[e + 7];
      (t === undefined || r === undefined) && vt(e, this.length - 8);
      let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
      return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r);
    });
    T.prototype.readFloatLE = function(e, t) {
      return e = e >>> 0, t || H(e, 4, this.length), We.read(this, e, true, 23, 4);
    };
    T.prototype.readFloatBE = function(e, t) {
      return e = e >>> 0, t || H(e, 4, this.length), We.read(this, e, false, 23, 4);
    };
    T.prototype.readDoubleLE = function(e, t) {
      return e = e >>> 0, t || H(e, 8, this.length), We.read(this, e, true, 52, 8);
    };
    T.prototype.readDoubleBE = function(e, t) {
      return e = e >>> 0, t || H(e, 8, this.length), We.read(this, e, false, 52, 8);
    };
    function re(e, t, r, n, i, o) {
      if (!T.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < o)
        throw new RangeError('"value" argument is out of bounds');
      if (r + n > e.length)
        throw new RangeError("Index out of range");
    }
    T.prototype.writeUintLE = T.prototype.writeUIntLE = function(e, t, r, n) {
      if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
        let s = Math.pow(2, 8 * r) - 1;
        re(this, e, t, r, s, 0);
      }
      let i = 1, o = 0;
      for (this[t] = e & 255;++o < r && (i *= 256); )
        this[t + o] = e / i & 255;
      return t + r;
    };
    T.prototype.writeUintBE = T.prototype.writeUIntBE = function(e, t, r, n) {
      if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
        let s = Math.pow(2, 8 * r) - 1;
        re(this, e, t, r, s, 0);
      }
      let i = r - 1, o = 1;
      for (this[t + i] = e & 255;--i >= 0 && (o *= 256); )
        this[t + i] = e / o & 255;
      return t + r;
    };
    T.prototype.writeUint8 = T.prototype.writeUInt8 = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
    };
    T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
    };
    T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
    };
    T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
    };
    T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
    };
    function bi(e, t, r, n, i) {
      Ci(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
      let s = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r;
    }
    function xi(e, t, r, n, i) {
      Ci(t, n, i, e, r, 7);
      let o = Number(t & BigInt(4294967295));
      e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
      let s = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8;
    }
    T.prototype.writeBigUInt64LE = Se(function(e, t = 0) {
      return bi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    T.prototype.writeBigUInt64BE = Se(function(e, t = 0) {
      return xi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    T.prototype.writeIntLE = function(e, t, r, n) {
      if (e = +e, t = t >>> 0, !n) {
        let a = Math.pow(2, 8 * r - 1);
        re(this, e, t, r, a - 1, -a);
      }
      let i = 0, o = 1, s = 0;
      for (this[t] = e & 255;++i < r && (o *= 256); )
        e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
      return t + r;
    };
    T.prototype.writeIntBE = function(e, t, r, n) {
      if (e = +e, t = t >>> 0, !n) {
        let a = Math.pow(2, 8 * r - 1);
        re(this, e, t, r, a - 1, -a);
      }
      let i = r - 1, o = 1, s = 0;
      for (this[t + i] = e & 255;--i >= 0 && (o *= 256); )
        e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
      return t + r;
    };
    T.prototype.writeInt8 = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
    };
    T.prototype.writeInt16LE = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
    };
    T.prototype.writeInt16BE = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
    };
    T.prototype.writeInt32LE = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
    };
    T.prototype.writeInt32BE = function(e, t, r) {
      return e = +e, t = t >>> 0, r || re(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
    };
    T.prototype.writeBigInt64LE = Se(function(e, t = 0) {
      return bi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    T.prototype.writeBigInt64BE = Se(function(e, t = 0) {
      return xi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function Pi(e, t, r, n, i, o) {
      if (r + n > e.length)
        throw new RangeError("Index out of range");
      if (r < 0)
        throw new RangeError("Index out of range");
    }
    function vi(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || Pi(e, t, r, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), We.write(e, t, r, n, 23, 4), r + 4;
    }
    T.prototype.writeFloatLE = function(e, t, r) {
      return vi(this, e, t, true, r);
    };
    T.prototype.writeFloatBE = function(e, t, r) {
      return vi(this, e, t, false, r);
    };
    function Ti(e, t, r, n, i) {
      return t = +t, r = r >>> 0, i || Pi(e, t, r, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), We.write(e, t, r, n, 52, 8), r + 8;
    }
    T.prototype.writeDoubleLE = function(e, t, r) {
      return Ti(this, e, t, true, r);
    };
    T.prototype.writeDoubleBE = function(e, t, r) {
      return Ti(this, e, t, false, r);
    };
    T.prototype.copy = function(e, t, r, n) {
      if (!T.isBuffer(e))
        throw new TypeError("argument should be a Buffer");
      if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0)
        return 0;
      if (t < 0)
        throw new RangeError("targetStart out of bounds");
      if (r < 0 || r >= this.length)
        throw new RangeError("Index out of range");
      if (n < 0)
        throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
      let i = n - r;
      return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
    };
    T.prototype.fill = function(e, t, r, n) {
      if (typeof e == "string") {
        if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), n !== undefined && typeof n != "string")
          throw new TypeError("encoding must be a string");
        if (typeof n == "string" && !T.isEncoding(n))
          throw new TypeError("Unknown encoding: " + n);
        if (e.length === 1) {
          let o = e.charCodeAt(0);
          (n === "utf8" && o < 128 || n === "latin1") && (e = o);
        }
      } else
        typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
      if (t < 0 || this.length < t || this.length < r)
        throw new RangeError("Out of range index");
      if (r <= t)
        return this;
      t = t >>> 0, r = r === undefined ? this.length : r >>> 0, e || (e = 0);
      let i;
      if (typeof e == "number")
        for (i = t;i < r; ++i)
          this[i] = e;
      else {
        let o = T.isBuffer(e) ? e : T.from(e, n), s = o.length;
        if (s === 0)
          throw new TypeError('The value "' + e + '" is invalid for argument "value"');
        for (i = 0;i < r - t; ++i)
          this[i + t] = o[i % s];
      }
      return this;
    };
    var Qe = {};
    function pn(e, t, r) {
      Qe[e] = class extends r {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
        }
        get code() {
          return e;
        }
        set code(n) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    pn("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
      return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    pn("ERR_INVALID_ARG_TYPE", function(e, t) {
      return `The "${e}" argument must be of type number. Received type ${typeof t}`;
    }, TypeError);
    pn("ERR_OUT_OF_RANGE", function(e, t, r) {
      let n = `The value of "${e}" is out of range.`, i = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = mi(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = mi(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
    }, RangeError);
    function mi(e) {
      let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
      for (;r >= n + 4; r -= 3)
        t = `_${e.slice(r - 3, r)}${t}`;
      return `${e.slice(0, r)}${t}`;
    }
    function ja(e, t, r) {
      He(t, "offset"), (e[t] === undefined || e[t + r] === undefined) && vt(t, e.length - (r + 1));
    }
    function Ci(e, t, r, n, i, o) {
      if (e > r || e < t) {
        let s = typeof t == "bigint" ? "n" : "", a;
        throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new Qe.ERR_OUT_OF_RANGE("value", a, e);
      }
      ja(n, i, o);
    }
    function He(e, t) {
      if (typeof e != "number")
        throw new Qe.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function vt(e, t, r) {
      throw Math.floor(e) !== e ? (He(e, r), new Qe.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Qe.ERR_BUFFER_OUT_OF_BOUNDS : new Qe.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
    }
    var Ga = /[^+/0-9A-Za-z-_]/g;
    function Ja(e) {
      if (e = e.split("=")[0], e = e.trim().replace(Ga, ""), e.length < 2)
        return "";
      for (;e.length % 4 !== 0; )
        e = e + "=";
      return e;
    }
    function ln(e, t) {
      t = t || 1 / 0;
      let r, n = e.length, i = null, o = [];
      for (let s = 0;s < n; ++s) {
        if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (s + 1 === n) {
              (t -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue;
          }
          r = (i - 55296 << 10 | r - 56320) + 65536;
        } else
          i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((t -= 1) < 0)
            break;
          o.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0)
            break;
          o.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0)
            break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0)
            break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function Qa(e) {
      let t = [];
      for (let r = 0;r < e.length; ++r)
        t.push(e.charCodeAt(r) & 255);
      return t;
    }
    function Wa(e, t) {
      let r, n, i, o = [];
      for (let s = 0;s < e.length && !((t -= 2) < 0); ++s)
        r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
      return o;
    }
    function Ri(e) {
      return sn.toByteArray(Ja(e));
    }
    function ur(e, t, r, n) {
      let i;
      for (i = 0;i < n && !(i + r >= t.length || i >= e.length); ++i)
        t[i + r] = e[i];
      return i;
    }
    function me(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function mn(e) {
      return e !== e;
    }
    var Ha = function() {
      let e = "0123456789abcdef", t = new Array(256);
      for (let r = 0;r < 16; ++r) {
        let n = r * 16;
        for (let i = 0;i < 16; ++i)
          t[n + i] = e[r] + e[i];
      }
      return t;
    }();
    function Se(e) {
      return typeof BigInt > "u" ? Ka : e;
    }
    function Ka() {
      throw new Error("BigInt not supported");
    }
  });
  var w;
  var d = Ae(() => {
    w = Je(Ai());
  });
  function il() {
    return false;
  }
  var ol;
  var sl;
  var Gi;
  var Ji = Ae(() => {
    d();
    u();
    c();
    p();
    m();
    ol = {}, sl = { existsSync: il, promises: ol }, Gi = sl;
  });
  function al(...e) {
    return e.join("/");
  }
  function ll(...e) {
    return e.join("/");
  }
  var Qi;
  var ul;
  var cl;
  var Rt;
  var Wi = Ae(() => {
    d();
    u();
    c();
    p();
    m();
    Qi = "/", ul = { sep: Qi }, cl = { resolve: al, posix: ul, join: ll, sep: Qi }, Rt = cl;
  });
  var Hi = Fe((fd, pl) => {
    pl.exports = { name: "@prisma/internals", version: "6.4.1", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@antfu/ni": "0.21.12", "@babel/helper-validator-identifier": "7.24.7", "@opentelemetry/api": "1.9.0", "@swc/core": "1.2.204", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.31", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "2.1.0", dotenv: "16.4.7", esbuild: "0.24.2", "escape-string-regexp": "4.0.0", execa: "5.1.1", "fast-glob": "3.3.3", "find-up": "5.0.0", "fp-ts": "2.16.9", "fs-extra": "11.1.1", "fs-jetpack": "5.1.0", "global-dirs": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", "read-package-up": "11.0.0", "replace-string": "3.1.0", resolve: "1.22.10", "string-width": "4.2.3", "strip-ansi": "6.0.1", "strip-indent": "3.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "2.1.1", tmp: "0.2.3", "ts-node": "10.9.2", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: true } }, sideEffects: false };
  });
  var gr;
  var Yi = Ae(() => {
    d();
    u();
    c();
    p();
    m();
    gr = class {
      constructor() {
        this.events = {};
      }
      on(t, r) {
        return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
      }
      emit(t, ...r) {
        return this.events[t] ? (this.events[t].forEach((n) => {
          n(...r);
        }), true) : false;
      }
    };
  });
  var Xi = Fe((Xd, Zi) => {
    d();
    u();
    c();
    p();
    m();
    Zi.exports = (e, t = 1, r) => {
      if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
        throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
      if (typeof t != "number")
        throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
      if (typeof r.indent != "string")
        throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
      if (t === 0)
        return e;
      let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return e.replace(n, r.indent.repeat(t));
    };
  });
  var ro = Fe((mf, to) => {
    d();
    u();
    c();
    p();
    m();
    to.exports = ({ onlyFirst: e = false } = {}) => {
      let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t, e ? undefined : "g");
    };
  });
  var io = Fe((wf, no) => {
    d();
    u();
    c();
    p();
    m();
    var wl = ro();
    no.exports = (e) => typeof e == "string" ? e.replace(wl(), "") : e;
  });
  var On = Fe((sy, Po) => {
    d();
    u();
    c();
    p();
    m();
    Po.exports = function() {
      function e(t, r, n, i, o) {
        return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
      }
      return function(t, r) {
        if (t === r)
          return 0;
        if (t.length > r.length) {
          var n = t;
          t = r, r = n;
        }
        for (var i = t.length, o = r.length;i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
          i--, o--;
        for (var s = 0;s < i && t.charCodeAt(s) === r.charCodeAt(s); )
          s++;
        if (i -= s, o -= s, i === 0 || o < 3)
          return o;
        var a = 0, l, f, g, h, v, S, R, A, D, M, U, O, F = [];
        for (l = 0;l < i; l++)
          F.push(l + 1), F.push(t.charCodeAt(s + l));
        for (var L = F.length - 1;a < o - 3; )
          for (D = r.charCodeAt(s + (f = a)), M = r.charCodeAt(s + (g = a + 1)), U = r.charCodeAt(s + (h = a + 2)), O = r.charCodeAt(s + (v = a + 3)), S = a += 4, l = 0;l < L; l += 2)
            R = F[l], A = F[l + 1], f = e(R, f, g, D, A), g = e(f, g, h, M, A), h = e(g, h, v, U, A), S = e(h, v, S, O, A), F[l] = S, v = h, h = g, g = f, f = R;
        for (;a < o; )
          for (D = r.charCodeAt(s + (f = a)), S = ++a, l = 0;l < L; l += 2)
            R = F[l], F[l] = S = e(R, f, S, D, F[l + 1]), f = R;
        return S;
      };
    }();
  });
  var Xo = Fe((Vb, ic) => {
    ic.exports = { name: "@prisma/engines-version", version: "6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "a9055b89e58b4b5bfb59600785423b1db3d0e75d" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
  });
  var op = {};
  ar(op, { Debug: () => En, Decimal: () => he, Extensions: () => dn, MetricsClient: () => mt, PrismaClientInitializationError: () => Q, PrismaClientKnownRequestError: () => ne, PrismaClientRustPanicError: () => ve, PrismaClientUnknownRequestError: () => ie, PrismaClientValidationError: () => Z, Public: () => fn, Sql: () => se, createParam: () => jo, defineDmmfProperty: () => zo, deserializeJsonResponse: () => tt, deserializeRawResult: () => en, dmmfToRuntimeDataModel: () => Ko, empty: () => ts, getPrismaClient: () => fa, getRuntime: () => Wr, join: () => es, makeStrictEnum: () => ga, makeTypedQueryFactory: () => Yo, objectEnumValues: () => Dr, raw: () => $n, serializeJsonQuery: () => Ur, skip: () => Br, sqltag: () => Vn, warnEnvConflicts: () => {
    return;
  }, warnOnce: () => It });
  module.exports = Pa(op);
  d();
  u();
  c();
  p();
  m();
  var dn = {};
  ar(dn, { defineExtension: () => Si, getExtensionContext: () => Ii });
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function Si(e) {
    return typeof e == "function" ? e : (t) => t.$extends(e);
  }
  d();
  u();
  c();
  p();
  m();
  function Ii(e) {
    return e;
  }
  var fn = {};
  ar(fn, { validator: () => ki });
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function ki(...e) {
    return (t) => t;
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function Tt(e) {
    return { ok: false, error: e, map() {
      return Tt(e);
    }, flatMap() {
      return Tt(e);
    } };
  }
  var gn = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (;this.registeredErrors[r] !== undefined; )
        r++;
      return this.registeredErrors[r] = { error: t }, r;
    }
  };
  var hn = (e) => {
    let t = new gn, r = de(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: de(t, e.queryRaw.bind(e)), executeRaw: de(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => za(t, s)) };
    return e.getConnectionInfo && (n.getConnectionInfo = Za(t, e.getConnectionInfo.bind(e))), n;
  };
  var za = (e, t) => {
    let r = de(e, t.startTransaction.bind(t));
    return { adapterName: t.adapterName, provider: t.provider, queryRaw: de(e, t.queryRaw.bind(t)), executeRaw: de(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => Ya(e, o)) };
  };
  var Ya = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: de(e, t.queryRaw.bind(t)), executeRaw: de(e, t.executeRaw.bind(t)), commit: de(e, t.commit.bind(t)), rollback: de(e, t.rollback.bind(t)) });
  function de(e, t) {
    return async (...r) => {
      try {
        return await t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return Tt({ kind: "GenericJs", id: i });
      }
    };
  }
  function Za(e, t) {
    return (...r) => {
      try {
        return t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return Tt({ kind: "GenericJs", id: i });
      }
    };
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var yn;
  var Oi;
  var Di;
  var Mi;
  var Ni = true;
  typeof y < "u" && ({ FORCE_COLOR: yn, NODE_DISABLE_COLORS: Oi, NO_COLOR: Di, TERM: Mi } = y.env || {}, Ni = y.stdout && y.stdout.isTTY);
  var Xa = { enabled: !Oi && Di == null && Mi !== "dumb" && (yn != null && yn !== "0" || Ni) };
  function j(e, t) {
    let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
    return function(o) {
      return !Xa.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
    };
  }
  var cm = j(0, 0);
  var cr = j(1, 22);
  var pr = j(2, 22);
  var pm = j(3, 23);
  var _i = j(4, 24);
  var mm = j(7, 27);
  var dm = j(8, 28);
  var fm = j(9, 29);
  var gm = j(30, 39);
  var ze = j(31, 39);
  var Fi = j(32, 39);
  var Li = j(33, 39);
  var Bi = j(34, 39);
  var hm = j(35, 39);
  var Ui = j(36, 39);
  var ym = j(37, 39);
  var qi = j(90, 39);
  var wm = j(90, 39);
  var Em = j(40, 49);
  var bm = j(41, 49);
  var xm = j(42, 49);
  var Pm = j(43, 49);
  var vm = j(44, 49);
  var Tm = j(45, 49);
  var Cm = j(46, 49);
  var Rm = j(47, 49);
  var el = 100;
  var $i = ["green", "yellow", "blue", "magenta", "cyan", "red"];
  var mr = [];
  var Vi = Date.now();
  var tl = 0;
  var wn = typeof y < "u" ? y.env : {};
  globalThis.DEBUG ??= wn.DEBUG ?? "";
  globalThis.DEBUG_COLORS ??= wn.DEBUG_COLORS ? wn.DEBUG_COLORS === "true" : true;
  var Ct = { enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  }, disable() {
    let e = globalThis.DEBUG;
    return globalThis.DEBUG = "", e;
  }, enabled(e) {
    let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
    return r && !n;
  }, log: (...e) => {
    let [t, r, ...n] = e;
    (console.warn ?? console.log)(`${t} ${r}`, ...n);
  }, formatters: {} };
  function rl(e) {
    let t = { color: $i[tl++ % $i.length], enabled: Ct.enabled(e), namespace: e, log: Ct.log, extend: () => {} }, r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (n.length !== 0 && mr.push([o, ...n]), mr.length > el && mr.shift(), Ct.enabled(o) || i) {
        let l = n.map((g) => typeof g == "string" ? g : nl(g)), f = `+${Date.now() - Vi}ms`;
        Vi = Date.now(), a(o, ...l, f);
      }
    };
    return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
  }
  var En = new Proxy(rl, { get: (e, t) => Ct[t], set: (e, t, r) => Ct[t] = r });
  function nl(e, t = 2) {
    let r = new Set;
    return JSON.stringify(e, (n, i) => {
      if (typeof i == "object" && i !== null) {
        if (r.has(i))
          return "[Circular *]";
        r.add(i);
      } else if (typeof i == "bigint")
        return i.toString();
      return i;
    }, t);
  }
  function ji() {
    mr.length = 0;
  }
  var ee = En;
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var ml = Hi();
  var bn = ml.version;
  d();
  u();
  c();
  p();
  m();
  var Ki = "library";
  function Ye(e) {
    let t = dl();
    return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : e?.config.engineType === "client" ? "client" : Ki);
  }
  function dl() {
    let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : undefined;
  }
  d();
  u();
  c();
  p();
  m();
  var zi = "prisma+postgres";
  var dr = `${zi}:`;
  function xn(e) {
    return e?.startsWith(`${dr}//`) ?? false;
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var fr;
  ((t) => {
    let e;
    ((L) => (L.findUnique = "findUnique", L.findUniqueOrThrow = "findUniqueOrThrow", L.findFirst = "findFirst", L.findFirstOrThrow = "findFirstOrThrow", L.findMany = "findMany", L.create = "create", L.createMany = "createMany", L.createManyAndReturn = "createManyAndReturn", L.update = "update", L.updateMany = "updateMany", L.updateManyAndReturn = "updateManyAndReturn", L.upsert = "upsert", L.delete = "delete", L.deleteMany = "deleteMany", L.groupBy = "groupBy", L.count = "count", L.aggregate = "aggregate", L.findRaw = "findRaw", L.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
  })(fr ||= {});
  var St = {};
  ar(St, { error: () => hl, info: () => gl, log: () => fl, query: () => yl, should: () => eo, tags: () => At, warn: () => Pn });
  d();
  u();
  c();
  p();
  m();
  var At = { error: ze("prisma:error"), warn: Li("prisma:warn"), info: Ui("prisma:info"), query: Bi("prisma:query") };
  var eo = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
  function fl(...e) {
    console.log(...e);
  }
  function Pn(e, ...t) {
    eo.warn() && console.warn(`${At.warn} ${e}`, ...t);
  }
  function gl(e, ...t) {
    console.info(`${At.info} ${e}`, ...t);
  }
  function hl(e, ...t) {
    console.error(`${At.error} ${e}`, ...t);
  }
  function yl(e, ...t) {
    console.log(`${At.query} ${e}`, ...t);
  }
  d();
  u();
  c();
  p();
  m();
  function Pe(e, t) {
    throw new Error(t);
  }
  d();
  u();
  c();
  p();
  m();
  function vn(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  d();
  u();
  c();
  p();
  m();
  var Tn = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
  d();
  u();
  c();
  p();
  m();
  function Ze(e, t) {
    let r = {};
    for (let n of Object.keys(e))
      r[n] = t(e[n], n);
    return r;
  }
  d();
  u();
  c();
  p();
  m();
  function Cn(e, t) {
    if (e.length === 0)
      return;
    let r = e[0];
    for (let n = 1;n < e.length; n++)
      t(r, e[n]) < 0 && (r = e[n]);
    return r;
  }
  d();
  u();
  c();
  p();
  m();
  function _(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  }
  d();
  u();
  c();
  p();
  m();
  var oo = new Set;
  var It = (e, t, ...r) => {
    oo.has(e) || (oo.add(e), Pn(t, ...r));
  };
  var Q = class e extends Error {
    constructor(t, r, n) {
      super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientInitializationError";
    }
  };
  _(Q, "PrismaClientInitializationError");
  d();
  u();
  c();
  p();
  m();
  var ne = class extends Error {
    constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
      super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientKnownRequestError";
    }
  };
  _(ne, "PrismaClientKnownRequestError");
  d();
  u();
  c();
  p();
  m();
  var ve = class extends Error {
    constructor(t, r) {
      super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustPanicError";
    }
  };
  _(ve, "PrismaClientRustPanicError");
  d();
  u();
  c();
  p();
  m();
  var ie = class extends Error {
    constructor(t, { clientVersion: r, batchRequestIdx: n }) {
      super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientUnknownRequestError";
    }
  };
  _(ie, "PrismaClientUnknownRequestError");
  d();
  u();
  c();
  p();
  m();
  var Z = class extends Error {
    constructor(r, { clientVersion: n }) {
      super(r);
      this.name = "PrismaClientValidationError";
      this.clientVersion = n;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
  _(Z, "PrismaClientValidationError");
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var Xe = 9000000000000000;
  var De = 1e9;
  var Rn = "0123456789abcdef";
  var wr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var Er = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var An = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Xe, maxE: Xe, crypto: false };
  var co;
  var Te;
  var N = true;
  var xr = "[DecimalError] ";
  var Oe = xr + "Invalid argument: ";
  var po = xr + "Precision limit exceeded";
  var mo = xr + "crypto unavailable";
  var fo = "[object Decimal]";
  var X = Math.floor;
  var W = Math.pow;
  var El = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var bl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var xl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var go = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var ce = 1e7;
  var k = 7;
  var Pl = 9007199254740991;
  var vl = wr.length - 1;
  var Sn = Er.length - 1;
  var C = { toStringTag: fo };
  C.absoluteValue = C.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), I(e);
  };
  C.ceil = function() {
    return I(new this.constructor(this), this.e + 1, 2);
  };
  C.clampedTo = C.clamp = function(e, t) {
    var r, n = this, i = n.constructor;
    if (e = new i(e), t = new i(t), !e.s || !t.s)
      return new i(NaN);
    if (e.gt(t))
      throw Error(Oe + t);
    return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
  };
  C.comparedTo = C.cmp = function(e) {
    var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, f = e.s;
    if (!s || !a)
      return !l || !f ? NaN : l !== f ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
    if (!s[0] || !a[0])
      return s[0] ? l : a[0] ? -f : 0;
    if (l !== f)
      return l;
    if (o.e !== e.e)
      return o.e > e.e ^ l < 0 ? 1 : -1;
    for (n = s.length, i = a.length, t = 0, r = n < i ? n : i;t < r; ++t)
      if (s[t] !== a[t])
        return s[t] > a[t] ^ l < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
  };
  C.cosine = C.cos = function() {
    var e, t, r = this, n = r.constructor;
    return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + k, n.rounding = 1, r = Tl(n, bo(n, r)), n.precision = e, n.rounding = t, I(Te == 2 || Te == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
  };
  C.cubeRoot = C.cbrt = function() {
    var e, t, r, n, i, o, s, a, l, f, g = this, h = g.constructor;
    if (!g.isFinite() || g.isZero())
      return new h(g);
    for (N = false, o = g.s * W(g.s * g, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = z(g.d), e = g.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = W(r, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = g.s) : n = new h(o.toString()), s = (e = h.precision) + 3;; )
      if (a = n, l = a.times(a).times(a), f = l.plus(g), n = $(f.plus(g).times(a), f.plus(l), s + 2, 1), z(a.d).slice(0, s) === (r = z(n.d)).slice(0, s))
        if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
          if (!i && (I(a, e + 1, 0), a.times(a).times(a).eq(g))) {
            n = a;
            break;
          }
          s += 4, i = 1;
        } else {
          (!+r || !+r.slice(1) && r.charAt(0) == "5") && (I(n, e + 1, 1), t = !n.times(n).times(n).eq(g));
          break;
        }
    return N = true, I(n, e, h.rounding, t);
  };
  C.decimalPlaces = C.dp = function() {
    var e, t = this.d, r = NaN;
    if (t) {
      if (e = t.length - 1, r = (e - X(this.e / k)) * k, e = t[e], e)
        for (;e % 10 == 0; e /= 10)
          r--;
      r < 0 && (r = 0);
    }
    return r;
  };
  C.dividedBy = C.div = function(e) {
    return $(this, new this.constructor(e));
  };
  C.dividedToIntegerBy = C.divToInt = function(e) {
    var t = this, r = t.constructor;
    return I($(t, new r(e), 0, 1, 1), r.precision, r.rounding);
  };
  C.equals = C.eq = function(e) {
    return this.cmp(e) === 0;
  };
  C.floor = function() {
    return I(new this.constructor(this), this.e + 1, 3);
  };
  C.greaterThan = C.gt = function(e) {
    return this.cmp(e) > 0;
  };
  C.greaterThanOrEqualTo = C.gte = function(e) {
    var t = this.cmp(e);
    return t == 1 || t === 0;
  };
  C.hyperbolicCosine = C.cosh = function() {
    var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
    if (!o.isFinite())
      return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero())
      return a;
    r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / vr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = et(s, 1, o.times(t), new s(1), true);
    for (var l, f = e, g = new s(8);f--; )
      l = o.times(o), o = a.minus(l.times(g.minus(l.times(g))));
    return I(o, s.precision = r, s.rounding = n, true);
  };
  C.hyperbolicSine = C.sinh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    if (!i.isFinite() || i.isZero())
      return new o(i);
    if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
      i = et(o, 2, i, i, true);
    else {
      e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / vr(5, e)), i = et(o, 2, i, i, true);
      for (var s, a = new o(5), l = new o(16), f = new o(20);e--; )
        s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(f))));
    }
    return o.precision = t, o.rounding = r, I(i, t, r, true);
  };
  C.hyperbolicTangent = C.tanh = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, $(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
  };
  C.inverseCosine = C.acos = function() {
    var e = this, t = e.constructor, r = e.abs().cmp(1), n = t.precision, i = t.rounding;
    return r !== -1 ? r === 0 ? e.isNeg() ? fe(t, n, i) : new t(0) : new t(NaN) : e.isZero() ? fe(t, n + 4, i).times(0.5) : (t.precision = n + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = n, t.rounding = i, e.times(2));
  };
  C.inverseHyperbolicCosine = C.acosh = function() {
    var e, t, r = this, n = r.constructor;
    return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, N = false, r = r.times(r).minus(1).sqrt().plus(r), N = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
  };
  C.inverseHyperbolicSine = C.asinh = function() {
    var e, t, r = this, n = r.constructor;
    return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, N = false, r = r.times(r).plus(1).sqrt().plus(r), N = true, n.precision = e, n.rounding = t, r.ln());
  };
  C.inverseHyperbolicTangent = C.atanh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? I(new o(i), e, t, true) : (o.precision = r = n - i.e, i = $(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
  };
  C.inverseSine = C.asin = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = fe(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
  };
  C.inverseTangent = C.atan = function() {
    var e, t, r, n, i, o, s, a, l, f = this, g = f.constructor, h = g.precision, v = g.rounding;
    if (f.isFinite()) {
      if (f.isZero())
        return new g(f);
      if (f.abs().eq(1) && h + 4 <= Sn)
        return s = fe(g, h + 4, v).times(0.25), s.s = f.s, s;
    } else {
      if (!f.s)
        return new g(NaN);
      if (h + 4 <= Sn)
        return s = fe(g, h + 4, v).times(0.5), s.s = f.s, s;
    }
    for (g.precision = a = h + 10, g.rounding = 1, r = Math.min(28, a / k + 2 | 0), e = r;e; --e)
      f = f.div(f.times(f).plus(1).sqrt().plus(1));
    for (N = false, t = Math.ceil(a / k), n = 1, l = f.times(f), s = new g(f), i = f;e !== -1; )
      if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== undefined)
        for (e = t;s.d[e] === o.d[e] && e--; )
          ;
    return r && (s = s.times(2 << r - 1)), N = true, I(s, g.precision = h, g.rounding = v, true);
  };
  C.isFinite = function() {
    return !!this.d;
  };
  C.isInteger = C.isInt = function() {
    return !!this.d && X(this.e / k) > this.d.length - 2;
  };
  C.isNaN = function() {
    return !this.s;
  };
  C.isNegative = C.isNeg = function() {
    return this.s < 0;
  };
  C.isPositive = C.isPos = function() {
    return this.s > 0;
  };
  C.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  C.lessThan = C.lt = function(e) {
    return this.cmp(e) < 0;
  };
  C.lessThanOrEqualTo = C.lte = function(e) {
    return this.cmp(e) < 1;
  };
  C.logarithm = C.log = function(e) {
    var t, r, n, i, o, s, a, l, f = this, g = f.constructor, h = g.precision, v = g.rounding, S = 5;
    if (e == null)
      e = new g(10), t = true;
    else {
      if (e = new g(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
        return new g(NaN);
      t = e.eq(10);
    }
    if (r = f.d, f.s < 0 || !r || !r[0] || f.eq(1))
      return new g(r && !r[0] ? -1 / 0 : f.s != 1 ? NaN : r ? 0 : 1 / 0);
    if (t)
      if (r.length > 1)
        o = true;
      else {
        for (i = r[0];i % 10 === 0; )
          i /= 10;
        o = i !== 1;
      }
    if (N = false, a = h + S, s = ke(f, a), n = t ? br(g, a + 10) : ke(e, a), l = $(s, n, a, 1), kt(l.d, i = h, v))
      do
        if (a += 10, s = ke(f, a), n = t ? br(g, a + 10) : ke(e, a), l = $(s, n, a, 1), !o) {
          +z(l.d).slice(i + 1, i + 15) + 1 == 100000000000000 && (l = I(l, h + 1, 0));
          break;
        }
      while (kt(l.d, i += 10, v));
    return N = true, I(l, h, v);
  };
  C.minus = C.sub = function(e) {
    var t, r, n, i, o, s, a, l, f, g, h, v, S = this, R = S.constructor;
    if (e = new R(e), !S.d || !e.d)
      return !S.s || !e.s ? e = new R(NaN) : S.d ? e.s = -e.s : e = new R(e.d || S.s !== e.s ? S : NaN), e;
    if (S.s != e.s)
      return e.s = -e.s, S.plus(e);
    if (f = S.d, v = e.d, a = R.precision, l = R.rounding, !f[0] || !v[0]) {
      if (v[0])
        e.s = -e.s;
      else if (f[0])
        e = new R(S);
      else
        return new R(l === 3 ? -0 : 0);
      return N ? I(e, a, l) : e;
    }
    if (r = X(e.e / k), g = X(S.e / k), f = f.slice(), o = g - r, o) {
      for (h = o < 0, h ? (t = f, o = -o, s = v.length) : (t = v, r = g, s = f.length), n = Math.max(Math.ceil(a / k), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o;n--; )
        t.push(0);
      t.reverse();
    } else {
      for (n = f.length, s = v.length, h = n < s, h && (s = n), n = 0;n < s; n++)
        if (f[n] != v[n]) {
          h = f[n] < v[n];
          break;
        }
      o = 0;
    }
    for (h && (t = f, f = v, v = t, e.s = -e.s), s = f.length, n = v.length - s;n > 0; --n)
      f[s++] = 0;
    for (n = v.length;n > o; ) {
      if (f[--n] < v[n]) {
        for (i = n;i && f[--i] === 0; )
          f[i] = ce - 1;
        --f[i], f[n] += ce;
      }
      f[n] -= v[n];
    }
    for (;f[--s] === 0; )
      f.pop();
    for (;f[0] === 0; f.shift())
      --r;
    return f[0] ? (e.d = f, e.e = Pr(f, r), N ? I(e, a, l) : e) : new R(l === 3 ? -0 : 0);
  };
  C.modulo = C.mod = function(e) {
    var t, r = this, n = r.constructor;
    return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? I(new n(r), n.precision, n.rounding) : (N = false, n.modulo == 9 ? (t = $(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = $(r, e, 0, n.modulo, 1), t = t.times(e), N = true, r.minus(t));
  };
  C.naturalExponential = C.exp = function() {
    return In(this);
  };
  C.naturalLogarithm = C.ln = function() {
    return ke(this);
  };
  C.negated = C.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, I(e);
  };
  C.plus = C.add = function(e) {
    var t, r, n, i, o, s, a, l, f, g, h = this, v = h.constructor;
    if (e = new v(e), !h.d || !e.d)
      return !h.s || !e.s ? e = new v(NaN) : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)), e;
    if (h.s != e.s)
      return e.s = -e.s, h.minus(e);
    if (f = h.d, g = e.d, a = v.precision, l = v.rounding, !f[0] || !g[0])
      return g[0] || (e = new v(h)), N ? I(e, a, l) : e;
    if (o = X(h.e / k), n = X(e.e / k), f = f.slice(), i = o - n, i) {
      for (i < 0 ? (r = f, i = -i, s = g.length) : (r = g, n = o, s = f.length), o = Math.ceil(a / k), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse();i--; )
        r.push(0);
      r.reverse();
    }
    for (s = f.length, i = g.length, s - i < 0 && (i = s, r = g, g = f, f = r), t = 0;i; )
      t = (f[--i] = f[i] + g[i] + t) / ce | 0, f[i] %= ce;
    for (t && (f.unshift(t), ++n), s = f.length;f[--s] == 0; )
      f.pop();
    return e.d = f, e.e = Pr(f, n), N ? I(e, a, l) : e;
  };
  C.precision = C.sd = function(e) {
    var t, r = this;
    if (e !== undefined && e !== !!e && e !== 1 && e !== 0)
      throw Error(Oe + e);
    return r.d ? (t = ho(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
  };
  C.round = function() {
    var e = this, t = e.constructor;
    return I(new t(e), e.e + 1, t.rounding);
  };
  C.sine = C.sin = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + k, n.rounding = 1, r = Rl(n, bo(n, r)), n.precision = e, n.rounding = t, I(Te > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  C.squareRoot = C.sqrt = function() {
    var e, t, r, n, i, o, s = this, a = s.d, l = s.e, f = s.s, g = s.constructor;
    if (f !== 1 || !a || !a[0])
      return new g(!f || f < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for (N = false, f = Math.sqrt(+s), f == 0 || f == 1 / 0 ? (t = z(a), (t.length + l) % 2 == 0 && (t += "0"), f = Math.sqrt(t), l = X((l + 1) / 2) - (l < 0 || l % 2), f == 1 / 0 ? t = "5e" + l : (t = f.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new g(t)) : n = new g(f.toString()), r = (l = g.precision) + 3;; )
      if (o = n, n = o.plus($(s, o, r + 2, 1)).times(0.5), z(o.d).slice(0, r) === (t = z(n.d)).slice(0, r))
        if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
          if (!i && (I(o, l + 1, 0), o.times(o).eq(s))) {
            n = o;
            break;
          }
          r += 4, i = 1;
        } else {
          (!+t || !+t.slice(1) && t.charAt(0) == "5") && (I(n, l + 1, 1), e = !n.times(n).eq(s));
          break;
        }
    return N = true, I(n, l, g.rounding, e);
  };
  C.tangent = C.tan = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = $(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, I(Te == 2 || Te == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  C.times = C.mul = function(e) {
    var t, r, n, i, o, s, a, l, f, g = this, h = g.constructor, v = g.d, S = (e = new h(e)).d;
    if (e.s *= g.s, !v || !v[0] || !S || !S[0])
      return new h(!e.s || v && !v[0] && !S || S && !S[0] && !v ? NaN : !v || !S ? e.s / 0 : e.s * 0);
    for (r = X(g.e / k) + X(e.e / k), l = v.length, f = S.length, l < f && (o = v, v = S, S = o, s = l, l = f, f = s), o = [], s = l + f, n = s;n--; )
      o.push(0);
    for (n = f;--n >= 0; ) {
      for (t = 0, i = l + n;i > n; )
        a = o[i] + S[n] * v[i - n - 1] + t, o[i--] = a % ce | 0, t = a / ce | 0;
      o[i] = (o[i] + t) % ce | 0;
    }
    for (;!o[--s]; )
      o.pop();
    return t ? ++r : o.shift(), e.d = o, e.e = Pr(o, r), N ? I(e, h.precision, h.rounding) : e;
  };
  C.toBinary = function(e, t) {
    return kn(this, 2, e, t);
  };
  C.toDecimalPlaces = C.toDP = function(e, t) {
    var r = this, n = r.constructor;
    return r = new n(r), e === undefined ? r : (oe(e, 0, De), t === undefined ? t = n.rounding : oe(t, 0, 8), I(r, e + r.e + 1, t));
  };
  C.toExponential = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = ge(n, true) : (oe(e, 0, De), t === undefined ? t = i.rounding : oe(t, 0, 8), n = I(new i(n), e + 1, t), r = ge(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  C.toFixed = function(e, t) {
    var r, n, i = this, o = i.constructor;
    return e === undefined ? r = ge(i) : (oe(e, 0, De), t === undefined ? t = o.rounding : oe(t, 0, 8), n = I(new o(i), e + i.e + 1, t), r = ge(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
  };
  C.toFraction = function(e) {
    var t, r, n, i, o, s, a, l, f, g, h, v, S = this, R = S.d, A = S.constructor;
    if (!R)
      return new A(S);
    if (f = r = new A(1), n = l = new A(0), t = new A(n), o = t.e = ho(R) - S.e - 1, s = o % k, t.d[0] = W(10, s < 0 ? k + s : s), e == null)
      e = o > 0 ? t : f;
    else {
      if (a = new A(e), !a.isInt() || a.lt(f))
        throw Error(Oe + a);
      e = a.gt(t) ? o > 0 ? t : f : a;
    }
    for (N = false, a = new A(z(R)), g = A.precision, A.precision = o = R.length * k * 2;h = $(a, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; )
      r = n, n = i, i = f, f = l.plus(h.times(i)), l = i, i = t, t = a.minus(h.times(i)), a = i;
    return i = $(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(f)), r = r.plus(i.times(n)), l.s = f.s = S.s, v = $(f, n, o, 1).minus(S).abs().cmp($(l, r, o, 1).minus(S).abs()) < 1 ? [f, n] : [l, r], A.precision = g, N = true, v;
  };
  C.toHexadecimal = C.toHex = function(e, t) {
    return kn(this, 16, e, t);
  };
  C.toNearest = function(e, t) {
    var r = this, n = r.constructor;
    if (r = new n(r), e == null) {
      if (!r.d)
        return r;
      e = new n(1), t = n.rounding;
    } else {
      if (e = new n(e), t === undefined ? t = n.rounding : oe(t, 0, 8), !r.d)
        return e.s ? r : e;
      if (!e.d)
        return e.s && (e.s = r.s), e;
    }
    return e.d[0] ? (N = false, r = $(r, e, 0, t, 1).times(e), N = true, I(r)) : (e.s = r.s, r = e), r;
  };
  C.toNumber = function() {
    return +this;
  };
  C.toOctal = function(e, t) {
    return kn(this, 8, e, t);
  };
  C.toPower = C.pow = function(e) {
    var t, r, n, i, o, s, a = this, l = a.constructor, f = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0])
      return new l(W(+a, f));
    if (a = new l(a), a.eq(1))
      return a;
    if (n = l.precision, o = l.rounding, e.eq(1))
      return I(a, n, o);
    if (t = X(e.e / k), t >= e.d.length - 1 && (r = f < 0 ? -f : f) <= Pl)
      return i = yo(l, a, r, n), e.s < 0 ? new l(1).div(i) : I(i, n, o);
    if (s = a.s, s < 0) {
      if (t < e.d.length - 1)
        return new l(NaN);
      if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
        return a.s = s, a;
    }
    return r = W(+a, f), t = r == 0 || !isFinite(r) ? X(f * (Math.log("0." + z(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (N = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = In(e.times(ke(a, n + r)), n), i.d && (i = I(i, n + 5, 1), kt(i.d, n, o) && (t = n + 10, i = I(In(e.times(ke(a, t + r)), t), t + 5, 1), +z(i.d).slice(n + 1, n + 15) + 1 == 100000000000000 && (i = I(i, n + 1, 0)))), i.s = s, N = true, l.rounding = o, I(i, n, o));
  };
  C.toPrecision = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = ge(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (oe(e, 1, De), t === undefined ? t = i.rounding : oe(t, 0, 8), n = I(new i(n), e, t), r = ge(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  C.toSignificantDigits = C.toSD = function(e, t) {
    var r = this, n = r.constructor;
    return e === undefined ? (e = n.precision, t = n.rounding) : (oe(e, 1, De), t === undefined ? t = n.rounding : oe(t, 0, 8)), I(new n(r), e, t);
  };
  C.toString = function() {
    var e = this, t = e.constructor, r = ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r;
  };
  C.truncated = C.trunc = function() {
    return I(new this.constructor(this), this.e + 1, 1);
  };
  C.valueOf = C.toJSON = function() {
    var e = this, t = e.constructor, r = ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() ? "-" + r : r;
  };
  function z(e) {
    var t, r, n, i = e.length - 1, o = "", s = e[0];
    if (i > 0) {
      for (o += s, t = 1;t < i; t++)
        n = e[t] + "", r = k - n.length, r && (o += Ie(r)), o += n;
      s = e[t], n = s + "", r = k - n.length, r && (o += Ie(r));
    } else if (s === 0)
      return "0";
    for (;s % 10 === 0; )
      s /= 10;
    return o + s;
  }
  function oe(e, t, r) {
    if (e !== ~~e || e < t || e > r)
      throw Error(Oe + e);
  }
  function kt(e, t, r, n) {
    var i, o, s, a;
    for (o = e[0];o >= 10; o /= 10)
      --t;
    return --t < 0 ? (t += k, i = 0) : (i = Math.ceil((t + 1) / k), t %= k), o = W(10, k - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 50000 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == W(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1000 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1000 | 0) == W(10, t - 3) - 1, s;
  }
  function hr(e, t, r) {
    for (var n, i = [0], o, s = 0, a = e.length;s < a; ) {
      for (o = i.length;o--; )
        i[o] *= t;
      for (i[0] += Rn.indexOf(e.charAt(s++)), n = 0;n < i.length; n++)
        i[n] > r - 1 && (i[n + 1] === undefined && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
    }
    return i.reverse();
  }
  function Tl(e, t) {
    var r, n, i;
    if (t.isZero())
      return t;
    n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / vr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = et(e, 1, t.times(i), new e(1));
    for (var o = r;o--; ) {
      var s = t.times(t);
      t = s.times(s).minus(s).times(8).plus(1);
    }
    return e.precision -= r, t;
  }
  var $ = function() {
    function e(n, i, o) {
      var s, a = 0, l = n.length;
      for (n = n.slice();l--; )
        s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
      return a && n.unshift(a), n;
    }
    function t(n, i, o, s) {
      var a, l;
      if (o != s)
        l = o > s ? 1 : -1;
      else
        for (a = l = 0;a < o; a++)
          if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
          }
      return l;
    }
    function r(n, i, o, s) {
      for (var a = 0;o--; )
        n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
      for (;!n[0] && n.length > 1; )
        n.shift();
    }
    return function(n, i, o, s, a, l) {
      var f, g, h, v, S, R, A, D, M, U, O, F, L, J, rn, nr, Pt, nn, ue, ir, or = n.constructor, on = n.s == i.s ? 1 : -1, Y = n.d, V = i.d;
      if (!Y || !Y[0] || !V || !V[0])
        return new or(!n.s || !i.s || (Y ? V && Y[0] == V[0] : !V) ? NaN : Y && Y[0] == 0 || !V ? on * 0 : on / 0);
      for (l ? (S = 1, g = n.e - i.e) : (l = ce, S = k, g = X(n.e / S) - X(i.e / S)), ue = V.length, Pt = Y.length, M = new or(on), U = M.d = [], h = 0;V[h] == (Y[h] || 0); h++)
        ;
      if (V[h] > (Y[h] || 0) && g--, o == null ? (J = o = or.precision, s = or.rounding) : a ? J = o + (n.e - i.e) + 1 : J = o, J < 0)
        U.push(1), R = true;
      else {
        if (J = J / S + 2 | 0, h = 0, ue == 1) {
          for (v = 0, V = V[0], J++;(h < Pt || v) && J--; h++)
            rn = v * l + (Y[h] || 0), U[h] = rn / V | 0, v = rn % V | 0;
          R = v || h < Pt;
        } else {
          for (v = l / (V[0] + 1) | 0, v > 1 && (V = e(V, v, l), Y = e(Y, v, l), ue = V.length, Pt = Y.length), nr = ue, O = Y.slice(0, ue), F = O.length;F < ue; )
            O[F++] = 0;
          ir = V.slice(), ir.unshift(0), nn = V[0], V[1] >= l / 2 && ++nn;
          do
            v = 0, f = t(V, O, ue, F), f < 0 ? (L = O[0], ue != F && (L = L * l + (O[1] || 0)), v = L / nn | 0, v > 1 ? (v >= l && (v = l - 1), A = e(V, v, l), D = A.length, F = O.length, f = t(A, O, D, F), f == 1 && (v--, r(A, ue < D ? ir : V, D, l))) : (v == 0 && (f = v = 1), A = V.slice()), D = A.length, D < F && A.unshift(0), r(O, A, F, l), f == -1 && (F = O.length, f = t(V, O, ue, F), f < 1 && (v++, r(O, ue < F ? ir : V, F, l))), F = O.length) : f === 0 && (v++, O = [0]), U[h++] = v, f && O[0] ? O[F++] = Y[nr] || 0 : (O = [Y[nr]], F = 1);
          while ((nr++ < Pt || O[0] !== undefined) && J--);
          R = O[0] !== undefined;
        }
        U[0] || U.shift();
      }
      if (S == 1)
        M.e = g, co = R;
      else {
        for (h = 1, v = U[0];v >= 10; v /= 10)
          h++;
        M.e = h + g * S - 1, I(M, a ? o + M.e + 1 : o, s, R);
      }
      return M;
    };
  }();
  function I(e, t, r, n) {
    var i, o, s, a, l, f, g, h, v, S = e.constructor;
    e:
      if (t != null) {
        if (h = e.d, !h)
          return e;
        for (i = 1, a = h[0];a >= 10; a /= 10)
          i++;
        if (o = t - i, o < 0)
          o += k, s = t, g = h[v = 0], l = g / W(10, i - s - 1) % 10 | 0;
        else if (v = Math.ceil((o + 1) / k), a = h.length, v >= a)
          if (n) {
            for (;a++ <= v; )
              h.push(0);
            g = l = 0, i = 1, o %= k, s = o - k + 1;
          } else
            break e;
        else {
          for (g = a = h[v], i = 1;a >= 10; a /= 10)
            i++;
          o %= k, s = o - k + i, l = s < 0 ? 0 : g / W(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t < 0 || h[v + 1] !== undefined || (s < 0 ? g : g % W(10, i - s - 1)), f = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? g / W(10, i - s) : 0 : h[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0])
          return h.length = 0, f ? (t -= e.e + 1, h[0] = W(10, (k - t % k) % k), e.e = -t || 0) : h[0] = e.e = 0, e;
        if (o == 0 ? (h.length = v, a = 1, v--) : (h.length = v + 1, a = W(10, k - o), h[v] = s > 0 ? (g / W(10, i - s) % W(10, s) | 0) * a : 0), f)
          for (;; )
            if (v == 0) {
              for (o = 1, s = h[0];s >= 10; s /= 10)
                o++;
              for (s = h[0] += a, a = 1;s >= 10; s /= 10)
                a++;
              o != a && (e.e++, h[0] == ce && (h[0] = 1));
              break;
            } else {
              if (h[v] += a, h[v] != ce)
                break;
              h[v--] = 0, a = 1;
            }
        for (o = h.length;h[--o] === 0; )
          h.pop();
      }
    return N && (e.e > S.maxE ? (e.d = null, e.e = NaN) : e.e < S.minE && (e.e = 0, e.d = [0])), e;
  }
  function ge(e, t, r) {
    if (!e.isFinite())
      return Eo(e);
    var n, i = e.e, o = z(e.d), s = o.length;
    return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Ie(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Ie(-i - 1) + o, r && (n = r - s) > 0 && (o += Ie(n))) : i >= s ? (o += Ie(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Ie(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Ie(n))), o;
  }
  function Pr(e, t) {
    var r = e[0];
    for (t *= k;r >= 10; r /= 10)
      t++;
    return t;
  }
  function br(e, t, r) {
    if (t > vl)
      throw N = true, r && (e.precision = r), Error(po);
    return I(new e(wr), t, 1, true);
  }
  function fe(e, t, r) {
    if (t > Sn)
      throw Error(po);
    return I(new e(Er), t, r, true);
  }
  function ho(e) {
    var t = e.length - 1, r = t * k + 1;
    if (t = e[t], t) {
      for (;t % 10 == 0; t /= 10)
        r--;
      for (t = e[0];t >= 10; t /= 10)
        r++;
    }
    return r;
  }
  function Ie(e) {
    for (var t = "";e--; )
      t += "0";
    return t;
  }
  function yo(e, t, r, n) {
    var i, o = new e(1), s = Math.ceil(n / k + 4);
    for (N = false;; ) {
      if (r % 2 && (o = o.times(t), lo(o.d, s) && (i = true)), r = X(r / 2), r === 0) {
        r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
        break;
      }
      t = t.times(t), lo(t.d, s);
    }
    return N = true, o;
  }
  function ao(e) {
    return e.d[e.d.length - 1] & 1;
  }
  function wo(e, t, r) {
    for (var n, i, o = new e(t[0]), s = 0;++s < t.length; ) {
      if (i = new e(t[s]), !i.s) {
        o = i;
        break;
      }
      n = o.cmp(i), (n === r || n === 0 && o.s === r) && (o = i);
    }
    return o;
  }
  function In(e, t) {
    var r, n, i, o, s, a, l, f = 0, g = 0, h = 0, v = e.constructor, S = v.rounding, R = v.precision;
    if (!e.d || !e.d[0] || e.e > 17)
      return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for (t == null ? (N = false, l = R) : l = t, a = new v(0.03125);e.e > -2; )
      e = e.times(a), h += 5;
    for (n = Math.log(W(2, h)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new v(1), v.precision = l;; ) {
      if (o = I(o.times(e), l, 1), r = r.times(++g), a = s.plus($(o, r, l, 1)), z(a.d).slice(0, l) === z(s.d).slice(0, l)) {
        for (i = h;i--; )
          s = I(s.times(s), l, 1);
        if (t == null)
          if (f < 3 && kt(s.d, l - n, S, f))
            v.precision = l += 10, r = o = a = new v(1), g = 0, f++;
          else
            return I(s, v.precision = R, S, N = true);
        else
          return v.precision = R, s;
      }
      s = a;
    }
  }
  function ke(e, t) {
    var r, n, i, o, s, a, l, f, g, h, v, S = 1, R = 10, A = e, D = A.d, M = A.constructor, U = M.rounding, O = M.precision;
    if (A.s < 0 || !D || !D[0] || !A.e && D[0] == 1 && D.length == 1)
      return new M(D && !D[0] ? -1 / 0 : A.s != 1 ? NaN : D ? 0 : A);
    if (t == null ? (N = false, g = O) : g = t, M.precision = g += R, r = z(D), n = r.charAt(0), Math.abs(o = A.e) < 1500000000000000) {
      for (;n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
        A = A.times(e), r = z(A.d), n = r.charAt(0), S++;
      o = A.e, n > 1 ? (A = new M("0." + r), o++) : A = new M(n + "." + r.slice(1));
    } else
      return f = br(M, g + 2, O).times(o + ""), A = ke(new M(n + "." + r.slice(1)), g - R).plus(f), M.precision = O, t == null ? I(A, O, U, N = true) : A;
    for (h = A, l = s = A = $(A.minus(1), A.plus(1), g, 1), v = I(A.times(A), g, 1), i = 3;; ) {
      if (s = I(s.times(v), g, 1), f = l.plus($(s, new M(i), g, 1)), z(f.d).slice(0, g) === z(l.d).slice(0, g))
        if (l = l.times(2), o !== 0 && (l = l.plus(br(M, g + 2, O).times(o + ""))), l = $(l, new M(S), g, 1), t == null)
          if (kt(l.d, g - R, U, a))
            M.precision = g += R, f = s = A = $(h.minus(1), h.plus(1), g, 1), v = I(A.times(A), g, 1), i = a = 1;
          else
            return I(l, M.precision = O, U, N = true);
        else
          return M.precision = O, l;
      l = f, i += 2;
    }
  }
  function Eo(e) {
    return String(e.s * e.s / 0);
  }
  function yr(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0;t.charCodeAt(n) === 48; n++)
      ;
    for (i = t.length;t.charCodeAt(i - 1) === 48; --i)
      ;
    if (t = t.slice(n, i), t) {
      if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % k, r < 0 && (n += k), n < i) {
        for (n && e.d.push(+t.slice(0, n)), i -= k;n < i; )
          e.d.push(+t.slice(n, n += k));
        t = t.slice(n), n = k - t.length;
      } else
        n -= i;
      for (;n--; )
        t += "0";
      e.d.push(+t), N && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
    } else
      e.e = 0, e.d = [0];
    return e;
  }
  function Cl(e, t) {
    var r, n, i, o, s, a, l, f, g;
    if (t.indexOf("_") > -1) {
      if (t = t.replace(/(\d)_(?=\d)/g, "$1"), go.test(t))
        return yr(e, t);
    } else if (t === "Infinity" || t === "NaN")
      return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (bl.test(t))
      r = 16, t = t.toLowerCase();
    else if (El.test(t))
      r = 2;
    else if (xl.test(t))
      r = 8;
    else
      throw Error(Oe + t);
    for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = yo(n, new n(r), o, o * 2)), f = hr(t, r, ce), g = f.length - 1, o = g;f[o] === 0; --o)
      f.pop();
    return o < 0 ? new n(e.s * 0) : (e.e = Pr(f, g), e.d = f, N = false, s && (e = $(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? W(2, l) : Be.pow(2, l))), N = true, e);
  }
  function Rl(e, t) {
    var r, n = t.d.length;
    if (n < 3)
      return t.isZero() ? t : et(e, 2, t, t);
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / vr(5, r)), t = et(e, 2, t, t);
    for (var i, o = new e(5), s = new e(16), a = new e(20);r--; )
      i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
    return t;
  }
  function et(e, t, r, n, i) {
    var o, s, a, l, f = 1, g = e.precision, h = Math.ceil(g / k);
    for (N = false, l = r.times(r), a = new e(n);; ) {
      if (s = $(a.times(l), new e(t++ * t++), g, 1), a = i ? n.plus(s) : n.minus(s), n = $(s.times(l), new e(t++ * t++), g, 1), s = a.plus(n), s.d[h] !== undefined) {
        for (o = h;s.d[o] === a.d[o] && o--; )
          ;
        if (o == -1)
          break;
      }
      o = a, a = n, n = s, s = o, f++;
    }
    return N = true, s.d.length = h + 1, s;
  }
  function vr(e, t) {
    for (var r = e;--t; )
      r *= e;
    return r;
  }
  function bo(e, t) {
    var r, n = t.s < 0, i = fe(e, e.precision, 1), o = i.times(0.5);
    if (t = t.abs(), t.lte(o))
      return Te = n ? 4 : 1, t;
    if (r = t.divToInt(i), r.isZero())
      Te = n ? 3 : 2;
    else {
      if (t = t.minus(r.times(i)), t.lte(o))
        return Te = ao(r) ? n ? 2 : 3 : n ? 4 : 1, t;
      Te = ao(r) ? n ? 1 : 4 : n ? 3 : 2;
    }
    return t.minus(i).abs();
  }
  function kn(e, t, r, n) {
    var i, o, s, a, l, f, g, h, v, S = e.constructor, R = r !== undefined;
    if (R ? (oe(r, 1, De), n === undefined ? n = S.rounding : oe(n, 0, 8)) : (r = S.precision, n = S.rounding), !e.isFinite())
      g = Eo(e);
    else {
      for (g = ge(e), s = g.indexOf("."), R ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (g = g.replace(".", ""), v = new S(1), v.e = g.length - s, v.d = hr(ge(v), 10, i), v.e = v.d.length), h = hr(g, 10, i), o = l = h.length;h[--l] == 0; )
        h.pop();
      if (!h[0])
        g = R ? "0p+0" : "0";
      else {
        if (s < 0 ? o-- : (e = new S(e), e.d = h, e.e = o, e = $(e, v, r, n, 0, i), h = e.d, o = e.e, f = co), s = h[r], a = i / 2, f = f || h[r + 1] !== undefined, f = n < 4 ? (s !== undefined || f) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || f || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, f)
          for (;++h[--r] > i - 1; )
            h[r] = 0, r || (++o, h.unshift(1));
        for (l = h.length;!h[l - 1]; --l)
          ;
        for (s = 0, g = "";s < l; s++)
          g += Rn.charAt(h[s]);
        if (R) {
          if (l > 1)
            if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l;l % s; l++)
                g += "0";
              for (h = hr(g, i, t), l = h.length;!h[l - 1]; --l)
                ;
              for (s = 1, g = "1.";s < l; s++)
                g += Rn.charAt(h[s]);
            } else
              g = g.charAt(0) + "." + g.slice(1);
          g = g + (o < 0 ? "p" : "p+") + o;
        } else if (o < 0) {
          for (;++o; )
            g = "0" + g;
          g = "0." + g;
        } else if (++o > l)
          for (o -= l;o--; )
            g += "0";
        else
          o < l && (g = g.slice(0, o) + "." + g.slice(o));
      }
      g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
    }
    return e.s < 0 ? "-" + g : g;
  }
  function lo(e, t) {
    if (e.length > t)
      return e.length = t, true;
  }
  function Al(e) {
    return new this(e).abs();
  }
  function Sl(e) {
    return new this(e).acos();
  }
  function Il(e) {
    return new this(e).acosh();
  }
  function kl(e, t) {
    return new this(e).plus(t);
  }
  function Ol(e) {
    return new this(e).asin();
  }
  function Dl(e) {
    return new this(e).asinh();
  }
  function Ml(e) {
    return new this(e).atan();
  }
  function Nl(e) {
    return new this(e).atanh();
  }
  function _l(e, t) {
    e = new this(e), t = new this(t);
    var r, n = this.precision, i = this.rounding, o = n + 4;
    return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = fe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? fe(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = fe(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan($(e, t, o, 1)), t = fe(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan($(e, t, o, 1)), r;
  }
  function Fl(e) {
    return new this(e).cbrt();
  }
  function Ll(e) {
    return I(e = new this(e), e.e + 1, 2);
  }
  function Bl(e, t, r) {
    return new this(e).clamp(t, r);
  }
  function Ul(e) {
    if (!e || typeof e != "object")
      throw Error(xr + "Object expected");
    var t, r, n, i = e.defaults === true, o = ["precision", 1, De, "rounding", 0, 8, "toExpNeg", -Xe, 0, "toExpPos", 0, Xe, "maxE", 0, Xe, "minE", -Xe, 0, "modulo", 0, 9];
    for (t = 0;t < o.length; t += 3)
      if (r = o[t], i && (this[r] = An[r]), (n = e[r]) !== undefined)
        if (X(n) === n && n >= o[t + 1] && n <= o[t + 2])
          this[r] = n;
        else
          throw Error(Oe + r + ": " + n);
    if (r = "crypto", i && (this[r] = An[r]), (n = e[r]) !== undefined)
      if (n === true || n === false || n === 0 || n === 1)
        if (n)
          if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
            this[r] = true;
          else
            throw Error(mo);
        else
          this[r] = false;
      else
        throw Error(Oe + r + ": " + n);
    return this;
  }
  function ql(e) {
    return new this(e).cos();
  }
  function $l(e) {
    return new this(e).cosh();
  }
  function xo(e) {
    var t, r, n;
    function i(o) {
      var s, a, l, f = this;
      if (!(f instanceof i))
        return new i(o);
      if (f.constructor = i, uo(o)) {
        f.s = o.s, N ? !o.d || o.e > i.maxE ? (f.e = NaN, f.d = null) : o.e < i.minE ? (f.e = 0, f.d = [0]) : (f.e = o.e, f.d = o.d.slice()) : (f.e = o.e, f.d = o.d ? o.d.slice() : o.d);
        return;
      }
      if (l = typeof o, l === "number") {
        if (o === 0) {
          f.s = 1 / o < 0 ? -1 : 1, f.e = 0, f.d = [0];
          return;
        }
        if (o < 0 ? (o = -o, f.s = -1) : f.s = 1, o === ~~o && o < 1e7) {
          for (s = 0, a = o;a >= 10; a /= 10)
            s++;
          N ? s > i.maxE ? (f.e = NaN, f.d = null) : s < i.minE ? (f.e = 0, f.d = [0]) : (f.e = s, f.d = [o]) : (f.e = s, f.d = [o]);
          return;
        }
        if (o * 0 !== 0) {
          o || (f.s = NaN), f.e = NaN, f.d = null;
          return;
        }
        return yr(f, o.toString());
      }
      if (l === "string")
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), f.s = -1) : (a === 43 && (o = o.slice(1)), f.s = 1), go.test(o) ? yr(f, o) : Cl(f, o);
      if (l === "bigint")
        return o < 0 ? (o = -o, f.s = -1) : f.s = 1, yr(f, o.toString());
      throw Error(Oe + o);
    }
    if (i.prototype = C, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Ul, i.clone = xo, i.isDecimal = uo, i.abs = Al, i.acos = Sl, i.acosh = Il, i.add = kl, i.asin = Ol, i.asinh = Dl, i.atan = Ml, i.atanh = Nl, i.atan2 = _l, i.cbrt = Fl, i.ceil = Ll, i.clamp = Bl, i.cos = ql, i.cosh = $l, i.div = Vl, i.exp = jl, i.floor = Gl, i.hypot = Jl, i.ln = Ql, i.log = Wl, i.log10 = Kl, i.log2 = Hl, i.max = zl, i.min = Yl, i.mod = Zl, i.mul = Xl, i.pow = eu, i.random = tu, i.round = ru, i.sign = nu, i.sin = iu, i.sinh = ou, i.sqrt = su, i.sub = au, i.sum = lu, i.tan = uu, i.tanh = cu, i.trunc = pu, e === undefined && (e = {}), e && e.defaults !== true)
      for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0;t < n.length; )
        e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e), i;
  }
  function Vl(e, t) {
    return new this(e).div(t);
  }
  function jl(e) {
    return new this(e).exp();
  }
  function Gl(e) {
    return I(e = new this(e), e.e + 1, 3);
  }
  function Jl() {
    var e, t, r = new this(0);
    for (N = false, e = 0;e < arguments.length; )
      if (t = new this(arguments[e++]), t.d)
        r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s)
          return N = true, new this(1 / 0);
        r = t;
      }
    return N = true, r.sqrt();
  }
  function uo(e) {
    return e instanceof Be || e && e.toStringTag === fo || false;
  }
  function Ql(e) {
    return new this(e).ln();
  }
  function Wl(e, t) {
    return new this(e).log(t);
  }
  function Hl(e) {
    return new this(e).log(2);
  }
  function Kl(e) {
    return new this(e).log(10);
  }
  function zl() {
    return wo(this, arguments, -1);
  }
  function Yl() {
    return wo(this, arguments, 1);
  }
  function Zl(e, t) {
    return new this(e).mod(t);
  }
  function Xl(e, t) {
    return new this(e).mul(t);
  }
  function eu(e, t) {
    return new this(e).pow(t);
  }
  function tu(e) {
    var t, r, n, i, o = 0, s = new this(1), a = [];
    if (e === undefined ? e = this.precision : oe(e, 1, De), n = Math.ceil(e / k), this.crypto)
      if (crypto.getRandomValues)
        for (t = crypto.getRandomValues(new Uint32Array(n));o < n; )
          i = t[o], i >= 4290000000 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4);o < n; )
          i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 2140000000 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else
        throw Error(mo);
    else
      for (;o < n; )
        a[o++] = Math.random() * 1e7 | 0;
    for (n = a[--o], e %= k, n && e && (i = W(10, k - e), a[o] = (n / i | 0) * i);a[o] === 0; o--)
      a.pop();
    if (o < 0)
      r = 0, a = [0];
    else {
      for (r = -1;a[0] === 0; r -= k)
        a.shift();
      for (n = 1, i = a[0];i >= 10; i /= 10)
        n++;
      n < k && (r -= k - n);
    }
    return s.e = r, s.d = a, s;
  }
  function ru(e) {
    return I(e = new this(e), e.e + 1, this.rounding);
  }
  function nu(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
  }
  function iu(e) {
    return new this(e).sin();
  }
  function ou(e) {
    return new this(e).sinh();
  }
  function su(e) {
    return new this(e).sqrt();
  }
  function au(e, t) {
    return new this(e).sub(t);
  }
  function lu() {
    var e = 0, t = arguments, r = new this(t[e]);
    for (N = false;r.s && ++e < t.length; )
      r = r.plus(t[e]);
    return N = true, I(r, this.precision, this.rounding);
  }
  function uu(e) {
    return new this(e).tan();
  }
  function cu(e) {
    return new this(e).tanh();
  }
  function pu(e) {
    return I(e = new this(e), e.e + 1, 1);
  }
  C[Symbol.for("nodejs.util.inspect.custom")] = C.toString;
  C[Symbol.toStringTag] = "Decimal";
  var Be = C.constructor = xo(An);
  wr = new Be(wr);
  Er = new Be(Er);
  var he = Be;
  function tt(e) {
    return e === null ? e : Array.isArray(e) ? e.map(tt) : typeof e == "object" ? mu(e) ? du(e) : Ze(e, tt) : e;
  }
  function mu(e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
  }
  function du({ $type: e, value: t }) {
    switch (e) {
      case "BigInt":
        return BigInt(t);
      case "Bytes": {
        let { buffer: r, byteOffset: n, byteLength: i } = w.Buffer.from(t, "base64");
        return new Uint8Array(r, n, i);
      }
      case "DateTime":
        return new Date(t);
      case "Decimal":
        return new he(t);
      case "Json":
        return JSON.parse(t);
      default:
        Pe(t, "Unknown tagged value");
    }
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function rt(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  }
  d();
  u();
  c();
  p();
  m();
  function nt(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function Tr(e) {
    return e.toString() !== "Invalid Date";
  }
  d();
  u();
  c();
  p();
  m();
  function it(e) {
    return Be.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var fu = Je(Xi());
  var gu = { red: ze, gray: qi, dim: pr, bold: cr, underline: _i, highlightSource: (e) => e.highlight() };
  var hu = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
  function yu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
    return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
  }
  function wu({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
    let a = [""], l = t ? " in" : ":";
    if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Eu(t))), i) {
      a.push("");
      let f = [i.toString()];
      o && (f.push(o), f.push(s.dim(")"))), a.push(f.join("")), o && a.push("");
    } else
      a.push(""), o && a.push(o), a.push("");
    return a.push(r), a.join(`
`);
  }
  function Eu(e) {
    let t = [e.fileName];
    return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
  }
  function Cr(e) {
    let t = e.showColors ? gu : hu, r;
    return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = yu(e), wu(r, t);
  }
  d();
  u();
  c();
  p();
  m();
  var So = Je(On());
  d();
  u();
  c();
  p();
  m();
  function Co(e, t, r) {
    let n = Ro(e), i = bu(n), o = Pu(i);
    o ? Rr(o, t, r) : t.addErrorMessage(() => "Unknown error");
  }
  function Ro(e) {
    return e.errors.flatMap((t) => t.kind === "Union" ? Ro(t) : [t]);
  }
  function bu(e) {
    let t = new Map, r = [];
    for (let n of e) {
      if (n.kind !== "InvalidArgumentType") {
        r.push(n);
        continue;
      }
      let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
      o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: xu(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
    }
    return r.push(...t.values()), r;
  }
  function xu(e, t) {
    return [...new Set(e.concat(t))];
  }
  function Pu(e) {
    return Cn(e, (t, r) => {
      let n = vo(t), i = vo(r);
      return n !== i ? n - i : To(t) - To(r);
    });
  }
  function vo(e) {
    let t = 0;
    return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
  }
  function To(e) {
    switch (e.kind) {
      case "InvalidArgumentValue":
      case "ValueTooLarge":
        return 20;
      case "InvalidArgumentType":
        return 10;
      case "RequiredArgumentMissing":
        return -10;
      default:
        return 0;
    }
  }
  d();
  u();
  c();
  p();
  m();
  var le = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.isRequired = false;
    }
    makeRequired() {
      return this.isRequired = true, this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
    }
  };
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var ot = class {
    constructor(t = 0, r) {
      this.context = r;
      this.lines = [];
      this.currentLine = "";
      this.currentIndent = 0;
      this.currentIndent = t;
    }
    write(t) {
      return typeof t == "string" ? this.currentLine += t : t.write(this), this;
    }
    writeJoined(t, r, n = (i, o) => o.write(i)) {
      let i = r.length - 1;
      for (let o = 0;o < r.length; o++)
        n(r[o], this), o !== i && this.write(t);
      return this;
    }
    writeLine(t) {
      return this.write(t).newLine();
    }
    newLine() {
      this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = undefined;
      let t = this.afterNextNewLineCallback;
      return this.afterNextNewLineCallback = undefined, t?.(), this;
    }
    withIndent(t) {
      return this.indent(), t(this), this.unindent(), this;
    }
    afterNextNewline(t) {
      return this.afterNextNewLineCallback = t, this;
    }
    indent() {
      return this.currentIndent++, this;
    }
    unindent() {
      return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(t) {
      return this.marginSymbol = t, this;
    }
    toString() {
      return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
      return this.currentLine.length;
    }
    indentedCurrentLine() {
      let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
      return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
    }
  };
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var Ar = class {
    constructor(t) {
      this.value = t;
    }
    write(t) {
      t.write(this.value);
    }
    markAsError() {
      this.value.markAsError();
    }
  };
  d();
  u();
  c();
  p();
  m();
  var Sr = (e) => e;
  var Ir = { bold: Sr, red: Sr, green: Sr, dim: Sr, enabled: false };
  var Ao = { bold: cr, red: ze, green: Fi, dim: pr, enabled: true };
  var st = { write(e) {
    e.writeLine(",");
  } };
  d();
  u();
  c();
  p();
  m();
  var ye = class {
    constructor(t) {
      this.contents = t;
      this.isUnderlined = false;
      this.color = (t2) => t2;
    }
    underline() {
      return this.isUnderlined = true, this;
    }
    setColor(t) {
      return this.color = t, this;
    }
    write(t) {
      let r = t.getCurrentLineLength();
      t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
        t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
      });
    }
  };
  d();
  u();
  c();
  p();
  m();
  var Me = class {
    constructor() {
      this.hasError = false;
    }
    markAsError() {
      return this.hasError = true, this;
    }
  };
  var at = class extends Me {
    constructor() {
      super(...arguments);
      this.items = [];
    }
    addItem(r) {
      return this.items.push(new Ar(r)), this;
    }
    getField(r) {
      return this.items[r];
    }
    getPrintWidth() {
      return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
    }
    write(r) {
      if (this.items.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithItems(r);
    }
    writeEmpty(r) {
      let n = new ye("[]");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithItems(r) {
      let { colors: n } = r.context;
      r.writeLine("[").withIndent(() => r.writeJoined(st, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(n.red("~".repeat(this.getPrintWidth())));
      });
    }
    asObject() {}
  };
  var lt = class e extends Me {
    constructor() {
      super(...arguments);
      this.fields = {};
      this.suggestions = [];
    }
    addField(r) {
      this.fields[r.name] = r;
    }
    addSuggestion(r) {
      this.suggestions.push(r);
    }
    getField(r) {
      return this.fields[r];
    }
    getDeepField(r) {
      let [n, ...i] = r, o = this.getField(n);
      if (!o)
        return;
      let s = o;
      for (let a of i) {
        let l;
        if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof at && (l = s.value.getField(Number(a))), !l)
          return;
        s = l;
      }
      return s;
    }
    getDeepFieldValue(r) {
      return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
      return !!this.getField(r);
    }
    removeAllFields() {
      this.fields = {};
    }
    removeField(r) {
      delete this.fields[r];
    }
    getFields() {
      return this.fields;
    }
    isEmpty() {
      return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
      return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
      let n = this;
      for (let i of r) {
        if (!(n instanceof e))
          return;
        let o = n.getSubSelectionValue(i);
        if (!o)
          return;
        n = o;
      }
      return n;
    }
    getDeepSelectionParent(r) {
      let n = this.getSelectionParent();
      if (!n)
        return;
      let i = n;
      for (let o of r) {
        let s = i.value.getFieldValue(o);
        if (!s || !(s instanceof e))
          return;
        let a = s.getSelectionParent();
        if (!a)
          return;
        i = a;
      }
      return i;
    }
    getSelectionParent() {
      let r = this.getField("select")?.value.asObject();
      if (r)
        return { kind: "select", value: r };
      let n = this.getField("include")?.value.asObject();
      if (n)
        return { kind: "include", value: n };
    }
    getSubSelectionValue(r) {
      return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
      let r = Object.values(this.fields);
      return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
    }
    write(r) {
      let n = Object.values(this.fields);
      if (n.length === 0 && this.suggestions.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithContents(r, n);
    }
    asObject() {
      return this;
    }
    writeEmpty(r) {
      let n = new ye("{}");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithContents(r, n) {
      r.writeLine("{").withIndent(() => {
        r.writeJoined(st, [...n, ...this.suggestions]).newLine();
      }), r.write("}"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
      });
    }
  };
  d();
  u();
  c();
  p();
  m();
  var K = class extends Me {
    constructor(r) {
      super();
      this.text = r;
    }
    getPrintWidth() {
      return this.text.length;
    }
    write(r) {
      let n = new ye(this.text);
      this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
    }
    asObject() {}
  };
  d();
  u();
  c();
  p();
  m();
  var Ot = class {
    constructor() {
      this.fields = [];
    }
    addField(t, r) {
      return this.fields.push({ write(n) {
        let { green: i, dim: o } = n.context.colors;
        n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
      } }), this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.writeLine(r("{")).withIndent(() => {
        t.writeJoined(st, this.fields).newLine();
      }).write(r("}")).addMarginSymbol(r("+"));
    }
  };
  function Rr(e, t, r) {
    switch (e.kind) {
      case "MutuallyExclusiveFields":
        Tu(e, t);
        break;
      case "IncludeOnScalar":
        Cu(e, t);
        break;
      case "EmptySelection":
        Ru(e, t, r);
        break;
      case "UnknownSelectionField":
        ku(e, t);
        break;
      case "InvalidSelectionValue":
        Ou(e, t);
        break;
      case "UnknownArgument":
        Du(e, t);
        break;
      case "UnknownInputField":
        Mu(e, t);
        break;
      case "RequiredArgumentMissing":
        Nu(e, t);
        break;
      case "InvalidArgumentType":
        _u(e, t);
        break;
      case "InvalidArgumentValue":
        Fu(e, t);
        break;
      case "ValueTooLarge":
        Lu(e, t);
        break;
      case "SomeFieldsMissing":
        Bu(e, t);
        break;
      case "TooManyFieldsGiven":
        Uu(e, t);
        break;
      case "Union":
        Co(e, t, r);
        break;
      default:
        throw new Error("not implemented: " + e.kind);
    }
  }
  function Tu(e, t) {
    let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
  }
  function Cu(e, t) {
    let [r, n] = Dt(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
    if (o && (o.getField(n)?.markAsError(), i))
      for (let s of i.fields)
        s.isRelation && o.addSuggestion(new le(s.name, "true"));
    t.addErrorMessage((s) => {
      let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
      return i ? a += ` on model ${s.bold(i.name)}. ${Mt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
  }
  function Ru(e, t, r) {
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
      let i = n.getField("omit")?.value.asObject();
      if (i) {
        Au(e, t, i);
        return;
      }
      if (n.hasField("select")) {
        Su(e, t);
        return;
      }
    }
    if (r?.[rt(e.outputType.name)]) {
      Iu(e, t);
      return;
    }
    t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
  }
  function Au(e, t, r) {
    r.removeAllFields();
    for (let n of e.outputType.fields)
      r.addSuggestion(new le(n.name, "false"));
    t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
  }
  function Su(e, t) {
    let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
    n && (n.removeAllFields(), Oo(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Mt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
  }
  function Iu(e, t) {
    let r = new Ot;
    for (let i of e.outputType.fields)
      i.isRelation || r.addField(i.name, "false");
    let n = new le("omit", r).makeRequired();
    if (e.selectionPath.length === 0)
      t.arguments.addSuggestion(n);
    else {
      let [i, o] = Dt(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
      if (a) {
        let l = a?.value.asObject() ?? new lt;
        l.addSuggestion(n), a.value = l;
      }
    }
    t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
  }
  function ku(e, t) {
    let r = Do(e.selectionPath, t);
    if (r.parentKind !== "unknown") {
      r.field.markAsError();
      let n = r.parent;
      switch (r.parentKind) {
        case "select":
          Oo(n, e.outputType);
          break;
        case "include":
          qu(n, e.outputType);
          break;
        case "omit":
          $u(n, e.outputType);
          break;
      }
    }
    t.addErrorMessage((n) => {
      let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
      return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(Mt(n)), i.join(" ");
    });
  }
  function Ou(e, t) {
    let r = Do(e.selectionPath, t);
    r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
  }
  function Du(e, t) {
    let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && (n.getField(r)?.markAsError(), Vu(n, e.arguments)), t.addErrorMessage((i) => Io(i, r, e.arguments.map((o) => o.name)));
  }
  function Mu(e, t) {
    let [r, n] = Dt(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (i) {
      i.getDeepField(e.argumentPath)?.markAsError();
      let o = i.getDeepFieldValue(r)?.asObject();
      o && Mo(o, e.inputType);
    }
    t.addErrorMessage((o) => Io(o, n, e.inputType.fields.map((s) => s.name)));
  }
  function Io(e, t, r) {
    let n = [`Unknown argument \`${e.red(t)}\`.`], i = Gu(t, r);
    return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(Mt(e)), n.join(" ");
  }
  function Nu(e, t) {
    let r;
    t.addErrorMessage((l) => r?.value instanceof K && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (!n)
      return;
    let [i, o] = Dt(e.argumentPath), s = new Ot, a = n.getDeepFieldValue(i)?.asObject();
    if (a)
      if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields)
          s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new le(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(ko).join(" | ");
        a.addSuggestion(new le(o, l).makeRequired());
      }
  }
  function ko(e) {
    return e.kind === "list" ? `${ko(e.elementType)}[]` : e.name;
  }
  function _u(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = kr("or", e.argument.typeNames.map((s) => i.green(s)));
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
  }
  function Fu(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
        let s = kr("or", e.argument.typeNames.map((a) => i.green(a)));
        o.push(` Expected ${s}.`);
      }
      return o.join("");
    });
  }
  function Lu(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
    if (n) {
      let s = n.getDeepField(e.argumentPath)?.value;
      s?.markAsError(), s instanceof K && (i = s.text);
    }
    t.addErrorMessage((o) => {
      let s = ["Unable to fit value"];
      return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
    });
  }
  function Bu(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
      let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
      i && Mo(i, e.inputType);
    }
    t.addErrorMessage((i) => {
      let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${kr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Mt(i)), o.join(" ");
    });
  }
  function Uu(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
    if (n) {
      let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
      o && (o.markAsError(), i = Object.keys(o.getFields()));
    }
    t.addErrorMessage((o) => {
      let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${kr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
    });
  }
  function Oo(e, t) {
    for (let r of t.fields)
      e.hasField(r.name) || e.addSuggestion(new le(r.name, "true"));
  }
  function qu(e, t) {
    for (let r of t.fields)
      r.isRelation && !e.hasField(r.name) && e.addSuggestion(new le(r.name, "true"));
  }
  function $u(e, t) {
    for (let r of t.fields)
      !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new le(r.name, "true"));
  }
  function Vu(e, t) {
    for (let r of t)
      e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
  }
  function Do(e, t) {
    let [r, n] = Dt(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
    if (!i)
      return { parentKind: "unknown", fieldName: n };
    let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
    return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
  }
  function Mo(e, t) {
    if (t.kind === "object")
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
  }
  function Dt(e) {
    let t = [...e], r = t.pop();
    if (!r)
      throw new Error("unexpected empty path");
    return [t, r];
  }
  function Mt({ green: e, enabled: t }) {
    return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
  }
  function kr(e, t) {
    if (t.length === 1)
      return t[0];
    let r = [...t], n = r.pop();
    return `${r.join(", ")} ${e} ${n}`;
  }
  var ju = 3;
  function Gu(e, t) {
    let r = 1 / 0, n;
    for (let i of t) {
      let o = (0, So.default)(e, i);
      o > ju || o < r && (r = o, n = i);
    }
    return n;
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function No(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  }
  d();
  u();
  c();
  p();
  m();
  var Nt = class {
    constructor(t, r, n, i, o) {
      this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
    }
    _toGraphQLInputType() {
      let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
      return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
  };
  function ut(e) {
    return e instanceof Nt;
  }
  d();
  u();
  c();
  p();
  m();
  var Or = Symbol();
  var Dn = new WeakMap;
  var Ce = class {
    constructor(t) {
      t === Or ? Dn.set(this, `Prisma.${this._getName()}`) : Dn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Dn.get(this);
    }
  };
  var _t = class extends Ce {
    _getNamespace() {
      return "NullTypes";
    }
  };
  var Ft = class extends _t {
  };
  Mn(Ft, "DbNull");
  var Lt = class extends _t {
  };
  Mn(Lt, "JsonNull");
  var Bt = class extends _t {
  };
  Mn(Bt, "AnyNull");
  var Dr = { classes: { DbNull: Ft, JsonNull: Lt, AnyNull: Bt }, instances: { DbNull: new Ft(Or), JsonNull: new Lt(Or), AnyNull: new Bt(Or) } };
  function Mn(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  }
  d();
  u();
  c();
  p();
  m();
  var _o = ": ";
  var Mr = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = false;
    }
    markAsError() {
      this.hasError = true;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + _o.length;
    }
    write(t) {
      let r = new ye(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(_o).write(this.value);
    }
  };
  var Nn = class {
    constructor(t) {
      this.errorMessages = [];
      this.arguments = t;
    }
    write(t) {
      t.write(this.arguments);
    }
    addErrorMessage(t) {
      this.errorMessages.push(t);
    }
    renderAllMessages(t) {
      return this.errorMessages.map((r) => r(t)).join(`
`);
    }
  };
  function ct(e) {
    return new Nn(Fo(e));
  }
  function Fo(e) {
    let t = new lt;
    for (let [r, n] of Object.entries(e)) {
      let i = new Mr(r, Lo(n));
      t.addField(i);
    }
    return t;
  }
  function Lo(e) {
    if (typeof e == "string")
      return new K(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean")
      return new K(String(e));
    if (typeof e == "bigint")
      return new K(`${e}n`);
    if (e === null)
      return new K("null");
    if (e === undefined)
      return new K("undefined");
    if (it(e))
      return new K(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array)
      return w.Buffer.isBuffer(e) ? new K(`Buffer.alloc(${e.byteLength})`) : new K(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
      let t = Tr(e) ? e.toISOString() : "Invalid Date";
      return new K(`new Date("${t}")`);
    }
    return e instanceof Ce ? new K(`Prisma.${e._getName()}`) : ut(e) ? new K(`prisma.${No(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Ju(e) : typeof e == "object" ? Fo(e) : new K(Object.prototype.toString.call(e));
  }
  function Ju(e) {
    let t = new at;
    for (let r of e)
      t.addItem(Lo(r));
    return t;
  }
  function Nr(e, t) {
    let r = t === "pretty" ? Ao : Ir, n = e.renderAllMessages(r), i = new ot(0, { colors: r }).write(e).toString();
    return { message: n, args: i };
  }
  function _r({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
    let a = ct(e);
    for (let h of t)
      Rr(h, a, s);
    let { message: l, args: f } = Nr(a, r), g = Cr({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: f });
    throw new Z(g, { clientVersion: o });
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var we = class {
    constructor() {
      this._map = new Map;
    }
    get(t) {
      return this._map.get(t)?.value;
    }
    set(t, r) {
      this._map.set(t, { value: r });
    }
    getOrCreate(t, r) {
      let n = this._map.get(t);
      if (n)
        return n.value;
      let i = r();
      return this.set(t, i), i;
    }
  };
  d();
  u();
  c();
  p();
  m();
  function Ut(e) {
    let t;
    return { get() {
      return t || (t = { value: e() }), t.value;
    } };
  }
  d();
  u();
  c();
  p();
  m();
  function Ee(e) {
    return e.replace(/^./, (t) => t.toLowerCase());
  }
  d();
  u();
  c();
  p();
  m();
  function Uo(e, t, r) {
    let n = Ee(r);
    return !t.result || !(t.result.$allModels || t.result[n]) ? e : Qu({ ...e, ...Bo(t.name, e, t.result.$allModels), ...Bo(t.name, e, t.result[n]) });
  }
  function Qu(e) {
    let t = new we, r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
    return Ze(e, (n) => ({ ...n, needs: r(n.name, new Set) }));
  }
  function Bo(e, t, r) {
    return r ? Ze(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Wu(t, o, i) })) : {};
  }
  function Wu(e, t, r) {
    let n = e?.[t]?.compute;
    return n ? (i) => r({ ...i, [t]: n(i) }) : r;
  }
  function qo(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (e[n.name])
        for (let i of n.needs)
          r[i] = true;
    return r;
  }
  function $o(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (!e[n.name])
        for (let i of n.needs)
          delete r[i];
    return r;
  }
  var Fr = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new we;
      this.modelExtensionsCache = new we;
      this.queryCallbacksCache = new we;
      this.clientExtensions = Ut(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      this.batchCallbacks = Ut(() => {
        let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
        return r2 ? t2.concat(r2) : t2;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => Uo(this.previous?.getAllComputedFields(t), this.extension, t));
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Ee(t);
        return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== undefined && (o[t][r] !== undefined && i.push(o[t][r]), o[t].$allOperations !== undefined && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== undefined && (o.$allModels[r] !== undefined && i.push(o.$allModels[r]), o.$allModels.$allOperations !== undefined && i.push(o.$allModels.$allOperations)), o[r] !== undefined && i.push(o[r]), o.$allOperations !== undefined && i.push(o.$allOperations), n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  };
  var pt = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e;
    }
    static single(t) {
      return new e(new Fr(t));
    }
    isEmpty() {
      return this.head === undefined;
    }
    append(t) {
      return new e(new Fr(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
  d();
  u();
  c();
  p();
  m();
  var Lr = class {
    constructor(t) {
      this.name = t;
    }
  };
  function Vo(e) {
    return e instanceof Lr;
  }
  function jo(e) {
    return new Lr(e);
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var Go = Symbol();
  var qt = class {
    constructor(t) {
      if (t !== Go)
        throw new Error("Skip instance can not be constructed directly");
    }
    ifUndefined(t) {
      return t === undefined ? Br : t;
    }
  };
  var Br = new qt(Go);
  function be(e) {
    return e instanceof qt;
  }
  var Hu = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
  var Jo = "explicitly `undefined` values are not allowed";
  function Ur({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = pt.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: f, globalOmit: g }) {
    let h = new _n({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: f, globalOmit: g });
    return { modelName: e, action: Hu[t], query: $t(r, h) };
  }
  function $t({ select: e, include: t, ...r } = {}, n) {
    let i = r.omit;
    return delete r.omit, { arguments: Wo(r, n), selection: Ku(e, t, i, n) };
  }
  function Ku(e, t, r, n) {
    return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Xu(e, n)) : zu(n, t, r);
  }
  function zu(e, t, r) {
    let n = {};
    return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && Yu(n, t, e), Zu(n, r, e), n;
  }
  function Yu(e, t, r) {
    for (let [n, i] of Object.entries(t)) {
      if (be(i))
        continue;
      let o = r.nestSelection(n);
      if (Fn(i, o), i === false || i === undefined) {
        e[n] = false;
        continue;
      }
      let s = r.findField(n);
      if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
        e[n] = $t(i === true ? {} : i, o);
        continue;
      }
      if (i === true) {
        e[n] = true;
        continue;
      }
      e[n] = $t(i, o);
    }
  }
  function Zu(e, t, r) {
    let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = $o(i, n);
    for (let [s, a] of Object.entries(o)) {
      if (be(a))
        continue;
      Fn(a, r.nestSelection(s));
      let l = r.findField(s);
      n?.[s] && !l || (e[s] = !a);
    }
  }
  function Xu(e, t) {
    let r = {}, n = t.getComputedFields(), i = qo(e, n);
    for (let [o, s] of Object.entries(i)) {
      if (be(s))
        continue;
      let a = t.nestSelection(o);
      Fn(s, a);
      let l = t.findField(o);
      if (!(n?.[o] && !l)) {
        if (s === false || s === undefined || be(s)) {
          r[o] = false;
          continue;
        }
        if (s === true) {
          l?.kind === "object" ? r[o] = $t({}, a) : r[o] = true;
          continue;
        }
        r[o] = $t(s, a);
      }
    }
    return r;
  }
  function Qo(e, t) {
    if (e === null)
      return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
      return e;
    if (typeof e == "bigint")
      return { $type: "BigInt", value: String(e) };
    if (nt(e)) {
      if (Tr(e))
        return { $type: "DateTime", value: e.toISOString() };
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
    }
    if (Vo(e))
      return { $type: "Param", value: e.name };
    if (ut(e))
      return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
    if (Array.isArray(e))
      return ec(e, t);
    if (ArrayBuffer.isView(e)) {
      let { buffer: r, byteOffset: n, byteLength: i } = e;
      return { $type: "Bytes", value: w.Buffer.from(r, n, i).toString("base64") };
    }
    if (tc(e))
      return e.values;
    if (it(e))
      return { $type: "Decimal", value: e.toFixed() };
    if (e instanceof Ce) {
      if (e !== Dr.instances[e._getName()])
        throw new Error("Invalid ObjectEnumValue");
      return { $type: "Enum", value: e._getName() };
    }
    if (rc(e))
      return e.toJSON();
    if (typeof e == "object")
      return Wo(e, t);
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
  }
  function Wo(e, t) {
    if (e.$type)
      return { $type: "Raw", value: e };
    let r = {};
    for (let n in e) {
      let i = e[n], o = t.nestArgument(n);
      be(i) || (i !== undefined ? r[n] = Qo(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: Jo }));
    }
    return r;
  }
  function ec(e, t) {
    let r = [];
    for (let n = 0;n < e.length; n++) {
      let i = t.nestArgument(String(n)), o = e[n];
      if (o === undefined || be(o)) {
        let s = o === undefined ? "undefined" : "Prisma.skip";
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
      }
      r.push(Qo(o, i));
    }
    return r;
  }
  function tc(e) {
    return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
  }
  function rc(e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
  }
  function Fn(e, t) {
    e === undefined && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: Jo });
  }
  var _n = class e {
    constructor(t) {
      this.params = t;
      this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
    }
    throwValidationError(t) {
      _r({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
    }
    getSelectionPath() {
      return this.params.selectionPath;
    }
    getArgumentPath() {
      return this.params.argumentPath;
    }
    getArgumentName() {
      return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
      if (!(!this.params.modelName || !this.modelOrType))
        return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
    }
    isRawAction() {
      return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
    }
    isPreviewFeatureOn(t) {
      return this.params.previewFeatures.includes(t);
    }
    getComputedFields() {
      if (this.params.modelName)
        return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(t) {
      return this.modelOrType?.fields.find((r) => r.name === t);
    }
    nestSelection(t) {
      let r = this.findField(t), n = r?.kind === "object" ? r.type : undefined;
      return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
    }
    getGlobalOmit() {
      return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[rt(this.params.modelName)] ?? {} : {};
    }
    shouldApplyGlobalOmit() {
      switch (this.params.action) {
        case "findFirst":
        case "findFirstOrThrow":
        case "findUniqueOrThrow":
        case "findMany":
        case "upsert":
        case "findUnique":
        case "createManyAndReturn":
        case "create":
        case "update":
        case "updateManyAndReturn":
        case "delete":
          return true;
        case "executeRaw":
        case "aggregateRaw":
        case "runCommandRaw":
        case "findRaw":
        case "createMany":
        case "deleteMany":
        case "groupBy":
        case "updateMany":
        case "count":
        case "aggregate":
        case "queryRaw":
          return false;
        default:
          Pe(this.params.action, "Unknown action");
      }
    }
    nestArgument(t) {
      return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
    }
  };
  d();
  u();
  c();
  p();
  m();
  function Ho(e) {
    if (!e._hasPreviewFlag("metrics"))
      throw new Z("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e._clientVersion });
  }
  var mt = class {
    constructor(t) {
      this._client = t;
    }
    prometheus(t) {
      return Ho(this._client), this._client._engine.metrics({ format: "prometheus", ...t });
    }
    json(t) {
      return Ho(this._client), this._client._engine.metrics({ format: "json", ...t });
    }
  };
  d();
  u();
  c();
  p();
  m();
  function Ko(e) {
    return { models: Ln(e.models), enums: Ln(e.enums), types: Ln(e.types) };
  }
  function Ln(e) {
    let t = {};
    for (let { name: r, ...n } of e)
      t[r] = n;
    return t;
  }
  function zo(e, t) {
    let r = Ut(() => nc(t));
    Object.defineProperty(e, "dmmf", { get: () => r.get() });
  }
  function nc(e) {
    return { datamodel: { models: Bn(e.models), enums: Bn(e.enums), types: Bn(e.types) } };
  }
  function Bn(e) {
    return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
  }
  d();
  u();
  c();
  p();
  m();
  var Un = new WeakMap;
  var qr = "$$PrismaTypedSql";
  var qn = class {
    constructor(t, r) {
      Un.set(this, { sql: t, values: r }), Object.defineProperty(this, qr, { value: qr });
    }
    get sql() {
      return Un.get(this).sql;
    }
    get values() {
      return Un.get(this).values;
    }
  };
  function Yo(e) {
    return (...t) => new qn(e, t);
  }
  function Zo(e) {
    return e != null && e[qr] === qr;
  }
  d();
  u();
  c();
  p();
  m();
  var da = Je(Xo());
  d();
  u();
  c();
  p();
  m();
  Yi();
  Ji();
  Wi();
  d();
  u();
  c();
  p();
  m();
  var se = class e {
    constructor(t, r) {
      if (t.length - 1 !== r.length)
        throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
      let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
      this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
      let i = 0, o = 0;
      for (;i < r.length; ) {
        let s = r[i++], a = t[i];
        if (s instanceof e) {
          this.strings[o] += s.strings[0];
          let l = 0;
          for (;l < s.values.length; )
            this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
          this.strings[o] += a;
        } else
          this.values[o++] = s, this.strings[o] = a;
      }
    }
    get sql() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `?${this.strings[r++]}`;
      return n;
    }
    get statement() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `:${r}${this.strings[r++]}`;
      return n;
    }
    get text() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `$${r}${this.strings[r++]}`;
      return n;
    }
    inspect() {
      return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
    }
  };
  function es(e, t = ",", r = "", n = "") {
    if (e.length === 0)
      throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new se([r, ...Array(e.length - 1).fill(t), n], e);
  }
  function $n(e) {
    return new se([e], []);
  }
  var ts = $n("");
  function Vn(e, ...t) {
    return new se(e, t);
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function Vt(e) {
    return { getKeys() {
      return Object.keys(e);
    }, getPropertyValue(t) {
      return e[t];
    } };
  }
  d();
  u();
  c();
  p();
  m();
  function te(e, t) {
    return { getKeys() {
      return [e];
    }, getPropertyValue() {
      return t();
    } };
  }
  d();
  u();
  c();
  p();
  m();
  function Ue(e) {
    let t = new we;
    return { getKeys() {
      return e.getKeys();
    }, getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    }, getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    } };
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var $r = { enumerable: true, configurable: true, writable: true };
  function Vr(e) {
    let t = new Set(e);
    return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => $r, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
  }
  var rs = Symbol.for("nodejs.util.inspect.custom");
  function pe(e, t) {
    let r = oc(t), n = new Set, i = new Proxy(e, { get(o, s) {
      if (n.has(s))
        return o[s];
      let a = r.get(s);
      return a ? a.getPropertyValue(s) : o[s];
    }, has(o, s) {
      if (n.has(s))
        return true;
      let a = r.get(s);
      return a ? a.has?.(s) ?? true : Reflect.has(o, s);
    }, ownKeys(o) {
      let s = ns(Reflect.ownKeys(o), r), a = ns(Array.from(r.keys()), r);
      return [...new Set([...s, ...a, ...n])];
    }, set(o, s, a) {
      return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
    }, getOwnPropertyDescriptor(o, s) {
      let a = Reflect.getOwnPropertyDescriptor(o, s);
      if (a && !a.configurable)
        return a;
      let l = r.get(s);
      return l ? l.getPropertyDescriptor ? { ...$r, ...l?.getPropertyDescriptor(s) } : $r : a;
    }, defineProperty(o, s, a) {
      return n.add(s), Reflect.defineProperty(o, s, a);
    }, getPrototypeOf: () => Object.prototype });
    return i[rs] = function() {
      let o = { ...this };
      return delete o[rs], o;
    }, i;
  }
  function oc(e) {
    let t = new Map;
    for (let r of e) {
      let n = r.getKeys();
      for (let i of n)
        t.set(i, r);
    }
    return t;
  }
  function ns(e, t) {
    return e.filter((r) => t.get(r)?.has?.(r) ?? true);
  }
  d();
  u();
  c();
  p();
  m();
  function dt(e) {
    return { getKeys() {
      return e;
    }, has() {
      return false;
    }, getPropertyValue() {} };
  }
  d();
  u();
  c();
  p();
  m();
  function jr(e, t) {
    return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : undefined };
  }
  d();
  u();
  c();
  p();
  m();
  function is(e) {
    if (e === undefined)
      return "";
    let t = ct(e);
    return new ot(0, { colors: Ir }).write(t).toString();
  }
  d();
  u();
  c();
  p();
  m();
  var sc = "P2037";
  function Gr({ error: e, user_facing_error: t }, r, n) {
    return t.error_code ? new ne(ac(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new ie(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
  }
  function ac(e, t) {
    let r = e.message;
    return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === sc && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var jn = class {
    getLocation() {
      return null;
    }
  };
  function Ne(e) {
    return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite : new jn;
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var os = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
  function ft(e = {}) {
    let t = uc(e);
    return Object.entries(t).reduce((n, [i, o]) => (os[i] !== undefined ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
  }
  function uc(e = {}) {
    return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
  }
  function Jr(e = {}) {
    return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
  }
  function ss(e, t) {
    let r = Jr(e);
    return t({ action: "aggregate", unpacker: r, argsMapper: ft })(e);
  }
  d();
  u();
  c();
  p();
  m();
  function cc(e = {}) {
    let { select: t, ...r } = e;
    return typeof t == "object" ? ft({ ...r, _count: t }) : ft({ ...r, _count: { _all: true } });
  }
  function pc(e = {}) {
    return typeof e.select == "object" ? (t) => Jr(e)(t)._count : (t) => Jr(e)(t)._count._all;
  }
  function as(e, t) {
    return t({ action: "count", unpacker: pc(e), argsMapper: cc })(e);
  }
  d();
  u();
  c();
  p();
  m();
  function mc(e = {}) {
    let t = ft(e);
    if (Array.isArray(t.by))
      for (let r of t.by)
        typeof r == "string" && (t.select[r] = true);
    else
      typeof t.by == "string" && (t.select[t.by] = true);
    return t;
  }
  function dc(e = {}) {
    return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
      r._count = r._count._all;
    }), t);
  }
  function ls(e, t) {
    return t({ action: "groupBy", unpacker: dc(e), argsMapper: mc })(e);
  }
  function us(e, t, r) {
    if (t === "aggregate")
      return (n) => ss(n, r);
    if (t === "count")
      return (n) => as(n, r);
    if (t === "groupBy")
      return (n) => ls(n, r);
  }
  d();
  u();
  c();
  p();
  m();
  function cs(e, t) {
    let r = t.fields.filter((i) => !i.relationName), n = Tn(r, (i) => i.name);
    return new Proxy({}, { get(i, o) {
      if (o in i || typeof o == "symbol")
        return i[o];
      let s = n[o];
      if (s)
        return new Nt(e, o, s.type, s.isList, s.kind === "enum");
    }, ...Vr(Object.keys(n)) });
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var ps = (e) => Array.isArray(e) ? e : e.split(".");
  var Gn = (e, t) => ps(t).reduce((r, n) => r && r[n], e);
  var ms = (e, t, r) => ps(t).reduceRight((n, i, o, s) => Object.assign({}, Gn(e, s.slice(0, o)), { [i]: n }), r);
  function fc(e, t) {
    return e === undefined || t === undefined ? [] : [...t, "select", e];
  }
  function gc(e, t, r) {
    return t === undefined ? e ?? {} : ms(t, r, e || true);
  }
  function Jn(e, t, r, n, i, o) {
    let a = e._runtimeDataModel.models[t].fields.reduce((l, f) => ({ ...l, [f.name]: f }), {});
    return (l) => {
      let f = Ne(e._errorFormat), g = fc(n, i), h = gc(l, o, g), v = r({ dataPath: g, callsite: f })(h), S = hc(e, t);
      return new Proxy(v, { get(R, A) {
        if (!S.includes(A))
          return R[A];
        let M = [a[A].type, r, A], U = [g, h];
        return Jn(e, ...M, ...U);
      }, ...Vr([...S, ...Object.getOwnPropertyNames(v)]) });
    };
  }
  function hc(e, t) {
    return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
  }
  var yc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
  var wc = ["aggregate", "count", "groupBy"];
  function Qn(e, t) {
    let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Ec(e, t), xc(e, t), Vt(r), te("name", () => t), te("$name", () => t), te("$parent", () => e._appliedParent)];
    return pe({}, n);
  }
  function Ec(e, t) {
    let r = Ee(t), n = Object.keys(fr.ModelAction).concat("count");
    return { getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = i, s = (a) => (l) => {
        let f = Ne(e._errorFormat);
        return e._createPrismaPromise((g) => {
          let h = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: g, callsite: f };
          return e._request({ ...h, ...a });
        }, { action: o, args: l, model: t });
      };
      return yc.includes(o) ? Jn(e, t, s) : bc(i) ? us(e, i, s) : s({});
    } };
  }
  function bc(e) {
    return wc.includes(e);
  }
  function xc(e, t) {
    return Ue(te("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return cs(t, r);
    }));
  }
  d();
  u();
  c();
  p();
  m();
  function ds(e) {
    return e.replace(/^./, (t) => t.toUpperCase());
  }
  var Wn = Symbol();
  function jt(e) {
    let t = [Pc(e), vc(e), te(Wn, () => e), te("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
    return r && t.push(Vt(r)), pe(e, t);
  }
  function Pc(e) {
    let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
    return { getKeys() {
      return r;
    }, getPropertyValue(n) {
      return e[n];
    } };
  }
  function vc(e) {
    let t = Object.keys(e._runtimeDataModel.models), r = t.map(Ee), n = [...new Set(t.concat(r))];
    return Ue({ getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = ds(i);
      if (e._runtimeDataModel.models[o] !== undefined)
        return Qn(e, o);
      if (e._runtimeDataModel.models[i] !== undefined)
        return Qn(e, i);
    }, getPropertyDescriptor(i) {
      if (!r.includes(i))
        return { enumerable: false };
    } });
  }
  function fs(e) {
    return e[Wn] ? e[Wn] : e;
  }
  function gs(e) {
    if (typeof e == "function")
      return e(this);
    if (e.client?.__AccelerateEngine) {
      let r = e.client.__AccelerateEngine;
      this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
    }
    let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: undefined }, $on: { value: undefined } });
    return jt(t);
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function hs({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
    let o = i.getAllComputedFields(t);
    if (!o)
      return e;
    let s = [], a = [];
    for (let l of Object.values(o)) {
      if (n) {
        if (n[l.name])
          continue;
        let f = l.needs.filter((g) => n[g]);
        f.length > 0 && a.push(dt(f));
      } else if (r) {
        if (!r[l.name])
          continue;
        let f = l.needs.filter((g) => !r[g]);
        f.length > 0 && a.push(dt(f));
      }
      Tc(e, l.needs) && s.push(Cc(l, pe(e, s)));
    }
    return s.length > 0 || a.length > 0 ? pe(e, [...s, ...a]) : e;
  }
  function Tc(e, t) {
    return t.every((r) => vn(e, r));
  }
  function Cc(e, t) {
    return Ue(te(e.name, () => e.compute(t)));
  }
  d();
  u();
  c();
  p();
  m();
  function Qr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
    if (Array.isArray(t)) {
      for (let s = 0;s < t.length; s++)
        t[s] = Qr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
      return t;
    }
    let o = e(t, i, r) ?? t;
    return r.include && ys({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ys({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
  }
  function ys({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
    for (let [o, s] of Object.entries(e)) {
      if (!s || t[o] == null || be(s))
        continue;
      let l = n.models[r].fields.find((g) => g.name === o);
      if (!l || l.kind !== "object" || !l.relationName)
        continue;
      let f = typeof s == "object" ? s : {};
      t[o] = Qr({ visitor: i, result: t[o], args: f, modelName: l.type, runtimeDataModel: n });
    }
  }
  function ws({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
    return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Qr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, f) => {
      let g = Ee(l);
      return hs({ result: a, modelName: g, select: f.select, omit: f.select ? undefined : { ...o?.[g], ...f.omit }, extensions: n });
    } });
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function Es(e) {
    if (e instanceof se)
      return Rc(e);
    if (Array.isArray(e)) {
      let r = [e[0]];
      for (let n = 1;n < e.length; n++)
        r[n] = Gt(e[n]);
      return r;
    }
    let t = {};
    for (let r in e)
      t[r] = Gt(e[r]);
    return t;
  }
  function Rc(e) {
    return new se(e.strings, e.values);
  }
  function Gt(e) {
    if (typeof e != "object" || e == null || e instanceof Ce || ut(e))
      return e;
    if (it(e))
      return new he(e.toFixed());
    if (nt(e))
      return new Date(+e);
    if (ArrayBuffer.isView(e))
      return e.slice(0);
    if (Array.isArray(e)) {
      let t = e.length, r;
      for (r = Array(t);t--; )
        r[t] = Gt(e[t]);
      return r;
    }
    if (typeof e == "object") {
      let t = {};
      for (let r in e)
        r === "__proto__" ? Object.defineProperty(t, r, { value: Gt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Gt(e[r]);
      return t;
    }
    Pe(e, "Unknown value");
  }
  function xs(e, t, r, n = 0) {
    return e._createPrismaPromise((i) => {
      let o = t.customDataProxyFetch;
      return "transaction" in t && i !== undefined && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Es(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Cs(o, l), a.args = s, xs(e, a, r, n + 1);
      } });
    });
  }
  function Ps(e, t) {
    let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
    if (e._extensions.isEmpty())
      return e._executeRequest(t);
    let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
    return xs(e, t, s);
  }
  function vs(e) {
    return (t) => {
      let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
      return n.length ? Ts(r, n, 0, e) : e(r);
    };
  }
  function Ts(e, t, r, n) {
    if (r === t.length)
      return n(e);
    let i = e.customDataProxyFetch, o = e.requests[0].transaction;
    return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : undefined } : undefined }, __internalParams: e, query(s, a = e) {
      let l = a.customDataProxyFetch;
      return a.customDataProxyFetch = Cs(i, l), Ts(a, t, r + 1, n);
    } });
  }
  var bs = (e) => e;
  function Cs(e = bs, t = bs) {
    return (r) => e(t(r));
  }
  d();
  u();
  c();
  p();
  m();
  var Rs = ee("prisma:client");
  var As = { Vercel: "vercel", "Netlify CI": "netlify" };
  function Ss({ postinstall: e, ciName: t, clientVersion: r }) {
    if (Rs("checkPlatformCaching:postinstall", e), Rs("checkPlatformCaching:ciName", t), e === true && t && t in As) {
      let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${As[t]}-build`;
      throw console.error(n), new Q(n, r);
    }
  }
  d();
  u();
  c();
  p();
  m();
  function Is(e, t) {
    return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var Ac = "Cloudflare-Workers";
  var Sc = "node";
  function ks() {
    return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Ac ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Sc ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
  }
  var Ic = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
  function Wr() {
    let e = ks();
    return { id: e, prettyName: Ic[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function gt({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
    let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
    if (o === undefined ? i = undefined : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== undefined && i === undefined)
      throw Wr().id === "workerd" ? new Q(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new Q(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
    if (i === undefined)
      throw new Q("error: Missing URL environment variable, value, or override.", n);
    return i;
  }
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var Hr = class extends Error {
    constructor(t, r) {
      super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
    }
    get [Symbol.toStringTag]() {
      return this.name;
    }
  };
  var ae = class extends Hr {
    constructor(t, r) {
      super(t, r), this.isRetryable = r.isRetryable ?? true;
    }
  };
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  function B(e, t) {
    return { ...e, isRetryable: t };
  }
  var ht = class extends ae {
    constructor(r) {
      super("This request must be retried", B(r, true));
      this.name = "ForcedRetryError";
      this.code = "P5001";
    }
  };
  _(ht, "ForcedRetryError");
  d();
  u();
  c();
  p();
  m();
  var qe = class extends ae {
    constructor(r, n) {
      super(r, B(n, false));
      this.name = "InvalidDatasourceError";
      this.code = "P6001";
    }
  };
  _(qe, "InvalidDatasourceError");
  d();
  u();
  c();
  p();
  m();
  var $e = class extends ae {
    constructor(r, n) {
      super(r, B(n, false));
      this.name = "NotImplementedYetError";
      this.code = "P5004";
    }
  };
  _($e, "NotImplementedYetError");
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var G = class extends ae {
    constructor(t, r) {
      super(t, r), this.response = r.response;
      let n = this.response.headers.get("prisma-request-id");
      if (n) {
        let i = `(The request id was: ${n})`;
        this.message = this.message + " " + i;
      }
    }
  };
  var Ve = class extends G {
    constructor(r) {
      super("Schema needs to be uploaded", B(r, true));
      this.name = "SchemaMissingError";
      this.code = "P5005";
    }
  };
  _(Ve, "SchemaMissingError");
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var Hn = "This request could not be understood by the server";
  var Jt = class extends G {
    constructor(r, n, i) {
      super(n || Hn, B(r, false));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
  _(Jt, "BadRequestError");
  d();
  u();
  c();
  p();
  m();
  var Qt = class extends G {
    constructor(r, n) {
      super("Engine not started: healthcheck timeout", B(r, true));
      this.name = "HealthcheckTimeoutError";
      this.code = "P5013";
      this.logs = n;
    }
  };
  _(Qt, "HealthcheckTimeoutError");
  d();
  u();
  c();
  p();
  m();
  var Wt = class extends G {
    constructor(r, n, i) {
      super(n, B(r, true));
      this.name = "EngineStartupError";
      this.code = "P5014";
      this.logs = i;
    }
  };
  _(Wt, "EngineStartupError");
  d();
  u();
  c();
  p();
  m();
  var Ht = class extends G {
    constructor(r) {
      super("Engine version is not supported", B(r, false));
      this.name = "EngineVersionNotSupportedError";
      this.code = "P5012";
    }
  };
  _(Ht, "EngineVersionNotSupportedError");
  d();
  u();
  c();
  p();
  m();
  var Kn = "Request timed out";
  var Kt = class extends G {
    constructor(r, n = Kn) {
      super(n, B(r, false));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
  _(Kt, "GatewayTimeoutError");
  d();
  u();
  c();
  p();
  m();
  var kc = "Interactive transaction error";
  var zt = class extends G {
    constructor(r, n = kc) {
      super(n, B(r, false));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
  _(zt, "InteractiveTransactionError");
  d();
  u();
  c();
  p();
  m();
  var Oc = "Request parameters are invalid";
  var Yt = class extends G {
    constructor(r, n = Oc) {
      super(n, B(r, false));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
  _(Yt, "InvalidRequestError");
  d();
  u();
  c();
  p();
  m();
  var zn = "Requested resource does not exist";
  var Zt = class extends G {
    constructor(r, n = zn) {
      super(n, B(r, false));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
  _(Zt, "NotFoundError");
  d();
  u();
  c();
  p();
  m();
  var Yn = "Unknown server error";
  var yt = class extends G {
    constructor(r, n, i) {
      super(n || Yn, B(r, true));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
  _(yt, "ServerError");
  d();
  u();
  c();
  p();
  m();
  var Zn = "Unauthorized, check your connection string";
  var Xt = class extends G {
    constructor(r, n = Zn) {
      super(n, B(r, false));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
  _(Xt, "UnauthorizedError");
  d();
  u();
  c();
  p();
  m();
  var Xn = "Usage exceeded, retry again later";
  var er = class extends G {
    constructor(r, n = Xn) {
      super(n, B(r, true));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
  _(er, "UsageExceededError");
  async function Dc(e) {
    let t;
    try {
      t = await e.text();
    } catch {
      return { type: "EmptyError" };
    }
    try {
      let r = JSON.parse(t);
      if (typeof r == "string")
        switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
      if (typeof r == "object" && r !== null) {
        if ("is_panic" in r && "message" in r && "error_code" in r)
          return { type: "QueryEngineError", body: r };
        if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
          let n = Object.values(r)[0].reason;
          return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
        }
      }
      return { type: "UnknownJsonError", body: r };
    } catch {
      return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
    }
  }
  async function tr(e, t) {
    if (e.ok)
      return;
    let r = { clientVersion: t, response: e }, n = await Dc(e);
    if (n.type === "QueryEngineError")
      throw new ne(n.body.message, { code: n.body.error_code, clientVersion: t });
    if (n.type === "DataProxyError") {
      if (n.body === "InternalDataProxyError")
        throw new yt(r, "Internal Data Proxy error");
      if ("EngineNotStarted" in n.body) {
        if (n.body.EngineNotStarted.reason === "SchemaMissing")
          return new Ve(r);
        if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
          throw new Ht(r);
        if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
          throw new Wt(r, i, o);
        }
        if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
          throw new Q(i, t, o);
        }
        if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
          let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
          throw new Qt(r, i);
        }
      }
      if ("InteractiveTransactionMisrouted" in n.body) {
        let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
        throw new zt(r, i[n.body.InteractiveTransactionMisrouted.reason]);
      }
      if ("InvalidRequestError" in n.body)
        throw new Yt(r, n.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403)
      throw new Xt(r, wt(Zn, n));
    if (e.status === 404)
      return new Zt(r, wt(zn, n));
    if (e.status === 429)
      throw new er(r, wt(Xn, n));
    if (e.status === 504)
      throw new Kt(r, wt(Kn, n));
    if (e.status >= 500)
      throw new yt(r, wt(Yn, n));
    if (e.status >= 400)
      throw new Jt(r, wt(Hn, n));
  }
  function wt(e, t) {
    return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
  }
  d();
  u();
  c();
  p();
  m();
  function Os(e) {
    let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
    return new Promise((i) => setTimeout(() => i(n), n));
  }
  d();
  u();
  c();
  p();
  m();
  var Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function Ds(e) {
    let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, f, g;
    for (let h = 0;h < o; h = h + 3)
      g = t[h] << 16 | t[h + 1] << 8 | t[h + 2], s = (g & 16515072) >> 18, a = (g & 258048) >> 12, l = (g & 4032) >> 6, f = g & 63, r += Re[s] + Re[a] + Re[l] + Re[f];
    return i == 1 ? (g = t[o], s = (g & 252) >> 2, a = (g & 3) << 4, r += Re[s] + Re[a] + "==") : i == 2 && (g = t[o] << 8 | t[o + 1], s = (g & 64512) >> 10, a = (g & 1008) >> 4, l = (g & 15) << 2, r += Re[s] + Re[a] + Re[l] + "="), r;
  }
  d();
  u();
  c();
  p();
  m();
  function Ms(e) {
    if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
      throw new Q("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
  }
  d();
  u();
  c();
  p();
  m();
  function Mc(e) {
    return e[0] * 1000 + e[1] / 1e6;
  }
  function ei(e) {
    return new Date(Mc(e));
  }
  d();
  u();
  c();
  p();
  m();
  var Ns = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var rr = class extends ae {
    constructor(r, n) {
      super(`Cannot fetch data from service:
${r}`, B(n, true));
      this.name = "RequestError";
      this.code = "P5010";
    }
  };
  _(rr, "RequestError");
  async function je(e, t, r = (n) => n) {
    let { clientVersion: n, ...i } = t, o = r(fetch);
    try {
      return await o(e, i);
    } catch (s) {
      let a = s.message ?? "Unknown error";
      throw new rr(a, { clientVersion: n, cause: s });
    }
  }
  var _c = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
  var _s = ee("prisma:client:dataproxyEngine");
  async function Fc(e, t) {
    let r = Ns["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
    if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
      return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
      return n;
    let [i, o] = n?.split("-") ?? [];
    if (o === undefined && _c.test(i))
      return i;
    if (o !== undefined || n === "0.0.0" || n === "in-memory") {
      if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
        return "0.0.0";
      let [s] = r.split("-") ?? [], [a, l, f] = s.split("."), g = Lc(`<=${a}.${l}.${f}`), h = await je(g, { clientVersion: n });
      if (!h.ok)
        throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${await h.text() || "<empty body>"}`);
      let v = await h.text();
      _s("length of body fetched from unpkg.com", v.length);
      let S;
      try {
        S = JSON.parse(v);
      } catch (R) {
        throw console.error("JSON.parse error: body fetched from unpkg.com: ", v), R;
      }
      return S.version;
    }
    throw new $e("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
  }
  async function Fs(e, t) {
    let r = await Fc(e, t);
    return _s("version", r), r;
  }
  function Lc(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
  }
  var Ls = 3;
  var Kr = ee("prisma:client:dataproxyEngine");
  var ti = class {
    constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
      this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
      this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
    }
  };
  var Et = class {
    constructor(t) {
      this.name = "DataProxyEngine";
      Ms(t), this.config = t, this.env = { ...t.env, ...typeof y < "u" ? y.env : {} }, this.inlineSchema = Ds(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== undefined && await this.startPromise, this.startPromise = (async () => {
        let [t, r] = this.extractHostAndApiKey();
        this.host = t, this.headerBuilder = new ti({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Fs(t, this.config), Kr("host", this.host);
      })(), await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(t) {
      t?.logs?.length && t.logs.forEach((r) => {
        switch (r.level) {
          case "debug":
          case "trace":
            Kr(r);
            break;
          case "error":
          case "warn":
          case "info": {
            this.logEmitter.emit(r.level, { timestamp: ei(r.timestamp), message: r.attributes.message ?? "", target: r.target });
            break;
          }
          case "query": {
            this.logEmitter.emit("query", { query: r.attributes.query ?? "", timestamp: ei(r.timestamp), duration: r.attributes.duration_ms ?? 0, params: r.attributes.params ?? "", target: r.target });
            break;
          }
          default:
            r.level;
        }
      }), t?.traces?.length && this.tracingHelper.dispatchEngineSpans(t.traces);
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the remote query engine');
    }
    async url(t) {
      return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: true };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await je(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
        r.ok || Kr("schema response status", r.status);
        let n = await tr(r, this.clientVersion);
        if (n)
          throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: new Date, target: "" }), n;
        this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: new Date, target: "" });
      });
    }
    request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
      return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
    }
    async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
      let o = n?.kind === "itx" ? n.options : undefined, s = jr(t, n);
      return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r })).map((l) => (l.extensions && this.propagateResponseExtensions(l.extensions), ("errors" in l) ? this.convertProtocolErrorsToClientError(l.errors) : l));
    }
    requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
      return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
        let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
        o(s);
        let a = await je(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
        a.ok || Kr("graphql response status", a.status), await this.handleError(await tr(a, this.clientVersion));
        let l = await a.json();
        if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l)
          throw this.convertProtocolErrorsToClientError(l.errors);
        return "batchResult" in l ? l.batchResult : l;
      } });
    }
    async transaction(t, r, n) {
      let i = { start: "starting", commit: "committing", rollback: "rolling back" };
      return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
        if (t === "start") {
          let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
          o(a);
          let l = await je(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
          await this.handleError(await tr(l, this.clientVersion));
          let f = await l.json(), { extensions: g } = f;
          g && this.propagateResponseExtensions(g);
          let h = f.id, v = f["data-proxy"].endpoint;
          return { id: h, payload: { endpoint: v } };
        } else {
          let s = `${n.payload.endpoint}/${t}`;
          o(s);
          let a = await je(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
          await this.handleError(await tr(a, this.clientVersion));
          let l = await a.json(), { extensions: f } = l;
          f && this.propagateResponseExtensions(f);
          return;
        }
      } });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = gt({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
      try {
        i = new URL(n);
      } catch {
        throw new qe(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== "prisma:" && o !== dr)
        throw new qe(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      let l = a.get("api_key");
      if (l === null || l.length < 1)
        throw new qe(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
      return [s, l];
    }
    metrics() {
      throw new $e("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
    }
    async withRetry(t) {
      for (let r = 0;; r++) {
        let n = (i) => {
          this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: new Date, target: "" });
        };
        try {
          return await t.callback({ logHttpCall: n });
        } catch (i) {
          if (!(i instanceof ae) || !i.isRetryable)
            throw i;
          if (r >= Ls)
            throw i instanceof ht ? i.cause : i;
          this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Ls} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: new Date, target: "" });
          let o = await Os(r);
          this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: new Date, target: "" });
        }
      }
    }
    async handleError(t) {
      if (t instanceof Ve)
        throw await this.uploadSchema(), new ht({ clientVersion: this.clientVersion, cause: t });
      if (t)
        throw t;
    }
    convertProtocolErrorsToClientError(t) {
      return t.length === 1 ? Gr(t[0], this.config.clientVersion, this.config.activeProvider) : new ie(JSON.stringify(t), { clientVersion: this.config.clientVersion });
    }
    applyPendingMigrations() {
      throw new Error("Method not implemented.");
    }
  };
  function Bs({ copyEngine: e = true }, t) {
    let r;
    try {
      r = gt({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...y.env }, clientVersion: t.clientVersion });
    } catch {}
    let n = !!(r?.startsWith("prisma://") || xn(r));
    e && n && It("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
    let i = Ye(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", l = i === "binary", f = i === "client";
    if (o && s || s) {
      let g;
      throw g = ["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."], new Z(g.join(`
`), { clientVersion: t.clientVersion });
    }
    return o ? new Et(t) : new Et(t);
  }
  d();
  u();
  c();
  p();
  m();
  function zr({ generator: e }) {
    return e?.previewFeatures ?? [];
  }
  d();
  u();
  c();
  p();
  m();
  var Us = (e) => ({ command: e });
  d();
  u();
  c();
  p();
  m();
  d();
  u();
  c();
  p();
  m();
  var qs = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
  d();
  u();
  c();
  p();
  m();
  function bt(e) {
    try {
      return $s(e, "fast");
    } catch {
      return $s(e, "slow");
    }
  }
  function $s(e, t) {
    return JSON.stringify(e.map((r) => js(r, t)));
  }
  function js(e, t) {
    if (Array.isArray(e))
      return e.map((r) => js(r, t));
    if (typeof e == "bigint")
      return { prisma__type: "bigint", prisma__value: e.toString() };
    if (nt(e))
      return { prisma__type: "date", prisma__value: e.toJSON() };
    if (he.isDecimal(e))
      return { prisma__type: "decimal", prisma__value: e.toJSON() };
    if (w.Buffer.isBuffer(e))
      return { prisma__type: "bytes", prisma__value: e.toString("base64") };
    if (Bc(e))
      return { prisma__type: "bytes", prisma__value: w.Buffer.from(e).toString("base64") };
    if (ArrayBuffer.isView(e)) {
      let { buffer: r, byteOffset: n, byteLength: i } = e;
      return { prisma__type: "bytes", prisma__value: w.Buffer.from(r, n, i).toString("base64") };
    }
    return typeof e == "object" && t === "slow" ? Gs(e) : e;
  }
  function Bc(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
  }
  function Gs(e) {
    if (typeof e != "object" || e === null)
      return e;
    if (typeof e.toJSON == "function")
      return e.toJSON();
    if (Array.isArray(e))
      return e.map(Vs);
    let t = {};
    for (let r of Object.keys(e))
      t[r] = Vs(e[r]);
    return t;
  }
  function Vs(e) {
    return typeof e == "bigint" ? e.toString() : Gs(e);
  }
  d();
  u();
  c();
  p();
  m();
  var Uc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
  var Js = Uc;
  var qc = /^(\s*alter\s)/i;
  var Qs = ee("prisma:client");
  function ri(e, t, r, n) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && qc.exec(t))
      throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
  var ni = ({ clientMethod: e, activeProvider: t }) => (r) => {
    let n = "", i;
    if (Zo(r))
      n = r.sql, i = { values: bt(r.values), __prismaRawParameters__: true };
    else if (Array.isArray(r)) {
      let [o, ...s] = r;
      n = o, i = { values: bt(s || []), __prismaRawParameters__: true };
    } else
      switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: bt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: bt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = qs(r), i = { values: bt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
    return i?.values ? Qs(`prisma.${e}(${n}, ${i.values})`) : Qs(`prisma.${e}(${n})`), { query: n, parameters: i };
  };
  var Ws = { requestArgsToMiddlewareArgs(e) {
    return [e.strings, ...e.values];
  }, middlewareArgsToRequestArgs(e) {
    let [t, ...r] = e;
    return new se(t, r);
  } };
  var Hs = { requestArgsToMiddlewareArgs(e) {
    return [e];
  }, middlewareArgsToRequestArgs(e) {
    return e[0];
  } };
  d();
  u();
  c();
  p();
  m();
  function ii(e) {
    return function(r, n) {
      let i, o = (s = e) => {
        try {
          return s === undefined || s?.kind === "itx" ? i ??= Ks(r(s)) : Ks(r(s));
        } catch (a) {
          return Promise.reject(a);
        }
      };
      return { get spec() {
        return n;
      }, then(s, a) {
        return o().then(s, a);
      }, catch(s) {
        return o().catch(s);
      }, finally(s) {
        return o().finally(s);
      }, requestTransaction(s) {
        let a = o(s);
        return a.requestTransaction ? a.requestTransaction(s) : a;
      }, [Symbol.toStringTag]: "PrismaPromise" };
    };
  }
  function Ks(e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
  }
  d();
  u();
  c();
  p();
  m();
  var $c = bn.split(".")[0];
  var Vc = { isEnabled() {
    return false;
  }, getTraceParent() {
    return "00-10-10-00";
  }, dispatchEngineSpans() {}, getActiveContext() {}, runInChildSpan(e, t) {
    return t();
  } };
  var oi = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    dispatchEngineSpans(t) {
      return this.getGlobalTracingHelper().dispatchEngineSpans(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      let t = globalThis[`V${$c}_PRISMA_INSTRUMENTATION`], r = globalThis.PRISMA_INSTRUMENTATION;
      return t?.helper ?? r?.helper ?? Vc;
    }
  };
  function zs() {
    return new oi;
  }
  d();
  u();
  c();
  p();
  m();
  function Ys(e, t = () => {}) {
    let r, n = new Promise((i) => r = i);
    return { then(i) {
      return --e === 0 && r(t()), i?.(n);
    } };
  }
  d();
  u();
  c();
  p();
  m();
  function Zs(e) {
    return typeof e == "string" ? e : e.reduce((t, r) => {
      let n = typeof r == "string" ? r : r.level;
      return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
    }, undefined);
  }
  d();
  u();
  c();
  p();
  m();
  var Yr = class {
    constructor() {
      this._middlewares = [];
    }
    use(t) {
      this._middlewares.push(t);
    }
    get(t) {
      return this._middlewares[t];
    }
    has(t) {
      return !!this._middlewares[t];
    }
    length() {
      return this._middlewares.length;
    }
  };
  d();
  u();
  c();
  p();
  m();
  var ea = Je(io());
  d();
  u();
  c();
  p();
  m();
  function Zr(e) {
    return typeof e.batchRequestIdx == "number";
  }
  d();
  u();
  c();
  p();
  m();
  function Xs(e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
      return;
    let t = [];
    return e.modelName && t.push(e.modelName), e.query.arguments && t.push(si(e.query.arguments)), t.push(si(e.query.selection)), t.join("");
  }
  function si(e) {
    return `(${Object.keys(e).sort().map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${si(n)})` : r;
    }).join(" ")})`;
  }
  d();
  u();
  c();
  p();
  m();
  var jc = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
  function ai(e) {
    return jc[e];
  }
  d();
  u();
  c();
  p();
  m();
  var Xr = class {
    constructor(t) {
      this.options = t;
      this.tickActive = false;
      this.batches = {};
    }
    request(t) {
      let r = this.options.batchBy(t);
      return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, y.nextTick(() => {
        this.dispatchBatches(), this.tickActive = false;
      }))), new Promise((n, i) => {
        this.batches[r].push({ request: t, resolve: n, reject: i });
      })) : this.options.singleLoader(t);
    }
    dispatchBatches() {
      for (let t in this.batches) {
        let r = this.batches[t];
        delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
          n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
        }).catch((n) => {
          r[0].reject(n);
        }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
          if (n instanceof Error)
            for (let i = 0;i < r.length; i++)
              r[i].reject(n);
          else
            for (let i = 0;i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
        }).catch((n) => {
          for (let i = 0;i < r.length; i++)
            r[i].reject(n);
        }));
      }
    }
    get [Symbol.toStringTag]() {
      return "DataLoader";
    }
  };
  d();
  u();
  c();
  p();
  m();
  function Ge(e, t) {
    if (t === null)
      return t;
    switch (e) {
      case "bigint":
        return BigInt(t);
      case "bytes": {
        let { buffer: r, byteOffset: n, byteLength: i } = w.Buffer.from(t, "base64");
        return new Uint8Array(r, n, i);
      }
      case "decimal":
        return new he(t);
      case "datetime":
      case "date":
        return new Date(t);
      case "time":
        return new Date(`1970-01-01T${t}Z`);
      case "bigint-array":
        return t.map((r) => Ge("bigint", r));
      case "bytes-array":
        return t.map((r) => Ge("bytes", r));
      case "decimal-array":
        return t.map((r) => Ge("decimal", r));
      case "datetime-array":
        return t.map((r) => Ge("datetime", r));
      case "date-array":
        return t.map((r) => Ge("date", r));
      case "time-array":
        return t.map((r) => Ge("time", r));
      default:
        return t;
    }
  }
  function en(e) {
    let t = [], r = Gc(e);
    for (let n = 0;n < e.rows.length; n++) {
      let i = e.rows[n], o = { ...r };
      for (let s = 0;s < i.length; s++)
        o[e.columns[s]] = Ge(e.types[s], i[s]);
      t.push(o);
    }
    return t;
  }
  function Gc(e) {
    let t = {};
    for (let r = 0;r < e.columns.length; r++)
      t[e.columns[r]] = null;
    return t;
  }
  var Jc = ee("prisma:client:request_handler");
  var tn = class {
    constructor(t, r) {
      this.logEmitter = r, this.client = t, this.dataloader = new Xr({ batchLoader: vs(async ({ requests: n, customDataProxyFetch: i }) => {
        let { transaction: o, otelParentCtx: s } = n[0], a = n.map((h) => h.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), f = n.some((h) => ai(h.protocolQuery.action));
        return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Qc(o), containsWrite: f, customDataProxyFetch: i })).map((h, v) => {
          if (h instanceof Error)
            return h;
          try {
            return this.mapQueryEngineResult(n[v], h);
          } catch (S) {
            return S;
          }
        });
      }), singleLoader: async (n) => {
        let i = n.transaction?.kind === "itx" ? ta(n.transaction) : undefined, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: ai(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
        return this.mapQueryEngineResult(n, o);
      }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Xs(n.protocolQuery), batchOrder(n, i) {
        return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
      } });
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
        this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data, o = this.unpack(i, t, r);
      return y.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: new Date }), r;
      }
    }
    handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
      if (Jc(t), Wc(t, i))
        throw t;
      if (t instanceof ne && Hc(t)) {
        let f = ra(t.meta);
        _r({ args: o, errors: [f], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
      }
      let l = t.message;
      if (n && (l = Cr({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
        let f = s ? { modelName: s, ...t.meta } : t.meta;
        throw new ne(l, { code: t.code, clientVersion: this.client._clientVersion, meta: f, batchRequestIdx: t.batchRequestIdx });
      } else {
        if (t.isPanic)
          throw new ve(l, this.client._clientVersion);
        if (t instanceof ie)
          throw new ie(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
        if (t instanceof Q)
          throw new Q(l, this.client._clientVersion);
        if (t instanceof ve)
          throw new ve(l, this.client._clientVersion);
      }
      throw t.clientVersion = this.client._clientVersion, t;
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, ea.default)(t) : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t))
        return t;
      let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((f) => f !== "select" && f !== "include"), a = Gn(o, s), l = i === "queryRaw" ? en(a) : tt(a);
      return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
  function Qc(e) {
    if (e) {
      if (e.kind === "batch")
        return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
      if (e.kind === "itx")
        return { kind: "itx", options: ta(e) };
      Pe(e, "Unknown transaction kind");
    }
  }
  function ta(e) {
    return { id: e.id, payload: e.payload };
  }
  function Wc(e, t) {
    return Zr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
  }
  function Hc(e) {
    return e.code === "P2009" || e.code === "P2012";
  }
  function ra(e) {
    if (e.kind === "Union")
      return { kind: "Union", errors: e.errors.map(ra) };
    if (Array.isArray(e.selectionPath)) {
      let [, ...t] = e.selectionPath;
      return { ...e, selectionPath: t };
    }
    return e;
  }
  d();
  u();
  c();
  p();
  m();
  var na = "6.4.1";
  var ia = na;
  d();
  u();
  c();
  p();
  m();
  var ua = Je(On());
  d();
  u();
  c();
  p();
  m();
  var q = class extends Error {
    constructor(t) {
      super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientConstructorValidationError";
    }
  };
  _(q, "PrismaClientConstructorValidationError");
  var oa = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
  var sa = ["pretty", "colorless", "minimal"];
  var aa = ["info", "query", "warn", "error"];
  var zc = { datasources: (e, { datasourceNames: t }) => {
    if (e) {
      if (typeof e != "object" || Array.isArray(e))
        throw new q(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
      for (let [r, n] of Object.entries(e)) {
        if (!t.includes(r)) {
          let i = xt(r, t) || ` Available datasources: ${t.join(", ")}`;
          throw new q(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
        }
        if (typeof n != "object" || Array.isArray(n))
          throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (n && typeof n == "object")
          for (let [i, o] of Object.entries(n)) {
            if (i !== "url")
              throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string")
              throw new q(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
      }
    }
  }, adapter: (e, t) => {
    if (!e && Ye(t.generator) === "client")
      throw new q('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
    if (e === null)
      return;
    if (e === undefined)
      throw new q('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (!zr(t).includes("driverAdapters"))
      throw new q('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
    if (Ye(t.generator) === "binary")
      throw new q('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }, datasourceUrl: (e) => {
    if (typeof e < "u" && typeof e != "string")
      throw new q(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
  }, errorFormat: (e) => {
    if (e) {
      if (typeof e != "string")
        throw new q(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
      if (!sa.includes(e)) {
        let t = xt(e, sa);
        throw new q(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
      }
    }
  }, log: (e) => {
    if (!e)
      return;
    if (!Array.isArray(e))
      throw new q(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
    function t(r) {
      if (typeof r == "string" && !aa.includes(r)) {
        let n = xt(r, aa);
        throw new q(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
      }
    }
    for (let r of e) {
      t(r);
      let n = { level: t, emit: (i) => {
        let o = ["stdout", "event"];
        if (!o.includes(i)) {
          let s = xt(i, o);
          throw new q(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
        }
      } };
      if (r && typeof r == "object")
        for (let [i, o] of Object.entries(r))
          if (n[i])
            n[i](o);
          else
            throw new q(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
    }
  }, transactionOptions: (e) => {
    if (!e)
      return;
    let t = e.maxWait;
    if (t != null && t <= 0)
      throw new q(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
    let r = e.timeout;
    if (r != null && r <= 0)
      throw new q(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
  }, omit: (e, t) => {
    if (typeof e != "object")
      throw new q('"omit" option is expected to be an object.');
    if (e === null)
      throw new q('"omit" option can not be `null`');
    let r = [];
    for (let [n, i] of Object.entries(e)) {
      let o = Zc(n, t.runtimeDataModel);
      if (!o) {
        r.push({ kind: "UnknownModel", modelKey: n });
        continue;
      }
      for (let [s, a] of Object.entries(i)) {
        let l = o.fields.find((f) => f.name === s);
        if (!l) {
          r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
          continue;
        }
        if (l.relationName) {
          r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
          continue;
        }
        typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
      }
    }
    if (r.length > 0)
      throw new q(Xc(e, r));
  }, __internal: (e) => {
    if (!e)
      return;
    let t = ["debug", "engine", "configOverride"];
    if (typeof e != "object")
      throw new q(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
    for (let [r] of Object.entries(e))
      if (!t.includes(r)) {
        let n = xt(r, t);
        throw new q(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
  } };
  function ca(e, t) {
    for (let [r, n] of Object.entries(e)) {
      if (!oa.includes(r)) {
        let i = xt(r, oa);
        throw new q(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
      }
      zc[r](n, t);
    }
    if (e.datasourceUrl && e.datasources)
      throw new q('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
  }
  function xt(e, t) {
    if (t.length === 0 || typeof e != "string")
      return "";
    let r = Yc(e, t);
    return r ? ` Did you mean "${r}"?` : "";
  }
  function Yc(e, t) {
    if (t.length === 0)
      return null;
    let r = t.map((i) => ({ value: i, distance: (0, ua.default)(e, i) }));
    r.sort((i, o) => i.distance < o.distance ? -1 : 1);
    let n = r[0];
    return n.distance < 3 ? n.value : null;
  }
  function Zc(e, t) {
    return la(t.models, e) ?? la(t.types, e);
  }
  function la(e, t) {
    let r = Object.keys(e).find((n) => rt(n) === t);
    if (r)
      return e[r];
  }
  function Xc(e, t) {
    let r = ct(e);
    for (let o of t)
      switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
    let { message: n, args: i } = Nr(r, "colorless");
    return `Error validating "omit" option:

${i}

${n}`;
  }
  d();
  u();
  c();
  p();
  m();
  function pa(e) {
    return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
      let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
        o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
      }, l = (f) => {
        o || (o = true, r(f));
      };
      for (let f = 0;f < e.length; f++)
        e[f].then((g) => {
          n[f] = g, a();
        }, (g) => {
          if (!Zr(g)) {
            l(g);
            return;
          }
          g.batchRequestIdx === f ? l(g) : (i || (i = g), a());
        });
    });
  }
  var _e = ee("prisma:client");
  typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
  var ep = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
  var tp = Symbol.for("prisma.client.transaction.id");
  var rp = { id: 0, nextId() {
    return ++this.id;
  } };
  function fa(e) {

    class t {
      constructor(n) {
        this._originalClient = this;
        this._middlewares = new Yr;
        this._createPrismaPromise = ii();
        this.$metrics = new mt(this);
        this.$extends = gs;
        e = n?.__internal?.configOverride?.(e) ?? e, Ss(e), n && ca(n, e);
        let i = new gr().on("error", () => {});
        this._extensions = pt.empty(), this._previewFeatures = zr(e), this._clientVersion = e.clientVersion ?? ia, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = zs();
        let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Rt.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Rt.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
        if (n?.adapter) {
          s = hn(n.adapter);
          let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
          if (s.provider !== l)
            throw new Q(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
          if (n.datasources || n.datasourceUrl !== undefined)
            throw new Q("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
        }
        let a = e.injectableEdgeEnv?.();
        try {
          let l = n ?? {}, f = l.__internal ?? {}, g = f.debug === true;
          g && ee.enable("prisma:client");
          let h = Rt.resolve(e.dirname, e.relativePath);
          Gi.existsSync(h) || (h = e.dirname), _e("dirname", e.dirname), _e("relativePath", e.relativePath), _e("cwd", h);
          let v = f.engine || {};
          if (l.errorFormat ? this._errorFormat = l.errorFormat : y.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: h, dirname: e.dirname, enableDebugLogs: g, allowTriggerPanic: v.allowTriggerPanic, datamodelPath: Rt.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: v.binaryPath ?? undefined, engineEndpoint: v.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Zs(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((S) => typeof S == "string" ? S === "query" : S.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Is(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2000, timeout: l.transactionOptions?.timeout ?? 5000, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: gt, getBatchRequestPayload: jr, prismaGraphQLToJSError: Gr, PrismaClientUnknownRequestError: ie, PrismaClientInitializationError: Q, PrismaClientKnownRequestError: ne, debug: ee("prisma:client:accelerateEngine"), engineVersion: da.version, clientVersion: e.clientVersion } }, _e("clientVersion", e.clientVersion), this._engine = Bs(e, this._engineConfig), this._requestHandler = new tn(this, i), l.log)
            for (let S of l.log) {
              let R = typeof S == "string" ? S : S.emit === "stdout" ? S.level : null;
              R && this.$on(R, (A) => {
                St.log(`${St.tags[R] ?? ""}`, A.message || A.query);
              });
            }
        } catch (l) {
          throw l.clientVersion = this._clientVersion, l;
        }
        return this._appliedParent = jt(this);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClient";
      }
      $use(n) {
        this._middlewares.use(n);
      }
      $on(n, i) {
        n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
      }
      $connect() {
        try {
          return this._engine.start();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        }
      }
      async $disconnect() {
        try {
          await this._engine.stop();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        } finally {
          ji();
        }
      }
      $executeRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: ni({ clientMethod: i, activeProvider: a }), callsite: Ne(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $executeRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined) {
            let [s, a] = ma(n, i);
            return ri(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
          }
          throw new Z("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
        });
      }
      $executeRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => (ri(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
      }
      $runCommandRaw(n) {
        if (e.activeProvider !== "mongodb")
          throw new Z(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
        return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Us, callsite: Ne(this._errorFormat), transaction: i }));
      }
      async $queryRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: ni({ clientMethod: i, activeProvider: a }), callsite: Ne(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $queryRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined)
            return this.$queryRawInternal(o, "$queryRaw", ...ma(n, i));
          throw new Z("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
        });
      }
      $queryRawTyped(n) {
        return this._createPrismaPromise((i) => {
          if (!this._hasPreviewFlag("typedSql"))
            throw new Z("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
          return this.$queryRawInternal(i, "$queryRawTyped", n);
        });
      }
      $queryRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
      }
      _transactionWithArray({ promises: n, options: i }) {
        let o = rp.nextId(), s = Ys(n.length), a = n.map((l, f) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
          let g = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, h = { kind: "batch", id: o, index: f, isolationLevel: g, lock: s };
          return l.requestTransaction?.(h) ?? l;
        });
        return pa(a);
      }
      async _transactionWithCallback({ callback: n, options: i }) {
        let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
        try {
          let f = { kind: "itx", ...a };
          l = await n(this._createItxClient(f)), await this._engine.transaction("commit", o, a);
        } catch (f) {
          throw await this._engine.transaction("rollback", o, a).catch(() => {}), f;
        }
        return l;
      }
      _createItxClient(n) {
        return pe(jt(pe(fs(this), [te("_appliedParent", () => this._appliedParent._createItxClient(n)), te("_createPrismaPromise", () => ii(n)), te(tp, () => n.id)])), [dt(Js)]);
      }
      $transaction(n, i) {
        let o;
        typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = () => {
          throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
        } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
        let s = { name: "transaction", attributes: { method: "$transaction" } };
        return this._tracingHelper.runInChildSpan(s, o);
      }
      _request(n) {
        n.otelParentCtx = this._tracingHelper.getActiveContext();
        let i = n.middlewareArgsMapper ?? ep, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (f) => {
          let g = this._middlewares.get(++a);
          if (g)
            return this._tracingHelper.runInChildSpan(s.middleware, (D) => g(f, (M) => (D?.end(), l(M))));
          let { runInTransaction: h, args: v, ...S } = f, R = { ...n, ...S };
          v && (R.args = i.middlewareArgsToRequestArgs(v)), n.transaction !== undefined && h === false && delete R.transaction;
          let A = await Ps(this, R);
          return R.model ? ws({ result: A, modelName: R.model, args: R.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : A;
        };
        return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
      }
      async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: f, transaction: g, unpacker: h, otelParentCtx: v, customDataProxyFetch: S }) {
        try {
          n = f ? f(n) : n;
          let R = { name: "serialize" }, A = this._tracingHelper.runInChildSpan(R, () => Ur({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
          return ee.enabled("prisma:client") && (_e("Prisma Client call:"), _e(`prisma.${i}(${is(n)})`), _e("Generated request:"), _e(JSON.stringify(A, null, 2) + `
`)), g?.kind === "batch" && await g.lock, this._requestHandler.request({ protocolQuery: A, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: g, unpacker: h, otelParentCtx: v, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: S });
        } catch (R) {
          throw R.clientVersion = this._clientVersion, R;
        }
      }
      _hasPreviewFlag(n) {
        return !!this._engineConfig.previewFeatures?.includes(n);
      }
      $applyPendingMigrations() {
        return this._engine.applyPendingMigrations();
      }
    }
    return t;
  }
  function ma(e, t) {
    return np(e) ? [new se(e, t), Ws] : [e, Hs];
  }
  function np(e) {
    return Array.isArray(e) && Array.isArray(e.raw);
  }
  d();
  u();
  c();
  p();
  m();
  var ip = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
  function ga(e) {
    return new Proxy(e, { get(t, r) {
      if (r in t)
        return t[r];
      if (!ip.has(r))
        throw new TypeError(`Invalid enum value: ${String(r)}`);
    } });
  }
  d();
  u();
  c();
  p();
  m();
});

// node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  var {
    PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
    PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
    PrismaClientRustPanicError: PrismaClientRustPanicError2,
    PrismaClientInitializationError: PrismaClientInitializationError2,
    PrismaClientValidationError: PrismaClientValidationError2,
    getPrismaClient: getPrismaClient2,
    sqltag: sqltag2,
    empty: empty2,
    join: join2,
    raw: raw2,
    skip: skip2,
    Decimal: Decimal2,
    Debug: Debug2,
    objectEnumValues: objectEnumValues2,
    makeStrictEnum: makeStrictEnum2,
    Extensions: Extensions2,
    warnOnce: warnOnce2,
    defineDmmfProperty: defineDmmfProperty2,
    Public: Public2,
    getRuntime: getRuntime2,
    createParam: createParam2
  } = require_edge();
  var Prisma = {};
  exports.Prisma = Prisma;
  exports.$Enums = {};
  Prisma.prismaVersion = {
    client: "6.4.1",
    engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
  };
  Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
  Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
  Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
  Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
  Prisma.PrismaClientValidationError = PrismaClientValidationError2;
  Prisma.Decimal = Decimal2;
  Prisma.sql = sqltag2;
  Prisma.empty = empty2;
  Prisma.join = join2;
  Prisma.raw = raw2;
  Prisma.validator = Public2.validator;
  Prisma.getExtensionContext = Extensions2.getExtensionContext;
  Prisma.defineExtension = Extensions2.defineExtension;
  Prisma.DbNull = objectEnumValues2.instances.DbNull;
  Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
  Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
  Prisma.NullTypes = {
    DbNull: objectEnumValues2.classes.DbNull,
    JsonNull: objectEnumValues2.classes.JsonNull,
    AnyNull: objectEnumValues2.classes.AnyNull
  };
  exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
    ReadUncommitted: "ReadUncommitted",
    ReadCommitted: "ReadCommitted",
    RepeatableRead: "RepeatableRead",
    Serializable: "Serializable"
  });
  exports.Prisma.ProvinceScalarFieldEnum = {
    id: "id",
    code: "code",
    slug: "slug",
    name: "name",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  };
  exports.Prisma.CityScalarFieldEnum = {
    id: "id",
    code: "code",
    slug: "slug",
    name: "name",
    provinceId: "provinceId",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  };
  exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc"
  };
  exports.Prisma.QueryMode = {
    default: "default",
    insensitive: "insensitive"
  };
  exports.Prisma.ModelName = {
    Province: "Province",
    City: "City"
  };
  var config = {
    generator: {
      name: "client",
      provider: {
        fromEnvVar: null,
        value: "prisma-client-js"
      },
      output: {
        value: "/Users/indahmutiahmz/Documents/Projects/ina-zone/node_modules/@prisma/client",
        fromEnvVar: null
      },
      config: {
        engineType: "library"
      },
      binaryTargets: [
        {
          fromEnvVar: null,
          value: "darwin-arm64",
          native: true
        }
      ],
      previewFeatures: [],
      sourceFilePath: "/Users/indahmutiahmz/Documents/Projects/ina-zone/prisma/schema.prisma"
    },
    relativeEnvPaths: {
      rootEnvPath: null,
      schemaEnvPath: "../../../.env"
    },
    relativePath: "../../../prisma",
    clientVersion: "6.4.1",
    engineVersion: "a9055b89e58b4b5bfb59600785423b1db3d0e75d",
    datasourceNames: [
      "db"
    ],
    activeProvider: "postgresql",
    inlineDatasources: {
      db: {
        url: {
          fromEnvVar: "DATABASE_URL",
          value: null
        }
      }
    },
    inlineSchema: `generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Province {
  id Int @id @default(autoincrement())

  code   Int    @unique
  slug   String @unique @db.VarChar(255)
  name   String @unique @db.VarChar(255)
  cities City[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model City {
  id Int @id @default(autoincrement())

  code       String   @unique @db.VarChar(255)
  slug       String   @unique @db.VarChar(255)
  name       String   @unique @db.VarChar(255)
  provinceId Int
  province   Province @relation(fields: [provinceId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
`,
    inlineSchemaHash: "794b4cba884bcdc5553f0579bc26d93acb88e53b575cf8c4849a618162fc878d",
    copyEngine: true
  };
  config.dirname = "/";
  config.runtimeDataModel = JSON.parse('{"models":{"Province":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"slug","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"cities","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"City","nativeType":null,"relationName":"CityToProvince","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"City":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"code","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"slug","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"provinceId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"province","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Province","nativeType":null,"relationName":"CityToProvince","relationFromFields":["provinceId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
  defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
  config.engineWasm = undefined;
  config.compilerWasm = undefined;
  config.injectableEdgeEnv = () => ({
    parsed: {
      DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || undefined
    }
  });
  if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || undefined) {
    Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || undefined);
  }
  var PrismaClient = getPrismaClient2(config);
  exports.PrismaClient = PrismaClient;
  Object.assign(exports, Prisma);
});

// node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS((exports, module) => {
  module.exports = {
    ...require_edge2()
  };
});

// src/routes/ina-city.ts
var import_edge = __toESM(require_edge3(), 1);

// node_modules/@asteasolutions/zod-to-openapi/dist/index.mjs
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s);i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function isZodType(schema, typeName) {
  var _a;
  return ((_a = schema === null || schema === undefined ? undefined : schema._def) === null || _a === undefined ? undefined : _a.typeName) === typeName;
}
function isAnyZodType(schema) {
  return "_def" in schema;
}
function preserveMetadataFromModifier(zod, modifier) {
  const zodModifier = zod.ZodType.prototype[modifier];
  zod.ZodType.prototype[modifier] = function(...args) {
    const result = zodModifier.apply(this, args);
    result._def.openapi = this._def.openapi;
    return result;
  };
}
function extendZodWithOpenApi(zod) {
  if (typeof zod.ZodType.prototype.openapi !== "undefined") {
    return;
  }
  zod.ZodType.prototype.openapi = function(refOrOpenapi, metadata) {
    var _a, _b, _c, _d, _e, _f;
    const openapi = typeof refOrOpenapi === "string" ? metadata : refOrOpenapi;
    const _g = openapi !== null && openapi !== undefined ? openapi : {}, { param } = _g, restOfOpenApi = __rest(_g, ["param"]);
    const _internal = Object.assign(Object.assign({}, (_a = this._def.openapi) === null || _a === undefined ? undefined : _a._internal), typeof refOrOpenapi === "string" ? { refId: refOrOpenapi } : undefined);
    const resultMetadata = Object.assign(Object.assign(Object.assign({}, (_b = this._def.openapi) === null || _b === undefined ? undefined : _b.metadata), restOfOpenApi), ((_d = (_c = this._def.openapi) === null || _c === undefined ? undefined : _c.metadata) === null || _d === undefined ? undefined : _d.param) || param ? {
      param: Object.assign(Object.assign({}, (_f = (_e = this._def.openapi) === null || _e === undefined ? undefined : _e.metadata) === null || _f === undefined ? undefined : _f.param), param)
    } : undefined);
    const result = new this.constructor(Object.assign(Object.assign({}, this._def), { openapi: Object.assign(Object.assign({}, Object.keys(_internal).length > 0 ? { _internal } : undefined), Object.keys(resultMetadata).length > 0 ? { metadata: resultMetadata } : undefined) }));
    if (isZodType(this, "ZodObject")) {
      const originalExtend = this.extend;
      result.extend = function(...args) {
        var _a2, _b2, _c2, _d2, _e2, _f2;
        const extendedResult = originalExtend.apply(this, args);
        extendedResult._def.openapi = {
          _internal: {
            extendedFrom: ((_b2 = (_a2 = this._def.openapi) === null || _a2 === undefined ? undefined : _a2._internal) === null || _b2 === undefined ? undefined : _b2.refId) ? { refId: (_d2 = (_c2 = this._def.openapi) === null || _c2 === undefined ? undefined : _c2._internal) === null || _d2 === undefined ? undefined : _d2.refId, schema: this } : (_e2 = this._def.openapi) === null || _e2 === undefined ? undefined : _e2._internal.extendedFrom
          },
          metadata: (_f2 = extendedResult._def.openapi) === null || _f2 === undefined ? undefined : _f2.metadata
        };
        return extendedResult;
      };
    }
    return result;
  };
  preserveMetadataFromModifier(zod, "optional");
  preserveMetadataFromModifier(zod, "nullable");
  preserveMetadataFromModifier(zod, "default");
  preserveMetadataFromModifier(zod, "transform");
  preserveMetadataFromModifier(zod, "refine");
  const zodDeepPartial = zod.ZodObject.prototype.deepPartial;
  zod.ZodObject.prototype.deepPartial = function() {
    const initialShape = this._def.shape();
    const result = zodDeepPartial.apply(this);
    const resultShape = result._def.shape();
    Object.entries(resultShape).forEach(([key, value]) => {
      var _a, _b;
      value._def.openapi = (_b = (_a = initialShape[key]) === null || _a === undefined ? undefined : _a._def) === null || _b === undefined ? undefined : _b.openapi;
    });
    result._def.openapi = undefined;
    return result;
  };
  const zodPick = zod.ZodObject.prototype.pick;
  zod.ZodObject.prototype.pick = function(...args) {
    const result = zodPick.apply(this, args);
    result._def.openapi = undefined;
    return result;
  };
  const zodOmit = zod.ZodObject.prototype.omit;
  zod.ZodObject.prototype.omit = function(...args) {
    const result = zodOmit.apply(this, args);
    result._def.openapi = undefined;
    return result;
  };
}
function isEqual(x, y) {
  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }
  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }
  if (Array.isArray(x)) {
    if (!Array.isArray(y)) {
      return false;
    }
    if (x.length !== y.length) {
      return false;
    }
  }
  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false;
  }
  const keysX = Object.keys(x);
  return Object.keys(y).every((keyY) => keysX.indexOf(keyY) !== -1) && keysX.every((key) => isEqual(x[key], y[key]));
}

class ObjectSet {
  constructor() {
    this.buckets = new Map;
  }
  put(value) {
    const hashCode = this.hashCodeOf(value);
    const itemsByCode = this.buckets.get(hashCode);
    if (!itemsByCode) {
      this.buckets.set(hashCode, [value]);
      return;
    }
    const alreadyHasItem = itemsByCode.some((_) => isEqual(_, value));
    if (!alreadyHasItem) {
      itemsByCode.push(value);
    }
  }
  contains(value) {
    const hashCode = this.hashCodeOf(value);
    const itemsByCode = this.buckets.get(hashCode);
    if (!itemsByCode) {
      return false;
    }
    return itemsByCode.some((_) => isEqual(_, value));
  }
  values() {
    return [...this.buckets.values()].flat();
  }
  stats() {
    let totalBuckets = 0;
    let totalValues = 0;
    let collisions = 0;
    for (const bucket of this.buckets.values()) {
      totalBuckets += 1;
      totalValues += bucket.length;
      if (bucket.length > 1) {
        collisions += 1;
      }
    }
    const hashEffectiveness = totalBuckets / totalValues;
    return { totalBuckets, collisions, totalValues, hashEffectiveness };
  }
  hashCodeOf(object) {
    let hashCode = 0;
    if (Array.isArray(object)) {
      for (let i = 0;i < object.length; i++) {
        hashCode ^= this.hashCodeOf(object[i]) * i;
      }
      return hashCode;
    }
    if (typeof object === "string") {
      for (let i = 0;i < object.length; i++) {
        hashCode ^= object.charCodeAt(i) * i;
      }
      return hashCode;
    }
    if (typeof object === "number") {
      return object;
    }
    if (typeof object === "object") {
      for (const [key, value] of Object.entries(object)) {
        hashCode ^= this.hashCodeOf(key) + this.hashCodeOf(value !== null && value !== undefined ? value : "");
      }
    }
    return hashCode;
  }
}
function isNil(value) {
  return value === null || value === undefined;
}
function mapValues(object, mapper) {
  const result = {};
  Object.entries(object).forEach(([key, value]) => {
    result[key] = mapper(value);
  });
  return result;
}
function omit(object, keys) {
  const result = {};
  Object.entries(object).forEach(([key, value]) => {
    if (!keys.some((keyToOmit) => keyToOmit === key)) {
      result[key] = value;
    }
  });
  return result;
}
function omitBy(object, predicate) {
  const result = {};
  Object.entries(object).forEach(([key, value]) => {
    if (!predicate(value, key)) {
      result[key] = value;
    }
  });
  return result;
}
function compact(arr) {
  return arr.filter((elem) => !isNil(elem));
}
var objectEquals = isEqual;
function uniq(values) {
  const set = new ObjectSet;
  values.forEach((value) => set.put(value));
  return [...set.values()];
}
function isString(val) {
  return typeof val === "string";
}
class OpenAPIRegistry {
  constructor(parents) {
    this.parents = parents;
    this._definitions = [];
  }
  get definitions() {
    var _a, _b;
    const parentDefinitions = (_b = (_a = this.parents) === null || _a === undefined ? undefined : _a.flatMap((par) => par.definitions)) !== null && _b !== undefined ? _b : [];
    return [...parentDefinitions, ...this._definitions];
  }
  register(refId, zodSchema) {
    const schemaWithRefId = this.schemaWithRefId(refId, zodSchema);
    this._definitions.push({ type: "schema", schema: schemaWithRefId });
    return schemaWithRefId;
  }
  registerParameter(refId, zodSchema) {
    var _a, _b, _c;
    const schemaWithRefId = this.schemaWithRefId(refId, zodSchema);
    const currentMetadata = (_a = schemaWithRefId._def.openapi) === null || _a === undefined ? undefined : _a.metadata;
    const schemaWithMetadata = schemaWithRefId.openapi(Object.assign(Object.assign({}, currentMetadata), { param: Object.assign(Object.assign({}, currentMetadata === null || currentMetadata === undefined ? undefined : currentMetadata.param), { name: (_c = (_b = currentMetadata === null || currentMetadata === undefined ? undefined : currentMetadata.param) === null || _b === undefined ? undefined : _b.name) !== null && _c !== undefined ? _c : refId }) }));
    this._definitions.push({
      type: "parameter",
      schema: schemaWithMetadata
    });
    return schemaWithMetadata;
  }
  registerPath(route) {
    this._definitions.push({
      type: "route",
      route
    });
  }
  registerWebhook(webhook) {
    this._definitions.push({
      type: "webhook",
      webhook
    });
  }
  registerComponent(type, name, component) {
    this._definitions.push({
      type: "component",
      componentType: type,
      name,
      component
    });
    return {
      name,
      ref: { $ref: `#/components/${type}/${name}` }
    };
  }
  schemaWithRefId(refId, zodSchema) {
    return zodSchema.openapi(refId);
  }
}

class ZodToOpenAPIError {
  constructor(message) {
    this.message = message;
  }
}

class ConflictError extends ZodToOpenAPIError {
  constructor(message, data) {
    super(message);
    this.data = data;
  }
}

class MissingParameterDataError extends ZodToOpenAPIError {
  constructor(data) {
    super(`Missing parameter data, please specify \`${data.missingField}\` and other OpenAPI parameter props using the \`param\` field of \`ZodSchema.openapi\``);
    this.data = data;
  }
}
function enhanceMissingParametersError(action, paramsToAdd) {
  try {
    return action();
  } catch (error) {
    if (error instanceof MissingParameterDataError) {
      throw new MissingParameterDataError(Object.assign(Object.assign({}, error.data), paramsToAdd));
    }
    throw error;
  }
}

class UnknownZodTypeError extends ZodToOpenAPIError {
  constructor(data) {
    super(`Unknown zod object type, please specify \`type\` and other OpenAPI props using \`ZodSchema.openapi\`.`);
    this.data = data;
  }
}

class Metadata {
  static getMetadata(zodSchema) {
    var _a;
    const innerSchema = this.unwrapChained(zodSchema);
    const metadata = zodSchema._def.openapi ? zodSchema._def.openapi : innerSchema._def.openapi;
    const zodDescription = (_a = zodSchema.description) !== null && _a !== undefined ? _a : innerSchema.description;
    return {
      _internal: metadata === null || metadata === undefined ? undefined : metadata._internal,
      metadata: Object.assign({ description: zodDescription }, metadata === null || metadata === undefined ? undefined : metadata.metadata)
    };
  }
  static getInternalMetadata(zodSchema) {
    const innerSchema = this.unwrapChained(zodSchema);
    const openapi = zodSchema._def.openapi ? zodSchema._def.openapi : innerSchema._def.openapi;
    return openapi === null || openapi === undefined ? undefined : openapi._internal;
  }
  static getParamMetadata(zodSchema) {
    var _a, _b;
    const innerSchema = this.unwrapChained(zodSchema);
    const metadata = zodSchema._def.openapi ? zodSchema._def.openapi : innerSchema._def.openapi;
    const zodDescription = (_a = zodSchema.description) !== null && _a !== undefined ? _a : innerSchema.description;
    return {
      _internal: metadata === null || metadata === undefined ? undefined : metadata._internal,
      metadata: Object.assign(Object.assign({}, metadata === null || metadata === undefined ? undefined : metadata.metadata), {
        param: Object.assign({ description: zodDescription }, (_b = metadata === null || metadata === undefined ? undefined : metadata.metadata) === null || _b === undefined ? undefined : _b.param)
      })
    };
  }
  static buildSchemaMetadata(metadata) {
    return omitBy(omit(metadata, ["param"]), isNil);
  }
  static buildParameterMetadata(metadata) {
    return omitBy(metadata, isNil);
  }
  static applySchemaMetadata(initialData, metadata) {
    return omitBy(Object.assign(Object.assign({}, initialData), this.buildSchemaMetadata(metadata)), isNil);
  }
  static getRefId(zodSchema) {
    var _a;
    return (_a = this.getInternalMetadata(zodSchema)) === null || _a === undefined ? undefined : _a.refId;
  }
  static unwrapChained(schema) {
    return this.unwrapUntil(schema);
  }
  static getDefaultValue(zodSchema) {
    const unwrapped = this.unwrapUntil(zodSchema, "ZodDefault");
    return unwrapped === null || unwrapped === undefined ? undefined : unwrapped._def.defaultValue();
  }
  static unwrapUntil(schema, typeName) {
    if (typeName && isZodType(schema, typeName)) {
      return schema;
    }
    if (isZodType(schema, "ZodOptional") || isZodType(schema, "ZodNullable") || isZodType(schema, "ZodBranded")) {
      return this.unwrapUntil(schema.unwrap(), typeName);
    }
    if (isZodType(schema, "ZodDefault") || isZodType(schema, "ZodReadonly")) {
      return this.unwrapUntil(schema._def.innerType, typeName);
    }
    if (isZodType(schema, "ZodEffects")) {
      return this.unwrapUntil(schema._def.schema, typeName);
    }
    if (isZodType(schema, "ZodPipeline")) {
      return this.unwrapUntil(schema._def.in, typeName);
    }
    return typeName ? undefined : schema;
  }
  static isOptionalSchema(zodSchema) {
    return zodSchema.isOptional();
  }
}

class ArrayTransformer {
  transform(zodSchema, mapNullableType, mapItems) {
    var _a, _b;
    const itemType = zodSchema._def.type;
    return Object.assign(Object.assign({}, mapNullableType("array")), { items: mapItems(itemType), minItems: (_a = zodSchema._def.minLength) === null || _a === undefined ? undefined : _a.value, maxItems: (_b = zodSchema._def.maxLength) === null || _b === undefined ? undefined : _b.value });
  }
}

class BigIntTransformer {
  transform(mapNullableType) {
    return Object.assign(Object.assign({}, mapNullableType("string")), { pattern: `^d+$` });
  }
}

class DiscriminatedUnionTransformer {
  transform(zodSchema, isNullable, mapNullableOfArray, mapItem, generateSchemaRef) {
    const options = [...zodSchema.options.values()];
    const optionSchema = options.map(mapItem);
    if (isNullable) {
      return {
        oneOf: mapNullableOfArray(optionSchema, isNullable)
      };
    }
    return {
      oneOf: optionSchema,
      discriminator: this.mapDiscriminator(options, zodSchema.discriminator, generateSchemaRef)
    };
  }
  mapDiscriminator(zodObjects, discriminator, generateSchemaRef) {
    if (zodObjects.some((obj) => Metadata.getRefId(obj) === undefined)) {
      return;
    }
    const mapping = {};
    zodObjects.forEach((obj) => {
      var _a;
      const refId = Metadata.getRefId(obj);
      const value = (_a = obj.shape) === null || _a === undefined ? undefined : _a[discriminator];
      if (isZodType(value, "ZodEnum") || isZodType(value, "ZodNativeEnum")) {
        const keys = Object.values(value.enum).filter(isString);
        keys.forEach((enumValue) => {
          mapping[enumValue] = generateSchemaRef(refId);
        });
        return;
      }
      const literalValue = value === null || value === undefined ? undefined : value._def.value;
      if (typeof literalValue !== "string") {
        throw new Error(`Discriminator ${discriminator} could not be found in one of the values of a discriminated union`);
      }
      mapping[literalValue] = generateSchemaRef(refId);
    });
    return {
      propertyName: discriminator,
      mapping
    };
  }
}

class EnumTransformer {
  transform(zodSchema, mapNullableType) {
    return Object.assign(Object.assign({}, mapNullableType("string")), { enum: zodSchema._def.values });
  }
}

class IntersectionTransformer {
  transform(zodSchema, isNullable, mapNullableOfArray, mapItem) {
    const subtypes = this.flattenIntersectionTypes(zodSchema);
    const allOfSchema = {
      allOf: subtypes.map(mapItem)
    };
    if (isNullable) {
      return {
        anyOf: mapNullableOfArray([allOfSchema], isNullable)
      };
    }
    return allOfSchema;
  }
  flattenIntersectionTypes(schema) {
    if (!isZodType(schema, "ZodIntersection")) {
      return [schema];
    }
    const leftSubTypes = this.flattenIntersectionTypes(schema._def.left);
    const rightSubTypes = this.flattenIntersectionTypes(schema._def.right);
    return [...leftSubTypes, ...rightSubTypes];
  }
}

class LiteralTransformer {
  transform(zodSchema, mapNullableType) {
    return Object.assign(Object.assign({}, mapNullableType(typeof zodSchema._def.value)), { enum: [zodSchema._def.value] });
  }
}
function enumInfo(enumObject) {
  const keysExceptReverseMappings = Object.keys(enumObject).filter((key) => typeof enumObject[enumObject[key]] !== "number");
  const values = keysExceptReverseMappings.map((key) => enumObject[key]);
  const numericCount = values.filter((_) => typeof _ === "number").length;
  const type = numericCount === 0 ? "string" : numericCount === values.length ? "numeric" : "mixed";
  return { values, type };
}

class NativeEnumTransformer {
  transform(zodSchema, mapNullableType) {
    const { type, values } = enumInfo(zodSchema._def.values);
    if (type === "mixed") {
      throw new ZodToOpenAPIError("Enum has mixed string and number values, please specify the OpenAPI type manually");
    }
    return Object.assign(Object.assign({}, mapNullableType(type === "numeric" ? "integer" : "string")), { enum: values });
  }
}

class NumberTransformer {
  transform(zodSchema, mapNullableType, getNumberChecks) {
    return Object.assign(Object.assign({}, mapNullableType(zodSchema.isInt ? "integer" : "number")), getNumberChecks(zodSchema._def.checks));
  }
}

class ObjectTransformer {
  transform(zodSchema, defaultValue, mapNullableType, mapItem) {
    var _a;
    const extendedFrom = (_a = Metadata.getInternalMetadata(zodSchema)) === null || _a === undefined ? undefined : _a.extendedFrom;
    const required = this.requiredKeysOf(zodSchema);
    const properties = mapValues(zodSchema._def.shape(), mapItem);
    if (!extendedFrom) {
      return Object.assign(Object.assign(Object.assign(Object.assign({}, mapNullableType("object")), { properties, default: defaultValue }), required.length > 0 ? { required } : {}), this.generateAdditionalProperties(zodSchema, mapItem));
    }
    const parent = extendedFrom.schema;
    mapItem(parent);
    const keysRequiredByParent = this.requiredKeysOf(parent);
    const propsOfParent = mapValues(parent === null || parent === undefined ? undefined : parent._def.shape(), mapItem);
    const propertiesToAdd = Object.fromEntries(Object.entries(properties).filter(([key, type]) => {
      return !objectEquals(propsOfParent[key], type);
    }));
    const additionallyRequired = required.filter((prop) => !keysRequiredByParent.includes(prop));
    const objectData = Object.assign(Object.assign(Object.assign(Object.assign({}, mapNullableType("object")), { default: defaultValue, properties: propertiesToAdd }), additionallyRequired.length > 0 ? { required: additionallyRequired } : {}), this.generateAdditionalProperties(zodSchema, mapItem));
    return {
      allOf: [
        { $ref: `#/components/schemas/${extendedFrom.refId}` },
        objectData
      ]
    };
  }
  generateAdditionalProperties(zodSchema, mapItem) {
    const unknownKeysOption = zodSchema._def.unknownKeys;
    const catchallSchema = zodSchema._def.catchall;
    if (isZodType(catchallSchema, "ZodNever")) {
      if (unknownKeysOption === "strict") {
        return { additionalProperties: false };
      }
      return {};
    }
    return { additionalProperties: mapItem(catchallSchema) };
  }
  requiredKeysOf(objectSchema) {
    return Object.entries(objectSchema._def.shape()).filter(([_key, type]) => !Metadata.isOptionalSchema(type)).map(([key, _type]) => key);
  }
}

class RecordTransformer {
  transform(zodSchema, mapNullableType, mapItem) {
    const propertiesType = zodSchema._def.valueType;
    const keyType = zodSchema._def.keyType;
    const propertiesSchema = mapItem(propertiesType);
    if (isZodType(keyType, "ZodEnum") || isZodType(keyType, "ZodNativeEnum")) {
      const keys = Object.values(keyType.enum).filter(isString);
      const properties = keys.reduce((acc, curr) => Object.assign(Object.assign({}, acc), { [curr]: propertiesSchema }), {});
      return Object.assign(Object.assign({}, mapNullableType("object")), { properties });
    }
    return Object.assign(Object.assign({}, mapNullableType("object")), { additionalProperties: propertiesSchema });
  }
}

class StringTransformer {
  transform(zodSchema, mapNullableType) {
    var _a, _b, _c;
    const regexCheck = this.getZodStringCheck(zodSchema, "regex");
    const length = (_a = this.getZodStringCheck(zodSchema, "length")) === null || _a === undefined ? undefined : _a.value;
    const maxLength = Number.isFinite(zodSchema.minLength) ? (_b = zodSchema.minLength) !== null && _b !== undefined ? _b : undefined : undefined;
    const minLength = Number.isFinite(zodSchema.maxLength) ? (_c = zodSchema.maxLength) !== null && _c !== undefined ? _c : undefined : undefined;
    return Object.assign(Object.assign({}, mapNullableType("string")), {
      minLength: length !== null && length !== undefined ? length : maxLength,
      maxLength: length !== null && length !== undefined ? length : minLength,
      format: this.mapStringFormat(zodSchema),
      pattern: regexCheck === null || regexCheck === undefined ? undefined : regexCheck.regex.source
    });
  }
  mapStringFormat(zodString) {
    if (zodString.isUUID)
      return "uuid";
    if (zodString.isEmail)
      return "email";
    if (zodString.isURL)
      return "uri";
    if (zodString.isDate)
      return "date";
    if (zodString.isDatetime)
      return "date-time";
    if (zodString.isCUID)
      return "cuid";
    if (zodString.isCUID2)
      return "cuid2";
    if (zodString.isULID)
      return "ulid";
    if (zodString.isIP)
      return "ip";
    if (zodString.isEmoji)
      return "emoji";
    return;
  }
  getZodStringCheck(zodString, kind) {
    return zodString._def.checks.find((check) => {
      return check.kind === kind;
    });
  }
}

class TupleTransformer {
  constructor(versionSpecifics) {
    this.versionSpecifics = versionSpecifics;
  }
  transform(zodSchema, mapNullableType, mapItem) {
    const { items } = zodSchema._def;
    const schemas = items.map(mapItem);
    return Object.assign(Object.assign({}, mapNullableType("array")), this.versionSpecifics.mapTupleItems(schemas));
  }
}

class UnionTransformer {
  transform(zodSchema, mapNullableOfArray, mapItem) {
    const options = this.flattenUnionTypes(zodSchema);
    const schemas = options.map((schema) => {
      const optionToGenerate = this.unwrapNullable(schema);
      return mapItem(optionToGenerate);
    });
    return {
      anyOf: mapNullableOfArray(schemas)
    };
  }
  flattenUnionTypes(schema) {
    if (!isZodType(schema, "ZodUnion")) {
      return [schema];
    }
    const options = schema._def.options;
    return options.flatMap((option) => this.flattenUnionTypes(option));
  }
  unwrapNullable(schema) {
    if (isZodType(schema, "ZodNullable")) {
      return this.unwrapNullable(schema.unwrap());
    }
    return schema;
  }
}

class OpenApiTransformer {
  constructor(versionSpecifics) {
    this.versionSpecifics = versionSpecifics;
    this.objectTransformer = new ObjectTransformer;
    this.stringTransformer = new StringTransformer;
    this.numberTransformer = new NumberTransformer;
    this.bigIntTransformer = new BigIntTransformer;
    this.literalTransformer = new LiteralTransformer;
    this.enumTransformer = new EnumTransformer;
    this.nativeEnumTransformer = new NativeEnumTransformer;
    this.arrayTransformer = new ArrayTransformer;
    this.unionTransformer = new UnionTransformer;
    this.discriminatedUnionTransformer = new DiscriminatedUnionTransformer;
    this.intersectionTransformer = new IntersectionTransformer;
    this.recordTransformer = new RecordTransformer;
    this.tupleTransformer = new TupleTransformer(versionSpecifics);
  }
  transform(zodSchema, isNullable, mapItem, generateSchemaRef, defaultValue) {
    if (isZodType(zodSchema, "ZodNull")) {
      return this.versionSpecifics.nullType;
    }
    if (isZodType(zodSchema, "ZodUnknown") || isZodType(zodSchema, "ZodAny")) {
      return this.versionSpecifics.mapNullableType(undefined, isNullable);
    }
    if (isZodType(zodSchema, "ZodObject")) {
      return this.objectTransformer.transform(zodSchema, defaultValue, (_) => this.versionSpecifics.mapNullableType(_, isNullable), mapItem);
    }
    const schema = this.transformSchemaWithoutDefault(zodSchema, isNullable, mapItem, generateSchemaRef);
    return Object.assign(Object.assign({}, schema), { default: defaultValue });
  }
  transformSchemaWithoutDefault(zodSchema, isNullable, mapItem, generateSchemaRef) {
    if (isZodType(zodSchema, "ZodUnknown") || isZodType(zodSchema, "ZodAny")) {
      return this.versionSpecifics.mapNullableType(undefined, isNullable);
    }
    if (isZodType(zodSchema, "ZodString")) {
      return this.stringTransformer.transform(zodSchema, (schema) => this.versionSpecifics.mapNullableType(schema, isNullable));
    }
    if (isZodType(zodSchema, "ZodNumber")) {
      return this.numberTransformer.transform(zodSchema, (schema) => this.versionSpecifics.mapNullableType(schema, isNullable), (_) => this.versionSpecifics.getNumberChecks(_));
    }
    if (isZodType(zodSchema, "ZodBigInt")) {
      return this.bigIntTransformer.transform((schema) => this.versionSpecifics.mapNullableType(schema, isNullable));
    }
    if (isZodType(zodSchema, "ZodBoolean")) {
      return this.versionSpecifics.mapNullableType("boolean", isNullable);
    }
    if (isZodType(zodSchema, "ZodLiteral")) {
      return this.literalTransformer.transform(zodSchema, (schema) => this.versionSpecifics.mapNullableType(schema, isNullable));
    }
    if (isZodType(zodSchema, "ZodEnum")) {
      return this.enumTransformer.transform(zodSchema, (schema) => this.versionSpecifics.mapNullableType(schema, isNullable));
    }
    if (isZodType(zodSchema, "ZodNativeEnum")) {
      return this.nativeEnumTransformer.transform(zodSchema, (schema) => this.versionSpecifics.mapNullableType(schema, isNullable));
    }
    if (isZodType(zodSchema, "ZodArray")) {
      return this.arrayTransformer.transform(zodSchema, (_) => this.versionSpecifics.mapNullableType(_, isNullable), mapItem);
    }
    if (isZodType(zodSchema, "ZodTuple")) {
      return this.tupleTransformer.transform(zodSchema, (_) => this.versionSpecifics.mapNullableType(_, isNullable), mapItem);
    }
    if (isZodType(zodSchema, "ZodUnion")) {
      return this.unionTransformer.transform(zodSchema, (_) => this.versionSpecifics.mapNullableOfArray(_, isNullable), mapItem);
    }
    if (isZodType(zodSchema, "ZodDiscriminatedUnion")) {
      return this.discriminatedUnionTransformer.transform(zodSchema, isNullable, (_) => this.versionSpecifics.mapNullableOfArray(_, isNullable), mapItem, generateSchemaRef);
    }
    if (isZodType(zodSchema, "ZodIntersection")) {
      return this.intersectionTransformer.transform(zodSchema, isNullable, (_) => this.versionSpecifics.mapNullableOfArray(_, isNullable), mapItem);
    }
    if (isZodType(zodSchema, "ZodRecord")) {
      return this.recordTransformer.transform(zodSchema, (_) => this.versionSpecifics.mapNullableType(_, isNullable), mapItem);
    }
    if (isZodType(zodSchema, "ZodDate")) {
      return this.versionSpecifics.mapNullableType("string", isNullable);
    }
    const refId = Metadata.getRefId(zodSchema);
    throw new UnknownZodTypeError({
      currentSchema: zodSchema._def,
      schemaName: refId
    });
  }
}

class OpenAPIGenerator {
  constructor(definitions, versionSpecifics) {
    this.definitions = definitions;
    this.versionSpecifics = versionSpecifics;
    this.schemaRefs = {};
    this.paramRefs = {};
    this.pathRefs = {};
    this.rawComponents = [];
    this.openApiTransformer = new OpenApiTransformer(versionSpecifics);
    this.sortDefinitions();
  }
  generateDocumentData() {
    this.definitions.forEach((definition) => this.generateSingle(definition));
    return {
      components: this.buildComponents(),
      paths: this.pathRefs
    };
  }
  generateComponents() {
    this.definitions.forEach((definition) => this.generateSingle(definition));
    return {
      components: this.buildComponents()
    };
  }
  buildComponents() {
    var _a, _b;
    const rawComponents = {};
    this.rawComponents.forEach(({ componentType, name, component }) => {
      var _a2;
      (_a2 = rawComponents[componentType]) !== null && _a2 !== undefined || (rawComponents[componentType] = {});
      rawComponents[componentType][name] = component;
    });
    return Object.assign(Object.assign({}, rawComponents), { schemas: Object.assign(Object.assign({}, (_a = rawComponents.schemas) !== null && _a !== undefined ? _a : {}), this.schemaRefs), parameters: Object.assign(Object.assign({}, (_b = rawComponents.parameters) !== null && _b !== undefined ? _b : {}), this.paramRefs) });
  }
  sortDefinitions() {
    const generationOrder = [
      "schema",
      "parameter",
      "component",
      "route"
    ];
    this.definitions.sort((left, right) => {
      if (!("type" in left)) {
        if (!("type" in right)) {
          return 0;
        }
        return -1;
      }
      if (!("type" in right)) {
        return 1;
      }
      const leftIndex = generationOrder.findIndex((type) => type === left.type);
      const rightIndex = generationOrder.findIndex((type) => type === right.type);
      return leftIndex - rightIndex;
    });
  }
  generateSingle(definition) {
    if (!("type" in definition)) {
      this.generateSchemaWithRef(definition);
      return;
    }
    switch (definition.type) {
      case "parameter":
        this.generateParameterDefinition(definition.schema);
        return;
      case "schema":
        this.generateSchemaWithRef(definition.schema);
        return;
      case "route":
        this.generateSingleRoute(definition.route);
        return;
      case "component":
        this.rawComponents.push(definition);
        return;
    }
  }
  generateParameterDefinition(zodSchema) {
    const refId = Metadata.getRefId(zodSchema);
    const result = this.generateParameter(zodSchema);
    if (refId) {
      this.paramRefs[refId] = result;
    }
    return result;
  }
  getParameterRef(schemaMetadata, external) {
    var _a, _b, _c, _d, _e;
    const parameterMetadata = (_a = schemaMetadata === null || schemaMetadata === undefined ? undefined : schemaMetadata.metadata) === null || _a === undefined ? undefined : _a.param;
    const existingRef = ((_b = schemaMetadata === null || schemaMetadata === undefined ? undefined : schemaMetadata._internal) === null || _b === undefined ? undefined : _b.refId) ? this.paramRefs[(_c = schemaMetadata._internal) === null || _c === undefined ? undefined : _c.refId] : undefined;
    if (!((_d = schemaMetadata === null || schemaMetadata === undefined ? undefined : schemaMetadata._internal) === null || _d === undefined ? undefined : _d.refId) || !existingRef) {
      return;
    }
    if (parameterMetadata && existingRef.in !== parameterMetadata.in || (external === null || external === undefined ? undefined : external.in) && existingRef.in !== external.in) {
      throw new ConflictError(`Conflicting location for parameter ${existingRef.name}`, {
        key: "in",
        values: compact([
          existingRef.in,
          external === null || external === undefined ? undefined : external.in,
          parameterMetadata === null || parameterMetadata === undefined ? undefined : parameterMetadata.in
        ])
      });
    }
    if (parameterMetadata && existingRef.name !== parameterMetadata.name || (external === null || external === undefined ? undefined : external.name) && existingRef.name !== (external === null || external === undefined ? undefined : external.name)) {
      throw new ConflictError(`Conflicting names for parameter`, {
        key: "name",
        values: compact([
          existingRef.name,
          external === null || external === undefined ? undefined : external.name,
          parameterMetadata === null || parameterMetadata === undefined ? undefined : parameterMetadata.name
        ])
      });
    }
    return {
      $ref: `#/components/parameters/${(_e = schemaMetadata._internal) === null || _e === undefined ? undefined : _e.refId}`
    };
  }
  generateInlineParameters(zodSchema, location) {
    var _a;
    const metadata = Metadata.getMetadata(zodSchema);
    const parameterMetadata = (_a = metadata === null || metadata === undefined ? undefined : metadata.metadata) === null || _a === undefined ? undefined : _a.param;
    const referencedSchema = this.getParameterRef(metadata, { in: location });
    if (referencedSchema) {
      return [referencedSchema];
    }
    if (isZodType(zodSchema, "ZodObject")) {
      const propTypes = zodSchema._def.shape();
      const parameters = Object.entries(propTypes).map(([key, schema]) => {
        var _a2, _b;
        const innerMetadata = Metadata.getMetadata(schema);
        const referencedSchema2 = this.getParameterRef(innerMetadata, {
          in: location,
          name: key
        });
        if (referencedSchema2) {
          return referencedSchema2;
        }
        const innerParameterMetadata = (_a2 = innerMetadata === null || innerMetadata === undefined ? undefined : innerMetadata.metadata) === null || _a2 === undefined ? undefined : _a2.param;
        if ((innerParameterMetadata === null || innerParameterMetadata === undefined ? undefined : innerParameterMetadata.name) && innerParameterMetadata.name !== key) {
          throw new ConflictError(`Conflicting names for parameter`, {
            key: "name",
            values: [key, innerParameterMetadata.name]
          });
        }
        if ((innerParameterMetadata === null || innerParameterMetadata === undefined ? undefined : innerParameterMetadata.in) && innerParameterMetadata.in !== location) {
          throw new ConflictError(`Conflicting location for parameter ${(_b = innerParameterMetadata.name) !== null && _b !== undefined ? _b : key}`, {
            key: "in",
            values: [location, innerParameterMetadata.in]
          });
        }
        return this.generateParameter(schema.openapi({ param: { name: key, in: location } }));
      });
      return parameters;
    }
    if ((parameterMetadata === null || parameterMetadata === undefined ? undefined : parameterMetadata.in) && parameterMetadata.in !== location) {
      throw new ConflictError(`Conflicting location for parameter ${parameterMetadata.name}`, {
        key: "in",
        values: [location, parameterMetadata.in]
      });
    }
    return [
      this.generateParameter(zodSchema.openapi({ param: { in: location } }))
    ];
  }
  generateSimpleParameter(zodSchema) {
    var _a;
    const metadata = Metadata.getParamMetadata(zodSchema);
    const paramMetadata = (_a = metadata === null || metadata === undefined ? undefined : metadata.metadata) === null || _a === undefined ? undefined : _a.param;
    const required = !Metadata.isOptionalSchema(zodSchema) && !zodSchema.isNullable();
    const schema = this.generateSchemaWithRef(zodSchema);
    return Object.assign({
      schema,
      required
    }, paramMetadata ? Metadata.buildParameterMetadata(paramMetadata) : {});
  }
  generateParameter(zodSchema) {
    var _a;
    const metadata = Metadata.getMetadata(zodSchema);
    const paramMetadata = (_a = metadata === null || metadata === undefined ? undefined : metadata.metadata) === null || _a === undefined ? undefined : _a.param;
    const paramName = paramMetadata === null || paramMetadata === undefined ? undefined : paramMetadata.name;
    const paramLocation = paramMetadata === null || paramMetadata === undefined ? undefined : paramMetadata.in;
    if (!paramName) {
      throw new MissingParameterDataError({ missingField: "name" });
    }
    if (!paramLocation) {
      throw new MissingParameterDataError({
        missingField: "in",
        paramName
      });
    }
    const baseParameter = this.generateSimpleParameter(zodSchema);
    return Object.assign(Object.assign({}, baseParameter), { in: paramLocation, name: paramName });
  }
  generateSchemaWithMetadata(zodSchema) {
    var _a;
    const innerSchema = Metadata.unwrapChained(zodSchema);
    const metadata = Metadata.getMetadata(zodSchema);
    const defaultValue = Metadata.getDefaultValue(zodSchema);
    const result = ((_a = metadata === null || metadata === undefined ? undefined : metadata.metadata) === null || _a === undefined ? undefined : _a.type) ? { type: metadata === null || metadata === undefined ? undefined : metadata.metadata.type } : this.toOpenAPISchema(innerSchema, zodSchema.isNullable(), defaultValue);
    return (metadata === null || metadata === undefined ? undefined : metadata.metadata) ? Metadata.applySchemaMetadata(result, metadata.metadata) : omitBy(result, isNil);
  }
  constructReferencedOpenAPISchema(zodSchema) {
    var _a;
    const metadata = Metadata.getMetadata(zodSchema);
    const innerSchema = Metadata.unwrapChained(zodSchema);
    const defaultValue = Metadata.getDefaultValue(zodSchema);
    const isNullableSchema = zodSchema.isNullable();
    if ((_a = metadata === null || metadata === undefined ? undefined : metadata.metadata) === null || _a === undefined ? undefined : _a.type) {
      return this.versionSpecifics.mapNullableType(metadata.metadata.type, isNullableSchema);
    }
    return this.toOpenAPISchema(innerSchema, isNullableSchema, defaultValue);
  }
  generateSimpleSchema(zodSchema) {
    var _a;
    const metadata = Metadata.getMetadata(zodSchema);
    const refId = Metadata.getRefId(zodSchema);
    if (!refId || !this.schemaRefs[refId]) {
      return this.generateSchemaWithMetadata(zodSchema);
    }
    const schemaRef = this.schemaRefs[refId];
    const referenceObject = {
      $ref: this.generateSchemaRef(refId)
    };
    const newMetadata = omitBy(Metadata.buildSchemaMetadata((_a = metadata === null || metadata === undefined ? undefined : metadata.metadata) !== null && _a !== undefined ? _a : {}), (value, key) => value === undefined || objectEquals(value, schemaRef[key]));
    if (newMetadata.type) {
      return {
        allOf: [referenceObject, newMetadata]
      };
    }
    const newSchemaMetadata = omitBy(this.constructReferencedOpenAPISchema(zodSchema), (value, key) => value === undefined || objectEquals(value, schemaRef[key]));
    const appliedMetadata = Metadata.applySchemaMetadata(newSchemaMetadata, newMetadata);
    if (Object.keys(appliedMetadata).length > 0) {
      return {
        allOf: [referenceObject, appliedMetadata]
      };
    }
    return referenceObject;
  }
  generateSchemaWithRef(zodSchema) {
    const refId = Metadata.getRefId(zodSchema);
    const result = this.generateSimpleSchema(zodSchema);
    if (refId && this.schemaRefs[refId] === undefined) {
      this.schemaRefs[refId] = result;
      return { $ref: this.generateSchemaRef(refId) };
    }
    return result;
  }
  generateSchemaRef(refId) {
    return `#/components/schemas/${refId}`;
  }
  getRequestBody(requestBody) {
    if (!requestBody) {
      return;
    }
    const { content } = requestBody, rest = __rest(requestBody, ["content"]);
    const requestBodyContent = this.getBodyContent(content);
    return Object.assign(Object.assign({}, rest), { content: requestBodyContent });
  }
  getParameters(request) {
    if (!request) {
      return [];
    }
    const { headers } = request;
    const query = this.cleanParameter(request.query);
    const params = this.cleanParameter(request.params);
    const cookies = this.cleanParameter(request.cookies);
    const queryParameters = enhanceMissingParametersError(() => query ? this.generateInlineParameters(query, "query") : [], { location: "query" });
    const pathParameters = enhanceMissingParametersError(() => params ? this.generateInlineParameters(params, "path") : [], { location: "path" });
    const cookieParameters = enhanceMissingParametersError(() => cookies ? this.generateInlineParameters(cookies, "cookie") : [], { location: "cookie" });
    const headerParameters = enhanceMissingParametersError(() => {
      if (Array.isArray(headers)) {
        return headers.flatMap((header) => this.generateInlineParameters(header, "header"));
      }
      const cleanHeaders = this.cleanParameter(headers);
      return cleanHeaders ? this.generateInlineParameters(cleanHeaders, "header") : [];
    }, { location: "header" });
    return [
      ...pathParameters,
      ...queryParameters,
      ...headerParameters,
      ...cookieParameters
    ];
  }
  cleanParameter(schema) {
    if (!schema) {
      return;
    }
    return isZodType(schema, "ZodEffects") ? this.cleanParameter(schema._def.schema) : schema;
  }
  generatePath(route) {
    const { method, path, request, responses } = route, pathItemConfig = __rest(route, ["method", "path", "request", "responses"]);
    const generatedResponses = mapValues(responses, (response) => {
      return this.getResponse(response);
    });
    const parameters = enhanceMissingParametersError(() => this.getParameters(request), { route: `${method} ${path}` });
    const requestBody = this.getRequestBody(request === null || request === undefined ? undefined : request.body);
    const routeDoc = {
      [method]: Object.assign(Object.assign(Object.assign(Object.assign({}, pathItemConfig), parameters.length > 0 ? {
        parameters: [...pathItemConfig.parameters || [], ...parameters]
      } : {}), requestBody ? { requestBody } : {}), { responses: generatedResponses })
    };
    return routeDoc;
  }
  generateSingleRoute(route) {
    const routeDoc = this.generatePath(route);
    this.pathRefs[route.path] = Object.assign(Object.assign({}, this.pathRefs[route.path]), routeDoc);
    return routeDoc;
  }
  getResponse(response) {
    if (this.isReferenceObject(response)) {
      return response;
    }
    const { content, headers } = response, rest = __rest(response, ["content", "headers"]);
    const responseContent = content ? { content: this.getBodyContent(content) } : {};
    if (!headers) {
      return Object.assign(Object.assign({}, rest), responseContent);
    }
    const responseHeaders = isZodType(headers, "ZodObject") ? this.getResponseHeaders(headers) : headers;
    return Object.assign(Object.assign(Object.assign({}, rest), { headers: responseHeaders }), responseContent);
  }
  isReferenceObject(schema) {
    return "$ref" in schema;
  }
  getResponseHeaders(headers) {
    const schemaShape = headers._def.shape();
    const responseHeaders = mapValues(schemaShape, (_) => this.generateSimpleParameter(_));
    return responseHeaders;
  }
  getBodyContent(content) {
    return mapValues(content, (config) => {
      if (!config || !isAnyZodType(config.schema)) {
        return config;
      }
      const { schema: configSchema } = config, rest = __rest(config, ["schema"]);
      const schema = this.generateSchemaWithRef(configSchema);
      return Object.assign({ schema }, rest);
    });
  }
  toOpenAPISchema(zodSchema, isNullable, defaultValue) {
    return this.openApiTransformer.transform(zodSchema, isNullable, (_) => this.generateSchemaWithRef(_), (_) => this.generateSchemaRef(_), defaultValue);
  }
}

class OpenApiGeneratorV30Specifics {
  get nullType() {
    return { nullable: true };
  }
  mapNullableOfArray(objects, isNullable) {
    if (isNullable) {
      return [...objects, this.nullType];
    }
    return objects;
  }
  mapNullableType(type, isNullable) {
    return Object.assign(Object.assign({}, type ? { type } : undefined), isNullable ? this.nullType : undefined);
  }
  mapTupleItems(schemas) {
    const uniqueSchemas = uniq(schemas);
    return {
      items: uniqueSchemas.length === 1 ? uniqueSchemas[0] : { anyOf: uniqueSchemas },
      minItems: schemas.length,
      maxItems: schemas.length
    };
  }
  getNumberChecks(checks) {
    return Object.assign({}, ...checks.map((check) => {
      switch (check.kind) {
        case "min":
          return check.inclusive ? { minimum: Number(check.value) } : { minimum: Number(check.value), exclusiveMinimum: true };
        case "max":
          return check.inclusive ? { maximum: Number(check.value) } : { maximum: Number(check.value), exclusiveMaximum: true };
        default:
          return {};
      }
    }));
  }
}

class OpenApiGeneratorV3 {
  constructor(definitions) {
    const specifics = new OpenApiGeneratorV30Specifics;
    this.generator = new OpenAPIGenerator(definitions, specifics);
  }
  generateDocument(config) {
    const baseData = this.generator.generateDocumentData();
    return Object.assign(Object.assign({}, config), baseData);
  }
  generateComponents() {
    return this.generator.generateComponents();
  }
}

class OpenApiGeneratorV31Specifics {
  get nullType() {
    return { type: "null" };
  }
  mapNullableOfArray(objects, isNullable) {
    if (isNullable) {
      return [...objects, this.nullType];
    }
    return objects;
  }
  mapNullableType(type, isNullable) {
    if (!type) {
      return {};
    }
    if (isNullable) {
      return {
        type: Array.isArray(type) ? [...type, "null"] : [type, "null"]
      };
    }
    return {
      type
    };
  }
  mapTupleItems(schemas) {
    return {
      prefixItems: schemas
    };
  }
  getNumberChecks(checks) {
    return Object.assign({}, ...checks.map((check) => {
      switch (check.kind) {
        case "min":
          return check.inclusive ? { minimum: Number(check.value) } : { exclusiveMinimum: Number(check.value) };
        case "max":
          return check.inclusive ? { maximum: Number(check.value) } : { exclusiveMaximum: Number(check.value) };
        default:
          return {};
      }
    }));
  }
}
function isWebhookDefinition(definition) {
  return "type" in definition && definition.type === "webhook";
}

class OpenApiGeneratorV31 {
  constructor(definitions) {
    this.definitions = definitions;
    this.webhookRefs = {};
    const specifics = new OpenApiGeneratorV31Specifics;
    this.generator = new OpenAPIGenerator(this.definitions, specifics);
  }
  generateDocument(config) {
    const baseDocument = this.generator.generateDocumentData();
    this.definitions.filter(isWebhookDefinition).forEach((definition) => this.generateSingleWebhook(definition.webhook));
    return Object.assign(Object.assign(Object.assign({}, config), baseDocument), { webhooks: this.webhookRefs });
  }
  generateComponents() {
    return this.generator.generateComponents();
  }
  generateSingleWebhook(route) {
    const routeDoc = this.generator.generatePath(route);
    this.webhookRefs[route.path] = Object.assign(Object.assign({}, this.webhookRefs[route.path]), routeDoc);
    return routeDoc;
  }
}

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1;i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1;j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label, next) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (;i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? undefined : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p.at(-1) === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? undefined : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? undefined : nextKeyIndex : valueIndex);
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? undefined : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/utils/cookie.js
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse = (cookie, name) => {
  if (name && cookie.indexOf(name) === -1) {
    return {};
  }
  const pairs = cookie.trim().split(";");
  const parsedCookie = {};
  for (let pairStr of pairs) {
    pairStr = pairStr.trim();
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1) {
      continue;
    }
    const cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName)) {
      continue;
    }
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"')) {
      cookieValue = cookieValue.slice(1, -1);
    }
    if (validCookieValueRegEx.test(cookieValue)) {
      parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
      if (name) {
        break;
      }
    }
  }
  return parsedCookie;
};

// node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c, key, prefix) => {
  const cookie = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie) {
      return;
    }
    let finalKey = key;
    if (prefix === "secure") {
      finalKey = "__Secure-" + key;
    } else if (prefix === "host") {
      finalKey = "__Host-" + key;
    }
    const obj2 = parse(cookie, finalKey);
    return obj2[finalKey];
  }
  if (!cookie) {
    return {};
  }
  const obj = parse(cookie);
  return obj;
};

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      const newResponse = new Response(this.res.body, {
        status: this.status,
        headers: this.res.headers
      });
      return newResponse;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => {
  const response = new Response(arrayBuffer, {
    headers: {
      "Content-Type": contentType
    }
  });
  return response.formData();
};

// node_modules/hono/dist/validator/validator.js
var jsonRegex = /^application\/([a-z-\.]+\+)?json(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/;
var multipartRegex = /^multipart\/form-data(;\s?boundary=[a-zA-Z0-9'"()+_,\-./:=?]+)?$/;
var urlencodedRegex = /^application\/x-www-form-urlencoded(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/;
var validator = (target, validationFunc) => {
  return async (c, next) => {
    let value = {};
    const contentType = c.req.header("Content-Type");
    switch (target) {
      case "json":
        if (!contentType || !jsonRegex.test(contentType)) {
          break;
        }
        try {
          value = await c.req.json();
        } catch {
          const message = "Malformed JSON in request body";
          throw new HTTPException(400, { message });
        }
        break;
      case "form": {
        if (!contentType || !(multipartRegex.test(contentType) || urlencodedRegex.test(contentType))) {
          break;
        }
        let formData;
        if (c.req.bodyCache.formData) {
          formData = await c.req.bodyCache.formData;
        } else {
          try {
            const arrayBuffer = await c.req.arrayBuffer();
            formData = await bufferToFormData(arrayBuffer, contentType);
            c.req.bodyCache.formData = formData;
          } catch (e) {
            let message = "Malformed FormData request.";
            message += e instanceof Error ? ` ${e.message}` : ` ${String(e)}`;
            throw new HTTPException(400, { message });
          }
        }
        const form = {};
        formData.forEach((value2, key) => {
          if (key.endsWith("[]")) {
            (form[key] ??= []).push(value2);
          } else if (Array.isArray(form[key])) {
            form[key].push(value2);
          } else if (key in form) {
            form[key] = [form[key], value2];
          } else {
            form[key] = value2;
          }
        });
        value = form;
        break;
      }
      case "query":
        value = Object.fromEntries(Object.entries(c.req.queries()).map(([k, v]) => {
          return v.length === 1 ? [k, v[0]] : [k, v];
        }));
        break;
      case "param":
        value = c.req.param();
        break;
      case "header":
        value = c.req.header();
        break;
      case "cookie":
        value = getCookie(c);
        break;
    }
    const res = await validationFunc(value, c);
    if (res instanceof Response) {
      return res;
    }
    c.req.addValidatedData(target, res);
    await next();
  };
};

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== undefined) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      overrideMap,
      overrideMap === errorMap ? undefined : errorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === undefined ? undefined : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache;
var _ZodNativeEnum_cache;

class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== undefined ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== undefined ? message : required_error) !== null && _a !== undefined ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== undefined ? message : invalid_type_error) !== null && _b !== undefined ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}

class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === undefined ? undefined : params.async) !== null && _a !== undefined ? _a : false,
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a = err === null || err === undefined ? undefined : err.message) === null || _a === undefined ? undefined : _a.toLowerCase()) === null || _b === undefined ? undefined : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
        async: true
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if (!decoded.typ || !decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch (_a) {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      offset: (_a = options === null || options === undefined ? undefined : options.offset) !== null && _a !== undefined ? _a : false,
      local: (_b = options === null || options === undefined ? undefined : options.local) !== null && _b !== undefined ? _b : false,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === undefined ? undefined : options.position,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch (_a) {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === undefined ? undefined : _b.call(_a, issue, ctx).message) !== null && _c !== undefined ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== undefined ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [undefined, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}

class ZodEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, undefined);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
_ZodEnum_cache = new WeakMap;
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, undefined);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
_ZodNativeEnum_cache = new WeakMap;
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};

class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          var _a2, _b2;
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = (_b2 = (_a2 = params.fatal) !== null && _a2 !== undefined ? _a2 : fatal) !== null && _b2 !== undefined ? _b2 : true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = (_b = (_a = params.fatal) !== null && _a !== undefined ? _a : fatal) !== null && _b !== undefined ? _b : true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/@hono/zod-validator/dist/index.js
var zValidator = (target, schema, hook, options) => validator(target, async (value, c) => {
  let validatorValue = value;
  if (target === "header" && schema instanceof ZodObject) {
    const schemaKeys = Object.keys(schema.shape);
    const caseInsensitiveKeymap = Object.fromEntries(schemaKeys.map((key) => [key.toLowerCase(), key]));
    validatorValue = Object.fromEntries(Object.entries(value).map(([key, value2]) => [caseInsensitiveKeymap[key] || key, value2]));
  }
  const result = options && options.validationFunction ? await options.validationFunction(schema, validatorValue) : await schema.safeParseAsync(validatorValue);
  if (hook) {
    const hookResult = await hook({ data: validatorValue, ...result, target }, c);
    if (hookResult) {
      if (hookResult instanceof Response) {
        return hookResult;
      }
      if ("response" in hookResult) {
        return hookResult.response;
      }
    }
  }
  if (!result.success) {
    return c.json(result, 400);
  }
  return result.data;
});

// node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== undefined) {
    if (Array.isArray(form[key])) {
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : undefined;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? undefined;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === undefined) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map;
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : undefined;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers;
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    if (typeof arg === "number") {
      return this.#newResponse(text, arg, headers);
    }
    return this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers;
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response;
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    const isContext = context instanceof Context;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (isContext) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || undefined;
      }
      if (!handler) {
        if (isContext && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && isContext && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app) {
    const subApp = this.basePath(path);
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = undefined;
      try {
        executionContext = c.executionCtx;
      } catch {}
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(new Request(/^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`, requestInit), Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, undefined, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== undefined) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some((k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node;
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some((k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node;
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node;
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0;; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1;i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1;j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== undefined) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== undefined) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(path === "*" ? "" : `^${path.replace(/\/\*$|([.\\+*[^\]$()])/g, (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)")}$`);
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie;
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length;i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (;paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length;i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length;j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length;k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push([handler, paramCount]));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length;i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = undefined;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]]));
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (;i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length;i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = undefined;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length;i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (Object.keys(curNode.#children).includes(key)) {
        curNode = curNode.#children[key];
        const pattern2 = getPattern(p, nextP);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2;
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length;i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== undefined) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length;i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length;i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length;j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(...this.#getHandlerSets(nextNode.#children["*"], method, node.#params));
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length;k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(...this.#getHandlerSets(child.#children["*"], method, params, node.#params));
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2;
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length;i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter, new TrieRouter]
    });
  }
};

// node_modules/@hono/zod-openapi/dist/index.js
var OpenAPIHono = class _OpenAPIHono extends Hono2 {
  openAPIRegistry;
  defaultHook;
  constructor(init) {
    super(init);
    this.openAPIRegistry = new OpenAPIRegistry;
    this.defaultHook = init?.defaultHook;
  }
  openapi = ({ middleware: routeMiddleware, hide, ...route }, handler, hook = this.defaultHook) => {
    if (!hide) {
      this.openAPIRegistry.registerPath(route);
    }
    const validators = [];
    if (route.request?.query) {
      const validator2 = zValidator("query", route.request.query, hook);
      validators.push(validator2);
    }
    if (route.request?.params) {
      const validator2 = zValidator("param", route.request.params, hook);
      validators.push(validator2);
    }
    if (route.request?.headers) {
      const validator2 = zValidator("header", route.request.headers, hook);
      validators.push(validator2);
    }
    if (route.request?.cookies) {
      const validator2 = zValidator("cookie", route.request.cookies, hook);
      validators.push(validator2);
    }
    const bodyContent = route.request?.body?.content;
    if (bodyContent) {
      for (const mediaType of Object.keys(bodyContent)) {
        if (!bodyContent[mediaType]) {
          continue;
        }
        const schema = bodyContent[mediaType]["schema"];
        if (!(schema instanceof ZodType)) {
          continue;
        }
        if (isJSONContentType(mediaType)) {
          const validator2 = zValidator("json", schema, hook);
          if (route.request?.body?.required) {
            validators.push(validator2);
          } else {
            const mw = async (c, next) => {
              if (c.req.header("content-type")) {
                if (isJSONContentType(c.req.header("content-type"))) {
                  return await validator2(c, next);
                }
              }
              c.req.addValidatedData("json", {});
              await next();
            };
            validators.push(mw);
          }
        }
        if (isFormContentType(mediaType)) {
          const validator2 = zValidator("form", schema, hook);
          if (route.request?.body?.required) {
            validators.push(validator2);
          } else {
            const mw = async (c, next) => {
              if (c.req.header("content-type")) {
                if (isFormContentType(c.req.header("content-type"))) {
                  return await validator2(c, next);
                }
              }
              c.req.addValidatedData("form", {});
              await next();
            };
            validators.push(mw);
          }
        }
      }
    }
    const middleware = routeMiddleware ? Array.isArray(routeMiddleware) ? routeMiddleware : [routeMiddleware] : [];
    this.on([route.method], route.path.replaceAll(/\/{(.+?)}/g, "/:$1"), ...middleware, ...validators, handler);
    return this;
  };
  getOpenAPIDocument = (config) => {
    const generator = new OpenApiGeneratorV3(this.openAPIRegistry.definitions);
    const document = generator.generateDocument(config);
    return this._basePath ? addBasePathToDocument(document, this._basePath) : document;
  };
  getOpenAPI31Document = (config) => {
    const generator = new OpenApiGeneratorV31(this.openAPIRegistry.definitions);
    const document = generator.generateDocument(config);
    return this._basePath ? addBasePathToDocument(document, this._basePath) : document;
  };
  doc = (path, configure) => {
    return this.get(path, (c) => {
      const config = typeof configure === "function" ? configure(c) : configure;
      try {
        const document = this.getOpenAPIDocument(config);
        return c.json(document);
      } catch (e) {
        return c.json(e, 500);
      }
    });
  };
  doc31 = (path, configure) => {
    return this.get(path, (c) => {
      const config = typeof configure === "function" ? configure(c) : configure;
      try {
        const document = this.getOpenAPI31Document(config);
        return c.json(document);
      } catch (e) {
        return c.json(e, 500);
      }
    });
  };
  route(path, app) {
    const pathForOpenAPI = path.replaceAll(/:([^\/]+)/g, "{$1}");
    super.route(path, app);
    if (!(app instanceof _OpenAPIHono)) {
      return this;
    }
    app.openAPIRegistry.definitions.forEach((def) => {
      switch (def.type) {
        case "component":
          return this.openAPIRegistry.registerComponent(def.componentType, def.name, def.component);
        case "route":
          return this.openAPIRegistry.registerPath({
            ...def.route,
            path: mergePath(pathForOpenAPI, app._basePath.replaceAll(/:([^\/]+)/g, "{$1}"), def.route.path)
          });
        case "webhook":
          return this.openAPIRegistry.registerWebhook({
            ...def.webhook,
            path: mergePath(pathForOpenAPI, app._basePath.replaceAll(/:([^\/]+)/g, "{$1}"), def.webhook.path)
          });
        case "schema":
          return this.openAPIRegistry.register(def.schema._def.openapi._internal.refId, def.schema);
        case "parameter":
          return this.openAPIRegistry.registerParameter(def.schema._def.openapi._internal.refId, def.schema);
        default: {
          const errorIfNotExhaustive = def;
          throw new Error(`Unknown registry type: ${errorIfNotExhaustive}`);
        }
      }
    });
    return this;
  }
  basePath(path) {
    return new _OpenAPIHono({ ...super.basePath(path), defaultHook: this.defaultHook });
  }
};
var createRoute = (routeConfig) => {
  const route = {
    ...routeConfig,
    getRoutingPath() {
      return routeConfig.path.replaceAll(/\/{(.+?)}/g, "/:$1");
    }
  };
  return Object.defineProperty(route, "getRoutingPath", { enumerable: false });
};
extendZodWithOpenApi(z);
function addBasePathToDocument(document, basePath) {
  const updatedPaths = {};
  Object.keys(document.paths).forEach((path) => {
    updatedPaths[mergePath(basePath.replaceAll(/:([^\/]+)/g, "{$1}"), path)] = document.paths[path];
  });
  return {
    ...document,
    paths: updatedPaths
  };
}
function isJSONContentType(contentType) {
  return /^application\/([a-z-\.]+\+)?json/.test(contentType);
}
function isFormContentType(contentType) {
  return contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded");
}

// src/modules/city/schema.ts
var CitySchema = z.object({
  id: z.number(),
  code: z.string(),
  slug: z.string(),
  name: z.string(),
  provinceId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});
var CityListSchema = z.array(CitySchema);

// src/modules/common/schema.ts
var ParamSlugSchema = z.object({
  slug: z.string().describe("Slug of the zone")
});
var ParamIdSchema = z.object({
  id: z.string().transform((val) => parseInt(val, 10)).refine((val) => !isNaN(val), { message: "Invalid ID format" }).describe("ID of the zone")
});
var ParamCodeSchema = z.object({
  code: z.string().refine((val) => /^\d{2,3}$/.test(val), {
    message: "Code must be 2 to 3 digits"
  }).transform((val) => parseInt(val, 10)).describe("Code of the zone")
});
var ParamCodeCitySchema = z.object({
  code: z.string().describe("Code of the city, example: 32.01")
});
var QuerySchema = z.object({
  q: z.string().optional().describe("Search query")
});

// src/routes/ina-city.ts
var prisma = new import_edge.PrismaClient;
var inaCityRoute = new OpenAPIHono;
inaCityRoute.openapi(createRoute({
  method: "get",
  path: "/",
  tags: ["City"],
  description: "Get all Cities",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: CityListSchema
        }
      },
      description: "Get all Cities"
    }
  }
}), async (c) => {
  const Cities = await prisma.city.findMany({
    include: {
      province: true
    }
  });
  return c.json(Cities);
});
inaCityRoute.openapi(createRoute({
  method: "get",
  path: "/{slug}",
  tags: ["City"],
  description: "Get city by slug",
  request: { params: ParamSlugSchema },
  responses: {
    200: {
      content: { "application/json": { schema: CitySchema } },
      description: "Successfully get City by slug"
    },
    404: {
      description: "City not found"
    }
  }
}), async (c) => {
  const { slug } = c.req.valid("param");
  const City = await prisma.city.findUnique({
    where: { slug },
    include: {
      province: true
    }
  });
  if (!City) {
    return c.json({ message: "City not found" }, 404);
  }
  return c.json(City);
});
inaCityRoute.openapi(createRoute({
  method: "get",
  path: "/code/{code}",
  tags: ["City"],
  description: "Get city by code",
  request: { params: ParamCodeCitySchema },
  responses: {
    200: {
      content: { "application/json": { schema: CitySchema } },
      description: "Successfully get City by code"
    },
    404: {
      description: "City not found"
    }
  }
}), async (c) => {
  const { code } = c.req.valid("param");
  const City = await prisma.city.findUnique({
    where: { code },
    include: {
      province: true
    }
  });
  if (!City) {
    return c.json({ message: "City not found" }, 404);
  }
  return c.json(City);
});
inaCityRoute.openapi(createRoute({
  method: "get",
  path: "/id/{id}",
  tags: ["City"],
  description: "Get city by Id",
  request: { params: ParamIdSchema },
  responses: {
    200: {
      content: { "application/json": { schema: CitySchema } },
      description: "Successfully get City by Id"
    },
    404: {
      description: "City not found"
    }
  }
}), async (c) => {
  const { id } = c.req.valid("param");
  const City = await prisma.city.findUnique({
    where: { id },
    include: {
      province: true
    }
  });
  if (!City) {
    return c.json({ message: "City not found" }, 404);
  }
  return c.json(City);
});

// node_modules/@scalar/core/dist/libs/html-rendering/html-rendering.js
var addIndent = (str, spaces = 2, initialIndent = false) => {
  const indent = " ".repeat(spaces);
  const lines = str.split(`
`);
  return lines.map((line, index) => {
    if (index === 0 && !initialIndent) {
      return line;
    }
    return `${indent}${line}`;
  }).join(`
`);
};
var getStyles = (configuration, customTheme) => {
  const styles = [];
  if (configuration.customCss) {
    styles.push("/* Custom CSS */");
    styles.push(configuration.customCss);
  }
  if (!configuration.theme && customTheme) {
    styles.push("/* Custom Theme */");
    styles.push(customTheme);
  }
  if (styles.length === 0) {
    return "";
  }
  return `
    <style type="text/css">
      ${addIndent(styles.join(`

`), 6)}
    </style>`;
};
var getHtmlDocument = (givenConfiguration, customTheme = "") => {
  const { cdn, pageTitle, customCss, theme, ...rest } = givenConfiguration;
  const configuration = getConfiguration({
    ...rest,
    ...theme ? { theme } : {},
    customCss
  });
  const content = `<!doctype html>
<html>
  <head>
    <title>${pageTitle ?? "Scalar API Reference"}</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />${getStyles(configuration, customTheme)}
  </head>
  <body>
    <div id="app"></div>${getScriptTags(configuration, cdn)}
  </body>
</html>`;
  return content;
};
function getScriptTags(configuration, cdn) {
  const { tagsSorter, operationsSorter, generateHeadingSlug, generateModelSlug, generateTagSlug, generateOperationSlug, generateWebhookSlug, onLoaded, redirect, onSpecUpdate, onServerChange, ...restConfig } = configuration;
  const functionProps = [];
  const functionProperties = [
    { name: "tagsSorter", value: tagsSorter },
    { name: "operationsSorter", value: operationsSorter },
    { name: "generateHeadingSlug", value: generateHeadingSlug },
    { name: "generateModelSlug", value: generateModelSlug },
    { name: "generateTagSlug", value: generateTagSlug },
    { name: "generateOperationSlug", value: generateOperationSlug },
    { name: "generateWebhookSlug", value: generateWebhookSlug },
    { name: "onLoaded", value: onLoaded },
    { name: "redirect", value: redirect },
    { name: "onSpecUpdate", value: onSpecUpdate },
    { name: "onServerChange", value: onServerChange }
  ];
  functionProperties.forEach(({ name, value }) => {
    if (value && typeof value === "function") {
      functionProps.push(`"${name}": ${value.toString()}`);
    }
  });
  const configString = JSON.stringify(restConfig, null, 2).split(`
`).map((line, index) => index === 0 ? line : "      " + line).join(`
`).replace(/\s*}$/, "");
  const functionPropsString = functionProps.length ? `,
        ${functionProps.join(`,
        `)}
      }` : "}";
  return `
    <!-- Load the Script -->
    <script src="${cdn ?? "https://cdn.jsdelivr.net/npm/@scalar/api-reference"}"></script>

    <!-- Initialize the Scalar API Reference -->
    <script type="text/javascript">
      Scalar.createApiReference('#app', ${configString}${functionPropsString})
    </script>`;
}
var getConfiguration = (givenConfiguration) => {
  const configuration = {
    ...givenConfiguration
  };
  if (typeof configuration.content === "function") {
    configuration.content = configuration.content();
  }
  if (configuration.content && configuration.url) {
    delete configuration.content;
  }
  return configuration;
};
// node_modules/@scalar/hono-api-reference/dist/scalar.js
var DEFAULT_CONFIGURATION = {
  _integration: "hono"
};
var customTheme = `
.light-mode {
  color-scheme: light;
  --scalar-color-1: #2a2f45;
  --scalar-color-2: #757575;
  --scalar-color-3: #8e8e8e;
  --scalar-color-disabled: #b4b1b1;
  --scalar-color-ghost: #a7a7a7;
  --scalar-color-accent: #0099ff;
  --scalar-background-1: #fff;
  --scalar-background-2: #f6f6f6;
  --scalar-background-3: #e7e7e7;
  --scalar-background-4: rgba(0, 0, 0, 0.06);
  --scalar-background-accent: #8ab4f81f;

  --scalar-border-color: rgba(0, 0, 0, 0.1);
  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);
  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);
  --scalar-lifted-brightness: 1;
  --scalar-backdrop-brightness: 1;

  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);
  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px,
    rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;

  --scalar-button-1: rgb(49 53 56);
  --scalar-button-1-color: #fff;
  --scalar-button-1-hover: rgb(28 31 33);

  --scalar-color-green: #069061;
  --scalar-color-red: #ef0006;
  --scalar-color-yellow: #edbe20;
  --scalar-color-blue: #0082d0;
  --scalar-color-orange: #fb892c;
  --scalar-color-purple: #5203d1;
}

.dark-mode {
  color-scheme: dark;
  --scalar-color-1: rgba(255, 255, 245, .86);
  --scalar-color-2: rgba(255, 255, 245, .6);
  --scalar-color-3: rgba(255, 255, 245, .38);
  --scalar-color-disabled: rgba(255, 255, 245, .25);
  --scalar-color-ghost: rgba(255, 255, 245, .25);
  --scalar-color-accent: #e36002;
  --scalar-background-1: #1e1e20;
  --scalar-background-2: #2a2a2a;
  --scalar-background-3: #505053;
  --scalar-background-4: rgba(255, 255, 255, 0.06);
  --scalar-background-accent: #e360021f;

  --scalar-border-color: rgba(255, 255, 255, 0.1);
  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);
  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);
  --scalar-lifted-brightness: 1.45;
  --scalar-backdrop-brightness: 0.5;

  --scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);
  --scalar-shadow-2: rgba(15, 15, 15, 0.2) 0px 3px 6px,
    rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);

  --scalar-button-1: #f6f6f6;
  --scalar-button-1-color: #000;
  --scalar-button-1-hover: #e7e7e7;

  --scalar-color-green: #3dd68c;
  --scalar-color-red: #f66f81;
  --scalar-color-yellow: #f9b44e;
  --scalar-color-blue: #5c73e7;
  --scalar-color-orange: #ff8d4d;
  --scalar-color-purple: #b191f9;
}
/* Sidebar */
.light-mode .t-doc__sidebar {
  --scalar-sidebar-background-1: var(--scalar-background-1);
  --scalar-sidebar-item-hover-color: currentColor;
  --scalar-sidebar-item-hover-background: var(--scalar-background-2);
  --scalar-sidebar-item-active-background: var(--scalar-background-accent);
  --scalar-sidebar-border-color: var(--scalar-border-color);
  --scalar-sidebar-color-1: var(--scalar-color-1);
  --scalar-sidebar-color-2: var(--scalar-color-2);
  --scalar-sidebar-color-active: var(--scalar-color-accent);
  --scalar-sidebar-search-background: var(--scalar-background-2);
  --scalar-sidebar-search-border-color: var(--scalar-sidebar-border-color);
  --scalar-sidebar-search-color: var(--scalar-color-3);
}

.dark-mode .sidebar {
  --scalar-sidebar-background-1: #161618;
  --scalar-sidebar-item-hover-color: var(--scalar-color-accent);
  --scalar-sidebar-item-hover-background: transparent;
  --scalar-sidebar-item-active-background: transparent;
  --scalar-sidebar-border-color: transparent;
  --scalar-sidebar-color-1: var(--scalar-color-1);
  --scalar-sidebar-color-2: var(--scalar-color-2);
  --scalar-sidebar-color-active: var(--scalar-color-accent);
  --scalar-sidebar-search-background: #252529;
  --scalar-sidebar-search-border-color: transparent;
  --scalar-sidebar-search-color: var(--scalar-color-3);
}
`;
var Scalar = (givenConfiguration) => {
  const configuration = {
    ...DEFAULT_CONFIGURATION,
    ...givenConfiguration
  };
  return async (c) => c.html(`${getHtmlDocument(configuration, customTheme)}`);
};
// node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  return async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
  };
};

// src/routes/ina-province.ts
var import_edge2 = __toESM(require_edge3(), 1);

// src/modules/province/schema.ts
var ProvinceSchema = z.object({
  id: z.number(),
  code: z.number(),
  slug: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});
var ProvinceListSchema = z.array(ProvinceSchema);

// src/routes/ina-province.ts
var prisma2 = new import_edge2.PrismaClient;
var inaProvinceRoute = new OpenAPIHono;
inaProvinceRoute.openapi(createRoute({
  method: "get",
  path: "/",
  tags: ["Province"],
  description: "Get all Provinces",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: ProvinceListSchema
        }
      },
      description: "Get all provinces"
    }
  }
}), async (c) => {
  const provinces = await prisma2.province.findMany();
  return c.json(provinces);
});
inaProvinceRoute.openapi(createRoute({
  method: "get",
  path: "/{slug}",
  tags: ["Province"],
  description: "Get province by slug",
  request: { params: ParamSlugSchema },
  responses: {
    200: {
      content: { "application/json": { schema: ProvinceSchema } },
      description: "Successfully get province by slug"
    },
    404: {
      description: "Province not found"
    }
  }
}), async (c) => {
  const { slug } = c.req.valid("param");
  const province = await prisma2.province.findUnique({
    where: { slug }
  });
  if (!province) {
    return c.json({ message: "Province not found" }, 404);
  }
  return c.json(province);
});
inaProvinceRoute.openapi(createRoute({
  method: "get",
  path: "/code/{code}",
  tags: ["Province"],
  description: "Get province by code",
  request: { params: ParamCodeSchema },
  responses: {
    200: {
      content: { "application/json": { schema: ProvinceSchema } },
      description: "Successfully get Province by code"
    },
    404: {
      description: "Province not found"
    }
  }
}), async (c) => {
  const { code } = c.req.valid("param");
  const province = await prisma2.province.findUnique({
    where: { code }
  });
  if (!province) {
    return c.json({ message: "Province not found" }, 404);
  }
  return c.json(province);
});
inaProvinceRoute.openapi(createRoute({
  method: "get",
  path: "/id/{id}",
  tags: ["Province"],
  description: "Get province by Id",
  request: { params: ParamIdSchema },
  responses: {
    200: {
      content: { "application/json": { schema: ProvinceSchema } },
      description: "Successfully get Province by Id"
    },
    404: {
      description: "Province not found"
    }
  }
}), async (c) => {
  const { id } = c.req.valid("param");
  const province = await prisma2.province.findUnique({
    where: { id }
  });
  if (!province) {
    return c.json({ message: "Province not found" }, 404);
  }
  return c.json(province);
});

// src/index.ts
var app = new OpenAPIHono;
app.use(cors());
app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    title: "INA Zone API",
    description: `OpenAPI for Indonesian Provinces and Cities. 

This API provides information about 38 provinces and 514 cities in Indonesia. 

The API is built using Bun, TypeScript, and Prisma.`,
    contact: {
      url: "https://github.com/indahmutiah/ina-zone",
      name: "Indah Mutiah MZ"
    },
    version: "1.0.0"
  }
});
app.route("/api/province", inaProvinceRoute);
app.route("/api/city", inaCityRoute);
app.get("/", Scalar({ url: "/openapi.json" }));
var src_default = app;
export {
  src_default as default
};
