!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("eazin-settings/ui/settings.actions",[],e):"object"==typeof exports?exports["eazin-settings/ui/settings.actions"]=e():t["eazin-settings/ui/settings.actions"]=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=214)}({214:function(t,e,n){t.exports=n(48)},48:function(t,e,n){"use strict";n.r(e),n.d(e,"setSetting",(function(){return r})),n.d(e,"resetSetting",(function(){return o})),n.d(e,"clearSetting",(function(){return u})),n.d(e,"setSettings",(function(){return i})),n.d(e,"resetSettings",(function(){return f}));var r=function(t,e){return{type:"SET_SETTING",payload:{key:t,value:e}}},o=function(t){return{type:"RESET_SETTING",payload:{key:t}}},u=function(t){return{type:"CLEAR_SETTING",payload:{key:t}}},i=function(t){return{type:"SET_SETTINGS",payload:t}},f=function(){return{type:"RESET_SETTINGS"}}}})}));