import React from 'react';

import { Drawer as DrawerPropTypes } from '../../core/plugins.propTypes';
import Link from '../../components/Layout.Drawer.Link';

const SettingsDrawer = () => (
  <Link to="/settings">
    Settings
  </Link>
);

SettingsDrawer.propTypes = DrawerPropTypes;

export default SettingsDrawer;
