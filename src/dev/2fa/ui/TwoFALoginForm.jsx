import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { Form } from 'eazin-core/ui';

import { setUser } from 'eazin-users/ui/user.actions';
import Links from 'eazin-users/ui/AnonForms.Links';
import { validMail } from 'eazin-users/ui/user.validators';

import { setSetting } from '../../../packages/settings/ui/settings.actions';

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
    validate: validMail,
  },
  password: {
    label: 'Password',
    type: 'password',
    ...required,
  },
  code: {
    label: 'Two-factor authentication',
  },
};

const UserLogin = ({ dispatch, history: { push } }) => (
  <>
    <Typography variant="h5">Login</Typography>

    <Form
      method="post"
      url="/api/user/login"
      onSuccess={(data) => {
        dispatch(setUser(data));
        dispatch(setSetting('userToken', data.token));
        push('/');
      }}
      fields={schema}
      buttons={({ invalid, pristine, loading }) => [
        {
          text: 'Login',
          type: 'submit',
          disabled: invalid || pristine || loading,
        },
      ]}
    />

    <Links current="login" />
  </>
);

UserLogin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(() => ({}))(UserLogin);
