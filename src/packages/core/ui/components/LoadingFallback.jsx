import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  text: {
    fontFamily: 'sans-serif',
  },
};

const Fallback = ({ empty }) => !empty && (
  <div style={styles.wrapper}>
    <span style={styles.text}>Loading...</span>
  </div>
);

Fallback.propTypes = {
  empty: PropTypes.bool,
};

Fallback.defaultProps = {
  empty: null,
};

export default Fallback;
