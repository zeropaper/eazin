/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
  },
});

const SimpleFieldWithSubmit = ({
  classes,
  onSubmit,
  ...rest
}) => {
  const [error, setError] = useState(null);

  const handleSubmit = async (evt) => {
    evt.persist();
    if (typeof evt.preventDefault === 'function') evt.preventDefault();
    if (typeof evt.stopPropagation === 'function') evt.stopPropagation();
    setError(null);

    const { value } = evt.type === 'submit'
      ? evt.target.querySelector('input, textarea')
      : evt.target;

    try {
      await onSubmit(value);
    } catch (err) {
      setError(err.message);
      // eslint-disable-next-line no-console
      console.error(err.stack);
    }
  };

  const { inputProps = {} } = rest;
  const props = {
    ...rest,
    inputProps: {
      ...(inputProps || {}),
      'data-testid': (inputProps || {})['data-testid'] || 'autosubmitfield-input',
    },
    error: !!error,
    helperText: error,
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        {...props}
      />
      <Button
        data-testid={`${
          // eslint-disable-next-line react/destructuring-assignment
          props.inputProps['data-testid']
        }-button`}
        type="submit"
      >
        OK
      </Button>
    </form>
  );
};

SimpleFieldWithSubmit.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  inputProps: PropTypes.shape({
    'data-testid': PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

SimpleFieldWithSubmit.defaultProps = {
  inputProps: null,
};

export default withStyles(styles)(SimpleFieldWithSubmit);
