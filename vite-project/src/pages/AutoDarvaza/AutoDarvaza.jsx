import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoDarvaza() {
  return (
    <>
    <div className="help-layout">

      <h2>krm</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

      <nav>
        <NavLink to="avtomatikdemirdarvaza">AvtomatikDemirDarvaza</NavLink>
        <NavLink to="doxsanderecedarvaza">DoxsanDereceDarvaza</NavLink>
        <NavLink to="xacilandarvaza ">XAcilanDarvaza </NavLink>
        <NavLink to="yanasurusendarvaza">YanaSurusenDarvaza</NavLink>
      </nav>

      <Outlet />

    </div>
  </>
  )
}

export default AutoDarvaza