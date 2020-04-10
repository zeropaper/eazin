import { connect } from 'react-redux';

export const mapStateToProps = ({ user: { user } }) => ({ user });

export default (Comp) => connect(mapStateToProps)(Comp);
