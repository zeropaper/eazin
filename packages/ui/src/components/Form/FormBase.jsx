import React from 'react';
import PropTypes from 'prop-types';
import { Form as Informed } from 'informed';

import queryAPI from '../../core/util/queryAPI';
import Fields from './Fields';

class FormBase extends React.Component {
  state = {
    errors: null,
    error: null,
  };

  handleSubmit = async (fields) => {
    const {
      onSubmit,
      onSuccess,
      onFailure,
      method,
      url,
      processFields,
      userToken,
    } = this.props;
    try {
      const processed = typeof processFields === 'function'
        ? processFields(fields)
        : fields;

      if (onSubmit) {
        await onSubmit(processed);
        return;
      }

      if (method && url) {
        const headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        };
        if (userToken) headers.Authorization = `Bearer ${userToken}`;
        const result = await queryAPI(url, {
          method: method.toUpperCase(),
          body: JSON.stringify(processed),
          headers,
        });
        if (typeof onSuccess === 'function') onSuccess(result);
      }
    } catch (err) {
      this.setState({
        errors: err.fields || {},
        error: err.message,
      });
      if (typeof onFailure === 'function') onFailure(err);
      throw err;
    }
  };

  // eslint-disable-next-line no-unused-vars
  renderFields = ({ formState, formApi }) => {
    const { fields, fieldClassName } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { errors, error } = this.state;

    // // eslint-disable-next-line no-console
    // console.info('errors, error', errors, error);

    return (
      <Fields
        fields={fields}
        fieldClassName={fieldClassName}
        state={formState}
        api={formApi}
      />
    );
  };

  render() {
    const {
      render,
    } = this.props;

    return (
      <Informed
        onSubmit={this.handleSubmit}
        noValidate
        render={render || this.renderFields}
      />
    );
  }
}

FormBase.propTypes = {
  method: PropTypes.string,
  url: PropTypes.string,
  processFields: PropTypes.func,
  onSubmit: PropTypes.func,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  fields: PropTypes.objectOf(PropTypes.object).isRequired,
  render: PropTypes.func,
  fieldClassName: PropTypes.string,
  userToken: PropTypes.string,
};

FormBase.defaultProps = {
  method: null,
  url: null,
  processFields: null,
  onSubmit: null,
  onSuccess: null,
  onFailure: null,
  render: null,
  fieldClassName: null,
  userToken: null,
};

export default FormBase;
