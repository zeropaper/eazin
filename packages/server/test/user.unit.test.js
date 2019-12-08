const prepare = require('./util');

const plugins = require('../src/plugins');

const email = 'john@eazin.dev';

let post;
let db;
beforeAll(async () => {
  const utils = await prepare({ plugins });
  post = utils.post;
  db = utils.app.db;
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


    // let message;
    // await waitFor(async () => {
    //   const messages = await sneak();
    //   message = messages.find(({ recipient }) => (email === recipient));
    //   return !!message;
    // });


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
});
