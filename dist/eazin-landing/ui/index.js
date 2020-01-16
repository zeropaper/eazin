(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("eazin-landing/ui/index", [], factory);
	else if(typeof exports === 'object')
		exports["eazin-landing/ui/index"] = factory();
	else
		root["eazin-landing/ui/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.trim");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("eazin-core/ui");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.symbol");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys");

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.timers");

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var landing_actions_namespaceObject = {};
__webpack_require__.r(landing_actions_namespaceObject);
__webpack_require__.d(landing_actions_namespaceObject, "toggleBool", function() { return toggleBool; });

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

// CONCATENATED MODULE: ./src/packages/landing/ui/landing.actions.js
// eslint-disable-next-line import/prefer-default-export
var toggleBool = function toggleBool() {
  return {
    type: 'LANDING_TOGGLE_BOOL'
  };
};
// EXTERNAL MODULE: external "core-js/modules/web.timers"
var web_timers_ = __webpack_require__(61);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(13);

// EXTERNAL MODULE: external "eazin-core/ui"
var ui_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.array.concat"
var es_array_concat_ = __webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/es.string.trim"
var es_string_trim_ = __webpack_require__(19);

// CONCATENATED MODULE: ./src/packages/landing/ui/LandingView.Wrapper.jsx







var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      width: '33%',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }
    },
    top: {
      width: 90,
      height: 90,
      borderRadius: 90,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      marginBottom: 0 - (theme.spacing(1) + 45),
      position: 'relative',
      zIndex: 10
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    },
    paperWithTop: {
      paddingTop: 45 + theme.spacing(1)
    }
  };
};

var LandingView_Wrapper_Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      top = _ref.top;
  return external_react_default.a.createElement(core_["GridListTile"], {
    className: classes.root,
    cols: 1
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement(ui_["LoadingFallback"], null)
  }, top && external_react_default.a.createElement(core_["Paper"], {
    className: classes.top
  }, external_react_default.a.createElement("span", null, top)), external_react_default.a.createElement(core_["Paper"], {
    className: "".concat(classes.paper, " ").concat(top ? classes.paperWithTop : '').trim()
  }, children)));
};

LandingView_Wrapper_Wrapper.defaultProps = {
  top: null
};
/* harmony default export */ var LandingView_Wrapper = (Object(styles_["withStyles"])(styles)(LandingView_Wrapper_Wrapper));
// CONCATENATED MODULE: ./src/packages/landing/ui/LandingView.jsx









var LandingView_styles = function styles(theme) {
  return {
    root: {
      marginLeft: theme.spacing(-1),
      marginRight: theme.spacing(-1)
    },
    gridList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }
  };
};

var LandingView_LandingView = function LandingView(_ref) {
  var classes = _ref.classes,
      bool = _ref.bool,
      toggle = _ref.toggle;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: classes.root
  }, external_react_default.a.createElement(core_["GridList"], {
    cellHeight: 160,
    cols: 3,
    spacing: 2,
    className: classes.gridList
  }, external_react_default.a.createElement(ui_["PluginPoint"], {
    wrapIn: LandingView_Wrapper,
    name: "LandingView"
  }))), external_react_default.a.createElement("div", null, external_react_default.a.createElement(core_["Button"], {
    variant: "contained",
    color: "primary",
    onClick: toggle
  }, "Toggle\xA0", bool ? 'yes' : 'no')));
};

var StyledLandingView = Object(styles_["withStyles"])(LandingView_styles)(LandingView_LandingView);

var mapStateToProps = function mapStateToProps(_ref2) {
  var bool = _ref2.landing.bool;
  return {
    bool: !!bool
  };
};

var LandingView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggle: function toggle() {
      setTimeout(function () {
        return dispatch(toggleBool());
      }, 500);
    }
  };
};

/* harmony default export */ var ui_LandingView = (Object(external_react_redux_["connect"])(mapStateToProps, LandingView_mapDispatchToProps)(StyledLandingView));
// CONCATENATED MODULE: ./src/packages/landing/ui/index.js







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-next-line import/no-cycle


var routes = [{
  exact: true,
  path: '/',
  View: ui_LandingView
}];
var store = {
  landing: {}
};

var landing = function landing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LANDING_TOGGLE_BOOL':
      return _objectSpread({}, state, {
        bool: !state.bool
      });

    default:
      return state;
  }
};

/* harmony default export */ var ui = __webpack_exports__["default"] = ({
  routes: routes,
  store: store,
  reducers: {
    landing: landing
  },
  actions: landing_actions_namespaceObject
});

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptor");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.get-own-property-descriptors");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each");

/***/ })

/******/ });
});