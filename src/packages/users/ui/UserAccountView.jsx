import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { parse } from 'querystring';

import { Form, PluginPoint } from 'eazin-core/ui';
import Alert from '@material-ui/lab/Alert';
import { validMail, validPassword } from './user.validators';
import { setUser } from './user.actions';
import UserPropTypes from './user.propTypes';
import Wrapper from './UserAccountView.Wrapper';


export const defaultButtons = ({ pristine, invalid, loading }) => ([
  {
    text: 'Reset',
    type: 'reset',
    disabled: pristine || loading,
  },
  {
    text: 'Update',
    type: 'submit',
    disabled: pristine || invalid || loading,
  },
]);

const required = {
  required: true,
  validateOnChange: true,
};

// eslint-disable-next-line react/prop-types
export const ProfileForm = ({ firstName, lastName, updateStoreUser }) => (
  <Form
    key={`${firstName}-${lastName}`}
    method="patch"
    url="/api/user"
    resetOnSuccess
    fields={{
      firstName: {
        label: 'First Name',
        ...required,
        fullWidth: true,
        initialValue: firstName,
      },
      lastName: {
        label: 'Last Name',
        ...required,
        fullWidth: true,
        initialValue: lastName,
      },
    }}
    buttons={defaultButtons}
    onSuccess={updateStoreUser}
  />
);

export const PasswordChangeForm = () => (
  <Form
    method="post"
    url="/api/user/password"
    fields={{
      current: {
        label: 'Current Password',
        type: 'password',
        ...required,
        fullWidth: true,
        validate: validPassword,
      },
      password: {
        label: 'New Password',
        type: 'password',
        ...required,
        fullWidth: true,
        validate: validPassword,
      },
      passwordConfirm: {
        label: 'Confirmation',
        type: 'password',
        ...required,
        fullWidth: true,
        validate: (val = '', vals) => {
          if (val !== vals.password) return 'Passwords don\'t match';
        },
      },
    }}

    buttons={({
      pristine,
      invalid,
      loading,
      values: { current, passwordConfirm },
    }) => ([
      {
        text: 'Reset',
        type: 'reset',
        disabled: pristine || loading,
      },
      {
        text: 'Update',
        type: 'submit',
        disabled: pristine
          || invalid
          || loading
          || !current
          || !passwordConfirm,
      },
    ])}
  />
);

export class EmailChangeForm extends React.Component {
  mounted = false;

  state = {
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.mounted = true;
    const {
      email,
      search,
      navigate,
      patch,
      dispatch,
    } = this.props;
    const {
      loading,
    } = this.state;

    const query = parse(search.slice(1));
    if (!query.token || loading) return;

    this.setState({
      loading: true,
      error: null,
    });

    try {
      const user = await patch('/api/user/email', {
        body: { email, token: query.token },
      });

      dispatch(setUser(user));

      if (!this.mounted) return;
      this.setState({
        loading: false,
        error: null,
      });
    } catch (err) {
      if (!this.mounted) return;
      this.setState({
        loading: false,
        error: err.message,
      });
    } finally {
      navigate('/account');
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const {
      email,
    } = this.props;
    const {
      loading,
      error,
    } = this.state;

    return (
      <>
        <Alert severity="info">
          Your current email address is&nbsp;
          <strong>
            {email}
          </strong>
        </Alert>

        {error && (
          <Alert severity="error">
            Something went wrong while changing email address
          </Alert>
        )}

        <Form
          method="patch"
          url="/api/user/email"
          successMessage="Email sent!"
          errorMessage="An error occured"
          fields={{
            email: {
              label: 'New Email Address',
              type: 'email',
              ...required,
              validate: (emailValue) => {
                if ((emailValue || '').trim() === email) {
                  return 'You need to use a new email address';
                }
                return validMail(emailValue);
              },
              fullWidth: true,
              // eslint-disable-next-line max-len
              helperText: 'A verification email will first be send to this address. The new address will be effective only once verified',
            },
          }}
          buttons={({
            pristine,
            invalid,
            values: {
              email: emailValue,
            },
            loading: formLoading,
          }) => [
            {
              text: 'Send verification mail',
              type: 'submit',
              disabled: pristine
                || formLoading
                || loading
                || invalid
                || !emailValue.trim()
                || emailValue.trim() === email,
            },
          ]}
        />
      </>
    );
  }
}

EmailChangeForm.propTypes = {
  email: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  patch: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const AccountView = ({
  api: { patch },
  classes,
  user,
  location: {
    search,
  },
  history: {
    push: navigate,
  },
  dispatch,
}) => (
  <div className={classes.root}>
    <Grid
      container
      cols={3}
      spacing={2}
      className={classes.grid}
    >
      <Wrapper title="Profile" data-testid="profile">
        <ProfileForm
          firstName={user.firstName}
          lastName={user.lastName}
          updateStoreUser={(data) => dispatch(setUser(data))}
        />
      </Wrapper>

      <Wrapper title="Password" data-testid="password-change">
        <PasswordChangeForm />
      </Wrapper>

      <Wrapper title="Email" data-testid="email-change">
        <EmailChangeForm
          email={user.email}
          patch={patch}
          search={search}
          navigate={navigate}
          dispatch={dispatch}
        />
      </Wrapper>

      <PluginPoint wrapIn={Wrapper} name="AccountView" />
    </Grid>
  </div>
);

AccountView.pageTitle = 'Your account';

AccountView.propTypes = {
  api: PropTypes.shape({
    patch: PropTypes.func,
  }).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  user: PropTypes.shape(UserPropTypes).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ user: { user } }) => ({ user });

export default connect(mapStateToProps)(withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(-1),
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1),
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 0,
    maxWidth: '100%',
  },
}))(AccountView));
