/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import TimeAgo from './TimeAgo';

export default {
  title: 'packages/core/components/TimeAgo',
};

const date = new Date();

export const Basic = () => (
  <TimeAgo date={date} />
);


export const Component = () => (
  <TimeAgo date={date} />
);

Component.story = {
  name: 'component prop',
};


export const Refresh = () => (
  <TimeAgo date={date} />
);

Refresh.story = {
  name: 'refresh prop',
};
