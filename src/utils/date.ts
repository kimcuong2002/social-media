import moment from 'moment';
import dayjs from 'dayjs';

/**
 *
 * @param date
 * @returns string
 */
export const converDateToString = (date: Date): string => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();

  return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
};

export const durationTime = (date?: Date): string => {
  if (date) {
    const fromDate = dayjs(new Date(date));
    const toDate = dayjs(new Date());

    const yearDiff = toDate.diff(fromDate, 'year');
    const monthDiff = toDate.diff(fromDate, 'month');
    const dayDiff = toDate.diff(fromDate, 'day');
    const hourDiff = toDate.diff(fromDate, 'hour');
    const minuteDiff = toDate.diff(fromDate, 'minute');
    const secondDiff = toDate.diff(fromDate, 'second');

    if (yearDiff > 0) {
      return `${yearDiff} năm truoc`;
    }

    if (monthDiff > 0) {
      return `${monthDiff} tháng truoc`;
    }

    if (dayDiff > 0) {
      return `${dayDiff} ngày truoc`;
    }

    if (hourDiff > 0) {
      return `${hourDiff} giờ truoc`;
    }

    if (minuteDiff > 0) {
      return `${minuteDiff} phut`;
    }
    if (secondDiff < 60) {
      return 'Vua xong';
    }
  }
  return '';
};
