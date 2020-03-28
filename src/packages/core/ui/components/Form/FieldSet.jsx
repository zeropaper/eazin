import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Fields from './Fields';

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  legend: {
    padding: theme.spacing(1),
  },
  fields: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1) - 1,
    borderLeft: '1px solid currentColor',
  },
});

const FieldSet = ({
  label,
  fields,
  field,
  classes,
  className,
  state,
  api,
  components,
}) => (
  <FormControl component="fieldset" className={classNames(classes.root, className)}>
    <FormLabel component="legend">{label}</FormLabel>

    <Fields
      className={classes.fields}
      components={components}
      state={state}
      api={api}
      fields={fields}
      field={field}
    />
  </FormControl>
);

FieldSet.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  fields: PropTypes.objectOf(PropTypes.object).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  api: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  field: PropTypes.string,
  components: PropTypes.objectOf(PropTypes.elementType).isRequired,
};

FieldSet.defaultProps = {
  field: null,
  className: null,
};

export default withStyles(styles)(FieldSet);
