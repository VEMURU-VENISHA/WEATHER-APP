import React from "react";
import { useNavigate } from "react-router-dom";
import "./Weather.css"; // Import the CSS file

export default function Weather() {
  const navigate = useNavigate();

  const weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="weather">
      <div className="home-icon">
        <img
          src="home_page.jpg"
          alt="Home Page"
          style={{ cursor: "pointer", width: "50px", height: "50px" }}
          onClick={() => navigate("/")}
        />
      </div>

      <h1>{weatherData.city}</h1>
      <ul>
        <li>Last updated: {weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
          <strong>{weatherData.temperature}</strong>°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="weather-alert">
        <h2>Weather Alert</h2>
        <button onClick={() => navigate("/WeatherAlert")} className="btn btn-warning">
          Check Alerts
        </button>
      </div>
    </div>
  );
}
