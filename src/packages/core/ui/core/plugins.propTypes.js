import PropTypes from 'prop-types';

export const View = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.any,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
  }).isRequired,
  api: PropTypes.shape({
    get: PropTypes.func.isRequired,
    head: PropTypes.func.isRequired,
    post: PropTypes.func.isRequired,
    put: PropTypes.func.isRequired,
    patch: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    connect: PropTypes.func.isRequired,
    options: PropTypes.func.isRequired,
    trace: PropTypes.func.isRequired,
  }).isRequired,
};

export const HeaderTabs = {
  ...View,
};

export const Drawer = {
  ...View,
};

export const LandingView = {
  ...View,
};
