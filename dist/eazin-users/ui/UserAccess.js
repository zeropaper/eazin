(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-users/ui/UserAccess", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-users/ui/UserAccess"] = factory();
	else
		root["eazin-users/ui/UserAccess"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 249);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 115:
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

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user.user;
  return {
    user: user
  };
};
/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(Comp);
});

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(145);
/* harmony import */ var _user_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);



var UserAccess = Object(_user_connector__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_ref) {
  var user = _ref.user,
      render = _ref.render,
      renderAdmin = _ref.renderAdmin,
      renderUnverified = _ref.renderUnverified,
      renderForRole = _ref.renderForRole;
  if (!user || !user.isVerified) return renderUnverified && renderUnverified() || null;
  if (typeof renderAdmin === 'function' && user.isAdmin) return renderAdmin() || null;
  if (renderForRole) return renderForRole(user.roles) || null;
  return render() || null;
});
UserAccess.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(_user_propTypes__WEBPACK_IMPORTED_MODULE_2__["default"]),
  render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  renderAdmin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  renderUnverified: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  renderForRole: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
UserAccess.defaultProps = {
  user: null,
  renderAdmin: null,
  renderUnverified: null,
  renderForRole: null
};
UserAccess.displayName = 'UserAccess';
/* harmony default export */ __webpack_exports__["default"] = (UserAccess);

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(162);


/***/ })

/******/ });
});