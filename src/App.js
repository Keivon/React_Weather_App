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

  return (
      <div className="App">
        <div className="Current">
          <Current />
        </div>
        <div className="ProgressBar">
          <ProgressBar />
        </div>
        <div className="FiveDayForecast">
          <FiveDayForecast />
        </div>
      </div>
  );
}

export default App;
