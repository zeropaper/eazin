import React, { useState } from 'react';
import { Link } from '@material-ui/core';

const ChuckNorrisLandingView = () => {
  const [joke, setJoke] = useState(null);
  if (!joke) {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then(setJoke);
  }
  return (
    <>
      <blockquote cite="http://chucknorris.io">
        <p>
          {joke ? (joke.value || '...') : 'loading'}
        </p>

        <footer>
          from&nbsp;
          <Link href="http://chucknorris.io">chucknorris.io</Link>
        </footer>
      </blockquote>
    </>
  );
};

export default ChuckNorrisLandingView;
