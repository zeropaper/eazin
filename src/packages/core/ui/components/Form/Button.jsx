/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button as MUIButton,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => createStyles({
  error: {
    color: theme.palette.error.main,
    '&:hover': {
      color: theme.palette.error.dark,
    },
  },
  success: {
    color: theme.palette.success.main,
    '&:hover': {
      color: theme.palette.success.dark,
    },
  },
  errorOutlined: {
    borderColor: fade(theme.palette.error.main, 0.5),
    '&:hover': {
      borderColor: fade(theme.palette.error.dark, 0.5),
    },
  },
  successOutlined: {
    borderColor: fade(theme.palette.success.main, 0.5),
    '&:hover': {
      borderColor: fade(theme.palette.success.dark, 0.5),
    },
  },
  errorContained: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  successContained: {
    color: theme.palette.success.contrastText,
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
}));

const Button = ({
  error,
  success,
  hold,
  children,
  variant,
  ...rest
}) => {
  let content = children;
  const classes = useStyles();

  const [hasError, setError] = useState(!!error);
  if (hasError) {
    content = typeof error === 'string' ? error : 'Error';
    if (!hold) setTimeout(() => setError(false), 3000);
  }

  const [hasSuccess, setSuccess] = useState(!!success);
  if (hasSuccess) {
    content = typeof success === 'string' ? success : 'Success';
    if (!hold) setTimeout(() => setSuccess(false), 3000);
  }

  useEffect(() => {
    setError(!!error);
    setSuccess(!!success);
  }, [error, success]);

  const className = classNames({
    // [rest.className]: rest.className,
    [classes.error]: hasError,
    [classes.success]: hasSuccess,
    [classes.errorOutlined]: hasError && variant === 'outlined',
    [classes.successOutlined]: hasSuccess && variant === 'outlined',
    [classes.errorContained]: hasError && variant === 'contained',
    [classes.successContained]: hasSuccess && variant === 'contained',
  });

  return (
    <MUIButton
      {...rest}
      variant={variant}
      className={className}
    >
      {content}
    </MUIButton>
  );
};

Button.propTypes = {
  error: PropTypes.node,
  success: PropTypes.node,
  hold: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'text',
    'outlined',
    'contained',
  ]),
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
  ]),
};

Button.defaultProps = {
  error: null,
  success: null,
  hold: false,
  children: null,
  variant: 'text',
  color: 'default',
};

export default Button;
