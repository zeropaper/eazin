!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("eazin-core/ui/test/ui/core/factory.unit.test",[],t):"object"==typeof exports?exports["eazin-core/ui/test/ui/core/factory.unit.test"]=t():e["eazin-core/ui/test/ui/core/factory.unit.test"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=202)}({101:function(e,t,r){"use strict";r.r(t),r.d(t,"buildActions",(function(){return f})),r.d(t,"buildAPIActions",(function(){return l})),r.d(t,"buildReducer",(function(){return d})),r.d(t,"buildConnector",(function(){return y}));r(4),r(13),r(2),r(5),r(30),r(75),r(6),r(7),r(3),r(11),r(19),r(137),r(8),r(27);var n=r(14),o=r(15);function c(e,t,r,n,o,c,u){try{var i=e[c](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function i(e){c(u,n,o,i,a,"next",e)}function a(e){c(u,n,o,i,a,"throw",e)}i(void 0)}))}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))},f=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.singular,n=t.idKey,o=void 0===n?"id":n,c=t.plural,u=void 0===c?"".concat(r,"s"):c,i=t.ucSingular,f=void 0===i?r.toUpperCase():i,l=t.ucPlural,d=void 0===l?u.toUpperCase():l,y=t.ucfSingular,v=void 0===y?p(r):y,b=t.ucfPlural,O=void 0===b?p(u):b;return s(e={},"clear".concat(O),(function(){return{type:"CLEAR_".concat(d)}})),s(e,"removeOne".concat(v),(function(e){return{type:"REMOVE_".concat(f),payload:e}})),s(e,"removeMany".concat(O),(function(e){if(!Array.isArray(e))throw new Error("Bad argument, must be an array");return{type:"REMOVE_".concat(d),payload:e}})),s(e,"upsertOne".concat(v),(function(e){var t=e[o];if(!t)throw new Error("Missing ".concat(o," to upsertOne").concat(v));return{type:"UPSERT_".concat(f),payload:a({},e,s({},o,t))}})),s(e,"upsertMany".concat(O),(function(e){if(!Array.isArray(e))throw new Error("Bad argument, must be an array");return{type:"UPSERT_".concat(d),payload:e}})),e},l=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.singular,n=t.endpoint,c=t.idKey,i=void 0===c?"id":c,l=t.plural,d=void 0===l?"".concat(r,"s"):l,y=t.ucSingular,v=void 0===y?r.toUpperCase():y,b=t.ucPlural,O=void 0===b?d.toUpperCase():b,g=t.ucfSingular,j=void 0===g?p(r):g,m=t.ucfPlural,h=void 0===m?p(d):m,x=f({singular:r,idKey:i,plural:d,ucSingular:v,ucPlural:O,ucfSingular:j,ucfPlural:h});return Object.keys(x).reduce((function(e,t){return a({},e,s({},t,(function(e){return function(){var r=u(regeneratorRuntime.mark((function r(){var c,u,a,s,p,f,l,d,y=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(c=y.length,u=new Array(c),a=0;a<c;a++)u[a]=y[a];if(r.prev=1,!t.startsWith("clear")){r.next=8;break}return r.next=5,Object(o.delete)(n);case 5:e(x[t]()),r.next=29;break;case 8:if(!t.startsWith("remove")){r.next=15;break}return s=u[0][i]||u[0],r.next=12,Object(o.delete)("".concat(n,"/").concat(s));case 12:e(x[t](s)),r.next=29;break;case 15:if(!t.startsWith("upsertOne")){r.next=29;break}if(p=u[0],!(f=p[i])){r.next=24;break}return r.next=21,Object(o.patch)("".concat(n,"/").concat(f),{body:p});case 21:r.t0=r.sent,r.next=27;break;case 24:return r.next=26,Object(o.post)(n,{body:p});case 26:r.t0=r.sent;case 27:l=r.t0,e(x[t](l));case 29:if(!t.startsWith("upsertMany")){r.next=31;break}throw new Error("PR welcome: eazin action factory async upsertMany* (".concat(t,") is not yet ready"));case 31:r.next=36;break;case 33:r.prev=33,r.t1=r.catch(1),(d=console).error.apply(d,['async action "%s"',t].concat(u,[r.t1.stack]));case 36:case"end":return r.stop()}}),r,null,[[1,33]])})));return function(){return r.apply(this,arguments)}}()})))}),(s(e={},"retrieveOne".concat(j),(function(e){return function(){var t=u(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=x,t.t2="upsertOne".concat(j),t.next=5,Object(o.get)("".concat(n,"/").concat(r));case 5:return t.t3=t.sent,t.t4=t.t1[t.t2].call(t.t1,t.t3),t.abrupt("return",(0,t.t0)(t.t4));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),s(e,"retrieveMany".concat(h),(function(e){return function(){var t=u(regeneratorRuntime.mark((function t(){var r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.length>0&&void 0!==r[0]?r[0]:{},t.t0=e,t.t1=x,t.t2="upsertMany".concat(h),t.next=6,Object(o.get)(n);case 6:return t.t3=t.sent,t.t4=t.t1[t.t2].call(t.t1,t.t3),t.abrupt("return",(0,t.t0)(t.t4));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()})),e))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.singular,r=e.idKey,n=void 0===r?"id":r,o=e.plural,c=void 0===o?"".concat(t,"s"):o,u=e.ucSingular,i=void 0===u?t.toUpperCase():u,p=e.ucPlural,f=void 0===p?c.toUpperCase():p;return function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=r.type,c=r.payload;switch(o){case"CLEAR_".concat(f):return{};case"REMOVE_".concat(i):return t[c]?a({},t,s({},c,void 0)):t;case"REMOVE_".concat(f):return e=a({},t),c.forEach((function(t){e=a({},e,s({},t,void 0))})),e;case"UPSERT_".concat(i):return c[n]?a({},t,s({},c[n],a({},t[c[n]]||{},{},c))):(console.warn("Missing %s in payload for action type %s",n,o),t);case"UPSERT_".concat(f):return e=a({},t),c.forEach((function(r){r[n]?e=a({},e,s({},r[n],a({},t[r[n]]||{},{},r))):console.warn("Missing %s in item for action type %s",n,o)})),e;default:return t}}},y=function(e){var t=e.singular,r=e.plural,o=void 0===r?"".concat(t,"s"):r,c=e.idKey,u=void 0===c?"id":c,i=e.actions,p=void 0===i?null:i,f=function(e,t){var r=e[o],n=t[u];return n?r[n]:r};return p?Object(n.connect)(f,(function(e){return Object.keys(p).reduce((function(t,r){return a({},t,s({},r,(function(){return e(p[r].apply(p,arguments))})))}),{})})):Object(n.connect)(f)};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.singular,r=e.endpoint,n=e.idKey,o=void 0===n?"id":n,c=e.plural,u=void 0===c?"".concat(t,"s"):c,i=e.ucSingular,a=void 0===i?t.toUpperCase():i,s=e.ucPlural,y=void 0===s?u.toUpperCase():s,v=e.ucfSingular,b=void 0===v?p(t):v,O=e.ucfPlural,g=void 0===O?p(u):O;return[d({singular:t,idKey:o,plural:u,ucSingular:a,ucPlural:y,ucfSingular:b,ucfPlural:g}),f({singular:t,idKey:o,plural:u,ucSingular:a,ucPlural:y,ucfSingular:b,ucfPlural:g}),r&&l({endpoint:r,singular:t,idKey:o,plural:u,ucSingular:a,ucPlural:y,ucfSingular:b,ucfPlural:g})].filter(Boolean)}},11:function(e,t){e.exports=require("core-js/modules/es.object.to-string")},13:function(e,t){e.exports=require("core-js/modules/es.array.concat")},137:function(e,t){e.exports=require("core-js/modules/es.string.starts-with")},14:function(e,t){e.exports=require("react-redux")},15:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f})),r.d(t,"get",(function(){return d})),r.d(t,"head",(function(){return y})),r.d(t,"post",(function(){return v})),r.d(t,"put",(function(){return b})),r.d(t,"patch",(function(){return O})),r.d(t,"delete",(function(){return g})),r.d(t,"connect",(function(){return j})),r.d(t,"options",(function(){return m})),r.d(t,"trace",(function(){return h}));r(4),r(13),r(2),r(5),r(26),r(30),r(40),r(6),r(7),r(3),r(11),r(19),r(8),r(27);var n=r(32),o=r(25);function c(e,t,r,n,o,c,u){try{var i=e[c](u),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function i(e){c(u,n,o,i,a,"next",e)}function a(e){c(u,n,o,i,a,"throw",e)}i(void 0)}))}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"readUserToken",(function(){return o.default}));var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.parser,c=void 0===r?"json":r,i=t.method,s=void 0===i?"GET":i,f=p(t,["parser","method"]),l=Object(o.default)(),d=a({},f,{method:s.toUpperCase(),headers:a({"Content-Type":"application/json",Accept:"application/json"},l?{Authorization:"Bearer ".concat(l)}:{},{},f.headers||{}),body:"string"==typeof f.body?f.body:JSON.stringify(f.body)});return Object(n.default)(e,d).then(function(){var t=u(regeneratorRuntime.mark((function t(r){var n,o,u,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r.status>=400)){t.next=22;break}return t.prev=1,t.next=4,r[c]();case 4:n=t.sent,t.next=12;break;case 7:throw t.prev=7,t.t0=t.catch(1),(o=new Error(r.statusText)).fields={},o;case 12:if(!n.error){t.next=21;break}throw"string"!=typeof(u=n.error.message?n.error.message:n.error)&&n.error.name&&(u=n.error.name),"string"!=typeof u&&(u="Serious Error"),console.warn("".concat(f.method||"GET"," ").concat(e,": ").concat(u)),(i=new Error(u)).fields=n.error.fields,i.object=n.error,i;case 21:return t.abrupt("return",n);case 22:if(204!==r.status){t.next=24;break}return t.abrupt("return");case 24:return t.abrupt("return",r[c]());case 25:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}())},l=["get","head","post","put","patch","delete","connect","options","trace"].reduce((function(e,t){return f[t]=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f(e,a({},r,{method:t}))},a({},e,s({},t,f[t]))}),{}),d=l.get,y=l.head,v=l.post,b=l.put,O=l.patch,g=l.delete,j=l.connect,m=l.options,h=l.trace},19:function(e,t){e.exports=require("core-js/modules/es.promise")},2:function(e,t){e.exports=require("core-js/modules/es.array.filter")},202:function(e,t,r){e.exports=r(203)},203:function(e,t,r){"use strict";r.r(t);var n=r(54),o=r(101);jest.mock("../../../core/util/simpleFetch"),jest.mock("../../../core/util/readToken"),describe("factory",(function(){var e,t,r,c,u;beforeAll((function(){t=Object(o.buildActions)({singular:"doc"}),r=Object(o.buildAPIActions)({singular:"doc",endpoint:"/endpoint"}),c=Object(o.buildReducer)({singular:"doc"}),u=Object(o.buildConnector)({singular:"doc"}),e=Object(n.makeStore)({docs:c},{docs:{}})})),beforeEach((function(){return e.dispatch({type:"CORE_RELOAD"})})),describe("buildActions",(function(){it("creates an object of sync functions",(function(){expect(t).toHaveProperty("upsertOneDoc"),expect(t).toHaveProperty("upsertManyDocs"),expect(t).toHaveProperty("removeOneDoc"),expect(t).toHaveProperty("removeManyDocs"),expect(t).toHaveProperty("clearDocs")})),describe("upsertOne*",(function(){var r={id:"docId1",name:"one"},n={id:"docId1",name:"1"};it("inserts a document",(function(){var n=e,o=n.getState,c=n.dispatch,u=(0,t.upsertOneDoc)(r);expect(u).toHaveProperty("payload",r),expect(u).toHaveProperty("type","UPSERT_DOC"),expect((function(){return c(u)})).not.toThrow();var i=o();expect(i).toHaveProperty("docs.docId1.id","docId1"),expect(i).toHaveProperty("docs.docId1.name","one")})),it("updates a document",(function(){var r=e,o=r.getState,c=r.dispatch,u=(0,t.upsertOneDoc)(n);expect(u).toHaveProperty("payload",n),expect(u).toHaveProperty("type","UPSERT_DOC"),expect((function(){return c(u)})).not.toThrow();var i=o();expect(i).toHaveProperty("docs.docId1.id","docId1"),expect(i).toHaveProperty("docs.docId1.name","1")}))}))})),describe("buildAPIActions",(function(){it("creates an object of async functions",(function(){expect(r).toHaveProperty("retrieveOneDoc"),expect(r).toHaveProperty("retrieveManyDocs"),expect(r).toHaveProperty("upsertOneDoc"),expect(r).toHaveProperty("upsertManyDocs"),expect(r).toHaveProperty("removeOneDoc"),expect(r).toHaveProperty("removeManyDocs"),expect(r).toHaveProperty("clearDocs")}))})),describe("buildReducer",(function(){it("creates an object of functions",(function(){expect(!0).toBeTruthy()}))})),describe("buildConnector",(function(){it("connects",(function(){expect(!0).toBeTruthy();var e=jest.fn(),t=u(e);console.info(t.mock)}))}))}))},25:function(e,t,r){"use strict";r.r(t),r.d(t,"storeName",(function(){return n}));var n="eazin-1";t.default=function(){try{return JSON.parse(localStorage[n]||"{}").userToken}catch(e){console.warn("reading ",e)}}},26:function(e,t){e.exports=require("core-js/modules/es.array.index-of")},27:function(e,t){e.exports=require("regenerator-runtime/runtime")},3:function(e,t){e.exports=require("core-js/modules/es.object.keys")},30:function(e,t){e.exports=require("core-js/modules/es.array.reduce")},31:function(e,t){e.exports=require("redux")},32:function(e,t,r){"use strict";r.r(t);r(11),r(19);t.default=fetch},4:function(e,t){e.exports=require("core-js/modules/es.symbol")},40:function(e,t){e.exports=require("core-js/modules/es.function.name")},5:function(e,t){e.exports=require("core-js/modules/es.array.for-each")},54:function(e,t,r){"use strict";r.r(t),r.d(t,"makeStore",(function(){return s}));r(4),r(2),r(5),r(6),r(7),r(3),r(8);var n=r(31),o=r(57),c=r.n(o);r(78);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(n.combineReducers)(e),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"CORE_RELOAD"===n.type?t:r(e,n)},u=Object(n.applyMiddleware)(c.a);return Object(n.createStore)(o,t,u)};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={},n={};return Object.keys(e).forEach((function(t){r=i({},r,{},(e[t]||{}).reducers||{}),n=i({},n,{},(e[t]||{}).store||{})})),s(r,i({},n,{},t||{}))}},57:function(e,t){e.exports=require("redux-thunk")},6:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},7:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},75:function(e,t){e.exports=require("core-js/modules/es.array.slice")},78:function(e,t){e.exports=require("redux-devtools-extension")},8:function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")}})}));