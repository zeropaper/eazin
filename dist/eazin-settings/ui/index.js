(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-settings/ui/index", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-settings/ui/index"] = factory();
	else
		root["eazin-settings/ui/index"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 213);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restore", function() { return restore; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storeName = 'eazin-1';

var store = function store(data) {
  localStorage[storeName] = JSON.stringify(data || {});
  return data;
};

var restore = function restore() {
  return JSON.parse(localStorage[storeName] || '{}');
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : restore();

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case 'SET_SETTING':
      return store(_objectSpread({}, state, _defineProperty({}, payload.key, payload.value)));

    case 'CLEAR_SETTING':
    case 'RESET_SETTING':
      return store(_objectSpread({}, state, _defineProperty({}, payload.key, null)));

    case 'SET_SETTINGS':
      return store(_objectSpread({}, state, {}, payload));

    case 'RESET_SETTINGS':
      return store({});

    default:
      return state;
  }
});

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InvertColors");

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_8__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var yesNo = function yesNo(bool) {
  return bool ? 'yes' : 'no';
};

var SettingsView = function SettingsView(_ref) {
  var darkMode = _ref.darkMode;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "Dark Mode:\xA0", yesNo(darkMode));
};

SettingsView.pageTitle = 'Settings';
SettingsView.defaultProps = {
  darkMode: null
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var settings = _ref2.settings;
  return _objectSpread({}, settings);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(SettingsView));

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(140);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_InvertColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(141);
/* harmony import */ var _material_ui_icons_InvertColors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InvertColors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);






var SettingsHeaderLinks = function SettingsHeaderLinks(_ref) {
  var toggleDarkMode = _ref.toggleDarkMode,
      darkMode = _ref.darkMode;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "small",
    color: "inherit",
    onClick: toggleDarkMode(!darkMode),
    "data-testid": "dark-mode"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_InvertColors__WEBPACK_IMPORTED_MODULE_3___default.a, null));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$settings$darkMo = _ref2.settings.darkMode,
      darkMode = _ref2$settings$darkMo === void 0 ? false : _ref2$settings$darkMo;
  return {
    darkMode: darkMode
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDarkMode: function toggleDarkMode(bool) {
      return function () {
        return dispatch(Object(_settings_actions__WEBPACK_IMPORTED_MODULE_4__["setSetting"])('darkMode', !!bool));
      };
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SettingsHeaderLinks));

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_2__);




var SettingsDrawer = function SettingsDrawer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_2__["LayoutDrawerLink"], {
    to: "/settings",
    Icon: _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_1___default.a
  }, "Settings");
};

SettingsDrawer.weight = 10;
/* harmony default export */ __webpack_exports__["default"] = (SettingsDrawer);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restore", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_0__["restore"]; });

/* harmony import */ var _SettingsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154);
/* harmony import */ var _SettingsHeaderLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(155);
/* harmony import */ var _SettingsDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(156);
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_4__; });





var routes = [{
  path: '/',
  Drawer: _SettingsDrawer__WEBPACK_IMPORTED_MODULE_3__["default"],
  HeaderLinks: _SettingsHeaderLinks__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  exact: true,
  path: '/settings',
  View: _SettingsView__WEBPACK_IMPORTED_MODULE_1__["default"]
}];

/* harmony default export */ __webpack_exports__["default"] = ({
  actions: _settings_actions__WEBPACK_IMPORTED_MODULE_4__,
  routes: routes,
  reducers: {
    settings: _settings_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSetting", function() { return setSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSetting", function() { return resetSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSetting", function() { return clearSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSettings", function() { return setSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSettings", function() { return resetSettings; });
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

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("eazin-core/ui");

/***/ })

/******/ });
});