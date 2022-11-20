const { getTime, setActiveDay } = require("../js/index");

function getTimeHelper(string) {
  let hours = string.split(":")[0];
  let mins = string.split(":")[1];

  return [hours, mins];
}

function lenChecker(string) {
  return string.length == 2;
}

function hourValidator(hours) {
  let hour = parseInt(hours);
  return hour >= 0 && hour <= 12;
}

let [hours, mins] = getTimeHelper(getTime());

test("returns if the length of hours is 2", () => {
  expect(lenChecker(hours)).toBe(true);
});

test("returns if the length of minutes is 2", () => {
  expect(lenChecker(mins)).toBe(true);
});

test("returns if the values of hours is valid", () => {
  expect(hourValidator(hours)).toBe(true);
});
