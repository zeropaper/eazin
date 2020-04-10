import PropTypes from 'prop-types';

import userConnector from './user.connector';
import UserPropTypes from './user.propTypes';

const UserAccess = userConnector(({
  user,
  render,
  renderAdmin,
  renderUnverified,
  renderForRole,
}) => {
  if (!user || !user.isVerified) return (renderUnverified && renderUnverified()) || null;
  if (typeof renderAdmin === 'function' && user.isAdmin) return renderAdmin() || null;
  if (renderForRole) return renderForRole(user.roles) || null;
  return render() || null;
});

UserAccess.propTypes = {
  user: PropTypes.shape(UserPropTypes),
  render: PropTypes.func.isRequired,
  renderAdmin: PropTypes.func,
  renderUnverified: PropTypes.func,
  renderForRole: PropTypes.func,
};

UserAccess.defaultProps = {
  user: null,
  renderAdmin: null,
  renderUnverified: null,
  renderForRole: null,
};

UserAccess.displayName = 'UserAccess';

export default UserAccess;
