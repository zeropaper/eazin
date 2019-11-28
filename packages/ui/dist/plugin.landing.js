(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[21],{

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var landing_actions_namespaceObject = {};
__webpack_require__.r(landing_actions_namespaceObject);
__webpack_require__.d(landing_actions_namespaceObject, "toggleBool", function() { return toggleBool; });

// CONCATENATED MODULE: ./src/plugins/landing/landing.actions.js
// eslint-disable-next-line import/prefer-default-export
var toggleBool = function toggleBool() {
  return {
    type: 'PLUGIN_A_TOGGLE_BOOL'
  };
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/PluginPoint.jsx
var PluginPoint = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/LoadingFallback.jsx
var LoadingFallback = __webpack_require__(10);

// CONCATENATED MODULE: ./src/plugins/landing/LandingView.Wrapper.jsx





var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      width: '33%'
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(1)
    }
  };
};

var LandingView_Wrapper_Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  return external_react_default.a.createElement(core_["GridListTile"], {
    className: classes.root,
    cols: 1
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement(LoadingFallback["default"], null)
  }, external_react_default.a.createElement(core_["Paper"], {
    className: classes.paper
  }, children)));
};

/* harmony default export */ var LandingView_Wrapper = (Object(styles_["withStyles"])(styles)(LandingView_Wrapper_Wrapper));
// CONCATENATED MODULE: ./src/plugins/landing/LandingView.jsx








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
  }, external_react_default.a.createElement(PluginPoint["default"], {
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

/* harmony default export */ var landing_LandingView = (Object(external_react_redux_["connect"])(mapStateToProps, LandingView_mapDispatchToProps)(StyledLandingView));
// CONCATENATED MODULE: ./src/plugins/landing/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-next-line import/no-cycle


var routes = [{
  exact: true,
  path: '/',
  View: landing_LandingView
}];
var store = {
  landing: {}
};

var landing = function landing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'PLUGIN_A_TOGGLE_BOOL':
      return _objectSpread({}, state, {
        bool: !state.bool
      });

    default:
      return state;
  }
};

/* harmony default export */ var plugins_landing = __webpack_exports__["default"] = ({
  routes: routes,
  store: store,
  reducers: {
    landing: landing
  },
  actions: landing_actions_namespaceObject
});

/***/ })

}]);
//# sourceMappingURL=plugin.landing.js.map