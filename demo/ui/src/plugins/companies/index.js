import CompaniesDrawer from /* webpackChunkName: "CompaniesDrawer" */ './CompaniesDrawer';
// eslint-disable-next-line max-len
import CompaniesLandingView from /* webpackChunkName: "CompaniesLandingView" */ './CompaniesLandingView';
import CompaniesView from /* webpackChunkName: "CompaniesView" */ './CompaniesView';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPSERT_COMPANY':
      if (!action.payload.id) return state;
      return {
        ...state,
        [action.payload.id]: {
          ...(state[action.payload.id] || {}),
          ...action.payload,
        },
      };

    case 'UPSERT_COMPANIES':
      return (Array.isArray(action.payload)
        ? action.payload
        : Object.values(action.payload))
        .reduce((acc, payload) => reducer(acc, {
          type: 'UPSERT_COMPANY',
          payload,
        }), state);

    default:
      return state;
  }
};

const routes = [
  {
    path: '/',
    Drawer: CompaniesDrawer,
    LandingView: CompaniesLandingView,
  },
  {
    exact: true,
    path: '/companies',
    View: CompaniesView,
  },
  {
    exact: true,
    path: '/companies/:companyId',
    View: CompaniesView,
  },
];

export default {
  reducers: {
    companies: reducer,
  },
  routes,
};
