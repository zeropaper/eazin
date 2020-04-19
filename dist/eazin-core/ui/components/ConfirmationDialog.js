(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-core/ui/components/ConfirmationDialog", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-core/ui/components/ConfirmationDialog"] = factory();
	else
		root["eazin-core/ui/components/ConfirmationDialog"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(101);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(103);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Form_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37);








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    text: {
      marginBottom: theme.spacing(1.5),
      color: theme.palette.text.secondary
    }
  });
});

var ConfirmationDialog = function ConfirmationDialog(_ref) {
  var open = _ref.open,
      title = _ref.title,
      children = _ref.children,
      handleClose = _ref.onReject,
      rejectLabel = _ref.rejectLabel,
      handleConfirm = _ref.onConfirm,
      confirmLabel = _ref.confirmLabel;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: open,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5___default.a, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "div",
    className: classes.text
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "button",
    variant: "text",
    onClick: handleClose
  }, rejectLabel || 'Cancel'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "button",
    variant: "contained",
    color: "primary",
    onClick: handleConfirm,
    autoFocus: true
  }, confirmLabel || 'Proceed')));
};

ConfirmationDialog.defaultProps = {
  rejectLabel: 'Cancel',
  confirmLabel: 'Proceed'
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmationDialog);

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description");

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.iterator");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.from");

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(27);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(36);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_22__);




















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/prop-types */




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["createStyles"])({
    error: {
      color: theme.palette.error.main,
      '&:hover': {
        color: theme.palette.error.dark
      }
    },
    success: {
      color: theme.palette.success.main,
      '&:hover': {
        color: theme.palette.success.dark
      }
    },
    errorOutlined: {
      borderColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_22__["fade"])(theme.palette.error.main, 0.5),
      '&:hover': {
        borderColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_22__["fade"])(theme.palette.error.dark, 0.5)
      }
    },
    successOutlined: {
      borderColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_22__["fade"])(theme.palette.success.main, 0.5),
      '&:hover': {
        borderColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_22__["fade"])(theme.palette.success.dark, 0.5)
      }
    },
    errorContained: {
      color: theme.palette.error.contrastText,
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.dark
      }
    },
    successContained: {
      color: theme.palette.success.contrastText,
      backgroundColor: theme.palette.success.main,
      '&:hover': {
        backgroundColor: theme.palette.success.dark
      }
    }
  });
});

var Button = function Button(_ref) {
  var _classNames;

  var error = _ref.error,
      success = _ref.success,
      hold = _ref.hold,
      children = _ref.children,
      variant = _ref.variant,
      rest = _objectWithoutProperties(_ref, ["error", "success", "hold", "children", "variant"]);

  var content = children;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(!!error),
      _useState2 = _slicedToArray(_useState, 2),
      hasError = _useState2[0],
      setError = _useState2[1];

  if (hasError) {
    content = typeof error === 'string' ? error : 'Error';
    if (!hold) setTimeout(function () {
      return setError(false);
    }, 3000);
  }

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(!!success),
      _useState4 = _slicedToArray(_useState3, 2),
      hasSuccess = _useState4[0],
      setSuccess = _useState4[1];

  if (hasSuccess) {
    content = typeof success === 'string' ? success : 'Success';
    if (!hold) setTimeout(function () {
      return setSuccess(false);
    }, 3000);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_19__["useEffect"])(function () {
    setError(!!error);
    setSuccess(!!success);
  }, [error, success]);
  var className = classnames__WEBPACK_IMPORTED_MODULE_21___default()((_classNames = {}, _defineProperty(_classNames, classes.error, hasError), _defineProperty(_classNames, classes.success, hasSuccess), _defineProperty(_classNames, classes.errorOutlined, hasError && variant === 'outlined'), _defineProperty(_classNames, classes.successOutlined, hasSuccess && variant === 'outlined'), _defineProperty(_classNames, classes.errorContained, hasError && variant === 'contained'), _defineProperty(_classNames, classes.successContained, hasSuccess && variant === 'contained'), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["Button"], _objectSpread({}, rest, {
    variant: variant,
    className: className
  }), content);
};

Button.defaultProps = {
  error: null,
  success: null,
  hold: false,
  children: null,
  variant: 'text',
  color: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

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

/***/ 80:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.timers");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ })

/******/ });
});