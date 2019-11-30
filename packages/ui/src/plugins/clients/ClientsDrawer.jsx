import React from 'react';

import { Drawer as DrawerPropTypes } from '../../core/plugins.propTypes';
import Link from '../../components/Layout/Layout.Drawer.Link';

const ClientsDrawer = () => (
  <Link to="/clients">
    Clients
  </Link>
);

ClientsDrawer.propTypes = DrawerPropTypes;

export default ClientsDrawer;
