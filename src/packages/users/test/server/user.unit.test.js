const mongoose = require('mongoose');

const prepare = require('../../../../../test/server/prepare-server');

const usersPlugin = require('../../server');

const email = 'john@eazin.dev';

let get;
let post;
let patch;
let tearDown;
let db;
let User;
let sneakMessage;
beforeAll(async () => {
  const utils = await prepare({
    plugins: [
      usersPlugin,
    ],
  });
  sneakMessage = utils.sneakMessage;
  get = utils.get;
  post = utils.post;
  patch = utils.patch;
  tearDown = utils.tearDown;
  db = mongoose;
  User = db.model('User');
  await User.deleteMany({});
});

afterAll(() => tearDown());

describe('user account', () => {
  let user;

  it('can register', async () => {
    let res = await post('/api/user/register')
      .send({ email, password: '1234567890Aa!' })
      .expect(204);

    user = await User.findByUsername(email);

    expect(user).toHaveProperty('verifToken');
    expect(user).toHaveProperty('isVerified', false);

    const verifMail = await sneakMessage(email);
    expect(verifMail.text).toContain(user.verifToken);

    res = await post('/api/user/register')
      .send({ email, password: 'Aa!1234567890' })
      .expect(400);

    expect(res.body).toHaveProperty('error.fields.email');
  });

  it('can verify', async () => {
    let res = await post('/api/user/verify')
      .send({
        id: user._id,
        verifToken: user.verifToken,
      })
      .expect(400);

    expect(res.body).toHaveProperty('error.fields.firstName', 'Cannot be empty');
    expect(res.body).toHaveProperty('error.fields.lastName', 'Cannot be empty');

    res = await post('/api/user/verify')
      .send({
        id: user._id,
        verifToken: user.verifToken,
        firstName: 'first',
        lastName: 'last',
      })
      .expect(200);

    expect(res.body).toHaveProperty('token');

    user = await User.findById(user._id);

    expect(user).toHaveProperty('isVerified', true);
  });

  it('logs in', async () => {
    const previousToken = user.token;
    const res = await post('/api/user/login')
      .send({
        email,
        password: '1234567890Aa!',
      });

    user = await User.findById(user._id);

    expect(res).toHaveProperty('status', 200);
    expect(res).toHaveProperty('body.token');
    expect(res).toHaveProperty('body.email', email);
    expect(user.token).not.toBe(previousToken);
    expect(res.body.token).not.toBe(previousToken);
  });

  it('logs out', async () => {
    const previousToken = user.token;
    const res = await get('/api/user/logout')
      .set('Authorization', `Bearer ${user.token}`);

    user = await User.findById(user._id);
    expect(res).toHaveProperty('status', 204);
    expect(user.token).not.toBe(previousToken);
  });

  it('can change password', async () => {
    await post('/api/user/login')
      .send({
        email,
        password: '1234567890Aa!',
      });

    user = await User.findById(user._id);

    await patch('/api/user/password')
      .expect(401);

    let res = await patch('/api/user/password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        current: '1234567890Aa!',
      });
    expect(res.status).toBe(400);

    res = await patch('/api/user/password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        password: 'Aa!1234567890',
      });
    expect(res.status).toBe(400);

    res = await patch('/api/user/password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        current: '1234567890Aa!',
        password: 'Aa!1234567890',
      });
    expect(res.status).toBe(204);

    res = await patch('/api/user/password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        current: '1234567890Aa!',
        password: 'Aa!1234567890',
      });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error.fields.current');
  });

  it('can change email', async () => {
    let res = await patch('/api/user/email')
      .set('Authorization', `Bearer ${user.token}`)
      .send({ email: 'new+address@eazin.test' });
    expect(res.status).toBe(204);

    user = await User.findByUsername(email);
    expect(user.email).toBe(email);
    expect(user.emailToVerify).toBe('new+address@eazin.test');

    const verifMail = await sneakMessage(user.emailToVerify);
    expect(verifMail.text).toContain(user.verifToken);

    res = await patch('/api/user/email')
      .set('Authorization', `Bearer ${user.token}`)
      .send({ token: user.verifToken });
    expect(res.status).toBe(204);

    user = await User.findById(user._id);
    expect(user.emailToVerify).toBe(null);
    expect(user.email).toBe('new+address@eazin.test');
  });
});
