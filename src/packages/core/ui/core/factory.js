import { connect } from 'react-redux';
import {
  get,
  post,
  patch,
  delete as del,
} from './util/queryAPI';

const ucf = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const buildActions = ({
  singular,
  idKey = 'id',
  plural = `${singular}s`,
  ucSingular = singular.toUpperCase(),
  ucPlural = plural.toUpperCase(),
  ucfSingular = ucf(singular),
  ucfPlural = ucf(plural),
} = {}) => ({
  [`clear${ucfPlural}`]: () => ({
    type: `CLEAR_${ucPlural}`,
  }),
  [`removeOne${ucfSingular}`]: (payload) => ({
    type: `REMOVE_${ucSingular}`,
    payload,
  }),
  [`removeMany${ucfPlural}`]: (payload) => {
    if (!Array.isArray(payload)) throw new Error('Bad argument, must be an array');
    return {
      type: `REMOVE_${ucPlural}`,
      payload,
    };
  },
  [`upsertOne${ucfSingular}`]: (payload) => {
    const id = payload[idKey];
    if (!id) throw new Error(`Missing ${idKey} to upsertOne${ucfSingular}`);
    return {
      type: `UPSERT_${ucSingular}`,
      payload: { ...payload, [idKey]: id },
    };
  },
  [`upsertMany${ucfPlural}`]: (payload) => {
    if (!Array.isArray(payload)) throw new Error('Bad argument, must be an array');
    return {
      type: `UPSERT_${ucPlural}`,
      payload,
    };
  },
});

export const buildAPIActions = ({
  singular,
  endpoint,
  idKey = 'id',
  plural = `${singular}s`,
  ucSingular = singular.toUpperCase(),
  ucPlural = plural.toUpperCase(),
  ucfSingular = ucf(singular),
  ucfPlural = ucf(plural),
} = {}) => {
  const sync = buildActions({
    singular,
    idKey,
    plural,
    ucSingular,
    ucPlural,
    ucfSingular,
    ucfPlural,
  });
  return Object.keys(sync).reduce((funcs, key) => ({
    ...funcs,
    [key]: (dispatch) => async (...args) => {
      try {
        // like... seriously? "clear"...
        if (key.startsWith('clear')) {
          await del(endpoint);
          dispatch(sync[key]());
        } else if (key.startsWith('remove')) {
          // accepts `doc.id` or `id`
          const id = args[0][idKey] || args[0];
          await del(`${endpoint}/${id}`);
          dispatch(sync[key](id));
        } else if (key.startsWith('upsertOne')) {
          const [doc] = args;
          // document exists and will be patched
          const id = doc[idKey];
          const upserted = id
            ? await patch(`${endpoint}/${id}`, { body: doc })
            : await post(endpoint, { body: doc });
          dispatch(sync[key](upserted));
        } if (key.startsWith('upsertMany')) {
          throw new Error(`PR welcome: eazin action factory async upsertMany* (${key}) is not yet ready`);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('async action "%s"', key, ...args, err.stack);
      }
    },
  }), {
    [`retrieveOne${ucfSingular}`]:
      (dispatch) => async (id) => dispatch(sync[`upsertOne${ucfSingular}`](await get(`${endpoint}/${id}`))),
    [`retrieveMany${ucfPlural}`]:
      // eslint-disable-next-line no-unused-vars
      (dispatch) => async (query = {}) => dispatch(sync[`upsertMany${ucfPlural}`](await get(endpoint))),
  });
};

export const buildReducer = ({
  singular,
  idKey = 'id',
  plural = `${singular}s`,
  ucSingular = singular.toUpperCase(),
  ucPlural = plural.toUpperCase(),
} = {}) => (state = {}, { type, payload }) => {
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
};

export const buildConnector = ({
  singular,
  plural = `${singular}s`,
  idKey = 'id',
  actions = null,
}) => {
  const stateToProps = ({
    [plural]: docsInfo,
  }, {
    [idKey]: id,
  }) => (id ? docsInfo[id] : docsInfo);
  if (!actions) return connect(stateToProps);

  return connect(stateToProps, (dispatch) => Object.keys(actions)
    .reduce((obj, key) => ({
      ...obj,
      [key]: (...args) => dispatch(actions[key](...args)),
    }), {}));
};

export default ({
  singular,
  endpoint,
  idKey = 'id',
  plural = `${singular}s`,
  ucSingular = singular.toUpperCase(),
  ucPlural = plural.toUpperCase(),
  ucfSingular = ucf(singular),
  ucfPlural = ucf(plural),
} = {}) => [
  buildReducer({
    singular,
    idKey,
    plural,
    ucSingular,
    ucPlural,
    ucfSingular,
    ucfPlural,
  }),
  buildActions({
    singular,
    idKey,
    plural,
    ucSingular,
    ucPlural,
    ucfSingular,
    ucfPlural,
  }),
  endpoint && buildAPIActions({
    endpoint,
    singular,
    idKey,
    plural,
    ucSingular,
    ucPlural,
    ucfSingular,
    ucfPlural,
  }),
].filter(Boolean);
