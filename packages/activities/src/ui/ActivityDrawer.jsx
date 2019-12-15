import React from 'react';

import { Drawer as DrawerPropTypes } from 'eazin-ui/src/core/plugins.propTypes';
import Link from 'eazin-ui/src/components/Layout/Layout.Drawer.Link';

const ActivityDrawer = () => (
  <Link to="/activity">
    Activity
  </Link>
);

ActivityDrawer.propTypes = DrawerPropTypes;

export default ActivityDrawer;
