const { BadRequest } = require('httperrors');
const log = require('../util/log');

const escapeRegexp = (val = '') => (val
  ? (new RegExp(val.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')))
  : null);

const parseFilters = (filtersJSON, schema) => {
  const returned = {};

  // https://docs.mongodb.com/manual/reference/operator/query-comparison/
  const ops = {
    '>': '$gt',
    '>=': '$gte',
    '<': '$lt',
    '<=': '$lte',
  };

  try {
    if (typeof filtersJSON !== 'string') return filtersJSON || returned;
    const queryfilter = JSON.parse(filtersJSON || '[]');
    queryfilter.forEach((filter) => {
      if (!schema.paths[filter.column]) return;
      const { instance } = schema.paths[filter.column];

      if (instance === 'String') {
        if (filter.operator === '=') {
          returned[filter.column] = filter.value || '';
          return;
        }

        const val = escapeRegexp(filter.value || '');
        if (val) returned[filter.column] = { $regex: val };
        return;
      }

      if (instance === 'Number') {
        if (filter.operator === '=') {
          returned[filter.column] = +(filter.value || 0);
          return;
        }

        if (filter.value) {
          returned[filter.column] = {
            [ops[filter.operator]]: +(filter.value || 0),
          };
        }
        return;
      }

      if (instance === 'Date') {
        if (filter.operator === '=') {
          returned[filter.column] = filter.value;
          return;
        }

        if (filter.value) {
          returned[filter.column] = {
            [ops[filter.operator]]: new Date(filter.value),
          };
        }
        return;
      }

      log('filter', filter.column, instance);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('parseFilters', err.message, filtersJSON);
    throw BadRequest();
  }
  return returned;
};
module.exports = parseFilters;
