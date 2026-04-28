// src/IndiaMap.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Tooltip, Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom'; // ⬅️ Import navigate hook
import axios from 'axios';
import './IndiaMap.css';

const OPENWEATHER_API_KEY = process.env.REACT_APP_API_KEY;

function CursorTracker({ onMove }) {
  useMapEvents({
    mousemove(e) {
      onMove(e.latlng);
    }
  });
  return null;
}

export default function IndiaMap() {
  const [position, setPosition] = useState(null);
  const [temp, setTemp] = useState(null);
  const navigate = useNavigate(); // ⬅️ Initialize navigate

  const fetchTemperature = async ({ lat, lng }) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${OPENWEATHER_API_KEY}`
      );
      setTemp(res.data.main.temp);
    } catch (err) {
      console.error("Temperature fetch failed", err);
    }
  };

  const handleMove = (latlng) => {
    setPosition(latlng);
    fetchTemperature(latlng);
  };

  return (
    <div style={{ position: 'relative' }}>
      <h2>India Map (Real-Time Temp)</h2>

      {/* Home icon top-left corner */}
      <div 
        className="home-icon" 
        style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000 }}
      >
        <img
          src="home_page.jpg"
          alt="Home Page"
          style={{ cursor: 'pointer', width: '50px', height: '50px' }}
          onClick={() => navigate("/ThirdPage")} // ⬅️ Navigate to homepage
        />
      </div>

      <MapContainer center={[22.59, 78.96]} zoom={5} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <CursorTracker onMove={handleMove} />
        {position && (
          <Marker position={position}>
            <Tooltip direction="top" offset={[0, -10]} permanent>
              <div>
                Lat: {position.lat.toFixed(2)} <br />
                Lng: {position.lng.toFixed(2)} <br />
                Temp: {temp !== null ? `${temp}°C` : "Loading..."}
              </div>
            </Tooltip>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
