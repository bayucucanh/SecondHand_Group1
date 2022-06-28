// eslint-disable-next-line
import axios from '../../utils/axios';

export const getNotif = () => axios.get('/notification');
export const detailNotif = (id) => axios.get(`/notification${id}`);
