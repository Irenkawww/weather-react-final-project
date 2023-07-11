import React, {useState} from 'react';
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    const [weatherData,setWeatherData] = useState({ready : false});
    const [city,setCity] = useState(props.defaultCity);

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

      function search(){
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=a1cc97bd036td82dc4266fcb58afc0of&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      }
      
      function handleSubmit(event){
        event.preventDefault();
        search();
      }
      function handleCityChange(event){
        setCity(event.target.value);
      }
if (weatherData.ready) {
return ( 
    <div className='Weather'>
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-9'>
                <input type='search' className='form-control' placeholder='Enter a city...' autoFocus="on" onChange={handleCityChange} />
            </div>
        <div className='col-3'>
            <input type='submit' value='Search' className='btn btn-primary w-100 buttonstyle' />
        </div>
     </div>
     </form>
     <WeatherInfo data={weatherData}/>
    </div>
    )
} else {
    search();
   return "Loading..."
}  
}