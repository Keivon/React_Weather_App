import React, { useEffect, useContext, useState } from 'react';
import './App.scss';
import { WeatherContext } from './Context';
import Current from './Components/Current';
import FiveDayForecast from './Components/FiveDayForecast';
import ProgressBar from './Components/ProgressBar';

function App() {
  
  const weatherContext = useContext(WeatherContext);
  const [progress, setprogress] = useState(0);

  


  useEffect(() => {
   
    async function fetchData() {
      let url = []
        if (window.location.protocol === 'http:') {
          url =[ `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
          `http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.REACT_APP_API_KEY}&units=metric`]   }
           else {
          url = [ `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
          `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.REACT_APP_API_KEY}&units=metric`] }
       
      try {
        Promise.all([
          fetch(url[0]),
          fetch(url[1])
        ]).then((res) => Promise.all(res.map(v => v.json())))
          .then(res => {
            const dailyData = res[1].list.filter(reading => reading.dt_txt.includes("18:00:00"));
            weatherContext.dispatch({ type: 'FETCH_SUCCESS', payload: [res[0], dailyData] })
          })
      } catch (error) {
        weatherContext.dispatch({ type: 'FETCH_ERROR' })
      }
    }

    const start = () => {
      setprogress("100%");
      fetchData();
    }
    start();
    const interval = setInterval(() => {
      setprogress("0%");
      fetchData();
      setprogress("100%");
    }, 61000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);



  
  return weatherContext.state.isLoading ? (
    <div>
      <p className="row justify-content-md-center"> ...Loading </p>
    </div>


  ) : (
      <div className=" App">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-md-7 ">
              <Current />
              <ProgressBar progress={progress} />
              <FiveDayForecast progress={progress} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
