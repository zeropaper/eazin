import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

// automatically import all files ending in *.stories.js
configure(require.context('../', true, /(src|stories)\/.+\.stories\.(mdx|js(|x))$/), module);
