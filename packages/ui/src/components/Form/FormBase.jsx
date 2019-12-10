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

  handlePrepareRequest = (fields) => (new Promise((res) => {
    this.setState({
      error: null,
      errors: null,
    }, () => {
      const { processFields } = this.props;
      res(typeof processFields === 'function'
        ? processFields(fields)
        : fields);
    });
  }));

  handleSuccess = (result) => this.setState({
    error: null,
    errors: null,
  }, () => {
    const { onSuccess } = this.props;
    if (typeof onSuccess === 'function') onSuccess(result);
  });

  handleFailure = (err) => this.setState({
    errors: err.fields || {},
    error: err.message,
  }, () => {
    const { onFailure } = this.props;
    if (typeof onFailure === 'function') onFailure(err);
  });

  handleSubmit = async (fields) => {
    const {
      onSubmit,
      onFailure,
      method,
      url,
    } = this.props;
    try {
      const processed = await this.handlePrepareRequest(fields);

      if (typeof onSubmit === 'function') {
        const result = await onSubmit(processed);
        this.handleSuccess(result);
        return;
      }

      if (method && url) {
        const result = await queryAPI(url, {
          method,
          body: processed,
        });
        this.handleSuccess(result);
        return;
      }

      throw new Error('Missing either "onSubmit" or "method" + "url"');
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
};

export default FormBase;
