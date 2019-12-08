import React from 'react';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';

const GroupsLandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('GroupsLandingView props', props);
  const { wrapIn: WrapIn } = props;
  return [
    <WrapIn key="a">
      Group View A
    </WrapIn>,

    <WrapIn key="b">
      Group View B
    </WrapIn>,
  ];
};

GroupsLandingView.propTypes = ViewPropTypes;

export default GroupsLandingView;
