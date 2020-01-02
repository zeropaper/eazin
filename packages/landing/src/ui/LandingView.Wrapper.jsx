import React from 'react';
import PropTypes from 'prop-types';
import { GridListTile, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Fallback from 'eazin-ui/dist/components/LoadingFallback';


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '33%',
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
});

const Wrapper = ({ children, classes }) => (
  <GridListTile className={classes.root} cols={1}>
    <React.Suspense fallback={<Fallback />}>
      <Paper className={classes.paper}>
        {children}
      </Paper>
    </React.Suspense>
  </GridListTile>
);

Wrapper.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Wrapper);
