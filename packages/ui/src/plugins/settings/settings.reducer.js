const storeName = 'eazin-1';

const store = (data) => {
  localStorage[storeName] = JSON.stringify(data || {});
  return data;
};

export const restore = () => JSON.parse(localStorage[storeName] || '{}');

export default (state = restore(), { type, payload } = {}) => {
  switch (type) {
    case 'SET_SETTING':
      return store({
        ...state,
        [payload.key]: payload.value,
      });

    case 'CLEAR_SETTING':
    case 'RESET_SETTING':
      return store({
        ...state,
        [payload.key]: null,
      });

    case 'SET_SETTINGS':
      return store({
        ...state,
        ...payload,
      });

    case 'RESET_SETTINGS':
      return store({});

    default:
      return state;
  }
};
