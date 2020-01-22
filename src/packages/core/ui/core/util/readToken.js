export const storeName = 'eazin-1';
export default () => {
  try {
    return JSON.parse(localStorage[storeName] || '{}').userToken;
  } catch (e) {
    console.warn('reading ', e);
  }
};
