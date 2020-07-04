import React, { useReducer, useEffect } from 'react'

let toggle = true;

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                isLoading: false, currentF: action.payload[0],
                FiveDayF: action.payload[1], error: ""
            };
        case "FETCH_ERROR":
            return { ...state, error: "Fail to get data" };

        case "RELOAD_FETCH":
            toggle = toggle? false : true;
            return state;
        
        default:
            return state;
    }
};



const initialState = { currentF: {}, FiveDayF: {}, isLoading: true, error: ""}
const WeatherContext = React.createContext(initialState);
function WeatherProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    

    useEffect(() => {

       async  function fetchData() {
            const URL = [
                `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
                `http://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.REACT_APP_API_KEY}&units=metric`
            ]
            try {
                Promise.all([
                      fetch(URL[0]),
                     fetch(URL[1])
                ]).then((res) => Promise.all(res.map( v =>  v.json())))
                    .then( res => {
                         const dailyData = res[1].list.filter( reading => reading.dt_txt.includes("18:00:00"));
                        dispatch({ type: 'FETCH_SUCCESS', payload: [res[0], dailyData] })
                    })
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR' })
            }
        }
        
        fetchData()

    }, []);
    return (
        <WeatherContext.Provider value={{ state, dispatch }}>
            {props.children}
        </WeatherContext.Provider>
    );
}
export { WeatherContext, WeatherProvider };