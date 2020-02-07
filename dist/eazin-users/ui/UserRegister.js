!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("eazin-users/ui/UserRegister",[],r):"object"==typeof exports?exports["eazin-users/ui/UserRegister"]=r():e["eazin-users/ui/UserRegister"]=r()}(window,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=226)}({0:function(e,r){e.exports=require("react")},11:function(e,r){e.exports=require("core-js/modules/es.object.to-string")},131:function(e,r,t){"use strict";t.r(r);t(4),t(21),t(22),t(2),t(5),t(17),t(6),t(7),t(3),t(11),t(43),t(23),t(8),t(18);var n=t(0),o=t.n(n),i=t(16),s=t.n(i),a=t(9),u=t(36),c=t(67);function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var m={required:!0,validateOnChange:!0,validateOnBlur:!0},b={email:d({label:"Email",type:"email"},m,{validate:u.validMail}),password:d({label:"Password",type:"password"},m,{validate:u.validPassword}),passwordConfirm:d({label:"Password Confirmation",type:"password"},m,{validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;if(e!==r.password)return"Passwords don't match"}})};r.default=function(){var e=l(Object(n.useState)({}),2),r=e[0],t=e[1];return r.showVerifInstruction?o.a.createElement(s.a,{component:"div",color:"textPrimary"},"A verification email has been sent to ",r.email,"."):o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{variant:"h5"},"Register"),r.error&&o.a.createElement(s.a,{component:"div",color:"error"},r.error),o.a.createElement(a.Form,{onSubmit:function(e){return Object(a.queryAPI)("/api/user/register",{method:"POST",body:JSON.stringify({password:e.passwordConfirm,email:e.email})}).then((function(){return t({email:e.email,showVerifInstruction:!0})})).catch((function(e){return t({error:(e.object||{}).message||e.message})}))},fields:b,buttons:function(e){var r=e.pristine,t=e.invalid,n=e.loading,o=e.values,i=o.email,s=o.passwordConfirm;return[{text:"Register",type:"submit",disabled:r||t||n||!i||!s}]}}),o.a.createElement(c.default,{current:"register"}))}},16:function(e,r){e.exports=require("@material-ui/core/Typography")},17:function(e,r){e.exports=require("core-js/modules/es.array.iterator")},18:function(e,r){e.exports=require("core-js/modules/web.dom-collections.iterator")},2:function(e,r){e.exports=require("core-js/modules/es.array.filter")},20:function(e,r){e.exports=require("core-js/modules/es.array.map")},21:function(e,r){e.exports=require("core-js/modules/es.symbol.description")},22:function(e,r){e.exports=require("core-js/modules/es.symbol.iterator")},226:function(e,r,t){e.exports=t(131)},23:function(e,r){e.exports=require("core-js/modules/es.string.iterator")},3:function(e,r){e.exports=require("core-js/modules/es.object.keys")},36:function(e,r,t){"use strict";t.r(r),t.d(r,"validMail",(function(){return i})),t.d(r,"validPassword",(function(){return s}));t(52),t(96);var n=t(70),o=t.n(n),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e||!o()(e))return"Not a valid email address"},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<13?"Must be at least 13 charachters long":e.match(/[a-z]+/)?e.match(/[A-Z]+/)?e.match(/[0-9]+/)?e.match(/[^0-9a-zA-Z]+/)?void 0:"Must contain special charachters":"Must contain numbers":"Must contain uppercase characters":"Must contain lowercase characters"}},4:function(e,r){e.exports=require("core-js/modules/es.symbol")},43:function(e,r){e.exports=require("core-js/modules/es.regexp.to-string")},5:function(e,r){e.exports=require("core-js/modules/es.array.for-each")},52:function(e,r){e.exports=require("core-js/modules/es.regexp.exec")},6:function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},67:function(e,r,t){"use strict";t.r(r);t(2),t(20),t(3);var n=t(0),o=t.n(n),i=t(73),s=t(9),a={login:o.a.createElement(s.Link,{to:"/login"},"Login"),register:o.a.createElement(s.Link,{to:"/register"},"Register"),reset:o.a.createElement(s.Link,{to:"/reset"},"Password Reset")},u=function(e){var r=e.classes,t=e.current,n=void 0===t?"login":t;return o.a.createElement("ul",{className:r.root},Object.keys(a).filter((function(e){return e!==n})).map((function(e){return o.a.createElement("li",{key:e,className:r.item},a[e])})))};u.defaultProps={current:"login"},r.default=Object(i.withStyles)((function(e){return{root:{width:"100%",display:"flex",justifyContent:"space-evenly",margin:0,marginTop:e.spacing(2),padding:0,listStyle:"none"},items:{margin:0,padding:0}}}))(u)},7:function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},70:function(e,r){e.exports=require("validator/es/lib/isEmail")},73:function(e,r){e.exports=require("@material-ui/styles")},8:function(e,r){e.exports=require("core-js/modules/web.dom-collections.for-each")},9:function(e,r){e.exports=require("eazin-core/ui")},96:function(e,r){e.exports=require("core-js/modules/es.string.match")}})}));