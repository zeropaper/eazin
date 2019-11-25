import React from 'react';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';

const ALandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('ALandingView props', props);
  const { wrapIn: WrapIn } = props;
  return (
    <WrapIn>
      Landing View A
    </WrapIn>
  );
};

ALandingView.propTypes = ViewPropTypes;

export default ALandingView;
