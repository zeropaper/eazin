import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export default () => (
  <>
    <AppBar color="inherit" elevation={2}>
      <Toolbar variant="dense" />
      <Toolbar variant="dense">
        yo
      </Toolbar>
    </AppBar>

    <Toolbar variant="dense" />
  </>
);
