import React, { useState } from 'react';
import axios from 'axios';
import './Weather1.css'; // Import CSS file
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

function WeatherF1() {
  const [cityInput, setCityInput] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cityInput.trim()) {
      setError('Please enter a city name.');
      return;
    }

    axios.get('http://localhost:8007/weather', {
      params: { city: cityInput }
    })
      .then(response => {
        setWeather(response.data);
        setError('');
      })
      .catch(error => {
        setWeather(null);
        setError('Weather not found for the entered city.');
        console.error('Error fetching weather:', error);
      });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Home Icon */}
      <div className="home-icon" style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <img
          src="home_page.jpg"
          alt="Home Page"
          style={{ cursor: 'pointer', width: '50px', height: '50px' }}
          onClick={() => navigate("/ThirdPage")}
        />
      </div>

      <h2>Enter City to Get Weather Info</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Get Weather</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h3>Weather for {weather.city}</h3>
          <p><strong>Temperature:</strong> {weather.temperature} °C</p>
          <p><strong>Description:</strong> {weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherF1;
