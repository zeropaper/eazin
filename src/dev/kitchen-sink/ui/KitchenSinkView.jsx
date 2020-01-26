import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Form } from '../../../packages/core/ui';

// eslint-disable-next-line react/prop-types
const Debug = ({ state }) => (<pre>{JSON.stringify(state, null, 2)}</pre>);

const fields = {
  l0: {
    fields: {
      l1: {
        type: 'fieldset',
        label: 'Level 1',
        fields: {
          l2: {
            fields: {
              l2a: {
                label: 'Level 3 - A',
              },
              l2b: {
                label: 'Level 3 - B',
                type: 'checkbox',
                initialValue: true,
                helperText: 'initialValue is set',
              },
            },
          },
          a: {
            label: 'Level 2 - A',
          },
          b: {
            label: 'Level 2 - B',
            type: 'checkbox',
            value: true,
            helperText: 'value is set',
          },
        },
      },
      a: {
        label: 'Level 1 - A',
      },
      b: {
        label: 'Level 1 - B',
        type: 'checkbox',
      },
    },
  },
  debug: {
    component: Debug,
  },
};
const buttons = [];

const KitchenSinkView = React.memo((props) => (
  <>
    {
      // eslint-disable-next-line no-console
      console.info('KitchenSinkView', props)
    }
    <Helmet title="Kitchen Sink" />
    <Form
      fields={fields}
      buttons={buttons}
    />
  </>
));

export default KitchenSinkView;
