import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const makeStore = (reducers = {}, initialState = {}) => {
  const combinedReducers = combineReducers(reducers);
  const appReducer = (state = {}, action = {}) => {
    if (action.type === 'CORE_RELOAD') return initialState;
    return combinedReducers(state, action);
  };
  const middleware = process.env.NODE_ENV !== 'production'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
  return createStore(appReducer, initialState, middleware);
};

export default (plugins, preloaded = {}) => {
  let pluginReducers = {};
  let pluginStores = {};

  Object.keys(plugins)
    .forEach((name) => {
      pluginReducers = {
        ...pluginReducers,
        ...((plugins[name] || {}).reducers || {}),
      };
      pluginStores = {
        ...pluginStores,
        ...((plugins[name] || {}).store || {}),
      };
    });

  return makeStore(pluginReducers, { ...pluginStores, ...(preloaded || {}) });
};
