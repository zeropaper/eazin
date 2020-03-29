(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-core/ui/components/Table", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-core/ui/components/Table"] = factory();
	else
		root["eazin-core/ui/components/Table"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 206);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports = require("material-table");

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddBox");

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DeleteOutline");

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SaveAlt");

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FirstPage");

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LastPage");

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewColumn");

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(112);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(113);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(114);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(108);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(115);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(116);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(117);
/* harmony import */ var _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(118);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(119);
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(120);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(109);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(121);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(122);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(123);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(124);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(125);
/* harmony import */ var _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_27__);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















var icons = {
  Add: _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_13___default.a,
  Check: _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_14___default.a,
  Clear: _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_15___default.a,
  Delete: _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_16___default.a,
  DetailPanel: _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22___default.a,
  Edit: _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_17___default.a,
  Export: _material_ui_icons_SaveAlt__WEBPACK_IMPORTED_MODULE_18___default.a,
  Filter: _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_19___default.a,
  FirstPage: _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_20___default.a,
  LastPage: _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_21___default.a,
  NextPage: _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_22___default.a,
  PreviousPage: _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_23___default.a,
  ResetSearch: _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_15___default.a,
  Search: _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_24___default.a,
  SortArrow: _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_25___default.a,
  ThirdStateCheck: _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_26___default.a,
  ViewColumn: _material_ui_icons_ViewColumn__WEBPACK_IMPORTED_MODULE_27___default.a
};

var Table = function Table(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_12___default.a, _objectSpread({
    icons: icons
  }, props));
};

Table.paginationQuerystring = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      pageSize = _ref.pageSize,
      page = _ref.page,
      orderDirection = _ref.orderDirection,
      orderBy = _ref.orderBy,
      search = _ref.search,
      filters = _ref.filters;

  var obj = {};
  if (pageSize) obj.limit = pageSize;
  if (page) obj.offset = pageSize * page;
  if (orderDirection) obj.orderDirection = orderDirection;
  if (orderBy) obj.orderBy = orderBy ? orderBy.field : 'updatedAt';
  if (search) obj.search = search;

  if (filters) {
    var arr = filters.map(function (filter) {
      return _objectSpread({}, filter, {
        column: filter.column.field
      });
    }).filter(Boolean);
    if (arr.length) obj.filters = JSON.stringify(arr);
  }

  return Object(querystring__WEBPACK_IMPORTED_MODULE_11__["stringify"])(obj);
};

Table.icons = icons;
/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.map");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.for-each");

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.search");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ })

/******/ });
});