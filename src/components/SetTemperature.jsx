import React from 'react'
import { useState, useEffect } from 'react';

export default function SetTemperature() {
    const [Min, setMin] = useState(0)
    const [Max, setMax] = useState(0)

    const updateValuesToDatabase = () => {
        localStorage.setItem("minTemp", Min)
        localStorage.setItem("maxTemp", Max)
    }

    const api = {
        key: "3465e1a76a4bbf0671bc4cb4c2424db1",
        base: "https://api.openweathermap.org/data/2.5/",
    };

    function Rough() {
        const [weather, setWeather] = useState({});
        const [mini, setMinimum] = useState("");
        const [maxi, setMaximum] = useState("");

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
            const intervalId = setInterval(fetchWeatherData, 6000);

            return () => {
                clearInterval(intervalId);
            };
        }, []);

        const sendAlert = () => {
            if (weather.main && mini && maxi) {
                const currentTemp = weather.main.temp;

                if (currentTemp > parseFloat(maxi)) {
                    // Temperature exceeds the maximum limit
                    alert("Temperature exceeded the maximum limit!");
                    // Implement logic to send an alert to the phone number here
                }

                if (currentTemp < parseFloat(mini)) {
                    // Temperature falls below the minimum limit
                    alert("Temperature fell below the minimum limit!");
                    // Implement logic to send an alert to the phone number here
                }
            }
        };

        useEffect(() => {
            // Schedule sending alerts every hour
            const alertInterval = setInterval(() => {
                sendAlert();
            }, 3600000);
        }) // 3600000 milliseconds = 1 hour
    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="minimum">Minimum Temperature:</label>
                    <input
                        type="number"
                        id="minimum"
                        value={mini}
                        onChange={(e) => setMinimum(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="maximum">Maximum Temperature:</label>
                    <input
                        type="number"
                        id="maximum"
                        value={maxi}
                        onChange={(e) => setMaximum(e.target.value)}
                    />
                </div>

                <button type="submit" >{SubmitChange}</button>
            </form>
        </>
    )
}