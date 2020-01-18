import React from 'react';
import PropTypes from 'prop-types';
import { Form as Informed } from 'informed';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import isEqual from 'lodash.isequal';

import queryAPI from '../../core/util/queryAPI';
import Fields from './Fields';
import ButtonsGroup from './ButtonsGroup';

const styles = (theme) => ({
  field: {
    width: '100%',
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

const recurseErrors = (subFields, subErrors = {}) => {
  Object.keys(subFields).forEach((fieldName) => {
    if (subFields[fieldName].fields) {
      return recurseErrors(subFields[fieldName], subErrors[fieldName]);
    }
    // eslint-disable-next-line no-param-reassign
    subFields[fieldName].error = subErrors[fieldName] || null;
  });
  return subFields;
};

class FormBase extends React.Component {
  state = {
    errors: null,
    error: null,
    loading: false,
    success: null,
  };

  get fields() {
    const { fields } = this.props;
    const { errors } = this.state;

    if (!errors) return fields;

    return recurseErrors(fields, errors);
  }

  getValues = (subFields) => {
    const values = {};
    const used = subFields || this.fields;
    Object.keys(used).forEach((fieldName) => {
      const { initialValue } = used[fieldName];
      if (typeof initialValue === 'undefined') return;
      values[fieldName] = initialValue;
    });
    return values;
  };

  setErrors = () => {};

  registerFormAPI = (api) => {
    this.api = api;
  };

  handlePrepareRequest = (fields) => (new Promise((res) => {
    this.setState({
      error: null,
      errors: null,
      loading: true,
      success: null,
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
    success: true,
  }, () => {
    const { onSuccess, resetOnSuccess } = this.props;
    if (typeof onSuccess === 'function') onSuccess(result);
    if (resetOnSuccess && this.api) this.api.reset();
  });

  handleFailure = (err) => this.setState({
    errors: err.fields,
    error: err.message,
    loading: false,
    success: null,
  }, () => {
    const { onError, resetOnError } = this.props;
    if (typeof onError === 'function') onError(err);
    if (resetOnError && this.api) this.api.reset();
    // throw err;
  });

  handleSubmit = async (fields) => {
    const {
      onSubmit,
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
      this.handleFailure(err);
    }
  };

  renderContent = (renderProps) => (
    <>
      {this.renderFields(renderProps)}
      {this.renderSuccess(renderProps)}
      {this.renderError(renderProps)}
      {this.renderButtons(renderProps)}
      {this.renderDebug()}
    </>
  );

  renderFields = ({ formState, formApi }) => {
    const { fieldClassName, classes } = this.props;
    const { loading } = this.state;

    return (
      <Fields
        fields={this.fields}
        fieldClassName={fieldClassName || classes.field}
        state={formState}
        api={{ ...formApi, loading }}
      />
    );
  };

  renderSuccess = () => {
    const { successMessage, autoHideDelay } = this.props;
    const { loading, success } = this.state;
    return (
      <Snackbar
        open={!loading && !!success}
        autoHideDuration={autoHideDelay || 6000}
      >
        <Alert severity="success" variant="filled">
          {success === true ? (successMessage || 'Success') : success}
        </Alert>
      </Snackbar>
    );
  };

  renderError = () => {
    const { errorMessage, autoHideDelay } = this.props;
    const { loading, error, errors } = this.state;
    return (
      <Snackbar
        open={!loading && (!!error || !!errors)}
        autoHideDuration={autoHideDelay || 6000}
      >
        <Alert severity="error" variant="filled">
          {error === true ? errorMessage : error}
        </Alert>
      </Snackbar>
    );
  };

  renderButtons = () => {
    const { buttons, fieldClassName } = this.props;
    const formState = this.api.getState();
    const fieldValues = this.getValues();
    const pristine = isEqual(fieldValues, formState.values);
    const state = {
      ...formState,
      pristine,
      dirty: !pristine,
    };
    return (
      <ButtonsGroup
        buttons={typeof buttons === 'function'
          ? buttons(state, this.api)
          : buttons}
        className={fieldClassName}
      />
    );
  };

  renderDebug = () => {
    if (process.env.NODE_ENV === 'production') return null;

    const { debug } = this.props;
    if (!debug) return null;
    return (
      <details open>
        <summary>Form State</summary>
        <pre>{JSON.stringify(this.api ? this.api.getState() : null, null, 2)}</pre>
      </details>
    );
  };

  render() {
    const { render, className } = this.props;

    return (
      <Informed
        noValidate
        className={className}
        onSubmit={this.handleSubmit}
        render={render || this.renderContent}
        getApi={this.registerFormAPI}
      />
    );
  }
}

FormBase.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  method: PropTypes.string,
  url: PropTypes.string,
  processFields: PropTypes.func,
  onSubmit: PropTypes.func,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  fields: PropTypes.objectOf(PropTypes.object).isRequired,
  render: PropTypes.func,
  fieldClassName: PropTypes.string,
  buttons: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  debug: PropTypes.bool,
  resetOnSuccess: PropTypes.bool,
  resetOnError: PropTypes.bool,
  // Infinity is a number
  autoHideDelay: PropTypes.number,
};

FormBase.defaultProps = {
  className: null,
  method: null,
  url: null,
  processFields: null,
  onSubmit: null,
  onSuccess: null,
  onError: null,
  render: null,
  fieldClassName: null,
  buttons: null,
  errorMessage: null,
  successMessage: null,
  debug: null,
  resetOnSuccess: null,
  resetOnError: null,
  autoHideDelay: null,
};

export default withStyles(styles)(FormBase);
