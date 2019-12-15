import React from 'react';

import { View as ViewPropTypes } from 'eazin-ui/src/core/plugins.propTypes';

const ClientsLandingView = (props) => {
  // eslint-disable-next-line no-console
  // console.info('ClientsLandingView props', props);
  const { wrapIn: WrapIn } = props;
  return (
    <WrapIn>
      Landing Clients
    </WrapIn>
  );
};

ClientsLandingView.propTypes = ViewPropTypes;

export default ClientsLandingView;
