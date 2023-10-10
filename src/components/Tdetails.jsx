import "../App.css";
import { useState, useEffect } from "react";

const api = {
  key: "3465e1a76a4bbf0671bc4cb4c2424db1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Tdetails() {
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
        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>


            {/* Location  */}

            <h3>Coordinates</h3>
            <p>Longitude: {weather.coord.lon}</p>
            <p>Latitude: {weather.coord.lat}</p>
            <p>Sunrise: {weather.sys.sunrise}</p>
            <p>Sunset: {weather.sys.sunset}</p>
            <p>TimeZone: {weather.timezone}</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Tdetails;