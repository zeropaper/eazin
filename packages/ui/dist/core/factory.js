(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("core/factory", [], factory);
	else if(typeof exports === 'object')
		exports["core/factory"] = factory();
	else
		root["core/factory"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ({

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ucf = function ucf(str) {
  return "".concat(str[0].toUpperCase()).concat(str.slice(1));
};

/* harmony default export */ __webpack_exports__["default"] = (function (singular) {
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
      payload: _objectSpread({}, payload, _defineProperty({}, idKey, id))
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
  }, (_ref3 = {}, _defineProperty(_ref3, "clear".concat(ucfPlural), clear), _defineProperty(_ref3, "remove".concat(ucfSingular), remove), _defineProperty(_ref3, "remove".concat(ucfPlural), removeMany), _defineProperty(_ref3, "upsert".concat(ucfSingular), upsert), _defineProperty(_ref3, "upsert".concat(ucfPlural), upsertMany), _ref3)];
});

/***/ })

/******/ });
});
//# sourceMappingURL=factory.js.map