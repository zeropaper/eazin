/* eslint-disable import/no-unresolved */
import React from 'react';

import { App } from 'eazin-core/ui';
import landing from 'eazin-landing/ui';
import settings from 'eazin-settings/ui';
import users from 'eazin-users/ui';

import kitchenSink from '../dev/kitchen-sink/ui';
import organisations from '../dev/organisations/ui';
import groups from '../dev/groups/ui';
import docs from '../dev/docs/ui';

export default () => (
  <App
    siteName="eazin.dev"
    plugins={{
      landing,
      settings,
      users,
      groups,
      organisations,
      docs,
      kitchenSink,
    }}
  />
);
