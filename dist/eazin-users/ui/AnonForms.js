(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-users/ui/AnonForms", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-users/ui/AnonForms"] = factory();
	else
		root["eazin-users/ui/AnonForms"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 216);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37);
/* harmony import */ var _AnonForms_Links__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(68);















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  email: _objectSpread({
    label: 'Email',
    type: 'email'
  }, required, {
    validate: _user_validators__WEBPACK_IMPORTED_MODULE_17__["validMail"]
  }),
  password: _objectSpread({
    label: 'Password',
    type: 'password'
  }, required, {
    validate: _user_validators__WEBPACK_IMPORTED_MODULE_17__["validPassword"]
  }),
  passwordConfirm: _objectSpread({
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

var UserRegister = function UserRegister() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleSubmit = function handleSubmit(fields) {
    return Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_16__["queryAPI"])('/api/user/register', {
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
    return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
      component: "div",
      color: "textPrimary"
    }, "A verification email has been sent to\xA0", state.email, ".");
  }

  return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    variant: "h5"
  }, "Register"), state.error && react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15___default.a, {
    component: "div",
    color: "error"
  }, state.error), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_16__["Form"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_AnonForms_Links__WEBPACK_IMPORTED_MODULE_18__["default"], {
    current: "register"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserRegister);

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40);
/* harmony import */ var _settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48);
/* harmony import */ var _AnonForms_Links__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37);









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
  email: _objectSpread({
    label: 'Email',
    type: 'email'
  }, required, {
    validate: _user_validators__WEBPACK_IMPORTED_MODULE_15__["validMail"]
  }),
  password: _objectSpread({
    label: 'Password',
    type: 'password'
  }, required)
};

var UserLogin = function UserLogin(_ref) {
  var dispatch = _ref.dispatch,
      push = _ref.history.push;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h5"
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_11__["Form"], {
    method: "post",
    url: "/api/user/login",
    onSuccess: function onSuccess(data) {
      dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_12__["setUser"])(data));
      dispatch(Object(_settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_13__["setSetting"])('userToken', data.token));
      push('/');
    },
    fields: schema,
    buttons: function buttons(_ref2) {
      var invalid = _ref2.invalid,
          pristine = _ref2.pristine,
          loading = _ref2.loading;
      return [{
        text: 'Login',
        type: 'submit',
        disabled: invalid || pristine || loading
      }];
    }
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AnonForms_Links__WEBPACK_IMPORTED_MODULE_14__["default"], {
    current: "login"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function () {
  return {};
})(UserLogin));

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var _AnonForms_Links__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68);









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
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "h5"
  }, "Password reset"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_10__["Form"], {
    method: "post",
    url: "/api/user/email",
    successMessage: "Email sent",
    errorMessage: "The Email could not be send",
    fields: {
      email: _objectSpread({
        label: 'Email'
      }, required, {
        validate: _user_validators__WEBPACK_IMPORTED_MODULE_11__["validMail"]
      })
    },
    buttons: [{
      type: 'submit',
      text: 'Send reset email'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_AnonForms_Links__WEBPACK_IMPORTED_MODULE_12__["default"], {
    current: "reset"
  }));
});

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(48);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37);












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
/* harmony default export */ __webpack_exports__["default"] = (Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["withAppContext"])(function (props) {
  var post = props.api.post,
      search = props.location.search,
      dispatch = props.dispatch,
      push = props.history.push;

  var _parse = Object(querystring__WEBPACK_IMPORTED_MODULE_13__["parse"])(search.slice(1)),
      token = _parse.token;

  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h5"
  }, "Password reset"), !!token && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["Form"], {
    onSubmit: function onSubmit(_ref) {
      var password = _ref.password;
      return post('/api/user/password', {
        body: {
          token: token,
          password: password
        }
      });
    },
    onSuccess: function onSuccess(user) {
      dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_16__["setUser"])(user));
      dispatch(Object(_settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_15__["setSetting"])('userToken', user.token));
      push('/account');
    },
    fields: {
      password: _objectSpread({
        label: 'Password',
        type: 'password'
      }, required, {
        validate: _user_validators__WEBPACK_IMPORTED_MODULE_17__["validPassword"]
      }),
      passwordConfirm: _objectSpread({
        label: 'Password Confirmation',
        type: 'password'
      }, required, {
        validate: function validate() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var vals = arguments.length > 1 ? arguments[1] : undefined;
          if (val !== vals.password) return 'Passwords don\'t match';
        }
      })
    },
    buttons: [{
      type: 'submit',
      text: 'Reset'
    }]
  }));
}));

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(18);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(48);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40);

















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
  var query = Object(querystring__WEBPACK_IMPORTED_MODULE_18__["parse"])(search.slice(1) || '');

  if (!query.token) {
    return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
      color: "error"
    }, "A verification token is required.");
  }

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_19___default.a, {
    variant: "h5"
  }, "Email verification"), react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_20__["Form"], {
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fields) {
        var info, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_20__["queryAPI"])('/api/user/verify', {
                  method: 'POST',
                  body: JSON.stringify(_objectSpread({}, fields, {
                    verifToken: query.token
                  }))
                });

              case 2:
                info = _context.sent;
                _context.next = 5;
                return Object(eazin_core_ui__WEBPACK_IMPORTED_MODULE_20__["queryAPI"])('/api/user/me', {
                  headers: {
                    Authorization: "Bearer ".concat(info.token)
                  }
                });

              case 5:
                user = _context.sent;
                dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_22__["setUser"])(user));
                dispatch(Object(_settings_ui_settings_actions__WEBPACK_IMPORTED_MODULE_21__["setSetting"])('userToken', info.token));
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
        type: 'submit',
        text: 'Finish up',
        disabled: pristine || invalid || loading || !firstName || !lastName
      }];
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["connect"])(function () {
  return {};
})(UserVerify));

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(132);
/* harmony import */ var _UserLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(133);
/* harmony import */ var _UserResetSend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(134);
/* harmony import */ var _UserResetChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(135);
/* harmony import */ var _UserVerify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(136);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var styles = function styles(theme) {
  return {
    paper: _defineProperty({
      padding: theme.spacing(1)
    }, theme.breakpoints.up('md'), {
      padding: theme.spacing(2)
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(function (_ref) {
  var classes = _ref.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    alignItems: "center",
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    sm: 10,
    md: 6,
    lg: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/register",
    component: _UserRegister__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/verify",
    component: _UserVerify__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/reset/change",
    component: _UserResetChange__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: ['/reset', '/reset/send'],
    component: _UserResetSend__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: ['/', '/login'],
    component: _UserLogin__WEBPACK_IMPORTED_MODULE_6__["default"]
  })))));
}));

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

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

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.iterator");

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

/***/ 31:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMail", function() { return validMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPassword", function() { return validPassword; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator_es_lib_isEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
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

/***/ 39:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 40:
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

/***/ 48:
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__);







var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: 0,
      marginTop: theme.spacing(2),
      padding: 0,
      listStyle: 'none'
    },
    items: {
      margin: 0,
      padding: 0
    }
  };
};

var links = {
  login: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/login"
  }, "Login"),
  register: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/register"
  }, "Register"),
  reset: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/reset"
  }, "Password Reset")
};

var Links = function Links(_ref) {
  var classes = _ref.classes,
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? 'login' : _ref$current;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: classes.root
  }, Object.keys(links).filter(function (key) {
    return key !== current;
  }).map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: key,
      className: classes.item
    }, links[key]);
  }));
};

Links.defaultProps = {
  current: 'login'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Links));

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = require("validator/es/lib/isEmail");

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.search");

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("eazin-core/ui");

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match");

/***/ })

/******/ });
});