/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { AppContextProvider } from './core/AppContext';

import Layout from './components/Layout';

import PluginPoint from './components/PluginPoint';

const App = ({ children, plugins, siteName }) => (plugins && (
  <AppContextProvider siteName={siteName} plugins={plugins}>
    <Layout siteName={siteName}>
      {children || <PluginPoint exact switchRoutes name="View" />}
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

export default App;
