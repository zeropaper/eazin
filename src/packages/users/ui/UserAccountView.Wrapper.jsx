import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

import { LoadingFallback as Fallback } from 'eazin-core/ui';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      width: '33%',
    },
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
});

const Wrapper = ({
  children,
  classes,
  title,
  'data-testid': testId,
}) => (
  <Grid item className={classes.root} cols={1} data-testid={testId}>
    <Typography
      variant="h4"
      gutterBottom
    >
      {title}
    </Typography>

    <React.Suspense fallback={<Fallback />}>
      {children}
    </React.Suspense>
  </Grid>
);

Wrapper.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  'data-testid': PropTypes.string.isRequired,
};

Wrapper.defaultProps = {
  title: null,
};

export default withStyles(styles)(Wrapper);
