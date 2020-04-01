import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { Link } from 'eazin-core/ui';

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  items: {
    margin: 0,
    padding: 0,
  },
});

const Links = ({
  classes,
  links,
  current = 'login',
}) => (
  <ul className={classes.root}>
    {Object.keys(links)
      .filter((key) => key !== current && links[key])
      .map((key) => (
        <li key={key} className={classes.item}>
          <Link to={links[key].to}>
            {links[key].text}
          </Link>
        </li>
      ))}
  </ul>
);

Links.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  links: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    PropTypes.bool,
  ])).isRequired,
  current: PropTypes.string,
};

Links.defaultProps = {
  current: 'login',
};

export default withStyles(styles)(Links);
