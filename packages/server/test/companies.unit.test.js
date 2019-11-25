/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-standalone-expect */
const prepare = require('./util');

const plugins = require('../src/plugins');

let creator;
let verifiedUser;
let admin;
let company;
let utils;
beforeAll(async () => {
  utils = await prepare({ plugins });
  const { app: { db: { models: { User } } } } = utils;
  await User.deleteMany({});
  creator = await User.register({
    email: 'company.creator@eazin.dev',
    isVerified: true,
    roles: ['post:companies'],
  }, '1234567890Aa!!!');
  verifiedUser = await User.register({
    email: 'company.verified@eazin.dev',
    isVerified: true,
    roles: ['post:companies'],
  }, '1234567890Aa!!!');
  admin = await User.register({
    email: 'company.admin@eazin.dev',
    isAdmin: true,
    isVerified: true,
    roles: ['post:companies'],
  }, '1234567890Aa!!!');
});

describe('company', () => {
  it('can be created by an authenticated user', () => utils
    .post('/api/companies')
    .send({ name: 'ACME' })
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(201)
    .then(async (res) => {
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name', 'ACME');
      company = res.body;

      const user = await utils.app.db.models.User.findOne({ _id: creator.id });
      expect(user.companies.includes(company.id)).toBe(true);
    }));

  it('can be read by its creator', () => utils
    .get(`/api/companies/${company.id}`)
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200)
    .then(async (res) => {
      expect(res.body).toHaveProperty('name', 'ACME');
    }));

  it('lists its members', () => utils
    .get(`/api/companies/${company.id}/users`)
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200)
    .then((res) => {
      expect(res.body).toHaveLength(1);
    }));

  it('can be read by an admin', () => utils
    .get(`/api/companies/${company.id}`)
    .set('Authorization', `Bearer ${admin.token}`)
    .expect(200));

  it('can be updated by its creator', async () => {
    let res = await utils.patch(`/api/companies/${company.id}`)
      .send({ name: 'ACME-2' })
      .set('Authorization', `Bearer ${creator.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('id', company.id);
    expect(res.body).toHaveProperty('name', 'ACME-2');
    company = res.body;

    res = await utils.patch(`/api/companies/${company.id}`)
      .send({ name: 'ACME-3' })
      .set('Authorization', `Bearer ${admin.token}`)
      .expect(200);

    expect(res.body).toHaveProperty('name', 'ACME-3');
  });

  it('can be updated by a member of the company or an admin', async () => {
    const res = await utils.patch(`/api/companies/${company.id}`)
      .send({ name: 'ACME-4' })
      .set('Authorization', `Bearer ${verifiedUser.token}`)
      .expect(403);

    expect(res.body).toHaveProperty('error');
  });
});
