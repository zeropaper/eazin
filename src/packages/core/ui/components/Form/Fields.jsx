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
  fieldClassName,
  components: Components,
}) => Object.keys(fields)
  .map((field) => {
    const props = fields[field];

    const {
      type,
      label,
      fields: subFields = {},
      className,
      access,
      component: Component,
    } = props;

    if (!checkAccess(access, state.values)) return null;

    const subField = prefix ? `${prefix}.${field}` : field;
    const currentFieldClassName = `${fieldClassName || ''} ${className || ''}`.trim();

    const componentProps = {
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

    return <Components.TextField {...componentProps} />;
  })
  .filter(Boolean);

Fields.propTypes = {
  fields: PropTypes.objectOf(PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    fields: PropTypes.object,
    className: PropTypes.string,
  })).isRequired,
  field: PropTypes.string,
  className: PropTypes.string,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  api: PropTypes.objectOf(PropTypes.any).isRequired,
  components: PropTypes.objectOf(PropTypes.elementType),
};

Fields.defaultProps = {
  field: undefined,
  className: null,
  components: {},
};

export default Fields;
