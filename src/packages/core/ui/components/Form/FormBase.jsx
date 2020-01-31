import React from 'react';
import PropTypes from 'prop-types';
import { Form as Informed } from 'informed';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import isEqual from 'lodash.isequal';

import queryAPI from '../../core/util/queryAPI';

import * as baseComponents from './FormBase.components';
import { withErrorBoundary } from '../ErrorBoundary';

const { Fields, Buttons } = baseComponents;

const styles = (theme) => ({
  field: {
    width: '100%',
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const recurseErrors = (subFields, subErrors = {}) => {
  Object.keys(subFields).forEach((fieldName) => {
    if (subFields[fieldName].fields) {
      return recurseErrors(subFields[fieldName].fields, subErrors[fieldName]);
    }
    if (!subFields[fieldName] || typeof subFields[fieldName] === 'string') return;
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

  get components() {
    const {
      components: formComponents = {},
    } = this.props;
    return {
      ...baseComponents,
      ...formComponents,
    };
  }

  get formState() {
    const { loading } = this.state;
    const formState = this.api.getState();
    const touched = !!Object.keys(formState.touched).length;
    const values = this.getValues();
    const pristine = !touched && isEqual(values, formState.values);
    return {
      ...formState,
      pristine,
      dirty: !pristine,
      loading,
    };
  }

  getValues = (subFields = this.fields) => {
    const values = {};
    Object.keys(subFields).forEach((fieldName) => {
      const { initialValue, fields } = subFields[fieldName];
      if (typeof initialValue === 'undefined' && !fields) return;
      if (fields) {
        const sub = this.getValues(fields);
        if (!Object.keys(sub).length) return;
        values[fieldName] = sub;
      } else {
        values[fieldName] = initialValue;
      }
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

  renderFields = ({ formApi }) => {
    const { fieldClassName, classes } = this.props;

    return (
      <Fields
        components={this.components}
        fields={this.fields}
        fieldClassName={fieldClassName || classes.field}
        state={this.formState}
        api={formApi}
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
    const { props: { buttons, fieldClassName }, formState } = this;
    return (
      <Buttons
        buttons={typeof buttons === 'function'
          ? buttons(formState, this.api)
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
  components: PropTypes.objectOf(PropTypes.elementType),
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
  components: {},
};

export default withErrorBoundary(withStyles(styles)(FormBase));
