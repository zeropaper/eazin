import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { CircularProgress } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // marginTop: theme.spacing(1),
    '& > button': {
      marginLeft: theme.spacing(2),
    },
  },
});

const ButtonsGroup = ({
  style = null,
  className = null,
  buttons = [],
  classes,
} = {
  style: null,
  className: null,
  buttons: [],
  classes: {},
}) => (
  <div
    style={style}
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
        key: key || text,
        type: 'button',
        variant: rest.type === 'submit' ? 'contained' : 'text',
        color: rest.type === 'submit' ? 'primary' : 'default',
        ...rest,
        size,
        disabled: disabled || loading,
        startIcon,
      };

      return (
        <Button {...props}>{children || text}</Button>
      );
    })}
  </div>
);

ButtonsGroup.propTypes = {
  style: PropTypes.objectOf(PropTypes.object),
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

ButtonsGroup.defaultProps = {
  style: null,
  className: null,
  buttons: [],
};

export default withStyles(styles)(ButtonsGroup);
