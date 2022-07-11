import { monthShort } from '../../constant';

export const formatDate = (params) => {
  if (params) {
    const dates = new Date(params);
    const time = new Date(params).toLocaleTimeString('en', {
      timeStyle: 'short',
      hour12: false,
      timeZone: 'UTC',
    });
    const year = dates.getFullYear();
    const month = dates.getMonth();
    const date = dates.getDate();
    const total = `${date} ${monthShort[month]} ${year}, ${time}`;
    return total;
  }
  return 'Tidak ada tanggal';
};

export const sortByDate = (a, b) => {
  const dateA = new Date(a.date).getTime();
  const dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1;
};
