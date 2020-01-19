export default (state = { user: null }, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        loading: false,
        user: {
          ...(state.user || {}),
          ...(action.payload || {}),
        },
      };

    case 'CLEAR_CURRENT_USER':
      return { user: null };

    default:
      return state;
  }
};
