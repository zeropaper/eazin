(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[23],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_Drawer_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_Layout_Drawer_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function (_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      to = _ref.to;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: classes.menuLink,
    to: to
  }, children);
}));

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export View */
/* unused harmony export HeaderTabs */
/* unused harmony export Drawer */
/* unused harmony export LandingView */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var View = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }),
  match: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
  }),
  location: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
    search: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }).isRequired,
  api: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    get: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    head: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    post: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    put: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    patch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    delete: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    connect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    options: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    trace: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }).isRequired
};
var HeaderTabs = _objectSpread({}, View);
var Drawer = _objectSpread({}, View);
var LandingView = _objectSpread({}, View);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(25);

// CONCATENATED MODULE: ./src/plugins/groups/GroupsLandingView.jsx



var GroupsLandingView_GroupsLandingView = function GroupsLandingView(props) {
  // eslint-disable-next-line no-console
  // console.info('GroupsLandingView props', props);
  var WrapIn = props.wrapIn;
  return [external_react_default.a.createElement(WrapIn, {
    key: "a"
  }, "Group View A"), external_react_default.a.createElement(WrapIn, {
    key: "b"
  }, "Group View B")];
};

/* harmony default export */ var groups_GroupsLandingView = (GroupsLandingView_GroupsLandingView);
// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(20);

// CONCATENATED MODULE: ./src/plugins/groups/GroupsDrawer.jsx



var GroupsDrawer_GroupsDrawer = function GroupsDrawer() {
  return external_react_default.a.createElement(Layout_Drawer_Link["default"], {
    to: "/groups"
  }, "Groups");
};

/* harmony default export */ var groups_GroupsDrawer = (GroupsDrawer_GroupsDrawer);
// CONCATENATED MODULE: ./src/plugins/groups/index.js


var routes = [{
  path: '/',
  Drawer: groups_GroupsDrawer,
  LandingView: groups_GroupsLandingView
}];
/* harmony default export */ var groups = __webpack_exports__["default"] = ({
  routes: routes
});

/***/ })

}]);
//# sourceMappingURL=eazin.plugin.groups.js.map