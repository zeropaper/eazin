!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("eazin-core/ui/components/Layout/Layout.Drawer",[],t):"object"==typeof exports?exports["eazin-core/ui/components/Layout/Layout.Drawer"]=t():e["eazin-core/ui/components/Layout/Layout.Drawer"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=173)}({0:function(e,t){e.exports=require("react")},10:function(e,t){e.exports=require("react-router-dom")},11:function(e,t){e.exports=require("core-js/modules/es.object.to-string")},13:function(e,t){e.exports=require("core-js/modules/es.array.concat")},15:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f})),r.d(t,"get",(function(){return d})),r.d(t,"head",(function(){return m})),r.d(t,"post",(function(){return y})),r.d(t,"put",(function(){return b})),r.d(t,"patch",(function(){return j})),r.d(t,"delete",(function(){return g})),r.d(t,"connect",(function(){return v})),r.d(t,"options",(function(){return h})),r.d(t,"trace",(function(){return w}));r(4),r(13),r(2),r(5),r(26),r(30),r(40),r(6),r(7),r(3),r(11),r(19),r(8),r(27);var n=r(32),o=r(25);function c(e,t,r,n,o,c,u){try{var a=e[c](u),i=a.value}catch(e){return void r(e)}a.done?t(i):Promise.resolve(i).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){c(u,n,o,a,i,"next",e)}function i(e){c(u,n,o,a,i,"throw",e)}a(void 0)}))}}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"readUserToken",(function(){return o.default}));var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.parser,c=void 0===r?"json":r,a=t.method,s=void 0===a?"GET":a,f=l(t,["parser","method"]),p=Object(o.default)(),d=i({},f,{method:s.toUpperCase(),headers:i({"Content-Type":"application/json",Accept:"application/json"},p?{Authorization:"Bearer ".concat(p)}:{},{},f.headers||{}),body:"string"==typeof f.body?f.body:JSON.stringify(f.body)});return Object(n.default)(e,d).then(function(){var t=u(regeneratorRuntime.mark((function t(r){var n,o,u,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.status>=400)){t.next=22;break}return t.prev=1,t.next=4,r[c]();case 4:n=t.sent,t.next=12;break;case 7:throw t.prev=7,t.t0=t.catch(1),(o=new Error(r.statusText)).fields={},o;case 12:if(!n.error){t.next=21;break}throw"string"!=typeof(u=n.error.message?n.error.message:n.error)&&n.error.name&&(u=n.error.name),"string"!=typeof u&&(u="Serious Error"),console.warn("".concat(f.method||"GET"," ").concat(e,": ").concat(u)),(a=new Error(u)).fields=n.error.fields,a.object=n.error,a;case 21:return t.abrupt("return",n);case 22:if(204!==r.status){t.next=24;break}return t.abrupt("return");case 24:return t.abrupt("return",r[c]());case 25:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}())},p=["get","head","post","put","patch","delete","connect","options","trace"].reduce((function(e,t){return f[t]=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f(e,i({},r,{method:t}))},i({},e,s({},t,f[t]))}),{}),d=p.get,m=p.head,y=p.post,b=p.put,j=p.patch,g=p.delete,v=p.connect,h=p.options,w=p.trace},17:function(e,t){e.exports=require("core-js/modules/es.array.iterator")},173:function(e,t,r){e.exports=r(59)},18:function(e,t){e.exports=require("core-js/modules/web.dom-collections.iterator")},19:function(e,t){e.exports=require("core-js/modules/es.promise")},2:function(e,t){e.exports=require("core-js/modules/es.array.filter")},20:function(e,t){e.exports=require("core-js/modules/es.array.map")},21:function(e,t){e.exports=require("core-js/modules/es.symbol.description")},22:function(e,t){e.exports=require("core-js/modules/es.symbol.iterator")},23:function(e,t){e.exports=require("core-js/modules/es.string.iterator")},24:function(e,t,r){"use strict";r.r(t),r.d(t,"PluginsProvider",(function(){return y}));r(4),r(21),r(22),r(13),r(2),r(5),r(60),r(17),r(20),r(30),r(40),r(6),r(7),r(3),r(11),r(43),r(23),r(8),r(18);var n=r(0),o=r.n(n),c=r(10),u=r(28),a=r(47),i=r(37),s=r(15);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=o.a.createContext({plugins:{}}),y=m.Provider,b=function(e){var t=e.plugins,r=e.name,n=e.loadingFallback,f=e.emptyFallback,d=e.switchRoutes,m=e.className,y=e.wrapIn,b=e.wrapOut,j=function(e,t){return function(c){var l=o.a.createElement(o.a.Fragment,null,"View"===r&&o.a.createElement(u.Helmet,{title:e.pageTitle||""}),o.a.createElement(i.default,{errorMessage:"".concat(r," - ").concat(t)},o.a.createElement(o.a.Suspense,{fallback:n||o.a.createElement(a.default,null)},o.a.createElement(e,p({},c,{api:s,wrapIn:y,pluginPoint:r})))));return b?o.a.createElement(b,{className:m,pluginPoint:r},l):m?o.a.createElement("div",{className:m},l):l}},g=Object.keys(t).reduce((function(e,n){return[].concat(l(e),l((t[n].routes||[]).map((function(e){if(!e[r])return null;var t=e[r];return{pluginName:n,Comp:t,exact:e.exact,path:e.path}}))))}),[]).filter(Boolean).sort((function(e,t){var r=e.Comp.weight,n=void 0===r?0:r,o=t.Comp.weight,c=void 0===o?0:o;return n>c?1:n<c?-1:0})).map((function(e){var t=e.pluginName,n=e.Comp,u=e.exact,a=e.path;return o.a.createElement(c.Route,{key:"".concat(t,"-").concat(!!u,"-").concat(a,"-").concat(r),path:a,exact:u,render:j(n,t)})}));return d?(g.push(o.a.createElement(c.Route,{key:"_fallback_",path:"*"},f)),o.a.createElement(c.Switch,null,g)):g};b.defaultProps={loadingFallback:null,emptyFallback:null,switchRoutes:null,className:null,wrapIn:null,wrapOut:null};var j=function(e){return o.a.createElement(m.Consumer,null,(function(t){return o.a.createElement(b,p({},e,{plugins:(t||{}).plugins||{}}))}))};j.defaultProps={loadingFallback:null,emptyFallback:null,switchRoutes:null},t.default=j},25:function(e,t,r){"use strict";r.r(t),r.d(t,"storeName",(function(){return n}));var n="eazin-1";t.default=function(){try{return JSON.parse(localStorage[n]||"{}").userToken}catch(e){console.warn("reading ",e)}}},26:function(e,t){e.exports=require("core-js/modules/es.array.index-of")},27:function(e,t){e.exports=require("regenerator-runtime/runtime")},28:function(e,t){e.exports=require("react-helmet-async")},3:function(e,t){e.exports=require("core-js/modules/es.object.keys")},30:function(e,t){e.exports=require("core-js/modules/es.array.reduce")},32:function(e,t,r){"use strict";r.r(t);r(11),r(19);t.default=fetch},33:function(e,t){e.exports=require("core-js/modules/es.object.get-prototype-of")},34:function(e,t){e.exports=require("core-js/modules/es.object.set-prototype-of")},35:function(e,t,r){"use strict";r.r(t);r(13);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(e){var t;return{root:{minWidth:"20vw",maxWidth:"45vw",display:"flex",flexDirection:"column",flexGrow:1,overflow:"auto",justifyContent:"space-between"},top:{},bottom:{margin:e.spacing(1)},menuLink:(t={color:"currentColor",textDecoration:"none",cursor:"pointer",padding:"".concat(e.spacing(1),"px ").concat(e.spacing(2),"px")},n(t,e.breakpoints.up("md"),{padding:e.spacing(2),width:"20vw"}),n(t,"display","block"),n(t,"&.active",{textDecoration:"underline"}),t)}}},37:function(e,t,r){"use strict";r.r(t),r.d(t,"withErrorBoundary",(function(){return m}));r(4),r(21),r(22),r(13),r(2),r(5),r(17),r(6),r(7),r(33),r(3),r(34),r(11),r(23),r(8),r(18);var n=r(0),o=r.n(n);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e,r;i(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(r=l(this,(e=f(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},r}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,c=[{key:"getDerivedStateFromError",value:function(e){return console.warn("getDerivedStateFromError",e),{hasError:!0}}}],(n=[{key:"componentDidCatch",value:function(e,t){console.warn("Catched error",e,t)}},{key:"render",value:function(){var e=this.state.hasError,t=this.props,r=t.errorMessage,n=t.children;return e?r||o.a.createElement("span",null,"Something went wrong."):n}}])&&s(r.prototype,n),c&&s(r,c),t}(o.a.Component);d.defaultProps={errorMessage:null,children:null},t.default=d;var m=function(e){return function(t){return o.a.createElement(d,null,o.a.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t)))}}},4:function(e,t){e.exports=require("core-js/modules/es.symbol")},40:function(e,t){e.exports=require("core-js/modules/es.function.name")},43:function(e,t){e.exports=require("core-js/modules/es.regexp.to-string")},47:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c={wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",overflow:"hidden"},text:{fontFamily:"sans-serif"}},u=function(e){return!e.empty&&o.a.createElement("div",{style:c.wrapper},o.a.createElement("span",{style:c.text},"Loading..."))};u.defaultProps={empty:null},t.default=u},5:function(e,t){e.exports=require("core-js/modules/es.array.for-each")},51:function(e,t){e.exports=require("@material-ui/core")},59:function(e,t,r){"use strict";r.r(t),r.d(t,"DrawerLink",(function(){return s}));var n=r(0),o=r.n(n),c=r(51),u=r(10),a=r(24),i=r(35),s=Object(c.withStyles)(i.default)((function(e){var t=e.classes,r=e.children,n=e.to;return o.a.createElement(u.NavLink,{className:t.menuLink,to:n},r)}));t.default=Object(u.withRouter)(Object(c.withStyles)(i.default)((function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.top},o.a.createElement(a.default,{className:t.drawerLinks,name:"Drawer"})),o.a.createElement("div",{className:t.bottom},o.a.createElement(a.default,{className:t.drawerLowLinks,name:"DrawerLow"})))})))},6:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},60:function(e,t){e.exports=require("core-js/modules/es.array.from")},7:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},8:function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")}})}));