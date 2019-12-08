import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import isEmail from 'validator/es/lib/isEmail';

import Link from '../../components/Link';
import queryAPI from '../../core/util/queryAPI';
import Form from '../../components/Form/FormBase';

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
    validate: (val = '') => {
      if (!isEmail(val)) return 'Not a valid email address';
    },
  },
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
        text: 'Register',
        type: 'submit',
      },
    ],
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
      />

      <Link to="/reset">Password reset</Link>
      <Link to="/login">Login</Link>
    </>
  );
};

export default UserRegister;
