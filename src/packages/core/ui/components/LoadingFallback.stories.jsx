/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import LoadingFallback from './LoadingFallback';

export default {
  title: 'packages/core/components',
};

export const loadingFallback = () => (
  <LoadingFallback />
);

loadingFallback.story = {
  name: 'LoadingFallback',
};
