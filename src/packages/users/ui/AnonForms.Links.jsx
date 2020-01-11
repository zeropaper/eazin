import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { Link } from 'eazin-core/ui';

const styles = (theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 0,
    marginTop: theme.spacing(2),
    padding: 0,
    listStyle: 'none',
  },
  items: {
    margin: 0,
    padding: 0,
  },
});

const links = {
  login: <Link to="/login">Login</Link>,
  register: <Link to="/register">Register</Link>,
  reset: <Link to="/reset">Reset Password</Link>,
};

const Links = ({
  classes,
  current = 'login',
}) => (
  <ul className={classes.root}>
    {Object.keys(links)
      .filter((key) => key !== current)
      .map((key) => <li key={key} className={classes.item}>{links[key]}</li>)}
  </ul>
);

Links.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  current: PropTypes.string,
};

Links.defaultProps = {
  current: 'login',
};

export default withStyles(styles)(Links);
