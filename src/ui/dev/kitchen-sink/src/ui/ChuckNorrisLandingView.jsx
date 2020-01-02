import React, { useState } from 'react';
import { Link } from '@material-ui/core';

const ChuckNorrisLandingView = (props) => {
  const [joke, setJoke] = useState(null);
  if (!joke) {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then(setJoke);
  }
  // eslint-disable-next-line react/prop-types
  const { wrapIn: WrapIn } = props;
  return (
    <WrapIn>
      <blockquote cite="http://chucknorris.io">
        <p>
          {joke ? (joke.value || '...') : 'loading'}
        </p>

        <footer>
          from&nbsp;
          <Link href="http://chucknorris.io">chucknorris.io</Link>
        </footer>
      </blockquote>
    </WrapIn>
  );
};

export default ChuckNorrisLandingView;
