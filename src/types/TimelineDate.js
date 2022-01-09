"use strict";
exports.__esModule = true;
var constant_1 = require("../constant");
var constant_2 = require("../constant");
var TimelineDate = /** @class */ (function () {
    function TimelineDate(day, month, year, startTimelineDay, startTimelineMonth, startTimelineYear) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.startTimelineDay = startTimelineDay;
        this.startTimelineMonth = startTimelineMonth;
        this.startTimelineYear = startTimelineYear;
    }
    // возвращает время в днях с начала timeline
    TimelineDate.prototype.timeInDaysFromStart = function () {
        var years = this.year - this.startTimelineYear;
        var months = this.month - this.startTimelineMonth;
        var days = this.day - this.startTimelineDay;
        return years * constant_1.daysInYear * constant_2.daysInMonth + months * constant_2.daysInMonth + days;
    };
    // изменяет дату начала таймлайна(если пользователь изменил дату, например)
    TimelineDate.prototype.changeStartTimelineDate = function (day, month, year) {
        this.startTimelineDay = day;
        this.startTimelineMonth = month;
        this.startTimelineYear = year;
    };
    // изменяет дату(если пользователь изменил дату)
    TimelineDate.prototype.changeDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    };
    //изменяет дату, на вход подаётся строка day.month.year
    TimelineDate.prototype.changeDateString = function (str) {
        var arr = str.split(".");
        if (arr.length == 1) {
            this.day = Number(arr[0]);
        }
        else if (arr.length == 2) {
            this.day = Number(arr[0]);
            this.month = Number(arr[1]);
        }
        else {
            this.day = Number(arr[0]);
            this.month = Number(arr[1]);
            this.year = Number(arr[2]);
        }
    };
    return TimelineDate;
}());
exports["default"] = TimelineDate;
