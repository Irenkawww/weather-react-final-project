import React, {useState} from 'react';
import "./Weather.css";
import axios from "axios";
import ReadyDate from "./ReadyDate";

export default function Weather(props){
    const [weatherData,setWeatherData] = useState({ready : false});

    function handleResponse(response){
        setWeatherData({
        ready: true,
        temprature: response.data.temperature.current,
        city: response.data.city,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
        date: new Date(response.data.time*1000)
        })
      }
if (weatherData.ready) {
return ( 
    <div className='Weather'>
        <form>
        <div className='row'>
            <div className='col-9'>
                <input type='search' className='form-control' placeholder='Enter a city...' autoFocus="on"  />
            </div>
        <div className='col-3'>
            <input type='submit' value='Search' className='btn btn-primary w-100 buttonstyle' />
        </div>
     </div>
     </form>
     <h1>{weatherData.city}</h1>
     <ul>
        <li><ReadyDate date ={weatherData.date}/></li>
        <li className='text-capitalize'>{weatherData.description}</li>
     </ul>
      <div className='row'>
        <div className='col-7'>
         <img src={weatherData.icon} 
         alt= {weatherData.description}
          />
          <span className='temprature'>{Math.round(weatherData.temprature)}</span> 
          <span className='unit'>°C |°F </span>
        </div>
        <div className='col-5'>
            <ul>
             <li>Humidity: {weatherData.humidity} %</li>
             <li>Wind: {Math.round(weatherData.wind)} Km/H</li>
            </ul>
        </div>
     </div>
    </div>
    )
} else {
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=a1cc97bd036td82dc4266fcb58afc0of&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   return "Loading..."
}  
}