const errorDisplay = document.querySelector(".error");

export default function getWeatherData(city) {
  let parsedData = {};
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f676a3e6dc3340ab9a5155038232911&q=${city}&days=3`
  )
    .then((response) => {
      if (!response.ok) {
        if (response.status === 400) {
          errorDisplay.innerHTML = "City not found";
          throw new Error("Bad request - Invalid data provided");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }
      return response.json();
    })
    .then((data) => {
      parsedData = data;
      errorDisplay.innerHTML = "";
      return parsedData;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}
