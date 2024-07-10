import SearchBox from "./SearchBox";
import Info from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    let[weatherInfo,SetweatherInfo]=useState({
    country: "IN",
    city: "Delhi",
    lat: 28.6667,
    lon: 77.2167,
    humidity: 84,
    temp: 31.05,
    temp_max: 31.05,
    temp_min: 31.05,
    feels_like: 38.05,
    weather: "Mist",
    wind: 2.06,
    pressure: 995,
    })

    function updateInfo(result){
        SetweatherInfo(result)
    }
  return (
    <div>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <Info info={weatherInfo}/>
    </div>
  );
}
