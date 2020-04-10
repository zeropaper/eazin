import { connect } from 'react-redux';

export const mapStateToProps = ({ users }) => ({ users });

export default (Comp) => connect(mapStateToProps)(Comp);
