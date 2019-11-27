import React from 'react';

import { Drawer as DrawerPropTypes } from '../../core/plugins.propTypes';
import Link from '../../components/Layout/Layout.Drawer.Link';

const CompaniesDrawer = () => (
  <Link to="/companies">
    Companies
  </Link>
);

CompaniesDrawer.propTypes = DrawerPropTypes;

export default CompaniesDrawer;
