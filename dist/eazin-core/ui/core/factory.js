(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-core/ui/core/factory", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-core/ui/core/factory"] = factory();
	else
		root["eazin-core/ui/core/factory"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 211);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildActions", function() { return buildActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAPIActions", function() { return buildAPIActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildReducer", function() { return buildReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildConnector", function() { return buildConnector; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(169);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_queryAPI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22);















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ucf = function ucf(str) {
  return "".concat(str[0].toUpperCase()).concat(str.slice(1));
};

var buildActions = function buildActions() {
  var _ref2;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      singular = _ref.singular,
      _ref$idKey = _ref.idKey,
      idKey = _ref$idKey === void 0 ? 'id' : _ref$idKey,
      _ref$plural = _ref.plural,
      plural = _ref$plural === void 0 ? "".concat(singular, "s") : _ref$plural,
      _ref$ucSingular = _ref.ucSingular,
      ucSingular = _ref$ucSingular === void 0 ? singular.toUpperCase() : _ref$ucSingular,
      _ref$ucPlural = _ref.ucPlural,
      ucPlural = _ref$ucPlural === void 0 ? plural.toUpperCase() : _ref$ucPlural,
      _ref$ucfSingular = _ref.ucfSingular,
      ucfSingular = _ref$ucfSingular === void 0 ? ucf(singular) : _ref$ucfSingular,
      _ref$ucfPlural = _ref.ucfPlural,
      ucfPlural = _ref$ucfPlural === void 0 ? ucf(plural) : _ref$ucfPlural;

  return _ref2 = {}, _defineProperty(_ref2, "clear".concat(ucfPlural), function clear() {
    return {
      type: "CLEAR_".concat(ucPlural)
    };
  }), _defineProperty(_ref2, "removeOne".concat(ucfSingular), function removeOne(payload) {
    return {
      type: "REMOVE_".concat(ucSingular),
      payload: payload
    };
  }), _defineProperty(_ref2, "removeMany".concat(ucfPlural), function removeMany(payload) {
    if (!Array.isArray(payload)) throw new Error('Bad argument, must be an array');
    return {
      type: "REMOVE_".concat(ucPlural),
      payload: payload
    };
  }), _defineProperty(_ref2, "upsertOne".concat(ucfSingular), function upsertOne(payload) {
    var id = payload[idKey];
    if (!id) throw new Error("Missing ".concat(idKey, " to upsertOne").concat(ucfSingular));
    return {
      type: "UPSERT_".concat(ucSingular),
      payload: _objectSpread({}, payload, _defineProperty({}, idKey, id))
    };
  }), _defineProperty(_ref2, "upsertMany".concat(ucfPlural), function upsertMany(payload) {
    if (!Array.isArray(payload)) throw new Error('Bad argument, must be an array');
    return {
      type: "UPSERT_".concat(ucPlural),
      payload: payload
    };
  }), _ref2;
};
var buildAPIActions = function buildAPIActions() {
  var _Object$keys$reduce;

  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      singular = _ref3.singular,
      endpoint = _ref3.endpoint,
      _ref3$idKey = _ref3.idKey,
      idKey = _ref3$idKey === void 0 ? 'id' : _ref3$idKey,
      _ref3$plural = _ref3.plural,
      plural = _ref3$plural === void 0 ? "".concat(singular, "s") : _ref3$plural,
      _ref3$ucSingular = _ref3.ucSingular,
      ucSingular = _ref3$ucSingular === void 0 ? singular.toUpperCase() : _ref3$ucSingular,
      _ref3$ucPlural = _ref3.ucPlural,
      ucPlural = _ref3$ucPlural === void 0 ? plural.toUpperCase() : _ref3$ucPlural,
      _ref3$ucfSingular = _ref3.ucfSingular,
      ucfSingular = _ref3$ucfSingular === void 0 ? ucf(singular) : _ref3$ucfSingular,
      _ref3$ucfPlural = _ref3.ucfPlural,
      ucfPlural = _ref3$ucfPlural === void 0 ? ucf(plural) : _ref3$ucfPlural;

  var sync = buildActions({
    singular: singular,
    idKey: idKey,
    plural: plural,
    ucSingular: ucSingular,
    ucPlural: ucPlural,
    ucfSingular: ucfSingular,
    ucfPlural: ucfPlural
  });
  return Object.keys(sync).reduce(function (funcs, key) {
    return _objectSpread({}, funcs, _defineProperty({}, key, function (dispatch) {
      return /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _len,
              args,
              _key,
              id,
              doc,
              _id,
              upserted,
              _console,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = _args[_key];
                  }

                  _context.prev = 1;

                  if (!key.startsWith('clear')) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 5;
                  return Object(_util_queryAPI__WEBPACK_IMPORTED_MODULE_15__["delete"])(endpoint);

                case 5:
                  dispatch(sync[key]());
                  _context.next = 29;
                  break;

                case 8:
                  if (!key.startsWith('remove')) {
                    _context.next = 15;
                    break;
                  }

                  // accepts `doc.id` or `id`
                  id = args[0][idKey] || args[0];
                  _context.next = 12;
                  return Object(_util_queryAPI__WEBPACK_IMPORTED_MODULE_15__["delete"])("".concat(endpoint, "/").concat(id));

                case 12:
                  dispatch(sync[key](id));
                  _context.next = 29;
                  break;

                case 15:
                  if (!key.startsWith('upsertOne')) {
                    _context.next = 29;
                    break;
                  }

                  doc = args[0]; // document exists and will be patched

                  _id = doc[idKey];

                  if (!_id) {
                    _context.next = 24;
                    break;
                  }

                  _context.next = 21;
                  return Object(_util_queryAPI__WEBPACK_IMPORTED_MODULE_15__["patch"])("".concat(endpoint, "/").concat(_id), {
                    body: doc
                  });

                case 21:
                  _context.t0 = _context.sent;
                  _context.next = 27;
                  break;

                case 24:
                  _context.next = 26;
                  return Object(_util_queryAPI__WEBPACK_IMPORTED_MODULE_15__["post"])(endpoint, {
                    body: doc
                  });

                case 26:
                  _context.t0 = _context.sent;

                case 27:
                  upserted = _context.t0;
                  dispatch(sync[key](upserted));

                case 29:
                  if (!key.startsWith('upsertMany')) {
                    _context.next = 31;
                    break;
                  }

                  throw new Error("PR welcome: eazin action factory async upsertMany* (".concat(key, ") is not yet ready"));

                case 31:
                  _context.next = 36;
                  break;

                case 33:
                  _context.prev = 33;
                  _context.t1 = _context["catch"](1);

                  // eslint-disable-next-line no-console
                  (_console = console).error.apply(_console, ['async action "%s"', key].concat(args, [_context.t1.stack]));

                case 36:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 33]]);
        }));

        return function () {
          return _ref4.apply(this, arguments);
        };
      }();
    }));
  }, (_Object$keys$reduce = {}, _defineProperty(_Object$keys$reduce, "retrieveOne".concat(ucfSingular), function retrieveOne(dispatch) {
    return /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = dispatch;
                _context2.t1 = sync;
                _context2.t2 = "upsertOne".concat(ucfSingular);
                _context2.next = 5;
                return Object(_util_queryAPI__WEBPACK_IMPORTED_MODULE_15__["get"])("".concat(endpoint, "/").concat(id));

              case 5:
                _context2.t3 = _context2.sent;
                _context2.t4 = _context2.t1[_context2.t2].call(_context2.t1, _context2.t3);
                return _context2.abrupt("return", (0, _context2.t0)(_context2.t4));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }();
  }), _defineProperty(_Object$keys$reduce, "retrieveMany".concat(ucfPlural), // eslint-disable-next-line no-unused-vars
  function retrieveMany(dispatch) {
    return /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var query,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                _context3.t0 = dispatch;
                _context3.t1 = sync;
                _context3.t2 = "upsertMany".concat(ucfPlural);
                _context3.next = 6;
                return Object(_util_queryAPI__WEBPACK_IMPORTED_MODULE_15__["get"])(endpoint);

              case 6:
                _context3.t3 = _context3.sent;
                _context3.t4 = _context3.t1[_context3.t2].call(_context3.t1, _context3.t3);
                return _context3.abrupt("return", (0, _context3.t0)(_context3.t4));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function () {
        return _ref6.apply(this, arguments);
      };
    }();
  }), _Object$keys$reduce));
};
var buildReducer = function buildReducer() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      singular = _ref7.singular,
      _ref7$idKey = _ref7.idKey,
      idKey = _ref7$idKey === void 0 ? 'id' : _ref7$idKey,
      _ref7$plural = _ref7.plural,
      plural = _ref7$plural === void 0 ? "".concat(singular, "s") : _ref7$plural,
      _ref7$ucSingular = _ref7.ucSingular,
      ucSingular = _ref7$ucSingular === void 0 ? singular.toUpperCase() : _ref7$ucSingular,
      _ref7$ucPlural = _ref7.ucPlural,
      ucPlural = _ref7$ucPlural === void 0 ? plural.toUpperCase() : _ref7$ucPlural;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref8 = arguments.length > 1 ? arguments[1] : undefined,
        type = _ref8.type,
        payload = _ref8.payload;

    var obj;

    switch (type) {
      case "CLEAR_".concat(ucPlural):
        return {};

      case "REMOVE_".concat(ucSingular):
        if (!state[payload]) return state;
        return _objectSpread({}, state, _defineProperty({}, payload, undefined));

      case "REMOVE_".concat(ucPlural):
        obj = _objectSpread({}, state);
        payload.forEach(function (id) {
          obj = _objectSpread({}, obj, _defineProperty({}, id, undefined));
        });
        return obj;

      case "UPSERT_".concat(ucSingular):
        if (!payload[idKey]) {
          // eslint-disable-next-line no-console
          console.warn('Missing %s in payload for action type %s', idKey, type); // , (new Error('Missing id')).stack);

          return state;
        }

        return _objectSpread({}, state, _defineProperty({}, payload[idKey], _objectSpread({}, state[payload[idKey]] || {}, {}, payload)));

      case "UPSERT_".concat(ucPlural):
        obj = _objectSpread({}, state);
        payload.forEach(function (item) {
          if (!item[idKey]) {
            // eslint-disable-next-line no-console
            console.warn('Missing %s in item for action type %s', idKey, type);
            return;
          }

          obj = _objectSpread({}, obj, _defineProperty({}, item[idKey], _objectSpread({}, state[item[idKey]] || {}, {}, item)));
        });
        return obj;

      default:
        return state;
    }
  };
};
var buildConnector = function buildConnector(_ref9) {
  var singular = _ref9.singular,
      _ref9$plural = _ref9.plural,
      plural = _ref9$plural === void 0 ? "".concat(singular, "s") : _ref9$plural,
      _ref9$idKey = _ref9.idKey,
      idKey = _ref9$idKey === void 0 ? 'id' : _ref9$idKey,
      _ref9$actions = _ref9.actions,
      actions = _ref9$actions === void 0 ? null : _ref9$actions;

  var stateToProps = function stateToProps(_ref10, _ref11) {
    var docsInfo = _ref10[plural];
    var id = _ref11[idKey];
    return id ? docsInfo[id] : docsInfo;
  };

  if (!actions) return Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(stateToProps);
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(stateToProps, function (dispatch) {
    return Object.keys(actions).reduce(function (obj, key) {
      return _objectSpread({}, obj, _defineProperty({}, key, function () {
        return dispatch(actions[key].apply(actions, arguments));
      }));
    }, {});
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      singular = _ref12.singular,
      endpoint = _ref12.endpoint,
      _ref12$idKey = _ref12.idKey,
      idKey = _ref12$idKey === void 0 ? 'id' : _ref12$idKey,
      _ref12$plural = _ref12.plural,
      plural = _ref12$plural === void 0 ? "".concat(singular, "s") : _ref12$plural,
      _ref12$ucSingular = _ref12.ucSingular,
      ucSingular = _ref12$ucSingular === void 0 ? singular.toUpperCase() : _ref12$ucSingular,
      _ref12$ucPlural = _ref12.ucPlural,
      ucPlural = _ref12$ucPlural === void 0 ? plural.toUpperCase() : _ref12$ucPlural,
      _ref12$ucfSingular = _ref12.ucfSingular,
      ucfSingular = _ref12$ucfSingular === void 0 ? ucf(singular) : _ref12$ucfSingular,
      _ref12$ucfPlural = _ref12.ucfPlural,
      ucfPlural = _ref12$ucfPlural === void 0 ? ucf(plural) : _ref12$ucfPlural;

  return [buildReducer({
    singular: singular,
    idKey: idKey,
    plural: plural,
    ucSingular: ucSingular,
    ucPlural: ucPlural,
    ucfSingular: ucfSingular,
    ucfPlural: ucfPlural
  }), buildActions({
    singular: singular,
    idKey: idKey,
    plural: plural,
    ucSingular: ucSingular,
    ucPlural: ucPlural,
    ucfSingular: ucfSingular,
    ucfPlural: ucfPlural
  }), endpoint && buildAPIActions({
    endpoint: endpoint,
    singular: singular,
    idKey: idKey,
    plural: plural,
    ucSingular: ucSingular,
    ucPlural: ucPlural,
    ucfSingular: ucfSingular,
    ucfPlural: ucfPlural
  })].filter(Boolean);
});

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.starts-with");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(137);


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return queryAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delete", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _simpleFetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40);
/* harmony import */ var _readToken__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readUserToken", function() { return _readToken__WEBPACK_IMPORTED_MODULE_15__["default"]; });
















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-console */




var queryAPI = function queryAPI(url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$parser = _ref.parser,
      parser = _ref$parser === void 0 ? 'json' : _ref$parser,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method,
      options = _objectWithoutProperties(_ref, ["parser", "method"]);

  var auth = Object(_readToken__WEBPACK_IMPORTED_MODULE_15__["default"])();

  var opts = _objectSpread({}, options, {
    method: method.toUpperCase(),
    headers: _objectSpread({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }, auth ? {
      Authorization: "Bearer ".concat(auth)
    } : {}, {}, options.headers || {}),
    body: typeof options.body === 'string' ? options.body : JSON.stringify(options.body)
  });

  return Object(_simpleFetch__WEBPACK_IMPORTED_MODULE_14__["default"])(url, opts).then( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
      var json, err, message, _err;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(res.status >= 400)) {
                _context.next = 22;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return res[parser]();

            case 4:
              json = _context.sent;
              _context.next = 12;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              err = new Error(res.statusText);
              err.fields = {};
              throw err;

            case 12:
              if (!json.error) {
                _context.next = 21;
                break;
              }

              message = json.error.message ? json.error.message : json.error;
              if (typeof message !== 'string' && json.error.name) message = json.error.name;
              if (typeof message !== 'string') message = 'Serious Error';
              console.warn("".concat(options.method || 'GET', " ").concat(url, ": ").concat(message));
              _err = new Error(message);
              _err.fields = json.error.fields;
              _err.object = json.error;
              throw _err;

            case 21:
              return _context.abrupt("return", json);

            case 22:
              if (!(res.status === 204)) {
                _context.next = 24;
                break;
              }

              return _context.abrupt("return");

            case 24:
              return _context.abrupt("return", res[parser]());

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
};


var api = ['get', 'head', 'post', 'put', 'patch', 'delete', 'connect', 'options', 'trace'].reduce(function (result, method) {
  queryAPI[method] = function (url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return queryAPI(url, _objectSpread({}, options, {
      method: method
    }));
  };

  return _objectSpread({}, result, _defineProperty({}, method, queryAPI[method]));
}, {});
var get = api.get,
    head = api.head,
    post = api.post,
    put = api.put,
    patch = api.patch,
    del = api.delete,
    connect = api.connect,
    options = api.options,
    trace = api.trace;


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeName", function() { return storeName; });
var storeName = 'eazin-1';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  try {
    return JSON.parse(localStorage[storeName] || '{}').userToken;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('reading ', e);
  }
});

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.reduce");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (fetch);

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

/***/ })

/******/ });
});