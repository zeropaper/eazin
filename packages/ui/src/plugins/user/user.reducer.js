export default (state = { user: null }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: {
          ...(state.user || {}),
          ...(action.payload || {}),
        },
      };

    case 'CLEAR_USER':
      return { user: null };

    default:
      return state;
  }
};
