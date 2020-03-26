/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import DangerButton from './DangerButton';

export default {
  title: 'packages/core/components/DangerButton',
  decorators: [withKnobs],
};

export const Basic = () => (
  <DangerButton
    onClick={action('click')}
    dialogContent={(
      <>
        <div>This could have the following effects</div>
        <ul>
          <li>Hurt your feelings</li>
          <li>Solve the capitalism issue</li>
        </ul>
      </>
    )}
    dialogTitle={text('dialog title', 'Are you really really sure?')}
    rejectLabel={text('reject label', 'Cancel')}
    confirmLabel={text('confirm label', 'Proceed')}
  >
    Dangerous
  </DangerButton>
);

Basic.story = {
  name: 'Basic',
};
