import React from 'react';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';

const CompaniesLandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('CompaniesLandingView props', props);
  const { wrapIn: WrapIn } = props;
  return (
    <WrapIn>
      Landing View A
    </WrapIn>
  );
};

CompaniesLandingView.propTypes = ViewPropTypes;

export default CompaniesLandingView;
