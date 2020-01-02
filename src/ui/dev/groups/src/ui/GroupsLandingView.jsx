import React from 'react';

const GroupsLandingView = (props) => {
  const { wrapIn: WrapIn } = props;
  return [
    <WrapIn key="a" top="Yeah">
      Group View A
    </WrapIn>,

    <WrapIn key="b">
      Group View B
    </WrapIn>,
  ];
};

export default GroupsLandingView;
