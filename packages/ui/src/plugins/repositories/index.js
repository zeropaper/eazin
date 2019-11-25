import { lazy } from 'react';

const ReposLandingView = lazy(() => import(/* webpackChunkName: "ReposLandingView" */ './ReposLandingView'));

const routes = [
  {
    path: '/',
    LandingView: ReposLandingView,
  },
];

export default {
  routes,
};
