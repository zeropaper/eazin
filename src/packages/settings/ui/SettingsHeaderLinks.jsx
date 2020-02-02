import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InvertColors from '@material-ui/icons/InvertColors';

import { setSetting } from './settings.actions';

const SettingsHeaderLinks = ({ toggleDarkMode, darkMode }) => (
  <IconButton
    size="small"
    color="inherit"
    onClick={toggleDarkMode(!darkMode)}
    data-testid="dark-mode"
  >
    <InvertColors />
  </IconButton>
);

SettingsHeaderLinks.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ settings: { darkMode = false } }) => ({ darkMode });

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: (bool) => () => dispatch(setSetting('darkMode', !!bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsHeaderLinks);
