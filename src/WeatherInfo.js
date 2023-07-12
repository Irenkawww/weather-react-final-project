import React from 'react';
import ReadyDate from "./ReadyDate";
import WeatherUnitConversion from "./WeatherUnitConversion";

export default function WeatherInfo(props){
return (
<div className='WeatherInfo'>
<h1>{props.data.city}</h1>
     <ul>
        <li><ReadyDate date ={props.data.date}/></li>
        <li className='text-capitalize'>{props.data.description}</li>
     </ul>
      <div className='row'>
        <div className='col-7'>
         <img src={props.data.icon} 
         alt= {props.data.description}
          />
          <WeatherUnitConversion celsius={props.data.temprature} />
       </div>
        <div className='col-5'>
            <ul>
             <li>Humidity: {props.data.humidity} %</li>
             <li>Wind: {Math.round(props.data.wind)} Km/H</li>
            </ul>
        </div>
     </div></div>)
}