(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-users/ui/UserAccountView", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-users/ui/UserAccountView"] = factory();
	else
		root["eazin-users/ui/UserAccountView"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 241);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var UserPropTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  firstName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  lastName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  isAdmin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  isVerified: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserPropTypes);

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string");

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultButtons", function() { return defaultButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileForm", function() { return ProfileForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChangeForm", function() { return PasswordChangeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailChangeForm", function() { return EmailChangeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _user_validators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31);
/* harmony import */ var _user_propTypes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(105);
/* harmony import */ var _UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(97);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }











function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var defaultButtons = function defaultButtons(_ref) {
  var pristine = _ref.pristine,
      invalid = _ref.invalid,
      loading = _ref.loading;
  return [{
    text: 'Reset',
    type: 'reset',
    disabled: pristine || loading
  }, {
    text: 'Update',
    type: 'submit',
    disabled: pristine || invalid || loading
  }];
};
var required = {
  required: true,
  validateOnChange: true
}; // eslint-disable-next-line react/prop-types

var ProfileForm = function ProfileForm(_ref2) {
  var firstName = _ref2.firstName,
      lastName = _ref2.lastName,
      updateStoreUser = _ref2.updateStoreUser;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["Form"], {
    key: "".concat(firstName, "-").concat(lastName),
    method: "patch",
    url: "/api/user",
    resetOnSuccess: true,
    fields: {
      firstName: _objectSpread(_objectSpread({
        label: 'First Name'
      }, required), {}, {
        fullWidth: true,
        initialValue: firstName
      }),
      lastName: _objectSpread(_objectSpread({
        label: 'Last Name'
      }, required), {}, {
        fullWidth: true,
        initialValue: lastName
      })
    },
    buttons: defaultButtons,
    onSuccess: updateStoreUser
  });
};
var PasswordChangeForm = function PasswordChangeForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["Form"], {
    method: "post",
    url: "/api/user/password",
    fields: {
      current: _objectSpread(_objectSpread({
        label: 'Current Password',
        type: 'password'
      }, required), {}, {
        fullWidth: true,
        validate: _user_validators__WEBPACK_IMPORTED_MODULE_16__["validPassword"]
      }),
      password: _objectSpread(_objectSpread({
        label: 'New Password',
        type: 'password'
      }, required), {}, {
        fullWidth: true,
        validate: _user_validators__WEBPACK_IMPORTED_MODULE_16__["validPassword"]
      }),
      passwordConfirm: _objectSpread(_objectSpread({
        label: 'Confirmation',
        type: 'password'
      }, required), {}, {
        fullWidth: true,
        validate: function validate() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var vals = arguments.length > 1 ? arguments[1] : undefined;
          if (val !== vals.password) return 'Passwords don\'t match';
        }
      })
    },
    buttons: function buttons(_ref3) {
      var pristine = _ref3.pristine,
          invalid = _ref3.invalid,
          loading = _ref3.loading,
          _ref3$values = _ref3.values,
          current = _ref3$values.current,
          passwordConfirm = _ref3$values.passwordConfirm;
      return [{
        text: 'Reset',
        type: 'reset',
        disabled: pristine || loading
      }, {
        text: 'Update',
        type: 'submit',
        disabled: pristine || invalid || loading || !current || !passwordConfirm
      }];
    }
  });
};
var EmailChangeForm = /*#__PURE__*/function (_React$Component) {
  _inherits(EmailChangeForm, _React$Component);

  var _super = _createSuper(EmailChangeForm);

  function EmailChangeForm() {
    var _this;

    _classCallCheck(this, EmailChangeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      error: null
    });

    return _this;
  }

  _createClass(EmailChangeForm, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this$props, email, search, navigate, patch, dispatch, loading, query, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.mounted = true;
                _this$props = this.props, email = _this$props.email, search = _this$props.search, navigate = _this$props.navigate, patch = _this$props.patch, dispatch = _this$props.dispatch;
                loading = this.state.loading;
                query = Object(querystring__WEBPACK_IMPORTED_MODULE_13__["parse"])(search.slice(1));

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
                dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_17__["setUser"])(user));

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default.a, {
        severity: "info"
      }, "Your current email address is\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", null, email)), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default.a, {
        severity: "error"
      }, "Something went wrong while changing email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["Form"], {
        method: "patch",
        url: "/api/user/email",
        successMessage: "Email sent!",
        errorMessage: "An error occured",
        fields: {
          email: _objectSpread(_objectSpread({
            label: 'New Email Address',
            type: 'email'
          }, required), {}, {
            validate: function validate(emailValue) {
              if ((emailValue || '').trim() === email) {
                return 'You need to use a new email address';
              }

              return Object(_user_validators__WEBPACK_IMPORTED_MODULE_16__["validMail"])(emailValue);
            },
            fullWidth: true,
            // eslint-disable-next-line max-len
            helperText: 'A verification email will first be send to this address. The new address will be effective only once verified'
          })
        },
        buttons: function buttons(_ref4) {
          var pristine = _ref4.pristine,
              invalid = _ref4.invalid,
              emailValue = _ref4.values.email,
              formLoading = _ref4.loading;
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
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

var AccountView = function AccountView(_ref5) {
  var patch = _ref5.api.patch,
      classes = _ref5.classes,
      user = _ref5.user,
      search = _ref5.location.search,
      navigate = _ref5.history.push,
      dispatch = _ref5.dispatch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    container: true,
    cols: 3,
    spacing: 2,
    className: classes.grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: "Profile",
    "data-testid": "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ProfileForm, {
    firstName: user.firstName,
    lastName: user.lastName,
    updateStoreUser: function updateStoreUser(data) {
      return dispatch(Object(_user_actions__WEBPACK_IMPORTED_MODULE_17__["setUser"])(data));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: "Password",
    "data-testid": "password-change"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(PasswordChangeForm, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: "Email",
    "data-testid": "email-change"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(EmailChangeForm, {
    email: user.email,
    patch: patch,
    search: search,
    navigate: navigate,
    dispatch: dispatch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_14__["PluginPoint"], {
    wrapIn: _UserAccountView_Wrapper__WEBPACK_IMPORTED_MODULE_19__["default"],
    name: "AccountView"
  })));
};

AccountView.pageTitle = 'Your account';
var mapStateToProps = function mapStateToProps(_ref6) {
  var user = _ref6.user.user;
  return {
    user: user
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps)(Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(-1),
      marginLeft: theme.spacing(-1),
      marginRight: theme.spacing(-1)
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: 0,
      maxWidth: '100%'
    }
  };
})(AccountView)));

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(161);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMail", function() { return validMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPassword", function() { return validPassword; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator_es_lib_isEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
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

/***/ 31:
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

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("eazin-core/ui");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = require("validator/es/lib/isEmail");

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.search");

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice");

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var eazin_core_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return {
    root: _defineProperty({
      flexGrow: 1,
      width: 'auto',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column'
    }, theme.breakpoints.up('md'), {
      width: '33%'
    }),
    paper: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }
  };
};

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      title = _ref.title,
      testId = _ref['data-testid'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    className: classes.root,
    cols: 1,
    "data-testid": testId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "h4",
    gutterBottom: true
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(eazin_core_ui__WEBPACK_IMPORTED_MODULE_4__["LoadingFallback"], null)
  }, children));
};

Wrapper.defaultProps = {
  title: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Wrapper));

/***/ })

/******/ });
});