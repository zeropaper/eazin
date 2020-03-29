/* eslint-disable no-unused-vars */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-standalone-expect */
const mongoose = require('mongoose');

const prepare = require('../../../../test/server/prepare-server');

const usersPlugin = require('../../../packages/users/server');
const groupsPlugin = require('../server');
const groupsExamplePlugin = require('../server/groups.example');

let noAccess;
let creator;
let member1;
let member2;
let admin;
let utils;

const setup = (plugins) => async () => {
  if (utils) await utils.tearDown();

  utils = await prepare({ plugins });
  const { app } = utils;
  const { models: { User } } = mongoose;
  await User.deleteMany({});

  noAccess = await User.register({
    email: 'group.denied@eazin.local',
    isVerified: true,
  }, '1234567890Aa!!!');

  creator = await User.register({
    _id: '000000000000000000000001',
    email: 'group.creator@eazin.local',
    isVerified: true,
    roles: ['post:groups', 'get:groups'],
  }, '1234567890Aa!!!');

  member1 = await User.register({
    _id: '000000000000000000000002',
    email: 'group.member1@eazin.local',
    isVerified: true,
    roles: ['post:groups', 'get:groups'],
  }, '1234567890Aa!!!');

  member2 = await User.register({
    _id: '000000000000000000000003',
    email: 'group.member2@eazin.local',
    isVerified: true,
    roles: ['post:groups', 'get:groups'],
  }, '1234567890Aa!!!');

  admin = await User.register({
    _id: '000000000000000000000000',
    email: 'group.admin@eazin.local',
    isAdmin: true,
    isVerified: true,
  }, '1234567890Aa!!!');
};

beforeAll(setup([
  usersPlugin,
  groupsPlugin,
]));

afterAll(async () => utils.tearDown());

const clearGroups = () => {
  const { app } = utils;
  const { models: { Group } } = mongoose;
  return Group.deleteMany({});
};

const makeGroup = (i, user) => utils
  .post('/api/groups')
  .send({
    name: `Group ${i}`,
    type: 'friends',
    approvalType: 'members',
  })
  .set('Authorization', `Bearer ${user.token}`)
  .expect(201)
  .then(({ body }) => body);

const makeGroups = (count = 10, user = admin) => {
  const promises = [];
  for (let i = 0; i < count; i += 1) {
    promises.push(makeGroup(i, user));
  }
  return Promise.all(promises);
};

const findGroupById = (id) => {
  const Group = mongoose.model('Group');
  return Group.findById(id);
};


const accesses = (userType, granted = false) => [
  userType,
  [
    ['POST', '/groups/:groupId/documents/', granted ? 201 : 401],
    ['GET', '/groups/:groupId/documents/', granted ? 200 : 401],
    ['GET', '/groups/:groupId/documents/:groupExampleDocumentId', granted ? 200 : 401],
    ['PATCH', '/groups/:groupId/documents/:groupExampleDocumentId', granted ? 200 : 401],
    ['DELETE', '/groups/:groupId/documents/:groupExampleDocumentId', granted ? 204 : 401],
  ],
];
const testData = [
  ['default', {
    forbids: [
      accesses('anons'),
      accesses('nonMembers'),
    ],
    allows: [
      accesses('admins', true),
      accesses('members', true),
    ],
  }],
];


describe('group', () => {
  describe('access', () => {
    let group;

    beforeAll(clearGroups);

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
        expect(group).toHaveProperty('approvalType', 'members');

        const dbGroup = await findGroupById(group.id);
        expect(dbGroup).toHaveProperty('admin', creator._id);
        expect(dbGroup).toHaveProperty('name', 'Homies');
      }));

    it('updates the creator roles at creation', async () => {
      const { app } = utils;
      const { models: { User } } = mongoose;
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
      const { app } = utils;
      const { models: { User } } = mongoose;
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
      const { app } = utils;
      const { models: { User } } = mongoose;
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
      const { app } = utils;
      const { models: { User } } = mongoose;
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

  describe('invitation', () => {
    let group;
    let message;

    beforeAll(async () => {
      await clearGroups();
      const res = await utils
        .post('/api/groups')
        .send({
          name: 'Invite',
          type: 'friends',
          approvalType: 'members',
        })
        .set('Authorization', `Bearer ${creator.token}`);
      group = res.body;
    });

    it('sends an email', async () => {
      const email = 'invited.1@eazin.local';
      await utils.post(`/api/groups/${group.id}/invite`)
        .set('Authorization', `Bearer ${creator.token}`)
        .send({ email })
        .expect(204);

      message = await utils.sneakMessage(email);
    });

    it('completes the registration', () => {
      expect(message).toHaveProperty('token');
      // console.info('invite message', message);
    });
  });

  describe('listing', () => {
    let adminGroups;
    let creatorGroups;

    beforeAll(async () => {
      await clearGroups();
      adminGroups = await makeGroups(50);
      creatorGroups = await makeGroups(50, creator);
    });

    it('returns all groups for admin users', async () => {
      await utils
        .get('/api/groups')
        .set('Authorization', `Bearer ${admin.token}`)
        .then((result) => {
          expect(result.body).toHaveProperty('data');
          expect(result.body.data).toHaveLength(10);
          expect(result.body).toHaveProperty('page', 0);
          expect(result.body).toHaveProperty('totalCount', 100);
        });
    });

    it('returns some groups for non-admin users', async () => {
      await utils
        .get('/api/groups')
        .set('Authorization', `Bearer ${creator.token}`)
        .then((result) => {
          expect(result.body).toHaveProperty('data');
          expect(result.body.data).toHaveLength(10);
          expect(result.body).toHaveProperty('page', 0);
          expect(result.body).toHaveProperty('totalCount', 50);
        });
    });
  });

  describe('content', () => {
    const env = {
      anons: [null],
    };

    let User;
    let Group;
    let GroupExampleDocument;

    const makeRequest = (method, path, expected) => (user) => {
      const met = method.toLowerCase();
      const urlPath = path
        .replace(':groupId', env.groups[0]._id)
        .replace(':groupExampleDocumentId', env.documents[0][0]._id);
      const url = `/api${urlPath}`;

      let req = utils[met](url);

      if (user) {
        req = req.set('Authorization', `Bearer ${user.token}`);
      }

      if (['patch', 'post'].indexOf(met) > -1) {
        req = req.send({
          group: env.groups[0]._id,
          title: 'title',
          content: 'content',
        });
      }

      return req.then((res) => {
        // console.info('%s: %s %s', user && user.email, method, url, expected, res.status);
        expect(res.status).toBe(expected);
      });
    };

    const makePromises = (users, ...rest) => Promise
      .all(users.map(makeRequest(...rest)));

    const prepareTests = async () => {
      await User.deleteMany({});
      await Group.deleteMany({});
      await GroupExampleDocument.deleteMany({});

      const admins = [
        await User.register({
          email: 'admin1@eazin.local',
          isAdmin: true,
          isVerified: true,
        }, '1234567890Aa!!!'),
      ];

      const nonMembers = [
        await User.register({
          email: 'non.member1@eazin.local',
          isVerified: true,
          roles: ['post:groups', 'get:groups'],
        }, '1234567890Aa!!!'),
      ];

      const members = [
        await User.register({
          email: 'group1.member1@eazin.local',
          isVerified: true,
          roles: ['post:groups', 'get:groups'],
        }, '1234567890Aa!!!'),
      ];

      const groups = [
        await (new Group({
          name: 'Group 1',
          members,
          approvalType: 'members',
          admin: await User.register({
            email: 'group1.creator@eazin.local',
            isVerified: true,
            roles: ['post:groups', 'get:groups'],
          }, '1234567890Aa!!!'),
        })).save(),

        await (new Group({
          name: 'Group 2',
          approvalType: 'open',
          admin: await User.register({
            email: 'group2.creator@eazin.local',
            isVerified: true,
            roles: ['post:groups', 'get:groups'],
          }, '1234567890Aa!!!'),
        })).save(),
      ];

      const documents = [
        [
          await (new GroupExampleDocument({
            group: groups[0],
            title: 'Group 1 Doc A',
          })).save(),
          await (new GroupExampleDocument({
            group: groups[0],
            title: 'Group 1 Doc B',
          })).save(),
          await (new GroupExampleDocument({
            group: groups[0],
            title: 'Group 1 Doc C',
          })).save(),
        ],
        [
          await (new GroupExampleDocument({
            group: groups[1],
            title: 'Group 2 Doc A',
          })).save(),
          await (new GroupExampleDocument({
            group: groups[1],
            title: 'Group 2 Doc B',
          })).save(),
          await (new GroupExampleDocument({
            group: groups[1],
            title: 'Group 2 Doc C',
          })).save(),
        ],
      ];

      env.groups = groups;
      env.documents = documents;
      env.members = members;
      env.nonMembers = nonMembers;
      env.admins = admins;
    };
    beforeAll(async () => {
      await setup([
        usersPlugin,
        groupsExamplePlugin,
        groupsPlugin,
      ])();

      User = mongoose.model('User');
      Group = mongoose.model('Group');
      GroupExampleDocument = mongoose.model('GroupExampleDocument');
    });

    describe.each(testData)('access %s type group document', (type, expectations) => {
      describe.each([
        ['forbids', expectations.forbids],
        ['allows', expectations.allows],
      ])('%s', (grant, grantExpectations) => {
        describe.each(grantExpectations)('%s user', (userType, scopeExpectations) => {
          beforeAll(prepareTests);

          const makeMethods = (...rest) => makePromises(env[userType], ...rest);

          it.each(scopeExpectations)('%s /api%s requests with %s', makeMethods);
        });
      });
    });
  });
});
