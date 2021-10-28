import React from 'react'
import cl from './Zone.module.css'

export default function Zone(props) {
  return (
    <a className={props.id === 1 ? cl.zone + ' ' + cl.active : cl.zone} onClick={ (el) => {
      el.preventDefault()

      const zones = document.querySelectorAll('#mySidebar a')
      for(let i = 0; i < zones.length; i++) {
        zones[i].classList.remove(cl.active)
      }
      el.target.classList.add(cl.active)

      props.newUrl(`https://sc.asumadi.ru/api${props.id}/`)
    }} 
    href="#">Zone #{props.zoneNumber}</a>
  )
}
