(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-users/ui/index", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-users/ui/index"] = factory();
	else
		root["eazin-users/ui/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 234);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("eazin-core/ui");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMail", function() { return validMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPassword", function() { return validPassword; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator_es_lib_isEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var validator_es_lib_isEmail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_es_lib_isEmail__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable import/no-extraneous-dependencies */

var validMail = function validMail() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!val || !validator_es_lib_isEmail__WEBPACK_IMPORTED_MODULE_2___default()(val)) return 'Not a valid email address';
  return undefined;
};
var validPassword = function validPassword() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (val.length < 13) return 'Must be at least 13 charachters long';
  if (!val.match(/[a-z]+/)) return 'Must contain lowercase characters';
  if (!val.match(/[A-Z]+/)) return 'Must contain uppercase characters';
  if (!val.match(/[0-9]+/)) return 'Must contain numbers';
  if (!val.match(/[^0-9a-zA-Z]+/)) return 'Must contain special charachters';
  return undefined;
};

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearUser", function() { return clearUser; });
var setUser = function setUser(payload) {
  return {
    type: 'SET_CURRENT_USER',
    payload: payload
  };
};
var clearUser = function clearUser() {
  return {
    type: 'CLEAR_CURRENT_USER'
  };
};

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
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
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, exports) {

module.exports = require("validator/es/lib/isEmail");

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.search");

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match");

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return {
    root: _defineProperty({
      flexGrow: 1,
      width: 'auto',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column'
    }, theme.breakpoints.up('md'), {
      width: '33%'
    }),
    paper: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  };
};

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      title = _ref.title,
      testId = _ref['data-testid'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    className: classes.root,
    cols: 1,
    "data-testid": testId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "h4",
    gutterBottom: true
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__["LoadingFallback"], null)
  }, children));
};

Wrapper.defaultProps = {
  title: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Wrapper));

/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var UserPropTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  firstName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  lastName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  isAdmin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isVerified: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserPropTypes);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__);







var styles = function styles() {
  return {
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    items: {
      margin: 0,
      padding: 0
    }
  };
};

var Links = function Links(_ref) {
  var classes = _ref.classes,
      links = _ref.links,
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? 'login' : _ref$current;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: classes.root
  }, Object.keys(links).filter(function (key) {
    return key !== current && links[key];
  }).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: key,
      className: classes.item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: links[key].to
    }, links[key].text));
  }));
};

Links.defaultProps = {
  current: 'login'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Links));

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);




function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var required = {
  required: true,
  validateOnChange: true,
  validateOnBlur: true
};
var schema = {
  email: _objectSpread(_objectSpread({
    label: 'Email',
    type: 'email'
  }, required), {}, {
    validate: _user_validators__WEBPACK_IMPORTED_MODULE_6__["validMail"]
  }),
  password: _objectSpread(_objectSpread({
    label: 'Password',
    type: 'password'
  }, required), {}, {
    validate: _user_validators__WEBPACK_IMPORTED_MODULE_6__["validPassword"]
  }),
  passwordConfirm: _objectSpread(_objectSpread({
    label: 'Password Confirmation',
    type: 'password'
  }, required), {}, {
    validate: function validate() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var vals = arguments.length > 1 ? arguments[1] : undefined;
      if (val !== vals.password) return 'Passwords don\'t match';
    }
  })
};

var UserRegister = function UserRegister() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleSubmit = function handleSubmit(fields) {
    return Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__["queryAPI"])('/api/user/register', {
      method: 'POST',
      body: JSON.stringify({
        password: fields.passwordConfirm,
        email: fields.email
      })
    }) // eslint-disable-next-line no-console
    .then(function () {
      return setState({
        email: fields.email,
        showVerifInstruction: true
      });
    }).catch(function (err) {
      return setState({
        error: (err.object || {}).message || err.message
      });
    });
  };

  if (state.showVerifInstruction) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
      component: "div",
      color: "textPrimary"
    }, "A verification email has been sent to\xA0", state.email, ".");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h5"
  }, "Register"), state.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "div",
    color: "error"
  }, state.error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: handleSubmit,
    fields: schema,
    buttons: function buttons(_ref) {
      var pristine = _ref.pristine,
          invalid = _ref.invalid,
          loading = _ref.loading,
          _ref$values = _ref.values,
          email = _ref$values.email,
          passwordConfirm = _ref$values.passwordConfirm;
      return [{
        text: 'Register',
        type: 'submit',
        disabled: pristine || invalid || loading || !email || !passwordConfirm
      }];
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserRegister);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var _settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
var schema = {
  email: _objectSpread(_objectSpread({
    label: 'Email',
    type: 'email'
  }, required), {}, {
    validate: _user_validators__WEBPACK_IMPORTED_MODULE_7__["validMail"]
  }),
  password: _objectSpread({
    label: 'Password',
    type: 'password'
  }, required)
};

var UserLogin = function UserLogin(_ref) {
  var dispatch = _ref.dispatch,
      push = _ref.history.push;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h5"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    method: "post",
    url: "/api/user/login",
    onSuccess: function onSuccess(data) {
      dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_5__["setUser"])(data));
      dispatch(Object(_settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_6__["setSetting"])('userToken', data.token));
      push('/');
    },
    fields: schema,
    buttons: eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__["Form"].standardButtons('Register') // buttons={({ invalid, pristine, loading }) => [
    //   {
    //     text: 'Login',
    //     type: 'submit',
    //     disabled: invalid || pristine || loading,
    //   },
    // ]}

  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function () {
  return {};
})(UserLogin));

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h5"
  }, "Password reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    method: "post",
    url: "/api/user/email",
    successMessage: "Email sent",
    errorMessage: "The Email could not be send",
    fields: {
      email: _objectSpread(_objectSpread({
        label: 'Email'
      }, required), {}, {
        validate: _user_validators__WEBPACK_IMPORTED_MODULE_4__["validMail"]
      })
    },
    buttons: eazin_core_ui__WEBPACK_IMPORTED_MODULE_3__["Form"].standardButtons('Send reset email')
  }));
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
var fields = {
  password: _objectSpread(_objectSpread({
    label: 'Password',
    type: 'password'
  }, required), {}, {
    validate: _user_validators__WEBPACK_IMPORTED_MODULE_10__["validPassword"]
  }),
  passwordConfirm: _objectSpread(_objectSpread({
    label: 'Password Confirmation',
    type: 'password'
  }, required), {}, {
    validate: function validate() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var vals = arguments.length > 1 ? arguments[1] : undefined;
      if (val !== vals.password) return 'Passwords don\'t match';
    }
  })
};
var buttons = eazin_core_ui__WEBPACK_IMPORTED_MODULE_7__["Form"].standardButtons('Reset password');
/* harmony default export */ __webpack_exports__["default"] = (Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_7__["withAppContext"])(function (props) {
  var post = props.api.post,
      search = props.location.search,
      dispatch = props.dispatch,
      push = props.history.push;

  var _parse = Object(querystring__WEBPACK_IMPORTED_MODULE_6__["parse"])(search.slice(1)),
      token = _parse.token;

  var handleSubmit = function handleSubmit(_ref) {
    var password = _ref.password;
    return post('/api/user/password', {
      body: {
        token: token,
        password: password
      }
    });
  };

  var handleSuccess = function handleSuccess(user) {
    dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_9__["setUser"])(user));
    dispatch(Object(_settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_8__["setSetting"])('userToken', user.token));
    push('/account');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h5"
  }, "Password reset"), !!token && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: handleSubmit,
    onSuccess: handleSuccess,
    fields: fields,
    buttons: buttons
  }));
}));

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);









function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
var schema = {
  firstName: _objectSpread({
    label: 'First Name'
  }, required),
  lastName: _objectSpread({
    label: 'Last Name'
  }, required)
};

var UserVerify = function UserVerify(_ref) {
  var dispatch = _ref.dispatch,
      push = _ref.history.push,
      search = _ref.location.search;
  var query = Object(querystring__WEBPACK_IMPORTED_MODULE_10__["parse"])(search.slice(1) || '');

  if (!query.token) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
      color: "error"
    }, "A verification token is required.");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "h5"
  }, "Email verification"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_12__["Form"], {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(fields) {
        var info, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_12__["queryAPI"])('/api/user/verify', {
                  method: 'POST',
                  body: JSON.stringify(_objectSpread(_objectSpread({}, fields), {}, {
                    verifToken: query.token
                  }))
                });

              case 2:
                info = _context.sent;
                _context.next = 5;
                return Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_12__["queryAPI"])('/api/user/me', {
                  headers: {
                    Authorization: "Bearer ".concat(info.token)
                  }
                });

              case 5:
                user = _context.sent;
                dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_14__["setUser"])(user));
                dispatch(Object(_settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_13__["setSetting"])('userToken', info.token));
                push('/');

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    fields: schema,
    buttons: function buttons(_ref3) {
      var pristine = _ref3.pristine,
          invalid = _ref3.invalid,
          loading = _ref3.loading,
          _ref3$values = _ref3.values,
          firstName = _ref3$values.firstName,
          lastName = _ref3$values.lastName;
      return [{
        text: 'Register',
        type: 'submit',
        disabled: pristine || invalid || loading || !firstName || !lastName
      }];
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function () {
  return {};
})(UserVerify));

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var flexVert = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: _objectSpread(_objectSpread({
      maxWidth: 320,
      margin: 'auto',
      height: theme.spacing(12) * 2,
      marginTop: "-".concat(theme.spacing(4), "px"),
      marginBottom: theme.spacing(2)
    }, flexVert), {}, _defineProperty({}, theme.breakpoints.down('md'), {
      height: theme.spacing(12)
    })),
    paper: _objectSpread({
      flexGrow: 1,
      textAlign: 'center',
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }, flexVert)
  });
});

var AnonFormsHeader = function AnonFormsHeader(_ref) {
  var _ref$siteName = _ref.siteName,
      siteName = _ref$siteName === void 0 ? 'eazin' : _ref$siteName;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    component: "div"
  }, siteName)));
};

AnonFormsHeader.defaultProps = {
  siteName: 'eazin'
};
/* harmony default export */ __webpack_exports__["default"] = (AnonFormsHeader);

/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user.user;
  return {
    user: user
  };
};
/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(Comp);
});

/***/ }),
/* 136 */,
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(107);
/* harmony import */ var _UserLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(108);
/* harmony import */ var _UserResetSend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(109);
/* harmony import */ var _UserResetChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(110);
/* harmony import */ var _UserVerify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(111);
/* harmony import */ var _AnonForms_Links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(106);
/* harmony import */ var _AnonForms_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(112);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _paper;

  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
    root: {
      flexGrow: 1
    },
    paper: (_paper = {
      padding: theme.spacing(1)
    }, _defineProperty(_paper, theme.breakpoints.up('md'), {
      padding: theme.spacing(2)
    }), _defineProperty(_paper, '&:last-of-type', {
      marginTop: theme.spacing(2)
    }), _paper)
  });
});

var AnonForms = function AnonForms(_ref) {
  var _ref$Header = _ref.Header,
      Header = _ref$Header === void 0 ? _AnonForms_Header__WEBPACK_IMPORTED_MODULE_11__["default"] : _ref$Header,
      _ref$LoginForm = _ref.LoginForm,
      LoginForm = _ref$LoginForm === void 0 ? _UserLogin__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$LoginForm,
      _ref$RegisterForm = _ref.RegisterForm,
      RegisterForm = _ref$RegisterForm === void 0 ? _UserRegister__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$RegisterForm,
      _ref$VerifyForm = _ref.VerifyForm,
      VerifyForm = _ref$VerifyForm === void 0 ? _UserVerify__WEBPACK_IMPORTED_MODULE_9__["default"] : _ref$VerifyForm,
      _ref$ResetChangeForm = _ref.ResetChangeForm,
      ResetChangeForm = _ref$ResetChangeForm === void 0 ? _UserResetChange__WEBPACK_IMPORTED_MODULE_8__["default"] : _ref$ResetChangeForm,
      _ref$ResetSendForm = _ref.ResetSendForm,
      ResetSendForm = _ref$ResetSendForm === void 0 ? _UserResetSend__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$ResetSendForm;
  var classes = useStyles();
  var links = {
    login: {
      to: '/login',
      text: 'Login'
    },
    register: RegisterForm && {
      to: '/register',
      text: 'Register'
    },
    reset: {
      to: '/reset',
      text: 'Password reset'
    }
  };

  var renderLinks = function renderLinks(current) {
    return function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnonForms_Links__WEBPACK_IMPORTED_MODULE_10__["default"], {
        current: current,
        links: links
      });
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    container: true,
    alignItems: "center",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 10,
    md: 6,
    lg: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.paper
  }, Header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, RegisterForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/register",
    component: RegisterForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/verify",
    component: VerifyForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/reset/change",
    component: ResetChangeForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: ['/reset', '/reset/send'],
    component: ResetSendForm
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: ['/', '/login'],
    component: LoginForm
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, !!RegisterForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/register",
    render: renderLinks('register')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/verify",
    render: renderLinks('verify')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/reset/change",
    render: renderLinks('reset')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: ['/reset', '/reset/send'],
    render: renderLinks('reset')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: ['/', '/login'],
    render: renderLinks('login')
  })))));
};

AnonForms.defaultProps = {
  Header: _AnonForms_Header__WEBPACK_IMPORTED_MODULE_11__["default"],
  LoginForm: _UserLogin__WEBPACK_IMPORTED_MODULE_6__["default"],
  RegisterForm: _UserRegister__WEBPACK_IMPORTED_MODULE_5__["default"],
  VerifyForm: _UserVerify__WEBPACK_IMPORTED_MODULE_9__["default"],
  ResetChangeForm: _UserResetChange__WEBPACK_IMPORTED_MODULE_8__["default"],
  ResetSendForm: _UserResetSend__WEBPACK_IMPORTED_MODULE_7__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AnonForms);

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeOneUser", function() { return removeOneUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upsertOneUser", function() { return upsertOneUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeManyUsers", function() { return removeManyUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upsertManyUsers", function() { return upsertManyUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearUsers", function() { return clearUsers; });
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_0__);


var _buildActions = Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_0__["buildActions"])({
  singular: 'user',
  endpoint: '/api/users'
}),
    removeOneUser = _buildActions.removeOneUser,
    upsertOneUser = _buildActions.upsertOneUser,
    removeManyUsers = _buildActions.removeManyUsers,
    upsertManyUsers = _buildActions.upsertManyUsers,
    clearUsers = _buildActions.clearUsers;



/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("eazin-settings/ui/index");

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var UserName = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref, _ref2) {
  var currentUserId = _ref.user.user.id,
      _ref$users = _ref.users,
      users = _ref$users === void 0 ? {} : _ref$users;
  var id = _ref2.id;
  return _objectSpread(_objectSpread({}, users[id] || {}), {}, {
    currentUserId: currentUserId
  });
})(function (_ref3) {
  var id = _ref3.id,
      currentUserId = _ref3.currentUserId,
      _ref3$firstName = _ref3.firstName,
      firstName = _ref3$firstName === void 0 ? '' : _ref3$firstName,
      _ref3$lastName = _ref3.lastName,
      lastName = _ref3$lastName === void 0 ? '' : _ref3$lastName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: currentUserId === id ? '/account' : "/user/".concat(id)
  }, currentUserId === id ? 'You' : "".concat(firstName.slice(0, 1), ". ").concat(lastName));
});
/* harmony default export */ __webpack_exports__["default"] = (UserName);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _user_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);



var UserAccess = Object(_user_connector__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_ref) {
  var user = _ref.user,
      render = _ref.render,
      renderAdmin = _ref.renderAdmin,
      renderUnverified = _ref.renderUnverified,
      renderForRole = _ref.renderForRole;
  if (!user || !user.isVerified) return renderUnverified && renderUnverified() || null;
  if (typeof renderAdmin === 'function' && user.isAdmin) return renderAdmin() || null;
  if (renderForRole) return renderForRole(user.roles) || null;
  return render() || null;
});
UserAccess.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(_user_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"]),
  render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  renderAdmin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  renderUnverified: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  renderForRole: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
UserAccess.defaultProps = {
  user: null,
  renderAdmin: null,
  renderUnverified: null,
  renderForRole: null
};
UserAccess.displayName = 'UserAccess';
/* harmony default export */ __webpack_exports__["default"] = (UserAccess);

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    user: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        loading: false,
        user: _objectSpread(_objectSpread({}, state.user || {}), action.payload || {})
      };

    case 'CLEAR_CURRENT_USER':
      return {
        user: null
      };

    default:
      return state;
  }
});

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_0__["buildReducer"])({
  singular: 'user'
}));

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultButtons", function() { return defaultButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileForm", function() { return ProfileForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeForm", function() { return PasswordChangeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailChangeForm", function() { return EmailChangeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31);
/* harmony import */ var _user_propTypes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(105);
/* harmony import */ var _UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(97);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var defaultButtons = function defaultButtons(_ref) {
  var pristine = _ref.pristine,
      invalid = _ref.invalid,
      loading = _ref.loading;
  return [{
    text: 'Reset',
    type: 'reset',
    disabled: pristine || loading
  }, {
    text: 'Update',
    type: 'submit',
    disabled: pristine || invalid || loading
  }];
};
var required = {
  required: true,
  validateOnChange: true
}; // eslint-disable-next-line react/prop-types

var ProfileForm = function ProfileForm(_ref2) {
  var firstName = _ref2.firstName,
      lastName = _ref2.lastName,
      updateStoreUser = _ref2.updateStoreUser;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["Form"], {
    key: "".concat(firstName, "-").concat(lastName),
    method: "patch",
    url: "/api/user",
    resetOnSuccess: true,
    fields: {
      firstName: _objectSpread(_objectSpread({
        label: 'First Name'
      }, required), {}, {
        fullWidth: true,
        initialValue: firstName
      }),
      lastName: _objectSpread(_objectSpread({
        label: 'Last Name'
      }, required), {}, {
        fullWidth: true,
        initialValue: lastName
      })
    },
    buttons: defaultButtons,
    onSuccess: updateStoreUser
  });
};
var PasswordChangeForm = function PasswordChangeForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["Form"], {
    method: "post",
    url: "/api/user/password",
    fields: {
      current: _objectSpread(_objectSpread({
        label: 'Current Password',
        type: 'password'
      }, required), {}, {
        fullWidth: true,
        validate: _user_validators__WEBPACK_IMPORTED_MODULE_16__["validPassword"]
      }),
      password: _objectSpread(_objectSpread({
        label: 'New Password',
        type: 'password'
      }, required), {}, {
        fullWidth: true,
        validate: _user_validators__WEBPACK_IMPORTED_MODULE_16__["validPassword"]
      }),
      passwordConfirm: _objectSpread(_objectSpread({
        label: 'Confirmation',
        type: 'password'
      }, required), {}, {
        fullWidth: true,
        validate: function validate() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var vals = arguments.length > 1 ? arguments[1] : undefined;
          if (val !== vals.password) return 'Passwords don\'t match';
        }
      })
    },
    buttons: function buttons(_ref3) {
      var pristine = _ref3.pristine,
          invalid = _ref3.invalid,
          loading = _ref3.loading,
          _ref3$values = _ref3.values,
          current = _ref3$values.current,
          passwordConfirm = _ref3$values.passwordConfirm;
      return [{
        text: 'Reset',
        type: 'reset',
        disabled: pristine || loading
      }, {
        text: 'Update',
        type: 'submit',
        disabled: pristine || invalid || loading || !current || !passwordConfirm
      }];
    }
  });
};
var EmailChangeForm = /*#__PURE__*/function (_React$Component) {
  _inherits(EmailChangeForm, _React$Component);

  var _super = _createSuper(EmailChangeForm);

  function EmailChangeForm() {
    var _this;

    _classCallCheck(this, EmailChangeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      error: null
    });

    return _this;
  }

  _createClass(EmailChangeForm, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$props, email, search, navigate, patch, dispatch, loading, query, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.mounted = true;
                _this$props = this.props, email = _this$props.email, search = _this$props.search, navigate = _this$props.navigate, patch = _this$props.patch, dispatch = _this$props.dispatch;
                loading = this.state.loading;
                query = Object(querystring__WEBPACK_IMPORTED_MODULE_13__["parse"])(search.slice(1));

                if (!(!query.token || loading)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                this.setState({
                  loading: true,
                  error: null
                });
                _context.prev = 7;
                _context.next = 10;
                return patch('/api/user/email', {
                  body: {
                    email: email,
                    token: query.token
                  }
                });

              case 10:
                user = _context.sent;
                dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_17__["setUser"])(user));

                if (this.mounted) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.setState({
                  loading: false,
                  error: null
                });
                _context.next = 22;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](7);

                if (this.mounted) {
                  _context.next = 21;
                  break;
                }

                return _context.abrupt("return");

              case 21:
                this.setState({
                  loading: false,
                  error: _context.t0.message
                });

              case 22:
                _context.prev = 22;
                navigate('/account');
                return _context.finish(22);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 17, 22, 25]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var email = this.props.email;
      var _this$state = this.state,
          loading = _this$state.loading,
          error = _this$state.error;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default.a, {
        severity: "info"
      }, "Your current email address is\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", null, email)), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default.a, {
        severity: "error"
      }, "Something went wrong while changing email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["Form"], {
        method: "patch",
        url: "/api/user/email",
        successMessage: "Email sent!",
        errorMessage: "An error occured",
        fields: {
          email: _objectSpread(_objectSpread({
            label: 'New Email Address',
            type: 'email'
          }, required), {}, {
            validate: function validate(emailValue) {
              if ((emailValue || '').trim() === email) {
                return 'You need to use a new email address';
              }

              return Object(_user_validators__WEBPACK_IMPORTED_MODULE_16__["validMail"])(emailValue);
            },
            fullWidth: true,
            // eslint-disable-next-line max-len
            helperText: 'A verification email will first be send to this address. The new address will be effective only once verified'
          })
        },
        buttons: function buttons(_ref4) {
          var pristine = _ref4.pristine,
              invalid = _ref4.invalid,
              emailValue = _ref4.values.email,
              formLoading = _ref4.loading;
          return [{
            text: 'Send verification mail',
            type: 'submit',
            disabled: pristine || formLoading || loading || invalid || !emailValue.trim() || emailValue.trim() === email
          }];
        }
      }));
    }
  }]);

  return EmailChangeForm;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var AccountView = function AccountView(_ref5) {
  var patch = _ref5.api.patch,
      classes = _ref5.classes,
      user = _ref5.user,
      search = _ref5.location.search,
      navigate = _ref5.history.push,
      dispatch = _ref5.dispatch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    container: true,
    cols: 3,
    spacing: 2,
    className: classes.grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: "Profile",
    "data-testid": "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ProfileForm, {
    firstName: user.firstName,
    lastName: user.lastName,
    updateStoreUser: function updateStoreUser(data) {
      return dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_17__["setUser"])(data));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: "Password",
    "data-testid": "password-change"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PasswordChangeForm, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: "Email",
    "data-testid": "email-change"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(EmailChangeForm, {
    email: user.email,
    patch: patch,
    search: search,
    navigate: navigate,
    dispatch: dispatch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["PluginPoint"], {
    wrapIn: _UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__["default"],
    name: "AccountView"
  })));
};

AccountView.pageTitle = 'Your account';
var mapStateToProps = function mapStateToProps(_ref6) {
  var user = _ref6.user.user;
  return {
    user: user
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(-1),
      marginLeft: theme.spacing(-1),
      marginRight: theme.spacing(-1)
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: 0,
      maxWidth: '100%'
    }
  };
})(AccountView)));

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var UsersView = /*#__PURE__*/function (_React$Component) {
  _inherits(UsersView, _React$Component);

  var _super = _createSuper(UsersView);

  function UsersView() {
    var _this;

    _classCallCheck(this, UsersView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "query", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
        var userToken, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userToken = _this.props.userToken;
                url = "/api/users?".concat(Object(querystring__WEBPACK_IMPORTED_MODULE_5__["stringify"])({
                  limit: query.pageSize,
                  offset: query.pageSize * query.page,
                  orderDirection: query.orderDirection,
                  orderBy: query.orderBy ? query.orderBy.field : 'updatedAt',
                  search: query.search,
                  filters: JSON.stringify((query.filters || []).map(function (filter) {
                    return _objectSpread(_objectSpread({}, filter), {}, {
                      column: filter.column.field
                    });
                  }))
                }));
                return _context.abrupt("return", Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_8__["queryAPI"])(url, {
                  headers: {
                    Authorization: "Bearer ".concat(userToken)
                  }
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(UsersView, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        title: "User",
        columns: [{
          title: 'Date',
          filtering: false,
          field: 'updatedAt',
          render: function render(row) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_8__["TimeAgo"], {
              date: row && row.updatedAt
            });
          }
        }, {
          title: 'Verified',
          field: 'isVerified',
          render: function render(row) {
            return row.isVerified ? 'verified' : 'un-verified';
          }
        }, {
          title: 'First Name',
          field: 'firstName'
        }, {
          title: 'Last Name',
          field: 'lastName'
        }, {
          title: 'Email',
          field: 'email'
        }],
        data: this.query,
        options: {
          search: false,
          filtering: true,
          sorting: true,
          pageSize: 20,
          pageSizeOptions: [10, 20, 50, 100]
        }
      });
    }
  }]);

  return UsersView;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

UsersView.defaultProps = {
  userToken: null
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$settings = _ref2.settings;
  _ref2$settings = _ref2$settings === void 0 ? {} : _ref2$settings;
  var userToken = _ref2$settings.userToken;
  return {
    userToken: userToken
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(UsersView));

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_2__);




var UserDrawer = function UserDrawer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_2__["LayoutDrawerLink"], {
    to: "/account",
    Icon: _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default.a
  }, "Account");
};

/* harmony default export */ __webpack_exports__["default"] = (UserDrawer);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var eazin_settings_ui_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(147);
/* harmony import */ var eazin_settings_ui_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(eazin_settings_ui_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);






var UserDrawerLow = function UserDrawerLow(_ref) {
  var dispatch = _ref.dispatch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    fullWidth: true,
    onClick: function onClick() {
      return dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_4__["clearUser"])()) && dispatch(eazin_settings_ui_index__WEBPACK_IMPORTED_MODULE_3__["actions"].clearSetting('userToken'));
    }
  }, "Logout");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function () {
  return {};
})(UserDrawerLow));

/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(235);


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(159);
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(160);
/* harmony import */ var _AnonForms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(137);
/* harmony import */ var _UserAccountView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(161);
/* harmony import */ var _UsersView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(162);
/* harmony import */ var _UserDrawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(163);
/* harmony import */ var _UserDrawerLow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(164);
/* harmony import */ var _UserName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(151);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserName", function() { return _UserName__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _UserAccess__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAccess", function() { return _UserAccess__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonForms", function() { return _AnonForms__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _AnonForms_Links__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(106);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnonFormsLinks", function() { return _AnonForms_Links__WEBPACK_IMPORTED_MODULE_14__["default"]; });













var bootstrap = function bootstrap(state, dispatch) {
  if (!state.settings.userToken) return;
  return eazin_core_ui__WEBPACK_IMPORTED_MODULE_1__["queryAPI"].get('/api/user/me').then(function (res) {
    if (!res.id) throw new Error('No id');
    dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["setUser"])(res));

    if (res.isAdmin || res.roles.indexOf('get:users') > -1) {
      eazin_core_ui__WEBPACK_IMPORTED_MODULE_1__["queryAPI"].get('/api/users').then(function (users) {
        return dispatch(Object(_users_actions__WEBPACK_IMPORTED_MODULE_4__["upsertManyUsers"])((users || {}).data));
      });
    }
  }).catch(function () {
    dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["clearUser"])());
    dispatch(Object(_users_actions__WEBPACK_IMPORTED_MODULE_4__["clearUsers"])());
    dispatch(Object(_settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_2__["clearSetting"])('userToken'));
  });
};
var routes = [{
  path: '/account',
  View: _UserAccountView__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  path: '/users',
  View: _UsersView__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/',
  Drawer: _UserDrawer__WEBPACK_IMPORTED_MODULE_10__["default"],
  DrawerLow: _UserDrawerLow__WEBPACK_IMPORTED_MODULE_11__["default"],
  AnonymousView: _AnonForms__WEBPACK_IMPORTED_MODULE_7__["default"]
}];
var store = {
  user: {},
  users: {}
};

var wsBootstrap = function wsBootstrap(socket, dispatch, getState) {
  // eslint-disable-next-line no-console
  console.info('user wsBootstrap', socket, dispatch, getState);
  socket.on('user.update', function (user) {
    return dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_3__["setUser"])(user));
  });
};





/* harmony default export */ __webpack_exports__["default"] = ({
  routes: routes,
  bootstrap: bootstrap,
  store: store,
  reducers: {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
    users: _users_reducer__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  wsBootstrap: wsBootstrap
});

/***/ })
/******/ ]);
});