import React from 'react';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';

const BLandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('BLandingView props', props);
  const { wrapIn: WrapIn } = props;
  return (
    <WrapIn>
      Landing View B
    </WrapIn>
  );
};

BLandingView.propTypes = ViewPropTypes;

export default BLandingView;
