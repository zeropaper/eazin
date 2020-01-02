/* eslint-env browser */
/* eslint-disable react/jsx-filename-extension */
import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

const App = lazy(() => import(/* webpackChunkName: "App" */ './App'));

const root = document.getElementById('root');

const Fallback = () => (
  <div
    style={{
      position: 'absolute',
      zIndex: 1000,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
    }}
  >
    <span>Loading</span>
  </div>
);
render(<Suspense fallback={<Fallback />}><App /></Suspense>, root);
