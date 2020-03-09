import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';

import { LoadingFallback as Fallback } from 'eazin-core/ui';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    [theme.breakpoints.up('md')]: {
      width: '33%',
    },
  },
  top: {
    width: 90,
    height: 90,
    borderRadius: 90,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 'auto',
    marginBottom: 0 - (theme.spacing(1) + 45),
    position: 'relative',
    zIndex: 10,
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  paperWithTop: {
    paddingTop: 45 + theme.spacing(1),
  },
});

const Wrapper = ({ children, classes, top }) => (
  <GridListTile className={classes.root} cols={1}>
    <React.Suspense fallback={<Fallback />}>
      {top && (
        <Paper className={classes.top}>
          <span>{top}</span>
        </Paper>
      )}

      <Paper className={`${classes.paper} ${top ? classes.paperWithTop : ''}`.trim()}>
        {children}
      </Paper>
    </React.Suspense>
  </GridListTile>
);

Wrapper.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  top: PropTypes.node,
};

Wrapper.defaultProps = {
  top: null,
};

export default withStyles(styles)(Wrapper);
