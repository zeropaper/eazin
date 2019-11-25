import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { InvertColors } from '@material-ui/icons';

import { setSetting } from './settings.actions';

const SettingsDrawer = ({ toggleDarkMode, darkMode }) => (
  <IconButton
    size="small"
    color="inherit"
    onClick={toggleDarkMode(!darkMode)}
    data-testid="dark-mode"
  >
    <InvertColors />
  </IconButton>
);

SettingsDrawer.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ settings: { darkMode } }) => ({ darkMode });

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: (bool) => () => dispatch(setSetting('darkMode', !!bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsDrawer);
