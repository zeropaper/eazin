const prepare = require('./util');

const plugins = require('../src/plugins');

let utils;
beforeAll(async () => {
  utils = await prepare({ plugins });
});

describe('user', () => {
  let user;

  it('can register', async () => {
    const { request, app: { db } } = utils;

    await request()
      .post('/api/user/register')
      .send({ email: 'john@eazin.dev', password: '1234567890Aa!' })
      .expect(201)
      .then(async (res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).not.toHaveProperty('token');
        expect(res.body).not.toHaveProperty('verifToken');

        user = await db.model('User').findById(res.body.id);

        expect(user).toHaveProperty('verifToken');
        expect(user).toHaveProperty('isVerified', false);
      });

    await request()
      .post('/api/user/register')
      .send({ email: 'john@eazin.dev', password: 'Aa!1234567890' })
      .expect(400)
      .then((res) => {
        expect(res.body).toHaveProperty('error.fields.email');
      });
  });

  it('can verify', async () => {
    const { request, app: { db } } = utils;

    await request()
      .post('/api/user/verify')
      .send({
        id: user.id,
        verifToken: user.verifToken,
      })
      .expect(400)
      .then((res) => {
        expect(res.body).toHaveProperty('error.fields.firstName', 'Cannot be empty');
        expect(res.body).toHaveProperty('error.fields.lastName', 'Cannot be empty');
      });

    return request()
      .post('/api/user/verify')
      .send({
        id: user.id,
        verifToken: user.verifToken,
        firstName: 'first',
        lastName: 'last',
      })
      .expect(200)
      .then(async (res) => {
        expect(res.body).toHaveProperty('token');

        user = await db.model('User').findById(user.id);

        expect(user).toHaveProperty('isVerified', true);
      });
  });
});
