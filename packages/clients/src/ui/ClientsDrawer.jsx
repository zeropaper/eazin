import React from 'react';

import { Drawer as DrawerPropTypes } from 'eazin-ui/src/core/plugins.propTypes';
import Link from 'eazin-ui/dist/components/Layout/Layout.Drawer.Link';

const ClientsDrawer = () => (
  <Link to="/clients">
    Clients
  </Link>
);

ClientsDrawer.propTypes = DrawerPropTypes;

export default ClientsDrawer;
