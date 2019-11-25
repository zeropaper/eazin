import { lazy } from 'react';

import reducer from './settings.reducer';

const SettingsView = lazy(() => import(/* webpackChunkName: "Settingsview" */ './SettingsView'));
const SettingsHeaderLinks = lazy(() => import(/* webpackChunkName: "SettingsHeaderLinks" */ './SettingsHeaderLinks'));
const SettingsDrawer = lazy(() => import(/* webpackChunkName: "SettingsDrawer" */ './SettingsDrawer'));
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
