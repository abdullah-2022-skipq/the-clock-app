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

// console.log("main call : "+getTime())
// console.log("main call  get day: "+setActiveDay(0))

/*
const themeSwitch = document.getElementById("theme-switch");
const outerDiv = document.getElementById("clockBG");
const innerDiv = document.getElementById("display");

localStorage.setItem("themeMode", "light");

themeSwitch.addEventListener("click", (e) => {
  let theme = localStorage.getItem("themeMode");

  if (theme == "light" || theme == "") {
    outerDiv.classList.add("dark-clock");
    timeElement.classList.add("dark-text");
    innerDiv.classList.add("dark-display");
    weekDaysHolder.classList.add("dark-text");
    ap.classList.add("dark-text");

    localStorage.setItem("themeMode", "dark");
  } else {
    outerDiv.classList.remove("dark-clock");
    timeElement.classList.remove("dark-text");
    innerDiv.classList.remove("dark-display");
    weekDaysHolder.classList.remove("dark-text");
    ap.classList.remove("dark-text");

    document.documentElement.removeAttribute("data-themeMode");
    localStorage.setItem("themeMode", "light");
  }
});
*/
export default {getCurrentDay,getCurrentTime}
