import { useEffect } from "react";
import "../App.css";
import { useState } from "react";

const api = {
  key: "3465e1a76a4bbf0671bc4cb4c2424db1",
  base: "https://api.openweathermap.org/data/2.5/",
};


function Temperatre() {
  const [weather, setWeather] = useState({});


  const city = localStorage.getItem("name"); // Get city name from local storage

  useEffect(() => {
    if (city) {
      // Fetch weather data when the component mounts or when city changes
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [city]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Temperature</h1>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (

          <div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="WeatherImage" />

            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>Maximum-Temperature: {weather.main.temp_max}°C</p>
            <p>Minimum-Temperatre: {weather.main.temp_min}°C</p>
            <p>Pressure: ({weather.main.pressure})</p>
            <p>Humidity: {weather.main.humidity}</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Temperatre;