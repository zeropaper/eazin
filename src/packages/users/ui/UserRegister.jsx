import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import { Form, queryAPI } from 'eazin-core/ui';
import { validMail, validPassword } from './user.validators';

const required = {
  required: true,
  validateOnChange: true,
  validateOnBlur: true,
};
const schema = {
  email: {
    label: 'Email',
    type: 'email',
    ...required,
    validate: validMail,
  },
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
};

const UserRegister = () => {
  const [state, setState] = useState({});

  const handleSubmit = (fields) => queryAPI('/api/user/register', {
    method: 'POST',
    body: JSON.stringify({
      password: fields.passwordConfirm,
      email: fields.email,
    }),
  })
    // eslint-disable-next-line no-console
    .then(() => setState({ email: fields.email, showVerifInstruction: true }))
    .catch((err) => setState({
      error: (err.object || {}).message || err.message,
    }));

  if (state.showVerifInstruction) {
    return (
      <Typography component="div" color="textPrimary">
        A verification email has been sent to&nbsp;
        {state.email}
        .
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5">Register</Typography>

      {state.error && (
        <Typography component="div" color="error">
          {state.error}
        </Typography>
      )}

      <Form
        onSubmit={handleSubmit}
        fields={schema}
        buttons={({
          pristine,
          invalid,
          loading,
          values: {
            email,
            passwordConfirm,
          },
        }) => ([
          {
            text: 'Register',
            type: 'submit',
            disabled: pristine
              || invalid
              || loading
              || !email
              || !passwordConfirm,
          },
        ])}
      />
    </>
  );
};

export default UserRegister;
