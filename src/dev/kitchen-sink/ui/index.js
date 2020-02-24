import KitchenSinkLandingView from './KitchenSinkLandingView';
import KitchenSinkView from './KitchenSinkView';

import ButtonsDemo from './demos/Buttons';

const routes = [
  {
    path: '/',
    LandingView: KitchenSinkLandingView,
  },
  {
    path: '/kitchen-sink',
    View: KitchenSinkView,
  },
  {
    path: '/kitchen-sink/buttons',
    View: ButtonsDemo,
  },
];

export default {
  routes,
};
