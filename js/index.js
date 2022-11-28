import { getCurrentTime, getCurrentDay } from "./dateTime.js";
import { getQuote } from "./quotes.js";
import { fetchWeather } from "./weather.js";

// Time
const timeElement = document.getElementById("time");
const weekDaysHolder = document.getElementById("weekDays");

// Quotes
let quoteInfo = document.getElementsByClassName("quote");
let authorOfQuote = document.getElementById("author_name");

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const ap = document.getElementById("ap");

function getTime() {
  setActiveDay(getCurrentDay());
  let currentTime = getCurrentTime();
  let timeArr = currentTime.split(",");
  currentTime = timeArr[0];
  let amPm = timeArr[1];

  timeElement.innerText = currentTime;
  ap.innerText = amPm;

  setTimeout(getTime, 1000);
}

function updateQuote() {
  let quoteR = getQuote();
  quoteInfo[0].innerText = quoteR.quote;
  authorOfQuote.title = quoteR.author;
  authorOfQuote.innerText = quoteR.author;

  setTimeout(updateQuote, 30000);
}

function setActiveDay(dayArr) {
  let day = dayArr[1];
  weekDaysHolder.innerHTML = "";

  for (let index in weekDays) {
    let daySpan = document.createElement("span");
    daySpan.innerText = weekDays[index] + " ";
    daySpan.className = "";

    if (day == index) {
      daySpan.className = "active";
    } else {
      daySpan.className = "in-active";
    }
    weekDaysHolder.appendChild(daySpan);
  }
}

const themeSwitch = document.getElementById("theme-switch");
const outerDiv = document.getElementById("clockBG");

themeSwitch.addEventListener("click", (e) => {
  let theme = localStorage.getItem("themeMode");
  if (theme == "light" || theme == "") {
    outerDiv.style.backgroundImage = 'url("/resources/dark_mode.jpg")';

    localStorage.setItem("themeMode", "dark");
  } else {
    outerDiv.style.backgroundImage = 'url("/resources/light_mode.jpg")';

    document.documentElement.removeAttribute("data-themeMode");
    localStorage.setItem("themeMode", "light");
  }
});

window.addEventListener("load", (event) => {
  getTime();
  updateQuote();
  fetchWeather();
  themeSwitch.checked = false;
  localStorage.setItem("themeMode", "light");
});
