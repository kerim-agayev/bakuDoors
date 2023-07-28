import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import SidebarMain from '../../components/sidebar/SidebarMain'
function AutoDarvaza() {


  const a = "AVTOMATİK 90 DƏRƏCƏ AÇILAN DARVAZALAR"
  const b = "YANA SÜRÜŞƏRƏK AÇILAN DARVAZALAR"
  const c = "AVTOMATİK DARVAZALAR"
  const d = "DƏMİR DARVAZALAR"
const aLink = 'doxsanderecedarvaza'
const bLink = 'yanasurusendarvaza'
const cLink = 'xacilandarvaza'
const dLink = 'avtomatikdemirdarvaza'

  const text = {
    a: a,
    b: b,
    c:c,
    d:d
  };
  const link = {
    aLink: aLink,
    bLink: bLink,
    cLink:cLink,
    dLink:dLink
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

export default AutoDarvaza