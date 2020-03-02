import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { Form } from 'eazin-core/ui';

import { setUser } from 'eazin-users/ui/user.actions';
import Links from 'eazin-users/ui/AnonForms.Links';
import { validMail } from 'eazin-users/ui/user.validators';

import { setSetting } from '../../settings/ui/settings.actions';

const notEmpty = (val) => (val && val.trim() ? undefined : 'A value is required');

const required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true,
};

const TwoFALoginForm = ({ dispatch, history: { push } }) => {
  const [needsCode, setNeedsCode] = React.useState(false);

  return (
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
        onError={(err, setErrors) => {
          setNeedsCode(needsCode || err.fields.code);
          setErrors();
        }}
        fields={{
          email: {
            label: 'Email',
            type: 'email',
            ...required,
            validate: validMail,
            InputProps: {
              readOnly: needsCode,
            },
          },
          password: {
            label: 'Password',
            type: 'password',
            ...required,
            InputProps: {
              readOnly: needsCode,
            },
          },
          code: {
            disabled: !needsCode,
            ...(needsCode ? {
              // required: true,
              // error: null,
              validate: false,
              placeholder: '654321',
              InputLabelProps: {
                shrink: true,
              },
            } : {}),
            label: 'Two-factor authentication',
          },
        }}
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
};

TwoFALoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(() => ({}))(TwoFALoginForm);
