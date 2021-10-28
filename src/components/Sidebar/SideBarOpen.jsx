import React from 'react'
import cl from './SidebarOpen.module.css'

export default function SideBarOpen() {
  return (
    <div id="sidebarOpen" className={cl.sidebarOpen} onClick={() => {
      document.querySelector('#mySidebar').style.width = '30%'
      document.querySelector('#sidebarOpen').style.left = '-100px'
    }}>
    <p>Выбрать зону</p>
  </div>
  )
}
