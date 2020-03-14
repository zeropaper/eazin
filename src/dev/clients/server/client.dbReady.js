const mongoose = require('mongoose');

module.exports = (authServer) => () => {
  const APIClient = mongoose.model('APIClient');

  authServer.serializeClient((client, done) => done(null, client.name));

  authServer.deserializeClient((name, done) => {
    APIClient.findOne({ name }, done);
  });
};
