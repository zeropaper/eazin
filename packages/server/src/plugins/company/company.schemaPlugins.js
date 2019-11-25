// eslint-disable-next-line no-unused-vars
const addCompanyRef = (schema, options = {}) => {
  schema.add({
    companies: [{ type: 'ObjectId', ref: 'Company' }],
  });
};

module.exports = [
  {
    modelName: 'User',
    plugin: addCompanyRef,
  },
];
