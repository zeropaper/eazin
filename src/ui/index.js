/* eslint-disable react/jsx-filename-extension */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import "core-js/proposals/string-replace-all"

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// import App from '../../packages/ui/src/AppLoader';
import App from 'eazin-ui/src/AppLoader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    // eslint-disable-next-line comma-dangle
    document.getElementById('root')
  );
};

render(App);

if (process.env.NODE_ENV === 'production' && ('serviceWorker' in navigator)) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registered) => registered.update());
  });
}

if (module.hot) {
  module.hot.accept(() => { render(App); });
}
