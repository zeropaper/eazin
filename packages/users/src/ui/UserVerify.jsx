import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { parse as parseQuery } from 'querystring';
import { Typography } from '@material-ui/core';

import Link from 'eazin-ui/src/components/Link';
import queryAPI from 'eazin-ui/src/core/util/queryAPI';
import Form from 'eazin-ui/src/components/Form/FormBase';
import { setSetting } from 'eazin-settings/src/ui/settings.actions';
import { setUser } from './user.actions';

const notEmpty = (val) => (val && val.trim() ? undefined : 'A value is required');

const required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true,
};
const schema = {
  firstName: {
    label: 'First Name',
    ...required,
  },
  lastName: {
    label: 'Last Name',
    ...required,
  },

  buttons: {
    buttons: [
      {
        type: 'submit',
        text: 'Finish up',
      },
    ],
  },
};

const UserVerify = ({
  dispatch,
  history: { push },
  location: { search },
}) => {
  const query = parseQuery(search.slice(1) || '');

  if (!query.token) {
    return (
      <Typography color="error">
        A verification token is required.
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h5">Email verification</Typography>

      <Form
        onSubmit={async (fields) => {
          const info = await queryAPI('/api/user/verify', {
            method: 'POST',
            body: JSON.stringify({
              ...fields,
              verifToken: query.token,
            }),
          });

          const user = await queryAPI('/api/user/me', {
            headers: {
              Authorization: `Bearer ${info.token}`,
            },
          });

          dispatch(setUser(user));
          dispatch(setSetting('userToken', info.token));
          push('/');
        }}
        fields={schema}
      />

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );
};

UserVerify.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(() => ({}))(UserVerify);
