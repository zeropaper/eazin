(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[6],{

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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setSetting; });
/* unused harmony export resetSetting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearSetting; });
/* unused harmony export setSettings */
/* unused harmony export resetSettings */
var setSetting = function setSetting(key, value) {
  return {
    type: 'SET_SETTING',
    payload: {
      key: key,
      value: value
    }
  };
};
var resetSetting = function resetSetting(key) {
  return {
    type: 'RESET_SETTING',
    payload: {
      key: key
    }
  };
};
var clearSetting = function clearSetting(key) {
  return {
    type: 'CLEAR_SETTING',
    payload: {
      key: key
    }
  };
};
var setSettings = function setSettings(payload) {
  return {
    type: 'SET_SETTINGS',
    payload: payload
  };
};
var resetSettings = function resetSettings() {
  return {
    type: 'RESET_SETTINGS'
  };
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/plugins/settings/settings.reducer.js
var settings_reducer = __webpack_require__(9);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(25);

// CONCATENATED MODULE: ./src/plugins/settings/SettingsView.jsx



var SettingsView_SettingsView = function SettingsView() {
  return external_react_default.a.createElement("div", null, "Settings View");
};

/* harmony default export */ var settings_SettingsView = (SettingsView_SettingsView);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(2);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(5);

// EXTERNAL MODULE: ./src/plugins/settings/settings.actions.js
var settings_actions = __webpack_require__(34);

// CONCATENATED MODULE: ./src/plugins/settings/SettingsHeaderLinks.jsx






var SettingsHeaderLinks_SettingsHeaderLinks = function SettingsHeaderLinks(_ref) {
  var toggleDarkMode = _ref.toggleDarkMode,
      darkMode = _ref.darkMode;
  return external_react_default.a.createElement(core_["IconButton"], {
    size: "small",
    color: "inherit",
    onClick: toggleDarkMode(!darkMode),
    "data-testid": "dark-mode"
  }, external_react_default.a.createElement(icons_["InvertColors"], null));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$settings$darkMo = _ref2.settings.darkMode,
      darkMode = _ref2$settings$darkMo === void 0 ? false : _ref2$settings$darkMo;
  return {
    darkMode: darkMode
  };
};

var SettingsHeaderLinks_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDarkMode: function toggleDarkMode(bool) {
      return function () {
        return dispatch(Object(settings_actions["b" /* setSetting */])('darkMode', !!bool));
      };
    }
  };
};

/* harmony default export */ var settings_SettingsHeaderLinks = (Object(external_react_redux_["connect"])(mapStateToProps, SettingsHeaderLinks_mapDispatchToProps)(SettingsHeaderLinks_SettingsHeaderLinks));
// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(20);

// CONCATENATED MODULE: ./src/plugins/settings/SettingsDrawer.jsx



var SettingsDrawer_SettingsDrawer = function SettingsDrawer() {
  return external_react_default.a.createElement(Layout_Drawer_Link["default"], {
    to: "/settings"
  }, "Settings");
};

/* harmony default export */ var settings_SettingsDrawer = (SettingsDrawer_SettingsDrawer);
// CONCATENATED MODULE: ./src/plugins/settings/index.js




settings_SettingsDrawer.weight = 10;
var routes = [{
  path: '/',
  Drawer: settings_SettingsDrawer,
  HeaderLinks: settings_SettingsHeaderLinks
}, {
  exact: true,
  path: '/settings',
  View: settings_SettingsView
}];
/* harmony default export */ var settings = __webpack_exports__["default"] = ({
  routes: routes,
  reducers: {
    settings: settings_reducer["a" /* default */]
  }
});

/***/ })

}]);
//# sourceMappingURL=Apploader.plugin.settings.js.map