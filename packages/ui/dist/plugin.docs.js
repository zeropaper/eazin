(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[20],{

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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(15);

// CONCATENATED MODULE: ./src/plugins/docs/docs.actions.js
// eslint-disable-next-line import/prefer-default-export
var getDocs = function getDocs(docs) {
  return {
    type: 'UPSERT_DOCS',
    payload: docs
  };
};
// EXTERNAL MODULE: ./src/core/util/queryAPI.js
var queryAPI = __webpack_require__(7);

// CONCATENATED MODULE: ./src/plugins/docs/DocsView.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var DocsView_DocsView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DocsView, _React$Component);

  function DocsView() {
    _classCallCheck(this, DocsView);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocsView).apply(this, arguments));
  }

  _createClass(DocsView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props, loadDocs, server;

      return regeneratorRuntime.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, loadDocs = _this$props.loadDocs, server = _this$props.docs.server;

              if (server) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return regeneratorRuntime.awrap(loadDocs());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$docs = this.props.docs,
          server = _this$props$docs.server,
          ui = _this$props$docs.ui;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("header", null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h2"
      }, "Documentation")), external_react_default.a.createElement("section", null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h3"
      }, "Plugins"), server && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h4"
      }, "Server"), server.description && external_react_default.a.createElement("div", null, server.description), Object.keys(server.plugins).map(function (name) {
        return external_react_default.a.createElement("div", {
          key: name
        }, external_react_default.a.createElement(core_["Typography"], {
          variant: "h5"
        }, name), server.plugins[name].description && external_react_default.a.createElement("div", null, server.plugins[name].description), server.plugins[name].keys && external_react_default.a.createElement("ul", null, Object.keys(server.plugins[name].keys).map(function (key) {
          return external_react_default.a.createElement("li", {
            key: key
          }, external_react_default.a.createElement("strong", null, key), server.plugins[name].keys[key].description && external_react_default.a.createElement("br", null), server.plugins[name].keys[key].description || '');
        })));
      })), ui && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(core_["Typography"], {
        variant: "h4"
      }, "Browser"), Object.keys(ui.plugins).map(function (name) {
        return external_react_default.a.createElement("div", {
          key: name
        }, external_react_default.a.createElement(core_["Typography"], {
          variant: "h5"
        }, name), external_react_default.a.createElement("div", null, ui.plugins[name].description || ''));
      }))));
    }
  }]);

  return DocsView;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var docs = _ref.docs;
  return {
    docs: docs
  };
};

var DocsView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadDocs: function loadDocs() {
      return regeneratorRuntime.async(function loadDocs$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = dispatch;
              _context2.t1 = getDocs;
              _context2.next = 4;
              return regeneratorRuntime.awrap(Object(queryAPI["default"])('/api/docs', {
                headers: {
                  'content-type': 'application/json'
                }
              }));

            case 4:
              _context2.t2 = _context2.sent;
              _context2.t3 = (0, _context2.t1)(_context2.t2);
              return _context2.abrupt("return", (0, _context2.t0)(_context2.t3));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  };
};

/* harmony default export */ var docs_DocsView = (Object(external_react_redux_["connect"])(mapStateToProps, DocsView_mapDispatchToProps)(DocsView_DocsView));
// CONCATENATED MODULE: ./src/plugins/docs/DocsHeaderTabs.jsx



var DocsHeaderTabs_DocsHeaderTabs = function DocsHeaderTabs() {
  return external_react_default.a.createElement("div", null, "HeaderTabs");
};

/* harmony default export */ var docs_DocsHeaderTabs = (DocsHeaderTabs_DocsHeaderTabs);
// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(20);

// CONCATENATED MODULE: ./src/plugins/docs/DocsDrawer.jsx




var DocsDrawer_DcosDrawer = function DcosDrawer() {
  return external_react_default.a.createElement(Layout_Drawer_Link["default"], {
    to: "/docs"
  }, "Docs");
};

/* harmony default export */ var DocsDrawer = (DocsDrawer_DcosDrawer);
// CONCATENATED MODULE: ./src/plugins/docs/DocsLandingView.jsx



var DocsLandingView_DocsLandingView = function DocsLandingView(props) {
  // eslint-disable-next-line no-console
  // console.info('DocsLandingView props', props);
  var WrapIn = props.wrapIn;
  return external_react_default.a.createElement(WrapIn, null, "Landing View A");
};

/* harmony default export */ var docs_DocsLandingView = (DocsLandingView_DocsLandingView);
// CONCATENATED MODULE: ./src/plugins/docs/index.js




var store = {
  docs: {}
};
var routes = [{
  path: '/',
  Drawer: DocsDrawer,
  LandingView: docs_DocsLandingView
}, {
  path: '/docs',
  HeaderTabs: docs_DocsHeaderTabs
}, {
  exact: true,
  path: '/docs',
  View: docs_DocsView
}];

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPSERT_DOCS':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ var docs = __webpack_exports__["default"] = ({
  routes: routes,
  store: store,
  // actions,
  reducers: {
    docs: reducer
  }
});

/***/ })

}]);
//# sourceMappingURL=plugin.docs.js.map