(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Form", [], factory);
	else if(typeof exports === 'object')
		exports["Form"] = factory();
	else
		root["Form"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (fetch);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(informed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_util_queryAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
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

              headers = {};
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _ButtonsGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
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

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("informed");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);



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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(informed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
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

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),

/***/ 6:
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
/* harmony import */ var _simpleFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _plugins_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-console */



var readUserToken = function readUserToken() {
  return Object(_plugins_settings_settings_reducer__WEBPACK_IMPORTED_MODULE_1__[/* restore */ "b"])().userToken;
};

var queryAPI = function queryAPI(url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    method: 'GET'
  },
      _ref$parser = _ref.parser,
      parser = _ref$parser === void 0 ? 'json' : _ref$parser,
      options = _objectWithoutProperties(_ref, ["parser"]);

  var auth = readUserToken();
  return Object(_simpleFetch__WEBPACK_IMPORTED_MODULE_0__["default"])(url, _objectSpread({}, options, {
    headers: _objectSpread({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }, auth ? {
      Authorization: "Bearer ".concat(auth)
    } : {}, {}, options.headers || {}),
    body: typeof options.body === 'string' ? options.body : JSON.stringify(options.body)
  })).then(function _callee(res) {
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
            err = new Error("response parsing error: ".concat(res.statusText));
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
            if (!(res.status === 204)) {
              _context.next = 25;
              break;
            }

            return _context.abrupt("return");

          case 25:
            return _context.abrupt("return", res[parser]());

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 7]]);
  });
};


var api = ['get', 'head', 'post', 'put', 'patch', 'delete', 'connect', 'options', 'trace'].reduce(function (acc, val) {
  acc[val] = function (url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return queryAPI(url, _objectSpread({}, options, {
      method: val.toUpperCase()
    }));
  };

  return acc;
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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _ButtonsGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsGroup", function() { return _ButtonsGroup__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fields", function() { return _Fields__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _FieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldSet", function() { return _FieldSet__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _TextField__WEBPACK_IMPORTED_MODULE_4__["a"]; });






/* harmony default export */ __webpack_exports__["default"] = (_FormBase__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return restore; });
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
/* harmony default export */ __webpack_exports__["a"] = (function () {
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

/***/ })

/******/ });
});
//# sourceMappingURL=Form.js.map