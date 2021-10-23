import React from 'react'
import cl from './Checkbox.module.css'

export default function Checkbox(props) {

  const getChBValue = (value) => {
    props.calcMaxValues(value)
  }

  return (
    <div className={cl.myInput}>
      <input onChange={(el) => getChBValue(el.target.checked)} type="checkbox" name={props.type} id={'max-values'} />
      <label htmlFor={'max-values'}>Макс. значения</label>
    </div>
  )
}
