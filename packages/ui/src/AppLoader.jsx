import React from 'react';

import App from /* webpackChunkName: "appcore" */'./App';

const AppLoader = () => (
  /* eslint-disable max-len */
  <App
    plugins={{
      landing: import(/* webpackChunkName: "plugin.landing" */'./plugins/landing'),
      repositories: import(/* webpackChunkName: "plugin.repositories" */'./plugins/repositories'),
      user: import(/* webpackChunkName: "plugin.user" */'./plugins/user'),
      settings: import(/* webpackChunkName: "plugin.settings" */'./plugins/settings'),
      activity: import(/* webpackChunkName: "plugin.activity" */'./plugins/activity'),
      // companies: import(/* webpackChunkName: "plugin.companies" */'./plugins/companies'),
      docs: import(/* webpackChunkName: "plugin.docs" */'./plugins/docs'),
      ws: import(/* webpackChunkName: "plugin.ws" */'./plugins/ws'),
      // a: import(/* webpackChunkName: "plugin.a" */'./plugins/p-a'),
      // b: import(/* webpackChunkName: "plugin.b" */'./plugins/p-b'),
    }}
  />
  /* eslint-enable max-len */
);

export default AppLoader;
