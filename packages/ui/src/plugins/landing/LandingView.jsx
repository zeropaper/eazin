import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GridList, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PluginPoint from '../../components/PluginPoint';

import Wrapper from './LandingView.Wrapper';
import { toggleBool } from './landing.actions';

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

const LandingView = ({ classes, bool, toggle }) => (
  <>
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

    <div>
      <Button variant="contained" color="primary" onClick={toggle}>
        Toggle&nbsp;
        {bool ? 'yes' : 'no'}
      </Button>
    </div>
  </>
);

LandingView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  bool: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export const StyledLandingView = withStyles(styles)(LandingView);

const mapStateToProps = ({ landing: { bool } }) => ({ bool: !!bool });

const mapDispatchToProps = (dispatch) => ({
  toggle: () => {
    setTimeout(() => dispatch(toggleBool()), 500);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StyledLandingView);
