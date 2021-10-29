import './App.css';
import React, { useState } from 'react'
import WeatherStatus from './components/WeatherStatus/WeatherStatus';
import Chart from 'chart.js/auto'
import Sidebar from './components/Sidebar/Sidebar';
import SideBarOpen from './components/Sidebar/SideBarOpen';

function App() {
  Chart.defaults.plugins.legend.onClick = {}

  // const [url, setUrl] = useState('https://sc.asumadi.ru/api/1/')
  const [url, setUrl] = useState('https://sc.asumadi.ru/api/')

  const setNewClimateZone = (url) => {
    setUrl(url)
  }

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
