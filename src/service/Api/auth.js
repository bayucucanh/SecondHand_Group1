import axios from '../../utils/axios';

export const login = async (email, password) => await axios.post('/auth/login', { email: email, password: password });

export const register = async (data) => await axios.post('/auth/register', data, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});

export const getProfile = async (payload) => await axios.get('/auth/user', {
  headers: {
    access_token: payload,
  },
});

export const updateProfile = async (accessToken, payload) => await axios.put('/auth/user', payload, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    access_token: accessToken,
  },
});