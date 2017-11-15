/*!
 * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
var bootstrap = function(t, e) { "use strict";

    function n(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }

    function i(t) { return t && "[object Function]" === {}.toString.call(t) }

    function r(t, e) { if (1 !== t.nodeType) return []; var n = window.getComputedStyle(t, null); return e ? n[e] : n }

    function o(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

    function s(t) { if (!t || -1 !== ["HTML", "BODY", "#document"].indexOf(t.nodeName)) return window.document.body; var e = r(t),
            n = e.overflow,
            i = e.overflowX; return /(auto|scroll)/.test(n + e.overflowY + i) ? t : s(o(t)) }

    function a(t) { var e = t && t.offsetParent,
            n = e && e.nodeName; return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === r(e, "position") ? a(e) : e : window.document.documentElement }

    function l(t) { var e = t.nodeName; return "BODY" !== e && ("HTML" === e || a(t.firstElementChild) === t) }

    function c(t) { return null !== t.parentNode ? c(t.parentNode) : t }

    function f(t, e) { if (!(t && t.nodeType && e && e.nodeType)) return window.document.documentElement; var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0); var s = o.commonAncestorContainer; if (t !== s && e !== s || i.contains(r)) return l(s) ? s : a(s); var h = c(t); return h.host ? f(h.host, e) : f(t, c(e).host) }

    function h(t) { var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName; if ("BODY" === n || "HTML" === n) { var i = window.document.documentElement; return (window.document.scrollingElement || i)[e] } return t[e] }

    function u(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = h(e, "top"),
            r = h(e, "left"),
            o = n ? -1 : 1; return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t }

    function d(t, e) { var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom"; return +t["border" + n + "Width"].split("px")[0] + +t["border" + i + "Width"].split("px")[0] }

    function p(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], lt() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0) }

    function g() { var t = window.document.body,
            e = window.document.documentElement,
            n = lt() && window.getComputedStyle(e); return { height: p("Height", t, e, n), width: p("Width", t, e, n) } }

    function m(t) { return ut({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function _(t) { var e = {}; if (lt()) try { e = t.getBoundingClientRect(); var n = h(t, "top"),
                i = h(t, "left");
            e.top += n, e.left += i, e.bottom += n, e.right += i } catch (t) {} else e = t.getBoundingClientRect(); var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
            s = "HTML" === t.nodeName ? g() : {},
            a = s.width || t.clientWidth || o.right - o.left,
            l = s.height || t.clientHeight || o.bottom - o.top,
            c = t.offsetWidth - a,
            f = t.offsetHeight - l; if (c || f) { var u = r(t);
            c -= d(u, "x"), f -= d(u, "y"), o.width -= c, o.height -= f } return m(o) }

    function v(t, e) { var n = lt(),
            i = "HTML" === e.nodeName,
            o = _(t),
            a = _(e),
            l = s(t),
            c = r(e),
            f = +c.borderTopWidth.split("px")[0],
            h = +c.borderLeftWidth.split("px")[0],
            d = m({ top: o.top - a.top - f, left: o.left - a.left - h, width: o.width, height: o.height }); if (d.marginTop = 0, d.marginLeft = 0, !n && i) { var p = +c.marginTop.split("px")[0],
                g = +c.marginLeft.split("px")[0];
            d.top -= f - p, d.bottom -= f - p, d.left -= h - g, d.right -= h - g, d.marginTop = p, d.marginLeft = g } return (n ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (d = u(d, e)), d }

    function E(t) { var e = window.document.documentElement,
            n = v(t, e),
            i = Math.max(e.clientWidth, window.innerWidth || 0),
            r = Math.max(e.clientHeight, window.innerHeight || 0),
            o = h(e),
            s = h(e, "left"); return m({ top: o - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r }) }

    function T(t) { var e = t.nodeName; return "BODY" !== e && "HTML" !== e && ("fixed" === r(t, "position") || T(o(t))) }

    function b(t, e, n, i) { var r = { top: 0, left: 0 },
            a = f(t, e); if ("viewport" === i) r = E(a);
        else { var l = void 0; "scrollParent" === i ? "BODY" === (l = s(o(t))).nodeName && (l = window.document.documentElement) : l = "window" === i ? window.document.documentElement : i; var c = v(l, a); if ("HTML" !== l.nodeName || T(a)) r = c;
            else { var h = g(),
                    u = h.height,
                    d = h.width;
                r.top += c.top - c.marginTop, r.bottom = u + c.top, r.left += c.left - c.marginLeft, r.right = d + c.left } } return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r }

    function C(t) { return t.width * t.height }

    function A(t, e, n, i, r) { var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === t.indexOf("auto")) return t; var s = b(n, i, o, r),
            a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
            l = Object.keys(a).map(function(t) { return ut({ key: t }, a[t], { area: C(a[t]) }) }).sort(function(t, e) { return e.area - t.area }),
            c = l.filter(function(t) { var e = t.width,
                    i = t.height; return e >= n.clientWidth && i >= n.clientHeight }),
            f = c.length > 0 ? c[0].key : l[0].key,
            h = t.split("-")[1]; return f + (h ? "-" + h : "") }

    function I(t, e, n) { return v(n, f(e, n)) }

    function O(t) { var e = window.getComputedStyle(t),
            n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            i = parseFloat(e.marginLeft) + parseFloat(e.marginRight); return { width: t.offsetWidth + i, height: t.offsetHeight + n } }

    function y(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }

    function D(t, e, n) { n = n.split("-")[0]; var i = O(t),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height"; return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[y(a)], r }

    function S(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

    function w(t, e, n) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === n }); var i = S(t, function(t) { return t[e] === n }); return t.indexOf(i) }

    function N(t, e, n) { return (void 0 === n ? t : t.slice(0, w(t, "name", n))).forEach(function(t) { t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var n = t.function || t.fn;
            t.enabled && i(n) && (e.offsets.popper = m(e.offsets.popper), e.offsets.reference = m(e.offsets.reference), e = n(e, t)) }), e }

    function L() { if (!this.state.isDestroyed) { var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            t.offsets.reference = I(this.state, this.popper, this.reference), t.placement = A(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = D(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = N(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)) } }

    function P(t, e) { return t.some(function(t) { var n = t.name; return t.enabled && n === e }) }

    function R(t) { for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) { var r = e[i],
                o = r ? "" + r + n : t; if ("undefined" != typeof window.document.body.style[o]) return o } return null }

    function H() { return this.state.isDestroyed = !0, P(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[R("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

    function k(t, e, n, i) { var r = "BODY" === t.nodeName,
            o = r ? window : t;
        o.addEventListener(e, n, { passive: !0 }), r || k(s(o.parentNode), e, n, i), i.push(o) }

    function W(t, e, n, i) { n.updateBound = i, window.addEventListener("resize", n.updateBound, { passive: !0 }); var r = s(t); return k(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n }

    function x() { this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function M(t, e) { return window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e }

    function U() { this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state)) }

    function V(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

    function F(t, e) { Object.keys(e).forEach(function(n) { var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && V(e[n]) && (i = "px"), t.style[n] = e[n] + i }) }

    function j(t, e) { Object.keys(e).forEach(function(n) {!1 !== e[n] ? t.setAttribute(n, e[n]) : t.removeAttribute(n) }) }

    function B(t, e, n) { var i = S(t, function(t) { return t.name === e }),
            r = !!i && t.some(function(t) { return t.name === n && t.enabled && t.order < i.order }); if (!r) { var o = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!") } return r }

    function G(t) { return "end" === t ? "start" : "start" === t ? "end" : t }

    function K(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = pt.indexOf(t),
            i = pt.slice(n + 1).concat(pt.slice(0, n)); return e ? i.reverse() : i }

    function Q(t, e, n, i) { var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +r[1],
            s = r[2]; if (!o) return t; if (0 === s.indexOf("%")) { var a = void 0; switch (s) {
                case "%p":
                    a = n; break;
                case "%":
                case "%r":
                default:
                    a = i } return m(a)[e] / 100 * o } if ("vh" === s || "vw" === s) { return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o } return o }

    function Y(t, e, n, i) { var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
            a = s.indexOf(S(s, function(t) { return -1 !== t.search(/,|\s/) }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s]; return (c = c.map(function(t, i) { var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1; return t.reduce(function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e) }, []).map(function(t) { return Q(t, r, e, n) }) })).forEach(function(t, e) { t.forEach(function(n, i) { V(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1)) }) }), r }
    e = e && e.hasOwnProperty("default") ? e.default : e; for (var X = function() {
            function t(t) { return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase() }

            function n() { return { bindType: o.end, delegateType: o.end, handle: function(t) { if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } } }

            function i() { if (window.QUnit) return !1; var t = document.createElement("bootstrap"); for (var e in s)
                    if ("undefined" != typeof t.style[e]) return { end: s[e] };
                return !1 }

            function r(t) { var n = this,
                    i = !1; return e(this).one(a.TRANSITION_END, function() { i = !0 }), setTimeout(function() { i || a.triggerTransitionEnd(n) }, t), this } var o = !1,
                s = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
                a = { TRANSITION_END: "bsTransitionEnd", getUID: function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t }, getSelectorFromElement: function(t) { var n = t.getAttribute("data-target");
                        n && "#" !== n || (n = t.getAttribute("href") || ""); try { return e(document).find(n).length > 0 ? n : null } catch (t) { return null } }, reflow: function(t) { return t.offsetHeight }, triggerTransitionEnd: function(t) { e(t).trigger(o.end) }, supportsTransitionEnd: function() { return Boolean(o) }, isElement: function(t) { return (t[0] || t).nodeType }, typeCheckConfig: function(e, n, i) { for (var r in i)
                            if (Object.prototype.hasOwnProperty.call(i, r)) { var o = i[r],
                                    s = n[r],
                                    l = s && a.isElement(s) ? "element" : t(s); if (!new RegExp(o).test(l)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + o + '".') } } }; return o = i(), e.fn.emulateTransitionEnd = r, a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()), a }(), q = function(t, e, i) { return e && n(t.prototype, e), i && n(t, i), t }, z = function(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }, Z = function() { var t = "alert",
                n = e.fn[t],
                i = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
                r = { ALERT: "alert", FADE: "fade", SHOW: "show" },
                o = function() {
                    function t(t) { this._element = t } var n = t.prototype; return n.close = function(t) { t = t || this._element; var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, n.dispose = function() { e.removeData(this._element, "bs.alert"), this._element = null }, n._getRootElement = function(t) { var n = X.getSelectorFromElement(t),
                            i = !1; return n && (i = e(n)[0]), i || (i = e(t).closest("." + r.ALERT)[0]), i }, n._triggerCloseEvent = function(t) { var n = e.Event(i.CLOSE); return e(t).trigger(n), n }, n._removeElement = function(t) { var n = this;
                        e(t).removeClass(r.SHOW), X.supportsTransitionEnd() && e(t).hasClass(r.FADE) ? e(t).one(X.TRANSITION_END, function(e) { return n._destroyElement(t, e) }).emulateTransitionEnd(150) : this._destroyElement(t) }, n._destroyElement = function(t) { e(t).detach().trigger(i.CLOSED).remove() }, t._jQueryInterface = function(n) { return this.each(function() { var i = e(this),
                                r = i.data("bs.alert");
                            r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this) }) }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, q(t, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }]), t }(); return e(document).on(i.CLICK_DATA_API, { DISMISS: '[data-dismiss="alert"]' }.DISMISS, o._handleDismiss(new o)), e.fn[t] = o._jQueryInterface, e.fn[t].Constructor = o, e.fn[t].noConflict = function() { return e.fn[t] = n, o._jQueryInterface }, o }(), J = function() { var t = "button",
                n = e.fn[t],
                i = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
                r = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
                o = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
                s = function() {
                    function t(t) { this._element = t } var n = t.prototype; return n.toggle = function() { var t = !0,
                            n = !0,
                            o = e(this._element).closest(r.DATA_TOGGLE)[0]; if (o) { var s = e(this._element).find(r.INPUT)[0]; if (s) { if ("radio" === s.type)
                                    if (s.checked && e(this._element).hasClass(i.ACTIVE)) t = !1;
                                    else { var a = e(o).find(r.ACTIVE)[0];
                                        a && e(a).removeClass(i.ACTIVE) }
                                if (t) { if (s.hasAttribute("disabled") || o.hasAttribute("disabled") || s.classList.contains("disabled") || o.classList.contains("disabled")) return;
                                    s.checked = !e(this._element).hasClass(i.ACTIVE), e(s).trigger("change") }
                                s.focus(), n = !1 } }
                        n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i.ACTIVE)), t && e(this._element).toggleClass(i.ACTIVE) }, n.dispose = function() { e.removeData(this._element, "bs.button"), this._element = null }, t._jQueryInterface = function(n) { return this.each(function() { var i = e(this).data("bs.button");
                            i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]() }) }, q(t, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }]), t }(); return e(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE_CARROT, function(t) { t.preventDefault(); var n = t.target;
                e(n).hasClass(i.BUTTON) || (n = e(n).closest(r.BUTTON)), s._jQueryInterface.call(e(n), "toggle") }).on(o.FOCUS_BLUR_DATA_API, r.DATA_TOGGLE_CARROT, function(t) { var n = e(t.target).closest(r.BUTTON)[0];
                e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type)) }), e.fn[t] = s._jQueryInterface, e.fn[t].Constructor = s, e.fn[t].noConflict = function() { return e.fn[t] = n, s._jQueryInterface }, s }(), $ = function() { var t = "carousel",
                n = "bs.carousel",
                i = "." + n,
                r = e.fn[t],
                o = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
                s = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
                a = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
                l = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api" },
                c = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item" },
                f = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
                h = function() {
                    function r(t, n) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(f.INDICATORS)[0], this._addEventListeners() } var h = r.prototype; return h.next = function() { this._isSliding || this._slide(a.NEXT) }, h.nextWhenVisible = function() {!document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next() }, h.prev = function() { this._isSliding || this._slide(a.PREV) }, h.pause = function(t) { t || (this._isPaused = !0), e(this._element).find(f.NEXT_PREV)[0] && X.supportsTransitionEnd() && (X.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, h.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, h.to = function(t) { var n = this;
                        this._activeElement = e(this._element).find(f.ACTIVE_ITEM)[0]; var i = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(l.SLID, function() { return n.to(t) });
                            else { if (i === t) return this.pause(), void this.cycle(); var r = t > i ? a.NEXT : a.PREV;
                                this._slide(r, this._items[t]) } }, h.dispose = function() { e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, h._getConfig = function(n) { return n = e.extend({}, o, n), X.typeCheckConfig(t, n, s), n }, h._addEventListeners = function() { var t = this;
                        this._config.keyboard && e(this._element).on(l.KEYDOWN, function(e) { return t._keydown(e) }), "hover" === this._config.pause && (e(this._element).on(l.MOUSEENTER, function(e) { return t.pause(e) }).on(l.MOUSELEAVE, function(e) { return t.cycle(e) }), "ontouchstart" in document.documentElement && e(this._element).on(l.TOUCHEND, function() { t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) { return t.cycle(e) }, 500 + t._config.interval) })) }, h._keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev(); break;
                            case 39:
                                t.preventDefault(), this.next(); break;
                            default:
                                return } }, h._getItemIndex = function(t) { return this._items = e.makeArray(e(t).parent().find(f.ITEM)), this._items.indexOf(t) }, h._getItemByDirection = function(t, e) { var n = t === a.NEXT,
                            i = t === a.PREV,
                            r = this._getItemIndex(e),
                            o = this._items.length - 1; if ((i && 0 === r || n && r === o) && !this._config.wrap) return e; var s = (r + (t === a.PREV ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, h._triggerSlideEvent = function(t, n) { var i = this._getItemIndex(t),
                            r = this._getItemIndex(e(this._element).find(f.ACTIVE_ITEM)[0]),
                            o = e.Event(l.SLIDE, { relatedTarget: t, direction: n, from: r, to: i }); return e(this._element).trigger(o), o }, h._setActiveIndicatorElement = function(t) { if (this._indicatorsElement) { e(this._indicatorsElement).find(f.ACTIVE).removeClass(c.ACTIVE); var n = this._indicatorsElement.children[this._getItemIndex(t)];
                            n && e(n).addClass(c.ACTIVE) } }, h._slide = function(t, n) { var i, r, o, s = this,
                            h = e(this._element).find(f.ACTIVE_ITEM)[0],
                            u = this._getItemIndex(h),
                            d = n || h && this._getItemByDirection(t, h),
                            p = this._getItemIndex(d),
                            g = Boolean(this._interval); if (t === a.NEXT ? (i = c.LEFT, r = c.NEXT, o = a.LEFT) : (i = c.RIGHT, r = c.PREV, o = a.RIGHT), d && e(d).hasClass(c.ACTIVE)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && h && d) { this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(d); var m = e.Event(l.SLID, { relatedTarget: d, direction: o, from: u, to: p });
                            X.supportsTransitionEnd() && e(this._element).hasClass(c.SLIDE) ? (e(d).addClass(r), X.reflow(d), e(h).addClass(i), e(d).addClass(i), e(h).one(X.TRANSITION_END, function() { e(d).removeClass(i + " " + r).addClass(c.ACTIVE), e(h).removeClass(c.ACTIVE + " " + r + " " + i), s._isSliding = !1, setTimeout(function() { return e(s._element).trigger(m) }, 0) }).emulateTransitionEnd(600)) : (e(h).removeClass(c.ACTIVE), e(d).addClass(c.ACTIVE), this._isSliding = !1, e(this._element).trigger(m)), g && this.cycle() } }, r._jQueryInterface = function(t) { return this.each(function() { var i = e(this).data(n),
                                s = e.extend({}, o, e(this).data()); "object" == typeof t && e.extend(s, t); var a = "string" == typeof t ? t : s.slide; if (i || (i = new r(this, s), e(this).data(n, i)), "number" == typeof t) i.to(t);
                            else if ("string" == typeof a) { if ("undefined" == typeof i[a]) throw new Error('No method named "' + a + '"');
                                i[a]() } else s.interval && (i.pause(), i.cycle()) }) }, r._dataApiClickHandler = function(t) { var i = X.getSelectorFromElement(this); if (i) { var o = e(i)[0]; if (o && e(o).hasClass(c.CAROUSEL)) { var s = e.extend({}, e(o).data(), e(this).data()),
                                    a = this.getAttribute("data-slide-to");
                                a && (s.interval = !1), r._jQueryInterface.call(e(o), s), a && e(o).data(n).to(a), t.preventDefault() } } }, q(r, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }, { key: "Default", get: function() { return o } }]), r }(); return e(document).on(l.CLICK_DATA_API, f.DATA_SLIDE, h._dataApiClickHandler), e(window).on(l.LOAD_DATA_API, function() { e(f.DATA_RIDE).each(function() { var t = e(this);
                    h._jQueryInterface.call(t, t.data()) }) }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() { return e.fn[t] = r, h._jQueryInterface }, h }(), tt = function() { var t = "collapse",
                n = "bs.collapse",
                i = e.fn[t],
                r = { toggle: !0, parent: "" },
                o = { toggle: "boolean", parent: "(string|element)" },
                s = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
                a = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
                l = { WIDTH: "width", HEIGHT: "height" },
                c = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
                f = function() {
                    function i(t, n) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var i = e(c.DATA_TOGGLE), r = 0; r < i.length; r++) { var o = i[r],
                                s = X.getSelectorFromElement(o);
                            null !== s && e(s).filter(t).length > 0 && this._triggerArray.push(o) }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var f = i.prototype; return f.toggle = function() { e(this._element).hasClass(a.SHOW) ? this.hide() : this.show() }, f.show = function() { var t = this; if (!this._isTransitioning && !e(this._element).hasClass(a.SHOW)) { var r, o; if (this._parent && ((r = e.makeArray(e(this._parent).children().children(c.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) { var l = e.Event(s.SHOW); if (e(this._element).trigger(l), !l.isDefaultPrevented()) { r && (i._jQueryInterface.call(e(r), "hide"), o || e(r).data(n, null)); var f = this._getDimension();
                                    e(this._element).removeClass(a.COLLAPSE).addClass(a.COLLAPSING), this._element.style[f] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(a.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0); var h = function() { e(t._element).removeClass(a.COLLAPSING).addClass(a.COLLAPSE).addClass(a.SHOW), t._element.style[f] = "", t.setTransitioning(!1), e(t._element).trigger(s.SHOWN) }; if (X.supportsTransitionEnd()) { var u = "scroll" + (f[0].toUpperCase() + f.slice(1));
                                        e(this._element).one(X.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[f] = this._element[u] + "px" } else h() } } } }, f.hide = function() { var t = this; if (!this._isTransitioning && e(this._element).hasClass(a.SHOW)) { var n = e.Event(s.HIDE); if (e(this._element).trigger(n), !n.isDefaultPrevented()) { var i = this._getDimension(); if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", X.reflow(this._element), e(this._element).addClass(a.COLLAPSING).removeClass(a.COLLAPSE).removeClass(a.SHOW), this._triggerArray.length)
                                    for (var r = 0; r < this._triggerArray.length; r++) { var o = this._triggerArray[r],
                                            l = X.getSelectorFromElement(o);
                                        null !== l && (e(l).hasClass(a.SHOW) || e(o).addClass(a.COLLAPSED).attr("aria-expanded", !1)) }
                                this.setTransitioning(!0); var c = function() { t.setTransitioning(!1), e(t._element).removeClass(a.COLLAPSING).addClass(a.COLLAPSE).trigger(s.HIDDEN) };
                                this._element.style[i] = "", X.supportsTransitionEnd() ? e(this._element).one(X.TRANSITION_END, c).emulateTransitionEnd(600) : c() } } }, f.setTransitioning = function(t) { this._isTransitioning = t }, f.dispose = function() { e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, f._getConfig = function(n) { return n = e.extend({}, r, n), n.toggle = Boolean(n.toggle), X.typeCheckConfig(t, n, o), n }, f._getDimension = function() { return e(this._element).hasClass(l.WIDTH) ? l.WIDTH : l.HEIGHT }, f._getParent = function() { var t = this,
                            n = null;
                        X.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0]; var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'; return e(n).find(r).each(function(e, n) { t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]) }), n }, f._addAriaAndCollapsedClass = function(t, n) { if (t) { var i = e(t).hasClass(a.SHOW);
                            n.length && e(n).toggleClass(a.COLLAPSED, !i).attr("aria-expanded", i) } }, i._getTargetFromElement = function(t) { var n = X.getSelectorFromElement(t); return n ? e(n)[0] : null }, i._jQueryInterface = function(t) { return this.each(function() { var o = e(this),
                                s = o.data(n),
                                a = e.extend({}, r, o.data(), "object" == typeof t && t); if (!s && a.toggle && /show|hide/.test(t) && (a.toggle = !1), s || (s = new i(this, a), o.data(n, s)), "string" == typeof t) { if ("undefined" == typeof s[t]) throw new Error('No method named "' + t + '"');
                                s[t]() } }) }, q(i, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }, { key: "Default", get: function() { return r } }]), i }(); return e(document).on(s.CLICK_DATA_API, c.DATA_TOGGLE, function(t) { "A" === t.currentTarget.tagName && t.preventDefault(); var i = e(this),
                    r = X.getSelectorFromElement(this);
                e(r).each(function() { var t = e(this),
                        r = t.data(n) ? "toggle" : i.data();
                    f._jQueryInterface.call(t, r) }) }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() { return e.fn[t] = i, f._jQueryInterface }, f }(), et = ["native code", "[object MutationObserverConstructor]"], nt = "undefined" != typeof window, it = ["Edge", "Trident", "Firefox"], rt = 0, ot = 0; ot < it.length; ot += 1)
        if (nt && navigator.userAgent.indexOf(it[ot]) >= 0) { rt = 1; break }
    var st = nt && function(t) { return et.some(function(e) { return (t || "").toString().indexOf(e) > -1 }) }(window.MutationObserver) ? function(t) { var e = !1,
                n = 0,
                i = document.createElement("span"); return new MutationObserver(function() { t(), e = !1 }).observe(i, { attributes: !0 }),
                function() { e || (e = !0, i.setAttribute("x-index", n), n += 1) } } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, rt)) } },
        at = void 0,
        lt = function() { return void 0 === at && (at = -1 !== navigator.appVersion.indexOf("MSIE 10")), at },
        ct = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
        ft = function() {
            function t(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e } }(),
        ht = function(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t },
        ut = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t },
        dt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        pt = dt.slice(3),
        gt = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
        mt = { placement: "bottom", eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(t) { var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1]; if (i) { var r = t.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                f = { start: ht({}, l, o[l]), end: ht({}, l, o[l] + o[c] - s[c]) };
                            t.offsets.popper = ut({}, s, f[i]) } return t } }, offset: { order: 200, enabled: !0, fn: function(t, e) { var n = e.offset,
                            i = t.placement,
                            r = t.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0; return l = V(+n) ? [+n, 0] : Y(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(t, e) { var n = e.boundariesElement || a(t.instance.popper);
                        t.instance.reference === n && (n = a(n)); var i = b(t.instance.popper, t.instance.reference, e.padding, n);
                        e.boundaries = i; var r = e.priority,
                            o = t.offsets.popper,
                            s = { primary: function(t) { var n = o[t]; return o[t] < i[t] && !e.escapeWithReference && (n = Math.max(o[t], i[t])), ht({}, t, n) }, secondary: function(t) { var n = "right" === t ? "left" : "top",
                                        r = o[n]; return o[t] > i[t] && !e.escapeWithReference && (r = Math.min(o[n], i[t] - ("right" === t ? o.width : o.height))), ht({}, n, r) } }; return r.forEach(function(t) { var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            o = ut({}, o, s[e](t)) }), t.offsets.popper = o, t }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(t) { var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            r = t.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height"; return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t } }, arrow: { order: 500, enabled: !0, fn: function(t, e) { if (!B(t.instance.modifiers, "arrow", "keepTogether")) return t; var n = e.element; if ("string" == typeof n) { if (!(n = t.instance.popper.querySelector(n))) return t } else if (!t.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t; var i = t.placement.split("-")[0],
                            o = t.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(i),
                            c = l ? "height" : "width",
                            f = l ? "Top" : "Left",
                            h = f.toLowerCase(),
                            u = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = O(n)[c];
                        a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]); var g = a[h] + a[c] / 2 - p / 2,
                            _ = r(t.instance.popper, "margin" + f).replace("px", ""),
                            v = g - m(t.offsets.popper)[h] - _; return v = Math.max(Math.min(s[c] - p, v), 0), t.arrowElement = n, t.offsets.arrow = {}, t.offsets.arrow[h] = Math.round(v), t.offsets.arrow[u] = "", t }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(t, e) { if (P(t.instance.modifiers, "inner")) return t; if (t.flipped && t.placement === t.originalPlacement) return t; var n = b(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                            i = t.placement.split("-")[0],
                            r = y(i),
                            o = t.placement.split("-")[1] || "",
                            s = []; switch (e.behavior) {
                            case gt.FLIP:
                                s = [i, r]; break;
                            case gt.CLOCKWISE:
                                s = K(i); break;
                            case gt.COUNTERCLOCKWISE:
                                s = K(i, !0); break;
                            default:
                                s = e.behavior } return s.forEach(function(a, l) { if (i !== a || s.length === l + 1) return t;
                            i = t.placement.split("-")[0], r = y(i); var c = t.offsets.popper,
                                f = t.offsets.reference,
                                h = Math.floor,
                                u = "left" === i && h(c.right) > h(f.left) || "right" === i && h(c.left) < h(f.right) || "top" === i && h(c.bottom) > h(f.top) || "bottom" === i && h(c.top) < h(f.bottom),
                                d = h(c.left) < h(n.left),
                                p = h(c.right) > h(n.right),
                                g = h(c.top) < h(n.top),
                                m = h(c.bottom) > h(n.bottom),
                                _ = "left" === i && d || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                v = -1 !== ["top", "bottom"].indexOf(i),
                                E = !!e.flipVariations && (v && "start" === o && d || v && "end" === o && p || !v && "start" === o && g || !v && "end" === o && m);
                            (u || _ || E) && (t.flipped = !0, (u || _) && (i = s[l + 1]), E && (o = G(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = ut({}, t.offsets.popper, D(t.instance.popper, t.offsets.reference, t.placement)), t = N(t.instance.modifiers, t, "flip")) }), t }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function(t) { var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n); return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = y(e), t.offsets.popper = m(r), t } }, hide: { order: 800, enabled: !0, fn: function(t) { if (!B(t.instance.modifiers, "hide", "preventOverflow")) return t; var e = t.offsets.reference,
                            n = S(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries; if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) { if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = "" } else { if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1 } return t } }, computeStyle: { order: 850, enabled: !0, fn: function(t, e) { var n = e.x,
                            i = e.y,
                            r = t.offsets.popper,
                            o = S(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var s = void 0 !== o ? o : e.gpuAcceleration,
                            l = _(a(t.instance.popper)),
                            c = { position: r.position },
                            f = { left: Math.floor(r.left), top: Math.floor(r.top), bottom: Math.floor(r.bottom), right: Math.floor(r.right) },
                            h = "bottom" === n ? "top" : "bottom",
                            u = "right" === i ? "left" : "right",
                            d = R("transform"),
                            p = void 0,
                            g = void 0; if (g = "bottom" === h ? -l.height + f.bottom : f.top, p = "right" === u ? -l.width + f.right : f.left, s && d) c[d] = "translate3d(" + p + "px, " + g + "px, 0)", c[h] = 0, c[u] = 0, c.willChange = "transform";
                        else { var m = "bottom" === h ? -1 : 1,
                                v = "right" === u ? -1 : 1;
                            c[h] = g * m, c[u] = p * v, c.willChange = h + ", " + u } var E = { "x-placement": t.placement }; return t.attributes = ut({}, E, t.attributes), t.styles = ut({}, c, t.styles), t.arrowStyles = ut({}, t.offsets.arrow, t.arrowStyles), t }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(t) { return F(t.instance.popper, t.styles), j(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && F(t.arrowElement, t.arrowStyles), t }, onLoad: function(t, e, n, i, r) { var o = I(r, e, t),
                            s = A(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return e.setAttribute("x-placement", s), F(e, { position: "absolute" }), n }, gpuAcceleration: void 0 } } },
        _t = function() {
            function t(e, n) { var r = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                ct(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(r.update) }, this.update = st(this.update.bind(this)), this.options = ut({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e.jquery ? e[0] : e, this.popper = n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ut({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) { r.options.modifiers[e] = ut({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return ut({ name: t }, r.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(t) { t.enabled && i(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state) }), this.update(); var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s } return ft(t, [{ key: "update", value: function() { return L.call(this) } }, { key: "destroy", value: function() { return H.call(this) } }, { key: "enableEventListeners", value: function() { return x.call(this) } }, { key: "disableEventListeners", value: function() { return U.call(this) } }]), t }();
    _t.Utils = ("undefined" != typeof window ? window : global).PopperUtils, _t.placements = dt, _t.Defaults = mt; var vt = function() { if ("undefined" == typeof _t) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var t = "dropdown",
                n = "bs.dropdown",
                i = "." + n,
                r = e.fn[t],
                o = new RegExp("38|40|27"),
                s = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, CLICK: "click" + i, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api" },
                a = { DISABLED: "disabled", SHOW: "show", DROPUP: "dropup", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left" },
                l = { DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", MENU: ".dropdown-menu", NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)" },
                c = { TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end" },
                f = { offset: 0, flip: !0 },
                h = { offset: "(number|string|function)", flip: "boolean" },
                u = function() {
                    function r(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var u = r.prototype; return u.toggle = function() { if (!this._element.disabled && !e(this._element).hasClass(a.DISABLED)) { var t = r._getParentFromElement(this._element),
                                n = e(this._menu).hasClass(a.SHOW); if (r._clearMenus(), !n) { var i = { relatedTarget: this._element },
                                    o = e.Event(s.SHOW, i); if (e(t).trigger(o), !o.isDefaultPrevented()) { var c = this._element;
                                    e(t).hasClass(a.DROPUP) && (e(this._menu).hasClass(a.MENULEFT) || e(this._menu).hasClass(a.MENURIGHT)) && (c = t), this._popper = new _t(c, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !e(t).closest(l.NAVBAR_NAV).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(a.SHOW), e(t).toggleClass(a.SHOW).trigger(e.Event(s.SHOWN, i)) } } } }, u.dispose = function() { e.removeData(this._element, n), e(this._element).off(i), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null }, u.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, u._addEventListeners = function() { var t = this;
                        e(this._element).on(s.CLICK, function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() }) }, u._getConfig = function(n) { return n = e.extend({}, this.constructor.Default, e(this._element).data(), n), X.typeCheckConfig(t, n, this.constructor.DefaultType), n }, u._getMenuElement = function() { if (!this._menu) { var t = r._getParentFromElement(this._element);
                            this._menu = e(t).find(l.MENU)[0] } return this._menu }, u._getPlacement = function() { var t = e(this._element).parent(),
                            n = c.BOTTOM; return t.hasClass(a.DROPUP) ? (n = c.TOP, e(this._menu).hasClass(a.MENURIGHT) && (n = c.TOPEND)) : e(this._menu).hasClass(a.MENURIGHT) && (n = c.BOTTOMEND), n }, u._detectNavbar = function() { return e(this._element).closest(".navbar").length > 0 }, u._getPopperConfig = function() { var t = this,
                            n = {}; "function" == typeof this._config.offset ? n.fn = function(n) { return n.offsets = e.extend({}, n.offsets, t._config.offset(n.offsets) || {}), n } : n.offset = this._config.offset; var i = { placement: this._getPlacement(), modifiers: { offset: n, flip: { enabled: this._config.flip } } }; return this._inNavbar && (i.modifiers.applyStyle = { enabled: !this._inNavbar }), i }, r._jQueryInterface = function(t) { return this.each(function() { var i = e(this).data(n),
                                o = "object" == typeof t ? t : null; if (i || (i = new r(this, o), e(this).data(n, i)), "string" == typeof t) { if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');
                                i[t]() } }) }, r._clearMenus = function(t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var i = e.makeArray(e(l.DATA_TOGGLE)), o = 0; o < i.length; o++) { var c = r._getParentFromElement(i[o]),
                                    f = e(i[o]).data(n),
                                    h = { relatedTarget: i[o] }; if (f) { var u = f._menu; if (e(c).hasClass(a.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(c, t.target))) { var d = e.Event(s.HIDE, h);
                                        e(c).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), e(u).removeClass(a.SHOW), e(c).removeClass(a.SHOW).trigger(e.Event(s.HIDDEN, h))) } } } }, r._getParentFromElement = function(t) { var n, i = X.getSelectorFromElement(t); return i && (n = e(i)[0]), n || t.parentNode }, r._dataApiKeydownHandler = function(t) { if (!(!o.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(a.DISABLED)))) { var n = r._getParentFromElement(this),
                                i = e(n).hasClass(a.SHOW); if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) { var s = e(n).find(l.VISIBLE_ITEMS).get(); if (s.length) { var c = s.indexOf(t.target);
                                    38 === t.which && c > 0 && c--, 40 === t.which && c < s.length - 1 && c++, c < 0 && (c = 0), s[c].focus() } } else { if (27 === t.which) { var f = e(n).find(l.DATA_TOGGLE)[0];
                                    e(f).trigger("focus") }
                                e(this).trigger("click") } } }, q(r, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }, { key: "Default", get: function() { return f } }, { key: "DefaultType", get: function() { return h } }]), r }(); return e(document).on(s.KEYDOWN_DATA_API, l.DATA_TOGGLE, u._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, l.MENU, u._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.KEYUP_DATA_API, u._clearMenus).on(s.CLICK_DATA_API, l.DATA_TOGGLE, function(t) { t.preventDefault(), t.stopPropagation(), u._jQueryInterface.call(e(this), "toggle") }).on(s.CLICK_DATA_API, l.FORM_CHILD, function(t) { t.stopPropagation() }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function() { return e.fn[t] = r, u._jQueryInterface }, u }(),
        Et = function() { var t = "modal",
                n = ".bs.modal",
                i = e.fn[t],
                r = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                o = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                s = { HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api" },
                a = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" },
                l = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
                c = function() {
                    function i(t, n) { this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(l.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0 } var c = i.prototype; return c.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, c.show = function(t) { var n = this; if (!this._isTransitioning && !this._isShown) { X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE) && (this._isTransitioning = !0); var i = e.Event(s.SHOW, { relatedTarget: t });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(a.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(s.CLICK_DISMISS, l.DATA_DISMISS, function(t) { return n.hide(t) }), e(this._dialog).on(s.MOUSEDOWN_DISMISS, function() { e(n._element).one(s.MOUSEUP_DISMISS, function(t) { e(t.target).is(n._element) && (n._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return n._showElement(t) })) } }, c.hide = function(t) { var n = this; if (t && t.preventDefault(), !this._isTransitioning && this._isShown) { var i = e.Event(s.HIDE); if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) { this._isShown = !1; var r = X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE);
                                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(s.FOCUSIN), e(this._element).removeClass(a.SHOW), e(this._element).off(s.CLICK_DISMISS), e(this._dialog).off(s.MOUSEDOWN_DISMISS), r ? e(this._element).one(X.TRANSITION_END, function(t) { return n._hideModal(t) }).emulateTransitionEnd(300) : this._hideModal() } } }, c.dispose = function() { e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, c.handleUpdate = function() { this._adjustDialog() }, c._getConfig = function(n) { return n = e.extend({}, r, n), X.typeCheckConfig(t, n, o), n }, c._showElement = function(t) { var n = this,
                            i = X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && X.reflow(this._element), e(this._element).addClass(a.SHOW), this._config.focus && this._enforceFocus(); var r = e.Event(s.SHOWN, { relatedTarget: t }),
                            o = function() { n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r) };
                        i ? e(this._dialog).one(X.TRANSITION_END, o).emulateTransitionEnd(300) : o() }, c._enforceFocus = function() { var t = this;
                        e(document).off(s.FOCUSIN).on(s.FOCUSIN, function(n) { document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus() }) }, c._setEscapeEvent = function() { var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(s.KEYDOWN_DISMISS, function(e) { 27 === e.which && (e.preventDefault(), t.hide()) }) : this._isShown || e(this._element).off(s.KEYDOWN_DISMISS) }, c._setResizeEvent = function() { var t = this;
                        this._isShown ? e(window).on(s.RESIZE, function(e) { return t.handleUpdate(e) }) : e(window).off(s.RESIZE) }, c._hideModal = function() { var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { e(document.body).removeClass(a.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(s.HIDDEN) }) }, c._removeBackdrop = function() { this._backdrop && (e(this._backdrop).remove(), this._backdrop = null) }, c._showBackdrop = function(t) { var n = this,
                            i = e(this._element).hasClass(a.FADE) ? a.FADE : ""; if (this._isShown && this._config.backdrop) { var r = X.supportsTransitionEnd() && i; if (this._backdrop = document.createElement("div"), this._backdrop.className = a.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(s.CLICK_DISMISS, function(t) { n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()) }), r && X.reflow(this._backdrop), e(this._backdrop).addClass(a.SHOW), !t) return; if (!r) return void t();
                            e(this._backdrop).one(X.TRANSITION_END, t).emulateTransitionEnd(150) } else if (!this._isShown && this._backdrop) { e(this._backdrop).removeClass(a.SHOW); var o = function() { n._removeBackdrop(), t && t() };
                            X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE) ? e(this._backdrop).one(X.TRANSITION_END, o).emulateTransitionEnd(150) : o() } else t && t() }, c._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, c._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, c._checkScrollbar = function() { var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, c._setScrollbar = function() { var t = this; if (this._isBodyOverflowing) { e(l.FIXED_CONTENT).each(function(n, i) { var r = e(i)[0].style.paddingRight,
                                    o = e(i).css("padding-right");
                                e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px") }), e(l.STICKY_CONTENT).each(function(n, i) { var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px") }), e(l.NAVBAR_TOGGLER).each(function(n, i) { var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px") }); var n = document.body.style.paddingRight,
                                i = e("body").css("padding-right");
                            e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px") } }, c._resetScrollbar = function() { e(l.FIXED_CONTENT).each(function(t, n) { var i = e(n).data("padding-right"); "undefined" != typeof i && e(n).css("padding-right", i).removeData("padding-right") }), e(l.STICKY_CONTENT + ", " + l.NAVBAR_TOGGLER).each(function(t, n) { var i = e(n).data("margin-right"); "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right") }); var t = e("body").data("padding-right"); "undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right") }, c._getScrollbarWidth = function() { var t = document.createElement("div");
                        t.className = a.SCROLLBAR_MEASURER, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, i._jQueryInterface = function(t, n) { return this.each(function() { var r = e(this).data("bs.modal"),
                                o = e.extend({}, i.Default, e(this).data(), "object" == typeof t && t); if (r || (r = new i(this, o), e(this).data("bs.modal", r)), "string" == typeof t) { if ("undefined" == typeof r[t]) throw new Error('No method named "' + t + '"');
                                r[t](n) } else o.show && r.show(n) }) }, q(i, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }, { key: "Default", get: function() { return r } }]), i }(); return e(document).on(s.CLICK_DATA_API, l.DATA_TOGGLE, function(t) { var n, i = this,
                    r = X.getSelectorFromElement(this);
                r && (n = e(r)[0]); var o = e(n).data("bs.modal") ? "toggle" : e.extend({}, e(n).data(), e(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var a = e(n).one(s.SHOW, function(t) { t.isDefaultPrevented() || a.one(s.HIDDEN, function() { e(i).is(":visible") && i.focus() }) });
                c._jQueryInterface.call(e(n), o, this) }), e.fn[t] = c._jQueryInterface, e.fn[t].Constructor = c, e.fn[t].noConflict = function() { return e.fn[t] = i, c._jQueryInterface }, c }(),
        Tt = function() { if ("undefined" == typeof _t) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)"); var t = "tooltip",
                n = ".bs.tooltip",
                i = e.fn[t],
                r = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                o = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)" },
                s = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                a = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip" },
                l = { SHOW: "show", OUT: "out" },
                c = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
                f = { FADE: "fade", SHOW: "show" },
                h = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow" },
                u = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
                d = function() {
                    function i(t, e) { this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var d = i.prototype; return d.enable = function() { this._isEnabled = !0 }, d.disable = function() { this._isEnabled = !1 }, d.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, d.toggle = function(t) { if (this._isEnabled)
                            if (t) { var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i) } else { if (e(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);
                                this._enter(null, this) } }, d.dispose = function() { clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, d.show = function() { var t = this; if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements"); var n = e.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { e(this.element).trigger(n); var r = e.contains(this.element.ownerDocument.documentElement, this.element); if (n.isDefaultPrevented() || !r) return; var o = this.getTipElement(),
                                s = X.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(f.FADE); var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                c = this._getAttachment(a);
                            this.addAttachmentClass(c); var u = !1 === this.config.container ? document.body : e(this.config.container);
                            e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new _t(this.element, o, { placement: c, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: h.ARROW } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { t._handlePopperPlacementChange(e) } }), e(o).addClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop); var d = function() { t.config.animation && t._fixTransition(); var n = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === l.OUT && t._leave(null, t) };
                            X.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(this.tip).one(X.TRANSITION_END, d).emulateTransitionEnd(i._TRANSITION_DURATION) : d() } }, d.hide = function(t) { var n = this,
                            i = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            o = function() { n._hoverState !== l.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t() };
                        e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[u.CLICK] = !1, this._activeTrigger[u.FOCUS] = !1, this._activeTrigger[u.HOVER] = !1, X.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(i).one(X.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "") }, d.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, d.isWithContent = function() { return Boolean(this.getTitle()) }, d.addAttachmentClass = function(t) { e(this.getTipElement()).addClass("bs-tooltip-" + t) }, d.getTipElement = function() { return this.tip = this.tip || e(this.config.template)[0], this.tip }, d.setContent = function() { var t = e(this.getTipElement());
                        this.setElementContent(t.find(h.TOOLTIP_INNER), this.getTitle()), t.removeClass(f.FADE + " " + f.SHOW) }, d.setElementContent = function(t, n) { var i = this.config.html; "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n) }, d.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, d._getAttachment = function(t) { return s[t.toUpperCase()] }, d._setListeners = function() { var t = this;
                        this.config.trigger.split(" ").forEach(function(n) { if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) { return t.toggle(e) });
                            else if (n !== u.MANUAL) { var i = n === u.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    r = n === u.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function(e) { return t._enter(e) }).on(r, t.config.selector, function(e) { return t._leave(e) }) }
                            e(t.element).closest(".modal").on("hide.bs.modal", function() { return t.hide() }) }), this.config.selector ? this.config = e.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, d._fixTitle = function() { var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, d._enter = function(t, n) { var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? u.FOCUS : u.HOVER] = !0), e(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === l.SHOW ? n._hoverState = l.SHOW : (clearTimeout(n._timeout), n._hoverState = l.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() { n._hoverState === l.SHOW && n.show() }, n.config.delay.show) : n.show()) }, d._leave = function(t, n) { var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? u.FOCUS : u.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = l.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() { n._hoverState === l.OUT && n.hide() }, n.config.delay.hide) : n.hide()) }, d._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1 }, d._getConfig = function(n) { return "number" == typeof(n = e.extend({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), X.typeCheckConfig(t, n, this.constructor.DefaultType), n }, d._getDelegateConfig = function() { var t = {}; if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, d._cleanTipClass = function() { var t = e(this.getTipElement()),
                            n = t.attr("class").match(r);
                        null !== n && n.length > 0 && t.removeClass(n.join("")) }, d._handlePopperPlacementChange = function(t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, d._fixTransition = function() { var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n) }, i._jQueryInterface = function(t) { return this.each(function() { var n = e(this).data("bs.tooltip"),
                                r = "object" == typeof t && t; if ((n || !/dispose|hide/.test(t)) && (n || (n = new i(this, r), e(this).data("bs.tooltip", n)), "string" == typeof t)) { if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                                n[t]() } }) }, q(i, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }, { key: "Default", get: function() { return a } }, { key: "NAME", get: function() { return t } }, { key: "DATA_KEY", get: function() { return "bs.tooltip" } }, { key: "Event", get: function() { return c } }, { key: "EVENT_KEY", get: function() { return n } }, { key: "DefaultType", get: function() { return o } }]), i }(); return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function() { return e.fn[t] = i, d._jQueryInterface }, d }(),
        bt = function() { var t = "popover",
                n = ".bs.popover",
                i = e.fn[t],
                r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                o = e.extend({}, Tt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
                s = e.extend({}, Tt.DefaultType, { content: "(string|element|function)" }),
                a = { FADE: "fade", SHOW: "show" },
                l = { TITLE: ".popover-header", CONTENT: ".popover-body" },
                c = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n },
                f = function(i) {
                    function f() { return i.apply(this, arguments) || this }
                    z(f, i); var h = f.prototype; return h.isWithContent = function() { return this.getTitle() || this._getContent() }, h.addAttachmentClass = function(t) { e(this.getTipElement()).addClass("bs-popover-" + t) }, h.getTipElement = function() { return this.tip = this.tip || e(this.config.template)[0], this.tip }, h.setContent = function() { var t = e(this.getTipElement());
                        this.setElementContent(t.find(l.TITLE), this.getTitle()), this.setElementContent(t.find(l.CONTENT), this._getContent()), t.removeClass(a.FADE + " " + a.SHOW) }, h._getContent = function() { return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content) }, h._cleanTipClass = function() { var t = e(this.getTipElement()),
                            n = t.attr("class").match(r);
                        null !== n && n.length > 0 && t.removeClass(n.join("")) }, f._jQueryInterface = function(t) { return this.each(function() { var n = e(this).data("bs.popover"),
                                i = "object" == typeof t ? t : null; if ((n || !/destroy|hide/.test(t)) && (n || (n = new f(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) { if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                                n[t]() } }) }, q(f, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }, { key: "Default", get: function() { return o } }, { key: "NAME", get: function() { return t } }, { key: "DATA_KEY", get: function() { return "bs.popover" } }, { key: "Event", get: function() { return c } }, { key: "EVENT_KEY", get: function() { return n } }, { key: "DefaultType", get: function() { return s } }]), f }(Tt); return e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() { return e.fn[t] = i, f._jQueryInterface }, f }(),
        Ct = function() { var t = "scrollspy",
                n = e.fn[t],
                i = { offset: 10, method: "auto", target: "" },
                r = { offset: "number", method: "string", target: "(string|element)" },
                o = { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" },
                s = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active" },
                a = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
                l = { OFFSET: "offset", POSITION: "position" },
                c = function() {
                    function n(t, n) { var i = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + a.NAV_LINKS + "," + this._config.target + " " + a.LIST_ITEMS + "," + this._config.target + " " + a.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(o.SCROLL, function(t) { return i._process(t) }), this.refresh(), this._process() } var c = n.prototype; return c.refresh = function() { var t = this,
                            n = this._scrollElement !== this._scrollElement.window ? l.POSITION : l.OFFSET,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === l.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function(t) { var n, o = X.getSelectorFromElement(t); if (o && (n = e(o)[0]), n) { var s = n.getBoundingClientRect(); if (s.width || s.height) return [e(n)[i]().top + r, o] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) }) }, c.dispose = function() { e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, c._getConfig = function(n) { if ("string" != typeof(n = e.extend({}, i, n)).target) { var o = e(n.target).attr("id");
                            o || (o = X.getUID(t), e(n.target).attr("id", o)), n.target = "#" + o } return X.typeCheckConfig(t, n, r), n }, c._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, c._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, c._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, c._process = function() { var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), t >= n) { var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]) } }, c._activate = function(t) { this._activeTarget = t, this._clear(); var n = this._selector.split(",");
                        n = n.map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' }); var i = e(n.join(","));
                        i.hasClass(s.DROPDOWN_ITEM) ? (i.closest(a.DROPDOWN).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE), i.addClass(s.ACTIVE)) : (i.addClass(s.ACTIVE), i.parents(a.NAV_LIST_GROUP).prev(a.NAV_LINKS + ", " + a.LIST_ITEMS).addClass(s.ACTIVE), i.parents(a.NAV_LIST_GROUP).prev(a.NAV_ITEMS).children(a.NAV_LINKS).addClass(s.ACTIVE)), e(this._scrollElement).trigger(o.ACTIVATE, { relatedTarget: t }) }, c._clear = function() { e(this._selector).filter(a.ACTIVE).removeClass(s.ACTIVE) }, n._jQueryInterface = function(t) { return this.each(function() { var i = e(this).data("bs.scrollspy"),
                                r = "object" == typeof t && t; if (i || (i = new n(this, r), e(this).data("bs.scrollspy", i)), "string" == typeof t) { if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');
                                i[t]() } }) }, q(n, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }, { key: "Default", get: function() { return i } }]), n }(); return e(window).on(o.LOAD_DATA_API, function() { for (var t = e.makeArray(e(a.DATA_SPY)), n = t.length; n--;) { var i = e(t[n]);
                    c._jQueryInterface.call(i, i.data()) } }), e.fn[t] = c._jQueryInterface, e.fn[t].Constructor = c, e.fn[t].noConflict = function() { return e.fn[t] = n, c._jQueryInterface }, c }(),
        At = function() { var t = e.fn.tab,
                n = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
                i = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
                r = { DROPDOWN: ".dropdown", NAV_LIST_GROUP: ".nav, .list-group", ACTIVE: ".active", ACTIVE_UL: "> li > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
                o = function() {
                    function t(t) { this._element = t } var o = t.prototype; return o.show = function() { var t = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) { var o, s, a = e(this._element).closest(r.NAV_LIST_GROUP)[0],
                                l = X.getSelectorFromElement(this._element); if (a) { var c = "UL" === a.nodeName ? r.ACTIVE_UL : r.ACTIVE;
                                s = e.makeArray(e(a).find(c)), s = s[s.length - 1] } var f = e.Event(n.HIDE, { relatedTarget: this._element }),
                                h = e.Event(n.SHOW, { relatedTarget: s }); if (s && e(s).trigger(f), e(this._element).trigger(h), !h.isDefaultPrevented() && !f.isDefaultPrevented()) { l && (o = e(l)[0]), this._activate(this._element, a); var u = function() { var i = e.Event(n.HIDDEN, { relatedTarget: t._element }),
                                        r = e.Event(n.SHOWN, { relatedTarget: s });
                                    e(s).trigger(i), e(t._element).trigger(r) };
                                o ? this._activate(o, o.parentNode, u) : u() } } }, o.dispose = function() { e.removeData(this._element, "bs.tab"), this._element = null }, o._activate = function(t, n, o) { var s, a = this,
                            l = (s = "UL" === n.nodeName ? e(n).find(r.ACTIVE_UL) : e(n).children(r.ACTIVE))[0],
                            c = o && X.supportsTransitionEnd() && l && e(l).hasClass(i.FADE),
                            f = function() { return a._transitionComplete(t, l, c, o) };
                        l && c ? e(l).one(X.TRANSITION_END, f).emulateTransitionEnd(150) : f(), l && e(l).removeClass(i.SHOW) }, o._transitionComplete = function(t, n, o, s) { if (n) { e(n).removeClass(i.ACTIVE); var a = e(n.parentNode).find(r.DROPDOWN_ACTIVE_CHILD)[0];
                            a && e(a).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1) } if (e(t).addClass(i.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), o ? (X.reflow(t), e(t).addClass(i.SHOW)) : e(t).removeClass(i.FADE), t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) { var l = e(t).closest(r.DROPDOWN)[0];
                            l && e(l).find(r.DROPDOWN_TOGGLE).addClass(i.ACTIVE), t.setAttribute("aria-expanded", !0) }
                        s && s() }, t._jQueryInterface = function(n) { return this.each(function() { var i = e(this),
                                r = i.data("bs.tab"); if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) { if ("undefined" == typeof r[n]) throw new Error('No method named "' + n + '"');
                                r[n]() } }) }, q(t, null, [{ key: "VERSION", get: function() { return "4.0.0-beta.2" } }]), t }(); return e(document).on(n.CLICK_DATA_API, r.DATA_TOGGLE, function(t) { t.preventDefault(), o._jQueryInterface.call(e(this), "show") }), e.fn.tab = o._jQueryInterface, e.fn.tab.Constructor = o, e.fn.tab.noConflict = function() { return e.fn.tab = t, o._jQueryInterface }, o }(); return function() { if ("undefined" == typeof e) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var t = e.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(), t.Util = X, t.Alert = Z, t.Button = J, t.Carousel = $, t.Collapse = tt, t.Dropdown = vt, t.Modal = Et, t.Popover = bt, t.Scrollspy = Ct, t.Tab = At, t.Tooltip = Tt, t }({}, $);
//# sourceMappingURL=bootstrap.bundle.min.js.map