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

class FormBase extends React.Component {
  state = {
    errors: null,
    error: null,
    loading: false,
  };

  getValues = (subFields) => {
    const { fields } = this.props;
    const values = {};
    const used = subFields || fields;
    Object.keys(used).forEach((fieldName) => {
      const { initialValue } = used[fieldName];
      if (typeof initialValue === 'undefined') return;
      values[fieldName] = initialValue;
    });
    return values;
  };

  registerFormAPI = (api) => {
    this.api = api;
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
  })
  ;

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
    const { fields, fieldClassName, classes } = this.props;
    const { loading } = this.state;

    return (
      <Fields
        fields={fields}
        fieldClassName={fieldClassName || classes.field}
        state={formState}
        api={{ ...formApi, loading }}
      />
    );
  };

  renderSuccess = () => {
    const { successMessage } = this.props;
    const { loading, success } = this.state;
    return (
      <Snackbar
        open={!loading && !!success}
        autoHideDuration={6000}
      >
        <Alert severity="success" variant="filled">
          {success === true ? successMessage : success}
        </Alert>
      </Snackbar>
    );
  };

  renderError = () => {
    const { errorMessage } = this.props;
    const { loading, error, errors } = this.state;
    return (
      <Snackbar
        open={!loading && (!!error || !!errors)}
        autoHideDuration={6000}
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
        className={className}
        onSubmit={this.handleSubmit}
        noValidate
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
  onFailure: PropTypes.func,
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
};

FormBase.defaultProps = {
  className: null,
  method: null,
  url: null,
  processFields: null,
  onSubmit: null,
  onSuccess: null,
  onFailure: null,
  render: null,
  fieldClassName: null,
  buttons: null,
  errorMessage: null,
  successMessage: null,
  debug: null,
};

export default withStyles(styles)(FormBase);
