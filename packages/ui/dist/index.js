(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsProvider", function() { return PluginsProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingFallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */




var PluginsContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  plugins: {}
});
var PluginsProvider = PluginsContext.Provider;

var RoutePlugin = function RoutePlugin(_ref) {
  var plugins = _ref.plugins,
      name = _ref.name,
      loadingFallback = _ref.loadingFallback,
      emptyFallback = _ref.emptyFallback,
      switchRoutes = _ref.switchRoutes,
      WrapIn = _ref.wrapIn,
      WrapOut = _ref.wrapOut;

  var render = function render(Comp, pluginName) {
    return function (props) {
      var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
        fallback: loadingFallback || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingFallback__WEBPACK_IMPORTED_MODULE_2__["default"], null)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__["default"], {
        errorMessage: "".concat(name, " - ").concat(pluginName)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, _objectSpread({}, props, {
        wrapIn: WrapIn
      }))));
      return WrapOut ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapOut, null, content) : content;
    };
  };

  var routes = Object.keys(plugins).reduce(function (acc, val) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray((plugins[val].routes || []).map(function (route) {
      if (!route[name]) return null;
      var Comp = route[name];
      return {
        val: val,
        Comp: Comp,
        exact: route.exact,
        path: route.path
      };
    })));
  }, []).filter(Boolean).sort(function (_ref2, _ref3) {
    var _ref2$Comp$weight = _ref2.Comp.weight,
        a = _ref2$Comp$weight === void 0 ? 0 : _ref2$Comp$weight;
    var _ref3$Comp$weight = _ref3.Comp.weight,
        b = _ref3$Comp$weight === void 0 ? 0 : _ref3$Comp$weight;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }).map(function (_ref4) {
    var val = _ref4.val,
        Comp = _ref4.Comp,
        exact = _ref4.exact,
        path = _ref4.path;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: "".concat(val, "-").concat(!!exact, "-").concat(path, "-").concat(name),
      path: path,
      exact: exact,
      render: render(Comp, val, path)
    });
  });
  if (!routes.length && emptyFallback) return emptyFallback;
  return switchRoutes ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, routes) : routes;
};

RoutePlugin.defaultProps = {
  loadingFallback: null,
  emptyFallback: null,
  switchRoutes: null,
  wrapIn: null,
  wrapOut: null
};

var PluginPoint = function PluginPoint(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PluginsContext.Consumer, null, function (state) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RoutePlugin, _objectSpread({}, props, {
      plugins: (state || {}).plugins || {}
    }));
  });
};

PluginPoint.defaultProps = {
  loadingFallback: null,
  emptyFallback: null,
  switchRoutes: null
};
/* harmony default export */ __webpack_exports__["default"] = (PluginPoint);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simpleFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-console */

/* harmony default export */ __webpack_exports__["default"] = (function (url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    method: 'GET'
  },
      _ref$parser = _ref.parser,
      parser = _ref$parser === void 0 ? 'json' : _ref$parser,
      options = _objectWithoutProperties(_ref, ["parser"]);

  return Object(_simpleFetch__WEBPACK_IMPORTED_MODULE_0__["default"])(url, options).then(function _callee(res) {
    var json, err, message, _err;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(res.status >= 400)) {
              _context.next = 23;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(res[parser]());

          case 4:
            json = _context.sent;
            _context.next = 13;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            err = new Error("API query error: ".concat(res.statusText));
            err.fields = {};
            err.object = {};
            throw err;

          case 13:
            if (!json.error) {
              _context.next = 22;
              break;
            }

            message = json.error.message ? json.error.message : json.error;
            if (typeof message !== 'string' && json.error.name) message = json.error.name;
            if (typeof message !== 'string') message = 'Serious Error';
            console.warn("".concat(options.method || 'GET', " ").concat(url, ": ").concat(message));
            _err = new Error(message);
            _err.fields = json.fields || {};
            _err.object = json.error;
            throw _err;

          case 22:
            return _context.abrupt("return", json);

          case 23:
            return _context.abrupt("return", res[parser]());

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 7]]);
  });
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (fetch);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  text: {
    fontFamily: 'sans-serif'
  }
};

var Fallback = function Fallback(_ref) {
  var empty = _ref.empty;
  return !empty && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.wrapper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: styles.text
  }, "Loading..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Fallback);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["a"] = (function (theme) {
  var _menuLink;

  return {
    root: {
      minWidth: '20vw',
      maxWidth: '45vw',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      overflow: 'auto'
    },
    menuLink: (_menuLink = {
      color: 'currentColor',
      textDecoration: 'none',
      cursor: 'pointer',
      padding: "".concat(theme.spacing(1), "px ").concat(theme.spacing(2), "px")
    }, _defineProperty(_menuLink, theme.breakpoints.up('md'), {
      padding: theme.spacing(2)
    }), _defineProperty(_menuLink, "display", 'block'), _defineProperty(_menuLink, '&.active', {
      textDecoration: 'underline'
    }), _menuLink)
  };
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // eslint-disable-next-line no-console
      console.warn('Catched error', error, errorInfo); // // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      var hasError = this.state.hasError,
          _this$props = this.props,
          errorMessage = _this$props.errorMessage,
          children = _this$props.children;

      if (hasError) {
        return errorMessage || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Something went wrong.");
      } // eslint-disable-next-line react/destructuring-assignment


      return children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // eslint-disable-next-line no-console
      console.warn('getDerivedStateFromError', error); // Update state so the next render will show the fallback UI.

      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ErrorBoundary.defaultProps = {
  errorMessage: null,
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTheme", function() { return makeTheme; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);


var primary = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["amber"],
    accent = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["deepOrange"];
var makeTheme = function makeTheme(type) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
    palette: {
      primary: primary,
      accent: accent,
      type: type
    },
    typography: {
      useNextVariants: true
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: primary,
    accent: accent,
    type: 'dark'
  },
  typography: {
    useNextVariants: true
  }
}));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export View */
/* unused harmony export HeaderTabs */
/* unused harmony export Drawer */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
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
  })
};
var HeaderTabs = _objectSpread({}, View);
var Drawer = _objectSpread({}, View);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (scope) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'black';
  var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function () {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ( false || force) && // eslint-disable-next-line no-console
    (_console = console).info.apply(_console, ["%c[".concat(scope, "]"), "color: ".concat(color)].concat(args));
  };
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/anchor-is-valid */




var Link = function Link(_ref) {
  var color = _ref.color,
      underline = _ref.underline,
      variant = _ref.variant,
      children = _ref.children,
      to = _ref.to;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread({}, {
    color: color,
    underline: underline,
    variant: variant
  }, {
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], _objectSpread({
        innerRef: ref
      }, props, {
        to: to
      }));
    })
  }), children);
};

Link.defaultProps = {
  children: null,
  color: undefined,
  underline: undefined,
  variant: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appContextShape", function() { return appContextShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextProvider", function() { return AppContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextConsumer", function() { return AppContextConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAppContext", function() { return withAppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _util_queryAPI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var _components_PluginPoint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var appContextShape = {
  darkMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  log: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var log = Object(_util_logger__WEBPACK_IMPORTED_MODULE_8__["default"])('HTS', 'lime');
var defaultValue = {
  loading: 0,
  darkMode: true,
  log: log,
  dispatch: function dispatch() {},
  query: function query() {
    return Promise.reject(new Error('Not yet ready'));
  }
};
var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultValue);
var AppContextProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppContextProvider, _React$Component);

  function AppContextProvider(props) {
    var _this;

    _classCallCheck(this, AppContextProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppContextProvider).call(this, props));
    _this.state = {
      loading: 0,
      darkMode: false,
      bootstraped: [],
      plugins: null
    };

    _this.handleStoreChange = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          getState = _assertThisInitialize.store.getState;

      var stateDarkMode = _this.state.darkMode;

      var _getState = getState(),
          _getState$settings = _getState.settings;

      _getState$settings = _getState$settings === void 0 ? {} : _getState$settings;
      var _getState$settings$da = _getState$settings.darkMode,
          storeDarkMode = _getState$settings$da === void 0 ? false : _getState$settings$da;

      if (storeDarkMode !== stateDarkMode) {
        _this.theme = Object(_theme__WEBPACK_IMPORTED_MODULE_9__["makeTheme"])(storeDarkMode ? 'dark' : 'light');

        _this.setState({
          darkMode: storeDarkMode
        });
      }
    };

    _this.bootstrap = function _callee(plugins) {
      var _this$store, getState, dispatch, pluginNames, bootstraped;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.handleStoreChange();

              _this$store = _this.store, getState = _this$store.getState, dispatch = _this$store.dispatch;
              pluginNames = Object.keys(plugins);
              bootstraped = _this.state.bootstraped;
              _context.next = 6;
              return regeneratorRuntime.awrap(Promise.all(pluginNames.reduce(function (acc, name) {
                var plugin = (plugins[name] || {}).bootstrap;
                if (!plugin || bootstraped.includes(name)) return acc;
                return [].concat(_toConsumableArray(acc), [plugin]);
              }, []).map(function (fn) {
                return fn(getState(), dispatch, getState, plugins);
              })));

            case 6:
              return _context.abrupt("return", new Promise(function (res) {
                return _this.setState({
                  plugins: plugins
                }, res);
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    _this.query = function _callee2(url) {
      var _ref,
          headers,
          options,
          newHeaders,
          _assertThisInitialize2,
          Authorization,
          _args2 = arguments;

      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, headers = _ref.headers, options = _objectWithoutProperties(_ref, ["headers"]);
              newHeaders = _objectSpread({
                'Content-Type': 'application/json',
                Accept: 'application/json'
              }, headers || {});
              _assertThisInitialize2 = _assertThisInitialized(_this), Authorization = _assertThisInitialize2.Authorization;
              if (Authorization) newHeaders.Authorization = "Bearer ".concat(Authorization);
              return _context2.abrupt("return", Object(_util_queryAPI__WEBPACK_IMPORTED_MODULE_10__["default"])(url, _objectSpread({}, options, {
                headers: newHeaders
              })));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    };

    _this.theme = Object(_theme__WEBPACK_IMPORTED_MODULE_9__["makeTheme"])('light');
    Promise.all(Object.values(props.plugins)).then(function (loaded) {
      var loadedObj = {};
      Object.keys(props.plugins).forEach(function (key, k) {
        loadedObj[key] = loaded[k].default || loaded[k];
      });
      _this.store = Object(_store__WEBPACK_IMPORTED_MODULE_6__["default"])(loadedObj);
      _this.storeUnsubscribe = _this.store.subscribe(_this.handleStoreChange);
      return _this.bootstrap(loadedObj);
    });
    return _this;
  }

  _createClass(AppContextProvider, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this.storeUnsubscribe === 'function') this.storeUnsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children,
          store = this.store,
          _this$state = this.state,
          plugins = _this$state.plugins,
          state = _objectWithoutProperties(_this$state, ["plugins"]),
          query = this.query;

      if (!plugins) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CircularProgress"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppContext.Provider, {
        value: _objectSpread({}, state, {
          dispatch: store.dispatch,
          log: log,
          query: query
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PluginPoint__WEBPACK_IMPORTED_MODULE_11__["PluginsProvider"], {
        value: {
          plugins: plugins
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: store
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["MuiThemeProvider"], {
        theme: this.theme
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, null), children))));
    }
  }, {
    key: "Authorization",
    get: function get() {
      var getState = this.store.getState;

      var _getState2 = getState(),
          _getState2$settings = _getState2.settings;

      _getState2$settings = _getState2$settings === void 0 ? {} : _getState2$settings;
      var userToken = _getState2$settings.userToken;
      return userToken;
    }
  }]);

  return AppContextProvider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var AppContextConsumer = AppContext.Consumer;
var withAppContext = function withAppContext(Comp) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppContextConsumer, null, function (appContextValue) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp // eslint-disable-next-line react/jsx-props-no-spreading
      , _objectSpread({}, props, {}, appContextValue));
    });
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var storageName = 'eazin-1'; // eslint-disable-next-line no-unused-vars

var readLocalStorageState = function readLocalStorageState() {
  try {
    return JSON.parse(localStorage.getItem(storageName));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.info(e.message);
    return false;
  }
}; // eslint-disable-next-line no-unused-vars


var writeLocalStorageState = function writeLocalStorageState(toStore) {
  return requestAnimationFrame(function () {
    try {
      localStorage.setItem(storageName, JSON.stringify(toStore));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.info(e.message);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (plugins) {
  var preloaded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pluginReducers = {};
  var pluginStores = {};
  Object.keys(plugins).forEach(function (name) {
    pluginReducers = _objectSpread({}, pluginReducers, {}, (plugins[name] || {}).reducers || {});
    pluginStores = _objectSpread({}, pluginStores, {}, (plugins[name] || {}).store || {});
  });
  var appReducer = Object.keys(pluginReducers).length ? Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(pluginReducers) : function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state;
  };
  pluginStores = _objectSpread({}, pluginStores, {}, preloaded || {});

  var rootReducer = function rootReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (action.type === 'CORE_RELOAD') return pluginStores;
    return appReducer(state, action);
  };

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, pluginStores, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _PluginPoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);









var Header = function Header(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      onOpenDrawer = _ref.onOpenDrawer,
      fixed = _ref.fixed;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: fixed ? 'fixed' : 'relative',
    className: [classes.appBar, className].filter(Boolean).join(' ')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    variant: "dense",
    className: classes.toolbar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    mdUp: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    "data-testid": "header-menu-button",
    onClick: function onClick() {
      return onOpenDrawer && onOpenDrawer();
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    smDown: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    className: classes.menuLink,
    to: "/"
  }, "137"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-testid": "header-links"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginPoint__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "HeaderLinks"
  })))), fixed && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    variant: "dense"
  }));
};

Header.defaultProps = {
  className: null,
  onOpenDrawer: null,
  fixed: false
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var answers = _ref2.answers,
      others = _ref2.others;
  return {
    answers: answers,
    others: others
  };
};

var styled = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    appBar: {
      zIndex: 1210
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    menuLink: {
      color: 'currentColor',
      textDecoration: 'none',
      cursor: 'pointer',
      marginLeft: theme.spacing(2)
    }
  };
})(Header);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Object(_core_AppContext__WEBPACK_IMPORTED_MODULE_6__["withAppContext"])(styled)));

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DrawerLink */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PluginPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _Layout_Drawer_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);



 // eslint-disable-next-line


var DrawerLink = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_Layout_Drawer_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(function (_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      to = _ref.to;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: classes.menuLink,
    to: to
  }, children);
});

var Drawer = function Drawer(_ref2) {
  var classes = _ref2.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginPoint__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Drawer"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_Layout_Drawer_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Drawer)));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _Layout_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _PluginPoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var fullHeight = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%'
};

var styles = function styles(theme) {
  return {
    '@global': {
      'html, body, #root': fullHeight
    },
    root: fullHeight,
    layoutContent: _objectSpread({}, fullHeight, _defineProperty({
      overflow: 'auto',
      position: 'relative',
      padding: theme.spacing(1)
    }, theme.breakpoints.up('md'), {
      padding: theme.spacing(2)
    })),
    justifyCenter: {
      justifyContent: 'center'
    },
    justifyBottom: {
      justifyContent: 'bottom'
    },
    alignCenter: {
      alignItems: 'center'
    },
    alignEnd: {
      alignItems: 'flex-end'
    },
    drawerShifted: _defineProperty({}, theme.breakpoints.up('md'), {
      left: '20vw',
      width: '80vw'
    }),
    drawer: {
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

var Layout = function Layout(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      justify = _ref.justify,
      align = _ref.align,
      passThru = _ref.passThru;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      drawerOpen = _React$useState2[0],
      setDrawerOpen = _React$useState2[1];

  var onOpenDrawer = function onOpenDrawer() {
    return setDrawerOpen(true);
  };

  var onCloseDrawer = function onCloseDrawer() {
    return setDrawerOpen(false);
  };

  var auth = passThru;
  var drawerContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Drawer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "div",
    className: classes.root
  }, auth && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    mdUp: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    "data-testid": "maindrawer",
    open: drawerOpen,
    onClose: onCloseDrawer,
    classes: {
      paper: classes.drawer
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    variant: "dense"
  }), drawerContent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    smDown: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    "data-testid": "maindrawer",
    open: true,
    variant: "persistent",
    classes: {
      paper: classes.drawer
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    variant: "dense"
  }), drawerContent))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onOpenDrawer: onOpenDrawer,
    fixed: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, _defineProperty(_classNames, classes.layoutContent, true), _defineProperty(_classNames, classes.drawerShifted, drawerContent && auth), _defineProperty(_classNames, classes.alignCenter, align === 'center'), _defineProperty(_classNames, classes.alignEnd, align === 'right'), _defineProperty(_classNames, classes.justifyCenter, justify === 'center'), _defineProperty(_classNames, classes.justifyBottom, justify === 'bottom'), _classNames))
  }, auth ? children : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginPoint__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "AnonymousView"
  })));
};

Layout.defaultProps = {
  align: null,
  justify: null,
  passThru: null
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$settings = _ref2.settings;
  _ref2$settings = _ref2$settings === void 0 ? {} : _ref2$settings;
  var userToken = _ref2$settings.userToken;
  return {
    passThru: !!userToken
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Layout)));

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("typeface-roboto");

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setSetting; });
/* unused harmony export resetSetting */
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
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);

/* harmony default export */ __webpack_exports__["default"] = (_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(49);
exports.encode = exports.stringify = __webpack_require__(50);


/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var icons = {
  Add: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["AddBox"],
  Check: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Check"],
  Clear: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Clear"],
  Delete: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["DeleteOutline"],
  DetailPanel: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ChevronRight"],
  Edit: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Edit"],
  Export: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["SaveAlt"],
  Filter: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FilterList"],
  FirstPage: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FirstPage"],
  LastPage: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LastPage"],
  NextPage: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ChevronRight"],
  PreviousPage: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ChevronLeft"],
  ResetSearch: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Clear"],
  Search: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Search"],
  SortArrow: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowDownward"],
  ThirdStateCheck: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Remove"],
  ViewColumn: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ViewColumn"]
};

var Table = function Table(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_1___default.a, _objectSpread({
    icons: icons
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



var TimeAgo = function TimeAgo(_ref) {
  var date = _ref.date,
      component = _ref.component;
  if (!date) return null;
  var mom = moment__WEBPACK_IMPORTED_MODULE_1___default()(date);

  if (component === 'div') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      title: mom.format('YYYY-MM-DD HH:mm')
    }, mom.fromNow());
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: mom.format('YYYY-MM-DD HH:mm')
  }, mom.fromNow());
};

TimeAgo.defaultProps = {
  date: null,
  component: null
};
/* harmony default export */ __webpack_exports__["default"] = (TimeAgo);

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var log = Object(_core_util_logger__WEBPACK_IMPORTED_MODULE_1__["default"])('WS', 'blue');

var wsBootstrap = function wsBootstrap(socket, dispatch, getState) {
  // standard socket.io events
  ['connect', 'connect_error', 'connect_timeout', 'error', 'disconnect', 'reconnect', 'reconnect_attempt', 'reconnecting', 'reconnect_error', 'reconnect_failed' // 'ping',
  // 'pong',
  ].forEach(function (evtName) {
    return socket.on(evtName, function () {
      log("event \"".concat(evtName, "\""));

      var _getState = getState(),
          status = _getState.ws.status;

      if (status !== socket.connected) {
        dispatch({
          type: 'SET_WS_STATUS',
          payload: socket.connected
        });
      }
    });
  });
};

var bootstrap = function bootstrap(_ref, dispatch, getState, plugins) {
  var _ref$settings = _ref.settings;
  _ref$settings = _ref$settings === void 0 ? {} : _ref$settings;
  var userToken = _ref$settings.userToken;
  log('bootstrap ws', !!userToken);
  if (!userToken) return;
  var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()();
  socket.on('check', function (payload, done) {
    return done();
  });
  Object.keys(plugins).forEach(function (name) {
    if (typeof plugins[name].wsBootstrap !== 'function') return;
    var plugin = plugins[name].wsBootstrap;
    plugin(socket, dispatch, getState);
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  reducers: {
    ws: function ws() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'SET_WS_STATUS':
          return _objectSpread({}, state, {
            status: action.payload
          });

        default:
          return state;
      }
    }
  },
  bootstrap: bootstrap,
  wsBootstrap: wsBootstrap
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(16);

// CONCATENATED MODULE: ./src/plugins/docs/docs.actions.js
// eslint-disable-next-line import/prefer-default-export
var getDocs = function getDocs(docs) {
  return {
    type: 'UPSERT_DOCS',
    payload: docs
  };
};
// EXTERNAL MODULE: ./src/core/util/queryAPI.js
var queryAPI = __webpack_require__(8);

// CONCATENATED MODULE: ./src/plugins/docs/DocsView.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var DocsView_DocsView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DocsView, _React$Component);

  function DocsView() {
    _classCallCheck(this, DocsView);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocsView).apply(this, arguments));
  }

  _createClass(DocsView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props, loadDocs, server;

      return regeneratorRuntime.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, loadDocs = _this$props.loadDocs, server = _this$props.docs.server;

              if (server) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return regeneratorRuntime.awrap(loadDocs());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$docs = this.props.docs,
          server = _this$props$docs.server,
          ui = _this$props$docs.ui;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("header", null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h2"
      }, "Documentation")), external_react_default.a.createElement("section", null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h3"
      }, "Plugins"), server && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h4"
      }, "Server"), server.description && external_react_default.a.createElement("div", null, server.description), Object.keys(server.plugins).map(function (name) {
        return external_react_default.a.createElement("div", {
          key: name
        }, external_react_default.a.createElement(core_["Typography"], {
          variant: "h5"
        }, name), server.plugins[name].description && external_react_default.a.createElement("div", null, server.plugins[name].description), server.plugins[name].keys && external_react_default.a.createElement("ul", null, Object.keys(server.plugins[name].keys).map(function (key) {
          return external_react_default.a.createElement("li", {
            key: key
          }, external_react_default.a.createElement("strong", null, key), server.plugins[name].keys[key].description && external_react_default.a.createElement("br", null), server.plugins[name].keys[key].description || '');
        })));
      })), ui && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h4"
      }, "Browser"), Object.keys(ui.plugins).map(function (name) {
        return external_react_default.a.createElement("div", {
          key: name
        }, external_react_default.a.createElement(core_["Typography"], {
          variant: "h5"
        }, name), external_react_default.a.createElement("div", null, ui.plugins[name].description || ''));
      }))));
    }
  }]);

  return DocsView;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var docs = _ref.docs;
  return {
    docs: docs
  };
};

var DocsView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadDocs: function loadDocs() {
      return regeneratorRuntime.async(function loadDocs$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = dispatch;
              _context2.t1 = getDocs;
              _context2.next = 4;
              return regeneratorRuntime.awrap(Object(queryAPI["default"])('/api/docs', {
                headers: {
                  'content-type': 'application/json',
                  Accept: 'application/json'
                }
              }));

            case 4:
              _context2.t2 = _context2.sent;
              _context2.t3 = (0, _context2.t1)(_context2.t2);
              return _context2.abrupt("return", (0, _context2.t0)(_context2.t3));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  };
};

/* harmony default export */ var docs_DocsView = (Object(external_react_redux_["connect"])(mapStateToProps, DocsView_mapDispatchToProps)(DocsView_DocsView));
// CONCATENATED MODULE: ./src/plugins/docs/DocsHeaderTabs.jsx



var DocsHeaderTabs_DocsHeaderTabs = function DocsHeaderTabs() {
  return external_react_default.a.createElement("div", null, "HeaderTabs");
};

/* harmony default export */ var docs_DocsHeaderTabs = (DocsHeaderTabs_DocsHeaderTabs);
// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(22);

// CONCATENATED MODULE: ./src/plugins/docs/DocsDrawer.jsx




var DocsDrawer_DcosDrawer = function DcosDrawer() {
  return external_react_default.a.createElement(Layout_Drawer_Link["default"], {
    to: "/docs"
  }, "Docs");
};

/* harmony default export */ var DocsDrawer = (DocsDrawer_DcosDrawer);
// CONCATENATED MODULE: ./src/plugins/docs/DocsLandingView.jsx



var DocsLandingView_DocsLandingView = function DocsLandingView(props) {
  // eslint-disable-next-line no-console
  // console.info('DocsLandingView props', props);
  var WrapIn = props.wrapIn;
  return external_react_default.a.createElement(WrapIn, null, "Landing View A");
};

/* harmony default export */ var docs_DocsLandingView = (DocsLandingView_DocsLandingView);
// CONCATENATED MODULE: ./src/plugins/docs/index.js




var store = {
  docs: {}
};
var routes = [{
  path: '/',
  Drawer: DocsDrawer,
  LandingView: docs_DocsLandingView
}, {
  path: '/docs',
  HeaderTabs: docs_DocsHeaderTabs
}, {
  exact: true,
  path: '/docs',
  View: docs_DocsView
}];

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPSERT_DOCS':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ var docs = __webpack_exports__["default"] = ({
  routes: routes,
  store: store,
  // actions,
  reducers: {
    docs: reducer
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/plugins/settings/settings.reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(16);

// CONCATENATED MODULE: ./src/plugins/settings/SettingsView.jsx



var SettingsView_SettingsView = function SettingsView() {
  return external_react_default.a.createElement("div", null, "Settings View");
};

/* harmony default export */ var settings_SettingsView = (SettingsView_SettingsView);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(3);

// EXTERNAL MODULE: ./src/plugins/settings/settings.actions.js
var settings_actions = __webpack_require__(31);

// CONCATENATED MODULE: ./src/plugins/settings/SettingsHeaderLinks.jsx






var SettingsHeaderLinks_SettingsDrawer = function SettingsDrawer(_ref) {
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
  var darkMode = _ref2.settings.darkMode;
  return {
    darkMode: darkMode
  };
};

var SettingsHeaderLinks_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleDarkMode: function toggleDarkMode(bool) {
      return function () {
        return dispatch(Object(settings_actions["a" /* setSetting */])('darkMode', !!bool));
      };
    }
  };
};

/* harmony default export */ var SettingsHeaderLinks = (Object(external_react_redux_["connect"])(mapStateToProps, SettingsHeaderLinks_mapDispatchToProps)(SettingsHeaderLinks_SettingsDrawer));
// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(22);

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
  HeaderLinks: SettingsHeaderLinks
}, {
  exact: true,
  path: '/settings',
  View: settings_SettingsView
}];
/* harmony default export */ var settings = __webpack_exports__["default"] = ({
  routes: routes,
  reducers: {
    settings: settings_reducer
  }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(16);

// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(22);

// CONCATENATED MODULE: ./src/plugins/activity/ActivityDrawer.jsx




var ActivityDrawer_ActivityDrawer = function ActivityDrawer() {
  return external_react_default.a.createElement(Layout_Drawer_Link["default"], {
    to: "/activity"
  }, "Activity");
};

/* harmony default export */ var activity_ActivityDrawer = (ActivityDrawer_ActivityDrawer);
// CONCATENATED MODULE: ./src/plugins/activity/ActivityLandingView.jsx



var ActivityLandingView_ActivityLandingView = function ActivityLandingView(props) {
  // eslint-disable-next-line no-console
  // console.info('ActivityLandingView props', props);
  var WrapIn = props.wrapIn;
  return external_react_default.a.createElement(WrapIn, null, "Landing View A");
};

/* harmony default export */ var activity_ActivityLandingView = (ActivityLandingView_ActivityLandingView);
// EXTERNAL MODULE: /home/vale/Repos/eazin/node_modules/querystring-es3/index.js
var querystring_es3 = __webpack_require__(37);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: ./src/core/util/queryAPI.js
var queryAPI = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/Table.jsx
var Table = __webpack_require__(39);

// EXTERNAL MODULE: ./src/components/TimeAgo.jsx
var TimeAgo = __webpack_require__(40);

// CONCATENATED MODULE: ./src/plugins/activity/ActivityView.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ActivityView_ActivityView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActivityView, _React$Component);

  function ActivityView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActivityView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActivityView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.query = function _callee(query) {
      var userToken, url;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userToken = _this.props.userToken;
              console.info(query);
              url = "/api/activities?".concat(Object(querystring_es3["stringify"])({
                limit: query.pageSize,
                offset: query.pageSize * query.page,
                orderDirection: query.orderDirection,
                orderBy: query.orderBy ? query.orderBy.field : 'updatedAt',
                search: query.search,
                filters: JSON.stringify((query.filters || []).map(function (filter) {
                  return _objectSpread({}, filter, {
                    column: filter.column.field
                  });
                }))
              }));
              return _context.abrupt("return", Object(queryAPI["default"])(url, {
                headers: {
                  'content-type': 'application/json',
                  Accept: 'application/json',
                  Authorization: "Bearer ".concat(userToken)
                }
              }));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    return _this;
  }

  _createClass(ActivityView, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Table["default"], {
        title: "Activity",
        columns: [{
          title: 'Date',
          filtering: false,
          field: 'createdAt',
          render: function render(row) {
            return external_react_default.a.createElement(TimeAgo["default"], {
              date: row && row.createdAt
            });
          }
        }, {
          title: 'Message',
          field: 'message'
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

  return ActivityView;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$settings = _ref.settings;
  _ref$settings = _ref$settings === void 0 ? {} : _ref$settings;
  var userToken = _ref$settings.userToken;
  return {
    // activities,
    userToken: userToken
  };
};

/* harmony default export */ var activity_ActivityView = (Object(external_react_redux_["connect"])(mapStateToProps)(ActivityView_ActivityView));
// CONCATENATED MODULE: ./src/plugins/activity/index.js
function activity_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function activity_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { activity_ownKeys(source, true).forEach(function (key) { activity_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { activity_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function activity_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-next-line max-len




var wsBootstrap = function wsBootstrap(socket, dispatch, getState) {
  // eslint-disable-next-line no-console
  console.info('activity wsBootstrap', socket, dispatch, getState); // eslint-disable-next-line no-console

  socket.on('activity.message', function (info) {
    return console.info('activity.message', info);
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPSERT_ACTIVITY':
      if (!action.payload.id) return state;
      return activity_objectSpread({}, state, activity_defineProperty({}, action.payload.id, activity_objectSpread({}, state[action.payload.id] || {}, {}, action.payload)));

    case 'UPSERT_ACTIVITIES':
      return (Array.isArray(action.payload) ? action.payload : Object.values(action.payload)).reduce(function (acc, payload) {
        return reducer(acc, {
          type: 'UPSERT_ACTIVITY',
          payload: payload
        });
      }, state);

    default:
      return state;
  }
};

var routes = [{
  path: '/',
  Drawer: activity_ActivityDrawer,
  LandingView: activity_ActivityLandingView
}, {
  exact: true,
  path: '/activity',
  View: activity_ActivityView
}];
/* harmony default export */ var activity = __webpack_exports__["default"] = ({
  wsBootstrap: wsBootstrap,
  reducers: {
    activities: reducer
  },
  routes: routes
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var landing_actions_namespaceObject = {};
__webpack_require__.r(landing_actions_namespaceObject);
__webpack_require__.d(landing_actions_namespaceObject, "toggleBool", function() { return toggleBool; });

// CONCATENATED MODULE: ./src/plugins/landing/landing.actions.js
// eslint-disable-next-line import/prefer-default-export
var toggleBool = function toggleBool() {
  return {
    type: 'PLUGIN_A_TOGGLE_BOOL'
  };
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/PluginPoint.jsx
var PluginPoint = __webpack_require__(7);

// EXTERNAL MODULE: ./src/components/LoadingFallback.jsx
var LoadingFallback = __webpack_require__(11);

// CONCATENATED MODULE: ./src/plugins/landing/LandingView.Wrapper.jsx





var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      width: '33%'
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    }
  };
};

var LandingView_Wrapper_Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return external_react_default.a.createElement(core_["GridListTile"], {
    className: classes.root,
    cols: 1
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement(LoadingFallback["default"], null)
  }, external_react_default.a.createElement(core_["Paper"], {
    className: classes.paper
  }, children)));
};

/* harmony default export */ var LandingView_Wrapper = (Object(styles_["withStyles"])(styles)(LandingView_Wrapper_Wrapper));
// CONCATENATED MODULE: ./src/plugins/landing/LandingView.jsx








var LandingView_styles = function styles(theme) {
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

var LandingView_LandingView = function LandingView(_ref) {
  var classes = _ref.classes,
      bool = _ref.bool,
      toggle = _ref.toggle;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: classes.root
  }, external_react_default.a.createElement(core_["GridList"], {
    cellHeight: 160,
    cols: 3,
    spacing: 2,
    className: classes.gridList
  }, external_react_default.a.createElement(PluginPoint["default"], {
    wrapIn: LandingView_Wrapper,
    name: "LandingView"
  }))), external_react_default.a.createElement("div", null, external_react_default.a.createElement(core_["Button"], {
    variant: "contained",
    color: "primary",
    onClick: toggle
  }, "Toggle\xA0", bool ? 'yes' : 'no')));
};

var StyledLandingView = Object(styles_["withStyles"])(LandingView_styles)(LandingView_LandingView);

var mapStateToProps = function mapStateToProps(_ref2) {
  var bool = _ref2.landing.bool;
  return {
    bool: !!bool
  };
};

var LandingView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggle: function toggle() {
      setTimeout(function () {
        return dispatch(toggleBool());
      }, 500);
    }
  };
};

/* harmony default export */ var landing_LandingView = (Object(external_react_redux_["connect"])(mapStateToProps, LandingView_mapDispatchToProps)(StyledLandingView));
// CONCATENATED MODULE: ./src/plugins/landing/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-next-line import/no-cycle


var routes = [{
  exact: true,
  path: '/',
  View: landing_LandingView
}];
var store = {
  landing: {}
};

var landing = function landing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'PLUGIN_A_TOGGLE_BOOL':
      return _objectSpread({}, state, {
        bool: !state.bool
      });

    default:
      return state;
  }
};

/* harmony default export */ var plugins_landing = __webpack_exports__["default"] = ({
  routes: routes,
  store: store,
  reducers: {
    landing: landing
  },
  actions: landing_actions_namespaceObject
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(16);

// CONCATENATED MODULE: ./src/plugins/repositories/ReposLandingView.jsx



var ReposLandingView_ReposLandingView = function ReposLandingView(props) {
  // eslint-disable-next-line no-console
  // console.info('ReposLandingView props', props);
  var WrapIn = props.wrapIn;
  return [external_react_default.a.createElement(WrapIn, {
    key: "a"
  }, "Repo View A"), external_react_default.a.createElement(WrapIn, {
    key: "b"
  }, "Repo View B")];
};

/* harmony default export */ var repositories_ReposLandingView = (ReposLandingView_ReposLandingView);
// CONCATENATED MODULE: ./src/plugins/repositories/index.js

var routes = [{
  path: '/',
  LandingView: repositories_ReposLandingView
}];
/* harmony default export */ var repositories = __webpack_exports__["default"] = ({
  routes: routes
});

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
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
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.jsx
var Layout_Drawer = __webpack_require__(27);

// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(22);

// EXTERNAL MODULE: ./src/components/Layout/Layout.Header.jsx
var Layout_Header = __webpack_require__(25);

// EXTERNAL MODULE: ./src/components/Layout/index.js
var Layout = __webpack_require__(33);

// EXTERNAL MODULE: ./src/components/Link.jsx
var Link = __webpack_require__(19);

// EXTERNAL MODULE: ./src/components/LoadingFallback.jsx
var LoadingFallback = __webpack_require__(11);

// EXTERNAL MODULE: ./src/components/PluginPoint.jsx
var PluginPoint = __webpack_require__(7);

// EXTERNAL MODULE: ./src/plugins/activity/index.js + 3 modules
var activity = __webpack_require__(54);

// EXTERNAL MODULE: ./src/plugins/docs/index.js + 5 modules
var docs = __webpack_require__(52);

// EXTERNAL MODULE: ./src/plugins/landing/index.js + 3 modules
var landing = __webpack_require__(55);

// EXTERNAL MODULE: ./src/plugins/repositories/index.js + 1 modules
var repositories = __webpack_require__(56);

// EXTERNAL MODULE: ./src/plugins/settings/index.js + 4 modules
var settings = __webpack_require__(53);

// EXTERNAL MODULE: ./src/plugins/ws/index.js
var ws = __webpack_require__(51);

// CONCATENATED MODULE: ./src/plugins/index.js
 // export { default as companies } from './companies';






// CONCATENATED MODULE: ./src/components/index.js
/* concated harmony reexport LayoutDrawer */__webpack_require__.d(__webpack_exports__, "LayoutDrawer", function() { return Layout_Drawer["a" /* default */]; });
/* concated harmony reexport LayoutDrawerLink */__webpack_require__.d(__webpack_exports__, "LayoutDrawerLink", function() { return Layout_Drawer_Link["default"]; });
/* concated harmony reexport LayoutHeader */__webpack_require__.d(__webpack_exports__, "LayoutHeader", function() { return Layout_Header["default"]; });
/* concated harmony reexport Layout */__webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout["default"]; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return Link["default"]; });
/* concated harmony reexport LoadingFallback */__webpack_require__.d(__webpack_exports__, "LoadingFallback", function() { return LoadingFallback["default"]; });
/* concated harmony reexport PluginPoint */__webpack_require__.d(__webpack_exports__, "PluginPoint", function() { return PluginPoint["default"]; });
/* concated harmony reexport activity */__webpack_require__.d(__webpack_exports__, "activity", function() { return activity["default"]; });
/* concated harmony reexport docs */__webpack_require__.d(__webpack_exports__, "docs", function() { return docs["default"]; });
/* concated harmony reexport landing */__webpack_require__.d(__webpack_exports__, "landing", function() { return landing["default"]; });
/* concated harmony reexport repositories */__webpack_require__.d(__webpack_exports__, "repositories", function() { return repositories["default"]; });
/* concated harmony reexport settings */__webpack_require__.d(__webpack_exports__, "settings", function() { return settings["default"]; });
/* concated harmony reexport ws */__webpack_require__.d(__webpack_exports__, "ws", function() { return ws["default"]; });









/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map