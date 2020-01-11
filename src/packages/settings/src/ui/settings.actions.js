export const setSetting = (key, value) => ({
  type: 'SET_SETTING',
  payload: { key, value },
});

export const resetSetting = (key) => ({
  type: 'RESET_SETTING',
  payload: { key },
});

export const clearSetting = (key) => ({
  type: 'CLEAR_SETTING',
  payload: { key },
});

export const setSettings = (payload) => ({
  type: 'SET_SETTINGS',
  payload,
});

export const resetSettings = () => ({ type: 'RESET_SETTINGS' });
