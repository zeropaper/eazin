import React from 'react';
import ListIcon from '@material-ui/icons/List';

import { LayoutDrawerLink as Link } from 'eazin-core/ui';

const ActivityDrawer = () => (
  <Link to="/activity" Icon={ListIcon}>
    Activity
  </Link>
);

export default ActivityDrawer;
