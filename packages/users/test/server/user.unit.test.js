
const prepare = require('../../../../test/server/prepare-server');

const usersPlugin = require('../../src/server');

const email = 'john@eazin.dev';

let post;
let db;
beforeAll(async () => {
  const utils = await prepare({
    plugins: [
      usersPlugin,
    ],
  });
  post = utils.post;
  db = utils.app.db;
  await db.model('User').deleteMany({});
});

afterAll(async () => {
  db.connection.close();
});

describe('user', () => {
  let user;

  it('can register', async () => {
    let res = await post('/api/user/register')
      .send({ email, password: '1234567890Aa!' })
      .expect(204);

    user = await db.model('User').findByUsername(email);

    expect(user).toHaveProperty('verifToken');
    expect(user).toHaveProperty('isVerified', false);

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

    user = await db.model('User').findById(user._id);

    expect(user).toHaveProperty('isVerified', true);
  });

  it('can change password', async () => {
    await post('/api/user/password')
      .expect(401);

    let res = await post('/api/user/password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        current: '1234567890Aa!',
      });
    expect(res.status).toBe(400);

    res = await post('/api/user/password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        password: 'Aa!1234567890',
      });
    expect(res.status).toBe(400);

    res = await post('/api/user/password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        current: '1234567890Aa!',
        password: 'Aa!1234567890',
      });
    expect(res.status).toBe(204);

    res = await post('/api/user/password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        current: '1234567890Aa!',
        password: 'Aa!1234567890',
      });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error.fields.current');
  });

  it('can change email', async () => {
    let res = await post('/api/user/email')
      .set('Authorization', `Bearer ${user.token}`)
      .send({ email: 'new+address@eazin.test' });
    expect(res.status).toBe(204);

    user = await db.model('User').findByUsername(email);
    expect(user.email).toBe(email);
    expect(user.emailToVerify).toBe('new+address@eazin.test');

    res = await post('/api/user/email')
      .set('Authorization', `Bearer ${user.token}`)
      .send({ token: user.verifToken });
    expect(res.status).toBe(204);

    user = await db.model('User').findById(user._id);
    expect(user.emailToVerify).toBe(null);
    expect(user.email).toBe('new+address@eazin.test');
  });
});