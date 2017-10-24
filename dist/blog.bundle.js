/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_min_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_router_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_router_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_router_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prism_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prism_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__prism_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_js__ = __webpack_require__(8);





var router = new __WEBPACK_IMPORTED_MODULE_1__vue_router_js___default.a({
        mode: 'history',
        routes: []
});

__WEBPACK_IMPORTED_MODULE_0__vue_min_js___default.a.use(__WEBPACK_IMPORTED_MODULE_1__vue_router_js___default.a);

var blog=new __WEBPACK_IMPORTED_MODULE_0__vue_min_js___default.a({
    router,
    el:"#blog",
    data:{
        contents:[{fields:{title:''}}],
        page:1
    },
    created:function(){
        var page = this.$route.query.page;
        if (page === undefined){
            this.page = 1;
        }
        else{
            this.page = page;
        }
        this.getContent();
    },
    updated:function(){
        __WEBPACK_IMPORTED_MODULE_2__prism_js___default.a.highlightAll();
    },
    methods:{
        getContent(){
            __WEBPACK_IMPORTED_MODULE_3__api_js__["a" /* getArticles */](this.$route.query.page).then(response => this.contents=response);
        }
    }
});



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.1
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function i(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}function a(e){return"[object Object]"===Ci.call(e)}function s(e){return"[object RegExp]"===Ci.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function l(e){var t=parseFloat(e);return isNaN(t)?e:t}function f(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function d(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function p(e,t){return ki.call(e,t)}function v(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function h(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function m(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function y(e,t){for(var n in t)e[n]=t[n];return e}function g(e){for(var t={},n=0;n<e.length;n++)e[n]&&y(t,e[n]);return t}function _(e,t,n){}function b(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return b(e,t[n])});if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return b(e[n],t[n])})}catch(e){return!1}}function $(e,t){for(var n=0;n<e.length;n++)if(b(e[n],t))return n;return-1}function C(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function w(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function x(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function k(e){if(!Ri.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function A(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){O(e,r,"errorCaptured hook")}}O(e,t,n)}function O(e,t,n){if(Pi.errorHandler)try{return Pi.errorHandler.call(null,e,t,n)}catch(e){S(e,null,"config.errorHandler")}S(e,t,n)}function S(e,t,n){if(!Bi||"undefined"==typeof console)throw e;console.error(e)}function T(e){return"function"==typeof e&&/native code/.test(e.toString())}function E(e){ro.target&&io.push(ro.target),ro.target=e}function j(){ro.target=io.pop()}function L(e){return new oo(void 0,void 0,void 0,String(e))}function N(e,t){var n=new oo(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return n.ns=e.ns,n.isStatic=e.isStatic,n.key=e.key,n.isComment=e.isComment,n.isCloned=!0,t&&e.children&&(n.children=I(e.children)),n}function I(e,t){for(var n=e.length,r=new Array(n),i=0;i<n;i++)r[i]=N(e[i],t);return r}function M(e,t,n){e.__proto__=t}function P(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];x(e,o,t[o])}}function D(e,t){if(o(e)&&!(e instanceof oo)){var n;return p(e,"__ob__")&&e.__ob__ instanceof po?n=e.__ob__:fo.shouldConvert&&!Qi()&&(Array.isArray(e)||a(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new po(e)),t&&n&&n.vmCount++,n}}function R(e,t,n,r,i){var o=new ro,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&D(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return ro.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&B(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!==t&&r!==r||(c?c.call(e,t):n=t,u=!i&&D(t),o.notify())}})}}function F(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(p(e,t))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(R(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function H(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||p(e,t)&&(delete e[t],n&&n.dep.notify())}}function B(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&B(t)}function U(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),s=0;s<o.length;s++)r=e[n=o[s]],i=t[n],p(e,n)?a(r)&&a(i)&&U(r,i):F(e,n,i);return e}function V(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):e;return r?U(r,i):i}:void 0:t?e?function(){return U("function"==typeof t?t.call(this):t,"function"==typeof e?e.call(this):e)}:t:e}function z(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function K(e,t,n,r){var i=Object.create(e||null);return t?y(i,t):i}function J(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[Oi(i)]={type:null});else if(a(n))for(var s in n)i=n[s],o[Oi(s)]=a(i)?i:{type:i};e.props=o}}function q(e,t){var n=e.inject,r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(a(n))for(var o in n){var s=n[o];r[o]=a(s)?y({from:o},s):{from:s}}}function W(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function G(e,t,n){function r(r){var i=vo[r]||mo;c[r]=i(e[r],t[r],n,r)}"function"==typeof t&&(t=t.options),J(t,n),q(t,n),W(t);var i=t.extends;if(i&&(e=G(e,i,n)),t.mixins)for(var o=0,a=t.mixins.length;o<a;o++)e=G(e,t.mixins[o],n);var s,c={};for(s in e)r(s);for(s in t)p(e,s)||r(s);return c}function Z(e,t,n,r){if("string"==typeof n){var i=e[t];if(p(i,n))return i[n];var o=Oi(n);if(p(i,o))return i[o];var a=Si(o);if(p(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function Y(e,t,n,r){var i=t[e],o=!p(n,e),a=n[e];if(ee(Boolean,i.type)&&(o&&!p(i,"default")?a=!1:ee(String,i.type)||""!==a&&a!==Ei(e)||(a=!0)),void 0===a){a=Q(r,i,e);var s=fo.shouldConvert;fo.shouldConvert=!0,D(a),fo.shouldConvert=s}return a}function Q(e,t,n){if(p(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==X(t.type)?r.call(e):r}}function X(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function ee(e,t){if(!Array.isArray(t))return X(t)===X(e);for(var n=0,r=t.length;n<r;n++)if(X(t[n])===X(e))return!0;return!1}function te(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,e)}return t.fns=e,t}function ne(t,n,r,i,o){var a,s,c,u;for(a in t)s=t[a],c=n[a],u=yo(a),e(s)||(e(c)?(e(s.fns)&&(s=t[a]=te(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in n)e(t[a])&&i((u=yo(a)).name,n[a],u.capture)}function re(r,i,o){function a(){o.apply(this,arguments),d(s.fns,a)}var s,c=r[i];e(c)?s=te([a]):t(c.fns)&&n(c.merged)?(s=c).fns.push(a):s=te([c,a]),s.merged=!0,r[i]=s}function ie(n,r,i){var o=r.options.props;if(!e(o)){var a={},s=n.attrs,c=n.props;if(t(s)||t(c))for(var u in o){var l=Ei(u);oe(a,c,u,l,!0)||oe(a,s,u,l,!1)}return a}}function oe(e,n,r,i,o){if(t(n)){if(p(n,r))return e[r]=n[r],o||delete n[r],!0;if(p(n,i))return e[r]=n[i],o||delete n[i],!0}return!1}function ae(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function se(e){return i(e)?[L(e)]:Array.isArray(e)?ue(e):void 0}function ce(e){return t(e)&&t(e.text)&&r(e.isComment)}function ue(r,o){var a,s,c,u,l=[];for(a=0;a<r.length;a++)e(s=r[a])||"boolean"==typeof s||(u=l[c=l.length-1],Array.isArray(s)?s.length>0&&(ce((s=ue(s,(o||"")+"_"+a))[0])&&ce(u)&&(l[c]=L(u.text+s[0].text),s.shift()),l.push.apply(l,s)):i(s)?ce(u)?l[c]=L(u.text+s):""!==s&&l.push(L(s)):ce(s)&&ce(u)?l[c]=L(u.text+s.text):(n(r._isVList)&&t(s.tag)&&e(s.key)&&t(o)&&(s.key="__vlist"+o+"_"+a+"__"),l.push(s)));return l}function le(e,t){return(e.__esModule||eo&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function fe(e,t,n,r,i){var o=so();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function de(r,i,a){if(n(r.error)&&t(r.errorComp))return r.errorComp;if(t(r.resolved))return r.resolved;if(n(r.loading)&&t(r.loadingComp))return r.loadingComp;if(!t(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var e=0,t=s.length;e<t;e++)s[e].$forceUpdate()},l=C(function(e){r.resolved=le(e,i),c||u()}),f=C(function(e){t(r.errorComp)&&(r.error=!0,u())}),d=r(l,f);return o(d)&&("function"==typeof d.then?e(r.resolved)&&d.then(l,f):t(d.component)&&"function"==typeof d.component.then&&(d.component.then(l,f),t(d.error)&&(r.errorComp=le(d.error,i)),t(d.loading)&&(r.loadingComp=le(d.loading,i),0===d.delay?r.loading=!0:setTimeout(function(){e(r.resolved)&&e(r.error)&&(r.loading=!0,u())},d.delay||200)),t(d.timeout)&&setTimeout(function(){e(r.resolved)&&f(null)},d.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}function pe(e){return e.isComment&&e.asyncFactory}function ve(e){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];if(t(r)&&(t(r.componentOptions)||pe(r)))return r}}function he(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&ge(e,t)}function me(e,t,n){n?ho.$once(e,t):ho.$on(e,t)}function ye(e,t){ho.$off(e,t)}function ge(e,t,n){ho=e,ne(t,n||{},me,ye,e)}function _e(e,t){var n={};if(!e)return n;for(var r=[],i=0,o=e.length;i<o;i++){var a=e[i],s=a.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,a.context!==t&&a.functionalContext!==t||!s||null==s.slot)r.push(a);else{var c=a.data.slot,u=n[c]||(n[c]=[]);"template"===a.tag?u.push.apply(u,a.children):u.push(a)}}return r.every(be)||(n.default=r),n}function be(e){return e.isComment||" "===e.text}function $e(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?$e(e[n],t):t[e[n].key]=e[n].fn;return t}function Ce(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function we(e,t,n){e.$el=t,e.$options.render||(e.$options.render=so),Se(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new Ao(e,r,_),n=!1,null==e.$vnode&&(e._isMounted=!0,Se(e,"mounted")),e}function xe(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==Di);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data&&r.data.attrs||Di,e.$listeners=n||Di,t&&e.$options.props){fo.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Y(u,e.$options.props,t,e)}fo.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,ge(e,n,l)}o&&(e.$slots=_e(i,r.context),e.$forceUpdate())}function ke(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Ae(e,t){if(t){if(e._directInactive=!1,ke(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Ae(e.$children[n]);Se(e,"activated")}}function Oe(e,t){if(!(t&&(e._directInactive=!0,ke(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Oe(e.$children[n]);Se(e,"deactivated")}}function Se(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){A(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function Te(){xo=_o.length=bo.length=0,$o={},Co=wo=!1}function Ee(){wo=!0;var e,t;for(_o.sort(function(e,t){return e.id-t.id}),xo=0;xo<_o.length;xo++)t=(e=_o[xo]).id,$o[t]=null,e.run();var n=bo.slice(),r=_o.slice();Te(),Ne(n),je(r),Xi&&Pi.devtools&&Xi.emit("flush")}function je(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&Se(r,"updated")}}function Le(e){e._inactive=!1,bo.push(e)}function Ne(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Ae(e[t],!0)}function Ie(e){var t=e.id;if(null==$o[t]){if($o[t]=!0,wo){for(var n=_o.length-1;n>xo&&_o[n].id>e.id;)n--;_o.splice(n+1,0,e)}else _o.push(e);Co||(Co=!0,to(Ee))}}function Me(e){Oo.clear(),Pe(e,Oo)}function Pe(e,t){var n,r,i=Array.isArray(e);if((i||o(e))&&Object.isExtensible(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(i)for(n=e.length;n--;)Pe(e[n],t);else for(n=(r=Object.keys(e)).length;n--;)Pe(e[r[n]],t)}}function De(e,t,n){So.get=function(){return this[t][n]},So.set=function(e){this[t][n]=e},Object.defineProperty(e,n,So)}function Re(e){e._watchers=[];var t=e.$options;t.props&&Fe(e,t.props),t.methods&&Ke(e,t.methods),t.data?He(e):D(e._data={},!0),t.computed&&Ue(e,t.computed),t.watch&&t.watch!==qi&&Je(e,t.watch)}function Fe(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;fo.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=Y(o,t,n,e);R(r,o,a),o in e||De(e,"_props",o)}(a);fo.shouldConvert=!0}function He(e){var t=e.$options.data;a(t=e._data="function"==typeof t?Be(t,e):t||{})||(t={});for(var n=Object.keys(t),r=e.$options.props,i=n.length;i--;){var o=n[i];r&&p(r,o)||w(o)||De(e,"_data",o)}D(t,!0)}function Be(e,t){try{return e.call(t,t)}catch(e){return A(e,t,"data()"),{}}}function Ue(e,t){var n=e._computedWatchers=Object.create(null),r=Qi();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new Ao(e,a||_,_,To)),i in e||Ve(e,i,o)}}function Ve(e,t,n){var r=!Qi();"function"==typeof n?(So.get=r?ze(t):n,So.set=_):(So.get=n.get?r&&!1!==n.cache?ze(t):n.get:_,So.set=n.set?n.set:_),Object.defineProperty(e,t,So)}function ze(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ro.target&&t.depend(),t.value}}function Ke(e,t){for(var n in t)e[n]=null==t[n]?_:h(t[n],e)}function Je(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)qe(e,n,r[i]);else qe(e,n,r)}}function qe(e,t,n,r){return a(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function We(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Ge(e){var t=Ze(e.$options.inject,e);t&&(fo.shouldConvert=!1,Object.keys(t).forEach(function(n){R(e,n,t[n])}),fo.shouldConvert=!0)}function Ze(e,t){if(e){for(var n=Object.create(null),r=eo?Reflect.ownKeys(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}):Object.keys(e),i=0;i<r.length;i++){for(var o=r[i],a=e[o].from,s=t;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}return n}}function Ye(e,n){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=n(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=n(i+1,i);else if(o(e))for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=n(e[c],c,i);return t(r)&&(r._isVList=!0),r}function Qe(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&(n=y(y({},r),n)),i(n)||t;var o=this.$slots[e];return o||t}function Xe(e){return Z(this.$options,"filters",e,!0)||Li}function et(e,t,n,r){var i=Pi.keyCodes[t]||n;return i?Array.isArray(i)?-1===i.indexOf(e):i!==e:r?Ei(r)!==t:void 0}function tt(e,t,n,r,i){if(n)if(o(n)){Array.isArray(n)&&(n=g(n));var a;for(var s in n)!function(o){if("class"===o||"style"===o||xi(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||Pi.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}o in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))}(s)}else;return e}function nt(e,t){var n=this.$options.staticRenderFns,r=n.cached||(n.cached=[]),i=r[e];return i&&!t?Array.isArray(i)?I(i):N(i):(i=r[e]=n[e].call(this._renderProxy,null,this),it(i,"__static__"+e,!1),i)}function rt(e,t,n){return it(e,"__once__"+t+(n?"_"+n:""),!0),e}function it(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&ot(e[r],t+"_"+r,n);else ot(e,t,n)}function ot(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function at(e,t){if(t)if(a(t)){var n=e.on=e.on?y({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function st(e){e._o=rt,e._n=l,e._s=u,e._l=Ye,e._t=Qe,e._q=b,e._i=$,e._m=nt,e._f=Xe,e._k=et,e._b=tt,e._v=L,e._e=so,e._u=$e,e._g=at}function ct(e,t,r,i,o){var a=o.options;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||Di,this.injections=Ze(a.inject,i),this.slots=function(){return _e(r,i)};var s=Object.create(i),c=n(a._compiled),u=!c;c&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||Di),a._scopeId?this._c=function(e,t,n,r){var o=mt(s,e,t,n,r,u);return o&&(o.functionalScopeId=a._scopeId,o.functionalContext=i),o}:this._c=function(e,t,n,r){return mt(s,e,t,n,r,u)}}function ut(e,n,r,i,o){var a=e.options,s={},c=a.props;if(t(c))for(var u in c)s[u]=Y(u,c,n||Di);else t(r.attrs)&&lt(s,r.attrs),t(r.props)&&lt(s,r.props);var l=new ct(r,s,o,i,e),f=a.render.call(null,l._c,l);return f instanceof oo&&(f.functionalContext=i,f.functionalOptions=a,r.slot&&((f.data||(f.data={})).slot=r.slot)),f}function lt(e,t){for(var n in t)e[Oi(n)]=t[n]}function ft(r,i,a,s,c){if(!e(r)){var u=a.$options._base;if(o(r)&&(r=u.extend(r)),"function"==typeof r){var l;if(e(r.cid)&&(l=r,void 0===(r=de(l,u,a))))return fe(l,i,a,s,c);i=i||{},$t(r),t(i.model)&&ht(r.options,i);var f=ie(i,r,c);if(n(r.options.functional))return ut(r,f,i,a,s);var d=i.on;if(i.on=i.nativeOn,n(r.options.abstract)){var p=i.slot;i={},p&&(i.slot=p)}pt(i);var v=r.options.name||c;return new oo("vue-component-"+r.cid+(v?"-"+v:""),i,void 0,void 0,void 0,a,{Ctor:r,propsData:f,listeners:d,tag:c,children:s},l)}}}function dt(e,n,r,i){var o=e.componentOptions,a={_isComponent:!0,parent:n,propsData:o.propsData,_componentTag:o.tag,_parentVnode:e,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:r||null,_refElm:i||null},s=e.data.inlineTemplate;return t(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function pt(e){e.hook||(e.hook={});for(var t=0;t<jo.length;t++){var n=jo[t],r=e.hook[n],i=Eo[n];e.hook[n]=r?vt(i,r):i}}function vt(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function ht(e,n){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});t(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}function mt(e,t,r,o,a,s){return(Array.isArray(r)||i(r))&&(a=o,o=r,r=void 0),n(s)&&(a=No),yt(e,t,r,o,a)}function yt(e,n,r,i,o){if(t(r)&&t(r.__ob__))return so();if(t(r)&&t(r.is)&&(n=r.is),!n)return so();Array.isArray(i)&&"function"==typeof i[0]&&((r=r||{}).scopedSlots={default:i[0]},i.length=0),o===No?i=se(i):o===Lo&&(i=ae(i));var a,s;if("string"==typeof n){var c;s=e.$vnode&&e.$vnode.ns||Pi.getTagNamespace(n),a=Pi.isReservedTag(n)?new oo(Pi.parsePlatformTagName(n),r,i,void 0,void 0,e):t(c=Z(e.$options,"components",n))?ft(c,r,e,i,n):new oo(n,r,i,void 0,void 0,e)}else a=ft(n,r,e,i);return t(a)?(s&&gt(a,s),a):so()}function gt(r,i,o){if(r.ns=i,"foreignObject"===r.tag&&(i=void 0,o=!0),t(r.children))for(var a=0,s=r.children.length;a<s;a++){var c=r.children[a];t(c.tag)&&(e(c.ns)||n(o))&&gt(c,i,o)}}function _t(e){e._vnode=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=_e(t._renderChildren,r),e.$scopedSlots=Di,e._c=function(t,n,r,i){return mt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return mt(e,t,n,r,i,!0)};var i=n&&n.data;R(e,"$attrs",i&&i.attrs||Di,null,!0),R(e,"$listeners",t._parentListeners||Di,null,!0)}function bt(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function $t(e){var t=e.options;if(e.super){var n=$t(e.super);if(n!==e.superOptions){e.superOptions=n;var r=Ct(e);r&&y(e.extendOptions,r),(t=e.options=G(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function Ct(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=wt(n[o],r[o],i[o]));return t}function wt(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(t.indexOf(e[i])>=0||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function xt(e){this._init(e)}function kt(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=m(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}function At(e){e.mixin=function(e){return this.options=G(this.options,e),this}}function Ot(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=G(n.options,e),a.super=n,a.options.props&&St(a),a.options.computed&&Tt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Ii.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=y({},a.options),i[r]=a,a}}function St(e){var t=e.options.props;for(var n in t)De(e.prototype,"_props",n)}function Tt(e){var t=e.options.computed;for(var n in t)Ve(e.prototype,n,t[n])}function Et(e){Ii.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&a(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function jt(e){return e&&(e.Ctor.options.name||e.tag)}function Lt(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!s(e)&&e.test(t)}function Nt(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=jt(a.componentOptions);s&&!t(s)&&It(n,o,r,i)}}}function It(e,t,n,r){var i=e[t];i&&i!==r&&i.componentInstance.$destroy(),e[t]=null,d(n,t)}function Mt(e){for(var n=e.data,r=e,i=e;t(i.componentInstance);)(i=i.componentInstance._vnode).data&&(n=Pt(i.data,n));for(;t(r=r.parent);)r.data&&(n=Pt(n,r.data));return Dt(n.staticClass,n.class)}function Pt(e,n){return{staticClass:Rt(e.staticClass,n.staticClass),class:t(e.class)?[e.class,n.class]:n.class}}function Dt(e,n){return t(e)||t(n)?Rt(e,Ft(n)):""}function Rt(e,t){return e?t?e+" "+t:e:t||""}function Ft(e){return Array.isArray(e)?Ht(e):o(e)?Bt(e):"string"==typeof e?e:""}function Ht(e){for(var n,r="",i=0,o=e.length;i<o;i++)t(n=Ft(e[i]))&&""!==n&&(r&&(r+=" "),r+=n);return r}function Bt(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function Ut(e){return na(e)?"svg":"math"===e?"math":void 0}function Vt(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function zt(e,t){var n=e.data.ref;if(n){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?d(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function Kt(r,i){return r.key===i.key&&(r.tag===i.tag&&r.isComment===i.isComment&&t(r.data)===t(i.data)&&Jt(r,i)||n(r.isAsyncPlaceholder)&&r.asyncFactory===i.asyncFactory&&e(i.asyncFactory.error))}function Jt(e,n){if("input"!==e.tag)return!0;var r,i=t(r=e.data)&&t(r=r.attrs)&&r.type,o=t(r=n.data)&&t(r=r.attrs)&&r.type;return i===o||oa(i)&&oa(o)}function qt(e,n,r){var i,o,a={};for(i=n;i<=r;++i)t(o=e[i].key)&&(a[o]=i);return a}function Wt(e,t){(e.data.directives||t.data.directives)&&Gt(e,t)}function Gt(e,t){var n,r,i,o=e===ca,a=t===ca,s=Zt(e.data.directives,e.context),c=Zt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,Qt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Qt(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)Qt(u[n],"inserted",t,e)};o?re(t.data.hook||(t.data.hook={}),"insert",f):f()}if(l.length&&re(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)Qt(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||Qt(s[n],"unbind",e,e,a)}function Zt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)(i=e[r]).modifiers||(i.modifiers=fa),n[Yt(i)]=i,i.def=Z(t.$options,"directives",i.name,!0);return n}function Yt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Qt(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){A(r,n.context,"directive "+e.name+" "+t+" hook")}}function Xt(n,r){var i=r.componentOptions;if(!(t(i)&&!1===i.Ctor.options.inheritAttrs||e(n.data.attrs)&&e(r.data.attrs))){var o,a,s=r.elm,c=n.data.attrs||{},u=r.data.attrs||{};t(u.__ob__)&&(u=r.data.attrs=y({},u));for(o in u)a=u[o],c[o]!==a&&en(s,o,a);(zi||Ki)&&u.value!==c.value&&en(s,"value",u.value);for(o in c)e(u[o])&&(Yo(o)?s.removeAttributeNS(Zo,Qo(o)):Wo(o)||s.removeAttribute(o))}}function en(e,t,n){Go(t)?Xo(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Wo(t)?e.setAttribute(t,Xo(n)||"false"===n?"false":"true"):Yo(t)?Xo(n)?e.removeAttributeNS(Zo,Qo(t)):e.setAttributeNS(Zo,t,n):Xo(n)?e.removeAttribute(t):e.setAttribute(t,n)}function tn(n,r){var i=r.elm,o=r.data,a=n.data;if(!(e(o.staticClass)&&e(o.class)&&(e(a)||e(a.staticClass)&&e(a.class)))){var s=Mt(r),c=i._transitionClasses;t(c)&&(s=Rt(s,Ft(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function nn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&ha.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=rn(o,a[i]);return o}function rn(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function on(e){console.error("[Vue compiler]: "+e)}function an(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function sn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function cn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function un(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function ln(e,t,n,r,i,o){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t),r&&r.passive&&(delete r.passive,t="&"+t);var a;r&&r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n,modifiers:r},c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s}function fn(e,t,n){var r=dn(e,":"+t)||dn(e,"v-bind:"+t);if(null!=r)return nn(r);if(!1!==n){var i=dn(e,t);if(null!=i)return JSON.stringify(i)}}function dn(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function pn(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=vn(t,o);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+a+"}"}}function vn(e,t){var n=hn(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function hn(e){if(Do=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Do-1)return(Ho=e.lastIndexOf("."))>-1?{exp:e.slice(0,Ho),key:'"'+e.slice(Ho+1)+'"'}:{exp:e,key:null};for(Ro=e,Ho=Bo=Uo=0;!yn();)gn(Fo=mn())?bn(Fo):91===Fo&&_n(Fo);return{exp:e.slice(0,Bo),key:e.slice(Bo+1,Uo)}}function mn(){return Ro.charCodeAt(++Ho)}function yn(){return Ho>=Do}function gn(e){return 34===e||39===e}function _n(e){var t=1;for(Bo=Ho;!yn();)if(e=mn(),gn(e))bn(e);else if(91===e&&t++,93===e&&t--,0===t){Uo=Ho;break}}function bn(e){for(var t=e;!yn()&&(e=mn())!==t;);}function $n(e,t,n){var r=n&&n.number,i=fn(e,"value")||"null",o=fn(e,"true-value")||"true",a=fn(e,"false-value")||"false";sn(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),ln(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+t+"=$$a.concat([$$v]))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+vn(t,"$$c")+"}",null,!0)}function Cn(e,t,n){var r=n&&n.number,i=fn(e,"value")||"null";sn(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),ln(e,"change",vn(t,i),null,!0)}function wn(e,t,n){var r="var $$selectedVal = "+('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"})")+";";ln(e,"change",r=r+" "+vn(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),null,!0)}function xn(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ma:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=vn(t,l);c&&(f="if($event.target.composing)return;"+f),sn(e,"value","("+t+")"),ln(e,u,f,null,!0),(s||a)&&ln(e,"blur","$forceUpdate()")}function kn(e){if(t(e[ma])){var n=Vi?"change":"input";e[n]=[].concat(e[ma],e[n]||[]),delete e[ma]}t(e[ya])&&(e.change=[].concat(e[ya],e.change||[]),delete e[ya])}function An(e,t,n,r,i){if(n){var o=t,a=Vo;t=function(n){null!==(1===arguments.length?o(n):o.apply(null,arguments))&&On(e,t,r,a)}}Vo.addEventListener(e,t,Wi?{capture:r,passive:i}:r)}function On(e,t,n,r){(r||Vo).removeEventListener(e,t,n)}function Sn(t,n){if(!e(t.data.on)||!e(n.data.on)){var r=n.data.on||{},i=t.data.on||{};Vo=n.elm,kn(r),ne(r,i,An,On,n.context)}}function Tn(n,r){if(!e(n.data.domProps)||!e(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};t(c.__ob__)&&(c=r.data.domProps=y({},c));for(i in s)e(c[i])&&(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i){a._value=o;var u=e(o)?"":String(o);En(a,u)&&(a.value=u)}else a[i]=o}}}function En(e,t){return!e.composing&&("OPTION"===e.tagName||jn(e,t)||Ln(e,t))}function jn(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}function Ln(e,n){var r=e.value,i=e._vModifiers;return t(i)&&i.number?l(r)!==l(n):t(i)&&i.trim?r.trim()!==n.trim():r!==n}function Nn(e){var t=In(e.style);return e.staticStyle?y(e.staticStyle,t):t}function In(e){return Array.isArray(e)?g(e):"string"==typeof e?ba(e):e}function Mn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode).data&&(n=Nn(i.data))&&y(r,n);(n=Nn(e.data))&&y(r,n);for(var o=e;o=o.parent;)o.data&&(n=Nn(o.data))&&y(r,n);return r}function Pn(n,r){var i=r.data,o=n.data;if(!(e(i.staticStyle)&&e(i.style)&&e(o.staticStyle)&&e(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,d=In(r.data.style)||{};r.data.normalizedStyle=t(d.__ob__)?y({},d):d;var p=Mn(r,!0);for(s in f)e(p[s])&&wa(c,s,"");for(s in p)(a=p[s])!==f[s]&&wa(c,s,null==a?"":a)}}function Dn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Rn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function Fn(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&y(t,Oa(e.name||"v")),y(t,e),t}return"string"==typeof e?Oa(e):void 0}}function Hn(e){Ma(function(){Ma(e)})}function Bn(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Dn(e,t))}function Un(e,t){e._transitionClasses&&d(e._transitionClasses,t),Rn(e,t)}function Vn(e,t,n){var r=zn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ta?La:Ia,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function zn(e,t){var n,r=window.getComputedStyle(e),i=r[ja+"Delay"].split(", "),o=r[ja+"Duration"].split(", "),a=Kn(i,o),s=r[Na+"Delay"].split(", "),c=r[Na+"Duration"].split(", "),u=Kn(s,c),l=0,f=0;return t===Ta?a>0&&(n=Ta,l=a,f=o.length):t===Ea?u>0&&(n=Ea,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Ta:Ea:null)?n===Ta?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Ta&&Pa.test(r[ja+"Property"])}}function Kn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Jn(t)+Jn(e[n])}))}function Jn(e){return 1e3*Number(e.slice(0,-1))}function qn(n,r){var i=n.elm;t(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=Fn(n.data.transition);if(!e(a)&&!t(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,f=a.enterToClass,d=a.enterActiveClass,p=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,x=a.appearCancelled,k=a.duration,A=go,O=go.$vnode;O&&O.parent;)A=(O=O.parent).context;var S=!A._isMounted||!n.isRootInsert;if(!S||$||""===$){var T=S&&p?p:u,E=S&&h?h:d,j=S&&v?v:f,L=S?b||m:m,N=S&&"function"==typeof $?$:y,I=S?w||g:g,M=S?x||_:_,P=l(o(k)?k.enter:k),D=!1!==s&&!zi,R=Zn(N),F=i._enterCb=C(function(){D&&(Un(i,j),Un(i,E)),F.cancelled?(D&&Un(i,T),M&&M(i)):I&&I(i),i._enterCb=null});n.data.show||re(n.data.hook||(n.data.hook={}),"insert",function(){var e=i.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),N&&N(i,F)}),L&&L(i),D&&(Bn(i,T),Bn(i,E),Hn(function(){Bn(i,j),Un(i,T),F.cancelled||R||(Gn(P)?setTimeout(F,P):Vn(i,c,F))})),n.data.show&&(r&&r(),N&&N(i,F)),D||R||F()}}}function Wn(n,r){function i(){x.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),b&&(Bn(a,f),Bn(a,p),Hn(function(){Bn(a,d),Un(a,f),x.cancelled||$||(Gn(w)?setTimeout(x,w):Vn(a,u,x))})),h&&h(a,x),b||$||x())}var a=n.elm;t(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=Fn(n.data.transition);if(e(s))return r();if(!t(a._leaveCb)&&1===a.nodeType){var c=s.css,u=s.type,f=s.leaveClass,d=s.leaveToClass,p=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,y=s.leaveCancelled,g=s.delayLeave,_=s.duration,b=!1!==c&&!zi,$=Zn(h),w=l(o(_)?_.leave:_),x=a._leaveCb=C(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),b&&(Un(a,d),Un(a,p)),x.cancelled?(b&&Un(a,f),y&&y(a)):(r(),m&&m(a)),a._leaveCb=null});g?g(i):i()}}function Gn(e){return"number"==typeof e&&!isNaN(e)}function Zn(n){if(e(n))return!1;var r=n.fns;return t(r)?Zn(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function Yn(e,t){!0!==t.data.show&&qn(t)}function Qn(e,t,n){Xn(e,t,n),(Vi||Ki)&&setTimeout(function(){Xn(e,t,n)},0)}function Xn(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=$(r,tr(a))>-1,a.selected!==o&&(a.selected=o);else if(b(tr(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function er(e,t){return t.every(function(t){return!b(t,e)})}function tr(e){return"_value"in e?e._value:e.value}function nr(e){e.target.composing=!0}function rr(e){e.target.composing&&(e.target.composing=!1,ir(e.target,"input"))}function ir(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function or(e){return!e.componentInstance||e.data&&e.data.transition?e:or(e.componentInstance._vnode)}function ar(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?ar(ve(t.children)):e}function sr(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Oi(o)]=i[o];return t}function cr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function ur(e){for(;e=e.parent;)if(e.data.transition)return!0}function lr(e,t){return t.key===e.key&&t.tag===e.tag}function fr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function dr(e){e.data.newPos=e.elm.getBoundingClientRect()}function pr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function vr(e,t){var n=t?qa(t):Ka;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){(i=r.index)>a&&o.push(JSON.stringify(e.slice(a,i)));var s=nn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function hr(e,t){var n=t?xs:ws;return e.replace(n,function(e){return Cs[e]})}function mr(e,t){function n(t){l+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||ji,u=t.canBeLeftOpenTag||ji,l=0;e;){if(i=e,o&&bs(o)){var f=0,d=o.toLowerCase(),p=$s[d]||($s[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=e.replace(p,function(e,n,r){return f=r.length,bs(d)||"noscript"===d||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),As(d,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});l+=e.length-v.length,e=v,r(d,l-f,l)}else{var h=e.indexOf("<");if(0===h){if(ss.test(e)){var m=e.indexOf("--\x3e");if(m>=0){t.shouldKeepComment&&t.comment(e.substring(4,m)),n(m+3);continue}}if(cs.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var g=e.match(as);if(g){n(g[0].length);continue}var _=e.match(os);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var t=e.match(rs);if(t){var r={tagName:t[1],attrs:[],start:l};n(t[0].length);for(var i,o;!(i=e.match(is))&&(o=e.match(es));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&Xa(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||!!i,f=e.attrs.length,d=new Array(f),p=0;p<f;p++){var v=e.attrs[p];us&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"";d[p]={name:v[1],value:hr(h,t.shouldDecodeNewlines)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:d}),o=n),t.start&&t.start(n,d,l,e.start,e.end)}($),As(o,e)&&n(1);continue}}var C=void 0,w=void 0,x=void 0;if(h>=0){for(w=e.slice(h);!(os.test(w)||rs.test(w)||ss.test(w)||cs.test(w)||(x=w.indexOf("<",1))<0);)h+=x,w=e.slice(h);C=e.substring(0,h),n(h)}h<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===i){t.chars&&t.chars(e);break}}r()}function yr(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:Mr(t),parent:n,children:[]}}function gr(e,t){function n(e){e.pre&&(s=!1),hs(e.tag)&&(c=!1)}ls=t.warn||on,hs=t.isPreTag||ji,ms=t.mustUseProp||ji,ys=t.getTagNamespace||ji,ds=an(t.modules,"transformNode"),ps=an(t.modules,"preTransformNode"),vs=an(t.modules,"postTransformNode"),fs=t.delimiters;var r,i,o=[],a=!1!==t.preserveWhitespace,s=!1,c=!1;return mr(e,{warn:ls,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldKeepComment:t.comments,start:function(e,a,u){var l=i&&i.ns||ys(e);Vi&&"svg"===l&&(a=Rr(a));var f=yr(e,a,i);l&&(f.ns=l),Dr(f)&&!Qi()&&(f.forbidden=!0);for(var d=0;d<ps.length;d++)f=ps[d](f,t)||f;if(s||(_r(f),f.pre&&(s=!0)),hs(f.tag)&&(c=!0),s?br(f):f.processed||(xr(f),kr(f),Tr(f),$r(f,t)),r?o.length||r.if&&(f.elseif||f.else)&&Sr(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)Ar(f,i);else if(f.slotScope){i.plain=!1;var p=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[p]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f));for(var v=0;v<vs.length;v++)vs[v](f,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!Vi||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Pr(i)?e:Is(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=vr(e,fs))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}},comment:function(e){i.children.push({type:3,text:e,isComment:!0})}}),r}function _r(e){null!=dn(e,"v-pre")&&(e.pre=!0)}function br(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function $r(e,t){Cr(e),e.plain=!e.key&&!e.attrsList.length,wr(e),Er(e),jr(e);for(var n=0;n<ds.length;n++)e=ds[n](e,t)||e;Lr(e)}function Cr(e){var t=fn(e,"key");t&&(e.key=t)}function wr(e){var t=fn(e,"ref");t&&(e.ref=t,e.refInFor=Nr(e))}function xr(e){var t;if(t=dn(e,"v-for")){var n=t.match(Ts);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Es);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function kr(e){var t=dn(e,"v-if");if(t)e.if=t,Sr(e,{exp:t,block:e});else{null!=dn(e,"v-else")&&(e.else=!0);var n=dn(e,"v-else-if");n&&(e.elseif=n)}}function Ar(e,t){var n=Or(t.children);n&&n.if&&Sr(n,{exp:e.elseif,block:e})}function Or(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Sr(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Tr(e){null!=dn(e,"v-once")&&(e.once=!0)}function Er(e){if("slot"===e.tag)e.slotName=fn(e,"name");else{var t;"template"===e.tag?(t=dn(e,"scope"),e.slotScope=t||dn(e,"slot-scope")):(t=dn(e,"slot-scope"))&&(e.slotScope=t);var n=fn(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotScope||cn(e,"slot",n))}}function jr(e){var t;(t=fn(e,"is"))&&(e.component=t),null!=dn(e,"inline-template")&&(e.inlineTemplate=!0)}function Lr(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,Ss.test(r))if(e.hasBindings=!0,(a=Ir(r))&&(r=r.replace(Ns,"")),Ls.test(r))r=r.replace(Ls,""),o=nn(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=Oi(r))&&(r="innerHTML")),a.camel&&(r=Oi(r)),a.sync&&ln(e,"update:"+Oi(r),vn(o,"$event"))),s||!e.component&&ms(e.tag,e.attrsMap.type,r)?sn(e,r,o):cn(e,r,o);else if(Os.test(r))ln(e,r=r.replace(Os,""),o,a,!1,ls);else{var u=(r=r.replace(Ss,"")).match(js),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),un(e,r,i,o,l,a)}else cn(e,r,JSON.stringify(o))}function Nr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Ir(e){var t=e.match(Ns);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Mr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Pr(e){return"script"===e.tag||"style"===e.tag}function Dr(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Rr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ms.test(r.name)||(r.name=r.name.replace(Ps,""),t.push(r))}return t}function Fr(e){return yr(e.tag,e.attrsList.slice(),e.parent)}function Hr(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Br(e,t){e&&(gs=Fs(t.staticKeys||""),_s=t.isReservedTag||ji,Ur(e),Vr(e,!1))}function Ur(e){if(e.static=zr(e),1===e.type){if(!_s(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Ur(r),r.static||(e.static=!1)}if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++){var a=e.ifConditions[i].block;Ur(a),a.static||(e.static=!1)}}}function Vr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Vr(e.children[n],t||!!e.for);if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++)Vr(e.ifConditions[i].block,t)}}function zr(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||wi(e.tag)||!_s(e.tag)||Kr(e)||!Object.keys(e).every(gs))))}function Kr(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}function Jr(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e){var o=e[i];r+='"'+i+'":'+qr(i,o)+","}return r.slice(0,-1)+"}"}function qr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return qr(e,t)}).join(",")+"]";var n=Bs.test(t.value),r=Hs.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)if(zs[s])o+=zs[s],Us[s]&&a.push(s);else if("exact"===s){var c=t.modifiers;o+=Vs(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=Wr(a)),o&&(i+=o),"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Wr(e){return"if(!('button' in $event)&&"+e.map(Gr).join("&&")+")return null;"}function Gr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Us[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key)"}function Zr(e,t){var n=new Js(t);return{render:"with(this){return "+(e?Yr(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Yr(e,t){if(e.staticRoot&&!e.staticProcessed)return Qr(e,t);if(e.once&&!e.onceProcessed)return Xr(e,t);if(e.for&&!e.forProcessed)return ni(e,t);if(e.if&&!e.ifProcessed)return ei(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return hi(e,t);var n;if(e.component)n=mi(e.component,e,t);else{var r=e.plain?void 0:ri(e,t),i=e.inlineTemplate?null:ui(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return ui(e,t)||"void 0"}function Qr(e,t){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+Yr(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Xr(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ei(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Yr(e,t)+","+t.onceId+++","+n+")":Yr(e,t)}return Qr(e,t)}function ei(e,t,n,r){return e.ifProcessed=!0,ti(e.ifConditions.slice(),t,n,r)}function ti(e,t,n,r){function i(e){return n?n(e,t):e.once?Xr(e,t):Yr(e,t)}if(!e.length)return r||"_e()";var o=e.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+ti(e,t,n,r):""+i(o.block)}function ni(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Yr)(e,t)+"})"}function ri(e,t){var n="{",r=ii(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:{"+yi(e.attrs)+"},"),e.props&&(n+="domProps:{"+yi(e.props)+"},"),e.events&&(n+=Jr(e.events,!1,t.warn)+","),e.nativeEvents&&(n+=Jr(e.nativeEvents,!0,t.warn)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=ai(e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=oi(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function ii(e,t){var n=e.directives;if(n){var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}function oi(e,t){var n=e.children[0];if(1===n.type){var r=Zr(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function ai(e,t){return"scopedSlots:_u(["+Object.keys(e).map(function(n){return si(n,e[n],t)}).join(",")+"])"}function si(e,t,n){return t.for&&!t.forProcessed?ci(e,t,n):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(ui(t,n)||"undefined")+":undefined":ui(t,n)||"undefined":Yr(t,n))+"}")+"}"}function ci(e,t,n){var r=t.for,i=t.alias,o=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+si(e,t,n)+"})"}function ui(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||Yr)(a,t);var s=n?li(o,t.maybeComponent):0,c=i||di;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(s?","+s:"")}}function li(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(fi(i)||i.ifConditions&&i.ifConditions.some(function(e){return fi(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}function fi(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function di(e,t){return 1===e.type?Yr(e,t):3===e.type&&e.isComment?vi(e):pi(e)}function pi(e){return"_v("+(2===e.type?e.expression:gi(JSON.stringify(e.text)))+")"}function vi(e){return"_e("+JSON.stringify(e.text)+")"}function hi(e,t){var n=e.slotName||'"default"',r=ui(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return Oi(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}function mi(e,t,n){var r=t.inlineTemplate?null:ui(t,n,!0);return"_c("+e+","+ri(t,n)+(r?","+r:"")+")"}function yi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+gi(r.value)+","}return t.slice(0,-1)}function gi(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function _i(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),_}}function bi(e){var t=Object.create(null);return function(n,r,i){delete(r=y({},r)).warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=_i(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return _i(e,c)}),t[o]=s}}function $i(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Ci=Object.prototype.toString,wi=f("slot,component",!0),xi=f("key,ref,slot,slot-scope,is"),ki=Object.prototype.hasOwnProperty,Ai=/-(\w)/g,Oi=v(function(e){return e.replace(Ai,function(e,t){return t?t.toUpperCase():""})}),Si=v(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Ti=/\B([A-Z])/g,Ei=v(function(e){return e.replace(Ti,"-$1").toLowerCase()}),ji=function(e,t,n){return!1},Li=function(e){return e},Ni="data-server-rendered",Ii=["component","directive","filter"],Mi=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],Pi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:ji,isReservedAttr:ji,isUnknownElement:ji,getTagNamespace:_,parsePlatformTagName:Li,mustUseProp:ji,_lifecycleHooks:Mi},Di=Object.freeze({}),Ri=/[^\w.$]/,Fi=_,Hi="__proto__"in{},Bi="undefined"!=typeof window,Ui=Bi&&window.navigator.userAgent.toLowerCase(),Vi=Ui&&/msie|trident/.test(Ui),zi=Ui&&Ui.indexOf("msie 9.0")>0,Ki=Ui&&Ui.indexOf("edge/")>0,Ji=Ui&&Ui.indexOf("android")>0,qi=(Ui&&/iphone|ipad|ipod|ios/.test(Ui),Ui&&/chrome\/\d+/.test(Ui),{}.watch),Wi=!1;if(Bi)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){Wi=!0}}),window.addEventListener("test-passive",null,Gi)}catch(e){}var Zi,Yi,Qi=function(){return void 0===Zi&&(Zi=!Bi&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Zi},Xi=Bi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,eo="undefined"!=typeof Symbol&&T(Symbol)&&"undefined"!=typeof Reflect&&T(Reflect.ownKeys),to=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof setImmediate&&T(setImmediate))t=function(){setImmediate(e)};else if("undefined"==typeof MessageChannel||!T(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())if("undefined"!=typeof Promise&&T(Promise)){var i=Promise.resolve();t=function(){i.then(e)}}else t=function(){setTimeout(e,0)};else{var o=new MessageChannel,a=o.port2;o.port1.onmessage=e,t=function(){a.postMessage(1)}}return function(e,i){var o;if(n.push(function(){if(e)try{e.call(i)}catch(e){A(e,i,"nextTick")}else o&&o(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e,t){o=e})}}();Yi="undefined"!=typeof Set&&T(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var no=0,ro=function(){this.id=no++,this.subs=[]};ro.prototype.addSub=function(e){this.subs.push(e)},ro.prototype.removeSub=function(e){d(this.subs,e)},ro.prototype.depend=function(){ro.target&&ro.target.addDep(this)},ro.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ro.target=null;var io=[],oo=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.functionalOptions=void 0,this.functionalScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ao={child:{configurable:!0}};ao.child.get=function(){return this.componentInstance},Object.defineProperties(oo.prototype,ao);var so=function(e){void 0===e&&(e="");var t=new oo;return t.text=e,t.isComment=!0,t},co=Array.prototype,uo=Object.create(co);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=co[e];x(uo,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var lo=Object.getOwnPropertyNames(uo),fo={shouldConvert:!0},po=function(e){this.value=e,this.dep=new ro,this.vmCount=0,x(e,"__ob__",this),Array.isArray(e)?((Hi?M:P)(e,uo,lo),this.observeArray(e)):this.walk(e)};po.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)R(e,t[n],e[t[n]])},po.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)D(e[t])};var vo=Pi.optionMergeStrategies;vo.data=function(e,t,n){return n?V(e,t,n):t&&"function"!=typeof t?e:V.call(this,e,t)},Mi.forEach(function(e){vo[e]=z}),Ii.forEach(function(e){vo[e+"s"]=K}),vo.watch=function(e,t,n,r){if(e===qi&&(e=void 0),t===qi&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};y(i,e);for(var o in t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},vo.props=vo.methods=vo.inject=vo.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return y(i,e),t&&y(i,t),i},vo.provide=V;var ho,mo=function(e,t){return void 0===t?e:t},yo=v(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}),go=null,_o=[],bo=[],$o={},Co=!1,wo=!1,xo=0,ko=0,Ao=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ko,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Yi,this.newDepIds=new Yi,this.expression="","function"==typeof t?this.getter=t:(this.getter=k(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ao.prototype.get=function(){E(this);var e,t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;A(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Me(e),j(),this.cleanupDeps()}return e},Ao.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Ao.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Ao.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ie(this)},Ao.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){A(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Ao.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ao.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Ao.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||d(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Oo=new Yi,So={enumerable:!0,configurable:!0,get:_,set:_},To={lazy:!0};st(ct.prototype);var Eo={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed)(e.componentInstance=dt(e,go,n,r)).$mount(t?e.elm:void 0,t);else if(e.data.keepAlive){var i=e;Eo.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;xe(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Se(n,"mounted")),e.data.keepAlive&&(t._isMounted?Le(n):Ae(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Oe(t,!0):t.$destroy())}},jo=Object.keys(Eo),Lo=1,No=2,Io=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=Io++,t._isVue=!0,e&&e._isComponent?bt(t,e):t.$options=G($t(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Ce(t),he(t),_t(t),Se(t,"beforeCreate"),Ge(t),Re(t),We(t),Se(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(xt),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=F,e.prototype.$delete=H,e.prototype.$watch=function(e,t,n){var r=this;if(a(t))return qe(r,e,t,n);(n=n||{}).user=!0;var i=new Ao(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(xt),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(1===arguments.length)return r._events[e]=null,r;if(t)for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?m(n):n;for(var r=m(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(t,r)}catch(n){A(n,t,'event handler for "'+e+'"')}}return t}}(xt),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&Se(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=go;go=n,n._vnode=e,i?n.$el=n.__patch__(i,e):(n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),go=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Se(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||d(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Se(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(xt),function(e){st(e.prototype),e.prototype.$nextTick=function(e){return to(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t._parentVnode;if(e._isMounted)for(var i in e.$slots){var o=e.$slots[i];o._rendered&&(e.$slots[i]=I(o,!0))}e.$scopedSlots=r&&r.data.scopedSlots||Di,e.$vnode=r;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){A(t,e,"render"),a=e._vnode}return a instanceof oo||(a=so()),a.parent=r,a}}(xt);var Mo=[String,RegExp,Array],Po={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Mo,exclude:Mo,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){var e=this;for(var t in e.cache)It(e.cache,t,e.keys)},watch:{include:function(e){Nt(this,function(t){return Lt(e,t)})},exclude:function(e){Nt(this,function(t){return!Lt(e,t)})}},render:function(){var e=ve(this.$slots.default),t=e&&e.componentOptions;if(t){var n=jt(t);if(n&&(this.include&&!Lt(this.include,n)||this.exclude&&Lt(this.exclude,n)))return e;var r=this,i=r.cache,o=r.keys,a=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;i[a]?(e.componentInstance=i[a].componentInstance,d(o,a),o.push(a)):(i[a]=e,o.push(a),this.max&&o.length>parseInt(this.max)&&It(i,o[0],o,this._vnode)),e.data.keepAlive=!0}return e}}};!function(e){var t={};t.get=function(){return Pi},Object.defineProperty(e,"config",t),e.util={warn:Fi,extend:y,mergeOptions:G,defineReactive:R},e.set=F,e.delete=H,e.nextTick=to,e.options=Object.create(null),Ii.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,y(e.options.components,Po),kt(e),At(e),Ot(e),Et(e)}(xt),Object.defineProperty(xt.prototype,"$isServer",{get:Qi}),Object.defineProperty(xt.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),xt.version="2.5.1";var Do,Ro,Fo,Ho,Bo,Uo,Vo,zo,Ko=f("style,class"),Jo=f("input,textarea,option,select,progress"),qo=function(e,t,n){return"value"===n&&Jo(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Wo=f("contenteditable,draggable,spellcheck"),Go=f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Zo="http://www.w3.org/1999/xlink",Yo=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Qo=function(e){return Yo(e)?e.slice(6,e.length):""},Xo=function(e){return null==e||!1===e},ea={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ta=f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),na=f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ra=function(e){return ta(e)||na(e)},ia=Object.create(null),oa=f("text,number,password,search,email,tel,url"),aa=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(ea[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setAttribute:function(e,t,n){e.setAttribute(t,n)}}),sa={create:function(e,t){zt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(zt(e,!0),zt(t))},destroy:function(e){zt(e,!0)}},ca=new oo("",{},[]),ua=["create","activate","update","remove","destroy"],la={create:Wt,update:Wt,destroy:function(e){Wt(e,ca)}},fa=Object.create(null),da=[sa,la],pa={create:Xt,update:Xt},va={create:tn,update:tn},ha=/[\w).+\-_$\]]/,ma="__r",ya="__c",ga={create:Sn,update:Sn},_a={create:Tn,update:Tn},ba=v(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),$a=/^--/,Ca=/\s*!important$/,wa=function(e,t,n){if($a.test(t))e.style.setProperty(t,n);else if(Ca.test(n))e.style.setProperty(t,n.replace(Ca,""),"important");else{var r=ka(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},xa=["Webkit","Moz","ms"],ka=v(function(e){if(zo=zo||document.createElement("div").style,"filter"!==(e=Oi(e))&&e in zo)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<xa.length;n++){var r=xa[n]+t;if(r in zo)return r}}),Aa={create:Pn,update:Pn},Oa=v(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Sa=Bi&&!zi,Ta="transition",Ea="animation",ja="transition",La="transitionend",Na="animation",Ia="animationend";Sa&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ja="WebkitTransition",La="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Na="WebkitAnimation",Ia="webkitAnimationEnd"));var Ma=Bi?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()},Pa=/\b(transform|all)(,|$)/,Da=function(r){function o(e){return new oo(j.tagName(e).toLowerCase(),{},[],void 0,e)}function a(e,t){function n(){0==--n.listeners&&s(e)}return n.listeners=t,n}function s(e){var n=j.parentNode(e);t(n)&&j.removeChild(n,e)}function c(e,r,i,o,a){if(e.isRootInsert=!a,!u(e,r,i,o)){var s=e.data,c=e.children,l=e.tag;t(l)?(e.elm=e.ns?j.createElementNS(e.ns,l):j.createElement(l,e),y(e),v(e,c,r),t(s)&&m(e,r),p(i,e.elm,o)):n(e.isComment)?(e.elm=j.createComment(e.text),p(i,e.elm,o)):(e.elm=j.createTextNode(e.text),p(i,e.elm,o))}}function u(e,r,i,o){var a=e.data;if(t(a)){var s=t(e.componentInstance)&&a.keepAlive;if(t(a=a.hook)&&t(a=a.init)&&a(e,!1,i,o),t(e.componentInstance))return l(e,r),n(s)&&d(e,r,i,o),!0}}function l(e,n){t(e.data.pendingInsert)&&(n.push.apply(n,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,h(e)?(m(e,n),y(e)):(zt(e),n.push(e))}function d(e,n,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,t(o=a.data)&&t(o=o.transition)){for(o=0;o<T.activate.length;++o)T.activate[o](ca,a);n.push(a);break}p(r,e.elm,i)}function p(e,n,r){t(e)&&(t(r)?r.parentNode===e&&j.insertBefore(e,n,r):j.appendChild(e,n))}function v(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)c(t[r],n,e.elm,null,!0);else i(e.text)&&j.appendChild(e.elm,j.createTextNode(e.text))}function h(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return t(e.tag)}function m(e,n){for(var r=0;r<T.create.length;++r)T.create[r](ca,e);t(O=e.data.hook)&&(t(O.create)&&O.create(ca,e),t(O.insert)&&n.push(e))}function y(e){var n;if(t(n=e.functionalScopeId))j.setAttribute(e.elm,n,"");else for(var r=e;r;)t(n=r.context)&&t(n=n.$options._scopeId)&&j.setAttribute(e.elm,n,""),r=r.parent;t(n=go)&&n!==e.context&&n!==e.functionalContext&&t(n=n.$options._scopeId)&&j.setAttribute(e.elm,n,"")}function g(e,t,n,r,i,o){for(;r<=i;++r)c(n[r],o,e,t)}function _(e){var n,r,i=e.data;if(t(i))for(t(n=i.hook)&&t(n=n.destroy)&&n(e),n=0;n<T.destroy.length;++n)T.destroy[n](e);if(t(n=e.children))for(r=0;r<e.children.length;++r)_(e.children[r])}function b(e,n,r,i){for(;r<=i;++r){var o=n[r];t(o)&&(t(o.tag)?($(o),_(o)):s(o.elm))}}function $(e,n){if(t(n)||t(e.data)){var r,i=T.remove.length+1;for(t(n)?n.listeners+=i:n=a(e.elm,i),t(r=e.componentInstance)&&t(r=r._vnode)&&t(r.data)&&$(r,n),r=0;r<T.remove.length;++r)T.remove[r](e,n);t(r=e.data.hook)&&t(r=r.remove)?r(e,n):n()}else s(e.elm)}function C(n,r,i,o,a){for(var s,u,l,f=0,d=0,p=r.length-1,v=r[0],h=r[p],m=i.length-1,y=i[0],_=i[m],$=!a;f<=p&&d<=m;)e(v)?v=r[++f]:e(h)?h=r[--p]:Kt(v,y)?(x(v,y,o),v=r[++f],y=i[++d]):Kt(h,_)?(x(h,_,o),h=r[--p],_=i[--m]):Kt(v,_)?(x(v,_,o),$&&j.insertBefore(n,v.elm,j.nextSibling(h.elm)),v=r[++f],_=i[--m]):Kt(h,y)?(x(h,y,o),$&&j.insertBefore(n,h.elm,v.elm),h=r[--p],y=i[++d]):(e(s)&&(s=qt(r,f,p)),e(u=t(y.key)?s[y.key]:w(y,r,f,p))?c(y,o,n,v.elm):Kt(l=r[u],y)?(x(l,y,o),r[u]=void 0,$&&j.insertBefore(n,l.elm,v.elm)):c(y,o,n,v.elm),y=i[++d]);f>p?g(n,e(i[m+1])?null:i[m+1].elm,i,d,m,o):d>m&&b(n,r,f,p)}function w(e,n,r,i){for(var o=r;o<i;o++){var a=n[o];if(t(a)&&Kt(e,a))return o}}function x(r,i,o,a){if(r!==i){var s=i.elm=r.elm;if(n(r.isAsyncPlaceholder))t(i.asyncFactory.resolved)?A(r.elm,i,o):i.isAsyncPlaceholder=!0;else if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))i.componentInstance=r.componentInstance;else{var c,u=i.data;t(u)&&t(c=u.hook)&&t(c=c.prepatch)&&c(r,i);var l=r.children,f=i.children;if(t(u)&&h(i)){for(c=0;c<T.update.length;++c)T.update[c](r,i);t(c=u.hook)&&t(c=c.update)&&c(r,i)}e(i.text)?t(l)&&t(f)?l!==f&&C(s,l,f,o,a):t(f)?(t(r.text)&&j.setTextContent(s,""),g(s,null,f,0,f.length-1,o)):t(l)?b(s,l,0,l.length-1):t(r.text)&&j.setTextContent(s,""):r.text!==i.text&&j.setTextContent(s,i.text),t(u)&&t(c=u.hook)&&t(c=c.postpatch)&&c(r,i)}}}function k(e,r,i){if(n(i)&&t(e.parent))e.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function A(e,r,i){if(n(r.isComment)&&t(r.asyncFactory))return r.elm=e,r.isAsyncPlaceholder=!0,!0;r.elm=e;var o=r.tag,a=r.data,s=r.children;if(t(a)&&(t(O=a.hook)&&t(O=O.init)&&O(r,!0),t(O=r.componentInstance)))return l(r,i),!0;if(t(o)){if(t(s))if(e.hasChildNodes())if(t(O=a)&&t(O=O.domProps)&&t(O=O.innerHTML)){if(O!==e.innerHTML)return!1}else{for(var c=!0,u=e.firstChild,f=0;f<s.length;f++){if(!u||!A(u,s[f],i)){c=!1;break}u=u.nextSibling}if(!c||u)return!1}else v(r,s,i);if(t(a))for(var d in a)if(!L(d)){m(r,i);break}}else e.data!==r.text&&(e.data=r.text);return!0}var O,S,T={},E=r.modules,j=r.nodeOps;for(O=0;O<ua.length;++O)for(T[ua[O]]=[],S=0;S<E.length;++S)t(E[S][ua[O]])&&T[ua[O]].push(E[S][ua[O]]);var L=f("attrs,style,class,staticClass,staticStyle,key");return function(r,i,a,s,u,l){if(!e(i)){var f=!1,d=[];if(e(r))f=!0,c(i,d,u,l);else{var p=t(r.nodeType);if(!p&&Kt(r,i))x(r,i,d,s);else{if(p){if(1===r.nodeType&&r.hasAttribute(Ni)&&(r.removeAttribute(Ni),a=!0),n(a)&&A(r,i,d))return k(i,d,!0),r;r=o(r)}var v=r.elm,m=j.parentNode(v);if(c(i,d,v._leaveCb?null:m,j.nextSibling(v)),t(i.parent))for(var y=i.parent,g=h(i);y;){for(var $=0;$<T.destroy.length;++$)T.destroy[$](y);if(y.elm=i.elm,g){for(var C=0;C<T.create.length;++C)T.create[C](ca,y);var w=y.data.hook.insert;if(w.merged)for(var O=1;O<w.fns.length;O++)w.fns[O]()}else zt(y);y=y.parent}t(m)?b(m,[r],0,0):t(r.tag)&&_(r)}}return k(i,d,f),i.elm}t(r)&&_(r)}}({nodeOps:aa,modules:[pa,va,ga,_a,Aa,Bi?{create:Yn,activate:Yn,remove:function(e,t){!0!==e.data.show?Wn(e,t):t()}}:{}].concat(da)});zi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&ir(e,"input")});var Ra={model:{inserted:function(e,t,n){"select"===n.tag?(Qn(e,t,n.context),e._vOptions=[].map.call(e.options,tr)):("textarea"===n.tag||oa(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("change",rr),Ji||(e.addEventListener("compositionstart",nr),e.addEventListener("compositionend",rr)),zi&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Qn(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,tr);i.some(function(e,t){return!b(e,r[t])})&&(e.multiple?t.value.some(function(e){return er(e,i)}):t.value!==t.oldValue&&er(t.value,i))&&ir(e,"change")}}},show:{bind:function(e,t,n){var r=t.value,i=(n=or(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,qn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&((n=or(n)).data&&n.data.transition?(n.data.show=!0,r?qn(n,function(){e.style.display=e.__vOriginalDisplay}):Wn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Fa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Ha={name:"transition",props:Fa,abstract:!0,render:function(e){var t=this,n=this.$options._renderChildren;if(n&&(n=n.filter(function(e){return e.tag||pe(e)})).length){var r=this.mode,o=n[0];if(ur(this.$vnode))return o;var a=ar(o);if(!a)return o;if(this._leaving)return cr(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=sr(this),u=this._vnode,l=ar(u);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),l&&l.data&&!lr(a,l)&&!pe(l)){var f=l.data.transition=y({},c);if("out-in"===r)return this._leaving=!0,re(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),cr(e,o);if("in-out"===r){if(pe(a))return u;var d,p=function(){d()};re(c,"afterEnter",p),re(c,"enterCancelled",p),re(f,"delayLeave",function(e){d=e})}}return o}}},Ba=y({tag:String,moveClass:String},Fa);delete Ba.mode;var Ua={Transition:Ha,TransitionGroup:{props:Ba,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=sr(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(fr),e.forEach(dr),e.forEach(pr),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Bn(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(La,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(La,e),n._moveCb=null,Un(n,t))})}}))},methods:{hasMove:function(e,t){if(!Sa)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Rn(n,e)}),Dn(n,t),n.style.display="none",this.$el.appendChild(n);var r=zn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};xt.config.mustUseProp=qo,xt.config.isReservedTag=ra,xt.config.isReservedAttr=Ko,xt.config.getTagNamespace=Ut,xt.config.isUnknownElement=function(e){if(!Bi)return!0;if(ra(e))return!1;if(e=e.toLowerCase(),null!=ia[e])return ia[e];var t=document.createElement(e);return e.indexOf("-")>-1?ia[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ia[e]=/HTMLUnknownElement/.test(t.toString())},y(xt.options.directives,Ra),y(xt.options.components,Ua),xt.prototype.__patch__=Bi?Da:_,xt.prototype.$mount=function(e,t){return e=e&&Bi?Vt(e):void 0,we(this,e,t)},xt.nextTick(function(){Pi.devtools&&Xi&&Xi.emit("init",xt)},0);var Va,za=!!Bi&&function(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'"/>',n.innerHTML.indexOf(t)>0}("\n","&#10;"),Ka=/\{\{((?:.|\n)+?)\}\}/g,Ja=/[-.*+?^${}()|[\]\/\\]/g,qa=v(function(e){var t=e[0].replace(Ja,"\\$&"),n=e[1].replace(Ja,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Wa={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=dn(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=fn(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}},Ga={staticKeys:["staticStyle"],transformNode:function(e,t){var n=dn(e,"style");n&&(e.staticStyle=JSON.stringify(ba(n)));var r=fn(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},Za={decode:function(e){return Va=Va||document.createElement("div"),Va.innerHTML=e,Va.textContent}},Ya=f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Qa=f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Xa=f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),es=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,ts="[a-zA-Z_][\\w\\-\\.]*",ns="((?:"+ts+"\\:)?"+ts+")",rs=new RegExp("^<"+ns),is=/^\s*(\/?)>/,os=new RegExp("^<\\/"+ns+"[^>]*>"),as=/^<!DOCTYPE [^>]+>/i,ss=/^<!--/,cs=/^<!\[/,us=!1;"x".replace(/x(.)?/g,function(e,t){us=""===t});var ls,fs,ds,ps,vs,hs,ms,ys,gs,_s,bs=f("script,style,textarea",!0),$s={},Cs={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},ws=/&(?:lt|gt|quot|amp);/g,xs=/&(?:lt|gt|quot|amp|#10);/g,ks=f("pre,textarea",!0),As=function(e,t){return e&&ks(e)&&"\n"===t[0]},Os=/^@|^v-on:/,Ss=/^v-|^@|^:/,Ts=/(.*?)\s+(?:in|of)\s+(.*)/,Es=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,js=/:(.*)$/,Ls=/^:|^v-bind:/,Ns=/\.[^.]+/g,Is=v(Za.decode),Ms=/^xmlns:NS\d+/,Ps=/^NS\d+:/,Ds=[Wa,Ga,{preTransformNode:function(e,t){if("input"===e.tag){var n=e.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=fn(e,"type"),i=dn(e,"v-if",!0),o=i?"&&("+i+")":"",a=Fr(e);xr(a),Hr(a,"type","checkbox"),$r(a,t),a.processed=!0,a.if="("+r+")==='checkbox'"+o,Sr(a,{exp:a.if,block:a});var s=Fr(e);dn(s,"v-for",!0),Hr(s,"type","radio"),$r(s,t),Sr(a,{exp:"("+r+")==='radio'"+o,block:s});var c=Fr(e);return dn(c,"v-for",!0),Hr(c,":type",r),$r(c,t),Sr(a,{exp:i,block:c}),a}}}}],Rs={expectHTML:!0,modules:Ds,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return pn(e,r,i),!1;if("select"===o)wn(e,r,i);else if("input"===o&&"checkbox"===a)$n(e,r,i);else if("input"===o&&"radio"===a)Cn(e,r,i);else if("input"===o||"textarea"===o)xn(e,r,i);else if(!Pi.isReservedTag(o))return pn(e,r,i),!1;return!0},text:function(e,t){t.value&&sn(e,"textContent","_s("+t.value+")")},html:function(e,t){t.value&&sn(e,"innerHTML","_s("+t.value+")")}},isPreTag:function(e){return"pre"===e},isUnaryTag:Ya,mustUseProp:qo,canBeLeftOpenTag:Qa,isReservedTag:ra,getTagNamespace:Ut,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(Ds)},Fs=v(function(e){return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}),Hs=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Bs=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Us={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Vs=function(e){return"if("+e+")return null;"},zs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Vs("$event.target !== $event.currentTarget"),ctrl:Vs("!$event.ctrlKey"),shift:Vs("!$event.shiftKey"),alt:Vs("!$event.altKey"),meta:Vs("!$event.metaKey"),left:Vs("'button' in $event && $event.button !== 0"),middle:Vs("'button' in $event && $event.button !== 1"),right:Vs("'button' in $event && $event.button !== 2")},Ks={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:_},Js=function(e){this.options=e,this.warn=e.warn||on,this.transforms=an(e.modules,"transformCode"),this.dataGenFns=an(e.modules,"genData"),this.directives=y(y({},Ks),e.directives);var t=e.isReservedTag||ji;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]},qs=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(e){return function(t){function n(n,r){var i=Object.create(t),o=[],a=[];if(i.warn=function(e,t){(t?a:o).push(e)},r){r.modules&&(i.modules=(t.modules||[]).concat(r.modules)),r.directives&&(i.directives=y(Object.create(t.directives),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=e(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:bi(n)}}}(function(e,t){var n=gr(e.trim(),t);Br(n,t);var r=Zr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})(Rs).compileToFunctions),Ws=v(function(e){var t=Vt(e);return t&&t.innerHTML}),Gs=xt.prototype.$mount;return xt.prototype.$mount=function(e,t){if((e=e&&Vt(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Ws(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=$i(e));if(r){var i=qs(r,{shouldDecodeNewlines:za,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Gs.call(this,e,t)},xt.compile=qs,xt});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(4);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueRouter = factory());
}(this, (function () { 'use strict';

/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

return VueRouter;

})));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+aspnet+csharp+git+java */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),l=0;r=i[l++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s=t.textContent,u={element:t,language:i,grammar:l,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},matchGrammar:function(e,t,a,r,i,l,o){var s=n.Token;for(var u in a)if(a.hasOwnProperty(u)&&a[u]){if(u==o)return;var g=a[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=r,k=i;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){h.lastIndex=0;var _=h.exec(w),P=1;if(!_&&m&&b!=t.length-1){if(h.lastIndex=k,_=h.exec(e),!_)break;for(var A=_.index+(d?_[1].length:0),j=_.index+_[0].length,x=b,O=k,S=t.length;S>x&&(j>O||!t[x].type&&!t[x-1].greedy);++x)O+=t[x].length,A>=O&&(++b,k=O);if(t[b]instanceof s||t[x-1].greedy)continue;P=x-b,w=e.slice(k,O),_.index-=k}if(_){d&&(p=_[1].length);var A=_.index+p,_=_[0].slice(p),j=A+_.length,N=w.slice(0,A),C=w.slice(j),E=[b,P];N&&(++b,k+=N.length,E.push(N));var I=new s(u,f?n.tokenize(_,f):_,y,_,m);if(E.push(I),C&&E.push(C),Array.prototype.splice.apply(t,E),1!=P&&n.matchGrammar(e,t,a,b,k,!0,u),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\s\S]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
Prism.languages.aspnet=Prism.languages.extend("markup",{"page-directive tag":{pattern:/<%\s*@.*%>/i,inside:{"page-directive tag":/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,rest:Prism.languages.markup.tag.inside}},"directive tag":{pattern:/<%.*%>/i,inside:{"directive tag":/<%\s*?[$=%#:]{0,2}|%>/i,rest:Prism.languages.csharp}}}),Prism.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\s\S])*\1|[^\s'">=]+))?)*\s*\/?>/i,Prism.languages.insertBefore("inside","punctuation",{"directive tag":Prism.languages.aspnet["directive tag"]},Prism.languages.aspnet.tag.inside["attr-value"]),Prism.languages.insertBefore("aspnet","comment",{"asp comment":/<%--[\s\S]*?--%>/}),Prism.languages.insertBefore("aspnet",Prism.languages.javascript?"script":"tag",{"asp script":{pattern:/(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.csharp||{}}});
Prism.languages.csharp=Prism.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[{pattern:/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,greedy:!0},{pattern:/("|')(\\?.)*?\1/,greedy:!0}],number:/\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i}),Prism.languages.insertBefore("csharp","keyword",{"generic-method":{pattern:/[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,alias:"function",inside:{keyword:Prism.languages.csharp.keyword,punctuation:/[<>(),.:]/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});
Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m};
Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),Prism.languages.insertBefore("java","function",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0}});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getArticles;
/* unused harmony export getWorkExperiences */
/* unused harmony export getCvParagraphs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showdown_min_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showdown_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__showdown_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentful_browser_min_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentful_browser_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__contentful_browser_min_js__);



const client = __WEBPACK_IMPORTED_MODULE_1__contentful_browser_min_js__["createClient"]({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "oamir411dfuu",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "fe844e41216f12522cc40b8a179e7c81c8a0f17b797503155ba949afbb6aca96"
});

var converter = new __WEBPACK_IMPORTED_MODULE_0__showdown_min_js__["Converter"]({headerLevelStart: 4, simpleLineBreaks: true});

function getArticles(page){
    if (page === undefined){
        page = 1;
    }
    var nbArticles = 10;
    return client.getEntries({
        content_type: "article",
        order: "-fields.date",
        skip: (page - 1) * nbArticles,
        limit: nbArticles
        
    })
        .then((response) => response.items.map(function(element){
            element.fields.content=converter.makeHtml(element.fields.content);
            if (element.fields.date!=undefined){
            var date = new Date(element.fields.date);
            var formatedMonth = ("0" + (date.getMonth()+1)).slice(-2);
            var formatedDay = ("0" + (date.getDate())).slice(-2);
            element.fields.date=formatedDay+"/"+formatedMonth;
        }
        return element
    }))
        .catch((error) => {
        console.error(error)
    })   
}

function getWorkExperiences(){
    return client.getEntries({
        content_type: "workExperience",
           order:"-fields.periodBegin"
    })
        .then((response) => response.items.map(function(element){
            var begin = new Date(element.fields.periodBegin);
            var end = new Date(element.fields.periodEnd);
            var beginDate = ("0" + (begin.getMonth()+1)).slice(-2) + "/" 
            + begin.getFullYear();
        var endDate="Aujourd'hui";
        if (end<new Date()){
            endDate = ("0" + (end.getMonth()+1)).slice(-2) + "/" 
            + end.getFullYear();
            }
            element.fields.begin=beginDate;
            element.fields.end=endDate;
        element.fields.description=converter.makeHtml(element.fields.description);
        return element
    }))
        .catch((error) => {
        console.error(error);
    })   
}

function getCvParagraphs(){
    return client.getEntries({
        content_type: "paragraph",
        order:"sys.createdAt"
    })
        .then((response) => response.items.map(function(element){
        element.fields.text=converter.makeHtml(element.fields.text);
        return element
    }))
        .catch((error) => {
        console.error(error)
    })   
}



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! showdown v 1.7.4 - 08-09-2017 */
(function(){function a(a){"use strict";var b={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:"Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,description:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,description:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,description:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,description:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",description:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,description:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,description:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,description:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"}};if(!1===a)return JSON.parse(JSON.stringify(b));var c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d].defaultValue);return c}function b(a,b){"use strict";var c=b?"Error in "+b+" extension->":"Error in unnamed extension",e={valid:!0,error:""};d.helper.isArray(a)||(a=[a]);for(var f=0;f<a.length;++f){var g=c+" sub-extension "+f+": ",h=a[f];if("object"!=typeof h)return e.valid=!1,e.error=g+"must be an object, but "+typeof h+" given",e;if(!d.helper.isString(h.type))return e.valid=!1,e.error=g+'property "type" must be a string, but '+typeof h.type+" given",e;var i=h.type=h.type.toLowerCase();if("language"===i&&(i=h.type="lang"),"html"===i&&(i=h.type="output"),"lang"!==i&&"output"!==i&&"listener"!==i)return e.valid=!1,e.error=g+"type "+i+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',e;if("listener"===i){if(d.helper.isUndefined(h.listeners))return e.valid=!1,e.error=g+'. Extensions of type "listener" must have a property called "listeners"',e}else if(d.helper.isUndefined(h.filter)&&d.helper.isUndefined(h.regex))return e.valid=!1,e.error=g+i+' extensions must define either a "regex" property or a "filter" method',e;if(h.listeners){if("object"!=typeof h.listeners)return e.valid=!1,e.error=g+'"listeners" property must be an object but '+typeof h.listeners+" given",e;for(var j in h.listeners)if(h.listeners.hasOwnProperty(j)&&"function"!=typeof h.listeners[j])return e.valid=!1,e.error=g+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+j+" must be a function but "+typeof h.listeners[j]+" given",e}if(h.filter){if("function"!=typeof h.filter)return e.valid=!1,e.error=g+'"filter" must be a function, but '+typeof h.filter+" given",e}else if(h.regex){if(d.helper.isString(h.regex)&&(h.regex=new RegExp(h.regex,"g")),!(h.regex instanceof RegExp))return e.valid=!1,e.error=g+'"regex" property must either be a string or a RegExp object, but '+typeof h.regex+" given",e;if(d.helper.isUndefined(h.replace))return e.valid=!1,e.error=g+'"regex" extensions must implement a replace string or function',e}}return e}function c(a,b){"use strict";return"¨E"+b.charCodeAt(0)+"E"}var d={},e={},f={},g=a(!0),h="vanilla",i={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:a(!0),allOn:function(){"use strict";var b=a(!0),c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=!0);return c}()};d.helper={},d.extensions={},d.setOption=function(a,b){"use strict";return g[a]=b,this},d.getOption=function(a){"use strict";return g[a]},d.getOptions=function(){"use strict";return g},d.resetOptions=function(){"use strict";g=a(!0)},d.setFlavor=function(a){"use strict";if(!i.hasOwnProperty(a))throw Error(a+" flavor was not found");d.resetOptions();var b=i[a];h=a;for(var c in b)b.hasOwnProperty(c)&&(g[c]=b[c])},d.getFlavor=function(){"use strict";return h},d.getFlavorOptions=function(a){"use strict";if(i.hasOwnProperty(a))return i[a]},d.getDefaultOptions=function(b){"use strict";return a(b)},d.subParser=function(a,b){"use strict";if(d.helper.isString(a)){if(void 0===b){if(e.hasOwnProperty(a))return e[a];throw Error("SubParser named "+a+" not registered!")}e[a]=b}},d.extension=function(a,c){"use strict";if(!d.helper.isString(a))throw Error("Extension 'name' must be a string");if(a=d.helper.stdExtName(a),d.helper.isUndefined(c)){if(!f.hasOwnProperty(a))throw Error("Extension named "+a+" is not registered!");return f[a]}"function"==typeof c&&(c=c()),d.helper.isArray(c)||(c=[c]);var e=b(c,a);if(!e.valid)throw Error(e.error);f[a]=c},d.getAllExtensions=function(){"use strict";return f},d.removeExtension=function(a){"use strict";delete f[a]},d.resetExtensions=function(){"use strict";f={}},d.validateExtension=function(a){"use strict";var c=b(a,null);return!!c.valid||(console.warn(c.error),!1)},d.hasOwnProperty("helper")||(d.helper={}),d.helper.isString=function(a){"use strict";return"string"==typeof a||a instanceof String},d.helper.isFunction=function(a){"use strict";var b={};return a&&"[object Function]"===b.toString.call(a)},d.helper.isArray=function(a){"use strict";return Array.isArray(a)},d.helper.isUndefined=function(a){"use strict";return void 0===a},d.helper.forEach=function(a,b){"use strict";if(d.helper.isUndefined(a))throw new Error("obj param is required");if(d.helper.isUndefined(b))throw new Error("callback param is required");if(!d.helper.isFunction(b))throw new Error("callback param must be a function/closure");if("function"==typeof a.forEach)a.forEach(b);else if(d.helper.isArray(a))for(var c=0;c<a.length;c++)b(a[c],c,a);else{if("object"!=typeof a)throw new Error("obj does not seem to be an array or an iterable object");for(var e in a)a.hasOwnProperty(e)&&b(a[e],e,a)}},d.helper.stdExtName=function(a){"use strict";return a.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()},d.helper.escapeCharactersCallback=c,d.helper.escapeCharacters=function(a,b,d){"use strict";var e="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";d&&(e="\\\\"+e);var f=new RegExp(e,"g");return a=a.replace(f,c)};var j=function(a,b,c,d){"use strict";var e,f,g,h,i,j=d||"",k=j.indexOf("g")>-1,l=new RegExp(b+"|"+c,"g"+j.replace(/g/g,"")),m=new RegExp(b,j.replace(/g/g,"")),n=[];do{for(e=0;g=l.exec(a);)if(m.test(g[0]))e++||(f=l.lastIndex,h=f-g[0].length);else if(e&&!--e){i=g.index+g[0].length;var o={left:{start:h,end:f},match:{start:f,end:g.index},right:{start:g.index,end:i},wholeMatch:{start:h,end:i}};if(n.push(o),!k)return n}}while(e&&(l.lastIndex=f));return n};d.helper.matchRecursiveRegExp=function(a,b,c,d){"use strict";for(var e=j(a,b,c,d),f=[],g=0;g<e.length;++g)f.push([a.slice(e[g].wholeMatch.start,e[g].wholeMatch.end),a.slice(e[g].match.start,e[g].match.end),a.slice(e[g].left.start,e[g].left.end),a.slice(e[g].right.start,e[g].right.end)]);return f},d.helper.replaceRecursiveRegExp=function(a,b,c,e,f){"use strict";if(!d.helper.isFunction(b)){var g=b;b=function(){return g}}var h=j(a,c,e,f),i=a,k=h.length;if(k>0){var l=[];0!==h[0].wholeMatch.start&&l.push(a.slice(0,h[0].wholeMatch.start));for(var m=0;m<k;++m)l.push(b(a.slice(h[m].wholeMatch.start,h[m].wholeMatch.end),a.slice(h[m].match.start,h[m].match.end),a.slice(h[m].left.start,h[m].left.end),a.slice(h[m].right.start,h[m].right.end))),m<k-1&&l.push(a.slice(h[m].wholeMatch.end,h[m+1].wholeMatch.start));h[k-1].wholeMatch.end<a.length&&l.push(a.slice(h[k-1].wholeMatch.end)),i=l.join("")}return i},d.helper.regexIndexOf=function(a,b,c){"use strict";if(!d.helper.isString(a))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(b instanceof RegExp==!1)throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var e=a.substring(c||0).search(b);return e>=0?e+(c||0):e},d.helper.splitAtIndex=function(a,b){"use strict";if(!d.helper.isString(a))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[a.substring(0,b),a.substring(b)]},d.helper.encodeEmailAddress=function(a){"use strict";var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a=a.replace(/./g,function(a){if("@"===a)a=b[Math.floor(2*Math.random())](a);else{var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a})},"undefined"==typeof console&&(console={warn:function(a){"use strict";alert(a)},log:function(a){"use strict";alert(a)},error:function(a){"use strict";throw a}}),d.helper.regexes={asteriskAndDash:/([*_])/g},d.Converter=function(a){"use strict";function c(a,c){if(c=c||null,d.helper.isString(a)){if(a=d.helper.stdExtName(a),c=a,d.extensions[a])return console.warn("DEPRECATION WARNING: "+a+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void e(d.extensions[a],a);if(d.helper.isUndefined(f[a]))throw Error('Extension "'+a+'" could not be loaded. It was either not found or is not a valid extension.');a=f[a]}"function"==typeof a&&(a=a()),d.helper.isArray(a)||(a=[a]);var g=b(a,c);if(!g.valid)throw Error(g.error);for(var h=0;h<a.length;++h){switch(a[h].type){case"lang":m.push(a[h]);break;case"output":n.push(a[h])}if(a[h].hasOwnProperty("listeners"))for(var i in a[h].listeners)a[h].listeners.hasOwnProperty(i)&&j(i,a[h].listeners[i])}}function e(a,c){"function"==typeof a&&(a=a(new d.Converter)),d.helper.isArray(a)||(a=[a]);var e=b(a,c);if(!e.valid)throw Error(e.error);for(var f=0;f<a.length;++f)switch(a[f].type){case"lang":m.push(a[f]);break;case"output":n.push(a[f]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function j(a,b){if(!d.helper.isString(a))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof a+" given");if("function"!=typeof b)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof b+" given");o.hasOwnProperty(a)||(o[a]=[]),o[a].push(b)}function k(a){var b=a.match(/^\s*/)[0].length,c=new RegExp("^\\s{0,"+b+"}","gm");return a.replace(c,"")}var l={},m=[],n=[],o={},p=h;!function(){a=a||{};for(var b in g)g.hasOwnProperty(b)&&(l[b]=g[b]);if("object"!=typeof a)throw Error("Converter expects the passed parameter to be an object, but "+typeof a+" was passed instead.");for(var e in a)a.hasOwnProperty(e)&&(l[e]=a[e]);l.extensions&&d.helper.forEach(l.extensions,c)}(),this._dispatch=function(a,b,c,d){if(o.hasOwnProperty(a))for(var e=0;e<o[a].length;++e){var f=o[a][e](a,b,this,c,d);f&&void 0!==f&&(b=f)}return b},this.listen=function(a,b){return j(a,b),this},this.makeHtml=function(a){if(!a)return a;var b={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:m,outputModifiers:n,converter:this,ghCodeBlocks:[]};return a=a.replace(/¨/g,"¨T"),a=a.replace(/\$/g,"¨D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a=a.replace(/\u00A0/g," "),l.smartIndentationFix&&(a=k(a)),a="\n\n"+a+"\n\n",a=d.subParser("detab")(a,l,b),a=a.replace(/^[ \t]+$/gm,""),d.helper.forEach(m,function(c){a=d.subParser("runExtension")(c,a,l,b)}),a=d.subParser("hashPreCodeTags")(a,l,b),a=d.subParser("githubCodeBlocks")(a,l,b),a=d.subParser("hashHTMLBlocks")(a,l,b),a=d.subParser("hashCodeTags")(a,l,b),a=d.subParser("stripLinkDefinitions")(a,l,b),a=d.subParser("blockGamut")(a,l,b),a=d.subParser("unhashHTMLSpans")(a,l,b),a=d.subParser("unescapeSpecialChars")(a,l,b),a=a.replace(/¨D/g,"$$"),a=a.replace(/¨T/g,"¨"),d.helper.forEach(n,function(c){a=d.subParser("runExtension")(c,a,l,b)}),a},this.setOption=function(a,b){l[a]=b},this.getOption=function(a){return l[a]},this.getOptions=function(){return l},this.addExtension=function(a,b){b=b||null,c(a,b)},this.useExtension=function(a){c(a)},this.setFlavor=function(a){if(!i.hasOwnProperty(a))throw Error(a+" flavor was not found");var b=i[a];p=a;for(var c in b)b.hasOwnProperty(c)&&(l[c]=b[c])},this.getFlavor=function(){return p},this.removeExtension=function(a){d.helper.isArray(a)||(a=[a]);for(var b=0;b<a.length;++b){for(var c=a[b],e=0;e<m.length;++e)m[e]===c&&m[e].splice(e,1);for(;0<n.length;++e)n[0]===c&&n[0].splice(e,1)}},this.getAllExtensions=function(){return{language:m,output:n}}},d.subParser("anchors",function(a,b,c){"use strict";a=c.converter._dispatch("anchors.before",a,b,c);var e=function(a,e,f,g,h,i,j){if(d.helper.isUndefined(j)&&(j=""),f=f.toLowerCase(),a.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)g="";else if(!g){if(f||(f=e.toLowerCase().replace(/ ?\n/g," ")),g="#"+f,d.helper.isUndefined(c.gUrls[f]))return a;g=c.gUrls[f],d.helper.isUndefined(c.gTitles[f])||(j=c.gTitles[f])}g=g.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback);var k='<a href="'+g+'"';return""!==j&&null!==j&&(j=j.replace(/"/g,"&quot;"),j=j.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),k+=' title="'+j+'"'),b.openLinksInNewWindow&&(k+=' target="¨E95Eblank"'),k+=">"+e+"</a>"};return a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,e),a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,e),a=a.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,e),a=a.replace(/\[([^\[\]]+)]()()()()()/g,e),b.ghMentions&&(a=a.replace(/(^|\s)(\\)?(@([a-z\d\-]+))(?=[.!?;,[\]()]|\s|$)/gim,function(a,c,e,f,g){if("\\"===e)return c+f;if(!d.helper.isString(b.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var h=b.ghMentionsLink.replace(/\{u}/g,g),i="";return b.openLinksInNewWindow&&(i=' target="¨E95Eblank"'),c+'<a href="'+h+'"'+i+">"+f+"</a>"})),a=c.converter._dispatch("anchors.after",a,b,c)});var k=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)()(?=\s|$)(?!["<>])/gi,l=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]]?)(?=\s|$)(?!["<>])/gi,m=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>/gi,n=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-\/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,o=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,p=function(a){"use strict";return function(b,c,d,e,f){var g=c,h="",i="";return/^www\./i.test(c)&&(c=c.replace(/^www\./i,"http://www.")),a.excludeTrailingPunctuationFromURLs&&f&&(h=f),a.openLinksInNewWindow&&(i=' target="¨E95Eblank"'),'<a href="'+c+'"'+i+">"+g+"</a>"+h}},q=function(a,b){"use strict";return function(c,e,f){var g="mailto:";return e=e||"",f=d.subParser("unescapeSpecialChars")(f,a,b),a.encodeEmails?(g=d.helper.encodeEmailAddress(g+f),f=d.helper.encodeEmailAddress(f)):g+=f,e+'<a href="'+g+'">'+f+"</a>"}};d.subParser("autoLinks",function(a,b,c){"use strict";return a=c.converter._dispatch("autoLinks.before",a,b,c),a=a.replace(m,p(b)),a=a.replace(o,q(b,c)),a=c.converter._dispatch("autoLinks.after",a,b,c)}),d.subParser("simplifiedAutoLinks",function(a,b,c){"use strict";return b.simplifiedAutoLink?(a=c.converter._dispatch("simplifiedAutoLinks.before",a,b,c),a=b.excludeTrailingPunctuationFromURLs?a.replace(l,p(b)):a.replace(k,p(b)),a=a.replace(n,q(b,c)),a=c.converter._dispatch("simplifiedAutoLinks.after",a,b,c)):a}),d.subParser("blockGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("blockGamut.before",a,b,c),a=d.subParser("blockQuotes")(a,b,c),a=d.subParser("headers")(a,b,c),a=d.subParser("horizontalRule")(a,b,c),a=d.subParser("lists")(a,b,c),a=d.subParser("codeBlocks")(a,b,c),a=d.subParser("tables")(a,b,c),a=d.subParser("hashHTMLBlocks")(a,b,c),a=d.subParser("paragraphs")(a,b,c),a=c.converter._dispatch("blockGamut.after",a,b,c)}),d.subParser("blockQuotes",function(a,b,c){"use strict";return a=c.converter._dispatch("blockQuotes.before",a,b,c),a=a.replace(/((^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,e){var f=e;return f=f.replace(/^[ \t]*>[ \t]?/gm,"¨0"),f=f.replace(/¨0/g,""),f=f.replace(/^[ \t]+$/gm,""),f=d.subParser("githubCodeBlocks")(f,b,c),f=d.subParser("blockGamut")(f,b,c),f=f.replace(/(^|\n)/g,"$1  "),f=f.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"¨0"),c=c.replace(/¨0/g,"")}),d.subParser("hashBlock")("<blockquote>\n"+f+"\n</blockquote>",b,c)}),a=c.converter._dispatch("blockQuotes.after",a,b,c)}),d.subParser("codeBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("codeBlocks.before",a,b,c),a+="¨0";var e=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return a=a.replace(e,function(a,e,f){var g=e,h=f,i="\n";return g=d.subParser("outdent")(g,b,c),g=d.subParser("encodeCode")(g,b,c),g=d.subParser("detab")(g,b,c),g=g.replace(/^\n+/g,""),g=g.replace(/\n+$/g,""),b.omitExtraWLInCodeBlocks&&(i=""),g="<pre><code>"+g+i+"</code></pre>",d.subParser("hashBlock")(g,b,c)+h}),a=a.replace(/¨0/,""),a=c.converter._dispatch("codeBlocks.after",a,b,c)}),d.subParser("codeSpans",function(a,b,c){"use strict";return a=c.converter._dispatch("codeSpans.before",a,b,c),void 0===a&&(a=""),a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,e,f,g){var h=g;return h=h.replace(/^([ \t]*)/g,""),h=h.replace(/[ \t]*$/g,""),h=d.subParser("encodeCode")(h,b,c),e+"<code>"+h+"</code>"}),a=c.converter._dispatch("codeSpans.after",a,b,c)}),d.subParser("detab",function(a,b,c){"use strict";return a=c.converter._dispatch("detab.before",a,b,c),a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"¨A¨B"),a=a.replace(/¨B(.+?)¨A/g,function(a,b){for(var c=b,d=4-c.length%4,e=0;e<d;e++)c+=" ";return c}),a=a.replace(/¨A/g,"    "),a=a.replace(/¨B/g,""),a=c.converter._dispatch("detab.after",a,b,c)}),d.subParser("encodeAmpsAndAngles",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeAmpsAndAngles.before",a,b,c),a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?$!])/gi,"&lt;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=c.converter._dispatch("encodeAmpsAndAngles.after",a,b,c)}),d.subParser("encodeBackslashEscapes",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeBackslashEscapes.before",a,b,c),a=a.replace(/\\(\\)/g,d.helper.escapeCharactersCallback),a=a.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g,d.helper.escapeCharactersCallback),a=c.converter._dispatch("encodeBackslashEscapes.after",a,b,c)}),d.subParser("encodeCode",function(a,b,c){"use strict";return a=c.converter._dispatch("encodeCode.before",a,b,c),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,d.helper.escapeCharactersCallback),a=c.converter._dispatch("encodeCode.after",a,b,c)}),d.subParser("escapeSpecialCharsWithinTagAttributes",function(a,b,c){"use strict";a=c.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",a,b,c);var e=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(e,function(a){return a.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,d.helper.escapeCharactersCallback)}),a=c.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",a,b,c)}),d.subParser("githubCodeBlocks",function(a,b,c){"use strict";return b.ghCodeBlocks?(a=c.converter._dispatch("githubCodeBlocks.before",a,b,c),a+="¨0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,e,f){var g=b.omitExtraWLInCodeBlocks?"":"\n";return f=d.subParser("encodeCode")(f,b,c),f=d.subParser("detab")(f,b,c),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),f="<pre><code"+(e?' class="'+e+" language-"+e+'"':"")+">"+f+g+"</code></pre>",f=d.subParser("hashBlock")(f,b,c),"\n\n¨G"+(c.ghCodeBlocks.push({text:a,codeblock:f})-1)+"G\n\n"}),a=a.replace(/¨0/,""),c.converter._dispatch("githubCodeBlocks.after",a,b,c)):a}),d.subParser("hashBlock",function(a,b,c){"use strict";return a=c.converter._dispatch("hashBlock.before",a,b,c),a=a.replace(/(^\n+|\n+$)/g,""),a="\n\n¨K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n",a=c.converter._dispatch("hashBlock.after",a,b,c)}),d.subParser("hashCodeTags",function(a,b,c){"use strict";a=c.converter._dispatch("hashCodeTags.before",a,b,c);var e=function(a,e,f,g){var h=f+d.subParser("encodeCode")(e,b,c)+g;return"¨C"+(c.gHtmlSpans.push(h)-1)+"C"};return a=d.helper.replaceRecursiveRegExp(a,e,"<code\\b[^>]*>","</code>","gim"),a=c.converter._dispatch("hashCodeTags.after",a,b,c)}),d.subParser("hashElement",function(a,b,c){"use strict";return function(a,b){var d=b;return d=d.replace(/\n\n/g,"\n"),d=d.replace(/^\n/,""),d=d.replace(/\n+$/g,""),d="\n\n¨K"+(c.gHtmlBlocks.push(d)-1)+"K\n\n"}}),d.subParser("hashHTMLBlocks",function(a,b,c){"use strict";a=c.converter._dispatch("hashHTMLBlocks.before",a,b,c);var e=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],f=function(a,b,d,e){var f=a;return-1!==d.search(/\bmarkdown\b/)&&(f=d+c.converter.makeHtml(b)+e),"\n\n¨K"+(c.gHtmlBlocks.push(f)-1)+"K\n\n"};b.backslashEscapesHTMLTags&&(a=a.replace(/\\<(\/?[^>]+?)>/g,function(a,b){return"&lt;"+b+"&gt;"}));for(var g=0;g<e.length;++g)for(var h,i=new RegExp("^ {0,3}(<"+e[g]+"\\b[^>]*>)","im"),j="<"+e[g]+"\\b[^>]*>",k="</"+e[g]+">";-1!==(h=d.helper.regexIndexOf(a,i));){var l=d.helper.splitAtIndex(a,h),m=d.helper.replaceRecursiveRegExp(l[1],f,j,k,"im");if(m===l[1])break;a=l[0].concat(m)}return a=a.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,d.subParser("hashElement")(a,b,c)),a=d.helper.replaceRecursiveRegExp(a,function(a){return"\n\n¨K"+(c.gHtmlBlocks.push(a)-1)+"K\n\n"},"^ {0,3}\x3c!--","--\x3e","gm"),a=a.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,d.subParser("hashElement")(a,b,c)),a=c.converter._dispatch("hashHTMLBlocks.after",a,b,c)}),d.subParser("hashHTMLSpans",function(a,b,c){"use strict";function d(a){return"¨C"+(c.gHtmlSpans.push(a)-1)+"C"}return a=c.converter._dispatch("hashHTMLSpans.before",a,b,c),a=a.replace(/<[^>]+?\/>/gi,function(a){return d(a)}),a=a.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(a){return d(a)}),a=a.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(a){return d(a)}),a=a.replace(/<[^>]+?>/gi,function(a){return d(a)}),a=c.converter._dispatch("hashHTMLSpans.after",a,b,c)}),d.subParser("unhashHTMLSpans",function(a,b,c){"use strict";a=c.converter._dispatch("unhashHTMLSpans.before",a,b,c);for(var d=0;d<c.gHtmlSpans.length;++d){for(var e=c.gHtmlSpans[d],f=0;/¨C(\d+)C/.test(e);){var g=RegExp.$1;if(e=e.replace("¨C"+g+"C",c.gHtmlSpans[g]),10===f)break;++f}a=a.replace("¨C"+d+"C",e)}return a=c.converter._dispatch("unhashHTMLSpans.after",a,b,c)}),d.subParser("hashPreCodeTags",function(a,b,c){"use strict";a=c.converter._dispatch("hashPreCodeTags.before",a,b,c);var e=function(a,e,f,g){var h=f+d.subParser("encodeCode")(e,b,c)+g;return"\n\n¨G"+(c.ghCodeBlocks.push({text:a,codeblock:h})-1)+"G\n\n"};return a=d.helper.replaceRecursiveRegExp(a,e,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),a=c.converter._dispatch("hashPreCodeTags.after",a,b,c)}),d.subParser("headers",function(a,b,c){"use strict";function e(a){var e,f;if(b.customizedHeaderId){var g=a.match(/\{([^{]+?)}\s*$/);g&&g[1]&&(a=g[1])}return e=a,f=d.helper.isString(b.prefixHeaderId)?b.prefixHeaderId:!0===b.prefixHeaderId?"section-":"",b.rawPrefixHeaderId||(e=f+e),e=b.ghCompatibleHeaderId?e.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():b.rawHeaderId?e.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():e.replace(/[^\w]/g,"").toLowerCase(),b.rawPrefixHeaderId&&(e=f+e),c.hashLinkCounts[e]?e=e+"-"+c.hashLinkCounts[e]++:c.hashLinkCounts[e]=1,e}a=c.converter._dispatch("headers.before",a,b,c);var f=isNaN(parseInt(b.headerLevelStart))?1:parseInt(b.headerLevelStart),g=b.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,h=b.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;a=a.replace(g,function(a,g){var h=d.subParser("spanGamut")(g,b,c),i=b.noHeaderId?"":' id="'+e(g)+'"',j=f,k="<h"+j+i+">"+h+"</h"+j+">";return d.subParser("hashBlock")(k,b,c)}),a=a.replace(h,function(a,g){var h=d.subParser("spanGamut")(g,b,c),i=b.noHeaderId?"":' id="'+e(g)+'"',j=f+1,k="<h"+j+i+">"+h+"</h"+j+">";return d.subParser("hashBlock")(k,b,c)});var i=b.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;return a=a.replace(i,function(a,g,h){var i=h;b.customizedHeaderId&&(i=h.replace(/\s?\{([^{]+?)}\s*$/,""));var j=d.subParser("spanGamut")(i,b,c),k=b.noHeaderId?"":' id="'+e(h)+'"',l=f-1+g.length,m="<h"+l+k+">"+j+"</h"+l+">";return d.subParser("hashBlock")(m,b,c)}),a=c.converter._dispatch("headers.after",a,b,c)}),d.subParser("horizontalRule",function(a,b,c){"use strict";a=c.converter._dispatch("horizontalRule.before",a,b,c);var e=d.subParser("hashBlock")("<hr />",b,c);return a=a.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,e),a=a.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,e),a=a.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,e),a=c.converter._dispatch("horizontalRule.after",a,b,c)}),d.subParser("images",function(a,b,c){"use strict";function e(a,b,c,d,e,g,h,i){return d=d.replace(/\s/g,""),f(a,b,c,d,e,g,h,i)}function f(a,b,e,f,g,h,i,j){var k=c.gUrls,l=c.gTitles,m=c.gDimensions;if(e=e.toLowerCase(),j||(j=""),a.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)f="";else if(""===f||null===f){if(""!==e&&null!==e||(e=b.toLowerCase().replace(/ ?\n/g," ")),f="#"+e,d.helper.isUndefined(k[e]))return a;f=k[e],d.helper.isUndefined(l[e])||(j=l[e]),d.helper.isUndefined(m[e])||(g=m[e].width,h=m[e].height)}b=b.replace(/"/g,"&quot;").replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),f=f.replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback);var n='<img src="'+f+'" alt="'+b+'"';return j&&(j=j.replace(/"/g,"&quot;").replace(d.helper.regexes.asteriskAndDash,d.helper.escapeCharactersCallback),n+=' title="'+j+'"'),g&&h&&(g="*"===g?"auto":g,h="*"===h?"auto":h,n+=' width="'+g+'"',n+=' height="'+h+'"'),n+=" />"}a=c.converter._dispatch("images.before",a,b,c);var g=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,h=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,i=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+\/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,j=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,k=/!\[([^\[\]]+)]()()()()()/g;return a=a.replace(j,f),a=a.replace(i,e),a=a.replace(h,f),a=a.replace(g,f),a=a.replace(k,f),a=c.converter._dispatch("images.after",a,b,c)}),d.subParser("italicsAndBold",function(a,b,c){"use strict";function e(a,e,f){return b.simplifiedAutoLink&&(a=d.subParser("simplifiedAutoLinks")(a,b,c)),e+a+f}return a=c.converter._dispatch("italicsAndBold.before",a,b,c),b.literalMidWordUnderscores?(a=a.replace(/\b___(\S[\s\S]*)___\b/g,function(a,b){return e(b,"<strong><em>","</em></strong>")}),a=a.replace(/\b__(\S[\s\S]*)__\b/g,function(a,b){return e(b,"<strong>","</strong>")}),a=a.replace(/\b_(\S[\s\S]*?)_\b/g,function(a,b){return e(b,"<em>","</em>")})):(a=a.replace(/___(\S[\s\S]*?)___/g,function(a,b){return/\S$/.test(b)?e(b,"<strong><em>","</em></strong>"):a}),a=a.replace(/__(\S[\s\S]*?)__/g,function(a,b){return/\S$/.test(b)?e(b,"<strong>","</strong>"):a}),a=a.replace(/_([^\s_][\s\S]*?)_/g,function(a,b){return/\S$/.test(b)?e(b,"<em>","</em>"):a})),b.literalMidWordAsterisks?(a=a.trim().replace(/(^| )\*{3}(\S[\s\S]*?)\*{3}([ ,;!?.]|$)/g,function(a,b,c,d){return e(c,b+"<strong><em>","</em></strong>"+d)}),a=a.trim().replace(/(^| )\*{2}(\S[\s\S]*?)\*{2}([ ,;!?.]|$)/g,function(a,b,c,d){return e(c,b+"<strong>","</strong>"+d)}),a=a.trim().replace(/(^| )\*(\S[\s\S]*?)\*([ ,;!?.]|$)/g,function(a,b,c,d){return e(c,b+"<em>","</em>"+d)})):(a=a.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(a,b){return/\S$/.test(b)?e(b,"<strong><em>","</em></strong>"):a}),a=a.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(a,b){return/\S$/.test(b)?e(b,"<strong>","</strong>"):a}),a=a.replace(/\*([^\s*][\s\S]*?)\*/g,function(a,b){return/\S$/.test(b)?e(b,"<em>","</em>"):a})),a=c.converter._dispatch("italicsAndBold.after",a,b,c)}),d.subParser("lists",function(a,b,c){"use strict";function e(a,e){c.gListLevel++,a=a.replace(/\n{2,}$/,"\n"),a+="¨0";var f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,g=/\n[ \t]*\n(?!¨0)/.test(a);return b.disableForced4SpacesIndentedSublists&&(f=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),a=a.replace(f,function(a,e,f,h,i,j,k){k=k&&""!==k.trim()
;var l=d.subParser("outdent")(i,b,c),m="";return j&&b.tasklists&&(m=' class="task-list-item" style="list-style-type: none;"',l=l.replace(/^[ \t]*\[(x|X| )?]/m,function(){var a='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return k&&(a+=" checked"),a+=">"})),l=l.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(a){return"¨A"+a}),e||l.search(/\n{2,}/)>-1?(l=d.subParser("githubCodeBlocks")(l,b,c),l=d.subParser("blockGamut")(l,b,c)):(l=d.subParser("lists")(l,b,c),l=l.replace(/\n$/,""),l=d.subParser("hashHTMLBlocks")(l,b,c),l=l.replace(/\n\n+/g,"\n\n"),l=g?d.subParser("paragraphs")(l,b,c):d.subParser("spanGamut")(l,b,c)),l=l.replace("¨A",""),l="<li"+m+">"+l+"</li>\n"}),a=a.replace(/¨0/g,""),c.gListLevel--,e&&(a=a.replace(/\s+$/,"")),a}function f(a,c,d){var f=b.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,g=b.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,h="ul"===c?f:g,i="";return-1!==a.search(h)?function a(b){var j=b.search(h);-1!==j?(i+="\n<"+c+">\n"+e(b.slice(0,j),!!d)+"</"+c+">\n",c="ul"===c?"ol":"ul",h="ul"===c?f:g,a(b.slice(j))):i+="\n<"+c+">\n"+e(b,!!d)+"</"+c+">\n"}(a):i="\n<"+c+">\n"+e(a,!!d)+"</"+c+">\n",i}return a=c.converter._dispatch("lists.before",a,b,c),a+="¨0",a=c.gListLevel?a.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c){return f(b,c.search(/[*+-]/g)>-1?"ul":"ol",!0)}):a.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(a,b,c,d){return f(c,d.search(/[*+-]/g)>-1?"ul":"ol",!1)}),a=a.replace(/¨0/,""),a=c.converter._dispatch("lists.after",a,b,c)}),d.subParser("outdent",function(a,b,c){"use strict";return a=c.converter._dispatch("outdent.before",a,b,c),a=a.replace(/^(\t|[ ]{1,4})/gm,"¨0"),a=a.replace(/¨0/g,""),a=c.converter._dispatch("outdent.after",a,b,c)}),d.subParser("paragraphs",function(a,b,c){"use strict";a=c.converter._dispatch("paragraphs.before",a,b,c),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var e=a.split(/\n{2,}/g),f=[],g=e.length,h=0;h<g;h++){var i=e[h];i.search(/¨(K|G)(\d+)\1/g)>=0?f.push(i):i.search(/\S/)>=0&&(i=d.subParser("spanGamut")(i,b,c),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",f.push(i))}for(g=f.length,h=0;h<g;h++){for(var j="",k=f[h],l=!1;/¨(K|G)(\d+)\1/.test(k);){var m=RegExp.$1,n=RegExp.$2;j="K"===m?c.gHtmlBlocks[n]:l?d.subParser("encodeCode")(c.ghCodeBlocks[n].text,b,c):c.ghCodeBlocks[n].codeblock,j=j.replace(/\$/g,"$$$$"),k=k.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,j),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(k)&&(l=!0)}f[h]=k}return a=f.join("\n"),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),c.converter._dispatch("paragraphs.after",a,b,c)}),d.subParser("runExtension",function(a,b,c,d){"use strict";if(a.filter)b=a.filter(b,d.converter,c);else if(a.regex){var e=a.regex;e instanceof RegExp||(e=new RegExp(e,"g")),b=b.replace(e,a.replace)}return b}),d.subParser("spanGamut",function(a,b,c){"use strict";return a=c.converter._dispatch("spanGamut.before",a,b,c),a=d.subParser("codeSpans")(a,b,c),a=d.subParser("escapeSpecialCharsWithinTagAttributes")(a,b,c),a=d.subParser("encodeBackslashEscapes")(a,b,c),a=d.subParser("images")(a,b,c),a=d.subParser("anchors")(a,b,c),a=d.subParser("autoLinks")(a,b,c),a=d.subParser("italicsAndBold")(a,b,c),a=d.subParser("strikethrough")(a,b,c),a=d.subParser("simplifiedAutoLinks")(a,b,c),a=d.subParser("hashHTMLSpans")(a,b,c),a=d.subParser("encodeAmpsAndAngles")(a,b,c),b.simpleLineBreaks?/\n\n¨K/.test(a)||(a=a.replace(/\n+/g,"<br />\n")):a=a.replace(/  +\n/g,"<br />\n"),a=c.converter._dispatch("spanGamut.after",a,b,c)}),d.subParser("strikethrough",function(a,b,c){"use strict";function e(a){return b.simplifiedAutoLink&&(a=d.subParser("simplifiedAutoLinks")(a,b,c)),"<del>"+a+"</del>"}return b.strikethrough&&(a=c.converter._dispatch("strikethrough.before",a,b,c),a=a.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(a,b){return e(b)}),a=c.converter._dispatch("strikethrough.after",a,b,c)),a}),d.subParser("stripLinkDefinitions",function(a,b,c){"use strict";var e=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,f=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+\/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;a+="¨0";var g=function(a,e,f,g,h,i,j){return e=e.toLowerCase(),f.match(/^data:.+?\/.+?;base64,/)?c.gUrls[e]=f.replace(/\s/g,""):c.gUrls[e]=d.subParser("encodeAmpsAndAngles")(f,b,c),i?i+j:(j&&(c.gTitles[e]=j.replace(/"|'/g,"&quot;")),b.parseImgDimensions&&g&&h&&(c.gDimensions[e]={width:g,height:h}),"")};return a=a.replace(f,g),a=a.replace(e,g),a=a.replace(/¨0/,"")}),d.subParser("tables",function(a,b,c){"use strict";function e(a){return/^:[ \t]*--*$/.test(a)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(a)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(a)?' style="text-align:center;"':""}function f(a,e){var f="";return a=a.trim(),(b.tablesHeaderId||b.tableHeaderId)&&(f=' id="'+a.replace(/ /g,"_").toLowerCase()+'"'),a=d.subParser("spanGamut")(a,b,c),"<th"+f+e+">"+a+"</th>\n"}function g(a,e){return"<td"+e+">"+d.subParser("spanGamut")(a,b,c)+"</td>\n"}function h(a,b){for(var c="<table>\n<thead>\n<tr>\n",d=a.length,e=0;e<d;++e)c+=a[e];for(c+="</tr>\n</thead>\n<tbody>\n",e=0;e<b.length;++e){c+="<tr>\n";for(var f=0;f<d;++f)c+=b[e][f];c+="</tr>\n"}return c+="</tbody>\n</table>\n"}function i(a){var b,c=a.split("\n");for(b=0;b<c.length;++b)/^ {0,3}\|/.test(c[b])&&(c[b]=c[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(c[b])&&(c[b]=c[b].replace(/\|[ \t]*$/,""));var i=c[0].split("|").map(function(a){return a.trim()}),j=c[1].split("|").map(function(a){return a.trim()}),k=[],l=[],m=[],n=[];for(c.shift(),c.shift(),b=0;b<c.length;++b)""!==c[b].trim()&&k.push(c[b].split("|").map(function(a){return a.trim()}));if(i.length<j.length)return a;for(b=0;b<j.length;++b)m.push(e(j[b]));for(b=0;b<i.length;++b)d.helper.isUndefined(m[b])&&(m[b]=""),l.push(f(i[b],m[b]));for(b=0;b<k.length;++b){for(var o=[],p=0;p<l.length;++p)d.helper.isUndefined(k[b][p]),o.push(g(k[b][p],m[p]));n.push(o)}return h(l,n)}if(!b.tables)return a;var j=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,k=/^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|\n( {0,3}\|.+\|\n)*(?:\n|¨0)/gm;return a=c.converter._dispatch("tables.before",a,b,c),a=a.replace(/\\(\|)/g,d.helper.escapeCharactersCallback),a=a.replace(j,i),a=a.replace(k,i),a=c.converter._dispatch("tables.after",a,b,c)}),d.subParser("unescapeSpecialChars",function(a,b,c){"use strict";return a=c.converter._dispatch("unescapeSpecialChars.before",a,b,c),a=a.replace(/¨E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)}),a=c.converter._dispatch("unescapeSpecialChars.after",a,b,c)});var r=this; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){"use strict";return d}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=d:r.showdown=d}).call(this);
//# sourceMappingURL=showdown.min.js.map


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports.contentful=t():e.contentful=t()})(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(r,'a',r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=30)}([function(e,t,r){'use strict';function n(e){return'[object Array]'===l.call(e)}function o(e){return null!==e&&'object'==typeof e}function s(e){return'[object Function]'===l.call(e)}function d(e,t){if(null!==e&&'undefined'!=typeof e)if('object'==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function a(){function e(e,r){t[r]='object'==typeof t[r]&&'object'==typeof e?a(t[r],e):e}for(var t={},r=0,n=arguments.length;r<n;r++)d(arguments[r],e);return t}var i=r(12),p=r(34),l=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:function(e){return'[object ArrayBuffer]'===l.call(e)},isBuffer:p,isFormData:function(e){return'undefined'!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){var t;return t='undefined'!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t},isString:function(e){return'string'==typeof e},isNumber:function(e){return'number'==typeof e},isObject:o,isUndefined:function(e){return'undefined'==typeof e},isDate:function(e){return'[object Date]'===l.call(e)},isFile:function(e){return'[object File]'===l.call(e)},isBlob:function(e){return'[object Blob]'===l.call(e)},isFunction:s,isStream:function(e){return o(e)&&s(e.pipe)},isURLSearchParams:function(e){return'undefined'!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return'undefined'!=typeof navigator&&'ReactNative'===navigator.product?!1:'undefined'!=typeof window&&'undefined'!=typeof document},forEach:d,merge:a,extend:function(e,t,r){return d(t,function(t,n){e[n]=r&&'function'==typeof t?i(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,'').replace(/\s*$/,'')}}},function(e,t,r){'use strict';var n=r(51);r.d(t,'a',function(){return n.a});var o=r(104);r.d(t,'b',function(){return o.a});var s=r(105),a=r(106);r.d(t,'c',function(){return a.a});var i=r(110);r.d(t,'d',function(){return i.a});var d=r(112);r.d(t,'e',function(){return d.a})},function(e,t,r){var n=r(52);e.exports=function(e){return n(e,1|4)}},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(54),s=r(55),a=r(56),i=r(57),d=r(58);n.prototype.clear=o,n.prototype['delete']=s,n.prototype.get=a,n.prototype.has=i,n.prototype.set=d,e.exports=n},function(e,t,r){var n=r(17);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},function(e,t,r){var n=r(10),o=n(Object,'create');e.exports=o},function(e,t,r){var n=r(74);e.exports=function(e,t){var r=e.__data__;return n(t)?r['string'==typeof t?'string':'hash']:r.map}},function(e,t,r){var n=r(21),o=r(22);e.exports=function(e,t,r,s){var a=!r;r||(r={});for(var i=-1,d=t.length;++i<d;){var p=t[i],l=s?s(r[p],e[p],p,r,e):void 0;l===void 0&&(l=e[p]),a?o(r,p,l):n(r,p,l)}return r}},function(e,t,r){'use strict';(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e['Content-Type'])&&(e['Content-Type']=t)}var o=r(0),s=r(36),a={"Content-Type":'application/x-www-form-urlencoded'},i={adapter:function(){var e;return'undefined'==typeof XMLHttpRequest?'undefined'!=typeof t&&(e=r(13)):e=r(13),e}(),transformRequest:[function(e,t){return s(t,'Content-Type'),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,'application/x-www-form-urlencoded;charset=utf-8'),e.toString()):o.isObject(e)?(n(t,'application/json;charset=utf-8'),JSON.stringify(e)):e}],transformResponse:[function(e){if('string'==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:'XSRF-TOKEN',xsrfHeaderName:'X-XSRF-TOKEN',maxContentLength:-1,validateStatus:function(e){return 200<=e&&300>e}};i.headers={common:{Accept:'application/json, text/plain, */*'}},o.forEach(['delete','get','head'],function(e){i.headers[e]={}}),o.forEach(['post','put','patch'],function(e){i.headers[e]=o.merge(a)}),e.exports=i}).call(t,r(9))},function(e){function t(){throw new Error('setTimeout has not been defined')}function r(){throw new Error('clearTimeout has not been defined')}function n(e){if(p===setTimeout)return setTimeout(e,0);if((p===t||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function o(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function s(){y&&u&&(y=!1,u.length?f=u.concat(f):h=-1,f.length&&a())}function a(){if(!y){var e=n(s);y=!0;for(var t=f.length;t;){for(u=f,f=[];++h<t;)u&&u[h].run();h=-1,t=f.length}u=null,y=!1,o(e)}}function d(e,t){this.fun=e,this.array=t}function i(){}var p,l,c=e.exports={};(function(){try{p='function'==typeof setTimeout?setTimeout:t}catch(r){p=t}try{l='function'==typeof clearTimeout?clearTimeout:r}catch(t){l=r}})();var u,f=[],y=!1,h=-1;c.nextTick=function(e){var t=Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new d(e,t)),1!==f.length||y||n(a)},d.prototype.run=function(){this.fun.apply(null,this.array)},c.title='browser',c.browser=!0,c.env={},c.argv=[],c.version='',c.versions={},c.on=i,c.addListener=i,c.once=i,c.off=i,c.removeListener=i,c.removeAllListeners=i,c.emit=i,c.prependListener=i,c.prependOnceListener=i,c.listeners=function(){return[]},c.binding=function(){throw new Error('process.binding is not supported')},c.cwd=function(){return'/'},c.chdir=function(){throw new Error('process.chdir is not supported')},c.umask=function(){return 0}},function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e){e.exports=function(e,t){return function(r){return e(t(r))}}},function(e){'use strict';e.exports=function(e,t){return function(){for(var r=Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){'use strict';var n=r(0),o=r(37),s=r(39),a=r(40),i=r(41),d=r(14),p='undefined'!=typeof window&&window.btoa&&window.btoa.bind(window)||r(42);e.exports=function(t){return new Promise(function(e,l){var c=t.data,u=t.headers;n.isFormData(c)&&delete u['Content-Type'];var f=new XMLHttpRequest,y='onreadystatechange',h=!1;if('undefined'==typeof window||!window.XDomainRequest||'withCredentials'in f||i(t.url)||(f=new window.XDomainRequest,y='onload',h=!0,f.onprogress=function(){},f.ontimeout=function(){}),t.auth){var g=t.auth.username||'',m=t.auth.password||'';u.Authorization='Basic '+p(g+':'+m)}if(f.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),f.timeout=t.timeout,f[y]=function(){if(f&&(4===f.readyState||h)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf('file:'))){var r='getAllResponseHeaders'in f?a(f.getAllResponseHeaders()):null,n=t.responseType&&'text'!==t.responseType?f.response:f.responseText,s={data:n,status:1223===f.status?204:f.status,statusText:1223===f.status?'No Content':f.statusText,headers:r,config:t,request:f};o(e,l,s),f=null}},f.onerror=function(){l(d('Network Error',t,null,f)),f=null},f.ontimeout=function(){l(d('timeout of '+t.timeout+'ms exceeded',t,'ECONNABORTED',f)),f=null},n.isStandardBrowserEnv()){var x=r(43),b=(t.withCredentials||i(t.url))&&t.xsrfCookieName?x.read(t.xsrfCookieName):void 0;b&&(u[t.xsrfHeaderName]=b)}if('setRequestHeader'in f&&n.forEach(u,function(e,t){'undefined'==typeof c&&'content-type'===t.toLowerCase()?delete u[t]:f.setRequestHeader(t,e)}),t.withCredentials&&(f.withCredentials=!0),t.responseType)try{f.responseType=t.responseType}catch(r){if('json'!==t.responseType)throw r}'function'==typeof t.onDownloadProgress&&f.addEventListener('progress',t.onDownloadProgress),'function'==typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener('progress',t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(e){f&&(f.abort(),l(e),f=null)}),void 0===c&&(c=null),f.send(c)})}},function(e,t,r){'use strict';var n=r(38);e.exports=function(e,t,r,o,s){var a=new Error(e);return n(a,t,r,o,s)}},function(e){'use strict';e.exports=function(e){return!!(e&&e.__CANCEL__)}},function(e){'use strict';function t(e){this.message=e}t.prototype.toString=function(){return'Cancel'+(this.message?': '+this.message:'')},t.prototype.__CANCEL__=!0,e.exports=t},function(e){e.exports=function(e,t){return e===t||e!==e&&t!==t}},function(e,t,r){var n=r(10),o=r(19),s=n(o,'Map');e.exports=s},function(e,t,r){var n=r(64),o='object'==typeof self&&self&&self.Object===Object&&self,s=n||o||Function('return this')();e.exports=s},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(66),s=r(73),a=r(75),i=r(76),d=r(77);n.prototype.clear=o,n.prototype['delete']=s,n.prototype.get=a,n.prototype.has=i,n.prototype.set=d,e.exports=n},function(e,t,r){var n=r(22),o=r(17),s=Object.prototype,a=s.hasOwnProperty;e.exports=function(e,t,r){var s=e[t];a.call(e,t)&&o(s,r)&&(r!==void 0||t in e)||n(e,t,r)}},function(e,t,r){var n=r(79);e.exports=function(e,t,r){'__proto__'==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},function(e,t,r){var n=r(11),o=n(Object.keys,Object);e.exports=o},function(e){e.exports=function(e){var t=typeof e;return null!=e&&('object'==t||'function'==t)}},function(e,t,r){var n=r(11),o=n(Object.getPrototypeOf,Object);e.exports=o},function(e,t){'use strict';var r=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;256>t;++t)e.push('%'+((16>t?'0':'')+t.toString(16)).toUpperCase());return e}(),o=function(e){for(var t,r;e.length;)if(r=e.pop(),t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)'undefined'!=typeof t[o]&&n.push(t[o]);r.obj[r.prop]=n}return t};t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)'undefined'!=typeof e[n]&&(r[n]=e[n]);return r},t.merge=function(e,n,o){if(!n)return e;if('object'!=typeof n){if(Array.isArray(e))e.push(n);else if('object'==typeof e)(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0);else return[e,n];return e}if('object'!=typeof e)return[e].concat(n);var s=e;return Array.isArray(e)&&!Array.isArray(n)&&(s=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,s){r.call(e,s)?e[s]&&'object'==typeof e[s]?e[s]=t.merge(e[s],n,o):e.push(n):e[s]=n}),e):Object.keys(n).reduce(function(e,s){var a=n[s];return e[s]=r.call(e,s)?t.merge(e[s],a,o):a,e},s)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g,' '))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t,r='string'==typeof e?e:e+'',o='',s=0;s<r.length;++s){if(t=r.charCodeAt(s),45===t||46===t||95===t||126===t||48<=t&&57>=t||65<=t&&90>=t||97<=t&&122>=t){o+=r.charAt(s);continue}if(128>t){o+=n[t];continue}if(2048>t){o+=n[192|t>>6]+n[128|63&t];continue}if(55296>t||57344<=t){o+=n[224|t>>12]+n[128|63&t>>6]+n[128|63&t];continue}s+=1,t=65536+((1023&t)<<10|1023&r.charCodeAt(s)),o+=n[240|t>>18]+n[128|63&t>>12]+n[128|63&t>>6]+n[128|63&t]}return o},t.compact=function(e){for(var t=[{obj:{o:e},prop:'o'}],r=[],n=0;n<t.length;++n)for(var s=t[n],a=s.obj[s.prop],i=Object.keys(a),d=0;d<i.length;++d){var p=i[d],l=a[p];'object'==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:p}),r.push(l))}return o(t)},t.isRegExp=function(e){return'[object RegExp]'===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null===e||'undefined'==typeof e?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},function(e){'use strict';var t=String.prototype.replace,r=/%20/g;e.exports={default:'RFC3986',formatters:{RFC1738:function(e){return t.call(e,r,'+')},RFC3986:function(e){return e}},RFC1738:'RFC1738',RFC3986:'RFC3986'}},function(e,t,r){'use strict';t.a=function(e,t){function r(e,t){if(t)n(e);else{var r=Object.keys(e);r.forEach(function(t){return n(e[t])})}}function n(e){var t=Object.keys(e);t.forEach(function(t){var r=e[t];Array.isArray(r)?i(r,t,e):a(r,t,e)})}function a(e,t,r){null!==e&&'object'===('undefined'==typeof e?'undefined':s(e))&&e.hasOwnProperty('sys')&&e.sys.hasOwnProperty('type')&&'Link'===e.sys.type&&Object.defineProperty(r,t,{get:function(){return d(e)}})}function i(e,t,r){e.length&&null!==e[0]&&'object'===s(e[0])&&e[0].hasOwnProperty('sys')&&e[0].sys.hasOwnProperty('type')&&'Link'===e[0].sys.type&&Object.defineProperty(r,t,{get:function(){return e.map(function(e){return d(e)})}})}var d=o()(function(e){var n=t[e.sys.linkType]||[],o=n.find(function(t){return t.sys.id===e.sys.id});return o&&o.fields?(r(o.fields,!!o.sys.locale),o):e},function(e){return e.sys.id});e.forEach(function(e){e.fields&&r(e.fields,!!e.sys.locale)})};var n=r(117),o=r.n(n),s='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e}},function(e,t,r){'use strict';t.a=function(e){return Object.defineProperty(e,'stringifySafe',{enumerable:!1,configurable:!1,writable:!1,value:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'';return o()(this,e,t,function(e,t){return{sys:{type:'Link',linkType:'Entry',id:t.sys.id,circular:!0}}})}})};var n=r(118),o=r.n(n)},function(e,t,r){e.exports=r(31)},function(e,t,r){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.createClient=function(e){if(!e.accessToken)throw new TypeError('Expected parameter accessToken');if(!e.space)throw new TypeError('Expected parameter space');var t=!(!!('resolveLinks'in e)&&!e.resolveLinks),r=Object(i.a)(t),n=Object(s.d)('contentful.js/5.0.1',e.application,e.integration);e.defaultHostname='cdn.contentful.com',e.headers=d({},e.headers,{"Content-Type":'application/vnd.contentful.delivery.v1+json',"X-Contentful-User-Agent":n});var p=Object(s.a)(o.a,e);return Object(a.a)({http:p,shouldLinksResolve:r})};var n=r(32),o=r.n(n),s=r(1),a=r(113),i=r(122),d=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}},function(e,t,r){e.exports=r(33)},function(e,t,r){'use strict';function n(e){var t=new a(e),r=s(a.prototype.request,t);return o.extend(r,a.prototype,t),o.extend(r,t),r}var o=r(0),s=r(12),a=r(35),i=r(8),d=n(i);d.Axios=a,d.create=function(e){return n(o.merge(i,e))},d.Cancel=r(16),d.CancelToken=r(49),d.isCancel=r(15),d.all=function(e){return Promise.all(e)},d.spread=r(50),e.exports=d,e.exports.default=d},function(e){function t(e){return!!e.constructor&&'function'==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return'function'==typeof e.readFloatLE&&'function'==typeof e.slice&&t(e.slice(0,0))}e.exports=function(e){return null!=e&&(t(e)||r(e)||!!e._isBuffer)}},function(e,t,r){'use strict';function n(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=r(8),s=r(0),a=r(44),i=r(45),d=r(47),p=r(48);n.prototype.request=function(e){'string'==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(o,this.defaults,{method:'get'},e),e.method=e.method.toLowerCase(),e.baseURL&&!d(e.url)&&(e.url=p(e.baseURL,e.url));var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},s.forEach(['delete','get','head','options'],function(e){n.prototype[e]=function(t,r){return this.request(s.merge(r||{},{method:e,url:t}))}}),s.forEach(['post','put','patch'],function(e){n.prototype[e]=function(t,r,n){return this.request(s.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t,r){'use strict';var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){'use strict';var n=r(14);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n('Request failed with status code '+r.status,r.config,null,r.request,r)):e(r)}},function(e){'use strict';e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){'use strict';function n(e){return encodeURIComponent(e).replace(/%40/gi,'@').replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,'+').replace(/%5B/gi,'[').replace(/%5D/gi,']')}var o=r(0);e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(o.isURLSearchParams(t))s=t.toString();else{var a=[];o.forEach(t,function(e,t){null===e||'undefined'==typeof e||(o.isArray(e)&&(t+='[]'),!o.isArray(e)&&(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(n(t)+'='+n(e))}))}),s=a.join('&')}return s&&(e+=(-1===e.indexOf('?')?'?':'&')+s),e}},function(e,t,r){'use strict';var n=r(0);e.exports=function(e){var t,r,o,s={};return e?(n.forEach(e.split('\n'),function(e){o=e.indexOf(':'),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(s[t]=s[t]?s[t]+', '+r:r)}),s):s}},function(e,t,r){'use strict';var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute('href',t),t=o.href),o.setAttribute('href',t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,''):'',host:o.host,search:o.search?o.search.replace(/^\?/,''):'',hash:o.hash?o.hash.replace(/^#/,''):'',hostname:o.hostname,port:o.port,pathname:'/'===o.pathname.charAt(0)?o.pathname:'/'+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement('a');return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e){'use strict';function t(){this.message='String contains an invalid character'}t.prototype=new Error,t.prototype.code=5,t.prototype.name='InvalidCharacterError',e.exports=function(e){for(var r,n,o=e+'',s='',a=0,i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';o.charAt(0|a)||(i='=',a%1);s+=i.charAt(63&r>>8-8*(a%1))){if(n=o.charCodeAt(a+=3/4),255<n)throw new t;r=r<<8|n}return s}},function(e,t,r){'use strict';var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,s,a){var i=[];i.push(e+'='+encodeURIComponent(t)),n.isNumber(r)&&i.push('expires='+new Date(r).toGMTString()),n.isString(o)&&i.push('path='+o),n.isString(s)&&i.push('domain='+s),!0===a&&i.push('secure'),document.cookie=i.join('; ')},read:function(e){var t=document.cookie.match(new RegExp('(^|;\\s*)('+e+')=([^;]*)'));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,'',Date.now()-8.64e7)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,r){'use strict';function n(){this.handlers=[]}var o=r(0);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){'use strict';function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(0),s=r(46),a=r(15),i=r(8);e.exports=function(e){n(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(['delete','get','head','post','put','patch','common'],function(t){delete e.headers[t]});var t=e.adapter||i.adapter;return t(e).then(function(t){return n(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(n(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){'use strict';var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e){'use strict';e.exports=function(e){return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e){'use strict';e.exports=function(e,t){return t?e.replace(/\/+$/,'')+'/'+t.replace(/^\/+/,''):e}},function(e,t,r){'use strict';function n(e){if('function'!=typeof e)throw new TypeError('executor must be a function.');var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(16);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e,t=new n(function(t){e=t});return{token:t,cancel:e}},e.exports=n},function(e){'use strict';e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){'use strict';(function(e){function n(t,r){var o=l({},{insecure:!1,retryOnError:!0,logHandler:function(e,t){if('error'===e&&t){var r=[t.name,t.message].filter(function(e){return e}).join(' - ');return console.error('[error] '+r),void console.error(t)}console.log('['+e+'] '+t)},headers:{},httpAgent:!1,httpsAgent:!1,timeout:3e4,proxy:!1,basePath:''},r);if(!o.accessToken){var a=new TypeError('Expected parameter accessToken');throw o.logHandler('error',a),a}var u=o.insecure?'http':'https',f=o.space?o.space+'/':'',y=o.defaultHostname,h=o.insecure?80:443;if(c.test(o.host)){var g=o.host.split(':');if(2===g.length){var m=p(g,2);y=m[0],h=m[1]}else y=g[0]}o.basePath&&(o.basePath='/'+o.basePath.split('/').filter(Boolean).join('/'));var x=u+'://'+y+':'+h+o.basePath+'/spaces/'+f;o.headers.Authorization='Bearer '+o.accessToken,e&&e.release&&'node'===e.release.name&&(o.headers['user-agent']='node.js/'+e.version,o.headers['Accept-Encoding']='gzip');var b={baseURL:x,headers:o.headers,httpAgent:o.httpAgent,httpsAgent:o.httpsAgent,paramsSerializer:i.a.stringify,proxy:o.proxy,timeout:o.timeout,logHandler:o.logHandler,retryOnError:o.retryOnError},_=t.create(b);return _.httpClientParams=r,_.cloneWithNewParams=function(e){return n(t,l({},s()(r),e))},Object(d.a)(_),_}t.a=n;var o=r(2),s=r.n(o),a=r(100),i=r.n(a),d=r(103),p=function(){function e(e,t){var r,n=[],o=!0,s=!1;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(e){s=!0,r=e}finally{try{!o&&i['return']&&i['return']()}finally{if(s)throw r}}return n}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),l=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c=/^(?!\w+:\/\/)([^\s:]+\.[^\s:]+)(?::(\d+))?(?!:)$/}).call(t,r(9))},function(e,t,r){function n(e,t,r,v,L,R){var N,q=t&w,z=t&A;if(r&&(N=L?r(e,v,L,R):r(e)),void 0!==N)return N;if(!j(e))return e;var U=b(e);if(!U){var D=h(e),B=D==P||D==C;if(_(e))return p(e,q);if(D!=S&&D!=O&&(!B||L)){if(!T[D])return L?e:{};N=m(e,D,n,q)}else if(N=z||B?{}:x(e),!q)return z?u(e,d(N,e)):c(e,i(N,e))}else if(N=g(e),!q)return l(e,N);R||(R=new o);var F=R.get(e);if(F)return F;R.set(e,N);var H=t&E?z?y:f:z?keysIn:k,I=U?void 0:H(e);return s(I||e,function(o,s){I&&(s=o,o=e[s]),a(N,s,n(o,t,r,s,e,R))}),N}var o=r(53),s=r(78),a=r(21),i=r(80),d=r(81),p=r(83),l=r(85),c=r(86),u=r(88),f=r(90),y=r(91),h=r(92),g=r(93),m=r(94),x=r(95),b=r(98),_=r(99),j=r(24),k=r(23),w=1,A=2,E=4,O='[object Arguments]',P='[object Function]',C='[object GeneratorFunction]',S='[object Object]',T={};T[O]=T['[object Array]']=T['[object ArrayBuffer]']=T['[object DataView]']=T['[object Boolean]']=T['[object Date]']=T['[object Float32Array]']=T['[object Float64Array]']=T['[object Int8Array]']=T['[object Int16Array]']=T['[object Int32Array]']=T['[object Map]']=T['[object Number]']=T[S]=T['[object RegExp]']=T['[object Set]']=T['[object String]']=T['[object Symbol]']=T['[object Uint8Array]']=T['[object Uint8ClampedArray]']=T['[object Uint16Array]']=T['[object Uint32Array]']=!0,T['[object Error]']=T[P]=T['[object WeakMap]']=!1,e.exports=n},function(e,t,r){function n(e){var t=this.__data__=new o(e);this.size=t.size}var o=r(3),s=r(59),a=r(60),i=r(61),d=r(62),p=r(63);n.prototype.clear=s,n.prototype['delete']=a,n.prototype.get=i,n.prototype.has=d,n.prototype.set=p,e.exports=n},function(e){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,r){var n=r(4),o=Array.prototype,s=o.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);if(0>r)return!1;var o=t.length-1;return r==o?t.pop():s.call(t,r,1),--this.size,!0}},function(e,t,r){var n=r(4);e.exports=function(e){var t=this.__data__,r=n(t,e);return 0>r?void 0:t[r][1]}},function(e,t,r){var n=r(4);e.exports=function(e){return-1<n(this.__data__,e)}},function(e,t,r){var n=r(4);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return 0>o?(++this.size,r.push([e,t])):r[o][1]=t,this}},function(e,t,r){var n=r(3);e.exports=function(){this.__data__=new n,this.size=0}},function(e){e.exports=function(e){var t=this.__data__,r=t['delete'](e);return this.size=t.size,r}},function(e){e.exports=function(e){return this.__data__.get(e)}},function(e){e.exports=function(e){return this.__data__.has(e)}},function(e,t,r){var n=r(3),o=r(18),s=r(20);e.exports=function(e,t){var r=this.__data__;if(r instanceof n){var a=r.__data__;if(!o||a.length<200-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new s(a)}return r.set(e,t),this.size=r.size,this}},function(e,t,r){(function(t){var r='object'==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(t,r(65))},function(e){var t=function(){return this}();try{t=t||Function('return this')()||(1,eval)('this')}catch(r){'object'==typeof window&&(t=window)}e.exports=t},function(e,t,r){var n=r(67),o=r(3),s=r(18);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(s||o),string:new n}}},function(e,t,r){function n(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}var o=r(68),s=r(69),a=r(70),i=r(71),d=r(72);n.prototype.clear=o,n.prototype['delete']=s,n.prototype.get=a,n.prototype.has=i,n.prototype.set=d,e.exports=n},function(e,t,r){var n=r(5);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,r){var n=r(5),o=Object.prototype,s=o.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return r==='__lodash_hash_undefined__'?void 0:r}return s.call(t,e)?t[e]:void 0}},function(e,t,r){var n=r(5),o=Object.prototype,s=o.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?t[e]!==void 0:s.call(t,e)}},function(e,t,r){var n=r(5);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?'__lodash_hash_undefined__':t,this}},function(e,t,r){var n=r(6);e.exports=function(e){var t=n(this,e)['delete'](e);return this.size-=t?1:0,t}},function(e){e.exports=function(e){var t=typeof e;return'string'==t||'number'==t||'symbol'==t||'boolean'==t?'__proto__'!==e:null===e}},function(e,t,r){var n=r(6);e.exports=function(e){return n(this,e).get(e)}},function(e,t,r){var n=r(6);e.exports=function(e){return n(this,e).has(e)}},function(e,t,r){var n=r(6);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},function(e){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!(!1===t(e[r],r,e)););return e}},function(e,t,r){var n=r(10),o=function(){try{var e=n(Object,'defineProperty');return e({},'',{}),e}catch(t){}}();e.exports=o},function(e,t,r){var n=r(7),o=r(23);e.exports=function(e,t){return e&&n(t,o(t),e)}},function(e,t,r){var n=r(7),o=r(82);e.exports=function(e,t){return e&&n(t,o(t),e)}},function(e){e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},function(e,t,r){(function(e){var n=r(19),o='object'==typeof t&&t&&!t.nodeType&&t,s=o&&'object'==typeof e&&e&&!e.nodeType&&e,a=s&&s.exports===o,i=a?n.Buffer:void 0,d=i?i.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=d?d(r):new e.constructor(r);return e.copy(n),n}}).call(t,r(84)(e))},function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],!e.children&&(e.children=[]),Object.defineProperty(e,'loaded',{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,'id',{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e){e.exports=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},function(e,t,r){var n=r(7),o=r(87);e.exports=function(e,t){return n(e,o(e),t)}},function(e){e.exports=function(){return[]}},function(e,t,r){var n=r(7),o=r(89);e.exports=function(e,t){return n(e,o(e),t)}},function(e){e.exports=function(){return[]}},function(e,t,r){var n=r(11),o=n(Object.keys,Object);e.exports=o},function(e){e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},function(e){var t=Object.prototype,r=t.toString;e.exports=function(e){return r.call(e)}},function(e){var t=Object.prototype,r=t.hasOwnProperty;e.exports=function(e){var t=e.length,n=e.constructor(t);return t&&'string'==typeof e[0]&&r.call(e,'index')&&(n.index=e.index,n.input=e.input),n}},function(e){e.exports=function(e){return e}},function(e,t,r){var n=r(96),o=r(25),s=r(97);e.exports=function(e){return'function'!=typeof e.constructor||s(e)?{}:n(o(e))}},function(e,t,r){var n=r(24),o=Object.create,s=function(){function e(){}return function(t){if(!n(t))return{};if(o)return o(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();e.exports=s},function(e){e.exports=function(){return!1}},function(e){var t=Array.isArray;e.exports=t},function(e){e.exports=function(){return!1}},function(e,t,r){'use strict';var n=r(101),o=r(102),s=r(27);e.exports={formats:s,parse:o,stringify:n}},function(e,t,r){'use strict';var n=r(26),o=r(27),s={brackets:function(e){return e+'[]'},indices:function(e,t){return e+'['+t+']'},repeat:function(e){return e}},a=Date.prototype.toISOString,d={delimiter:'&',encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,r,o,s,a,p,l,c,u,f,y,h){var g=t;if('function'==typeof l)g=l(r,g);else if(g instanceof Date)g=f(g);else if(null===g){if(s)return p&&!h?p(r,d.encoder):r;g=''}if('string'==typeof g||'number'==typeof g||'boolean'==typeof g||n.isBuffer(g)){if(p){var m=h?r:p(r,d.encoder);return[y(m)+'='+y(p(g,d.encoder))]}return[y(r)+'='+y(g+'')]}var x=[];if('undefined'==typeof g)return x;var b;if(Array.isArray(l))b=l;else{var _=Object.keys(g);b=c?_.sort(c):_}for(var j,k=0;k<b.length;++k)(j=b[k],!(a&&null===g[j]))&&(x=Array.isArray(g)?x.concat(e(g[j],o(r,j),o,s,a,p,l,c,u,f,y,h)):x.concat(e(g[j],r+(u?'.'+j:'['+j+']'),o,s,a,p,l,c,u,f,y,h)));return x};e.exports=function(e,t){var r=e,a=t?n.assign({},t):{};if(null!==a.encoder&&a.encoder!==void 0&&'function'!=typeof a.encoder)throw new TypeError('Encoder has to be a function.');var l='undefined'==typeof a.delimiter?d.delimiter:a.delimiter,c='boolean'==typeof a.strictNullHandling?a.strictNullHandling:d.strictNullHandling,u='boolean'==typeof a.skipNulls?a.skipNulls:d.skipNulls,f='boolean'==typeof a.encode?a.encode:d.encode,y='function'==typeof a.encoder?a.encoder:d.encoder,h='function'==typeof a.sort?a.sort:null,g='undefined'!=typeof a.allowDots&&a.allowDots,m='function'==typeof a.serializeDate?a.serializeDate:d.serializeDate,x='boolean'==typeof a.encodeValuesOnly?a.encodeValuesOnly:d.encodeValuesOnly;if('undefined'==typeof a.format)a.format=o['default'];else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError('Unknown format option provided.');var b,_,j=o.formatters[a.format];'function'==typeof a.filter?(_=a.filter,r=_('',r)):Array.isArray(a.filter)&&(_=a.filter,b=_);var k=[];if('object'!=typeof r||null===r)return'';var w=a.arrayFormat in s?a.arrayFormat:'indices'in a?a.indices?'indices':'repeat':'indices';var A=s[w];b||(b=Object.keys(r)),h&&b.sort(h);for(var E,O=0;O<b.length;++O)(E=b[O],!(u&&null===r[E]))&&(k=k.concat(p(r[E],E,A,c,u,f?y:null,_,h,g,m,j,x)));var i=k.join(l),P=!0===a.addQueryPrefix?'?':'';return 0<i.length?P+i:''}},function(e,t,r){'use strict';var n=r(26),o=Object.prototype.hasOwnProperty,s={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:'&',depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,''):e,a=t.parameterLimit===Infinity?void 0:t.parameterLimit,d=n.split(t.delimiter,a),p=0;p<d.length;++p){var i,l,c=d[p],u=c.indexOf(']='),f=-1===u?c.indexOf('='):u+1;-1===f?(i=t.decoder(c,s.decoder),l=t.strictNullHandling?null:''):(i=t.decoder(c.slice(0,f),s.decoder),l=t.decoder(c.slice(f+1),s.decoder)),r[i]=o.call(r,i)?[].concat(r[i]).concat(l):l}return r},d=function(e,t,r){for(var n=t,o=e.length-1;0<=o;--o){var s,a=e[o];if('[]'===a)s=[],s=s.concat(n);else{s=r.plainObjects?Object.create(null):{};var i='['===a.charAt(0)&&']'===a.charAt(a.length-1)?a.slice(1,-1):a,d=parseInt(i,10);!isNaN(d)&&a!==i&&d+''===i&&0<=d&&r.parseArrays&&d<=r.arrayLimit?(s=[],s[d]=n):s[i]=n}n=s}return n},p=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,'[$1]'):e,s=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,p=s.exec(n),l=p?n.slice(0,p.index):n,c=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(var u=0;null!==(p=a.exec(n))&&u<r.depth;){if(u+=1,!r.plainObjects&&o.call(Object.prototype,p[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(p[1])}return p&&c.push('['+n.slice(p.index)+']'),d(c,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&'function'!=typeof r.decoder)throw new TypeError('Decoder has to be a function.');if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter='string'==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:s.delimiter,r.depth='number'==typeof r.depth?r.depth:s.depth,r.arrayLimit='number'==typeof r.arrayLimit?r.arrayLimit:s.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder='function'==typeof r.decoder?r.decoder:s.decoder,r.allowDots='boolean'==typeof r.allowDots?r.allowDots:s.allowDots,r.plainObjects='boolean'==typeof r.plainObjects?r.plainObjects:s.plainObjects,r.allowPrototypes='boolean'==typeof r.allowPrototypes?r.allowPrototypes:s.allowPrototypes,r.parameterLimit='number'==typeof r.parameterLimit?r.parameterLimit:s.parameterLimit,r.strictNullHandling='boolean'==typeof r.strictNullHandling?r.strictNullHandling:s.strictNullHandling,''===e||null===e||'undefined'==typeof e)return r.plainObjects?Object.create(null):{};for(var o='string'==typeof e?a(e,r):e,d=r.plainObjects?Object.create(null):{},l=Object.keys(o),c=0;c<l.length;++c){var i=l[c],u=p(i,o[i],r);d=n.merge(d,u,r)}return n.compact(d)}},function(e,t){'use strict';t.a=function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:5;e.interceptors.response.use(function(e){return e},function(o){var s=Math.pow,a=o.response,i=o.config;if(!e.defaults.retryOnError)return Promise.reject(o);var d=null,p=0;if(!a||!i){if(d='Connection',n++,n>t)return o.attempts=n,Promise.reject(o);p=s(Math.SQRT2,n),a={}}else n=0;if(500<=a.status&&600>a.status){d='Server '+a.status;var l=a.headers||{},c=l['x-contentful-request-id']||null;if(r[c]=r[c]||0,r[c]++,r[c]>t||!c)return o.attempts=r[c],Promise.reject(o);p=s(Math.SQRT2,r[c])}else 429===a.status&&(d='Rate limit',a.headers&&o.response.headers['x-contentful-ratelimit-reset']&&(p=a.headers['x-contentful-ratelimit-reset']));return d?(p=Math.floor(1e3*p+200*Math.random()+500),e.defaults.logHandler('warning',d+' error occurred. Waiting for '+p+' ms before retrying...'),new Promise(function(t){setTimeout(function(){t(e(i))},p)})):Promise.reject(o)})};var r={},n=0},function(e,t,r){'use strict';t.a=function(e){var t=e.query,r={};return delete t.resolveLinks,r.params=o()(t),r};var n=r(2),o=r.n(n)},function(){'use strict'},function(e,t,r){'use strict';function n(e){return Object.keys(e).forEach(function(t){var r=e[t];s()(r)&&n(r)}),Object.freeze(e)}t.a=function(e){return n(e.sys||{}),e};var o=r(107),s=r.n(o)},function(e,t,r){var n=r(108),o=r(25),s=r(109),a=Function.prototype,i=Object.prototype,d=a.toString,p=i.hasOwnProperty,l=d.call(Object);e.exports=function(e){if(!s(e)||n(e)!='[object Object]')return!1;var t=o(e);if(null===t)return!0;var r=p.call(t,'constructor')&&t.constructor;return'function'==typeof r&&r instanceof r&&d.call(r)==l}},function(e){var t=Object.prototype,r=t.toString;e.exports=function(e){return r.call(e)}},function(e){e.exports=function(e){return null!=e&&'object'==typeof e}},function(e,t,r){'use strict';(function(e){function n(){return'undefined'!=typeof window&&'navigator'in window&&'product'in window.navigator&&'ReactNative'===window.navigator.product}function o(){return'undefined'!=typeof e&&'release'in e&&'name'in e.release&&'node'===e.release.name}function s(){var e=window.navigator.userAgent,t=window.navigator.platform,r=null;return-1===['Macintosh','MacIntel','MacPPC','Mac68K'].indexOf(t)?-1===['iPhone','iPad','iPod'].indexOf(t)?-1===['Win32','Win64','Windows','WinCE'].indexOf(t)?/Android/.test(e)?r='Android':/Linux/.test(t)&&(r='Linux'):r='Windows':r='iOS':r='macOS',r}function a(){var e=Object(i.platform)()||'linux',t=Object(i.release)()||'0.0.0',r={android:'Android',aix:'Linux',darwin:'macOS',freebsd:'Linux',linux:'Linux',openbsd:'Linux',sunos:'Linux',win32:'Windows'};return e in r?(r[e]||'Linux')+'/'+t:null}t.a=function(t,r,i){var d=[];r&&d.push('app '+r),i&&d.push('integration '+i),d.push('sdk '+t);var p=null;return n()?(p=s(),d.push('platform ReactNative')):o()?(p=a(),d.push('platform node.js/'+e.versions.node)):(p=s(),d.push('platform browser')),p&&d.push('os '+p),d.filter(function(e){return''!==e}).join('; ')+';'};var i=r(111),d=r.n(i)}).call(t,r(9))},function(){},function(e,t,r){'use strict';t.a=function(e){return Object.defineProperty(e,'toPlainObject',{enumerable:!1,configurable:!1,writable:!1,value:function(){return o()(this)}})};var n=r(2),o=r.n(n)},function(e,t,r){'use strict';t.a=function(e){function t(e){if(e.data)throw e.data;throw e}function r(e){e.select&&!/sys/i.test(e.select)&&(e.select+=',sys')}var a=e.http,i=e.shouldLinksResolve,d=o.a.space.wrapSpace,p=o.a.contentType,l=p.wrapContentType,c=p.wrapContentTypeCollection,u=o.a.entry,f=u.wrapEntry,y=u.wrapEntryCollection,h=o.a.asset,g=h.wrapAsset,m=h.wrapAssetCollection;return{getSpace:function(){return a.get('').then(function(e){return d(e.data)},t)},getContentType:function(e){return a.get('content_types/'+e).then(function(e){return l(e.data)},t)},getContentTypes:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a.get('content_types',Object(n.b)({query:e})).then(function(e){return c(e.data)},t)},getEntry:function(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return r(o),a.get('entries/'+e,Object(n.b)({query:o})).then(function(e){return f(e.data)},t)},getEntries:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=i(e),s=e.locale&&'*'===e.locale;return r(e),a.get('entries',Object(n.b)({query:e})).then(function(e){return y(e.data,o,s)},t)},getAsset:function(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return r(o),a.get('assets/'+e,Object(n.b)({query:o})).then(function(e){return g(e.data)},t)},getAssets:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return r(e),a.get('assets',Object(n.b)({query:e})).then(function(e){return m(e.data)},t)},parseEntries:function(e){return y(e,!0,!1)},sync:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=i(e);return Object(s.a)(a,e,t)}}};var n=r(1),o=r(114),s=r(121)},function(e,t,r){'use strict';var n=r(115),o=r(116),s=r(119),a=r(120);t.a={space:n,entry:o,asset:s,contentType:a}},function(e,t,r){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.wrapSpace=function(e){return Object(n.c)(Object(n.e)(e))};var n=r(1)},function(e,t,r){'use strict';function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return e.Entry=e.Entry||[],e.Entry=[].concat(n(new Set([].concat(n(e.Entry),n(t))))),e}Object.defineProperty(t,'__esModule',{value:!0}),t.wrapEntry=function(e){return Object(i.c)(Object(i.e)(a()(e)))},t.wrapEntryCollection=function(e,t,r){var n=Object(p.a)(Object(i.e)(a()(e)));if(t){var s=o(n.includes,n.items);Object(d.a)(n.items,s,r)}return Object(i.c)(n)};var s=r(2),a=r.n(s),i=r(1),d=r(28),p=r(29)},function(e,t,r){function n(e,t){if('function'!=typeof e||null!=t&&'function'!=typeof t)throw new TypeError(s);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],s=r.cache;if(s.has(o))return s.get(o);var a=e.apply(this,n);return r.cache=s.set(o,a)||s,a};return r.cache=new(n.Cache||o),r}var o=r(20),s='Expected a function';n.Cache=o,e.exports=n},function(e,t){function r(e,t){var r=[],n=[];return null==t&&(t=function(e,t){return r[0]===t?'[Circular ~]':'[Circular ~.'+n.slice(0,r.indexOf(t)).join('.')+']'}),function(o,s){if(0<r.length){var a=r.indexOf(this);~a?r.splice(a+1):r.push(this),~a?n.splice(a,Infinity,o):n.push(o),~r.indexOf(s)&&(s=t.call(this,o,s))}else r.push(s);return null==e?s:e.call(this,o,s)}}t=e.exports=function(e,t,n,o){return JSON.stringify(e,r(t,o),n)},t.getSerialize=r},function(e,t,r){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.wrapAsset=function(e){return Object(s.c)(Object(s.e)(o()(e)))},t.wrapAssetCollection=function(e){return Object(s.c)(Object(s.e)(o()(e)))};var n=r(2),o=r.n(n),s=r(1)},function(e,t,r){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.wrapContentType=function(e){return Object(s.c)(Object(s.e)(o()(e)))},t.wrapContentTypeCollection=function(e){return Object(s.c)(Object(s.e)(o()(e)))};var n=r(2),o=r.n(n),s=r(1)},function(e,t,r){'use strict';function n(e){return{entries:e.filter(function(e){return'Entry'===e.sys.type}),assets:e.filter(function(e){return'Asset'===e.sys.type}),deletedEntries:e.filter(function(e){return'DeletedEntry'===e.sys.type}),deletedAssets:e.filter(function(e){return'DeletedAsset'===e.sys.type})}}function o(e){return{Entry:e.filter(function(e){return'Entry'===e.sys.type}),Asset:e.filter(function(e){return'Asset'===e.sys.type})}}function s(e,t,r){return r.nextSyncToken&&(r.sync_token=r.nextSyncToken,delete r.nextSyncToken),r.sync_token&&(delete r.initial,delete r.type,delete r.content_type),e.get('sync',Object(p.b)({query:r})).then(function(n){var o=n.data;return(t=t.concat(o.items),o.nextPageUrl)?(delete r.initial,r.sync_token=a(o.nextPageUrl),s(e,t,r)):o.nextSyncUrl?{items:t,nextSyncToken:a(o.nextSyncUrl)}:void 0})}function a(e){var t=e.split('?');return 0<t.length?t[1].replace('sync_token=',''):''}t.a=function(e,t,r){if(!t||!t.initial&&!t.nextSyncToken)throw new Error('Please provide one of `initial` or `nextSyncToken` parameters for syncing');if(t&&t.content_type&&!t.type)t.type='Entry';else if(t&&t.content_type&&t.type&&'Entry'!==t.type)throw new Error('When using the `content_type` filter your `type` parameter cannot be different from `Entry`.');return s(e,[],t).then(function(e){r&&Object(l.a)(e.items,o(d()(e.items)));var t=n(e.items);return t.nextSyncToken=e.nextSyncToken,Object(p.c)(Object(c.a)(Object(p.e)(t)))},function(e){throw e})};var i=r(2),d=r.n(i),p=r(1),l=r(28),c=r(29)},function(e,t){'use strict';t.a=function(e){return function(t){return!('resolveLinks'in t?!t.resolveLinks:!e)}}}])});

/***/ })
/******/ ]);