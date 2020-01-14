import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-cycle
import FieldSet from './FieldSet';
import TextField from './TextField';
import Checkbox from './Checkbox';
import ButtonsGroup from './ButtonsGroup';

// const Checkbox = () => null;

const Fields = ({
  fields,
  field: prefix = '',
  state,
  api,
  fieldClassName,
}) => Object.keys(fields)
  .map((field) => {
    const props = fields[field];

    const {
      type,
      label,
      fields: subFields = {},
      buttons,
      className,
    } = props;

    const subField = prefix ? `${prefix}.${field}` : field;
    const currentFieldClassName = `${fieldClassName || ''} ${className || ''}`.trim();

    if (type === 'fieldset') {
      return (
        <FieldSet
          key={field}
          label={label}
          fields={subFields}
          field={subField}
          state={state}
          api={api}
          className={currentFieldClassName}
        />
      );
    }

    if (type === 'fields') {
      return (
        <Fields
          key={field}
          label={label}
          fields={subFields}
          field={subField}
          state={state}
          api={api}
          className={currentFieldClassName}
        />
      );
    }

    if (buttons) {
      const pristine = !Object.keys(state.touched).length;
      const bState = {
        ...state,
        pristine,
        dirty: !pristine,
      };
      // console.info('button state', bState);
      return (
        <ButtonsGroup
          key={field}
          buttons={typeof buttons === 'function' ? buttons(bState, api, field, fields) : buttons}
          className={currentFieldClassName}
        />
      );
    }

    if (type === 'checkbox') {
      return (
        <Checkbox
          {...props}
          key={field}
          field={subField}
          className={currentFieldClassName}
        />
      );
    }

    return (
      <TextField
        {...props}
        key={field}
        field={subField}
        className={currentFieldClassName}
      />
    );
  })
  .filter(Boolean);

Fields.propTypes = {
  fields: PropTypes.objectOf(PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    fields: PropTypes.object,
    buttons: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.func,
    ]),
    className: PropTypes.string,
  })).isRequired,
  field: PropTypes.string,
  className: PropTypes.string,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  api: PropTypes.objectOf(PropTypes.any).isRequired,
};

Fields.defaultProps = {
  field: undefined,
  className: null,
};

export default Fields;
