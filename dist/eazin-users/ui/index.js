!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("eazin-users/ui/index",[],t):"object"==typeof exports?exports["eazin-users/ui/index"]=t():e["eazin-users/ui/index"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=59)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@material-ui/core")},function(e,t){e.exports=require("eazin-core/ui")},,function(e,t){e.exports=require("core-js/modules/es.symbol")},function(e,t){e.exports=require("core-js/modules/es.array.filter")},function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},function(e,t){e.exports=require("core-js/modules/es.object.keys")},function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("@material-ui/core/styles")},function(e,t){e.exports=require("core-js/modules/es.array.concat")},function(e,t){e.exports=require("core-js/modules/es.object.to-string")},function(e,t){e.exports=require("core-js/modules/es.array.iterator")},function(e,t){e.exports=require("core-js/modules/web.dom-collections.iterator")},function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n=function(e,t){return{type:"SET_SETTING",payload:{key:e,value:t}}},o=function(e){return{type:"CLEAR_SETTING",payload:{key:e}}}},function(e,t){e.exports=require("core-js/modules/es.symbol.description")},function(e,t){e.exports=require("core-js/modules/es.symbol.iterator")},function(e,t){e.exports=require("core-js/modules/es.string.iterator")},function(e,t){e.exports=require("core-js/modules/es.string.trim")},function(e,t){e.exports=require("core-js/modules/es.promise")},function(e,t){e.exports=require("core-js/modules/es.array.map")},function(e,t){e.exports=require("regenerator-runtime/runtime")},,function(e,t){e.exports=require("validator/es/lib/isEmail")},function(e,t){e.exports=require("core-js/modules/es.regexp.to-string")},function(e,t){e.exports=require("core-js/modules/es.object.get-prototype-of")},function(e,t){e.exports=require("core-js/modules/es.object.set-prototype-of")},,function(e,t){e.exports=require("core-js/modules/es.regexp.exec")},,function(e,t){e.exports=require("querystring")},,function(e,t){e.exports=require("core-js/modules/es.array.slice")},,,,function(e,t){e.exports=require("core-js/modules/es.string.match")},function(e,t){e.exports=require("core-js/modules/es.string.search")},,,,,,,,function(e,t){e.exports=require("@material-ui/styles")},,,,,,,,,,,function(e,t,r){e.exports=r(61)},,function(e,t,r){"use strict";r.r(t);var n=r(2),o=r(17),i=function(e){return{type:"SET_USER",payload:e}};r(4),r(5),r(6),r(7),r(8),r(9);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=r(0),l=r.n(s),p=r(10),f=r(1),d=r(12),m=(r(18),r(19),r(15),r(14),r(27),r(20),r(16),r(31),r(39),r(26)),b=r.n(m),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<13?"Must be at least 13 charachters long":e.match(/[a-z]+/)?e.match(/[A-Z]+/)?e.match(/[0-9]+/)?e.match(/[^0-9a-zA-Z]+/)?void 0:"Must contain special charachters":"Must contain numbers":"Must contain uppercase characters":"Must contain lowercase characters"};function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j={required:!0,validateOnChange:!0,validateOnBlur:!0},w={email:g({label:"Email",type:"email"},j,{validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!b()(e))return"Not a valid email address"}}),password:g({label:"Password",type:"password"},j,{validate:y}),passwordConfirm:g({label:"Password Confirmation",type:"password"},j,{validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(e!==t.password)return"Passwords don't match"}}),buttons:{type:"buttons",buttons:function(e){var t=e.pristine,r=e.invalid,n=e.values,o=n.email,i=n.passwordConfirm;return[{text:"Register",type:"submit",disabled:t||r||!o||!i}]}}},P=function(){var e=O(Object(s.useState)({}),2),t=e[0],r=e[1];return t.showVerifInstruction?l.a.createElement(f.Typography,{component:"div",color:"textPrimary"},"A verification email has been sent to ",t.email,"."):l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Typography,{variant:"h5"},"Register"),t.error&&l.a.createElement(f.Typography,{component:"div",color:"error"},t.error),l.a.createElement(n.Form,{onSubmit:function(e){return Object(n.queryAPI)("/api/user/register",{method:"POST",body:JSON.stringify({password:e.passwordConfirm,email:e.email})}).then((function(){return r({email:e.email,showVerifInstruction:!0})})).catch((function(e){return r({error:(e.object||{}).message||e.message})}))},fields:w}),l.a.createElement(n.Link,{to:"/reset"},"Password reset"),l.a.createElement(n.Link,{to:"/login"},"Login"))},E=(r(21),r(11));function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k={required:!0,validate:function(e){return e&&e.trim()?void 0:"A value is required"},validateOnChange:!0,validateOnBlur:!0},D={email:S({label:"Email",type:"email"},k,{validate:function(e){if(!b()(e))return"Not a valid email address"}}),password:S({label:"Password",type:"password"},k),buttons:{buttons:[{text:"Login",type:"submit"}]}},T=Object(E.connect)((function(){return{}}))((function(e){var t=e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.Form,{method:"post",url:"/api/user/login",onSuccess:function(e){t(i(e)),t(Object(o.b)("userToken",e.token))},fields:D}),l.a.createElement(n.Link,{to:"/reset"},"Password reset"),l.a.createElement(n.Link,{to:"/register"},"Register"))}));function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C={email:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({label:"Email"},{required:!0,validate:function(e){return e&&e.trim()?void 0:"A value is required"},validateOnChange:!0,validateOnBlur:!0},{validate:function(e){if(!b()(e))return"Not a valid email address"}}),buttons:{buttons:[{type:"submit",text:"Send reset email"}]}},R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Typography,{variant:"h5"},"Password reset"),l.a.createElement(n.Form,{onSubmit:function(e){console.info("fields",e)},fields:C}),l.a.createElement(n.Link,{to:"/login"},"Login"),l.a.createElement(n.Link,{to:"/register"},"Register"))};function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z={required:!0,validate:function(e){return e&&e.trim()?void 0:"A value is required"},validateOnChange:!0,validateOnBlur:!0},B={password:_({label:"Password",type:"password"},z,{validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<13?"Must be at least 13 charachters long":e.match(/[a-z]+/)?e.match(/[A-Z]+/)?e.match(/[0-9]+/)?e.match(/[^0-9a-zA-Z]+/)?void 0:"Must contain special charachters":"Must contain numbers":"Must contain uppercase characters":"Must contain lowercase characters"}}),passwordConfirm:_({label:"Password Confirmation",type:"password"},z,{validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(e!==t.password)return"Passwords don't match"}}),buttons:{buttons:[{type:"submit",text:"Reset"}]}},M=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Typography,{variant:"h5"},"Password reset"),l.a.createElement(n.Form,{onSubmit:function(e){console.info("fields",e)},fields:B}),l.a.createElement(n.Link,{to:"/login"},"Login"),l.a.createElement(n.Link,{to:"/register"},"Register"))},I=(r(35),r(22),r(40),r(24),r(33));function G(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z={required:!0,validate:function(e){return e&&e.trim()?void 0:"A value is required"},validateOnChange:!0,validateOnBlur:!0},J={firstName:W({label:"First Name"},Z),lastName:W({label:"Last Name"},Z),buttons:{buttons:function(e){var t=e.pristine,r=e.invalid,n=e.values,o=n.firstName,i=n.lastName;return[{type:"submit",text:"Finish up",disabled:t||r||!o||!i}]}}},H=Object(E.connect)((function(){return{}}))((function(e){var t=e.dispatch,r=e.history.push,a=e.location.search,c=Object(I.parse)(a.slice(1)||"");return c.token?l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Typography,{variant:"h5"},"Email verification"),l.a.createElement(n.Form,{onSubmit:function(){var e,a=(e=regeneratorRuntime.mark((function e(a){var u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.queryAPI)("/api/user/verify",{method:"POST",body:JSON.stringify(W({},a,{verifToken:c.token}))});case 2:return u=e.sent,e.next=5,Object(n.queryAPI)("/api/user/me",{headers:{Authorization:"Bearer ".concat(u.token)}});case 5:s=e.sent,t(i(s)),t(Object(o.b)("userToken",u.token)),r("/");case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){G(i,n,o,a,c,"next",e)}function c(e){G(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return a.apply(this,arguments)}}(),fields:J}),l.a.createElement(n.Link,{to:"/login"},"Login"),l.a.createElement(n.Link,{to:"/register"},"Register")):l.a.createElement(f.Typography,{color:"error"},"A verification token is required.")}));var K=Object(d.withStyles)((function(e){return{paper:(t={padding:e.spacing(1)},r=e.breakpoints.up("md"),n={padding:e.spacing(2)},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t)};var t,r,n}))((function(e){var t=e.classes;return l.a.createElement(f.Grid,{container:!0,alignItems:"center",justify:"center"},l.a.createElement(f.Grid,{item:!0,xs:12,sm:10,md:6,lg:4},l.a.createElement(f.Paper,{className:t.paper},l.a.createElement(p.Switch,null,l.a.createElement(p.Route,{exact:!0,path:"/register",component:P}),l.a.createElement(p.Route,{path:"/verify",component:H}),l.a.createElement(p.Route,{path:"/reset/change",component:M}),l.a.createElement(p.Route,{exact:!0,path:["/reset","/reset/send"],component:R}),l.a.createElement(p.Route,{path:["/","/login"],component:T})))))})),Q=r(48);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ee={required:!0,validateOnChange:!0},te={current:Y({label:"Current Password",type:"password"},ee,{fullWidth:!0,validate:y}),password:Y({label:"New Password",type:"password"},ee,{fullWidth:!0,validate:y}),passwordConfirm:Y({label:"Confirmation",type:"password"},ee,{fullWidth:!0,validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(e!==t.password)return"Passwords don't match"}}),buttons:{buttons:function(e,t){var r=e.pristine,n=e.invalid,o=e.values,i=o.current,a=o.password,c=o.passwordConfirm;return[{text:"Change Password",type:"submit",loading:t.loading,disabled:r||n||!i||!a||!c}]}}},re={email:Y({label:"New Email Address",type:"email"},ee,{fullWidth:!0,helperText:"A verification email will first be send to this address. The new address will be effective only once verified"}),buttons:{buttons:function(e){var t=e.pristine,r=e.invalid,n=e.values.email;return[{text:"Send verification mail",type:"submit",disabled:t||r||!n}]}}},ne=Object(Q.withStyles)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},tile:{flexGrow:1,minWidth:"33%"},paper:{margin:e.spacing(1),padding:e.spacing(1)}}}))((function(e){var t=e.api.post,r=e.classes;return l.a.createElement(f.Grid,{container:!0,spacing:1,className:r.root},l.a.createElement(f.Grid,{item:!0,className:r.tile,sm:!0},l.a.createElement(f.Paper,{className:r.paper,"data-testid":"password-change"},l.a.createElement(f.Typography,{variant:"h4",gutterBottom:!0},"Change Password"),l.a.createElement(n.Form,{method:"post",url:"/api/user/password",fields:te}))),l.a.createElement(f.Grid,{item:!0,className:r.tile,sm:!0},l.a.createElement(f.Paper,{className:r.paper,"data-testid":"email-change"},l.a.createElement(f.Typography,{variant:"h4",gutterBottom:!0},"Change Email"),l.a.createElement(n.Form,{onSubmit:function(e){return t("/api/user/email",{body:e})},fields:re}))))}));r(13),r(23),r(28),r(29);function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){ce(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function se(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function le(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var de=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(r=le(this,(e=pe(t)).call.apply(e,[this].concat(i)))).query=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.props.userToken,i="/api/users?".concat(Object(I.stringify)({limit:t.pageSize,offset:t.pageSize*t.page,orderDirection:t.orderDirection,orderBy:t.orderBy?t.orderBy.field:"updatedAt",search:t.search,filters:JSON.stringify((t.filters||[]).map((function(e){return ae({},e,{column:e.column.field})})))})),e.abrupt("return",Object(n.queryAPI)(i,{headers:{Authorization:"Bearer ".concat(o)}}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){ue(i,n,o,a,c,"next",e)}function c(e){ue(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),r}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return l.a.createElement(n.Table,{title:"User",columns:[{title:"Date",filtering:!1,field:"updatedAt",render:function(e){return l.a.createElement(n.TimeAgo,{date:e&&e.updatedAt})}},{title:"Verified",field:"isVerified",render:function(e){return e.isVerified?"verified":"un-verified"}},{title:"First Name",field:"firstName"},{title:"Last Name",field:"lastName"},{title:"Email",field:"email"}],data:this.query,options:{search:!1,filtering:!0,sorting:!0,pageSize:20,pageSizeOptions:[10,20,50,100]}})}}])&&se(r.prototype,o),i&&se(r,i),t}(l.a.Component);de.defaultProps={userToken:null};var me=Object(E.connect)((function(e){var t=e.settings;return{userToken:(t=void 0===t?{}:t).userToken}}))(de),be=function(){return l.a.createElement(n.LayoutDrawerLink,{to:"/account"},"Account")};r.d(t,"bootstrap",(function(){return ye}));var ye=function(e,t){return n.queryAPI.get("/api/user/me").then((function(e){if(!e.id)throw new Error("No id");t(i(e))})).catch((function(){t({type:"CLEAR_USER"}),t(Object(o.a)("userToken"))}))},Oe=[{path:"/account",View:ne},{path:"/users",View:me},{path:"/",Drawer:be,AnonymousView:K}];t.default={routes:Oe,bootstrap:ye,store:{user:{}},reducers:{user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return{user:c({},e.user||{},{},t.payload||{})};case"CLEAR_USER":return{user:null};default:return e}}},wsBootstrap:function(e,t,r){console.info("user wsBootstrap",e,t,r),e.on("user.update",(function(e){return t(i(e))}))}}}])}));
//# sourceMappingURL=index.js.map