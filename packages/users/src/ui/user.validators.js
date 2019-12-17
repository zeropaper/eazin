/* eslint-disable import/no-extraneous-dependencies */
import isEmail from 'validator/es/lib/isEmail';

export const validMail = (val = '') => {
  if (!isEmail(val)) return 'Not a valid email address';
  return undefined;
};

export const validPassword = (val = '') => {
  if (val.length < 13) return 'Must be at least 13 charachters long';
  if (!val.match(/[a-z]+/)) return 'Must contain lowercase characters';
  if (!val.match(/[A-Z]+/)) return 'Must contain uppercase characters';
  if (!val.match(/[0-9]+/)) return 'Must contain numbers';
  if (!val.match(/[^0-9a-zA-Z]+/)) return 'Must contain special charachters';
  return undefined;
};
