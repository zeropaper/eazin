
import BView from /* webpackChunkName: "BView" */ './BView';
import BAlternateView from /* webpackChunkName: "BAlternateview" */ './BAlternateView';
import AHeaderTabs from /* webpackChunkName: "AHeaderTabs" */ './BHeaderTabs';
import BDrawer from /* webpackChunkName: "BDrawer" */ './BDrawer';
import BLandingView from /* webpackChunkName: "BLandingView" */ './BLandingView';

const routes = [
  {
    path: '/',
    Drawer: BDrawer,
    LandingView: BLandingView,
  },
  {
    path: '/b',
    HeaderTabs: AHeaderTabs,
  },
  {
    exact: true,
    path: '/b',
    View: BView,
  },
  {
    path: '/b/:bId',
    View: BAlternateView,
  },
  {
    path: '/b/:bId/edit',
    View: BAlternateView,
  },
];

export default {
  routes,
};
