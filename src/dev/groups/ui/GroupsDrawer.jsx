import React from 'react';
import GroupIcon from '@material-ui/icons/Group';

import { LayoutDrawerLink as Link } from 'eazin-core/ui';

const GroupsDrawer = () => (
  <Link to="/groups" Icon={GroupIcon}>
    Groups
  </Link>
);

export default GroupsDrawer;
