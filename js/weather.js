const getCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let coords = [];

      coords.push(position.coords.latitude);
      coords.push(position.coords.longitude);

      resolve(coords);
    });
  });
};

const weatherHelper = (coords) => {
  const weatherAPIKey = "92ba92cb74ec3fa6497d61bc94ad64a8";
  const weatherAPIReqURL = `https://api.openweathermap.org/data/2.5/weather/?lat=${coords[0]}&lon=${coords[1]}&units=metric&APPID=${weatherAPIKey}`;

  return new Promise((resolve, reject) => {
    resolve(weatherAPIReqURL);
  });
};

const fetchWeatherHelper = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((weatherData) => {
      const weatherImgSrc =
        "https://openweathermap.org/img/wn/" +
        weatherData.weather[0].icon +
        "@2x.png";

      let weatherImgTarget = document.getElementById("weatherImg");
      weatherImgTarget.src = weatherImgSrc;

      let weatherTempTarget = document.getElementById("weatherTempSpan");
      weatherTempTarget.innerText = weatherData.main.temp;

      let weatherDescTarget = document.getElementById("weatherDesc");
      weatherDescTarget.innerText = weatherData.weather[0].description;
    });
};

const getWeather = async () => {
  let coords = await getCoords();
  let url = await weatherHelper(coords);
  fetchWeatherHelper(url);
};

export const fetchWeather = async () => {
  await getWeather();
};

export default {
  fetchWeather,
};
