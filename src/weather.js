export default function Weather(parsedData) {
  const city = parsedData.location.name;
  const { country } = parsedData.location;
  const tempC = parsedData.current.temp_c;
  const tempF = parsedData.current.temp_f;
  const { humidity } = parsedData.current;
  const pressure = parsedData.current.pressure_mb;
  const wind = parsedData.current.wind_kph;
  const icon = parsedData.current.condition.icon;
  return {
    city,
    country,
    tempC,
    tempF,
    humidity,
    pressure,
    wind,
    icon,
  };
}
export function HourlyWeather(parsedData) {
  const zero = [
    "00:00",
    parsedData.forecast.forecastday[0].hour[0].temp_c,
    parsedData.forecast.forecastday[0].hour[0].condition.icon,
  ];
  const four = [
    "04:00",
    parsedData.forecast.forecastday[0].hour[4].temp_c,
    parsedData.forecast.forecastday[0].hour[4].condition.icon,
  ];
  const eight = [
    "08:00",
    parsedData.forecast.forecastday[0].hour[8].temp_c,
    parsedData.forecast.forecastday[0].hour[8].condition.icon,
  ];
  const twelve = [
    "12:00",
    parsedData.forecast.forecastday[0].hour[12].temp_c,
    parsedData.forecast.forecastday[0].hour[12].condition.icon,
  ];
  const sixteen = [
    "16:00",
    parsedData.forecast.forecastday[0].hour[16].temp_c,
    parsedData.forecast.forecastday[0].hour[16].condition.icon,
  ];
  const twenty = [
    "20:00",
    parsedData.forecast.forecastday[0].hour[20].temp_c,
    parsedData.forecast.forecastday[0].hour[20].condition.icon,
  ];

  return {
    zero,
    four,
    eight,
    twelve,
    sixteen,
    twenty,
  };
}

export function TomorrowWeather(parsedData) {
  const tTemp = parsedData.forecast.forecastday[1].day.avgtemp_c;
  const tIcon = parsedData.forecast.forecastday[1].day.condition.icon;
  const oTemp = parsedData.forecast.forecastday[2].day.avgtemp_c;
  const oIcon = parsedData.forecast.forecastday[2].day.condition.icon;
  return {
    tIcon,
    tTemp,
    oIcon,
    oTemp,
  };
}
