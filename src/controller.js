import Weather, { HourlyWeather, TomorrowWeather } from "./weather";
import getWeatherData from "./feach";

const symbol = "˚C";

const cwTemp = document.querySelector(".cw-temp");
const cwCity = document.getElementById("cw-city");
const cwHum = document.getElementById("cw-hum");
const cwWind = document.getElementById("cw-wind");
const cwPress = document.getElementById("cw-press");
const cwIcon = document.getElementById("cw-icon");
const headerCity = document.querySelector(".header-city");

const hwContainer = document.querySelector(".hw-container");

const tContent = document.querySelector(".t-content");
const oContent = document.querySelector(".o-content");

export async function displayCurrentWeather(city) {
  const newWeatherData = await getWeatherData(city);
  const currentWeather = Weather(newWeatherData);
  cwIcon.src = currentWeather.icon;
  cwTemp.innerHTML = currentWeather.tempC + symbol;
  cwCity.innerHTML = currentWeather.city;
  cwHum.innerHTML = currentWeather.humidity;
  cwWind.innerHTML = currentWeather.wind;
  cwPress.innerHTML = currentWeather.pressure;
  headerCity.innerHTML = `${currentWeather.city} ${
    currentWeather.tempC + symbol
  }`;
}
function makeHourDisplay(array) {
  const hwContent = document.createElement("div");
  hwContent.classList.add("hw-content");

  const hour = document.createElement("div");
  hour.innerHTML = array[0];
  hwContent.appendChild(hour);

  const pic = document.createElement("img");
  pic.src = array[2];
  hwContent.appendChild(pic);

  const temp = document.createElement("div");
  temp.innerHTML = array[1] + symbol;
  hwContent.appendChild(temp);

  hwContainer.appendChild(hwContent);
}
export async function displayHourlyWeather(city) {
  const newWeatherData = await getWeatherData(city);
  const hourlyWeather = await HourlyWeather(newWeatherData);
  hwContainer.innerHTML = "";
  Object.keys(hourlyWeather).forEach((key) => {
    makeHourDisplay(hourlyWeather[key]);
  });
}

export async function displayTomorrowWeather(city) {
  const newWeatherData = await getWeatherData(city);
  const tomorrowWeather = TomorrowWeather(newWeatherData);

  oContent.innerHTML = "";
  tContent.innerHTML = "";

  const tIcon = document.createElement("img");
  tIcon.src = tomorrowWeather.tIcon;
  tContent.appendChild(tIcon);

  const tTemp = document.createElement("div");
  tTemp.innerHTML = tomorrowWeather.tTemp + symbol;
  tContent.appendChild(tTemp);

  const oIcon = document.createElement("img");
  oIcon.src = tomorrowWeather.oIcon;
  oContent.appendChild(oIcon);

  const oTemp = document.createElement("div");
  oTemp.innerHTML = tomorrowWeather.oTemp + symbol;
  oContent.appendChild(oTemp);
}
