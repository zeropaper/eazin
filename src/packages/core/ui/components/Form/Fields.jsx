import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const checkAccess = (access, values) => {
  if (access === false) return false;
  if (!access) return true;
  const str = typeof access === 'string';
  const value = get(values, str ? access : access.field);
  return str ? !!access : access.value === value;
};

const Fields = ({
  fields,
  field: prefix = '',
  state,
  api,
  className: fieldsClassName,
  fieldClassName,
  components: Components,
}) => {
  const els = Object.keys(fields)
    .map((field) => {
      const props = fields[field];
      if (!props) return null;

      /* eslint-disable react/prop-types */
      const {
        type,
        label,
        fields: subFields = {},
        className,
        access,
        component: Component,
      } = props;
      /* eslint-enable react/prop-types */

      if (!checkAccess(access, state.values)) return null;

      const subField = prefix ? `${prefix}.${field}` : field;
      const currentFieldClassName = `${fieldClassName || ''} ${className || ''}`.trim();

      const componentProps = {
        // setting props of TextField is meant to
        // prevent a setMemo() usage error
        // due to mismatching amount of props
        autoComplete: undefined,
        autoFocus: undefined,
        classes: undefined,
        color: undefined,
        defaultValue: undefined,
        disabled: undefined,
        error: undefined,
        // seems to cause problems...
        // FormHelperTextProps: undefined,
        fullWidth: undefined,
        helperText: undefined,
        id: undefined,
        // InputLabelProps: undefined,
        // InputProps: undefined,
        inputProps: undefined,
        inputRef: undefined,
        margin: undefined,
        multiline: undefined,
        name: undefined,
        onChange: undefined,
        placeholder: undefined,
        required: undefined,
        rows: undefined,
        // rowsMax: undefined,
        select: undefined,
        // SelectProps: undefined,
        size: undefined,
        type: undefined,
        value: undefined,
        variant: undefined,

        ...props,
        components: Components,
        key: field,
        label,
        fields: subFields,
        field: subField,
        state,
        api,
        className: currentFieldClassName,
      };

      if (typeof component === 'string') {
        const Comp = Components[Component];
        return <Comp {...componentProps} />;
      }

      if (Component) return <Component {...componentProps} />;

      if (type === 'fieldset') return <Components.FieldSet {...componentProps} />;

      if (type === 'checkbox') return <Components.CheckBox {...componentProps} />;

      if (type === 'fields' || Object.keys(subFields).length) {
        return <Fields {...componentProps} />;
      }

      if (componentProps.required
        && typeof componentProps.validate !== 'function') {
        componentProps.validate = (val) => {
          if (!(val || '').trim()) return 'The field cannot be empty';
        };
      }

      return <Components.TextField {...componentProps} />;
    })
    .filter(Boolean);
  if (!fieldsClassName) return els;
  return (
    <div className={fieldsClassName}>
      {els}
    </div>
  );
};

Fields.propTypes = {
  fields: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.string,
      label: PropTypes.string,
      // eslint-disable-next-line
      fields: PropTypes.object,
      className: PropTypes.string,
      component: PropTypes.elementType,
      access: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
    PropTypes.bool,
  ])).isRequired,
  field: PropTypes.string,
  className: PropTypes.string,
  fieldClassName: PropTypes.string,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  api: PropTypes.objectOf(PropTypes.any).isRequired,
  components: PropTypes.objectOf(PropTypes.elementType),
};

Fields.defaultProps = {
  field: undefined,
  className: null,
  fieldClassName: null,
  components: {},
};

export default Fields;
