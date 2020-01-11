const mongoose = require('mongoose');

const modelSearchPlugin = require('eazin-core/server/core/search');

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

schema.post('save', async (group, next) => {
  if (group.createdAt !== group.updatedAt) return next();

  const User = mongoose.model('User');
  const admin = await User.findById(group.admin).exec();
  admin.roles.push(`get:groups/${group._id}`);
  admin.roles.push(`patch:groups/${group._id}`);
  admin.roles.push(`delete:groups/${group._id}`);
  admin.roles.push(`invite:groups/${group._id}`);
  admin.roles.push(`revoke:groups/${group._id}`);
  await admin.save();

  next();
});

const findIndex = (groupId, user) => user.roles
  .findIndex((role) => role
    .includes(`groups/${groupId}`));

const removeGroupRoles = (groupId) => (user) => {
  for (let index = findIndex(groupId, user); index > -1; index = findIndex(groupId, user)) {
    user.roles.splice(index, 1);
  }
  return user.save();
};

schema.post('remove', async (group, next) => {
  const User = mongoose.model('User');

  const admin = await User.findById(group.admin).exec();
  const members = await User.find({ _id: group.members }).exec();
  await Promise.all(members.map(removeGroupRoles(group._id)));
  await removeGroupRoles(group._id)(admin);
  next();
});

schema.methods.addMembers = async function addGroupMembers(userIds) {
  const User = mongoose.model('User');

  const newRoles = [`get:groups/${this._id}`];
  await Promise.all(userIds.map(async (userId) => {
    const user = await User.findById(userId).exec();
    user.roles.push(...newRoles);
    return user.save();
  }));

  this.members.push(...userIds);
  await this.save();

  return this.members;
};

schema.methods.removeMembers = async function removeGroupMembers(userIds) {
  const User = mongoose.model('User');

  this.members.push(...userIds);
  await this.save();

  const members = await User.find({ _id: userIds }).exec();
  await Promise.all(members.map(removeGroupRoles(this._id)));

  return this.members;
};

schema.statics.sanitizeInput = ({
  name,
  type,
  approvalType,
}) => ({
  name,
  type,
  approvalType,
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

modelSearchPlugin(schema);

module.exports = schema;