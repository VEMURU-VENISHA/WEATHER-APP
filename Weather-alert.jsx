import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation

export default function WeatherAlert() {
    const [weatherData] = useState({ temperature: 38, disaster: "storm" });
    const navigate = useNavigate();  // Initialize the navigate function

    const checkWeatherConditions = () => {
        let alertMessage = "";
        if (weatherData.temperature > 35) {
            alertMessage += "⚠️ Heat Alert: Stay hydrated.\n";
        }
        if (weatherData.disaster) {
            alertMessage += `⚠️ Disaster Alert: ${weatherData.disaster.toUpperCase()} detected!\n`;
        }
        alert(alertMessage || "✅ Weather is normal. No alerts.");
    };

    return (
        <div
            style={{
                backgroundImage: `url(82424.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            {/* Home icon */}
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

            <h1>Weather Alert System</h1>
            <p>Temperature: {weatherData.temperature}°C</p>
            <button
                onClick={checkWeatherConditions}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#ff5733',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
                }}
            >
                Check Alerts
            </button>
        </div>
    );
}
