
import queryAPI from '../../core/util/queryAPI';
import * as actions from './user.actions';
import reducer from './user.reducer';

import UserRegister from /* webpackChunkName: "UserRegister" */ './UserRegister';
import UserLogin from /* webpackChunkName: "UserLogin" */ './UserLogin';
import UserReset from /* webpackChunkName: "UserReset" */ './UserReset';

export const bootstrap = ({ settings: { userToken } = {} }) => {
  if (!userToken) return;
  queryAPI('/api/user/me', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    },
  })
    .then((res) => {
      if (!res.username) return;
      actions.setUser(res);
    })
    .catch((err) => { throw err; });
};

const routes = [
  {
    exact: true,
    path: ['/', '/login'],
    Login: UserLogin,
  },
  {
    exact: true,
    path: '/register',
    Register: UserRegister,
  },
  {
    exact: true,
    path: '/reset',
    Reset: UserReset,
  },
];

const store = {
  user: {},
};

const wsBootstrap = (socket, dispatch, getState) => {
  // eslint-disable-next-line no-console
  console.info('user wsBootstrap', socket, dispatch, getState);
  socket.on('user.update', (user) => dispatch(actions.setUser(user)));
};

export default {
  routes,
  bootstrap,
  store,
  reducers: {
    user: reducer,
  },
  actions,
  wsBootstrap,
};
