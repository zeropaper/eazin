import * as actions from './landing.actions';

// eslint-disable-next-line import/no-cycle
import LandingView from /* webpackChunkName: "LandingView" */ './LandingView';

const routes = [
  {
    exact: true,
    path: '/',
    View: LandingView,
  },
];

const store = {
  landing: {},
};

const landing = (state = {}, action) => {
  switch (action.type) {
    case 'LANDING_TOGGLE_BOOL':
      return {
        ...state,
        bool: !state.bool,
      };

    default:
      return state;
  }
};

export default {
  routes,
  store,
  reducers: {
    landing,
  },
  actions,
};
