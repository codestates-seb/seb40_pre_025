var L = Object.defineProperty;
var k = (d, e, t) => e in d ? L(d, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[e] = t;
var p = (d, e, t) => (k(d, typeof e != "symbol" ? e + "" : e, t), t);
import { Decoration as w, DecorationSet as P } from "prosemirror-view";
import { PluginKey as N, Plugin as C } from "prosemirror-state";
function R(d, e) {
  const t = [];
  return e.includes("doc") && t.push({ node: d, pos: -1 }), d.descendants((s, c) => {
    if (s.isBlock && e.indexOf(s.type.name) > -1)
      return t.push({
        node: s,
        pos: c
      }), !1;
  }), t;
}
function D(d, e, t, s, c) {
  if (!d || !d.nodeSize || !(t != null && t.length) || !s)
    return [];
  const f = R(d, t);
  let l = [];
  return f.forEach((a) => {
    if (c != null && c.preRenderer) {
      const h = c.preRenderer(a.node, a.pos);
      if (h) {
        l = [...l, ...h];
        return;
      }
    }
    const n = s(a.node);
    if (n && !e.getLanguage(n))
      return;
    const r = n ? e.highlight(a.node.textContent, { language: n }) : e.highlightAuto(a.node.textContent);
    !n && r.language && (c == null ? void 0 : c.autohighlightCallback) && c.autohighlightCallback(a.node, a.pos, r.language);
    const o = r._emitter, u = new S(o, a.pos, o.options.classPrefix).value(), g = [];
    u.forEach((h) => {
      if (!h.scope)
        return;
      const x = w.inline(h.from, h.to, {
        class: h.classes
      });
      g.push(x);
    }), c != null && c.postRenderer && c.postRenderer(a.node, a.pos, g), l = [...l, ...g];
  }), l;
}
class S {
  constructor(e, t, s) {
    p(this, "buffer");
    p(this, "nodeQueue");
    p(this, "classPrefix");
    p(this, "currentPosition");
    this.buffer = [], this.nodeQueue = [], this.classPrefix = s, this.currentPosition = t + 1, e.walk(this);
  }
  get currentNode() {
    return this.nodeQueue.length ? this.nodeQueue.slice(-1) : null;
  }
  addText(e) {
    !this.currentNode || (this.currentPosition += e.length);
  }
  openNode(e) {
    let t = e.scope || "";
    e.sublanguage ? t = `language-${t}` : t = this.expandScopeName(t);
    const s = this.newNode();
    s.scope = e.scope, s.classes = t, s.from = this.currentPosition, this.nodeQueue.push(s);
  }
  closeNode(e) {
    const t = this.nodeQueue.pop();
    if (!t)
      throw "Cannot close node!";
    if (t.to = this.currentPosition, e.scope !== t.scope)
      throw "Mismatch!";
    this.buffer.push(t);
  }
  value() {
    return this.buffer;
  }
  newNode() {
    return {
      from: 0,
      to: 0,
      scope: void 0,
      classes: ""
    };
  }
  expandScopeName(e) {
    if (e.includes(".")) {
      const t = e.split("."), s = t.shift() || "";
      return [
        `${this.classPrefix}${s}`,
        ...t.map((c, f) => `${c}${"_".repeat(f + 1)}`)
      ].join(" ");
    }
    return `${this.classPrefix}${e}`;
  }
}
class m {
  constructor(e) {
    p(this, "cache");
    this.cache = { ...e };
  }
  get(e) {
    return this.cache[e] || null;
  }
  set(e, t, s) {
    e < 0 || (this.cache[e] = { node: t, decorations: s });
  }
  replace(e, t, s, c) {
    this.remove(e), this.set(t, s, c);
  }
  remove(e) {
    delete this.cache[e];
  }
  invalidate(e) {
    const t = new m(this.cache), s = e.mapping;
    return Object.keys(this.cache).forEach((c) => {
      const f = +c;
      if (f < 0)
        return;
      const l = s.mapResult(f), a = e.doc.nodeAt(l.pos), { node: n, decorations: r } = this.get(f);
      if (l.deleted || !(a != null && a.eq(n)))
        t.remove(f);
      else if (f !== l.pos) {
        const o = r.map((i) => i.map(s, 0, 0)).filter((i) => i !== null);
        t.replace(f, l.pos, a, o);
      }
    }), t;
  }
}
function H(d, e = ["code_block"], t, s) {
  const c = t || function(n) {
    const r = n.attrs.detectedHighlightLanguage, o = n.attrs.params;
    return r || (o == null ? void 0 : o.split(" ")[0]) || "";
  }, f = s || function(n, r, o, i) {
    const u = r.attrs || {};
    return u.detectedHighlightLanguage = i, n.setNodeMarkup(o, void 0, u);
  }, l = (n, r) => {
    const o = [];
    return { content: D(n, d, e, c, {
      preRenderer: (u, g) => {
        var h;
        return (h = r.get(g)) == null ? void 0 : h.decorations;
      },
      postRenderer: (u, g, h) => {
        r.set(g, u, h);
      },
      autohighlightCallback: (u, g, h) => {
        o.push({
          node: u,
          pos: g,
          language: h
        });
      }
    }), autodetectedLanguages: o };
  }, a = new N();
  return new C({
    key: a,
    state: {
      init(n, r) {
        const o = new m({}), i = l(r.doc, o);
        return {
          cache: o,
          decorations: P.create(r.doc, i.content),
          autodetectedLanguages: i.autodetectedLanguages
        };
      },
      apply(n, r) {
        const o = r.cache.invalidate(n);
        if (!n.docChanged)
          return {
            cache: o,
            decorations: r.decorations.map(n.mapping, n.doc),
            autodetectedLanguages: []
          };
        const i = l(n.doc, o);
        return {
          cache: o,
          decorations: P.create(n.doc, i.content),
          autodetectedLanguages: i.autodetectedLanguages
        };
      }
    },
    props: {
      decorations(n) {
        var r;
        return (r = this.getState(n)) == null ? void 0 : r.decorations;
      }
    },
    view(n) {
      const r = (o) => {
        const i = a.getState(o.state);
        if (!i || !i.autodetectedLanguages.length)
          return;
        let u = o.state.tr;
        i.autodetectedLanguages.forEach((g) => {
          g.language && (u = f(u, g.node, g.pos, g.language) || u);
        }), u = u.setMeta("addToHistory", !1), o.dispatch(u);
      };
      return r(n), {
        update: r
      };
    }
  });
}
export {
  m as DecorationCache,
  D as getHighlightDecorations,
  H as highlightPlugin
};
