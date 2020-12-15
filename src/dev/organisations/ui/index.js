import OrganisationsLandingView from './OrganisationsLandingView';
import OrganisationsDrawer from './OrganisationsDrawer';

const routes = [
  {
    path: '/',
    Drawer: OrganisationsDrawer,
    LandingView: OrganisationsLandingView,
  },
];

export default {
  routes,
};
