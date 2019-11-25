import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';
import { View as ViewPropTypes } from '../../core/plugins.propTypes';
import { upsertActivities } from './activity.actions';
import queryAPI from '../../core/util/queryAPI';

class ActivityView extends React.Component {
  async componentDidMount() {
    const { userToken, dispatch } = this.props;

    const loaded = await queryAPI('/api/activities', {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    });

    dispatch(upsertActivities(loaded));
  }

  render() {
    const { activities } = this.props;

    return (
      <>
        <header>
          <Typography variant="h2">Activity</Typography>
        </header>
        <pre>{JSON.stringify(activities, null, 2)}</pre>
      </>
    );
  }
}

ActivityView.propTypes = {
  ...ViewPropTypes,
  activities: PropTypes.objectOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  activities,
  settings: { userToken },
}) => ({
  activities,
  userToken,
});

export default connect(mapStateToProps)(ActivityView);
