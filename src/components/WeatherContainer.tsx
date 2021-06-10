import { useSelector } from "react-redux";
import { weatherAction } from "../store/weather";
import type { RootState, AppDispatch } from "../store/weather";
import { useDispatch } from "react-redux";

import WeatherDetail from "./WeatherDetail";
import WeatherInput from "./WeatherInput";
import "./weatherContainer.css";

const API_KEY: String = "72286ce12d54b7b4c80ee1f25861e9a1";

function Weather() {
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector<RootState>((state) => state.weather.weather);

  const fetchWeatherData = async (value: String) => {
    if (value) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${API_KEY}`
      ).then((res) => {
        return res.json();
      });
      dispatch(weatherAction.setWeather(data));
    }
  };

  return (
    <div className="weather">
      <span className="title">React Weather App</span>
      <br />
      <WeatherInput getWeatherData={fetchWeatherData} />

      {weather ? (
        <div>
          <WeatherDetail data={weather} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
