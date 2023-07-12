import React, {useState} from 'react';

export default function WeatherUnitConversion(props){
const [unit,setUnit] = useState("celsius");

function displayF(event){
event.preventDefault();
setUnit("F")
}

function displayCelsius(event){
event.preventDefault();
setUnit("celsius")
}

if (unit === "celsius") {    
return (
        <span className='WeatherUnitConversion'>
          <span className='temprature'>{Math.round(props.celsius)}</span> 
          <span className='unit'>°C | <a href="/" onClick={displayF}>F</a></span>
        </span>
    )}
    else {
        return (
          <span className='WeatherUnitConversion'>
          <span className='temprature'>{Math.round((props.celsius*9/5) + 32)}</span> 
          <span className='unit'>°<a href="/" onClick={displayCelsius}>C</a> | F </span>
        </span>)
    }
}
