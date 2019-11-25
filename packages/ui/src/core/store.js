import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const storageName = 'eazin-1';

// eslint-disable-next-line no-unused-vars
const readLocalStorageState = () => {
  try {
    return JSON.parse(localStorage.getItem(storageName));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.info(e.message);
    return false;
  }
};

// eslint-disable-next-line no-unused-vars
const writeLocalStorageState = (toStore) => requestAnimationFrame(() => {
  try {
    localStorage.setItem(storageName, JSON.stringify(toStore));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.info(e.message);
  }
});

export default (plugins, preloaded = {}) => {
  let pluginReducers = {};
  let pluginStores = {};

  Object.keys(plugins)
    .forEach((name) => {
      pluginReducers = {
        ...pluginReducers,
        ...(plugins[name].reducers || {}),
      };
      pluginStores = {
        ...pluginStores,
        ...(plugins[name].store || {}),
      };
    });

  const appReducer = combineReducers(pluginReducers);

  pluginStores = { ...pluginStores, ...(preloaded || {}) };

  const rootReducer = (state, action) => {
    if (action.type === 'CORE_RELOAD') return pluginStores;
    return appReducer(state, action);
  };

  return createStore(rootReducer, pluginStores, composeWithDevTools(applyMiddleware()));
};
