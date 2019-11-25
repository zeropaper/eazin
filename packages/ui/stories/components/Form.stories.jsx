/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Form from '../../src/components/form/Form';
import Fields from '../../src/components/form/Fields';

const stories = storiesOf('Form', module);
stories.addDecorator(withKnobs);

const notEmpty = (val) => (val && val.trim() ? undefined : 'A value is required');

const required = {
  required: true,
  validate: notEmpty,
  validateOnChange: true,
  validateOnBlur: true,
};
const schema = {
  fieldA: {
    label: 'Basic textfield',
    placeholder: 'Some value',
    helperText: 'Basic textfield with helper text',
  },
  fieldB: {
    label: 'Required textfield',
    placeholder: 'Some value',
    ...required,
  },
  set1: {
    label: 'Options',
    type: 'fieldset',
    fields: {
      fieldA: {
        label: 'Basic textfield',
        placeholder: 'Some value',
        helperText: 'Basic textfield with helper text',
        initialValue: 'Default value',
      },
      fieldB: {
        label: 'Required textfield',
        placeholder: 'Some value',
        initialValue: 'Default value',
        ...required,
      },
    },
  },
};

stories.add('Elements', () => {
  const [state, setState] = useState({});
  return (
    <Form
      onSubmit={(values) => setState({ ...values })}
      fields={schema}
      render={({ formState }) => (
        <>
          <Fields fields={schema} />

          <div>
            <Button type="reset">Reset</Button>
            <Button type="submit" variant="contained">Submit</Button>
          </div>

          <div style={{ display: 'flex' }}>
            <div>
              Form State:
              <pre>{JSON.stringify(formState, null, 2)}</pre>
            </div>

            <div>
              Component State:
              <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
          </div>
        </>
      )}
    />
  );
});
