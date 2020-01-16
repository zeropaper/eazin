(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-core/ui/index", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-core/ui/index"] = factory();
	else
		root["eazin-core/ui/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
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
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.description");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol.iterator");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-prototype-of");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.set-prototype-of");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("informed");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.from");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/withStyles");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("lodash.isequal");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(65);


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.fixed");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.includes");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.values");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.includes");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("typeface-roboto");

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var plugins_propTypes_namespaceObject = {};
__webpack_require__.r(plugins_propTypes_namespaceObject);
__webpack_require__.d(plugins_propTypes_namespaceObject, "View", function() { return View; });
__webpack_require__.d(plugins_propTypes_namespaceObject, "HeaderTabs", function() { return HeaderTabs; });
__webpack_require__.d(plugins_propTypes_namespaceObject, "Drawer", function() { return plugins_propTypes_Drawer; });
__webpack_require__.d(plugins_propTypes_namespaceObject, "LandingView", function() { return LandingView; });
var queryAPI_namespaceObject = {};
__webpack_require__.r(queryAPI_namespaceObject);
__webpack_require__.d(queryAPI_namespaceObject, "default", function() { return queryAPI_queryAPI; });
__webpack_require__.d(queryAPI_namespaceObject, "get", function() { return get; });
__webpack_require__.d(queryAPI_namespaceObject, "head", function() { return head; });
__webpack_require__.d(queryAPI_namespaceObject, "post", function() { return post; });
__webpack_require__.d(queryAPI_namespaceObject, "put", function() { return put; });
__webpack_require__.d(queryAPI_namespaceObject, "patch", function() { return patch; });
__webpack_require__.d(queryAPI_namespaceObject, "delete", function() { return del; });
__webpack_require__.d(queryAPI_namespaceObject, "connect", function() { return connect; });
__webpack_require__.d(queryAPI_namespaceObject, "options", function() { return queryAPI_options; });
__webpack_require__.d(queryAPI_namespaceObject, "trace", function() { return trace; });

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

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(3);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./src/packages/core/ui/core/plugins.propTypes.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var View = {
  history: external_prop_types_default.a.shape({
    push: external_prop_types_default.a.func.isRequired
  }),
  match: external_prop_types_default.a.shape({
    params: external_prop_types_default.a.any
  }),
  location: external_prop_types_default.a.shape({
    pathname: external_prop_types_default.a.string.isRequired,
    search: external_prop_types_default.a.string
  }).isRequired,
  api: external_prop_types_default.a.shape({
    get: external_prop_types_default.a.func.isRequired,
    head: external_prop_types_default.a.func.isRequired,
    post: external_prop_types_default.a.func.isRequired,
    put: external_prop_types_default.a.func.isRequired,
    patch: external_prop_types_default.a.func.isRequired,
    delete: external_prop_types_default.a.func.isRequired,
    connect: external_prop_types_default.a.func.isRequired,
    options: external_prop_types_default.a.func.isRequired,
    trace: external_prop_types_default.a.func.isRequired
  }).isRequired
};
var HeaderTabs = _objectSpread({}, View);
var plugins_propTypes_Drawer = _objectSpread({}, View);
var LandingView = _objectSpread({}, View);
// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__(25);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(41);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(30);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles/withStyles"
var withStyles_ = __webpack_require__(42);
var withStyles_default = /*#__PURE__*/__webpack_require__.n(withStyles_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/packages/core/ui/components/Form/ButtonsGroup.jsx








function ButtonsGroup_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ButtonsGroup_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ButtonsGroup_ownKeys(Object(source), true).forEach(function (key) { ButtonsGroup_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ButtonsGroup_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ButtonsGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // marginTop: theme.spacing(1),
      '& > button': {
        marginLeft: theme.spacing(2)
      }
    }
  };
};

var ButtonsGroup_ButtonsGroup = function ButtonsGroup() {
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

  return external_react_default.a.createElement("div", {
    style: style,
    className: external_classnames_default()(classes.root, className)
  }, (buttons || []).map(function (info) {
    var children = info.children,
        text = info.text,
        key = info.key,
        loading = info.loading,
        defaultStartIcon = info.startIcon,
        size = info.size,
        disabled = info.disabled,
        rest = _objectWithoutProperties(info, ["children", "text", "key", "loading", "startIcon", "size", "disabled"]);

    var startIcon = loading && external_react_default.a.createElement(core_["CircularProgress"], {
      color: "inherit" // eslint-disable-next-line no-nested-ternary
      ,
      size: size === 'large' ? 22 : size === 'small' ? 18 : 20
    }) || defaultStartIcon;

    var props = ButtonsGroup_objectSpread({
      key: key || text,
      type: 'button',
      variant: rest.type === 'submit' ? 'contained' : 'text',
      color: rest.type === 'submit' ? 'primary' : 'default'
    }, rest, {
      size: size,
      disabled: disabled || loading,
      startIcon: startIcon
    });

    return external_react_default.a.createElement(Button_default.a, ButtonsGroup_objectSpread({}, props), children || text);
  }));
};

ButtonsGroup_ButtonsGroup.defaultProps = {
  style: null,
  className: null,
  buttons: []
};
/* harmony default export */ var Form_ButtonsGroup = (withStyles_default()(styles)(ButtonsGroup_ButtonsGroup));
// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.string.trim"
var es_string_trim_ = __webpack_require__(19);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/packages/core/ui/components/Form/FieldSet.jsx



 // eslint-disable-next-line import/no-cycle



var FieldSet_styles = function styles(theme) {
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

var FieldSet_FieldSet = function FieldSet(_ref) {
  var label = _ref.label,
      fields = _ref.fields,
      field = _ref.field,
      classes = _ref.classes,
      className = _ref.className,
      state = _ref.state,
      api = _ref.api;
  return external_react_default.a.createElement("fieldset", {
    className: external_classnames_default()(classes.root, className)
  }, external_react_default.a.createElement(core_["Typography"], {
    className: classes.legend,
    component: "legend"
  }, label), external_react_default.a.createElement("div", null, external_react_default.a.createElement(Form_Fields, {
    state: state,
    api: api,
    fields: fields,
    field: field
  })));
};

FieldSet_FieldSet.defaultProps = {
  field: null,
  className: null
};
/* harmony default export */ var Form_FieldSet = (Object(styles_["withStyles"])(FieldSet_styles)(FieldSet_FieldSet));
// EXTERNAL MODULE: external "informed"
var external_informed_ = __webpack_require__(31);

// CONCATENATED MODULE: ./src/packages/core/ui/components/Form/TextField.jsx







function TextField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TextField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TextField_ownKeys(Object(source), true).forEach(function (key) { TextField_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TextField_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TextField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TextField_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TextField_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TextField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-props-no-spreading */




var TextField_InformedTextField = function InformedTextField(_ref) {
  var fieldState = _ref.fieldState,
      fieldApi = _ref.fieldApi,
      props = TextField_objectWithoutProperties(_ref, ["fieldState", "fieldApi"]);

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
      rest = TextField_objectWithoutProperties(props, ["onChange", "onBlur", "initialValue", "defaultValue", "forwardedRef", "helperText"]);

  var defaultValue = !touched && initialValue ? initialValue : '';
  var fieldValue = value || value === 0 ? value : defaultValue; // eslint-disable-next-line react/destructuring-assignment

  var errorText = props.error || fieldState.error || fieldState.asyncError;
  return external_react_default.a.createElement(core_["TextField"], TextField_objectSpread({}, rest, {
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

TextField_InformedTextField.defaultProps = {
  forwardedRef: null,
  onChange: null,
  onBlur: null,
  error: null,
  helperText: null,
  initialValue: null,
  defaultValue: null
};
/* harmony default export */ var TextField = (Object(external_informed_["asField"])(TextField_InformedTextField));
// CONCATENATED MODULE: ./src/packages/core/ui/components/Form/Checkbox.jsx







function Checkbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Checkbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Checkbox_ownKeys(Object(source), true).forEach(function (key) { Checkbox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Checkbox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Checkbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Checkbox_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Checkbox_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Checkbox_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-props-no-spreading */




var Checkbox_InformedCheckbox = function InformedCheckbox(_ref) {
  var fieldState = _ref.fieldState,
      fieldApi = _ref.fieldApi,
      props = Checkbox_objectWithoutProperties(_ref, ["fieldState", "fieldApi"]);

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
      label = props.label,
      className = props.className,
      required = props.required,
      disabled = props.disabled,
      validate = props.validate,
      fullWidth = props.fullWidth,
      rest = Checkbox_objectWithoutProperties(props, ["onChange", "onBlur", "initialValue", "defaultValue", "forwardedRef", "helperText", "label", "className", "required", "disabled", "validate", "fullWidth"]);

  var defaultValue = !touched && initialValue ? initialValue : '';
  var fieldValue = value || value === 0 ? value : defaultValue; // eslint-disable-next-line react/destructuring-assignment

  var errorText = props.error || fieldState.error || fieldState.asyncError;
  return external_react_default.a.createElement(core_["FormControl"], {
    disabled: disabled,
    required: required,
    fullWidth: fullWidth,
    error: !!errorText
  }, external_react_default.a.createElement(core_["FormLabel"], null, label), external_react_default.a.createElement(core_["FormControlLabel"], {
    required: required,
    disabled: disabled,
    control: external_react_default.a.createElement(core_["Checkbox"], Checkbox_objectSpread({}, rest, {
      name: rest.field,
      inputRef: forwardedRef,
      checked: !!fieldValue,
      inputProps: {
        onChange: function onChange(e) {
          setValue(e.target.checked);
          setTouched(!!fieldValue !== e.target.checked);
          if (_onChange) _onChange(e);
        },
        onBlur: function onBlur(e) {
          // setTouched(true);
          setTouched(!!fieldValue !== e.target.checked);
          if (_onBlur) _onBlur(e);
        }
      }
    })),
    label: helperText
  }), external_react_default.a.createElement(core_["FormHelperText"], null, errorText));
};

Checkbox_InformedCheckbox.defaultProps = {
  forwardedRef: null,
  onChange: null,
  onBlur: null,
  error: null,
  className: null,
  label: null,
  helperText: null,
  validate: null,
  initialValue: null,
  defaultValue: null,
  required: null,
  disabled: null,
  fullWidth: null
};
/* harmony default export */ var Checkbox = (Object(external_informed_["asField"])(Checkbox_InformedCheckbox));
// CONCATENATED MODULE: ./src/packages/core/ui/components/Form/Fields.jsx










function Fields_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Fields_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Fields_ownKeys(Object(source), true).forEach(function (key) { Fields_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Fields_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Fields_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// eslint-disable-next-line import/no-cycle



 // const Checkbox = () => null;

var Fields_Fields = function Fields(_ref) {
  var fields = _ref.fields,
      _ref$field = _ref.field,
      prefix = _ref$field === void 0 ? '' : _ref$field,
      state = _ref.state,
      api = _ref.api,
      fieldClassName = _ref.fieldClassName;
  return Object.keys(fields).map(function (field) {
    var props = fields[field];
    var type = props.type,
        label = props.label,
        _props$fields = props.fields,
        subFields = _props$fields === void 0 ? {} : _props$fields,
        buttons = props.buttons,
        className = props.className;
    var subField = prefix ? "".concat(prefix, ".").concat(field) : field;
    var currentFieldClassName = "".concat(fieldClassName || '', " ").concat(className || '').trim();

    if (type === 'fieldset') {
      return external_react_default.a.createElement(Form_FieldSet, {
        key: field,
        label: label,
        fields: subFields,
        field: subField,
        state: state,
        api: api,
        className: currentFieldClassName
      });
    }

    if (type === 'fields') {
      return external_react_default.a.createElement(Fields, {
        key: field,
        label: label,
        fields: subFields,
        field: subField,
        state: state,
        api: api,
        className: currentFieldClassName
      });
    }

    if (buttons) {
      var pristine = !Object.keys(state.touched).length;

      var bState = Fields_objectSpread({}, state, {
        pristine: pristine,
        dirty: !pristine
      }); // console.info('button state', bState);


      return external_react_default.a.createElement(Form_ButtonsGroup, {
        key: field,
        buttons: typeof buttons === 'function' ? buttons(bState, api, field, fields) : buttons,
        className: currentFieldClassName
      });
    }

    if (type === 'checkbox') {
      return external_react_default.a.createElement(Checkbox, Fields_objectSpread({}, props, {
        key: field,
        field: subField,
        className: currentFieldClassName
      }));
    }

    return external_react_default.a.createElement(TextField, Fields_objectSpread({}, props, {
      key: field,
      field: subField,
      className: currentFieldClassName
    }));
  }).filter(Boolean);
};

Fields_Fields.defaultProps = {
  field: undefined,
  className: null
};
/* harmony default export */ var Form_Fields = (Fields_Fields);
// EXTERNAL MODULE: external "core-js/modules/es.symbol.description"
var es_symbol_description_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/es.symbol.iterator"
var es_symbol_iterator_ = __webpack_require__(21);

// EXTERNAL MODULE: external "core-js/modules/es.array.iterator"
var es_array_iterator_ = __webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/es.object.get-prototype-of"
var es_object_get_prototype_of_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/es.object.set-prototype-of"
var es_object_set_prototype_of_ = __webpack_require__(29);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.promise"
var es_promise_ = __webpack_require__(23);

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator"
var es_string_iterator_ = __webpack_require__(22);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator"
var web_dom_collections_iterator_ = __webpack_require__(18);

// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__(26);

// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__(27);

// EXTERNAL MODULE: external "lodash.isequal"
var external_lodash_isequal_ = __webpack_require__(43);
var external_lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isequal_);

// EXTERNAL MODULE: external "core-js/modules/es.function.name"
var es_function_name_ = __webpack_require__(39);

// CONCATENATED MODULE: ./src/packages/core/ui/core/util/simpleFetch.js


/* harmony default export */ var simpleFetch = (fetch);
// CONCATENATED MODULE: ./src/packages/core/ui/core/util/queryAPI.js












function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function queryAPI_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function queryAPI_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { queryAPI_ownKeys(Object(source), true).forEach(function (key) { queryAPI_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { queryAPI_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function queryAPI_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function queryAPI_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = queryAPI_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function queryAPI_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-console */

var storeName = 'eazin-1';

var readUserToken = function readUserToken() {
  try {
    return JSON.parse(localStorage[storeName] || '{}').userToken;
  } catch (e) {
    console.warn('reading ', e);
  }
};

var queryAPI_queryAPI = function queryAPI(url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$parser = _ref.parser,
      parser = _ref$parser === void 0 ? 'json' : _ref$parser,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method,
      options = queryAPI_objectWithoutProperties(_ref, ["parser", "method"]);

  var auth = readUserToken();

  var opts = queryAPI_objectSpread({}, options, {
    method: method.toUpperCase(),
    headers: queryAPI_objectSpread({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }, auth ? {
      Authorization: "Bearer ".concat(auth)
    } : {}, {}, options.headers || {}),
    body: typeof options.body === 'string' ? options.body : JSON.stringify(options.body)
  });

  return simpleFetch(url, opts).then(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(res) {
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


var queryAPI_api = ['get', 'head', 'post', 'put', 'patch', 'delete', 'connect', 'options', 'trace'].reduce(function (result, method) {
  queryAPI_queryAPI[method] = function (url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return queryAPI_queryAPI(url, queryAPI_objectSpread({}, options, {
      method: method
    }));
  };

  return queryAPI_objectSpread({}, result, queryAPI_defineProperty({}, method, queryAPI_queryAPI[method]));
}, {});
var get = queryAPI_api.get,
    head = queryAPI_api.head,
    post = queryAPI_api.post,
    put = queryAPI_api.put,
    patch = queryAPI_api.patch,
    del = queryAPI_api.delete,
    connect = queryAPI_api.connect,
    queryAPI_options = queryAPI_api.options,
    trace = queryAPI_api.trace;

// CONCATENATED MODULE: ./src/packages/core/ui/components/Form/FormBase.jsx


















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function FormBase_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FormBase_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FormBase_ownKeys(Object(source), true).forEach(function (key) { FormBase_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FormBase_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FormBase_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function FormBase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function FormBase_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { FormBase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { FormBase_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var FormBase_styles = function styles(theme) {
  return {
    field: {
      width: '100%',
      marginBottom: theme.spacing(2),
      '&:last-child': {
        marginBottom: 0
      }
    }
  };
};

var recurseErrors = function recurseErrors(subFields) {
  var subErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Object.keys(subFields).forEach(function (fieldName) {
    if (subFields[fieldName].fields) {
      return recurseErrors(subFields[fieldName], subErrors[fieldName]);
    } // eslint-disable-next-line no-param-reassign


    subFields[fieldName].error = subErrors[fieldName] || null;
  });
  return subFields;
};

var FormBase_FormBase =
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
      error: null,
      loading: false,
      success: null
    };

    _this.getValues = function (subFields) {
      var values = {};
      var used = subFields || _this.fields;
      Object.keys(used).forEach(function (fieldName) {
        var initialValue = used[fieldName].initialValue;
        if (typeof initialValue === 'undefined') return;
        values[fieldName] = initialValue;
      });
      return values;
    };

    _this.setErrors = function () {};

    _this.registerFormAPI = function (api) {
      _this.api = api;
    };

    _this.handlePrepareRequest = function (fields) {
      return new Promise(function (res) {
        _this.setState({
          error: null,
          errors: null,
          loading: true,
          success: null
        }, function () {
          var processFields = _this.props.processFields;
          res(typeof processFields === 'function' ? processFields(fields) : fields);
        });
      });
    };

    _this.handleSuccess = function (result) {
      return _this.setState({
        error: null,
        errors: null,
        loading: false,
        success: true
      }, function () {
        var onSuccess = _this.props.onSuccess;
        if (typeof onSuccess === 'function') onSuccess(result);
      });
    };

    _this.handleFailure = function (err) {
      return _this.setState({
        errors: err.fields,
        error: err.message,
        loading: false,
        success: null
      }, function () {
        var onError = _this.props.onError;
        if (typeof onError === 'function') onError(err); // throw err;
      });
    };

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref = FormBase_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fields) {
        var _this$props, onSubmit, method, url, processed, result, _result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, onSubmit = _this$props.onSubmit, method = _this$props.method, url = _this$props.url;
                _context.prev = 1;
                _context.next = 4;
                return _this.handlePrepareRequest(fields);

              case 4:
                processed = _context.sent;

                if (!(typeof onSubmit === 'function')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 8;
                return onSubmit(processed);

              case 8:
                result = _context.sent;

                _this.handleSuccess(result);

                return _context.abrupt("return");

              case 11:
                if (!(method && url)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 14;
                return queryAPI_queryAPI(url, {
                  method: method,
                  body: processed
                });

              case 14:
                _result = _context.sent;

                _this.handleSuccess(_result);

                return _context.abrupt("return");

              case 17:
                throw new Error('Missing either "onSubmit" or "method" + "url"');

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](1);

                _this.handleFailure(_context.t0);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 20]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.renderContent = function (renderProps) {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, _this.renderFields(renderProps), _this.renderSuccess(renderProps), _this.renderError(renderProps), _this.renderButtons(renderProps), _this.renderDebug());
    };

    _this.renderFields = function (_ref2) {
      var formState = _ref2.formState,
          formApi = _ref2.formApi;
      var _this$props2 = _this.props,
          fieldClassName = _this$props2.fieldClassName,
          classes = _this$props2.classes;
      var loading = _this.state.loading;
      return external_react_default.a.createElement(Form_Fields, {
        fields: _this.fields,
        fieldClassName: fieldClassName || classes.field,
        state: formState,
        api: FormBase_objectSpread({}, formApi, {
          loading: loading
        })
      });
    };

    _this.renderSuccess = function () {
      var _this$props3 = _this.props,
          successMessage = _this$props3.successMessage,
          autoHideDelay = _this$props3.autoHideDelay;
      var _this$state = _this.state,
          loading = _this$state.loading,
          success = _this$state.success;
      return external_react_default.a.createElement(core_["Snackbar"], {
        open: !loading && !!success,
        autoHideDuration: autoHideDelay || 6000
      }, external_react_default.a.createElement(lab_["Alert"], {
        severity: "success",
        variant: "filled"
      }, success === true ? successMessage || 'Success' : success));
    };

    _this.renderError = function () {
      var _this$props4 = _this.props,
          errorMessage = _this$props4.errorMessage,
          autoHideDelay = _this$props4.autoHideDelay;
      var _this$state2 = _this.state,
          loading = _this$state2.loading,
          error = _this$state2.error,
          errors = _this$state2.errors;
      return external_react_default.a.createElement(core_["Snackbar"], {
        open: !loading && (!!error || !!errors),
        autoHideDuration: autoHideDelay || 6000
      }, external_react_default.a.createElement(lab_["Alert"], {
        severity: "error",
        variant: "filled"
      }, error === true ? errorMessage : error));
    };

    _this.renderButtons = function () {
      var _this$props5 = _this.props,
          buttons = _this$props5.buttons,
          fieldClassName = _this$props5.fieldClassName;

      var formState = _this.api.getState();

      var fieldValues = _this.getValues();

      var pristine = external_lodash_isequal_default()(fieldValues, formState.values);

      var state = FormBase_objectSpread({}, formState, {
        pristine: pristine,
        dirty: !pristine
      });

      return external_react_default.a.createElement(Form_ButtonsGroup, {
        buttons: typeof buttons === 'function' ? buttons(state, _this.api) : buttons,
        className: fieldClassName
      });
    };

    _this.renderDebug = function () {
      if (true) return null;
      var debug = _this.props.debug;
      if (!debug) return null;
      return external_react_default.a.createElement("details", {
        open: true
      }, external_react_default.a.createElement("summary", null, "Form State"), external_react_default.a.createElement("pre", null, JSON.stringify(_this.api ? _this.api.getState() : null, null, 2)));
    };

    return _this;
  }

  _createClass(FormBase, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          render = _this$props6.render,
          className = _this$props6.className;
      return external_react_default.a.createElement(external_informed_["Form"], {
        noValidate: true,
        className: className,
        onSubmit: this.handleSubmit,
        render: render || this.renderContent,
        getApi: this.registerFormAPI
      });
    }
  }, {
    key: "fields",
    get: function get() {
      var fields = this.props.fields;
      var errors = this.state.errors;
      if (!errors) return fields;
      return recurseErrors(fields, errors);
    }
  }]);

  return FormBase;
}(external_react_default.a.Component);

FormBase_FormBase.defaultProps = {
  className: null,
  method: null,
  url: null,
  processFields: null,
  onSubmit: null,
  onSuccess: null,
  onError: null,
  render: null,
  fieldClassName: null,
  buttons: null,
  errorMessage: null,
  successMessage: null,
  debug: null,
  autoHideDelay: null
};
/* harmony default export */ var Form_FormBase = (Object(styles_["withStyles"])(FormBase_styles)(FormBase_FormBase));
// CONCATENATED MODULE: ./src/packages/core/ui/components/Form/index.js





/* harmony default export */ var Form = (Form_FormBase);
// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string"
var es_regexp_to_string_ = __webpack_require__(32);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// EXTERNAL MODULE: external "core-js/modules/es.array.join"
var es_array_join_ = __webpack_require__(54);

// EXTERNAL MODULE: external "core-js/modules/es.string.fixed"
var es_string_fixed_ = __webpack_require__(55);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(11);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(12);

// EXTERNAL MODULE: external "core-js/modules/es.array.from"
var es_array_from_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/es.array.includes"
var es_array_includes_ = __webpack_require__(56);

// EXTERNAL MODULE: external "core-js/modules/es.object.values"
var es_object_values_ = __webpack_require__(57);

// EXTERNAL MODULE: external "core-js/modules/es.string.includes"
var es_string_includes_ = __webpack_require__(58);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__(44);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(37);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(45);

// CONCATENATED MODULE: ./src/packages/core/ui/core/store.js







function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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

/* harmony default export */ var core_store = (function (plugins) {
  var preloaded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var pluginReducers = {};
  var pluginStores = {};
  Object.keys(plugins).forEach(function (name) {
    pluginReducers = store_objectSpread({}, pluginReducers, {}, (plugins[name] || {}).reducers || {});
    pluginStores = store_objectSpread({}, pluginStores, {}, (plugins[name] || {}).store || {});
  });
  var appReducer = Object.keys(pluginReducers).length ? Object(external_redux_["combineReducers"])(pluginReducers) : function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state;
  };
  pluginStores = store_objectSpread({}, pluginStores, {}, preloaded || {});

  var rootReducer = function rootReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (action.type === 'CORE_RELOAD') return pluginStores;
    return appReducer(state, action);
  };

  return Object(external_redux_["createStore"])(rootReducer, pluginStores, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])()));
});
// EXTERNAL MODULE: external "typeface-roboto"
var external_typeface_roboto_ = __webpack_require__(59);

// CONCATENATED MODULE: ./src/packages/core/ui/core/util/logger.js

/* harmony default export */ var logger = (function (scope) {
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
// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__(38);

// CONCATENATED MODULE: ./src/packages/core/ui/core/theme.js


var primary = colors_["amber"],
    accent = colors_["deepOrange"];
var theme_makeTheme = function makeTheme(type) {
  return Object(styles_["createMuiTheme"])({
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
/* harmony default export */ var theme = (Object(styles_["createMuiTheme"])({
  palette: {
    primary: primary,
    accent: accent,
    type: 'dark'
  },
  typography: {
    useNextVariants: true
  }
}));
// CONCATENATED MODULE: ./src/packages/core/ui/components/LoadingFallback.jsx

var LoadingFallback_styles = {
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

var LoadingFallback_Fallback = function Fallback(_ref) {
  var empty = _ref.empty;
  return !empty && external_react_default.a.createElement("div", {
    style: LoadingFallback_styles.wrapper
  }, external_react_default.a.createElement("span", {
    style: LoadingFallback_styles.text
  }, "Loading..."));
};

/* harmony default export */ var LoadingFallback = (LoadingFallback_Fallback);
// CONCATENATED MODULE: ./src/packages/core/ui/components/ErrorBoundary.jsx











function ErrorBoundary_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ErrorBoundary_typeof = function _typeof(obj) { return typeof obj; }; } else { ErrorBoundary_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ErrorBoundary_typeof(obj); }

function ErrorBoundary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ErrorBoundary_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ErrorBoundary_createClass(Constructor, protoProps, staticProps) { if (protoProps) ErrorBoundary_defineProperties(Constructor.prototype, protoProps); if (staticProps) ErrorBoundary_defineProperties(Constructor, staticProps); return Constructor; }

function ErrorBoundary_possibleConstructorReturn(self, call) { if (call && (ErrorBoundary_typeof(call) === "object" || typeof call === "function")) { return call; } return ErrorBoundary_assertThisInitialized(self); }

function ErrorBoundary_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ErrorBoundary_getPrototypeOf(o) { ErrorBoundary_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorBoundary_getPrototypeOf(o); }

function ErrorBoundary_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ErrorBoundary_setPrototypeOf(subClass, superClass); }

function ErrorBoundary_setPrototypeOf(o, p) { ErrorBoundary_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorBoundary_setPrototypeOf(o, p); }



var ErrorBoundary_ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  ErrorBoundary_inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    ErrorBoundary_classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ErrorBoundary_possibleConstructorReturn(this, (_getPrototypeOf2 = ErrorBoundary_getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  ErrorBoundary_createClass(ErrorBoundary, [{
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
        return errorMessage || external_react_default.a.createElement("span", null, "Something went wrong.");
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
}(external_react_default.a.Component);

ErrorBoundary_ErrorBoundary.defaultProps = {
  errorMessage: null,
  children: null
};
/* harmony default export */ var components_ErrorBoundary = (ErrorBoundary_ErrorBoundary);
// CONCATENATED MODULE: ./src/packages/core/ui/components/PluginPoint.jsx


















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function PluginPoint_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PluginPoint_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PluginPoint_ownKeys(Object(source), true).forEach(function (key) { PluginPoint_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PluginPoint_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PluginPoint_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */





var PluginsContext = external_react_default.a.createContext({
  plugins: {}
});
var PluginsProvider = PluginsContext.Provider;

var PluginPoint_RoutePlugin = function RoutePlugin(_ref) {
  var plugins = _ref.plugins,
      name = _ref.name,
      loadingFallback = _ref.loadingFallback,
      emptyFallback = _ref.emptyFallback,
      switchRoutes = _ref.switchRoutes,
      WrapIn = _ref.wrapIn,
      WrapOut = _ref.wrapOut;

  var render = function render(Comp, pluginName) {
    return function (props) {
      var content = external_react_default.a.createElement(external_react_default.a.Suspense, {
        fallback: loadingFallback || external_react_default.a.createElement(LoadingFallback, null)
      }, external_react_default.a.createElement(components_ErrorBoundary, {
        errorMessage: "".concat(name, " - ").concat(pluginName)
      }, external_react_default.a.createElement(Comp, PluginPoint_objectSpread({}, props, {
        api: queryAPI_namespaceObject,
        wrapIn: WrapIn
      }))));
      return WrapOut ? external_react_default.a.createElement(WrapOut, null, content) : content;
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
    return external_react_default.a.createElement(external_react_router_dom_["Route"], {
      key: "".concat(val, "-").concat(!!exact, "-").concat(path, "-").concat(name),
      path: path,
      exact: exact,
      render: render(Comp, val, path)
    });
  });
  if (!routes.length && emptyFallback) return emptyFallback;
  return switchRoutes ? external_react_default.a.createElement(external_react_router_dom_["Switch"], null, routes) : routes;
};

PluginPoint_RoutePlugin.defaultProps = {
  loadingFallback: null,
  emptyFallback: null,
  switchRoutes: null,
  wrapIn: null,
  wrapOut: null
};

var PluginPoint_PluginPoint = function PluginPoint(props) {
  return external_react_default.a.createElement(PluginsContext.Consumer, null, function (state) {
    return external_react_default.a.createElement(PluginPoint_RoutePlugin, PluginPoint_objectSpread({}, props, {
      plugins: (state || {}).plugins || {}
    }));
  });
};

PluginPoint_PluginPoint.defaultProps = {
  loadingFallback: null,
  emptyFallback: null,
  switchRoutes: null
};
/* harmony default export */ var components_PluginPoint = (PluginPoint_PluginPoint);
// CONCATENATED MODULE: ./src/packages/core/ui/core/AppContext.jsx
























function AppContext_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AppContext_typeof = function _typeof(obj) { return typeof obj; }; } else { AppContext_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AppContext_typeof(obj); }

function AppContext_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AppContext_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppContext_ownKeys(Object(source), true).forEach(function (key) { AppContext_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppContext_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AppContext_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AppContext_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AppContext_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AppContext_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function AppContext_toConsumableArray(arr) { return AppContext_arrayWithoutHoles(arr) || AppContext_iterableToArray(arr) || AppContext_nonIterableSpread(); }

function AppContext_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function AppContext_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function AppContext_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function AppContext_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function AppContext_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { AppContext_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { AppContext_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function AppContext_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AppContext_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AppContext_createClass(Constructor, protoProps, staticProps) { if (protoProps) AppContext_defineProperties(Constructor.prototype, protoProps); if (staticProps) AppContext_defineProperties(Constructor, staticProps); return Constructor; }

function AppContext_possibleConstructorReturn(self, call) { if (call && (AppContext_typeof(call) === "object" || typeof call === "function")) { return call; } return AppContext_assertThisInitialized(self); }

function AppContext_getPrototypeOf(o) { AppContext_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AppContext_getPrototypeOf(o); }

function AppContext_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AppContext_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AppContext_setPrototypeOf(subClass, superClass); }

function AppContext_setPrototypeOf(o, p) { AppContext_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AppContext_setPrototypeOf(o, p); }













var appContextShape = {
  darkMode: external_prop_types_default.a.bool.isRequired,
  log: external_prop_types_default.a.func.isRequired,
  dispatch: external_prop_types_default.a.func.isRequired,
  api: external_prop_types_default.a.shape({
    get: external_prop_types_default.a.func.isRequired,
    head: external_prop_types_default.a.func.isRequired,
    post: external_prop_types_default.a.func.isRequired,
    put: external_prop_types_default.a.func.isRequired,
    patch: external_prop_types_default.a.func.isRequired,
    delete: external_prop_types_default.a.func.isRequired,
    connect: external_prop_types_default.a.func.isRequired,
    options: external_prop_types_default.a.func.isRequired,
    trace: external_prop_types_default.a.func.isRequired
  }).isRequired
};
var log = logger('eazin', 'lime');
var AppContext_defaultValue = {
  loading: 0,
  darkMode: true,
  log: log,
  dispatch: function dispatch() {},
  api: queryAPI_namespaceObject // strings: { en: {} },

};
var AppContext = external_react_default.a.createContext(AppContext_defaultValue);
var AppContext_AppContextProvider =
/*#__PURE__*/
function (_React$Component) {
  AppContext_inherits(AppContextProvider, _React$Component);

  function AppContextProvider(props) {
    var _this;

    AppContext_classCallCheck(this, AppContextProvider);

    _this = AppContext_possibleConstructorReturn(this, AppContext_getPrototypeOf(AppContextProvider).call(this, props));
    _this.state = {
      loading: 0,
      darkMode: false,
      bootstraped: [],
      plugins: null
    };

    _this.handleStoreChange = function () {
      var _assertThisInitialize = AppContext_assertThisInitialized(_this),
          getState = _assertThisInitialize.store.getState;

      var stateDarkMode = _this.state.darkMode;

      var _getState = getState(),
          _getState$settings = _getState.settings;

      _getState$settings = _getState$settings === void 0 ? {} : _getState$settings;
      var _getState$settings$da = _getState$settings.darkMode,
          storeDarkMode = _getState$settings$da === void 0 ? false : _getState$settings$da;

      if (storeDarkMode !== stateDarkMode) {
        _this.theme = theme_makeTheme(storeDarkMode ? 'dark' : 'light');

        _this.setState({
          darkMode: storeDarkMode
        });
      }
    };

    _this.bootstrap =
    /*#__PURE__*/
    function () {
      var _ref = AppContext_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(plugins) {
        var _this$store, getState, dispatch, pluginNames, bootstraped;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.handleStoreChange();

                _this$store = _this.store, getState = _this$store.getState, dispatch = _this$store.dispatch;
                pluginNames = Object.keys(plugins);
                bootstraped = _this.state.bootstraped;
                _context.next = 6;
                return Promise.all(pluginNames.reduce(function (acc, name) {
                  var plugin = (plugins[name] || {}).bootstrap;
                  if (!plugin || bootstraped.includes(name)) return acc;
                  return [].concat(AppContext_toConsumableArray(acc), [plugin]);
                }, []).map(function (fn) {
                  return fn(getState(), dispatch, getState, plugins);
                }));

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
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.theme = theme_makeTheme('light');
    Promise.all(Object.values(props.plugins)).then(function (loaded) {
      var loadedObj = {};
      Object.keys(props.plugins).forEach(function (key, k) {
        loadedObj[key] = loaded[k].default || loaded[k];
      });
      _this.store = core_store(loadedObj);
      _this.storeUnsubscribe = _this.store.subscribe(_this.handleStoreChange);
      return _this.bootstrap(loadedObj);
    });
    return _this;
  }

  AppContext_createClass(AppContextProvider, [{
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
          state = AppContext_objectWithoutProperties(_this$state, ["plugins"]);

      if (!plugins) {
        return external_react_default.a.createElement("div", {
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
        }, external_react_default.a.createElement(core_["CircularProgress"], null));
      }

      return external_react_default.a.createElement(AppContext.Provider, {
        value: AppContext_objectSpread({}, state, {
          dispatch: store.dispatch,
          log: log,
          api: queryAPI_namespaceObject // strings,

        })
      }, external_react_default.a.createElement(PluginsProvider, {
        value: {
          plugins: plugins
        }
      }, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(styles_["MuiThemeProvider"], {
        theme: this.theme
      }, external_react_default.a.createElement(CssBaseline_default.a, null), children))));
    }
  }]);

  return AppContextProvider;
}(external_react_default.a.Component);
var AppContextConsumer = AppContext.Consumer;
var AppContext_withAppContext = function withAppContext(Comp) {
  return function (props) {
    return external_react_default.a.createElement(AppContextConsumer, null, function (appContextValue) {
      return external_react_default.a.createElement(Comp // eslint-disable-next-line react/jsx-props-no-spreading
      , AppContext_objectSpread({}, props, {}, appContextValue));
    });
  };
};
// CONCATENATED MODULE: ./src/packages/core/ui/components/Layout/Layout.Header.jsx












var Layout_Header_Header = function Header(_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      onOpenDrawer = _ref.onOpenDrawer,
      fixed = _ref.fixed,
      siteName = _ref.siteName;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["AppBar"], {
    position: fixed ? 'fixed' : 'relative',
    className: [classes.appBar, className].filter(Boolean).join(' ')
  }, external_react_default.a.createElement(core_["Toolbar"], {
    variant: "dense",
    className: classes.toolbar
  }, external_react_default.a.createElement(core_["Hidden"], {
    mdUp: true
  }, external_react_default.a.createElement(icons_["Menu"], {
    "data-testid": "header-menu-button",
    onClick: function onClick() {
      return onOpenDrawer && onOpenDrawer();
    }
  })), external_react_default.a.createElement(core_["Hidden"], {
    smDown: true
  }, external_react_default.a.createElement("div", null, "\xA0")), external_react_default.a.createElement(external_react_router_dom_["NavLink"], {
    className: classes.menuLink,
    to: "/"
  }, siteName), external_react_default.a.createElement("div", {
    "data-testid": "header-links"
  }, external_react_default.a.createElement(components_PluginPoint, {
    name: "HeaderLinks"
  })))), fixed && external_react_default.a.createElement(core_["Toolbar"], {
    variant: "dense"
  }));
};

Layout_Header_Header.defaultProps = {
  className: null,
  onOpenDrawer: null,
  fixed: false,
  siteName: null
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var answers = _ref2.answers,
      others = _ref2.others;
  return {
    answers: answers,
    others: others
  };
};

var styled = Object(styles_["withStyles"])(function (theme) {
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
})(Layout_Header_Header);
/* harmony default export */ var Layout_Header = (Object(external_react_redux_["connect"])(mapStateToProps)(AppContext_withAppContext(styled)));
// CONCATENATED MODULE: ./src/packages/core/ui/components/Layout/Layout.Drawer.styles.js


function Layout_Drawer_styles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var Layout_Drawer_styles = (function (theme) {
  var _menuLink;

  return {
    root: {
      minWidth: '20vw',
      maxWidth: '45vw',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      overflow: 'auto',
      justifyContent: 'space-between'
    },
    top: {},
    bottom: {
      margin: theme.spacing(1)
    },
    menuLink: (_menuLink = {
      color: 'currentColor',
      textDecoration: 'none',
      cursor: 'pointer',
      padding: "".concat(theme.spacing(1), "px ").concat(theme.spacing(2), "px")
    }, Layout_Drawer_styles_defineProperty(_menuLink, theme.breakpoints.up('md'), {
      padding: theme.spacing(2)
    }), Layout_Drawer_styles_defineProperty(_menuLink, "display", 'block'), Layout_Drawer_styles_defineProperty(_menuLink, '&.active', {
      textDecoration: 'underline'
    }), _menuLink)
  };
});
// CONCATENATED MODULE: ./src/packages/core/ui/components/Layout/Layout.Drawer.jsx



 // eslint-disable-next-line


var DrawerLink = Object(core_["withStyles"])(Layout_Drawer_styles)(function (_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      to = _ref.to;
  return external_react_default.a.createElement(external_react_router_dom_["NavLink"], {
    className: classes.menuLink,
    to: to
  }, children);
});

var Layout_Drawer_Drawer = function Drawer(_ref2) {
  var classes = _ref2.classes;
  return external_react_default.a.createElement("div", {
    className: classes.root
  }, external_react_default.a.createElement("div", {
    className: classes.top
  }, external_react_default.a.createElement(components_PluginPoint, {
    className: classes.drawerLinks,
    name: "Drawer"
  })), external_react_default.a.createElement("div", {
    className: classes.bottom
  }, external_react_default.a.createElement(components_PluginPoint, {
    className: classes.drawerLowLinks,
    name: "DrawerLow"
  })));
};

/* harmony default export */ var Layout_Drawer = (Object(external_react_router_dom_["withRouter"])(Object(core_["withStyles"])(Layout_Drawer_styles)(Layout_Drawer_Drawer)));
// CONCATENATED MODULE: ./src/packages/core/ui/components/Layout/Layout.jsx














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Layout_ownKeys(Object(source), true).forEach(function (key) { Layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var fullHeight = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%'
};

var Layout_styles = function styles(theme) {
  return {
    '@global': {
      'html, body, #root': fullHeight
    },
    root: fullHeight,
    layoutContent: Layout_objectSpread({}, fullHeight, Layout_defineProperty({
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
    drawerShifted: Layout_defineProperty({}, theme.breakpoints.up('md'), {
      left: '20vw',
      width: '80vw'
    }),
    drawer: {
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

var Layout_Layout = function Layout(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      justify = _ref.justify,
      align = _ref.align,
      passThru = _ref.passThru,
      siteName = _ref.siteName;

  var _React$useState = external_react_default.a.useState(false),
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
  var drawerContent = external_react_default.a.createElement(Layout_Drawer, null);
  return external_react_default.a.createElement(core_["Typography"], {
    component: "div",
    className: classes.root
  }, auth && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Hidden"], {
    mdUp: true
  }, external_react_default.a.createElement(core_["Drawer"], {
    "data-testid": "maindrawer",
    open: drawerOpen,
    onClose: onCloseDrawer,
    classes: {
      paper: classes.drawer
    }
  }, external_react_default.a.createElement(core_["Toolbar"], {
    variant: "dense"
  }), drawerContent)), external_react_default.a.createElement(core_["Hidden"], {
    smDown: true
  }, external_react_default.a.createElement(core_["Drawer"], {
    "data-testid": "maindrawer",
    open: true,
    variant: "persistent",
    classes: {
      paper: classes.drawer
    }
  }, external_react_default.a.createElement(core_["Toolbar"], {
    variant: "dense"
  }), drawerContent))), external_react_default.a.createElement(Layout_Header, {
    siteName: siteName,
    onOpenDrawer: onOpenDrawer,
    fixed: true
  }), external_react_default.a.createElement("div", {
    className: external_classnames_default()((_classNames = {}, Layout_defineProperty(_classNames, classes.layoutContent, true), Layout_defineProperty(_classNames, classes.drawerShifted, drawerContent && auth), Layout_defineProperty(_classNames, classes.alignCenter, align === 'center'), Layout_defineProperty(_classNames, classes.alignEnd, align === 'right'), Layout_defineProperty(_classNames, classes.justifyCenter, justify === 'center'), Layout_defineProperty(_classNames, classes.justifyBottom, justify === 'bottom'), Layout_defineProperty(_classNames, "auth", auth), Layout_defineProperty(_classNames, "anon", !auth), _classNames)),
    "data-testid": "layout-content"
  }, auth ? children : external_react_default.a.createElement(components_PluginPoint, {
    name: "AnonymousView"
  })));
};

Layout_Layout.defaultProps = {
  align: null,
  justify: null,
  passThru: null,
  siteName: null
};

var Layout_mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$settings = _ref2.settings;
  _ref2$settings = _ref2$settings === void 0 ? {} : _ref2$settings;
  var userToken = _ref2$settings.userToken;
  return {
    passThru: !!userToken
  };
};

/* harmony default export */ var components_Layout_Layout = (Object(external_react_redux_["connect"])(Layout_mapStateToProps)(Object(styles_["withStyles"])(Layout_styles)(Layout_Layout)));
// CONCATENATED MODULE: ./src/packages/core/ui/components/Layout/index.js

/* harmony default export */ var components_Layout = (components_Layout_Layout);
// CONCATENATED MODULE: ./src/packages/core/ui/components/Layout/Layout.Drawer.Link.jsx




/* harmony default export */ var Layout_Drawer_Link = (Object(core_["withStyles"])(Layout_Drawer_styles)(function (_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      to = _ref.to;
  return external_react_default.a.createElement(external_react_router_dom_["NavLink"], {
    className: classes.menuLink,
    to: to
  }, children);
}));
// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__(46);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// CONCATENATED MODULE: ./src/packages/core/ui/components/Link.jsx







function Link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Link_ownKeys(Object(source), true).forEach(function (key) { Link_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Link_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/anchor-is-valid */




var Link_Link = function Link(_ref) {
  var color = _ref.color,
      underline = _ref.underline,
      variant = _ref.variant,
      children = _ref.children,
      to = _ref.to;
  return external_react_default.a.createElement(Link_default.a, Link_objectSpread({}, {
    color: color,
    underline: underline,
    variant: variant
  }, {
    component: external_react_default.a.forwardRef(function (props, ref) {
      return external_react_default.a.createElement(external_react_router_dom_["Link"], Link_objectSpread({
        innerRef: ref
      }, props, {
        to: to
      }));
    })
  }), children);
};

Link_Link.defaultProps = {
  children: null,
  color: undefined,
  underline: undefined,
  variant: undefined
};
/* harmony default export */ var components_Link = (Link_Link);
// EXTERNAL MODULE: external "material-table"
var external_material_table_ = __webpack_require__(47);
var external_material_table_default = /*#__PURE__*/__webpack_require__.n(external_material_table_);

// CONCATENATED MODULE: ./src/packages/core/ui/components/Table.jsx







function Table_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Table_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Table_ownKeys(Object(source), true).forEach(function (key) { Table_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Table_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var icons = {
  Add: icons_["AddBox"],
  Check: icons_["Check"],
  Clear: icons_["Clear"],
  Delete: icons_["DeleteOutline"],
  DetailPanel: icons_["ChevronRight"],
  Edit: icons_["Edit"],
  Export: icons_["SaveAlt"],
  Filter: icons_["FilterList"],
  FirstPage: icons_["FirstPage"],
  LastPage: icons_["LastPage"],
  NextPage: icons_["ChevronRight"],
  PreviousPage: icons_["ChevronLeft"],
  ResetSearch: icons_["Clear"],
  Search: icons_["Search"],
  SortArrow: icons_["ArrowDownward"],
  ThirdStateCheck: icons_["Remove"],
  ViewColumn: icons_["ViewColumn"]
};

var Table_Table = function Table(props) {
  return external_react_default.a.createElement(external_material_table_default.a, Table_objectSpread({
    icons: icons
  }, props));
};

/* harmony default export */ var components_Table = (Table_Table);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(48);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/packages/core/ui/components/TimeAgo.jsx



var TimeAgo_TimeAgo = function TimeAgo(_ref) {
  var date = _ref.date,
      component = _ref.component;
  if (!date) return null;
  var mom = external_moment_default()(date);

  if (component === 'div') {
    return external_react_default.a.createElement("div", {
      title: mom.format('YYYY-MM-DD HH:mm')
    }, mom.fromNow());
  }

  return external_react_default.a.createElement("span", {
    title: mom.format('YYYY-MM-DD HH:mm')
  }, mom.fromNow());
};

TimeAgo_TimeAgo.defaultProps = {
  date: null,
  component: null
};
/* harmony default export */ var components_TimeAgo = (TimeAgo_TimeAgo);
// CONCATENATED MODULE: ./src/packages/core/ui/components/index.js















// EXTERNAL MODULE: external "history"
var external_history_ = __webpack_require__(49);

// CONCATENATED MODULE: ./src/packages/core/ui/core/history.js

/* harmony default export */ var core_history = (Object(external_history_["createBrowserHistory"])());
// EXTERNAL MODULE: external "core-js/modules/es.array.slice"
var es_array_slice_ = __webpack_require__(33);

// CONCATENATED MODULE: ./src/packages/core/ui/core/factory.js









function factory_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function factory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { factory_ownKeys(Object(source), true).forEach(function (key) { factory_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { factory_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function factory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ucf = function ucf(str) {
  return "".concat(str[0].toUpperCase()).concat(str.slice(1));
};

/* harmony default export */ var factory = (function (singular) {
  var _ref3;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$idKey = _ref.idKey,
      idKey = _ref$idKey === void 0 ? 'id' : _ref$idKey,
      _ref$plural = _ref.plural,
      plural = _ref$plural === void 0 ? "".concat(singular, "s") : _ref$plural;

  var ucSingular = singular.toUpperCase();
  var ucPlural = plural.toUpperCase();
  var ucfSingular = ucf(singular);
  var ucfPlural = ucf(plural);

  var clear = function clear() {
    return {
      type: "CLEAR_".concat(ucPlural)
    };
  };

  var remove = function remove(payload) {
    return {
      type: "REMOVE_".concat(ucSingular),
      payload: payload
    };
  };

  var removeMany = function removeMany(payload) {
    if (!Array.isArray(payload)) throw new Error('Bad argument, must be an array');
    return {
      type: "REMOVE_".concat(ucPlural),
      payload: payload
    };
  };

  var upsert = function upsert(id, payload) {
    if (!id) throw new Error("Missing ".concat(idKey));
    return {
      type: "UPSERT_".concat(ucSingular),
      payload: factory_objectSpread({}, payload, factory_defineProperty({}, idKey, id))
    };
  };

  var upsertMany = function upsertMany(payload) {
    if (!Array.isArray(payload)) throw new Error('Bad argument, must be an array');
    return {
      type: "UPSERT_".concat(ucPlural),
      payload: payload
    };
  };

  return [function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
        type = _ref2.type,
        payload = _ref2.payload;

    var obj;

    switch (type) {
      case "CLEAR_".concat(ucPlural):
        return {};

      case "REMOVE_".concat(ucSingular):
        if (!state[payload]) return state;
        return factory_objectSpread({}, state, factory_defineProperty({}, payload, undefined));

      case "REMOVE_".concat(ucPlural):
        obj = factory_objectSpread({}, state);
        payload.forEach(function (id) {
          obj = factory_objectSpread({}, obj, factory_defineProperty({}, id, undefined));
        });
        return obj;

      case "UPSERT_".concat(ucSingular):
        if (!payload[idKey]) {
          // eslint-disable-next-line no-console
          console.warn('Missing %s in payload for action type %s', idKey, type); // , (new Error('Missing id')).stack);

          return state;
        }

        return factory_objectSpread({}, state, factory_defineProperty({}, payload[idKey], factory_objectSpread({}, state[payload[idKey]] || {}, {}, payload)));

      case "UPSERT_".concat(ucPlural):
        obj = factory_objectSpread({}, state);
        payload.forEach(function (item) {
          if (!item[idKey]) {
            // eslint-disable-next-line no-console
            console.warn('Missing %s in item for action type %s', idKey, type);
            return;
          }

          obj = factory_objectSpread({}, obj, factory_defineProperty({}, item[idKey], factory_objectSpread({}, state[item[idKey]] || {}, {}, item)));
        });
        return obj;

      default:
        return state;
    }
  }, (_ref3 = {}, factory_defineProperty(_ref3, "clear".concat(ucfPlural), clear), factory_defineProperty(_ref3, "remove".concat(ucfSingular), remove), factory_defineProperty(_ref3, "remove".concat(ucfPlural), removeMany), factory_defineProperty(_ref3, "upsert".concat(ucfSingular), upsert), factory_defineProperty(_ref3, "upsert".concat(ucfPlural), upsertMany), _ref3)];
});
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(50);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// CONCATENATED MODULE: ./src/packages/core/ui/App.jsx
/* eslint-disable react/no-unused-state */

/* eslint-disable react/jsx-props-no-spreading */








var App_App = function App(_ref) {
  var children = _ref.children,
      plugins = _ref.plugins,
      siteName = _ref.siteName;
  return plugins && external_react_default.a.createElement(AppContext_AppContextProvider, {
    plugins: plugins
  }, external_react_default.a.createElement(external_react_helmet_default.a, {
    titleTemplate: "".concat(siteName, " | %s"),
    defaultTitle: siteName
  }), external_react_default.a.createElement(external_react_router_dom_["Router"], {
    history: core_history
  }, external_react_default.a.createElement(components_Layout, {
    siteName: siteName
  }, children || external_react_default.a.createElement(components_PluginPoint, {
    name: "View",
    switchRoutes: true
  }))));
};

App_App.defaultProps = {
  children: null,
  siteName: null
};
/* harmony default export */ var ui_App = (App_App);
// CONCATENATED MODULE: ./src/packages/core/ui/index.js
/* concated harmony reexport propTypes */__webpack_require__.d(__webpack_exports__, "propTypes", function() { return plugins_propTypes_namespaceObject; });
/* concated harmony reexport ButtonsGroup */__webpack_require__.d(__webpack_exports__, "ButtonsGroup", function() { return Form_ButtonsGroup; });
/* concated harmony reexport Fields */__webpack_require__.d(__webpack_exports__, "Fields", function() { return Form_Fields; });
/* concated harmony reexport FieldSet */__webpack_require__.d(__webpack_exports__, "FieldSet", function() { return Form_FieldSet; });
/* concated harmony reexport Form */__webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* concated harmony reexport FormBase */__webpack_require__.d(__webpack_exports__, "FormBase", function() { return Form_FormBase; });
/* concated harmony reexport Layout */__webpack_require__.d(__webpack_exports__, "Layout", function() { return components_Layout; });
/* concated harmony reexport LayoutDrawer */__webpack_require__.d(__webpack_exports__, "LayoutDrawer", function() { return Layout_Drawer; });
/* concated harmony reexport LayoutDrawerLink */__webpack_require__.d(__webpack_exports__, "LayoutDrawerLink", function() { return Layout_Drawer_Link; });
/* concated harmony reexport LayoutHeader */__webpack_require__.d(__webpack_exports__, "LayoutHeader", function() { return Layout_Header; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return components_Link; });
/* concated harmony reexport LoadingFallback */__webpack_require__.d(__webpack_exports__, "LoadingFallback", function() { return LoadingFallback; });
/* concated harmony reexport PluginPoint */__webpack_require__.d(__webpack_exports__, "PluginPoint", function() { return components_PluginPoint; });
/* concated harmony reexport Table */__webpack_require__.d(__webpack_exports__, "Table", function() { return components_Table; });
/* concated harmony reexport TextField */__webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* concated harmony reexport TimeAgo */__webpack_require__.d(__webpack_exports__, "TimeAgo", function() { return components_TimeAgo; });
/* concated harmony reexport withAppContext */__webpack_require__.d(__webpack_exports__, "withAppContext", function() { return AppContext_withAppContext; });
/* concated harmony reexport logger */__webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* concated harmony reexport queryAPI */__webpack_require__.d(__webpack_exports__, "queryAPI", function() { return queryAPI_queryAPI; });
/* concated harmony reexport store */__webpack_require__.d(__webpack_exports__, "store", function() { return core_store; });
/* concated harmony reexport history */__webpack_require__.d(__webpack_exports__, "history", function() { return core_history; });
/* concated harmony reexport factory */__webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* concated harmony reexport App */__webpack_require__.d(__webpack_exports__, "App", function() { return ui_App; });











/***/ })
/******/ ]);
});