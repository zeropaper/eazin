import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

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
    requested: false,
    setup: false,
    info: null,
    error: null,
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
      .then(() => this.setState({ error: null, requested: false, setup: false }))
      .catch((err) => this.setState({ error: err, requested: false, setup: false }));
  };


  requestSetup = () => this.setState({
    requested: true,
    info: null,
    setup: false,
    error: null,
  }, async () => {
    const { api: { post } } = this.props;
    try {
      this.setState({
        requested: true,
        info: await post('/api/totp/setup'),
        setup: false,
        error: null,
      });
    } catch (err) {
      this.setState({
        requested: true,
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
      .then(() => this.setState({ setup: true }))
      .catch((err) => this.setState({ error: err }));
  };

  render() {
    const {
      requested,
      info,
      setup,
      error,
    } = this.state;
    const { wrapIn: Wrapper, classes } = this.props;

    let content = (
      <Button className={classes.processButton} onClick={this.requestSetup}>
        Setup two-factor authentication
      </Button>
    );

    if (error || setup) {
      content = (
        <Button className={classes.processButton} onClick={this.clearSetup}>
          Clear two-factor authentication
        </Button>
      );
    } else if (requested && !info) {
      content = (
        <div>loading</div>
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
          />

          <Typography gutterBottom component="p" variant="body1">
            Or use the following code:
            <br />
            <code>{info.secret}</code>
            <br />
            And then verify the setup with a generated code.
          </Typography>

          <form onSubmit={this.verifyCode} className={classes.codeForm}>
            <TextField
              required
              label="Code"
              name="code"
            />

            <Button color="primary" variant="contained" type="submit">
              Verify setup
            </Button>
          </form>
        </div>
      );
    }

    return (
      <Wrapper title="Two-factors authentication" data-testid="totp-setup">
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
