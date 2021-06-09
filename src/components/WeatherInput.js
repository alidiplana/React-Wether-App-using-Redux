import { Fragment } from "react";
import { weatherAction } from "../store/weather";
import { useDispatch } from "react-redux";

import React, { useState } from "react";

import './weatherInput.css';

function WeatherInput() {
  const APIKey = "72286ce12d54b7b4c80ee1f25861e9a1";
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    city: '',
  });
  async function weatherData(event) {
    event.preventDefault();
    if (form.city === '') {
      alert('Add values');
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKey}`,
        // `https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&appid=${APIKey}`,
      )
        .then((res) => res.json())
        .then((data) => data);

      dispatch(weatherAction.setWeather(data));
      console.log(data);
    }
  }

  const changeHandler = (event) => {
    // let name = event.target.name;
    let value = event.target.value;

    setForm({ city: value });

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
        />
        <button className="submit" onClick={(event) => weatherData(event)}>
          Submit
        </button>
      </form>
    </Fragment>
  );
}

export default WeatherInput;
