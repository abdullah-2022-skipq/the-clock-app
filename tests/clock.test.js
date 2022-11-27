import { getCurrentTime, getCurrentDay } from "../js/dateTime.js";
const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function getTimeHelper(string) {
  let hours = string.split(":")[0];
  let mins = string.split(":")[1];

  return [hours, mins];
}
function getDateHelper() {
  let date = new Date();
  let day = date.getDay();
  let dayInText = weekDays[day];

  return dayInText;
}

function lenChecker(string) {
  return string.length == 2;
}

function hourValidator(hours) {
  let hour = parseInt(hours);
  return hour >= 0 && hour <= 12;
}

let [hours, mins] = getTimeHelper(getCurrentTime());
let day = getDateHelper();

test("returns if the length of hours is 2", () => {
  expect(lenChecker(hours)).toBe(true);
});

test("returns if the length of minutes is 2", () => {
  expect(lenChecker(mins)).toBe(true);
});

test("returns if the values of hours is valid", () => {
  expect(hourValidator(hours)).toBe(true);
});

test("returns True if correct day is returned", () => {
  expect(getCurrentDay()).toBe(day);
});

