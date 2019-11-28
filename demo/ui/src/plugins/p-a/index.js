
import AView from /* webpackChunkName: "Aview" */ './AView';
import AAlternateView from /* webpackChunkName: "AAlternateview" */ './AAlternateView';
import AHeaderTabs from /* webpackChunkName: "AHeaderTabs" */ './AHeaderTabs';
import ADrawer from /* webpackChunkName: "ADrawer" */ './ADrawer';
import ALandingView from /* webpackChunkName: "ALandingView" */ './ALandingView';

const routes = [
  {
    path: '/',
    Drawer: ADrawer,
    LandingView: ALandingView,
  },
  {
    path: '/a',
    HeaderTabs: AHeaderTabs,
  },
  {
    exact: true,
    path: '/a',
    View: AView,
  },
  {
    path: '/a/:aId',
    View: AAlternateView,
  },
  {
    path: '/a/:aId/edit',
    View: AAlternateView,
  },
];

export default {
  routes,
};
