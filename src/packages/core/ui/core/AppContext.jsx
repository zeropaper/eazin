import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from 'react-router-dom';
import 'typeface-roboto';

import createStore from './store';
import history from './history';
import logger from './util/logger';
import { makeTheme } from './theme';
import * as api from './util/queryAPI';
import { PluginsProvider } from '../components/PluginPoint';

export const appContextShape = {
  darkMode: PropTypes.bool.isRequired,
  log: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  api: PropTypes.shape({
    get: PropTypes.func.isRequired,
    head: PropTypes.func.isRequired,
    post: PropTypes.func.isRequired,
    put: PropTypes.func.isRequired,
    patch: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    connect: PropTypes.func.isRequired,
    options: PropTypes.func.isRequired,
    trace: PropTypes.func.isRequired,
  }).isRequired,
};

const globalDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const log = logger('eazin', 'lime');

const defaultValue = {
  loading: 0,
  darkMode: true,
  log,
  dispatch: () => {},
  api,
  // strings: { en: {} },
};

const AppContext = React.createContext(defaultValue);

export class AppContextProvider extends React.Component {
  state = {
    loading: 0,
    darkMode: globalDarkMode,
    bootstraped: [],
    plugins: null,
  };

  helmetContext = {};

  constructor(props) {
    super(props);

    this.theme = makeTheme(globalDarkMode ? 'dark' : 'light');

    Promise.all(Object.values(props.plugins))
      .then((loaded) => {
        const loadedObj = {};
        Object.keys(props.plugins)
          .forEach((key, k) => {
            loadedObj[key] = loaded[k].default || loaded[k];
          });

        this.store = createStore(loadedObj);

        this.storeUnsubscribe = this.store.subscribe(this.handleStoreChange);

        return this.bootstrap(loadedObj);
      });
  }

  componentWillUnmount() {
    if (typeof this.storeUnsubscribe === 'function') this.storeUnsubscribe();
  }

  handleStoreChange = () => {
    const { store: { getState } } = this;
    const {
      darkMode: stateDarkMode = globalDarkMode,
    } = this.state;
    const {
      settings: {
        darkMode: storeDarkMode = globalDarkMode,
      } = {},
    } = getState();

    if (storeDarkMode !== stateDarkMode) {
      this.theme = makeTheme(storeDarkMode ? 'dark' : 'light');
      this.setState({ darkMode: storeDarkMode });
    }
  };

  bootstrap = async (plugins) => {
    this.handleStoreChange();

    const { getState, dispatch } = this.store;
    const pluginNames = Object.keys(plugins);
    const { bootstraped } = this.state;
    await Promise.all(pluginNames
      .reduce((acc, name) => {
        const plugin = (plugins[name] || {}).bootstrap;
        if (!plugin || bootstraped.includes(name)) return acc;
        return [...acc, plugin];
      }, [])
      .map((fn) => fn(getState(), dispatch, getState, plugins)));

    return new Promise((res) => this.setState({ plugins }, res));
  };

  render() {
    const {
      props: { children, siteName },
      store,
      state: { plugins, ...state },
    } = this;

    if (!plugins) {
      return (
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      );
    }

    return (
      <AppContext.Provider
        value={{
          ...state,
          dispatch: store.dispatch,
          log,
          api,
          // strings,
        }}
      >

        <HelmetProvider context={this.helmetContext}>
          <PluginsProvider value={{ plugins }}>
            <Router history={history}>
              <Provider store={store}>
                <MuiThemeProvider theme={this.theme}>
                  <Helmet
                    titleTemplate={`%s | ${siteName}`}
                  />

                  <CssBaseline />

                  {children}
                </MuiThemeProvider>
              </Provider>
            </Router>
          </PluginsProvider>
        </HelmetProvider>
      </AppContext.Provider>
    );
  }
}

AppContextProvider.propTypes = {
  siteName: PropTypes.string.isRequired,
  plugins: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
};

export const AppContextConsumer = AppContext.Consumer;

export const withAppContext = (Comp) => (props) => (
  <AppContextConsumer>
    {(appContextValue) => (
      <Comp
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...appContextValue}
      />
    )}
  </AppContextConsumer>
);
