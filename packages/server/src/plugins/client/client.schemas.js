const mongoose = require('mongoose');

const { Schema } = mongoose;


// const authServer = oauth2orize.createServer();

// authServer.serializeClient(function(client, done) {
//   return done(null, client.name);
// });

// authServer.deserializeClient(function(name, done) {
//   APIClient.findOne({ name }, done);
// });

// authServer.grant(oauth2orize.grant.token(function (client, user, ares, done) {
//   const token = uid(256);
//   const tokenHash = crypto.createHash('sha1').update(token).digest('hex');
//   const expirationDate = new Date(new Date().getTime() + (60 * 60 * 24 * 1000));

//   AccessToken.create({
//     user,
//     client,
//     scope: '*',
//     token: tokenHash,
//     expirationDate: expirationDate,
//   }, function (err) {
//     if (err) return done(err);

//     return done(null, token, {
//       expires_in: expirationDate.toISOString()
//     });
//   });
// }));

const tokenSchema = new Schema({
  note: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  client: { type: Schema.Types.ObjectId, ref: 'APIClient', required: true },
  scope: String,
  token: String,
  expirationDate: Date,
}, { timestamps: true });

tokenSchema.statics.sanitizeInput = () => ({});

tokenSchema.statics.sanitizeOutput = ({
  _id: id,
  note,
  scope,
  createdAt,
  updatedAt,
  expirationDate,
} = {}) => ({
  id,
  note,
  scope,
  createdAt,
  updatedAt,
  expirationDate,
});

const clientSchema = new Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  token: String,
  secret: String,
  redirectURI: { type: String, required: true },
}, { timestamps: true });

clientSchema.statics.sanitizeInput = ({
  name,
  redirectURI,
  owner,
  admins,
}) => ({
  name,
  redirectURI,
  owner,
  admins,
});

clientSchema.statics.sanitizeOutput = ({
  name,
  redirectURI,
  _id: id,
  createdAt,
  updatedAt,
} = {}) => ({
  name,
  redirectURI,
  id,
  createdAt,
  updatedAt,
});

module.exports = [
  {
    modelName: 'AccessToken',
    schema: tokenSchema,
  },
  {
    modelName: 'APIClient',
    schema: clientSchema,
  },
];
