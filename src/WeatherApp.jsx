import React, { useState } from 'react'
import './WeatherApp.css';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

const WeatherApp = () => {
let [weatherInfo , setWeatherInfo] = useState({
    city: "Delhi",
    feels: 39.05 ,
    humidity: 70,
    temp : 32.05,
    temp_max : 32.05,
    temp_min : 32.05,
    weather : "haze"
});
const updateInfo = (data ) => {
    setWeatherInfo(data);
}
return (
    <div className='MainDiv'>
      <h2>Weather App</h2>
      <SearchBox updateInfo= { updateInfo }/>
      <InfoBox info = {weatherInfo}/>
    </div>
  )
}

export default WeatherApp
