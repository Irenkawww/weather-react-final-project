import React from 'react';
import "./Weather.css";

export default function Weather(){

    return ( 
    <div className='Weather'>
        <form>
        <div className='row'>
            <div className='col-9'>
                <input type='search' className='form-control' placeholder='Enter a city...'/>
            </div>
        <div className='col-3'>
            <input type='submit' value='Search' className='btn btn-primary' />
        </div>
     </div>
     </form>
     <h1>Oxford</h1>
     <ul>
        <li>Friday 12:00</li>
        <li>Clear Sky</li>
     </ul>
      <div className='row'>
        <div className='col-6'>
         <img src='https://github.com/Irenkawww/the-weather-app/blob/main/media/weather_2.jpg?raw=true' />
          20 °C |°F
        </div>
        <div className='col-6'>
            <ul>
             <li>Humidity: 62%</li>
             <li>Wind: 5 Km/H</li>
            </ul>
        </div>
     </div>
    </div>
    )
}