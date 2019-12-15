import React from 'react';
import {
  Button,
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { AppContextProvider, withAppContext } from '../../src/core/AppContext';
import makeStore from '../../src/core/store';

const store = makeStore({});

const stories = storiesOf('Typography', module);
stories.addDecorator(withKnobs);

const ToggleButton = withAppContext(({ toggleDarkMode, darkMode }) => (
  <Button onClick={toggleDarkMode} color="primary" variant="contained">
    turn&nbsp;
    {darkMode ? 'light' : 'dark'}
    &nbsp;mode on
  </Button>
));

stories.add('basic', () => (
  <AppContextProvider store={store}>
    <Grid container spacing={2} direction="column" style={{ width: 'auto', margin: 0 }}>
      <Grid item>
        <ToggleButton />
      </Grid>

      <Grid item>
        <Typography
          variant={select('variant', {
            body1: 'body1',
            body2: 'body2',
            caption: 'caption',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
          }, 'body1')}
        >
          {text('text', 'Demo text')}
        </Typography>
      </Grid>

      <Grid item>
        <Paper>
          Some text
        </Paper>
      </Grid>
    </Grid>
  </AppContextProvider>
));
