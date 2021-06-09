import { Fragment } from "react";
import { weatherAction } from "../store/weather";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import './weatherInput.css';
function WeatherInput() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  
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
        <button className="submit" 
        // onClick={(city) => getWeatherData(city)}
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
}
export default WeatherInput;