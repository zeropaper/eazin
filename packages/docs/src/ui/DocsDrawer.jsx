import React from 'react';

import { Drawer as DrawerPropTypes } from 'eazin-ui/src/core/plugins.propTypes';
import Link from 'eazin-ui/src/components/Layout/Layout.Drawer.Link';

const DocsDrawer = () => (
  <Link to="/docs">
    Docs
  </Link>
);

DocsDrawer.propTypes = DrawerPropTypes;

export default DocsDrawer;
