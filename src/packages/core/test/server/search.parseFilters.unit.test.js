const { Schema } = require('mongoose');

const parseFilters = require('../../server/core/search.parseFilters');

const schema = new Schema({
  stringEqual: String,
  stringMatch: String,
  numberEqual1: Number,
  numberEqual2: Number,
  numberGreater: Number,
  numberGreaterEqual: Number,
  numberLessThan: Number,
  numberLessThanEqual: Number,
  dateEqual: Date,
});

const filtersJSON = JSON.stringify([
  {
    column: 'stringEqual',
    operator: '=',
    value: 'a',
  },
  {
    column: 'stringMatch',
    value: 'a',
  },
  {
    column: 'numberEqual1',
    operator: '=',
  },
  {
    column: 'numberEqual2',
    operator: '=',
    value: '-1',
  },
  {
    column: 'numberGreater',
    operator: '>',
    value: '-1',
  },
  {
    column: 'numberGreaterEqual',
    operator: '>=',
    value: '-1',
  },
  {
    column: 'numberLessThan',
    operator: '<',
    value: '-1',
  },
  {
    column: 'numberLessThanEqual',
    operator: '<=',
    value: '-1',
  },
  {
    column: 'dateEqual',
    operator: '=',
    value: '2020-01-23T17:01:00.000Z',
  },
]);

describe('search.parseFilters', () => {
  it('parses string filters', () => {
    const result = parseFilters(filtersJSON, schema);
    // console.info('search.parseFilter', result);
    expect(result).toBeTruthy();
    expect(result).toHaveProperty('stringEqual', 'a');
    expect(result).toHaveProperty('stringMatch', { $regex: /a/ });
    expect(result).toHaveProperty('numberEqual1', 0);
    expect(result).toHaveProperty('numberEqual2', -1);
    expect(result).toHaveProperty('numberGreater', { $gt: -1 });
    expect(result).toHaveProperty('numberGreaterEqual', { $gte: -1 });
    expect(result).toHaveProperty('numberLessThan', { $lt: -1 });
    expect(result).toHaveProperty('numberLessThanEqual', { $lte: -1 });
    expect(result).toHaveProperty('dateEqual');
  });
});
