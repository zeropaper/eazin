/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  withKnobs, text, boolean, number,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, Link } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import Form from '../src/packages/core/ui/components/Form/FormBase';
import { validMail, validPassword } from '../src/packages/users/ui/user.validators';

export default {
  title: 'packages/core/components/Form',
  decorators: [withKnobs],
};

const styles = (theme) => ({
  root: {
    padding: theme.spacing(4),
    maxWidth: 600,
    margin: 'auto',
  },
  // customFieldClass: {
  //   padding: theme.spacing(1),
  //   margin: theme.spacing(1),
  //   width: '100%',
  //   border: '1px dashed currentColor',
  // },
});

const required = {
  required: true,
  validateOnChange: true,
  validateOnBlur: true,
};
const fields = {
  email: {
    // debug: 'debug email',
    label: 'Email',
    type: 'email',
    ...required,
    validate: validMail,
    fullWidth: true,
    initialValue: 'a@a.bb',
  },
  password: {
    // debug: 'debug password',
    label: 'Password',
    type: 'password',
    ...required,
    validate: validPassword,
    fullWidth: true,
    // initialValue: '1234567890Aa!',
  },
  passwordConfirm: {
    // debug: 'debug passwordConfirm',
    label: 'Password Confirmation',
    type: 'password',
    ...required,
    validate: (val = '', vals) => {
      if (val !== vals.password) return 'Passwords don\'t match';
    },
    fullWidth: true,
    // initialValue: '1234567890Aa!',
  },
  misc: {
    type: 'fields',
    fields: {
      tos: {
        type: 'checkbox',
        validate: (checked) => (!checked ? 'You need to accept the TOS' : undefined),
        ...required,
        label: 'Terms Of Service',
        helperText: (
          <>
            By checking this box, you agree with the&nbsp;
            <Link href="#tos">Terms Of Service</Link>
            .
          </>
        ),
      },

    },
  },
};

const logSubmit = action('Submit');
const logPromise = action('promise');

const handleSubmit = (rejection, resolveMessage, timeout) => (...args) => {
  logSubmit(...args);

  return new Promise((resolve, reject) => setTimeout(() => {
    logPromise(rejection, resolveMessage, timeout);

    if (rejection) {
      const err = new Error('Some server error');
      err.fields = {
        current: 'Server side error',
      };
      reject(err);
      return;
    }
    resolve({ prop: resolveMessage });
  }, timeout));
};
const handleSuccess = action('Success');
const handleFailure = action('Failure');

const Base = withStyles(styles)(({
  classes = {},
  rejection,
  resolveMessage,
  timeout,
}) => (
  <section className={classes.root}>
    <header>
      <Typography variant="h5">
        Simple Form
      </Typography>
    </header>

    <Form
      debug
      onSubmit={handleSubmit(rejection, resolveMessage, timeout)}
      onError={handleFailure}
      onSuccess={handleSuccess}
      fields={fields}
      fieldClassName={classes.customFieldClass}
      buttons={({
        pristine,
        invalid,
        // values: {
        //   email,
        //   passwordConfirm,
        // },
      }, { loading }) => ([
        {
          text: 'Reset',
          type: 'reset',
          variant: 'text',
          disabled: pristine
            || loading,
        },
        {
          text: 'Register',
          type: 'submit',
          color: 'primary',
          startIcon: (<SaveIcon />),
          loading,
          disabled: pristine
            // || !email
            // || !passwordConfirm
            || invalid
            || loading,
        },
      ])}
    />

    <footer>
      <ul>
        <li>
          Reject:&nbsp;
          {rejection ? 'true' : 'false'}
        </li>
        <li>
          Message:&nbsp;
          {resolveMessage}
        </li>
        <li>
          Timeout:&nbsp;
          {timeout}
          ms
        </li>
      </ul>
    </footer>
  </section>
));

// ---------------------------------------------------------

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    useNextVariants: true,
  },
});
// eslint-disable-next-line react/prop-types
const Themed = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
export const base = () => (
  <Themed>
    <Base
      rejection={boolean('reject', false)}
      resolveMessage={text('resolveMessage', 'Resolve message...')}
      timeout={number('timeout', 1000)}
    />
  </Themed>
);
