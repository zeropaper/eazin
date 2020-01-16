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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ 15:
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("eazin-core/ui");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.symbol"
var es_symbol_ = __webpack_require__(5);

// EXTERNAL MODULE: external "core-js/modules/es.array.filter"
var es_array_filter_ = __webpack_require__(4);

// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptor"
var es_object_get_own_property_descriptor_ = __webpack_require__(7);

// EXTERNAL MODULE: external "core-js/modules/es.object.get-own-property-descriptors"
var es_object_get_own_property_descriptors_ = __webpack_require__(8);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys"
var es_object_keys_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each"
var web_dom_collections_for_each_ = __webpack_require__(9);

// CONCATENATED MODULE: ./src/packages/settings/ui/settings.reducer.js







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
/* harmony default export */ var settings_reducer = (function () {
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/packages/settings/ui/SettingsView.jsx


var SettingsView_SettingsView = function SettingsView() {
  return external_react_default.a.createElement("div", null, "Settings View");
};

/* harmony default export */ var ui_SettingsView = (SettingsView_SettingsView);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(11);

// EXTERNAL MODULE: ./src/packages/settings/ui/settings.actions.js
var settings_actions = __webpack_require__(15);

// CONCATENATED MODULE: ./src/packages/settings/ui/SettingsHeaderLinks.jsx






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
        return dispatch(Object(settings_actions["setSetting"])('darkMode', !!bool));
      };
    }
  };
};

/* harmony default export */ var ui_SettingsHeaderLinks = (Object(external_react_redux_["connect"])(mapStateToProps, SettingsHeaderLinks_mapDispatchToProps)(SettingsHeaderLinks_SettingsHeaderLinks));
// EXTERNAL MODULE: external "eazin-core/ui"
var ui_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/packages/settings/ui/SettingsDrawer.jsx



var SettingsDrawer_SettingsDrawer = function SettingsDrawer() {
  return external_react_default.a.createElement(ui_["LayoutDrawerLink"], {
    to: "/settings"
  }, "Settings");
};

SettingsDrawer_SettingsDrawer.weight = 10;
/* harmony default export */ var ui_SettingsDrawer = (SettingsDrawer_SettingsDrawer);
// CONCATENATED MODULE: ./src/packages/settings/ui/index.js
/* concated harmony reexport restore */__webpack_require__.d(__webpack_exports__, "restore", function() { return restore; });
/* concated harmony reexport actions */__webpack_require__.d(__webpack_exports__, "actions", function() { return settings_actions; });





var routes = [{
  path: '/',
  Drawer: ui_SettingsDrawer,
  HeaderLinks: ui_SettingsHeaderLinks
}, {
  exact: true,
  path: '/settings',
  View: ui_SettingsView
}];

/* harmony default export */ var ui = __webpack_exports__["default"] = ({
  actions: settings_actions,
  routes: routes,
  reducers: {
    settings: settings_reducer
  }
});

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ })

/******/ });
});