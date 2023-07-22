import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
function AutoBaryer() {
  return (
    <>
      <div className="help-layout">

        <h2>krm</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

        <nav>
          <NavLink to="vesor">autoqaraj</NavLink>
          <NavLink to="slaqbaum">autosenaye</NavLink>
        </nav>

        <Outlet />

      </div>
    </>
  )
}

export default AutoBaryer