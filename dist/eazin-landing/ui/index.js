!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("eazin-landing/ui/index",[],t):"object"==typeof exports?exports["eazin-landing/ui/index"]=t():e["eazin-landing/ui/index"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=204)}({0:function(e,t){e.exports=require("react")},108:function(e,t,r){"use strict";r.r(t),r.d(t,"toggleBool",(function(){return n}));var n=function(){return{type:"LANDING_TOGGLE_BOOL"}}},12:function(e,t){e.exports=require("@material-ui/core/styles")},125:function(e,t){e.exports=require("@material-ui/core/GridListTile")},13:function(e,t){e.exports=require("core-js/modules/es.array.concat")},130:function(e,t,r){"use strict";r.r(t);r(13),r(38);var n=r(0),o=r.n(n),i=r(68),a=r.n(i),c=r(125),u=r.n(c),l=r(12),s=r(9);var f=function(e){var t=e.children,r=e.classes,n=e.top;return o.a.createElement(u.a,{className:r.root,cols:1},o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(s.LoadingFallback,null)},n&&o.a.createElement(a.a,{className:r.top},o.a.createElement("span",null,n)),o.a.createElement(a.a,{className:"".concat(r.paper," ").concat(n?r.paperWithTop:"").trim()},t)))};f.defaultProps={top:null},t.default=Object(l.withStyles)((function(e){return{root:(t={flexGrow:1,"& > div":{display:"flex",flexDirection:"column",flexGrow:1}},r=e.breakpoints.up("md"),n={width:"33%"},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t),top:{width:90,height:90,borderRadius:90,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"auto",marginBottom:0-(e.spacing(1)+45),position:"relative",zIndex:10},paper:{margin:e.spacing(1),padding:e.spacing(1),display:"flex",flexDirection:"column",flexGrow:1},paperWithTop:{paddingTop:45+e.spacing(1)}};var t,r,n}))(f)},139:function(e,t){e.exports=require("@material-ui/core/GridList")},14:function(e,t){e.exports=require("react-redux")},149:function(e,t,r){"use strict";r.r(t),r.d(t,"StyledLandingView",(function(){return g}));r(159);var n=r(0),o=r.n(n),i=r(14),a=r(55),c=r.n(a),u=r(139),l=r.n(u),s=r(12),f=r(9),p=r(130),d=r(108),m=function(e){var t=e.classes,r=e.bool,n=e.toggle;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:t.root},o.a.createElement(l.a,{cellHeight:160,cols:3,spacing:2,className:t.gridList},o.a.createElement(f.PluginPoint,{wrapIn:p.default,name:"LandingView"}))),o.a.createElement("div",null,o.a.createElement(c.a,{variant:"contained",color:"primary",onClick:n},"Toggle ",r?"yes":"no")))};m.pageTitle="Dashboard";var g=Object(s.withStyles)((function(e){return{root:{marginLeft:e.spacing(-1),marginRight:e.spacing(-1)},gridList:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}}))(m);t.default=Object(i.connect)((function(e){return{bool:!!e.landing.bool}}),(function(e){return{toggle:function(){setTimeout((function(){return e(Object(d.toggleBool)())}),500)}}}))(g)},159:function(e,t){e.exports=require("core-js/modules/web.timers")},2:function(e,t){e.exports=require("core-js/modules/es.array.filter")},204:function(e,t,r){e.exports=r(205)},205:function(e,t,r){"use strict";r.r(t);r(4),r(2),r(5),r(6),r(7),r(3),r(8);var n=r(108);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=[{exact:!0,path:"/",View:r(149).default}];t.default={routes:c,store:{landing:{}},reducers:{landing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LANDING_TOGGLE_BOOL":return i({},e,{bool:!e.bool});default:return e}}},actions:n}},3:function(e,t){e.exports=require("core-js/modules/es.object.keys")},38:function(e,t){e.exports=require("core-js/modules/es.string.trim")},4:function(e,t){e.exports=require("core-js/modules/es.symbol")},5:function(e,t){e.exports=require("core-js/modules/es.array.for-each")},55:function(e,t){e.exports=require("@material-ui/core/Button")},6:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},68:function(e,t){e.exports=require("@material-ui/core/Paper")},7:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},8:function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")},9:function(e,t){e.exports=require("eazin-core/ui")}})}));