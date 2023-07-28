import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
function PergoleTentBar() {
    const a = "PERGOLE VƏ TENT SİSTEMLƏRİ"
    const b = "Gorduyumuz Isler"
    const aLink = 'pergoletentmain'
    const bLink = 'pergoletentourworks'
  
  
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

export default PergoleTentBar