import { buildActions } from 'eazin-core/ui';

export const {
  removeOneUser,
  upsertOneUser,
  removeManyUsers,
  upsertManyUsers,
  clearUsers,
} = buildActions({
  singular: 'user',
  endpoint: '/api/users',
});
