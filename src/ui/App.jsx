/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar } from '@material-ui/core';

import {
  AppContextProvider,
  Layout,
  LayoutDrawer,
  LayoutDrawerLink,
  PluginPoint,
} from 'eazin-core/ui';
import users, { UserAccess, AnonForms } from 'eazin-users/ui';
import UserRegister from 'eazin-users/ui/UserRegister';
import landing from 'eazin-landing/ui';
import settings from 'eazin-settings/ui';
import twoFA from 'eazin-totp/ui';
import TwoFALoginForm from 'eazin-totp/ui/TwoFALoginForm';

import kitchenSink from '../dev/kitchen-sink/ui';
import organisations from '../dev/organisations/ui';
import groups from '../dev/groups/ui';
import activities from '../dev/activities/ui';
import clients from '../dev/clients/ui';

import BreadCrumbs from './BreadCrumbs';
import EmptyFallback from './EmptyFallback';

const App = ({
  children,
  plugins,
  siteName,
  preventRegistration = false,
}) => (plugins && (
  <AppContextProvider siteName={siteName} plugins={plugins}>
    <Layout
      siteName={siteName}
      toolbar={(
        <UserAccess
          render={() => <BreadCrumbs />}
        />
      )}
      footer={(
        <AppBar color="inherit" position="static">
          <Toolbar variant="dense">
            Yo
          </Toolbar>
        </AppBar>
      )}
      drawerContent={(
        <UserAccess
          renderUnverified={() => (
            <>
              <LayoutDrawerLink to="/login">Login</LayoutDrawerLink>
              {!preventRegistration && (
                <LayoutDrawerLink to="/register">Register</LayoutDrawerLink>
              )}
              <LayoutDrawerLink to="/reset">Password reset</LayoutDrawerLink>
            </>
          )}
          render={() => <LayoutDrawer />}
        />
      )}
    >
      {children || (
        <UserAccess
          renderUnverified={() => (
            <AnonForms
              LoginForm={TwoFALoginForm}
              RegisterForm={preventRegistration ? false : UserRegister}
            />
          )}
          render={() => (
            <PluginPoint
              className="auth"
              exact
              switchRoutes
              name="View"
              emptyFallback={<EmptyFallback />}
            />
          )}
        />
      )}
    </Layout>
  </AppContextProvider>
));

App.propTypes = {
  plugins: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node,
  siteName: PropTypes.string,
  preventRegistration: PropTypes.bool,
};

App.defaultProps = {
  children: null,
  siteName: null,
  preventRegistration: false,
};

export default () => (
  <App
    preventRegistration
    siteName="eazin.local"
    plugins={{
      landing,
      settings,
      users,
      twoFA,
      activities,
      clients,
      groups,
      organisations,
      kitchenSink,
    }}
  />
);
