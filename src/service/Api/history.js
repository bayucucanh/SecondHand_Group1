import axios from '../../utils/axios';

export const getHistory = async () => await axios.get('/history');
export const detailHistory = async (id) => await axios.get(`/history${id}`);