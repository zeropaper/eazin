import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'eazin-core/ui';

const yesNo = (bool) => (bool ? 'yes' : 'no');

const SettingsView = ({ darkMode }) => (
  <div>
    Dark Mode:&nbsp;
    {yesNo(darkMode)}
  </div>
);

SettingsView.pageTitle = 'Settings';

SettingsView.propTypes = {
  darkMode: PropTypes.bool,
};

SettingsView.defaultProps = {
  darkMode: null,
};

const mapStateToProps = ({ settings }) => ({ ...settings });

export default connect(mapStateToProps)(SettingsView);
