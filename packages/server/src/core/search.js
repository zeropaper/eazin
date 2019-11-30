const {
  abs,
  min,
  max,
  floor,
} = Math;

const escapeRegex = (val) => (new RegExp(val
  .replace(/[#-.]|[[-^]|[?|{}]/g, '\\$&')));

const parseFilters = (filtersJSON) => {
  const returned = {};
  try {
    const queryfilter = JSON.parse(filtersJSON || '[]');
    queryfilter.forEach((filter) => {
      returned[filter.column] = {
        $regex: escapeRegex(filter.value),
      };
    });
  } catch (err) {
    console.warn('parseFilters', err.message, filtersJSON);
  }
  return returned;
};

// eslint-disable-next-line no-unused-vars
module.exports = function modelSearchPlugin(schema, options) {
  schema.static('search', function modelSearch(query, next) {
    const Model = this;

    const {
      limit,
      offset: skip,
      // search,
      // orderBy,
      // orderDirection,
    } = query;

    const filter = parseFilters(query.filters);
    Model.countDocuments(filter, (err, totalCount) => {
      if (err) return next(err);

      const absLimit = min(1000, abs(parseInt(limit, 10)) || 0);

      Model.find(filter, null, {
        skip: min(abs(parseInt(skip, 10)) || 0, totalCount),
        limit: absLimit,
      }, (err, data) => {
        if (err) return next(err);

        try {
          next(null, {
            data: Model.sanitizeOutput
              ? data.map(Model.sanitizeOutput)
              : data,
            page: min(max(0, floor(skip / absLimit)), floor(totalCount / absLimit)),
            totalCount,
          });
        } catch (err) {
          next(err);
        }
      });
    });
  });
};
