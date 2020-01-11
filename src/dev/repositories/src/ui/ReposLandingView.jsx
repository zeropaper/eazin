import React from 'react';

import { propTypes as pluginPropTypes } from 'eazin-core/ui';

const ReposLandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('ReposLandingView props', props);
  const { wrapIn: WrapIn } = props;
  return [
    <WrapIn key="a">
      Repo View A
    </WrapIn>,

    <WrapIn key="b">
      Repo View B
    </WrapIn>,
  ];
};

ReposLandingView.propTypes = pluginPropTypes.View;

export default ReposLandingView;
