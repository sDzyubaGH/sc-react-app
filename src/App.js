import './App.css';
import React from 'react'
import WeatherStatus from './components/WeatherStatus/WeatherStatus';
import Chart from 'chart.js/auto'

function App() {

  Chart.defaults.plugins.legend.onClick = {}

  // const URL = 'http://127.0.0.1:5000/api/'
  const URL = 'https://sc.asumadi.ru/api/'

  return (
    <div className="App">
      <WeatherStatus url={URL} type={'tmp'} />
      <WeatherStatus url={URL} type={'hum'} />
    </div>
  );
}

export default App;
