
import { get } from '../../core/util/queryAPI';
import { setUser, clearUser } from './user.actions';
import { clearSetting } from '../settings/settings.actions';
import reducer from './user.reducer';

import AnonForms from /* webpackChunkName: "AnonForms" */ './AnonForms';
import UsersView from /* webpackChunkName: "UserView" */ './UsersView';
import UserDrawer from /* webpackChunkName: "UserDrawer" */ './UserDrawer';

export const bootstrap = (state, dispatch) => get('/api/user/me')
  .then((res) => {
    if (!res.username) throw new Error('No username');
    dispatch(setUser(res));
  })
  .catch(() => {
    dispatch(clearUser());
    dispatch(clearSetting('userToken'));
  });

const routes = [
  {
    path: '/users',
    View: UsersView,
  },
  {
    path: '/',
    Drawer: UserDrawer,
    AnonymousView: AnonForms,
  },
];

const store = {
  user: {},
};

const wsBootstrap = (socket, dispatch, getState) => {
  // eslint-disable-next-line no-console
  console.info('user wsBootstrap', socket, dispatch, getState);
  socket.on('user.update', (user) => dispatch(setUser(user)));
};

export default {
  routes,
  bootstrap,
  store,
  reducers: {
    user: reducer,
  },
  wsBootstrap,
};
