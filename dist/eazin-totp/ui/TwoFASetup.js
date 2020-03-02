(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-totp/ui/TwoFASetup", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-totp/ui/TwoFASetup"] = factory();
	else
		root["eazin-totp/ui/TwoFASetup"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 230);
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

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_16__);














function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






var styles = function styles(theme) {
  return {
    root: {},
    qrContent: {
      maxWidth: 450,
      margin: "".concat(theme.spacing(2), "px auto"),
      textAlign: 'center'
    },
    alert: {
      maxWidth: 450,
      margin: "0 auto ".concat(theme.spacing(2), "px auto")
    },
    qrCode: {
      background: 'white',
      maxWidth: '65vw',
      margin: 'auto'
    }
  };
};

var SetupAlert = function SetupAlert(_ref) {
  var setup = _ref.setup,
      error = _ref.error,
      className = _ref.className;
  return error && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: className,
    severity: "error"
  }, error.message) || (setup ? react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: className,
    severity: "info"
  }, "Two-factor authentication is setup") : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: className,
    severity: "warning"
  }, "Two-factor authentication is not setup"));
};

var TwoFASetupForm = /*#__PURE__*/function (_React$Component) {
  _inherits(TwoFASetupForm, _React$Component);

  function TwoFASetupForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TwoFASetupForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TwoFASetupForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      setup: false,
      info: null,
      error: null,
      backupCodes: null
    };

    _this.clearSetup = function () {
      var del = _this.props.api.delete;
      del('/api/totp').then(function () {
        return _this.setState({
          error: null,
          setup: false
        });
      }).catch(function (err) {
        return _this.setState({
          error: err,
          setup: false
        });
      });
    };

    _this.requestSetup = function () {
      return _this.setState({
        info: null,
        setup: false,
        error: null
      }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var post;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                post = _this.props.api.post;
                _context.prev = 1;
                _context.t0 = _this;
                _context.next = 5;
                return post('/api/totp/setup');

              case 5:
                _context.t1 = _context.sent;
                _context.t2 = {
                  info: _context.t1,
                  setup: false,
                  error: null
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t3 = _context["catch"](1);

                _this.setState({
                  info: null,
                  setup: false,
                  error: _context.t3
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      })));
    };

    _this.verifyCode = function (evt) {
      evt.preventDefault();
      var post = _this.props.api.post;
      var form = evt.target;
      var code = form.querySelector('[name="code"]').value;
      post('/api/totp/verify', {
        body: {
          code: code
        }
      }).then(function (_ref3) {
        var backupCodes = _ref3.backupCodes;
        return _this.setState({
          setup: true,
          backupCodes: backupCodes
        });
      }).catch(function (err) {
        return _this.setState({
          error: err
        });
      });
    };

    return _this;
  }

  _createClass(TwoFASetupForm, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var get, setup;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                get = this.props.api.get;
                _context2.prev = 1;
                _context2.next = 4;
                return get('/api/totp/setup');

              case 4:
                setup = _context2.sent;
                this.setState({
                  setup: setup
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                this.setState({
                  setup: false,
                  error: _context2.t0
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          info = _this$state.info,
          setup = _this$state.setup,
          error = _this$state.error,
          backupCodes = _this$state.backupCodes;
      var _this$props = this.props,
          Wrapper = _this$props.wrapIn,
          classes = _this$props.classes;
      var content = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        variant: "contained",
        className: classes.processButton,
        onClick: this.requestSetup,
        "data-testid": "totp-setup-button"
      }, "Setup two-factor authentication");

      if (backupCodes) {
        content = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
          component: "div"
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
          gutterBottom: true,
          component: "p",
          variant: "body1"
        }, "Store these backup codes in a safe place.", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", null), "You may use them if you lose the device used for authentication."), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("ol", {
          "data-testid": "totp-backup-codes"
        }, backupCodes.map(function (bCode) {
          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("li", {
            key: bCode
          }, bCode);
        })));
      } else if (error || setup) {
        content = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
          variant: "contained",
          className: classes.processButton,
          onClick: this.clearSetup,
          "data-testid": "totp-clear-setup"
        }, "Clear two-factor authentication");
      } else if (info) {
        content = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
          className: classes.qrContent
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
          gutterBottom: true,
          component: "p",
          variant: "body1"
        }, "Scan this QR code with Google Authenticator"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
          className: classes.qrCode,
          src: info.qr64,
          alt: "QR code",
          title: "Scan this QR code with Google Authenticator",
          "data-testid": "totp-qr-code"
        }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
          gutterBottom: true,
          component: "p",
          variant: "body1"
        }, "Or use the following code:", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("code", {
          "data-testid": "totp-secret"
        }, info.secret), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("br", null), "And then verify the setup with a generated code."), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("form", {
          onSubmit: this.verifyCode,
          className: classes.codeForm
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["TextField"], {
          "data-testid": "totp-code-verif-field",
          required: true,
          label: "Code",
          name: "code"
        }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
          "data-testid": "totp-code-verif-submit",
          color: "primary",
          variant: "contained",
          type: "submit"
        }, "Verify setup")));
      }

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Wrapper, {
        title: "Two-factors authentication",
        "data-testid": "totp-setup"
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(SetupAlert, {
        setup: !!setup,
        error: error,
        className: classes.alert
      }), content);
    }
  }]);

  return TwoFASetupForm;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["withStyles"])(styles)(TwoFASetupForm));

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator");

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.iterator");

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

module.exports = require("core-js/modules/es.string.iterator");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(157);


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-prototype-of");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.set-prototype-of");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ })

/******/ });
});