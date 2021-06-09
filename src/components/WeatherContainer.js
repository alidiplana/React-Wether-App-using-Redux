import {useSelector} from 'react-redux';
import { weatherAction } from "../store/weather";
import { useDispatch } from "react-redux";


import DisplayWeather from "./DisplayWeather";
import "./weatherContainer.css";
import WeatherInput from "./WeatherInput";

function Weather() {

  const APIKey = "72286ce12d54b7b4c80ee1f25861e9a1";
  const dispatch = useDispatch();
  const weather = useSelector ((state) => state.weather.weather);
  const city = useSelector ((state) => state.weather.city);
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

  return (
    <div className="weather">
      <span className="title">React Weather App</span>
      <br />
      <WeatherInput/>
    
      {weather ? (
        <div>
          
          <DisplayWeather data={weather}/>
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
