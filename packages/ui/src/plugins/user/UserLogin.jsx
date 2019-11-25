import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmail from 'validator/es/lib/isEmail';

import Link from '../../components/Link';
// import queryAPI from '../../core/util/queryAPI';
import Form from '../../components/form/Form';
import { setUser } from './user.actions';
import { setSetting } from '../settings/settings.actions';

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
    type: 'email',
    ...required,
    validate: (val) => {
      if (!isEmail(val)) return 'Not a valid email address';
    },
  },
  password: {
    label: 'Password',
    type: 'password',
    ...required,
  },
};

const UserLogin = ({ dispatch }) => (
  <>
    <Form
      method="post"
      url="/api/user/login"
      onSuccess={(data) => {
        dispatch(setUser(data));
        dispatch(setSetting('userToken', data.token));
      }}
      // onFailure={(...args) => console.info('failed', ...args)}
      fields={schema}
    />

    <Link to="/reset">Password reset</Link>
    <Link to="/register">Register</Link>
  </>
);

UserLogin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(() => ({}))(UserLogin);
