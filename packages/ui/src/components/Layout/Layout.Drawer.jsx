import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';

import PluginPoint from '../PluginPoint';
// eslint-disable-next-line
import styles from './Layout.Drawer.styles';

export const DrawerLink = withStyles(styles)(({ classes, children, to }) => (
  <NavLink
    className={classes.menuLink}
    to={to}
  >
    {children}
  </NavLink>
));

const Drawer = ({
  classes,
}) => (
  <div className={classes.root}>
    <PluginPoint name="Drawer" />
  </div>
);

Drawer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(withStyles(styles)(Drawer));
