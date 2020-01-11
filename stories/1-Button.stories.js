/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';

import ButtonsGroup from '../src/packages/core/src/ui/components/Form/ButtonsGroup';

export default {
  title: 'Button',
};

export const text = () => (
  <ButtonsGroup
    buttons={[
      {
        type: 'reset',
        text: 'Reset',
      },
      {
        type: 'submit',
        text: 'Save',
      },
    ]}
  />
);


export const loading = () => (
  <>
    <ButtonsGroup
      style={{ marginBottom: '20px' }}
      buttons={[
        {
          key: '0',
          type: 'reset',
          text: 'Revert',
        },
        {
          key: '1',
          type: 'submit',
          text: 'Save',
          size: 'large',
          startIcon: (<SaveIcon />),
        },
        {
          key: '2',
          type: 'submit',
          text: 'Save',
          size: 'large',
          loading: true,
        },
      ]}
    />
    <ButtonsGroup
      style={{ marginBottom: '20px' }}
      buttons={[
        {
          key: '0',
          type: 'reset',
          text: 'Revert',
        },
        {
          key: '1',
          type: 'submit',
          text: 'Save',
          startIcon: (<SaveIcon />),
        },
        {
          key: '2',
          type: 'submit',
          text: 'Save',
          loading: true,
        },
      ]}
    />
    <ButtonsGroup
      style={{ marginBottom: '20px' }}
      buttons={[
        {
          key: '0',
          type: 'reset',
          text: 'Revert',
        },
        {
          key: '1',
          type: 'submit',
          text: 'Save',
          size: 'small',
          startIcon: (<SaveIcon />),
        },
        {
          key: '2',
          type: 'submit',
          text: 'Save',
          size: 'small',
          loading: true,
        },
      ]}
    />
  </>
);
