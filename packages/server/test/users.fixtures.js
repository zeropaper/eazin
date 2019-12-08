// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

function makeUsers(db, count = 100) {
  const data = [];

  for (let c = 0; c < count; c += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = `${firstName}.${lastName}@${faker.internet.email().split('@').pop()}`
      .toLowerCase();

    data.push({
      firstName,
      lastName,
      email,
      isVerified: Math.random() < 0.65,
    });
  }

  return db.model('User').insertMany(data);
}

module.exports = makeUsers;
