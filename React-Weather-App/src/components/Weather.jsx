import React from 'react';
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
  return (
    <div className='weather'>
        
    <div className="search-bar">
        <input type='text' placeholder = 'Search'/>
        <img src={search_icon} alt=''/>
    </div>
    <img src={clear_icon} alt='' className='weather-icon'/>
    <p className='temperature'>16°c</p>
    <p className='location'>London</p>

    </div>
  )
}

export default Weather
