import KitchenSinkLandingView from './KitchenSinkLandingView';
import KitchenSinkView from './KitchenSinkView';

const routes = [
  {
    path: '/',
    LandingView: KitchenSinkLandingView,
  },
  {
    path: '/kitchen-sink',
    View: KitchenSinkView,
  },
];

export default {
  routes,
};
