const { Schema } = require('mongoose');

const parseFilters = require('../../server/core/search.parseFilters');

const schema = new Schema({
  string: String,
  number: Number,
  date: Date,
});

const filtersJSON = JSON.stringify([
  {
    column: 'string',
    operator: '=',
    value: 'a',
  },
  {
    column: 'number',
    operator: '=',
  },
  {
    column: 'date',
    operator: '=',
    value: '2020-01-23T17:01:00.000Z',
  },
]);

describe('search.parseFilters', () => {
  it('parses string filters', () => {
    const result = parseFilters(filtersJSON, schema);
    console.info(result);
    expect(result).toBeTruthy();
    expect(result).toHaveProperty('string');
    expect(result).toHaveProperty('number');
    expect(result).toHaveProperty('date');
  });
});
