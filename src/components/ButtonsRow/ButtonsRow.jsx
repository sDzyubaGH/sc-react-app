import React from 'react'
import Button from '../Button/Button'
import cl from './ButtonsRow.module.css'

export default function ButtonsRow({getBtnValue, calcMaxValues, ...props}) {

  const click = (value) => {
    getBtnValue(value)
  }

  return (
    <div className={cl.buttonsRow}>
      <Button click={click} type={props.type} value={'hour'}>Час</Button>
      <Button click={click} type={props.type} value={'day'}>День</Button>
      <Button click={click} type={props.type} value={'week'}>Неделя</Button>
    </div>
  )
}
