import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
function YuklemeRampasiBar() {
    const a = "Yükləmə Rampası"
    const b = "Gördüyümüz İşlər"
  const aLink = 'yuklememain'
  const bLink = 'yuklemeworks'
  
  
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
      <main>
        <Outlet />
      </main>
    </div>


    </>
  )
}

export default YuklemeRampasiBar