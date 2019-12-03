(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[28],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var log = Object(_core_util_logger__WEBPACK_IMPORTED_MODULE_1__["default"])('WS', 'blue');

var wsBootstrap = function wsBootstrap(socket, dispatch, getState) {
  // standard socket.io events
  ['connect', 'connect_error', 'connect_timeout', 'error', 'disconnect', 'reconnect', 'reconnect_attempt', 'reconnecting', 'reconnect_error', 'reconnect_failed' // 'ping',
  // 'pong',
  ].forEach(function (evtName) {
    return socket.on(evtName, function () {
      log("event \"".concat(evtName, "\""));

      var _getState = getState(),
          status = _getState.ws.status;

      if (status !== socket.connected) {
        dispatch({
          type: 'SET_WS_STATUS',
          payload: socket.connected
        });
      }
    });
  });
};

var bootstrap = function bootstrap(_ref, dispatch, getState, plugins) {
  var _ref$settings = _ref.settings;
  _ref$settings = _ref$settings === void 0 ? {} : _ref$settings;
  var userToken = _ref$settings.userToken;
  log('bootstrap ws', !!userToken);
  if (!userToken) return;
  var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()();
  socket.on('check', function (payload, done) {
    return done();
  });
  Object.keys(plugins).forEach(function (name) {
    if (typeof plugins[name].wsBootstrap !== 'function') return;
    var plugin = plugins[name].wsBootstrap;
    plugin(socket, dispatch, getState);
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  reducers: {
    ws: function ws() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case 'SET_WS_STATUS':
          return _objectSpread({}, state, {
            status: action.payload
          });

        default:
          return state;
      }
    }
  },
  bootstrap: bootstrap,
  wsBootstrap: wsBootstrap
});

/***/ })

}]);
//# sourceMappingURL=plugin.ws.js.map