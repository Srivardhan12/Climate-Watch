import "../App.css";
import React, { useState, useEffect } from "react";
import SetTemp from "./SetTemp"; // Import the SetTemp component

const api = {
  key: "3465e1a76a4bbf0671bc4cb4c2424db1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Rough() {
  const [weather, setWeather] = useState({});
  const [mini, setMinimum] = useState("");
  const [maxi, setMaximum] = useState("");

  // Retrieve minimum and maximum temperature values from local storage
  useEffect(() => {
    const minTemp = localStorage.getItem("minimum");
    const maxTemp = localStorage.getItem("maximum");

    if (minTemp) {
      setMinimum(minTemp);
    }

    if (maxTemp) {
      setMaximum(maxTemp);
    }
  }, []);

  // Function to fetch weather data from OpenWeatherMap API
  const fetchWeatherData = async () => {
    const city = localStorage.getItem("name");
    if (city) {
      try {
        const response = await fetch(
          `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`
        );
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 60000); // Fetch weather data every minute

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Check temperature conditions and send alerts
  useEffect(() => {
    if (weather.main && mini && maxi) {
      const currentTemp = parseFloat(weather.main.temp);

      if (currentTemp > parseFloat(maxi)) {
        // Temperature exceeds the maximum limit
        alert(`Temperature exceeded the maximum limit: ${currentTemp}°C`);
      }

      if (currentTemp < parseFloat(mini)) {
        // Temperature falls below the minimum limit
        alert(`Temperature fell below the minimum limit: ${currentTemp}°C`);
      }
    }
  }, [weather, mini, maxi]);

  return (
    <div className="App">
      <header className="App-header">
        {/* Render the SetTemp component to set minimum and maximum temperatures */}
        <SetTemp />
      </header>
    </div>
  );
}

export default Rough;

