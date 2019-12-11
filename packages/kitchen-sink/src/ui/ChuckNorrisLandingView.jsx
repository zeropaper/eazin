import React, { useState } from 'react';

import { View as ViewPropTypes } from '../../core/plugins.propTypes';

const ChuckNorrisLandingView = (props) => {
  const [joke, setJoke] = useState(null);
  if (!joke) {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then(setJoke);
  }
  const { wrapIn: WrapIn } = props;
  return (
    <WrapIn>
      {joke ? (joke.value || '...') : 'loading'}
    </WrapIn>
  );
};

ChuckNorrisLandingView.propTypes = ViewPropTypes;

export default ChuckNorrisLandingView;
