import React, { useState } from 'react';
import '../weather.css';
import Navbar from './Navbar'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '29daa2a03b2e34fac1df3d4538b5d9de';

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const resetWeatherData = () => {
    setWeatherData(null);
    setCity('');
  };

  return (
    <div>
      <Navbar/>
    <div className='weatherbody'>
      <div className="weathercontain">
        <div class="snow">
          <div className="search-container">
            <input
              type="text"
              className='weatherinput'
              value={city}
              onChange={handleInputChange}
              placeholder="Enter city name..."
            />
            <button className="weatherbutton" onClick={fetchWeatherData}>Search</button>
            <button className="weatherbutton" onClick={resetWeatherData}>Reset</button>
          </div>
          {weatherData && weatherData.cod === 200 ? (
            <div className="weather-info">
              <h2>{weatherData.name}</h2>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Description: {weatherData.weather[0].description}</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          ) : (
            <p className='err'>No data available. Enter a valid city name and click "Search" to fetch weather data.</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
