import React, { useContext } from 'react';
import { WeatherContext } from '../Context';
import moment from 'moment';


function FiveDayForecast() {
  const weatherContext = useContext(WeatherContext);

  const DayBuilder = () => {
    return weatherContext.state.FiveDayF.map((day, ind) => (
      <li key={ind} className="list-group-item list-group2">
        <i className="d-flex justify-content-between ">
          <i className="text-alignment"><i className="mr-5">{moment(new Date().setTime(day.dt * 1000)).format('ddd')}</i>
            <i className="mr-1">{Math.round(day.main.temp)}°c</i></i>
          <i className="col-1 text-center"><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="Weather icon" /><span>{day.weather[0].description}</span></i>
        </i>
      </li>
    ))
  }



  return (
    <div className="row justify-content-md-center">
      <div className="col-md-7 ">
        <ul className="list-group">
          {DayBuilder()}
        </ul>
      </div>
    </div>
  );
}

export default FiveDayForecast;