
import reducer, { restore } from './settings.reducer';

import SettingsView from './SettingsView';
import SettingsHeaderLinks from './SettingsHeaderLinks';
import SettingsDrawer from './SettingsDrawer';

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

export { restore };
export default {
  routes,
  reducers: {
    settings: reducer,
  },
};
