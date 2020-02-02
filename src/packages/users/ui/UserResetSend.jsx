import React from 'react';
import Typography from '@material-ui/core/Typography';

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

export default () => (
  <>
    <Typography variant="h5">Password reset</Typography>

    <Form
      method="post"
      url="/api/user/email"
      successMessage="Email sent"
      errorMessage="The Email could not be send"
      fields={{
        email: {
          label: 'Email',
          ...required,
          validate: validMail,
        },
      }}
      buttons={[
        {
          type: 'submit',
          text: 'Send reset email',
        },
      ]}
    />

    <Links current="reset" />
  </>
);
