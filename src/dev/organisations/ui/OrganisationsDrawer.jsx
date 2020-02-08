import React from 'react';
import BusinessIcon from '@material-ui/icons/Business';

import { LayoutDrawerLink as Link } from 'eazin-core/ui';

const OrganisationsDrawer = () => (
  <Link to="/organisations" Icon={BusinessIcon}>
    Organisations
  </Link>
);

export default OrganisationsDrawer;
