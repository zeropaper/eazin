/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './AppLoader';

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
