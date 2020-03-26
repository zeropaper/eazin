/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Button } from '@material-ui/core';
import ConfirmationDialog from './ConfirmationDialog';

export default {
  title: 'packages/core/components/ConfirmationDialog',
};

export const Basic = () => {
  const [open, setOpen] = React.useState(true);
  const toggle = () => setOpen(!open);
  return (
    <>
      <ConfirmationDialog
        open={open}
        title="Are you sure?"
        onReject={toggle}
        onConfirm={toggle}
      >
        This operation cannot be reverted.
      </ConfirmationDialog>
      {!open && <Button onClick={toggle}>Open</Button>}
    </>
  );
};

Basic.story = {
  name: 'Basic',
};
