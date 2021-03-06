import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import Header from './Layout.Header';
import DrawerContent from './Layout.Drawer';

const fullHeight = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: '100%',
};

const styles = (theme) => ({
  '@global': {
    'html, body, #root': fullHeight,
    html: {
      overflow: 'auto',
    },
  },
  root: fullHeight,
  layoutContent: {
    ...fullHeight,
    overflowY: 'hidden',
    overflowX: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
    '& > .anon, & > .auth': {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
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
      marginLeft: '20vw',
    },
  },
  drawerRoot: {
  },
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: theme.shadows[3],
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '20vw',
    },
  },
  drawerOpen: {
    minWidth: '20vw',
  },
  contentFooterWrapper: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

const Layout = ({
  children,
  classes,
  justify,
  align,
  siteName,
  drawerContent: drawer,
  toolbar,
  footer,
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const onOpenDrawer = () => setDrawerOpen(true);
  const onCloseDrawer = () => setDrawerOpen(false);

  const drawerContent = drawer !== false
    ? drawer
    : <DrawerContent />;

  const contentWrapperClassName = classNames({
    [classes.contentFooterWrapper]: true,
    [classes.drawerShifted]: drawerContent,
  });
  const contentClassName = classNames({
    [classes.layoutContent]: true,
    [classes.drawerShifted]: !footer && !toolbar && drawerContent,

    [classes.alignCenter]: align === 'center',
    [classes.alignEnd]: align === 'right',
    [classes.justifyCenter]: justify === 'center',
    [classes.justifyBottom]: justify === 'bottom',
  });

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
                root: classes.drawerRoot,
                paper: classNames({
                  [classes.drawer]: true,
                  [classes.drawerOpen]: drawerOpen,
                }),
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
                root: classes.drawerRoot,
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

      {(footer || toolbar)
        ? (
          <div className={contentWrapperClassName}>
            {toolbar}

            <div
              className={contentClassName}
              data-testid="layout-content"
            >
              {children}
            </div>

            {footer}
          </div>
        )
        : (
          <div
            className={contentClassName}
            data-testid="layout-content"
          >
            {children}
          </div>
        )}
    </Typography>
  );
};

Layout.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  drawerContent: PropTypes.node,
  toolbar: PropTypes.node,
  footer: PropTypes.node,
  align: PropTypes.oneOf(['center', 'right']),
  justify: PropTypes.oneOf(['center', 'bottom']),
  siteName: PropTypes.string,
};

Layout.defaultProps = {
  align: null,
  drawerContent: false,
  toolbar: null,
  footer: null,
  justify: null,
  siteName: null,
};

export default withStyles(styles)(Layout);
