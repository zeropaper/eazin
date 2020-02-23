/* eslint-disable jest/expect-expect */
const totp = require('totp-generator');
const prepare = require('../../../../test/server/prepare-server');

const usersPlugin = require('../../../packages/users/server');
const twoFAPlugin = require('../server');

const email = 'john@eazin.dev';
const password = '1234567890Aa!';

let post;
let tearDown;
let db;
let User;
beforeAll(async () => {
  const utils = await prepare({
    plugins: [
      usersPlugin,
      twoFAPlugin,
    ],
  });
  post = utils.post;
  tearDown = utils.tearDown;
  db = utils.app.get('db');
  User = db.model('User');
  await User.deleteMany({});
});

afterAll(() => tearDown());

describe('Two Factor Authentication', () => {
  let user;

  beforeAll(async () => {
    await post('/api/user/register')
      .send({ email, password })
      .expect(204);

    user = await User.findByUsername(email);

    await post('/api/user/verify')
      .send({
        id: user._id,
        verifToken: user.verifToken,
        firstName: 'first',
        lastName: 'last',
      })
      .expect(200);

    user = await User.findById(user._id);
  });

  it('extends the User schema', async () => {
    expect(user).toHaveProperty('secret');
  });

  describe('setup', () => {
    let secret;

    it('requires a bearer authentication', () => post('/api/2fa/setup').expect(401));

    it('provides a QR code', async () => {
      const { body } = await post('/api/2fa/setup')
        .set('Authorization', `Bearer ${user.token}`)
        .expect(200);
      secret = body.secret;
    });

    it('verifies the QR code', async () => {
      const code = totp(`${secret}AAA`);
      await post('/api/2fa/verify')
        .set('Authorization', `Bearer ${user.token}`)
        .send({ code, secret })
        .expect(204);

      user = await User.findById(user._id);

      expect(user).toHaveProperty('secret', secret);
    });
  });

  describe('authentication', () => {
    it('requires a 2FA code', async () => {
      const previousToken = user.token;
      const res = await post('/api/user/login')
        .send({
          email,
          password: '1234567890Aa!',
        });

      user = await User.findById(user._id);

      expect(res).toHaveProperty('status', 400);
      expect(res).toHaveProperty('body.error.fields.code', '2FA code is required');
      expect(user.token).toBe(previousToken);
    });

    it('logs in with valid code', async () => {
      const previousToken = user.token;
      const res = await post('/api/user/login')
        .send({
          email,
          password: '1234567890Aa!',
          code: totp(`${user.secret}AAA`),
        });

      user = await User.findById(user._id);

      expect(res).toHaveProperty('status', 200);
      expect(res).toHaveProperty('body.email', email);
      expect(res).toHaveProperty('body.token', user.token);
      expect(user.token).not.toBe(previousToken);
    });
  });
});
