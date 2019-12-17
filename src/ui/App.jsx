/* eslint-disable import/no-unresolved */
import React from 'react';

import { App } from 'eazinpublishingtest-core';
import landing from 'eazinpublishingtest-landing';
import settings from 'eazinpublishingtest-settings';
import users from 'eazinpublishingtest-users';

import kitchenSink from './dev/kitchen-sink/src/ui';
import organisations from './dev/organisations/src/ui';
import groups from './dev/groups/src/ui';
import docs from './dev/docs/src/ui';

export default () => (
  <App
    siteName="eazin.dev"
    plugins={[
      landing,
      settings,
      users,
      groups,
      organisations,
      docs,
      kitchenSink,
    ]}
  />
);
