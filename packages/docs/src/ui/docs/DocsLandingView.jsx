import React from 'react';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';

const DocsLandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('DocsLandingView props', props);
  const { wrapIn: WrapIn } = props;
  return (
    <WrapIn>
      Landing View A
    </WrapIn>
  );
};

DocsLandingView.propTypes = ViewPropTypes;

export default DocsLandingView;
