// eslint-disable-next-line
import axios from '../../utils/axios';

export const getHistory = () => axios.get('/history');
export const detailHistory = (id) => axios.get(`/history${id}`);
