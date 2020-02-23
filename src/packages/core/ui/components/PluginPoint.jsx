/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
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
  className,
  wrapIn: WrapIn,
  wrapOut: WrapOut,
}) => {
  const render = (Comp, pluginName) => (routerProps) => {
    const content = (
      <>
        {name === 'View' && <Helmet title={Comp.pageTitle || ''} />}

        <ErrorBoundary errorMessage={`${name} - ${pluginName}`}>
          <React.Suspense fallback={loadingFallback || <Fallback />}>
            <Comp
              {...routerProps}
              api={api}
              wrapIn={WrapIn}
              pluginPoint={name}
            />
          </React.Suspense>
        </ErrorBoundary>
      </>
    );

    if (WrapOut) {
      return (
        <WrapOut
          className={className}
          pluginPoint={name}
        >
          {content}
        </WrapOut>
      );
    }

    return className ? <div className={className}>{content}</div> : content;
  };

  const routes = Object.keys(plugins)
    .reduce((acc, pluginName) => [
      ...acc,
      ...(plugins[pluginName].routes || []).map((route) => {
        if (!route[name]) return null;

        const Comp = route[name];

        return {
          pluginName,
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
      pluginName,
      Comp,
      exact,
      path,
    }) => (
      <Route
        key={`${pluginName}-${!!exact}-${path}-${name}`}
        path={path}
        exact={exact}
        render={render(Comp, pluginName, path)}
      />
    ));

  if (switchRoutes) {
    routes.push(<Route key="_fallback_" path="*">{emptyFallback}</Route>);
    return <Switch>{routes}</Switch>;
  }
  return routes;
};

RoutePlugin.propTypes = {
  plugins: PropTypes.objectOf(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
  loadingFallback: PropTypes.node,
  emptyFallback: PropTypes.node,
  switchRoutes: PropTypes.bool,
  className: PropTypes.string,
  wrapIn: PropTypes.elementType,
  wrapOut: PropTypes.elementType,
};

RoutePlugin.defaultProps = {
  loadingFallback: null,
  emptyFallback: null,
  switchRoutes: null,
  className: null,
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
