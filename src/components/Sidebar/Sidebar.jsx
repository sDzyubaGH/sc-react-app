import React from 'react'
import Zone from '../Zone/Zone'
import cl from './Sidebar.module.css'

export default function Sidebar(props) {

  const closeSidebar = () => {
    // document.querySelector('#mySidebar').style.width = '0'
    document.querySelector('#mySidebar').classList.remove(cl.active)

    setTimeout(() => {
      document.querySelector('#sidebarOpen').style.left = '0'
    }, 300)
  }

  const zones = [1, 2, 3, 4]

  return (
    <div id="mySidebar" className={cl.sidebar}>
      <a href={void (0)}
        className={cl.closebtn}
        onClick={closeSidebar}>&times;</a>
      <h1>Зоны</h1>
      {zones.map((el, index) => {
        return <Zone newUrl={props.setNewUrl} id={index + 1} key={index} zoneNumber={index + 1}></Zone>
      })}
    </div>
  )
}
