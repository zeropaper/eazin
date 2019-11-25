import { lazy } from 'react';

// import * as actions from './docs.actions';

const DocsView = lazy(() => import(/* webpackChunkName: "DocsView" */ './DocsView'));
const DocsHeaderTabs = lazy(() => import(/* webpackChunkName: "DocsHeaderTabs" */ './DocsHeaderTabs'));
const DocsDrawer = lazy(() => import(/* webpackChunkName: "DocsDrawer" */ './DocsDrawer'));
const DocsLandingView = lazy(() => import(/* webpackChunkName: "DocsLandingView" */ './DocsLandingView'));

const store = {
  docs: {},
};

const routes = [
  {
    path: '/',
    Drawer: DocsDrawer,
    LandingView: DocsLandingView,
  },
  {
    path: '/docs',
    HeaderTabs: DocsHeaderTabs,
  },
  {
    exact: true,
    path: '/docs',
    View: DocsView,
  },
];

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPSERT_DOCS':
      return action.payload;

    default:
      return state;
  }
};

export default {
  routes,
  store,
  // actions,
  reducers: {
    docs: reducer,
  },
};
