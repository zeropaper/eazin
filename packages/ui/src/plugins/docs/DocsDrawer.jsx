import React from 'react';

import { Drawer as DrawerPropTypes } from '../../core/plugins.propTypes';
import Link from '../../components/Layout/Layout.Drawer.Link';

const DcosDrawer = () => (
  <Link to="/docs">
    Docs
  </Link>
);

DcosDrawer.propTypes = DrawerPropTypes;

export default DcosDrawer;
