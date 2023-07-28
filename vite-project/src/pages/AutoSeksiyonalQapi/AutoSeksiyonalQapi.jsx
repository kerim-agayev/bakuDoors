import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
function AutoSeksiyonalQapi() {
  
  const a = "Avtomatik Qaraj Qapilari"
  const b = "Avtomatik Senaye Qapilari"
const aLink = 'autoqaraj'
const bLink = 'autosenaye'


  const text = {
    a: a,
    b: b,
  };
  const link = {
    aLink: aLink,
    bLink: bLink,
  };



  return (
    <>
  
      <div className="content-container"> {/* Wrap both SidebarMain and Outlet */}
      <SidebarMain text={text} link = {link} />
      <main><Outlet/></main>
      </div>
    </>
  )
}

export default AutoSeksiyonalQapi