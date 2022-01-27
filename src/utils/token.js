import { decode } from 'jsonwebtoken';

const setToken = (token) => localStorage.setItem('token', token);
const getToken = () => localStorage.getItem('token');
const getUserId = (token) => decode(token).aud;
const getUsername = (token) => decode(token).username;
const getExpiredTime = (token) => decode(token).exp;
const clearToken = () => localStorage.removeItem('token');
const getCurrentUserId = () => getUserId(getToken());

export {
  setToken,
  getToken,
  getUserId,
  getUsername,
  getExpiredTime,
  clearToken,
  getCurrentUserId,
};
