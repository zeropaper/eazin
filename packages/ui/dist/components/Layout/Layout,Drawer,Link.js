require("source-map-support").install(),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("packages/ui/dist/components/Layout/Layout,Drawer,Link",[],t):"object"==typeof exports?exports["packages/ui/dist/components/Layout/Layout,Drawer,Link"]=t():e["packages/ui/dist/components/Layout/Layout,Drawer,Link"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=54)}({0:function(e,t){e.exports=require("react")},1:function(e,t){e.exports=require("@material-ui/core")},16:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t;return{root:{minWidth:"20vw",maxWidth:"45vw",display:"flex",flexDirection:"column",flexGrow:1,overflow:"auto"},menuLink:(t={color:"currentColor",textDecoration:"none",cursor:"pointer",padding:"".concat(e.spacing(1),"px ").concat(e.spacing(2),"px")},r(t,e.breakpoints.up("md"),{padding:e.spacing(2)}),r(t,"display","block"),r(t,"&.active",{textDecoration:"underline"}),t)}}},2:function(e,t){e.exports=require("react-router-dom")},54:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),u=n(2),a=n(16);t.default=Object(i.withStyles)(a.a)((function(e){var t=e.classes,n=e.children,r=e.to;return o.a.createElement(u.NavLink,{className:t.menuLink,to:r},n)}))}})}));
//# sourceMappingURL=Layout,Drawer,Link.js.map