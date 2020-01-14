/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { asField } from 'informed';
import {
  Checkbox, FormControlLabel, FormHelperText, FormControl, FormLabel,
} from '@material-ui/core';

const InformedCheckbox = ({ fieldState, fieldApi, ...props }) => {
  const { value, touched } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    initialValue,
    defaultValue: droppedDefaultValue,
    forwardedRef,
    helperText,
    label,
    className,
    required,
    disabled,
    validate,
    fullWidth,
    ...rest
  } = props;

  const defaultValue = !touched && initialValue ? initialValue : '';
  const fieldValue = (value || value === 0) ? value : defaultValue;

  // eslint-disable-next-line react/destructuring-assignment
  const errorText = props.error || fieldState.error || fieldState.asyncError;
  return (
    <FormControl
      disabled={disabled}
      required={required}
      fullWidth={fullWidth}
      error={!!errorText}
    >
      <FormLabel>{label}</FormLabel>
      <FormControlLabel
        required={required}
        disabled={disabled}
        control={(
          <Checkbox
            {...rest}
            name={rest.field}
            inputRef={forwardedRef}
            checked={!!fieldValue}
            inputProps={{
              onChange: (e) => {
                setValue(e.target.checked);
                setTouched(!!fieldValue !== e.target.checked);
                if (onChange) onChange(e);
              },
              onBlur: (e) => {
                // setTouched(true);
                setTouched(!!fieldValue !== e.target.checked);
                if (onBlur) onBlur(e);
              },
            }}
          />
        )}
        label={helperText}
      />
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};

InformedCheckbox.propTypes = {
  fieldState: PropTypes.objectOf(PropTypes.any).isRequired,
  fieldApi: PropTypes.objectOf(PropTypes.any).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  forwardedRef: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.node,
  helperText: PropTypes.node,
  validate: PropTypes.func,
  initialValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

InformedCheckbox.defaultProps = {
  forwardedRef: null,
  onChange: null,
  onBlur: null,
  error: null,
  className: null,
  label: null,
  helperText: null,
  validate: null,
  initialValue: null,
  defaultValue: null,
  required: null,
  disabled: null,
  fullWidth: null,
};

export default asField(InformedCheckbox);
