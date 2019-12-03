(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[22],{

/***/ 17:
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout_Drawer_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);




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

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(49);
exports.encode = exports.stringify = __webpack_require__(50);


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var icons = {
  Add: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["AddBox"],
  Check: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Check"],
  Clear: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Clear"],
  Delete: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["DeleteOutline"],
  DetailPanel: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ChevronRight"],
  Edit: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Edit"],
  Export: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["SaveAlt"],
  Filter: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FilterList"],
  FirstPage: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FirstPage"],
  LastPage: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["LastPage"],
  NextPage: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ChevronRight"],
  PreviousPage: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ChevronLeft"],
  ResetSearch: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Clear"],
  Search: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Search"],
  SortArrow: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowDownward"],
  ThirdStateCheck: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Remove"],
  ViewColumn: _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ViewColumn"]
};

var Table = function Table(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_1___default.a, _objectSpread({
    icons: icons
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



var TimeAgo = function TimeAgo(_ref) {
  var date = _ref.date,
      component = _ref.component;
  if (!date) return null;
  var mom = moment__WEBPACK_IMPORTED_MODULE_1___default()(date);

  if (component === 'div') {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      title: mom.format('YYYY-MM-DD HH:mm')
    }, mom.fromNow());
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: mom.format('YYYY-MM-DD HH:mm')
  }, mom.fromNow());
};

TimeAgo.defaultProps = {
  date: null,
  component: null
};
/* harmony default export */ __webpack_exports__["default"] = (TimeAgo);

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/core/plugins.propTypes.js
var plugins_propTypes = __webpack_require__(17);

// EXTERNAL MODULE: ./src/components/Layout/Layout.Drawer.Link.jsx
var Layout_Drawer_Link = __webpack_require__(22);

// CONCATENATED MODULE: ./src/plugins/clients/ClientsDrawer.jsx




var ClientsDrawer_ClientsDrawer = function ClientsDrawer() {
  return external_react_default.a.createElement(Layout_Drawer_Link["default"], {
    to: "/clients"
  }, "Clients");
};

/* harmony default export */ var clients_ClientsDrawer = (ClientsDrawer_ClientsDrawer);
// CONCATENATED MODULE: ./src/plugins/clients/ClientsLandingView.jsx



var ClientsLandingView_ClientsLandingView = function ClientsLandingView(props) {
  // eslint-disable-next-line no-console
  // console.info('ClientsLandingView props', props);
  var WrapIn = props.wrapIn;
  return external_react_default.a.createElement(WrapIn, null, "Landing Clients");
};

/* harmony default export */ var clients_ClientsLandingView = (ClientsLandingView_ClientsLandingView);
// EXTERNAL MODULE: /home/vale/Repos/eazin/node_modules/querystring-es3/index.js
var querystring_es3 = __webpack_require__(37);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: ./src/core/util/queryAPI.js
var queryAPI = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/Table.jsx
var Table = __webpack_require__(39);

// EXTERNAL MODULE: ./src/components/TimeAgo.jsx
var TimeAgo = __webpack_require__(40);

// CONCATENATED MODULE: ./src/plugins/clients/ClientsView.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ClientsView_ClientsView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClientsView, _React$Component);

  function ClientsView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ClientsView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClientsView)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      hiddenColumns: ['updatedAt'],
      // eslint-disable-next-line
      data: []
    };

    _this.handleHideColumn = function (field) {
      return _this.setState(function (prev) {
        return {
          hiddenColumns: [].concat(_toConsumableArray(prev.hiddenColumns), [field])
        };
      });
    };

    _this.handleShowColumn = function (field) {
      return _this.setState(function (prev) {
        return {
          hiddenColumns: prev.hiddenColumns.filter(function (name) {
            return name !== field;
          })
        };
      });
    };

    _this.query = function _callee(query) {
      var url;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "/api/clients?".concat(Object(querystring_es3["stringify"])({
                limit: query.pageSize,
                offset: query.pageSize * query.page,
                orderDirection: query.orderDirection,
                orderBy: query.orderBy,
                search: query.search,
                filters: JSON.stringify((query.filters || []).map(function (filter) {
                  return _objectSpread({}, filter, {
                    column: filter.column.field
                  });
                }))
              }));
              return _context.abrupt("return", Object(queryAPI["default"])(url, {
                headers: _this.queryHeaders
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    _this.handleRowAdd = function (newData) {
      return Object(queryAPI["default"])('/api/clients', {
        method: 'POST',
        headers: _this.queryHeaders,
        body: JSON.stringify(newData)
      });
    };

    _this.handleRowUpdate = function (_ref) {
      var id = _ref.id,
          name = _ref.name,
          redirectURI = _ref.redirectURI;
      return Object(queryAPI["default"])("/api/clients/".concat(id), {
        method: 'PATCH',
        headers: _this.queryHeaders,
        body: JSON.stringify({
          name: name,
          redirectURI: redirectURI
        })
      });
    };

    _this.handleRowDelete = function (_ref2) {
      var id = _ref2.id;
      return Object(queryAPI["default"])("/api/clients/".concat(id), {
        method: 'DELETE',
        headers: _this.queryHeaders
      });
    };

    _this.renderdetailPanel = function (rowData) {
      var _console;

      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      return external_react_default.a.createElement("div", null, (_console = console).info.apply(_console, ['details', rowData].concat(rest)));
    };

    return _this;
  }

  _createClass(ClientsView, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Table["default"], {
        title: "API Clients",
        columns: this.columns,
        data: this.query,
        editable: {
          onRowAdd: this.handleRowAdd,
          onRowUpdate: this.handleRowUpdate,
          onRowDelete: this.handleRowDelete
        },
        options: {
          search: false,
          fAddiltering: true,
          sorting: true,
          pageSize: 10,
          pageSizeOptions: [10, 20, 50, 100]
        },
        detailPanel: this.renderdetailPanel
      });
    }
  }, {
    key: "columns",
    get: function get() {
      var hiddenColumns = this.state.hiddenColumns;
      return [{
        title: 'Name',
        field: 'name'
      }, {
        title: 'Redirect URI',
        field: 'redirectURI'
      }, {
        editable: 'never',
        title: 'Created',
        filtering: false,
        field: 'createdAt',
        render: function render(row) {
          return external_react_default.a.createElement(TimeAgo["default"], {
            date: row && row.createdAt
          });
        }
      }, {
        editable: 'never',
        title: 'Updated',
        filtering: false,
        field: 'updatedAt',
        render: function render(row) {
          return external_react_default.a.createElement(TimeAgo["default"], {
            date: row && row.updatedAt
          });
        }
      }].filter(function (_ref3) {
        var field = _ref3.field;
        return !hiddenColumns.includes(field);
      });
    }
  }, {
    key: "queryHeaders",
    get: function get() {
      return {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // eslint-disable-next-line react/destructuring-assignment
        Authorization: "Bearer ".concat(this.props.userToken)
      };
    }
  }]);

  return ClientsView;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(_ref4) {
  var _ref4$settings = _ref4.settings;
  _ref4$settings = _ref4$settings === void 0 ? {} : _ref4$settings;
  var userToken = _ref4$settings.userToken;
  return {
    // clients,
    userToken: userToken
  };
};

/* harmony default export */ var clients_ClientsView = (Object(external_react_redux_["connect"])(mapStateToProps)(ClientsView_ClientsView));
// CONCATENATED MODULE: ./src/plugins/clients/index.js
function clients_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function clients_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { clients_ownKeys(source, true).forEach(function (key) { clients_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { clients_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function clients_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-next-line max-len




var wsBootstrap = function wsBootstrap(socket, dispatch, getState) {
  // eslint-disable-next-line no-console
  console.info('clients wsBootstrap', socket, dispatch, getState); // eslint-disable-next-line no-console

  socket.on('clients.message', function (info) {
    return console.info('clients.message', info);
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'UPSERT_CLIENT':
      if (!action.payload.id) return state;
      return clients_objectSpread({}, state, clients_defineProperty({}, action.payload.id, clients_objectSpread({}, state[action.payload.id] || {}, {}, action.payload)));

    case 'UPSERT_CLIENTS':
      return (Array.isArray(action.payload) ? action.payload : Object.values(action.payload)).reduce(function (acc, payload) {
        return reducer(acc, {
          type: 'UPSERT_CLIENT',
          payload: payload
        });
      }, state);

    default:
      return state;
  }
};

var routes = [{
  path: '/',
  Drawer: clients_ClientsDrawer,
  LandingView: clients_ClientsLandingView
}, {
  exact: true,
  path: '/clients',
  View: clients_ClientsView
}];
/* harmony default export */ var clients = __webpack_exports__["default"] = ({
  wsBootstrap: wsBootstrap,
  reducers: {
    activities: reducer
  },
  routes: routes
});

/***/ })

}]);
//# sourceMappingURL=plugin.clients.js.map