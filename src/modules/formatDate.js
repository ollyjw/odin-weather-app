import { format, parse } from 'date-fns';

export function formatDate(date) {
  const dateParse = parse(date, "yyyy-MM-dd", new Date());
  const formattedDate = format(dateParse, "ccc, LLLL d");
  return formattedDate;
}

export function formatCurrentTime(time) {
  const timeParse = parse(time, "yyyy-MM-dd HH:mm", new Date());
  const formattedTime = format(timeParse, "h:mm aaa");
  return formattedTime;
}

export function formatCurrentDay(date) {
  const dayParse = parse(date, "yyyy-MM-dd HH:mm", new Date());
  const formattedDay = format(dayParse, "cccc");
  return formattedDay;
}