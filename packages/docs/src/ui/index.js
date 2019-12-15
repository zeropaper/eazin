import DocsView from /* webpackChunkName: "DocsView" */ './DocsView';
import DocsHeaderTabs from /* webpackChunkName: "DocsHeaderTabs" */ './DocsHeaderTabs';
import DocsDrawer from /* webpackChunkName: "DocsDrawer" */ './DocsDrawer';
import DocsLandingView from /* webpackChunkName: "DocsLandingView" */ './DocsLandingView';

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
