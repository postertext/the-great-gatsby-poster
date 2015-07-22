/*!
 * @preserve
 * jquery.scrolldepth.js | v0.7.2
 * Copyright (c) 2015 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
! function(e, n, t) {
    "use strict";
    var o, r, a, l = {
            minHeight: 0,
            elements: [],
            percentage: !0,
            userTiming: !0,
            pixelDepth: !0,
            nonInteraction: !0
        },
        i = e(n),
        c = [],
        u = 0;
    e.scrollDepth = function(h) {
        function p(e) {
            a ? a({
                event: "ScrollDistance",
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: "Baseline",
                eventValue: 1,
                eventNonInteraction: !0
            }) : (o && ga("send", "event", "Scroll Depth", e, "Baseline", 1, {
                nonInteraction: !0
            }), r && _gaq.push(["_trackEvent", "Scroll Depth", e, "Baseline", 1, !0]))
        }

        function g(e, n, t, l) {
            a ? (a({
                event: "ScrollDistance",
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: n,
                eventValue: 1,
                eventNonInteraction: h.nonInteraction
            }), h.pixelDepth && arguments.length > 2 && t > u && (u = t, a({
                event: "ScrollDistance",
                eventCategory: "Scroll Depth",
                eventAction: "Pixel Depth",
                eventLabel: D(t),
                eventValue: 1,
                eventNonInteraction: h.nonInteraction
            })), h.userTiming && arguments.length > 3 && a({
                event: "ScrollTiming",
                eventCategory: "Scroll Depth",
                eventAction: e,
                eventLabel: n,
                eventTiming: l
            })) : (o && (ga("send", "event", "Scroll Depth", e, n, 1, {
                nonInteraction: h.nonInteraction
            }), h.pixelDepth && arguments.length > 2 && t > u && (u = t, ga("send", "event", "Scroll Depth", "Pixel Depth", D(t), 1, {
                nonInteraction: h.nonInteraction
            })), h.userTiming && arguments.length > 3 && ga("send", "timing", "Scroll Depth", e, l, n)), r && (_gaq.push(["_trackEvent", "Scroll Depth", e, n, 1, h.nonInteraction]), h.pixelDepth && arguments.length > 2 && t > u && (u = t, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", D(t), 1, h.nonInteraction])), h.userTiming && arguments.length > 3 && _gaq.push(["_trackTiming", "Scroll Depth", e, l, n, 100])))
        }

        function s(e) {
            return {
                "25%": parseInt(.25 * e, 10),
                "50%": parseInt(.5 * e, 10),
                "75%": parseInt(.75 * e, 10),
                "100%": e - 5
            }
        }

        function v(n, t, o) {
            e.each(n, function(n, r) {
                -1 === e.inArray(n, c) && t >= r && (g("Percentage", n, t, o), c.push(n))
            })
        }

        function f(n, t, o) {
            e.each(n, function(n, r) {
                -1 === e.inArray(r, c) && e(r).length && t >= e(r).offset().top && (g("Elements", r, t, o), c.push(r))
            })
        }

        function D(e) {
            return (250 * Math.floor(e / 250)).toString()
        }

        function m(e, n) {
            var t, o, r, a = null,
                l = 0,
                i = function() {
                    l = new Date, a = null, r = e.apply(t, o)
                };
            return function() {
                var c = new Date;
                l || (l = c);
                var u = n - (c - l);
                return t = this, o = arguments, 0 >= u ? (clearTimeout(a), a = null, l = c, r = e.apply(t, o)) : a || (a = setTimeout(i, u)), r
            }
        }
        var d = +new Date;
        h = e.extend({}, l, h), e(t).height() < h.minHeight || ("function" == typeof ga && (o = !0), "undefined" != typeof _gaq && "function" == typeof _gaq.push && (r = !0), "function" == typeof h.eventHandler ? a = h.eventHandler : "undefined" != typeof dataLayer && "function" == typeof dataLayer.push && (a = function(e) {
            dataLayer.push(e)
        }), h.percentage ? p("Percentage") : h.elements && p("Elements"), i.on("scroll.scrollDepth", m(function() {
            var o = e(t).height(),
                r = n.innerHeight ? n.innerHeight : i.height(),
                a = i.scrollTop() + r,
                l = s(o),
                u = +new Date - d;
            return c.length >= 4 + h.elements.length ? void i.off("scroll.scrollDepth") : (h.elements && f(h.elements, a, u), void(h.percentage && v(l, a, u)))
        }, 500)))
    }
}(jQuery, window, document);