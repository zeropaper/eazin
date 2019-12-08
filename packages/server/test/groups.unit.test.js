/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-standalone-expect */
const prepare = require('./util');

const plugins = require('../src/plugins');

let creator;
let admin;
let group;
let utils;
beforeAll(async () => {
  utils = await prepare({ plugins });
  const { app: { db: { models: { User } } } } = utils;
  await User.deleteMany({});
  creator = await User.register({
    email: 'group.creator@eazin.dev',
    isVerified: true,
    roles: ['post:groups'],
  }, '1234567890Aa!!!');
  admin = await User.register({
    email: 'group.admin@eazin.dev',
    isAdmin: true,
    isVerified: true,
    roles: ['post:groups'],
  }, '1234567890Aa!!!');
});

afterAll(async () => {
  utils.app.db.connection.close();
});

describe('group', () => {
  it('can be created by an authenticated user', () => utils
    .post('/api/groups')
    .send({
      name: 'Homies',
      type: 'friends',
      approvalType: 'members',
    })
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(201)
    .then(async (res) => {
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name', 'Homies');
      group = res.body;

      expect(group).toHaveProperty('id');
      expect(group).toHaveProperty('name', 'Homies');
      expect(group).toHaveProperty('type', 'friends');
      expect(group).toHaveProperty('approvalType', 'members');
    }));

  it('can be read by its creator', () => utils
    .get(`/api/groups/${group.id}`)
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200)
    .then(async (res) => {
      expect(res.body).toHaveProperty('name', 'Homies');
      expect(res.body).toHaveProperty('type', 'friends');
      expect(res.body).toHaveProperty('approvalType', 'members');
    }));

  it('lists its members', () => utils
    .get(`/api/groups/${group.id}/members`)
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200)
    .then((res) => {
      expect(res.body).toHaveLength(1);
    }));

  it('can be read by an admin', () => utils
    .get(`/api/groups/${group.id}`)
    .set('Authorization', `Bearer ${admin.token}`)
    .expect(200));

  it('can be updated by its creator', async () => {
    let res = await utils.patch(`/api/groups/${group.id}`)
      .send({ name: 'Homies-2' })
      .set('Authorization', `Bearer ${creator.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('id', group.id);
    expect(res.body).toHaveProperty('name', 'Homies-2');
    group = res.body;

    res = await utils.patch(`/api/groups/${group.id}`)
      .send({ name: 'Homies-3' })
      .set('Authorization', `Bearer ${admin.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('name', 'Homies-3');
  });
});
