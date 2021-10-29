import React from 'react'
import cl from './SidebarOpen.module.css'
import sidebarCl from './Sidebar.module.css'

export default function SideBarOpen() {
  return (
    <div id="sidebarOpen" className={cl.sidebarOpen} onClick={() => {
      // document.querySelector('#mySidebar').style.width = '40%'
      document.querySelector('#mySidebar').classList.add(sidebarCl.active)

      document.querySelector('#sidebarOpen').style.left = '-200px'
    }}>
    <p>Зона</p>
  </div>
  )
}
