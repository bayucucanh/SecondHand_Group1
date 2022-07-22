// eslint-disable-next-line
import axios from '../../utils/axios';

export const getNotif = (accessToken) => axios.get('/notification', {
  headers: {
    access_token: accessToken,
  },
});

export const patchNotif = (accessToken, id) => axios({
  method: 'patch',
  url: `https://market-final-project.herokuapp.com/notification/${id}`,
  headers: {
    accept: 'body',
    access_token: accessToken,
  },
});

export const detailNotif = (id) => axios.get(`/notification/${id}`);
