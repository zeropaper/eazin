!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("eazin-core/ui/components/Layout/index",[],t):"object"==typeof exports?exports["eazin-core/ui/components/Layout/index"]=t():e["eazin-core/ui/components/Layout/index"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=177)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("core-js/modules/es.array.filter")},function(e,t){e.exports=require("core-js/modules/es.object.keys")},function(e,t){e.exports=require("core-js/modules/es.symbol")},function(e,t){e.exports=require("core-js/modules/es.array.for-each")},function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")},,function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("core-js/modules/es.object.to-string")},function(e,t){e.exports=require("@material-ui/core/styles")},function(e,t){e.exports=require("core-js/modules/es.array.concat")},function(e,t){e.exports=require("react-redux")},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f})),r.d(t,"get",(function(){return d})),r.d(t,"head",(function(){return m})),r.d(t,"post",(function(){return b})),r.d(t,"put",(function(){return y})),r.d(t,"patch",(function(){return h})),r.d(t,"delete",(function(){return v})),r.d(t,"connect",(function(){return g})),r.d(t,"options",(function(){return O})),r.d(t,"trace",(function(){return j}));r(4),r(13),r(2),r(5),r(26),r(30),r(40),r(6),r(7),r(3),r(11),r(19),r(8),r(27);var n=r(32),o=r(25);function a(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function u(e){a(i,n,o,u,c,"next",e)}function c(e){a(i,n,o,u,c,"throw",e)}u(void 0)}))}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"readUserToken",(function(){return o.default}));var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.parser,a=void 0===r?"json":r,u=t.method,s=void 0===u?"GET":u,f=l(t,["parser","method"]),p=Object(o.default)(),d=c({},f,{method:s.toUpperCase(),headers:c({"Content-Type":"application/json",Accept:"application/json"},p?{Authorization:"Bearer ".concat(p)}:{},{},f.headers||{}),body:"string"==typeof f.body?f.body:JSON.stringify(f.body)});return Object(n.default)(e,d).then(function(){var t=i(regeneratorRuntime.mark((function t(r){var n,o,i,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.status>=400)){t.next=22;break}return t.prev=1,t.next=4,r[a]();case 4:n=t.sent,t.next=12;break;case 7:throw t.prev=7,t.t0=t.catch(1),(o=new Error(r.statusText)).fields={},o;case 12:if(!n.error){t.next=21;break}throw"string"!=typeof(i=n.error.message?n.error.message:n.error)&&n.error.name&&(i=n.error.name),"string"!=typeof i&&(i="Serious Error"),console.warn("".concat(f.method||"GET"," ").concat(e,": ").concat(i)),(u=new Error(i)).fields=n.error.fields,u.object=n.error,u;case 21:return t.abrupt("return",n);case 22:if(204!==r.status){t.next=24;break}return t.abrupt("return");case 24:return t.abrupt("return",r[a]());case 25:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}())},p=["get","head","post","put","patch","delete","connect","options","trace"].reduce((function(e,t){return f[t]=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f(e,c({},r,{method:t}))},c({},e,s({},t,f[t]))}),{}),d=p.get,m=p.head,b=p.post,y=p.put,h=p.patch,v=p.delete,g=p.connect,O=p.options,j=p.trace},function(e,t){e.exports=require("@material-ui/core/Typography")},function(e,t){e.exports=require("core-js/modules/es.array.iterator")},function(e,t){e.exports=require("core-js/modules/web.dom-collections.iterator")},function(e,t){e.exports=require("core-js/modules/es.promise")},function(e,t){e.exports=require("core-js/modules/es.array.map")},function(e,t){e.exports=require("core-js/modules/es.symbol.description")},function(e,t){e.exports=require("core-js/modules/es.symbol.iterator")},function(e,t){e.exports=require("core-js/modules/es.string.iterator")},function(e,t,r){"use strict";r.r(t),r.d(t,"PluginsProvider",(function(){return b}));r(4),r(21),r(22),r(13),r(2),r(5),r(60),r(17),r(20),r(30),r(40),r(6),r(7),r(3),r(11),r(43),r(23),r(8),r(18);var n=r(0),o=r.n(n),a=r(10),i=r(28),u=r(47),c=r(37),s=r(15);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=o.a.createContext({plugins:{}}),b=m.Provider,y=function(e){var t=e.plugins,r=e.name,n=e.loadingFallback,f=e.emptyFallback,d=e.switchRoutes,m=e.className,b=e.wrapIn,y=e.wrapOut,h=function(e,t){return function(a){var l=o.a.createElement(o.a.Fragment,null,"View"===r&&o.a.createElement(i.Helmet,{title:e.pageTitle||""}),o.a.createElement(c.default,{errorMessage:"".concat(r," - ").concat(t)},o.a.createElement(o.a.Suspense,{fallback:n||o.a.createElement(u.default,null)},o.a.createElement(e,p({},a,{api:s,wrapIn:b,pluginPoint:r})))));return y?o.a.createElement(y,{className:m,pluginPoint:r},l):m?o.a.createElement("div",{className:m},l):l}},v=Object.keys(t).reduce((function(e,n){return[].concat(l(e),l((t[n].routes||[]).map((function(e){if(!e[r])return null;var t=e[r];return{pluginName:n,Comp:t,exact:e.exact,path:e.path}}))))}),[]).filter(Boolean).sort((function(e,t){var r=e.Comp.weight,n=void 0===r?0:r,o=t.Comp.weight,a=void 0===o?0:o;return n>a?1:n<a?-1:0})).map((function(e){var t=e.pluginName,n=e.Comp,i=e.exact,u=e.path;return o.a.createElement(a.Route,{key:"".concat(t,"-").concat(!!i,"-").concat(u,"-").concat(r),path:u,exact:i,render:h(n,t)})}));return d?(v.push(o.a.createElement(a.Route,{key:"_fallback_",path:"*"},f)),o.a.createElement(a.Switch,null,v)):v};y.defaultProps={loadingFallback:null,emptyFallback:null,switchRoutes:null,className:null,wrapIn:null,wrapOut:null};var h=function(e){return o.a.createElement(m.Consumer,null,(function(t){return o.a.createElement(y,p({},e,{plugins:(t||{}).plugins||{}}))}))};h.defaultProps={loadingFallback:null,emptyFallback:null,switchRoutes:null},t.default=h},function(e,t,r){"use strict";r.r(t),r.d(t,"storeName",(function(){return n}));var n="eazin-1";t.default=function(){try{return JSON.parse(localStorage[n]||"{}").userToken}catch(e){console.warn("reading ",e)}}},function(e,t){e.exports=require("core-js/modules/es.array.index-of")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports=require("react-helmet-async")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("core-js/modules/es.array.reduce")},function(e,t){e.exports=require("redux")},function(e,t,r){"use strict";r.r(t);r(11),r(19);t.default=fetch},function(e,t){e.exports=require("core-js/modules/es.object.get-prototype-of")},function(e,t){e.exports=require("core-js/modules/es.object.set-prototype-of")},function(e,t,r){"use strict";r.r(t);r(13);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(e){var t;return{root:{minWidth:"20vw",maxWidth:"45vw",display:"flex",flexDirection:"column",flexGrow:1,overflow:"auto",justifyContent:"space-between"},top:{},bottom:{margin:e.spacing(1)},menuLink:(t={color:"currentColor",textDecoration:"none",cursor:"pointer",padding:"".concat(e.spacing(1),"px ").concat(e.spacing(2),"px")},n(t,e.breakpoints.up("md"),{padding:e.spacing(2),width:"20vw"}),n(t,"display","block"),n(t,"&.active",{textDecoration:"underline"}),t)}}},,function(e,t,r){"use strict";r.r(t),r.d(t,"withErrorBoundary",(function(){return m}));r(4),r(21),r(22),r(13),r(2),r(5),r(17),r(6),r(7),r(33),r(3),r(34),r(11),r(23),r(8),r(18);var n=r(0),o=r.n(n);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e,r;c(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=l(this,(e=f(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,a=[{key:"getDerivedStateFromError",value:function(e){return console.warn("getDerivedStateFromError",e),{hasError:!0}}}],(n=[{key:"componentDidCatch",value:function(e,t){console.warn("Catched error",e,t)}},{key:"render",value:function(){var e=this.state.hasError,t=this.props,r=t.errorMessage,n=t.children;return e?r||o.a.createElement("span",null,"Something went wrong."):n}}])&&s(r.prototype,n),a&&s(r,a),t}(o.a.Component);d.defaultProps={errorMessage:null,children:null},t.default=d;var m=function(e){return function(t){return o.a.createElement(d,null,o.a.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t)))}}},,,function(e,t){e.exports=require("core-js/modules/es.function.name")},,function(e,t){e.exports=require("@material-ui/core/CircularProgress")},function(e,t){e.exports=require("core-js/modules/es.regexp.to-string")},,function(e,t){e.exports=require("@material-ui/core/Hidden")},function(e,t){e.exports=require("@material-ui/core/Toolbar")},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a={wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",overflow:"hidden"},text:{fontFamily:"sans-serif"}},i=function(e){return!e.empty&&o.a.createElement("div",{style:a.wrapper},o.a.createElement("span",{style:a.text},"Loading..."))};i.defaultProps={empty:null},t.default=i},,function(e,t){e.exports=require("@material-ui/core/colors")},,function(e,t){e.exports=require("@material-ui/core")},,function(e,t,r){"use strict";r.r(t),r.d(t,"makeTheme",(function(){return u}));var n=r(12),o=r(49),a=o.amber,i=o.deepOrange,u=function(e){return Object(n.createMuiTheme)({palette:{primary:a,accent:i,type:e},typography:{useNextVariants:!0}})};t.default=Object(n.createMuiTheme)({palette:{primary:a,accent:i,type:"dark"},typography:{useNextVariants:!0}})},function(e,t,r){"use strict";r.r(t),r.d(t,"makeStore",(function(){return s}));r(4),r(2),r(5),r(6),r(7),r(3),r(8);var n=r(31),o=r(57),a=r.n(o);r(78);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(n.combineReducers)(e),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"CORE_RELOAD"===n.type?t:r(e,n)},i=Object(n.applyMiddleware)(a.a);return Object(n.createStore)(o,t,i)};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},n={};return Object.keys(e).forEach((function(t){r=u({},r,{},(e[t]||{}).reducers||{}),n=u({},n,{},(e[t]||{}).store||{})})),s(r,u({},n,{},t||{}))}},,function(e,t,r){"use strict";r.r(t),r.d(t,"appContextShape",(function(){return R})),r.d(t,"log",(function(){return _})),r.d(t,"AppContextProvider",(function(){return M})),r.d(t,"AppContextConsumer",(function(){return F})),r.d(t,"withAppContext",(function(){return I}));r(4),r(21),r(22),r(13),r(2),r(5),r(60),r(92),r(26),r(17),r(20),r(30),r(6),r(7),r(33),r(3),r(34),r(11),r(93),r(19),r(43),r(94),r(23),r(8),r(18),r(27);var n=r(0),o=r.n(n),a=r(1),i=r.n(a),u=r(14),c=r(28),s=r(12),l=r(42),f=r.n(l),p=r(69),d=r.n(p),m=r(10),b=(r(95),r(54)),y=r(61),h=r(62),v=r(53),g=r(15),O=r(24);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function k(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R={darkMode:i.a.bool.isRequired,log:i.a.func.isRequired,dispatch:i.a.func.isRequired,api:i.a.shape({get:i.a.func.isRequired,head:i.a.func.isRequired,post:i.a.func.isRequired,put:i.a.func.isRequired,patch:i.a.func.isRequired,delete:i.a.func.isRequired,connect:i.a.func.isRequired,options:i.a.func.isRequired,trace:i.a.func.isRequired}).isRequired},T=window.matchMedia("(prefers-color-scheme: dark)").matches,_=Object(h.default)("eazin","lime"),A={loading:0,darkMode:!0,log:_,dispatch:function(){},api:g},L=o.a.createContext(A),M=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=C(t).call(this,e),(r=!o||"object"!==j(o)&&"function"!=typeof o?D(n):o).state={loading:0,darkMode:T,bootstraped:[],plugins:null,ready:!1},r.helmetContext={},r.handleStoreChange=function(){var e=D(r).store.getState,t=r.state.darkMode,n=void 0===t?T:t,o=e().settings,a=(o=void 0===o?{}:o).darkMode,i=void 0===a?T:a;i!==n&&(r.theme=Object(v.makeTheme)(i?"dark":"light"),r.setState({darkMode:i}))},r.bootstrap=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,o,a,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.handleStoreChange(),n=r.store,o=n.getState,a=n.dispatch,i=Object.keys(t),u=r.state.bootstraped,e.next=6,Promise.all(i.reduce((function(e,r){var n=(t[r]||{}).bootstrap;return!n||u.includes(r)?e:[].concat(k(e),[n])}),[]).map((function(e){return e(o(),a,o,t)})));case 6:return e.abrupt("return",new Promise((function(e){return r.setState({plugins:t},e)})));case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){S(a,n,o,i,u,"next",e)}function u(e){S(a,n,o,i,u,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),r.theme=Object(v.makeTheme)(T?"dark":"light"),Promise.all(Object.values(e.plugins)).then((function(t){var n={};return Object.keys(e.plugins).forEach((function(e,r){n[e]=t[r].default||t[r]})),r.store=Object(b.default)(n),r.storeUnsubscribe=r.store.subscribe(r.handleStoreChange),r.bootstrap(n)})).then((function(){return r.setState({ready:!0})})),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),r=t,(n=[{key:"componentWillUnmount",value:function(){"function"==typeof this.storeUnsubscribe&&this.storeUnsubscribe()}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.siteName,n=this.store,a=this.state,i=a.plugins,l=a.ready,p=P(a,["plugins","ready"]);return l?o.a.createElement(L.Provider,{value:x({},p,{dispatch:n.dispatch,log:_,api:g})},o.a.createElement(c.HelmetProvider,{context:this.helmetContext},o.a.createElement(O.PluginsProvider,{value:{plugins:i}},o.a.createElement(m.Router,{history:y.default},o.a.createElement(u.Provider,{store:n},o.a.createElement(s.MuiThemeProvider,{theme:this.theme},o.a.createElement(c.Helmet,{titleTemplate:"%s | ".concat(r)}),o.a.createElement(d.a,null),t)))))):o.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"}},o.a.createElement(f.a,null))}}])&&q(r.prototype,n),a&&q(r,a),t}(o.a.Component),F=L.Consumer,I=function(e){return function(t){return o.a.createElement(F,null,(function(r){return o.a.createElement(e,x({},t,{},r))}))}}},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){"use strict";r.r(t);r(2),r(102),r(103);var n=r(0),o=r.n(n),a=r(12),i=r(89),u=r.n(i),c=r(46),s=r.n(c),l=r(45),f=r.n(l),p=r(90),d=r.n(p),m=r(14),b=r(10),y=r(56),h=r(24),v=function(e){var t=e.className,r=e.classes,n=e.onOpenDrawer,a=e.fixed,i=e.siteName;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{position:a?"fixed":"relative",className:[r.appBar,t].filter(Boolean).join(" ")},o.a.createElement(s.a,{variant:"dense",className:r.toolbar},o.a.createElement(f.a,{mdUp:!0},o.a.createElement(d.a,{"data-testid":"header-menu-button",onClick:function(){return n&&n()}})),o.a.createElement(f.a,{smDown:!0},o.a.createElement("div",null," ")),o.a.createElement(b.NavLink,{className:r.menuLink,to:"/"},i),o.a.createElement("div",{"data-testid":"header-links"},o.a.createElement(h.default,{name:"HeaderLinks"})))),a&&o.a.createElement(s.a,{variant:"dense"}))};v.defaultProps={className:null,onOpenDrawer:null,fixed:!1,siteName:null};var g=Object(a.withStyles)((function(e){return{appBar:{zIndex:1210},toolbar:{display:"flex",justifyContent:"space-between"},menuLink:{color:"currentColor",textDecoration:"none",cursor:"pointer",marginLeft:e.spacing(2)}}}))(v);t.default=Object(m.connect)((function(e){return{answers:e.answers,others:e.others}}))(Object(y.withAppContext)(g))},function(e,t,r){"use strict";r.r(t),r.d(t,"DrawerLink",(function(){return s}));var n=r(0),o=r.n(n),a=r(51),i=r(10),u=r(24),c=r(35),s=Object(a.withStyles)(c.default)((function(e){var t=e.classes,r=e.children,n=e.to;return o.a.createElement(i.NavLink,{className:t.menuLink,to:n},r)}));t.default=Object(i.withRouter)(Object(a.withStyles)(c.default)((function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.top},o.a.createElement(u.default,{className:t.drawerLinks,name:"Drawer"})),o.a.createElement("div",{className:t.bottom},o.a.createElement(u.default,{className:t.drawerLowLinks,name:"DrawerLow"})))})))},function(e,t){e.exports=require("core-js/modules/es.array.from")},function(e,t,r){"use strict";r.r(t);var n=r(66);t.default=Object(n.createBrowserHistory)()},function(e,t,r){"use strict";r.r(t);r(13);t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"black",r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){for(var n,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return r&&(n=console).info.apply(n,["%c[".concat(e,"]"),"color: ".concat(t)].concat(a))}}},,,,function(e,t){e.exports=require("history")},,,function(e,t){e.exports=require("@material-ui/core/CssBaseline")},,,,,,,,,function(e,t){e.exports=require("redux-devtools-extension")},function(e,t){e.exports=require("@material-ui/core/Drawer")},,function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(51),i=r(10),u=r(35);t.default=Object(a.withStyles)(u.default)((function(e){var t=e.classes,r=e.children,n=e.to;return o.a.createElement(i.NavLink,{className:t.menuLink,to:n},r)}))},,,,,,,,function(e,t){e.exports=require("@material-ui/core/AppBar")},function(e,t){e.exports=require("@material-ui/icons/Menu")},,function(e,t){e.exports=require("core-js/modules/es.array.includes")},function(e,t){e.exports=require("core-js/modules/es.object.values")},function(e,t){e.exports=require("core-js/modules/es.string.includes")},function(e,t){e.exports=require("typeface-roboto")},,,,function(e,t,r){"use strict";r.r(t);r(4),r(21),r(22),r(2),r(5),r(17),r(6),r(7),r(3),r(11),r(43),r(23),r(8),r(18);var n=r(0),o=r.n(n),a=r(29),i=r.n(a),u=r(16),c=r.n(u),s=r(79),l=r.n(s),f=r(45),p=r.n(f),d=r(46),m=r.n(d),b=r(12),y=r(58),h=r(59);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w={display:"flex",flexDirection:"column",flexGrow:1,minHeight:"100%"},x=function(e){var t,r,n,a=e.children,u=e.classes,s=e.justify,f=e.align,d=e.siteName,b=e.drawerContent,g=e.toolbar,O=e.footer,w=v(o.a.useState(!1),2),x=w[0],E=w[1],P=!1!==b?b:o.a.createElement(h.default,null),k=i()((j(t={},u.contentFooterWrapper,!0),j(t,u.drawerShifted,P),t)),S=i()((j(r={},u.layoutContent,!0),j(r,u.drawerShifted,!O&&!g&&P),j(r,u.alignCenter,"center"===f),j(r,u.alignEnd,"right"===f),j(r,u.justifyCenter,"center"===s),j(r,u.justifyBottom,"bottom"===s),r));return o.a.createElement(c.a,{component:"div",className:u.root},P&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{mdUp:!0},o.a.createElement(l.a,{"data-testid":"maindrawer",open:x,onClose:function(){return E(!1)},classes:{root:u.drawerRoot,paper:i()((n={},j(n,u.drawer,!0),j(n,u.drawerOpen,x),n))}},o.a.createElement(m.a,{variant:"dense"}),P)),o.a.createElement(p.a,{smDown:!0},o.a.createElement(l.a,{"data-testid":"maindrawer",open:!0,variant:"persistent",classes:{root:u.drawerRoot,paper:u.drawer}},o.a.createElement(m.a,{variant:"dense"}),P))),o.a.createElement(y.default,{siteName:d,onOpenDrawer:function(){return E(!0)},fixed:!0}),O||g?o.a.createElement("div",{className:k},g,o.a.createElement("div",{className:S,"data-testid":"layout-content"},a),O):o.a.createElement("div",{className:S,"data-testid":"layout-content"},a))};x.defaultProps={align:null,drawerContent:!1,toolbar:null,footer:null,justify:null,siteName:null},t.default=Object(b.withStyles)((function(e){return{"@global":{"html, body, #root":w,html:{overflow:"auto"}},root:w,layoutContent:O({},w,j({overflow:"auto",position:"relative",padding:e.spacing(1)},e.breakpoints.up("md"),{padding:e.spacing(2)})),justifyCenter:{justifyContent:"center"},justifyBottom:{justifyContent:"bottom"},alignCenter:{alignItems:"center"},alignEnd:{alignItems:"flex-end"},drawerShifted:j({},e.breakpoints.up("md"),{marginLeft:"20vw"}),drawerRoot:{overflowX:"hidden",overflowY:"auto"},drawer:j({display:"flex",flexDirection:"column",boxShadow:e.shadows[3]},e.breakpoints.up("md"),{width:"20vw"}),drawerOpen:{minWidth:"20vw"},contentFooterWrapper:{position:"relative",flexGrow:1,display:"flex",flexDirection:"column"}}}))(x)},function(e,t,r){"use strict";r.r(t);var n=r(99),o=r(58);r.d(t,"Header",(function(){return o.default}));var a=r(59);r.d(t,"Drawer",(function(){return a.default}));var i=r(81);r.d(t,"DrawerLink",(function(){return i.default}));var u=r(35);r.d(t,"styles",(function(){return u.default})),t.default=n.default},,function(e,t){e.exports=require("core-js/modules/es.array.join")},function(e,t){e.exports=require("core-js/modules/es.string.fixed")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){e.exports=r(100)}])}));