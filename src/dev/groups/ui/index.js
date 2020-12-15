import GroupsLandingView from './GroupsLandingView';
import GroupsDrawer from './GroupsDrawer';
import GroupsView from './GroupsView';

const routes = [
  {
    path: '/',
    Drawer: GroupsDrawer,
    LandingView: GroupsLandingView,
  },
  {
    path: '/groups',
    View: GroupsView,
  },
];

export default {
  routes,
};
