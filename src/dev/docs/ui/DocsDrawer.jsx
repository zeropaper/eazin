import React from 'react';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import { LayoutDrawerLink as Link } from 'eazin-core/ui';

const DocsDrawer = () => (
  <Link to="/docs" Icon={MenuBookIcon}>
    Documentation
  </Link>
);

export default DocsDrawer;
