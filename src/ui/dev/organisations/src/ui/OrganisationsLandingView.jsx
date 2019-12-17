import React from 'react';

const OrganisationsLandingView = (props) => {
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

export default OrganisationsLandingView;
