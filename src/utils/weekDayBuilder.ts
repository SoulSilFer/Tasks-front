import { Value } from 'react-calendar/src/shared/types.js';

export const weekDayBuilder = (date: Value): string[][] => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const buildWeekDay = (d: Date) => {
    const weekDayTitle = daysOfWeek[d.getDay()];
    const weekDayNumber = d.toLocaleDateString();
    return [weekDayTitle, weekDayNumber];
  };

  if (Array.isArray(date)) {
    return date.map((d) => buildWeekDay(new Date(d as Date)));
  } else {
    return [buildWeekDay(new Date(date as Date))];
  }
};
