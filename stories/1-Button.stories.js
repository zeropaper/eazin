/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';

import {
  Typography,
  Select,
  MenuItem,
  Checkbox,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import ActionButtons from '../src/packages/core/ui/components/Form/ActionButtons';
import Form from '../src/packages/core/ui/components/Form';

export default {
  title: 'packages/core/components/Form/Button',
};

const marginBottom = { marginBottom: 20 };

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing(-1),
    marginright: theme.spacing(-1),
  },
  column: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  firstRow: {
    marginBottom: theme.spacing(2),
  },
}));

export const Loading = () => {
  const [rejectForm, setRejectForm] = useState(true);

  const [variant, setVariant] = useState('text');
  const [hold, setHold] = useState(true);

  const withIcons = [
    [
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
    ],
    [
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
    ],
  ];

  const classes = useStyles();
  return (
    <Typography component="div" className={classes.root}>
      <div className={classes.column}>
        <Form
          messageInButton
          onSubmit={() => new Promise((resolve, reject) => {
            setTimeout(() => {
              if (rejectForm) {
                reject(new Error('Server error...'));
              } else {
                resolve();
              }
            }, 2000);
          })}
          fields={{
            text: {
              label: 'Whatever',
            },
            rejectForm: {
              type: 'checkbox',
              checked: rejectForm,
              label: 'Reject form',
              onChange: (evt) => setRejectForm(evt.target.checked),
            },
          }}
          buttons={({
            pristine,
            invalid,
            loading,
            success,
            failure,
          }) => [
            {
              type: 'reset',
              text: 'Reset',
              disabled: pristine,
            },
            {
              key: 'submit',
              type: 'submit',
              text: 'Submit',
              loading,
              success,
              error: failure,
              disabled: pristine || invalid,
            },
          ]}
          debug
        />
      </div>

      <div className={classes.column}>
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
            className={classes.firstRow}
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
            ]}
          />
          <ActionButtons
            variant={variant}
            buttons={[
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
            className={classes.firstRow}
            variant={variant}
            size="large"
            buttons={withIcons[0]}
          />
          <ActionButtons
            variant={variant}
            size="large"
            buttons={withIcons[1]}
          />
        </section>
        <section style={marginBottom}>
          <header style={marginBottom}>
            <Typography variant="h5">Regular with icon</Typography>
          </header>
          <ActionButtons
            className={classes.firstRow}
            variant={variant}
            buttons={withIcons[0]}
          />
          <ActionButtons
            variant={variant}
            buttons={withIcons[1]}
          />
        </section>
        <section style={marginBottom}>
          <header style={marginBottom}>
            <Typography variant="h5">Small with icon</Typography>
          </header>
          <ActionButtons
            className={classes.firstRow}
            variant={variant}
            size="small"
            buttons={withIcons[0]}
          />
          <ActionButtons
            variant={variant}
            size="small"
            buttons={withIcons[1]}
          />
        </section>
      </div>
    </Typography>
  );
};
