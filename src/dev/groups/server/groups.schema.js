const mongoose = require('mongoose');

const modelSearchPlugin = require('eazin-core/server/core/search');
const uid = require('eazin-core/server/util/uid');
const mailSend = require('eazin-mailer/server');

const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true },
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
  for (
    let index = findIndex(groupId, user);
    index > -1;
    index = findIndex(groupId, user)
  ) {
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

schema.methods.inviteMember = async function inviteGroupMember(email) {
  const User = mongoose.model('User');

  const existing = await User.findByUsername(email);
  // console.info('existing', existing);

  if (existing) {
    await this.addMembers([existing._id]);
    return;
  }

  // console.info('new user!', email);

  const verifToken = uid(40);

  User.register({
    email,
    verifToken,
    roles: [

    ],
  }, uid(20), (err) => {
    if (err) {
      if (err.name === 'UserExistsError') {
        // eslint-disable-next-line no-param-reassign
        err.message = 'User may already exists';
        // eslint-disable-next-line no-param-reassign
        err.fields = {
          email: 'User may already exists',
        };
      }
      throw err;
    }

    return mailSend({
      token: verifToken,
      template: 'invite',
      to: email,
    });
  });
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

schema.methods.toJSON = function toJSON(opts) {
  const {
    _id: id,
    ...rest
  } = this.toObject(opts);
  return {
    ...rest,
    id,
  };
};


modelSearchPlugin(schema);

module.exports = schema;
