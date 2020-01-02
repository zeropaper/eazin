/* eslint-disable import/no-unresolved */
import React from 'react';

import App from './App';

const AppLoader = () => (
  /* eslint-disable max-len */
  <App
    plugins={{
      user: import('eazin-users/dist/index'),
      settings: import('eazin-settings/dist/index'),
      // landing: import('eazin-landing/dist/index'),
      // repositories: import('eazin-repositories/dist/index'),
      // activity: import('eazin-activity/dist/index'),
      // docs: import('eazin-docs/dist/index'),
      // organisations: import('eazin-organisations/dist/index'),
      // groups: import('eazin-groups/dist/index'),
      // clients: import('eazin-clients/dist/index'),
      // ws: import('eazin-ws/dist/index'),
      // kitchenSink: import('eazin-kitchen-sink/dist/index'),
    }}
  />
  /* eslint-enable max-len */
);

export default AppLoader;
