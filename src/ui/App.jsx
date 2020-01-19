/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

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

import kitchenSink from '../dev/kitchen-sink/ui';
import organisations from '../dev/organisations/ui';
import groups from '../dev/groups/ui';
import docs from '../dev/docs/ui';
import activities from '../dev/activities/ui';
import clients from '../dev/clients/ui';
import repositories from '../dev/repositories/ui';

import BreadCrumbs from './BreadCrumbs';

const App = ({ children, plugins, siteName }) => (plugins && (
  <AppContextProvider siteName={siteName} plugins={plugins}>
    <Layout
      siteName={siteName}
      contextToolbar={(
        <UserAccess
          render={() => <BreadCrumbs />}
        />
      )}
      drawerContent={(
        <UserAccess
          renderUnverified={() => (
            <>
              <LayoutDrawerLink to="/login">Login</LayoutDrawerLink>
              <LayoutDrawerLink to="/register">Register</LayoutDrawerLink>
              <LayoutDrawerLink to="/password">Password Reset</LayoutDrawerLink>
            </>
          )}
          render={() => <LayoutDrawer />}
        />
      )}
    >
      {children || (
        <UserAccess
          renderUnverified={() => <AnonForms />}
          render={() => <PluginPoint exact switchRoutes name="View" />}
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
      activities,
      clients,
      groups,
      organisations,
      repositories,
      docs,
      kitchenSink,
    }}
  />
);
