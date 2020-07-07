import React, { useContext } from 'react';
import { WeatherContext } from '../Context';




function Current() {

  const weatherContext = useContext(WeatherContext);


 
  return (
    
      <div className="container current-container">
      <div className="row">
        <div className="col-sm current-text">
        <p>{weatherContext.state.currentF.name}</p>
        </div>
        <div className="col-sm">
        <img src={`http://openweathermap.org/img/wn/${weatherContext.state.currentF.weather[0].icon}.png`}
            alt="Weather icon" />
        </div>
        <div className="col-sm text-right">
        <p>{Math.round(weatherContext.state.currentF.main.temp)}°c</p>
        <p>Feels like {Math.round(weatherContext.state.currentF.main.feels_like)}°c</p>
        </div>
      </div>
    </div>
    );
}

export default Current;