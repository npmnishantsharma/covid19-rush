(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var hi = Object.defineProperty;
  var o = /* @__PURE__ */ __name((r, t) => hi(r, "name", { value: t, configurable: true }), "o");
  var cr = (() => {
    for (var r = new Uint8Array(128), t = 0; t < 64; t++)
      r[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
    return (u) => {
      for (var w = u.length, S = new Uint8Array((w - (u[w - 1] == "=") - (u[w - 2] == "=")) * 3 / 4 | 0), B = 0, $ = 0; B < w; ) {
        var N = r[u.charCodeAt(B++)], H = r[u.charCodeAt(B++)], ee = r[u.charCodeAt(B++)], oe = r[u.charCodeAt(B++)];
        S[$++] = N << 2 | H >> 4, S[$++] = H << 4 | ee >> 2, S[$++] = ee << 6 | oe;
      }
      return S;
    };
  })();
  function Ee(r) {
    return r * Math.PI / 180;
  }
  __name(Ee, "Ee");
  o(Ee, "deg2rad");
  function Ze(r) {
    return r * 180 / Math.PI;
  }
  __name(Ze, "Ze");
  o(Ze, "rad2deg");
  function Pe(r, t, u) {
    return t > u ? Pe(r, u, t) : Math.min(Math.max(r, t), u);
  }
  __name(Pe, "Pe");
  o(Pe, "clamp");
  function Se(r, t, u) {
    if (typeof r == "number" && typeof t == "number")
      return r + (t - r) * u;
    if (r instanceof y && t instanceof y)
      return r.lerp(t, u);
    if (r instanceof q && t instanceof q)
      return r.lerp(t, u);
    throw new Error(`Bad value for lerp(): ${r}, ${t}. Only number, Vec2 and Color is supported.`);
  }
  __name(Se, "Se");
  o(Se, "lerp");
  function jt(r, t, u, w, S) {
    return w + (r - t) / (u - t) * (S - w);
  }
  __name(jt, "jt");
  o(jt, "map");
  function hr(r, t, u, w, S) {
    return Pe(jt(r, t, u, w, S), w, S);
  }
  __name(hr, "hr");
  o(hr, "mapc");
  var _a;
  var y = (/* @__PURE__ */ __name(_a = class {
    constructor(t = 0, u = t) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = t, this.y = u;
    }
    static fromAngle(t) {
      let u = Ee(t);
      return new _a(Math.cos(u), Math.sin(u));
    }
    clone() {
      return new _a(this.x, this.y);
    }
    add(...t) {
      let u = T(...t);
      return new _a(this.x + u.x, this.y + u.y);
    }
    sub(...t) {
      let u = T(...t);
      return new _a(this.x - u.x, this.y - u.y);
    }
    scale(...t) {
      let u = T(...t);
      return new _a(this.x * u.x, this.y * u.y);
    }
    dist(...t) {
      let u = T(...t);
      return this.sub(u).len();
    }
    sdist(...t) {
      let u = T(...t);
      return this.sub(u).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let t = this.len();
      return t === 0 ? new _a(0) : this.scale(1 / t);
    }
    normal() {
      return new _a(this.y, -this.x);
    }
    reflect(t) {
      return this.sub(t.scale(2 * this.dot(t)));
    }
    project(t) {
      return t.scale(t.dot(this) / t.len());
    }
    reject(t) {
      return this.sub(this.project(t));
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    angle(...t) {
      let u = T(...t);
      return Ze(Math.atan2(this.y - u.y, this.x - u.x));
    }
    angleBetween(...t) {
      let u = T(...t);
      return Ze(Math.atan2(this.cross(u), this.dot(u)));
    }
    lerp(t, u) {
      return new _a(Se(this.x, t.x, u), Se(this.y, t.y, u));
    }
    slerp(t, u) {
      let w = this.dot(t), S = this.cross(t), B = Math.atan2(S, w);
      return this.scale(Math.sin((1 - u) * B)).add(t.scale(Math.sin(u * B))).scale(1 / S);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(t) {
      return new _a(Number(this.x.toFixed(t)), Number(this.y.toFixed(t)));
    }
    transform(t) {
      return t.multVec2(this);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y;
    }
    bbox() {
      return new le(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "r"), (() => {
    o(_a, "Vec2");
  })(), __publicField(_a, "LEFT", new _a(-1, 0)), __publicField(_a, "RIGHT", new _a(1, 0)), __publicField(_a, "UP", new _a(0, -1)), __publicField(_a, "DOWN", new _a(0, 1)), _a);
  function T(...r) {
    if (r.length === 1) {
      if (r[0] instanceof y)
        return new y(r[0].x, r[0].y);
      if (Array.isArray(r[0]) && r[0].length === 2)
        return new y(...r[0]);
    }
    return new y(...r);
  }
  __name(T, "T");
  o(T, "vec2");
  var _a2;
  var q = (/* @__PURE__ */ __name(_a2 = class {
    constructor(t, u, w) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = Pe(t, 0, 255), this.g = Pe(u, 0, 255), this.b = Pe(w, 0, 255);
    }
    static fromArray(t) {
      return new _a2(t[0], t[1], t[2]);
    }
    static fromHex(t) {
      if (typeof t == "number")
        return new _a2(t >> 16 & 255, t >> 8 & 255, t >> 0 & 255);
      if (typeof t == "string") {
        let u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return new _a2(parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16));
      } else
        throw new Error("Invalid hex color format");
    }
    static fromHSL(t, u, w) {
      if (u == 0)
        return new _a2(255 * w, 255 * w, 255 * w);
      let S = o((oe, U, X) => (X < 0 && (X += 1), X > 1 && (X -= 1), X < 1 / 6 ? oe + (U - oe) * 6 * X : X < 1 / 2 ? U : X < 2 / 3 ? oe + (U - oe) * (2 / 3 - X) * 6 : oe), "hue2rgb"), B = w < 0.5 ? w * (1 + u) : w + u - w * u, $ = 2 * w - B, N = S($, B, t + 1 / 3), H = S($, B, t), ee = S($, B, t - 1 / 3);
      return new _a2(Math.round(N * 255), Math.round(H * 255), Math.round(ee * 255));
    }
    clone() {
      return new _a2(this.r, this.g, this.b);
    }
    lighten(t) {
      return new _a2(this.r + t, this.g + t, this.b + t);
    }
    darken(t) {
      return this.lighten(-t);
    }
    invert() {
      return new _a2(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(t) {
      return new _a2(this.r * t.r / 255, this.g * t.g / 255, this.b * t.b / 255);
    }
    lerp(t, u) {
      return new _a2(Se(this.r, t.r, u), Se(this.g, t.g, u), Se(this.b, t.b, u));
    }
    eq(t) {
      return this.r === t.r && this.g === t.g && this.b === t.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "r"), (() => {
    o(_a2, "Color");
  })(), __publicField(_a2, "RED", new _a2(255, 0, 0)), __publicField(_a2, "GREEN", new _a2(0, 255, 0)), __publicField(_a2, "BLUE", new _a2(0, 0, 255)), __publicField(_a2, "YELLOW", new _a2(255, 255, 0)), __publicField(_a2, "MAGENTA", new _a2(255, 0, 255)), __publicField(_a2, "CYAN", new _a2(0, 255, 255)), __publicField(_a2, "WHITE", new _a2(255, 255, 255)), __publicField(_a2, "BLACK", new _a2(0, 0, 0)), _a2);
  function J(...r) {
    if (r.length === 0)
      return new q(255, 255, 255);
    if (r.length === 1) {
      if (r[0] instanceof q)
        return r[0].clone();
      if (typeof r[0] == "string")
        return q.fromHex(r[0]);
      if (Array.isArray(r[0]) && r[0].length === 3)
        return q.fromArray(r[0]);
    }
    return new q(...r);
  }
  __name(J, "J");
  o(J, "rgb");
  var dr = o((r, t, u) => q.fromHSL(r, t, u), "hsl2rgb");
  var _a3;
  var ue = (/* @__PURE__ */ __name(_a3 = class {
    constructor(t, u, w, S) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = t, this.y = u, this.w = w, this.h = S;
    }
    scale(t) {
      return new _a3(this.x + this.w * t.x, this.y + this.h * t.y, this.w * t.w, this.h * t.h);
    }
    pos() {
      return new y(this.x, this.y);
    }
    clone() {
      return new _a3(this.x, this.y, this.w, this.h);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y && this.w === t.w && this.h === t.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "r"), (() => {
    o(_a3, "Quad");
  })(), _a3);
  function ie(r, t, u, w) {
    return new ue(r, t, u, w);
  }
  __name(ie, "ie");
  o(ie, "quad");
  var _a4;
  var be = (/* @__PURE__ */ __name(_a4 = class {
    constructor(t) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      t && (this.m = t);
    }
    static translate(t) {
      return new _a4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t.x, t.y, 0, 1]);
    }
    static scale(t) {
      return new _a4([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(t) {
      t = Ee(-t);
      let u = Math.cos(t), w = Math.sin(t);
      return new _a4([1, 0, 0, 0, 0, u, -w, 0, 0, w, u, 0, 0, 0, 0, 1]);
    }
    static rotateY(t) {
      t = Ee(-t);
      let u = Math.cos(t), w = Math.sin(t);
      return new _a4([u, 0, w, 0, 0, 1, 0, 0, -w, 0, u, 0, 0, 0, 0, 1]);
    }
    static rotateZ(t) {
      t = Ee(-t);
      let u = Math.cos(t), w = Math.sin(t);
      return new _a4([u, -w, 0, 0, w, u, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(t) {
      return this.m[12] += this.m[0] * t.x + this.m[4] * t.y, this.m[13] += this.m[1] * t.x + this.m[5] * t.y, this.m[14] += this.m[2] * t.x + this.m[6] * t.y, this.m[15] += this.m[3] * t.x + this.m[7] * t.y, this;
    }
    scale(t) {
      return this.m[0] *= t.x, this.m[4] *= t.y, this.m[1] *= t.x, this.m[5] *= t.y, this.m[2] *= t.x, this.m[6] *= t.y, this.m[3] *= t.x, this.m[7] *= t.y, this;
    }
    rotate(t) {
      t = Ee(-t);
      let u = Math.cos(t), w = Math.sin(t), S = this.m[0], B = this.m[1], $ = this.m[4], N = this.m[5];
      return this.m[0] = S * u + B * w, this.m[1] = -S * w + B * u, this.m[4] = $ * u + N * w, this.m[5] = -$ * w + N * u, this;
    }
    mult(t) {
      let u = [];
      for (let w = 0; w < 4; w++)
        for (let S = 0; S < 4; S++)
          u[w * 4 + S] = this.m[0 * 4 + S] * t.m[w * 4 + 0] + this.m[1 * 4 + S] * t.m[w * 4 + 1] + this.m[2 * 4 + S] * t.m[w * 4 + 2] + this.m[3 * 4 + S] * t.m[w * 4 + 3];
      return new _a4(u);
    }
    multVec2(t) {
      return new y(t.x * this.m[0] + t.y * this.m[4] + this.m[12], t.x * this.m[1] + t.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
      return new y(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = this.m[0] * this.m[5] - this.m[1] * this.m[4], u = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new y(u, t / u);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = this.m[0] * this.m[5] - this.m[1] * this.m[4], u = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new y(t / u, u);
      } else
        return new y(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return Ze(this.m[1] > 0 ? Math.acos(this.m[0] / t) : -Math.acos(this.m[0] / t));
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return Ze(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / t) : -Math.acos(this.m[4] / t)));
      } else
        return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new y(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (t * t), 0);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new y(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (t * t));
      } else
        return new y(0, 0);
    }
    invert() {
      let t = [], u = this.m[10] * this.m[15] - this.m[14] * this.m[11], w = this.m[9] * this.m[15] - this.m[13] * this.m[11], S = this.m[9] * this.m[14] - this.m[13] * this.m[10], B = this.m[8] * this.m[15] - this.m[12] * this.m[11], $ = this.m[8] * this.m[14] - this.m[12] * this.m[10], N = this.m[8] * this.m[13] - this.m[12] * this.m[9], H = this.m[6] * this.m[15] - this.m[14] * this.m[7], ee = this.m[5] * this.m[15] - this.m[13] * this.m[7], oe = this.m[5] * this.m[14] - this.m[13] * this.m[6], U = this.m[4] * this.m[15] - this.m[12] * this.m[7], X = this.m[4] * this.m[14] - this.m[12] * this.m[6], d = this.m[5] * this.m[15] - this.m[13] * this.m[7], W = this.m[4] * this.m[13] - this.m[12] * this.m[5], fe = this.m[6] * this.m[11] - this.m[10] * this.m[7], De = this.m[5] * this.m[11] - this.m[9] * this.m[7], v = this.m[5] * this.m[10] - this.m[9] * this.m[6], ce = this.m[4] * this.m[11] - this.m[8] * this.m[7], ge = this.m[4] * this.m[10] - this.m[8] * this.m[6], te = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      t[0] = this.m[5] * u - this.m[6] * w + this.m[7] * S, t[4] = -(this.m[4] * u - this.m[6] * B + this.m[7] * $), t[8] = this.m[4] * w - this.m[5] * B + this.m[7] * N, t[12] = -(this.m[4] * S - this.m[5] * $ + this.m[6] * N), t[1] = -(this.m[1] * u - this.m[2] * w + this.m[3] * S), t[5] = this.m[0] * u - this.m[2] * B + this.m[3] * $, t[9] = -(this.m[0] * w - this.m[1] * B + this.m[3] * N), t[13] = this.m[0] * S - this.m[1] * $ + this.m[2] * N, t[2] = this.m[1] * H - this.m[2] * ee + this.m[3] * oe, t[6] = -(this.m[0] * H - this.m[2] * U + this.m[3] * X), t[10] = this.m[0] * d - this.m[1] * U + this.m[3] * W, t[14] = -(this.m[0] * oe - this.m[1] * X + this.m[2] * W), t[3] = -(this.m[1] * fe - this.m[2] * De + this.m[3] * v), t[7] = this.m[0] * fe - this.m[2] * ce + this.m[3] * ge, t[11] = -(this.m[0] * De - this.m[1] * ce + this.m[3] * te), t[15] = this.m[0] * v - this.m[1] * ge + this.m[2] * te;
      let ae = this.m[0] * t[0] + this.m[1] * t[4] + this.m[2] * t[8] + this.m[3] * t[12];
      for (let ye = 0; ye < 4; ye++)
        for (let V = 0; V < 4; V++)
          t[ye * 4 + V] *= 1 / ae;
      return new _a4(t);
    }
    clone() {
      return new _a4([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  }, "r"), (() => {
    o(_a4, "Mat4");
  })(), _a4);
  function An(r, t, u, w = Math.sin) {
    return r + (w(u) + 1) / 2 * (t - r);
  }
  __name(An, "An");
  o(An, "wave");
  var di = 1103515245;
  var fi = 12345;
  var lr = 2147483648;
  var _a5;
  var ft = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a5 = class {
    constructor(t) {
      __publicField(this, "seed");
      this.seed = t;
    }
    gen() {
      return this.seed = (di * this.seed + fi) % lr, this.seed / lr;
    }
    genNumber(t, u) {
      return t + this.gen() * (u - t);
    }
    genVec2(t, u) {
      return new y(this.genNumber(t.x, u.x), this.genNumber(t.y, u.y));
    }
    genColor(t, u) {
      return new q(this.genNumber(t.r, u.r), this.genNumber(t.g, u.g), this.genNumber(t.b, u.b));
    }
    genAny(...t) {
      if (t.length === 0)
        return this.gen();
      if (t.length === 1) {
        if (typeof t[0] == "number")
          return this.genNumber(0, t[0]);
        if (t[0] instanceof y)
          return this.genVec2(T(0, 0), t[0]);
        if (t[0] instanceof q)
          return this.genColor(J(0, 0, 0), t[0]);
      } else if (t.length === 2) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.genNumber(t[0], t[1]);
        if (t[0] instanceof y && t[1] instanceof y)
          return this.genVec2(t[0], t[1]);
        if (t[0] instanceof q && t[1] instanceof q)
          return this.genColor(t[0], t[1]);
      }
    }
  }, "_this"), (() => {
    o(_a5, "RNG");
  })(), _a5), "ft");
  var Cn = new ft(Date.now());
  function fr(r) {
    return r != null && (Cn.seed = r), Cn.seed;
  }
  __name(fr, "fr");
  o(fr, "randSeed");
  function gt(...r) {
    return Cn.genAny(...r);
  }
  __name(gt, "gt");
  o(gt, "rand");
  function On(...r) {
    return Math.floor(gt(...r));
  }
  __name(On, "On");
  o(On, "randi");
  function mr(r) {
    return gt() <= r;
  }
  __name(mr, "mr");
  o(mr, "chance");
  function pr(r) {
    return r[On(r.length)];
  }
  __name(pr, "pr");
  o(pr, "choose");
  function gr(r, t) {
    return r.pos.x + r.width > t.pos.x && r.pos.x < t.pos.x + t.width && r.pos.y + r.height > t.pos.y && r.pos.y < t.pos.y + t.height;
  }
  __name(gr, "gr");
  o(gr, "testRectRect");
  function mi(r, t) {
    if (r.p1.x === r.p2.x && r.p1.y === r.p2.y || t.p1.x === t.p2.x && t.p1.y === t.p2.y)
      return null;
    let u = (t.p2.y - t.p1.y) * (r.p2.x - r.p1.x) - (t.p2.x - t.p1.x) * (r.p2.y - r.p1.y);
    if (u === 0)
      return null;
    let w = ((t.p2.x - t.p1.x) * (r.p1.y - t.p1.y) - (t.p2.y - t.p1.y) * (r.p1.x - t.p1.x)) / u, S = ((r.p2.x - r.p1.x) * (r.p1.y - t.p1.y) - (r.p2.y - r.p1.y) * (r.p1.x - t.p1.x)) / u;
    return w < 0 || w > 1 || S < 0 || S > 1 ? null : w;
  }
  __name(mi, "mi");
  o(mi, "testLineLineT");
  function Qe(r, t) {
    let u = mi(r, t);
    return u ? T(r.p1.x + u * (r.p2.x - r.p1.x), r.p1.y + u * (r.p2.y - r.p1.y)) : null;
  }
  __name(Qe, "Qe");
  o(Qe, "testLineLine");
  function wr(r, t) {
    if (mt(r, t.p1) || mt(r, t.p2))
      return true;
    let u = r.points();
    return !!Qe(t, new Oe(u[0], u[1])) || !!Qe(t, new Oe(u[1], u[2])) || !!Qe(t, new Oe(u[2], u[3])) || !!Qe(t, new Oe(u[3], u[0]));
  }
  __name(wr, "wr");
  o(wr, "testRectLine");
  function mt(r, t) {
    return t.x > r.pos.x && t.x < r.pos.x + r.width && t.y > r.pos.y && t.y < r.pos.y + r.height;
  }
  __name(mt, "mt");
  o(mt, "testRectPoint");
  function vr(r, t) {
    let u = t.sub(r.p1), w = r.p2.sub(r.p1);
    if (Math.abs(u.cross(w)) > Number.EPSILON)
      return false;
    let S = u.dot(w) / w.dot(w);
    return S >= 0 && S <= 1;
  }
  __name(vr, "vr");
  o(vr, "testLinePoint");
  function Pn(r, t) {
    let u = r.p2.sub(r.p1), w = u.dot(u), S = r.p1.sub(t.center), B = 2 * u.dot(S), $ = S.dot(S) - t.radius * t.radius, N = B * B - 4 * w * $;
    if (w <= Number.EPSILON || N < 0)
      return false;
    if (N == 0) {
      let H = -B / (2 * w);
      if (H >= 0 && H <= 1)
        return true;
    } else {
      let H = (-B + Math.sqrt(N)) / (2 * w), ee = (-B - Math.sqrt(N)) / (2 * w);
      if (H >= 0 && H <= 1 || ee >= 0 && ee <= 1)
        return true;
    }
    return br(t, r.p1);
  }
  __name(Pn, "Pn");
  o(Pn, "testLineCircle");
  function br(r, t) {
    return r.center.sdist(t) < r.radius * r.radius;
  }
  __name(br, "br");
  o(br, "testCirclePoint");
  function yr(r, t) {
    let u = t.pts[t.pts.length - 1];
    for (let w of t.pts) {
      if (Pn(new Oe(u, w), r))
        return true;
      u = w;
    }
    return br(r, t.pts[0]) ? true : Mn(t, r.center);
  }
  __name(yr, "yr");
  o(yr, "testCirclePolygon");
  function Mn(r, t) {
    let u = false, w = r.pts;
    for (let S = 0, B = w.length - 1; S < w.length; B = S++)
      w[S].y > t.y != w[B].y > t.y && t.x < (w[B].x - w[S].x) * (t.y - w[S].y) / (w[B].y - w[S].y) + w[S].x && (u = !u);
    return u;
  }
  __name(Mn, "Mn");
  o(Mn, "testPolygonPoint");
  var _a6;
  var Oe = (/* @__PURE__ */ __name(_a6 = class {
    constructor(t, u) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = t.clone(), this.p2 = u.clone();
    }
    transform(t) {
      return new _a6(t.multVec2(this.p1), t.multVec2(this.p2));
    }
    bbox() {
      return le.fromPoints(this.p1, this.p2);
    }
    area() {
      return this.p1.dist(this.p2);
    }
    clone() {
      return new _a6(this.p1, this.p2);
    }
  }, "r"), (() => {
    o(_a6, "Line");
  })(), _a6);
  var _a7;
  var le = (/* @__PURE__ */ __name(_a7 = class {
    constructor(t, u, w) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = t.clone(), this.width = u, this.height = w;
    }
    static fromPoints(t, u) {
      return new _a7(t.clone(), u.x - t.x, u.y - t.y);
    }
    center() {
      return new y(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(t) {
      return new He(this.points().map((u) => t.multVec2(u)));
    }
    bbox() {
      return this.clone();
    }
    area() {
      return this.width * this.height;
    }
    clone() {
      return new _a7(this.pos.clone(), this.width, this.height);
    }
    distToPoint(t) {
      return Math.sqrt(this.sdistToPoint(t));
    }
    sdistToPoint(t) {
      let u = this.pos, w = this.pos.add(this.width, this.height), S = Math.max(u.x - t.x, 0, t.x - w.x), B = Math.max(u.y - t.y, 0, t.y - w.y);
      return S * S + B * B;
    }
  }, "r"), (() => {
    o(_a7, "Rect");
  })(), _a7);
  var _a8;
  var pt = (/* @__PURE__ */ __name(_a8 = class {
    constructor(t, u) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = t.clone(), this.radius = u;
    }
    transform(t) {
      return new Tn(this.center, this.radius, this.radius).transform(t);
    }
    bbox() {
      return le.fromPoints(this.center.sub(T(this.radius)), this.center.add(T(this.radius)));
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
    clone() {
      return new _a8(this.center, this.radius);
    }
  }, "r"), (() => {
    o(_a8, "Circle");
  })(), _a8);
  var _a9;
  var Tn = (/* @__PURE__ */ __name(_a9 = class {
    constructor(t, u, w) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = t.clone(), this.radiusX = u, this.radiusY = w;
    }
    transform(t) {
      return new _a9(t.multVec2(this.center), t.m[0] * this.radiusX, t.m[5] * this.radiusY);
    }
    bbox() {
      return le.fromPoints(this.center.sub(T(this.radiusX, this.radiusY)), this.center.add(T(this.radiusX, this.radiusY)));
    }
    area() {
      return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
      return new _a9(this.center, this.radiusX, this.radiusY);
    }
  }, "r"), (() => {
    o(_a9, "Ellipse");
  })(), _a9);
  var _a10;
  var He = (/* @__PURE__ */ __name(_a10 = class {
    constructor(t) {
      __publicField(this, "pts");
      if (t.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = t;
    }
    transform(t) {
      return new _a10(this.pts.map((u) => t.multVec2(u)));
    }
    bbox() {
      let t = T(Number.MAX_VALUE), u = T(-Number.MAX_VALUE);
      for (let w of this.pts)
        t.x = Math.min(t.x, w.x), u.x = Math.max(u.x, w.x), t.y = Math.min(t.y, w.y), u.y = Math.max(u.y, w.y);
      return le.fromPoints(t, u);
    }
    area() {
      let t = 0, u = this.pts.length;
      for (let w = 0; w < u; w++) {
        let S = this.pts[w], B = this.pts[(w + 1) % u];
        t += S.x * B.y * 0.5, t -= B.x * S.y * 0.5;
      }
      return Math.abs(t);
    }
    clone() {
      return new _a10(this.pts.map((t) => t.clone()));
    }
  }, "r"), (() => {
    o(_a10, "Polygon");
  })(), _a10);
  function xr(r, t) {
    let u = Number.MAX_VALUE, w = T(0);
    for (let S of [r, t])
      for (let B = 0; B < S.pts.length; B++) {
        let $ = S.pts[B], H = S.pts[(B + 1) % S.pts.length].sub($).normal().unit(), ee = Number.MAX_VALUE, oe = -Number.MAX_VALUE;
        for (let W = 0; W < r.pts.length; W++) {
          let fe = r.pts[W].dot(H);
          ee = Math.min(ee, fe), oe = Math.max(oe, fe);
        }
        let U = Number.MAX_VALUE, X = -Number.MAX_VALUE;
        for (let W = 0; W < t.pts.length; W++) {
          let fe = t.pts[W].dot(H);
          U = Math.min(U, fe), X = Math.max(X, fe);
        }
        let d = Math.min(oe, X) - Math.max(ee, U);
        if (d < 0)
          return null;
        if (d < Math.abs(u)) {
          let W = X - ee, fe = U - oe;
          u = Math.abs(W) < Math.abs(fe) ? W : fe, w = H.scale(u);
        }
      }
    return w;
  }
  __name(xr, "xr");
  o(xr, "sat");
  var _a11;
  var wt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a11 = class extends Map {
    constructor(...t) {
      super(...t);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(t) {
      let u = this.lastID;
      return this.set(u, t), this.lastID++, u;
    }
    pushd(t) {
      let u = this.push(t);
      return () => this.delete(u);
    }
  }, "_this"), (() => {
    o(_a11, "IDList");
  })(), _a11), "wt");
  var _a12;
  var Me = (/* @__PURE__ */ __name(_a12 = class {
    constructor(t) {
      __publicField(this, "paused", false);
      __publicField(this, "cancel");
      this.cancel = t;
    }
    static join(t) {
      let u = new _a12(() => t.forEach((w) => w.cancel()));
      return Object.defineProperty(u, "paused", { get: () => t[0].paused, set: (w) => t.forEach((S) => S.paused = w) }), u.paused = false, u;
    }
  }, "r"), (() => {
    o(_a12, "EventController");
  })(), _a12);
  var _a13;
  var ve = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a13 = class {
    constructor() {
      __publicField(this, "handlers", new wt());
    }
    add(t) {
      let u = this.handlers.pushd((...S) => {
        w.paused || t(...S);
      }), w = new Me(u);
      return w;
    }
    addOnce(t) {
      let u = this.add((...w) => {
        u.cancel(), t(...w);
      });
      return u;
    }
    next() {
      return new Promise((t) => this.addOnce(t));
    }
    trigger(...t) {
      this.handlers.forEach((u) => u(...t));
    }
    numListeners() {
      return this.handlers.size;
    }
  }, "_this"), (() => {
    o(_a13, "Event");
  })(), _a13), "ve");
  var _a14;
  var Re = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a14 = class {
    constructor() {
      __publicField(this, "handlers", {});
    }
    on(t, u) {
      return this.handlers[t] || (this.handlers[t] = new ve()), this.handlers[t].add(u);
    }
    onOnce(t, u) {
      let w = this.on(t, (...S) => {
        w.cancel(), u(...S);
      });
      return w;
    }
    next(t) {
      return new Promise((u) => {
        this.onOnce(t, (...w) => u(w[0]));
      });
    }
    trigger(t, ...u) {
      this.handlers[t] && this.handlers[t].trigger(...u);
    }
    remove(t) {
      delete this.handlers[t];
    }
    clear() {
      this.handlers = {};
    }
    numListeners(t) {
      var _a20, _b;
      return (_b = (_a20 = this.handlers[t]) == null ? void 0 : _a20.numListeners()) != null ? _b : 0;
    }
  }, "_this"), (() => {
    o(_a14, "EventHandler");
  })(), _a14), "Re");
  function Rn(r, t) {
    let u = typeof r, w = typeof t;
    if (u !== w)
      return false;
    if (u === "object" && w === "object" && r !== null && t !== null) {
      let S = Object.keys(r), B = Object.keys(t);
      if (S.length !== B.length)
        return false;
      for (let $ of S) {
        let N = r[$], H = t[$];
        if (!(typeof N == "function" && typeof H == "function") && !Rn(N, H))
          return false;
      }
      return true;
    }
    return r === t;
  }
  __name(Rn, "Rn");
  o(Rn, "deepEq");
  function pi(r) {
    let t = window.atob(r), u = t.length, w = new Uint8Array(u);
    for (let S = 0; S < u; S++)
      w[S] = t.charCodeAt(S);
    return w.buffer;
  }
  __name(pi, "pi");
  o(pi, "base64ToArrayBuffer");
  function Ur(r) {
    return pi(r.split(",")[1]);
  }
  __name(Ur, "Ur");
  o(Ur, "dataURLToArrayBuffer");
  function _t(r, t) {
    let u = document.createElement("a");
    u.href = t, u.download = r, u.click();
  }
  __name(_t, "_t");
  o(_t, "download");
  function Dn(r, t) {
    _t(r, "data:text/plain;charset=utf-8," + t);
  }
  __name(Dn, "Dn");
  o(Dn, "downloadText");
  function Er(r, t) {
    Dn(r, JSON.stringify(t));
  }
  __name(Er, "Er");
  o(Er, "downloadJSON");
  function Gn(r, t) {
    let u = URL.createObjectURL(t);
    _t(r, u), URL.revokeObjectURL(u);
  }
  __name(Gn, "Gn");
  o(Gn, "downloadBlob");
  var Fn = o((r) => r.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
  var Sr = o((r) => r.split(".").pop(), "getExt");
  var Cr = (() => {
    let r = 0;
    return () => r++;
  })();
  var _a15;
  var kt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a15 = class {
    constructor(t = (u, w) => u < w) {
      __publicField(this, "_items");
      __publicField(this, "_compareFn");
      this._compareFn = t, this._items = [];
    }
    insert(t) {
      this._items.push(t), this.moveUp(this._items.length - 1);
    }
    remove() {
      if (this._items.length === 0)
        return null;
      let t = this._items[0], u = this._items.pop();
      return this._items.length !== 0 && (this._items[0] = u, this.moveDown(0)), t;
    }
    clear() {
      this._items.splice(0, this._items.length);
    }
    moveUp(t) {
      for (; t > 0; ) {
        let u = Math.floor((t - 1) / 2);
        if (!this._compareFn(this._items[t], this._items[u]) && this._items[t] >= this._items[u])
          break;
        this.swap(t, u), t = u;
      }
    }
    moveDown(t) {
      for (; t < Math.floor(this._items.length / 2); ) {
        let u = 2 * t + 1;
        if (u < this._items.length - 1 && !this._compareFn(this._items[u], this._items[u + 1]) && ++u, this._compareFn(this._items[t], this._items[u]))
          break;
        this.swap(t, u), t = u;
      }
    }
    swap(t, u) {
      [this._items[t], this._items[u]] = [this._items[u], this._items[t]];
    }
    get length() {
      return this._items.length;
    }
  }, "_this"), (() => {
    o(_a15, "BinaryHeap");
  })(), _a15), "kt");
  var Bn = { "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "select", "10": "lstick", "16": "start" }, sticks: { left: { x: 0, y: 1 } } }, "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "start", "10": "lstick", "16": "select" }, sticks: { left: { x: 0, y: 1 } } }, "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, default: { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } } };
  var _a16;
  var et = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a16 = class {
    constructor() {
      __publicField(this, "pressed", /* @__PURE__ */ new Set([]));
      __publicField(this, "pressedRepeat", /* @__PURE__ */ new Set([]));
      __publicField(this, "released", /* @__PURE__ */ new Set([]));
      __publicField(this, "down", /* @__PURE__ */ new Set([]));
    }
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(t) {
      this.pressed.add(t), this.pressedRepeat.add(t), this.down.add(t);
    }
    pressRepeat(t) {
      this.pressedRepeat.add(t);
    }
    release(t) {
      this.down.delete(t), this.pressed.delete(t), this.released.add(t);
    }
  }, "_this"), (() => {
    o(_a16, "ButtonState");
  })(), _a16), "et");
  var _a17;
  var Ln = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a17 = class {
    constructor() {
      __publicField(this, "buttonState", new et());
      __publicField(this, "stickState", /* @__PURE__ */ new Map());
    }
  }, "_this"), (() => {
    o(_a17, "GamepadState");
  })(), _a17), "Ln");
  var _a18;
  var In = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a18 = class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(t) {
      this.dts.push(t), this.timer += t, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((u, w) => u + w) / this.dts.length)), this.dts = []);
    }
  }, "_this"), (() => {
    o(_a18, "FPSCounter");
  })(), _a18), "In");
  var Tr = o((r) => {
    if (!r.canvas)
      throw new Error("Please provide a canvas");
    let t = { canvas: r.canvas, loopID: null, stopped: false, dt: 0, time: 0, realTime: 0, fpsCounter: new In(), timeScale: 1, skipTime: false, numFrames: 0, paused: false, mousePos: new y(0), mouseDeltaPos: new y(0), keyState: new et(), mouseState: new et(), mergedGamepadState: new Ln(), gamepadStates: /* @__PURE__ */ new Map(), gamepads: [], charInputted: [], isMouseMoved: false, lastWidth: r.canvas.offsetWidth, lastHeight: r.canvas.offsetHeight, events: new Re() };
    function u() {
      return t.canvas;
    }
    __name(u, "u");
    o(u, "canvas");
    function w() {
      return t.dt * t.timeScale;
    }
    __name(w, "w");
    o(w, "dt");
    function S() {
      return t.time;
    }
    __name(S, "S");
    o(S, "time");
    function B() {
      return t.fpsCounter.fps;
    }
    __name(B, "B");
    o(B, "fps");
    function $() {
      return t.numFrames;
    }
    __name($, "$");
    o($, "numFrames");
    function N() {
      return t.canvas.toDataURL();
    }
    __name(N, "N");
    o(N, "screenshot");
    function H(h) {
      t.canvas.style.cursor = h;
    }
    __name(H, "H");
    o(H, "setCursor");
    function ee() {
      return t.canvas.style.cursor;
    }
    __name(ee, "ee");
    o(ee, "getCursor");
    function oe(h) {
      if (h)
        try {
          let x = t.canvas.requestPointerLock();
          x.catch && x.catch((E) => console.error(E));
        } catch (x) {
          console.error(x);
        }
      else
        document.exitPointerLock();
    }
    __name(oe, "oe");
    o(oe, "setCursorLocked");
    function U() {
      return !!document.pointerLockElement;
    }
    __name(U, "U");
    o(U, "isCursorLocked");
    function X(h) {
      h.requestFullscreen ? h.requestFullscreen() : h.webkitRequestFullscreen && h.webkitRequestFullscreen();
    }
    __name(X, "X");
    o(X, "enterFullscreen");
    function d() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    __name(d, "d");
    o(d, "exitFullscreen");
    function W() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }
    __name(W, "W");
    o(W, "getFullscreenElement");
    function fe(h = true) {
      h ? X(t.canvas) : d();
    }
    __name(fe, "fe");
    o(fe, "setFullscreen");
    function De() {
      return !!W();
    }
    __name(De, "De");
    o(De, "isFullscreen");
    function v() {
      t.stopped = true;
      for (let h in z)
        t.canvas.removeEventListener(h, z[h]);
      for (let h in Ge)
        document.removeEventListener(h, Ge[h]);
      for (let h in Fe)
        window.removeEventListener(h, Fe[h]);
      Q.disconnect();
    }
    __name(v, "v");
    o(v, "quit");
    function ce(h) {
      t.loopID !== null && cancelAnimationFrame(t.loopID);
      let x = 0, E = o((L) => {
        if (t.stopped)
          return;
        if (t.paused || document.visibilityState !== "visible") {
          t.loopID = requestAnimationFrame(E);
          return;
        }
        let me = L / 1e3, Z = me - t.realTime, Ye = r.maxFPS ? 1 / r.maxFPS : 0;
        t.realTime = me, x += Z, x > Ye && (t.skipTime || (t.dt = x, t.time += w(), t.fpsCounter.tick(t.dt)), x = 0, t.skipTime = false, t.numFrames++, Pt(), h(), Mt()), t.loopID = requestAnimationFrame(E);
      }, "frame");
      E(0);
    }
    __name(ce, "ce");
    o(ce, "run");
    function ge() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    __name(ge, "ge");
    o(ge, "isTouchscreen");
    function te() {
      return t.mousePos.clone();
    }
    __name(te, "te");
    o(te, "mousePos");
    function ae() {
      return t.mouseDeltaPos.clone();
    }
    __name(ae, "ae");
    o(ae, "mouseDeltaPos");
    function ye(h = "left") {
      return t.mouseState.pressed.has(h);
    }
    __name(ye, "ye");
    o(ye, "isMousePressed");
    function V(h = "left") {
      return t.mouseState.down.has(h);
    }
    __name(V, "V");
    o(V, "isMouseDown");
    function A(h = "left") {
      return t.mouseState.released.has(h);
    }
    __name(A, "A");
    o(A, "isMouseReleased");
    function rt() {
      return t.isMouseMoved;
    }
    __name(rt, "rt");
    o(rt, "isMouseMoved");
    function Ce(h) {
      return h === void 0 ? t.keyState.pressed.size > 0 : t.keyState.pressed.has(h);
    }
    __name(Ce, "Ce");
    o(Ce, "isKeyPressed");
    function Yt(h) {
      return h === void 0 ? t.keyState.pressedRepeat.size > 0 : t.keyState.pressedRepeat.has(h);
    }
    __name(Yt, "Yt");
    o(Yt, "isKeyPressedRepeat");
    function st(h) {
      return h === void 0 ? t.keyState.down.size > 0 : t.keyState.down.has(h);
    }
    __name(st, "st");
    o(st, "isKeyDown");
    function qe(h) {
      return h === void 0 ? t.keyState.released.size > 0 : t.keyState.released.has(h);
    }
    __name(qe, "qe");
    o(qe, "isKeyReleased");
    function Xt(h) {
      return h === void 0 ? t.mergedGamepadState.buttonState.pressed.size > 0 : t.mergedGamepadState.buttonState.pressed.has(h);
    }
    __name(Xt, "Xt");
    o(Xt, "isGamepadButtonPressed");
    function Wt(h) {
      return h === void 0 ? t.mergedGamepadState.buttonState.down.size > 0 : t.mergedGamepadState.buttonState.down.has(h);
    }
    __name(Wt, "Wt");
    o(Wt, "isGamepadButtonDown");
    function $e(h) {
      return h === void 0 ? t.mergedGamepadState.buttonState.released.size > 0 : t.mergedGamepadState.buttonState.released.has(h);
    }
    __name($e, "$e");
    o($e, "isGamepadButtonReleased");
    function Jt(h) {
      return t.events.on("resize", h);
    }
    __name(Jt, "Jt");
    o(Jt, "onResize");
    let ze = o((h, x) => {
      if (typeof h == "function")
        return t.events.on("keyDown", h);
      if (typeof h == "string" && typeof x == "function")
        return t.events.on("keyDown", (E) => E === h && x(h));
    }, "onKeyDown"), Qt = o((h, x) => {
      if (typeof h == "function")
        return t.events.on("keyPress", h);
      if (typeof h == "string" && typeof x == "function")
        return t.events.on("keyPress", (E) => E === h && x(h));
    }, "onKeyPress"), Zt = o((h, x) => {
      if (typeof h == "function")
        return t.events.on("keyPressRepeat", h);
      if (typeof h == "string" && typeof x == "function")
        return t.events.on("keyPressRepeat", (E) => E === h && x(h));
    }, "onKeyPressRepeat"), bt = o((h, x) => {
      if (typeof h == "function")
        return t.events.on("keyRelease", h);
      if (typeof h == "string" && typeof x == "function")
        return t.events.on("keyRelease", (E) => E === h && x(h));
    }, "onKeyRelease");
    function yt(h, x) {
      return typeof h == "function" ? t.events.on("mouseDown", (E) => h(E)) : t.events.on("mouseDown", (E) => E === h && x(E));
    }
    __name(yt, "yt");
    o(yt, "onMouseDown");
    function xt(h, x) {
      return typeof h == "function" ? t.events.on("mousePress", (E) => h(E)) : t.events.on("mousePress", (E) => E === h && x(E));
    }
    __name(xt, "xt");
    o(xt, "onMousePress");
    function Ie(h, x) {
      return typeof h == "function" ? t.events.on("mouseRelease", (E) => h(E)) : t.events.on("mouseRelease", (E) => E === h && x(E));
    }
    __name(Ie, "Ie");
    o(Ie, "onMouseRelease");
    function en(h) {
      return t.events.on("mouseMove", () => h(te(), ae()));
    }
    __name(en, "en");
    o(en, "onMouseMove");
    function tn(h) {
      return t.events.on("charInput", h);
    }
    __name(tn, "tn");
    o(tn, "onCharInput");
    function nn(h) {
      return t.events.on("touchStart", h);
    }
    __name(nn, "nn");
    o(nn, "onTouchStart");
    function rn(h) {
      return t.events.on("touchMove", h);
    }
    __name(rn, "rn");
    o(rn, "onTouchMove");
    function sn(h) {
      return t.events.on("touchEnd", h);
    }
    __name(sn, "sn");
    o(sn, "onTouchEnd");
    function on(h) {
      return t.events.on("scroll", h);
    }
    __name(on, "on");
    o(on, "onScroll");
    function Ut(h) {
      return t.events.on("hide", h);
    }
    __name(Ut, "Ut");
    o(Ut, "onHide");
    function Et(h) {
      return t.events.on("show", h);
    }
    __name(Et, "Et");
    o(Et, "onShow");
    function St(h, x) {
      if (typeof h == "function")
        return t.events.on("gamepadButtonDown", h);
      if (typeof h == "string" && typeof x == "function")
        return t.events.on("gamepadButtonDown", (E) => E === h && x(h));
    }
    __name(St, "St");
    o(St, "onGamepadButtonDown");
    function Ct(h, x) {
      if (typeof h == "function")
        return t.events.on("gamepadButtonPress", h);
      if (typeof h == "string" && typeof x == "function")
        return t.events.on("gamepadButtonPress", (E) => E === h && x(h));
    }
    __name(Ct, "Ct");
    o(Ct, "onGamepadButtonPress");
    function Tt(h, x) {
      if (typeof h == "function")
        return t.events.on("gamepadButtonRelease", h);
      if (typeof h == "string" && typeof x == "function")
        return t.events.on("gamepadButtonRelease", (E) => E === h && x(h));
    }
    __name(Tt, "Tt");
    o(Tt, "onGamepadButtonRelease");
    function an(h, x) {
      return t.events.on("gamepadStick", (E, L) => E === h && x(L));
    }
    __name(an, "an");
    o(an, "onGamepadStick");
    function it(h) {
      t.events.on("gamepadConnect", h);
    }
    __name(it, "it");
    o(it, "onGamepadConnect");
    function un(h) {
      t.events.on("gamepadDisconnect", h);
    }
    __name(un, "un");
    o(un, "onGamepadDisconnect");
    function cn(h) {
      return t.mergedGamepadState.stickState.get(h) || new y(0);
    }
    __name(cn, "cn");
    o(cn, "getGamepadStick");
    function At() {
      return [...t.charInputted];
    }
    __name(At, "At");
    o(At, "charInputted");
    function Ot() {
      return [...t.gamepads];
    }
    __name(Ot, "Ot");
    o(Ot, "getGamepads");
    function Pt() {
      t.events.trigger("input"), t.keyState.down.forEach((h) => t.events.trigger("keyDown", h)), t.mouseState.down.forEach((h) => t.events.trigger("mouseDown", h)), ot();
    }
    __name(Pt, "Pt");
    o(Pt, "processInput");
    function Mt() {
      t.keyState.update(), t.mouseState.update(), t.mergedGamepadState.buttonState.update(), t.mergedGamepadState.stickState.forEach((h, x) => {
        t.mergedGamepadState.stickState.set(x, new y(0));
      }), t.charInputted = [], t.isMouseMoved = false, t.gamepadStates.forEach((h) => {
        h.buttonState.update(), h.stickState.forEach((x, E) => {
          h.stickState.set(E, new y(0));
        });
      });
    }
    __name(Mt, "Mt");
    o(Mt, "resetInput");
    function Ke(h) {
      let x = { index: h.index, isPressed: (E) => t.gamepadStates.get(h.index).buttonState.pressed.has(E), isDown: (E) => t.gamepadStates.get(h.index).buttonState.down.has(E), isReleased: (E) => t.gamepadStates.get(h.index).buttonState.released.has(E), getStick: (E) => t.gamepadStates.get(h.index).stickState.get(E) };
      return t.gamepads.push(x), t.gamepadStates.set(h.index, { buttonState: new et(), stickState: /* @__PURE__ */ new Map([["left", new y(0)], ["right", new y(0)]]) }), x;
    }
    __name(Ke, "Ke");
    o(Ke, "registerGamepad");
    function ln(h) {
      t.gamepads = t.gamepads.filter((x) => x.index !== h.index), t.gamepadStates.delete(h.index);
    }
    __name(ln, "ln");
    o(ln, "removeGamepad");
    function ot() {
      var _a20, _b, _c;
      for (let h of navigator.getGamepads())
        h && !t.gamepadStates.has(h.index) && Ke(h);
      for (let h of t.gamepads) {
        let x = navigator.getGamepads()[h.index], L = (_c = (_b = ((_a20 = r.gamepads) != null ? _a20 : {})[x.id]) != null ? _b : Bn[x.id]) != null ? _c : Bn.default, me = t.gamepadStates.get(h.index);
        for (let Z = 0; Z < x.buttons.length; Z++)
          x.buttons[Z].pressed ? (me.buttonState.down.has(L.buttons[Z]) || (t.mergedGamepadState.buttonState.press(L.buttons[Z]), me.buttonState.press(L.buttons[Z]), t.events.trigger("gamepadButtonPress", L.buttons[Z])), t.events.trigger("gamepadButtonDown", L.buttons[Z])) : me.buttonState.down.has(L.buttons[Z]) && (t.mergedGamepadState.buttonState.release(L.buttons[Z]), me.buttonState.release(L.buttons[Z]), t.events.trigger("gamepadButtonRelease", L.buttons[Z]));
        for (let Z in L.sticks) {
          let Ye = L.sticks[Z], Te = new y(x.axes[Ye.x], x.axes[Ye.y]);
          me.stickState.set(Z, Te), t.mergedGamepadState.stickState.set(Z, Te), t.events.trigger("gamepadStick", Z, Te);
        }
      }
    }
    __name(ot, "ot");
    o(ot, "processGamepad");
    let z = {}, Ge = {}, Fe = {};
    z.mousemove = (h) => {
      let x = new y(h.offsetX, h.offsetY), E = new y(h.movementX, h.movementY);
      t.events.onOnce("input", () => {
        t.isMouseMoved = true, t.mousePos = x, t.mouseDeltaPos = E, t.events.trigger("mouseMove");
      });
    };
    let at = ["left", "middle", "right", "back", "forward"];
    z.mousedown = (h) => {
      t.events.onOnce("input", () => {
        let x = at[h.button];
        x && (t.mouseState.press(x), t.events.trigger("mousePress", x));
      });
    }, z.mouseup = (h) => {
      t.events.onOnce("input", () => {
        let x = at[h.button];
        x && (t.mouseState.release(x), t.events.trigger("mouseRelease", x));
      });
    };
    let hn = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]), Rt = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
    z.keydown = (h) => {
      hn.has(h.key) && h.preventDefault(), t.events.onOnce("input", () => {
        let x = Rt[h.key] || h.key.toLowerCase();
        x.length === 1 ? (t.events.trigger("charInput", x), t.charInputted.push(x)) : x === "space" && (t.events.trigger("charInput", " "), t.charInputted.push(" ")), h.repeat ? (t.keyState.pressRepeat(x), t.events.trigger("keyPressRepeat", x)) : (t.keyState.press(x), t.events.trigger("keyPressRepeat", x), t.events.trigger("keyPress", x));
      });
    }, z.keyup = (h) => {
      t.events.onOnce("input", () => {
        let x = Rt[h.key] || h.key.toLowerCase();
        t.keyState.release(x), t.events.trigger("keyRelease", x);
      });
    }, z.touchstart = (h) => {
      h.preventDefault(), t.events.onOnce("input", () => {
        let x = [...h.changedTouches], E = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new y(x[0].clientX - E.x, x[0].clientY - E.y), t.mouseState.press("left"), t.events.trigger("mousePress", "left")), x.forEach((L) => {
          t.events.trigger("touchStart", new y(L.clientX - E.x, L.clientY - E.y), L);
        });
      });
    }, z.touchmove = (h) => {
      h.preventDefault(), t.events.onOnce("input", () => {
        let x = [...h.changedTouches], E = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new y(x[0].clientX - E.x, x[0].clientY - E.y), t.events.trigger("mouseMove")), x.forEach((L) => {
          t.events.trigger("touchMove", new y(L.clientX - E.x, L.clientY - E.y), L);
        });
      });
    }, z.touchend = (h) => {
      t.events.onOnce("input", () => {
        let x = [...h.changedTouches], E = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new y(x[0].clientX - E.x, x[0].clientY - E.y), t.mouseState.release("left"), t.events.trigger("mouseRelease", "left")), x.forEach((L) => {
          t.events.trigger("touchEnd", new y(L.clientX - E.x, L.clientY - E.y), L);
        });
      });
    }, z.touchcancel = (h) => {
      t.events.onOnce("input", () => {
        let x = [...h.changedTouches], E = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new y(x[0].clientX - E.x, x[0].clientY - E.y), t.mouseState.release("left"), t.events.trigger("mouseRelease", "left")), x.forEach((L) => {
          t.events.trigger("touchEnd", new y(L.clientX - E.x, L.clientY - E.y), L);
        });
      });
    }, z.wheel = (h) => {
      h.preventDefault(), t.events.onOnce("input", () => {
        t.events.trigger("scroll", new y(h.deltaX, h.deltaY));
      });
    }, z.contextmenu = (h) => h.preventDefault(), Ge.visibilitychange = () => {
      document.visibilityState === "visible" ? (t.skipTime = true, t.events.trigger("show")) : t.events.trigger("hide");
    }, Fe.gamepadconnected = (h) => {
      let x = Ke(h.gamepad);
      t.events.onOnce("input", () => {
        t.events.trigger("gamepadConnect", x);
      });
    }, Fe.gamepaddisconnected = (h) => {
      let x = Ot().filter((E) => E.index === h.gamepad.index)[0];
      ln(h.gamepad), t.events.onOnce("input", () => {
        t.events.trigger("gamepadDisconnect", x);
      });
    };
    for (let h in z)
      t.canvas.addEventListener(h, z[h]);
    for (let h in Ge)
      document.addEventListener(h, Ge[h]);
    for (let h in Fe)
      window.addEventListener(h, Fe[h]);
    let Q = new ResizeObserver((h) => {
      for (let x of h)
        if (x.target === t.canvas) {
          if (t.lastWidth === t.canvas.offsetWidth && t.lastHeight === t.canvas.offsetHeight)
            return;
          t.lastWidth = t.canvas.offsetWidth, t.lastHeight = t.canvas.offsetHeight, t.events.onOnce("input", () => {
            t.events.trigger("resize");
          });
        }
    });
    return Q.observe(t.canvas), { dt: w, time: S, run: ce, canvas: u, fps: B, numFrames: $, quit: v, setFullscreen: fe, isFullscreen: De, setCursor: H, screenshot: N, getGamepads: Ot, getCursor: ee, setCursorLocked: oe, isCursorLocked: U, isTouchscreen: ge, mousePos: te, mouseDeltaPos: ae, isKeyDown: st, isKeyPressed: Ce, isKeyPressedRepeat: Yt, isKeyReleased: qe, isMouseDown: V, isMousePressed: ye, isMouseReleased: A, isMouseMoved: rt, isGamepadButtonPressed: Xt, isGamepadButtonDown: Wt, isGamepadButtonReleased: $e, getGamepadStick: cn, charInputted: At, onResize: Jt, onKeyDown: ze, onKeyPress: Qt, onKeyPressRepeat: Zt, onKeyRelease: bt, onMouseDown: yt, onMousePress: xt, onMouseRelease: Ie, onMouseMove: en, onCharInput: tn, onTouchStart: nn, onTouchMove: rn, onTouchEnd: sn, onScroll: on, onHide: Ut, onShow: Et, onGamepadButtonDown: St, onGamepadButtonPress: Ct, onGamepadButtonRelease: Tt, onGamepadStick: an, onGamepadConnect: it, onGamepadDisconnect: un, events: t.events, get paused() {
      return t.paused;
    }, set paused(h) {
      t.paused = h;
    } };
  }, "default");
  var Ht = 2.5949095;
  var Ar = 1.70158 + 1;
  var Or = 2 * Math.PI / 3;
  var Pr = 2 * Math.PI / 4.5;
  var qt = { linear: (r) => r, easeInSine: (r) => 1 - Math.cos(r * Math.PI / 2), easeOutSine: (r) => Math.sin(r * Math.PI / 2), easeInOutSine: (r) => -(Math.cos(Math.PI * r) - 1) / 2, easeInQuad: (r) => r * r, easeOutQuad: (r) => 1 - (1 - r) * (1 - r), easeInOutQuad: (r) => r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2, easeInCubic: (r) => r * r * r, easeOutCubic: (r) => 1 - Math.pow(1 - r, 3), easeInOutCubic: (r) => r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2, easeInQuart: (r) => r * r * r * r, easeOutQuart: (r) => 1 - Math.pow(1 - r, 4), easeInOutQuart: (r) => r < 0.5 ? 8 * r * r * r * r : 1 - Math.pow(-2 * r + 2, 4) / 2, easeInQuint: (r) => r * r * r * r * r, easeOutQuint: (r) => 1 - Math.pow(1 - r, 5), easeInOutQuint: (r) => r < 0.5 ? 16 * r * r * r * r * r : 1 - Math.pow(-2 * r + 2, 5) / 2, easeInExpo: (r) => r === 0 ? 0 : Math.pow(2, 10 * r - 10), easeOutExpo: (r) => r === 1 ? 1 : 1 - Math.pow(2, -10 * r), easeInOutExpo: (r) => r === 0 ? 0 : r === 1 ? 1 : r < 0.5 ? Math.pow(2, 20 * r - 10) / 2 : (2 - Math.pow(2, -20 * r + 10)) / 2, easeInCirc: (r) => 1 - Math.sqrt(1 - Math.pow(r, 2)), easeOutCirc: (r) => Math.sqrt(1 - Math.pow(r - 1, 2)), easeInOutCirc: (r) => r < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * r, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * r + 2, 2)) + 1) / 2, easeInBack: (r) => Ar * r * r * r - 1.70158 * r * r, easeOutBack: (r) => 1 + Ar * Math.pow(r - 1, 3) + 1.70158 * Math.pow(r - 1, 2), easeInOutBack: (r) => r < 0.5 ? Math.pow(2 * r, 2) * ((Ht + 1) * 2 * r - Ht) / 2 : (Math.pow(2 * r - 2, 2) * ((Ht + 1) * (r * 2 - 2) + Ht) + 2) / 2, easeInElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : -Math.pow(2, 10 * r - 10) * Math.sin((r * 10 - 10.75) * Or), easeOutElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : Math.pow(2, -10 * r) * Math.sin((r * 10 - 0.75) * Or) + 1, easeInOutElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : r < 0.5 ? -(Math.pow(2, 20 * r - 10) * Math.sin((20 * r - 11.125) * Pr)) / 2 : Math.pow(2, -20 * r + 10) * Math.sin((20 * r - 11.125) * Pr) / 2 + 1, easeInBounce: (r) => 1 - qt.easeOutBounce(1 - r), easeOutBounce: (r) => r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375, easeInOutBounce: (r) => r < 0.5 ? (1 - qt.easeOutBounce(1 - 2 * r)) / 2 : (1 + qt.easeOutBounce(2 * r - 1)) / 2 };
  var tt = qt;
  var _a19;
  var vt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a19 = class {
    constructor(t, u) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = t, this.action = u;
    }
    tick(t) {
      return this.finished || this.paused ? false : (this.time -= t, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(t) {
      this.time = t, this.finished = false;
    }
  }, "_this"), (() => {
    o(_a19, "Timer");
  })(), _a19), "vt");
  var Mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Rr = cr("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var Dr = "data:image/png;base64,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";
  var Gr = "data:image/png;base64,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";
  var xi = "3000.1.0";
  var Fr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var $t = "topleft";
  var Br = 64;
  var Ui = "monospace";
  var zt = "monospace";
  var Ei = 36;
  var Lr = 64;
  var Ir = 256;
  var Vr = 2048;
  var Nr = 2048;
  var jr = 2048;
  var kr = 2048;
  var _r = 0.1;
  var Si = 64;
  var Hr = "nearest";
  var Ci = 8;
  var Ti = 4;
  var zr = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var Kt = zr.reduce((r, t) => r + t.size, 0);
  var Kr = 2048;
  var qr = Kr * 4 * Kt;
  var $r = Kr * 6;
  var Ai = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Oi = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Vn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var Nn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var Pi = /* @__PURE__ */ new Set(["id", "require"]);
  var Mi = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function nt(r) {
    switch (r) {
      case "topleft":
        return new y(-1, -1);
      case "top":
        return new y(0, -1);
      case "topright":
        return new y(1, -1);
      case "left":
        return new y(-1, 0);
      case "center":
        return new y(0, 0);
      case "right":
        return new y(1, 0);
      case "botleft":
        return new y(-1, 1);
      case "bot":
        return new y(0, 1);
      case "botright":
        return new y(1, 1);
      default:
        return r;
    }
  }
  __name(nt, "nt");
  o(nt, "anchorPt");
  function Ri(r) {
    switch (r) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(Ri, "Ri");
  o(Ri, "alignPt");
  function Di(r) {
    return r.createBuffer(1, 1, 44100);
  }
  __name(Di, "Di");
  o(Di, "createEmptyAudioBuffer");
  var ho = o((r = {}) => {
    var _a20, _b, _c;
    let t = (_a20 = r.root) != null ? _a20 : document.body;
    t === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let u = (_b = r.canvas) != null ? _b : (() => {
      let e = document.createElement("canvas");
      return t.appendChild(e), e;
    })(), w = (_c = r.scale) != null ? _c : 1, S = r.width && r.height && !r.stretch && !r.letterbox;
    S ? (u.width = r.width * w, u.height = r.height * w) : (u.width = u.parentElement.offsetWidth, u.height = u.parentElement.offsetHeight);
    let B = u.width, $ = u.height, N = r.pixelDensity || window.devicePixelRatio;
    u.width *= N, u.height *= N;
    let H = ["outline: none", "cursor: default"];
    S ? (H.push(`width: ${B}px`), H.push(`height: ${$}px`)) : (H.push("width: 100%"), H.push("height: 100%")), r.crisp && (H.push("image-rendering: pixelated"), H.push("image-rendering: crisp-edges")), u.style.cssText = H.join(";"), u.tabIndex = 0;
    let ee = document.createElement("canvas");
    ee.width = Ir, ee.height = Ir;
    let oe = ee.getContext("2d", { willReadFrequently: true }), U = Tr({ canvas: u, touchToMouse: r.touchToMouse, gamepads: r.gamepads, pixelDensity: r.pixelDensity, maxFPS: r.maxFPS }), X = [], d = U.canvas().getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    const _W = class {
      constructor(n, s, i = {}) {
        __publicField(this, "src", null);
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = d.createTexture(), X.push(() => this.free()), this.bind(), n && s && d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, n, s, 0, d.RGBA, d.UNSIGNED_BYTE, null), this.width = n, this.height = s;
        let a = (() => {
          var _a21;
          switch ((_a21 = i.filter) != null ? _a21 : r.texFilter) {
            case "linear":
              return d.LINEAR;
            case "nearest":
              return d.NEAREST;
            default:
              return d.NEAREST;
          }
        })(), c = (() => {
          switch (i.wrap) {
            case "repeat":
              return d.REPEAT;
            case "clampToEdge":
              return d.CLAMP_TO_EDGE;
            default:
              return d.CLAMP_TO_EDGE;
          }
        })();
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, a), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, a), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, c), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, c), this.unbind();
      }
      static fromImage(n, s = {}) {
        let i = new _W(0, 0, s);
        return i.bind(), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, d.UNSIGNED_BYTE, n), i.width = n.width, i.height = n.height, i.unbind(), i.src = n, i;
      }
      update(n, s = 0, i = 0) {
        this.bind(), d.texSubImage2D(d.TEXTURE_2D, 0, s, i, d.RGBA, d.UNSIGNED_BYTE, n), this.unbind();
      }
      bind() {
        d.bindTexture(d.TEXTURE_2D, this.glTex);
      }
      unbind() {
        d.bindTexture(d.TEXTURE_2D, null);
      }
      free() {
        d.deleteTexture(this.glTex);
      }
    };
    let W = _W;
    __name(W, "W");
    (() => {
      o(_W, "Texture");
    })();
    const _fe = class {
      constructor(n, s) {
        __publicField(this, "tex");
        __publicField(this, "canvas");
        __publicField(this, "ctx");
        __publicField(this, "x", 0);
        __publicField(this, "y", 0);
        __publicField(this, "curHeight", 0);
        this.canvas = document.createElement("canvas"), this.canvas.width = n, this.canvas.height = s, this.tex = W.fromImage(this.canvas), this.ctx = this.canvas.getContext("2d");
      }
      add(n) {
        if (n.width > this.canvas.width || n.height > this.canvas.height)
          throw new Error(`Texture size (${n.width} x ${n.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
        this.x + n.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + n.height > this.canvas.height && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tex = W.fromImage(this.canvas), this.x = 0, this.y = 0, this.curHeight = 0);
        let s = new y(this.x, this.y);
        return this.x += n.width, n.height > this.curHeight && (this.curHeight = n.height), n instanceof ImageData ? this.ctx.putImageData(n, s.x, s.y) : this.ctx.drawImage(n, s.x, s.y), this.tex.update(this.canvas), [this.tex, new ue(s.x / this.canvas.width, s.y / this.canvas.height, n.width / this.canvas.width, n.height / this.canvas.height)];
      }
    };
    let fe = _fe;
    __name(fe, "fe");
    (() => {
      o(_fe, "TexPacker");
    })();
    const _De = class {
      constructor(n, s, i = {}) {
        __publicField(this, "tex");
        __publicField(this, "glFrameBuffer");
        __publicField(this, "glRenderBuffer");
        this.tex = new W(n, s, i), this.glFrameBuffer = d.createFramebuffer(), this.glRenderBuffer = d.createRenderbuffer(), X.push(() => this.free()), this.bind(), d.renderbufferStorage(d.RENDERBUFFER, d.DEPTH_STENCIL, n, s), d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0, d.TEXTURE_2D, this.tex.glTex, 0), d.framebufferRenderbuffer(d.FRAMEBUFFER, d.DEPTH_STENCIL_ATTACHMENT, d.RENDERBUFFER, this.glRenderBuffer), this.unbind();
      }
      get width() {
        return this.tex.width;
      }
      get height() {
        return this.tex.height;
      }
      bind() {
        d.bindFramebuffer(d.FRAMEBUFFER, this.glFrameBuffer), d.bindRenderbuffer(d.RENDERBUFFER, this.glRenderBuffer);
      }
      unbind() {
        d.bindFramebuffer(d.FRAMEBUFFER, null), d.bindRenderbuffer(d.RENDERBUFFER, null);
      }
      free() {
        d.deleteFramebuffer(this.glFrameBuffer), d.deleteRenderbuffer(this.glRenderBuffer), this.tex.free();
      }
    };
    let De = _De;
    __name(De, "De");
    (() => {
      o(_De, "FrameBuffer");
    })();
    let v = (() => {
      var _a21, _b2, _c2;
      let e = Ke(Vn, Nn), n = W.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), s = r.width && r.height ? new De(r.width * N, r.height * N) : new De(d.drawingBufferWidth, d.drawingBufferHeight), i = null, a = 1;
      r.background && (i = q.fromArray(r.background), a = (_a21 = r.background[3]) != null ? _a21 : 1, d.clearColor(i.r / 255, i.g / 255, i.b / 255, a)), d.enable(d.BLEND), d.enable(d.SCISSOR_TEST), d.blendFuncSeparate(d.SRC_ALPHA, d.ONE_MINUS_SRC_ALPHA, d.ONE, d.ONE_MINUS_SRC_ALPHA);
      let c = d.createBuffer();
      d.bindBuffer(d.ARRAY_BUFFER, c), d.bufferData(d.ARRAY_BUFFER, qr * 4, d.DYNAMIC_DRAW), zr.reduce((m, l, p) => (d.vertexAttribPointer(p, l.size, d.FLOAT, false, Kt * 4, m), d.enableVertexAttribArray(p), m + l.size * 4), 0), d.bindBuffer(d.ARRAY_BUFFER, null);
      let f = d.createBuffer();
      d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, f), d.bufferData(d.ELEMENT_ARRAY_BUFFER, $r * 4, d.DYNAMIC_DRAW), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, null);
      let g = W.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e, curShader: e, frameBuffer: s, postShader: null, postShaderUniform: null, defTex: n, curTex: n, curUniform: {}, vbuf: c, ibuf: f, vqueue: [], iqueue: [], transform: new be(), transformStack: [], bgTex: g, bgColor: i, bgAlpha: a, width: (_b2 = r.width) != null ? _b2 : d.drawingBufferWidth / N / w, height: (_c2 = r.height) != null ? _c2 : d.drawingBufferHeight / N / w, viewport: { x: 0, y: 0, width: d.drawingBufferWidth, height: d.drawingBufferHeight }, fixed: false };
    })();
    const _ce = class {
      constructor(n, s, i = {}, a = null) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new ue(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        __publicField(this, "slice9", null);
        this.tex = n, s && (this.frames = s), this.anims = i, this.slice9 = a;
      }
      static from(n, s = {}) {
        return typeof n == "string" ? _ce.fromURL(n, s) : Promise.resolve(_ce.fromImage(n, s));
      }
      static fromImage(n, s = {}) {
        let [i, a] = V.packer.add(n), c = s.frames ? s.frames.map((f) => new ue(a.x + f.x * a.w, a.y + f.y * a.h, f.w * a.w, f.h * a.h)) : bt(s.sliceX || 1, s.sliceY || 1, a.x, a.y, a.w, a.h);
        return new _ce(i, c, s.anims, s.slice9);
      }
      static fromURL(n, s = {}) {
        return $e(n).then((i) => _ce.fromImage(i, s));
      }
    };
    let ce = _ce;
    __name(ce, "ce");
    (() => {
      o(_ce, "SpriteData");
    })();
    const _ge = class {
      constructor(n) {
        __publicField(this, "buf");
        this.buf = n;
      }
      static fromArrayBuffer(n) {
        return new Promise((s, i) => te.ctx.decodeAudioData(n, s, i)).then((s) => new _ge(s));
      }
      static fromURL(n) {
        return Fn(n) ? _ge.fromArrayBuffer(Ur(n)) : Wt(n).then((s) => _ge.fromArrayBuffer(s));
      }
    };
    let ge = _ge;
    __name(ge, "ge");
    (() => {
      o(_ge, "SoundData");
    })();
    let te = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), n = e.createGain();
      n.connect(e.destination);
      let s = new ge(Di(e));
      return e.decodeAudioData(Rr.buffer.slice(0)).then((i) => {
        s.buf = i;
      }).catch((i) => {
        console.error("Failed to load burp: ", i);
      }), { ctx: e, masterNode: n, burpSnd: s };
    })();
    const _ae = class {
      constructor(n) {
        __publicField(this, "loaded", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new ve());
        __publicField(this, "onErrorEvents", new ve());
        __publicField(this, "onFinishEvents", new ve());
        n.then((s) => {
          this.data = s, this.onLoadEvents.trigger(s);
        }).catch((s) => {
          if (this.error = s, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(s);
          else
            throw s;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.loaded = true;
        });
      }
      static loaded(n) {
        let s = new _ae(Promise.resolve(n));
        return s.data = n, s.loaded = true, s;
      }
      onLoad(n) {
        return this.loaded && this.data ? n(this.data) : this.onLoadEvents.add(n), this;
      }
      onError(n) {
        return this.loaded && this.error ? n(this.error) : this.onErrorEvents.add(n), this;
      }
      onFinish(n) {
        return this.loaded ? n() : this.onFinishEvents.add(n), this;
      }
      then(n) {
        return this.onLoad(n);
      }
      catch(n) {
        return this.onError(n);
      }
      finally(n) {
        return this.onFinish(n);
      }
    };
    let ae = _ae;
    __name(ae, "ae");
    (() => {
      o(_ae, "Asset");
    })();
    const _ye = class {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(n, s) {
        let i = n != null ? n : this.lastUID++ + "", a = new ae(s);
        return this.assets.set(i, a), a;
      }
      addLoaded(n, s) {
        let i = n != null ? n : this.lastUID++ + "", a = ae.loaded(s);
        return this.assets.set(i, a), a;
      }
      get(n) {
        return this.assets.get(n);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let n = 0;
        return this.assets.forEach((s) => {
          s.loaded && n++;
        }), n / this.assets.size;
      }
    };
    let ye = _ye;
    __name(ye, "ye");
    (() => {
      o(_ye, "AssetBucket");
    })();
    let V = { urlPrefix: "", sprites: new ye(), fonts: new ye(), bitmapFonts: new ye(), sounds: new ye(), shaders: new ye(), custom: new ye(), packer: new fe(jr, kr), loaded: false }, A = { events: new Re(), objEvents: new Re(), root: fn([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: new y(1), angle: 0, shake: 0, transform: new be() } };
    function rt(e) {
      return V.custom.add(null, e);
    }
    __name(rt, "rt");
    o(rt, "load");
    function Ce() {
      let e = [V.sprites, V.sounds, V.shaders, V.fonts, V.bitmapFonts, V.custom];
      return e.reduce((n, s) => n + s.progress(), 0) / e.length;
    }
    __name(Ce, "Ce");
    o(Ce, "loadProgress");
    function Yt(e) {
      return e !== void 0 && (V.urlPrefix = e), V.urlPrefix;
    }
    __name(Yt, "Yt");
    o(Yt, "loadRoot");
    function st(e) {
      let n = V.urlPrefix + e;
      return fetch(n).then((s) => {
        if (!s.ok)
          throw new Error(`Failed to fetch ${n}`);
        return s;
      });
    }
    __name(st, "st");
    o(st, "fetchURL");
    function qe(e) {
      return st(e).then((n) => n.json());
    }
    __name(qe, "qe");
    o(qe, "fetchJSON");
    function Xt(e) {
      return st(e).then((n) => n.text());
    }
    __name(Xt, "Xt");
    o(Xt, "fetchText");
    function Wt(e) {
      return st(e).then((n) => n.arrayBuffer());
    }
    __name(Wt, "Wt");
    o(Wt, "fetchArrayBuffer");
    function $e(e) {
      let n = new Image();
      return n.crossOrigin = "anonymous", n.src = Fn(e) ? e : V.urlPrefix + e, new Promise((s, i) => {
        n.onload = () => s(n), n.onerror = () => i(new Error(`Failed to load image from "${e}"`));
      });
    }
    __name($e, "$e");
    o($e, "loadImg");
    function Jt(e, n) {
      return V.custom.add(e, qe(n));
    }
    __name(Jt, "Jt");
    o(Jt, "loadJSON");
    const _ze = class {
      constructor(n, s = {}) {
        __publicField(this, "fontface");
        __publicField(this, "outline");
        __publicField(this, "filter");
        var _a21, _b2;
        this.fontface = n, this.outline = (_a21 = s.outline) != null ? _a21 : 0, this.filter = (_b2 = s.filter) != null ? _b2 : Hr;
      }
    };
    let ze = _ze;
    __name(ze, "ze");
    (() => {
      o(_ze, "FontData");
    })();
    function Qt(e, n, s = {}) {
      let i = new FontFace(e, typeof n == "string" ? `url(${n})` : n);
      return document.fonts.add(i), V.fonts.add(e, i.load().catch((a) => {
        throw new Error(`Failed to load font from "${n}": ${a}`);
      }).then((a) => new ze(a, s)));
    }
    __name(Qt, "Qt");
    o(Qt, "loadFont");
    function Zt(e, n, s, i, a = {}) {
      return V.bitmapFonts.add(e, $e(n).then((c) => {
        var _a21;
        return ln(W.fromImage(c, a), s, i, (_a21 = a.chars) != null ? _a21 : Fr);
      }));
    }
    __name(Zt, "Zt");
    o(Zt, "loadBitmapFont");
    function bt(e = 1, n = 1, s = 0, i = 0, a = 1, c = 1) {
      let f = [], g = a / e, m = c / n;
      for (let l = 0; l < n; l++)
        for (let p = 0; p < e; p++)
          f.push(new ue(s + p * g, i + l * m, g, m));
      return f;
    }
    __name(bt, "bt");
    o(bt, "slice");
    function yt(e, n) {
      return rt(typeof n == "string" ? new Promise((s, i) => {
        qe(n).then((a) => {
          yt(e, a).then(s).catch(i);
        });
      }) : ce.from(e).then((s) => {
        let i = {};
        for (let a in n) {
          let c = n[a], f = s.frames[0], g = jr * f.w, m = kr * f.h, l = c.frames ? c.frames.map((C) => new ue(f.x + (c.x + C.x) / g * f.w, f.y + (c.y + C.y) / m * f.h, C.w / g * f.w, C.h / m * f.h)) : bt(c.sliceX || 1, c.sliceY || 1, f.x + c.x / g * f.w, f.y + c.y / m * f.h, c.width / g * f.w, c.height / m * f.h), p = new ce(s.tex, l, c.anims);
          V.sprites.addLoaded(a, p), i[a] = p;
        }
        return i;
      }));
    }
    __name(yt, "yt");
    o(yt, "loadSpriteAtlas");
    function xt(e, n = {}) {
      let s = document.createElement("canvas"), i = e[0].width, a = e[0].height;
      s.width = i * e.length, s.height = a;
      let c = s.getContext("2d");
      e.forEach((g, m) => {
        g instanceof ImageData ? c.putImageData(g, m * i, 0) : c.drawImage(g, m * i, 0);
      });
      let f = c.getImageData(0, 0, e.length * i, a);
      return ce.fromImage(f, __spreadProps(__spreadValues({}, n), { sliceX: e.length, sliceY: 1 }));
    }
    __name(xt, "xt");
    o(xt, "createSpriteSheet");
    function Ie(e, n, s = { sliceX: 1, sliceY: 1, anims: {} }) {
      return Array.isArray(n) ? n.some((i) => typeof i == "string") ? V.sprites.add(e, Promise.all(n.map((i) => typeof i == "string" ? $e(i) : Promise.resolve(i))).then((i) => xt(i, s))) : V.sprites.addLoaded(e, xt(n, s)) : typeof n == "string" ? V.sprites.add(e, ce.from(n, s)) : V.sprites.addLoaded(e, ce.fromImage(n, s));
    }
    __name(Ie, "Ie");
    o(Ie, "loadSprite");
    function en(e, n) {
      return V.sprites.add(e, new Promise((s) => __async(this, null, function* () {
        let i = typeof n == "string" ? yield qe(n) : n, a = yield Promise.all(i.frames.map($e)), c = document.createElement("canvas");
        c.width = i.width, c.height = i.height * i.frames.length;
        let f = c.getContext("2d");
        a.forEach((m, l) => {
          f.drawImage(m, 0, l * i.height);
        });
        let g = yield Ie(null, c, { sliceY: i.frames.length, anims: i.anims });
        s(g);
      })));
    }
    __name(en, "en");
    o(en, "loadPedit");
    function tn(e, n, s) {
      typeof n == "string" && !s && (s = n.replace(new RegExp(`${Sr(n)}$`), "json"));
      let i = typeof s == "string" ? qe(s) : Promise.resolve(s);
      return V.sprites.add(e, i.then((a) => {
        let c = a.meta.size, f = a.frames.map((m) => new ue(m.frame.x / c.w, m.frame.y / c.h, m.frame.w / c.w, m.frame.h / c.h)), g = {};
        for (let m of a.meta.frameTags)
          m.from === m.to ? g[m.name] = m.from : g[m.name] = { from: m.from, to: m.to, speed: 10, loop: true, pingpong: m.direction === "pingpong" };
        return ce.from(n, { frames: f, anims: g });
      }));
    }
    __name(tn, "tn");
    o(tn, "loadAseprite");
    function nn(e, n, s) {
      return V.shaders.addLoaded(e, Ke(n, s));
    }
    __name(nn, "nn");
    o(nn, "loadShader");
    function rn(e, n, s) {
      let i = o((c) => c ? Xt(c) : Promise.resolve(null), "resolveUrl"), a = Promise.all([i(n), i(s)]).then(([c, f]) => Ke(c, f));
      return V.shaders.add(e, a);
    }
    __name(rn, "rn");
    o(rn, "loadShaderURL");
    function sn(e, n) {
      return V.sounds.add(e, typeof n == "string" ? ge.fromURL(n) : ge.fromArrayBuffer(n));
    }
    __name(sn, "sn");
    o(sn, "loadSound");
    function on(e = "bean") {
      return Ie(e, Mr);
    }
    __name(on, "on");
    o(on, "loadBean");
    function Ut(e) {
      return V.sprites.get(e);
    }
    __name(Ut, "Ut");
    o(Ut, "getSprite");
    function Et(e) {
      return V.sounds.get(e);
    }
    __name(Et, "Et");
    o(Et, "getSound");
    function St(e) {
      return V.fonts.get(e);
    }
    __name(St, "St");
    o(St, "getFont");
    function Ct(e) {
      return V.bitmapFonts.get(e);
    }
    __name(Ct, "Ct");
    o(Ct, "getBitmapFont");
    function Tt(e) {
      return V.shaders.get(e);
    }
    __name(Tt, "Tt");
    o(Tt, "getShader");
    function an(e) {
      return V.custom.get(e);
    }
    __name(an, "an");
    o(an, "getAsset");
    function it(e) {
      if (typeof e == "string") {
        let n = Ut(e);
        if (n)
          return n;
        if (Ce() < 1)
          return null;
        throw new Error(`Sprite not found: ${e}`);
      } else {
        if (e instanceof ce)
          return ae.loaded(e);
        if (e instanceof ae)
          return e;
        throw new Error(`Invalid sprite: ${e}`);
      }
    }
    __name(it, "it");
    o(it, "resolveSprite");
    function un(e) {
      if (typeof e == "string") {
        let n = Et(e);
        if (n)
          return n;
        if (Ce() < 1)
          return null;
        throw new Error(`Sound not found: ${e}`);
      } else {
        if (e instanceof ge)
          return ae.loaded(e);
        if (e instanceof ae)
          return e;
        throw new Error(`Invalid sound: ${e}`);
      }
    }
    __name(un, "un");
    o(un, "resolveSound");
    function cn(e) {
      var _a21;
      if (!e)
        return v.defShader;
      if (typeof e == "string") {
        let n = Tt(e);
        if (n)
          return (_a21 = n.data) != null ? _a21 : n;
        if (Ce() < 1)
          return null;
        throw new Error(`Shader not found: ${e}`);
      } else if (e instanceof ae)
        return e.data ? e.data : e;
      return e;
    }
    __name(cn, "cn");
    o(cn, "resolveShader");
    function At(e) {
      var _a21, _b2, _c2;
      if (!e)
        return At((_a21 = r.font) != null ? _a21 : Ui);
      if (typeof e == "string") {
        let n = Ct(e), s = St(e);
        if (n)
          return (_b2 = n.data) != null ? _b2 : n;
        if (s)
          return (_c2 = s.data) != null ? _c2 : s;
        if (document.fonts.check(`${Lr}px ${e}`))
          return e;
        if (Ce() < 1)
          return null;
        throw new Error(`Font not found: ${e}`);
      } else if (e instanceof ae)
        return e.data ? e.data : e;
      return e;
    }
    __name(At, "At");
    o(At, "resolveFont");
    function Ot(e) {
      return e !== void 0 && (te.masterNode.gain.value = e), te.masterNode.gain.value;
    }
    __name(Ot, "Ot");
    o(Ot, "volume");
    function Pt(e, n = {}) {
      var _a21, _b2, _c2, _d, _e;
      let s = te.ctx, i = (_a21 = n.paused) != null ? _a21 : false, a = s.createBufferSource(), c = new ve(), f = s.createGain(), g = (_b2 = n.seek) != null ? _b2 : 0, m = 0, l = 0, p = false;
      a.loop = !!n.loop, a.detune.value = (_c2 = n.detune) != null ? _c2 : 0, a.playbackRate.value = (_d = n.speed) != null ? _d : 1, a.connect(f), a.onended = () => {
        var _a22;
        G() >= ((_a22 = a.buffer) == null ? void 0 : _a22.duration) && c.trigger();
      }, f.connect(te.masterNode), f.gain.value = (_e = n.volume) != null ? _e : 1;
      let C = o((M) => {
        a.buffer = M.buf, i || (m = s.currentTime, a.start(0, g), p = true);
      }, "start"), R = un(e);
      R instanceof ae && R.onLoad(C);
      let G = o(() => {
        if (!a.buffer)
          return 0;
        let M = i ? l - m : s.currentTime - m, O = a.buffer.duration;
        return a.loop ? M % O : Math.min(M, O);
      }, "getTime"), k = o((M) => {
        let O = s.createBufferSource();
        return O.buffer = M.buffer, O.loop = M.loop, O.playbackRate.value = M.playbackRate.value, O.detune.value = M.detune.value, O.onended = M.onended, O.connect(f), O;
      }, "cloneNode");
      return { set paused(M) {
        if (i !== M)
          if (i = M, M)
            p && (a.stop(), p = false), l = s.currentTime;
          else {
            a = k(a);
            let O = l - m;
            a.start(0, O), p = true, m = s.currentTime - O, l = 0;
          }
      }, get paused() {
        return i;
      }, play(M = 0) {
        this.seek(M), this.paused = false;
      }, seek(M) {
        var _a22;
        ((_a22 = a.buffer) == null ? void 0 : _a22.duration) && (M > a.buffer.duration || (i ? (a = k(a), m = l - M) : (a.stop(), a = k(a), m = s.currentTime - M, a.start(0, M), p = true, l = 0)));
      }, set speed(M) {
        a.playbackRate.value = M;
      }, get speed() {
        return a.playbackRate.value;
      }, set detune(M) {
        a.detune.value = M;
      }, get detune() {
        return a.detune.value;
      }, set volume(M) {
        f.gain.value = Math.max(M, 0);
      }, get volume() {
        return f.gain.value;
      }, set loop(M) {
        a.loop = M;
      }, get loop() {
        return a.loop;
      }, duration() {
        var _a22, _b3;
        return (_b3 = (_a22 = a.buffer) == null ? void 0 : _a22.duration) != null ? _b3 : 0;
      }, time() {
        return G() % this.duration();
      }, onEnd(M) {
        return c.add(M);
      }, then(M) {
        return this.onEnd(M);
      } };
    }
    __name(Pt, "Pt");
    o(Pt, "play");
    function Mt(e) {
      return Pt(te.burpSnd, e);
    }
    __name(Mt, "Mt");
    o(Mt, "burp");
    function Ke(e = Vn, n = Nn) {
      let s = Ai.replace("{{user}}", e != null ? e : Vn), i = Oi.replace("{{user}}", n != null ? n : Nn), a = d.createShader(d.VERTEX_SHADER), c = d.createShader(d.FRAGMENT_SHADER);
      d.shaderSource(a, s), d.shaderSource(c, i), d.compileShader(a), d.compileShader(c);
      let f = d.createProgram();
      if (X.push(() => d.deleteProgram(f)), d.attachShader(f, a), d.attachShader(f, c), d.bindAttribLocation(f, 0, "a_pos"), d.bindAttribLocation(f, 1, "a_uv"), d.bindAttribLocation(f, 2, "a_color"), d.linkProgram(f), !d.getProgramParameter(f, d.LINK_STATUS)) {
        let g = o((C) => {
          let R = new RegExp("^ERROR:\\s0:(?<line>\\d+):\\s(?<msg>.+)"), G = C.match(R);
          return { line: Number(G.groups.line), msg: G.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), m = d.getShaderInfoLog(a), l = d.getShaderInfoLog(c), p = "";
        if (m) {
          let C = g(m);
          p += `Vertex shader line ${C.line - 14}: ${C.msg}`;
        }
        if (l) {
          let C = g(l);
          p += `Fragment shader line ${C.line - 14}: ${C.msg}`;
        }
        throw new Error(p);
      }
      return d.deleteShader(a), d.deleteShader(c), { bind() {
        d.useProgram(f);
      }, unbind() {
        d.useProgram(null);
      }, free() {
        d.deleteProgram(f);
      }, send(g) {
        for (let m in g) {
          let l = g[m], p = d.getUniformLocation(f, m);
          typeof l == "number" ? d.uniform1f(p, l) : l instanceof be ? d.uniformMatrix4fv(p, false, new Float32Array(l.m)) : l instanceof q ? d.uniform3f(p, l.r, l.g, l.b) : l instanceof y && d.uniform2f(p, l.x, l.y);
        }
      } };
    }
    __name(Ke, "Ke");
    o(Ke, "makeShader");
    function ln(e, n, s, i) {
      let a = e.width / n, c = {}, f = i.split("").entries();
      for (let [g, m] of f)
        c[m] = new ue(g % a * n, Math.floor(g / a) * s, n, s);
      return { tex: e, map: c, size: s };
    }
    __name(ln, "ln");
    o(ln, "makeFont");
    function ot(e, n, s, i = v.defTex, a = v.defShader, c = {}) {
      let f = cn(a);
      if (!f || f instanceof ae)
        return;
      (i !== v.curTex || f !== v.curShader || !Rn(v.curUniform, c) || v.vqueue.length + e.length * Kt > qr || v.iqueue.length + n.length > $r) && z();
      let g = v.fixed || s ? v.transform : A.cam.transform.mult(v.transform);
      for (let m of e) {
        let l = hn(g.multVec2(m.pos));
        v.vqueue.push(l.x, l.y, m.uv.x, m.uv.y, m.color.r / 255, m.color.g / 255, m.color.b / 255, m.opacity);
      }
      for (let m of n)
        v.iqueue.push(m + v.vqueue.length / Kt - e.length);
      v.curTex = i, v.curShader = f, v.curUniform = c;
    }
    __name(ot, "ot");
    o(ot, "drawRaw");
    function z() {
      !v.curTex || !v.curShader || v.vqueue.length === 0 || v.iqueue.length === 0 || (d.bindBuffer(d.ARRAY_BUFFER, v.vbuf), d.bufferSubData(d.ARRAY_BUFFER, 0, new Float32Array(v.vqueue)), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, v.ibuf), d.bufferSubData(d.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(v.iqueue)), v.curShader.bind(), v.curShader.send(v.curUniform), v.curTex.bind(), d.drawElements(d.TRIANGLES, v.iqueue.length, d.UNSIGNED_SHORT, 0), v.curTex.unbind(), v.curShader.unbind(), d.bindBuffer(d.ARRAY_BUFFER, null), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, null), v.vqueue.length = 0, v.iqueue.length = 0, v.drawCalls++);
    }
    __name(z, "z");
    o(z, "flush");
    function Ge() {
      d.clear(d.COLOR_BUFFER_BIT), v.frameBuffer.bind(), d.viewport(0, 0, v.frameBuffer.width, v.frameBuffer.height), d.clear(d.COLOR_BUFFER_BIT), v.bgColor || Be(() => {
        me({ width: pe(), height: we(), quad: new ue(0, 0, pe() / Br, we() / Br), tex: v.bgTex, fixed: true });
      }), v.drawCalls = 0, v.fixed = false, v.transformStack.length = 0, v.transform = new be();
    }
    __name(Ge, "Ge");
    o(Ge, "frameStart");
    function Fe(e, n) {
      v.postShader = e, v.postShaderUniform = n != null ? n : null;
    }
    __name(Fe, "Fe");
    o(Fe, "usePostEffect");
    function at() {
      z(), v.frameBuffer.unbind(), d.viewport(0, 0, d.drawingBufferWidth, d.drawingBufferHeight), z();
      let e = v.width, n = v.height;
      v.width = d.drawingBufferWidth / N, v.height = d.drawingBufferHeight / N, Z({ flipY: true, tex: v.frameBuffer.tex, pos: new y(v.viewport.x, v.viewport.y), width: v.viewport.width, height: v.viewport.height, shader: v.postShader, uniform: typeof v.postShaderUniform == "function" ? v.postShaderUniform() : v.postShaderUniform, fixed: true }), z(), v.width = e, v.height = n, v.lastDrawCalls = v.drawCalls;
    }
    __name(at, "at");
    o(at, "frameEnd");
    function hn(e) {
      return new y(e.x / pe() * 2 - 1, -e.y / we() * 2 + 1);
    }
    __name(hn, "hn");
    o(hn, "screen2ndc");
    function Rt(e) {
      v.transform = e.clone();
    }
    __name(Rt, "Rt");
    o(Rt, "pushMatrix");
    function Q(...e) {
      if (e[0] === void 0)
        return;
      let n = T(...e);
      n.x === 0 && n.y === 0 || v.transform.translate(n);
    }
    __name(Q, "Q");
    o(Q, "pushTranslate");
    function h(...e) {
      if (e[0] === void 0)
        return;
      let n = T(...e);
      n.x === 1 && n.y === 1 || v.transform.scale(n);
    }
    __name(h, "h");
    o(h, "pushScale");
    function x(e) {
      e && v.transform.rotate(e);
    }
    __name(x, "x");
    o(x, "pushRotate");
    function E() {
      v.transformStack.push(v.transform.clone());
    }
    __name(E, "E");
    o(E, "pushTransform");
    function L() {
      v.transformStack.length > 0 && (v.transform = v.transformStack.pop());
    }
    __name(L, "L");
    o(L, "popTransform");
    function me(e) {
      var _a21;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, s = e.height, a = nt(e.anchor || $t).scale(new y(n, s).scale(-0.5)), c = e.quad || new ue(0, 0, 1, 1), f = e.color || J(255, 255, 255), g = (_a21 = e.opacity) != null ? _a21 : 1, m = e.tex ? _r / e.tex.width : 0, l = e.tex ? _r / e.tex.height : 0, p = c.x + m, C = c.y + l, R = c.w - m * 2, G = c.h - l * 2;
      E(), Q(e.pos), x(e.angle), h(e.scale), Q(a), ot([{ pos: new y(-n / 2, s / 2), uv: new y(e.flipX ? p + R : p, e.flipY ? C : C + G), color: f, opacity: g }, { pos: new y(-n / 2, -s / 2), uv: new y(e.flipX ? p + R : p, e.flipY ? C + G : C), color: f, opacity: g }, { pos: new y(n / 2, -s / 2), uv: new y(e.flipX ? p : p + R, e.flipY ? C + G : C), color: f, opacity: g }, { pos: new y(n / 2, s / 2), uv: new y(e.flipX ? p : p + R, e.flipY ? C : C + G), color: f, opacity: g }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), L();
    }
    __name(me, "me");
    o(me, "drawUVQuad");
    function Z(e) {
      var _a21;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let n = (_a21 = e.quad) != null ? _a21 : new ue(0, 0, 1, 1), s = e.tex.width * n.w, i = e.tex.height * n.h, a = new y(1);
      if (e.tiled) {
        let c = Math.ceil((e.width || s) / s), f = Math.ceil((e.height || i) / i), m = nt(e.anchor || $t).add(new y(1, 1)).scale(0.5).scale(c * s, f * i);
        for (let l = 0; l < c; l++)
          for (let p = 0; p < f; p++)
            me(Object.assign({}, e, { pos: (e.pos || new y(0)).add(new y(s * l, i * p)).sub(m), scale: a.scale(e.scale || new y(1)), tex: e.tex, quad: n, width: s, height: i, anchor: "topleft" }));
      } else
        e.width && e.height ? (a.x = e.width / s, a.y = e.height / i) : e.width ? (a.x = e.width / s, a.y = a.x) : e.height && (a.y = e.height / i, a.x = a.y), me(Object.assign({}, e, { scale: a.scale(e.scale || new y(1)), tex: e.tex, quad: n, width: s, height: i }));
    }
    __name(Z, "Z");
    o(Z, "drawTexture");
    function Ye(e) {
      var _a21, _b2, _c2;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let n = it(e.sprite);
      if (!n || !n.data)
        return;
      let s = n.data.frames[(_a21 = e.frame) != null ? _a21 : 0];
      if (!s)
        throw new Error(`Frame not found: ${(_b2 = e.frame) != null ? _b2 : 0}`);
      Z(Object.assign({}, e, { tex: n.data.tex, quad: s.scale((_c2 = e.quad) != null ? _c2 : new ue(0, 0, 1, 1)) }));
    }
    __name(Ye, "Ye");
    o(Ye, "drawSprite");
    function Te(e, n, s, i, a, c = 1) {
      i = Ee(i % 360), a = Ee(a % 360), a <= i && (a += Math.PI * 2);
      let f = [], g = Math.ceil((a - i) / Ee(8) * c), m = (a - i) / g;
      for (let l = i; l < a; l += m)
        f.push(e.add(n * Math.cos(l), s * Math.sin(l)));
      return f.push(e.add(n * Math.cos(a), s * Math.sin(a))), f;
    }
    __name(Te, "Te");
    o(Te, "getArcPts");
    function xe(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let n = e.width, s = e.height, a = nt(e.anchor || $t).add(1, 1).scale(new y(n, s).scale(-0.5)), c = [new y(0, 0), new y(n, 0), new y(n, s), new y(0, s)];
      if (e.radius) {
        let f = Math.min(Math.min(n, s) / 2, e.radius);
        c = [new y(f, 0), new y(n - f, 0), ...Te(new y(n - f, f), f, f, 270, 360), new y(n, f), new y(n, s - f), ...Te(new y(n - f, s - f), f, f, 0, 90), new y(n - f, s), new y(f, s), ...Te(new y(f, s - f), f, f, 90, 180), new y(0, s - f), new y(0, f), ...Te(new y(f, f), f, f, 180, 270)];
      }
      Ve(Object.assign({}, e, __spreadValues({ offset: a, pts: c }, e.gradient ? { colors: e.horizontal ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]] : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]] } : {})));
    }
    __name(xe, "xe");
    o(xe, "drawRect");
    function ut(e) {
      let { p1: n, p2: s } = e;
      if (!n || !s)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let i = e.width || 1, a = s.sub(n).unit().normal().scale(i * 0.5), c = [n.sub(a), n.add(a), s.add(a), s.sub(a)].map((f) => {
        var _a21, _b2;
        return { pos: new y(f.x, f.y), uv: new y(0), color: (_a21 = e.color) != null ? _a21 : q.WHITE, opacity: (_b2 = e.opacity) != null ? _b2 : 1 };
      });
      ot(c, [0, 1, 3, 1, 2, 3], e.fixed, v.defTex, e.shader, e.uniform);
    }
    __name(ut, "ut");
    o(ut, "drawLine");
    function jn(e) {
      let n = e.pts;
      if (!n)
        throw new Error('drawLines() requires property "pts".');
      if (!(n.length < 2))
        if (e.radius && n.length >= 3) {
          let s = n[0].sdist(n[1]);
          for (let a = 1; a < n.length - 1; a++)
            s = Math.min(n[a].sdist(n[a + 1]), s);
          let i = Math.min(e.radius, Math.sqrt(s) / 2);
          ut(Object.assign({}, e, { p1: n[0], p2: n[1] }));
          for (let a = 1; a < n.length - 2; a++) {
            let c = n[a], f = n[a + 1];
            ut(Object.assign({}, e, { p1: c, p2: f }));
          }
          ut(Object.assign({}, e, { p1: n[n.length - 2], p2: n[n.length - 1] }));
        } else
          for (let s = 0; s < n.length - 1; s++)
            ut(Object.assign({}, e, { p1: n[s], p2: n[s + 1] })), e.join !== "none" && Xe(Object.assign({}, e, { pos: n[s], radius: e.width / 2 }));
    }
    __name(jn, "jn");
    o(jn, "drawLines");
    function kn(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return Ve(Object.assign({}, e, { pts: [e.p1, e.p2, e.p3] }));
    }
    __name(kn, "kn");
    o(kn, "drawTriangle");
    function Xe(e) {
      if (typeof e.radius != "number")
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && _n(Object.assign({}, e, { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(Xe, "Xe");
    o(Xe, "drawCircle");
    function _n(e) {
      var _a21, _b2, _c2;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e.radiusX === 0 || e.radiusY === 0)
        return;
      let n = (_a21 = e.start) != null ? _a21 : 0, s = (_b2 = e.end) != null ? _b2 : 360, i = nt((_c2 = e.anchor) != null ? _c2 : "center").scale(new y(-e.radiusX, -e.radiusY)), a = Te(i, e.radiusX, e.radiusY, n, s, e.resolution);
      a.unshift(i);
      let c = Object.assign({}, e, __spreadValues({ pts: a, radius: 0 }, e.gradient ? { colors: [e.gradient[0], ...Array(a.length - 1).fill(e.gradient[1])] } : {}));
      if (s - n >= 360 && e.outline) {
        e.fill !== false && Ve(Object.assign(c, { outline: null })), Ve(Object.assign(c, { pts: a.slice(1), fill: false }));
        return;
      }
      Ve(c);
    }
    __name(_n, "_n");
    o(_n, "drawEllipse");
    function Ve(e) {
      var _a21, _b2;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let n = e.pts.length;
      if (!(n < 3)) {
        if (E(), Q(e.pos), h(e.scale), x(e.angle), Q(e.offset), e.fill !== false) {
          let s = (_a21 = e.color) != null ? _a21 : q.WHITE, i = e.pts.map((c, f) => {
            var _a22, _b3;
            return { pos: new y(c.x, c.y), uv: new y(0, 0), color: e.colors ? (_a22 = e.colors[f]) != null ? _a22 : s : s, opacity: (_b3 = e.opacity) != null ? _b3 : 1 };
          }), a = [...Array(n - 2).keys()].map((c) => [0, c + 1, c + 2]).flat();
          ot(i, (_b2 = e.indices) != null ? _b2 : a, e.fixed, v.defTex, e.shader, e.uniform);
        }
        e.outline && jn({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, join: e.outline.join, uniform: e.uniform, fixed: e.fixed, opacity: e.opacity }), L();
      }
    }
    __name(Ve, "Ve");
    o(Ve, "drawPolygon");
    function Hn(e, n, s) {
      z(), d.clear(d.STENCIL_BUFFER_BIT), d.enable(d.STENCIL_TEST), d.stencilFunc(d.NEVER, 1, 255), d.stencilOp(d.REPLACE, d.REPLACE, d.REPLACE), n(), z(), d.stencilFunc(s, 1, 255), d.stencilOp(d.KEEP, d.KEEP, d.KEEP), e(), z(), d.disable(d.STENCIL_TEST);
    }
    __name(Hn, "Hn");
    o(Hn, "drawStenciled");
    function Yr(e, n) {
      Hn(e, n, d.EQUAL);
    }
    __name(Yr, "Yr");
    o(Yr, "drawMasked");
    function Xr(e, n) {
      Hn(e, n, d.NOTEQUAL);
    }
    __name(Xr, "Xr");
    o(Xr, "drawSubtracted");
    function qn() {
      return (v.viewport.width + v.viewport.height) / (v.width + v.height);
    }
    __name(qn, "qn");
    o(qn, "getViewportScale");
    function Be(e) {
      z();
      let n = v.width, s = v.height;
      v.width = v.viewport.width, v.height = v.viewport.height, e(), z(), v.width = n, v.height = s;
    }
    __name(Be, "Be");
    o(Be, "drawUnscaled");
    function $n(e, n) {
      n.pos && (e.pos = e.pos.add(n.pos)), n.scale && (e.scale = e.scale.scale(T(n.scale))), n.angle && (e.angle += n.angle), n.color && (e.color = e.color.mult(n.color)), n.opacity && (e.opacity *= n.opacity);
    }
    __name($n, "$n");
    o($n, "applyCharTransform");
    let zn = new RegExp("\\[(?<style>\\w+)\\](?<text>.*?)\\[\\/\\k<style>\\]", "g");
    function Wr(e) {
      let n = {}, s = e.replace(zn, "$2"), i = 0;
      for (let a of e.matchAll(zn)) {
        let c = a.index - i;
        for (let f = 0; f < a.groups.text.length; f++)
          n[f + c] = [a.groups.style];
        i += a[0].length - a.groups.text.length;
      }
      return { charStyleMap: n, text: s };
    }
    __name(Wr, "Wr");
    o(Wr, "compileStyledText");
    let dn = {};
    function Ne(e) {
      var _a21, _b2, _c2, _d, _e, _f, _g;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let n = At(e.font);
      if (e.text === "" || n instanceof ae || !n)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: s, text: i } = Wr(e.text + ""), a = i.split("");
      if (n instanceof ze || typeof n == "string") {
        let K = n instanceof ze ? n.fontface.family : n, j = n instanceof ze ? { outline: n.outline, filter: n.filter } : { outline: 0, filter: Hr }, I = (_a21 = dn[K]) != null ? _a21 : { font: { tex: new W(Vr, Nr, { filter: j.filter }), map: {}, size: Lr }, cursor: new y(0), outline: j.outline };
        dn[K] || (dn[K] = I), n = I.font;
        for (let he of a)
          if (!I.font.map[he]) {
            let b = oe;
            b.clearRect(0, 0, ee.width, ee.height), b.font = `${n.size}px ${K}`, b.textBaseline = "top", b.textAlign = "left", b.fillStyle = "#ffffff";
            let P = b.measureText(he), D = Math.ceil(P.width), F = n.size;
            I.outline && (b.lineJoin = "round", b.lineWidth = I.outline * 2, b.strokeStyle = "#000000", b.strokeText(he, I.outline, I.outline), D += I.outline * 2, F += I.outline * 3), b.fillText(he, I.outline, I.outline);
            let _ = b.getImageData(0, 0, D, F);
            if (I.cursor.x + D > Vr && (I.cursor.x = 0, I.cursor.y += F, I.cursor.y > Nr))
              throw new Error("Font atlas exceeds character limit");
            n.tex.update(_, I.cursor.x, I.cursor.y), n.map[he] = new ue(I.cursor.x, I.cursor.y, D, F), I.cursor.x += D;
          }
      }
      let c = e.size || n.size, f = T((_b2 = e.scale) != null ? _b2 : 1).scale(c / n.size), g = (_c2 = e.lineSpacing) != null ? _c2 : 0, m = (_d = e.letterSpacing) != null ? _d : 0, l = 0, p = 0, C = 0, R = [], G = [], k = 0, M = null, O = null;
      for (; k < a.length; ) {
        let K = a[k];
        if (K === `
`)
          C += c + g, R.push({ width: l - m, chars: G }), M = null, O = null, l = 0, G = [];
        else {
          let j = n.map[K];
          if (j) {
            let I = j.w * f.x;
            e.width && l + I > e.width && (C += c + g, M != null && (k -= G.length - M, K = a[k], j = n.map[K], I = j.w * f.x, G = G.slice(0, M - 1), l = O), M = null, O = null, R.push({ width: l - m, chars: G }), l = 0, G = []), G.push({ tex: n.tex, width: j.w, height: j.h, quad: new ue(j.x / n.tex.width, j.y / n.tex.height, j.w / n.tex.width, j.h / n.tex.height), ch: K, pos: new y(l, C), opacity: (_e = e.opacity) != null ? _e : 1, color: (_f = e.color) != null ? _f : q.WHITE, scale: T(f), angle: 0 }), K === " " && (M = G.length, O = l), l += I, p = Math.max(p, l), l += m;
          }
        }
        k++;
      }
      R.push({ width: l - m, chars: G }), C += c, e.width && (p = e.width);
      let re = [];
      for (let K of R) {
        let j = (p - K.width) * Ri((_g = e.align) != null ? _g : "left");
        for (let I of K.chars) {
          let he = n.map[I.ch], b = re.length;
          if (I.pos = I.pos.add(j, 0).add(he.w * f.x * 0.5, he.h * f.y * 0.5), e.transform) {
            let P = typeof e.transform == "function" ? e.transform(b, I.ch) : e.transform;
            P && $n(I, P);
          }
          if (s[b]) {
            let P = s[b];
            for (let D of P) {
              let F = e.styles[D], _ = typeof F == "function" ? F(b, I.ch) : F;
              _ && $n(I, _);
            }
          }
          re.push(I);
        }
      }
      return { width: p, height: C, chars: re, opt: e };
    }
    __name(Ne, "Ne");
    o(Ne, "formatText");
    function Kn(e) {
      je(Ne(e));
    }
    __name(Kn, "Kn");
    o(Kn, "drawText");
    function je(e) {
      var _a21;
      E(), Q(e.opt.pos), x(e.opt.angle), Q(nt((_a21 = e.opt.anchor) != null ? _a21 : "topleft").add(1, 1).scale(e.width, e.height).scale(-0.5)), e.chars.forEach((n) => {
        me({ tex: n.tex, width: n.width, height: n.height, pos: n.pos, scale: n.scale, angle: n.angle, color: n.color, opacity: n.opacity, quad: n.quad, anchor: "center", uniform: e.opt.uniform, shader: e.opt.shader, fixed: e.opt.fixed });
      }), L();
    }
    __name(je, "je");
    o(je, "drawFormattedText");
    function pe() {
      return v.width;
    }
    __name(pe, "pe");
    o(pe, "width");
    function we() {
      return v.height;
    }
    __name(we, "we");
    o(we, "height");
    let We = {};
    function Jr(e) {
      return new y((e.x - v.viewport.x) * pe() / v.viewport.width, (e.y - v.viewport.y) * we() / v.viewport.height);
    }
    __name(Jr, "Jr");
    o(Jr, "windowToContent");
    function Qr(e) {
      return new y(e.x * v.viewport.width / v.width, e.y * v.viewport.height / v.height);
    }
    __name(Qr, "Qr");
    o(Qr, "contentToView");
    function Dt() {
      return Jr(U.mousePos());
    }
    __name(Dt, "Dt");
    o(Dt, "mousePos"), We.error = (e) => {
      if (e.error)
        yn(e.error);
      else {
        if (e.message === "Script error.")
          return;
        yn(new Error(e.message));
      }
    }, We.unhandledrejection = (e) => yn(e.reason);
    for (let e in We)
      window.addEventListener(e, We[e]);
    let ne = { inspect: false, timeScale: 1, showLog: true, fps: () => U.fps(), numFrames: () => U.numFrames(), stepFrame: or, drawCalls: () => v.drawCalls, clearLog: () => A.logs = [], log: (e) => {
      var _a21;
      let n = (_a21 = r.logMax) != null ? _a21 : Ci;
      A.logs.unshift({ msg: e, time: U.time() }), A.logs.length > n && (A.logs = A.logs.slice(0, n));
    }, error: (e) => ne.log(new Error(e.toString ? e.toString() : e)), curRecording: null, get paused() {
      return U.paused;
    }, set paused(e) {
      U.paused = e, e ? te.ctx.suspend() : te.ctx.resume();
    } };
    function Ue() {
      return U.dt();
    }
    __name(Ue, "Ue");
    o(Ue, "dt");
    function Zr(...e) {
      return e.length > 0 && (A.cam.pos = T(...e)), A.cam.pos ? A.cam.pos.clone() : Vt();
    }
    __name(Zr, "Zr");
    o(Zr, "camPos");
    function es(...e) {
      return e.length > 0 && (A.cam.scale = T(...e)), A.cam.scale.clone();
    }
    __name(es, "es");
    o(es, "camScale");
    function ts(e) {
      return e !== void 0 && (A.cam.angle = e), A.cam.angle;
    }
    __name(ts, "ts");
    o(ts, "camRot");
    function ns(e = 12) {
      A.cam.shake += e;
    }
    __name(ns, "ns");
    o(ns, "shake");
    function Yn(e) {
      return A.cam.transform.multVec2(e);
    }
    __name(Yn, "Yn");
    o(Yn, "toScreen");
    function Xn(e) {
      return A.cam.transform.invert().multVec2(e);
    }
    __name(Xn, "Xn");
    o(Xn, "toWorld");
    function Gt(e) {
      let n = new be();
      return e.pos && n.translate(e.pos), e.scale && n.scale(e.scale), e.angle && n.rotate(e.angle), e.parent ? n.mult(e.parent.transform) : n;
    }
    __name(Gt, "Gt");
    o(Gt, "calcTransform");
    function fn(e) {
      let n = /* @__PURE__ */ new Map(), s = {}, i = new Re(), a = [], c = null, f = false, g = { id: Cr(), hidden: false, transform: new be(), children: [], parent: null, set paused(l) {
        if (l !== f) {
          f = l;
          for (let p of a)
            p.paused = l;
        }
      }, get paused() {
        return f;
      }, add(l) {
        let p = Array.isArray(l) ? fn(l) : l;
        if (p.parent)
          throw new Error("Cannot add a game obj that already has a parent.");
        return p.parent = this, p.transform = Gt(p), this.children.push(p), p.trigger("add", p), A.events.trigger("add", p), p;
      }, readd(l) {
        let p = this.children.indexOf(l);
        return p !== -1 && (this.children.splice(p, 1), this.children.push(l)), l;
      }, remove(l) {
        let p = this.children.indexOf(l);
        if (p !== -1) {
          l.parent = null, this.children.splice(p, 1);
          let C = o((R) => {
            R.trigger("destroy"), A.events.trigger("destroy", R), R.children.forEach((G) => C(G));
          }, "trigger");
          C(l);
        }
      }, removeAll(l) {
        if (l)
          this.get(l).forEach((p) => this.remove(p));
        else
          for (let p of [...this.children])
            this.remove(p);
      }, update() {
        this.paused || (this.children.sort((l, p) => {
          var _a21, _b2;
          return ((_a21 = l.z) != null ? _a21 : 0) - ((_b2 = p.z) != null ? _b2 : 0);
        }).forEach((l) => l.update()), this.trigger("update"));
      }, draw() {
        if (this.hidden)
          return;
        let l = v.fixed;
        this.fixed && (v.fixed = true), E(), Q(this.pos), h(this.scale), x(this.angle), this.trigger("draw"), this.children.sort((p, C) => {
          var _a21, _b2;
          return ((_a21 = p.z) != null ? _a21 : 0) - ((_b2 = C.z) != null ? _b2 : 0);
        }).forEach((p) => p.draw()), L(), v.fixed = l;
      }, drawInspect() {
        this.hidden || (E(), Q(this.pos), h(this.scale), x(this.angle), this.children.sort((l, p) => {
          var _a21, _b2;
          return ((_a21 = l.z) != null ? _a21 : 0) - ((_b2 = p.z) != null ? _b2 : 0);
        }).forEach((l) => l.drawInspect()), this.trigger("drawInspect"), L());
      }, use(l) {
        if (!l)
          return;
        if (typeof l == "string")
          return this.use({ id: l });
        let p = [];
        l.id && (this.unuse(l.id), s[l.id] = [], p = s[l.id], n.set(l.id, l));
        for (let R in l) {
          if (Pi.has(R))
            continue;
          let G = Object.getOwnPropertyDescriptor(l, R);
          if (typeof G.value == "function" && (l[R] = l[R].bind(this)), G.set && Object.defineProperty(l, R, { set: G.set.bind(this) }), G.get && Object.defineProperty(l, R, { get: G.get.bind(this) }), Mi.has(R)) {
            let k = R === "add" ? () => {
              c = o((M) => p.push(M), "onCurCompCleanup"), l[R](), c = null;
            } : l[R];
            p.push(this.on(R, k).cancel);
          } else if (this[R] === void 0)
            Object.defineProperty(this, R, { get: () => l[R], set: (k) => l[R] = k, configurable: true, enumerable: true }), p.push(() => delete this[R]);
          else
            throw new Error(`Duplicate component property: "${R}"`);
        }
        let C = o(() => {
          if (l.require) {
            for (let R of l.require)
              if (!this.c(R))
                throw new Error(`Component "${l.id}" requires component "${R}"`);
          }
        }, "checkDeps");
        l.destroy && p.push(l.destroy.bind(this)), this.exists() ? (C(), l.add && (c = o((R) => p.push(R), "onCurCompCleanup"), l.add.call(this), c = null)) : l.require && p.push(this.on("add", C).cancel);
      }, unuse(l) {
        s[l] && (s[l].forEach((p) => p()), delete s[l]), n.has(l) && n.delete(l);
      }, c(l) {
        return n.get(l);
      }, get(l, p = {}) {
        let C = p.recursive ? this.children.flatMap(o(/* @__PURE__ */ __name(function R(G) {
          return [G, ...G.children.flatMap(R)];
        }, "R"), "recurse")) : this.children;
        if (C = C.filter((R) => l ? R.is(l) : true), p.liveUpdate) {
          let R = o((G) => p.recursive ? this.isAncestorOf(G) : G.parent === this, "isChild");
          pn((G) => {
            R(G) && G.is(l) && C.push(G);
          }), Wn((G) => {
            if (R(G) && G.is(l)) {
              let k = C.findIndex((M) => M.id === G.id);
              k !== -1 && C.splice(k, 1);
            }
          });
        }
        return C;
      }, isAncestorOf(l) {
        return l.parent ? l.parent === this || this.isAncestorOf(l.parent) : false;
      }, exists() {
        return A.root.isAncestorOf(this);
      }, is(l) {
        if (l === "*")
          return true;
        if (Array.isArray(l)) {
          for (let p of l)
            if (!this.c(p))
              return false;
          return true;
        } else
          return this.c(l) != null;
      }, on(l, p) {
        let C = i.on(l, p.bind(this));
        return c && c(() => C.cancel()), C;
      }, trigger(l, ...p) {
        i.trigger(l, ...p), A.objEvents.trigger(l, this, ...p);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let l = {};
        for (let [p, C] of n)
          l[p] = C.inspect ? C.inspect() : null;
        return l;
      }, onAdd(l) {
        return this.on("add", l);
      }, onUpdate(l) {
        return this.on("update", l);
      }, onDraw(l) {
        return this.on("draw", l);
      }, onDestroy(l) {
        return this.on("destroy", l);
      }, clearEvents() {
        i.clear();
      } }, m = ["onKeyPress", "onKeyPressRepeat", "onKeyDown", "onKeyRelease", "onMousePress", "onMouseDown", "onMouseRelease", "onMouseMove", "onCharInput", "onMouseMove", "onTouchStart", "onTouchMove", "onTouchEnd", "onScroll", "onGamepadButtonPress", "onGamepadButtonDown", "onGamepadButtonRelease", "onGamepadStick"];
      for (let l of m)
        g[l] = (...p) => {
          let C = U[l](...p);
          return a.push(C), g.onDestroy(() => C.cancel()), C;
        };
      for (let l of e)
        g.use(l);
      return g;
    }
    __name(fn, "fn");
    o(fn, "make");
    function Le(e, n, s) {
      return A.objEvents[e] || (A.objEvents[e] = new wt()), A.objEvents.on(e, (i, ...a) => {
        i.is(n) && s(i, ...a);
      });
    }
    __name(Le, "Le");
    o(Le, "on");
    let mn = o((e, n) => {
      if (typeof e == "function" && n === void 0) {
        let s = ht([{ update: e }]);
        return { get paused() {
          return s.paused;
        }, set paused(i) {
          s.paused = i;
        }, cancel: () => s.destroy() };
      } else if (typeof e == "string")
        return Le("update", e, n);
    }, "onUpdate"), rs = o((e, n) => {
      if (typeof e == "function" && n === void 0) {
        let s = ht([{ draw: e }]);
        return { get paused() {
          return s.hidden;
        }, set paused(i) {
          s.hidden = i;
        }, cancel: () => s.destroy() };
      } else if (typeof e == "string")
        return Le("draw", e, n);
    }, "onDraw");
    function pn(e, n) {
      if (typeof e == "function" && n === void 0)
        return A.events.on("add", e);
      if (typeof e == "string")
        return Le("add", e, n);
    }
    __name(pn, "pn");
    o(pn, "onAdd");
    function Wn(e, n) {
      if (typeof e == "function" && n === void 0)
        return A.events.on("destroy", e);
      if (typeof e == "string")
        return Le("destroy", e, n);
    }
    __name(Wn, "Wn");
    o(Wn, "onDestroy");
    function ss(e, n, s) {
      return Le("collide", e, (i, a, c) => a.is(n) && s(i, a, c));
    }
    __name(ss, "ss");
    o(ss, "onCollide");
    function is(e, n, s) {
      return Le("collideUpdate", e, (i, a, c) => a.is(n) && s(i, a, c));
    }
    __name(is, "is");
    o(is, "onCollideUpdate");
    function os(e, n, s) {
      return Le("collideEnd", e, (i, a, c) => a.is(n) && s(i, a, c));
    }
    __name(os, "os");
    o(os, "onCollideEnd");
    function Ft(e, n) {
      sr(e, { recursive: true }).forEach(n), pn(e, n);
    }
    __name(Ft, "Ft");
    o(Ft, "forAllCurrentAndFuture");
    function as(e, n) {
      if (typeof e == "function")
        return U.onMousePress(e);
      {
        let s = [];
        return Ft(e, (i) => {
          if (!i.area)
            throw new Error("onClick() requires the object to have area() component");
          s.push(i.onClick(() => n(i)));
        }), Me.join(s);
      }
    }
    __name(as, "as");
    o(as, "onClick");
    function us(e, n) {
      let s = [];
      return Ft(e, (i) => {
        if (!i.area)
          throw new Error("onHover() requires the object to have area() component");
        s.push(i.onHover(() => n(i)));
      }), Me.join(s);
    }
    __name(us, "us");
    o(us, "onHover");
    function cs(e, n) {
      let s = [];
      return Ft(e, (i) => {
        if (!i.area)
          throw new Error("onHoverUpdate() requires the object to have area() component");
        s.push(i.onHoverUpdate(() => n(i)));
      }), Me.join(s);
    }
    __name(cs, "cs");
    o(cs, "onHoverUpdate");
    function ls(e, n) {
      let s = [];
      return Ft(e, (i) => {
        if (!i.area)
          throw new Error("onHoverEnd() requires the object to have area() component");
        s.push(i.onHoverEnd(() => n(i)));
      }), Me.join(s);
    }
    __name(ls, "ls");
    o(ls, "onHoverEnd");
    function Bt(e, n) {
      let s = 0, i = [];
      n && i.push(n);
      let a = mn(() => {
        s += Ue(), s >= e && (a.cancel(), i.forEach((c) => c()));
      });
      return { paused: a.paused, cancel: a.cancel, onEnd(c) {
        i.push(c);
      }, then(c) {
        return this.onEnd(c), this;
      } };
    }
    __name(Bt, "Bt");
    o(Bt, "wait");
    function hs(e, n) {
      let s = null, i = o(() => {
        s = Bt(e, i), n();
      }, "newAction");
      return s = Bt(0, i), { get paused() {
        return s.paused;
      }, set paused(a) {
        s.paused = a;
      }, cancel: () => s.cancel() };
    }
    __name(hs, "hs");
    o(hs, "loop");
    function Jn() {
      U.onKeyPress("f1", () => {
        ne.inspect = !ne.inspect;
      }), U.onKeyPress("f2", () => {
        ne.clearLog();
      }), U.onKeyPress("f8", () => {
        ne.paused = !ne.paused;
      }), U.onKeyPress("f7", () => {
        ne.timeScale = ct(Pe(ne.timeScale - 0.2, 0, 2), 1);
      }), U.onKeyPress("f9", () => {
        ne.timeScale = ct(Pe(ne.timeScale + 0.2, 0, 2), 1);
      }), U.onKeyPress("f10", () => {
        ne.stepFrame();
      });
    }
    __name(Jn, "Jn");
    o(Jn, "enterDebugMode");
    function Qn() {
      U.onKeyPress("b", () => Mt());
    }
    __name(Qn, "Qn");
    o(Qn, "enterBurpMode");
    function ds(e) {
      A.gravity = e;
    }
    __name(ds, "ds");
    o(ds, "setGravity");
    function fs() {
      return A.gravity;
    }
    __name(fs, "fs");
    o(fs, "getGravity");
    function ms(...e) {
      e.length === 1 || e.length === 2 ? (v.bgColor = J(e[0]), e[1] && (v.bgAlpha = e[1])) : (e.length === 3 || e.length === 4) && (v.bgColor = J(e[0], e[1], e[2]), e[3] && (v.bgAlpha = e[3])), d.clearColor(v.bgColor.r / 255, v.bgColor.g / 255, v.bgColor.b / 255, v.bgAlpha);
    }
    __name(ms, "ms");
    o(ms, "setBackground");
    function ps() {
      return v.bgColor.clone();
    }
    __name(ps, "ps");
    o(ps, "getBackground");
    function Lt(...e) {
      return { id: "pos", pos: T(...e), moveBy(...n) {
        this.pos = this.pos.add(T(...n));
      }, move(...n) {
        this.moveBy(T(...n).scale(Ue()));
      }, moveTo(...n) {
        if (typeof n[0] == "number" && typeof n[1] == "number")
          return this.moveTo(T(n[0], n[1]), n[2]);
        let s = n[0], i = n[1];
        if (i === void 0) {
          this.pos = T(s);
          return;
        }
        let a = s.sub(this.pos);
        if (a.len() <= i * Ue()) {
          this.pos = T(s);
          return;
        }
        this.move(a.unit().scale(i));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        let n = this.worldPos();
        return lt(this) ? n : Yn(n);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        Xe({ color: J(255, 0, 0), radius: 4 / qn() });
      } };
    }
    __name(Lt, "Lt");
    o(Lt, "pos");
    function It(...e) {
      return e.length === 0 ? It(1) : { id: "scale", scale: T(...e), scaleTo(...n) {
        this.scale = T(...n);
      }, scaleBy(...n) {
        this.scale.scale(T(...n));
      }, inspect() {
        return `(${ct(this.scale.x, 2)}, ${ct(this.scale.y, 2)})`;
      } };
    }
    __name(It, "It");
    o(It, "scale");
    function gs(e) {
      return { id: "rotate", angle: e != null ? e : 0, rotateBy(n) {
        this.angle += n;
      }, rotateTo(n) {
        this.angle = n;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(gs, "gs");
    o(gs, "rotate");
    function ws(...e) {
      return { id: "color", color: J(...e), inspect() {
        return this.color.toString();
      } };
    }
    __name(ws, "ws");
    o(ws, "color");
    function ct(e, n) {
      return Number(e.toFixed(n));
    }
    __name(ct, "ct");
    o(ct, "toFixed");
    function vs(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${ct(this.opacity, 1)}`;
      }, fadeOut(n = 1, s = tt.linear) {
        return xn(this.opacity, 0, n, (i) => this.opacity = i, s);
      } };
    }
    __name(vs, "vs");
    o(vs, "opacity");
    function gn(e) {
      if (!e)
        throw new Error("Please define an anchor");
      return { id: "anchor", anchor: e, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(gn, "gn");
    o(gn, "anchor");
    function bs(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(bs, "bs");
    o(bs, "z");
    function ys(e, n) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: n != null ? n : T(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(ys, "ys");
    o(ys, "follow");
    function xs(e, n) {
      let s = typeof e == "number" ? y.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(s.scale(n));
      } };
    }
    __name(xs, "xs");
    o(xs, "move");
    let Us = 200;
    function Es(e = {}) {
      var _a21;
      let n = (_a21 = e.distance) != null ? _a21 : Us, s = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let i = this.screenPos(), a = new le(T(0), pe(), we());
        return !mt(a, i) && a.sdistToPoint(i) > n * n;
      }, onExitScreen(i) {
        return this.on("exitView", i);
      }, onEnterScreen(i) {
        return this.on("enterView", i);
      }, update() {
        this.isOffScreen() ? (s || (this.trigger("exitView"), s = true), e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy()) : (s && (this.trigger("enterView"), s = false), e.hide && (this.hidden = false), e.pause && (this.paused = false));
      } };
    }
    __name(Es, "Es");
    o(Es, "offscreen");
    function lt(e) {
      return e.fixed ? true : e.parent ? lt(e.parent) : false;
    }
    __name(lt, "lt");
    o(lt, "isFixed");
    function Ss(e = {}) {
      var _a21, _b2, _c2, _d;
      let n = {}, s = /* @__PURE__ */ new Set();
      return { id: "area", collisionIgnore: (_a21 = e.collisionIgnore) != null ? _a21 : [], add() {
        this.area.cursor && this.onHover(() => U.setCursor(this.area.cursor)), this.onCollideUpdate((i, a) => {
          n[i.id] || this.trigger("collide", i, a), n[i.id] = a, s.add(i.id);
        });
      }, update() {
        for (let i in n)
          s.has(Number(i)) || (this.trigger("collideEnd", n[i].target), delete n[i]);
        s.clear();
      }, drawInspect() {
        let i = this.localArea();
        E(), h(this.area.scale), Q(this.area.offset);
        let a = { outline: { width: 4 / qn(), color: J(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: lt(this) };
        i instanceof le ? xe(__spreadProps(__spreadValues({}, a), { pos: i.pos, width: i.width, height: i.height })) : i instanceof He ? Ve(__spreadProps(__spreadValues({}, a), { pts: i.pts })) : i instanceof pt && Xe(__spreadProps(__spreadValues({}, a), { pos: i.center, radius: i.radius })), L();
      }, area: { shape: (_b2 = e.shape) != null ? _b2 : null, scale: e.scale ? T(e.scale) : T(1), offset: (_c2 = e.offset) != null ? _c2 : T(0), cursor: (_d = e.cursor) != null ? _d : null }, isClicked() {
        return U.isMousePressed() && this.isHovering();
      }, isHovering() {
        let i = lt(this) ? Dt() : Xn(Dt());
        return this.hasPoint(i);
      }, checkCollision(i) {
        var _a22;
        return (_a22 = n[i.id]) != null ? _a22 : null;
      }, getCollisions() {
        return Object.values(n);
      }, isColliding(i) {
        return !!n[i.id];
      }, isOverlapping(i) {
        let a = n[i.id];
        return a && a.hasOverlap();
      }, onClick(i) {
        let a = U.onMousePress("left", () => {
          this.isHovering() && i();
        });
        return this.onDestroy(() => a.cancel()), a;
      }, onHover(i) {
        let a = false;
        return this.onUpdate(() => {
          a ? a = this.isHovering() : this.isHovering() && (a = true, i());
        });
      }, onHoverUpdate(i) {
        return this.onUpdate(() => {
          this.isHovering() && i();
        });
      }, onHoverEnd(i) {
        let a = false;
        return this.onUpdate(() => {
          a ? this.isHovering() || (a = false, i()) : a = this.isHovering();
        });
      }, onCollide(i, a) {
        if (typeof i == "function" && a === void 0)
          return this.on("collide", i);
        if (typeof i == "string")
          return this.onCollide((c, f) => {
            c.is(i) && a(c, f);
          });
      }, onCollideUpdate(i, a) {
        if (typeof i == "function" && a === void 0)
          return this.on("collideUpdate", i);
        if (typeof i == "string")
          return this.on("collideUpdate", (c, f) => c.is(i) && a(c, f));
      }, onCollideEnd(i, a) {
        if (typeof i == "function" && a === void 0)
          return this.on("collideEnd", i);
        if (typeof i == "string")
          return this.on("collideEnd", (c) => c.is(i) && a(c));
      }, hasPoint(i) {
        return Mn(this.worldArea(), i);
      }, resolveCollision(i) {
        let a = this.checkCollision(i);
        a && !a.resolved && (this.pos = this.pos.add(a.displacement), a.resolved = true);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a22;
        let i = this.localArea();
        if (!(i instanceof He || i instanceof le))
          throw new Error("Only support polygon and rect shapes for now");
        let a = this.transform.clone().scale(T((_a22 = this.area.scale) != null ? _a22 : 1)).translate(this.area.offset);
        if (i instanceof le) {
          let c = nt(this.anchor || $t).add(1, 1).scale(-0.5).scale(i.width, i.height);
          a.translate(c);
        }
        return i.transform(a);
      }, screenArea() {
        let i = this.worldArea();
        return lt(this) ? i : i.transform(A.cam.transform);
      } };
    }
    __name(Ss, "Ss");
    o(Ss, "area");
    function Je(e) {
      return { color: e.color, opacity: e.opacity, anchor: e.anchor, outline: e.outline, shader: e.shader, uniform: e.uniform };
    }
    __name(Je, "Je");
    o(Je, "getRenderProps");
    function wn(e, n = {}) {
      var _a21, _b2, _c2;
      let s = null, i = null, a = null, c = new ve();
      if (!e)
        throw new Error("Please pass the resource name or data to sprite()");
      let f = o((g, m, l, p) => {
        let C = T(1, 1);
        return l && p ? (C.x = l / (g.width * m.w), C.y = p / (g.height * m.h)) : l ? (C.x = l / (g.width * m.w), C.y = C.x) : p && (C.y = p / (g.height * m.h), C.x = C.y), C;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: n.frame || 0, quad: n.quad || new ue(0, 0, 1, 1), animSpeed: (_a21 = n.animSpeed) != null ? _a21 : 1, flipX: (_b2 = n.flipX) != null ? _b2 : false, flipY: (_c2 = n.flipY) != null ? _c2 : false, draw() {
        var _a22, _b3;
        if (!s)
          return;
        let g = s.frames[(_a22 = this.frame) != null ? _a22 : 0];
        if (!g)
          throw new Error(`Frame not found: ${(_b3 = this.frame) != null ? _b3 : 0}`);
        if (s.slice9) {
          let { left: m, right: l, top: p, bottom: C } = s.slice9, R = s.tex.width * g.w, G = s.tex.height * g.h, k = this.width - m - l, M = this.height - p - C, O = m / R, re = l / R, K = 1 - O - re, j = p / G, I = C / G, he = 1 - j - I, b = [ie(0, 0, O, j), ie(O, 0, K, j), ie(O + K, 0, re, j), ie(0, j, O, he), ie(O, j, K, he), ie(O + K, j, re, he), ie(0, j + he, O, I), ie(O, j + he, K, I), ie(O + K, j + he, re, I), ie(0, 0, m, p), ie(m, 0, k, p), ie(m + k, 0, l, p), ie(0, p, m, M), ie(m, p, k, M), ie(m + k, p, l, M), ie(0, p + M, m, C), ie(m, p + M, k, C), ie(m + k, p + M, l, C)];
          for (let P = 0; P < 9; P++) {
            let D = b[P], F = b[P + 9];
            Z(Object.assign(Je(this), { pos: F.pos(), tex: s.tex, quad: g.scale(D), flipX: this.flipX, flipY: this.flipY, tiled: n.tiled, width: F.w, height: F.h }));
          }
        } else
          Z(Object.assign(Je(this), { tex: s.tex, quad: g, flipX: this.flipX, flipY: this.flipY, tiled: n.tiled, width: this.width, height: this.height }));
      }, add() {
        let g = o((l) => {
          let p = l.frames[0].clone();
          n.quad && (p = p.scale(n.quad));
          let C = f(l.tex, p, n.width, n.height);
          this.width = l.tex.width * p.w * C.x, this.height = l.tex.height * p.h * C.y, n.anim && this.play(n.anim), s = l, c.trigger(s);
        }, "setSpriteData"), m = it(e);
        m ? m.onLoad(g) : vn(() => g(it(e).data));
      }, update() {
        if (!i)
          return;
        let g = s.anims[i.name];
        if (typeof g == "number") {
          this.frame = g;
          return;
        }
        if (g.speed === 0)
          throw new Error("Sprite anim speed cannot be 0");
        i.timer += Ue() * this.animSpeed, i.timer >= 1 / i.speed && (i.timer = 0, this.frame += a, (this.frame < Math.min(g.from, g.to) || this.frame > Math.max(g.from, g.to)) && (i.loop ? i.pingpong ? (this.frame -= a, a *= -1, this.frame += a) : this.frame = g.from : (this.frame = g.to, i.onEnd(), this.stop())));
      }, play(g, m = {}) {
        var _a22, _b3, _c3, _d, _e, _f, _g;
        if (!s) {
          c.add(() => this.play(g, m));
          return;
        }
        let l = s.anims[g];
        if (l === void 0)
          throw new Error(`Anim not found: ${g}`);
        i && this.stop(), i = typeof l == "number" ? { name: g, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: g, timer: 0, loop: (_b3 = (_a22 = m.loop) != null ? _a22 : l.loop) != null ? _b3 : false, pingpong: (_d = (_c3 = m.pingpong) != null ? _c3 : l.pingpong) != null ? _d : false, speed: (_f = (_e = m.speed) != null ? _e : l.speed) != null ? _f : 10, onEnd: (_g = m.onEnd) != null ? _g : () => {
        } }, a = typeof l == "number" ? null : l.from < l.to ? 1 : -1, this.frame = typeof l == "number" ? l : l.from, this.trigger("animStart", g);
      }, stop() {
        if (!i)
          return;
        let g = i.name;
        i = null, this.trigger("animEnd", g);
      }, numFrames() {
        var _a22;
        return (_a22 = s == null ? void 0 : s.frames.length) != null ? _a22 : 0;
      }, curAnim() {
        return i == null ? void 0 : i.name;
      }, onAnimEnd(g) {
        return this.on("animEnd", g);
      }, onAnimStart(g) {
        return this.on("animStart", g);
      }, renderArea() {
        return new le(T(0), this.width, this.height);
      }, inspect() {
        if (typeof e == "string")
          return `"${e}"`;
      } };
    }
    __name(wn, "wn");
    o(wn, "sprite");
    function Cs(e, n = {}) {
      var _a21;
      function s(i) {
        var _a22, _b2;
        let a = Ne(Object.assign(Je(i), { text: i.text + "", size: i.textSize, font: i.font, width: n.width && i.width, align: i.align, letterSpacing: i.letterSpacing, lineSpacing: i.lineSpacing, transform: i.textTransform, styles: i.textStyles }));
        return n.width || (i.width = a.width / (((_a22 = i.scale) == null ? void 0 : _a22.x) || 1)), i.height = a.height / (((_b2 = i.scale) == null ? void 0 : _b2.y) || 1), a;
      }
      __name(s, "s");
      return o(s, "update"), { id: "text", text: e, textSize: (_a21 = n.size) != null ? _a21 : Ei, font: n.font, width: n.width, height: 0, align: n.align, lineSpacing: n.lineSpacing, letterSpacing: n.letterSpacing, textTransform: n.transform, textStyles: n.styles, add() {
        vn(() => s(this));
      }, draw() {
        je(s(this));
      }, renderArea() {
        return new le(T(0), this.width, this.height);
      } };
    }
    __name(Cs, "Cs");
    o(Cs, "text");
    function Ts(e, n, s = {}) {
      return { id: "rect", width: e, height: n, radius: s.radius || 0, draw() {
        xe(Object.assign(Je(this), { width: this.width, height: this.height, radius: this.radius }));
      }, renderArea() {
        return new le(T(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Ts, "Ts");
    o(Ts, "rect");
    function As(e, n) {
      return { id: "rect", width: e, height: n, draw() {
        me(Object.assign(Je(this), { width: this.width, height: this.height }));
      }, renderArea() {
        return new le(T(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(As, "As");
    o(As, "uvquad");
    function Os(e) {
      return { id: "circle", radius: e, draw() {
        Xe(Object.assign(Je(this), { radius: this.radius }));
      }, renderArea() {
        return new le(new y(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Os, "Os");
    o(Os, "circle");
    function Ps(e = 1, n = J(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: n } };
    }
    __name(Ps, "Ps");
    o(Ps, "outline");
    function Zn() {
      return { id: "timer", wait(e, n) {
        let s = [];
        n && s.push(n);
        let i = 0, a = this.onUpdate(() => {
          i += Ue(), i >= e && (s.forEach((c) => c()), a.cancel());
        });
        return { get paused() {
          return a.paused;
        }, set paused(c) {
          a.paused = c;
        }, cancel: a.cancel, onEnd(c) {
          s.push(c);
        }, then(c) {
          return this.onEnd(c), this;
        } };
      }, loop(e, n) {
        let s = null, i = o(() => {
          s = this.wait(e, i), n();
        }, "newAction");
        return s = this.wait(0, i), { get paused() {
          return s.paused;
        }, set paused(a) {
          s.paused = a;
        }, cancel: () => s.cancel() };
      }, tween(e, n, s, i, a = tt.linear) {
        let c = 0, f = [], g = this.onUpdate(() => {
          c += Ue();
          let m = Math.min(c / s, 1);
          i(Se(e, n, a(m))), m === 1 && (g.cancel(), i(n), f.forEach((l) => l()));
        });
        return { get paused() {
          return g.paused;
        }, set paused(m) {
          g.paused = m;
        }, onEnd(m) {
          f.push(m);
        }, then(m) {
          return this.onEnd(m), this;
        }, cancel() {
          g.cancel();
        }, finish() {
          g.cancel(), i(n), f.forEach((m) => m());
        } };
      } };
    }
    __name(Zn, "Zn");
    o(Zn, "timer");
    let Ms = 640, Rs = 65536;
    function Ds(e = {}) {
      var _a21, _b2, _c2, _d;
      let n = T(0), s = null, i = null, a = false;
      return { id: "body", require: ["pos", "area"], jumpForce: (_a21 = e.jumpForce) != null ? _a21 : Ms, gravityScale: (_b2 = e.gravityScale) != null ? _b2 : 1, isStatic: (_c2 = e.isStatic) != null ? _c2 : false, mass: (_d = e.mass) != null ? _d : 1, add() {
        if (this.mass === 0)
          throw new Error("Can't set body mass to 0");
        this.onCollideUpdate((c, f) => {
          if (c.is("body") && !f.resolved && (this.trigger("beforePhysicsResolve", f), c.trigger("beforePhysicsResolve", f.reverse()), !f.resolved && !(this.isStatic && c.isStatic))) {
            if (!this.isStatic && !c.isStatic) {
              let g = this.mass + c.mass;
              this.pos = this.pos.add(f.displacement.scale(c.mass / g)), c.pos = c.pos.add(f.displacement.scale(-this.mass / g)), this.transform = Gt(this), c.transform = Gt(c);
            } else {
              let g = !this.isStatic && c.isStatic ? f : f.reverse();
              g.source.pos = g.source.pos.add(g.displacement), g.source.transform = Gt(g.source);
            }
            f.resolved = true, this.trigger("physicsResolve", f), c.trigger("physicsResolve", f.reverse());
          }
        }), this.onPhysicsResolve((c) => {
          A.gravity && (c.isBottom() && this.isFalling() ? (n.y = 0, s = c.target, i = c.target.pos, a ? a = false : this.trigger("ground", s)) : c.isTop() && this.isJumping() && (n.y = 0, this.trigger("headbutt", c.target)));
        });
      }, update() {
        var _a22;
        if (!A.gravity || this.isStatic)
          return;
        if (a && (s = null, i = null, this.trigger("fallOff"), a = false), s)
          if (!this.isOverlapping(s) || !s.exists() || !s.is("body"))
            a = true;
          else {
            !s.pos.eq(i) && e.stickToPlatform !== false && this.moveBy(s.pos.sub(i)), i = s.pos;
            return;
          }
        let c = n.y;
        n.y += A.gravity * this.gravityScale * Ue(), n.y = Math.min(n.y, (_a22 = e.maxVelocity) != null ? _a22 : Rs), c < 0 && n.y >= 0 && this.trigger("fall"), this.move(n);
      }, onPhysicsResolve(c) {
        return this.on("physicsResolve", c);
      }, onBeforePhysicsResolve(c) {
        return this.on("beforePhysicsResolve", c);
      }, curPlatform() {
        return s;
      }, isGrounded() {
        return s !== null;
      }, isFalling() {
        return n.y > 0;
      }, isJumping() {
        return n.y < 0;
      }, jump(c) {
        s = null, i = null, n.y = -c || -this.jumpForce;
      }, onGround(c) {
        return this.on("ground", c);
      }, onFall(c) {
        return this.on("fall", c);
      }, onFallOff(c) {
        return this.on("fallOff", c);
      }, onHeadbutt(c) {
        return this.on("headbutt", c);
      } };
    }
    __name(Ds, "Ds");
    o(Ds, "body");
    function Gs(e = 2) {
      let n = e;
      return { id: "doubleJump", require: ["body"], numJumps: e, add() {
        this.onGround(() => {
          n = this.numJumps;
        });
      }, doubleJump(s) {
        n <= 0 || (n < this.numJumps && this.trigger("doubleJump"), n--, this.jump(s));
      }, onDoubleJump(s) {
        return this.on("doubleJump", s);
      }, inspect() {
        return `${n}`;
      } };
    }
    __name(Gs, "Gs");
    o(Gs, "doubleJump");
    function Fs(e, n) {
      return __spreadValues({ id: "shader", shader: e }, typeof n == "function" ? { uniform: n(), update() {
        this.uniform = n();
      } } : { uniform: n });
    }
    __name(Fs, "Fs");
    o(Fs, "shader");
    function Bs() {
      return { id: "fixed", fixed: true };
    }
    __name(Bs, "Bs");
    o(Bs, "fixed");
    function er(e) {
      return { id: "stay", stay: true, scenesToStay: e };
    }
    __name(er, "er");
    o(er, "stay");
    function Ls(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      let n = e;
      return { id: "health", hurt(s = 1) {
        this.setHP(e - s), this.trigger("hurt", s);
      }, heal(s = 1) {
        this.setHP(e + s), this.trigger("heal", s);
      }, hp() {
        return e;
      }, maxHP() {
        return n;
      }, setHP(s) {
        e = s, e <= 0 && this.trigger("death");
      }, onHurt(s) {
        return this.on("hurt", s);
      }, onHeal(s) {
        return this.on("heal", s);
      }, onDeath(s) {
        return this.on("death", s);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(Ls, "Ls");
    o(Ls, "health");
    function Is(e, n = {}) {
      var _a21;
      if (e == null)
        throw new Error("lifespan() requires time");
      let s = (_a21 = n.fade) != null ? _a21 : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield Bt(e), s > 0 && this.opacity && (yield xn(this.opacity, 0, s, (i) => this.opacity = i, tt.linear)), this.destroy();
        });
      } };
    }
    __name(Is, "Is");
    o(Is, "lifespan");
    function Vs(e, n, s) {
      if (!e)
        throw new Error("state() requires an initial state");
      let i = {};
      function a(m) {
        i[m] || (i[m] = { enter: new ve(), end: new ve(), update: new ve(), draw: new ve() });
      }
      __name(a, "a");
      o(a, "initStateEvents");
      function c(m, l, p) {
        return a(l), i[l][m].add(p);
      }
      __name(c, "c");
      o(c, "on");
      function f(m, l, ...p) {
        a(l), i[l][m].trigger(...p);
      }
      __name(f, "f");
      o(f, "trigger");
      let g = false;
      return { id: "state", state: e, enterState(m, ...l) {
        if (g = true, n && !n.includes(m))
          throw new Error(`State not found: ${m}`);
        let p = this.state;
        if (s) {
          if (!(s == null ? void 0 : s[p]))
            return;
          let C = typeof s[p] == "string" ? [s[p]] : s[p];
          if (!C.includes(m))
            throw new Error(`Cannot transition state from "${p}" to "${m}". Available transitions: ${C.map((R) => `"${R}"`).join(", ")}`);
        }
        f("end", p, ...l), this.state = m, f("enter", m, ...l), f("enter", `${p} -> ${m}`, ...l);
      }, onStateTransition(m, l, p) {
        return c("enter", `${m} -> ${l}`, p);
      }, onStateEnter(m, l) {
        return c("enter", m, l);
      }, onStateUpdate(m, l) {
        return c("update", m, l);
      }, onStateDraw(m, l) {
        return c("draw", m, l);
      }, onStateEnd(m, l) {
        return c("end", m, l);
      }, update() {
        g || (f("enter", e), g = true), f("update", this.state);
      }, draw() {
        f("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Vs, "Vs");
    o(Vs, "state");
    function Ns(e = 1) {
      let n = 0, s = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        s || (n += Ue(), this.opacity = jt(n, 0, e, 0, 1), n >= e && (this.opacity = 1, s = true));
      } };
    }
    __name(Ns, "Ns");
    o(Ns, "fadeIn");
    function vn(e) {
      V.loaded ? e() : A.events.on("load", e);
    }
    __name(vn, "vn");
    o(vn, "onLoad");
    function js(e, n) {
      A.scenes[e] = n;
    }
    __name(js, "js");
    o(js, "scene");
    function ks(e, ...n) {
      if (!A.scenes[e])
        throw new Error(`Scene not found: ${e}`);
      A.events.onOnce("frameEnd", () => {
        A.events.trigger("sceneLeave", e), U.events.clear(), A.events.clear(), A.objEvents.clear(), [...A.root.children].forEach((s) => {
          (!s.stay || s.scenesToStay && !s.scenesToStay.includes(e)) && A.root.remove(s);
        }), A.root.clearEvents(), A.cam = { pos: null, scale: T(1), angle: 0, shake: 0, transform: new be() }, A.scenes[e](...n), r.debug !== false && Jn(), r.burp && Qn();
      });
    }
    __name(ks, "ks");
    o(ks, "go");
    function _s(e) {
      return A.events.on("sceneLeave", e);
    }
    __name(_s, "_s");
    o(_s, "onSceneLeave");
    function Hs(e, n) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e2) {
        return n ? (tr(e, n), n) : null;
      }
    }
    __name(Hs, "Hs");
    o(Hs, "getData");
    function tr(e, n) {
      window.localStorage[e] = JSON.stringify(n);
    }
    __name(tr, "tr");
    o(tr, "setData");
    function nr(e, ...n) {
      let s = e(ke), i;
      typeof s == "function" ? i = s(...n)(ke) : i = s;
      for (let a in i)
        ke[a] = i[a], r.global !== false && (window[a] = i[a]);
      return ke;
    }
    __name(nr, "nr");
    o(nr, "plug");
    function Vt() {
      return T(pe() / 2, we() / 2);
    }
    __name(Vt, "Vt");
    o(Vt, "center");
    let qs;
    ((O) => (O[O.None = 0] = "None", O[O.Left = 1] = "Left", O[O.Top = 2] = "Top", O[O.LeftTop = 3] = "LeftTop", O[O.Right = 4] = "Right", O[O.Horizontal = 5] = "Horizontal", O[O.RightTop = 6] = "RightTop", O[O.HorizontalTop = 7] = "HorizontalTop", O[O.Bottom = 8] = "Bottom", O[O.LeftBottom = 9] = "LeftBottom", O[O.Vertical = 10] = "Vertical", O[O.LeftVertical = 11] = "LeftVertical", O[O.RightBottom = 12] = "RightBottom", O[O.HorizontalBottom = 13] = "HorizontalBottom", O[O.RightVertical = 14] = "RightVertical", O[O.All = 15] = "All"))(qs || (qs = {}));
    function rr(e = {}) {
      var _a21, _b2, _c2, _d;
      let n = T(0), s = (_a21 = e.isObstacle) != null ? _a21 : false, i = (_b2 = e.cost) != null ? _b2 : 0, a = (_c2 = e.edges) != null ? _c2 : [], c = o(() => {
        let g = { left: 1, top: 2, right: 4, bottom: 8 };
        return a.map((m) => g[m] || 0).reduce((m, l) => m | l, 0);
      }, "getEdgeMask"), f = c();
      return { id: "tile", tilePosOffset: (_d = e.offset) != null ? _d : T(0), set tilePos(g) {
        let m = this.getLevel();
        n = g.clone(), this.pos = T(this.tilePos.x * m.tileWidth(), this.tilePos.y * m.tileHeight()).add(this.tilePosOffset);
      }, get tilePos() {
        return n;
      }, set isObstacle(g) {
        s !== g && (s = g, this.getLevel().invalidateNavigationMap());
      }, get isObstacle() {
        return s;
      }, set cost(g) {
        i !== g && (i = g, this.getLevel().invalidateNavigationMap());
      }, get cost() {
        return i;
      }, set edges(g) {
        a = g, f = c(), this.getLevel().invalidateNavigationMap();
      }, get edges() {
        return a;
      }, get edgeMask() {
        return f;
      }, getLevel() {
        return this.parent;
      }, moveLeft() {
        this.tilePos = this.tilePos.add(T(-1, 0));
      }, moveRight() {
        this.tilePos = this.tilePos.add(T(1, 0));
      }, moveUp() {
        this.tilePos = this.tilePos.add(T(0, -1));
      }, moveDown() {
        this.tilePos = this.tilePos.add(T(0, 1));
      } };
    }
    __name(rr, "rr");
    o(rr, "tile");
    function $s(e, n) {
      var _a21;
      if (!n.tileWidth || !n.tileHeight)
        throw new Error("Must provide tileWidth and tileHeight.");
      let s = ht([Lt((_a21 = n.pos) != null ? _a21 : T(0))]), i = e.length, a = 0, c = null, f = null, g = null, m = null, l = o((b) => b.x + b.y * a, "tile2Hash"), p = o((b) => T(Math.floor(b % a), Math.floor(b / a)), "hash2Tile"), C = o(() => {
        c = [];
        for (let b of s.children)
          R(b);
      }, "createSpatialMap"), R = o((b) => {
        let P = l(b.tilePos);
        c[P] ? c[P].push(b) : c[P] = [b];
      }, "insertIntoSpatialMap"), G = o((b) => {
        let P = l(b.tilePos);
        if (c[P]) {
          let D = c[P].indexOf(b);
          D >= 0 && c[P].splice(D, 1);
        }
      }, "removeFromSpatialMap"), k = o(() => {
        let b = false;
        for (let P of s.children) {
          let D = s.pos2Tile(P.pos);
          (P.tilePos.x != D.x || P.tilePos.y != D.y) && (b = true, G(P), P.tilePos.x = D.x, P.tilePos.y = D.y, R(P));
        }
        b && s.trigger("spatial_map_changed");
      }, "updateSpatialMap"), M = o(() => {
        let b = s.getSpatialMap(), P = s.numRows() * s.numColumns();
        f ? f.length = P : f = new Array(P), f.fill(1, 0, P);
        for (let D = 0; D < b.length; D++) {
          let F = b[D];
          if (F) {
            let _ = 0;
            for (let Y of F)
              if (Y.isObstacle) {
                _ = 1 / 0;
                break;
              } else
                _ += Y.cost;
            f[D] = _ || 1;
          }
        }
      }, "createCostMap"), O = o(() => {
        let b = s.getSpatialMap(), P = s.numRows() * s.numColumns();
        g ? g.length = P : g = new Array(P), g.fill(15, 0, P);
        for (let D = 0; D < b.length; D++) {
          let F = b[D];
          if (F) {
            let _ = F.length, Y = 15;
            for (let se = 0; se < _; se++)
              Y |= F[se].edgeMask;
            g[D] = Y;
          }
        }
      }, "createEdgeMap"), re = o(() => {
        let b = s.numRows() * s.numColumns(), P = o((F, _) => {
          let Y = [];
          for (Y.push(F); Y.length > 0; ) {
            let se = Y.pop();
            I(se).forEach((de) => {
              m[de] < 0 && (m[de] = _, Y.push(de));
            });
          }
        }, "traverse");
        m ? m.length = b : m = new Array(b), m.fill(-1, 0, b);
        let D = 0;
        for (let F = 0; F < f.length; F++) {
          if (m[F] >= 0) {
            D++;
            continue;
          }
          P(F, D), D++;
        }
      }, "createConnectivityMap"), K = o((b, P) => f[P], "getCost"), j = o((b, P) => {
        let D = p(b), F = p(P);
        return D.dist(F);
      }, "getHeuristic"), I = o((b, P) => {
        let D = [], F = Math.floor(b % a), _ = F > 0 && g[b] & 1 && f[b - 1] !== 1 / 0, Y = b >= a && g[b] & 2 && f[b - a] !== 1 / 0, se = F < a - 1 && g[b] & 4 && f[b + 1] !== 1 / 0, de = b < a * i - a - 1 && g[b] & 8 && f[b + a] !== 1 / 0;
        return P ? (_ && (Y && D.push(b - a - 1), D.push(b - 1), de && D.push(b + a - 1)), Y && D.push(b - a), se && (Y && D.push(b - a + 1), D.push(b + 1), de && D.push(b + a + 1)), de && D.push(b + a)) : (_ && D.push(b - 1), Y && D.push(b - a), se && D.push(b + 1), de && D.push(b + a)), D;
      }, "getNeighbours"), he = { id: "level", tileWidth() {
        return n.tileWidth;
      }, tileHeight() {
        return n.tileHeight;
      }, spawn(b, ...P) {
        let D = T(...P), F = (() => {
          if (typeof b == "string") {
            if (n.tiles[b]) {
              if (typeof n.tiles[b] != "function")
                throw new Error("Level symbol def must be a function returning a component list");
              return n.tiles[b](D);
            } else if (n.wildcardTile)
              return n.wildcardTile(b, D);
          } else {
            if (Array.isArray(b))
              return b;
            throw new Error("Expected a symbol or a component list");
          }
        })();
        if (!F)
          return null;
        let _ = false, Y = false;
        for (let de of F)
          de.id === "tile" && (Y = true), de.id === "pos" && (_ = true);
        _ || F.push(Lt()), Y || F.push(rr());
        let se = s.add(F);
        return _ && (se.tilePosOffset = se.pos.clone()), se.tilePos = D, c && (R(se), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), se;
      }, numColumns() {
        return a;
      }, numRows() {
        return i;
      }, levelWidth() {
        return a * this.tileWidth();
      }, levelHeight() {
        return i * this.tileHeight();
      }, tile2Pos(...b) {
        return T(...b).scale(this.tileWidth(), this.tileHeight());
      }, pos2Tile(...b) {
        let P = T(...b);
        return T(Math.floor(P.x / this.tileWidth()), Math.floor(P.y / this.tileHeight()));
      }, getSpatialMap() {
        return c || C(), c;
      }, onSpatialMapChanged(b) {
        return this.on("spatial_map_changed", b);
      }, onNavigationMapInvalid(b) {
        return this.on("navigation_map_invalid", b);
      }, getAt(b) {
        c || C();
        let P = l(b);
        return c[P] || [];
      }, update() {
        c && k();
      }, invalidateNavigationMap() {
        f = null, g = null, m = null;
      }, onNavigationMapChanged(b) {
        return this.on("navigation_map_changed", b);
      }, getTilePath(b, P, D = {}) {
        var _a22;
        if (f || M(), g || O(), m || re(), b.x < 0 || b.x >= a || b.y < 0 || b.y >= i || P.x < 0 || P.x >= a || P.y < 0 || P.y >= i)
          return null;
        let F = l(b), _ = l(P);
        if (f[_] === 1 / 0)
          return null;
        if (F === _)
          return [];
        if (m[F] != -1 && m[F] !== m[_])
          return null;
        let Y = new kt((Ae, En) => Ae.cost < En.cost);
        Y.insert({ cost: 0, node: F });
        let se = /* @__PURE__ */ new Map();
        se.set(F, F);
        let de = /* @__PURE__ */ new Map();
        for (de.set(F, 0); Y.length !== 0; ) {
          let Ae = (_a22 = Y.remove()) == null ? void 0 : _a22.node;
          if (Ae === _)
            break;
          let En = I(Ae, D.allowDiagonals);
          for (let _e of En) {
            let Sn = (de.get(Ae) || 0) + K(Ae, _e) + j(_e, _);
            (!de.has(_e) || Sn < de.get(_e)) && (de.set(_e, Sn), Y.insert({ cost: Sn, node: _e }), se.set(_e, Ae));
          }
        }
        let Un = [], dt = _, li = p(dt);
        for (Un.push(li); dt !== F; ) {
          dt = se.get(dt);
          let Ae = p(dt);
          Un.push(Ae);
        }
        return Un.reverse();
      }, getPath(b, P, D = {}) {
        let F = this.tileWidth(), _ = this.tileHeight(), Y = this.getTilePath(this.pos2Tile(b), this.pos2Tile(P), D);
        return Y ? [b, ...Y.slice(1, -1).map((se) => se.scale(F, _).add(F / 2, _ / 2)), P] : null;
      } };
      return s.use(he), s.onNavigationMapInvalid(() => {
        s.invalidateNavigationMap(), s.trigger("navigation_map_changed");
      }), e.forEach((b, P) => {
        let D = b.split("");
        a = Math.max(D.length, a), D.forEach((F, _) => {
          s.spawn(F, T(_, P));
        });
      }), s;
    }
    __name($s, "$s");
    o($s, "addLevel");
    function zs(e = {}) {
      var _a21, _b2;
      let n = null, s = null, i = null, a = null;
      return { id: "agent", require: ["pos", "tile"], agentSpeed: (_a21 = e.speed) != null ? _a21 : 100, allowDiagonals: (_b2 = e.allowDiagonals) != null ? _b2 : true, getDistanceToTarget() {
        return n ? this.pos.dist(n) : 0;
      }, getNextLocation() {
        return s && i ? s[i] : null;
      }, getPath() {
        return s ? s.slice() : null;
      }, getTarget() {
        return n;
      }, isNavigationFinished() {
        return s ? i === null : true;
      }, isTargetReachable() {
        return s !== null;
      }, isTargetReached() {
        return n ? this.pos.eq(n) : true;
      }, setTarget(c) {
        n = c, s = this.getLevel().getPath(this.pos, n, { allowDiagonals: this.allowDiagonals }), i = s ? 0 : null, s ? (a || (a = this.getLevel().onNavigationMapChanged(() => {
          s && i !== null && (s = this.getLevel().getPath(this.pos, n, { allowDiagonals: this.allowDiagonals }), i = s ? 0 : null, s ? this.trigger("navigation-next", this, s[i]) : this.trigger("navigation-ended", this));
        }), this.onDestroy(() => a.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, s[i])) : this.trigger("navigation-ended", this);
      }, update() {
        if (s && i !== null) {
          if (this.pos.sdist(s[i]) < 2)
            if (i === s.length - 1) {
              this.pos = n.clone(), i = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
              return;
            } else
              i++, this.trigger("navigation-next", this, s[i]);
          this.moveTo(s[i], this.agentSpeed);
        }
      }, onNavigationStarted(c) {
        return this.on("navigation-started", c);
      }, onNavigationNext(c) {
        return this.on("navigation-next", c);
      }, onNavigationEnded(c) {
        return this.on("navigation-ended", c);
      }, onTargetReached(c) {
        return this.on("target-reached", c);
      }, inspect() {
        return JSON.stringify({ target: JSON.stringify(n), path: JSON.stringify(s) });
      } };
    }
    __name(zs, "zs");
    o(zs, "agent");
    function Ks(e) {
      let n = U.canvas().captureStream(e), s = te.ctx.createMediaStreamDestination();
      te.masterNode.connect(s);
      let i = new MediaRecorder(n), a = [];
      return i.ondataavailable = (c) => {
        c.data.size > 0 && a.push(c.data);
      }, i.onerror = () => {
        te.masterNode.disconnect(s), n.getTracks().forEach((c) => c.stop());
      }, i.start(), { resume() {
        i.resume();
      }, pause() {
        i.pause();
      }, stop() {
        return i.stop(), te.masterNode.disconnect(s), n.getTracks().forEach((c) => c.stop()), new Promise((c) => {
          i.onstop = () => {
            c(new Blob(a, { type: "video/mp4" }));
          };
        });
      }, download(c = "kaboom.mp4") {
        this.stop().then((f) => Gn(c, f));
      } };
    }
    __name(Ks, "Ks");
    o(Ks, "record");
    function Ys() {
      return document.activeElement === U.canvas();
    }
    __name(Ys, "Ys");
    o(Ys, "isFocused");
    function Xs(e) {
      e.destroy();
    }
    __name(Xs, "Xs");
    o(Xs, "destroy");
    let ht = A.root.add.bind(A.root), Ws = A.root.readd.bind(A.root), Js = A.root.removeAll.bind(A.root), sr = A.root.get.bind(A.root);
    function ir(e = 2, n = 1) {
      let s = 0;
      return { id: "boom", require: ["scale"], update() {
        let i = Math.sin(s * e) * n;
        i < 0 && this.destroy(), this.scale = T(i), s += Ue();
      } };
    }
    __name(ir, "ir");
    o(ir, "boom");
    let Qs = Ie(null, Dr), Zs = Ie(null, Gr);
    function ei(e, n = {}) {
      var _a21, _b2;
      let s = ht([Lt(e), er()]), i = (n.speed || 1) * 5, a = n.scale || 1;
      s.add([wn(Zs), It(0), gn("center"), ir(i, a), ...(_a21 = n.comps) != null ? _a21 : []]);
      let c = s.add([wn(Qs), It(0), gn("center"), Zn(), ...(_b2 = n.comps) != null ? _b2 : []]);
      return c.wait(0.4 / i, () => c.use(ir(i, a))), c.onDestroy(() => s.destroy()), s;
    }
    __name(ei, "ei");
    o(ei, "addKaboom");
    function or() {
      A.root.update();
    }
    __name(or, "or");
    o(or, "updateFrame");
    const _bn = class {
      constructor(n, s, i, a = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = n, this.target = s, this.displacement = i, this.resolved = a;
      }
      reverse() {
        return new _bn(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolution() {
        this.resolved = true;
      }
    };
    let bn = _bn;
    __name(bn, "bn");
    (() => {
      o(_bn, "Collision");
    })();
    function ti() {
      let e = {}, n = r.hashGridSize || Si, s = new be(), i = [];
      function a(c) {
        if (i.push(s.clone()), c.pos && s.translate(c.pos), c.scale && s.scale(c.scale), c.angle && s.rotate(c.angle), c.transform = s.clone(), c.c("area") && !c.paused) {
          let f = c, m = f.worldArea().bbox(), l = Math.floor(m.pos.x / n), p = Math.floor(m.pos.y / n), C = Math.ceil((m.pos.x + m.width) / n), R = Math.ceil((m.pos.y + m.height) / n), G = /* @__PURE__ */ new Set();
          for (let k = l; k <= C; k++)
            for (let M = p; M <= R; M++)
              if (!e[k])
                e[k] = {}, e[k][M] = [f];
              else if (!e[k][M])
                e[k][M] = [f];
              else {
                let O = e[k][M];
                e:
                  for (let re of O) {
                    if (!re.exists() || G.has(re.id))
                      continue;
                    for (let j of f.collisionIgnore)
                      if (re.is(j))
                        continue e;
                    for (let j of re.collisionIgnore)
                      if (f.is(j))
                        continue e;
                    let K = xr(f.worldArea(), re.worldArea());
                    if (K) {
                      let j = new bn(f, re, K);
                      f.trigger("collideUpdate", re, j);
                      let I = j.reverse();
                      I.resolved = j.resolved, re.trigger("collideUpdate", f, I);
                    }
                    G.add(re.id);
                  }
                O.push(f);
              }
        }
        c.children.forEach(a), s = i.pop();
      }
      __name(a, "a");
      o(a, "checkObj"), a(A.root);
    }
    __name(ti, "ti");
    o(ti, "checkFrame");
    function ni() {
      var _a21;
      let e = A.cam, n = y.fromAngle(gt(0, 360)).scale(e.shake);
      e.shake = Se(e.shake, 0, 5 * Ue()), e.transform = new be().translate(Vt()).scale(e.scale).rotate(e.angle).translate(((_a21 = e.pos) != null ? _a21 : Vt()).scale(-1).add(n)), A.root.draw(), z();
    }
    __name(ni, "ni");
    o(ni, "drawFrame");
    function ri() {
      let e = Ce();
      A.events.numListeners("loading") > 0 ? A.events.trigger("loading", e) : Be(() => {
        let n = pe() / 2, s = 24, i = T(pe() / 2, we() / 2).sub(T(n / 2, s / 2));
        xe({ pos: T(0), width: pe(), height: we(), color: J(0, 0, 0) }), xe({ pos: i, width: n, height: s, fill: false, outline: { width: 4 } }), xe({ pos: i, width: n * e, height: s });
      });
    }
    __name(ri, "ri");
    o(ri, "drawLoadScreen");
    function ar(e, n) {
      Be(() => {
        let s = T(8);
        E(), Q(e);
        let i = Ne({ text: n, font: zt, size: 16, pos: s, color: J(255, 255, 255), fixed: true }), a = i.width + s.x * 2, c = i.height + s.x * 2;
        e.x + a >= pe() && Q(T(-a, 0)), e.y + c >= we() && Q(T(0, -c)), xe({ width: a, height: c, color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), je(i), L();
      });
    }
    __name(ar, "ar");
    o(ar, "drawInspectText");
    function si() {
      if (ne.inspect) {
        let e = null;
        for (let n of A.root.get("*", { recursive: true }))
          if (n.c("area") && n.isHovering()) {
            e = n;
            break;
          }
        if (A.root.drawInspect(), e) {
          let n = [], s = e.inspect();
          for (let i in s)
            s[i] ? n.push(`${i}: ${s[i]}`) : n.push(`${i}`);
          ar(Qr(Dt()), n.join(`
`));
        }
        ar(T(8), `FPS: ${ne.fps()}`);
      }
      ne.paused && Be(() => {
        E(), Q(pe(), 0), Q(-8, 8);
        let e = 32;
        xe({ width: e, height: e, anchor: "topright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let n = 1; n <= 2; n++)
          xe({ width: 4, height: e * 0.6, anchor: "center", pos: T(-e / 3 * n, e * 0.5), color: J(255, 255, 255), radius: 2, fixed: true });
        L();
      }), ne.timeScale !== 1 && Be(() => {
        E(), Q(pe(), we()), Q(-8, -8);
        let e = 8, n = Ne({ text: ne.timeScale.toFixed(1), font: zt, size: 16, color: J(255, 255, 255), pos: T(-e), anchor: "botright", fixed: true });
        xe({ width: n.width + e * 2 + e * 4, height: n.height + e * 2, anchor: "botright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let s = 0; s < 2; s++) {
          let i = ne.timeScale < 1;
          kn({ p1: T(-n.width - e * (i ? 2 : 3.5), -e), p2: T(-n.width - e * (i ? 2 : 3.5), -e - n.height), p3: T(-n.width - e * (i ? 3.5 : 2), -e - n.height / 2), pos: T(-s * e * 1 + (i ? -e * 0.5 : 0), 0), color: J(255, 255, 255), fixed: true });
        }
        je(n), L();
      }), ne.curRecording && Be(() => {
        E(), Q(0, we()), Q(24, -24), Xe({ radius: 12, color: J(255, 0, 0), opacity: An(0, 1, U.time() * 4), fixed: true }), L();
      }), ne.showLog && A.logs.length > 0 && Be(() => {
        var _a21;
        E(), Q(0, we()), Q(8, -8);
        let e = 8, n = [];
        for (let i of A.logs) {
          let a = "", c = i.msg instanceof Error ? "error" : "info";
          a += `[time]${i.time.toFixed(2)}[/time]`, a += " ", a += `[${c}]${((_a21 = i.msg) == null ? void 0 : _a21.toString) ? i.msg.toString() : i.msg}[/${c}]`, n.push(a);
        }
        A.logs = A.logs.filter((i) => U.time() - i.time < (r.logTime || Ti));
        let s = Ne({ text: n.join(`
`), font: zt, pos: T(e, -e), anchor: "botleft", size: 16, width: pe() * 0.6, lineSpacing: e / 2, fixed: true, styles: { time: { color: J(127, 127, 127) }, info: { color: J(255, 255, 255) }, error: { color: J(255, 0, 127) } } });
        xe({ width: s.width + e * 2, height: s.height + e * 2, anchor: "botleft", color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), je(s), L();
      });
    }
    __name(si, "si");
    o(si, "drawDebug"), r.debug !== false && Jn(), r.burp && Qn();
    function ii(e) {
      A.events.on("loading", e);
    }
    __name(ii, "ii");
    o(ii, "onLoading");
    function oi(e) {
      U.onResize(e);
    }
    __name(oi, "oi");
    o(oi, "onResize");
    function ai(e) {
      A.events.on("error", e);
    }
    __name(ai, "ai");
    o(ai, "onError");
    function yn(e) {
      U.run(() => {
        Be(() => {
          let i = pe(), a = we(), c = { size: 36, width: i - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: zt, fixed: true };
          xe({ width: i, height: a, color: J(0, 0, 255), fixed: true });
          let f = Ne(__spreadProps(__spreadValues({}, c), { text: e.name, pos: T(32), color: J(255, 128, 0), fixed: true }));
          je(f), Kn(__spreadProps(__spreadValues({}, c), { text: e.message, pos: T(32, 32 + f.height + 16), fixed: true })), L(), A.events.trigger("error", e);
        });
      });
    }
    __name(yn, "yn");
    o(yn, "handleErr");
    function ui(e) {
      X.push(e);
    }
    __name(ui, "ui");
    o(ui, "onCleanup");
    function ci() {
      A.events.onOnce("frameEnd", () => {
        U.quit();
        for (let n in We)
          window.removeEventListener(n, We[n]);
        d.clear(d.COLOR_BUFFER_BIT | d.DEPTH_BUFFER_BIT | d.STENCIL_BUFFER_BIT);
        let e = d.getParameter(d.MAX_TEXTURE_IMAGE_UNITS);
        for (let n = 0; n < e; n++)
          d.activeTexture(d.TEXTURE0 + n), d.bindTexture(d.TEXTURE_2D, null), d.bindTexture(d.TEXTURE_CUBE_MAP, null);
        d.bindBuffer(d.ARRAY_BUFFER, null), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, null), d.bindRenderbuffer(d.RENDERBUFFER, null), d.bindFramebuffer(d.FRAMEBUFFER, null), X.forEach((n) => n()), d.deleteBuffer(v.vbuf), d.deleteBuffer(v.ibuf);
      });
    }
    __name(ci, "ci");
    o(ci, "quit");
    function xn(e, n, s, i, a = tt.linear) {
      let c = 0, f = [], g = mn(() => {
        c += Ue();
        let m = Math.min(c / s, 1);
        i(Se(e, n, a(m))), m === 1 && (g.cancel(), i(n), f.forEach((l) => l()));
      });
      return { get paused() {
        return g.paused;
      }, set paused(m) {
        g.paused = m;
      }, onEnd(m) {
        f.push(m);
      }, then(m) {
        return this.onEnd(m), this;
      }, cancel() {
        g.cancel();
      }, finish() {
        g.cancel(), i(n), f.forEach((m) => m());
      } };
    }
    __name(xn, "xn");
    o(xn, "tween");
    let Nt = true;
    U.run(() => {
      V.loaded || Ce() === 1 && !Nt && (V.loaded = true, A.events.trigger("load")), !V.loaded && r.loadingScreen !== false || Nt ? (Ge(), ri(), at()) : (ne.paused || or(), ti(), Ge(), ni(), r.debug !== false && si(), at()), Nt && (Nt = false), A.events.trigger("frameEnd");
    });
    function ur() {
      let e = N, n = d.drawingBufferWidth / e, s = d.drawingBufferHeight / e;
      if (U.isFullscreen()) {
        let i = window.innerWidth, a = window.innerHeight, c = i / a, f = n / s;
        if (c > f) {
          let g = window.innerHeight * f;
          v.viewport = { x: (i - g) / 2, y: 0, width: g, height: a };
        } else {
          let g = window.innerWidth / f;
          v.viewport = { x: 0, y: (a - g) / 2, width: i, height: g };
        }
        return;
      }
      if (r.letterbox) {
        if (!r.width || !r.height)
          throw new Error("Letterboxing requires width and height defined.");
        let i = n / s, a = r.width / r.height;
        if (i > a) {
          let c = s * a, f = (n - c) / 2;
          v.viewport = { x: f, y: 0, width: c, height: s };
        } else {
          let c = n / a, f = (s - c) / 2;
          v.viewport = { x: 0, y: f, width: n, height: c };
        }
        return;
      }
      if (r.stretch && (!r.width || !r.height))
        throw new Error("Stretching requires width and height defined.");
      v.viewport = { x: 0, y: 0, width: n, height: s };
    }
    __name(ur, "ur");
    o(ur, "updateViewport"), U.onHide(() => {
      r.backgroundAudio || te.ctx.suspend();
    }), U.onShow(() => {
      r.backgroundAudio || te.ctx.resume();
    }), U.onResize(() => {
      if (U.isFullscreen())
        return;
      let e = r.width && r.height;
      e && !r.stretch && !r.letterbox || (u.width = u.offsetWidth * N, u.height = u.offsetHeight * N, ur(), e || (v.frameBuffer.free(), v.frameBuffer = new De(d.drawingBufferWidth, d.drawingBufferHeight), v.width = d.drawingBufferWidth / N, v.height = d.drawingBufferHeight / N));
    }), ur();
    let ke = { VERSION: xi, loadRoot: Yt, loadProgress: Ce, loadSprite: Ie, loadSpriteAtlas: yt, loadSound: sn, loadBitmapFont: Zt, loadFont: Qt, loadShader: nn, loadShaderURL: rn, loadAseprite: tn, loadPedit: en, loadBean: on, loadJSON: Jt, load: rt, getSprite: Ut, getSound: Et, getFont: St, getBitmapFont: Ct, getShader: Tt, getAsset: an, Asset: ae, SpriteData: ce, SoundData: ge, width: pe, height: we, center: Vt, dt: Ue, time: U.time, screenshot: U.screenshot, record: Ks, isFocused: Ys, setCursor: U.setCursor, getCursor: U.getCursor, setCursorLocked: U.setCursorLocked, isCursorLocked: U.isCursorLocked, setFullscreen: U.setFullscreen, isFullscreen: U.isFullscreen, isTouchscreen: U.isTouchscreen, onLoad: vn, onLoading: ii, onResize: oi, onGamepadConnect: U.onGamepadConnect, onGamepadDisconnect: U.onGamepadDisconnect, onError: ai, onCleanup: ui, camPos: Zr, camScale: es, camRot: ts, shake: ns, toScreen: Yn, toWorld: Xn, setGravity: ds, getGravity: fs, setBackground: ms, getBackground: ps, getGamepads: U.getGamepads, add: ht, make: fn, destroy: Xs, destroyAll: Js, get: sr, readd: Ws, pos: Lt, scale: It, rotate: gs, color: ws, opacity: vs, anchor: gn, area: Ss, sprite: wn, text: Cs, rect: Ts, circle: Os, uvquad: As, outline: Ps, body: Ds, doubleJump: Gs, shader: Fs, timer: Zn, fixed: Bs, stay: er, health: Ls, lifespan: Is, z: bs, move: xs, offscreen: Es, follow: ys, state: Vs, fadeIn: Ns, tile: rr, agent: zs, on: Le, onUpdate: mn, onDraw: rs, onAdd: pn, onDestroy: Wn, onClick: as, onCollide: ss, onCollideUpdate: is, onCollideEnd: os, onHover: us, onHoverUpdate: cs, onHoverEnd: ls, onKeyDown: U.onKeyDown, onKeyPress: U.onKeyPress, onKeyPressRepeat: U.onKeyPressRepeat, onKeyRelease: U.onKeyRelease, onMouseDown: U.onMouseDown, onMousePress: U.onMousePress, onMouseRelease: U.onMouseRelease, onMouseMove: U.onMouseMove, onCharInput: U.onCharInput, onTouchStart: U.onTouchStart, onTouchMove: U.onTouchMove, onTouchEnd: U.onTouchEnd, onScroll: U.onScroll, onHide: U.onHide, onShow: U.onShow, onGamepadButtonDown: U.onGamepadButtonDown, onGamepadButtonPress: U.onGamepadButtonPress, onGamepadButtonRelease: U.onGamepadButtonRelease, onGamepadStick: U.onGamepadStick, mousePos: Dt, mouseDeltaPos: U.mouseDeltaPos, isKeyDown: U.isKeyDown, isKeyPressed: U.isKeyPressed, isKeyPressedRepeat: U.isKeyPressedRepeat, isKeyReleased: U.isKeyReleased, isMouseDown: U.isMouseDown, isMousePressed: U.isMousePressed, isMouseReleased: U.isMouseReleased, isMouseMoved: U.isMouseMoved, isGamepadButtonPressed: U.isGamepadButtonPressed, isGamepadButtonDown: U.isGamepadButtonDown, isGamepadButtonReleased: U.isGamepadButtonReleased, charInputted: U.charInputted, loop: hs, wait: Bt, play: Pt, volume: Ot, burp: Mt, audioCtx: te.ctx, Timer: vt, Line: Oe, Rect: le, Circle: pt, Polygon: He, Vec2: y, Color: q, Mat4: be, Quad: ue, RNG: ft, rand: gt, randi: On, randSeed: fr, vec2: T, rgb: J, hsl2rgb: dr, quad: ie, choose: pr, chance: mr, lerp: Se, tween: xn, easings: tt, map: jt, mapc: hr, wave: An, deg2rad: Ee, rad2deg: Ze, clamp: Pe, testLineLine: Qe, testRectRect: gr, testRectLine: wr, testRectPoint: mt, testCirclePolygon: yr, testLinePoint: vr, testLineCircle: Pn, drawSprite: Ye, drawText: Kn, formatText: Ne, drawRect: xe, drawLine: ut, drawLines: jn, drawTriangle: kn, drawCircle: Xe, drawEllipse: _n, drawUVQuad: me, drawPolygon: Ve, drawFormattedText: je, drawMasked: Yr, drawSubtracted: Xr, pushTransform: E, popTransform: L, pushTranslate: Q, pushScale: h, pushRotate: x, pushMatrix: Rt, usePostEffect: Fe, debug: ne, scene: js, go: ks, onSceneLeave: _s, addLevel: $s, getData: Hs, setData: tr, download: _t, downloadJSON: Er, downloadText: Dn, downloadBlob: Gn, plug: nr, ASCII_CHARS: Fr, canvas: U.canvas(), addKaboom: ei, LEFT: y.LEFT, RIGHT: y.RIGHT, UP: y.UP, DOWN: y.DOWN, RED: q.RED, GREEN: q.GREEN, BLUE: q.BLUE, YELLOW: q.YELLOW, MAGENTA: q.MAGENTA, CYAN: q.CYAN, WHITE: q.WHITE, BLACK: q.BLACK, quit: ci, Event: ve, EventHandler: Re, EventController: Me };
    if (r.plugins && r.plugins.forEach(nr), r.global !== false)
      for (let e in ke)
        window[e] = ke[e];
    return U.canvas().focus(), ke;
  }, "default");

  // code/main.ts
  ho({
    background: [255, 225, 102]
  });
  loadSprite("bean", "sprites/bean.png");
  loadSprite("coronavirus", "sprites/coronavirus.png");
  loadSound("success-fanfare-trumpets-6185", "sounds/success-fanfare-trumpets-6185.mp3");
  loadSound("score", "sounds/score.mp3");
  loadSound("jump", "sounds/jump.wav");
  loadSound("gover", "sounds/gover.mp3");
  loadSound("die", "sounds/die.wav");
  loadSound("tunetank", "sounds/tunetank.com_5709_fire-cocktail_by_alexey-anisimov.mp3");
  loadSprite("syringe", "sprites/syringe.png");
  loadSprite("mask", "sprites/mask.png");
  loadSprite("man", "sprites/man.png");
  var bspeed = 2;
  var speed = 320;
  var bg = false;
  var gameover = false;
  var player = add([
    sprite("mask"),
    pos(80, 40),
    scale(0.13),
    area()
  ]);
  var score = add([
    text("Unused Dose: 0"),
    pos(80, 40),
    {
      value: 0
    }
  ]);
  var active = add([
    text("Active Dose: 0"),
    pos(400, 40),
    {
      value: 0
    }
  ]);
  player.onKeyPress("u", () => {
    if (score.value > 0) {
      score.value -= 1;
      score.text = "Unused Dose: " + score.value;
      active.value += 1;
      console.log(player.pos);
      active.text = "Active Dose: " + active.value;
      if (bspeed <= 10) {
        bspeed += 1;
      }
      if (active.value >= 2) {
        player.use(sprite("man"));
      } else {
        player.use(sprite("mask"));
      }
    }
  });
  player.onKeyDown("up", () => {
    if (!bg) {
      play("tunetank", {
        volume: 0.3
      });
      bg = true;
    }
    player.move(0, -speed);
  });
  player.onKeyDown("down", () => {
    if (!bg) {
      play("tunetank", {
        volume: 0.3
      });
      bg = true;
    }
    player.move(0, speed);
  });
  player.onKeyDown("left", () => {
    if (!bg) {
      play("tunetank", {
        volume: 0.3
      });
      bg = true;
    }
    player.move(-speed, 0);
  });
  player.onKeyDown("right", () => {
    if (!bg) {
      play("tunetank", {
        volume: 0.3
      });
      bg = true;
    }
    player.move(speed, 0);
  });
  loop(2, () => {
    let e = add([
      sprite("coronavirus"),
      scale(0.13),
      pos(rand(vec2(width(), height()))),
      area(),
      "covid"
    ]);
    e.onUpdate(() => {
      e.moveTo(e.pos.x, e.pos.y - bspeed);
    });
  });
  loop(2, () => {
    if (!gameover) {
      let e = add([
        sprite("coronavirus"),
        scale(0.13),
        pos(rand(vec2(width(), height()))),
        area(),
        "covid19"
      ]);
      e.onUpdate(() => {
        e.moveTo(e.pos.x - bspeed, e.pos.y);
      });
    }
  });
  loop(4, () => {
    if (!gameover) {
      let e = add([
        sprite("syringe"),
        scale(0.13),
        pos(rand(vec2(width(), height()))),
        area(),
        "vaccine"
      ]);
      e.onUpdate(() => {
        e.moveTo(e.pos.x - bspeed, e.pos.y);
      });
    }
  });
  player.onCollide("covid", (covid) => {
    if (active.value >= 2) {
      player.use(sprite("man"));
      destroy(covid);
    } else {
      player.use(sprite("mask"));
    }
    if (score.value >= 100) {
      bspeed = 10;
      gameover = true;
      play("tunetank", {
        volume: 0.7
      });
      player.moveTo(575.9987199999995, 408.00224000000014);
      add([
        text("You Won"),
        pos(554.6831999999997, 546.6422400000006),
        {
          value: 0
        }
      ]);
    }
    if (active.dose >= 2) {
      destroy(covid);
    } else {
      if (!score.value >= 100) {
        destroy(player);
        volume(0.1);
        gameover = true;
        play("gover");
        bspeed = 10;
        add([
          text("Game Over"),
          pos(554.6831999999997, 546.6422400000006),
          {
            value: 0
          }
        ]);
      }
    }
  });
  player.onCollide("covid19", (covid19) => {
    if (active.value >= 2) {
      player.use(sprite("man"));
    } else {
      player.use(sprite("mask"));
    }
    if (score.value >= 100) {
      volume(0.1);
      play("tunetank", {
        volume: 0.7
      });
      bspeed = 10;
      gameover = true;
      player.moveTo(575.9987199999995, 408.00224000000014);
      add([
        text("You Won"),
        pos(554.6831999999997, 546.6422400000006),
        {
          value: 0
        }
      ]);
    }
    if (active.dose >= 2) {
      destroy(covid19);
    } else {
      destroy(player);
      volume(0.1);
      gameover = true;
      play("gover");
      bspeed = 10;
      if (!score.value >= 100) {
        add([
          text("Game Over"),
          pos(554.6831999999997, 546.6422400000006),
          {
            value: 0
          }
        ]);
      }
    }
  });
  player.onCollide("vaccine", (vaccine) => {
    play("score");
    score.value += 1;
    score.text = "Unused Dose: " + score.value;
    destroy(vaccine);
    console.log("Crash");
  });
})();
//# sourceMappingURL=game.js.map
