const { BadRequest } = require('httperrors');
const log = require('../util/log');

const escapeRegexp = (val = '') => (val
  ? (new RegExp(val.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')))
  : null);

const parseFilters = (filtersJSON, schema) => {
  const returned = {};
  try {
    if (typeof filtersJSON !== 'string') return filtersJSON || returned;
    const queryfilter = JSON.parse(filtersJSON || '[]');
    queryfilter.forEach((filter) => {
      console.log('parseFilters', filter.column, schema.paths[filter.column]);
      if (!schema.paths[filter.column]) return;
      const { instance } = schema.paths[filter.column];

      if (instance === 'String') {
        if (filter.operator === '=') {
          returned[filter.column] = filter.value;
          return;
        }

        const val = escapeRegexp(filter.value);
        if (val) returned[filter.column] = { $regex: val };
        return;
      }

      if (instance === 'Date') {
        //
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
