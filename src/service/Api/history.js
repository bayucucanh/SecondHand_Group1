// eslint-disable-next-line
import axios from '../../utils/axios';

export const getHistory = (accessToken) => axios.get('/history', {
  headers: {
    access_token: accessToken,
  },
});

export const detailHistory = (accessToken, id) => axios.get(`/history/${id}`, {
  headers: {
    access_token: accessToken,
  },
});
