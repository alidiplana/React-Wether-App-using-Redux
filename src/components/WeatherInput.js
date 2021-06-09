import { Fragment } from "react";
import React, { useState } from "react";
import './weatherInput.css';
function WeatherInput({getWeatherData}) {
  const [city, setCity] = useState('');

  return (
    <Fragment>
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          value ={city}
        />
        <button className="submit" 
        onClick={() => getWeatherData(city)}
        >
          Submi
        </button>
    </Fragment>
  );
}
export default WeatherInput;