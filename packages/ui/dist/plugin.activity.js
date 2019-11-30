(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[19],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export View */
/* unused harmony export HeaderTabs */
/* unused harmony export Drawer */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var View = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }),
  match: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
  })
};
var HeaderTabs = _objectSpread({}, View);
var Drawer = _objectSpread({}, View);

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_Drawer_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);




/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_Layout_Drawer_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function (_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      to = _ref.to;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: classes.menuLink,
    to: to
  }, children);
}));

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(20);

// CONCATENATED MODULE: ./src/plugins/activity/ActivityDrawer.jsx




var ActivityDrawer_ActivityDrawer = function ActivityDrawer() {
  return external_react_default.a.createElement(Layout_Drawer_Link["default"], {
    to: "/activity"
  }, "Activity");
};

/* harmony default export */ var activity_ActivityDrawer = (ActivityDrawer_ActivityDrawer);
// CONCATENATED MODULE: ./src/plugins/activity/ActivityLandingView.jsx



var ActivityLandingView_ActivityLandingView = function ActivityLandingView(props) {
  // eslint-disable-next-line no-console
  // console.info('ActivityLandingView props', props);
  var WrapIn = props.wrapIn;
  return external_react_default.a.createElement(WrapIn, null, "Landing View A");
};

/* harmony default export */ var activity_ActivityLandingView = (ActivityLandingView_ActivityLandingView);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/plugins/activity/activity.actions.js
var upsertActivity = function upsertActivity(payload) {
  return {
    type: 'UPSERT_ACTIVITY',
    payload: payload
  };
};
var upsertActivities = function upsertActivities(payload) {
  return {
    type: 'UPSERT_ACTIVITIES',
    payload: payload
  };
};
// EXTERNAL MODULE: ./src/core/util/queryAPI.js
var queryAPI = __webpack_require__(7);

// CONCATENATED MODULE: ./src/plugins/activity/ActivityView.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var ActivityView_ActivityView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActivityView, _React$Component);

  function ActivityView() {
    _classCallCheck(this, ActivityView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActivityView).apply(this, arguments));
  }

  _createClass(ActivityView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props, userToken, dispatch, loaded;

      return regeneratorRuntime.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, userToken = _this$props.userToken, dispatch = _this$props.dispatch;
              _context.next = 3;
              return regeneratorRuntime.awrap(Object(queryAPI["default"])('/api/activities', {
                headers: {
                  'content-type': 'application/json',
                  Accept: 'application/json',
                  Authorization: "Bearer ".concat(userToken)
                }
              }));

            case 3:
              loaded = _context.sent;
              dispatch(upsertActivities(loaded));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      var activities = this.props.activities;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("header", null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h2"
      }, "Activity")), external_react_default.a.createElement("pre", null, JSON.stringify(activities, null, 2)));
    }
  }]);

  return ActivityView;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var activities = _ref.activities,
      _ref$settings = _ref.settings;
  _ref$settings = _ref$settings === void 0 ? {} : _ref$settings;
  var userToken = _ref$settings.userToken;
  return {
    activities: activities,
    userToken: userToken
  };
};

/* harmony default export */ var activity_ActivityView = (Object(external_react_redux_["connect"])(mapStateToProps)(ActivityView_ActivityView));
// CONCATENATED MODULE: ./src/plugins/activity/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-next-line max-len




var wsBootstrap = function wsBootstrap(socket, dispatch, getState) {
  // eslint-disable-next-line no-console
  console.info('activity wsBootstrap', socket, dispatch, getState); // eslint-disable-next-line no-console

  socket.on('activity.message', function (info) {
    return console.info('activity.message', info);
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPSERT_ACTIVITY':
      if (!action.payload.id) return state;
      return _objectSpread({}, state, _defineProperty({}, action.payload.id, _objectSpread({}, state[action.payload.id] || {}, {}, action.payload)));

    case 'UPSERT_ACTIVITIES':
      return (Array.isArray(action.payload) ? action.payload : Object.values(action.payload)).reduce(function (acc, payload) {
        return reducer(acc, {
          type: 'UPSERT_ACTIVITY',
          payload: payload
        });
      }, state);

    default:
      return state;
  }
};

var routes = [{
  path: '/',
  Drawer: activity_ActivityDrawer,
  LandingView: activity_ActivityLandingView
}, {
  exact: true,
  path: '/activity',
  View: activity_ActivityView
}];
/* harmony default export */ var activity = __webpack_exports__["default"] = ({
  wsBootstrap: wsBootstrap,
  reducers: {
    activities: reducer
  },
  routes: routes
});

/***/ })

}]);
//# sourceMappingURL=plugin.activity.js.map