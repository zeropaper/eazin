import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import UserResetSend from './UserResetSend';
import UserResetChange from './UserResetChange';
import UserVerify from './UserVerify';

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
  },
}));

const AnonForms = ({
  LoginForm,
}) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} sm={10} md={6} lg={4}>
        <Paper className={classes.paper}>
          <Switch>
            <Route exact path="/register" component={UserRegister} />
            <Route path="/verify" component={UserVerify} />
            <Route path="/reset/change" component={UserResetChange} />
            <Route exact path={['/reset', '/reset/send']} component={UserResetSend} />
            <Route path={['/', '/login']} component={LoginForm || UserLogin} />
          </Switch>
        </Paper>
      </Grid>
    </Grid>
  );
};

AnonForms.propTypes = {
  LoginForm: PropTypes.elementType,
};

AnonForms.defaultProps = {
  LoginForm: null,
};

export default AnonForms;
