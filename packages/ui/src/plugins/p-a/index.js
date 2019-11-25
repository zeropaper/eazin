import { lazy } from 'react';

const AView = lazy(() => import(/* webpackChunkName: "Aview" */ './AView'));
const AAlternateView = lazy(() => import(/* webpackChunkName: "AAlternateview" */ './AAlternateView'));
const AHeaderTabs = lazy(() => import(/* webpackChunkName: "AHeaderTabs" */ './AHeaderTabs'));
const ADrawer = lazy(() => import(/* webpackChunkName: "ADrawer" */ './ADrawer'));
const ALandingView = lazy(() => import(/* webpackChunkName: "ALandingView" */ './ALandingView'));

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
