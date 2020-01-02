import React from 'react';
import { Typography } from '@material-ui/core';

import Link from 'eazin-ui/dist/components/Link';
import Form from 'eazin-ui/dist/components/Form/FormBase';

const notEmpty = (val) => (val && val.trim() ? undefined : 'A value is required');

const required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true,
};
const schema = {
  password: {
    label: 'Password',
    type: 'password',
    ...required,
    validate: (val = '') => {
      if (val.length < 13) return 'Must be at least 13 charachters long';
      if (!val.match(/[a-z]+/)) return 'Must contain lowercase characters';
      if (!val.match(/[A-Z]+/)) return 'Must contain uppercase characters';
      if (!val.match(/[0-9]+/)) return 'Must contain numbers';
      if (!val.match(/[^0-9a-zA-Z]+/)) return 'Must contain special charachters';
    },
  },
  passwordConfirm: {
    label: 'Password Confirmation',
    type: 'password',
    ...required,
    validate: (val = '', vals) => {
      if (val !== vals.password) return 'Passwords don\'t match';
    },
  },
  buttons: {
    buttons: [
      {
        type: 'submit',
        text: 'Reset',
      },
    ],
  },
};

export default () => (
  <>
    <Typography variant="h5">Password reset</Typography>

    <Form
      onSubmit={(fields) => {
        // eslint-disable-next-line no-console
        console.info('fields', fields);
      }}
      fields={schema}
    />

    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </>
);
