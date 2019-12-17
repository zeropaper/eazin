import React from 'react';

import { LayoutDrawerLink as Link } from 'eazinpublishingtest-core/ui';

const SettingsDrawer = () => (
  <Link to="/settings">
    Settings
  </Link>
);

SettingsDrawer.weight = 10;

export default SettingsDrawer;
