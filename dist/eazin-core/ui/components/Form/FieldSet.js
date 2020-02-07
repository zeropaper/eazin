!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("eazin-core/ui/components/Form/FieldSet",[],r):"object"==typeof exports?exports["eazin-core/ui/components/Form/FieldSet"]=r():e["eazin-core/ui/components/Form/FieldSet"]=r()}(window,(function(){return function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=166)}({0:function(e,r){e.exports=require("react")},11:function(e,r){e.exports=require("core-js/modules/es.object.to-string")},12:function(e,r){e.exports=require("@material-ui/core/styles")},13:function(e,r){e.exports=require("core-js/modules/es.array.concat")},16:function(e,r){e.exports=require("@material-ui/core/Typography")},166:function(e,r,t){e.exports=t(64)},17:function(e,r){e.exports=require("core-js/modules/es.array.iterator")},18:function(e,r){e.exports=require("core-js/modules/web.dom-collections.iterator")},2:function(e,r){e.exports=require("core-js/modules/es.array.filter")},20:function(e,r){e.exports=require("core-js/modules/es.array.map")},29:function(e,r){e.exports=require("classnames")},3:function(e,r){e.exports=require("core-js/modules/es.object.keys")},38:function(e,r){e.exports=require("core-js/modules/es.string.trim")},4:function(e,r){e.exports=require("core-js/modules/es.symbol")},41:function(e,r,t){"use strict";t.r(r);t(4),t(13),t(2),t(5),t(17),t(20),t(6),t(7),t(3),t(11),t(38),t(8),t(18);var o=t(0),n=t.n(o),c=t(77),i=t.n(c);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l=function e(r){var t=r.fields,o=r.field,c=void 0===o?"":o,s=r.state,a=r.api,l=r.fieldClassName,f=r.components,p=r.component;return Object.keys(t).map((function(r){var o=t[r],d=o.type,m=o.label,b=o.fields,y=void 0===b?{}:b,j=o.className;if(!function(e,r){if(!1===e)return!1;if(!e)return!0;var t="string"==typeof e,o=i()(r,t?e:e.field);return t?!!e:e.value===o}(o.access,s.values))return null;var g=c?"".concat(c,".").concat(r):r,x="".concat(l||""," ").concat(j||"").trim(),O=u({},o,{components:f,key:r,label:m,fields:y,field:g,state:s,api:a,className:x});if("string"==typeof p){var v=f[p];return n.a.createElement(v,u({},O))}return p?n.a.createElement("component",u({},O)):"fieldset"===d?n.a.createElement(f.FieldSet,u({},O)):"checkbox"===d?n.a.createElement(f.CheckBox,u({},O)):"fields"===d||Object.keys(y).length?n.a.createElement(e,u({},O)):n.a.createElement(f.TextField,u({},O))})).filter(Boolean)};l.defaultProps={field:void 0,className:null,components:{}},r.default=l},5:function(e,r){e.exports=require("core-js/modules/es.array.for-each")},6:function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},64:function(e,r,t){"use strict";t.r(r);var o=t(0),n=t.n(o),c=t(16),i=t.n(c),s=t(12),u=t(29),a=t.n(u),l=t(41),f=function(e){var r=e.label,t=e.fields,o=e.field,c=e.classes,s=e.className,u=e.state,f=e.api,p=e.components;return n.a.createElement("fieldset",{className:a()(c.root,s)},n.a.createElement(i.a,{className:c.legend,component:"legend"},r),n.a.createElement(l.default,{components:p,state:u,api:f,fields:t,field:o}))};f.defaultProps={field:null,className:null},r.default=Object(s.withStyles)((function(e){return{root:{border:1,borderStyle:"solid",borderColor:e.palette.grey[500],margin:"".concat(e.spacing(1),"px 0"),padding:e.spacing(1)},legend:{padding:e.spacing(1)}}}))(f)},7:function(e,r){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},77:function(e,r){e.exports=require("lodash.get")},8:function(e,r){e.exports=require("core-js/modules/web.dom-collections.for-each")}})}));