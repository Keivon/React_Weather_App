import React, { useEffect, useContext, useState } from 'react';
import { WeatherContext } from '../Context';
import moment from 'moment';
import CountUp from 'react-countup';


function FiveDayForecast({progress}) {
  const weatherContext = useContext(WeatherContext);
const [reload, setreload] = useState(3);

  const DayBuilder = () => {
    return weatherContext.state.FiveDayF.map((day, ind) => (
      
      <li key={ind} className="list-group-item list-group2" >
        <i className="d-sm-flex justify-content-between ">
          <i className="text-alignment"><i className="mr-5">
            {moment(day.dt_txt).format('ddd')}</i>
            <i className="col">{ <CountUp end={Math.round(day.main.temp )} duration={reload} redraw={true}/> }°c
            </i></i><i className="col-6 mr-4"></i>
          <i className="col text-center"><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="Weather icon" /><span className="text-span">{day.weather[0].description}</span></i>
        </i>
      </li>
    ))
  }
  

  useEffect(() => {
    setreload(2)
    setTimeout(function(){ setreload(7) }, 200);
    
  },[progress]);


  return (
    <>
        <ul className="list-group " >
          {DayBuilder() }
         
        </ul>
        
    </>
  );
}

export default FiveDayForecast;