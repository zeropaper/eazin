import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/es/lib/isEmail';

import Link from '../../components/Link';
import queryAPI from '../../core/util/queryAPI';
import Form from '../../components/Form/FormBase';
import connect from './UserRegister.connect';

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
};

const UserRegister = ({ setUser }) => (
  <>
    <Form
      // method="post"
      // url="/api/user/register"
      // processFields={({
      //   fieldC,
      //   fieldA,
      // }) => ({
      //   password: fieldC,
      //   email: fieldA,
      // })}
      // onSuccess={setUser}
      // onFailure={}
      onSubmit={(fields) => {
        queryAPI('/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            password: fields.passwordConfirm,
            email: fields.email,
          }),
        })
          // eslint-disable-next-line no-console
          .then(setUser)
          .catch((err) => { throw err; });
      }}
      fields={schema}
    />

    <Link to="/reset">Password reset</Link>
    <Link to="/login">Login</Link>
  </>
);

UserRegister.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default connect(UserRegister);
