import { daysInYear } from "../constant";
import { daysInMonth } from "../constant";

class TimelineDate {
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
  timeInDaysFromStart(): number {
    let years = this.year - this.startTimelineYear;
    let months = this.month - this.startTimelineMonth;
    let days = this.day - this.startTimelineDay;
    return years * daysInYear * daysInMonth + months * daysInMonth + days;
  }

  // изменяет дату начала таймлайна(если пользователь изменил дату, например)
  changeStartTimelineDate(day: number, month: number, year: number) {
    this.startTimelineDay = day;
    this.startTimelineMonth = month;
    this.startTimelineYear = year;
  }

  // изменяет дату(если пользователь изменил дату)
  changeDate(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  //изменяет дату, на вход подаётся строка day.month.year
  changeDateString(str: string) {
    let arr = str.split(".");
    if (arr.length === 1) {
      this.day = Number(arr[0]);
    } else if (arr.length === 2) {
      this.day = Number(arr[0]);
      this.month = Number(arr[1]);
    } else {
      this.day = Number(arr[0]);
      this.month = Number(arr[1]);
      this.year = Number(arr[2]);
    }
  }
  // возващает дату как строку
  returnDateAsString(): string {
    return `${this.day}.${this.month}.${this.year}`;
  }
}

export default TimelineDate;
