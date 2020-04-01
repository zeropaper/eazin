import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { Form } from 'eazin-core/ui';

import { setUser } from './user.actions';
import { setSetting } from '../../settings/ui/settings.actions';
import { validMail } from './user.validators';

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
      buttons={Form.standardButtons('Register')}
      // buttons={({ invalid, pristine, loading }) => [
      //   {
      //     text: 'Login',
      //     type: 'submit',
      //     disabled: invalid || pristine || loading,
      //   },
      // ]}
    />
  </>
);

UserLogin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(() => ({}))(UserLogin);
