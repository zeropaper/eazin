
import ClientsDrawer from /* webpackChunkName: "ClientsDrawer" */ './ClientsDrawer';
// eslint-disable-next-line max-len
import ClientsLandingView from /* webpackChunkName: "ClientsLandingView" */ './ClientsLandingView';
import ClientsView from /* webpackChunkName: "ClientsView" */ './ClientsView';


const wsBootstrap = (socket, dispatch, getState) => {
  // eslint-disable-next-line no-console
  console.info('clients wsBootstrap', socket, dispatch, getState);
  // eslint-disable-next-line no-console
  socket.on('clients.message', (info) => console.info('clients.message', info));
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPSERT_CLIENT':
      if (!action.payload.id) return state;
      return {
        ...state,
        [action.payload.id]: {
          ...(state[action.payload.id] || {}),
          ...action.payload,
        },
      };

    case 'UPSERT_CLIENTS':
      return (Array.isArray(action.payload)
        ? action.payload
        : Object.values(action.payload))
        .reduce((acc, payload) => reducer(acc, {
          type: 'UPSERT_CLIENT',
          payload,
        }), state);

    default:
      return state;
  }
};

const routes = [
  {
    path: '/',
    Drawer: ClientsDrawer,
    LandingView: ClientsLandingView,
  },
  {
    exact: true,
    path: '/clients',
    View: ClientsView,
  },
];

export default {
  wsBootstrap,
  reducers: {
    activities: reducer,
  },
  routes,
};
