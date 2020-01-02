require("source-map-support").install(),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("packages/ui/dist/components/Form/Fields",[],t):"object"==typeof exports?exports["packages/ui/dist/components/Form/Fields"]=t():e["packages/ui/dist/components/Form/Fields"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=61)}({0:function(e,t){e.exports=require("react")},1:function(e,t){e.exports=require("@material-ui/core")},16:function(e,t,r){"use strict";r.r(t);var n=r(0),l=r.n(n),o=r(21),a=r(18),i=r(19);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function e(t){var r=t.fields,n=t.field,c=void 0===n?"":n,s=t.state,f=t.api;return Object.keys(r).map((function(t){var n=r[t],p=n.type,d=n.label,y=n.fields,b=void 0===y?{}:y,m=n.buttons,g=n.className,v=c?"".concat(c,".").concat(t):t;return"fieldset"===p?l.a.createElement(o.default,{key:t,label:d,fields:b,field:v,state:s,api:f,className:g}):"fields"===p?l.a.createElement(e,{key:t,label:d,fields:b,field:v,state:s,api:f,className:g}):m?l.a.createElement(i.default,{key:t,buttons:"function"==typeof m?m(s,f,t,r):m,className:g}):l.a.createElement(a.default,u({},n,{key:t,field:v}))})).filter(Boolean)};c.defaultProps={field:void 0,className:null},t.default=c},17:function(e,t){e.exports=require("informed")},18:function(e,t,r){"use strict";r.r(t);var n=r(0),l=r.n(n),o=r(17),a=r(1);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=function(e){var t=e.fieldState,r=e.fieldApi,n=u(e,["fieldState","fieldApi"]),o=t.value,c=t.touched,s=r.setValue,f=r.setTouched,p=n.onChange,d=n.onBlur,y=n.initialValue,b=(n.defaultValue,n.forwardedRef),m=n.helperText,g=u(n,["onChange","onBlur","initialValue","defaultValue","forwardedRef","helperText"]),v=o||0===o?o:!c&&y?y:"",O=n.error||t.error||t.asyncError;return l.a.createElement(a.TextField,i({},g,{name:g.field,inputRef:b,value:v,inputProps:{onChange:function(e){s(e.target.value),p&&p(e)},onBlur:function(e){f(!0),d&&d(e)}},helperText:O||m,error:!!O}))};c.defaultProps={forwardedRef:null,onChange:null,onBlur:null,error:null,helperText:null,initialValue:null,defaultValue:null},t.default=Object(o.asField)(c)},19:function(e,t,r){"use strict";r.r(t);var n=r(0),l=r.n(n),o=r(22),a=r.n(o),i=r(7),u=r.n(i),c=r(23),s=r.n(c);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{style:null,className:null,buttons:[],classes:{}},t=e.style,r=void 0===t?null:t,n=e.className,o=void 0===n?null:n,i=e.buttons,c=void 0===i?[]:i,s=e.classes;return l.a.createElement("div",{style:r,className:u()(s.root,o)},c.map((function(e){var t=e.children,r=e.text,n=e.key,o=y(e,["children","text","key"]),i=p({key:n||r,variant:"contained",type:"button",color:"submit"===o.type?"primary":"default"},o);return l.a.createElement(a.a,i,t||r)})))};b.defaultProps={style:null,className:null,buttons:[]},t.default=s()((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:e.spacing(1),"& > button":{marginLeft:e.spacing(2)}}}}))(b)},21:function(e,t,r){"use strict";r.r(t);var n=r(0),l=r.n(n),o=r(1),a=r(4),i=r(7),u=r.n(i),c=r(16),s=function(e){var t=e.label,r=e.fields,n=e.field,a=e.classes,i=e.className,s=e.state,f=e.api;return l.a.createElement("fieldset",{className:u()(a.root,i)},l.a.createElement(o.Typography,{className:a.legend,component:"legend"},t),l.a.createElement("div",null,l.a.createElement(c.default,{state:s,api:f,fields:r,field:n})))};s.defaultProps={field:null,className:null},t.default=Object(a.withStyles)((function(e){return{root:{border:1,borderStyle:"solid",borderColor:e.palette.grey[500],margin:"".concat(e.spacing(1),"px 0"),padding:e.spacing(1)},legend:{padding:e.spacing(1)}}}))(s)},22:function(e,t){e.exports=require("@material-ui/core/Button")},23:function(e,t){e.exports=require("@material-ui/core/styles/withStyles")},4:function(e,t){e.exports=require("@material-ui/core/styles")},61:function(e,t,r){e.exports=r(16)},7:function(e,t){e.exports=require("classnames")}})}));
//# sourceMappingURL=Fields.js.map