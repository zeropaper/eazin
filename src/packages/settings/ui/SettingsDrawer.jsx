import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

import { LayoutDrawerLink as Link } from 'eazin-core/ui';

const SettingsDrawer = () => (
  <Link to="/settings" Icon={SettingsIcon}>
    Settings
  </Link>
);

SettingsDrawer.weight = 10;

export default SettingsDrawer;
