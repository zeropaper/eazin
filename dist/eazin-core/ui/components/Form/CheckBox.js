!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("eazin-core/ui/components/Form/CheckBox",[],r):"object"==typeof exports?exports["eazin-core/ui/components/Form/CheckBox"]=r():e["eazin-core/ui/components/Form/CheckBox"]=r()}(window,(function(){return function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=165)}({0:function(e,r){e.exports=require("react")},165:function(e,r,t){e.exports=t(91)},2:function(e,r){e.exports=require("core-js/modules/es.array.filter")},26:function(e,r){e.exports=require("core-js/modules/es.array.index-of")},3:function(e,r){e.exports=require("core-js/modules/es.object.keys")},4:function(e,r){e.exports=require("core-js/modules/es.symbol")},44:function(e,r){e.exports=require("informed")},5:function(e,r){e.exports=require("core-js/modules/es.array.for-each")},6:function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},7:function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},8:function(e,r){e.exports=require("core-js/modules/web.dom-collections.for-each")},83:function(e,r){e.exports=require("@material-ui/core/Checkbox")},84:function(e,r){e.exports=require("@material-ui/core/FormControlLabel")},85:function(e,r){e.exports=require("@material-ui/core/FormHelperText")},86:function(e,r){e.exports=require("@material-ui/core/FormControl")},87:function(e,r){e.exports=require("@material-ui/core/FormLabel")},91:function(e,r,t){"use strict";t.r(r);t(4),t(2),t(5),t(26),t(6),t(7),t(3),t(8);var o=t(0),n=t.n(o),u=t(44),l=t(83),i=t.n(l),c=t(84),a=t.n(c),f=t(85),s=t.n(f),d=t(86),p=t.n(d),b=t(87),m=t.n(b);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){x(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function O(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},u=Object.keys(e);for(o=0;o<u.length;o++)t=u[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)t=u[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var h=function(e){var r=e.fieldState,t=e.fieldApi,o=O(e,["fieldState","fieldApi"]),u=r.value,l=r.touched,c=t.setValue,f=t.setTouched,d=o.onChange,b=o.onBlur,y=o.initialValue,x=(o.defaultValue,o.forwardedRef),h=o.helperText,g=o.label,v=(o.className,o.required),q=o.disabled,w=(o.validate,o.fullWidth),P=O(o,["onChange","onBlur","initialValue","defaultValue","forwardedRef","helperText","label","className","required","disabled","validate","fullWidth"]),S=u||0===u?u:!(l||!y)&&y,k=o.error||r.error||r.asyncError;return n.a.createElement(p.a,{disabled:q,required:v,fullWidth:w,error:!!k},n.a.createElement(m.a,null,g),n.a.createElement(a.a,{required:v,disabled:q,control:n.a.createElement(i.a,j({},P,{type:"checkbox",name:P.field,inputRef:x,checked:!!S,inputProps:{onChange:function(e){c(e.target.checked),f(!l),d&&d(e)},onBlur:function(e){b&&b(e)}}})),label:h}),n.a.createElement(s.a,null,k))};h.defaultProps={forwardedRef:null,onChange:null,onBlur:null,error:null,className:null,label:null,helperText:null,validate:null,initialValue:null,defaultValue:null,required:null,disabled:null,fullWidth:null},r.default=Object(u.asField)(h)}})}));