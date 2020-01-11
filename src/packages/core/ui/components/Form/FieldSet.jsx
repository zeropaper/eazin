import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// eslint-disable-next-line import/no-cycle
import Fields from './Fields';

const styles = (theme) => ({
  root: {
    border: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[500],
    margin: `${theme.spacing(1)}px 0`,
    padding: theme.spacing(1),
  },
  legend: {
    padding: theme.spacing(1),
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
}) => (
  <fieldset className={classNames(classes.root, className)}>
    <Typography className={classes.legend} component="legend">
      {label}
    </Typography>

    <div>
      <Fields state={state} api={api} fields={fields} field={field} />
    </div>
  </fieldset>
);

FieldSet.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  fields: PropTypes.objectOf(PropTypes.object).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  api: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string,
  field: PropTypes.string,
};

FieldSet.defaultProps = {
  field: null,
  className: null,
};

export default withStyles(styles)(FieldSet);
