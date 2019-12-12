
import { get } from 'eazin-ui/src/core/util/queryAPI';
import { clearSetting } from 'eazin-settings/src/ui/settings.actions';

import { setUser, clearUser } from './user.actions';
import reducer from './user.reducer';

import AnonForms from './AnonForms';
import UserAccountView from './UserAccountView';
import UsersView from './UsersView';
import UserDrawer from './UserDrawer';

export const bootstrap = (state, dispatch) => get('/api/user/me')
  .then((res) => {
    if (!res.id) throw new Error('No id');
    dispatch(setUser(res));
  })
  .catch(() => {
    dispatch(clearUser());
    dispatch(clearSetting('userToken'));
  });

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
