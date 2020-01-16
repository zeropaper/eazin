/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import Helmet from 'react-helmet';

import history from './core/history';
import { AppContextProvider } from './core/AppContext';

import Layout from './components/Layout';

import PluginPoint from './components/PluginPoint';

const App = ({ children, plugins, siteName }) => (plugins && (
  <AppContextProvider plugins={plugins}>
    <Helmet
      titleTemplate={`${siteName} | %s`}
      defaultTitle={siteName}
    />

    <Router history={history}>
      <Layout siteName={siteName}>
        {children || <PluginPoint name="View" switchRoutes />}
      </Layout>
    </Router>
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

export default App;
