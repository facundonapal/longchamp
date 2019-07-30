(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    }
    ;
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
        }
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    }
    ;
    __webpack_require__.t = function(value, mode) {
        if (mode & 1)
            value = __webpack_require__(value);
        if (mode & 8)
            return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
            return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }
                .bind(null, key));
        return ns;
    }
    ;
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default'];
        }
        : function getModuleExports() {
            return module;
        }
        ;
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    }
    ;
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }
    ;
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 9);
}
)([(function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*!
* jQuery JavaScript Library v3.3.1
* https://jquery.com/
*
* Includes Sizzle.js
* https://sizzlejs.com/
*
* Copyright JS Foundation and other contributors
* Released under the MIT license
* https://jquery.org/license
*
* Date: 2018-01-20T17:24Z
*/
    (function(global, factory) {
        "use strict";
        if (true && typeof module.exports === "object") {
            module.exports = global.document ? factory(global, true) : function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            }
            ;
        } else {
            factory(global);
        }
    }
    )(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
        "use strict";
        var arr = [];
        var document = window.document;
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var concat = arr.concat;
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction(obj) {
            return typeof obj === "function" && typeof obj.nodeType !== "number";
        };
        var isWindow = function isWindow(obj) {
            return obj != null && obj === obj.window;
        };
        var preservedScriptAttributes = {
            type: true,
            src: true,
            noModule: true
        };
        function DOMEval(code, doc, node) {
            doc = doc || document;
            var i, script = doc.createElement("script");
            script.text = code;
            if (node) {
                for (i in preservedScriptAttributes) {
                    if (node[i]) {
                        script[i] = node[i];
                    }
                }
            }
            doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
            if (obj == null) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.3.1"
          , jQuery = function(selector, context) {
            return new jQuery.fn.init(selector,context);
        }
          , rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            length: 0,
            toArray: function() {
                return slice.call(this);
            },
            get: function(num) {
                if (num == null) {
                    return slice.call(this);
                }
                return num < 0 ? this[num + this.length] : this[num];
            },
            pushStack: function(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                ret.prevObject = this;
                return ret;
            },
            each: function(callback) {
                return jQuery.each(this, callback);
            },
            map: function(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem);
                }));
            },
            slice: function() {
                return this.pushStack(slice.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(i) {
                var len = this.length
                  , j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
            },
            end: function() {
                return this.prevObject || this.constructor();
            },
            push: push,
            sort: arr.sort,
            splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++;
            }
            if (typeof target !== "object" && !isFunction(target)) {
                target = {};
            }
            if (i === length) {
                target = this;
                i--;
            }
            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) {
                            continue;
                        }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && Array.isArray(src) ? src : [];
                            } else {
                                clone = src && jQuery.isPlainObject(src) ? src : {};
                            }
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }
            return target;
        }
        ;
        jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(msg) {
                throw new Error(msg);
            },
            noop: function() {},
            isPlainObject: function(obj) {
                var proto, Ctor;
                if (!obj || toString.call(obj) !== "[object Object]") {
                    return false;
                }
                proto = getProto(obj);
                if (!proto) {
                    return true;
                }
                Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) {
                    return false;
                }
                return true;
            },
            globalEval: function(code) {
                DOMEval(code);
            },
            each: function(obj, callback) {
                var length, i = 0;
                if (isArrayLike(obj)) {
                    length = obj.length;
                    for (; i < length; i++) {
                        if (callback.call(obj[i], i, obj[i]) === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        if (callback.call(obj[i], i, obj[i]) === false) {
                            break;
                        }
                    }
                }
                return obj;
            },
            trim: function(text) {
                return text == null ? "" : (text + "").replace(rtrim, "");
            },
            makeArray: function(arr, results) {
                var ret = results || [];
                if (arr != null) {
                    if (isArrayLike(Object(arr))) {
                        jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
                    } else {
                        push.call(ret, arr);
                    }
                }
                return ret;
            },
            inArray: function(elem, arr, i) {
                return arr == null ? -1 : indexOf.call(arr, elem, i);
            },
            merge: function(first, second) {
                var len = +second.length
                  , j = 0
                  , i = first.length;
                for (; j < len; j++) {
                    first[i++] = second[j];
                }
                first.length = i;
                return first;
            },
            grep: function(elems, callback, invert) {
                var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                for (; i < length; i++) {
                    callbackInverse = !callback(elems[i], i);
                    if (callbackInverse !== callbackExpect) {
                        matches.push(elems[i]);
                    }
                }
                return matches;
            },
            map: function(elems, callback, arg) {
                var length, value, i = 0, ret = [];
                if (isArrayLike(elems)) {
                    length = elems.length;
                    for (; i < length; i++) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value);
                        }
                    }
                } else {
                    for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) {
                            ret.push(value);
                        }
                    }
                }
                return concat.apply([], ret);
            },
            guid: 1,
            support: support
        });
        if (typeof Symbol === "function") {
            jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });
        function isArrayLike(obj) {
            var length = !!obj && "length"in obj && obj.length
              , type = toType(obj);
            if (isFunction(obj) || isWindow(obj)) {
                return false;
            }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1)in obj;
        }
        var Sizzle = /*!
* Sizzle CSS Selector Engine v2.3.3
* https://sizzlejs.com/
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2016-08-08
*/
        (function(window) {
            var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                }
                return 0;
            }, hasOwn = ({}).hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                var i = 0
                  , len = list.length;
                for (; i < len; i++) {
                    if (list[i] === elem) {
                        return i;
                    }
                }
                return -1;
            }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+","g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$","g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]","g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                "ID": new RegExp("^#(" + identifier + ")"),
                "CLASS": new RegExp("^\\.(" + identifier + ")"),
                "TAG": new RegExp("^(" + identifier + "|[*])"),
                "ATTR": new RegExp("^" + attributes),
                "PSEUDO": new RegExp("^" + pseudos),
                "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)","i"),
                "bool": new RegExp("^(?:" + booleans + ")$","i"),
                "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)","i")
            }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)","ig"), funescape = function(_, escaped, escapedWhitespace) {
                var high = "0x" + escaped - 0x10000;
                return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
            }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                if (asCodePoint) {
                    if (ch === "\0") {
                        return "\uFFFD";
                    }
                    return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                }
                return "\\" + ch;
            }, unloadHandler = function() {
                setDocument();
            }, disabledAncestor = addCombinator(function(elem) {
                return elem.disabled === true && ("form"in elem || "label"in elem);
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ? function(target, els) {
                        push_native.apply(target, slice.call(els));
                    }
                    : function(target, els) {
                        var j = target.length
                          , i = 0;
                        while ((target[j++] = els[i++])) {}
                        target.length = j - 1;
                    }
                };
            }
            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                results = results || [];
                if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                    return results;
                }
                if (!seed) {
                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;
                    if (documentIsHTML) {
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                            if ((m = match[1])) {
                                if (nodeType === 9) {
                                    if ((elem = context.getElementById(m))) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }
                                } else {
                                    if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }
                        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector;
                            } else if (context.nodeName.toLowerCase() !== "object") {
                                if ((nid = context.getAttribute("id"))) {
                                    nid = nid.replace(rcssescape, fcssescape);
                                } else {
                                    context.setAttribute("id", (nid = expando));
                                }
                                groups = tokenize(selector);
                                i = groups.length;
                                while (i--) {
                                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(",");
                                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            }
                            if (newSelector) {
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results;
                                } catch (qsaError) {} finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                }
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }
            function createCache() {
                var keys = [];
                function cache(key, value) {
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        delete cache[keys.shift()];
                    }
                    return (cache[key + " "] = value);
                }
                return cache;
            }
            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }
            function assert(fn) {
                var el = document.createElement("fieldset");
                try {
                    return !!fn(el);
                } catch (e) {
                    return false;
                } finally {
                    if (el.parentNode) {
                        el.parentNode.removeChild(el);
                    }
                    el = null;
                }
            }
            function addHandle(attrs, handler) {
                var arr = attrs.split("|")
                  , i = arr.length;
                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }
            function siblingCheck(a, b) {
                var cur = b && a
                  , diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
                if (diff) {
                    return diff;
                }
                if (cur) {
                    while ((cur = cur.nextSibling)) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }
                return a ? 1 : -1;
            }
            function createInputPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                }
                ;
            }
            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                }
                ;
            }
            function createDisabledPseudo(disabled) {
                return function(elem) {
                    if ("form"in elem) {
                        if (elem.parentNode && elem.disabled === false) {
                            if ("label"in elem) {
                                if ("label"in elem.parentNode) {
                                    return elem.parentNode.disabled === disabled;
                                } else {
                                    return elem.disabled === disabled;
                                }
                            }
                            return elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
                        }
                        return elem.disabled === disabled;
                    } else if ("label"in elem) {
                        return elem.disabled === disabled;
                    }
                    return false;
                }
                ;
            }
            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    argument = +argument;
                    return markFunction(function(seed, matches) {
                        var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                        while (i--) {
                            if (seed[(j = matchIndexes[i])]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }
            support = Sizzle.support = {};
            isXML = Sizzle.isXML = function(elem) {
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            }
            ;
            setDocument = Sizzle.setDocument = function(node) {
                var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                }
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);
                if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
                    if (subWindow.addEventListener) {
                        subWindow.addEventListener("unload", unloadHandler, false);
                    } else if (subWindow.attachEvent) {
                        subWindow.attachEvent("onunload", unloadHandler);
                    }
                }
                support.attributes = assert(function(el) {
                    el.className = "i";
                    return !el.getAttribute("className");
                });
                support.getElementsByTagName = assert(function(el) {
                    el.appendChild(document.createComment(""));
                    return !el.getElementsByTagName("*").length;
                });
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                support.getById = assert(function(el) {
                    docElem.appendChild(el).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                });
                if (support.getById) {
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId;
                        }
                        ;
                    }
                    ;
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [elem] : [];
                        }
                    }
                    ;
                } else {
                    Expr.filter["ID"] = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        }
                        ;
                    }
                    ;
                    Expr.find["ID"] = function(id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var node, i, elems, elem = context.getElementById(id);
                            if (elem) {
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) {
                                    return [elem];
                                }
                                elems = context.getElementsByName(id);
                                i = 0;
                                while ((elem = elems[i++])) {
                                    node = elem.getAttributeNode("id");
                                    if (node && node.value === id) {
                                        return [elem];
                                    }
                                }
                            }
                            return [];
                        }
                    }
                    ;
                }
                Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                    if (typeof context.getElementsByTagName !== "undefined") {
                        return context.getElementsByTagName(tag);
                    } else if (support.qsa) {
                        return context.querySelectorAll(tag);
                    }
                }
                : function(tag, context) {
                    var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                    if (tag === "*") {
                        while ((elem = results[i++])) {
                            if (elem.nodeType === 1) {
                                tmp.push(elem);
                            }
                        }
                        return tmp;
                    }
                    return results;
                }
                ;
                Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                }
                ;
                rbuggyMatches = [];
                rbuggyQSA = [];
                if ((support.qsa = rnative.test(document.querySelectorAll))) {
                    assert(function(el) {
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                        if (el.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        }
                        if (!el.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        }
                        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        }
                        if (!el.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        }
                        if (!el.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });
                    assert(function(el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        el.appendChild(input).setAttribute("name", "D");
                        if (el.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        }
                        if (el.querySelectorAll(":enabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }
                        docElem.appendChild(el).disabled = true;
                        if (el.querySelectorAll(":disabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }
                        el.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }
                if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
                    assert(function(el) {
                        support.disconnectedMatch = matches.call(el, "*");
                        matches.call(el, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }
                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                hasCompare = rnative.test(docElem.compareDocumentPosition);
                contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                    var adown = a.nodeType === 9 ? a.documentElement : a
                      , bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                }
                : function(a, b) {
                    if (b) {
                        while ((b = b.parentNode)) {
                            if (b === a) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                ;
                sortOrder = hasCompare ? function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    if (compare) {
                        return compare;
                    }
                    compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                    if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
                        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                            return 1;
                        }
                        return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                }
                : function(a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                        return 0;
                    }
                    var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
                    if (!aup || !bup) {
                        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
                    } else if (aup === bup) {
                        return siblingCheck(a, b);
                    }
                    cur = a;
                    while ((cur = cur.parentNode)) {
                        ap.unshift(cur);
                    }
                    cur = b;
                    while ((cur = cur.parentNode)) {
                        bp.unshift(cur);
                    }
                    while (ap[i] === bp[i]) {
                        i++;
                    }
                    return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                }
                ;
                return document;
            }
            ;
            Sizzle.matches = function(expr, elements) {
                return Sizzle(expr, null, null, elements);
            }
            ;
            Sizzle.matchesSelector = function(elem, expr) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                expr = expr.replace(rattributeQuotes, "='$1']");
                if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                    try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {}
                }
                return Sizzle(expr, document, null, [elem]).length > 0;
            }
            ;
            Sizzle.contains = function(context, elem) {
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            }
            ;
            Sizzle.attr = function(elem, name) {
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }
                var fn = Expr.attrHandle[name.toLowerCase()]
                  , val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            }
            ;
            Sizzle.escape = function(sel) {
                return (sel + "").replace(rcssescape, fcssescape);
            }
            ;
            Sizzle.error = function(msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            }
            ;
            Sizzle.uniqueSort = function(results) {
                var elem, duplicates = [], j = 0, i = 0;
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);
                if (hasDuplicate) {
                    while ((elem = results[i++])) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                }
                sortInput = null;
                return results;
            }
            ;
            getText = Sizzle.getText = function(elem) {
                var node, ret = "", i = 0, nodeType = elem.nodeType;
                if (!nodeType) {
                    while ((node = elem[i++])) {
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
                return ret;
            }
            ;
            Expr = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: matchExpr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    "ATTR": function(match) {
                        match[1] = match[1].replace(runescape, funescape);
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }
                        return match.slice(0, 4);
                    },
                    "CHILD": function(match) {
                        match[1] = match[1].toLowerCase();
                        if (match[1].slice(0, 3) === "nth") {
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            }
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +((match[7] + match[8]) || match[3] === "odd");
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }
                        return match;
                    },
                    "PSEUDO": function(match) {
                        var excess, unquoted = !match[6] && match[2];
                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        }
                        if (match[3]) {
                            match[2] = match[4] || match[5] || "";
                        } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }
                        return match.slice(0, 3);
                    }
                },
                filter: {
                    "TAG": function(nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ? function() {
                            return true;
                        }
                        : function(elem) {
                            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                        }
                        ;
                    },
                    "CLASS": function(className) {
                        var pattern = classCache[className + " "];
                        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                        });
                    },
                    "ATTR": function(name, operator, check) {
                        return function(elem) {
                            var result = Sizzle.attr(elem, name);
                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }
                            result += "";
                            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                        }
                        ;
                    },
                    "CHILD": function(type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth"
                          , forward = type.slice(-4) !== "last"
                          , ofType = what === "of-type";
                        return first === 1 && last === 0 ? function(elem) {
                            return !!elem.parentNode;
                        }
                        : function(elem, context, xml) {
                            var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                            if (parent) {
                                if (simple) {
                                    while (dir) {
                                        node = elem;
                                        while ((node = node[dir])) {
                                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                                return false;
                                            }
                                        }
                                        start = dir = type === "only" && !start && "nextSibling";
                                    }
                                    return true;
                                }
                                start = [forward ? parent.firstChild : parent.lastChild];
                                if (forward && useCache) {
                                    node = parent;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex && cache[2];
                                    node = nodeIndex && parent.childNodes[nodeIndex];
                                    while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                        if (node.nodeType === 1 && ++diff && node === elem) {
                                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                                            break;
                                        }
                                    }
                                } else {
                                    if (useCache) {
                                        node = elem;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex;
                                    }
                                    if (diff === false) {
                                        while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [dirruns, diff];
                                                }
                                                if (node === elem) {
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                                diff -= last;
                                return diff === first || (diff % first === 0 && diff / first >= 0);
                            }
                        }
                        ;
                    },
                    "PSEUDO": function(pseudo, argument) {
                        var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                        if (fn[expando]) {
                            return fn(argument);
                        }
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                var idx, matched = fn(seed, argument), i = matched.length;
                                while (i--) {
                                    idx = indexOf(seed, matched[i]);
                                    seed[idx] = !(matches[idx] = matched[i]);
                                }
                            }) : function(elem) {
                                return fn(elem, 0, args);
                            }
                            ;
                        }
                        return fn;
                    }
                },
                pseudos: {
                    "not": markFunction(function(selector) {
                        var input = []
                          , results = []
                          , matcher = compile(selector.replace(rtrim, "$1"));
                        return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                            var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                            while (i--) {
                                if ((elem = unmatched[i])) {
                                    seed[i] = !(matches[i] = elem);
                                }
                            }
                        }) : function(elem, context, xml) {
                            input[0] = elem;
                            matcher(input, null, xml, results);
                            input[0] = null;
                            return !results.pop();
                        }
                        ;
                    }),
                    "has": markFunction(function(selector) {
                        return function(elem) {
                            return Sizzle(selector, elem).length > 0;
                        }
                        ;
                    }),
                    "contains": markFunction(function(text) {
                        text = text.replace(runescape, funescape);
                        return function(elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                        }
                        ;
                    }),
                    "lang": markFunction(function(lang) {
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function(elem) {
                            var elemLang;
                            do {
                                if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);return false;
                        }
                        ;
                    }),
                    "target": function(elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },
                    "root": function(elem) {
                        return elem === docElem;
                    },
                    "focus": function(elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },
                    "enabled": createDisabledPseudo(false),
                    "disabled": createDisabledPseudo(true),
                    "checked": function(elem) {
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                    },
                    "selected": function(elem) {
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }
                        return elem.selected === true;
                    },
                    "empty": function(elem) {
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },
                    "parent": function(elem) {
                        return !Expr.pseudos["empty"](elem);
                    },
                    "header": function(elem) {
                        return rheader.test(elem.nodeName);
                    },
                    "input": function(elem) {
                        return rinputs.test(elem.nodeName);
                    },
                    "button": function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },
                    "text": function(elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    },
                    "first": createPositionalPseudo(function() {
                        return [0];
                    }),
                    "last": createPositionalPseudo(function(matchIndexes, length) {
                        return [length - 1];
                    }),
                    "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument];
                    }),
                    "even": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "odd": createPositionalPseudo(function(matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0; ) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),
                    "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length; ) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"];
            for (i in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {
                submit: true,
                reset: true
            }) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }
            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }
                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;
                while (soFar) {
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push((tokens = []));
                    }
                    matched = false;
                    if ((match = rcombinators.exec(soFar))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }
                    if (!matched) {
                        break;
                    }
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
            }
            ;
            function toSelector(tokens) {
                var i = 0
                  , len = tokens.length
                  , selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }
            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir
                  , skip = combinator.next
                  , key = skip || dir
                  , checkNonElements = base && key === "parentNode"
                  , doneName = done++;
                return combinator.first ? function(elem, context, xml) {
                    while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            return matcher(elem, context, xml);
                        }
                    }
                    return false;
                }
                : function(elem, context, xml) {
                    var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                    if (xml) {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                if (matcher(elem, context, xml)) {
                                    return true;
                                }
                            }
                        }
                    } else {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if (skip && skip === elem.nodeName.toLowerCase()) {
                                    elem = elem[dir] || elem;
                                } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                                    return (newCache[2] = oldCache[2]);
                                } else {
                                    uniqueCache[key] = newCache;
                                    if ((newCache[2] = matcher(elem, context, xml))) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                    return false;
                }
                ;
            }
            function elementMatcher(matchers) {
                return matchers.length > 1 ? function(elem, context, xml) {
                    var i = matchers.length;
                    while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                            return false;
                        }
                    }
                    return true;
                }
                : matchers[0];
            }
            function multipleContexts(selector, contexts, results) {
                var i = 0
                  , len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }
            function condense(unmatched, map, filter, context, xml) {
                var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }
                return newUnmatched;
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);
                        i = temp.length;
                        while (i--) {
                            if ((elem = temp[i])) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i])) {
                                        temp.push((matcherIn[i] = elem));
                                    }
                                }
                                postFinder(null, (matcherOut = []), temp, xml);
                            }
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }
                    } else {
                        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }
            function matcherFromTokens(tokens) {
                var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                    return elem === checkContext;
                }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                    return indexOf(checkContext, elem) > -1;
                }, implicitRelative, true), matchers = [function(elem, context, xml) {
                    var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    checkContext = null;
                    return ret;
                }
                ];
                for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                value: tokens[i - 2].type === " " ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                }
                return elementMatcher(matchers);
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0
                  , byElement = elementMatchers.length > 0
                  , superMatcher = function(seed, context, xml, results, outermost) {
                    var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1), len = elems.length;
                    if (outermost) {
                        outermostContext = context === document || context || outermost;
                    }
                    for (; i !== len && (elem = elems[i]) != null; i++) {
                        if (byElement && elem) {
                            j = 0;
                            if (!context && elem.ownerDocument !== document) {
                                setDocument(elem);
                                xml = !documentIsHTML;
                            }
                            while ((matcher = elementMatchers[j++])) {
                                if (matcher(elem, context || document, xml)) {
                                    results.push(elem);
                                    break;
                                }
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                            }
                        }
                        if (bySet) {
                            if ((elem = !matcher && elem)) {
                                matchedCount--;
                            }
                            if (seed) {
                                unmatched.push(elem);
                            }
                        }
                    }
                    matchedCount += i;
                    if (bySet && i !== matchedCount) {
                        j = 0;
                        while ((matcher = setMatchers[j++])) {
                            matcher(unmatched, setMatched, context, xml);
                        }
                        if (seed) {
                            if (matchedCount > 0) {
                                while (i--) {
                                    if (!(unmatched[i] || setMatched[i])) {
                                        setMatched[i] = pop.call(results);
                                    }
                                }
                            }
                            setMatched = condense(setMatched);
                        }
                        push.apply(results, setMatched);
                        if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                            Sizzle.uniqueSort(results);
                        }
                    }
                    if (outermost) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup;
                    }
                    return unmatched;
                };
                return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle.compile = function(selector, match) {
                var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                if (!cached) {
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    }
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                    cached.selector = selector;
                }
                return cached;
            }
            ;
            select = Sizzle.select = function(selector, context, results, seed) {
                var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize((selector = compiled.selector || selector));
                results = results || [];
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;
                        } else if (compiled) {
                            context = context.parentNode;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[(type = token.type)]) {
                            break;
                        }
                        if ((find = Expr.find[type])) {
                            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
                (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                return results;
            }
            ;
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support.detectDuplicates = !!hasDuplicate;
            setDocument();
            support.sortDetached = assert(function(el) {
                return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
            });
            if (!assert(function(el) {
                el.innerHTML = "<a href='#'></a>";
                return el.firstChild.getAttribute("href") === "#";
            })) {
                addHandle("type|href|height|width", function(elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }
            if (!support.attributes || !assert(function(el) {
                el.innerHTML = "<input/>";
                el.firstChild.setAttribute("value", "");
                return el.firstChild.getAttribute("value") === "";
            })) {
                addHandle("value", function(elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            }
            if (!assert(function(el) {
                return el.getAttribute("disabled") == null;
            })) {
                addHandle(booleans, function(elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }
                });
            }
            return Sizzle;
        }
        )(window);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir, until) {
            var matched = []
              , truncate = until !== undefined;
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break;
                    }
                    matched.push(elem);
                }
            }
            return matched;
        };
        var siblings = function(n, elem) {
            var matched = [];
            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }
            return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        ;var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
        function winnow(elements, qualifier, not) {
            if (isFunction(qualifier)) {
                return jQuery.grep(elements, function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not;
                });
            }
            if (qualifier.nodeType) {
                return jQuery.grep(elements, function(elem) {
                    return (elem === qualifier) !== not;
                });
            }
            if (typeof qualifier !== "string") {
                return jQuery.grep(elements, function(elem) {
                    return (indexOf.call(qualifier, elem) > -1) !== not;
                });
            }
            return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")";
            }
            if (elems.length === 1 && elem.nodeType === 1) {
                return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
            }
            return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1;
            }));
        }
        ;
        jQuery.fn.extend({
            find: function(selector) {
                var i, ret, len = this.length, self = this;
                if (typeof selector !== "string") {
                    return this.pushStack(jQuery(selector).filter(function() {
                        for (i = 0; i < len; i++) {
                            if (jQuery.contains(self[i], this)) {
                                return true;
                            }
                        }
                    }));
                }
                ret = this.pushStack([]);
                for (i = 0; i < len; i++) {
                    jQuery.find(selector, self[i], ret);
                }
                return len > 1 ? jQuery.uniqueSort(ret) : ret;
            },
            filter: function(selector) {
                return this.pushStack(winnow(this, selector || [], false));
            },
            not: function(selector) {
                return this.pushStack(winnow(this, selector || [], true));
            },
            is: function(selector) {
                return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
            }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
            var match, elem;
            if (!selector) {
                return this;
            }
            root = root || rootjQuery;
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                    match = [null, selector, null];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (isFunction(this[match])) {
                                    this[match](context[match]);
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem) {
                            this[0] = elem;
                            this.length = 1;
                        }
                        return this;
                    }
                } else if (!context || context.jquery) {
                    return (context || root).find(selector);
                } else {
                    return this.constructor(context).find(selector);
                }
            } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this;
            } else if (isFunction(selector)) {
                return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
            }
            return jQuery.makeArray(selector, this);
        }
        ;
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/
          , guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
        jQuery.fn.extend({
            has: function(target) {
                var targets = jQuery(target, this)
                  , l = targets.length;
                return this.filter(function() {
                    var i = 0;
                    for (; i < l; i++) {
                        if (jQuery.contains(this, targets[i])) {
                            return true;
                        }
                    }
                });
            },
            closest: function(selectors, context) {
                var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
                if (!rneedsContext.test(selectors)) {
                    for (; i < l; i++) {
                        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                                matched.push(cur);
                                break;
                            }
                        }
                    }
                }
                return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
            },
            index: function(elem) {
                if (!elem) {
                    return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
                }
                if (typeof elem === "string") {
                    return indexOf.call(jQuery(elem), this[0]);
                }
                return indexOf.call(this, elem.jquery ? elem[0] : elem);
            },
            add: function(selector, context) {
                return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
            },
            addBack: function(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
            }
        });
        function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {}
            return cur;
        }
        jQuery.each({
            parent: function(elem) {
                var parent = elem.parentNode;
                return parent && parent.nodeType !== 11 ? parent : null;
            },
            parents: function(elem) {
                return dir(elem, "parentNode");
            },
            parentsUntil: function(elem, i, until) {
                return dir(elem, "parentNode", until);
            },
            next: function(elem) {
                return sibling(elem, "nextSibling");
            },
            prev: function(elem) {
                return sibling(elem, "previousSibling");
            },
            nextAll: function(elem) {
                return dir(elem, "nextSibling");
            },
            prevAll: function(elem) {
                return dir(elem, "previousSibling");
            },
            nextUntil: function(elem, i, until) {
                return dir(elem, "nextSibling", until);
            },
            prevUntil: function(elem, i, until) {
                return dir(elem, "previousSibling", until);
            },
            siblings: function(elem) {
                return siblings((elem.parentNode || {}).firstChild, elem);
            },
            children: function(elem) {
                return siblings(elem.firstChild);
            },
            contents: function(elem) {
                if (nodeName(elem, "iframe")) {
                    return elem.contentDocument;
                }
                if (nodeName(elem, "template")) {
                    elem = elem.content || elem;
                }
                return jQuery.merge([], elem.childNodes);
            }
        }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var matched = jQuery.map(this, fn, until);
                if (name.slice(-5) !== "Until") {
                    selector = until;
                }
                if (selector && typeof selector === "string") {
                    matched = jQuery.filter(selector, matched);
                }
                if (this.length > 1) {
                    if (!guaranteedUnique[name]) {
                        jQuery.uniqueSort(matched);
                    }
                    if (rparentsprev.test(name)) {
                        matched.reverse();
                    }
                }
                return this.pushStack(matched);
            }
            ;
        });
        var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
        function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
                object[flag] = true;
            });
            return object;
        }
        jQuery.Callbacks = function(options) {
            options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
            var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                locked = locked || options.once;
                fired = firing = true;
                for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {
                        if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }
                if (!options.memory) {
                    memory = false;
                }
                firing = false;
                if (locked) {
                    if (memory) {
                        list = [];
                    } else {
                        list = "";
                    }
                }
            }, self = {
                add: function() {
                    if (list) {
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }
                        (function add(args) {
                            jQuery.each(args, function(_, arg) {
                                if (isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && toType(arg) !== "string") {
                                    add(arg);
                                }
                            });
                        }
                        )(arguments);
                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                },
                remove: function() {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                },
                has: function(fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                },
                empty: function() {
                    if (list) {
                        list = [];
                    }
                    return this;
                },
                disable: function() {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function() {
                    return !list;
                },
                lock: function() {
                    locked = queue = [];
                    if (!memory && !firing) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function() {
                    return !!locked;
                },
                fireWith: function(context, args) {
                    if (!locked) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                },
                fire: function() {
                    self.fireWith(this, arguments);
                    return this;
                },
                fired: function() {
                    return !!fired;
                }
            };
            return self;
        }
        ;
        function Identity(v) {
            return v;
        }
        function Thrower(ex) {
            throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
            var method;
            try {
                if (value && isFunction((method = value.promise))) {
                    method.call(value).done(resolve).fail(reject);
                } else if (value && isFunction((method = value.then))) {
                    method.call(value, resolve, reject);
                } else {
                    resolve.apply(undefined, [value].slice(noValue));
                }
            } catch (value) {
                reject.apply(undefined, [value]);
            }
        }
        jQuery.extend({
            Deferred: function(func) {
                var tuples = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]]
                  , state = "pending"
                  , promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    "catch": function(fn) {
                        return promise.then(null, fn);
                    },
                    pipe: function() {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && isFunction(returned.promise)) {
                                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    then: function(onFulfilled, onRejected, onProgress) {
                        var maxDepth = 0;
                        function resolve(depth, deferred, handler, special) {
                            return function() {
                                var that = this
                                  , args = arguments
                                  , mightThrow = function() {
                                    var returned, then;
                                    if (depth < maxDepth) {
                                        return;
                                    }
                                    returned = handler.apply(that, args);
                                    if (returned === deferred.promise()) {
                                        throw new TypeError("Thenable self-resolution");
                                    }
                                    then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                    if (isFunction(then)) {
                                        if (special) {
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                        } else {
                                            maxDepth++;
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                        }
                                    } else {
                                        if (handler !== Identity) {
                                            that = undefined;
                                            args = [returned];
                                        }
                                        (special || deferred.resolveWith)(that, args);
                                    }
                                }
                                  , process = special ? mightThrow : function() {
                                    try {
                                        mightThrow();
                                    } catch (e) {
                                        if (jQuery.Deferred.exceptionHook) {
                                            jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                        }
                                        if (depth + 1 >= maxDepth) {
                                            if (handler !== Thrower) {
                                                that = undefined;
                                                args = [e];
                                            }
                                            deferred.rejectWith(that, args);
                                        }
                                    }
                                }
                                ;
                                if (depth) {
                                    process();
                                } else {
                                    if (jQuery.Deferred.getStackHook) {
                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                    }
                                    window.setTimeout(process);
                                }
                            }
                            ;
                        }
                        return jQuery.Deferred(function(newDefer) {
                            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                        }).promise();
                    },
                    promise: function(obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise;
                    }
                }
                  , deferred = {};
                jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2]
                      , stateString = tuple[5];
                    promise[tuple[1]] = list.add;
                    if (stateString) {
                        list.add(function() {
                            state = stateString;
                        }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
                    }
                    list.add(tuple[3].fire);
                    deferred[tuple[0]] = function() {
                        deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                        return this;
                    }
                    ;
                    deferred[tuple[0] + "With"] = list.fireWith;
                });
                promise.promise(deferred);
                if (func) {
                    func.call(deferred, deferred);
                }
                return deferred;
            },
            when: function(singleValue) {
                var remaining = arguments.length
                  , i = remaining
                  , resolveContexts = Array(i)
                  , resolveValues = slice.call(arguments)
                  , master = jQuery.Deferred()
                  , updateFunc = function(i) {
                    return function(value) {
                        resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (!(--remaining)) {
                            master.resolveWith(resolveContexts, resolveValues);
                        }
                    }
                    ;
                };
                if (remaining <= 1) {
                    adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
                    if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                        return master.then();
                    }
                }
                while (i--) {
                    adoptValue(resolveValues[i], updateFunc(i), master.reject);
                }
                return master.promise();
            }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
            if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
                window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
            }
        }
        ;
        jQuery.readyException = function(error) {
            window.setTimeout(function() {
                throw error;
            });
        }
        ;
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
            readyList.then(fn).catch(function(error) {
                jQuery.readyException(error);
            });
            return this;
        }
        ;
        jQuery.extend({
            isReady: false,
            readyWait: 1,
            ready: function(wait) {
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                    return;
                }
                jQuery.isReady = true;
                if (wait !== true && --jQuery.readyWait > 0) {
                    return;
                }
                readyList.resolveWith(document, [jQuery]);
            }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
            jQuery.ready();
        }
        if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
            window.setTimeout(jQuery.ready);
        } else {
            document.addEventListener("DOMContentLoaded", completed);
            window.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0
              , len = elems.length
              , bulk = key == null;
            if (toType(key) === "object") {
                chainable = true;
                for (i in key) {
                    access(elems, fn, i, key[i], true, emptyGet, raw);
                }
            } else if (value !== undefined) {
                chainable = true;
                if (!isFunction(value)) {
                    raw = true;
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null;
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value);
                        }
                        ;
                    }
                }
                if (fn) {
                    for (; i < len; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                }
            }
            if (chainable) {
                return elems;
            }
            if (bulk) {
                return fn.call(elems);
            }
            return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/
          , rdashAlpha = /-([a-z])/g;
        function fcamelCase(all, letter) {
            return letter.toUpperCase();
        }
        function camelCase(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
            return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
        };
        function Data() {
            this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
            cache: function(owner) {
                var value = owner[this.expando];
                if (!value) {
                    value = {};
                    if (acceptData(owner)) {
                        if (owner.nodeType) {
                            owner[this.expando] = value;
                        } else {
                            Object.defineProperty(owner, this.expando, {
                                value: value,
                                configurable: true
                            });
                        }
                    }
                }
                return value;
            },
            set: function(owner, data, value) {
                var prop, cache = this.cache(owner);
                if (typeof data === "string") {
                    cache[camelCase(data)] = value;
                } else {
                    for (prop in data) {
                        cache[camelCase(prop)] = data[prop];
                    }
                }
                return cache;
            },
            get: function(owner, key) {
                return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
            },
            access: function(owner, key, value) {
                if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
                    return this.get(owner, key);
                }
                this.set(owner, key, value);
                return value !== undefined ? value : key;
            },
            remove: function(owner, key) {
                var i, cache = owner[this.expando];
                if (cache === undefined) {
                    return;
                }
                if (key !== undefined) {
                    if (Array.isArray(key)) {
                        key = key.map(camelCase);
                    } else {
                        key = camelCase(key);
                        key = key in cache ? [key] : (key.match(rnothtmlwhite) || []);
                    }
                    i = key.length;
                    while (i--) {
                        delete cache[key[i]];
                    }
                }
                if (key === undefined || jQuery.isEmptyObject(cache)) {
                    if (owner.nodeType) {
                        owner[this.expando] = undefined;
                    } else {
                        delete owner[this.expando];
                    }
                }
            },
            hasData: function(owner) {
                var cache = owner[this.expando];
                return cache !== undefined && !jQuery.isEmptyObject(cache);
            }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , rmultiDash = /[A-Z]/g;
        function getData(data) {
            if (data === "true") {
                return true;
            }
            if (data === "false") {
                return false;
            }
            if (data === "null") {
                return null;
            }
            if (data === +data + "") {
                return +data;
            }
            if (rbrace.test(data)) {
                return JSON.parse(data);
            }
            return data;
        }
        function dataAttr(elem, key, data) {
            var name;
            if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try {
                        data = getData(data);
                    } catch (e) {}
                    dataUser.set(elem, key, data);
                } else {
                    data = undefined;
                }
            }
            return data;
        }
        jQuery.extend({
            hasData: function(elem) {
                return dataUser.hasData(elem) || dataPriv.hasData(elem);
            },
            data: function(elem, name, data) {
                return dataUser.access(elem, name, data);
            },
            removeData: function(elem, name) {
                dataUser.remove(elem, name);
            },
            _data: function(elem, name, data) {
                return dataPriv.access(elem, name, data);
            },
            _removeData: function(elem, name) {
                dataPriv.remove(elem, name);
            }
        });
        jQuery.fn.extend({
            data: function(key, value) {
                var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                if (key === undefined) {
                    if (this.length) {
                        data = dataUser.get(elem);
                        if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                            i = attrs.length;
                            while (i--) {
                                if (attrs[i]) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name]);
                                    }
                                }
                            }
                            dataPriv.set(elem, "hasDataAttrs", true);
                        }
                    }
                    return data;
                }
                if (typeof key === "object") {
                    return this.each(function() {
                        dataUser.set(this, key);
                    });
                }
                return access(this, function(value) {
                    var data;
                    if (elem && value === undefined) {
                        data = dataUser.get(elem, key);
                        if (data !== undefined) {
                            return data;
                        }
                        data = dataAttr(elem, key);
                        if (data !== undefined) {
                            return data;
                        }
                        return;
                    }
                    this.each(function() {
                        dataUser.set(this, key, value);
                    });
                }, null, value, arguments.length > 1, null, true);
            },
            removeData: function(key) {
                return this.each(function() {
                    dataUser.remove(this, key);
                });
            }
        });
        jQuery.extend({
            queue: function(elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = dataPriv.get(elem, type);
                    if (data) {
                        if (!queue || Array.isArray(data)) {
                            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                        } else {
                            queue.push(data);
                        }
                    }
                    return queue || [];
                }
            },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type)
                  , startLength = queue.length
                  , fn = queue.shift()
                  , hooks = jQuery._queueHooks(elem, type)
                  , next = function() {
                    jQuery.dequeue(elem, type);
                };
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--;
                }
                if (fn) {
                    if (type === "fx") {
                        queue.unshift("inprogress");
                    }
                    delete hooks.stop;
                    fn.call(elem, next, hooks);
                }
                if (!startLength && hooks) {
                    hooks.empty.fire();
                }
            },
            _queueHooks: function(elem, type) {
                var key = type + "queueHooks";
                return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function() {
                        dataPriv.remove(elem, [type + "queue", key]);
                    })
                });
            }
        });
        jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--;
                }
                if (arguments.length < setter) {
                    return jQuery.queue(this[0], type);
                }
                return data === undefined ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type);
                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            dequeue: function(type) {
                return this.each(function() {
                    jQuery.dequeue(this, type);
                });
            },
            clearQueue: function(type) {
                return this.queue(type || "fx", []);
            },
            promise: function(type, obj) {
                var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                    if (!(--count)) {
                        defer.resolveWith(elements, [elements]);
                    }
                };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined;
                }
                type = type || "fx";
                while (i--) {
                    tmp = dataPriv.get(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve);
                    }
                }
                resolve();
                return defer.promise(obj);
            }
        });
        var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$","i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var isHiddenWithinTree = function(elem, el) {
            elem = el || elem;
            return elem.style.display === "none" || elem.style.display === "" && jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
        };
        var swap = function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        };
        function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                return tween.cur();
            }
            : function() {
                return jQuery.css(elem, prop, "");
            }
            , initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
            if (initialInUnit && initialInUnit[3] !== unit) {
                initial = initial / 2;
                unit = unit || initialInUnit[3];
                initialInUnit = +initial || 1;
                while (maxIterations--) {
                    jQuery.style(elem, prop, initialInUnit + unit);
                    if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                        maxIterations = 0;
                    }
                    initialInUnit = initialInUnit / scale;
                }
                initialInUnit = initialInUnit * 2;
                jQuery.style(elem, prop, initialInUnit + unit);
                valueParts = valueParts || [];
            }
            if (valueParts) {
                initialInUnit = +initialInUnit || +initial || 0;
                adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                if (tween) {
                    tween.unit = unit;
                    tween.start = initialInUnit;
                    tween.end = adjusted;
                }
            }
            return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
            var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
            if (display) {
                return display;
            }
            temp = doc.body.appendChild(doc.createElement(nodeName));
            display = jQuery.css(temp, "display");
            temp.parentNode.removeChild(temp);
            if (display === "none") {
                display = "block";
            }
            defaultDisplayMap[nodeName] = display;
            return display;
        }
        function showHide(elements, show) {
            var display, elem, values = [], index = 0, length = elements.length;
            for (; index < length; index++) {
                elem = elements[index];
                if (!elem.style) {
                    continue;
                }
                display = elem.style.display;
                if (show) {
                    if (display === "none") {
                        values[index] = dataPriv.get(elem, "display") || null;
                        if (!values[index]) {
                            elem.style.display = "";
                        }
                    }
                    if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                        values[index] = getDefaultDisplay(elem);
                    }
                } else {
                    if (display !== "none") {
                        values[index] = "none";
                        dataPriv.set(elem, "display", display);
                    }
                }
            }
            for (index = 0; index < length; index++) {
                if (values[index] != null) {
                    elements[index].style.display = values[index];
                }
            }
            return elements;
        }
        jQuery.fn.extend({
            show: function() {
                return showHide(this, true);
            },
            hide: function() {
                return showHide(this);
            },
            toggle: function(state) {
                if (typeof state === "boolean") {
                    return state ? this.show() : this.hide();
                }
                return this.each(function() {
                    if (isHiddenWithinTree(this)) {
                        jQuery(this).show();
                    } else {
                        jQuery(this).hide();
                    }
                });
            }
        });
        var rcheckableType = (/^(?:checkbox|radio)$/i);
        var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);
        var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);
        var wrapMap = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        function getAll(context, tag) {
            var ret;
            if (typeof context.getElementsByTagName !== "undefined") {
                ret = context.getElementsByTagName(tag || "*");
            } else if (typeof context.querySelectorAll !== "undefined") {
                ret = context.querySelectorAll(tag || "*");
            } else {
                ret = [];
            }
            if (tag === undefined || tag && nodeName(context, tag)) {
                return jQuery.merge([context], ret);
            }
            return ret;
        }
        function setGlobalEval(elems, refElements) {
            var i = 0
              , l = elems.length;
            for (; i < l; i++) {
                dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
            }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
            for (; i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (toType(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = "";
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while ((elem = nodes[i++])) {
                if (selection && jQuery.inArray(elem, selection) > -1) {
                    if (ignored) {
                        ignored.push(elem);
                    }
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while ((elem = tmp[j++])) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            return fragment;
        }
        (function() {
            var fragment = document.createDocumentFragment()
              , div = fragment.appendChild(document.createElement("div"))
              , input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("checked", "checked");
            input.setAttribute("name", "t");
            div.appendChild(input);
            support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
            div.innerHTML = "<textarea>x</textarea>";
            support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        }
        )();
        var documentElement = document.documentElement;
        var rkeyEvent = /^key/
          , rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
            return true;
        }
        function returnFalse() {
            return false;
        }
        function safeActiveElement() {
            try {
                return document.activeElement;
            } catch (err) {}
        }
        function on(elem, types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    on(elem, type, selector, data, types[type], one);
                }
                return elem;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return elem;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                }
                ;
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return elem.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        }
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                if (!elemData) {
                    return;
                }
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector;
                }
                if (selector) {
                    jQuery.find.matchesSelector(documentElement, selector);
                }
                if (!handler.guid) {
                    handler.guid = jQuery.guid++;
                }
                if (!(events = elemData.events)) {
                    events = elemData.events = {};
                }
                if (!(eventHandle = elemData.handle)) {
                    eventHandle = elemData.handle = function(e) {
                        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                    }
                    ;
                }
                types = (types || "").match(rnothtmlwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = jQuery.event.special[type] || {};
                    handleObj = jQuery.extend({
                        type: type,
                        origType: origType,
                        data: data,
                        handler: handler,
                        guid: handler.guid,
                        selector: selector,
                        needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                        namespace: namespaces.join(".")
                    }, handleObjIn);
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                            if (elem.addEventListener) {
                                elem.addEventListener(type, eventHandle);
                            }
                        }
                    }
                    if (special.add) {
                        special.add.call(elem, handleObj);
                        if (!handleObj.handler.guid) {
                            handleObj.handler.guid = handler.guid;
                        }
                    }
                    if (selector) {
                        handlers.splice(handlers.delegateCount++, 0, handleObj);
                    } else {
                        handlers.push(handleObj);
                    }
                    jQuery.event.global[type] = true;
                }
            },
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                if (!elemData || !(events = elemData.events)) {
                    return;
                }
                types = (types || "").match(rnothtmlwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        for (type in events) {
                            jQuery.event.remove(elem, type + types[t], handler, selector, true);
                        }
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) {
                                handlers.delegateCount--;
                            }
                            if (special.remove) {
                                special.remove.call(elem, handleObj);
                            }
                        }
                    }
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                            jQuery.removeEvent(elem, type, elemData.handle);
                        }
                        delete events[type];
                    }
                }
                if (jQuery.isEmptyObject(events)) {
                    dataPriv.remove(elem, "handle events");
                }
            },
            dispatch: function(nativeEvent) {
                var event = jQuery.event.fix(nativeEvent);
                var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), handlers = (dataPriv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
                args[0] = event;
                for (i = 1; i < arguments.length; i++) {
                    args[i] = arguments[i];
                }
                event.delegateTarget = this;
                if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                    return;
                }
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                        if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                    }
                }
                if (special.postDispatch) {
                    special.postDispatch.call(this, event);
                }
                return event.result;
            },
            handlers: function(event, handlers) {
                var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
                    for (; cur !== this; cur = cur.parentNode || this) {
                        if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                            matchedHandlers = [];
                            matchedSelectors = {};
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matchedSelectors[sel] === undefined) {
                                    matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                                }
                                if (matchedSelectors[sel]) {
                                    matchedHandlers.push(handleObj);
                                }
                            }
                            if (matchedHandlers.length) {
                                handlerQueue.push({
                                    elem: cur,
                                    handlers: matchedHandlers
                                });
                            }
                        }
                    }
                }
                cur = this;
                if (delegateCount < handlers.length) {
                    handlerQueue.push({
                        elem: cur,
                        handlers: handlers.slice(delegateCount)
                    });
                }
                return handlerQueue;
            },
            addProp: function(name, hook) {
                Object.defineProperty(jQuery.Event.prototype, name, {
                    enumerable: true,
                    configurable: true,
                    get: isFunction(hook) ? function() {
                        if (this.originalEvent) {
                            return hook(this.originalEvent);
                        }
                    }
                    : function() {
                        if (this.originalEvent) {
                            return this.originalEvent[name];
                        }
                    }
                    ,
                    set: function(value) {
                        Object.defineProperty(this, name, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: value
                        });
                    }
                });
            },
            fix: function(originalEvent) {
                return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== safeActiveElement() && this.focus) {
                            this.focus();
                            return false;
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === safeActiveElement() && this.blur) {
                            this.blur();
                            return false;
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
                            this.click();
                            return false;
                        }
                    },
                    _default: function(event) {
                        return nodeName(event.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(event) {
                        if (event.result !== undefined && event.originalEvent) {
                            event.originalEvent.returnValue = event.result;
                        }
                    }
                }
            }
        };
        jQuery.removeEvent = function(elem, type, handle) {
            if (elem.removeEventListener) {
                elem.removeEventListener(type, handle);
            }
        }
        ;
        jQuery.Event = function(src, props) {
            if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src,props);
            }
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
                this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
                this.target = (src.target && src.target.nodeType === 3) ? src.target.parentNode : src.target;
                this.currentTarget = src.currentTarget;
                this.relatedTarget = src.relatedTarget;
            } else {
                this.type = src;
            }
            if (props) {
                jQuery.extend(this, props);
            }
            this.timeStamp = src && src.timeStamp || Date.now();
            this[jQuery.expando] = true;
        }
        ;
        jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (e && !this.isSimulated) {
                    e.preventDefault();
                }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopPropagation();
                }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue;
                if (e && !this.isSimulated) {
                    e.stopImmediatePropagation();
                }
                this.stopPropagation();
            }
        };
        jQuery.each({
            altKey: true,
            bubbles: true,
            cancelable: true,
            changedTouches: true,
            ctrlKey: true,
            detail: true,
            eventPhase: true,
            metaKey: true,
            pageX: true,
            pageY: true,
            shiftKey: true,
            view: true,
            "char": true,
            charCode: true,
            key: true,
            keyCode: true,
            button: true,
            buttons: true,
            clientX: true,
            clientY: true,
            offsetX: true,
            offsetY: true,
            pointerId: true,
            pointerType: true,
            screenX: true,
            screenY: true,
            targetTouches: true,
            toElement: true,
            touches: true,
            which: function(event) {
                var button = event.button;
                if (event.which == null && rkeyEvent.test(event.type)) {
                    return event.charCode != null ? event.charCode : event.keyCode;
                }
                if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                    if (button & 1) {
                        return 1;
                    }
                    if (button & 2) {
                        return 3;
                    }
                    if (button & 4) {
                        return 2;
                    }
                    return 0;
                }
                return event.which;
            }
        }, jQuery.event.addProp);
        jQuery.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function(event) {
                    var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                    if (!related || (related !== target && !jQuery.contains(target, related))) {
                        event.type = handleObj.origType;
                        ret = handleObj.handler.apply(this, arguments);
                        event.type = fix;
                    }
                    return ret;
                }
            };
        });
        jQuery.fn.extend({
            on: function(types, selector, data, fn) {
                return on(this, types, selector, data, fn);
            },
            one: function(types, selector, data, fn) {
                return on(this, types, selector, data, fn, 1);
            },
            off: function(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                    return this;
                }
                if (typeof types === "object") {
                    for (type in types) {
                        this.off(type, selector, types[type]);
                    }
                    return this;
                }
                if (selector === false || typeof selector === "function") {
                    fn = selector;
                    selector = undefined;
                }
                if (fn === false) {
                    fn = returnFalse;
                }
                return this.each(function() {
                    jQuery.event.remove(this, types, fn, selector);
                });
            }
        });
        var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , rnoInnerhtml = /<script|<style|<link/i
          , rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i
          , rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function manipulationTarget(elem, content) {
            if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
                return jQuery(elem).children("tbody")[0] || elem;
            }
            return elem;
        }
        function disableScript(elem) {
            elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
            return elem;
        }
        function restoreScript(elem) {
            if ((elem.type || "").slice(0, 5) === "true/") {
                elem.type = elem.type.slice(5);
            } else {
                elem.removeAttribute("type");
            }
            return elem;
        }
        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (dest.nodeType !== 1) {
                return;
            }
            if (dataPriv.hasData(src)) {
                pdataOld = dataPriv.access(src);
                pdataCur = dataPriv.set(dest, pdataOld);
                events = pdataOld.events;
                if (events) {
                    delete pdataCur.handle;
                    pdataCur.events = {};
                    for (type in events) {
                        for (i = 0,
                        l = events[type].length; i < l; i++) {
                            jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                }
            }
            if (dataUser.hasData(src)) {
                udataOld = dataUser.access(src);
                udataCur = jQuery.extend({}, udataOld);
                dataUser.set(dest, udataCur);
            }
        }
        function fixInput(src, dest) {
            var nodeName = dest.nodeName.toLowerCase();
            if (nodeName === "input" && rcheckableType.test(src.type)) {
                dest.checked = src.checked;
            } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue;
            }
        }
        function domManip(collection, args, callback, ignored) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
            if (valueIsFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
                return collection.each(function(index) {
                    var self = collection.eq(index);
                    if (valueIsFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    domManip(self, args, callback, ignored);
                });
            }
            if (l) {
                fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first || ignored) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (; i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(collection[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src && (node.type || "").toLowerCase() !== "module") {
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src);
                                    }
                                } else {
                                    DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
                                }
                            }
                        }
                    }
                }
            }
            return collection;
        }
        function remove(elem, selector, keepData) {
            var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
            for (; (node = nodes[i]) != null; i++) {
                if (!keepData && node.nodeType === 1) {
                    jQuery.cleanData(getAll(node));
                }
                if (node.parentNode) {
                    if (keepData && jQuery.contains(node.ownerDocument, node)) {
                        setGlobalEval(getAll(node, "script"));
                    }
                    node.parentNode.removeChild(node);
                }
            }
            return elem;
        }
        jQuery.extend({
            htmlPrefilter: function(html) {
                return html.replace(rxhtmlTag, "<$1></$2>");
            },
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = jQuery.contains(elem.ownerDocument, elem);
                if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0,
                    l = srcElements.length; i < l; i++) {
                        fixInput(srcElements[i], destElements[i]);
                    }
                }
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0,
                        l = srcElements.length; i < l; i++) {
                            cloneCopyEvent(srcElements[i], destElements[i]);
                        }
                    } else {
                        cloneCopyEvent(elem, clone);
                    }
                }
                destElements = getAll(clone, "script");
                if (destElements.length > 0) {
                    setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                }
                return clone;
            },
            cleanData: function(elems) {
                var data, elem, type, special = jQuery.event.special, i = 0;
                for (; (elem = elems[i]) !== undefined; i++) {
                    if (acceptData(elem)) {
                        if ((data = elem[dataPriv.expando])) {
                            if (data.events) {
                                for (type in data.events) {
                                    if (special[type]) {
                                        jQuery.event.remove(elem, type);
                                    } else {
                                        jQuery.removeEvent(elem, type, data.handle);
                                    }
                                }
                            }
                            elem[dataPriv.expando] = undefined;
                        }
                        if (elem[dataUser.expando]) {
                            elem[dataUser.expando] = undefined;
                        }
                    }
                }
            }
        });
        jQuery.fn.extend({
            detach: function(selector) {
                return remove(this, selector, true);
            },
            remove: function(selector) {
                return remove(this, selector);
            },
            text: function(value) {
                return access(this, function(value) {
                    return value === undefined ? jQuery.text(this) : this.empty().each(function() {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = value;
                        }
                    });
                }, null, value, arguments.length);
            },
            append: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem);
                    }
                });
            },
            prepend: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild);
                    }
                });
            },
            before: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this);
                    }
                });
            },
            after: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(elem, this.nextSibling);
                    }
                });
            },
            empty: function() {
                var elem, i = 0;
                for (; (elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false));
                        elem.textContent = "";
                    }
                }
                return this;
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function() {
                    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                });
            },
            html: function(value) {
                return access(this, function(value) {
                    var elem = this[0] || {}
                      , i = 0
                      , l = this.length;
                    if (value === undefined && elem.nodeType === 1) {
                        return elem.innerHTML;
                    }
                    if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = jQuery.htmlPrefilter(value);
                        try {
                            for (; i < l; i++) {
                                elem = this[i] || {};
                                if (elem.nodeType === 1) {
                                    jQuery.cleanData(getAll(elem, false));
                                    elem.innerHTML = value;
                                }
                            }
                            elem = 0;
                        } catch (e) {}
                    }
                    if (elem) {
                        this.empty().append(value);
                    }
                }, null, value, arguments.length);
            },
            replaceWith: function() {
                var ignored = [];
                return domManip(this, arguments, function(elem) {
                    var parent = this.parentNode;
                    if (jQuery.inArray(this, ignored) < 0) {
                        jQuery.cleanData(getAll(this));
                        if (parent) {
                            parent.replaceChild(elem, this);
                        }
                    }
                }, ignored);
            }
        });
        jQuery.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                for (; i <= last; i++) {
                    elems = i === last ? this : this.clone(true);
                    jQuery(insert[i])[original](elems);
                    push.apply(ret, elems.get());
                }
                return this.pushStack(ret);
            }
            ;
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$","i");
        var getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
                view = window;
            }
            return view.getComputedStyle(elem);
        };
        var rboxStyle = new RegExp(cssExpand.join("|"),"i");
        (function() {
            function computeStyleTests() {
                if (!div) {
                    return;
                }
                container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                documentElement.appendChild(container).appendChild(div);
                var divStyle = window.getComputedStyle(div);
                pixelPositionVal = divStyle.top !== "1%";
                reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
                div.style.right = "60%";
                pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
                boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
                div.style.position = "absolute";
                scrollboxSizeVal = div.offsetWidth === 36 || "absolute";
                documentElement.removeChild(container);
                div = null;
            }
            function roundPixelMeasures(measure) {
                return Math.round(parseFloat(measure));
            }
            var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
            if (!div.style) {
                return;
            }
            div.style.backgroundClip = "content-box";
            div.cloneNode(true).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            jQuery.extend(support, {
                boxSizingReliable: function() {
                    computeStyleTests();
                    return boxSizingReliableVal;
                },
                pixelBoxStyles: function() {
                    computeStyleTests();
                    return pixelBoxStylesVal;
                },
                pixelPosition: function() {
                    computeStyleTests();
                    return pixelPositionVal;
                },
                reliableMarginLeft: function() {
                    computeStyleTests();
                    return reliableMarginLeftVal;
                },
                scrollboxSize: function() {
                    computeStyleTests();
                    return scrollboxSizeVal;
                }
            });
        }
        )();
        function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            if (computed) {
                ret = computed.getPropertyValue(name) || computed[name];
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name);
                }
                if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret !== undefined ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function() {
                    if (conditionFn()) {
                        delete this.get;
                        return;
                    }
                    return (this.get = hookFn).apply(this, arguments);
                }
            };
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/
          , rcustomProp = /^--/
          , cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , cssPrefixes = ["Webkit", "Moz", "ms"]
          , emptyStyle = document.createElement("div").style;
        function vendorPropName(name) {
            if (name in emptyStyle) {
                return name;
            }
            var capName = name[0].toUpperCase() + name.slice(1)
              , i = cssPrefixes.length;
            while (i--) {
                name = cssPrefixes[i] + capName;
                if (name in emptyStyle) {
                    return name;
                }
            }
        }
        function finalPropName(name) {
            var ret = jQuery.cssProps[name];
            if (!ret) {
                ret = jQuery.cssProps[name] = vendorPropName(name) || name;
            }
            return ret;
        }
        function setPositiveNumber(elem, value, subtract) {
            var matches = rcssNum.exec(value);
            return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
            var i = dimension === "width" ? 1 : 0
              , extra = 0
              , delta = 0;
            if (box === (isBorderBox ? "border" : "content")) {
                return 0;
            }
            for (; i < 4; i += 2) {
                if (box === "margin") {
                    delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                }
                if (!isBorderBox) {
                    delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    if (box !== "padding") {
                        delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    } else {
                        extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                } else {
                    if (box === "content") {
                        delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                    }
                    if (box !== "margin") {
                        delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                }
            }
            if (!isBorderBox && computedVal >= 0) {
                delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5));
            }
            return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
            var styles = getStyles(elem)
              , val = curCSS(elem, dimension, styles)
              , isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"
              , valueIsBorderBox = isBorderBox;
            if (rnumnonpx.test(val)) {
                if (!extra) {
                    return val;
                }
                val = "auto";
            }
            valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]);
            if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {
                val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];
                valueIsBorderBox = true;
            }
            val = parseFloat(val) || 0;
            return (val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val)) + "px";
        }
        jQuery.extend({
            cssHooks: {
                opacity: {
                    get: function(elem, computed) {
                        if (computed) {
                            var ret = curCSS(elem, "opacity");
                            return ret === "" ? "1" : ret;
                        }
                    }
                }
            },
            cssNumber: {
                "animationIterationCount": true,
                "columnCount": true,
                "fillOpacity": true,
                "flexGrow": true,
                "flexShrink": true,
                "fontWeight": true,
                "lineHeight": true,
                "opacity": true,
                "order": true,
                "orphans": true,
                "widows": true,
                "zIndex": true,
                "zoom": true
            },
            cssProps: {},
            style: function(elem, name, value, extra) {
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                    return;
                }
                var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                if (!isCustomProp) {
                    name = finalPropName(origName);
                }
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (value !== undefined) {
                    type = typeof value;
                    if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                        value = adjustCSS(elem, name, ret);
                        type = "number";
                    }
                    if (value == null || value !== value) {
                        return;
                    }
                    if (type === "number") {
                        value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                    }
                    if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                        style[name] = "inherit";
                    }
                    if (!hooks || !("set"in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                        if (isCustomProp) {
                            style.setProperty(name, value);
                        } else {
                            style[name] = value;
                        }
                    }
                } else {
                    if (hooks && "get"in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                        return ret;
                    }
                    return style[name];
                }
            },
            css: function(elem, name, extra, styles) {
                var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                if (!isCustomProp) {
                    name = finalPropName(origName);
                }
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (hooks && "get"in hooks) {
                    val = hooks.get(elem, true, extra);
                }
                if (val === undefined) {
                    val = curCSS(elem, name, styles);
                }
                if (val === "normal" && name in cssNormalTransform) {
                    val = cssNormalTransform[name];
                }
                if (extra === "" || extra) {
                    num = parseFloat(val);
                    return extra === true || isFinite(num) ? num || 0 : val;
                }
                return val;
            }
        });
        jQuery.each(["height", "width"], function(i, dimension) {
            jQuery.cssHooks[dimension] = {
                get: function(elem, computed, extra) {
                    if (computed) {
                        return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                            return getWidthOrHeight(elem, dimension, extra);
                        }) : getWidthOrHeight(elem, dimension, extra);
                    }
                },
                set: function(elem, value, extra) {
                    var matches, styles = getStyles(elem), isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles);
                    if (isBorderBox && support.scrollboxSize() === styles.position) {
                        subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                    }
                    if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                        elem.style[dimension] = value;
                        value = jQuery.css(elem, dimension);
                    }
                    return setPositiveNumber(elem, value, subtract);
                }
            };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
            if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                    marginLeft: 0
                }, function() {
                    return elem.getBoundingClientRect().left;
                })) + "px";
            }
        });
        jQuery.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function(value) {
                    var i = 0
                      , expanded = {}
                      , parts = typeof value === "string" ? value.split(" ") : [value];
                    for (; i < 4; i++) {
                        expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                    }
                    return expanded;
                }
            };
            if (prefix !== "margin") {
                jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
            }
        });
        jQuery.fn.extend({
            css: function(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {}, i = 0;
                    if (Array.isArray(name)) {
                        styles = getStyles(elem);
                        len = name.length;
                        for (; i < len; i++) {
                            map[name[i]] = jQuery.css(elem, name[i], false, styles);
                        }
                        return map;
                    }
                    return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                }, name, value, arguments.length > 1);
            }
        });
        function Tween(elem, options, prop, end, easing) {
            return new Tween.prototype.init(elem,options,prop,end,easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || jQuery.easing._default;
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
            },
            cur: function() {
                var hooks = Tween.propHooks[this.prop];
                return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
            },
            run: function(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
                } else {
                    this.pos = eased = percent;
                }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this);
                }
                if (hooks && hooks.set) {
                    hooks.set(this);
                } else {
                    Tween.propHooks._default.set(this);
                }
                return this;
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function(tween) {
                    var result;
                    if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                        return tween.elem[tween.prop];
                    }
                    result = jQuery.css(tween.elem, tween.prop, "");
                    return !result || result === "auto" ? 0 : result;
                },
                set: function(tween) {
                    if (jQuery.fx.step[tween.prop]) {
                        jQuery.fx.step[tween.prop](tween);
                    } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    } else {
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        };
        jQuery.easing = {
            linear: function(p) {
                return p;
            },
            swing: function(p) {
                return 0.5 - Math.cos(p * Math.PI) / 2;
            },
            _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
            if (inProgress) {
                if (document.hidden === false && window.requestAnimationFrame) {
                    window.requestAnimationFrame(schedule);
                } else {
                    window.setTimeout(schedule, jQuery.fx.interval);
                }
                jQuery.fx.tick();
            }
        }
        function createFxNow() {
            window.setTimeout(function() {
                fxNow = undefined;
            });
            return (fxNow = Date.now());
        }
        function genFx(type, includeWidth) {
            var which, i = 0, attrs = {
                height: type
            };
            includeWidth = includeWidth ? 1 : 0;
            for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type;
            }
            if (includeWidth) {
                attrs.opacity = attrs.width = type;
            }
            return attrs;
        }
        function createTween(value, prop, animation) {
            var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
            for (; index < length; index++) {
                if ((tween = collection[index].call(animation, prop, value))) {
                    return tween;
                }
            }
        }
        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width"in props || "height"in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function() {
                        if (!hooks.unqueued) {
                            oldfire();
                        }
                    }
                    ;
                }
                hooks.unqueued++;
                anim.always(function() {
                    anim.always(function() {
                        hooks.unqueued--;
                        if (!jQuery.queue(elem, "fx").length) {
                            hooks.empty.fire();
                        }
                    });
                });
            }
            for (prop in props) {
                value = props[prop];
                if (rfxtypes.test(value)) {
                    delete props[prop];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) {
                        if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                            hidden = true;
                        } else {
                            continue;
                        }
                    }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                }
            }
            propTween = !jQuery.isEmptyObject(props);
            if (!propTween && jQuery.isEmptyObject(orig)) {
                return;
            }
            if (isBox && elem.nodeType === 1) {
                opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                restoreDisplay = dataShow && dataShow.display;
                if (restoreDisplay == null) {
                    restoreDisplay = dataPriv.get(elem, "display");
                }
                display = jQuery.css(elem, "display");
                if (display === "none") {
                    if (restoreDisplay) {
                        display = restoreDisplay;
                    } else {
                        showHide([elem], true);
                        restoreDisplay = elem.style.display || restoreDisplay;
                        display = jQuery.css(elem, "display");
                        showHide([elem]);
                    }
                }
                if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                    if (jQuery.css(elem, "float") === "none") {
                        if (!propTween) {
                            anim.done(function() {
                                style.display = restoreDisplay;
                            });
                            if (restoreDisplay == null) {
                                display = style.display;
                                restoreDisplay = display === "none" ? "" : display;
                            }
                        }
                        style.display = "inline-block";
                    }
                }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
            propTween = false;
            for (prop in orig) {
                if (!propTween) {
                    if (dataShow) {
                        if ("hidden"in dataShow) {
                            hidden = dataShow.hidden;
                        }
                    } else {
                        dataShow = dataPriv.access(elem, "fxshow", {
                            display: restoreDisplay
                        });
                    }
                    if (toggle) {
                        dataShow.hidden = !hidden;
                    }
                    if (hidden) {
                        showHide([elem], true);
                    }
                    anim.done(function() {
                        if (!hidden) {
                            showHide([elem]);
                        }
                        dataPriv.remove(elem, "fxshow");
                        for (prop in orig) {
                            jQuery.style(elem, prop, orig[prop]);
                        }
                    });
                }
                propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = propTween.start;
                    if (hidden) {
                        propTween.end = propTween.start;
                        propTween.start = 0;
                    }
                }
            }
        }
        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) {
                name = camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (Array.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0];
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index];
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand"in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing;
                        }
                    }
                } else {
                    specialEasing[name] = easing;
                }
            }
        }
        function Animation(elem, properties, options) {
            var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
                delete tick.elem;
            }), tick = function() {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow()
                  , remaining = Math.max(0, animation.startTime + animation.duration - currentTime)
                  , temp = remaining / animation.duration || 0
                  , percent = 1 - temp
                  , index = 0
                  , length = animation.tweens.length;
                for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                }
                deferred.notifyWith(elem, [animation, percent, remaining]);
                if (percent < 1 && length) {
                    return remaining;
                }
                if (!length) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                }
                deferred.resolveWith(elem, [animation]);
                return false;
            }, animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function(gotoEnd) {
                    var index = 0
                      , length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1);
                    }
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                }
            }), props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (; index < length; index++) {
                result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    if (isFunction(result.stop)) {
                        jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                    }
                    return result;
                }
            }
            jQuery.map(props, createTween, animation);
            if (isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation);
            }
            animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
            jQuery.fx.timer(jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            }));
            return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
                "*": [function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
                ]
            },
            tweener: function(props, callback) {
                if (isFunction(props)) {
                    callback = props;
                    props = ["*"];
                } else {
                    props = props.match(rnothtmlwhite);
                }
                var prop, index = 0, length = props.length;
                for (; index < length; index++) {
                    prop = props[index];
                    Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                    Animation.tweeners[prop].unshift(callback);
                }
            },
            prefilters: [defaultPrefilter],
            prefilter: function(callback, prepend) {
                if (prepend) {
                    Animation.prefilters.unshift(callback);
                } else {
                    Animation.prefilters.push(callback);
                }
            }
        });
        jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                complete: fn || !fn && easing || isFunction(speed) && speed,
                duration: speed,
                easing: fn && easing || easing && !isFunction(easing) && easing
            };
            if (jQuery.fx.off) {
                opt.duration = 0;
            } else {
                if (typeof opt.duration !== "number") {
                    if (opt.duration in jQuery.fx.speeds) {
                        opt.duration = jQuery.fx.speeds[opt.duration];
                    } else {
                        opt.duration = jQuery.fx.speeds._default;
                    }
                }
            }
            if (opt.queue == null || opt.queue === true) {
                opt.queue = "fx";
            }
            opt.old = opt.complete;
            opt.complete = function() {
                if (isFunction(opt.old)) {
                    opt.old.call(this);
                }
                if (opt.queue) {
                    jQuery.dequeue(this, opt.queue);
                }
            }
            ;
            return opt;
        }
        ;
        jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
                return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                    opacity: to
                }, speed, easing, callback);
            },
            animate: function(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop)
                  , optall = jQuery.speed(speed, easing, callback)
                  , doAnimation = function() {
                    var anim = Animation(this, jQuery.extend({}, prop), optall);
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(true);
                    }
                };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
            },
            stop: function(type, clearQueue, gotoEnd) {
                var stopQueue = function(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd);
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined;
                }
                if (clearQueue && type !== false) {
                    this.queue(type || "fx", []);
                }
                return this.each(function() {
                    var dequeue = true
                      , index = type != null && type + "queueHooks"
                      , timers = jQuery.timers
                      , data = dataPriv.get(this);
                    if (index) {
                        if (data[index] && data[index].stop) {
                            stopQueue(data[index]);
                        }
                    } else {
                        for (index in data) {
                            if (data[index] && data[index].stop && rrun.test(index)) {
                                stopQueue(data[index]);
                            }
                        }
                    }
                    for (index = timers.length; index--; ) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = false;
                            timers.splice(index, 1);
                        }
                    }
                    if (dequeue || !gotoEnd) {
                        jQuery.dequeue(this, type);
                    }
                });
            },
            finish: function(type) {
                if (type !== false) {
                    type = type || "fx";
                }
                return this.each(function() {
                    var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                    data.finish = true;
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.stop) {
                        hooks.stop.call(this, true);
                    }
                    for (index = timers.length; index--; ) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1);
                        }
                    }
                    for (index = 0; index < length; index++) {
                        if (queue[index] && queue[index].finish) {
                            queue[index].finish.call(this);
                        }
                    }
                    delete data.finish;
                });
            }
        });
        jQuery.each(["toggle", "show", "hide"], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) {
                return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
            }
            ;
        });
        jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(name, props) {
            jQuery.fn[name] = function(speed, easing, callback) {
                return this.animate(props, speed, easing, callback);
            }
            ;
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
            var timer, i = 0, timers = jQuery.timers;
            fxNow = Date.now();
            for (; i < timers.length; i++) {
                timer = timers[i];
                if (!timer() && timers[i] === timer) {
                    timers.splice(i--, 1);
                }
            }
            if (!timers.length) {
                jQuery.fx.stop();
            }
            fxNow = undefined;
        }
        ;
        jQuery.fx.timer = function(timer) {
            jQuery.timers.push(timer);
            jQuery.fx.start();
        }
        ;
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
            if (inProgress) {
                return;
            }
            inProgress = true;
            schedule();
        }
        ;
        jQuery.fx.stop = function() {
            inProgress = null;
        }
        ;
        jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        jQuery.fn.delay = function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = window.setTimeout(next, time);
                hooks.stop = function() {
                    window.clearTimeout(timeout);
                }
                ;
            });
        }
        ;
        (function() {
            var input = document.createElement("input")
              , select = document.createElement("select")
              , opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox";
            support.checkOn = input.value !== "";
            support.optSelected = opt.selected;
            input = document.createElement("input");
            input.value = "t";
            input.type = "radio";
            support.radioValue = input.value === "t";
        }
        )();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
            attr: function(name, value) {
                return access(this, jQuery.attr, name, value, arguments.length > 1);
            },
            removeAttr: function(name) {
                return this.each(function() {
                    jQuery.removeAttr(this, name);
                });
            }
        });
        jQuery.extend({
            attr: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                if (typeof elem.getAttribute === "undefined") {
                    return jQuery.prop(elem, name, value);
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                }
                if (value !== undefined) {
                    if (value === null) {
                        jQuery.removeAttr(elem, name);
                        return;
                    }
                    if (hooks && "set"in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    }
                    elem.setAttribute(name, value + "");
                    return value;
                }
                if (hooks && "get"in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                }
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            },
            attrHooks: {
                type: {
                    set: function(elem, value) {
                        if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) {
                                elem.value = val;
                            }
                            return value;
                        }
                    }
                }
            },
            removeAttr: function(elem, value) {
                var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                if (attrNames && elem.nodeType === 1) {
                    while ((name = attrNames[i++])) {
                        elem.removeAttribute(name);
                    }
                }
            }
        });
        boolHook = {
            set: function(elem, value, name) {
                if (value === false) {
                    jQuery.removeAttr(elem, name);
                } else {
                    elem.setAttribute(name, name);
                }
                return name;
            }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function(elem, name, isXML) {
                var ret, handle, lowercaseName = name.toLowerCase();
                if (!isXML) {
                    handle = attrHandle[lowercaseName];
                    attrHandle[lowercaseName] = ret;
                    ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                    attrHandle[lowercaseName] = handle;
                }
                return ret;
            }
            ;
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i
          , rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
            prop: function(name, value) {
                return access(this, jQuery.prop, name, value, arguments.length > 1);
            },
            removeProp: function(name) {
                return this.each(function() {
                    delete this[jQuery.propFix[name] || name];
                });
            }
        });
        jQuery.extend({
            prop: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) {
                    return;
                }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name];
                }
                if (value !== undefined) {
                    if (hooks && "set"in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        return ret;
                    }
                    return (elem[name] = value);
                }
                if (hooks && "get"in hooks && (ret = hooks.get(elem, name)) !== null) {
                    return ret;
                }
                return elem[name];
            },
            propHooks: {
                tabIndex: {
                    get: function(elem) {
                        var tabindex = jQuery.find.attr(elem, "tabindex");
                        if (tabindex) {
                            return parseInt(tabindex, 10);
                        }
                        if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                            return 0;
                        }
                        return -1;
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        });
        if (!support.optSelected) {
            jQuery.propHooks.selected = {
                get: function(elem) {
                    var parent = elem.parentNode;
                    if (parent && parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                    return null;
                },
                set: function(elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                        parent.selectedIndex;
                        if (parent.parentNode) {
                            parent.parentNode.selectedIndex;
                        }
                    }
                }
            };
        }
        jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
            var tokens = value.match(rnothtmlwhite) || [];
            return tokens.join(" ");
        }
        function getClass(elem) {
            return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
            if (Array.isArray(value)) {
                return value;
            }
            if (typeof value === "string") {
                return value.match(rnothtmlwhite) || [];
            }
            return [];
        }
        jQuery.fn.extend({
            addClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).addClass(value.call(this, j, getClass(this)));
                    });
                }
                classes = classesToArray(value);
                if (classes.length) {
                    while ((elem = this[i++])) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
                        if (cur) {
                            j = 0;
                            while ((clazz = classes[j++])) {
                                if (cur.indexOf(" " + clazz + " ") < 0) {
                                    cur += clazz + " ";
                                }
                            }
                            finalValue = stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue);
                            }
                        }
                    }
                }
                return this;
            },
            removeClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (isFunction(value)) {
                    return this.each(function(j) {
                        jQuery(this).removeClass(value.call(this, j, getClass(this)));
                    });
                }
                if (!arguments.length) {
                    return this.attr("class", "");
                }
                classes = classesToArray(value);
                if (classes.length) {
                    while ((elem = this[i++])) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
                        if (cur) {
                            j = 0;
                            while ((clazz = classes[j++])) {
                                while (cur.indexOf(" " + clazz + " ") > -1) {
                                    cur = cur.replace(" " + clazz + " ", " ");
                                }
                            }
                            finalValue = stripAndCollapse(cur);
                            if (curValue !== finalValue) {
                                elem.setAttribute("class", finalValue);
                            }
                        }
                    }
                }
                return this;
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value
                  , isValidValue = type === "string" || Array.isArray(value);
                if (typeof stateVal === "boolean" && isValidValue) {
                    return stateVal ? this.addClass(value) : this.removeClass(value);
                }
                if (isFunction(value)) {
                    return this.each(function(i) {
                        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                    });
                }
                return this.each(function() {
                    var className, i, self, classNames;
                    if (isValidValue) {
                        i = 0;
                        self = jQuery(this);
                        classNames = classesToArray(value);
                        while ((className = classNames[i++])) {
                            if (self.hasClass(className)) {
                                self.removeClass(className);
                            } else {
                                self.addClass(className);
                            }
                        }
                    } else if (value === undefined || type === "boolean") {
                        className = getClass(this);
                        if (className) {
                            dataPriv.set(this, "__className__", className);
                        }
                        if (this.setAttribute) {
                            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                        }
                    }
                });
            },
            hasClass: function(selector) {
                var className, elem, i = 0;
                className = " " + selector + " ";
                while ((elem = this[i++])) {
                    if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                        return true;
                    }
                }
                return false;
            }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
            val: function(value) {
                var hooks, ret, valueIsFunction, elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get"in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                            return ret;
                        }
                        ret = elem.value;
                        if (typeof ret === "string") {
                            return ret.replace(rreturn, "");
                        }
                        return ret == null ? "" : ret;
                    }
                    return;
                }
                valueIsFunction = isFunction(value);
                return this.each(function(i) {
                    var val;
                    if (this.nodeType !== 1) {
                        return;
                    }
                    if (valueIsFunction) {
                        val = value.call(this, i, jQuery(this).val());
                    } else {
                        val = value;
                    }
                    if (val == null) {
                        val = "";
                    } else if (typeof val === "number") {
                        val += "";
                    } else if (Array.isArray(val)) {
                        val = jQuery.map(val, function(value) {
                            return value == null ? "" : value + "";
                        });
                    }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                    if (!hooks || !("set"in hooks) || hooks.set(this, val, "value") === undefined) {
                        this.value = val;
                    }
                });
            }
        });
        jQuery.extend({
            valHooks: {
                option: {
                    get: function(elem) {
                        var val = jQuery.find.attr(elem, "value");
                        return val != null ? val : stripAndCollapse(jQuery.text(elem));
                    }
                },
                select: {
                    get: function(elem) {
                        var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                        if (index < 0) {
                            i = max;
                        } else {
                            i = one ? index : 0;
                        }
                        for (; i < max; i++) {
                            option = options[i];
                            if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                value = jQuery(option).val();
                                if (one) {
                                    return value;
                                }
                                values.push(value);
                            }
                        }
                        return values;
                    },
                    set: function(elem, value) {
                        var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                        while (i--) {
                            option = options[i];
                            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                                optionSet = true;
                            }
                        }
                        if (!optionSet) {
                            elem.selectedIndex = -1;
                        }
                        return values;
                    }
                }
            }
        });
        jQuery.each(["radio", "checkbox"], function() {
            jQuery.valHooks[this] = {
                set: function(elem, value) {
                    if (Array.isArray(value)) {
                        return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                    }
                }
            };
            if (!support.checkOn) {
                jQuery.valHooks[this].get = function(elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value;
                }
                ;
            }
        });
        support.focusin = "onfocusin"in window;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/
          , stopPropagationCallback = function(e) {
            e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
            trigger: function(event, data, elem, onlyHandlers) {
                var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = lastElement = tmp = elem = elem || document;
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                    return;
                }
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                    return;
                }
                if (type.indexOf(".") > -1) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort();
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
                event = event[jQuery.expando] ? event : new jQuery.Event(type,typeof event === "object" && event);
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                event.result = undefined;
                if (!event.target) {
                    event.target = elem;
                }
                data = data == null ? [event] : jQuery.makeArray(data, [event]);
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                    return;
                }
                if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) {
                        cur = cur.parentNode;
                    }
                    for (; cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur;
                    }
                    if (tmp === (elem.ownerDocument || document)) {
                        eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                    }
                }
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    lastElement = cur;
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                    if (handle) {
                        handle.apply(cur, data);
                    }
                    handle = ontype && cur[ontype];
                    if (handle && handle.apply && acceptData(cur)) {
                        event.result = handle.apply(cur, data);
                        if (event.result === false) {
                            event.preventDefault();
                        }
                    }
                }
                event.type = type;
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                        if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) {
                                elem[ontype] = null;
                            }
                            jQuery.event.triggered = type;
                            if (event.isPropagationStopped()) {
                                lastElement.addEventListener(type, stopPropagationCallback);
                            }
                            elem[type]();
                            if (event.isPropagationStopped()) {
                                lastElement.removeEventListener(type, stopPropagationCallback);
                            }
                            jQuery.event.triggered = undefined;
                            if (tmp) {
                                elem[ontype] = tmp;
                            }
                        }
                    }
                }
                return event.result;
            },
            simulate: function(type, elem, event) {
                var e = jQuery.extend(new jQuery.Event(), event, {
                    type: type,
                    isSimulated: true
                });
                jQuery.event.trigger(e, null, elem);
            }
        });
        jQuery.fn.extend({
            trigger: function(type, data) {
                return this.each(function() {
                    jQuery.event.trigger(type, data, this);
                });
            },
            triggerHandler: function(type, data) {
                var elem = this[0];
                if (elem) {
                    return jQuery.event.trigger(type, data, elem, true);
                }
            }
        });
        if (!support.focusin) {
            jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, function(orig, fix) {
                var handler = function(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                };
                jQuery.event.special[fix] = {
                    setup: function() {
                        var doc = this.ownerDocument || this
                          , attaches = dataPriv.access(doc, fix);
                        if (!attaches) {
                            doc.addEventListener(orig, handler, true);
                        }
                        dataPriv.access(doc, fix, (attaches || 0) + 1);
                    },
                    teardown: function() {
                        var doc = this.ownerDocument || this
                          , attaches = dataPriv.access(doc, fix) - 1;
                        if (!attaches) {
                            doc.removeEventListener(orig, handler, true);
                            dataPriv.remove(doc, fix);
                        } else {
                            dataPriv.access(doc, fix, attaches);
                        }
                    }
                };
            });
        }
        var location = window.location;
        var nonce = Date.now();
        var rquery = (/\?/);
        jQuery.parseXML = function(data) {
            var xml;
            if (!data || typeof data !== "string") {
                return null;
            }
            try {
                xml = (new window.DOMParser()).parseFromString(data, "text/xml");
            } catch (e) {
                xml = undefined;
            }
            if (!xml || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        }
        ;
        var rbracket = /\[\]$/
          , rCRLF = /\r?\n/g
          , rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i
          , rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
            var name;
            if (Array.isArray(obj)) {
                jQuery.each(obj, function(i, v) {
                    if (traditional || rbracket.test(prefix)) {
                        add(prefix, v);
                    } else {
                        buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                    }
                });
            } else if (!traditional && toType(obj) === "object") {
                for (name in obj) {
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                }
            } else {
                add(prefix, obj);
            }
        }
        jQuery.param = function(a, traditional) {
            var prefix, s = [], add = function(key, valueOrFunction) {
                var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
            };
            if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
                jQuery.each(a, function() {
                    add(this.name, this.value);
                });
            } else {
                for (prefix in a) {
                    buildParams(prefix, a[prefix], traditional, add);
                }
            }
            return s.join("&");
        }
        ;
        jQuery.fn.extend({
            serialize: function() {
                return jQuery.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var elements = jQuery.prop(this, "elements");
                    return elements ? jQuery.makeArray(elements) : this;
                }).filter(function() {
                    var type = this.type;
                    return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                }).map(function(i, elem) {
                    var val = jQuery(this).val();
                    if (val == null) {
                        return null;
                    }
                    if (Array.isArray(val)) {
                        return jQuery.map(val, function(val) {
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        });
                    }
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }).get();
            }
        });
        var r20 = /%20/g
          , rhash = /#.*$/
          , rantiCache = /([?&])_=[^&]*/
          , rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg
          , rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , rnoContent = /^(?:GET|HEAD)$/
          , rprotocol = /^\/\//
          , prefilters = {}
          , transports = {}
          , allTypes = "*/".concat("*")
          , originAnchor = document.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*";
                }
                var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                if (isFunction(func)) {
                    while ((dataType = dataTypes[i++])) {
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func);
                        }
                    }
                }
            }
            ;
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {}
              , seekingTransport = (structure === transports);
            function inspect(dataType) {
                var selected;
                inspected[dataType] = true;
                jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                        options.dataTypes.unshift(dataTypeOrTransport);
                        inspect(dataTypeOrTransport);
                        return false;
                    } else if (seekingTransport) {
                        return !(selected = dataTypeOrTransport);
                    }
                });
                return selected;
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
                }
            }
            if (deep) {
                jQuery.extend(true, target, deep);
            }
            return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
            var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
            while (dataTypes[0] === "*") {
                dataTypes.shift();
                if (ct === undefined) {
                    ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                }
            }
            if (ct) {
                for (type in contents) {
                    if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                }
            }
            if (dataTypes[0]in responses) {
                finalDataType = dataTypes[0];
            } else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                        finalDataType = type;
                        break;
                    }
                    if (!firstDataType) {
                        firstDataType = type;
                    }
                }
                finalDataType = finalDataType || firstDataType;
            }
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                    dataTypes.unshift(finalDataType);
                }
                return responses[finalDataType];
            }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
            if (dataTypes[1]) {
                for (conv in s.converters) {
                    converters[conv.toLowerCase()] = s.converters[conv];
                }
            }
            current = dataTypes.shift();
            while (current) {
                if (s.responseFields[current]) {
                    jqXHR[s.responseFields[current]] = response;
                }
                if (!prev && isSuccess && s.dataFilter) {
                    response = s.dataFilter(response, s.dataType);
                }
                prev = current;
                current = dataTypes.shift();
                if (current) {
                    if (current === "*") {
                        current = prev;
                    } else if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) {
                            for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) {
                                            conv = converters[conv2];
                                        } else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        if (conv !== true) {
                            if (conv && s.throws) {
                                response = conv(response);
                            } else {
                                try {
                                    response = conv(response);
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: response
            };
        }
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: location.href,
                type: "GET",
                isLocal: rlocalProtocol.test(location.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": allTypes,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": JSON.parse,
                    "text xml": jQuery.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(target, settings) {
                return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
            },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function(url, options) {
                if (typeof url === "object") {
                    options = url;
                    url = undefined;
                }
                options = options || {};
                var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                    readyState: 0,
                    getResponseHeader: function(key) {
                        var match;
                        if (completed) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while ((match = rheaders.exec(responseHeadersString))) {
                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                }
                            }
                            match = responseHeaders[key.toLowerCase()];
                        }
                        return match == null ? null : match;
                    },
                    getAllResponseHeaders: function() {
                        return completed ? responseHeadersString : null;
                    },
                    setRequestHeader: function(name, value) {
                        if (completed == null) {
                            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    },
                    overrideMimeType: function(type) {
                        if (completed == null) {
                            s.mimeType = type;
                        }
                        return this;
                    },
                    statusCode: function(map) {
                        var code;
                        if (map) {
                            if (completed) {
                                jqXHR.always(map[jqXHR.status]);
                            } else {
                                for (code in map) {
                                    statusCode[code] = [statusCode[code], map[code]];
                                }
                            }
                        }
                        return this;
                    },
                    abort: function(statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                };
                deferred.promise(jqXHR);
                s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                s.type = options.method || options.type || s.method || s.type;
                s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
                if (s.crossDomain == null) {
                    urlAnchor = document.createElement("a");
                    try {
                        urlAnchor.href = s.url;
                        urlAnchor.href = urlAnchor.href;
                        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                    } catch (e) {
                        s.crossDomain = true;
                    }
                }
                if (s.data && s.processData && typeof s.data !== "string") {
                    s.data = jQuery.param(s.data, s.traditional);
                }
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                if (completed) {
                    return jqXHR;
                }
                fireGlobals = jQuery.event && s.global;
                if (fireGlobals && jQuery.active++ === 0) {
                    jQuery.event.trigger("ajaxStart");
                }
                s.type = s.type.toUpperCase();
                s.hasContent = !rnoContent.test(s.type);
                cacheURL = s.url.replace(rhash, "");
                if (!s.hasContent) {
                    uncached = s.url.slice(cacheURL.length);
                    if (s.data && (s.processData || typeof s.data === "string")) {
                        cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                        delete s.data;
                    }
                    if (s.cache === false) {
                        cacheURL = cacheURL.replace(rantiCache, "$1");
                        uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
                    }
                    s.url = cacheURL + uncached;
                } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                    s.data = s.data.replace(r20, "+");
                }
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) {
                        jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                    }
                    if (jQuery.etag[cacheURL]) {
                        jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                    }
                }
                if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                    jqXHR.setRequestHeader("Content-Type", s.contentType);
                }
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) {
                    jqXHR.setRequestHeader(i, s.headers[i]);
                }
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
                    return jqXHR.abort();
                }
                strAbort = "abort";
                completeDeferred.add(s.complete);
                jqXHR.done(s.success);
                jqXHR.fail(s.error);
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) {
                    done(-1, "No Transport");
                } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                    }
                    if (completed) {
                        return jqXHR;
                    }
                    if (s.async && s.timeout > 0) {
                        timeoutTimer = window.setTimeout(function() {
                            jqXHR.abort("timeout");
                        }, s.timeout);
                    }
                    try {
                        completed = false;
                        transport.send(requestHeaders, done);
                    } catch (e) {
                        if (completed) {
                            throw e;
                        }
                        done(-1, e);
                    }
                }
                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (completed) {
                        return;
                    }
                    completed = true;
                    if (timeoutTimer) {
                        window.clearTimeout(timeoutTimer);
                    }
                    transport = undefined;
                    responseHeadersString = headers || "";
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    isSuccess = status >= 200 && status < 300 || status === 304;
                    if (responses) {
                        response = ajaxHandleResponses(s, jqXHR, responses);
                    }
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) {
                                jQuery.lastModified[cacheURL] = modified;
                            }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) {
                                jQuery.etag[cacheURL] = modified;
                            }
                        }
                        if (status === 204 || s.type === "HEAD") {
                            statusText = "nocontent";
                        } else if (status === 304) {
                            statusText = "notmodified";
                        } else {
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error;
                        }
                    } else {
                        error = statusText;
                        if (status || !statusText) {
                            statusText = "error";
                            if (status < 0) {
                                status = 0;
                            }
                        }
                    }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) {
                        deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                    } else {
                        deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                    }
                    jqXHR.statusCode(statusCode);
                    statusCode = undefined;
                    if (fireGlobals) {
                        globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                    }
                    completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                    if (fireGlobals) {
                        globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                        if (!(--jQuery.active)) {
                            jQuery.event.trigger("ajaxStop");
                        }
                    }
                }
                return jqXHR;
            },
            getJSON: function(url, data, callback) {
                return jQuery.get(url, data, callback, "json");
            },
            getScript: function(url, callback) {
                return jQuery.get(url, undefined, callback, "script");
            }
        });
        jQuery.each(["get", "post"], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                if (isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined;
                }
                return jQuery.ajax(jQuery.extend({
                    url: url,
                    type: method,
                    dataType: type,
                    data: data,
                    success: callback
                }, jQuery.isPlainObject(url) && url));
            }
            ;
        });
        jQuery._evalUrl = function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,
                "throws": true
            });
        }
        ;
        jQuery.fn.extend({
            wrapAll: function(html) {
                var wrap;
                if (this[0]) {
                    if (isFunction(html)) {
                        html = html.call(this[0]);
                    }
                    wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        wrap.insertBefore(this[0]);
                    }
                    wrap.map(function() {
                        var elem = this;
                        while (elem.firstElementChild) {
                            elem = elem.firstElementChild;
                        }
                        return elem;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function(html) {
                if (isFunction(html)) {
                    return this.each(function(i) {
                        jQuery(this).wrapInner(html.call(this, i));
                    });
                }
                return this.each(function() {
                    var self = jQuery(this)
                      , contents = self.contents();
                    if (contents.length) {
                        contents.wrapAll(html);
                    } else {
                        self.append(html);
                    }
                });
            },
            wrap: function(html) {
                var htmlIsFunction = isFunction(html);
                return this.each(function(i) {
                    jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                });
            },
            unwrap: function(selector) {
                this.parent(selector).not("body").each(function() {
                    jQuery(this).replaceWith(this.childNodes);
                });
                return this;
            }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
            return !jQuery.expr.pseudos.visible(elem);
        }
        ;
        jQuery.expr.pseudos.visible = function(elem) {
            return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        }
        ;
        jQuery.ajaxSettings.xhr = function() {
            try {
                return new window.XMLHttpRequest();
            } catch (e) {}
        }
        ;
        var xhrSuccessStatus = {
            0: 200,
            1223: 204
        }
          , xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && ("withCredentials"in xhrSupported);
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
            var callback, errorCallback;
            if (support.cors || xhrSupported && !options.crossDomain) {
                return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr();
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
                        if (options.xhrFields) {
                            for (i in options.xhrFields) {
                                xhr[i] = options.xhrFields[i];
                            }
                        }
                        if (options.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(options.mimeType);
                        }
                        if (!options.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        for (i in headers) {
                            xhr.setRequestHeader(i, headers[i]);
                        }
                        callback = function(type) {
                            return function() {
                                if (callback) {
                                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                    if (type === "abort") {
                                        xhr.abort();
                                    } else if (type === "error") {
                                        if (typeof xhr.status !== "number") {
                                            complete(0, "error");
                                        } else {
                                            complete(xhr.status, xhr.statusText);
                                        }
                                    } else {
                                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                }
                            }
                            ;
                        }
                        ;
                        xhr.onload = callback();
                        errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                        if (xhr.onabort !== undefined) {
                            xhr.onabort = errorCallback;
                        } else {
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4) {
                                    window.setTimeout(function() {
                                        if (callback) {
                                            errorCallback();
                                        }
                                    });
                                }
                            }
                            ;
                        }
                        callback = callback("abort");
                        try {
                            xhr.send(options.hasContent && options.data || null);
                        } catch (e) {
                            if (callback) {
                                throw e;
                            }
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback();
                        }
                    }
                };
            }
        });
        jQuery.ajaxPrefilter(function(s) {
            if (s.crossDomain) {
                s.contents.script = false;
            }
        });
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(text) {
                    jQuery.globalEval(text);
                    return text;
                }
            }
        });
        jQuery.ajaxPrefilter("script", function(s) {
            if (s.cache === undefined) {
                s.cache = false;
            }
            if (s.crossDomain) {
                s.type = "GET";
            }
        });
        jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, callback;
                return {
                    send: function(_, complete) {
                        script = jQuery("<script>").prop({
                            charset: s.scriptCharset,
                            src: s.url
                        }).on("load error", callback = function(evt) {
                            script.remove();
                            callback = null;
                            if (evt) {
                                complete(evt.type === "error" ? 404 : 200, evt.type);
                            }
                        }
                        );
                        document.head.appendChild(script[0]);
                    },
                    abort: function() {
                        if (callback) {
                            callback();
                        }
                    }
                };
            }
        });
        var oldCallbacks = []
          , rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
                this[callback] = true;
                return callback;
            }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
            if (jsonProp || s.dataTypes[0] === "jsonp") {
                callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
                } else if (s.jsonp !== false) {
                    s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                }
                s.converters["script json"] = function() {
                    if (!responseContainer) {
                        jQuery.error(callbackName + " was not called");
                    }
                    return responseContainer[0];
                }
                ;
                s.dataTypes[0] = "json";
                overwritten = window[callbackName];
                window[callbackName] = function() {
                    responseContainer = arguments;
                }
                ;
                jqXHR.always(function() {
                    if (overwritten === undefined) {
                        jQuery(window).removeProp(callbackName);
                    } else {
                        window[callbackName] = overwritten;
                    }
                    if (s[callbackName]) {
                        s.jsonpCallback = originalSettings.jsonpCallback;
                        oldCallbacks.push(callbackName);
                    }
                    if (responseContainer && isFunction(overwritten)) {
                        overwritten(responseContainer[0]);
                    }
                    responseContainer = overwritten = undefined;
                });
                return "script";
            }
        });
        support.createHTMLDocument = (function() {
            var body = document.implementation.createHTMLDocument("").body;
            body.innerHTML = "<form></form><form></form>";
            return body.childNodes.length === 2;
        }
        )();
        jQuery.parseHTML = function(data, context, keepScripts) {
            if (typeof data !== "string") {
                return [];
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
            }
            var base, parsed, scripts;
            if (!context) {
                if (support.createHTMLDocument) {
                    context = document.implementation.createHTMLDocument("");
                    base = context.createElement("base");
                    base.href = document.location.href;
                    context.head.appendChild(base);
                } else {
                    context = document;
                }
            }
            parsed = rsingleTag.exec(data);
            scripts = !keepScripts && [];
            if (parsed) {
                return [context.createElement(parsed[1])];
            }
            parsed = buildFragment([data], context, scripts);
            if (scripts && scripts.length) {
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        }
        ;
        jQuery.fn.load = function(url, params, callback) {
            var selector, type, response, self = this, off = url.indexOf(" ");
            if (off > -1) {
                selector = stripAndCollapse(url.slice(off));
                url = url.slice(0, off);
            }
            if (isFunction(params)) {
                callback = params;
                params = undefined;
            } else if (params && typeof params === "object") {
                type = "POST";
            }
            if (self.length > 0) {
                jQuery.ajax({
                    url: url,
                    type: type || "GET",
                    dataType: "html",
                    data: params
                }).done(function(responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                }).always(callback && function(jqXHR, status) {
                    self.each(function() {
                        callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                    });
                }
                );
            }
            return this;
        }
        ;
        jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
            jQuery.fn[type] = function(fn) {
                return this.on(type, fn);
            }
            ;
        });
        jQuery.expr.pseudos.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem;
            }).length;
        }
        ;
        jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                if (position === "static") {
                    elem.style.position = "relative";
                }
                curOffset = curElem.offset();
                curCSSTop = jQuery.css(elem, "top");
                curCSSLeft = jQuery.css(elem, "left");
                calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left;
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0;
                }
                if (isFunction(options)) {
                    options = options.call(elem, i, jQuery.extend({}, curOffset));
                }
                if (options.top != null) {
                    props.top = (options.top - curOffset.top) + curTop;
                }
                if (options.left != null) {
                    props.left = (options.left - curOffset.left) + curLeft;
                }
                if ("using"in options) {
                    options.using.call(elem, props);
                } else {
                    curElem.css(props);
                }
            }
        };
        jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) {
                    return options === undefined ? this : this.each(function(i) {
                        jQuery.offset.setOffset(this, options, i);
                    });
                }
                var rect, win, elem = this[0];
                if (!elem) {
                    return;
                }
                if (!elem.getClientRects().length) {
                    return {
                        top: 0,
                        left: 0
                    };
                }
                rect = elem.getBoundingClientRect();
                win = elem.ownerDocument.defaultView;
                return {
                    top: rect.top + win.pageYOffset,
                    left: rect.left + win.pageXOffset
                };
            },
            position: function() {
                if (!this[0]) {
                    return;
                }
                var offsetParent, offset, doc, elem = this[0], parentOffset = {
                    top: 0,
                    left: 0
                };
                if (jQuery.css(elem, "position") === "fixed") {
                    offset = elem.getBoundingClientRect();
                } else {
                    offset = this.offset();
                    doc = elem.ownerDocument;
                    offsetParent = elem.offsetParent || doc.documentElement;
                    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                        offsetParent = offsetParent.parentNode;
                    }
                    if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                        parentOffset = jQuery(offsetParent).offset();
                        parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                        parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                    }
                }
                return {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                };
            },
            offsetParent: function() {
                return this.map(function() {
                    var offsetParent = this.offsetParent;
                    while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                        offsetParent = offsetParent.offsetParent;
                    }
                    return offsetParent || documentElement;
                });
            }
        });
        jQuery.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win;
                    if (isWindow(elem)) {
                        win = elem;
                    } else if (elem.nodeType === 9) {
                        win = elem.defaultView;
                    }
                    if (val === undefined) {
                        return win ? win[prop] : elem[method];
                    }
                    if (win) {
                        win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
                    } else {
                        elem[method] = val;
                    }
                }, method, val, arguments.length);
            }
            ;
        });
        jQuery.each(["top", "left"], function(i, prop) {
            jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
                if (computed) {
                    computed = curCSS(elem, prop);
                    return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                }
            });
        });
        jQuery.each({
            Height: "height",
            Width: "width"
        }, function(name, type) {
            jQuery.each({
                padding: "inner" + name,
                content: type,
                "": "outer" + name
            }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean")
                      , extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        if (isWindow(elem)) {
                            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                        }
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;
                            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                        }
                        return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                    }, type, chainable ? margin : undefined, chainable);
                }
                ;
            });
        });
        jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) {
            jQuery.fn[name] = function(data, fn) {
                return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            }
            ;
        });
        jQuery.fn.extend({
            hover: function(fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
            }
        });
        jQuery.fn.extend({
            bind: function(types, data, fn) {
                return this.on(types, null, data, fn);
            },
            unbind: function(types, fn) {
                return this.off(types, null, fn);
            },
            delegate: function(selector, types, data, fn) {
                return this.on(types, selector, data, fn);
            },
            undelegate: function(selector, types, fn) {
                return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
            }
        });
        jQuery.proxy = function(fn, context) {
            var tmp, args, proxy;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!isFunction(fn)) {
                return undefined;
            }
            args = slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            }
            ;
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        }
        ;
        jQuery.holdReady = function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        }
        ;
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
            var type = jQuery.type(obj);
            return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        }
        ;
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [],
            __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return jQuery;
            }
            ).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
        var _jQuery = window.jQuery
          , _$ = window.$;
        jQuery.noConflict = function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        }
        ;
        if (!noGlobal) {
            window.jQuery = window.$ = jQuery;
        }
        return jQuery;
    });
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(include) {
        if (typeof include === 'function') {
            include();
        } else if (typeof include === 'object') {
            Object.keys(include).forEach(function(key) {
                if (typeof include[key] === 'function') {
                    include[key]();
                }
            });
        }
    }
    ;
}
), (function(module, exports, __webpack_require__) {
    (function($) {
        var Util = function($) {
            var transition = false;
            var MAX_UID = 1000000;
            function toType(obj) {
                return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            function getSpecialTransitionEndEvent() {
                return {
                    bindType: transition.end,
                    delegateType: transition.end,
                    handle: function handle(event) {
                        if ($(event.target).is(this)) {
                            return event.handleObj.handler.apply(this, arguments);
                        }
                        return undefined;
                    }
                };
            }
            function transitionEndTest() {
                if (typeof window !== 'undefined' && window.QUnit) {
                    return false;
                }
                return {
                    end: 'transitionend'
                };
            }
            function transitionEndEmulator(duration) {
                var _this = this;
                var called = false;
                $(this).one(Util.TRANSITION_END, function() {
                    called = true;
                });
                setTimeout(function() {
                    if (!called) {
                        Util.triggerTransitionEnd(_this);
                    }
                }, duration);
                return this;
            }
            function setTransitionEndSupport() {
                transition = transitionEndTest();
                $.fn.emulateTransitionEnd = transitionEndEmulator;
                if (Util.supportsTransitionEnd()) {
                    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
                }
            }
            function escapeId(selector) {
                selector = typeof $.escapeSelector === 'function' ? $.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
                return selector;
            }
            var Util = {
                TRANSITION_END: 'bsTransitionEnd',
                getUID: function getUID(prefix) {
                    do {
                        prefix += ~~(Math.random() * MAX_UID);
                    } while (document.getElementById(prefix));return prefix;
                },
                getSelectorFromElement: function getSelectorFromElement(element) {
                    var selector = element.getAttribute('data-target');
                    if (!selector || selector === '#') {
                        selector = element.getAttribute('href') || '';
                    }
                    if (selector.charAt(0) === '#') {
                        selector = escapeId(selector);
                    }
                    try {
                        var $selector = $(document).find(selector);
                        return $selector.length > 0 ? selector : null;
                    } catch (err) {
                        return null;
                    }
                },
                reflow: function reflow(element) {
                    return element.offsetHeight;
                },
                triggerTransitionEnd: function triggerTransitionEnd(element) {
                    $(element).trigger(transition.end);
                },
                supportsTransitionEnd: function supportsTransitionEnd() {
                    return Boolean(transition);
                },
                isElement: function isElement(obj) {
                    return (obj[0] || obj).nodeType;
                },
                typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
                    for (var property in configTypes) {
                        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
                            var expectedTypes = configTypes[property];
                            var value = config[property];
                            var valueType = value && Util.isElement(value) ? 'element' : toType(value);
                            if (!new RegExp(expectedTypes).test(valueType)) {
                                throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
                            }
                        }
                    }
                }
            };
            setTransitionEndSupport();
            return Util;
        }($);
        module.exports = Util;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = {
            isSafari: function() {
                return (!!window.navigator.userAgent.match(/AppleWebKit/) && !window.navigator.userAgent.match(/Chrome/));
            },
            isChrome: function() {
                return (!!window.navigator.userAgent.match(/Chrome/) && !!window.navigator.vendor.match(/Google Inc/));
            },
            isEdge: function() {
                return (!!window.navigator.userAgent.match(/Edge/));
            },
            isIE: function() {
                return (!!window.navigator.userAgent.match(/MSIE/) || !!window.navigator.userAgent.match(/Trident/));
            },
            isAndroid: function() {
                var os = window.navigator.appVersion;
                return !!os.match(/Android/);
            },
            isIos: function() {
                var platform = window.navigator.platform;
                return !!(platform.match(/iPhone/) || platform.match(/iPad/) || platform.match(/iPod/));
            },
            isIPhone: function() {
                var platform = window.navigator.platform;
                return !!(platform.match(/iPhone/) || platform.match(/iPod/));
            },
            isMobile: function() {
                return (this.isAndroid() || this.isIos());
            },
            isSmallScreen: function() {
                return ($(window).width() < 769);
            },
            isIE10: function() {
                return !!window.navigator.userAgent.match(/MSIE 10/);
            },
            uniqueId: function(prefix) {
                var counts = {};
                counts[prefix] = (counts[prefix] || 0) + 1;
                var id = prefix + '' + counts[prefix];
                if (document.querySelector(id)) {
                    return uniqueId(prefix);
                }
                return id;
            }
        };
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports) {
    function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    }
    module.exports = isObject;
}
), (function(module, exports, __webpack_require__) {
    var freeGlobal = __webpack_require__(24);
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function('return this')();
    module.exports = root;
}
), (function(module, exports, __webpack_require__) {
    var root = __webpack_require__(5);
    var Symbol = root.Symbol;
    module.exports = Symbol;
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function validateForm(event) {
            var valid = true;
            if (this.checkValidity && !this.checkValidity()) {
                valid = false;
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                }
                $(this).find('input, select').each(function() {
                    if (!this.validity.valid) {
                        $(this).trigger('invalid', this.validity);
                    }
                });
            }
            return valid;
        }
        function clearForm(form) {
            $(form).find('.form-control.is-invalid').removeClass('is-invalid');
        }
        module.exports = {
            invalid: function() {
                $('form input, form select').on('invalid', function(e) {
                    e.preventDefault();
                    this.setCustomValidity('');
                    if (!this.validity.valid) {
                        var validationMessage = this.validationMessage;
                        $(this).addClass('is-invalid');
                        if (this.validity.patternMismatch && $(this).data('pattern-mismatch')) {
                            validationMessage = $(this).data('pattern-mismatch');
                        }
                        if ((this.validity.rangeOverflow || this.validity.rangeUnderflow) && $(this).data('range-error')) {
                            validationMessage = $(this).data('range-error');
                        }
                        if ((this.validity.tooLong || this.validity.tooShort) && $(this).data('range-error')) {
                            validationMessage = $(this).data('range-error');
                        }
                        if (this.validity.valueMissing && $(this).data('missing-error')) {
                            validationMessage = $(this).data('missing-error');
                        }
                        $(this).parents('.form-group').find('.invalid-feedback').text(validationMessage);
                    }
                });
            },
            submit: function() {
                $('form').on('submit', function(e) {
                    return validateForm.call(this, e);
                });
            },
            buttonClick: function() {
                $('form button[type="submit"], form input[type="submit"]').on('click', function() {
                    clearForm($(this).parents('form'));
                });
            },
            functions: {
                validateForm: function(form, event) {
                    validateForm.call($(form), event || null);
                },
                clearForm: clearForm
            }
        };
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var processInclude = __webpack_require__(1);
        $(document).ready(function() {
            var activatedCaroussel = $('.section-horizontal-carousel .horizontal-carousel').length;
            if (activatedCaroussel) {
                $('.section-horizontal-carousel .horizontal-carousel').each(function(index, element) {
                    var slotID = $(this).data('slotid');
                    var calloutMsg = $(this).data('calloutmsg');
                    $('#' + slotID + '-tab-id').text(calloutMsg);
                    if (index === 0) {
                        $(this).parent("div.tab-pane").addClass("active");
                        $('#' + slotID + '-tab-id').addClass("active");
                    }
                });
            } else if (activatedCaroussel === 0) {
                $('div.home-horizontal-carousel-title').hide();
                $('div.section-horizontal-carousel').hide();
            }
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    (function(__webpack_provided_window_dot_jQuery, $) {
        __webpack_provided_window_dot_jQuery = window.$ = __webpack_require__(0);
        var processInclude = __webpack_require__(1);
        $(document).ready(function() {
            processInclude(__webpack_require__(10));
            processInclude(__webpack_require__(12));
            processInclude(__webpack_require__(14));
            processInclude(__webpack_require__(15));
            processInclude(__webpack_require__(16));
            processInclude(__webpack_require__(17));
            processInclude(__webpack_require__(20));
            processInclude(__webpack_require__(21));
            processInclude(__webpack_require__(7));
            processInclude(__webpack_require__(32));
            processInclude(__webpack_require__(33));
            processInclude(__webpack_require__(34));
            processInclude(__webpack_require__(35));
            processInclude(__webpack_require__(37));
            processInclude(__webpack_require__(39));
            processInclude(__webpack_require__(8));
            processInclude(__webpack_require__(40));
            processInclude(__webpack_require__(41));
            processInclude(__webpack_require__(43));
            processInclude(__webpack_require__(44));
            processInclude(__webpack_require__(45));
            processInclude(__webpack_require__(46));
            processInclude(__webpack_require__(47));
            processInclude(__webpack_require__(48));
            processInclude(__webpack_require__(49));
            processInclude(__webpack_require__(8));
            processInclude(__webpack_require__(50));
            processInclude(__webpack_require__(51));
            processInclude(__webpack_require__(52));
            processInclude(__webpack_require__(54));
            processInclude(__webpack_require__(55));
        });
        __webpack_require__(56);
        __webpack_require__(60);
        __webpack_require__(61);
    }
    .call(this, __webpack_require__(0), __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var processInclude = __webpack_require__(1);
        $(document).ready(function() {
            processInclude(__webpack_require__(11));
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports) {
    /*!
* @copyright Copyright (c) 2017 IcoMoon.io
* @license Licensed under MIT license
* See https://github.com/Keyamoon/svgxuse
* @version 1.2.6
*/
    (function() {
        "use strict";
        if (typeof window !== "undefined" && window.addEventListener) {
            var cache = Object.create(null);
            var checkUseElems;
            var tid;
            var debouncedCheck = function() {
                clearTimeout(tid);
                tid = setTimeout(checkUseElems, 100);
            };
            var unobserveChanges = function() {
                return;
            };
            var observeChanges = function() {
                var observer;
                window.addEventListener("resize", debouncedCheck, false);
                window.addEventListener("orientationchange", debouncedCheck, false);
                if (window.MutationObserver) {
                    observer = new MutationObserver(debouncedCheck);
                    observer.observe(document.documentElement, {
                        childList: true,
                        subtree: true,
                        attributes: true
                    });
                    unobserveChanges = function() {
                        try {
                            observer.disconnect();
                            window.removeEventListener("resize", debouncedCheck, false);
                            window.removeEventListener("orientationchange", debouncedCheck, false);
                        } catch (ignore) {}
                    }
                    ;
                } else {
                    document.documentElement.addEventListener("DOMSubtreeModified", debouncedCheck, false);
                    unobserveChanges = function() {
                        document.documentElement.removeEventListener("DOMSubtreeModified", debouncedCheck, false);
                        window.removeEventListener("resize", debouncedCheck, false);
                        window.removeEventListener("orientationchange", debouncedCheck, false);
                    }
                    ;
                }
            };
            var createRequest = function(url) {
                function getOrigin(loc) {
                    var a;
                    if (loc.protocol !== undefined) {
                        a = loc;
                    } else {
                        a = document.createElement("a");
                        a.href = loc;
                    }
                    return a.protocol.replace(/:/g, "") + a.host;
                }
                var Request;
                var origin;
                var origin2;
                if (window.XMLHttpRequest) {
                    Request = new XMLHttpRequest();
                    origin = getOrigin(location);
                    origin2 = getOrigin(url);
                    if (Request.withCredentials === undefined && origin2 !== "" && origin2 !== origin) {
                        Request = XDomainRequest || undefined;
                    } else {
                        Request = XMLHttpRequest;
                    }
                }
                return Request;
            };
            var xlinkNS = "http://www.w3.org/1999/xlink";
            checkUseElems = function() {
                var base;
                var bcr;
                var fallback = "";
                var hash;
                var href;
                var i;
                var inProgressCount = 0;
                var isHidden;
                var Request;
                var url;
                var uses;
                var xhr;
                function observeIfDone() {
                    inProgressCount -= 1;
                    if (inProgressCount === 0) {
                        unobserveChanges();
                        observeChanges();
                    }
                }
                function attrUpdateFunc(spec) {
                    return function() {
                        if (cache[spec.base] !== true) {
                            spec.useEl.setAttributeNS(xlinkNS, "xlink:href", "#" + spec.hash);
                            if (spec.useEl.hasAttribute("href")) {
                                spec.useEl.setAttribute("href", "#" + spec.hash);
                            }
                        }
                    }
                    ;
                }
                function onloadFunc(xhr) {
                    return function() {
                        var body = document.body;
                        var x = document.createElement("x");
                        var svg;
                        xhr.onload = null;
                        x.innerHTML = xhr.responseText;
                        svg = x.getElementsByTagName("svg")[0];
                        if (svg) {
                            svg.setAttribute("aria-hidden", "true");
                            svg.style.position = "absolute";
                            svg.style.width = 0;
                            svg.style.height = 0;
                            svg.style.overflow = "hidden";
                            body.insertBefore(svg, body.firstChild);
                        }
                        observeIfDone();
                    }
                    ;
                }
                function onErrorTimeout(xhr) {
                    return function() {
                        xhr.onerror = null;
                        xhr.ontimeout = null;
                        observeIfDone();
                    }
                    ;
                }
                unobserveChanges();
                uses = document.getElementsByTagName("use");
                for (i = 0; i < uses.length; i += 1) {
                    try {
                        bcr = uses[i].getBoundingClientRect();
                    } catch (ignore) {
                        bcr = false;
                    }
                    href = uses[i].getAttribute("href") || uses[i].getAttributeNS(xlinkNS, "href") || uses[i].getAttribute("xlink:href");
                    if (href && href.split) {
                        url = href.split("#");
                    } else {
                        url = ["", ""];
                    }
                    base = url[0];
                    hash = url[1];
                    isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
                    if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
                        if (fallback && !base.length && hash && !document.getElementById(hash)) {
                            base = fallback;
                        }
                        if (uses[i].hasAttribute("href")) {
                            uses[i].setAttributeNS(xlinkNS, "xlink:href", href);
                        }
                        if (base.length) {
                            xhr = cache[base];
                            if (xhr !== true) {
                                setTimeout(attrUpdateFunc({
                                    useEl: uses[i],
                                    base: base,
                                    hash: hash
                                }), 0);
                            }
                            if (xhr === undefined) {
                                Request = createRequest(base);
                                if (Request !== undefined) {
                                    xhr = new Request();
                                    cache[base] = xhr;
                                    xhr.onload = onloadFunc(xhr);
                                    xhr.onerror = onErrorTimeout(xhr);
                                    xhr.ontimeout = onErrorTimeout(xhr);
                                    xhr.open("GET", base);
                                    xhr.send();
                                    inProgressCount += 1;
                                }
                            }
                        }
                    } else {
                        if (!isHidden) {
                            if (cache[base] === undefined) {
                                cache[base] = true;
                            } else if (cache[base].onload) {
                                cache[base].abort();
                                delete cache[base].onload;
                                cache[base] = true;
                            }
                        } else if (base.length && cache[base]) {
                            setTimeout(attrUpdateFunc({
                                useEl: uses[i],
                                base: base,
                                hash: hash
                            }), 0);
                        }
                    }
                }
                uses = "";
                inProgressCount += 1;
                observeIfDone();
            }
            ;
            var winLoad;
            winLoad = function() {
                window.removeEventListener("load", winLoad, false);
                tid = setTimeout(checkUseElems, 0);
            }
            ;
            if (document.readyState !== "complete") {
                window.addEventListener("load", winLoad, false);
            } else {
                winLoad();
            }
        }
    }());
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var helpers = __webpack_require__(3);
        var keyboardAccessibility = __webpack_require__(13);
        var clearSelection = function(element) {
            $(element).find('.nav-item.show').removeClass('show').children('.nav-link').attr('aria-expanded', 'false');
        };
        function nextInContainer($item, containerSelector, itemSelector) {
            var $container = $item.closest(containerSelector);
            var $items = $container.find(itemSelector);
            var index = $items.index($item);
            return $items.eq(index + 1);
        }
        function prevInContainer($item, containerSelector, itemSelector) {
            var $container = $item.closest(containerSelector);
            var $items = $container.find(itemSelector);
            var index = $items.index($item);
            return index ? $items.eq(index - 1) : $();
        }
        module.exports = function() {
            $('body').on('keydown focusin', '.main-menu .nav-link', function(event) {
                var $this = $(this)
                  , $parent = $this.parents('.custom-nav-lc')
                  , $parent_item = $this.parents('.nav-item')
                  , $subnav = $this.next('.dropdown-menu')
                  , subnavItem = '.dropdown-menu--subitem:visible'
                  , subnavLink = '.dropdown-menu--link';
                clearSelection('.custom-nav-lc');
                if (event.keyCode == 37) {
                    if ($parent_item.is(".nav-item:first-child")) {
                        $parent.find(" .nav-item:last-child ").addClass('show').children(".nav-link").attr('aria-expanded', 'true').focus();
                    } else {
                        $parent_item.prev().addClass('show').children(".nav-link").attr('aria-expanded', 'true').focus();
                    }
                    event.preventDefault();
                }
                if (event.keyCode == 39) {
                    if ($parent_item.is(".nav-item:last-child")) {
                        $parent.find(" .nav-item:first-child ").addClass('show').children(".nav-link").attr('aria-expanded', 'true').focus();
                    } else {
                        $parent_item.next().addClass('show').children(".nav-link").attr('aria-expanded', 'true').focus();
                    }
                    event.preventDefault();
                }
                if (event.keyCode == 40 || event.keyCode == 13) {
                    if (!$parent_item.hasClass("show")) {
                        $parent_item.addClass('show').children(".nav-link").attr('aria-expanded', 'true').focus();
                    }
                    if ($subnav.length === 1) {
                        $subnav.find(subnavItem).first().find(subnavLink).first().focus();
                    }
                    event.preventDefault();
                }
                if (event.shiftKey && event.keyCode == 9) {
                    if ($parent_item.is(".js-nav-system__item:first-child")) {
                        $subnav.attr({
                            'data-visually-hidden': 'true'
                        });
                    } else {
                        var $prev_nav_link = $parent_item.prev('.js-nav-system__item').children(".js-nav-system__link")
                          , $subnav_prev = $prev_nav_link.next('.js-nav-system__subnav');
                        if ($subnav_prev.length === 1) {
                            $subnav.attr({
                                'data-visually-hidden': 'true'
                            });
                            $subnav_prev.attr({
                                'data-visually-hidden': 'false'
                            });
                            $subnav_prev.find(" .js-nav-system__subnav__item:last-child ").children(".js-nav-system__subnav__link").focus();
                            event.preventDefault();
                        }
                    }
                }
            }).on('keydown', '.main-menu .dropdown-menu--link', function(event) {
                var $this = $(this)
                  , $subnav = $this.closest('.dropdown-menu')
                  , $subnav_item = $this.closest('.dropdown-menu--subitem:visible')
                  , $nav_link = $subnav.prev('.nav-link')
                  , $nav_item = $nav_link.closest('.nav-item')
                  , $nav = $nav_link.closest('.custom-nav-lc')
                  , subnavItem = '.dropdown-menu--subitem:visible'
                  , subnavLink = '.dropdown-menu--link'
                  , subnav = '.dropdown-menu'
                  , item = '.nav-item'
                  , link = '.nav-lin';
                if (event.keyCode == 40) {
                    var $nextLink = nextInContainer($this, subnavItem, subnavLink);
                    if (!$nextLink.length) {
                        $subnav_item.find(subnavLink).first().focus();
                    } else {
                        $nextLink.focus();
                    }
                    event.preventDefault();
                }
                if (event.keyCode == 38) {
                    var $prevLink = prevInContainer($this, subnavItem, subnavLink);
                    if (!$prevLink.length) {
                        $subnav_item.find(subnavLink).last().focus();
                    } else {
                        $prevLink.focus();
                    }
                    event.preventDefault();
                }
                if (event.keyCode == 27) {
                    $nav_link.attr('aria-expanded', 'false').focus();
                    event.preventDefault();
                }
                if (event.keyCode == 39) {
                    $nav_link.attr('aria-expanded', 'true');
                    var $subnav_item_next = nextInContainer($subnav_item, '.dropdown-menu', subnavItem);
                    if ($nav_item.is('.nav-item:last-child') && !$subnav_item_next.length) {
                        var $next = $nav.find('.nav-item').first().find('.nav-link');
                        $next.focus();
                        var $subnav_next = $next.next('.dropdown-menu');
                        if ($subnav_next.length === 1) {
                            $subnav_next.find(subnavItem).first().find(subnavLink).first().focus();
                        }
                    } else {
                        if ($subnav_item_next.length === 1) {
                            $subnav_item_next.find(subnavLink).first().focus();
                        }
                    }
                    event.preventDefault();
                }
                if (event.keyCode == 37) {
                    $nav_link.attr('aria-expanded', 'true');
                    var $subnav_item_prev = prevInContainer($subnav_item, '.dropdown-menu', subnavItem);
                    if ($nav_item.is('.nav-item:first-child') && !$subnav_item_prev.length) {
                        var $prev = $nav.find('.nav-item').last().find('.nav-link');
                        $prev.focus();
                        var $subnav_prev = $prev.next(subnav);
                        if ($subnav_prev.length === 1) {
                            $subnav_prev.find(subnavItem).first().find(subnavLink).first().focus();
                        }
                    } else {
                        if ($subnav_item_prev.length === 1) {
                            $subnav_item_prev.find(subnavLink).first().focus();
                        }
                    }
                    event.preventDefault();
                }
                if (event.keyCode == 9 && !event.shiftKey) {
                    if ($nav_item.is(".js-nav-system__item:last-child") && $subnav_item.is(".js-nav-system__subnav__item:last-child")) {
                        $subnav.attr({
                            'data-visually-hidden': 'true'
                        });
                    }
                }
            }).on('click', '.skip-link .btn-alpha', function(event) {
                event.stopPropagation();
            }).on('keyup', '.skip-link .btn-alpha', function(event) {
                event.stopPropagation();
                var $href = $(this).attr('href');
                if (event.keyCode == 13) {
                    switch ($href) {
                    case '#skip-search-input':
                        $('#header-search-input').attr('tabindex', '-1');
                        $('.header_top_nav--search,.header_top_nav--search .dropdown-menu').addClass('show');
                        $('.header_top_nav--search .link').attr('aria-expanded', 'true');
                        $('#header-search-input').focus();
                        break;
                    case '#skip-mainnavigation':
                        $('#block-mainnavigation').attr('tabindex', '-1');
                        $('#block-mainnavigation').focus();
                        break;
                    case '#skip-main':
                        $('main[role="main"]').attr('tabindex', '-1');
                        $('html, body').animate({
                            scrollTop: $('main[role="main"]').offset().top
                        }, 'slow');
                        $('main[role="main"]').focus();
                        break;
                    }
                }
            });
            $('#header-search-input,.header_top_nav--search > a.link--alpha').on('click', function() {
                return false;
            });
            $('.main-menu .dropdown').on('touchstart', '[data-toggle="dropdown"]', function(e) {
                if (helpers.isMobile() || helpers.isSmallScreen()) {
                    var self = $(this);
                    e.preventDefault();
                    $(self).parent('.dropdown').siblings('.dropdown').removeClass('show').children('.nav-link').attr('aria-expanded', 'false');
                    var $ariaIsExp = ($(self).attr('aria-expanded') === 'false');
                    $(self).attr('aria-expanded', $ariaIsExp).parent().toggleClass('show');
                    var nuSubitems = $(self).next('.dropdown-menu').find('.dropdown-menu--subitem--parent');
                    if (nuSubitems.length < 2) {
                        $(nuSubitems).removeClass('dropdown-menu--subitem--parent').addClass('dropdown-menu--subitem--child').attr('aria-expanded', 'true');
                    }
                }
            }).on('mouseenter', function() {
                var self = $(this).children('[data-toggle="dropdown"]');
                var popdelay = $(this).attr('data-timer-id');
                if (popdelay) {
                    clearTimeout(popdelay);
                }
                clearSelection('.custom-nav-lc');
                $(this).addClass('show');
                $(self).attr('aria-expanded', 'true');
            }).on('mouseleave', function() {
                var self = $(this);
                var popdelay = setTimeout(function() {
                    $(self).removeClass('show');
                    $(self).children('.nav-link').attr('aria-expanded', 'false');
                }, 350);
                $(this).attr('data-timer-id', popdelay);
            });
            $('.dropdown-menu--subitem--close').on('click', function(e) {
                $('.nav-item.dropdown').removeClass('show').children('.nav-link').attr('aria-expanded', 'false');
                $('.dropdown-menu--subitem--child').addClass('dropdown-menu--subitem--parent').removeClass('dropdown-menu--subitem--child').attr('aria-expanded', 'false').siblings('.dropdown-menu--subitem').removeClass('hidden');
            })
            $('.dropdown-menu--subitem--parent').on('touchstart click', function(e) {
                var $self = $(this);
                if (helpers.isSmallScreen()) {
                    var $ariaIsExp = ($(self).attr('aria-expanded') === 'false');
                    if ($('.dropdown-menu--subitem--child').has(e.target).length <= 0) {
                        e.preventDefault();
                        $self.removeClass('dropdown-menu--subitem--parent').addClass('dropdown-menu--subitem--child').attr('aria-expanded', $ariaIsExp).siblings('.dropdown-menu--subitem').toggleClass('hidden');
                    }
                }
            });
            $(window).on('orientationchange resize', function() {
                $('.nav-item.dropdown').removeClass('show').children('.nav-link').attr('aria-expanded', 'false');
                if ($(window).width() > 768) {
                    $('.dropdown-menu--subitem').removeClass('hidden');
                    $('.dropdown-menu--subitem--parent .dropdown-menu--title').removeClass('d-none');
                    $('.dropdown-menu--subitem--parent').attr('aria-expanded', 'false').siblings('.dropdown-menu--subitem').removeClass('hidden');
                } else {
                    $('.dropdown-menu--subitem--child').addClass('dropdown-menu--subitem--parent').removeClass('dropdown-menu--subitem--child').attr('aria-expanded', 'false').siblings('.dropdown-menu--subitem').removeClass('hidden');
                }
            })
            if (!helpers.isMobile()) {
                $('.dropdown-menu .isMobile').removeClass('d-md-flex')
            }
            $('.header_top_item.dropdown:not(.disabled)').on('touchstart', '[data-toggle="dropdown"]', function(e) {
                var self = $(this);
                if (helpers.isSmallScreen()) {
                    var $others = $(self).parent().siblings('.header_top_item.dropdown');
                    $others.removeClass('show').children('.dropdown-menu').removeClass('show').siblings('.link').attr('aria-expanded', 'false');
                    $('.minicart').children('.popover').removeClass('show');
                    $(self).parent().addClass('show');
                    var $ariaIsExp = ($(self).attr('aria-expanded') === 'false');
                    $(self).attr('aria-expanded', $ariaIsExp).siblings('.dropdown-menu').toggleClass('show');
                }
            }).on('mouseenter focusin', function() {
                if (!helpers.isSmallScreen()) {
                    var self = $(this);
                    var popdelay = $(this).attr('data-timer-id');
                    if (popdelay) {
                        clearTimeout(popdelay);
                    }
                    var $others = $('.header_top_item.dropdown:not(.disabled)');
                    $others.removeClass('show').attr('aria-expanded', 'false').children('.dropdown-menu').removeClass('show');
                    $('.minicart').children('.popover').removeClass('show');
                    $(self).addClass('show');
                    $(self).children('.dropdown-menu').addClass('show');
                    $(self).children('.link').attr('aria-expanded', 'true');
                }
            }).on('mouseleave', function() {
                if (!helpers.isSmallScreen()) {
                    var self = $(this);
                    var popdelay = setTimeout(function() {
                        $(self).removeClass('show');
                        $(self).children('.dropdown-menu').removeClass('show');
                        $(self).children('.link').attr('aria-expanded', 'false');
                    }, 350);
                    $(this).attr('data-timer-id', popdelay);
                }
            }).on('click', '.btn__close', function() {
                var $others = $('.header_top_item.dropdown:not(.disabled)');
                $others.removeClass('show').attr('aria-expanded', 'false').children('.dropdown-menu').removeClass('show');
                $others.children('.link').attr('aria-expanded', 'false');
            });
            keyboardAccessibility('.navbar-header .user', {
                40: function($popover) {
                    if ($popover.children('a').first().is(':focus')) {
                        $popover.children('a').first().next().focus();
                    } else {
                        $popover.children('a').first().focus();
                    }
                },
                38: function($popover) {
                    if ($popover.children('a').first().is(':focus')) {
                        $(this).focus();
                        $popover.removeClass('show');
                    } else {
                        $popover.children('a').first().focus();
                    }
                },
                27: function($popover) {
                    $(this).focus();
                    $popover.removeClass('show');
                },
                9: function($popover) {
                    $popover.removeClass('show');
                }
            }, function() {
                var $popover = $('.user .popover');
                if (!($popover.hasClass('show'))) {
                    $popover.addClass('show');
                }
                return $popover;
            });
            $('body').css('padding-top', $('header[role=banner]').outerHeight());
            $(window).on('scroll resize', function() {
                var $body = $('body');
                var $nav = $('nav[role=navigation]');
                if ($nav.length > 0) {
                    if ($(document).scrollTop() > 100) {
                        $body.addClass('scrolled');
                    } else {
                        $body.removeClass('scrolled');
                    }
                    setTimeout(function() {
                        $body.css('padding-top', $('header[role=banner]').outerHeight());
                    }, 200);
                }
            });
            $(document).on('click', '.menu-group .c-btn--dots', function() {
                this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false');
            });
            $(document).on('touchstart', function(e) {
                if (!$(e.target).parents().addBack().is('.custom-nav-lc .dropdown')) {
                    $('.custom-nav-lc [data-toggle="dropdown"]').attr('aria-expanded', 'false');
                }
            });
            $(document).on('click', '#003306', function() {
                var $lppURL = $(this).attr('href');
                $('#redirectLPP').find('a').attr('href', $lppURL);
            });
            if (localStorage.getItem('promoState') !== 'shown') {
                $('.header-banner').css('display', 'block');
            }
            $(document).on('click', '#closeBtn', function() {
                $(this).parents('.header-banner').css('display', 'none');
                localStorage.setItem('promoState', 'shown');
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = function(selector, keyFunctions, preFunction) {
            $(selector).on('keydown', function(e) {
                var key = e.which;
                var supportedKeyCodes = [37, 38, 39, 40, 27];
                if (supportedKeyCodes.indexOf(key) >= 0) {
                    e.preventDefault();
                }
                var returnedScope = preFunction.call(this);
                if (keyFunctions[key]) {
                    keyFunctions[key].call(this, returnedScope);
                }
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function getCookie(cookieName) {
            var name = cookieName + '=';
            var decodedCookie = decodeURIComponent(document.cookie);
            var cookieArray = decodedCookie.split(';');
            for (var i = 0; i < cookieArray.length; i++) {
                var cookieItem = cookieArray[i];
                while (cookieItem.charAt(0) === ' ') {
                    cookieItem = cookieItem.substring(1);
                }
                if (cookieItem.indexOf(name) === 0) {
                    return cookieItem.substring(name.length, cookieItem.length);
                }
            }
            return '';
        }
        module.exports = function() {
            if ($('.valid-cookie-warning').length > 0) {
                var previousSessionID = window.localStorage.getItem('previousSid');
                var currentSessionID = getCookie('sid');
                if (!previousSessionID && currentSessionID) {
                    previousSessionID = currentSessionID;
                    window.localStorage.setItem('previousSid', previousSessionID);
                    $('.cookie-warning-messaging').show();
                } else if (previousSessionID && previousSessionID === currentSessionID) {
                    $('.cookie-warning-messaging').hide();
                } else {
                    previousSessionID = '';
                    window.localStorage.removeItem('previousSid');
                }
            }
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function showConsentModal() {
            if (!$('.tracking-consent').data('caonline')) {
                return;
            }
            var urlContent = $('.tracking-consent').data('url');
            var urlAccept = $('.tracking-consent').data('accept');
            var urlReject = $('.tracking-consent').data('reject');
            var textYes = $('.tracking-consent').data('accepttext');
            var textNo = $('.tracking-consent').data('rejecttext');
            var textHeader = $('.tracking-consent').data('heading');
            var htmlString = '<!-- Modal -->' + '<div class="modal show" id="consent-tracking" role="dialog" style="display: block;">' + '<div class="modal-dialog">' + '<!-- Modal content-->' + '<div class="modal-content">' + '<div class="modal-header">' + textHeader + '</div>' + '<div class="modal-body"></div>' + '<div class="modal-footer">' + '<div class="button-wrapper">' + '<button class="affirm btn btn-primary" data-url="' + urlAccept + '">' + textYes + '</button>' + '<button class="decline btn btn-primary" data-url="' + urlReject + '">' + textNo + '</button>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>';
            $.spinner().start();
            $('body').append(htmlString);
            $.ajax({
                url: urlContent,
                type: 'get',
                dataType: 'html',
                success: function(response) {
                    $('.modal-body').html(response);
                },
                error: function() {
                    $('#consent-tracking').remove();
                }
            });
            $('#consent-tracking .button-wrapper button').click(function(e) {
                e.preventDefault();
                var url = $(this).data('url');
                $.ajax({
                    url: url,
                    type: 'get',
                    dataType: 'json',
                    success: function() {
                        $('#consent-tracking .modal-body').remove();
                        $('#consent-tracking').remove();
                        $.spinner().stop();
                    },
                    error: function() {
                        $('#consent-tracking .modal-body').remove();
                        $('#consent-tracking').remove();
                        $.spinner().stop();
                    }
                });
            });
        }
        module.exports = function() {
            if ($('.consented').length === 0 && $('.tracking-consent').hasClass('api-true')) {
                showConsentModal();
            }
            if ($('.tracking-consent').hasClass('api-true')) {
                $('.tracking-consent').click(function() {
                    showConsentModal();
                });
            }
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = function() {
            $('.back-to-top').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var cart = __webpack_require__(18);
        module.exports = function() {
            cart();
            $('.minicart').on('count:update', function(event, count) {
                if (count && $.isNumeric(count.quantityTotal)) {
                    $('.minicart .minicart-quantity').text(count.quantityTotal);
                }
            });
            $('.minicart').on('mouseenter focusin touchstart', function(e) {
                e.preventDefault();
                var url = $('.minicart').data('action-url');
                var count = parseInt($('.minicart .minicart-quantity').text(), 10);
                var $minicart = $('.minicart');
                var popdelay = $(this).attr('data-timer-id');
                if (popdelay) {
                    clearTimeout(popdelay);
                }
                var $others = $('.header_top_item.dropdown:not(.disabled)');
                $others.removeClass('show').children('.dropdown-menu').removeClass('show').siblings('.link').attr('aria-expanded', 'false');
                if (count !== 0 && $('.minicart .popover.show').length === 0) {
                    $minicart.children('.popover').addClass('show');
                    $minicart.children('.link').attr('aria-expanded', 'true');
                    $('.minicart .popover').spinner().start();
                    $.get(url, function(data) {
                        $('.minicart .popover').empty();
                        $('.minicart .popover').append(data);
                        $.spinner().stop();
                    });
                }
            });
            $('body').on('touchstart focusin', function(e) {
                if ($('.minicart').has(e.target).length <= 0) {
                    $('.minicart .popover').empty();
                    $('.minicart').children('.popover').removeClass('show');
                    $('.minicart').children('.link').attr('aria-expanded', 'false');
                }
            });
            $('.minicart').on('mouseleave focusout', function(event) {
                if ((event.type === 'focusout' && $('.minicart').has(event.target).length > 0) || (event.type === 'mouseleave' && $(event.target).is('.minicart .quantity')) || $('body').hasClass('modal-open')) {
                    event.stopPropagation();
                    return;
                }
                var popdelay;
                popdelay = setTimeout(function() {
                    $('.minicart .popover').empty();
                    $('.minicart .popover').removeClass('show');
                    $('.minicart').children('.link').attr('aria-expanded', 'false');
                }, 350);
                $(this).attr('data-timer-id', popdelay);
            });
            $('.minicart .popover').on('click touchstart', function(event) {
                if ($(event.target).is('.minicart .btn__close')) {
                    setTimeout(function() {
                        $('.minicart .popover').empty();
                        $('.minicart').children('.popover').removeClass('show');
                        $('.minicart').children('.link').attr('aria-expanded', 'false');
                    }, 200);
                }
                event.stopPropagation();
            });
            $('body').on('change', '.minicart .quantity', function() {
                if ($(this).parents('.bonus-product-line-item').length && $('.cart-page').length) {
                    location.reload();
                }
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var base = __webpack_require__(19);
        function appendToUrl(url, params) {
            var newUrl = url;
            newUrl += (newUrl.indexOf('?') !== -1 ? '&' : '?') + Object.keys(params).map(function(key) {
                return key + '=' + encodeURIComponent(params[key]);
            }).join('&');
            return newUrl;
        }
        function validateBasket(data) {
            if (data.valid.error) {
                if (data.valid.message) {
                    var errorHtml = '<div class="alert alert-danger alert-dismissible valid-cart-error ' + 'fade show" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + '<span aria-hidden="true">&times;</span>' + '</button>' + data.valid.message + '</div>';
                    $('.cart-error').append(errorHtml);
                } else {
                    $('.cart').empty().append('<div class="row"> ' + '<div class="col-12 text-center"> ' + '<h1>' + data.resources.emptyCartMsg + '</h1> ' + '</div> ' + '</div>');
                    $('.number-of-items').empty().append(data.resources.numberOfItems);
                    $('.minicart-quantity').empty().append(data.numItems);
                    $('.minicart .popover').empty();
                    $('.minicart .popover').removeClass('show');
                }
                $('.checkout-btn').addClass('disabled');
            } else {
                $('.checkout-btn').removeClass('disabled');
            }
        }
        function updateCartTotals(data) {
            $('.number-of-items').empty().append(data.resources.numberOfItems);
            $('.shipping-cost').empty().append(data.totals.totalShippingCost);
            $('.tax-total').empty().append(data.totals.totalTax);
            $('.grand-total').empty().append(data.totals.grandTotal);
            $('.sub-total').empty().append(data.totals.subTotal);
            $('.number-items').empty().append(data.numItems);
            if (data.numItems > 1) {
                $('.cartNumber').addClass('hidden');
                $('.cartNumber-plural').removeClass('hidden');
            } else {
                $('.cartNumber').removeClass('hidden');
                $('.cartNumber-plural').addClass('hidden');
            }
            $('.minicart-quantity').empty().append(data.numItems);
            if (data.totals.orderLevelDiscountTotal.value > 0) {
                $('.order-discount').removeClass('hide-order-discount');
                $('.order-discount-total').empty().append('- ' + data.totals.orderLevelDiscountTotal.formatted);
            } else {
                $('.order-discount').addClass('hide-order-discount');
            }
            if (data.totals.shippingLevelDiscountTotal.value > 0) {
                $('.shipping-discount').removeClass('hide-shipping-discount');
                $('.shipping-discount-total').empty().append('- ' + data.totals.shippingLevelDiscountTotal.formatted);
            } else {
                $('.shipping-discount').addClass('hide-shipping-discount');
            }
            data.items.forEach(function(item) {
                $('.item-' + item.UUID).empty().append(item.renderedPromotions);
                $('.item-total-' + item.UUID).empty().append(item.priceTotal.renderedPrice);
            });
        }
        function createErrorNotification(message) {
            var errorHtml = '<div class="alert alert-danger alert-dismissible valid-cart-error ' + 'fade show" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' + '<span aria-hidden="true">&times;</span>' + '</button>' + message + '</div>';
            $('.cart-error').append(errorHtml);
        }
        function updateApproachingDiscounts(approachingDiscounts) {
            var html = '';
            $('.approaching-discounts').empty();
            if (approachingDiscounts.length > 0) {
                approachingDiscounts.forEach(function(item) {
                    html += '<div class="single-approaching-discount text-center">' + item.discountMsg + '</div>';
                });
            }
            $('.approaching-discounts').append(html);
        }
        function updateAvailability(data, uuid) {
            var lineItem;
            var messages = '';
            for (var i = 0; i < data.items.length; i++) {
                if (data.items[i].UUID === uuid) {
                    lineItem = data.items[i];
                    break;
                }
            }
            $('.availability-' + lineItem.UUID).empty();
            if (lineItem.availability) {
                if (lineItem.availability.messages) {
                    lineItem.availability.messages.forEach(function(message) {
                        messages += '<p class="line-item-attributes">' + message + '</p>';
                    });
                }
                if (lineItem.availability.inStockDate) {
                    messages += '<p class="line-item-attributes line-item-instock-date">' + lineItem.availability.inStockDate + '</p>';
                }
            }
            $('.availability-' + lineItem.UUID).html(messages);
        }
        function updateProductDetails(data, uuid) {
            var lineItem = data.cartModel.items.find(function(item) {
                return item.UUID === uuid;
            });
            if (lineItem.variationAttributes) {
                var colorAttr = lineItem.variationAttributes.find(function(attr) {
                    return attr.attributeId === 'color';
                });
                if (colorAttr) {
                    var colorSelector = '.Color-' + uuid;
                    var newColor = 'Color: ' + colorAttr.displayValue;
                    $(colorSelector).text(newColor);
                }
                var sizeAttr = lineItem.variationAttributes.find(function(attr) {
                    return attr.attributeId === 'size';
                });
                if (sizeAttr) {
                    var sizeSelector = '.Size-' + uuid;
                    var newSize = 'Size: ' + sizeAttr.displayValue;
                    $(sizeSelector).text(newSize);
                }
                var imageSelector = '.card.product-info.uuid-' + uuid + ' .item-image > img';
                $(imageSelector).attr('src', lineItem.images.small[0].url);
                $(imageSelector).attr('alt', lineItem.images.small[0].alt);
                $(imageSelector).attr('title', lineItem.images.small[0].title);
            }
            var qtySelector = '.quantity[data-uuid="' + uuid + '"]';
            $(qtySelector).val(lineItem.quantity);
            $(qtySelector).data('pid', data.newProductId);
            $('.remove-product[data-uuid="' + uuid + '"]').data('pid', data.newProductId);
            var priceSelector = '.line-item-price-' + uuid + ' .sales .value';
            $(priceSelector).text(lineItem.price.sales.formatted);
            $(priceSelector).attr('content', lineItem.price.sales.decimalPrice);
            if (lineItem.price.list) {
                var listPriceSelector = '.line-item-price-' + uuid + ' .list .value';
                $(listPriceSelector).text(lineItem.price.list.formatted);
                $(listPriceSelector).attr('content', lineItem.price.list.decimalPrice);
            }
        }
        function getModalHtmlElement() {
            if ($('#editProductModal').length !== 0) {
                $('#editProductModal').remove();
            }
            var ariaLabel = $('.cart-page .product-edit .edit').data('aria-label')
              , closeModal = $('.cart-page .product-edit .edit').data('close');
            var htmlString = '<!-- Modal -->' + '<div class="modal fade edit-product-modal" id="editProductModal" role="dialog" aria-label="' + ariaLabel + '">' + '<div class="modal-dialog quick-view-dialog" role="document">' + '<!-- Modal content-->' + '<div class="modal-content">' + '<div class="modal-header">' + '    <button type="button" class="close pull-right" data-dismiss="modal">' + '        &times;' + '     <span class="sr-only">' + closeModal + '</span>' + '    </button>' + '</div>' + '<div class="modal-body"></div>' + '<div class="modal-footer"></div>' + '</div>' + '</div>' + '</div>';
            $('body').append(htmlString);
        }
        function parseHtml(html) {
            var $html = $('<div>').append($.parseHTML(html));
            var body = $html.find('.product-quickview');
            var footer = $html.find('.modal-footer').children();
            return {
                body: body,
                footer: footer
            };
        }
        function fillModalElement(editProductUrl) {
            $('.modal-body').spinner().start();
            $.ajax({
                url: editProductUrl,
                method: 'GET',
                dataType: 'html',
                success: function(html) {
                    var parsedHtml = parseHtml(html);
                    $('#editProductModal .modal-body').empty();
                    $('#editProductModal .modal-body').html(parsedHtml.body);
                    $('#editProductModal .modal-footer').html(parsedHtml.footer);
                    $('#editProductModal .slider__arrows button svg').remove();
                    var src = $('.form__field--select').data('url');
                    $('.form__field--select').append('<svg class="symbol" aria-hidden="true"> ' + '<use xlink:href="' + src + '"> ' + '</use>' + '</svg>');
                    $('#editProductModal').modal('show');
                    if ($('.product-media__inner__carousel .c-item').length > 1) {
                        setTimeout(function() {
                            $('.product-thumb').addClass('hidden');
                            $('.product-media__inner__carousel').slick({
                                infinite: false,
                                speed: 250,
                                arrows: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                focusOnSelect: true,
                                prevArrow: $('.product-media__inner').find('.slider__btn--prev'),
                                nextArrow: $('.product-media__inner').find('.slider__btn--next')
                            });
                            var srcArrowLeft = $('.product-edit a.edit').data('arrow-left');
                            var srcArrowRight = $('.product-edit a.edit').data('arrow-right');
                            $('#editProductModal .slider__arrows button.slider__btn--prev').append('<svg class="symbol" aria-hidden="true"> ' + '<use xlink:href="' + srcArrowLeft + '"> ' + '</use>' + '</svg>');
                            $('#editProductModal .slider__arrows button.slider__btn--next').append('<svg class="symbol" aria-hidden="true"> ' + '<use xlink:href="' + srcArrowRight + '"> ' + '</use>' + '</svg>');
                        }, 150);
                    }
                    $.spinner().stop();
                },
                error: function() {
                    $.spinner().stop();
                }
            });
        }
        function confirmDelete(actionUrl, productID, productName, uuid) {
            var $deleteConfirmBtn = $('.cart-delete-confirmation-btn');
            var $productToRemoveSpan = $('.product-to-remove');
            $deleteConfirmBtn.data('pid', productID);
            $deleteConfirmBtn.data('action', actionUrl);
            $deleteConfirmBtn.data('uuid', uuid);
            $productToRemoveSpan.empty().append(productName);
        }
        module.exports = function() {
            $('body').on('click', '.remove-product', function(e) {
                e.preventDefault();
                var actionUrl = $(this).data('action');
                var productID = $(this).data('pid');
                var productName = $(this).data('name');
                var uuid = $(this).data('uuid');
                confirmDelete(actionUrl, productID, productName, uuid);
            });
            $('body').on('shown.bs.modal', '#removeProductModal', function(event) {
                $('.cart-delete-confirmation-btn').focus();
                $('.cart-cancel').removeAttr('tabindex');
            });
            $('body').on('hidden.bs.modal', '#removeProductModal', function(event) {
                $('.cart-delete-confirmation-btn').focus();
                $('.cart-cancel').removeAttr('tabindex');
            });
            $('body').on('hidden.bs.modal', '#removeProductModal', function(e) {
                $("h1").blur();
            });
            $('body').on('afterRemoveFromCart', function(e, data) {
                e.preventDefault();
                confirmDelete(data.actionUrl, data.productID, data.productName, data.uuid);
            });
            $('.optional-promo').click(function(e) {
                e.preventDefault();
                $('.promo-code-form').toggle();
            });
            $('body').on('click', '.cart-delete-confirmation-btn', function(e) {
                e.preventDefault();
                var productID = $(this).data('pid');
                var url = $(this).data('action');
                var uuid = $(this).data('uuid');
                var urlParams = {
                    pid: productID,
                    uuid: uuid
                };
                url = appendToUrl(url, urlParams);
                $('body > .modal-backdrop').remove();
                $.spinner().start();
                $.ajax({
                    url: url,
                    type: 'get',
                    dataType: 'json',
                    success: function(data) {
                        if (data.basket.items.length === 0) {
                            var emptyCart = $('.cart .js-cart-not-empty');
                            $('.cart--line,.header-number-label,.header-price-label').remove();
                            $('.cart .js-cart-list').append(' <li class="text-center mt-01"> ' + '<h2 class="alert-empty-cart p-02 fs-l">' + data.basket.resources.emptyCartMsg + '</h2> ' + '</li> ');
                            var cartList = $('.cart .js-cart-list').wrap('<div class=" mt-02 mb-03 cart-header"/>').parent().html();
                            emptyCart.removeClass('grid-third').empty().append(cartList);
                            $('.number-of-items').empty().append(data.basket.resources.numberOfItems);
                            $('.minicart-quantity').empty().append(data.basket.numItems);
                            $('.minicart .popover').empty();
                            $('.minicart .popover').removeClass('show');
                            $('body').removeClass('modal-open');
                            $('html').removeClass('veiled');
                        } else {
                            if (data.toBeDeletedUUIDs && data.toBeDeletedUUIDs.length > 0) {
                                for (var i = 0; i < data.toBeDeletedUUIDs.length; i++) {
                                    $('.uuid-' + data.toBeDeletedUUIDs[i]).remove();
                                }
                            }
                            $('.uuid-' + uuid).remove();
                            if (!data.basket.hasBonusProduct) {
                                $('.bonus-product').remove();
                            }
                            $('.coupons-and-promos').empty().append(data.basket.totals.discountsHtml);
                            updateCartTotals(data.basket);
                            updateApproachingDiscounts(data.basket.approachingDiscounts);
                            $('body').trigger('setShippingMethodSelection', data.basket);
                            validateBasket(data.basket);
                        }
                        $.spinner().stop();
                    },
                    error: function(err) {
                        if (err.responseJSON.redirectUrl) {
                            window.location.href = err.responseJSON.redirectUrl;
                        } else {
                            createErrorNotification(err.responseJSON.errorMessage);
                            $.spinner().stop();
                        }
                    }
                });
            });
            $('body').on('change', '.quantity-form > .quantity', function() {
                var preSelectQty = $(this).data('pre-select-qty');
                var quantity = $(this).val();
                var productID = $(this).data('pid');
                var url = $(this).data('action');
                var uuid = $(this).data('uuid');
                var urlParams = {
                    pid: productID,
                    quantity: quantity,
                    uuid: uuid
                };
                url = appendToUrl(url, urlParams);
                $(this).parents('.card').spinner().start();
                $.ajax({
                    url: url,
                    type: 'get',
                    context: this,
                    dataType: 'json',
                    success: function(data) {
                        $('.quantity[data-uuid="' + uuid + '"]').val(quantity);
                        $('.coupons-and-promos').empty().append(data.totals.discountsHtml);
                        updateCartTotals(data);
                        updateApproachingDiscounts(data.approachingDiscounts);
                        updateAvailability(data, uuid);
                        validateBasket(data);
                        $(this).data('pre-select-qty', quantity);
                        $.spinner().stop();
                        if ($(this).parents('.product-info').hasClass('bonus-product-line-item') && $('.cart-page').length) {
                            location.reload();
                        }
                    },
                    error: function(err) {
                        if (err.responseJSON.redirectUrl) {
                            window.location.href = err.responseJSON.redirectUrl;
                        } else {
                            createErrorNotification(err.responseJSON.errorMessage);
                            $(this).val(parseInt(preSelectQty, 10));
                            $.spinner().stop();
                        }
                    }
                });
            });
            $('.shippingMethods').change(function() {
                var url = $(this).attr('data-actionUrl');
                var urlParams = {
                    methodID: $(this).find(':selected').attr('data-shipping-id')
                };
                $('.totals').spinner().start();
                $.ajax({
                    url: url,
                    type: 'post',
                    dataType: 'json',
                    data: urlParams,
                    success: function(data) {
                        if (data.error) {
                            window.location.href = data.redirectUrl;
                        } else {
                            $('.coupons-and-promos').empty().append(data.totals.discountsHtml);
                            updateCartTotals(data);
                            updateApproachingDiscounts(data.approachingDiscounts);
                            validateBasket(data);
                        }
                        $.spinner().stop();
                    },
                    error: function(err) {
                        if (err.redirectUrl) {
                            window.location.href = err.redirectUrl;
                        } else {
                            createErrorNotification(err.responseJSON.errorMessage);
                            $.spinner().stop();
                        }
                    }
                });
            });
            $('.promo-code-form').submit(function(e) {
                e.preventDefault();
                $.spinner().start();
                $('.coupon-missing-error').hide();
                $('.coupon-error-message').empty();
                if (!$('.coupon-code-field').val()) {
                    $('.promo-code-form .form-control').addClass('is-invalid');
                    $('.coupon-missing-error').show();
                    $.spinner().stop();
                    return false;
                }
                var $form = $('.promo-code-form');
                $('.promo-code-form .form-control').removeClass('is-invalid');
                $('.coupon-error-message').empty();
                $.ajax({
                    url: $form.attr('action'),
                    type: 'GET',
                    dataType: 'json',
                    data: $form.serialize(),
                    success: function(data) {
                        if (data.error) {
                            $('.promo-code-form .form-control').addClass('is-invalid');
                            $('.coupon-error-message').empty().append(data.errorMessage);
                        } else {
                            $('.coupons-and-promos').empty().append(data.totals.discountsHtml);
                            updateCartTotals(data);
                            updateApproachingDiscounts(data.approachingDiscounts);
                            validateBasket(data);
                        }
                        $('.coupon-code-field').val('');
                        $.spinner().stop();
                    },
                    error: function(err) {
                        if (err.responseJSON.redirectUrl) {
                            window.location.href = err.responseJSON.redirectUrl;
                        } else {
                            createErrorNotification(err.errorMessage);
                            $.spinner().stop();
                        }
                    }
                });
                return false;
            });
            $('body').on('click', '.remove-coupon', function(e) {
                e.preventDefault();
                var couponCode = $(this).data('code');
                var uuid = $(this).data('uuid');
                var $deleteConfirmBtn = $('.delete-coupon-confirmation-btn');
                var $productToRemoveSpan = $('.coupon-to-remove');
                $deleteConfirmBtn.data('uuid', uuid);
                $deleteConfirmBtn.data('code', couponCode);
                $productToRemoveSpan.empty().append(couponCode);
            });
            $('body').on('click', '.delete-coupon-confirmation-btn', function(e) {
                e.preventDefault();
                var url = $(this).data('action');
                var uuid = $(this).data('uuid');
                var couponCode = $(this).data('code');
                var urlParams = {
                    code: couponCode,
                    uuid: uuid
                };
                url = appendToUrl(url, urlParams);
                $('body > .modal-backdrop').remove();
                $.spinner().start();
                $.ajax({
                    url: url,
                    type: 'get',
                    dataType: 'json',
                    success: function(data) {
                        $('.coupon-uuid-' + uuid).remove();
                        updateCartTotals(data);
                        updateApproachingDiscounts(data.approachingDiscounts);
                        validateBasket(data);
                        $.spinner().stop();
                    },
                    error: function(err) {
                        if (err.responseJSON.redirectUrl) {
                            window.location.href = err.responseJSON.redirectUrl;
                        } else {
                            createErrorNotification(err.responseJSON.errorMessage);
                            $.spinner().stop();
                        }
                    }
                });
            });
            $('body').on('click', '.cart-page .bonus-product-button', function() {
                $.spinner().start();
                $.ajax({
                    url: $(this).data('url'),
                    method: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        base.methods.editBonusProducts(data);
                        $.spinner().stop();
                    },
                    error: function() {
                        $.spinner().stop();
                    }
                });
            });
            $('.cart-page .product-edit .edit').focus();
            $('body').on('click', '.cart-page .product-edit .edit, .cart-page .bundle-edit .edit', function(e) {
                e.preventDefault();
                var editProductUrl = $(this).attr('href');
                getModalHtmlElement();
                fillModalElement(editProductUrl);
            }).on('shown.bs.modal', '#editProductModal', function(e) {
                $('#editProductModal .close').focus();
                $('body > *:not(#editProductModal)').attr('aria-hidden', 'true');
            }).on('hidden.bs.modal', '#editProductModal', function(e) {
                $('.cart-page .product-edit .edit').focus();
                $('#editProductModal').remove();
                $('body > *:not(#editProductModal)').removeAttr('aria-hidden', 'true');
            }).on('keydown', '.cart-page .product-edit .edit', function(event) {
                event.preventDefault();
                if (event.keyCode == '32') {
                    $(".cart-page .product-edit .edit").trigger("click");
                }
            }).on('keydown', '#editProductModal .update-cart-product-global', function(event) {
                event.preventDefault();
                if (event.keyCode == 9) {
                    $('#editProductModal .close').focus();
                }
            });
            $('body').on('product:updateAddToCart', function(e, response) {
                var dialog = $(response.$productContainer).closest('.quick-view-dialog');
                $('.update-cart-product-global', dialog).attr('disabled', !$('.global-availability', dialog).data('ready-to-order') || !$('.global-availability', dialog).data('available') || !$('.global-availability', dialog).data('sellable') || !$('.global-availability', dialog).data('sellable-country'));
            });
            $('body').on('product:updateAvailability', function(e, response) {
                $('.product-availability', response.$productContainer).data('ready-to-order', response.product.readyToOrder).data('available', response.product.available).data('sellable', response.product.sellable).data('sellable-country', response.product.visibleInCountry).find('.availability-msg').empty().html(response.message);
                var dialog = $(response.$productContainer).closest('.quick-view-dialog');
                if ($('.product-availability', dialog).length) {
                    var allSellable = $('.product-availability').toArray().every(function(item) {
                        return $(item).attr('sellable');
                    });
                    var allSellableCountry = $('.product-availability').toArray().every(function(item) {
                        return $(item).attr('sellable-country');
                    });
                    var allAvailable = $('.product-availability', dialog).toArray().every(function(item) {
                        return $(item).data('available');
                    });
                    var allReady = $('.product-availability', dialog).toArray().every(function(item) {
                        return $(item).data('ready-to-order');
                    });
                    $('.global-availability', dialog).data('ready-to-order', allReady).data('available', allAvailable).data('sellable', allSellable).data('sellable-country', allSellableCountry);
                    $('.global-availability .availability-msg', dialog).empty().html(allReady ? response.message : response.resources.info_selectforstock);
                } else {
                    $('.global-availability', dialog).data('ready-to-order', response.product.readyToOrder).data('available', response.product.available).data('sellable', response.product.sellable).data('sellable-country', response.product.visibleInCountry).find('.availability-msg').empty().html(response.message);
                }
            });
            $('body').on('product:afterAttributeSelect', function(e, response) {
                if ($('.modal.show .product-quickview .bundle-items').length) {
                    $('.modal.show').find(response.container).data('pid', response.data.product.id);
                    $('.modal.show').find(response.container).find('.product-id').text(response.data.product.id);
                } else {
                    $('.modal.show .product-quickview').data('pid', response.data.product.id);
                }
            });
            $('body').on('change', '.quantity-select', function() {
                var selectedQuantity = $(this).val();
                $('.modal.show .update-cart-url').data('selected-quantity', selectedQuantity);
            });
            $('body').on('click', '.update-cart-product-global', function(e) {
                e.preventDefault();
                var updateProductUrl = $(this).closest('.cart-and-ipay').find('.update-cart-url').val();
                var selectedQuantity = $(this).closest('.cart-and-ipay').find('.update-cart-url').data('selected-quantity');
                var uuid = $(this).closest('.cart-and-ipay').find('.update-cart-url').data('uuid');
                var form = {
                    uuid: uuid,
                    pid: base.getPidValue($(this)),
                    quantity: selectedQuantity
                };
                $(this).parents('.card').spinner().start();
                if (updateProductUrl) {
                    $.ajax({
                        url: updateProductUrl,
                        type: 'post',
                        context: this,
                        data: form,
                        dataType: 'json',
                        success: function(data) {
                            $('#editProductModal').remove();
                            $('.modal-backdrop').remove();
                            $('body').removeClass('modal-open');
                            $('.coupons-and-promos').empty().append(data.cartModel.totals.discountsHtml);
                            updateCartTotals(data.cartModel);
                            updateApproachingDiscounts(data.cartModel.approachingDiscounts);
                            updateAvailability(data.cartModel, uuid);
                            updateProductDetails(data, uuid);
                            if (data.uuidToBeDeleted) {
                                $('.uuid-' + data.uuidToBeDeleted).remove();
                            }
                            validateBasket(data.cartModel);
                            $.spinner().stop();
                            location.reload();
                        },
                        error: function(err) {
                            if (err.responseJSON.redirectUrl) {
                                window.location.href = err.responseJSON.redirectUrl;
                            } else {
                                createErrorNotification(err.responseJSON.errorMessage);
                                $.spinner().stop();
                            }
                        }
                    });
                }
            });
            base.selectAttribute();
            base.colorAttribute();
            base.removeBonusProduct();
            base.selectBonusProduct();
            base.enableBonusProductSelection();
            base.showMoreBonusProducts();
            base.addBonusProductsToCart();
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function getPidValue($el) {
            var pid;
            if ($('#quickViewModal').hasClass('show') && !$('.product-set').length) {
                pid = $($el).closest('.modal-content').find('.product-quickview').data('pid');
            } else if ($('.product-set-detail').length || $('.product-set').length) {
                pid = $($el).closest('.product-detail').find('.product-id').text();
            } else {
                pid = $('.product-detail:not(".bundle-item")').data('pid');
            }
            return pid;
        }
        function getQuantitySelector($el) {
            return $el && $('.set-items').length ? $($el).closest('.product-detail').find('.quantity-select') : $('.quantity-select');
        }
        function getQuantitySelected($el) {
            return getQuantitySelector($el).val();
        }
        function processSwatchValues(attr, $productContainer) {
            attr.values.forEach(function(attrValue) {
                var $attrValue = $productContainer.find('[data-attr="' + attr.id + '"] [data-attr-value="' + attrValue.value + '"]');
                var $swatchAnchor = $attrValue.parent();
                if (attrValue.selected) {
                    $attrValue.addClass('selected');
                } else {
                    $attrValue.removeClass('selected');
                }
                if (attrValue.url) {
                    $attrValue.attr('href', attrValue.url);
                } else {
                    $attrValue.removeAttr('href');
                }
                $attrValue.removeClass('selectable unselectable');
                $attrValue.addClass(attrValue.selectable ? 'selectable' : 'unselectable');
            });
        }
        function processNonSwatchValues(attr, $productContainer) {
            var $attr = '[data-attr="' + attr.id + '"]';
            var $defaultOption = $productContainer.find($attr + ' .select-' + attr.id + ' option:first');
            $defaultOption.attr('value', attr.resetUrl);
            attr.values.forEach(function(attrValue) {
                var $attrValue = $productContainer.find($attr + ' [data-attr-value="' + attrValue.value + '"]');
                $attrValue.attr('value', attrValue.url).removeAttr('disabled');
                if (!attrValue.selectable) {
                    $attrValue.attr('disabled', true);
                }
            });
        }
        function updateAttrs(attrs, $productContainer) {
            var attrsWithSwatches = ['color'];
            attrs.forEach(function(attr) {
                if (attrsWithSwatches.indexOf(attr.id) > -1) {
                    processSwatchValues(attr, $productContainer);
                } else {
                    processNonSwatchValues(attr, $productContainer);
                }
            });
        }
        function updateAvailability(response, $productContainer) {
            var availabilityValue = '';
            var availabilityMessages = response.product.availability.messages;
            if (!response.product.readyToOrder || !response.product.sellable || !response.product.visibleInCountry) {
                availabilityValue = '<p>' + response.resources.info_selectforstock + '</p>';
            } else {
                availabilityMessages.forEach(function(message) {
                    if (message != 'OK') {
                        availabilityValue += '<p>' + message + '</p>';
                    }
                });
            }
            $($productContainer).trigger('product:updateAvailability', {
                product: response.product,
                $productContainer: $productContainer,
                message: availabilityValue,
                resources: response.resources
            });
        }
        function getPromotionsHtml(promotions) {
            if (!promotions) {
                return '';
            }
            var html = '';
            promotions.forEach(function(promotion) {
                html += '<div class="callout" title="' + promotion.details + '">' + promotion.calloutMsg + '</div>';
            });
            return html;
        }
        function getAttributesHtml(attributes) {
            if (!attributes) {
                return '';
            }
            var html = '';
            attributes.forEach(function(attributeGroup) {
                if (attributeGroup.ID === 'mainAttributes') {
                    attributeGroup.attributes.forEach(function(attribute) {
                        html += '<div class="attribute-values">' + attribute.label + ': ' + attribute.value + '</div>';
                    });
                }
            });
            return html;
        }
        function updateOptions(options, $productContainer) {
            options.forEach(function(option) {
                var $optionEl = $productContainer.find('.product-option[data-option-id*="' + option.id + '"]');
                option.values.forEach(function(value) {
                    var valueEl = $optionEl.find('option[data-value-id*="' + value.id + '"]');
                    valueEl.val(value.url);
                });
            });
        }
        function createThumb(image) {
            return '<li class="c-item">' + '                    <button class="c-btn" aria-current="true">' + '                        <img src="' + image.url + '" alt="' + image.alt + '"  width="80" height="80" class="img-rwd thumb-img" sizes="100vw" title="' + image.title + '">' + '                    </button>' + '                </li>';
        }
        function createSlide(image) {
            return '<picture aria-hidden="true">' + '        <source media="(min-width: 769px)" srcset="' + image.url + '" sizes="100vw" />' + '        <img src="' + image.url + '" class="img-rwd c-item large-img" alt="' + image.alt + '" title="' + image.title + '" />' + '   </picture>';
        }
        function initSlickCarousel() {
            if ($('.product-detail.container').length) {
                var pdpPage = $('.product-media__slider')
                  , leftArrow = $('.slider__btn--prev')
                  , rightArrow = $('.slider__btn--next')
                  , topArrow = $('.product-thumb .slider__btn--prev')
                  , bottomArrow = $('.product-thumb .slider__btn--next')
                  , pdpLeftArrow = pdpPage.find(leftArrow)
                  , pdpRightArrow = pdpPage.find(rightArrow)
                  , pdpTopArrow = pdpPage.find(topArrow)
                  , pdpBottomArrow = pdpPage.find(bottomArrow);
                $('.product-media__inner__carousel').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: pdpLeftArrow,
                    nextArrow: pdpRightArrow,
                    arrows: false,
                    fade: true,
                    accessibility: true,
                    dots: true,
                    infinite: false,
                    asNavFor: ".product-thumb__nav",
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            arrows: true
                        }
                    }]
                });
                var $thumbNav = $('.product-thumb__nav li');
                if ($thumbNav.length > 1) {
                    $('.product-thumb__nav').slick({
                        slidesToShow: 3,
                        accessibility: false,
                        slidesToScroll: 1,
                        dots: false,
                        centerMode: false,
                        vertical: true,
                        verticalSwiping: true,
                        prevArrow: pdpTopArrow,
                        nextArrow: pdpBottomArrow,
                        infinite: false,
                        responsive: [{
                            breakpoint: 1024,
                            settings: "unslick"
                        }]
                    });
                } else {
                    $('.product-thumb__nav').hide();
                }
                $('.product-thumb__nav .slick-arrow').on('click', function() {
                    $('.product-thumb__nav .slick-slide').each(function() {
                        $(this).removeClass('slick-current');
                    });
                });
                $('.product-thumb__nav .slick-slide').on('click', function() {
                    $('.product-media__inner__carousel').slick('slickGoTo', $(this).data('slick-index'));
                    $('.product-thumb__nav .slick-slide').each(function() {
                        $(this).removeClass('slick-current').find('button').attr('aria-current', 'false');
                    });
                    $(this).addClass('slick-current').find('button').attr('aria-current', 'true');
                });
            }
            if ($('#editProductModal .product-media__inner__carousel .c-item').length > 1) {
                $('.product-media__inner__carousel').slick({
                    infinite: false,
                    speed: 250,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    prevArrow: $('.product-media__inner').find('.slider__btn--prev'),
                    nextArrow: $('.product-media__inner').find('.slider__btn--next')
                });
                $('.slider__arrows').show()
                if (!$('.slider__arrows svg').length) {
                    var srcArrowLeft = $('.product-edit a.edit').data('arrow-left');
                    var srcArrowRight = $('.product-edit a.edit').data('arrow-right');
                    $('#editProductModal .slider__arrows button.slider__btn--prev').append('<svg class="symbol" aria-hidden="true"> ' + '<use xlink:href="' + srcArrowLeft + '"> ' + '</use>' + '</svg>');
                    $('#editProductModal .slider__arrows button.slider__btn--next').append('<svg class="symbol" aria-hidden="true"> ' + '<use xlink:href="' + srcArrowRight + '"> ' + '</use>' + '</svg>');
                }
            }
        }
        function handleVariantResponse(response, $productContainer) {
            var isChoiceOfBonusProducts = $productContainer.parents('.choose-bonus-product-dialog').length > 0;
            var isVaraint;
            if (response.product.variationAttributes) {
                updateAttrs(response.product.variationAttributes, $productContainer);
                isVaraint = response.product.productType === 'variant';
                if (isChoiceOfBonusProducts && isVaraint) {
                    $productContainer.parent('.bonus-product-item').data('pid', response.product.id);
                    $productContainer.parent('.bonus-product-item').data('ready-to-order', response.product.readyToOrder);
                }
            }
            var notEnabled = (!response.product.readyToOrder || !response.product.available || !response.product.sellable || !response.product.visibleInCountry || ((response.product.availability.hasOwnProperty('error')) ? response.product.availability.error : false));
            if (!notEnabled) {
                $('.update-cart-product-global').removeClass('hidden');
            } else {
                $('.update-cart-product-global').addClass('hidden');
            }
            var primaryImageUrls = response.product.images;
            if ($('.product-media__inner__carousel.slick-initialized').length > 0) {
                $('.product-media__inner__carousel').slick('unslick');
            }
            if ($('.product-thumb__nav.slick-initialized').length > 0) {
                $('.product-thumb__nav').slick('unslick');
            }
            $productContainer.find('.product-thumb__nav').empty();
            $productContainer.find('.product-media__inner__carousel').empty();
            primaryImageUrls.large.forEach(function(imageUrl, idx, arr) {
                $productContainer.find('.primary-images').find('.product-thumb__nav').append(createThumb(imageUrl));
                $productContainer.find('.primary-images .product-media__inner__carousel').append(createSlide(imageUrl));
                if (arr.length - 1 === idx && primaryImageUrls.large.length > 1) {
                    if ($('.product-detail.container').length) {
                        $('.product-thumb').removeClass('hidden');
                    }
                    $('.slider__arrows').removeClass('hidden');
                    initSlickCarousel();
                } else {
                    if ($('.product-detail.container').length) {
                        $('.product-thumb').addClass('hidden');
                    }
                    $('.slider__arrows').addClass('hidden');
                }
            });
            if (!isChoiceOfBonusProducts) {
                var $priceSelector = $('.prices .price', $productContainer).length ? $('.prices .price', $productContainer) : $('.prices .price');
                $priceSelector.replaceWith(response.product.price.html);
                if ($("header.quickview-detail h1.product-name").length) {
                    $("header.quickview-detail h1.product-name").html(response.product.productName);
                }
                if ($("p.quickview-reference").length) {
                    var refLabel = $("p.quickview-reference").data('reference-label');
                    $("p.quickview-reference").html(refLabel + ' : ' + response.product.id);
                }
            }
            $('.promotions').empty().html(getPromotionsHtml(response.product.promotions));
            var $salesLabel = $('.sales-label', $productContainer);
            (response.product.price.list !== null) ? $salesLabel.removeClass('hidden') : $salesLabel.addClass('hidden');
            updateAvailability(response, $productContainer);
            if (isChoiceOfBonusProducts) {
                var $selectButton = $productContainer.find('.select-bonus-product');
                $selectButton.trigger('bonusproduct:updateSelectButton', {
                    product: response.product,
                    $productContainer: $productContainer
                });
            } else {
                $('button.add-to-cart, button.add-to-cart-global, button.update-cart-product-global').trigger('product:updateAddToCart', {
                    product: response.product,
                    $productContainer: $productContainer
                }).trigger('product:statusUpdate', response.product);
            }
            $productContainer.find('.main-attributes').empty().html(getAttributesHtml(response.product.attributes));
            $productContainer.find('.product-details-info').empty().html(response.product.detailsInfoHtml);
        }
        function updateQuantities(quantities, $productContainer) {
            if (!($productContainer.parent('.bonus-product-item').length > 0)) {
                var optionsHtml = quantities.map(function(quantity) {
                    var selected = quantity.selected ? ' selected ' : '';
                    return '<option value="' + quantity.value + '"  data-url="' + quantity.url + '"' + selected + '>' + quantity.value + '</option>';
                }).join('');
                getQuantitySelector($productContainer).empty().html(optionsHtml);
            }
        }
        function attributeSelect(selectedValueUrl, $productContainerPDP) {
            if (selectedValueUrl) {
                $('body').trigger('product:beforeAttributeSelect', {
                    url: selectedValueUrl,
                    container: $productContainerPDP
                });
                $.ajax({
                    url: selectedValueUrl,
                    method: 'GET',
                    success: function(data) {
                        handleVariantResponse(data, $productContainerPDP);
                        updateOptions(data.product.options, $productContainerPDP);
                        updateQuantities(data.product.quantities, $productContainerPDP);
                        $('body').trigger('product:afterAttributeSelect', {
                            data: data,
                            container: $productContainerPDP
                        });
                        $.spinner().stop();
                    },
                    error: function() {
                        $.spinner().stop();
                    }
                });
            }
        }
        function attributeSelectEditPopup(selectedValueUrl, $productContainerEditPopup) {
            if (selectedValueUrl) {
                $('body').trigger('product:beforeAttributeSelect', {
                    url: selectedValueUrl,
                    container: $productContainerEditPopup
                });
                $.spinner().start();
                $.ajax({
                    url: selectedValueUrl,
                    method: 'GET',
                    success: function(data) {
                        setTimeout(function() {
                            handleVariantResponse(data, $productContainerEditPopup);
                            updateOptions(data.product.options, $productContainerEditPopup);
                            updateQuantities(data.product.quantities, $productContainerEditPopup);
                            $('body').trigger('product:afterAttributeSelect', {
                                data: data,
                                container: $productContainerEditPopup
                            });
                        }, 10);
                        $.spinner().stop();
                    },
                    error: function() {
                        $.spinner().stop();
                    }
                });
            }
        }
        function getAddToCartUrl() {
            return $('.add-to-cart-url').val();
        }
        function parseHtml(html) {
            var $html = $('<div>').append($.parseHTML(html));
            var body = $html.find('.choice-of-bonus-product');
            var footer = $html.find('.modal-footer').children();
            return {
                body: body,
                footer: footer
            };
        }
        function chooseBonusProducts(data) {
            $('.modal-body').spinner().start();
            if ($('#chooseBonusProductModal').length !== 0) {
                $('#chooseBonusProductModal').remove();
            }
            var bonusUrl;
            if (data.bonusChoiceRuleBased) {
                bonusUrl = data.showProductsUrlRuleBased;
            } else {
                bonusUrl = data.showProductsUrlListBased;
            }
            var htmlString = '<!-- Modal -->' + '<div class="modal fade" id="chooseBonusProductModal" role="dialog">' + '<div class="modal-dialog choose-bonus-product-dialog" ' + 'data-total-qty="' + data.maxBonusItems + '"' + 'data-UUID="' + data.uuid + '"' + 'data-pliUUID="' + data.pliUUID + '"' + 'data-addToCartUrl="' + data.addToCartUrl + '"' + 'data-pageStart="0"' + 'data-pageSize="' + data.pageSize + '"' + 'data-moreURL="' + data.showProductsUrlRuleBased + '"' + 'data-bonusChoiceRuleBased="' + data.bonusChoiceRuleBased + '">' + '<!-- Modal content-->' + '<div class="modal-content">' + '<div class="modal-header">' + '    <span class="">' + data.labels.selectprods + '</span>' + '    <button type="button" class="close pull-right" data-dismiss="modal">&times;</button>' + '</div>' + '<div class="modal-body"></div>' + '<div class="modal-footer"></div>' + '</div>' + '</div>' + '</div>';
            $('body').append(htmlString);
            $('.modal-body').spinner().start();
            $.ajax({
                url: bonusUrl,
                method: 'GET',
                dataType: 'html',
                success: function(html) {
                    var parsedHtml = parseHtml(html);
                    $('#chooseBonusProductModal .modal-body').empty();
                    $('#chooseBonusProductModal .modal-body').html(parsedHtml.body);
                    $('#chooseBonusProductModal .modal-footer').html(parsedHtml.footer);
                    $('#chooseBonusProductModal').modal('show');
                    $.spinner().stop();
                },
                error: function() {
                    $.spinner().stop();
                }
            });
        }
        function handlePostCartAdd(response) {
            $('.minicart').trigger('count:update', response);
            var messageType = response.error ? 'danger' : 'success';
            if (response.newBonusDiscountLineItem && Object.keys(response.newBonusDiscountLineItem).length !== 0) {
                chooseBonusProducts(response.newBonusDiscountLineItem);
            } else {
                var url = $('.minicart').data('action-url');
                var count = parseInt($('.minicart .minicart-quantity').text(), 10);
                var $minicart = $('.minicart');
                if (count !== 0 && $('.minicart .popover.show').length === 0) {
                    $minicart.children('.popover').addClass('show');
                    $minicart.children('.link').attr('aria-expanded', 'true');
                    $('.minicart .popover').spinner().start();
                    $.get(url, function(data) {
                        $('.minicart .popover').empty();
                        $('.minicart .popover').append(data);
                        $('.minicart .product-summary').prepend('<p class="alert-message alert-message__' + messageType + ' " role="alert">' + response.message + '</p>');
                        $.spinner().stop();
                        var popdelay;
                        popdelay = setTimeout(function() {
                            $('.minicart .popover').empty().removeClass('show');
                            $('.minicart').children('.link').attr('aria-expanded', 'false');
                        }, 3000);
                        $('.minicart').attr('data-timer-id', popdelay);
                    });
                }
                ;
            }
        }
        function getChildProducts() {
            var childProducts = [];
            $('.bundle-item').each(function() {
                childProducts.push({
                    pid: $(this).find('.product-id').text(),
                    quantity: parseInt($(this).find('label.quantity').data('quantity'), 10)
                });
            });
            return childProducts.length ? JSON.stringify(childProducts) : [];
        }
        function getOptions($productContainer) {
            var options = $productContainer.find('.product-option').map(function() {
                var $elOption = $(this).find('.options-select');
                var urlValue = $elOption.val();
                var selectedValueId = $elOption.find('option[value="' + urlValue + '"]').data('value-id');
                return {
                    optionId: $(this).data('option-id'),
                    selectedValueId: selectedValueId
                };
            }).toArray();
            return JSON.stringify(options);
        }
        module.exports = {
            attributeSelect: attributeSelect,
            methods: {
                editBonusProducts: function(data) {
                    chooseBonusProducts(data);
                }
            },
            colorAttribute: function() {
                $(document).on('click', '[data-attr="color"] a', function(e) {
                    e.preventDefault();
                    if ($(this).attr('disabled')) {
                        return;
                    }
                    $('.color-title').find('.color-value').text($(this).attr('title'));
                    var $productContainerPDP = $(this).closest('.set-item');
                    if (!$productContainerPDP.length) {
                        $productContainerPDP = $(this).closest('.product-detail.container');
                    }
                    attributeSelect(e.currentTarget.href, $productContainerPDP);
                    var $productContainerEditPopup = $(this).closest('.set-item');
                    if (!$productContainerEditPopup.length) {
                        $('[data-attr="color"] a').attr('aria-current', false);
                        $(this).attr('aria-current', true);
                        setTimeout(()=>{
                            $('#editProductModal .product-name').focus();
                        }
                        , 10);
                        $productContainerEditPopup = $(this).closest('.product-detail.edit-product-modal');
                    }
                    attributeSelectEditPopup(e.currentTarget.href, $productContainerEditPopup);
                });
                $(window).on('keydown', function(e) {
                    if (e.keyCode == '32' && $('#editProductModal').length && $('[data-attr="color"] a').is(":focus")) {
                        $('[data-attr="color"] a:focus').trigger("click");
                    }
                })
            },
            selectAttribute: function() {
                $(document).on('change', 'select[class*="select-"], .options-select', function(e) {
                    e.preventDefault();
                    var $productContainer = $(this).closest('.set-item');
                    if (!$productContainer.length) {
                        $productContainer = $(this).closest('.product-detail');
                    }
                    attributeSelect(e.currentTarget.value, $productContainer);
                });
            },
            availability: function() {
                $(document).on('change', '.quantity-select', function(e) {
                    e.preventDefault();
                    var $productContainer = $(this).closest('.product-detail');
                    if (!$productContainer.length) {
                        $productContainer = $(this).closest('.modal-content').find('.product-quickview');
                    }
                    if ($('.bundle-items', $productContainer).length === 0) {
                        attributeSelect($(e.currentTarget).find('option:selected').data('url'), $productContainer);
                    }
                });
            },
            addToCart: function() {
                $(document).on('click', 'button.add-to-cart, button.add-to-cart-global', function() {
                    var addToCartUrl;
                    var pid;
                    var pidsObj;
                    var setPids;
                    $('body').trigger('product:beforeAddToCart', this);
                    if ($('.set-items').length && $(this).hasClass('add-to-cart-global')) {
                        setPids = [];
                        $('.product-detail').each(function() {
                            if (!$(this).hasClass('product-set-detail')) {
                                setPids.push({
                                    pid: $(this).find('.product-id').text(),
                                    qty: $(this).find('.quantity-select').val(),
                                    options: getOptions($(this))
                                });
                            }
                        });
                        pidsObj = JSON.stringify(setPids);
                    }
                    pid = getPidValue($(this));
                    var $productContainer = $(this).closest('.product-detail');
                    if (!$productContainer.length) {
                        $productContainer = $(this).closest('.quick-view-dialog').find('.product-detail');
                    }
                    addToCartUrl = getAddToCartUrl();
                    var form = {
                        pid: pid,
                        pidsObj: pidsObj,
                        childProducts: getChildProducts(),
                        quantity: getQuantitySelected($(this))
                    };
                    if (!$('.bundle-item').length) {
                        form.options = getOptions($productContainer);
                    }
                    $(this).trigger('updateAddToCartFormData', form);
                    if (addToCartUrl) {
                        $.ajax({
                            url: addToCartUrl,
                            method: 'POST',
                            data: form,
                            success: function(data) {
                                handlePostCartAdd(data);
                                $('body').trigger('product:afterAddToCart', data);
                                $.spinner().stop();
                            },
                            error: function() {
                                $.spinner().stop();
                            }
                        });
                    }
                });
            },
            selectBonusProduct: function() {
                $(document).on('click', '.select-bonus-product', function() {
                    var $choiceOfBonusProduct = $(this).parents('.choice-of-bonus-product');
                    var pid = $(this).data('pid');
                    var maxPids = $('.choose-bonus-product-dialog').data('total-qty');
                    var submittedQty = parseInt($(this).parents('.choice-of-bonus-product').find('.bonus-quantity-select').val(), 10);
                    var totalQty = 0;
                    $.each($('#chooseBonusProductModal .selected-bonus-products .selected-pid'), function() {
                        totalQty += $(this).data('qty');
                    });
                    totalQty += submittedQty;
                    var optionID = $(this).parents('.choice-of-bonus-product').find('.product-option').data('option-id');
                    var valueId = $(this).parents('.choice-of-bonus-product').find('.options-select option:selected').data('valueId');
                    if (totalQty <= maxPids) {
                        var selectedBonusProductHtml = '' + '<div class="selected-pid row" ' + 'data-pid="' + pid + '"' + 'data-qty="' + submittedQty + '"' + 'data-optionID="' + (optionID || '') + '"' + 'data-option-selected-value="' + (valueId || '') + '"' + '>' + '<div class="col-sm-11 col-9 bonus-product-name" >' + $choiceOfBonusProduct.find('.product-name').html() + '</div>' + '<div class="col-1"><i class="fa fa-times" aria-hidden="true"></i></div>' + '</div>';
                        $('#chooseBonusProductModal .selected-bonus-products').append(selectedBonusProductHtml);
                        $('.pre-cart-products').html(totalQty);
                        $('.selected-bonus-products .bonus-summary').removeClass('alert-danger');
                    } else {
                        $('.selected-bonus-products .bonus-summary').addClass('alert-danger');
                    }
                });
            },
            removeBonusProduct: function() {
                $(document).on('click', '.selected-pid', function() {
                    $(this).remove();
                    var $selected = $('#chooseBonusProductModal .selected-bonus-products .selected-pid');
                    var count = 0;
                    if ($selected.length) {
                        $selected.each(function() {
                            count += parseInt($(this).data('qty'), 10);
                        });
                    }
                    $('.pre-cart-products').html(count);
                    $('.selected-bonus-products .bonus-summary').removeClass('alert-danger');
                });
            },
            enableBonusProductSelection: function() {
                $('body').on('bonusproduct:updateSelectButton', function(e, response) {
                    $('button.select-bonus-product', response.$productContainer).attr('disabled', (!response.product.readyToOrder || !response.product.available || !response.product.sellable || !response.product.visibleInCountry));
                    var pid = response.product.id;
                    $('button.select-bonus-product').data('pid', pid);
                });
            },
            showMoreBonusProducts: function() {
                $(document).on('click', '.show-more-bonus-products', function() {
                    var url = $(this).data('url');
                    $('.modal-content').spinner().start();
                    $.ajax({
                        url: url,
                        method: 'GET',
                        success: function(html) {
                            var parsedHtml = parseHtml(html);
                            $('.modal-body').append(parsedHtml.body);
                            $('.show-more-bonus-products:first').remove();
                            $('.modal-content').spinner().stop();
                        },
                        error: function() {
                            $('.modal-content').spinner().stop();
                        }
                    });
                });
            },
            addBonusProductsToCart: function() {
                $(document).on('click', '.add-bonus-products', function() {
                    var $readyToOrderBonusProducts = $('.choose-bonus-product-dialog .selected-pid');
                    var queryString = '?pids=';
                    var url = $('.choose-bonus-product-dialog').data('addtocarturl');
                    var pidsObject = {
                        bonusProducts: []
                    };
                    $.each($readyToOrderBonusProducts, function() {
                        var qtyOption = parseInt($(this).data('qty'), 10);
                        var option = null;
                        if (qtyOption > 0) {
                            if ($(this).data('optionid') && $(this).data('option-selected-value')) {
                                option = {};
                                option.optionId = $(this).data('optionid');
                                option.productId = $(this).data('pid');
                                option.selectedValueId = $(this).data('option-selected-value');
                            }
                            pidsObject.bonusProducts.push({
                                pid: $(this).data('pid'),
                                qty: qtyOption,
                                options: [option]
                            });
                            pidsObject.totalQty = parseInt($('.pre-cart-products').html(), 10);
                        }
                    });
                    queryString += JSON.stringify(pidsObject);
                    queryString = queryString + '&uuid=' + $('.choose-bonus-product-dialog').data('uuid');
                    queryString = queryString + '&pliuuid=' + $('.choose-bonus-product-dialog').data('pliuuid');
                    $.spinner().start();
                    $.ajax({
                        url: url + queryString,
                        method: 'POST',
                        success: function(data) {
                            $.spinner().stop();
                            if (data.error) {
                                $('.error-choice-of-bonus-products').html(data.errorMessage);
                            } else {
                                $('.configure-bonus-product-attributes').html(data);
                                $('.bonus-products-step2').removeClass('hidden-xl-down');
                                $('#chooseBonusProductModal').modal('hide');
                                if ($('.add-to-cart-messages').length === 0) {
                                    $('body').append('<div class="add-to-cart-messages"></div>');
                                }
                                $('.minicart-quantity').html(data.totalQty);
                                $('.add-to-cart-messages').append('<div class="alert alert-success add-to-basket-alert text-center"' + ' role="alert">' + data.msgSuccess + '</div>');
                                setTimeout(function() {
                                    $('.add-to-basket-alert').remove();
                                    if ($('.cart-page').length) {
                                        location.reload();
                                    }
                                }, 3000);
                            }
                        },
                        error: function() {
                            $.spinner().stop();
                        }
                    });
                });
            },
            getPidValue: getPidValue
        };
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = function() {
            var sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
            sizes.forEach(function(size) {
                var selector = '.collapsible-' + size + ' .title, .collapsible-' + size + '>.card-header';
                $('body').on('click', selector, function(e) {
                    e.preventDefault();
                    $(this).parents('.collapsible-' + size).toggleClass('active');
                });
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var debounce = __webpack_require__(22);
        var endpoint = $('.suggestions-wrapper').data('url');
        var minChars = 3;
        var helpers = __webpack_require__(3);
        if (helpers.isSmallScreen()) {
            $('.header-search-container').addClass('search-mobile');
        } else {
            $('.header-search-container').removeClass('search-mobile');
        }
        function getSuggestionsWrapper(scope) {
            return $(scope).siblings('.suggestions-wrapper');
        }
        function isMobileSearch(scope) {
            return !!$(scope).closest('.search-mobile').length;
        }
        function clearModals() {
            $('body').removeClass('modal-open');
            $('.suggestions').removeClass('modal');
        }
        function applyModals(scope) {
            if (isMobileSearch(scope)) {
                $('body').addClass('modal-open');
                getSuggestionsWrapper(scope).find('.suggestions').addClass('modal');
            }
        }
        function tearDownSuggestions() {
            $('input.search-field').val('');
            clearModals();
            $('.search-mobile .suggestions').unbind('scroll');
            $('.suggestions-wrapper').empty();
        }
        function toggleSuggestionsIcon(action) {
            var mobileSearchIcon = '.search-mobile span.';
            var iconSearch = 'fa-search';
            var iconSearchClose = 'fa-close';
            if (action === 'close') {
                $(mobileSearchIcon + iconSearch).removeClass(iconSearch).addClass(iconSearchClose);
            } else {
                $(mobileSearchIcon + iconSearchClose).removeClass(iconSearchClose).addClass(iconSearch);
            }
        }
        function handleMoreContentBelowIcon(scope) {
            if (($(scope).scrollTop() + $(scope).innerHeight()) >= $(scope)[0].scrollHeight) {
                $('.more-below').fadeOut();
            } else {
                $('.more-below').fadeIn();
            }
        }
        function positionSuggestions(scope) {
            var outerHeight;
            var $scope;
            var $suggestions;
            var top;
            if (isMobileSearch(scope)) {
                $scope = $(scope);
                top = $scope.offset().top;
                outerHeight = $scope.outerHeight();
                $suggestions = getSuggestionsWrapper(scope).find('.suggestions');
                $suggestions.css('top', top + outerHeight);
                handleMoreContentBelowIcon(scope);
                $suggestions.scroll(function() {
                    handleMoreContentBelowIcon(this);
                });
            }
        }
        function processResponse(response) {
            var $suggestionsWrapper = getSuggestionsWrapper(this).empty();
            $('.header_top_nav--search .dropdown-menu').spinner().stop();
            if (!(typeof (response) === 'object')) {
                $suggestionsWrapper.append(response).show();
                positionSuggestions(this);
                if (isMobileSearch(this)) {
                    toggleSuggestionsIcon('close');
                    applyModals(this);
                }
            } else {
                $suggestionsWrapper.hide();
            }
        }
        function getSuggestions(scope) {
            if ($(scope).val().length >= minChars) {
                $('.header_top_nav--search .dropdown-menu').spinner().start();
                $.ajax({
                    context: scope,
                    url: endpoint + encodeURIComponent($(scope).val()),
                    method: 'GET',
                    success: processResponse,
                    error: function() {
                        $('.header_top_nav--search .dropdown-menu').spinner().stop();
                    }
                });
            } else {
                toggleSuggestionsIcon('search');
                clearModals();
                getSuggestionsWrapper(scope).empty();
            }
        }
        module.exports = function() {
            $('input.search-field').each(function() {
                var debounceSuggestions = debounce(getSuggestions, 300);
                $(this).on('keyup click', function(e) {
                    debounceSuggestions(this, e);
                    var searchLabel = $('#edit-submit-lc-search').val();
                    if ($('#header-search-input').val() != '') {
                        $('#header-search-input').next('.form__label').text(searchLabel);
                    }
                });
            });
            $(document).on('click', '#edit-submit-lc-search', function() {
                var searchLabel = $('#edit-submit-lc-search').val();
                var emptyErrorMsg = $('#edit-submit-lc-search').data('error');
                if ($('#header-search-input').val() == '') {
                    $('#header-search-input').next('.form__label').text(emptyErrorMsg);
                    return false;
                } else {
                    $('#header-search-input').next('.form__label').text(searchLabel);
                }
            });
            $('body').on('click', function(e) {
                if (!$('.suggestions').has(e.target).length && !$(e.target).hasClass('search-field')) {
                    $('.suggestions').hide();
                }
            });
            $('body').on('click touchend', '.search-mobile span.fa-close', function() {
                $('.suggestions').hide();
                toggleSuggestionsIcon('search');
                tearDownSuggestions();
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(4)
      , now = __webpack_require__(23)
      , toNumber = __webpack_require__(26);
    var FUNC_ERROR_TEXT = 'Expected a function';
    var nativeMax = Math.max
      , nativeMin = Math.min;
    function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
            leading = !!options.leading;
            maxing = 'maxWait'in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = 'trailing'in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
            var args = lastArgs
              , thisArg = lastThis;
            lastArgs = lastThis = undefined;
            lastInvokeTime = time;
            result = func.apply(thisArg, args);
            return result;
        }
        function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime
              , timeSinceLastInvoke = time - lastInvokeTime
              , timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime
              , timeSinceLastInvoke = time - lastInvokeTime;
            return (lastCallTime === undefined || (timeSinceLastCall >= wait) || (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
        }
        function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
                return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
            timerId = undefined;
            if (trailing && lastArgs) {
                return invokeFunc(time);
            }
            lastArgs = lastThis = undefined;
            return result;
        }
        function cancel() {
            if (timerId !== undefined) {
                clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined;
        }
        function flush() {
            return timerId === undefined ? result : trailingEdge(now());
        }
        function debounced() {
            var time = now()
              , isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
                if (timerId === undefined) {
                    return leadingEdge(lastCallTime);
                }
                if (maxing) {
                    timerId = setTimeout(timerExpired, wait);
                    return invokeFunc(lastCallTime);
                }
            }
            if (timerId === undefined) {
                timerId = setTimeout(timerExpired, wait);
            }
            return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
    }
    module.exports = debounce;
}
), (function(module, exports, __webpack_require__) {
    var root = __webpack_require__(5);
    var now = function() {
        return root.Date.now();
    };
    module.exports = now;
}
), (function(module, exports, __webpack_require__) {
    (function(global) {
        var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
        module.exports = freeGlobal;
    }
    .call(this, __webpack_require__(25)))
}
), (function(module, exports) {
    var g;
    g = (function() {
        return this;
    }
    )();
    try {
        g = g || Function("return this")() || (1,
        eval)("this");
    } catch (e) {
        if (typeof window === "object")
            g = window;
    }
    module.exports = g;
}
), (function(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(4)
      , isSymbol = __webpack_require__(27);
    var NAN = 0 / 0;
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
        if (typeof value == 'number') {
            return value;
        }
        if (isSymbol(value)) {
            return NAN;
        }
        if (isObject(value)) {
            var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = isObject(other) ? (other + '') : other;
        }
        if (typeof value != 'string') {
            return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
        return (isBinary || reIsOctal.test(value)) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : (reIsBadHex.test(value) ? NAN : +value);
    }
    module.exports = toNumber;
}
), (function(module, exports, __webpack_require__) {
    var baseGetTag = __webpack_require__(28)
      , isObjectLike = __webpack_require__(31);
    var symbolTag = '[object Symbol]';
    function isSymbol(value) {
        return typeof value == 'symbol' || (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }
    module.exports = isSymbol;
}
), (function(module, exports, __webpack_require__) {
    var Symbol = __webpack_require__(6)
      , getRawTag = __webpack_require__(29)
      , objectToString = __webpack_require__(30);
    var nullTag = '[object Null]'
      , undefinedTag = '[object Undefined]';
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
    function baseGetTag(value) {
        if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
        }
        return (symToStringTag && symToStringTag in Object(value)) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
}
), (function(module, exports, __webpack_require__) {
    var Symbol = __webpack_require__(6);
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
    function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag)
          , tag = value[symToStringTag];
        try {
            value[symToStringTag] = undefined;
            var unmasked = true;
        } catch (e) {}
        var result = nativeObjectToString.call(value);
        if (unmasked) {
            if (isOwn) {
                value[symToStringTag] = tag;
            } else {
                delete value[symToStringTag];
            }
        }
        return result;
    }
    module.exports = getRawTag;
}
), (function(module, exports) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
        return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
}
), (function(module, exports) {
    function isObjectLike(value) {
        return value != null && typeof value == 'object';
    }
    module.exports = isObjectLike;
}
), (function(module, exports) {
    var jQuery = window.$;
    (function($) {
        var Triggerify = function(options) {
            var me = this;
            me.settings = $.extend({
                offDelay: 500,
                position: null,
                showhide: false,
                hover: false,
                setTargetMaxHeightToAuto: false,
                setTargetHeightToAuto: false,
                toggleClass: 'open',
                targetAutoHeight: 0,
                ignoreClick: false,
                beforeUpdate: function() {}
            }, options);
            me.isDirRtl = $('html').attr('dir') === 'rtl' || $('html').hasClass('dir-rtl');
            me.doShowhide = me.settings.showhide;
            me.toggleClass = me.settings.toggleClass;
            me.targetAutoHeight = me.settings.targetAutoHeight;
            me.$target = $(me.settings.target);
            me.$trigger = $(me.settings.trigger);
            me.offDelay = me.settings.offDelay;
            me.isTriggerOver = false;
            me.isTargetOver = false;
            me.isTargetOn = null;
            me.isSuspended = false;
            me.offTimer = null;
        };
        Triggerify.prototype = {
            init: function() {
                var me = this;
                if (!me.settings.ignoreClick) {
                    me.$trigger.click($.proxy(me.onTriggerClick, me));
                }
                if (me.settings.hover) {
                    if (!me.settings.ignoreClick) {
                        me.$target.click($.proxy(me.onTargetClick, me));
                    }
                    me.$trigger.hover($.proxy(me.onTriggerHover, me));
                    me.$trigger.mouseenter($.proxy(me.onTriggerEnter, me));
                    me.$trigger.mouseleave($.proxy(me.onTriggerLeave, me));
                    me.$target.hover($.proxy(me.onTargetHover, me));
                    me.$target.mouseenter($.proxy(me.onTargetEnter, me));
                    me.$target.mouseleave($.proxy(me.onTargetLeave, me));
                }
                if (me.settings.setTargetMaxHeightToAuto || me.settings.setTargetHeightToAuto) {
                    me.targetAutoHeight = me.getTargetAutoHeight();
                    var timer;
                    $(window).resize(function() {
                        clearTimeout(timer);
                        timer = setTimeout(function() {
                            me.targetAutoHeight = me.getTargetAutoHeight();
                        }, 500);
                    });
                }
                me.updateState();
            },
            onTriggerClick: function(evt) {
                if (this.isSuspended)
                    return;
                if (evt.delegateTarget.tagName === 'A') {
                    evt.preventDefault();
                }
                evt.stopImmediatePropagation();
                this.activeTrigger = evt.delegateTarget;
                this.toggleTarget();
            },
            onTriggerHover: function(evt) {
                if (this.isSuspended)
                    return;
                if (this.settings.beforeUpdate() === false) {
                    return false;
                }
                this.activeTrigger = evt.delegateTarget;
                this.isTriggerOver = true;
                this.updateState();
            },
            onTriggerEnter: function(evt) {
                if (this.isSuspended)
                    return;
                if (this.settings.beforeUpdate() === false) {
                    return false;
                }
                this.activeTrigger = evt.delegateTarget;
                this.isTriggerOver = true;
                this.updateState();
            },
            onTriggerLeave: function() {
                if (this.isSuspended)
                    return;
                var me = this;
                me.isTriggerOver = false;
                clearTimeout(me.offTimer);
                me.offTimer = setTimeout(function() {
                    me.updateState();
                }, me.offDelay);
            },
            onTargetClick: function() {
                if (this.isSuspended)
                    return;
                this.toggleTarget();
            },
            onTargetHover: function() {
                if (this.isSuspended)
                    return;
                this.isTargetOver = true;
                this.updateState();
            },
            onTargetEnter: function() {
                if (this.isSuspended)
                    return;
                this.isTargetOver = true;
                this.updateState();
            },
            onTargetLeave: function() {
                if (this.isSuspended)
                    return;
                var me = this;
                me.isTargetOver = false;
                clearTimeout(me.offTimer);
                me.offTimer = setTimeout(function() {
                    me.updateState();
                }, me.offDelay);
            },
            suspend: function(suspend) {
                this.isSuspended = suspend === undefined || !!suspend;
                if (this.isSuspended) {
                    this.on(false);
                } else {
                    this.updateState();
                }
            },
            activate: function(activate) {
                this.suspend(activate === false || false);
            },
            isRadioTrigger: function() {
                return this.$trigger[0] && this.$trigger[0].tagName === 'INPUT' && this.$trigger[0].type === 'radio';
            },
            isCheckeableTrigger: function() {
                return this.$trigger[0] && this.$trigger[0].tagName === 'INPUT' && ['radio', 'checkbox'].indexOf(this.$trigger[0].type);
            },
            isCheckedTrigger: function() {
                return this.$trigger[0] && this.$trigger[0].checked;
            },
            getTargetAutoHeight: function() {
                var me = this
                  , autoHeight = 0
                  , transition = me.$target[0].style.transition
                  , height = me.$target[0].style.height
                  , maxHeight = me.$target[0].style.maxHeight;
                me.$target.addClass('no-transition');
                me.$target[0].style.transition = 'all 0 ease 0';
                me.$target[0].style.height = 'auto';
                me.$target[0].style.maxHeight = 'none';
                me.$target[0].offsetHeight;
                autoHeight = me.$target.outerHeight();
                me.$target[0].style.transition = transition;
                me.$target[0].style.height = height;
                me.$target[0].style.maxHeight = maxHeight;
                me.$target.removeClass('no-transition');
                return autoHeight;
            },
            isOn: function() {
                return this.$target.hasClass(this.toggleClass);
            },
            updateState: function() {
                if (this.isCheckeableTrigger()) {
                    this.on(this.isCheckedTrigger());
                } else {
                    this.on(this.isTriggerOver || this.isTargetOver);
                }
            },
            toggleTarget: function() {
                if (this.isCheckeableTrigger()) {
                    this.on(this.isCheckedTrigger());
                } else {
                    this.on(!this.isOn());
                }
            },
            on: function(on) {
                var me = this;
                if (on === false) {
                    me.off();
                    return;
                }
                if (me.activeTrigger) {
                    var text = $(me.activeTrigger).data('targettext');
                    if (text) {
                        me.$target.html('<span class="inner">' + text + '</span>');
                    }
                }
                if (me.doShowhide) {
                    me.$target.show();
                }
                if (me.settings.position) {
                    me.doLayout();
                }
                if (me.settings.setTargetMaxHeightToAuto) {
                    me.$target.css('max-height', me.targetAutoHeight + 'px');
                }
                if (me.settings.setTargetHeightToAuto) {
                    me.$target.css('height', me.targetAutoHeight + 'px');
                }
                me.$trigger.addClass(me.toggleClass);
                me.$target.addClass(me.toggleClass);
                if (me.$trigger[0] && me.$trigger[0].tagName === 'INPUT') {
                    me.$trigger.prop('checked', 'checked');
                }
                me.$target.trigger('triggeron');
            },
            off: function() {
                var me = this;
                if (me.doShowhide) {
                    me.$target.hide();
                }
                if (me.settings.setTargetMaxHeightToAuto) {
                    me.$target.css('max-height', '0px');
                }
                if (me.settings.setTargetHeightToAuto) {
                    me.$target.css('height', '');
                }
                me.$trigger.removeClass(me.toggleClass);
                me.$target.removeClass(me.toggleClass);
                if (me.$trigger[0] && me.$trigger[0].tagName === 'INPUT') {
                    me.$trigger.prop('checked', false);
                }
                me.$target.trigger('triggeroff');
            },
            doLayout: function() {
                var me = this, pos = me.$trigger.position(), marginTop = parseInt(me.$trigger.css('marginTop')), height = me.$trigger.outerHeight(true), width = me.$trigger.outerWidth(true), x, y;
                switch (this.settings.position) {
                case 'under':
                    y = pos.top + height;
                    x = pos.left;
                    me.$target.css({
                        left: x + 'px',
                        top: y + 'px'
                    });
                    break;
                case 'side':
                    y = pos.top + marginTop;
                    x = pos.left + width;
                    me.$target.css({
                        left: x + 'px',
                        top: y + 'px'
                    });
                    break;
                }
            }
        };
        $.fn.triggerify = function(options) {
            var $trigger;
            if (!options.trigger) {} else if (!options.trigger instanceof jQuery) {
                $trigger = $(options.trigger);
            } else {
                $trigger = options.trigger;
            }
            return this.each(function(index) {
                var elem = this, $elem = $(elem), trigger = $trigger[index], triggerify;
                if (!$elem.data('triggerify')) {
                    triggerify = new Triggerify($.extend({
                        target: $elem,
                        trigger: trigger
                    }, options));
                    $elem.data('triggerify', triggerify);
                    triggerify.init();
                }
            });
        }
        ;
    }(jQuery));
}
), (function(module, exports, __webpack_require__) {
    (function($) {
        var $window = $(window)
          , $body = $('body')
          , $mainHeader = $('header.main-header')
          , mainHeaderHeight = $mainHeader.outerHeight()
          , $iconMenu = $('#button-mobile').find('.icon-menu')
          , $countrySelection = $('.country-selection')
          , tabletWidth = 1024
          , borderWidthDesktop = 16
          , borderWidthMobile = 12
          , borderOffset = $window.width() >= tabletWidth ? borderWidthDesktop : borderWidthMobile
          , doSticky = true
          , $addToCart = $('#add-to-cart')
          , $addToCartShortcuts = $('header .add-to-cart')
          , isExplorer8 = $('html').hasClass('ua-explorer-8')
          , isTouch = $('html').hasClass('touchevents')
          , countrySelectionHeight = 0;
        $('.share-social-media-dropdown').triggerify({
            trigger: $('.share-social-media .trigger'),
            hover: true,
            position: 'under'
        });
        $body.triggerify({
            trigger: $('#button-mobile'),
            toggleClass: 'menu-open',
            offDelay: 0
        });
        $(window).resize(function() {
            $body.data('triggerify').off();
        });
        if ($countrySelection.length > 0) {
            $countrySelection.triggerify({
                trigger: $('#country-dropdown-button-open, #country-dropdown-button-close, .trigger-countryselector, .country-select'),
                toggleClass: 'open',
                offDelay: 0
            }).on('triggeron', function() {
                $body.data('triggerify').off();
            });
            if ($(window).width() < 1024) {
                var $sectionLeft = $countrySelection.find('.selector-left ul');
                $sectionLeft.eq(0).append($sectionLeft.eq(1).contents());
            }
        }
        if ($('header.sub-header-checkout').length > 0) {
            doSticky = false;
        }
        var listHeader = $('.c-list-header');
        if (listHeader.length > 0) {
            if ($(window).width() < 1024) {
                listHeader.removeClass('active');
                $('.country-list-close').on('click', function(e) {
                    e.stopPropagation();
                    listHeader.removeClass('active');
                });
            }
            listHeader.on('click', function(e) {
                e.stopPropagation();
                listHeader.removeClass('active');
                $(this).toggleClass('active');
                if ($(window).width() > 1024) {
                    var countrySelectionPopupHeight = $('.country-selection.open').height();
                    var countrySelectionFirstSectionHeight = 270;
                    $('.country-list.o-list').css('max-height', countrySelectionPopupHeight - countrySelectionFirstSectionHeight + 'px');
                }
            });
            if ($(window).width() > 1024) {
                $('.selector > li').eq(0).addClass('active');
            }
            if ($(window).width() < 1024) {
                listHeader.find('.country-button-close').on('click', function(event) {
                    event.stopPropagation();
                    listHeader.removeClass('active');
                });
            }
        }
        function checkCountryDropDown() {
            var $countryOpenBtnLabel = $('#country-dropdown-button-open').find('.label')
            var countryDropdownButtonContents = $countryOpenBtnLabel.text();
            if ($(window).width() < 1024) {
                countryDropdownButtonContents = countryDropdownButtonContents.replace(':', ':<br>');
                $countryOpenBtnLabel.html(countryDropdownButtonContents);
            } else {
                countryDropdownButtonContents = countryDropdownButtonContents.replace(':<br>', ':');
                $countryOpenBtnLabel.html(countryDropdownButtonContents);
            }
        }
        checkCountryDropDown();
        $window.scroll(function() {
            scrollY = $window.scrollTop();
            countrySelectionHeight = $countrySelection.hasClass('open') ? $countrySelection.height() : 0;
            if (doSticky) {
                if (scrollY > mainHeaderHeight - borderOffset + countrySelectionHeight) {
                    $body.addClass('sticky');
                } else {
                    $body.removeClass('sticky');
                }
            }
            if ($addToCartShortcuts.length && $addToCart.length) {
                if (scrollY > $addToCart.offset().top) {
                    $body.addClass('show-add-to-cart');
                } else {
                    $body.removeClass('show-add-to-cart');
                }
            }
        });
        if ($addToCartShortcuts.length && $addToCart.length) {
            $addToCartShortcuts.click(function(evt) {
                evt.preventDefault();
                $addToCart[0].click();
            });
        }
        $window.resize(function() {
            mainHeaderHeight = $mainHeader.outerHeight();
            borderOffset = $window.width() >= tabletWidth ? borderWidthDesktop : borderWidthMobile;
            checkCountryDropDown();
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        exports.init = function init() {
            $('.c-option-list--selected').on('click', function() {
                $('.c-option-list').toggleClass('hidden');
            });
            $('.country-selector .current-country').on('click', function() {
                $('.country-selector .selector').toggleClass('active');
                $(this).toggleClass('selector-active');
            });
            $('.country-selector .selector .locale').on('click', function(e) {
                e.preventDefault();
                var url = this.href;
                var currency = this.getAttribute('data-currency');
                $.ajax({
                    dataType: 'json',
                    url: Urls.setSessionCurrency,
                    data: {
                        format: 'ajax',
                        currencyMnemonic: currency
                    }
                }).done(function(response) {
                    if (!response.success) {
                        throw new Error('Unable to set currency');
                    }
                    window.location.href = url;
                });
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var processInclude = __webpack_require__(1);
        $(document).ready(function() {
            processInclude(__webpack_require__(36));
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        $(document).ready(function() {
            $('#footerlanguage').change(function() {
                window.location = $(this).val();
            });
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        __webpack_require__(38);
        $(".newsletter-subscribe--submit").on('click', function(e) {
            e.preventDefault();
            var form = $(this).closest('.newsletter-subscribe--form');
            var email = form.find('.newsletter-subscribe--email').val();
            var emailValidator = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;
            var message = "";
            var validationMessage = $(this).attr('data-messageValidation');
            if (!email || email.length === 0) {
                message = $(this).attr('data-messageRequired');
            } else if (!email.match(emailValidator)) {
                message = $(this).attr('data-messageRegex');
            } else {
                var validEmailUrl = $(this).attr('data-validEmailUrl');
                $.ajax({
                    url: validEmailUrl,
                    data: {
                        email: email
                    },
                    method: 'POST',
                    dataType: 'json',
                    success: function(response) {
                        if (response.success) {
                            form.empty().html(validationMessage);
                        } else {
                            message = $(this).attr('data-messageProblem');
                        }
                    }
                });
            }
            form.find(".newsletter-subscribe--error").empty().html(message);
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    !function(t, e) {
        if (true)
            module.exports = e();
        else {
            var r, n;
        }
    }(this, function() {
        return function(t) {
            function e(r) {
                if (n[r])
                    return n[r].exports;
                var o = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return t[r].call(o.exports, o, o.exports, e),
                o.loaded = !0,
                o.exports
            }
            var n = {};
            return e.m = t,
            e.c = n,
            e.p = "",
            e(0)
        }([function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            n(100);
            var o = n(48)
              , i = r(o)
              , a = function() {
                i.default.addPickerToOtherInputs(),
                i.default.supportsDateInput() || i.default.addPickerToDateInputs()
            };
            a(),
            document.addEventListener("DOMContentLoaded", function() {
                a()
            }),
            document.querySelector("body").addEventListener("mousedown", function() {
                a()
            })
        }
        , function(t, e, n) {
            var r = n(25)("wks")
              , o = n(15)
              , i = n(4).Symbol
              , a = "function" == typeof i
              , u = t.exports = function(t) {
                return r[t] || (r[t] = a && i[t] || (a ? i : o)("Symbol." + t))
            }
            ;
            u.store = r
        }
        , function(t, e) {
            var n = t.exports = {
                version: "2.5.3"
            };
            "number" == typeof __e && (__e = n)
        }
        , function(t, e, n) {
            t.exports = !n(14)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        , function(t, e) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        }
        , function(t, e, n) {
            var r = n(7)
              , o = n(36)
              , i = n(27)
              , a = Object.defineProperty;
            e.f = n(3) ? Object.defineProperty : function(t, e, n) {
                if (r(t),
                e = i(e, !0),
                r(n),
                o)
                    try {
                        return a(t, e, n)
                    } catch (t) {}
                if ("get"in n || "set"in n)
                    throw TypeError("Accessors not supported!");
                return "value"in n && (t[e] = n.value),
                t
            }
        }
        , function(t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return n.call(t, e)
            }
        }
        , function(t, e, n) {
            var r = n(12);
            t.exports = function(t) {
                if (!r(t))
                    throw TypeError(t + " is not an object!");
                return t
            }
        }
        , function(t, e, n) {
            var r = n(5)
              , o = n(13);
            t.exports = n(3) ? function(t, e, n) {
                return r.f(t, e, o(1, n))
            }
            : function(t, e, n) {
                return t[e] = n,
                t
            }
        }
        , function(t, e) {
            t.exports = {}
        }
        , function(t, e, n) {
            var r = n(74)
              , o = n(18);
            t.exports = function(t) {
                return r(o(t))
            }
        }
        , function(t, e, n) {
            var r = n(4)
              , o = n(2)
              , i = n(34)
              , a = n(8)
              , u = "prototype"
              , s = function(t, e, n) {
                var c, l, f, d = t & s.F, p = t & s.G, h = t & s.S, y = t & s.P, m = t & s.B, v = t & s.W, g = p ? o : o[e] || (o[e] = {}), b = g[u], x = p ? r : h ? r[e] : (r[e] || {})[u];
                p && (n = e);
                for (c in n)
                    l = !d && x && void 0 !== x[c],
                    l && c in g || (f = l ? x[c] : n[c],
                    g[c] = p && "function" != typeof x[c] ? n[c] : m && l ? i(f, r) : v && x[c] == f ? function(t) {
                        var e = function(e, n, r) {
                            if (this instanceof t) {
                                switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e,n)
                                }
                                return new t(e,n,r)
                            }
                            return t.apply(this, arguments)
                        };
                        return e[u] = t[u],
                        e
                    }(f) : y && "function" == typeof f ? i(Function.call, f) : f,
                    y && ((g.virtual || (g.virtual = {}))[c] = f,
                    t & s.R && b && !b[c] && a(b, c, f)))
            };
            s.F = 1,
            s.G = 2,
            s.S = 4,
            s.P = 8,
            s.B = 16,
            s.W = 32,
            s.U = 64,
            s.R = 128,
            t.exports = s
        }
        , function(t, e) {
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        }
        , function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }
        , function(t, e) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }
        , function(t, e) {
            var n = 0
              , r = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
            }
        }
        , function(t, e, n) {
            "use strict";
            var r = n(85)(!0);
            n(37)(String, "String", function(t) {
                this._t = String(t),
                this._i = 0
            }, function() {
                var t, e = this._t, n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = r(e, n),
                this._i += t.length,
                {
                    value: t,
                    done: !1
                })
            })
        }
        , function(t, e) {
            var n = {}.toString;
            t.exports = function(t) {
                return n.call(t).slice(8, -1)
            }
        }
        , function(t, e) {
            t.exports = function(t) {
                if (void 0 == t)
                    throw TypeError("Can't call method on  " + t);
                return t
            }
        }
        , function(t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        }
        , function(t, e) {
            t.exports = !0
        }
        , function(t, e, n) {
            var r = n(42)
              , o = n(19);
            t.exports = Object.keys || function(t) {
                return r(t, o)
            }
        }
        , function(t, e) {
            e.f = {}.propertyIsEnumerable
        }
        , function(t, e, n) {
            var r = n(5).f
              , o = n(6)
              , i = n(1)("toStringTag");
            t.exports = function(t, e, n) {
                t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                    configurable: !0,
                    value: e
                })
            }
        }
        , function(t, e, n) {
            var r = n(25)("keys")
              , o = n(15);
            t.exports = function(t) {
                return r[t] || (r[t] = o(t))
            }
        }
        , function(t, e, n) {
            var r = n(4)
              , o = "__core-js_shared__"
              , i = r[o] || (r[o] = {});
            t.exports = function(t) {
                return i[t] || (i[t] = {})
            }
        }
        , function(t, e) {
            var n = Math.ceil
              , r = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
            }
        }
        , function(t, e, n) {
            var r = n(12);
            t.exports = function(t, e) {
                if (!r(t))
                    return t;
                var n, o;
                if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
                    return o;
                if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t)))
                    return o;
                if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t)))
                    return o;
                throw TypeError("Can't convert object to primitive value")
            }
        }
        , function(t, e, n) {
            var r = n(4)
              , o = n(2)
              , i = n(20)
              , a = n(29)
              , u = n(5).f;
            t.exports = function(t) {
                var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                "_" == t.charAt(0) || t in e || u(e, t, {
                    value: a.f(t)
                })
            }
        }
        , function(t, e, n) {
            e.f = n(1)
        }
        , function(t, e, n) {
            n(90);
            for (var r = n(4), o = n(8), i = n(9), a = n(1)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < u.length; s++) {
                var c = u[s]
                  , l = r[c]
                  , f = l && l.prototype;
                f && !f[a] && o(f, a, c),
                i[c] = i.Array
            }
        }
        , function(t, e) {
            "use strict";
            e.__esModule = !0,
            e.default = function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var o = n(55)
              , i = r(o);
            e.default = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        (0,
                        i.default)(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e
                }
            }()
        }
        , function(t, e, n) {
            var r = n(17)
              , o = n(1)("toStringTag")
              , i = "Arguments" == r(function() {
                return arguments
            }())
              , a = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            };
            t.exports = function(t) {
                var e, n, u;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = a(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
            }
        }
        , function(t, e, n) {
            var r = n(68);
            t.exports = function(t, e, n) {
                if (r(t),
                void 0 === e)
                    return t;
                switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    }
                    ;
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    }
                    ;
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }
        , function(t, e, n) {
            var r = n(12)
              , o = n(4).document
              , i = r(o) && r(o.createElement);
            t.exports = function(t) {
                return i ? o.createElement(t) : {}
            }
        }
        , function(t, e, n) {
            t.exports = !n(3) && !n(14)(function() {
                return 7 != Object.defineProperty(n(35)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        }
        , function(t, e, n) {
            "use strict";
            var r = n(20)
              , o = n(11)
              , i = n(43)
              , a = n(8)
              , u = n(6)
              , s = n(9)
              , c = n(78)
              , l = n(23)
              , f = n(84)
              , d = n(1)("iterator")
              , p = !([].keys && "next"in [].keys())
              , h = "@@iterator"
              , y = "keys"
              , m = "values"
              , v = function() {
                return this
            };
            t.exports = function(t, e, n, g, b, x, M) {
                c(n, e, g);
                var w, S, D, O = function(t) {
                    if (!p && t in k)
                        return k[t];
                    switch (t) {
                    case y:
                        return function() {
                            return new n(this,t)
                        }
                        ;
                    case m:
                        return function() {
                            return new n(this,t)
                        }
                    }
                    return function() {
                        return new n(this,t)
                    }
                }, T = e + " Iterator", A = b == m, _ = !1, k = t.prototype, E = k[d] || k[h] || b && k[b], L = !p && E || O(b), j = b ? A ? O("entries") : L : void 0, C = "Array" == e ? k.entries || E : E;
                if (C && (D = f(C.call(new t)),
                D !== Object.prototype && D.next && (l(D, T, !0),
                r || u(D, d) || a(D, d, v))),
                A && E && E.name !== m && (_ = !0,
                L = function() {
                    return E.call(this)
                }
                ),
                r && !M || !p && !_ && k[d] || a(k, d, L),
                s[e] = L,
                s[T] = v,
                b)
                    if (w = {
                        values: A ? L : O(m),
                        keys: x ? L : O(y),
                        entries: j
                    },
                    M)
                        for (S in w)
                            S in k || i(k, S, w[S]);
                    else
                        o(o.P + o.F * (p || _), e, w);
                return w
            }
        }
        , function(t, e, n) {
            var r = n(7)
              , o = n(39)
              , i = n(19)
              , a = n(24)("IE_PROTO")
              , u = function() {}
              , s = "prototype"
              , c = function() {
                var t, e = n(35)("iframe"), r = i.length, o = "<", a = ">";
                for (e.style.display = "none",
                n(73).appendChild(e),
                e.src = "javascript:",
                t = e.contentWindow.document,
                t.open(),
                t.write(o + "script" + a + "document.F=Object" + o + "/script" + a),
                t.close(),
                c = t.F; r--; )
                    delete c[s][i[r]];
                return c()
            };
            t.exports = Object.create || function(t, e) {
                var n;
                return null !== t ? (u[s] = r(t),
                n = new u,
                u[s] = null,
                n[a] = t) : n = c(),
                void 0 === e ? n : o(n, e)
            }
        }
        , function(t, e, n) {
            var r = n(5)
              , o = n(7)
              , i = n(21);
            t.exports = n(3) ? Object.defineProperties : function(t, e) {
                o(t);
                for (var n, a = i(e), u = a.length, s = 0; u > s; )
                    r.f(t, n = a[s++], e[n]);
                return t
            }
        }
        , function(t, e, n) {
            var r = n(42)
              , o = n(19).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return r(t, o)
            }
        }
        , function(t, e) {
            e.f = Object.getOwnPropertySymbols
        }
        , function(t, e, n) {
            var r = n(6)
              , o = n(10)
              , i = n(70)(!1)
              , a = n(24)("IE_PROTO");
            t.exports = function(t, e) {
                var n, u = o(t), s = 0, c = [];
                for (n in u)
                    n != a && r(u, n) && c.push(n);
                for (; e.length > s; )
                    r(u, n = e[s++]) && (~i(c, n) || c.push(n));
                return c
            }
        }
        , function(t, e, n) {
            t.exports = n(8)
        }
        , function(t, e, n) {
            var r = n(26)
              , o = Math.min;
            t.exports = function(t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0
            }
        }
        , function(t, e, n) {
            var r = n(18);
            t.exports = function(t) {
                return Object(r(t))
            }
        }
        , function(t, e, n) {
            var r = n(33)
              , o = n(1)("iterator")
              , i = n(9);
            t.exports = n(2).getIteratorMethod = function(t) {
                if (void 0 != t)
                    return t[o] || t["@@iterator"] || i[r(t)]
            }
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            function o(t, e) {
                for (t = String(t),
                e = e || 2; t.length < e; )
                    t = "0" + t;
                return t
            }
            function i(t) {
                var e = new Date(t.getFullYear(),t.getMonth(),t.getDate());
                e.setDate(e.getDate() - (e.getDay() + 6) % 7 + 3);
                var n = new Date(e.getFullYear(),0,4);
                n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
                var r = e.getTimezoneOffset() - n.getTimezoneOffset();
                e.setHours(e.getHours() - r);
                var o = (e - n) / 6048e5;
                return 1 + Math.floor(o)
            }
            function a(t) {
                var e = t.getDay();
                return 0 === e && (e = 7),
                e
            }
            function u(t) {
                return null === t ? "null" : void 0 === t ? "undefined" : "object" !== ("undefined" == typeof t ? "undefined" : (0,
                c.default)(t)) ? "undefined" == typeof t ? "undefined" : (0,
                c.default)(t) : Array.isArray(t) ? "array" : {}.toString.call(t).slice(8, -1).toLowerCase()
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = n(60)
              , c = r(s)
              , l = function() {
                var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g
                  , e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
                  , n = /[^-+\dA-Z]/g;
                return function(r, s, c, f) {
                    if (1 !== arguments.length || "string" !== u(r) || /\d/.test(r) || (s = r,
                    r = void 0),
                    r = r || new Date,
                    r instanceof Date || (r = new Date(r)),
                    isNaN(r))
                        throw TypeError("Invalid date");
                    s = String(l.masks[s] || s || l.masks.default);
                    var d = s.slice(0, 4);
                    "UTC:" !== d && "GMT:" !== d || (s = s.slice(4),
                    c = !0,
                    "GMT:" === d && (f = !0));
                    var p = c ? "getUTC" : "get"
                      , h = r[p + "Date"]()
                      , y = r[p + "Day"]()
                      , m = r[p + "Month"]()
                      , v = r[p + "FullYear"]()
                      , g = r[p + "Hours"]()
                      , b = r[p + "Minutes"]()
                      , x = r[p + "Seconds"]()
                      , M = r[p + "Milliseconds"]()
                      , w = c ? 0 : r.getTimezoneOffset()
                      , S = i(r)
                      , D = a(r)
                      , O = {
                        d: h,
                        dd: o(h),
                        ddd: l.i18n.dayNames[y],
                        dddd: l.i18n.dayNames[y + 7],
                        m: m + 1,
                        mm: o(m + 1),
                        mmm: l.i18n.monthNames[m],
                        mmmm: l.i18n.monthNames[m + 12],
                        yy: String(v).slice(2),
                        yyyy: v,
                        h: g % 12 || 12,
                        hh: o(g % 12 || 12),
                        H: g,
                        HH: o(g),
                        M: b,
                        MM: o(b),
                        s: x,
                        ss: o(x),
                        l: o(M, 3),
                        L: o(Math.round(M / 10)),
                        t: g < 12 ? "a" : "p",
                        tt: g < 12 ? "am" : "pm",
                        T: g < 12 ? "A" : "P",
                        TT: g < 12 ? "AM" : "PM",
                        Z: f ? "GMT" : c ? "UTC" : (String(r).match(e) || [""]).pop().replace(n, ""),
                        o: (w > 0 ? "-" : "+") + o(100 * Math.floor(Math.abs(w) / 60) + Math.abs(w) % 60, 4),
                        S: ["th", "st", "nd", "rd"][h % 10 > 3 ? 0 : (h % 100 - h % 10 != 10) * h % 10],
                        W: S,
                        N: D
                    };
                    return s.replace(t, function(t) {
                        return t in O ? O[t] : t.slice(1, t.length - 1)
                    })
                }
            }();
            l.masks = {
                default: "ddd mmm dd yyyy HH:MM:ss",
                shortDate: "m/d/yy",
                mediumDate: "mmm d, yyyy",
                longDate: "mmmm d, yyyy",
                fullDate: "dddd, mmmm d, yyyy",
                shortTime: "h:MM TT",
                mediumTime: "h:MM:ss TT",
                longTime: "h:MM:ss TT Z",
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
                expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
            },
            l.i18n = {
                dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            e.default = l
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(54)
              , i = r(o)
              , a = n(31)
              , u = r(a)
              , s = n(32)
              , c = r(s)
              , l = n(50)
              , f = r(l)
              , d = n(49)
              , p = r(d)
              , h = n(47)
              , y = r(h)
              , m = function() {
                function t(e) {
                    var n = this;
                    (0,
                    u.default)(this, t),
                    this.element = e,
                    this.element.setAttribute("data-has-picker", ""),
                    this.locale = this.element.getAttribute("lang") || document.body.getAttribute("lang") || "en",
                    this.format = this.element.getAttribute("date-format") || document.body.getAttribute("date-format") || this.element.getAttribute("data-date-format") || document.body.getAttribute("data-date-format") || "yyyy-mm-dd",
                    this.localeText = this.getLocaleText(),
                    (0,
                    i.default)(this.element, {
                        valueAsDate: {
                            get: function() {
                                if (!n.element.value)
                                    return null;
                                var t = n.format || "yyyy-mm-dd"
                                  , e = n.element.value.match(/(\d+)/g)
                                  , r = 0
                                  , o = {};
                                return t.replace(/(yyyy|dd|mm)/g, function(t) {
                                    o[t] = r++
                                }),
                                new Date(Date.UTC(e[o.yyyy], e[o.mm] - 1, e[o.dd]))
                            },
                            set: function(t) {
                                n.element.value = (0,
                                y.default)(t, n.format)
                            }
                        },
                        valueAsNumber: {
                            get: function() {
                                return n.element.value ? n.element.valueAsDate.valueOf() : NaN
                            },
                            set: function(t) {
                                n.element.valueAsDate = new Date(t)
                            }
                        }
                    });
                    var r = function(t) {
                        var e = n.element;
                        e.locale = n.localeText;
                        f.default.attachTo(e)
                    };
                    this.element.addEventListener("focus", r),
                    this.element.addEventListener("mouseup", r),
                    this.element.addEventListener("keydown", function(t) {
                        var e = new Date;
                        switch (t.keyCode) {
                        case 9:
                        case 27:
                            f.default.hide();
                            break;
                        case 38:
                            n.element.valueAsDate && (e.setDate(n.element.valueAsDate.getDate() + 1),
                            n.element.valueAsDate = e,
                            f.default.pingInput());
                            break;
                        case 40:
                            n.element.valueAsDate && (e.setDate(n.element.valueAsDate.getDate() - 1),
                            n.element.valueAsDate = e,
                            f.default.pingInput())
                        }
                        f.default.sync()
                    }),
                    this.element.addEventListener("keyup", function(t) {
                        f.default.sync()
                    })
                }
                return (0,
                c.default)(t, [{
                    key: "getLocaleText",
                    value: function() {
                        var t = this.locale.toLowerCase();
                        for (var e in p.default) {
                            var n = e.split("_");
                            if (n.map(function(t) {
                                return t.toLowerCase()
                            }),
                            ~n.indexOf(t) || ~n.indexOf(t.substr(0, 2)))
                                return p.default[e]
                        }
                    }
                }], [{
                    key: "supportsDateInput",
                    value: function() {
                        var t = document.createElement("input");
                        t.setAttribute("type", "date");
                        var e = "not-a-date";
                        return t.setAttribute("value", e),
                        !(t.value === e)
                    }
                }, {
                    key: "addPickerToDateInputs",
                    value: function() {
                        var e = document.querySelectorAll('input[type="date"]:not([data-has-picker])')
                          , n = e.length;
                        if (!n)
                            return !1;
                        for (var r = 0; r < n; ++r)
                            new t(e[r])
                    }
                }, {
                    key: "addPickerToOtherInputs",
                    value: function() {
                        var e = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])')
                          , n = e.length;
                        if (!n)
                            return !1;
                        for (var r = 0; r < n; ++r)
                            new t(e[r])
                    }
                }]),
                t
            }();
            e.default = m
        }
        , function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = {
                "en_en-US_en-UK": {
                    days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                "zh_zh-CN": {
                    days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                "zh-Hans_zh-Hans-CN": {
                    days: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                "zh-Hant_zh-Hant-TW": {
                    days: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                "de_de-DE": {
                    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                "nl_nl-NL_nl-BE": {
                    days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
                    months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
                    today: "Vandaag",
                    format: "D/M/Y"
                },
                "pt_pt-BR": {
                    days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    today: "Hoje"
                },
                "fr_fr-FR_fr-BE": {
                    days: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
                    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                    today: "Aujourd'hui",
                    format: "D/M/Y"
                },
                "es_es-VE": {
                    days: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
                    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    today: "Hoy",
                    format: "D/M/Y"
                },
                "da_da-dk": {
                    days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                    months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
                    today: "I dag",
                    format: "dd/MM-YYYY"
                },
                "ru_ru-RU_ru-UA_ru-KZ_ru-MD": {
                    days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    today: "Сегодня",
                    format: "D.M.Y"
                },
                "uk_uk-UA": {
                    days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
                    today: "Cьогодні",
                    format: "D.M.Y"
                },
                "sv_sv-SE": {
                    days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                    today: "Idag",
                    format: "YYYY-MM-dd"
                },
                "test_test-TEST": {
                    days: ["Foo", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["Foo", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                ja: {
                    days: ["日", "月", "火", "水", "木", "金", "土"],
                    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                    today: "今日",
                    format: "YYYY-MM-dd"
                }
            };
            e.default = n
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(59)
              , i = r(o)
              , a = n(58)
              , u = r(a)
              , s = n(31)
              , c = r(s)
              , l = n(32)
              , f = r(l)
              , d = function() {
                function t() {
                    var e = this;
                    if ((0,
                    c.default)(this, t),
                    window.thePicker)
                        return window.thePicker;
                    this.date = new Date,
                    this.input = null,
                    this.isOpen = !1,
                    this.container = document.createElement("date-input-polyfill"),
                    this.year = document.createElement("select"),
                    this.year.className = "yearSelect",
                    this.year.addEventListener("change", function() {
                        e.date.setYear(e.year.value),
                        e.refreshMonthsList(),
                        e.refreshDaysMatrix()
                    });
                    var n = document.createElement("span");
                    n.className = "yearSelect-wrapper",
                    n.appendChild(this.year),
                    this.container.appendChild(n),
                    this.month = document.createElement("select"),
                    this.month.className = "monthSelect",
                    this.month.addEventListener("change", function() {
                        e.date.setMonth(e.month.value),
                        e.refreshDaysMatrix()
                    });
                    var r = document.createElement("span");
                    r.className = "monthSelect-wrapper",
                    r.appendChild(this.month),
                    this.container.appendChild(r),
                    this.today = document.createElement("button"),
                    this.today.textContent = "Today",
                    this.today.addEventListener("click", function() {
                        var t = new Date;
                        e.date = new Date(t.getFullYear() + "/" + ("0" + (t.getMonth() + 1)).slice(-2) + "/" + ("0" + t.getDate()).slice(-2)),
                        e.setInput()
                    }),
                    this.container.appendChild(this.today);
                    var o = document.createElement("table");
                    this.daysHead = document.createElement("thead"),
                    this.days = document.createElement("tbody"),
                    this.days.addEventListener("click", function(t) {
                        var n = t.target;
                        if (!n.hasAttribute("data-day"))
                            return !1;
                        var r = e.days.querySelector("[data-selected]");
                        r && r.removeAttribute("data-selected"),
                        n.setAttribute("data-selected", ""),
                        e.date.setDate(parseInt(n.textContent)),
                        e.setInput()
                    }),
                    o.appendChild(this.daysHead),
                    o.appendChild(this.days),
                    this.container.appendChild(o),
                    this.hide(),
                    document.body.appendChild(this.container),
                    this.removeClickOut = function(t) {
                        if (e.isOpen) {
                            for (var n = t.target, r = n === e.container || n === e.input; !r && (n = n.parentNode); )
                                r = n === e.container;
                            ("date" !== t.target.getAttribute("type") && !r || !r) && e.hide()
                        }
                    }
                    ,
                    this.removeBlur = function(t) {
                        e.isOpen && e.hide()
                    }
                }
                return (0,
                f.default)(t, [{
                    key: "hide",
                    value: function() {
                        this.container.setAttribute("data-open", this.isOpen = !1),
                        this.input && this.input.blur(),
                        document.removeEventListener("mousedown", this.removeClickOut),
                        document.removeEventListener("touchstart", this.removeClickOut)
                    }
                }, {
                    key: "show",
                    value: function() {
                        var t = this;
                        this.container.setAttribute("data-open", this.isOpen = !0),
                        setTimeout(function() {
                            document.addEventListener("mousedown", t.removeClickOut),
                            document.addEventListener("touchstart", t.removeClickOut)
                        }, 500),
                        window.onpopstate = function() {
                            t.hide()
                        }
                    }
                }, {
                    key: "goto",
                    value: function(t) {
                        var e = this
                          , n = t.getBoundingClientRect();
                        this.container.style.top = n.top + n.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3 + "px";
                        var r = this.container.getBoundingClientRect()
                          , o = r.width ? r.width : 280
                          , i = function() {
                            return e.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim()
                        }
                          , a = n.right - o;
                        n.right < o ? (a = n.left,
                        this.container.className = i() + " polyfill-left-aligned") : this.container.className = i() + " polyfill-right-aligned",
                        this.container.style.left = a + (document.documentElement.scrollLeft || document.body.scrollLeft) + "px",
                        this.show()
                    }
                }, {
                    key: "attachTo",
                    value: function(t) {
                        return (t !== this.input || !this.isOpen) && (this.input = t,
                        this.refreshLocale(),
                        this.refreshYearsList(),
                        this.refreshMonthsList(),
                        this.sync(),
                        this.goto(this.input),
                        !0)
                    }
                }, {
                    key: "sync",
                    value: function() {
                        isNaN(Date.parse(this.input.valueAsDate)) ? this.date = new Date : this.date = t.absoluteDate(this.input.valueAsDate),
                        this.year.value = this.date.getFullYear(),
                        this.month.value = this.date.getMonth(),
                        this.refreshDaysMatrix()
                    }
                }, {
                    key: "setInput",
                    value: function() {
                        var t = this;
                        this.input.valueAsDate = this.date,
                        this.input.focus(),
                        setTimeout(function() {
                            t.hide()
                        }, 100),
                        this.pingInput()
                    }
                }, {
                    key: "refreshLocale",
                    value: function() {
                        if (this.locale === this.input.locale)
                            return !1;
                        this.locale = this.input.locale,
                        this.today.textContent = this.locale.today || "Today";
                        for (var t = ["<tr>"], e = 0, n = this.locale.days.length; e < n; ++e)
                            t.push('<th scope="col">' + this.locale.days[e] + "</th>");
                        this.daysHead.innerHTML = t.join("")
                    }
                }, {
                    key: "refreshYearsList",
                    value: function() {
                        var e = this.getExtent()
                          , n = (0,
                        u.default)(e, 2)
                          , r = n[0]
                          , o = n[1];
                        this.yearRange = [r ? r.getFullYear() : 1890, o ? o.getFullYear() : this.date.getFullYear() + 20],
                        t.createRangeSelect.apply(t, [this.year].concat((0,
                        i.default)(this.yearRange)))
                    }
                }, {
                    key: "refreshMonthsList",
                    value: function() {
                        var e = this.year.value
                          , n = this.getExtent()
                          , r = (0,
                        u.default)(n, 2)
                          , o = r[0]
                          , a = r[1];
                        this.monthRange = [0, 11],
                        o && o.getFullYear() == e && (this.monthRange[0] = o.getMonth()),
                        a && a.getFullYear() == e && (this.monthRange[1] = a.getMonth());
                        var s = this.locale.months.slice(this.monthRange[0], this.monthRange[1] + 1);
                        t.createRangeSelect.apply(t, [this.month].concat((0,
                        i.default)(this.monthRange), [s]))
                    }
                }, {
                    key: "getExtent",
                    value: function() {
                        var e = this.input.getAttribute("min")
                          , n = this.input.getAttribute("max");
                        return e = e ? t.absoluteDate(new Date(e)) : null,
                        n = n ? t.absoluteDate(new Date(n)) : null,
                        [e, n]
                    }
                }, {
                    key: "refreshDaysMatrix",
                    value: function() {
                        this.refreshLocale();
                        for (var e = this.date.getFullYear(), n = this.date.getMonth(), r = new Date(e,n,1), o = r.getDay(), i = new Date(this.date.getFullYear(),n + 1,0).getDate(), a = t.absoluteDate(this.input.valueAsDate) || !1, s = a && e === a.getFullYear() && n === a.getMonth(), c = [], l = this.getExtent(), f = (0,
                        u.default)(l, 2), d = f[0], p = f[1], h = 0; h < i + o; ++h)
                            if (h % 7 === 0 && c.push("\n          " + (0 !== h ? "</tr>" : "") + "\n          <tr>\n        "),
                            h + 1 <= o)
                                c.push("<td></td>");
                            else {
                                var y = h + 1 - o
                                  , m = s && a.getDate() === y
                                  , v = new Date(r);
                                v.setDate(y);
                                var g = (!d || d <= v) && (!p || p >= v);
                                c.push("<td data-day " + (m ? "data-selected" : "") + " " + (g ? "" : "data-disabled") + ">\n          " + y + "\n        </td>")
                            }
                        this.days.innerHTML = c.join("")
                    }
                }, {
                    key: "pingInput",
                    value: function() {
                        var t = void 0
                          , e = void 0;
                        try {
                            t = new Event("input"),
                            e = new Event("change")
                        } catch (n) {
                            t = document.createEvent("KeyboardEvent"),
                            t.initEvent("input", !0, !1),
                            e = document.createEvent("KeyboardEvent"),
                            e.initEvent("change", !0, !1)
                        }
                        this.input.dispatchEvent(t),
                        this.input.dispatchEvent(e)
                    }
                }], [{
                    key: "createRangeSelect",
                    value: function(t, e, n, r) {
                        t.innerHTML = "";
                        for (var o = e; o <= n; ++o) {
                            var i = document.createElement("option");
                            t.appendChild(i);
                            var a = r ? r[o - e] : o;
                            i.text = a,
                            i.value = o
                        }
                        return t
                    }
                }, {
                    key: "absoluteDate",
                    value: function(t) {
                        return t && new Date(t.getTime() + 60 * t.getTimezoneOffset() * 1e3)
                    }
                }]),
                t
            }();
            window.thePicker = new d,
            e.default = window.thePicker
        }
        , function(t, e, n) {
            t.exports = {
                default: n(61),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(62),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(63),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(64),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(65),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(66),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            t.exports = {
                default: n(67),
                __esModule: !0
            }
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var o = n(53)
              , i = r(o)
              , a = n(52)
              , u = r(a);
            e.default = function() {
                function t(t, e) {
                    var n = []
                      , r = !0
                      , o = !1
                      , i = void 0;
                    try {
                        for (var a, s = (0,
                        u.default)(t); !(r = (a = s.next()).done) && (n.push(a.value),
                        !e || n.length !== e); r = !0)
                            ;
                    } catch (t) {
                        o = !0,
                        i = t
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e))
                        return e;
                    if ((0,
                    i.default)(Object(e)))
                        return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }()
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var o = n(51)
              , i = r(o);
            e.default = function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++)
                        n[e] = t[e];
                    return n
                }
                return (0,
                i.default)(t)
            }
        }
        , function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            e.__esModule = !0;
            var o = n(57)
              , i = r(o)
              , a = n(56)
              , u = r(a)
              , s = "function" == typeof u.default && "symbol" == typeof i.default ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : typeof t
            }
            ;
            e.default = "function" == typeof u.default && "symbol" === s(i.default) ? function(t) {
                return "undefined" == typeof t ? "undefined" : s(t)
            }
            : function(t) {
                return t && "function" == typeof u.default && t.constructor === u.default && t !== u.default.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : s(t)
            }
        }
        , function(t, e, n) {
            n(16),
            n(89),
            t.exports = n(2).Array.from
        }
        , function(t, e, n) {
            n(30),
            n(16),
            t.exports = n(87)
        }
        , function(t, e, n) {
            n(30),
            n(16),
            t.exports = n(88)
        }
        , function(t, e, n) {
            n(91);
            var r = n(2).Object;
            t.exports = function(t, e) {
                return r.defineProperties(t, e)
            }
        }
        , function(t, e, n) {
            n(92);
            var r = n(2).Object;
            t.exports = function(t, e, n) {
                return r.defineProperty(t, e, n)
            }
        }
        , function(t, e, n) {
            n(94),
            n(93),
            n(95),
            n(96),
            t.exports = n(2).Symbol
        }
        , function(t, e, n) {
            n(16),
            n(30),
            t.exports = n(29).f("iterator")
        }
        , function(t, e) {
            t.exports = function(t) {
                if ("function" != typeof t)
                    throw TypeError(t + " is not a function!");
                return t
            }
        }
        , function(t, e) {
            t.exports = function() {}
        }
        , function(t, e, n) {
            var r = n(10)
              , o = n(44)
              , i = n(86);
            t.exports = function(t) {
                return function(e, n, a) {
                    var u, s = r(e), c = o(s.length), l = i(a, c);
                    if (t && n != n) {
                        for (; c > l; )
                            if (u = s[l++],
                            u != u)
                                return !0
                    } else
                        for (; c > l; l++)
                            if ((t || l in s) && s[l] === n)
                                return t || l || 0;
                    return !t && -1
                }
            }
        }
        , function(t, e, n) {
            "use strict";
            var r = n(5)
              , o = n(13);
            t.exports = function(t, e, n) {
                e in t ? r.f(t, e, o(0, n)) : t[e] = n
            }
        }
        , function(t, e, n) {
            var r = n(21)
              , o = n(41)
              , i = n(22);
            t.exports = function(t) {
                var e = r(t)
                  , n = o.f;
                if (n)
                    for (var a, u = n(t), s = i.f, c = 0; u.length > c; )
                        s.call(t, a = u[c++]) && e.push(a);
                return e
            }
        }
        , function(t, e, n) {
            var r = n(4).document;
            t.exports = r && r.documentElement
        }
        , function(t, e, n) {
            var r = n(17);
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == r(t) ? t.split("") : Object(t)
            }
        }
        , function(t, e, n) {
            var r = n(9)
              , o = n(1)("iterator")
              , i = Array.prototype;
            t.exports = function(t) {
                return void 0 !== t && (r.Array === t || i[o] === t)
            }
        }
        , function(t, e, n) {
            var r = n(17);
            t.exports = Array.isArray || function(t) {
                return "Array" == r(t)
            }
        }
        , function(t, e, n) {
            var r = n(7);
            t.exports = function(t, e, n, o) {
                try {
                    return o ? e(r(n)[0], n[1]) : e(n)
                } catch (e) {
                    var i = t.return;
                    throw void 0 !== i && r(i.call(t)),
                    e
                }
            }
        }
        , function(t, e, n) {
            "use strict";
            var r = n(38)
              , o = n(13)
              , i = n(23)
              , a = {};
            n(8)(a, n(1)("iterator"), function() {
                return this
            }),
            t.exports = function(t, e, n) {
                t.prototype = r(a, {
                    next: o(1, n)
                }),
                i(t, e + " Iterator")
            }
        }
        , function(t, e, n) {
            var r = n(1)("iterator")
              , o = !1;
            try {
                var i = [7][r]();
                i.return = function() {
                    o = !0
                }
                ,
                Array.from(i, function() {
                    throw 2
                })
            } catch (t) {}
            t.exports = function(t, e) {
                if (!e && !o)
                    return !1;
                var n = !1;
                try {
                    var i = [7]
                      , a = i[r]();
                    a.next = function() {
                        return {
                            done: n = !0
                        }
                    }
                    ,
                    i[r] = function() {
                        return a
                    }
                    ,
                    t(i)
                } catch (t) {}
                return n
            }
        }
        , function(t, e) {
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        }
        , function(t, e, n) {
            var r = n(15)("meta")
              , o = n(12)
              , i = n(6)
              , a = n(5).f
              , u = 0
              , s = Object.isExtensible || function() {
                return !0
            }
              , c = !n(14)(function() {
                return s(Object.preventExtensions({}))
            })
              , l = function(t) {
                a(t, r, {
                    value: {
                        i: "O" + ++u,
                        w: {}
                    }
                })
            }
              , f = function(t, e) {
                if (!o(t))
                    return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, r)) {
                    if (!s(t))
                        return "F";
                    if (!e)
                        return "E";
                    l(t)
                }
                return t[r].i
            }
              , d = function(t, e) {
                if (!i(t, r)) {
                    if (!s(t))
                        return !0;
                    if (!e)
                        return !1;
                    l(t)
                }
                return t[r].w
            }
              , p = function(t) {
                return c && h.NEED && s(t) && !i(t, r) && l(t),
                t
            }
              , h = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: f,
                getWeak: d,
                onFreeze: p
            }
        }
        , function(t, e, n) {
            var r = n(22)
              , o = n(13)
              , i = n(10)
              , a = n(27)
              , u = n(6)
              , s = n(36)
              , c = Object.getOwnPropertyDescriptor;
            e.f = n(3) ? c : function(t, e) {
                if (t = i(t),
                e = a(e, !0),
                s)
                    try {
                        return c(t, e)
                    } catch (t) {}
                if (u(t, e))
                    return o(!r.f.call(t, e), t[e])
            }
        }
        , function(t, e, n) {
            var r = n(10)
              , o = n(40).f
              , i = {}.toString
              , a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
              , u = function(t) {
                try {
                    return o(t)
                } catch (t) {
                    return a.slice()
                }
            };
            t.exports.f = function(t) {
                return a && "[object Window]" == i.call(t) ? u(t) : o(r(t))
            }
        }
        , function(t, e, n) {
            var r = n(6)
              , o = n(45)
              , i = n(24)("IE_PROTO")
              , a = Object.prototype;
            t.exports = Object.getPrototypeOf || function(t) {
                return t = o(t),
                r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
            }
        }
        , function(t, e, n) {
            var r = n(26)
              , o = n(18);
            t.exports = function(t) {
                return function(e, n) {
                    var i, a, u = String(o(e)), s = r(n), c = u.length;
                    return s < 0 || s >= c ? t ? "" : void 0 : (i = u.charCodeAt(s),
                    i < 55296 || i > 56319 || s + 1 === c || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? u.charAt(s) : i : t ? u.slice(s, s + 2) : (i - 55296 << 10) + (a - 56320) + 65536)
                }
            }
        }
        , function(t, e, n) {
            var r = n(26)
              , o = Math.max
              , i = Math.min;
            t.exports = function(t, e) {
                return t = r(t),
                t < 0 ? o(t + e, 0) : i(t, e)
            }
        }
        , function(t, e, n) {
            var r = n(7)
              , o = n(46);
            t.exports = n(2).getIterator = function(t) {
                var e = o(t);
                if ("function" != typeof e)
                    throw TypeError(t + " is not iterable!");
                return r(e.call(t))
            }
        }
        , function(t, e, n) {
            var r = n(33)
              , o = n(1)("iterator")
              , i = n(9);
            t.exports = n(2).isIterable = function(t) {
                var e = Object(t);
                return void 0 !== e[o] || "@@iterator"in e || i.hasOwnProperty(r(e))
            }
        }
        , function(t, e, n) {
            "use strict";
            var r = n(34)
              , o = n(11)
              , i = n(45)
              , a = n(77)
              , u = n(75)
              , s = n(44)
              , c = n(71)
              , l = n(46);
            o(o.S + o.F * !n(79)(function(t) {
                Array.from(t)
            }), "Array", {
                from: function(t) {
                    var e, n, o, f, d = i(t), p = "function" == typeof this ? this : Array, h = arguments.length, y = h > 1 ? arguments[1] : void 0, m = void 0 !== y, v = 0, g = l(d);
                    if (m && (y = r(y, h > 2 ? arguments[2] : void 0, 2)),
                    void 0 == g || p == Array && u(g))
                        for (e = s(d.length),
                        n = new p(e); e > v; v++)
                            c(n, v, m ? y(d[v], v) : d[v]);
                    else
                        for (f = g.call(d),
                        n = new p; !(o = f.next()).done; v++)
                            c(n, v, m ? a(f, y, [o.value, v], !0) : o.value);
                    return n.length = v,
                    n
                }
            })
        }
        , function(t, e, n) {
            "use strict";
            var r = n(69)
              , o = n(80)
              , i = n(9)
              , a = n(10);
            t.exports = n(37)(Array, "Array", function(t, e) {
                this._t = a(t),
                this._i = 0,
                this._k = e
            }, function() {
                var t = this._t
                  , e = this._k
                  , n = this._i++;
                return !t || n >= t.length ? (this._t = void 0,
                o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
            }, "values"),
            i.Arguments = i.Array,
            r("keys"),
            r("values"),
            r("entries")
        }
        , function(t, e, n) {
            var r = n(11);
            r(r.S + r.F * !n(3), "Object", {
                defineProperties: n(39)
            })
        }
        , function(t, e, n) {
            var r = n(11);
            r(r.S + r.F * !n(3), "Object", {
                defineProperty: n(5).f
            })
        }
        , function(t, e) {}
        , function(t, e, n) {
            "use strict";
            var r = n(4)
              , o = n(6)
              , i = n(3)
              , a = n(11)
              , u = n(43)
              , s = n(81).KEY
              , c = n(14)
              , l = n(25)
              , f = n(23)
              , d = n(15)
              , p = n(1)
              , h = n(29)
              , y = n(28)
              , m = n(72)
              , v = n(76)
              , g = n(7)
              , b = n(12)
              , x = n(10)
              , M = n(27)
              , w = n(13)
              , S = n(38)
              , D = n(83)
              , O = n(82)
              , T = n(5)
              , A = n(21)
              , _ = O.f
              , k = T.f
              , E = D.f
              , L = r.Symbol
              , j = r.JSON
              , C = j && j.stringify
              , N = "prototype"
              , P = p("_hidden")
              , F = p("toPrimitive")
              , J = {}.propertyIsEnumerable
              , R = l("symbol-registry")
              , I = l("symbols")
              , H = l("op-symbols")
              , Y = Object[N]
              , U = "function" == typeof L
              , z = r.QObject
              , B = !z || !z[N] || !z[N].findChild
              , W = i && c(function() {
                return 7 != S(k({}, "a", {
                    get: function() {
                        return k(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var r = _(Y, e);
                r && delete Y[e],
                k(t, e, n),
                r && t !== Y && k(Y, e, r)
            }
            : k
              , G = function(t) {
                var e = I[t] = S(L[N]);
                return e._k = t,
                e
            }
              , V = U && "symbol" == typeof L.iterator ? function(t) {
                return "symbol" == typeof t
            }
            : function(t) {
                return t instanceof L
            }
              , Z = function(t, e, n) {
                return t === Y && Z(H, e, n),
                g(t),
                e = M(e, !0),
                g(n),
                o(I, e) ? (n.enumerable ? (o(t, P) && t[P][e] && (t[P][e] = !1),
                n = S(n, {
                    enumerable: w(0, !1)
                })) : (o(t, P) || k(t, P, w(1, {})),
                t[P][e] = !0),
                W(t, e, n)) : k(t, e, n)
            }
              , K = function(t, e) {
                g(t);
                for (var n, r = m(e = x(e)), o = 0, i = r.length; i > o; )
                    Z(t, n = r[o++], e[n]);
                return t
            }
              , q = function(t, e) {
                return void 0 === e ? S(t) : K(S(t), e)
            }
              , Q = function(t) {
                var e = J.call(this, t = M(t, !0));
                return !(this === Y && o(I, t) && !o(H, t)) && (!(e || !o(this, t) || !o(I, t) || o(this, P) && this[P][t]) || e)
            }
              , X = function(t, e) {
                if (t = x(t),
                e = M(e, !0),
                t !== Y || !o(I, e) || o(H, e)) {
                    var n = _(t, e);
                    return !n || !o(I, e) || o(t, P) && t[P][e] || (n.enumerable = !0),
                    n
                }
            }
              , $ = function(t) {
                for (var e, n = E(x(t)), r = [], i = 0; n.length > i; )
                    o(I, e = n[i++]) || e == P || e == s || r.push(e);
                return r
            }
              , tt = function(t) {
                for (var e, n = t === Y, r = E(n ? H : x(t)), i = [], a = 0; r.length > a; )
                    !o(I, e = r[a++]) || n && !o(Y, e) || i.push(I[e]);
                return i
            };
            U || (L = function() {
                if (this instanceof L)
                    throw TypeError("Symbol is not a constructor!");
                var t = d(arguments.length > 0 ? arguments[0] : void 0)
                  , e = function(n) {
                    this === Y && e.call(H, n),
                    o(this, P) && o(this[P], t) && (this[P][t] = !1),
                    W(this, t, w(1, n))
                };
                return i && B && W(Y, t, {
                    configurable: !0,
                    set: e
                }),
                G(t)
            }
            ,
            u(L[N], "toString", function() {
                return this._k
            }),
            O.f = X,
            T.f = Z,
            n(40).f = D.f = $,
            n(22).f = Q,
            n(41).f = tt,
            i && !n(20) && u(Y, "propertyIsEnumerable", Q, !0),
            h.f = function(t) {
                return G(p(t))
            }
            ),
            a(a.G + a.W + a.F * !U, {
                Symbol: L
            });
            for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt; )
                p(et[nt++]);
            for (var rt = A(p.store), ot = 0; rt.length > ot; )
                y(rt[ot++]);
            a(a.S + a.F * !U, "Symbol", {
                for: function(t) {
                    return o(R, t += "") ? R[t] : R[t] = L(t)
                },
                keyFor: function(t) {
                    if (!V(t))
                        throw TypeError(t + " is not a symbol!");
                    for (var e in R)
                        if (R[e] === t)
                            return e
                },
                useSetter: function() {
                    B = !0
                },
                useSimple: function() {
                    B = !1
                }
            }),
            a(a.S + a.F * !U, "Object", {
                create: q,
                defineProperty: Z,
                defineProperties: K,
                getOwnPropertyDescriptor: X,
                getOwnPropertyNames: $,
                getOwnPropertySymbols: tt
            }),
            j && a(a.S + a.F * (!U || c(function() {
                var t = L();
                return "[null]" != C([t]) || "{}" != C({
                    a: t
                }) || "{}" != C(Object(t))
            })), "JSON", {
                stringify: function(t) {
                    for (var e, n, r = [t], o = 1; arguments.length > o; )
                        r.push(arguments[o++]);
                    if (n = e = r[1],
                    (b(e) || void 0 !== t) && !V(t))
                        return v(e) || (e = function(t, e) {
                            if ("function" == typeof n && (e = n.call(this, t, e)),
                            !V(e))
                                return e
                        }
                        ),
                        r[1] = e,
                        C.apply(j, r)
                }
            }),
            L[N][F] || n(8)(L[N], F, L[N].valueOf),
            f(L, "Symbol"),
            f(Math, "Math", !0),
            f(r.JSON, "JSON", !0)
        }
        , function(t, e, n) {
            n(28)("asyncIterator")
        }
        , function(t, e, n) {
            n(28)("observable")
        }
        , function(t, e, n) {
            e = t.exports = n(98)(),
            e.push([t.id, "date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}date-input-polyfill [data-disabled]{background:#eee;pointer-events:none}", ""])
        }
        , function(t, e) {
            t.exports = function() {
                var t = [];
                return t.toString = function() {
                    for (var t = [], e = 0; e < this.length; e++) {
                        var n = this[e];
                        n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                    }
                    return t.join("")
                }
                ,
                t.i = function(e, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var r = {}, o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0)
                    }
                    for (o = 0; o < e.length; o++) {
                        var a = e[o];
                        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                        t.push(a))
                    }
                }
                ,
                t
            }
        }
        , function(t, e, n) {
            function r(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n]
                      , o = p[r.id];
                    if (o) {
                        o.refs++;
                        for (var i = 0; i < o.parts.length; i++)
                            o.parts[i](r.parts[i]);
                        for (; i < r.parts.length; i++)
                            o.parts.push(c(r.parts[i], e))
                    } else {
                        for (var a = [], i = 0; i < r.parts.length; i++)
                            a.push(c(r.parts[i], e));
                        p[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: a
                        }
                    }
                }
            }
            function o(t) {
                for (var e = [], n = {}, r = 0; r < t.length; r++) {
                    var o = t[r]
                      , i = o[0]
                      , a = o[1]
                      , u = o[2]
                      , s = o[3]
                      , c = {
                        css: a,
                        media: u,
                        sourceMap: s
                    };
                    n[i] ? n[i].parts.push(c) : e.push(n[i] = {
                        id: i,
                        parts: [c]
                    })
                }
                return e
            }
            function i(t, e) {
                var n = m()
                  , r = b[b.length - 1];
                if ("top" === t.insertAt)
                    r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
                    b.push(e);
                else {
                    if ("bottom" !== t.insertAt)
                        throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(e)
                }
            }
            function a(t) {
                t.parentNode.removeChild(t);
                var e = b.indexOf(t);
                e >= 0 && b.splice(e, 1)
            }
            function u(t) {
                var e = document.createElement("style");
                return e.type = "text/css",
                i(t, e),
                e
            }
            function s(t) {
                var e = document.createElement("link");
                return e.rel = "stylesheet",
                i(t, e),
                e
            }
            function c(t, e) {
                var n, r, o;
                if (e.singleton) {
                    var i = g++;
                    n = v || (v = u(e)),
                    r = l.bind(null, n, i, !1),
                    o = l.bind(null, n, i, !0)
                } else
                    t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(e),
                    r = d.bind(null, n),
                    o = function() {
                        a(n),
                        n.href && URL.revokeObjectURL(n.href)
                    }
                    ) : (n = u(e),
                    r = f.bind(null, n),
                    o = function() {
                        a(n)
                    }
                    );
                return r(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                            return;
                        r(t = e)
                    } else
                        o()
                }
            }
            function l(t, e, n, r) {
                var o = n ? "" : r.css;
                if (t.styleSheet)
                    t.styleSheet.cssText = x(e, o);
                else {
                    var i = document.createTextNode(o)
                      , a = t.childNodes;
                    a[e] && t.removeChild(a[e]),
                    a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
                }
            }
            function f(t, e) {
                var n = e.css
                  , r = e.media;
                if (r && t.setAttribute("media", r),
                t.styleSheet)
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
            function d(t, e) {
                var n = e.css
                  , r = e.sourceMap;
                r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var o = new Blob([n],{
                    type: "text/css"
                })
                  , i = t.href;
                t.href = URL.createObjectURL(o),
                i && URL.revokeObjectURL(i)
            }
            var p = {}
              , h = function(t) {
                var e;
                return function() {
                    return "undefined" == typeof e && (e = t.apply(this, arguments)),
                    e
                }
            }
              , y = h(function() {
                return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
            })
              , m = h(function() {
                return document.head || document.getElementsByTagName("head")[0]
            })
              , v = null
              , g = 0
              , b = [];
            t.exports = function(t, e) {
                e = e || {},
                "undefined" == typeof e.singleton && (e.singleton = y()),
                "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
                var n = o(t);
                return r(n, e),
                function(t) {
                    for (var i = [], a = 0; a < n.length; a++) {
                        var u = n[a]
                          , s = p[u.id];
                        s.refs--,
                        i.push(s)
                    }
                    if (t) {
                        var c = o(t);
                        r(c, e)
                    }
                    for (var a = 0; a < i.length; a++) {
                        var s = i[a];
                        if (0 === s.refs) {
                            for (var l = 0; l < s.parts.length; l++)
                                s.parts[l]();
                            delete p[s.id]
                        }
                    }
                }
            }
            ;
            var x = function() {
                var t = [];
                return function(e, n) {
                    return t[e] = n,
                    t.filter(Boolean).join("\n")
                }
            }()
        }
        , function(t, e, n) {
            var r = n(97);
            "string" == typeof r && (r = [[t.id, r, ""]]);
            n(99)(r, {});
            r.locals && (t.exports = r.locals)
        }
        ])
    });
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = function() {
            $(document).on('click', '.js-toggle', function() {
                this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false');
                $(this).next('.js-toggle-content').attr('aria-hidden', this.getAttribute('aria-expanded') === 'false').toggleClass('hidden');
            }).on('focusout', '.js-toggle-content', function() {
                $(this).closest('.js-toggle').setAttribute('aria-expanded', this.closest('.js-toggle').getAttribute('aria-expanded') === 'false');
                $(this).attr('aria-hidden', this.getAttribute('aria-expanded') === 'false');
            });
            if ($("#FAQ-layout").length > 0) {
                var href = window.location.href;
                href = href.replace(window.location.origin, '');
                $('#FAQ-layout .aside__navigation a[href="' + href + '"]').attr('aria-current', 'true').css('font-style', 'italic');
            }
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function toggleField() {
            var toggle = !!this.value.length || getComputedStyle(this).backgroundColor === 'rgb(250, 255, 189)';
            $(this).toggleClass('not-empty', toggle);
        }
        function checkField(context) {
            $('.form__input', context).each(toggleField);
        }
        module.exports = function() {
            $(document).on('change', '.form__input', toggleField);
            $('form-placeholders').ready(function() {
                checkField();
                var timeout = 1000;
                var refresh = setInterval(function() {
                    checkField();
                }, 100);
                setTimeout(function() {
                    window.clearInterval(refresh);
                }, timeout);
            });
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var processInclude = __webpack_require__(1);
        $(document).ready(function() {
            processInclude(__webpack_require__(42));
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function getModalHtmlElement() {
            if ($('#id-giftwrapping-modal-preview').length !== 0) {
                $('#id-giftwrapping-modal-preview').remove();
            }
            var btnPreviewLabel = $('.line-item-gift-wrapping-preview-cta').data('preview-label');
            var btnIconUrl = $('.line-item-gift-wrapping-preview-cta').data('icon-url');
            var btnBgUrl = $('.line-item-gift-wrapping-preview-cta').data('bg-url');
            var closeLabel = $('.line-item-gift-wrapping-preview-cta').data('close-preview');
            var htmlString = '<div class="modal fade giftwrapping-modal-preview modal--gamma" id="id-giftwrapping-modal-preview" tabindex="-1" role="dialog" aria-labelledby="previewModalLabel">' + '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">' + '<div class="modal-content simple-animated-modal__content">' + '<div class="modal-header p-0">' + '<button type="button" class="close modal--beta simple-animated-modal-close modal-first modal-last" data-dismiss="modal">' + '<span aria-hidden="true">X</span><span class="sr-only">' + closeLabel + '</span>' + '</button>' + '<div class="modal-title modal--gamma simple-animated-modal-title" id="previewModalLabel" role="heading" aria-level="1"> ' + btnPreviewLabel + ' </div>' + '<svg class="symbol symbol--m absolute c-white ml-01" aria-hidden="true" focusable="false">' + '<use xlink:href="' + btnIconUrl + '"></use>' + '</svg>' + '</div>' + '<div class="modal-body">' + '<div class="grid-2-s-2 overflow-hidden relative b-gray m-0 gift-card-container">' + '<div class="container-message">' + '<p class="message-preview m-0"></p>' + '</div>' + '<div class="container-img flex-middle flex">' + '<img src="' + btnBgUrl + '" width="275" height="158" class="b-2 r-0" sizes="100vw" alt="' + btnPreviewLabel + '">' + '</div>' + '</div>' + '</div>' + '</div>' + '</div><a class="link_hidden" href=""></a>' + '</div>';
            $('body').append(htmlString);
        }
        function fillModalElement(message) {
            $('.giftwrapping-modal-preview .modal-body').spinner().start();
            $('.giftwrapping-modal-preview .modal-body .message-preview').text(message);
            $('#giftwrapping-modal-preview').modal('show');
            $.spinner().stop();
        }
        module.exports = function() {
            $('body').on('click', '.line-item-gift-wrapping-cta', function(e) {
                var lineUUID = $(this).attr("data-lineUUID");
                this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false');
                $('.line-item-gift-wrapping-form[data-lineUUID="' + lineUUID + '"]').attr('aria-hidden', this.getAttribute('aria-expanded') === 'false').toggleClass('hidden');
            }).on('click', '.line-item-gift-wrapping-save-cta', function(e) {
                var updateGiftWrappingUrl = $(this).attr('data-updateGiftWrappingUrl');
                var lineUUID = $(this).attr("data-lineUUID");
                var pid = $(this).attr('data-pid');
                var giftEnabled = $('.input-giftwrapping-enabled[data-lineUUID="' + lineUUID + '"]').prop("checked");
                var giftMessage = $('.textarea-giftwrapping-message[data-lineUUID="' + lineUUID + '"]').val();
                var giftWrapform = {
                    pid: pid,
                    enabled: giftEnabled,
                    message: giftMessage
                };
                $(this).parents('.card').spinner().start();
                if (updateGiftWrappingUrl) {
                    $.ajax({
                        url: updateGiftWrappingUrl,
                        type: 'post',
                        context: this,
                        data: giftWrapform,
                        dataType: 'json',
                        success: function(data) {
                            $.spinner().stop();
                            var _giftWrapForm = data;
                            var _lineUUID = _giftWrapForm.uuid;
                            var _spanHeader = $('.gift-wrap-header[data-lineUUID="' + _lineUUID + '"]');
                            $('.line-item-gift-wrapping-form[data-lineUUID="' + _lineUUID + '"]').toggleClass('hidden');
                            if (_giftWrapForm.enabled === 'true' || giftMessage != '') {
                                _spanHeader.empty();
                                _spanHeader.html(_spanHeader.attr('data-linkTextEnabled'));
                            } else {
                                _spanHeader.empty();
                                _spanHeader.html(_spanHeader.attr('data-linkTextDisabled'));
                            }
                        },
                        error: function(err) {
                            $.spinner().stop();
                        }
                    });
                }
            }).on('change', '.input-giftwrapping-enabled', function(e) {
                var lineUUID = $(this).attr("data-lineUUID");
                $('.line-item-gift-wrapping-cta[data-lineUUID="' + lineUUID + '"]').find('.js-radio-ancor').toggleClass('active');
            });
            $('body').on('click', '.line-item-gift-wrapping-preview-cta', function(e) {
                $('.giftwrapping-modal-preview .modal-body').spinner().start();
                var lineUUID = $(this).attr("data-lineUUID");
                var giftMessage = $('.textarea-giftwrapping-message[data-lineUUID="' + lineUUID + '"]').val();
                getModalHtmlElement();
                fillModalElement(giftMessage);
            });
            $('body').on('shown.bs.modal', '#id-giftwrapping-modal-preview', function(event) {
                $('body > *:not(#id-giftwrapping-modal-preview)').attr('aria-hidden', 'true');
                $('#id-giftwrapping-modal-preview .close').focus();
            }).on('hidden.bs.modal', '#id-giftwrapping-modal-preview', function(event) {
                $('body > *:not(#id-giftwrapping-modal-preview)').removeAttr('aria-hidden', 'true');
                $('.line-item-gift-wrapping-preview-cta').focus();
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = function() {
            if ($('#lc-purchase-funnel-login').length) {
                $('#show-password').on('click', function() {
                    let $button = $(this);
                    let $password = $('#login-form-password');
                    if ($button.attr('aria-label') == 'show password') {
                        $password.removeAttr('type');
                        $password.attr('type', 'text');
                        $button.attr('aria-label', 'hide password');
                    } else if ($button.attr('aria-label') == 'hide password') {
                        $password.removeAttr('type');
                        $password.attr('type', 'password');
                        $button.attr('aria-label', 'show password');
                    }
                    $button.find('span').toggleClass('hidden');
                });
            }
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var processInclude = __webpack_require__(1);
        function getModalHtmlElement() {
            if ($('#requestPasswordResetModal').length) {
                $('#requestPasswordResetModal').remove();
            }
            var ariaLabel = $('#password-reset').data('aria-label')
              , closeModal = $('#password-reset').data('close');
            var htmlString = '<div class="modal fade" id="requestPasswordResetModal" tabindex="-1" role="dialog" aria-label="' + ariaLabel + '">' + '<div class="modal-dialog" role="document">' + '<div class="modal-content"">' + '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;<span class="sr-only">' + closeModal + '</span></span></button>' + '<div class="modal-header">' + '<h1 class="modal-title request-password-title fs-5xl"></h1>' + '</div>' + '<div class="modal-body text-left">' + '</div>' + '</div>' + '</div>' + '</div>';
            $('body').append(htmlString);
        }
        function parseHtml(html) {
            var $html = $('<div>').append($.parseHTML(html));
            var header = $html.find('.rp-title .request-password-title').html();
            var body = $html.find('.rp-form').children();
            return {
                body: body,
                header: header
            };
        }
        function fillModalElement(modalHref) {
            var $form = $('#requestPasswordResetModal #email-form');
            $('.modal-body').spinner().start();
            $.ajax({
                url: modalHref,
                method: 'GET',
                dataType: 'html',
                success: function(html) {
                    var parsedHtml = parseHtml(html);
                    $('#requestPasswordResetModal .modal-header .modal-title').html(parsedHtml.header);
                    $('#requestPasswordResetModal .modal-body').html(parsedHtml.body);
                    $('#requestPasswordResetModal').modal('show');
                    $.spinner().stop();
                    $('#requestPasswordResetModal button.close').focus();
                },
                error: function() {
                    $.spinner().stop();
                },
                complete: function() {
                    processInclude(__webpack_require__(7));
                }
            });
        }
        module.exports = function() {
            if ($('#password-reset').length) {
                if ($('#requestPasswordResetModal').length) {
                    $('#requestPasswordResetModal').remove();
                }
                $('#password-reset').focus();
                $('body').on('click', '#password-reset', function(e) {
                    e.preventDefault();
                    var buttonForgot = $(this);
                    var modalHref = buttonForgot.attr('href');
                    getModalHtmlElement();
                    fillModalElement(modalHref);
                }).on('hidden.bs.modal', '#requestPasswordResetModal', function(e) {
                    $('#requestPasswordResetModal').remove();
                    $('#password-reset').focus();
                    $('body > *').removeAttr('aria-hidden');
                }).on('shown.bs.modal', '#requestPasswordResetModal', function(e) {
                    $('#requestPasswordResetModal .close').focus();
                    $('body > *:not(#requestPasswordResetModal)').attr('aria-hidden', 'true');
                    $('#requestPasswordResetModal').on('click', '.send-email-btn button', function() {
                        setTimeout(function() {
                            if ($('form.login-page').length) {
                                $('.modal-content button.close').focus();
                            } else {
                                $('.request-password-body input.is-invalid').focus();
                            }
                        }, 500);
                    })
                })
                $(window).on('keydown', function(e) {
                    if (e.keyCode == '32' && !$('#requestPasswordResetModal').length && $('#password-reset').is(":focus")) {
                        $("#password-reset").trigger("click");
                    }
                })
            }
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = function() {
            var regex = {
                postal: {
                    DEFAULT: '(^\\d{5}(-\\d{4})?$)|(^[abceghjklmnprstvxyABCEGHJKLMNPRSTVXY]{1}\\d{1}[A-Za-z]{1} *\\d{1}[A-Za-z]{1}\\d{1}$)',
                    GB: '([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})',
                    LV: '(^[Ll][Vv][- ]{0,1}\\d{4}$)'
                }
            };
            if ($('.form-country-indicatif').length) {
                var $registrationFormStates = $('.form-states-indicatif');
                var $registrationFormProvinces = $('.form-provinces-indicatif');
                $registrationFormStates.closest('.form-group').hide();
                $registrationFormProvinces.closest('.form-group').hide();
                $registrationFormStates.prop('required', false);
                $registrationFormProvinces.prop('required', false);
                $('body').on('change', '.form-country-indicatif', function() {
                    var $select = $(this)
                      , $registrationFormPhone = $('.form-phone-indicatif')
                      , $countryValue = $select.val()
                      , $selectStateCode = $registrationFormStates.closest('.form-group')
                      , $selectProvinceCode = $registrationFormProvinces.closest('.form-group')
                      , $dataRangeError = $registrationFormPhone.data('range-error');
                    if (!$countryValue) {
                        $registrationFormPhone.val('').removeClass('not-empty');
                    } else {
                        var $countryId = $('#' + $countryValue);
                        var $countryCode = $countryId.data('indicatifid');
                        $registrationFormPhone.val('+' + $countryCode).addClass('not-empty is-invalid');
                        $registrationFormPhone.parent().find('.invalid-feedback').html($dataRangeError);
                        if ($countryValue == 'US') {
                            $selectStateCode.show();
                            $selectProvinceCode.hide();
                            $registrationFormStates.prop('required', true);
                            $registrationFormProvinces.prop('required', false).find('option:eq(0)').prop('selected', true);
                        } else if ($countryValue == 'CA') {
                            $selectProvinceCode.show();
                            $selectStateCode.hide();
                            $registrationFormProvinces.prop('required', true);
                            $registrationFormStates.prop('required', false).find('option:eq(0)').prop('selected', true);
                        } else if ($countryValue == 'GB') {
                            $selectStateCode.hide();
                            $selectProvinceCode.hide();
                            $registrationFormStates.prop('required', false).find('option:eq(0)').prop('selected', true);
                            $registrationFormProvinces.prop('required', false).find('option:eq(0)').prop('selected', true);
                        } else if ($countryValue == 'LV') {
                            $selectStateCode.hide();
                            $selectProvinceCode.hide();
                            $registrationFormStates.prop('required', false).find('option:eq(0)').prop('selected', true);
                            $registrationFormProvinces.prop('required', false).find('option:eq(0)').prop('selected', true);
                        } else {
                            $selectStateCode.hide();
                            $selectProvinceCode.hide();
                            $registrationFormStates.prop('required', false).find('option:eq(0)').prop('selected', true);
                            $registrationFormProvinces.prop('required', false).find('option:eq(0)').prop('selected', true);
                        }
                    }
                });
            }
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        (function() {
            $(function() {
                $(document).on('click', ".lc_accordion .accordion__header", function() {
                    var button_header = $(this).find(".accordion__button");
                    var current_li = $(this).parent();
                    $(".lc_accordion .accordion__content").each(function() {
                        var item_li = $(this).parent();
                        if (item_li.is(current_li)) {
                            if (button_header.attr("aria-expanded") == "true") {
                                button_header.attr("aria-expanded", "false");
                            } else {
                                button_header.attr("aria-expanded", "true");
                            }
                            $(this).slideToggle();
                        } else {
                            item_li.find(".accordion__header .accordion__button").attr("aria-expanded", "false");
                            $(this).slideUp();
                        }
                    });
                });
                $(document).on('click', ".accordion button.accordion__header", function(e) {
                    e.preventDefault();
                    var $btn = $(this)
                      , accordionContainer = $btn.closest(".accordion");
                    accordionContainer.find("button.accordion__header").each(function() {
                        var $this = $(this);
                        if ($this.is($btn)) {
                            ($btn.attr("aria-expanded") == "true") ? $btn.attr("aria-expanded", "false") : $btn.attr("aria-expanded", "true");
                            $this.closest("li").find(".accordion__content").toggle();
                        } else {
                            $this.attr("aria-expanded", "false");
                            $this.closest("li").find(".accordion__content").hide();
                        }
                    });
                    var marginTop = 10
                      , $headerHeight = $('header.header').height();
                    marginTop += $headerHeight;
                    $('html, body').animate({
                        scrollTop: $btn.offset().top - marginTop
                    }, {
                        duration: 500,
                    });
                });
                var flag = false;
                $('body').on('click touchstart', '.bloc-message', function() {
                    if (!flag) {
                        flag = true;
                        setTimeout(function() {
                            flag = false;
                        }, 100);
                        var $btn = $(this);
                        if ($btn.attr('aria-expanded') == 'false') {
                            $btn.attr('aria-expanded', 'true');
                        } else {
                            $btn.attr('aria-expanded', 'false');
                        }
                    }
                });
            });
        }
        )();
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = function() {
            var registrationFormStates_us = $('#registration-form-states_us');
            registrationFormStates_us.closest('.form-group').hide();
            registrationFormStates_us.prop('required', false);
            var registrationFormStates_ca = $('#registration-form-states_ca');
            registrationFormStates_ca.closest('.form-group').hide();
            registrationFormStates_ca.prop('required', false);
            var selectStateCode_us = registrationFormStates_us.closest('.form-group')
              , selectStateCode_ca = registrationFormStates_ca.closest('.form-group')
            var countrySelect = $('#registration-form-country').val();
            if (countrySelect == 'US') {
                selectStateCode_us.show();
                registrationFormStates_us.prop('required', true);
                selectStateCode_ca.hide();
                registrationFormStates_ca.prop('required', false);
            } else if (countrySelect == 'CA') {
                selectStateCode_ca.show();
                registrationFormStates_ca.prop('required', true);
                selectStateCode_us.hide();
                registrationFormStates_us.prop('required', false);
            } else {
                selectStateCode_us.hide();
                registrationFormStates_us.prop('required', false);
                selectStateCode_ca.hide();
                registrationFormStates_ca.prop('required', false);
            }
            $('body').on('change', '#registration-form-country', function() {
                var select = $(this)
                  , countryValue = select.val();
                if (countryValue == 'US') {
                    selectStateCode_us.show();
                    registrationFormStates_us.prop('required', true);
                    selectStateCode_ca.hide();
                    registrationFormStates_ca.prop('required', false);
                } else if (countryValue == 'CA') {
                    selectStateCode_ca.show();
                    registrationFormStates_ca.prop('required', true);
                    selectStateCode_us.hide();
                    registrationFormStates_us.prop('required', false);
                } else {
                    selectStateCode_us.hide();
                    registrationFormStates_us.prop('required', false);
                    selectStateCode_ca.hide();
                    registrationFormStates_ca.prop('required', false);
                }
            });
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function validateForm(event) {
            var valid = true;
            if (this.checkValidity && !this.checkValidity()) {
                valid = false;
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                }
                $(this).find('input, select, textarea').each(function() {
                    if (!this.validity.valid) {
                        $(this).trigger('invalid', this.validity);
                    }
                });
            }
            return valid;
        }
        function clearForm(form) {
            $(form).find('.form-control.is-invalid').removeClass('is-invalid');
        }
        module.exports = {
            invalid: function() {
                $('form input, form select, form textarea').on('invalid', function(e) {
                    e.preventDefault();
                    this.setCustomValidity('');
                    if (!this.validity.valid) {
                        var validationMessage = this.validationMessage;
                        $(this).addClass('is-invalid');
                        if (this.validity.patternMismatch && $(this).data('pattern-mismatch')) {
                            validationMessage = $(this).data('pattern-mismatch');
                        }
                        if ((this.validity.rangeOverflow || this.validity.rangeUnderflow) && $(this).data('range-error')) {
                            validationMessage = $(this).data('range-error');
                        }
                        if ((this.validity.tooLong || this.validity.tooShort) && $(this).data('range-error')) {
                            validationMessage = $(this).data('range-error');
                        }
                        if (this.validity.valueMissing && $(this).data('missing-error')) {
                            validationMessage = $(this).data('missing-error');
                        }
                        $(this).parents('.form-group').find('.invalid-feedback').text(validationMessage);
                    }
                });
            },
            submit: function() {
                $('form').on('submit', function(e) {
                    return validateForm.call(this, e);
                });
            },
            buttonClick: function() {
                $('form button[type="submit"], form input[type="submit"]').on('click', function() {
                    clearForm($(this).parents('form'));
                });
            },
            functions: {
                validateForm: function(form, event) {
                    validateForm.call($(form), event || null);
                },
                clearForm: clearForm
            }
        };
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = function() {
            if ($('.contact-gift-form').length) {
                let today = new Date().toISOString().substr(0, 10);
                document.querySelector(".contact-gift-form input[type='date']").value = today
                $(".contact-gift-form select#contact-gift-form-objet").change(function() {
                    var selectedOption = $(".contact-gift-form select#contact-gift-form-objet option:selected");
                    var formGift = $(".contact-gift-form select#contact-gift-form-objet option:selected").parents('.contact-gift-form');
                    selectedOption.each(function() {
                        if (selectedOption.data("id") == '9') {
                            formGift.find('#contact-gift-form-messageText').removeAttr('disabled')
                        } else {
                            formGift.find('#contact-gift-form-messageText').attr('disabled', 'disabled')
                        }
                    });
                })
            }
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function getModalHtmlElement() {
            if ($('#print-modal-preview').length !== 0) {
                $('#print-modal-preview').remove();
            }
            var dataBill = $('.container-popup-print').data('label')
              , logoUrl = $('.container-popup-print').data('logo')
              , ctaPrint = $('.container-popup-print').data('print')
              , linkPrint = $('.container-popup-print .print-popup-cta').data('url')
              , htmlString = '<div class="modal fade print-modal-preview modal--gamma" id="print-modal-preview" tabindex="-1" role="dialog" aria-label="' + dataBill + '">' + '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">' + '<div class="modal-content bg-gray-gamma simple-animated-modal__content" aria-hidden="true">' + '<div class="modal-header p-0">' + '<button type="button" class="close z-3 simple-animated-modal-close" data-dismiss="modal" aria-label="Close">' + '<span aria-hidden="true">X</span><span class="sr-only"></span>' + '</button>' + '<div class="full-width txt-c modal-title simple-animated-modal-title" id="previewModalLabel">' + '<svg class="symbol" aria-hidden="true">' + '<use xlink:href="' + logoUrl + '"></use>' + '</svg>' + '</div>' + '</div>' + '<div class="modal-body p-0 d-block">' + '<div class="overflow-auto">' + '<div class="print-card-container full-width txt-l fs-s p-02 pt-0 pb-0 min-width-650">' + '</div>' + '</div>' + '<a href="' + linkPrint + '" target="_blank" class="c-btn c-btn--alpha c-btn--alpha-reverse c-btn--s upper mt-04 mb-02 d-block c-btn--max--200  ml-auto mr-auto print">' + ctaPrint + '</a>'
            '</div>' + '</div>' + '</div>' + '</div>';
            $('body').append(htmlString);
        }
        function parseHtml(html) {
            var $html = $('<div>').append($.parseHTML(html));
            var body = $html.find('.print-card-container').children();
            return {
                body: body
            };
        }
        function fillModalElement(urlHref) {
            $('.print-modal-preview .modal-body').spinner().start();
            $.ajax({
                url: urlHref,
                type: 'GET',
                dataType: 'html',
                success: function(html) {
                    var parsedHtml = parseHtml(html);
                    $('#print-modal-preview .modal-title').html(parsedHtml.header);
                    $('#print-modal-preview .print-card-container ').html(parsedHtml.body);
                    $('#print-modal-preview').modal('show');
                    $.spinner().stop();
                    $('#print-modal-preview button.close').focus();
                    $('#print-modal-preview *').attr('aria-hidden', 'true');
                },
                error: function(err) {
                    $.spinner().stop();
                }
            });
        }
        module.exports = function() {
            $('body').on('click', '.print-popup-cta', function(e) {
                var table = $('.container-popup-print .table-product-container').clone();
                var urlHref = $(this).data('url');
                $('.print-modal-preview .modal-body').spinner().start();
                getModalHtmlElement();
                fillModalElement(urlHref);
                $('.print-modal-preview .print-card-container .table-product-container').remove()
                table.insertAfter('.print-modal-preview .currency')
            }).on('hide.bs.modal', '#print-modal-preview', function() {
                $(this).remove();
                $('.print-popup-cta').focus();
            });
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function fillModalElement(url) {
            $('.modal-body').spinner().start();
            var $modal = $('#countryPopupModal');
            $.ajax({
                url: url,
                method: 'GET',
                dataType: 'html',
                success: function(html) {
                    $modal.find('.modal-body').empty();
                    $modal.find('.modal-body').html(html);
                    $modal.modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                    $modal.modal('show');
                    $.spinner().stop();
                },
                error: function() {
                    $.spinner().stop();
                }
            });
        }
        function getModalHtmlElement() {
            if ($('#countryPopupModal').length !== 0) {
                $('#countryPopupModal').remove();
            }
            var htmlString = '<!-- Modal -->' + '<div class="modal fade modal--alpha" id="countryPopupModal" tabindex="-1" role="dialog" aria-labelledby="storeModalLabel">' + '<div class="modal-dialog modal-dialog-centered modal-big" role="document">' + '<div class="modal-content simple-animated-modal__content">' + '<div class="">' + '  <button type="button" class="close modal--alpha simple-animated-modal-close" aria-label="Close"><span aria-hidden="true">X</span></button>' + '</div>' + '<div class="modal-body no-padding--s"></div>' + '</div>' + '</div>' + '</div>';
            $('body').append(htmlString);
        }
        module.exports = function() {
            var $el = $('.page[data-istransactional=false]');
            if ($el.length) {
                getModalHtmlElement();
                fillModalElement($el.data('countryselectorurl'));
            }
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        var cookieHint = __webpack_require__(53);
        $(document).ready(function() {
            $('.editCookies').on('click', function() {
                cookieHint.init();
            });
            cookieHint.init();
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    (function($) {
        function getModalHtmlElement(html) {
            if ($('#cookiePopupModal').length !== 0) {
                $('#cookiePopupModal').remove();
            }
            var htmlString = '<!-- Modal -->' + '<div class="modal fade modal--cookie " id="cookiePopupModal" tabindex="-1" role="dialog">' + '<div class="modal-dialog mt-05 mb-05" role="document">' + '<div class="modal-content simple-animated-modal__content">' + '<div class="modal-body no-padding--s">' + html + '</div>' + '</div>' + '</div>' + '</div>';
            $('body').append(htmlString);
            var $modal = $('#cookiePopupModal');
            $modal.modal('show');
        }
        var cookiehint = {
            init: function() {
                cookiehint.datas.init();
                if (cookiehint.datas.dw_accepted === true) {
                    return;
                }
                if ($('.privacy-policy').length === 0) {
                    var cookieUrl = $('.page').data('cookieurl');
                    $.ajax({
                        url: cookieUrl,
                        dataType: "json",
                        success: function(response) {
                            if (!response.cookiePopupActive) {
                                cookiehint.datas.insert();
                                return;
                            }
                            $.spinner().start();
                            getModalHtmlElement(response.popupHtml);
                            $('#cookiePopupModal').on('hide.bs.modal', function(e) {
                                $('.modal--cookie').remove();
                            });
                            $('#FunctionnalCookies').prop('checked', 'checked');
                            $('.setCookiePreferences').on('click', function() {
                                $('.step1 , .step2').toggle();
                            });
                            $('.backLink').on('click', function() {
                                $('.step1 , .step2').toggle();
                            });
                            $('.privacy_policy_message_box .form__field--checkbox').each(function() {
                                var checkbox = $('.privacy_policy_message_box .form__field--checkbox');
                                $(this).on('click', function(e) {
                                    checkbox.find('p').hide();
                                    $(this).find('p').show();
                                });
                            });
                            $('.privacy_policy_link .accept').on('click', function() {
                                cookiehint.datas.insert();
                            });
                            $('.privacy_policy_actions .save').unbind().click(function(e) {
                                cookiehint.datas.delete();
                                $('#cookiesForm').find('input').each(function(index, value) {
                                    var $checkbox = $(this);
                                    if ($checkbox.is(':checked')) {
                                        var currentInputId = $checkbox.attr('id');
                                        switch (currentInputId) {
                                        case 'FunctionnalCookies':
                                            cookiehint.datas.insert({
                                                'functionnal': true
                                            });
                                            break;
                                        case 'StatisticAnalysisCookies':
                                            cookiehint.datas.insert({
                                                'google': true
                                            });
                                            break;
                                        case 'LongchampExperience':
                                            break;
                                        }
                                    }
                                });
                                var $modal = $('#cookiePopupModal');
                                $modal.modal('hide');
                                return;
                            });
                            $.spinner().stop();
                        }
                    });
                }
            },
            'datas': {
                'dw': false,
                'dw_accepted': false,
                'dw_google_accepted': false,
                'country_data': null,
                'dw_country_data': null,
                'init': function() {
                    this.dw = cookiehint.getCookie("dw") == "1" ? true : false;
                    this.dw_accepted = cookiehint.getCookie("dw_cookies_accepted") == "1" ? true : false;
                    this.dw_google_accepted = cookiehint.getCookie("dw_google_cookie_accepted") == "1" ? true : false;
                    this.country_data = cookiehint.getCookie('country_data').split('~');
                    this.dw_country_data = cookiehint.getCookie('dw_country_data').split('~');
                    this.dw_country_data_isvalid = this.country_data.length && this.dw_country_data.length && this.country_data[0] == this.dw_country_data[0];
                },
                'insert': function(args) {
                    if (typeof (args) === 'undefined')
                        args = {
                            'functionnal': true,
                            'google': true
                        };
                    if (args.functionnal) {
                        cookiehint.setCookie("dw", "1", 7);
                        cookiehint.setCookie("dw_cookies_accepted", "1", 7);
                        cookiehint.setCookie("dw_country_data", this.country_data.join('~'), 7);
                    }
                    if (args.google) {
                        cookiehint.setCookie("dw_google_cookie_accepted", "1", 7);
                    }
                    this.init();
                },
                'delete': function(args) {
                    if (typeof (args) === 'undefined')
                        args = {
                            'functionnal': true,
                            'google': true
                        };
                    if (args.functionnal) {
                        cookiehint.deleteCookie('dw');
                        cookiehint.deleteCookie('dw_cookies_accepted');
                        cookiehint.deleteCookie('dw_country_data');
                    }
                    if (args.google) {
                        cookiehint.deleteCookie('dw_facebook_cookie_accepted');
                    }
                    this.init();
                }
            },
            'deleteCookie': function(cname) {
                var d = new Date();
                d.setTime(d.getTime() - (1000 * 60 * 60 * 24));
                var expires = "expires=" + d.toGMTString();
                window.document.cookie = cname + "=" + "; " + expires + ";path=/";
            },
            'setCookie': function(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            },
            'getCookie': function(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
        };
        module.exports = cookiehint;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = {
            clickSearchGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', 'li.header_top_nav--search', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.HEADER_EVENT_SEARCH_LINK]);
                    });
                }
            },
            clickCartGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', 'li.header_top_nav--minicart', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.HEADER_EVENT_CART_CLICK]);
                    });
                }
            },
            clickLogoGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', 'li.header__logo sgv.symbol', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.HEADER_EVENT_LOGO_CLICK]);
                    });
                }
            },
            clickFindStoreGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', 'li.header_top_nav--pdv a', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.HEADER_EVENT_FIND_STORE_CLICK]);
                    });
                }
            },
            clickAccountGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', 'li.header_top_nav--account', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.HEADER_EVENT_ACCOUNT_CLICK]);
                    });
                }
            },
            clickSignInGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', 'a.js-header-sign-in', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.HEADER_EVENT_SIGN_IN_CLICK]);
                    });
                }
            },
            clickCreateAccountGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', 'a.js-header-create-account', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.HEADER_EVENT_ACCOUNT_CREATE_CLICK]);
                    });
                }
            },
            clickFacebookGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', '#symbol-social-facebook', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.FOOTER_EVENT_FACEBOOK]);
                    });
                }
            },
            clickInstagramGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', '#symbol-social-instagram', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.FOOTER_EVENT_INSTAGRAM]);
                    });
                }
            },
            clickPinterestGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', '#symbol-social-pinterest', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.FOOTER_EVENT_PINTEREST]);
                    });
                }
            },
            clicksubscribeNewsletterGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $(document).on('click', 'button.newsletter-subscribe--submit', function() {
                        dataLayer.push(dataLayerEvents[GTMConstants.FOOTER_EVENT_NEWSLETTER]);
                    });
                }
            },
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        module.exports = {
            setGiftGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $('body').on('click', '.cart-page .line-item-gift-wrapping-cta', function(e) {
                        dataLayer.push(dataLayerEvents[GTMConstants.CART_EVENT_GIFT]);
                    });
                }
            },
            removeItemGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $('body').on('click', '.cart-page .remove-product', function(e) {
                        dataLayer.push(dataLayerEvents[GTMConstants.CART_EVENT_REMOVE]);
                    });
                }
            },
            clickPaymentGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $('body').on('click', '.checkout-btn', function(e) {
                        dataLayer.push(dataLayerEvents[GTMConstants.CART_EVENT_PAYMENT]);
                    });
                }
            },
            editCartGtmEvent: function() {
                if (typeof dataLayer !== 'undefined') {
                    $('body').on('click', '.cart-page .product-edit .edit', function(e) {
                        dataLayer.push(dataLayerEvents[GTMConstants.CART_EVENT_EDIT]);
                    });
                }
            }
        }
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    __webpack_require__(57);
    __webpack_require__(58);
    __webpack_require__(59);
}
), (function(module, exports, __webpack_require__) {
    (function($, Util) {
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value"in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var Alert = function($) {
            var NAME = 'alert';
            var VERSION = '4.0.0';
            var DATA_KEY = 'bs.alert';
            var EVENT_KEY = "." + DATA_KEY;
            var DATA_API_KEY = '.data-api';
            var JQUERY_NO_CONFLICT = $.fn[NAME];
            var TRANSITION_DURATION = 150;
            var Selector = {
                DISMISS: '[data-dismiss="alert"]'
            };
            var Event = {
                CLOSE: "close" + EVENT_KEY,
                CLOSED: "closed" + EVENT_KEY,
                CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
            };
            var ClassName = {
                ALERT: 'alert',
                FADE: 'fade',
                SHOW: 'show'
            };
            var Alert = function() {
                function Alert(element) {
                    this._element = element;
                }
                var _proto = Alert.prototype;
                _proto.close = function close(element) {
                    element = element || this._element;
                    var rootElement = this._getRootElement(element);
                    var customEvent = this._triggerCloseEvent(rootElement);
                    if (customEvent.isDefaultPrevented()) {
                        return;
                    }
                    this._removeElement(rootElement);
                }
                ;
                _proto.dispose = function dispose() {
                    $.removeData(this._element, DATA_KEY);
                    this._element = null;
                }
                ;
                _proto._getRootElement = function _getRootElement(element) {
                    var selector = Util.getSelectorFromElement(element);
                    var parent = false;
                    if (selector) {
                        parent = $(selector)[0];
                    }
                    if (!parent) {
                        parent = $(element).closest("." + ClassName.ALERT)[0];
                    }
                    return parent;
                }
                ;
                _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
                    var closeEvent = $.Event(Event.CLOSE);
                    $(element).trigger(closeEvent);
                    return closeEvent;
                }
                ;
                _proto._removeElement = function _removeElement(element) {
                    var _this = this;
                    $(element).removeClass(ClassName.SHOW);
                    if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
                        this._destroyElement(element);
                        return;
                    }
                    $(element).one(Util.TRANSITION_END, function(event) {
                        return _this._destroyElement(element, event);
                    }).emulateTransitionEnd(TRANSITION_DURATION);
                }
                ;
                _proto._destroyElement = function _destroyElement(element) {
                    $(element).detach().trigger(Event.CLOSED).remove();
                }
                ;
                Alert._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function() {
                        var $element = $(this);
                        var data = $element.data(DATA_KEY);
                        if (!data) {
                            data = new Alert(this);
                            $element.data(DATA_KEY, data);
                        }
                        if (config === 'close') {
                            data[config](this);
                        }
                    });
                }
                ;
                Alert._handleDismiss = function _handleDismiss(alertInstance) {
                    return function(event) {
                        if (event) {
                            event.preventDefault();
                        }
                        alertInstance.close(this);
                    }
                    ;
                }
                ;
                _createClass(Alert, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }]);
                return Alert;
            }();
            $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
            $.fn[NAME] = Alert._jQueryInterface;
            $.fn[NAME].Constructor = Alert;
            $.fn[NAME].noConflict = function() {
                $.fn[NAME] = JQUERY_NO_CONFLICT;
                return Alert._jQueryInterface;
            }
            ;
            return Alert;
        }($);
    }
    .call(this, __webpack_require__(0), __webpack_require__(2)))
}
), (function(module, exports, __webpack_require__) {
    (function($, Util) {
        function _extends() {
            _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            }
            ;
            return _extends.apply(this, arguments);
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value"in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var Modal = function($) {
            var NAME = 'modal';
            var VERSION = '4.0.0';
            var DATA_KEY = 'bs.modal';
            var EVENT_KEY = "." + DATA_KEY;
            var DATA_API_KEY = '.data-api';
            var JQUERY_NO_CONFLICT = $.fn[NAME];
            var TRANSITION_DURATION = 300;
            var BACKDROP_TRANSITION_DURATION = 150;
            var ESCAPE_KEYCODE = 27;
            var Default = {
                backdrop: true,
                keyboard: true,
                focus: true,
                show: true
            };
            var DefaultType = {
                backdrop: '(boolean|string)',
                keyboard: 'boolean',
                focus: 'boolean',
                show: 'boolean'
            };
            var Event = {
                HIDE: "hide" + EVENT_KEY,
                HIDDEN: "hidden" + EVENT_KEY,
                SHOW: "show" + EVENT_KEY,
                SHOWN: "shown" + EVENT_KEY,
                FOCUSIN: "focusin" + EVENT_KEY,
                RESIZE: "resize" + EVENT_KEY,
                CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
                KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
                MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
                CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
            };
            var ClassName = {
                SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
                BACKDROP: 'modal-backdrop',
                OPEN: 'modal-open',
                FADE: 'fade',
                SHOW: 'show'
            };
            var Selector = {
                DIALOG: '.modal-dialog',
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
                STICKY_CONTENT: '.sticky-top',
                NAVBAR_TOGGLER: '.navbar-toggler'
            };
            var Modal = function() {
                function Modal(element, config) {
                    this._config = this._getConfig(config);
                    this._element = element;
                    this._dialog = $(element).find(Selector.DIALOG)[0];
                    this._backdrop = null;
                    this._isShown = false;
                    this._isBodyOverflowing = false;
                    this._ignoreBackdropClick = false;
                    this._originalBodyPadding = 0;
                    this._scrollbarWidth = 0;
                }
                var _proto = Modal.prototype;
                _proto.toggle = function toggle(relatedTarget) {
                    return this._isShown ? this.hide() : this.show(relatedTarget);
                }
                ;
                _proto.show = function show(relatedTarget) {
                    var _this = this;
                    if (this._isTransitioning || this._isShown) {
                        return;
                    }
                    if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                        this._isTransitioning = true;
                    }
                    var showEvent = $.Event(Event.SHOW, {
                        relatedTarget: relatedTarget
                    });
                    $(this._element).trigger(showEvent);
                    if (this._isShown || showEvent.isDefaultPrevented()) {
                        return;
                    }
                    this._isShown = true;
                    this._checkScrollbar();
                    this._setScrollbar();
                    this._adjustDialog();
                    $(document.body).addClass(ClassName.OPEN);
                    this._setEscapeEvent();
                    this._setResizeEvent();
                    $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function(event) {
                        return _this.hide(event);
                    });
                    $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function() {
                        $(_this._element).one(Event.MOUSEUP_DISMISS, function(event) {
                            if ($(event.target).is(_this._element)) {
                                _this._ignoreBackdropClick = true;
                            }
                        });
                    });
                    this._showBackdrop(function() {
                        return _this._showElement(relatedTarget);
                    });
                }
                ;
                _proto.hide = function hide(event) {
                    var _this2 = this;
                    if (event) {
                        event.preventDefault();
                    }
                    if (this._isTransitioning || !this._isShown) {
                        return;
                    }
                    var hideEvent = $.Event(Event.HIDE);
                    $(this._element).trigger(hideEvent);
                    if (!this._isShown || hideEvent.isDefaultPrevented()) {
                        return;
                    }
                    this._isShown = false;
                    var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
                    if (transition) {
                        this._isTransitioning = true;
                    }
                    this._setEscapeEvent();
                    this._setResizeEvent();
                    $(document).off(Event.FOCUSIN);
                    $(this._element).removeClass(ClassName.SHOW);
                    $(this._element).off(Event.CLICK_DISMISS);
                    $(this._dialog).off(Event.MOUSEDOWN_DISMISS);
                    if (transition) {
                        $(this._element).one(Util.TRANSITION_END, function(event) {
                            return _this2._hideModal(event);
                        }).emulateTransitionEnd(TRANSITION_DURATION);
                    } else {
                        this._hideModal();
                    }
                }
                ;
                _proto.dispose = function dispose() {
                    $.removeData(this._element, DATA_KEY);
                    $(window, document, this._element, this._backdrop).off(EVENT_KEY);
                    this._config = null;
                    this._element = null;
                    this._dialog = null;
                    this._backdrop = null;
                    this._isShown = null;
                    this._isBodyOverflowing = null;
                    this._ignoreBackdropClick = null;
                    this._scrollbarWidth = null;
                }
                ;
                _proto.handleUpdate = function handleUpdate() {
                    this._adjustDialog();
                }
                ;
                _proto._getConfig = function _getConfig(config) {
                    config = _extends({}, Default, config);
                    Util.typeCheckConfig(NAME, config, DefaultType);
                    return config;
                }
                ;
                _proto._showElement = function _showElement(relatedTarget) {
                    var _this3 = this;
                    var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);
                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                        document.body.appendChild(this._element);
                    }
                    this._element.style.display = 'block';
                    this._element.removeAttribute('aria-hidden');
                    this._element.scrollTop = 0;
                    if (transition) {
                        Util.reflow(this._element);
                    }
                    $(this._element).addClass(ClassName.SHOW);
                    if (this._config.focus) {
                        this._enforceFocus();
                    }
                    var shownEvent = $.Event(Event.SHOWN, {
                        relatedTarget: relatedTarget
                    });
                    var transitionComplete = function transitionComplete() {
                        if (_this3._config.focus) {
                            _this3._element.focus();
                        }
                        _this3._isTransitioning = false;
                        $(_this3._element).trigger(shownEvent);
                    };
                    if (transition) {
                        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
                    } else {
                        transitionComplete();
                    }
                }
                ;
                _proto._enforceFocus = function _enforceFocus() {
                    var _this4 = this;
                    $(document).off(Event.FOCUSIN).on(Event.FOCUSIN, function(event) {
                        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
                            _this4._element.focus();
                        }
                    });
                }
                ;
                _proto._setEscapeEvent = function _setEscapeEvent() {
                    var _this5 = this;
                    if (this._isShown && this._config.keyboard) {
                        $(this._element).on(Event.KEYDOWN_DISMISS, function(event) {
                            if (event.which === ESCAPE_KEYCODE) {
                                event.preventDefault();
                                _this5.hide();
                            }
                        });
                    } else if (!this._isShown) {
                        $(this._element).off(Event.KEYDOWN_DISMISS);
                    }
                }
                ;
                _proto._setResizeEvent = function _setResizeEvent() {
                    var _this6 = this;
                    if (this._isShown) {
                        $(window).on(Event.RESIZE, function(event) {
                            return _this6.handleUpdate(event);
                        });
                    } else {
                        $(window).off(Event.RESIZE);
                    }
                }
                ;
                _proto._hideModal = function _hideModal() {
                    var _this7 = this;
                    this._element.style.display = 'none';
                    this._element.setAttribute('aria-hidden', true);
                    this._isTransitioning = false;
                    this._showBackdrop(function() {
                        $(document.body).removeClass(ClassName.OPEN);
                        _this7._resetAdjustments();
                        _this7._resetScrollbar();
                        $(_this7._element).trigger(Event.HIDDEN);
                    });
                }
                ;
                _proto._removeBackdrop = function _removeBackdrop() {
                    if (this._backdrop) {
                        $(this._backdrop).remove();
                        this._backdrop = null;
                    }
                }
                ;
                _proto._showBackdrop = function _showBackdrop(callback) {
                    var _this8 = this;
                    var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';
                    if (this._isShown && this._config.backdrop) {
                        var doAnimate = Util.supportsTransitionEnd() && animate;
                        this._backdrop = document.createElement('div');
                        this._backdrop.className = ClassName.BACKDROP;
                        if (animate) {
                            $(this._backdrop).addClass(animate);
                        }
                        $(this._backdrop).appendTo(document.body);
                        $(this._element).on(Event.CLICK_DISMISS, function(event) {
                            if (_this8._ignoreBackdropClick) {
                                _this8._ignoreBackdropClick = false;
                                return;
                            }
                            if (event.target !== event.currentTarget) {
                                return;
                            }
                            if (_this8._config.backdrop === 'static') {
                                _this8._element.focus();
                            } else {
                                _this8.hide();
                            }
                        });
                        if (doAnimate) {
                            Util.reflow(this._backdrop);
                        }
                        $(this._backdrop).addClass(ClassName.SHOW);
                        if (!callback) {
                            return;
                        }
                        if (!doAnimate) {
                            callback();
                            return;
                        }
                        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                    } else if (!this._isShown && this._backdrop) {
                        $(this._backdrop).removeClass(ClassName.SHOW);
                        var callbackRemove = function callbackRemove() {
                            _this8._removeBackdrop();
                            if (callback) {
                                callback();
                            }
                        };
                        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
                            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
                        } else {
                            callbackRemove();
                        }
                    } else if (callback) {
                        callback();
                    }
                }
                ;
                _proto._adjustDialog = function _adjustDialog() {
                    var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                    if (!this._isBodyOverflowing && isModalOverflowing) {
                        this._element.style.paddingLeft = this._scrollbarWidth + "px";
                    }
                    if (this._isBodyOverflowing && !isModalOverflowing) {
                        this._element.style.paddingRight = this._scrollbarWidth + "px";
                    }
                }
                ;
                _proto._resetAdjustments = function _resetAdjustments() {
                    this._element.style.paddingLeft = '';
                    this._element.style.paddingRight = '';
                }
                ;
                _proto._checkScrollbar = function _checkScrollbar() {
                    var rect = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
                    this._scrollbarWidth = this._getScrollbarWidth();
                }
                ;
                _proto._setScrollbar = function _setScrollbar() {
                    var _this9 = this;
                    if (this._isBodyOverflowing) {
                        $(Selector.FIXED_CONTENT).each(function(index, element) {
                            var actualPadding = $(element)[0].style.paddingRight;
                            var calculatedPadding = $(element).css('padding-right');
                            $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
                        });
                        $(Selector.STICKY_CONTENT).each(function(index, element) {
                            var actualMargin = $(element)[0].style.marginRight;
                            var calculatedMargin = $(element).css('margin-right');
                            $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
                        });
                        $(Selector.NAVBAR_TOGGLER).each(function(index, element) {
                            var actualMargin = $(element)[0].style.marginRight;
                            var calculatedMargin = $(element).css('margin-right');
                            $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
                        });
                        var actualPadding = document.body.style.paddingRight;
                        var calculatedPadding = $('body').css('padding-right');
                        $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
                    }
                }
                ;
                _proto._resetScrollbar = function _resetScrollbar() {
                    $(Selector.FIXED_CONTENT).each(function(index, element) {
                        var padding = $(element).data('padding-right');
                        if (typeof padding !== 'undefined') {
                            $(element).css('padding-right', padding).removeData('padding-right');
                        }
                    });
                    $(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function(index, element) {
                        var margin = $(element).data('margin-right');
                        if (typeof margin !== 'undefined') {
                            $(element).css('margin-right', margin).removeData('margin-right');
                        }
                    });
                    var padding = $('body').data('padding-right');
                    if (typeof padding !== 'undefined') {
                        $('body').css('padding-right', padding).removeData('padding-right');
                    }
                }
                ;
                _proto._getScrollbarWidth = function _getScrollbarWidth() {
                    var scrollDiv = document.createElement('div');
                    scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
                    document.body.appendChild(scrollDiv);
                    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
                    document.body.removeChild(scrollDiv);
                    return scrollbarWidth;
                }
                ;
                Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
                    return this.each(function() {
                        var data = $(this).data(DATA_KEY);
                        var _config = _extends({}, Modal.Default, $(this).data(), typeof config === 'object' && config);
                        if (!data) {
                            data = new Modal(this,_config);
                            $(this).data(DATA_KEY, data);
                        }
                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new TypeError("No method named \"" + config + "\"");
                            }
                            data[config](relatedTarget);
                        } else if (_config.show) {
                            data.show(relatedTarget);
                        }
                    });
                }
                ;
                _createClass(Modal, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }, {
                    key: "Default",
                    get: function get() {
                        return Default;
                    }
                }]);
                return Modal;
            }();
            $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
                var _this10 = this;
                var target;
                var selector = Util.getSelectorFromElement(this);
                if (selector) {
                    target = $(selector)[0];
                }
                var config = $(target).data(DATA_KEY) ? 'toggle' : _extends({}, $(target).data(), $(this).data());
                if (this.tagName === 'A' || this.tagName === 'AREA') {
                    event.preventDefault();
                }
                var $target = $(target).one(Event.SHOW, function(showEvent) {
                    if (showEvent.isDefaultPrevented()) {
                        return;
                    }
                    $target.one(Event.HIDDEN, function() {
                        if ($(_this10).is(':visible')) {
                            _this10.focus();
                        }
                    });
                });
                Modal._jQueryInterface.call($(target), config, this);
            });
            $.fn[NAME] = Modal._jQueryInterface;
            $.fn[NAME].Constructor = Modal;
            $.fn[NAME].noConflict = function() {
                $.fn[NAME] = JQUERY_NO_CONFLICT;
                return Modal._jQueryInterface;
            }
            ;
            return Modal;
        }($);
    }
    .call(this, __webpack_require__(0), __webpack_require__(2)))
}
), (function(module, exports, __webpack_require__) {
    (function($, Util) {
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value"in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var Tab = function($) {
            var NAME = 'tab';
            var VERSION = '4.0.0';
            var DATA_KEY = 'bs.tab';
            var EVENT_KEY = "." + DATA_KEY;
            var DATA_API_KEY = '.data-api';
            var JQUERY_NO_CONFLICT = $.fn[NAME];
            var TRANSITION_DURATION = 150;
            var Event = {
                HIDE: "hide" + EVENT_KEY,
                HIDDEN: "hidden" + EVENT_KEY,
                SHOW: "show" + EVENT_KEY,
                SHOWN: "shown" + EVENT_KEY,
                CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
            };
            var ClassName = {
                DROPDOWN_MENU: 'dropdown-menu',
                ACTIVE: 'active',
                DISABLED: 'disabled',
                FADE: 'fade',
                SHOW: 'show'
            };
            var Selector = {
                DROPDOWN: '.dropdown',
                NAV_LIST_GROUP: '.nav, .list-group',
                ACTIVE: '.active',
                ACTIVE_UL: '> li > .active',
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                DROPDOWN_TOGGLE: '.dropdown-toggle',
                DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
            };
            var Tab = function() {
                function Tab(element) {
                    this._element = element;
                }
                var _proto = Tab.prototype;
                _proto.show = function show() {
                    var _this = this;
                    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
                        return;
                    }
                    var target;
                    var previous;
                    var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
                    var selector = Util.getSelectorFromElement(this._element);
                    if (listElement) {
                        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
                        previous = $.makeArray($(listElement).find(itemSelector));
                        previous = previous[previous.length - 1];
                    }
                    var hideEvent = $.Event(Event.HIDE, {
                        relatedTarget: this._element
                    });
                    var showEvent = $.Event(Event.SHOW, {
                        relatedTarget: previous
                    });
                    if (previous) {
                        $(previous).trigger(hideEvent);
                    }
                    $(this._element).trigger(showEvent);
                    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
                        return;
                    }
                    if (selector) {
                        target = $(selector)[0];
                    }
                    this._activate(this._element, listElement);
                    var complete = function complete() {
                        var hiddenEvent = $.Event(Event.HIDDEN, {
                            relatedTarget: _this._element
                        });
                        var shownEvent = $.Event(Event.SHOWN, {
                            relatedTarget: previous
                        });
                        $(previous).trigger(hiddenEvent);
                        $(_this._element).trigger(shownEvent);
                    };
                    if (target) {
                        this._activate(target, target.parentNode, complete);
                    } else {
                        complete();
                    }
                }
                ;
                _proto.dispose = function dispose() {
                    $.removeData(this._element, DATA_KEY);
                    this._element = null;
                }
                ;
                _proto._activate = function _activate(element, container, callback) {
                    var _this2 = this;
                    var activeElements;
                    if (container.nodeName === 'UL') {
                        activeElements = $(container).find(Selector.ACTIVE_UL);
                    } else {
                        activeElements = $(container).children(Selector.ACTIVE);
                    }
                    var active = activeElements[0];
                    var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);
                    var complete = function complete() {
                        return _this2._transitionComplete(element, active, callback);
                    };
                    if (active && isTransitioning) {
                        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
                    } else {
                        complete();
                    }
                }
                ;
                _proto._transitionComplete = function _transitionComplete(element, active, callback) {
                    if (active) {
                        $(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
                        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];
                        if (dropdownChild) {
                            $(dropdownChild).removeClass(ClassName.ACTIVE);
                        }
                        if (active.getAttribute('role') === 'tab') {
                            active.setAttribute('aria-selected', false);
                        }
                    }
                    $(element).addClass(ClassName.ACTIVE);
                    if (element.getAttribute('role') === 'tab') {
                        element.setAttribute('aria-selected', true);
                    }
                    Util.reflow(element);
                    $(element).addClass(ClassName.SHOW);
                    if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
                        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
                        if (dropdownElement) {
                            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
                        }
                        element.setAttribute('aria-expanded', true);
                    }
                    if (callback) {
                        callback();
                    }
                }
                ;
                Tab._jQueryInterface = function _jQueryInterface(config) {
                    return this.each(function() {
                        var $this = $(this);
                        var data = $this.data(DATA_KEY);
                        if (!data) {
                            data = new Tab(this);
                            $this.data(DATA_KEY, data);
                        }
                        if (typeof config === 'string') {
                            if (typeof data[config] === 'undefined') {
                                throw new TypeError("No method named \"" + config + "\"");
                            }
                            data[config]();
                        }
                    });
                }
                ;
                _createClass(Tab, null, [{
                    key: "VERSION",
                    get: function get() {
                        return VERSION;
                    }
                }]);
                return Tab;
            }();
            $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function(event) {
                event.preventDefault();
                Tab._jQueryInterface.call($(this), 'show');
            });
            $.fn[NAME] = Tab._jQueryInterface;
            $.fn[NAME].Constructor = Tab;
            $.fn[NAME].noConflict = function() {
                $.fn[NAME] = JQUERY_NO_CONFLICT;
                return Tab._jQueryInterface;
            }
            ;
            return Tab;
        }($);
    }
    .call(this, __webpack_require__(0), __webpack_require__(2)))
}
), (function(module, exports, __webpack_require__) {
    "use strict";
    (function($) {
        function addSpinner($target) {
            var $veil = $('<div class="veil"><div class="underlay"></div></div>');
            $veil.append('<div class="spinner"><div class="ring"></div></div>');
            if ($target.get(0).tagName === 'IMG') {
                $target.after($veil);
                $veil.css({
                    width: $target.width(),
                    height: $target.height()
                });
                if ($target.parent().css('position') === 'static') {
                    $target.parent().css('position', 'relative');
                }
            } else {
                $target.append($veil);
                if ($target.css('position') === 'static') {
                    $target.parent().css('position', 'relative');
                    $target.parent().addClass('veiled');
                }
                if ($target.get(0).tagName === 'BODY') {
                    $veil.find('.spinner').css('position', 'fixed');
                }
            }
            $veil.click(function(e) {
                e.stopPropagation();
            });
        }
        function removeSpinner($veil) {
            if ($veil.parent().hasClass('veiled')) {
                $veil.parent().css('position', '');
                $veil.parent().removeClass('veiled');
            }
            $veil.off('click');
            $veil.remove();
        }
        $.fn.spinner = function() {
            var $element = $(this);
            var Fn = function() {
                this.start = function() {
                    if ($element.length) {
                        addSpinner($element);
                    }
                }
                ;
                this.stop = function() {
                    if ($element.length) {
                        var $veil = $('.veil');
                        removeSpinner($veil);
                    }
                }
                ;
            };
            return new Fn();
        }
        ;
        $.spinner = function() {
            var Fn = function() {
                this.start = function() {
                    addSpinner($('body'));
                }
                ;
                this.stop = function() {
                    removeSpinner($('.veil'));
                }
                ;
            };
            return new Fn();
        }
        ;
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    (function($) {
        __webpack_require__(62);
        __webpack_require__(63);
        const sliderControls = $('.slider__controls')
          , sliderDots = $('.slider__controls__dots')
          , leftArrow = $('.slider__btn--prev')
          , rightArrow = $('.slider__btn--next');
        const homepage = $('.section--slider .slider')
          , homepageSlider = homepage.find('.list')
          , homepageSlide = homepageSlider.find('.slick-slide')
          , homepageSlideLength = homepageSlide.length
          , homepageDotBtn = homepage.find(sliderDots).find('.btn')
          , homepagePauseBtn = homepage.find(sliderControls).find('.pause')
          , homepageLeftArrow = homepage.find(leftArrow)
          , homepageRightArrow = homepage.find(rightArrow);
        const lookbook = $('.section--lookbook .slider')
          , lookCarousel = $('.look-carousel')
          , lookbookSlider = lookbook.find('.list')
          , lookbookLeftArrow = lookbook.find(leftArrow)
          , lookbookRightArrow = lookbook.find(rightArrow);
        const horizontalCarousel = $('.horizontal-carousel')
          , horizontalArrows = horizontalCarousel.find('.slick-arrow');
        const horizontal = $('.slider-horizontal')
          , horizontalSlider = horizontal.find('.list')
          , horizontalLeftArrow = horizontal.find(leftArrow)
          , horizontalRightArrow = horizontal.find(rightArrow);
        const recentlyViewed = $('.slider-recently-viewed .slider')
          , recentlyViewedSlider = recentlyViewed.find('.list')
          , recentlyViewedLeftArrow = recentlyViewed.find(leftArrow)
          , recentlyViewedRightArrow = recentlyViewed.find(rightArrow);
        const pdpPage = $('.product-media__slider')
          , topArrow = $('.product-thumb .slider__btn--prev')
          , bottomArrow = $('.product-thumb .slider__btn--next')
          , pdpLeftArrow = pdpPage.find(leftArrow)
          , pdpRightArrow = pdpPage.find(rightArrow)
          , pdpTopArrow = pdpPage.find(topArrow)
          , pdpBottomArrow = pdpPage.find(bottomArrow);
        const carouselPopin = $('.carousel-popin .slider');
        $(document).ready(function() {
            homepageSlider.slick({
                slidesToShow: 1,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 10000,
                fade: true,
                prevArrow: homepageLeftArrow,
                nextArrow: homepageRightArrow,
                cssEase: 'ease-in',
                swipe: true,
                accessibility: false,
                focusOnSelect: false,
                swipeToSlide: true,
                touchMove: true,
                speed: 250,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                adaptiveHeight: true,
                dots: true,
                dotsClass: 'slider__controls__dots list',
                appendDots: sliderControls,
                dotsPrepend: true,
                customPaging: function(slider, i) {
                    if (i == 0) {
                        return $('<button type="button" class="btn" tabindex="0" />').html('<span class="visually-hidden">Active Slide</span> ' + (i + 1));
                    } else {
                        return $('<button type="button" class="btn" tabindex="0" />').html('<span class="visually-hidden">Slide</span>' + (i + 1));
                    }
                },
            }).closest('.section--slider').find('.slider__controls').on('click', '.play', function() {
                $(this).addClass('visually-hidden').attr('tabindex', '-1').siblings('.pause').removeAttr('tabindex').removeClass('visually-hidden').focus();
                homepageSlider.slick('slickPlay');
            }).on('click', '.pause', function() {
                $(this).addClass('visually-hidden').attr('tabindex', '-1').siblings('.play').removeAttr('tabindex').removeClass('visually-hidden').focus();
                homepageSlider.slick('slickPause');
            });
            homepageSlider.find('li.slick-slide').removeAttr('aria-hidden');
            homepageSlider.find("div.slick-slide[data-slick-index = '0'] a").removeAttr('tabindex');
            $(document).on('touchstart touchend', homepageSlider, function() {
                homepageSlider.slick('slickPlay');
            });
            $(document).on('keyup', homepageDotBtn, function(event) {
                const currentSlider = homepageSlider.slick('slickCurrentSlide');
                if (event.keyCode == '13') {
                    homepageSlide.eq(currentSlider).find('a').focus();
                    homepagePauseBtn.addClass('visually-hidden').attr('tabindex', '-1').siblings('.play').removeAttr('tabindex').removeClass('visually-hidden');
                    homepageSlider.slick('slickPause');
                }
            });
            if (homepageSlider.slick('slickCurrentSlide') == 0) {
                homepageLeftArrow.find('.hidden').text('Go to last slide');
            }
            $(document).on('afterChange', homepageSlider, function() {
                const currentSlider = homepageSlider.slick('slickCurrentSlide')
                  , dotElement = homepage.find('.slider__controls__dots').find('li')
                  , prevArrow = $(this).find('.slider__arrows').children('.slider__btn--prev')
                  , nextArrow = $(this).find('.slider__arrows').children('.slider__btn--next');
                var goToNext = nextArrow.find('.sr-only').data('direction');
                var goToFirst = nextArrow.find('.sr-only').data('last');
                var goToPrev = prevArrow.find('.sr-only').data('direction');
                var goToLast = prevArrow.find('.sr-only').data('first');
                dotElement.find('.btn').blur();
                dotElement.find('.hidden').text('Slide');
                dotElement.eq(currentSlider).find('.hidden').text('Active Slide');
                prevArrow.find('.sr-only').text(goToPrev);
                nextArrow.find('.sr-only').text(goToNext);
                if (currentSlider == 0) {
                    prevArrow.find('.sr-only').text(goToLast);
                }
                if (currentSlider == (homepageSlideLength - 1)) {
                    nextArrow.find('.sr-only').text(goToFirst);
                }
                $(this).find('li.slick-slide').removeAttr('aria-hidden');
                homepageSlider.find("div.slick-slide.slick-current a").removeAttr('tabindex');
                homepageSlider.find('div.slick-slide:not(.slick-current) a').attr('tabindex', '-1');
            });
            $(document).on('click', '.section--slider .slick-arrow', function() {
                const currentSlider = homepageSlider.slick('slickCurrentSlide');
                homepageSlide.eq(currentSlider).find('a').focus();
                homepagePauseBtn.addClass('visually-hidden').attr('tabindex', '-1').siblings('.play').removeAttr('tabindex').removeClass('hidden');
                homepageSlider.slick('slickPause');
            });
            horizontalSlider.slick({
                infinite: false,
                speed: 250,
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
                focusOnSelect: false,
                prevArrow: horizontalLeftArrow,
                nextArrow: horizontalRightArrow,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }]
            });
            horizontalCarousel.slick({
                infinite: false,
                speed: 250,
                slidesToShow: 4,
                slidesToScroll: 1,
                focusOnSelect: false,
                responsive: [{
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
            $(document).on('click', horizontalArrows, function(e) {
                e.target.focus();
            });
            recentlyViewedSlider.on('init', function(event, slick) {
                recentlyViewedSlider.find('.slick-track').attr('role', 'list');
                recentlyViewedSlider.find('.slick-slide').attr('role', 'listitem');
                recentlyViewed.find('.slider__btn--next').on('keyup', function(event) {
                    if (event.keyCode == '13') {
                        recentlyViewedSlider.find('.slick-active').last().find('.product-tile').focus();
                    }
                })
                recentlyViewed.find('.slider__btn--prev').on('keyup', function(event) {
                    if (event.keyCode == '13') {
                        recentlyViewedSlider.find('.slick-active').first().find('.product-tile').focus();
                    }
                })
            });
            recentlyViewedSlider.slick({
                slidesToShow: 7,
                infinite: false,
                focusOnSelect: false,
                prevArrow: recentlyViewedLeftArrow,
                nextArrow: recentlyViewedRightArrow,
                speed: 250,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1140,
                    settings: {
                        slidesToShow: 5
                    }
                }]
            });
            lookCarousel.slick({
                slidesToShow: 3,
                initialSlide: 1,
                infinite: false,
                centerMode: true,
                prevArrow: '',
                nextArrow: '',
                focusOnSelect: true,
                responsive: [{
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }]
            });
            lookbookSlider.slick({
                slidesToShow: 3,
                infinite: false,
                centerMode: true,
                prevArrow: lookbookLeftArrow,
                nextArrow: lookbookRightArrow,
                variableWidth: true,
                initialSlide: 0,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        variableWidth: false,
                        initialSlide: 0,
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
            if ($('.product-media__inner__carousel .c-item').length > 1) {
                $('.product-thumb').removeClass('hidden');
                $('.slider__arrows').removeClass('hidden');
                $('.product-media__inner__carousel').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: pdpLeftArrow,
                    nextArrow: pdpRightArrow,
                    arrows: false,
                    fade: true,
                    accessibility: true,
                    dots: true,
                    infinite: false,
                    asNavFor: ".product-thumb__nav",
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            arrows: true
                        }
                    }]
                });
                var $thumbNav = $('.product-thumb__nav li');
                if ($thumbNav.length > 1) {
                    $('.product-thumb__nav').slick({
                        slidesToShow: 3,
                        accessibility: false,
                        slidesToScroll: 1,
                        dots: false,
                        centerMode: false,
                        vertical: true,
                        verticalSwiping: true,
                        prevArrow: pdpTopArrow,
                        nextArrow: pdpBottomArrow,
                        infinite: false,
                        responsive: [{
                            breakpoint: 1024,
                            settings: "unslick"
                        }]
                    });
                } else {
                    $('.product-thumb__nav').hide();
                }
                $('.product-thumb__nav .slick-arrow').on('click', function() {
                    $('.product-thumb__nav .slick-slide').each(function() {
                        $(this).removeClass('slick-current');
                    });
                });
                $('.product-thumb__nav .slick-slide').on('click', function() {
                    $('.product-media__inner__carousel').slick('slickGoTo', $(this).data('slick-index'));
                    $('.product-thumb__nav .slick-slide').each(function() {
                        $(this).removeClass('slick-current').find('button').attr('aria-current', 'false');
                    });
                    $(this).addClass('slick-current').find('button').attr('aria-current', 'true');
                });
            }
        });
    }
    .call(this, __webpack_require__(0)))
}
), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    ;(function(factory) {
        'use strict';
        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)],
            __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
            __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    }(function($) {
        'use strict';
        var Slick = window.Slick || {};
        Slick = (function() {
            var instanceUid = 0;
            function Slick(element, settings) {
                var _ = this, dataSettings;
                _.defaults = {
                    accessibility: true,
                    adaptiveHeight: false,
                    appendArrows: $(element),
                    appendDots: $(element),
                    arrows: true,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: false,
                    autoplaySpeed: 3000,
                    centerMode: false,
                    centerPadding: '50px',
                    cssEase: 'ease',
                    customPaging: function(slider, i) {
                        return $('<button type="button" />').text(i + 1);
                    },
                    dots: false,
                    dotsClass: 'slick-dots',
                    draggable: true,
                    easing: 'linear',
                    edgeFriction: 0.35,
                    fade: false,
                    focusOnSelect: false,
                    focusOnChange: false,
                    infinite: true,
                    initialSlide: 0,
                    lazyLoad: 'ondemand',
                    mobileFirst: false,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    pauseOnDotsHover: false,
                    respondTo: 'window',
                    responsive: null,
                    rows: 1,
                    rtl: false,
                    slide: '',
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: true,
                    swipeToSlide: false,
                    touchMove: true,
                    touchThreshold: 5,
                    useCSS: true,
                    useTransform: true,
                    variableWidth: false,
                    vertical: false,
                    verticalSwiping: false,
                    waitForAnimate: true,
                    zIndex: 1000
                };
                _.initials = {
                    animating: false,
                    dragging: false,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: false,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: false,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: false,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: false,
                    unslicked: false
                };
                $.extend(_, _.initials);
                _.activeBreakpoint = null;
                _.animType = null;
                _.animProp = null;
                _.breakpoints = [];
                _.breakpointSettings = [];
                _.cssTransitions = false;
                _.focussed = false;
                _.interrupted = false;
                _.hidden = 'hidden';
                _.paused = true;
                _.positionProp = null;
                _.respondTo = null;
                _.rowCount = 1;
                _.shouldClick = true;
                _.$slider = $(element);
                _.$slidesCache = null;
                _.transformType = null;
                _.transitionType = null;
                _.visibilityChange = 'visibilitychange';
                _.windowWidth = 0;
                _.windowTimer = null;
                dataSettings = $(element).data('slick') || {};
                _.options = $.extend({}, _.defaults, settings, dataSettings);
                _.currentSlide = _.options.initialSlide;
                _.originalSettings = _.options;
                if (typeof document.mozHidden !== 'undefined') {
                    _.hidden = 'mozHidden';
                    _.visibilityChange = 'mozvisibilitychange';
                } else if (typeof document.webkitHidden !== 'undefined') {
                    _.hidden = 'webkitHidden';
                    _.visibilityChange = 'webkitvisibilitychange';
                }
                _.autoPlay = $.proxy(_.autoPlay, _);
                _.autoPlayClear = $.proxy(_.autoPlayClear, _);
                _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
                _.changeSlide = $.proxy(_.changeSlide, _);
                _.clickHandler = $.proxy(_.clickHandler, _);
                _.selectHandler = $.proxy(_.selectHandler, _);
                _.setPosition = $.proxy(_.setPosition, _);
                _.swipeHandler = $.proxy(_.swipeHandler, _);
                _.dragHandler = $.proxy(_.dragHandler, _);
                _.keyHandler = $.proxy(_.keyHandler, _);
                _.instanceUid = instanceUid++;
                _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
                _.registerBreakpoints();
                _.init(true);
            }
            return Slick;
        }());
        Slick.prototype.activateADA = function() {
            var _ = this;
            _.$slideTrack.find('.slick-active').attr({
                'aria-hidden': 'false'
            }).find('a, input, button, select').attr({
                'tabindex': '0'
            });
        }
        ;
        Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
            var _ = this;
            if (typeof (index) === 'boolean') {
                addBefore = index;
                index = null;
            } else if (index < 0 || (index >= _.slideCount)) {
                return false;
            }
            _.unload();
            if (typeof (index) === 'number') {
                if (index === 0 && _.$slides.length === 0) {
                    $(markup).appendTo(_.$slideTrack);
                } else if (addBefore) {
                    $(markup).insertBefore(_.$slides.eq(index));
                } else {
                    $(markup).insertAfter(_.$slides.eq(index));
                }
            } else {
                if (addBefore === true) {
                    $(markup).prependTo(_.$slideTrack);
                } else {
                    $(markup).appendTo(_.$slideTrack);
                }
            }
            _.$slides = _.$slideTrack.children(this.options.slide);
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.append(_.$slides);
            _.$slides.each(function(index, element) {
                $(element).attr('data-slick-index', index);
            });
            _.$slidesCache = _.$slides;
            _.reinit();
        }
        ;
        Slick.prototype.animateHeight = function() {
            var _ = this;
            if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                _.$list.animate({
                    height: targetHeight
                }, _.options.speed);
            }
        }
        ;
        Slick.prototype.animateSlide = function(targetLeft, callback) {
            var animProps = {}
              , _ = this;
            _.animateHeight();
            if (_.options.rtl === true && _.options.vertical === false) {
                targetLeft = -targetLeft;
            }
            if (_.transformsEnabled === false) {
                if (_.options.vertical === false) {
                    _.$slideTrack.animate({
                        left: targetLeft
                    }, _.options.speed, _.options.easing, callback);
                } else {
                    _.$slideTrack.animate({
                        top: targetLeft
                    }, _.options.speed, _.options.easing, callback);
                }
            } else {
                if (_.cssTransitions === false) {
                    if (_.options.rtl === true) {
                        _.currentLeft = -(_.currentLeft);
                    }
                    $({
                        animStart: _.currentLeft
                    }).animate({
                        animStart: targetLeft
                    }, {
                        duration: _.options.speed,
                        easing: _.options.easing,
                        step: function(now) {
                            now = Math.ceil(now);
                            if (_.options.vertical === false) {
                                animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                                _.$slideTrack.css(animProps);
                            } else {
                                animProps[_.animType] = 'translate(0px,' + now + 'px)';
                                _.$slideTrack.css(animProps);
                            }
                        },
                        complete: function() {
                            if (callback) {
                                callback.call();
                            }
                        }
                    });
                } else {
                    _.applyTransition();
                    targetLeft = Math.ceil(targetLeft);
                    if (_.options.vertical === false) {
                        animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                    } else {
                        animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                    }
                    _.$slideTrack.css(animProps);
                    if (callback) {
                        setTimeout(function() {
                            _.disableTransition();
                            callback.call();
                        }, _.options.speed);
                    }
                }
            }
        }
        ;
        Slick.prototype.getNavTarget = function() {
            var _ = this
              , asNavFor = _.options.asNavFor;
            if (asNavFor && asNavFor !== null) {
                asNavFor = $(asNavFor).not(_.$slider);
            }
            return asNavFor;
        }
        ;
        Slick.prototype.asNavFor = function(index) {
            var _ = this
              , asNavFor = _.getNavTarget();
            if (asNavFor !== null && typeof asNavFor === 'object') {
                asNavFor.each(function() {
                    var target = $(this).slick('getSlick');
                    if (!target.unslicked) {
                        target.slideHandler(index, true);
                    }
                });
            }
        }
        ;
        Slick.prototype.applyTransition = function(slide) {
            var _ = this
              , transition = {};
            if (_.options.fade === false) {
                transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
            } else {
                transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
            }
            if (_.options.fade === false) {
                _.$slideTrack.css(transition);
            } else {
                _.$slides.eq(slide).css(transition);
            }
        }
        ;
        Slick.prototype.autoPlay = function() {
            var _ = this;
            _.autoPlayClear();
            if (_.slideCount > _.options.slidesToShow) {
                _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
            }
        }
        ;
        Slick.prototype.autoPlayClear = function() {
            var _ = this;
            if (_.autoPlayTimer) {
                clearInterval(_.autoPlayTimer);
            }
        }
        ;
        Slick.prototype.autoPlayIterator = function() {
            var _ = this
              , slideTo = _.currentSlide + _.options.slidesToScroll;
            if (!_.paused && !_.interrupted && !_.focussed) {
                if (_.options.infinite === false) {
                    if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
                        _.direction = 0;
                    } else if (_.direction === 0) {
                        slideTo = _.currentSlide - _.options.slidesToScroll;
                        if (_.currentSlide - 1 === 0) {
                            _.direction = 1;
                        }
                    }
                }
                _.slideHandler(slideTo);
            }
        }
        ;
        Slick.prototype.buildArrows = function() {
            var _ = this;
            if (_.options.arrows === true) {
                _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
                _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');
                if (_.slideCount > _.options.slidesToShow) {
                    _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                    _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                    if (_.htmlExpr.test(_.options.prevArrow)) {
                        _.$prevArrow.prependTo(_.options.appendArrows);
                    }
                    if (_.htmlExpr.test(_.options.nextArrow)) {
                        _.$nextArrow.appendTo(_.options.appendArrows);
                    }
                    if (_.options.infinite !== true) {
                        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    }
                } else {
                    _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });
                }
            }
        }
        ;
        Slick.prototype.buildDots = function() {
            var _ = this, i, dot;
            if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                _.$slider.addClass('slick-dotted');
                dot = $('<ul />').addClass(_.options.dotsClass);
                for (i = 0; i <= _.getDotCount(); i += 1) {
                    dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
                }
                _.$dots = dot.appendTo(_.options.appendDots);
                _.$dots.find('li').first().addClass('slick-active');
            }
        }
        ;
        Slick.prototype.buildOut = function() {
            var _ = this;
            _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
            _.slideCount = _.$slides.length;
            _.$slides.each(function(index, element) {
                $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
            });
            _.$slider.addClass('slick-slider');
            _.$slideTrack = (_.slideCount === 0) ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
            _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
            _.$slideTrack.css('opacity', 0);
            if (_.options.centerMode === true || _.options.swipeToSlide === true) {
                _.options.slidesToScroll = 1;
            }
            $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
            _.setupInfinite();
            _.buildArrows();
            _.buildDots();
            _.updateDots();
            _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
            if (_.options.draggable === true) {
                _.$list.addClass('draggable');
            }
        }
        ;
        Slick.prototype.buildRows = function() {
            var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
            newSlides = document.createDocumentFragment();
            originalSlides = _.$slider.children();
            if (_.options.rows > 0) {
                slidesPerSection = _.options.slidesPerRow * _.options.rows;
                numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
                for (a = 0; a < numOfSlides; a++) {
                    var slide = document.createElement('div');
                    for (b = 0; b < _.options.rows; b++) {
                        var row = document.createElement('div');
                        for (c = 0; c < _.options.slidesPerRow; c++) {
                            var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                            if (originalSlides.get(target)) {
                                row.appendChild(originalSlides.get(target));
                            }
                        }
                        slide.appendChild(row);
                    }
                    newSlides.appendChild(slide);
                }
                _.$slider.empty().append(newSlides);
                _.$slider.children().children().children().css({
                    'width': (100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });
            }
        }
        ;
        Slick.prototype.checkResponsive = function(initial, forceUpdate) {
            var _ = this, breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
            var sliderWidth = _.$slider.width();
            var windowWidth = window.innerWidth || $(window).width();
            if (_.respondTo === 'window') {
                respondToWidth = windowWidth;
            } else if (_.respondTo === 'slider') {
                respondToWidth = sliderWidth;
            } else if (_.respondTo === 'min') {
                respondToWidth = Math.min(windowWidth, sliderWidth);
            }
            if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
                targetBreakpoint = null;
                for (breakpoint in _.breakpoints) {
                    if (_.breakpoints.hasOwnProperty(breakpoint)) {
                        if (_.originalSettings.mobileFirst === false) {
                            if (respondToWidth < _.breakpoints[breakpoint]) {
                                targetBreakpoint = _.breakpoints[breakpoint];
                            }
                        } else {
                            if (respondToWidth > _.breakpoints[breakpoint]) {
                                targetBreakpoint = _.breakpoints[breakpoint];
                            }
                        }
                    }
                }
                if (targetBreakpoint !== null) {
                    if (_.activeBreakpoint !== null) {
                        if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                            _.activeBreakpoint = targetBreakpoint;
                            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                                _.unslick(targetBreakpoint);
                            } else {
                                _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                                if (initial === true) {
                                    _.currentSlide = _.options.initialSlide;
                                }
                                _.refresh(initial);
                            }
                            triggerBreakpoint = targetBreakpoint;
                        }
                    } else {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    if (_.activeBreakpoint !== null) {
                        _.activeBreakpoint = null;
                        _.options = _.originalSettings;
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                        triggerBreakpoint = targetBreakpoint;
                    }
                }
                if (!initial && triggerBreakpoint !== false) {
                    _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
                }
            }
        }
        ;
        Slick.prototype.changeSlide = function(event, dontAnimate) {
            var _ = this, $target = $(event.currentTarget), indexOffset, slideOffset, unevenOffset;
            if ($target.is('a')) {
                event.preventDefault();
            }
            if (!$target.is('li')) {
                $target = $target.closest('li');
            }
            unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
            indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
            switch (event.data.message) {
            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;
            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;
            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;
            default:
                return;
            }
        }
        ;
        Slick.prototype.checkNavigable = function(index) {
            var _ = this, navigables, prevNavigable;
            navigables = _.getNavigableIndexes();
            prevNavigable = 0;
            if (index > navigables[navigables.length - 1]) {
                index = navigables[navigables.length - 1];
            } else {
                for (var n in navigables) {
                    if (index < navigables[n]) {
                        index = prevNavigable;
                        break;
                    }
                    prevNavigable = navigables[n];
                }
            }
            return index;
        }
        ;
        Slick.prototype.cleanUpEvents = function() {
            var _ = this;
            if (_.options.dots && _.$dots !== null) {
                $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
                if (_.options.accessibility === true) {
                    _.$dots.off('keydown.slick', _.keyHandler);
                }
            }
            _.$slider.off('focus.slick blur.slick');
            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
                _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
                if (_.options.accessibility === true) {
                    _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                    _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
                }
            }
            _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
            _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
            _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
            _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
            _.$list.off('click.slick', _.clickHandler);
            $(document).off(_.visibilityChange, _.visibility);
            _.cleanUpSlideEvents();
            if (_.options.accessibility === true) {
                _.$list.off('keydown.slick', _.keyHandler);
            }
            if (_.options.focusOnSelect === true) {
                $(_.$slideTrack).children().off('click.slick', _.selectHandler);
            }
            $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
            $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
            $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
            $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        }
        ;
        Slick.prototype.cleanUpSlideEvents = function() {
            var _ = this;
            _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
        ;
        Slick.prototype.cleanUpRows = function() {
            var _ = this, originalSlides;
            if (_.options.rows > 0) {
                originalSlides = _.$slides.children().children();
                originalSlides.removeAttr('style');
                _.$slider.empty().append(originalSlides);
            }
        }
        ;
        Slick.prototype.clickHandler = function(event) {
            var _ = this;
            if (_.shouldClick === false) {
                event.stopImmediatePropagation();
                event.stopPropagation();
                event.preventDefault();
            }
        }
        ;
        Slick.prototype.destroy = function(refresh) {
            var _ = this;
            _.autoPlayClear();
            _.touchObject = {};
            _.cleanUpEvents();
            $('.slick-cloned', _.$slider).detach();
            if (_.$dots) {
                _.$dots.remove();
            }
            if (_.$prevArrow && _.$prevArrow.length) {
                _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.remove();
                }
            }
            if (_.$nextArrow && _.$nextArrow.length) {
                _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.remove();
                }
            }
            if (_.$slides) {
                _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function() {
                    $(this).attr('style', $(this).data('originalStyling'));
                });
                _.$slideTrack.children(this.options.slide).detach();
                _.$slideTrack.detach();
                _.$list.detach();
                _.$slider.append(_.$slides);
            }
            _.cleanUpRows();
            _.$slider.removeClass('slick-slider');
            _.$slider.removeClass('slick-initialized');
            _.$slider.removeClass('slick-dotted');
            _.unslicked = true;
            if (!refresh) {
                _.$slider.trigger('destroy', [_]);
            }
        }
        ;
        Slick.prototype.disableTransition = function(slide) {
            var _ = this
              , transition = {};
            transition[_.transitionType] = '';
            if (_.options.fade === false) {
                _.$slideTrack.css(transition);
            } else {
                _.$slides.eq(slide).css(transition);
            }
        }
        ;
        Slick.prototype.fadeSlide = function(slideIndex, callback) {
            var _ = this;
            if (_.cssTransitions === false) {
                _.$slides.eq(slideIndex).css({
                    zIndex: _.options.zIndex
                });
                _.$slides.eq(slideIndex).animate({
                    opacity: 1
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.applyTransition(slideIndex);
                _.$slides.eq(slideIndex).css({
                    opacity: 1,
                    zIndex: _.options.zIndex
                });
                if (callback) {
                    setTimeout(function() {
                        _.disableTransition(slideIndex);
                        callback.call();
                    }, _.options.speed);
                }
            }
        }
        ;
        Slick.prototype.fadeSlideOut = function(slideIndex) {
            var _ = this;
            if (_.cssTransitions === false) {
                _.$slides.eq(slideIndex).animate({
                    opacity: 0,
                    zIndex: _.options.zIndex - 2
                }, _.options.speed, _.options.easing);
            } else {
                _.applyTransition(slideIndex);
                _.$slides.eq(slideIndex).css({
                    opacity: 0,
                    zIndex: _.options.zIndex - 2
                });
            }
        }
        ;
        Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
            var _ = this;
            if (filter !== null) {
                _.$slidesCache = _.$slides;
                _.unload();
                _.$slideTrack.children(this.options.slide).detach();
                _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
                _.reinit();
            }
        }
        ;
        Slick.prototype.focusHandler = function() {
            var _ = this;
            _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function(event) {
                event.stopImmediatePropagation();
                var $sf = $(this);
                setTimeout(function() {
                    if (_.options.pauseOnFocus) {
                        _.focussed = $sf.is(':focus');
                        _.autoPlay();
                    }
                }, 0);
            });
        }
        ;
        Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
            var _ = this;
            return _.currentSlide;
        }
        ;
        Slick.prototype.getDotCount = function() {
            var _ = this;
            var breakPoint = 0;
            var counter = 0;
            var pagerQty = 0;
            if (_.options.infinite === true) {
                if (_.slideCount <= _.options.slidesToShow) {
                    ++pagerQty;
                } else {
                    while (breakPoint < _.slideCount) {
                        ++pagerQty;
                        breakPoint = counter + _.options.slidesToScroll;
                        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                }
            } else if (_.options.centerMode === true) {
                pagerQty = _.slideCount;
            } else if (!_.options.asNavFor) {
                pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
            return pagerQty - 1;
        }
        ;
        Slick.prototype.getLeft = function(slideIndex) {
            var _ = this, targetLeft, verticalHeight, verticalOffset = 0, targetSlide, coef;
            _.slideOffset = 0;
            verticalHeight = _.$slides.first().outerHeight(true);
            if (_.options.infinite === true) {
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                    coef = -1
                    if (_.options.vertical === true && _.options.centerMode === true) {
                        if (_.options.slidesToShow === 2) {
                            coef = -1.5;
                        } else if (_.options.slidesToShow === 1) {
                            coef = -2
                        }
                    }
                    verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
                }
                if (_.slideCount % _.options.slidesToScroll !== 0) {
                    if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                        if (slideIndex > _.slideCount) {
                            _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                            verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                        } else {
                            _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                            verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                        }
                    }
                }
            } else {
                if (slideIndex + _.options.slidesToShow > _.slideCount) {
                    _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                    verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
                }
            }
            if (_.slideCount <= _.options.slidesToShow) {
                _.slideOffset = 0;
                verticalOffset = 0;
            }
            if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
                _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
            } else if (_.options.centerMode === true && _.options.infinite === true) {
                _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
            } else if (_.options.centerMode === true) {
                _.slideOffset = 0;
                _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
            }
            if (_.options.vertical === false) {
                targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
            } else {
                targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
            }
            if (_.options.variableWidth === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
                }
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }
                if (_.options.centerMode === true) {
                    if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                    } else {
                        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                    }
                    if (_.options.rtl === true) {
                        if (targetSlide[0]) {
                            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                        } else {
                            targetLeft = 0;
                        }
                    } else {
                        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                    }
                    targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
                }
            }
            return targetLeft;
        }
        ;
        Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
            var _ = this;
            return _.options[option];
        }
        ;
        Slick.prototype.getNavigableIndexes = function() {
            var _ = this, breakPoint = 0, counter = 0, indexes = [], max;
            if (_.options.infinite === false) {
                max = _.slideCount;
            } else {
                breakPoint = _.options.slidesToScroll * -1;
                counter = _.options.slidesToScroll * -1;
                max = _.slideCount * 2;
            }
            while (breakPoint < max) {
                indexes.push(breakPoint);
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
            return indexes;
        }
        ;
        Slick.prototype.getSlick = function() {
            return this;
        }
        ;
        Slick.prototype.getSlideCount = function() {
            var _ = this, slidesTraversed, swipedSlide, centerOffset;
            centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
            if (_.options.swipeToSlide === true) {
                _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                    if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                        swipedSlide = slide;
                        return false;
                    }
                });
                slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
                return slidesTraversed;
            } else {
                return _.options.slidesToScroll;
            }
        }
        ;
        Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
            var _ = this;
            _.changeSlide({
                data: {
                    message: 'index',
                    index: parseInt(slide)
                }
            }, dontAnimate);
        }
        ;
        Slick.prototype.init = function(creation) {
            var _ = this;
            if (!$(_.$slider).hasClass('slick-initialized')) {
                $(_.$slider).addClass('slick-initialized');
                _.buildRows();
                _.buildOut();
                _.setProps();
                _.startLoad();
                _.loadSlider();
                _.initializeEvents();
                _.updateArrows();
                _.updateDots();
                _.checkResponsive(true);
                _.focusHandler();
            }
            if (creation) {
                _.$slider.trigger('init', [_]);
            }
            if (_.options.accessibility === true) {
                _.initADA();
            }
            if (_.options.autoplay) {
                _.paused = false;
                _.autoPlay();
            }
        }
        ;
        Slick.prototype.initADA = function() {
            var _ = this
              , numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow)
              , tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                return (val >= 0) && (val < _.slideCount);
            });
            _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
                'aria-hidden': 'true',
                'tabindex': '-1'
            }).find('a, input, button, select').attr({
                'tabindex': '-1'
            });
            if (_.$dots !== null) {
                _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                    var slideControlIndex = tabControlIndexes.indexOf(i);
                    $(this).attr({
                        'role': 'tabpanel',
                        'id': 'slick-slide' + _.instanceUid + i,
                        'tabindex': -1
                    });
                    if (slideControlIndex !== -1) {
                        var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                        if ($('#' + ariaButtonControl).length) {
                            $(this).attr({
                                'aria-describedby': ariaButtonControl
                            });
                        }
                    }
                });
                _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                    var mappedSlideIndex = tabControlIndexes[i];
                    $(this).attr({
                        'role': 'presentation'
                    });
                    $(this).find('button').first().attr({
                        'role': 'tab',
                        'id': 'slick-slide-control' + _.instanceUid + i,
                        'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                        'aria-label': (i + 1) + ' of ' + numDotGroups,
                        'aria-selected': null,
                        'tabindex': '-1'
                    });
                }).eq(_.currentSlide).find('button').attr({
                    'aria-selected': 'true',
                    'tabindex': '0'
                }).end();
            }
            for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
                if (_.options.focusOnChange) {
                    _.$slides.eq(i).attr({
                        'tabindex': '0'
                    });
                } else {
                    _.$slides.eq(i).removeAttr('tabindex');
                }
            }
            _.activateADA();
        }
        ;
        Slick.prototype.initArrowEvents = function() {
            var _ = this;
            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                _.$prevArrow.off('click.slick').on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
                _.$nextArrow.off('click.slick').on('click.slick', {
                    message: 'next'
                }, _.changeSlide);
                if (_.options.accessibility === true) {
                    _.$prevArrow.on('keydown.slick', _.keyHandler);
                    _.$nextArrow.on('keydown.slick', _.keyHandler);
                }
            }
        }
        ;
        Slick.prototype.initDotEvents = function() {
            var _ = this;
            if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                $('li', _.$dots).on('click.slick', {
                    message: 'index'
                }, _.changeSlide);
                if (_.options.accessibility === true) {
                    _.$dots.on('keydown.slick', _.keyHandler);
                }
            }
            if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
                $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
            }
        }
        ;
        Slick.prototype.initSlideEvents = function() {
            var _ = this;
            if (_.options.pauseOnHover) {
                _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
                _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
            }
        }
        ;
        Slick.prototype.initializeEvents = function() {
            var _ = this;
            _.initArrowEvents();
            _.initDotEvents();
            _.initSlideEvents();
            _.$list.on('touchstart.slick mousedown.slick', {
                action: 'start'
            }, _.swipeHandler);
            _.$list.on('touchmove.slick mousemove.slick', {
                action: 'move'
            }, _.swipeHandler);
            _.$list.on('touchend.slick mouseup.slick', {
                action: 'end'
            }, _.swipeHandler);
            _.$list.on('touchcancel.slick mouseleave.slick', {
                action: 'end'
            }, _.swipeHandler);
            _.$list.on('click.slick', _.clickHandler);
            $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
            if (_.options.accessibility === true) {
                _.$list.on('keydown.slick', _.keyHandler);
            }
            if (_.options.focusOnSelect === true) {
                $(_.$slideTrack).children().on('click.slick', _.selectHandler);
            }
            $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
            $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
            $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
            $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
            $(_.setPosition);
        }
        ;
        Slick.prototype.initUI = function() {
            var _ = this;
            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                _.$prevArrow.show();
                _.$nextArrow.show();
            }
            if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                _.$dots.show();
            }
        }
        ;
        Slick.prototype.keyHandler = function(event) {
            var _ = this;
            if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                if (event.keyCode === 37 && _.options.accessibility === true) {
                    _.changeSlide({
                        data: {
                            message: _.options.rtl === true ? 'next' : 'previous'
                        }
                    });
                } else if (event.keyCode === 39 && _.options.accessibility === true) {
                    _.changeSlide({
                        data: {
                            message: _.options.rtl === true ? 'previous' : 'next'
                        }
                    });
                }
            }
        }
        ;
        Slick.prototype.lazyLoad = function() {
            var _ = this, loadRange, cloneRange, rangeStart, rangeEnd;
            function loadImages(imagesScope) {
                $('img[data-lazy]', imagesScope).each(function() {
                    var image = $(this)
                      , imageSource = $(this).attr('data-lazy')
                      , imageSrcSet = $(this).attr('data-srcset')
                      , imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes')
                      , imageToLoad = document.createElement('img');
                    imageToLoad.onload = function() {
                        image.animate({
                            opacity: 0
                        }, 100, function() {
                            if (imageSrcSet) {
                                image.attr('srcset', imageSrcSet);
                                if (imageSizes) {
                                    image.attr('sizes', imageSizes);
                                }
                            }
                            image.attr('src', imageSource).animate({
                                opacity: 1
                            }, 200, function() {
                                image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                            });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });
                    }
                    ;
                    imageToLoad.onerror = function() {
                        image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                        _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                    }
                    ;
                    imageToLoad.src = imageSource;
                });
            }
            if (_.options.centerMode === true) {
                if (_.options.infinite === true) {
                    rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                    rangeEnd = rangeStart + _.options.slidesToShow + 2;
                } else {
                    rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                    rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
                }
            } else {
                rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
                rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
                if (_.options.fade === true) {
                    if (rangeStart > 0)
                        rangeStart--;
                    if (rangeEnd <= _.slideCount)
                        rangeEnd++;
                }
            }
            loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
            if (_.options.lazyLoad === 'anticipated') {
                var prevSlide = rangeStart - 1
                  , nextSlide = rangeEnd
                  , $slides = _.$slider.find('.slick-slide');
                for (var i = 0; i < _.options.slidesToScroll; i++) {
                    if (prevSlide < 0)
                        prevSlide = _.slideCount - 1;
                    loadRange = loadRange.add($slides.eq(prevSlide));
                    loadRange = loadRange.add($slides.eq(nextSlide));
                    prevSlide--;
                    nextSlide++;
                }
            }
            loadImages(loadRange);
            if (_.slideCount <= _.options.slidesToShow) {
                cloneRange = _.$slider.find('.slick-slide');
                loadImages(cloneRange);
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
                loadImages(cloneRange);
            } else if (_.currentSlide === 0) {
                cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
                loadImages(cloneRange);
            }
        }
        ;
        Slick.prototype.loadSlider = function() {
            var _ = this;
            _.setPosition();
            _.$slideTrack.css({
                opacity: 1
            });
            _.$slider.removeClass('slick-loading');
            _.initUI();
            if (_.options.lazyLoad === 'progressive') {
                _.progressiveLazyLoad();
            }
        }
        ;
        Slick.prototype.next = Slick.prototype.slickNext = function() {
            var _ = this;
            _.changeSlide({
                data: {
                    message: 'next'
                }
            });
        }
        ;
        Slick.prototype.orientationChange = function() {
            var _ = this;
            _.checkResponsive();
            _.setPosition();
        }
        ;
        Slick.prototype.pause = Slick.prototype.slickPause = function() {
            var _ = this;
            _.autoPlayClear();
            _.paused = true;
        }
        ;
        Slick.prototype.play = Slick.prototype.slickPlay = function() {
            var _ = this;
            _.autoPlay();
            _.options.autoplay = true;
            _.paused = false;
            _.focussed = false;
            _.interrupted = false;
        }
        ;
        Slick.prototype.postSlide = function(index) {
            var _ = this;
            if (!_.unslicked) {
                _.$slider.trigger('afterChange', [_, index]);
                _.animating = false;
                if (_.slideCount > _.options.slidesToShow) {
                    _.setPosition();
                }
                _.swipeLeft = null;
                if (_.options.autoplay) {
                    _.autoPlay();
                }
                if (_.options.accessibility === true) {
                    _.initADA();
                    if (_.options.focusOnChange) {
                        var $currentSlide = $(_.$slides.get(_.currentSlide));
                        $currentSlide.attr('tabindex', 0).focus();
                    }
                }
            }
        }
        ;
        Slick.prototype.prev = Slick.prototype.slickPrev = function() {
            var _ = this;
            _.changeSlide({
                data: {
                    message: 'previous'
                }
            });
        }
        ;
        Slick.prototype.preventDefault = function(event) {
            event.preventDefault();
        }
        ;
        Slick.prototype.progressiveLazyLoad = function(tryCount) {
            tryCount = tryCount || 1;
            var _ = this, $imgsToLoad = $('img[data-lazy]', _.$slider), image, imageSource, imageSrcSet, imageSizes, imageToLoad;
            if ($imgsToLoad.length) {
                image = $imgsToLoad.first();
                imageSource = image.attr('data-lazy');
                imageSrcSet = image.attr('data-srcset');
                imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
                imageToLoad = document.createElement('img');
                imageToLoad.onload = function() {
                    if (imageSrcSet) {
                        image.attr('srcset', imageSrcSet);
                        if (imageSizes) {
                            image.attr('sizes', imageSizes);
                        }
                    }
                    image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                    if (_.options.adaptiveHeight === true) {
                        _.setPosition();
                    }
                    _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    _.progressiveLazyLoad();
                }
                ;
                imageToLoad.onerror = function() {
                    if (tryCount < 3) {
                        setTimeout(function() {
                            _.progressiveLazyLoad(tryCount + 1);
                        }, 500);
                    } else {
                        image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
                        _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                        _.progressiveLazyLoad();
                    }
                }
                ;
                imageToLoad.src = imageSource;
            } else {
                _.$slider.trigger('allImagesLoaded', [_]);
            }
        }
        ;
        Slick.prototype.refresh = function(initializing) {
            var _ = this, currentSlide, lastVisibleIndex;
            lastVisibleIndex = _.slideCount - _.options.slidesToShow;
            if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
                _.currentSlide = lastVisibleIndex;
            }
            if (_.slideCount <= _.options.slidesToShow) {
                _.currentSlide = 0;
            }
            currentSlide = _.currentSlide;
            _.destroy(true);
            $.extend(_, _.initials, {
                currentSlide: currentSlide
            });
            _.init();
            if (!initializing) {
                _.changeSlide({
                    data: {
                        message: 'index',
                        index: currentSlide
                    }
                }, false);
            }
        }
        ;
        Slick.prototype.registerBreakpoints = function() {
            var _ = this, breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
            if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
                _.respondTo = _.options.respondTo || 'window';
                for (breakpoint in responsiveSettings) {
                    l = _.breakpoints.length - 1;
                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
                        currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                        while (l >= 0) {
                            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                                _.breakpoints.splice(l, 1);
                            }
                            l--;
                        }
                        _.breakpoints.push(currentBreakpoint);
                        _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                    }
                }
                _.breakpoints.sort(function(a, b) {
                    return (_.options.mobileFirst) ? a - b : b - a;
                });
            }
        }
        ;
        Slick.prototype.reinit = function() {
            var _ = this;
            _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
            _.slideCount = _.$slides.length;
            if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
                _.currentSlide = _.currentSlide - _.options.slidesToScroll;
            }
            if (_.slideCount <= _.options.slidesToShow) {
                _.currentSlide = 0;
            }
            _.registerBreakpoints();
            _.setProps();
            _.setupInfinite();
            _.buildArrows();
            _.updateArrows();
            _.initArrowEvents();
            _.buildDots();
            _.updateDots();
            _.initDotEvents();
            _.cleanUpSlideEvents();
            _.initSlideEvents();
            _.checkResponsive(false, true);
            if (_.options.focusOnSelect === true) {
                $(_.$slideTrack).children().on('click.slick', _.selectHandler);
            }
            _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
            _.setPosition();
            _.focusHandler();
            _.paused = !_.options.autoplay;
            _.autoPlay();
            _.$slider.trigger('reInit', [_]);
        }
        ;
        Slick.prototype.resize = function() {
            var _ = this;
            if ($(window).width() !== _.windowWidth) {
                clearTimeout(_.windowDelay);
                _.windowDelay = window.setTimeout(function() {
                    _.windowWidth = $(window).width();
                    _.checkResponsive();
                    if (!_.unslicked) {
                        _.setPosition();
                    }
                }, 50);
            }
        }
        ;
        Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
            var _ = this;
            if (typeof (index) === 'boolean') {
                removeBefore = index;
                index = removeBefore === true ? 0 : _.slideCount - 1;
            } else {
                index = removeBefore === true ? --index : index;
            }
            if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
                return false;
            }
            _.unload();
            if (removeAll === true) {
                _.$slideTrack.children().remove();
            } else {
                _.$slideTrack.children(this.options.slide).eq(index).remove();
            }
            _.$slides = _.$slideTrack.children(this.options.slide);
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.append(_.$slides);
            _.$slidesCache = _.$slides;
            _.reinit();
        }
        ;
        Slick.prototype.setCSS = function(position) {
            var _ = this, positionProps = {}, x, y;
            if (_.options.rtl === true) {
                position = -position;
            }
            x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
            y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
            positionProps[_.positionProp] = position;
            if (_.transformsEnabled === false) {
                _.$slideTrack.css(positionProps);
            } else {
                positionProps = {};
                if (_.cssTransitions === false) {
                    positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                    _.$slideTrack.css(positionProps);
                } else {
                    positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                    _.$slideTrack.css(positionProps);
                }
            }
        }
        ;
        Slick.prototype.setDimensions = function() {
            var _ = this;
            if (_.options.vertical === false) {
                if (_.options.centerMode === true) {
                    _.$list.css({
                        padding: ('0px ' + _.options.centerPadding)
                    });
                }
            } else {
                _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
                if (_.options.centerMode === true) {
                    _.$list.css({
                        padding: (_.options.centerPadding + ' 0px')
                    });
                }
            }
            _.listWidth = _.$list.width();
            _.listHeight = _.$list.height();
            if (_.options.vertical === false && _.options.variableWidth === false) {
                _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
                _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
            } else if (_.options.variableWidth === true) {
                _.$slideTrack.width(5000 * _.slideCount);
            } else {
                _.slideWidth = Math.ceil(_.listWidth);
                _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
            }
            var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
            if (_.options.variableWidth === false)
                _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
        }
        ;
        Slick.prototype.setFade = function() {
            var _ = this, targetLeft;
            _.$slides.each(function(index, element) {
                targetLeft = (_.slideWidth * index) * -1;
                if (_.options.rtl === true) {
                    $(element).css({
                        position: 'relative',
                        right: targetLeft,
                        top: 0,
                        zIndex: _.options.zIndex - 2,
                        opacity: 0
                    });
                } else {
                    $(element).css({
                        position: 'relative',
                        left: targetLeft,
                        top: 0,
                        zIndex: _.options.zIndex - 2,
                        opacity: 0
                    });
                }
            });
            _.$slides.eq(_.currentSlide).css({
                zIndex: _.options.zIndex - 1,
                opacity: 1
            });
        }
        ;
        Slick.prototype.setHeight = function() {
            var _ = this;
            if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                _.$list.css('height', targetHeight);
            }
        }
        ;
        Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
            var _ = this, l, item, option, value, refresh = false, type;
            if ($.type(arguments[0]) === 'object') {
                option = arguments[0];
                refresh = arguments[1];
                type = 'multiple';
            } else if ($.type(arguments[0]) === 'string') {
                option = arguments[0];
                value = arguments[1];
                refresh = arguments[2];
                if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
                    type = 'responsive';
                } else if (typeof arguments[1] !== 'undefined') {
                    type = 'single';
                }
            }
            if (type === 'single') {
                _.options[option] = value;
            } else if (type === 'multiple') {
                $.each(option, function(opt, val) {
                    _.options[opt] = val;
                });
            } else if (type === 'responsive') {
                for (item in value) {
                    if ($.type(_.options.responsive) !== 'array') {
                        _.options.responsive = [value[item]];
                    } else {
                        l = _.options.responsive.length - 1;
                        while (l >= 0) {
                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                                _.options.responsive.splice(l, 1);
                            }
                            l--;
                        }
                        _.options.responsive.push(value[item]);
                    }
                }
            }
            if (refresh) {
                _.unload();
                _.reinit();
            }
        }
        ;
        Slick.prototype.setPosition = function() {
            var _ = this;
            _.setDimensions();
            _.setHeight();
            if (_.options.fade === false) {
                _.setCSS(_.getLeft(_.currentSlide));
            } else {
                _.setFade();
            }
            _.$slider.trigger('setPosition', [_]);
        }
        ;
        Slick.prototype.setProps = function() {
            var _ = this
              , bodyStyle = document.body.style;
            _.positionProp = _.options.vertical === true ? 'top' : 'left';
            if (_.positionProp === 'top') {
                _.$slider.addClass('slick-vertical');
            } else {
                _.$slider.removeClass('slick-vertical');
            }
            if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
                if (_.options.useCSS === true) {
                    _.cssTransitions = true;
                }
            }
            if (_.options.fade) {
                if (typeof _.options.zIndex === 'number') {
                    if (_.options.zIndex < 3) {
                        _.options.zIndex = 3;
                    }
                } else {
                    _.options.zIndex = _.defaults.zIndex;
                }
            }
            if (bodyStyle.OTransform !== undefined) {
                _.animType = 'OTransform';
                _.transformType = '-o-transform';
                _.transitionType = 'OTransition';
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined)
                    _.animType = false;
            }
            if (bodyStyle.MozTransform !== undefined) {
                _.animType = 'MozTransform';
                _.transformType = '-moz-transform';
                _.transitionType = 'MozTransition';
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined)
                    _.animType = false;
            }
            if (bodyStyle.webkitTransform !== undefined) {
                _.animType = 'webkitTransform';
                _.transformType = '-webkit-transform';
                _.transitionType = 'webkitTransition';
                if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined)
                    _.animType = false;
            }
            if (bodyStyle.msTransform !== undefined) {
                _.animType = 'msTransform';
                _.transformType = '-ms-transform';
                _.transitionType = 'msTransition';
                if (bodyStyle.msTransform === undefined)
                    _.animType = false;
            }
            if (bodyStyle.transform !== undefined && _.animType !== false) {
                _.animType = 'transform';
                _.transformType = 'transform';
                _.transitionType = 'transition';
            }
            _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
        }
        ;
        Slick.prototype.setSlideClasses = function(index) {
            var _ = this, centerOffset, allSlides, indexOffset, remainder;
            allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
            _.$slides.eq(index).addClass('slick-current');
            if (_.options.centerMode === true) {
                var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
                centerOffset = Math.floor(_.options.slidesToShow / 2);
                if (_.options.infinite === true) {
                    if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                        _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                    } else {
                        indexOffset = _.options.slidesToShow + index;
                        allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                    }
                    if (index === 0) {
                        allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                    } else if (index === _.slideCount - 1) {
                        allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                    }
                }
                _.$slides.eq(index).addClass('slick-center');
            } else {
                if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {
                    _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                } else if (allSlides.length <= _.options.slidesToShow) {
                    allSlides.addClass('slick-active').attr('aria-hidden', 'false');
                } else {
                    remainder = _.slideCount % _.options.slidesToShow;
                    indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                    if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {
                        allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                    } else {
                        allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                    }
                }
            }
            if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
                _.lazyLoad();
            }
        }
        ;
        Slick.prototype.setupInfinite = function() {
            var _ = this, i, slideIndex, infiniteCount;
            if (_.options.fade === true) {
                _.options.centerMode = false;
            }
            if (_.options.infinite === true && _.options.fade === false) {
                slideIndex = null;
                if (_.slideCount > _.options.slidesToShow) {
                    if (_.options.centerMode === true) {
                        infiniteCount = _.options.slidesToShow + 1;
                    } else {
                        infiniteCount = _.options.slidesToShow;
                    }
                    for (i = _.slideCount; i > (_.slideCount - infiniteCount); i -= 1) {
                        slideIndex = i - 1;
                        $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                    }
                    for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                        slideIndex = i;
                        $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                    }
                    _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                        $(this).attr('id', '');
                    });
                }
            }
        }
        ;
        Slick.prototype.interrupt = function(toggle) {
            var _ = this;
            if (!toggle) {
                _.autoPlay();
            }
            _.interrupted = toggle;
        }
        ;
        Slick.prototype.selectHandler = function(event) {
            var _ = this;
            var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
            var index = parseInt(targetElement.attr('data-slick-index'));
            if (!index)
                index = 0;
            if (_.slideCount <= _.options.slidesToShow) {
                _.slideHandler(index, false, true);
                return;
            }
            _.slideHandler(index);
        }
        ;
        Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
            var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null, _ = this, navTarget;
            sync = sync || false;
            if (_.animating === true && _.options.waitForAnimate === true) {
                return;
            }
            if (_.options.fade === true && _.currentSlide === index) {
                return;
            }
            if (sync === false) {
                _.asNavFor(index);
            }
            targetSlide = index;
            targetLeft = _.getLeft(targetSlide);
            slideLeft = _.getLeft(_.currentSlide);
            _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
            if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
                if (_.options.fade === false) {
                    targetSlide = _.currentSlide;
                    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                        _.animateSlide(slideLeft, function() {
                            _.postSlide(targetSlide);
                        });
                    } else {
                        _.postSlide(targetSlide);
                    }
                }
                return;
            } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
                if (_.options.fade === false) {
                    targetSlide = _.currentSlide;
                    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                        _.animateSlide(slideLeft, function() {
                            _.postSlide(targetSlide);
                        });
                    } else {
                        _.postSlide(targetSlide);
                    }
                }
                return;
            }
            if (_.options.autoplay) {
                clearInterval(_.autoPlayTimer);
            }
            if (targetSlide < 0) {
                if (_.slideCount % _.options.slidesToScroll !== 0) {
                    animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
                } else {
                    animSlide = _.slideCount + targetSlide;
                }
            } else if (targetSlide >= _.slideCount) {
                if (_.slideCount % _.options.slidesToScroll !== 0) {
                    animSlide = 0;
                } else {
                    animSlide = targetSlide - _.slideCount;
                }
            } else {
                animSlide = targetSlide;
            }
            _.animating = true;
            _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
            oldSlide = _.currentSlide;
            _.currentSlide = animSlide;
            _.setSlideClasses(_.currentSlide);
            if (_.options.asNavFor) {
                navTarget = _.getNavTarget();
                navTarget = navTarget.slick('getSlick');
                if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                    navTarget.setSlideClasses(_.currentSlide);
                }
            }
            _.updateDots();
            _.updateArrows();
            if (_.options.fade === true) {
                if (dontAnimate !== true) {
                    _.fadeSlideOut(oldSlide);
                    _.fadeSlide(animSlide, function() {
                        _.postSlide(animSlide);
                    });
                } else {
                    _.postSlide(animSlide);
                }
                _.animateHeight();
                return;
            }
            if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                _.animateSlide(targetLeft, function() {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
        }
        ;
        Slick.prototype.startLoad = function() {
            var _ = this;
            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                _.$prevArrow.hide();
                _.$nextArrow.hide();
            }
            if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                _.$dots.hide();
            }
            _.$slider.addClass('slick-loading');
        }
        ;
        Slick.prototype.swipeDirection = function() {
            var xDist, yDist, r, swipeAngle, _ = this;
            xDist = _.touchObject.startX - _.touchObject.curX;
            yDist = _.touchObject.startY - _.touchObject.curY;
            r = Math.atan2(yDist, xDist);
            swipeAngle = Math.round(r * 180 / Math.PI);
            if (swipeAngle < 0) {
                swipeAngle = 360 - Math.abs(swipeAngle);
            }
            if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
                return (_.options.rtl === false ? 'left' : 'right');
            }
            if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
                return (_.options.rtl === false ? 'left' : 'right');
            }
            if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
                return (_.options.rtl === false ? 'right' : 'left');
            }
            if (_.options.verticalSwiping === true) {
                if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                    return 'down';
                } else {
                    return 'up';
                }
            }
            return 'vertical';
        }
        ;
        Slick.prototype.swipeEnd = function(event) {
            var _ = this, slideCount, direction;
            _.dragging = false;
            _.swiping = false;
            if (_.scrolling) {
                _.scrolling = false;
                return false;
            }
            _.interrupted = false;
            _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;
            if (_.touchObject.curX === undefined) {
                return false;
            }
            if (_.touchObject.edgeHit === true) {
                _.$slider.trigger('edge', [_, _.swipeDirection()]);
            }
            if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
                direction = _.swipeDirection();
                switch (direction) {
                case 'left':
                case 'down':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                    _.currentDirection = 0;
                    break;
                case 'right':
                case 'up':
                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                    _.currentDirection = 1;
                    break;
                default:
                }
                if (direction != 'vertical') {
                    _.slideHandler(slideCount);
                    _.touchObject = {};
                    _.$slider.trigger('swipe', [_, direction]);
                }
            } else {
                if (_.touchObject.startX !== _.touchObject.curX) {
                    _.slideHandler(_.currentSlide);
                    _.touchObject = {};
                }
            }
        }
        ;
        Slick.prototype.swipeHandler = function(event) {
            var _ = this;
            if ((_.options.swipe === false) || ('ontouchend'in document && _.options.swipe === false)) {
                return;
            } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
                return;
            }
            _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
            _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
            if (_.options.verticalSwiping === true) {
                _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
            }
            switch (event.data.action) {
            case 'start':
                _.swipeStart(event);
                break;
            case 'move':
                _.swipeMove(event);
                break;
            case 'end':
                _.swipeEnd(event);
                break;
            }
        }
        ;
        Slick.prototype.swipeMove = function(event) {
            var _ = this, edgeWasHit = false, curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
            touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;
            if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
                return false;
            }
            curLeft = _.getLeft(_.currentSlide);
            _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
            _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
            verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
            if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
                _.scrolling = true;
                return false;
            }
            if (_.options.verticalSwiping === true) {
                _.touchObject.swipeLength = verticalSwipeLength;
            }
            swipeDirection = _.swipeDirection();
            if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
                _.swiping = true;
                event.preventDefault();
            }
            positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
            if (_.options.verticalSwiping === true) {
                positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
            }
            swipeLength = _.touchObject.swipeLength;
            _.touchObject.edgeHit = false;
            if (_.options.infinite === false) {
                if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                    swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                    _.touchObject.edgeHit = true;
                }
            }
            if (_.options.vertical === false) {
                _.swipeLeft = curLeft + swipeLength * positionOffset;
            } else {
                _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
            }
            if (_.options.verticalSwiping === true) {
                _.swipeLeft = curLeft + swipeLength * positionOffset;
            }
            if (_.options.fade === true || _.options.touchMove === false) {
                return false;
            }
            if (_.animating === true) {
                _.swipeLeft = null;
                return false;
            }
            _.setCSS(_.swipeLeft);
        }
        ;
        Slick.prototype.swipeStart = function(event) {
            var _ = this, touches;
            _.interrupted = true;
            if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
                _.touchObject = {};
                return false;
            }
            if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
                touches = event.originalEvent.touches[0];
            }
            _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
            _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
            _.dragging = true;
        }
        ;
        Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
            var _ = this;
            if (_.$slidesCache !== null) {
                _.unload();
                _.$slideTrack.children(this.options.slide).detach();
                _.$slidesCache.appendTo(_.$slideTrack);
                _.reinit();
            }
        }
        ;
        Slick.prototype.unload = function() {
            var _ = this;
            $('.slick-cloned', _.$slider).remove();
            if (_.$dots) {
                _.$dots.remove();
            }
            if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
            if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
            _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
        }
        ;
        Slick.prototype.unslick = function(fromBreakpoint) {
            var _ = this;
            _.$slider.trigger('unslick', [_, fromBreakpoint]);
            _.destroy();
        }
        ;
        Slick.prototype.updateArrows = function() {
            var _ = this, centerOffset;
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                if (_.currentSlide === 0) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                    _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                    _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                    _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                }
            }
        }
        ;
        Slick.prototype.updateDots = function() {
            var _ = this;
            if (_.$dots !== null) {
                _.$dots.find('li').removeClass('slick-active').end();
                _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
            }
        }
        ;
        Slick.prototype.visibility = function() {
            var _ = this;
            if (_.options.autoplay) {
                if (document[_.hidden]) {
                    _.interrupted = true;
                } else {
                    _.interrupted = false;
                }
            }
        }
        ;
        $.fn.slick = function() {
            var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length, i, ret;
            for (i = 0; i < l; i++) {
                if (typeof opt == 'object' || typeof opt == 'undefined')
                    _[i].slick = new Slick(_[i],opt);
                else
                    ret = _[i].slick[opt].apply(_[i].slick, args);
                if (typeof ret != 'undefined')
                    return ret;
            }
            return _;
        }
        ;
    }));
}
), (function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*! picturefill - v3.0.2 - 2016-02-12
* https://scottjehl.github.io/picturefill/
* Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
*/
    /*! Gecko-Picture - v1.0
* https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
* Firefox's early picture implementation (prior to FF41) is static and does
* not react to viewport changes. This tiny module fixes this.
*/
    (function(window) {
        var ua = navigator.userAgent;
        if (window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45)) {
            addEventListener("resize", (function() {
                var timer;
                var dummySrc = document.createElement("source");
                var fixRespimg = function(img) {
                    var source, sizes;
                    var picture = img.parentNode;
                    if (picture.nodeName.toUpperCase() === "PICTURE") {
                        source = dummySrc.cloneNode();
                        picture.insertBefore(source, picture.firstElementChild);
                        setTimeout(function() {
                            picture.removeChild(source);
                        });
                    } else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
                        img._pfLastSize = img.offsetWidth;
                        sizes = img.sizes;
                        img.sizes += ",100vw";
                        setTimeout(function() {
                            img.sizes = sizes;
                        });
                    }
                };
                var findPictureImgs = function() {
                    var i;
                    var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
                    for (i = 0; i < imgs.length; i++) {
                        fixRespimg(imgs[i]);
                    }
                };
                var onResize = function() {
                    clearTimeout(timer);
                    timer = setTimeout(findPictureImgs, 99);
                };
                var mq = window.matchMedia && matchMedia("(orientation: landscape)");
                var init = function() {
                    onResize();
                    if (mq && mq.addListener) {
                        mq.addListener(onResize);
                    }
                };
                dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                if (/^[c|i]|d$/.test(document.readyState || "")) {
                    init();
                } else {
                    document.addEventListener("DOMContentLoaded", init);
                }
                return onResize;
            }
            )());
        }
    }
    )(window);
    /*! Picturefill - v3.0.2
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
* License: MIT
*/
    (function(window, document, undefined) {
        "use strict";
        document.createElement("picture");
        var warn, eminpx, alwaysCheckWDescriptor, evalId;
        var pf = {};
        var isSupportTestReady = false;
        var noop = function() {};
        var image = document.createElement("img");
        var getImgAttr = image.getAttribute;
        var setImgAttr = image.setAttribute;
        var removeImgAttr = image.removeAttribute;
        var docElem = document.documentElement;
        var types = {};
        var cfg = {
            algorithm: ""
        };
        var srcAttr = "data-pfsrc";
        var srcsetAttr = srcAttr + "set";
        var ua = navigator.userAgent;
        var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35);
        var curSrcProp = "currentSrc";
        var regWDesc = /\s+\+?\d+(e\d+)?w/;
        var regSize = /(\([^)]+\))?\s*(.+)/;
        var setOptions = window.picturefillCFG;
        var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
        var fsCss = "font-size:100%!important;";
        var isVwDirty = true;
        var cssCache = {};
        var sizeLengthCache = {};
        var DPR = window.devicePixelRatio;
        var units = {
            px: 1,
            "in": 96
        };
        var anchor = document.createElement("a");
        var alreadyRun = false;
        var regexLeadingSpaces = /^[ \t\n\r\u000c]+/
          , regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/
          , regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/
          , regexTrailingCommas = /[,]+$/
          , regexNonNegativeInteger = /^\d+$/
          , regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
        var on = function(obj, evt, fn, capture) {
            if (obj.addEventListener) {
                obj.addEventListener(evt, fn, capture || false);
            } else if (obj.attachEvent) {
                obj.attachEvent("on" + evt, fn);
            }
        };
        var memoize = function(fn) {
            var cache = {};
            return function(input) {
                if (!(input in cache)) {
                    cache[input] = fn(input);
                }
                return cache[input];
            }
            ;
        };
        function isSpace(c) {
            return (c === "\u0020" || c === "\u0009" || c === "\u000A" || c === "\u000C" || c === "\u000D");
        }
        var evalCSS = (function() {
            var regLength = /^([\d\.]+)(em|vw|px)$/;
            var replace = function() {
                var args = arguments
                  , index = 0
                  , string = args[0];
                while (++index in args) {
                    string = string.replace(args[index], args[++index]);
                }
                return string;
            };
            var buildStr = memoize(function(css) {
                return "return " + replace((css || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
            });
            return function(css, length) {
                var parsedLength;
                if (!(css in cssCache)) {
                    cssCache[css] = false;
                    if (length && (parsedLength = css.match(regLength))) {
                        cssCache[css] = parsedLength[1] * units[parsedLength[2]];
                    } else {
                        try {
                            cssCache[css] = new Function("e",buildStr(css))(units);
                        } catch (e) {}
                    }
                }
                return cssCache[css];
            }
            ;
        }
        )();
        var setResolution = function(candidate, sizesattr) {
            if (candidate.w) {
                candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
                candidate.res = candidate.w / candidate.cWidth;
            } else {
                candidate.res = candidate.d;
            }
            return candidate;
        };
        var picturefill = function(opt) {
            if (!isSupportTestReady) {
                return;
            }
            var elements, i, plen;
            var options = opt || {};
            if (options.elements && options.elements.nodeType === 1) {
                if (options.elements.nodeName.toUpperCase() === "IMG") {
                    options.elements = [options.elements];
                } else {
                    options.context = options.elements;
                    options.elements = null;
                }
            }
            elements = options.elements || pf.qsa((options.context || document), (options.reevaluate || options.reselect) ? pf.sel : pf.selShort);
            if ((plen = elements.length)) {
                pf.setupRun(options);
                alreadyRun = true;
                for (i = 0; i < plen; i++) {
                    pf.fillImg(elements[i], options);
                }
                pf.teardownRun(options);
            }
        };
        warn = (window.console && console.warn) ? function(message) {
            console.warn(message);
        }
        : noop;
        if (!(curSrcProp in image)) {
            curSrcProp = "src";
        }
        types["image/jpeg"] = true;
        types["image/gif"] = true;
        types["image/png"] = true;
        function detectTypeSupport(type, typeUri) {
            var image = new window.Image();
            image.onerror = function() {
                types[type] = false;
                picturefill();
            }
            ;
            image.onload = function() {
                types[type] = image.width === 1;
                picturefill();
            }
            ;
            image.src = typeUri;
            return "pending";
        }
        types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
        function updateMetrics() {
            isVwDirty = false;
            DPR = window.devicePixelRatio;
            cssCache = {};
            sizeLengthCache = {};
            pf.DPR = DPR || 1;
            units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
            units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);
            units.vw = units.width / 100;
            units.vh = units.height / 100;
            evalId = [units.height, units.width, DPR].join("-");
            units.em = pf.getEmValue();
            units.rem = units.em;
        }
        function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
            var bonusFactor, tooMuch, bonus, meanDensity;
            if (cfg.algorithm === "saveData") {
                if (lowerValue > 2.7) {
                    meanDensity = dprValue + 1;
                } else {
                    tooMuch = higherValue - dprValue;
                    bonusFactor = Math.pow(lowerValue - 0.6, 1.5);
                    bonus = tooMuch * bonusFactor;
                    if (isCached) {
                        bonus += 0.1 * bonusFactor;
                    }
                    meanDensity = lowerValue + bonus;
                }
            } else {
                meanDensity = (dprValue > 1) ? Math.sqrt(lowerValue * higherValue) : lowerValue;
            }
            return meanDensity > dprValue;
        }
        function applyBestCandidate(img) {
            var srcSetCandidates;
            var matchingSet = pf.getSet(img);
            var evaluated = false;
            if (matchingSet !== "pending") {
                evaluated = evalId;
                if (matchingSet) {
                    srcSetCandidates = pf.setRes(matchingSet);
                    pf.applySetCandidate(srcSetCandidates, img);
                }
            }
            img[pf.ns].evaled = evaluated;
        }
        function ascendingSort(a, b) {
            return a.res - b.res;
        }
        function setSrcToCur(img, src, set) {
            var candidate;
            if (!set && src) {
                set = img[pf.ns].sets;
                set = set && set[set.length - 1];
            }
            candidate = getCandidateForSrc(src, set);
            if (candidate) {
                src = pf.makeUrl(src);
                img[pf.ns].curSrc = src;
                img[pf.ns].curCan = candidate;
                if (!candidate.res) {
                    setResolution(candidate, candidate.set.sizes);
                }
            }
            return candidate;
        }
        function getCandidateForSrc(src, set) {
            var i, candidate, candidates;
            if (src && set) {
                candidates = pf.parseSet(set);
                src = pf.makeUrl(src);
                for (i = 0; i < candidates.length; i++) {
                    if (src === pf.makeUrl(candidates[i].url)) {
                        candidate = candidates[i];
                        break;
                    }
                }
            }
            return candidate;
        }
        function getAllSourceElements(picture, candidates) {
            var i, len, source, srcset;
            var sources = picture.getElementsByTagName("source");
            for (i = 0,
            len = sources.length; i < len; i++) {
                source = sources[i];
                source[pf.ns] = true;
                srcset = source.getAttribute("srcset");
                if (srcset) {
                    candidates.push({
                        srcset: srcset,
                        media: source.getAttribute("media"),
                        type: source.getAttribute("type"),
                        sizes: source.getAttribute("sizes")
                    });
                }
            }
        }
        function parseSrcset(input, set) {
            function collectCharacters(regEx) {
                var chars, match = regEx.exec(input.substring(pos));
                if (match) {
                    chars = match[0];
                    pos += chars.length;
                    return chars;
                }
            }
            var inputLength = input.length, url, descriptors, currentDescriptor, state, c, pos = 0, candidates = [];
            function parseDescriptors() {
                var pError = false, w, d, h, i, candidate = {}, desc, lastChar, value, intVal, floatVal;
                for (i = 0; i < descriptors.length; i++) {
                    desc = descriptors[i];
                    lastChar = desc[desc.length - 1];
                    value = desc.substring(0, desc.length - 1);
                    intVal = parseInt(value, 10);
                    floatVal = parseFloat(value);
                    if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {
                        if (w || d) {
                            pError = true;
                        }
                        if (intVal === 0) {
                            pError = true;
                        } else {
                            w = intVal;
                        }
                    } else if (regexFloatingPoint.test(value) && (lastChar === "x")) {
                        if (w || d || h) {
                            pError = true;
                        }
                        if (floatVal < 0) {
                            pError = true;
                        } else {
                            d = floatVal;
                        }
                    } else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {
                        if (h || d) {
                            pError = true;
                        }
                        if (intVal === 0) {
                            pError = true;
                        } else {
                            h = intVal;
                        }
                    } else {
                        pError = true;
                    }
                }
                if (!pError) {
                    candidate.url = url;
                    if (w) {
                        candidate.w = w;
                    }
                    if (d) {
                        candidate.d = d;
                    }
                    if (h) {
                        candidate.h = h;
                    }
                    if (!h && !d && !w) {
                        candidate.d = 1;
                    }
                    if (candidate.d === 1) {
                        set.has1x = true;
                    }
                    candidate.set = set;
                    candidates.push(candidate);
                }
            }
            function tokenize() {
                collectCharacters(regexLeadingSpaces);
                currentDescriptor = "";
                state = "in descriptor";
                while (true) {
                    c = input.charAt(pos);
                    if (state === "in descriptor") {
                        if (isSpace(c)) {
                            if (currentDescriptor) {
                                descriptors.push(currentDescriptor);
                                currentDescriptor = "";
                                state = "after descriptor";
                            }
                        } else if (c === ",") {
                            pos += 1;
                            if (currentDescriptor) {
                                descriptors.push(currentDescriptor);
                            }
                            parseDescriptors();
                            return;
                        } else if (c === "\u0028") {
                            currentDescriptor = currentDescriptor + c;
                            state = "in parens";
                        } else if (c === "") {
                            if (currentDescriptor) {
                                descriptors.push(currentDescriptor);
                            }
                            parseDescriptors();
                            return;
                        } else {
                            currentDescriptor = currentDescriptor + c;
                        }
                    } else if (state === "in parens") {
                        if (c === ")") {
                            currentDescriptor = currentDescriptor + c;
                            state = "in descriptor";
                        } else if (c === "") {
                            descriptors.push(currentDescriptor);
                            parseDescriptors();
                            return;
                        } else {
                            currentDescriptor = currentDescriptor + c;
                        }
                    } else if (state === "after descriptor") {
                        if (isSpace(c)) {} else if (c === "") {
                            parseDescriptors();
                            return;
                        } else {
                            state = "in descriptor";
                            pos -= 1;
                        }
                    }
                    pos += 1;
                }
            }
            while (true) {
                collectCharacters(regexLeadingCommasOrSpaces);
                if (pos >= inputLength) {
                    return candidates;
                }
                url = collectCharacters(regexLeadingNotSpaces);
                descriptors = [];
                if (url.slice(-1) === ",") {
                    url = url.replace(regexTrailingCommas, "");
                    parseDescriptors();
                } else {
                    tokenize();
                }
            }
        }
        function parseSizes(strValue) {
            var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;
            var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
            var i;
            var unparsedSizesList;
            var unparsedSizesListLength;
            var unparsedSize;
            var lastComponentValue;
            var size;
            function parseComponentValues(str) {
                var chrctr;
                var component = "";
                var componentArray = [];
                var listArray = [];
                var parenDepth = 0;
                var pos = 0;
                var inComment = false;
                function pushComponent() {
                    if (component) {
                        componentArray.push(component);
                        component = "";
                    }
                }
                function pushComponentArray() {
                    if (componentArray[0]) {
                        listArray.push(componentArray);
                        componentArray = [];
                    }
                }
                while (true) {
                    chrctr = str.charAt(pos);
                    if (chrctr === "") {
                        pushComponent();
                        pushComponentArray();
                        return listArray;
                    } else if (inComment) {
                        if ((chrctr === "*") && (str[pos + 1] === "/")) {
                            inComment = false;
                            pos += 2;
                            pushComponent();
                            continue;
                        } else {
                            pos += 1;
                            continue;
                        }
                    } else if (isSpace(chrctr)) {
                        if ((str.charAt(pos - 1) && isSpace(str.charAt(pos - 1))) || !component) {
                            pos += 1;
                            continue;
                        } else if (parenDepth === 0) {
                            pushComponent();
                            pos += 1;
                            continue;
                        } else {
                            chrctr = " ";
                        }
                    } else if (chrctr === "(") {
                        parenDepth += 1;
                    } else if (chrctr === ")") {
                        parenDepth -= 1;
                    } else if (chrctr === ",") {
                        pushComponent();
                        pushComponentArray();
                        pos += 1;
                        continue;
                    } else if ((chrctr === "/") && (str.charAt(pos + 1) === "*")) {
                        inComment = true;
                        pos += 2;
                        continue;
                    }
                    component = component + chrctr;
                    pos += 1;
                }
            }
            function isValidNonNegativeSourceSizeValue(s) {
                if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {
                    return true;
                }
                if (regexCssCalc.test(s)) {
                    return true;
                }
                if ((s === "0") || (s === "-0") || (s === "+0")) {
                    return true;
                }
                return false;
            }
            unparsedSizesList = parseComponentValues(strValue);
            unparsedSizesListLength = unparsedSizesList.length;
            for (i = 0; i < unparsedSizesListLength; i++) {
                unparsedSize = unparsedSizesList[i];
                lastComponentValue = unparsedSize[unparsedSize.length - 1];
                if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
                    size = lastComponentValue;
                    unparsedSize.pop();
                } else {
                    continue;
                }
                if (unparsedSize.length === 0) {
                    return size;
                }
                unparsedSize = unparsedSize.join(" ");
                if (!(pf.matchesMedia(unparsedSize))) {
                    continue;
                }
                return size;
            }
            return "100vw";
        }
        pf.ns = ("pf" + new Date().getTime()).substr(0, 9);
        pf.supSrcset = "srcset"in image;
        pf.supSizes = "sizes"in image;
        pf.supPicture = !!window.HTMLPictureElement;
        if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
            (function(image2) {
                image.srcset = "data:,a";
                image2.src = "data:,a";
                pf.supSrcset = image.complete === image2.complete;
                pf.supPicture = pf.supSrcset && pf.supPicture;
            }
            )(document.createElement("img"));
        }
        if (pf.supSrcset && !pf.supSizes) {
            (function() {
                var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
                var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                var img = document.createElement("img");
                var test = function() {
                    var width = img.width;
                    if (width === 2) {
                        pf.supSizes = true;
                    }
                    alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;
                    isSupportTestReady = true;
                    setTimeout(picturefill);
                };
                img.onload = test;
                img.onerror = test;
                img.setAttribute("sizes", "9px");
                img.srcset = width1 + " 1w," + width2 + " 9w";
                img.src = width1;
            }
            )();
        } else {
            isSupportTestReady = true;
        }
        pf.selShort = "picture>img,img[srcset]";
        pf.sel = pf.selShort;
        pf.cfg = cfg;
        pf.DPR = (DPR || 1);
        pf.u = units;
        pf.types = types;
        pf.setSize = noop;
        pf.makeUrl = memoize(function(src) {
            anchor.href = src;
            return anchor.href;
        });
        pf.qsa = function(context, sel) {
            return ("querySelector"in context) ? context.querySelectorAll(sel) : [];
        }
        ;
        pf.matchesMedia = function() {
            if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
                pf.matchesMedia = function(media) {
                    return !media || (matchMedia(media).matches);
                }
                ;
            } else {
                pf.matchesMedia = pf.mMQ;
            }
            return pf.matchesMedia.apply(this, arguments);
        }
        ;
        pf.mMQ = function(media) {
            return media ? evalCSS(media) : true;
        }
        ;
        pf.calcLength = function(sourceSizeValue) {
            var value = evalCSS(sourceSizeValue, true) || false;
            if (value < 0) {
                value = false;
            }
            return value;
        }
        ;
        pf.supportsType = function(type) {
            return (type) ? types[type] : true;
        }
        ;
        pf.parseSize = memoize(function(sourceSizeStr) {
            var match = (sourceSizeStr || "").match(regSize);
            return {
                media: match && match[1],
                length: match && match[2]
            };
        });
        pf.parseSet = function(set) {
            if (!set.cands) {
                set.cands = parseSrcset(set.srcset, set);
            }
            return set.cands;
        }
        ;
        pf.getEmValue = function() {
            var body;
            if (!eminpx && (body = document.body)) {
                var div = document.createElement("div")
                  , originalHTMLCSS = docElem.style.cssText
                  , originalBodyCSS = body.style.cssText;
                div.style.cssText = baseStyle;
                docElem.style.cssText = fsCss;
                body.style.cssText = fsCss;
                body.appendChild(div);
                eminpx = div.offsetWidth;
                body.removeChild(div);
                eminpx = parseFloat(eminpx, 10);
                docElem.style.cssText = originalHTMLCSS;
                body.style.cssText = originalBodyCSS;
            }
            return eminpx || 16;
        }
        ;
        pf.calcListLength = function(sourceSizeListStr) {
            if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
                var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));
                sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
            }
            return sizeLengthCache[sourceSizeListStr];
        }
        ;
        pf.setRes = function(set) {
            var candidates;
            if (set) {
                candidates = pf.parseSet(set);
                for (var i = 0, len = candidates.length; i < len; i++) {
                    setResolution(candidates[i], set.sizes);
                }
            }
            return candidates;
        }
        ;
        pf.setRes.res = setResolution;
        pf.applySetCandidate = function(candidates, img) {
            if (!candidates.length) {
                return;
            }
            var candidate, i, j, length, bestCandidate, curSrc, curCan, candidateSrc, abortCurSrc;
            var imageData = img[pf.ns];
            var dpr = pf.DPR;
            curSrc = imageData.curSrc || img[curSrcProp];
            curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);
            if (curCan && curCan.set === candidates[0].set) {
                abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);
                if (!abortCurSrc) {
                    curCan.cached = true;
                    if (curCan.res >= dpr) {
                        bestCandidate = curCan;
                    }
                }
            }
            if (!bestCandidate) {
                candidates.sort(ascendingSort);
                length = candidates.length;
                bestCandidate = candidates[length - 1];
                for (i = 0; i < length; i++) {
                    candidate = candidates[i];
                    if (candidate.res >= dpr) {
                        j = i - 1;
                        if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {
                            bestCandidate = candidates[j];
                        } else {
                            bestCandidate = candidate;
                        }
                        break;
                    }
                }
            }
            if (bestCandidate) {
                candidateSrc = pf.makeUrl(bestCandidate.url);
                imageData.curSrc = candidateSrc;
                imageData.curCan = bestCandidate;
                if (candidateSrc !== curSrc) {
                    pf.setSrc(img, bestCandidate);
                }
                pf.setSize(img);
            }
        }
        ;
        pf.setSrc = function(img, bestCandidate) {
            var origWidth;
            img.src = bestCandidate.url;
            if (bestCandidate.set.type === "image/svg+xml") {
                origWidth = img.style.width;
                img.style.width = (img.offsetWidth + 1) + "px";
                if (img.offsetWidth + 1) {
                    img.style.width = origWidth;
                }
            }
        }
        ;
        pf.getSet = function(img) {
            var i, set, supportsType;
            var match = false;
            var sets = img[pf.ns].sets;
            for (i = 0; i < sets.length && !match; i++) {
                set = sets[i];
                if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
                    continue;
                }
                if (supportsType === "pending") {
                    set = supportsType;
                }
                match = set;
                break;
            }
            return match;
        }
        ;
        pf.parseSets = function(element, parent, options) {
            var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;
            var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
            var imageData = element[pf.ns];
            if (imageData.src === undefined || options.src) {
                imageData.src = getImgAttr.call(element, "src");
                if (imageData.src) {
                    setImgAttr.call(element, srcAttr, imageData.src);
                } else {
                    removeImgAttr.call(element, srcAttr);
                }
            }
            if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
                srcsetAttribute = getImgAttr.call(element, "srcset");
                imageData.srcset = srcsetAttribute;
                srcsetParsed = true;
            }
            imageData.sets = [];
            if (hasPicture) {
                imageData.pic = true;
                getAllSourceElements(parent, imageData.sets);
            }
            if (imageData.srcset) {
                imageSet = {
                    srcset: imageData.srcset,
                    sizes: getImgAttr.call(element, "sizes")
                };
                imageData.sets.push(imageSet);
                isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");
                if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
                    imageSet.srcset += ", " + imageData.src;
                    imageSet.cands.push({
                        url: imageData.src,
                        d: 1,
                        set: imageSet
                    });
                }
            } else if (imageData.src) {
                imageData.sets.push({
                    srcset: imageData.src,
                    sizes: null
                });
            }
            imageData.curCan = null;
            imageData.curSrc = undefined;
            imageData.supported = !(hasPicture || (imageSet && !pf.supSrcset) || (isWDescripor && !pf.supSizes));
            if (srcsetParsed && pf.supSrcset && !imageData.supported) {
                if (srcsetAttribute) {
                    setImgAttr.call(element, srcsetAttr, srcsetAttribute);
                    element.srcset = "";
                } else {
                    removeImgAttr.call(element, srcsetAttr);
                }
            }
            if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) || element.src !== pf.makeUrl(imageData.src))) {
                if (imageData.src === null) {
                    element.removeAttribute("src");
                } else {
                    element.src = imageData.src;
                }
            }
            imageData.parsed = true;
        }
        ;
        pf.fillImg = function(element, options) {
            var imageData;
            var extreme = options.reselect || options.reevaluate;
            if (!element[pf.ns]) {
                element[pf.ns] = {};
            }
            imageData = element[pf.ns];
            if (!extreme && imageData.evaled === evalId) {
                return;
            }
            if (!imageData.parsed || options.reevaluate) {
                pf.parseSets(element, element.parentNode, options);
            }
            if (!imageData.supported) {
                applyBestCandidate(element);
            } else {
                imageData.evaled = evalId;
            }
        }
        ;
        pf.setupRun = function() {
            if (!alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio)) {
                updateMetrics();
            }
        }
        ;
        if (pf.supPicture) {
            picturefill = noop;
            pf.fillImg = noop;
        } else {
            (function() {
                var isDomReady;
                var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;
                var run = function() {
                    var readyState = document.readyState || "";
                    timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
                    if (document.body) {
                        pf.fillImgs();
                        isDomReady = isDomReady || regReady.test(readyState);
                        if (isDomReady) {
                            clearTimeout(timerId);
                        }
                    }
                };
                var timerId = setTimeout(run, document.body ? 9 : 99);
                var debounce = function(func, wait) {
                    var timeout, timestamp;
                    var later = function() {
                        var last = (new Date()) - timestamp;
                        if (last < wait) {
                            timeout = setTimeout(later, wait - last);
                        } else {
                            timeout = null;
                            func();
                        }
                    };
                    return function() {
                        timestamp = new Date();
                        if (!timeout) {
                            timeout = setTimeout(later, wait);
                        }
                    }
                    ;
                };
                var lastClientWidth = docElem.clientHeight;
                var onResize = function() {
                    isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
                    lastClientWidth = docElem.clientHeight;
                    if (isVwDirty) {
                        pf.fillImgs();
                    }
                };
                on(window, "resize", debounce(onResize, 99));
                on(document, "readystatechange", run);
            }
            )();
        }
        pf.picturefill = picturefill;
        pf.fillImgs = picturefill;
        pf.teardownRun = noop;
        picturefill._ = pf;
        window.picturefillCFG = {
            pf: pf,
            push: function(args) {
                var name = args.shift();
                if (typeof pf[name] === "function") {
                    pf[name].apply(pf, args);
                } else {
                    cfg[name] = args[0];
                    if (alreadyRun) {
                        pf.fillImgs({
                            reselect: true
                        });
                    }
                }
            }
        };
        while (setOptions && setOptions.length) {
            window.picturefillCFG.push(setOptions.shift());
        }
        window.picturefill = picturefill;
        if (true && typeof module.exports === "object") {
            module.exports = picturefill;
        } else if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return picturefill;
            }
            ).call(exports, __webpack_require__, exports, module),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
        if (!pf.supPicture) {
            types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
        }
    }
    )(window, document);
}
)]);
