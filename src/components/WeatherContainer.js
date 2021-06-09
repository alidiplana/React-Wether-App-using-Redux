import {useSelector} from 'react-redux';

import DisplayWeather from "./DisplayWeather";
import "./weatherContainer.css";
import WeatherInput from "./WeatherInput";

function Weather() {
  
  const weather = useSelector ((state) => state.weather.weather)

  return (
    <div className="weather">
      <span className="title">React Weather App</span>
      <br />
      <WeatherInput/>
    
      {weather ? (
        <div>
          <DisplayWeather data={weather} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
