/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-standalone-expect */
const prepare = require('./prepare-server');

const usersPlugin = require('../../src/packages/users/src/server');
const clientsPlugin = require('../../src/dev/clients/src/server');

let creator;
// let verifiedUser;
let admin;
let client;
let utils;
beforeAll(async () => {
  utils = await prepare({
    plugins: [
      usersPlugin,
      clientsPlugin,
    ],
  });
  const { app: { db: { models: { User } } } } = utils;
  await User.deleteMany({});
  creator = await User.register({
    email: 'client.creator@eazin.dev',
    isVerified: true,
    roles: ['post:clients'],
  }, '1234567890Aa!!!');
  // verifiedUser = await User.register({
  //   email: 'client.verified@eazin.dev',
  //   isVerified: true,
  //   roles: ['post:clients'],
  // }, '1234567890Aa!!!');
  admin = await User.register({
    email: 'client.admin@eazin.dev',
    isAdmin: true,
    isVerified: true,
    roles: ['post:clients'],
  }, '1234567890Aa!!!');
});

afterAll(async () => {
  utils.app.db.connection.close();
});

describe('client', () => {
  it('can be created by an authenticated user', () => utils
    .post('/api/clients')
    .send({ name: 'ACME', redirectURI: 'eazin://auth' })
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(201)
    .then(async (res) => {
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name', 'ACME');
      client = res.body;

      await utils.app.db.model('APIClient').findOne({ _id: creator.id });
    }));

  it('can be read by its creator', () => utils
    .get(`/api/clients/${client.id}`)
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200)
    .then(async (res) => {
      expect(res.body).toHaveProperty('name', 'ACME');
    }));

  it('can be read by an admin', () => utils
    .get(`/api/clients/${client.id}`)
    .set('Authorization', `Bearer ${admin.token}`)
    .expect(200));

  it('can be updated by its creator', async () => {
    let res = await utils.patch(`/api/clients/${client.id}`)
      .send({ name: 'ACME-2' })
      .set('Authorization', `Bearer ${creator.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('id', client.id);
    expect(res.body).toHaveProperty('name', 'ACME-2');
    client = res.body;

    res = await utils.patch(`/api/clients/${client.id}`)
      .send({ name: 'ACME-3' })
      .set('Authorization', `Bearer ${admin.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('name', 'ACME-3');
  });

  it('can be updated by an admin', async () => {
    const res = await utils.patch(`/api/clients/${client.id}`)
      .send({ name: 'ACME-4' })
      .set('Authorization', `Bearer ${admin.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('name', 'ACME-4');
  });
});
