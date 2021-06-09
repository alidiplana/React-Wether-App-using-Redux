import React, { Fragment } from "react";
import "./weatherDetail.css";
function WeatherDetail(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date();
  const dayName = days[day.getDay()];
  const { data } = props;
  const iconURL =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  return (
    <div className="display-weather">
      {data.cod !== 404 ? (
        <Fragment>
          <div className="main-card">
            <span className="card-title">
              {data.name} , {data.sys.country}. Weather
            </span>
            <span className="card-subtitle">
              {dayName} of {new Date().toLocaleTimeString()}
            </span>
            <span className="weather-description">
              {data.weather[0].description}
            </span>
            <h1 className="temperature-container">
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            {/* <span className="weather-main">{data.weather[0].main}</span> */}
            <img className="weather-icon" src={iconURL} alt="" srcSet="" />
          </div>
          <h4>High/Low</h4>
          {Math.floor(data.main.temp_max - 273.15)}/
          {Math.floor(data.main.temp_min - 273.15)}
          <h4>Humidity</h4>
          <span>{data.main.humidity} %</span>
          <h4>Pressure</h4>
          <span>{data.main.pressure} hPa</span>
          <h4>Visibility</h4>
          <span>{data.visibility / 1000} Km</span>
          <h4>Wind</h4>
          <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
          <h4>Wind Direction</h4>
          <span>
            {data.wind.deg}
            <sup>o</sup> deg
          </span>
          <h4>Sunrise</h4>
          {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
          <h4>Sunset</h4>
          {new Date(data.sys.sunset * 1000).toLocaleTimeString()}



        </Fragment>
      ) : (
        <div className="main-card">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default WeatherDetail;
