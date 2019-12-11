const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  approvalType: {
    type: String,
    required: true,
    enum: ['open', 'admin', 'members'],
  },
  members: [{ type: 'ObjectId', ref: 'User' }],
  admin: { type: 'ObjectId', ref: 'User', required: true },
}, { timestamps: true });

schema.statics.sanitizeInput = ({
  name,
  type,
  approvalType,
  members,
  admin,
}) => ({
  name,
  type,
  approvalType,
  members,
  admin,
});

schema.statics.sanitizeOutput = ({
  name,
  type,
  approvalType,
  members,
  admin,
  _id: id,
  createdAt,
  updatedAt,
} = {}) => ({
  name,
  type,
  approvalType,
  members,
  admin,
  id,
  createdAt,
  updatedAt,
});

module.exports = schema;
