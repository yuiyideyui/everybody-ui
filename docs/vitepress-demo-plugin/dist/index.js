import { openBlock as j, createElementBlock as B, createElementVNode as L, ref as H, defineComponent as gt, computed as it, createStaticVNode as Mi, watch as lt, createBlock as nt, Transition as Ui, withCtx as rt, normalizeClass as W, unref as D, normalizeStyle as di, toDisplayString as mt, createCommentVNode as V, createApp as Wi, renderSlot as he, createTextVNode as mi, onMounted as Fi, onUnmounted as $e, inject as je, watchEffect as zi, nextTick as Xt, Fragment as De, renderList as Ie, createVNode as et } from "vue";
import { codeToHtml as Ki } from "shiki";
import q from "path";
import kt from "fs";
const Y = (n, i) => {
  const e = n.__vccOpts || n;
  for (const [t, a] of i)
    e[t] = a;
  return e;
}, qi = {}, Vi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-code"
};
function Gi(n, i) {
  return j(), B("svg", Vi, i[0] || (i[0] = [
    L("polyline", { points: "16 18 22 12 16 6" }, null, -1),
    L("polyline", { points: "8 6 2 12 8 18" }, null, -1)
  ]));
}
const Hi = /* @__PURE__ */ Y(qi, [["render", Gi]]), Xi = {}, Qi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-code-xml"
};
function Ji(n, i) {
  return j(), B("svg", Qi, i[0] || (i[0] = [
    L("path", { d: "m18 16 4-4-4-4" }, null, -1),
    L("path", { d: "m6 8-4 4 4 4" }, null, -1),
    L("path", { d: "m14.5 4-5 16" }, null, -1)
  ]));
}
const Zi = /* @__PURE__ */ Y(Xi, [["render", Ji]]), Yi = {}, tn = {
  "data-v-c3ada0ea": "",
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function en(n, i) {
  return j(), B("svg", tn, i[0] || (i[0] = [
    L("path", {
      fill: "currentColor",
      d: "M16 2v2h-1v3.243a8 8 0 0 0 .736 3.352l4.281 9.276A1.5 1.5 0 0 1 18.655 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.281-9.276A8 8 0 0 0 9 7.243V4H8V2zm-2.613 8.001h-2.776q-.156.545-.374 1.071l-.158.362L6.124 20h11.75l-3.954-8.566A10 10 0 0 1 13.387 10M11 7.243q0 .38-.028.758h2.057a10 10 0 0 1-.02-.364L13 7.243V4h-2z"
    }, null, -1)
  ]));
}
const nn = /* @__PURE__ */ Y(Yi, [["render", en]]), sn = {}, rn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-copy"
};
function an(n, i) {
  return j(), B("svg", rn, i[0] || (i[0] = [
    L("rect", {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2"
    }, null, -1),
    L("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }, null, -1)
  ]));
}
const on = /* @__PURE__ */ Y(sn, [["render", an]]), _n = {}, un = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-arrow-up-from-line"
};
function ln(n, i) {
  return j(), B("svg", un, i[0] || (i[0] = [
    L("path", { d: "m18 9-6-6-6 6" }, null, -1),
    L("path", { d: "M12 3v14" }, null, -1),
    L("path", { d: "M5 21h14" }, null, -1)
  ]));
}
const pn = /* @__PURE__ */ Y(_n, [["render", ln]]);
function cn(n) {
  return n === "vue" ? "/src/Demo.vue" : n === "react" ? "/src/Demo.tsx" : "index.html";
}
var I = /* @__PURE__ */ ((n) => (n.VUE = "vue", n.REACT = "react", n.HTML = "html", n))(I || {}), at = /* @__PURE__ */ ((n) => (n.STACKBLITZ = "stackblitz", n.CODESANDBOX = "codesandbox", n))(at || {});
const gi = "vitepress-demo", vi = "This is a demo from vitepress-demo-plugin";
var Mt = {}, bi = { exports: {} };
(function(n) {
  var i = function() {
    var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", _ = {};
    function f(u, g) {
      if (!_[u]) {
        _[u] = {};
        for (var v = 0; v < u.length; v++)
          _[u][u.charAt(v)] = v;
      }
      return _[u][g];
    }
    var o = {
      compressToBase64: function(u) {
        if (u == null)
          return "";
        var g = o._compress(u, 6, function(v) {
          return t.charAt(v);
        });
        switch (g.length % 4) {
          default:
          case 0:
            return g;
          case 1:
            return g + "===";
          case 2:
            return g + "==";
          case 3:
            return g + "=";
        }
      },
      decompressFromBase64: function(u) {
        return u == null ? "" : u == "" ? null : o._decompress(u.length, 32, function(g) {
          return f(t, u.charAt(g));
        });
      },
      compressToUTF16: function(u) {
        return u == null ? "" : o._compress(u, 15, function(g) {
          return e(g + 32);
        }) + " ";
      },
      decompressFromUTF16: function(u) {
        return u == null ? "" : u == "" ? null : o._decompress(u.length, 16384, function(g) {
          return u.charCodeAt(g) - 32;
        });
      },
      compressToUint8Array: function(u) {
        for (var g = o.compress(u), v = new Uint8Array(g.length * 2), b = 0, h = g.length; b < h; b++) {
          var R = g.charCodeAt(b);
          v[b * 2] = R >>> 8, v[b * 2 + 1] = R % 256;
        }
        return v;
      },
      decompressFromUint8Array: function(u) {
        if (u == null)
          return o.decompress(u);
        for (var g = new Array(u.length / 2), v = 0, b = g.length; v < b; v++)
          g[v] = u[v * 2] * 256 + u[v * 2 + 1];
        var h = [];
        return g.forEach(function(R) {
          h.push(e(R));
        }), o.decompress(h.join(""));
      },
      compressToEncodedURIComponent: function(u) {
        return u == null ? "" : o._compress(u, 6, function(g) {
          return a.charAt(g);
        });
      },
      decompressFromEncodedURIComponent: function(u) {
        return u == null ? "" : u == "" ? null : (u = u.replace(/ /g, "+"), o._decompress(u.length, 32, function(g) {
          return f(a, u.charAt(g));
        }));
      },
      compress: function(u) {
        return o._compress(u, 16, function(g) {
          return e(g);
        });
      },
      _compress: function(u, g, v) {
        if (u == null)
          return "";
        var b, h, R = {}, A = {}, S = "", c = "", r = "", d = 2, T = 3, x = 2, E = [], l = 0, m = 0, p;
        for (p = 0; p < u.length; p += 1)
          if (S = u.charAt(p), Object.prototype.hasOwnProperty.call(R, S) || (R[S] = T++, A[S] = !0), c = r + S, Object.prototype.hasOwnProperty.call(R, c))
            r = c;
          else {
            if (Object.prototype.hasOwnProperty.call(A, r)) {
              if (r.charCodeAt(0) < 256) {
                for (b = 0; b < x; b++)
                  l = l << 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++;
                for (h = r.charCodeAt(0), b = 0; b < 8; b++)
                  l = l << 1 | h & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = h >> 1;
              } else {
                for (h = 1, b = 0; b < x; b++)
                  l = l << 1 | h, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = 0;
                for (h = r.charCodeAt(0), b = 0; b < 16; b++)
                  l = l << 1 | h & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = h >> 1;
              }
              d--, d == 0 && (d = Math.pow(2, x), x++), delete A[r];
            } else
              for (h = R[r], b = 0; b < x; b++)
                l = l << 1 | h & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = h >> 1;
            d--, d == 0 && (d = Math.pow(2, x), x++), R[c] = T++, r = String(S);
          }
        if (r !== "") {
          if (Object.prototype.hasOwnProperty.call(A, r)) {
            if (r.charCodeAt(0) < 256) {
              for (b = 0; b < x; b++)
                l = l << 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++;
              for (h = r.charCodeAt(0), b = 0; b < 8; b++)
                l = l << 1 | h & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = h >> 1;
            } else {
              for (h = 1, b = 0; b < x; b++)
                l = l << 1 | h, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = 0;
              for (h = r.charCodeAt(0), b = 0; b < 16; b++)
                l = l << 1 | h & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = h >> 1;
            }
            d--, d == 0 && (d = Math.pow(2, x), x++), delete A[r];
          } else
            for (h = R[r], b = 0; b < x; b++)
              l = l << 1 | h & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = h >> 1;
          d--, d == 0 && (d = Math.pow(2, x), x++);
        }
        for (h = 2, b = 0; b < x; b++)
          l = l << 1 | h & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, h = h >> 1;
        for (; ; )
          if (l = l << 1, m == g - 1) {
            E.push(v(l));
            break;
          } else
            m++;
        return E.join("");
      },
      decompress: function(u) {
        return u == null ? "" : u == "" ? null : o._decompress(u.length, 32768, function(g) {
          return u.charCodeAt(g);
        });
      },
      _decompress: function(u, g, v) {
        var b = [], h = 4, R = 4, A = 3, S = "", c = [], r, d, T, x, E, l, m, p = { val: v(0), position: g, index: 1 };
        for (r = 0; r < 3; r += 1)
          b[r] = r;
        for (T = 0, E = Math.pow(2, 2), l = 1; l != E; )
          x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
        switch (T) {
          case 0:
            for (T = 0, E = Math.pow(2, 8), l = 1; l != E; )
              x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
            m = e(T);
            break;
          case 1:
            for (T = 0, E = Math.pow(2, 16), l = 1; l != E; )
              x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
            m = e(T);
            break;
          case 2:
            return "";
        }
        for (b[3] = m, d = m, c.push(m); ; ) {
          if (p.index > u)
            return "";
          for (T = 0, E = Math.pow(2, A), l = 1; l != E; )
            x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
          switch (m = T) {
            case 0:
              for (T = 0, E = Math.pow(2, 8), l = 1; l != E; )
                x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
              b[R++] = e(T), m = R - 1, h--;
              break;
            case 1:
              for (T = 0, E = Math.pow(2, 16), l = 1; l != E; )
                x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
              b[R++] = e(T), m = R - 1, h--;
              break;
            case 2:
              return c.join("");
          }
          if (h == 0 && (h = Math.pow(2, A), A++), b[m])
            S = b[m];
          else if (m === R)
            S = d + d.charAt(0);
          else
            return null;
          c.push(S), b[R++] = d + S.charAt(0), h--, d = S, h == 0 && (h = Math.pow(2, A), A++);
        }
      }
    };
    return o;
  }();
  n != null ? n.exports = i : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return i;
  });
})(bi);
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.getParameters = void 0;
var hn = bi.exports;
function fn(n) {
  return hn.compressToBase64(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function dn(n) {
  return fn(JSON.stringify(n));
}
Mt.getParameters = dn;
var Ut = void 0, mn = Mt;
Ut = mn.getParameters;
var yi = { exports: {} }, wt = {}, Rt = { exports: {} }, Qt = {}, Jt = {}, Pe;
function fe() {
  if (Pe)
    return Jt;
  Pe = 1;
  function n(t) {
    this.__parent = t, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  n.prototype.clone_empty = function() {
    var t = new n(this.__parent);
    return t.set_indent(this.__indent_count, this.__alignment_count), t;
  }, n.prototype.item = function(t) {
    return t < 0 ? this.__items[this.__items.length + t] : this.__items[t];
  }, n.prototype.has_match = function(t) {
    for (var a = this.__items.length - 1; a >= 0; a--)
      if (this.__items[a].match(t))
        return !0;
    return !1;
  }, n.prototype.set_indent = function(t, a) {
    this.is_empty() && (this.__indent_count = t || 0, this.__alignment_count = a || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, n.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, n.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, n.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var t = this.__parent.current_line;
      return t.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), t.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), t.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, t.__items[0] === " " && (t.__items.splice(0, 1), t.__character_count -= 1), !0;
    }
    return !1;
  }, n.prototype.is_empty = function() {
    return this.__items.length === 0;
  }, n.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, n.prototype.push = function(t) {
    this.__items.push(t);
    var a = t.lastIndexOf(`
`);
    a !== -1 ? this.__character_count = t.length - a : this.__character_count += t.length;
  }, n.prototype.pop = function() {
    var t = null;
    return this.is_empty() || (t = this.__items.pop(), this.__character_count -= t.length), t;
  }, n.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, n.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, n.prototype.trim = function() {
    for (; this.last() === " "; )
      this.__items.pop(), this.__character_count -= 1;
  }, n.prototype.toString = function() {
    var t = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (t = this.__parent.get_indent_string(this.__indent_count)) : (t = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), t += this.__items.join("")), t;
  };
  function i(t, a) {
    this.__cache = [""], this.__indent_size = t.indent_size, this.__indent_string = t.indent_char, t.indent_with_tabs || (this.__indent_string = new Array(t.indent_size + 1).join(t.indent_char)), a = a || "", t.indent_level > 0 && (a = new Array(t.indent_level + 1).join(this.__indent_string)), this.__base_string = a, this.__base_string_length = a.length;
  }
  i.prototype.get_indent_size = function(t, a) {
    var _ = this.__base_string_length;
    return a = a || 0, t < 0 && (_ = 0), _ += t * this.__indent_size, _ += a, _;
  }, i.prototype.get_indent_string = function(t, a) {
    var _ = this.__base_string;
    return a = a || 0, t < 0 && (t = 0, _ = ""), a += t * this.__indent_size, this.__ensure_cache(a), _ += this.__cache[a], _;
  }, i.prototype.__ensure_cache = function(t) {
    for (; t >= this.__cache.length; )
      this.__add_column();
  }, i.prototype.__add_column = function() {
    var t = this.__cache.length, a = 0, _ = "";
    this.__indent_size && t >= this.__indent_size && (a = Math.floor(t / this.__indent_size), t -= a * this.__indent_size, _ = new Array(a + 1).join(this.__indent_string)), t && (_ += new Array(t + 1).join(" ")), this.__cache.push(_);
  };
  function e(t, a) {
    this.__indent_cache = new i(t, a), this.raw = !1, this._end_with_newline = t.end_with_newline, this.indent_size = t.indent_size, this.wrap_line_length = t.wrap_line_length, this.indent_empty_lines = t.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new n(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
  }
  return e.prototype.__add_outputline = function() {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, e.prototype.get_line_number = function() {
    return this.__lines.length;
  }, e.prototype.get_indent_string = function(t, a) {
    return this.__indent_cache.get_indent_string(t, a);
  }, e.prototype.get_indent_size = function(t, a) {
    return this.__indent_cache.get_indent_size(t, a);
  }, e.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  }, e.prototype.add_new_line = function(t) {
    return this.is_empty() || !t && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
  }, e.prototype.get_code = function(t) {
    this.trim(!0);
    var a = this.current_line.pop();
    a && (a[a.length - 1] === `
` && (a = a.replace(/\n+$/g, "")), this.current_line.push(a)), this._end_with_newline && this.__add_outputline();
    var _ = this.__lines.join(`
`);
    return t !== `
` && (_ = _.replace(/[\n]/g, t)), _;
  }, e.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  }, e.prototype.set_indent = function(t, a) {
    return t = t || 0, a = a || 0, this.next_line.set_indent(t, a), this.__lines.length > 1 ? (this.current_line.set_indent(t, a), !0) : (this.current_line.set_indent(), !1);
  }, e.prototype.add_raw_token = function(t) {
    for (var a = 0; a < t.newlines; a++)
      this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(t.whitespace_before), this.current_line.push(t.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
  }, e.prototype.add_token = function(t) {
    this.__add_space_before_token(), this.current_line.push(t), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, e.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, e.prototype.remove_indent = function(t) {
    for (var a = this.__lines.length; t < a; )
      this.__lines[t]._remove_indent(), t++;
    this.current_line._remove_wrap_indent();
  }, e.prototype.trim = function(t) {
    for (t = t === void 0 ? !1 : t, this.current_line.trim(); t && this.__lines.length > 1 && this.current_line.is_empty(); )
      this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, e.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  }, e.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, e.prototype.ensure_empty_line_above = function(t, a) {
    for (var _ = this.__lines.length - 2; _ >= 0; ) {
      var f = this.__lines[_];
      if (f.is_empty())
        break;
      if (f.item(0).indexOf(t) !== 0 && f.item(-1) !== a) {
        this.__lines.splice(_ + 1, 0, new n(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      _--;
    }
  }, Jt.Output = e, Jt;
}
var Zt = {}, Be;
function wi() {
  if (Be)
    return Zt;
  Be = 1;
  function n(i, e, t, a) {
    this.type = i, this.text = e, this.comments_before = null, this.newlines = t || 0, this.whitespace_before = a || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
  }
  return Zt.Token = n, Zt;
}
var Yt = {}, Me;
function xi() {
  return Me || (Me = 1, function(n) {
    var i = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", e = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", t = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", a = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", _ = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}", f = "(?:" + _ + "|[" + i + t + "])", o = "(?:" + _ + "|[" + e + t + a + "])*";
    n.identifier = new RegExp(f + o, "g"), n.identifierStart = new RegExp(f), n.identifierMatch = new RegExp("(?:" + _ + "|[" + e + t + a + "])+"), n.newline = /[\n\r\u2028\u2029]/, n.lineBreak = new RegExp(`\r
|` + n.newline.source), n.allLineBreaks = new RegExp(n.lineBreak.source, "g");
  }(Yt)), Yt;
}
var te = {}, xt = {}, Ue;
function de() {
  if (Ue)
    return xt;
  Ue = 1;
  function n(t, a) {
    this.raw_options = i(t, a), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  n.prototype._get_array = function(t, a) {
    var _ = this.raw_options[t], f = a || [];
    return typeof _ == "object" ? _ !== null && typeof _.concat == "function" && (f = _.concat()) : typeof _ == "string" && (f = _.split(/[^a-zA-Z0-9_\/\-]+/)), f;
  }, n.prototype._get_boolean = function(t, a) {
    var _ = this.raw_options[t], f = _ === void 0 ? !!a : !!_;
    return f;
  }, n.prototype._get_characters = function(t, a) {
    var _ = this.raw_options[t], f = a || "";
    return typeof _ == "string" && (f = _.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), f;
  }, n.prototype._get_number = function(t, a) {
    var _ = this.raw_options[t];
    a = parseInt(a, 10), isNaN(a) && (a = 0);
    var f = parseInt(_, 10);
    return isNaN(f) && (f = a), f;
  }, n.prototype._get_selection = function(t, a, _) {
    var f = this._get_selection_list(t, a, _);
    if (f.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" + t + `' can only be one of the following values:
` + a + `
You passed in: '` + this.raw_options[t] + "'"
      );
    return f[0];
  }, n.prototype._get_selection_list = function(t, a, _) {
    if (!a || a.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (_ = _ || [a[0]], !this._is_valid_selection(_, a))
      throw new Error("Invalid Default Value!");
    var f = this._get_array(t, _);
    if (!this._is_valid_selection(f, a))
      throw new Error(
        "Invalid Option Value: The option '" + t + `' can contain only the following values:
` + a + `
You passed in: '` + this.raw_options[t] + "'"
      );
    return f;
  }, n.prototype._is_valid_selection = function(t, a) {
    return t.length && a.length && !t.some(function(_) {
      return a.indexOf(_) === -1;
    });
  };
  function i(t, a) {
    var _ = {};
    t = e(t);
    var f;
    for (f in t)
      f !== a && (_[f] = t[f]);
    if (a && t[a])
      for (f in t[a])
        _[f] = t[a][f];
    return _;
  }
  function e(t) {
    var a = {}, _;
    for (_ in t) {
      var f = _.replace(/-/g, "_");
      a[f] = t[_];
    }
    return a;
  }
  return xt.Options = n, xt.normalizeOpts = e, xt.mergeOpts = i, xt;
}
var We;
function Ei() {
  if (We)
    return te;
  We = 1;
  var n = de().Options, i = ["before-newline", "after-newline", "preserve-newline"];
  function e(t) {
    n.call(this, t, "js");
    var a = this.raw_options.brace_style || null;
    a === "expand-strict" ? this.raw_options.brace_style = "expand" : a === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var _ = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = !1, this.brace_style = "collapse";
    for (var f = 0; f < _.length; f++)
      _[f] === "preserve-inline" ? this.brace_preserve_inline = !0 : this.brace_style = _[f];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", !0), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", i), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = !0);
  }
  return e.prototype = new n(), te.Options = e, te;
}
var ft = {}, ee = {}, Fe;
function me() {
  if (Fe)
    return ee;
  Fe = 1;
  var n = RegExp.prototype.hasOwnProperty("sticky");
  function i(e) {
    this.__input = e || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  return i.prototype.restart = function() {
    this.__position = 0;
  }, i.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1);
  }, i.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  }, i.prototype.next = function() {
    var e = null;
    return this.hasNext() && (e = this.__input.charAt(this.__position), this.__position += 1), e;
  }, i.prototype.peek = function(e) {
    var t = null;
    return e = e || 0, e += this.__position, e >= 0 && e < this.__input_length && (t = this.__input.charAt(e)), t;
  }, i.prototype.__match = function(e, t) {
    e.lastIndex = t;
    var a = e.exec(this.__input);
    return a && !(n && e.sticky) && a.index !== t && (a = null), a;
  }, i.prototype.test = function(e, t) {
    return t = t || 0, t += this.__position, t >= 0 && t < this.__input_length ? !!this.__match(e, t) : !1;
  }, i.prototype.testChar = function(e, t) {
    var a = this.peek(t);
    return e.lastIndex = 0, a !== null && e.test(a);
  }, i.prototype.match = function(e) {
    var t = this.__match(e, this.__position);
    return t ? this.__position += t[0].length : t = null, t;
  }, i.prototype.read = function(e, t, a) {
    var _ = "", f;
    return e && (f = this.match(e), f && (_ += f[0])), t && (f || !e) && (_ += this.readUntil(t, a)), _;
  }, i.prototype.readUntil = function(e, t) {
    var a = "", _ = this.__position;
    e.lastIndex = this.__position;
    var f = e.exec(this.__input);
    return f ? (_ = f.index, t && (_ += f[0].length)) : _ = this.__input_length, a = this.__input.substring(this.__position, _), this.__position = _, a;
  }, i.prototype.readUntilAfter = function(e) {
    return this.readUntil(e, !0);
  }, i.prototype.get_regexp = function(e, t) {
    var a = null, _ = "g";
    return t && n && (_ = "y"), typeof e == "string" && e !== "" ? a = new RegExp(e, _) : e && (a = new RegExp(e.source, _)), a;
  }, i.prototype.get_literal_regexp = function(e) {
    return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, i.prototype.peekUntilAfter = function(e) {
    var t = this.__position, a = this.readUntilAfter(e);
    return this.__position = t, a;
  }, i.prototype.lookBack = function(e) {
    var t = this.__position - 1;
    return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e;
  }, ee.InputScanner = i, ee;
}
var St = {}, ie = {}, ze;
function gn() {
  if (ze)
    return ie;
  ze = 1;
  function n(i) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = i;
  }
  return n.prototype.restart = function() {
    this.__position = 0;
  }, n.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  }, n.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  }, n.prototype.next = function() {
    var i = null;
    return this.hasNext() && (i = this.__tokens[this.__position], this.__position += 1), i;
  }, n.prototype.peek = function(i) {
    var e = null;
    return i = i || 0, i += this.__position, i >= 0 && i < this.__tokens_length && (e = this.__tokens[i]), e;
  }, n.prototype.add = function(i) {
    this.__parent_token && (i.parent = this.__parent_token), this.__tokens.push(i), this.__tokens_length += 1;
  }, ie.TokenStream = n, ie;
}
var ne = {}, se = {}, Ke;
function Wt() {
  if (Ke)
    return se;
  Ke = 1;
  function n(i, e) {
    this._input = i, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, e && (this._starting_pattern = this._input.get_regexp(e._starting_pattern, !0), this._match_pattern = this._input.get_regexp(e._match_pattern, !0), this._until_pattern = this._input.get_regexp(e._until_pattern), this._until_after = e._until_after);
  }
  return n.prototype.read = function() {
    var i = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || i) && (i += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), i;
  }, n.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  }, n.prototype.until_after = function(i) {
    var e = this._create();
    return e._until_after = !0, e._until_pattern = this._input.get_regexp(i), e._update(), e;
  }, n.prototype.until = function(i) {
    var e = this._create();
    return e._until_after = !1, e._until_pattern = this._input.get_regexp(i), e._update(), e;
  }, n.prototype.starting_with = function(i) {
    var e = this._create();
    return e._starting_pattern = this._input.get_regexp(i, !0), e._update(), e;
  }, n.prototype.matching = function(i) {
    var e = this._create();
    return e._match_pattern = this._input.get_regexp(i, !0), e._update(), e;
  }, n.prototype._create = function() {
    return new n(this._input, this);
  }, n.prototype._update = function() {
  }, se.Pattern = n, se;
}
var qe;
function vn() {
  if (qe)
    return ne;
  qe = 1;
  var n = Wt().Pattern;
  function i(e, t) {
    n.call(this, e, t), t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  return i.prototype = new n(), i.prototype.__set_whitespace_patterns = function(e, t) {
    e += "\\t ", t += "\\n\\r", this._match_pattern = this._input.get_regexp(
      "[" + e + t + "]+",
      !0
    ), this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + t + "]"
    );
  }, i.prototype.read = function() {
    this.newline_count = 0, this.whitespace_before_token = "";
    var e = this._input.read(this._match_pattern);
    if (e === " ")
      this.whitespace_before_token = " ";
    else if (e) {
      var t = this.__split(this._newline_regexp, e);
      this.newline_count = t.length - 1, this.whitespace_before_token = t[this.newline_count];
    }
    return e;
  }, i.prototype.matching = function(e, t) {
    var a = this._create();
    return a.__set_whitespace_patterns(e, t), a._update(), a;
  }, i.prototype._create = function() {
    return new i(this._input, this);
  }, i.prototype.__split = function(e, t) {
    e.lastIndex = 0;
    for (var a = 0, _ = [], f = e.exec(t); f; )
      _.push(t.substring(a, f.index)), a = f.index + f[0].length, f = e.exec(t);
    return a < t.length ? _.push(t.substring(a, t.length)) : _.push(""), _;
  }, ne.WhitespacePattern = i, ne;
}
var Ve;
function Pt() {
  if (Ve)
    return St;
  Ve = 1;
  var n = me().InputScanner, i = wi().Token, e = gn().TokenStream, t = vn().WhitespacePattern, a = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  }, _ = function(f, o) {
    this._input = new n(f), this._options = o || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new t(this._input);
  };
  return _.prototype.tokenize = function() {
    this._input.restart(), this.__tokens = new e(), this._reset();
    for (var f, o = new i(a.START, ""), u = null, g = [], v = new e(); o.type !== a.EOF; ) {
      for (f = this._get_next_token(o, u); this._is_comment(f); )
        v.add(f), f = this._get_next_token(o, u);
      v.isEmpty() || (f.comments_before = v, v = new e()), f.parent = u, this._is_opening(f) ? (g.push(u), u = f) : u && this._is_closing(f, u) && (f.opened = u, u.closed = f, u = g.pop(), f.parent = u), f.previous = o, o.next = f, this.__tokens.add(f), o = f;
    }
    return this.__tokens;
  }, _.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  }, _.prototype._reset = function() {
  }, _.prototype._get_next_token = function(f, o) {
    this._readWhitespace();
    var u = this._input.read(/.+/g);
    return u ? this._create_token(a.RAW, u) : this._create_token(a.EOF, "");
  }, _.prototype._is_comment = function(f) {
    return !1;
  }, _.prototype._is_opening = function(f) {
    return !1;
  }, _.prototype._is_closing = function(f, o) {
    return !1;
  }, _.prototype._create_token = function(f, o) {
    var u = new i(
      f,
      o,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return u;
  }, _.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  }, St.Tokenizer = _, St.TOKEN = a, St;
}
var re = {}, Ge;
function ge() {
  if (Ge)
    return re;
  Ge = 1;
  function n(i, e) {
    i = typeof i == "string" ? i : i.source, e = typeof e == "string" ? e : e.source, this.__directives_block_pattern = new RegExp(i + / beautify( \w+[:]\w+)+ /.source + e, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(i + /\sbeautify\signore:end\s/.source + e, "g");
  }
  return n.prototype.get_directives = function(i) {
    if (!i.match(this.__directives_block_pattern))
      return null;
    var e = {};
    this.__directive_pattern.lastIndex = 0;
    for (var t = this.__directive_pattern.exec(i); t; )
      e[t[1]] = t[2], t = this.__directive_pattern.exec(i);
    return e;
  }, n.prototype.readIgnored = function(i) {
    return i.readUntilAfter(this.__directives_end_ignore_pattern);
  }, re.Directives = n, re;
}
var ae = {}, He;
function Oi() {
  if (He)
    return ae;
  He = 1;
  var n = Wt().Pattern, i = {
    django: !1,
    erb: !1,
    handlebars: !1,
    php: !1,
    smarty: !1,
    angular: !1
  };
  function e(t, a) {
    n.call(this, t, a), this.__template_pattern = null, this._disabled = Object.assign({}, i), this._excluded = Object.assign({}, i), a && (this.__template_pattern = this._input.get_regexp(a.__template_pattern), this._excluded = Object.assign(this._excluded, a._excluded), this._disabled = Object.assign(this._disabled, a._disabled));
    var _ = new n(t);
    this.__patterns = {
      handlebars_comment: _.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: _.starting_with(/{{{/).until_after(/}}}/),
      handlebars: _.starting_with(/{{/).until_after(/}}/),
      php: _.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: _.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      django: _.starting_with(/{%/).until_after(/%}/),
      django_value: _.starting_with(/{{/).until_after(/}}/),
      django_comment: _.starting_with(/{#/).until_after(/#}/),
      smarty: _.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: _.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: _.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  return e.prototype = new n(), e.prototype._create = function() {
    return new e(this._input, this);
  }, e.prototype._update = function() {
    this.__set_templated_pattern();
  }, e.prototype.disable = function(t) {
    var a = this._create();
    return a._disabled[t] = !0, a._update(), a;
  }, e.prototype.read_options = function(t) {
    var a = this._create();
    for (var _ in i)
      a._disabled[_] = t.templating.indexOf(_) === -1;
    return a._update(), a;
  }, e.prototype.exclude = function(t) {
    var a = this._create();
    return a._excluded[t] = !0, a._update(), a;
  }, e.prototype.read = function() {
    var t = "";
    this._match_pattern ? t = this._input.read(this._starting_pattern) : t = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var a = this._read_template(); a; )
      this._match_pattern ? a += this._input.read(this._match_pattern) : a += this._input.readUntil(this.__template_pattern), t += a, a = this._read_template();
    return this._until_after && (t += this._input.readUntilAfter(this._until_pattern)), t;
  }, e.prototype.__set_templated_pattern = function() {
    var t = [];
    this._disabled.php || t.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || t.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || t.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (t.push(this.__patterns.django._starting_pattern.source), t.push(this.__patterns.django_value._starting_pattern.source), t.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || t.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && t.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + t.join("|") + ")");
  }, e.prototype._read_template = function() {
    var t = "", a = this._input.peek();
    if (a === "<") {
      var _ = this._input.peek(1);
      !this._disabled.php && !this._excluded.php && _ === "?" && (t = t || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && _ === "%" && (t = t || this.__patterns.erb.read());
    } else
      a === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (t = t || this.__patterns.handlebars_comment.read(), t = t || this.__patterns.handlebars_unescaped.read(), t = t || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (t = t || this.__patterns.django_value.read()), this._excluded.django || (t = t || this.__patterns.django_comment.read(), t = t || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (t = t || this.__patterns.smarty_comment.read(), t = t || this.__patterns.smarty_literal.read(), t = t || this.__patterns.smarty.read()));
    return t;
  }, ae.TemplatablePattern = e, ae;
}
var Xe;
function Ct() {
  if (Xe)
    return ft;
  Xe = 1;
  var n = me().InputScanner, i = Pt().Tokenizer, e = Pt().TOKEN, t = ge().Directives, a = xi(), _ = Wt().Pattern, f = Oi().TemplatablePattern;
  function o(l, m) {
    return m.indexOf(l) !== -1;
  }
  var u = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: e.START,
    RAW: e.RAW,
    EOF: e.EOF
  }, g = new t(/\/\*/, /\*\//), v = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, b = /[0-9]/, h = /[^\d\.]/, R = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), A = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  A = A.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), A = "\\?\\.(?!\\d) " + A, A = A.replace(/ /g, "|");
  var S = new RegExp(A), c = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), r = c.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]), d = new RegExp("^(?:" + r.join("|") + ")$"), T, x = function(l, m) {
    i.call(this, l, m), this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var p = new _(this._input), O = new f(this._input).read_options(this._options);
    this.__patterns = {
      template: O,
      identifier: O.starting_with(a.identifier).matching(a.identifierMatch),
      number: p.matching(v),
      punct: p.matching(S),
      comment: p.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      block_comment: p.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: p.matching(/<!--/),
      html_comment_end: p.matching(/-->/),
      include: p.starting_with(/#include/).until_after(a.lineBreak),
      shebang: p.starting_with(/#!/).until_after(a.lineBreak),
      xml: p.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: O.until(/['\\\n\r\u2028\u2029]/),
      double_quote: O.until(/["\\\n\r\u2028\u2029]/),
      template_text: O.until(/[`\\$]/),
      template_expression: O.until(/[`}\\]/)
    };
  };
  x.prototype = new i(), x.prototype._is_comment = function(l) {
    return l.type === u.COMMENT || l.type === u.BLOCK_COMMENT || l.type === u.UNKNOWN;
  }, x.prototype._is_opening = function(l) {
    return l.type === u.START_BLOCK || l.type === u.START_EXPR;
  }, x.prototype._is_closing = function(l, m) {
    return (l.type === u.END_BLOCK || l.type === u.END_EXPR) && m && (l.text === "]" && m.text === "[" || l.text === ")" && m.text === "(" || l.text === "}" && m.text === "{");
  }, x.prototype._reset = function() {
    T = !1;
  }, x.prototype._get_next_token = function(l, m) {
    var p = null;
    this._readWhitespace();
    var O = this._input.peek();
    return O === null ? this._create_token(u.EOF, "") : (p = p || this._read_non_javascript(O), p = p || this._read_string(O), p = p || this._read_pair(O, this._input.peek(1)), p = p || this._read_word(l), p = p || this._read_singles(O), p = p || this._read_comment(O), p = p || this._read_regexp(O, l), p = p || this._read_xml(O, l), p = p || this._read_punctuation(), p = p || this._create_token(u.UNKNOWN, this._input.next()), p);
  }, x.prototype._read_word = function(l) {
    var m;
    if (m = this.__patterns.identifier.read(), m !== "")
      return m = m.replace(a.allLineBreaks, `
`), !(l.type === u.DOT || l.type === u.RESERVED && (l.text === "set" || l.text === "get")) && d.test(m) ? (m === "in" || m === "of") && (l.type === u.WORD || l.type === u.STRING) ? this._create_token(u.OPERATOR, m) : this._create_token(u.RESERVED, m) : this._create_token(u.WORD, m);
    if (m = this.__patterns.number.read(), m !== "")
      return this._create_token(u.WORD, m);
  }, x.prototype._read_singles = function(l) {
    var m = null;
    return l === "(" || l === "[" ? m = this._create_token(u.START_EXPR, l) : l === ")" || l === "]" ? m = this._create_token(u.END_EXPR, l) : l === "{" ? m = this._create_token(u.START_BLOCK, l) : l === "}" ? m = this._create_token(u.END_BLOCK, l) : l === ";" ? m = this._create_token(u.SEMICOLON, l) : l === "." && h.test(this._input.peek(1)) ? m = this._create_token(u.DOT, l) : l === "," && (m = this._create_token(u.COMMA, l)), m && this._input.next(), m;
  }, x.prototype._read_pair = function(l, m) {
    var p = null;
    return l === "#" && m === "{" && (p = this._create_token(u.START_BLOCK, l + m)), p && (this._input.next(), this._input.next()), p;
  }, x.prototype._read_punctuation = function() {
    var l = this.__patterns.punct.read();
    if (l !== "")
      return l === "=" ? this._create_token(u.EQUALS, l) : l === "?." ? this._create_token(u.DOT, l) : this._create_token(u.OPERATOR, l);
  }, x.prototype._read_non_javascript = function(l) {
    var m = "";
    if (l === "#") {
      if (this._is_first_token() && (m = this.__patterns.shebang.read(), m))
        return this._create_token(u.UNKNOWN, m.trim() + `
`);
      if (m = this.__patterns.include.read(), m)
        return this._create_token(u.UNKNOWN, m.trim() + `
`);
      l = this._input.next();
      var p = "#";
      if (this._input.hasNext() && this._input.testChar(b)) {
        do
          l = this._input.next(), p += l;
        while (this._input.hasNext() && l !== "#" && l !== "=");
        return l === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (p += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (p += "{}", this._input.next(), this._input.next())), this._create_token(u.WORD, p);
      }
      this._input.back();
    } else if (l === "<" && this._is_first_token()) {
      if (m = this.__patterns.html_comment_start.read(), m) {
        for (; this._input.hasNext() && !this._input.testChar(a.newline); )
          m += this._input.next();
        return T = !0, this._create_token(u.COMMENT, m);
      }
    } else if (T && l === "-" && (m = this.__patterns.html_comment_end.read(), m))
      return T = !1, this._create_token(u.COMMENT, m);
    return null;
  }, x.prototype._read_comment = function(l) {
    var m = null;
    if (l === "/") {
      var p = "";
      if (this._input.peek(1) === "*") {
        p = this.__patterns.block_comment.read();
        var O = g.get_directives(p);
        O && O.ignore === "start" && (p += g.readIgnored(this._input)), p = p.replace(a.allLineBreaks, `
`), m = this._create_token(u.BLOCK_COMMENT, p), m.directives = O;
      } else
        this._input.peek(1) === "/" && (p = this.__patterns.comment.read(), m = this._create_token(u.COMMENT, p));
    }
    return m;
  }, x.prototype._read_string = function(l) {
    if (l === "`" || l === "'" || l === '"') {
      var m = this._input.next();
      return this.has_char_escapes = !1, l === "`" ? m += this._read_string_recursive("`", !0, "${") : m += this._read_string_recursive(l), this.has_char_escapes && this._options.unescape_strings && (m = E(m)), this._input.peek() === l && (m += this._input.next()), m = m.replace(a.allLineBreaks, `
`), this._create_token(u.STRING, m);
    }
    return null;
  }, x.prototype._allow_regexp_or_xml = function(l) {
    return l.type === u.RESERVED && o(l.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || l.type === u.END_EXPR && l.text === ")" && l.opened.previous.type === u.RESERVED && o(l.opened.previous.text, ["if", "while", "for"]) || o(l.type, [
      u.COMMENT,
      u.START_EXPR,
      u.START_BLOCK,
      u.START,
      u.END_BLOCK,
      u.OPERATOR,
      u.EQUALS,
      u.EOF,
      u.SEMICOLON,
      u.COMMA
    ]);
  }, x.prototype._read_regexp = function(l, m) {
    if (l === "/" && this._allow_regexp_or_xml(m)) {
      for (var p = this._input.next(), O = !1, s = !1; this._input.hasNext() && (O || s || this._input.peek() !== l) && !this._input.testChar(a.newline); )
        p += this._input.peek(), O ? O = !1 : (O = this._input.peek() === "\\", this._input.peek() === "[" ? s = !0 : this._input.peek() === "]" && (s = !1)), this._input.next();
      return this._input.peek() === l && (p += this._input.next(), p += this._input.read(a.identifier)), this._create_token(u.STRING, p);
    }
    return null;
  }, x.prototype._read_xml = function(l, m) {
    if (this._options.e4x && l === "<" && this._allow_regexp_or_xml(m)) {
      var p = "", O = this.__patterns.xml.read_match();
      if (O) {
        for (var s = O[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), y = s.indexOf("{") === 0, w = 0; O; ) {
          var C = !!O[1], N = O[2], P = !!O[O.length - 1] || N.slice(0, 8) === "![CDATA[";
          if (!P && (N === s || y && N.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (C ? --w : ++w), p += O[0], w <= 0)
            break;
          O = this.__patterns.xml.read_match();
        }
        return O || (p += this._input.match(/[\s\S]*/g)[0]), p = p.replace(a.allLineBreaks, `
`), this._create_token(u.STRING, p);
      }
    }
    return null;
  };
  function E(l) {
    for (var m = "", p = 0, O = new n(l), s = null; O.hasNext(); )
      if (s = O.match(/([\s]|[^\\]|\\\\)+/g), s && (m += s[0]), O.peek() === "\\") {
        if (O.next(), O.peek() === "x")
          s = O.match(/x([0-9A-Fa-f]{2})/g);
        else if (O.peek() === "u")
          s = O.match(/u([0-9A-Fa-f]{4})/g), s || (s = O.match(/u\{([0-9A-Fa-f]+)\}/g));
        else {
          m += "\\", O.hasNext() && (m += O.next());
          continue;
        }
        if (!s || (p = parseInt(s[1], 16), p > 126 && p <= 255 && s[0].indexOf("x") === 0))
          return l;
        p >= 0 && p < 32 || p > 1114111 ? m += "\\" + s[0] : p === 34 || p === 39 || p === 92 ? m += "\\" + String.fromCharCode(p) : m += String.fromCharCode(p);
      }
    return m;
  }
  return x.prototype._read_string_recursive = function(l, m, p) {
    var O, s;
    l === "'" ? s = this.__patterns.single_quote : l === '"' ? s = this.__patterns.double_quote : l === "`" ? s = this.__patterns.template_text : l === "}" && (s = this.__patterns.template_expression);
    for (var y = s.read(), w = ""; this._input.hasNext(); ) {
      if (w = this._input.next(), w === l || !m && a.newline.test(w)) {
        this._input.back();
        break;
      } else
        w === "\\" && this._input.hasNext() ? (O = this._input.peek(), O === "x" || O === "u" ? this.has_char_escapes = !0 : O === "\r" && this._input.peek(1) === `
` && this._input.next(), w += this._input.next()) : p && (p === "${" && w === "$" && this._input.peek() === "{" && (w += this._input.next()), p === w && (l === "`" ? w += this._read_string_recursive("}", m, "`") : w += this._read_string_recursive("`", m, "${"), this._input.hasNext() && (w += this._input.next())));
      w += s.read(), y += w;
    }
    return y;
  }, ft.Tokenizer = x, ft.TOKEN = u, ft.positionable_operators = R.slice(), ft.line_starters = c.slice(), ft;
}
var Qe;
function bn() {
  if (Qe)
    return Qt;
  Qe = 1;
  var n = fe().Output, i = wi().Token, e = xi(), t = Ei().Options, a = Ct().Tokenizer, _ = Ct().line_starters, f = Ct().positionable_operators, o = Ct().TOKEN;
  function u(s, y) {
    return y.indexOf(s) !== -1;
  }
  function g(s) {
    return s.replace(/^\s+/g, "");
  }
  function v(s) {
    for (var y = {}, w = 0; w < s.length; w++)
      y[s[w].replace(/-/g, "_")] = s[w];
    return y;
  }
  function b(s, y) {
    return s && s.type === o.RESERVED && s.text === y;
  }
  function h(s, y) {
    return s && s.type === o.RESERVED && u(s.text, y);
  }
  var R = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"], A = ["before-newline", "after-newline", "preserve-newline"], S = v(A), c = [S.before_newline, S.preserve_newline], r = {
    BlockStatement: "BlockStatement",
    Statement: "Statement",
    ObjectLiteral: "ObjectLiteral",
    ArrayLiteral: "ArrayLiteral",
    ForInitializer: "ForInitializer",
    Conditional: "Conditional",
    Expression: "Expression"
  };
  function d(s, y) {
    y.multiline_frame || y.mode === r.ForInitializer || y.mode === r.Conditional || s.remove_indent(y.start_line_index);
  }
  function T(s) {
    s = s.replace(e.allLineBreaks, `
`);
    for (var y = [], w = s.indexOf(`
`); w !== -1; )
      y.push(s.substring(0, w)), s = s.substring(w + 1), w = s.indexOf(`
`);
    return s.length && y.push(s), y;
  }
  function x(s) {
    return s === r.ArrayLiteral;
  }
  function E(s) {
    return u(s, [r.Expression, r.ForInitializer, r.Conditional]);
  }
  function l(s, y) {
    for (var w = 0; w < s.length; w++) {
      var C = s[w].trim();
      if (C.charAt(0) !== y)
        return !1;
    }
    return !0;
  }
  function m(s, y) {
    for (var w = 0, C = s.length, N; w < C; w++)
      if (N = s[w], N && N.indexOf(y) !== 0)
        return !1;
    return !0;
  }
  function p(s, y) {
    y = y || {}, this._source_text = s || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new t(y);
  }
  p.prototype.create_flags = function(s, y) {
    var w = 0;
    s && (w = s.indentation_level, !this._output.just_added_newline() && s.line_indent_level > w && (w = s.line_indent_level));
    var C = {
      mode: y,
      parent: s,
      last_token: s ? s.last_token : new i(o.START_BLOCK, ""),
      last_word: s ? s.last_word : "",
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      in_case: !1,
      case_body: !1,
      case_block: !1,
      indentation_level: w,
      alignment: 0,
      line_indent_level: s ? s.line_indent_level : w,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return C;
  }, p.prototype._reset = function(s) {
    var y = s.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new n(this._options, y), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(r.BlockStatement);
    var w = new a(s, this._options);
    return this._tokens = w.tokenize(), s;
  }, p.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var s, y = this._reset(this._source_text), w = this._options.eol;
    this._options.eol === "auto" && (w = `
`, y && e.lineBreak.test(y || "") && (w = y.match(e.lineBreak)[0]));
    for (var C = this._tokens.next(); C; )
      this.handle_token(C), this._last_last_text = this._flags.last_token.text, this._flags.last_token = C, C = this._tokens.next();
    return s = this._output.get_code(w), s;
  }, p.prototype.handle_token = function(s, y) {
    s.type === o.START_EXPR ? this.handle_start_expr(s) : s.type === o.END_EXPR ? this.handle_end_expr(s) : s.type === o.START_BLOCK ? this.handle_start_block(s) : s.type === o.END_BLOCK ? this.handle_end_block(s) : s.type === o.WORD ? this.handle_word(s) : s.type === o.RESERVED ? this.handle_word(s) : s.type === o.SEMICOLON ? this.handle_semicolon(s) : s.type === o.STRING ? this.handle_string(s) : s.type === o.EQUALS ? this.handle_equals(s) : s.type === o.OPERATOR ? this.handle_operator(s) : s.type === o.COMMA ? this.handle_comma(s) : s.type === o.BLOCK_COMMENT ? this.handle_block_comment(s, y) : s.type === o.COMMENT ? this.handle_comment(s, y) : s.type === o.DOT ? this.handle_dot(s) : s.type === o.EOF ? this.handle_eof(s) : s.type === o.UNKNOWN ? this.handle_unknown(s, y) : this.handle_unknown(s, y);
  }, p.prototype.handle_whitespace_and_comments = function(s, y) {
    var w = s.newlines, C = this._options.keep_array_indentation && x(this._flags.mode);
    if (s.comments_before)
      for (var N = s.comments_before.next(); N; )
        this.handle_whitespace_and_comments(N, y), this.handle_token(N, y), N = s.comments_before.next();
    if (C)
      for (var P = 0; P < w; P += 1)
        this.print_newline(P > 0, y);
    else if (this._options.max_preserve_newlines && w > this._options.max_preserve_newlines && (w = this._options.max_preserve_newlines), this._options.preserve_newlines && w > 1) {
      this.print_newline(!1, y);
      for (var $ = 1; $ < w; $ += 1)
        this.print_newline(!0, y);
    }
  };
  var O = ["async", "break", "continue", "return", "throw", "yield"];
  return p.prototype.allow_wrap_or_preserved_newline = function(s, y) {
    if (y = y === void 0 ? !1 : y, !this._output.just_added_newline()) {
      var w = this._options.preserve_newlines && s.newlines || y, C = u(this._flags.last_token.text, f) || u(s.text, f);
      if (C) {
        var N = u(this._flags.last_token.text, f) && u(this._options.operator_position, c) || u(s.text, f);
        w = w && N;
      }
      if (w)
        this.print_newline(!1, !0);
      else if (this._options.wrap_line_length) {
        if (h(this._flags.last_token, O))
          return;
        this._output.set_wrap_point();
      }
    }
  }, p.prototype.print_newline = function(s, y) {
    if (!y && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== o.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
      for (var w = this._tokens.peek(); this._flags.mode === r.Statement && !(this._flags.if_block && b(w, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._output.add_new_line(s) && (this._flags.multiline_frame = !0);
  }, p.prototype.print_token_line_indentation = function(s) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && s.newlines && (s.text === "[" || x(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(s.whitespace_before), this._output.space_before_token = !1) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, p.prototype.print_token = function(s) {
    if (this._output.raw) {
      this._output.add_raw_token(s);
      return;
    }
    if (this._options.comma_first && s.previous && s.previous.type === o.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
      var y = this._output.previous_line.pop();
      this._output.previous_line.is_empty() && (this._output.previous_line.push(y), this._output.trim(!0), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(s), this._output.add_token(","), this._output.space_before_token = !0;
    }
    this.print_token_line_indentation(s), this._output.non_breaking_space = !0, this._output.add_token(s.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = !0);
  }, p.prototype.indent = function() {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, p.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, p.prototype.set_mode = function(s) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, s), this._flags = this.create_flags(this._previous_flags, s), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, p.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === r.Statement && d(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, p.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === r.ObjectLiteral && this._flags.mode === r.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || h(this._flags.last_token, ["get", "set"]));
  }, p.prototype.start_of_statement = function(s) {
    var y = !1;
    return y = y || h(this._flags.last_token, ["var", "let", "const"]) && s.type === o.WORD, y = y || b(this._flags.last_token, "do"), y = y || !(this._flags.parent.mode === r.ObjectLiteral && this._flags.mode === r.Statement) && h(this._flags.last_token, O) && !s.newlines, y = y || b(this._flags.last_token, "else") && !(b(s, "if") && !s.comments_before), y = y || this._flags.last_token.type === o.END_EXPR && (this._previous_flags.mode === r.ForInitializer || this._previous_flags.mode === r.Conditional), y = y || this._flags.last_token.type === o.WORD && this._flags.mode === r.BlockStatement && !this._flags.in_case && !(s.text === "--" || s.text === "++") && this._last_last_text !== "function" && s.type !== o.WORD && s.type !== o.RESERVED, y = y || this._flags.mode === r.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || h(this._flags.last_token, ["get", "set"])), y ? (this.set_mode(r.Statement), this.indent(), this.handle_whitespace_and_comments(s, !0), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(
      s,
      h(s, ["do", "for", "if", "while"])
    ), !0) : !1;
  }, p.prototype.handle_start_expr = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s);
    var y = r.Expression;
    if (s.text === "[") {
      if (this._flags.last_token.type === o.WORD || this._flags.last_token.text === ")") {
        h(this._flags.last_token, _) && (this._output.space_before_token = !0), this.print_token(s), this.set_mode(y), this.indent(), this._options.space_in_paren && (this._output.space_before_token = !0);
        return;
      }
      y = r.ArrayLiteral, x(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), u(this._flags.last_token.type, [o.START_EXPR, o.END_EXPR, o.WORD, o.OPERATOR, o.DOT]) || (this._output.space_before_token = !0);
    } else {
      if (this._flags.last_token.type === o.RESERVED)
        this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, y = r.ForInitializer) : u(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, y = r.Conditional) : u(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = !0 : this._flags.last_token.text === "import" && s.whitespace_before === "" ? this._output.space_before_token = !1 : (u(this._flags.last_token.text, _) || this._flags.last_token.text === "catch") && (this._output.space_before_token = !0);
      else if (this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR)
        this.start_of_object_property() || this.allow_wrap_or_preserved_newline(s);
      else if (this._flags.last_token.type === o.WORD) {
        this._output.space_before_token = !1;
        var w = this._tokens.peek(-3);
        if (this._options.space_after_named_function && w) {
          var C = this._tokens.peek(-4);
          h(w, ["async", "function"]) || w.text === "*" && h(C, ["async", "function"]) ? this._output.space_before_token = !0 : this._flags.mode === r.ObjectLiteral ? (w.text === "{" || w.text === "," || w.text === "*" && (C.text === "{" || C.text === ",")) && (this._output.space_before_token = !0) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = !0);
        }
      } else
        this.allow_wrap_or_preserved_newline(s);
      (this._flags.last_token.type === o.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (u(this._last_last_text, ["function", "yield"]) || this._flags.mode === r.ObjectLiteral && u(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === o.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === o.END_EXPR || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === o.COMMA) && this.allow_wrap_or_preserved_newline(s, s.newlines), this.print_token(s), this.set_mode(y), this._options.space_in_paren && (this._output.space_before_token = !0), this.indent();
  }, p.prototype.handle_end_expr = function(s) {
    for (; this._flags.mode === r.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(s), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(
      s,
      s.text === "]" && x(this._flags.mode) && !this._options.keep_array_indentation
    ), this._options.space_in_paren && (this._flags.last_token.type === o.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = !1) : this._output.space_before_token = !0), this.deindent(), this.print_token(s), this.restore_mode(), d(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === r.Conditional && (this._previous_flags.mode = r.Expression, this._flags.do_block = !1, this._flags.do_while = !1);
  }, p.prototype.handle_start_block = function(s) {
    this.handle_whitespace_and_comments(s);
    var y = this._tokens.peek(), w = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === o.END_EXPR ? (this.set_mode(r.BlockStatement), this._flags.in_case_statement = !0) : this._flags.case_body ? this.set_mode(r.BlockStatement) : w && (u(w.text, [":", ","]) && u(y.type, [o.STRING, o.WORD, o.RESERVED]) || u(y.text, ["get", "set", "..."]) && u(w.type, [o.WORD, o.RESERVED])) ? u(this._last_last_text, ["class", "interface"]) && !u(w.text, [":", ","]) ? this.set_mode(r.BlockStatement) : this.set_mode(r.ObjectLiteral) : this._flags.last_token.type === o.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(r.BlockStatement) : u(this._flags.last_token.type, [o.EQUALS, o.START_EXPR, o.COMMA, o.OPERATOR]) || h(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(r.ObjectLiteral) : this.set_mode(r.BlockStatement), this._flags.last_token && h(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = !0);
    var C = !y.comments_before && y.text === "}", N = C && this._flags.last_word === "function" && this._flags.last_token.type === o.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var P = 0, $ = null;
      this._flags.inline_frame = !0;
      do
        if (P += 1, $ = this._tokens.peek(P - 1), $.newlines) {
          this._flags.inline_frame = !1;
          break;
        }
      while ($.type !== o.EOF && !($.type === o.END_BLOCK && $.opened === s));
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && s.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== o.OPERATOR && (N || this._flags.last_token.type === o.EQUALS || h(this._flags.last_token, R) && this._flags.last_token.text !== "else") ? this._output.space_before_token = !0 : this.print_newline(!1, !0) : (x(this._previous_flags.mode) && (this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.COMMA) && ((this._flags.last_token.type === o.COMMA || this._options.space_in_paren) && (this._output.space_before_token = !0), (this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(s), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = !1)), this._flags.last_token.type !== o.OPERATOR && this._flags.last_token.type !== o.START_EXPR && (u(this._flags.last_token.type, [o.START_BLOCK, o.SEMICOLON]) && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = !0)), this.print_token(s), this.indent(), !C && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
  }, p.prototype.handle_end_block = function(s) {
    for (this.handle_whitespace_and_comments(s); this._flags.mode === r.Statement; )
      this.restore_mode();
    var y = this._flags.last_token.type === o.START_BLOCK;
    this._flags.inline_frame && !y ? this._output.space_before_token = !0 : this._options.brace_style === "expand" ? y || this.print_newline() : y || (x(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = !1, this.print_newline(), this._options.keep_array_indentation = !0) : this.print_newline()), this.restore_mode(), this.print_token(s);
  }, p.prototype.handle_word = function(s) {
    if (s.type === o.RESERVED) {
      if (u(s.text, ["set", "get"]) && this._flags.mode !== r.ObjectLiteral)
        s.type = o.WORD;
      else if (s.text === "import" && u(this._tokens.peek().text, ["(", "."]))
        s.type = o.WORD;
      else if (u(s.text, ["as", "from"]) && !this._flags.import_block)
        s.type = o.WORD;
      else if (this._flags.mode === r.ObjectLiteral) {
        var y = this._tokens.peek();
        y.text === ":" && (s.type = o.WORD);
      }
    }
    if (this.start_of_statement(s) ? h(this._flags.last_token, ["var", "let", "const"]) && s.type === o.WORD && (this._flags.declaration_statement = !0) : s.newlines && !E(this._flags.mode) && (this._flags.last_token.type !== o.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== o.EQUALS && (this._options.preserve_newlines || !h(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(s), this.print_newline()) : this.handle_whitespace_and_comments(s), this._flags.do_block && !this._flags.do_while)
      if (b(s, "while")) {
        this._output.space_before_token = !0, this.print_token(s), this._output.space_before_token = !0, this._flags.do_while = !0;
        return;
      } else
        this.print_newline(), this._flags.do_block = !1;
    if (this._flags.if_block)
      if (!this._flags.else_block && b(s, "else"))
        this._flags.else_block = !0;
      else {
        for (; this._flags.mode === r.Statement; )
          this.restore_mode();
        this._flags.if_block = !1, this._flags.else_block = !1;
      }
    if (this._flags.in_case_statement && h(s, ["case", "default"])) {
      this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = !1, this.print_token(s), this._flags.in_case = !0;
      return;
    }
    if ((this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR) && !this.start_of_object_property() && !(u(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === r.ObjectLiteral) && this.allow_wrap_or_preserved_newline(s), b(s, "function")) {
      (u(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(u(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === o.OPERATOR)) && !this._output.just_added_blankline() && !s.comments_before && (this.print_newline(), this.print_newline(!0)), this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD ? h(this._flags.last_token, ["get", "set", "new", "export"]) || h(this._flags.last_token, O) ? this._output.space_before_token = !0 : b(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" ? this._output.space_before_token = !0 : this.print_newline() : this._flags.last_token.type === o.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = !0 : !this._flags.multiline_frame && (E(this._flags.mode) || x(this._flags.mode)) || this.print_newline(), this.print_token(s), this._flags.last_word = s.text;
      return;
    }
    var w = "NONE";
    if (this._flags.last_token.type === o.END_BLOCK ? this._previous_flags.inline_frame ? w = "SPACE" : h(s, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && s.newlines ? w = "NEWLINE" : (w = "SPACE", this._output.space_before_token = !0) : w = "NEWLINE" : this._flags.last_token.type === o.SEMICOLON && this._flags.mode === r.BlockStatement ? w = "NEWLINE" : this._flags.last_token.type === o.SEMICOLON && E(this._flags.mode) ? w = "SPACE" : this._flags.last_token.type === o.STRING ? w = "NEWLINE" : this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD || this._flags.last_token.text === "*" && (u(this._last_last_text, ["function", "yield"]) || this._flags.mode === r.ObjectLiteral && u(this._last_last_text, ["{", ","])) ? w = "SPACE" : this._flags.last_token.type === o.START_BLOCK ? this._flags.inline_frame ? w = "SPACE" : w = "NEWLINE" : this._flags.last_token.type === o.END_EXPR && (this._output.space_before_token = !0, w = "NEWLINE"), h(s, _) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? w = "SPACE" : w = "NEWLINE"), h(s, ["else", "catch", "finally"]))
      if ((!(this._flags.last_token.type === o.END_BLOCK && this._previous_flags.mode === r.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && s.newlines) && !this._flags.inline_frame)
        this.print_newline();
      else {
        this._output.trim(!0);
        var C = this._output.current_line;
        C.last() !== "}" && this.print_newline(), this._output.space_before_token = !0;
      }
    else
      w === "NEWLINE" ? h(this._flags.last_token, R) ? this._output.space_before_token = !0 : this._flags.last_token.text === "declare" && h(s, ["var", "let", "const"]) ? this._output.space_before_token = !0 : this._flags.last_token.type !== o.END_EXPR ? (this._flags.last_token.type !== o.START_EXPR || !h(s, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (b(s, "if") && b(s.previous, "else") ? this._output.space_before_token = !0 : this.print_newline()) : h(s, _) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && x(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : w === "SPACE" && (this._output.space_before_token = !0);
    s.previous && (s.previous.type === o.WORD || s.previous.type === o.RESERVED) && (this._output.space_before_token = !0), this.print_token(s), this._flags.last_word = s.text, s.type === o.RESERVED && (s.text === "do" ? this._flags.do_block = !0 : s.text === "if" ? this._flags.if_block = !0 : s.text === "import" ? this._flags.import_block = !0 : this._flags.import_block && b(s, "from") && (this._flags.import_block = !1));
  }, p.prototype.handle_semicolon = function(s) {
    this.start_of_statement(s) ? this._output.space_before_token = !1 : this.handle_whitespace_and_comments(s);
    for (var y = this._tokens.peek(); this._flags.mode === r.Statement && !(this._flags.if_block && b(y, "else")) && !this._flags.do_block; )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = !1), this.print_token(s);
  }, p.prototype.handle_string = function(s) {
    s.text.startsWith("`") && s.newlines === 0 && s.whitespace_before === "" && (s.previous.text === ")" || this._flags.last_token.type === o.WORD) || (this.start_of_statement(s) ? this._output.space_before_token = !0 : (this.handle_whitespace_and_comments(s), this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD || this._flags.inline_frame ? this._output.space_before_token = !0 : this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(s) : s.text.startsWith("`") && this._flags.last_token.type === o.END_EXPR && (s.previous.text === "]" || s.previous.text === ")") && s.newlines === 0 ? this._output.space_before_token = !0 : this.print_newline())), this.print_token(s);
  }, p.prototype.handle_equals = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s), this._flags.declaration_statement && (this._flags.declaration_assignment = !0), this._output.space_before_token = !0, this.print_token(s), this._output.space_before_token = !0;
  }, p.prototype.handle_comma = function(s) {
    this.handle_whitespace_and_comments(s, !0), this.print_token(s), this._output.space_before_token = !0, this._flags.declaration_statement ? (E(this._flags.parent.mode) && (this._flags.declaration_assignment = !1), this._flags.declaration_assignment ? (this._flags.declaration_assignment = !1, this.print_newline(!1, !0)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(s)) : this._flags.mode === r.ObjectLiteral || this._flags.mode === r.Statement && this._flags.parent.mode === r.ObjectLiteral ? (this._flags.mode === r.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(s);
  }, p.prototype.handle_operator = function(s) {
    var y = s.text === "*" && (h(this._flags.last_token, ["function", "yield"]) || u(this._flags.last_token.type, [o.START_BLOCK, o.COMMA, o.END_BLOCK, o.SEMICOLON])), w = u(s.text, ["-", "+"]) && (u(this._flags.last_token.type, [o.START_BLOCK, o.START_EXPR, o.EQUALS, o.OPERATOR]) || u(this._flags.last_token.text, _) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(s)) {
      var C = !y;
      this.handle_whitespace_and_comments(s, C);
    }
    if (s.text === "*" && this._flags.last_token.type === o.DOT) {
      this.print_token(s);
      return;
    }
    if (s.text === "::") {
      this.print_token(s);
      return;
    }
    if (u(s.text, ["-", "+"]) && this.start_of_object_property()) {
      this.print_token(s);
      return;
    }
    if (this._flags.last_token.type === o.OPERATOR && u(this._options.operator_position, c) && this.allow_wrap_or_preserved_newline(s), s.text === ":" && this._flags.in_case) {
      this.print_token(s), this._flags.in_case = !1, this._flags.case_body = !0, this._tokens.peek().type !== o.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = !1) : (this._flags.case_block = !0, this._output.space_before_token = !0);
      return;
    }
    var N = !0, P = !0, $ = !1;
    if (s.text === ":" ? this._flags.ternary_depth === 0 ? N = !1 : (this._flags.ternary_depth -= 1, $ = !0) : s.text === "?" && (this._flags.ternary_depth += 1), !w && !y && this._options.preserve_newlines && u(s.text, f)) {
      var F = s.text === ":", st = F && $, K = F && !$;
      switch (this._options.operator_position) {
        case S.before_newline:
          this._output.space_before_token = !K, this.print_token(s), (!F || st) && this.allow_wrap_or_preserved_newline(s), this._output.space_before_token = !0;
          return;
        case S.after_newline:
          this._output.space_before_token = !0, !F || st ? this._tokens.peek().newlines ? this.print_newline(!1, !0) : this.allow_wrap_or_preserved_newline(s) : this._output.space_before_token = !1, this.print_token(s), this._output.space_before_token = !0;
          return;
        case S.preserve_newline:
          K || this.allow_wrap_or_preserved_newline(s), N = !(this._output.just_added_newline() || K), this._output.space_before_token = N, this.print_token(s), this._output.space_before_token = !0;
          return;
      }
    }
    if (y) {
      this.allow_wrap_or_preserved_newline(s), N = !1;
      var ot = this._tokens.peek();
      P = ot && u(ot.type, [o.WORD, o.RESERVED]);
    } else if (s.text === "...")
      this.allow_wrap_or_preserved_newline(s), N = this._flags.last_token.type === o.START_BLOCK, P = !1;
    else if (u(s.text, ["--", "++", "!", "~"]) || w) {
      if ((this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR) && this.allow_wrap_or_preserved_newline(s), N = !1, P = !1, s.newlines && (s.text === "--" || s.text === "++" || s.text === "~")) {
        var k = h(this._flags.last_token, R) && s.newlines;
        k && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(k, !0);
      }
      this._flags.last_token.text === ";" && E(this._flags.mode) && (N = !0), this._flags.last_token.type === o.RESERVED ? N = !0 : this._flags.last_token.type === o.END_EXPR ? N = !(this._flags.last_token.text === "]" && (s.text === "--" || s.text === "++")) : this._flags.last_token.type === o.OPERATOR && (N = u(s.text, ["--", "-", "++", "+"]) && u(this._flags.last_token.text, ["--", "-", "++", "+"]), u(s.text, ["+", "-"]) && u(this._flags.last_token.text, ["--", "++"]) && (P = !0)), (this._flags.mode === r.BlockStatement && !this._flags.inline_frame || this._flags.mode === r.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
    }
    this._output.space_before_token = this._output.space_before_token || N, this.print_token(s), this._output.space_before_token = P;
  }, p.prototype.handle_block_comment = function(s, y) {
    if (this._output.raw) {
      this._output.add_raw_token(s), s.directives && s.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (s.directives) {
      this.print_newline(!1, y), this.print_token(s), s.directives.preserve === "start" && (this._output.raw = !0), this.print_newline(!1, !0);
      return;
    }
    if (!e.newline.test(s.text) && !s.newlines) {
      this._output.space_before_token = !0, this.print_token(s), this._output.space_before_token = !0;
      return;
    } else
      this.print_block_commment(s, y);
  }, p.prototype.print_block_commment = function(s, y) {
    var w = T(s.text), C, N = !1, P = !1, $ = s.whitespace_before, F = $.length;
    if (this.print_newline(!1, y), this.print_token_line_indentation(s), this._output.add_token(w[0]), this.print_newline(!1, y), w.length > 1) {
      for (w = w.slice(1), N = l(w, "*"), P = m(w, $), N && (this._flags.alignment = 1), C = 0; C < w.length; C++)
        N ? (this.print_token_line_indentation(s), this._output.add_token(g(w[C]))) : P && w[C] ? (this.print_token_line_indentation(s), this._output.add_token(w[C].substring(F))) : (this._output.current_line.set_indent(-1), this._output.add_token(w[C])), this.print_newline(!1, y);
      this._flags.alignment = 0;
    }
  }, p.prototype.handle_comment = function(s, y) {
    s.newlines ? this.print_newline(!1, y) : this._output.trim(!0), this._output.space_before_token = !0, this.print_token(s), this.print_newline(!1, y);
  }, p.prototype.handle_dot = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s, !0), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = !0), h(this._flags.last_token, R) ? this._output.space_before_token = !1 : this.allow_wrap_or_preserved_newline(
      s,
      this._flags.last_token.text === ")" && this._options.break_chained_methods
    ), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(s);
  }, p.prototype.handle_unknown = function(s, y) {
    this.print_token(s), s.text[s.text.length - 1] === `
` && this.print_newline(!1, y);
  }, p.prototype.handle_eof = function(s) {
    for (; this._flags.mode === r.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(s);
  }, Qt.Beautifier = p, Qt;
}
var Je;
function yn() {
  if (Je)
    return Rt.exports;
  Je = 1;
  var n = bn().Beautifier, i = Ei().Options;
  function e(t, a) {
    var _ = new n(t, a);
    return _.beautify();
  }
  return Rt.exports = e, Rt.exports.defaultOptions = function() {
    return new i();
  }, Rt.exports;
}
var At = { exports: {} }, oe = {}, _e = {}, Ze;
function Ti() {
  if (Ze)
    return _e;
  Ze = 1;
  var n = de().Options;
  function i(e) {
    n.call(this, e, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
    var t = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || t;
    var a = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var _ = 0; _ < a.length; _++)
      a[_] !== "expand" ? this.brace_style = "collapse" : this.brace_style = a[_];
  }
  return i.prototype = new n(), _e.Options = i, _e;
}
var Ye;
function wn() {
  if (Ye)
    return oe;
  Ye = 1;
  var n = Ti().Options, i = fe().Output, e = me().InputScanner, t = ge().Directives, a = new t(/\/\*/, /\*\//), _ = /\r\n|[\r\n]/, f = /\r\n|[\r\n]/g, o = /\s/, u = /(?:\s|\n)+/g, g = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, v = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function b(h, R) {
    this._source_text = h || "", this._options = new n(R), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
      page: !0,
      "font-face": !0,
      keyframes: !0,
      media: !0,
      supports: !0,
      document: !0
    }, this.CONDITIONAL_GROUP_RULE = {
      media: !0,
      supports: !0,
      document: !0
    }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
      "grid-template-areas",
      "grid-template"
    ];
  }
  return b.prototype.eatString = function(h) {
    var R = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (R += this._ch, this._ch === "\\")
        R += this._input.next();
      else if (h.indexOf(this._ch) !== -1 || this._ch === `
`)
        break;
      this._ch = this._input.next();
    }
    return R;
  }, b.prototype.eatWhitespace = function(h) {
    for (var R = o.test(this._input.peek()), A = 0; o.test(this._input.peek()); )
      this._ch = this._input.next(), h && this._ch === `
` && (A === 0 || A < this._options.max_preserve_newlines) && (A++, this._output.add_new_line(!0));
    return R;
  }, b.prototype.foundNestedPseudoClass = function() {
    for (var h = 0, R = 1, A = this._input.peek(R); A; ) {
      if (A === "{")
        return !0;
      if (A === "(")
        h += 1;
      else if (A === ")") {
        if (h === 0)
          return !1;
        h -= 1;
      } else if (A === ";" || A === "}")
        return !1;
      R++, A = this._input.peek(R);
    }
    return !1;
  }, b.prototype.print_string = function(h) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(h);
  }, b.prototype.preserveSingleSpace = function(h) {
    h && (this._output.space_before_token = !0);
  }, b.prototype.indent = function() {
    this._indentLevel++;
  }, b.prototype.outdent = function() {
    this._indentLevel > 0 && this._indentLevel--;
  }, b.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var h = this._source_text, R = this._options.eol;
    R === "auto" && (R = `
`, h && _.test(h || "") && (R = h.match(_)[0])), h = h.replace(f, `
`);
    var A = h.match(/^[\t ]*/)[0];
    this._output = new i(this._options, A), this._input = new e(h), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var S = 0, c = !1, r = !1, d = !1, T = !1, x = !1, E = this._ch, l = !1, m, p, O; m = this._input.read(u), p = m !== "", O = E, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), E = this._ch, this._ch; )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var s = this._input.read(g), y = a.get_directives(s);
        y && y.ignore === "start" && (s += a.readIgnored(this._input)), this.print_string(s), this.eatWhitespace(!0), this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(v)), this.eatWhitespace(!0);
      else if (this._ch === "$") {
        this.preserveSingleSpace(p), this.print_string(this._ch);
        var w = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        w.match(/[ :]$/) && (w = this.eatString(": ").replace(/\s+$/, ""), this.print_string(w), this._output.space_before_token = !0), S === 0 && w.indexOf(":") !== -1 && (r = !0, this.indent());
      } else if (this._ch === "@")
        if (this.preserveSingleSpace(p), this._input.peek() === "{")
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var C = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          C.match(/[ :]$/) && (C = this.eatString(": ").replace(/\s+$/, ""), this.print_string(C), this._output.space_before_token = !0), S === 0 && C.indexOf(":") !== -1 ? (r = !0, this.indent()) : C in this.NESTED_AT_RULE ? (this._nestedLevel += 1, C in this.CONDITIONAL_GROUP_RULE && (d = !0)) : S === 0 && !r && (T = !0);
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(p), this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        r && (r = !1, this.outdent()), T = !1, d ? (d = !1, c = this._indentLevel >= this._nestedLevel) : c = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && c && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (O === "(" ? this._output.space_before_token = !1 : O !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(), this._output.add_new_line(), O === "{" && this._output.trim(!0), r && (this.outdent(), r = !1), this.print_string(this._ch), c = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
      else if (this._ch === ":") {
        for (var N = 0; N < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; N++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[N])) {
            l = !0;
            break;
          }
        (c || d) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !T && S === 0 ? (this.print_string(":"), r || (r = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var P = O === '"' || O === "'";
        this.preserveSingleSpace(P || p), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
      } else if (this._ch === ";")
        l = !1, S === 0 ? (r && (this.outdent(), r = !1), T = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch), this.eatWhitespace(), S++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), S && (S--, this.outdent()));
        else {
          var $ = !1;
          this._input.lookBack("with") && ($ = !0), this.preserveSingleSpace(p || $), this.print_string(this._ch), r && O === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), x = !0) : (this.eatWhitespace(), S++, this.indent());
        }
      else if (this._ch === ")")
        S && (S--, this.outdent()), x && this._input.peek() === ";" && this._options.selector_separator_newline && (x = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!r || x) && S === 0 && !T ? this._output.add_new_line() : this._output.space_before_token = !0;
      else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !r && S === 0)
        this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && o.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]")
        this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(p), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(), this.print_string("="), o.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        this._output.space_before_token = !0, this.print_string(this._ch);
      else {
        var F = O === '"' || O === "'";
        this.preserveSingleSpace(F || p), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && l && this._output.add_new_line();
      }
    var st = this._output.get_code(R);
    return st;
  }, oe.Beautifier = b, oe;
}
var ti;
function xn() {
  if (ti)
    return At.exports;
  ti = 1;
  var n = wn().Beautifier, i = Ti().Options;
  function e(t, a) {
    var _ = new n(t, a);
    return _.beautify();
  }
  return At.exports = e, At.exports.defaultOptions = function() {
    return new i();
  }, At.exports;
}
var Nt = { exports: {} }, ue = {}, le = {}, ei;
function ki() {
  if (ei)
    return le;
  ei = 1;
  var n = de().Options;
  function i(e) {
    n.call(this, e, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection(
      "wrap_attributes",
      ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
    ), this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "math",
      "meter",
      "noscript",
      "object",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr",
      "text",
      "acronym",
      "big",
      "strike",
      "tt"
    ]), this.inline_custom_elements = this._get_boolean("inline_custom_elements", !0), this.void_elements = this._get_array("void_elements", [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      "!doctype",
      "?xml",
      "basefont",
      "isindex"
    ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
      "pre",
      "textarea"
    ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  return i.prototype = new n(), le.Options = i, le;
}
var Lt = {}, ii;
function ni() {
  if (ii)
    return Lt;
  ii = 1;
  var n = Pt().Tokenizer, i = Pt().TOKEN, e = ge().Directives, t = Oi().TemplatablePattern, a = Wt().Pattern, _ = {
    TAG_OPEN: "TK_TAG_OPEN",
    TAG_CLOSE: "TK_TAG_CLOSE",
    CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
    CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
    ATTRIBUTE: "TK_ATTRIBUTE",
    EQUALS: "TK_EQUALS",
    VALUE: "TK_VALUE",
    COMMENT: "TK_COMMENT",
    TEXT: "TK_TEXT",
    UNKNOWN: "TK_UNKNOWN",
    START: i.START,
    RAW: i.RAW,
    EOF: i.EOF
  }, f = new e(/<\!--/, /-->/), o = function(u, g) {
    n.call(this, u, g), this._current_tag_name = "";
    var v = new t(this._input).read_options(this._options), b = new a(this._input);
    if (this.__patterns = {
      word: v.until(/[\n\r\t <]/),
      word_control_flow_close_excluded: v.until(/[\n\r\t <}]/),
      single_quote: v.until_after(/'/),
      double_quote: v.until_after(/"/),
      attribute: v.until(/[\n\r\t =>]|\/>/),
      element_name: v.until(/[\n\r\t >\/]/),
      angular_control_flow_start: b.matching(/\@[a-zA-Z]+[^({]*[({]/),
      handlebars_comment: b.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: b.starting_with(/{{/).until_after(/}}/),
      handlebars_open: b.until(/[\n\r\t }]/),
      handlebars_raw_close: b.until(/}}/),
      comment: b.starting_with(/<!--/).until_after(/-->/),
      cdata: b.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      conditional_comment: b.starting_with(/<!\[/).until_after(/]>/),
      processing: b.starting_with(/<\?/).until_after(/\?>/)
    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars"), this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
      var h = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = b.matching(h).until_after(h);
    }
  };
  return o.prototype = new n(), o.prototype._is_comment = function(u) {
    return !1;
  }, o.prototype._is_opening = function(u) {
    return u.type === _.TAG_OPEN || u.type === _.CONTROL_FLOW_OPEN;
  }, o.prototype._is_closing = function(u, g) {
    return u.type === _.TAG_CLOSE && g && ((u.text === ">" || u.text === "/>") && g.text[0] === "<" || u.text === "}}" && g.text[0] === "{" && g.text[1] === "{") || u.type === _.CONTROL_FLOW_CLOSE && u.text === "}" && g.text.endsWith("{");
  }, o.prototype._reset = function() {
    this._current_tag_name = "";
  }, o.prototype._get_next_token = function(u, g) {
    var v = null;
    this._readWhitespace();
    var b = this._input.peek();
    return b === null ? this._create_token(_.EOF, "") : (v = v || this._read_open_handlebars(b, g), v = v || this._read_attribute(b, u, g), v = v || this._read_close(b, g), v = v || this._read_control_flows(b, g), v = v || this._read_raw_content(b, u, g), v = v || this._read_content_word(b, g), v = v || this._read_comment_or_cdata(b), v = v || this._read_processing(b), v = v || this._read_open(b, g), v = v || this._create_token(_.UNKNOWN, this._input.next()), v);
  }, o.prototype._read_comment_or_cdata = function(u) {
    var g = null, v = null, b = null;
    if (u === "<") {
      var h = this._input.peek(1);
      h === "!" && (v = this.__patterns.comment.read(), v ? (b = f.get_directives(v), b && b.ignore === "start" && (v += f.readIgnored(this._input))) : v = this.__patterns.cdata.read()), v && (g = this._create_token(_.COMMENT, v), g.directives = b);
    }
    return g;
  }, o.prototype._read_processing = function(u) {
    var g = null, v = null, b = null;
    if (u === "<") {
      var h = this._input.peek(1);
      (h === "!" || h === "?") && (v = this.__patterns.conditional_comment.read(), v = v || this.__patterns.processing.read()), v && (g = this._create_token(_.COMMENT, v), g.directives = b);
    }
    return g;
  }, o.prototype._read_open = function(u, g) {
    var v = null, b = null;
    return (!g || g.type === _.CONTROL_FLOW_OPEN) && u === "<" && (v = this._input.next(), this._input.peek() === "/" && (v += this._input.next()), v += this.__patterns.element_name.read(), b = this._create_token(_.TAG_OPEN, v)), b;
  }, o.prototype._read_open_handlebars = function(u, g) {
    var v = null, b = null;
    return (!g || g.type === _.CONTROL_FLOW_OPEN) && this._options.indent_handlebars && u === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (v = this.__patterns.handlebars_comment.read(), v = v || this.__patterns.handlebars.read(), b = this._create_token(_.COMMENT, v)) : (v = this.__patterns.handlebars_open.read(), b = this._create_token(_.TAG_OPEN, v))), b;
  }, o.prototype._read_control_flows = function(u, g) {
    var v = "", b = null;
    if (!this._options.templating.includes("angular") || !this._options.indent_handlebars)
      return b;
    if (u === "@") {
      if (v = this.__patterns.angular_control_flow_start.read(), v === "")
        return b;
      for (var h = v.endsWith("(") ? 1 : 0, R = 0; !(v.endsWith("{") && h === R); ) {
        var A = this._input.next();
        if (A === null)
          break;
        A === "(" ? h++ : A === ")" && R++, v += A;
      }
      b = this._create_token(_.CONTROL_FLOW_OPEN, v);
    } else
      u === "}" && g && g.type === _.CONTROL_FLOW_OPEN && (v = this._input.next(), b = this._create_token(_.CONTROL_FLOW_CLOSE, v));
    return b;
  }, o.prototype._read_close = function(u, g) {
    var v = null, b = null;
    return g && g.type === _.TAG_OPEN && (g.text[0] === "<" && (u === ">" || u === "/" && this._input.peek(1) === ">") ? (v = this._input.next(), u === "/" && (v += this._input.next()), b = this._create_token(_.TAG_CLOSE, v)) : g.text[0] === "{" && u === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), b = this._create_token(_.TAG_CLOSE, "}}"))), b;
  }, o.prototype._read_attribute = function(u, g, v) {
    var b = null, h = "";
    if (v && v.text[0] === "<")
      if (u === "=")
        b = this._create_token(_.EQUALS, this._input.next());
      else if (u === '"' || u === "'") {
        var R = this._input.next();
        u === '"' ? R += this.__patterns.double_quote.read() : R += this.__patterns.single_quote.read(), b = this._create_token(_.VALUE, R);
      } else
        h = this.__patterns.attribute.read(), h && (g.type === _.EQUALS ? b = this._create_token(_.VALUE, h) : b = this._create_token(_.ATTRIBUTE, h));
    return b;
  }, o.prototype._is_content_unformatted = function(u) {
    return this._options.void_elements.indexOf(u) === -1 && (this._options.content_unformatted.indexOf(u) !== -1 || this._options.unformatted.indexOf(u) !== -1);
  }, o.prototype._read_raw_content = function(u, g, v) {
    var b = "";
    if (v && v.text[0] === "{")
      b = this.__patterns.handlebars_raw_close.read();
    else if (g.type === _.TAG_CLOSE && g.opened.text[0] === "<" && g.text[0] !== "/") {
      var h = g.opened.text.substr(1).toLowerCase();
      if (h === "script" || h === "style") {
        var R = this._read_comment_or_cdata(u);
        if (R)
          return R.type = _.TEXT, R;
        b = this._input.readUntil(new RegExp("</" + h + "[\\n\\r\\t ]*?>", "ig"));
      } else
        this._is_content_unformatted(h) && (b = this._input.readUntil(new RegExp("</" + h + "[\\n\\r\\t ]*?>", "ig")));
    }
    return b ? this._create_token(_.TEXT, b) : null;
  }, o.prototype._read_content_word = function(u, g) {
    var v = "";
    if (this._options.unformatted_content_delimiter && u === this._options.unformatted_content_delimiter[0] && (v = this.__patterns.unformatted_content_delimiter.read()), v || (v = g && g.type === _.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read()), v)
      return this._create_token(_.TEXT, v);
  }, Lt.Tokenizer = o, Lt.TOKEN = _, Lt;
}
var si;
function En() {
  if (si)
    return ue;
  si = 1;
  var n = ki().Options, i = fe().Output, e = ni().Tokenizer, t = ni().TOKEN, a = /\r\n|[\r\n]/, _ = /\r\n|[\r\n]/g, f = function(c, r) {
    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = c.max_preserve_newlines, this.preserve_newlines = c.preserve_newlines, this._output = new i(c, r);
  };
  f.prototype.current_line_has_match = function(c) {
    return this._output.current_line.has_match(c);
  }, f.prototype.set_space_before_token = function(c, r) {
    this._output.space_before_token = c, this._output.non_breaking_space = r;
  }, f.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, f.prototype.add_raw_token = function(c) {
    this._output.add_raw_token(c);
  }, f.prototype.print_preserved_newlines = function(c) {
    var r = 0;
    c.type !== t.TEXT && c.previous.type !== t.TEXT && (r = c.newlines ? 1 : 0), this.preserve_newlines && (r = c.newlines < this.max_preserve_newlines + 1 ? c.newlines : this.max_preserve_newlines + 1);
    for (var d = 0; d < r; d++)
      this.print_newline(d > 0);
    return r !== 0;
  }, f.prototype.traverse_whitespace = function(c) {
    return c.whitespace_before || c.newlines ? (this.print_preserved_newlines(c) || (this._output.space_before_token = !0), !0) : !1;
  }, f.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  }, f.prototype.print_newline = function(c) {
    this._output.add_new_line(c);
  }, f.prototype.print_token = function(c) {
    c.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(c.text));
  }, f.prototype.indent = function() {
    this.indent_level++;
  }, f.prototype.deindent = function() {
    this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
  }, f.prototype.get_full_indent = function(c) {
    return c = this.indent_level + (c || 0), c < 1 ? "" : this._output.get_indent_string(c);
  };
  var o = function(c) {
    for (var r = null, d = c.next; d.type !== t.EOF && c.closed !== d; ) {
      if (d.type === t.ATTRIBUTE && d.text === "type") {
        d.next && d.next.type === t.EQUALS && d.next.next && d.next.next.type === t.VALUE && (r = d.next.next.text);
        break;
      }
      d = d.next;
    }
    return r;
  }, u = function(c, r) {
    var d = null, T = null;
    return r.closed ? (c === "script" ? d = "text/javascript" : c === "style" && (d = "text/css"), d = o(r) || d, d.search("text/css") > -1 ? T = "css" : d.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? T = "javascript" : d.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? T = "html" : d.search(/test\/null/) > -1 && (T = "null"), T) : null;
  };
  function g(c, r) {
    return r.indexOf(c) !== -1;
  }
  function v(c, r, d) {
    this.parent = c || null, this.tag = r ? r.tag_name : "", this.indent_level = d || 0, this.parser_token = r || null;
  }
  function b(c) {
    this._printer = c, this._current_frame = null;
  }
  b.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, b.prototype.record_tag = function(c) {
    var r = new v(this._current_frame, c, this._printer.indent_level);
    this._current_frame = r;
  }, b.prototype._try_pop_frame = function(c) {
    var r = null;
    return c && (r = c.parser_token, this._printer.indent_level = c.indent_level, this._current_frame = c.parent), r;
  }, b.prototype._get_frame = function(c, r) {
    for (var d = this._current_frame; d && c.indexOf(d.tag) === -1; ) {
      if (r && r.indexOf(d.tag) !== -1) {
        d = null;
        break;
      }
      d = d.parent;
    }
    return d;
  }, b.prototype.try_pop = function(c, r) {
    var d = this._get_frame([c], r);
    return this._try_pop_frame(d);
  }, b.prototype.indent_to_tag = function(c) {
    var r = this._get_frame(c);
    r && (this._printer.indent_level = r.indent_level);
  };
  function h(c, r, d, T) {
    this._source_text = c || "", r = r || {}, this._js_beautify = d, this._css_beautify = T, this._tag_stack = null;
    var x = new n(r, "html");
    this._options = x, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  h.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var c = this._source_text, r = this._options.eol;
    this._options.eol === "auto" && (r = `
`, c && a.test(c) && (r = c.match(a)[0])), c = c.replace(_, `
`);
    var d = c.match(/^[\t ]*/)[0], T = {
      text: "",
      type: ""
    }, x = new R(), E = new f(this._options, d), l = new e(c, this._options).tokenize();
    this._tag_stack = new b(E);
    for (var m = null, p = l.next(); p.type !== t.EOF; )
      p.type === t.TAG_OPEN || p.type === t.COMMENT ? (m = this._handle_tag_open(E, p, x, T, l), x = m) : p.type === t.ATTRIBUTE || p.type === t.EQUALS || p.type === t.VALUE || p.type === t.TEXT && !x.tag_complete ? m = this._handle_inside_tag(E, p, x, T) : p.type === t.TAG_CLOSE ? m = this._handle_tag_close(E, p, x) : p.type === t.TEXT ? m = this._handle_text(E, p, x) : p.type === t.CONTROL_FLOW_OPEN ? m = this._handle_control_flow_open(E, p) : p.type === t.CONTROL_FLOW_CLOSE ? m = this._handle_control_flow_close(E, p) : E.add_raw_token(p), T = m, p = l.next();
    var O = E._output.get_code(r);
    return O;
  }, h.prototype._handle_control_flow_open = function(c, r) {
    var d = {
      text: r.text,
      type: r.type
    };
    return c.set_space_before_token(r.newlines || r.whitespace_before !== "", !0), r.newlines ? c.print_preserved_newlines(r) : c.set_space_before_token(r.newlines || r.whitespace_before !== "", !0), c.print_token(r), c.indent(), d;
  }, h.prototype._handle_control_flow_close = function(c, r) {
    var d = {
      text: r.text,
      type: r.type
    };
    return c.deindent(), r.newlines ? c.print_preserved_newlines(r) : c.set_space_before_token(r.newlines || r.whitespace_before !== "", !0), c.print_token(r), d;
  }, h.prototype._handle_tag_close = function(c, r, d) {
    var T = {
      text: r.text,
      type: r.type
    };
    return c.alignment_size = 0, d.tag_complete = !0, c.set_space_before_token(r.newlines || r.whitespace_before !== "", !0), d.is_unformatted ? c.add_raw_token(r) : (d.tag_start_char === "<" && (c.set_space_before_token(r.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && d.has_wrapped_attrs && c.print_newline(!1)), c.print_token(r)), d.indent_content && !(d.is_unformatted || d.is_content_unformatted) && (c.indent(), d.indent_content = !1), !d.is_inline_element && !(d.is_unformatted || d.is_content_unformatted) && c.set_wrap_point(), T;
  }, h.prototype._handle_inside_tag = function(c, r, d, T) {
    var x = d.has_wrapped_attrs, E = {
      text: r.text,
      type: r.type
    };
    return c.set_space_before_token(r.newlines || r.whitespace_before !== "", !0), d.is_unformatted ? c.add_raw_token(r) : d.tag_start_char === "{" && r.type === t.TEXT ? c.print_preserved_newlines(r) ? (r.newlines = 0, c.add_raw_token(r)) : c.print_token(r) : (r.type === t.ATTRIBUTE ? c.set_space_before_token(!0) : (r.type === t.EQUALS || r.type === t.VALUE && r.previous.type === t.EQUALS) && c.set_space_before_token(!1), r.type === t.ATTRIBUTE && d.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (c.traverse_whitespace(r), x = x || r.newlines !== 0), this._is_wrap_attributes_force && d.attr_count >= this._options.wrap_attributes_min_attrs && (T.type !== t.TAG_OPEN || this._is_wrap_attributes_force_expand_multiline) && (c.print_newline(!1), x = !0)), c.print_token(r), x = x || c.previous_token_wrapped(), d.has_wrapped_attrs = x), E;
  }, h.prototype._handle_text = function(c, r, d) {
    var T = {
      text: r.text,
      type: "TK_CONTENT"
    };
    return d.custom_beautifier_name ? this._print_custom_beatifier_text(c, r, d) : d.is_unformatted || d.is_content_unformatted ? c.add_raw_token(r) : (c.traverse_whitespace(r), c.print_token(r)), T;
  }, h.prototype._print_custom_beatifier_text = function(c, r, d) {
    var T = this;
    if (r.text !== "") {
      var x = r.text, E, l = 1, m = "", p = "";
      d.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? E = this._js_beautify : d.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? E = this._css_beautify : d.custom_beautifier_name === "html" && (E = function(N, P) {
        var $ = new h(N, P, T._js_beautify, T._css_beautify);
        return $.beautify();
      }), this._options.indent_scripts === "keep" ? l = 0 : this._options.indent_scripts === "separate" && (l = -c.indent_level);
      var O = c.get_full_indent(l);
      if (x = x.replace(/\n[ \t]*$/, ""), d.custom_beautifier_name !== "html" && x[0] === "<" && x.match(/^(<!--|<!\[CDATA\[)/)) {
        var s = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(x);
        if (!s) {
          c.add_raw_token(r);
          return;
        }
        m = O + s[1] + `
`, x = s[4], s[5] && (p = O + s[5]), x = x.replace(/\n[ \t]*$/, ""), (s[2] || s[3].indexOf(`
`) !== -1) && (s = s[3].match(/[ \t]+$/), s && (r.whitespace_before = s[0]));
      }
      if (x)
        if (E) {
          var y = function() {
            this.eol = `
`;
          };
          y.prototype = this._options.raw_options;
          var w = new y();
          x = E(O + x, w);
        } else {
          var C = r.whitespace_before;
          C && (x = x.replace(new RegExp(`
(` + C + ")?", "g"), `
`)), x = O + x.replace(/\n/g, `
` + O);
        }
      m && (x ? x = m + x + `
` + p : x = m + p), c.print_newline(!1), x && (r.text = x, r.whitespace_before = "", r.newlines = 0, c.add_raw_token(r), c.print_newline(!0));
    }
  }, h.prototype._handle_tag_open = function(c, r, d, T, x) {
    var E = this._get_tag_open_token(r);
    if ((d.is_unformatted || d.is_content_unformatted) && !d.is_empty_element && r.type === t.TAG_OPEN && !E.is_start_tag ? (c.add_raw_token(r), E.start_tag_token = this._tag_stack.try_pop(E.tag_name)) : (c.traverse_whitespace(r), this._set_tag_position(c, r, E, d, T), E.is_inline_element || c.set_wrap_point(), c.print_token(r)), E.is_start_tag && this._is_wrap_attributes_force) {
      var l = 0, m;
      do
        m = x.peek(l), m.type === t.ATTRIBUTE && (E.attr_count += 1), l += 1;
      while (m.type !== t.EOF && m.type !== t.TAG_CLOSE);
    }
    return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (E.alignment_size = r.text.length + 1), !E.tag_complete && !E.is_unformatted && (c.alignment_size = E.alignment_size), E;
  };
  var R = function(c, r) {
    if (this.parent = c || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !r)
      this.tag_complete = !0;
    else {
      var d;
      this.tag_start_char = r.text[0], this.text = r.text, this.tag_start_char === "<" ? (d = r.text.match(/^<([^\s>]*)/), this.tag_check = d ? d[1] : "") : (d = r.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = d ? d[1] : "", (r.text.startsWith("{{#>") || r.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && r.next !== null ? this.tag_check = r.next.text.split(" ")[0] : this.tag_check = r.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), r.type === t.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || r.closed && r.closed.text === "/>";
      var T = 2;
      this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (T = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(T)));
    }
  };
  h.prototype._get_tag_open_token = function(c) {
    var r = new R(this._tag_stack.get_parser_token(), c);
    return r.alignment_size = this._options.wrap_attributes_indent_size, r.is_end_tag = r.is_end_tag || g(r.tag_check, this._options.void_elements), r.is_empty_element = r.tag_complete || r.is_start_tag && r.is_end_tag, r.is_unformatted = !r.tag_complete && g(r.tag_check, this._options.unformatted), r.is_content_unformatted = !r.is_empty_element && g(r.tag_check, this._options.content_unformatted), r.is_inline_element = g(r.tag_name, this._options.inline) || this._options.inline_custom_elements && r.tag_name.includes("-") || r.tag_start_char === "{", r;
  }, h.prototype._set_tag_position = function(c, r, d, T, x) {
    if (d.is_empty_element || (d.is_end_tag ? d.start_tag_token = this._tag_stack.try_pop(d.tag_name) : (this._do_optional_end_element(d) && (d.is_inline_element || c.print_newline(!1)), this._tag_stack.record_tag(d), (d.tag_name === "script" || d.tag_name === "style") && !(d.is_unformatted || d.is_content_unformatted) && (d.custom_beautifier_name = u(d.tag_check, r)))), g(d.tag_check, this._options.extra_liners) && (c.print_newline(!1), c._output.just_added_blankline() || c.print_newline(!0)), d.is_empty_element) {
      if (d.tag_start_char === "{" && d.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]), d.indent_content = !0;
        var E = c.current_line_has_match(/{{#if/);
        E || c.print_newline(!1);
      }
      d.tag_name === "!--" && x.type === t.TAG_CLOSE && T.is_end_tag && d.text.indexOf(`
`) === -1 || (d.is_inline_element || d.is_unformatted || c.print_newline(!1), this._calcluate_parent_multiline(c, d));
    } else if (d.is_end_tag) {
      var l = !1;
      l = d.start_tag_token && d.start_tag_token.multiline_content, l = l || !d.is_inline_element && !(T.is_inline_element || T.is_unformatted) && !(x.type === t.TAG_CLOSE && d.start_tag_token === T) && x.type !== "TK_CONTENT", (d.is_content_unformatted || d.is_unformatted) && (l = !1), l && c.print_newline(!1);
    } else
      d.indent_content = !d.custom_beautifier_name, d.tag_start_char === "<" && (d.tag_name === "html" ? d.indent_content = this._options.indent_inner_html : d.tag_name === "head" ? d.indent_content = this._options.indent_head_inner_html : d.tag_name === "body" && (d.indent_content = this._options.indent_body_inner_html)), !(d.is_inline_element || d.is_unformatted) && (x.type !== "TK_CONTENT" || d.is_content_unformatted) && c.print_newline(!1), this._calcluate_parent_multiline(c, d);
  }, h.prototype._calcluate_parent_multiline = function(c, r) {
    r.parent && c._output.just_added_newline() && !((r.is_inline_element || r.is_unformatted) && r.parent.is_inline_element) && (r.parent.multiline_content = !0);
  };
  var A = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], S = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  return h.prototype._do_optional_end_element = function(c) {
    var r = null;
    if (!(c.is_empty_element || !c.is_start_tag || !c.parent)) {
      if (c.tag_name === "body")
        r = r || this._tag_stack.try_pop("head");
      else if (c.tag_name === "li")
        r = r || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      else if (c.tag_name === "dd" || c.tag_name === "dt")
        r = r || this._tag_stack.try_pop("dt", ["dl"]), r = r || this._tag_stack.try_pop("dd", ["dl"]);
      else if (c.parent.tag_name === "p" && A.indexOf(c.tag_name) !== -1) {
        var d = c.parent.parent;
        (!d || S.indexOf(d.tag_name) === -1) && (r = r || this._tag_stack.try_pop("p"));
      } else
        c.tag_name === "rp" || c.tag_name === "rt" ? (r = r || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), r = r || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : c.tag_name === "optgroup" ? r = r || this._tag_stack.try_pop("optgroup", ["select"]) : c.tag_name === "option" ? r = r || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : c.tag_name === "colgroup" ? r = r || this._tag_stack.try_pop("caption", ["table"]) : c.tag_name === "thead" ? (r = r || this._tag_stack.try_pop("caption", ["table"]), r = r || this._tag_stack.try_pop("colgroup", ["table"])) : c.tag_name === "tbody" || c.tag_name === "tfoot" ? (r = r || this._tag_stack.try_pop("caption", ["table"]), r = r || this._tag_stack.try_pop("colgroup", ["table"]), r = r || this._tag_stack.try_pop("thead", ["table"]), r = r || this._tag_stack.try_pop("tbody", ["table"])) : c.tag_name === "tr" ? (r = r || this._tag_stack.try_pop("caption", ["table"]), r = r || this._tag_stack.try_pop("colgroup", ["table"]), r = r || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (c.tag_name === "th" || c.tag_name === "td") && (r = r || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), r = r || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return c.parent = this._tag_stack.get_parser_token(), r;
    }
  }, ue.Beautifier = h, ue;
}
var ri;
function On() {
  if (ri)
    return Nt.exports;
  ri = 1;
  var n = En().Beautifier, i = ki().Options;
  function e(t, a, _, f) {
    var o = new n(t, a, _, f);
    return o.beautify();
  }
  return Nt.exports = e, Nt.exports.defaultOptions = function() {
    return new i();
  }, Nt.exports;
}
var ai;
function Tn() {
  if (ai)
    return wt;
  ai = 1;
  var n = yn(), i = xn(), e = On();
  function t(a, _, f, o) {
    return f = f || n, o = o || i, e(a, _, f, o);
  }
  return t.defaultOptions = e.defaultOptions, wt.js = n, wt.css = i, wt.html = t, wt;
}
(function(n) {
  function i(e, t, a) {
    var _ = function(f, o) {
      return e.js_beautify(f, o);
    };
    return _.js = e.js_beautify, _.css = t.css_beautify, _.html = a.html_beautify, _.js_beautify = e.js_beautify, _.css_beautify = t.css_beautify, _.html_beautify = a.html_beautify, _;
  }
  (function(e) {
    var t = Tn();
    t.js_beautify = t.js, t.css_beautify = t.css, t.html_beautify = t.html, e.exports = i(t, t, t);
  })(n);
})(yi);
/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var oi, kn = function(i) {
  return typeof i == "string" && Rn().test(i);
};
function Rn() {
  return oi || (oi = new RegExp(`^[\\s	
\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF"]+$`));
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var Sn = function(i) {
  return typeof i < "u" && i !== null && (typeof i == "object" || typeof i == "function");
}, _i = Sn, Ri = function(i) {
  _i(i) || (i = {});
  for (var e = arguments.length, t = 1; t < e; t++) {
    var a = arguments[t];
    _i(a) && Cn(i, a);
  }
  return i;
};
function Cn(n, i) {
  for (var e in i)
    An(i, e) && (n[e] = i[e]);
}
function An(n, i) {
  return Object.prototype.hasOwnProperty.call(n, i);
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Nn = function(n) {
  return n != null && (Si(n) || Ln(n) || !!n._isBuffer);
};
function Si(n) {
  return !!n.constructor && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function Ln(n) {
  return typeof n.readFloatLE == "function" && typeof n.slice == "function" && Si(n.slice(0, 0));
}
var $n = Nn, jn = Object.prototype.toString, Dn = function(i) {
  if (typeof i > "u")
    return "undefined";
  if (i === null)
    return "null";
  if (i === !0 || i === !1 || i instanceof Boolean)
    return "boolean";
  if (typeof i == "string" || i instanceof String)
    return "string";
  if (typeof i == "number" || i instanceof Number)
    return "number";
  if (typeof i == "function" || i instanceof Function)
    return "function";
  if (typeof Array.isArray < "u" && Array.isArray(i))
    return "array";
  if (i instanceof RegExp)
    return "regexp";
  if (i instanceof Date)
    return "date";
  var e = jn.call(i);
  return e === "[object RegExp]" ? "regexp" : e === "[object Date]" ? "date" : e === "[object Arguments]" ? "arguments" : e === "[object Error]" ? "error" : $n(i) ? "buffer" : e === "[object Set]" ? "set" : e === "[object WeakSet]" ? "weakset" : e === "[object Map]" ? "map" : e === "[object WeakMap]" ? "weakmap" : e === "[object Symbol]" ? "symbol" : e === "[object Int8Array]" ? "int8array" : e === "[object Uint8Array]" ? "uint8array" : e === "[object Uint8ClampedArray]" ? "uint8clampedarray" : e === "[object Int16Array]" ? "int16array" : e === "[object Uint16Array]" ? "uint16array" : e === "[object Int32Array]" ? "int32array" : e === "[object Uint32Array]" ? "uint32array" : e === "[object Float32Array]" ? "float32array" : e === "[object Float64Array]" ? "float64array" : "object";
};
/*!
 * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */
var In = kn, Pn = Ri, Bn = Dn, Mn = function(n, i) {
  var e = Pn({}, i), t = e.sep || `

`, a = e.min, _;
  return typeof a == "number" && a !== 2 && (_ = new RegExp("(\\r\\n|\\n|\\u2424) {" + a + ",}")), typeof _ > "u" && (_ = e.regex || /(\r\n|\n|\u2424){2,}/g), e.keepWhitespace !== !0 && (n = n.split(`
`).map(function(f) {
    return In(f) ? f.trim() : f;
  }).join(`
`)), n = Un(n, e), n.replace(_, t);
};
function Un(n, i) {
  var e = i.trailingNewline;
  if (e === !1)
    return n;
  switch (Bn(e)) {
    case "string":
      n = n.replace(/\s+$/, i.trailingNewline);
      break;
    case "function":
      n = i.trailingNewline(n);
      break;
    case "undefined":
    case "boolean":
    default: {
      n = n.replace(/\s+$/, `
`);
      break;
    }
  }
  return n;
}
/*!
 * pretty <https://github.com/jonschlinkert/pretty>
 *
 * Copyright (c) 2013-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var Wn = yi.exports, Fn = Mn, zn = Ri, Kn = {
  unformatted: ["code", "pre", "em", "strong", "span"],
  indent_inner_html: !0,
  indent_char: " ",
  indent_size: 2,
  sep: `
`
}, qn = function(i, e) {
  var t = zn({}, Kn, e);
  return i = Wn.html(i, t), t.ocd === !0 ? (t.newlines && (t.sep = t.newlines), Vn(i, t)) : i;
};
function Vn(n, i) {
  return Fn(n, i).replace(/^\s+/g, "").replace(/\s+$/g, `
`).replace(/(\s*<!--)/g, `
$1`).replace(/>(\s*)(?=<!--\s*\/)/g, "> ");
}
function vt(n) {
  let { code: i, src: e } = n || {};
  if (i || (i = '<div id="app"></div>'), e && (i += `
<script type="module" src="${e}"><\/script>`), typeof DOMParser < "u") {
    const a = new DOMParser().parseFromString(i, "text/html");
    return qn(`<!DOCTYPE html>
${a.documentElement.outerHTML}`, {
      ocd: !0
    });
  }
  return "";
}
function Ft(n) {
  const i = {};
  return n === I.REACT && (i.jsx = "react"), JSON.stringify(
    {
      compilerOptions: {
        target: "es5",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: !0,
        skipLibCheck: !0,
        esModuleInterop: !0,
        allowImportingTsExtensions: !0,
        allowSyntheticDefaultImports: !0,
        strict: !0,
        forceConsistentCasingInFileNames: !0,
        module: "esnext",
        moduleResolution: "node",
        resolveJsonModule: !0,
        isolatedModules: !0,
        noEmit: !0,
        ...i
      },
      include: ["src"]
    },
    null,
    2
  );
}
const Ci = () => JSON.stringify(
  {
    installDependencies: !1,
    startCommand: "npm install && npm run dev"
  },
  null,
  2
), Gn = `import { createApp } from "vue";
import Demo from "./Demo.vue";

const app = createApp(Demo);
app.mount("#app");
`, Hn = `import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./Demo.tsx";

const root = createRoot(document.querySelector("#app"));
root.render(<Demo />);
`;
function zt(n) {
  return n === I.VUE ? Gn : n === I.REACT ? Hn : "";
}
const Xn = `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
`, Qn = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
});
`;
function Ai(n) {
  return n === I.VUE ? Xn : n === I.REACT ? Qn : "";
}
const Jn = () => ({
  copyContent: H(""),
  clickCopy: async (e) => {
    let t = !0;
    try {
      navigator.clipboard && navigator.clipboard.writeText && await navigator.clipboard.writeText(e);
    } catch {
      const _ = document.createElement("textarea");
      _.value = e, _.style.position = "fixed", _.style.left = "-999999px", _.style.top = "-999999px", document.body.appendChild(_), _.focus(), _.select(), t = document.execCommand("copy"), document.body.removeChild(_);
    }
    return t;
  }
}), Zn = () => {
  const n = H(!0);
  return {
    isCodeFold: n,
    setCodeFold: (e) => {
      n.value = e;
    }
  };
};
function Yn(n) {
  return [
    ...n.match(/from '([^']+)'(;)?(\r)?\n/g) || [],
    ...n.match(/from "([^"]+)"(;)?(\r)?\n/g) || []
  ].map((i) => {
    let e = "";
    return i.includes("'") ? e = i.split("'")[1] : i.includes('"') && (e = i.split('"')[1]), e.includes("/") && (e.startsWith("@") ? e = e.split("/")[0] + "/" + e.split("/")[1] : e = e.split("/")[0]), e;
  }).filter((i) => i !== "").reduce((i, e) => (i[e] = "latest", i), {});
}
const $t = "vitepress-demo-plugin", jt = (n, i, e, t) => {
  let a = i === "" ? `${n}` : `${n}-${i}`;
  return e && (a += `__${e}`), t && (a += `--${t}`), a;
}, Kt = (n = "") => ({
  b: () => jt($t, n),
  e: (_ = "") => jt($t, n, _),
  m: (_ = "") => jt($t, n, "", _),
  bem: (_, f, o) => jt($t, _, f, o)
}), ui = ({
  code: n,
  styles: i,
  links: e
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    ${i}
    ${e}
    <style>
      body {
        min-height: 0;
      }
    </style>
  </head>
  <body>
    <div class="vp-raw">
      ${n}
    </div>
  </body>
</html>
  `, ts = (n, i) => {
  const e = {
    dependencies: {},
    devDependencies: {
      typescript: "latest"
    }
  };
  return n === I.VUE ? (e.dependencies.vue = "latest", i === at.STACKBLITZ ? (e.devDependencies.vite = "latest", e.devDependencies["@vitejs/plugin-vue"] = "latest", e.devDependencies["@vitejs/plugin-vue-jsx"] = "latest") : i === at.CODESANDBOX && (e.devDependencies["@vue/cli-plugin-babel"] = "latest")) : n === I.REACT && (e.dependencies.react = "latest", e.dependencies["react-dom"] = "latest", e.dependencies["@emotion/react"] = "latest", e.dependencies["@emotion/styled"] = "latest", e.devDependencies["@types/react"] = "latest", e.devDependencies["@types/react-dom"] = "latest", i === at.STACKBLITZ && (e.devDependencies.vite = "latest", e.devDependencies["@vitejs/plugin-react"] = "latest")), e;
};
function qt(n) {
  const { type: i, platform: e, code: t, title: a, description: _ } = n, f = e === at.STACKBLITZ ? {
    scripts: {
      dev: "vite",
      build: "vite build",
      serve: "vite preview"
    }
  } : {}, { dependencies: o, devDependencies: u } = ts(i, e), g = {
    name: a,
    description: _,
    version: "0.0.0",
    private: !0,
    ...f,
    dependencies: {
      ...Yn(t),
      ...o
    },
    devDependencies: {
      ...u
    }
  };
  return JSON.stringify(g, null, 2);
}
function es(n) {
  const { code: i } = n;
  return Ut({
    files: {
      "package.json": {
        content: qt({
          type: I.VUE,
          platform: at.CODESANDBOX,
          code: i
        })
      },
      "tsconfig.json": {
        content: Ft(I.VUE)
      },
      "index.html": {
        content: vt()
      },
      "src/main.ts": {
        content: zt(I.VUE)
      },
      "src/Demo.vue": {
        content: i
      },
      ...n.customFiles
    }
  });
}
function is(n) {
  const { code: i } = n;
  return Ut({
    files: {
      "package.json": {
        content: qt({
          type: I.REACT,
          platform: at.CODESANDBOX,
          code: i
        })
      },
      "tsconfig.json": {
        content: Ft(I.REACT)
      },
      "index.html": {
        content: vt()
      },
      "src/main.tsx": {
        content: zt(I.REACT)
      },
      "src/Demo.tsx": {
        content: i
      },
      ...n.customFiles
    }
  });
}
function ns(n) {
  const { code: i } = n;
  return Ut({
    files: {
      "index.html": {
        content: vt({ code: i })
      },
      ...n.customFiles
    },
    template: "static"
  });
}
function ss(n) {
  var a, _, f;
  const i = (a = (n.templates || []).find(
    (o) => o.scope === "global"
  )) == null ? void 0 : a.files, e = (_ = (n.templates || []).find(
    (o) => o.scope === n.type
  )) == null ? void 0 : _.files, t = (f = (n.templates || []).find(
    (o) => o.scope === n.scope
  )) == null ? void 0 : f.files;
  n.customFiles = {
    ...i,
    ...e,
    ...t
  };
  for (let o in n.customFiles)
    n.customFiles[o] = {
      content: n.customFiles[o] || ""
    };
  if (n.type === I.VUE)
    return es(n);
  if (n.type === I.REACT)
    return is(n);
  if (n.type === I.HTML)
    return ns(n);
}
const rs = {
  action: "https://codesandbox.io/api/v1/sandboxes/define",
  method: "post",
  target: "_blank",
  style: { display: "flex" }
}, as = ["value"], os = ["value"], _s = /* @__PURE__ */ gt({
  __name: "codesandbox",
  props: {
    code: {},
    type: {},
    title: {},
    description: {},
    scope: {},
    templates: {}
  },
  setup(n) {
    const i = n, e = it(
      () => ss({
        code: i.code,
        type: i.type,
        title: i.title || gi,
        description: i.description || vi,
        scope: i.scope,
        templates: i.templates
      })
    ), t = it(() => cn(i.type));
    return (a, _) => (j(), B("form", rs, [
      L("input", {
        style: { display: "none" },
        name: "parameters",
        value: e.value
      }, null, 8, as),
      _[0] || (_[0] = L("input", {
        style: { display: "none" },
        name: "embed",
        value: 1
      }, null, -1)),
      L("input", {
        style: { display: "none" },
        name: "query",
        value: `module=${t.value}`
      }, null, 8, os),
      _[1] || (_[1] = Mi('<button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg></button>', 1))
    ]));
  }
}), us = 500, ls = 20, ps = 300, cs = "https://stackblitz.com", li = [
  "angular-cli",
  "create-react-app",
  "html",
  "javascript",
  "node",
  "polymer",
  "typescript",
  "vue"
], hs = ["project", "search", "ports", "settings"], fs = ["light", "dark"], ds = ["editor", "preview"], pi = {
  clickToLoad: (n) => ct("ctl", n),
  devToolsHeight: (n) => ci("devtoolsheight", n),
  forceEmbedLayout: (n) => ct("embed", n),
  hideDevTools: (n) => ct("hidedevtools", n),
  hideExplorer: (n) => ct("hideExplorer", n),
  hideNavigation: (n) => ct("hideNavigation", n),
  openFile: (n) => Dt("file", n),
  showSidebar: (n) => ms("showSidebar", n),
  sidebarView: (n) => pe("sidebarView", n, hs),
  startScript: (n) => Dt("startScript", n),
  terminalHeight: (n) => ci("terminalHeight", n),
  theme: (n) => pe("theme", n, fs),
  view: (n) => pe("view", n, ds),
  zenMode: (n) => ct("zenMode", n),
  organization: (n) => `${Dt("orgName", n == null ? void 0 : n.name)}&${Dt("orgProvider", n == null ? void 0 : n.provider)}`,
  crossOriginIsolated: (n) => ct("corp", n)
};
function Ni(n = {}) {
  const i = Object.entries(n).map(([e, t]) => t != null && pi.hasOwnProperty(e) ? pi[e](t) : "").filter(Boolean);
  return i.length ? `?${i.join("&")}` : "";
}
function ct(n, i) {
  return i === !0 ? `${n}=1` : "";
}
function ms(n, i) {
  return typeof i == "boolean" ? `${n}=${i ? "1" : "0"}` : "";
}
function ci(n, i) {
  if (typeof i == "number" && !Number.isNaN(i)) {
    const e = Math.min(100, Math.max(0, i));
    return `${n}=${encodeURIComponent(Math.round(e))}`;
  }
  return "";
}
function pe(n, i = "", e = []) {
  return e.includes(i) ? `${n}=${encodeURIComponent(i)}` : "";
}
function Dt(n, i) {
  return (Array.isArray(i) ? i : [i]).filter((t) => typeof t == "string" && t.trim() !== "").map((t) => `${n}=${encodeURIComponent(t)}`).join("&");
}
function Li() {
  return Math.random().toString(36).slice(2, 6) + Math.random().toString(36).slice(2, 6);
}
function ve(n, i) {
  return `${$i(i)}${n}${Ni(i)}`;
}
function be(n, i) {
  const e = {
    forceEmbedLayout: !0
  };
  return i && typeof i == "object" && Object.assign(e, i), `${$i(e)}${n}${Ni(e)}`;
}
function $i(n = {}) {
  return (typeof n.origin == "string" ? n.origin : cs).replace(/\/$/, "");
}
function ye(n, i, e) {
  if (!i || !n || !n.parentNode)
    throw new Error("Invalid Element");
  n.id && (i.id = n.id), n.className && (i.className = n.className), gs(i, e), vs(n, i, e), n.replaceWith(i);
}
function we(n) {
  if (typeof n == "string") {
    const i = document.getElementById(n);
    if (!i)
      throw new Error(`Could not find element with id '${n}'`);
    return i;
  } else if (n instanceof HTMLElement)
    return n;
  throw new Error(`Invalid element: ${n}`);
}
function xe(n) {
  return n && n.newWindow === !1 ? "_self" : "_blank";
}
function gs(n, i = {}) {
  const e = Object.hasOwnProperty.call(i, "height") ? `${i.height}` : `${ps}`, t = Object.hasOwnProperty.call(i, "width") ? `${i.width}` : void 0;
  n.setAttribute("height", e), t ? n.setAttribute("width", t) : n.setAttribute("style", "width:100%;");
}
function vs(n, i, e = {}) {
  var a, _, f;
  const t = (f = (_ = (a = n.allow) == null ? void 0 : a.split(";")) == null ? void 0 : _.map((o) => o.trim())) != null ? f : [];
  e.crossOriginIsolated && !t.includes("cross-origin-isolated") && t.push("cross-origin-isolated"), t.length > 0 && (i.allow = t.join("; "));
}
class bs {
  constructor(i) {
    this.pending = {}, this.port = i, this.port.onmessage = this.messageListener.bind(this);
  }
  request({ type: i, payload: e }) {
    return new Promise((t, a) => {
      const _ = Li();
      this.pending[_] = { resolve: t, reject: a }, this.port.postMessage({
        type: i,
        payload: {
          ...e,
          __reqid: _
        }
      });
    });
  }
  messageListener(i) {
    var o;
    if (typeof ((o = i.data.payload) == null ? void 0 : o.__reqid) != "string")
      return;
    const { type: e, payload: t } = i.data, { __reqid: a, __success: _, __error: f } = t;
    this.pending[a] && (_ ? this.pending[a].resolve(this.cleanResult(t)) : this.pending[a].reject(f ? `${e}: ${f}` : e), delete this.pending[a]);
  }
  cleanResult(i) {
    const e = { ...i };
    return delete e.__reqid, delete e.__success, delete e.__error, Object.keys(e).length ? e : null;
  }
}
class ys {
  constructor(i, e) {
    this.editor = {
      openFile: (t) => this._rdc.request({
        type: "SDK_OPEN_FILE",
        payload: { path: t }
      }),
      setCurrentFile: (t) => this._rdc.request({
        type: "SDK_SET_CURRENT_FILE",
        payload: { path: t }
      }),
      setTheme: (t) => this._rdc.request({
        type: "SDK_SET_UI_THEME",
        payload: { theme: t }
      }),
      setView: (t) => this._rdc.request({
        type: "SDK_SET_UI_VIEW",
        payload: { view: t }
      }),
      showSidebar: (t = !0) => this._rdc.request({
        type: "SDK_TOGGLE_SIDEBAR",
        payload: { visible: t }
      })
    }, this.preview = {
      origin: "",
      getUrl: () => this._rdc.request({
        type: "SDK_GET_PREVIEW_URL",
        payload: {}
      }).then((t) => {
        var a;
        return (a = t == null ? void 0 : t.url) != null ? a : null;
      }),
      setUrl: (t = "/") => {
        if (typeof t != "string" || !t.startsWith("/"))
          throw new Error(`Invalid argument: expected a path starting with '/', got '${t}'`);
        return this._rdc.request({
          type: "SDK_SET_PREVIEW_URL",
          payload: { path: t }
        });
      }
    }, this._rdc = new bs(i), Object.defineProperty(this.preview, "origin", {
      value: typeof e.previewOrigin == "string" ? e.previewOrigin : null,
      writable: !1
    });
  }
  applyFsDiff(i) {
    const e = (t) => t !== null && typeof t == "object";
    if (!e(i) || !e(i.create))
      throw new Error("Invalid diff object: expected diff.create to be an object.");
    if (!Array.isArray(i.destroy))
      throw new Error("Invalid diff object: expected diff.destroy to be an array.");
    return this._rdc.request({
      type: "SDK_APPLY_FS_DIFF",
      payload: i
    });
  }
  getDependencies() {
    return this._rdc.request({
      type: "SDK_GET_DEPS_SNAPSHOT",
      payload: {}
    });
  }
  getFsSnapshot() {
    return this._rdc.request({
      type: "SDK_GET_FS_SNAPSHOT",
      payload: {}
    });
  }
}
const It = [];
class ws {
  constructor(i) {
    this.id = Li(), this.element = i, this.pending = new Promise((e, t) => {
      const a = ({ data: g, ports: v }) => {
        (g == null ? void 0 : g.action) === "SDK_INIT_SUCCESS" && g.id === this.id && (this.vm = new ys(v[0], g.payload), e(this.vm), f());
      }, _ = () => {
        var g;
        (g = this.element.contentWindow) == null || g.postMessage(
          {
            action: "SDK_INIT",
            id: this.id
          },
          "*"
        );
      };
      function f() {
        window.clearInterval(u), window.removeEventListener("message", a);
      }
      window.addEventListener("message", a), _();
      let o = 0;
      const u = window.setInterval(() => {
        if (this.vm) {
          f();
          return;
        }
        if (o >= ls) {
          f(), t("Timeout: Unable to establish a connection with the StackBlitz VM"), It.forEach((g, v) => {
            g.id === this.id && It.splice(v, 1);
          });
          return;
        }
        o++, _();
      }, us);
    }), It.push(this);
  }
}
const xs = (n) => {
  var e;
  const i = n instanceof Element ? "element" : "id";
  return (e = It.find((t) => t[i] === n)) != null ? e : null;
};
function Es(n, i) {
  const e = document.createElement("input");
  return e.type = "hidden", e.name = n, e.value = i, e;
}
function Os(n) {
  return n.replace(/\[/g, "%5B").replace(/\]/g, "%5D");
}
function ji({
  template: n,
  title: i,
  description: e,
  dependencies: t,
  files: a,
  settings: _
}) {
  if (!li.includes(n)) {
    const g = li.map((v) => `'${v}'`).join(", ");
    console.warn(`Unsupported project.template: must be one of ${g}`);
  }
  const f = [], o = (g, v, b = "") => {
    f.push(Es(g, typeof v == "string" ? v : b));
  };
  o("project[title]", i), typeof e == "string" && e.length > 0 && o("project[description]", e), o("project[template]", n, "javascript"), t && (n === "node" ? console.warn(
    "Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."
  ) : o("project[dependencies]", JSON.stringify(t))), _ && o("project[settings]", JSON.stringify(_)), Object.entries(a).forEach(([g, v]) => {
    o(`project[files][${Os(g)}]`, v);
  });
  const u = document.createElement("form");
  return u.method = "POST", u.setAttribute("style", "display:none!important;"), u.append(...f), u;
}
function Ts(n, i) {
  const e = ji(n);
  return e.action = be("/run", i), e.id = "sb_run", `<!doctype html>
<html>
<head><title></title></head>
<body>
  ${e.outerHTML}
  <script>document.getElementById('${e.id}').submit();<\/script>
</body>
</html>`;
}
function ks(n, i) {
  const e = ji(n);
  e.action = ve("/run", i), e.target = xe(i), document.body.appendChild(e), e.submit(), document.body.removeChild(e);
}
function Vt(n) {
  var e;
  return n != null && n.contentWindow ? ((e = xs(n)) != null ? e : new ws(n)).pending : Promise.reject("Provided element is not an iframe.");
}
function Rs(n, i) {
  ks(n, i);
}
function Ss(n, i) {
  const e = ve(`/edit/${n}`, i), t = xe(i);
  window.open(e, t);
}
function Cs(n, i) {
  const e = ve(`/github/${n}`, i), t = xe(i);
  window.open(e, t);
}
function As(n, i, e) {
  var f;
  const t = we(n), a = Ts(i, e), _ = document.createElement("iframe");
  return ye(t, _, e), (f = _.contentDocument) == null || f.write(a), Vt(_);
}
function Ns(n, i, e) {
  const t = we(n), a = document.createElement("iframe");
  return a.src = be(`/edit/${i}`, e), ye(t, a, e), Vt(a);
}
function Ls(n, i, e) {
  const t = we(n), a = document.createElement("iframe");
  return a.src = be(`/github/${i}`, e), ye(t, a, e), Vt(a);
}
const Ee = {
  connect: Vt,
  embedGithubProject: Ls,
  embedProject: As,
  embedProjectId: Ns,
  openGithubProject: Cs,
  openProject: Rs,
  openProjectId: Ss
}, $s = (n) => {
  const { code: i, title: e, description: t } = n;
  Ee.openProject(
    {
      title: e,
      description: t,
      template: "html",
      files: {
        "index.html": vt({ code: i }),
        ...n.customFiles
      }
    },
    {
      openFile: "index.html"
    }
  );
}, js = (n) => {
  const { code: i, title: e, description: t } = n;
  Ee.openProject(
    {
      title: e,
      description: t,
      template: "node",
      files: {
        "src/Demo.tsx": i,
        "src/main.tsx": zt(I.REACT),
        "index.html": vt({ src: "/src/main.tsx" }),
        "package.json": qt({
          type: I.REACT,
          platform: at.STACKBLITZ,
          code: i
        }),
        "vite.config.js": Ai(I.REACT),
        ".stackblitzrc": Ci(),
        "tsconfig.json": Ft(I.REACT),
        ...n.customFiles
      }
    },
    {
      openFile: "src/Demo.tsx"
    }
  );
}, Ds = (n) => {
  const { code: i, title: e, description: t } = n;
  Ee.openProject(
    {
      title: e,
      description: t,
      template: "node",
      files: {
        "src/Demo.vue": i,
        "src/main.ts": zt(I.VUE),
        "index.html": vt({ src: "/src/main.ts" }),
        "package.json": qt({
          type: I.VUE,
          platform: at.STACKBLITZ,
          code: i
        }),
        "vite.config.js": Ai(I.VUE),
        ".stackblitzrc": Ci(),
        "tsconfig.json": Ft(I.VUE),
        ...n.customFiles
      }
    },
    {
      openFile: "src/Demo.vue"
    }
  );
};
function Is(n) {
  var a, _, f;
  const i = (a = (n.templates || []).find(
    (o) => o.scope === "global"
  )) == null ? void 0 : a.files, e = (_ = (n.templates || []).find(
    (o) => o.scope === n.type
  )) == null ? void 0 : _.files, t = (f = (n.templates || []).find(
    (o) => o.scope === n.scope
  )) == null ? void 0 : f.files;
  if (n.customFiles = {
    ...i,
    ...e,
    ...t
  }, n.type === I.VUE)
    return Ds(n);
  if (n.type === I.REACT)
    return js(n);
  if (n.type === I.HTML)
    return $s(n);
}
const Ps = /* @__PURE__ */ gt({
  __name: "stackblitz",
  props: {
    code: {},
    type: {},
    title: {},
    description: {},
    templates: {},
    scope: {}
  },
  setup(n) {
    const i = n;
    function e() {
      Is({
        code: i.code,
        type: i.type,
        title: i.title || gi,
        description: i.description || vi,
        templates: i.templates || [],
        scope: i.scope
      });
    }
    return (t, a) => (j(), B("svg", {
      onClick: e,
      viewBox: "64 64 896 896",
      focusable: "false",
      "data-icon": "thunderbolt",
      width: "20px",
      height: "20px",
      fill: "currentColor",
      "aria-hidden": "true"
    }, a[0] || (a[0] = [
      L("path", { d: "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z" }, null, -1)
    ])));
  }
}), Bs = {}, Ms = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-github"
};
function Us(n, i) {
  return j(), B("svg", Ms, i[0] || (i[0] = [
    L("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }, null, -1),
    L("path", { d: "M9 18c-4.51 2-5-2-7-2" }, null, -1)
  ]));
}
const Ws = /* @__PURE__ */ Y(Bs, [["render", Us]]), Fs = {}, zs = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-gitlab"
};
function Ks(n, i) {
  return j(), B("svg", zs, i[0] || (i[0] = [
    L("path", { d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" }, null, -1)
  ]));
}
const qs = /* @__PURE__ */ Y(Fs, [["render", Ks]]), Vs = {}, Gs = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  version: "1.1",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};
function Hs(n, i) {
  return j(), B("svg", Gs, i[0] || (i[0] = [
    L("defs", null, [
      L("clipPath", { id: "master_svg0_27_0291" }, [
        L("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      ])
    ], -1),
    L("g", { "clip-path": "url(#master_svg0_27_0291)" }, [
      L("g", null, [
        L("path", {
          d: "M4.707482,11.29327L4.707107,11.29289Q4.566455,11.152239999999999,4.382683,11.07612Q4.198912,11,4,11Q3.801088,11,3.617317,11.07612Q3.433545,11.152239999999999,3.292893,11.29289Q3.152241,11.43355,3.07612,11.61732Q3,11.80109,3,12Q3,12.02403,3.001154,12.04804Q3.010111,12.23427,3.085581,12.40477Q3.161051,12.57527,3.292893,12.70711L3.293268,12.70748L8.29289,17.7071Q8.36254,17.776699999999998,8.44443,17.8315Q8.52632,17.886200000000002,8.61732,17.9239Q8.70831,17.9616,8.80491,17.980800000000002Q8.90151,18,9,18Q9.09849,18,9.19509,17.980800000000002Q9.29169,17.9616,9.38268,17.9239Q9.47368,17.886200000000002,9.55557,17.8315Q9.63746,17.776699999999998,9.70711,17.7071L20.7071,6.707107Q20.8478,6.566454,20.9239,6.382683Q21,6.198912,21,6Q21,5.801088,20.9239,5.617317Q20.8478,5.433546,20.7071,5.292894Q20.5665,5.152241,20.3827,5.076121Q20.1989,5,20,5Q19.9741,5,19.9483,5.001339Q19.762999999999998,5.010937,19.5935,5.086334Q19.4241,5.16173,19.2929,5.292893L19.2925,5.293268L9,15.58579L4.707482,11.29327Z",
          "fill-rule": "evenodd",
          fill: "currentColor",
          "fill-opacity": "0.8500000238418579"
        })
      ])
    ], -1)
  ]));
}
const Xs = /* @__PURE__ */ Y(Vs, [["render", Hs]]), Qs = {}, Js = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-x-icon lucide-x"
};
function Zs(n, i) {
  return j(), B("svg", Js, i[0] || (i[0] = [
    L("path", { d: "M18 6 6 18" }, null, -1),
    L("path", { d: "m6 6 12 12" }, null, -1)
  ]));
}
const Ys = /* @__PURE__ */ Y(Qs, [["render", Zs]]), tr = { style: { color: "var(--vp-c-text-1)" } }, er = 3e3, ir = /* @__PURE__ */ gt({
  __name: "message",
  props: {
    content: { default: "\u590D\u5236\u6210\u529F\uFF01" },
    close: {},
    success: { type: Boolean, default: !0 }
  },
  setup(n, { expose: i }) {
    const e = Kt(), t = n, a = H(!1), _ = (g) => {
      a.value = g;
    }, f = H(-9999), o = (g) => {
      f.value = g;
    };
    lt(a, (g) => {
      g === !0 && setTimeout(() => {
        a.value = !1;
      }, er);
    });
    const u = () => {
      t.close();
    };
    return i({
      setVisible: _,
      setTopHeight: o
    }), (g, v) => (j(), nt(Ui, {
      name: "slide-fade",
      onAfterLeave: u
    }, {
      default: rt(() => [
        a.value ? (j(), B("div", {
          key: 0,
          class: W([D(e).bem("message-notice", "container")]),
          style: di({ top: f.value + "px" })
        }, [
          g.success ? (j(), nt(Xs, { key: 0 })) : (j(), nt(Ys, {
            key: 1,
            style: { color: "var(--vp-c-danger-2)" }
          })),
          L("span", tr, mt(g.content), 1)
        ], 6)) : V("", !0)
      ]),
      _: 1
    }));
  }
});
const ce = [], nr = {
  open: (n, i) => {
    const e = document.createElement("div"), t = Wi(ir, {
      content: n,
      success: i,
      close: () => {
        document.body.removeChild(e), ce.pop(), t.unmount();
      }
    }), a = t.mount(e);
    document.body.appendChild(e);
    const _ = ce.length, f = _ === 0 ? 10 : (_ + 1) * 10 + _ * 42;
    a.setTopHeight(f), a.setVisible(!0), ce.push(a);
  }
}, sr = /* @__PURE__ */ gt({
  __name: "index",
  props: {
    content: {}
  },
  setup(n) {
    const i = Kt(), e = n;
    return (t, a) => (j(), B("div", {
      class: W([D(i).bem("tooltip", "wrapper")])
    }, [
      L("div", {
        class: W([D(i).bem("tooltip", "content")])
      }, [
        he(t.$slots, "content", {}, () => [
          mi(mt(e.content), 1)
        ], !0)
      ], 2),
      he(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const ut = /* @__PURE__ */ Y(sr, [["__scopeId", "data-v-4306ac1f"]]), Gt = {
  openInStackblitz: "\u5728 Stackblitz \u4E2D\u6253\u5F00",
  openInCodeSandbox: "\u5728 Codesandbox \u4E2D\u6253\u5F00",
  openInGithub: "\u5728 GitHub \u4E2D\u6253\u5F00",
  openInGitlab: "\u5728 GitLub \u4E2D\u6253\u5F00",
  collapseCode: "\u6536\u8D77\u4EE3\u7801",
  expandCode: "\u5C55\u5F00\u4EE3\u7801",
  copyCode: "\u590D\u5236\u4EE3\u7801",
  copySuccess: "\u5DF2\u5C06\u4EE3\u7801\u590D\u5236\u81F3\u526A\u5207\u677F\uFF01",
  copyFail: "\u590D\u5236\u5931\u8D25\uFF01",
  openInPlayground: "\u5728 Playground \u4E2D\u6253\u5F00"
}, Di = {
  openInStackblitz: "Open In Stackblitz",
  openInCodeSandbox: "Open In Codesandbox",
  openInGithub: "Open in GitHub",
  openInGitlab: "Open in GitLab",
  collapseCode: "Collapse Code",
  expandCode: "Expand Code",
  copyCode: "Copy Code",
  copySuccess: "The code has been copied to the clipboard!",
  copyFail: "Failed to copy the code!",
  openInPlayground: "Open in Playground"
}, dt = H({
  "zh-CN": Gt,
  "en-US": Di
}), G = H(Gt), rr = (n) => {
  dt.value = {};
  for (const i in n)
    n[i] === "zh-CN" ? dt.value[i] = Gt : n[i] === "en-US" ? dt.value[i] = Di : dt.value[i] = n[i];
  typeof document < "u" && (G.value = dt.value[document.documentElement.getAttribute("lang") || "zh-CN"]);
};
let Bt;
function ar() {
  typeof MutationObserver < "u" && typeof document < "u" && (Bt = new MutationObserver((n) => {
    n.forEach((i) => {
      if (i.type === "attributes" && i.attributeName === "lang") {
        const e = document.documentElement.getAttribute("lang");
        e && (G.value = dt.value[e] || Gt);
      }
    });
  })), Bt.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["lang"]
  });
}
function or() {
  Bt && Bt.disconnect();
}
const _r = { style: { "flex-shrink": "0" } }, ur = ["innerHTML"], lr = ["onClick"], pr = ["onClick"], cr = { class: "language-html" }, hr = ["innerHTML"], Kr = /* @__PURE__ */ gt({
  __name: "index",
  props: {
    title: { default: "\u6807\u9898" },
    description: { default: "\u63CF\u8FF0\u5185\u5BB9" },
    reactComponent: {},
    vueCode: {},
    reactCode: {},
    htmlCode: {},
    order: { default: "vue,react,html" },
    visible: { type: Boolean, default: !0 },
    select: { default: I.VUE },
    github: { default: "" },
    gitlab: { default: "" },
    reactCreateElement: {},
    reactCreateRoot: {},
    stackblitz: {},
    codesandbox: {},
    codeplayer: {},
    scope: {},
    files: {},
    lightTheme: {},
    darkTheme: {},
    theme: {},
    locale: {},
    htmlWriteWay: { default: "write" },
    background: {},
    playgroundUrl: { default: "" }
  },
  emits: ["mount"],
  setup(n, { emit: i }) {
    const e = n, t = i;
    Fi(() => {
      t("mount"), a(), ar();
    }), $e(() => {
      or();
    });
    function a() {
      if (e.locale)
        try {
          rr(JSON.parse(decodeURIComponent(e.locale)));
        } catch (k) {
          console.error(k);
        }
    }
    const _ = it(() => JSON.parse(decodeURIComponent(e.stackblitz || "{}"))), f = it(() => JSON.parse(decodeURIComponent(e.codesandbox || "{}")));
    it(() => JSON.parse(decodeURIComponent(e.codeplayer || "{}")));
    const o = H(""), u = it(() => {
      var U;
      const M = JSON.parse(decodeURIComponent(e.files || "{}"))[h.value];
      return M && !M[o.value] && (o.value = ((U = Object.keys(M)) == null ? void 0 : U[0]) || ""), M;
    }), g = it(() => e.order.split(",").map((k) => k.trim())), v = je("coot-code-type", {}), b = je(
      "set-coot-code-type",
      (k) => {
      }
    ), h = H(I.VUE);
    function R(k) {
      h.value = k, typeof b == "function" && b(k);
    }
    const A = it(() => h.value === "react" ? "tsx" : h.value), S = Kt(), { isCodeFold: c, setCodeFold: r } = Zn(), { clickCopy: d } = Jn(), T = it(() => u.value && u.value[o.value] ? u.value[o.value].code : e[`${h.value}Code`]), x = H("");
    zi(async () => {
      await E(), l();
    });
    async function E() {
      var k;
      x.value = await Ki(T.value || "", {
        lang: ((k = u.value[o.value]) == null ? void 0 : k.filename.split(".").pop()) || A.value,
        themes: {
          dark: e.darkTheme || "github-dark",
          light: e.lightTheme || "github-light"
        }
      });
    }
    function l() {
      setTimeout(() => {
        K.value && !c.value && (K.value.style.height = ot.value.scrollHeight + "px");
      });
    }
    const m = it(() => [I.VUE, I.REACT, I.HTML].filter((k) => e[`${k}Code`]).sort((k, M) => g.value.indexOf(k) - g.value.indexOf(M)));
    lt(
      () => v == null ? void 0 : v.value,
      (k) => {
        k && e[`${k}Code`] && (h.value = k);
      },
      { immediate: !0 }
    );
    const p = () => {
      window.open(e.github, "_blank");
    }, O = () => {
      window.open(e.gitlab, "_blank");
    };
    lt(
      () => h.value,
      (k) => {
        !k || (k === "html" ? N() : k === "react" && F());
      },
      {
        immediate: !0
      }
    );
    const s = async () => {
      const k = await d(T.value || "");
      nr.open(
        k ? G.value.copySuccess : G.value.copyFail,
        k
      );
    }, y = () => {
      window.open(e.playgroundUrl, "_blank");
    }, w = H();
    let C;
    function N() {
      Xt(() => {
        if (!w.value || !e.htmlCode)
          return;
        const k = w.value.querySelector("iframe"), M = document.head.querySelectorAll("style"), U = document.head.querySelectorAll('link[as="style"]'), bt = document.head.querySelectorAll('link[as="font"]'), X = Array.from(M).map((J) => `<style replace="true">${J.innerText}</style>`).join(`
`), yt = Array.from(U).map((J) => J.outerHTML).join(`
`), pt = Array.from(bt).map((J) => J.outerHTML).join(`
`);
        let Q = k.contentDocument || k.contentWindow.document;
        typeof Q.write == "function" && e.htmlWriteWay === "write" ? (Q.open(), Q.write(
          ui({
            code: e.htmlCode || "",
            styles: X,
            links: yt + `
` + pt
          })
        ), Q.close()) : (k.srcdoc = ui({
          code: e.htmlCode || "",
          styles: X,
          links: yt + `
` + pt
        }), k.onload = () => {
          Q = k.contentDocument || k.contentWindow.document;
        });
        const Et = C = function() {
          requestAnimationFrame(() => {
            const J = Q.documentElement.offsetHeight + "px";
            k.style.height = J, w.value && (w.value.style.height = J), Q.documentElement && (Q.documentElement.className = document.documentElement.className), Et === C && C();
          });
        };
        C();
      });
    }
    const P = H();
    let $ = null;
    function F() {
      Xt(() => {
        e.reactComponent && h.value === "react" && e.reactCode && ($ || ($ = e.reactCreateRoot(P.value)), $.render(e.reactCreateElement(e.reactComponent, {}, null)));
      });
    }
    $e(() => {
      $ && ($.unmount(), $ = null);
    }), lt(
      () => [P.value, e.reactComponent],
      (k) => {
        P.value ? F() : $ && ($.unmount(), $ = null);
      },
      { immediate: !0, deep: !0 }
    ), lt(
      () => e.reactCode,
      (k, M) => {
        k && k !== M && $ && $.render(e.reactCreateElement(e.reactComponent, {}, null));
      },
      { immediate: !0, deep: !0 }
    ), lt(
      () => e.select,
      (k) => {
        k && e[`${k}Code`] && (h.value = k);
      },
      {
        immediate: !0
      }
    ), lt(
      () => m.value,
      () => {
        e[`${h.value}Code`] || (h.value = m.value[0]);
      },
      { immediate: !0, deep: !0 }
    );
    function st(k) {
      o.value = k, K.value && (K.value.style.height = "auto");
    }
    const K = H(), ot = H();
    return lt(
      () => c.value,
      (k) => {
        Xt(async () => {
          K.value && (k ? K.value.style.height = 0 : (await E(), l()));
        });
      }
    ), (k, M) => (j(), B("div", {
      class: W([D(S).e("container")])
    }, [
      L("section", {
        class: W([D(S).bem("preview"), "vp-raw"]),
        style: di({ background: e.background })
      }, [
        h.value === "vue" ? he(k.$slots, "vue", { key: 0 }) : h.value === "html" ? (j(), B("div", {
          key: 1,
          ref_key: "htmlContainerRef",
          ref: w
        }, M[3] || (M[3] = [
          L("iframe", { style: { width: "100%", height: "auto", border: "none" } }, null, -1)
        ]), 512)) : h.value === "react" ? (j(), B("div", {
          key: 2,
          ref_key: "reactContainerRef",
          ref: P
        }, null, 512)) : V("", !0)
      ], 6),
      L("section", {
        class: W([D(S).bem("description")])
      }, [
        k.title ? (j(), B("div", {
          key: 0,
          class: W([D(S).bem("description", "title")])
        }, [
          L("div", _r, mt(k.title), 1)
        ], 2)) : V("", !0),
        k.description ? (j(), B("div", {
          key: 1,
          class: W([D(S).bem("description", "content")]),
          innerHTML: k.description
        }, null, 10, ur)) : V("", !0),
        e.description || !e.title && !e.description ? (j(), B("div", {
          key: 2,
          class: W([D(S).bem("description", "split-line")])
        }, null, 2)) : V("", !0),
        m.value.length > 1 && k.visible ? (j(), B("div", {
          key: 3,
          class: W([D(S).bem("lang-tabs")])
        }, [
          (j(!0), B(De, null, Ie(m.value, (U) => (j(), B("div", {
            key: U,
            class: W([D(S).bem("tab"), h.value === U && D(S).bem("active-tab")]),
            onClick: (bt) => R == null ? void 0 : R(U)
          }, mt(U), 11, lr))), 128))
        ], 2)) : V("", !0),
        L("div", {
          class: W([D(S).bem("description", "handle-btn")])
        }, [
          _.value.show ? (j(), nt(ut, {
            key: 0,
            content: D(G).openInStackblitz
          }, {
            default: rt(() => [
              et(Ps, {
                code: T.value,
                type: h.value,
                scope: k.scope || "",
                templates: _.value.templates || []
              }, null, 8, ["code", "type", "scope", "templates"])
            ]),
            _: 1
          }, 8, ["content"])) : V("", !0),
          f.value.show ? (j(), nt(ut, {
            key: 1,
            content: D(G).openInCodeSandbox
          }, {
            default: rt(() => [
              et(_s, {
                code: T.value,
                type: h.value,
                scope: k.scope || "",
                templates: f.value.templates || []
              }, null, 8, ["code", "type", "scope", "templates"])
            ]),
            _: 1
          }, 8, ["content"])) : V("", !0),
          k.github ? (j(), nt(ut, {
            key: 2,
            content: D(G).openInGithub
          }, {
            default: rt(() => [
              et(Ws, { onClick: p })
            ]),
            _: 1
          }, 8, ["content"])) : V("", !0),
          k.gitlab ? (j(), nt(ut, {
            key: 3,
            content: D(G).openInGitlab
          }, {
            default: rt(() => [
              et(qs, { onClick: O })
            ]),
            _: 1
          }, 8, ["content"])) : V("", !0),
          D(c) ? (j(), nt(ut, {
            key: 5,
            content: D(G).expandCode
          }, {
            default: rt(() => [
              et(Hi, {
                onClick: M[1] || (M[1] = (U) => D(r)(!1))
              })
            ]),
            _: 1
          }, 8, ["content"])) : (j(), nt(ut, {
            key: 4,
            content: D(G).collapseCode
          }, {
            default: rt(() => [
              et(Zi, {
                onClick: M[0] || (M[0] = (U) => D(r)(!0))
              })
            ]),
            _: 1
          }, 8, ["content"])),
          et(ut, {
            content: D(G).copyCode
          }, {
            default: rt(() => [
              et(on, { onClick: s })
            ]),
            _: 1
          }, 8, ["content"]),
          k.playgroundUrl ? (j(), nt(ut, {
            key: 6,
            content: D(G).openInPlayground
          }, {
            default: rt(() => [
              et(nn, { onClick: y })
            ]),
            _: 1
          }, 8, ["content"])) : V("", !0)
        ], 2)
      ], 2),
      L("section", {
        class: W([D(S).bem("source")]),
        ref_key: "sourceRef",
        ref: K
      }, [
        L("div", {
          ref_key: "sourceContentRef",
          ref: ot
        }, [
          Object.keys(u.value).length ? (j(), B("div", {
            key: 0,
            class: W([D(S).bem("file-tabs")])
          }, [
            (j(!0), B(De, null, Ie(Object.keys(u.value), (U) => (j(), B("div", {
              key: U,
              class: W([
                D(S).bem("tab"),
                o.value === U && D(S).bem("active-tab")
              ]),
              onClick: (bt) => st(U)
            }, mt(U), 11, pr))), 128))
          ], 2)) : V("", !0),
          L("pre", cr, [
            L("div", { innerHTML: x.value }, null, 8, hr)
          ])
        ], 512)
      ], 2),
      D(c) ? V("", !0) : (j(), B("div", {
        key: 0,
        class: W(D(S).bem("fold")),
        onClick: M[2] || (M[2] = (U) => D(r)(!0))
      }, [
        et(pn),
        mi(mt(D(G).collapseCode), 1)
      ], 2))
    ], 2));
  }
});
const fr = /* @__PURE__ */ gt({
  __name: "placeholder",
  setup(n) {
    const i = Kt("placeholder");
    return (e, t) => (j(), B("div", {
      class: W([D(i).e("container")])
    }, t[0] || (t[0] = [
      L("div", { class: "loader" }, null, -1),
      L("div", { class: "loading-text" }, "loading", -1)
    ]), 2));
  }
});
const qr = /* @__PURE__ */ Y(fr, [["__scopeId", "data-v-aa366e4c"]]), hi = [
  /<demo(\s|\n)((.|\n)*)><\/demo>/,
  /<demo(\s|\n)((.|\n)*)\/>/
], dr = /<\s*script[^>]*\blang=['"]ts['"][^>]*/, mr = /<\s*script[^>]*\bsetup\b[^>]*/, gr = /<\s*script\s+(setup|lang='ts'|lang="ts")?\s*(setup|lang='ts'|lang="ts")?\s*>/, Z = (n, i, e, t) => {
  const a = n.sfcBlocks.scripts, _ = a.findIndex((u) => !!(mr.test(u.tagOpen) || dr.test(u.tagOpen))), f = e || "";
  let o = "";
  if (t === "dynamicImport" ? o = e ? `
      const ${f} = shallowRef();
      onMounted(async () => {
        ${f}.value = (await import('${i}')).default;
      });
      `.trim() : `
      onMounted(async () => {
        await import('${i}');
      });
      `.trim() : t === "inject" ? o = `
      ${e}
    `.trim() : o = e ? `import ${f} from '${i}'` : `import '${i}'`, _ === -1) {
    const u = {
      type: "script",
      tagClose: "<\/script>",
      tagOpen: "<script setup lang='ts'>",
      content: `<script setup lang='ts'>
        ${o}
        <\/script>`,
      contentStripped: o
    };
    a.push(u);
  } else {
    const u = a[0];
    if (u.content.includes(i) && (!e || u.content.includes(f)))
      a[0].content = u.content;
    else {
      const g = `<script lang="ts" setup>
`;
      a[0].content = a[0].content.replace(
        gr,
        g
      ), a[0].content = a[0].content.replace(
        g,
        `<script setup>

      ${o}
`
      );
    }
  }
}, vr = (n) => {
  let i = !0;
  const e = [];
  for (; i; ) {
    const t = n.lastIndexOf("/");
    if (t === -1)
      i = !1;
    else {
      const a = n.substring(t + 1);
      e.unshift(a), n = n.substring(0, t);
    }
  }
  return "Temp" + btoa(
    encodeURIComponent(
      e.join("-").split(".").slice(0, -1).join(".")
    )
  ).replace(/=/g, "Equal");
}, br = /title="(.*?)"/, yr = /vue="(.*?)"/, wr = /html="(.*?)"/, xr = /react="(.*?)"/, Er = /description="(.*?)"/, Or = /order="(.*?)"/, Tr = /select="(.*?)"/, kr = /github="(.*?)"/, Rr = /gitlab="(.*?)"/, Sr = /stackblitz="(.*?)"/, Cr = /codesandbox="(.*?)"/, Ar = /codeplayer="(.*?)"/, Nr = /scope="(.*?)"/, Lr = /vueFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/, $r = /reactFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/, jr = /htmlFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/, Dr = /ssg="(.*?)"/, Ir = /htmlWriteWay="(.*?)"/, Pr = /background="(.*?)"/, Br = /playgroundUrl="(.*?)"/, fi = (n, i, e, t) => {
  var ke, Re, Se, Ce, Ae, Ne;
  const {
    demoDir: a,
    tab: _ = {},
    stackblitz: f = { show: !1 },
    codesandbox: o = { show: !1 },
    codeplayer: u = { show: !1 }
  } = t || {};
  let {
    order: g = "vue,react,html",
    visible: v = !0,
    select: b = (_.order || "vue,react,html").split(",")[0] || "vue"
  } = _;
  const h = {
    vue: "",
    title: "",
    description: "",
    html: "",
    react: ""
  }, R = i.content.match(br), A = i.content.match(yr), S = i.content.match(wr), c = i.content.match(xr), r = i.content.match(Er), d = i.content.match(Or), T = i.content.match(Tr), x = i.content.match(kr), E = i.content.match(Rr), l = i.content.match(Sr), m = i.content.match(Cr), p = i.content.match(Ar), O = ((ke = i.content.match(Nr)) == null ? void 0 : ke[1]) || "", s = i.content.match(Lr), y = i.content.match($r), w = i.content.match(jr), C = !!((Re = i.content.match(Dr)) != null && Re[1]), N = ((Se = i.content.match(Ir)) == null ? void 0 : Se[1]) || "write", P = (Ce = i.content.match(Pr)) == null ? void 0 : Ce[1], $ = (Ae = e.realPath) != null ? Ae : e.path, F = a || q.dirname($), st = (Ne = i.content.match(Br)) == null ? void 0 : Ne[1];
  d != null && d[1] && (g = d[1]), T != null && T[1] && (b = T[1]);
  let K = "", ot = "";
  x != null && x[1] && (K = x[1]), E != null && E[1] && (ot = E[1]), l != null && l[1] && (f.show = l[1] === "true"), m != null && m[1] && (o.show = m[1] === "true"), p != null && p[1] && (u.show = p[1] === "true"), A != null && A[1] && (h.vue = q.join(F, A[1]).replace(/\\/g, "/")), S != null && S[1] && (h.html = q.join(F, S[1]).replace(/\\/g, "/")), c != null && c[1] && (h.react = q.join(F, c[1]).replace(/\\/g, "/")), h.title = R ? R[1] : "", h.description = r ? r[1] : "";
  const k = h.vue ? q.resolve(
    a || q.dirname($),
    (A == null ? void 0 : A[1]) || "."
  ).replace(/\\/g, "/") : "", M = h.html ? q.resolve(
    a || q.dirname($),
    (S == null ? void 0 : S[1]) || "."
  ).replace(/\\/g, "/") : "", U = h.react ? q.resolve(
    a || q.dirname($),
    (c == null ? void 0 : c[1]) || "."
  ).replace(/\\/g, "/") : "", bt = q.resolve(
    F,
    h.vue || h.react || h.html || "."
  ).replace(/\\/g, "/"), X = vr(bt), yt = `react${X}`;
  Z(
    e,
    "vitepress-demo-plugin",
    "{ VitepressDemoBox, VitepressDemoPlaceholder }"
  ), Z(e, "vitepress-demo-plugin/dist/style.css"), Z(e, "vue", "{ ref, shallowRef, onMounted }"), h.vue && Z(
    e,
    k,
    X,
    C ? void 0 : "dynamicImport"
  ), h.react && (Z(
    e,
    "react",
    "{ createElement as reactCreateElement }"
  ), Z(
    e,
    "react-dom/client",
    "{ createRoot as reactCreateRoot }"
  ), Z(
    e,
    U,
    yt,
    "dynamicImport"
  ));
  const pt = "__placeholder_visible_key__";
  Z(
    e,
    pt,
    `const ${pt} = ref(true);`,
    "inject"
  );
  const Q = h.html ? `TempCodeHtml${X}` : "''", Et = h.react ? `TempCodeReact${X}` : "''", J = h.vue ? `TempCodeVue${X}` : "''";
  h.html && Z(
    e,
    `${M}?raw`,
    Q
  ), h.react && Z(
    e,
    `${U}?raw`,
    Et
  ), h.vue && Z(
    e,
    `${k}?raw`,
    J
  );
  const _t = {
    vue: {},
    react: {},
    html: {}
  };
  function Ht(z) {
    return z.replace(/'/g, '"').replace(/\\n/g, "").trim().replace(/^"/, "").replace(/"$/, "").replace(/,(\s|\n)*\}$/, "}").replace(/,(\s|\n)*\]$/, "]");
  }
  const Oe = {
    vue: Ht((s == null ? void 0 : s[1]) || ""),
    react: Ht((y == null ? void 0 : y[1]) || ""),
    html: Ht((w == null ? void 0 : w[1]) || "")
  };
  for (const z in Oe) {
    let Ot = Oe[z];
    if (Ot)
      try {
        const ht = JSON.parse(Ot);
        if (Array.isArray(ht))
          ht.forEach((tt) => {
            const Tt = q.basename(tt);
            _t[z][Tt] = {
              filename: tt,
              code: ""
            };
          });
        else if (typeof ht == "object")
          for (const tt in ht)
            _t[z][tt] = {
              filename: ht[tt],
              code: ""
            };
        for (const tt in _t[z]) {
          const Tt = _t[z][tt].filename;
          if (Tt) {
            const Le = q.resolve(a || q.dirname($), Tt || ".").replace(/\\/g, "/");
            if (kt.existsSync(Le)) {
              const Bi = kt.readFileSync(Le, "utf-8");
              _t[z][tt].code = Bi;
            } else
              delete _t[z][tt];
          } else
            delete _t[z][tt];
        }
      } catch {
      }
  }
  let Te = "";
  (t == null ? void 0 : t.locale) && typeof t.locale == "object" && (Te = encodeURIComponent(JSON.stringify(t.locale)));
  const Ii = (z) => btoa(unescape(encodeURIComponent(z))), Pi = (() => {
    if (!st || !k || !kt.existsSync(k))
      return "";
    try {
      const z = kt.readFileSync(k, "utf-8"), Ot = Ii(JSON.stringify({ "App.vue": z }));
      return `${st}/#${Ot}`;
    } catch {
      return "";
    }
  })();
  return `
  ${C ? "" : `<vitepress-demo-placeholder v-show="${pt}" />`}
  ${C ? "" : "<ClientOnly>"}
    <vitepress-demo-box 
      title="${h.title}"
      description="${h.description}"
      locale="${Te}"
      select="${b}"
      order="${g}"
      github="${K}"
      gitlab="${ot}"
      theme="${(t == null ? void 0 : t.theme) || ""}"
      lightTheme="${(t == null ? void 0 : t.lightTheme) || ""}"
      darkTheme="${(t == null ? void 0 : t.darkTheme) || ""}"
      stackblitz="${encodeURIComponent(JSON.stringify(f))}"
      codesandbox="${encodeURIComponent(JSON.stringify(o))}"
      codeplayer="${encodeURIComponent(JSON.stringify(u))}"
      files="${encodeURIComponent(JSON.stringify(_t))}"
      scope="${O || ""}"
      htmlWriteWay="${N}"
      background="${P}"
      :visible="!!${v}"
      playgroundUrl = "${Pi}"
      @mount="() => { ${pt} = false; }"
      ${h.html ? `
            :htmlCode="${Q}"
            ` : ""}
      ${h.vue ? `
            :vueCode="${J}"
            ` : ""}
      ${h.react ? `
            :reactCode="${Et}"
            :reactComponent="${yt}"
            :reactCreateRoot="reactCreateRoot"
            :reactCreateElement="reactCreateElement"
            ` : ""}
      >
      ${h.vue ? `
            <template v-if="${X}" #vue>
              <${X}></${X}>
            </template>
            ` : ""}
    </vitepress-demo-box>
  ${C ? "" : "</ClientOnly>"}`.trim();
}, Vr = (n, i) => {
  const e = n.renderer.rules.html_inline, t = n.renderer.rules.html_block;
  n.renderer.rules.html_inline = (a, _, f, o, u) => {
    const g = a[_];
    return g.content = g.content.replace(/<!--[\s\S]*?-->/g, ""), hi.some((v) => v.test(g.content)) ? fi(n, g, o, i) : e(a, _, f, o, u);
  }, n.renderer.rules.html_block = (a, _, f, o, u) => {
    const g = a[_];
    return g.content = g.content.replace(/<!--[\s\S]*?-->/g, ""), hi.some((v) => v.test(g.content)) ? fi(n, g, o, i) : t(a, _, f, o, u);
  };
};
export {
  Kr as VitepressDemoBox,
  qr as VitepressDemoPlaceholder,
  Vr as vitepressDemoPlugin
};
