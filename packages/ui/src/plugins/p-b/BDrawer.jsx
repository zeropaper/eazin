import React from 'react';

import { Drawer as DrawerPropTypes } from '../../core/plugins.propTypes';
import Link from '../../components/Layout.Drawer.Link';

const BDrawer = () => (
  <>
    <Link to="/b">
      B
    </Link>

    <Link to="/b/test">
      B - 2
    </Link>
  </>
);
BDrawer.propTypes = DrawerPropTypes;

export default BDrawer;
