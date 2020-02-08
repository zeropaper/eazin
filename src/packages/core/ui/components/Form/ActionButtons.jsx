/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > button': {
      marginLeft: theme.spacing(2),
    },
  },
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
});

const CustomButton = ({
  error,
  success,
  hold,
  children,
  classes,
  variant,
  ...rest
}) => {
  let content = children;

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

  return (
    <Button
      {...rest}
      variant={variant}
      className={classNames({
        [classes.error]: hasError,
        [classes.success]: hasSuccess,
        [classes.errorOutlined]: hasError && variant === 'outlined',
        [classes.successOutlined]: hasSuccess && variant === 'outlined',
        [classes.errorContained]: hasError && variant === 'contained',
        [classes.successContained]: hasSuccess && variant === 'contained',
      })}
    >
      {content}
    </Button>
  );
};

const ActionButtons = ({
  className = null,
  buttons = [],
  classes,
  color,
  fullWidth,
  href,
  ...btnDefaults
} = {
  className: null,
  buttons: [],
  classes: {},
}) => (
  <div
    className={classNames(classes.root, className)}
  >
    {(buttons || []).map((info) => {
      const {
        children,
        text,
        key,
        loading,
        startIcon: defaultStartIcon,
        size,
        disabled,
        success,
        error,
        ...rest
      } = info;

      const startIcon = (loading && (
        <CircularProgress
          color="inherit"
          // eslint-disable-next-line no-nested-ternary
          size={size === 'large' ? 22 : (size === 'small' ? 18 : 20)}
        />
      )) || defaultStartIcon;

      const props = {
        color: rest.type === 'submit' ? 'primary' : 'default',
        ...btnDefaults,
        key: key || text,
        type: 'button',
        classes,
        ...rest,
        size: size || btnDefaults.size,
        disabled: disabled || loading,
        startIcon,
      };

      if (success) {
        props.success = 'Success';
        if (typeof success === 'string') props.success = success;
      }
      if (error) {
        props.error = 'Error';
        if (typeof error === 'string') props.error = error;
      }


      // console.info('props', btnDefaults.size, size, props.size);

      return (
        <CustomButton {...props}>{children || text}</CustomButton>
      );
    })}
  </div>
);

ActionButtons.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
  })),
};

ActionButtons.defaultProps = {
  className: null,
  buttons: [],
};

export default withStyles(styles)(ActionButtons);
