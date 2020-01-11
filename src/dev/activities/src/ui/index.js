
import ActivityDrawer from /* webpackChunkName: "ActivityDrawer" */ './ActivityDrawer';
// eslint-disable-next-line max-len
import ActivityLandingView from /* webpackChunkName: "ActivityLandingView" */ './ActivityLandingView';
import ActivityView from /* webpackChunkName: "ActivityView" */ './ActivityView';


const wsBootstrap = (socket, dispatch, getState) => {
  // eslint-disable-next-line no-console
  console.info('activity wsBootstrap', socket, dispatch, getState);
  // eslint-disable-next-line no-console
  socket.on('activity.message', (info) => console.info('activity.message', info));
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPSERT_ACTIVITY':
      if (!action.payload.id) return state;
      return {
        ...state,
        [action.payload.id]: {
          ...(state[action.payload.id] || {}),
          ...action.payload,
        },
      };

    case 'UPSERT_ACTIVITIES':
      return (Array.isArray(action.payload)
        ? action.payload
        : Object.values(action.payload))
        .reduce((acc, payload) => reducer(acc, {
          type: 'UPSERT_ACTIVITY',
          payload,
        }), state);

    default:
      return state;
  }
};

const routes = [
  {
    path: '/',
    Drawer: ActivityDrawer,
    LandingView: ActivityLandingView,
  },
  {
    exact: true,
    path: '/activity',
    View: ActivityView,
  },
];

export default {
  wsBootstrap,
  reducers: {
    activities: reducer,
  },
  routes,
};
