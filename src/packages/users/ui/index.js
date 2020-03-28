
import { queryAPI } from 'eazin-core/ui';
import { clearSetting } from '../../settings/ui/settings.actions';

import { setUser, clearUser } from './user.actions';
import { upsertManyUsers, clearUsers } from './users.actions';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';

import AnonForms from './AnonForms';
import UserAccountView from './UserAccountView';
import UsersView from './UsersView';
import UserDrawer from './UserDrawer';
import UserDrawerLow from './UserDrawerLow';

export const bootstrap = (state, dispatch) => {
  if (!state.settings.userToken) return;

  return queryAPI.get('/api/user/me')
    .then((res) => {
      if (!res.id) throw new Error('No id');
      dispatch(setUser(res));
      if (res.isAdmin || res.roles.indexOf('get:users') > -1) {
        queryAPI.get('/api/users')
          .then((users) => dispatch(upsertManyUsers((users || {}).data)));
      }
    })
    .catch(() => {
      dispatch(clearUser());
      dispatch(clearUsers());
      dispatch(clearSetting('userToken'));
    });
};

const routes = [
  {
    path: '/account',
    View: UserAccountView,
  },
  {
    path: '/users',
    View: UsersView,
  },
  {
    path: '/',
    Drawer: UserDrawer,
    DrawerLow: UserDrawerLow,
    AnonymousView: AnonForms,
  },
];

const store = {
  user: {},
  users: {},
};

const wsBootstrap = (socket, dispatch, getState) => {
  // eslint-disable-next-line no-console
  console.info('user wsBootstrap', socket, dispatch, getState);
  socket.on('user.update', (user) => dispatch(setUser(user)));
};

export { default as UserName } from './UserName';
export { default as UserAccess } from './UserAccess';
export { default as AnonForms } from './AnonForms';
export { default as AnonFormsLinks } from './AnonForms.Links';

export default {
  routes,
  bootstrap,
  store,
  reducers: {
    user: userReducer,
    users: usersReducer,
  },
  wsBootstrap,
};
