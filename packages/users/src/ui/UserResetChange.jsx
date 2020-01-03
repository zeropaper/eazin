import React from 'react';
import { Typography } from '@material-ui/core';

import { Form } from 'eazin-core/ui';
import { validPassword } from './user.validators';

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
    validate: validPassword,
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
  </>
);
