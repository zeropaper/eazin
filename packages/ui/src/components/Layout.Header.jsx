import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withAppContext, appContextShape } from '../core/AppContext';
import PluginPoint from './PluginPoint';

const Header = ({
  className,
  classes,
  onOpenDrawer,
  fixed,
}) => (
  <>
    <AppBar
      position={fixed ? 'fixed' : 'relative'}
      className={[classes.appBar, className].filter(Boolean).join(' ')}
    >
      <Toolbar variant="dense" className={classes.toolbar}>
        <Hidden mdUp>
          <MenuIcon
            data-testid="header-menu-button"
            onClick={() => (onOpenDrawer && onOpenDrawer())}
          />
        </Hidden>
        <Hidden smDown>
          <div>&nbsp;</div>
        </Hidden>

        <NavLink className={classes.menuLink} to="/">
          137
        </NavLink>

        <div data-testid="header-links">
          <PluginPoint name="HeaderLinks" />
        </div>
      </Toolbar>
    </AppBar>

    {fixed && <Toolbar variant="dense" />}
  </>
);

Header.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({
    appBar: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
    menuLink: PropTypes.string.isRequired,
  }).isRequired,
  ...appContextShape,
  onOpenDrawer: PropTypes.func,
  fixed: PropTypes.bool,
};
Header.defaultProps = {
  className: null,
  onOpenDrawer: null,
  fixed: false,
};

const mapStateToProps = ({ answers, others }) => ({ answers, others });

const styled = withStyles((theme) => ({
  appBar: {
    zIndex: 1210,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuLink: {
    color: 'currentColor',
    textDecoration: 'none',
    cursor: 'pointer',
    marginLeft: theme.spacing(2),
  },
}))(Header);
export default connect(mapStateToProps)(withAppContext(styled));
