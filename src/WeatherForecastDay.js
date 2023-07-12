import React from 'react';
import "./WeatherForcast.css";

export default function WeatherForecastDay(props){

    function maxTemp(){
        let maxTempr=Math.round(props.data.temperature.maximum);
    return (`${maxTempr}°`);
    }

    function minTemp(){
        let minTempr=Math.round(props.data.temperature.minimum);
    return (`${minTempr}°`);
    }

    function day(){
        let date= new Date(props.data.time*1000);
        let day= date.getDay();
        let days=["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        return days[day];
    }

    return (<div>
        <div className='biggerText'>
            {day()} 
        </div>
        <div>
      <img src={props.data.condition.icon_url} 
           alt= {props.data.condition.description}
      /></div>
      <div className='biggerText'>{maxTemp()}<span className="smallText">{minTemp()}</span></div>
    </div>)
}

