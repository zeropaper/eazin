import React from 'react';

import { Drawer as DrawerPropTypes } from '../../core/plugins.propTypes';
import Link from '../../components/Layout/Layout.Drawer.Link';

const DocsDrawer = () => (
  <Link to="/docs">
    Docs
  </Link>
);

DocsDrawer.propTypes = DrawerPropTypes;

export default DocsDrawer;
