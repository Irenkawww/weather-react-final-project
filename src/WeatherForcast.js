import React, {useState, useEffect} from 'react';
import "./WeatherForcast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForcast(props){

    let [ready,setReady]=useState(false);
    let [forecastData,setForecastData]=useState(null);

    useEffect(() => {
     setReady(false);
    }, [props.coordinates]);

    function handleForecastResponse(response){
     setForecastData(response.data.daily);
     setReady(true);
    }
   
if (ready){
    return (
<div className='WeatherForcast'>
   <div className='row'>
    {forecastData.map(function(dailyForecast, index) {
    if (index<6){
    return (<div className='col-2' key={index}>
        <WeatherForecastDay data={dailyForecast} />
    </div>);}
    else {
return null;
    }
    })}
    
   </div>
</div>
);
} else {
    let key = "a1cc97bd036td82dc4266fcb58afc0of";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=metric`;

    axios.get(apiUrl).then(handleForecastResponse);
    return null;
}
}