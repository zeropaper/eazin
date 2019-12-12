/* eslint-disable import/no-unresolved */
import React from 'react';

import App from './App';

const AppLoader = () => (
  /* eslint-disable max-len */
  <App
    plugins={{
      landing: import('eazin-landing'),
      user: import('eazin-user'),
      settings: import('eazin-settings'),
      // repositories: import('eazin-repositories'),
      activity: import('eazin-activity'),
      // docs: import('eazin-docs'),
      organisations: import('eazin-organisations'),
      groups: import('eazin-groups'),
      clients: import('eazin-clients'),
      // ws: import('eazin-ws'),
      kitchenSink: import('eazin-kitchen-sink'),
    }}
  />
  /* eslint-enable max-len */
);

export default AppLoader;
