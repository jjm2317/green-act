import client from './client';

export const login = ({ username, password }) =>
  client.post('/login', { nickname, username, password, interest });

export const signUp = ({ nickname, username, password, interest }) =>
  client.post('/signup', { nickname, username, password, interest });

export const loginCheck = () => client.get('/login-check');
