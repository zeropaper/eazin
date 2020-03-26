import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Typography } from '@material-ui/core';

const TimeAgo = ({
  date,
  component,
  refresh = 10,
}) => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    if (!refresh) return;
    const interval = setInterval(() => {
      setSeconds(seconds + refresh);
    }, refresh * 1000);
    return () => clearInterval(interval);
  });

  if (!date) return null;

  const mom = moment(date);
  return (
    <Typography component={component} title={mom.format('YYYY-MM-DD HH:mm')}>
      {mom.fromNow()}
    </Typography>
  );
};

TimeAgo.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  component: PropTypes.oneOf(['div', 'span']),
  refresh: PropTypes.number,
};

TimeAgo.defaultProps = {
  date: null,
  component: 'span',
  refresh: 10,
};

export default TimeAgo;
