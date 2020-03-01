(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-users/ui/UsersView", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-users/ui/UsersView"] = factory();
	else
		root["eazin-users/ui/UsersView"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 237);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(51);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(15);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_24__);






















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var UsersView = /*#__PURE__*/function (_React$Component) {
  _inherits(UsersView, _React$Component);

  function UsersView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UsersView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UsersView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.query = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
        var userToken, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userToken = _this.props.userToken;
                url = "/api/users?".concat(Object(querystring__WEBPACK_IMPORTED_MODULE_21__["stringify"])({
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
                return _context.abrupt("return", Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_24__["queryAPI"])(url, {
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
    }();

    return _this;
  }

  _createClass(UsersView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_24__["Table"], {
        title: "User",
        columns: [{
          title: 'Date',
          filtering: false,
          field: 'updatedAt',
          render: function render(row) {
            return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_24__["TimeAgo"], {
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
}(react__WEBPACK_IMPORTED_MODULE_22___default.a.Component);

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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_23__["connect"])(mapStateToProps)(UsersView));

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.iterator");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-prototype-of");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.set-prototype-of");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.search");

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