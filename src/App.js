import './App.css';
import React, { useState } from 'react'
import WeatherStatus from './components/WeatherStatus/WeatherStatus';
import Chart from 'chart.js/auto'
import Sidebar from './components/Sidebar/Sidebar';
import SideBarOpen from './components/Sidebar/SideBarOpen';

function App() {
  Chart.defaults.plugins.legend.onClick = {}

  const [url, setUrl] = useState('https://sc.asumadi.ru/api/')

  const setNewClimateZone = (url) => {
    setUrl(url)
  }

  // const URL = 'http://127.0.0.1:5000/api/'
  // const URL = 'https://sc.asumadi.ru/api/'

  return (
    <div className="App">
      <Sidebar setNewUrl={setNewClimateZone} />
      <SideBarOpen />
      <WeatherStatus url={url} type={'tmp'} />
      <WeatherStatus url={url} type={'hum'} />
    </div>
  );
}

export default App;
