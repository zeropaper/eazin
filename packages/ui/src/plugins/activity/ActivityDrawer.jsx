import React from 'react';

import { Drawer as DrawerPropTypes } from '../../core/plugins.propTypes';
import Link from '../../components/Layout.Drawer.Link';

const ActivityDrawer = () => (
  <Link to="/activity">
    Activity
  </Link>
);

ActivityDrawer.propTypes = DrawerPropTypes;

export default ActivityDrawer;
