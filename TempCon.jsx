import React, { useState } from 'react';

function TempCon() {
  const [inputTemp, setInputTemp] = useState(''); // Store the input temperature
  const [inputUnit, setInputUnit] = useState('C'); // Store input unit (Celsius or Fahrenheit)
  const [outputTemp, setOutputTemp] = useState(null); // Store the converted temperature
  const [outputUnit, setOutputUnit] = useState('C'); // Store output unit (Celsius, Fahrenheit, Kelvin)
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputTemp(e.target.value);
    setError('');
  };

  const handleUnitChange = (e) => {
    setInputUnit(e.target.value);
    setOutputTemp(null);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
    setOutputTemp(null);
  };

  const convertTemperature = () => {
    const temp = parseFloat(inputTemp);

    if (isNaN(temp)) {
      setError('Please enter a valid number');
      return;
    }

    let convertedTemp;

    // Convert based on the selected input unit and output unit
    if (inputUnit === 'C') {
      if (outputUnit === 'C') {
        convertedTemp = temp; // No conversion needed
      } else if (outputUnit === 'F') {
        convertedTemp = (temp * 9) / 5 + 32;
      } else if (outputUnit === 'K') {
        convertedTemp = temp + 273.15;
      }
    } else if (inputUnit === 'F') {
      if (outputUnit === 'C') {
        convertedTemp = ((temp - 32) * 5) / 9;
      } else if (outputUnit === 'F') {
        convertedTemp = temp; // No conversion needed
      } else if (outputUnit === 'K') {
        convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
      }
    }

    setOutputTemp(convertedTemp);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Temperature Converter</h2>

      <div>
        <label>
          Enter Temperature:
          <input
            type="text"
            value={inputTemp}
            onChange={handleInputChange}
            placeholder="Enter temperature"
          />
        </label>
      </div>

      <div style={{ margin: '10px' }}>
        <label>
          Select Input Unit:
          <select value={inputUnit} onChange={handleUnitChange}>
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
          </select>
        </label>
      </div>

      <div style={{ margin: '10px' }}>
        <label>
          Select Output Unit:
          <select value={outputUnit} onChange={handleOutputUnitChange}>
            <option value="C">Celsius (°C)</option>
            <option value="F">Fahrenheit (°F)</option>
            <option value="K">Kelvin (K)</option>
          </select>
        </label>
      </div>

      <button onClick={convertTemperature} style={{ marginTop: '10px' }}>
        Convert
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {outputTemp !== null && (
        <div style={{ marginTop: '20px' }}>
          <h3>
            {inputTemp}°{inputUnit} is equal to {outputTemp.toFixed(2)}°{outputUnit}
          </h3>
        </div>
      )}
    </div>
  );
}

export default TempCon;
