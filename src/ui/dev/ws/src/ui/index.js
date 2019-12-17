/* eslint-disable import/no-extraneous-dependencies */
import io from 'socket.io-client';

// import logger from 'eazin-ui/src/core/util/logger';

const logger = () => () => {};
const log = logger('WS', 'blue');

const wsBootstrap = (socket, dispatch, getState) => {
  // standard socket.io events
  [
    'connect',
    'connect_error',
    'connect_timeout',
    'error',
    'disconnect',
    'reconnect',
    'reconnect_attempt',
    'reconnecting',
    'reconnect_error',
    'reconnect_failed',
    // 'ping',
    // 'pong',
  ].forEach((evtName) => socket.on(evtName, () => {
    log(`event "${evtName}"`);
    const { ws: { status } } = getState();

    if (status !== socket.connected) {
      dispatch({ type: 'SET_WS_STATUS', payload: socket.connected });
    }
  }));
};

const bootstrap = ({
  settings: { userToken } = {},
}, dispatch, getState, plugins) => {
  log('bootstrap ws', !!userToken);
  if (!userToken) return;
  const socket = io();

  socket.on('check', (payload, done) => done());

  Object.keys(plugins).forEach((name) => {
    if (typeof plugins[name].wsBootstrap !== 'function') return;
    const plugin = plugins[name].wsBootstrap;
    plugin(socket, dispatch, getState);
  });
};

export default {
  reducers: {
    ws: (state = {}, action) => {
      switch (action.type) {
        case 'SET_WS_STATUS':
          return {
            ...state,
            status: action.payload,
          };

        default:
          return state;
      }
    },
  },

  bootstrap,

  wsBootstrap,
};
