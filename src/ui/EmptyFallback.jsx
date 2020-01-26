import React from 'react';
import { withStyles } from '@material-ui/core';

export default withStyles(() => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))(({ classes }) => (
  <div className={classes.root}>
    Nothing here
  </div>
));
