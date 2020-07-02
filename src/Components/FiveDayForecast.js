import React, { useContext } from 'react';
import { WeatherContext } from '../Context';


function FiveDayForecast() {
  const weatherContext = useContext(WeatherContext);






  weatherContext.state.isLoading ? console.log("Lo") : console.log(weatherContext.state.FiveDayF);
  return weatherContext.state.isLoading ? (
    <div>
      <p> Hey </p>
    </div>


  ) : (
      <div>
{weatherContext.state.FiveDayF.map((day, ind) => (




<div key={ind} className="card">

  <p>{day.weather[0].main}</p>
  
</div>

))}

      </div>
    );
}

export default FiveDayForecast;