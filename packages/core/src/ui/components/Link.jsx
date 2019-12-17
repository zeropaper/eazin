/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import MUILink from '@material-ui/core/Link';

const Link = ({
  color,
  underline,
  variant,
  children,
  to,
}) => (
  <MUILink
    {...({
      color,
      underline,
      variant,
    })}
    component={React.forwardRef((props, ref) => (
      <RouterLink innerRef={ref} {...props} to={to} />
    ))}
  >
    {children}
  </MUILink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'default',
    'error',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
  ]),
  underline: PropTypes.oneOf([
    'none',
    'hover',
    'always',
  ]),
  variant: PropTypes.string,
};

Link.defaultProps = {
  children: null,
  color: undefined,
  underline: undefined,
  variant: undefined,
};

export default Link;
