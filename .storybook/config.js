import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js(|x)$/), module);
configure(require.context('../src', true, /\.stories\.js(|x)$/), module);
