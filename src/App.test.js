
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import App from './App';
import reducer from "./reducer";
import { WeatherProvider, WeatherContext} from './Context'


const renderWithContext = (
  component) => {
  return {
    ...render(
        <WeatherProvider value={WeatherContext}>
            {component}
        </WeatherProvider>)
  }
}

afterEach(cleanup);

it('checks to see if the api call was a success', async () => {
    const { findByText } = renderWithContext(<App />)
    const items = await findByText(/London/)
    expect(items).toBeInTheDocument() 
    
  
})







test("fetch success", async () => {
  const state = {  currentF: {}, FiveDayF: {}, isLoading: true, error: ""  };
  const newState = reducer(state, { type: "FETCH_SUCCESS", payload: [{data:"current data"},{data:"FiveDay data"}] });

  expect(newState.isLoading).toEqual(false);
});

test("fetch error", async () => {
  const state = {  isLoading: false, currentF: {data:"data"},
    FiveDayF:  {data:"data"}, error: "" };
  const newState = reducer(state, { type: "FETCH_ERROR" });

  expect(newState.error).toEqual("Fail to get data");
});

test("fetch error and keep old state", async () => {
  const state = {  isLoading: false, currentF: {data:"current data"},
    FiveDayF:  {data:"FiveDay data"}, error: "" };
  const newState = reducer(state, { type: "FETCH_ERROR" });

  expect(newState.currentF.data).toEqual("current data");
});