// src/DisasterRiskOverlay.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


  const riskZones = [
  {
    name: "Ganga Basin",
    lat: 25.3,
    lng: 83.0,
    type: "Flood",
    severity: "High"
  },
  {
    name: "Krishna River",
    lat: 16.5,
    lng: 80.6,
    type: "Drought",
    severity: "Moderate"
  },
  {
    name: "Chennai",
    lat: 13.0827,
    lng: 80.2707,
    type: "Cyclone",
    severity: "High"
  },
  {
    name: "Mumbai",
    lat: 19.0760,
    lng: 72.8777,
    type: "Flood",
    severity: "Moderate"
  },
  {
    name: "Delhi",
    lat: 28.6139,
    lng: 77.2090,
    type: "Heatwave",
    severity: "High"
  },
  {
    name: "Kolkata",
    lat: 22.5726,
    lng: 88.3639,
    type: "Flood",
    severity: "Moderate"
  },
  {
    name: "Ahmedabad",
    lat: 23.0225,
    lng: 72.5714,
    type: "Heatwave",
    severity: "Moderate"
  },
  {
    name: "Hyderabad",
    lat: 17.3850,
    lng: 78.4867,
    type: "Drought",
    severity: "Low"
  },
  {
    name: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
    type: "Urban Flood",
    severity: "Low"
  },
  {
    name: "Visakhapatnam",
    lat: 17.6868,
    lng: 83.2185,
    type: "Cyclone",
    severity: "High"
  },
  {
    name: "Cuttack",
    lat: 20.4625,
    lng: 85.8828,
    type: "Flood",
    severity: "High"
  },
  {
    name: "Patna",
    lat: 25.5941,
    lng: 85.1376,
    type: "Flood",
    severity: "High"
  },
  {
    name: "Jaipur",
    lat: 26.9124,
    lng: 75.7873,
    type: "Heatwave",
    severity: "Moderate"
  },
  {
    name: "Bhopal",
    lat: 23.2599,
    lng: 77.4126,
    type: "Drought",
    severity: "Moderate"
  },
  {
    name: "Nagpur",
    lat: 21.1458,
    lng: 79.0882,
    type: "Heatwave",
    severity: "High"
  },
  {
    name: "Lucknow",
    lat: 26.8467,
    lng: 80.9462,
    type: "Flood",
    severity: "Moderate"
  },
  {
    name: "Ranchi",
    lat: 23.3441,
    lng: 85.3096,
    type: "Landslide",
    severity: "Low"
  },
  {
    name: "Shimla",
    lat: 31.1048,
    lng: 77.1734,
    type: "Landslide",
    severity: "High"
  },
  {
    name: "Dehradun",
    lat: 30.3165,
    lng: 78.0322,
    type: "Landslide",
    severity: "Moderate"
  },
  {
    name: "Srinagar",
    lat: 34.0837,
    lng: 74.7973,
    type: "Avalanche",
    severity: "High"
  },
  {
    name: "Leh",
    lat: 34.1526,
    lng: 77.5771,
    type: "Avalanche",
    severity: "Moderate"
  },
  {
    name: "Imphal",
    lat: 24.8170,
    lng: 93.9368,
    type: "Earthquake",
    severity: "High"
  },
  {
    name: "Aizawl",
    lat: 23.7271,
    lng: 92.7176,
    type: "Landslide",
    severity: "Moderate"
  },
  {
    name: "Itanagar",
    lat: 27.0844,
    lng: 93.6053,
    type: "Earthquake",
    severity: "High"
  },
  {
    name: "Gangtok",
    lat: 27.3314,
    lng: 88.6138,
    type: "Landslide",
    severity: "High"
  },
  {
    name: "Shillong",
    lat: 25.5788,
    lng: 91.8933,
    type: "Flood",
    severity: "Low"
  },
  {
    name: "Agartala",
    lat: 23.8315,
    lng: 91.2868,
    type: "Cyclone",
    severity: "Moderate"
  },
  {
    name: "Port Blair",
    lat: 11.6234,
    lng: 92.7265,
    type: "Tsunami",
    severity: "High"
  },
  {
    name: "Thiruvananthapuram",
    lat: 8.5241,
    lng: 76.9366,
    type: "Flood",
    severity: "Moderate"
  },
  {
    name: "Kozhikode",
    lat: 11.2588,
    lng: 75.7804,
    type: "Flood",
    severity: "Low"
  },
  {
    name: "Madurai",
    lat: 9.9252,
    lng: 78.1198,
    type: "Drought",
    severity: "Low"
  },
  {
    name: "Coimbatore",
    lat: 11.0168,
    lng: 76.9558,
    type: "Heatwave",
    severity: "Moderate"
  },
  {
    name: "Raipur",
    lat: 21.2514,
    lng: 81.6296,
    type: "Heatwave",
    severity: "High"
  },
  {
    name: "Pune",
    lat: 18.5204,
    lng: 73.8567,
    type: "Urban Flood",
    severity: "Low"
  },
  {
    name: "Nashik",
    lat: 19.9975,
    lng: 73.7898,
    type: "Drought",
    severity: "Moderate"
  },
  {
    name: "Vadodara",
    lat: 22.3072,
    lng: 73.1812,
    type: "Flood",
    severity: "Low"
  },
  {
    name: "Surat",
    lat: 21.1702,
    lng: 72.8311,
    type: "Flood",
    severity: "Moderate"
  },
  {
    name: "Jodhpur",
    lat: 26.2389,
    lng: 73.0243,
    type: "Heatwave",
    severity: "High"
  },
  {
    name: "Udaipur",
    lat: 24.5854,
    lng: 73.7125,
    type: "Drought",
    severity: "Low"
  },
  {
    name: "Guwahati",
    lat: 26.1445,
    lng: 91.7362,
    type: "Flood",
    severity: "High"
  },
  {
    name: "Panaji",
    lat: 15.4909,
    lng: 73.8278,
    type: "Urban Flood",
    severity: "Low"
  },
  {
    name: "Bilaspur",
    lat: 22.0797,
    lng: 82.1409,
    type: "Heatwave",
    severity: "Moderate"
  },
  {
    name: "Dhanbad",
    lat: 23.7957,
    lng: 86.4304,
    type: "Heatwave",
    severity: "High"
  },
  {
    name: "Silchar",
    lat: 24.8333,
    lng: 92.7789,
    type: "Flood",
    severity: "Moderate"
  },
  {
    name: "Tirupati",
    lat: 13.6288,
    lng: 79.4192,
    type: "Cyclone",
    severity: "Moderate"
  }
];



export default function DisasterRiskOverlay() {
  const [cursorLatLng, setCursorLatLng] = useState(null);
  const [cursorPixel, setCursorPixel] = useState({ x: 0, y: 0 });

  // handle mouse move
  const handleMouseMove = (e) => {
    const container = e.target;
    const bounds = container.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
     
    setCursorPixel({ x, y });

    const map = container._leaflet_map;
    const latlng = map.containerPointToLatLng([x, y]);
    setCursorLatLng(latlng);
  };

  return (
    <div style={{ position: 'relative' }}>
        <div 
                className="home-icon" 
                style={{ position: 'absolute', top: '20px', left: '20px' }}
            >
                <img
                    src="home_page.jpg"
                    alt="Home Page"
                    style={{ cursor: 'pointer', width: '50px', height: '50px' }}
                    onClick={() => navigate("/ThirdPage")} // Navigate to home page on click
                />
            </div>

      <h2>Disaster Risk Zones (Demo)</h2>
      <div
        style={{ height: '600px', width: '100%' }}
        onMouseMove={handleMouseMove}
      >
        <MapContainer
          center={[22.59, 78.96]}
          zoom={5}
          style={{ height: '100%', width: '100%' }}
          whenCreated={(map) => {
            document.querySelector('.leaflet-container')._leaflet_map = map;
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {riskZones.map((zone, index) => (
            <Circle
              key={index}
              center={[zone.lat, zone.lng]}
              radius={50000}
              pathOptions={{
                color: zone.type === "Flood" ? "blue" : "orange",
                fillOpacity: 0.5
              }}
            >
              <Popup>
                <strong>{zone.name}</strong><br />
                Type: {zone.type}<br />
                Severity: {zone.severity}
              </Popup>
            </Circle>
          ))}
        </MapContainer>
      </div>

      {cursorLatLng && (
        <div
          style={{
            position: 'absolute',
            top: cursorPixel.y + 10,
            left: cursorPixel.x + 10,
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            pointerEvents: 'none',
            fontSize: '12px'
          }}
        >
          Lat: {cursorLatLng.lat.toFixed(2)}, Lng: {cursorLatLng.lng.toFixed(2)}
        </div>
      )}
    </div>
  );
}
