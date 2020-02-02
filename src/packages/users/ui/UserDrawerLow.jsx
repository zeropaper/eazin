import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { actions as settingsActions } from 'eazin-settings/ui/index';

import { clearUser } from './user.actions';

const UserDrawerLow = ({ dispatch }) => (
  <Button
    fullWidth
    onClick={() => (dispatch(clearUser()) && dispatch(settingsActions.clearSetting('userToken')))}
  >
    Logout
  </Button>
);

UserDrawerLow.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(() => ({}))(UserDrawerLow);
