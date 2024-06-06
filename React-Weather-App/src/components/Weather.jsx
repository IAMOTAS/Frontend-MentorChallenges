import React, { useEffect, useState } from 'react';
import './Weather.css';
import clear_icon from '../assets/clear.png';
import clouds_icon from '../assets/search.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import mist_icon from '../assets/mist.png';
import rain_icon from '../assets/rain.png';
import search_icon from '../assets/search.png';
import snow_icon from '../assets/snow.png';
import wind from '../assets/wind.png';





const Weather = () => {

    const [weatherData, setweatherData] = useState(false)

    const allIcons = {
        "01d" : clear_icon,
        "01n" : clear_icon,
        "02d" : clouds_icon,
        "02n" : clouds_icon,
        "03d" : clouds_icon,
        "03n" : clouds_icon,
        "04d" : drizzle_icon,
        "04n" : drizzle_icon,
        "09d" : rain_icon,
        "09n" : rain_icon,
        "10d" : rain_icon,
        "10n" : rain_icon,
        "13d" : snow_icon,
        "13n" : snow_icon,
    }

    const search = async (city)=>{
        try{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch (url);
            const data = await response.json();
            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setweatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location: data.name,
                icon:icon
            })
        }
        catch(error){

        }
    }

useEffect(()=>{
    search("London");
},[])

  return (
    <div className='weather'>
        
    <div className="search-bar">
        <input type='text' placeholder = 'Search'/>
        <img src={search_icon} alt=''/>
    </div>
    <img src={clear_icon} alt='' className='weather-icon'/>
    <p className='temperature'>{weatherData.temperature}</p>
    <p className='location'>{weatherData.location}</p>

    <div className="weather-data">

<div className="col">
    <img src={humidity_icon} alt=''/>
</div>

<p>{weatherData.humidity}</p>
<span>Humidity</span>

<div className="col">
    <img src={wind} alt=''/>
</div>

<p>{weatherData.windSpeed}</p>
<span>wind Speed</span>


    </div>

    </div>
  )
}

export default Weather
