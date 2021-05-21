import client from './client';

export const login = ({ email, password }) =>
  client.post('/users/signin', { email, password });

export const signUp = ({ nickname, email, password, interest }) =>
  client.post('/users/signup', { nickname, email, password, interest });

export const loginCheck = () => client.get('/login-check');
