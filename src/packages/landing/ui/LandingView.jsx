import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles';

import { PluginPoint } from 'eazin-core/ui';

import Wrapper from './LandingView.Wrapper';

const styles = (theme) => ({
  root: {
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1),
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

const LandingView = ({ classes }) => (
  <div className={classes.root}>
    <GridList
      cellHeight={160}
      cols={3}
      spacing={2}
      className={classes.gridList}
    >
      <PluginPoint wrapIn={Wrapper} name="LandingView" />
    </GridList>
  </div>
);

LandingView.pageTitle = 'Dashboard';

LandingView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(LandingView);
