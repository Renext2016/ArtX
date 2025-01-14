function ajaxLoad(e) {
    if (!e.hasClass("loading")) {
        var t = e.data("page") ? parseInt(e.data("page")) : 1, n = e.data("pages") ? parseInt(e.data("pages")) : 1,
            i = e.data("action"), o = e.data("method") ? e.data("method") : "GET";
        t < n ? (e.addClass("loading"), e.append(kaspersky.preload), $.ajax({
            url: i,
            data: {PAGE: t + 1},
            type: o,
            beforeSend: function (e) {
                return e.setRequestHeader("X-CSRF-Token", $("meta[name='csrf-token']").attr("content"))
            }
        }).done(function (n) {
            e.append(n), e.data("page", t + 1), e.trigger("ajaxLoadComplete")
        }).always(function () {
            e.find(".svg-preloader").remove(), e.removeClass("loading")
        })) : e.removeClass("js-ajax-loading")
    }
}

!function (e) {
    function t() {
        return getComputedStyle(i)
    }

    function n(e) {
        return e && e.replace(/^[\s'"]|[\s'"]$/g, "")
    }

    var i = document.documentElement, o = i.attributes;
    e.checkMobile = e.checkMobile || {}, e.checkMobile.css = e.checkMobile.css || {}, e.checkMobile.css.isMobile = function () {
        return [o["data-mobile"].value, "attr(data-mobile)"].indexOf(n(t().content)) >= 0
    }, e.checkMobile.css.isLandscape = function () {
        return /Mobi/i.test(navigator.userAgent) ? 90 === Math.abs(window.orientation) || screen.availHeight < screen.availWidth : [o["data-landscape"].value, "attr(data-landscape)"].indexOf(n(t().content)) >= 0
    }
}(peppers = peppers || {});
var peppers;
!function (e, t, n) {
    var i = t.userAgent || t.vendor || n.opera;
    e.checkMobile = e.checkMobile || {}, e.checkMobile.isMobile = function () {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4))
    }, e.checkMobile.isMobileOrTablet = function () {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0, 4))
    }
}(peppers = peppers || {}, navigator, window);
var peppers;
!function (e, t) {
    function n() {
        var e = peppers.checkMobile.css.isMobile();
        i !== e && (i = e, o.trigger("check-mobile:change", i))
    }

    var i, o = e(t).on("resize", n);
    peppers.checkMobile = peppers.checkMobile || {}, peppers.checkMobile.css = peppers.checkMobile.css || {}, peppers.checkMobile.css.listen = function (e) {
        o.on("check-mobile:change", e), void 0 !== i && e(null, i)
    }, n()
}(jQuery, window, peppers = peppers || {});
var peppers;
!function (e, t, n) {
    var i = $.Deferred(), o = [];
    e.ready = i.promise(), e.ready.addWait = function (e) {
        if (!e) {
            if (arguments.length > 0) return;
            var t = $.Deferred();
            e = t.promise()
        }
        return o.push(e), e.done(function () {
            o.splice(o.indexOf(e), 1), 0 == o.length && i.resolve()
        }), t
    }, e.navigateTo = function (t) {
        function i() {
            n.href = t
        }

        e.Transition.opened ? (e.Transition.fadeIn(), setTimeout(i, 800)) : i()
    }
}(kaspersky = kaspersky || {}, document, location);
var kaspersky;
!function (e, t) {
    function n(e, t) {
        switch (typeof e) {
            case"number":
            case"string":
            case"boolean":
                return e === t;
            default:
                var i, o = [];
                for (i in e) if (o.push(i), !n(e[i], t[i])) return !1;
                for (i in t) if (o.indexOf(i) < 0) return !1;
                return !0
        }
    }

    function i(e, n) {
        if (!n) return t.hash = e || "/";
        t.replace("#" + (e || "/"))
    }

    function o(e) {
        return (e || t.hash).replace(/^#?\/?|\/$/, "").split("/")
    }

    e.hash = {getHash: o, isEqual: n, setHash: i}
}(peppers = peppers || {}, window.location);
var peppers;
!function (e) {
    e.jQueryConstructor = function (e, t) {
        return function (n) {
            var i = arguments;
            return this.each(function () {
                var n = $(this), o = n.data(e);
                o || n.data(e, o = new t(n)), "function" == typeof o.init && o.init.apply(o, i)
            })
        }
    }
}(peppers = peppers || {});
var peppers;
!function (e, t) {
    e.formatNumber = function (e) {
        for (var t = [], n = ("" + e).replace(/\s/g, ""); n.length > 0;) t.unshift(n.substr(-3)), n = n.substr(0, n.length - 3);
        return t.join(" ")
    }, t && t.registerHelper("formatNumber", e.formatNumber)
}(peppers = peppers || {}, window.Handlebars);
var peppers;
!function (e, t) {
    t(e).ready(function () {
        function n(e) {
            console.debug("onAccelerometer", e), l ? (h.beta = s(-(e.beta - l.beta) / 10, 1) * d, h.gamma = s((e.gamma - l.gamma) / 10, 1) * d) : (p.off("mousemove", i), l = {
                beta: e.beta,
                gamma: e.gamma
            })
        }

        function i(e) {
            var t = Math.ceil(u.width() / 2), n = Math.ceil(u.height() / 2), i = e.pageX - t, o = e.pageY - n;
            h.beta = o / n * d, h.gamma = -i / t * d
        }

        function o() {
            c.css({transform: "rotate3d(1, 0, 0, " + f.beta + "deg) rotate3d(0, 1, 0, " + f.gamma + "deg)"})
        }

        function a() {
            for (var e in f) f[e] += (h[e] - f[e]) * m[e]
        }

        function r() {
            requestAnimationFrame(r), v(), g(f)
        }

        function s(e, t) {
            return t = Math.abs(t), e < -t ? -t : e > t ? t : e
        }

        var c = t(".parallax__container");
        if (0 != c.length) {
            var l, d = 14, u = t(e.body), p = t(e.documentElement);
            p.mousemove(i), peppers.accelerometer.on("change", n);
            var h = {beta: 0, gamma: 0}, f = {beta: 0, gamma: 0}, m = {beta: .05, gamma: .05}, g = o, v = a;
            r()
        }
    })
}(document, jQuery), function (e, t) {
    function n() {
        c && (c = !1, t.removeEventListener("deviceorientation", o, !0), t.removeEventListener("devicemotion", o, !0), t.removeEventListener("MozOrientation", o, !0))
    }

    function i() {
        c || (c = !0, t.DeviceOrientationEvent ? t.addEventListener("deviceorientation", o, !0) : t.DeviceMotionEvent ? t.addEventListener("devicemotion", o, !0) : t.addEventListener("MozOrientation", o, !0))
    }

    function o(e) {
        switch (e.type) {
            case"deviceorientation":
                a(e.beta, e.gamma);
                break;
            case"devicemotion":
                a(2 * e.acceleration.x, 2 * e.acceleration.y);
                break;
            case"MozOrientation":
                a(50 * orientation.x, 50 * orientation.y)
        }
    }

    function a(e, t) {
        console.debug(typeof e), (e || t) && r("change", {beta: e, gamma: t})
    }

    function r(e, t) {
        for (var n = 0; l[e] && n < l[e].length; n++) l[e][n](t)
    }

    function s(e, t) {
        return (l[e] = l[e] || []).indexOf(t)
    }

    var c, l = {};
    e.accelerometer = {
        on: function (e, t) {
            s(e, t) < 0 && "function" == typeof t && l[e].push(t), l[e].length > 0 && i()
        }, off: function (e, t) {
            var i = s(e, t);
            i >= 0 && l[e].splice(i, 1), (l[e].length = 0) && n()
        }
    }
}(peppers = peppers || {}, window);
var peppers;
!function (e) {
    function t(t) {
        function n(t) {
            r.toggleClass("pep-placeholder__text_hidden", "keypress" == t.type || !!e(this).val())
        }

        function i() {
            var e = o();
            return t.data("placeholder", e), t.attr("placeholder", ""), e
        }

        function o() {
            return t.attr("placeholder") || t.data("placeholder")
        }

        var a, r;
        this.init = function (o) {
            this.destroy();
            var s = i();
            t.wrap("<div class='pep-placeholder'></div>"), r = e("<div class='pep-placeholder__text'>" + (e.isFunction(o) ? o(s) || "" : s) + "</div>").insertBefore(t).addClass(t.get(0).className), t.addClass("pep-placeholder__input"), a = t.parent(), t.on("keypress  keyup  change  input:empty", n)
        }, this.destroy = function () {
            a && (a.after(t), a.remove(), a = void 0), t.removeClass("pep-placeholder__input");
            var e = o();
            t.data("placeholder", ""), t.attr("placeholder", e), t.off("keypress  keyup  change  input:empty", n)
        }
    }

    e.fn.pepPlaceholder = function (n) {
        this.each(function () {
            var i = e(this), o = i.data("pepPlaceholder");
            o || i.data("pepPlaceholder", o = new t(i)), o.init(n)
        })
    }
}(jQuery), function (e) {
    function t(e, t) {
        this.x = e, this.y = t
    }

    t.prototype.subtract = function (e) {
        return new t(this.x - e.x, this.y - e.y)
    }, t.prototype.add = function (e) {
        return new t(this.x + e.x, this.y + e.y)
    }, t.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, t.prototype.distance = function (e) {
        return this.subtract(e).length()
    }, t.prototype.toString = function () {
        return "[Point(" + this.x + ", " + this.y + ")]"
    }, t.distance = function (e, t) {
        return t.subtract(e).length()
    }, t.prototype.clone = function () {
        return new t(this.x, this.y)
    }, e.Point = t
}(peppers = peppers || {});
var peppers;
!function (e) {
    function t(e) {
        var t = $.Deferred(), n = $("<img/>").addClass("image-preloader");
        return n.attr("crossOrigin", "Anonymous"), n.on("load", function () {
            t.resolve(n)
        }), n.on("error", function (e) {
            t.reject(e)
        }), n.attr("src", e), $(document.body).append(n), t.promise()
    }

    function n(e, t) {
        var n = $(e).width(), i = $(e).height();
        t = t || {}, t.width = t.width || n, t.height = t.height || i;
        var o = Math.min(1, t.width / n, t.height / i);
        t.width = Math.round(n * o), t.height = Math.round(i * o);
        var a = document.createElement("canvas");
        a.width = t.width, a.height = t.height;
        var r = a.getContext("2d");
        return r.drawImage(e.get(0), 0, 0, n, i, 0, 0, t.width, t.height), {
            width: t.width,
            height: t.height,
            data: r.getImageData(0, 0, t.width, t.height).data
        }
    }

    e.load = t, e.getImageData = n
}(peppers = peppers || {});
var peppers;
!function (e) {
    e.trimText = function (e, t, n) {
        n = n || 1;
        var i = [], o = e.split(/\r?\n/g);
        if (t = Math.max(t, e.length / n), o.length > 1) for (var a = 0; a < o.length; a++) o.splice(a, 1, trimText(o[a], t)); else for (o = e.split(" "); o.length > 0;) {
            var r = [], s = 0;
            do {
                var c = o.shift();
                s += c.length, r.push(c)
            } while (o.length > 0 && s + .5 * o[0].length < t);
            o.length > 0 && r.length > 1 && ["a", "the", "is", "of"].indexOf(r[r.length - 1].toLowerCase()) >= 0 && o.unshift(r.pop()), i.push(r.join(" "))
        }
        return i
    }
}(kaspersky = kaspersky || {});
var kaspersky;
!function (e, t) {
    function n() {
        var e = $(t.body), n = Math.max(e.width(), screen.width),
            o = (Math.max(e.height(), screen.height), $(".transition-wrapper"));
        0 === o.length && (o = $("<div class='transition-wrapper'>"), e.append(o));
        for (var a = n / 10 + 1, r = 100 / 86.55 * a + 1, s = [], c = {}, l = 0, d = 0, u = 0; u < 1; u++) {
            d = 0;
            for (var p = 0; p < 2; p++) {
                var h = $("<div class='transition-hexagon-bg'><div class='transition-hexagon'>");
                s.push(h), o.append(h);
                var f = l % 2 == 0;
                h.css({width: a + "px", height: r + "px", left: p - (f ? a / 2 : 0) + "px", top: u + "px"}), d++
            }
            l++
        }
        $("<div></div>").addClass("transition__preloader").appendTo(o), o.addClass("transition-wrapper_initialized"), this.opened = !1, this.fadeIn = function () {
            this.opened = !1, $.each(s, i(!0, c))
        }, this.fadeOut = function () {
            this.opened = !0, $.each(s, i(!1, c)), o.addClass("transition-wrapper_fade-out")
        }, this.getDelay = function () {
            return 800 + c.delay
        }, this.fadeOut()
    }

    function i(e, t) {
        return t.delay = 0, function () {
            var n = $(this), i = Math.round(30 * Math.random() * 20);
            t.delay = Math.max(t.delay, i), setTimeout(function () {
                n.toggleClass("transition-hexagon_a-out", !e).toggleClass("transition-hexagon_a-in", e)
            }, i)
        }
    }

    e.Transition = new n
}(kaspersky = kaspersky || {}, document);
var kaspersky;
!function (e) {
    function t() {
        function e() {
            r.css("height", $(this).outerHeight() + parseInt(r.css("paddingTop")) + parseInt(r.css("paddingBottom")))
        }

        var t = $(this).parent(), n = t.find(".checkbox-nth"), i = n.index(this), o = t.find(".checkbox-nth-item");
        o.off("checkbox:change");
        var a = o.eq(i).on("checkbox:change", e), r = t.find(".checkbox-nth-container");
        r.css({height: a.outerHeight() + parseInt(r.css("paddingTop")) + parseInt(r.css("paddingBottom"))}), setTimeout(function () {
            var e = t.find(".checkbox-nth-container");
            e.css({height: a.outerHeight() + parseInt(e.css("paddingTop")) + parseInt(e.css("paddingBottom"))})
        }, 50)
    }

    $(e.documentElement).on("change", ".checkbox-nth", t)
}(document), function (e, t, n) {
    function i(e) {
        var t = e.find(".clip-path rect, .back-btn-svg__mask rect");
        t.attr({y: "50%", height: "0%"});
        var i = {height: 0};
        e.hover(function (e) {
            var a = o[e.type];
            n.to(i, a.duration, {
                height: a.tween.height, ease: a.tween.ease, onUpdate: function () {
                    t.attr({y: 50 - .5 * i.height + "%", height: i.height + "%"})
                }
            })
        })
    }

    var o = {
        mouseenter: {duration: .4, tween: {ease: Sine.easeOut, height: 102}},
        mouseleave: {duration: .2, tween: {ease: Sine.easeIn, height: 0}}
    };
    e.fn.hexButton = t.jQueryConstructor("hexButton", i)
}(jQuery, peppers = peppers || {}, TweenLite);
var peppers;
!function (e, t) {
    function n(e) {
        function n() {
            return s = new IScroll(e.get(0), {
                scrollX: !1,
                scrollbars: "custom",
                mouseWheel: !0,
                momentum: !1,
                disableMouse: !0,
                disablePointer: !0,
                disableTouch: !1,
                bindToWrapper: !0,
                keyBindings: !0
            }), s.on("refresh", r), s.on("scrollStart", o), s.on("scrollEnd", a), s.on("scrollCancel", i), e.parent().append(c = e.find(".iScrollLoneScrollbar")), this
        }

        function i() {
            clearInterval(l)
        }

        function o() {
            var t = this;
            l = setInterval(function () {
                0 == t.y && -1 == t.directionY ? e.trigger("scroll:top") : t.hasVerticalScroll && e.trigger("scroll:scrolled")
            }, 50), this.y - this.maxScrollY < 50 && e.trigger("scroll:bottom")
        }

        function a() {
            clearInterval(l), 0 === this.y && e.trigger("scroll:top"), this.y - this.maxScrollY < 50 && e.trigger("scroll:bottom")
        }

        function r() {
            0 === this.y ? e.trigger("scroll:top") : e.trigger("scroll:scrolled"), e.closest(".scroll").trigger("scroll:refresh"), s.hasVerticalScroll ? s.indicators[0].wrapper.classList.remove("is-disabled") : s.indicators[0].wrapper.classList.add("is-disabled")
        }

        var s, c, l;
        e.find("a").on("click", function (e) {
            s && (console.debug(">>>", s.moved), s.moved && e.preventDefault())
        }), this.scrollTo = function (e) {
            return s && s.scrollTo(0, e, 200), this
        }, this.refresh = function () {
            return t.checkMobile.css.isMobile() ? (s && (s.destroy(), c.remove()), s = void 0) : s || n(), s && s.refresh(), this
        }
    }

    e.fn.scrollbarCustom = t.jQueryConstructor("scrollCustom", n)
}(jQuery, peppers = peppers || {});
var peppers;
!function (e, t) {
    function n() {
        clearInterval(c);
        var t = e(this).is(":checked");
        t || (c = setInterval(o, g), o()), i(t), e.cookie("muted", t ? 1 : 0, {path: "/", expires: 3650});
        var n = e(".sound").get(0);
        void 0 !== localStorage.sound_progress && (n.currentTime = parseFloat(localStorage.sound_progress)), n.ontimeupdate = function () {
            localStorage.sound_progress = n.currentTime
        }
    }

    function i(e) {
        e ? h.get(0).pause() : h.get(0).play()
    }

    function o() {
        for (var e = r(), t = 0; t < p.length; t++) p[t].css("height", 100 * e(t / (p.length - 1)) + "%")
    }

    function a(e, t) {
        return t ? t + e[0].toUpperCase() + e.substr(1) : e
    }

    function r() {
        for (var e = [], t = 1 + 6 * Math.random(), n = 2 * Math.random() * Math.PI; e.length < t;) e.push(s(n));
        return function (t) {
            for (var n = 0, i = 0; i < e.length; i++) n += e[i](t);
            return .5 + n / e.length * .5
        }
    }

    function s(e) {
        var t = 2 * Math.floor(1 + 3 * Math.random()) * Math.PI;
        return function (n) {
            return Math.sin(e + n * t)
        }
    }

    for (var c, l = e(".mute-btn_false"), d = l.find("label"), u = [1, 2, 3, 7, 18, 11, 25, 13, 26, 47, 26, 18, 25, 11, 18, 7, 3, 2, 1], p = [], h = e(".sound", top.document), f = 0; f < u.length; f++) {
        var m = e("<span></span>").addClass("mute-btn__line");
        p.push(m), m.appendTo(d).after(" ").css("height", u[f] / .47 + "%")
    }
    var g = function (e) {
        for (var t, n = ["", "webkit", "moz", "ms", "o"], i = 0; !t && i < n.length; i++) t = e[a("transitionDuration", n[i])];
        var o = /((?:\d*\.)?\d+)(m?s)/.exec(t || "0s"), r = parseFloat(o[1]);
        switch (o[2]) {
            case"s":
                return 1e3 * r;
            default:
            case"ms":
                return r
        }
    }(getComputedStyle(m.get(0)));
    peppers.checkMobile.css.isMobile() && e.cookie("muted", 1, {
        path: "/",
        expires: 3650
    }), l.find(".mute-btn__checkbox").change(n).prop("checked", 1 === parseInt(e.cookie("muted"))).change()
}(jQuery, document),

    function (e, t, n, i, o) {
        function a(e, t, n) {
            function i() {
                var e = .5 * t;
                a(s, e, .5),
                    a(c, e, .5),
                n || a(h, e + .25, .3)
            }

            function a(e, t, n, i, a) {
                e.css("transform", i || "scale(0)"),
                    o.to(e.get(0), n || .5, {
                        transform: a || "scale(1)",
                        delay: t
                    })
            }

            function r() {
                o.to(e.get(0), .3, {
                    transform: "scale(0)",
                    onComplete: function () {
                        e.trigger(p)
                    }
                })
            }

            e.click(function () {
                //e.trigger(u, t)
                if (e.find(".earth-popup__content-link")[0].getAttribute("href")) {
                    window.open(e.find(".earth-popup__content-link")[0].getAttribute("href"))
                }
            });
            var s = e.find(".earth-popup__preview-hexagon"),
                c = e.find(".earth-popup__item-shadow"),
                h = e.find(".earth-popup__content-container");
            this.init = function (e) {
                switch (e) {
                    case l:
                        i();
                        break;
                    case d:
                        r()
                }
            }
        }

        function r(e, t, n) {
            function a() {
                i(".toogle-map-mobile").stop().fadeOut(300),
                    o.to(e.get(0), .5, {
                        transform: "translate(0, 0)"
                    })
            }

            function r() {
                i(".toogle-map-mobile").stop().fadeIn(300),
                    o.to(e.get(0), .3, {
                        transform: "translate(0, 150%)",
                        onComplete: function () {
                            e.trigger(p)
                        }
                    })
            }

            e.find(".mobile-tip__btn").click(function () {
                e.trigger(u, t)
            }),
                this.init = function (e) {
                    switch (e) {
                        case l:
                            a();
                            break;
                        case d:
                            r()
                    }
                }
        }

        var s, c, l = "show",
            d = "hide",
            u = "item:select",
            p = "item:remove";
        i.fn.earthPopupItem = function (e, t) {
            return this.each(function (n, o) {
                var r = i(this),
                    s = r.data("earthPopupItem");
                s || r.data("earthPopupItem", s = new a(r, n, t)),
                    s.init(e)
            })
        },
            i.fn.earthMobileTip = function (e, t) {
                return console.log(e),
                    this.each(function (n, o) {
                        itm = new r(i(this), n, t),
                            itm.init(e)
                    })
            },
            e.getHexaspherePopup = function (e, n, o) {
                var a, r, h;
                return s || (c = i("#earth-popup[type='text/x-handlebars-template']"), s = t.compile(c.html())),
                    a = i(s(e)).appendTo(c.parent()),
                    a.localization("en"),
                o && (scriptMobile = i("#earth-mobile-tip[type='text/x-handlebars-template']"), templateMobile = t.compile(scriptMobile.html()),
                    collectionMobile = i(templateMobile(e)).appendTo(scriptMobile.parent()), h = collectionMobile.on(u,
                    function (t, i) {
                        n(e[i])
                    }).on(p,
                    function (e) {
                        i(e.target).remove()
                    }).earthMobileTip(l)),
                    r = a.find(".earth-popup__item").on(p,
                        function () {
                            a.remove(),
                                a = void 0,
                                r = void 0
                        }).earthPopupItem(l, !!o),
                o || r.on(u,
                    function (t, i) {
                        n(e[i])
                    }),
                    {
                        element: a.get(0),
                        action: function (e) {
                            //a && a.toggleClass("earth-popup_moving", !0 === e || "mousedown" === e)
                        },
                        close: function () {
                            r && r.earthPopupItem(d),
                            h && h.earthMobileTip(d),
                                r = void 0,
                                h = void 0
                        }
                    }
            }
    }(kaspersky = kaspersky || {},
        Handlebars, document, jQuery, TweenLite);

var kaspersky;
!function (e, t) {
    $(".js-best-of-week").each(function () {
        iScroll = new IScroll(this, {
            scrollX: !1,
            scrollbars: "custom",
            mouseWheel: !0,
            momentum: !1,
            interactiveScrollbars: !0,
            disableMouse: !0,
            disablePointer: !0,
            disableTouch: !1,
            bindToWrapper: !0,
            keyBindings: !0
        })
    })
}(document, window)

    , function (e, t, n, i, o) {
    function a(e) {
        function n(n) {
            var a = t(n.currentTarget);
            if (a.hasClass("disabled")) return !1;
            if (a && this.activeYears) {
                var r = this.activeYears[a.data("year")];
                if (r && r.length > 0) {
                    var s = Math.floor(Math.random() * r.length);
                    return void (i.location = r[s])
                }
            }
            e.is(".timeline_static") || o(a)
        }

        function o(n) {
            if (currentYear != n.data("year")) {
                var o = n.data("year"), a = i.PLANET, r = !1;
                a ? a.state == a.IDLE && (a.showYear(o), r = !0) : r = !0, r && (t(n).addClass("active").siblings().removeClass("active"), t(e).trigger("timeline:change", o), i.currentYear = o);
            }
        }

        this.init = function (o, a) {
            this.years = o, this.activeYears = !1, i.currentYear || (i.currentYear = a);
            for (index in o) {
                var r = o[index] == a ? "js-timeline-item timeline-new__item active" : "js-timeline-item timeline-new__item";
                e.append('<div onclick="updateLocationData(' + o[index] + ')" data-year="' + o[index] + '" class="' + r + '">' + window.myProTypesName[index] + "</div>")
            }
            e.find(".js-timeline-item").on("click", t.proxy(n, this))
        }, this.initLinks = function (e, n) {
            e && (this.activeYears = e.reduce(function (e, t) {
                e[t.year] = e[t.year] || [];
                var i = null;
                if (n) {
                    var o = t.works.find(function (e) {
                        return e.user_id == n
                    });
                    i = o ? o.slug : null
                }
                var a = i ? "artworks/" + i : "predictions/" + t.id;
                return e[t.year].push(langUrl + a), e
            }, {}), this.years.forEach(t.proxy(function (e) {
                this.activeYears[e] && 0 != this.activeYears[e].length || t(".js-timeline-item[data-year=" + e + "]").addClass("disabled")
            }, this)))
        }
    }

    t.fn.pepTimeline = e.jQueryConstructor("$timeline", a)
}(peppers = peppers || {}, jQuery, createjs, window, document);
var peppers;
!function (e, t, n, i, o) {
    function a(o) {
        function a(e, t) {
            b.briefCommentsList("add", {user: p().user, comment: t}), C.refresh()
        }

        function r(i) {
            var a = arguments[3];
            u !== a && (g.hide(), m = l({brief_id: u = a}), m.done(s).fail(function (n) {
                t.modal(), e.alert("ERROR", n)
            }), n(".addwork-link", o).attr("href", e.addwork_link(u)), v.addCommentForm(null, u))
        }

        function s(e) {
            o.find(".brief-city-name").html(e.location && e.location.city), g.fadeIn(400), h = e, y.agreeVote(e).on("vote:vote", c), w.briefModalContent(e), b.briefCommentsList(e.comments), v.not(":first-of-type").toggle(e.comments && e.comments.length >= 5), v.find("textarea").attr("placeholder", n.fn.localization.getText("brief.comment.placeholder")), n(i.documentElement).trigger("resize:after"), C.refresh(), C.scrollTo(0)
        }

        function c(t, n) {
            if (h && "boolean" != typeof h.voted && !f) {
                if (!e.user.isAuthorized()) return void e.user.auth();
                if ("boolean" == typeof n) {
                    f = !0;
                    var i = n ? "agree" : "disagree";
                    d({brief_id: u, agree: i}).done(function (e) {
                        h[i] = e[i] || 1 + ~~(h[i] || 0), h.voted = i, y.agreeVote(h)
                    }).fail(function (t) {
                        e.alert(t)
                    }).always(function () {
                        f = !1
                    })
                }
            }
        }

        var l, d, u, p, h, f, m, g = o.children();
        o.on("modal-item:change", r);
        var v = o.find(".add-comment-form").on("add-comment-form:add", a),
            w = o.find(".brief-modal__cont").briefModalContent(),
            b = o.find(".brief-comments-list").briefCommentsList(), y = o.find(".agree-vote"), k = n(".show-graphics"),
            _ = k.find("a"), x = o.find(".scroll__masked"), C = x.scrollbarCustom().data("scrollCustom");
        x.on("scroll:scrolled", function (e) {
            k.removeClass("scroll-visible")
        }), x.on("scroll:top", function (e) {
            k.addClass("scroll-visible")
        }), n(i.documentElement).on("resize:after", function () {
            if (C.refresh(), k.css("right", n(".k-menu__authorization").outerWidth()), t.checkMobile.css.isMobile() || i.body.clientWidth < 1025) {
                var e = o.find(".brief-city-name--mobile");
                i.body.clientWidth - 2 * e.offset().left < k.outerWidth() + e.outerWidth() ? o.addClass("show-graphics--position-down") : o.removeClass("show-graphics--position-down")
            }
        }), o.on("modal-item:show  modal-item:hide", function (e) {
            m.always(function () {
                C.refresh(), o.find(".scroll").trigger(e.type.replace("modal-item", "scroll")), h.works_count > 0 && "modal-item:show" === e.type ? (_.attr("href", "prediction?brief_id=" + u), k.addClass("visible")) : (_.attr("href", "#"), k.removeClass("visible"))
            })
        });
        var j = null;
        o.on("modal-item:show", function () {
            m.always(function () {
                j || (j = e.get_metadata(), n("title").html(h.title), n('meta[property="og:title"]').attr("content", h.title), n('meta[property="og:description"]').attr("content", h.stripped_body), n('meta[property="og:image"]').attr("content", h.image_share), n('meta[property="og:url"]').attr("content", h.share_url), n('meta[name="description"]').attr("content", h.stripped_body))
            })
        }), o.on("modal-item:hide", function () {
            m.always(function () {
                j && (e.set_metadata(j), j = null)
            })
        }), o.on("scroll:do_refresh", function () {
            C.refresh()
        }), this.init = function (e, t, n, i) {
            i && (p = i), e && (l = e), n && (d = n), t && v.addCommentForm(t)
        }
    }

    n.fn.briefModal = t.jQueryConstructor("BriefModal", a)
}(kaspersky = kaspersky || {}, peppers = peppers || {}, jQuery, document, Handlebars);
var kaspersky, peppers;
!function (e, t, n, i, o) {
    function a(n) {
        function i() {
            a()
        }

        function o() {
            var e = t(".timeline-new"), n = e.data("$timeline");
            if (n) {
                var i = r.brief_attached, a = r.author_id;
                n.initLinks(i, a)
            } else e.one("timeline:init", function () {
                o()
            })
        }

        function a() {
            s.briefUser(r), r.is_panorama && c.briefPanorama(r), o()
        }

        var r = e.artwork, s = t(".js-brief-user", n), c = t(".brief__panorama", n);
        this.init = function () {
            i()
        }
    }

    function r(i) {
        function o() {
            if (!e.isAuthorized) return void (window.location = e.loginUrl + "?next=" + n.pathname);
            if (!e.liked) {
                e.liked = !0;
                var i = t(".user__button .user__button-counter").text();
                t(".user__button .user__button-counter").text(parseInt(i) + 1), t(".user__button").addClass("active"), t(".user__button .user__button-icon").html(c), e.likeApi({artwork_id: e.artwork.id}).fail(function (e) {
                    alert(e.statusText)
                })
            }
        }

        this.init = function (e) {
            t(".js-like-artwork").on("click", o)
        }
    }

    function s(e) {
        function n(t, n) {
            c || (c = new PNRM.GUI, s = window.panoramaViewer = new PNRM.Player(e, c));
            var i = t.points;
            if (i) {
                if ("string" == typeof i) {
                    i = t.points = JSON.parse(i);
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o], r = a.data.split(";");
                        a.x = parseFloat(r[0]), a.y = parseFloat(r[1]), a.z = parseFloat(r[2]), a.name = a.brief_name, a.link = a.brief_id
                    }
                }
            } else t.points = [];
            d.finish().fadeIn(100), h.finish().fadeOut(100), s.createPanorama(t, function () {
                d.finish().fadeOut(100), n && n(), f || h.finish().fadeIn(100)
            }), l = s.VR
        }

        function o(e) {
            l.enableVR(e), s.fullscreenToggle(e), h.finish().hide()
        }

        function a() {
            Util.addEvent("up", m, r), Util.addEvent("move", m, function () {
                h.finish().fadeOut(), Util.removeEvent("down", m, a), r(), f = !0
            })
        }

        function r() {
            Util.removeEvent("up", m, r), Util.removeEvent("move", m)
        }

        var s, c, l, d = t(".transition__preloader", e);
        this.init = function (e, t) {
            n(e, t)
        };
        var u = t(".js-vr-tutor, .js-close-vr-tutor"), p = t("body");
        t(".js-open-vr").on("click", function () {
            u.toggleClass("is-active"), p.toggleClass("is_vr_tutor")
        }), t(i).on("click", ".js-close-vr-tutor, .js-tutor-done", function () {
            u.toggleClass("is-active"), p.toggleClass("is_vr_tutor")
        }), t(".to-vr, .js-to-vr").click(function () {
            void 0 !== window.DeviceOrientationEvent && "function" == typeof window.DeviceOrientationEvent.requestPermission ? window.DeviceOrientationEvent.requestPermission().then(function (e) {
                "granted" == e && o(!0)
            }).catch(function (e) {
                console.error("THREE.DeviceOrientationControls: Unable to use DeviceOrientation API:", e)
            }) : o(!0)
        });
        var h = t(".tooltip-360", e);
        h.hide();
        var f = !1, m = t(window);
        Util.addEvent("down", m, a)
    }

    t.fn.brief = peppers.jQueryConstructor("brief", a);
    var c = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.035 3c1.083 0 1.932.296 2.545.889s.92 1.41.92 2.454c0 .71-.255 1.438-.765 2.18-.255.38-.55.728-.884 1.044l-4.469 4.29A.574.574 0 0 1 8 14a.574.574 0 0 1-.382-.142l-4.47-4.291a5.392 5.392 0 0 1-.836-.972C1.772 7.82 1.5 7.07 1.5 6.343c0-1.043.307-1.861.92-2.454C3.033 3.296 3.882 3 4.965 3c.558 0 1.147.19 1.768.569.43.253.853.577 1.267.972.414-.395.836-.72 1.267-.972.62-.38 1.21-.569 1.768-.569z"/></svg>';
    t.fn.briefUser = function (e) {
        this.each(function () {
            var n = t(this), i = n.data("BriefUser");
            i || n.data("BriefUser", i = new r(n)), i.init(e)
        })
    }, t.fn.briefPanorama = peppers.jQueryConstructor("briefPanorama", s)
}(kaspersky = kaspersky || {}, jQuery, window.location, document, Handlebars);
var kaspersky;
!function (e, t, n, o, a, r, s, c) {
    function l(t) {
        for (var n in t) t.hasOwnProperty(n) && /^\d+$/.test(n) && t[n].briefs.sort(function (e, t) {
            return t.votes - e.votes
        }).forEach(function (t) {
            t.link = e.brief_page_link(t), t.names = [{
                list: e.trimText(t.name, 18, 3),
                type: "desktop"
            }, {list: e.trimText(t.name, 10, 5), type: "mobile"}]
        });
        return t
    }

    function d(e, t, n) {
        function i(e) {
            o("mouseenter" == e.type, !0)
        }

        function o(t, n) {
            function i(e, t, n, i) {
                (t ? e.find("." + n) : e).toggleClass(n + "_visible", i)
            }

            var o = new r.Event("visible:toggle");
            if (o.data = {visible: t, mouse: !!n}, l.dispatchEvent(o), c !== t) {
                c = t;
                var u = e;
                i(u, !1, d + "point", t), i(u, !0, d + "concept-info", t), i(u, !0, "concept-name__line", t), clearTimeout(s), s = setTimeout(function () {
                    a = t
                }, t ? 300 : 0)
            }
        }

        var a, s, c, l = this, d = "hexagonal-map__";
        this.jQueryElement = e, this.initVisible = o, this.DOMElement_constructor(e.get(0)), this.x = t.x, this.y = t.y, t.x > .5 * n && e.find(".concept-name").addClass("concept-name_right"), e.on("click", function (e) {
            if (!a) return e.preventDefault(), !1
        }), e.on("mouseenter  mouseleave", i), this.mapPoint = e.find(".hexagonal-map__point").css({transform: "scale(0)"})
    }

    function u(e) {
        function n(e) {
            t.load(e).done(function (e) {
                d.resolve({
                    image: e.get(0),
                    info: {imgWidth: r, imgHeight: s, width: o, height: o, dx: -i, dy: -i}
                }), e.remove()
            }).fail(function () {
                var t = "images/hex.svg";
                e != t && n(t)
            })
        }

        var i = 4, o = 2 * i, r = o + 1, s = o + 1,
            c = {alpha: 1, color: "#31B987", points: "2.5,8.5 0.5,4.5 2.5,0.5 6.5,0.5 8.5,4.5 6.5,8.5"};
        c = a.extend(c, e);
        var l = '<svg x="0px" y="0px" width="9" height="9"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon vector-effect="non-scaling-stroke" style="opacity:{{alpha}};fill:{{color}};" points="{{points}}"/><polygon vector-effect="non-scaling-stroke" style="fill:none;stroke:{{color}};stroke-miterlimit:10;" points="{{points}}"/></svg>';
        l = l.replace(/\{{2}([_\w\d]+)\}{2}/g, function (e, t) {
            return c[t]
        });
        var d = a.Deferred();
        return n("data:image/svg+xml;utf8," + encodeURIComponent(l)), d.promise()
    }

    function p(e) {
        this.canvases = [];
        for (var t = 0; t < e; t++) {
            var n = o.createElement("canvas");
            n.context = n.getContext("2d"), this.canvases.push(n)
        }
    }

    function h(e, t, n, i) {
        var o = 4 * (Math.floor(n) * i + Math.floor(t));
        return e.slice(o, o + 4)
    }

    function f(e) {
        for (var t = e[0].clone(), n = e[0].clone(), i = 0; i < e.length; i++) t.x = Math.min(t.x, e[i].x), t.y = Math.min(t.y, e[i].y), n.x = Math.max(n.x, e[i].x), n.y = Math.max(n.y, e[i].y);
        return {x: t.x, y: t.y, width: n.x - t.x, height: n.y - t.y, left: t.x, top: t.y, bottom: n.y, right: n.x}
    }

    var m, g = (Math.sqrt(3), .5);
    a.fn.hexagonalMap = function (t) {
        var n;
        this.each(function () {
            m || (m = a.when(u({alpha: .4})));
            var i = a(this), o = i.data("hexagonal-map");
            o || i.data("hexagonal-map", o = new e.HexagonalMap(i, i.find(".hexagonal-map__canvas-map").get(0), i.find(".hexagonal-map__canvas-shadow").get(0), {
                size: 8,
                offset: 0,
                border: 0
            })), o.init(n = n || t({location_id: e.location}, l))
        })
    };
    var v = r.extend(d, r.DOMElement);
    v.show = function (e) {
        s.to(this.mapPoint.get(0), .4, {transform: "scale(1)", delay: e || 0, ease: Back.easeOut})
    }, v.hide = function (e) {
        var t = this;
        this.jQueryElement.off(), s.to(this.mapPoint.get(0), .4, {
            transform: "scale(0)",
            delay: e || 0,
            ease: Sine.easeIn,
            onComplete: function () {
                t.jQueryElement.remove(), delete t.mapPoint, delete t.jQueryElement
            }
        })
    }, v.scale = function (e) {
        this.scaleX = this.scaleY = e, this.htmlElement && this._handleDrawEnd()
    }, v._handleDrawEnd = function () {
        this.DOMElement__handleDrawEnd();
        var e = this.htmlElement;
        if (e) {
            var t = e.style;
            t.transform = t.transform.replace(/px/g, "")
        }
    }, r.promote(d, "DOMElement"), e.HexagonalMap = function (e, n, c, l) {
        function u() {
            e.find(".hexagonal-map__container").css({
                transform: "scale(" + A.scale + ")",
                width: A.width * A.scale,
                height: A.height * A.scale
            });
            for (var t = 1 / A.scale, n = 0; n < H.length; n++) H[n].scale(t)
        }

        function v(e, t) {
            E = t, y()
        }

        function w(e) {
            console.debug(e), I.find(".city-name__city").html(e.location && e.location.city || "CITY"), I.find(".city-name__country").html(e.location && e.location.country || "COUNTRY"), S = e, y()
        }

        function b() {
            for (var e = a.Deferred(); H.length;) {
                var t = H.pop();
                O.removeChild(t), t.hide()
            }
            if (T && (T.destroy(), T = void 0), O.children.length > 0) {
                $([e.promise()]);
                for (var n = 0; n < O.children.length; n++) !function (t, n) {
                    s.to(t, .25, {
                        alpha: 0, delay: .2 + .1 * n, ease: Sine.easeOut, onComplete: function () {
                            O.removeChild(t), 0 === O.children.length && e.resolve()
                        }
                    })
                }(O.children[n], n)
            } else e.resolve();
            return e.promise()
        }

        function y() {
            S && E && a.when(m, t.load(S[E].url), b()).done(k).fail(function (e) {
                console.log(e)
            })
        }

        function k(e, i) {
            function r() {
                M(m);
                for (var e = S[E].briefs, t = 0; t < e.length; t++) {
                    var i = e[t], o = a(D(i)), r = o.find(".map-point"), s = !1;
                    if (i.image && i.image.url) {
                        var c = "string" == typeof i.image.url ? i.image.url : i.image.url.first;
                        console.log(c), c && !/no (image|preview)/i.test(c) || (s = !0)
                    } else s = !0;
                    r.toggleClass("map-point_" + i.type, !!i.type).toggleClass("map-point_no-image", s).toggleClass("map-point_no-works", !(i.works_count > 0)), o.find(".hexagonal-map__concept-info").toggleClass("hexagonal-map__concept-info_no-image", s), U.append(o);
                    var l = new d(o, p.points[h[t]], n.width);
                    O.addChild(l), H.push(l), l.addEventListener("visible:toggle", function (e) {
                        e.data.mouse && T.toggle(!e.data.visible)
                    })
                }
                T && T.destroy(), T = new _(H).start(), u()
            }

            var s = e, c = t.getImageData(i, {width: 525}), p = x(c, s.info);
            i.remove();
            var h = C(p.points, p.centerPointIndex, S[E].briefs.length), m = f(p.points);
            m.width += s.info.imgWidth, m.height += s.info.imgHeight, L.clear(), L.size(m.width, m.height);
            for (var g = 0; g < p.points.length; g++) {
                var v = s;
                !function (e, t, n, i) {
                    e.context.drawImage(n, l.border + t.dx + i.x, l.border + t.dy + i.y, t.imgWidth, t.imgHeight)
                }(L.random(), v.info, v.image, p.points[g])
            }
            z ? (a(o).one("fade:complete", r), z.resolve(), z = void 0) : r()
        }

        function _(e) {
            function t() {
                a && 0 != a.length || (a = n(e)), r && r.initVisible(!1), (r = a.pop()) && r.initVisible(!0)
            }

            function n(e) {
                for (var t = [].concat(e), n = t.length; n > 0; n--) {
                    var i = Math.random() * n;
                    t.push(t.splice(~~i, 1)[0])
                }
                return t
            }

            var i, o, a, r, s = this;
            this.destroy = function () {
                this.stop(), i = 3
            }, this.toggle = function (e) {
                e ? this.start() : this.stop()
            }, this.start = function () {
                if (1 != i && 3 != i) return o = setInterval(t, 5e3), t(), s
            }, this.stop = function () {
                if (2 != i && 3 != i) return r && r.initVisible(!1), r = void 0, clearInterval(o), s
            }
        }

        function x(e, n) {
            for (var i, o = e.data, a = e.width, r = e.height, s = -n.dx, c = -n.dy, d = Math.ceil(1.5 * n.width + l.offset), u = Math.ceil(n.height / 2 + l.offset), p = [], f = new t.Point(.5 * a, .5 * r), m = 999999, v = 0, w = c; w < r; w += u, v++) for (var b = 0, y = s + (1 & v) * d * .5; y < a; y += d, b++) if (h(o, y, w, a)[3] >= g) {
                var k = new t.Point(y, w);
                k.index = {h: b, v: v};
                var _ = k.distance(f);
                (_ < m || !i) && (m = _, i = p.length), p.push(k)
            }
            return console.debug(v, b), {points: p, centerPointIndex: i}
        }

        function C(e, t, n) {
            function o(e, t) {
                for (var n = [], i = t.length - 1; i >= 0; i--) j(e, t[i]) && n.push(t.splice(i, 1)[0]);
                return n
            }

            for (var a = [].concat(e), r = [t], s = [0], c = a.splice(t, 1).pop(), l = [].concat(o(c, a)); a.length > 0 && r.length < n;) {
                var d = Math.floor(Math.random() * a.length);
                c = a.splice(d, 1).pop(), a != l && l.push.apply(l, o(c, a));
                var u = c.distance(r[0]);
                for (i = 1; i < s.length && u > s[i];) i++;
                s.splice(i, 0, u), r.splice(i, 0, e.indexOf(c)), 0 === a.length && (console.debug("use neighbors"), a = l)
            }
            return r
        }

        function j(e, t) {
            var n = Math.abs(e.index.v - t.index.v), i = Math.abs(e.index.h - t.index.h);
            return 0 == i && n < 4 && n % 2 == 0 || n < 4 && n % 2 == 1 && (0 == i || e.index.h + (e.index.v % 2 * 2 - 1) == t.index.h) || 0 == n && i < 2
        }

        function M(e) {
            var t;
            c.width = n.width = e.width, c.height = n.height = e.height, A.width = parseFloat(n.width), A.height = parseFloat(n.height);
            for (var i = [], o = 0; o < L.canvases.length; o++) {
                t = new r.Bitmap(L.canvases[o]), t.alpha = 0, O.addChild(t);
                var l = a.Deferred();
                s.to(t, .5, {
                    alpha: 1,
                    delay: .2 + .1 * o,
                    ease: Sine.easeOut,
                    onComplete: l.resolve
                }), i.push(l.promise())
            }
            $(i).then(function () {
                for (var e = Math.max(.08, Math.min(.2, 1 / H.length)), t = 0; t < H.length; t++) H[t].show(.2 + t * e)
            })
        }

        function $(e) {
            function t() {
                o = !0
            }

            function i() {
                O.update(), q.cache(0, 0, n.width, n.height), P.update(), o && (r.Ticker.removeEventListener("tick", i), s.resolve())
            }

            var o, s = a.Deferred();
            return r.Ticker.addEventListener("tick", i), a.when.apply(null, e).then(t), i(), s.promise()
        }

        var S, E, T, z = void 0, I = e.closest(".kaspersky-app").find(".city-name"),
            D = Handlebars.compile(e.find('[type="text/x-handlebars-template"]').html()), O = new r.Stage(n),
            P = new r.Stage(c), L = new p(5), q = function (e, t) {
                var n = new r.Bitmap(e);
                return t.addChild(n), n.alpha = .2, n.filters = [new r.ColorFilter(1, 1, 1, 2.5), new r.BlurFilter(6, 6, 2)], n
            }(n, P), H = [], U = e.find(".hexagonal-map__points-cont"), A = {};
        a(o.documentElement).on("resize:after", function () {
            A.scale = parseFloat(a(this).css("fontSize")) / 18, u()
        }), a(o).on("timeline:change", v), this.init = function (e) {
            e.done(w)
        }
    }, p.prototype.size = function (e, t) {
        1 == arguments.length && (t = e);
        for (var n = 0; n < this.canvases.length; n++) this.canvases[n].width = e, this.canvases[n].height = t;
        return this
    }, p.prototype.random = function () {
        var e = Math.random() * this.canvases.length;
        return this.canvases[Math.floor(e)]
    }, p.prototype.join = function (e) {
        var t, n = this.canvases;
        t = "number" == typeof e ? n[e].context : e.getContext("2d");
        for (var i = 0; i < n.length; i++) i != e && t.drawImage(n[i], 0, 0, n[i].width, n[i].height);
        return n[e]
    }, p.prototype.clear = function () {
        for (var e = 0; e < this.canvases.length; e++) this.canvases[e].context.clearRect(0, 0, this.canvases[e].width, this.canvases[e].height)
    }
}(kaspersky = kaspersky || {}, peppers = peppers || {}, window, document, jQuery, createjs, TweenLite, window.location);
var kaspersky, peppers;
!function (e, t, n) {
    function i(i) {
        function o(i) {
            i.preventDefault(), s(c.serialize()).done(function () {
                t.modal(), n.alert(e.fn.localization.getText("add_prediction.success") || "ADD SUCCESS")
            }).fail(function (e) {
                n.alert(e)
            })
        }

        function a() {
            i.find(".form").blink()
        }

        function r() {
        }

        var s, c = i.find("form").on("form:submit", o);
        i.on("modal-item:show", a).on("modal-item:hide", r), this.init = function (e) {
            s = e || s
        }
    }

    e.fn.addPrediction = function (t) {
        this.each(function () {
            var n = e(this), o = n.data("add-prediction");
            o || n.data("add-prediction", o = new i(n)), o.init(t)
        })
    }
}(jQuery, peppers = peppers || {}, kaspersky = kaspersky || {});
var peppers, kaspersky;
!function (e, t, n) {
    function i(e) {
        function i(e) {
            e.preventDefault(), r(s.serialize()).done(function () {
                n.user.accept_terms(), t.modal()
            }).fail(function (e) {
                n.alert(e)
            })
        }

        function o() {
            e.find(".form").blink()
        }

        function a() {
        }

        var r, s = e.find("form").on("form:submit", i);
        e.on("modal-item:show", o).on("modal-item:hide", a), this.init = function (e) {
            r = e || r
        }
    }

    e.fn.termsAccepted = function (t) {
        this.each(function () {
            var n = e(this), o = n.data("terms-accepted");
            o || n.data("terms-accepted", o = new i(n)), o.init(t)
        })
    }
}(jQuery, peppers = peppers || {}, kaspersky = kaspersky || {});
var peppers, kaspersky;
!function (e, t, n, i) {
    function o(o) {
        function a(e) {
            e.preventDefault(), o.trigger("modal:hide")
        }

        function r() {
            s || c || "alert" !== n.hash.getHash()[1] || n.modal()
        }

        var s, c, l = this, d = o.find(".modal-message__title"), u = o.find(".modal-message__body");
        e(t).on("hashchange", r), o.find(".button_no-lines").on("click", a), i.alert = function (t, i, o) {
            "already voted: agree" == t ? t = e.fn.localization.getText("voted.agree") || "already voted: agree" : "already voted: disagree" == t && (t = e.fn.localization.getText("voted.disagree") || "already voted: disagree"), l.init(t, i), n.modal("alert", o || location.hash)
        }, this.init = function (e, t) {
            d.html(s = e || ""), u.html(c = t || ""), r()
        }
    }

    e.fn.alert = n.jQueryConstructor("alert", o)
}(jQuery, window, peppers = peppers || {}, kaspersky = kaspersky || {});
var peppers, kaspersky;
!function (e, t) {
    function n() {
        var t = o();
        e(".authorization").toggleClass("authorization_authorized", !!t), e(".predictions__likes").toggleClass("visible", !!t), e(".predictions__rank").toggleClass("visible", !!t)
    }

    var i, o;
    e.fn.authorization = function (a) {
        return o = a || o, !i && this.length > 0 && (i = !0, e(t).on("login:change", n), n()), this
    }
}(jQuery, window), function (e, t, n) {
    function i(e, t) {
        var n = new FileReader;
        n.onload = function (e) {
            var n = new DataView(e.target.result);
            if (65496 != n.getUint16(0, !1)) return t(-2);
            for (var i = n.byteLength, o = 2; o < i;) {
                var a = n.getUint16(o, !1);
                if (o += 2, 65505 == a) {
                    if (1165519206 != n.getUint32(o += 2, !1)) return t(-1);
                    var r = 18761 == n.getUint16(o += 6, !1);
                    o += n.getUint32(o + 4, r);
                    var s = n.getUint16(o, r);
                    o += 2;
                    for (var c = 0; c < s; c++) if (274 == n.getUint16(o + 12 * c, r)) return t(n.getUint16(o + 12 * c + 8, r))
                } else {
                    if (65280 != (65280 & a)) break;
                    o += n.getUint16(o, !1)
                }
            }
            return t(-1)
        }, n.readAsArrayBuffer(e.slice(0, 65536))
    }

    function o(o) {
        function a(e) {
            var n = t.getFiles(e)[0];
            n && i(n, function (e) {
                c = e, s(n, c)
            })
        }

        function r(e, t) {
            for (var n = e.split(","), i = n[0].match(/:(.*?);/)[1], o = atob(n[1]), a = o.length, r = new Uint8Array(a); a--;) r[a] = o.charCodeAt(a);
            return new File([r], t, {type: i})
        }

        function s(i, a) {
            function r(e, n) {
                c = n, t.Image(i).rotate(l[a]).get(function (e, t) {
                    e || (d.off("user-pic-crop:save").userPicCrop(t, o.data("title")).on("user-pic-crop:save", s), p.val(""))
                })
            }

            function s(e, n) {
                var r = n.height * c.height / (n.width * c.width), s = Math.max(0, n.x), d = Math.max(0, n.y),
                    u = Math.max(0, Math.min(n.width, 1 - n.x, n.width + n.x)),
                    p = Math.max(0, Math.min(n.height, 1 - n.y, n.height + n.y)), h = u / n.width, f = p / n.height;
                t.Image(i).rotate(l[a]).crop(s * c.width, d * c.height, u * c.width, p * c.height).get(function (e, t) {
                    if (e) console.warn("upload error", e); else {
                        var i = document.createElement("canvas"),
                            a = i.width = Math.min(1e3, Math.max(t.width, t.height / r)), s = i.height = a * r;
                        console.log([a, s, t.width, t.height, t.height / r, Math.max(t.width, t.height / r), Math.min(1e3, Math.max(t.width, t.height / r))]);
                        i.getContext("2d").drawImage(t, 0, 0, t.width, t.height, a * (n.x < 0 ? 1 - h : 0), s * (n.y < 0 ? 1 - f : 0), a * h, s * f), o.trigger("upload-image:crop", i)
                    }
                })
            }

            var c, d = e(".js-user-pic-block");
            d.is(":visible") || peppers.modal("user-pic-crop", n.hash), t.getInfo(i, r)
        }

        var c = 1, l = {8: 270, 3: 180, 6: 90, 7: 270, 4: 180, 5: 90},
            d = peppers.checkMobile.css.isMobile() ? 484 : 333, u = {preview: {width: d, height: d}},
            p = e('<input class="upload-image__input" name="photo" type="file" accept=".jpg,.jpeg,.png" />');
        o.append(p), t.event && t.event.on(p.get(0), "change", a), function () {
            if (void 0 !== kaspersky.avatar64) {
                var e = r(kaspersky.avatar64, kaspersky.avatarName);
                i(e, function (t) {
                    c = t, s(e, c)
                })
            }
        }(), this.init = function (t, n) {
            switch (t) {
                case"upload":
                    break;
                case"init":
                    n && (u = e.extend(u, n))
            }
        }
    }

    e.fn.uploadImage = function (t, n) {
        return 1 === arguments.length && (n = t, t = "init"), this.each(function () {
            var i = e(this), a = i.data("upload-image");
            a || i.data("upload-image", a = new o(i)), a.init(t, n)
        })
    }
}(jQuery, FileAPI, window.location), function (e, t, n) {
    function i(i) {
        function a(e) {
            var t = i.find(e);
            return function (e) {
                o(t, e)
            }
        }

        function r(e) {
            var n = i.find(e);
            return function (e) {
                o(n, t.formatNumber(e || 0))
            }
        }

        var s = this;
        s.element = i, this.elements = {
            image: function (e) {
                var t = i.find(e);
                return function (e) {
                    o(t, e, !0, function () {
                        t.closest(".user-pic").addClass("user-pic--visible")
                    })
                }
            }(".user-data__userpic"),
            name: a(".user-data__username"),
            total_likes: r(".user-data__total-likes"),
            rank: r(".user-data__total-rank"),
            location: a(".user-data__location"),
            email: a(".user-data__email"),
            about: a(".user-data__about")
        }, e(n).on("login:change", function () {
            s.update()
        })
    }

    function o(t, n, i, o) {
        n = n || "", t.each(function () {
            var t = e(this);
            switch (!0) {
                case t.is("input"):
                case t.is("textarea"):
                    t.val(n);
                    break;
                default:
                    t.closest(".user-panel__stat-item").toggleClass("user-panel__stat-item_empty", !n && 0 !== n), i ? t.css("background-image", "url('" + n + "')") : t.html(n), "function" == typeof o && o()
            }
        })
    }

    e.fn.userData = t.jQueryConstructor("UserData", i), i.prototype.init = function (e) {
        if ("function" == typeof e) this.api = e; else var t = e;
        this.update(t)
    }, i.prototype.update = function (e) {
        if (void 0 === e || (e.user.suadmin, 0) ? window.suadmin = !1 : window.suadmin = !0, this.api || e) {
            e = e || this.api();
            for (var t in this.elements) this.elements.hasOwnProperty(t) && this.elements[t](e && e.user && e.user[t] || "");
            this.element.trigger("user-data:change")
        }
    }
}(jQuery, peppers = peppers || {}, document);
var peppers;
!function (e, t, n) {
    function i(t) {
        t = encodeURIComponent(t).replace(/\%2F/g, "%5C"), e.location = o + t
    }

    var o = e.langUrl + "search/text/";
    $(t).on("click", ".js-close-search-form", function () {
        $(".js-search-form").removeClass("active")
    }), $(t).on("click", ".js-tag", function (e) {
        e.preventDefault();
        var t = $(this).data("search");
        t && i(t)
    }), $(t).on("submit", ".js-search-form form", function (e) {
        e.preventDefault();
        var t = $(this).find("input[type=text]").val();
        t && i(t)
    })
}(window, document, kaspersky = kaspersky), function () {
    function e(e) {
        var t = e.find(".scroll__masked"), n = t.data("scrollCustom");
        n || (n = t.scrollbarCustom().data("scrollCustom"), $(document.documentElement).on("resize:after", n.refresh)), n.refresh()
    }

    function t(t) {
        var i = this.$el = $(t);
        e(i), i.find(".checkbox-nth").on("change", function () {
            if (peppers.checkMobile.css.isMobile()) {
                var e = $(this).parent(), t = e.find(".checkbox-nth"), n = t.index(this),
                    i = e.find(".checkbox-nth-item"), o = i.eq(n);
                i.toggleClass("my-discussion_hide", !0), o.toggleClass("my-discussion_hide", !1)
            }
        }), n($(".discussions"), "predictions"), n($(".uploaded-works"), "artworks")
    }

    function n(e, t) {
        function n(e) {
            function t() {
                n.animate({opacity: 0, top: -10, height: 0, padding: 0}, 200, function () {
                    n.remove(), p = p.not(n), a(h)
                }), $(document.documentElement).trigger("resize:after")
            }

            var n = $(this).closest("[data-id]");
            n.css("pointer-events", "none"), {}[u + "_id"] = n.data("id"), $.ajax({
                url: langUrl + "api/" + u + "/" + n.data("id"),
                type: "DELETE",
                success: t,
                error: function (e, t, n) {
                    alert(t.statusText)
                }
            })
        }

        function i() {
            $(p).filter(".my-discussion_hide").length ? m.addClass("paginator--show") : m.removeClass("paginator--show")
        }

        function o() {
            peppers.checkMobile.css.isMobile() || (d = e.offset().top, l = m.offset().top, p && p.length > 0 && p.data("bottom", void 0)), a(h)
        }

        function a(t, n) {
            m.removeClass("paginator_no-next paginator_no-prev"), p && p.removeClass("my-discussion_hide"), g.toggle(!(p && p.length > 0)), p && p.length > 0 && (t >= p.length && (t = p.length, n = !0), peppers.checkMobile.css.isMobile() ? r() : s(t, n), i(), e.trigger("checkbox:change"))
        }

        function r() {
            if (p) {
                var e = 10 * v;
                e < p.length, p.each(function (t) {
                    $(this).toggleClass("my-discussion_hide", t >= e)
                })
            }
        }

        function s(e, t) {
            var n, i = 0, o = $(""), a = h = e;
            if (t) for (; a-- > 0;) n = p.eq(a), (i += n.outerHeight()) < l - d && (h = a, o = o.add(n));
            for (a = e; a < p.length; a++) n = p.eq(a), (i += n.outerHeight()) < l - d && (f = a, o = o.add(n));
            console.debug(o), o.removeClass("my-discussion_hide"), p.not(o).addClass("my-discussion_hide"), m.toggleClass("paginator_no-next", f >= p.length - 1), m.toggleClass("paginator_no-prev", h <= 0)
        }

        function c() {
            switch ($(this).data("direction")) {
                case"-1":
                case-1:
                    h > 0 && (f = h - 1, a(h, !0));
                    break;
                case"1":
                case 1:
                    f < p.length - 1 && a(f + 1)
            }
        }

        var l, d, u, p, h, f, m = e.siblings(".paginator"), g = e.find(".user-panel__placeholder");
        u = t;
        var v = 1;
        m.find(".paginator__button").click(c), $(window).on("resize:after", o), e.on("click", ".close-button", n), p = e.find(".list__item"), a(h = 0), o()
    }

    $.fn.userPanel = function () {
        new t(this)
    }
}(), function (e, t) {
    function n(t) {
        function n() {
            u.toggleClass("button_inactive", c.serialize() === l)
        }

        function i() {
            l = c.serialize(), u.addClass("button_inactive")
        }

        function o(t) {
            t.preventDefault(), e(this).is(".button_inactive") || r(c.serializeArray()).done(function () {
                peppers.modal()
            }).then(function () {
                e(document.documentElement).trigger("resize:after")
            })
        }

        function a(e, i) {
            peppers.modal();
            var o = i.toDataURL("image/jpeg");
            s.val(o), t.find(".user-pic__image").css("backgroundImage", "url('" + o + "')"), n(), t.find(".user-edit__form").submit()
        }

        var r;
        t.find(".upload-image").on("upload-image:crop", a);
        var s = e('[name="userpic"]'), c = t.find(".user-edit__form").on("form:submit", o);
        c.find("input, textarea").on("change click keyup", n);
        var l, d = t.find(".user-data"), u = t.find(".button");
        d.on("user-data:change", i), i(), this.init = function (e) {
            r = e
        }
    }

    function i() {
        e(".popup").addClass("is-visible")
    }

    function o() {
        e(".popup").removeClass("is-visible")
    }

    function a(n) {
        e.ajax({
            url: n,
            method: "POST",
            headers: {"X-CSRF-TOKEN": e('meta[name="csrf-token"]').attr("content")},
            type: "json",
            success: function (n) {
                o(), setTimeout(function () {
                    e(t).attr("href", "/")
                }, 1e3)
            }
        })
    }

    e.fn.userEdit = function (t) {
        this.each(function () {
            var i = e(this), o = i.data("user-edit");
            o || i.data("user-edit", o = new n(i)), o.init(t)
        })
    }, document.getElementById("avatar-input") && (document.getElementById("avatar-input").onchange = function () {
        var e = kaspersky.user, t = document.getElementById("user-form");
        t.action = e, t.submit()
    }), e(document).on("click", ".js-user-edit-pic__replace", function () {
        e(".js-user-edit-pic__input").click()
    }), e(document).on("click", ".js-delete-open", function () {
        i()
    }), e(document).on("click", ".js-close-popup", function () {
        o()
    }), e(document).on("click", ".js-popup-content", function (e) {
        e.stopPropagation()
    }), e(document).on("click", ".js-delete-profile", function () {
        a(e(this).data("action"))
    })
}(jQuery, window.location), function (e, t, n) {
    function i(n) {
        function i() {
        }

        function o(t, n) {
            e("#avatar-input").length ? (e("#avatar-input").val(n.toDataURL("image/jpeg")), document.getElementById("avatar-form").submit()) : e(".user-edit .upload-image").trigger(t, n)
        }

        function a(e) {
            var t = C.offset(), n = C.outerWidth(), i = C.outerHeight(), o = s(e, "client"), a = t.left + n / 2 - o.x,
                r = t.top + i / 2 - o.y, c = Math.sqrt(a * a + r * r);
            b.css("fontSize", Math.max(100, Math.min(b.height(), 2 * c * 370 / 426)))
        }

        function r(e) {
            j && j.css(_ = c(e))
        }

        function s(e, t) {
            var n = e.touches && e.touches[0] || e;
            return t = t || "page", {x: n[t + "X"], y: n[t + "Y"]}
        }

        function c(e) {
            if (e) {
                var t = s(e);
                t.x -= w.x, t.y -= w.y
            } else t = {x: 0, y: 0};
            return {left: k.left + t.x, right: k.right - t.x, top: k.top + t.y, bottom: k.bottom - t.y}
        }

        function l(t) {
            t.preventDefault();
            var n = t.originalEvent.deltaY || t.originalEvent.detail || t.originalEvent.wheelDelta,
                i = e(this).find(".js-viewer").width() + (n > 0 ? 1 : -1);
            i > g && (i = g), i < v && (i = v), e(this).find(".js-viewer").css({width: i, height: i})
        }

        function d(n) {
            m = "scale", n.preventDefault(), b.on("mousemove touchmove", a), e(t).on("mouseup  touchend", u)
        }

        function u(n) {
            b.off("mousemove touchmove", a).off("mousemove touchmove", r), e(t).off("mouseup  touchend", u), "move" === m && (k = _)
        }

        function p(n) {
            n.isDefaultPrevented() || (m = "move", n.preventDefault(), w = s(n), b.on("mousemove touchmove", r), e(t).on("mouseup  touchend", u))
        }

        function h() {
            if (j) {
                var e = function (e, t) {
                    var n = {offset: e.offset(), width: e.width(), height: e.height()},
                        i = {offset: t.offset(), width: t.width(), height: t.height()};
                    return {
                        x: (n.offset.left - i.offset.left) / i.width,
                        y: (n.offset.top - i.offset.top) / i.height,
                        width: n.width / i.width,
                        height: n.height / i.height
                    }
                }(C, j);
                n.trigger("user-pic-crop:save", e)
            }
        }

        function f() {
        }

        var m, g = "250", v = "100", w = {}, b = n.find(".user-pic-block__image-wrap"),
            y = n.find(".user-pic-block__canvas");
        e(".user-pic-crop__dot", b).on("touchstart  mousedown", d), e(".js-pic-save", n).on("click", h), e(".user-pic-block__image-wrap").on("wheel", l), b.on("touchstart  mousedown", p);
        var k, _, x = n.find(".select-file").uploadImage().on("upload-image:crop", o), C = n.find(".js-viewer");
        n.on("modal-item:hide", f), e(t).on("hashchange", i);
        var j;
        this.init = function (t, i) {
            if (x.data("title", i), !t) return j && j.off().remove(), j = void 0, !1;
            n.toggleClass("user-pic-crop_edit", !!(t && !0 !== t || j)), !0 !== t && (j && j.off().remove(), j = t && e(t).appendTo(y).addClass("user-pic-crop__target"), k = {
                left: -2e3,
                right: -2e3,
                top: -2e3,
                bottom: -2e3
            }, r(), b.css("fontSize", ""))
        }
    }

    e.fn.userPicCrop = n.jQueryConstructor("user-pic-crop", i)
}(jQuery, window, peppers = peppers || {});
var peppers;
!function (e, t, n) {
    function i(e) {
        this.script = e.find('[type="text/x-handlebars-template"]'), this.template = n.compile(this.script.html())
    }

    t.fn.briefCommentsList = e.jQueryConstructor("briefCommentsList", i), i.prototype.init = function (e, n) {
        switch (e) {
            case"add":
                console.debug(n);
                var i = t(this.template([n])).find(".brief-comment");
                console.debug(this.$comments, i), this.$comments.append(i);
                break;
            default:
                this.$comments && this.$comments.remove(), e && (this.$comments = t(this.template(e)).insertAfter(this.script), this.$comments.localization("en"))
        }
    }
}(peppers = peppers || {}, jQuery, Handlebars);
var peppers;
!function (e, t, n) {
    function i(e) {
        this.script = e.find('[type="text/x-handlebars-template"]'), this.template = n.compile(this.script.html())
    }

    n.registerHelper("ifAuthor", function (e, t, n) {
        return 2 === arguments.length && (n = t), e && e.name && e.image ? n.fn(this) : n.inverse(this)
    }), t.fn.briefModalContent = e.jQueryConstructor("briefModalContent", i), i.prototype.init = function (e) {
        e && (this.ui && this.ui.remove(), this.ui = t(this.template(e)).insertAfter(this.script), this.ui.find(".user-pic").addClass("user-pic--visible").find(".user-data__userpic").css("background-image", "url('" + (e.author && e.author.image) + "')"))
    }
}(peppers = peppers || {}, jQuery, Handlebars);
var peppers;
!function (e, t, n) {
    function i() {
        var e;
        try {
            e = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (t) {
            try {
                e = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
                e = !1
            }
        }
        return e || "undefined" == typeof XMLHttpRequest || (e = new XMLHttpRequest), e
    }

    function o(e) {
        var t = i();
        t.open("GET", e, !1), t.send(null)
    }

    function a() {
        var e = c.is(":checked");
        $(".js-mobile-menu-overlay").toggleClass("open", e), $("body").toggleClass("fixed", e), s.trigger("menu:" + (e ? "show" : "hide")).trigger("menu:toggle"), $(".js-mobile-menu").toggleClass("open", e)
    }

    function r(e) {
        e ? $(".js-top-menu-autorization").addClass("active") : $(".js-top-menu-autorization").removeClass("active")
    }

    $(t).on("resize", a);
    var s = $(n.documentElement), c = $("#k-menu-toggle").on("change", a);
    $(n).on("click", ".js-mobile-menu-overlay", function () {
        $("#k-menu-toggle").prop("checked", !1).change()
    }), $(".nav-menu__link_lang").on("click", function (e) {
        e.preventDefault(), e.stopPropagation(), $(this).data("lang") && (o("/backend/api/v1/set/" + $(this).data("lang")), parent.php_passed_lang = $(this).data("lang"), php_passed_lang = $(this).data("lang"), localStorage.language = $(this).data("lang"));
        var n = t.location.hash;
        "#" == n && (n = "");
        var i = "";
        if ("ru" == $(this).data("lang")) i = t.location.origin + "/ru" + t.location.pathname + t.location.search + n; else {
            if (-1 != location.href.indexOf("/ru#/")) var a = "/" + t.location.pathname.split("/ru")[1]; else var a = "/" + t.location.pathname.split("/ru/")[1];
            i = t.location.origin + a + t.location.search + n
        }
        return t.location.replace(i), !1
    }), $(n).on("click", ".js-tooltip-menu", function () {
        var e = $(this).siblings(".js-tooltip-window");
        ($(t).width() >= 1e3 || e.hasClass("mobile-event")) && (e.hasClass("open") ? (r(!1), e.removeClass("open").fadeOut(200)) : (r(!0), $(".js-tooltip-window").removeClass("open").fadeOut(200), e.addClass("open").fadeIn(200)))
    }), $(n).on("click", function (e) {
        0 == $(e.target).closest(".js-tooltip-window").length && 0 == $(e.target).closest(".js-tooltip-menu").length && $(n).trigger("menu.closeMenu")
    }), $(n).on("menu.closeMenu", function () {
        $(".js-tooltip-window").removeClass("open").fadeOut(200), r(!1)
    })
}(peppers = peppers || {}, window, document);
var peppers;
!function (e, t) {
    $(t).on("click", ".js-search-btn", function (e) {
        e.preventDefault(), $(".js-search-form").toggleClass("active"), $(".js-search-form").hasClass("active") && ($(".js-search-form input[type=text]").get(0).focus(), $("#k-menu-toggle").prop("checked") && ($("#k-menu-toggle").prop("checked", !1), $("#k-menu-toggle").change()))
    })
}(window, document), function (e, t) {
    function n(e) {
        function t(e) {
            return e.replace(/[A-Z]/g, function () {
                return "_" + arguments[0].toLowerCase()
            })
        }

        return function (e) {
            var n = {};
            for (var i in e) {
                for (var o = i.split("_"), a = n, r = t(o[0]), s = 0; s < o.length - 1; s++) {
                    var c = r;
                    r = t(o[s + 1]), a = a[c] = a[c] || (/^\d+$/.test(r) ? [] : {})
                }
                a[r] = e[i]
            }
            return n
        }(e)
    }

    function i(n, i) {
        var a = e(n), r = o(i, a.data("localization"));
        void 0 !== r && (r.hasOwnProperty("attr") && a.attr(r.attr), ["string", "number"].indexOf(typeof r) >= 0 ? a.html(r) : r.hasOwnProperty("length") ? a = function () {
            if (a.is("script")) var n = a.html(); else {
                n = "{{#each this}}" + a.get(0).outerHTML + "{{/each}}";
                var i = !0
            }
            var o = t.compile(n)(r);
            a.after(o), i && (a.remove(), e(o).removeAttr("data-localization"))
        }() : (r.hasOwnProperty("desktop") || r.hasOwnProperty("mobile")) && function () {
            a.html("<span class='mobile-only'>" + r.mobile + "</span><span class='desktop-only'>" + r.desktop + "</span>")
        }())
    }

    function o(e, t) {
        for (var n = t.split("."); e && n.length > 0;) e = e[n.shift()];
        return e
    }

    var a, r, s = {}, c = {}, l = [];
    e.fn.localization = function (t, o) {
        function d(e) {
            e.done(u)
        }

        function u(e) {
            r = e, h.find("[data-localization]").each(function () {
                l.push(new i(this, e))
            }), p.resolve()
        }

        if ("destroy" !== t) {
            t = t || "en";
            var p = e.Deferred(), h = this;
            return o && (a = o), a || s[t] ? (s[t] = s[t] || a(t, n), c[t] && c[t].resolve(s[t]), s[t].done(u)) : (c[t] || (c[t] = e.Deferred()), c[t].then(d)), p.promise()
        }
    }, e.fn.localization.getText = function (e, t) {
        if (r) return o(r, e)
    }
}(jQuery, window.Handlebars), function (e, t, n, i) {
    e.fn.welcome = function () {
        function o() {
            c.remove(), l.resolve()
        }

        function a(e, n) {
            function i(t) {
                if (!0 === t || !h) {
                    var n = !0 === t ? 0 : u.data("duration") - 0;
                    m.each(r(0, 1, n || 0 === n ? n : s[e] || 1, 0, l))
                }
            }

            function l() {
                a(++e, .2)
            }

            function d() {
                h || (m.each(function () {
                    t.killTweensOf(this)
                }), h = !0, i(!0))
            }

            var h;
            if (p = d, e >= u.length) return void c.fadeOut(o);
            var f = u.eq(e).show(), m = f.find(".welcome__l");
            n = n || 0, m.css("opacity", 0).each(r(1, .5, n, .025, i))
        }

        function r(e, o, a, r, s) {
            var c = 0;
            return function (l) {
                c++, t.to(this, o, {
                    opacity: e,
                    delay: a + r * l,
                    ease: n.ease.config({
                        template: i.easeNone,
                        strength: 2,
                        points: 10,
                        taper: "none",
                        randomize: !0,
                        clamp: !0
                    }),
                    onComplete: function () {
                        0 == --c && "function" == typeof s && s()
                    }
                })
            }
        }

        var s = [1, 6, 3], c = this, l = e.Deferred(), d = peppers.checkMobile.css.isMobile();
        if (0 === this.length || e.cookie("visited") || d) o(); else {
            e.cookie("visited", "1", {expires: 3650, path: "/"});
            var u = this.find(".welcome__text").each(function () {
                var t = e(this).children(), n = t.html();
                n = n.split("").map(function (e) {
                    return "<span  class='welcome__l'>" + e + "</span>"
                }), t.html(n.join(""))
            });
            a(0, 1)
        }
        var p;
        return this.on("click", function () {
            p()
        }), l.promise()
    }
}(jQuery, TweenLite, RoughEase, Power0), function (e, t, n, i, o, a, r) {
    function s() {
        o(".hexagonal-map").hexagonalMap(c("location")), t.voteApi = c("agree", void 0, !1, "post"), t.commentApi = c("comment-add", void 0, !1, "post"), t.likeApi = c("work-add_like", void 0, !1, "post"), t.sortPrediction = c("predictions", void 0, !1, "post"), t.sortFuturolog = c("futurolog", void 0, !1, "post"), t.sortArtwork = c("graphics", void 0, !1, "post"), t.sortArtist = c("artists", void 0, !1, "post"), t.searchUrl = langUrl + "search/text/", t.preload = '<div class="svg-preloader"> <div class="g-circles" id="circle"> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> <div class="g-circle"> <div class="u-circle" id="s-circle"> <div class="round"></div> </div> </div> </div></div>', o(".js-select").select2({minimumResultsForSearch: 1 / 0}), t.sortRedrawList = function (e, n, i, a, r) {
            var s = o(i);
            s.addClass("fade-block"), a({sort: e, type: n}).fail(function (i) {
                s.html(i), s.data("action", t.getUrlMethod(e, {
                    sort: e,
                    type: n
                })), s.data("page", "1").addClass("js-ajax-loading"), r && r(), setTimeout(function () {
                    s.removeClass("fade-block")
                }, 100)
            })
        }, t.getUrlMethod = function (e, t) {
            var n = !!w.hasOwnProperty(e) && w[e];
            if (n) {
                var i = langUrl + "api/" + n;
                if (t) for (name in t) i = i.replace("{" + name + "}", t[name]);
                return i
            }
            return !1
        }, setTimeout(function () {
            o(".brief-360").brief()
        }, 1500), "undefined" != typeof InstallTrigger && o(".close-button-hexagon, .back-btn-svg").hexButton(), o(function () {
            function e(e) {
                e = e || ~~o.cookie(n) || i[i.length - 1 >> 1], o(".timeline-new").pepTimeline(i, e).on("timeline:change", function (e, t) {
                    o.cookie(n, t, {path: "/", expires: new Date(3e3, 0, 1)})
                }).trigger("timeline:init")
            }

            var n = "selectedYear", i = window.myProTypes;
            t.artwork ? e(t.artwork.year) : e()
        }), p.resolve(), h.trigger("hashchange"), f.trigger("hashchange").resize(), t.ready.done(function () {
            d(), o(n).trigger("hashchange").resize()
        }), o(n).bind("pageshow", function (e) {
            e.originalEvent.persisted && n.location.reload()
        })
    }

    function c(e, t, i, a, r) {
        function s(t, n, i) {
            return o.get("api_example/" + e + ".json")
        }

        function c(e) {
            var t = o.cookie("test_api");
            if ("1" === t) return !0;
            try {
                for (var n = JSON.parse(t), i = 0; i < n.length; i++) if (n[i].name === e) return "1" == n[i].value
            } catch (e) {
            }
            return !1
        }

        function l(e, t, n, i) {
            i = i || !1, r = void 0 === r || Boolean(r);
            var a = {method: n || "GET", async: r};
            if (i) {
                var s = new FormData;
                for (key in t) t.hasOwnProperty(key) && s.append(key, t[key]);
                a.processData = !1, a.contentType = !1, a.cache = !1, a.data = s
            } else a.data = t;
            var c = o.ajax(e, a);
            return c.then(function (e) {
                return e._token && o.ajaxSetup({headers: {"X-CSRF-TOKEN": e._token}}), e
            }), c
        }

        function d() {
            h.hasOwnProperty(e) && h[e]()
        }

        function u() {
            var e = arguments;
            return function () {
                "function" == typeof ga && ga.apply(n, e)
            }
        }

        var p, h = {
            agree: u("send", "event", "Button1", "Click2"),
            "work-add_like": u("send", "event", "Button2", "Click")
        }, f = l, m = "work-save" == e;
        var ajaxUrl = e;
        return p = langUrl + "api/" + (w.hasOwnProperty(e) ? w[e] + "?" + Date.now() : "" + "?" + Date.now()), function (n, r, l) {
            function u(e, t) {
                for (var n in e) if (e.hasOwnProperty(n)) if (t || /^(?:image|photo|preview|flag|url)s?$/.test(n)) switch (typeof e[n]) {
                    case"string":
                        /^backend\//.test(e[n]) && (e[n] = "/" + e[n]);
                        break;
                    case"object":
                        u(e[n], !0)
                } else "object" == typeof e[n] && u(e[n]);
                if (typeof (e) === "string") {
                    e = JSON.parse(e)
                }
                ;
                if (ajaxUrl === "locations-full-data") {
                    return window.locationsFData
                }
                ;
                if (ajaxUrl === "locations") {
                    window.locationsData = {"locations": [], "countries": []};
                    window.locationsFData = {};
                    var initLocations1 = parseShowData(window.myProTypes[0], window.metaLocationData1);
                    var initLocations2 = parseShowData(window.myProTypes[1], window.metaLocationData2);
                    var initLocations3 = parseShowData(window.myProTypes[2], window.metaLocationData3);
                    window.locationsData = mergeData(mergeData(initLocations1[0], initLocations2[0]), initLocations3[0]);
                    window.locationsFData = Object.assign(Object.assign(initLocations1[1], initLocations2[1]), initLocations3[1]);
                    return window.locationsData
                }
                ;
                return e
            }

            function h(e) {
                switch (!0) {
                    case"string" == typeof e:
                        k.reject(e);
                        break;
                    case!1 === e.success:
                        var t = e.text || e.message || e.error;
                        k.reject(t);
                        break;
                    case e.hasOwnProperty("error"):
                        k.reject(e.text || e.error);
                        break;
                    case e.hasOwnProperty("errors"):
                        var n = [];
                        for (var i in e.errors) n.push(e.errors[i].join(", "));
                        k.reject(n.join("<br>"));
                        break;
                    case e[0] && !1 === e[0].success:
                        k.reject(e[0].message);
                        break;
                    default:
                        d(), k.resolve(e)
                }
            }

            var g = p;
            if ("localization" === e && (n = void 0), v.hasOwnProperty(g)) return v[g];
            n && w[e] && (g = g.replace(/\/\{([^\}]+)\}/g, function () {
                var e = arguments[1];
                if (n.hasOwnProperty(e)) {
                    var t = n[e];
                    return delete n[e], t ? "/" + t : ""
                }
                return ""
            }));
            var b;
            switch (typeof n) {
                case"object":
                    for (var y in n) if (n.hasOwnProperty(y)) {
                        b = n;
                        break
                    }
                    break;
                default:
                    b = n
            }
            var k = o.Deferred(), _ = k.promise();
            return (c(e) ? s : f)(g, b, l || a || (b ? "post" : "get"), m).then(function (t) {
                return "localization" !== e ? u(t) : t
            }).then(t).then(r).done(function (e) {
                h(e)
            }).fail(function (e) {
                e.responseJSON ? h(e.responseJSON) : k.reject(e.message || e.responseText || "ERROR")
            }), !0 === i && (v[p] = _, _.fail(function () {
                delete v[p]
            })), _
        }
    }

    function l() {
        function t() {
            o.cookie("visited-2", "1", {
                expires: 3650,
                path: "/"
            }), o(this).off("mousedown  touchstart", t), o(".help").fadeOut()
        }

        if (e.checkMobile.css.isMobile()) return void o.cookie("visited-2", "1", {expires: 3650, path: "/"});
        if (!o.cookie("visited-2")) {
            o(".help").fadeIn().parent().on("mousedown  touchstart", t)
        }
    }

    function d() {
        o(".welcome").welcome().done(l)
    }

    function u(e) {
        return e && e.replace(/^\s+|\s+$/g, "")
    }

    var p = t.ready.addWait(), h = o(i), f = o(n), m = o(i.documentElement), g = o(i.body), v = {}, w = {
        location: "locations/{location_id}",
        "locations-full-data": "locations-full-data",
        locations: "locations",
        "comment-add": "predictions/{brief_id}/comment",
        works: "predictions/{brief_id}/works",
        agree: "predictions/{brief_id}/vote/{agree}",
        "work-add_like": "artworks/{artwork_id}/like",
        predictions: "predictions/{sort}/{type}",
        futurolog: "futurologists/{sort}/{type}",
        graphics: "artworks/{sort}/{type}",
        artists: "artists/{sort}/{type}"
    };
    !function () {
        !function () {
            r.registerHelper("switch", function (e, t) {
                this._switch_value_ = e;
                var n = u(t.fn(this));
                return delete this._switch_value_, n
            }), r.registerHelper("case", function (e, t) {
                return e == this._switch_value_ ? t.fn(this) : ""
            })
        }(), function () {
            r.registerHelper("brief_link", function (e, t) {
                return this.brief_id || this.brief && this.brief.id || this.id
            })
        }(), function () {
            r.registerHelper("user_link", function (e, t) {
                return "user-panel.html?user_id=" + this.id
            })
        }(), function () {
            r.registerHelper("json", function (e, t) {
                return "<pre>" + JSON.stringify(e, null, "\t") + "</pre>"
            })
        }(), function () {
            r.registerHelper("ifCond", function (e, t, n) {
                return e === t ? n.fn(this) : n.inverse(this)
            })
        }(), function () {
            r.registerHelper("isSingle", function (e) {
                return 1 !== e ? "" : "_single"
            })
        }(), function () {
            r.registerHelper("howMuch", function (e) {
                var t;
                t = 2 == e.toString().length && 1 == e.toString().substr(-2, 1) ? 5 : e.toString().substr(-1), t = t.toString();
                var n;
                switch (t) {
                    case"1":
                        n = "_quant1";
                        break;
                    case"2":
                    case"3":
                    case"4":
                        n = "_quant2";
                        break;
                    case"5":
                    case"6":
                    case"7":
                    case"8":
                    case"9":
                    case"0":
                    default:
                        n = "_quant5"
                }
                return n
            })
        }()
    }(), function () {
        o.fn.blink = function () {
            this.children().not(".login__form").add(this.find(".login__form > *")).css({opacity: 0}).each(function (e) {
                TweenLite.to(this, .5, {
                    opacity: 1,
                    delay: .5 + .5 * Math.random(),
                    ease: RoughEase.ease.config({
                        template: Power0.easeNone,
                        strength: 2,
                        points: 20 + 20 * Math.random(),
                        taper: "none",
                        randomize: !0,
                        clamp: !0
                    })
                })
            })
        }
    }(), function () {
        t.get_metadata = function () {
            return {
                title: o("title").html(),
                description: o('meta[name="description"]').attr("content"),
                og_title: o('meta[property="og:title"]').attr("content"),
                og_description: o('meta[property="og:description"]').attr("content"),
                og_image: o('meta[property="og:image"]').attr("content"),
                og_url: o('meta[property="og:url"]').attr("content")
            }
        }, t.set_metadata = function (e) {
            o("title").html(e.title), o('meta[name="description"]').attr("content", e.description), o('meta[property="og:title"]').attr("content", e.og_title), o('meta[property="og:description"]').attr("content", e.og_description), o('meta[property="og:image"]').attr("content", e.og_image), o('meta[property="og:url"]').attr("content", e.og_url)
        }, t.brief_page_link = function (e) {
            return e.id
        }, t.addwork_link = function (e, t) {
            var n = [];
            return e && n.push("brief_id=" + e), t && n.push("work_id=" + t), "addwork.html?" + n.join("&")
        }, t.user_link = function (e) {
            return "user-panel.html" + (e ? "?user_id=" + e : "")
        }, t.mapToHash = function (e) {
            for (var t = {}, n = 0; e && n < e.length; n++) t[e[n].name] = e[n].value;
            return t
        }, t.parseURL = function (e) {
            function n(e) {
                var t = e.split("=");
                return {name: t.shift(), value: t.join("=")}
            }

            var i = a.search.substr(1), o = i.split("&");
            if (0 == arguments.length) return o.map(n);
            if (!0 === e) return t.mapToHash(o.map(n));
            for (var r = 0; r < o.length; r++) {
                var s = n(o[r]);
                if (s.name === e) return s.value
            }
        }
    }(), function () {
        function e(e, t) {
            var n = e.data("scrollTop");
            t ? (void 0 === n && (n = m.scrollTop()), e.css({
                top: -n,
                position: "fixed",
                width: "100%"
            })) : (e.css({
                top: "",
                position: "",
                width: ""
            }), "number" == typeof n && m.scrollTop(n), e.data("scrollTop", void 0))
        }

        m.on("modal:toggle  menu:toggle  best-of-week:toggle", function (t) {
            var n = o(".backdrop").is(":visible");
            e(o(".kaspersky-app"), n);
            var i = o(".modal .backdrop").is(":visible"), a = o(".k-menu .backdrop").is(":visible");
            e(o(".modal"), a), e(o(".modal-app"), a), e(o(".best-of-week"), a || i)
        })
    }(), function () {
        function t() {
            requestAnimationFrame(n)
        }

        function n() {
            function t(e, t) {
                o("[" + e + "]").each(function () {
                    var n = o(this);
                    n.toggleClass(n.attr(e), t)
                })
            }

            var n = f.width(), i = f.height(), r = "boolean" == typeof a ? !a : e.checkMobile.css.isLandscape();
            g.is(".is_vr") && (r = !r);
            var s = e.checkMobile.isMobile(), c = {};
            switch (!0) {
                case r:
                    c = {w: 1135, h: 640};
                    break;
                case s:
                case e.checkMobile.isMobileOrTablet():
                    c = {w: 640, h: 1135};
                    break;
                default:
                    c = {w: 1280, h: 720}
            }
            m.css("fontSize", 18 * Math.min(1, n / c.w)), m.toggleClass("landscape", r && e.checkMobile.isMobileOrTablet() && screen.width < 1280);
            var l = {width: n, height: i};
            m.data("size", l).trigger("resize:after", l), t("data-mobile-class", s), t("data-desktop-class", !s)
        }

        f.resize(t), o(i.body).on("vr:change", n);
        var a
    }(), h.ready(s), o(i).on("panetMainLoaded", function () {
        t.planetMain && t.planetMain(c("locations"), c("locations-full-data", void 0, !0));
        window.planetMain = t.planetMain;
        window.planetMainfun = c;
    })
}(peppers = peppers || {}, kaspersky = kaspersky || {}, window, document, jQuery, window.location, Handlebars), document.addEventListener("DOMContentLoaded", function (e) {
    function t(e, t, n) {
        n = n || {};
        var i = n.expires;
        if ("number" == typeof i && i) {
            var o = new Date;
            o.setDate(o.getDate() + i), i = n.expires = o
        }
        i && i.toUTCString && (n.expires = i.toUTCString()), t = encodeURIComponent(t);
        var a = e + "=" + t;
        for (var r in n) {
            a += "; " + r;
            var s = n[r];
            !0 !== s && (a += "=" + s)
        }
        document.cookie = a
    }

    var n = {
        text: '',
        button: "Accept "
    };
    /\/ru\//.test(location.href) && (n = {
        text: 'Мы используем файлы cookie, чтобы улучшить работу сайта. Продолжая пользоваться этим сайтом, вы соглашаетесь, что некоторые из ваших действий в браузере будут записаны в файлы cookie. Подробную информацию об использовании файлов cookie на этом сайте вы можете найти по ссылке <a href="https://www.kaspersky.ru/web-privacy-policy" target="_blank">узнать больше</a>. ',
        button: "Принять "
    });
    var i = function (e) {
        var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
        return t ? decodeURIComponent(t[1]) : void 0
    }("cookie_accepted");
    if (navigator.cookieEnabled && !i) {
        var o = '<div class="gdprPopup"></div>';
        document.querySelector("body").insertAdjacentHTML("beforeEnd", o), document.querySelector(".gdprButton").onclick = function () {
            e.preventDefault(), t("cookie_accepted", !0, {
                expires: 30,
                path: "/"
            }), document.querySelector(".gdprPopup").remove()
        }, document.querySelector("*").setAttribute("style", "box-sizing : border-box;"), document.querySelector(".gdprPopup").setAttribute("style", "border : 1px solid black; background : rgba(0,0,0,.8); color : white; font-family : MuseoSans,Arial,Helvetica,sans-serif; font-size : 16px; position : fixed; left : 0; bottom : 0; width : 100%; z-index : 1500; font-size : .8em; padding-bottom : .5em; padding-top : 1em;"), document.querySelector(".gdprPopupContainer").setAttribute("style", "width : 90%; max-width : 1030px; margin-left : auto; margin-right : auto;"), document.querySelector(".gdprPopupContainer a").setAttribute("style", "color : white;text-decoration: underline!important;"), document.querySelector(".gdprMessage").setAttribute("style", "width : 80%; float : left; margin-bottom : .5em; padding-bottom : .5em;"), document.querySelector(".gdprButton").setAttribute("style", "cursor:pointer;position : relative; float : right; margin-right : -15px; width : auto; text-decoration : none; background-color : #006D5C; text-decoration : none; padding : 1.083em 1.5em; min-width : 12em; color : #FFF; font-size : .75em; border-radius : 1px; text-transform : uppercase; right : 0; top : 4px; margin-bottom : 10px;   text-align:center;transition : all .15s ease-in;box-sizing: border-box;"), document.querySelector(".gdprButton").onmouseover = function () {
            this.style.background = "#005446"
        }, document.querySelector(".gdprButton").onmouseout = function () {
            this.style.background = "#006D5C"
        }, window.onresize = function () {
            window.innerWidth < 655 ? (document.querySelector(".gdprMessage").style.width = "100%", document.querySelector(".gdprButton").style.marginRight = "0", document.querySelector(".gdprButton").style.width = "100%") : (document.querySelector(".gdprMessage").style.width = "80%", document.querySelector(".gdprMessage").style.cssFloat = "left", document.querySelector(".gdprButton").style.marginRight = "-15px", document.querySelector(".gdprButton").style.width = "auto")
        }
    }
}), $(".js-ajax-loading").length > 0 && $(document).on("scroll", function () {
    var e = $(window).scrollTop() + $(window).innerHeight();
    $(".js-ajax-loading").each(function () {
        var t = $(this).offset().top + $(this).innerHeight();
        e > t && $(this).is(":visible") && ajaxLoad($(this))
    })
});
var CSelectList = function (e) {
    this.element = $(e), this.select = this.element.find("select"), this.wrapDesktopSelect = '<div><div class="select-menu__hide-menu popup-select tooltip-menu js-tooltip-window"></div></div>', this.wrapDesktopActiveItem = '<div><div class="js-tooltip-menu select__select-button"></div></div>', this.svglist = '<svg class="select__sort-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#FFF" fill-rule="evenodd" d="M3 3h10a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 4h7a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 4h4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" opacity=".3"/></svg>', this.svgmenu = '<svg class="select-menu__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 8.303L5.349 5.65A1.2 1.2 0 1 0 3.65 7.35l3.5 3.5a1.2 1.2 0 0 0 1.698 0l3.5-3.5A1.2 1.2 0 0 0 10.65 5.65L8 8.303z"></path></svg>', this.initElement(), this.setEvents()
};
CSelectList.prototype.initElement = function () {
    var e = $(this.wrapDesktopSelect);
    this.select.find("option").each(function (t) {
        e.find(".tooltip-menu").append("<span data-num='" + $(this).val() + "'>" + $(this).html() + "</span>")
    }), this.element.append(e.html()), this.element.append(this.svglist);
    var t = $(this.wrapDesktopActiveItem);
    t.find(".js-tooltip-menu").append('<span class="select__select-item js-active-item"></span>'), t.find(".js-tooltip-menu").append(this.svgmenu), this.element.append(t.html()), this.updateDesctopItem()
}, CSelectList.prototype.setEvents = function () {
    this.select.on("change", $.proxy(this.changeSelect, this)), this.element.find(".tooltip-menu span").on("click", $.proxy(this.changeDesctopSelect, this))
}, CSelectList.prototype.changeSelect = function () {
    this.updateDesctopItem(), this.element.trigger("ajaxSortUpdate", [this.select.val()])
}, CSelectList.prototype.changeDesctopSelect = function (e) {
    var t = $(e.target);
    this.element.find(".tooltip-menu span").removeClass("active"), t.addClass("active"), this.element.find(".js-active-item").text(t.text()), $(document).trigger("menu.closeMenu"), this.updateSelectItem(), this.element.trigger("ajaxSortUpdate", [t.data("num")])
}, CSelectList.prototype.updateDesctopItem = function () {
    var e = this.select.find("option:selected");
    this.element.find(".js-active-item").text(e.text()), this.element.find(".tooltip-menu span").removeClass("active"), this.element.find(".tooltip-menu span[data-num=" + e.val() + "]").addClass("active")
}, CSelectList.prototype.updateSelectItem = function () {
    var e = this.element.find(".tooltip-menu span.active").data("num");
    this.select.val(e)
}, $(".js-select-list").length > 0 && $(".js-select-list").each(function (e) {
    new CSelectList(this)
}), function () {
    function e(e) {
        $.cookie("homePage", e, {expires: 2952e4, path: "/"});
        var t = "/";
        "/ru/" === langUrl && (t = langUrl), location.replace(t)
    }

    function t() {
        $(".js-toggle-demo").addClass("is-active"), $(".js-toggle-map").removeClass("is-active toogle-page__link--active");
        var e = !1;
        e = setInterval(function () {
            earthDemo.data && (earthDemo.startAnimation(), clearInterval(e))
        }, 100)
    }

    $(document).on("click", ".js-toogle-main-page", function () {
        e($(this).data("page"))
    }), $(document).on("click", ".js-toggle-map", function () {
        $(".js-toggle-demo").eq(0).is(".is-active") && e($(".js-toggle-map").data("page"))
    }), $(document).on("click", ".js-toggle-feed", function () {
        $(".js-toggle-demo").eq(0).is(".is-active") && e($(".js-toggle-feed").data("page"))
    }), $(document).on("click", ".js-toggle-demo", function () {
        if ($(".js-toggle-map").eq(0).is(".is-active") || $(".js-toggle-demo").eq(0).is(".is-active")) if ($(".js-toggle-map").removeClass("is-active toogle-page__link--active"), $(".js-toggle-demo").addClass("is-active toogle-page__link--active"), "知名景点" === window.YEAR_ID) t(); else {
            $('.js-timeline-item[data-year="知名景点"]').eq(0).trigger("click");
            var e = setInterval(function () {
                "知名景点" === window.YEAR_ID ? (clearInterval(e), setTimeout(t, 2e3)) : $('.js-timeline-item[data-year="知名景点"]').eq(0).trigger("click")
            }, 1e3)
        } else $(".js-toggle-feed").eq(0).is(".is-active") && (sessionStorage.setItem("demoIsOn", "true"), $(".js-toogle-main-page.js-toggle-map").eq(0).trigger("click"))
    }), "true" === sessionStorage.getItem("demoIsOn") && (sessionStorage.setItem("demoIsOn", ""), setTimeout(function () {
        $(".js-toggle-demo").eq(0).trigger("click")
    }, isMobile.any ? 6e3 : 4e3))
}(), function (e) {
    e.registerHelper("more_one", function (e, t, n) {
        return e.length > 1 ? t : n
    })
}(window.Handlebars);

function parseShowData(yname, e) {
    var initLocationsData = {"locations": [], "countries": []}, initLocationsFData = {};
    var data = e.data;
    var geoCoordMap = e.geoCoordMap;
    for (var i = 0; i < data.length; i++) {
        var id = data[i].id;
        var yearsData = {};
        yearsData[yname] = {
            "briefs": 1,
            "briefs_text": data[i].level,
            "brief_id": data[i].link,
            "works": data[i].works,
            "type": "brief",
            "more_btn": data[i].planName,
            "works_list": [{
                "name": data[i].planName,
                "link": data[i].link
            }]
        };
        initLocationsData.locations.push({
            "name": data[i].name,
            "country_id": data[i].id,
            "location_id": id,
            "type": data[i].type,
            "value": data[i].value,
            "preview": data[i].preview,
            "planet_u": geoCoordMap[data[i].name][1],
            "planet_v": geoCoordMap[data[i].name][0],
            "years": yearsData
        });
        initLocationsData.countries.push({
            "id": data[i].id,
            "flag": data[i].flagImg,
            "country_id": data[i].id
        });
        var slocation = {};
        slocation["location"] = {
            "city": data[i].name,
            "country": "China"
        };
        slocation[yname] = {
            url: "",
            briefs: [{
                id: data[i].link,
                name: data[i].planName,
                year: yname,
                type: "thing"
            }]
        };
        initLocationsFData[id] = slocation
    }
    return [initLocationsData, initLocationsFData];
}

function mergeData(data1, data2) {
    var allData = {"locations": [], "countries": data1.countries};
    for (var i2 = 0; i2 < data2.locations.length; i2++) {
        for (var i1 = 0; i1 < data1.locations.length; i1++) {
            if (data2.locations[i2].name === data1.locations[i1].name) {

                data1.locations[i1].years = Object.assign(data2.locations[i2].years, data1.locations[i1].years);

                break;
            }
            if (i1 === (data1.locations.length - 1)) {
                allData.locations.push(data2.locations[i2])
            }
        }
    }
    allData.locations = allData.locations.concat(data1.locations);
    for (var i2 = 0; i2 < data2.countries.length; i2++) {
        for (var i1 = 0; i1 < data1.countries.length; i1++) {
            if (data2.countries[i2].id === data1.countries[i1].id) {
                break;
            }
            if (i1 === (data1.countries.length - 1)) {
                allData.countries.push(data2.countries[i2])
            }
        }
    }
    return allData;
}

function getCookie3(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

function updateLocationData(ld) {
    $.cookie("selectedYear", ld);
}
