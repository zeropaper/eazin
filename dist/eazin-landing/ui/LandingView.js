(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-landing/ui/LandingView", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-landing/ui/LandingView"] = factory();
	else
		root["eazin-landing/ui/LandingView"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 228);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("eazin-core/ui");

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(139);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_6__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return {
    root: _defineProperty({
      flexGrow: 1,
      maxWidth: '100%',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }
    }, theme.breakpoints.up('md'), {
      width: '33%'
    }),
    top: {
      width: 90,
      height: 90,
      borderRadius: 90,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      margin: 'auto',
      marginBottom: 0 - (theme.spacing(1) + 45),
      position: 'relative',
      zIndex: 10
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    },
    paperWithTop: {
      paddingTop: 45 + theme.spacing(1)
    }
  };
};

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      top = _ref.top;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.root,
    cols: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_6__["LoadingFallback"], null)
  }, top && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.top
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, top)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "".concat(classes.paper, " ").concat(top ? classes.paperWithTop : '').trim()
  }, children)));
};

Wrapper.defaultProps = {
  top: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(Wrapper));

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LandingView_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);






var styles = function styles(theme) {
  return {
    root: {
      marginLeft: theme.spacing(-1),
      marginRight: theme.spacing(-1)
    },
    gridList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }
  };
};

var LandingView = function LandingView(_ref) {
  var classes = _ref.classes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_1___default.a, {
    cellHeight: 160,
    cols: 3,
    spacing: 2,
    className: classes.gridList
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_3__["PluginPoint"], {
    wrapIn: _LandingView_Wrapper__WEBPACK_IMPORTED_MODULE_4__["default"],
    name: "LandingView"
  })));
};

LandingView.pageTitle = 'Dashboard';
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(LandingView));

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim");

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ })

/******/ });
});