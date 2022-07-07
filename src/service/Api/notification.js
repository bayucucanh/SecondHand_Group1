// eslint-disable-next-line
import axios from '../../utils/axios';

export const getNotif = (accessToken) => axios.get('/notification', {
  headers: {
    access_token: accessToken,
  },
});

export const patchNotif = (accessToken, id) => axios.patch(`/notification/${id}`, {
  headers: {
    access_token: accessToken,
  },
});

export const detailNotif = (id) => axios.get(`/notification${id}`);
