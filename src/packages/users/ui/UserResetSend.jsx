import React from 'react';
import { Typography } from '@material-ui/core';

import { Form } from 'eazin-core/ui';
import { validMail } from './user.validators';
import Links from './AnonForms.Links';

const notEmpty = (val) => (val && val.trim() ? undefined : 'A value is required');

const required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true,
};
const schema = {
  email: {
    label: 'Email',
    ...required,
    validate: validMail,
  },
  buttons: {
    buttons: [
      {
        type: 'submit',
        text: 'Send reset email',
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

    <Links current="reset" />
  </>
);
