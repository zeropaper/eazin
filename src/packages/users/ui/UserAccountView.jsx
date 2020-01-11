import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import { Form } from 'eazin-core/ui';
import { validMail, validPassword } from './user.validators';

const required = {
  required: true,
  validateOnChange: true,
};

const ProfileForm = connect(({ user: { user } }) => user)(({ firstName, lastName }) => (
  <Form
    method="patch"
    url="/api/user"
    fields={{
      firstName: {
        label: 'First Name',
        ...required,
        fullWidth: true,
        initialValue: firstName,
      },
      lastName: {
        label: 'Last Name',
        ...required,
        fullWidth: true,
        initialValue: lastName,
      },
      actions: {
        buttons: ({ pristine, invalid }, { loading }) => ([
          {
            text: 'Reset',
            type: 'reset',
            disabled: pristine || loading,
          },
          {
            text: 'Update',
            type: 'submit',
            disabled: pristine || invalid || loading,
          },
        ]),
      },
    }}
  />
));

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
  actions: {
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
    validate: validMail,
    fullWidth: true,
    // eslint-disable-next-line max-len
    helperText: 'A verification email will first be send to this address. The new address will be effective only once verified',
  },
  actions: {
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
    <Grid item className={classes.tile} xs={12}>
      <Paper className={classes.paper} data-testid="user-profile">
        <Typography
          variant="h4"
          gutterBottom
        >
            Profile
        </Typography>

        <ProfileForm />
      </Paper>
    </Grid>

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

AccountView.propTypes = {
  api: PropTypes.shape({
    post: PropTypes.func,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(AccountView);
