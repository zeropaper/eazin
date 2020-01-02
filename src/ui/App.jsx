/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import Helmet from 'react-helmet';

import history from 'eazin-ui/dist/core/history';
import { AppContextProvider } from 'eazin-ui/dist/core/AppContext';

import Layout from 'eazin-ui/dist/components/Layout/Layout';

import PluginPoint from 'eazin-ui/dist/components/PluginPoint';

const App = ({ children, plugins }) => (plugins && (
  <AppContextProvider plugins={plugins}>
    <Helmet
      titleTemplate="Eazin | %s"
      defaultTitle="Eazin"
    />

    <Router history={history}>
      <Layout>
        {children || <PluginPoint name="View" switchRoutes />}
      </Layout>
    </Router>
  </AppContextProvider>
));

App.propTypes = {
  plugins: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
};

App.defaultProps = {
  plugins: null,
  children: null,
};

export default App;
