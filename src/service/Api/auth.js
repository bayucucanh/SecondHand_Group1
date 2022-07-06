// eslint-disable-next-line
import axios from '../../utils/axios';

export const login = (email, password) => axios.post('/auth/login', { email, password });

export const register = (data) => axios.post('/auth/register', data, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});

export const getProfile = (payload) => axios.get('/auth/user', {
  headers: {
    access_token: payload,
  },
});

export const updateProfile = (accessToken, payload) => axios.put('/auth/user', payload, {
  headers: {
    'Content-Type': 'multipart/form-data',
    access_token: accessToken,
  },
});

export const changePassword = (accessToken, payload) => axios.put('/auth/change-password', payload, {
  headers: {
    'Content-Type': 'multipart/form-data',
    access_token: accessToken,
  },
});
