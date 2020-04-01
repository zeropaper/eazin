/* eslint-disable no-unused-vars */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-standalone-expect */
const mongoose = require('mongoose');
const lowercase = require('lodash.lowercase');

const prepare = require('../../../../test/server/prepare-server');

const usersPlugin = require('../../../packages/users/server');
const groupsPlugin = require('../server');
const groupsExamplePlugin = require('./groups.example');

let utils;
const env = {
  anons: [null],
};

let User;
let Group;
let GroupDocument;

const setup = (plugins) => async () => {
  if (utils) await utils.tearDown();

  utils = await prepare({ plugins });

  User = mongoose.model('User');
  Group = mongoose.model('Group');
  GroupDocument = mongoose.model('GroupDocument');

  await User.deleteMany({});
  await Group.deleteMany({});
  await GroupDocument.deleteMany({});
};

const dot = (str) => str
  .toLowerCase()
  .split(/[^0-9a-z]+/)
  .join('.');

const mkDbAdmin = (email) => User.register({
  email: `${dot(email)}.admin@eazin.test`,
  isAdmin: true,
  isVerified: true,
}, '1234567890Aa!!!');

const mkDbUser = (email, roles) => User.register({
  email: `${dot(email)}@eazin.test`,
  roles: roles || ['post:groups', 'get:groups'],
  isVerified: true,
}, '1234567890Aa!!!');

const mkDbGroup = async (name, members) => (new Group({
  name,
  members: members || [],
  approvalType: 'members',
  admin: await mkDbUser(`${name}.creator`),
})).save();

const mkDbGroupDoc = (title, group) => (new GroupDocument({
  title: `${group.name} ${title}`,
  group,
})).save();

const makeRequest = (method, path, expected) => (user) => {
  const met = method.toLowerCase();
  const urlPath = path
    .replace(':groupId', env.groups[0]._id)
    .replace(':groupDocumentId', env.documents[0][0]._id);
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

  return req.then((res) => expect(res.status).toBe(expected));
};

const makePromises = (users, ...rest) => Promise
  .all(users.map(makeRequest(...rest)));

const prepareTests = async () => {
  await User.deleteMany({});
  await Group.deleteMany({});
  await GroupDocument.deleteMany({});

  const admins = [
    await mkDbAdmin('one'),
  ];

  const nonMembers = [
    await mkDbUser('non.member1'),
  ];

  const members = [
    await mkDbUser('group1.member1'),
  ];

  const groups = [
    await mkDbGroup('Group 1', members),
    await mkDbGroup('Group 2'),
  ];

  const documents = [
    [
      await mkDbGroupDoc('Doc A', groups[0]),
      await mkDbGroupDoc('Doc B', groups[0]),
      await mkDbGroupDoc('Doc C', groups[0]),
    ],
    [
      await mkDbGroupDoc('Doc A', groups[1]),
      await mkDbGroupDoc('Doc B', groups[1]),
      await mkDbGroupDoc('Doc C', groups[1]),
    ],
  ];

  env.groups = groups;
  env.documents = documents;
  env.members = members;
  env.nonMembers = nonMembers;
  env.admins = admins;
};

beforeAll(setup([
  usersPlugin,
  groupsExamplePlugin,
  groupsPlugin,
]));

afterAll(() => utils.tearDown());

const accesses = (userType, granted = false) => [
  userType,
  [
    ['POST', '/groups/:groupId/documents/', granted ? 201 : 401],
    ['GET', '/groups/:groupId/documents/', granted ? 200 : 401],
    ['GET', '/groups/:groupId/documents/:groupDocumentId', granted ? 200 : 401],
    ['PATCH', '/groups/:groupId/documents/:groupDocumentId', granted ? 200 : 401],
    ['DELETE', '/groups/:groupId/documents/:groupDocumentId', granted ? 204 : 401],
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

const describeUserType = (userType, scopeExpectations) => {
  beforeAll(prepareTests);

  const makeMethods = (...rest) => makePromises(env[userType], ...rest);

  it.each(scopeExpectations)('%s /api%s requests with %s', makeMethods);
};

const describeAccessType = (type, expectations) => {
  describe.each([
    ['forbids', expectations.forbids],
    ['allows', expectations.allows],
  ])('%s', (grant, grantExpectations) => {
    // eslint-disable-next-line jest/valid-describe
    describe.each(grantExpectations)('%s user', describeUserType);
  });
};

describe('group content', () => {
  // eslint-disable-next-line jest/valid-describe
  describe.each(testData)('%s document access', describeAccessType);

  describe('listing', () => {
    beforeAll(prepareTests);

    it('only lists the groups a user has access to', () => {
      const { groups: [group], members = [] } = env;
      const users = [group.admin, ...members];
      console.info('users', ...users);
    });
  });
});
