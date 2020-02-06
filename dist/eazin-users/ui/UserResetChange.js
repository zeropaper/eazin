!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("eazin-users/ui/UserResetChange",[],t):"object"==typeof exports?exports["eazin-users/ui/UserResetChange"]=t():e["eazin-users/ui/UserResetChange"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=227)}({0:function(e,t){e.exports=require("react")},134:function(e,t,r){"use strict";r.r(t);r(4),r(2),r(5),r(75),r(6),r(7),r(3),r(52),r(74),r(38),r(8);var n=r(0),o=r.n(n),i=r(16),u=r.n(i),s=r(50),c=r(9),a=r(48),f=r(39),l=r(36);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={required:!0,validate:function(e){return e&&e.trim()?void 0:"A value is required"},validateOnChange:!0,validateOnBlur:!0};t.default=Object(c.withAppContext)((function(e){var t=e.api.post,r=e.location.search,n=e.dispatch,i=e.history.push,p=Object(s.parse)(r.slice(1)).token;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{variant:"h5"},"Password reset"),!!p&&o.a.createElement(c.Form,{onSubmit:function(e){var r=e.password;return t("/api/user/password",{body:{token:p,password:r}})},onSuccess:function(e){n(Object(f.setUser)(e)),n(Object(a.setSetting)("userToken",e.token)),i("/account")},fields:{password:d({label:"Password",type:"password"},b,{validate:l.validPassword}),passwordConfirm:d({label:"Password Confirmation",type:"password"},b,{validate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(e!==t.password)return"Passwords don't match"}})},buttons:[{type:"submit",text:"Reset"}]}))}))},16:function(e,t){e.exports=require("@material-ui/core/Typography")},2:function(e,t){e.exports=require("core-js/modules/es.array.filter")},227:function(e,t,r){e.exports=r(134)},3:function(e,t){e.exports=require("core-js/modules/es.object.keys")},36:function(e,t,r){"use strict";r.r(t),r.d(t,"validMail",(function(){return i})),r.d(t,"validPassword",(function(){return u}));r(52),r(96);var n=r(70),o=r.n(n),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e||!o()(e))return"Not a valid email address"},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<13?"Must be at least 13 charachters long":e.match(/[a-z]+/)?e.match(/[A-Z]+/)?e.match(/[0-9]+/)?e.match(/[^0-9a-zA-Z]+/)?void 0:"Must contain special charachters":"Must contain numbers":"Must contain uppercase characters":"Must contain lowercase characters"}},38:function(e,t){e.exports=require("core-js/modules/es.string.trim")},39:function(e,t,r){"use strict";r.r(t),r.d(t,"setUser",(function(){return n})),r.d(t,"clearUser",(function(){return o}));var n=function(e){return{type:"SET_CURRENT_USER",payload:e}},o=function(){return{type:"CLEAR_CURRENT_USER"}}},4:function(e,t){e.exports=require("core-js/modules/es.symbol")},48:function(e,t,r){"use strict";r.r(t),r.d(t,"setSetting",(function(){return n})),r.d(t,"resetSetting",(function(){return o})),r.d(t,"clearSetting",(function(){return i})),r.d(t,"setSettings",(function(){return u})),r.d(t,"resetSettings",(function(){return s}));var n=function(e,t){return{type:"SET_SETTING",payload:{key:e,value:t}}},o=function(e){return{type:"RESET_SETTING",payload:{key:e}}},i=function(e){return{type:"CLEAR_SETTING",payload:{key:e}}},u=function(e){return{type:"SET_SETTINGS",payload:e}},s=function(){return{type:"RESET_SETTINGS"}}},5:function(e,t){e.exports=require("core-js/modules/es.array.for-each")},50:function(e,t){e.exports=require("querystring")},52:function(e,t){e.exports=require("core-js/modules/es.regexp.exec")},6:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},7:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},70:function(e,t){e.exports=require("validator/es/lib/isEmail")},74:function(e,t){e.exports=require("core-js/modules/es.string.search")},75:function(e,t){e.exports=require("core-js/modules/es.array.slice")},8:function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")},9:function(e,t){e.exports=require("eazin-core/ui")},96:function(e,t){e.exports=require("core-js/modules/es.string.match")}})}));