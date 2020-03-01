import KitchenSinkLandingView from './KitchenSinkLandingView';
import KitchenSinkView from './KitchenSinkView';
import KitchenSinkDrawer from './KitchenSinkDrawer';

import ButtonsDemo from './demos/Buttons';

const routes = [
  {
    path: '/',
    LandingView: KitchenSinkLandingView,
    Drawer: KitchenSinkDrawer,
  },
  {
    path: '/kitchen-sink',
    View: KitchenSinkView,
  },
  {
    path: '/kitchen-sink/:demoId',
    View: ButtonsDemo,
  },
];

export default {
  routes,
};
