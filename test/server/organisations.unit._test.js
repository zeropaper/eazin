/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-standalone-expect */
const prepare = require('./prepare-server');

const usersPlugin = require('../../src/packages/users/server');
const organisationsPlugin = require('../../src/dev/organisations/server');

let creator;
let verifiedUser;
let admin;
let organisation;
let utils;
beforeAll(async () => {
  utils = await prepare({
    plugins: [
      usersPlugin,
      organisationsPlugin,
    ],
  });
  const { app: { db: { models: { User } } } } = utils;
  await User.deleteMany({});
  creator = await User.register({
    email: 'organisation.creator@eazin.dev',
    isVerified: true,
    roles: ['post:organisations'],
  }, '1234567890Aa!!!');
  verifiedUser = await User.register({
    email: 'organisation.verified@eazin.dev',
    isVerified: true,
    roles: ['post:organisations'],
  }, '1234567890Aa!!!');
  admin = await User.register({
    email: 'organisation.admin@eazin.dev',
    isAdmin: true,
    isVerified: true,
    roles: ['post:organisations'],
  }, '1234567890Aa!!!');
});

afterAll(async () => {
  utils.app.get('db').connection.close();
});

describe('organisation', () => {
  it('can be created by an authenticated user', () => utils
    .post('/api/organisations')
    .send({ name: 'ACME' })
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(201)
    .then(async (res) => {
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name', 'ACME');
      organisation = res.body;

      const user = await utils.app.get('db').models.User.findOne({ _id: creator.id });
      expect(user.organisations.includes(organisation.id)).toBe(true);
    }));

  it('can be read by its creator', () => utils
    .get(`/api/organisations/${organisation.id}`)
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200)
    .then(async (res) => {
      expect(res.body).toHaveProperty('name', 'ACME');
    }));

  it('lists its members', () => utils
    .get(`/api/organisations/${organisation.id}/users`)
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200)
    .then((res) => {
      expect(res.body).toHaveLength(1);
    }));

  it('can be read by an admin', () => utils
    .get(`/api/organisations/${organisation.id}`)
    .set('Authorization', `Bearer ${admin.token}`)
    .expect(200));

  it('can be updated by its creator', async () => {
    let res = await utils.patch(`/api/organisations/${organisation.id}`)
      .send({ name: 'ACME-2' })
      .set('Authorization', `Bearer ${creator.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('id', organisation.id);
    expect(res.body).toHaveProperty('name', 'ACME-2');
    organisation = res.body;

    res = await utils.patch(`/api/organisations/${organisation.id}`)
      .send({ name: 'ACME-3' })
      .set('Authorization', `Bearer ${admin.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('name', 'ACME-3');
  });

  it('can be updated by a member of the organisation or an admin', async () => {
    const res = await utils.patch(`/api/organisations/${organisation.id}`)
      .send({ name: 'ACME-4' })
      .set('Authorization', `Bearer ${verifiedUser.token}`)
      .expect(403);

    expect(res.body).toHaveProperty('error');
  });
});
