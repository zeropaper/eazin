import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { Form } from 'eazin-core/ui';
import { validPassword } from './user.validators';

const required = {
  required: true,
  validateOnChange: true,
};
const passwordFormFields = {
  current: {
    label: 'Current Password',
    type: 'password',
    ...required,
    fullWidth: true,
    validate: validPassword,
  },
  password: {
    label: 'New Password',
    type: 'password',
    ...required,
    fullWidth: true,
    validate: validPassword,
  },
  passwordConfirm: {
    label: 'Confirmation',
    type: 'password',
    ...required,
    fullWidth: true,
    validate: (val = '', vals) => {
      if (val !== vals.password) return 'Passwords don\'t match';
    },
  },
  buttons: {
    buttons: ({
      pristine,
      invalid,
      values: {
        current,
        password,
        passwordConfirm,
      },
    }, { loading }) => [
      {
        text: 'Change Password',
        type: 'submit',
        loading,
        disabled: pristine
          || invalid
          || !current
          || !password
          || !passwordConfirm,
      },
    ],
  },
};

const emailFormFields = {
  email: {
    label: 'New Email Address',
    type: 'email',
    ...required,
    fullWidth: true,
    helperText: 'A verification email will first be send to this address. The new address will be effective only once verified',
  },
  buttons: {
    buttons: ({
      pristine,
      invalid,
      values: {
        email,
      },
    }) => [
      {
        text: 'Send verification mail',
        type: 'submit',
        disabled: pristine
          || invalid
          || !email,
      },
    ],
  },
};

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  tile: {
    flexGrow: 1,
    minWidth: '33%',
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
});

const AccountView = ({ api: { post }, classes }) => (
  <Grid
    container
    spacing={1}
    className={classes.root}
  >
    <Grid item className={classes.tile} sm>
      <Paper className={classes.paper} data-testid="password-change">
        <Typography
          variant="h4"
          gutterBottom
        >
            Change Password
        </Typography>

        <Form
          method="post"
          url="/api/user/password"
          fields={passwordFormFields}
        />
      </Paper>
    </Grid>

    <Grid item className={classes.tile} sm>
      <Paper className={classes.paper} data-testid="email-change">
        <Typography
          variant="h4"
          gutterBottom
        >
            Change Email
        </Typography>

        <Form
          onSubmit={(fields) => post('/api/user/email', { body: fields })}
          fields={emailFormFields}
        />
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(AccountView);
