/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-standalone-expect */
const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const moment = require('moment');

const prepare = require('../../../../test/server/prepare-server');

const usersPlugin = require('../../../packages/users/server');
const clientsPlugin = require('../server');

const bearerClient = passport.authenticate('bearer-apiclient', { session: false });
const bearerComposite = passport.authenticate('bearer-composite', { session: false });
const testRouter = express.Router();

testRouter.get(
  '/client-only',
  bearerClient,
  // check(),
  (req, res) => res.status(204).end(),
);

testRouter.get(
  '/composite',
  bearerComposite,
  (req, res) => res.status(204).end(),
);

const testPlugin = {
  name: 'Test API Clients',
  apiRouter: [
    {
      path: '/test-service',
      router: testRouter,
    },
  ],
};

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
      testPlugin,
    ],
  });
  const { models: { User, APIToken, APIClient } } = mongoose;
  await User.deleteMany({});
  await APIClient.deleteMany({});
  await APIToken.deleteMany({});

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

afterAll(() => utils.tearDown());

describe('client', () => {
  let User;
  let APIToken;
  let APIClient;
  beforeAll(() => {
    User = mongoose.model('User');
    APIClient = mongoose.model('APIClient');
    APIToken = mongoose.model('APIToken');
  });

  it('can be created by an authenticated user', () => utils
    .post('/api/clients')
    .send({
      name: 'ACME',
      redirectURI: 'eazin://auth',
    })
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(201)
    .then(async (res) => {
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name', 'ACME');
      expect(res.body).toHaveProperty('owner', creator.id);
      client = res.body;

      const found = await APIClient.findOne({ _id: client.id });
      expect(found.id).toBe(client.id);

      creator = await User.findById(creator._id);
      expect(creator.roles).toEqual(expect.arrayContaining([
        'post:clients',
        `get:clients/${client.id}`,
        `patch:clients/${client.id}`,
        `delete:clients/${client.id}`,
        `post:clients/${client.id}`,
      ]));
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
    let res = await utils
      .patch(`/api/clients/${client.id}`)
      .send({ name: 'ACME-2' })
      .set('Authorization', `Bearer ${creator.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('id', client.id);
    expect(res.body).toHaveProperty('name', 'ACME-2');
    client = res.body;

    res = await utils
      .patch(`/api/clients/${client.id}`)
      .send({ name: 'ACME-3' })
      .set('Authorization', `Bearer ${admin.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('name', 'ACME-3');
  });

  it('can be updated by an admin', async () => {
    const res = await utils
      .patch(`/api/clients/${client.id}`)
      .send({ name: 'ACME-4' })
      .set('Authorization', `Bearer ${admin.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('name', 'ACME-4');
  });

  describe('API token', () => {
    let token;

    it('can be created for a client', async () => {
      const res = await utils
        .post(`/api/clients/${client.id}`)
        .set('Authorization', `Bearer ${creator.token}`)
        .expect(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('createdAt');
      // expect(res.body).toHaveProperty('expiresAt');
      token = res.body;
    });

    it('can be used for a client', () => utils
      .get('/api/test-service/client-only')
      .set('Authorization', `Bearer ${token.token}`)
      .expect(204));

    it('can have an expiration date', async () => {
      const dbToken = await APIToken.findById(token.id);
      dbToken.expiresAt = moment().subtract(2, 'day').toDate();
      await dbToken.save();
      await utils.get('/api/test-service/client-only')
        .set('Authorization', `Bearer ${token.token}`)
        .expect(401);

      dbToken.expiresAt = moment().add(2, 'days').toDate();
      await dbToken.save();
      await utils.get('/api/test-service/client-only')
        .set('Authorization', `Bearer ${token.token}`)
        .expect(204);
    });
  });

  describe('composite authentication', () => {
    let token;
    beforeAll(async () => {
      token = (await utils.post(`/api/clients/${client.id}`)
        .set('Authorization', `Bearer ${creator.token}`)
        .expect(200)).body;
    });

    it('can use an API token', () => utils
      .get('/api/test-service/composite')
      .set('Authorization', `Bearer ${token.token}`)
      .expect(204));

    it('can use a user token', () => utils
      .get('/api/test-service/composite')
      .set('Authorization', `Bearer ${creator.token}`)
      .expect(204));
  });
});
