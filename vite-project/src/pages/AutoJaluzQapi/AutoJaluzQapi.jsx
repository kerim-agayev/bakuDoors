import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
function AutoJaluzQapi() {


  const a = "Avtomatik Jaluz Sistemleri"
  const b = "Avtomatik Jaluz Sistemleri Darvaza"
const aLink = 'autojaluz'
const bLink = 'autojaluzdarvaza'


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

export default AutoJaluzQapi