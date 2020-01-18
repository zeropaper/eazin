import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'eazin-core/ui';

const UserName = connect((({
  user: { user: { id: currentUserId } },
  users = {},
}, { id }) => ({
  ...(users[id] || {}),
  currentUserId,
})))(({
  id,
  currentUserId,
  firstName = '',
  lastName = '',
}) => (
  <Link to={currentUserId === id ? '/account' : `/user/${id}`}>
    {currentUserId === id
      ? 'You'
      : `${firstName.slice(0, 1)}. ${lastName}`}
  </Link>
));

export default UserName;
