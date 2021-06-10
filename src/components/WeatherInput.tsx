import { Fragment } from "react";
import React, { useState } from "react";
import "./weatherInput.css";

const WeatherInput = ({ getWeatherData }: any) => {
  const [city, setCity] = useState("");

  return (
    <Fragment>
      <input
        className="searchTerm"
        type="text"
        placeholder="Enter City"
        name="city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button className="searchButton" onClick={() => getWeatherData(city)}>
        Submit
      </button>
    </Fragment>
  );
};
export default WeatherInput;
