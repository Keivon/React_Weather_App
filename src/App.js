import React, {useEffect, useContext} from 'react';
import './App.css';
import { WeatherContext } from './Context';
import Current from './Components/Current';
import FiveDayForecast from './Components/FiveDayForecast';
import ProgressBar from './Components/ProgressBar';

function App() {
  const weatherContext = useContext(WeatherContext);
  useEffect(() => {
    
}, []);

weatherContext.state.isLoading ? console.log("Lo") : console.log(weatherContext.state);
return weatherContext.state.isLoading ? (
  <div>
    <p> Hey </p>
  </div>


) : (
      <div className=" App">
        <div className="container">
          <Current />
        </div>
        <div className="container">
          <ProgressBar />
        </div>
        <div className="container ">
          <FiveDayForecast />
        </div>
      </div>
  );
}

export default App;
