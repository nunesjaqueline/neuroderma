import React, { useState, useEffect } from 'react';

export  const Weather = ({changeImg}) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_Key = '7acaaebb14a273a52dc6c2adad239cd4';

  useEffect(() => {
   
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=48.2083537&lon=16.3725042&appid=${API_Key}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
        changeImg(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  },[]); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      {weatherData ? (
          <div>
            <p className={"text"}>
              {weatherData.weather[0].description}
            </p>
            <p className={"text"}>
              Luftfeuchtigkeit: {weatherData.main.humidity}
            </p>
          </div>
      ) : (
          <p>Loading...</p>
      )}
    </div>
  );
};


