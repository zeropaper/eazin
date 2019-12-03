
import queryAPI from '../../core/util/queryAPI';
import * as actions from './user.actions';
import reducer from './user.reducer';

import AnonForms from /* webpackChunkName: "AnonForms" */ './AnonForms';

export const bootstrap = ({ settings: { userToken } = {} }) => {
  if (!userToken) return;
  queryAPI('/api/user/me', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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
    path: '/',
    AnonymousView: AnonForms,
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
