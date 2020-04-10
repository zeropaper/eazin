/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';

import {
  Typography,
  withStyles,
} from '@material-ui/core';
import ActionButtons from './ActionButtons';

export default {
  title: 'packages/core/components/Form/Buttons',
};

const styles = () => ({
  root: {
    maxWidth: 750,
    margin: 'auto',
  },
});

const defaults = [
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
];

const DemoButtons = withStyles(styles)(({
  title,
  icons,
  classes,
  ...overrides
}) => (
  <Typography component="div" className={classes.root}>
    <Typography gutterBottom variant="h4">{title}</Typography>

    <Typography gutterBottom variant="h5">Normal</Typography>

    <ActionButtons
      buttons={defaults.map((base) => ({
        ...base,
        startIcon: icons ? <SaveIcon /> : null,
        ...overrides,
      }))}
    />

    <Typography gutterBottom variant="h5">Large</Typography>

    <ActionButtons
      size="large"
      buttons={defaults.map((base) => ({
        ...base,
        startIcon: icons ? <SaveIcon /> : null,
        ...overrides,
      }))}
    />

    <Typography gutterBottom variant="h5">Small</Typography>

    <ActionButtons
      size="small"
      buttons={defaults.map((base) => ({
        ...base,
        startIcon: icons ? <SaveIcon /> : null,
        ...overrides,
      }))}
    />
  </Typography>
));

DemoButtons.displayName = 'DemoButtons';

export const Text = () => (
  <>
    <DemoButtons
      title="With icon"
      icons
    />

    <DemoButtons
      title="Without icon"
    />
  </>
);

export const Outlined = () => (
  <>
    <DemoButtons
      title="With icon"
      variant="outlined"
      icons
    />

    <DemoButtons
      title="Without icon"
      variant="outlined"
    />
  </>
);

export const Contained = () => (
  <>
    <DemoButtons
      title="With icon"
      variant="contained"
      icons
    />

    <DemoButtons
      title="Without icon"
      variant="contained"
    />
  </>
);
