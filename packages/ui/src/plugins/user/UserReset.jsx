import React from 'react';
import isEmail from 'validator/es/lib/isEmail';

import Link from '../../components/Link';
import Form from '../../components/Form/FormBase';

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
    validate: (val) => {
      if (!isEmail(val)) return 'Not a valid email address';
    },
  },
};

export default () => (
  <>
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
