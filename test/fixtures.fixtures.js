const faker = require('faker');

module.exports = {
  User: [
    {
      ids: ['000000000000000000000000'],
      data: {
        token: 'admin-api-token',
        firstName: 'Admin',
        lastName: 'Istrator',
        email: 'test+admin@eazin.dev',
        isVerified: true,
        isAdmin: true,
      },
    },
    {
      ids: [
        '000000000000000000000001',
        '000000000000000000000002',
      ],
      data: () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        return {
          token: firstName + lastName,
          firstName,
          lastName,
          email: `test+${firstName}.${lastName}@eazin.dev`.toLowerCase(),
          isVerified: true,
        };
      },
    },
    {
      ids: [
        '000000000000000000000003',
        '000000000000000000000004',
      ],
      data: () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        return {
          token: firstName + lastName,
          firstName,
          lastName,
          organisations: ['000000000000000000000006'],
          email: `test+${firstName}.${lastName}@eazin.dev`.toLowerCase(),
          isVerified: true,
        };
      },
    },
  ],
  Organisation: [
    {

      ids: ['000000000000000000000006'],
      data: {
        name: 'ACME',
        admin: '000000000000000000000002',
      },
    },
  ],
  Group: [
    {
      ids: ['000000000000000000000007'],
      data: {
        name: 'Homies',
        admin: '000000000000000000000001',
        members: ['000000000000000000000003'],
        type: 'friends',
        approvalType: 'members',
      },
    },
    {
      ids: ['000000000000000000000008'],
      data: {
        name: 'Acquaintances',
        admin: '000000000000000000000000',
        members: ['000000000000000000000001', '000000000000000000000003'],
        type: 'friends',
        approvalType: 'admin',
      },
    },
  ],
};
