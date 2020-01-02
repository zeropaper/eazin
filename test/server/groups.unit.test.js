/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-standalone-expect */
const prepare = require('../server/prepare-server');

const usersPlugin = require('../../packages/users/src/server');
const groupsPlugin = require('../../src/ui/dev/groups/src/server');

let noAccess;
let creator;
let member1;
let member2;
let admin;
let group;
let utils;
beforeAll(async () => {
  utils = await prepare({
    plugins: [
      usersPlugin,
      groupsPlugin,
    ],
  });
  const { app: { db: { models: { User, Group } } } } = utils;
  await User.deleteMany({});
  await Group.deleteMany({});

  noAccess = await User.register({
    email: 'group.denied@eazin.dev',
    isVerified: true,
  }, '1234567890Aa!!!');

  creator = await User.register({
    email: 'group.creator@eazin.dev',
    isVerified: true,
    roles: ['post:groups', 'get:groups'],
  }, '1234567890Aa!!!');

  member1 = await User.register({
    email: 'group.member1@eazin.dev',
    isVerified: true,
    roles: ['post:groups', 'get:groups'],
  }, '1234567890Aa!!!');

  member2 = await User.register({
    email: 'group.member2@eazin.dev',
    isVerified: true,
    roles: ['post:groups', 'get:groups'],
  }, '1234567890Aa!!!');

  admin = await User.register({
    email: 'group.admin@eazin.dev',
    isAdmin: true,
    isVerified: true,
  }, '1234567890Aa!!!');
});

afterAll(async () => {
  utils.app.db.connection.close();
});

describe('group', () => {
  it('cannot be created by a user without "post:groups" access', () => utils
    .post('/api/groups')
    .send({
      name: 'Homies',
      type: 'friends',
      approvalType: 'members',
    })
    .set('Authorization', `Bearer ${noAccess.token}`)
    .expect(403));

  it('can be created by a user with "post:groups" access', () => utils
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

  it('updates the creator roles at creation', async () => {
    const { app: { db: { models: { User } } } } = utils;
    creator = await User.findById(creator.id);

    expect(creator.roles).toContain(`get:groups/${group.id}`);
    expect(creator.roles).toContain(`patch:groups/${group.id}`);
    expect(creator.roles).toContain(`delete:groups/${group.id}`);
    expect(creator.roles).toContain(`invite:groups/${group.id}`);
    expect(creator.roles).toContain(`revoke:groups/${group.id}`);
  });

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

  it('adds members', () => utils
    .post(`/api/groups/${group.id}/members`)
    .send([member1.id, member2.id])
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200));

  it('updates the member roles when added', async () => {
    const { app: { db: { models: { User } } } } = utils;
    member1 = await User.findById(member1.id);
    member2 = await User.findById(member2.id);

    expect(member1.roles).toContain(`get:groups/${group.id}`);

    expect(member2.roles).toContain(`get:groups/${group.id}`);
  });

  it('removes members', () => utils
    .delete(`/api/groups/${group.id}/members`)
    .send([member2.id])
    .set('Authorization', `Bearer ${creator.token}`)
    .expect(200));

  it('updates the member roles when removed', async () => {
    const { app: { db: { models: { User } } } } = utils;
    member1 = await User.findById(member1.id);
    member2 = await User.findById(member2.id);

    expect(member1.roles).toContain(`get:groups/${group.id}`);

    expect(member2.roles).not.toContain(`get:groups/${group.id}`);
  });

  it('can be deleted by its creator', () => utils
    .delete(`/api/groups/${group.id}`)
    .set('Authorization', `Bearer ${admin.token}`)
    .expect(204));

  it('updates the creator and member roles at deletion', async () => {
    const { app: { db: { models: { User } } } } = utils;
    creator = await User.findById(creator.id);
    member1 = await User.findById(member1.id);
    member2 = await User.findById(member2.id);

    expect(creator.roles).not.toContain(`get:groups/${group.id}`);
    expect(creator.roles).not.toContain(`patch:groups/${group.id}`);
    expect(creator.roles).not.toContain(`delete:groups/${group.id}`);
    expect(creator.roles).not.toContain(`invite:groups/${group.id}`);
    expect(creator.roles).not.toContain(`revoke:groups/${group.id}`);

    expect(member1.roles).not.toContain(`get:groups/${group.id}`);

    expect(member2.roles).not.toContain(`get:groups/${group.id}`);
  });
});