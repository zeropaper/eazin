import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import { DangerButton } from 'eazin-core/ui/components/Form';

const styles = (theme) => ({
  root: {},
  qrContent: {
    maxWidth: 450,
    margin: `${theme.spacing(2)}px auto`,
    textAlign: 'center',
  },
  alert: {
    maxWidth: 450,
    margin: `0 auto ${theme.spacing(2)}px auto`,
  },
  qrCode: {
    background: 'white',
    maxWidth: '65vw',
    margin: 'auto',
  },
});

const SetupAlert = ({ setup, error, className }) => ((error && (
  <Alert className={className} severity="error">
    {error.message}
  </Alert>
)) || (
  setup ? (
    <Alert className={className} severity="info">
      Two-factor authentication is setup
    </Alert>
  ) : (
    <Alert className={className} severity="warning">
      Two-factor authentication is not setup
    </Alert>
  )
));

class TwoFASetupForm extends React.Component {
  state = {
    setup: false,
    info: null,
    error: null,
    backupCodes: null,
  };

  async componentDidMount() {
    const { api: { get } } = this.props;
    try {
      const setup = await get('/api/totp/setup');
      this.setState({ setup });
    } catch (err) {
      this.setState({ setup: false, error: err });
    }
  }

  clearSetup = () => {
    const { api: { delete: del } } = this.props;
    del('/api/totp')
      .then(() => this.setState({
        error: null,
        setup: false,
      }))
      .catch((err) => this.setState({
        error: err,
        setup: false,
      }));
  };


  requestSetup = () => this.setState({
    info: null,
    setup: false,
    error: null,
  }, async () => {
    const { api: { post } } = this.props;
    try {
      this.setState({
        info: await post('/api/totp/setup'),
        setup: false,
        error: null,
      });
    } catch (err) {
      this.setState({
        info: null,
        setup: false,
        error: err,
      });
    }
  });

  verifyCode = (evt) => {
    evt.preventDefault();
    const { api: { post } } = this.props;
    const { target: form } = evt;
    const code = form.querySelector('[name="code"]').value;
    post('/api/totp/verify', {
      body: { code },
    })
      .then(({ backupCodes }) => this.setState({ setup: true, backupCodes }))
      .catch((err) => this.setState({ error: err }));
  };

  render() {
    const {
      info,
      setup,
      error,
      backupCodes,
    } = this.state;
    const { wrapIn: Wrapper, classes } = this.props;

    let content = (
      <Button
        variant="contained"
        className={classes.processButton}
        onClick={this.requestSetup}
        data-testid="totp-setup-button"
      >
        Setup two-factor authentication
      </Button>
    );

    if (backupCodes) {
      content = (
        <Typography component="div">
          <Typography gutterBottom component="p" variant="body1">
            Store these backup codes in a safe place.
            <br />
            You may use them if you lose the device used for authentication.
          </Typography>
          <ol data-testid="totp-backup-codes">
            {backupCodes.map((bCode) => (<li key={bCode}>{bCode}</li>))}
          </ol>
        </Typography>
      );
    } else if (error || setup) {
      content = (
        <DangerButton
          dialogTitle="Remove two-factor authentication?"
          dialogContent="This will reduce the security of your account."
          variant="contained"
          className={classes.processButton}
          onClick={this.clearSetup}
          data-testid="totp-clear-setup"
        >
          Clear two-factor authentication
        </DangerButton>
      );
    } else if (info) {
      content = (
        <div className={classes.qrContent}>
          <Typography gutterBottom component="p" variant="body1">
            Scan this QR code with Google Authenticator
          </Typography>

          <img
            className={classes.qrCode}
            src={info.qr64}
            alt="QR code"
            title="Scan this QR code with Google Authenticator"
            data-testid="totp-qr-code"
          />

          <Typography gutterBottom component="p" variant="body1">
            Or use the following code:
            <br />
            <code data-testid="totp-secret">{info.secret}</code>
            <br />
            And then verify the setup with a generated code.
          </Typography>

          <form onSubmit={this.verifyCode} className={classes.codeForm}>
            <TextField
              data-testid="totp-code-verif-field"
              required
              label="Code"
              name="code"
            />

            <Button
              data-testid="totp-code-verif-submit"
              color="primary"
              variant="contained"
              type="submit"
            >
              Verify setup
            </Button>
          </form>
        </div>
      );
    }

    return (
      <Wrapper title="Two-factor authentication" data-testid="totp-setup">
        <SetupAlert
          setup={!!setup}
          error={error}
          className={classes.alert}
        />

        {content}
      </Wrapper>
    );
  }
}

TwoFASetupForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  wrapIn: PropTypes.elementType.isRequired,
  api: PropTypes.shape({
    get: PropTypes.func,
    post: PropTypes.func,
    delete: PropTypes.func,
  }).isRequired,
};

export default withStyles(styles)(TwoFASetupForm);
