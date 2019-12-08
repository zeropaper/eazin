// eslint-disable-next-line no-unused-vars
const addOrganisationRef = (schema, options = {}) => {
  schema.add({
    organisations: [{ type: 'ObjectId', ref: 'Organisation' }],
  });
};

module.exports = [
  {
    modelName: 'User',
    plugin: addOrganisationRef,
  },
];
