import {
  displayCurrentWeather,
  displayHourlyWeather,
  displayTomorrowWeather,
} from "./controller";

const cityBtn = document.getElementById("city-btn");
const cityInput = document.getElementById("city");
const sidebarBtnsNodes = document.querySelectorAll(".sidebar>div");
const sidebarBtns = [...sidebarBtnsNodes];

cityBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (cityInput) {
    displayCurrentWeather(cityInput.value);
    displayHourlyWeather(cityInput.value);
    displayTomorrowWeather(cityInput.value);
    cityInput.value = "";
  }
});
sidebarBtns.forEach((button) => {
  button.addEventListener("click", () => {
    displayCurrentWeather(button.id);
    displayHourlyWeather(button.id);
    displayTomorrowWeather(button.id);
  });
});

window.addEventListener("load", () => {
  displayCurrentWeather("London");
  displayHourlyWeather("London");
  displayTomorrowWeather("London");
});
