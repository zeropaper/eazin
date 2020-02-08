import React from 'react';
import PersonIcon from '@material-ui/icons/Person';

import { LayoutDrawerLink as Link } from 'eazin-core/ui';

const UserDrawer = () => (
  <Link to="/account" Icon={PersonIcon}>
    Account
  </Link>
);

export default UserDrawer;
