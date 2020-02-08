import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MenuList } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import PluginPoint from '../PluginPoint';
// eslint-disable-next-line
import styles from './Layout.Drawer.styles';

export { default as DrawerLink } from './Layout.Drawer.Link';

const Drawer = ({ classes }) => (
  <div className={classes.root}>
    <MenuList className={classes.top}>
      <PluginPoint className={classes.drawerLinks} name="Drawer" />
    </MenuList>

    <div className={classes.bottom}>
      <PluginPoint className={classes.drawerLowLinks} name="DrawerLow" />
    </div>
  </div>
);

Drawer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(withStyles(styles)(Drawer));
