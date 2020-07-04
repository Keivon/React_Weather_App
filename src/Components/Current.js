import React, { useContext } from 'react';
import { WeatherContext } from '../Context';
import moment from 'moment';



function Current() {

  const weatherContext = useContext(WeatherContext);


 
  return (
      <div className="container current">

        <p>{weatherContext.state.currentF.name}</p>
        <p>{weatherContext.state.currentF.weather[0].main}</p>

      </div>
    );
}

export default Current;