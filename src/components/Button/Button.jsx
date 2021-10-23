import React from 'react'
import cl from './Button.module.css'

export default function Button(props) {
  function removeActiveClass(type) {
    const btns = document.querySelectorAll('.' + type)

    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove(cl.active)
    }
  }

  return (
    <button className={`${cl.btn} 
    ${props.type === 'tmp'
        ? cl.tmp
        : cl.hum} 
        ${props.value === 'hour'
        ? cl.active
        : ''}`}
      onClick={(el) => {
        removeActiveClass(props.type === 'tmp' ? cl.tmp : cl.hum)
        el.target.classList.add(cl.active)

        props.click(el.target.value)
      }}
      value={props.value}>
      {props.children}
    </button>
  )
}
