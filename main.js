/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCurrentWeather: () => (/* binding */ displayCurrentWeather),\n/* harmony export */   displayHourlyWeather: () => (/* binding */ displayHourlyWeather),\n/* harmony export */   displayTomorrowWeather: () => (/* binding */ displayTomorrowWeather)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _feach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feach */ \"./src/feach.js\");\n\n\n\nconst symbol = \"˚C\";\n\nconst cwTemp = document.querySelector(\".cw-temp\");\nconst cwCity = document.getElementById(\"cw-city\");\nconst cwHum = document.getElementById(\"cw-hum\");\nconst cwWind = document.getElementById(\"cw-wind\");\nconst cwPress = document.getElementById(\"cw-press\");\nconst cwIcon = document.getElementById(\"cw-icon\");\nconst headerCity = document.querySelector(\".header-city\");\n\nconst hwContainer = document.querySelector(\".hw-container\");\n\nconst tContent = document.querySelector(\".t-content\");\nconst oContent = document.querySelector(\".o-content\");\n\nasync function displayCurrentWeather(city) {\n  const newWeatherData = await (0,_feach__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(city);\n  const currentWeather = (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newWeatherData);\n  cwIcon.src = currentWeather.icon;\n  cwTemp.innerHTML = currentWeather.tempC + symbol;\n  cwCity.innerHTML = currentWeather.city;\n  cwHum.innerHTML = currentWeather.humidity;\n  cwWind.innerHTML = currentWeather.wind;\n  cwPress.innerHTML = currentWeather.pressure;\n  headerCity.innerHTML = `${currentWeather.city} ${\n    currentWeather.tempC + symbol\n  }`;\n}\nfunction makeHourDisplay(array) {\n  const hwContent = document.createElement(\"div\");\n  hwContent.classList.add(\"hw-content\");\n\n  const hour = document.createElement(\"div\");\n  hour.innerHTML = array[0];\n  hwContent.appendChild(hour);\n\n  const pic = document.createElement(\"img\");\n  pic.src = array[2];\n  hwContent.appendChild(pic);\n\n  const temp = document.createElement(\"div\");\n  temp.innerHTML = array[1] + symbol;\n  hwContent.appendChild(temp);\n\n  hwContainer.appendChild(hwContent);\n}\nasync function displayHourlyWeather(city) {\n  const newWeatherData = await (0,_feach__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(city);\n  const hourlyWeather = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.HourlyWeather)(newWeatherData);\n  hwContainer.innerHTML = \"\";\n  Object.keys(hourlyWeather).forEach((key) => {\n    makeHourDisplay(hourlyWeather[key]);\n  });\n}\n\nasync function displayTomorrowWeather(city) {\n  const newWeatherData = await (0,_feach__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(city);\n  const tomorrowWeather = (0,_weather__WEBPACK_IMPORTED_MODULE_0__.TomorrowWeather)(newWeatherData);\n\n  oContent.innerHTML = \"\";\n  tContent.innerHTML = \"\";\n\n  const tIcon = document.createElement(\"img\");\n  tIcon.src = tomorrowWeather.tIcon;\n  tContent.appendChild(tIcon);\n\n  const tTemp = document.createElement(\"div\");\n  tTemp.innerHTML = tomorrowWeather.tTemp + symbol;\n  tContent.appendChild(tTemp);\n\n  const oIcon = document.createElement(\"img\");\n  oIcon.src = tomorrowWeather.oIcon;\n  oContent.appendChild(oIcon);\n\n  const oTemp = document.createElement(\"div\");\n  oTemp.innerHTML = tomorrowWeather.oTemp + symbol;\n  oContent.appendChild(oTemp);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/controller.js?");

/***/ }),

/***/ "./src/feach.js":
/*!**********************!*\
  !*** ./src/feach.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nfunction getWeatherData(city) {\n  let parsedData = {};\n\n  return fetch(\n    `https://api.weatherapi.com/v1/forecast.json?key=f676a3e6dc3340ab9a5155038232911&q=${city}&days=3`\n  )\n    .then((response) => {\n      if (!response.ok) {\n        if (response.status === 400) {\n          throw new Error(\"Bad request - Invalid data provided\");\n        } else {\n          throw new Error(`HTTP error! Status: ${response.status}`);\n        }\n      }\n      return response.json();\n    })\n    .then((data) => {\n      parsedData = data;\n      return parsedData;\n    })\n    .catch((error) => {\n      // Ovdje možeš obraditi grešku\n      console.error(\"Greška prilikom dohvaćanja podataka:\", error);\n      return Promise.reject(error); // Zaustavi izvršenje funkcije bacanjem greške\n    });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/feach.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\nconst cityBtn = document.getElementById(\"city-btn\");\nconst cityInput = document.getElementById(\"city\");\nconst sidebarBtnsNodes = document.querySelectorAll(\".sidebar>div\");\nconst sidebarBtns = [...sidebarBtnsNodes];\n\ncityBtn.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  if (cityInput) {\n    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(cityInput.value);\n    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayHourlyWeather)(cityInput.value);\n    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayTomorrowWeather)(cityInput.value);\n  }\n});\nsidebarBtns.forEach((button) => {\n  button.addEventListener(\"click\", () => {\n    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(button.id);\n    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayHourlyWeather)(button.id);\n    (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayTomorrowWeather)(button.id);\n  });\n});\n\nwindow.addEventListener(\"load\", () => {\n  (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayCurrentWeather)(\"London\");\n  (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayHourlyWeather)(\"London\");\n  (0,_controller__WEBPACK_IMPORTED_MODULE_0__.displayTomorrowWeather)(\"London\");\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HourlyWeather: () => (/* binding */ HourlyWeather),\n/* harmony export */   TomorrowWeather: () => (/* binding */ TomorrowWeather),\n/* harmony export */   \"default\": () => (/* binding */ Weather)\n/* harmony export */ });\nfunction Weather(parsedData) {\n  const city = parsedData.location.name;\n  const { country } = parsedData.location;\n  const tempC = parsedData.current.temp_c;\n  const tempF = parsedData.current.temp_f;\n  const { humidity } = parsedData.current;\n  const pressure = parsedData.current.pressure_mb;\n  const wind = parsedData.current.wind_kph;\n  const icon = parsedData.current.condition.icon;\n  return {\n    city,\n    country,\n    tempC,\n    tempF,\n    humidity,\n    pressure,\n    wind,\n    icon,\n  };\n}\nfunction HourlyWeather(parsedData) {\n  const zero = [\n    \"00:00\",\n    parsedData.forecast.forecastday[0].hour[0].temp_c,\n    parsedData.forecast.forecastday[0].hour[0].condition.icon,\n  ];\n  const four = [\n    \"04:00\",\n    parsedData.forecast.forecastday[0].hour[4].temp_c,\n    parsedData.forecast.forecastday[0].hour[4].condition.icon,\n  ];\n  const eight = [\n    \"08:00\",\n    parsedData.forecast.forecastday[0].hour[8].temp_c,\n    parsedData.forecast.forecastday[0].hour[8].condition.icon,\n  ];\n  const twelve = [\n    \"12:00\",\n    parsedData.forecast.forecastday[0].hour[12].temp_c,\n    parsedData.forecast.forecastday[0].hour[12].condition.icon,\n  ];\n  const sixteen = [\n    \"16:00\",\n    parsedData.forecast.forecastday[0].hour[16].temp_c,\n    parsedData.forecast.forecastday[0].hour[16].condition.icon,\n  ];\n  const twenty = [\n    \"20:00\",\n    parsedData.forecast.forecastday[0].hour[20].temp_c,\n    parsedData.forecast.forecastday[0].hour[20].condition.icon,\n  ];\n\n  return {\n    zero,\n    four,\n    eight,\n    twelve,\n    sixteen,\n    twenty,\n  };\n}\n\nfunction TomorrowWeather(parsedData) {\n  const tTemp = parsedData.forecast.forecastday[1].day.avgtemp_c;\n  const tIcon = parsedData.forecast.forecastday[1].day.condition.icon;\n  const oTemp = parsedData.forecast.forecastday[2].day.avgtemp_c;\n  const oIcon = parsedData.forecast.forecastday[2].day.condition.icon;\n  return {\n    tIcon,\n    tTemp,\n    oIcon,\n    oTemp,\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;