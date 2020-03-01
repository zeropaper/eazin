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
import landing from 'eazin-landing/ui';
import settings from 'eazin-settings/ui';
import twoFA from 'eazin-2fa/ui';
import TwoFALoginForm from 'eazin-2fa/ui/TwoFALoginForm';

import kitchenSink from '../dev/kitchen-sink/ui';
import organisations from '../dev/organisations/ui';
import groups from '../dev/groups/ui';
import activities from '../dev/activities/ui';
import clients from '../dev/clients/ui';

import BreadCrumbs from './BreadCrumbs';
import EmptyFallback from './EmptyFallback';

const App = ({ children, plugins, siteName }) => (plugins && (
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
              <LayoutDrawerLink to="/register">Register</LayoutDrawerLink>
              <LayoutDrawerLink to="/reset">Password Reset</LayoutDrawerLink>
            </>
          )}
          render={() => <LayoutDrawer />}
        />
      )}
    >
      {children || (
        <UserAccess
          renderUnverified={() => (
            <AnonForms LoginForm={TwoFALoginForm} />
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
};

App.defaultProps = {
  children: null,
  siteName: null,
};

export default () => (
  <App
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
