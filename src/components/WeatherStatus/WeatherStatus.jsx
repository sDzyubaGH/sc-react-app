import React, { Fragment, useState } from 'react'
import MyChart from '../Chart/MyChart'
import ButtonsRow from '../ButtonsRow/ButtonsRow'
import cl from './WeatherStatus.module.css'
import Checkbox from '../Checkbox/Checkbox'

export default function WeatherStatus(props) {
  const weatherType = props.type === 'tmp' ? 'tmp' : 'hum'
  // const queryType = props.type === 'tmp' ? '/hourTmp' : '/hourHum'

  // const [query, setQuery] = useState(props.url + queryType)
  const [btnValue, setBtnValue] = useState('hour')
  const [maxValues, setMaxValues] = useState(false)

  const getBtnValue = (value) => {
    setBtnValue(value)
    if (value === 'hour') setMaxValues(false)
  }

  const setChBStatus = (status) => {
    setMaxValues(status)
  }

  return (
    <div className={cl.weatherStatus}>
      {props.type === 'tmp' ? <h1>Показатели температуры</h1> : <h1>Показатели влажности</h1>}
      <ButtonsRow getBtnValue={getBtnValue} type={weatherType} />
      {btnValue !== 'hour' ? <Checkbox calcMaxValues={setChBStatus} /> : <Fragment />}
      <MyChart url={props.url} timeRange={btnValue} type={weatherType} calcMaxValues={maxValues} />
    </div>
  )
}
