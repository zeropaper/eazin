const prepare = require('./util');

const plugins = require('../src/plugins');

let utils;
beforeAll(async () => {
  utils = await prepare({ plugins });
});

describe('user', () => {
  it('can register', () => {
    const { request } = utils;
    expect(true).toBeTruthy();
    return request()
      .post('/api/user/register')
      .send({ email: 'john@eazin.dev', password: '1234567890Aa!' })
      // .expect((res) => console.info(res.body))
      .expect(201)
      .then((res) => {
        expect(res.body).toHaveProperty('token');
      });
  });
});
