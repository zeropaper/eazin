import React from 'react';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

import { LayoutDrawerLink as Link } from 'eazin-core/ui';

const KitchenSinkDrawer = () => (
  <Link to="/kitchen-sink" Icon={FreeBreakfastIcon}>
    Kitchen sink
  </Link>
);

export default KitchenSinkDrawer;
