import React from 'react';

import App from './App';

const AppLoader = () => (
  /* eslint-disable max-len */
  <App
    plugins={{
      landing: import(/* webpackChunkName: "eazin.plugin.landing" */'./plugins/landing'),
      user: import(/* webpackChunkName: "eazin.plugin.user" */'./plugins/user'),
      settings: import(/* webpackChunkName: "eazin.plugin.settings" */'./plugins/settings'),
      // repositories: import(/* webpackChunkName: "eazin.plugin.repositories" */'./plugins/repositories'),
      activity: import(/* webpackChunkName: "eazin.plugin.activity" */'./plugins/activity'),
      // docs: import(/* webpackChunkName: "eazin.plugin.docs" */'./plugins/docs'),
      organisations: import(/* webpackChunkName: "eazin.plugin.organisations" */'./plugins/organisations'),
      groups: import(/* webpackChunkName: "eazin.plugin.groups" */'./plugins/groups'),
      clients: import(/* webpackChunkName: "eazin.plugin.clients" */'./plugins/clients'),
      // ws: import(/* webpackChunkName: "eazin.plugin.ws" */'./plugins/ws'),
      kitchenSink: import(/* webpackChunkName: "eazin.plugin.kitchenSink" */'./plugins/kitchen-sink'),
    }}
  />
  /* eslint-enable max-len */
);

export default AppLoader;
