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
import AnonFormsLinks from './AnonForms.Links';
import AnonFormsHeader from './AnonForms.Header';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
    '&:last-of-type': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AnonForms = ({
  Header = AnonFormsHeader,
  LoginForm = UserLogin,
  RegisterForm = UserRegister,
  VerifyForm = UserVerify,
  ResetChangeForm = UserResetChange,
  ResetSendForm = UserResetSend,
}) => {
  const classes = useStyles();

  const links = {
    login: {
      to: '/login',
      text: 'Login',
    },
    register: RegisterForm && {
      to: '/register',
      text: 'Register',
    },
    reset: {
      to: '/reset',
      text: 'Password reset',
    },
  };

  const renderLinks = (current) => () => (
    <AnonFormsLinks current={current} links={links} />
  );

  return (
    <Grid className={classes.root} container alignItems="center" justify="center">
      <Grid item xs={12} sm={10} md={6} lg={4}>
        <Paper className={classes.paper}>
          {Header && <Header />}

          <Switch>
            {RegisterForm && <Route exact path="/register" component={RegisterForm} />}
            <Route path="/verify" component={VerifyForm} />
            <Route path="/reset/change" component={ResetChangeForm} />
            <Route exact path={['/reset', '/reset/send']} component={ResetSendForm} />
            <Route path={['/', '/login']} component={LoginForm} />
          </Switch>
        </Paper>

        <Paper className={classes.paper}>
          <Switch>
            {!!RegisterForm && <Route exact path="/register" render={renderLinks('register')} />}
            <Route path="/verify" render={renderLinks('verify')} />
            <Route path="/reset/change" render={renderLinks('reset')} />
            <Route exact path={['/reset', '/reset/send']} render={renderLinks('reset')} />
            <Route path={['/', '/login']} render={renderLinks('login')} />
          </Switch>
        </Paper>
      </Grid>
    </Grid>
  );
};

AnonForms.propTypes = {
  Header: PropTypes.elementType,
  LoginForm: PropTypes.elementType,
  RegisterForm: PropTypes.oneOfType([PropTypes.elementType, PropTypes.bool]),
  VerifyForm: PropTypes.elementType,
  ResetChangeForm: PropTypes.elementType,
  ResetSendForm: PropTypes.elementType,
};

AnonForms.defaultProps = {
  Header: AnonFormsHeader,
  LoginForm: UserLogin,
  RegisterForm: UserRegister,
  VerifyForm: UserVerify,
  ResetChangeForm: UserResetChange,
  ResetSendForm: UserResetSend,
};

export default AnonForms;
