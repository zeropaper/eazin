import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from './Button';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    justifySelf: 'flex-end',
    flexGrow: 1,
    '& > button': {
      minWidth: 0,
      flexGrow: 0,
      marginLeft: theme.spacing(2),
    },
  },
});

const ActionButtons = ({
  className = null,
  buttons = [],
  classes,
  color,
  fullWidth,
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
        <Button {...props}>{children || text}</Button>
      );
    })}
  </div>
);

const variantProp = PropTypes.oneOf([
  'text',
  'outlined',
  'contained',
]);
const colorProp = PropTypes.oneOf([
  'default',
  'inherit',
  'primary',
  'secondary',
]);
ActionButtons.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  color: colorProp,
  variant: variantProp,
  fullWidth: PropTypes.bool,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    variant: variantProp,
    color: colorProp,
    type: PropTypes.string,
    disabled: PropTypes.bool,
  })),
};

ActionButtons.defaultProps = {
  className: null,
  buttons: [],
  variant: 'text',
  color: 'default',
  fullWidth: null,
};

export default withStyles(styles)(ActionButtons);
