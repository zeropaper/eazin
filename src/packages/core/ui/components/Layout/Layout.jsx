import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Typography,
  Drawer,
  Hidden,
  Toolbar,
  // AppBar,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Header from './Layout.Header';
import DrawerContent from './Layout.Drawer';

const fullHeight = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
};

// const abs = {
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   overflow: 'auto',
// };

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
    boxShadow: theme.shadows[3],
  },
});

const Layout = ({
  children,
  classes,
  justify,
  align,
  siteName,
  drawerContent: drawer,
  contextToolbar,
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const onOpenDrawer = () => setDrawerOpen(true);
  const onCloseDrawer = () => setDrawerOpen(false);

  const drawerContent = drawer !== false
    ? drawer
    : <DrawerContent />;

  return (
    <Typography component="div" className={classes.root}>
      {drawerContent && (
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

      <Header siteName={siteName} onOpenDrawer={onOpenDrawer} fixed />

      {contextToolbar}

      <div
        className={classNames({
          [classes.layoutContent]: true,
          [classes.drawerShifted]: drawerContent,
          [classes.alignCenter]: align === 'center',
          [classes.alignEnd]: align === 'right',
          [classes.justifyCenter]: justify === 'center',
          [classes.justifyBottom]: justify === 'bottom',
        })}
        data-testid="layout-content"
      >
        {children}
      </div>
    </Typography>
  );
};

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  drawerContent: PropTypes.node,
  contextToolbar: PropTypes.node,
  align: PropTypes.oneOf(['center', 'right']),
  justify: PropTypes.oneOf(['center', 'bottom']),
  siteName: PropTypes.string,
};

Layout.defaultProps = {
  align: null,
  drawerContent: false,
  contextToolbar: null,
  justify: null,
  siteName: null,
};

export default withStyles(styles)(Layout);
