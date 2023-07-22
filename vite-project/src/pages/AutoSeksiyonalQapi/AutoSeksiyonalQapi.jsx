import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoSeksiyonalQapi() {
  return (
    <>
      <div className="help-layout">

        <h2>krm</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

        <nav>
          <NavLink to="autoqaraj">autoqaraj</NavLink>
          <NavLink to="autosenaye">autosenaye</NavLink>
        </nav>

        <Outlet />

      </div>
    </>
  )
}

export default AutoSeksiyonalQapi