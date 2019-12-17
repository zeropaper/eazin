const ucf = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

export default (singular, {
  idKey = 'id',
  plural = `${singular}s`,
} = {}) => {
  const ucSingular = singular.toUpperCase();
  const ucPlural = plural.toUpperCase();
  const ucfSingular = ucf(singular);
  const ucfPlural = ucf(plural);

  const clear = () => ({
    type: `CLEAR_${ucPlural}`,
  });
  const remove = (payload) => ({
    type: `REMOVE_${ucSingular}`,
    payload,
  });
  const removeMany = (payload) => {
    if (!Array.isArray(payload)) throw new Error('Bad argument, must be an array');
    return {
      type: `REMOVE_${ucPlural}`,
      payload,
    };
  };
  const upsert = (id, payload) => {
    if (!id) throw new Error(`Missing ${idKey}`);
    return {
      type: `UPSERT_${ucSingular}`,
      payload: { ...payload, [idKey]: id },
    };
  };
  const upsertMany = (payload) => {
    if (!Array.isArray(payload)) throw new Error('Bad argument, must be an array');
    return {
      type: `UPSERT_${ucPlural}`,
      payload,
    };
  };

  return [
    (state = {}, { type, payload }) => {
      let obj;

      switch (type) {
        case `CLEAR_${ucPlural}`:
          return {};

        case `REMOVE_${ucSingular}`:
          if (!state[payload]) return state;
          return {
            ...state,
            [payload]: undefined,
          };

        case `REMOVE_${ucPlural}`:
          obj = { ...state };
          payload.forEach((id) => {
            obj = {
              ...obj,
              [id]: undefined,
            };
          });
          return obj;

        case `UPSERT_${ucSingular}`:
          if (!payload[idKey]) {
            // eslint-disable-next-line no-console
            console.warn('Missing %s in payload for action type %s', idKey, type); // , (new Error('Missing id')).stack);
            return state;
          }
          return {
            ...state,
            [payload[idKey]]: {
              ...(state[payload[idKey]] || {}),
              ...payload,
            },
          };

        case `UPSERT_${ucPlural}`:
          obj = { ...state };
          payload.forEach((item) => {
            if (!item[idKey]) {
              // eslint-disable-next-line no-console
              console.warn('Missing %s in item for action type %s', idKey, type);
              return;
            }
            obj = {
              ...obj,
              [item[idKey]]: {
                ...(state[item[idKey]] || {}),
                ...item,
              },
            };
          });
          return obj;

        default:
          return state;
      }
    },
    {
      [`clear${ucfPlural}`]: clear,
      [`remove${ucfSingular}`]: remove,
      [`remove${ucfPlural}`]: removeMany,
      [`upsert${ucfSingular}`]: upsert,
      [`upsert${ucfPlural}`]: upsertMany,
    },
  ];
};
