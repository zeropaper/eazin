import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js(|x)
const req = require.context('../stories', true, /.stories.js(|x)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
