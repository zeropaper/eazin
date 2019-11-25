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

const Content = () => (
  <>
    <Helmet
      titleTemplate="137 | %s"
      defaultTitle="Hundred Thirty Seven"
    />

    <Router history={history}>
      <Layout>
        <PluginPoint name="View" switchRoutes />
      </Layout>
    </Router>
  </>
);

const App = ({ children, plugins }) => (plugins && (
  <AppContextProvider plugins={plugins}>
    {children || <Content />}
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
