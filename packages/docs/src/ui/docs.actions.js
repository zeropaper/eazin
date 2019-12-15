// eslint-disable-next-line import/prefer-default-export
export const getDocs = (docs) => ({
  type: 'UPSERT_DOCS',
  payload: docs,
});
