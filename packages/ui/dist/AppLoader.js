(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("AppLoader", [], factory);
	else if(typeof exports === 'object')
		exports["AppLoader"] = factory();
	else
		root["AppLoader"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"21":"plugin.activity","22":"plugin.clients","23":"plugin.docs","24":"plugin.landing","25":"plugin.repositories","26":"plugin.settings","27":"plugin.user","28":"plugin.ws"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
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
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 19 */,
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
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
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
/* 22 */,
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
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("informed");

/***/ }),
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
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

module.exports = require("validator/es/lib/isEmail");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])());

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _core_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _components_PluginPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* eslint-disable react/no-unused-state */

/* eslint-disable react/jsx-props-no-spreading */








var App = function App(_ref) {
  var children = _ref.children,
      plugins = _ref.plugins;
  return plugins && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_AppContext__WEBPACK_IMPORTED_MODULE_4__["AppContextProvider"], {
    plugins: plugins
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
    titleTemplate: "Eazin | %s",
    defaultTitle: "Eazin"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Router"], {
    history: _core_history__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, children || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PluginPoint__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "View",
    switchRoutes: true
  }))));
};

App.defaultProps = {
  plugins: null,
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
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
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);



var AppLoader = function AppLoader() {
  return (
    /* eslint-disable max-len */
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
      plugins: {
        landing: __webpack_require__.e(/* import() | plugin.landing */ 24).then(__webpack_require__.bind(null, 55)),
        repositories: __webpack_require__.e(/* import() | plugin.repositories */ 25).then(__webpack_require__.bind(null, 56)),
        user: __webpack_require__.e(/* import() | plugin.user */ 27).then(__webpack_require__.bind(null, 59)),
        settings: __webpack_require__.e(/* import() | plugin.settings */ 26).then(__webpack_require__.bind(null, 53)),
        activity: __webpack_require__.e(/* import() | plugin.activity */ 21).then(__webpack_require__.bind(null, 54)),
        // companies: import(/* webpackChunkName: "plugin.companies" */'./plugins/companies'),
        docs: __webpack_require__.e(/* import() | plugin.docs */ 23).then(__webpack_require__.bind(null, 52)),
        clients: __webpack_require__.e(/* import() | plugin.clients */ 22).then(__webpack_require__.bind(null, 92)),
        ws: __webpack_require__.e(/* import() | plugin.ws */ 28).then(__webpack_require__.bind(null, 51)) // a: import(/* webpackChunkName: "plugin.a" */'./plugins/p-a'),
        // b: import(/* webpackChunkName: "plugin.b" */'./plugins/p-b'),

      }
    })
    /* eslint-enable max-len */

  );
};

/* harmony default export */ __webpack_exports__["default"] = (AppLoader);

/***/ })
/******/ ]);
});
//# sourceMappingURL=AppLoader.js.map