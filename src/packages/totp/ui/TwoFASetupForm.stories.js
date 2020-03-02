/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';

import TwoFASetup from './TwoFASetup';

export default {
  title: 'packages/totp/Setup Form',
};

const handle = (method) => (...args) => {
  console.info('handle: ', method, ...args);
  return new Promise((res) => setTimeout(() => {
    if (args[0] === '/api/totp/setup') {
      return res({
        secret: 'SOMETHINGSECRETPROBABLY',
        qr64: 'https://i.pinimg.com/originals/19/d8/64/19d864e7594878d0a92268249db4e39a.jpg',
      });
    }
    if (args[0] === '/api/totp/verify') {
      return res({
        backupCodes: [
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
          '1234567890',
        ],
      });
    }
    return res();
  }, 100));
};

const api = {
  get: handle('get'),
  post: handle('post'),
  delete: handle('delete'),
};

export const initialState = () => (
  <TwoFASetup
    api={api}
    wrapIn={({ children }) => (<>{children}</>)}
  />
);

initialState.story = {
  name: 'Initial state',
};
