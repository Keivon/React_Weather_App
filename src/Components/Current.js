import React, { useContext } from 'react';
import { WeatherContext } from '../Context';




function Current() {

  const weatherContext = useContext(WeatherContext);


  weatherContext.state.isLoading ? console.log("Lo") : console.log(weatherContext.state.currentF);
  return weatherContext.state.isLoading ? (
    <div>
      <p> Hey </p>
    </div>


  ) : (
      <div>

        <p>{weatherContext.state.currentF.name}</p>
        <p>{weatherContext.state.currentF.weather[0].main}</p>

      </div>
    );
}

export default Current;