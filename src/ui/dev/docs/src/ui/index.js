import DocsView from './DocsView';
import DocsHeaderTabs from './DocsHeaderTabs';
import DocsDrawer from './DocsDrawer';
import DocsLandingView from './DocsLandingView';

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
