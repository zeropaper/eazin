require("source-map-support").install(),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("packages/ui/dist/components/Layout/Layout.Drawer",[],t):"object"==typeof exports?exports["packages/ui/dist/components/Layout/Layout.Drawer"]=t():e["packages/ui/dist/components/Layout/Layout.Drawer"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=69)}({0:function(e,t){e.exports=require("react")},1:function(e,t){e.exports=require("@material-ui/core")},12:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"b",(function(){return u}));var c=function(e){return localStorage["eazin-1"]=JSON.stringify(e||{}),e},u=function(){return JSON.parse(localStorage["eazin-1"]||"{}")};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.type,n=t.payload;switch(r){case"SET_SETTING":return c(o({},e,a({},n.key,n.value)));case"CLEAR_SETTING":case"RESET_SETTING":return c(o({},e,a({},n.key,null)));case"SET_SETTINGS":return c(o({},e,{},n));case"RESET_SETTINGS":return c({});default:return e}}},13:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a={wrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",overflow:"hidden"},text:{fontFamily:"sans-serif"}};t.default=function(e){return!e.empty&&o.a.createElement("div",{style:a.wrapper},o.a.createElement("span",{style:a.text},"Loading..."))}},14:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=u(this,(e=i(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),r=t,a=[{key:"getDerivedStateFromError",value:function(e){return console.warn("getDerivedStateFromError",e),{hasError:!0}}}],(n=[{key:"componentDidCatch",value:function(e,t){console.warn("Catched error",e,t)}},{key:"render",value:function(){var e=this.state.hasError,t=this.props,r=t.errorMessage,n=t.children;return e?r||o.a.createElement("span",null,"Something went wrong."):n}}])&&c(r.prototype,n),a&&c(r,a),t}(o.a.Component);s.defaultProps={errorMessage:null,children:null},t.default=s},2:function(e,t){e.exports=require("react-router-dom")},24:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=function(e){var t;return{root:{minWidth:"20vw",maxWidth:"45vw",display:"flex",flexDirection:"column",flexGrow:1,overflow:"auto"},menuLink:(t={color:"currentColor",textDecoration:"none",cursor:"pointer",padding:"".concat(e.spacing(1),"px ").concat(e.spacing(2),"px")},n(t,e.breakpoints.up("md"),{padding:e.spacing(2)}),n(t,"display","block"),n(t,"&.active",{textDecoration:"underline"}),t)}}},36:function(e,t,r){"use strict";r.r(t),r.d(t,"DrawerLink",(function(){return l}));var n=r(0),o=r.n(n),a=r(1),c=r(2),u=r(8),i=r(24),l=Object(a.withStyles)(i.a)((function(e){var t=e.classes,r=e.children,n=e.to;return o.a.createElement(c.NavLink,{className:t.menuLink,to:n},r)}));t.default=Object(c.withRouter)(Object(a.withStyles)(i.a)((function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(u.default,{name:"Drawer"}))})))},69:function(e,t,r){e.exports=r(36)},8:function(e,t,r){"use strict";r.r(t),r.d(t,"PluginsProvider",(function(){return p}));var n=r(0),o=r.n(n),a=r(2),c=r(13),u=r(14),i=r(9);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=o.a.createContext({plugins:{}}),p=f.Provider,d=function(e){var t=e.plugins,r=e.name,n=e.loadingFallback,f=e.emptyFallback,p=e.switchRoutes,d=e.wrapIn,y=e.wrapOut,b=function(e,t){return function(a){var l=o.a.createElement(o.a.Suspense,{fallback:n||o.a.createElement(c.default,null)},o.a.createElement(u.default,{errorMessage:"".concat(r," - ").concat(t)},o.a.createElement(e,s({},a,{api:i,wrapIn:d}))));return y?o.a.createElement(y,null,l):l}},m=Object.keys(t).reduce((function(e,n){return[].concat(l(e),l((t[n].routes||[]).map((function(e){if(!e[r])return null;var t=e[r];return{val:n,Comp:t,exact:e.exact,path:e.path}}))))}),[]).filter(Boolean).sort((function(e,t){var r=e.Comp.weight,n=void 0===r?0:r,o=t.Comp.weight,a=void 0===o?0:o;return n>a?1:n<a?-1:0})).map((function(e){var t=e.val,n=e.Comp,c=e.exact,u=e.path;return o.a.createElement(a.Route,{key:"".concat(t,"-").concat(!!c,"-").concat(u,"-").concat(r),path:u,exact:c,render:b(n,t)})}));return!m.length&&f?f:p?o.a.createElement(a.Switch,null,m):m};d.defaultProps={loadingFallback:null,emptyFallback:null,switchRoutes:null,wrapIn:null,wrapOut:null};var y=function(e){return o.a.createElement(f.Consumer,null,(function(t){return o.a.createElement(d,s({},e,{plugins:(t||{}).plugins||{}}))}))};y.defaultProps={loadingFallback:null,emptyFallback:null,switchRoutes:null},t.default=y},9:function(e,t,r){"use strict";r.r(t);var n=fetch,o=r(12);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"default",(function(){return s})),r.d(t,"get",(function(){return p})),r.d(t,"head",(function(){return d})),r.d(t,"post",(function(){return y})),r.d(t,"put",(function(){return b})),r.d(t,"patch",(function(){return m})),r.d(t,"delete",(function(){return v})),r.d(t,"connect",(function(){return g})),r.d(t,"options",(function(){return h})),r.d(t,"trace",(function(){return O}));var l=function(){return Object(o.b)().userToken},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{method:"GET"},r=t.parser,o=void 0===r?"json":r,a=i(t,["parser"]),u=l(),s=c({},a,{method:a.method.toUpperCase(),headers:c({"Content-Type":"application/json",Accept:"application/json"},u?{Authorization:"Bearer ".concat(u)}:{},{},a.headers||{}),body:"string"==typeof a.body?a.body:JSON.stringify(a.body)});return n(e,s).then((function(t){var r,n,c,u;return regeneratorRuntime.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(t.status>=400)){i.next=23;break}return i.prev=1,i.next=4,regeneratorRuntime.awrap(t[o]());case 4:r=i.sent,i.next=13;break;case 7:throw i.prev=7,i.t0=i.catch(1),(n=new Error("response parsing error: ".concat(t.statusText))).fields={},n.object={},n;case 13:if(!r.error){i.next=22;break}throw"string"!=typeof(c=r.error.message?r.error.message:r.error)&&r.error.name&&(c=r.error.name),"string"!=typeof c&&(c="Serious Error"),console.warn("".concat(a.method||"GET"," ").concat(e,": ").concat(c)),(u=new Error(c)).fields=r.fields||{},u.object=r.error,u;case 22:return i.abrupt("return",r);case 23:if(204!==t.status){i.next=25;break}return i.abrupt("return");case 25:return i.abrupt("return",t[o]());case 26:case"end":return i.stop()}}),null,null,[[1,7]])}))},f=["get","head","post","put","patch","delete","connect","options","trace"].reduce((function(e,t){return c({},e,u({},t,(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s(e,c({},r,{method:t}))})))}),{}),p=f.get,d=f.head,y=f.post,b=f.put,m=f.patch,v=f.delete,g=f.connect,h=f.options,O=f.trace}})}));
//# sourceMappingURL=Layout.Drawer.js.map