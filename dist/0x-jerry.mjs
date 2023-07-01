var Gn = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var it = (t, e, n) => (Gn(t, e, "read from private field"), n ? n.call(t) : e.get(t)), fe = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Oe = (t, e, n, r) => (Gn(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
var tr = (t, e, n) => (Gn(t, e, "access private method"), n);
const Mi = {
  test: /site\.domain/,
  fn() {
    console.log("domain init");
  }
}, Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Mi
}, Symbol.toStringTag, { value: "Module" })), He = () => !!window.__0x_jerry_dev__, Oi = (t) => {
  He() && t();
};
function jr(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return e ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const Y = {}, de = [], At = () => {
}, Ri = () => !1, Ni = /^on[^a-z]/, Bn = (t) => Ni.test(t), Fr = (t) => t.startsWith("onUpdate:"), rt = Object.assign, Lr = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Bi = Object.prototype.hasOwnProperty, H = (t, e) => Bi.call(t, e), B = Array.isArray, Fe = (t) => en(t) === "[object Map]", Ur = (t) => en(t) === "[object Set]", go = (t) => en(t) === "[object Date]", U = (t) => typeof t == "function", ot = (t) => typeof t == "string", Ke = (t) => typeof t == "symbol", Z = (t) => t !== null && typeof t == "object", os = (t) => Z(t) && U(t.then) && U(t.catch), ji = Object.prototype.toString, en = (t) => ji.call(t), Fi = (t) => en(t).slice(8, -1), Li = (t) => en(t) === "[object Object]", kr = (t) => ot(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, yn = /* @__PURE__ */ jr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jn = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Ui = /-(\w)/g, Bt = jn((t) => t.replace(Ui, (e, n) => n ? n.toUpperCase() : "")), ki = /\B([A-Z])/g, Ce = jn(
  (t) => t.replace(ki, "-$1").toLowerCase()
), Fn = jn(
  (t) => t.charAt(0).toUpperCase() + t.slice(1)
), er = jn(
  (t) => t ? `on${Fn(t)}` : ""
), qe = (t, e) => !Object.is(t, e), bn = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, En = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, hr = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let mo;
const pr = () => mo || (mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $r(t) {
  if (B(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = ot(r) ? Ki(r) : $r(r);
      if (o)
        for (const s in o)
          e[s] = o[s];
    }
    return e;
  } else {
    if (ot(t))
      return t;
    if (Z(t))
      return t;
  }
}
const $i = /;(?![^(]*\))/g, Di = /:([^]+)/, Hi = /\/\*[^]*?\*\//g;
function Ki(t) {
  const e = {};
  return t.replace(Hi, "").split($i).forEach((n) => {
    if (n) {
      const r = n.split(Di);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function nn(t) {
  let e = "";
  if (ot(t))
    e = t;
  else if (B(t))
    for (let n = 0; n < t.length; n++) {
      const r = nn(t[n]);
      r && (e += r + " ");
    }
  else if (Z(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const qi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zi = /* @__PURE__ */ jr(qi);
function ss(t) {
  return !!t || t === "";
}
function Wi(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Ln(t[r], e[r]);
  return n;
}
function Ln(t, e) {
  if (t === e)
    return !0;
  let n = go(t), r = go(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Ke(t), r = Ke(e), n || r)
    return t === e;
  if (n = B(t), r = B(e), n || r)
    return n && r ? Wi(t, e) : !1;
  if (n = Z(t), r = Z(e), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(t).length, s = Object.keys(e).length;
    if (o !== s)
      return !1;
    for (const i in t) {
      const l = t.hasOwnProperty(i), c = e.hasOwnProperty(i);
      if (l && !c || !l && c || !Ln(t[i], e[i]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function is(t, e) {
  return t.findIndex((n) => Ln(n, e));
}
let mt;
class Vi {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = mt, !e && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = mt;
      try {
        return mt = this, e();
      } finally {
        mt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    mt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    mt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ji(t, e = mt) {
  e && e.active && e.effects.push(t);
}
function ls() {
  return mt;
}
function Yi(t) {
  mt && mt.cleanups.push(t);
}
const Dr = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, cs = (t) => (t.w & Vt) > 0, us = (t) => (t.n & Vt) > 0, Qi = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= Vt;
}, Xi = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      cs(o) && !us(o) ? o.delete(t) : e[n++] = o, o.w &= ~Vt, o.n &= ~Vt;
    }
    e.length = n;
  }
}, gr = /* @__PURE__ */ new WeakMap();
let Be = 0, Vt = 1;
const mr = 30;
let xt;
const oe = Symbol(""), _r = Symbol("");
class Hr {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ji(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = xt, n = qt;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = xt, xt = this, qt = !0, Vt = 1 << ++Be, Be <= mr ? Qi(this) : _o(this), this.fn();
    } finally {
      Be <= mr && Xi(this), Vt = 1 << --Be, xt = this.parent, qt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    xt === this ? this.deferStop = !0 : this.active && (_o(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function _o(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let qt = !0;
const fs = [];
function Ae() {
  fs.push(qt), qt = !1;
}
function Te() {
  const t = fs.pop();
  qt = t === void 0 ? !0 : t;
}
function ht(t, e, n) {
  if (qt && xt) {
    let r = gr.get(t);
    r || gr.set(t, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = Dr()), as(o);
  }
}
function as(t, e) {
  let n = !1;
  Be <= mr ? us(t) || (t.n |= Vt, n = !cs(t)) : n = !t.has(xt), n && (t.add(xt), xt.deps.push(t));
}
function Ut(t, e, n, r, o, s) {
  const i = gr.get(t);
  if (!i)
    return;
  let l = [];
  if (e === "clear")
    l = [...i.values()];
  else if (n === "length" && B(t)) {
    const c = Number(r);
    i.forEach((f, h) => {
      (h === "length" || h >= c) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), e) {
      case "add":
        B(t) ? kr(n) && l.push(i.get("length")) : (l.push(i.get(oe)), Fe(t) && l.push(i.get(_r)));
        break;
      case "delete":
        B(t) || (l.push(i.get(oe)), Fe(t) && l.push(i.get(_r)));
        break;
      case "set":
        Fe(t) && l.push(i.get(oe));
        break;
    }
  if (l.length === 1)
    l[0] && yr(l[0]);
  else {
    const c = [];
    for (const f of l)
      f && c.push(...f);
    yr(Dr(c));
  }
}
function yr(t, e) {
  const n = B(t) ? t : [...t];
  for (const r of n)
    r.computed && yo(r);
  for (const r of n)
    r.computed || yo(r);
}
function yo(t, e) {
  (t !== xt || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const Zi = /* @__PURE__ */ jr("__proto__,__v_isRef,__isVue"), ds = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ke)
), Gi = /* @__PURE__ */ Kr(), tl = /* @__PURE__ */ Kr(!1, !0), el = /* @__PURE__ */ Kr(!0), bo = /* @__PURE__ */ nl();
function nl() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = q(this);
      for (let s = 0, i = this.length; s < i; s++)
        ht(r, "get", s + "");
      const o = r[e](...n);
      return o === -1 || o === !1 ? r[e](...n.map(q)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Ae();
      const r = q(this)[e].apply(this, n);
      return Te(), r;
    };
  }), t;
}
function rl(t) {
  const e = q(this);
  return ht(e, "has", t), e.hasOwnProperty(t);
}
function Kr(t = !1, e = !1) {
  return function(r, o, s) {
    if (o === "__v_isReactive")
      return !t;
    if (o === "__v_isReadonly")
      return t;
    if (o === "__v_isShallow")
      return e;
    if (o === "__v_raw" && s === (t ? e ? bl : _s : e ? ms : gs).get(r))
      return r;
    const i = B(r);
    if (!t) {
      if (i && H(bo, o))
        return Reflect.get(bo, o, s);
      if (o === "hasOwnProperty")
        return rl;
    }
    const l = Reflect.get(r, o, s);
    return (Ke(o) ? ds.has(o) : Zi(o)) || (t || ht(r, "get", o), e) ? l : ut(l) ? i && kr(o) ? l : l.value : Z(l) ? t ? ys(l) : Pe(l) : l;
  };
}
const ol = /* @__PURE__ */ hs(), sl = /* @__PURE__ */ hs(!0);
function hs(t = !1) {
  return function(n, r, o, s) {
    let i = n[r];
    if (me(i) && ut(i) && !ut(o))
      return !1;
    if (!t && (!xn(o) && !me(o) && (i = q(i), o = q(o)), !B(n) && ut(i) && !ut(o)))
      return i.value = o, !0;
    const l = B(n) && kr(r) ? Number(r) < n.length : H(n, r), c = Reflect.set(n, r, o, s);
    return n === q(s) && (l ? qe(o, i) && Ut(n, "set", r, o) : Ut(n, "add", r, o)), c;
  };
}
function il(t, e) {
  const n = H(t, e);
  t[e];
  const r = Reflect.deleteProperty(t, e);
  return r && n && Ut(t, "delete", e, void 0), r;
}
function ll(t, e) {
  const n = Reflect.has(t, e);
  return (!Ke(e) || !ds.has(e)) && ht(t, "has", e), n;
}
function cl(t) {
  return ht(t, "iterate", B(t) ? "length" : oe), Reflect.ownKeys(t);
}
const ps = {
  get: Gi,
  set: ol,
  deleteProperty: il,
  has: ll,
  ownKeys: cl
}, ul = {
  get: el,
  set(t, e) {
    return !0;
  },
  deleteProperty(t, e) {
    return !0;
  }
}, fl = /* @__PURE__ */ rt(
  {},
  ps,
  {
    get: tl,
    set: sl
  }
), qr = (t) => t, Un = (t) => Reflect.getPrototypeOf(t);
function fn(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const o = q(t), s = q(e);
  n || (e !== s && ht(o, "get", e), ht(o, "get", s));
  const { has: i } = Un(o), l = r ? qr : n ? Vr : ze;
  if (i.call(o, e))
    return l(t.get(e));
  if (i.call(o, s))
    return l(t.get(s));
  t !== o && t.get(e);
}
function an(t, e = !1) {
  const n = this.__v_raw, r = q(n), o = q(t);
  return e || (t !== o && ht(r, "has", t), ht(r, "has", o)), t === o ? n.has(t) : n.has(t) || n.has(o);
}
function dn(t, e = !1) {
  return t = t.__v_raw, !e && ht(q(t), "iterate", oe), Reflect.get(t, "size", t);
}
function vo(t) {
  t = q(t);
  const e = q(this);
  return Un(e).has.call(e, t) || (e.add(t), Ut(e, "add", t, t)), this;
}
function wo(t, e) {
  e = q(e);
  const n = q(this), { has: r, get: o } = Un(n);
  let s = r.call(n, t);
  s || (t = q(t), s = r.call(n, t));
  const i = o.call(n, t);
  return n.set(t, e), s ? qe(e, i) && Ut(n, "set", t, e) : Ut(n, "add", t, e), this;
}
function Eo(t) {
  const e = q(this), { has: n, get: r } = Un(e);
  let o = n.call(e, t);
  o || (t = q(t), o = n.call(e, t)), r && r.call(e, t);
  const s = e.delete(t);
  return o && Ut(e, "delete", t, void 0), s;
}
function xo() {
  const t = q(this), e = t.size !== 0, n = t.clear();
  return e && Ut(t, "clear", void 0, void 0), n;
}
function hn(t, e) {
  return function(r, o) {
    const s = this, i = s.__v_raw, l = q(i), c = e ? qr : t ? Vr : ze;
    return !t && ht(l, "iterate", oe), i.forEach((f, h) => r.call(o, c(f), c(h), s));
  };
}
function pn(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, s = q(o), i = Fe(s), l = t === "entries" || t === Symbol.iterator && i, c = t === "keys" && i, f = o[t](...r), h = n ? qr : e ? Vr : ze;
    return !e && ht(
      s,
      "iterate",
      c ? _r : oe
    ), {
      // iterator protocol
      next() {
        const { value: g, done: d } = f.next();
        return d ? { value: g, done: d } : {
          value: l ? [h(g[0]), h(g[1])] : h(g),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $t(t) {
  return function(...e) {
    return t === "delete" ? !1 : this;
  };
}
function al() {
  const t = {
    get(s) {
      return fn(this, s);
    },
    get size() {
      return dn(this);
    },
    has: an,
    add: vo,
    set: wo,
    delete: Eo,
    clear: xo,
    forEach: hn(!1, !1)
  }, e = {
    get(s) {
      return fn(this, s, !1, !0);
    },
    get size() {
      return dn(this);
    },
    has: an,
    add: vo,
    set: wo,
    delete: Eo,
    clear: xo,
    forEach: hn(!1, !0)
  }, n = {
    get(s) {
      return fn(this, s, !0);
    },
    get size() {
      return dn(this, !0);
    },
    has(s) {
      return an.call(this, s, !0);
    },
    add: $t("add"),
    set: $t("set"),
    delete: $t("delete"),
    clear: $t("clear"),
    forEach: hn(!0, !1)
  }, r = {
    get(s) {
      return fn(this, s, !0, !0);
    },
    get size() {
      return dn(this, !0);
    },
    has(s) {
      return an.call(this, s, !0);
    },
    add: $t("add"),
    set: $t("set"),
    delete: $t("delete"),
    clear: $t("clear"),
    forEach: hn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = pn(
      s,
      !1,
      !1
    ), n[s] = pn(
      s,
      !0,
      !1
    ), e[s] = pn(
      s,
      !1,
      !0
    ), r[s] = pn(
      s,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    r
  ];
}
const [
  dl,
  hl,
  pl,
  gl
] = /* @__PURE__ */ al();
function zr(t, e) {
  const n = e ? t ? gl : pl : t ? hl : dl;
  return (r, o, s) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(
    H(n, o) && o in r ? n : r,
    o,
    s
  );
}
const ml = {
  get: /* @__PURE__ */ zr(!1, !1)
}, _l = {
  get: /* @__PURE__ */ zr(!1, !0)
}, yl = {
  get: /* @__PURE__ */ zr(!0, !1)
}, gs = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap();
function vl(t) {
  switch (t) {
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
function wl(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : vl(Fi(t));
}
function Pe(t) {
  return me(t) ? t : Wr(
    t,
    !1,
    ps,
    ml,
    gs
  );
}
function El(t) {
  return Wr(
    t,
    !1,
    fl,
    _l,
    ms
  );
}
function ys(t) {
  return Wr(
    t,
    !0,
    ul,
    yl,
    _s
  );
}
function Wr(t, e, n, r, o) {
  if (!Z(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = o.get(t);
  if (s)
    return s;
  const i = wl(t);
  if (i === 0)
    return t;
  const l = new Proxy(
    t,
    i === 2 ? r : n
  );
  return o.set(t, l), l;
}
function he(t) {
  return me(t) ? he(t.__v_raw) : !!(t && t.__v_isReactive);
}
function me(t) {
  return !!(t && t.__v_isReadonly);
}
function xn(t) {
  return !!(t && t.__v_isShallow);
}
function bs(t) {
  return he(t) || me(t);
}
function q(t) {
  const e = t && t.__v_raw;
  return e ? q(e) : t;
}
function vs(t) {
  return En(t, "__v_skip", !0), t;
}
const ze = (t) => Z(t) ? Pe(t) : t, Vr = (t) => Z(t) ? ys(t) : t;
function ws(t) {
  qt && xt && (t = q(t), as(t.dep || (t.dep = Dr())));
}
function Es(t, e) {
  t = q(t);
  const n = t.dep;
  n && yr(n);
}
function ut(t) {
  return !!(t && t.__v_isRef === !0);
}
function xl(t) {
  return Cl(t, !1);
}
function Cl(t, e) {
  return ut(t) ? t : new Al(t, e);
}
class Al {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : q(e), this._value = n ? e : ze(e);
  }
  get value() {
    return ws(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || xn(e) || me(e);
    e = n ? e : q(e), qe(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : ze(e), Es(this));
  }
}
function X(t) {
  return ut(t) ? t.value : t;
}
const Tl = {
  get: (t, e, n) => X(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const o = t[e];
    return ut(o) && !ut(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function xs(t) {
  return he(t) ? t : new Proxy(t, Tl);
}
class Pl {
  constructor(e, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Hr(e, () => {
      this._dirty || (this._dirty = !0, Es(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const e = q(this);
    return ws(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Il(t, e, n = !1) {
  let r, o;
  const s = U(t);
  return s ? (r = t, o = At) : (r = t.get, o = t.set), new Pl(r, o, s || !o, n);
}
function zt(t, e, n, r) {
  let o;
  try {
    o = r ? t(...r) : t();
  } catch (s) {
    kn(s, e, n);
  }
  return o;
}
function Tt(t, e, n, r) {
  if (U(t)) {
    const s = zt(t, e, n, r);
    return s && os(s) && s.catch((i) => {
      kn(i, e, n);
    }), s;
  }
  const o = [];
  for (let s = 0; s < t.length; s++)
    o.push(Tt(t[s], e, n, r));
  return o;
}
function kn(t, e, n, r = !0) {
  const o = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const i = e.proxy, l = n;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](t, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const c = e.appContext.config.errorHandler;
    if (c) {
      zt(
        c,
        null,
        10,
        [t, i, l]
      );
      return;
    }
  }
  Ml(t, n, o, r);
}
function Ml(t, e, n, r = !0) {
  console.error(t);
}
let We = !1, br = !1;
const lt = [];
let Rt = 0;
const pe = [];
let Lt = null, te = 0;
const Cs = /* @__PURE__ */ Promise.resolve();
let Jr = null;
function Sl(t) {
  const e = Jr || Cs;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Ol(t) {
  let e = Rt + 1, n = lt.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    Ve(lt[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function Yr(t) {
  (!lt.length || !lt.includes(
    t,
    We && t.allowRecurse ? Rt + 1 : Rt
  )) && (t.id == null ? lt.push(t) : lt.splice(Ol(t.id), 0, t), As());
}
function As() {
  !We && !br && (br = !0, Jr = Cs.then(Ps));
}
function Rl(t) {
  const e = lt.indexOf(t);
  e > Rt && lt.splice(e, 1);
}
function Nl(t) {
  B(t) ? pe.push(...t) : (!Lt || !Lt.includes(
    t,
    t.allowRecurse ? te + 1 : te
  )) && pe.push(t), As();
}
function Co(t, e = We ? Rt + 1 : 0) {
  for (; e < lt.length; e++) {
    const n = lt[e];
    n && n.pre && (lt.splice(e, 1), e--, n());
  }
}
function Ts(t) {
  if (pe.length) {
    const e = [...new Set(pe)];
    if (pe.length = 0, Lt) {
      Lt.push(...e);
      return;
    }
    for (Lt = e, Lt.sort((n, r) => Ve(n) - Ve(r)), te = 0; te < Lt.length; te++)
      Lt[te]();
    Lt = null, te = 0;
  }
}
const Ve = (t) => t.id == null ? 1 / 0 : t.id, Bl = (t, e) => {
  const n = Ve(t) - Ve(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function Ps(t) {
  br = !1, We = !0, lt.sort(Bl);
  const e = At;
  try {
    for (Rt = 0; Rt < lt.length; Rt++) {
      const n = lt[Rt];
      n && n.active !== !1 && zt(n, null, 14);
    }
  } finally {
    Rt = 0, lt.length = 0, Ts(), We = !1, Jr = null, (lt.length || pe.length) && Ps();
  }
}
function jl(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || Y;
  let o = n;
  const s = e.startsWith("update:"), i = s && e.slice(7);
  if (i && i in r) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: g, trim: d } = r[h] || Y;
    d && (o = n.map((y) => ot(y) ? y.trim() : y)), g && (o = n.map(hr));
  }
  let l, c = r[l = er(e)] || // also try camelCase event handler (#2249)
  r[l = er(Bt(e))];
  !c && s && (c = r[l = er(Ce(e))]), c && Tt(
    c,
    t,
    6,
    o
  );
  const f = r[l + "Once"];
  if (f) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[l])
      return;
    t.emitted[l] = !0, Tt(
      f,
      t,
      6,
      o
    );
  }
}
function Is(t, e, n = !1) {
  const r = e.emitsCache, o = r.get(t);
  if (o !== void 0)
    return o;
  const s = t.emits;
  let i = {}, l = !1;
  if (!U(t)) {
    const c = (f) => {
      const h = Is(f, e, !0);
      h && (l = !0, rt(i, h));
    };
    !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
  }
  return !s && !l ? (Z(t) && r.set(t, null), null) : (B(s) ? s.forEach((c) => i[c] = null) : rt(i, s), Z(t) && r.set(t, i), i);
}
function $n(t, e) {
  return !t || !Bn(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), H(t, e[0].toLowerCase() + e.slice(1)) || H(t, Ce(e)) || H(t, e));
}
let st = null, Dn = null;
function Cn(t) {
  const e = st;
  return st = t, Dn = t && t.type.__scopeId || null, e;
}
function Ms(t) {
  Dn = t;
}
function Ss() {
  Dn = null;
}
function Fl(t, e = st, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && jo(-1);
    const s = Cn(e);
    let i;
    try {
      i = t(...o);
    } finally {
      Cn(s), r._d && jo(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function nr(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: f,
    render: h,
    renderCache: g,
    data: d,
    setupState: y,
    ctx: T,
    inheritAttrs: I
  } = t;
  let k, P;
  const O = Cn(t);
  try {
    if (n.shapeFlag & 4) {
      const v = o || r;
      k = Ot(
        h.call(
          v,
          v,
          g,
          s,
          y,
          d,
          T
        )
      ), P = c;
    } else {
      const v = e;
      k = Ot(
        v.length > 1 ? v(
          s,
          { attrs: c, slots: l, emit: f }
        ) : v(
          s,
          null
          /* we know it doesn't need it */
        )
      ), P = e.props ? c : Ll(c);
    }
  } catch (v) {
    $e.length = 0, kn(v, t, 1), k = Nt(Jt);
  }
  let M = k;
  if (P && I !== !1) {
    const v = Object.keys(P), { shapeFlag: C } = M;
    v.length && C & 7 && (i && v.some(Fr) && (P = Ul(
      P,
      i
    )), M = _e(M, P));
  }
  return n.dirs && (M = _e(M), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition && (M.transition = n.transition), k = M, Cn(O), k;
}
const Ll = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || Bn(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Ul = (t, e) => {
  const n = {};
  for (const r in t)
    (!Fr(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function kl(t, e, n) {
  const { props: r, children: o, component: s } = t, { props: i, children: l, patchFlag: c } = e, f = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Ao(r, i, f) : !!i;
    if (c & 8) {
      const h = e.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const d = h[g];
        if (i[d] !== r[d] && !$n(f, d))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Ao(r, i, f) : !0 : !!i;
  return !1;
}
function Ao(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (e[s] !== t[s] && !$n(n, s))
      return !0;
  }
  return !1;
}
function $l({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const Dl = (t) => t.__isSuspense;
function Hl(t, e) {
  e && e.pendingBranch ? B(t) ? e.effects.push(...t) : e.effects.push(t) : Nl(t);
}
const gn = {};
function Le(t, e, n) {
  return Os(t, e, n);
}
function Os(t, e, { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = Y) {
  var l;
  const c = ls() === ((l = nt) == null ? void 0 : l.scope) ? nt : null;
  let f, h = !1, g = !1;
  if (ut(t) ? (f = () => t.value, h = xn(t)) : he(t) ? (f = () => t, r = !0) : B(t) ? (g = !0, h = t.some((v) => he(v) || xn(v)), f = () => t.map((v) => {
    if (ut(v))
      return v.value;
    if (he(v))
      return re(v);
    if (U(v))
      return zt(v, c, 2);
  })) : U(t) ? e ? f = () => zt(t, c, 2) : f = () => {
    if (!(c && c.isUnmounted))
      return d && d(), Tt(
        t,
        c,
        3,
        [y]
      );
  } : f = At, e && r) {
    const v = f;
    f = () => re(v());
  }
  let d, y = (v) => {
    d = O.onStop = () => {
      zt(v, c, 4);
    };
  }, T;
  if (Ye)
    if (y = At, e ? n && Tt(e, c, 3, [
      f(),
      g ? [] : void 0,
      y
    ]) : f(), o === "sync") {
      const v = kc();
      T = v.__watcherHandles || (v.__watcherHandles = []);
    } else
      return At;
  let I = g ? new Array(t.length).fill(gn) : gn;
  const k = () => {
    if (O.active)
      if (e) {
        const v = O.run();
        (r || h || (g ? v.some(
          (C, F) => qe(C, I[F])
        ) : qe(v, I))) && (d && d(), Tt(e, c, 3, [
          v,
          // pass undefined as the old value when it's changed for the first time
          I === gn ? void 0 : g && I[0] === gn ? [] : I,
          y
        ]), I = v);
      } else
        O.run();
  };
  k.allowRecurse = !!e;
  let P;
  o === "sync" ? P = k : o === "post" ? P = () => dt(k, c && c.suspense) : (k.pre = !0, c && (k.id = c.uid), P = () => Yr(k));
  const O = new Hr(f, P);
  e ? n ? k() : I = O.run() : o === "post" ? dt(
    O.run.bind(O),
    c && c.suspense
  ) : O.run();
  const M = () => {
    O.stop(), c && c.scope && Lr(c.scope.effects, O);
  };
  return T && T.push(M), M;
}
function Kl(t, e, n) {
  const r = this.proxy, o = ot(t) ? t.includes(".") ? Rs(r, t) : () => r[t] : t.bind(r, r);
  let s;
  U(e) ? s = e : (s = e.handler, n = e);
  const i = nt;
  ye(this);
  const l = Os(o, s.bind(r), n);
  return i ? ye(i) : se(), l;
}
function Rs(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function re(t, e) {
  if (!Z(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), ut(t))
    re(t.value, e);
  else if (B(t))
    for (let n = 0; n < t.length; n++)
      re(t[n], e);
  else if (Ur(t) || Fe(t))
    t.forEach((n) => {
      re(n, e);
    });
  else if (Li(t))
    for (const n in t)
      re(t[n], e);
  return t;
}
function Re(t, e) {
  const n = st;
  if (n === null)
    return t;
  const r = zn(n) || n.proxy, o = t.dirs || (t.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [i, l, c, f = Y] = e[s];
    i && (U(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && re(l), o.push({
      dir: i,
      instance: r,
      value: l,
      oldValue: void 0,
      arg: c,
      modifiers: f
    }));
  }
  return t;
}
function Zt(t, e, n, r) {
  const o = t.dirs, s = e && e.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let c = l.dir[r];
    c && (Ae(), Tt(c, n, 8, [
      t.el,
      l,
      t,
      e
    ]), Te());
  }
}
function ie(t, e) {
  return U(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => rt({ name: t.name }, e, { setup: t }))()
  ) : t;
}
const Ue = (t) => !!t.type.__asyncLoader, Ns = (t) => t.type.__isKeepAlive;
function ql(t, e) {
  Bs(t, "a", e);
}
function zl(t, e) {
  Bs(t, "da", e);
}
function Bs(t, e, n = nt) {
  const r = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (Hn(e, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ns(o.parent.vnode) && Wl(r, e, n, o), o = o.parent;
  }
}
function Wl(t, e, n, r) {
  const o = Hn(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Fs(() => {
    Lr(r[e], o);
  }, n);
}
function Hn(t, e, n = nt, r = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ae(), ye(n);
      const l = Tt(e, n, t, i);
      return se(), Te(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const kt = (t) => (e, n = nt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ye || t === "sp") && Hn(t, (...r) => e(...r), n)
), Vl = kt("bm"), js = kt("m"), Jl = kt("bu"), Yl = kt("u"), Ql = kt("bum"), Fs = kt("um"), Xl = kt("sp"), Zl = kt(
  "rtg"
), Gl = kt(
  "rtc"
);
function tc(t, e = nt) {
  Hn("ec", t, e);
}
const Ls = "components", Us = Symbol.for("v-ndc");
function ec(t) {
  return ot(t) ? nc(Ls, t, !1) || t : t || Us;
}
function nc(t, e, n = !0, r = !1) {
  const o = st || nt;
  if (o) {
    const s = o.type;
    if (t === Ls) {
      const l = Fc(
        s,
        !1
        /* do not include inferred name to avoid breaking existing code */
      );
      if (l && (l === e || l === Bt(e) || l === Fn(Bt(e))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      To(o[t] || s[t], e) || // global registration
      To(o.appContext[t], e)
    );
    return !i && r ? s : i;
  }
}
function To(t, e) {
  return t && (t[e] || t[Bt(e)] || t[Fn(Bt(e))]);
}
function rc(t, e, n = {}, r, o) {
  if (st.isCE || st.parent && Ue(st.parent) && st.parent.isCE)
    return e !== "default" && (n.name = e), Nt("slot", n, r && r());
  let s = t[e];
  s && s._c && (s._d = !1), ct();
  const i = s && ks(s(n)), l = Wt(
    Et,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${e}`
    },
    i || (r ? r() : []),
    i && t._ === 1 ? 64 : -2
  );
  return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function ks(t) {
  return t.some((e) => Ys(e) ? !(e.type === Jt || e.type === Et && !ks(e.children)) : !0) ? t : null;
}
const vr = (t) => t ? Xs(t) ? zn(t) || t.proxy : vr(t.parent) : null, ke = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ rt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => vr(t.parent),
    $root: (t) => vr(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Qr(t),
    $forceUpdate: (t) => t.f || (t.f = () => Yr(t.update)),
    $nextTick: (t) => t.n || (t.n = Sl.bind(t.proxy)),
    $watch: (t) => Kl.bind(t)
  })
), rr = (t, e) => t !== Y && !t.__isScriptSetup && H(t, e), oc = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: c } = t;
    let f;
    if (e[0] !== "$") {
      const y = i[e];
      if (y !== void 0)
        switch (y) {
          case 1:
            return r[e];
          case 2:
            return o[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (rr(r, e))
          return i[e] = 1, r[e];
        if (o !== Y && H(o, e))
          return i[e] = 2, o[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = t.propsOptions[0]) && H(f, e)
        )
          return i[e] = 3, s[e];
        if (n !== Y && H(n, e))
          return i[e] = 4, n[e];
        wr && (i[e] = 0);
      }
    }
    const h = ke[e];
    let g, d;
    if (h)
      return e === "$attrs" && ht(t, "get", e), h(t);
    if (
      // css module (injected by vue-loader)
      (g = l.__cssModules) && (g = g[e])
    )
      return g;
    if (n !== Y && H(n, e))
      return i[e] = 4, n[e];
    if (
      // global properties
      d = c.config.globalProperties, H(d, e)
    )
      return d[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: o, ctx: s } = t;
    return rr(o, e) ? (o[e] = n, !0) : r !== Y && H(r, e) ? (r[e] = n, !0) : H(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let l;
    return !!n[i] || t !== Y && H(t, i) || rr(e, i) || (l = s[0]) && H(l, i) || H(r, i) || H(ke, i) || H(o.config.globalProperties, i);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : H(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Po(t) {
  return B(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let wr = !0;
function sc(t) {
  const e = Qr(t), n = t.proxy, r = t.ctx;
  wr = !1, e.beforeCreate && Io(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: c,
    inject: f,
    // lifecycle
    created: h,
    beforeMount: g,
    mounted: d,
    beforeUpdate: y,
    updated: T,
    activated: I,
    deactivated: k,
    beforeDestroy: P,
    beforeUnmount: O,
    destroyed: M,
    unmounted: v,
    render: C,
    renderTracked: F,
    renderTriggered: L,
    errorCaptured: Q,
    serverPrefetch: bt,
    // public API
    expose: z,
    inheritAttrs: ft,
    // assets
    components: vt,
    directives: et,
    filters: Pt
  } = e;
  if (f && ic(f, r, null), i)
    for (const W in i) {
      const K = i[W];
      U(K) && (r[W] = K.bind(n));
    }
  if (o) {
    const W = o.call(n, n);
    Z(W) && (t.data = Pe(W));
  }
  if (wr = !0, s)
    for (const W in s) {
      const K = s[W], pt = U(K) ? K.bind(n, n) : U(K.get) ? K.get.bind(n, n) : At, le = !U(K) && U(K.set) ? K.set.bind(n) : At, Xt = Gs({
        get: pt,
        set: le
      });
      Object.defineProperty(r, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Xt.value,
        set: (It) => Xt.value = It
      });
    }
  if (l)
    for (const W in l)
      $s(l[W], r, n, W);
  if (c) {
    const W = U(c) ? c.call(n) : c;
    Reflect.ownKeys(W).forEach((K) => {
      dc(K, W[K]);
    });
  }
  h && Io(h, t, "c");
  function G(W, K) {
    B(K) ? K.forEach((pt) => W(pt.bind(n))) : K && W(K.bind(n));
  }
  if (G(Vl, g), G(js, d), G(Jl, y), G(Yl, T), G(ql, I), G(zl, k), G(tc, Q), G(Gl, F), G(Zl, L), G(Ql, O), G(Fs, v), G(Xl, bt), B(z))
    if (z.length) {
      const W = t.exposed || (t.exposed = {});
      z.forEach((K) => {
        Object.defineProperty(W, K, {
          get: () => n[K],
          set: (pt) => n[K] = pt
        });
      });
    } else
      t.exposed || (t.exposed = {});
  C && t.render === At && (t.render = C), ft != null && (t.inheritAttrs = ft), vt && (t.components = vt), et && (t.directives = et);
}
function ic(t, e, n = At) {
  B(t) && (t = Er(t));
  for (const r in t) {
    const o = t[r];
    let s;
    Z(o) ? "default" in o ? s = vn(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : s = vn(o.from || r) : s = vn(o), ut(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : e[r] = s;
  }
}
function Io(t, e, n) {
  Tt(
    B(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function $s(t, e, n, r) {
  const o = r.includes(".") ? Rs(n, r) : () => n[r];
  if (ot(t)) {
    const s = e[t];
    U(s) && Le(o, s);
  } else if (U(t))
    Le(o, t.bind(n));
  else if (Z(t))
    if (B(t))
      t.forEach((s) => $s(s, e, n, r));
    else {
      const s = U(t.handler) ? t.handler.bind(n) : e[t.handler];
      U(s) && Le(o, s, t);
    }
}
function Qr(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = t.appContext, l = s.get(e);
  let c;
  return l ? c = l : !o.length && !n && !r ? c = e : (c = {}, o.length && o.forEach(
    (f) => An(c, f, i, !0)
  ), An(c, e, i)), Z(e) && s.set(e, c), c;
}
function An(t, e, n, r = !1) {
  const { mixins: o, extends: s } = e;
  s && An(t, s, n, !0), o && o.forEach(
    (i) => An(t, i, n, !0)
  );
  for (const i in e)
    if (!(r && i === "expose")) {
      const l = lc[i] || n && n[i];
      t[i] = l ? l(t[i], e[i]) : e[i];
    }
  return t;
}
const lc = {
  data: Mo,
  props: So,
  emits: So,
  // objects
  methods: je,
  computed: je,
  // lifecycle
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  // assets
  components: je,
  directives: je,
  // watch
  watch: uc,
  // provide / inject
  provide: Mo,
  inject: cc
};
function Mo(t, e) {
  return e ? t ? function() {
    return rt(
      U(t) ? t.call(this, this) : t,
      U(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function cc(t, e) {
  return je(Er(t), Er(e));
}
function Er(t) {
  if (B(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function at(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function je(t, e) {
  return t ? rt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function So(t, e) {
  return t ? B(t) && B(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : rt(
    /* @__PURE__ */ Object.create(null),
    Po(t),
    Po(e ?? {})
  ) : e;
}
function uc(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = rt(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = at(t[r], e[r]);
  return n;
}
function Ds() {
  return {
    app: null,
    config: {
      isNativeTag: Ri,
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
let fc = 0;
function ac(t, e) {
  return function(r, o = null) {
    U(r) || (r = rt({}, r)), o != null && !Z(o) && (o = null);
    const s = Ds(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const c = s.app = {
      _uid: fc++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: $c,
      get config() {
        return s.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return i.has(f) || (f && U(f.install) ? (i.add(f), f.install(c, ...h)) : U(f) && (i.add(f), f(c, ...h))), c;
      },
      mixin(f) {
        return s.mixins.includes(f) || s.mixins.push(f), c;
      },
      component(f, h) {
        return h ? (s.components[f] = h, c) : s.components[f];
      },
      directive(f, h) {
        return h ? (s.directives[f] = h, c) : s.directives[f];
      },
      mount(f, h, g) {
        if (!l) {
          const d = Nt(
            r,
            o
          );
          return d.appContext = s, h && e ? e(d, f) : t(d, f, g), l = !0, c._container = f, f.__vue_app__ = c, zn(d.component) || d.component.proxy;
        }
      },
      unmount() {
        l && (t(null, c._container), delete c._container.__vue_app__);
      },
      provide(f, h) {
        return s.provides[f] = h, c;
      },
      runWithContext(f) {
        Tn = c;
        try {
          return f();
        } finally {
          Tn = null;
        }
      }
    };
    return c;
  };
}
let Tn = null;
function dc(t, e) {
  if (nt) {
    let n = nt.provides;
    const r = nt.parent && nt.parent.provides;
    r === n && (n = nt.provides = Object.create(r)), n[t] = e;
  }
}
function vn(t, e, n = !1) {
  const r = nt || st;
  if (r || Tn) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Tn._context.provides;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && U(e) ? e.call(r && r.proxy) : e;
  }
}
function hc(t, e, n, r = !1) {
  const o = {}, s = {};
  En(s, qn, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), Hs(t, e, o, s);
  for (const i in t.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? t.props = r ? o : El(o) : t.type.props ? t.props = o : t.props = s, t.attrs = s;
}
function pc(t, e, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = t, l = q(o), [c] = t.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = t.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let d = h[g];
        if ($n(t.emitsOptions, d))
          continue;
        const y = e[d];
        if (c)
          if (H(s, d))
            y !== s[d] && (s[d] = y, f = !0);
          else {
            const T = Bt(d);
            o[T] = xr(
              c,
              l,
              T,
              y,
              t,
              !1
              /* isAbsent */
            );
          }
        else
          y !== s[d] && (s[d] = y, f = !0);
      }
    }
  } else {
    Hs(t, e, o, s) && (f = !0);
    let h;
    for (const g in l)
      (!e || // for camelCase
      !H(e, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Ce(g)) === g || !H(e, h))) && (c ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[h] !== void 0) && (o[g] = xr(
        c,
        l,
        g,
        void 0,
        t,
        !0
        /* isAbsent */
      )) : delete o[g]);
    if (s !== l)
      for (const g in s)
        (!e || !H(e, g)) && (delete s[g], f = !0);
  }
  f && Ut(t, "set", "$attrs");
}
function Hs(t, e, n, r) {
  const [o, s] = t.propsOptions;
  let i = !1, l;
  if (e)
    for (let c in e) {
      if (yn(c))
        continue;
      const f = e[c];
      let h;
      o && H(o, h = Bt(c)) ? !s || !s.includes(h) ? n[h] = f : (l || (l = {}))[h] = f : $n(t.emitsOptions, c) || (!(c in r) || f !== r[c]) && (r[c] = f, i = !0);
    }
  if (s) {
    const c = q(n), f = l || Y;
    for (let h = 0; h < s.length; h++) {
      const g = s[h];
      n[g] = xr(
        o,
        c,
        g,
        f[g],
        t,
        !H(f, g)
      );
    }
  }
  return i;
}
function xr(t, e, n, r, o, s) {
  const i = t[n];
  if (i != null) {
    const l = H(i, "default");
    if (l && r === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && U(c)) {
        const { propsDefaults: f } = o;
        n in f ? r = f[n] : (ye(o), r = f[n] = c.call(
          null,
          e
        ), se());
      } else
        r = c;
    }
    i[
      0
      /* shouldCast */
    ] && (s && !l ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ce(n)) && (r = !0));
  }
  return r;
}
function Ks(t, e, n = !1) {
  const r = e.propsCache, o = r.get(t);
  if (o)
    return o;
  const s = t.props, i = {}, l = [];
  let c = !1;
  if (!U(t)) {
    const h = (g) => {
      c = !0;
      const [d, y] = Ks(g, e, !0);
      rt(i, d), y && l.push(...y);
    };
    !n && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  if (!s && !c)
    return Z(t) && r.set(t, de), de;
  if (B(s))
    for (let h = 0; h < s.length; h++) {
      const g = Bt(s[h]);
      Oo(g) && (i[g] = Y);
    }
  else if (s)
    for (const h in s) {
      const g = Bt(h);
      if (Oo(g)) {
        const d = s[h], y = i[g] = B(d) || U(d) ? { type: d } : rt({}, d);
        if (y) {
          const T = Bo(Boolean, y.type), I = Bo(String, y.type);
          y[
            0
            /* shouldCast */
          ] = T > -1, y[
            1
            /* shouldCastTrue */
          ] = I < 0 || T < I, (T > -1 || H(y, "default")) && l.push(g);
        }
      }
    }
  const f = [i, l];
  return Z(t) && r.set(t, f), f;
}
function Oo(t) {
  return t[0] !== "$";
}
function Ro(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function No(t, e) {
  return Ro(t) === Ro(e);
}
function Bo(t, e) {
  return B(e) ? e.findIndex((n) => No(n, t)) : U(e) && No(e, t) ? 0 : -1;
}
const qs = (t) => t[0] === "_" || t === "$stable", Xr = (t) => B(t) ? t.map(Ot) : [Ot(t)], gc = (t, e, n) => {
  if (e._n)
    return e;
  const r = Fl((...o) => Xr(e(...o)), n);
  return r._c = !1, r;
}, zs = (t, e, n) => {
  const r = t._ctx;
  for (const o in t) {
    if (qs(o))
      continue;
    const s = t[o];
    if (U(s))
      e[o] = gc(o, s, r);
    else if (s != null) {
      const i = Xr(s);
      e[o] = () => i;
    }
  }
}, Ws = (t, e) => {
  const n = Xr(e);
  t.slots.default = () => n;
}, mc = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = q(e), En(e, "_", n)) : zs(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && Ws(t, e);
  En(t.slots, qn, 1);
}, _c = (t, e, n) => {
  const { vnode: r, slots: o } = t;
  let s = !0, i = Y;
  if (r.shapeFlag & 32) {
    const l = e._;
    l ? n && l === 1 ? s = !1 : (rt(o, e), !n && l === 1 && delete o._) : (s = !e.$stable, zs(e, o)), i = e;
  } else
    e && (Ws(t, e), i = { default: 1 });
  if (s)
    for (const l in o)
      !qs(l) && !(l in i) && delete o[l];
};
function Cr(t, e, n, r, o = !1) {
  if (B(t)) {
    t.forEach(
      (d, y) => Cr(
        d,
        e && (B(e) ? e[y] : e),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Ue(r) && !o)
    return;
  const s = r.shapeFlag & 4 ? zn(r.component) || r.component.proxy : r.el, i = o ? null : s, { i: l, r: c } = t, f = e && e.r, h = l.refs === Y ? l.refs = {} : l.refs, g = l.setupState;
  if (f != null && f !== c && (ot(f) ? (h[f] = null, H(g, f) && (g[f] = null)) : ut(f) && (f.value = null)), U(c))
    zt(c, l, 12, [i, h]);
  else {
    const d = ot(c), y = ut(c);
    if (d || y) {
      const T = () => {
        if (t.f) {
          const I = d ? H(g, c) ? g[c] : h[c] : c.value;
          o ? B(I) && Lr(I, s) : B(I) ? I.includes(s) || I.push(s) : d ? (h[c] = [s], H(g, c) && (g[c] = h[c])) : (c.value = [s], t.k && (h[t.k] = c.value));
        } else
          d ? (h[c] = i, H(g, c) && (g[c] = i)) : y && (c.value = i, t.k && (h[t.k] = i));
      };
      i ? (T.id = -1, dt(T, n)) : T();
    }
  }
}
const dt = Hl;
function yc(t) {
  return bc(t);
}
function bc(t, e) {
  const n = pr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: i,
    createText: l,
    createComment: c,
    setText: f,
    setElementText: h,
    parentNode: g,
    nextSibling: d,
    setScopeId: y = At,
    insertStaticContent: T
  } = t, I = (u, a, p, _ = null, m = null, E = null, A = !1, w = null, x = !!a.dynamicChildren) => {
    if (u === a)
      return;
    u && !Ne(u, a) && (_ = un(u), It(u, m, E, !0), u = null), a.patchFlag === -2 && (x = !1, a.dynamicChildren = null);
    const { type: b, ref: R, shapeFlag: S } = a;
    switch (b) {
      case Kn:
        k(u, a, p, _);
        break;
      case Jt:
        P(u, a, p, _);
        break;
      case or:
        u == null && O(a, p, _, A);
        break;
      case Et:
        vt(
          u,
          a,
          p,
          _,
          m,
          E,
          A,
          w,
          x
        );
        break;
      default:
        S & 1 ? C(
          u,
          a,
          p,
          _,
          m,
          E,
          A,
          w,
          x
        ) : S & 6 ? et(
          u,
          a,
          p,
          _,
          m,
          E,
          A,
          w,
          x
        ) : (S & 64 || S & 128) && b.process(
          u,
          a,
          p,
          _,
          m,
          E,
          A,
          w,
          x,
          ce
        );
    }
    R != null && m && Cr(R, u && u.ref, E, a || u, !a);
  }, k = (u, a, p, _) => {
    if (u == null)
      r(
        a.el = l(a.children),
        p,
        _
      );
    else {
      const m = a.el = u.el;
      a.children !== u.children && f(m, a.children);
    }
  }, P = (u, a, p, _) => {
    u == null ? r(
      a.el = c(a.children || ""),
      p,
      _
    ) : a.el = u.el;
  }, O = (u, a, p, _) => {
    [u.el, u.anchor] = T(
      u.children,
      a,
      p,
      _,
      u.el,
      u.anchor
    );
  }, M = ({ el: u, anchor: a }, p, _) => {
    let m;
    for (; u && u !== a; )
      m = d(u), r(u, p, _), u = m;
    r(a, p, _);
  }, v = ({ el: u, anchor: a }) => {
    let p;
    for (; u && u !== a; )
      p = d(u), o(u), u = p;
    o(a);
  }, C = (u, a, p, _, m, E, A, w, x) => {
    A = A || a.type === "svg", u == null ? F(
      a,
      p,
      _,
      m,
      E,
      A,
      w,
      x
    ) : bt(
      u,
      a,
      m,
      E,
      A,
      w,
      x
    );
  }, F = (u, a, p, _, m, E, A, w) => {
    let x, b;
    const { type: R, props: S, shapeFlag: N, transition: j, dirs: $ } = u;
    if (x = u.el = i(
      u.type,
      E,
      S && S.is,
      S
    ), N & 8 ? h(x, u.children) : N & 16 && Q(
      u.children,
      x,
      null,
      _,
      m,
      E && R !== "foreignObject",
      A,
      w
    ), $ && Zt(u, null, _, "created"), L(x, u, u.scopeId, A, _), S) {
      for (const V in S)
        V !== "value" && !yn(V) && s(
          x,
          V,
          null,
          S[V],
          E,
          u.children,
          _,
          m,
          Ft
        );
      "value" in S && s(x, "value", null, S.value), (b = S.onVnodeBeforeMount) && St(b, _, u);
    }
    $ && Zt(u, null, _, "beforeMount");
    const J = (!m || m && !m.pendingBranch) && j && !j.persisted;
    J && j.beforeEnter(x), r(x, a, p), ((b = S && S.onVnodeMounted) || J || $) && dt(() => {
      b && St(b, _, u), J && j.enter(x), $ && Zt(u, null, _, "mounted");
    }, m);
  }, L = (u, a, p, _, m) => {
    if (p && y(u, p), _)
      for (let E = 0; E < _.length; E++)
        y(u, _[E]);
    if (m) {
      let E = m.subTree;
      if (a === E) {
        const A = m.vnode;
        L(
          u,
          A,
          A.scopeId,
          A.slotScopeIds,
          m.parent
        );
      }
    }
  }, Q = (u, a, p, _, m, E, A, w, x = 0) => {
    for (let b = x; b < u.length; b++) {
      const R = u[b] = w ? Dt(u[b]) : Ot(u[b]);
      I(
        null,
        R,
        a,
        p,
        _,
        m,
        E,
        A,
        w
      );
    }
  }, bt = (u, a, p, _, m, E, A) => {
    const w = a.el = u.el;
    let { patchFlag: x, dynamicChildren: b, dirs: R } = a;
    x |= u.patchFlag & 16;
    const S = u.props || Y, N = a.props || Y;
    let j;
    p && Gt(p, !1), (j = N.onVnodeBeforeUpdate) && St(j, p, a, u), R && Zt(a, u, p, "beforeUpdate"), p && Gt(p, !0);
    const $ = m && a.type !== "foreignObject";
    if (b ? z(
      u.dynamicChildren,
      b,
      w,
      p,
      _,
      $,
      E
    ) : A || K(
      u,
      a,
      w,
      null,
      p,
      _,
      $,
      E,
      !1
    ), x > 0) {
      if (x & 16)
        ft(
          w,
          a,
          S,
          N,
          p,
          _,
          m
        );
      else if (x & 2 && S.class !== N.class && s(w, "class", null, N.class, m), x & 4 && s(w, "style", S.style, N.style, m), x & 8) {
        const J = a.dynamicProps;
        for (let V = 0; V < J.length; V++) {
          const tt = J[V], wt = S[tt], ue = N[tt];
          (ue !== wt || tt === "value") && s(
            w,
            tt,
            wt,
            ue,
            m,
            u.children,
            p,
            _,
            Ft
          );
        }
      }
      x & 1 && u.children !== a.children && h(w, a.children);
    } else
      !A && b == null && ft(
        w,
        a,
        S,
        N,
        p,
        _,
        m
      );
    ((j = N.onVnodeUpdated) || R) && dt(() => {
      j && St(j, p, a, u), R && Zt(a, u, p, "updated");
    }, _);
  }, z = (u, a, p, _, m, E, A) => {
    for (let w = 0; w < a.length; w++) {
      const x = u[w], b = a[w], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ne(x, b) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? g(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      I(
        x,
        b,
        R,
        null,
        _,
        m,
        E,
        A,
        !0
      );
    }
  }, ft = (u, a, p, _, m, E, A) => {
    if (p !== _) {
      if (p !== Y)
        for (const w in p)
          !yn(w) && !(w in _) && s(
            u,
            w,
            p[w],
            null,
            A,
            a.children,
            m,
            E,
            Ft
          );
      for (const w in _) {
        if (yn(w))
          continue;
        const x = _[w], b = p[w];
        x !== b && w !== "value" && s(
          u,
          w,
          b,
          x,
          A,
          a.children,
          m,
          E,
          Ft
        );
      }
      "value" in _ && s(u, "value", p.value, _.value);
    }
  }, vt = (u, a, p, _, m, E, A, w, x) => {
    const b = a.el = u ? u.el : l(""), R = a.anchor = u ? u.anchor : l("");
    let { patchFlag: S, dynamicChildren: N, slotScopeIds: j } = a;
    j && (w = w ? w.concat(j) : j), u == null ? (r(b, p, _), r(R, p, _), Q(
      a.children,
      p,
      R,
      m,
      E,
      A,
      w,
      x
    )) : S > 0 && S & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (z(
      u.dynamicChildren,
      N,
      p,
      m,
      E,
      A,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || m && a === m.subTree) && Vs(
      u,
      a,
      !0
      /* shallow */
    )) : K(
      u,
      a,
      p,
      R,
      m,
      E,
      A,
      w,
      x
    );
  }, et = (u, a, p, _, m, E, A, w, x) => {
    a.slotScopeIds = w, u == null ? a.shapeFlag & 512 ? m.ctx.activate(
      a,
      p,
      _,
      A,
      x
    ) : Pt(
      a,
      p,
      _,
      m,
      E,
      A,
      x
    ) : Me(u, a, x);
  }, Pt = (u, a, p, _, m, E, A) => {
    const w = u.component = Sc(
      u,
      _,
      m
    );
    if (Ns(u) && (w.ctx.renderer = ce), Rc(w), w.asyncDep) {
      if (m && m.registerDep(w, G), !u.el) {
        const x = w.subTree = Nt(Jt);
        P(null, x, a, p);
      }
      return;
    }
    G(
      w,
      u,
      a,
      p,
      m,
      E,
      A
    );
  }, Me = (u, a, p) => {
    const _ = a.component = u.component;
    if (kl(u, a, p))
      if (_.asyncDep && !_.asyncResolved) {
        W(_, a, p);
        return;
      } else
        _.next = a, Rl(_.update), _.update();
    else
      a.el = u.el, _.vnode = a;
  }, G = (u, a, p, _, m, E, A) => {
    const w = () => {
      if (u.isMounted) {
        let { next: R, bu: S, u: N, parent: j, vnode: $ } = u, J = R, V;
        Gt(u, !1), R ? (R.el = $.el, W(u, R, A)) : R = $, S && bn(S), (V = R.props && R.props.onVnodeBeforeUpdate) && St(V, j, R, $), Gt(u, !0);
        const tt = nr(u), wt = u.subTree;
        u.subTree = tt, I(
          wt,
          tt,
          // parent may have changed if it's in a teleport
          g(wt.el),
          // anchor may have changed if it's in a fragment
          un(wt),
          u,
          m,
          E
        ), R.el = tt.el, J === null && $l(u, tt.el), N && dt(N, m), (V = R.props && R.props.onVnodeUpdated) && dt(
          () => St(V, j, R, $),
          m
        );
      } else {
        let R;
        const { el: S, props: N } = a, { bm: j, m: $, parent: J } = u, V = Ue(a);
        if (Gt(u, !1), j && bn(j), !V && (R = N && N.onVnodeBeforeMount) && St(R, J, a), Gt(u, !0), S && Zn) {
          const tt = () => {
            u.subTree = nr(u), Zn(
              S,
              u.subTree,
              u,
              m,
              null
            );
          };
          V ? a.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !u.isUnmounted && tt()
          ) : tt();
        } else {
          const tt = u.subTree = nr(u);
          I(
            null,
            tt,
            p,
            _,
            u,
            m,
            E
          ), a.el = tt.el;
        }
        if ($ && dt($, m), !V && (R = N && N.onVnodeMounted)) {
          const tt = a;
          dt(
            () => St(R, J, tt),
            m
          );
        }
        (a.shapeFlag & 256 || J && Ue(J.vnode) && J.vnode.shapeFlag & 256) && u.a && dt(u.a, m), u.isMounted = !0, a = p = _ = null;
      }
    }, x = u.effect = new Hr(
      w,
      () => Yr(b),
      u.scope
      // track it in component's effect scope
    ), b = u.update = () => x.run();
    b.id = u.uid, Gt(u, !0), b();
  }, W = (u, a, p) => {
    a.component = u;
    const _ = u.vnode.props;
    u.vnode = a, u.next = null, pc(u, a.props, _, p), _c(u, a.children, p), Ae(), Co(), Te();
  }, K = (u, a, p, _, m, E, A, w, x = !1) => {
    const b = u && u.children, R = u ? u.shapeFlag : 0, S = a.children, { patchFlag: N, shapeFlag: j } = a;
    if (N > 0) {
      if (N & 128) {
        le(
          b,
          S,
          p,
          _,
          m,
          E,
          A,
          w,
          x
        );
        return;
      } else if (N & 256) {
        pt(
          b,
          S,
          p,
          _,
          m,
          E,
          A,
          w,
          x
        );
        return;
      }
    }
    j & 8 ? (R & 16 && Ft(b, m, E), S !== b && h(p, S)) : R & 16 ? j & 16 ? le(
      b,
      S,
      p,
      _,
      m,
      E,
      A,
      w,
      x
    ) : Ft(b, m, E, !0) : (R & 8 && h(p, ""), j & 16 && Q(
      S,
      p,
      _,
      m,
      E,
      A,
      w,
      x
    ));
  }, pt = (u, a, p, _, m, E, A, w, x) => {
    u = u || de, a = a || de;
    const b = u.length, R = a.length, S = Math.min(b, R);
    let N;
    for (N = 0; N < S; N++) {
      const j = a[N] = x ? Dt(a[N]) : Ot(a[N]);
      I(
        u[N],
        j,
        p,
        null,
        m,
        E,
        A,
        w,
        x
      );
    }
    b > R ? Ft(
      u,
      m,
      E,
      !0,
      !1,
      S
    ) : Q(
      a,
      p,
      _,
      m,
      E,
      A,
      w,
      x,
      S
    );
  }, le = (u, a, p, _, m, E, A, w, x) => {
    let b = 0;
    const R = a.length;
    let S = u.length - 1, N = R - 1;
    for (; b <= S && b <= N; ) {
      const j = u[b], $ = a[b] = x ? Dt(a[b]) : Ot(a[b]);
      if (Ne(j, $))
        I(
          j,
          $,
          p,
          null,
          m,
          E,
          A,
          w,
          x
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= N; ) {
      const j = u[S], $ = a[N] = x ? Dt(a[N]) : Ot(a[N]);
      if (Ne(j, $))
        I(
          j,
          $,
          p,
          null,
          m,
          E,
          A,
          w,
          x
        );
      else
        break;
      S--, N--;
    }
    if (b > S) {
      if (b <= N) {
        const j = N + 1, $ = j < R ? a[j].el : _;
        for (; b <= N; )
          I(
            null,
            a[b] = x ? Dt(a[b]) : Ot(a[b]),
            p,
            $,
            m,
            E,
            A,
            w,
            x
          ), b++;
      }
    } else if (b > N)
      for (; b <= S; )
        It(u[b], m, E, !0), b++;
    else {
      const j = b, $ = b, J = /* @__PURE__ */ new Map();
      for (b = $; b <= N; b++) {
        const gt = a[b] = x ? Dt(a[b]) : Ot(a[b]);
        gt.key != null && J.set(gt.key, b);
      }
      let V, tt = 0;
      const wt = N - $ + 1;
      let ue = !1, ao = 0;
      const Se = new Array(wt);
      for (b = 0; b < wt; b++)
        Se[b] = 0;
      for (b = j; b <= S; b++) {
        const gt = u[b];
        if (tt >= wt) {
          It(gt, m, E, !0);
          continue;
        }
        let Mt;
        if (gt.key != null)
          Mt = J.get(gt.key);
        else
          for (V = $; V <= N; V++)
            if (Se[V - $] === 0 && Ne(gt, a[V])) {
              Mt = V;
              break;
            }
        Mt === void 0 ? It(gt, m, E, !0) : (Se[Mt - $] = b + 1, Mt >= ao ? ao = Mt : ue = !0, I(
          gt,
          a[Mt],
          p,
          null,
          m,
          E,
          A,
          w,
          x
        ), tt++);
      }
      const ho = ue ? vc(Se) : de;
      for (V = ho.length - 1, b = wt - 1; b >= 0; b--) {
        const gt = $ + b, Mt = a[gt], po = gt + 1 < R ? a[gt + 1].el : _;
        Se[b] === 0 ? I(
          null,
          Mt,
          p,
          po,
          m,
          E,
          A,
          w,
          x
        ) : ue && (V < 0 || b !== ho[V] ? Xt(Mt, p, po, 2) : V--);
      }
    }
  }, Xt = (u, a, p, _, m = null) => {
    const { el: E, type: A, transition: w, children: x, shapeFlag: b } = u;
    if (b & 6) {
      Xt(u.component.subTree, a, p, _);
      return;
    }
    if (b & 128) {
      u.suspense.move(a, p, _);
      return;
    }
    if (b & 64) {
      A.move(u, a, p, ce);
      return;
    }
    if (A === Et) {
      r(E, a, p);
      for (let S = 0; S < x.length; S++)
        Xt(x[S], a, p, _);
      r(u.anchor, a, p);
      return;
    }
    if (A === or) {
      M(u, a, p);
      return;
    }
    if (_ !== 2 && b & 1 && w)
      if (_ === 0)
        w.beforeEnter(E), r(E, a, p), dt(() => w.enter(E), m);
      else {
        const { leave: S, delayLeave: N, afterLeave: j } = w, $ = () => r(E, a, p), J = () => {
          S(E, () => {
            $(), j && j();
          });
        };
        N ? N(E, $, J) : J();
      }
    else
      r(E, a, p);
  }, It = (u, a, p, _ = !1, m = !1) => {
    const {
      type: E,
      props: A,
      ref: w,
      children: x,
      dynamicChildren: b,
      shapeFlag: R,
      patchFlag: S,
      dirs: N
    } = u;
    if (w != null && Cr(w, null, p, u, !0), R & 256) {
      a.ctx.deactivate(u);
      return;
    }
    const j = R & 1 && N, $ = !Ue(u);
    let J;
    if ($ && (J = A && A.onVnodeBeforeUnmount) && St(J, a, u), R & 6)
      Ii(u.component, p, _);
    else {
      if (R & 128) {
        u.suspense.unmount(p, _);
        return;
      }
      j && Zt(u, null, a, "beforeUnmount"), R & 64 ? u.type.remove(
        u,
        a,
        p,
        m,
        ce,
        _
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Et || S > 0 && S & 64) ? Ft(
        b,
        a,
        p,
        !1,
        !0
      ) : (E === Et && S & 384 || !m && R & 16) && Ft(x, a, p), _ && uo(u);
    }
    ($ && (J = A && A.onVnodeUnmounted) || j) && dt(() => {
      J && St(J, a, u), j && Zt(u, null, a, "unmounted");
    }, p);
  }, uo = (u) => {
    const { type: a, el: p, anchor: _, transition: m } = u;
    if (a === Et) {
      Pi(p, _);
      return;
    }
    if (a === or) {
      v(u);
      return;
    }
    const E = () => {
      o(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (u.shapeFlag & 1 && m && !m.persisted) {
      const { leave: A, delayLeave: w } = m, x = () => A(p, E);
      w ? w(u.el, E, x) : x();
    } else
      E();
  }, Pi = (u, a) => {
    let p;
    for (; u !== a; )
      p = d(u), o(u), u = p;
    o(a);
  }, Ii = (u, a, p) => {
    const { bum: _, scope: m, update: E, subTree: A, um: w } = u;
    _ && bn(_), m.stop(), E && (E.active = !1, It(A, u, a, p)), w && dt(w, a), dt(() => {
      u.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve());
  }, Ft = (u, a, p, _ = !1, m = !1, E = 0) => {
    for (let A = E; A < u.length; A++)
      It(u[A], a, p, _, m);
  }, un = (u) => u.shapeFlag & 6 ? un(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : d(u.anchor || u.el), fo = (u, a, p) => {
    u == null ? a._vnode && It(a._vnode, null, null, !0) : I(a._vnode || null, u, a, null, null, null, p), Co(), Ts(), a._vnode = u;
  }, ce = {
    p: I,
    um: It,
    m: Xt,
    r: uo,
    mt: Pt,
    mc: Q,
    pc: K,
    pbc: z,
    n: un,
    o: t
  };
  let Xn, Zn;
  return e && ([Xn, Zn] = e(
    ce
  )), {
    render: fo,
    hydrate: Xn,
    createApp: ac(fo, Xn)
  };
}
function Gt({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Vs(t, e, n = !1) {
  const r = t.children, o = e.children;
  if (B(r) && B(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = Dt(o[s]), l.el = i.el), n || Vs(i, l)), l.type === Kn && (l.el = i.el);
    }
}
function vc(t) {
  const e = t.slice(), n = [0];
  let r, o, s, i, l;
  const c = t.length;
  for (r = 0; r < c; r++) {
    const f = t[r];
    if (f !== 0) {
      if (o = n[n.length - 1], t[o] < f) {
        e[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, t[n[l]] < f ? s = l + 1 : i = l;
      f < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = e[i];
  return n;
}
const wc = (t) => t.__isTeleport, Et = Symbol.for("v-fgt"), Kn = Symbol.for("v-txt"), Jt = Symbol.for("v-cmt"), or = Symbol.for("v-stc"), $e = [];
let Ct = null;
function ct(t = !1) {
  $e.push(Ct = t ? null : []);
}
function Ec() {
  $e.pop(), Ct = $e[$e.length - 1] || null;
}
let Je = 1;
function jo(t) {
  Je += t;
}
function Js(t) {
  return t.dynamicChildren = Je > 0 ? Ct || de : null, Ec(), Je > 0 && Ct && Ct.push(t), t;
}
function Yt(t, e, n, r, o, s) {
  return Js(
    D(
      t,
      e,
      n,
      r,
      o,
      s,
      !0
      /* isBlock */
    )
  );
}
function Wt(t, e, n, r, o) {
  return Js(
    Nt(
      t,
      e,
      n,
      r,
      o,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function Ys(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Ne(t, e) {
  return t.type === e.type && t.key === e.key;
}
const qn = "__vInternal", Qs = ({ key: t }) => t ?? null, wn = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? ot(t) || ut(t) || U(t) ? { i: st, r: t, k: e, f: !!n } : t : null);
function D(t, e = null, n = null, r = 0, o = null, s = t === Et ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Qs(e),
    ref: e && wn(e),
    scopeId: Dn,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: st
  };
  return l ? (Zr(c, n), s & 128 && t.normalize(c)) : n && (c.shapeFlag |= ot(n) ? 8 : 16), Je > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ct && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ct.push(c), c;
}
const Nt = xc;
function xc(t, e = null, n = null, r = 0, o = null, s = !1) {
  if ((!t || t === Us) && (t = Jt), Ys(t)) {
    const l = _e(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Zr(l, n), Je > 0 && !s && Ct && (l.shapeFlag & 6 ? Ct[Ct.indexOf(t)] = l : Ct.push(l)), l.patchFlag |= -2, l;
  }
  if (Lc(t) && (t = t.__vccOpts), e) {
    e = Cc(e);
    let { class: l, style: c } = e;
    l && !ot(l) && (e.class = nn(l)), Z(c) && (bs(c) && !B(c) && (c = rt({}, c)), e.style = $r(c));
  }
  const i = ot(t) ? 1 : Dl(t) ? 128 : wc(t) ? 64 : Z(t) ? 4 : U(t) ? 2 : 0;
  return D(
    t,
    e,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function Cc(t) {
  return t ? bs(t) || qn in t ? rt({}, t) : t : null;
}
function _e(t, e, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = t, l = e ? Pc(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && Qs(l),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? B(o) ? o.concat(wn(e)) : [o, wn(e)] : wn(e)
    ) : o,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: i,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Et ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && _e(t.ssContent),
    ssFallback: t.ssFallback && _e(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function Ac(t = " ", e = 0) {
  return Nt(Kn, null, t, e);
}
function Tc(t = "", e = !1) {
  return e ? (ct(), Wt(Jt, null, t)) : Nt(Jt, null, t);
}
function Ot(t) {
  return t == null || typeof t == "boolean" ? Nt(Jt) : B(t) ? Nt(
    Et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? Dt(t) : Nt(Kn, null, String(t));
}
function Dt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : _e(t);
}
function Zr(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (B(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), Zr(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !(qn in e) ? e._ctx = st : o === 3 && st && (st.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    U(e) ? (e = { default: e, _ctx: st }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Ac(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Pc(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const o in r)
      if (o === "class")
        e.class !== r.class && (e.class = nn([e.class, r.class]));
      else if (o === "style")
        e.style = $r([e.style, r.style]);
      else if (Bn(o)) {
        const s = e[o], i = r[o];
        i && s !== i && !(B(s) && s.includes(i)) && (e[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (e[o] = r[o]);
  }
  return e;
}
function St(t, e, n, r = null) {
  Tt(t, e, 7, [
    n,
    r
  ]);
}
const Ic = Ds();
let Mc = 0;
function Sc(t, e, n) {
  const r = t.type, o = (e ? e.appContext : t.appContext) || Ic, s = {
    uid: Mc++,
    vnode: t,
    type: r,
    parent: e,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Vi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ks(r, o),
    emitsOptions: Is(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Y,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Y,
    data: Y,
    props: Y,
    attrs: Y,
    slots: Y,
    refs: Y,
    setupState: Y,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = jl.bind(null, s), t.ce && t.ce(s), s;
}
let nt = null;
const Oc = () => nt || st;
let Gr, ae, Fo = "__VUE_INSTANCE_SETTERS__";
(ae = pr()[Fo]) || (ae = pr()[Fo] = []), ae.push((t) => nt = t), Gr = (t) => {
  ae.length > 1 ? ae.forEach((e) => e(t)) : ae[0](t);
};
const ye = (t) => {
  Gr(t), t.scope.on();
}, se = () => {
  nt && nt.scope.off(), Gr(null);
};
function Xs(t) {
  return t.vnode.shapeFlag & 4;
}
let Ye = !1;
function Rc(t, e = !1) {
  Ye = e;
  const { props: n, children: r } = t.vnode, o = Xs(t);
  hc(t, n, o, e), mc(t, r);
  const s = o ? Nc(t, e) : void 0;
  return Ye = !1, s;
}
function Nc(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = vs(new Proxy(t.ctx, oc));
  const { setup: r } = n;
  if (r) {
    const o = t.setupContext = r.length > 1 ? jc(t) : null;
    ye(t), Ae();
    const s = zt(
      r,
      t,
      0,
      [t.props, o]
    );
    if (Te(), se(), os(s)) {
      if (s.then(se, se), e)
        return s.then((i) => {
          Lo(t, i, e);
        }).catch((i) => {
          kn(i, t, 0);
        });
      t.asyncDep = s;
    } else
      Lo(t, s, e);
  } else
    Zs(t, e);
}
function Lo(t, e, n) {
  U(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Z(e) && (t.setupState = xs(e)), Zs(t, n);
}
let Uo;
function Zs(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Uo && !r.render) {
      const o = r.template || Qr(t).template;
      if (o) {
        const { isCustomElement: s, compilerOptions: i } = t.appContext.config, { delimiters: l, compilerOptions: c } = r, f = rt(
          rt(
            {
              isCustomElement: s,
              delimiters: l
            },
            i
          ),
          c
        );
        r.render = Uo(o, f);
      }
    }
    t.render = r.render || At;
  }
  ye(t), Ae(), sc(t), Te(), se();
}
function Bc(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return ht(t, "get", "$attrs"), e[n];
      }
    }
  ));
}
function jc(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    get attrs() {
      return Bc(t);
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function zn(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(xs(vs(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in ke)
          return ke[n](t);
      },
      has(e, n) {
        return n in e || n in ke;
      }
    }));
}
function Fc(t, e = !0) {
  return U(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Lc(t) {
  return U(t) && "__vccOpts" in t;
}
const Gs = (t, e) => Il(t, e, Ye), Uc = Symbol.for("v-scx"), kc = () => vn(Uc), $c = "3.3.4", Dc = "http://www.w3.org/2000/svg", ee = typeof document < "u" ? document : null, ko = ee && /* @__PURE__ */ ee.createElement("template"), Hc = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const o = e ? ee.createElementNS(Dc, t) : ee.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (t) => ee.createTextNode(t),
  createComment: (t) => ee.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => ee.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, o, s) {
    const i = n ? n.previousSibling : e.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; e.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      ko.innerHTML = r ? `<svg>${t}</svg>` : t;
      const l = ko.content;
      if (r) {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      e.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
};
function Kc(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function qc(t, e, n) {
  const r = t.style, o = ot(n);
  if (n && !o) {
    if (e && !ot(e))
      for (const s in e)
        n[s] == null && Ar(r, s, "");
    for (const s in n)
      Ar(r, s, n[s]);
  } else {
    const s = r.display;
    o ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = s);
  }
}
const $o = /\s*!important$/;
function Ar(t, e, n) {
  if (B(n))
    n.forEach((r) => Ar(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = zc(t, e);
    $o.test(n) ? t.setProperty(
      Ce(r),
      n.replace($o, ""),
      "important"
    ) : t[r] = n;
  }
}
const Do = ["Webkit", "Moz", "ms"], sr = {};
function zc(t, e) {
  const n = sr[e];
  if (n)
    return n;
  let r = Bt(e);
  if (r !== "filter" && r in t)
    return sr[e] = r;
  r = Fn(r);
  for (let o = 0; o < Do.length; o++) {
    const s = Do[o] + r;
    if (s in t)
      return sr[e] = s;
  }
  return e;
}
const Ho = "http://www.w3.org/1999/xlink";
function Wc(t, e, n, r, o) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Ho, e.slice(6, e.length)) : t.setAttributeNS(Ho, e, n);
  else {
    const s = zi(e);
    n == null || s && !ss(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function Vc(t, e, n, r, o, s, i) {
  if (e === "innerHTML" || e === "textContent") {
    r && i(r, o, s), t[e] = n ?? "";
    return;
  }
  const l = t.tagName;
  if (e === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    t._value = n;
    const f = l === "OPTION" ? t.getAttribute("value") : t.value, h = n ?? "";
    f !== h && (t.value = h), n == null && t.removeAttribute(e);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof t[e];
    f === "boolean" ? n = ss(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  c && t.removeAttribute(e);
}
function ne(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function Jc(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function Yc(t, e, n, r, o = null) {
  const s = t._vei || (t._vei = {}), i = s[e];
  if (r && i)
    i.value = r;
  else {
    const [l, c] = Qc(e);
    if (r) {
      const f = s[e] = Gc(r, o);
      ne(t, l, f, c);
    } else
      i && (Jc(t, l, i, c), s[e] = void 0);
  }
}
const Ko = /(?:Once|Passive|Capture)$/;
function Qc(t) {
  let e;
  if (Ko.test(t)) {
    e = {};
    let r;
    for (; r = t.match(Ko); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Ce(t.slice(2)), e];
}
let ir = 0;
const Xc = /* @__PURE__ */ Promise.resolve(), Zc = () => ir || (Xc.then(() => ir = 0), ir = Date.now());
function Gc(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Tt(
      tu(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = Zc(), n;
}
function tu(t, e) {
  if (B(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return e;
}
const qo = /^on[a-z]/, eu = (t, e, n, r, o = !1, s, i, l, c) => {
  e === "class" ? Kc(t, r, o) : e === "style" ? qc(t, n, r) : Bn(e) ? Fr(e) || Yc(t, e, n, r, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : nu(t, e, r, o)) ? Vc(
    t,
    e,
    r,
    s,
    i,
    l,
    c
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), Wc(t, e, r, o));
};
function nu(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && qo.test(e) && U(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || qo.test(e) && ot(n) ? !1 : e in t;
}
const Pn = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return B(e) ? (n) => bn(e, n) : e;
};
function ru(t) {
  t.target.composing = !0;
}
function zo(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Wo = {
  created(t, { modifiers: { lazy: e, trim: n, number: r } }, o) {
    t._assign = Pn(o);
    const s = r || o.props && o.props.type === "number";
    ne(t, e ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let l = t.value;
      n && (l = l.trim()), s && (l = hr(l)), t._assign(l);
    }), n && ne(t, "change", () => {
      t.value = t.value.trim();
    }), e || (ne(t, "compositionstart", ru), ne(t, "compositionend", zo), ne(t, "change", zo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: r, number: o } }, s) {
    if (t._assign = Pn(s), t.composing || document.activeElement === t && t.type !== "range" && (n || r && t.value.trim() === e || (o || t.type === "number") && hr(t.value) === e))
      return;
    const i = e ?? "";
    t.value !== i && (t.value = i);
  }
}, lr = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, n) {
    t._assign = Pn(n), ne(t, "change", () => {
      const r = t._modelValue, o = ou(t), s = t.checked, i = t._assign;
      if (B(r)) {
        const l = is(r, o), c = l !== -1;
        if (s && !c)
          i(r.concat(o));
        else if (!s && c) {
          const f = [...r];
          f.splice(l, 1), i(f);
        }
      } else if (Ur(r)) {
        const l = new Set(r);
        s ? l.add(o) : l.delete(o), i(l);
      } else
        i(ti(t, s));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Vo,
  beforeUpdate(t, e, n) {
    t._assign = Pn(n), Vo(t, e, n);
  }
};
function Vo(t, { value: e, oldValue: n }, r) {
  t._modelValue = e, B(e) ? t.checked = is(e, r.props.value) > -1 : Ur(e) ? t.checked = e.has(r.props.value) : e !== n && (t.checked = Ln(e, ti(t, !0)));
}
function ou(t) {
  return "_value" in t ? t._value : t.value;
}
function ti(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const su = /* @__PURE__ */ rt({ patchProp: eu }, Hc);
let Jo;
function iu() {
  return Jo || (Jo = yc(su));
}
const lu = (...t) => {
  const e = iu().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const o = cu(r);
    if (!o)
      return;
    const s = e._component;
    !U(s) && !s.render && !s.template && (s.template = o.innerHTML), o.innerHTML = "";
    const i = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, e;
};
function cu(t) {
  return ot(t) ? document.querySelector(t) : t;
}
var uu = Object.defineProperty, fu = (t, e, n) => e in t ? uu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, ei = (t, e, n) => (fu(t, typeof e != "symbol" ? e + "" : e, n), n);
const au = (t) => t;
function Ie(t) {
  let e = t.length;
  for (; --e >= 0; )
    t[e] = 0;
}
const du = 3, hu = 258, ni = 29, pu = 256, gu = pu + 1 + ni, ri = 30, mu = 512, _u = new Array((gu + 2) * 2);
Ie(_u);
const yu = new Array(ri * 2);
Ie(yu);
const bu = new Array(mu);
Ie(bu);
const vu = new Array(hu - du + 1);
Ie(vu);
const wu = new Array(ni);
Ie(wu);
const Eu = new Array(ri);
Ie(Eu);
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
}
const Tr = new Uint8Array(256);
for (let t = 0; t < 256; t++)
  Tr[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
Tr[254] = Tr[254] = 1;
var Pr;
((t) => {
  function e(d) {
    return /^\s*class/.test(String(d));
  }
  t.classs = e;
  function n(d) {
    return typeof d == "number";
  }
  t.number = n;
  function r(d) {
    return typeof d == "string";
  }
  t.string = r;
  function o(d) {
    return typeof d == "boolean";
  }
  t.boolean = o;
  function s(d) {
    return typeof d == "function" && !e(d);
  }
  t.fn = s;
  function i(d) {
    return Array.isArray(d);
  }
  t.array = i;
  function l(d) {
    return d !== null && typeof d == "object";
  }
  t.object = l;
  function c(d) {
    return h(d) ? !0 : typeof d == "string" ? !d : d instanceof Set || d instanceof Map ? d.size === 0 : d instanceof Array ? d.length === 0 : f(d) ? !!d[Symbol.iterator]().next().done : !!(l(d) && Object.keys(d).length === 0);
  }
  t.empty = c;
  function f(d) {
    return t.object(d) && Symbol.iterator in d;
  }
  t.iterable = f;
  function h(d) {
    return d == null;
  }
  t.nullish = h;
  function g(d) {
    return !t.object(d) && !t.fn(d) && !t.classs(d);
  }
  t.primitive = g;
})(Pr || (Pr = {}));
var xu = (t) => Array.isArray(t) ? t : [t];
const Cu = (t) => {
  var e;
  return t || (t = Oc()), (e = t.proxy) == null ? void 0 : e.$props;
}, Au = au({
  loading: {
    type: Boolean,
    default: !1
  },
  click: {
    type: Function,
    required: !1
  }
});
function Tu() {
  const t = xl(!1), e = Cu();
  return {
    get isProcessing() {
      return X(t) || (e == null ? void 0 : e.loading);
    },
    handler: async (n) => {
      var r;
      t.value = !0;
      try {
        await ((r = e == null ? void 0 : e.click) == null ? void 0 : r.call(e, n));
      } catch (o) {
        throw o;
      } finally {
        t.value = !1;
      }
    }
  };
}
const Pu = ["disabled"];
({
  ...Au
});
const Iu = {
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
}, oi = ["meta", "ctrl", "alt", "shift"], Mu = (t) => oi.includes(t), Su = "+", Ou = /\s/;
function Ru(t) {
  const e = {
    key: ""
  };
  if (t.split(Su).filter((n) => !!n.trim()).forEach((n) => {
    const r = n.trim(), o = Iu[r] || r;
    Mu(o) ? e[o] = !0 : e.key = o;
  }), Ou.test(e.key))
    throw new Error(`Parse \`${t}\` failed! Please check key string.`);
  return e;
}
const si = (t, e) => {
  const n = xu(t).map((r) => Pr.string(r) ? Ru(r) : r);
  return (r) => {
    for (const o of n)
      if (Nu(r, o)) {
        e(o);
        break;
      }
  };
};
function Nu(t, e) {
  return oi.filter((n) => e[n]).every((n) => {
    const r = n + "Key";
    return t[r];
  }) && e.key === t.key;
}
const Yo = "__$rpc_timeout_error$__";
var ii;
class Bu extends Error {
  constructor() {
    super(...arguments), ei(this, ii, !0);
  }
}
ii = Yo, ei(Bu, "S", Yo);
var ju = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, li = {}, _t = {};
let to;
const Fu = [
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
_t.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
_t.getSymbolTotalCodewords = function(t) {
  return Fu[t];
};
_t.getBCHDigit = function(t) {
  let e = 0;
  for (; t !== 0; )
    e++, t >>>= 1;
  return e;
};
_t.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  to = t;
};
_t.isKanjiModeEnabled = function() {
  return typeof to < "u";
};
_t.toSJIS = function(t) {
  return to(t);
};
var Wn = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function e(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  t.isValid = function(n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }, t.from = function(n, r) {
    if (t.isValid(n))
      return n;
    try {
      return e(n);
    } catch {
      return r;
    }
  };
})(Wn);
function ci() {
  this.buffer = [], this.length = 0;
}
ci.prototype = {
  get: function(t) {
    const e = Math.floor(t / 8);
    return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
  },
  put: function(t, e) {
    for (let n = 0; n < e; n++)
      this.putBit((t >>> e - n - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var Lu = ci;
function rn(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}
rn.prototype.set = function(t, e, n, r) {
  const o = t * this.size + e;
  this.data[o] = n, r && (this.reservedBit[o] = !0);
};
rn.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
};
rn.prototype.xor = function(t, e, n) {
  this.data[t * this.size + e] ^= n;
};
rn.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var Uu = rn, ui = {};
(function(t) {
  const e = _t.getSymbolSize;
  t.getRowColCoords = function(n) {
    if (n === 1)
      return [];
    const r = Math.floor(n / 7) + 2, o = e(n), s = o === 145 ? 26 : Math.ceil((o - 13) / (2 * r - 2)) * 2, i = [o - 7];
    for (let l = 1; l < r - 1; l++)
      i[l] = i[l - 1] - s;
    return i.push(6), i.reverse();
  }, t.getPositions = function(n) {
    const r = [], o = t.getRowColCoords(n), s = o.length;
    for (let i = 0; i < s; i++)
      for (let l = 0; l < s; l++)
        i === 0 && l === 0 || // top-left
        i === 0 && l === s - 1 || // bottom-left
        i === s - 1 && l === 0 || r.push([o[i], o[l]]);
    return r;
  };
})(ui);
var fi = {};
const ku = _t.getSymbolSize, Qo = 7;
fi.getPositions = function(t) {
  const e = ku(t);
  return [
    // top-left
    [0, 0],
    // top-right
    [e - Qo, 0],
    // bottom-left
    [0, e - Qo]
  ];
};
var ai = {};
(function(t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  t.isValid = function(r) {
    return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7;
  }, t.from = function(r) {
    return t.isValid(r) ? parseInt(r, 10) : void 0;
  }, t.getPenaltyN1 = function(r) {
    const o = r.size;
    let s = 0, i = 0, l = 0, c = null, f = null;
    for (let h = 0; h < o; h++) {
      i = l = 0, c = f = null;
      for (let g = 0; g < o; g++) {
        let d = r.get(h, g);
        d === c ? i++ : (i >= 5 && (s += e.N1 + (i - 5)), c = d, i = 1), d = r.get(g, h), d === f ? l++ : (l >= 5 && (s += e.N1 + (l - 5)), f = d, l = 1);
      }
      i >= 5 && (s += e.N1 + (i - 5)), l >= 5 && (s += e.N1 + (l - 5));
    }
    return s;
  }, t.getPenaltyN2 = function(r) {
    const o = r.size;
    let s = 0;
    for (let i = 0; i < o - 1; i++)
      for (let l = 0; l < o - 1; l++) {
        const c = r.get(i, l) + r.get(i, l + 1) + r.get(i + 1, l) + r.get(i + 1, l + 1);
        (c === 4 || c === 0) && s++;
      }
    return s * e.N2;
  }, t.getPenaltyN3 = function(r) {
    const o = r.size;
    let s = 0, i = 0, l = 0;
    for (let c = 0; c < o; c++) {
      i = l = 0;
      for (let f = 0; f < o; f++)
        i = i << 1 & 2047 | r.get(c, f), f >= 10 && (i === 1488 || i === 93) && s++, l = l << 1 & 2047 | r.get(f, c), f >= 10 && (l === 1488 || l === 93) && s++;
    }
    return s * e.N3;
  }, t.getPenaltyN4 = function(r) {
    let o = 0;
    const s = r.data.length;
    for (let i = 0; i < s; i++)
      o += r.data[i];
    return Math.abs(Math.ceil(o * 100 / s / 5) - 10) * e.N4;
  };
  function n(r, o, s) {
    switch (r) {
      case t.Patterns.PATTERN000:
        return (o + s) % 2 === 0;
      case t.Patterns.PATTERN001:
        return o % 2 === 0;
      case t.Patterns.PATTERN010:
        return s % 3 === 0;
      case t.Patterns.PATTERN011:
        return (o + s) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(s / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return o * s % 2 + o * s % 3 === 0;
      case t.Patterns.PATTERN110:
        return (o * s % 2 + o * s % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (o * s % 3 + (o + s) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  t.applyMask = function(r, o) {
    const s = o.size;
    for (let i = 0; i < s; i++)
      for (let l = 0; l < s; l++)
        o.isReserved(l, i) || o.xor(l, i, n(r, l, i));
  }, t.getBestMask = function(r, o) {
    const s = Object.keys(t.Patterns).length;
    let i = 0, l = 1 / 0;
    for (let c = 0; c < s; c++) {
      o(c), t.applyMask(c, r);
      const f = t.getPenaltyN1(r) + t.getPenaltyN2(r) + t.getPenaltyN3(r) + t.getPenaltyN4(r);
      t.applyMask(c, r), f < l && (l = f, i = c);
    }
    return i;
  };
})(ai);
var Vn = {};
const Kt = Wn, mn = [
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
], _n = [
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
Vn.getBlocksCount = function(t, e) {
  switch (e) {
    case Kt.L:
      return mn[(t - 1) * 4 + 0];
    case Kt.M:
      return mn[(t - 1) * 4 + 1];
    case Kt.Q:
      return mn[(t - 1) * 4 + 2];
    case Kt.H:
      return mn[(t - 1) * 4 + 3];
    default:
      return;
  }
};
Vn.getTotalCodewordsCount = function(t, e) {
  switch (e) {
    case Kt.L:
      return _n[(t - 1) * 4 + 0];
    case Kt.M:
      return _n[(t - 1) * 4 + 1];
    case Kt.Q:
      return _n[(t - 1) * 4 + 2];
    case Kt.H:
      return _n[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var di = {}, Jn = {};
const De = new Uint8Array(512), In = new Uint8Array(256);
(function() {
  let t = 1;
  for (let e = 0; e < 255; e++)
    De[e] = t, In[t] = e, t <<= 1, t & 256 && (t ^= 285);
  for (let e = 255; e < 512; e++)
    De[e] = De[e - 255];
})();
Jn.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return In[t];
};
Jn.exp = function(t) {
  return De[t];
};
Jn.mul = function(t, e) {
  return t === 0 || e === 0 ? 0 : De[In[t] + In[e]];
};
(function(t) {
  const e = Jn;
  t.mul = function(n, r) {
    const o = new Uint8Array(n.length + r.length - 1);
    for (let s = 0; s < n.length; s++)
      for (let i = 0; i < r.length; i++)
        o[s + i] ^= e.mul(n[s], r[i]);
    return o;
  }, t.mod = function(n, r) {
    let o = new Uint8Array(n);
    for (; o.length - r.length >= 0; ) {
      const s = o[0];
      for (let l = 0; l < r.length; l++)
        o[l] ^= e.mul(r[l], s);
      let i = 0;
      for (; i < o.length && o[i] === 0; )
        i++;
      o = o.slice(i);
    }
    return o;
  }, t.generateECPolynomial = function(n) {
    let r = new Uint8Array([1]);
    for (let o = 0; o < n; o++)
      r = t.mul(r, new Uint8Array([1, e.exp(o)]));
    return r;
  };
})(di);
const hi = di;
function eo(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
eo.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = hi.generateECPolynomial(this.degree);
};
eo.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const e = new Uint8Array(t.length + this.degree);
  e.set(t);
  const n = hi.mod(e, this.genPoly), r = this.degree - n.length;
  if (r > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(n, r), o;
  }
  return n;
};
var $u = eo, pi = {}, Qt = {}, no = {};
no.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var jt = {};
const gi = "[0-9]+", Du = "[A-Z $%*+\\-./:]+";
let Qe = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Qe = Qe.replace(/u/g, "\\u");
const Hu = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Qe + `)(?:.|[\r
]))+`;
jt.KANJI = new RegExp(Qe, "g");
jt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
jt.BYTE = new RegExp(Hu, "g");
jt.NUMERIC = new RegExp(gi, "g");
jt.ALPHANUMERIC = new RegExp(Du, "g");
const Ku = new RegExp("^" + Qe + "$"), qu = new RegExp("^" + gi + "$"), zu = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
jt.testKanji = function(t) {
  return Ku.test(t);
};
jt.testNumeric = function(t) {
  return qu.test(t);
};
jt.testAlphanumeric = function(t) {
  return zu.test(t);
};
(function(t) {
  const e = no, n = jt;
  t.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function(o, s) {
    if (!o.ccBits)
      throw new Error("Invalid mode: " + o);
    if (!e.isValid(s))
      throw new Error("Invalid version: " + s);
    return s >= 1 && s < 10 ? o.ccBits[0] : s < 27 ? o.ccBits[1] : o.ccBits[2];
  }, t.getBestModeForData = function(o) {
    return n.testNumeric(o) ? t.NUMERIC : n.testAlphanumeric(o) ? t.ALPHANUMERIC : n.testKanji(o) ? t.KANJI : t.BYTE;
  }, t.toString = function(o) {
    if (o && o.id)
      return o.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(o) {
    return o && o.bit && o.ccBits;
  };
  function r(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  t.from = function(o, s) {
    if (t.isValid(o))
      return o;
    try {
      return r(o);
    } catch {
      return s;
    }
  };
})(Qt);
(function(t) {
  const e = _t, n = Vn, r = Wn, o = Qt, s = no, i = 7973, l = e.getBCHDigit(i);
  function c(d, y, T) {
    for (let I = 1; I <= 40; I++)
      if (y <= t.getCapacity(I, T, d))
        return I;
  }
  function f(d, y) {
    return o.getCharCountIndicator(d, y) + 4;
  }
  function h(d, y) {
    let T = 0;
    return d.forEach(function(I) {
      const k = f(I.mode, y);
      T += k + I.getBitsLength();
    }), T;
  }
  function g(d, y) {
    for (let T = 1; T <= 40; T++)
      if (h(d, T) <= t.getCapacity(T, y, o.MIXED))
        return T;
  }
  t.from = function(d, y) {
    return s.isValid(d) ? parseInt(d, 10) : y;
  }, t.getCapacity = function(d, y, T) {
    if (!s.isValid(d))
      throw new Error("Invalid QR Code version");
    typeof T > "u" && (T = o.BYTE);
    const I = e.getSymbolTotalCodewords(d), k = n.getTotalCodewordsCount(d, y), P = (I - k) * 8;
    if (T === o.MIXED)
      return P;
    const O = P - f(T, d);
    switch (T) {
      case o.NUMERIC:
        return Math.floor(O / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(O / 11 * 2);
      case o.KANJI:
        return Math.floor(O / 13);
      case o.BYTE:
      default:
        return Math.floor(O / 8);
    }
  }, t.getBestVersionForData = function(d, y) {
    let T;
    const I = r.from(y, r.M);
    if (Array.isArray(d)) {
      if (d.length > 1)
        return g(d, I);
      if (d.length === 0)
        return 1;
      T = d[0];
    } else
      T = d;
    return c(T.mode, T.getLength(), I);
  }, t.getEncodedBits = function(d) {
    if (!s.isValid(d) || d < 7)
      throw new Error("Invalid QR Code version");
    let y = d << 12;
    for (; e.getBCHDigit(y) - l >= 0; )
      y ^= i << e.getBCHDigit(y) - l;
    return d << 12 | y;
  };
})(pi);
var mi = {};
const Ir = _t, _i = 1335, Wu = 21522, Xo = Ir.getBCHDigit(_i);
mi.getEncodedBits = function(t, e) {
  const n = t.bit << 3 | e;
  let r = n << 10;
  for (; Ir.getBCHDigit(r) - Xo >= 0; )
    r ^= _i << Ir.getBCHDigit(r) - Xo;
  return (n << 10 | r) ^ Wu;
};
var yi = {};
const Vu = Qt;
function be(t) {
  this.mode = Vu.NUMERIC, this.data = t.toString();
}
be.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
be.prototype.getLength = function() {
  return this.data.length;
};
be.prototype.getBitsLength = function() {
  return be.getBitsLength(this.data.length);
};
be.prototype.write = function(t) {
  let e, n, r;
  for (e = 0; e + 3 <= this.data.length; e += 3)
    n = this.data.substr(e, 3), r = parseInt(n, 10), t.put(r, 10);
  const o = this.data.length - e;
  o > 0 && (n = this.data.substr(e), r = parseInt(n, 10), t.put(r, o * 3 + 1));
};
var Ju = be;
const Yu = Qt, cr = [
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
function ve(t) {
  this.mode = Yu.ALPHANUMERIC, this.data = t;
}
ve.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
ve.prototype.getLength = function() {
  return this.data.length;
};
ve.prototype.getBitsLength = function() {
  return ve.getBitsLength(this.data.length);
};
ve.prototype.write = function(t) {
  let e;
  for (e = 0; e + 2 <= this.data.length; e += 2) {
    let n = cr.indexOf(this.data[e]) * 45;
    n += cr.indexOf(this.data[e + 1]), t.put(n, 11);
  }
  this.data.length % 2 && t.put(cr.indexOf(this.data[e]), 6);
};
var Qu = ve, Xu = function(t) {
  for (var e = [], n = t.length, r = 0; r < n; r++) {
    var o = t.charCodeAt(r);
    if (o >= 55296 && o <= 56319 && n > r + 1) {
      var s = t.charCodeAt(r + 1);
      s >= 56320 && s <= 57343 && (o = (o - 55296) * 1024 + s - 56320 + 65536, r += 1);
    }
    if (o < 128) {
      e.push(o);
      continue;
    }
    if (o < 2048) {
      e.push(o >> 6 | 192), e.push(o & 63 | 128);
      continue;
    }
    if (o < 55296 || o >= 57344 && o < 65536) {
      e.push(o >> 12 | 224), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
      continue;
    }
    if (o >= 65536 && o <= 1114111) {
      e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
      continue;
    }
    e.push(239, 191, 189);
  }
  return new Uint8Array(e).buffer;
};
const Zu = Xu, Gu = Qt;
function we(t) {
  this.mode = Gu.BYTE, typeof t == "string" && (t = Zu(t)), this.data = new Uint8Array(t);
}
we.getBitsLength = function(t) {
  return t * 8;
};
we.prototype.getLength = function() {
  return this.data.length;
};
we.prototype.getBitsLength = function() {
  return we.getBitsLength(this.data.length);
};
we.prototype.write = function(t) {
  for (let e = 0, n = this.data.length; e < n; e++)
    t.put(this.data[e], 8);
};
var tf = we;
const ef = Qt, nf = _t;
function Ee(t) {
  this.mode = ef.KANJI, this.data = t;
}
Ee.getBitsLength = function(t) {
  return t * 13;
};
Ee.prototype.getLength = function() {
  return this.data.length;
};
Ee.prototype.getBitsLength = function() {
  return Ee.getBitsLength(this.data.length);
};
Ee.prototype.write = function(t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let n = nf.toSJIS(this.data[e]);
    if (n >= 33088 && n <= 40956)
      n -= 33088;
    else if (n >= 57408 && n <= 60351)
      n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    n = (n >>> 8 & 255) * 192 + (n & 255), t.put(n, 13);
  }
};
var rf = Ee, Mr = {}, of = {
  get exports() {
    return Mr;
  },
  set exports(t) {
    Mr = t;
  }
};
(function(t) {
  var e = {
    single_source_shortest_paths: function(n, r, o) {
      var s = {}, i = {};
      i[r] = 0;
      var l = e.PriorityQueue.make();
      l.push(r, 0);
      for (var c, f, h, g, d, y, T, I, k; !l.empty(); ) {
        c = l.pop(), f = c.value, g = c.cost, d = n[f] || {};
        for (h in d)
          d.hasOwnProperty(h) && (y = d[h], T = g + y, I = i[h], k = typeof i[h] > "u", (k || I > T) && (i[h] = T, l.push(h, T), s[h] = f));
      }
      if (typeof o < "u" && typeof i[o] > "u") {
        var P = ["Could not find a path from ", r, " to ", o, "."].join("");
        throw new Error(P);
      }
      return s;
    },
    extract_shortest_path_from_predecessor_list: function(n, r) {
      for (var o = [], s = r; s; )
        o.push(s), n[s], s = n[s];
      return o.reverse(), o;
    },
    find_path: function(n, r, o) {
      var s = e.single_source_shortest_paths(n, r, o);
      return e.extract_shortest_path_from_predecessor_list(
        s,
        o
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(n) {
        var r = e.PriorityQueue, o = {}, s;
        n = n || {};
        for (s in r)
          r.hasOwnProperty(s) && (o[s] = r[s]);
        return o.queue = [], o.sorter = n.sorter || r.default_sorter, o;
      },
      default_sorter: function(n, r) {
        return n.cost - r.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(n, r) {
        var o = { value: n, cost: r };
        this.queue.push(o), this.queue.sort(this.sorter);
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
  t.exports = e;
})(of);
(function(t) {
  const e = Qt, n = Ju, r = Qu, o = tf, s = rf, i = jt, l = _t, c = Mr;
  function f(P) {
    return unescape(encodeURIComponent(P)).length;
  }
  function h(P, O, M) {
    const v = [];
    let C;
    for (; (C = P.exec(M)) !== null; )
      v.push({
        data: C[0],
        index: C.index,
        mode: O,
        length: C[0].length
      });
    return v;
  }
  function g(P) {
    const O = h(i.NUMERIC, e.NUMERIC, P), M = h(i.ALPHANUMERIC, e.ALPHANUMERIC, P);
    let v, C;
    return l.isKanjiModeEnabled() ? (v = h(i.BYTE, e.BYTE, P), C = h(i.KANJI, e.KANJI, P)) : (v = h(i.BYTE_KANJI, e.BYTE, P), C = []), O.concat(M, v, C).sort(function(F, L) {
      return F.index - L.index;
    }).map(function(F) {
      return {
        data: F.data,
        mode: F.mode,
        length: F.length
      };
    });
  }
  function d(P, O) {
    switch (O) {
      case e.NUMERIC:
        return n.getBitsLength(P);
      case e.ALPHANUMERIC:
        return r.getBitsLength(P);
      case e.KANJI:
        return s.getBitsLength(P);
      case e.BYTE:
        return o.getBitsLength(P);
    }
  }
  function y(P) {
    return P.reduce(function(O, M) {
      const v = O.length - 1 >= 0 ? O[O.length - 1] : null;
      return v && v.mode === M.mode ? (O[O.length - 1].data += M.data, O) : (O.push(M), O);
    }, []);
  }
  function T(P) {
    const O = [];
    for (let M = 0; M < P.length; M++) {
      const v = P[M];
      switch (v.mode) {
        case e.NUMERIC:
          O.push([
            v,
            { data: v.data, mode: e.ALPHANUMERIC, length: v.length },
            { data: v.data, mode: e.BYTE, length: v.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          O.push([
            v,
            { data: v.data, mode: e.BYTE, length: v.length }
          ]);
          break;
        case e.KANJI:
          O.push([
            v,
            { data: v.data, mode: e.BYTE, length: f(v.data) }
          ]);
          break;
        case e.BYTE:
          O.push([
            { data: v.data, mode: e.BYTE, length: f(v.data) }
          ]);
      }
    }
    return O;
  }
  function I(P, O) {
    const M = {}, v = { start: {} };
    let C = ["start"];
    for (let F = 0; F < P.length; F++) {
      const L = P[F], Q = [];
      for (let bt = 0; bt < L.length; bt++) {
        const z = L[bt], ft = "" + F + bt;
        Q.push(ft), M[ft] = { node: z, lastCount: 0 }, v[ft] = {};
        for (let vt = 0; vt < C.length; vt++) {
          const et = C[vt];
          M[et] && M[et].node.mode === z.mode ? (v[et][ft] = d(M[et].lastCount + z.length, z.mode) - d(M[et].lastCount, z.mode), M[et].lastCount += z.length) : (M[et] && (M[et].lastCount = z.length), v[et][ft] = d(z.length, z.mode) + 4 + e.getCharCountIndicator(z.mode, O));
        }
      }
      C = Q;
    }
    for (let F = 0; F < C.length; F++)
      v[C[F]].end = 0;
    return { map: v, table: M };
  }
  function k(P, O) {
    let M;
    const v = e.getBestModeForData(P);
    if (M = e.from(O, v), M !== e.BYTE && M.bit < v.bit)
      throw new Error('"' + P + '" cannot be encoded with mode ' + e.toString(M) + `.
 Suggested mode is: ` + e.toString(v));
    switch (M === e.KANJI && !l.isKanjiModeEnabled() && (M = e.BYTE), M) {
      case e.NUMERIC:
        return new n(P);
      case e.ALPHANUMERIC:
        return new r(P);
      case e.KANJI:
        return new s(P);
      case e.BYTE:
        return new o(P);
    }
  }
  t.fromArray = function(P) {
    return P.reduce(function(O, M) {
      return typeof M == "string" ? O.push(k(M, null)) : M.data && O.push(k(M.data, M.mode)), O;
    }, []);
  }, t.fromString = function(P, O) {
    const M = g(P, l.isKanjiModeEnabled()), v = T(M), C = I(v, O), F = c.find_path(C.map, "start", "end"), L = [];
    for (let Q = 1; Q < F.length - 1; Q++)
      L.push(C.table[F[Q]].node);
    return t.fromArray(y(L));
  }, t.rawSplit = function(P) {
    return t.fromArray(
      g(P, l.isKanjiModeEnabled())
    );
  };
})(yi);
const Yn = _t, ur = Wn, sf = Lu, lf = Uu, cf = ui, uf = fi, Sr = ai, Or = Vn, ff = $u, Mn = pi, af = mi, df = Qt, fr = yi;
function hf(t, e) {
  const n = t.size, r = uf.getPositions(e);
  for (let o = 0; o < r.length; o++) {
    const s = r[o][0], i = r[o][1];
    for (let l = -1; l <= 7; l++)
      if (!(s + l <= -1 || n <= s + l))
        for (let c = -1; c <= 7; c++)
          i + c <= -1 || n <= i + c || (l >= 0 && l <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && c >= 2 && c <= 4 ? t.set(s + l, i + c, !0, !0) : t.set(s + l, i + c, !1, !0));
  }
}
function pf(t) {
  const e = t.size;
  for (let n = 8; n < e - 8; n++) {
    const r = n % 2 === 0;
    t.set(n, 6, r, !0), t.set(6, n, r, !0);
  }
}
function gf(t, e) {
  const n = cf.getPositions(e);
  for (let r = 0; r < n.length; r++) {
    const o = n[r][0], s = n[r][1];
    for (let i = -2; i <= 2; i++)
      for (let l = -2; l <= 2; l++)
        i === -2 || i === 2 || l === -2 || l === 2 || i === 0 && l === 0 ? t.set(o + i, s + l, !0, !0) : t.set(o + i, s + l, !1, !0);
  }
}
function mf(t, e) {
  const n = t.size, r = Mn.getEncodedBits(e);
  let o, s, i;
  for (let l = 0; l < 18; l++)
    o = Math.floor(l / 3), s = l % 3 + n - 8 - 3, i = (r >> l & 1) === 1, t.set(o, s, i, !0), t.set(s, o, i, !0);
}
function ar(t, e, n) {
  const r = t.size, o = af.getEncodedBits(e, n);
  let s, i;
  for (s = 0; s < 15; s++)
    i = (o >> s & 1) === 1, s < 6 ? t.set(s, 8, i, !0) : s < 8 ? t.set(s + 1, 8, i, !0) : t.set(r - 15 + s, 8, i, !0), s < 8 ? t.set(8, r - s - 1, i, !0) : s < 9 ? t.set(8, 15 - s - 1 + 1, i, !0) : t.set(8, 15 - s - 1, i, !0);
  t.set(r - 8, 8, 1, !0);
}
function _f(t, e) {
  const n = t.size;
  let r = -1, o = n - 1, s = 7, i = 0;
  for (let l = n - 1; l > 0; l -= 2)
    for (l === 6 && l--; ; ) {
      for (let c = 0; c < 2; c++)
        if (!t.isReserved(o, l - c)) {
          let f = !1;
          i < e.length && (f = (e[i] >>> s & 1) === 1), t.set(o, l - c, f), s--, s === -1 && (i++, s = 7);
        }
      if (o += r, o < 0 || n <= o) {
        o -= r, r = -r;
        break;
      }
    }
}
function yf(t, e, n) {
  const r = new sf();
  n.forEach(function(c) {
    r.put(c.mode.bit, 4), r.put(c.getLength(), df.getCharCountIndicator(c.mode, t)), c.write(r);
  });
  const o = Yn.getSymbolTotalCodewords(t), s = Or.getTotalCodewordsCount(t, e), i = (o - s) * 8;
  for (r.getLengthInBits() + 4 <= i && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const l = (i - r.getLengthInBits()) / 8;
  for (let c = 0; c < l; c++)
    r.put(c % 2 ? 17 : 236, 8);
  return bf(r, t, e);
}
function bf(t, e, n) {
  const r = Yn.getSymbolTotalCodewords(e), o = Or.getTotalCodewordsCount(e, n), s = r - o, i = Or.getBlocksCount(e, n), l = r % i, c = i - l, f = Math.floor(r / i), h = Math.floor(s / i), g = h + 1, d = f - h, y = new ff(d);
  let T = 0;
  const I = new Array(i), k = new Array(i);
  let P = 0;
  const O = new Uint8Array(t.buffer);
  for (let L = 0; L < i; L++) {
    const Q = L < c ? h : g;
    I[L] = O.slice(T, T + Q), k[L] = y.encode(I[L]), T += Q, P = Math.max(P, Q);
  }
  const M = new Uint8Array(r);
  let v = 0, C, F;
  for (C = 0; C < P; C++)
    for (F = 0; F < i; F++)
      C < I[F].length && (M[v++] = I[F][C]);
  for (C = 0; C < d; C++)
    for (F = 0; F < i; F++)
      M[v++] = k[F][C];
  return M;
}
function vf(t, e, n, r) {
  let o;
  if (Array.isArray(t))
    o = fr.fromArray(t);
  else if (typeof t == "string") {
    let f = e;
    if (!f) {
      const h = fr.rawSplit(t);
      f = Mn.getBestVersionForData(h, n);
    }
    o = fr.fromString(t, f || 40);
  } else
    throw new Error("Invalid data");
  const s = Mn.getBestVersionForData(o, n);
  if (!s)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = s;
  else if (e < s)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`
    );
  const i = yf(e, n, o), l = Yn.getSymbolSize(e), c = new lf(l);
  return hf(c, e), pf(c), gf(c, e), ar(c, n, 0), e >= 7 && mf(c, e), _f(c, i), isNaN(r) && (r = Sr.getBestMask(
    c,
    ar.bind(null, c, n)
  )), Sr.applyMask(r, c), ar(c, n, r), {
    modules: c,
    version: e,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: o
  };
}
li.create = function(t, e) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let n = ur.M, r, o;
  return typeof e < "u" && (n = ur.from(e.errorCorrectionLevel, ur.M), r = Mn.from(e.version), o = Sr.from(e.maskPattern), e.toSJISFunc && Yn.setToSJISFunction(e.toSJISFunc)), vf(t, r, n, o);
};
var bi = {}, ro = {};
(function(t) {
  function e(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(s) {
      return [s, s];
    }))), r.length === 6 && r.push("F", "F");
    const o = parseInt(r.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + r.slice(0, 6).join("")
    };
  }
  t.getOptions = function(n) {
    n || (n = {}), n.color || (n.color = {});
    const r = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, o = n.width && n.width >= 21 ? n.width : void 0, s = n.scale || 4;
    return {
      width: o,
      scale: o ? 4 : s,
      margin: r,
      color: {
        dark: e(n.color.dark || "#000000ff"),
        light: e(n.color.light || "#ffffffff")
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {}
    };
  }, t.getScale = function(n, r) {
    return r.width && r.width >= n + r.margin * 2 ? r.width / (n + r.margin * 2) : r.scale;
  }, t.getImageWidth = function(n, r) {
    const o = t.getScale(n, r);
    return Math.floor((n + r.margin * 2) * o);
  }, t.qrToImageData = function(n, r, o) {
    const s = r.modules.size, i = r.modules.data, l = t.getScale(s, o), c = Math.floor((s + o.margin * 2) * l), f = o.margin * l, h = [o.color.light, o.color.dark];
    for (let g = 0; g < c; g++)
      for (let d = 0; d < c; d++) {
        let y = (g * c + d) * 4, T = o.color.light;
        if (g >= f && d >= f && g < c - f && d < c - f) {
          const I = Math.floor((g - f) / l), k = Math.floor((d - f) / l);
          T = h[i[I * s + k] ? 1 : 0];
        }
        n[y++] = T.r, n[y++] = T.g, n[y++] = T.b, n[y] = T.a;
      }
  };
})(ro);
(function(t) {
  const e = ro;
  function n(o, s, i) {
    o.clearRect(0, 0, s.width, s.height), s.style || (s.style = {}), s.height = i, s.width = i, s.style.height = i + "px", s.style.width = i + "px";
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(o, s, i) {
    let l = i, c = s;
    typeof l > "u" && (!s || !s.getContext) && (l = s, s = void 0), s || (c = r()), l = e.getOptions(l);
    const f = e.getImageWidth(o.modules.size, l), h = c.getContext("2d"), g = h.createImageData(f, f);
    return e.qrToImageData(g.data, o, l), n(h, c, f), h.putImageData(g, 0, 0), c;
  }, t.renderToDataURL = function(o, s, i) {
    let l = i;
    typeof l > "u" && (!s || !s.getContext) && (l = s, s = void 0), l || (l = {});
    const c = t.render(o, s, l), f = l.type || "image/png", h = l.rendererOpts || {};
    return c.toDataURL(f, h.quality);
  };
})(bi);
var vi = {};
const wf = ro;
function Zo(t, e) {
  const n = t.a / 255, r = e + '="' + t.hex + '"';
  return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function dr(t, e, n) {
  let r = t + e;
  return typeof n < "u" && (r += " " + n), r;
}
function Ef(t, e, n) {
  let r = "", o = 0, s = !1, i = 0;
  for (let l = 0; l < t.length; l++) {
    const c = Math.floor(l % e), f = Math.floor(l / e);
    !c && !s && (s = !0), t[l] ? (i++, l > 0 && c > 0 && t[l - 1] || (r += s ? dr("M", c + n, 0.5 + f + n) : dr("m", o, 0), o = 0, s = !1), c + 1 < e && t[l + 1] || (r += dr("h", i), i = 0)) : o++;
  }
  return r;
}
vi.render = function(t, e, n) {
  const r = wf.getOptions(e), o = t.modules.size, s = t.modules.data, i = o + r.margin * 2, l = r.color.light.a ? "<path " + Zo(r.color.light, "fill") + ' d="M0 0h' + i + "v" + i + 'H0z"/>' : "", c = "<path " + Zo(r.color.dark, "stroke") + ' d="' + Ef(s, o, r.margin) + '"/>', f = 'viewBox="0 0 ' + i + " " + i + '"', h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + f + ' shape-rendering="crispEdges">' + l + c + `</svg>
`;
  return typeof n == "function" && n(null, h), h;
};
const xf = ju, Rr = li, wi = bi, Cf = vi;
function oo(t, e, n, r, o) {
  const s = [].slice.call(arguments, 1), i = s.length, l = typeof s[i - 1] == "function";
  if (!l && !xf())
    throw new Error("Callback required as last argument");
  if (l) {
    if (i < 2)
      throw new Error("Too few arguments provided");
    i === 2 ? (o = n, n = e, e = r = void 0) : i === 3 && (e.getContext && typeof o > "u" ? (o = r, r = void 0) : (o = r, r = n, n = e, e = void 0));
  } else {
    if (i < 1)
      throw new Error("Too few arguments provided");
    return i === 1 ? (n = e, e = r = void 0) : i === 2 && !e.getContext && (r = n, n = e, e = void 0), new Promise(function(c, f) {
      try {
        const h = Rr.create(n, r);
        c(t(h, e, r));
      } catch (h) {
        f(h);
      }
    });
  }
  try {
    const c = Rr.create(n, r);
    o(null, t(c, e, r));
  } catch (c) {
    o(c);
  }
}
Rr.create;
oo.bind(null, wi.render);
oo.bind(null, wi.renderToDataURL);
oo.bind(null, function(t, e, n) {
  return Cf.render(t, n);
});
Pe({
  installed: !1,
  instances: []
});
function Af(t) {
  return ls() ? (Yi(t), !0) : !1;
}
function Ei(t) {
  return typeof t == "function" ? t() : X(t);
}
const Tf = typeof window < "u", Pf = () => {
};
function If(t) {
  var e;
  const n = Ei(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Mf = Tf ? window : void 0;
function Sf(...t) {
  let e, n, r, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, o] = t, e = Mf) : [e, n, r, o] = t, !e)
    return Pf;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], i = () => {
    s.forEach((h) => h()), s.length = 0;
  }, l = (h, g, d, y) => (h.addEventListener(g, d, y), () => h.removeEventListener(g, d, y)), c = Le(
    () => [If(e), Ei(o)],
    ([h, g]) => {
      i(), h && s.push(
        ...n.flatMap((d) => r.map((y) => l(h, d, y, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    c(), i();
  };
  return Af(f), f;
}
const Xe = (t, e) => window.addEventListener("keydown", si(t, e)), Sn = (t, e) => {
  Sf("keydown", si(t, e));
}, Of = {
  test: /agdm\.tv/,
  fn() {
    Oi(() => {
      window.requestAnimationFrame = () => {
      };
    }), Sn("right", () => {
      var n, r;
      const t = document.querySelector(
        ".tab-pane.active > ul > li > a.btn-warm"
      ), e = (n = t == null ? void 0 : t.parentElement) == null ? void 0 : n.nextElementSibling;
      (r = e == null ? void 0 : e.querySelector("a")) == null || r.click();
    }), Sn("left", () => {
      var n, r;
      const t = document.querySelector(
        ".tab-pane.active > ul > li > a.btn-warm"
      ), e = (n = t == null ? void 0 : t.parentElement) == null ? void 0 : n.previousElementSibling;
      (r = e == null ? void 0 : e.querySelector("a")) == null || r.click();
    });
  }
}, Rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Of
}, Symbol.toStringTag, { value: "Module" }));
var Nf = (t) => Array.isArray(t) ? t : [t];
function Bf() {
  let t, e, n = "pending";
  const r = new Promise((o, s) => {
    t = (i) => {
      n === "pending" && (n = "fulfilled", o(i));
    }, e = (i) => {
      n === "pending" && (n = "rejected", s(i));
    };
  });
  return {
    get status() {
      return n;
    },
    get isPending() {
      return n === "pending";
    },
    get isFulfilled() {
      return n === "fulfilled";
    },
    get isRejected() {
      return n === "rejected";
    },
    instance: r,
    resolve: t,
    reject: e
  };
}
var so = (t = 0) => {
  let e;
  const n = Bf(), r = n.instance;
  return r.cancel = () => {
    clearTimeout(e), n.reject("canceled");
  }, e = setTimeout(n.resolve, t), r;
};
function xi(t) {
  let e = !0;
  const n = (s) => (...i) => o(s, i);
  return {
    get isEnabled() {
      return e;
    },
    enable() {
      e = !0;
    },
    disable() {
      e = !1;
    },
    log: n("info"),
    warn: n("warn"),
    error: n("error")
  };
  function r(s) {
    if (t !== void 0)
      return typeof t == "string" ? t : t(s);
  }
  function o(s, i) {
    if (!e)
      return;
    const l = r(s);
    l === void 0 ? console[s](...i) : console[s](l, ...i);
  }
}
var yt, Ht, Ge, ge, tn, Nr, rs, jf = (rs = class {
  /**
   *
   * @param capacity default is 0, means unlimited.
   * @param opt
   */
  constructor(t = 0, e = {}) {
    fe(this, tn);
    fe(this, yt, void 0);
    fe(this, Ht, void 0);
    fe(this, Ge, void 0);
    fe(this, ge, /* @__PURE__ */ new Set());
    Oe(this, Ht, t), Oe(this, yt, {}), e.verbose && Oe(this, Ge, xi());
  }
  /**
   * Limit count of listeners for every event.
   */
  get capacity() {
    return it(this, Ht);
  }
  events(t) {
    return t ? (it(this, yt)[t] || (it(this, yt)[t] = /* @__PURE__ */ new Set()), it(this, yt)[t]) : it(this, yt);
  }
  /**
   * Add a callback to the specified event.
   * @param event Event type
   * @param listener Callback
   * @returns Remove the callback.
   */
  on(t, e) {
    const n = this.events(t);
    return tr(this, tn, Nr).call(this, n.size), n.add(e), () => this.off(t, e);
  }
  /**
   * Add a callback to the specified event, only execute once.
   *
   * @param event Event type
   * @param listener Callback
   * @returns Remove the callback.
   */
  once(t, e) {
    const n = this.events(t);
    return tr(this, tn, Nr).call(this, n.size), n.add(e), it(this, ge).add(e), () => this.off(t, e);
  }
  off(t, e) {
    if (!t) {
      const r = Object.values(it(this, yt));
      return Oe(this, yt, {}), r.length > 0;
    }
    if (!e) {
      const r = it(this, yt)[t];
      return r && delete it(this, yt)[t], ((r == null ? void 0 : r.size) || 0) > 0;
    }
    return this.events(t).delete(e);
  }
  /**
   * Trigger the event by event type.
   *
   * @param event Event type
   * @param args Arguments that apply to the callback.
   */
  emit(t, ...e) {
    const n = this.events(t), r = [];
    n.forEach((o) => {
      var s;
      try {
        o(...e);
      } catch (i) {
        (s = it(this, Ge)) == null || s.warn("Invoke function error:", i);
      }
      it(this, ge).has(o) && (it(this, ge).delete(o), r.push(o));
    }), r.forEach((o) => {
      n.delete(o);
    });
  }
}, yt = new WeakMap(), Ht = new WeakMap(), Ge = new WeakMap(), ge = new WeakMap(), tn = new WeakSet(), Nr = function(t) {
  if (it(this, Ht) && t >= it(this, Ht))
    throw new Error("Listeners reached limit size: " + it(this, Ht));
}, rs);
const On = xi("x"), Ff = async (t) => {
  await so(1), t();
};
function on() {
  return unsafeWindow.top !== unsafeWindow;
}
async function sn(t, e = 500) {
  return new Promise((n) => {
    const r = setInterval(() => {
      t() && (clearInterval(r), n());
    }, e);
  });
}
const Lf = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
}, Uf = /* @__PURE__ */ D("path", {
  fill: "currentColor",
  d: "M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.21 107.21 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.71 107.71 0 0 0-26.25-10.87a8 8 0 0 0-7.06 1.49L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.71 107.71 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.21 107.21 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.71 107.71 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.21 107.21 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.71 107.71 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06Zm-16.1-6.5a73.93 73.93 0 0 1 0 8.68a8 8 0 0 0 1.74 5.48l14.19 17.73a91.57 91.57 0 0 1-6.23 15l-22.6 2.56a8 8 0 0 0-5.1 2.64a74.11 74.11 0 0 1-6.14 6.14a8 8 0 0 0-2.64 5.1l-2.51 22.58a91.32 91.32 0 0 1-15 6.23l-17.74-14.19a8 8 0 0 0-5-1.75h-.48a73.93 73.93 0 0 1-8.68 0a8 8 0 0 0-5.48 1.74l-17.78 14.2a91.57 91.57 0 0 1-15-6.23L82.89 187a8 8 0 0 0-2.64-5.1a74.11 74.11 0 0 1-6.14-6.14a8 8 0 0 0-5.1-2.64l-22.58-2.52a91.32 91.32 0 0 1-6.23-15l14.19-17.74a8 8 0 0 0 1.74-5.48a73.93 73.93 0 0 1 0-8.68a8 8 0 0 0-1.74-5.48L40.2 100.45a91.57 91.57 0 0 1 6.23-15L69 82.89a8 8 0 0 0 5.1-2.64a74.11 74.11 0 0 1 6.14-6.14A8 8 0 0 0 82.89 69l2.51-22.57a91.32 91.32 0 0 1 15-6.23l17.74 14.19a8 8 0 0 0 5.48 1.74a73.93 73.93 0 0 1 8.68 0a8 8 0 0 0 5.48-1.74l17.77-14.19a91.57 91.57 0 0 1 15 6.23L173.11 69a8 8 0 0 0 2.64 5.1a74.11 74.11 0 0 1 6.14 6.14a8 8 0 0 0 5.1 2.64l22.58 2.51a91.32 91.32 0 0 1 6.23 15l-14.19 17.74a8 8 0 0 0-1.74 5.53Z"
}, null, -1), kf = [
  Uf
];
function $f(t, e) {
  return ct(), Yt("svg", Lf, kf);
}
const Df = { name: "ph-gear", render: $f }, Hf = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
}, Kf = /* @__PURE__ */ D("path", {
  fill: "currentColor",
  d: "M216 130.16q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.6 107.6 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.29 107.29 0 0 0-26.25-10.86a8 8 0 0 0-7.06 1.48L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.71 107.71 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.6 107.6 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.71 107.71 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.21 107.21 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.71 107.71 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06ZM128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"
}, null, -1), qf = [
  Kf
];
function zf(t, e) {
  return ct(), Yt("svg", Hf, qf);
}
const Wf = { name: "ph-gear-fill", render: zf }, Br = "__x_user_script__", Vf = (t) => Jf(
  () => {
    const e = localStorage.getItem(Br);
    return e ? JSON.parse(e) : t;
  },
  (e) => {
    localStorage.setItem(Br, JSON.stringify(e));
  }
), Go = () => localStorage.removeItem(Br);
function Jf(t, e) {
  const n = Pe(t());
  return Le(
    () => [n],
    () => {
      e(q(n));
    },
    {
      deep: !0,
      flush: "post"
    }
  ), [n];
}
const Yf = (t) => (Ms("data-v-986e50e0"), t = t(), Ss(), t), Qf = { class: "setting-content" }, Xf = { class: "content-wrapper" }, Zf = { key: 0 }, Gf = /* @__PURE__ */ Yf(() => /* @__PURE__ */ D("br", null, null, -1)), ta = /* @__PURE__ */ ie({
  __name: "App",
  setup(t) {
    const e = Pe({
      isActive: He()
    });
    function n() {
      e.isActive = !e.isActive;
    }
    return Sn("meta + .", n), (r, o) => {
      const s = Wf, i = Df;
      return ct(), Yt("div", {
        class: nn(["root", { active: e.isActive }])
      }, [
        D("div", Qf, [
          D("div", {
            class: "setting-icon",
            onClick: n
          }, [
            e.isActive ? (ct(), Wt(s, {
              key: 0,
              class: "gear"
            })) : (ct(), Wt(i, {
              key: 1,
              class: "gear"
            }))
          ]),
          D("div", Xf, [
            X(He)() ? (ct(), Yt("div", Zf, [
              D("div", null, [
                D("button", {
                  onClick: o[0] || (o[0] = //@ts-ignore
                  (...l) => X(Go) && X(Go)(...l))
                }, "删除配置")
              ]),
              Gf
            ])) : Tc("", !0),
            (ct(), Wt(ec("setting-content")))
          ])
        ])
      ], 2);
    };
  }
});
const io = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, ea = /* @__PURE__ */ io(ta, [["__scopeId", "data-v-986e50e0"]]), ln = (t) => {
  if (on())
    return;
  const e = document.createElement("div");
  document.body.append(e), lu(ea).component("setting-content", t).mount(e);
}, Ci = "__0x_user_script__", Ai = new jf();
unsafeWindow.addEventListener(
  "message",
  ({ data: t }) => {
    na(t) && (On.log(`[${location.hostname}:${on()}] receive:`, t), Ai.emit(t.type, ...t.data));
  },
  !1
);
const xe = (t, e) => {
  Ai.on(t, e);
}, Qn = (t, e) => (n, ...r) => {
  const o = {
    protocol: Ci,
    type: n,
    data: r
  };
  On.log(`[${location.hostname}:${on()}] send:`, o), t.postMessage(o, e);
};
function na(t) {
  try {
    return t.protocol === Ci;
  } catch {
    return !1;
  }
}
const cn = (t) => (Ms("data-v-caaf177b"), t = t(), Ss(), t), ra = { class: "conf-line" }, oa = /* @__PURE__ */ cn(() => /* @__PURE__ */ D("span", null, " 自动播放 ", -1)), sa = { class: "conf-line" }, ia = /* @__PURE__ */ cn(() => /* @__PURE__ */ D("span", null, " 自动全屏 ", -1)), la = { class: "conf-group" }, ca = { class: "conf-line" }, ua = /* @__PURE__ */ cn(() => /* @__PURE__ */ D("span", null, " 跳过片头/片尾 ", -1)), fa = { class: "conf-line" }, aa = /* @__PURE__ */ cn(() => /* @__PURE__ */ D("span", null, " 片头： ", -1)), da = { class: "conf-line" }, ha = /* @__PURE__ */ cn(() => /* @__PURE__ */ D("span", null, " 片尾： ", -1)), pa = /* @__PURE__ */ ie({
  __name: "VideoHelper",
  emits: ["init", "fullscreen"],
  setup(t, { emit: e }) {
    const [n] = Vf({
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
    return js(() => {
      e("init", n);
    }), (r, o) => (ct(), Yt("div", null, [
      D("div", ra, [
        D("label", null, [
          Re(D("input", {
            type: "checkbox",
            "onUpdate:modelValue": o[0] || (o[0] = (s) => X(n).autoPlay = s)
          }, null, 512), [
            [lr, X(n).autoPlay]
          ]),
          oa
        ])
      ]),
      D("div", sa, [
        D("label", null, [
          Re(D("input", {
            type: "checkbox",
            "onUpdate:modelValue": o[1] || (o[1] = (s) => X(n).autoFullScreen = s)
          }, null, 512), [
            [lr, X(n).autoFullScreen]
          ]),
          ia
        ]),
        D("button", {
          onClick: o[2] || (o[2] = (s) => e("fullscreen"))
        }, "伪全屏")
      ]),
      D("div", la, [
        D("div", ca, [
          D("label", null, [
            Re(D("input", {
              type: "checkbox",
              "onUpdate:modelValue": o[3] || (o[3] = (s) => X(n).skip.enable = s)
            }, null, 512), [
              [lr, X(n).skip.enable]
            ]),
            ua
          ])
        ]),
        D("div", fa, [
          D("label", null, [
            aa,
            Re(D("input", {
              type: "number",
              "onUpdate:modelValue": o[4] || (o[4] = (s) => X(n).skip.beforeSkipTs = s)
            }, null, 512), [
              [
                Wo,
                X(n).skip.beforeSkipTs,
                void 0,
                { number: !0 }
              ]
            ])
          ])
        ]),
        D("div", da, [
          D("label", null, [
            ha,
            Re(D("input", {
              type: "number",
              "onUpdate:modelValue": o[5] || (o[5] = (s) => X(n).skip.afterSkipTs = s)
            }, null, 512), [
              [
                Wo,
                X(n).skip.afterSkipTs,
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
const ga = /* @__PURE__ */ io(pa, [["__scopeId", "data-v-caaf177b"]]);
function lo(t, e, n, r) {
  const o = async () => {
    const i = t.paused && t.currentTime < 1;
    e.autoFullScreen && (r == null || r()), i && (await t.play(), await so(500), await o());
  }, s = () => {
    if (t.currentTime < 1) {
      o();
      return;
    }
  };
  s(), t.addEventListener("load", s), t.addEventListener("timeupdate", () => {
    const i = t.duration - t.currentTime;
    if (e.autoPlay && i < 1) {
      n();
      return;
    }
    e.skip.enable && (t.currentTime < e.skip.beforeSkipTs && (t.currentTime = e.skip.beforeSkipTs), i < e.skip.afterSkipTs && n());
  });
}
const Rn = "data-x-backup";
let Ze = null;
function ts() {
  return Ze;
}
function es(t) {
  Ze || (t.setAttribute(Rn, t.getAttribute("style") || ""), t.style.top = "0", t.style.left = "0", t.style.position = "fixed", t.style.zIndex = "999999", t.style.width = "100vw", t.style.height = "100vh", document.body.setAttribute(Rn, document.body.style.overflow), document.body.style.overflow = "hidden", Ze = t);
}
function ma(t = Ze) {
  t && (t.setAttribute("style", t.getAttribute(Rn) || ""), document.body.style.overflow = document.body.getAttribute(Rn) || "", Ze = null);
}
const co = ga;
function _a(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ti = { exports: {} };
(function(t) {
  var e = function() {
    function n(d, y) {
      return y != null && d instanceof y;
    }
    var r;
    try {
      r = Map;
    } catch {
      r = function() {
      };
    }
    var o;
    try {
      o = Set;
    } catch {
      o = function() {
      };
    }
    var s;
    try {
      s = Promise;
    } catch {
      s = function() {
      };
    }
    function i(d, y, T, I, k) {
      typeof y == "object" && (T = y.depth, I = y.prototype, k = y.includeNonEnumerable, y = y.circular);
      var P = [], O = [], M = typeof Buffer < "u";
      typeof y > "u" && (y = !0), typeof T > "u" && (T = 1 / 0);
      function v(C, F) {
        if (C === null)
          return null;
        if (F === 0)
          return C;
        var L, Q;
        if (typeof C != "object")
          return C;
        if (n(C, r))
          L = new r();
        else if (n(C, o))
          L = new o();
        else if (n(C, s))
          L = new s(function(W, K) {
            C.then(function(pt) {
              W(v(pt, F - 1));
            }, function(pt) {
              K(v(pt, F - 1));
            });
          });
        else if (i.__isArray(C))
          L = [];
        else if (i.__isRegExp(C))
          L = new RegExp(C.source, g(C)), C.lastIndex && (L.lastIndex = C.lastIndex);
        else if (i.__isDate(C))
          L = new Date(C.getTime());
        else {
          if (M && Buffer.isBuffer(C))
            return Buffer.allocUnsafe ? L = Buffer.allocUnsafe(C.length) : L = new Buffer(C.length), C.copy(L), L;
          n(C, Error) ? L = Object.create(C) : typeof I > "u" ? (Q = Object.getPrototypeOf(C), L = Object.create(Q)) : (L = Object.create(I), Q = I);
        }
        if (y) {
          var bt = P.indexOf(C);
          if (bt != -1)
            return O[bt];
          P.push(C), O.push(L);
        }
        n(C, r) && C.forEach(function(W, K) {
          var pt = v(K, F - 1), le = v(W, F - 1);
          L.set(pt, le);
        }), n(C, o) && C.forEach(function(W) {
          var K = v(W, F - 1);
          L.add(K);
        });
        for (var z in C) {
          var ft;
          Q && (ft = Object.getOwnPropertyDescriptor(Q, z)), !(ft && ft.set == null) && (L[z] = v(C[z], F - 1));
        }
        if (Object.getOwnPropertySymbols)
          for (var vt = Object.getOwnPropertySymbols(C), z = 0; z < vt.length; z++) {
            var et = vt[z], Pt = Object.getOwnPropertyDescriptor(C, et);
            Pt && !Pt.enumerable && !k || (L[et] = v(C[et], F - 1), Pt.enumerable || Object.defineProperty(L, et, {
              enumerable: !1
            }));
          }
        if (k)
          for (var Me = Object.getOwnPropertyNames(C), z = 0; z < Me.length; z++) {
            var G = Me[z], Pt = Object.getOwnPropertyDescriptor(C, G);
            Pt && Pt.enumerable || (L[G] = v(C[G], F - 1), Object.defineProperty(L, G, {
              enumerable: !1
            }));
          }
        return L;
      }
      return v(d, T);
    }
    i.clonePrototype = function(y) {
      if (y === null)
        return null;
      var T = function() {
      };
      return T.prototype = y, new T();
    };
    function l(d) {
      return Object.prototype.toString.call(d);
    }
    i.__objToStr = l;
    function c(d) {
      return typeof d == "object" && l(d) === "[object Date]";
    }
    i.__isDate = c;
    function f(d) {
      return typeof d == "object" && l(d) === "[object Array]";
    }
    i.__isArray = f;
    function h(d) {
      return typeof d == "object" && l(d) === "[object RegExp]";
    }
    i.__isRegExp = h;
    function g(d) {
      var y = "";
      return d.global && (y += "g"), d.ignoreCase && (y += "i"), d.multiline && (y += "m"), y;
    }
    return i.__getRegExpFlags = g, i;
  }();
  t.exports && (t.exports = e);
})(Ti);
var ya = Ti.exports;
const Nn = /* @__PURE__ */ _a(ya), ba = /* @__PURE__ */ ie({
  __name: "Agefans",
  setup(t) {
    function e() {
      var s, i, l;
      const o = document.querySelector(".movurl[style*=block] ul li a[style]");
      (l = (i = (s = o == null ? void 0 : o.parentElement) == null ? void 0 : s.nextElementSibling) == null ? void 0 : i.firstElementChild) == null || l.click();
    }
    Sn("esc", () => {
      ma();
    });
    function n() {
      if (!ts()) {
        const o = document.querySelector("iframe");
        es(o);
      }
    }
    async function r(o) {
      const s = document.querySelector("iframe");
      await sn(() => !!s.src);
      const i = new URL(s.src).origin, l = Qn(s.contentWindow, i);
      l("init", location.origin, Nn(o)), s.addEventListener("load", () => {
        l("init", location.origin, Nn(o));
      }), xe("play-next-video", () => {
        e();
      });
      const c = async () => {
        ts() || es(s);
      };
      xe("fullscreen", () => c());
    }
    return (o, s) => (ct(), Wt(X(co), {
      onInit: r,
      onFullscreen: n
    }));
  }
}), va = /agefans\.(cc|vip)/, wa = {
  test: [
    // main domain
    va,
    /agemys\.com/,
    // iframe domain
    /shankuwang\.com/
  ],
  fn() {
    if (He() && (unsafeWindow.onbeforeunload = () => "别跑了"), on()) {
      let t = !1;
      xe("init", async (e, n) => {
        if (t)
          return;
        t = !0;
        const r = Qn(unsafeWindow.top, e);
        unsafeWindow.addEventListener("keydown", (s) => {
          r("key-down", { code: s.code, key: s.key });
        }), await sn(() => !!document.querySelector("video"));
        const o = document.querySelector("video");
        lo(
          o,
          n,
          () => r("play-next-video"),
          () => r("fullscreen")
        );
      });
    } else
      xe("key-down", (t) => {
        unsafeWindow.dispatchEvent(new KeyboardEvent("keydown", t));
      });
    ln(ba);
  }
}, Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: wa
}, Symbol.toStringTag, { value: "Module" })), xa = {};
function Ca(t, e) {
  return ct(), Yt("div", null, "设置页面");
}
const Aa = /* @__PURE__ */ io(xa, [["render", Ca]]), Ta = {
  test: /baidu\.com/,
  fn() {
    ln(Aa), Xe("meta, /", () => {
      console.log("help");
    });
  }
}, Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Ta
}, Symbol.toStringTag, { value: "Module" })), Ia = {
  test: /eb4fans\.com/,
  fn() {
    Xe("right", () => {
      const t = document.querySelector(
        "#single > div > div:nth-child(2) > div:nth-child(4) > div.col-xs-5.align-right a"
      );
      t == null || t.click();
    }), Xe("left", () => {
      const t = document.querySelector(
        "#single > div > div:nth-child(2) > div:nth-child(4) > div.col-xs-5.align-left a"
      );
      t == null || t.click();
    });
  }
}, Ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Ia
}, Symbol.toStringTag, { value: "Module" })), Sa = { class: "test" }, Oa = /* @__PURE__ */ ie({
  __name: "GithubIo",
  setup(t) {
    function e() {
      const n = new URL(location.href), [r] = n.host.split("."), [o, s] = n.pathname.split("/"), i = `https://github.com/${r}/${s}`;
      window.open(i, "_blank");
    }
    return (n, r) => (ct(), Yt("div", Sa, [
      D("button", { onClick: e }, "Goto Repo")
    ]));
  }
}), Ra = {
  test: /\.github\.io/,
  fn() {
    ln(Oa);
  }
}, Na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Ra
}, Symbol.toStringTag, { value: "Module" })), Ba = {
  test: /maofly\.com/,
  fn() {
    Xe("right", () => {
      const t = document.querySelector("[title=下集]");
      t == null || t.click();
    }), Xe("left", () => {
      const t = document.querySelector("[title=上集]");
      t == null || t.click();
    });
  }
}, ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Ba
}, Symbol.toStringTag, { value: "Module" })), Fa = /* @__PURE__ */ ie({
  __name: "Nunuyy",
  setup(t) {
    async function e(n) {
      await sn(() => !!document.querySelector("video"));
      const r = document.querySelector("video");
      lo(r, n, () => {
        const o = document.querySelector(".playlists ul li.on + li"), s = o == null ? void 0 : o.firstChild;
        s == null || s.click();
      });
    }
    return (n, r) => (ct(), Wt(X(co), { onInit: e }));
  }
}), La = /nunuyy\.(cc|vip)/, Ua = {
  test: [
    // main domain
    La
  ],
  fn() {
    ln(Fa);
  }
}, ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Ua
}, Symbol.toStringTag, { value: "Module" }));
async function $a(t, e = 1e3) {
  for (; !await t(); )
    await so(e);
}
const Da = {
  test: /blog\.reimu\.net/,
  fn() {
    $a(() => {
      const t = document.querySelectorAll(
        ".entry-content pre"
      );
      let e = !1;
      for (const n of Array.from(t))
        n.style.display === "none" && (n.style.display = "block", e = !0);
      return e;
    }), console.log("domain init");
  }
}, Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Da
}, Symbol.toStringTag, { value: "Module" })), Ka = /* @__PURE__ */ ie({
  __name: "Tangrenjie",
  setup(t) {
    function e() {
      const r = document.querySelector(".content.show li.active + li"), o = r == null ? void 0 : r.firstChild;
      o == null || o.click();
    }
    async function n(r) {
      const o = () => document.querySelector("#playleft iframe");
      await sn(() => {
        var c;
        return !!((c = o()) != null && c.src);
      });
      const s = o(), i = new URL(s.src).origin, l = Qn(s.contentWindow, i);
      l("init", location.origin, Nn(r)), s.addEventListener("load", () => {
        l("init", location.origin, Nn(r));
      }), xe("play-next-video", () => {
        e();
      });
    }
    return (r, o) => (ct(), Wt(X(co), { onInit: n }));
  }
}), qa = /tangrenjie\.(tv)/, za = {
  test: [
    // main domain
    qa
  ],
  fn() {
    if (unsafeWindow.onkeydown = unsafeWindow.onkeyup = unsafeWindow.onkeypress = () => {
    }, on()) {
      let t = !1;
      xe("init", async (e, n) => {
        if (t)
          return;
        t = !0;
        const r = Qn(unsafeWindow.top, e);
        await sn(() => !!document.querySelector("video"));
        const o = document.querySelector("video");
        lo(o, n, () => r("play-next-video"));
      });
    }
    ln(Ka);
  }
}, Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: za
}, Symbol.toStringTag, { value: "Module" })), Va = {
  test: /./,
  fn() {
    const t = {
      timeline: 0.01,
      volume: 1e-4
    };
    document.querySelectorAll("video").forEach((e) => {
      e.addEventListener("wheel", (n) => {
        n.preventDefault(), n.deltaX && (e.currentTime = ns(
          e.currentTime + n.deltaX * t.timeline,
          0,
          e.duration
        )), n.deltaY && (e.volume = ns(e.volume - n.deltaY * t.volume, 0, 1)), console.log(e.volume, e.currentTime);
      });
    });
  }
};
function ns(t, e = 0, n = 100) {
  return t < e ? e : t > n ? n : t;
}
const Ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conf: Va
}, Symbol.toStringTag, { value: "Module" }));
function Ya() {
  He() ? On.log("// [DEV] Useful script loaded.") : On.log("// [PROD] Useful script loaded.");
}
Ff(async () => {
  Ya();
  const r = Object.values(/* @__PURE__ */ Object.assign({ "./sites/_tpl.ts": Si, "./sites/agdm.ts": Rf, "./sites/agefans.ts": Ea, "./sites/baidu.ts": Pa, "./sites/eb4fans.ts": Ma, "./sites/githubIo.ts": Na, "./sites/maofly.ts": ja, "./sites/nunuyy.ts": ka, "./sites/reimu.ts": Ha, "./sites/tangrenjie.ts": Wa, "./sites/videoUtils.ts": Ja })).map((o) => o.conf).find(
    (o) => !!Nf(o.test).find((s) => s.test(location.hostname))
  );
  r == null || r.fn();
});
