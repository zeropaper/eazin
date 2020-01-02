import React from 'react';
import PropTypes from 'prop-types';
import { Form as Informed } from 'informed';

import { Typography } from '@material-ui/core';
import queryAPI from '../../core/util/queryAPI';
import Fields from './Fields';

class FormBase extends React.Component {
  state = {
    errors: null,
    error: null,
    loading: false,
  };

  handlePrepareRequest = (fields) => (new Promise((res) => {
    this.setState({
      error: null,
      errors: null,
      loading: true,
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
    loading: false,
  }, () => {
    const { onSuccess } = this.props;
    if (typeof onSuccess === 'function') onSuccess(result);
  });

  handleFailure = (err) => this.setState({
    errors: err.fields || {},
    error: err.message,
    loading: false,
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
        loading: false,
      });
      if (typeof onFailure === 'function') onFailure(err);
      throw err;
    }
  };

  renderError = () => {
    const { fieldClassName } = this.props;
    const { loading, errors, error } = this.state;
    if (loading || !(errors || error)) return null;
    return (
      <Typography color="error" className={fieldClassName}>
        {error}
      </Typography>
    );
  };

  renderFields = ({ formState, formApi }) => {
    const { fields, fieldClassName } = this.props;
    const { loading } = this.state;

    return (
      <>
        {this.renderError()}
        <Fields
          fields={fields}
          fieldClassName={fieldClassName}
          state={formState}
          api={{ ...formApi, loading }}
        />
      </>
    );
  };

  render() {
    const { render } = this.props;

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
