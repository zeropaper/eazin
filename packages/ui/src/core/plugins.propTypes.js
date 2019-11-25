import PropTypes from 'prop-types';

export const View = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.any,
  }),
};

export const HeaderTabs = {
  ...View,
};

export const Drawer = {
  ...View,
};
