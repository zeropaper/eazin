
import reducer from './settings.reducer';

import SettingsView from /* webpackChunkName: "Settingsview" */ './SettingsView';
import SettingsHeaderLinks from /* webpackChunkName: "SettingsHeaderLinks" */ './SettingsHeaderLinks';
import SettingsDrawer from /* webpackChunkName: "SettingsDrawer" */ './SettingsDrawer';

SettingsDrawer.weight = 10;

const routes = [
  {
    path: '/',
    Drawer: SettingsDrawer,
    HeaderLinks: SettingsHeaderLinks,
  },
  {
    exact: true,
    path: '/settings',
    View: SettingsView,
  },
];

export default {
  routes,
  reducers: {
    settings: reducer,
  },
};
