const check = require('../../server/user.auth.checkRoles');

const noop = () => {};

const withRoles = (req) => (...checked) => new Promise((res, rej) => check(checked)(req, {
  status: noop,
}, (err) => (err ? rej(err) : res())));

describe('access check', () => {
  describe('simple role', () => {
    const req = {
      user: {
        roles: ['role1', 'role2'],
        isVerified: true,
      },
    };

    it('needs each roles passed', async () => {
      await expect(withRoles(req)('role1'))
        .resolves.toBeFalsy();
      await expect(withRoles(req)('role1', 'role2'))
        .resolves.toBeFalsy();
      await expect(withRoles(req)('role3'))
        .rejects.toThrow();
      await expect(withRoles(req)('role1', 'role3'))
        .rejects.toThrow();
    });
  });

  describe('entity role', () => {
    const req = {
      user: {
        roles: ['get:something/justanid'],
        isVerified: true,
      },
      params: {
        somethingId: 'justanid',
      },
      loadedParams: {
        somethingId: { _id: 'justanid' },
      },
    };

    it('checks', async () => {
      await expect(withRoles(req)('get:something/:somethingId'))
        .resolves.toBeFalsy();
      await expect(withRoles({
        ...req,
        user: {
          ...req.user,
          roles: ['get:something/otherid'],
        },
      })('get:something/:somethingId'))
        .rejects.toThrow();
    });
  });

  describe('for admins', () => {
    const req = {
      user: {
        roles: [],
        isAdmin: true,
      },
    };

    it('passes thru', async () => {
      await expect(withRoles(req)('role1'))
        .resolves.toBeFalsy();
      await expect(withRoles(req)('role1', 'role2'))
        .resolves.toBeFalsy();
      await expect(withRoles(req)('role3'))
        .resolves.toBeFalsy();
      await expect(withRoles(req)('role1', 'role3'))
        .resolves.toBeFalsy();
    });
  });
});
