import React from 'react';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';

import { LayoutDrawerLink as Link } from 'eazin-core/ui';

const ClientsDrawer = () => (
  <Link to="/clients" Icon={DeviceHubIcon}>
    Clients
  </Link>
);

export default ClientsDrawer;
