/* eslint-disable jest/expect-expect */
const mongoose = require('mongoose');
const prepare = require('../../../../../test/server/prepare-server');

const usersPlugin = require('../../../users/server');
const groupsPlugin = require('../../../../dev/groups/server');

describe('plain setup', () => {
  let testSetup;
  beforeAll(async () => {
    testSetup = await prepare();
  });

  afterAll(() => testSetup.tearDown());

  describe('models', () => {
    it('is empty', () => {
      expect(testSetup).toHaveProperty('app.get');
      expect(mongoose).toHaveProperty('models');
      expect(Object.keys(mongoose.models)).toHaveLength(0);
    });
  });

  describe('routing', () => {
    it('has a /up route', () => testSetup.get('/api/up').expect(200));
  });
});

describe('setup with plugins', () => {
  let testSetup;
  beforeAll(async () => {
    testSetup = await prepare({
      plugins: [
        usersPlugin,
        groupsPlugin,
      ],
    });
  });

  afterAll(() => testSetup.tearDown());

  describe('models', () => {
    it('are created by plugins', () => {
      expect(testSetup).toHaveProperty('app.get');
      expect(mongoose).toHaveProperty('models');
      const { models } = mongoose;
      expect(models).toHaveProperty('User');
      expect(models).toHaveProperty('Group');
    });
  });

  describe('routing', () => {
    it('has a /up route', () => testSetup.get('/api/up').expect(200));
  });
});
