import React from 'react';

import App from './App';

const AppLoader = () => (
  /* eslint-disable max-len */
  <App
    plugins={{
      landing: import(/* webpackChunkName: "Apploader.plugin.landing" */'./plugins/landing'),
      user: import(/* webpackChunkName: "Apploader.plugin.user" */'./plugins/user'),
      settings: import(/* webpackChunkName: "Apploader.plugin.settings" */'./plugins/settings'),
      // repositories: import(/* webpackChunkName: "Apploader.plugin.repositories" */'./plugins/repositories'),
      // activity: import(/* webpackChunkName: "Apploader.plugin.activity" */'./plugins/activity'),
      // docs: import(/* webpackChunkName: "Apploader.plugin.docs" */'./plugins/docs'),
      organisations: import(/* webpackChunkName: "Apploader.plugin.organisations" */'./plugins/organisations'),
      groups: import(/* webpackChunkName: "Apploader.plugin.groups" */'./plugins/groups'),
      clients: import(/* webpackChunkName: "Apploader.plugin.clients" */'./plugins/clients'),
      // ws: import(/* webpackChunkName: "Apploader.plugin.ws" */'./plugins/ws'),
      // kitchenSink: import(/* webpackChunkName: "Apploader.plugin.kitchenSink" */'./plugins/kitchen-sink'),
    }}
  />
  /* eslint-enable max-len */
);

export default AppLoader;
