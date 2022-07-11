import {monthShort} from '../../constant';

export const formatDate = params => {
  const dates = new Date(params);
  const time = new Date(params).toLocaleTimeString('en', {
    timeStyle: 'short',
    hour12: false,
    timeZone: 'UTC',
  });
  const year = dates.getFullYear();
  const month = dates.getMonth();
  const date = dates.getDate();
  const total = `${date} ${monthShort[month]} ${year} ${time}`;
  return total;
};
