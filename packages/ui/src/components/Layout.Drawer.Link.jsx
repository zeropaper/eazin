import React from 'react';
import { withStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import styles from './Layout.Drawer.styles';

export default withStyles(styles)(({ classes, children, to }) => (
  <NavLink
    className={classes.menuLink}
    to={to}
  >
    {children}
  </NavLink>
));
