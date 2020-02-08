/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';

import {
  Typography, Select, MenuItem, Checkbox,
} from '@material-ui/core';
import ActionButtons from '../src/packages/core/ui/components/Form/ActionButtons';

export default {
  title: 'Button',
};

export const Text = () => (
  <ActionButtons
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

const marginBottom = { marginBottom: 20 };

export const Loading = () => {
  const [variant, setVariant] = useState('text');
  const [hold, setHold] = useState(true);
  // console.info('variant', variant, props);
  const withIcons = [
    {
      key: 'reset',
      type: 'reset',
      text: 'Revert',
    },
    {
      key: 'disabled',
      type: 'submit',
      text: 'Save',
      startIcon: (<SaveIcon />),
      disabled: true,
    },
    {
      key: 'enabled',
      type: 'submit',
      text: 'Save',
      startIcon: (<SaveIcon />),
    },
    {
      key: 'loading',
      type: 'submit',
      text: 'Save',
      loading: true,
      startIcon: (<SaveIcon />),
    },
    {
      key: 'success',
      type: 'submit',
      text: 'Save',
      hold,
      success: true,
      startIcon: (<SaveIcon />),
    },
    {
      key: 'success-message',
      type: 'submit',
      text: 'Save',
      hold,
      success: 'Message!',
      startIcon: (<SaveIcon />),
    },
    {
      key: 'error',
      type: 'submit',
      text: 'Save',
      hold,
      error: true,
      startIcon: (<SaveIcon />),
    },
    {
      key: 'error-message',
      type: 'submit',
      text: 'Save',
      hold,
      error: 'Message!',
      startIcon: (<SaveIcon />),
    },
  ];

  return (
    <>
      <section style={marginBottom}>
        <Select
          value={variant}
          onChange={(evt) => setVariant(evt.target.value)}
        >
          <MenuItem value="text">text</MenuItem>
          <MenuItem value="outlined">outlined</MenuItem>
          <MenuItem value="contained">contained</MenuItem>
        </Select>

        <Checkbox
          checked={hold}
          onChange={(evt) => setHold(evt.target.checked)}
        />
      </section>
      <section style={marginBottom}>
        <header style={marginBottom}>
          <Typography variant="h5">No icon, regular size</Typography>
        </header>
        <ActionButtons
          variant={variant}
          buttons={[
            {
              key: 'reset',
              type: 'reset',
              text: 'Revert',
            },
            {
              key: 'disabled',
              type: 'submit',
              text: 'Save',
              disabled: true,
            },
            {
              key: 'enabled',
              type: 'submit',
              text: 'Save',
            },
            {
              key: 'loading',
              type: 'submit',
              text: 'Save',
              loading: true,
            },
            {
              key: 'success',
              type: 'submit',
              text: 'Save',
              hold,
              success: true,
            },
            {
              key: 'success-message',
              type: 'submit',
              text: 'Save',
              hold,
              success: 'Message!',
            },
            {
              key: 'error',
              type: 'submit',
              text: 'Save',
              hold,
              error: true,
            },
            {
              key: 'error-message',
              type: 'submit',
              text: 'Save',
              hold,
              error: 'Message!',
            },
          ]}
        />
      </section>
      <section style={marginBottom}>
        <header style={marginBottom}>
          <Typography variant="h5">Large with icon</Typography>
        </header>
        <ActionButtons
          variant={variant}
          size="large"
          buttons={withIcons}
        />
      </section>
      <section style={marginBottom}>
        <header style={marginBottom}>
          <Typography variant="h5">Regular with icon</Typography>
        </header>
        <ActionButtons
          variant={variant}
          buttons={withIcons}
        />
      </section>
      <section style={marginBottom}>
        <header style={marginBottom}>
          <Typography variant="h5">Small with icon</Typography>
        </header>
        <ActionButtons
          variant={variant}
          size="small"
          buttons={withIcons}
        />
      </section>
    </>
  );
};
