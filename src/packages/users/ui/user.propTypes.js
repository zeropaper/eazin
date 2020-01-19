import PropTypes from 'prop-types';

const UserPropTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAdmin: PropTypes.bool,
  isVerified: PropTypes.bool.isRequired,
};

export default UserPropTypes;
