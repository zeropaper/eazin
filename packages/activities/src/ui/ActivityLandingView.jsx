import React from 'react';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';

const ActivityLandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('ActivityLandingView props', props);
  const { wrapIn: WrapIn } = props;
  return (
    <WrapIn>
      Landing View A
    </WrapIn>
  );
};

ActivityLandingView.propTypes = ViewPropTypes;

export default ActivityLandingView;
