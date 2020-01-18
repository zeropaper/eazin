const {
  abs,
  min,
  max,
  floor,
} = Math;

const escapeRegexp = (val = '') => (val
  ? (new RegExp(val.replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')))
  : null);

const parseFilters = (filtersJSON) => {
  const returned = {};
  try {
    if (typeof filtersJSON !== 'string') return filtersJSON || returned;
    const queryfilter = JSON.parse(filtersJSON || '[]');
    queryfilter.forEach((filter) => {
      const val = escapeRegexp(filter.value);
      if (val) returned[filter.column] = { $regex: val };
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('parseFilters', err.message, filtersJSON);
  }
  return returned;
};

module.exports = function modelSearchPlugin(schema) { // , options) {
  schema.static('search', function modelSearch(query, next) {
    const Model = this;

    const {
      limit,
      offset: skip,
      // search,
      orderBy,
      orderDirection,
    } = query;

    const filter = parseFilters(query.filters);
    Model.countDocuments(filter, (err, totalCount) => {
      if (err) return next(err);

      const absLimit = min(1000, abs(parseInt(limit, 10)) || 0);

      Model
        .find(filter, null, {
          skip: min(abs(parseInt(skip, 10)) || 0, totalCount),
          limit: absLimit,
        })
        .sort(`${orderDirection === 'asc' ? '' : '-'}${orderBy || 'updatedAt'}`)
        // eslint-disable-next-line no-shadow
        .exec((err, data) => {
          if (err) return next(err);

          try {
            next(null, {
              data: Model.sanitizeOutput
                ? data.map(Model.sanitizeOutput)
                : data,
              page: min(max(0, floor(skip / absLimit)), floor(totalCount / absLimit)) || 0,
              totalCount,
            });
          // eslint-disable-next-line no-shadow
          } catch (err) {
            next(err);
          }
        });
    });
  });
};
