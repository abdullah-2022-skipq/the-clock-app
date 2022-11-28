const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export function getCurrentTime() {
  let date = new Date();
  let hour = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let amPm = "AM";

  //setActiveDay(day);

  if (hour >= 12) {
    amPm = "PM";
  } else {
    amPm = "AM";
  }

  // convert 24 to 12
  if (hour == 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  } else {
    hour = hour;
  }

  hour = addZeros(hour);
  mins = addZeros(mins);
  sec = addZeros(sec);

  let timeStr = hour + ":" + mins + ":" + sec+','+amPm;

  return timeStr;
}

export function getCurrentDay(){
    let date = new Date();
    let day = date.getDay();
    let dayInText = weekDays[day];

    return [dayInText,day];
}

function addZeros(val) {
  let updated = "";
  if (val < 10) {
    updated = "0" + val;
  } else {
    updated = val;
  }
  return updated;
}

export default {getCurrentDay,getCurrentTime}
