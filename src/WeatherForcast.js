import React, {useState} from 'react';
import "./WeatherForcast.css";

export default function WeatherForcast(){

    return (
<div className='WeatherForcast'>
   <div className='row'>
    <div className='col-2 day'>
        <div className='biggerText'>
            Fri
        </div>
        <div>
      <img src="https://github.com/Irenkawww/the-weather-app/blob/main/media/weather_2.jpg?raw=true" 
           width= "40%"
           alt= "description"
      /></div>
      <div className='biggerText'>15°<span className="smallText">7°</span></div>
    </div>
   </div>
</div>
)
}