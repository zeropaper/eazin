const mongoose = require('mongoose');

const { Schema } = mongoose;

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
