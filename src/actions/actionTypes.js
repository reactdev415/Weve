export const ROOT_ACTION_TYPES = {
  ROOT_CHANGED: 'ROOT_CHANGED',
};

export const AUTH_ACTION_TYPES = {
  LOGIN_USER: 'LOGIN_USER',
  SIGNOUT_USER: 'SIGNOUT_USER',
  LOGIN_USER_PENDING: 'LOGIN_USER_PENDING',
  LOGIN_USER_FULFILLED: 'LOGIN_USER_FULFILLED',
  LOGIN_USER_REJECTED: 'LOGIN_USER_REJECTED',

  REGISTER_USER: 'REGISTER_USER',
  REGISTER_USER_PENDING: 'REGISTER_USER_PENDING',
  REGISTER_USER_FULFILLED: 'REGISTER_USER_FULFILLED',
  REGISTER_USER_REJECTED: 'REGISTER_USER_REJECTED',

  LOGIN_PROVIDER: 'LOGIN_PROVIDER',
  LOGIN_PROVIDER_PENDING: 'LOGIN_PROVIDER_PENDING',
  LOGIN_PROVIDER_FULFILLED: 'LOGIN_PROVIDER_FULFILLED',
  LOGIN_PROVIDER_REJECTED: 'LOGIN_PROVIDER_REJECTED',

  REGISTER_PROVIDER: 'REGISTER_PROVIDER',
  REGISTER_PROVIDER_PENDING: 'REGISTER_PROVIDER_PENDING',
  REGISTER_PROVIDER_FULFILLED: 'REGISTER_PROVIDER_FULFILLED',
  REGISTER_PROVIDER_REJECTED: 'REGISTER_PROVIDER_REJECTED',
};

export const USER_ACTION_TYPES = {
  FETCH_USER_PROFILE: 'FETCH_USER_PROFILE',
  FETCH_USER_PROFILE_PENDING: 'FETCH_USER_PROFILE_PENDING',
  FETCH_USER_PROFILE_FULFILLED: 'FETCH_USER_PROFILE_FULFILLED',
  FETCH_USER_PROFILE_REJECTED: 'FETCH_USER_PROFILE_REJECTED',

  UPDATE_USER_PROFILE: 'UPDATE_USER_PROFILE',
  UPDATE_USER_PROFILE_FULFILLED: 'UPDATE_USER_PROFILE_FULFILLED',
  UPDATE_USER_PROFILE_PENDING: 'UPDATE_USER_PROFILE_PENDING',
  UPDATE_USER_PROFILE_REJECTED: 'UPDATE_USER_PROFILE_REJECTED',

  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_PASSWORD_PENDING: 'CHANGE_PASSWORD_PENDING',
  CHANGE_PASSWORD_FULFILLED: 'CHANGE_PASSWORD_FULFILLED',
  CHANGE_PASSWORD_REJECTED: 'CHANGE_PASSWORD_REJECTED',
};

export const CHAT_ACTION_TYPES = {
  FETCH_CHAT_ROOMS: 'FETCH_CHAT_ROOMS',
  FETCH_CHAT_ROOMS_PENDING: 'FETCH_CHAT_ROOMS_PENDING',
  FETCH_CHAT_ROOMS_FULFILLED: 'FETCH_CHAT_ROOMS_FULFILLED',
  FETCH_CHAT_ROOMS_REJECTED: 'FETCH_CHAT_ROOMS_REJECTED',
};

export const DISPLAY_MODE_CHANGED = 'DISPLAY_MODE_CHANGED';
export const SHORT_LIST_CHANGED = 'SHORT_LIST_CHANGED';

export const COUNTRY_CODE_CHANGED = 'COUNTRY_CODE_CHANGED';
