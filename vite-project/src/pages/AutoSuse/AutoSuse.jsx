import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
function AutoSuse() {
  const a = "Panorama Sistemi"
  const b = "Panoramanin Ustunlukleri"
  const aLink = 'panoramasistem'
  const bLink = 'panoramaustunluk'


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
        <SidebarMain text={text} link={link} />
        <main><Outlet /></main>
      </div>
    </>


  )
}

export default AutoSuse