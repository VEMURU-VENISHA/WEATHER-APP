import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <button onClick={() => navigate('/Weather1')} className="px-4 py-2 bg-blue-500 text-white rounded">Weather Temperature</button>
      <button onClick={() => navigate('/WeatherAlert')} className="px-4 py-2 bg-green-500 text-white rounded">Weather Alerts</button>
      <button onClick={() => navigate('/IndiaMap')} className="px-4 py-2 bg-red-500 text-white rounded">India Map Temperatures</button>
      <button onClick={() => navigate('/DisasterRiskOverlay')} className="px-4 py-2 bg-yellow-500 text-white rounded">Disaster Risk Overlay</button>
      <button onClick={() => navigate('/TempCon')} className="px-4 py-2 bg-purple-500 text-white rounded">Temperature Conversion</button>
    </div>
  );
};

const WeatherTemperature = () => <h1>Weather Temperature Page</h1>;
const WeatherAlerts = () => <h1>Weather Alerts Page</h1>;
const DisasterRiskOverlay = () => <h1>Disaster Risk Overlay Page</h1>;

// ✅ New Temperature Conversion Component
const TempCon = () => {
  const [temp, setTemp] = React.useState('');
  const [unit, setUnit] = React.useState('C');
  const [result, setResult] = React.useState('');

  const convertTemp = () => {
    if (unit === 'C') {
      setResult(`${(temp * 9) / 5 + 32} °F`);
    } else {
      setResult(`${((temp - 32) * 5) / 9} °C`);
    }
  };

  return (
    <div className="p-4 space-y-4 bg-gray-100 rounded">
      <h1 className="text-xl font-bold">Temperature Converter</h1>
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Enter Temperature"
        className="p-2 border border-gray-300 rounded"
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)} className="p-2 border border-gray-300 rounded">
        <option value="C">Celsius to Fahrenheit</option>
        <option value="F">Fahrenheit to Celsius</option>
      </select>
      <button onClick={convertTemp} className="px-4 py-2 bg-blue-600 text-white rounded">
        Convert
      </button>
      {result && <div className="text-lg font-semibold">Converted: {result}</div>}
    </div>
  );
};

const ThirdPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Weather1" element={<WeatherTemperature />} />
      <Route path="/WeatherAlert" element={<WeatherAlerts />} />
      <Route path="/IndiaMap" element={<ThirdPage />} />
      <Route path="/DisasterRiskOverlay" element={<DisasterRiskOverlay />} />
      <Route path="/TempCon" element={<TempCon />} /> {/* ✅ New Route */}
    </Routes>
  );
};

export default ThirdPage;
