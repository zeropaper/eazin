!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("packages/landing/src/ui/index",[],t):"object"==typeof exports?exports["packages/landing/src/ui/index"]=t():e["packages/landing/src/ui/index"]=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=56)}({0:function(e,t){e.exports=require("react")},1:function(e,t){e.exports=require("@material-ui/core")},12:function(e,t){e.exports=require("react-redux")},13:function(e,t){e.exports=require("@material-ui/core/styles")},14:function(e,t){e.exports=require("core-js/modules/es.array.concat")},2:function(e,t){e.exports=require("eazin-core/ui")},22:function(e,t){e.exports=require("core-js/modules/es.string.trim")},4:function(e,t){e.exports=require("core-js/modules/es.array.filter")},5:function(e,t){e.exports=require("core-js/modules/es.symbol")},56:function(e,t,r){e.exports=r(64)},57:function(e,t){e.exports=require("core-js/modules/web.timers")},6:function(e,t){e.exports=require("core-js/modules/es.object.keys")},64:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"toggleBool",(function(){return o}));r(5),r(4),r(7),r(8),r(6),r(9);var o=function(){return{type:"LANDING_TOGGLE_BOOL"}},i=(r(57),r(0)),c=r.n(i),a=r(12),u=r(1),l=r(13),s=r(2),p=(r(14),r(22),function(e){var t=e.children,r=e.classes,n=e.top;return c.a.createElement(u.GridListTile,{className:r.root,cols:1},c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(s.LoadingFallback,null)},n&&c.a.createElement(u.Paper,{className:r.top},c.a.createElement("span",null,n)),c.a.createElement(u.Paper,{className:"".concat(r.paper," ").concat(n?r.paperWithTop:"").trim()},t)))});p.defaultProps={top:null};var f=Object(l.withStyles)((function(e){return{root:{flexGrow:1,width:"33%","& > div":{display:"flex",flexDirection:"column",flexGrow:1}},top:{width:90,height:90,borderRadius:90,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"auto",marginBottom:0-(e.spacing(1)+45),position:"relative",zIndex:10},paper:{margin:e.spacing(1),padding:e.spacing(1),display:"flex",flexDirection:"column",flexGrow:1},paperWithTop:{paddingTop:45+e.spacing(1)}}}))(p),d=Object(l.withStyles)((function(e){return{root:{marginLeft:e.spacing(-1),marginRight:e.spacing(-1)},gridList:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}}))((function(e){var t=e.classes,r=e.bool,n=e.toggle;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:t.root},c.a.createElement(u.GridList,{cellHeight:160,cols:3,spacing:2,className:t.gridList},c.a.createElement(s.PluginPoint,{wrapIn:f,name:"LandingView"}))),c.a.createElement("div",null,c.a.createElement(u.Button,{variant:"contained",color:"primary",onClick:n},"Toggle ",r?"yes":"no")))}));function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=[{exact:!0,path:"/",View:Object(a.connect)((function(e){return{bool:!!e.landing.bool}}),(function(e){return{toggle:function(){setTimeout((function(){return e(o())}),500)}}}))(d)}];t.default={routes:y,store:{landing:{}},reducers:{landing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LANDING_TOGGLE_BOOL":return m({},e,{bool:!e.bool});default:return e}}},actions:n}},7:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},8:function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},9:function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")}})}));