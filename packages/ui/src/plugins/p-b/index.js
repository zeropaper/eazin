import { lazy } from 'react';

const BView = lazy(() => import(/* webpackChunkName: "BView" */ './BView'));
const BAlternateView = lazy(() => import(/* webpackChunkName: "BAlternateview" */ './BAlternateView'));
const AHeaderTabs = lazy(() => import(/* webpackChunkName: "AHeaderTabs" */ './BHeaderTabs'));
const BDrawer = lazy(() => import(/* webpackChunkName: "BDrawer" */ './BDrawer'));
const BLandingView = lazy(() => import(/* webpackChunkName: "BLandingView" */ './BLandingView'));

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
