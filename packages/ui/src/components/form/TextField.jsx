/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { asField } from 'informed';
import { TextField } from '@material-ui/core';

const InformedTextField = ({ fieldState, fieldApi, ...props }) => {
  const { value, touched } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    initialValue,
    defaultValue: droppedDefaultValue,
    forwardedRef,
    helperText,
    ...rest
  } = props;

  const defaultValue = !touched && initialValue ? initialValue : '';
  const fieldValue = (value || value === 0) ? value : defaultValue;

  // eslint-disable-next-line react/destructuring-assignment
  const errorText = props.error || fieldState.error || fieldState.asyncError;
  return (
    <TextField
      {...rest}
      name={rest.field}
      inputRef={forwardedRef}
      value={fieldValue}
      inputProps={{
        onChange: (e) => {
          setValue(e.target.value);
          if (onChange) onChange(e);
        },
        onBlur: (e) => {
          setTouched(true);
          if (onBlur) onBlur(e);
        },
      }}
      helperText={errorText || helperText}
      error={!!errorText}
    />
  );
};

InformedTextField.propTypes = {
  fieldState: PropTypes.objectOf(PropTypes.any).isRequired,
  fieldApi: PropTypes.objectOf(PropTypes.any).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  forwardedRef: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  initialValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

InformedTextField.defaultProps = {
  forwardedRef: null,
  onChange: null,
  onBlur: null,
  error: null,
  helperText: null,
  initialValue: null,
  defaultValue: null,
};

export default asField(InformedTextField);
