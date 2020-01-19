export default (state = { user: null }, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...(state || {}),
        [action.payload.id]: {
          ...(state[action.payload.id] || {}),
          ...(action.payload || {}),
        },
      };

    case 'SET_USERS':
      return {
        ...(state || {}),
        ...(action.payload || []).reduce((obj, item) => ({
          ...obj,
          [item.id]: item,
        }), {}),
      };

    case 'CLEAR_USERS':
      return {};

    default:
      return state;
  }
};
