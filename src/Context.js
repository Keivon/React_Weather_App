import React, { useReducer} from 'react'
import reducer from'./reducer'




const initialState = { currentF: {}, FiveDayF: {}, isLoading: true, error: "" }
const WeatherContext = React.createContext(initialState);
function WeatherProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    

    return (
        <WeatherContext.Provider value={{ state, dispatch }}>
            {props.children}
        </WeatherContext.Provider>
    );
}
export { WeatherContext, WeatherProvider };