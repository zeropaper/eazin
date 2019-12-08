const complexDescription = require('./fixtures.fixtures');
const prepare = require('../packages/server/test/util');
const plugins = require('../packages/server/src/plugins');
const process = require('../packages/server/src/core/fixtures/process');

let utils;
beforeAll(async () => {
  utils = await prepare({ plugins });
});

afterAll(async () => {
  utils.app.db.connection.close();
});

describe('fixtures endpoint', () => {
  it('accepts an object', async () => {
    const body = process(complexDescription);

    expect(body).toHaveProperty('User');
    expect(body).toHaveProperty('Group');
    expect(body).toHaveProperty('Organisation');

    expect(body.User).toHaveLength(5);
    expect(body.Organisation).toHaveLength(1);
    expect(body.Group).toHaveLength(2);

    expect(Array.isArray(body.User[0])).toBe(false);
    expect(Array.isArray(body.Organisation[0])).toBe(false);
    expect(Array.isArray(body.Group[0])).toBe(false);
    body.Group.forEach((Group) => {
      expect(Group).toHaveProperty('admin');
      expect(Group).toHaveProperty('approvalType');
    });

    const response = await utils.post('/fixtures').send(body);
    expect(response.body).toHaveProperty('User');
    expect(response.body).toHaveProperty('Group');
    expect(response.body).toHaveProperty('Organisation');

    expect(response.body.User).toHaveLength(5);
    expect(response.body.Organisation).toHaveLength(1);
    expect(response.body.Group).toHaveLength(2);
  });

  it('accepts a fixtures file path', async () => {
    const response = await utils.post('/fixtures').send({
      file: 'test/fixtures.fixtures',
    });
    expect(response.body).toHaveProperty('User');
    expect(response.body).toHaveProperty('Group');
    expect(response.body).toHaveProperty('Organisation');

    expect(response.body.User).toHaveLength(5);
    expect(response.body.Organisation).toHaveLength(1);
    expect(response.body.Group).toHaveLength(2);
  });
});
