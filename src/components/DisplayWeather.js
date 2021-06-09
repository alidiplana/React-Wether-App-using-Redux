import React, { Fragment } from 'react';
import './displayWeather.css';
function DisplayWeather(props) {
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = new Date();
  const dayName = days[day.getDay()];
  const { data } = props;
  const iconURL =
    'http://openweathermap.org/img/wn/' +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    '.png';
  return (
    <div className='display-weather'>
      {data.cod !== 404 ? (
        <Fragment>
          <div className='main-card'>
            <span className='card-title'>
              {data.name} , {data.sys.country}. Weather
            </span>
            <span className='card-subtitle'>
              {dayName} of {new Date().toLocaleTimeString()}
            </span>
            <span className='weather-description'>
              {data.weather[0].description}
            </span>
            <h1 className='temperature-container'>
              {Math.floor(data.main.temp - 273.15)}
              <sup>o</sup>
            </h1>
            {/* <span className="weather-main">{data.weather[0].main}</span> */}
            <img className='weather-icon' src={iconURL} alt='' srcSet='' />
            
          </div>
          <div className='weather-details'>
            <div className="section1">
              <table>
                <tbody>
                  
                    <h4>High/Low</h4>
                  
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                </tbody>
                <tbody>
                  
                    <h4>Humidity</h4>
                  
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tbody>
                <tbody>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <span>{data.main.pressure} hPa</span>
                  </td>
                </tbody>
                <tbody>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Km</span>
                  </td>
                </tbody>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="main-card">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
