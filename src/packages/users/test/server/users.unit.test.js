/* eslint-disable jest/no-disabled-tests */
const prepare = require('../../../../../test/server/prepare-server');

const userPlugin = require('../../server');
const makeFixtures = require('./users.fixtures');

let tearDown;
let get;
let db;
let admin;
beforeAll(async () => {
  const utils = await prepare({
    plugins: [userPlugin],
  });
  tearDown = utils.tearDown;
  get = utils.get;
  db = utils.app.get('db');
  const User = db.model('User');

  await User.deleteMany({});

  admin = await User.register({
    email: 'admin@eazin.dev',
    isVerified: true,
    roles: [],
    isAdmin: true,
  }, '1234567890Aa!!!');

  await makeFixtures(db);
});

afterAll(() => tearDown());

describe('users', () => {
  it.skip('allows to invite users', async () => {
    // TODO
    expect(true).toBeTruthy();
  });

  it('lists users', async () => {
    let res = await get('/api/users');
    expect(res.status).toBe(401);

    res = await get('/api/users?limit=10&offset=40')
      .set('Authorization', `Bearer ${admin.token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('page', 4);
    expect(res.body).toHaveProperty('totalCount', 101);

    res = await get('/api/users?limit=5&offset=12')
      .set('Authorization', `Bearer ${admin.token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('page', 2);
    expect(res.body).toHaveProperty('totalCount', 101);
  });

  it.skip('gets details about a user', async () => {
    // TODO
    expect(true).toBeTruthy();
  });

  it.skip('updates a user', async () => {
    // TODO
    expect(true).toBeTruthy();
  });

  it.skip('deletes a user', async () => {
    // TODO
    expect(true).toBeTruthy();
  });
});
