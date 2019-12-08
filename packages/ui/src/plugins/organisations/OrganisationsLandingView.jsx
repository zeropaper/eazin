import React from 'react';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';

const OrganisationsLandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('OrganisationsLandingView props', props);
  const { wrapIn: WrapIn } = props;
  return [
    <WrapIn key="a">
      Organisation View A
    </WrapIn>,

    <WrapIn key="b">
      Organisation View B
    </WrapIn>,
  ];
};

OrganisationsLandingView.propTypes = ViewPropTypes;

export default OrganisationsLandingView;
