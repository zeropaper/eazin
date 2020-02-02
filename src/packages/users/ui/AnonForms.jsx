import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import UserResetSend from './UserResetSend';
import UserResetChange from './UserResetChange';
import UserVerify from './UserVerify';

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
  },
});

export default withStyles(styles)(({ classes }) => (
  <Grid container alignItems="center" justify="center">
    <Grid item xs={12} sm={10} md={6} lg={4}>
      <Paper className={classes.paper}>
        <Switch>
          <Route exact path="/register" component={UserRegister} />
          <Route path="/verify" component={UserVerify} />
          <Route path="/reset/change" component={UserResetChange} />
          <Route exact path={['/reset', '/reset/send']} component={UserResetSend} />
          <Route path={['/', '/login']} component={UserLogin} />
        </Switch>
      </Paper>
    </Grid>
  </Grid>
));
