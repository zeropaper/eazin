(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("plugins/user", [], factory);
	else if(typeof exports === 'object')
		exports["plugins/user"] = factory();
	else
		root["plugins/user"] = factory();
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

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simpleFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
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
              _context.next = 21;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(res[parser]());

          case 4:
            json = _context.sent;
            _context.next = 12;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            err = new Error("API query error: ".concat(res.statusText));
            err.fields = {};
            throw err;

          case 12:
            if (!json.error) {
              _context.next = 20;
              break;
            }

            message = json.error.message ? json.error.message : json.error;
            if (typeof message !== 'string' && json.error.name) message = json.error.name;
            if (typeof message !== 'string') message = 'Serious Error';
            console.warn("".concat(options.method || 'GET', " ").concat(url, ": ").concat(message));
            _err = new Error(message);
            _err.fields = json.fields || {};
            throw _err;

          case 20:
            return _context.abrupt("return", json);

          case 21:
            return _context.abrupt("return", res[parser]());

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 7]]);
  });
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (fetch);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
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
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _ButtonsGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// eslint-disable-next-line import/no-cycle




var Fields = function Fields(_ref) {
  var fields = _ref.fields,
      _ref$field = _ref.field,
      prefix = _ref$field === void 0 ? '' : _ref$field,
      state = _ref.state,
      api = _ref.api;
  return Object.keys(fields).map(function (field) {
    var props = fields[field];
    var type = props.type,
        label = props.label,
        _props$fields = props.fields,
        subFields = _props$fields === void 0 ? {} : _props$fields,
        buttons = props.buttons,
        className = props.className;
    var subField = prefix ? "".concat(prefix, ".").concat(field) : field;

    if (type === 'fieldset') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FieldSet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        key: field,
        label: label,
        fields: subFields,
        field: subField,
        state: state,
        api: api,
        className: className
      });
    }

    if (type === 'fields') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fields, {
        key: field,
        label: label,
        fields: subFields,
        field: subField,
        state: state,
        api: api,
        className: className
      });
    }

    if (buttons) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonsGroup__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        key: field,
        buttons: typeof buttons === 'function' ? buttons(state, api, field, fields) : buttons,
        className: className
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextField__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _objectSpread({}, props, {
      key: field,
      field: subField
    }));
  }).filter(Boolean);
};

Fields.defaultProps = {
  field: undefined,
  className: null
};
/* harmony default export */ __webpack_exports__["a"] = (Fields);

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("informed");

/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(informed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_util_queryAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var FormBase =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormBase, _React$Component);

  function FormBase() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormBase)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      errors: null,
      error: null
    };

    _this.handleSubmit = function _callee(fields) {
      var _this$props, onSubmit, onSuccess, onFailure, method, url, processFields, userToken, processed, headers, result;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, onSubmit = _this$props.onSubmit, onSuccess = _this$props.onSuccess, onFailure = _this$props.onFailure, method = _this$props.method, url = _this$props.url, processFields = _this$props.processFields, userToken = _this$props.userToken;
              _context.prev = 1;
              processed = typeof processFields === 'function' ? processFields(fields) : fields;

              if (!onSubmit) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return regeneratorRuntime.awrap(onSubmit(processed));

            case 6:
              return _context.abrupt("return");

            case 7:
              if (!(method && url)) {
                _context.next = 14;
                break;
              }

              headers = {
                'Content-Type': 'application/json'
              };
              if (userToken) headers.Authorization = "Bearer ".concat(userToken);
              _context.next = 12;
              return regeneratorRuntime.awrap(Object(_core_util_queryAPI__WEBPACK_IMPORTED_MODULE_2__["default"])(url, {
                method: method.toUpperCase(),
                body: JSON.stringify(processed),
                headers: headers
              }));

            case 12:
              result = _context.sent;
              if (typeof onSuccess === 'function') onSuccess(result);

            case 14:
              _context.next = 21;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](1);

              _this.setState({
                errors: _context.t0.fields || {},
                error: _context.t0.message
              });

              if (typeof onFailure === 'function') onFailure(_context.t0);
              throw _context.t0;

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 16]]);
    };

    _this.renderFields = function (_ref) {
      var formState = _ref.formState,
          formApi = _ref.formApi;
      var _this$props2 = _this.props,
          fields = _this$props2.fields,
          fieldClassName = _this$props2.fieldClassName; // eslint-disable-next-line no-unused-vars

      var _this$state = _this.state,
          errors = _this$state.errors,
          error = _this$state.error; // // eslint-disable-next-line no-console
      // console.info('errors, error', errors, error);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Fields__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        fields: fields,
        fieldClassName: fieldClassName,
        state: formState,
        api: formApi
      });
    };

    return _this;
  }

  _createClass(FormBase, [{
    key: "render",
    value: function render() {
      var render = this.props.render;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(informed__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: this.handleSubmit,
        noValidate: true,
        render: render || this.renderFields
      });
    }
  }]);

  return FormBase;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

FormBase.defaultProps = {
  method: null,
  url: null,
  processFields: null,
  onSubmit: null,
  onSuccess: null,
  onFailure: null,
  render: null,
  fieldClassName: null,
  userToken: null
};
/* harmony default export */ __webpack_exports__["a"] = (FormBase);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);



 // eslint-disable-next-line import/no-cycle



var styles = function styles(theme) {
  return {
    root: {
      border: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.grey[500],
      margin: "".concat(theme.spacing(1), "px 0"),
      padding: theme.spacing(1)
    },
    legend: {
      padding: theme.spacing(1)
    }
  };
};

var FieldSet = function FieldSet(_ref) {
  var label = _ref.label,
      fields = _ref.fields,
      field = _ref.field,
      classes = _ref.classes,
      className = _ref.className,
      state = _ref.state,
      api = _ref.api;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.legend,
    component: "legend"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Fields__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    state: state,
    api: api,
    fields: fields,
    field: field
  })));
};

FieldSet.defaultProps = {
  field: null,
  className: null
};
/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(FieldSet));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(informed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-props-no-spreading */




var InformedTextField = function InformedTextField(_ref) {
  var fieldState = _ref.fieldState,
      fieldApi = _ref.fieldApi,
      props = _objectWithoutProperties(_ref, ["fieldState", "fieldApi"]);

  var value = fieldState.value,
      touched = fieldState.touched;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      initialValue = props.initialValue,
      droppedDefaultValue = props.defaultValue,
      forwardedRef = props.forwardedRef,
      helperText = props.helperText,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "initialValue", "defaultValue", "forwardedRef", "helperText"]);

  var defaultValue = !touched && initialValue ? initialValue : '';
  var fieldValue = value || value === 0 ? value : defaultValue; // eslint-disable-next-line react/destructuring-assignment

  var errorText = props.error || fieldState.error || fieldState.asyncError;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], _objectSpread({}, rest, {
    name: rest.field,
    inputRef: forwardedRef,
    value: fieldValue,
    inputProps: {
      onChange: function onChange(e) {
        setValue(e.target.value);
        if (_onChange) _onChange(e);
      },
      onBlur: function onBlur(e) {
        setTouched(true);
        if (_onBlur) _onBlur(e);
      }
    },
    helperText: errorText || helperText,
    error: !!errorText
  }));
};

InformedTextField.defaultProps = {
  forwardedRef: null,
  onChange: null,
  onBlur: null,
  error: null,
  helperText: null,
  initialValue: null,
  defaultValue: null
};
/* harmony default export */ __webpack_exports__["a"] = (Object(informed__WEBPACK_IMPORTED_MODULE_1__["asField"])(InformedTextField));

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ButtonsGroup = function ButtonsGroup() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    style: null,
    className: null,
    buttons: [],
    classes: {}
  },
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? null : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === void 0 ? [] : _ref$buttons,
      classes = _ref.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, classes.root)
  }, buttons.map(function (info) {
    var children = info.children,
        text = info.text,
        key = info.key,
        rest = _objectWithoutProperties(info, ["children", "text", "key"]);

    var props = _objectSpread({
      key: key || text,
      variant: 'contained',
      type: 'button',
      color: 'primary'
    }, rest);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, _objectSpread({}, props), children || text);
  }));
};

ButtonsGroup.defaultProps = {
  style: null,
  className: null,
  buttons: []
};
/* harmony default export */ __webpack_exports__["a"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '& > button': {
        marginLeft: theme.spacing(2)
      }
    }
  };
})(ButtonsGroup));

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("validator/es/lib/isEmail");

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var user_actions_namespaceObject = {};
__webpack_require__.r(user_actions_namespaceObject);
__webpack_require__.d(user_actions_namespaceObject, "setUser", function() { return user_actions_setUser; });
__webpack_require__.d(user_actions_namespaceObject, "clearUser", function() { return clearUser; });

// EXTERNAL MODULE: ./src/core/util/queryAPI.js
var queryAPI = __webpack_require__(7);

// CONCATENATED MODULE: ./src/plugins/user/user.actions.js
var user_actions_setUser = function setUser(payload) {
  return {
    type: 'SET_USER',
    payload: payload
  };
};
var clearUser = function clearUser() {
  return {
    type: 'CLEAR_USER'
  };
};
// CONCATENATED MODULE: ./src/plugins/user/user.reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var user_reducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    user: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_USER':
      return {
        user: _objectSpread({}, state.user || {}, {}, action.payload || {})
      };

    case 'CLEAR_USER':
      return {
        user: null
      };

    default:
      return state;
  }
});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "validator/es/lib/isEmail"
var isEmail_ = __webpack_require__(39);
var isEmail_default = /*#__PURE__*/__webpack_require__.n(isEmail_);

// EXTERNAL MODULE: ./src/components/Link.jsx
var Link = __webpack_require__(25);

// EXTERNAL MODULE: ./src/components/Form/FormBase.jsx
var FormBase = __webpack_require__(33);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: ./src/plugins/settings/settings.actions.js
var settings_actions = __webpack_require__(30);

// CONCATENATED MODULE: ./src/plugins/user/UserRegister.connect.js



var mapStateToProps = function mapStateToProps() {
  return {};
};
var UserRegister_connect_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setUser: function setUser(user) {
      dispatch(user_actions_setUser(user));
      dispatch(Object(settings_actions["a" /* setSetting */])('userToken', user.token));
    }
  };
};
/* harmony default export */ var UserRegister_connect = (Object(external_react_redux_["connect"])(mapStateToProps, UserRegister_connect_mapDispatchToProps));
// CONCATENATED MODULE: ./src/plugins/user/UserRegister.jsx
function UserRegister_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserRegister_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserRegister_ownKeys(source, true).forEach(function (key) { UserRegister_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserRegister_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserRegister_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var required = {
  required: true,
  validateOnChange: true,
  validateOnBlur: true
};
var schema = {
  email: UserRegister_objectSpread({
    label: 'Email',
    type: 'email'
  }, required, {
    validate: function validate() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (!isEmail_default()(val)) return 'Not a valid email address';
    }
  }),
  password: UserRegister_objectSpread({
    label: 'Password',
    type: 'password'
  }, required, {
    validate: function validate() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (val.length < 13) return 'Must be at least 13 charachters long';
      if (!val.match(/[a-z]+/)) return 'Must contain lowercase characters';
      if (!val.match(/[A-Z]+/)) return 'Must contain uppercase characters';
      if (!val.match(/[0-9]+/)) return 'Must contain numbers';
      if (!val.match(/[^0-9a-zA-Z]+/)) return 'Must contain special charachters';
    }
  }),
  passwordConfirm: UserRegister_objectSpread({
    label: 'Password Confirmation',
    type: 'password'
  }, required, {
    validate: function validate() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var vals = arguments.length > 1 ? arguments[1] : undefined;
      if (val !== vals.password) return 'Passwords don\'t match';
    }
  })
};

var UserRegister_UserRegister = function UserRegister(_ref) {
  var setUser = _ref.setUser;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(FormBase["a" /* default */] // method="post"
  // url="/api/user/register"
  // processFields={({
  //   fieldC,
  //   fieldA,
  // }) => ({
  //   password: fieldC,
  //   email: fieldA,
  // })}
  // onSuccess={setUser}
  // onFailure={}
  , {
    onSubmit: function onSubmit(fields) {
      Object(queryAPI["default"])('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: fields.passwordConfirm,
          email: fields.email
        })
      }) // eslint-disable-next-line no-console
      .then(setUser).catch(function (err) {
        throw err;
      });
    },
    fields: schema
  }), external_react_default.a.createElement(Link["default"], {
    to: "/reset"
  }, "Password reset"), external_react_default.a.createElement(Link["default"], {
    to: "/login"
  }, "Login"));
};

/* harmony default export */ var user_UserRegister = (UserRegister_connect(UserRegister_UserRegister));
// CONCATENATED MODULE: ./src/plugins/user/UserLogin.jsx
function UserLogin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserLogin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserLogin_ownKeys(source, true).forEach(function (key) { UserLogin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserLogin_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserLogin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import queryAPI from '../../core/util/queryAPI';





var notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var UserLogin_required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
var UserLogin_schema = {
  email: UserLogin_objectSpread({
    label: 'Email',
    type: 'email'
  }, UserLogin_required, {
    validate: function validate(val) {
      if (!isEmail_default()(val)) return 'Not a valid email address';
    }
  }),
  password: UserLogin_objectSpread({
    label: 'Password',
    type: 'password'
  }, UserLogin_required)
};

var UserLogin_UserLogin = function UserLogin(_ref) {
  var dispatch = _ref.dispatch;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(FormBase["a" /* default */], {
    method: "post",
    url: "/api/user/login",
    onSuccess: function onSuccess(data) {
      dispatch(user_actions_setUser(data));
      dispatch(Object(settings_actions["a" /* setSetting */])('userToken', data.token));
    } // onFailure={(...args) => console.info('failed', ...args)}
    ,
    fields: UserLogin_schema
  }), external_react_default.a.createElement(Link["default"], {
    to: "/reset"
  }, "Password reset"), external_react_default.a.createElement(Link["default"], {
    to: "/register"
  }, "Register"));
};

/* harmony default export */ var user_UserLogin = (Object(external_react_redux_["connect"])(function () {
  return {};
})(UserLogin_UserLogin));
// CONCATENATED MODULE: ./src/plugins/user/UserReset.jsx
function UserReset_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserReset_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserReset_ownKeys(source, true).forEach(function (key) { UserReset_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserReset_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserReset_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var UserReset_notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var UserReset_required = {
  required: true,
  validate: UserReset_notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
var UserReset_schema = {
  email: UserReset_objectSpread({
    label: 'Email'
  }, UserReset_required, {
    validate: function validate(val) {
      if (!isEmail_default()(val)) return 'Not a valid email address';
    }
  })
};
/* harmony default export */ var UserReset = (function () {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(FormBase["a" /* default */], {
    onSubmit: function onSubmit(fields) {
      // eslint-disable-next-line no-console
      console.info('fields', fields);
    },
    fields: UserReset_schema
  }), external_react_default.a.createElement(Link["default"], {
    to: "/login"
  }, "Login"), external_react_default.a.createElement(Link["default"], {
    to: "/register"
  }, "Register"));
});
// CONCATENATED MODULE: ./src/plugins/user/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return user_bootstrap; });






var user_bootstrap = function bootstrap(_ref) {
  var _ref$settings = _ref.settings;
  _ref$settings = _ref$settings === void 0 ? {} : _ref$settings;
  var userToken = _ref$settings.userToken;
  if (!userToken) return;
  Object(queryAPI["default"])('/api/user/me', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(userToken)
    }
  }).then(function (res) {
    if (!res.username) return;
    user_actions_setUser(res);
  }).catch(function (err) {
    throw err;
  });
};
var routes = [{
  exact: true,
  path: ['/', '/login'],
  Login: user_UserLogin
}, {
  exact: true,
  path: '/register',
  Register: user_UserRegister
}, {
  exact: true,
  path: '/reset',
  Reset: UserReset
}];
var store = {
  user: {}
};

var user_wsBootstrap = function wsBootstrap(socket, dispatch, getState) {
  // eslint-disable-next-line no-console
  console.info('user wsBootstrap', socket, dispatch, getState);
  socket.on('user.update', function (user) {
    return dispatch(user_actions_setUser(user));
  });
};

/* harmony default export */ var plugins_user = __webpack_exports__["default"] = ({
  routes: routes,
  bootstrap: user_bootstrap,
  store: store,
  reducers: {
    user: user_reducer
  },
  actions: user_actions_namespaceObject,
  wsBootstrap: user_wsBootstrap
});

/***/ }),
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

module.exports = __webpack_require__(52);


/***/ })
/******/ ]);
});
//# sourceMappingURL=user.js.map