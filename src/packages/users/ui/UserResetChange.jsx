import React from 'react';
import Typography from '@material-ui/core/Typography';
import { parse } from 'querystring';

import { withAppContext, Form } from 'eazin-core/ui';
import { setSetting } from '../../settings/ui/settings.actions';
import { setUser } from './user.actions';
import { validPassword } from './user.validators';

const notEmpty = (val) => (val && val.trim() ? undefined : 'A value is required');

const required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true,
};

export default withAppContext((props) => {
  const {
    api: { post },
    location: { search },
    dispatch,
    history: {
      push,
    },
  } = props;
  const { token } = parse(search.slice(1));

  return (
    <>
      <Typography variant="h5">Password reset</Typography>

      {!!token && (
        <Form
          onSubmit={({ password }) => post('/api/user/password', {
            body: {
              token,
              password,
            },
          })}
          onSuccess={(user) => {
            dispatch(setUser(user));
            dispatch(setSetting('userToken', user.token));
            push('/account');
          }}
          fields={{
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
          }}
          buttons={[
            {
              type: 'submit',
              text: 'Reset',
            },
          ]}
        />
      )}
    </>
  );
});
