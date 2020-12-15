import reducer, { restore } from './settings.reducer';

import SettingsView from './SettingsView';
import SettingsHeaderLinks from './SettingsHeaderLinks';
import SettingsDrawer from './SettingsDrawer';

import * as actions from './settings.actions';

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

export { restore, actions };
export default {
  actions,
  routes,
  reducers: {
    settings: reducer,
  },
};
