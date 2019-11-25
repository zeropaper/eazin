import { connect } from 'react-redux';

import { setUser } from './user.actions';
import { setSetting } from '../settings/settings.actions';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(setUser(user));
    dispatch(setSetting('userToken', user.token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
