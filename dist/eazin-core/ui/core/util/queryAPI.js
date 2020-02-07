!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("eazin-core/ui/core/util/queryAPI",[],r):"object"==typeof exports?exports["eazin-core/ui/core/util/queryAPI"]=r():e["eazin-core/ui/core/util/queryAPI"]=r()}(window,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=199)}({11:function(e,r){e.exports=require("core-js/modules/es.object.to-string")},13:function(e,r){e.exports=require("core-js/modules/es.array.concat")},15:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return p})),t.d(r,"get",(function(){return l})),t.d(r,"head",(function(){return b})),t.d(r,"post",(function(){return y})),t.d(r,"put",(function(){return m})),t.d(r,"patch",(function(){return j})),t.d(r,"delete",(function(){return g})),t.d(r,"connect",(function(){return h})),t.d(r,"options",(function(){return v})),t.d(r,"trace",(function(){return O}));t(4),t(13),t(2),t(5),t(26),t(30),t(40),t(6),t(7),t(3),t(11),t(19),t(8),t(27);var n=t(32),o=t(25);function u(e,r,t,n,o,u,c){try{var i=e[u](c),s=i.value}catch(e){return void t(e)}i.done?r(s):Promise.resolve(s).then(n,o)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var c=e.apply(r,t);function i(e){u(c,n,o,i,s,"next",e)}function s(e){u(c,n,o,i,s,"throw",e)}i(void 0)}))}}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(r,"readUserToken",(function(){return o.default}));var p=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.parser,u=void 0===t?"json":t,i=r.method,a=void 0===i?"GET":i,p=f(r,["parser","method"]),d=Object(o.default)(),l=s({},p,{method:a.toUpperCase(),headers:s({"Content-Type":"application/json",Accept:"application/json"},d?{Authorization:"Bearer ".concat(d)}:{},{},p.headers||{}),body:"string"==typeof p.body?p.body:JSON.stringify(p.body)});return Object(n.default)(e,l).then(function(){var r=c(regeneratorRuntime.mark((function r(t){var n,o,c,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.status>=400)){r.next=22;break}return r.prev=1,r.next=4,t[u]();case 4:n=r.sent,r.next=12;break;case 7:throw r.prev=7,r.t0=r.catch(1),(o=new Error(t.statusText)).fields={},o;case 12:if(!n.error){r.next=21;break}throw"string"!=typeof(c=n.error.message?n.error.message:n.error)&&n.error.name&&(c=n.error.name),"string"!=typeof c&&(c="Serious Error"),console.warn("".concat(p.method||"GET"," ").concat(e,": ").concat(c)),(i=new Error(c)).fields=n.error.fields,i.object=n.error,i;case 21:return r.abrupt("return",n);case 22:if(204!==t.status){r.next=24;break}return r.abrupt("return");case 24:return r.abrupt("return",t[u]());case 25:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}())},d=["get","head","post","put","patch","delete","connect","options","trace"].reduce((function(e,r){return p[r]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p(e,s({},t,{method:r}))},s({},e,a({},r,p[r]))}),{}),l=d.get,b=d.head,y=d.post,m=d.put,j=d.patch,g=d.delete,h=d.connect,v=d.options,O=d.trace},19:function(e,r){e.exports=require("core-js/modules/es.promise")},199:function(e,r,t){e.exports=t(15)},2:function(e,r){e.exports=require("core-js/modules/es.array.filter")},25:function(e,r,t){"use strict";t.r(r),t.d(r,"storeName",(function(){return n}));var n="eazin-1";r.default=function(){try{return JSON.parse(localStorage[n]||"{}").userToken}catch(e){console.warn("reading ",e)}}},26:function(e,r){e.exports=require("core-js/modules/es.array.index-of")},27:function(e,r){e.exports=require("regenerator-runtime/runtime")},3:function(e,r){e.exports=require("core-js/modules/es.object.keys")},30:function(e,r){e.exports=require("core-js/modules/es.array.reduce")},32:function(e,r,t){"use strict";t.r(r);t(11),t(19);r.default=fetch},4:function(e,r){e.exports=require("core-js/modules/es.symbol")},40:function(e,r){e.exports=require("core-js/modules/es.function.name")},5:function(e,r){e.exports=require("core-js/modules/es.array.for-each")},6:function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},7:function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},8:function(e,r){e.exports=require("core-js/modules/web.dom-collections.for-each")}})}));