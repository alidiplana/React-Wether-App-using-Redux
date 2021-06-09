import { Fragment } from "react";
import { weatherAction } from "../store/weather";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import './weatherInput.css';
function WeatherInput() {
  const APIKey = "72286ce12d54b7b4c80ee1f25861e9a1";
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  async function getWeatherData() {
    if (city) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`,
      )
        .then((res) => res.json())
        .then((data) => data);
      dispatch(weatherAction.setWeather(data));
      console.log(data);
    }
  }
  const changeHandler = (event) => {
    let value = event.target.value;
    setCity(value);
    dispatch(weatherAction.setCity(value));
  };
  return (
    <Fragment>
      <form>
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          onChange={(event) => changeHandler(event)}
          value ={city}
        />
        <button className="submit" onClick={(city) => getWeatherData(city)}>
          Submit
        </button>
      </form>
    </Fragment>
  );
}
export default WeatherInput;