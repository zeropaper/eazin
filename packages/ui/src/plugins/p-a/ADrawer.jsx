import React from 'react';

import { Drawer as DrawerPropTypes } from '../../core/plugins.propTypes';
import Link from '../../components/Layout.Drawer.Link';

const ADrawer = () => (
  <>
    <Link to="/a">
      A
    </Link>

    <Link to="/a/test">
      A - 2
    </Link>
  </>
);

ADrawer.propTypes = DrawerPropTypes;

export default ADrawer;
