/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';

import { Typography } from '@material-ui/core';
import ClientTokens, {
  CreateToken,
  ErrorState,
  ListState,
  LoadingState,
} from './ClientsView.Tokens';

export default {
  title: 'dev/clients',
};

const client = {
  id: 'client-db-id',
};

const tokensFixture = [
  {
    id: 'token-db-id-1',
    createdAt: new Date(),
    note: 'Some random stuff',
  },
  {
    id: 'token-db-id-2',
    createdAt: new Date(),
    note: 'Also random stuff...',
    expiresAt: new Date(),
  },
  {
    id: 'token-db-id-3',
    createdAt: new Date(),
    note: 'Random stuff too',
  },
  {
    id: 'token-db-id-4',
    createdAt: new Date(),
    note: 'Still random stuff',
    token: 'eugoehiohiheeiuheihe',
  },
];

const listTokens = () => new Promise((res) => setTimeout(() => res(tokensFixture), 100));

export const createToken = () => (
  <Typography component="div">
    <CreateToken
      client={client}
      onSuccess={() => {}}
    />
  </Typography>
);

createToken.story = {
  name: 'Create token form',
};

export const loadingState = () => (
  <Typography component="div">
    <LoadingState />
  </Typography>
);

loadingState.story = {
  name: 'Loading state',
};

export const loadingErrorState = () => (
  <Typography component="div">
    <ErrorState
      error={{ message: 'Error message ' }}
      onReload={() => {}}
    />
  </Typography>
);

loadingErrorState.story = {
  name: 'Loading error state',
};

export const listState = () => (
  <Typography component="div">
    <ListState tokens={tokensFixture} />
  </Typography>
);

listState.story = {
  name: 'List state',
};

export const clientTokens = () => (
  <Typography component="div">
    <ClientTokens
      client={client}
      listTokens={listTokens}
    />
  </Typography>
);

clientTokens.story = {
  name: 'Complete client details',
};
