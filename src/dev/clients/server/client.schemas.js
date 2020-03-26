const mongoose = require('mongoose');

const uid = require('eazin-core/server/util/uid');

const { Schema } = mongoose;

const tokenSchema = new Schema({
  note: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  client: { type: Schema.Types.ObjectId, ref: 'APIClient', required: true },
  scope: { type: Schema.Types.Mixed, default: () => ({}), required: true },
  token: { type: String, default: () => uid(40) },
  expiresAt: Date,
}, { timestamps: true });

tokenSchema.statics.sanitizeInput = ({
  note,
  expiresAt,
}) => ({
  note,
  expiresAt,
});

tokenSchema.methods.toJSON = function toJSON(opts) {
  const {
    token,
    secret,
    owner,
    __v,

    _id: id,
    ...rest
  } = this.toObject(opts);
  return {
    ...rest,
    id,
    owner: owner._id,
  };
};

const clientSchema = new Schema({
  name: { type: String, required: true, unique: true },
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

// eslint-disable-next-line prefer-arrow-callback
clientSchema.pre('save', function preSaveAPIClient(next) {
  const apiClient = this;
  const User = mongoose.model('User');

  const roles = [
    `get:clients/${apiClient.id}`,
    `patch:clients/${apiClient.id}`,
    `delete:clients/${apiClient.id}`,
    // for token creation
    `post:clients/${apiClient.id}`,
  ];

  if (typeof apiClient.owner.ensureRoles !== 'function') {
    User.findById(apiClient.owner, (err, owner) => {
      if (err) return next(err);
      owner.ensureRoles(roles, next);
    });
  } else {
    apiClient.owner.ensureRoles(roles, next);
  }
});

clientSchema.methods.toJSON = function toJSON(opts) {
  const {
    token,
    secret,
    owner,
    __v,

    _id: id,
    ...rest
  } = this.toObject(opts);
  return {
    id,
    owner: owner._id,
    ...rest,
  };
};

module.exports = [
  {
    modelName: 'APIToken',
    schema: tokenSchema,
  },
  {
    modelName: 'APIClient',
    schema: clientSchema,
  },
];
