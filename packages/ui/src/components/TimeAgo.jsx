import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TimeAgo = ({ date, component }) => {
  if (!date) return null;

  const mom = moment(date);
  if (component === 'div') {
    return (
      <div title={mom.format('YYYY-MM-DD HH:mm')}>
        {mom.fromNow()}
      </div>
    );
  }

  return (
    <span title={mom.format('YYYY-MM-DD HH:mm')}>
      {mom.fromNow()}
    </span>
  );
};

TimeAgo.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  component: PropTypes.string,
};

TimeAgo.defaultProps = {
  date: null,
  component: null,
};

export default TimeAgo;
