import { lazy } from 'react';

import * as actions from './landing.actions';

// eslint-disable-next-line import/no-cycle
const LandingView = lazy(() => import(/* webpackChunkName: "LandingView" */ './LandingView'));

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
    case 'PLUGIN_A_TOGGLE_BOOL':
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
