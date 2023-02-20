var cr = (e, n, t) => {
  if (!n.has(e))
    throw TypeError("Cannot " + t);
};
var he = (e, n, t) => (cr(e, n, "read from private field"), t ? t.call(e) : n.get(e)), $t = (e, n, t) => {
  if (n.has(e))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(e) : n.set(e, t);
}, pn = (e, n, t, i) => (cr(e, n, "write to private field"), i ? i.call(e, t) : n.set(e, t), t);
var ur = (e, n, t) => (cr(e, n, "access private method"), t);
const $f = {
  test: /site\.domain/,
  fn() {
    console.log("domain init");
  }
}, jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: $f
}, Symbol.toStringTag, { value: "Module" })), Rn = () => !!window.__0x_jerry_dev__, Hf = (e) => {
  Rn() && e();
};
function wo(e, n) {
  const t = /* @__PURE__ */ Object.create(null), i = e.split(",");
  for (let r = 0; r < i.length; r++)
    t[i[r]] = !0;
  return n ? (r) => !!t[r.toLowerCase()] : (r) => !!t[r];
}
function mo(e) {
  if (j(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++) {
      const i = e[t], r = ce(i) ? Wf(i) : mo(i);
      if (r)
        for (const o in r)
          n[o] = r[o];
    }
    return n;
  } else {
    if (ce(e))
      return e;
    if (re(e))
      return e;
  }
}
const Zf = /;(?![^(]*\))/g, Kf = /:([^]+)/, qf = /\/\*.*?\*\//gs;
function Wf(e) {
  const n = {};
  return e.replace(qf, "").split(Zf).forEach((t) => {
    if (t) {
      const i = t.split(Kf);
      i.length > 1 && (n[i[0].trim()] = i[1].trim());
    }
  }), n;
}
function Gn(e) {
  let n = "";
  if (ce(e))
    n = e;
  else if (j(e))
    for (let t = 0; t < e.length; t++) {
      const i = Gn(e[t]);
      i && (n += i + " ");
    }
  else if (re(e))
    for (const t in e)
      e[t] && (n += t + " ");
  return n.trim();
}
const Yf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vf = /* @__PURE__ */ wo(Yf);
function Ml(e) {
  return !!e || e === "";
}
function Jf(e, n) {
  if (e.length !== n.length)
    return !1;
  let t = !0;
  for (let i = 0; t && i < e.length; i++)
    t = $i(e[i], n[i]);
  return t;
}
function $i(e, n) {
  if (e === n)
    return !0;
  let t = ns(e), i = ns(n);
  if (t || i)
    return t && i ? e.getTime() === n.getTime() : !1;
  if (t = Mn(e), i = Mn(n), t || i)
    return e === n;
  if (t = j(e), i = j(n), t || i)
    return t && i ? Jf(e, n) : !1;
  if (t = re(e), i = re(n), t || i) {
    if (!t || !i)
      return !1;
    const r = Object.keys(e).length, o = Object.keys(n).length;
    if (r !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), f = n.hasOwnProperty(s);
      if (l && !f || !l && f || !$i(e[s], n[s]))
        return !1;
    }
  }
  return String(e) === String(n);
}
function Pl(e, n) {
  return e.findIndex((t) => $i(t, n));
}
const ee = {}, Zt = [], Le = () => {
}, Xf = () => !1, Qf = /^on[^a-z]/, ji = (e) => Qf.test(e), yo = (e) => e.startsWith("onUpdate:"), ye = Object.assign, vo = (e, n) => {
  const t = e.indexOf(n);
  t > -1 && e.splice(t, 1);
}, Gf = Object.prototype.hasOwnProperty, W = (e, n) => Gf.call(e, n), j = Array.isArray, xn = (e) => ei(e) === "[object Map]", xo = (e) => ei(e) === "[object Set]", ns = (e) => ei(e) === "[object Date]", H = (e) => typeof e == "function", ce = (e) => typeof e == "string", Mn = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Nl = (e) => re(e) && H(e.then) && H(e.catch), ec = Object.prototype.toString, ei = (e) => ec.call(e), tc = (e) => ei(e).slice(8, -1), nc = (e) => ei(e) === "[object Object]", Eo = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, xi = /* @__PURE__ */ wo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Hi = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (t) => n[t] || (n[t] = e(t));
}, ic = /-(\w)/g, Je = Hi((e) => e.replace(ic, (n, t) => t ? t.toUpperCase() : "")), rc = /\B([A-Z])/g, sn = Hi((e) => e.replace(rc, "-$1").toLowerCase()), Zi = Hi((e) => e.charAt(0).toUpperCase() + e.slice(1)), dr = Hi((e) => e ? `on${Zi(e)}` : ""), Pn = (e, n) => !Object.is(e, n), Ei = (e, n) => {
  for (let t = 0; t < e.length; t++)
    e[t](n);
}, Si = (e, n, t) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, Fr = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let is;
const oc = () => is || (is = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Se;
class sc {
  constructor(n = !1) {
    this.detached = n, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Se, !n && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(n) {
    if (this._active) {
      const t = Se;
      try {
        return Se = this, n();
      } finally {
        Se = t;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Se = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Se = this.parent;
  }
  stop(n) {
    if (this._active) {
      let t, i;
      for (t = 0, i = this.effects.length; t < i; t++)
        this.effects[t].stop();
      for (t = 0, i = this.cleanups.length; t < i; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0, i = this.scopes.length; t < i; t++)
          this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !n) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function lc(e, n = Se) {
  n && n.active && n.effects.push(e);
}
function zl() {
  return Se;
}
function ac(e) {
  Se && Se.cleanups.push(e);
}
const Ao = (e) => {
  const n = new Set(e);
  return n.w = 0, n.n = 0, n;
}, Dl = (e) => (e.w & bt) > 0, Ll = (e) => (e.n & bt) > 0, fc = ({ deps: e }) => {
  if (e.length)
    for (let n = 0; n < e.length; n++)
      e[n].w |= bt;
}, cc = (e) => {
  const { deps: n } = e;
  if (n.length) {
    let t = 0;
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      Dl(r) && !Ll(r) ? r.delete(e) : n[t++] = r, r.w &= ~bt, r.n &= ~bt;
    }
    n.length = t;
  }
}, Ur = /* @__PURE__ */ new WeakMap();
let mn = 0, bt = 1;
const Br = 30;
let ze;
const Mt = Symbol(""), $r = Symbol("");
class ko {
  constructor(n, t = null, i) {
    this.fn = n, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, lc(this, i);
  }
  run() {
    if (!this.active)
      return this.fn();
    let n = ze, t = ut;
    for (; n; ) {
      if (n === this)
        return;
      n = n.parent;
    }
    try {
      return this.parent = ze, ze = this, ut = !0, bt = 1 << ++mn, mn <= Br ? fc(this) : rs(this), this.fn();
    } finally {
      mn <= Br && cc(this), bt = 1 << --mn, ze = this.parent, ut = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ze === this ? this.deferStop = !0 : this.active && (rs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function rs(e) {
  const { deps: n } = e;
  if (n.length) {
    for (let t = 0; t < n.length; t++)
      n[t].delete(e);
    n.length = 0;
  }
}
let ut = !0;
const Fl = [];
function ln() {
  Fl.push(ut), ut = !1;
}
function an() {
  const e = Fl.pop();
  ut = e === void 0 ? !0 : e;
}
function Ee(e, n, t) {
  if (ut && ze) {
    let i = Ur.get(e);
    i || Ur.set(e, i = /* @__PURE__ */ new Map());
    let r = i.get(t);
    r || i.set(t, r = Ao()), Ul(r);
  }
}
function Ul(e, n) {
  let t = !1;
  mn <= Br ? Ll(e) || (e.n |= bt, t = !Dl(e)) : t = !e.has(ze), t && (e.add(ze), ze.deps.push(e));
}
function it(e, n, t, i, r, o) {
  const s = Ur.get(e);
  if (!s)
    return;
  let l = [];
  if (n === "clear")
    l = [...s.values()];
  else if (t === "length" && j(e)) {
    const f = Number(i);
    s.forEach((a, c) => {
      (c === "length" || c >= f) && l.push(a);
    });
  } else
    switch (t !== void 0 && l.push(s.get(t)), n) {
      case "add":
        j(e) ? Eo(t) && l.push(s.get("length")) : (l.push(s.get(Mt)), xn(e) && l.push(s.get($r)));
        break;
      case "delete":
        j(e) || (l.push(s.get(Mt)), xn(e) && l.push(s.get($r)));
        break;
      case "set":
        xn(e) && l.push(s.get(Mt));
        break;
    }
  if (l.length === 1)
    l[0] && jr(l[0]);
  else {
    const f = [];
    for (const a of l)
      a && f.push(...a);
    jr(Ao(f));
  }
}
function jr(e, n) {
  const t = j(e) ? e : [...e];
  for (const i of t)
    i.computed && os(i);
  for (const i of t)
    i.computed || os(i);
}
function os(e, n) {
  (e !== ze || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const uc = /* @__PURE__ */ wo("__proto__,__v_isRef,__isVue"), Bl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Mn)
), dc = /* @__PURE__ */ To(), hc = /* @__PURE__ */ To(!1, !0), _c = /* @__PURE__ */ To(!0), ss = /* @__PURE__ */ pc();
function pc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((n) => {
    e[n] = function(...t) {
      const i = V(this);
      for (let o = 0, s = this.length; o < s; o++)
        Ee(i, "get", o + "");
      const r = i[n](...t);
      return r === -1 || r === !1 ? i[n](...t.map(V)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((n) => {
    e[n] = function(...t) {
      ln();
      const i = V(this)[n].apply(this, t);
      return an(), i;
    };
  }), e;
}
function gc(e) {
  const n = V(this);
  return Ee(n, "has", e), n.hasOwnProperty(e);
}
function To(e = !1, n = !1) {
  return function(i, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return n;
    if (r === "__v_raw" && o === (e ? n ? Mc : Kl : n ? Zl : Hl).get(i))
      return i;
    const s = j(i);
    if (!e) {
      if (s && W(ss, r))
        return Reflect.get(ss, r, o);
      if (r === "hasOwnProperty")
        return gc;
    }
    const l = Reflect.get(i, r, o);
    return (Mn(r) ? Bl.has(r) : uc(r)) || (e || Ee(i, "get", r), n) ? l : ge(l) ? s && Eo(r) ? l : l.value : re(l) ? e ? ql(l) : fn(l) : l;
  };
}
const bc = /* @__PURE__ */ $l(), wc = /* @__PURE__ */ $l(!0);
function $l(e = !1) {
  return function(t, i, r, o) {
    let s = t[i];
    if (Vt(s) && ge(s) && !ge(r))
      return !1;
    if (!e && (!Ii(r) && !Vt(r) && (s = V(s), r = V(r)), !j(t) && ge(s) && !ge(r)))
      return s.value = r, !0;
    const l = j(t) && Eo(i) ? Number(i) < t.length : W(t, i), f = Reflect.set(t, i, r, o);
    return t === V(o) && (l ? Pn(r, s) && it(t, "set", i, r) : it(t, "add", i, r)), f;
  };
}
function mc(e, n) {
  const t = W(e, n);
  e[n];
  const i = Reflect.deleteProperty(e, n);
  return i && t && it(e, "delete", n, void 0), i;
}
function yc(e, n) {
  const t = Reflect.has(e, n);
  return (!Mn(n) || !Bl.has(n)) && Ee(e, "has", n), t;
}
function vc(e) {
  return Ee(e, "iterate", j(e) ? "length" : Mt), Reflect.ownKeys(e);
}
const jl = {
  get: dc,
  set: bc,
  deleteProperty: mc,
  has: yc,
  ownKeys: vc
}, xc = {
  get: _c,
  set(e, n) {
    return !0;
  },
  deleteProperty(e, n) {
    return !0;
  }
}, Ec = /* @__PURE__ */ ye({}, jl, {
  get: hc,
  set: wc
}), So = (e) => e, Ki = (e) => Reflect.getPrototypeOf(e);
function fi(e, n, t = !1, i = !1) {
  e = e.__v_raw;
  const r = V(e), o = V(n);
  t || (n !== o && Ee(r, "get", n), Ee(r, "get", o));
  const { has: s } = Ki(r), l = i ? So : t ? Oo : Nn;
  if (s.call(r, n))
    return l(e.get(n));
  if (s.call(r, o))
    return l(e.get(o));
  e !== r && e.get(n);
}
function ci(e, n = !1) {
  const t = this.__v_raw, i = V(t), r = V(e);
  return n || (e !== r && Ee(i, "has", e), Ee(i, "has", r)), e === r ? t.has(e) : t.has(e) || t.has(r);
}
function ui(e, n = !1) {
  return e = e.__v_raw, !n && Ee(V(e), "iterate", Mt), Reflect.get(e, "size", e);
}
function ls(e) {
  e = V(e);
  const n = V(this);
  return Ki(n).has.call(n, e) || (n.add(e), it(n, "add", e, e)), this;
}
function as(e, n) {
  n = V(n);
  const t = V(this), { has: i, get: r } = Ki(t);
  let o = i.call(t, e);
  o || (e = V(e), o = i.call(t, e));
  const s = r.call(t, e);
  return t.set(e, n), o ? Pn(n, s) && it(t, "set", e, n) : it(t, "add", e, n), this;
}
function fs(e) {
  const n = V(this), { has: t, get: i } = Ki(n);
  let r = t.call(n, e);
  r || (e = V(e), r = t.call(n, e)), i && i.call(n, e);
  const o = n.delete(e);
  return r && it(n, "delete", e, void 0), o;
}
function cs() {
  const e = V(this), n = e.size !== 0, t = e.clear();
  return n && it(e, "clear", void 0, void 0), t;
}
function di(e, n) {
  return function(i, r) {
    const o = this, s = o.__v_raw, l = V(s), f = n ? So : e ? Oo : Nn;
    return !e && Ee(l, "iterate", Mt), s.forEach((a, c) => i.call(r, f(a), f(c), o));
  };
}
function hi(e, n, t) {
  return function(...i) {
    const r = this.__v_raw, o = V(r), s = xn(o), l = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, a = r[e](...i), c = t ? So : n ? Oo : Nn;
    return !n && Ee(o, "iterate", f ? $r : Mt), {
      // iterator protocol
      next() {
        const { value: g, done: u } = a.next();
        return u ? { value: g, done: u } : {
          value: l ? [c(g[0]), c(g[1])] : c(g),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ot(e) {
  return function(...n) {
    return e === "delete" ? !1 : this;
  };
}
function Ac() {
  const e = {
    get(o) {
      return fi(this, o);
    },
    get size() {
      return ui(this);
    },
    has: ci,
    add: ls,
    set: as,
    delete: fs,
    clear: cs,
    forEach: di(!1, !1)
  }, n = {
    get(o) {
      return fi(this, o, !1, !0);
    },
    get size() {
      return ui(this);
    },
    has: ci,
    add: ls,
    set: as,
    delete: fs,
    clear: cs,
    forEach: di(!1, !0)
  }, t = {
    get(o) {
      return fi(this, o, !0);
    },
    get size() {
      return ui(this, !0);
    },
    has(o) {
      return ci.call(this, o, !0);
    },
    add: ot(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ot(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ot(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ot(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: di(!0, !1)
  }, i = {
    get(o) {
      return fi(this, o, !0, !0);
    },
    get size() {
      return ui(this, !0);
    },
    has(o) {
      return ci.call(this, o, !0);
    },
    add: ot(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ot(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ot(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ot(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: di(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = hi(o, !1, !1), t[o] = hi(o, !0, !1), n[o] = hi(o, !1, !0), i[o] = hi(o, !0, !0);
  }), [
    e,
    t,
    n,
    i
  ];
}
const [kc, Tc, Sc, Ic] = /* @__PURE__ */ Ac();
function Io(e, n) {
  const t = n ? e ? Ic : Sc : e ? Tc : kc;
  return (i, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(W(t, r) && r in i ? t : i, r, o);
}
const Cc = {
  get: /* @__PURE__ */ Io(!1, !1)
}, Oc = {
  get: /* @__PURE__ */ Io(!1, !0)
}, Rc = {
  get: /* @__PURE__ */ Io(!0, !1)
}, Hl = /* @__PURE__ */ new WeakMap(), Zl = /* @__PURE__ */ new WeakMap(), Kl = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap();
function Pc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Nc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pc(tc(e));
}
function fn(e) {
  return Vt(e) ? e : Co(e, !1, jl, Cc, Hl);
}
function zc(e) {
  return Co(e, !1, Ec, Oc, Zl);
}
function ql(e) {
  return Co(e, !0, xc, Rc, Kl);
}
function Co(e, n, t, i, r) {
  if (!re(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const s = Nc(e);
  if (s === 0)
    return e;
  const l = new Proxy(e, s === 2 ? i : t);
  return r.set(e, l), l;
}
function Kt(e) {
  return Vt(e) ? Kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Vt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ii(e) {
  return !!(e && e.__v_isShallow);
}
function Wl(e) {
  return Kt(e) || Vt(e);
}
function V(e) {
  const n = e && e.__v_raw;
  return n ? V(n) : e;
}
function Yl(e) {
  return Si(e, "__v_skip", !0), e;
}
const Nn = (e) => re(e) ? fn(e) : e, Oo = (e) => re(e) ? ql(e) : e;
function Vl(e) {
  ut && ze && (e = V(e), Ul(e.dep || (e.dep = Ao())));
}
function Jl(e, n) {
  e = V(e);
  const t = e.dep;
  t && jr(t);
}
function ge(e) {
  return !!(e && e.__v_isRef === !0);
}
function Dc(e) {
  return Lc(e, !1);
}
function Lc(e, n) {
  return ge(e) ? e : new Fc(e, n);
}
class Fc {
  constructor(n, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? n : V(n), this._value = t ? n : Nn(n);
  }
  get value() {
    return Vl(this), this._value;
  }
  set value(n) {
    const t = this.__v_isShallow || Ii(n) || Vt(n);
    n = t ? n : V(n), Pn(n, this._rawValue) && (this._rawValue = n, this._value = t ? n : Nn(n), Jl(this));
  }
}
function ne(e) {
  return ge(e) ? e.value : e;
}
const Uc = {
  get: (e, n, t) => ne(Reflect.get(e, n, t)),
  set: (e, n, t, i) => {
    const r = e[n];
    return ge(r) && !ge(t) ? (r.value = t, !0) : Reflect.set(e, n, t, i);
  }
};
function Xl(e) {
  return Kt(e) ? e : new Proxy(e, Uc);
}
var Ql;
class Bc {
  constructor(n, t, i, r) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this[Ql] = !1, this._dirty = !0, this.effect = new ko(n, () => {
      this._dirty || (this._dirty = !0, Jl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = i;
  }
  get value() {
    const n = V(this);
    return Vl(n), (n._dirty || !n._cacheable) && (n._dirty = !1, n._value = n.effect.run()), n._value;
  }
  set value(n) {
    this._setter(n);
  }
}
Ql = "__v_isReadonly";
function $c(e, n, t = !1) {
  let i, r;
  const o = H(e);
  return o ? (i = e, r = Le) : (i = e.get, r = e.set), new Bc(i, r, o || !r, t);
}
function dt(e, n, t, i) {
  let r;
  try {
    r = i ? e(...i) : e();
  } catch (o) {
    qi(o, n, t);
  }
  return r;
}
function Fe(e, n, t, i) {
  if (H(e)) {
    const o = dt(e, n, t, i);
    return o && Nl(o) && o.catch((s) => {
      qi(s, n, t);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(Fe(e[o], n, t, i));
  return r;
}
function qi(e, n, t, i = !0) {
  const r = n ? n.vnode : null;
  if (n) {
    let o = n.parent;
    const s = n.proxy, l = t;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let c = 0; c < a.length; c++)
          if (a[c](e, s, l) === !1)
            return;
      }
      o = o.parent;
    }
    const f = n.appContext.config.errorHandler;
    if (f) {
      dt(f, null, 10, [e, s, l]);
      return;
    }
  }
  jc(e, t, r, i);
}
function jc(e, n, t, i = !0) {
  console.error(e);
}
let zn = !1, Hr = !1;
const _e = [];
let Ke = 0;
const qt = [];
let et = null, kt = 0;
const Gl = /* @__PURE__ */ Promise.resolve();
let Ro = null;
function Hc(e) {
  const n = Ro || Gl;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function Zc(e) {
  let n = Ke + 1, t = _e.length;
  for (; n < t; ) {
    const i = n + t >>> 1;
    Dn(_e[i]) < e ? n = i + 1 : t = i;
  }
  return n;
}
function Mo(e) {
  (!_e.length || !_e.includes(e, zn && e.allowRecurse ? Ke + 1 : Ke)) && (e.id == null ? _e.push(e) : _e.splice(Zc(e.id), 0, e), ea());
}
function ea() {
  !zn && !Hr && (Hr = !0, Ro = Gl.then(na));
}
function Kc(e) {
  const n = _e.indexOf(e);
  n > Ke && _e.splice(n, 1);
}
function qc(e) {
  j(e) ? qt.push(...e) : (!et || !et.includes(e, e.allowRecurse ? kt + 1 : kt)) && qt.push(e), ea();
}
function us(e, n = zn ? Ke + 1 : 0) {
  for (; n < _e.length; n++) {
    const t = _e[n];
    t && t.pre && (_e.splice(n, 1), n--, t());
  }
}
function ta(e) {
  if (qt.length) {
    const n = [...new Set(qt)];
    if (qt.length = 0, et) {
      et.push(...n);
      return;
    }
    for (et = n, et.sort((t, i) => Dn(t) - Dn(i)), kt = 0; kt < et.length; kt++)
      et[kt]();
    et = null, kt = 0;
  }
}
const Dn = (e) => e.id == null ? 1 / 0 : e.id, Wc = (e, n) => {
  const t = Dn(e) - Dn(n);
  if (t === 0) {
    if (e.pre && !n.pre)
      return -1;
    if (n.pre && !e.pre)
      return 1;
  }
  return t;
};
function na(e) {
  Hr = !1, zn = !0, _e.sort(Wc);
  const n = Le;
  try {
    for (Ke = 0; Ke < _e.length; Ke++) {
      const t = _e[Ke];
      t && t.active !== !1 && dt(
        t,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    Ke = 0, _e.length = 0, ta(), zn = !1, Ro = null, (_e.length || qt.length) && na();
  }
}
function Yc(e, n, ...t) {
  if (e.isUnmounted)
    return;
  const i = e.vnode.props || ee;
  let r = t;
  const o = n.startsWith("update:"), s = o && n.slice(7);
  if (s && s in i) {
    const c = `${s === "modelValue" ? "model" : s}Modifiers`, { number: g, trim: u } = i[c] || ee;
    u && (r = t.map((h) => ce(h) ? h.trim() : h)), g && (r = t.map(Fr));
  }
  let l, f = i[l = dr(n)] || // also try camelCase event handler (#2249)
  i[l = dr(Je(n))];
  !f && o && (f = i[l = dr(sn(n))]), f && Fe(f, e, 6, r);
  const a = i[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Fe(a, e, 6, r);
  }
}
function ia(e, n, t = !1) {
  const i = n.emitsCache, r = i.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let s = {}, l = !1;
  if (!H(e)) {
    const f = (a) => {
      const c = ia(a, n, !0);
      c && (l = !0, ye(s, c));
    };
    !t && n.mixins.length && n.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !l ? (re(e) && i.set(e, null), null) : (j(o) ? o.forEach((f) => s[f] = null) : ye(s, o), re(e) && i.set(e, s), s);
}
function Wi(e, n) {
  return !e || !ji(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), W(e, n[0].toLowerCase() + n.slice(1)) || W(e, sn(n)) || W(e, n));
}
let de = null, Yi = null;
function Ci(e) {
  const n = de;
  return de = e, Yi = e && e.type.__scopeId || null, n;
}
function ra(e) {
  Yi = e;
}
function oa() {
  Yi = null;
}
function Vc(e, n = de, t) {
  if (!n || e._n)
    return e;
  const i = (...r) => {
    i._d && ys(-1);
    const o = Ci(n);
    let s;
    try {
      s = e(...r);
    } finally {
      Ci(o), i._d && ys(1);
    }
    return s;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function hr(e) {
  const { type: n, vnode: t, proxy: i, withProxy: r, props: o, propsOptions: [s], slots: l, attrs: f, emit: a, render: c, renderCache: g, data: u, setupState: h, ctx: b, inheritAttrs: T } = e;
  let P, y;
  const C = Ci(e);
  try {
    if (t.shapeFlag & 4) {
      const p = r || i;
      P = Ze(c.call(p, p, g, o, h, u, b)), y = f;
    } else {
      const p = n;
      P = Ze(p.length > 1 ? p(o, { attrs: f, slots: l, emit: a }) : p(
        o,
        null
        /* we know it doesn't need it */
      )), y = n.props ? f : Jc(f);
    }
  } catch (p) {
    Tn.length = 0, qi(
      p,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), P = We(wt);
  }
  let m = P;
  if (y && T !== !1) {
    const p = Object.keys(y), { shapeFlag: v } = m;
    p.length && v & 7 && (s && p.some(yo) && (y = Xc(y, s)), m = Jt(m, y));
  }
  return t.dirs && (m = Jt(m), m.dirs = m.dirs ? m.dirs.concat(t.dirs) : t.dirs), t.transition && (m.transition = t.transition), P = m, Ci(C), P;
}
const Jc = (e) => {
  let n;
  for (const t in e)
    (t === "class" || t === "style" || ji(t)) && ((n || (n = {}))[t] = e[t]);
  return n;
}, Xc = (e, n) => {
  const t = {};
  for (const i in e)
    (!yo(i) || !(i.slice(9) in n)) && (t[i] = e[i]);
  return t;
};
function Qc(e, n, t) {
  const { props: i, children: r, component: o } = e, { props: s, children: l, patchFlag: f } = n, a = o.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (t && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return i ? ds(i, s, a) : !!s;
    if (f & 8) {
      const c = n.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        const u = c[g];
        if (s[u] !== i[u] && !Wi(a, u))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : i === s ? !1 : i ? s ? ds(i, s, a) : !0 : !!s;
  return !1;
}
function ds(e, n, t) {
  const i = Object.keys(n);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < i.length; r++) {
    const o = i[r];
    if (n[o] !== e[o] && !Wi(t, o))
      return !0;
  }
  return !1;
}
function Gc({ vnode: e, parent: n }, t) {
  for (; n && n.subTree === e; )
    (e = n.vnode).el = t, n = n.parent;
}
const eu = (e) => e.__isSuspense;
function tu(e, n) {
  n && n.pendingBranch ? j(e) ? n.effects.push(...e) : n.effects.push(e) : qc(e);
}
function nu(e, n) {
  if (oe) {
    let t = oe.provides;
    const i = oe.parent && oe.parent.provides;
    i === t && (t = oe.provides = Object.create(i)), t[e] = n;
  }
}
function Ai(e, n, t = !1) {
  const i = oe || de;
  if (i) {
    const r = i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return t && H(n) ? n.call(i.proxy) : n;
  }
}
const _i = {};
function En(e, n, t) {
  return sa(e, n, t);
}
function sa(e, n, { immediate: t, deep: i, flush: r, onTrack: o, onTrigger: s } = ee) {
  const l = zl() === (oe == null ? void 0 : oe.scope) ? oe : null;
  let f, a = !1, c = !1;
  if (ge(e) ? (f = () => e.value, a = Ii(e)) : Kt(e) ? (f = () => e, i = !0) : j(e) ? (c = !0, a = e.some((m) => Kt(m) || Ii(m)), f = () => e.map((m) => {
    if (ge(m))
      return m.value;
    if (Kt(m))
      return It(m);
    if (H(m))
      return dt(
        m,
        l,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : H(e) ? n ? f = () => dt(
    e,
    l,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : f = () => {
    if (!(l && l.isUnmounted))
      return g && g(), Fe(e, l, 3, [u]);
  } : f = Le, n && i) {
    const m = f;
    f = () => It(m());
  }
  let g, u = (m) => {
    g = y.onStop = () => {
      dt(
        m,
        l,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, h;
  if (Fn)
    if (u = Le, n ? t && Fe(n, l, 3, [
      f(),
      c ? [] : void 0,
      u
    ]) : f(), r === "sync") {
      const m = Qu();
      h = m.__watcherHandles || (m.__watcherHandles = []);
    } else
      return Le;
  let b = c ? new Array(e.length).fill(_i) : _i;
  const T = () => {
    if (y.active)
      if (n) {
        const m = y.run();
        (i || a || (c ? m.some((p, v) => Pn(p, b[v])) : Pn(m, b))) && (g && g(), Fe(n, l, 3, [
          m,
          // pass undefined as the old value when it's changed for the first time
          b === _i ? void 0 : c && b[0] === _i ? [] : b,
          u
        ]), b = m);
      } else
        y.run();
  };
  T.allowRecurse = !!n;
  let P;
  r === "sync" ? P = T : r === "post" ? P = () => ve(T, l && l.suspense) : (T.pre = !0, l && (T.id = l.uid), P = () => Mo(T));
  const y = new ko(f, P);
  n ? t ? T() : b = y.run() : r === "post" ? ve(y.run.bind(y), l && l.suspense) : y.run();
  const C = () => {
    y.stop(), l && l.scope && vo(l.scope.effects, y);
  };
  return h && h.push(C), C;
}
function iu(e, n, t) {
  const i = this.proxy, r = ce(e) ? e.includes(".") ? la(i, e) : () => i[e] : e.bind(i, i);
  let o;
  H(n) ? o = n : (o = n.handler, t = n);
  const s = oe;
  Xt(this);
  const l = sa(r, o.bind(i), t);
  return s ? Xt(s) : Pt(), l;
}
function la(e, n) {
  const t = n.split(".");
  return () => {
    let i = e;
    for (let r = 0; r < t.length && i; r++)
      i = i[t[r]];
    return i;
  };
}
function It(e, n) {
  if (!re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), ge(e))
    It(e.value, n);
  else if (j(e))
    for (let t = 0; t < e.length; t++)
      It(e[t], n);
  else if (xo(e) || xn(e))
    e.forEach((t) => {
      It(t, n);
    });
  else if (nc(e))
    for (const t in e)
      It(e[t], n);
  return e;
}
function Dt(e) {
  return H(e) ? { setup: e, name: e.name } : e;
}
const An = (e) => !!e.type.__asyncLoader, aa = (e) => e.type.__isKeepAlive;
function ru(e, n) {
  fa(e, "a", n);
}
function ou(e, n) {
  fa(e, "da", n);
}
function fa(e, n, t = oe) {
  const i = e.__wdc || (e.__wdc = () => {
    let r = t;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Vi(n, i, t), t) {
    let r = t.parent;
    for (; r && r.parent; )
      aa(r.parent.vnode) && su(i, n, t, r), r = r.parent;
  }
}
function su(e, n, t, i) {
  const r = Vi(
    n,
    e,
    i,
    !0
    /* prepend */
  );
  ua(() => {
    vo(i[n], r);
  }, t);
}
function Vi(e, n, t = oe, i = !1) {
  if (t) {
    const r = t[e] || (t[e] = []), o = n.__weh || (n.__weh = (...s) => {
      if (t.isUnmounted)
        return;
      ln(), Xt(t);
      const l = Fe(n, t, e, s);
      return Pt(), an(), l;
    });
    return i ? r.unshift(o) : r.push(o), o;
  }
}
const rt = (e) => (n, t = oe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Fn || e === "sp") && Vi(e, (...i) => n(...i), t)
), lu = rt(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), ca = rt(
  "m"
  /* LifecycleHooks.MOUNTED */
), au = rt(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), fu = rt(
  "u"
  /* LifecycleHooks.UPDATED */
), cu = rt(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), ua = rt(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), uu = rt(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), du = rt(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), hu = rt(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function _u(e, n = oe) {
  Vi("ec", e, n);
}
function gn(e, n) {
  const t = de;
  if (t === null)
    return e;
  const i = Qi(t) || t.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < n.length; o++) {
    let [s, l, f, a = ee] = n[o];
    s && (H(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && It(l), r.push({
      dir: s,
      instance: i,
      value: l,
      oldValue: void 0,
      arg: f,
      modifiers: a
    }));
  }
  return e;
}
function xt(e, n, t, i) {
  const r = e.dirs, o = n && n.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    o && (l.oldValue = o[s].value);
    let f = l.dir[i];
    f && (ln(), Fe(f, t, 8, [
      e.el,
      l,
      e,
      n
    ]), an());
  }
}
const da = "components", ha = Symbol();
function pu(e) {
  return ce(e) ? gu(da, e, !1) || e : e || ha;
}
function gu(e, n, t = !0, i = !1) {
  const r = de || oe;
  if (r) {
    const o = r.type;
    if (e === da) {
      const l = Vu(
        o,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (l && (l === n || l === Je(n) || l === Zi(Je(n))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      hs(r[e] || o[e], n) || // global registration
      hs(r.appContext[e], n)
    );
    return !s && i ? o : s;
  }
}
function hs(e, n) {
  return e && (e[n] || e[Je(n)] || e[Zi(Je(n))]);
}
function bu(e, n, t = {}, i, r) {
  if (de.isCE || de.parent && An(de.parent) && de.parent.isCE)
    return n !== "default" && (t.name = n), We("slot", t, i && i());
  let o = e[n];
  o && o._c && (o._d = !1), pe();
  const s = o && _a(o(t)), l = ht(
    Ne,
    {
      key: t.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${n}`
    },
    s || (i ? i() : []),
    s && e._ === 1 ? 64 : -2
    /* PatchFlags.BAIL */
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function _a(e) {
  return e.some((n) => Aa(n) ? !(n.type === wt || n.type === Ne && !_a(n.children)) : !0) ? e : null;
}
const Zr = (e) => e ? Ta(e) ? Qi(e) || e.proxy : Zr(e.parent) : null, kn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ye(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Zr(e.parent),
    $root: (e) => Zr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Po(e),
    $forceUpdate: (e) => e.f || (e.f = () => Mo(e.update)),
    $nextTick: (e) => e.n || (e.n = Hc.bind(e.proxy)),
    $watch: (e) => iu.bind(e)
  })
), _r = (e, n) => e !== ee && !e.__isScriptSetup && W(e, n), wu = {
  get({ _: e }, n) {
    const { ctx: t, setupState: i, data: r, props: o, accessCache: s, type: l, appContext: f } = e;
    let a;
    if (n[0] !== "$") {
      const h = s[n];
      if (h !== void 0)
        switch (h) {
          case 1:
            return i[n];
          case 2:
            return r[n];
          case 4:
            return t[n];
          case 3:
            return o[n];
        }
      else {
        if (_r(i, n))
          return s[n] = 1, i[n];
        if (r !== ee && W(r, n))
          return s[n] = 2, r[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && W(a, n)
        )
          return s[n] = 3, o[n];
        if (t !== ee && W(t, n))
          return s[n] = 4, t[n];
        Kr && (s[n] = 0);
      }
    }
    const c = kn[n];
    let g, u;
    if (c)
      return n === "$attrs" && Ee(e, "get", n), c(e);
    if (
      // css module (injected by vue-loader)
      (g = l.__cssModules) && (g = g[n])
    )
      return g;
    if (t !== ee && W(t, n))
      return s[n] = 4, t[n];
    if (
      // global properties
      u = f.config.globalProperties, W(u, n)
    )
      return u[n];
  },
  set({ _: e }, n, t) {
    const { data: i, setupState: r, ctx: o } = e;
    return _r(r, n) ? (r[n] = t, !0) : i !== ee && W(i, n) ? (i[n] = t, !0) : W(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = t, !0);
  },
  has({ _: { data: e, setupState: n, accessCache: t, ctx: i, appContext: r, propsOptions: o } }, s) {
    let l;
    return !!t[s] || e !== ee && W(e, s) || _r(n, s) || (l = o[0]) && W(l, s) || W(i, s) || W(kn, s) || W(r.config.globalProperties, s);
  },
  defineProperty(e, n, t) {
    return t.get != null ? e._.accessCache[n] = 0 : W(t, "value") && this.set(e, n, t.value, null), Reflect.defineProperty(e, n, t);
  }
};
let Kr = !0;
function mu(e) {
  const n = Po(e), t = e.proxy, i = e.ctx;
  Kr = !1, n.beforeCreate && _s(
    n.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: o,
    methods: s,
    watch: l,
    provide: f,
    inject: a,
    // lifecycle
    created: c,
    beforeMount: g,
    mounted: u,
    beforeUpdate: h,
    updated: b,
    activated: T,
    deactivated: P,
    beforeDestroy: y,
    beforeUnmount: C,
    destroyed: m,
    unmounted: p,
    render: v,
    renderTracked: N,
    renderTriggered: A,
    errorCaptured: F,
    serverPrefetch: B,
    // public API
    expose: R,
    inheritAttrs: U,
    // assets
    components: ae,
    directives: ie,
    filters: be
  } = n;
  if (a && yu(a, i, null, e.appContext.config.unwrapInjectedRef), s)
    for (const X in s) {
      const Y = s[X];
      H(Y) && (i[X] = Y.bind(t));
    }
  if (r) {
    const X = r.call(t, t);
    re(X) && (e.data = fn(X));
  }
  if (Kr = !0, o)
    for (const X in o) {
      const Y = o[X], Ae = H(Y) ? Y.bind(t, t) : H(Y.get) ? Y.get.bind(t, t) : Le, Ft = !H(Y) && H(Y.set) ? Y.set.bind(t) : Le, vt = Ia({
        get: Ae,
        set: Ft
      });
      Object.defineProperty(i, X, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (Be) => vt.value = Be
      });
    }
  if (l)
    for (const X in l)
      pa(l[X], i, t, X);
  if (f) {
    const X = H(f) ? f.call(t) : f;
    Reflect.ownKeys(X).forEach((Y) => {
      nu(Y, X[Y]);
    });
  }
  c && _s(
    c,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function se(X, Y) {
    j(Y) ? Y.forEach((Ae) => X(Ae.bind(t))) : Y && X(Y.bind(t));
  }
  if (se(lu, g), se(ca, u), se(au, h), se(fu, b), se(ru, T), se(ou, P), se(_u, F), se(hu, N), se(du, A), se(cu, C), se(ua, p), se(uu, B), j(R))
    if (R.length) {
      const X = e.exposed || (e.exposed = {});
      R.forEach((Y) => {
        Object.defineProperty(X, Y, {
          get: () => t[Y],
          set: (Ae) => t[Y] = Ae
        });
      });
    } else
      e.exposed || (e.exposed = {});
  v && e.render === Le && (e.render = v), U != null && (e.inheritAttrs = U), ae && (e.components = ae), ie && (e.directives = ie);
}
function yu(e, n, t = Le, i = !1) {
  j(e) && (e = qr(e));
  for (const r in e) {
    const o = e[r];
    let s;
    re(o) ? "default" in o ? s = Ai(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : s = Ai(o.from || r) : s = Ai(o), ge(s) && i ? Object.defineProperty(n, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (l) => s.value = l
    }) : n[r] = s;
  }
}
function _s(e, n, t) {
  Fe(j(e) ? e.map((i) => i.bind(n.proxy)) : e.bind(n.proxy), n, t);
}
function pa(e, n, t, i) {
  const r = i.includes(".") ? la(t, i) : () => t[i];
  if (ce(e)) {
    const o = n[e];
    H(o) && En(r, o);
  } else if (H(e))
    En(r, e.bind(t));
  else if (re(e))
    if (j(e))
      e.forEach((o) => pa(o, n, t, i));
    else {
      const o = H(e.handler) ? e.handler.bind(t) : n[e.handler];
      H(o) && En(r, o, e);
    }
}
function Po(e) {
  const n = e.type, { mixins: t, extends: i } = n, { mixins: r, optionsCache: o, config: { optionMergeStrategies: s } } = e.appContext, l = o.get(n);
  let f;
  return l ? f = l : !r.length && !t && !i ? f = n : (f = {}, r.length && r.forEach((a) => Oi(f, a, s, !0)), Oi(f, n, s)), re(n) && o.set(n, f), f;
}
function Oi(e, n, t, i = !1) {
  const { mixins: r, extends: o } = n;
  o && Oi(e, o, t, !0), r && r.forEach((s) => Oi(e, s, t, !0));
  for (const s in n)
    if (!(i && s === "expose")) {
      const l = vu[s] || t && t[s];
      e[s] = l ? l(e[s], n[s]) : n[s];
    }
  return e;
}
const vu = {
  data: ps,
  props: At,
  emits: At,
  // objects
  methods: At,
  computed: At,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: At,
  directives: At,
  // watch
  watch: Eu,
  // provide / inject
  provide: ps,
  inject: xu
};
function ps(e, n) {
  return n ? e ? function() {
    return ye(H(e) ? e.call(this, this) : e, H(n) ? n.call(this, this) : n);
  } : n : e;
}
function xu(e, n) {
  return At(qr(e), qr(n));
}
function qr(e) {
  if (j(e)) {
    const n = {};
    for (let t = 0; t < e.length; t++)
      n[e[t]] = e[t];
    return n;
  }
  return e;
}
function we(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function At(e, n) {
  return e ? ye(ye(/* @__PURE__ */ Object.create(null), e), n) : n;
}
function Eu(e, n) {
  if (!e)
    return n;
  if (!n)
    return e;
  const t = ye(/* @__PURE__ */ Object.create(null), e);
  for (const i in n)
    t[i] = we(e[i], n[i]);
  return t;
}
function Au(e, n, t, i = !1) {
  const r = {}, o = {};
  Si(o, Xi, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ga(e, n, r, o);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  t ? e.props = i ? r : zc(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ku(e, n, t, i) {
  const { props: r, attrs: o, vnode: { patchFlag: s } } = e, l = V(r), [f] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const c = e.vnode.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        let u = c[g];
        if (Wi(e.emitsOptions, u))
          continue;
        const h = n[u];
        if (f)
          if (W(o, u))
            h !== o[u] && (o[u] = h, a = !0);
          else {
            const b = Je(u);
            r[b] = Wr(
              f,
              l,
              b,
              h,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          h !== o[u] && (o[u] = h, a = !0);
      }
    }
  } else {
    ga(e, n, r, o) && (a = !0);
    let c;
    for (const g in l)
      (!n || // for camelCase
      !W(n, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = sn(g)) === g || !W(n, c))) && (f ? t && // for camelCase
      (t[g] !== void 0 || // for kebab-case
      t[c] !== void 0) && (r[g] = Wr(
        f,
        l,
        g,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[g]);
    if (o !== l)
      for (const g in o)
        (!n || !W(n, g)) && (delete o[g], a = !0);
  }
  a && it(e, "set", "$attrs");
}
function ga(e, n, t, i) {
  const [r, o] = e.propsOptions;
  let s = !1, l;
  if (n)
    for (let f in n) {
      if (xi(f))
        continue;
      const a = n[f];
      let c;
      r && W(r, c = Je(f)) ? !o || !o.includes(c) ? t[c] = a : (l || (l = {}))[c] = a : Wi(e.emitsOptions, f) || (!(f in i) || a !== i[f]) && (i[f] = a, s = !0);
    }
  if (o) {
    const f = V(t), a = l || ee;
    for (let c = 0; c < o.length; c++) {
      const g = o[c];
      t[g] = Wr(r, f, g, a[g], e, !W(a, g));
    }
  }
  return s;
}
function Wr(e, n, t, i, r, o) {
  const s = e[t];
  if (s != null) {
    const l = W(s, "default");
    if (l && i === void 0) {
      const f = s.default;
      if (s.type !== Function && H(f)) {
        const { propsDefaults: a } = r;
        t in a ? i = a[t] : (Xt(r), i = a[t] = f.call(null, n), Pt());
      } else
        i = f;
    }
    s[
      0
      /* BooleanFlags.shouldCast */
    ] && (o && !l ? i = !1 : s[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (i === "" || i === sn(t)) && (i = !0));
  }
  return i;
}
function ba(e, n, t = !1) {
  const i = n.propsCache, r = i.get(e);
  if (r)
    return r;
  const o = e.props, s = {}, l = [];
  let f = !1;
  if (!H(e)) {
    const c = (g) => {
      f = !0;
      const [u, h] = ba(g, n, !0);
      ye(s, u), h && l.push(...h);
    };
    !t && n.mixins.length && n.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!o && !f)
    return re(e) && i.set(e, Zt), Zt;
  if (j(o))
    for (let c = 0; c < o.length; c++) {
      const g = Je(o[c]);
      gs(g) && (s[g] = ee);
    }
  else if (o)
    for (const c in o) {
      const g = Je(c);
      if (gs(g)) {
        const u = o[c], h = s[g] = j(u) || H(u) ? { type: u } : Object.assign({}, u);
        if (h) {
          const b = ms(Boolean, h.type), T = ms(String, h.type);
          h[
            0
            /* BooleanFlags.shouldCast */
          ] = b > -1, h[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = T < 0 || b < T, (b > -1 || W(h, "default")) && l.push(g);
        }
      }
    }
  const a = [s, l];
  return re(e) && i.set(e, a), a;
}
function gs(e) {
  return e[0] !== "$";
}
function bs(e) {
  const n = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return n ? n[2] : e === null ? "null" : "";
}
function ws(e, n) {
  return bs(e) === bs(n);
}
function ms(e, n) {
  return j(n) ? n.findIndex((t) => ws(t, e)) : H(n) && ws(n, e) ? 0 : -1;
}
const wa = (e) => e[0] === "_" || e === "$stable", No = (e) => j(e) ? e.map(Ze) : [Ze(e)], Tu = (e, n, t) => {
  if (n._n)
    return n;
  const i = Vc((...r) => No(n(...r)), t);
  return i._c = !1, i;
}, ma = (e, n, t) => {
  const i = e._ctx;
  for (const r in e) {
    if (wa(r))
      continue;
    const o = e[r];
    if (H(o))
      n[r] = Tu(r, o, i);
    else if (o != null) {
      const s = No(o);
      n[r] = () => s;
    }
  }
}, ya = (e, n) => {
  const t = No(n);
  e.slots.default = () => t;
}, Su = (e, n) => {
  if (e.vnode.shapeFlag & 32) {
    const t = n._;
    t ? (e.slots = V(n), Si(n, "_", t)) : ma(n, e.slots = {});
  } else
    e.slots = {}, n && ya(e, n);
  Si(e.slots, Xi, 1);
}, Iu = (e, n, t) => {
  const { vnode: i, slots: r } = e;
  let o = !0, s = ee;
  if (i.shapeFlag & 32) {
    const l = n._;
    l ? t && l === 1 ? o = !1 : (ye(r, n), !t && l === 1 && delete r._) : (o = !n.$stable, ma(n, r)), s = n;
  } else
    n && (ya(e, n), s = { default: 1 });
  if (o)
    for (const l in r)
      !wa(l) && !(l in s) && delete r[l];
};
function va() {
  return {
    app: null,
    config: {
      isNativeTag: Xf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Cu = 0;
function Ou(e, n) {
  return function(i, r = null) {
    H(i) || (i = Object.assign({}, i)), r != null && !re(r) && (r = null);
    const o = va(), s = /* @__PURE__ */ new Set();
    let l = !1;
    const f = o.app = {
      _uid: Cu++,
      _component: i,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Gu,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...c) {
        return s.has(a) || (a && H(a.install) ? (s.add(a), a.install(f, ...c)) : H(a) && (s.add(a), a(f, ...c))), f;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), f;
      },
      component(a, c) {
        return c ? (o.components[a] = c, f) : o.components[a];
      },
      directive(a, c) {
        return c ? (o.directives[a] = c, f) : o.directives[a];
      },
      mount(a, c, g) {
        if (!l) {
          const u = We(i, r);
          return u.appContext = o, c && n ? n(u, a) : e(u, a, g), l = !0, f._container = a, a.__vue_app__ = f, Qi(u.component) || u.component.proxy;
        }
      },
      unmount() {
        l && (e(null, f._container), delete f._container.__vue_app__);
      },
      provide(a, c) {
        return o.provides[a] = c, f;
      }
    };
    return f;
  };
}
function Yr(e, n, t, i, r = !1) {
  if (j(e)) {
    e.forEach((u, h) => Yr(u, n && (j(n) ? n[h] : n), t, i, r));
    return;
  }
  if (An(i) && !r)
    return;
  const o = i.shapeFlag & 4 ? Qi(i.component) || i.component.proxy : i.el, s = r ? null : o, { i: l, r: f } = e, a = n && n.r, c = l.refs === ee ? l.refs = {} : l.refs, g = l.setupState;
  if (a != null && a !== f && (ce(a) ? (c[a] = null, W(g, a) && (g[a] = null)) : ge(a) && (a.value = null)), H(f))
    dt(f, l, 12, [s, c]);
  else {
    const u = ce(f), h = ge(f);
    if (u || h) {
      const b = () => {
        if (e.f) {
          const T = u ? W(g, f) ? g[f] : c[f] : f.value;
          r ? j(T) && vo(T, o) : j(T) ? T.includes(o) || T.push(o) : u ? (c[f] = [o], W(g, f) && (g[f] = c[f])) : (f.value = [o], e.k && (c[e.k] = f.value));
        } else
          u ? (c[f] = s, W(g, f) && (g[f] = s)) : h && (f.value = s, e.k && (c[e.k] = s));
      };
      s ? (b.id = -1, ve(b, t)) : b();
    }
  }
}
const ve = tu;
function Ru(e) {
  return Mu(e);
}
function Mu(e, n) {
  const t = oc();
  t.__VUE__ = !0;
  const { insert: i, remove: r, patchProp: o, createElement: s, createText: l, createComment: f, setText: a, setElementText: c, parentNode: g, nextSibling: u, setScopeId: h = Le, insertStaticContent: b } = e, T = (d, _, w, E = null, x = null, I = null, M = !1, S = null, O = !!_.dynamicChildren) => {
    if (d === _)
      return;
    d && !bn(d, _) && (E = ai(d), Be(d, x, I, !0), d = null), _.patchFlag === -2 && (O = !1, _.dynamicChildren = null);
    const { type: k, ref: D, shapeFlag: z } = _;
    switch (k) {
      case Ji:
        P(d, _, w, E);
        break;
      case wt:
        y(d, _, w, E);
        break;
      case pr:
        d == null && C(_, w, E, M);
        break;
      case Ne:
        ae(d, _, w, E, x, I, M, S, O);
        break;
      default:
        z & 1 ? v(d, _, w, E, x, I, M, S, O) : z & 6 ? ie(d, _, w, E, x, I, M, S, O) : (z & 64 || z & 128) && k.process(d, _, w, E, x, I, M, S, O, Ut);
    }
    D != null && x && Yr(D, d && d.ref, I, _ || d, !_);
  }, P = (d, _, w, E) => {
    if (d == null)
      i(_.el = l(_.children), w, E);
    else {
      const x = _.el = d.el;
      _.children !== d.children && a(x, _.children);
    }
  }, y = (d, _, w, E) => {
    d == null ? i(_.el = f(_.children || ""), w, E) : _.el = d.el;
  }, C = (d, _, w, E) => {
    [d.el, d.anchor] = b(d.children, _, w, E, d.el, d.anchor);
  }, m = ({ el: d, anchor: _ }, w, E) => {
    let x;
    for (; d && d !== _; )
      x = u(d), i(d, w, E), d = x;
    i(_, w, E);
  }, p = ({ el: d, anchor: _ }) => {
    let w;
    for (; d && d !== _; )
      w = u(d), r(d), d = w;
    r(_);
  }, v = (d, _, w, E, x, I, M, S, O) => {
    M = M || _.type === "svg", d == null ? N(_, w, E, x, I, M, S, O) : B(d, _, x, I, M, S, O);
  }, N = (d, _, w, E, x, I, M, S) => {
    let O, k;
    const { type: D, props: z, shapeFlag: L, transition: $, dirs: Z } = d;
    if (O = d.el = s(d.type, I, z && z.is, z), L & 8 ? c(O, d.children) : L & 16 && F(d.children, O, null, E, x, I && D !== "foreignObject", M, S), Z && xt(d, null, E, "created"), A(O, d, d.scopeId, M, E), z) {
      for (const Q in z)
        Q !== "value" && !xi(Q) && o(O, Q, null, z[Q], I, d.children, E, x, Qe);
      "value" in z && o(O, "value", null, z.value), (k = z.onVnodeBeforeMount) && je(k, E, d);
    }
    Z && xt(d, null, E, "beforeMount");
    const G = (!x || x && !x.pendingBranch) && $ && !$.persisted;
    G && $.beforeEnter(O), i(O, _, w), ((k = z && z.onVnodeMounted) || G || Z) && ve(() => {
      k && je(k, E, d), G && $.enter(O), Z && xt(d, null, E, "mounted");
    }, x);
  }, A = (d, _, w, E, x) => {
    if (w && h(d, w), E)
      for (let I = 0; I < E.length; I++)
        h(d, E[I]);
    if (x) {
      let I = x.subTree;
      if (_ === I) {
        const M = x.vnode;
        A(d, M, M.scopeId, M.slotScopeIds, x.parent);
      }
    }
  }, F = (d, _, w, E, x, I, M, S, O = 0) => {
    for (let k = O; k < d.length; k++) {
      const D = d[k] = S ? st(d[k]) : Ze(d[k]);
      T(null, D, _, w, E, x, I, M, S);
    }
  }, B = (d, _, w, E, x, I, M) => {
    const S = _.el = d.el;
    let { patchFlag: O, dynamicChildren: k, dirs: D } = _;
    O |= d.patchFlag & 16;
    const z = d.props || ee, L = _.props || ee;
    let $;
    w && Et(w, !1), ($ = L.onVnodeBeforeUpdate) && je($, w, _, d), D && xt(_, d, w, "beforeUpdate"), w && Et(w, !0);
    const Z = x && _.type !== "foreignObject";
    if (k ? R(d.dynamicChildren, k, S, w, E, Z, I) : M || Y(d, _, S, null, w, E, Z, I, !1), O > 0) {
      if (O & 16)
        U(S, _, z, L, w, E, x);
      else if (O & 2 && z.class !== L.class && o(S, "class", null, L.class, x), O & 4 && o(S, "style", z.style, L.style, x), O & 8) {
        const G = _.dynamicProps;
        for (let Q = 0; Q < G.length; Q++) {
          const le = G[Q], Pe = z[le], Bt = L[le];
          (Bt !== Pe || le === "value") && o(S, le, Pe, Bt, x, d.children, w, E, Qe);
        }
      }
      O & 1 && d.children !== _.children && c(S, _.children);
    } else
      !M && k == null && U(S, _, z, L, w, E, x);
    (($ = L.onVnodeUpdated) || D) && ve(() => {
      $ && je($, w, _, d), D && xt(_, d, w, "updated");
    }, E);
  }, R = (d, _, w, E, x, I, M) => {
    for (let S = 0; S < _.length; S++) {
      const O = d[S], k = _[S], D = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Ne || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !bn(O, k) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? g(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      T(O, k, D, null, E, x, I, M, !0);
    }
  }, U = (d, _, w, E, x, I, M) => {
    if (w !== E) {
      if (w !== ee)
        for (const S in w)
          !xi(S) && !(S in E) && o(d, S, w[S], null, M, _.children, x, I, Qe);
      for (const S in E) {
        if (xi(S))
          continue;
        const O = E[S], k = w[S];
        O !== k && S !== "value" && o(d, S, k, O, M, _.children, x, I, Qe);
      }
      "value" in E && o(d, "value", w.value, E.value);
    }
  }, ae = (d, _, w, E, x, I, M, S, O) => {
    const k = _.el = d ? d.el : l(""), D = _.anchor = d ? d.anchor : l("");
    let { patchFlag: z, dynamicChildren: L, slotScopeIds: $ } = _;
    $ && (S = S ? S.concat($) : $), d == null ? (i(k, w, E), i(D, w, E), F(_.children, w, D, x, I, M, S, O)) : z > 0 && z & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (R(d.dynamicChildren, L, w, x, I, M, S), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || x && _ === x.subTree) && xa(
      d,
      _,
      !0
      /* shallow */
    )) : Y(d, _, w, D, x, I, M, S, O);
  }, ie = (d, _, w, E, x, I, M, S, O) => {
    _.slotScopeIds = S, d == null ? _.shapeFlag & 512 ? x.ctx.activate(_, w, E, M, O) : be(_, w, E, x, I, M, O) : Ue(d, _, O);
  }, be = (d, _, w, E, x, I, M) => {
    const S = d.component = Hu(d, E, x);
    if (aa(d) && (S.ctx.renderer = Ut), Ku(S), S.asyncDep) {
      if (x && x.registerDep(S, se), !d.el) {
        const O = S.subTree = We(wt);
        y(null, O, _, w);
      }
      return;
    }
    se(S, d, _, w, x, I, M);
  }, Ue = (d, _, w) => {
    const E = _.component = d.component;
    if (Qc(d, _, w))
      if (E.asyncDep && !E.asyncResolved) {
        X(E, _, w);
        return;
      } else
        E.next = _, Kc(E.update), E.update();
    else
      _.el = d.el, E.vnode = _;
  }, se = (d, _, w, E, x, I, M) => {
    const S = () => {
      if (d.isMounted) {
        let { next: D, bu: z, u: L, parent: $, vnode: Z } = d, G = D, Q;
        Et(d, !1), D ? (D.el = Z.el, X(d, D, M)) : D = Z, z && Ei(z), (Q = D.props && D.props.onVnodeBeforeUpdate) && je(Q, $, D, Z), Et(d, !0);
        const le = hr(d), Pe = d.subTree;
        d.subTree = le, T(
          Pe,
          le,
          // parent may have changed if it's in a teleport
          g(Pe.el),
          // anchor may have changed if it's in a fragment
          ai(Pe),
          d,
          x,
          I
        ), D.el = le.el, G === null && Gc(d, le.el), L && ve(L, x), (Q = D.props && D.props.onVnodeUpdated) && ve(() => je(Q, $, D, Z), x);
      } else {
        let D;
        const { el: z, props: L } = _, { bm: $, m: Z, parent: G } = d, Q = An(_);
        if (Et(d, !1), $ && Ei($), !Q && (D = L && L.onVnodeBeforeMount) && je(D, G, _), Et(d, !0), z && fr) {
          const le = () => {
            d.subTree = hr(d), fr(z, d.subTree, d, x, null);
          };
          Q ? _.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !d.isUnmounted && le()
          ) : le();
        } else {
          const le = d.subTree = hr(d);
          T(null, le, w, E, d, x, I), _.el = le.el;
        }
        if (Z && ve(Z, x), !Q && (D = L && L.onVnodeMounted)) {
          const le = _;
          ve(() => je(D, G, le), x);
        }
        (_.shapeFlag & 256 || G && An(G.vnode) && G.vnode.shapeFlag & 256) && d.a && ve(d.a, x), d.isMounted = !0, _ = w = E = null;
      }
    }, O = d.effect = new ko(
      S,
      () => Mo(k),
      d.scope
      // track it in component's effect scope
    ), k = d.update = () => O.run();
    k.id = d.uid, Et(d, !0), k();
  }, X = (d, _, w) => {
    _.component = d;
    const E = d.vnode.props;
    d.vnode = _, d.next = null, ku(d, _.props, E, w), Iu(d, _.children, w), ln(), us(), an();
  }, Y = (d, _, w, E, x, I, M, S, O = !1) => {
    const k = d && d.children, D = d ? d.shapeFlag : 0, z = _.children, { patchFlag: L, shapeFlag: $ } = _;
    if (L > 0) {
      if (L & 128) {
        Ft(k, z, w, E, x, I, M, S, O);
        return;
      } else if (L & 256) {
        Ae(k, z, w, E, x, I, M, S, O);
        return;
      }
    }
    $ & 8 ? (D & 16 && Qe(k, x, I), z !== k && c(w, z)) : D & 16 ? $ & 16 ? Ft(k, z, w, E, x, I, M, S, O) : Qe(k, x, I, !0) : (D & 8 && c(w, ""), $ & 16 && F(z, w, E, x, I, M, S, O));
  }, Ae = (d, _, w, E, x, I, M, S, O) => {
    d = d || Zt, _ = _ || Zt;
    const k = d.length, D = _.length, z = Math.min(k, D);
    let L;
    for (L = 0; L < z; L++) {
      const $ = _[L] = O ? st(_[L]) : Ze(_[L]);
      T(d[L], $, w, null, x, I, M, S, O);
    }
    k > D ? Qe(d, x, I, !0, !1, z) : F(_, w, E, x, I, M, S, O, z);
  }, Ft = (d, _, w, E, x, I, M, S, O) => {
    let k = 0;
    const D = _.length;
    let z = d.length - 1, L = D - 1;
    for (; k <= z && k <= L; ) {
      const $ = d[k], Z = _[k] = O ? st(_[k]) : Ze(_[k]);
      if (bn($, Z))
        T($, Z, w, null, x, I, M, S, O);
      else
        break;
      k++;
    }
    for (; k <= z && k <= L; ) {
      const $ = d[z], Z = _[L] = O ? st(_[L]) : Ze(_[L]);
      if (bn($, Z))
        T($, Z, w, null, x, I, M, S, O);
      else
        break;
      z--, L--;
    }
    if (k > z) {
      if (k <= L) {
        const $ = L + 1, Z = $ < D ? _[$].el : E;
        for (; k <= L; )
          T(null, _[k] = O ? st(_[k]) : Ze(_[k]), w, Z, x, I, M, S, O), k++;
      }
    } else if (k > L)
      for (; k <= z; )
        Be(d[k], x, I, !0), k++;
    else {
      const $ = k, Z = k, G = /* @__PURE__ */ new Map();
      for (k = Z; k <= L; k++) {
        const ke = _[k] = O ? st(_[k]) : Ze(_[k]);
        ke.key != null && G.set(ke.key, k);
      }
      let Q, le = 0;
      const Pe = L - Z + 1;
      let Bt = !1, Go = 0;
      const _n = new Array(Pe);
      for (k = 0; k < Pe; k++)
        _n[k] = 0;
      for (k = $; k <= z; k++) {
        const ke = d[k];
        if (le >= Pe) {
          Be(ke, x, I, !0);
          continue;
        }
        let $e;
        if (ke.key != null)
          $e = G.get(ke.key);
        else
          for (Q = Z; Q <= L; Q++)
            if (_n[Q - Z] === 0 && bn(ke, _[Q])) {
              $e = Q;
              break;
            }
        $e === void 0 ? Be(ke, x, I, !0) : (_n[$e - Z] = k + 1, $e >= Go ? Go = $e : Bt = !0, T(ke, _[$e], w, null, x, I, M, S, O), le++);
      }
      const es = Bt ? Pu(_n) : Zt;
      for (Q = es.length - 1, k = Pe - 1; k >= 0; k--) {
        const ke = Z + k, $e = _[ke], ts = ke + 1 < D ? _[ke + 1].el : E;
        _n[k] === 0 ? T(null, $e, w, ts, x, I, M, S, O) : Bt && (Q < 0 || k !== es[Q] ? vt(
          $e,
          w,
          ts,
          2
          /* MoveType.REORDER */
        ) : Q--);
      }
    }
  }, vt = (d, _, w, E, x = null) => {
    const { el: I, type: M, transition: S, children: O, shapeFlag: k } = d;
    if (k & 6) {
      vt(d.component.subTree, _, w, E);
      return;
    }
    if (k & 128) {
      d.suspense.move(_, w, E);
      return;
    }
    if (k & 64) {
      M.move(d, _, w, Ut);
      return;
    }
    if (M === Ne) {
      i(I, _, w);
      for (let z = 0; z < O.length; z++)
        vt(O[z], _, w, E);
      i(d.anchor, _, w);
      return;
    }
    if (M === pr) {
      m(d, _, w);
      return;
    }
    if (E !== 2 && k & 1 && S)
      if (E === 0)
        S.beforeEnter(I), i(I, _, w), ve(() => S.enter(I), x);
      else {
        const { leave: z, delayLeave: L, afterLeave: $ } = S, Z = () => i(I, _, w), G = () => {
          z(I, () => {
            Z(), $ && $();
          });
        };
        L ? L(I, Z, G) : G();
      }
    else
      i(I, _, w);
  }, Be = (d, _, w, E = !1, x = !1) => {
    const { type: I, props: M, ref: S, children: O, dynamicChildren: k, shapeFlag: D, patchFlag: z, dirs: L } = d;
    if (S != null && Yr(S, null, w, d, !0), D & 256) {
      _.ctx.deactivate(d);
      return;
    }
    const $ = D & 1 && L, Z = !An(d);
    let G;
    if (Z && (G = M && M.onVnodeBeforeUnmount) && je(G, _, d), D & 6)
      Bf(d.component, w, E);
    else {
      if (D & 128) {
        d.suspense.unmount(w, E);
        return;
      }
      $ && xt(d, null, _, "beforeUnmount"), D & 64 ? d.type.remove(d, _, w, x, Ut, E) : k && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== Ne || z > 0 && z & 64) ? Qe(k, _, w, !1, !0) : (I === Ne && z & 384 || !x && D & 16) && Qe(O, _, w), E && Xo(d);
    }
    (Z && (G = M && M.onVnodeUnmounted) || $) && ve(() => {
      G && je(G, _, d), $ && xt(d, null, _, "unmounted");
    }, w);
  }, Xo = (d) => {
    const { type: _, el: w, anchor: E, transition: x } = d;
    if (_ === Ne) {
      Uf(w, E);
      return;
    }
    if (_ === pr) {
      p(d);
      return;
    }
    const I = () => {
      r(w), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (d.shapeFlag & 1 && x && !x.persisted) {
      const { leave: M, delayLeave: S } = x, O = () => M(w, I);
      S ? S(d.el, I, O) : O();
    } else
      I();
  }, Uf = (d, _) => {
    let w;
    for (; d !== _; )
      w = u(d), r(d), d = w;
    r(_);
  }, Bf = (d, _, w) => {
    const { bum: E, scope: x, update: I, subTree: M, um: S } = d;
    E && Ei(E), x.stop(), I && (I.active = !1, Be(M, d, _, w)), S && ve(S, _), ve(() => {
      d.isUnmounted = !0;
    }, _), _ && _.pendingBranch && !_.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve());
  }, Qe = (d, _, w, E = !1, x = !1, I = 0) => {
    for (let M = I; M < d.length; M++)
      Be(d[M], _, w, E, x);
  }, ai = (d) => d.shapeFlag & 6 ? ai(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : u(d.anchor || d.el), Qo = (d, _, w) => {
    d == null ? _._vnode && Be(_._vnode, null, null, !0) : T(_._vnode || null, d, _, null, null, null, w), us(), ta(), _._vnode = d;
  }, Ut = {
    p: T,
    um: Be,
    m: vt,
    r: Xo,
    mt: be,
    mc: F,
    pc: Y,
    pbc: R,
    n: ai,
    o: e
  };
  let ar, fr;
  return n && ([ar, fr] = n(Ut)), {
    render: Qo,
    hydrate: ar,
    createApp: Ou(Qo, ar)
  };
}
function Et({ effect: e, update: n }, t) {
  e.allowRecurse = n.allowRecurse = t;
}
function xa(e, n, t = !1) {
  const i = e.children, r = n.children;
  if (j(i) && j(r))
    for (let o = 0; o < i.length; o++) {
      const s = i[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = st(r[o]), l.el = s.el), t || xa(s, l)), l.type === Ji && (l.el = s.el);
    }
}
function Pu(e) {
  const n = e.slice(), t = [0];
  let i, r, o, s, l;
  const f = e.length;
  for (i = 0; i < f; i++) {
    const a = e[i];
    if (a !== 0) {
      if (r = t[t.length - 1], e[r] < a) {
        n[i] = r, t.push(i);
        continue;
      }
      for (o = 0, s = t.length - 1; o < s; )
        l = o + s >> 1, e[t[l]] < a ? o = l + 1 : s = l;
      a < e[t[o]] && (o > 0 && (n[i] = t[o - 1]), t[o] = i);
    }
  }
  for (o = t.length, s = t[o - 1]; o-- > 0; )
    t[o] = s, s = n[s];
  return t;
}
const Nu = (e) => e.__isTeleport, Ne = Symbol(void 0), Ji = Symbol(void 0), wt = Symbol(void 0), pr = Symbol(void 0), Tn = [];
let De = null;
function pe(e = !1) {
  Tn.push(De = e ? null : []);
}
function zu() {
  Tn.pop(), De = Tn[Tn.length - 1] || null;
}
let Ln = 1;
function ys(e) {
  Ln += e;
}
function Ea(e) {
  return e.dynamicChildren = Ln > 0 ? De || Zt : null, zu(), Ln > 0 && De && De.push(e), e;
}
function mt(e, n, t, i, r, o) {
  return Ea(q(
    e,
    n,
    t,
    i,
    r,
    o,
    !0
    /* isBlock */
  ));
}
function ht(e, n, t, i, r) {
  return Ea(We(
    e,
    n,
    t,
    i,
    r,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Aa(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bn(e, n) {
  return e.type === n.type && e.key === n.key;
}
const Xi = "__vInternal", ka = ({ key: e }) => e ?? null, ki = ({ ref: e, ref_key: n, ref_for: t }) => e != null ? ce(e) || ge(e) || H(e) ? { i: de, r: e, k: n, f: !!t } : e : null;
function q(e, n = null, t = null, i = 0, r = null, o = e === Ne ? 0 : 1, s = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && ka(n),
    ref: n && ki(n),
    scopeId: Yi,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: i,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return l ? (zo(f, t), o & 128 && e.normalize(f)) : t && (f.shapeFlag |= ce(t) ? 8 : 16), Ln > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  De && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && De.push(f), f;
}
const We = Du;
function Du(e, n = null, t = null, i = 0, r = null, o = !1) {
  if ((!e || e === ha) && (e = wt), Aa(e)) {
    const l = Jt(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return t && zo(l, t), Ln > 0 && !o && De && (l.shapeFlag & 6 ? De[De.indexOf(e)] = l : De.push(l)), l.patchFlag |= -2, l;
  }
  if (Ju(e) && (e = e.__vccOpts), n) {
    n = Lu(n);
    let { class: l, style: f } = n;
    l && !ce(l) && (n.class = Gn(l)), re(f) && (Wl(f) && !j(f) && (f = ye({}, f)), n.style = mo(f));
  }
  const s = ce(e) ? 1 : eu(e) ? 128 : Nu(e) ? 64 : re(e) ? 4 : H(e) ? 2 : 0;
  return q(e, n, t, i, r, s, o, !0);
}
function Lu(e) {
  return e ? Wl(e) || Xi in e ? ye({}, e) : e : null;
}
function Jt(e, n, t = !1) {
  const { props: i, ref: r, patchFlag: o, children: s } = e, l = n ? Bu(i || {}, n) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ka(l),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && r ? j(r) ? r.concat(ki(n)) : [r, ki(n)] : ki(n)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== Ne ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Jt(e.ssContent),
    ssFallback: e.ssFallback && Jt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Fu(e = " ", n = 0) {
  return We(Ji, null, e, n);
}
function Uu(e = "", n = !1) {
  return n ? (pe(), ht(wt, null, e)) : We(wt, null, e);
}
function Ze(e) {
  return e == null || typeof e == "boolean" ? We(wt) : j(e) ? We(
    Ne,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? st(e) : We(Ji, null, String(e));
}
function st(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jt(e);
}
function zo(e, n) {
  let t = 0;
  const { shapeFlag: i } = e;
  if (n == null)
    n = null;
  else if (j(n))
    t = 16;
  else if (typeof n == "object")
    if (i & 65) {
      const r = n.default;
      r && (r._c && (r._d = !1), zo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = n._;
      !r && !(Xi in n) ? n._ctx = de : r === 3 && de && (de.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else
    H(n) ? (n = { default: n, _ctx: de }, t = 32) : (n = String(n), i & 64 ? (t = 16, n = [Fu(n)]) : t = 8);
  e.children = n, e.shapeFlag |= t;
}
function Bu(...e) {
  const n = {};
  for (let t = 0; t < e.length; t++) {
    const i = e[t];
    for (const r in i)
      if (r === "class")
        n.class !== i.class && (n.class = Gn([n.class, i.class]));
      else if (r === "style")
        n.style = mo([n.style, i.style]);
      else if (ji(r)) {
        const o = n[r], s = i[r];
        s && o !== s && !(j(o) && o.includes(s)) && (n[r] = o ? [].concat(o, s) : s);
      } else
        r !== "" && (n[r] = i[r]);
  }
  return n;
}
function je(e, n, t, i = null) {
  Fe(e, n, 7, [
    t,
    i
  ]);
}
const $u = va();
let ju = 0;
function Hu(e, n, t) {
  const i = e.type, r = (n ? n.appContext : e.appContext) || $u, o = {
    uid: ju++,
    vnode: e,
    type: i,
    parent: n,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new sc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: n ? n.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ba(i, r),
    emitsOptions: ia(i, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
    setupContext: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Yc.bind(null, o), e.ce && e.ce(o), o;
}
let oe = null;
const Zu = () => oe || de, Xt = (e) => {
  oe = e, e.scope.on();
}, Pt = () => {
  oe && oe.scope.off(), oe = null;
};
function Ta(e) {
  return e.vnode.shapeFlag & 4;
}
let Fn = !1;
function Ku(e, n = !1) {
  Fn = n;
  const { props: t, children: i } = e.vnode, r = Ta(e);
  Au(e, t, r, n), Su(e, i);
  const o = r ? qu(e, n) : void 0;
  return Fn = !1, o;
}
function qu(e, n) {
  const t = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Yl(new Proxy(e.ctx, wu));
  const { setup: i } = t;
  if (i) {
    const r = e.setupContext = i.length > 1 ? Yu(e) : null;
    Xt(e), ln();
    const o = dt(i, e, 0, [e.props, r]);
    if (an(), Pt(), Nl(o)) {
      if (o.then(Pt, Pt), n)
        return o.then((s) => {
          vs(e, s, n);
        }).catch((s) => {
          qi(
            s,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = o;
    } else
      vs(e, o, n);
  } else
    Sa(e, n);
}
function vs(e, n, t) {
  H(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : re(n) && (e.setupState = Xl(n)), Sa(e, t);
}
let xs;
function Sa(e, n, t) {
  const i = e.type;
  if (!e.render) {
    if (!n && xs && !i.render) {
      const r = i.template || Po(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: f } = i, a = ye(ye({
          isCustomElement: o,
          delimiters: l
        }, s), f);
        i.render = xs(r, a);
      }
    }
    e.render = i.render || Le;
  }
  Xt(e), ln(), mu(e), an(), Pt();
}
function Wu(e) {
  return new Proxy(e.attrs, {
    get(n, t) {
      return Ee(e, "get", "$attrs"), n[t];
    }
  });
}
function Yu(e) {
  const n = (i) => {
    e.exposed = i || {};
  };
  let t;
  return {
    get attrs() {
      return t || (t = Wu(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function Qi(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Xl(Yl(e.exposed)), {
      get(n, t) {
        if (t in n)
          return n[t];
        if (t in kn)
          return kn[t](e);
      },
      has(n, t) {
        return t in n || t in kn;
      }
    }));
}
function Vu(e, n = !0) {
  return H(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Ju(e) {
  return H(e) && "__vccOpts" in e;
}
const Ia = (e, n) => $c(e, n, Fn), Xu = Symbol(""), Qu = () => Ai(Xu), Gu = "3.2.47", ed = "http://www.w3.org/2000/svg", Tt = typeof document < "u" ? document : null, Es = Tt && /* @__PURE__ */ Tt.createElement("template"), td = {
  insert: (e, n, t) => {
    n.insertBefore(e, t || null);
  },
  remove: (e) => {
    const n = e.parentNode;
    n && n.removeChild(e);
  },
  createElement: (e, n, t, i) => {
    const r = n ? Tt.createElementNS(ed, e) : Tt.createElement(e, t ? { is: t } : void 0);
    return e === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r;
  },
  createText: (e) => Tt.createTextNode(e),
  createComment: (e) => Tt.createComment(e),
  setText: (e, n) => {
    e.nodeValue = n;
  },
  setElementText: (e, n) => {
    e.textContent = n;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Tt.querySelector(e),
  setScopeId(e, n) {
    e.setAttribute(n, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, n, t, i, r, o) {
    const s = t ? t.previousSibling : n.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; n.insertBefore(r.cloneNode(!0), t), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Es.innerHTML = i ? `<svg>${e}</svg>` : e;
      const l = Es.content;
      if (i) {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      n.insertBefore(l, t);
    }
    return [
      // first
      s ? s.nextSibling : n.firstChild,
      // last
      t ? t.previousSibling : n.lastChild
    ];
  }
};
function nd(e, n, t) {
  const i = e._vtc;
  i && (n = (n ? [n, ...i] : [...i]).join(" ")), n == null ? e.removeAttribute("class") : t ? e.setAttribute("class", n) : e.className = n;
}
function id(e, n, t) {
  const i = e.style, r = ce(t);
  if (t && !r) {
    if (n && !ce(n))
      for (const o in n)
        t[o] == null && Vr(i, o, "");
    for (const o in t)
      Vr(i, o, t[o]);
  } else {
    const o = i.display;
    r ? n !== t && (i.cssText = t) : n && e.removeAttribute("style"), "_vod" in e && (i.display = o);
  }
}
const As = /\s*!important$/;
function Vr(e, n, t) {
  if (j(t))
    t.forEach((i) => Vr(e, n, i));
  else if (t == null && (t = ""), n.startsWith("--"))
    e.setProperty(n, t);
  else {
    const i = rd(e, n);
    As.test(t) ? e.setProperty(sn(i), t.replace(As, ""), "important") : e[i] = t;
  }
}
const ks = ["Webkit", "Moz", "ms"], gr = {};
function rd(e, n) {
  const t = gr[n];
  if (t)
    return t;
  let i = Je(n);
  if (i !== "filter" && i in e)
    return gr[n] = i;
  i = Zi(i);
  for (let r = 0; r < ks.length; r++) {
    const o = ks[r] + i;
    if (o in e)
      return gr[n] = o;
  }
  return n;
}
const Ts = "http://www.w3.org/1999/xlink";
function od(e, n, t, i, r) {
  if (i && n.startsWith("xlink:"))
    t == null ? e.removeAttributeNS(Ts, n.slice(6, n.length)) : e.setAttributeNS(Ts, n, t);
  else {
    const o = Vf(n);
    t == null || o && !Ml(t) ? e.removeAttribute(n) : e.setAttribute(n, o ? "" : t);
  }
}
function sd(e, n, t, i, r, o, s) {
  if (n === "innerHTML" || n === "textContent") {
    i && s(i, r, o), e[n] = t ?? "";
    return;
  }
  if (n === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = t;
    const f = t ?? "";
    (e.value !== f || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = f), t == null && e.removeAttribute(n);
    return;
  }
  let l = !1;
  if (t === "" || t == null) {
    const f = typeof e[n];
    f === "boolean" ? t = Ml(t) : t == null && f === "string" ? (t = "", l = !0) : f === "number" && (t = 0, l = !0);
  }
  try {
    e[n] = t;
  } catch {
  }
  l && e.removeAttribute(n);
}
function St(e, n, t, i) {
  e.addEventListener(n, t, i);
}
function ld(e, n, t, i) {
  e.removeEventListener(n, t, i);
}
function ad(e, n, t, i, r = null) {
  const o = e._vei || (e._vei = {}), s = o[n];
  if (i && s)
    s.value = i;
  else {
    const [l, f] = fd(n);
    if (i) {
      const a = o[n] = dd(i, r);
      St(e, l, a, f);
    } else
      s && (ld(e, l, s, f), o[n] = void 0);
  }
}
const Ss = /(?:Once|Passive|Capture)$/;
function fd(e) {
  let n;
  if (Ss.test(e)) {
    n = {};
    let i;
    for (; i = e.match(Ss); )
      e = e.slice(0, e.length - i[0].length), n[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : sn(e.slice(2)), n];
}
let br = 0;
const cd = /* @__PURE__ */ Promise.resolve(), ud = () => br || (cd.then(() => br = 0), br = Date.now());
function dd(e, n) {
  const t = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= t.attached)
      return;
    Fe(hd(i, t.value), n, 5, [i]);
  };
  return t.value = e, t.attached = ud(), t;
}
function hd(e, n) {
  if (j(n)) {
    const t = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      t.call(e), e._stopped = !0;
    }, n.map((i) => (r) => !r._stopped && i && i(r));
  } else
    return n;
}
const Is = /^on[a-z]/, _d = (e, n, t, i, r = !1, o, s, l, f) => {
  n === "class" ? nd(e, i, r) : n === "style" ? id(e, t, i) : ji(n) ? yo(n) || ad(e, n, t, i, s) : (n[0] === "." ? (n = n.slice(1), !0) : n[0] === "^" ? (n = n.slice(1), !1) : pd(e, n, i, r)) ? sd(e, n, i, o, s, l, f) : (n === "true-value" ? e._trueValue = i : n === "false-value" && (e._falseValue = i), od(e, n, i, r));
};
function pd(e, n, t, i) {
  return i ? !!(n === "innerHTML" || n === "textContent" || n in e && Is.test(n) && H(t)) : n === "spellcheck" || n === "draggable" || n === "translate" || n === "form" || n === "list" && e.tagName === "INPUT" || n === "type" && e.tagName === "TEXTAREA" || Is.test(n) && ce(t) ? !1 : n in e;
}
const Ri = (e) => {
  const n = e.props["onUpdate:modelValue"] || !1;
  return j(n) ? (t) => Ei(n, t) : n;
};
function gd(e) {
  e.target.composing = !0;
}
function Cs(e) {
  const n = e.target;
  n.composing && (n.composing = !1, n.dispatchEvent(new Event("input")));
}
const Os = {
  created(e, { modifiers: { lazy: n, trim: t, number: i } }, r) {
    e._assign = Ri(r);
    const o = i || r.props && r.props.type === "number";
    St(e, n ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let l = e.value;
      t && (l = l.trim()), o && (l = Fr(l)), e._assign(l);
    }), t && St(e, "change", () => {
      e.value = e.value.trim();
    }), n || (St(e, "compositionstart", gd), St(e, "compositionend", Cs), St(e, "change", Cs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: n }) {
    e.value = n ?? "";
  },
  beforeUpdate(e, { value: n, modifiers: { lazy: t, trim: i, number: r } }, o) {
    if (e._assign = Ri(o), e.composing || document.activeElement === e && e.type !== "range" && (t || i && e.value.trim() === n || (r || e.type === "number") && Fr(e.value) === n))
      return;
    const s = n ?? "";
    e.value !== s && (e.value = s);
  }
}, wr = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, n, t) {
    e._assign = Ri(t), St(e, "change", () => {
      const i = e._modelValue, r = bd(e), o = e.checked, s = e._assign;
      if (j(i)) {
        const l = Pl(i, r), f = l !== -1;
        if (o && !f)
          s(i.concat(r));
        else if (!o && f) {
          const a = [...i];
          a.splice(l, 1), s(a);
        }
      } else if (xo(i)) {
        const l = new Set(i);
        o ? l.add(r) : l.delete(r), s(l);
      } else
        s(Ca(e, o));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Rs,
  beforeUpdate(e, n, t) {
    e._assign = Ri(t), Rs(e, n, t);
  }
};
function Rs(e, { value: n, oldValue: t }, i) {
  e._modelValue = n, j(n) ? e.checked = Pl(n, i.props.value) > -1 : xo(n) ? e.checked = n.has(i.props.value) : n !== t && (e.checked = $i(n, Ca(e, !0)));
}
function bd(e) {
  return "_value" in e ? e._value : e.value;
}
function Ca(e, n) {
  const t = n ? "_trueValue" : "_falseValue";
  return t in e ? e[t] : n;
}
const wd = /* @__PURE__ */ ye({ patchProp: _d }, td);
let Ms;
function md() {
  return Ms || (Ms = Ru(wd));
}
const yd = (...e) => {
  const n = md().createApp(...e), { mount: t } = n;
  return n.mount = (i) => {
    const r = vd(i);
    if (!r)
      return;
    const o = n._component;
    !H(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
    const s = t(r, !1, r instanceof SVGElement);
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, n;
};
function vd(e) {
  return ce(e) ? document.querySelector(e) : e;
}
var Ps;
const Oa = typeof window < "u", xd = (e) => typeof e == "string", Ed = () => {
};
Oa && ((Ps = window == null ? void 0 : window.navigator) != null && Ps.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ra(e) {
  return typeof e == "function" ? e() : ne(e);
}
function Ad(e) {
  return e;
}
function kd(e) {
  return zl() ? (ac(e), !0) : !1;
}
function Td(e) {
  var n;
  const t = Ra(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Sd = Oa ? window : void 0;
function Id(...e) {
  let n, t, i, r;
  if (xd(e[0]) || Array.isArray(e[0]) ? ([t, i, r] = e, n = Sd) : [n, t, i, r] = e, !n)
    return Ed;
  Array.isArray(t) || (t = [t]), Array.isArray(i) || (i = [i]);
  const o = [], s = () => {
    o.forEach((c) => c()), o.length = 0;
  }, l = (c, g, u, h) => (c.addEventListener(g, u, h), () => c.removeEventListener(g, u, h)), f = En(() => [Td(n), Ra(r)], ([c, g]) => {
    s(), c && o.push(...t.flatMap((u) => i.map((h) => l(c, u, h, g))));
  }, { immediate: !0, flush: "post" }), a = () => {
    f(), s();
  };
  return kd(a), a;
}
const Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xr = "__vueuse_ssr_handlers__";
Jr[Xr] = Jr[Xr] || {};
Jr[Xr];
var Ns;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ns || (Ns = {}));
var Cd = Object.defineProperty, zs = Object.getOwnPropertySymbols, Od = Object.prototype.hasOwnProperty, Rd = Object.prototype.propertyIsEnumerable, Ds = (e, n, t) => n in e ? Cd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Md = (e, n) => {
  for (var t in n || (n = {}))
    Od.call(n, t) && Ds(e, t, n[t]);
  if (zs)
    for (var t of zs(n))
      Rd.call(n, t) && Ds(e, t, n[t]);
  return e;
};
const Pd = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Md({
  linear: Ad
}, Pd);
var Nd = Object.defineProperty, zd = (e, n, t) => n in e ? Nd(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ma = (e, n, t) => (zd(e, typeof n != "symbol" ? n + "" : n, t), t);
const Dd = (e) => e;
function cn(e) {
  let n = e.length;
  for (; --n >= 0; )
    e[n] = 0;
}
const Ld = 3, Fd = 258, Pa = 29, Ud = 256, Bd = Ud + 1 + Pa, Na = 30, $d = 512, jd = new Array((Bd + 2) * 2);
cn(jd);
const Hd = new Array(Na * 2);
cn(Hd);
const Zd = new Array($d);
cn(Zd);
const Kd = new Array(Fd - Ld + 1);
cn(Kd);
const qd = new Array(Pa);
cn(qd);
const Wd = new Array(Na);
cn(Wd);
const Yd = () => {
  let e, n = [];
  for (var t = 0; t < 256; t++) {
    e = t;
    for (var i = 0; i < 8; i++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    n[t] = e;
  }
  return n;
};
new Uint32Array(Yd());
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
}
const Qr = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  Qr[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
Qr[254] = Qr[254] = 1;
var Gr;
((e) => {
  function n(u) {
    return /^\s*class/.test(String(u));
  }
  e.classs = n;
  function t(u) {
    return typeof u == "number";
  }
  e.number = t;
  function i(u) {
    return typeof u == "string";
  }
  e.string = i;
  function r(u) {
    return typeof u == "boolean";
  }
  e.boolean = r;
  function o(u) {
    return typeof u == "function" && !n(u);
  }
  e.fn = o;
  function s(u) {
    return Array.isArray(u);
  }
  e.array = s;
  function l(u) {
    return u !== null && typeof u == "object";
  }
  e.object = l;
  function f(u) {
    return c(u) ? !0 : typeof u == "string" ? !u : u instanceof Set || u instanceof Map ? u.size === 0 : u instanceof Array ? u.length === 0 : a(u) ? !!u[Symbol.iterator]().next().done : !!(l(u) && Object.keys(u).length === 0);
  }
  e.empty = f;
  function a(u) {
    return e.object(u) && Symbol.iterator in u;
  }
  e.iterable = a;
  function c(u) {
    return u == null;
  }
  e.nullish = c;
  function g(u) {
    return !e.object(u) && !e.fn(u) && !e.classs(u);
  }
  e.primitive = g;
})(Gr || (Gr = {}));
var Vd = (e) => Array.isArray(e) ? e : [e];
const Jd = (e) => {
  var n;
  return e || (e = Zu()), (n = e.proxy) == null ? void 0 : n.$props;
}, Xd = Dd({
  loading: {
    type: Boolean,
    default: !1
  },
  click: {
    type: Function,
    required: !1
  }
});
function Qd() {
  const e = Dc(!1), n = Jd();
  return {
    get isProcessing() {
      return ne(e) || (n == null ? void 0 : n.loading);
    },
    handler: async (t) => {
      var i;
      e.value = !0;
      try {
        await ((i = n == null ? void 0 : n.click) == null ? void 0 : i.call(n, t));
      } catch (r) {
        throw r;
      } finally {
        e.value = !1;
      }
    }
  };
}
const Gd = ["disabled"];
({
  ...Xd
});
const eh = {
  esc: "Escape",
  // whitespace
  enter: "Enter",
  space: " ",
  tab: "Tab",
  // navigation
  left: "ArrowLeft",
  right: "ArrowRight",
  up: "ArrowUp",
  down: "ArrowDown",
  // number
  ".": "Decimal",
  11: "Key11",
  12: "Key12",
  // operator
  "-": "Subtract",
  "+": "Add",
  "*": "Multiply",
  "/": "Divide",
  "=": "Equal"
}, za = ["meta", "ctrl", "alt", "shift"], th = (e) => za.includes(e), nh = "+", ih = /\s/;
function rh(e) {
  const n = {
    key: ""
  };
  if (e.split(nh).filter((t) => !!t.trim()).forEach((t) => {
    const i = t.trim(), r = eh[i] || i;
    th(r) ? n[r] = !0 : n.key = r;
  }), ih.test(n.key))
    throw new Error(`Parse \`${e}\` failed! Please check key string.`);
  return n;
}
const Da = (e, n) => {
  const t = Vd(e).map((i) => Gr.string(i) ? rh(i) : i);
  return (i) => {
    for (const r of t)
      if (oh(i, r)) {
        n(r);
        break;
      }
  };
};
function oh(e, n) {
  return za.filter((t) => n[t]).every((t) => {
    const i = t + "Key";
    return e[i];
  }) && n.key === e.key;
}
const Ls = "__$rpc_timeout_error$__";
var La;
class sh extends Error {
  constructor() {
    super(...arguments), Ma(this, La, !0);
  }
}
La = Ls, Ma(sh, "S", Ls);
var lh = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Fa = {}, Ce = {};
let Do;
const ah = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
Ce.getSymbolSize = function(e) {
  if (!e)
    throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
Ce.getSymbolTotalCodewords = function(e) {
  return ah[e];
};
Ce.getBCHDigit = function(e) {
  let n = 0;
  for (; e !== 0; )
    n++, e >>>= 1;
  return n;
};
Ce.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Do = e;
};
Ce.isKanjiModeEnabled = function() {
  return typeof Do < "u";
};
Ce.toSJIS = function(e) {
  return Do(e);
};
var Gi = {};
(function(e) {
  e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
  function n(t) {
    if (typeof t != "string")
      throw new Error("Param is not a string");
    switch (t.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + t);
    }
  }
  e.isValid = function(t) {
    return t && typeof t.bit < "u" && t.bit >= 0 && t.bit < 4;
  }, e.from = function(t, i) {
    if (e.isValid(t))
      return t;
    try {
      return n(t);
    } catch {
      return i;
    }
  };
})(Gi);
function Ua() {
  this.buffer = [], this.length = 0;
}
Ua.prototype = {
  get: function(e) {
    const n = Math.floor(e / 8);
    return (this.buffer[n] >>> 7 - e % 8 & 1) === 1;
  },
  put: function(e, n) {
    for (let t = 0; t < n; t++)
      this.putBit((e >>> n - t - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(e) {
    const n = Math.floor(this.length / 8);
    this.buffer.length <= n && this.buffer.push(0), e && (this.buffer[n] |= 128 >>> this.length % 8), this.length++;
  }
};
var fh = Ua;
function ti(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
}
ti.prototype.set = function(e, n, t, i) {
  const r = e * this.size + n;
  this.data[r] = t, i && (this.reservedBit[r] = !0);
};
ti.prototype.get = function(e, n) {
  return this.data[e * this.size + n];
};
ti.prototype.xor = function(e, n, t) {
  this.data[e * this.size + n] ^= t;
};
ti.prototype.isReserved = function(e, n) {
  return this.reservedBit[e * this.size + n];
};
var ch = ti, Ba = {};
(function(e) {
  const n = Ce.getSymbolSize;
  e.getRowColCoords = function(t) {
    if (t === 1)
      return [];
    const i = Math.floor(t / 7) + 2, r = n(t), o = r === 145 ? 26 : Math.ceil((r - 13) / (2 * i - 2)) * 2, s = [r - 7];
    for (let l = 1; l < i - 1; l++)
      s[l] = s[l - 1] - o;
    return s.push(6), s.reverse();
  }, e.getPositions = function(t) {
    const i = [], r = e.getRowColCoords(t), o = r.length;
    for (let s = 0; s < o; s++)
      for (let l = 0; l < o; l++)
        s === 0 && l === 0 || // top-left
        s === 0 && l === o - 1 || // bottom-left
        s === o - 1 && l === 0 || i.push([r[s], r[l]]);
    return i;
  };
})(Ba);
var $a = {};
const uh = Ce.getSymbolSize, Fs = 7;
$a.getPositions = function(e) {
  const n = uh(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [n - Fs, 0],
    // bottom-left
    [0, n - Fs]
  ];
};
var ja = {};
(function(e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const n = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function(i) {
    return i != null && i !== "" && !isNaN(i) && i >= 0 && i <= 7;
  }, e.from = function(i) {
    return e.isValid(i) ? parseInt(i, 10) : void 0;
  }, e.getPenaltyN1 = function(i) {
    const r = i.size;
    let o = 0, s = 0, l = 0, f = null, a = null;
    for (let c = 0; c < r; c++) {
      s = l = 0, f = a = null;
      for (let g = 0; g < r; g++) {
        let u = i.get(c, g);
        u === f ? s++ : (s >= 5 && (o += n.N1 + (s - 5)), f = u, s = 1), u = i.get(g, c), u === a ? l++ : (l >= 5 && (o += n.N1 + (l - 5)), a = u, l = 1);
      }
      s >= 5 && (o += n.N1 + (s - 5)), l >= 5 && (o += n.N1 + (l - 5));
    }
    return o;
  }, e.getPenaltyN2 = function(i) {
    const r = i.size;
    let o = 0;
    for (let s = 0; s < r - 1; s++)
      for (let l = 0; l < r - 1; l++) {
        const f = i.get(s, l) + i.get(s, l + 1) + i.get(s + 1, l) + i.get(s + 1, l + 1);
        (f === 4 || f === 0) && o++;
      }
    return o * n.N2;
  }, e.getPenaltyN3 = function(i) {
    const r = i.size;
    let o = 0, s = 0, l = 0;
    for (let f = 0; f < r; f++) {
      s = l = 0;
      for (let a = 0; a < r; a++)
        s = s << 1 & 2047 | i.get(f, a), a >= 10 && (s === 1488 || s === 93) && o++, l = l << 1 & 2047 | i.get(a, f), a >= 10 && (l === 1488 || l === 93) && o++;
    }
    return o * n.N3;
  }, e.getPenaltyN4 = function(i) {
    let r = 0;
    const o = i.data.length;
    for (let s = 0; s < o; s++)
      r += i.data[s];
    return Math.abs(Math.ceil(r * 100 / o / 5) - 10) * n.N4;
  };
  function t(i, r, o) {
    switch (i) {
      case e.Patterns.PATTERN000:
        return (r + o) % 2 === 0;
      case e.Patterns.PATTERN001:
        return r % 2 === 0;
      case e.Patterns.PATTERN010:
        return o % 3 === 0;
      case e.Patterns.PATTERN011:
        return (r + o) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(r / 2) + Math.floor(o / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return r * o % 2 + r * o % 3 === 0;
      case e.Patterns.PATTERN110:
        return (r * o % 2 + r * o % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (r * o % 3 + (r + o) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + i);
    }
  }
  e.applyMask = function(i, r) {
    const o = r.size;
    for (let s = 0; s < o; s++)
      for (let l = 0; l < o; l++)
        r.isReserved(l, s) || r.xor(l, s, t(i, l, s));
  }, e.getBestMask = function(i, r) {
    const o = Object.keys(e.Patterns).length;
    let s = 0, l = 1 / 0;
    for (let f = 0; f < o; f++) {
      r(f), e.applyMask(f, i);
      const a = e.getPenaltyN1(i) + e.getPenaltyN2(i) + e.getPenaltyN3(i) + e.getPenaltyN4(i);
      e.applyMask(f, i), a < l && (l = a, s = f);
    }
    return s;
  };
})(ja);
var er = {};
const ft = Gi, pi = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], gi = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
er.getBlocksCount = function(e, n) {
  switch (n) {
    case ft.L:
      return pi[(e - 1) * 4 + 0];
    case ft.M:
      return pi[(e - 1) * 4 + 1];
    case ft.Q:
      return pi[(e - 1) * 4 + 2];
    case ft.H:
      return pi[(e - 1) * 4 + 3];
    default:
      return;
  }
};
er.getTotalCodewordsCount = function(e, n) {
  switch (n) {
    case ft.L:
      return gi[(e - 1) * 4 + 0];
    case ft.M:
      return gi[(e - 1) * 4 + 1];
    case ft.Q:
      return gi[(e - 1) * 4 + 2];
    case ft.H:
      return gi[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var Ha = {}, tr = {};
const Sn = new Uint8Array(512), Mi = new Uint8Array(256);
(function() {
  let e = 1;
  for (let n = 0; n < 255; n++)
    Sn[n] = e, Mi[e] = n, e <<= 1, e & 256 && (e ^= 285);
  for (let n = 255; n < 512; n++)
    Sn[n] = Sn[n - 255];
})();
tr.log = function(e) {
  if (e < 1)
    throw new Error("log(" + e + ")");
  return Mi[e];
};
tr.exp = function(e) {
  return Sn[e];
};
tr.mul = function(e, n) {
  return e === 0 || n === 0 ? 0 : Sn[Mi[e] + Mi[n]];
};
(function(e) {
  const n = tr;
  e.mul = function(t, i) {
    const r = new Uint8Array(t.length + i.length - 1);
    for (let o = 0; o < t.length; o++)
      for (let s = 0; s < i.length; s++)
        r[o + s] ^= n.mul(t[o], i[s]);
    return r;
  }, e.mod = function(t, i) {
    let r = new Uint8Array(t);
    for (; r.length - i.length >= 0; ) {
      const o = r[0];
      for (let l = 0; l < i.length; l++)
        r[l] ^= n.mul(i[l], o);
      let s = 0;
      for (; s < r.length && r[s] === 0; )
        s++;
      r = r.slice(s);
    }
    return r;
  }, e.generateECPolynomial = function(t) {
    let i = new Uint8Array([1]);
    for (let r = 0; r < t; r++)
      i = e.mul(i, new Uint8Array([1, n.exp(r)]));
    return i;
  };
})(Ha);
const Za = Ha;
function Lo(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
Lo.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = Za.generateECPolynomial(this.degree);
};
Lo.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(e.length + this.degree);
  n.set(e);
  const t = Za.mod(n, this.genPoly), i = this.degree - t.length;
  if (i > 0) {
    const r = new Uint8Array(this.degree);
    return r.set(t, i), r;
  }
  return t;
};
var dh = Lo, Ka = {}, yt = {}, Fo = {};
Fo.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var Xe = {};
const qa = "[0-9]+", hh = "[A-Z $%*+\\-./:]+";
let Un = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Un = Un.replace(/u/g, "\\u");
const _h = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Un + `)(?:.|[\r
]))+`;
Xe.KANJI = new RegExp(Un, "g");
Xe.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Xe.BYTE = new RegExp(_h, "g");
Xe.NUMERIC = new RegExp(qa, "g");
Xe.ALPHANUMERIC = new RegExp(hh, "g");
const ph = new RegExp("^" + Un + "$"), gh = new RegExp("^" + qa + "$"), bh = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Xe.testKanji = function(e) {
  return ph.test(e);
};
Xe.testNumeric = function(e) {
  return gh.test(e);
};
Xe.testAlphanumeric = function(e) {
  return bh.test(e);
};
(function(e) {
  const n = Fo, t = Xe;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function(r, o) {
    if (!r.ccBits)
      throw new Error("Invalid mode: " + r);
    if (!n.isValid(o))
      throw new Error("Invalid version: " + o);
    return o >= 1 && o < 10 ? r.ccBits[0] : o < 27 ? r.ccBits[1] : r.ccBits[2];
  }, e.getBestModeForData = function(r) {
    return t.testNumeric(r) ? e.NUMERIC : t.testAlphanumeric(r) ? e.ALPHANUMERIC : t.testKanji(r) ? e.KANJI : e.BYTE;
  }, e.toString = function(r) {
    if (r && r.id)
      return r.id;
    throw new Error("Invalid mode");
  }, e.isValid = function(r) {
    return r && r.bit && r.ccBits;
  };
  function i(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + r);
    }
  }
  e.from = function(r, o) {
    if (e.isValid(r))
      return r;
    try {
      return i(r);
    } catch {
      return o;
    }
  };
})(yt);
(function(e) {
  const n = Ce, t = er, i = Gi, r = yt, o = Fo, s = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, l = n.getBCHDigit(s);
  function f(u, h, b) {
    for (let T = 1; T <= 40; T++)
      if (h <= e.getCapacity(T, b, u))
        return T;
  }
  function a(u, h) {
    return r.getCharCountIndicator(u, h) + 4;
  }
  function c(u, h) {
    let b = 0;
    return u.forEach(function(T) {
      const P = a(T.mode, h);
      b += P + T.getBitsLength();
    }), b;
  }
  function g(u, h) {
    for (let b = 1; b <= 40; b++)
      if (c(u, b) <= e.getCapacity(b, h, r.MIXED))
        return b;
  }
  e.from = function(u, h) {
    return o.isValid(u) ? parseInt(u, 10) : h;
  }, e.getCapacity = function(u, h, b) {
    if (!o.isValid(u))
      throw new Error("Invalid QR Code version");
    typeof b > "u" && (b = r.BYTE);
    const T = n.getSymbolTotalCodewords(u), P = t.getTotalCodewordsCount(u, h), y = (T - P) * 8;
    if (b === r.MIXED)
      return y;
    const C = y - a(b, u);
    switch (b) {
      case r.NUMERIC:
        return Math.floor(C / 10 * 3);
      case r.ALPHANUMERIC:
        return Math.floor(C / 11 * 2);
      case r.KANJI:
        return Math.floor(C / 13);
      case r.BYTE:
      default:
        return Math.floor(C / 8);
    }
  }, e.getBestVersionForData = function(u, h) {
    let b;
    const T = i.from(h, i.M);
    if (Array.isArray(u)) {
      if (u.length > 1)
        return g(u, T);
      if (u.length === 0)
        return 1;
      b = u[0];
    } else
      b = u;
    return f(b.mode, b.getLength(), T);
  }, e.getEncodedBits = function(u) {
    if (!o.isValid(u) || u < 7)
      throw new Error("Invalid QR Code version");
    let h = u << 12;
    for (; n.getBCHDigit(h) - l >= 0; )
      h ^= s << n.getBCHDigit(h) - l;
    return u << 12 | h;
  };
})(Ka);
var Wa = {};
const eo = Ce, Ya = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, wh = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, Us = eo.getBCHDigit(Ya);
Wa.getEncodedBits = function(e, n) {
  const t = e.bit << 3 | n;
  let i = t << 10;
  for (; eo.getBCHDigit(i) - Us >= 0; )
    i ^= Ya << eo.getBCHDigit(i) - Us;
  return (t << 10 | i) ^ wh;
};
var Va = {};
const mh = yt;
function Qt(e) {
  this.mode = mh.NUMERIC, this.data = e.toString();
}
Qt.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
Qt.prototype.getLength = function() {
  return this.data.length;
};
Qt.prototype.getBitsLength = function() {
  return Qt.getBitsLength(this.data.length);
};
Qt.prototype.write = function(e) {
  let n, t, i;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    t = this.data.substr(n, 3), i = parseInt(t, 10), e.put(i, 10);
  const r = this.data.length - n;
  r > 0 && (t = this.data.substr(n), i = parseInt(t, 10), e.put(i, r * 3 + 1));
};
var yh = Qt;
const vh = yt, mr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function Gt(e) {
  this.mode = vh.ALPHANUMERIC, this.data = e;
}
Gt.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
Gt.prototype.getLength = function() {
  return this.data.length;
};
Gt.prototype.getBitsLength = function() {
  return Gt.getBitsLength(this.data.length);
};
Gt.prototype.write = function(e) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let t = mr.indexOf(this.data[n]) * 45;
    t += mr.indexOf(this.data[n + 1]), e.put(t, 11);
  }
  this.data.length % 2 && e.put(mr.indexOf(this.data[n]), 6);
};
var xh = Gt, Eh = function(e) {
  for (var n = [], t = e.length, i = 0; i < t; i++) {
    var r = e.charCodeAt(i);
    if (r >= 55296 && r <= 56319 && t > i + 1) {
      var o = e.charCodeAt(i + 1);
      o >= 56320 && o <= 57343 && (r = (r - 55296) * 1024 + o - 56320 + 65536, i += 1);
    }
    if (r < 128) {
      n.push(r);
      continue;
    }
    if (r < 2048) {
      n.push(r >> 6 | 192), n.push(r & 63 | 128);
      continue;
    }
    if (r < 55296 || r >= 57344 && r < 65536) {
      n.push(r >> 12 | 224), n.push(r >> 6 & 63 | 128), n.push(r & 63 | 128);
      continue;
    }
    if (r >= 65536 && r <= 1114111) {
      n.push(r >> 18 | 240), n.push(r >> 12 & 63 | 128), n.push(r >> 6 & 63 | 128), n.push(r & 63 | 128);
      continue;
    }
    n.push(239, 191, 189);
  }
  return new Uint8Array(n).buffer;
};
const Ah = Eh, kh = yt;
function en(e) {
  this.mode = kh.BYTE, typeof e == "string" && (e = Ah(e)), this.data = new Uint8Array(e);
}
en.getBitsLength = function(e) {
  return e * 8;
};
en.prototype.getLength = function() {
  return this.data.length;
};
en.prototype.getBitsLength = function() {
  return en.getBitsLength(this.data.length);
};
en.prototype.write = function(e) {
  for (let n = 0, t = this.data.length; n < t; n++)
    e.put(this.data[n], 8);
};
var Th = en;
const Sh = yt, Ih = Ce;
function tn(e) {
  this.mode = Sh.KANJI, this.data = e;
}
tn.getBitsLength = function(e) {
  return e * 13;
};
tn.prototype.getLength = function() {
  return this.data.length;
};
tn.prototype.getBitsLength = function() {
  return tn.getBitsLength(this.data.length);
};
tn.prototype.write = function(e) {
  let n;
  for (n = 0; n < this.data.length; n++) {
    let t = Ih.toSJIS(this.data[n]);
    if (t >= 33088 && t <= 40956)
      t -= 33088;
    else if (t >= 57408 && t <= 60351)
      t -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[n] + `
Make sure your charset is UTF-8`
      );
    t = (t >>> 8 & 255) * 192 + (t & 255), e.put(t, 13);
  }
};
var Ch = tn, to = {}, Oh = {
  get exports() {
    return to;
  },
  set exports(e) {
    to = e;
  }
};
(function(e) {
  var n = {
    single_source_shortest_paths: function(t, i, r) {
      var o = {}, s = {};
      s[i] = 0;
      var l = n.PriorityQueue.make();
      l.push(i, 0);
      for (var f, a, c, g, u, h, b, T, P; !l.empty(); ) {
        f = l.pop(), a = f.value, g = f.cost, u = t[a] || {};
        for (c in u)
          u.hasOwnProperty(c) && (h = u[c], b = g + h, T = s[c], P = typeof s[c] > "u", (P || T > b) && (s[c] = b, l.push(c, b), o[c] = a));
      }
      if (typeof r < "u" && typeof s[r] > "u") {
        var y = ["Could not find a path from ", i, " to ", r, "."].join("");
        throw new Error(y);
      }
      return o;
    },
    extract_shortest_path_from_predecessor_list: function(t, i) {
      for (var r = [], o = i; o; )
        r.push(o), t[o], o = t[o];
      return r.reverse(), r;
    },
    find_path: function(t, i, r) {
      var o = n.single_source_shortest_paths(t, i, r);
      return n.extract_shortest_path_from_predecessor_list(
        o,
        r
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(t) {
        var i = n.PriorityQueue, r = {}, o;
        t = t || {};
        for (o in i)
          i.hasOwnProperty(o) && (r[o] = i[o]);
        return r.queue = [], r.sorter = t.sorter || i.default_sorter, r;
      },
      default_sorter: function(t, i) {
        return t.cost - i.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(t, i) {
        var r = { value: t, cost: i };
        this.queue.push(r), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  e.exports = n;
})(Oh);
(function(e) {
  const n = yt, t = yh, i = xh, r = Th, o = Ch, s = Xe, l = Ce, f = to;
  function a(y) {
    return unescape(encodeURIComponent(y)).length;
  }
  function c(y, C, m) {
    const p = [];
    let v;
    for (; (v = y.exec(m)) !== null; )
      p.push({
        data: v[0],
        index: v.index,
        mode: C,
        length: v[0].length
      });
    return p;
  }
  function g(y) {
    const C = c(s.NUMERIC, n.NUMERIC, y), m = c(s.ALPHANUMERIC, n.ALPHANUMERIC, y);
    let p, v;
    return l.isKanjiModeEnabled() ? (p = c(s.BYTE, n.BYTE, y), v = c(s.KANJI, n.KANJI, y)) : (p = c(s.BYTE_KANJI, n.BYTE, y), v = []), C.concat(m, p, v).sort(function(N, A) {
      return N.index - A.index;
    }).map(function(N) {
      return {
        data: N.data,
        mode: N.mode,
        length: N.length
      };
    });
  }
  function u(y, C) {
    switch (C) {
      case n.NUMERIC:
        return t.getBitsLength(y);
      case n.ALPHANUMERIC:
        return i.getBitsLength(y);
      case n.KANJI:
        return o.getBitsLength(y);
      case n.BYTE:
        return r.getBitsLength(y);
    }
  }
  function h(y) {
    return y.reduce(function(C, m) {
      const p = C.length - 1 >= 0 ? C[C.length - 1] : null;
      return p && p.mode === m.mode ? (C[C.length - 1].data += m.data, C) : (C.push(m), C);
    }, []);
  }
  function b(y) {
    const C = [];
    for (let m = 0; m < y.length; m++) {
      const p = y[m];
      switch (p.mode) {
        case n.NUMERIC:
          C.push([
            p,
            { data: p.data, mode: n.ALPHANUMERIC, length: p.length },
            { data: p.data, mode: n.BYTE, length: p.length }
          ]);
          break;
        case n.ALPHANUMERIC:
          C.push([
            p,
            { data: p.data, mode: n.BYTE, length: p.length }
          ]);
          break;
        case n.KANJI:
          C.push([
            p,
            { data: p.data, mode: n.BYTE, length: a(p.data) }
          ]);
          break;
        case n.BYTE:
          C.push([
            { data: p.data, mode: n.BYTE, length: a(p.data) }
          ]);
      }
    }
    return C;
  }
  function T(y, C) {
    const m = {}, p = { start: {} };
    let v = ["start"];
    for (let N = 0; N < y.length; N++) {
      const A = y[N], F = [];
      for (let B = 0; B < A.length; B++) {
        const R = A[B], U = "" + N + B;
        F.push(U), m[U] = { node: R, lastCount: 0 }, p[U] = {};
        for (let ae = 0; ae < v.length; ae++) {
          const ie = v[ae];
          m[ie] && m[ie].node.mode === R.mode ? (p[ie][U] = u(m[ie].lastCount + R.length, R.mode) - u(m[ie].lastCount, R.mode), m[ie].lastCount += R.length) : (m[ie] && (m[ie].lastCount = R.length), p[ie][U] = u(R.length, R.mode) + 4 + n.getCharCountIndicator(R.mode, C));
        }
      }
      v = F;
    }
    for (let N = 0; N < v.length; N++)
      p[v[N]].end = 0;
    return { map: p, table: m };
  }
  function P(y, C) {
    let m;
    const p = n.getBestModeForData(y);
    if (m = n.from(C, p), m !== n.BYTE && m.bit < p.bit)
      throw new Error('"' + y + '" cannot be encoded with mode ' + n.toString(m) + `.
 Suggested mode is: ` + n.toString(p));
    switch (m === n.KANJI && !l.isKanjiModeEnabled() && (m = n.BYTE), m) {
      case n.NUMERIC:
        return new t(y);
      case n.ALPHANUMERIC:
        return new i(y);
      case n.KANJI:
        return new o(y);
      case n.BYTE:
        return new r(y);
    }
  }
  e.fromArray = function(y) {
    return y.reduce(function(C, m) {
      return typeof m == "string" ? C.push(P(m, null)) : m.data && C.push(P(m.data, m.mode)), C;
    }, []);
  }, e.fromString = function(y, C) {
    const m = g(y, l.isKanjiModeEnabled()), p = b(m), v = T(p, C), N = f.find_path(v.map, "start", "end"), A = [];
    for (let F = 1; F < N.length - 1; F++)
      A.push(v.table[N[F]].node);
    return e.fromArray(h(A));
  }, e.rawSplit = function(y) {
    return e.fromArray(
      g(y, l.isKanjiModeEnabled())
    );
  };
})(Va);
const nr = Ce, yr = Gi, Rh = fh, Mh = ch, Ph = Ba, Nh = $a, no = ja, io = er, zh = dh, Pi = Ka, Dh = Wa, Lh = yt, vr = Va;
function Fh(e, n) {
  const t = e.size, i = Nh.getPositions(n);
  for (let r = 0; r < i.length; r++) {
    const o = i[r][0], s = i[r][1];
    for (let l = -1; l <= 7; l++)
      if (!(o + l <= -1 || t <= o + l))
        for (let f = -1; f <= 7; f++)
          s + f <= -1 || t <= s + f || (l >= 0 && l <= 6 && (f === 0 || f === 6) || f >= 0 && f <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && f >= 2 && f <= 4 ? e.set(o + l, s + f, !0, !0) : e.set(o + l, s + f, !1, !0));
  }
}
function Uh(e) {
  const n = e.size;
  for (let t = 8; t < n - 8; t++) {
    const i = t % 2 === 0;
    e.set(t, 6, i, !0), e.set(6, t, i, !0);
  }
}
function Bh(e, n) {
  const t = Ph.getPositions(n);
  for (let i = 0; i < t.length; i++) {
    const r = t[i][0], o = t[i][1];
    for (let s = -2; s <= 2; s++)
      for (let l = -2; l <= 2; l++)
        s === -2 || s === 2 || l === -2 || l === 2 || s === 0 && l === 0 ? e.set(r + s, o + l, !0, !0) : e.set(r + s, o + l, !1, !0);
  }
}
function $h(e, n) {
  const t = e.size, i = Pi.getEncodedBits(n);
  let r, o, s;
  for (let l = 0; l < 18; l++)
    r = Math.floor(l / 3), o = l % 3 + t - 8 - 3, s = (i >> l & 1) === 1, e.set(r, o, s, !0), e.set(o, r, s, !0);
}
function xr(e, n, t) {
  const i = e.size, r = Dh.getEncodedBits(n, t);
  let o, s;
  for (o = 0; o < 15; o++)
    s = (r >> o & 1) === 1, o < 6 ? e.set(o, 8, s, !0) : o < 8 ? e.set(o + 1, 8, s, !0) : e.set(i - 15 + o, 8, s, !0), o < 8 ? e.set(8, i - o - 1, s, !0) : o < 9 ? e.set(8, 15 - o - 1 + 1, s, !0) : e.set(8, 15 - o - 1, s, !0);
  e.set(i - 8, 8, 1, !0);
}
function jh(e, n) {
  const t = e.size;
  let i = -1, r = t - 1, o = 7, s = 0;
  for (let l = t - 1; l > 0; l -= 2)
    for (l === 6 && l--; ; ) {
      for (let f = 0; f < 2; f++)
        if (!e.isReserved(r, l - f)) {
          let a = !1;
          s < n.length && (a = (n[s] >>> o & 1) === 1), e.set(r, l - f, a), o--, o === -1 && (s++, o = 7);
        }
      if (r += i, r < 0 || t <= r) {
        r -= i, i = -i;
        break;
      }
    }
}
function Hh(e, n, t) {
  const i = new Rh();
  t.forEach(function(f) {
    i.put(f.mode.bit, 4), i.put(f.getLength(), Lh.getCharCountIndicator(f.mode, e)), f.write(i);
  });
  const r = nr.getSymbolTotalCodewords(e), o = io.getTotalCodewordsCount(e, n), s = (r - o) * 8;
  for (i.getLengthInBits() + 4 <= s && i.put(0, 4); i.getLengthInBits() % 8 !== 0; )
    i.putBit(0);
  const l = (s - i.getLengthInBits()) / 8;
  for (let f = 0; f < l; f++)
    i.put(f % 2 ? 17 : 236, 8);
  return Zh(i, e, n);
}
function Zh(e, n, t) {
  const i = nr.getSymbolTotalCodewords(n), r = io.getTotalCodewordsCount(n, t), o = i - r, s = io.getBlocksCount(n, t), l = i % s, f = s - l, a = Math.floor(i / s), c = Math.floor(o / s), g = c + 1, u = a - c, h = new zh(u);
  let b = 0;
  const T = new Array(s), P = new Array(s);
  let y = 0;
  const C = new Uint8Array(e.buffer);
  for (let A = 0; A < s; A++) {
    const F = A < f ? c : g;
    T[A] = C.slice(b, b + F), P[A] = h.encode(T[A]), b += F, y = Math.max(y, F);
  }
  const m = new Uint8Array(i);
  let p = 0, v, N;
  for (v = 0; v < y; v++)
    for (N = 0; N < s; N++)
      v < T[N].length && (m[p++] = T[N][v]);
  for (v = 0; v < u; v++)
    for (N = 0; N < s; N++)
      m[p++] = P[N][v];
  return m;
}
function Kh(e, n, t, i) {
  let r;
  if (Array.isArray(e))
    r = vr.fromArray(e);
  else if (typeof e == "string") {
    let a = n;
    if (!a) {
      const c = vr.rawSplit(e);
      a = Pi.getBestVersionForData(c, t);
    }
    r = vr.fromString(e, a || 40);
  } else
    throw new Error("Invalid data");
  const o = Pi.getBestVersionForData(r, t);
  if (!o)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!n)
    n = o;
  else if (n < o)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + o + `.
`
    );
  const s = Hh(n, t, r), l = nr.getSymbolSize(n), f = new Mh(l);
  return Fh(f, n), Uh(f), Bh(f, n), xr(f, t, 0), n >= 7 && $h(f, n), jh(f, s), isNaN(i) && (i = no.getBestMask(
    f,
    xr.bind(null, f, t)
  )), no.applyMask(i, f), xr(f, t, i), {
    modules: f,
    version: n,
    errorCorrectionLevel: t,
    maskPattern: i,
    segments: r
  };
}
Fa.create = function(e, n) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let t = yr.M, i, r;
  return typeof n < "u" && (t = yr.from(n.errorCorrectionLevel, yr.M), i = Pi.from(n.version), r = no.from(n.maskPattern), n.toSJISFunc && nr.setToSJISFunction(n.toSJISFunc)), Kh(e, i, t, r);
};
var Ja = {}, Uo = {};
(function(e) {
  function n(t) {
    if (typeof t == "number" && (t = t.toString()), typeof t != "string")
      throw new Error("Color should be defined as hex string");
    let i = t.slice().replace("#", "").split("");
    if (i.length < 3 || i.length === 5 || i.length > 8)
      throw new Error("Invalid hex color: " + t);
    (i.length === 3 || i.length === 4) && (i = Array.prototype.concat.apply([], i.map(function(o) {
      return [o, o];
    }))), i.length === 6 && i.push("F", "F");
    const r = parseInt(i.join(""), 16);
    return {
      r: r >> 24 & 255,
      g: r >> 16 & 255,
      b: r >> 8 & 255,
      a: r & 255,
      hex: "#" + i.slice(0, 6).join("")
    };
  }
  e.getOptions = function(t) {
    t || (t = {}), t.color || (t.color = {});
    const i = typeof t.margin > "u" || t.margin === null || t.margin < 0 ? 4 : t.margin, r = t.width && t.width >= 21 ? t.width : void 0, o = t.scale || 4;
    return {
      width: r,
      scale: r ? 4 : o,
      margin: i,
      color: {
        dark: n(t.color.dark || "#000000ff"),
        light: n(t.color.light || "#ffffffff")
      },
      type: t.type,
      rendererOpts: t.rendererOpts || {}
    };
  }, e.getScale = function(t, i) {
    return i.width && i.width >= t + i.margin * 2 ? i.width / (t + i.margin * 2) : i.scale;
  }, e.getImageWidth = function(t, i) {
    const r = e.getScale(t, i);
    return Math.floor((t + i.margin * 2) * r);
  }, e.qrToImageData = function(t, i, r) {
    const o = i.modules.size, s = i.modules.data, l = e.getScale(o, r), f = Math.floor((o + r.margin * 2) * l), a = r.margin * l, c = [r.color.light, r.color.dark];
    for (let g = 0; g < f; g++)
      for (let u = 0; u < f; u++) {
        let h = (g * f + u) * 4, b = r.color.light;
        if (g >= a && u >= a && g < f - a && u < f - a) {
          const T = Math.floor((g - a) / l), P = Math.floor((u - a) / l);
          b = c[s[T * o + P] ? 1 : 0];
        }
        t[h++] = b.r, t[h++] = b.g, t[h++] = b.b, t[h] = b.a;
      }
  };
})(Uo);
(function(e) {
  const n = Uo;
  function t(r, o, s) {
    r.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = s, o.width = s, o.style.height = s + "px", o.style.width = s + "px";
  }
  function i() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  e.render = function(r, o, s) {
    let l = s, f = o;
    typeof l > "u" && (!o || !o.getContext) && (l = o, o = void 0), o || (f = i()), l = n.getOptions(l);
    const a = n.getImageWidth(r.modules.size, l), c = f.getContext("2d"), g = c.createImageData(a, a);
    return n.qrToImageData(g.data, r, l), t(c, f, a), c.putImageData(g, 0, 0), f;
  }, e.renderToDataURL = function(r, o, s) {
    let l = s;
    typeof l > "u" && (!o || !o.getContext) && (l = o, o = void 0), l || (l = {});
    const f = e.render(r, o, l), a = l.type || "image/png", c = l.rendererOpts || {};
    return f.toDataURL(a, c.quality);
  };
})(Ja);
var Xa = {};
const qh = Uo;
function Bs(e, n) {
  const t = e.a / 255, i = n + '="' + e.hex + '"';
  return t < 1 ? i + " " + n + '-opacity="' + t.toFixed(2).slice(1) + '"' : i;
}
function Er(e, n, t) {
  let i = e + n;
  return typeof t < "u" && (i += " " + t), i;
}
function Wh(e, n, t) {
  let i = "", r = 0, o = !1, s = 0;
  for (let l = 0; l < e.length; l++) {
    const f = Math.floor(l % n), a = Math.floor(l / n);
    !f && !o && (o = !0), e[l] ? (s++, l > 0 && f > 0 && e[l - 1] || (i += o ? Er("M", f + t, 0.5 + a + t) : Er("m", r, 0), r = 0, o = !1), f + 1 < n && e[l + 1] || (i += Er("h", s), s = 0)) : r++;
  }
  return i;
}
Xa.render = function(e, n, t) {
  const i = qh.getOptions(n), r = e.modules.size, o = e.modules.data, s = r + i.margin * 2, l = i.color.light.a ? "<path " + Bs(i.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", f = "<path " + Bs(i.color.dark, "stroke") + ' d="' + Wh(o, r, i.margin) + '"/>', a = 'viewBox="0 0 ' + s + " " + s + '"', c = '<svg xmlns="http://www.w3.org/2000/svg" ' + (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") + a + ' shape-rendering="crispEdges">' + l + f + `</svg>
`;
  return typeof t == "function" && t(null, c), c;
};
const Yh = lh, ro = Fa, Qa = Ja, Vh = Xa;
function Bo(e, n, t, i, r) {
  const o = [].slice.call(arguments, 1), s = o.length, l = typeof o[s - 1] == "function";
  if (!l && !Yh())
    throw new Error("Callback required as last argument");
  if (l) {
    if (s < 2)
      throw new Error("Too few arguments provided");
    s === 2 ? (r = t, t = n, n = i = void 0) : s === 3 && (n.getContext && typeof r > "u" ? (r = i, i = void 0) : (r = i, i = t, t = n, n = void 0));
  } else {
    if (s < 1)
      throw new Error("Too few arguments provided");
    return s === 1 ? (t = n, n = i = void 0) : s === 2 && !n.getContext && (i = t, t = n, n = void 0), new Promise(function(f, a) {
      try {
        const c = ro.create(t, i);
        f(e(c, n, i));
      } catch (c) {
        a(c);
      }
    });
  }
  try {
    const f = ro.create(t, i);
    r(null, e(f, n, i));
  } catch (f) {
    r(f);
  }
}
ro.create;
Bo.bind(null, Qa.render);
Bo.bind(null, Qa.renderToDataURL);
Bo.bind(null, function(e, n, t) {
  return Vh.render(e, t);
});
fn({
  installed: !1,
  instances: []
});
const Bn = (e, n) => window.addEventListener("keydown", Da(e, n)), Ni = (e, n) => {
  Id("keydown", Da(e, n));
}, Jh = {
  test: /agdm\.tv/,
  fn() {
    Hf(() => {
      window.requestAnimationFrame = () => {
      };
    }), Ni("right", () => {
      var t, i;
      const e = document.querySelector(
        ".tab-pane.active > ul > li > a.btn-warm"
      ), n = (t = e == null ? void 0 : e.parentElement) == null ? void 0 : t.nextElementSibling;
      (i = n == null ? void 0 : n.querySelector("a")) == null || i.click();
    }), Ni("left", () => {
      var t, i;
      const e = document.querySelector(
        ".tab-pane.active > ul > li > a.btn-warm"
      ), n = (t = e == null ? void 0 : e.parentElement) == null ? void 0 : t.previousElementSibling;
      (i = n == null ? void 0 : n.querySelector("a")) == null || i.click();
    });
  }
}, Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Jh
}, Symbol.toStringTag, { value: "Module" }));
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const Qh = 4, $s = 0, js = 1, Gh = 2;
function un(e) {
  let n = e.length;
  for (; --n >= 0; )
    e[n] = 0;
}
const e0 = 0, Ga = 1, t0 = 2, n0 = 3, i0 = 258, $o = 29, ni = 256, $n = ni + 1 + $o, Wt = 30, jo = 19, ef = 2 * $n + 1, Ct = 15, Ar = 16, r0 = 7, Ho = 256, tf = 16, nf = 17, rf = 18, oo = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), Ti = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), o0 = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), of = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), s0 = 512, tt = new Array(($n + 2) * 2);
un(tt);
const In = new Array(Wt * 2);
un(In);
const jn = new Array(s0);
un(jn);
const Hn = new Array(i0 - n0 + 1);
un(Hn);
const Zo = new Array($o);
un(Zo);
const zi = new Array(Wt);
un(zi);
function kr(e, n, t, i, r) {
  this.static_tree = e, this.extra_bits = n, this.extra_base = t, this.elems = i, this.max_length = r, this.has_stree = e && e.length;
}
let sf, lf, af;
function Tr(e, n) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = n;
}
const ff = (e) => e < 256 ? jn[e] : jn[256 + (e >>> 7)], Zn = (e, n) => {
  e.pending_buf[e.pending++] = n & 255, e.pending_buf[e.pending++] = n >>> 8 & 255;
}, xe = (e, n, t) => {
  e.bi_valid > Ar - t ? (e.bi_buf |= n << e.bi_valid & 65535, Zn(e, e.bi_buf), e.bi_buf = n >> Ar - e.bi_valid, e.bi_valid += t - Ar) : (e.bi_buf |= n << e.bi_valid & 65535, e.bi_valid += t);
}, qe = (e, n, t) => {
  xe(
    e,
    t[n * 2],
    t[n * 2 + 1]
    /*.Len*/
  );
}, cf = (e, n) => {
  let t = 0;
  do
    t |= e & 1, e >>>= 1, t <<= 1;
  while (--n > 0);
  return t >>> 1;
}, l0 = (e) => {
  e.bi_valid === 16 ? (Zn(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}, a0 = (e, n) => {
  const t = n.dyn_tree, i = n.max_code, r = n.stat_desc.static_tree, o = n.stat_desc.has_stree, s = n.stat_desc.extra_bits, l = n.stat_desc.extra_base, f = n.stat_desc.max_length;
  let a, c, g, u, h, b, T = 0;
  for (u = 0; u <= Ct; u++)
    e.bl_count[u] = 0;
  for (t[e.heap[e.heap_max] * 2 + 1] = 0, a = e.heap_max + 1; a < ef; a++)
    c = e.heap[a], u = t[t[c * 2 + 1] * 2 + 1] + 1, u > f && (u = f, T++), t[c * 2 + 1] = u, !(c > i) && (e.bl_count[u]++, h = 0, c >= l && (h = s[c - l]), b = t[c * 2], e.opt_len += b * (u + h), o && (e.static_len += b * (r[c * 2 + 1] + h)));
  if (T !== 0) {
    do {
      for (u = f - 1; e.bl_count[u] === 0; )
        u--;
      e.bl_count[u]--, e.bl_count[u + 1] += 2, e.bl_count[f]--, T -= 2;
    } while (T > 0);
    for (u = f; u !== 0; u--)
      for (c = e.bl_count[u]; c !== 0; )
        g = e.heap[--a], !(g > i) && (t[g * 2 + 1] !== u && (e.opt_len += (u - t[g * 2 + 1]) * t[g * 2], t[g * 2 + 1] = u), c--);
  }
}, uf = (e, n, t) => {
  const i = new Array(Ct + 1);
  let r = 0, o, s;
  for (o = 1; o <= Ct; o++)
    r = r + t[o - 1] << 1, i[o] = r;
  for (s = 0; s <= n; s++) {
    let l = e[s * 2 + 1];
    l !== 0 && (e[s * 2] = cf(i[l]++, l));
  }
}, f0 = () => {
  let e, n, t, i, r;
  const o = new Array(Ct + 1);
  for (t = 0, i = 0; i < $o - 1; i++)
    for (Zo[i] = t, e = 0; e < 1 << oo[i]; e++)
      Hn[t++] = i;
  for (Hn[t - 1] = i, r = 0, i = 0; i < 16; i++)
    for (zi[i] = r, e = 0; e < 1 << Ti[i]; e++)
      jn[r++] = i;
  for (r >>= 7; i < Wt; i++)
    for (zi[i] = r << 7, e = 0; e < 1 << Ti[i] - 7; e++)
      jn[256 + r++] = i;
  for (n = 0; n <= Ct; n++)
    o[n] = 0;
  for (e = 0; e <= 143; )
    tt[e * 2 + 1] = 8, e++, o[8]++;
  for (; e <= 255; )
    tt[e * 2 + 1] = 9, e++, o[9]++;
  for (; e <= 279; )
    tt[e * 2 + 1] = 7, e++, o[7]++;
  for (; e <= 287; )
    tt[e * 2 + 1] = 8, e++, o[8]++;
  for (uf(tt, $n + 1, o), e = 0; e < Wt; e++)
    In[e * 2 + 1] = 5, In[e * 2] = cf(e, 5);
  sf = new kr(tt, oo, ni + 1, $n, Ct), lf = new kr(In, Ti, 0, Wt, Ct), af = new kr(new Array(0), o0, 0, jo, r0);
}, df = (e) => {
  let n;
  for (n = 0; n < $n; n++)
    e.dyn_ltree[n * 2] = 0;
  for (n = 0; n < Wt; n++)
    e.dyn_dtree[n * 2] = 0;
  for (n = 0; n < jo; n++)
    e.bl_tree[n * 2] = 0;
  e.dyn_ltree[Ho * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0;
}, hf = (e) => {
  e.bi_valid > 8 ? Zn(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}, Hs = (e, n, t, i) => {
  const r = n * 2, o = t * 2;
  return e[r] < e[o] || e[r] === e[o] && i[n] <= i[t];
}, Sr = (e, n, t) => {
  const i = e.heap[t];
  let r = t << 1;
  for (; r <= e.heap_len && (r < e.heap_len && Hs(n, e.heap[r + 1], e.heap[r], e.depth) && r++, !Hs(n, i, e.heap[r], e.depth)); )
    e.heap[t] = e.heap[r], t = r, r <<= 1;
  e.heap[t] = i;
}, Zs = (e, n, t) => {
  let i, r, o = 0, s, l;
  if (e.sym_next !== 0)
    do
      i = e.pending_buf[e.sym_buf + o++] & 255, i += (e.pending_buf[e.sym_buf + o++] & 255) << 8, r = e.pending_buf[e.sym_buf + o++], i === 0 ? qe(e, r, n) : (s = Hn[r], qe(e, s + ni + 1, n), l = oo[s], l !== 0 && (r -= Zo[s], xe(e, r, l)), i--, s = ff(i), qe(e, s, t), l = Ti[s], l !== 0 && (i -= zi[s], xe(e, i, l)));
    while (o < e.sym_next);
  qe(e, Ho, n);
}, so = (e, n) => {
  const t = n.dyn_tree, i = n.stat_desc.static_tree, r = n.stat_desc.has_stree, o = n.stat_desc.elems;
  let s, l, f = -1, a;
  for (e.heap_len = 0, e.heap_max = ef, s = 0; s < o; s++)
    t[s * 2] !== 0 ? (e.heap[++e.heap_len] = f = s, e.depth[s] = 0) : t[s * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    a = e.heap[++e.heap_len] = f < 2 ? ++f : 0, t[a * 2] = 1, e.depth[a] = 0, e.opt_len--, r && (e.static_len -= i[a * 2 + 1]);
  for (n.max_code = f, s = e.heap_len >> 1; s >= 1; s--)
    Sr(e, t, s);
  a = o;
  do
    s = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], Sr(
      e,
      t,
      1
      /*SMALLEST*/
    ), l = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[--e.heap_max] = s, e.heap[--e.heap_max] = l, t[a * 2] = t[s * 2] + t[l * 2], e.depth[a] = (e.depth[s] >= e.depth[l] ? e.depth[s] : e.depth[l]) + 1, t[s * 2 + 1] = t[l * 2 + 1] = a, e.heap[
      1
      /*SMALLEST*/
    ] = a++, Sr(
      e,
      t,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], a0(e, n), uf(t, f, e.bl_count);
}, Ks = (e, n, t) => {
  let i, r = -1, o, s = n[0 * 2 + 1], l = 0, f = 7, a = 4;
  for (s === 0 && (f = 138, a = 3), n[(t + 1) * 2 + 1] = 65535, i = 0; i <= t; i++)
    o = s, s = n[(i + 1) * 2 + 1], !(++l < f && o === s) && (l < a ? e.bl_tree[o * 2] += l : o !== 0 ? (o !== r && e.bl_tree[o * 2]++, e.bl_tree[tf * 2]++) : l <= 10 ? e.bl_tree[nf * 2]++ : e.bl_tree[rf * 2]++, l = 0, r = o, s === 0 ? (f = 138, a = 3) : o === s ? (f = 6, a = 3) : (f = 7, a = 4));
}, qs = (e, n, t) => {
  let i, r = -1, o, s = n[0 * 2 + 1], l = 0, f = 7, a = 4;
  for (s === 0 && (f = 138, a = 3), i = 0; i <= t; i++)
    if (o = s, s = n[(i + 1) * 2 + 1], !(++l < f && o === s)) {
      if (l < a)
        do
          qe(e, o, e.bl_tree);
        while (--l !== 0);
      else
        o !== 0 ? (o !== r && (qe(e, o, e.bl_tree), l--), qe(e, tf, e.bl_tree), xe(e, l - 3, 2)) : l <= 10 ? (qe(e, nf, e.bl_tree), xe(e, l - 3, 3)) : (qe(e, rf, e.bl_tree), xe(e, l - 11, 7));
      l = 0, r = o, s === 0 ? (f = 138, a = 3) : o === s ? (f = 6, a = 3) : (f = 7, a = 4);
    }
}, c0 = (e) => {
  let n;
  for (Ks(e, e.dyn_ltree, e.l_desc.max_code), Ks(e, e.dyn_dtree, e.d_desc.max_code), so(e, e.bl_desc), n = jo - 1; n >= 3 && e.bl_tree[of[n] * 2 + 1] === 0; n--)
    ;
  return e.opt_len += 3 * (n + 1) + 5 + 5 + 4, n;
}, u0 = (e, n, t, i) => {
  let r;
  for (xe(e, n - 257, 5), xe(e, t - 1, 5), xe(e, i - 4, 4), r = 0; r < i; r++)
    xe(e, e.bl_tree[of[r] * 2 + 1], 3);
  qs(e, e.dyn_ltree, n - 1), qs(e, e.dyn_dtree, t - 1);
}, d0 = (e) => {
  let n = 4093624447, t;
  for (t = 0; t <= 31; t++, n >>>= 1)
    if (n & 1 && e.dyn_ltree[t * 2] !== 0)
      return $s;
  if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0)
    return js;
  for (t = 32; t < ni; t++)
    if (e.dyn_ltree[t * 2] !== 0)
      return js;
  return $s;
};
let Ws = !1;
const h0 = (e) => {
  Ws || (f0(), Ws = !0), e.l_desc = new Tr(e.dyn_ltree, sf), e.d_desc = new Tr(e.dyn_dtree, lf), e.bl_desc = new Tr(e.bl_tree, af), e.bi_buf = 0, e.bi_valid = 0, df(e);
}, _f = (e, n, t, i) => {
  xe(e, (e0 << 1) + (i ? 1 : 0), 3), hf(e), Zn(e, t), Zn(e, ~t), t && e.pending_buf.set(e.window.subarray(n, n + t), e.pending), e.pending += t;
}, _0 = (e) => {
  xe(e, Ga << 1, 3), qe(e, Ho, tt), l0(e);
}, p0 = (e, n, t, i) => {
  let r, o, s = 0;
  e.level > 0 ? (e.strm.data_type === Gh && (e.strm.data_type = d0(e)), so(e, e.l_desc), so(e, e.d_desc), s = c0(e), r = e.opt_len + 3 + 7 >>> 3, o = e.static_len + 3 + 7 >>> 3, o <= r && (r = o)) : r = o = t + 5, t + 4 <= r && n !== -1 ? _f(e, n, t, i) : e.strategy === Qh || o === r ? (xe(e, (Ga << 1) + (i ? 1 : 0), 3), Zs(e, tt, In)) : (xe(e, (t0 << 1) + (i ? 1 : 0), 3), u0(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), Zs(e, e.dyn_ltree, e.dyn_dtree)), df(e), i && hf(e);
}, g0 = (e, n, t) => (e.pending_buf[e.sym_buf + e.sym_next++] = n, e.pending_buf[e.sym_buf + e.sym_next++] = n >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = t, n === 0 ? e.dyn_ltree[t * 2]++ : (e.matches++, n--, e.dyn_ltree[(Hn[t] + ni + 1) * 2]++, e.dyn_dtree[ff(n) * 2]++), e.sym_next === e.sym_end);
var b0 = h0, w0 = _f, m0 = p0, y0 = g0, v0 = _0, x0 = {
  _tr_init: b0,
  _tr_stored_block: w0,
  _tr_flush_block: m0,
  _tr_tally: y0,
  _tr_align: v0
};
const E0 = (e, n, t, i) => {
  let r = e & 65535 | 0, o = e >>> 16 & 65535 | 0, s = 0;
  for (; t !== 0; ) {
    s = t > 2e3 ? 2e3 : t, t -= s;
    do
      r = r + n[i++] | 0, o = o + r | 0;
    while (--s);
    r %= 65521, o %= 65521;
  }
  return r | o << 16 | 0;
};
var Kn = E0;
const A0 = () => {
  let e, n = [];
  for (var t = 0; t < 256; t++) {
    e = t;
    for (var i = 0; i < 8; i++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    n[t] = e;
  }
  return n;
}, k0 = new Uint32Array(A0()), T0 = (e, n, t, i) => {
  const r = k0, o = i + t;
  e ^= -1;
  for (let s = i; s < o; s++)
    e = e >>> 8 ^ r[(e ^ n[s]) & 255];
  return e ^ -1;
};
var fe = T0, qn = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, ir = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: S0, _tr_stored_block: lo, _tr_flush_block: I0, _tr_tally: _t, _tr_align: C0 } = x0, {
  Z_NO_FLUSH: pt,
  Z_PARTIAL_FLUSH: O0,
  Z_FULL_FLUSH: R0,
  Z_FINISH: Re,
  Z_BLOCK: Ys,
  Z_OK: ue,
  Z_STREAM_END: Vs,
  Z_STREAM_ERROR: Ye,
  Z_DATA_ERROR: M0,
  Z_BUF_ERROR: Ir,
  Z_DEFAULT_COMPRESSION: P0,
  Z_FILTERED: N0,
  Z_HUFFMAN_ONLY: bi,
  Z_RLE: z0,
  Z_FIXED: D0,
  Z_DEFAULT_STRATEGY: L0,
  Z_UNKNOWN: F0,
  Z_DEFLATED: rr
} = ir, U0 = 9, B0 = 15, $0 = 8, j0 = 29, H0 = 256, ao = H0 + 1 + j0, Z0 = 30, K0 = 19, q0 = 2 * ao + 1, W0 = 15, K = 3, ct = 258, Ve = ct + K + 1, Y0 = 32, nn = 42, Ko = 57, fo = 69, co = 73, uo = 91, ho = 103, Ot = 113, yn = 666, me = 1, dn = 2, Nt = 3, hn = 4, V0 = 3, Rt = (e, n) => (e.msg = qn[n], n), Js = (e) => e * 2 - (e > 4 ? 9 : 0), lt = (e) => {
  let n = e.length;
  for (; --n >= 0; )
    e[n] = 0;
}, J0 = (e) => {
  let n, t, i, r = e.w_size;
  n = e.hash_size, i = n;
  do
    t = e.head[--i], e.head[i] = t >= r ? t - r : 0;
  while (--n);
  n = r, i = n;
  do
    t = e.prev[--i], e.prev[i] = t >= r ? t - r : 0;
  while (--n);
};
let X0 = (e, n, t) => (n << e.hash_shift ^ t) & e.hash_mask, gt = X0;
const Te = (e) => {
  const n = e.state;
  let t = n.pending;
  t > e.avail_out && (t = e.avail_out), t !== 0 && (e.output.set(n.pending_buf.subarray(n.pending_out, n.pending_out + t), e.next_out), e.next_out += t, n.pending_out += t, e.total_out += t, e.avail_out -= t, n.pending -= t, n.pending === 0 && (n.pending_out = 0));
}, Ie = (e, n) => {
  I0(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, n), e.block_start = e.strstart, Te(e.strm);
}, J = (e, n) => {
  e.pending_buf[e.pending++] = n;
}, wn = (e, n) => {
  e.pending_buf[e.pending++] = n >>> 8 & 255, e.pending_buf[e.pending++] = n & 255;
}, _o = (e, n, t, i) => {
  let r = e.avail_in;
  return r > i && (r = i), r === 0 ? 0 : (e.avail_in -= r, n.set(e.input.subarray(e.next_in, e.next_in + r), t), e.state.wrap === 1 ? e.adler = Kn(e.adler, n, r, t) : e.state.wrap === 2 && (e.adler = fe(e.adler, n, r, t)), e.next_in += r, e.total_in += r, r);
}, pf = (e, n) => {
  let t = e.max_chain_length, i = e.strstart, r, o, s = e.prev_length, l = e.nice_match;
  const f = e.strstart > e.w_size - Ve ? e.strstart - (e.w_size - Ve) : 0, a = e.window, c = e.w_mask, g = e.prev, u = e.strstart + ct;
  let h = a[i + s - 1], b = a[i + s];
  e.prev_length >= e.good_match && (t >>= 2), l > e.lookahead && (l = e.lookahead);
  do
    if (r = n, !(a[r + s] !== b || a[r + s - 1] !== h || a[r] !== a[i] || a[++r] !== a[i + 1])) {
      i += 2, r++;
      do
        ;
      while (a[++i] === a[++r] && a[++i] === a[++r] && a[++i] === a[++r] && a[++i] === a[++r] && a[++i] === a[++r] && a[++i] === a[++r] && a[++i] === a[++r] && a[++i] === a[++r] && i < u);
      if (o = ct - (u - i), i = u - ct, o > s) {
        if (e.match_start = n, s = o, o >= l)
          break;
        h = a[i + s - 1], b = a[i + s];
      }
    }
  while ((n = g[n & c]) > f && --t !== 0);
  return s <= e.lookahead ? s : e.lookahead;
}, rn = (e) => {
  const n = e.w_size;
  let t, i, r;
  do {
    if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= n + (n - Ve) && (e.window.set(e.window.subarray(n, n + n - i), 0), e.match_start -= n, e.strstart -= n, e.block_start -= n, e.insert > e.strstart && (e.insert = e.strstart), J0(e), i += n), e.strm.avail_in === 0)
      break;
    if (t = _o(e.strm, e.window, e.strstart + e.lookahead, i), e.lookahead += t, e.lookahead + e.insert >= K)
      for (r = e.strstart - e.insert, e.ins_h = e.window[r], e.ins_h = gt(e, e.ins_h, e.window[r + 1]); e.insert && (e.ins_h = gt(e, e.ins_h, e.window[r + K - 1]), e.prev[r & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = r, r++, e.insert--, !(e.lookahead + e.insert < K)); )
        ;
  } while (e.lookahead < Ve && e.strm.avail_in !== 0);
}, gf = (e, n) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, i, r, o, s = 0, l = e.strm.avail_in;
  do {
    if (i = 65535, o = e.bi_valid + 42 >> 3, e.strm.avail_out < o || (o = e.strm.avail_out - o, r = e.strstart - e.block_start, i > r + e.strm.avail_in && (i = r + e.strm.avail_in), i > o && (i = o), i < t && (i === 0 && n !== Re || n === pt || i !== r + e.strm.avail_in)))
      break;
    s = n === Re && i === r + e.strm.avail_in ? 1 : 0, lo(e, 0, 0, s), e.pending_buf[e.pending - 4] = i, e.pending_buf[e.pending - 3] = i >> 8, e.pending_buf[e.pending - 2] = ~i, e.pending_buf[e.pending - 1] = ~i >> 8, Te(e.strm), r && (r > i && (r = i), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + r), e.strm.next_out), e.strm.next_out += r, e.strm.avail_out -= r, e.strm.total_out += r, e.block_start += r, i -= r), i && (_o(e.strm, e.strm.output, e.strm.next_out, i), e.strm.next_out += i, e.strm.avail_out -= i, e.strm.total_out += i);
  } while (s === 0);
  return l -= e.strm.avail_in, l && (l >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= l && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - l, e.strm.next_in), e.strstart), e.strstart += l, e.insert += l > e.w_size - e.insert ? e.w_size - e.insert : l), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), s ? hn : n !== pt && n !== Re && e.strm.avail_in === 0 && e.strstart === e.block_start ? dn : (o = e.window_size - e.strstart, e.strm.avail_in > o && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, o += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), o > e.strm.avail_in && (o = e.strm.avail_in), o && (_o(e.strm, e.window, e.strstart, o), e.strstart += o, e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o), e.high_water < e.strstart && (e.high_water = e.strstart), o = e.bi_valid + 42 >> 3, o = e.pending_buf_size - o > 65535 ? 65535 : e.pending_buf_size - o, t = o > e.w_size ? e.w_size : o, r = e.strstart - e.block_start, (r >= t || (r || n === Re) && n !== pt && e.strm.avail_in === 0 && r <= o) && (i = r > o ? o : r, s = n === Re && e.strm.avail_in === 0 && i === r ? 1 : 0, lo(e, e.block_start, i, s), e.block_start += i, Te(e.strm)), s ? Nt : me);
}, Cr = (e, n) => {
  let t, i;
  for (; ; ) {
    if (e.lookahead < Ve) {
      if (rn(e), e.lookahead < Ve && n === pt)
        return me;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= K && (e.ins_h = gt(e, e.ins_h, e.window[e.strstart + K - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), t !== 0 && e.strstart - t <= e.w_size - Ve && (e.match_length = pf(e, t)), e.match_length >= K)
      if (i = _t(e, e.strstart - e.match_start, e.match_length - K), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= K) {
        e.match_length--;
        do
          e.strstart++, e.ins_h = gt(e, e.ins_h, e.window[e.strstart + K - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = gt(e, e.ins_h, e.window[e.strstart + 1]);
    else
      i = _t(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (i && (Ie(e, !1), e.strm.avail_out === 0))
      return me;
  }
  return e.insert = e.strstart < K - 1 ? e.strstart : K - 1, n === Re ? (Ie(e, !0), e.strm.avail_out === 0 ? Nt : hn) : e.sym_next && (Ie(e, !1), e.strm.avail_out === 0) ? me : dn;
}, jt = (e, n) => {
  let t, i, r;
  for (; ; ) {
    if (e.lookahead < Ve) {
      if (rn(e), e.lookahead < Ve && n === pt)
        return me;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= K && (e.ins_h = gt(e, e.ins_h, e.window[e.strstart + K - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = K - 1, t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - Ve && (e.match_length = pf(e, t), e.match_length <= 5 && (e.strategy === N0 || e.match_length === K && e.strstart - e.match_start > 4096) && (e.match_length = K - 1)), e.prev_length >= K && e.match_length <= e.prev_length) {
      r = e.strstart + e.lookahead - K, i = _t(e, e.strstart - 1 - e.prev_match, e.prev_length - K), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= r && (e.ins_h = gt(e, e.ins_h, e.window[e.strstart + K - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = K - 1, e.strstart++, i && (Ie(e, !1), e.strm.avail_out === 0))
        return me;
    } else if (e.match_available) {
      if (i = _t(e, 0, e.window[e.strstart - 1]), i && Ie(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return me;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (i = _t(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < K - 1 ? e.strstart : K - 1, n === Re ? (Ie(e, !0), e.strm.avail_out === 0 ? Nt : hn) : e.sym_next && (Ie(e, !1), e.strm.avail_out === 0) ? me : dn;
}, Q0 = (e, n) => {
  let t, i, r, o;
  const s = e.window;
  for (; ; ) {
    if (e.lookahead <= ct) {
      if (rn(e), e.lookahead <= ct && n === pt)
        return me;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= K && e.strstart > 0 && (r = e.strstart - 1, i = s[r], i === s[++r] && i === s[++r] && i === s[++r])) {
      o = e.strstart + ct;
      do
        ;
      while (i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && r < o);
      e.match_length = ct - (o - r), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= K ? (t = _t(e, 1, e.match_length - K), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = _t(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (Ie(e, !1), e.strm.avail_out === 0))
      return me;
  }
  return e.insert = 0, n === Re ? (Ie(e, !0), e.strm.avail_out === 0 ? Nt : hn) : e.sym_next && (Ie(e, !1), e.strm.avail_out === 0) ? me : dn;
}, G0 = (e, n) => {
  let t;
  for (; ; ) {
    if (e.lookahead === 0 && (rn(e), e.lookahead === 0)) {
      if (n === pt)
        return me;
      break;
    }
    if (e.match_length = 0, t = _t(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (Ie(e, !1), e.strm.avail_out === 0))
      return me;
  }
  return e.insert = 0, n === Re ? (Ie(e, !0), e.strm.avail_out === 0 ? Nt : hn) : e.sym_next && (Ie(e, !1), e.strm.avail_out === 0) ? me : dn;
};
function He(e, n, t, i, r) {
  this.good_length = e, this.max_lazy = n, this.nice_length = t, this.max_chain = i, this.func = r;
}
const vn = [
  /*      good lazy nice chain */
  new He(0, 0, 0, 0, gf),
  /* 0 store only */
  new He(4, 4, 8, 4, Cr),
  /* 1 max speed, no lazy matches */
  new He(4, 5, 16, 8, Cr),
  /* 2 */
  new He(4, 6, 32, 32, Cr),
  /* 3 */
  new He(4, 4, 16, 16, jt),
  /* 4 lazy matches */
  new He(8, 16, 32, 32, jt),
  /* 5 */
  new He(8, 16, 128, 128, jt),
  /* 6 */
  new He(8, 32, 128, 256, jt),
  /* 7 */
  new He(32, 128, 258, 1024, jt),
  /* 8 */
  new He(32, 258, 258, 4096, jt)
  /* 9 max compression */
], e_ = (e) => {
  e.window_size = 2 * e.w_size, lt(e.head), e.max_lazy_match = vn[e.level].max_lazy, e.good_match = vn[e.level].good_length, e.nice_match = vn[e.level].nice_length, e.max_chain_length = vn[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = K - 1, e.match_available = 0, e.ins_h = 0;
};
function t_() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = rr, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(q0 * 2), this.dyn_dtree = new Uint16Array((2 * Z0 + 1) * 2), this.bl_tree = new Uint16Array((2 * K0 + 1) * 2), lt(this.dyn_ltree), lt(this.dyn_dtree), lt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(W0 + 1), this.heap = new Uint16Array(2 * ao + 1), lt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * ao + 1), lt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const ii = (e) => {
  if (!e)
    return 1;
  const n = e.state;
  return !n || n.strm !== e || n.status !== nn && //#ifdef GZIP
  n.status !== Ko && //#endif
  n.status !== fo && n.status !== co && n.status !== uo && n.status !== ho && n.status !== Ot && n.status !== yn ? 1 : 0;
}, bf = (e) => {
  if (ii(e))
    return Rt(e, Ye);
  e.total_in = e.total_out = 0, e.data_type = F0;
  const n = e.state;
  return n.pending = 0, n.pending_out = 0, n.wrap < 0 && (n.wrap = -n.wrap), n.status = //#ifdef GZIP
  n.wrap === 2 ? Ko : (
    //#endif
    n.wrap ? nn : Ot
  ), e.adler = n.wrap === 2 ? 0 : 1, n.last_flush = -2, S0(n), ue;
}, wf = (e) => {
  const n = bf(e);
  return n === ue && e_(e.state), n;
}, n_ = (e, n) => ii(e) || e.state.wrap !== 2 ? Ye : (e.state.gzhead = n, ue), mf = (e, n, t, i, r, o) => {
  if (!e)
    return Ye;
  let s = 1;
  if (n === P0 && (n = 6), i < 0 ? (s = 0, i = -i) : i > 15 && (s = 2, i -= 16), r < 1 || r > U0 || t !== rr || i < 8 || i > 15 || n < 0 || n > 9 || o < 0 || o > D0 || i === 8 && s !== 1)
    return Rt(e, Ye);
  i === 8 && (i = 9);
  const l = new t_();
  return e.state = l, l.strm = e, l.status = nn, l.wrap = s, l.gzhead = null, l.w_bits = i, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = r + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + K - 1) / K), l.window = new Uint8Array(l.w_size * 2), l.head = new Uint16Array(l.hash_size), l.prev = new Uint16Array(l.w_size), l.lit_bufsize = 1 << r + 6, l.pending_buf_size = l.lit_bufsize * 4, l.pending_buf = new Uint8Array(l.pending_buf_size), l.sym_buf = l.lit_bufsize, l.sym_end = (l.lit_bufsize - 1) * 3, l.level = n, l.strategy = o, l.method = t, wf(e);
}, i_ = (e, n) => mf(e, n, rr, B0, $0, L0), r_ = (e, n) => {
  if (ii(e) || n > Ys || n < 0)
    return e ? Rt(e, Ye) : Ye;
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === yn && n !== Re)
    return Rt(e, e.avail_out === 0 ? Ir : Ye);
  const i = t.last_flush;
  if (t.last_flush = n, t.pending !== 0) {
    if (Te(e), e.avail_out === 0)
      return t.last_flush = -1, ue;
  } else if (e.avail_in === 0 && Js(n) <= Js(i) && n !== Re)
    return Rt(e, Ir);
  if (t.status === yn && e.avail_in !== 0)
    return Rt(e, Ir);
  if (t.status === nn && t.wrap === 0 && (t.status = Ot), t.status === nn) {
    let r = rr + (t.w_bits - 8 << 4) << 8, o = -1;
    if (t.strategy >= bi || t.level < 2 ? o = 0 : t.level < 6 ? o = 1 : t.level === 6 ? o = 2 : o = 3, r |= o << 6, t.strstart !== 0 && (r |= Y0), r += 31 - r % 31, wn(t, r), t.strstart !== 0 && (wn(t, e.adler >>> 16), wn(t, e.adler & 65535)), e.adler = 1, t.status = Ot, Te(e), t.pending !== 0)
      return t.last_flush = -1, ue;
  }
  if (t.status === Ko) {
    if (e.adler = 0, J(t, 31), J(t, 139), J(t, 8), t.gzhead)
      J(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), J(t, t.gzhead.time & 255), J(t, t.gzhead.time >> 8 & 255), J(t, t.gzhead.time >> 16 & 255), J(t, t.gzhead.time >> 24 & 255), J(t, t.level === 9 ? 2 : t.strategy >= bi || t.level < 2 ? 4 : 0), J(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (J(t, t.gzhead.extra.length & 255), J(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (e.adler = fe(e.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = fo;
    else if (J(t, 0), J(t, 0), J(t, 0), J(t, 0), J(t, 0), J(t, t.level === 9 ? 2 : t.strategy >= bi || t.level < 2 ? 4 : 0), J(t, V0), t.status = Ot, Te(e), t.pending !== 0)
      return t.last_flush = -1, ue;
  }
  if (t.status === fo) {
    if (t.gzhead.extra) {
      let r = t.pending, o = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + o > t.pending_buf_size; ) {
        let l = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + l), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > r && (e.adler = fe(e.adler, t.pending_buf, t.pending - r, r)), t.gzindex += l, Te(e), t.pending !== 0)
          return t.last_flush = -1, ue;
        r = 0, o -= l;
      }
      let s = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(s.subarray(t.gzindex, t.gzindex + o), t.pending), t.pending += o, t.gzhead.hcrc && t.pending > r && (e.adler = fe(e.adler, t.pending_buf, t.pending - r, r)), t.gzindex = 0;
    }
    t.status = co;
  }
  if (t.status === co) {
    if (t.gzhead.name) {
      let r = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > r && (e.adler = fe(e.adler, t.pending_buf, t.pending - r, r)), Te(e), t.pending !== 0)
            return t.last_flush = -1, ue;
          r = 0;
        }
        t.gzindex < t.gzhead.name.length ? o = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : o = 0, J(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > r && (e.adler = fe(e.adler, t.pending_buf, t.pending - r, r)), t.gzindex = 0;
    }
    t.status = uo;
  }
  if (t.status === uo) {
    if (t.gzhead.comment) {
      let r = t.pending, o;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > r && (e.adler = fe(e.adler, t.pending_buf, t.pending - r, r)), Te(e), t.pending !== 0)
            return t.last_flush = -1, ue;
          r = 0;
        }
        t.gzindex < t.gzhead.comment.length ? o = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : o = 0, J(t, o);
      } while (o !== 0);
      t.gzhead.hcrc && t.pending > r && (e.adler = fe(e.adler, t.pending_buf, t.pending - r, r));
    }
    t.status = ho;
  }
  if (t.status === ho) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (Te(e), t.pending !== 0))
        return t.last_flush = -1, ue;
      J(t, e.adler & 255), J(t, e.adler >> 8 & 255), e.adler = 0;
    }
    if (t.status = Ot, Te(e), t.pending !== 0)
      return t.last_flush = -1, ue;
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || n !== pt && t.status !== yn) {
    let r = t.level === 0 ? gf(t, n) : t.strategy === bi ? G0(t, n) : t.strategy === z0 ? Q0(t, n) : vn[t.level].func(t, n);
    if ((r === Nt || r === hn) && (t.status = yn), r === me || r === Nt)
      return e.avail_out === 0 && (t.last_flush = -1), ue;
    if (r === dn && (n === O0 ? C0(t) : n !== Ys && (lo(t, 0, 0, !1), n === R0 && (lt(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), Te(e), e.avail_out === 0))
      return t.last_flush = -1, ue;
  }
  return n !== Re ? ue : t.wrap <= 0 ? Vs : (t.wrap === 2 ? (J(t, e.adler & 255), J(t, e.adler >> 8 & 255), J(t, e.adler >> 16 & 255), J(t, e.adler >> 24 & 255), J(t, e.total_in & 255), J(t, e.total_in >> 8 & 255), J(t, e.total_in >> 16 & 255), J(t, e.total_in >> 24 & 255)) : (wn(t, e.adler >>> 16), wn(t, e.adler & 65535)), Te(e), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? ue : Vs);
}, o_ = (e) => {
  if (ii(e))
    return Ye;
  const n = e.state.status;
  return e.state = null, n === Ot ? Rt(e, M0) : ue;
}, s_ = (e, n) => {
  let t = n.length;
  if (ii(e))
    return Ye;
  const i = e.state, r = i.wrap;
  if (r === 2 || r === 1 && i.status !== nn || i.lookahead)
    return Ye;
  if (r === 1 && (e.adler = Kn(e.adler, n, t, 0)), i.wrap = 0, t >= i.w_size) {
    r === 0 && (lt(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
    let f = new Uint8Array(i.w_size);
    f.set(n.subarray(t - i.w_size, t), 0), n = f, t = i.w_size;
  }
  const o = e.avail_in, s = e.next_in, l = e.input;
  for (e.avail_in = t, e.next_in = 0, e.input = n, rn(i); i.lookahead >= K; ) {
    let f = i.strstart, a = i.lookahead - (K - 1);
    do
      i.ins_h = gt(i, i.ins_h, i.window[f + K - 1]), i.prev[f & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = f, f++;
    while (--a);
    i.strstart = f, i.lookahead = K - 1, rn(i);
  }
  return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = K - 1, i.match_available = 0, e.next_in = s, e.input = l, e.avail_in = o, i.wrap = r, ue;
};
var l_ = i_, a_ = mf, f_ = wf, c_ = bf, u_ = n_, d_ = r_, h_ = o_, __ = s_, p_ = "pako deflate (from Nodeca project)", Cn = {
  deflateInit: l_,
  deflateInit2: a_,
  deflateReset: f_,
  deflateResetKeep: c_,
  deflateSetHeader: u_,
  deflate: d_,
  deflateEnd: h_,
  deflateSetDictionary: __,
  deflateInfo: p_
};
const g_ = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
var b_ = function(e) {
  const n = Array.prototype.slice.call(arguments, 1);
  for (; n.length; ) {
    const t = n.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const i in t)
        g_(t, i) && (e[i] = t[i]);
    }
  }
  return e;
}, w_ = (e) => {
  let n = 0;
  for (let i = 0, r = e.length; i < r; i++)
    n += e[i].length;
  const t = new Uint8Array(n);
  for (let i = 0, r = 0, o = e.length; i < o; i++) {
    let s = e[i];
    t.set(s, r), r += s.length;
  }
  return t;
}, or = {
  assign: b_,
  flattenChunks: w_
};
let yf = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  yf = !1;
}
const Wn = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  Wn[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
Wn[254] = Wn[254] = 1;
var m_ = (e) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(e);
  let n, t, i, r, o, s = e.length, l = 0;
  for (r = 0; r < s; r++)
    t = e.charCodeAt(r), (t & 64512) === 55296 && r + 1 < s && (i = e.charCodeAt(r + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), r++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (n = new Uint8Array(l), o = 0, r = 0; o < l; r++)
    t = e.charCodeAt(r), (t & 64512) === 55296 && r + 1 < s && (i = e.charCodeAt(r + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), r++)), t < 128 ? n[o++] = t : t < 2048 ? (n[o++] = 192 | t >>> 6, n[o++] = 128 | t & 63) : t < 65536 ? (n[o++] = 224 | t >>> 12, n[o++] = 128 | t >>> 6 & 63, n[o++] = 128 | t & 63) : (n[o++] = 240 | t >>> 18, n[o++] = 128 | t >>> 12 & 63, n[o++] = 128 | t >>> 6 & 63, n[o++] = 128 | t & 63);
  return n;
};
const y_ = (e, n) => {
  if (n < 65534 && e.subarray && yf)
    return String.fromCharCode.apply(null, e.length === n ? e : e.subarray(0, n));
  let t = "";
  for (let i = 0; i < n; i++)
    t += String.fromCharCode(e[i]);
  return t;
};
var v_ = (e, n) => {
  const t = n || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(e.subarray(0, n));
  let i, r;
  const o = new Array(t * 2);
  for (r = 0, i = 0; i < t; ) {
    let s = e[i++];
    if (s < 128) {
      o[r++] = s;
      continue;
    }
    let l = Wn[s];
    if (l > 4) {
      o[r++] = 65533, i += l - 1;
      continue;
    }
    for (s &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && i < t; )
      s = s << 6 | e[i++] & 63, l--;
    if (l > 1) {
      o[r++] = 65533;
      continue;
    }
    s < 65536 ? o[r++] = s : (s -= 65536, o[r++] = 55296 | s >> 10 & 1023, o[r++] = 56320 | s & 1023);
  }
  return y_(o, r);
}, x_ = (e, n) => {
  n = n || e.length, n > e.length && (n = e.length);
  let t = n - 1;
  for (; t >= 0 && (e[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? n : t + Wn[e[t]] > n ? t : n;
}, Yn = {
  string2buf: m_,
  buf2string: v_,
  utf8border: x_
};
function E_() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var vf = E_;
const xf = Object.prototype.toString, {
  Z_NO_FLUSH: A_,
  Z_SYNC_FLUSH: k_,
  Z_FULL_FLUSH: T_,
  Z_FINISH: S_,
  Z_OK: Di,
  Z_STREAM_END: I_,
  Z_DEFAULT_COMPRESSION: C_,
  Z_DEFAULT_STRATEGY: O_,
  Z_DEFLATED: R_
} = ir;
function qo(e) {
  this.options = or.assign({
    level: C_,
    method: R_,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: O_
  }, e || {});
  let n = this.options;
  n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new vf(), this.strm.avail_out = 0;
  let t = Cn.deflateInit2(
    this.strm,
    n.level,
    n.method,
    n.windowBits,
    n.memLevel,
    n.strategy
  );
  if (t !== Di)
    throw new Error(qn[t]);
  if (n.header && Cn.deflateSetHeader(this.strm, n.header), n.dictionary) {
    let i;
    if (typeof n.dictionary == "string" ? i = Yn.string2buf(n.dictionary) : xf.call(n.dictionary) === "[object ArrayBuffer]" ? i = new Uint8Array(n.dictionary) : i = n.dictionary, t = Cn.deflateSetDictionary(this.strm, i), t !== Di)
      throw new Error(qn[t]);
    this._dict_set = !0;
  }
}
qo.prototype.push = function(e, n) {
  const t = this.strm, i = this.options.chunkSize;
  let r, o;
  if (this.ended)
    return !1;
  for (n === ~~n ? o = n : o = n === !0 ? S_ : A_, typeof e == "string" ? t.input = Yn.string2buf(e) : xf.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(i), t.next_out = 0, t.avail_out = i), (o === k_ || o === T_) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (r = Cn.deflate(t, o), r === I_)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), r = Cn.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === Di;
    if (t.avail_out === 0) {
      this.onData(t.output);
      continue;
    }
    if (o > 0 && t.next_out > 0) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (t.avail_in === 0)
      break;
  }
  return !0;
};
qo.prototype.onData = function(e) {
  this.chunks.push(e);
};
qo.prototype.onEnd = function(e) {
  e === Di && (this.result = or.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
const wi = 16209, M_ = 16191;
var P_ = function(n, t) {
  let i, r, o, s, l, f, a, c, g, u, h, b, T, P, y, C, m, p, v, N, A, F, B, R;
  const U = n.state;
  i = n.next_in, B = n.input, r = i + (n.avail_in - 5), o = n.next_out, R = n.output, s = o - (t - n.avail_out), l = o + (n.avail_out - 257), f = U.dmax, a = U.wsize, c = U.whave, g = U.wnext, u = U.window, h = U.hold, b = U.bits, T = U.lencode, P = U.distcode, y = (1 << U.lenbits) - 1, C = (1 << U.distbits) - 1;
  e:
    do {
      b < 15 && (h += B[i++] << b, b += 8, h += B[i++] << b, b += 8), m = T[h & y];
      t:
        for (; ; ) {
          if (p = m >>> 24, h >>>= p, b -= p, p = m >>> 16 & 255, p === 0)
            R[o++] = m & 65535;
          else if (p & 16) {
            v = m & 65535, p &= 15, p && (b < p && (h += B[i++] << b, b += 8), v += h & (1 << p) - 1, h >>>= p, b -= p), b < 15 && (h += B[i++] << b, b += 8, h += B[i++] << b, b += 8), m = P[h & C];
            n:
              for (; ; ) {
                if (p = m >>> 24, h >>>= p, b -= p, p = m >>> 16 & 255, p & 16) {
                  if (N = m & 65535, p &= 15, b < p && (h += B[i++] << b, b += 8, b < p && (h += B[i++] << b, b += 8)), N += h & (1 << p) - 1, N > f) {
                    n.msg = "invalid distance too far back", U.mode = wi;
                    break e;
                  }
                  if (h >>>= p, b -= p, p = o - s, N > p) {
                    if (p = N - p, p > c && U.sane) {
                      n.msg = "invalid distance too far back", U.mode = wi;
                      break e;
                    }
                    if (A = 0, F = u, g === 0) {
                      if (A += a - p, p < v) {
                        v -= p;
                        do
                          R[o++] = u[A++];
                        while (--p);
                        A = o - N, F = R;
                      }
                    } else if (g < p) {
                      if (A += a + g - p, p -= g, p < v) {
                        v -= p;
                        do
                          R[o++] = u[A++];
                        while (--p);
                        if (A = 0, g < v) {
                          p = g, v -= p;
                          do
                            R[o++] = u[A++];
                          while (--p);
                          A = o - N, F = R;
                        }
                      }
                    } else if (A += g - p, p < v) {
                      v -= p;
                      do
                        R[o++] = u[A++];
                      while (--p);
                      A = o - N, F = R;
                    }
                    for (; v > 2; )
                      R[o++] = F[A++], R[o++] = F[A++], R[o++] = F[A++], v -= 3;
                    v && (R[o++] = F[A++], v > 1 && (R[o++] = F[A++]));
                  } else {
                    A = o - N;
                    do
                      R[o++] = R[A++], R[o++] = R[A++], R[o++] = R[A++], v -= 3;
                    while (v > 2);
                    v && (R[o++] = R[A++], v > 1 && (R[o++] = R[A++]));
                  }
                } else if (p & 64) {
                  n.msg = "invalid distance code", U.mode = wi;
                  break e;
                } else {
                  m = P[(m & 65535) + (h & (1 << p) - 1)];
                  continue n;
                }
                break;
              }
          } else if (p & 64)
            if (p & 32) {
              U.mode = M_;
              break e;
            } else {
              n.msg = "invalid literal/length code", U.mode = wi;
              break e;
            }
          else {
            m = T[(m & 65535) + (h & (1 << p) - 1)];
            continue t;
          }
          break;
        }
    } while (i < r && o < l);
  v = b >> 3, i -= v, b -= v << 3, h &= (1 << b) - 1, n.next_in = i, n.next_out = o, n.avail_in = i < r ? 5 + (r - i) : 5 - (i - r), n.avail_out = o < l ? 257 + (l - o) : 257 - (o - l), U.hold = h, U.bits = b;
};
const Ht = 15, Xs = 852, Qs = 592, Gs = 0, Or = 1, el = 2, N_ = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), z_ = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), D_ = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), L_ = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), F_ = (e, n, t, i, r, o, s, l) => {
  const f = l.bits;
  let a = 0, c = 0, g = 0, u = 0, h = 0, b = 0, T = 0, P = 0, y = 0, C = 0, m, p, v, N, A, F = null, B;
  const R = new Uint16Array(Ht + 1), U = new Uint16Array(Ht + 1);
  let ae = null, ie, be, Ue;
  for (a = 0; a <= Ht; a++)
    R[a] = 0;
  for (c = 0; c < i; c++)
    R[n[t + c]]++;
  for (h = f, u = Ht; u >= 1 && R[u] === 0; u--)
    ;
  if (h > u && (h = u), u === 0)
    return r[o++] = 1 << 24 | 64 << 16 | 0, r[o++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
  for (g = 1; g < u && R[g] === 0; g++)
    ;
  for (h < g && (h = g), P = 1, a = 1; a <= Ht; a++)
    if (P <<= 1, P -= R[a], P < 0)
      return -1;
  if (P > 0 && (e === Gs || u !== 1))
    return -1;
  for (U[1] = 0, a = 1; a < Ht; a++)
    U[a + 1] = U[a] + R[a];
  for (c = 0; c < i; c++)
    n[t + c] !== 0 && (s[U[n[t + c]]++] = c);
  if (e === Gs ? (F = ae = s, B = 20) : e === Or ? (F = N_, ae = z_, B = 257) : (F = D_, ae = L_, B = 0), C = 0, c = 0, a = g, A = o, b = h, T = 0, v = -1, y = 1 << h, N = y - 1, e === Or && y > Xs || e === el && y > Qs)
    return 1;
  for (; ; ) {
    ie = a - T, s[c] + 1 < B ? (be = 0, Ue = s[c]) : s[c] >= B ? (be = ae[s[c] - B], Ue = F[s[c] - B]) : (be = 32 + 64, Ue = 0), m = 1 << a - T, p = 1 << b, g = p;
    do
      p -= m, r[A + (C >> T) + p] = ie << 24 | be << 16 | Ue | 0;
    while (p !== 0);
    for (m = 1 << a - 1; C & m; )
      m >>= 1;
    if (m !== 0 ? (C &= m - 1, C += m) : C = 0, c++, --R[a] === 0) {
      if (a === u)
        break;
      a = n[t + s[c]];
    }
    if (a > h && (C & N) !== v) {
      for (T === 0 && (T = h), A += g, b = a - T, P = 1 << b; b + T < u && (P -= R[b + T], !(P <= 0)); )
        b++, P <<= 1;
      if (y += 1 << b, e === Or && y > Xs || e === el && y > Qs)
        return 1;
      v = C & N, r[v] = h << 24 | b << 16 | A - o | 0;
    }
  }
  return C !== 0 && (r[A + C] = a - T << 24 | 64 << 16 | 0), l.bits = h, 0;
};
var On = F_;
const U_ = 0, Ef = 1, Af = 2, {
  Z_FINISH: tl,
  Z_BLOCK: B_,
  Z_TREES: mi,
  Z_OK: zt,
  Z_STREAM_END: $_,
  Z_NEED_DICT: j_,
  Z_STREAM_ERROR: Me,
  Z_DATA_ERROR: kf,
  Z_MEM_ERROR: Tf,
  Z_BUF_ERROR: H_,
  Z_DEFLATED: nl
} = ir, sr = 16180, il = 16181, rl = 16182, ol = 16183, sl = 16184, ll = 16185, al = 16186, fl = 16187, cl = 16188, ul = 16189, Li = 16190, Ge = 16191, Rr = 16192, dl = 16193, Mr = 16194, hl = 16195, _l = 16196, pl = 16197, gl = 16198, yi = 16199, vi = 16200, bl = 16201, wl = 16202, ml = 16203, yl = 16204, vl = 16205, Pr = 16206, xl = 16207, El = 16208, te = 16209, Sf = 16210, If = 16211, Z_ = 852, K_ = 592, q_ = 15, W_ = q_, Al = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function Y_() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Lt = (e) => {
  if (!e)
    return 1;
  const n = e.state;
  return !n || n.strm !== e || n.mode < sr || n.mode > If ? 1 : 0;
}, Cf = (e) => {
  if (Lt(e))
    return Me;
  const n = e.state;
  return e.total_in = e.total_out = n.total = 0, e.msg = "", n.wrap && (e.adler = n.wrap & 1), n.mode = sr, n.last = 0, n.havedict = 0, n.flags = -1, n.dmax = 32768, n.head = null, n.hold = 0, n.bits = 0, n.lencode = n.lendyn = new Int32Array(Z_), n.distcode = n.distdyn = new Int32Array(K_), n.sane = 1, n.back = -1, zt;
}, Of = (e) => {
  if (Lt(e))
    return Me;
  const n = e.state;
  return n.wsize = 0, n.whave = 0, n.wnext = 0, Cf(e);
}, Rf = (e, n) => {
  let t;
  if (Lt(e))
    return Me;
  const i = e.state;
  return n < 0 ? (t = 0, n = -n) : (t = (n >> 4) + 5, n < 48 && (n &= 15)), n && (n < 8 || n > 15) ? Me : (i.window !== null && i.wbits !== n && (i.window = null), i.wrap = t, i.wbits = n, Of(e));
}, Mf = (e, n) => {
  if (!e)
    return Me;
  const t = new Y_();
  e.state = t, t.strm = e, t.window = null, t.mode = sr;
  const i = Rf(e, n);
  return i !== zt && (e.state = null), i;
}, V_ = (e) => Mf(e, W_);
let kl = !0, Nr, zr;
const J_ = (e) => {
  if (kl) {
    Nr = new Int32Array(512), zr = new Int32Array(32);
    let n = 0;
    for (; n < 144; )
      e.lens[n++] = 8;
    for (; n < 256; )
      e.lens[n++] = 9;
    for (; n < 280; )
      e.lens[n++] = 7;
    for (; n < 288; )
      e.lens[n++] = 8;
    for (On(Ef, e.lens, 0, 288, Nr, 0, e.work, { bits: 9 }), n = 0; n < 32; )
      e.lens[n++] = 5;
    On(Af, e.lens, 0, 32, zr, 0, e.work, { bits: 5 }), kl = !1;
  }
  e.lencode = Nr, e.lenbits = 9, e.distcode = zr, e.distbits = 5;
}, Pf = (e, n, t, i) => {
  let r;
  const o = e.state;
  return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new Uint8Array(o.wsize)), i >= o.wsize ? (o.window.set(n.subarray(t - o.wsize, t), 0), o.wnext = 0, o.whave = o.wsize) : (r = o.wsize - o.wnext, r > i && (r = i), o.window.set(n.subarray(t - i, t - i + r), o.wnext), i -= r, i ? (o.window.set(n.subarray(t - i, t), 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += r, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += r))), 0;
}, X_ = (e, n) => {
  let t, i, r, o, s, l, f, a, c, g, u, h, b, T, P = 0, y, C, m, p, v, N, A, F;
  const B = new Uint8Array(4);
  let R, U;
  const ae = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Lt(e) || !e.output || !e.input && e.avail_in !== 0)
    return Me;
  t = e.state, t.mode === Ge && (t.mode = Rr), s = e.next_out, r = e.output, f = e.avail_out, o = e.next_in, i = e.input, l = e.avail_in, a = t.hold, c = t.bits, g = l, u = f, F = zt;
  e:
    for (; ; )
      switch (t.mode) {
        case sr:
          if (t.wrap === 0) {
            t.mode = Rr;
            break;
          }
          for (; c < 16; ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          if (t.wrap & 2 && a === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, B[0] = a & 255, B[1] = a >>> 8 & 255, t.check = fe(t.check, B, 2, 0), a = 0, c = 0, t.mode = il;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((a & 255) << 8) + (a >> 8)) % 31) {
            e.msg = "incorrect header check", t.mode = te;
            break;
          }
          if ((a & 15) !== nl) {
            e.msg = "unknown compression method", t.mode = te;
            break;
          }
          if (a >>>= 4, c -= 4, A = (a & 15) + 8, t.wbits === 0 && (t.wbits = A), A > 15 || A > t.wbits) {
            e.msg = "invalid window size", t.mode = te;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, e.adler = t.check = 1, t.mode = a & 512 ? ul : Ge, a = 0, c = 0;
          break;
        case il:
          for (; c < 16; ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          if (t.flags = a, (t.flags & 255) !== nl) {
            e.msg = "unknown compression method", t.mode = te;
            break;
          }
          if (t.flags & 57344) {
            e.msg = "unknown header flags set", t.mode = te;
            break;
          }
          t.head && (t.head.text = a >> 8 & 1), t.flags & 512 && t.wrap & 4 && (B[0] = a & 255, B[1] = a >>> 8 & 255, t.check = fe(t.check, B, 2, 0)), a = 0, c = 0, t.mode = rl;
        case rl:
          for (; c < 32; ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          t.head && (t.head.time = a), t.flags & 512 && t.wrap & 4 && (B[0] = a & 255, B[1] = a >>> 8 & 255, B[2] = a >>> 16 & 255, B[3] = a >>> 24 & 255, t.check = fe(t.check, B, 4, 0)), a = 0, c = 0, t.mode = ol;
        case ol:
          for (; c < 16; ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          t.head && (t.head.xflags = a & 255, t.head.os = a >> 8), t.flags & 512 && t.wrap & 4 && (B[0] = a & 255, B[1] = a >>> 8 & 255, t.check = fe(t.check, B, 2, 0)), a = 0, c = 0, t.mode = sl;
        case sl:
          if (t.flags & 1024) {
            for (; c < 16; ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            t.length = a, t.head && (t.head.extra_len = a), t.flags & 512 && t.wrap & 4 && (B[0] = a & 255, B[1] = a >>> 8 & 255, t.check = fe(t.check, B, 2, 0)), a = 0, c = 0;
          } else
            t.head && (t.head.extra = null);
          t.mode = ll;
        case ll:
          if (t.flags & 1024 && (h = t.length, h > l && (h = l), h && (t.head && (A = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            i.subarray(
              o,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              o + h
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            A
          )), t.flags & 512 && t.wrap & 4 && (t.check = fe(t.check, i, h, o)), l -= h, o += h, t.length -= h), t.length))
            break e;
          t.length = 0, t.mode = al;
        case al:
          if (t.flags & 2048) {
            if (l === 0)
              break e;
            h = 0;
            do
              A = i[o + h++], t.head && A && t.length < 65536 && (t.head.name += String.fromCharCode(A));
            while (A && h < l);
            if (t.flags & 512 && t.wrap & 4 && (t.check = fe(t.check, i, h, o)), l -= h, o += h, A)
              break e;
          } else
            t.head && (t.head.name = null);
          t.length = 0, t.mode = fl;
        case fl:
          if (t.flags & 4096) {
            if (l === 0)
              break e;
            h = 0;
            do
              A = i[o + h++], t.head && A && t.length < 65536 && (t.head.comment += String.fromCharCode(A));
            while (A && h < l);
            if (t.flags & 512 && t.wrap & 4 && (t.check = fe(t.check, i, h, o)), l -= h, o += h, A)
              break e;
          } else
            t.head && (t.head.comment = null);
          t.mode = cl;
        case cl:
          if (t.flags & 512) {
            for (; c < 16; ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            if (t.wrap & 4 && a !== (t.check & 65535)) {
              e.msg = "header crc mismatch", t.mode = te;
              break;
            }
            a = 0, c = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), e.adler = t.check = 0, t.mode = Ge;
          break;
        case ul:
          for (; c < 32; ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          e.adler = t.check = Al(a), a = 0, c = 0, t.mode = Li;
        case Li:
          if (t.havedict === 0)
            return e.next_out = s, e.avail_out = f, e.next_in = o, e.avail_in = l, t.hold = a, t.bits = c, j_;
          e.adler = t.check = 1, t.mode = Ge;
        case Ge:
          if (n === B_ || n === mi)
            break e;
        case Rr:
          if (t.last) {
            a >>>= c & 7, c -= c & 7, t.mode = Pr;
            break;
          }
          for (; c < 3; ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          switch (t.last = a & 1, a >>>= 1, c -= 1, a & 3) {
            case 0:
              t.mode = dl;
              break;
            case 1:
              if (J_(t), t.mode = yi, n === mi) {
                a >>>= 2, c -= 2;
                break e;
              }
              break;
            case 2:
              t.mode = _l;
              break;
            case 3:
              e.msg = "invalid block type", t.mode = te;
          }
          a >>>= 2, c -= 2;
          break;
        case dl:
          for (a >>>= c & 7, c -= c & 7; c < 32; ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          if ((a & 65535) !== (a >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", t.mode = te;
            break;
          }
          if (t.length = a & 65535, a = 0, c = 0, t.mode = Mr, n === mi)
            break e;
        case Mr:
          t.mode = hl;
        case hl:
          if (h = t.length, h) {
            if (h > l && (h = l), h > f && (h = f), h === 0)
              break e;
            r.set(i.subarray(o, o + h), s), l -= h, o += h, f -= h, s += h, t.length -= h;
            break;
          }
          t.mode = Ge;
          break;
        case _l:
          for (; c < 14; ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          if (t.nlen = (a & 31) + 257, a >>>= 5, c -= 5, t.ndist = (a & 31) + 1, a >>>= 5, c -= 5, t.ncode = (a & 15) + 4, a >>>= 4, c -= 4, t.nlen > 286 || t.ndist > 30) {
            e.msg = "too many length or distance symbols", t.mode = te;
            break;
          }
          t.have = 0, t.mode = pl;
        case pl:
          for (; t.have < t.ncode; ) {
            for (; c < 3; ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            t.lens[ae[t.have++]] = a & 7, a >>>= 3, c -= 3;
          }
          for (; t.have < 19; )
            t.lens[ae[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, R = { bits: t.lenbits }, F = On(U_, t.lens, 0, 19, t.lencode, 0, t.work, R), t.lenbits = R.bits, F) {
            e.msg = "invalid code lengths set", t.mode = te;
            break;
          }
          t.have = 0, t.mode = gl;
        case gl:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; P = t.lencode[a & (1 << t.lenbits) - 1], y = P >>> 24, C = P >>> 16 & 255, m = P & 65535, !(y <= c); ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            if (m < 16)
              a >>>= y, c -= y, t.lens[t.have++] = m;
            else {
              if (m === 16) {
                for (U = y + 2; c < U; ) {
                  if (l === 0)
                    break e;
                  l--, a += i[o++] << c, c += 8;
                }
                if (a >>>= y, c -= y, t.have === 0) {
                  e.msg = "invalid bit length repeat", t.mode = te;
                  break;
                }
                A = t.lens[t.have - 1], h = 3 + (a & 3), a >>>= 2, c -= 2;
              } else if (m === 17) {
                for (U = y + 3; c < U; ) {
                  if (l === 0)
                    break e;
                  l--, a += i[o++] << c, c += 8;
                }
                a >>>= y, c -= y, A = 0, h = 3 + (a & 7), a >>>= 3, c -= 3;
              } else {
                for (U = y + 7; c < U; ) {
                  if (l === 0)
                    break e;
                  l--, a += i[o++] << c, c += 8;
                }
                a >>>= y, c -= y, A = 0, h = 11 + (a & 127), a >>>= 7, c -= 7;
              }
              if (t.have + h > t.nlen + t.ndist) {
                e.msg = "invalid bit length repeat", t.mode = te;
                break;
              }
              for (; h--; )
                t.lens[t.have++] = A;
            }
          }
          if (t.mode === te)
            break;
          if (t.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block", t.mode = te;
            break;
          }
          if (t.lenbits = 9, R = { bits: t.lenbits }, F = On(Ef, t.lens, 0, t.nlen, t.lencode, 0, t.work, R), t.lenbits = R.bits, F) {
            e.msg = "invalid literal/lengths set", t.mode = te;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, R = { bits: t.distbits }, F = On(Af, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, R), t.distbits = R.bits, F) {
            e.msg = "invalid distances set", t.mode = te;
            break;
          }
          if (t.mode = yi, n === mi)
            break e;
        case yi:
          t.mode = vi;
        case vi:
          if (l >= 6 && f >= 258) {
            e.next_out = s, e.avail_out = f, e.next_in = o, e.avail_in = l, t.hold = a, t.bits = c, P_(e, u), s = e.next_out, r = e.output, f = e.avail_out, o = e.next_in, i = e.input, l = e.avail_in, a = t.hold, c = t.bits, t.mode === Ge && (t.back = -1);
            break;
          }
          for (t.back = 0; P = t.lencode[a & (1 << t.lenbits) - 1], y = P >>> 24, C = P >>> 16 & 255, m = P & 65535, !(y <= c); ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          if (C && !(C & 240)) {
            for (p = y, v = C, N = m; P = t.lencode[N + ((a & (1 << p + v) - 1) >> p)], y = P >>> 24, C = P >>> 16 & 255, m = P & 65535, !(p + y <= c); ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            a >>>= p, c -= p, t.back += p;
          }
          if (a >>>= y, c -= y, t.back += y, t.length = m, C === 0) {
            t.mode = vl;
            break;
          }
          if (C & 32) {
            t.back = -1, t.mode = Ge;
            break;
          }
          if (C & 64) {
            e.msg = "invalid literal/length code", t.mode = te;
            break;
          }
          t.extra = C & 15, t.mode = bl;
        case bl:
          if (t.extra) {
            for (U = t.extra; c < U; ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            t.length += a & (1 << t.extra) - 1, a >>>= t.extra, c -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = wl;
        case wl:
          for (; P = t.distcode[a & (1 << t.distbits) - 1], y = P >>> 24, C = P >>> 16 & 255, m = P & 65535, !(y <= c); ) {
            if (l === 0)
              break e;
            l--, a += i[o++] << c, c += 8;
          }
          if (!(C & 240)) {
            for (p = y, v = C, N = m; P = t.distcode[N + ((a & (1 << p + v) - 1) >> p)], y = P >>> 24, C = P >>> 16 & 255, m = P & 65535, !(p + y <= c); ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            a >>>= p, c -= p, t.back += p;
          }
          if (a >>>= y, c -= y, t.back += y, C & 64) {
            e.msg = "invalid distance code", t.mode = te;
            break;
          }
          t.offset = m, t.extra = C & 15, t.mode = ml;
        case ml:
          if (t.extra) {
            for (U = t.extra; c < U; ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            t.offset += a & (1 << t.extra) - 1, a >>>= t.extra, c -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            e.msg = "invalid distance too far back", t.mode = te;
            break;
          }
          t.mode = yl;
        case yl:
          if (f === 0)
            break e;
          if (h = u - f, t.offset > h) {
            if (h = t.offset - h, h > t.whave && t.sane) {
              e.msg = "invalid distance too far back", t.mode = te;
              break;
            }
            h > t.wnext ? (h -= t.wnext, b = t.wsize - h) : b = t.wnext - h, h > t.length && (h = t.length), T = t.window;
          } else
            T = r, b = s - t.offset, h = t.length;
          h > f && (h = f), f -= h, t.length -= h;
          do
            r[s++] = T[b++];
          while (--h);
          t.length === 0 && (t.mode = vi);
          break;
        case vl:
          if (f === 0)
            break e;
          r[s++] = t.length, f--, t.mode = vi;
          break;
        case Pr:
          if (t.wrap) {
            for (; c < 32; ) {
              if (l === 0)
                break e;
              l--, a |= i[o++] << c, c += 8;
            }
            if (u -= f, e.total_out += u, t.total += u, t.wrap & 4 && u && (e.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? fe(t.check, r, u, s - u) : Kn(t.check, r, u, s - u)), u = f, t.wrap & 4 && (t.flags ? a : Al(a)) !== t.check) {
              e.msg = "incorrect data check", t.mode = te;
              break;
            }
            a = 0, c = 0;
          }
          t.mode = xl;
        case xl:
          if (t.wrap && t.flags) {
            for (; c < 32; ) {
              if (l === 0)
                break e;
              l--, a += i[o++] << c, c += 8;
            }
            if (t.wrap & 4 && a !== (t.total & 4294967295)) {
              e.msg = "incorrect length check", t.mode = te;
              break;
            }
            a = 0, c = 0;
          }
          t.mode = El;
        case El:
          F = $_;
          break e;
        case te:
          F = kf;
          break e;
        case Sf:
          return Tf;
        case If:
        default:
          return Me;
      }
  return e.next_out = s, e.avail_out = f, e.next_in = o, e.avail_in = l, t.hold = a, t.bits = c, (t.wsize || u !== e.avail_out && t.mode < te && (t.mode < Pr || n !== tl)) && Pf(e, e.output, e.next_out, u - e.avail_out), g -= e.avail_in, u -= e.avail_out, e.total_in += g, e.total_out += u, t.total += u, t.wrap & 4 && u && (e.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? fe(t.check, r, u, e.next_out - u) : Kn(t.check, r, u, e.next_out - u)), e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === Ge ? 128 : 0) + (t.mode === yi || t.mode === Mr ? 256 : 0), (g === 0 && u === 0 || n === tl) && F === zt && (F = H_), F;
}, Q_ = (e) => {
  if (Lt(e))
    return Me;
  let n = e.state;
  return n.window && (n.window = null), e.state = null, zt;
}, G_ = (e, n) => {
  if (Lt(e))
    return Me;
  const t = e.state;
  return t.wrap & 2 ? (t.head = n, n.done = !1, zt) : Me;
}, e1 = (e, n) => {
  const t = n.length;
  let i, r, o;
  return Lt(e) || (i = e.state, i.wrap !== 0 && i.mode !== Li) ? Me : i.mode === Li && (r = 1, r = Kn(r, n, t, 0), r !== i.check) ? kf : (o = Pf(e, n, t, t), o ? (i.mode = Sf, Tf) : (i.havedict = 1, zt));
};
var t1 = Of, n1 = Rf, i1 = Cf, r1 = V_, o1 = Mf, s1 = X_, l1 = Q_, a1 = G_, f1 = e1, c1 = "pako inflate (from Nodeca project)", nt = {
  inflateReset: t1,
  inflateReset2: n1,
  inflateResetKeep: i1,
  inflateInit: r1,
  inflateInit2: o1,
  inflate: s1,
  inflateEnd: l1,
  inflateGetHeader: a1,
  inflateSetDictionary: f1,
  inflateInfo: c1
};
function u1() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var d1 = u1;
const Nf = Object.prototype.toString, {
  Z_NO_FLUSH: h1,
  Z_FINISH: _1,
  Z_OK: Vn,
  Z_STREAM_END: Dr,
  Z_NEED_DICT: Lr,
  Z_STREAM_ERROR: p1,
  Z_DATA_ERROR: Tl,
  Z_MEM_ERROR: g1
} = ir;
function Wo(e) {
  this.options = or.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, e || {});
  const n = this.options;
  n.raw && n.windowBits >= 0 && n.windowBits < 16 && (n.windowBits = -n.windowBits, n.windowBits === 0 && (n.windowBits = -15)), n.windowBits >= 0 && n.windowBits < 16 && !(e && e.windowBits) && (n.windowBits += 32), n.windowBits > 15 && n.windowBits < 48 && (n.windowBits & 15 || (n.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new vf(), this.strm.avail_out = 0;
  let t = nt.inflateInit2(
    this.strm,
    n.windowBits
  );
  if (t !== Vn)
    throw new Error(qn[t]);
  if (this.header = new d1(), nt.inflateGetHeader(this.strm, this.header), n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = Yn.string2buf(n.dictionary) : Nf.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (t = nt.inflateSetDictionary(this.strm, n.dictionary), t !== Vn)))
    throw new Error(qn[t]);
}
Wo.prototype.push = function(e, n) {
  const t = this.strm, i = this.options.chunkSize, r = this.options.dictionary;
  let o, s, l;
  if (this.ended)
    return !1;
  for (n === ~~n ? s = n : s = n === !0 ? _1 : h1, Nf.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(i), t.next_out = 0, t.avail_out = i), o = nt.inflate(t, s), o === Lr && r && (o = nt.inflateSetDictionary(t, r), o === Vn ? o = nt.inflate(t, s) : o === Tl && (o = Lr)); t.avail_in > 0 && o === Dr && t.state.wrap > 0 && e[t.next_in] !== 0; )
      nt.inflateReset(t), o = nt.inflate(t, s);
    switch (o) {
      case p1:
      case Tl:
      case Lr:
      case g1:
        return this.onEnd(o), this.ended = !0, !1;
    }
    if (l = t.avail_out, t.next_out && (t.avail_out === 0 || o === Dr))
      if (this.options.to === "string") {
        let f = Yn.utf8border(t.output, t.next_out), a = t.next_out - f, c = Yn.buf2string(t.output, f);
        t.next_out = a, t.avail_out = i - a, a && t.output.set(t.output.subarray(f, f + a), 0), this.onData(c);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
    if (!(o === Vn && l === 0)) {
      if (o === Dr)
        return o = nt.inflateEnd(this.strm), this.onEnd(o), this.ended = !0, !0;
      if (t.avail_in === 0)
        break;
    }
  }
  return !0;
};
Wo.prototype.onData = function(e) {
  this.chunks.push(e);
};
Wo.prototype.onEnd = function(e) {
  e === Vn && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = or.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
var Sl;
((e) => {
  function n(u) {
    return /^\s*class/.test(String(u));
  }
  e.classs = n;
  function t(u) {
    return typeof u == "number";
  }
  e.number = t;
  function i(u) {
    return typeof u == "string";
  }
  e.string = i;
  function r(u) {
    return typeof u == "boolean";
  }
  e.boolean = r;
  function o(u) {
    return typeof u == "function" && !n(u);
  }
  e.fn = o;
  function s(u) {
    return Array.isArray(u);
  }
  e.array = s;
  function l(u) {
    return u !== null && typeof u == "object";
  }
  e.object = l;
  function f(u) {
    return c(u) ? !0 : typeof u == "string" ? !u : u instanceof Set || u instanceof Map ? u.size === 0 : u instanceof Array ? u.length === 0 : a(u) ? !!u[Symbol.iterator]().next().done : !!(l(u) && Object.keys(u).length === 0);
  }
  e.empty = f;
  function a(u) {
    return e.object(u) && Symbol.iterator in u;
  }
  e.iterable = a;
  function c(u) {
    return u == null;
  }
  e.nullish = c;
  function g(u) {
    return !e.object(u) && !e.fn(u) && !e.classs(u);
  }
  e.primitive = g;
})(Sl || (Sl = {}));
function b1() {
  let e, n, t = "pending";
  const i = new Promise((r, o) => {
    e = (s) => {
      t === "pending" && (t = "fulfilled", r(s));
    }, n = (s) => {
      t === "pending" && (t = "rejected", o(s));
    };
  });
  return {
    get status() {
      return t;
    },
    get isPending() {
      return t === "pending";
    },
    get isFulfilled() {
      return t === "fulfilled";
    },
    get isRejected() {
      return t === "rejected";
    },
    instance: i,
    resolve: e,
    reject: n
  };
}
var w1 = (e = 0) => {
  let n;
  const t = b1(), i = t.instance;
  return i.cancel = () => {
    clearTimeout(n), t.reject("canceled");
  }, n = setTimeout(t.resolve, e), i;
};
function zf(e) {
  let n = !0;
  const t = (o) => (...s) => r(o, s);
  return {
    get isEnabled() {
      return n;
    },
    enable() {
      n = !0;
    },
    disable() {
      n = !1;
    },
    log: t("info"),
    warn: t("warn"),
    error: t("error")
  };
  function i(o) {
    if (e !== void 0)
      return typeof e == "string" ? e : e(o);
  }
  function r(o, s) {
    if (!n)
      return;
    const l = i(o);
    l === void 0 ? console[o](...s) : console[o](l, ...s);
  }
}
var Oe, at, Xn, Yt, Qn, po, Rl, m1 = (Rl = class {
  constructor(e = 0, n = {}) {
    $t(this, Qn);
    $t(this, Oe, void 0);
    $t(this, at, void 0);
    $t(this, Xn, void 0);
    $t(this, Yt, /* @__PURE__ */ new Set());
    pn(this, at, e), pn(this, Oe, {}), n.verbose && pn(this, Xn, zf());
  }
  get capacity() {
    return he(this, at);
  }
  events(e) {
    return e ? (he(this, Oe)[e] || (he(this, Oe)[e] = /* @__PURE__ */ new Set()), he(this, Oe)[e]) : he(this, Oe);
  }
  on(e, n) {
    const t = this.events(e);
    return ur(this, Qn, po).call(this, t.size), t.add(n), () => this.off(e, n);
  }
  once(e, n) {
    const t = this.events(e);
    return ur(this, Qn, po).call(this, t.size), t.add(n), he(this, Yt).add(n), () => this.off(e, n);
  }
  off(e, n) {
    if (!e) {
      const i = Object.values(he(this, Oe));
      return pn(this, Oe, {}), i.length > 0;
    }
    if (!n) {
      const i = he(this, Oe)[e];
      return i && delete he(this, Oe)[e], ((i == null ? void 0 : i.size) || 0) > 0;
    }
    return this.events(e).delete(n);
  }
  emit(e, ...n) {
    const t = this.events(e), i = [];
    t.forEach((r) => {
      var o;
      try {
        r(...n);
      } catch (s) {
        (o = he(this, Xn)) == null || o.warn("Invoke function error:", s);
      }
      he(this, Yt).has(r) && (he(this, Yt).delete(r), i.push(r));
    }), i.forEach((r) => {
      t.delete(r);
    });
  }
}, Oe = new WeakMap(), at = new WeakMap(), Xn = new WeakMap(), Yt = new WeakMap(), Qn = new WeakSet(), po = function(e) {
  if (he(this, at) && e >= he(this, at))
    throw new Error("Listeners reached limit size: " + he(this, at));
}, Rl);
const Fi = zf("x"), y1 = (e) => Array.isArray(e) ? e : [e], Df = (e = 1e3) => new Promise((n) => {
  setTimeout(n, e);
}), v1 = async (e) => {
  await Df(1), e();
};
function ri() {
  return unsafeWindow.top !== unsafeWindow;
}
async function oi(e, n = 500) {
  return new Promise((t) => {
    const i = setInterval(() => {
      e() && (clearInterval(i), t());
    }, n);
  });
}
const x1 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
}, E1 = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "M128 72a56 56 0 1 0 56 56a56 56 0 0 0-56-56Zm0 96a40 40 0 1 1 40-40a40 40 0 0 1-40 40Zm106.8-17.6l-14.9-19.8c.1-1.8 0-3.7 0-5.1l14.9-19.9a7.8 7.8 0 0 0 1.3-6.9a114.8 114.8 0 0 0-10.9-26.4a8.2 8.2 0 0 0-5.8-4l-24.5-3.5l-3.7-3.7l-3.5-24.5a8.2 8.2 0 0 0-4-5.8a114.8 114.8 0 0 0-26.4-10.9a7.8 7.8 0 0 0-6.9 1.3L130.6 36h-5.2l-19.8-14.8a7.8 7.8 0 0 0-6.9-1.3a114.8 114.8 0 0 0-26.4 10.9a8.2 8.2 0 0 0-4 5.8l-3.5 24.5l-3.7 3.7l-24.5 3.5a8.2 8.2 0 0 0-5.8 4a114.8 114.8 0 0 0-10.9 26.4a7.8 7.8 0 0 0 1.3 6.9l14.9 19.8v5.1l-14.9 19.9a7.8 7.8 0 0 0-1.3 6.9a114.8 114.8 0 0 0 10.9 26.4a8.2 8.2 0 0 0 5.8 4l24.5 3.5l3.7 3.7l3.5 24.5a8.2 8.2 0 0 0 4 5.8a114.8 114.8 0 0 0 26.4 10.9a7.6 7.6 0 0 0 2.1.3a7.7 7.7 0 0 0 4.8-1.6l19.8-14.8h5.2l19.8 14.8a7.8 7.8 0 0 0 6.9 1.3a114.8 114.8 0 0 0 26.4-10.9a8.2 8.2 0 0 0 4-5.8l3.5-24.6c1.2-1.2 2.6-2.5 3.6-3.6l24.6-3.5a8.2 8.2 0 0 0 5.8-4a114.8 114.8 0 0 0 10.9-26.4a7.8 7.8 0 0 0-1.3-6.9Zm-21.7 22l-23.3 3.3a8.3 8.3 0 0 0-4.7 2.5c-1.2 1.3-4.9 5.1-6.7 6.7a8 8 0 0 0-2.7 4.9l-3.3 23.3a88.6 88.6 0 0 1-15.6 6.5l-18.9-14.2a7.7 7.7 0 0 0-5.3-1.5h-9.2a7.7 7.7 0 0 0-5.3 1.5l-18.9 14.2a88.6 88.6 0 0 1-15.6-6.5l-3.3-23.3a8 8 0 0 0-2.7-4.9a66.5 66.5 0 0 1-6.5-6.5a8 8 0 0 0-4.9-2.7l-23.3-3.3a96.9 96.9 0 0 1-6.5-15.6l14.2-18.9a8.8 8.8 0 0 0 1.6-5c-.1-1.8-.2-7-.1-9.5a7.7 7.7 0 0 0-1.5-5.3L36.4 99.2a96.9 96.9 0 0 1 6.5-15.6l23.3-3.3a8 8 0 0 0 4.9-2.7a66.5 66.5 0 0 1 6.5-6.5a8 8 0 0 0 2.7-4.9l3.3-23.3a96.9 96.9 0 0 1 15.6-6.5l18.9 14.2a7.7 7.7 0 0 0 5.3 1.5c3-.1 6.2-.1 9.2 0a7.7 7.7 0 0 0 5.3-1.5l18.9-14.2a88.6 88.6 0 0 1 15.6 6.5l3.3 23.3a8 8 0 0 0 2.7 4.9a66.5 66.5 0 0 1 6.5 6.5a8 8 0 0 0 4.9 2.7l23.3 3.3a88.6 88.6 0 0 1 6.5 15.6l-14.2 18.9a8.8 8.8 0 0 0-1.6 5c.1 1.8.2 7 .1 9.5a7.7 7.7 0 0 0 1.5 5.3l14.2 18.9a88.6 88.6 0 0 1-6.5 15.6Z"
}, null, -1), A1 = [
  E1
];
function k1(e, n) {
  return pe(), mt("svg", x1, A1);
}
const T1 = { name: "ph-gear", render: k1 }, S1 = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
}, I1 = /* @__PURE__ */ q("path", {
  fill: "currentColor",
  d: "m234.8 150.4l-14.9-19.8c.1-1.8 0-3.7 0-5.1l14.9-19.9a7.8 7.8 0 0 0 1.3-6.9a114.8 114.8 0 0 0-10.9-26.4a8.2 8.2 0 0 0-5.8-4l-24.5-3.5l-3.7-3.7l-3.5-24.5a8.2 8.2 0 0 0-4-5.8a114.8 114.8 0 0 0-26.4-10.9a7.8 7.8 0 0 0-6.9 1.3L130.6 36h-5.2l-19.8-14.8a7.8 7.8 0 0 0-6.9-1.3a114.8 114.8 0 0 0-26.4 10.9a8.2 8.2 0 0 0-4 5.8l-3.5 24.5l-3.7 3.7l-24.5 3.5a8.2 8.2 0 0 0-5.8 4a114.8 114.8 0 0 0-10.9 26.4a7.8 7.8 0 0 0 1.3 6.9l14.9 19.8v5.1l-14.9 19.9a7.8 7.8 0 0 0-1.3 6.9a114.8 114.8 0 0 0 10.9 26.4a8.2 8.2 0 0 0 5.8 4l24.5 3.5l3.7 3.7l3.5 24.5a8.2 8.2 0 0 0 4 5.8a114.8 114.8 0 0 0 26.4 10.9a7.6 7.6 0 0 0 2.1.3a7.7 7.7 0 0 0 4.8-1.6l19.8-14.8h5.2l19.8 14.8a7.8 7.8 0 0 0 6.9 1.3a114.8 114.8 0 0 0 26.4-10.9a8.2 8.2 0 0 0 4-5.8l3.5-24.6c1.2-1.2 2.6-2.5 3.6-3.6l24.6-3.5a8.2 8.2 0 0 0 5.8-4a114.8 114.8 0 0 0 10.9-26.4a7.8 7.8 0 0 0-1.3-6.9ZM128 172a44 44 0 1 1 44-44a44 44 0 0 1-44 44Z"
}, null, -1), C1 = [
  I1
];
function O1(e, n) {
  return pe(), mt("svg", S1, C1);
}
const R1 = { name: "ph-gear-fill", render: O1 }, go = "__x_user_script__", M1 = (e) => P1(
  () => {
    const n = localStorage.getItem(go);
    return n ? JSON.parse(n) : e;
  },
  (n) => {
    localStorage.setItem(go, JSON.stringify(n));
  }
), Il = () => localStorage.removeItem(go);
function P1(e, n) {
  const t = fn(e());
  return En(
    () => [t],
    () => {
      n(V(t));
    },
    {
      deep: !0,
      flush: "post"
    }
  ), [t];
}
const N1 = (e) => (ra("data-v-986e50e0"), e = e(), oa(), e), z1 = { class: "setting-content" }, D1 = { class: "content-wrapper" }, L1 = { key: 0 }, F1 = /* @__PURE__ */ N1(() => /* @__PURE__ */ q("br", null, null, -1)), U1 = /* @__PURE__ */ Dt({
  __name: "App",
  setup(e) {
    const n = fn({
      isActive: Rn()
    });
    function t() {
      n.isActive = !n.isActive;
    }
    return Ni("meta + .", t), (i, r) => {
      const o = R1, s = T1;
      return pe(), mt("div", {
        class: Gn(["root", { active: n.isActive }])
      }, [
        q("div", z1, [
          q("div", {
            class: "setting-icon",
            onClick: t
          }, [
            n.isActive ? (pe(), ht(o, {
              key: 0,
              class: "gear"
            })) : (pe(), ht(s, {
              key: 1,
              class: "gear"
            }))
          ]),
          q("div", D1, [
            ne(Rn)() ? (pe(), mt("div", L1, [
              q("div", null, [
                q("button", {
                  onClick: r[0] || (r[0] = //@ts-ignore
                  (...l) => ne(Il) && ne(Il)(...l))
                }, "删除配置")
              ]),
              F1
            ])) : Uu("", !0),
            (pe(), ht(pu("setting-content")))
          ])
        ])
      ], 2);
    };
  }
});
const Yo = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [i, r] of n)
    t[i] = r;
  return t;
}, B1 = /* @__PURE__ */ Yo(U1, [["__scopeId", "data-v-986e50e0"]]), si = (e) => {
  if (ri())
    return;
  const n = document.createElement("div");
  document.body.append(n), yd(B1).component("setting-content", e).mount(n);
}, Lf = "__0x_user_script__", Ff = new m1();
unsafeWindow.addEventListener(
  "message",
  ({ data: e }) => {
    $1(e) && (Fi.log(`[${location.hostname}:${ri()}] receive:`, e), Ff.emit(e.type, ...e.data));
  },
  !1
);
const on = (e, n) => {
  Ff.on(e, n);
}, lr = (e, n) => (t, ...i) => {
  const r = {
    protocol: Lf,
    type: t,
    data: i
  };
  Fi.log(`[${location.hostname}:${ri()}] send:`, r), e.postMessage(r, n);
};
function $1(e) {
  try {
    return e.protocol === Lf;
  } catch {
    return !1;
  }
}
const li = (e) => (ra("data-v-caaf177b"), e = e(), oa(), e), j1 = { class: "conf-line" }, H1 = /* @__PURE__ */ li(() => /* @__PURE__ */ q("span", null, " 自动播放 ", -1)), Z1 = { class: "conf-line" }, K1 = /* @__PURE__ */ li(() => /* @__PURE__ */ q("span", null, " 自动全屏 ", -1)), q1 = { class: "conf-group" }, W1 = { class: "conf-line" }, Y1 = /* @__PURE__ */ li(() => /* @__PURE__ */ q("span", null, " 跳过片头/片尾 ", -1)), V1 = { class: "conf-line" }, J1 = /* @__PURE__ */ li(() => /* @__PURE__ */ q("span", null, " 片头： ", -1)), X1 = { class: "conf-line" }, Q1 = /* @__PURE__ */ li(() => /* @__PURE__ */ q("span", null, " 片尾： ", -1)), G1 = /* @__PURE__ */ Dt({
  __name: "VideoHelper",
  emits: ["init", "fullscreen"],
  setup(e, { emit: n }) {
    const [t] = M1({
      autoPlay: !1,
      autoFullScreen: !1,
      skip: {
        enable: !1,
        /**
         * 跳过片头
         * */
        beforeSkipTs: 0,
        /**
         * 跳过片尾
         * */
        afterSkipTs: 0
      }
    });
    return ca(() => {
      n("init", t);
    }), (i, r) => (pe(), mt("div", null, [
      q("div", j1, [
        q("label", null, [
          gn(q("input", {
            type: "checkbox",
            "onUpdate:modelValue": r[0] || (r[0] = (o) => ne(t).autoPlay = o)
          }, null, 512), [
            [wr, ne(t).autoPlay]
          ]),
          H1
        ])
      ]),
      q("div", Z1, [
        q("label", null, [
          gn(q("input", {
            type: "checkbox",
            "onUpdate:modelValue": r[1] || (r[1] = (o) => ne(t).autoFullScreen = o)
          }, null, 512), [
            [wr, ne(t).autoFullScreen]
          ]),
          K1
        ]),
        q("button", {
          onClick: r[2] || (r[2] = (o) => n("fullscreen"))
        }, "伪全屏")
      ]),
      q("div", q1, [
        q("div", W1, [
          q("label", null, [
            gn(q("input", {
              type: "checkbox",
              "onUpdate:modelValue": r[3] || (r[3] = (o) => ne(t).skip.enable = o)
            }, null, 512), [
              [wr, ne(t).skip.enable]
            ]),
            Y1
          ])
        ]),
        q("div", V1, [
          q("label", null, [
            J1,
            gn(q("input", {
              type: "number",
              "onUpdate:modelValue": r[4] || (r[4] = (o) => ne(t).skip.beforeSkipTs = o)
            }, null, 512), [
              [
                Os,
                ne(t).skip.beforeSkipTs,
                void 0,
                { number: !0 }
              ]
            ])
          ])
        ]),
        q("div", X1, [
          q("label", null, [
            Q1,
            gn(q("input", {
              type: "number",
              "onUpdate:modelValue": r[5] || (r[5] = (o) => ne(t).skip.afterSkipTs = o)
            }, null, 512), [
              [
                Os,
                ne(t).skip.afterSkipTs,
                void 0,
                { number: !0 }
              ]
            ])
          ])
        ])
      ])
    ]));
  }
});
const ep = /* @__PURE__ */ Yo(G1, [["__scopeId", "data-v-caaf177b"]]);
function Vo(e, n, t, i) {
  const r = async () => {
    const s = e.paused && e.currentTime < 1;
    n.autoFullScreen && (i == null || i()), s && (await e.play(), await w1(500), await r());
  }, o = () => {
    if (e.currentTime < 1) {
      r();
      return;
    }
  };
  o(), e.addEventListener("load", o), e.addEventListener("timeupdate", () => {
    const s = e.duration - e.currentTime;
    if (n.autoPlay && s < 1) {
      t();
      return;
    }
    n.skip.enable && (e.currentTime < n.skip.beforeSkipTs && (e.currentTime = n.skip.beforeSkipTs), s < n.skip.afterSkipTs && t());
  });
}
const Ui = "data-x-backup";
let Jn = null;
function Cl() {
  return Jn;
}
function Ol(e) {
  Jn || (e.setAttribute(Ui, e.getAttribute("style") || ""), e.style.top = "0", e.style.left = "0", e.style.position = "fixed", e.style.zIndex = "999999", e.style.width = "100vw", e.style.height = "100vh", document.body.setAttribute(Ui, document.body.style.overflow), document.body.style.overflow = "hidden", Jn = e);
}
function tp(e = Jn) {
  e && (e.setAttribute("style", e.getAttribute(Ui) || ""), document.body.style.overflow = document.body.getAttribute(Ui) || "", Jn = null);
}
const Jo = ep;
var bo = {}, np = {
  get exports() {
    return bo;
  },
  set exports(e) {
    bo = e;
  }
};
(function(e) {
  var n = function() {
    function t(u, h) {
      return h != null && u instanceof h;
    }
    var i;
    try {
      i = Map;
    } catch {
      i = function() {
      };
    }
    var r;
    try {
      r = Set;
    } catch {
      r = function() {
      };
    }
    var o;
    try {
      o = Promise;
    } catch {
      o = function() {
      };
    }
    function s(u, h, b, T, P) {
      typeof h == "object" && (b = h.depth, T = h.prototype, P = h.includeNonEnumerable, h = h.circular);
      var y = [], C = [], m = typeof Buffer < "u";
      typeof h > "u" && (h = !0), typeof b > "u" && (b = 1 / 0);
      function p(v, N) {
        if (v === null)
          return null;
        if (N === 0)
          return v;
        var A, F;
        if (typeof v != "object")
          return v;
        if (t(v, i))
          A = new i();
        else if (t(v, r))
          A = new r();
        else if (t(v, o))
          A = new o(function(X, Y) {
            v.then(function(Ae) {
              X(p(Ae, N - 1));
            }, function(Ae) {
              Y(p(Ae, N - 1));
            });
          });
        else if (s.__isArray(v))
          A = [];
        else if (s.__isRegExp(v))
          A = new RegExp(v.source, g(v)), v.lastIndex && (A.lastIndex = v.lastIndex);
        else if (s.__isDate(v))
          A = new Date(v.getTime());
        else {
          if (m && Buffer.isBuffer(v))
            return Buffer.allocUnsafe ? A = Buffer.allocUnsafe(v.length) : A = new Buffer(v.length), v.copy(A), A;
          t(v, Error) ? A = Object.create(v) : typeof T > "u" ? (F = Object.getPrototypeOf(v), A = Object.create(F)) : (A = Object.create(T), F = T);
        }
        if (h) {
          var B = y.indexOf(v);
          if (B != -1)
            return C[B];
          y.push(v), C.push(A);
        }
        t(v, i) && v.forEach(function(X, Y) {
          var Ae = p(Y, N - 1), Ft = p(X, N - 1);
          A.set(Ae, Ft);
        }), t(v, r) && v.forEach(function(X) {
          var Y = p(X, N - 1);
          A.add(Y);
        });
        for (var R in v) {
          var U;
          F && (U = Object.getOwnPropertyDescriptor(F, R)), !(U && U.set == null) && (A[R] = p(v[R], N - 1));
        }
        if (Object.getOwnPropertySymbols)
          for (var ae = Object.getOwnPropertySymbols(v), R = 0; R < ae.length; R++) {
            var ie = ae[R], be = Object.getOwnPropertyDescriptor(v, ie);
            be && !be.enumerable && !P || (A[ie] = p(v[ie], N - 1), be.enumerable || Object.defineProperty(A, ie, {
              enumerable: !1
            }));
          }
        if (P)
          for (var Ue = Object.getOwnPropertyNames(v), R = 0; R < Ue.length; R++) {
            var se = Ue[R], be = Object.getOwnPropertyDescriptor(v, se);
            be && be.enumerable || (A[se] = p(v[se], N - 1), Object.defineProperty(A, se, {
              enumerable: !1
            }));
          }
        return A;
      }
      return p(u, b);
    }
    s.clonePrototype = function(h) {
      if (h === null)
        return null;
      var b = function() {
      };
      return b.prototype = h, new b();
    };
    function l(u) {
      return Object.prototype.toString.call(u);
    }
    s.__objToStr = l;
    function f(u) {
      return typeof u == "object" && l(u) === "[object Date]";
    }
    s.__isDate = f;
    function a(u) {
      return typeof u == "object" && l(u) === "[object Array]";
    }
    s.__isArray = a;
    function c(u) {
      return typeof u == "object" && l(u) === "[object RegExp]";
    }
    s.__isRegExp = c;
    function g(u) {
      var h = "";
      return u.global && (h += "g"), u.ignoreCase && (h += "i"), u.multiline && (h += "m"), h;
    }
    return s.__getRegExpFlags = g, s;
  }();
  e.exports && (e.exports = n);
})(np);
const Bi = bo, ip = /* @__PURE__ */ Dt({
  __name: "Agefans",
  setup(e) {
    function n() {
      var o, s, l;
      const r = document.querySelector(".movurl[style*=block] ul li a[style]");
      (l = (s = (o = r == null ? void 0 : r.parentElement) == null ? void 0 : o.nextElementSibling) == null ? void 0 : s.firstElementChild) == null || l.click();
    }
    Ni("esc", () => {
      tp();
    });
    function t() {
      if (!Cl()) {
        const r = document.querySelector("iframe");
        Ol(r);
      }
    }
    async function i(r) {
      const o = document.querySelector("iframe");
      await oi(() => !!o.src);
      const s = new URL(o.src).origin, l = lr(o.contentWindow, s);
      l("init", location.origin, Bi(r)), o.addEventListener("load", () => {
        l("init", location.origin, Bi(r));
      }), on("play-next-video", () => {
        n();
      });
      const f = async () => {
        Cl() || Ol(o);
      };
      on("fullscreen", () => f());
    }
    return (r, o) => (pe(), ht(ne(Jo), {
      onInit: i,
      onFullscreen: t
    }));
  }
}), rp = /agefans\.(cc|vip)/, op = {
  test: [
    // main domain
    rp,
    /agemys\.com/,
    // iframe domain
    /shankuwang\.com/
  ],
  fn() {
    if (Rn() && (unsafeWindow.onbeforeunload = () => "别跑了"), ri()) {
      let e = !1;
      on("init", async (n, t) => {
        if (e)
          return;
        e = !0;
        const i = lr(unsafeWindow.top, n);
        unsafeWindow.addEventListener("keydown", (o) => {
          i("key-down", { code: o.code, key: o.key });
        }), await oi(() => !!document.querySelector("video"));
        const r = document.querySelector("video");
        Vo(
          r,
          t,
          () => i("play-next-video"),
          () => i("fullscreen")
        );
      });
    } else
      on("key-down", (e) => {
        unsafeWindow.dispatchEvent(new KeyboardEvent("keydown", e));
      });
    si(ip);
  }
}, sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: op
}, Symbol.toStringTag, { value: "Module" })), lp = {};
function ap(e, n) {
  return pe(), mt("div", null, "设置页面");
}
const fp = /* @__PURE__ */ Yo(lp, [["render", ap]]), cp = {
  test: /baidu\.com/,
  fn() {
    si(fp), Bn("meta, /", () => {
      console.log("help");
    });
  }
}, up = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: cp
}, Symbol.toStringTag, { value: "Module" })), dp = {
  test: /eb4fans\.com/,
  fn() {
    Bn("right", () => {
      const e = document.querySelector(
        "#single > div > div:nth-child(2) > div:nth-child(4) > div.col-xs-5.align-right a"
      );
      e == null || e.click();
    }), Bn("left", () => {
      const e = document.querySelector(
        "#single > div > div:nth-child(2) > div:nth-child(4) > div.col-xs-5.align-left a"
      );
      e == null || e.click();
    });
  }
}, hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: dp
}, Symbol.toStringTag, { value: "Module" })), _p = { class: "test" }, pp = /* @__PURE__ */ Dt({
  __name: "GithubIo",
  setup(e) {
    function n() {
      const t = new URL(location.href), [i] = t.host.split("."), [r, o] = t.pathname.split("/"), s = `https://github.com/${i}/${o}`;
      window.open(s, "_blank");
    }
    return (t, i) => (pe(), mt("div", _p, [
      q("button", { onClick: n }, "Goto Repo")
    ]));
  }
}), gp = {
  test: /\.github\.io/,
  fn() {
    si(pp);
  }
}, bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: gp
}, Symbol.toStringTag, { value: "Module" })), wp = {
  test: /maofly\.com/,
  fn() {
    Bn("right", () => {
      const e = document.querySelector("[title=下集]");
      e == null || e.click();
    }), Bn("left", () => {
      const e = document.querySelector("[title=上集]");
      e == null || e.click();
    });
  }
}, mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: wp
}, Symbol.toStringTag, { value: "Module" })), yp = /* @__PURE__ */ Dt({
  __name: "Nunuyy",
  setup(e) {
    async function n(t) {
      await oi(() => !!document.querySelector("video"));
      const i = document.querySelector("video");
      Vo(i, t, () => {
        const r = document.querySelector(".playlists ul li.on + li"), o = r == null ? void 0 : r.firstChild;
        o == null || o.click();
      });
    }
    return (t, i) => (pe(), ht(ne(Jo), { onInit: n }));
  }
}), vp = /nunuyy\.(cc|vip)/, xp = {
  test: [
    // main domain
    vp
  ],
  fn() {
    si(yp);
  }
}, Ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: xp
}, Symbol.toStringTag, { value: "Module" }));
async function Ap(e, n = 1e3) {
  for (; !await e(); )
    await Df(n);
}
const kp = {
  test: /blog\.reimu\.net/,
  fn() {
    Ap(() => {
      const e = document.querySelectorAll(
        ".entry-content pre"
      );
      let n = !1;
      for (const t of Array.from(e))
        t.style.display === "none" && (t.style.display = "block", n = !0);
      return n;
    }), console.log("domain init");
  }
}, Tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: kp
}, Symbol.toStringTag, { value: "Module" })), Sp = /* @__PURE__ */ Dt({
  __name: "Tangrenjie",
  setup(e) {
    function n() {
      const i = document.querySelector(".content.show li.active + li"), r = i == null ? void 0 : i.firstChild;
      r == null || r.click();
    }
    async function t(i) {
      const r = () => document.querySelector("#playleft iframe");
      await oi(() => {
        var f;
        return !!((f = r()) != null && f.src);
      });
      const o = r(), s = new URL(o.src).origin, l = lr(o.contentWindow, s);
      l("init", location.origin, Bi(i)), o.addEventListener("load", () => {
        l("init", location.origin, Bi(i));
      }), on("play-next-video", () => {
        n();
      });
    }
    return (i, r) => (pe(), ht(ne(Jo), { onInit: t }));
  }
}), Ip = /tangrenjie\.(tv)/, Cp = {
  test: [
    // main domain
    Ip
  ],
  fn() {
    if (unsafeWindow.onkeydown = unsafeWindow.onkeyup = unsafeWindow.onkeypress = () => {
    }, ri()) {
      let e = !1;
      on("init", async (n, t) => {
        if (e)
          return;
        e = !0;
        const i = lr(unsafeWindow.top, n);
        await oi(() => !!document.querySelector("video"));
        const r = document.querySelector("video");
        Vo(r, t, () => i("play-next-video"));
      });
    }
    si(Sp);
  }
}, Op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Cp
}, Symbol.toStringTag, { value: "Module" }));
function Rp() {
  Rn() ? Fi.log("// [DEV] Useful script loaded.") : Fi.log("// [PROD] Useful script loaded.");
}
v1(async () => {
  Rp();
  const i = Object.values(/* @__PURE__ */ Object.assign({ "./sites/_tpl.ts": jf, "./sites/agdm.ts": Xh, "./sites/agefans.ts": sp, "./sites/baidu.ts": up, "./sites/eb4fans.ts": hp, "./sites/githubIo.ts": bp, "./sites/maofly.ts": mp, "./sites/nunuyy.ts": Ep, "./sites/reimu.ts": Tp, "./sites/tangrenjie.ts": Op })).map((r) => r.conf).find(
    (r) => !!y1(r.test).find((o) => o.test(location.hostname))
  );
  i == null || i.fn();
});
