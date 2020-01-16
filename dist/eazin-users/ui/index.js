(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-users/ui/index", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-users/ui/index"] = factory();
	else
		root["eazin-users/ui/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
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

module.exports = require("eazin-core/ui");

/***/ }),
/* 3 */,
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
/* 11 */,
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
/* 15 */
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
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
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.to-string");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.search");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

module.exports = require("validator/es/lib/isEmail");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("eazin-settings/ui/index");

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match");

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "eazin-core/ui"
var ui_ = __webpack_require__(2);

// EXTERNAL MODULE: ./src/packages/settings/ui/settings.actions.js
var settings_actions = __webpack_require__(15);

// CONCATENATED MODULE: ./src/packages/users/ui/user.actions.js
var setUser = function setUser(payload) {
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

// CONCATENATED MODULE: ./src/packages/users/ui/user.reducer.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(12);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(13);

// EXTERNAL MODULE: external "core-js/modules/es.symbol.description"
var es_symbol_description_ = __webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/es.symbol.iterator"
var es_symbol_iterator_ = __webpack_require__(21);

// EXTERNAL MODULE: external "core-js/modules/es.array.iterator"
var es_array_iterator_ = __webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string"
var es_object_to_string_ = __webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.to-string"
var es_regexp_to_string_ = __webpack_require__(32);

// EXTERNAL MODULE: external "core-js/modules/es.string.iterator"
var es_string_iterator_ = __webpack_require__(22);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.iterator"
var web_dom_collections_iterator_ = __webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec"
var es_regexp_exec_ = __webpack_require__(34);

// EXTERNAL MODULE: external "core-js/modules/es.string.match"
var es_string_match_ = __webpack_require__(64);

// EXTERNAL MODULE: external "validator/es/lib/isEmail"
var isEmail_ = __webpack_require__(51);
var isEmail_default = /*#__PURE__*/__webpack_require__.n(isEmail_);

// CONCATENATED MODULE: ./src/packages/users/ui/user.validators.js



/* eslint-disable import/no-extraneous-dependencies */

var user_validators_validMail = function validMail() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!val || !isEmail_default()(val)) return 'Not a valid email address';
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
// EXTERNAL MODULE: external "core-js/modules/es.array.map"
var es_array_map_ = __webpack_require__(25);

// EXTERNAL MODULE: external "@material-ui/styles"
var external_material_ui_styles_ = __webpack_require__(36);

// CONCATENATED MODULE: ./src/packages/users/ui/AnonForms.Links.jsx







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
  login: external_react_default.a.createElement(ui_["Link"], {
    to: "/login"
  }, "Login"),
  register: external_react_default.a.createElement(ui_["Link"], {
    to: "/register"
  }, "Register"),
  reset: external_react_default.a.createElement(ui_["Link"], {
    to: "/reset"
  }, "Reset Password")
};

var AnonForms_Links_Links = function Links(_ref) {
  var classes = _ref.classes,
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? 'login' : _ref$current;
  return external_react_default.a.createElement("ul", {
    className: classes.root
  }, Object.keys(links).filter(function (key) {
    return key !== current;
  }).map(function (key) {
    return external_react_default.a.createElement("li", {
      key: key,
      className: classes.item
    }, links[key]);
  }));
};

AnonForms_Links_Links.defaultProps = {
  current: 'login'
};
/* harmony default export */ var AnonForms_Links = (Object(external_material_ui_styles_["withStyles"])(styles)(AnonForms_Links_Links));
// CONCATENATED MODULE: ./src/packages/users/ui/UserRegister.jsx














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function UserRegister_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserRegister_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserRegister_ownKeys(Object(source), true).forEach(function (key) { UserRegister_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserRegister_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    validate: user_validators_validMail
  }),
  password: UserRegister_objectSpread({
    label: 'Password',
    type: 'password'
  }, required, {
    validate: validPassword
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
  }),
  buttons: {
    type: 'buttons',
    buttons: function buttons(_ref) {
      var pristine = _ref.pristine,
          invalid = _ref.invalid,
          _ref$values = _ref.values,
          email = _ref$values.email,
          passwordConfirm = _ref$values.passwordConfirm;
      return [{
        text: 'Register',
        type: 'submit',
        disabled: pristine || invalid || !email || !passwordConfirm
      }];
    }
  }
};

var UserRegister_UserRegister = function UserRegister() {
  var _useState = Object(external_react_["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleSubmit = function handleSubmit(fields) {
    return Object(ui_["queryAPI"])('/api/user/register', {
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
    return external_react_default.a.createElement(core_["Typography"], {
      component: "div",
      color: "textPrimary"
    }, "A verification email has been sent to\xA0", state.email, ".");
  }

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "Register"), state.error && external_react_default.a.createElement(core_["Typography"], {
    component: "div",
    color: "error"
  }, state.error), external_react_default.a.createElement(ui_["Form"], {
    onSubmit: handleSubmit,
    fields: schema
  }), external_react_default.a.createElement(AnonForms_Links, {
    current: "register"
  }));
};

/* harmony default export */ var ui_UserRegister = (UserRegister_UserRegister);
// EXTERNAL MODULE: external "core-js/modules/es.string.trim"
var es_string_trim_ = __webpack_require__(19);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// CONCATENATED MODULE: ./src/packages/users/ui/UserLogin.jsx








function UserLogin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserLogin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserLogin_ownKeys(Object(source), true).forEach(function (key) { UserLogin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserLogin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserLogin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










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
    validate: user_validators_validMail
  }),
  password: UserLogin_objectSpread({
    label: 'Password',
    type: 'password'
  }, UserLogin_required),
  buttons: {
    buttons: [{
      text: 'Login',
      type: 'submit'
    }]
  }
};

var UserLogin_UserLogin = function UserLogin(_ref) {
  var dispatch = _ref.dispatch;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "Login"), external_react_default.a.createElement(ui_["Form"], {
    method: "post",
    url: "/api/user/login",
    onSuccess: function onSuccess(data) {
      dispatch(setUser(data));
      dispatch(Object(settings_actions["setSetting"])('userToken', data.token));
    },
    fields: UserLogin_schema
  }), external_react_default.a.createElement(AnonForms_Links, {
    current: "login"
  }));
};

/* harmony default export */ var ui_UserLogin = (Object(external_react_redux_["connect"])(function () {
  return {};
})(UserLogin_UserLogin));
// CONCATENATED MODULE: ./src/packages/users/ui/UserResetSend.jsx








function UserResetSend_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserResetSend_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserResetSend_ownKeys(Object(source), true).forEach(function (key) { UserResetSend_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserResetSend_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserResetSend_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var UserResetSend_notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var UserResetSend_required = {
  required: true,
  validate: UserResetSend_notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
/* harmony default export */ var UserResetSend = (function () {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "Password reset"), external_react_default.a.createElement(ui_["Form"], {
    method: "post",
    url: "/api/user/email",
    successMessage: "Email sent",
    errorMessage: "The Email could not be send",
    fields: {
      email: UserResetSend_objectSpread({
        label: 'Email'
      }, UserResetSend_required, {
        validate: user_validators_validMail
      })
    },
    buttons: [{
      type: 'submit',
      text: 'Send reset email'
    }]
  }), external_react_default.a.createElement(AnonForms_Links, {
    current: "reset"
  }));
});
// EXTERNAL MODULE: external "core-js/modules/es.array.slice"
var es_array_slice_ = __webpack_require__(33);

// EXTERNAL MODULE: external "core-js/modules/es.string.search"
var es_string_search_ = __webpack_require__(35);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(24);

// CONCATENATED MODULE: ./src/packages/users/ui/UserResetChange.jsx











function UserResetChange_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserResetChange_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserResetChange_ownKeys(Object(source), true).forEach(function (key) { UserResetChange_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserResetChange_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserResetChange_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var UserResetChange_notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var UserResetChange_required = {
  required: true,
  validate: UserResetChange_notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
/* harmony default export */ var UserResetChange = (Object(ui_["withAppContext"])(function (props) {
  var post = props.api.post,
      search = props.location.search,
      dispatch = props.dispatch,
      push = props.history.push;

  var _parse = Object(external_querystring_["parse"])(search.slice(1)),
      token = _parse.token;

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "Password reset"), !!token && external_react_default.a.createElement(ui_["Form"], {
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
      dispatch(setUser(user));
      dispatch(Object(settings_actions["setSetting"])('userToken', user.token));
      push('/account');
    },
    fields: {
      password: UserResetChange_objectSpread({
        label: 'Password',
        type: 'password'
      }, UserResetChange_required, {
        validate: validPassword
      }),
      passwordConfirm: UserResetChange_objectSpread({
        label: 'Password Confirmation',
        type: 'password'
      }, UserResetChange_required, {
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
// EXTERNAL MODULE: external "core-js/modules/es.promise"
var es_promise_ = __webpack_require__(23);

// EXTERNAL MODULE: external "regenerator-runtime/runtime"
var runtime_ = __webpack_require__(26);

// CONCATENATED MODULE: ./src/packages/users/ui/UserVerify.jsx
















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function UserVerify_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserVerify_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserVerify_ownKeys(Object(source), true).forEach(function (key) { UserVerify_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserVerify_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserVerify_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var UserVerify_notEmpty = function notEmpty(val) {
  return val && val.trim() ? undefined : 'A value is required';
};

var UserVerify_required = {
  required: true,
  validate: UserVerify_notEmpty,
  validateOnChange: true,
  validateOnBlur: true
};
var UserVerify_schema = {
  firstName: UserVerify_objectSpread({
    label: 'First Name'
  }, UserVerify_required),
  lastName: UserVerify_objectSpread({
    label: 'Last Name'
  }, UserVerify_required),
  buttons: {
    buttons: function buttons(_ref) {
      var pristine = _ref.pristine,
          invalid = _ref.invalid,
          _ref$values = _ref.values,
          firstName = _ref$values.firstName,
          lastName = _ref$values.lastName;
      return [{
        type: 'submit',
        text: 'Finish up',
        disabled: pristine || invalid || !firstName || !lastName
      }];
    }
  }
};

var UserVerify_UserVerify = function UserVerify(_ref2) {
  var dispatch = _ref2.dispatch,
      push = _ref2.history.push,
      search = _ref2.location.search;
  var query = Object(external_querystring_["parse"])(search.slice(1) || '');

  if (!query.token) {
    return external_react_default.a.createElement(core_["Typography"], {
      color: "error"
    }, "A verification token is required.");
  }

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
    variant: "h5"
  }, "Email verification"), external_react_default.a.createElement(ui_["Form"], {
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fields) {
        var info, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(ui_["queryAPI"])('/api/user/verify', {
                  method: 'POST',
                  body: JSON.stringify(UserVerify_objectSpread({}, fields, {
                    verifToken: query.token
                  }))
                });

              case 2:
                info = _context.sent;
                _context.next = 5;
                return Object(ui_["queryAPI"])('/api/user/me', {
                  headers: {
                    Authorization: "Bearer ".concat(info.token)
                  }
                });

              case 5:
                user = _context.sent;
                dispatch(setUser(user));
                dispatch(Object(settings_actions["setSetting"])('userToken', info.token));
                push('/');

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(),
    fields: UserVerify_schema
  }));
};

/* harmony default export */ var ui_UserVerify = (Object(external_react_redux_["connect"])(function () {
  return {};
})(UserVerify_UserVerify));
// CONCATENATED MODULE: ./src/packages/users/ui/AnonForms.jsx
function AnonForms_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var AnonForms_styles = function styles(theme) {
  return {
    paper: AnonForms_defineProperty({
      padding: theme.spacing(1)
    }, theme.breakpoints.up('md'), {
      padding: theme.spacing(2)
    })
  };
};

/* harmony default export */ var AnonForms = (Object(styles_["withStyles"])(AnonForms_styles)(function (_ref) {
  var classes = _ref.classes;
  return external_react_default.a.createElement(core_["Grid"], {
    container: true,
    alignItems: "center",
    justify: "center"
  }, external_react_default.a.createElement(core_["Grid"], {
    item: true,
    xs: 12,
    sm: 10,
    md: 6,
    lg: 4
  }, external_react_default.a.createElement(core_["Paper"], {
    className: classes.paper
  }, external_react_default.a.createElement(external_react_router_dom_["Switch"], null, external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/register",
    component: ui_UserRegister
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: "/verify",
    component: ui_UserVerify
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: "/reset/change",
    component: UserResetChange
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: ['/reset', '/reset/send'],
    component: UserResetSend
  }), external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: ['/', '/login'],
    component: ui_UserLogin
  })))));
}));
// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.object.get-prototype-of"
var es_object_get_prototype_of_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/es.object.set-prototype-of"
var es_object_set_prototype_of_ = __webpack_require__(29);

// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__(27);

// CONCATENATED MODULE: ./src/packages/users/ui/UserAccountView.jsx






















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function UserAccountView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function UserAccountView_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { UserAccountView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { UserAccountView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function UserAccountView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UserAccountView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UserAccountView_ownKeys(Object(source), true).forEach(function (key) { UserAccountView_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UserAccountView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UserAccountView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var UserAccountView_required = {
  required: true,
  validateOnChange: true
}; // eslint-disable-next-line react/prop-types

var UserAccountView_ProfileForm = function ProfileForm(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName;
  return external_react_default.a.createElement(ui_["Form"], {
    method: "patch",
    url: "/api/user",
    fields: {
      firstName: UserAccountView_objectSpread({
        label: 'First Name'
      }, UserAccountView_required, {
        fullWidth: true,
        initialValue: firstName
      }),
      lastName: UserAccountView_objectSpread({
        label: 'Last Name'
      }, UserAccountView_required, {
        fullWidth: true,
        initialValue: lastName
      }),
      actions: {
        buttons: function buttons(_ref2, _ref3) {
          var pristine = _ref2.pristine,
              invalid = _ref2.invalid;
          var loading = _ref3.loading;
          return [{
            text: 'Reset',
            type: 'reset',
            disabled: pristine || loading
          }, {
            text: 'Update',
            type: 'submit',
            disabled: pristine || invalid || loading
          }];
        }
      }
    }
  });
};

var passwordFormFields = {
  current: UserAccountView_objectSpread({
    label: 'Current Password',
    type: 'password'
  }, UserAccountView_required, {
    fullWidth: true,
    validate: validPassword
  }),
  password: UserAccountView_objectSpread({
    label: 'New Password',
    type: 'password'
  }, UserAccountView_required, {
    fullWidth: true,
    validate: validPassword
  }),
  passwordConfirm: UserAccountView_objectSpread({
    label: 'Confirmation',
    type: 'password'
  }, UserAccountView_required, {
    fullWidth: true,
    validate: function validate() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var vals = arguments.length > 1 ? arguments[1] : undefined;
      if (val !== vals.password) return 'Passwords don\'t match';
    }
  }),
  actions: {
    buttons: function buttons(_ref4, _ref5) {
      var pristine = _ref4.pristine,
          invalid = _ref4.invalid,
          _ref4$values = _ref4.values,
          current = _ref4$values.current,
          password = _ref4$values.password,
          passwordConfirm = _ref4$values.passwordConfirm;
      var loading = _ref5.loading;
      return [{
        text: 'Change Password',
        type: 'submit',
        loading: loading,
        disabled: pristine || invalid || !current || !password || !passwordConfirm
      }];
    }
  }
};

var UserAccountView_EmailChangeForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmailChangeForm, _React$Component);

  function EmailChangeForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmailChangeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmailChangeForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.mounted = false;
    _this.state = {
      loading: false,
      error: null
    };
    return _this;
  }

  _createClass(EmailChangeForm, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = UserAccountView_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this$props, email, search, navigate, patch, dispatch, loading, query, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.mounted = true;
                _this$props = this.props, email = _this$props.email, search = _this$props.search, navigate = _this$props.navigate, patch = _this$props.patch, dispatch = _this$props.dispatch;
                loading = this.state.loading;
                query = Object(external_querystring_["parse"])(search.slice(1));

                if (!(!query.token || loading)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                this.setState({
                  loading: true,
                  error: null
                });
                _context.prev = 7;
                _context.next = 10;
                return patch('/api/user/email', {
                  body: {
                    email: email,
                    token: query.token
                  }
                });

              case 10:
                user = _context.sent;
                dispatch(setUser(user));

                if (this.mounted) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.setState({
                  loading: false,
                  error: null
                });
                _context.next = 22;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](7);

                if (this.mounted) {
                  _context.next = 21;
                  break;
                }

                return _context.abrupt("return");

              case 21:
                this.setState({
                  loading: false,
                  error: _context.t0.message
                });

              case 22:
                _context.prev = 22;
                navigate('/account');
                return _context.finish(22);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 17, 22, 25]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var email = this.props.email;
      var _this$state = this.state,
          loading = _this$state.loading,
          error = _this$state.error;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(lab_["Alert"], {
        severity: "info"
      }, "Your current email address is\xA0", external_react_default.a.createElement("strong", null, email)), error && external_react_default.a.createElement(lab_["Alert"], {
        severity: "error"
      }, "Something went wrong while changing email address"), external_react_default.a.createElement(ui_["Form"], {
        method: "patch",
        url: "/api/user/email",
        successMessage: "Email sent!",
        errorMessage: "An error occured",
        fields: {
          email: UserAccountView_objectSpread({
            label: 'New Email Address',
            type: 'email'
          }, UserAccountView_required, {
            validate: function validate(emailValue) {
              if ((emailValue || '').trim() === email) {
                return 'You need to use a new email address';
              }

              return user_validators_validMail(emailValue);
            },
            fullWidth: true,
            // eslint-disable-next-line max-len
            helperText: 'A verification email will first be send to this address. The new address will be effective only once verified'
          })
        },
        buttons: function buttons(_ref6, _ref7) {
          var pristine = _ref6.pristine,
              invalid = _ref6.invalid,
              emailValue = _ref6.values.email;
          var formLoading = _ref7.loading;
          return [{
            text: 'Send verification mail',
            type: 'submit',
            disabled: pristine || formLoading || loading || invalid || !emailValue.trim() || emailValue.trim() === email
          }];
        }
      }));
    }
  }]);

  return EmailChangeForm;
}(external_react_default.a.Component);

var UserAccountView_styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: theme.spacing(-1),
      width: 'auto'
    },
    tile: {
      flexGrow: 1,
      minWidth: '33%'
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    }
  };
};

var UserAccountView_AccountView = function AccountView(_ref8) {
  var patch = _ref8.api.patch,
      classes = _ref8.classes,
      user = _ref8.user,
      search = _ref8.location.search,
      navigate = _ref8.history.push,
      dispatch = _ref8.dispatch;
  return external_react_default.a.createElement(core_["Grid"], {
    container: true,
    className: classes.root
  }, external_react_default.a.createElement(core_["Grid"], {
    item: true,
    className: classes.tile,
    xs: 12
  }, external_react_default.a.createElement(core_["Paper"], {
    className: classes.paper,
    "data-testid": "user-profile"
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h4",
    gutterBottom: true
  }, "Profile"), external_react_default.a.createElement(UserAccountView_ProfileForm, UserAccountView_objectSpread({}, user)))), external_react_default.a.createElement(core_["Grid"], {
    item: true,
    className: classes.tile,
    sm: true
  }, external_react_default.a.createElement(core_["Paper"], {
    className: classes.paper,
    "data-testid": "password-change"
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h4",
    gutterBottom: true
  }, "Change Password"), external_react_default.a.createElement(ui_["Form"], {
    method: "post",
    url: "/api/user/password",
    fields: passwordFormFields
  }))), external_react_default.a.createElement(core_["Grid"], {
    item: true,
    className: classes.tile,
    sm: true
  }, external_react_default.a.createElement(core_["Paper"], {
    className: classes.paper,
    "data-testid": "email-change"
  }, external_react_default.a.createElement(core_["Typography"], {
    variant: "h4",
    gutterBottom: true
  }, "Change Email"), external_react_default.a.createElement(UserAccountView_EmailChangeForm, {
    email: user.email,
    patch: patch,
    search: search,
    navigate: navigate,
    dispatch: dispatch
  }))));
};

var mapStateToProps = function mapStateToProps(_ref9) {
  var user = _ref9.user.user;
  return {
    user: user
  };
};
/* harmony default export */ var UserAccountView = (Object(external_react_redux_["connect"])(mapStateToProps)(Object(external_material_ui_styles_["withStyles"])(UserAccountView_styles)(UserAccountView_AccountView)));
// CONCATENATED MODULE: ./src/packages/users/ui/UsersView.jsx





















function UsersView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UsersView_typeof = function _typeof(obj) { return typeof obj; }; } else { UsersView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UsersView_typeof(obj); }

function UsersView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function UsersView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { UsersView_ownKeys(Object(source), true).forEach(function (key) { UsersView_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { UsersView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function UsersView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UsersView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function UsersView_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { UsersView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { UsersView_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function UsersView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UsersView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UsersView_createClass(Constructor, protoProps, staticProps) { if (protoProps) UsersView_defineProperties(Constructor.prototype, protoProps); if (staticProps) UsersView_defineProperties(Constructor, staticProps); return Constructor; }

function UsersView_possibleConstructorReturn(self, call) { if (call && (UsersView_typeof(call) === "object" || typeof call === "function")) { return call; } return UsersView_assertThisInitialized(self); }

function UsersView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UsersView_getPrototypeOf(o) { UsersView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UsersView_getPrototypeOf(o); }

function UsersView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UsersView_setPrototypeOf(subClass, superClass); }

function UsersView_setPrototypeOf(o, p) { UsersView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UsersView_setPrototypeOf(o, p); }






var UsersView_UsersView =
/*#__PURE__*/
function (_React$Component) {
  UsersView_inherits(UsersView, _React$Component);

  function UsersView() {
    var _getPrototypeOf2;

    var _this;

    UsersView_classCallCheck(this, UsersView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = UsersView_possibleConstructorReturn(this, (_getPrototypeOf2 = UsersView_getPrototypeOf(UsersView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.query =
    /*#__PURE__*/
    function () {
      var _ref = UsersView_asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query) {
        var userToken, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userToken = _this.props.userToken;
                url = "/api/users?".concat(Object(external_querystring_["stringify"])({
                  limit: query.pageSize,
                  offset: query.pageSize * query.page,
                  orderDirection: query.orderDirection,
                  orderBy: query.orderBy ? query.orderBy.field : 'updatedAt',
                  search: query.search,
                  filters: JSON.stringify((query.filters || []).map(function (filter) {
                    return UsersView_objectSpread({}, filter, {
                      column: filter.column.field
                    });
                  }))
                }));
                return _context.abrupt("return", Object(ui_["queryAPI"])(url, {
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

  UsersView_createClass(UsersView, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(ui_["Table"], {
        title: "User",
        columns: [{
          title: 'Date',
          filtering: false,
          field: 'updatedAt',
          render: function render(row) {
            return external_react_default.a.createElement(ui_["TimeAgo"], {
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
}(external_react_default.a.Component);

UsersView_UsersView.defaultProps = {
  userToken: null
};

var UsersView_mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$settings = _ref2.settings;
  _ref2$settings = _ref2$settings === void 0 ? {} : _ref2$settings;
  var userToken = _ref2$settings.userToken;
  return {
    userToken: userToken
  };
};

/* harmony default export */ var ui_UsersView = (Object(external_react_redux_["connect"])(UsersView_mapStateToProps)(UsersView_UsersView));
// CONCATENATED MODULE: ./src/packages/users/ui/UserDrawer.jsx



var UserDrawer_UserDrawer = function UserDrawer() {
  return external_react_default.a.createElement(ui_["LayoutDrawerLink"], {
    to: "/account"
  }, "Account");
};

/* harmony default export */ var ui_UserDrawer = (UserDrawer_UserDrawer);
// EXTERNAL MODULE: external "eazin-settings/ui/index"
var index_ = __webpack_require__(52);

// CONCATENATED MODULE: ./src/packages/users/ui/UserDrawerLow.jsx






var UserDrawerLow_UserDrawerLow = function UserDrawerLow(_ref) {
  var dispatch = _ref.dispatch;
  return external_react_default.a.createElement(core_["Button"], {
    fullWidth: true,
    onClick: function onClick() {
      return dispatch(clearUser()) && dispatch(index_["actions"].clearSetting('userToken'));
    }
  }, "Logout");
};

/* harmony default export */ var ui_UserDrawerLow = (Object(external_react_redux_["connect"])(function () {
  return {};
})(UserDrawerLow_UserDrawerLow));
// CONCATENATED MODULE: ./src/packages/users/ui/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return ui_bootstrap; });









var ui_bootstrap = function bootstrap(state, dispatch) {
  return ui_["queryAPI"].get('/api/user/me').then(function (res) {
    if (!res.id) throw new Error('No id');
    dispatch(setUser(res));
  }).catch(function () {
    dispatch(clearUser());
    dispatch(Object(settings_actions["clearSetting"])('userToken'));
  });
};
var routes = [{
  path: '/account',
  View: UserAccountView
}, {
  path: '/users',
  View: ui_UsersView
}, {
  path: '/',
  Drawer: ui_UserDrawer,
  DrawerLow: ui_UserDrawerLow,
  AnonymousView: AnonForms
}];
var store = {
  user: {}
};

var ui_wsBootstrap = function wsBootstrap(socket, dispatch, getState) {
  // eslint-disable-next-line no-console
  console.info('user wsBootstrap', socket, dispatch, getState);
  socket.on('user.update', function (user) {
    return dispatch(setUser(user));
  });
};

/* harmony default export */ var ui = __webpack_exports__["default"] = ({
  routes: routes,
  bootstrap: ui_bootstrap,
  store: store,
  reducers: {
    user: user_reducer
  },
  wsBootstrap: ui_wsBootstrap
});

/***/ })
/******/ ]);
});