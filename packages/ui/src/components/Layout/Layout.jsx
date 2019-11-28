import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Typography,
  Drawer,
  Hidden,
  Toolbar,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Header from './Layout.Header';
import DrawerContent from './Layout.Drawer';
import PluginPoint from '../PluginPoint';

const fullHeight = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
};

const styles = (theme) => ({
  '@global': {
    'html, body, #root': fullHeight,
  },
  root: fullHeight,
  layoutContent: {
    ...fullHeight,
    overflow: 'auto',
    position: 'relative',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      left: '20vw',
      width: '80vw',
      padding: theme.spacing(2),
    },
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBottom: {
    justifyContent: 'bottom',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  drawerShifted: {
    [theme.breakpoints.up('md')]: {
      left: '20vw',
      width: '80vw',
    },
  },
  drawer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Layout = ({
  children,
  classes,
  justify,
  align,
  passThru,
  // dispatch,
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const onOpenDrawer = () => setDrawerOpen(true);
  const onCloseDrawer = () => setDrawerOpen(false);

  const auth = passThru;

  const drawerContent = (<DrawerContent />);

  return (
    <Typography component="div" className={classes.root}>
      {auth
        && (
          <>
            <Hidden mdUp>
              <Drawer
                data-testid="maindrawer"
                open={drawerOpen}
                onClose={onCloseDrawer}
                classes={{
                  paper: classes.drawer,
                }}
              >
                <Toolbar variant="dense" />

                {drawerContent}
              </Drawer>
            </Hidden>

            <Hidden smDown>
              <Drawer
                data-testid="maindrawer"
                open
                variant="persistent"
                classes={{
                  paper: classes.drawer,
                }}
              >
                <Toolbar variant="dense" />

                {drawerContent}
              </Drawer>
            </Hidden>
          </>
        )}

      <Header onOpenDrawer={onOpenDrawer} fixed />

      <div
        className={classNames({
          [classes.layoutContent]: true,
          [classes.drawerShifted]: drawerContent && auth,
          [classes.alignCenter]: align === 'center',
          [classes.alignEnd]: align === 'right',
          [classes.justifyCenter]: justify === 'center',
          [classes.justifyBottom]: justify === 'bottom',
        })}
      >
        {auth ? children : (
          <>
            <PluginPoint name="Login" />
            <PluginPoint name="Reset" />
            <PluginPoint name="Register" />
          </>
        )}
      </div>
    </Typography>
  );
};

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['center', 'right']),
  justify: PropTypes.oneOf(['center', 'bottom']),
  passThru: PropTypes.bool,
};

Layout.defaultProps = {
  align: null,
  justify: null,
  passThru: null,
};

const mapStateToProps = ({ settings: { userToken } = {} }) => ({ passThru: !!userToken });

export default connect(mapStateToProps)(withStyles(styles)(Layout));
