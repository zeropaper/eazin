/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Fallback from './LoadingFallback';
import ErrorBoundary from './ErrorBoundary';
import * as api from '../core/util/queryAPI';

const PluginsContext = React.createContext({ plugins: {} });

export const PluginsProvider = PluginsContext.Provider;

const RoutePlugin = ({
  plugins,
  name,
  loadingFallback,
  emptyFallback,
  switchRoutes,
  wrapIn: WrapIn,
  wrapOut: WrapOut,
}) => {
  const render = (Comp, pluginName) => (props) => {
    const content = (
      <React.Suspense fallback={loadingFallback || <Fallback />}>
        <ErrorBoundary errorMessage={`${name} - ${pluginName}`}>
          <Comp {...props} api={api} wrapIn={WrapIn} />
        </ErrorBoundary>
      </React.Suspense>
    );

    return WrapOut
      ? <WrapOut>{content}</WrapOut>
      : content;
  };

  const routes = Object.keys(plugins)
    .reduce((acc, val) => [
      ...acc,
      ...(plugins[val].routes || []).map((route) => {
        if (!route[name]) return null;

        const Comp = route[name];

        return {
          val,
          Comp,
          exact: route.exact,
          path: route.path,
        };
      }),
    ], [])
    .filter(Boolean)
    .sort(({ Comp: { weight: a = 0 } }, { Comp: { weight: b = 0 } }) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    })
    .map(({
      val,
      Comp,
      exact,
      path,
    }) => (
      <Route
        key={`${val}-${!!exact}-${path}-${name}`}
        path={path}
        exact={exact}
        render={render(Comp, val, path)}
      />
    ));

  if (!routes.length && emptyFallback) return emptyFallback;
  return switchRoutes ? <Switch>{routes}</Switch> : routes;
};

RoutePlugin.propTypes = {
  plugins: PropTypes.objectOf(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
  loadingFallback: PropTypes.node,
  emptyFallback: PropTypes.node,
  switchRoutes: PropTypes.bool,
  wrapIn: PropTypes.elementType,
  wrapOut: PropTypes.elementType,
};

RoutePlugin.defaultProps = {
  loadingFallback: null,
  emptyFallback: null,
  switchRoutes: null,
  wrapIn: null,
  wrapOut: null,
};

const PluginPoint = (props) => (
  <PluginsContext.Consumer>
    {(state) => (
      <RoutePlugin
        {...props}
        plugins={(state || {}).plugins || {}}
      />
    )}
  </PluginsContext.Consumer>
);

PluginPoint.propTypes = {
  name: PropTypes.string.isRequired,
  loadingFallback: PropTypes.node,
  emptyFallback: PropTypes.node,
  switchRoutes: PropTypes.bool,
};

PluginPoint.defaultProps = {
  loadingFallback: null,
  emptyFallback: null,
  switchRoutes: null,
};

export default PluginPoint;
