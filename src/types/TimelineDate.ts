import { daysInYear } from "../constant";
import { daysInMonth } from "../constant";

interface ITimelineDate{
  day: number,
  month: number,
  year: number,
  startTimelineDay: number,
  startTimelineMonth: number,
  startTimelineYear: number
}

class TimelineDate implements ITimelineDate {
  day;
  month;
  year;
  startTimelineDay;
  startTimelineMonth;
  startTimelineYear;

  constructor(
    day: number,
    month: number,
    year: number,
    startTimelineDay: number,
    startTimelineMonth: number,
    startTimelineYear: number
  ) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.startTimelineDay = startTimelineDay;
    this.startTimelineMonth = startTimelineMonth;
    this.startTimelineYear = startTimelineYear;
  }

  // возвращает время в днях с начала timeline
  static timeInDaysFromStart(td:TimelineDate | ITimelineDate,): number {
    let years = td.year - td.startTimelineYear;
    let months = td.month - td.startTimelineMonth;
    let days = td.day - td.startTimelineDay;
    return years * daysInYear * daysInMonth + months * daysInMonth + days;
  }

  // изменяет дату начала таймлайна(если пользователь изменил дату, например)
  static changeStartTimelineDate(td:TimelineDate | ITimelineDate,day: number, month: number, year: number) {
    td.startTimelineDay = day;
    td.startTimelineMonth = month;
    td.startTimelineYear = year;
  }

  // изменяет дату(если пользователь изменил дату)
  static changeDate(td:TimelineDate | ITimelineDate,day: number, month: number, year: number) {
    td.day = day;
    td.month = month;
    td.year = year;
  }

  //изменяет дату, на вход подаётся строка day.month.year
  static changeDateString(td:TimelineDate | ITimelineDate,str: string) {
    let arr = str.split(".");
    if (arr.length === 1) {
      td.day = Number(arr[0]);
    } else if (arr.length === 2) {
      td.day = Number(arr[0]);
      td.month = Number(arr[1]);
    } else {
      td.day = Number(arr[0]);
      td.month = Number(arr[1]);
      td.year = Number(arr[2]);
    }
  }
  // возващает дату как строку
  static returnDateAsString(td:TimelineDate | ITimelineDate): string {
    return `${td.day}.${td.month}.${td.year}`;
  }
}

export default TimelineDate;
