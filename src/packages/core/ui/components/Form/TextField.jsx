/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { asField } from 'informed';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    minWidth: '15ch',
  },
}));

const InformedTextField = ({ fieldState, fieldApi, ...props }) => {
  const classes = useStyles();
  const { value, touched } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const {
    onChange,
    onBlur,
    initialValue,
    forwardedRef,
    helperText,
    options,
    field,

    /* eslint-disable react/prop-types */
    defaultValue: droppedDefaultValue,
    fields,
    components,
    component,
    state,
    api,
    /* eslint-enable react/prop-types */

    ...rest
  } = props;

  const defaultValue = !touched && initialValue ? initialValue : '';
  const fieldValue = (value || value === 0) ? value : defaultValue;

  let renderedOptions = null;
  if (typeof options === 'function') {
    renderedOptions = options();
  } else if (Array.isArray(options)) {
    renderedOptions = options.map((option) => {
      if (typeof option === 'string') {
        return (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        );
      }

      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label || option.value}
        </MenuItem>
      );
    });
  } else if (options) {
    renderedOptions = Object.keys(options).map((key) => (
      <MenuItem key={key} value={key}>{options[key]}</MenuItem>
    ));
  }

  if (!rest.required && Array.isArray(renderedOptions)) {
    renderedOptions.unshift(
      <MenuItem key="__empty__" value={null}>&nbsp;</MenuItem>,
    );
  }

  rest.className = `${rest.className} ${classes.root}`.trim();

  // eslint-disable-next-line react/destructuring-assignment
  const errorText = props.error || fieldState.error || fieldState.asyncError;
  return (
    <TextField
      {...rest}
      select={!!renderedOptions}
      name={field}
      inputRef={forwardedRef}
      value={fieldValue}
      inputProps={{
        ...(rest.inputProps || {}),
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
    >
      {renderedOptions}
    </TextField>
  );
};

InformedTextField.propTypes = {
  fieldState: PropTypes.objectOf(PropTypes.any).isRequired,
  fieldApi: PropTypes.objectOf(PropTypes.any).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  forwardedRef: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.node,
  helperText: PropTypes.node,
  initialValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  options: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ])),
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      label: PropTypes.string,
    })),
    PropTypes.func,
  ]),
  field: PropTypes.string.isRequired,
};

InformedTextField.defaultProps = {
  forwardedRef: null,
  onChange: null,
  onBlur: null,
  error: null,
  helperText: null,
  initialValue: null,
  defaultValue: null,
  options: null,
};

export default asField(InformedTextField);
